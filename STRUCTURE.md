# EventHub Project Structure Guide

## 📁 Directory Structure

```
event-registration-system/
├── client/                           # React Frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx             # Landing page
│   │   │   ├── EventsPage.jsx       # Events browsing & registration
│   │   │   └── AdminDashboard.jsx   # Admin panel
│   │   ├── components/
│   │   │   ├── RegistrationForm.jsx # Reusable form component
│   │   │   └── EventList.jsx        # Legacy component
│   │   ├── App.jsx                  # Main app with routing
│   │   ├── App.css                  # Global styles
│   │   ├── index.css                # Base styles
│   │   ├── main.jsx                 # React DOM entry
│   │   └── assets/                  # Images & static files
│   ├── public/                      # Static public files
│   ├── vite.config.js              # Vite configuration
│   ├── eslint.config.js            # Linting rules
│   ├── package.json                # Dependencies
│   └── index.html                  # HTML template
│
├── server/                         # Express Backend
│   ├── server.js                   # Main server file
│   ├── data.json                   # Persistent data storage (auto-created)
│   ├── package.json                # Dependencies
│   └── .env                        # Environment variables (optional)
│
├── .gitignore                      # Git ignore rules
├── README.md                       # Project documentation
└── STRUCTURE.md                    # This file
```

## 🎯 Component Overview

### Frontend Pages

#### 1. **Home Page** (Home.jsx)
- Hero section with gradient background
- Feature highlights (3 cards)
- Quick navigation buttons
- Responsive navbar

#### 2. **Events Page** (EventsPage.jsx)
- Left side: Event list with selection
- Right side: Event details & registration form
- Event details include: icon, description, date, location, seats
- Real-time event selection

#### 3. **Admin Dashboard** (AdminDashboard.jsx)
- Statistics cards showing registration counts
- Full registration table with details
- Delete registration capability
- Responsive table layout

### Backend API

#### Events Endpoints
```
GET /events              - All events with full details
GET /events/:id         - Single event details
```

#### Registration Endpoints
```
POST /register                  - Create new registration
GET /registrations             - All registrations (Admin)
GET /registrations/:id         - Specific registration
PUT /registrations/:id         - Update registration
DELETE /registrations/:index   - Delete registration
```

#### Stats & Health
```
GET /stats/overview    - Registration statistics
GET /health           - Server health check
```

## 🎨 Styling System

All styles use a **Tailwind CSS-inspired approach** defined in `App.css`:

### Color Palette
- **Primary**: Blue (#2563eb)
- **Secondary**: Purple (#9333ea)
- **Accent**: Pink (#ec4899)
- **Neutral**: Gray shades

### Key Utility Classes
- `flex`, `grid`, `space-*` - Layout
- `text-*`, `bg-*` - Colors
- `px-*`, `py-*` - Padding
- `rounded-lg`, `shadow-lg` - Borders & shadows
- `hover:*`, `transition` - Interactions
- `md:*` - Responsive prefixes

## 🚀 Running the Project

### Terminal 1 - Backend
```bash
cd server
npm install
npm start
```
→ Runs on `http://localhost:5000`

### Terminal 2 - Frontend
```bash
cd client
npm install
npm run dev
```
→ Runs on `http://localhost:5173`

## 📊 Data Flow

```
User visits Home
    ↓
User clicks "Browse Events"
    ↓
EventsPage fetches /events from backend
    ↓
User selects event from list
    ↓
User fills registration form
    ↓
Form submits to POST /register
    ↓
Backend validates & saves to data.json
    ↓
Success message shown to user
    ↓
Admin can view at /admin dashboard
```

## 🔐 Data Persistence

- Registrations stored in `server/data.json`
- Auto-created on first run
- JSON format for easy inspection
- Can be backed up or imported

## 🎯 Key Features

### User Experience
✅ Modern gradient UI
✅ Responsive design (mobile, tablet, desktop)
✅ Smooth animations & transitions
✅ Real-time form validation
✅ Success/error feedback

### Admin Experience
✅ View all registrations in real-time
✅ See registration statistics
✅ Delete invalid registrations
✅ Export-ready JSON format

### Developer Experience
✅ Clean component structure
✅ Well-organized routing
✅ Comprehensive error handling
✅ Clear API documentation
✅ Easy to extend

## 🔧 Customization

### Adding New Events
Edit `server.js` events array and reload server.

### Changing Colors
Modify color variables in `App.css` utility classes.

### Adding Pages
1. Create new `.jsx` file in `src/pages/`
2. Add route in `App.jsx`
3. Import and use components

### Adding API Routes
Edit `server/server.js` - add new `app.get()`, `app.post()` etc.

## 📝 Notes

- Frontend uses Vite for fast hot module reloading
- Backend uses Node.js with Express for simplicity
- No database needed - JSON file storage for MVP
- CORS enabled for local development
- Easily upgradeable to MongoDB/PostgreSQL

---

**Version**: 1.0
**Last Updated**: March 2026
