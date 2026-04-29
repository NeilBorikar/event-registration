# 🎉 EventHub - Event Registration System

A modern, full-stack event registration system with a beautiful UI and powerful backend.

## ✨ Features

### Frontend
- 🎨 Modern, responsive UI with gradient designs
- 📄 Multi-page application (Home, Events, Admin Dashboard)
- 🎯 Event browsing and registration
- 📊 Admin dashboard to view and manage registrations
- ✅ Real-time form validation and feedback
- 🚀 Built with React + Vite for fast development

### Backend
- 🔗 RESTful API with complete CRUD operations
- 💾 Persistent data storage with JSON
- 📈 Event statistics and analytics
- ✔️ Input validation and error handling
- 🏥 Health check endpoint
- 📱 CORS enabled for cross-origin requests

## 🛠️ Tech Stack

**Frontend:**
- React 19
- React Router
- Axios
- Vite
- Tailwind CSS-inspired styling

**Backend:**
- Node.js
- Express.js
- CORS

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Clone and Navigate**
   ```bash
   cd event-registration-system
   ```

2. **Install Server Dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install Client Dependencies**
   ```bash
   cd ../client
   npm install
   ```

## 🚀 Running the Project

### Start the Backend
```bash
cd server
npm start
```
Server runs on `http://localhost:5000`

### Start the Frontend (in a new terminal)
```bash
cd client
npm run dev
```
Frontend runs on `http://localhost:5173`

## 📚 API Endpoints

### Events
- `GET /events` - Get all events
- `GET /events/:id` - Get event details

### Registrations
- `POST /register` - Register for an event
- `GET /registrations` - Get all registrations (Admin)
- `GET /registrations/:id` - Get specific registration
- `PUT /registrations/:id` - Update registration
- `DELETE /registrations/:index` - Delete registration

### Statistics
- `GET /stats/overview` - Get registration statistics
- `GET /health` - Health check

## 🎯 Pages

### Home Page
- Hero section with call-to-action buttons
- Feature highlights
- Quick navigation to events and admin panel

### Events Page
- Browse all available events
- View event details
- Register directly for events
- Real-time feedback on registration

### Admin Dashboard
- View all registrations
- Registration statistics
- Delete registrations
- Search and filter registrations

## 💾 Data Persistence

Registrations are stored in `server/data.json` for easy access and backup.

## 🎨 UI Highlights

- **Gradient Backgrounds**: Modern color schemes with blue, purple, and pink gradients
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Interactive Elements**: Hover effects and smooth transitions
- **Clear Typography**: Easy-to-read fonts and sizes
- **Accessible Forms**: Proper labels and validation messages

## 🔧 Configuration

### Environment Variables (Optional)
Create `.env` in the server directory:
```
PORT=5000
```

## 🐛 Troubleshooting

**Port already in use?**
Change the PORT in `.env` or by modifying the port in `server.js`

**CORS errors?**
Make sure both servers are running and the frontend API URL points to the correct backend URL

**Cannot find modules?**
Make sure to run `npm install` in both `server` and `client` directories

## 📈 Future Enhancements

- [ ] User authentication and profiles
- [ ] Payment integration
- [ ] Email notifications
- [ ] Advanced search and filters
- [ ] Calendar view for events
- [ ] Dark mode
- [ ] Multiple language support
- [ ] Database integration (MongoDB/PostgreSQL)

## 📝 License

MIT License

## 👨‍💻 Created with ❤️

EventHub - Making event management simple and beautiful!
