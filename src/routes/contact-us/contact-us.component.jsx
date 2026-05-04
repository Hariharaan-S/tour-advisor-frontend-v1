import React, { useState } from "react";
import Footer from "../../components/footer/footer.component";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
        <section style={{ marginBottom: 40, display: "grid", gap: 20 }}>
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
              Contact
            </p>
            <h1 style={{ margin: 0, fontSize: "3rem", lineHeight: 1.05 }}>
              Ready to start your next journey? Let’s talk.
            </h1>
            <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.9, color: "#475569", maxWidth: 680 }}>
              Whether you’d like to request a custom itinerary, learn more about data security, or share feedback, our team is here to help.
            </p>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gap: 28,
            gridTemplateColumns: "1.05fr 0.95fr",
            alignItems: "start",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 28,
              padding: 32,
              boxShadow: "0 24px 80px rgba(15,23,42,0.06)",
              display: "grid",
              gap: 24,
            }}
          >
            <div>
              <h2 style={{ marginTop: 0, fontSize: 24, marginBottom: 16 }}>Contact details</h2>
              <p style={{ margin: 0, color: "#475569", lineHeight: 1.85 }}>
                Reach out with any enquiry and we’ll respond within one business day.
              </p>
            </div>

            <div style={{ display: "grid", gap: 16 }}>
              <div style={{ display: "grid", gap: 6 }}>
                <span style={{ fontWeight: 700, color: "#0f172a" }}>Email</span>
                <a href="mailto:contact@touradvisor.com" style={{ color: "#0ea5e9", textDecoration: "none" }}>
                  contact@touradvisor.com
                </a>
              </div>
              <div style={{ display: "grid", gap: 6 }}>
                <span style={{ fontWeight: 700, color: "#0f172a" }}>Phone</span>
                <a href="tel:+919876543210" style={{ color: "#0ea5e9", textDecoration: "none" }}>
                  +91 98765 43210
                </a>
              </div>
              <div style={{ display: "grid", gap: 6 }}>
                <span style={{ fontWeight: 700, color: "#0f172a" }}>Address</span>
                <span style={{ color: "#64748b", lineHeight: 1.75 }}>
                  Chennai, Tamil Nadu, India
                </span>
              </div>
            </div>

            <div style={{ display: "grid", gap: 12 }}>
              <span style={{ fontWeight: 700, color: "#0f172a" }}>Follow us</span>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {[
                  { text: "Facebook", href: "#" },
                  { text: "Instagram", href: "#" },
                  { text: "Twitter", href: "#" },
                  { text: "LinkedIn", href: "#" },
                ].map((item) => (
                  <a
                    key={item.text}
                    href={item.href}
                    style={{
                      background: "#f1f5f9",
                      color: "#0f172a",
                      borderRadius: 16,
                      padding: "10px 16px",
                      textDecoration: "none",
                      fontSize: 14,
                    }}
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: 28,
              padding: 32,
              boxShadow: "0 24px 80px rgba(15,23,42,0.06)",
            }}
          >
            <div style={{ display: "grid", gap: 24 }}>
              <div>
                <h2 style={{ marginTop: 0, fontSize: 24, marginBottom: 10 }}>Send an enquiry</h2>
                <p style={{ margin: 0, color: "#64748b", lineHeight: 1.85 }}>
                  Share your travel details and one of our planners will help you turn them into a complete itinerary.
                </p>
              </div>

              {submitted && (
                <div
                  style={{
                    background: "#d1fae5",
                    border: "1px solid #10b981",
                    color: "#064e3b",
                    borderRadius: 18,
                    padding: "18px 22px",
                  }}
                >
                  Thanks for your message. We’ll reply shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: "grid", gap: 18 }}>
                <div style={{ display: "grid", gap: 12 }}>
                  <label style={{ fontWeight: 600, color: "#0f172a" }}>Your Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    style={{
                      width: "100%",
                      borderRadius: 18,
                      border: "1px solid #cbd5e1",
                      padding: "14px 16px",
                      fontSize: 14,
                      color: "#0f172a",
                      outline: "none",
                    }}
                  />
                </div>

                <div style={{ display: "grid", gap: 12 }}>
                  <label style={{ fontWeight: 600, color: "#0f172a" }}>Email address</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    style={{
                      width: "100%",
                      borderRadius: 18,
                      border: "1px solid #cbd5e1",
                      padding: "14px 16px",
                      fontSize: 14,
                      color: "#0f172a",
                      outline: "none",
                    }}
                  />
                </div>

                <div style={{ display: "grid", gap: 12 }}>
                  <label style={{ fontWeight: 600, color: "#0f172a" }}>Subject</label>
                  <input
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Type your enquiry subject"
                    style={{
                      width: "100%",
                      borderRadius: 18,
                      border: "1px solid #cbd5e1",
                      padding: "14px 16px",
                      fontSize: 14,
                      color: "#0f172a",
                      outline: "none",
                    }}
                  />
                </div>

                <div style={{ display: "grid", gap: 12 }}>
                  <label style={{ fontWeight: 600, color: "#0f172a" }}>Message</label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your travel requirements or questions here"
                    style={{
                      width: "100%",
                      borderRadius: 18,
                      border: "1px solid #cbd5e1",
                      padding: "16px",
                      fontSize: 14,
                      color: "#0f172a",
                      resize: "vertical",
                      outline: "none",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    borderRadius: 18,
                    border: "none",
                    background: "#ea580c",
                    color: "#fff",
                    padding: "16px 22px",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontSize: 15,
                  }}
                >
                  Send enquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
