# 🧠 Online Quiz Web Application

## 📌 Overview

This project is a full-stack **Online Quiz Web Application** built using **HTML, CSS, JavaScript, Node.js, Express, and MongoDB (Atlas)**.

The application allows users to:

* Start a quiz
* Answer multiple-choice questions
* Submit answers
* View their final score
* Review correct and incorrect answers

It is designed to be simple, interactive, and user-friendly.

---

## 🎯 Features

* ✅ Dynamic quiz loading from database
* ✅ Multiple-choice questions
* ✅ Score calculation via backend
* ✅ Answer review (correct & incorrect)
* ✅ Clean and modern UI
* ✅ MongoDB Atlas database integration

---

## 🛠️ Technologies Used

### Frontend:

* HTML
* CSS
* JavaScript (Vanilla JS)

### Backend:

* Node.js
* Express.js

### Database:

* MongoDB Atlas

---

## 📂 Project Structure

```
project/
│
├── frontend/
│   ├── index.html
│   ├── quiz.html
│   ├── result.html
│   ├── style.css
│   ├── main.js
│   ├── quiz.js
│   └── result.js
│
├── backend/
│   ├── server.js
│   ├── model.js
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/Abdulaziz5536/Quiz-website.git
cd Quiz-website
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
```

Run the server:

```
node server.js
```

Server will run on:

```
http://localhost
```

---

### 3️⃣ Run Frontend

Open a new terminal:

```
cd frontend
http-server -c-1
```

---

## 📡 API Endpoints

### Get all quizzes

```
GET /quiz
```

### Create a quiz

```
POST /quiz
```

### Submit answers

```
POST /submit
```

---

## 🧪 Example Quiz Data

Use this in Postman:

```
POST http://localhost:4000/quiz
```

```json
{
  "title": "Sample Quiz",
  "questions": [
    {
      "question": "What is 2 + 2?",
      "options": ["3", "4", "5", "6"],
      "correct": 1
    }
  ]
}
```

---

## 📸 Screenshots

### 🏠 Home Page

<img width="1919" height="1015" alt="Ekran görüntüsü 2026-04-13 102009" src="https://github.com/user-attachments/assets/d58d23e8-28b7-4acb-ac8d-35ac88d40378" />


### ❓ Quiz Page

<img width="1441" height="681" alt="Ekran görüntüsü 2026-04-13 101749" src="https://github.com/user-attachments/assets/ed698b07-214a-4997-b301-11495341a675" />


### 🏆 Result Page

<img width="1919" height="1017" alt="Ekran görüntüsü 2026-04-13 101929" src="https://github.com/user-attachments/assets/ca09c4b6-4972-4fc5-ad34-823f9939c802" />


---


## 🚀 Future Improvements

* User authentication (login/register)
* Timer for quiz
* Multiple quiz categories
* Leaderboard system

---

## 👤 Author

GitHub: https://github.com/Abdulaziz5536




