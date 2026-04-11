import React, { useRef } from "react";

const tours = [
  {
    image: "http://localhost:5000/api/plan/image/" + encodeURIComponent("Besant Nagar Beach"),
    city: "Besant Nagar Beach, Chennai",
    rating: 4.8,
    reviews: 128,
    badge: "Popular",
    badgeColor: "#f97316",
  },
  {
    image: "http://localhost:5000/api/plan/image/" + encodeURIComponent("Thiruvanmiyur Beach"),
    city: "Thiruvanmiyur Beach, Chennai",
    rating: 4.9,
    reviews: 214,
    badge: "Top Rated",
    badgeColor: "#0ea5e9",
  },
  {
    image: "http://localhost:5000/api/plan/image/" + encodeURIComponent("Marundeeswarar Temple"),
    city: "Marundeeswarar Temple, Chennai",
    rating: 4.7,
    reviews: 89,
    badge: "Trending",
    badgeColor: "#10b981",
  },
  {
    image: "http://localhost:5000/api/plan/image/" + encodeURIComponent("Gandhi Mandapam"),
    city: "Gandhi Mandapam, Chennai",
    rating: 4.6,
    reviews: 67,
    badge: "New",
    badgeColor: "#8b5cf6",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill={s <= Math.round(rating) ? "#f59e0b" : "#e2e8f0"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      <span style={{ fontSize: 10, color: "#64748b", marginLeft: 2 }}>{rating}</span>
    </div>
  );
};

const ExplorePlans = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: "smooth" });
    }
  };

  const filters = ["Chennai", "Madurai", "Coimbatore"];

  return (
    <section
      style={{
        padding: "72px 80px",
        background: "#f8fafc",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 64,
          }}
        >
          {/* Left: Text */}
          <div style={{ width: 360, flexShrink: 0 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "#e0f2fe",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#0ea5e9">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <h2
              style={{
                fontSize: "clamp(22px, 2.5vw, 32px)",
                fontWeight: 700,
                color: "#0f172a",
                lineHeight: 1.3,
                marginBottom: 16,
              }}
            >
              Discover Trending Travel Itineraries
            </h2>
            <p
              style={{
                fontSize: 13,
                color: "#64748b",
                lineHeight: 1.8,
                marginBottom: 28,
              }}
            >
              Trending trips, smart routes, and easy planning—all in one place.
            </p>

            <button
              style={{
                background: "#0ea5e9",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "12px 24px",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: 13,
                cursor: "pointer",
                marginBottom: 24,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#0284c7")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0ea5e9")}
            >
              Explore All Tours
            </button>

            {/* Filter tags */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {filters.map((f, i) => (
                <button
                  key={i}
                  style={{
                    padding: "6px 16px",
                    borderRadius: 20,
                    border: i === 0 ? "none" : "1px solid #e2e8f0",
                    background: i === 0 ? "#0ea5e9" : "transparent",
                    color: i === 0 ? "#fff" : "#64748b",
                    fontSize: 12,
                    fontFamily: "'Poppins', sans-serif",
                    cursor: "pointer",
                    fontWeight: 500,
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Scrollable cards */}
          <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
            {/* Scroll buttons */}
            <div
              style={{
                position: "absolute",
                right: 0,
                top: -48,
                display: "flex",
                gap: 8,
                zIndex: 2,
              }}
            >
              {[{ dir: -1, icon: "←" }, { dir: 1, icon: "→" }].map(({ dir, icon }) => (
                <button
                  key={dir}
                  onClick={() => scroll(dir)}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "1px solid #e2e8f0",
                    background: "#fff",
                    cursor: "pointer",
                    fontSize: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#f1f5f9")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
                >
                  {icon}
                </button>
              ))}
            </div>

            <div
              ref={scrollRef}
              style={{
                display: "flex",
                gap: 20,
                overflowX: "auto",
                paddingBottom: 8,
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {tours.map((t, i) => (
                <div
                  key={i}
                  style={{
                    minWidth: 220,
                    borderRadius: 16,
                    overflow: "hidden",
                    background: "#fff",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    flexShrink: 0,
                    transition: "transform 0.2s, box-shadow 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                  }}
                >
                  <div style={{ position: "relative", height: 180 }}>
                    <img
                      src={t.image}
                      alt={t.city}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        background: t.badgeColor,
                        color: "#fff",
                        fontSize: 10,
                        fontWeight: 600,
                        padding: "3px 10px",
                        borderRadius: 20,
                      }}
                    >
                      {t.badge}
                    </span>
                  </div>
                  <div style={{ padding: "14px 16px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        marginBottom: 6,
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#0ea5e9">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      <span style={{ fontWeight: 600, fontSize: 13, color: "#0f172a" }}>{t.city}</span>
                    </div>
                    <StarRating rating={t.rating} />
                    <p style={{ fontSize: 11, color: "#94a3b8", marginTop: 4 }}>{t.reviews} Reviews</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplorePlans;
