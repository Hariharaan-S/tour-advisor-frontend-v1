import React from "react";

const CTASection = () => {
  return (
    <section
      style={{
        position: "relative",
        minHeight: 320,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(7,89,133,0.82) 0%, rgba(12,74,110,0.75) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "64px 24px",
          maxWidth: 640,
        }}
      >
        <h2
          style={{
            fontWeight: 700,
            fontSize: "clamp(26px, 4vw, 44px)",
            color: "#fff",
            lineHeight: 1.25,
            marginBottom: 20,
          }}
        >
          Find The Perfect Trip For You And Discover Smart Adventures With Us!
        </h2>
        <p
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.8,
            marginBottom: 32,
          }}
        >
          Our AI-driven platform is ready to craft your dream itinerary. From
          private tours to group adventures — your perfect travel experience
          awaits.
        </p>
        <button
          style={{
            background: "#0ea5e9",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "14px 36px",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            cursor: "pointer",
            boxShadow: "0 4px 24px rgba(14,165,233,0.4)",
            transition: "background 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#0284c7";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#0ea5e9";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Get Started Now →
        </button>
      </div>
    </section>
  );
};

export default CTASection;
