"use client";

import React, { useEffect, useRef } from "react";
import { InventionMode } from "@/types/hero";

interface HeroConstellationCanvasProps {
  activeMode?: InventionMode;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  radius: number;
  pulsePhase: number;
  activity: number;
}

interface Packet {
  sourceIdx: number;
  targetIdx: number;
  progress: number;
  speed: number;
}

export default function HeroConstellationCanvas({
  activeMode = "ACOUSTIC",
}: HeroConstellationCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse coordinates in canvas space
    let mouse = { x: -1000, y: -1000, active: false };
    let clickRipple = { x: 0, y: 0, radius: 0, maxRadius: 260, active: false };

    const handleResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      clickRipple.x = e.clientX - rect.left;
      clickRipple.y = e.clientY - rect.top;
      clickRipple.radius = 0;
      clickRipple.active = true;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("click", handleClick);

    // Color definitions per mode (Ink on paper — light Awwwards)
    const getColors = (mode: InventionMode) => {
      switch (mode) {
        case "ACOUSTIC":
          return {
            node: "rgba(77, 124, 15, 0.7)",       // Leaf green
            nodeActive: "rgba(11, 11, 15, 0.9)",  // Ink
            line: "rgba(77, 124, 15, 0.14)",
            packet: "rgba(109, 40, 217, 0.9)",    // Violet packet
            pulse: "rgba(77, 124, 15, 0.07)",
          };
        case "SPATIAL":
          return {
            node: "rgba(14, 116, 144, 0.7)",      // Deep cyan
            nodeActive: "rgba(11, 11, 15, 0.9)",
            line: "rgba(14, 116, 144, 0.14)",
            packet: "rgba(14, 116, 144, 0.9)",
            pulse: "rgba(14, 116, 144, 0.07)",
          };
        case "QUANTUM":
          return {
            node: "rgba(109, 40, 217, 0.7)",      // Violet
            nodeActive: "rgba(11, 11, 15, 0.9)",
            line: "rgba(109, 40, 217, 0.14)",
            packet: "rgba(77, 124, 15, 0.9)",
            pulse: "rgba(109, 40, 217, 0.07)",
          };
      }
    };

    // Initialize Network Nodes
    const nodeCount = Math.floor(Math.max(36, Math.min(65, (width * height) / 22000)));
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      nodes.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        baseX: x,
        baseY: y,
        radius: Math.random() * 2.2 + 1.8,
        pulsePhase: Math.random() * Math.PI * 2,
        activity: Math.random() * 0.5,
      });
    }

    // Initialize Packets traveling along network lines
    const packets: Packet[] = [];
    const maxPackets = 12;

    const spawnPacket = () => {
      if (packets.length >= maxPackets || nodes.length < 2) return;
      const s = Math.floor(Math.random() * nodes.length);
      // Find a close neighbor
      let closestIdx = -1;
      let minDist = 180;
      for (let j = 0; j < nodes.length; j++) {
        if (j === s) continue;
        const dx = nodes[s].x - nodes[j].x;
        const dy = nodes[s].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minDist) {
          minDist = dist;
          closestIdx = j;
        }
      }
      if (closestIdx !== -1) {
        packets.push({
          sourceIdx: s,
          targetIdx: closestIdx,
          progress: 0,
          speed: 0.007 + Math.random() * 0.012,
        });
      }
    };

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      const colors = getColors(activeMode);
      const connectionDist = Math.min(170, Math.max(120, width / 9));

      // Handle Click Ripple
      if (clickRipple.active) {
        clickRipple.radius += 7;
        const alpha = Math.max(0, 1 - clickRipple.radius / clickRipple.maxRadius);
        ctx.save();
        ctx.beginPath();
        ctx.arc(clickRipple.x, clickRipple.y, clickRipple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(37, 99, 235, ${alpha * 0.35})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();

        if (clickRipple.radius >= clickRipple.maxRadius) {
          clickRipple.active = false;
        }
      }

      // Update Node positions & interaction
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Ambient gentle drift
        n.x += n.vx;
        n.y += n.vy;

        // Wrap or bounce around bounds
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;

        // Mouse magnetic elasticity
        if (mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxInfluence = 180;

          if (dist < maxInfluence) {
            const force = (1 - dist / maxInfluence) * 1.5;
            n.x += (dx / dist) * force;
            n.y += (dy / dist) * force;
            n.activity = Math.min(1, n.activity + 0.08);
          }
        }

        // Click ripple activation
        if (clickRipple.active) {
          const dx = n.x - clickRipple.x;
          const dy = n.y - clickRipple.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (Math.abs(dist - clickRipple.radius) < 35) {
            n.activity = 1;
          }
        }

        // Activity decay
        n.activity = Math.max(0, n.activity - 0.015);
      }

      // Draw Connections (Crisp Hairline Vectors)
      ctx.lineWidth = 0.75;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const baseAlpha = 1 - dist / connectionDist;
            const boost = Math.max(n1.activity, n2.activity) * 0.45;
            const finalAlpha = Math.min(0.65, baseAlpha * 0.28 + boost);

            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = colors.line.replace("0.14", finalAlpha.toFixed(3));
            ctx.stroke();
          }
        }
      }

      // Periodically spawn packets
      if (tick % 30 === 0 && Math.random() > 0.4) {
        spawnPacket();
      }

      // Draw & Update Packets
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }

        const s = nodes[pkt.sourceIdx];
        const t = nodes[pkt.targetIdx];
        if (!s || !t) {
          packets.splice(p, 1);
          continue;
        }

        const curX = s.x + (t.x - s.x) * pkt.progress;
        const curY = s.y + (t.y - s.y) * pkt.progress;

        ctx.beginPath();
        ctx.arc(curX, curY, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = colors.packet;
        ctx.fill();
      }

      // Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const pulse = Math.sin(tick * 0.04 + n.pulsePhase) * 0.5 + 0.5;
        const curRadius = n.radius + (n.activity > 0 ? n.activity * 1.8 : pulse * 0.6);

        // Core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, curRadius, 0, Math.PI * 2);
        ctx.fillStyle = n.activity > 0.2 ? colors.nodeActive : colors.node;
        ctx.fill();

        // Subtle outer pulse ring for active nodes
        if (n.activity > 0.1) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, curRadius + 4 + n.activity * 4, 0, Math.PI * 2);
          ctx.strokeStyle = colors.nodeActive.replace("0.95", (n.activity * 0.35).toFixed(3));
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Mouse Radar Aura (Crisp, High-Precision Hairline Reticle)
      if (mouse.active) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 60, 0, Math.PI * 2);
        ctx.strokeStyle = colors.line.replace("0.14", "0.35");
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.stroke();

        // Center crosshair
        ctx.beginPath();
        ctx.moveTo(mouse.x - 8, mouse.y);
        ctx.lineTo(mouse.x + 8, mouse.y);
        ctx.moveTo(mouse.x, mouse.y - 8);
        ctx.lineTo(mouse.x, mouse.y + 8);
        ctx.strokeStyle = colors.nodeActive.replace("0.95", "0.5");
        ctx.lineWidth = 1;
        ctx.setLineDash([]);
        ctx.stroke();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("click", handleClick);
    };
  }, [activeMode]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-auto"
      style={{ display: "block" }}
    />
  );
}
