"use client";

import React from "react";
import HeroConstellationCanvas from "./HeroConstellationCanvas";
import { InventionMode } from "@/types/hero";

interface HeroCanvasProps {
  activeMode?: InventionMode;
}

const MODE_TINT: Record<InventionMode, { a: string; b: string; c: string }> = {
  ACOUSTIC: {
    a: "rgba(216,255,62,0.35)",
    b: "rgba(109,40,217,0.16)",
    c: "rgba(34,211,238,0.18)",
  },
  SPATIAL: {
    a: "rgba(34,211,238,0.30)",
    b: "rgba(109,40,217,0.15)",
    c: "rgba(216,255,62,0.28)",
  },
  QUANTUM: {
    a: "rgba(109,40,217,0.22)",
    b: "rgba(216,255,62,0.32)",
    c: "rgba(34,211,238,0.20)",
  },
};

export default function HeroCanvas({ activeMode = "ACOUSTIC" }: HeroCanvasProps) {
  const tint = MODE_TINT[activeMode];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#f4f2ed]">
      {/* 0. Paper gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #FBFAF6 0%, #F4F2ED 42%, #ECE9DF 78%, #F4F2ED 100%)",
        }}
      />

      {/* 1. Daylight aurora — lime / violet / cyan washes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[520px] blur-[120px] rounded-full transition-all duration-1000"
          style={{ background: `radial-gradient(closest-side, ${tint.b}, transparent 72%)` }}
        />
        <div
          className="absolute top-[10%] -left-48 w-[600px] h-[600px] blur-[130px] rounded-full animate-blob opacity-70"
          style={{ background: "radial-gradient(closest-side, rgba(216,255,62,0.5), transparent 72%)" }}
        />
        <div
          className="absolute top-[6%] -right-48 w-[640px] h-[640px] blur-[130px] rounded-full animate-blob animation-delay-2000 opacity-60"
          style={{ background: "radial-gradient(closest-side, rgba(196,181,253,0.55), transparent 72%)" }}
        />
        <div
          className="absolute top-[34%] left-1/2 -translate-x-1/2 w-[820px] h-[300px] blur-[100px] rounded-full opacity-70 transition-all duration-1000"
          style={{ background: `linear-gradient(90deg, transparent, ${tint.a} 30%, ${tint.a} 70%, transparent)` }}
        />
        {/* ink sun core */}
        <div
          className="absolute top-[24%] left-1/2 -translate-x-1/2 w-[420px] h-[220px] blur-[90px] rounded-full opacity-30"
          style={{ background: "radial-gradient(closest-side, rgba(11,11,15,0.25), transparent 70%)" }}
        />
        {/* violet daydream wash — right depth */}
        <div
          className="absolute top-[48%] -right-32 w-[480px] h-[480px] blur-[120px] rounded-full opacity-50 animate-blob animation-delay-4000"
          style={{ background: "radial-gradient(closest-side, rgba(139,92,246,0.22), transparent 70%)" }}
        />
        {/* lime kiss — left of headline */}
        <div
          className="absolute bottom-[18%] -left-32 w-[420px] h-[420px] blur-[110px] rounded-full opacity-50"
          style={{ background: "radial-gradient(closest-side, rgba(216,255,62,0.4), transparent 70%)" }}
        />
      </div>

      {/* 2. Paper grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(11,11,15,0.055) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(11,11,15,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 85% 62% at 50% 40%, black 25%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 62% at 50% 40%, black 25%, transparent 78%)",
        }}
      />

      {/* 3. Horizon ink line */}
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(11,11,15,0.4) 30%, rgba(109,40,217,0.5) 50%, rgba(77,124,15,0.5) 70%, transparent)" }}
      />

      {/* 4. HUD marks */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute left-6 sm:left-10 top-28 w-5 h-5 border-l border-t border-black/25" />
        <div className="absolute right-6 sm:right-10 top-28 w-5 h-5 border-r border-t border-black/25" />
        <div className="absolute left-6 sm:left-10 bottom-16 w-5 h-5 border-l border-b border-black/25" />
        <div className="absolute right-6 sm:right-10 bottom-16 w-5 h-5 border-r border-b border-black/25" />
      </div>

      {/* 5. Interactive neural constellation */}
      <div className="absolute inset-0">
        <HeroConstellationCanvas activeMode={activeMode} />
      </div>

      {/* 6. Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#f4f2ed] via-[#f4f2ed]/70 to-transparent pointer-events-none" />
    </div>
  );
}
