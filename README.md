# Cravixa 

Cravixa is a full-stack food delivery web application built using the MERN stack. It demonstrates a scalable and modular architecture with authentication, product management, cart system, and RESTful API integration between frontend and backend.

---

## Features

- User authentication (Register/Login)
- JWT-based secure authentication
- Product listing and management system
- Shopping cart functionality
- Order management system
- Responsive UI for all devices
- REST API integration
- Modular backend architecture
- Clean and scalable code structure
- Admin-ready architecture

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS 

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

### Tools
- Git & GitHub
- Postman
- dotenv

---

## Project Structure

```bash
Cravixa/
│
│── admin/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   |   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
│── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   ├── package.json
│   └── .env
│
│── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
│── README.md
```





---

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/kmziaur/Cravixa.git
cd Cravixa
```
## 2. Environment Variables

Create a `.env` file inside the backend folder and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 3. Backend Setup
```bash
cd backend
npm install
npm start
```
### 4. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
### 5. Admin Panel Setup

```bash
cd admin
npm install
npm run dev
```

## API Endpoints
### Authentication
```bash
POST /api/auth/register
POST /api/auth/login
```
### Products
```bash
GET    /api/products
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```
### Cart
```bash
GET    /api/cart
POST   /api/cart
DELETE /api/cart/:id
```
### Orders
```bash
POST /api/order
GET  /api/order
```
## Architecture Overview
```bash
Frontend (React)
     ↓
REST API (Axios)
     ↓
Backend (Express.js)
     ↓
Database (MongoDB)
```
## Future Improvements
- Payment gateway integration (Stripe / SSLCommerz)
- AI-based recommendation system
- Advanced search and filtering
- Admin analytics dashboard
- Deployment to cloud (Vercel / Render / AWS)
- Email notification system
  
## Performance Improvements
- Optimized API response handling
- Component-based frontend architecture
- Reusable backend services
- Secure authentication flow


## Author

**K.M Ziaur Rahman**
[GitHub](https://github.com/kmziaur) 





