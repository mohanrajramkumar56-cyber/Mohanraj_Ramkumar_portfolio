import { useNavigate, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Home", path: "/", icon: "home" },
  { label: "About", path: "/about", icon: "user" },
  { label: "Projects", path: "/projects", icon: "laptop" },
  { label: "Tech Stack", path: "/techstack", icon: "layer-group" },
  { label: "Education", path: "/education", icon: "graduation-cap" },
  { label: "Experience", path: "/experience", icon: "briefcase" },
  { label: "Achievements", path: "/achievements", icon: "trophy" },
  { label: "Certifications", path: "/certifications", icon: "certificate" },
  { label: "Resume", path: "/resume", icon: "file-pdf" },
  { label: "Contact", path: "/contact", icon: "envelope" },
];

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        height: "64px",
        background: "rgba(0,0,0,0.88)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(0,255,65,0.18)",
      }}
    >
      {/* Logo */}
      <div
        style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        <span
          style={{
            color: "#00FF41",
            fontFamily: "monospace",
            fontSize: "20px",
            fontWeight: "800",
            letterSpacing: "2px",
            textShadow: "0 0 12px rgba(0,255,65,0.6)",
          }}
        >
          MR
        </span>
        <span style={{ color: "rgba(255,255,255,0.45)", fontFamily: "monospace", fontSize: "12px" }}>
          // AI Engineer
        </span>
      </div>

      {/* Nav links */}
      <div style={{ display: "flex", gap: "4px" }}>
        {NAV_ITEMS.map((item) => {
          const active = location.pathname === item.path;
          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              style={{
                padding: "8px 18px",
                background: active ? "rgba(0,255,65,0.12)" : "transparent",
                border: active ? "1px solid rgba(0,255,65,0.4)" : "1px solid transparent",
                borderRadius: "6px",
                color: active ? "#00FF41" : "rgba(255,255,255,0.65)",
                fontSize: "13px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "monospace",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#00FF41";
                e.currentTarget.style.borderColor = "rgba(0,255,65,0.4)";
                e.currentTarget.style.background = "rgba(0,255,65,0.1)";
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  e.currentTarget.style.color = "rgba(255,255,255,0.65)";
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.background = "transparent";
                } else {
                  e.currentTarget.style.color = "#00FF41";
                  e.currentTarget.style.borderColor = "rgba(0,255,65,0.4)";
                  e.currentTarget.style.background = "rgba(0,255,65,0.12)";
                }
              }}
            >
              <i className={"fas fa-" + item.icon} style={{ fontSize: "12px" }} />
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
