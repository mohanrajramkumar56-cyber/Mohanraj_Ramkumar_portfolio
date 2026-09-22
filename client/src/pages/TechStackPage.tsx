import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import AnimatedBackground from "../components/AnimatedBackground";

const techCategories = [
  {
    title: "Programming",
    color: "#00FF41",
    items: [
      { name: "Python", icon: "fab fa-python", color: "#3776AB" },
      { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
      { name: "HTML", icon: "fab fa-html5", color: "#E34F26" },
      { name: "CSS", icon: "fab fa-css3-alt", color: "#1572B6" },
    ],
  },
  {
    title: "Backend / APIs",
    color: "#00CC33",
    items: [
      { name: "FastAPI", icon: "fas fa-bolt", color: "#009688" },
      { name: "Flask", icon: "fas fa-flask", color: "#aaaaaa" },
      { name: "Django", icon: "fas fa-server", color: "#44B78B" },
      { name: "REST APIs", icon: "fas fa-plug", color: "#FF6B35" },
      { name: "Microservices", icon: "fas fa-cubes", color: "#4A90E2" },
      { name: "Postman", icon: "fas fa-paper-plane", color: "#FF6C37" },
      { name: "Swagger", icon: "fas fa-file-code", color: "#85EA2D" },
    ],
  },
  {
    title: "Generative AI / LLM",
    color: "#00FF41",
    items: [
      { name: "Generative AI", icon: "fas fa-magic", color: "#8B5CF6" },
      { name: "LLMs", icon: "fas fa-brain", color: "#A78BFA" },
      { name: "RAG", icon: "fas fa-search", color: "#60A5FA" },
      { name: "AI Agents", icon: "fas fa-robot", color: "#EC4899" },
      { name: "Prompt Engineering", icon: "fas fa-pen-fancy", color: "#F59E0B" },
      { name: "LangChain", icon: "fas fa-link", color: "#1C7C54" },
      { name: "LangGraph", icon: "fas fa-project-diagram", color: "#2E7D32" },
      { name: "MCP", icon: "fas fa-layer-group", color: "#6366F1" },
      { name: "Ollama", icon: "fas fa-cube", color: "#aaaaaa" },
      { name: "GPT-4", icon: "fas fa-brain", color: "#10A37F" },
      { name: "Gemini", icon: "fas fa-gem", color: "#4285F4" },
      { name: "Hugging Face", icon: "fas fa-smile", color: "#FFD21E" },
      { name: "LLM Fine-Tuning", icon: "fas fa-sliders-h", color: "#8B5CF6" },
    ],
  },
  {
    title: "ML / Deep Learning",
    color: "#00CC33",
    items: [
      { name: "Machine Learning", icon: "fas fa-cogs", color: "#34D399" },
      { name: "Deep Learning", icon: "fas fa-network-wired", color: "#10B981" },
      { name: "NLP", icon: "fas fa-language", color: "#06B6D4" },
      { name: "Scikit-learn", icon: "fas fa-chart-bar", color: "#F7931E" },
      { name: "TensorFlow", icon: "fas fa-layer-group", color: "#FF6F00" },
      { name: "PyTorch", icon: "fas fa-fire", color: "#EE4C2C" },
      { name: "Pandas", icon: "fas fa-table", color: "#7B68EE" },
      { name: "NumPy", icon: "fas fa-calculator", color: "#4DABCF" },
      { name: "Model Evaluation", icon: "fas fa-chart-line", color: "#8B5CF6" },
      { name: "Hallucination", icon: "fas fa-eye", color: "#DC2626" },
      { name: "Toxicity", icon: "fas fa-exclamation-triangle", color: "#EF4444" },
      { name: "Bias Detection", icon: "fas fa-balance-scale", color: "#F59E0B" },
      { name: "Drift Monitoring", icon: "fas fa-wave-square", color: "#3B82F6" },
    ],
  },
  {
    title: "Vector Databases",
    color: "#00FF41",
    items: [
      { name: "ChromaDB", icon: "fas fa-database", color: "#FF6B6B" },
      { name: "Vector Search", icon: "fas fa-search-location", color: "#A78BFA" },
      { name: "Embedding Pipelines", icon: "fas fa-code-branch", color: "#60A5FA" },
    ],
  },
  {
    title: "Pipelines / MLOps",
    color: "#00CC33",
    items: [
      { name: "Airflow", icon: "fas fa-wind", color: "#017CEE" },
      { name: "MLflow", icon: "fas fa-chart-line", color: "#0194E2" },
      { name: "Airbyte", icon: "fas fa-exchange-alt", color: "#615EFF" },
      { name: "CI/CD Pipelines", icon: "fas fa-sync", color: "#2563EB" },
    ],
  },
  {
    title: "Cloud / Data",
    color: "#00FF41",
    items: [
      { name: "Azure", icon: "fab fa-microsoft", color: "#0078D4" },
      { name: "Azure OpenAI", icon: "fas fa-cloud", color: "#0078D4" },
      { name: "Databricks", icon: "fas fa-fire-alt", color: "#FF3621" },
      { name: "Unity Catalog", icon: "fas fa-book", color: "#E94E1B" },
      { name: "Databricks SQL", icon: "fas fa-database", color: "#FF3621" },
      { name: "AWS Lambda", icon: "fab fa-aws", color: "#FF9900" },
      { name: "AWS SQS", icon: "fab fa-aws", color: "#FF9900" },
      { name: "Azure SQL", icon: "fas fa-database", color: "#0078D4" },
      { name: "MySQL", icon: "fas fa-database", color: "#4479A1" },
      { name: "MongoDB", icon: "fas fa-database", color: "#47A248" },
    ],
  },
  {
    title: "DevOps / Tools",
    color: "#00CC33",
    items: [
      { name: "Docker", icon: "fab fa-docker", color: "#2496ED" },
      { name: "Kubernetes", icon: "fas fa-dharmachakra", color: "#326CE5" },
      { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
      { name: "GitHub", icon: "fab fa-github", color: "#aaaaaa" },
      { name: "GitHub Copilot", icon: "fab fa-github", color: "#aaaaaa" },
      { name: "Windsurf", icon: "fas fa-wind", color: "#06B6D4" },
      { name: "Amazon Bedrock", icon: "fab fa-aws", color: "#FF9900" },
      { name: "Claude Code", icon: "fas fa-code", color: "#A78BFA" },
      { name: "Streamlit", icon: "fas fa-stream", color: "#FF4B4B" },
      { name: "Vercel", icon: "fas fa-triangle", color: "#aaaaaa" },
    ],
  },
];

export default function TechStackPage() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIdx((prev) => (prev + 1) % techCategories.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  const current = techCategories[currentIdx];
  const totalTechs = techCategories.reduce((s, c) => s + c.items.length, 0);

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
          paddingTop: "64px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          padding: "80px 24px 60px",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div
            style={{
              fontFamily: "monospace",
              color: "rgba(0,255,65,0.55)",
              fontSize: "12px",
              marginBottom: "8px",
              letterSpacing: "2px",
            }}
          >
            // techstack.tsx
          </div>
          <h1
            style={{
              fontSize: "clamp(36px,6vw,64px)",
              fontWeight: "900",
              color: "#ffffff",
              letterSpacing: "-1px",
            }}
          >
            Tech{" "}
            <span
              style={{
                color: "#00FF41",
                textShadow: "0 0 30px rgba(0,255,65,0.45)",
              }}
            >
              Stack
            </span>
          </h1>
          <p
            style={{
              fontFamily: "monospace",
              color: "rgba(255,255,255,0.45)",
              fontSize: "13px",
              marginTop: "8px",
            }}
          >
            {totalTechs} technologies &nbsp;·&nbsp; {techCategories.length} categories
          </p>
        </div>

        {/* Category label — keyed so it re-animates on change */}
        <div
          key={"label-" + currentIdx}
          style={{ marginBottom: "36px", textAlign: "center", animation: "fadeSlide 0.45s ease-out" }}
        >
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              color: "rgba(0,255,65,0.5)",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Category {currentIdx + 1} of {techCategories.length}
          </span>
          <h2
            style={{
              fontSize: "clamp(26px,5vw,46px)",
              fontWeight: "800",
              color: current.color,
              marginTop: "6px",
              letterSpacing: "-0.5px",
              textShadow: `0 0 28px ${current.color}50`,
            }}
          >
            {current.title}
          </h2>
        </div>

        {/* Tech cards */}
        <div
          key={"cards-" + currentIdx}
          style={{
            maxWidth: "1200px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: "16px",
            marginBottom: "44px",
            animation: "fadeSlide 0.55s ease-out",
          }}
        >
          {current.items.map((tech, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(0,0,0,0.7)",
                borderRadius: "12px",
                padding: "24px 14px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                border: "1px solid rgba(0,255,65,0.1)",
                transition: "all 0.25s",
                cursor: "default",
                animation: `fadeSlide 0.4s ease-out ${idx * 0.04}s both`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#00FF41";
                e.currentTarget.style.background = "rgba(0,255,65,0.07)";
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,255,65,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,255,65,0.1)";
                e.currentTarget.style.background = "rgba(0,0,0,0.7)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Icon badge */}
              <div
                style={{
                  width: "54px",
                  height: "54px",
                  background: `${tech.color}18`,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `1px solid ${tech.color}28`,
                }}
              >
                <i
                  className={tech.icon}
                  style={{ fontSize: "26px", color: tech.color }}
                />
              </div>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#ffffff",
                  textAlign: "center",
                  lineHeight: 1.35,
                  fontFamily: "monospace",
                }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Progress dots */}
        <div style={{ display: "flex", gap: "8px" }}>
          {techCategories.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              style={{
                width: idx === currentIdx ? "40px" : "8px",
                height: "8px",
                background: idx === currentIdx ? "#00FF41" : "rgba(255,255,255,0.18)",
                borderRadius: "4px",
                transition: "all 0.3s",
                cursor: "pointer",
                boxShadow: idx === currentIdx ? "0 0 10px #00FF41" : "none",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
