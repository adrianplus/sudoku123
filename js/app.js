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
numberfocus4:{step:26,title:"第二十六步：6×6數獨實戰二（比上題難，綜合運用所有技巧）",mode:"numberfocus4",text:"這是第二類 6×6 數獨，六宮格為 3 列 × 2 欄。點選棋盤上已有的數字，可反白該數字所在的橫排、直排與六宮格；選取空格後輸入答案，也可使用筆記記錄候選數字。若暫時沒有解題靈感，可以先回到第二十一步練習第二類數獨，再回來挑戰。整盤填對才能過關。",need:1},
ninerow:{step:27,title:"第二十七步：9×9數獨－橫排",mode:"ninerow",text:"請看這一橫排的九個位置。1、2、3、4、5、6、7、8、9 各出現一次，找出缺少的數字。",need:3},
ninecolumn:{step:28,title:"第二十八步：9×9數獨－直排",mode:"ninecolumn",text:"請看這一直排的九個位置。1、2、3、4、5、6、7、8、9 各出現一次，找出缺少的數字。",need:3},
ninebox:{step:29,title:"第二十九步：9×9數獨－九宮格",mode:"ninebox",text:"請看這個九宮格的九個位置。1、2、3、4、5、6、7、8、9 各出現一次，找出缺少的數字。",need:3},
ninerowcol:{step:30,title:"第三十步：思考橫排與直排後，填出數字",mode:"ninerowcol",text:"請同時觀察問號所在的橫排與直排。兩個方向的 1～9 都各少了一個相同的數字，找出答案。",need:8},
ninerowcolbox:{step:31,title:"第三十一步：橫排＋直排＋九宮格",mode:"ninerowcolbox",text:"觀察問號所在的橫排、直排與九宮格。三個方向合計放入 8 個不同數字，找出唯一缺少的第 9 個數字。",need:5},
nineadvanced:{step:32,title:"第三十二步：找出真正有用的線索",mode:"nineadvanced",text:"棋盤上有一些無關數字。請只觀察問號所在的橫排、直排與九宮格，找出真正有用的 8 個不同數字，推測答案。",need:5},
ninenote:{step:33,title:"第三十三步：練習筆記小字（9×9橫排）",mode:"ninenote",text:"請依照目前題次的提示，開啟「筆記」，在每個空格記下這一橫排缺少的候選數字。",need:6},
ninecolumnnote:{step:34,title:"第三十四步：練習筆記小字（9×9直排）",mode:"ninecolumnnote",text:"請依照目前題次的提示，開啟「筆記」，在每個空格記下這一直排缺少的候選數字。",need:6},
nineboxnote:{step:35,title:"第三十五步：練習筆記小字（9×9九宮格）",mode:"nineboxnote",text:"共五題：前兩題練習寫兩個小字，後三題練習寫三個小字。請開啟「筆記」，在每個空格記下這個九宮格缺少的候選數字。",need:5},
ninepractice1:{step:36,title:"第三十六步：9×9數獨練習（一）step by step",mode:"ninepractice1",text:"依照指定順序，一步一步解開這盤 9×9 數獨。每次只處理目前的目標格；答對後數字會保留，完成 21 步即可過關。",need:1},
ninepractice2:{step:37,title:"第三十七步：9×9數獨練習（二）利用筆記推測出答案",mode:"ninepractice2",text:"請先開啟「筆記」，依照指定順序在四個目標格寫下小字筆記。完成第四步後，請主動關閉「筆記」，再根據前面的筆記推測最後一格的正式答案。",need:1},
ninefocus:{step:38,title:"第三十八步：9×9數獨練習（三）一次檢查一個數字",mode:"ninefocus",text:"請先在題目中按下任一個數字 1。反金後，開啟「筆記」，把可能的位置記下小字。之後依序檢查數字 2～9，並自行判斷要記筆記或直接填入答案。",need:1},
ninecombat1:{step:39,title:"第三十九步：9×9數獨實戰一（九缺一）",mode:"ninecombat1",text:"先選擇空格，再按下方數字填入答案；需要時可自行開啟筆記記錄候選數字。也可以直接按棋盤上已有的數字，使用反金效果觀察該數字的位置與線索。",need:1},
ninecombat2:{step:40,title:"第四十步：9×9數獨實戰二（二餘法：利用一次檢查一個數字）",mode:"ninecombat2",text:"自行選擇空格，運用一次檢查一個數字與二餘法找出答案。可以使用筆記記錄候選數字，也可以直接按棋盤上已有的數字啟動反金效果。",need:1}
};
const $=id=>document.getElementById(id),home=$("home"),game=$("game"),grid=$("grid"),feedback=$("feedback"),modal=$("modal"),next=$("next"),modalHome=$("modal-home"),hint=$("hint"),buttons=Array.from(document.querySelectorAll(".pad button")),sm=$("font-smaller"),lg=$("font-larger");
const STORAGE_KEY="lezaiblingzhong_sudoku_progress_v3";let font=1,current=null,currentId=null,missing=0,streak=0,q=1,answered=false,timer=null,classicIndex=0,selectedCell=null,hintUsed=0,noteMode=false;
const levels=["font-small","font-normal","font-large","font-xlarge"];let progressData={completed:[],lastCompleted:null};
function loadProgress(){try{const raw=localStorage.getItem(STORAGE_KEY)||localStorage.getItem("lezaiblingzhong_sudoku_progress_v2");if(raw){const s=JSON.parse(raw);if(s&&Array.isArray(s.completed)){progressData.completed=s.completed.filter(id=>L[id]);progressData.lastCompleted=L[s.lastCompleted]?s.lastCompleted:(progressData.completed[progressData.completed.length-1]||null)}}}catch(e){}}
function saveProgress(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(progressData));}catch(e){say("本次已完成，但瀏覽器無法保存進度。","bad")}}
function updateHomeProgress(){const n=progressData.completed.length;$("completed-count").textContent=String(n);const b=$("resume-progress");b.disabled=n===0;b.setAttribute("aria-label",`已完成 ${n}/100，點擊回到上次完成的任務`);b.title=n?`回到上次完成的任務：${L[progressData.lastCompleted]?.title||""}`:"完成第一個任務後，就能從這裡回到上次完成的任務"}
function fontApply(){document.body.classList.remove(...levels);document.body.classList.add(levels[font]);sm.disabled=font===0;lg.disabled=font===3}
function say(t,k=""){feedback.textContent=t;feedback.className=k}
function start(id){if(!L[id])return;clearTimeout(timer);modal.classList.add("hidden");currentId=id;current=L[id];streak=0;q=1;classicIndex=0;selectedCell=null;hintUsed=0;noteMode=false;if(["sixnote","sixcolumnnote","sixboxnote"].includes(id))window.sixNoteState={notes:{},targets:[],puzzle:null};if(id==="ninenote")window.nineNoteState={notes:{},targets:[],puzzle:null};if(id==="ninecolumnnote")window.nineColumnNoteState={notes:{},targets:[],puzzle:null};if(id==="nineboxnote")window.nineBoxNoteState={notes:{},targets:[],puzzle:null};if(id==="sixnotecombat")window.sixNoteCombatState={index:0,notes:{}};if(id==="numberfocus")window.numberFocusState={index:0,values:{},scanDigit:null};if(id==="numberfocus2")window.numberFocus2State={index:0,values:{},scanDigit:null};if(id==="numberfocus3")window.numberFocus3State={values:{},notes:{},scanDigit:null};if(id==="numberfocus4")window.numberFocus4State={values:{},notes:{},scanDigit:null};$("note-mode").classList.remove("active");$("note-mode").setAttribute("aria-pressed","false");$("note-mode").disabled=false;$("clear-cell").disabled=true;if(id==="practical")window.practicalValues={};if(id==="graduate1")window.graduateValues={};if(id==="graduate2")window.graduate2Values={};if(id==="graduate3")window.graduate3Values={};if(id==="step14")window.sixIntroState={index:0,values:{}};if(id==="sixintro2")window.sixIntro2State={index:0,values:{}};if(id==="ninepractice1")window.ninePractice1State={index:0,values:{}};if(id==="ninepractice2"){window.ninePractice2State={index:0,notes:{},values:{}};selectedCell="0,4";}if(id==="ninefocus")window.nineFocusState={digit:1,notes:{},values:{},scanDigit:null};if(id==="ninecombat1")window.nineCombat1State={values:{},notes:{},scanDigit:null};if(id==="ninecombat2")window.nineCombat2State={values:{},notes:{},scanDigit:null};if(id==="breakthrough"){window.breakthroughIndex=0;window.breakthroughValues={};}home.classList.add("hidden");game.classList.remove("hidden");game.classList.toggle("column-layout",id==="column");game.classList.toggle("strong-box-lines",current.step>=4&&current.step<=13);game.classList.toggle("six-intro-mode",id==="step14"||id==="sixintro2");game.classList.toggle("six-practice-mode",["sixrow","sixcolumn","sixbox","sixnote","sixcolumnnote","sixboxnote"].includes(id));game.classList.toggle("six-note-mode",["sixnote","sixcolumnnote","sixboxnote","sixnotecombat","numberfocus3","numberfocus4","ninenote","ninecolumnnote","nineboxnote","ninepractice2","ninefocus","ninecombat1","ninecombat2"].includes(id));game.classList.toggle("numberfocus4-mode",id==="numberfocus4");game.classList.toggle("ninerow-mode",id==="ninerow"||id==="ninecolumn"||id==="ninebox"||id==="ninerowcol"||id==="ninerowcolbox"||id==="nineadvanced"||id==="ninenote"||id==="ninecolumnnote"||id==="nineboxnote"||id==="ninepractice1"||id==="ninepractice2"||id==="ninecombat1");$("clear-cell").classList.toggle("hidden",!["sixnote","sixcolumnnote","sixboxnote","sixnotecombat","numberfocus3","numberfocus4","ninenote","ninecolumnnote","nineboxnote","ninepractice2","ninefocus","ninecombat1","ninecombat2"].includes(id));$("note-mode").classList.toggle("hidden",!["sixnote","sixcolumnnote","sixboxnote","sixnotecombat","numberfocus3","numberfocus4","ninenote","ninecolumnnote","nineboxnote","ninepractice2","ninefocus","ninecombat1","ninecombat2"].includes(id));$("title").textContent=current.title;$("progress").textContent=current.step;$("instruction").textContent=current.text;render();window.scrollTo(0,0)}
function getNineCombatConfig(mode){
 if(mode==="ninecombat2")return {
  stateName:"nineCombat2State",
  puzzle:[[0,3,9,1,0,0,6,7,0],[1,0,8,0,0,0,2,0,9],[0,0,7,0,3,0,1,5,4],[0,0,0,9,5,0,3,1,7],[3,9,0,7,0,1,0,4,2],[7,1,5,0,2,4,0,0,0],[9,6,2,0,1,0,7,0,0],[8,0,1,0,0,0,4,0,3],[0,5,3,0,0,8,9,6,0]],
  solution:[[5,3,9,1,4,2,6,7,8],[1,4,8,5,6,7,2,3,9],[6,2,7,8,3,9,1,5,4],[2,8,4,9,5,6,3,1,7],[3,9,6,7,8,1,5,4,2],[7,1,5,3,2,4,8,9,6],[9,6,2,4,1,3,7,8,5],[8,7,1,6,9,5,4,2,3],[4,5,3,2,7,8,9,6,1]],
  completeText:"太好了！這盤 9×9 數獨全部正確，完成第四十步！"
 };
 return {stateName:"nineCombat1State",puzzle:[[5,0,4,1,0,7,8,0,9],[8,2,0,6,0,0,1,5,3],[6,0,1,5,3,8,4,2,7],[2,6,8,7,5,0,9,3,4],[0,0,5,3,0,9,6,0,0],[9,7,3,0,4,6,5,1,8],[3,8,2,9,1,5,7,0,6],[4,1,6,0,0,2,0,9,5],[7,0,9,4,0,3,2,0,1]],solution:[[5,3,4,1,2,7,8,6,9],[8,2,7,6,9,4,1,5,3],[6,9,1,5,3,8,4,2,7],[2,6,8,7,5,1,9,3,4],[1,4,5,3,8,9,6,7,2],[9,7,3,2,4,6,5,1,8],[3,8,2,9,1,5,7,4,6],[4,1,6,8,7,2,3,9,5],[7,5,9,4,6,3,2,8,1]],completeText:"太好了！這盤 9×9 數獨全部正確，完成第三十九步！"};
}
function render(){
 answered=false;document.querySelectorAll(".pad button").forEach(b=>{b.disabled=false;b.blur()});hint.disabled=false;const pad=document.querySelector(".pad");pad.innerHTML="";const padNums=["sixintro","sixintro2","sixrow","sixcolumn","sixbox","sixnote","sixnotecombat","numberfocus","numberfocus2","numberfocus3","numberfocus4"].includes(current.mode)?[1,2,3,4,5,6]:( ["ninerow","ninecolumn","ninebox","ninerowcol","ninerowcolbox","nineadvanced","ninenote","ninecolumnnote","nineboxnote","ninepractice1","ninepractice2","ninefocus","ninecombat1","ninecombat2"].includes(current.mode)?[1,2,3,4,5,6,7,8,9]:[1,2,3,4]);padNums.forEach(n=>{const b=document.createElement("button");b.type="button";b.dataset.n=String(n);b.textContent=String(n);b.addEventListener("click",()=>answer(n));pad.appendChild(b)});$("check-wrap").classList.toggle("hidden",!(["practical","graduate"].includes(current.mode)));
 say("請觀察格子，再選擇下方數字。");$("question").textContent=`第 ${q} 題`;grid.innerHTML="";
 grid.style.width="";grid.style.height="";grid.style.aspectRatio="";

 if(current.mode==="nineadvanced"){
  // 第三十二步：沿用第三十一步的三方向邏輯，
  // 但在其他不相關的位置加入合法數獨數字作為干擾。
  // 解題仍只需要問號所在的橫排、直排與九宮格。
  const shuffle=a=>{const b=a.slice();for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b};
  const nums=[1,2,3,4,5,6,7,8,9];
  const base=(r,c)=>(3*(r%3)+Math.floor(r/3)+c)%9;
  const bands=shuffle([0,1,2]), stacks=shuffle([0,1,2]);
  const rows=bands.flatMap(b=>shuffle([0,1,2]).map(r=>b*3+r));
  const cols=stacks.flatMap(s=>shuffle([0,1,2]).map(c=>s*3+c));
  const digits=shuffle(nums);
  const solution=rows.map(r=>cols.map(c=>digits[base(r,c)]));

  const targetRow=Math.floor(Math.random()*9);
  const targetCol=Math.floor(Math.random()*9);
  missing=solution[targetRow][targetCol];

  // 蒐集真正與問號有關的三個方向。
  const peerMap=new Map();
  const addPeer=(r,c,kind)=>{
    if(r===targetRow&&c===targetCol)return;
    const key=r+","+c;
    if(!peerMap.has(key))peerMap.set(key,{r,c,kinds:[kind]});
    else peerMap.get(key).kinds.push(kind);
  };
  for(let c=0;c<9;c++)addPeer(targetRow,c,"row");
  for(let r=0;r<9;r++)addPeer(r,targetCol,"col");
  const boxRow=Math.floor(targetRow/3)*3;
  const boxCol=Math.floor(targetCol/3)*3;
  for(let r=boxRow;r<boxRow+3;r++)for(let c=boxCol;c<boxCol+3;c++)addPeer(r,c,"box");
  const peers=[...peerMap.values()];

  // 8 個真正線索：1～9 中除了答案以外，每個數字只出現一次。
  // 強制至少各有一個橫排、直排，以及「只屬於九宮格」的線索，
  // 讓三個方向都真正參與解題。
  const selected=[], usedKeys=new Set();
  const rowOnly=shuffle(peers.filter(p=>p.kinds.includes("row")&&!p.kinds.includes("box")));
  const colOnly=shuffle(peers.filter(p=>p.kinds.includes("col")&&!p.kinds.includes("box")));
  const boxOnly=shuffle(peers.filter(p=>p.kinds.length===1&&p.kinds[0]==="box"));
  const reserveKinds=[
    {pool:rowOnly,label:"row"},
    {pool:colOnly,label:"col"},
    {pool:boxOnly,label:"box"}
  ];
  const availableValues=shuffle(nums.filter(n=>n!==missing));
  for(const item of reserveKinds){
    const candidates=shuffle(item.pool.filter(p=>!usedKeys.has(p.r+","+p.c)&&availableValues.includes(solution[p.r][p.c])));
    if(candidates.length){
      const pick=candidates[0];
      pick.value=solution[pick.r][pick.c];
      selected.push(pick);
      usedKeys.add(pick.r+","+pick.c);
      const i=availableValues.indexOf(pick.value);
      if(i>=0)availableValues.splice(i,1);
    }
  }
  for(const value of shuffle(availableValues)){
    const candidates=shuffle(peers.filter(p=>solution[p.r][p.c]===value&&!usedKeys.has(p.r+","+p.c)));
    if(!candidates.length)throw new Error("第三十二步題目生成失敗：找不到合法線索");
    const pick=candidates[0];
    pick.value=value;
    selected.push(pick);
    usedKeys.add(pick.r+","+pick.c);
  }

  const shownValues=selected.map(p=>p.value);
  if(selected.length!==8||new Set(shownValues).size!==8||shownValues.includes(missing)){
    throw new Error("第三十二步題目驗證失敗：有效線索必須剛好是 8 個不同數字");
  }

  // 加入干擾數字：只能放在三方向之外，因此不會成為解題線索。
  // 數字全部取自同一盤完整合法數獨，整張棋盤仍符合數獨規則。
  const relatedKeys=new Set(peers.map(p=>p.r+","+p.c));
  relatedKeys.add(targetRow+","+targetCol);
  const outside=[];
  for(let r=0;r<9;r++)for(let c=0;c<9;c++){
    const key=r+","+c;
    if(!relatedKeys.has(key))outside.push({r,c});
  }
  const distractCount=8+Math.floor(Math.random()*5); // 8～12 個干擾數字
  const distractors=shuffle(outside).slice(0,distractCount);

  const shown=new Map(selected.map(p=>[p.r+","+p.c,p.value]));
  distractors.forEach(p=>shown.set(p.r+","+p.c,solution[p.r][p.c]));

  grid.className="sudoku sparse-board rowcol nine-rowcol-board nine-threeway-board";
  grid.style.display="grid";
  grid.style.gridTemplateColumns="repeat(9,minmax(0,1fr))";
  grid.style.gridTemplateRows="repeat(9,minmax(0,1fr))";
  grid.style.width="min(100%,720px)";
  grid.style.aspectRatio="1";
  grid.style.height="auto";

  for(let r=0;r<9;r++)for(let c=0;c<9;c++){
    const item=document.createElement("div");
    item.className="cell sudoku-cell sparse-board-cell nine-rowcol-cell";
    item.style.border="1px solid #718096";
    if(c===2||c===5)item.style.borderRight="5px solid #334155";
    if(r===2||r===5)item.style.borderBottom="5px solid #334155";
    if(c===0)item.style.borderLeft="5px solid #334155";
    if(c===8)item.style.borderRight="5px solid #334155";
    if(r===0)item.style.borderTop="5px solid #334155";
    if(r===8)item.style.borderBottom="5px solid #334155";

    if(r===targetRow&&c===targetCol){
      item.classList.add("missing");
      item.dataset.gap="1";
    }else if(shown.has(r+","+c)){
      item.textContent=String(shown.get(r+","+c));
    }else{
      item.classList.add("empty-clue");
    }
    grid.appendChild(item);
  }
  return;
 }
 if(current.mode==="ninerowcolbox"){
  // 第三十一步：先建立完整、合法的 9×9 數獨盤。
  // 再從問號所在的橫排、直排、九宮格三個方向中，
  // 挑出 8 個「各不重複」的數字，唯一缺少的數字就是答案。
  const shuffle=a=>{const b=a.slice();for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b};
  const nums=[1,2,3,4,5,6,7,8,9];
  const base=(r,c)=>(3*(r%3)+Math.floor(r/3)+c)%9;
  const bands=shuffle([0,1,2]), stacks=shuffle([0,1,2]);
  const rows=bands.flatMap(b=>shuffle([0,1,2]).map(r=>b*3+r));
  const cols=stacks.flatMap(s=>shuffle([0,1,2]).map(c=>s*3+c));
  const digits=shuffle(nums);
  const solution=rows.map(r=>cols.map(c=>digits[base(r,c)]));

  const targetRow=Math.floor(Math.random()*9);
  const targetCol=Math.floor(Math.random()*9);
  missing=solution[targetRow][targetCol];

  // 收集目標格的三個方向（橫排、直排、九宮格）中所有可用位置。
  // 同一位置若同時屬於兩個方向，只保留一個位置；題面仍是完整 9×9 格。
  const peerMap=new Map();
  const addPeer=(r,c,kind)=>{
    if(r===targetRow&&c===targetCol)return;
    const key=r+","+c;
    if(!peerMap.has(key))peerMap.set(key,{r,c,kinds:[kind]});
    else peerMap.get(key).kinds.push(kind);
  };
  for(let c=0;c<9;c++)addPeer(targetRow,c,"row");
  for(let r=0;r<9;r++)addPeer(r,targetCol,"col");
  const boxRow=Math.floor(targetRow/3)*3;
  const boxCol=Math.floor(targetCol/3)*3;
  for(let r=boxRow;r<boxRow+3;r++)for(let c=boxCol;c<boxCol+3;c++)addPeer(r,c,"box");

  const peers=[...peerMap.values()];

  // 對 1～9 中除答案外的每個數字，各選一個合法位置。
  // 因為來源是完整合法數獨盤，所以任何方向內都不會產生重複數字。
  const selected=[];
  const usedKeys=new Set();
  for(const value of shuffle(nums.filter(n=>n!==missing))){
    const candidates=shuffle(peers.filter(p=>solution[p.r][p.c]===value&&!usedKeys.has(p.r+","+p.c)));
    if(!candidates.length)throw new Error("第三十一步題目生成失敗：找不到合法提示位置");
    const pick=candidates[0];
    pick.value=value;
    selected.push(pick);
    usedKeys.add(pick.r+","+pick.c);
  }

  // 題目生成後的硬性驗證：
  // 1. 一定剛好 8 個提示；2. 8 個提示完全不重複；
  // 3. 提示只出現在橫排、直排或九宮格三個相關範圍。
  const shownValues=selected.map(p=>p.value);
  if(selected.length!==8||new Set(shownValues).size!==8||shownValues.includes(missing)){
    throw new Error("第三十一步題目驗證失敗");
  }

  const shown=new Map(selected.map(p=>[p.r+","+p.c,p.value]));

  grid.className="sudoku sparse-board rowcol nine-rowcol-board nine-threeway-board";
  grid.style.display="grid";
  grid.style.gridTemplateColumns="repeat(9,minmax(0,1fr))";
  grid.style.gridTemplateRows="repeat(9,minmax(0,1fr))";
  grid.style.width="min(100%,720px)";
  grid.style.aspectRatio="1";
  grid.style.height="auto";

  for(let r=0;r<9;r++){
    for(let c=0;c<9;c++){
      const item=document.createElement("div");
      item.className="cell sudoku-cell sparse-board-cell nine-rowcol-cell";
      item.style.border="1px solid #718096";

      // 中間九宮格粗線維持 V78 的標準，不降低粗度。
      if(c===2||c===5)item.style.borderRight="5px solid #334155";
      if(r===2||r===5)item.style.borderBottom="5px solid #334155";

      // 最外圍同樣使用與中間分宮線一致的 5px 粗度。
      if(c===0)item.style.borderLeft="5px solid #334155";
      if(c===8)item.style.borderRight="5px solid #334155";
      if(r===0)item.style.borderTop="5px solid #334155";
      if(r===8)item.style.borderBottom="5px solid #334155";

      if(r===targetRow&&c===targetCol){
        item.classList.add("missing");
        item.dataset.gap="1";
      }else if(shown.has(r+","+c)){
        item.textContent=String(shown.get(r+","+c));
      }else{
        item.classList.add("empty-clue");
      }
      grid.appendChild(item);
    }
  }
  return;
 }
 if(current.mode==="ninerowcol"){
  // 第三十步：先建立一盤完整、合法的 9×9 數獨，
  // 再從同一橫排與直排取出提示。因此每一題都符合數獨規則：
  // 橫排、直排與九宮格的 1～9 都不重複。
  const shuffle=a=>{const b=a.slice();for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b};
  const nums=[1,2,3,4,5,6,7,8,9];
  const base=(r,c)=>(3*(r%3)+Math.floor(r/3)+c)%9;
  const bands=shuffle([0,1,2]), stacks=shuffle([0,1,2]);
  const rows=bands.flatMap(b=>shuffle([0,1,2]).map(r=>b*3+r));
  const cols=stacks.flatMap(s=>shuffle([0,1,2]).map(c=>s*3+c));
  const digits=shuffle(nums);
  const solution=rows.map(r=>cols.map(c=>digits[base(r,c)]));
  const targetRow=Math.floor(Math.random()*9);
  const targetCol=Math.floor(Math.random()*9);
  missing=solution[targetRow][targetCol];

  // 第1、2題：橫排與直排各完整顯示 8 個提示（共16個）。
  // 第3題起：總提示數依序減為 14、12、10、8；8 個時剛好是其餘八個不同數字。
  let actualClues=q<=2?16:Math.max(8,16-(q-2)*2);
  const rowSlots=shuffle([...Array(9).keys()].filter(c=>c!==targetCol));
  const colSlots=shuffle([...Array(9).keys()].filter(r=>r!==targetRow));
  let selected=[];
  if(actualClues>=8){
    // 先保留橫排與直排各至少 1 個，避免只剩單一方向。
    selected.push({type:"row",pos:rowSlots[0]},{type:"col",pos:colSlots[0]});
  }
  const pool=shuffle([
    ...rowSlots.slice(1).map(pos=>({type:"row",pos})),
    ...colSlots.slice(1).map(pos=>({type:"col",pos}))
  ]);
  selected.push(...pool.slice(0,actualClues-selected.length));

  // 當提示只剩 8 個時，必須讓八個非答案數字各出現一次；
  // 其餘題目直接使用完整合法數獨盤對應位置的數字，
  // 同一橫排或直排絕不會產生重複數字。
  if(actualClues===8){
    // 從完整合法盤的橫排／直排中，各數字只挑一個位置。
    // 每個非答案數字在兩條線上各有一個合法位置，隨機選其一，
    // 因此合計剛好出現八個不同數字，同時保留原數獨盤的合法性。
    const others=shuffle(nums.filter(n=>n!==missing));
    selected=others.map(value=>{
      const rp=rowSlots.find(c=>solution[targetRow][c]===value);
      const cp=colSlots.find(r=>solution[r][targetCol]===value);
      if(Math.random()<0.5)return {type:"row",pos:rp,value};
      return {type:"col",pos:cp,value};
    });
  }else{
    selected.forEach(slot=>slot.value=slot.type==="row"?solution[targetRow][slot.pos]:solution[slot.pos][targetCol]);
  }
  const rowMap={},colMap={};
  selected.forEach(slot=>{if(slot.type==="row")rowMap[slot.pos]=slot.value;else colMap[slot.pos]=slot.value});

  grid.className="sudoku sparse-board rowcol nine-rowcol-board";
  grid.style.display="grid";
  grid.style.gridTemplateColumns="repeat(9,minmax(0,1fr))";
  grid.style.gridTemplateRows="repeat(9,minmax(0,1fr))";
  grid.style.width="min(100%,720px)";
  grid.style.aspectRatio="1";
  grid.style.height="auto";
  for(let r=0;r<9;r++){
    for(let c=0;c<9;c++){
      const item=document.createElement("div");
      item.className="cell sudoku-cell sparse-board-cell nine-rowcol-cell";
      item.style.border="1px solid #718096";
      if(c===2||c===5)item.style.borderRight="5px solid #334155";
      if(r===2||r===5)item.style.borderBottom="5px solid #334155";
      if(r===targetRow&&c===targetCol){item.classList.add("missing");item.dataset.gap="1";}
      else if(r===targetRow && Object.prototype.hasOwnProperty.call(rowMap,c))item.textContent=String(rowMap[c]);
      else if(c===targetCol && Object.prototype.hasOwnProperty.call(colMap,r))item.textContent=String(colMap[r]);
      else item.classList.add("empty-clue");
      grid.appendChild(item);
    }
  }
  return;
 }
 if(current.mode==="ninebox"){
  const nums=[1,2,3,4,5,6,7,8,9];
  for(let i=nums.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[nums[i],nums[j]]=[nums[j],nums[i]];}
  const gap=Math.floor(Math.random()*9);missing=nums[gap];
  grid.className="nine-box-board";
  grid.style.display="grid";grid.style.gridTemplateColumns="repeat(3,minmax(0,1fr))";grid.style.gridTemplateRows="repeat(3,minmax(0,1fr))";grid.style.width="min(100%,480px)";grid.style.aspectRatio="1";
  nums.forEach((n,i)=>{const cell=document.createElement("div");cell.className="cell nine-box-cell";if(i===gap){cell.classList.add("missing");cell.dataset.gap="1";}else cell.textContent=String(n);grid.appendChild(cell)});return;
 }
 if(current.mode==="ninerow"||current.mode==="ninecolumn"){
  const nums=[1,2,3,4,5,6,7,8,9];
  for(let i=nums.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[nums[i],nums[j]]=[nums[j],nums[i]];}
  const gap=Math.floor(Math.random()*9);missing=nums[gap];
  grid.className="nine-practice-board"+(current.mode==="ninecolumn"?" vertical-nine-board":"");
  if(current.mode==="ninecolumn"){grid.style.gridTemplateColumns="1fr";grid.style.gridTemplateRows="repeat(9,minmax(0,1fr))";grid.style.width="min(100%,108px)";grid.style.aspectRatio="1 / 9";}else{grid.style.gridTemplateColumns="repeat(9,minmax(0,1fr))";grid.style.gridTemplateRows="1fr";grid.style.width="min(100%,900px)";grid.style.aspectRatio="9 / 1";}
  nums.forEach((n,i)=>{const cell=document.createElement("div");cell.className="cell nine-practice-cell";cell.style.border="1px solid #aaa";if(i===gap){cell.classList.add("missing");cell.dataset.gap="1";}else cell.textContent=String(n);grid.appendChild(cell)});return;
 }
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
  // 第18～20步：6×6 筆記練習。這段獨立於第33～35步，避免新版9×9筆記邏輯影響舊關卡。
  const state=window.sixNoteState||(window.sixNoteState={notes:{},targets:[],puzzle:null});
  if(!state.puzzle){
    const nums=[1,2,3,4,5,6];
    for(let i=nums.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[nums[i],nums[j]]=[nums[j],nums[i]];}
    const gaps=[];while(gaps.length<2){const x=Math.floor(Math.random()*6);if(!gaps.includes(x))gaps.push(x);}
    state.puzzle=nums.map((n,i)=>gaps.includes(i)?null:n);
    state.targets=gaps.map(i=>({index:i,answer:nums[i]}));
  }
  const axis=current.noteType||"row";
  grid.className="six-note-board "+(axis==="column"?"vertical-square-board":"");
  grid.style.display="grid";
  if(axis==="column"){
    grid.style.gridTemplateColumns="1fr";grid.style.gridTemplateRows="repeat(6,minmax(0,1fr))";grid.style.width="min(100%,108px)";grid.style.aspectRatio="1 / 6";
  }else if(axis==="box"){
    grid.style.gridTemplateColumns="repeat(3,minmax(0,1fr))";grid.style.gridTemplateRows="repeat(2,minmax(0,1fr))";grid.style.width="min(100%,390px)";grid.style.aspectRatio="3 / 2";
  }else{
    grid.style.gridTemplateColumns="repeat(6,minmax(0,1fr))";grid.style.gridTemplateRows="1fr";grid.style.width="min(100%,650px)";grid.style.aspectRatio="6 / 1";
  }
  state.puzzle.forEach((n,i)=>{
    const cell=document.createElement("div");cell.className="cell six-note-cell";cell.dataset.index=String(i);cell.style.border="1px solid #718096";
    if(axis==="box"&&i===2)cell.style.borderRight="4px solid #334155";
    if(axis==="box"&&i>=3)cell.style.borderTop="4px solid #334155";
    if(n!==null)cell.textContent=String(n);
    else{
      cell.classList.add("note-gap");cell.addEventListener("click",()=>selectNoteCell(cell));
      const mini=document.createElement("div");mini.className="pencil-mini-grid";
      for(let v=1;v<=6;v++){const x=document.createElement("span");x.className="pencil-note"+((state.notes[i]||[]).includes(v)?" filled":"");x.textContent=String(v);mini.appendChild(x);}cell.appendChild(mini);
    }
    if(selectedCell===String(i))cell.classList.add("selected");grid.appendChild(cell);
  });
  $("clear-cell").disabled=selectedCell===null;
  const nb=$("note-mode");nb.classList.toggle("active",noteMode);nb.setAttribute("aria-pressed",String(noteMode));nb.dataset.state=noteMode?"ON":"OFF";
  return;
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

 if((current.mode==="ninecombat1"||current.mode==="ninecombat2")){
  const cfg=getNineCombatConfig(current.mode);
  const state=window[cfg.stateName]||(window[cfg.stateName]={values:{},notes:{},scanDigit:null});
  const puzzle=cfg.puzzle, solution=cfg.solution;
  grid.className="sudoku number-focus-board nine-combat-board";grid.style.display="grid";grid.style.gridTemplateColumns="repeat(9,minmax(0,1fr))";grid.style.gridTemplateRows="repeat(9,minmax(0,1fr))";grid.style.width="min(100%,650px)";grid.style.aspectRatio="1";
  const vals={};puzzle.forEach((row,r)=>row.forEach((v,c)=>vals[`${r},${c}`]=state.values[`${r},${c}`]??v));
  const affected=new Set();if(state.scanDigit!==null){for(let r=0;r<9;r++)for(let c=0;c<9;c++)if(vals[`${r},${c}`]===state.scanDigit){for(let i=0;i<9;i++){affected.add(`${r},${i}`);affected.add(`${i},${c}`);}const br=Math.floor(r/3)*3,bc=Math.floor(c/3)*3;for(let rr=br;rr<br+3;rr++)for(let cc=bc;cc<bc+3;cc++)affected.add(`${rr},${cc}`);}}
  puzzle.forEach((row,r)=>row.forEach((v,c)=>{const key=`${r},${c}`,item=document.createElement("div");item.className="cell number-focus-cell nine-combat-cell";item.dataset.cell=key;item.style.border="1px solid #718096";if(c===2||c===5)item.style.borderRight="4px solid #334155";if(r===2||r===5)item.style.borderBottom="4px solid #334155";const val=vals[key];if(affected.has(key))item.classList.add("scan-highlight");if(state.scanDigit!==null&&val===state.scanDigit)item.classList.add("scan-number");
    if(v){item.textContent=String(v);item.classList.add("locked");}else if(state.values[key]!==undefined){item.textContent=String(state.values[key]);item.classList.add("number-focus-filled");}else{item.classList.add("number-focus-empty");const notes=state.notes[key]||[];if(notes.length){const mini=document.createElement("div");mini.className="pencil-mini-grid nine-pencil-mini-grid";for(let n=1;n<=9;n++){const span=document.createElement("span");span.className="pencil-note"+(notes.includes(n)?" filled":"");span.textContent=notes.includes(n)?String(n):"";mini.appendChild(span);}item.appendChild(mini);}}
    const displayedValue=vals[key];if(displayedValue){item.tabIndex=0;item.setAttribute("role","button");item.addEventListener("click",e=>{e.stopPropagation();state.scanDigit=displayedValue;selectedCell=null;render();say(`已反金數字 ${displayedValue}，可觀察它所在的橫排、直排與九宮格。`,"good");});}
    if(selectedCell===key)item.classList.add("selected");if(!v&&state.values[key]===undefined){item.tabIndex=0;item.setAttribute("role","button");item.addEventListener("click",()=>{selectedCell=key;render();say(`已選取第 ${r+1} 列、第 ${c+1} 欄。${noteMode?"按下方數字加入或移除筆記。":"按下方數字填入答案；需要時可開啟筆記。"}`,"good");});}grid.appendChild(item);
  }));
  const filled=Object.keys(state.values).length,total=puzzle.flat().filter(v=>v===0).length;$("question").textContent=`已完成 ${filled} / ${total} 格${state.scanDigit!==null?`｜正在反金數字 ${state.scanDigit}`:"｜可自行選格、填答、筆記或點數字反金"}`;
  const nb=$("note-mode"),cb=$("clear-cell");nb.classList.toggle("active",noteMode);nb.setAttribute("aria-pressed",String(noteMode));nb.dataset.state=noteMode?"ON":"OFF";cb.disabled=(selectedCell===null&&state.scanDigit===null);return;
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
 if(current.mode==="ninenote"){
  // 第三十三步：依目前題次顯示對應說明，避免一次顯示六題規則。
  const step33Text=q<=2
    ? `第 ${q} 題：同宮的橫排缺二。請開啟「筆記」，在兩個空格都記下這一排缺少的兩個候選數字。`
    : q<=4
      ? `第 ${q} 題：非同宮的橫排缺二。請開啟「筆記」，在兩個空格都記下這一排缺少的兩個候選數字。`
      : `第 ${q} 題：同宮的橫排缺三。請開啟「筆記」，在三個空格都記下這一排缺少的三個候選數字。`;
  $("instruction").textContent=step33Text;

  const state=window.nineNoteState||(window.nineNoteState={notes:{},targets:[],puzzle:null});
  if(!state.puzzle){
    const type=q<=2?"same2":q<=4?"split2":"same3";
    const shuffle=a=>{const b=a.slice();for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b};
    const nums=shuffle([1,2,3,4,5,6,7,8,9]);
    let gapIndices=[];
    if(type==="same2"){
      const band=Math.floor(Math.random()*3)*3;
      gapIndices=shuffle([band,band+1,band+2]).slice(0,2).sort((a,b)=>a-b);
    }else if(type==="split2"){
      const bands=shuffle([0,1,2]).slice(0,2);
      gapIndices=bands.map(b=>b*3+Math.floor(Math.random()*3)).sort((a,b)=>a-b);
    }else{
      const band=Math.floor(Math.random()*3)*3;
      gapIndices=[band,band+1,band+2];
    }
    state.puzzle={nums,gapIndices,type};
    state.notes={};
    state.targets=gapIndices.map(i=>({index:i,answer:nums[i]}));
  }
  const nums=state.puzzle.nums,gapIndices=state.puzzle.gapIndices;
  const missingNums=gapIndices.map(i=>nums[i]).sort((a,b)=>a-b); missing=missingNums[0];

  grid.className="nine-note-row-board";
  grid.style.display="grid";
  grid.style.gridTemplateColumns="repeat(9,minmax(0,1fr))";
  grid.style.gridTemplateRows="1fr";
  grid.style.width="min(100%,720px)";
  grid.style.aspectRatio="9 / 1";
  grid.style.height="auto";
  for(let c=0;c<9;c++){
    const cell=document.createElement("div");
    cell.className="cell nine-note-cell";
    cell.style.border="1px solid #718096";
    if(c===0)cell.style.borderLeft="5px solid #334155";
    if(c===8)cell.style.borderRight="5px solid #334155";
    if(c===2||c===5)cell.style.borderRight="5px solid #334155";
    cell.style.borderTop="5px solid #334155";
    cell.style.borderBottom="5px solid #334155";
    if(gapIndices.includes(c)){
      cell.classList.add("note-gap"); cell.dataset.index=String(c); cell.tabIndex=0;
      cell.setAttribute("role","button"); cell.setAttribute("aria-label",`橫排第${c+1}格空格`);
      cell.addEventListener("click",()=>selectNoteCell(cell));
      cell.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();selectNoteCell(cell);}});
      const notes=state.notes[c]||[];
      const mini=document.createElement("div"); mini.className="pencil-mini-grid nine-pencil-mini-grid";
      for(let candidate=1;candidate<=9;candidate++){
        const small=document.createElement("span");
        small.className="pencil-note"+(notes.includes(candidate)?" filled":"");
        small.textContent=notes.includes(candidate)?String(candidate):"";
        mini.appendChild(small);
      }
      cell.appendChild(mini);
      if(selectedCell===String(c))cell.classList.add("selected");
    }else cell.textContent=String(nums[c]);
    grid.appendChild(cell);
  }
  const noteBtn=$("note-mode"),clearBtn=$("clear-cell");
  noteBtn.classList.toggle("active",noteMode); noteBtn.setAttribute("aria-pressed",String(noteMode)); noteBtn.dataset.state=noteMode?"ON":"OFF";
  clearBtn.disabled=selectedCell===null;
  return;
 }
 if(current.mode==="nineboxnote"){
  const step35Text=q<=2
    ? `第 ${q} 題：九宮格缺二。請開啟「筆記」，在兩個空格都記下缺少的兩個候選數字。`
    : `第 ${q} 題：九宮格缺三。請開啟「筆記」，在三個空格都記下缺少的三個候選數字。`;
  $("instruction").textContent=step35Text;
  const state=window.nineBoxNoteState||(window.nineBoxNoteState={notes:{},targets:[],puzzle:null});
  if(!state.puzzle){
    const shuffle=a=>{const b=a.slice();for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b};
    const nums=shuffle([1,2,3,4,5,6,7,8,9]);
    const gapCount=q<=2?2:3;
    const gapIndices=shuffle([0,1,2,3,4,5,6,7,8]).slice(0,gapCount).sort((a,b)=>a-b);
    state.puzzle={nums,gapIndices};state.notes={};state.targets=gapIndices.map(i=>({index:i,answer:nums[i]}));
  }
  const nums=state.puzzle.nums,gapIndices=state.puzzle.gapIndices;
  grid.className="nine-note-box-board";grid.style.display="grid";grid.style.gridTemplateColumns="repeat(3,minmax(0,1fr))";grid.style.gridTemplateRows="repeat(3,minmax(0,1fr))";grid.style.width="min(100%,520px)";grid.style.aspectRatio="1";grid.style.height="auto";
  for(let i=0;i<9;i++){
    const cell=document.createElement("div");cell.className="cell nine-note-cell";cell.style.border="1px solid #718096";
    const r=Math.floor(i/3),c=i%3;
    if(r===0)cell.style.borderTop="5px solid #334155";if(r===2)cell.style.borderBottom="5px solid #334155";if(c===0)cell.style.borderLeft="5px solid #334155";if(c===2)cell.style.borderRight="5px solid #334155";
    if(gapIndices.includes(i)){
      cell.classList.add("note-gap");cell.dataset.index=String(i);cell.tabIndex=0;cell.setAttribute("role","button");cell.setAttribute("aria-label",`九宮格第${i+1}格空格`);
      cell.addEventListener("click",()=>selectNoteCell(cell));cell.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();selectNoteCell(cell);}});
      const notes=state.notes[i]||[];const mini=document.createElement("div");mini.className="pencil-mini-grid nine-pencil-mini-grid";
      for(let candidate=1;candidate<=9;candidate++){const small=document.createElement("span");small.className="pencil-note"+(notes.includes(candidate)?" filled":"");small.textContent=notes.includes(candidate)?String(candidate):"";mini.appendChild(small);}cell.appendChild(mini);if(selectedCell===String(i))cell.classList.add("selected");
    }else cell.textContent=String(nums[i]);grid.appendChild(cell);
  }
  const noteBtn=$("note-mode"),clearBtn=$("clear-cell");noteBtn.classList.toggle("active",noteMode);noteBtn.setAttribute("aria-pressed",String(noteMode));noteBtn.dataset.state=noteMode?"ON":"OFF";clearBtn.disabled=selectedCell===null;return;
 }
 if(current.mode==="ninecolumnnote"){
  const step34Text=q<=2
    ? `第 ${q} 題：同宮的直排缺二。請開啟「筆記」，在兩個空格都記下這一直排缺少的兩個候選數字。`
    : q<=4
      ? `第 ${q} 題：非同宮的直排缺二。請開啟「筆記」，在兩個空格都記下這一直排缺少的兩個候選數字。`
      : `第 ${q} 題：同宮的直排缺三。請開啟「筆記」，在三個空格都記下這一直排缺少的三個候選數字。`;
  $("instruction").textContent=step34Text;
  const state=window.nineColumnNoteState||(window.nineColumnNoteState={notes:{},targets:[],puzzle:null});
  if(!state.puzzle){
    const type=q<=2?"same2":q<=4?"split2":"same3";
    const shuffle=a=>{const b=a.slice();for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b};
    const nums=shuffle([1,2,3,4,5,6,7,8,9]); let gapIndices=[];
    if(type==="same2"){const band=Math.floor(Math.random()*3)*3;gapIndices=shuffle([band,band+1,band+2]).slice(0,2).sort((a,b)=>a-b);}
    else if(type==="split2"){const bands=shuffle([0,1,2]).slice(0,2);gapIndices=bands.map(b=>b*3+Math.floor(Math.random()*3)).sort((a,b)=>a-b);}
    else {const band=Math.floor(Math.random()*3)*3;gapIndices=[band,band+1,band+2];}
    state.puzzle={nums,gapIndices,type};state.notes={};state.targets=gapIndices.map(i=>({index:i,answer:nums[i]}));
  }
  const nums=state.puzzle.nums,gapIndices=state.puzzle.gapIndices;
  grid.className="nine-note-column-board";grid.style.display="grid";grid.style.gridTemplateColumns="1fr";grid.style.gridTemplateRows="repeat(9,minmax(0,1fr))";grid.style.width="min(100%,120px)";grid.style.aspectRatio="1 / 9";grid.style.height="auto";
  for(let r=0;r<9;r++){
    const cell=document.createElement("div");cell.className="cell nine-note-cell nine-note-column-cell";cell.style.border="1px solid #718096";
    if(r===0)cell.style.borderTop="5px solid #334155";if(r===8)cell.style.borderBottom="5px solid #334155";if(r===2||r===5)cell.style.borderBottom="5px solid #334155";cell.style.borderLeft="5px solid #334155";cell.style.borderRight="5px solid #334155";
    if(gapIndices.includes(r)){
      cell.classList.add("note-gap");cell.dataset.index=String(r);cell.tabIndex=0;cell.setAttribute("role","button");cell.setAttribute("aria-label",`直排第${r+1}格空格`);
      cell.addEventListener("click",()=>selectNoteCell(cell));cell.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();selectNoteCell(cell);}});
      const notes=state.notes[r]||[];const mini=document.createElement("div");mini.className="pencil-mini-grid nine-pencil-mini-grid";
      for(let candidate=1;candidate<=9;candidate++){const small=document.createElement("span");small.className="pencil-note"+(notes.includes(candidate)?" filled":"");small.textContent=notes.includes(candidate)?String(candidate):"";mini.appendChild(small);}cell.appendChild(mini);if(selectedCell===String(r))cell.classList.add("selected");
    }else cell.textContent=String(nums[r]);grid.appendChild(cell);
  }
  const noteBtn=$("note-mode"),clearBtn=$("clear-cell");noteBtn.classList.toggle("active",noteMode);noteBtn.setAttribute("aria-pressed",String(noteMode));noteBtn.dataset.state=noteMode?"ON":"OFF";clearBtn.disabled=selectedCell===null;return;
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
 if(current.mode==="ninefocus"){
  const puzzle=[[0,1,0,0,5,3,7,9,8],[7,5,3,1,0,9,0,0,0],[0,2,0,4,0,7,0,0,3],[1,0,4,9,0,0,0,8,0],[0,8,0,6,0,4,0,7,0],[0,6,0,0,0,8,4,0,2],[3,0,0,8,0,5,0,6,0],[0,0,0,7,0,1,3,5,9],[5,9,1,3,4,0,0,2,0]];
  const solution=[[4,1,6,2,5,3,7,9,8],[7,5,3,1,8,9,2,4,6],[8,2,9,4,6,7,5,1,3],[1,3,4,9,7,2,6,8,5],[2,8,5,6,3,4,9,7,1],[9,6,7,5,1,8,4,3,2],[3,7,2,8,9,5,1,6,4],[6,4,8,7,2,1,3,5,9],[5,9,1,3,4,6,8,2,7]];
  const state=window.nineFocusState||(window.nineFocusState={digit:1,notes:{},values:{},scanDigit:null});
  const d=state.digit;
  $("instruction").textContent=d===1?"第 1 / 9 步：請在題目中按下任一個數字 1。反金後，請開啟「筆記」，將可能的位置記下小字 1。":`第 ${d} / 9 步：請在題目中按下任一個數字 ${d}，再自行判斷要記筆記或直接填入答案。`;
  grid.className="sudoku nine-practice-board number-focus-board nine-focus-board";grid.style.display="grid";grid.style.gridTemplateColumns="repeat(9,1fr)";grid.style.gridTemplateRows="repeat(9,1fr)";grid.style.width="min(100%,680px)";grid.style.aspectRatio="1";grid.style.height="auto";
  const vals={};puzzle.forEach((row,r)=>row.forEach((v,c)=>vals[`${r},${c}`]=state.values[`${r},${c}`]??v));
  const affected=new Set();if(state.scanDigit!==null){for(let r=0;r<9;r++)for(let c=0;c<9;c++)if(vals[`${r},${c}`]===state.scanDigit){for(let i=0;i<9;i++){affected.add(`${r},${i}`);affected.add(`${i},${c}`);}for(let rr=Math.floor(r/3)*3;rr<Math.floor(r/3)*3+3;rr++)for(let cc=Math.floor(c/3)*3;cc<Math.floor(c/3)*3+3;cc++)affected.add(`${rr},${cc}`);}}
  puzzle.forEach((row,r)=>row.forEach((v,c)=>{const key=`${r},${c}`,cell=document.createElement("div");cell.className="cell nine-practice-cell number-focus-cell";cell.dataset.cell=key;cell.style.border="1px solid #718096";if(c===0)cell.style.borderLeft="4px solid #334155";if(c===8)cell.style.borderRight="4px solid #334155";if(r===0)cell.style.borderTop="4px solid #334155";if(r===8)cell.style.borderBottom="4px solid #334155";if(c===2||c===5)cell.style.borderRight="4px solid #334155";if(r===2||r===5)cell.style.borderBottom="4px solid #334155";
   const val=vals[key];if(affected.has(key))cell.classList.add("scan-highlight");if(state.scanDigit!==null&&val===state.scanDigit)cell.classList.add("scan-number");
   if(v){cell.textContent=String(v);cell.classList.add("locked");cell.tabIndex=0;cell.setAttribute("role","button");cell.addEventListener("click",()=>{if(v!==d){say(`目前請先檢查數字 ${d}，請按題目中的任一個 ${d}。`,"bad");return;}state.scanDigit=d;selectedCell=null;render();say(`已反金所有數字 ${d}，請觀察各宮的空格。${d===1?"現在請開啟「筆記」，把可能的位置記下小字 1。":"可以自行判斷要記筆記或直接填入答案。"}`,"good");});}
   else if(state.values[key]!==undefined){cell.textContent=String(state.values[key]);cell.classList.add("filled");}
   else {const notes=state.notes[key]||[];if(notes.length){const mini=document.createElement("div");mini.className="pencil-mini-grid nine-pencil-mini-grid";for(let x=1;x<=9;x++){const sp=document.createElement("span");sp.className="pencil-note"+(notes.includes(x)?" filled":"");sp.textContent=notes.includes(x)?String(x):"";mini.appendChild(sp);}cell.appendChild(mini);}cell.tabIndex=0;cell.setAttribute("role","button");if(selectedCell===key)cell.classList.add("selected");cell.addEventListener("click",()=>{if(state.scanDigit===null){say(`請先在題目中按下任一個數字 ${d}，啟動反金效果。`,"bad");return;}selectedCell=key;render();say(noteMode?`已選取空格，按下方數字加入小字筆記。`:`已選取空格，可以直接填入答案，或自行開啟筆記。`,"good");});}
   grid.appendChild(cell);
  }));
  $("question").textContent=`第 ${d} / 9：${state.scanDigit===null?`請按題目中的 ${d}`:`正在檢查數字 ${d}`}`;
  const nb=$("note-mode"),cb=$("clear-cell");nb.classList.toggle("active",noteMode);nb.setAttribute("aria-pressed",String(noteMode));nb.dataset.state=noteMode?"ON":"OFF";cb.disabled=selectedCell===null;return;
 }
 if(current.mode==="ninepractice2"){
  const puzzle=[[0,0,7,3,0,5,4,9,6],[0,3,6,4,0,2,0,1,0],[5,4,0,6,9,8,0,0,7],[0,5,0,0,2,0,0,0,0],[1,0,0,5,0,4,0,0,2],[0,0,0,0,8,0,0,5,0],[8,0,0,2,5,3,0,6,9],[0,9,0,8,0,1,5,2,0],[6,2,5,7,0,9,1,0,0]];
  const targets=[{r:0,c:4,candidates:[1,7]},{r:1,c:4,candidates:[1,7]},{r:7,c:4,candidates:[4,6]},{r:8,c:4,candidates:[4,6]},{r:4,c:4,answer:3}];
  const state=window.ninePractice2State||(window.ninePractice2State={index:0,notes:{},values:{}});
  const target=targets[Math.min(state.index,4)];
  $("instruction").textContent=state.index<4?`第 ${state.index+1} / 5 步：請開啟「筆記」，在目前目標格同時記下兩個候選小字。`:`第 5 / 5 步：請關閉「筆記」，根據前面的四個小字筆記，直接填入最後一格的正式答案。`;
  grid.className="sudoku nine-practice-board nine-practice2-board";grid.style.display="grid";grid.style.gridTemplateColumns="repeat(9,1fr)";grid.style.gridTemplateRows="repeat(9,1fr)";grid.style.width="min(100%,680px)";grid.style.aspectRatio="1";grid.style.height="auto";
  puzzle.forEach((row,r)=>row.forEach((v,c)=>{const key=`${r},${c}`,cell=document.createElement("div");cell.className="cell nine-practice-cell";cell.dataset.cell=key;cell.style.border="1px solid #718096";if(c===0)cell.style.borderLeft="4px solid #334155";if(c===8)cell.style.borderRight="4px solid #334155";if(r===0)cell.style.borderTop="4px solid #334155";if(r===8)cell.style.borderBottom="4px solid #334155";if(c===2||c===5)cell.style.borderRight="4px solid #334155";if(r===2||r===5)cell.style.borderBottom="4px solid #334155";
    const ti=targets.findIndex(t=>t.r===r&&t.c===c);
    if(v){cell.textContent=String(v);cell.classList.add("locked");}
    else if(ti>=0){if(ti<4&&(state.notes[key]!==undefined)){const mini=document.createElement("div");mini.className="pencil-mini-grid nine-pencil-mini-grid";for(let x=1;x<=9;x++){const sp=document.createElement("span");const notes=state.notes[key]||[];sp.className="pencil-note"+(notes.includes(x)?" filled":"");sp.textContent=notes.includes(x)?String(x):"";mini.appendChild(sp);}cell.appendChild(mini);}else if(ti===4&&state.values[key]!==undefined){cell.textContent=String(state.values[key]);cell.classList.add("filled");}
      if(ti===state.index){cell.classList.add("nine-practice-target");cell.tabIndex=0;cell.setAttribute("role","button");cell.addEventListener("click",()=>{selectedCell=key;render();say(state.index<4?(noteMode?"目前目標格已選取，請按下方數字寫入小字。":"目前目標格已選取，請先開啟「筆記」。"):(!noteMode?"最後目標格已選取，請直接填入答案。":"請先關閉「筆記」，再填入正式答案。"),noteMode||state.index===4?"good":"bad");});}
      if(selectedCell===key)cell.classList.add("selected");
    }
    grid.appendChild(cell);
  }));
  const nb=$("note-mode"),cb=$("clear-cell");nb.classList.toggle("active",noteMode);nb.setAttribute("aria-pressed",String(noteMode));nb.dataset.state=noteMode?"ON":"OFF";cb.disabled=selectedCell===null;return;
 }
 if(current.mode==="ninepractice1"){
  const puzzle=[[1,9,7,0,4,3,6,8,0],[6,5,2,0,8,7,0,9,4],[8,4,0,0,6,9,1,0,7],[2,1,0,0,3,8,5,6,9],[3,7,0,9,0,6,0,1,2],[5,6,9,4,1,0,0,7,3],[4,0,1,6,7,0,0,3,8],[7,3,0,8,9,0,2,5,1],[0,8,5,3,2,0,7,4,6]];
  const solution=[[1,9,7,2,4,3,6,8,5],[6,5,2,1,8,7,3,9,4],[8,4,3,5,6,9,1,2,7],[2,1,4,7,3,8,5,6,9],[3,7,8,9,5,6,4,1,2],[5,6,9,4,1,2,8,7,3],[4,2,1,6,7,5,9,3,8],[7,3,6,8,9,4,2,5,1],[9,8,5,3,2,1,7,4,6]];
  // 順序完全依照使用者提供的紅色 1～21 標記；不是答案順序。
  const order=[[0,8],[2,7],[1,6],[6,6],[8,0],[6,1],[7,2],[2,2],[6,5],[7,5],[8,5],[5,5],[5,6],[4,6],[0,3],[1,3],[2,3],[3,3],[3,2],[4,2],[4,4]];
  const state=window.ninePractice1State||(window.ninePractice1State={index:0,values:{}});
  grid.className="sudoku nine-practice-board";grid.style.display="grid";grid.style.gridTemplateColumns="repeat(9,minmax(0,1fr))";grid.style.gridTemplateRows="repeat(9,minmax(0,1fr))";grid.style.width="min(100%,760px)";grid.style.aspectRatio="1";grid.style.height="auto";
  puzzle.forEach((row,r)=>row.forEach((v,c)=>{const key=`${r},${c}`,item=document.createElement("div");item.className="cell nine-practice-cell";item.dataset.cell=key;item.style.border="1px solid #718096";if(c===2||c===5)item.style.borderRight="5px solid #2d3e57";if(r===2||r===5)item.style.borderBottom="5px solid #2d3e57";const oi=order.findIndex(x=>x[0]===r&&x[1]===c);if(v){item.textContent=String(v);item.classList.add("locked");}else if(Object.prototype.hasOwnProperty.call(state.values,key)){item.textContent=String(state.values[key]);item.classList.add("nine-practice-correct");}else if(oi===state.index){item.textContent="？";item.classList.add("missing","nine-practice-target");item.setAttribute("aria-label",`第 ${state.index+1} 步目標格`);}else{item.classList.add("empty-clue");}grid.appendChild(item);}));
  $("question").textContent=state.index<order.length?`第 ${state.index+1} / 21 步：解開問號所在的格子`:"21 步完成";return;
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
  // 第十一步：依照新版題目，與第九步使用不同盤面。
  const graduate1Fixed=[[0,2,1],[0,3,4],[2,1,3],[3,3,1]];
  const graduate2Fixed=[[0,1,4],[0,3,2],[2,0,3],[2,3,1]];
  const graduate3Fixed=[[0,3,1],[1,0,2],[2,2,3],[2,3,2]];
  const fixed=currentId==="graduate1"?graduate1Fixed:(currentId==="graduate2"?graduate2Fixed:(currentId==="graduate3"?graduate3Fixed:practicalFixed));
  const solution=currentId==="graduate1"
    ?[[3,2,1,4],[4,1,2,3],[1,3,4,2],[2,4,3,1]]
    :(currentId==="graduate2"
      ?[[1,4,3,2],[2,3,1,4],[3,2,4,1],[4,1,2,3]]
      :(currentId==="graduate3"?[[4,3,2,1],[2,1,4,3],[1,4,3,2],[3,2,1,4]]:[[4,1,2,3],[2,3,4,1],[1,2,3,4],[3,4,1,2]]));
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
function answer(n){if(answered)return;if(current&&(current.mode==="ninecombat1"||current.mode==="ninecombat2")){
 const cfg=getNineCombatConfig(current.mode);
 const state=window[cfg.stateName]||(window[cfg.stateName]={values:{},notes:{},scanDigit:null});
 const puzzle=cfg.puzzle;
 const solution=cfg.solution;
 if(selectedCell===null){say("請先選擇一個空格，再按下方數字填入或記筆記。","bad");return;}const [r,c]=selectedCell.split(",").map(Number),key=selectedCell;if(puzzle[r][c]!==0){say("題目原有數字不能修改，請選擇空格。","bad");return;}
 if(noteMode){state.notes[key]=state.notes[key]||[];if(state.notes[key].includes(n))state.notes[key]=state.notes[key].filter(v=>v!==n);else{state.notes[key].push(n);state.notes[key].sort((a,b)=>a-b);}render();selectedCell=key;say(`已${(state.notes[key]||[]).includes(n)?"記下":"移除"}候選數字 ${n}。`,`good`);return;}
 if(n!==solution[r][c]){say("這個數字目前不正確。請再觀察橫排、直排與九宮格，或先使用筆記。","bad");return;}
 state.values[key]=n;delete state.notes[key];selectedCell=null;render();const total=puzzle.flat().filter(v=>v===0).length;if(Object.keys(state.values).length===total){answered=true;say(cfg.completeText,"good");timer=setTimeout(()=>complete(),800);}else say(`答對了！${n} 已填入並保留。`,`good`);return;
 }if(current&&(current.mode==="numberfocus3"||current.mode==="numberfocus4")){
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
 }if(current&&current.mode==="ninefocus"){
 const puzzle=[[0,1,0,0,5,3,7,9,8],[7,5,3,1,0,9,0,0,0],[0,2,0,4,0,7,0,0,3],[1,0,4,9,0,0,0,8,0],[0,8,0,6,0,4,0,7,0],[0,6,0,0,0,8,4,0,2],[3,0,0,8,0,5,0,6,0],[0,0,0,7,0,1,3,5,9],[5,9,1,3,4,0,0,2,0]];
 const solution=[[4,1,6,2,5,3,7,9,8],[7,5,3,1,8,9,2,4,6],[8,2,9,4,6,7,5,1,3],[1,3,4,9,7,2,6,8,5],[2,8,5,6,3,4,9,7,1],[9,6,7,5,1,8,4,3,2],[3,7,2,8,9,5,1,6,4],[6,4,8,7,2,1,3,5,9],[5,9,1,3,4,6,8,2,7]];
 const state=window.nineFocusState||(window.nineFocusState={digit:1,notes:{},values:{},scanDigit:null}),d=state.digit;
 const advanceFocus=()=>{
   if(d<9){const nextDigit=d+1;state.digit=nextDigit;state.scanDigit=null;selectedCell=null;render();say(`數字 ${d} 目前已完成檢查！接下來請在題目中按下任一個數字 ${nextDigit}。筆記開關維持你的設定。`,"good");}
   else{render();say("數字 1～9 都已完成檢查！你完成了第三十八步。","good");answered=true;timer=setTimeout(()=>complete(),700);}
 };
 const getCandidates=()=>{
   const board=puzzle.map((row,r)=>row.map((v,c)=>state.values[`${r},${c}`]??v));
   const candidates=[];
   for(let rr=0;rr<9;rr++)for(let cc=0;cc<9;cc++){
     const key2=`${rr},${cc}`;if(board[rr][cc]!==0)continue;
     if(board[rr].includes(d))continue;
     let colHas=false;for(let ii=0;ii<9;ii++)if(board[ii][cc]===d)colHas=true;
     if(colHas)continue;
     let boxHas=false;for(let ii=Math.floor(rr/3)*3;ii<Math.floor(rr/3)*3+3;ii++)for(let jj=Math.floor(cc/3)*3;jj<Math.floor(cc/3)*3+3;jj++)if(board[ii][jj]===d)boxHas=true;
     if(!boxHas)candidates.push(key2);
   }
   return candidates;
 };
 const maybeAdvance=()=>{const candidates=getCandidates();return candidates.length===0||candidates.every(k=>(state.notes[k]||[]).includes(d));};
 if(state.scanDigit===null){say(`請先按題目中的任一個數字 ${d}，啟動反金效果。`,"bad");return;}if(selectedCell===null){say("請先選取一個空格。","bad");return;}
 const [r,c]=selectedCell.split(",").map(Number),key=selectedCell;if(puzzle[r][c]!==0){say("題目原有數字不能修改。","bad");return;}
 if(noteMode){
  if(n!==d){say(`目前正在檢查數字 ${d}，請只記下小字 ${d}。`,"bad");return;}
  state.notes[key]=state.notes[key]||[];
  if(state.notes[key].includes(n))state.notes[key]=state.notes[key].filter(x=>x!==n);else{state.notes[key].push(n);state.notes[key].sort((a,b)=>a-b);}
  if(maybeAdvance()){advanceFocus();return;}
  render();selectedCell=key;say(`已記下小字 ${n}。如果某一格已能確定，也可以自行關閉筆記直接填入答案。`,"good");return;
 }
 if(n!==solution[r][c]){say("這個正式答案不正確。可以再觀察反金區域，或開啟筆記記錄候選數字。","bad");return;}
 state.values[key]=n;delete state.notes[key];
 if(maybeAdvance()){advanceFocus();return;}
 render();say(`答對了！已填入 ${n}。筆記模式維持由你自己決定。`,`good`);return;
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
 }if(current&&["ninenote","ninecolumnnote","nineboxnote"].includes(current.mode)){
 if(!noteMode){say("筆記模式目前關閉，請按「筆記」開啟。","bad");return;}
 if(selectedCell===null){say("請先選取一個空格，再按數字加入小字。","bad");return;}
 const state=current.mode==="ninecolumnnote"?window.nineColumnNoteState:(current.mode==="nineboxnote"?window.nineBoxNoteState:window.nineNoteState),idx=Number(selectedCell);
 state.notes[idx]=state.notes[idx]||[];
 const list=state.notes[idx];
 if(list.includes(n)){
   state.notes[idx]=list.filter(v=>v!==n);
   say(`已移除小字 ${n}。`);
 }else{
   list.push(n);list.sort((a,b)=>a-b);
   say(`已在這一格記下小字 ${n}。請在所有空格記下這一${current.mode==="ninecolumnnote"?"直排":(current.mode==="nineboxnote"?"九宮格":"橫排")}缺少的候選數字。`,"good");
 }
 render();
 selectedCell=String(idx);
 const cell=grid.querySelector(`[data-index="${idx}"]`);
 if(cell)cell.classList.add("selected");

 const missingNums=state.targets.map(t=>t.answer).sort((a,b)=>a-b);
 const completeTargets=state.targets.every(t=>
   Array.isArray(state.notes[t.index]) &&
   missingNums.every(v=>state.notes[t.index].includes(v)) &&
   state.notes[t.index].length===missingNums.length
 );
 if(completeTargets){
   streak++;answered=true;
   document.querySelectorAll(".pad button").forEach(b=>b.disabled=true);
   $("clear-cell").disabled=true;
   say(`這題完成！所有空格都已正確記下 ${missingNums.length} 個候選小字。第 ${q} / ${current.need} 題完成。`,"good");
   timer=setTimeout(()=>{
     if(streak>=current.need)complete();
     else{
       q++;selectedCell=null;
       if(current.mode==="ninecolumnnote")window.nineColumnNoteState={notes:{},targets:[],puzzle:null};else if(current.mode==="nineboxnote")window.nineBoxNoteState={notes:{},targets:[],puzzle:null};else window.nineNoteState={notes:{},targets:[],puzzle:null};
       noteMode=true;
       render();
       say(`第 ${q} / ${current.need} 題開始！筆記模式維持 ON。請繼續找出目前題目缺少的候選數字。`,"good");
     }
   },850);
 }else{
   const anyWrong=state.targets.some(t=>(state.notes[t.index]||[]).some(v=>!missingNums.includes(v)));
   if(anyWrong)say("有些小字不是這一橫排缺少的數字。按「空」可清除目前格子，再重新記錄。","bad");
 }
 return;
 }if(current&&current.mode==="sixnote"){
 if(!noteMode){say("筆記模式目前關閉，請按「筆記」開啟。","bad");return;}if(selectedCell===null){say("請先選取一個空格，再按數字加入小字。","bad");return;}
 const state=window.sixNoteState,idx=Number(selectedCell);state.notes[idx]=state.notes[idx]||[];const list=state.notes[idx];if(list.includes(n)){state.notes[idx]=list.filter(v=>v!==n);say(`已移除小字 ${n}。`);}else{list.push(n);list.sort((a,b)=>a-b);say(`已在這一格記下小字 ${n}。請把兩個缺少的數字都記錄在每個空格。`,"good");}
 render();selectedCell=String(idx);const cell=grid.querySelector(`[data-index="${idx}"]`);if(cell)cell.classList.add("selected");
 const missingNums=state.targets.map(t=>t.answer).sort((a,b)=>a-b);const completeTargets=state.targets.every(t=>Array.isArray(state.notes[t.index])&&missingNums.every(v=>state.notes[t.index].includes(v))&&state.notes[t.index].length===missingNums.length);
 if(completeTargets){streak++;answered=true;document.querySelectorAll(".pad button").forEach(b=>b.disabled=true);$("clear-cell").disabled=true;say(`兩個空格都已正確記下兩個小字！連續答對 ${streak} / ${current.need} 題。`,"good");timer=setTimeout(()=>{if(streak>=current.need)complete();else{q++;selectedCell=null;window.sixNoteState={notes:{},targets:[],puzzle:null};noteMode=true;render();say("下一題開始！筆記模式已自動開啟，請在兩個空格各記下目前題目缺少的兩個數字。","good");}},streak>=current.need?600:850);}
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
 }if(current&&current.mode==="ninepractice2"){
 const targets=[{r:0,c:4,candidates:[1,7]},{r:1,c:4,candidates:[1,7]},{r:7,c:4,candidates:[4,6]},{r:8,c:4,candidates:[4,6]},{r:4,c:4,answer:3}],state=window.ninePractice2State||(window.ninePractice2State={index:0,notes:{},values:{}}),target=targets[state.index],key=`${target.r},${target.c}`;
 // 第37步的反藍格已自動選取，不需要玩家再次點選。
 if(selectedCell!==key){selectedCell=key;}
 if(state.index<4){if(!noteMode){say("前四步請先開啟「筆記」，寫入兩個候選小字。","bad");return;}const candidates=target.candidates;if(!candidates.includes(n)){say("這個候選數字不正確，請再觀察九宮格。","bad");return;}const notes=state.notes[key]||(state.notes[key]=[]);if(!notes.includes(n))notes.push(n);notes.sort((a,b)=>a-b);if(notes.length<2){render();selectedCell=key;say(`已記下小字 ${n}，請再填入另一個候選數字。`,"good");return;}if(notes.length===2&&candidates.every(v=>notes.includes(v))){state.index++;if(state.index<5){const nextTarget=targets[state.index];selectedCell=`${nextTarget.r},${nextTarget.c}`;}render();say(state.index<5?`筆記正確！已保留小字 ${candidates.join("、")}，下一個目標格已自動選取，請繼續第 ${state.index+1} / 5 步。`:`筆記正確！前四格筆記已完成，最後目標格已自動選取。請關閉「筆記」，再填入正式答案。`,"good");return;}say("兩個候選小字不正確，請用「空」清除後重新記錄。","bad");return;}
 if(noteMode){say("最後一步請先主動關閉「筆記」，再直接填入正式答案。","bad");return;}if(n!==target.answer){say("再想一想：利用前面四個保留的小字筆記推測最後答案。","bad");return;}state.values[key]=n;answered=true;render();say("答對了！你已完成利用筆記推測答案的練習。","good");timer=setTimeout(()=>complete(),800);return;
 }if(current&&current.mode==="ninepractice1"){
 const solution=[[1,9,7,2,4,3,6,8,5],[6,5,2,1,8,7,3,9,4],[8,4,3,5,6,9,1,2,7],[2,1,4,7,3,8,5,6,9],[3,7,8,9,5,6,4,1,2],[5,6,9,4,1,2,8,7,3],[4,2,1,6,7,5,9,3,8],[7,3,6,8,9,4,2,5,1],[9,8,5,3,2,1,7,4,6]];
 const order=[[0,8],[2,7],[1,6],[6,6],[8,0],[6,1],[7,2],[2,2],[6,5],[7,5],[8,5],[5,5],[5,6],[4,6],[0,3],[1,3],[2,3],[3,3],[3,2],[4,2],[4,4]];
 const state=window.ninePractice1State||(window.ninePractice1State={index:0,values:{}});if(state.index>=order.length)return;const [r,c]=order[state.index],correct=solution[r][c],key=`${r},${c}`;
 if(n!==correct){say("再想一想：只要解開目前問號所在的格子即可。","bad");return;}
 state.values[key]=n;state.index++;if(state.index>=order.length){answered=true;render();say("太好了！你已依序完成全部 21 步，成功解開這盤數獨！","good");timer=setTimeout(()=>complete(),800);}else{render();say(`答對了！數字 ${n} 已保留，繼續第 ${state.index+1} / 21 步。`,"good");}return;
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
  // 第十步：接受題目初始狀態下可用橫排、直排與 2×2 宮格邏輯推得的所有答案。
  {targets:[
    {r:0,c:0,v:1},{r:0,c:2,v:3},
    {r:2,c:0,v:2},{r:2,c:1,v:3},{r:2,c:2,v:1},
    {r:3,c:0,v:4},{r:3,c:2,v:2}
  ]},
  {targets:[
    {r:0,c:0,v:1},{r:0,c:2,v:3},
    {r:1,c:1,v:3},
    {r:2,c:1,v:2},{r:2,c:2,v:4},
    {r:3,c:0,v:4}
  ]},
  {targets:[
    {r:0,c:2,v:2},
    {r:1,c:1,v:1},{r:1,c:2,v:4},{r:1,c:3,v:3},
    {r:3,c:1,v:2},{r:3,c:2,v:1},{r:3,c:3,v:4}
  ]}
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
function selectNoteCell(item){selectedCell=item.dataset.index;const selector=current&&(current.mode==="ninenote"||current.mode==="ninecolumnnote"||current.mode==="nineboxnote")?".nine-note-cell.note-gap":".six-note-cell";grid.querySelectorAll(selector).forEach(c=>c.classList.toggle("selected",c.dataset.index===selectedCell));$("clear-cell").disabled=false;say(noteMode?`已選取空格，請按下方數字寫入小字。`:`請先按「筆記」按鈕，再選取空格。`);}
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
function checkPractical(){if(!["practical","graduate1","graduate2","graduate3"].includes(currentId))return;const values = currentId==="graduate2" ? (window.graduate2Values ||= {}) : currentId==="graduate3" ? (window.graduate3Values ||= {}) : currentId==="graduate1" ? (window.graduateValues ||= {}) : (window.practicalValues ||= {});const fixedList=currentId==="graduate1"?[[0,2,1],[0,3,4],[2,1,3],[3,3,1]]:(currentId==="graduate2"?[[0,1,4],[0,3,2],[2,0,3],[2,3,1]]:(currentId==="graduate3"?[[0,3,1],[1,0,2],[2,2,3],[2,3,2]]:[[0,3,3],[1,2,4],[2,0,1],[3,3,2]]));const fixed=new Set(fixedList.map(([r,c])=>`${r},${c}`));let filled=0,wrong=0,empty=0;const solution=currentId==="graduate1"?[[3,2,1,4],[4,1,2,3],[1,3,4,2],[2,4,3,1]]:(currentId==="graduate2"?[[1,4,3,2],[2,3,1,4],[3,2,4,1],[4,1,2,3]]:(currentId==="graduate3"?[[4,3,2,1],[2,1,4,3],[1,4,3,2],[3,2,1,4]]:[[4,1,2,3],[2,3,4,1],[1,2,3,4],[3,4,1,2]]));
 grid.querySelectorAll(".practical-cell").forEach(cell=>{const key=cell.dataset.cell;if(fixed.has(key))return;const v=values[key];cell.classList.remove("wrong");if(v===undefined){empty++;return;}filled++;const [r,c]=key.split(",").map(Number);if(v!==solution[r][c]){wrong++;cell.classList.add("wrong");}});
 if(wrong){say(`已檢查 ${filled} 格，有 ${wrong} 格不正確，紅色數字請再試試看。正確答案不會直接公布。`,"bad");return;}
 if(empty){say(`目前填入的 ${filled} 格都正確！還有 ${empty} 格未完成，繼續加油。`,"good");return;}
 say(currentId==="graduate1"?"全部正確！你通過了4X4數獨畢業考（1/3）！":(currentId==="graduate2"?"全部正確！你通過了4X4數獨畢業考（2/3）！":(currentId==="graduate3"?"全部正確！你通過了4X4數獨畢業考（3/3）！":"全部正確！你完成了 4X4 數獨實戰！")),"good");answered=true;document.querySelectorAll(".pad button").forEach(b=>b.disabled=true);hint.disabled=true;timer=setTimeout(()=>complete(),650);
}
function complete(){if(!progressData.completed.includes(currentId))progressData.completed.push(currentId);progressData.lastCompleted=currentId;updateHomeProgress();saveProgress();let nextId=({row:"column",column:"box",box:"rowcol",rowcol:"threeways",threeways:"boxways",boxways:"advanced",advanced:"classic",classic:"practical",practical:"breakthrough",breakthrough:"graduate1",graduate1:"graduate2",graduate2:"graduate3",graduate3:"sixrow",sixrow:"sixcolumn",sixcolumn:"sixbox",sixbox:"step14",step14:"sixnote",sixnote:"sixcolumnnote",sixcolumnnote:"sixboxnote",sixboxnote:"sixintro2",sixintro2:"sixnotecombat",sixnotecombat:"numberfocus",numberfocus:"numberfocus2",numberfocus2:"numberfocus3",numberfocus3:"numberfocus4",numberfocus4:"ninerow",ninerow:"ninecolumn",ninecolumn:"ninebox",ninebox:"ninerowcol",ninerowcol:"ninerowcolbox",ninerowcolbox:"nineadvanced",nineadvanced:"ninenote",ninenote:"ninecolumnnote",ninecolumnnote:"nineboxnote",nineboxnote:"ninepractice1",ninepractice1:"ninepractice2",ninepractice2:"ninefocus",ninefocus:"ninecombat1",ninecombat1:"ninecombat2",ninecombat2:null})[currentId]||null;$("modal-title").textContent=current.title+"完成了！";$("modal-message").textContent=nextId?`你已完成這一步，做得很好！接下來繼續挑戰下一步吧。`:"你已完成目前所有練習步驟！做得很好。接下來可以回到主頁。";next.classList.toggle("hidden",!nextId);next.dataset.id=nextId||"";modal.classList.remove("hidden");(nextId?next:modalHome).focus()}
function goHome(){clearTimeout(timer);modal.classList.add("hidden");game.classList.add("hidden");home.classList.remove("hidden");current=null;currentId=null;updateHomeProgress();window.scrollTo(0,0)}
document.querySelectorAll(".start").forEach(b=>b.addEventListener("click",()=>start(b.dataset.id)));$("note-mode").addEventListener("click",()=>{if(!current||!(current.mode==="sixnote"||current.mode==="ninenote"||current.mode==="ninecolumnnote"||current.mode==="nineboxnote"||current.mode==="sixnotecombat"||current.mode==="numberfocus3"||current.mode==="numberfocus4"||current.mode==="ninepractice2"||current.mode==="ninefocus"||(current.mode==="ninecombat1"||current.mode==="ninecombat2")))return;noteMode=!noteMode;$("note-mode").classList.toggle("active",noteMode);$("note-mode").setAttribute("aria-pressed",String(noteMode));$("note-mode").dataset.state=noteMode?"ON":"OFF";say(noteMode?(current.mode==="ninepractice2"?"筆記模式已開啟。目標格已自動選取，請直接按下方數字輸入小字。":"筆記模式已開啟。請選取空格，再按下方數字輸入小字。"):"筆記模式已關閉。");});$("clear-cell").addEventListener("click",()=>{
 if(!current)return;
 if((current.mode==="ninecombat1"||current.mode==="ninecombat2")){
  const cfg=getNineCombatConfig(current.mode);
  const state=window[cfg.stateName]||(window[cfg.stateName]={values:{},notes:{},scanDigit:null});
  if(selectedCell===null){
   if(state.scanDigit!==null){state.scanDigit=null;render();say("已取消所有金色反白。");}
   else say("目前沒有選取空格，也沒有反金顯示。");
   return;
  }
  delete state.values[selectedCell];
  delete state.notes[selectedCell];
  const cleared=selectedCell;selectedCell=null;render();say(`已清空第 ${Number(cleared.split(',')[0])+1} 列、第 ${Number(cleared.split(',')[1])+1} 欄的答案與筆記。`);return;
 }
 if(current.mode==="ninefocus"){
  const state=window.nineFocusState||(window.nineFocusState={digit:1,notes:{},values:{},scanDigit:null});
  if(selectedCell===null){if(state.scanDigit!==null){state.scanDigit=null;render();say("已取消所有金色反白。");}else say("目前沒有選取空格，也沒有反金顯示。");return;}
  delete state.values[selectedCell];delete state.notes[selectedCell];selectedCell=null;render();say("已清空選取格子的答案與筆記。");return;
 }
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
 // 第 33、34、35 步共用筆記清除邏輯。
 // 先依目前關卡清除對應 state，再統一重新渲染；避免 else 鏈讓第 33、35 步提前 return。
 if(current.mode==="sixnote"){
  const state=window.sixNoteState;if(state.notes)delete state.notes[Number(selectedCell)];
 } else if(current.mode==="ninenote"){
  const state=window.nineNoteState;if(state.notes)delete state.notes[Number(selectedCell)];
 } else if(current.mode==="ninecolumnnote"){
  const state=window.nineColumnNoteState;if(state.notes)delete state.notes[Number(selectedCell)];
 } else if(current.mode==="nineboxnote"){
  const state=window.nineBoxNoteState;if(state.notes)delete state.notes[Number(selectedCell)];
 } else if(current.mode==="sixnotecombat"){
  const state=window.sixNoteCombatState;if(state.notes)delete state.notes[selectedCell];
 } else if(current.mode==="numberfocus3"){
  const state=window.numberFocus3State;if(state.values)delete state.values[selectedCell];if(state.notes)delete state.notes[selectedCell];
 } else return;
 selectedCell=null;render();say("已清空選取格子的所有小字。");
});$("home-top").addEventListener("click",goHome);modalHome.addEventListener("click",goHome);next.addEventListener("click",()=>{if(next.dataset.id)start(next.dataset.id)});$("resume-progress").addEventListener("click",()=>{if(progressData.lastCompleted)start(progressData.lastCompleted)});hint.addEventListener("click",()=>{if(!current||answered)return;if(current.mode==="numberfocus3"||current.mode==="numberfocus4"){say(current.mode==="numberfocus4"?"這是第二類數獨，六宮格為 3 列 × 2 欄。可以先點棋盤上的數字觀察反白，或使用筆記記錄候選數字；若卡住，可先回第二十一步複習。":"先點選棋盤上的數字，觀察該數字所在的橫排、直排與六宮格；選取空格後按數字填入。筆記模式可記錄候選數字。","good");return;}if(current.mode==="numberfocus2"){say("請先點選棋盤上已有的 1、2 或 5，再觀察金色反白區域。","good");return;}if(current.mode==="numberfocus"){say("請先點選棋盤上已有的 1、2 或 6，再觀察金色反白區域。","good");return;}if(current.mode==="sixnotecombat"){say("先按「筆記」開啟，再根據目標格所在的橫排、直排與六宮格，記下兩個候選數字。已完成的格子會保留。","good");return;}if(current.mode==="ninenote"){say("先按「筆記」，再選取空格，把這一橫排缺少的候選數字全部記成小字。注意本關共有六題，題型會依序改變。","good");return;}if(current.mode==="ninecolumnnote"){say("先按「筆記」，再選取空格，把這一直排缺少的候選數字全部記成小字。注意本關共有六題，題型會依序改變。","good");return;}if(current.mode==="sixnote"){const axis=current.noteType==="column"?"這一直排":current.noteType==="box"?"這個六宮格":"這一橫排";say(`先按「筆記」，再選兩個空格，分別記下${axis}缺少的兩個數字。`,`good`);return;}if(current.mode==="sixintro"){const tips=["第一題：觀察第二橫排、第五直排與右上六宮格。","第二題：觀察第二橫排、第六直排與右上六宮格。","第三題：觀察第一橫排、第五直排與右上六宮格。"];const st=window.sixIntroState||{index:0};say(tips[Math.min(st.index,2)]);return;}if(current.mode==="sixintro2"){say("請依序觀察五個目標格，先看所在橫排，再看直排與六宮格。");return;}if(current.mode==="breakthrough"){say("這一關請靠自己的觀察找出破局點！");return;}if(current.mode==="graduate"){say("畢業考請靠自己的觀察完成，加油！");return;}if(current.mode==="practical"){const targets=[[2,3],[1,3],[0,2],[2,2],[2,1],[3,2]],solution=[[4,1,2,3],[2,3,4,1],[1,2,3,4],[3,4,1,2]],values=current.mode==="graduate"?(window.graduateValues||(window.graduateValues={} )):(window.practicalValues||(window.practicalValues={}));let target=null;for(const [r,c] of targets){const key=`${r},${c}`;if(values[key]!==solution[r][c]){target={r,c,key,value:solution[r][c]};break;}}if(hintUsed>=6||!target){say("加油！提示已經使用完畢，你可以自己做到！","good");hint.disabled=true;return;}values[target.key]=target.value;hintUsed++;selectedCell=null;render();if(hintUsed>=6)say(`提示 ${hintUsed}/6：第 ${target.r+1} 列第 ${target.c+1} 欄是 ${target.value}。加油！提示已經使用完畢，你可以自己做到！`);else say(`提示 ${hintUsed}/6：第 ${target.r+1} 列第 ${target.c+1} 欄是 ${target.value}。`);if(hintUsed>=6)hint.disabled=true;return;}say("提示：缺少的數字是 "+missing+"。")});
$("check-answers").addEventListener("click",checkPractical);sm.addEventListener("click",()=>{if(font>0){font--;fontApply()}});lg.addEventListener("click",()=>{if(font<3){font++;fontApply()}});loadProgress();updateHomeProgress();fontApply()
})();