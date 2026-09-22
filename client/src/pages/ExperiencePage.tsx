import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import AnimatedBackground from "../components/AnimatedBackground";

const experiences = [
  {
    id: 0,
    type: "Full-time",
    typeColor: "#00FF41",
    typeBg: "rgba(0,255,65,0.12)",
    typeBorder: "rgba(0,255,65,0.35)",
    role: "GenAI Developer",
    company: "Data Pattern",
    duration: "Jan 2026 - Aug 2026",
    durationIcon: "fas fa-briefcase",
    summary: "Worked as a GenAI Developer on real-world AI, LLM evaluation, web application, and agent-based projects.",
    projects: [
      {
        title: "LLM Evaluation & Performance AI Platform",
        points: [
          "Developed an LLM evaluation platform assessing response quality using 11 evaluation metrics",
          "Implemented deterministic/rule-based and LLM-as-a-Judge evaluation approaches",
          "Integrated AWS Bedrock models for LLM-based evaluation and automated quality assessment",
          "Evaluated accuracy, completeness, context relevance, fluency, latency, and other response-quality metrics",
          "Developed a Resource Agent to monitor CPU, memory, storage, and bandwidth metrics",
        ],
      },
      {
        title: "Resource Agent",
        points: [
          "Developed an AI-powered Resource Agent to monitor and evaluate system performance in real time",
          "Tracked CPU usage, memory consumption, storage utilization, and network bandwidth",
          "Integrated the agent into the LLM evaluation platform to provide infrastructure-level performance insights",
          "Enabled side-by-side monitoring of model quality metrics and system resource metrics",
        ],
      },
      {
        title: "Employee Portal",
        points: [
          "Designed and developed multiple modules of an internal employee web application",
          "Built login/authentication interfaces, leave management, and reimbursement management components",
          "Contributed to both AI-focused development and web application implementation",
        ],
      },
      {
        title: "LinkedIn AI Agent",
        points: [
          "Developed an AI-powered content generation agent for LinkedIn publishing",
          "Users provide a topic (Data Engineering, Cloud Computing) and agent generates content + visual assets",
          "Automated content creation workflow to reduce professional publishing effort",
        ],
      },
      {
        title: "Nexo — Jira Clone",
        projectId: "nexo",
        points: [
          "Independently developed a Jira replication/management application for internal use",
          "Designed and implemented the full application workflow and supporting functionality",
          "Maintained project codebase and delivered complete implementation",
        ],
      },
    ],
    techStack: ["Python", "AWS Bedrock", "LangChain", "LLMs", "React", "FastAPI", "GenAI", "Agent Framework"],
    accentColor: "#00FF41",
  },
  {
    id: 1,
    type: "Internship",
    typeColor: "#00CC33",
    typeBg: "rgba(0,204,51,0.1)",
    typeBorder: "rgba(0,204,51,0.3)",
    role: "GenAI Developer Intern",
    company: "Data Pattern",
    duration: "18 Aug 2025 - 4 Dec 2025",
    durationIcon: "fas fa-calendar-alt",
    summary: "Selected based on performance during the Data Engineering internship. Worked on multiple industry-oriented Generative AI and LLM applications.",
    projects: [
      {
        title: "InsightAI — Conversational Data Analytics",
        projectId: "insightai",
        points: [
          "Built a conversational AI solution enabling non-technical users to query organizational data in natural language",
          "Integrated LLM with databases to understand questions, generate queries, and return human-readable responses",
          "Allowed business users to ask revenue or branch-level questions without SQL knowledge",
        ],
      },
      {
        title: "CatalogSense AI — Databricks Metadata",
        projectId: "catalogsense",
        points: [
          "Built an AI-powered data catalog to auto-generate descriptions for schemas and data fields",
          "Integrated Llama and Gemini models for AI-generated metadata",
          "Implemented Named Entity Recognition (NER) for metadata understanding",
          "Developed offline processing support for bulk schema description generation",
        ],
      },
      {
        title: "LLM-Powered ETL Pipeline",
        points: [
          "Built a metadata-driven app for generating ETL code using LLMs",
          "Generated Python, SQL, and PySpark code based on user requirements and metadata",
          "Reduced manual development time in traditional ETL implementation",
          "Users process and transform data through generated pipelines to produce Silver-layer datasets",
        ],
      },
    ],
    techStack: ["Python", "LangChain", "LLaMA", "Gemini", "NER", "ETL", "PySpark", "SQL", "GenAI"],
    accentColor: "#00CC33",
  },
  {
    id: 2,
    type: "Internship",
    typeColor: "#00CC33",
    typeBg: "rgba(0,204,51,0.1)",
    typeBorder: "rgba(0,204,51,0.3)",
    role: "Data Engineer Intern",
    company: "Data Pattern",
    duration: "20 Mar 2025 - 20 May 2025",
    durationIcon: "fas fa-calendar-alt",
    summary: "Worked on data collection, preprocessing, and preparation workflows supporting AI/ML model development.",
    projects: [
      {
        title: "Data Collection & Preprocessing",
        points: [
          "Developed automated data collection workflows using Selenium and automation tools",
          "Built scripts to collect technical information from IEEE and other sources",
          "Performed data cleaning, preprocessing, and quality enhancement on collected datasets",
          "Prepared structured cleaned data for downstream LLM/model training workflows",
          "Gained end-to-end experience in data acquisition through model-ready dataset preparation",
        ],
      },
    ],
    techStack: ["Python", "Selenium", "Pandas", "NumPy", "Data Preprocessing", "Web Scraping"],
    accentColor: "#00CC33",
  },
  {
    id: 3,
    type: "Internship",
    typeColor: "#009922",
    typeBg: "rgba(0,153,34,0.1)",
    typeBorder: "rgba(0,153,34,0.3)",
    role: "Data Science Intern",
    company: "Postulate",
    duration: "May 2024 – Jul 2024",
    durationIcon: "fas fa-calendar-alt",
    summary: "Introductory Data Science internship focused on data exploration, cleaning, visualization, and preparation for practical analysis.",
    projects: [
      {
        title: "Data Science Fundamentals",
        points: [
          "Learned fundamentals of Data Science and the role of a Data Scientist in real-world organizations",
          "Worked with Python-based libraries including NumPy and Pandas",
          "Hands-on experience with data cleaning, preprocessing, exploration, and visualization",
          "Applied analytical techniques on real-world datasets to extract insights",
          "Developed foundational understanding of the end-to-end Data Science workflow",
        ],
      },
    ],
    techStack: ["Python", "NumPy", "Pandas", "Data Visualization", "EDA", "Data Cleaning"],
    accentColor: "#009922",
  },
];

export default function ExperiencePage() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState<number[]>([]);
  const [expanded, setExpanded] = useState<number[]>([0]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    const observers = cardRefs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) { setVisible((v) => [...v, i]); obs.disconnect(); }
        },
        { threshold: 0.1 }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const toggleExpand = (id: number) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div style={{ width: "100vw", minHeight: "100vh", position: "relative", background: "#000000" }}>
      <AnimatedBackground />
      <NavBar />

      <div style={{ position: "relative", zIndex: 2, width: "100%", paddingTop: "64px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 24px 100px" }}>

          {/* Header */}
          <div style={{ marginBottom: "64px", textAlign: "center" }}>
            <div style={{ fontFamily: "monospace", color: "rgba(0,255,65,0.55)", fontSize: "12px", marginBottom: "12px", letterSpacing: "3px" }}>
              // experience.tsx
            </div>
            <h1 style={{ fontSize: "clamp(40px,6vw,68px)", fontWeight: "900", color: "#ffffff", letterSpacing: "-2px", lineHeight: 1, marginBottom: "16px" }}>
              Work <span style={{ color: "#00FF41", textShadow: "0 0 40px rgba(0,255,65,0.5)" }}>Experience</span>
            </h1>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", fontFamily: "monospace", letterSpacing: "1px" }}>
              Real-world AI/ML projects and internships
            </p>
            <div style={{ margin: "24px auto 0", width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #00FF41, transparent)" }} />
          </div>

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: "20px", top: 0, bottom: 0, width: "1px", background: "linear-gradient(180deg, rgba(0,255,65,0.8) 0%, rgba(0,255,65,0.05) 100%)" }} />

            {experiences.map((exp, i) => {
              const isVisible = visible.includes(i);
              const isExpanded = expanded.includes(exp.id);

              return (
                <div
                  key={exp.id}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  style={{
                    display: "flex",
                    gap: "32px",
                    marginBottom: "32px",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(-30px)",
                    transition: `all 0.65s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
                  }}
                >
                  {/* Timeline dot */}
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "18px" }}>
                    <div style={{
                      width: "40px", height: "40px", borderRadius: "50%",
                      background: "linear-gradient(135deg, #001200, #003300)",
                      border: `2px solid ${exp.accentColor}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: `0 0 20px ${exp.accentColor}55`,
                      zIndex: 1, flexShrink: 0,
                    }}>
                      <i className={exp.type === "Full-time" ? "fas fa-briefcase" : "fas fa-laptop-code"}
                        style={{ fontSize: "15px", color: exp.accentColor }} />
                    </div>
                  </div>

                  {/* Card */}
                  <div style={{
                    flex: 1,
                    background: "rgba(0,0,0,0.70)",
                    border: `1px solid ${isExpanded ? exp.accentColor : "rgba(0,255,65,0.14)"}`,
                    borderRadius: "16px",
                    overflow: "hidden",
                    transition: "all 0.3s",
                    backdropFilter: "blur(8px)",
                    boxShadow: isExpanded ? `0 16px 48px ${exp.accentColor}18` : "none",
                  }}>
                    {/* Accent top bar */}
                    <div style={{ height: "3px", background: `linear-gradient(90deg, ${exp.accentColor}, ${exp.accentColor}55, transparent)` }} />

                    {/* Card header — always visible */}
                    <div
                      style={{ padding: "24px 28px", cursor: "pointer" }}
                      onClick={() => toggleExpand(exp.id)}
                    >
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
                        <div style={{ flex: 1 }}>
                          {/* Badges row */}
                          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "12px" }}>
                            <span style={{ padding: "4px 12px", background: exp.typeBg, border: `1px solid ${exp.typeBorder}`, borderRadius: "20px", fontSize: "11px", color: exp.typeColor, fontFamily: "monospace", fontWeight: "700", letterSpacing: "1px" }}>
                              {exp.type === "Full-time" ? "● Full-time" : "◆ Internship"}
                            </span>
                            <span style={{ padding: "4px 12px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", fontSize: "11px", color: "rgba(255,255,255,0.55)", fontFamily: "monospace" }}>
                              <i className={exp.durationIcon} style={{ marginRight: "6px", fontSize: "10px" }} />{exp.duration}
                            </span>
                          </div>

                          {/* Role + Company */}
                          <h3 style={{ fontSize: "clamp(18px,2.5vw,22px)", fontWeight: "800", color: "#ffffff", marginBottom: "4px", lineHeight: 1.2 }}>
                            {exp.role}
                          </h3>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                            <i className="fas fa-building" style={{ fontSize: "12px", color: exp.accentColor }} />
                            <span style={{ fontSize: "14px", color: exp.accentColor, fontFamily: "monospace", fontWeight: "600" }}>{exp.company}</span>
                          </div>

                          {/* Summary */}
                          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: "1.7", maxWidth: "600px" }}>{exp.summary}</p>
                        </div>

                        {/* Expand toggle — visible button */}
                        <div style={{
                          display: "flex", flexDirection: "column", alignItems: "center", gap: "4px",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            padding: "8px 16px", borderRadius: "8px",
                            background: isExpanded ? "rgba(0,255,65,0.18)" : "rgba(0,255,65,0.08)",
                            border: "1px solid rgba(0,255,65,0.4)",
                            display: "flex", alignItems: "center", gap: "7px",
                            transition: "all 0.3s", cursor: "pointer",
                            boxShadow: isExpanded ? "0 0 14px rgba(0,255,65,0.25)" : "none",
                          }}>
                            <i className="fas fa-chevron-down" style={{
                              fontSize: "11px", color: "#00FF41",
                              transition: "transform 0.3s",
                              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                              display: "block",
                            }} />
                            <span style={{ fontSize: "11px", color: "#00FF41", fontFamily: "monospace", fontWeight: "700", letterSpacing: "0.5px", whiteSpace: "nowrap" }}>
                              {isExpanded ? "Hide Details" : "View Details"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded content */}
                    <div style={{
                      maxHeight: isExpanded ? "2000px" : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.5s cubic-bezier(0.16,1,0.3,1)",
                    }}>
                      <div style={{ padding: "0 28px 28px", borderTop: "1px solid rgba(0,255,65,0.08)" }}>

                        {/* Projects */}
                        {exp.projects.map((proj, pi) => (
                          <div key={pi} style={{ marginTop: "24px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: exp.accentColor, boxShadow: `0 0 8px ${exp.accentColor}`, flexShrink: 0 }} />
                              <h4 style={{ fontSize: "14px", fontWeight: "700", color: exp.accentColor, fontFamily: "monospace", letterSpacing: "0.5px", flex: 1 }}>{proj.title}</h4>
                              {(proj as any).projectId && (
                                <button
                                  onClick={(e) => { e.stopPropagation(); navigate(`/projects/${ (proj as any).projectId }`); }}
                                  style={{ padding: "3px 10px", background: "rgba(0,255,65,0.1)", border: "1px solid rgba(0,255,65,0.3)", borderRadius: "6px", color: "#00FF41", fontSize: "10px", fontFamily: "monospace", cursor: "pointer", whiteSpace: "nowrap", fontWeight: "600", flexShrink: 0 }}
                                >
                                  <i className="fas fa-eye" style={{ marginRight: "4px" }} />View Project
                                </button>
                              )}
                            </div>
                            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                              {proj.points.map((pt, pti) => (
                                <div key={pti} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                                  <span style={{ color: exp.accentColor, fontSize: "10px", marginTop: "5px", flexShrink: 0 }}>▶</span>
                                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.72)", lineHeight: "1.7" }}>{pt}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}

                        {/* Tech Stack */}
                        <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid rgba(0,255,65,0.07)" }}>
                          <div style={{ fontSize: "11px", color: "rgba(0,255,65,0.55)", fontFamily: "monospace", letterSpacing: "2px", marginBottom: "12px" }}>TECH STACK</div>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                            {exp.techStack.map((tech) => (
                              <span key={tech} style={{ padding: "5px 12px", background: `${exp.accentColor}10`, border: `1px solid ${exp.accentColor}28`, color: `${exp.accentColor}cc`, fontSize: "12px", fontFamily: "monospace", borderRadius: "6px", fontWeight: "600" }}>{tech}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px", marginTop: "60px" }}>
            {[
              { icon: "fas fa-briefcase", value: "1", label: "Full-time Role", sub: "GenAI Developer" },
              { icon: "fas fa-laptop-code", value: "3", label: "Internships", sub: "AI/ML & Data" },
              { icon: "fas fa-building", value: "2", label: "Companies", sub: "Data Pattern + Postulate" },
              { icon: "fas fa-microchip", value: "20+", label: "Tech Used", sub: "Across all roles" },
            ].map((stat, i) => (
              <div key={i}
                style={{ padding: "22px 16px", background: "rgba(0,0,0,0.65)", border: "1px solid rgba(0,255,65,0.14)", borderRadius: "14px", textAlign: "center", transition: "all 0.25s", cursor: "default" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor="#00FF41"; e.currentTarget.style.background="rgba(0,255,65,0.07)"; e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 12px 32px rgba(0,255,65,0.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(0,255,65,0.14)"; e.currentTarget.style.background="rgba(0,0,0,0.65)"; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}
              >
                <i className={stat.icon} style={{ fontSize: "24px", color: "#00FF41", marginBottom: "10px", display: "block" }} />
                <div style={{ fontSize: "28px", fontWeight: "900", color: "#00FF41", fontFamily: "monospace", lineHeight: 1, marginBottom: "5px", textShadow: "0 0 16px rgba(0,255,65,0.4)" }}>{stat.value}</div>
                <div style={{ fontSize: "12px", color: "#ffffff", fontWeight: "700", marginBottom: "3px" }}>{stat.label}</div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>{stat.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

