# 🚀 CodeSense AI

CodeSense AI is an AI-powered code review assistant that helps developers analyze their code, identify bugs, get improvement suggestions, and understand time & space complexity using Generative AI.

It provides a VS Code-like coding experience with an integrated AI reviewer that gives instant feedback on your code.

---

# ✨ Features

## 🔐 Authentication
- User Registration & Login
- JWT based authentication
- Protected routes

## 🤖 AI Code Review
- Analyze code using Generative AI
- Detect possible bugs
- Suggest improvements
- Provide optimized approaches
- Explain code quality

## 💻 Code Editor
- VS Code-like Monaco Editor
- Support for multiple languages:
  - C++
  - Python
  - JavaScript

## 📊 Dashboard
- View total code reviews
- Track languages used
- View previous reviews
- Access detailed AI feedback

## 📚 Review History
- Save previous AI reviews
- View complete review details
- Store analyzed code securely

## 🎨 Modern UI
- Dark theme interface
- Responsive design
- Interactive components

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Monaco Editor

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js

## AI Integration

- Groq API
- Llama 3.3 Model

---

# 📂 Project Structure
CodeSense-AI
│
├── client # React Frontend
│ │
│ ├── public
│ │
│ ├── src
│ │ │
│ │ ├── assets # Images and static files
│ │ │
│ │ ├── components # Reusable UI Components
│ │ │ ├── CodeEditor.jsx
│ │ │ ├── Navbar.jsx
│ │ │ └── ProtectedRoute.jsx
│ │ │
│ │ ├── pages # Application Pages
│ │ │ ├── Dashboard.jsx
│ │ │ ├── Home.jsx
│ │ │ ├── Login.jsx
│ │ │ ├── Register.jsx
│ │ │ ├── Review.jsx
│ │ │ └── ReviewDetails.jsx
│ │ │
│ │ ├── services # API Services
│ │ │ └── api.js
│ │ │
│ │ ├── App.jsx
│ │ ├── App.css
│ │ ├── index.css
│ │ └── main.jsx
│ │
│ ├── package.json
│ └── vite.config.js
│
│
└── server # Node.js Backend
│
├── config # Database Configuration
│ └── db.js
│
├── controllers # Business Logic
│ ├── authController.js
│ └── codeController.js
│
├── middleware # Authentication Middleware
│ └── authMiddleware.js
│
├── models # MongoDB Models
│ ├── User.js
│ └── codeReview.js
│
├── routes # API Routes
│ ├── authRoutes.js
│ └── codeRoutes.js
│
├── utils
│
├── server.js # Server Entry Point
├── package.json
└── .env

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/AnjleenaGupta/CodeSense-AI.git
``````

Backend Setup

Navigate to server:
cd server

Install dependencies:
npm install

Create a .env file:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key

Start backend server:
npm run dev

Backend will run on:
http://localhost:5000
```````

Frontend Setup

Open another terminal:
cd client

Install dependencies:
npm install

Run frontend:
npm run dev

Frontend will run on:
http://localhost:5174
````

🔄 Application Flow
User
 |
 | Register/Login
 |
JWT Authentication
 |
Dashboard
 |
Code Editor
 |
AI Code Review
 |
MongoDB Storage
 |
Review History

`````
🚀 Future Improvements
AI generated code fixes
GitHub repository code analysis
Multiple file review support
Code quality scoring
Deployment with cloud hosting
More programming language support
``````

🌟 Why CodeSense AI?

CodeSense AI combines software development and artificial intelligence to help developers write cleaner, optimized, and better-quality code with instant feedback.
``````

👩‍💻 Author

Anjleena Gupta

B.Tech Computer Science Engineering (AI)
