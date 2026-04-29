import { useState } from "react";
import EventList from "../components/EventList";
import RegistrationForm from "../components/RegistrationForm";
import { useNavigate } from "react-router-dom";

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Navbar */}
      <nav className="container flex justify-between items-center py-6 animate-fade-in">
        <div
          className="flex items-center gap-2"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <div
            style={{
              width: 32, height: 32,
              background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
              borderRadius: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 14px rgba(139,92,246,0.4)",
            }}
          >
            <span style={{ fontSize: 18 }}>✨</span>
          </div>
          <h1 className="text-xl font-bold gradient-text">EventHub</h1>
        </div>
        <button
          onClick={() => navigate("/")}
          className="btn-secondary"
          style={{ padding: "0.4rem 1rem", fontSize: "0.875rem" }}
        >
          ← Home
        </button>
      </nav>

      <main className="container py-10">
        {!selectedEvent ? (
          <div className="animate-fade-in">
            <div className="mb-12">
              <h1 className="text-5xl font-bold mb-4">
                Discover Your <span className="gradient-text">Next Adventure</span>
              </h1>
              <p style={{ opacity: 0.6, fontSize: "1.1rem" }}>
                Filter by category, date, or popularity to find the perfect event.
              </p>
            </div>

            {/* Spotlight Banner */}
            <div className="glass-card mb-16" style={{ overflow: "hidden" }}>
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(139,92,246,0.12), rgba(236,72,153,0.08), transparent)",
                  padding: "3rem",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "2.5rem",
                }}
              >
                <div style={{ maxWidth: 540 }}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "0.3rem 1rem",
                      background: "rgba(139,92,246,0.2)",
                      color: "var(--primary)",
                      borderRadius: 999,
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Spotlight
                  </span>
                  <h2 style={{ fontSize: "2.4rem", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.2 }}>
                    Developer Week 2026
                  </h2>
                  <p style={{ fontSize: "1.1rem", opacity: 0.7, marginBottom: "2rem", lineHeight: 1.75 }}>
                    The world's largest developer expo and conference series with over 8,000
                    developers, engineers, and technical managers. Join the revolution.
                  </p>
                  <button
                    className="btn-primary"
                    style={{ padding: "1rem 2rem" }}
                    onClick={() =>
                      setSelectedEvent({
                        name: "Developer Week 2026",
                        id: "spotlight",
                        image:
                          "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
                      })
                    }
                  >
                    Claim Your Spot
                  </button>
                </div>
                <div
                  className="glass-card animate-float"
                  style={{
                    width: 180, height: 180,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "5rem",
                    background: "rgba(255,255,255,0.05)",
                    flexShrink: 0,
                  }}
                >
                  👨‍💻
                </div>
              </div>
            </div>

            <EventList onSelect={(event) => setSelectedEvent(event)} />
          </div>
        ) : (
          <div className="animate-fade-in" style={{ maxWidth: 900, margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                gap: "3rem",
                alignItems: "start",
              }}
            >
              {/* Event Info */}
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="btn-secondary mb-8"
                  style={{ fontSize: "0.875rem", padding: "0.5rem 1.2rem" }}
                >
                  ← Back to browsing
                </button>

                {selectedEvent.image && (
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.name}
                    style={{
                      width: "100%", height: 240,
                      objectFit: "cover",
                      borderRadius: 24,
                      marginBottom: "2rem",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                    }}
                  />
                )}

                <h1 className="text-4xl font-bold mb-4">{selectedEvent.name}</h1>
                <div className="flex gap-4 mb-8">
                  <span
                    style={{
                      padding: "0.3rem 0.9rem",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 999,
                      fontSize: "0.875rem",
                    }}
                  >
                    {selectedEvent.category || "Event"}
                  </span>
                  <span
                    style={{
                      padding: "0.3rem 0.9rem",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 999,
                      fontSize: "0.875rem",
                    }}
                  >
                    {selectedEvent.date || "TBA"}
                  </span>
                </div>

                <div style={{ opacity: 0.7, lineHeight: 1.75 }}>
                  <p style={{ marginBottom: "1rem" }}>
                    Join us for an immersive experience where we dive deep into the latest
                    trends and technologies shaping the industry. This session includes
                    hands-on labs, interactive discussions, and networking opportunities.
                  </p>
                  <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <li>3 days of expert-led sessions</li>
                    <li>Hands-on workshops and labs</li>
                    <li>Networking mixer with industry leaders</li>
                    <li>Exclusive access to conference resources</li>
                  </ul>
                </div>
              </div>

              {/* Registration Form */}
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <RegistrationForm
                  selectedEvent={selectedEvent}
                  onCancel={() => setSelectedEvent(null)}
                />
              </div>
            </div>
          </div>
        )}
      </main>

      <footer
        className="container text-center border-t border-glass py-12"
        style={{ opacity: 0.3, fontSize: "0.9rem" }}
      >
        <p>Explore • Connect • Grow</p>
      </footer>
    </div>
  );
}
