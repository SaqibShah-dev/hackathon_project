# Hackathon Template: Vite + React + Tailwind + Node + MongoDB

## Quick start
1. Install Node 18+ and MongoDB (local) or create a free MongoDB Atlas cluster.
2. `npm run install:all`
3. Edit `server/.env` (set `MONGO_URI` and a long random `JWT_SECRET`).
4. `npm run dev` -> client http://localhost:5173, API http://localhost:5000/api/health

## Structure
- `server/src/config`       env + DB connection
- `server/src/models`       Mongoose schemas
- `server/src/controllers`  request logic (+ zod schemas)
- `server/src/routes`       route definitions
- `server/src/middleware`   auth, validation, error handling
- `client/src/pages`        route-level screens
- `client/src/components`   `ui/` (Button, Input, Card) and `layout/`
- `client/src/store`        zustand stores: auth + `createCrudStore` (one line per API resource)
- `client/src/api`          axios instance with auth interceptor

## Adding a new feature (5 steps)
1. Model in `server/src/models`
2. Controller (with zod schema) in `server/src/controllers`
3. Routes in `server/src/routes`, register in `routes/index.js`
4. Store in `client/src/store` (copy `itemStore.js`, one line using `createCrudStore`)
5. Page in `client/src/pages` + route in `App.jsx`

## Deploy
- Frontend: Vercel/Netlify (root `client`, build `npm run build`, set `VITE_API_URL`)
- Backend: Render/Railway (root `server`, start `npm start`, add env vars)
- DB: MongoDB Atlas (allow 0.0.0.0/0 for demo)
