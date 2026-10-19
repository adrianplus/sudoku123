const chapters = [
  { title: "看懂數字與格子", range: "第 1–10 步", description: "認識數字、空格與基本操作" },
  { title: "學會 4×4 數獨", range: "第 11–20 步", description: "從小盤面開始練習" },
  { title: "認識行與列", range: "第 21–30 步", description: "練習橫向與直向檢查" },
  { title: "認識九宮格與排除法", range: "第 31–40 步", description: "找出不可能的數字" },
  { title: "找出唯一答案", range: "第 41–50 步", description: "練習只剩一個可能的格子" },
  { title: "認識候選數字", range: "第 51–60 步", description: "記錄與刪除可能答案" },
  { title: "進入 6×6 數獨", range: "第 61–70 步", description: "逐步擴大盤面" },
  { title: "進入 9×9 數獨", range: "第 71–80 步", description: "熟悉完整九宮格" },
  { title: "綜合推理練習", range: "第 81–90 步", description: "整合學過的技巧" },
  { title: "獨立完成數獨", range: "第 91–100 步", description: "減少提示，自己完成" }
];

const chapterList = document.querySelector("#chapter-list");
const homeView = document.querySelector("#home-view");
const journey = document.querySelector("#journey");
const lessonView = document.querySelector("#lesson-view");
const startButton = document.querySelector("#start-button");
const backButton = document.querySelector("#back-button");
const returnMapButton = document.querySelector("#return-map-button");
const textSizeToggle = document.querySelector("#text-size-toggle");

function renderChapters() {
  chapterList.replaceChildren();
  chapters.forEach((chapter, index) => {
    const button = document.createElement("button");
    button.className = "chapter-card";
    button.type = "button";
    button.innerHTML = `
      <span class="chapter-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
      <span class="chapter-copy">
        <strong>${chapter.title}</strong>
        <span>${chapter.range}・${chapter.description}</span>
      </span>
      <span class="chapter-arrow" aria-hidden="true">→</span>
    `;
    button.addEventListener("click", () => openLesson(index));
    chapterList.append(button);
  });
}

function openLesson(chapterIndex = 0) {
  const chapter = chapters[chapterIndex];
  homeView.classList.add("hidden");
  journey.classList.add("hidden");
  lessonView.classList.remove("hidden");
  document.querySelector("#lesson-step-label").textContent = `${chapter.range} / 共 100 步`;
  document.querySelector("#lesson-title").textContent = chapter.title;
  document.querySelector("#lesson-description").textContent =
    `${chapter.description}。這是目前的版面原型，下一個階段會加入實際的互動教學。`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showMap() {
  lessonView.classList.add("hidden");
  homeView.classList.remove("hidden");
  journey.classList.remove("hidden");
  journey.scrollIntoView({ behavior: "smooth", block: "start" });
}

startButton.addEventListener("click", () => openLesson(0));
backButton.addEventListener("click", showMap);
returnMapButton.addEventListener("click", showMap);

textSizeToggle.addEventListener("click", () => {
  const enabled = document.body.classList.toggle("large-text");
  textSizeToggle.setAttribute("aria-pressed", String(enabled));
  textSizeToggle.textContent = enabled ? "恢復文字大小" : "放大文字";
});

renderChapters();
