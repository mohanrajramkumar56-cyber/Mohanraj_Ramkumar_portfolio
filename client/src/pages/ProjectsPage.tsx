import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import AnimatedBackground from "../components/AnimatedBackground";
import { projects } from "../data/projectsData";

const TYPE_ICON: Record<string, string> = {
  "AI / LLM": "fas fa-brain",
  "Generative AI": "fas fa-magic",
  "Full Stack AI": "fas fa-layer-group",
};

export default function ProjectsPage() {
  const navigate = useNavigate();
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
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          paddingTop: "64px",
        }}
      >
        <div
          style={{
            maxWidth: "1080px",
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
              // projects.tsx
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
              My{" "}
              <span
                style={{
                  color: "#00FF41",
                  textShadow: "0 0 30px rgba(0,255,65,0.4)",
                }}
              >
                Projects
              </span>
            </h1>
            <p
              style={{
                marginTop: "14px",
                fontFamily: "monospace",
                fontSize: "14px",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              {projects.length} projects &nbsp;·&nbsp; AI/ML &amp; Generative AI
            </p>
          </div>

          {/* Project cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "28px",
            }}
          >
            {projects.map((project, idx) => (
              <div
                key={project.id}
                style={{
                  background: "rgba(0,0,0,0.65)",
                  border: "1px solid rgba(0,255,65,0.14)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "all 0.28s",
                  display: "flex",
                  flexDirection: "column",
                  animation: `fadeUp 0.5s ease-out ${idx * 0.1}s both`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#00FF41";
                  e.currentTarget.style.background = "rgba(0,0,0,0.75)";
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 48px rgba(0,255,65,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,255,65,0.14)";
                  e.currentTarget.style.background = "rgba(0,0,0,0.65)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Card top accent bar */}
                <div
                  style={{
                    height: "3px",
                    background:
                      "linear-gradient(90deg, #00FF41, #00CC33, transparent)",
                  }}
                />

                <div style={{ padding: "28px 28px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  {/* Type badge */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "4px 12px",
                      background: "rgba(0,255,65,0.1)",
                      border: "1px solid rgba(0,255,65,0.25)",
                      borderRadius: "20px",
                      marginBottom: "16px",
                      alignSelf: "flex-start",
                    }}
                  >
                    <i
                      className={TYPE_ICON[project.type] ?? "fas fa-code"}
                      style={{ fontSize: "11px", color: "#00FF41" }}
                    />
                    <span
                      style={{
                        fontSize: "11px",
                        color: "#00FF41",
                        fontFamily: "monospace",
                        fontWeight: "600",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {project.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#ffffff",
                      marginBottom: "12px",
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.72)",
                      lineHeight: "1.7",
                      marginBottom: "20px",
                      flex: 1,
                    }}
                  >
                    {project.overview}
                  </p>

                  {/* Tech tags */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "22px",
                    }}
                  >
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: "4px 10px",
                          background: "rgba(0,255,65,0.08)",
                          border: "1px solid rgba(0,255,65,0.2)",
                          color: "rgba(0,255,65,0.85)",
                          fontSize: "11px",
                          fontFamily: "monospace",
                          borderRadius: "4px",
                          fontWeight: "600",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub link */}
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <button
                      onClick={() => navigate(`/projects/${project.id}`)}
                      style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 20px", background: "#00FF41", border: "none", borderRadius: "8px", color: "#000000", fontSize: "13px", fontFamily: "monospace", fontWeight: "700", cursor: "pointer", transition: "all 0.2s" }}
                      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,65,0.5)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
                    >
                      <i className="fas fa-eye" style={{ fontSize: "12px" }} /> View Details
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 20px", background: "rgba(0,255,65,0.1)", border: "1px solid rgba(0,255,65,0.35)", borderRadius: "8px", color: "#00FF41", textDecoration: "none", fontSize: "13px", fontFamily: "monospace", fontWeight: "600", transition: "all 0.2s" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,255,65,0.2)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,255,65,0.1)"; }}
                    >
                      <i className="fab fa-github" style={{ fontSize: "14px" }} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
