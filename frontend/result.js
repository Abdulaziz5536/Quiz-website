const score = localStorage.getItem("score");
document.getElementById("score").innerText = score;

function restartQuiz() {
  window.location.href = "index.html";
}