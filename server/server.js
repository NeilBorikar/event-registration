const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = "./data.json";

// Initialize data file
const initializeData = () => {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(
      DATA_FILE,
      JSON.stringify({
        registrations: [],
      })
    );
  }
};

const readData = () => {
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// Enhanced events with details
const events = [
  {
    id: 1,
    name: "AI Workshop",
    icon: "🤖",
    description: "Learn AI fundamentals and machine learning",
    fullDescription:
      "Explore the world of Artificial Intelligence! This hands-on workshop covers ML basics, neural networks, and practical applications. Perfect for beginners and intermediate learners.",
    date: "March 25, 2026",
    location: "Tech Hub, Bay Area",
    seats: "50/50",
  },
  {
    id: 2,
    name: "Web Dev Bootcamp",
    icon: "💻",
    description: "Master modern web development stack",
    fullDescription:
      "Comprehensive bootcamp covering HTML, CSS, JavaScript, React, and backend development. Learn to build full-stack applications from scratch with real-world projects.",
    date: "April 5, 2026",
    location: "Digital Center, SF",
    seats: "35/40",
  },
  {
    id: 3,
    name: "Hackathon 2026",
    icon: "🚀",
    description: "24-hour coding challenge and innovation event",
    fullDescription:
      "Join 500+ developers for an exciting 24-hour hackathon! Build innovative projects, network with industry leaders, and win amazing prizes. All skill levels welcome.",
    date: "April 20-21, 2026",
    location: "Innovation Campus",
    seats: "200/500",
  },
  {
    id: 4,
    name: "Mobile Dev Summit",
    icon: "📱",
    description: "Create powerful mobile applications",
    fullDescription:
      "Deep dive into iOS and Android development. Learn cross-platform frameworks like Flutter and React Native. Build your first mobile app with expert guidance.",
    date: "May 2, 2026",
    location: "Tech Hub",
    seats: "40/45",
  },
  {
    id: 5,
    name: "Data Science Bootcamp",
    icon: "📊",
    description: "Master data analysis and visualization",
    fullDescription:
      "Learn Python, pandas, and data visualization tools. Analyze real datasets and create stunning insights. Become a data-driven decision maker.",
    date: "May 15, 2026",
    location: "Analytics Center",
    seats: "30/35",
  },
];

// Initialize data on startup
initializeData();

// Get all events
app.get("/events", (req, res) => {
  try {
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Error fetching events" });
  }
});

// Get event details
app.get("/events/:id", (req, res) => {
  try {
    const event = events.find((e) => e.id === parseInt(req.params.id));
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: "Error fetching event" });
  }
});

// Register for event
app.post("/register", (req, res) => {
  try {
    const { name, email, phone, event } = req.body;

    // Validation
    if (!name || !email || !phone || !event) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!email.includes("@")) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    if (phone.length < 10) {
      return res.status(400).json({ message: "Invalid phone number" });
    }

    const data = readData();
    const registration = {
      id: Date.now(),
      name,
      email,
      phone,
      event,
      registeredAt: new Date().toISOString(),
    };

    data.registrations.push(registration);
    writeData(data);

    res.status(201).json({
      message: "Registration successful!",
      registration,
    });
  } catch (err) {
    res.status(500).json({ message: "Error processing registration" });
  }
});

// Get all registrations (Admin)
app.get("/registrations", (req, res) => {
  try {
    const data = readData();
    res.json(data.registrations);
  } catch (err) {
    res.status(500).json({ message: "Error fetching registrations" });
  }
});

// Get registration by ID
app.get("/registrations/:id", (req, res) => {
  try {
    const data = readData();
    const registration = data.registrations.find(
      (r) => r.id === parseInt(req.params.id)
    );

    if (!registration) {
      return res.status(404).json({ message: "Registration not found" });
    }

    res.json(registration);
  } catch (err) {
    res.status(500).json({ message: "Error fetching registration" });
  }
});

// Delete registration
app.delete("/registrations/:index", (req, res) => {
  try {
    const index = parseInt(req.params.index);
    const data = readData();

    if (index < 0 || index >= data.registrations.length) {
      return res.status(404).json({ message: "Registration not found" });
    }

    const deleted = data.registrations.splice(index, 1);
    writeData(data);

    res.json({
      message: "Registration deleted successfully",
      deleted: deleted[0],
    });
  } catch (err) {
    res.status(500).json({ message: "Error deleting registration" });
  }
});

// Update registration
app.put("/registrations/:id", (req, res) => {
  try {
    const { name, email, phone, event } = req.body;
    const data = readData();

    const registration = data.registrations.find(
      (r) => r.id === parseInt(req.params.id)
    );

    if (!registration) {
      return res.status(404).json({ message: "Registration not found" });
    }

    if (name) registration.name = name;
    if (email) registration.email = email;
    if (phone) registration.phone = phone;
    if (event) registration.event = event;

    writeData(data);
    res.json({ message: "Registration updated", registration });
  } catch (err) {
    res.status(500).json({ message: "Error updating registration" });
  }
});

// Get event statistics
app.get("/stats/overview", (req, res) => {
  try {
    const data = readData();
    const registrations = data.registrations;

    const stats = {
      totalRegistrations: registrations.length,
      registrationsByEvent: {},
      registrationsByDate: {},
    };

    registrations.forEach((reg) => {
      stats.registrationsByEvent[reg.event] =
        (stats.registrationsByEvent[reg.event] || 0) + 1;

      const date = new Date(reg.registeredAt).toISOString().split("T")[0];
      stats.registrationsByDate[date] =
        (stats.registrationsByDate[date] || 0) + 1;
    });

    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: "Error fetching statistics" });
  }
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
  console.log(`✓ Registrations data stored in ${DATA_FILE}`);
});