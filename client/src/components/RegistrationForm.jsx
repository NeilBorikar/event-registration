import { useState } from "react";

export default function RegistrationForm({ selectedEvent, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: selectedEvent?.name || "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    setTimeout(() => {
      setLoading(false);
      setStatus("success");

      setTimeout(() => {
        setStatus("idle");
        setFormData({
          name: "",
          email: "",
          phone: "",
          event: selectedEvent?.name || "",
        });
      }, 3000);
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="glass-card animate-fade-in" style={{ padding: "3rem", textAlign: "center" }}>
        <div
          className="animate-float"
          style={{
            width: 80, height: 80,
            background: "rgba(34,197,94,0.18)",
            color: "#22c55e",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 1.5rem",
            fontSize: "2.5rem",
          }}
        >
          ✓
        </div>
        <h2 className="text-3xl font-bold mb-4 gradient-text">Registration Confirmed!</h2>
        <p style={{ opacity: 0.7, marginBottom: "2rem" }}>
          We've sent a confirmation email to <strong>{formData.email}</strong>.{" "}
          Get ready for an amazing experience!
        </p>
        <button onClick={onCancel} className="btn-primary" style={{ width: "100%" }}>
          Back to Events
        </button>
      </div>
    );
  }

  return (
    <div className="glass-card animate-fade-in" style={{ padding: "2rem" }}>
      {/* Form Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Reserve Your Spot</h2>
          <p style={{ fontSize: "0.875rem", opacity: 0.6 }}>Join the waitlist or register directly.</p>
        </div>
        <button
          onClick={onCancel}
          style={{
            width: 36, height: 36,
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "white",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background 0.2s",
          }}
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Full Name */}
        <div>
          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.5rem", opacity: 0.8, letterSpacing: "0.04em" }}>
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.5rem", opacity: 0.8, letterSpacing: "0.04em" }}>
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.5rem", opacity: 0.8, letterSpacing: "0.04em" }}>
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            required
          />
        </div>

        {/* Selected Event (read-only) */}
        <div>
          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.5rem", opacity: 0.8, letterSpacing: "0.04em" }}>
            Selected Event
          </label>
          <div
            style={{
              padding: "0.9rem 1.1rem",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 14,
              color: "var(--primary)",
              fontWeight: 600,
              fontSize: "0.95rem",
            }}
          >
            {selectedEvent?.name || "Choose an event"}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading || !selectedEvent}
          className="btn-primary"
          style={{ width: "100%", padding: "1rem", fontSize: "1.05rem" }}
        >
          {loading ? (
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem" }}>
              <span className="spinner" />
              Processing...
            </span>
          ) : (
            "Complete Registration"
          )}
        </button>

        <p style={{ textAlign: "center", fontSize: "0.72rem", opacity: 0.4 }}>
          By registering, you agree to our Terms of Service and Privacy Policy.
        </p>
      </form>
    </div>
  );
}