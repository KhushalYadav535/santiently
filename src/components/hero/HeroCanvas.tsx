"use client";

import React, { useEffect, useRef } from "react";

interface BlobOrb {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  speed: number;
  angle: number;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with spring inertia
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 220,
      active: false,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Google Labs iconic fluid palette
    const blobColors = [
      "rgba(66, 133, 244, 0.28)",  // Google Blue
      "rgba(147, 51, 234, 0.24)",  // Gemini Violet
      "rgba(236, 72, 153, 0.22)",  // Rose Pink
      "rgba(6, 182, 212, 0.22)",   // Soft Cyan
      "rgba(251, 188, 5, 0.20)",   // Google Warm Amber
      "rgba(52, 168, 83, 0.18)",   // Google Emerald
    ];

    // Create 6 organic liquid blobs that rotate and undulate
    const blobs: BlobOrb[] = [
      { x: width * 0.35, y: height * 0.35, baseX: width * 0.35, baseY: height * 0.35, vx: 0, vy: 0, radius: 240, baseRadius: 240, color: blobColors[0], speed: 0.008, angle: 0 },
      { x: width * 0.65, y: height * 0.32, baseX: width * 0.65, baseY: height * 0.32, vx: 0, vy: 0, radius: 280, baseRadius: 280, color: blobColors[1], speed: 0.006, angle: Math.PI * 0.6 },
      { x: width * 0.50, y: height * 0.55, baseX: width * 0.50, baseY: height * 0.55, vx: 0, vy: 0, radius: 260, baseRadius: 260, color: blobColors[2], speed: 0.009, angle: Math.PI * 1.2 },
      { x: width * 0.25, y: height * 0.65, baseX: width * 0.25, baseY: height * 0.65, vx: 0, vy: 0, radius: 210, baseRadius: 210, color: blobColors[3], speed: 0.007, angle: Math.PI * 0.4 },
      { x: width * 0.75, y: height * 0.60, baseX: width * 0.75, baseY: height * 0.60, vx: 0, vy: 0, radius: 230, baseRadius: 230, color: blobColors[4], speed: 0.005, angle: Math.PI * 1.5 },
      { x: width * 0.52, y: height * 0.25, baseX: width * 0.52, baseY: height * 0.25, vx: 0, vy: 0, radius: 200, baseRadius: 200, color: blobColors[5], speed: 0.007, angle: Math.PI * 0.9 },
    ];

    // Floating subtle sparkle dust particles
    const sparks = Array.from({ length: 24 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 1,
      vy: -(0.2 + Math.random() * 0.3),
      alpha: Math.random() * 0.4 + 0.2,
      color: ["#4285F4", "#9333EA", "#06B6D4", "#FBBC05"][Math.floor(Math.random() * 4)],
    }));

    let tick = 0;

    const render = () => {
      tick += 0.01;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // Render fluid organic blobs
      blobs.forEach((b, i) => {
        b.angle += b.speed;
        const orbitX = Math.sin(b.angle + tick * 0.5) * 80;
        const orbitY = Math.cos(b.angle * 0.8 + tick * 0.4) * 60;
        const targetX = b.baseX + orbitX;
        const targetY = b.baseY + orbitY;

        // Mouse repulsion
        const dx = mouse.x - b.x;
        const dy = mouse.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius && mouse.active) {
          const force = (1 - dist / mouse.radius) * 70;
          b.x -= (dx / dist) * force * 0.08;
          b.y -= (dy / dist) * force * 0.08;
        }

        b.x += (targetX - b.x) * 0.03;
        b.y += (targetY - b.y) * 0.03;
        b.radius = b.baseRadius + Math.sin(tick * 1.5 + i) * 20;

        // Draw soft radial blur blob
        const grad = ctx.createRadialGradient(
          b.x,
          b.y,
          0,
          b.x,
          b.y,
          b.radius
        );
        grad.addColorStop(0, b.color);
        grad.addColorStop(0.5, b.color.replace(/[\d\.]+\)$/, "0.12)"));
        grad.addColorStop(1, "rgba(248, 249, 250, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update and draw subtle upward floating sparkle dust
      sparks.forEach((s) => {
        s.y += s.vy;
        if (s.y < -10) {
          s.y = height + 10;
          s.x = Math.random() * width;
        }

        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha * (0.6 + Math.sin(tick * 2 + s.x) * 0.4);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Canvas with CSS blur and opening bloom animation */}
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-85 animate-bloom"
        style={{ filter: "blur(40px)" }}
      />
      {/* Subtle overlay gradient to ensure high text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-[#f8f9fa] pointer-events-none" />
    </div>
  );
}
