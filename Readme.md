# Visa Slot Alerts — Internal Tool

A mini full‑stack internal tool built for The Flying Panda to track visa slot alerts across countries and cities. The application provides CRUD operations for visa alerts via a React (Vite) frontend and a Node.js + Express backend with MongoDB Atlas persistence.

## Features

- Backend
  - RESTful API with Node.js and Express
  - MongoDB Atlas via Mongoose
  - CRUD operations for visa alerts
  - Query filtering by `country` and `status`
  - Request logging and input validation middleware
  - Centralized error handling and proper HTTP status codes

- Frontend
  - React (Vite)
  - Form to create alerts, table view to list alerts
  - Update alert status and delete alerts
  - Communicates with backend via Axios

## Tech Stack

- Frontend: React, Vite, Axios, CSS
- Backend: Node.js, Express, Mongoose, dotenv
- Database: MongoDB Atlas

## Project Structure

Root layout (important files/folders):

```
Readme.md
backend/
  ├─ config/
  ├─ controllers/
  ├─ middlewares/
  ├─ models/
  ├─ routes/
  ├─ utils/
  └─ server.js
frontend/
  ├─ src/
  │  ├─ api/
  │  ├─ components/
  │  └─ main.jsx
  └─ index.css
```

## Quick Setup

Prerequisites: Node.js (16+), npm, and a MongoDB Atlas connection string.

1. Clone the repository

```bash
git clone <your-repo-url>
cd visa-alerts
```

2. Backend

```bash
cd backend
npm install

# create a .env file with the variables below
npm run dev
```

Environment variables (`backend/.env`):

```
PORT=8000
MONGO_URI=your_mongodb_atlas_connection_string
```

Backend default URL: http://localhost:8000

3. Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend default URL: http://localhost:5173

## API Endpoints

- GET /alerts — Fetch all alerts (supports filters via query string)
  - Examples: `/alerts?country=USA` or `/alerts?status=Active`
- POST /alerts — Create a new alert
- PUT /alerts/:id — Update an existing alert
- DELETE /alerts/:id — Delete an alert

Example curl (create):

```bash
curl -X POST http://localhost:8000/alerts \
  -H "Content-Type: application/json" \
  -d '{"country":"USA","city":"New York","date":"2026-02-15","status":"Active"}'
```

## Development Notes

- Routes, controllers, and models are separated for clarity and scalability.
- Middlewares include simple request logging and input validation (see `backend/middlewares`).
- Centralized error handling is in `backend/utils/errorHandler.js`.

## Checklist (Assignment Requirements)

- CRUD APIs — implemented
- Custom middleware — implemented (logging, validation)
- Query filtering — implemented
- Centralized error handling — implemented
- React frontend calling backend API — implemented
- MongoDB integration via Mongoose — implemented
---
Thank you for reviewing the Visa Slot Alerts internal tool.

## Setup steps (expanded)

- **Backend**
  - Create `.env` at `backend/.env` with `PORT` and `MONGO_URI`.
  - Install and run:
    ```bash
    cd backend
    npm install
    npm run dev
    ```
  - Smoke test the API:
    ```bash
    curl http://localhost:8000/alerts
    ```
- **Frontend**
  - Install and run:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
  - Verify the UI at `http://localhost:5173` and that it can reach the backend.
- **Local dev tips**
  - Use separate terminals for frontend and backend. On Windows prefer PowerShell or Windows Terminal.
  - Use a dedicated development MongoDB database to avoid polluting production data.

## Design decisions

- **Separation of concerns:** routes → controllers → models → middlewares for clarity and testability.
- **RESTful API:** single resource (`/alerts`) with standard verbs for predictability.
- **Mongoose:** schema-driven data modeling and basic validation at the data layer.
- **Lightweight middleware:** request logging, input validation, and a centralized error handler for consistent responses.
- **Client simplicity:** Vite + React + Axios for fast iteration and a small, maintainable codebase.
- **Server-side filtering:** support `country` and `status` query filters to minimize client work and network usage.

## What I'd improve for production

- **Security & access:** add authentication/authorization (JWT/OAuth), input sanitization and stricter validation (Joi/Zod), enforce HTTPS, use `helmet`, and enable CORS with a tight whitelist.
- **Reliability & scaling:** containerize with Docker, provide `docker-compose`/Kubernetes manifests, run multiple instances behind a load balancer, and add health/readiness endpoints.
- **Performance:** add DB indexes for common queries (`country`, `status`, `date`), paginate list endpoints, and introduce caching (Redis) for frequent reads.
- **Observability:** structured logging (Winston), centralized log collection (ELK/Datadog), metrics (Prometheus), and tracing (OpenTelemetry/Jaeger).
- **Resilience & data:** backups for MongoDB, graceful shutdown and retry logic, and schema migration/versioning when needed.
- **Operational:** add CI/CD pipelines (lint, tests, builds), secrets management (Vault/cloud secret manager), rate limiting, and automated tests (unit, integration, E2E).
- **UX & features:** notification delivery (email/SMS) via a job queue, optimistic UI and improved error UX, role-based views, and audit logging for changes.

---
