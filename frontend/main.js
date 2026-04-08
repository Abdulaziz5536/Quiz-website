document.getElementById("startBtn").addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:4000/quiz");
    const quizzes = await res.json();

    if (!quizzes || quizzes.length === 0) {
      alert("No quizzes available.");
      return;
    }

    // Take the first quiz
    const quiz = quizzes[0];
    localStorage.setItem("quiz", JSON.stringify(quiz));

    // Go to quiz page
    window.location.href = "quiz.html";

  } catch (err) {
    console.error("Error fetching quiz:", err);
    alert("Failed to load quiz.");
  }
});