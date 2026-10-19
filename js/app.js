(() => {
  "use strict";

  const lessons = {
    row: {
      id: "row", step: 1, title: "第一步：橫排", mode: "row",
      instruction: "請看這一橫排的四個位置。1、2、3、4 各出現一次，找出缺少的數字。"
    },
    column: {
      id: "column", step: 2, title: "第二步：直排", mode: "column",
      instruction: "請看這一直排的四個位置。1、2、3、4 各出現一次，找出缺少的數字。"
    },
    box: {
      id: "box", step: 3, title: "第三步：四宮格", mode: "box",
      instruction: "請看這個四宮格的四個位置。1、2、3、4 各出現一次，找出缺少的數字。"
    }
  };

  const homeScreen = document.getElementById("home-screen");
  const gameScreen = document.getElementById("game-screen");
  const puzzleGrid = document.getElementById("puzzle-grid");
  const lessonTitle = document.getElementById("lesson-title");
  const stepLabel = document.getElementById("step-label");
  const instruction = document.getElementById("instruction");
  const feedback = document.getElementById("feedback");
  const streakCount = document.getElementById("streak-count");
  const questionCount = document.getElementById("question-count");
  const completeBox = document.getElementById("complete-box");
  const completeTitle = document.getElementById("complete-title");
  const completeMessage = document.getElementById("complete-message");
  const nextStepButton = document.getElementById("next-step");
  const returnMenuButton = document.getElementById("return-menu");
  const hintButton = document.getElementById("hint-button");
  const numberButtons = [...document.querySelectorAll(".number-button")];

  let currentLesson = null;
  let missingNumber = null;
  let streak = 0;
  let questionNumber = 1;
  let answered = false;

  function shuffledNumbers() {
    const numbers = [1, 2, 3, 4];
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers;
  }

  function setFeedback(message, kind = "") {
    feedback.textContent = message;
    feedback.className = "feedback" + (kind ? ` ${kind}` : "");
  }

  function setButtonsDisabled(disabled) {
    numberButtons.forEach(button => { button.disabled = disabled; });
    hintButton.disabled = disabled;
  }

  function startLesson(id) {
    currentLesson = lessons[id];
    if (!currentLesson) return;
    streak = 0;
    questionNumber = 1;
    homeScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    completeBox.classList.add("hidden");
    lessonTitle.textContent = currentLesson.title;
    stepLabel.textContent = `第 ${currentLesson.step} 步`;
    instruction.textContent = currentLesson.instruction;
    streakCount.textContent = "0";
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderQuestion() {
    answered = false;
    setButtonsDisabled(false);
    completeBox.classList.add("hidden");
    setFeedback("請觀察格子，再按下方 1、2、3 或 4。");
    questionCount.textContent = `第 ${questionNumber} 題`;
    const numbers = shuffledNumbers();
    const missingIndex = Math.floor(Math.random() * 4);
    missingNumber = numbers[missingIndex];

    puzzleGrid.className = `puzzle-grid ${currentLesson.mode}-mode`;
    puzzleGrid.innerHTML = "";
    numbers.forEach((number, index) => {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.setAttribute("aria-label", `第 ${index + 1} 格`);
      if (index === missingIndex) {
        cell.classList.add("missing");
        cell.dataset.missing = "true";
      } else {
        cell.textContent = String(number);
        cell.setAttribute("aria-label", String(number));
      }
      puzzleGrid.appendChild(cell);
    });
  }

  function answer(number) {
    if (!currentLesson || answered) return;
    if (number === missingNumber) {
      answered = true;
      streak += 1;
      streakCount.textContent = String(streak);
      const missingCell = puzzleGrid.querySelector('[data-missing="true"]');
      missingCell.classList.remove("missing");
      missingCell.classList.add("filled");
      missingCell.textContent = String(number);
      missingCell.setAttribute("aria-label", `答案 ${number}`);
      missingCell.removeAttribute("data-missing");
      setButtonsDisabled(true);
      setFeedback("答對了！你找到了缺少的數字。", "good");

      if (streak >= 3) {
        window.setTimeout(showComplete, 650);
      } else {
        window.setTimeout(() => {
          questionNumber += 1;
          renderQuestion();
        }, 950);
      }
    } else {
      streak = 0;
      streakCount.textContent = "0";
      setFeedback("再想一想！這一排／直排／四宮格還缺哪個數字？", "bad");
      // A wrong answer resets the consecutive streak, but keeps the same question.
      window.setTimeout(() => {
        if (!answered) setFeedback("沒關係，慢慢找。請再選一次。");
      }, 900);
    }
  }

  function showComplete() {
    completeBox.classList.remove("hidden");
    completeTitle.textContent = `${currentLesson.title}完成了！`;
    completeMessage.textContent = "你已經連續答對三題。做得很好！";
    setButtonsDisabled(true);
    const nextId = currentLesson.step === 1 ? "column" : currentLesson.step === 2 ? "box" : null;
    if (nextId) {
      nextStepButton.classList.remove("hidden");
      nextStepButton.textContent = `進入${lessons[nextId].title}`;
      nextStepButton.dataset.next = nextId;
    } else {
      nextStepButton.classList.add("hidden");
      completeMessage.textContent = "你已完成前三個練習步驟！下一階段可以加入真正的 4×4 數獨棋盤。";
    }
  }

  function goHome() {
    currentLesson = null;
    gameScreen.classList.add("hidden");
    homeScreen.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.querySelectorAll(".start-lesson").forEach(button => {
    button.addEventListener("click", () => startLesson(button.dataset.lesson));
  });
  numberButtons.forEach(button => {
    button.addEventListener("click", () => answer(Number(button.dataset.number)));
  });
  document.getElementById("back-home").addEventListener("click", goHome);
  returnMenuButton.addEventListener("click", goHome);
  nextStepButton.addEventListener("click", () => {
    const nextId = nextStepButton.dataset.next;
    if (nextId) startLesson(nextId);
  });
  hintButton.addEventListener("click", () => {
    if (!currentLesson || answered) return;
    setFeedback(`提示：缺少的數字是 ${missingNumber}。你可以先找找看哪個數字沒有出現。`);
  });
  document.getElementById("text-size-toggle").addEventListener("click", event => {
    const enabled = document.body.classList.toggle("large-text");
    event.currentTarget.textContent = enabled ? "一般文字" : "放大文字";
    event.currentTarget.setAttribute("aria-pressed", String(enabled));
  });
})(); 
