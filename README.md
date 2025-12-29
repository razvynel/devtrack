## 🌍 Live URLs

The application is deployed on AWS EC2 and is accessible via the following URLs:

### Frontend
- **Public UI:** http://54.93.96.222

### Backend API (via Nginx)
- **Health check:** http://54.93.96.222/api/health
- **Register:** POST http://54.93.96.222/api/auth/register
- **Login:** POST http://54.93.96.222/api/auth/login
- **Protected route:** GET http://54.93.96.222/api/protected

### Monitoring
- **Prometheus UI:** http://54.93.96.222:9090
- **Backend metrics:** http://54.93.96.222/api/metrics
- **Grafana UI:** http://grafana.54.93.96.222.nip.io (for viewer U/P: test/test)

> Note: HTTPS (SSL) setup with Let's Encrypt is planned as a follow-up step.

---

## 🧠 Key Takeaways

- Deployed a full-stack application on **AWS EC2**
- Used **Docker Compose** for service orchestration
- Configured **Nginx** as a reverse proxy for frontend and API
- Implemented **JWT authentication**
- Added **monitoring with Prometheus and Grafana**


DevTrack 🚀

DevTrack is a full-stack web application built to demonstrate a complete authentication flow, frontend-backend integration, containerization, and application monitoring.

The project was created as a portfolio / CV project, focusing on real-world practices rather than tutorials.

---

## ✨ Features

### 🔐 Authentication
- User registration & login
- Password hashing with bcrypt
- JWT-based authentication
- Protected API routes
- Secure logout

### 🎨 Frontend (Vanilla JavaScript)
- Login & Register UI
- Protected dashboard
- JWT stored in localStorage
- Modular ES Modules structure
- Clean separation of concerns (API / UI / utils)

### 🔧 Backend
- Node.js + Express
- MongoDB (Dockerized)
- REST API
- Health check endpoint
- Prometheus metrics endpoint (`/metrics`)

### 📊 Monitoring
- Prometheus for metrics collection
- Grafana dashboards
- Custom dashboard displaying:
  - CPU usage
  - Memory usage
  - Uptime
  - Application status

### 🐳 DevOps
- Docker & Docker Compose
- Multi-service setup
- Restart policies
- Local development environment

---

## 🏗️ Architecture Overview

Frontend (Vanilla JS)
        |
        v
Backend (Node.js + Express)
        |
        v
MongoDB
        |
        v
Prometheus -> Grafana

---

## 🛠️ Tech Stack

Frontend: HTML, CSS, Vanilla JavaScript (ES Modules)  
Backend: Node.js, Express  
Database: MongoDB  
Auth: JWT, bcrypt  
Containers: Docker, Docker Compose  
Monitoring: Prometheus, Grafana  

---

## ▶️ How to Run the Project

### Start backend, database & monitoring

docker compose up --build -d

Backend: http://localhost:3001  
Prometheus: http://localhost:9090  
Grafana: http://localhost:3002  

### Start frontend

cd frontend  
python3 -m http.server 5500  

Open: http://localhost:5500/index.html

---

## 📌 Author

Razvan Dragomiroiu

This project was built as a hands-on portfolio project to demonstrate real-world full-stack deployment and DevOps practices.




