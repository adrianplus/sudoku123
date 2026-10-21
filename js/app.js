(()=>{"use strict";
const L={
row:{step:1,title:"第一步：橫排",mode:"row",text:"請看這一橫排的四個位置。1、2、3、4 各出現一次，找出缺少的數字。",need:3},
column:{step:2,title:"第二步：直排",mode:"column",text:"請看這一直排的四個位置。1、2、3、4 各出現一次，找出缺少的數字。",need:3},
box:{step:3,title:"第三步：四宮格",mode:"box",text:"請看這個四宮格的四個位置。1、2、3、4 各出現一次，找出缺少的數字。",need:3},
rowcol:{step:4,title:"第四步：橫排＋直排",mode:"rowcol",text:"請同時參考問號所在的橫排與直排線索，找出唯一正確的數字。",need:5},
threeways:{step:5,title:"第五步：同時考慮三個方向",mode:"threeways",text:"請觀察問號周圍三個方向的線索，合併判斷缺少的數字。",need:5},
boxways:{step:6,title:"第六步：宮＋直排＋橫排",mode:"boxways",text:"請同時觀察問號所在的四宮格、直排與橫排，合併三種線索找出答案。",need:5}
};
const $=id=>document.getElementById(id),home=$("home"),game=$("game"),grid=$("grid"),feedback=$("feedback"),modal=$("modal"),next=$("next"),modalHome=$("modal-home"),hint=$("hint"),buttons=Array.from(document.querySelectorAll(".pad button")),sm=$("font-smaller"),lg=$("font-larger");
const STORAGE_KEY="lezaiblingzhong_sudoku_progress_v3";let font=1,current=null,currentId=null,missing=0,streak=0,q=1,answered=false,timer=null;
const levels=["font-small","font-normal","font-large","font-xlarge"];let progressData={completed:[],lastCompleted:null};
function loadProgress(){try{const raw=localStorage.getItem(STORAGE_KEY)||localStorage.getItem("lezaiblingzhong_sudoku_progress_v2");if(raw){const s=JSON.parse(raw);if(s&&Array.isArray(s.completed)){progressData.completed=s.completed.filter(id=>L[id]);progressData.lastCompleted=L[s.lastCompleted]?s.lastCompleted:(progressData.completed[progressData.completed.length-1]||null)}}}catch(e){}}
function saveProgress(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(progressData));}catch(e){say("本次已完成，但瀏覽器無法保存進度。","bad")}}
function updateHomeProgress(){const n=progressData.completed.length;$("completed-count").textContent=String(n);const b=$("resume-progress");b.disabled=n===0;b.setAttribute("aria-label",`已完成 ${n}/100，點擊回到上次完成的任務`);b.title=n?`回到上次完成的任務：${L[progressData.lastCompleted]?.title||""}`:"完成第一個任務後，就能從這裡回到上次完成的任務"}
function fontApply(){document.body.classList.remove(...levels);document.body.classList.add(levels[font]);sm.disabled=font===0;lg.disabled=font===3}
function say(t,k=""){feedback.textContent=t;feedback.className=k}
function start(id){if(!L[id])return;clearTimeout(timer);modal.classList.add("hidden");currentId=id;current=L[id];streak=0;q=1;home.classList.add("hidden");game.classList.remove("hidden");game.classList.toggle("column-layout",id==="column");$("title").textContent=current.title;$("progress").textContent=current.step;$("instruction").textContent=current.text;render();window.scrollTo(0,0)}
function render(){
 answered=false;buttons.forEach(b=>{b.disabled=false;b.blur()});hint.disabled=false;
 say("請觀察格子，再選擇下方數字。");$("question").textContent=`第 ${q} 題`;grid.innerHTML="";
 grid.style.width="";grid.style.height="";grid.style.aspectRatio="";
 if(current.mode==="row"||current.mode==="column"||current.mode==="box"){
  let a=[1,2,3,4];for(let i=3;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}
  let gap=Math.floor(Math.random()*4);missing=a[gap];grid.className=current.mode;
  a.forEach((n,i)=>{let c=document.createElement("div");c.className="cell";if(i===gap){c.classList.add("missing");c.dataset.gap="1"}else c.textContent=n;grid.appendChild(c)});return;
 }
 grid.className="sparse "+current.mode;
 // Only render the cells needed for the deduction. No filled 4x4 board.
 let cells=[];
 if(current.mode==="sudoku"){
  // A 4x4 grid with exactly one missing cell (step 4).
  const solution=[[1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]];
  const r=Math.floor(Math.random()*4),c=Math.floor(Math.random()*4);missing=solution[r][c];
  grid.className="sudoku";grid.style.gridTemplateColumns="repeat(4,minmax(0,1fr))";grid.style.gridTemplateRows="repeat(4,minmax(0,1fr))";grid.style.width="min(100%,420px)";grid.style.aspectRatio="1";
  for(let rr=0;rr<4;rr++)for(let cc=0;cc<4;cc++){let v=document.createElement("div");v.className="cell sudoku-cell";v.style.border="1px solid #718096";if(cc===1)v.style.borderRightWidth="3px";if(rr===1)v.style.borderBottomWidth="3px";if(rr===r&&cc===c){v.classList.add("missing");v.dataset.gap="1"}else v.textContent=solution[rr][cc];grid.appendChild(v)}return;
 }
 if(current.mode==="boxways"){
  // Step 6: create a valid 4x4 Sudoku solution, then reveal only a sparse
  // subset of clues from the target's row, column, and 2x2 box. Each unit
  // alone leaves candidates; together the three units uniquely determine the answer.
  const baseBoard=[[1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]];
  const perm=[1,2,3,4].sort(()=>Math.random()-0.5);
  const board=baseBoard.map(row=>row.map(v=>perm[v-1]));
  const tr=Math.floor(Math.random()*4),tc=Math.floor(Math.random()*4);
  missing=board[tr][tc];
  const peers={
    row:[0,1,2,3].filter(c=>c!==tc).map(c=>({r:tr,c,v:board[tr][c]})),
    col:[0,1,2,3].filter(r=>r!==tr).map(r=>({r,c:tc,v:board[r][tc]})),
    box:[Math.floor(tr/2)*2,Math.floor(tr/2)*2+1].flatMap(r=>[Math.floor(tc/2)*2,Math.floor(tc/2)*2+1].map(c=>({r,c,v:board[r][c]}))).filter(x=>!(x.r===tr&&x.c===tc))
  };
  const masks=[1,2,3,4,5,6,7];
  let chosen=null;
  for(let tries=0;tries<300&&!chosen;tries++){
    const picks={};
    for(const unit of ["row","col","box"]){
      const arr=peers[unit],mask=masks[Math.floor(Math.random()*masks.length)];
      picks[unit]=arr.filter((x,i)=>(mask&(1<<i))!==0);
    }
    const sets={};
    for(const unit of ["row","col","box"])sets[unit]=new Set(picks[unit].map(x=>x.v));
    const union=new Set([...sets.row,...sets.col,...sets.box]);
    const expected=new Set([1,2,3,4].filter(v=>v!==missing));
    const allCovered=[...expected].every(v=>union.has(v))&&union.size===3;
    const eachAmbiguous=["row","col","box"].every(u=>sets[u].size<3);
    const eachContributes=["row","col","box"].every(u=>{
      const others=new Set([...sets[ u==="row"?"col":"row"],...sets[u==="box"?"col":"box"]]);
      const other2=new Set(["row","col","box"].filter(v=>v!==u).flatMap(v=>[...sets[v]]));
      return [...sets[u]].some(v=>!other2.has(v));
    });
    if(allCovered&&eachAmbiguous&&eachContributes)chosen=picks;
  }
  if(!chosen){
    // Safe fallback: reveal all three peers from each unit; answer still follows Sudoku rules.
    chosen={row:peers.row,col:peers.col,box:peers.box};
  }
  const clueMap=new Map();
  for(const unit of ["row","col","box"])for(const x of chosen[unit])clueMap.set(`${x.r},${x.c}`,x.v);
  grid.className="sudoku sparse-board boxways";
  grid.style.gridTemplateColumns="repeat(4,minmax(0,1fr))";grid.style.gridTemplateRows="repeat(4,minmax(0,1fr))";
  grid.style.width="min(100%,480px)";grid.style.aspectRatio="1";grid.style.height="auto";
  for(let r=0;r<4;r++)for(let c=0;c<4;c++){
    const item=document.createElement("div");item.className="cell sudoku-cell sparse-board-cell empty-clue";
    item.style.border="1px solid #d8d8d8";if(c===1)item.style.borderRightWidth="3px";if(r===1)item.style.borderBottomWidth="3px";
    if(r===tr&&c===tc){item.className="cell sudoku-cell sparse-board-cell missing";item.dataset.gap="1"}
    else if(clueMap.has(`${r},${c}`)){item.classList.remove("empty-clue");item.style.borderColor="#718096";item.textContent=String(clueMap.get(`${r},${c}`))}
    grid.appendChild(item);
  }
  return;
 }
 if(current.mode==="threeways"){
  // Step 5: keep the full 4x4 grid, but show only the question mark and
  // three clues on three different arms (up/down/left/right).
  const vals=[1,2,3,4];
  const shuffled=vals.slice().sort(()=>Math.random()-0.5);
  missing=shuffled[0];
  const clues=shuffled.slice(1);
  const targetRow=1+Math.floor(Math.random()*2);
  const targetCol=1+Math.floor(Math.random()*2);
  const directions=["up","down","left","right"].sort(()=>Math.random()-0.5).slice(0,3);
  const clueCells=[];
  directions.forEach((dir,i)=>{
    if(dir==="up")clueCells.push({r:0,c:targetCol,v:clues[i]});
    if(dir==="down")clueCells.push({r:3,c:targetCol,v:clues[i]});
    if(dir==="left")clueCells.push({r:targetRow,c:0,v:clues[i]});
    if(dir==="right")clueCells.push({r:targetRow,c:3,v:clues[i]});
  });
  grid.className="sudoku sparse-board threeways";
  grid.style.gridTemplateColumns="repeat(4,minmax(0,1fr))";
  grid.style.gridTemplateRows="repeat(4,minmax(0,1fr))";
  grid.style.width="min(100%,480px)";grid.style.aspectRatio="1";grid.style.height="auto";
  for(let r=0;r<4;r++)for(let c=0;c<4;c++){
    const item=document.createElement("div");
    item.className="cell sudoku-cell sparse-board-cell empty-clue";
    item.style.border="1px solid #d8d8d8";
    if(c===1)item.style.borderRightWidth="3px";
    if(r===1)item.style.borderBottomWidth="3px";
    if(r===targetRow&&c===targetCol){
      item.className="cell sudoku-cell sparse-board-cell missing";item.dataset.gap="1";
    }else{
      const clue=clueCells.find(x=>x.r===r&&x.c===c);
      if(clue){item.classList.remove("empty-clue");item.style.borderColor="#718096";item.textContent=String(clue.v);}
    }
    grid.appendChild(item);
  }
  return;
 }
 if(current.mode==="rowcol"){
  // Step 4: always show a 4x4 grid. Only the row and column clues are populated.
  // The target row has two known numbers and the target column has one clue;
  // the intersection is the question mark.
  const vals=[1,2,3,4];
  missing=vals[Math.floor(Math.random()*4)];
  const distractor=vals.filter(v=>v!==missing)[Math.floor(Math.random()*3)];
  const rowClues=vals.filter(v=>v!==missing&&v!==distractor);
  const targetRow=Math.floor(Math.random()*4);
  const targetCol=Math.floor(Math.random()*4);
  const rowPositions=[0,1,2,3].filter(c=>c!==targetCol);
  const cluePositions=rowPositions.sort(()=>Math.random()-0.5).slice(0,2);
  const rowVals={};rowVals[cluePositions[0]]=rowClues[0];rowVals[cluePositions[1]]=rowClues[1];
  const colRow=[0,1,2,3].filter(r=>r!==targetRow)[Math.floor(Math.random()*3)];
  grid.className="sudoku sparse-board rowcol";
  grid.style.gridTemplateColumns="repeat(4,minmax(0,1fr))";
  grid.style.gridTemplateRows="repeat(4,minmax(0,1fr))";
  grid.style.width="min(100%,480px)";grid.style.aspectRatio="1";grid.style.height="auto";
  for(let r=0;r<4;r++){
    for(let c=0;c<4;c++){
      const item=document.createElement("div");
      item.className="cell sudoku-cell sparse-board-cell";
      item.style.border="1px solid #718096";
      if(c===1)item.style.borderRightWidth="3px";
      if(r===1)item.style.borderBottomWidth="3px";
      if(r===targetRow&&c===targetCol){
        item.classList.add("missing");item.dataset.gap="1";
      }else if(r===targetRow&&Object.prototype.hasOwnProperty.call(rowVals,c)){
        item.textContent=String(rowVals[c]);
      }else if(c===targetCol&&r===colRow){
        item.textContent=String(distractor);
      }else{
        item.classList.add("empty-clue");
      }
      grid.appendChild(item);
    }
  }
  return;
 }
}
function answer(n){if(answered)return;if(n===missing){answered=true;streak++;const c=grid.querySelector("[data-gap]");if(c){c.className="cell filled sudoku-cell";c.textContent=String(n);c.removeAttribute("data-gap")}buttons.forEach(b=>b.disabled=true);hint.disabled=true;say(`答對了！目前連續答對 ${streak} / ${current.need} 題。`,"good");timer=setTimeout(()=>{if(streak>=current.need)complete();else{q++;render()}},streak>=current.need?450:650)}else{streak=0;say("再想一想！請重新觀察線索。","bad");setTimeout(()=>{if(!answered)say("沒關係，慢慢找。請再選一次。")},900)}}
function complete(){if(!progressData.completed.includes(currentId))progressData.completed.push(currentId);progressData.lastCompleted=currentId;updateHomeProgress();saveProgress();let nextId=({row:"column",column:"box",box:"rowcol",rowcol:"threeways",threeways:"boxways"})[currentId]||null;$("modal-title").textContent=current.title+"完成了！";$("modal-message").textContent=nextId?`你已連續答對 ${current.need} 題，做得很好！接下來繼續挑戰下一步吧。`:"你已完成目前六個練習步驟！做得很好。接下來可以回到主頁。";next.classList.toggle("hidden",!nextId);next.dataset.id=nextId||"";modal.classList.remove("hidden");(nextId?next:modalHome).focus()}
function goHome(){clearTimeout(timer);modal.classList.add("hidden");game.classList.add("hidden");home.classList.remove("hidden");current=null;currentId=null;updateHomeProgress();window.scrollTo(0,0)}
document.querySelectorAll(".start").forEach(b=>b.addEventListener("click",()=>start(b.dataset.id)));buttons.forEach(b=>b.addEventListener("click",()=>answer(Number(b.dataset.n))));$("home-top").addEventListener("click",goHome);modalHome.addEventListener("click",goHome);next.addEventListener("click",()=>{if(next.dataset.id)start(next.dataset.id)});$("resume-progress").addEventListener("click",()=>{if(progressData.lastCompleted)start(progressData.lastCompleted)});hint.addEventListener("click",()=>{if(current&&!answered)say("提示：缺少的數字是 "+missing+"。")});sm.addEventListener("click",()=>{if(font>0){font--;fontApply()}});lg.addEventListener("click",()=>{if(font<3){font++;fontApply()}});loadProgress();updateHomeProgress();fontApply()
})();