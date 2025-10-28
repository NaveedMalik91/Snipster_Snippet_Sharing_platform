# Snipster: The Snippet Sharing Platform

**Live Demo:** [https://snipster-lbak.onrender.com]

---

## 📝 Overview

Snipster is a modern web application for **sharing code snippets**. It enables users to register, authenticate, create, update, bookmark, and manage favorite code snippets with support for tagging, searching, user profiles, leaderboards, and more. Built using a robust full-stack architecture with **Next.js/React/TypeScript** frontend and **Node.js/Express/MongoDB** backend.

---

## 📂 Repository Structure


├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ │ ├── auth/
│ │ │ ├── snippets/
│ │ │ ├── tags/
│ │ ├── db/
│ │ ├── helpers/
│ │ ├── middleware/
│ │ ├── models/
│ │ │ ├── auth/
│ │ │ ├── snippets/
│ │ │ ├── tags/
│ │ ├── routes/
│ │ ├── views/
│ ├── server.js
│ ├── package.json
├── client/
│ ├── app/
│ ├── components/
│ ├── context/
│ ├── hooks/
│ ├── lib/
│ ├── providers/
│ ├── public/
│ ├── types/
│ ├── utils/
│ ├── package.json
├── README.md


---

## 🚀 Features

- **User Authentication**
  - Registration, login, email verification, forgot/reset password (JWT + bcrypt)
- **Snippet Management**
  - Create, read, update, delete code snippets
  - Tagging system for easy organization
  - Search and filter by tags or user
  - Popular and leaderboard snippets display
- **User Profiles**
  - Favorites system/bookmarking snippets
  - Update profile information
  - Personal snippet management
- **Help & Info**
  - Help pages, terms & privacy policy
- **Frontend**
  - Built with Next.js, React, TypeScript, styled using TailwindCSS/SCSS
- **Backend**
  - REST API services via Express.js to MongoDB (Mongoose)
  - Nodemailer with Handlebars templates for emails (verification, password reset)

---

## 🛠️ Tech Stack

- **Frontend:** Next.js ≥ 14, React, TypeScript, TailwindCSS, SCSS
- **Backend:** Node.js, Express, MongoDB/Mongoose
- **Other:** JWT, bcrypt, Nodemailer, Handlebars

---

## ⚡ Getting Started

### Prerequisites

- Node.js (≥16.x recommended)
- MongoDB (local or Atlas)
- Yarn or npm

### Setup Instructions

#### 1. Clone the Repository

#### 2. Install Dependencies

- Backend:
cd backend
npm install\

- Client:
cd ../client
npm install

#### 3. Environment Variables

- Backend requires a `.env` file:
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
FRONTEND_URL=http://localhost:3000

- Client may require `NEXT_PUBLIC_API_URL` pointing to your backend in backend .env file


