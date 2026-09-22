import { useEffect } from "react";
import NavBar from "../components/NavBar";
import AnimatedBackground from "../components/AnimatedBackground";

/* ── Helper components ── */

function Section({
  title,
  icon,
  children,
  last = false,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div
      style={{
        marginBottom: last ? 0 : "36px",
        paddingBottom: last ? 0 : "32px",
        borderBottom: last ? "none" : "1px solid rgba(0,255,65,0.1)",
      }}
    >
      <h3
        style={{
          fontSize: "16px",
          fontWeight: "700",
          color: "#00FF41",
          marginBottom: "18px",
          fontFamily: "monospace",
          letterSpacing: "1px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <i className={icon} style={{ opacity: 0.8 }} />
        {title}
      </h3>
      {children}
    </div>
  );
}

function ExpItem({
  title,
  company,
  period,
  bullets,
}: {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "6px",
          marginBottom: "10px",
        }}
      >
        <div>
          <h4
            style={{
              fontSize: "15px",
              fontWeight: "700",
              color: "#00FF41",
              marginBottom: "3px",
              fontFamily: "monospace",
            }}
          >
            {title}
          </h4>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)" }}>{company}</p>
        </div>
        <span
          style={{
            fontSize: "12px",
            color: "rgba(0,255,65,0.7)",
            fontFamily: "monospace",
            whiteSpace: "nowrap",
          }}
        >
          {period}
        </span>
      </div>
      <ul
        style={{
          paddingLeft: "18px",
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        {bullets.map((b, i) => (
          <li
            key={i}
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.78)",
              lineHeight: "1.65",
              listStyleType: "none",
              paddingLeft: "12px",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                color: "#00FF41",
                fontSize: "11px",
                top: "4px",
              }}
            >
              ▸
            </span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Page ── */

export default function ResumePage() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
    <div style={{ width: "100vw", minHeight: "100vh", position: "relative", background: "#000000" }}>
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Nav */}
      <NavBar />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, width: "100%", paddingTop: "64px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "56px 24px 80px" }}>

          {/* Page header */}
          <div style={{ marginBottom: "48px" }}>
            <div style={{ fontFamily: "monospace", color: "rgba(0,255,65,0.55)", fontSize: "12px", marginBottom: "8px", letterSpacing: "2px" }}>
              // resume.tsx
            </div>
            <h1 style={{ fontSize: "clamp(36px,6vw,64px)", fontWeight: "900", color: "#ffffff", letterSpacing: "-1px", lineHeight: 1 }}>
              My <span style={{ color: "#00FF41", textShadow: "0 0 30px rgba(0,255,65,0.4)" }}>Resume</span>
            </h1>
          </div>

          {/* Download button */}
          <div style={{ marginBottom: "40px" }}>
            <a
              href="/MOHANRAJ_RAMKUMAR.pdf"
              download="MOHANRAJ_RAMKUMAR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "12px 28px", background: "#00FF41", color: "#000000", borderRadius: "8px", textDecoration: "none", fontSize: "14px", fontWeight: "700", fontFamily: "monospace", letterSpacing: "1px", transition: "all 0.2s", boxShadow: "0 0 24px rgba(0,255,65,0.3)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#00CC33"; e.currentTarget.style.boxShadow = "0 0 36px rgba(0,255,65,0.5)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#00FF41"; e.currentTarget.style.boxShadow = "0 0 24px rgba(0,255,65,0.3)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <i className="fas fa-download" />
              Download PDF
            </a>
          </div>

          {/* Resume card */}
          <div style={{ background: "rgba(0,0,0,0.7)", border: "1px solid rgba(0,255,65,0.18)", borderRadius: "16px", overflow: "hidden" }}>
            {/* Top accent */}
            <div style={{ height: "3px", background: "linear-gradient(90deg, #00FF41, #00CC33, transparent)" }} />

            <div style={{ padding: "40px 44px" }}>

              {/* Name & contact */}
              <div style={{ marginBottom: "36px", paddingBottom: "28px", borderBottom: "1px solid rgba(0,255,65,0.15)" }}>
                <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: "900", color: "#00FF41", marginBottom: "12px", fontFamily: "monospace", textShadow: "0 0 20px rgba(0,255,65,0.3)" }}>
                  MOHANRAJ RAMKUMAR
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", fontSize: "13px", color: "rgba(255,255,255,0.7)", fontFamily: "monospace" }}>
                  <span><i className="fas fa-map-marker-alt" style={{ color: "#00FF41", marginRight: "6px" }} />Coimbatore, Tamil Nadu, India</span>
                  <span><i className="fas fa-phone" style={{ color: "#00FF41", marginRight: "6px" }} />+91 93842 41330</span>
                  <span><i className="fas fa-envelope" style={{ color: "#00FF41", marginRight: "6px" }} />mohanrajramkumar56@gmail.com</span>
                  <a href="https://linkedin.com/in/mohanraj-ramkumar" target="_blank" rel="noopener noreferrer" style={{ color: "#00FF41", textDecoration: "none" }}>
                    <i className="fab fa-linkedin" style={{ marginRight: "6px" }} />LinkedIn
                  </a>
                </div>
              </div>

              {/* Professional Summary */}
              <Section title="Professional Summary" icon="fas fa-user-tie">
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", lineHeight: "1.8" }}>
                  AI Engineer with hands-on experience building production-grade Generative AI and ML systems using Python, LLMs, RAG, AI Agents, LangChain, LangGraph, FastAPI, Flask, Scikit-learn, TensorFlow, and PyTorch. Experienced in RAG pipeline design, model training and evaluation, agent orchestration via MCP, and ML pipeline automation with Airflow and MLflow. Hands-on with Databricks, Azure, AWS, Docker, and Kubernetes.{" "}
                  <strong style={{ color: "#00FF41" }}>Databricks Certified Generative AI Engineer Associate.</strong>
                </p>
              </Section>

              {/* Experience */}
              <Section title="Professional Experience" icon="fas fa-briefcase">
                <ExpItem
                  title="Generative AI Developer"
                  company="Data Pattern"
                  period="Jun 2025 – Aug 2026"
                  bullets={[
                    "Built and deployed a full-stack conversational analytics platform using Python, Flask, React, LangChain, and Databricks LLMs",
                    "Designed and implemented RAG pipelines using ChromaDB for document embedding and retrieval",
                    "Orchestrated agent-based task execution using Model Context Protocol (MCP) and LangGraph",
                    "Developed production-ready REST APIs and backend services with Postman and Swagger testing",
                    "Built LLM-powered metadata generation system using Databricks Unity Catalog, Ollama, and Gemini",
                    "Designed evaluation engines covering toxicity, hallucination, bias, relevancy, and drift monitoring",
                  ]}
                />
                <ExpItem
                  title="Data Science Intern"
                  company="Postulate"
                  period="May 2024 – Jun 2024"
                  bullets={[
                    "Performed data cleaning, EDA, statistical analysis, and visualization using Python, NumPy, Pandas, Matplotlib, and Scikit-learn",
                  ]}
                />
              </Section>

              {/* Projects */}
              <Section title="Key Projects" icon="fas fa-project-diagram">
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[
                    { name: "RAG-Based HR Chatbot", desc: "Built a RAG chatbot using Ollama, LangChain, and ChromaDB to retrieve document context and generate context-aware responses." },
                    { name: "AI-Based Data Analysis Assistant", desc: "Built an AI assistant using GPT-4 and NLP to process CSV files, answer natural-language questions, and generate visualizations." },
                  ].map((p) => (
                    <div key={p.name} style={{ padding: "14px 18px", background: "rgba(0,255,65,0.04)", border: "1px solid rgba(0,255,65,0.12)", borderRadius: "8px" }}>
                      <strong style={{ color: "#00FF41", fontFamily: "monospace", fontSize: "13px" }}>{p.name}</strong>
                      <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", marginTop: "6px", lineHeight: "1.6" }}>{p.desc}</p>
                    </div>
                  ))}
                </div>
              </Section>

              {/* Achievements */}
              <Section title="Achievements" icon="fas fa-trophy">
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.82)", lineHeight: "1.8" }}>
                  Finalist – RBI HaRBInger 2024, Reserve Bank of India, FinTech Track &nbsp;|&nbsp;
                  Finalist – Beyond Abstraction 2024, Blockchain Track &nbsp;|&nbsp;
                  Participant – GDG Hackathon 2024 and Smart India Hackathon 2024
                </p>
              </Section>

              {/* Certifications */}
              <Section title="Certifications" icon="fas fa-certificate">
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {[
                    "Databricks Certified Generative AI Engineer Associate",
                    "Oracle Cloud Data Management Foundations",
                    "Oracle Cloud Infrastructure Foundations",
                    "Oracle Java Foundations",
                    "Infosys Springboard: Machine Learning",
                    "Infosys Springboard: Git/GitHub",
                    "Infosys Springboard: MongoDB NoSQL",
                  ].map((cert) => (
                    <span key={cert} style={{ padding: "5px 12px", background: "rgba(0,255,65,0.08)", border: "1px solid rgba(0,255,65,0.2)", borderRadius: "4px", fontSize: "12px", color: "rgba(0,255,65,0.9)", fontFamily: "monospace" }}>
                      {cert}
                    </span>
                  ))}
                </div>
              </Section>

              {/* Education */}
              <Section title="Education" icon="fas fa-graduation-cap" last>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
                  <div>
                    <h4 style={{ fontSize: "15px", fontWeight: "700", color: "#00FF41", marginBottom: "4px", fontFamily: "monospace" }}>B.Sc. Artificial Intelligence</h4>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)" }}>Rathinam College of Arts and Science, Coimbatore</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: "13px", color: "#00FF41", fontFamily: "monospace" }}>2023 – 2026</p>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)" }}>CGPA: 8.0</p>
                  </div>
                </div>
              </Section>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
