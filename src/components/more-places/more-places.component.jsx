import React from "react";

const tourTypes = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0ea5e9">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    title: "Assured Departures, Zero Uncertainty",
    desc: "Plan with confidence—our itineraries are structured to run smoothly without cancellations, ensuring your trip goes ahead as planned.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0ea5e9">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
      </svg>
    ),
    title: "Flexible Day Trip Options",
    desc: "Choose short, well-curated trips that fit your schedule perfectly, with the freedom to explore at your own pace.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0ea5e9">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
      </svg>
    ),
    title: "Smart Group & Casual Travel",
    desc: "Seamlessly organized travel experiences tailored for teams, events, and corporate needs—efficient, structured, and hassle-free.",
  },
];

const MorePlaces = () => {
  return (
    <section
      style={{
        padding: "72px 80px",
        background: "#f8fafc",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: 72,
        }}
      >
        {/* Left: text + list */}
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
            Tours
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
            Assured & Reliable Plans
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "#64748b",
              lineHeight: 1.8,
              marginBottom: 36,
              maxWidth: 460,
            }}
          >
            Well-structured itineraries designed to run seamlessly, so your travel plans stay on track without uncertainty.
          </p>

          {/* Tour type list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 36 }}>
            {tourTypes.map((t, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  padding: "16px 20px",
                  background: "#fff",
                  borderRadius: 12,
                  border: "1px solid #e2e8f0",
                  transition: "box-shadow 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = "0 4px 16px rgba(14,165,233,0.1)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: "#e0f2fe",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {t.icon}
                </div>
                <div>
                  <h4
                    style={{
                      fontWeight: 600,
                      fontSize: 14,
                      color: "#0f172a",
                      marginBottom: 4,
                    }}
                  >
                    {t.title}
                  </h4>
                  <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.7 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            style={{
              background: "#0ea5e9",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 28px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#0284c7")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#0ea5e9")}
          >
            Create a Plan →
          </button>
        </div>

        {/* Right: Circular image */}
        <div
          style={{
            width: 380,
            height: 380,
            flexShrink: 0,
            position: "relative",
          }}
        >
          {/* Large circle */}
          <div
            style={{
              width: 340,
              height: 340,
              borderRadius: "50%",
              overflow: "hidden",
              border: "6px solid #fff",
              boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format&fit=crop"
              alt="Travellers"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Decorative ring */}
          <div
            style={{
              position: "absolute",
              bottom: -16,
              left: -16,
              width: 100,
              height: 100,
              borderRadius: "50%",
              border: "3px solid #bae6fd",
              opacity: 0.5,
            }}
          />

          {/* Small stat badge */}
          <div
            style={{
              position: "absolute",
              bottom: 20,
              left: 0,
              background: "#fff",
              borderRadius: 14,
              padding: "12px 18px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "#dcfce7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#16a34a">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#0f172a" }}>10,000+</div>
              <div style={{ fontSize: 11, color: "#64748b" }}>Happy Travellers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MorePlaces;
