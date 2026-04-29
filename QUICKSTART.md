# 🚀 Quick Start Guide

## ⚡ 5-Minute Setup

### Step 1: Install Dependencies
```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### Step 2: Start Backend Server
```bash
cd server
npm start
```
✅ Backend running on `http://localhost:5000`

### Step 3: Start Frontend (New Terminal)
```bash
cd client
npm run dev
```
✅ Frontend running on `http://localhost:5173`

### Step 4: Open in Browser
Visit: `http://localhost:5173`

🎉 **Done! Explore the app!**

---

## 📍 Navigation

### Main Pages
1. **Home** → Landing page with features
2. **Events** (from navbar) → Browse & register for events
3. **Admin** (from navbar) → View all registrations

### User Flow
```
Home → Browse Events → Select Event → Fill Form → Register → Admin Confirmation
```

---

## 🎯 What to Try

### As a User
- [ ] Click "Browse Events" on home page
- [ ] Select different events to see details
- [ ] Fill out registration form (all fields required)
- [ ] Get success notification

### As an Admin
- [ ] Click "Admin" button in navbar
- [ ] View registration statistics
- [ ] See all registrations in the table
- [ ] Delete a registration to test functionality

---

## 📊 Example Events

5 events pre-loaded:
1. 🤖 AI Workshop
2. 💻 Web Dev Bootcamp
3. 🚀 Hackathon 2026
4. 📱 Mobile Dev Summit
5. 📊 Data Science Bootcamp

---

## 🛟 Troubleshooting

### Port Already in Use?
```bash
# Linux/Mac: Find process on port 5000
lsof -i :5000
kill -9 <PID>

# Windows: Use different port in server.js
```

### CORS Errors?
Make sure:
- Backend is running on `http://localhost:5000`
- Frontend is running on `http://localhost:5173`
- Both servers are started

### Module Not Found?
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Data Not Persisting?
Check if `server/data.json` exists. If not, register again to create it.

---

## 💡 Testing the API Directly

Use curl or Postman:

### Get All Events
```bash
curl http://localhost:5000/events
```

### Register
```bash
curl -X POST http://localhost:5000/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "event": "AI Workshop"
  }'
```

### Get Registrations
```bash
curl http://localhost:5000/registrations
```

### Delete Registration
```bash
curl -X DELETE http://localhost:5000/registrations/0
```

---

## 🎨 Customization

### Change Event Data
Edit: `server/server.js` → `const events = [...]`

### Change Colors
Edit: `client/src/App.css` → Update color utilities

### Change App Name
1. `client/src/pages/Home.jsx` - "EventHub"
2. `server/server.js` - Console messages
3. `README.md` - Title

---

## 📦 Project Files Created/Updated

✅ `client/src/pages/Home.jsx` - New landing page
✅ `client/src/pages/EventsPage.jsx` - New events page
✅ `client/src/pages/AdminDashboard.jsx` - New admin panel
✅ `client/src/App.jsx` - Updated with routing
✅ `client/src/components/RegistrationForm.jsx` - Enhanced form
✅ `client/src/App.css` - Complete styling overhaul
✅ `server/server.js` - Major backend enhancements
✅ `README.md` - Full documentation

---

## 🎓 Learning Resources

### Next Steps to Enhance:
1. Add authentication (login/signup)
2. Add email notifications
3. Add payment integration
4. Deploy to cloud (Vercel, Heroku)
5. Add database (MongoDB)

---

**Happy registering! 🎉**
