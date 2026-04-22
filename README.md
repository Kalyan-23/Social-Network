# 🌐 Socio – Social Networking Platform

**Socio** is a full-stack social networking application built with a modern tech stack. It enables users to connect, share posts, interact through comments, manage profiles, and engage with real-time features like notifications and AI-powered chat.

---

## 🚀 Features

* 🔐 User Authentication (JWT + Google Login via NextAuth)
* 📝 Create, Edit, Like, Save & Comment on Posts
* 📸 Stories Creation & Viewing
* 👥 Friend Requests & Connections
* 🔔 Real-Time Notifications
* 👤 Profile Management & Avatar Upload
* 🤖 AI Chat Integration
* 📱 Fully Responsive UI

---

## 🛠️ Tech Stack

### Frontend

* Next.js 14
* React 18
* Redux Toolkit
* Tailwind CSS
* Framer Motion

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Additional Services

* Authentication: JWT, NextAuth (Google)
* Media Storage: Cloudinary
* AI Integration: OpenAI / Groq

---

## 📁 Project Structure

```
SocialMediaApp-Main/
├── frontend/      # Next.js application
├── backend/       # Express API server
└── README.md
```

---

## ⚙️ Local Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/Kalyan-23/Social-Network.git
cd Social-Network
```

---

### 2️⃣ Install Dependencies

```
cd backend
npm install

cd ../frontend
npm install
```

---

### 3️⃣ Environment Variables

#### Backend (`backend/.env`)

```
MONGO_URI=mongodb://localhost:27017/socialmedia
PORT=8000
CORS_ORIGIN=http://localhost:3000
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

---

#### Frontend (`frontend/.env.local`)

```
NEXT_PUBLIC_BACKEND_API=http://localhost:8000

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4.1-mini

# Optional
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=openai/gpt-oss-20b
```

---

### 4️⃣ Run the Application

#### Start Backend

```
cd backend
npm run dev
```

#### Start Frontend

```
cd frontend
npm run dev
```

---

## 🌐 Application URLs

* Frontend → http://localhost:3000
* Backend → http://localhost:8000

---

## 🚀 Deployment

### Recommended Stack

* Frontend → Vercel
* Backend → Vercel / Railway / Render
* Database → MongoDB Atlas

### Deployment Steps

1. Deploy backend first
2. Copy backend URL
3. Update frontend `.env.local`
4. Deploy frontend

---

## 🔐 Security Note

* Never commit `.env` files or secrets
* Rotate credentials if exposed
* Use environment variables in production

---

## 📜 Scripts

### Backend

```
npm run dev     # Development
npm start       # Production
```

### Frontend

```
npm run dev     # Development
npm run build   # Build
npm start       # Production
```

---

## 📸 Screenshot

```
<img width="1906" height="946" alt="Screenshot 2026-04-22 230720" src="https://github.com/user-attachments/assets/3b43f7fb-2fe8-40e2-a3c0-6217dd2c58e7" />

```

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Kalyan**
GitHub: https://github.com/Kalyan-23

---
