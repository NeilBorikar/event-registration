import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MOCK_REGISTRATIONS = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", phone: "+1 234 567 8901", event: "Global AI Summit 2026", status: "Confirmed" },
  { id: 2, name: "Bob Smith", email: "bob@tech.io", phone: "+1 987 654 3210", event: "Design Systems Bootcamp", status: "Pending" },
  { id: 3, name: "Charlie Brown", email: "charlie@design.com", phone: "+1 456 789 0123", event: "Future of Fintech", status: "Confirmed" },
  { id: 4, name: "Diana Prince", email: "diana@wonder.com", phone: "+1 321 654 0987", event: "Global AI Summit 2026", status: "Confirmed" },
  { id: 5, name: "Ethan Hunt", email: "ethan@mission.com", phone: "+1 789 456 1230", event: "Cloud Architecture Days", status: "Confirmed" },
];

const statCardStyle = (borderColor, bgColor) => ({
  padding: "1.5rem",
  borderLeft: `4px solid ${borderColor}`,
  background: bgColor,
});

export default function AdminDashboard() {
  const [registrations, setRegistrations] = useState(MOCK_REGISTRATIONS);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setRegistrations(registrations.filter((r) => r.id !== id));
  };

  const filtered = registrations.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.event.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Top Nav */}
      <nav className="container flex justify-between items-center py-6 animate-fade-in">
        <div
          className="flex items-center gap-2"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <div
            style={{
              width: 32, height: 32,
              background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
              borderRadius: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 14px rgba(236,72,153,0.4)",
            }}
          >
            <span style={{ fontSize: 18 }}>🛠️</span>
          </div>
          <h1 className="text-xl font-bold gradient-text">Admin Center</h1>
        </div>
        <button
          onClick={() => navigate("/")}
          className="btn-secondary"
          style={{ padding: "0.4rem 1rem", fontSize: "0.875rem" }}
        >
          Logout
        </button>
      </nav>

      <main className="container py-10">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">
            Dashboard <span className="gradient-text">Overview</span>
          </h1>
          <p style={{ opacity: 0.6 }}>Manage registrations and monitor event performance.</p>
        </div>

        {/* Stats Grid */}
        <div
          className="animate-fade-in"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
            animationDelay: "0.1s",
          }}
        >
          <div className="glass-card" style={statCardStyle("var(--primary)", "rgba(139,92,246,0.05)")}>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
              Total Registrations
            </p>
            <h3 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.25rem" }}>1,284</h3>
            <p style={{ fontSize: "0.75rem", color: "#22c55e", fontWeight: 600 }}>↑ 12.5% vs last month</p>
          </div>

          <div className="glass-card" style={statCardStyle("var(--secondary)", "rgba(236,72,153,0.05)")}>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--secondary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
              Active Events
            </p>
            <h3 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.25rem" }}>12</h3>
            <p style={{ fontSize: "0.75rem", opacity: 0.5, fontWeight: 600 }}>Live across 4 categories</p>
          </div>

          <div className="glass-card" style={statCardStyle("var(--accent)", "rgba(59,130,246,0.05)")}>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
              Projected Revenue
            </p>
            <h3 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.25rem" }}>$42.8k</h3>
            <p style={{ fontSize: "0.75rem", color: "#22c55e", fontWeight: 600 }}>↑ 8.2% trend</p>
          </div>

          <div className="glass-card" style={statCardStyle("rgba(255,255,255,0.15)", "transparent")}>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
              Avg. Satisfaction
            </p>
            <h3 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.25rem" }}>4.92</h3>
            <p style={{ fontSize: "0.75rem", opacity: 0.5, fontWeight: 600 }}>Based on 842 reviews</p>
          </div>
        </div>

        {/* Registrations Table */}
        <div
          className="glass-card animate-fade-in"
          style={{ overflow: "hidden", animationDelay: "0.2s" }}
        >
          {/* Table Header */}
          <div
            style={{
              padding: "1.5rem 1.75rem",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>Recent Registrations</h3>
            <input
              type="text"
              placeholder="Search attendees..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: 240,
                padding: "0.45rem 1rem",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10,
                color: "white",
                fontSize: "0.875rem",
              }}
            />
          </div>

          {/* Table */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                  {["Attendee", "Event", "Status", "Actions"].map((h, i) => (
                    <th
                      key={h}
                      style={{
                        padding: "1rem 1.5rem",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--text-muted)",
                        textAlign: i === 3 ? "right" : "left",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((reg) => (
                  <tr
                    key={reg.id}
                    style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <td style={{ padding: "1rem 1.5rem" }}>
                      <div style={{ fontWeight: 600 }}>{reg.name}</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", opacity: 0.7 }}>{reg.email}</div>
                    </td>
                    <td style={{ padding: "1rem 1.5rem", fontSize: "0.9rem" }}>{reg.event}</td>
                    <td style={{ padding: "1rem 1.5rem" }}>
                      <span
                        style={{
                          padding: "0.2rem 0.6rem",
                          borderRadius: 6,
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          background: reg.status === "Confirmed" ? "rgba(34,197,94,0.12)" : "rgba(234,179,8,0.12)",
                          color: reg.status === "Confirmed" ? "#22c55e" : "#eab308",
                        }}
                      >
                        {reg.status}
                      </span>
                    </td>
                    <td style={{ padding: "1rem 1.5rem", textAlign: "right" }}>
                      <button
                        onClick={() => handleDelete(reg.id)}
                        style={{
                          fontSize: "0.75rem",
                          color: "#f87171",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontWeight: 600,
                          padding: "0.25rem 0.5rem",
                          borderRadius: 6,
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#fca5a5")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#f87171")}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              padding: "1rem",
              background: "rgba(255,255,255,0.03)",
              textAlign: "center",
            }}
          >
            <button
              style={{
                fontSize: "0.75rem",
                color: "var(--primary)",
                fontWeight: 700,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              View All 1,284 Registrations
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
