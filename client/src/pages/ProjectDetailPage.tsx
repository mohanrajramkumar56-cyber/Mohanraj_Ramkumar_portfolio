import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import AnimatedBackground from "../components/AnimatedBackground";
import { projects } from "../data/projectsData";

const TYPE_ICON: Record<string, string> = {
  "AI / LLM": "fas fa-brain",
  "Generative AI": "fas fa-magic",
  "Full Stack AI": "fas fa-layer-group",
};

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div style={{ width: "100vw", height: "100vh", background: "#000", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "20px" }}>
        <NavBar />
        <p style={{ color: "#00FF41", fontFamily: "monospace", fontSize: "20px" }}>// project not found</p>
        <button onClick={() => navigate("/projects")} style={{ padding: "10px 24px", background: "rgba(0,255,65,0.1)", border: "1px solid #00FF41", color: "#00FF41", fontFamily: "monospace", borderRadius: "8px", cursor: "pointer" }}>
          ← Back to Projects
        </button>
      </div>
    );
  }

  const sections = [
    { icon: "fas fa-info-circle", label: "Overview", content: project.overview },
    { icon: "fas fa-exclamation-triangle", label: "Problem", content: project.problem },
    { icon: "fas fa-lightbulb", label: "Solution", content: project.solution },
    { icon: "fas fa-user-cog", label: "My Contribution", content: project.myContribution },
  ];

  return (
    <div style={{ width: "100vw", minHeight: "100vh", position: "relative", background: "#000000" }}>
      {/* Animated Background */}
      <AnimatedBackground />

      <NavBar />

      <div style={{ position: "relative", zIndex: 2, maxWidth: "1000px", margin: "0 auto", padding: "88px 24px 100px" }}>

        {/* Back button */}
        <button
          onClick={() => navigate("/projects")}
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 18px", background: "transparent", border: "1px solid rgba(0,255,65,0.3)", borderRadius: "8px", color: "rgba(0,255,65,0.7)", fontFamily: "monospace", fontSize: "13px", cursor: "pointer", marginBottom: "40px", transition: "all 0.2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#00FF41"; e.currentTarget.style.color = "#00FF41"; e.currentTarget.style.background = "rgba(0,255,65,0.07)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,255,65,0.3)"; e.currentTarget.style.color = "rgba(0,255,65,0.7)"; e.currentTarget.style.background = "transparent"; }}
        >
          <i className="fas fa-arrow-left" style={{ fontSize: "11px" }} /> Back to Projects
        </button>

        {/* Hero header */}
        <div style={{ marginBottom: "56px", paddingBottom: "40px", borderBottom: "1px solid rgba(0,255,65,0.12)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 14px", background: "rgba(0,255,65,0.1)", border: "1px solid rgba(0,255,65,0.25)", borderRadius: "20px", marginBottom: "20px" }}>
            <i className={TYPE_ICON[project.type] ?? "fas fa-code"} style={{ fontSize: "11px", color: "#00FF41" }} />
            <span style={{ fontSize: "11px", color: "#00FF41", fontFamily: "monospace", fontWeight: "600", letterSpacing: "1px" }}>{project.type}</span>
          </div>

          <h1 style={{ fontSize: "clamp(32px,5vw,60px)", fontWeight: "900", color: "#ffffff", letterSpacing: "-1px", lineHeight: 1.1, marginBottom: "14px" }}>
            {project.title}
          </h1>
          <p style={{ fontSize: "clamp(14px,2vw,18px)", color: "rgba(0,255,65,0.75)", fontFamily: "monospace", letterSpacing: "1px" }}>
            {project.tagline}
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: "14px", marginTop: "28px", flexWrap: "wrap" }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "rgba(0,255,65,0.1)", border: "1px solid rgba(0,255,65,0.4)", borderRadius: "8px", color: "#00FF41", textDecoration: "none", fontFamily: "monospace", fontSize: "13px", fontWeight: "600", transition: "all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#00FF41"; e.currentTarget.style.color = "#000"; e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,65,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,255,65,0.1)"; e.currentTarget.style.color = "#00FF41"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <i className="fab fa-github" style={{ fontSize: "15px" }} /> View on GitHub
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "transparent", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "8px", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontFamily: "monospace", fontSize: "13px", fontWeight: "600", transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
              >
                <i className="fas fa-external-link-alt" style={{ fontSize: "13px" }} /> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Text sections: Overview, Problem, Solution, Contribution */}
        <div style={{ display: "grid", gap: "24px", marginBottom: "40px" }}>
          {sections.map((s, i) => (
            <div key={i}
              style={{ padding: "28px 32px", background: "rgba(0,0,0,0.6)", border: "1px solid rgba(0,255,65,0.13)", borderRadius: "14px", animation: `fadeUp 0.5s ease-out ${i * 0.08}s both` }}
            >
              <h2 style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: "700", color: "#00FF41", fontFamily: "monospace", marginBottom: "14px", letterSpacing: "0.5px" }}>
                <i className={s.icon} /> {s.label}
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.82)", lineHeight: "1.85" }}>{s.content}</p>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div style={{ padding: "28px 32px", background: "rgba(0,0,0,0.6)", border: "1px solid rgba(0,255,65,0.13)", borderRadius: "14px", marginBottom: "24px" }}>
          <h2 style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: "700", color: "#00FF41", fontFamily: "monospace", marginBottom: "18px" }}>
            <i className="fas fa-list-check" /> Key Features
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: "12px" }}>
            {project.features.map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ color: "#00FF41", fontSize: "10px", marginTop: "5px", flexShrink: 0 }}>▶</span>
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", lineHeight: "1.6" }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <div style={{ padding: "28px 32px", background: "rgba(0,0,0,0.6)", border: "1px solid rgba(0,255,65,0.13)", borderRadius: "14px", marginBottom: "24px" }}>
          <h2 style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: "700", color: "#00FF41", fontFamily: "monospace", marginBottom: "14px" }}>
            <i className="fas fa-diagram-project" /> Architecture
          </h2>
          <div style={{ padding: "16px 20px", background: "rgba(0,255,65,0.04)", border: "1px solid rgba(0,255,65,0.18)", borderRadius: "8px", fontFamily: "monospace", fontSize: "13px", color: "rgba(0,255,65,0.9)", lineHeight: "1.8", letterSpacing: "0.3px" }}>
            {project.architecture}
          </div>
        </div>

        {/* Two-col: Tech Stack + Results */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: "24px", marginBottom: "24px" }}>

          {/* Tech Stack */}
          <div style={{ padding: "28px 32px", background: "rgba(0,0,0,0.6)", border: "1px solid rgba(0,255,65,0.13)", borderRadius: "14px" }}>
            <h2 style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: "700", color: "#00FF41", fontFamily: "monospace", marginBottom: "18px" }}>
              <i className="fas fa-microchip" /> Tech Stack
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {project.techStack.map((t) => (
                <span key={t} style={{ padding: "6px 14px", background: "rgba(0,255,65,0.08)", border: "1px solid rgba(0,255,65,0.22)", color: "rgba(0,255,65,0.9)", fontSize: "12px", fontFamily: "monospace", borderRadius: "6px", fontWeight: "600" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div style={{ padding: "28px 32px", background: "rgba(0,0,0,0.6)", border: "1px solid rgba(0,255,65,0.13)", borderRadius: "14px" }}>
            <h2 style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: "700", color: "#00FF41", fontFamily: "monospace", marginBottom: "18px" }}>
              <i className="fas fa-chart-line" /> Results
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {project.results.map((r, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "12px 16px", background: "rgba(0,255,65,0.05)", borderRadius: "8px", border: "1px solid rgba(0,255,65,0.1)" }}>
                  <i className="fas fa-check-circle" style={{ color: "#00FF41", fontSize: "14px", marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.82)", lineHeight: "1.6" }}>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
