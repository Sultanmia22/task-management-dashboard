📌 Task Management Dashboard – Frontend Intern Assignment
🚀 Live Demo

🔗 Live Site: https://task-management-dashboard-smoky-beta.vercel.app/
🔗 GitHub Repository: https://github.com/Sultanmia22/task-management-dashboard.git

📖 Project Overview

This project is developed as part of the Frontend Intern Dashboard Development Task.

The application is a Single Page React Application that includes:

🔐 Secure Login System (JWT Authentication)

📊 Dashboard Page

🌐 REST API Integration

📱 Fully Responsive Design

The UI implementation is based on the provided Dribbble design.

🎨 Design Reference

🔗 Dribbble Design:
https://dribbble.com/shots/25241984-Task-Management-Dashboard

🛠 Tech Stack

⚛️ React (Vite)

🎨 Tailwind CSS

🔄 Axios (API Calls)

📝 React Hook Form

🔔 React Toastify

🛣 React Router

🔐 JWT Authentication (Token-based)

🔐 Authentication System
Login Endpoint
POST /api/login
Request Body
{
  "email": "user1@example.com",
  "password": "password123"
}
Response
{
  "id": 1,
  "email": "user1@example.com",
  "token": "<jwt_token>"
}
Authentication Features

JWT token stored in localStorage

Protected Private Routes

Auto redirect if not authenticated

Persistent login state

📊 Dashboard Features

Sidebar Navigation

Analytics Overview

Task Status Cards

Running / Pending / Completed Sections

Dynamic Data from REST API

Responsive Layout

🌐 REST API

Base URL:

https://task-management-dashboard-smoky-beta.vercel.app/

Data is fetched dynamically to populate dashboard components.

📱 Responsiveness

Fully responsive for:

Desktop

Tablet

Mobile

Sidebar collapses on small devices

✨ Bonus Implementations

Smooth transitions & hover animations

Protected Routes

Token persistence

Clean Component Architecture

Reusable UI Components

📂 Project Structure
src/
 ├── components/
 ├── pages/
 │    ├── Login.jsx
 │    ├── Dashboard.jsx
 ├── routes/
 │    ├── PrivateRoute.jsx
 ├── contexts/
 ├── services/
 ├── App.jsx
 └── main.jsx
⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/Sultanmia22/task-management-dashboard.git

Navigate to project folder:

cd your-repo-name

Install dependencies:

npm install

Run development server:

npm run dev

Build for production:

npm run build
🚀 Deployment

Deployed using:

Vercel / Netlify

🧠 Evaluation Criteria Covered

✔ Design Accuracy
✔ Functionality
✔ Code Quality
✔ Responsiveness
✔ Proper Authentication
✔ Modern UI & Animations

📌 Submission Details

Public GitHub Repository

Live Deployment Link

Submitted via Google Form

👨‍💻 Author

Your Name
Frontend Developer
📧 sultanmia5732@gmail.com