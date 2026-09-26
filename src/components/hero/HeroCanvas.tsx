"use client";

import React from "react";
import HeroConstellationCanvas from "./HeroConstellationCanvas";
import { InventionMode } from "@/types/hero";

interface HeroCanvasProps {
  activeMode?: InventionMode;
}

export default function HeroCanvas({ activeMode = "ACOUSTIC" }: HeroCanvasProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#F8F9FA]">
      {/* 1. Architectural Swiss Grid Floor (Light Theme Precision Matrix) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 80% 65% at 50% 48%, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 65% at 50% 48%, black 40%, transparent 85%)",
        }}
      />

      {/* 2. Precision Geometric Crosshairs & Telemetry Marks */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute left-8 top-32 w-4 h-4 border-l border-t border-neutral-400" />
        <div className="absolute right-8 top-32 w-4 h-4 border-r border-t border-neutral-400" />
        <div className="absolute left-8 bottom-12 w-4 h-4 border-l border-b border-neutral-400" />
        <div className="absolute right-8 bottom-12 w-4 h-4 border-r border-b border-neutral-400" />
      </div>

      {/* 3. Subtle Ambient Studio Depth Lighting (Pure Clean Light Theme) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(circle 900px at 50% 45%, rgba(240, 244, 255, 0.9) 0%, rgba(248, 249, 250, 0) 70%)",
        }}
      />

      {/* 4. Interactive 2D Neural Constellation & Data-Pulse Canvas */}
      <HeroConstellationCanvas activeMode={activeMode} />

      {/* 5. Smooth Transition Gradient to Page Content */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#F8F9FA] to-transparent pointer-events-none z-1" />
    </div>
  );
}
