import React from "react";
import BackgroundImage from "../../assets/img/bg-hero-image.jpeg";

const HeroSection = ({ title, description, cta }) => {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "linear-gradient(160deg, #0c4a6e 0%, #075985 40%, #164e63 100%)",
      }}
    >
      {/* Background image overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.55,
        }}
      />

      {/* Dark gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(5,30,60,0.55) 0%, rgba(5,30,60,0.35) 60%, rgba(5,30,60,0.7) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: 700,
          padding: "0 24px",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            color: "rgba(255,255,255,0.75)",
            fontSize: 13,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          From Idea to Itinerary in Seconds
        </p>

        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(36px, 5vw, 60px)",
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: 20,
          }}
        >
          {title || "We create meaningful memories in Israel Day by day"}
        </h1>

        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            color: "rgba(255,255,255,0.8)",
            fontSize: 15,
            lineHeight: 1.7,
            marginBottom: 36,
            maxWidth: 520,
            margin: "0 auto 36px",
          }}
        >
          {description ||
            "We can help offer a tailor-made tour and accommodation within Israel, enabling creation for a focus on the excellence and quality of memorable visiting groups, delegations, and conferences."}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 20, justifyContent: "center" }}>
          {/* CTA Button */}
          <button
            style={{
              background: "#0ea5e9",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "14px 32px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              transition: "background 0.2s, transform 0.2s",
              boxShadow: "0 4px 20px rgba(14,165,233,0.4)",
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
            {cta || "Starting Tour"}
          </button>

          {/* Play Button */}
          <button
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              border: "2px solid rgba(255,255,255,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backdropFilter: "blur(4px)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="#"
        style={{
          position: "absolute",
          right: 24,
          bottom: 80,
          zIndex: 10,
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(37,211,102,0.4)",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          animation: "bounce 2s infinite",
        }}
      >
        <style>{`@keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }`}</style>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
