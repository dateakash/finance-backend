# 💰 Finance Data Processing & Access Control Backend

## 📌 Project Overview

This project is a backend system for a finance dashboard that allows users to manage financial records with role-based access control.

It is designed to demonstrate backend development skills including API design, data modeling, authentication, authorization, and data processing.

---

## 🚀 Features

### 👤 User & Role Management

* User registration and login
* Role-based access control:

  * **Admin** → Full access
  * **Analyst** → View records & insights
  * **Viewer** → View-only access
* Active/Inactive user support

---

### 💵 Financial Records Management

* Create financial records
* View all records
* Update records
* Delete records
* Filter by:

  * Date
  * Category
  * Type (Income / Expense)

---

### 📊 Dashboard APIs

* Total income
* Total expenses
* Net balance
* Category-wise totals
* Recent transactions

---

### 🔐 Authentication & Authorization

* JWT-based authentication
* Protected routes using middleware
* Role-based permission control

---

### ✅ Validation & Error Handling

* Input validation
* Proper HTTP status codes
* Error handling for invalid operations

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** JWT
* **Other:** Mongoose, bcryptjs, dotenv, cors

---

## 📁 Project Structure

```
finance-backend/
│
├── config/
│   └── db.js
│
├── models/
│   ├── User.js
│   └── Record.js
│
├── routes/
│   ├── authRoutes.js
│   ├── recordRoutes.js
│   └── dashboardRoutes.js
│
├── controllers/
│   ├── authController.js
│   ├── recordController.js
│   └── dashboardController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── server.js
├── .env
├── package.json
```

---

## ⚙️ Setup Instructions (Windows)

### 1️⃣ Clone the repository

```
git clone https://github.com/dateakash/finance-backend.git
cd finance-backend
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Create `.env` file

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/financeDB
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Start MongoDB

```
mongod
```

---

### 5️⃣ Run the server

```
npm run dev
```

---

## 📡 API Endpoints

### 🔑 Auth

* POST `/api/auth/register`
* POST `/api/auth/login`

---

### 💰 Records

* POST `/api/records`
* GET `/api/records`
* PUT `/api/records/:id`
* DELETE `/api/records/:id`

---

### 📊 Dashboard

* GET `/api/dashboard`

---

## 🧪 Testing

You can test APIs using:

* Postman
* Thunder Client

---

## 📌 Assumptions

* Roles are predefined (Admin, Analyst, Viewer)
* MongoDB is running locally
* Authentication is token-based (JWT)

---

## 🔧 Future Improvements

* Pagination support
* Advanced filtering & search
* Unit and integration testing
* Deployment on cloud (Render / AWS)

---

## 📎 Submission Notes

This project is built with focus on:

* Clean architecture
* Proper separation of concerns
* Scalable backend design
* Real-world backend practices

---

## 👨‍💻 Author

**Akash Date**

---

## ⭐ Conclusion

This backend demonstrates a complete financial data system with role-based access, secure APIs, and structured architecture suitable for real-world applications.
