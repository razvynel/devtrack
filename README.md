# 🚀 DevTrack – Full-Stack Web Application (Production-Ready Deployment)

DevTrack este o aplicație web **full-stack** construită pentru a demonstra un **setup real de producție**, nu un demo sau tutorial simplu.  
Proiectul acoperă întregul flux: frontend SPA, backend API securizat, containerizare, reverse proxy, HTTPS și monitoring.

Este conceput special ca **proiect de portofoliu (CV / LinkedIn / interviuri tehnice)**.

---

## 🌐 Live URLs (Production – HTTPS)

### 🔹 Frontend (SPA)
👉 https://devtrack.duckdns.org

### 🔹 Backend API
- Health check:  
  👉 https://devtrack.duckdns.org/api/health
- Protected endpoint (JWT):  
  👉 https://devtrack.duckdns.org/api/protected
- Metrics (Prometheus):  
  👉 https://devtrack.duckdns.org/api/metrics

### 🔹 Monitoring (Grafana) U/P: test/test
👉 https://grafana-devtrack.duckdns.org

> 🔐 Toate serviciile sunt accesibile **exclusiv prin HTTPS**, cu redirect automat HTTP → HTTPS.

---

## ✨ Features

### 🔐 Authentication
- User registration & login
- Password hashing (bcrypt)
- JWT-based authentication
- Protected API routes
- Secure logout (frontend)

### 🎨 Frontend (Vanilla JavaScript)
- SPA (Single Page Application)
- Login & Register UI
- Protected dashboard
- JWT stored in localStorage
- ES Modules (import/export)
- Separare clară:
  - API layer
  - UI logic
  - Utils

### 🔧 Backend
- Node.js + Express
- MongoDB (Dockerized)
- REST API
- JWT middleware
- Health check endpoint (`/health`)
- Prometheus metrics endpoint (`/metrics`)

### 📊 Monitoring & Observability
- Prometheus (metrics scraping)
- Grafana (dashboards)
- Node Exporter (CPU, RAM, disk, swap)
- Application metrics (uptime, requests)
- HTTPS access via subdomain

### 🐳 DevOps / Infrastructure
- Docker & Docker Compose
- Nginx reverse proxy
- SSL termination (Let’s Encrypt)
- DuckDNS (dynamic DNS)
- Restart policies
- Linux VM deployment (cloud-ready)

---

## 🏗️ Architecture Overview

```
Browser
   |
   | HTTPS
   v
Nginx (Reverse Proxy)
   |---------------------------|
   |                           |
Frontend SPA              Backend API
(Vanilla JS)          (Node.js / Express)
                               |
                               v
                           MongoDB
                               |
                               v
                        Prometheus
                               |
                               v
                           Grafana
```

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript (ES Modules)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

### Infrastructure / DevOps
- Docker
- Docker Compose
- Nginx
- Prometheus
- Grafana
- Let’s Encrypt (Certbot)
- DuckDNS
- Linux VM

---

## 🚦 Backend API Endpoints

```http
POST /api/auth/register
POST /api/auth/login

GET  /api/protected      (JWT required)
GET  /api/health         (service & DB status)
GET  /api/metrics        (Prometheus)
```

### Example `/api/health` response
```json
{
  "status": "ok",
  "dbState": 1
}
```

---

## 🐳 Local Development

### Start all services
```bash
docker compose up -d
```

### Stop services
```bash
docker compose down
```

### Frontend (local only)
```bash
cd frontend
python3 -m http.server 5500
```

Open:
```
http://localhost:5500/index.html
```

---

## 📁 Repository Structure

```
devtrack/
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── middleware/
│   └── Dockerfile
│
├── frontend/
│   ├── index.html
│   ├── app.js
│   ├── authApi.js
│   ├── dashboard.html
│   ├── dashboard.js
│   ├── styles.css
│   └── utils/
│
├── monitoring/
│   └── prometheus.yml
│
├── nginx/
│   └── devtrack.conf
│
├── docker-compose.yml
└── README.md
```

---

## 🔒 Security Considerations

- HTTPS enforced (HTTP → HTTPS redirect)
- SSL certificates via Let’s Encrypt
- JWT-based authentication
- Backend exposed only via reverse proxy
- No secrets committed to Git
- Sensitive files ignored via `.gitignore`

---

## 🧠 What This Project Demonstrates

- Real-world debugging (Nginx, proxy, MIME issues)
- SPA + ES Modules production setup
- Secure authentication flow
- Production HTTPS configuration
- Monitoring & observability
- Dockerized full-stack deployment
- Clean Git workflow
- Infrastructure-oriented thinking

---

## 📌 Possible Next Improvements

- CI/CD with GitHub Actions
- Kubernetes deployment
- Grafana alerting rules
- Rate limiting & security headers
- OAuth (Google / GitHub login)
- Automated backups

---

## 👤 Author

**Razvan Dragomiroiu**  
GitHub: https://github.com/razvynel  
Live project: https://devtrack.duckdns.org

---

## ✅ Project Status

✔ Fully functional  
✔ Production-ready deployment  
✔ HTTPS enabled  
✔ Monitoring enabled  
