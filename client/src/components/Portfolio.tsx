import { useState, useEffect, useRef, useCallback } from "react";
import NavBar from "./NavBar";

export default function Portfolio() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [planeX, setPlaneX] = useState(-10);
  const [visibleLetters, setVisibleLetters] = useState<number[]>([]);
  const [fadeOut, setFadeOut] = useState(false);
  const [glitch, setGlitch] = useState(false);

  // Custom cursor
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const mousePos = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const rafRef = useRef<number>(0);

  const message = "WELCOME TO MOHANRAJ RAMKUMAR PORTFOLIO";
  const letters = message.split("");

  // Lock scroll on hero page only
  useEffect(() => {
    document.documentElement.classList.add('hero-page');
    return () => { document.documentElement.classList.remove('hero-page'); };
  }, []);

  // Cursor animation loop
  const animateCursor = useCallback(() => {
    const dx = mousePos.current.x - ringPos.current.x;
    const dy = mousePos.current.y - ringPos.current.y;
    ringPos.current.x += dx * 0.12;
    ringPos.current.y += dy * 0.12;

    if (cursorDotRef.current) {
      cursorDotRef.current.style.transform = `translate(${mousePos.current.x - 4}px, ${mousePos.current.y - 4}px)`;
    }
    if (cursorRingRef.current) {
      cursorRingRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
    }
    rafRef.current = requestAnimationFrame(animateCursor);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // spawn trail particle
      const trail = document.createElement("div");
      trail.style.cssText = `
        position:fixed;
        left:${e.clientX - 3}px;
        top:${e.clientY - 3}px;
        width:6px;height:6px;
        border-radius:50%;
        background:#00FF41;
        pointer-events:none;
        z-index:99998;
        opacity:0.7;
        box-shadow:0 0 8px #00FF41, 0 0 16px rgba(0,255,65,0.5);
        transition:opacity 0.5s ease, transform 0.5s ease;
      `;
      document.body.appendChild(trail);
      requestAnimationFrame(() => {
        trail.style.opacity = "0";
        trail.style.transform = "scale(0.2)";
      });
      setTimeout(() => trail.remove(), 520);
    };

    document.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(animateCursor);

    // hide native cursor
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
      document.body.style.cursor = "";
    };
  }, [animateCursor]);

  // Welcome animation
  useEffect(() => {
    const skipWelcome = sessionStorage.getItem("visited") === "true";
    if (skipWelcome) {
      setShowWelcome(false);
      return;
    }
    sessionStorage.setItem("visited", "true");

    // Glitch pulses
    const glitchTimers: ReturnType<typeof setTimeout>[] = [];
    [800, 1600, 2400, 3200, 4000].forEach((t) => {
      glitchTimers.push(setTimeout(() => {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 120);
      }, t));
    });

    let frame = 0;
    const totalFrames = 140;
    const planeInterval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setPlaneX(progress * 112 - 10);
      const count = Math.floor(progress * letters.length);
      setVisibleLetters(Array.from({ length: count }, (_, i) => i));
      if (frame >= totalFrames) clearInterval(planeInterval);
    }, 16);

    // fade out then hide
    setTimeout(() => setFadeOut(true), 5200);
    setTimeout(() => setShowWelcome(false), 5900);

    return () => {
      clearInterval(planeInterval);
      glitchTimers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "#000000",
      }}
    >
      {/* Custom cursor dot */}
      <div
        ref={cursorDotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#00FF41",
          boxShadow: "0 0 10px #00FF41, 0 0 20px rgba(0,255,65,0.8)",
          pointerEvents: "none",
          zIndex: 99999,
          willChange: "transform",
        }}
      />
      {/* Custom cursor ring */}
      <div
        ref={cursorRingRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "1.5px solid rgba(0,255,65,0.7)",
          boxShadow: "0 0 12px rgba(0,255,65,0.3)",
          pointerEvents: "none",
          zIndex: 99998,
          willChange: "transform",
        }}
      />

      {/* ── Video background ── */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <video
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero-dark.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.15)" }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.013) 2px, rgba(0,255,65,0.013) 4px)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* ── Nav ── */}
      {!showWelcome && <NavBar />}

      {/* ── WELCOME SCREEN ── */}
      {showWelcome && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#000000",
            overflow: "hidden",
            opacity: fadeOut ? 0 : 1,
            transition: "opacity 0.7s ease",
          }}
        >
          {/* Night-sky gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, #010801 0%, #020f02 35%, #041504 65%, #010801 100%)",
            }}
          />

          {/* Matrix rain columns */}
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: 0,
                left: (i * 5.8 + 1) + "%",
                width: "1px",
                height: "100%",
                background: "linear-gradient(180deg, transparent 0%, rgba(0,255,65,0.06) 30%, rgba(0,255,65,0.3) 65%, transparent 100%)",
                animation: `matrixDrop ${2.5 + (i % 5) * 0.6}s linear infinite`,
                animationDelay: `${(i * 0.3) % 2.5}s`,
                pointerEvents: "none",
              }}
            />
          ))}

          {/* Stars */}
          {[...Array(90)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: i % 9 === 0 ? "3px" : "1.5px",
                height: i % 9 === 0 ? "3px" : "1.5px",
                background: i % 4 === 0 ? "#00FF41" : "#ffffff",
                borderRadius: "50%",
                left: ((i * 13.7 + 7) % 100) + "%",
                top: ((i * 11.3 + 4) % 70) + "%",
                opacity: 0.15 + (i % 7) * 0.1,
                animation: `starTwinkle ${1.8 + (i % 5)}s ease-in-out infinite`,
                animationDelay: `${(i * 0.11) % 4}s`,
              }}
            />
          ))}

          {/* Horizontal scanline sweep */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,65,0.018) 3px, rgba(0,255,65,0.018) 4px)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          {/* Glitch horizontal bars */}
          {glitch && (
            <>
              <div style={{ position: "absolute", top: "38%", left: 0, right: 0, height: "4px", background: "rgba(0,255,65,0.35)", zIndex: 10, filter: "blur(1px)" }} />
              <div style={{ position: "absolute", top: "52%", left: "10%", right: "5%", height: "2px", background: "rgba(0,255,65,0.2)", zIndex: 10 }} />
              <div style={{ position: "absolute", top: "45%", left: 0, right: "20%", height: "3px", background: "rgba(0,255,65,0.15)", zIndex: 10 }} />
            </>
          )}

          {/* Corner brackets — HUD style */}
          {[
            { top: "8%", left: "4%", borderTop: "2px solid #00FF41", borderLeft: "2px solid #00FF41" },
            { top: "8%", right: "4%", borderTop: "2px solid #00FF41", borderRight: "2px solid #00FF41" },
            { bottom: "8%", left: "4%", borderBottom: "2px solid #00FF41", borderLeft: "2px solid #00FF41" },
            { bottom: "8%", right: "4%", borderBottom: "2px solid #00FF41", borderRight: "2px solid #00FF41" },
          ].map((s, i) => (
            <div key={i} style={{ position: "absolute", width: "40px", height: "40px", opacity: 0.6, ...s }} />
          ))}

          {/* Status line top */}
          <div style={{ position: "absolute", top: "8%", left: "50%", transform: "translateX(-50%)", fontFamily: "monospace", fontSize: "11px", color: "rgba(0,255,65,0.5)", letterSpacing: "3px", zIndex: 5 }}>
            SYS:BOOT // AI_PORTFOLIO_v2.0
          </div>

          {/* Plane contrail */}
          <div
            style={{
              position: "absolute",
              top: "calc(22% + 24px)",
              left: 0,
              width: Math.max(0, planeX) + "%",
              height: "2px",
              background: "linear-gradient(90deg, transparent 0%, rgba(0,255,65,0.05) 20%, rgba(0,255,65,0.6) 100%)",
              filter: "blur(2px)",
              zIndex: 2,
              transition: "width 0.05s linear",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "calc(22% + 27px)",
              left: 0,
              width: Math.max(0, planeX - 2) + "%",
              height: "8px",
              background: "linear-gradient(90deg, transparent 0%, rgba(0,255,65,0.03) 30%, rgba(0,255,65,0.18) 100%)",
              filter: "blur(6px)",
              zIndex: 2,
              transition: "width 0.05s linear",
            }}
          />

          {/* Plane */}
          <div
            style={{
              position: "absolute",
              top: "22%",
              left: planeX + "%",
              fontSize: "clamp(36px, 5.5vw, 58px)",
              zIndex: 4,
              transition: "left 0.05s linear",
              filter: "drop-shadow(0 0 20px rgba(0,255,65,1)) drop-shadow(0 0 40px rgba(0,255,65,0.6))",
              userSelect: "none",
            }}
          >
            ✈
          </div>

          {/* Main text block */}
          <div
            style={{
              position: "absolute",
              top: "44%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "92vw",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "2px",
              zIndex: 3,
              filter: glitch ? "blur(1.5px) brightness(1.4)" : "none",
              transition: "filter 0.08s",
            }}
          >
            {letters.map((letter, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  fontSize: letter === " " ? "0px" : "clamp(22px, 4.2vw, 52px)",
                  width: letter === " " ? "clamp(12px, 2.2vw, 22px)" : "auto",
                  fontWeight: "900",
                  fontFamily: "'Courier New', monospace",
                  color: i < 7 ? "#ffffff" : "#00FF41",
                  textShadow: i < 7
                    ? "0 0 20px rgba(255,255,255,0.6)"
                    : "0 0 20px rgba(0,255,65,0.9), 0 0 50px rgba(0,255,65,0.4), 0 0 80px rgba(0,255,65,0.2)",
                  opacity: visibleLetters.includes(i) ? 1 : 0,
                  transform: visibleLetters.includes(i) ? "translateY(0) scale(1)" : "translateY(-100px) scale(0.6)",
                  transition: visibleLetters.includes(i)
                    ? `opacity 0.4s ease-out ${i * 0.01}s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.01}s`
                    : "none",
                  letterSpacing: "3px",
                  lineHeight: 1.3,
                }}
              >
                {letter === " " ? "" : letter}
              </span>
            ))}
          </div>

          {/* Subtitle */}
          <div
            style={{
              position: "absolute",
              top: "62%",
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "monospace",
              fontSize: "clamp(10px, 1.5vw, 14px)",
              color: "rgba(0,255,65,0.55)",
              letterSpacing: "5px",
              whiteSpace: "nowrap",
              zIndex: 3,
              opacity: visibleLetters.length === letters.length ? 1 : 0,
              transition: "opacity 0.8s ease 0.3s",
            }}
          >
            AI / ML ENGINEER &nbsp;•&nbsp; GENERATIVE AI &nbsp;•&nbsp; INDIA
          </div>

          {/* Loading bar */}
          <div
            style={{
              position: "absolute",
              bottom: "14%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "clamp(200px, 30vw, 320px)",
              zIndex: 3,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <span style={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(0,255,65,0.45)", letterSpacing: "2px" }}>INITIALIZING</span>
              <span style={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(0,255,65,0.45)", letterSpacing: "2px" }}>
                {Math.round((visibleLetters.length / letters.length) * 100)}%
              </span>
            </div>
            <div style={{ width: "100%", height: "2px", background: "rgba(0,255,65,0.12)", borderRadius: "2px", overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  width: (visibleLetters.length / letters.length * 100) + "%",
                  background: "linear-gradient(90deg, #00FF41, rgba(0,255,65,0.6))",
                  boxShadow: "0 0 8px #00FF41",
                  borderRadius: "2px",
                  transition: "width 0.1s linear",
                }}
              />
            </div>
          </div>

          {/* Ground glow */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "30%",
              background: "linear-gradient(0deg, rgba(0,255,65,0.06) 0%, transparent 100%)",
              pointerEvents: "none",
            }}
          />
        </div>
      )}

      <style>{`
        * { cursor: none !important; }
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.8); }
        }
        @keyframes matrixDrop {
          0%   { opacity: 0; transform: translateY(-100%); }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { opacity: 0; transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
}
