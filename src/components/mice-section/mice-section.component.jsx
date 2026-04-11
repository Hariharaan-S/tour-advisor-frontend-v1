import React from "react";

const miceItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0ea5e9">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
      </svg>
    ),
    title: "Business Meetings",
    desc: "Expertly managed meetings that drive results in inspiring Israel venues.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0ea5e9">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
    title: "Conferences and Lectures",
    desc: "State-of-the-art venues with full AV support and catering services.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0ea5e9">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    title: "Business Delegations",
    desc: "Comprehensive delegation programs tailored to your organization's objectives.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0ea5e9">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
      </svg>
    ),
    title: "Incentive Trips",
    desc: "Reward your top performers with unforgettable Israel incentive experiences.",
  },
];

const MICESection = () => {
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
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "flex-start",
          gap: 64,
        }}
      >
        {/* Left */}
        <div style={{ flex: 1 }}>
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
            MICE
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 2.8vw, 36px)",
              fontWeight: 700,
              color: "#0f172a",
              lineHeight: 1.3,
              marginBottom: 16,
            }}
          >
            Tailored MICE Experiences
          </h2>
          <p
            style={{
              fontSize: 13,
              color: "#64748b",
              lineHeight: 1.8,
              marginBottom: 36,
              maxWidth: 420,
            }}
          >
            We specialize in crafting extraordinary Meetings, Incentives, Conferences, and
            Exhibitions across Israel's most iconic destinations.
          </p>

          {/* Items grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
            }}
          >
            {miceItems.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 14,
                  padding: "18px 20px",
                  background: "#f8fafc",
                  borderRadius: 12,
                  border: "1px solid #e2e8f0",
                  transition: "box-shadow 0.2s, border-color 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(14,165,233,0.1)";
                  e.currentTarget.style.borderColor = "#bae6fd";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "#e0f2fe",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: 13,
                      color: "#0f172a",
                      marginBottom: 4,
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: CTA card */}
        <div style={{ width: 300, flexShrink: 0 }}>
          <div
            style={{
              background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
              borderRadius: 20,
              padding: "32px 28px",
              color: "#fff",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* decorative circle */}
            <div
              style={{
                position: "absolute",
                top: -30,
                right: -30,
                width: 120,
                height: 120,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -20,
                left: -20,
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
              }}
            />

            <p
              style={{
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                opacity: 0.75,
                marginBottom: 12,
              }}
            >
              Get Started
            </p>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: 16,
              }}
            >
              Plan Your Next Corporate Event in Israel
            </h3>
            <p
              style={{
                fontSize: 13,
                opacity: 0.85,
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              Our expert team will handle every detail, from venue selection to logistics and beyond.
            </p>
            <button
              style={{
                background: "#fff",
                color: "#0284c7",
                border: "none",
                borderRadius: 8,
                padding: "12px 24px",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              Free Quote →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MICESection;
