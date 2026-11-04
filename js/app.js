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
sixrow:{step:14,title:"第十四步：6×6數獨－橫排",mode:"sixrow",text:"請看這一橫排的六個位置。1、2、3、4、5、6 各出現一次，找出缺少的數字。",need:3},
sixcolumn:{step:15,title:"第十五步：6×6數獨－直排",mode:"sixcolumn",text:"請看這一直排的六個位置。1、2、3、4、5、6 各出現一次，找出缺少的數字。",need:3},
sixbox:{step:16,title:"第十六步：6×6數獨－六宮格",mode:"sixbox",text:"請觀察這個六宮格。1、2、3、4、5、6 各出現一次，找出缺少的數字。",need:3},
sixnote:{step:18,title:"第十八步：練習筆記小字（6×6橫排）",mode:"sixnote",text:"開始時筆記模式為 OFF，請主動按下「筆記」開啟，再選取兩個空格，分別用小字記下這一排缺少的兩個數字。兩個空格都記錄正確，算答對一題；進入下一題後，筆記模式會維持 ON，連續答對三題過關。",need:3},
sixcolumnnote:{step:19,title:"第十九步：練習筆記小字（6×6直排）",mode:"sixnote",noteType:"column",text:"開始時筆記模式為 OFF，請主動按下「筆記」開啟，再選取直排中的兩個空格，分別用小字記下這一直排缺少的兩個數字。兩個空格都記錄正確，算答對一題；進入下一題後，筆記模式會維持 ON，連續答對三題過關。",need:3},
sixboxnote:{step:20,title:"第二十步：練習筆記小字（六宮格）",mode:"sixnote",noteType:"box",text:"開始時筆記模式為 OFF，請主動按下「筆記」開啟，再選取六宮格中的兩個空格，分別用小字記下這個六宮格缺少的兩個數字。兩個空格都記錄正確，算答對一題；進入下一題後，筆記模式會維持 ON，連續答對三題過關。",need:3},
step14:{step:17,title:"第十七步：什麼是6×6數獨（第一類）",mode:"sixintro",text:"數獨三個規則：\n1. 直排1～6不重複\n2. 橫排1～6不重複\n3. 每個六宮格1～6不重複\n請依序解開三個目標格。每答對一格，數字會保留，再繼續下一格。",need:1},
sixintro2:{step:21,title:"第二十一步：什麼是6×6數獨（第二類）",mode:"sixintro2",text:"請依照紅色標記的順序，依序解開五個目標格。每答對一格，數字會保留，再繼續下一格。請運用直排、橫排與六宮格不重複的規則。",need:1},
sixnotecombat:{step:22,title:"第二十二步：練習筆記小字實戰",mode:"sixnotecombat",text:"請主動開啟「筆記」，依序完成八個目標格。每格記下兩個可能的候選數字；符合橫排、直排與六宮格線索後，才進入下一格。已完成的筆記會保留。",need:1},
numberfocus:{step:23,title:"第二十三步：一次只檢查某個數字全體（檢查全部的1、2、6）",mode:"numberfocus",text:"先點選棋盤上已有的 1、2 或 6，觀察該數字所在的橫排、直排與六宮格反白區域，再自行找出可填入該數字的空格。依序完成 1、2、6 三題。",need:1},
numberfocus2:{step:24,title:"第二十四步：一次只檢查某個數字全體（檢查1、2、5）",mode:"numberfocus2",text:"先點選棋盤上已有的 1、2 或 5，觀察該數字所在的橫排、直排與六宮格反白區域，再自行找出可填入該數字的空格。依序完成 1、2、5 三題。",need:1},
numberfocus3:{step:25,title:"第二十五步：6×6數獨實戰一（利用一次只檢查某個數字全體）",mode:"numberfocus3",text:"真正解完這盤 6×6 數獨。按下方數字可反白該數字及其所在的橫排、直排與六宮格；選取空格後輸入答案，也可以開啟筆記記錄候選數字。整盤完成且答案正確才能過關。",need:1},
numberfocus4:{step:26,title:"第二十六步：6×6數獨實戰二（比上題難，綜合運用所有技巧）",mode:"numberfocus4",text:"這是第二類 6×6 數獨，六宮格為 3 列 × 2 欄。點選棋盤上已有的數字，可反白該數字所在的橫排、直排與六宮格；選取空格後輸入答案，也可使用筆記記錄候選數字。若暫時沒有解題靈感，可以先回到第二十一步練習第二類數獨，再回來挑戰。整盤填對才能過關。",need:1}
};
const $=id=>document.getElementById(id),home=$("home"),game=$("game"),grid=$("grid"),feedback=$("feedback"),modal=$("modal"),next=$("next"),modalHome=$("modal-home"),hint=$("hint"),buttons=Array.from(document.querySelectorAll(".pad button")),sm=$("font-smaller"),lg=$("font-larger");
const STORAGE_KEY="lezaiblingzhong_sudoku_progress_v3";let font=1,current=null,currentId=null,missing=0,streak=0,q=1,answered=false,timer=null,classicIndex=0,selectedCell=null,hintUsed=0,noteMode=false;
const levels=["font-small","font-normal","font-large","font-xlarge"];let progressData={completed:[],lastCompleted:null};
function loadProgress(){try{const raw=localStorage.getItem(STORAGE_KEY)||localStorage.getItem("lezaiblingzhong_sudoku_progress_v2");if(raw){const s=JSON.parse(raw);if(s&&Array.isArray(s.completed)){progressData.completed=s.completed.filter(id=>L[id]);progressData.lastCompleted=L[s.lastCompleted]?s.lastCompleted:(progressData.completed[progressData.completed.length-1]||null)}}}catch(e){}}
function saveProgress(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(progressData));}catch(e){say("本次已完成，但瀏覽器無法保存進度。","bad")}}
function updateHomeProgress(){const n=progressData.completed.length;$("completed-count").textContent=String(n);const b=$("resume-progress");b.disabled=n===0;b.setAttribute("aria-label",`已完成 ${n}/100，點擊回到上次完成的任務`);b.title=n?`回到上次完成的任務：${L[progressData.lastCompleted]?.title||""}`:"完成第一個任務後，就能從這裡回到上次完成的任務"}
function fontApply(){document.body.classList.remove(...levels);document.body.classList.add(levels[font]);sm.disabled=font===0;lg.disabled=font===3}
function say(t,k=""){feedback.textContent=t;feedback.className=k}
function start(id){if(!L[id])return;clearTimeout(timer);modal.classList.add("hidden");currentId=id;current=L[id];streak=0;q=1;classicIndex=0;selectedCell=null;hintUsed=0;noteMode=false;if(["sixnote","sixcolumnnote","sixboxnote"].includes(id))window.sixNoteState={notes:{},targets:[],puzzle:null};if(id==="sixnotecombat")window.sixNoteCombatState={index:0,notes:{}};if(id==="numberfocus")window.numberFocusState={index:0,values:{},scanDigit:null};if(id==="numberfocus2")window.numberFocus2State={index:0,values:{},scanDigit:null};if(id==="numberfocus3")window.numberFocus3State={values:{},notes:{},scanDigit:null};if(id==="numberfocus4")window.numberFocus4State={values:{},notes:{},scanDigit:null};$("note-mode").classList.remove("active");$("note-mode").setAttribute("aria-pressed","false");$("note-mode").disabled=false;$("clear-cell").disabled=true;if(id==="practical")window.practicalValues={};if(id==="graduate1")window.graduateValues={};if(id==="graduate2")window.graduate2Values={};if(id==="graduate3")window.graduate3Values={};if(id==="step14")window.sixIntroState={index:0,values:{}};if(id==="sixintro2")window.sixIntro2State={index:0,values:{}};if(id==="breakthrough"){window.breakthroughIndex=0;window.breakthroughValues={};}home.classList.add("hidden");game.classList.remove("hidden");game.classList.toggle("column-layout",id==="column");game.classList.toggle("strong-box-lines",current.step>=4&&current.step<=13);game.classList.toggle("six-intro-mode",id==="step14"||id==="sixintro2");game.classList.toggle("six-practice-mode",["sixrow","sixcolumn","sixbox","sixnote","sixcolumnnote","sixboxnote"].includes(id));game.classList.toggle("six-note-mode",["sixnote","sixcolumnnote","sixboxnote","sixnotecombat","numberfocus3","numberfocus4"].includes(id));game.classList.toggle("numberfocus4-mode",id==="numberfocus4");$("clear-cell").classList.toggle("hidden",!["sixnote","sixcolumnnote","sixboxnote","sixnotecombat","numberfocus3","numberfocus4"].includes(id));$("note-mode").classList.toggle("hidden",!["sixnote","sixcolumnnote","sixboxnote","sixnotecombat","numberfocus3","numberfocus4"].includes(id));$("title").textContent=current.title;$("progress").textContent=current.step;$("instruction").textContent=current.text;render();window.scrollTo(0,0)}
function render(){
 answered=false;document.querySelectorAll(".pad button").forEach(b=>{b.disabled=false;b.blur()});hint.disabled=false;const pad=document.querySelector(".pad");pad.innerHTML="";const padNums=["sixintro","sixintro2","sixrow","sixcolumn","sixbox","sixnote","sixnotecombat","numberfocus","numberfocus2","numberfocus3","numberfocus4"].includes(current.mode)?[1,2,3,4,5,6]:[1,2,3,4];padNums.forEach(n=>{const b=document.createElement("button");b.type="button";b.dataset.n=String(n);b.textContent=String(n);b.addEventListener("click",()=>answer(n));pad.appendChild(b)});$("check-wrap").classList.toggle("hidden",!(["practical","graduate"].includes(current.mode)));
 say("請觀察格子，再選擇下方數字。");$("question").textContent=`第 ${q} 題`;grid.innerHTML="";
 grid.style.width="";grid.style.height="";grid.style.aspectRatio="";
 if(["sixrow","sixcolumn","sixbox"].includes(current.mode)){
  const nums=[1,2,3,4,5,6];for(let i=nums.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[nums[i],nums[j]]=[nums[j],nums[i]];}
  const gap=Math.floor(Math.random()*6);missing=nums[gap];
  grid.className="six-practice-board"+(current.mode==="sixcolumn"?" vertical-square-board":"");
  if(current.mode==="sixrow"){grid.style.gridTemplateColumns="repeat(6,minmax(0,1fr))";grid.style.gridTemplateRows="1fr";grid.style.width="min(100%,650px)";grid.style.aspectRatio="6 / 1";}
  else if(current.mode==="sixcolumn"){grid.style.gridTemplateColumns="1fr";grid.style.gridTemplateRows="repeat(6,minmax(0,1fr))";grid.style.width="min(100%,108px)";grid.style.aspectRatio="1 / 6";}
  else {grid.style.gridTemplateColumns="repeat(3,minmax(0,1fr))";grid.style.gridTemplateRows="repeat(2,minmax(0,1fr))";grid.style.width="min(100%,390px)";grid.style.aspectRatio="3 / 2";}
  nums.forEach((n,i)=>{const cell=document.createElement("div");cell.className="cell six-practice-cell";cell.style.border="1px solid #aaa";if(current.mode==="sixbox"&&(i%3)===2)cell.style.borderRightWidth="4px";if(current.mode==="sixbox"&&i>=3)cell.style.borderTopWidth="4px";if(i===gap){cell.classList.add("missing");cell.dataset.gap="1";}else cell.textContent=String(n);grid.appendChild(cell)});return;
 }
 if(current.mode==="sixnote"){
  const state=window.sixNoteState||(window.sixNoteState={notes:{},targets:[],puzzle:null});
  // 輸入、切換格子或清空時保留同一題；只有進入下一題才重新抽題。
  if(!state.puzzle){
   const nums=[1,2,3,4,5,6];for(let i=nums.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[nums[i],nums[j]]=[nums[j],nums[i]];}
   const gapIndices=[];while(gapIndices.length<2){const idx=Math.floor(Math.random()*6);if(!gapIndices.includes(idx))gapIndices.push(idx);}gapIndices.sort((a,b)=>a-b);
   state.puzzle={nums,gapIndices};state.notes={};state.targets=gapIndices.map(i=>({index:i,answer:nums[i]}));
  }
  const nums=state.puzzle.nums,gapIndices=state.puzzle.gapIndices;
  const missingNums=gapIndices.map(i=>nums[i]).sort((a,b)=>a-b);missing=missingNums[0];
  const noteType=current.noteType||"row";
  grid.className="six-practice-board six-note-board"+(noteType==="column"?" vertical-square-board":"");
  if(noteType==="column"){grid.style.gridTemplateColumns="1fr";grid.style.gridTemplateRows="repeat(6,minmax(0,1fr))";grid.style.width="min(100%,108px)";grid.style.aspectRatio="1 / 6";}
  else if(noteType==="box"){grid.style.gridTemplateColumns="repeat(3,minmax(0,1fr))";grid.style.gridTemplateRows="repeat(2,minmax(0,1fr))";grid.style.width="min(100%,390px)";grid.style.aspectRatio="3 / 2";}
  else{grid.style.gridTemplateColumns="repeat(6,minmax(0,1fr))";grid.style.gridTemplateRows="1fr";grid.style.width="min(100%,650px)";grid.style.aspectRatio="6 / 1";}
  nums.forEach((n,i)=>{const cell=document.createElement("div");cell.className="cell six-practice-cell six-note-cell";cell.dataset.index=String(i);cell.style.border="1px solid #aaa";if(noteType==="box"&&(i%3)===2)cell.style.borderRightWidth="4px";if(noteType==="box"&&i>=3)cell.style.borderTopWidth="4px";if(gapIndices.includes(i)){cell.classList.add("note-gap");cell.tabIndex=0;cell.setAttribute("role","button");cell.setAttribute("aria-label",`第${i+1}格空格`);cell.addEventListener("click",()=>selectNoteCell(cell));const notes=state.notes[i]||[];const mini=document.createElement("div");mini.className="pencil-mini-grid";for(let candidate=1;candidate<=6;candidate++){const small=document.createElement("span");small.className="pencil-note"+(notes.includes(candidate)?" filled":"");small.textContent=notes.includes(candidate)?String(candidate):"";mini.appendChild(small);}cell.appendChild(mini);if(selectedCell===String(i))cell.classList.add("selected");}else cell.textContent=String(n);grid.appendChild(cell)});
  const noteBtn=$("note-mode"),clearBtn=$("clear-cell");noteBtn.classList.toggle("active",noteMode);noteBtn.setAttribute("aria-pressed",String(noteMode));noteBtn.dataset.state=noteMode?"ON":"OFF";clearBtn.disabled=selectedCell===null;return;
 }
 if(current.mode==="sixnotecombat"){
  const state=window.sixNoteCombatState||(window.sixNoteCombatState={index:0,notes:{}});
  const puzzle=[[0,3,0,6,1,5],[1,0,0,3,4,2],[0,0,6,0,0,1],[0,0,0,0,0,0],[0,2,0,0,0,0],[5,0,0,4,2,0]];
  // 依標記編號一至八闖關；每格需要記下由橫排、直排、六宮格交集得出的兩個候選數字。
  const targets=[
   {r:0,c:0,candidates:[2,4]}, {r:0,c:2,candidates:[2,4]},
   {r:1,c:1,candidates:[5,6]}, {r:1,c:2,candidates:[5,6]},
   {r:2,c:3,candidates:[2,5]}, {r:3,c:3,candidates:[2,5]},
   {r:5,c:5,candidates:[3,6]}, {r:4,c:5,candidates:[3,6]}
  ];
  const active=targets[state.index];
  selectedCell=active?`${active.r},${active.c}`:null;
  grid.className="sudoku six-intro-board six-note-combat-board six-note-board";
  grid.style.display="grid";grid.style.gridTemplateColumns="repeat(6,minmax(0,1fr))";grid.style.gridTemplateRows="repeat(6,minmax(0,1fr))";grid.style.width="min(100%,590px)";grid.style.aspectRatio="1";grid.style.height="auto";
  puzzle.forEach((row,r)=>row.forEach((v,c)=>{
   const key=`${r},${c}`,cell=document.createElement("div");cell.className="cell six-intro-cell six-note-combat-cell";cell.dataset.cell=key;cell.style.border="1px solid #aaa";
   if(c===2)cell.style.borderRight="4px solid #222";if(r===1||r===3)cell.style.borderBottom="4px solid #222";
   if(v){cell.textContent=String(v);cell.classList.add("locked");if((r===1&&c>=4))cell.classList.add("user-solved");}
   else {
    const targetIndex=targets.findIndex(t=>t.r===r&&t.c===c),notes=state.notes[key]||[];
    if(targetIndex>=0){
     cell.classList.add("note-gap");cell.tabIndex=0;cell.setAttribute("role","button");cell.setAttribute("aria-label",`第${targetIndex+1}個筆記目標格`);
     const mini=document.createElement("div");mini.className="pencil-mini-grid";
     for(let n=1;n<=6;n++){const small=document.createElement("span");small.className="pencil-note"+(notes.includes(n)?" filled":"");small.textContent=notes.includes(n)?String(n):"";mini.appendChild(small)}
     cell.appendChild(mini);if(targetIndex===state.index){cell.classList.add("six-intro-target");if(notes.length===0)cell.dataset.currentTarget="true";}else if(targetIndex<state.index)cell.classList.add("six-intro-correct");
     if(selectedCell===key)cell.classList.add("selected");
    }
   }
   grid.appendChild(cell);
  }));
  $("question").textContent=state.index<8?`第 ${state.index+1} / 8 關：請在目標格記下兩個候選數字`:"八格完成";
  const noteBtn=$("note-mode"),clearBtn=$("clear-cell");noteBtn.classList.toggle("active",noteMode);noteBtn.setAttribute("aria-pressed",String(noteMode));noteBtn.dataset.state=noteMode?"ON":"OFF";clearBtn.disabled=selectedCell===null;
  return;
 }

 if(current.mode==="numberfocus3"||current.mode==="numberfocus4"){
  const isSecondClass=current.mode==="numberfocus4";
  const state=isSecondClass?(window.numberFocus4State||(window.numberFocus4State={values:{},notes:{},scanDigit:null})):(window.numberFocus3State||(window.numberFocus3State={values:{},notes:{},scanDigit:null}));
  const puzzle=isSecondClass?[[6,2,0,0,5,0],[0,0,0,0,2,0],[0,4,0,0,0,0],[5,0,0,0,1,0],[0,0,1,0,0,0],[4,0,3,0,0,0]]:[[0,3,0,6,1,5],[1,0,0,3,4,2],[0,0,6,0,0,1],[0,0,0,0,0,0],[0,2,0,0,0,0],[5,0,0,4,2,0]];
  const solution=isSecondClass?[[6,2,4,3,5,1],[3,5,6,1,2,4],[1,4,5,2,3,6],[5,6,2,4,1,3],[2,3,1,6,4,5],[4,1,3,5,6,2]]:[[4,3,2,6,1,5],[1,6,5,3,4,2],[2,4,6,5,3,1],[3,5,1,2,6,4],[6,2,4,1,5,3],[5,1,3,4,2,6]];
  grid.className="sudoku number-focus-board number-focus-full-board";grid.style.display="grid";grid.style.gridTemplateColumns="repeat(6,minmax(0,1fr))";grid.style.gridTemplateRows="repeat(6,minmax(0,1fr))";grid.style.width="min(100%,650px)";grid.style.aspectRatio="1";grid.style.height="auto";
  const vals={};puzzle.forEach((row,r)=>row.forEach((v,c)=>{const key=`${r},${c}`;vals[key]=state.values[key]??v;}));
  const affected=new Set();if(state.scanDigit!==null){for(let r=0;r<6;r++)for(let c=0;c<6;c++)if(vals[`${r},${c}`]===state.scanDigit){for(let i=0;i<6;i++){affected.add(`${r},${i}`);affected.add(`${i},${c}`);}const br=isSecondClass?Math.floor(r/3)*3:Math.floor(r/2)*2,bc=isSecondClass?Math.floor(c/2)*2:Math.floor(c/3)*3,bh=isSecondClass?3:2,bw=isSecondClass?2:3;for(let rr=br;rr<br+bh;rr++)for(let cc=bc;cc<bc+bw;cc++)affected.add(`${rr},${cc}`);}}
  puzzle.forEach((row,r)=>row.forEach((v,c)=>{const key=`${r},${c}`,item=document.createElement("div");item.className="cell number-focus-cell number-focus-full-cell";item.dataset.cell=key;item.style.border="1px solid #aaa";if(isSecondClass?(c===1||c===3):(c===2))item.style.borderRight="4px solid #222";if(isSecondClass?(r===2):(r===1||r===3))item.style.borderBottom="4px solid #222";const val=vals[key];if(affected.has(key))item.classList.add("scan-highlight");if(state.scanDigit!==null&&val===state.scanDigit)item.classList.add("scan-number");
   if(v){item.textContent=String(v);item.classList.add("locked");}else if(state.values[key]!==undefined){item.textContent=String(state.values[key]);item.classList.add("number-focus-filled");}else{item.classList.add("number-focus-empty");const notes=state.notes[key]||[];if(notes.length){const mini=document.createElement("div");mini.className="pencil-mini-grid";for(let n=1;n<=6;n++){const span=document.createElement("span");span.className="pencil-note"+(notes.includes(n)?" filled":"");span.textContent=String(n);mini.appendChild(span);}item.appendChild(mini);}}
   // Clicking any existing board number scans that digit; the keypad remains for entering values.
   const displayedValue=vals[key];
   if(displayedValue){item.tabIndex=0;item.setAttribute("role","button");item.setAttribute("aria-label",`檢查數字 ${displayedValue} 的橫排、直排與六宮格`);item.addEventListener("click",(event)=>{event.stopPropagation();state.scanDigit=displayedValue;selectedCell=null;render();say(`已反白所有數字 ${displayedValue} 所在的橫排、直排與六宮格。`,"good");});}
   if(selectedCell===key)item.classList.add("selected");if(!v&&state.values[key]===undefined){item.tabIndex=0;item.setAttribute("role","button");item.addEventListener("click",()=>{selectedCell=key;render();say(`已選取第 ${r+1} 列、第 ${c+1} 欄。${noteMode?"按下方數字加入或移除筆記。":"按下方數字填入答案；也可開啟筆記。"}`,"good");});}grid.appendChild(item);
  }));
  const filled=Object.keys(state.values).length,blanks=puzzle.flat().filter(v=>v===0).length;$("question").textContent=`已完成 ${filled} / ${blanks} 格${state.scanDigit!==null?`｜正在檢查數字 ${state.scanDigit}`:"｜可選擇數字檢查全盤"}`;
  const nb=$("note-mode"),cb=$("clear-cell");nb.classList.toggle("active",noteMode);nb.setAttribute("aria-pressed",String(noteMode));nb.dataset.state=noteMode?"ON":"OFF";
  if(isSecondClass){
   // Keep the clear button available even when no empty cell is selected, so it can cancel scan highlighting.
   cb.disabled=false;
   document.querySelectorAll(".pad button[data-n]").forEach(button=>{
    const digit=Number(button.dataset.n);
    const remaining=puzzle.some((row,r)=>row.some((v,c)=>v===0&&solution[r][c]===digit&&state.values[`${r},${c}`]!==digit));
    button.disabled=!remaining;
    button.classList.toggle("digit-complete",!remaining);
    if(!remaining)button.setAttribute("aria-label",`數字 ${digit} 已全部完成`);else button.setAttribute("aria-label",`輸入數字 ${digit}`);
   });
  }else cb.disabled=selectedCell===null;
  return;
 }

 if(current.mode==="numberfocus"||current.mode==="numberfocus2"){
  const isSecond=current.mode==="numberfocus2";
  const state=isSecond?(window.numberFocus2State||(window.numberFocus2State={index:0,values:{},scanDigit:null})):(window.numberFocusState||(window.numberFocusState={index:0,values:{},scanDigit:null}));
  const puzzle=isSecond?[[6,2,0,0,5,0],[0,0,0,0,2,0],[0,4,0,0,0,0],[5,0,0,0,1,0],[0,0,1,0,0,0],[4,0,3,0,0,0]]:[[0,3,0,6,0,5],[1,0,0,3,0,0],[0,0,6,0,0,1],[0,0,0,0,0,0],[0,2,0,0,0,0],[5,0,0,4,2,0]];
  const order=isSecond?[1,2,5]:[1,2,6];
  const targets=isSecond?[{r:5,c:1,answer:1},{r:4,c:0,answer:2},{r:1,c:1,answer:5}]:[{r:0,c:4,answer:1},{r:1,c:5,answer:2},{r:1,c:1,answer:6}];
  const active=targets[state.index];
  grid.className="sudoku six-intro-board number-focus-board";grid.style.display="grid";grid.style.gridTemplateColumns="repeat(6,minmax(0,1fr))";grid.style.gridTemplateRows="repeat(6,minmax(0,1fr))";grid.style.width="min(100%,590px)";grid.style.aspectRatio="1";grid.style.height="auto";
  const scanned=[];
  if(state.scanDigit!==null){for(let r=0;r<6;r++)for(let c=0;c<6;c++)if(puzzle[r][c]===state.scanDigit||state.values[`${r},${c}`]===state.scanDigit)scanned.push({r,c});}
  const affected=new Set();
  scanned.forEach(({r,c})=>{for(let i=0;i<6;i++){affected.add(`${r},${i}`);affected.add(`${i},${c}`);}const br=isSecond?Math.floor(r/3)*3:Math.floor(r/2)*2,bc=isSecond?Math.floor(c/2)*2:Math.floor(c/3)*3,bh=isSecond?3:2,bw=isSecond?2:3;for(let rr=br;rr<br+bh;rr++)for(let cc=bc;cc<bc+bw;cc++)affected.add(`${rr},${cc}`);});
  if(active)affected.delete(`${active.r},${active.c}`);
  puzzle.forEach((row,r)=>row.forEach((v,c)=>{const key=`${r},${c}`,item=document.createElement("div");item.className="cell six-intro-cell number-focus-cell";item.dataset.cell=key;item.style.border="1px solid #aaa";if(isSecond?(c===1||c===3):(c===2))item.style.borderRight="4px solid #222";if(isSecond?(r===2):(r===1||r===3))item.style.borderBottom="4px solid #222";
   const val=state.values[key]??v;
   if(affected.has(key))item.classList.add("scan-highlight");if(state.scanDigit!==null&&val===state.scanDigit)item.classList.add("scan-number");
   if(val){item.textContent=String(val);if(v)item.classList.add("locked");else item.classList.add("number-focus-filled");
    if(v&&order.includes(v)){item.tabIndex=0;item.setAttribute("role","button");item.setAttribute("aria-label",`選擇棋盤上已有的數字${v}`);item.addEventListener("click",()=>{const expected=order[state.index];if(v!==expected){say(`目前請檢查全部的 ${expected}，請點選棋盤上已有的 ${expected}。`,"bad");return;}state.scanDigit=v;selectedCell=null;render();say(`已反白所有既有的 ${v} 所在的橫排、直排與六宮格。請自行找出能填入 ${v} 的空格。`,"good");});}
   }else{item.classList.add("number-focus-empty");item.tabIndex=0;item.setAttribute("role","button");item.setAttribute("aria-label",`選擇第${r+1}列第${c+1}欄空格`);if(selectedCell===key)item.classList.add("selected");item.addEventListener("click",()=>{if(state.scanDigit===null){say("請先點選棋盤上已存在的指定數字，觀察反白區域。","bad");return;}selectedCell=key;render();say(`已選取這個空格。請按下方的 ${state.scanDigit} 填入。`,"good");});}
   grid.appendChild(item);
  }));
  $("question").textContent=state.index<3?`第 ${state.index+1} / 3 題：先點棋盤上已有的 ${order[state.index]}，再找出可填入的位置`:"三題完成";
  return;
 }
 if(current.mode==="sixintro"){
  const puzzle=[[0,3,0,6,0,5],[1,0,0,3,0,0],[0,0,6,0,0,1],[0,0,0,0,0,0],[0,2,0,0,0,0],[5,0,0,4,2,0]];
  // 同一張題目依序解三個目標格；答對的數字保留在棋盤上。
  const targets=[{r:1,c:4,answer:4,label:"一"},{r:1,c:5,answer:2,label:"二"},{r:0,c:4,answer:1,label:"三"}];
  const state=window.sixIntroState||(window.sixIntroState={index:0,values:{}});
  grid.className="sudoku six-intro-board";grid.style.display="grid";grid.style.gridTemplateColumns="repeat(6,minmax(0,1fr))";grid.style.gridTemplateRows="repeat(6,minmax(0,1fr))";grid.style.width="min(100%,590px)";grid.style.aspectRatio="1";grid.style.height="auto";
  puzzle.forEach((row,r)=>row.forEach((v,c)=>{const item=document.createElement("div");item.className="cell six-intro-cell";item.dataset.cell=`${r},${c}`;item.style.border="1px solid #aaa";if(c===2)item.style.borderRight="4px solid #222";if(r===1||r===3)item.style.borderBottom="4px solid #222";const targetIndex=targets.findIndex(t=>t.r===r&&t.c===c);if(v){item.textContent=String(v);item.classList.add("locked");}else if(targetIndex>=0&&state.values[targetIndex]!==undefined){item.textContent=String(state.values[targetIndex]);item.classList.add("six-intro-correct");}else if(targetIndex===state.index){item.classList.add("six-intro-target");item.textContent="？";item.setAttribute("aria-label",`第${targetIndex+1}題問號目標格`);}grid.appendChild(item)}));
  $("question").textContent=state.index<3?`第 ${state.index+1} / 3 題：請解開問號所在的格子`:"三題完成";return;
 }
 if(current.mode==="sixintro2"){
  // 固定題目；標記只代表題目順序，遊戲中只顯示當前問號。
  const puzzle=[[6,2,0,0,5,0],[0,0,0,0,2,0],[0,4,0,0,0,0],[5,0,0,0,1,0],[0,0,1,0,0,0],[4,0,3,0,0,0]];
  const targets=[{r:0,c:2,answer:4},{r:5,c:4,answer:6},{r:5,c:1,answer:1},{r:2,c:4,answer:3},{r:4,c:4,answer:4}];
  const state=window.sixIntro2State||(window.sixIntro2State={index:0,values:{}});
  grid.className="sudoku six-intro-board six-intro2-board";grid.style.display="grid";grid.style.gridTemplateColumns="repeat(6,minmax(0,1fr))";grid.style.gridTemplateRows="repeat(6,minmax(0,1fr))";grid.style.width="min(100%,590px)";grid.style.aspectRatio="1";grid.style.height="auto";
  puzzle.forEach((row,r)=>row.forEach((v,c)=>{const item=document.createElement("div");item.className="cell six-intro-cell";item.dataset.cell=`${r},${c}`;item.style.border="1px solid #aaa";if(c===1||c===3)item.style.borderRight="4px solid #222";if(r===2)item.style.borderBottom="4px solid #222";const ti=targets.findIndex(t=>t.r===r&&t.c===c);if(v){item.textContent=String(v);item.classList.add("locked");}else if(ti>=0&&state.values[ti]!==undefined){item.textContent=String(state.values[ti]);item.classList.add("six-intro-correct");}else if(ti===state.index){item.classList.add("six-intro-target");item.textContent="？";item.setAttribute("aria-label",`第${ti+1}題問號目標格`);}grid.appendChild(item)}));
  $("question").textContent=state.index<5?`第 ${state.index+1} / 5 題：請解開問號所在的格子`:"五題完成";return;
 }
 if(current.mode==="breakthrough"){
  const puzzles=[
   {fixed:[[1,0,3],[2,3,4],[3,1,1],[3,3,3]],targets:[{r:2,c:0,v:2},{r:3,c:2,v:2}]},
   {fixed:[[0,1,4],[0,3,2],[2,0,3],[2,3,1]],targets:[{r:0,c:0,v:1},{r:2,c:1,v:2}]},
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
function answer(n){if(answered)return;if(current&&(current.mode==="numberfocus3"||current.mode==="numberfocus4")){
 const isSecondClass=current.mode==="numberfocus4";
 const state=isSecondClass?(window.numberFocus4State||(window.numberFocus4State={values:{},notes:{},scanDigit:null})):(window.numberFocus3State||(window.numberFocus3State={values:{},notes:{},scanDigit:null}));
 const puzzle=isSecondClass?[[6,2,0,0,5,0],[0,0,0,0,2,0],[0,4,0,0,0,0],[5,0,0,0,1,0],[0,0,1,0,0,0],[4,0,3,0,0,0]]:[[0,3,0,6,1,5],[1,0,0,3,4,2],[0,0,6,0,0,1],[0,0,0,0,0,0],[0,2,0,0,0,0],[5,0,0,4,2,0]];
 const solution=isSecondClass?[[6,2,4,3,5,1],[3,5,6,1,2,4],[1,4,5,2,3,6],[5,6,2,4,1,3],[2,3,1,6,4,5],[4,1,3,5,6,2]]:[[4,3,2,6,1,5],[1,6,5,3,4,2],[2,4,6,5,3,1],[3,5,1,2,6,4],[6,2,4,1,5,3],[5,1,3,4,2,6]];
 if(selectedCell===null){say("請先直接點選上方 6×6 棋盤裡已存在的數字，系統才會反白該數字的橫排、直排與六宮格；下方數字按鈕只用來填答案或筆記。","bad");return;}
 const [r,c]=selectedCell.split(",").map(Number),key=selectedCell;if(puzzle[r][c]!==0){say("原本題目提供的數字不能修改，請選擇空格。","bad");return;}
 if(noteMode){state.notes[key]=state.notes[key]||[];if(state.notes[key].includes(n))state.notes[key]=state.notes[key].filter(v=>v!==n);else{state.notes[key].push(n);state.notes[key].sort((a,b)=>a-b);}render();selectedCell=key;const chosen=grid.querySelector(`[data-cell="${key}"]`);if(chosen)chosen.classList.add("selected");say(`已${(state.notes[key]||[]).includes(n)?"記下":"移除"}候選數字 ${n}。筆記可以繼續修改。`,"good");return;}
 if(n!==solution[r][c]){render();selectedCell=key;const chosen=grid.querySelector(`[data-cell="${key}"]`);if(chosen)chosen.classList.add("selected");say("這個數字目前不正確。請利用橫排、直排與六宮格線索再想一想，或先用筆記記錄候選數字。","bad");return;}
 state.values[key]=n;delete state.notes[key];selectedCell=null;render();const total=puzzle.flat().filter(v=>v===0).length;
 if(Object.keys(state.values).length===total){answered=true;document.querySelectorAll(".pad button").forEach(b=>b.disabled=true);hint.disabled=true;say(`太好了！整盤 6×6 數獨全部正確，你完成了${isSecondClass?"第二十六步":"第二十五步"}實戰！`,`good`);timer=setTimeout(()=>complete(),800);}else say(`答對了！${n} 已填入並保留。你可以繼續解題，或選擇其他數字觀察全盤。`,"good");return;
 }if(current&&(current.mode==="numberfocus"||current.mode==="numberfocus2")){
 const isSecond=current.mode==="numberfocus2";
 const state=isSecond?(window.numberFocus2State||(window.numberFocus2State={index:0,values:{},scanDigit:null})):(window.numberFocusState||(window.numberFocusState={index:0,values:{},scanDigit:null}));
 const order=isSecond?[1,2,5]:[1,2,6],expected=order[state.index];
 if(state.scanDigit===null){say(`請先點選棋盤上已有的 ${expected}，觀察反白區域。`,"bad");return;}
 if(selectedCell===null){say("請先自己找出並點選可以填入這個數字的空格，再按下方數字。","bad");return;}
 const activeTarget=(isSecond?[{r:5,c:1,answer:1},{r:4,c:0,answer:2},{r:1,c:1,answer:5}]:[{r:0,c:4,answer:1},{r:1,c:5,answer:2},{r:1,c:1,answer:6}])[state.index];
 const targetKey=`${activeTarget.r},${activeTarget.c}`;
 if(selectedCell!==targetKey){say("這個位置不正確。請重新觀察金色反白區域，找出能填入該數字的空格。","bad");return;}
 if(n!==expected){say(`這一題要填入 ${expected}，請再試一次。`,"bad");return;}
 state.values[targetKey]=n;state.index++;state.scanDigit=null;selectedCell=null;
 if(state.index>=3){render();say("三題全部完成！你已學會一次檢查一個數字。","good");timer=setTimeout(()=>complete(),700);}
 else{render();say(`答對了！數字 ${n} 已保留。請點選棋盤上已有的 ${order[state.index]}，繼續下一題。`,"good");}
 return;
 }if(current&&current.mode==="sixnote"){
 if(!noteMode){say("筆記模式目前關閉，請按「筆記」開啟。","bad");return;}if(selectedCell===null){say("請先選取一個空格，再按數字加入小字。","bad");return;}
 const state=window.sixNoteState,idx=Number(selectedCell);state.notes[idx]=state.notes[idx]||[];const list=state.notes[idx];if(list.includes(n)){state.notes[idx]=list.filter(v=>v!==n);say(`已移除小字 ${n}。`);}else{list.push(n);list.sort((a,b)=>a-b);say(`已在這一格記下小字 ${n}。請把兩個缺少的數字都記錄在每個空格。`,"good");}
 render();selectedCell=String(idx);const cell=grid.querySelector(`[data-index="${idx}"]`);if(cell)cell.classList.add("selected");
 const missingNums=state.targets.map(t=>t.answer).sort((a,b)=>a-b);const completeTargets=state.targets.every(t=>Array.isArray(state.notes[t.index])&&missingNums.every(v=>state.notes[t.index].includes(v))&&state.notes[t.index].length===missingNums.length);
 if(completeTargets){streak++;answered=true;document.querySelectorAll(".pad button").forEach(b=>b.disabled=true);$("clear-cell").disabled=true;say(`兩個空格都已正確記下兩個小字！連續答對 ${streak} / ${current.need} 題。`,"good");timer=setTimeout(()=>{if(streak>=current.need)complete();else{q++;selectedCell=null;window.sixNoteState={notes:{},targets:[],puzzle:null};noteMode=true;render();say("下一題開始！筆記模式已自動開啟，請在兩個空格各記下這一排缺少的兩個數字。","good");}},streak>=current.need?600:850);}
 else {const anyWrong=state.targets.some(t=>(state.notes[t.index]||[]).some(v=>!missingNums.includes(v)));if(anyWrong)say("有些小字不是這一排缺少的數字。按「空」可清除目前格子，再重新記錄。","bad");}return;
 }if(current&&current.mode==="sixnotecombat"){
  if(!noteMode){say("筆記模式目前關閉，請先按「筆記」開啟。","bad");return;}
  if(selectedCell===null){say("請先選取目前目標格，再選擇數字寫入小字。","bad");return;}
  const state=window.sixNoteCombatState||(window.sixNoteCombatState={index:0,notes:{}});
  const targets=[{r:0,c:0,candidates:[2,4]},{r:0,c:2,candidates:[2,4]},{r:1,c:1,candidates:[5,6]},{r:1,c:2,candidates:[5,6]},{r:2,c:3,candidates:[2,5]},{r:3,c:3,candidates:[2,5]},{r:5,c:5,candidates:[3,6]},{r:4,c:5,candidates:[3,6]}];
  const target=targets[state.index],key=`${target.r},${target.c}`;
  if(selectedCell!==key){say("請先完成目前亮起的目標格，再進行下一格。","bad");return;}
  state.notes[key]=state.notes[key]||[];
  if(state.notes[key].includes(n)){state.notes[key]=state.notes[key].filter(v=>v!==n);say(`已移除小字 ${n}。`);}
  else{state.notes[key].push(n);state.notes[key].sort((a,b)=>a-b);say(`已記下小字 ${n}。請在這一格記下兩個候選數字。`,"good");}
  render();selectedCell=key;const selected=grid.querySelector(`[data-cell="${key}"]`);if(selected)selected.classList.add("selected");
  const currentNotes=state.notes[key]||[];
  if(currentNotes.length===2&&target.candidates.every(v=>currentNotes.includes(v))){
   state.index++;selectedCell=null;
   if(state.index>=targets.length){answered=true;document.querySelectorAll(".pad button").forEach(b=>b.disabled=true);hint.disabled=true;render();say("八個目標格全部完成！你已完成第二十二步筆記實戰。","good");timer=setTimeout(()=>complete(),700);}
   else{render();say(`這格筆記正確！已保留，請繼續第 ${state.index+1} 格。筆記模式維持 ${noteMode?"ON":"OFF"}。`,"good");}
  }else if(currentNotes.length>2||currentNotes.some(v=>!target.candidates.includes(v))){say("這格的候選數字不正確，請用「空」清除後重新記錄。","bad");}
  else if(currentNotes.length===2){say("已記下兩個數字，但組合不正確。請用「空」清除後重試。","bad");}
  return;
 }if(current&&current.mode==="sixintro2"){
 const targets=[{r:0,c:2,answer:4},{r:5,c:4,answer:6},{r:5,c:1,answer:1},{r:2,c:4,answer:3},{r:4,c:4,answer:4}];const state=window.sixIntro2State||(window.sixIntro2State={index:0,values:{}});if(state.index>=targets.length)return;const targetInfo=targets[state.index];
 if(n===targetInfo.answer){state.values[state.index]=n;state.index++;if(state.index>=targets.length){answered=true;render();say("五題全部答對！你已完成6×6數獨第二類練習。","good");timer=setTimeout(()=>complete(),700);}else{render();say(`答對了！數字 ${n} 已保留在棋盤上，請繼續第 ${state.index+1} 題。`,"good");}}
 else{say("再想一想：觀察目標格所在的橫排、直排與六宮格。答對後數字會保留。","bad");}return;
 }if(current&&current.mode==="sixintro"){
 const targets=[{r:1,c:4,answer:4,label:"一"},{r:1,c:5,answer:2,label:"二"},{r:0,c:4,answer:1,label:"三"}];const state=window.sixIntroState||(window.sixIntroState={index:0,values:{}});if(state.index>=targets.length)return;const targetInfo=targets[state.index];
 if(n===targetInfo.answer){state.values[state.index]=n;state.index++;if(state.index>=targets.length){answered=true;render();say("三題全部答對！你已學會利用橫排、直排與六宮格的規則解題。","good");timer=setTimeout(()=>complete(),700);}else{render();say(`答對了！數字 ${n} 已保留在棋盤上，請繼續解第 ${state.index+1} 題。`,"good");}}
 else{say("再想一想：先看橫排，再看直排，最後檢查所在的六宮格。答對後數字會保留。","bad");}return;}if(current&&current.mode==="breakthrough"){
 if(!selectedCell){say("請先點選你認為可以突破的空格，再選擇數字。","bad");return;}
 const puzzles=[
  {targets:[{r:2,c:0,v:2},{r:3,c:2,v:2}]},
  {targets:[{r:0,c:0,v:1},{r:2,c:1,v:2}]},
  {targets:[{r:1,c:2,v:4},{r:3,c:3,v:4}]}
 ];
 const pi=window.breakthroughIndex||0,puzzle=puzzles[pi],[r,c]=selectedCell.split(",").map(Number),target=puzzle.targets.find(t=>t.r===r&&t.c===c),values=window.breakthroughValues||(window.breakthroughValues={});
 if(target&&target.v===n){Object.keys(values).forEach(key=>{if(values[key]&&values[key].wrong)delete values[key];});delete values[selectedCell];say("答對了！你找到破局點！","good");answered=true;document.querySelectorAll(".pad button").forEach(b=>b.disabled=true);hint.disabled=true;timer=setTimeout(()=>{window.breakthroughIndex=pi+1;selectedCell=null;if(window.breakthroughIndex>=3)complete();else{q++;render();say("新題目來了！再找出一個破局點。")}},550);return;}
 values[selectedCell]={value:n,wrong:true};selectedCell=null;render();say("這次不對，數字已標紅。再觀察一下，重新找破局點！","bad");return;
 }if(current&&(current.mode==="practical"||current.mode==="graduate")){
 if(!selectedCell){say("請先點選棋盤上的空格，再選擇數字。","bad");return;}
 const values = currentId==="graduate2" ? (window.graduate2Values ||= {}) : currentId==="graduate3" ? (window.graduate3Values ||= {}) : currentId==="graduate1" ? (window.graduateValues ||= {}) : (window.practicalValues ||= {});values[selectedCell]=n;render();say("已填入數字。填好後按「檢查」，也可以繼續修改。","good");return;
 }if(n===missing){answered=true;if(current.mode==="classic"){document.querySelectorAll(".pad button").forEach(b=>b.disabled=true);hint.disabled=true;const c=grid.querySelector("[data-gap]");if(c){c.removeAttribute("data-gap");c.className="cell sudoku-cell sparse-board-cell";c.textContent=String(n)}classicIndex++;say(`答對了！已完成 ${classicIndex} / 6 題。`,"good");timer=setTimeout(()=>{if(classicIndex>=6)complete();else{q++;render()}},650);return}streak++;const c=grid.querySelector("[data-gap]");if(c){c.className="cell filled sudoku-cell";c.textContent=String(n);c.removeAttribute("data-gap")}document.querySelectorAll(".pad button").forEach(b=>b.disabled=true);hint.disabled=true;say(`答對了！目前連續答對 ${streak} / ${current.need} 題。`,"good");timer=setTimeout(()=>{if(streak>=current.need)complete();else{q++;render()}},streak>=current.need?450:650)}else{streak=0;say("再想一想！請重新觀察線索。","bad");setTimeout(()=>{if(!answered)say("沒關係，慢慢找。請再選一次。")},900)}}
function selectCombatNoteCell(item){
 const state=window.sixNoteCombatState||(window.sixNoteCombatState={index:0,notes:{}});
 const targets=[{r:0,c:0},{r:0,c:2},{r:1,c:1},{r:1,c:2},{r:2,c:3},{r:3,c:3},{r:5,c:5},{r:4,c:5}];
 const target=targets[state.index],key=target?`${target.r},${target.c}`:"";
 if(item.dataset.cell!==key){say("請依照順序完成目前亮起的目標格。","bad");return;}
 selectedCell=key;grid.querySelectorAll(".six-note-combat-cell").forEach(c=>c.classList.toggle("selected",c.dataset.cell===selectedCell));$("clear-cell").disabled=false;say(noteMode?"已選取目標格，請用下方數字記錄兩個候選小字。":"請先按「筆記」開啟筆記模式，再選取目標格。");
}
function selectNoteCell(item){selectedCell=item.dataset.index;grid.querySelectorAll(".six-note-cell").forEach(c=>c.classList.toggle("selected",c.dataset.index===selectedCell));$("clear-cell").disabled=false;say(noteMode?"已選取空格，請按下方數字寫入小字。":"請先按「筆記」按鈕，再選取空格。");}
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
function complete(){if(!progressData.completed.includes(currentId))progressData.completed.push(currentId);progressData.lastCompleted=currentId;updateHomeProgress();saveProgress();let nextId=({row:"column",column:"box",box:"rowcol",rowcol:"threeways",threeways:"boxways",boxways:"advanced",advanced:"classic",classic:"practical",practical:"breakthrough",breakthrough:"graduate1",graduate1:"graduate2",graduate2:"graduate3",graduate3:"sixrow",sixrow:"sixcolumn",sixcolumn:"sixbox",sixbox:"step14",step14:"sixnote",sixnote:"sixcolumnnote",sixcolumnnote:"sixboxnote",sixboxnote:"sixintro2",sixintro2:"sixnotecombat",sixnotecombat:"numberfocus",numberfocus:"numberfocus2",numberfocus2:"numberfocus3",numberfocus3:"numberfocus4",numberfocus4:null})[currentId]||null;$("modal-title").textContent=current.title+"完成了！";$("modal-message").textContent=nextId?`你已完成這一步，做得很好！接下來繼續挑戰下一步吧。`:"你已完成目前所有練習步驟！做得很好。接下來可以回到主頁。";next.classList.toggle("hidden",!nextId);next.dataset.id=nextId||"";modal.classList.remove("hidden");(nextId?next:modalHome).focus()}
function goHome(){clearTimeout(timer);modal.classList.add("hidden");game.classList.add("hidden");home.classList.remove("hidden");current=null;currentId=null;updateHomeProgress();window.scrollTo(0,0)}
document.querySelectorAll(".start").forEach(b=>b.addEventListener("click",()=>start(b.dataset.id)));$("note-mode").addEventListener("click",()=>{if(!current||!(current.mode==="sixnote"||current.mode==="sixnotecombat"||current.mode==="numberfocus3"||current.mode==="numberfocus4"))return;noteMode=!noteMode;$("note-mode").classList.toggle("active",noteMode);$("note-mode").setAttribute("aria-pressed",String(noteMode));$("note-mode").dataset.state=noteMode?"ON":"OFF";say(noteMode?"筆記模式已開啟。請選取空格，再按下方數字輸入小字。":"筆記模式已關閉。");});$("clear-cell").addEventListener("click",()=>{
 if(!current)return;
 if(current.mode==="numberfocus4"){
  const state=window.numberFocus4State||(window.numberFocus4State={values:{},notes:{},scanDigit:null});
  if(selectedCell===null){
   if(state.scanDigit!==null){state.scanDigit=null;render();say("已取消所有金色反白。");}
   else say("目前沒有選取空格，也沒有反白區域。");
   return;
  }
  if(state.values)delete state.values[selectedCell];
  if(state.notes)delete state.notes[selectedCell];
  selectedCell=null;render();say("已清空選取格子的答案與筆記。");return;
 }
 if(selectedCell===null)return;
 if(current.mode==="sixnote"){const state=window.sixNoteState;if(state.notes)delete state.notes[Number(selectedCell)];}
 else if(current.mode==="sixnotecombat"){const state=window.sixNoteCombatState;if(state.notes)delete state.notes[selectedCell];}
 else if(current.mode==="numberfocus3"){const state=window.numberFocus3State;if(state.values)delete state.values[selectedCell];if(state.notes)delete state.notes[selectedCell];}
 else return;
 selectedCell=null;render();say("已清空選取格子的所有小字。");
});$("home-top").addEventListener("click",goHome);modalHome.addEventListener("click",goHome);next.addEventListener("click",()=>{if(next.dataset.id)start(next.dataset.id)});$("resume-progress").addEventListener("click",()=>{if(progressData.lastCompleted)start(progressData.lastCompleted)});hint.addEventListener("click",()=>{if(!current||answered)return;if(current.mode==="numberfocus3"||current.mode==="numberfocus4"){say(current.mode==="numberfocus4"?"這是第二類數獨，六宮格為 3 列 × 2 欄。可以先點棋盤上的數字觀察反白，或使用筆記記錄候選數字；若卡住，可先回第二十一步複習。":"先點選棋盤上的數字，觀察該數字所在的橫排、直排與六宮格；選取空格後按數字填入。筆記模式可記錄候選數字。","good");return;}if(current.mode==="numberfocus2"){say("請先點選棋盤上已有的 1、2 或 5，再觀察金色反白區域。","good");return;}if(current.mode==="numberfocus"){say("請先點選棋盤上已有的 1、2 或 6，再觀察金色反白區域。","good");return;}if(current.mode==="sixnotecombat"){say("先按「筆記」開啟，再根據目標格所在的橫排、直排與六宮格，記下兩個候選數字。已完成的格子會保留。","good");return;}if(current.mode==="sixnote"){const axis=current.noteType==="column"?"這一直排":current.noteType==="box"?"這個六宮格":"這一橫排";say(`先按「筆記」，再選兩個空格，分別記下${axis}缺少的兩個數字。`,`good`);return;}if(current.mode==="sixintro"){const tips=["第一題：觀察第二橫排、第五直排與右上六宮格。","第二題：觀察第二橫排、第六直排與右上六宮格。","第三題：觀察第一橫排、第五直排與右上六宮格。"];const st=window.sixIntroState||{index:0};say(tips[Math.min(st.index,2)]);return;}if(current.mode==="sixintro2"){say("請依序觀察五個目標格，先看所在橫排，再看直排與六宮格。");return;}if(current.mode==="breakthrough"){say("這一關請靠自己的觀察找出破局點！");return;}if(current.mode==="graduate"){say("畢業考請靠自己的觀察完成，加油！");return;}if(current.mode==="practical"){const targets=[[2,3],[1,3],[0,2],[2,2],[2,1],[3,2]],solution=[[4,1,2,3],[2,3,4,1],[1,2,3,4],[3,4,1,2]],values=current.mode==="graduate"?(window.graduateValues||(window.graduateValues={} )):(window.practicalValues||(window.practicalValues={}));let target=null;for(const [r,c] of targets){const key=`${r},${c}`;if(values[key]!==solution[r][c]){target={r,c,key,value:solution[r][c]};break;}}if(hintUsed>=6||!target){say("加油！提示已經使用完畢，你可以自己做到！","good");hint.disabled=true;return;}values[target.key]=target.value;hintUsed++;selectedCell=null;render();if(hintUsed>=6)say(`提示 ${hintUsed}/6：第 ${target.r+1} 列第 ${target.c+1} 欄是 ${target.value}。加油！提示已經使用完畢，你可以自己做到！`);else say(`提示 ${hintUsed}/6：第 ${target.r+1} 列第 ${target.c+1} 欄是 ${target.value}。`);if(hintUsed>=6)hint.disabled=true;return;}say("提示：缺少的數字是 "+missing+"。")});
$("check-answers").addEventListener("click",checkPractical);sm.addEventListener("click",()=>{if(font>0){font--;fontApply()}});lg.addEventListener("click",()=>{if(font<3){font++;fontApply()}});loadProgress();updateHomeProgress();fontApply()
})();