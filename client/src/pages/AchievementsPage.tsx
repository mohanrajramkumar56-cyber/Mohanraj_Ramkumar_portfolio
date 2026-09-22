import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import AnimatedBackground from "../components/AnimatedBackground";

const achievements = [
  {
    id: 0,
    emoji: "🏆",
    type: "Finalist",
    typeColor: "#FFD700",
    typeBg: "rgba(255,215,0,0.1)",
    typeBorder: "rgba(255,215,0,0.3)",
    title: "RBI Hackathon 2024",
    subtitle: "Global-Level Hackathon · FinTech Track",
    org: "Reserve Bank of India",
    orgIcon: "fas fa-landmark",
    level: "Global",
    levelColor: "#FF6B35",
    badge: "🏆 Finalist · Global-Level Hackathon",
    points: [
      "Reached the finalist stage in the RBI Hackathon 2024 under the FinTech track",
      "Worked on an innovative solution addressing a real-world financial technology problem",
    ],
    accentColor: "#FFD700",
  },
  {
    id: 1,
    emoji: "⛓️",
    type: "Finalist",
    typeColor: "#FFD700",
    typeBg: "rgba(255,215,0,0.1)",
    typeBorder: "rgba(255,215,0,0.3)",
    title: "Beyond Abstraction 2024",
    subtitle: "48-Hour Hackathon · Blockchain Track",
    org: "Beyond Abstraction",
    orgIcon: "fas fa-cubes",
    level: "48-Hour",
    levelColor: "#00CC33",
    badge: "⛓️ Finalist · 48-Hour Hackathon",
    points: [
      "Selected as a finalist in Beyond Abstraction 2024",
      "Developed and presented a solution in the Blockchain track",
    ],
    accentColor: "#FFD700",
  },
  {
    id: 2,
    emoji: "⚡",
    type: "Participant",
    typeColor: "#00FF41",
    typeBg: "rgba(0,255,65,0.1)",
    typeBorder: "rgba(0,255,65,0.3)",
    title: "GDG Hackathon 2024",
    subtitle: "24-Hour Hackathon · Google Developer Group",
    org: "GDG",
    orgIcon: "fab fa-google",
    level: "24-Hour",
    levelColor: "#00FF41",
    badge: "⚡ Participant · 24-Hour Hackathon",
    points: [
      "Participated in the GDG 24-hour Hackathon",
      "Gained hands-on experience in rapid problem-solving, prototyping, and collaborative development",
    ],
    accentColor: "#00FF41",
  },
  {
    id: 3,
    emoji: "🎯",
    type: "Participant",
    typeColor: "#FF9933",
    typeBg: "rgba(255,153,51,0.1)",
    typeBorder: "rgba(255,153,51,0.3)",
    title: "Smart India Hackathon 2024 & 2025",
    subtitle: "National-Level Hackathon",
    org: "Government of India",
    orgIcon: "fas fa-flag",
    level: "National",
    levelColor: "#FF9933",
    badge: "🎯 Participant · National-Level Hackathon",
    points: [
      "Participated in Smart India Hackathon in both 2024 and 2025",
      "Worked on problem-solving and solution development in a national-level innovation environment",
    ],
    accentColor: "#FF9933",
  },
  {
    id: 4,
    emoji: "🎯",
    type: "Management Lead",
    typeColor: "#A855F7",
    typeBg: "rgba(168,85,247,0.1)",
    typeBorder: "rgba(168,85,247,0.3)",
    title: "Hack Beyond Limits",
    subtitle: "National-Level Hackathon · 100+ Teams",
    org: "Hack Beyond Limits",
    orgIcon: "fas fa-users-cog",
    level: "Leadership",
    levelColor: "#A855F7",
    badge: "🎯 Management Lead · National-Level Hackathon",
    points: [
      "Served as Management Lead for the Hack Beyond Limits hackathon",
      "Helped organize and coordinate a national-level event with 100+ participating teams",
      "Contributed to event planning, participant coordination, team management, and event execution",
    ],
    accentColor: "#A855F7",
  },
  {
    id: 5,
    emoji: "🎓",
    type: "Academic",
    typeColor: "#00FF41",
    typeBg: "rgba(0,255,65,0.1)",
    typeBorder: "rgba(0,255,65,0.3)",
    title: "B.Sc. Artificial Intelligence — CGPA 8.54",
    subtitle: "Rathinam College of Arts and Science · 2026",
    org: "Rathinam College",
    orgIcon: "fas fa-graduation-cap",
    level: "Academic",
    levelColor: "#00FF41",
    badge: "🎓 Academic Achievement",
    points: [
      "Completed a Bachelor's degree in Artificial Intelligence with a CGPA of 8.54",
      "Built 11+ AI/ML projects during the course",
    ],
    accentColor: "#00FF41",
  },
];

const stats = [
  { icon: "fas fa-trophy", value: "2", label: "Finalist", sub: "Global & National" },
  { icon: "fas fa-code", value: "4+", label: "Hackathons", sub: "Participated" },
  { icon: "fas fa-users-cog", value: "1", label: "Event Lead", sub: "100+ Teams" },
  { icon: "fas fa-star", value: "8.54", label: "CGPA", sub: "B.Sc. AI" },
];

export default function AchievementsPage() {
  const [visible, setVisible] = useState<number[]>([]);
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

  return (
    <div style={{ width: "100vw", minHeight: "100vh", position: "relative", background: "#000000" }}>
      <AnimatedBackground />
      <NavBar />

      <div style={{ position: "relative", zIndex: 2, width: "100%", paddingTop: "64px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "64px 24px 100px" }}>

          {/* Header */}
          <div style={{ marginBottom: "64px", textAlign: "center" }}>
            <div style={{ fontFamily: "monospace", color: "rgba(0,255,65,0.55)", fontSize: "12px", marginBottom: "12px", letterSpacing: "3px" }}>
              // achievements.tsx
            </div>
            <h1 style={{ fontSize: "clamp(40px,6vw,68px)", fontWeight: "900", color: "#ffffff", letterSpacing: "-2px", lineHeight: 1, marginBottom: "16px" }}>
              Achievements &{" "}
              <span style={{ color: "#00FF41", textShadow: "0 0 40px rgba(0,255,65,0.5)" }}>Hackathons</span>
            </h1>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", fontFamily: "monospace", letterSpacing: "1px" }}>
              Competitions, recognitions, and milestones
            </p>
            <div style={{ margin: "24px auto 0", width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #00FF41, transparent)" }} />
          </div>

          {/* Cards grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "24px", marginBottom: "60px" }}>
            {achievements.map((ach, i) => {
              const isVisible = visible.includes(i);
              return (
                <div
                  key={ach.id}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  style={{
                    background: "rgba(0,0,0,0.70)",
                    border: "1px solid rgba(0,255,65,0.14)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    backdropFilter: "blur(8px)",
                    transition: `all 0.65s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = ach.accentColor;
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = `0 16px 48px ${ach.accentColor}22`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,255,65,0.14)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Accent bar */}
                  <div style={{ height: "3px", background: `linear-gradient(90deg, ${ach.accentColor}, ${ach.accentColor}55, transparent)` }} />

                  <div style={{ padding: "24px 26px" }}>
                    {/* Top row */}
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px", gap: "12px" }}>
                      {/* Emoji */}
                      <div style={{
                        width: "52px", height: "52px", borderRadius: "14px", flexShrink: 0,
                        background: `${ach.accentColor}15`, border: `1px solid ${ach.accentColor}30`,
                        display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px",
                      }}>
                        {ach.emoji}
                      </div>
                      {/* Badges */}
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                        <span style={{ padding: "4px 12px", background: ach.typeBg, border: `1px solid ${ach.typeBorder}`, borderRadius: "20px", fontSize: "11px", color: ach.typeColor, fontFamily: "monospace", fontWeight: "700" }}>
                          {ach.type}
                        </span>
                        <span style={{ padding: "4px 12px", background: `${ach.levelColor}15`, border: `1px solid ${ach.levelColor}35`, borderRadius: "20px", fontSize: "11px", color: ach.levelColor, fontFamily: "monospace", fontWeight: "600" }}>
                          {ach.level}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 style={{ fontSize: "16px", fontWeight: "800", color: "#ffffff", marginBottom: "6px", lineHeight: 1.3 }}>
                      {ach.title}
                    </h3>
                    {/* Subtitle */}
                    <p style={{ fontSize: "12px", color: `${ach.accentColor}bb`, fontFamily: "monospace", marginBottom: "6px", fontWeight: "600" }}>
                      {ach.subtitle}
                    </p>
                    {/* Org */}
                    <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "14px" }}>
                      <i className={ach.orgIcon} style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }} />
                      <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", fontFamily: "monospace" }}>{ach.org}</span>
                    </div>

                    {/* Divider */}
                    <div style={{ height: "1px", background: "rgba(0,255,65,0.08)", marginBottom: "14px" }} />

                    {/* Points */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                      {ach.points.map((pt, pi) => (
                        <div key={pi} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                          <span style={{ color: ach.accentColor, fontSize: "10px", marginTop: "5px", flexShrink: 0 }}>▶</span>
                          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: "1.65" }}>{pt}</span>
                        </div>
                      ))}
                    </div>

                    {/* Badge bottom */}
                    <div style={{ paddingTop: "12px", borderTop: `1px solid ${ach.accentColor}18` }}>
                      <span style={{ fontSize: "12px", color: ach.accentColor, fontFamily: "monospace", fontWeight: "700", letterSpacing: "0.5px" }}>
                        {ach.badge}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }}>
            {stats.map((stat, i) => (
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
