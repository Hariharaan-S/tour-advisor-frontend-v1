import React from "react";

const badges = [
  {
    number: "01",
    title: "Cost-Optimized Travel Planning",
    subtitle: "Plan smarter with AI-generated itineraries.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#0ea5e9">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Sustainable Travel Choices",
    subtitle: "CPromote greener journeys with intelligent recommendations",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#16a34a">
        <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Reliable & Secure Experience",
    subtitle:
      "Travel with confidence through a platform designed with strong data protection",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#0ea5e9">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
      </svg>
    ),
  },
];

const LeadersSection = () => {
  return (
    <section
      style={{
        padding: "72px 80px",
        background: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 48,
          width: "100%",
          margin: "0 auto",
          flexWrap: "wrap",
        }}
      >
        {/* Left: Text Block */}
        <div style={{ flex: 1, minWidth: 320, maxWidth: 640 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#0ea5e9",
              marginBottom: 12,
            }}
          >
            Intro
          </p>
          <h2
            style={{
              fontSize: "clamp(26px, 3vw, 38px)",
              fontWeight: 700,
              color: "#0f172a",
              lineHeight: 1.25,
              marginBottom: 20,
            }}
          >
            Plan Smarter Trips with AI
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "#64748b",
              lineHeight: 1.8,
              marginBottom: 32,
            }}
          >
            Discover destinations, generate day-by-day itineraries, and explore
            stays, food, and attractions—all tailored to your budget and
            preferences. Plan your perfect trip across India in seconds.
          </p>
        </div>

        {/* Right: decorative arrow/graphic */}
        <div
          style={{
            width: 100,
            height: 100,
            opacity: 0.1,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="80" height="80" viewBox="0 0 24 24" fill="#0ea5e9">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
      </div>

      {/* Cards row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 24,
          width: "100%",
          marginTop: 40,
        }}
      >
        {badges.map((b, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: 24,
              padding: "24px 28px",
              minHeight: 140,
              transition: "box-shadow 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 4px 16px rgba(14,165,233,0.12)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "#e0f2fe",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {b.icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  marginBottom: 8,
                }}
              >
                <div
                  style={{ fontWeight: 700, fontSize: 16, color: "#0f172a" }}
                >
                  {b.title}
                </div>
                <div
                  style={{ fontSize: 12, fontWeight: 700, color: "#0ea5e9" }}
                >
                  {b.number}
                </div>
              </div>
              <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>
                {b.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadersSection;
