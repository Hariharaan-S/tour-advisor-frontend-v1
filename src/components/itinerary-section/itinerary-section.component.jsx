import React from "react";

const stats = [
  { value: "20", label: "Years of Experience" },
  { value: "5k", label: "Happy Trips" },
  { value: "10k", label: "Customers" },
  { value: "4.3", label: "Great App" },
];

const ItinerarySection = () => {
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
        {/* Left: Image Collage */}
        <div
          style={{
            width: 400,
            height: 420,
            position: "relative",
            flexShrink: 0,
          }}
        >
          {/* Main tall image */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 220,
              height: 320,
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 12px 40px rgba(0,0,0,0.14)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&auto=format&fit=crop"
              alt="Israel temple"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Rounded inset image */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 40,
              width: 160,
              height: 160,
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid #fff",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&auto=format&fit=crop"
              alt="Palm beach"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Small bottom right image */}
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: 160,
              height: 180,
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&auto=format&fit=crop"
              alt="Mountain"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Decorative dot pattern */}
          <div
            style={{
              position: "absolute",
              bottom: -16,
              left: 200,
              width: 60,
              height: 60,
              backgroundImage:
                "radial-gradient(circle, #0ea5e9 1.5px, transparent 1.5px)",
              backgroundSize: "10px 10px",
              opacity: 0.3,
            }}
          />
        </div>

        {/* Right: Text + Stats */}
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
            About Us
          </p>
          <h2
            style={{
              fontSize: "clamp(26px, 3vw, 40px)",
              fontWeight: 700,
              color: "#0f172a",
              lineHeight: 1.3,
              marginBottom: 20,
            }}
          >
            Every itinerary is built around what you truly want.
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "#64748b",
              lineHeight: 1.8,
              marginBottom: 40,
              maxWidth: 460,
            }}
          >
            With customized plans, carefully designed routes, and trusted local insights, we make travel planning effortless and experiences unforgettable.
          </p>

          {/* Stats grid */}
          {/* <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
          >
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "clamp(28px, 3vw, 40px)",
                    fontWeight: 800,
                    color: "#0ea5e9",
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: 12, color: "#64748b", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;
