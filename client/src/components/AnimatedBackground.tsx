import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", resize);

    type Particle = { x:number; y:number; z:number; vx:number; vy:number; vz:number; r:number; opacity:number };
    const COUNT = 90;
    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      z: Math.random() * 1200 + 100,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      vz: Math.random() * 0.8 + 0.2,
      r: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.6 + 0.1,
    }));

    type Orb = { x:number; y:number; r:number; angle:number; speed:number; opacity:number };
    const orbs: Orb[] = Array.from({ length: 6 }, (_, i) => ({
      x: (W / 6) * i + W / 12,
      y: H * 0.3 + Math.random() * H * 0.4,
      r: 80 + Math.random() * 120,
      angle: Math.random() * Math.PI * 2,
      speed: 0.003 + Math.random() * 0.004,
      opacity: 0.04 + Math.random() * 0.05,
    }));

    let gridOffset = 0;
    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // ── Perspective grid
      gridOffset = (gridOffset + 0.4) % 60;
      const horizon = H * 0.55;
      const vanishX = W / 2;
      const gridLines = 18;
      const spread = 1.6;
      for (let i = 0; i <= gridLines; i++) {
        const t = i / gridLines;
        const bx = W * (t * spread - (spread - 1) / 2);
        ctx.beginPath();
        ctx.moveTo(vanishX, horizon);
        ctx.lineTo(bx, H + 40);
        const alpha = 0.03 + (1 - Math.abs(t - 0.5) * 2) * 0.08;
        ctx.strokeStyle = `rgba(0,255,65,${alpha})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }
      for (let j = 0; j < 14; j++) {
        const rawT = (j / 14 + gridOffset / 60) % 1;
        const t = Math.pow(rawT, 1.5);
        const y = horizon + (H - horizon + 40) * t;
        const xLeft = vanishX - vanishX * 1.6 * t;
        const xRight = vanishX + vanishX * 1.6 * t;
        ctx.beginPath();
        ctx.moveTo(xLeft, y);
        ctx.lineTo(xRight, y);
        ctx.strokeStyle = `rgba(0,255,65,${t * 0.13})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      // ── Orbs
      orbs.forEach((orb) => {
        orb.angle += orb.speed;
        const ox = orb.x + Math.cos(orb.angle) * 40;
        const oy = orb.y + Math.sin(orb.angle * 0.7) * 25;
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r);
        grad.addColorStop(0, `rgba(0,255,65,${orb.opacity})`);
        grad.addColorStop(0.5, `rgba(0,200,50,${orb.opacity * 0.4})`);
        grad.addColorStop(1, "rgba(0,255,65,0)");
        ctx.beginPath();
        ctx.arc(ox, oy, orb.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // ── 3D particles
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy; p.z -= p.vz;
        if (p.z < 1) p.z = 1200;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        const scale = 600 / p.z;
        const px = (p.x - W / 2) * scale + W / 2;
        const py = (p.y - H / 2) * scale + H / 2;
        const radius = p.r * scale;
        const alpha = p.opacity * Math.min(1, scale * 0.6);
        if (px < -10 || px > W + 10 || py < -10 || py > H + 10) return;
        const grd = ctx.createRadialGradient(px, py, 0, px, py, radius * 3);
        grd.addColorStop(0, `rgba(0,255,65,${alpha})`);
        grd.addColorStop(1, "rgba(0,255,65,0)");
        ctx.beginPath(); ctx.arc(px, py, radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = grd; ctx.fill();
        ctx.beginPath(); ctx.arc(px, py, Math.max(0.3, radius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,255,65,${Math.min(1, alpha * 2)})`; ctx.fill();
      });

      // ── Connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]; const b = particles[j];
          const dx = a.x - b.x; const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120 && Math.abs(a.z - b.z) < 200) {
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0,255,65,${(1 - dist / 120) * 0.06})`;
            ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "fixed", inset: 0, zIndex: 1, background: "rgba(0,0,0,0.60)", pointerEvents: "none" }} />
    </>
  );
}
