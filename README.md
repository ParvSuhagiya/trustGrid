# 🏢 Supplier Verification Platform (B2B Trust System)

A scalable **B2B platform** designed to build trust between **buyers and suppliers** through verification, transparency, and intelligent trust scoring.

---

## 🚀 Overview

The **Supplier Verification Platform** helps businesses make reliable decisions by providing:

* ✅ Verified supplier profiles
* ⭐ Transparent ratings & reviews
* 🧠 Smart trust scoring system
* 🔄 Seamless buyer-supplier interaction

👉 Built to solve: *“Which supplier can I actually trust?”*

---

## 🎯 Features

### 👤 Buyer Dashboard

* 🔍 Search & filter suppliers
* 📄 View supplier profiles
* ⭐ Ratings & reviews
* 📦 Send supply requests
* 📊 Monthly budget analytics

### 🏭 Supplier Dashboard

* 📋 Manage products/services
* 👀 View buyers
* 📥 Handle incoming requests
* 📑 Upload verification documents

---

## 🧠 Trust Score (Core USP)

Each supplier gets a **Trust Score** based on:

* 📑 Document verification
* ⭐ Ratings & reviews
* 📦 Fulfillment performance
* ⏱ Response time
* 📊 Platform activity

👉 Helps buyers make faster, data-driven decisions.

---

## 🏗️ Tech Stack

### 💻 Frontend

* React (Vite)
* Tailwind CSS
* Axios

### ⚙️ Backend

* Node.js
* Express.js

### 🗄️ Database

* MongoDB

### 🔐 Authentication

* JWT (JSON Web Tokens)

---

## 📂 Folder Structure

### 📁 Frontend (Vite + React)
```
frontend/
├── src/
├── public/
├── index.html
└── package.json
```
### 📁 Backend (Node.js + Express)
```
backend/
└── src/
├── controllers/
├── routes/
├── models/
├── middleware/
├── config/
└── server.js
```
---

## ⚡ Getting Started

### 1️⃣ Clone the repository

git clone https://github.com/ParvSuhagiya/trustGrid.git
cd trustGrid

### 2️⃣ Setup Backend

cd backend
npm install

Create a `.env` file inside `/backend`:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

Run backend:
npm run dev

### 3️⃣ Setup Frontend

cd frontend
npm install
npm run dev

---

## 🔮 Future Improvements

* 🤖 AI-based supplier recommendations
* 💬 Real-time chat system
* 📊 Advanced analytics
* 🏆 Supplier ranking leaderboard
* 🚨 Fraud detection system
