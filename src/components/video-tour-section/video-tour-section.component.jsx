import React, { useState } from "react";

const videoColumns = [
  {
    side: "left",
    items: [
      {
        title: "Curated Trips Across India",
        desc: "Discover how thoughtfully designed itineraries bring destinations to life with seamless planning and unique experiences.",
      },
      {
        title: "Smart Travel Planning in Action",
        desc: "See how personalized itineraries are created using intelligent recommendations, optimized routes, and real traveler insights.",
      },
    ],
  },
  {
    side: "right",
    items: [
      {
        title: "Explore Culture & Hidden Gems",
        desc: "Dive into local experiences, cultural landmarks, and offbeat destinations curated for a richer travel journey.",
      },
      {
        title: "Seamless & Budget-Friendly Travel",
        desc: "Experience how efficient planning, cost optimization, and smart transport choices make travel easier and more affordable.",
      },
    ],
  },
];

const VideoTourSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      style={{
        padding: "72px 80px",
        background: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
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
            Media
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 2.8vw, 36px)",
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            Watch Our Travel Stories
          </h2>
        </div>

        {/* 3-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: 40,
            alignItems: "center",
          }}
        >
          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {videoColumns[0].items.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#0ea5e9",
                    marginTop: 6,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <h4
                    style={{
                      fontWeight: 600,
                      fontSize: 14,
                      color: "#0f172a",
                      marginBottom: 6,
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center: Video thumbnail */}
          <div
            style={{
              width: 320,
              height: 200,
              borderRadius: 20,
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 16px 48px rgba(0,0,0,0.18)",
              cursor: "pointer",
              flexShrink: 0,
            }}
            onClick={() => setPlaying(!playing)}
          >
            {!playing ? (
              <>
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop"
                  alt="Video thumbnail"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      background: "#0ea5e9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 0 12px rgba(14,165,233,0.25)",
                      transition: "transform 0.2s",
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </>
            ) : (
              <iframe
                width="320"
                height="200"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Video tour"
                style={{ border: "none" }}
                allow="autoplay"
              />
            )}
          </div>

          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {videoColumns[1].items.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#0ea5e9",
                    marginTop: 6,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <h4
                    style={{
                      fontWeight: 600,
                      fontSize: 14,
                      color: "#0f172a",
                      marginBottom: 6,
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTourSection;
