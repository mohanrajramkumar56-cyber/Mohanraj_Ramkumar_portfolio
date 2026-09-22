import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../components/NavBar";
import AnimatedBackground from "../components/AnimatedBackground";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        "service_ccjscne",
        "template_jrhs48n",
        formRef.current,
        "C-D7sJXHevyiK-rRc"
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const keyMap: Record<string, string> = { from_name: "name", from_email: "email" };
    const key = keyMap[e.target.name] || e.target.name;
    setFormData({ ...formData, [key]: e.target.value });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: "rgba(0,0,0,0.5)",
    border: "1px solid rgba(0,255,65,0.2)",
    borderRadius: "8px",
    fontSize: "14px",
    color: "#ffffff",
    outline: "none",
    fontFamily: "monospace",
    transition: "all 0.2s",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "12px",
    fontWeight: "600",
    color: "rgba(0,255,65,0.8)",
    marginBottom: "8px",
    fontFamily: "monospace",
    letterSpacing: "1px",
  };

  return (
    <div style={{ width: "100vw", minHeight: "100vh", position: "relative", background: "#000000" }}>
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Nav */}
      <NavBar />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, width: "100%", paddingTop: "64px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "56px 24px 80px" }}>

          {/* Page header */}
          <div style={{ marginBottom: "48px" }}>
            <div style={{ fontFamily: "monospace", color: "rgba(0,255,65,0.55)", fontSize: "12px", marginBottom: "8px", letterSpacing: "2px" }}>
              // contact.tsx
            </div>
            <h1 style={{ fontSize: "clamp(36px,6vw,64px)", fontWeight: "900", color: "#ffffff", letterSpacing: "-1px", lineHeight: 1 }}>
              Get In <span style={{ color: "#00FF41", textShadow: "0 0 30px rgba(0,255,65,0.4)" }}>Touch</span>
            </h1>
            <p style={{ marginTop: "14px", fontSize: "14px", color: "rgba(255,255,255,0.5)", fontFamily: "monospace" }}>
              Have a question or want to work together? Drop me a message.
            </p>
          </div>

          {/* Contact info row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px", marginBottom: "40px" }}>
            {[
              { icon: "fas fa-envelope", label: "Email", value: "mohanrajramkumar56@gmail.com", href: "mailto:mohanrajramkumar56@gmail.com" },
              { icon: "fas fa-phone", label: "Phone", value: "+91 93842 41330", href: "tel:+919384241330" },
              { icon: "fab fa-linkedin", label: "LinkedIn", value: "Connect", href: "https://linkedin.com/in/mohanraj-ramkumar" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{ padding: "16px", background: "rgba(0,0,0,0.6)", border: "1px solid rgba(0,255,65,0.14)", borderRadius: "10px", textDecoration: "none", textAlign: "center", transition: "all 0.2s", display: "block" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#00FF41"; e.currentTarget.style.background = "rgba(0,255,65,0.07)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,255,65,0.14)"; e.currentTarget.style.background = "rgba(0,0,0,0.6)"; }}
              >
                <i className={item.icon} style={{ fontSize: "20px", color: "#00FF41", marginBottom: "8px", display: "block" }} />
                <div style={{ fontSize: "11px", color: "rgba(0,255,65,0.6)", fontFamily: "monospace", marginBottom: "4px" }}>{item.label}</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)", fontFamily: "monospace", wordBreak: "break-all" }}>{item.value}</div>
              </a>
            ))}
          </div>

          {/* Form card */}
          <div style={{ background: "rgba(0,0,0,0.7)", border: "1px solid rgba(0,255,65,0.18)", borderRadius: "16px", overflow: "hidden" }}>
            <div style={{ height: "3px", background: "linear-gradient(90deg, #00FF41, #00CC33, transparent)" }} />

            <div style={{ padding: "36px 40px" }}>
              <form ref={formRef} onSubmit={handleSubmit}>

                {/* Name + Email row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
                  <div>
                    <label style={labelStyle}>
                      <i className="fas fa-user" style={{ marginRight: "6px" }} />NAME
                    </label>
                    <input
                      type="text" name="from_name" value={formData.name} onChange={handleChange}
                      required placeholder="Your name" style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#00FF41"; e.currentTarget.style.boxShadow = "0 0 12px rgba(0,255,65,0.15)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,255,65,0.2)"; e.currentTarget.style.boxShadow = "none"; }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>
                      <i className="fas fa-envelope" style={{ marginRight: "6px" }} />EMAIL
                    </label>
                    <input
                      type="email" name="from_email" value={formData.email} onChange={handleChange}
                      required placeholder="your@email.com" style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#00FF41"; e.currentTarget.style.boxShadow = "0 0 12px rgba(0,255,65,0.15)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,255,65,0.2)"; e.currentTarget.style.boxShadow = "none"; }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div style={{ marginBottom: "20px" }}>
                  <label style={labelStyle}>
                    <i className="fas fa-tag" style={{ marginRight: "6px" }} />SUBJECT
                  </label>
                  <input
                    type="text" name="subject" value={formData.subject} onChange={handleChange}
                    required placeholder="Project Inquiry" style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#00FF41"; e.currentTarget.style.boxShadow = "0 0 12px rgba(0,255,65,0.15)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,255,65,0.2)"; e.currentTarget.style.boxShadow = "none"; }}
                  />
                </div>

                {/* Message */}
                <div style={{ marginBottom: "28px" }}>
                  <label style={labelStyle}>
                    <i className="fas fa-comment-dots" style={{ marginRight: "6px" }} />MESSAGE
                  </label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange}
                    required rows={6} placeholder="Your message..."
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "monospace" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#00FF41"; e.currentTarget.style.boxShadow = "0 0 12px rgba(0,255,65,0.15)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,255,65,0.2)"; e.currentTarget.style.boxShadow = "none"; }}
                  />
                </div>

                {/* Status */}
                {status === "success" && (
                  <div style={{ padding: "12px 18px", background: "rgba(0,255,65,0.1)", border: "1px solid rgba(0,255,65,0.4)", borderRadius: "8px", marginBottom: "20px", fontSize: "13px", color: "#00FF41", fontFamily: "monospace", display: "flex", alignItems: "center", gap: "10px" }}>
                    <i className="fas fa-check-circle" />
                    Message sent! I'll get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div style={{ padding: "12px 18px", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.4)", borderRadius: "8px", marginBottom: "20px", fontSize: "13px", color: "#EF4444", fontFamily: "monospace", display: "flex", alignItems: "center", gap: "10px" }}>
                    <i className="fas fa-exclamation-circle" />
                    Failed to send. Please email me directly.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    width: "100%", padding: "14px",
                    background: status === "sending" ? "rgba(0,255,65,0.3)" : "#00FF41",
                    color: "#000000", border: "none", borderRadius: "8px",
                    fontSize: "14px", fontWeight: "700", cursor: status === "sending" ? "not-allowed" : "pointer",
                    fontFamily: "monospace", letterSpacing: "1px", transition: "all 0.2s",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                    boxShadow: "0 0 24px rgba(0,255,65,0.25)",
                  }}
                  onMouseEnter={(e) => { if (status !== "sending") { e.currentTarget.style.background = "#00CC33"; e.currentTarget.style.boxShadow = "0 0 36px rgba(0,255,65,0.4)"; e.currentTarget.style.transform = "translateY(-2px)"; } }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = status === "sending" ? "rgba(0,255,65,0.3)" : "#00FF41"; e.currentTarget.style.boxShadow = "0 0 24px rgba(0,255,65,0.25)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  {status === "sending" ? (
                    <><i className="fas fa-spinner fa-spin" /> Sending...</>
                  ) : (
                    <><i className="fas fa-paper-plane" /> Send Message</>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          div[style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; }
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
