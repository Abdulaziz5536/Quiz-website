const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();


const Quiz = require("./model");

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


app.get("/", (req, res) => {
  res.send("API is running...");
});



app.post("/quiz", async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.get("/quiz", async (req, res) => {
  try {
    const quiz = await Quiz.find();
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.post("/submit", (req, res) => {
  const { answers, quiz } = req.body;

  let score = 0;

  quiz.questions.forEach((q, i) => {
    if (q.correct === answers[i]) {
      score++;
    }
  });

  res.json({ score });
});



app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});