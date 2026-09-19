# Auth Landing App

Full-stack app with a responsive Next.js landing page and JWT authentication.

## Tech Stack

- **Frontend:** Next.js + TypeScript
- **Backend:** Express + Node.js
- **Database:** MongoDB + Mongoose
- **Auth:** JWT + bcrypt password hashing

## Features

- Landing page sections: hero, features, about, pricing, testimonials, FAQ, contact, footer
- Pages: home, login, register, dashboard
- Protected dashboard (`/dashboard`) after login
- Auth API endpoints:
  - `POST /api/auth/register`
  - `POST /api/auth/login`
  - `GET /api/auth/me`
  - `POST /api/auth/logout`
- JWT via HTTP-only cookie and Authorization header support
- Validation for register/login fields

## Project Structure

- `/frontend` - Next.js app
- `/backend` - Express API

## Environment Setup

1. Copy env example files:
   - `cp backend/.env.example backend/.env`
   - `cp frontend/.env.example frontend/.env.local`
2. Update values, especially:
   - `backend/.env` → `MONGODB_URI`, `JWT_SECRET`
   - `frontend/.env.local` → `NEXT_PUBLIC_API_BASE_URL`

## Install and Run

From repository root:

```bash
npm install
npm run dev
```

This starts:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

## Production Commands

```bash
npm run build
npm run start
```

## API Quick Test

- Register a user from `/register`
- Login from `/login`
- Open `/dashboard` (protected)
- Logout from dashboard button
