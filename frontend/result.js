const score = localStorage.getItem("score");
const answers = JSON.parse(localStorage.getItem("answers"));
const quiz = JSON.parse(localStorage.getItem("quiz"));

const scoreEl = document.getElementById("score");
const reviewDiv = document.getElementById("review");


if (!quiz || !answers) {
  scoreEl.innerText = "Error: No data found";
} else {
  scoreEl.innerText = `Score: ${score} / ${quiz.questions.length}`;

  quiz.questions.forEach((q, i) => {
    const isCorrect = answers[i] === q.correct;

    const div = document.createElement("div");
    div.classList.add("question-review");

    div.innerHTML = `
      <p><strong>Q${i + 1}:</strong> ${q.question}</p>
      <p>Your answer: <span class="${isCorrect ? "correct" : "wrong"}">
        ${q.options[answers[i]] ?? "No answer"}
      </span></p>
      ${
        !isCorrect
          ? `<p>Correct answer: <span class="correct">${q.options[q.correct]}</span></p>`
          : ""
      }
    `;

    reviewDiv.appendChild(div);
  });
}

function restartQuiz() {
  localStorage.clear();
  window.location.href = "index.html";
}