(()=>{"use strict";
const allowed=["zh-TW","en","es","zh-CN"];
let lang="zh-TW",dict=null;
const safeGet=()=>{try{return localStorage.getItem("lezaiblingzhong_sudoku_language")||"zh-TW"}catch(e){return "zh-TW"}};
const safeSet=v=>{try{localStorage.setItem("lezaiblingzhong_sudoku_language",v)}catch(e){}};
function load(v){
  lang=allowed.includes(v)?v:"zh-TW";
  const dictionaries=window.SudokuLanguageData||{};
  dict=dictionaries[lang]||dictionaries["zh-TW"]||null;
  if(!dict){lang="zh-TW";return;}
  safeSet(lang);
  apply();
}
const simplifyMap = {"並":"并","併":"并","來":"来","係":"系","個":"个","內":"内","兩":"两","別":"别","則":"则","剛":"刚","動":"动","區":"区","參":"参","問":"问","啟":"启","單":"单","嘗":"尝","圍":"围","學":"学","宮":"宫","實":"实","寫":"写","將":"将","尋":"寻","對":"对","屬":"属","張":"张","強":"强","後":"后","從":"从","態":"态","慮":"虑","應":"应","戰":"战","戲":"戏","捲":"卷","換":"换","擇":"择","據":"据","擾":"扰","敗":"败","數":"数","斷":"断","於":"于","時":"时","暫":"暂","會":"会","條":"条","業":"业","樂":"乐","標":"标","樣":"样","機":"机","橫":"横","檢":"检","欄":"栏","決":"决","沒":"没","減":"减","測":"测","準":"准","瀏":"浏","為":"为","無":"无","狀":"状","獨":"独","現":"现","產":"产","畢":"毕","當":"当","盤":"盘","確":"确","種":"种","筆":"笔","範":"范","紀":"纪","紅":"红","終":"终","組":"组","絕":"绝","統":"统","經":"经","綜":"综","維":"维","線":"线","編":"编","練":"练","縮":"缩","總":"总","繼":"继","續":"续","習":"习","職":"职","與":"与","舊":"旧","蒐":"搜","藍":"蓝","處":"处","號":"号","裡":"里","複":"复","規":"规","覽":"览","觀":"观","計":"计","記":"记","設":"设","試":"试","該":"该","誌":"志","認":"认","語":"语","誤":"误","說":"说","課":"课","請":"请","謎":"谜","證":"证","識":"识","變":"变","讓":"让","輯":"辑","輸":"输","這":"这","連":"连","進":"进","遊":"游","運":"运","過":"过","選":"选","還":"还","邏":"逻","鈕":"钮","錄":"录","錯":"错","鏈":"链","閉":"闭","開":"开","間":"间","闖":"闯","關":"关","隨":"随","難":"难","靈":"灵","響":"响","頁":"页","順":"顺","須":"须","題":"题","顏":"颜","類":"类","顯":"显","餘":"余","驗":"验","驟":"骤","體":"体","麼":"么","點":"点","齡":"龄"};
function simplify(value){return String(value).replace(/[\u3400-\u9fff]/g,ch=>simplifyMap[ch]||ch)}
function ui(key,fallback=""){return (dict&&dict.ui&&dict.ui[key])||fallback}
function text(value){
  if(value===undefined||value===null)return value;
  const raw=String(value);
  if(lang==="zh-TW")return raw;
  if(dict&&dict.messages&&Object.prototype.hasOwnProperty.call(dict.messages,raw))return dict.messages[raw];
  if(lang==="zh-CN")return simplify(raw);
  if(lang==="en"||lang==="es"){
    const en=lang==="en";
    let m;
    if((m=raw.match(/^第\s*(\d+)\s*題$/)))return en?`Question ${m[1]}`:`Pregunta ${m[1]}`;
    if((m=raw.match(/^第\s*(\d+)\s*\/\s*(\d+)\s*題/)))return en?`Question ${m[1]} of ${m[2]}`:`Pregunta ${m[1]} de ${m[2]}`;
    if((m=raw.match(/^第\s*(\d+)\s*\/\s*(\d+)\s*步/)))return en?`Step ${m[1]} of ${m[2]}`:`Paso ${m[1]} de ${m[2]}`;
    if((m=raw.match(/^第\s*(\d+)\s*\/\s*(\d+)\s*關/)))return en?`Stage ${m[1]} of ${m[2]}`:`Fase ${m[1]} de ${m[2]}`;
    if((m=raw.match(/^已完成\s*(\d+)\s*\/\s*(\d+)\s*格/)))return en?`${m[1]} / ${m[2]} cells completed`:`${m[1]} / ${m[2]} casillas completadas`;
    if((m=raw.match(/^第\s*(\d+)\s*列第\s*(\d+)\s*欄/)))return en?`Row ${m[1]}, column ${m[2]}`:`Fila ${m[1]}, columna ${m[2]}`;
    if((m=raw.match(/^第\s*(\d+)\s*題：(.+)$/))){
      const tail=m[2];
      const map={
        "同宮的橫排缺二。請開啟「筆記」，在兩個空格都記下這一排缺少的兩個候選數字。":en?"Same-box row missing two numbers. Turn on Notes and record both candidates in the two empty cells.":"Fila de la misma caja: faltan dos números. Activa Notas y anota ambos candidatos en las dos casillas vacías.",
        "非同宮的橫排缺二。請開啟「筆記」，在兩個空格都記下這一排缺少的兩個候選數字。":en?"Row across different boxes missing two numbers. Turn on Notes and record both candidates.":"Fila en cajas distintas: faltan dos números. Activa Notas y anota ambos candidatos.",
        "同宮的橫排缺三。請開啟「筆記」，在三個空格都記下這一排缺少的三個候選數字。":en?"Same-box row missing three numbers. Turn on Notes and record all three candidates.":"Fila de la misma caja: faltan tres números. Activa Notas y anota los tres candidatos.",
        "同宮的直排缺二。請開啟「筆記」，在兩個空格都記下這一直排缺少的兩個候選數字。":en?"Same-box column missing two numbers. Turn on Notes and record both candidates.":"Columna de la misma caja: faltan dos números. Activa Notas y anota ambos candidatos.",
        "非同宮的直排缺二。請開啟「筆記」，在兩個空格都記下這一直排缺少的兩個候選數字。":en?"Column across different boxes missing two numbers. Turn on Notes and record both candidates.":"Columna en cajas distintas: faltan dos números. Activa Notas y anota ambos candidatos.",
        "同宮的直排缺三。請開啟「筆記」，在三個空格都記下這一直排缺少的三個候選數字。":en?"Same-box column missing three numbers. Turn on Notes and record all three candidates.":"Columna de la misma caja: faltan tres números. Activa Notas y anota los tres candidatos."
      };
      return (en?"Question ":"Pregunta ")+m[1]+": "+(map[tail]||tail);
    }
    if((m=raw.match(/^已完成\s*(\d+)\s*\/\s*(\d+)\s*格(.*)$/)))return en?`${m[1]} / ${m[2]} cells completed${m[3]?" | "+m[3].replace("正在反金數字 ","Highlighting number ").replace("可自行選格、填答、筆記或點數字反金","Select cells, enter answers, add notes, or highlight a number"):""}`:`${m[1]} / ${m[2]} casillas completadas${m[3]?" | "+m[3].replace("正在反金數字 ","Resaltando el número ").replace("可自行選格、填答、筆記或點數字反金","Selecciona casillas, responde, añade notas o resalta un número"):""}`;
    if(raw==="自行填寫")return en?"Fill in the grid yourself":"Completa la cuadrícula";
    if(raw==="三題完成")return en?"All three complete":"Las tres completadas";
    if(raw==="五題完成")return en?"All five complete":"Las cinco completadas";
    if(raw==="八格完成")return en?"All eight complete":"Las ocho completadas";
    if(raw==="21 步完成")return en?"21 steps complete":"21 pasos completados";
    if(raw==="完成了！")return en?"Completed!":"¡Completado!";
    if((m=raw.match(/^已選取第 (\d+) 列、第 (\d+) 欄。(.+)$/))){const tail=m[3].replace("按下方數字加入或移除筆記。",en?"Choose a number below to add or remove a note.":"Elige un número abajo para añadir o quitar una nota.").replace("按下方數字填入答案；需要時可開啟筆記。",en?"Choose a number below to enter an answer, or turn on Notes.":"Elige un número abajo para responder o activa Notas.").replace("按下方數字填入答案；也可開啟筆記。",en?"Choose a number below to enter an answer, or turn on Notes.":"Elige un número abajo para responder o activa Notas.");return (en?"Selected row ":"Fila ")+m[1]+(en?", column ":", columna ")+m[2]+". "+tail;}
    if((m=raw.match(/^已反白所有數字 (\d+) 所在的橫排、直排與六宮格。$/)))return en?`Highlighted the row, column, and box containing ${m[1]}.`:`Se resaltaron la fila, columna y caja que contienen el ${m[1]}.`;
    if((m=raw.match(/^目前請檢查全部的 (\d+)，請點選棋盤上已有的 (\d+)。$/)))return en?`Now scan all ${m[1]}s. Select an existing ${m[2]} on the board.`:`Ahora revisa todos los ${m[1]}. Selecciona un ${m[2]} que ya esté en el tablero.`;
    if((m=raw.match(/^已反白所有既有的 (\d+) 所在的橫排、直排與六宮格。請自行找出能填入 (\d+) 的空格。$/)))return en?`Highlighted the row, column, and box for the existing ${m[1]}s. Find an empty cell where ${m[2]} belongs.`:`Se resaltaron la fila, columna y caja de los ${m[1]} existentes. Encuentra una casilla vacía donde va el ${m[2]}.`;
    if((m=raw.match(/^已選取這個空格。請按下方的 (\d+) 填入。$/)))return en?`This empty cell is selected. Choose ${m[1]} below to fill it.`:`Esta casilla vacía está seleccionada. Elige el ${m[1]} abajo para rellenarla.`;
    if((m=raw.match(/^目前請先檢查數字 (\d+)，請按題目中的任一個 (\d+)。$/)))return en?`Please scan number ${m[1]} first. Select any ${m[2]} in the puzzle.`:`Primero revisa el número ${m[1]}. Selecciona cualquier ${m[2]} del sudoku.`;
    if((m=raw.match(/^已反金所有數字 (\d+)，請觀察各宮的空格。/)))return en?`All ${m[1]}s are highlighted. Observe the empty cells in each box.`:`Todos los ${m[1]} están resaltados. Observa las casillas vacías de cada caja.`;
    if((m=raw.match(/^請先在題目中按下任一個數字 (\d+)，啟動反金效果。$/)))return en?`Select any ${m[1]} in the puzzle to highlight it.`:`Selecciona cualquier ${m[1]} del sudoku para resaltarlo.`;
    if((m=raw.match(/^已(記下|移除)候選數字 (\d+)。$/)))return en?`${m[1]==="記下"?"Added":"Removed"} candidate ${m[2]}.`:`${m[1]==="記下"?"Añadido":"Eliminado"} el candidato ${m[2]}.`;
    if((m=raw.match(/^答對了！(\d+) 已填入並保留。$/)))return en?`Correct! ${m[1]} has been entered and saved.`:`¡Correcto! Se ha introducido y guardado el ${m[1]}.`;
    if((m=raw.match(/^已記下小字 (\d+)。如果某一格已能確定，也可以自行關閉筆記直接填入答案。$/)))return en?`Pencil mark ${m[1]} added. If a cell is certain, you can turn Notes off and enter the answer directly.`:`Nota ${m[1]} añadida. Si ya puedes determinar una casilla, desactiva Notas e introduce la respuesta directamente.`;
    if((m=raw.match(/^答對了！數字 (\d+) 已保留，繼續第 (\d+) \/ 21 步。$/)))return en?`Correct! ${m[1]} is saved. Continue to step ${m[2]} of 21.`:`¡Correcto! El ${m[1]} se ha guardado. Continúa con el paso ${m[2]} de 21.`;
    if((m=raw.match(/^答對了！已完成 (\d+) \/ 6 題。$/)))return en?`Correct! ${m[1]} of 6 puzzles completed.`:`¡Correcto! Has completado ${m[1]} de 6 ejercicios.`;
    if((m=raw.match(/^答對了！目前連續答對 (\d+) \/ (\d+) 題。$/)))return en?`Correct! ${m[1]} of ${m[2]} consecutive answers correct.`:`¡Correcto! ${m[1]} de ${m[2]} respuestas consecutivas correctas.`;
    if((m=raw.match(/^已檢查 (\d+) 格，有 (\d+) 格不正確/)))return en?`Checked ${m[1]} cells; ${m[2]} are incorrect. Incorrect answers are marked in red. You can clear and correct them.`:`Se comprobaron ${m[1]} casillas; ${m[2]} son incorrectas. Los errores aparecen en rojo. Puedes borrarlos y corregirlos.`;
    if((m=raw.match(/^目前填入的 (\d+) 格都正確！還有 (\d+) 格未完成/)))return en?`${m[1]} entered cells are correct! ${m[2]} cells remain.`:`¡Las ${m[1]} casillas introducidas son correctas! Quedan ${m[2]} casillas.`;
    if((m=raw.match(/^已清空第 (\d+) 列、第 (\d+) 欄的答案與筆記。$/)))return en?`Cleared the answer and notes in row ${m[1]}, column ${m[2]}.`:`Se borraron la respuesta y las notas de la fila ${m[1]}, columna ${m[2]}.`;
    if((m=raw.match(/^提示 (\d+)\/6：第 (\d+) 列第 (\d+) 欄是 (\d+)。$/)))return en?`Hint ${m[1]}/6: row ${m[2]}, column ${m[3]} is ${m[4]}.`:`Pista ${m[1]}/6: fila ${m[2]}, columna ${m[3]} es ${m[4]}.`;
  }
  return raw;
}
function step(mode,field,fallback){
  if(lang==="zh-TW")return fallback;
  return (dict&&dict.steps&&dict.steps[mode]&&dict.steps[mode][field])||text(fallback);
}
function apply(){
  if(!dict)return;
  document.documentElement.lang=lang==="zh-TW"?"zh-Hant":lang;
  document.title=ui("siteTitle","Le Zai Ling Zhong | Sudoku Classroom");
  const set=(selector,key,attr)=>{const el=document.querySelector(selector);if(el){if(attr)el.setAttribute(attr,ui(key));else el.textContent=ui(key)}};
  set(".brand h1","village");
  set("#font-smaller","smaller");set("#font-larger","larger");
  const smBtn=document.getElementById("font-smaller"),lgBtn=document.getElementById("font-larger");
  if(smBtn)smBtn.textContent="A−";
  if(lgBtn)lgBtn.textContent="A+";
  const home=document.getElementById("home-top");if(home){home.setAttribute("aria-label",ui("home"));home.title=ui("home");}
  const sm=document.getElementById("font-smaller");if(sm)sm.setAttribute("aria-label",ui("smaller"));
  const lg=document.getElementById("font-larger");if(lg)lg.setAttribute("aria-label",ui("larger"));
  document.querySelectorAll(".category-nav [data-category]").forEach((b,i)=>b.textContent=ui(["category4","category6","category9"][i]));
  const dividers=document.querySelectorAll(".section-divider span");
  dividers.forEach((el,i)=>el.textContent=ui(["section6","section9"][i]));
  document.querySelectorAll(".lessons article").forEach((article,i)=>{
    const item=dict.lessons&&dict.lessons[i];
    const h=article.querySelector("h3"),p=article.querySelector("p"),b=article.querySelector("button");
    if(item){if(h)h.textContent=item.title;if(p)p.textContent=item.description;if(b)b.textContent=item.action;}
    else if(lang==="zh-CN"){if(h)h.textContent=simplify(h.textContent);if(p)p.textContent=simplify(p.textContent);if(b)b.textContent=simplify(b.textContent);}
  });
  set("#home .note","homeNote");
  set("#feedback","gameFeedback");
  set("#question","question");
  set("#check-answers","check");set("#clear-cell","clear");set("#note-mode","notes");
  const hint=document.getElementById("hint");if(hint)hint.setAttribute("aria-label",ui("hint"));
  const modalTitle=document.getElementById("modal-title");if(modalTitle)modalTitle.textContent=ui("modalTitle");
  set("#next","next");set("#modal-home","modalHome");
  const footer=document.querySelector("footer");if(footer)footer.textContent=ui("footer");
  const logo=document.querySelector(".brand-logo");if(logo)logo.alt=ui("brandAlt");
  const category=document.getElementById("category-nav");if(category)category.setAttribute("aria-label",ui("categoryAria"));
  const select=document.getElementById("language-select");if(select){if(select.value!==lang)select.value=lang;select.setAttribute("aria-label",ui("language"));select.title=ui("language");select.querySelectorAll("option").forEach(option=>{const labels={"zh-TW":"繁體中文","zh-CN":"简体中文","en":"English","es":"Español"};if(labels[option.value])option.textContent=labels[option.value];});}
  if(window.__sudokuRefreshLanguage)window.__sudokuRefreshLanguage();
}
const select=document.getElementById("language-select");
if(select)select.addEventListener("change",()=>load(select.value));
window.SudokuI18n={get language(){return lang},ui,text,step,load,apply};
load(safeGet());
})();