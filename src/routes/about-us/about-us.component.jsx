import React from "react";
import Footer from "../../components/footer/footer.component";

const featureItems = [
  {
    title: "Personalized recommendations",
    description:
      "Every itinerary is built around your interests, time, and travel style for a more meaningful experience.",
  },
  {
    title: "Minimal planning friction",
    description:
      "A clean, modern interface helps you move from idea to itinerary without distraction.",
  },
  {
    title: "Local insight, global comfort",
    description:
      "We combine destination expertise with smart logistics to keep your trip smooth and enjoyable.",
  },
  {
    title: "Secure and transparent",
    description:
      "We explain exactly how your travel data is used and keep it protected at every step.",
  },
];

const processSteps = [
  {
    title: "Collect only what matters",
    text: "We ask for a few travel details like destination, dates, and preferences so we can generate a plan that fits you.",
  },
  {
    title: "Create the plan securely",
    text: "Your input is processed in a secure environment and used only to craft route suggestions, places, and timings.",
  },
  {
    title: "Protect and respect your data",
    text: "We never sell your information. Sensitive details are stored only with consent and handled with encryption.",
  },
];

const AboutUs = () => {
  return (
    <div
      style={{
        background: "#f8fafc",
        color: "#0f172a",
        minHeight: "100vh",
        paddingTop: 90,
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <main style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 24px 40px" }}>
        <section
          style={{
            display: "grid",
            gap: 32,
            gridTemplateColumns: "1.1fr 0.9fr",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                fontSize: 12,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#ea580c",
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              About Tour Advisor
            </p>
            <h1
              style={{
                margin: 0,
                fontSize: "3rem",
                lineHeight: 1.05,
                maxWidth: 620,
              }}
            >
              Modern travel planning built around clarity, security, and smart recommendations.
            </h1>
            <p
              style={{
                marginTop: 24,
                fontSize: 16,
                lineHeight: 1.9,
                color: "#475569",
                maxWidth: 620,
              }}
            >
              We make travel planning simple by turning your preferences into a polished itinerary. Our platform blends automatic itinerary creation with a calm, minimalist user experience so you can focus on the trip, not the details.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: 28,
              boxShadow: "0 24px 80px rgba(15,23,42,0.08)",
              padding: 36,
              display: "grid",
              gap: 20,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 48,
                height: 48,
                borderRadius: 16,
                background: "#eef2ff",
                color: "#3730a3",
                fontWeight: 700,
              }}
            >
              1
            </span>
            <h2 style={{ margin: 0, fontSize: 22, lineHeight: 1.3 }}>
              Designed for travelers who want fast, meaningful plans.
            </h2>
            <p style={{ margin: 0, color: "#64748b", lineHeight: 1.85 }}>
              A clean layout, thoughtful structure, and clear prompts help you explore options without overload. The result is a travel plan you can trust and share.
            </p>
          </div>
        </section>

        <section style={{ marginTop: 64, display: "grid", gap: 24 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 20,
            }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: 24,
                border: "1px solid #e2e8f0",
                padding: 32,
                minHeight: 240,
              }}
            >
              <h3 style={{ marginTop: 0, fontSize: 20, marginBottom: 16 }}>
                Our Vision
              </h3>
              <p style={{ margin: 0, color: "#475569", lineHeight: 1.75 }}>
                To make travel planning effortless and reliable by delivering curated itineraries that feel personal, intuitive, and safe for every adventure.
              </p>
            </div>
            <div
              style={{
                background: "#fff",
                borderRadius: 24,
                border: "1px solid #e2e8f0",
                padding: 32,
                minHeight: 240,
              }}
            >
              <h3 style={{ marginTop: 0, fontSize: 20, marginBottom: 16 }}>
                Our Mission
              </h3>
              <p style={{ margin: 0, color: "#475569", lineHeight: 1.75 }}>
                To help travelers discover better journeys by turning preferences into reliable plans, reducing research time, and preserving traveler privacy.
              </p>
            </div>
          </div>

          <div>
            <h2 style={{ marginBottom: 24, fontSize: 26 }}>Features</h2>
            <div
              style={{
                display: "grid",
                gap: 20,
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              }}
            >
              {featureItems.map((item, index) => (
                <div
                  key={item.title}
                  style={{
                    background: "#fff",
                    borderRadius: 24,
                    padding: 28,
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 14,
                      background: index % 2 === 0 ? "#f8fafc" : "#fff7ed",
                      display: "grid",
                      placeItems: "center",
                      color: index % 2 === 0 ? "#0f172a" : "#c2410c",
                      fontWeight: 700,
                    }}
                  >
                    {index + 1}
                  </div>
                  <h4 style={{ margin: 0, fontSize: 18 }}>{item.title}</h4>
                  <p style={{ margin: 0, color: "#64748b", lineHeight: 1.8 }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.25fr 0.75fr",
              gap: 24,
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: 28,
                padding: 36,
                boxShadow: "0 24px 80px rgba(15,23,42,0.06)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  fontSize: 12,
                  color: "#334155",
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                How data is processed
              </p>
              <h2 style={{ marginTop: 0, fontSize: 26, lineHeight: 1.2, marginBottom: 20 }}>
                Data transparency with modern protection.
              </h2>
              <p style={{ color: "#475569", lineHeight: 1.8, marginBottom: 32 }}>
                We explain every step of how your travel preferences are used. Security is built into our process, and your private details stay protected.
              </p>
              <div style={{ display: "grid", gap: 16 }}>
                {processSteps.map((step) => (
                  <div key={step.title} style={{ display: "grid", gap: 10 }}>
                    <strong style={{ fontSize: 16 }}>{step.title}</strong>
                    <p style={{ margin: 0, color: "#64748b", lineHeight: 1.75 }}>{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
                borderRadius: 28,
                padding: 32,
                border: "1px solid #e2e8f0",
              }}
            >
              <h3 style={{ marginTop: 0, fontSize: 20, marginBottom: 16 }}>Security in every layer</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 18 }}>
                <li style={{ display: "grid", gap: 8 }}>
                  <strong>Encryption first</strong>
                  <span style={{ color: "#64748b", lineHeight: 1.75 }}>
                    Data is encrypted while in transit and while stored with your permission.
                  </span>
                </li>
                <li style={{ display: "grid", gap: 8 }}>
                  <strong>Minimal retention</strong>
                  <span style={{ color: "#64748b", lineHeight: 1.75 }}>
                    We keep only what is needed to deliver your plan and remove temporary data promptly.
                  </span>
                </li>
                <li style={{ display: "grid", gap: 8 }}>
                  <strong>Privacy-first policy</strong>
                  <span style={{ color: "#64748b", lineHeight: 1.75 }}>
                    Your details are never sold, shared, or used for ads without your explicit consent.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
