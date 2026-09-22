import { useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import AnimatedBackground from "../components/AnimatedBackground";

export default function AboutPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        position: "relative",
        background: "#000000",
      }}
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* ── Nav ── */}
      <NavBar />

      {/* ── Content ── */}
      <div
        ref={contentRef}
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          paddingTop: "64px",
        }}
      >
        <div
          style={{
            maxWidth: "1040px",
            margin: "0 auto",
            padding: "56px 24px 80px",
          }}
        >
          {/* Page header */}
          <div style={{ marginBottom: "52px" }}>
            <div
              style={{
                fontFamily: "monospace",
                color: "rgba(0,255,65,0.55)",
                fontSize: "12px",
                marginBottom: "8px",
                letterSpacing: "2px",
              }}
            >
              // about.tsx
            </div>
            <h1
              style={{
                fontSize: "clamp(36px,6vw,64px)",
                fontWeight: "900",
                color: "#ffffff",
                letterSpacing: "-1px",
                lineHeight: 1,
              }}
            >
              About{" "}
              <span
                style={{
                  color: "#00FF41",
                  textShadow: "0 0 30px rgba(0,255,65,0.4)",
                }}
              >
                Me
              </span>
            </h1>
          </div>

          {/* Two-column layout: card left, bio right */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "200px 1fr",
              gap: "40px",
              marginBottom: "52px",
            }}
          >
            {/* ── Identity card ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Avatar */}
              <div
                style={{
                  width: "160px",
                  height: "160px",
                  background: "linear-gradient(135deg, #001200, #002800)",
                  borderRadius: "16px",
                  border: "2px solid rgba(0,255,65,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 40px rgba(0,255,65,0.12)",
                }}
              >
                <i
                  className="fas fa-user-astronaut"
                  style={{ fontSize: "72px", color: "#00FF41" }}
                />
              </div>

              {/* Info block */}
              <div
                style={{
                  padding: "20px",
                  background: "rgba(0,0,0,0.55)",
                  border: "1px solid rgba(0,255,65,0.14)",
                  borderRadius: "12px",
                  fontFamily: "monospace",
                }}
              >
                {[
                  { label: "Name", value: "Mohanraj Ramkumar" },
                  { label: "Role", value: "AI/ML Engineer" },
                  { label: "Location", value: "India" },
                ].map((row) => (
                  <div key={row.label} style={{ marginBottom: "14px" }}>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "rgba(0,255,65,0.5)",
                        marginBottom: "2px",
                        letterSpacing: "1px",
                      }}
                    >
                      {row.label}
                    </div>
                    <div
                      style={{ fontSize: "13px", color: "#ffffff", fontWeight: "600" }}
                    >
                      {row.value}
                    </div>
                  </div>
                ))}
                {/* Status row */}
                <div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "rgba(0,255,65,0.5)",
                      marginBottom: "4px",
                      letterSpacing: "1px",
                    }}
                  >
                    Status
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#00FF41",
                        boxShadow: "0 0 8px #00FF41",
                        animation: "pulse 2s infinite",
                      }}
                    />
                    <span
                      style={{ fontSize: "13px", color: "#00FF41", fontWeight: "600" }}
                    >
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Bio ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* whoami block */}
              <div
                style={{
                  padding: "28px 32px",
                  background: "rgba(0,0,0,0.6)",
                  border: "1px solid rgba(0,255,65,0.14)",
                  borderRadius: "16px",
                }}
              >
                <h2
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#00FF41",
                    marginBottom: "18px",
                    fontFamily: "monospace",
                    letterSpacing: "1px",
                  }}
                >
                  $ whoami
                </h2>
                <p
                  style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.9)",
                    lineHeight: "1.9",
                    marginBottom: "16px",
                  }}
                >
                  I'm an{" "}
                  <strong style={{ color: "#00FF41" }}>
                    AI/ML &amp; Generative AI Engineer
                  </strong>{" "}
                  driven by curiosity, experimentation, and the desire to build things
                  that matter.
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.82)",
                    lineHeight: "1.9",
                    marginBottom: "16px",
                  }}
                >
                  I like taking an idea that starts as a question —{" "}
                  <em style={{ color: "rgba(0,255,65,0.8)" }}>"Can this be done?"</em>{" "}
                  — and turning it into something real, usable, and intelligent. I enjoy
                  exploring AI beyond just models and algorithms, bringing together data,
                  software, automation, and modern AI to solve problems in meaningful ways.
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.82)",
                    lineHeight: "1.9",
                  }}
                >
                  I'm not someone who wants to stop at knowing how a technology works. I
                  want to understand it, experiment with it, break it, improve it, and
                  eventually build something with it.
                </p>
              </div>

              {/* Quote */}
              <div
                style={{
                  padding: "20px 28px",
                  background: "rgba(0,255,65,0.05)",
                  border: "1px solid rgba(0,255,65,0.22)",
                  borderLeft: "4px solid #00FF41",
                  borderRadius: "0 12px 12px 0",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontStyle: "italic",
                    color: "#00FF41",
                    fontWeight: "600",
                    fontFamily: "monospace",
                    lineHeight: "1.7",
                  }}
                >
                  "Don't just follow what technology can do.
                  <br />
                  Explore what you can build with it."
                </p>
              </div>
            </div>
          </div>

          {/* ── Quick Facts ── */}
          <div style={{ marginBottom: "52px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#ffffff",
                marginBottom: "24px",
                fontFamily: "monospace",
              }}
            >
              <span style={{ color: "#00FF41" }}>&gt;</span> Quick Facts
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                {
                  icon: "fas fa-map-marker-alt",
                  title: "Location",
                  desc: "Based in India",
                  color: "#00FF41",
                },
                {
                  icon: "fas fa-brain",
                  title: "Focus Areas",
                  desc: "AI/ML, Generative AI, LLMs, Automation",
                  color: "#00CC33",
                },
                {
                  icon: "fas fa-rocket",
                  title: "Approach",
                  desc: "Experiment, Break, Build, Ship",
                  color: "#00FF41",
                },
              ].map((fact) => (
                <div
                  key={fact.title}
                  style={{
                    padding: "22px 24px",
                    background: "rgba(0,0,0,0.5)",
                    border: "1px solid rgba(0,255,65,0.14)",
                    borderRadius: "12px",
                    display: "flex",
                    gap: "16px",
                    transition: "all 0.25s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#00FF41";
                    e.currentTarget.style.background = "rgba(0,255,65,0.06)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,255,65,0.14)";
                    e.currentTarget.style.background = "rgba(0,0,0,0.5)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <i
                    className={fact.icon}
                    style={{ fontSize: "26px", color: fact.color, marginTop: "2px" }}
                  />
                  <div>
                    <h3
                      style={{
                        fontSize: "15px",
                        color: "#ffffff",
                        fontWeight: "700",
                        marginBottom: "5px",
                        fontFamily: "monospace",
                      }}
                    >
                      {fact.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.7)",
                        lineHeight: "1.6",
                      }}
                    >
                      {fact.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── What I Value ── */}
          <div>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#ffffff",
                marginBottom: "24px",
                fontFamily: "monospace",
              }}
            >
              <span style={{ color: "#00FF41" }}>&gt;</span> What I Value
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                {
                  icon: "fas fa-search",
                  title: "Curiosity",
                  desc: 'Always asking "what if?" and exploring new possibilities',
                  color: "#00FF41",
                },
                {
                  icon: "fas fa-flask",
                  title: "Experimentation",
                  desc: "Learning by doing, breaking, and rebuilding better",
                  color: "#00CC33",
                },
                {
                  icon: "fas fa-bolt",
                  title: "Impact",
                  desc: "Building solutions that solve real problems",
                  color: "#00FF41",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  style={{
                    padding: "28px 24px",
                    background: "rgba(0,0,0,0.5)",
                    border: "1px solid rgba(0,255,65,0.14)",
                    borderRadius: "14px",
                    textAlign: "center",
                    transition: "all 0.25s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#00FF41";
                    e.currentTarget.style.background = "rgba(0,255,65,0.07)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 32px rgba(0,255,65,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,255,65,0.14)";
                    e.currentTarget.style.background = "rgba(0,0,0,0.5)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <i
                    className={v.icon}
                    style={{
                      fontSize: "36px",
                      color: v.color,
                      marginBottom: "14px",
                      display: "block",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#ffffff",
                      marginBottom: "8px",
                      fontFamily: "monospace",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: "1.65",
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.35); }
        }
        @media (max-width: 720px) {
          div[style*="grid-template-columns: 200px"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
