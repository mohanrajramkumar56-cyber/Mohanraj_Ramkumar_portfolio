import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import AnimatedBackground from "../components/AnimatedBackground";

interface Cert {
  id: number;
  title: string;
  issuer: string;
  issuerIcon: string;
  issuerColor: string;
  credentialId?: string;
  issued: string;
  expires?: string;
  description: string;
  skills: string[];
  image: string;
  pdf?: string;
  accentColor: string;
  category: string;
}

const certs: Cert[] = [
  {
    id: 0,
    category: "Professional",
    title: "Databricks Certified Generative AI Engineer Associate",
    issuer: "Databricks",
    issuerIcon: "fas fa-database",
    issuerColor: "#FF3621",
    credentialId: "180123922",
    issued: "April 18, 2026",
    expires: "April 18, 2028",
    description: "Industry-recognized certification validating expertise in building Generative AI applications using Databricks platform, LLMs, and MLflow.",
    skills: ["Generative AI", "LLMs", "Databricks", "MLflow", "RAG", "Prompt Engineering"],
    image: "/certs/databricks-genai.png",
    pdf: "/certs/databricks-genai.png",
    accentColor: "#FF3621",
  },
  {
    id: 1,
    category: "Professional",
    title: "Data Preparation for Machine Learning",
    issuer: "Databricks",
    issuerIcon: "fas fa-database",
    issuerColor: "#FF3621",
    issued: "2026",
    description: "Certification covering data ingestion, cleaning, feature engineering, and preparation workflows for ML pipelines on Databricks.",
    skills: ["Data Preparation", "Feature Engineering", "ETL", "Databricks", "Spark"],
    image: "/certs/databricks-dataprep.png",
    pdf: "/certs/databricks-dataprep.pdf",
    accentColor: "#FF3621",
  },
  {
    id: 2,
    category: "Professional",
    title: "Advanced Machine Learning Operations",
    issuer: "Databricks",
    issuerIcon: "fas fa-database",
    issuerColor: "#FF3621",
    issued: "2026",
    description: "Advanced certification in MLOps practices including model deployment, monitoring, CI/CD for ML, and production ML lifecycle management.",
    skills: ["MLOps", "Model Deployment", "CI/CD", "Model Monitoring", "MLflow"],
    image: "/certs/databricks-mlops.png",
    pdf: "/certs/databricks-mlops.pdf",
    accentColor: "#FF3621",
  },
  {
    id: 3,
    category: "Cloud",
    title: "AWS Fundamentals of AI and ML",
    issuer: "Amazon Web Services",
    issuerIcon: "fab fa-aws",
    issuerColor: "#FF9900",
    issued: "2026",
    description: "AWS Training & Certification covering the fundamentals of Artificial Intelligence and Machine Learning on the AWS cloud platform.",
    skills: ["AI/ML", "AWS", "Cloud Computing", "Machine Learning", "AWS Services"],
    image: "/certs/aws-ai-ml.png",
    accentColor: "#FF9900",
  },
  {
    id: 4,
    category: "Online",
    title: "Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Forage / Tata",
    issuerIcon: "fas fa-chart-bar",
    issuerColor: "#0066CC",
    issued: "2025",
    description: "Tata Group job simulation on Forage — data visualisation techniques and communicating business insights through effective visual storytelling.",
    skills: ["Data Visualisation", "Business Intelligence", "Tableau", "Data Storytelling"],
    image: "/certs/forage-tata-datavis.png",
    accentColor: "#0066CC",
  },
  {
    id: 5,
    category: "Online",
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Forage / Tata",
    issuerIcon: "fas fa-shield-alt",
    issuerColor: "#0066CC",
    issued: "2025",
    description: "Tata Group cybersecurity analyst job simulation on Forage — real-world security analysis tasks and incident response scenarios.",
    skills: ["Cybersecurity", "Security Analysis", "Incident Response", "Risk Assessment"],
    image: "/certs/forage-tata-cybersec.png",
    accentColor: "#0066CC",
  },
  {
    id: 6,
    category: "Online",
    title: "MongoDB Basics for Students",
    issuer: "MongoDB",
    issuerIcon: "fas fa-leaf",
    issuerColor: "#00ED64",
    issued: "2025",
    description: "MongoDB University certification covering NoSQL database fundamentals, CRUD operations, schema design, and MongoDB query language.",
    skills: ["MongoDB", "NoSQL", "Database", "CRUD", "Schema Design"],
    image: "/certs/mongodb-basics.png",
    accentColor: "#00ED64",
  },
  {
    id: 7,
    category: "Coursera",
    title: "Coursera Certificate",
    issuer: "Coursera",
    issuerIcon: "fas fa-graduation-cap",
    issuerColor: "#0056D2",
    credentialId: "JNGC6G8C5O6R",
    issued: "2026",
    description: "Professional certification completed via Coursera.",
    skills: ["To be updated"],
    image: "/certs/coursera-1.png",
    pdf: "/certs/coursera-1.pdf",
    accentColor: "#0056D2",
  },
  {
    id: 8,
    category: "Coursera",
    title: "Coursera Certificate",
    issuer: "Coursera",
    issuerIcon: "fas fa-graduation-cap",
    issuerColor: "#0056D2",
    credentialId: "JH8AM97A5I75",
    issued: "2026",
    description: "Professional certification completed via Coursera.",
    skills: ["To be updated"],
    image: "/certs/coursera-2.png",
    pdf: "/certs/coursera-2.pdf",
    accentColor: "#0056D2",
  },
  {
    id: 9,
    category: "Coursera",
    title: "Coursera Certificate",
    issuer: "Coursera",
    issuerIcon: "fas fa-graduation-cap",
    issuerColor: "#0056D2",
    credentialId: "A0MSCUI3DAI4",
    issued: "2026",
    description: "Professional certification completed via Coursera.",
    skills: ["To be updated"],
    image: "/certs/coursera-3.png",
    pdf: "/certs/coursera-3.pdf",
    accentColor: "#0056D2",
  },
  {
    id: 10,
    category: "Event",
    title: "ECLearnix Hackathon 360° — Round 1 Participation",
    issuer: "ECLearnix",
    issuerIcon: "fas fa-code",
    issuerColor: "#A855F7",
    issued: "2025",
    description: "Certificate of participation for Round 1 of the ECLearnix Hackathon 360° competition.",
    skills: ["Hackathon", "Problem Solving", "Team Collaboration"],
    image: "/certs/eclearnix-hackathon.png",
    accentColor: "#A855F7",
  },
  {
    id: 11,
    category: "Event",
    title: "HACKTOUR IND — Step Into the Future with Web3",
    issuer: "HACKTOUR IND",
    issuerIcon: "fas fa-cubes",
    issuerColor: "#06B6D4",
    issued: "2025",
    description: "Certificate of participation for the Web3 workshop — Step Into the Future with Web3 at HACKTOUR IND.",
    skills: ["Web3", "Blockchain", "Decentralized Technology"],
    image: "/certs/hacktour-web3.png",
    accentColor: "#06B6D4",
  },
  {
    id: 12,
    category: "Event",
    title: "iNurture Speed Math Workshop",
    issuer: "iNurture",
    issuerIcon: "fas fa-calculator",
    issuerColor: "#10B981",
    issued: "2025",
    description: "Certificate of participation for the iNurture Speed Math Workshop.",
    skills: ["Mathematics", "Problem Solving", "Analytical Thinking"],
    image: "/certs/inurture-speedmath.png",
    accentColor: "#10B981",
  },
  {
    id: 13,
    category: "Event",
    title: "Certificate of Attendance — Launchpad 2025",
    issuer: "Launchpad 2025",
    issuerIcon: "fas fa-rocket",
    issuerColor: "#F59E0B",
    issued: "2025",
    description: "Certificate of attendance for Launchpad 2025 — a startup and innovation event.",
    skills: ["Entrepreneurship", "Innovation", "Networking"],
    image: "/certs/wa-cert-1.jpg",
    accentColor: "#F59E0B",
  },
  {
    id: 14,
    category: "Event",
    title: "Sense-to-Cloud: Rapid IoT with Pi & AWS",
    issuer: "Workshop",
    issuerIcon: "fas fa-microchip",
    issuerColor: "#FF9900",
    issued: "2025",
    description: "Certificate of participation for the Sense-to-Cloud workshop — Rapid IoT development using Raspberry Pi and AWS cloud services.",
    skills: ["IoT", "AWS", "Raspberry Pi", "Cloud", "Embedded Systems"],
    image: "/certs/wa-cert-2.jpg",
    accentColor: "#FF9900",
  },
  {
    id: 15,
    category: "Event",
    title: "Beyond Abstraction — Router × Pivot Hacker House",
    issuer: "Beyond Abstraction",
    issuerIcon: "fas fa-cubes",
    issuerColor: "#FFD700",
    issued: "2025",
    description: "Certificate of participation for the Beyond Abstraction Router × Pivot Hacker House event.",
    skills: ["Blockchain", "Web3", "Hackathon", "Innovation"],
    image: "/certs/wa-cert-3.jpg",
    accentColor: "#FFD700",
  },
  {
    id: 16,
    category: "Event",
    title: "Certificate of Appreciation — Hack Beyond Limits",
    issuer: "Hack Beyond Limits",
    issuerIcon: "fas fa-users-cog",
    issuerColor: "#A855F7",
    issued: "2025",
    description: "Certificate of appreciation for contributions as Management Lead at the Hack Beyond Limits national-level hackathon with 100+ teams.",
    skills: ["Event Management", "Leadership", "Team Coordination"],
    image: "/certs/wa-cert-4.jpg",
    accentColor: "#A855F7",
  },
  {
    id: 17,
    category: "Event",
    title: "Hack with GDG Season-02 — 24-Hour Hackathon",
    issuer: "GDG",
    issuerIcon: "fab fa-google",
    issuerColor: "#4285F4",
    issued: "2025",
    description: "Certificate of participation for Hack with GDG Season-02, a 24-hour hackathon organized by Google Developer Group.",
    skills: ["Hackathon", "Problem Solving", "Rapid Prototyping", "GDG"],
    image: "/certs/wa-cert-5.jpg",
    accentColor: "#4285F4",
  },
  {
    id: 18,
    category: "Internship",
    title: "Data Science Internship Certificate",
    issuer: "Postulate",
    issuerIcon: "fas fa-chart-line",
    issuerColor: "#00CC33",
    issued: "May 2024 – Jul 2024",
    description: "Certificate for successfully completing the Data Science internship at Postulate — covering data analysis, preprocessing, visualization, and ML fundamentals.",
    skills: ["Data Science", "Python", "Pandas", "NumPy", "Data Visualization", "EDA"],
    image: "/certs/wa-cert-6.jpg",
    accentColor: "#00CC33",
  },
];

const CATEGORIES = ["All", "Professional", "Cloud", "Online", "Coursera", "Event", "Internship"];

export default function CertificationsPage() {
  const [visible, setVisible] = useState<number[]>([]);
  const [lightbox, setLightbox] = useState<Cert | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filtered = activeCategory === "All" ? certs : certs.filter(c => c.category === activeCategory);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    const observers = cardRefs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setVisible((v) => [...v, i]); obs.disconnect(); } },
        { threshold: 0.08 }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [activeCategory]);

  useEffect(() => {
    setVisible([]);
    setTimeout(() => {
      cardRefs.current.forEach((ref, i) => {
        if (!ref) return;
        const obs = new IntersectionObserver(
          ([entry]) => { if (entry.isIntersecting) { setVisible((v) => [...v, i]); obs.disconnect(); } },
          { threshold: 0.08 }
        );
        obs.observe(ref);
      });
    }, 50);
  }, [activeCategory]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div style={{ width: "100vw", minHeight: "100vh", position: "relative", background: "#000000" }}>
      <AnimatedBackground />
      <NavBar />

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)}
          style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.93)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", backdropFilter: "blur(16px)", animation: "fadeIn 0.2s ease" }}>
          <div onClick={(e) => e.stopPropagation()}
            style={{ position: "relative", maxWidth: "920px", width: "100%", background: "rgba(0,0,0,0.95)", border: `1px solid ${lightbox.accentColor}44`, borderRadius: "20px", overflow: "hidden", boxShadow: `0 0 80px ${lightbox.accentColor}22`, animation: "scaleIn 0.25s cubic-bezier(0.16,1,0.3,1)", maxHeight: "90vh", display: "flex", flexDirection: "column" }}>
            {/* Header */}
            <div style={{ padding: "18px 24px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
              <div>
                <h3 style={{ fontSize: "15px", fontWeight: "700", color: "#fff", marginBottom: "3px" }}>{lightbox.title}</h3>
                <span style={{ fontSize: "12px", color: lightbox.accentColor, fontFamily: "monospace" }}>{lightbox.issuer}</span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                {lightbox.pdf && (
                  <a href={lightbox.pdf} download style={{ padding: "7px 16px", background: "#00FF41", border: "none", borderRadius: "8px", color: "#000", fontSize: "12px", fontFamily: "monospace", fontWeight: "700", cursor: "pointer", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
                    <i className="fas fa-download" /> Download
                  </a>
                )}
                <button onClick={() => setLightbox(null)}
                  style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", cursor: "pointer", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  ×
                </button>
              </div>
            </div>
            {/* Image */}
            <div style={{ overflowY: "auto", padding: "20px" }}>
              <img src={lightbox.image} alt={lightbox.title}
                style={{ width: "100%", borderRadius: "10px", display: "block", filter: "contrast(1.06) saturate(1.12) brightness(1.02)" }} />
              {/* Meta */}
              <div style={{ display: "flex", gap: "12px", marginTop: "16px", flexWrap: "wrap" }}>
                {lightbox.credentialId && (
                  <div style={{ padding: "8px 14px", background: "rgba(255,255,255,0.04)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", fontFamily: "monospace", marginBottom: "3px" }}>CREDENTIAL ID</div>
                    <div style={{ fontSize: "13px", color: "#fff", fontFamily: "monospace", fontWeight: "600" }}>{lightbox.credentialId}</div>
                  </div>
                )}
                <div style={{ padding: "8px 14px", background: "rgba(255,255,255,0.04)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", fontFamily: "monospace", marginBottom: "3px" }}>ISSUED</div>
                  <div style={{ fontSize: "13px", color: "#fff", fontFamily: "monospace", fontWeight: "600" }}>{lightbox.issued}</div>
                </div>
                {lightbox.expires && (
                  <div style={{ padding: "8px 14px", background: "rgba(255,255,255,0.04)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", fontFamily: "monospace", marginBottom: "3px" }}>EXPIRES</div>
                    <div style={{ fontSize: "13px", color: "#fff", fontFamily: "monospace", fontWeight: "600" }}>{lightbox.expires}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div style={{ position: "relative", zIndex: 2, width: "100%", paddingTop: "64px" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "64px 24px 100px" }}>

          {/* Header */}
          <div style={{ marginBottom: "48px", textAlign: "center" }}>
            <div style={{ fontFamily: "monospace", color: "rgba(0,255,65,0.55)", fontSize: "12px", marginBottom: "12px", letterSpacing: "3px" }}>// certifications.tsx</div>
            <h1 style={{ fontSize: "clamp(40px,6vw,68px)", fontWeight: "900", color: "#ffffff", letterSpacing: "-2px", lineHeight: 1, marginBottom: "16px" }}>
              My <span style={{ color: "#00FF41", textShadow: "0 0 40px rgba(0,255,65,0.5)" }}>Certifications</span>
            </h1>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", fontFamily: "monospace" }}>
              19 certificates · Click any card to view full size
            </p>
            <div style={{ margin: "24px auto 0", width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #00FF41, transparent)" }} />
          </div>

          {/* Filter tabs */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "40px" }}>
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{ padding: "8px 20px", borderRadius: "20px", border: `1px solid ${activeCategory === cat ? "#00FF41" : "rgba(0,255,65,0.2)"}`, background: activeCategory === cat ? "rgba(0,255,65,0.15)" : "transparent", color: activeCategory === cat ? "#00FF41" : "rgba(255,255,255,0.5)", fontFamily: "monospace", fontSize: "12px", fontWeight: "700", cursor: "pointer", transition: "all 0.2s" }}>
                {cat} {cat !== "All" && `(${certs.filter(c => c.category === cat).length})`}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "22px" }}>
            {filtered.map((cert, i) => {
              const isVisible = visible.includes(i);
              return (
                <div key={cert.id} ref={(el) => { cardRefs.current[i] = el; }}
                  style={{ background: "rgba(0,0,0,0.72)", border: "1px solid rgba(0,255,65,0.14)", borderRadius: "16px", overflow: "hidden", backdropFilter: "blur(8px)", opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(24px)", transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.06}s`, display: "flex", flexDirection: "column", cursor: "pointer" }}
                  onClick={() => setLightbox(cert)}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = cert.accentColor; e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = `0 16px 48px ${cert.accentColor}22`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,255,65,0.14)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  {/* Accent bar */}
                  <div style={{ height: "3px", background: `linear-gradient(90deg, ${cert.accentColor}, ${cert.accentColor}55, transparent)` }} />

                  {/* Image */}
                  <div style={{ position: "relative", overflow: "hidden", height: "170px", background: `${cert.accentColor}08` }}>
                    <img src={cert.image} alt={cert.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block", filter: "contrast(1.06) saturate(1.12) brightness(1.02)", transition: "transform 0.4s ease" }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                    />
                    {/* Hover overlay */}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
                    {/* View hint */}
                    <div style={{ position: "absolute", bottom: "8px", right: "8px", padding: "4px 10px", background: "rgba(0,0,0,0.75)", borderRadius: "6px", fontSize: "10px", color: "#00FF41", fontFamily: "monospace", display: "flex", alignItems: "center", gap: "5px" }}>
                      <i className="fas fa-expand-alt" style={{ fontSize: "9px" }} /> View Full
                    </div>
                    {/* Category tag */}
                    <div style={{ position: "absolute", top: "8px", left: "8px", padding: "3px 9px", background: "rgba(0,0,0,0.8)", borderRadius: "6px", fontSize: "10px", color: cert.accentColor, fontFamily: "monospace", fontWeight: "700", border: `1px solid ${cert.accentColor}44` }}>
                      {cert.category}
                    </div>
                  </div>

                  <div style={{ padding: "18px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
                    {/* Issuer */}
                    <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "10px" }}>
                      <i className={cert.issuerIcon} style={{ fontSize: "13px", color: cert.accentColor }} />
                      <span style={{ fontSize: "12px", color: cert.accentColor, fontFamily: "monospace", fontWeight: "700" }}>{cert.issuer}</span>
                      {cert.expires && <span style={{ marginLeft: "auto", fontSize: "10px", padding: "2px 8px", background: "rgba(0,255,65,0.1)", border: "1px solid rgba(0,255,65,0.25)", borderRadius: "10px", color: "#00FF41", fontFamily: "monospace" }}>Valid</span>}
                    </div>
                    {/* Title */}
                    <h3 style={{ fontSize: "14px", fontWeight: "800", color: "#ffffff", marginBottom: "8px", lineHeight: 1.4, flex: 1 }}>{cert.title}</h3>
                    {/* Description */}
                    <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: "1.6", marginBottom: "12px" }}>{cert.description}</p>
                    {/* Skills */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "14px" }}>
                      {cert.skills.slice(0, 4).map((s) => (
                        <span key={s} style={{ padding: "3px 8px", background: `${cert.accentColor}10`, border: `1px solid ${cert.accentColor}25`, color: `${cert.accentColor}cc`, fontSize: "10px", fontFamily: "monospace", borderRadius: "4px", fontWeight: "600" }}>{s}</span>
                      ))}
                    </div>
                    {/* Footer */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "10px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                      <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", fontFamily: "monospace" }}>
                        <i className="fas fa-calendar" style={{ marginRight: "5px" }} />{cert.issued}
                      </span>
                      <span style={{ fontSize: "11px", color: "#00FF41", fontFamily: "monospace", display: "flex", alignItems: "center", gap: "5px" }}>
                        <i className="fas fa-eye" style={{ fontSize: "10px" }} /> Click to view
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px", marginTop: "60px" }}>
            {[
              { icon: "fas fa-certificate", value: "19", label: "Total Certs", sub: "All platforms" },
              { icon: "fas fa-database", value: "3", label: "Databricks", sub: "Professional" },
              { icon: "fas fa-cloud", value: "1", label: "AWS", sub: "Cloud" },
              { icon: "fas fa-trophy", value: "9+", label: "Events", sub: "Hackathons & Workshops" },
            ].map((stat, i) => (
              <div key={i} style={{ padding: "22px 16px", background: "rgba(0,0,0,0.65)", border: "1px solid rgba(0,255,65,0.14)", borderRadius: "14px", textAlign: "center", transition: "all 0.25s", cursor: "default" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor="#00FF41"; e.currentTarget.style.background="rgba(0,255,65,0.07)"; e.currentTarget.style.transform="translateY(-4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(0,255,65,0.14)"; e.currentTarget.style.background="rgba(0,0,0,0.65)"; e.currentTarget.style.transform="translateY(0)"; }}
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

      <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes scaleIn { from { opacity:0; transform:scale(0.93) } to { opacity:1; transform:scale(1) } }
      `}</style>
    </div>
  );
}


