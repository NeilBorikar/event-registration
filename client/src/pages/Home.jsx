import { useNavigate } from "react-router-dom";
const heroImg = "/hero_event_hub.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">

      {/* ===== HERO — full viewport, background image visible ===== */}
      <section className="hero-section">
        <img src={heroImg} alt="EventHub Hero" className="hero-bg" />
        <div className="hero-overlay" />

        {/* Navbar pinned to top of hero */}
        <nav className="absolute-nav">
          <div className="flex items-center gap-2">
            <div
              className="flex items-center justify-center"
              style={{
                width: 40, height: 40,
                background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                borderRadius: 12,
              }}
            >
              <span style={{ fontSize: 20 }}>✨</span>
            </div>
            <span style={{ fontSize: "1.4rem", fontWeight: 800, fontFamily: "'Outfit', sans-serif" }}
              className="gradient-text">
              EventHub
            </span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/events")}
              className="btn-secondary"
            >
              Events
            </button>
            <button
              onClick={() => navigate("/admin")}
              className="btn-primary"
            >
              Admin Portal
            </button>
          </div>
        </nav>

        {/* CTA buttons at bottom-center of the hero */}
        <div className="hero-content">
          <button
            onClick={() => navigate("/events")}
            className="btn-primary"
            style={{ padding: "1.1rem 3rem", fontSize: "1.15rem" }}
          >
            Explore Events
          </button>
          <button
            onClick={() => navigate("/events")}
            className="btn-secondary"
            style={{ padding: "1.1rem 3rem", fontSize: "1.15rem" }}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* ===== WHY CHOOSE ===== */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 style={{ fontSize: "2.8rem", fontWeight: 800, marginBottom: "1rem" }}>
            Why Choose <span className="gradient-text">EventHub?</span>
          </h2>
          <p style={{ opacity: 0.6, fontSize: "1.1rem", maxWidth: 560, margin: "0 auto" }}>
            The future of professional events — curated, seamless, and global.
          </p>
        </div>

        <div className="feature-grid animate-fade-in">
          <div className="glass-card feature-card" style={{ animationDelay: "0.1s" }}>
            <div className="icon-box bg-blue-500/20">🎯</div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              Seamless Entry
            </h3>
            <p style={{ opacity: 0.6, lineHeight: 1.7 }}>
              Register in seconds with our optimised flow — no endless forms, no friction.
            </p>
          </div>

          <div className="glass-card feature-card" style={{ animationDelay: "0.2s" }}>
            <div className="icon-box bg-purple-500/20">💡</div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              Curated Content
            </h3>
            <p style={{ opacity: 0.6, lineHeight: 1.7 }}>
              Hand-picked workshops, masterclasses and conferences that actually move the needle.
            </p>
          </div>

          <div className="glass-card feature-card" style={{ animationDelay: "0.3s" }}>
            <div className="icon-box bg-pink-500/20">🚀</div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              Global Networking
            </h3>
            <p style={{ opacity: 0.6, lineHeight: 1.7 }}>
              Connect with industry leaders and peers across every discipline worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer
        className="container text-center border-t border-glass py-12"
        style={{ opacity: 0.45, fontSize: "0.9rem" }}
      >
        © 2026 EventHub. Built for the future of connection.
      </footer>

    </div>
  );
}
