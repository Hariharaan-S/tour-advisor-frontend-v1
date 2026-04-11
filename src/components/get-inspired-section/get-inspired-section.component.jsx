import React from "react";

const posts = [
  {
    image:
      "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?w=500&auto=format&fit=crop",
    category: "History",
    title: "Hagia Receptance",
    date: "April 2024",
    readTime: "5 min",
  },
  {
    image:
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=500&auto=format&fit=crop",
    category: "Nature",
    title: "Verdant Tanzania",
    date: "March 2024",
    readTime: "4 min",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542903660-eedba2cda473?w=500&auto=format&fit=crop",
    category: "Culture",
    title: "Diffuse Beliefs",
    date: "March 2024",
    readTime: "6 min",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=500&auto=format&fit=crop",
    category: "Adventure",
    title: "Atkins to Wild Korea",
    date: "February 2024",
    readTime: "7 min",
  },
];

const GetInspiredSection = () => {
  return (
    <section
      style={{
        padding: "72px 80px",
        background: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 40,
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
              Blog & Articles
            </p>
            <h2
              style={{
                fontSize: "clamp(24px, 2.8vw, 36px)",
                fontWeight: 700,
                color: "#0f172a",
              }}
            >
              Get Inspired
            </h2>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button
              style={{
                padding: "10px 20px",
                borderRadius: 8,
                border: "1px solid #e2e8f0",
                background: "#fff",
                fontSize: 13,
                fontFamily: "'Poppins', sans-serif",
                cursor: "pointer",
                color: "#334155",
                fontWeight: 500,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f8fafc")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
            >
              View All →
            </button>
            {["←", "→"].map((arrow, i) => (
              <button
                key={i}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  border: "1px solid #e2e8f0",
                  background: "#fff",
                  cursor: "pointer",
                  fontSize: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#f1f5f9")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
              >
                {arrow}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
        >
          {posts.map((p, i) => (
            <article
              key={i}
              style={{
                borderRadius: 16,
                overflow: "hidden",
                background: "#fff",
                border: "1px solid #e2e8f0",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ height: 180, overflow: "hidden", position: "relative" }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s",
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    background: "#0ea5e9",
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 600,
                    padding: "4px 12px",
                    borderRadius: 20,
                  }}
                >
                  {p.category}
                </span>
              </div>

              <div style={{ padding: "18px 20px" }}>
                <h3
                  style={{
                    fontWeight: 600,
                    fontSize: 15,
                    color: "#0f172a",
                    marginBottom: 8,
                    lineHeight: 1.4,
                  }}
                >
                  {p.title}
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontSize: 11,
                    color: "#94a3b8",
                  }}
                >
                  <span>{p.date}</span>
                  <span>•</span>
                  <span>{p.readTime} read</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInspiredSection;
