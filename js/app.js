(()=>{"use strict";
const L={
row:{step:1,title:"第一步：橫排",mode:"row",text:"請看這一橫排的四個位置。1、2、3、4 各出現一次，找出缺少的數字。",need:3},
column:{step:2,title:"第二步：直排",mode:"column",text:"請看這一直排的四個位置。1、2、3、4 各出現一次，找出缺少的數字。",need:3},
box:{step:3,title:"第三步：四宮格",mode:"box",text:"請看這個四宮格的四個位置。1、2、3、4 各出現一次，找出缺少的數字。",need:3},
rowcol:{step:4,title:"第四步：橫排＋直排",mode:"rowcol",text:"請同時參考問號所在的橫排與直排線索，找出唯一正確的數字。",need:5},
threeways:{step:5,title:"第五步：同時考慮三個方向",mode:"threeways",text:"請觀察問號周圍三個方向的線索，合併判斷缺少的數字。",need:5},
boxways:{step:6,title:"第六步：宮＋直排＋橫排",mode:"boxways",text:"請同時觀察問號所在的四宮格、直排與橫排，合併三種線索找出答案。",need:5},
advanced:{step:7,title:"第七步：找出真正有用的線索",mode:"advanced",text:"棋盤上有些數字和問號無直接關係。請判斷問號所在的橫排、直排與四宮格，找出唯一答案。所有數字顏色相同，請靠規則判斷。",need:5},
classic:{step:8,title:"第八步：4X4數獨練習",mode:"classic",text:"依照一到六的順序解題。每答對一格，答案就會保留在棋盤上，再繼續下一個位置。",need:6},
practical:{step:9,title:"第九步：4X4數獨實戰",mode:"practical",text:"先選擇棋盤上的空格，再按下方數字填入。填好後按「檢查」；答錯的數字會標紅，不會直接公布答案。",need:1},
breakthrough:{step:10,title:"第十步：找到4X4數獨的破局點",mode:"breakthrough",text:"觀察棋盤，找出第一個可以確定答案的格子。選擇空格並填入數字；答對立即進入下一題，答錯會標紅，請重新尋找。",need:1},
graduate1:{step:11,title:"第十一步：4X4數獨畢業考（1/3）",mode:"graduate",text:"畢業考第一題：自行選擇空格並填入數字。填好後按「檢查」；錯誤數字會標紅，不會直接公布答案。全部填完且正確才能通過。",need:1},
graduate2:{step:12,title:"第十二步：4X4數獨畢業考（2/3）",mode:"graduate",text:"畢業考第二題：自行選擇空格並填入數字。填好後按「檢查」；錯誤數字會標紅，不會直接公布答案。全部填完且正確才能通過。",need:1},
graduate3:{step:13,title:"第十三步：4X4數獨畢業考（3/3）",mode:"graduate",text:"畢業考第三題：自行選擇空格並填入數字。填好後按「檢查」；錯誤數字會標紅，不會直接公布答案。全部填完且正確才能通過。",need:1},
step14:{step:14,title:"第十四步：什麼是6×6數獨（第一類）",mode:"sixintro",text:"數獨三個規則：\n1. 直排1～6不重複\n2. 橫排1～6不重複\n3. 每個六宮格1～6不重複\n請利用「直、橫、六宮」不重複的原則，解出這一題。",need:1}
};
const $=id=>document.getElementById(id),home=$("home"),game=$("game"),grid=$("grid"),feedback=$("feedback"),modal=$("modal"),next=$("next"),modalHome=$("modal-home"),hint=$("hint"),buttons=Array.from(document.querySelectorAll(".pad button")),sm=$("font-smaller"),lg=$("font-larger");
const STORAGE_KEY="lezaiblingzhong_sudoku_progress_v3";let font=1,current=null,currentId=null,missing=0,streak=0,q=1,answered=false,timer=null,classicIndex=0,selectedCell=null,hintUsed=0;
const levels=["font-small","font-normal","font-large","font-xlarge"];let progressData={completed:[],lastCompleted:null};
function loadProgress(){try{const raw=localStorage.getItem(STORAGE_KEY)||localStorage.getItem("lezaiblingzhong_sudoku_progress_v2");if(raw){const s=JSON.parse(raw);if(s&&Array.isArray(s.completed)){progressData.completed=s.completed.filter(id=>L[id]);progressData.lastCompleted=L[s.lastCompleted]?s.lastCompleted:(progressData.completed[progressData.completed.length-1]||null)}}}catch(e){}}
function saveProgress(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(progressData));}catch(e){say("本次已完成，但瀏覽器無法保存進度。","bad")}}
function updateHomeProgress(){const n=progressData.completed.length;$("completed-count").textContent=String(n);const b=$("resume-progress");b.disabled=n===0;b.setAttribute("aria-label",`已完成 ${n}/100，點擊回到上次完成的任務`);b.title=n?`回到上次完成的任務：${L[progressData.lastCompleted]?.title||""}`:"完成第一個任務後，就能從這裡回到上次完成的任務"}
function fontApply(){document.body.classList.remove(...levels);document.body.classList.add(levels[font]);sm.disabled=font===0;lg.disabled=font===3}
function say(t,k=""){feedback.textContent=t;feedback.className=k}
function start(id){if(!L[id])return;clearTimeout(timer);modal.classList.add("hidden");currentId=id;current=L[id];streak=0;q=1;classicIndex=0;selectedCell=null;hintUsed=0;if(id==="practical")window.practicalValues={};if(id==="graduate1")window.graduateValues={};if(id==="graduate2")window.graduate2Values={};if(id==="graduate3")window.graduate3Values={};if(id==="breakthrough"){window.breakthroughIndex=0;window.breakthroughValues={};}home.classList.add("hidden");game.classList.remove("hidden");game.classList.toggle("column-layout",id==="column");game.classList.toggle("strong-box-lines",current.step>=4&&current.step<=13);game.classList.toggle("six-intro-mode",id==="step14");$("title").textContent=current.title;$("progress").textContent=current.step;$("instruction").textContent=current.text;render();window.scrollTo(0,0)}
function render(){
 answered=false;document.querySelectorAll(".pad button").forEach(b=>{b.disabled=false;b.blur()});hint.disabled=false;const pad=document.querySelector(".pad");pad.innerHTML="";const padNums=current.mode==="sixintro"?[1,2,3,4,5,6]:[1,2,3,4];padNums.forEach(n=>{const b=document.createElement("button");b.type="button";b.dataset.n=String(n);b.textContent=String(n);b.addEventListener("click",()=>answer(n));pad.appendChild(b)});$("check-wrap").classList.toggle("hidden",!(["practical","graduate"].includes(current.mode)));
 say("請觀察格子，再選擇下方數字。");$("question").textContent=`第 ${q} 題`;grid.innerHTML="";
 grid.style.width="";grid.style.height="";grid.style.aspectRatio="";
 if(current.mode==="sixintro"){
  const puzzle=[[0,3,0,6,0,5],[1,0,0,3,0,0],[0,0,6,0,0,1],[0,0,0,0,0,0],[0,2,0,0,0,0],[5,0,0,4,2,0]];
  grid.className="sudoku six-intro-board";grid.style.display="grid";grid.style.gridTemplateColumns="repeat(6,minmax(0,1fr))";grid.style.gridTemplateRows="repeat(6,minmax(0,1fr))";grid.style.width="min(100%,590px)";grid.style.aspectRatio="1";grid.style.height="auto";
  puzzle.forEach((row,r)=>row.forEach((v,c)=>{const item=document.createElement("div");item.className="cell six-intro-cell";item.dataset.cell=`${r},${c}`;item.style.border="1px solid #aaa";if(c===2)item.style.borderRight="4px solid #222";if(r===1||r===3)item.style.borderBottom="4px solid #222";if(v){item.textContent=String(v);item.classList.add("locked");}else if(r===1&&c===4){item.classList.add("six-intro-target");item.textContent="？";item.setAttribute("aria-label","問號，請填入答案");}grid.appendChild(item)}));
  $("question").textContent="請找出問號的數字";return;
 }
 if(current.mode==="breakthrough"){
  const puzzles=[
   {fixed:[[1,0,3],[2,3,4],[3,1,1],[3,3,3]],targets:[{r:2,c:0,v:2},{r:3,c:2,v:2}]},
   {fixed:[[0,1,4],[0,3,2],[2,0,3],[2,3,1]],targets:[{r:0,c:0,v:1}]},
   {fixed:[[0,3,1],[1,0,2],[2,2,3],[2,3,2]],targets:[{r:1,c:2,v:4},{r:3,c:3,v:4}]}
  ];
  const pi=window.breakthroughIndex||0,puzzle=puzzles[pi],values=window.breakthroughValues||(window.breakthroughValues={});
  const fixedMap=new Map(puzzle.fixed.map(([r,c,v])=>[`${r},${c}`,v]));
  grid.className="sudoku sparse-board breakthrough";grid.style.gridTemplateColumns="repeat(4,minmax(0,1fr))";grid.style.gridTemplateRows="repeat(4,minmax(0,1fr))";grid.style.width="min(100%,480px)";grid.style.aspectRatio="1";grid.style.height="auto";
  for(let r=0;r<4;r++)for(let c=0;c<4;c++){
   const key=`${r},${c}`,item=document.createElement("div");item.dataset.cell=key;item.className="cell sudoku-cell sparse-board-cell breakthrough-cell";item.style.border="1px solid #d8d8d8";if(c===1)item.style.borderRightWidth="3px";if(r===1)item.style.borderBottomWidth="3px";
   if(fixedMap.has(key)){item.textContent=String(fixedMap.get(key));item.classList.add("locked");}
   else {if(values[key]!==undefined){item.textContent=String(values[key].value);if(values[key].wrong)item.classList.add("wrong");}item.tabIndex=0;item.setAttribute("role","button");item.setAttribute("aria-label",`第${r+1}列第${c+1}欄，${values[key]===undefined?'空格':values[key].value}`);item.addEventListener("click",()=>selectBreakthroughCell(item));if(selectedCell===key)item.classList.add("selected");}
   grid.appendChild(item);
  }
  $("question").textContent=`破局題 ${pi+1} / 3`;return;
 }
 if(current.mode==="practical"||current.mode==="graduate"){
  const practicalFixed=[[0,3,3],[1,2,4],[2,0,1],[3,3,2]];
  const graduate2Fixed=[[0,1,4],[0,3,2],[2,0,3],[2,3,1]];
  const graduate3Fixed=[[0,3,1],[1,0,2],[2,2,3],[2,3,2]];
  const fixed=currentId==="graduate2"?graduate2Fixed:(currentId==="graduate3"?graduate3Fixed:practicalFixed);
  const solution=currentId==="graduate2"
    ?[[1,4,3,2],[2,3,1,4],[3,2,4,1],[4,1,2,3]]
    :(currentId==="graduate3"?[[4,3,2,1],[2,1,4,3],[1,4,3,2],[3,2,1,4]]:[[4,1,2,3],[2,3,4,1],[1,2,3,4],[3,4,1,2]]);
  const fixedMap=new Map(fixed.map(([r,c,v])=>[`${r},${c}`,v]));
  const values = currentId==="graduate2" ? (window.graduate2Values ||= {}) : currentId==="graduate3" ? (window.graduate3Values ||= {}) : current.mode==="graduate" ? (window.graduateValues ||= {}) : (window.practicalValues ||= {});
  grid.className="sudoku sparse-board practical"+(current.mode==="graduate"?" graduate":"");grid.style.gridTemplateColumns="repeat(4,minmax(0,1fr))";grid.style.gridTemplateRows="repeat(4,minmax(0,1fr))";grid.style.width="min(100%,480px)";grid.style.aspectRatio="1";grid.style.height="auto";
  for(let r=0;r<4;r++)for(let c=0;c<4;c++){
   const key=`${r},${c}`,item=document.createElement("div");item.className="cell sudoku-cell sparse-board-cell practical-cell";item.dataset.cell=key;item.style.border="1px solid #d8d8d8";if(c===1)item.style.borderRightWidth="3px";if(r===1)item.style.borderBottomWidth="3px";
   if(fixedMap.has(key)){item.textContent=String(fixedMap.get(key));item.classList.add("locked");}
   else {if(values[key]!==undefined)item.textContent=String(values[key]);item.tabIndex=0;item.setAttribute("role","button");item.setAttribute("aria-label",`第${r+1}列第${c+1}欄，${values[key]===undefined?'空格':values[key]}`);item.addEventListener("click",()=>selectPracticalCell(item));if(selectedCell===key)item.classList.add("selected");if(item.textContent)item.classList.add("user-entry");}
   grid.appendChild(item);
  }
  $("question").textContent="自行填寫";return;
 }
 if(current.mode==="classic"){
  const solution=[[4,1,2,3],[2,3,4,1],[1,2,3,4],[3,4,1,2]];
  const targets=[[2,3],[1,3],[0,2],[2,2],[2,1],[3,2]];
  const fixed=[[0,3,3],[1,2,4],[2,0,1],[3,3,2]];
  const [tr,tc]=targets[classicIndex];missing=solution[tr][tc];
  grid.className="sudoku sparse-board classic";grid.style.gridTemplateColumns="repeat(4,minmax(0,1fr))";grid.style.gridTemplateRows="repeat(4,minmax(0,1fr))";grid.style.width="min(100%,480px)";grid.style.aspectRatio="1";grid.style.height="auto";
  const prior=new Map(targets.slice(0,classicIndex).map(([r,c])=>[`${r},${c}`,solution[r][c]]));
  const clues=new Map(fixed.map(([r,c,v])=>[`${r},${c}`,v]));
  for(let r=0;r<4;r++)for(let c=0;c<4;c++){const item=document.createElement("div");item.className="cell sudoku-cell sparse-board-cell empty-clue";item.style.border="1px solid #d8d8d8";if(c===1)item.style.borderRightWidth="3px";if(r===1)item.style.borderBottomWidth="3px";const key=`${r},${c}`;if(r===tr&&c===tc){item.className="cell sudoku-cell sparse-board-cell missing";item.dataset.gap="1";}else if(prior.has(key)){item.classList.remove("empty-clue");item.textContent=String(prior.get(key));}else if(clues.has(key)){item.classList.remove("empty-clue");item.textContent=String(clues.get(key));}grid.appendChild(item)}
  $("question").textContent=`第 ${classicIndex+1} / 6 題`;return;
 }
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
 if(current.mode==="advanced"){
  // Step 7: show only one decisive clue from each target unit, plus unrelated
  // distractors. Validate that no single unit alone rules out all alternatives.
  const base=[[1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]];
  const shuffle=a=>{const out=a.slice();for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;};
  function makeBoard(){
    const ro=[];shuffle([0,1]).forEach(b=>shuffle([0,1]).forEach(x=>ro.push(b*2+x)));
    const co=[];shuffle([0,1]).forEach(b=>shuffle([0,1]).forEach(x=>co.push(b*2+x)));
    const ds=shuffle([1,2,3,4]);return ro.map(r=>co.map(c=>ds[base[r][c]-1]));
  }
  let board,tr,tc,rowClue,colClue,boxClue;
  for(let attempt=0;attempt<500&&!board;attempt++){
    const b=makeBoard();
    for(let r=0;r<4&&!board;r++)for(let c=0;c<4&&!board;c++){
      const answer=b[r][c], other=[1,2,3,4].filter(v=>v!==answer), br=Math.floor(r/2)*2,bc=Math.floor(c/2)*2;
      const rows=[];for(let x=0;x<4;x++)if(x!==c&&Math.floor(x/2)!==Math.floor(c/2))rows.push({r,c:x,v:b[r][x]});
      const cols=[];for(let y=0;y<4;y++)if(y!==r&&Math.floor(y/2)!==Math.floor(r/2))cols.push({r:y,c,v:b[y][c]});
      const boxes=[];for(let y=br;y<br+2;y++)for(let x=bc;x<bc+2;x++)if(y!==r&&x!==c)boxes.push({r:y,c:x,v:b[y][x]});
      const options=[];for(const a of rows)for(const d of cols)for(const e of boxes){if(new Set([a.v,d.v,e.v]).size===3&&other.every(v=>[a.v,d.v,e.v].includes(v)))options.push({a,d,e});}
      if(options.length){const chosen=options[Math.floor(Math.random()*options.length)];board=b;tr=r;tc=c;rowClue=chosen.a;colClue=chosen.d;boxClue=chosen.e;}
    }
  }
  // Deterministic fallback known to satisfy all three independent clues.
  if(!board){board=[[1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]];tr=0;tc=0;rowClue={r:0,c:2,v:3};colClue={r:2,c:0,v:2};boxClue={r:1,c:1,v:4};}
  missing=board[tr][tc];
  const shown=new Set([`${rowClue.r},${rowClue.c}`,`${colClue.r},${colClue.c}`,`${boxClue.r},${boxClue.c}`]);
  // Add 2-3 clues outside the target's row, column and box. Include the answer
  // value elsewhere when possible, so matching digits alone cannot solve it.
  const unrelated=[];for(let r=0;r<4;r++)for(let c=0;c<4;c++){
    const outsideUnits=r!==tr&&c!==tc&&(Math.floor(r/2)!==Math.floor(tr/2)||Math.floor(c/2)!==Math.floor(tc/2));
    if(outsideUnits&&!shown.has(`${r},${c}`))unrelated.push({r,c});
  }
  const answerCopies=unrelated.filter(p=>board[p.r][p.c]===missing);
  if(answerCopies.length)shown.add(`${answerCopies[0].r},${answerCopies[0].c}`);
  shuffle(unrelated.filter(p=>!shown.has(`${p.r},${p.c}`))).slice(0,3).forEach(p=>shown.add(`${p.r},${p.c}`));
  grid.className="sudoku sparse-board advanced";grid.style.gridTemplateColumns="repeat(4,minmax(0,1fr))";grid.style.gridTemplateRows="repeat(4,minmax(0,1fr))";grid.style.width="min(100%,480px)";grid.style.aspectRatio="1";grid.style.height="auto";
  for(let r=0;r<4;r++)for(let c=0;c<4;c++){
    const item=document.createElement("div");item.className="cell sudoku-cell sparse-board-cell empty-clue";item.style.border="1px solid #d8d8d8";
    if(c===1)item.style.borderRightWidth="3px";if(r===1)item.style.borderBottomWidth="3px";
    if(r===tr&&c===tc){item.className="cell sudoku-cell sparse-board-cell missing";item.dataset.gap="1";}
    else if(shown.has(`${r},${c}`)){item.classList.remove("empty-clue");item.textContent=String(board[r][c]);}
    grid.appendChild(item);
  }
  return;
 }
 if(current.mode==="boxways"){
  // Step 6: three clues must belong to the target's row, column, and 2x2 box.
  // The clue values are exactly the three non-answer digits, one supplied by
  // each unit. Thus row+column still leave two candidates; the box clue resolves it.
  const baseBoard=[[1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]];
  const shuffle=a=>{const out=a.slice();for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;};
  function makeBoard(){
    const bandOrder=shuffle([0,1]), rowOrder=[];
    bandOrder.forEach(b=>shuffle([0,1]).forEach(r=>rowOrder.push(b*2+r)));
    const stackOrder=shuffle([0,1]), colOrder=[];
    stackOrder.forEach(b=>shuffle([0,1]).forEach(c=>colOrder.push(b*2+c)));
    const digits=shuffle([1,2,3,4]);
    return rowOrder.map(r=>colOrder.map(c=>digits[baseBoard[r][c]-1]));
  }
  let board=null,tr=0,tc=0,rowClue=null,colClue=null,boxClue=null;
  for(let attempt=0;attempt<200&&!board;attempt++){
    const candidate=makeBoard(), options=[];
    for(let r=0;r<4;r++)for(let c=0;c<4;c++){
      const target=candidate[r][c], otherDigits=[1,2,3,4].filter(v=>v!==target);
      const boxR=Math.floor(r/2)*2, boxC=Math.floor(c/2)*2;
      const rows=[0,1,2,3].filter(x=>Math.floor(x/2)!==Math.floor(c/2)).map(x=>({r,c:x,v:candidate[r][x]}));
      const cols=[0,1,2,3].filter(y=>Math.floor(y/2)!==Math.floor(r/2)).map(y=>({r:y,c,v:candidate[y][c]}));
      const boxes=[];
      for(let y=boxR;y<boxR+2;y++)for(let x=boxC;x<boxC+2;x++){
        if(y!==r&&x!==c)boxes.push({r:y,c:x,v:candidate[y][x]});
      }
      for(const ro of rows)for(const co of cols)for(const bo of boxes){
        if(new Set([ro.v,co.v,bo.v]).size===3 &&
           otherDigits.every(v=>[ro.v,co.v,bo.v].includes(v))){
          options.push({r,c,ro,co,bo});
        }
      }
    }
    if(options.length){
      const chosen=options[Math.floor(Math.random()*options.length)];
      board=candidate;tr=chosen.r;tc=chosen.c;
      rowClue=chosen.ro;colClue=chosen.co;boxClue=chosen.bo;
    }
  }
  // A known-valid fallback, used only if the randomized search unexpectedly fails.
  if(!board){
    board=baseBoard;tr=0;tc=0;missing=1;
    rowClue={r:0,c:2,v:3};colClue={r:2,c:0,v:2};boxClue={r:1,c:1,v:4};
  }
  missing=board[tr][tc];
  const clueMap=new Map([
    [`${rowClue.r},${rowClue.c}`,rowClue.v],
    [`${colClue.r},${colClue.c}`,colClue.v],
    [`${boxClue.r},${boxClue.c}`,boxClue.v]
  ]);
  grid.className="sudoku sparse-board boxways";
  grid.style.gridTemplateColumns="repeat(4,minmax(0,1fr))";
  grid.style.gridTemplateRows="repeat(4,minmax(0,1fr))";
  grid.style.width="min(100%,480px)";grid.style.aspectRatio="1";grid.style.height="auto";
  for(let r=0;r<4;r++)for(let c=0;c<4;c++){
    const item=document.createElement("div");
    item.className="cell sudoku-cell sparse-board-cell empty-clue";
    item.style.border="1px solid #d8d8d8";
    if(c===1)item.style.borderRightWidth="3px";
    if(r===1)item.style.borderBottomWidth="3px";
    if(r===tr&&c===tc){
      item.className="cell sudoku-cell sparse-board-cell missing";
      item.dataset.gap="1";
    }else if(clueMap.has(`${r},${c}`)){
      item.classList.remove("empty-clue");
      item.style.borderColor="#718096";
      item.textContent=String(clueMap.get(`${r},${c}`));
    }
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
function answer(n){if(answered)return;if(current&&current.mode==="sixintro"){if(n===4){answered=true;const target=grid.querySelector(".six-intro-target");if(target){target.textContent="4";target.classList.remove("six-intro-target");target.classList.add("six-intro-correct");}document.querySelector(".pad").querySelectorAll("button").forEach(b=>b.disabled=true);hint.disabled=true;say("答對了！問號應填入 4。你已運用橫排、直排與六宮格的規則解題！","good");timer=setTimeout(()=>complete(),700);}else{say("再想一想：先看橫排，再看直排，最後檢查右上方的六宮格。","bad");}return;}if(current&&current.mode==="breakthrough"){
 if(!selectedCell){say("請先點選你認為可以突破的空格，再選擇數字。","bad");return;}
 const puzzles=[
  {targets:[{r:2,c:0,v:2},{r:3,c:2,v:2}]},
  {targets:[{r:0,c:0,v:1}]},
  {targets:[{r:1,c:2,v:4},{r:3,c:3,v:4}]}
 ];
 const pi=window.breakthroughIndex||0,puzzle=puzzles[pi],[r,c]=selectedCell.split(",").map(Number),target=puzzle.targets.find(t=>t.r===r&&t.c===c),values=window.breakthroughValues||(window.breakthroughValues={});
 if(target&&target.v===n){Object.keys(values).forEach(key=>{if(values[key]&&values[key].wrong)delete values[key];});delete values[selectedCell];say("答對了！你找到破局點！","good");answered=true;document.querySelectorAll(".pad button").forEach(b=>b.disabled=true);hint.disabled=true;timer=setTimeout(()=>{window.breakthroughIndex=pi+1;selectedCell=null;if(window.breakthroughIndex>=3)complete();else{q++;render();say("新題目來了！再找出一個破局點。")}},550);return;}
 values[selectedCell]={value:n,wrong:true};selectedCell=null;render();say("這次不對，數字已標紅。再觀察一下，重新找破局點！","bad");return;
 }if(current&&(current.mode==="practical"||current.mode==="graduate")){
 if(!selectedCell){say("請先點選棋盤上的空格，再選擇數字。","bad");return;}
 const values = currentId==="graduate2" ? (window.graduate2Values ||= {}) : currentId==="graduate3" ? (window.graduate3Values ||= {}) : currentId==="graduate1" ? (window.graduateValues ||= {}) : (window.practicalValues ||= {});values[selectedCell]=n;render();say("已填入數字。填好後按「檢查」，也可以繼續修改。","good");return;
 }if(n===missing){answered=true;if(current.mode==="classic"){document.querySelectorAll(".pad button").forEach(b=>b.disabled=true);hint.disabled=true;const c=grid.querySelector("[data-gap]");if(c){c.removeAttribute("data-gap");c.className="cell sudoku-cell sparse-board-cell";c.textContent=String(n)}classicIndex++;say(`答對了！已完成 ${classicIndex} / 6 題。`,"good");timer=setTimeout(()=>{if(classicIndex>=6)complete();else{q++;render()}},650);return}streak++;const c=grid.querySelector("[data-gap]");if(c){c.className="cell filled sudoku-cell";c.textContent=String(n);c.removeAttribute("data-gap")}document.querySelectorAll(".pad button").forEach(b=>b.disabled=true);hint.disabled=true;say(`答對了！目前連續答對 ${streak} / ${current.need} 題。`,"good");timer=setTimeout(()=>{if(streak>=current.need)complete();else{q++;render()}},streak>=current.need?450:650)}else{streak=0;say("再想一想！請重新觀察線索。","bad");setTimeout(()=>{if(!answered)say("沒關係，慢慢找。請再選一次。")},900)}}
function selectPracticalCell(item){if(item.classList.contains("locked"))return;selectedCell=item.dataset.cell;grid.querySelectorAll(".practical-cell").forEach(c=>c.classList.toggle("selected",c.dataset.cell===selectedCell));say("已選取空格，請按下方數字填入。")}
function selectBreakthroughCell(item){
 if(item.classList.contains("locked"))return;
 const values=window.breakthroughValues||(window.breakthroughValues={});
 // 開始新一次嘗試時，清除上一個錯誤答案，避免紅字干擾。
 Object.keys(values).forEach(key=>{if(values[key]&&values[key].wrong)delete values[key];});
 selectedCell=item.dataset.cell;
 render();
 say("已選取這一格，請選擇你認為正確的數字。");
}
function checkPractical(){if(!["practical","graduate1","graduate2","graduate3"].includes(currentId))return;const values = currentId==="graduate2" ? (window.graduate2Values ||= {}) : currentId==="graduate3" ? (window.graduate3Values ||= {}) : currentId==="graduate1" ? (window.graduateValues ||= {}) : (window.practicalValues ||= {});const fixedList=currentId==="graduate2"?[[0,1,4],[0,3,2],[2,0,3],[2,3,1]]:(currentId==="graduate3"?[[0,3,1],[1,0,2],[2,2,3],[2,3,2]]:[[0,3,3],[1,2,4],[2,0,1],[3,3,2]]);const fixed=new Set(fixedList.map(([r,c])=>`${r},${c}`));let filled=0,wrong=0,empty=0;const solution=currentId==="graduate2"?[[1,4,3,2],[2,3,1,4],[3,2,4,1],[4,1,2,3]]:(currentId==="graduate3"?[[4,3,2,1],[2,1,4,3],[1,4,3,2],[3,2,1,4]]:[[4,1,2,3],[2,3,4,1],[1,2,3,4],[3,4,1,2]]);
 grid.querySelectorAll(".practical-cell").forEach(cell=>{const key=cell.dataset.cell;if(fixed.has(key))return;const v=values[key];cell.classList.remove("wrong");if(v===undefined){empty++;return;}filled++;const [r,c]=key.split(",").map(Number);if(v!==solution[r][c]){wrong++;cell.classList.add("wrong");}});
 if(wrong){say(`已檢查 ${filled} 格，有 ${wrong} 格不正確，紅色數字請再試試看。正確答案不會直接公布。`,"bad");return;}
 if(empty){say(`目前填入的 ${filled} 格都正確！還有 ${empty} 格未完成，繼續加油。`,"good");return;}
 say(currentId==="graduate1"?"全部正確！你通過了4X4數獨畢業考（1/3）！":(currentId==="graduate2"?"全部正確！你通過了4X4數獨畢業考（2/3）！":(currentId==="graduate3"?"全部正確！你通過了4X4數獨畢業考（3/3）！":"全部正確！你完成了 4X4 數獨實戰！")),"good");answered=true;document.querySelectorAll(".pad button").forEach(b=>b.disabled=true);hint.disabled=true;timer=setTimeout(()=>complete(),650);
}
function complete(){if(!progressData.completed.includes(currentId))progressData.completed.push(currentId);progressData.lastCompleted=currentId;updateHomeProgress();saveProgress();let nextId=({row:"column",column:"box",box:"rowcol",rowcol:"threeways",threeways:"boxways",boxways:"advanced",advanced:"classic",classic:"practical",practical:"breakthrough",breakthrough:"graduate1",graduate1:"graduate2",graduate2:"graduate3",graduate3:"step14"})[currentId]||null;$("modal-title").textContent=current.title+"完成了！";$("modal-message").textContent=nextId?`你已完成這一步，做得很好！接下來繼續挑戰下一步吧。`:"你已完成目前所有練習步驟！做得很好。接下來可以回到主頁。";next.classList.toggle("hidden",!nextId);next.dataset.id=nextId||"";modal.classList.remove("hidden");(nextId?next:modalHome).focus()}
function goHome(){clearTimeout(timer);modal.classList.add("hidden");game.classList.add("hidden");home.classList.remove("hidden");current=null;currentId=null;updateHomeProgress();window.scrollTo(0,0)}
document.querySelectorAll(".start").forEach(b=>b.addEventListener("click",()=>start(b.dataset.id)));$("home-top").addEventListener("click",goHome);modalHome.addEventListener("click",goHome);next.addEventListener("click",()=>{if(next.dataset.id)start(next.dataset.id)});$("resume-progress").addEventListener("click",()=>{if(progressData.lastCompleted)start(progressData.lastCompleted)});hint.addEventListener("click",()=>{if(!current||answered)return;if(current.mode==="sixintro"){say("提示：問號所在橫排已有 1、3；所在直排已有 2；右上六宮格已有 3、5、6。");return;}if(current.mode==="breakthrough"){say("這一關請靠自己的觀察找出破局點！");return;}if(current.mode==="graduate"){say("畢業考請靠自己的觀察完成，加油！");return;}if(current.mode==="practical"){const targets=[[2,3],[1,3],[0,2],[2,2],[2,1],[3,2]],solution=[[4,1,2,3],[2,3,4,1],[1,2,3,4],[3,4,1,2]],values=current.mode==="graduate"?(window.graduateValues||(window.graduateValues={} )):(window.practicalValues||(window.practicalValues={}));let target=null;for(const [r,c] of targets){const key=`${r},${c}`;if(values[key]!==solution[r][c]){target={r,c,key,value:solution[r][c]};break;}}if(hintUsed>=6||!target){say("加油！提示已經使用完畢，你可以自己做到！","good");hint.disabled=true;return;}values[target.key]=target.value;hintUsed++;selectedCell=null;render();if(hintUsed>=6)say(`提示 ${hintUsed}/6：第 ${target.r+1} 列第 ${target.c+1} 欄是 ${target.value}。加油！提示已經使用完畢，你可以自己做到！`);else say(`提示 ${hintUsed}/6：第 ${target.r+1} 列第 ${target.c+1} 欄是 ${target.value}。`);if(hintUsed>=6)hint.disabled=true;return;}say("提示：缺少的數字是 "+missing+"。")});
$("check-answers").addEventListener("click",checkPractical);sm.addEventListener("click",()=>{if(font>0){font--;fontApply()}});lg.addEventListener("click",()=>{if(font<3){font++;fontApply()}});loadProgress();updateHomeProgress();fontApply()
})();