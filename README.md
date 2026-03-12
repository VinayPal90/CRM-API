# 🚀 CRM API (Customer Relationship Management API)

A simple **RESTful CRM API** built with **Node.js, Express.js, and SQL** that allows authentication, customer management, and deal tracking.

This project follows the **MVC architecture** and implements **JWT authentication** for secure API access.

---

# 📌 Features

* User Authentication (Register & Login)
* JWT-based secure routes
* Customer management (CRUD operations)
* Deal tracking for customers
* Pagination for customer listing
* Search customers by name or email
* SQL relational database structure
* Input validation
* Proper error handling
* MVC folder structure

---

# 🛠 Tech Stack

* **Node.js**
* **Express.js**
* **MySQL / PostgreSQL**
* **JWT Authentication**
* **REST API**
* **MVC Architecture**

---

# 📂 Project Structure

```
CRM-API
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   ├── customerController.js
│   └── dealController.js
│
├── middleware
│   └── authMiddleware.js
│
├── models
│   ├── userModel.js
│   ├── customerModel.js
│   └── dealModel.js
│
├── routes
│   ├── authRoutes.js
│   ├── customerRoutes.js
│   └── dealRoutes.js
│
├── index.js
├── package.json
├── .env.example
└── README.md
```

---

# 🗄 Database Schema

## 1️⃣ Users

| Column     | Type      |
| ---------- | --------- |
| id         | INT       |
| name       | VARCHAR   |
| email      | VARCHAR   |
| password   | VARCHAR   |
| role       | VARCHAR   |
| created_at | TIMESTAMP |

---

## 2️⃣ Customers

| Column     | Type      |
| ---------- | --------- |
| id         | INT       |
| name       | VARCHAR   |
| email      | VARCHAR   |
| phone      | VARCHAR   |
| company    | VARCHAR   |
| status     | VARCHAR   |
| created_by | INT       |
| created_at | TIMESTAMP |

---

## 3️⃣ Deals

| Column      | Type      |
| ----------- | --------- |
| id          | INT       |
| customer_id | INT       |
| value       | DECIMAL   |
| stage       | VARCHAR   |
| created_at  | TIMESTAMP |

---

# 🔐 Authentication APIs

### Register User

```
POST /auth/register
```

### Login User

```
POST /auth/login
```

Response returns a **JWT token** which must be used for protected routes.

Example:

```
Authorization: Bearer <your_token>
```

---

# 👥 Customer APIs

### Get All Customers

```
GET /customers
```

### Get Customer By ID

```
GET /customers/:id
```

### Create Customer

```
POST /customers
```

### Update Customer

```
PUT /customers/:id
```

### Delete Customer

```
DELETE /customers/:id
```

---

# 💰 Deals APIs

### Create Deal

```
POST /deals
```

### Get Deals for a Customer

```
GET /deals/customer/:id
```

---

# 🔍 Additional Features

### Pagination

Customers list supports pagination:

```
GET /customers?page=1&limit=10
```

### Search Customers

Search customers by name or email:

```
GET /customers?search=john
```

---

# ⚙️ Setup & Installation

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/CRM-API.git
```

### 2️⃣ Navigate to Project

```
cd CRM-API
```

### 3️⃣ Install Dependencies

```
npm install
```

### 4️⃣ Setup Environment Variables

Create a `.env` file:

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=crm
JWT_SECRET=your_secret_key
```

---

### 5️⃣ Run the Server

```
npm start
```

Server will run on:

```
http://localhost:5000
```

---

# 🧪 API Testing

You can test APIs using:

* **Postman**
* **Thunder Client (VS Code)**

Postman collection can be added in the repository.

---

# 📄 Submission Requirements

This project includes:

✔ GitHub repository
✔ Database schema (SQL file)
✔ Postman collection for API testing
✔ README with setup instructions

---

# 📌 Future Improvements

* Role-based access control (Admin / User)
* API rate limiting
* Logging system
* Docker support
* Frontend integration (React)

---

# 👨‍💻 Author

**Vinay Pal**

Backend Developer | MERN Stack | JavaScript | Node.js

GitHub:
https://github.com/VinayPal90

---

⭐ If you found this project helpful, consider giving it a star!
