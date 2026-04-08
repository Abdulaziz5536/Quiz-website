let quiz = JSON.parse(localStorage.getItem("quiz"));
let currentQuestion = 0;
let answers = [];

function showQuestion() {
  const questionDiv = document.getElementById("question");
  const optionsDiv = document.getElementById("options");

  if (currentQuestion >= quiz.questions.length) {
    submitQuiz();
    return;
  }

  const q = quiz.questions[currentQuestion];
  questionDiv.innerText = q.question;
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => {
      answers.push(index);
      currentQuestion++;
      showQuestion();
    };
    optionsDiv.appendChild(btn);
  });
}

async function submitQuiz() {
  try {
    const res = await fetch("http://localhost:4000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers, quiz })
    });

    const data = await res.json();
    localStorage.setItem("score", data.score);
    window.location.href = "result.html";

  } catch (err) {
    console.error("Error submitting quiz:", err);
    alert("Failed to submit quiz.");
  }
}

showQuestion();