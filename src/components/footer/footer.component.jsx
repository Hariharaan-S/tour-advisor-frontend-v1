import React from "react";
import Logo from "../../assets/img/logo.png";

const footerLinks = {
  "Menu": ["Home", "About Us", "Services", "Contact Us"],
  "More": ["Blog", "FAQ"],
  "Quick Links": ["Privacy Policy", "Terms of Use", "Sitemap", "Support"],
  "Contact Us": ["contact@touradvisor.com", "9876543210", "Chennai, Tamil Nadu"],
};

const socialIcons = [
  {
    label: "Facebook",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path
          d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.41 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer
      style={{
        background: "#0f172a",
        color: "#94a3b8",
        fontFamily: "'Poppins', sans-serif",
        padding: "60px 80px 32px",
      }}
    >
      <div style={{ margin: "0 auto" }}>
        {/* Top: Logo + links */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "400px repeat(6, 1fr)",
            gap: 32,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={Logo} alt="Logo" style={{ width: 30, height: 30, borderRadius: "50%" }} />
              </div>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#fff",
                  letterSpacing: "-0.5px",
                }}
              >
                Tour Advisor
              </span>
            </div>
            <p style={{ fontSize: 12, lineHeight: 1.8, marginBottom: 20 }}>
              Creating unforgettable experiences <br/> across India and beyond.
            </p>

            {/* CTA button */}
            <button
              style={{
                background: "#0ea5e9",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "10px 20px",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: 12,
                cursor: "pointer",
                marginBottom: 20,
              }}
            >
              Start Your Tour
            </button>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 10 }}>
              {socialIcons.map((s, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={s.label}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: i === 0 ? "#1877f2" : i === 1 ? "#1da1f2" : i === 2 ? "#e1306c" : "#ff0000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 16,
                }}
              >
                {heading}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {links.map((link, i) => (
                  <li key={i} style={{ marginBottom: 8 }}>
                    <a
                      href="#"
                      style={{
                        fontSize: 12,
                        color: "#64748b",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#0ea5e9")}
                      onMouseLeave={(e) => (e.target.style.color = "#64748b")}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "#1e293b",
            marginBottom: 24,
          }}
        />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 12,
          }}
        >
          <span>© {new Date().getFullYear()} Chennai. All rights reserved.</span>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, i) => (
              <a
                key={i}
                href="#"
                style={{ color: "#64748b", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.target.style.color = "#0ea5e9")}
                onMouseLeave={(e) => (e.target.style.color = "#64748b")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
