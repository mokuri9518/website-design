"use strict";

const scheduleBody = document.querySelector("[data-schedule-body]");

if (scheduleBody) {
  const schedule = [
    ["第 1 週", "選題、研究使用者、整理資料", "一句話介紹與內容大綱", "先定範圍，不急著美化"],
    ["第 2 週", "規劃頁面、完成 HTML 結構", "四頁可互相瀏覽的網站", "先讓內容和連結完整"],
    ["第 3 週", "套用 CSS、製作互動功能", "響應式樣式與兩項互動", "完成一項，再做下一項"],
    ["第 4 週", "測試、修正、撰寫解說報告", "可公開瀏覽的最終作品", "在不同螢幕上實際檢查"]
  ];

  schedule.forEach(([week, task, outcome, tip]) => {
    const row = document.createElement("tr");
    const weekCell = document.createElement("th");
    weekCell.scope = "row";
    weekCell.textContent = week;
    row.append(weekCell);

    [task, outcome, tip].forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.append(cell);
    });

    scheduleBody.append(row);
  });
}

const checklist = document.querySelector("[data-checklist]");

if (checklist) {
  const checkboxes = [...checklist.querySelectorAll("[data-check-item]")];
  const count = checklist.querySelector("[data-progress-count]");
  const percent = checklist.querySelector("[data-progress-percent]");
  const progressBar = checklist.querySelector("[data-progress-bar]");
  const progressFill = progressBar.querySelector("span");
  const feedback = checklist.querySelector("[data-checklist-feedback]");
  const storageKey = "midterm-guide-checklist";

  function updateChecklist() {
    const completed = checkboxes.filter((checkbox) => checkbox.checked).length;
    const progress = Math.round((completed / checkboxes.length) * 100);
    count.textContent = completed;
    percent.textContent = `${progress}%`;
    progressBar.setAttribute("aria-valuenow", progress);
    progressFill.style.width = `${progress}%`;
    feedback.textContent = completed === checkboxes.length
      ? "太好了！你的專題計畫已經準備就緒，接著開始製作吧。"
      : completed === 0
        ? "不用趕進度，先選出你的第一個小任務。"
        : `做得好！再完成 ${checkboxes.length - completed} 項，就能開始製作網站。`;

    const savedItems = checkboxes.filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.dataset.checkItem);
    window.localStorage.setItem(storageKey, JSON.stringify(savedItems));
  }

  const savedItems = JSON.parse(window.localStorage.getItem(storageKey) || "[]");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = savedItems.includes(checkbox.dataset.checkItem);
    checkbox.addEventListener("change", updateChecklist);
  });
  updateChecklist();
}

const quiz = document.querySelector("[data-quiz]");

if (quiz) {
  const result = quiz.querySelector("[data-quiz-result]");
  const answerKey = { q1: "b", q2: "a", q3: "c" };
  const explanations = [
    "HTML 組織內容、CSS 設計外觀、JavaScript 加入互動。",
    "替代文字讓無法看到圖片的使用者也能取得重要資訊。",
    "逐頁確認連結、互動和不同螢幕，才能發現實際問題。"
  ];

  quiz.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(quiz);
    const unanswered = Object.keys(answerKey).filter((question) => !formData.has(question));

    if (unanswered.length > 0) {
      result.textContent = `還有 ${unanswered.length} 題尚未作答，完成後再看結果吧。`;
      return;
    }

    const correctAnswers = Object.entries(answerKey).filter(([question, answer]) => formData.get(question) === answer);
    const missedExplanations = Object.entries(answerKey)
      .filter(([question, answer]) => formData.get(question) !== answer)
      .map(([question]) => explanations[Number(question.slice(1)) - 1]);

    result.textContent = missedExplanations.length === 0
      ? `答對 ${correctAnswers.length} / ${Object.keys(answerKey).length} 題！你已經掌握發表前的重點，準備好分享作品了。`
      : `答對 ${correctAnswers.length} / ${Object.keys(answerKey).length} 題。複習一下：${missedExplanations.join(" ")}`;
  });

  quiz.addEventListener("reset", () => {
    result.textContent = "";
  });
}