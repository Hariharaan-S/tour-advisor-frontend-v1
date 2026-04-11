import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "Our Israel mission trip was beyond expectations. WeRIsrael handled every detail flawlessly — from the moment we landed to the final farewell dinner. Our group was deeply moved.",
    name: "David Cohen",
    role: "Jewish Federation Leader",
    avatar: "https://i.pravatar.cc/60?img=11",
  },
  {
    quote:
      "The private tour they arranged for us was truly personalized. Our guide knew exactly what we wanted to see and experience. This was a once-in-a-lifetime journey through Israel.",
    name: "Sarah Mitchell",
    role: "Private Tour Guest",
    avatar: "https://i.pravatar.cc/60?img=45",
  },
  {
    quote:
      "As a corporate delegation, we needed seamless logistics. WeRIsrael delivered excellence at every touchpoint — venues, transport, accommodation, and cultural insights.",
    name: "James Harrington",
    role: "Business Delegation Lead",
    avatar: "https://i.pravatar.cc/60?img=33",
  },
  {
    quote:
      "The MICE conference they organized in Jerusalem was world-class. The venue selection was inspired, the catering impeccable, and the technical support flawless throughout.",
    name: "Rachel Stern",
    role: "Event Director",
    avatar: "https://i.pravatar.cc/60?img=47",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      style={{
        padding: "72px 80px",
        background: "#f0f9ff",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "rgba(14,165,233,0.08)",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 48,
          }}
        >
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#0ea5e9",
                marginBottom: 10,
              }}
            >
              What Our Clients Say
            </p>
            <h2
              style={{
                fontSize: "clamp(24px, 2.8vw, 36px)",
                fontWeight: 700,
                color: "#0f172a",
              }}
            >
              From Our Travellers
            </h2>
          </div>

          {/* Nav dots / arrows */}
          <div style={{ display: "flex", gap: 10 }}>
            {["←", "→"].map((arrow, i) => (
              <button
                key={i}
                onClick={() => {
                  if (i === 0) setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
                  else setActive((a) => (a + 1) % testimonials.length);
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: "1px solid #bae6fd",
                  background: "#fff",
                  cursor: "pointer",
                  fontSize: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#e0f2fe")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
              >
                {arrow}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{
                background: i === active ? "#0ea5e9" : "#fff",
                borderRadius: 16,
                padding: "28px 24px",
                boxShadow:
                  i === active
                    ? "0 12px 36px rgba(14,165,233,0.3)"
                    : "0 4px 16px rgba(0,0,0,0.06)",
                cursor: "pointer",
                transition: "all 0.3s",
                transform: i === active ? "translateY(-8px)" : "translateY(0)",
                border: i === active ? "none" : "1px solid #e2e8f0",
              }}
            >
              {/* Quote icon */}
              <div style={{ marginBottom: 16 }}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill={i === active ? "rgba(255,255,255,0.4)" : "#bae6fd"}
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>

              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.8,
                  color: i === active ? "rgba(255,255,255,0.9)" : "#64748b",
                  marginBottom: 24,
                }}
              >
                {t.quote}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: `2px solid ${i === active ? "rgba(255,255,255,0.5)" : "#e2e8f0"}`,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: 13,
                      color: i === active ? "#fff" : "#0f172a",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: i === active ? "rgba(255,255,255,0.7)" : "#94a3b8",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 32 }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === active ? "#0ea5e9" : "#bae6fd",
                border: "none",
                cursor: "pointer",
                transition: "width 0.3s, background 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
