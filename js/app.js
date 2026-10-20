(() => {
"use strict";
const lessons={
 row:{step:1,title:"第一步：橫排",mode:"row",instruction:"請看這一橫排的四個位置。1、2、3、4 各出現一次，找出缺少的數字。"},
 column:{step:2,title:"第二步：直排",mode:"column",instruction:"請看這一直排的四個位置。1、2、3、4 各出現一次，找出缺少的數字。"},
 box:{step:3,title:"第三步：四宮格",mode:"box",instruction:"請看這個四宮格的四個位置。1、2、3、4 各出現一次，找出缺少的數字。"}
};
const $=id=>document.getElementById(id);
const home=$("home-screen"),game=$("game-screen"),grid=$("puzzle-grid"),feedback=$("feedback");
const streakCount=$("streak-count"),questionCount=$("question-count"),modal=$("completion-modal");
const modalTitle=$("modal-title"),modalMessage=$("modal-message"),modalNext=$("modal-next"),modalHome=$("modal-home");
const hint=$("hint-button"),numberButtons=[...document.querySelectorAll(".number-button")];
const fontSmall=$("font-smaller"),fontLarge=$("font-larger");
const fontLevels=["font-small","font-normal","font-large","font-xlarge"];
const fontNames=["字體小","字體正常","字體大","字體特大"];
let fontIndex=1,current=null,missing=null,streak=0,question=1,answered=false,timer=null;

function applyFont(){
 document.body.classList.remove(...fontLevels);document.body.classList.add(fontLevels[fontIndex]);
 fontSmall.disabled=fontIndex===0;fontLarge.disabled=fontIndex===fontLevels.length-1;
 fontSmall.title=`目前${fontNames[fontIndex]}，點此縮小`;fontLarge.title=`目前${fontNames[fontIndex]}，點此放大`;
 fontSmall.setAttribute("aria-label",`縮小字體，目前${fontNames[fontIndex]}`);
 fontLarge.setAttribute("aria-label",`放大字體，目前${fontNames[fontIndex]}`);
}
function shuffle(){const a=[1,2,3,4];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function say(message,kind=""){feedback.textContent=message;feedback.className="feedback"+(kind?` ${kind}`:"");}
function disableAnswers(disabled){numberButtons.forEach(b=>b.disabled=disabled);hint.disabled=disabled;}
function start(id){
 if(timer)clearTimeout(timer);modal.classList.add("hidden");current=lessons[id];if(!current)return;
 streak=0;question=1;home.classList.add("hidden");game.classList.remove("hidden");
 $("lesson-title").textContent=current.title;$("step-label").textContent=`第 ${current.step} 步`;$("instruction").textContent=current.instruction;streakCount.textContent="0";
 render();window.scrollTo({top:0,behavior:"smooth"});
}
function render(){
 answered=false;disableAnswers(false);say("請觀察格子，再按下方 1、2、3 或 4。");questionCount.textContent=`第 ${question} 題`;
 const nums=shuffle(),gap=Math.floor(Math.random()*4);missing=nums[gap];grid.className=`puzzle-grid ${current.mode}-mode`;grid.innerHTML="";
 nums.forEach((n,i)=>{const cell=document.createElement("div");cell.className="cell";cell.setAttribute("aria-label",`第 ${i+1} 格`);
 if(i===gap){cell.classList.add("missing");cell.dataset.missing="true";}else{cell.textContent=String(n);cell.setAttribute("aria-label",String(n));}grid.appendChild(cell);});
}
function answer(n){
 if(!current||answered)return;
 if(n===missing){
  answered=true;streak++;streakCount.textContent=String(streak);
  const cell=grid.querySelector('[data-missing="true"]');cell.classList.remove("missing");cell.classList.add("filled");cell.textContent=String(n);cell.setAttribute("aria-label",`答案 ${n}`);cell.removeAttribute("data-missing");
  disableAnswers(true);say("答對了！你找到了缺少的數字。","good");
  if(streak>=3)timer=setTimeout(showModal,500);
  else timer=setTimeout(()=>{question++;render();},850);
 }else{
  streak=0;streakCount.textContent="0";say("再想一想！這一排／直排／四宮格還缺哪個數字？","bad");
  setTimeout(()=>{if(!answered)say("沒關係，慢慢找。請再選一次。");},900);
 }
}
function showModal(){
 modalTitle.textContent=`${current.title}完成了！`;
 const next=current.step===1?"column":current.step===2?"box":null;
 if(next){modalNext.classList.remove("hidden");modalNext.dataset.next=next;modalMessage.textContent="你已經連續答對三題，做得很好！接下來想做什麼呢？";}
 else{modalNext.classList.add("hidden");modalMessage.textContent="你已完成前三個練習步驟！做得很好。接下來可以回到主頁。";}
 modal.classList.remove("hidden");if(next)modalNext.focus();else modalHome.focus();
}
function goHome(){if(timer)clearTimeout(timer);modal.classList.add("hidden");current=null;game.classList.add("hidden");home.classList.remove("hidden");window.scrollTo({top:0,behavior:"smooth"});}
document.querySelectorAll(".start-lesson").forEach(b=>b.addEventListener("click",()=>start(b.dataset.lesson)));
numberButtons.forEach(b=>b.addEventListener("click",()=>answer(Number(b.dataset.number))));
$("back-home").addEventListener("click",goHome);modalHome.addEventListener("click",goHome);
modalNext.addEventListener("click",()=>{const id=modalNext.dataset.next;if(id)start(id);});
hint.addEventListener("click",()=>{if(current&&!answered)say(`提示：缺少的數字是 ${missing}。你可以先找找看哪個數字沒有出現。`);});
fontSmall.addEventListener("click",()=>{if(fontIndex>0){fontIndex--;applyFont();}});
fontLarge.addEventListener("click",()=>{if(fontIndex<fontLevels.length-1){fontIndex++;applyFont();}});
applyFont();
})();