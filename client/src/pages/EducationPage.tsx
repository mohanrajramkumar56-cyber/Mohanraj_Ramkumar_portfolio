import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import AnimatedBackground from "../components/AnimatedBackground";

const education = [
  {
    level: "Bachelor's Degree",
    icon: "fas fa-graduation-cap",
    institution: "Rathinam College of Arts and Science",
    degree: "B.Sc. Artificial Intelligence & Machine Learning",
    score: "CGPA: 8.4 / 10",
    scoreIcon: "fas fa-star",
    year: "2023 – 2026",
    status: "Completed",
    statusColor: "#00FF41",
    tags: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Python", "Data Science"],
    description: "Specialized in AI/ML with hands-on projects in Generative AI, LLMs, RAG pipelines, and full-stack development. Built 11+ real-world AI projects during the course.",
    accentColor: "#00FF41",
  },
  {
    level: "Higher Secondary Education",
    icon: "fas fa-school",
    institution: "Tondamuthur Boys Higher Secondary School",
    degree: "12th Standard — Computer Applications, Accountancy & Commerce",
    score: "Percentage: 71%",
    scoreIcon: "fas fa-chart-bar",
    year: "2022 – 2023",
    status: "Completed",
    statusColor: "#00CC33",
    tags: ["Computer Applications", "Accountancy", "Commerce", "Mathematics"],
    description: "Completed higher secondary with a focus on Computer Applications, building a strong foundation in programming concepts and business studies.",
    accentColor: "#00CC33",
  },
];

export default function EducationPage() {
  const [visible, setVisible] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    const observers = cardRefs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setVisible((v) => [...v, i]); obs.disconnect(); } },
        { threshold: 0.15 }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div style={{ width: "100vw", minHeight: "100vh", position: "relative", background: "#000000" }}>

      {/* 3D Animated Canvas Background */}
      <AnimatedBackground />


      <NavBar />

      <div style={{ position: "relative", zIndex: 2, width: "100%", paddingTop: "64px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "64px 24px 100px" }}>

          {/* ── Header ── */}
          <div style={{ marginBottom: "72px", textAlign: "center" }}>
            <div style={{ fontFamily: "monospace", color: "rgba(0,255,65,0.55)", fontSize: "12px", marginBottom: "12px", letterSpacing: "3px" }}>
              // education.tsx
            </div>
            <h1 style={{ fontSize: "clamp(40px,6vw,68px)", fontWeight: "900", color: "#ffffff", letterSpacing: "-2px", lineHeight: 1, marginBottom: "18px" }}>
              My <span style={{ color: "#00FF41", textShadow: "0 0 40px rgba(0,255,65,0.5)" }}>Education</span>
            </h1>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", fontFamily: "monospace", letterSpacing: "1px" }}>
              Academic journey that shaped my AI/ML career
            </p>
            <div style={{ margin: "28px auto 0", width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #00FF41, transparent)" }} />
          </div>

          {/* ── Timeline ── */}
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", background: "linear-gradient(180deg, rgba(0,255,65,0.7) 0%, rgba(0,255,65,0.1) 100%)", transform: "translateX(-50%)" }} />

            {education.map((edu, i) => {
              const isLeft = i % 2 === 0;
              const isVisible = visible.includes(i);
              return (
                <div
                  key={i}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 60px 1fr",
                    marginBottom: i < education.length - 1 ? "60px" : "0",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : isLeft ? "translateX(-50px)" : "translateX(50px)",
                    transition: "all 0.75s cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  {/* Left */}
                  <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "30px", paddingTop: "8px" }}>
                    {isLeft ? <EducationCard edu={edu} /> : <YearBadge year={edu.year} />}
                  </div>
                  {/* Dot */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", paddingTop: "16px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg,#001200,#003300)", border: `2px solid ${edu.accentColor}`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 24px ${edu.accentColor}66, 0 0 48px ${edu.accentColor}22`, zIndex: 1 }}>
                      <i className={edu.icon} style={{ fontSize: "18px", color: edu.accentColor }} />
                    </div>
                  </div>
                  {/* Right */}
                  <div style={{ paddingLeft: "30px", paddingTop: "8px" }}>
                    {!isLeft ? <EducationCard edu={edu} /> : <YearBadge year={edu.year} />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Stats ── */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginTop: "80px" }}>
            {[
              { icon: "fas fa-award", value: "8.4", label: "CGPA", sub: "B.Sc. AI & ML" },
              { icon: "fas fa-calendar-check", value: "2026", label: "Graduation Year", sub: "Bachelor's Degree" },
              { icon: "fas fa-code", value: "11+", label: "AI Projects", sub: "Built During Studies" },
            ].map((stat, i) => (
              <div key={i}
                style={{ padding: "28px 20px", background: "rgba(0,0,0,0.65)", border: "1px solid rgba(0,255,65,0.14)", borderRadius: "14px", textAlign: "center", transition: "all 0.25s", cursor: "default" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor="#00FF41"; e.currentTarget.style.background="rgba(0,255,65,0.07)"; e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 12px 32px rgba(0,255,65,0.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(0,255,65,0.14)"; e.currentTarget.style.background="rgba(0,0,0,0.65)"; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}
              >
                <i className={stat.icon} style={{ fontSize: "28px", color: "#00FF41", marginBottom: "12px", display: "block" }} />
                <div style={{ fontSize: "32px", fontWeight: "900", color: "#00FF41", fontFamily: "monospace", lineHeight: 1, marginBottom: "6px", textShadow: "0 0 20px rgba(0,255,65,0.4)" }}>{stat.value}</div>
                <div style={{ fontSize: "13px", color: "#ffffff", fontWeight: "700", marginBottom: "4px" }}>{stat.label}</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", fontFamily: "monospace" }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .edu-grid { grid-template-columns: 0 44px 1fr !important; }
          .edu-left { display: none !important; }
        }
      `}</style>
    </div>
  );
}

function EducationCard({ edu }: { edu: typeof education[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(0,0,0,0.72)",
        border: `1px solid ${hovered ? edu.accentColor : "rgba(0,255,65,0.16)"}`,
        borderRadius: "16px",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
        boxShadow: hovered ? `0 20px 56px ${edu.accentColor}22` : "none",
        transform: hovered ? "translateY(-5px) scale(1.01)" : "translateY(0) scale(1)",
        width: "100%",
        maxWidth: "360px",
        backdropFilter: "blur(8px)",
      }}
    >
      <div style={{ height: "3px", background: `linear-gradient(90deg, ${edu.accentColor}, ${edu.accentColor}66, transparent)` }} />
      <div style={{ padding: "28px 28px 24px" }}>
        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "5px 14px", background: `${edu.accentColor}15`, border: `1px solid ${edu.accentColor}40`, borderRadius: "20px", marginBottom: "16px" }}>
          <i className={edu.icon} style={{ fontSize: "11px", color: edu.accentColor }} />
          <span style={{ fontSize: "11px", color: edu.accentColor, fontFamily: "monospace", fontWeight: "700", letterSpacing: "1px" }}>{edu.level}</span>
        </div>
        {/* Title */}
        <h3 style={{ fontSize: "17px", fontWeight: "800", color: "#ffffff", marginBottom: "8px", lineHeight: 1.3 }}>{edu.institution}</h3>
        <p style={{ fontSize: "13px", color: `${edu.accentColor}cc`, fontFamily: "monospace", marginBottom: "14px", lineHeight: 1.5, fontWeight: "600" }}>{edu.degree}</p>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.62)", lineHeight: "1.7", marginBottom: "18px" }}>{edu.description}</p>
        {/* Score + status */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <i className={edu.scoreIcon} style={{ color: edu.accentColor, fontSize: "13px" }} />
            <span style={{ fontSize: "14px", fontWeight: "700", color: "#ffffff", fontFamily: "monospace" }}>{edu.score}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: edu.statusColor, boxShadow: `0 0 8px ${edu.statusColor}` }} />
            <span style={{ fontSize: "11px", color: edu.statusColor, fontFamily: "monospace", fontWeight: "600" }}>{edu.status}</span>
          </div>
        </div>
        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
          {edu.tags.map((tag) => (
            <span key={tag} style={{ padding: "4px 10px", background: `${edu.accentColor}10`, border: `1px solid ${edu.accentColor}28`, color: `${edu.accentColor}cc`, fontSize: "11px", fontFamily: "monospace", borderRadius: "4px", fontWeight: "600" }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function YearBadge({ year }: { year: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", paddingTop: "14px" }}>
      <div style={{ padding: "8px 16px", background: "rgba(0,255,65,0.08)", border: "1px solid rgba(0,255,65,0.25)", borderRadius: "8px", fontFamily: "monospace", fontSize: "13px", fontWeight: "700", color: "#00FF41", letterSpacing: "1px", whiteSpace: "nowrap", backdropFilter: "blur(4px)" }}>
        <i className="fas fa-clock" style={{ marginRight: "7px", fontSize: "11px" }} />
        {year}
      </div>
    </div>
  );
}
