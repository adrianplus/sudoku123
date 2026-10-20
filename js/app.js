(()=>{"use strict";
const L={
 row:{step:1,title:"第一步：橫排",mode:"row",text:"請看這一橫排的四個位置。1、2、3、4 各出現一次，找出缺少的數字。"},
 column:{step:2,title:"第二步：直排",mode:"column",text:"請看這一直排的四個位置。1、2、3、4 各出現一次，找出缺少的數字。"},
 box:{step:3,title:"第三步：四宮格",mode:"box",text:"請看這個四宮格的四個位置。1、2、3、4 各出現一次，找出缺少的數字。"}
};
const $=id=>document.getElementById(id);
const home=$("home"),game=$("game"),grid=$("grid"),feedback=$("feedback"),modal=$("modal");
const next=$("next"),modalHome=$("modal-home"),hint=$("hint");
const buttons=Array.from(document.querySelectorAll(".pad button"));
const sm=$("font-smaller"),lg=$("font-larger");
const STORAGE_KEY="lezaiblingzhong_sudoku_progress_v2";
let font=1,current=null,currentId=null,missing=0,streak=0,q=1,answered=false,timer=null;
const levels=["font-small","font-normal","font-large","font-xlarge"];
let progressData={completed:[],lastCompleted:null};

function loadProgress(){
  try{
    const raw=window.localStorage.getItem(STORAGE_KEY);
    if(raw){
      const saved=JSON.parse(raw);
      if(saved&&Array.isArray(saved.completed)){
        progressData.completed=saved.completed.filter(id=>Object.prototype.hasOwnProperty.call(L,id));
        progressData.lastCompleted=Object.prototype.hasOwnProperty.call(L,saved.lastCompleted)?saved.lastCompleted:null;
      }
    }
  }catch(err){
    // If browser storage is blocked, keep the current-session progress usable.
    progressData={completed:[],lastCompleted:null};
  }
}
function saveProgress(){
  try{
    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(progressData));
    return true;
  }catch(err){
    say("本次已完成，但手機瀏覽器暫時無法保存進度。請確認網站未在無痕模式中開啟。","bad");
    return false;
  }
}
function updateHomeProgress(){
  const count=progressData.completed.length;
  $("completed-count").textContent=String(count);
  const btn=$("resume-progress");
  btn.disabled=count===0;
  btn.setAttribute("aria-label",`已完成 ${count}/100，點擊回到上次完成的任務`);
  btn.title=count
    ?`回到上次完成的任務：${L[progressData.lastCompleted]?L[progressData.lastCompleted].title:""}`
    :"完成第一個任務後，就能從這裡回到上次完成的任務";
}
function fontApply(){
  document.body.classList.remove(...levels);
  document.body.classList.add(levels[font]);
  sm.disabled=font===0;lg.disabled=font===3;
}
function say(text,kind=""){feedback.textContent=text;feedback.className=kind;}
function start(id){
  if(!L[id])return;
  clearTimeout(timer);modal.classList.add("hidden");
  currentId=id;current=L[id];streak=0;q=1;
  home.classList.add("hidden");game.classList.remove("hidden");
  game.classList.toggle("column-layout",id==="column");
  $("title").textContent=current.title;
  $("progress").textContent=String(current.step);
  $("instruction").textContent=current.text;
  render();window.scrollTo(0,0);
}
function render(){
  answered=false;
  buttons.forEach(b=>{b.disabled=false;b.blur();});
  hint.disabled=false;say("請觀察格子，再選擇下方數字。");
  $("question").textContent=`第 ${q} 題`;
  const nums=[1,2,3,4];
  for(let i=nums.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [nums[i],nums[j]]=[nums[j],nums[i]];
  }
  const gap=Math.floor(Math.random()*4);missing=nums[gap];
  grid.className=current.mode;grid.innerHTML="";
  nums.forEach((n,i)=>{
    const cell=document.createElement("div");cell.className="cell";
    if(i===gap){cell.classList.add("missing");cell.dataset.gap="1";}
    else cell.textContent=String(n);
    grid.appendChild(cell);
  });
}
function answer(n){
  if(answered)return;
  if(n===missing){
    answered=true;streak++;
    const cell=grid.querySelector("[data-gap]");
    if(cell){cell.className="cell filled";cell.textContent=String(n);cell.removeAttribute("data-gap");}
    buttons.forEach(b=>b.disabled=true);hint.disabled=true;
    say("答對了！你找到了缺少的數字。","good");
    timer=setTimeout(()=>{if(streak===3)complete();else{q++;render();}},streak===3?450:650);
  }else{
    streak=0;say("再想一想！還缺哪個數字？","bad");
    setTimeout(()=>{if(!answered)say("沒關係，慢慢找。請再選一次。");},900);
  }
}
function complete(){
  // Record one completed lesson only once, then update the visible counter immediately.
  if(!progressData.completed.includes(currentId))progressData.completed.push(currentId);
  progressData.lastCompleted=currentId;
  updateHomeProgress();
  saveProgress();
  const nextId=current.step===1?"column":current.step===2?"box":null;
  $("modal-title").textContent=current.title+"完成了！";
  $("modal-message").textContent=nextId
    ?"你已經連續答對三題，做得很好！接下來想做什麼呢？"
    :"你已完成目前三個練習步驟！做得很好。接下來可以回到主頁。";
  next.classList.toggle("hidden",!nextId);next.dataset.id=nextId||"";
  modal.classList.remove("hidden");(nextId?next:modalHome).focus();
}
function goHome(){
  clearTimeout(timer);modal.classList.add("hidden");
  game.classList.add("hidden");home.classList.remove("hidden");
  current=null;currentId=null;updateHomeProgress();window.scrollTo(0,0);
}
document.querySelectorAll(".start").forEach(b=>b.addEventListener("click",()=>start(b.dataset.id)));
buttons.forEach(b=>b.addEventListener("click",()=>answer(Number(b.dataset.n))));
$("home-top").addEventListener("click",goHome);
modalHome.addEventListener("click",goHome);
next.addEventListener("click",()=>{if(next.dataset.id)start(next.dataset.id);});
$("resume-progress").addEventListener("click",()=>{if(progressData.lastCompleted)start(progressData.lastCompleted);});
hint.addEventListener("click",()=>{if(current&&!answered)say("提示：缺少的數字是 "+missing+"。");});
sm.addEventListener("click",()=>{if(font>0){font--;fontApply();}});
lg.addEventListener("click",()=>{if(font<3){font++;fontApply();}});
loadProgress();updateHomeProgress();fontApply();
})();