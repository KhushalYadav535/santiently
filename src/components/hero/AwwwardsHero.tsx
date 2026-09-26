"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight, Play, Mic, FileText, TrendingUp } from "lucide-react";
import { InventionMode } from "@/types/hero";
import Magnetic from "@/components/awwwards/Magnetic";
import HeroInventionDeck from "./HeroInventionDeck";

interface Props {
  activeMode?: InventionMode;
  onModeChange?: (mode: InventionMode) => void;
  started?: boolean;
}

const MODES: { id: InventionMode; name: string; stat: string; icon: React.ElementType }[] = [
  { id: "ACOUSTIC", name: "VoCred 2.0", stat: "<280ms", icon: Mic },
  { id: "SPATIAL", name: "TextMitra", stat: "99.4%", icon: FileText },
  { id: "QUANTUM", name: "AlphaSentient", stat: "42ms", icon: TrendingUp },
];

export default function AwwwardsHero({ activeMode = "ACOUSTIC", onModeChange, started = true }: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const [deckOpen, setDeckOpen] = useState(false);

  useEffect(() => {
    if (!started) return;
    const el = rootRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll(".hero-line"),
        { yPercent: 115 },
        { yPercent: 0, duration: 1.2, ease: "power4.out", stagger: 0.1, delay: 0.1 }
      );
      gsap.fromTo(
        el.querySelectorAll(".hero-fade"),
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.08, delay: 0.6 }
      );
    }, el);
    return () => ctx.revert();
  }, [started]);

  return (
    <section ref={rootRef} className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden px-5 sm:px-10 pb-8 pt-36 text-[#0b0b0f]">
      {/* top meta row */}
      <div className="hero-fade absolute top-24 sm:top-28 left-5 sm:left-10 right-5 sm:right-10 flex items-center justify-between font-jbmono text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-black/40">
        <span className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-[#4d7c0f]" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4d7c0f]" />
          </span>
          Systems online
        </span>
        <span className="hidden md:block">Perceive → Reason → Act</span>
        <span className="tabular-nums">SCROLL ↓ 001</span>
      </div>

      {/* Giant type */}
      <div className="relative z-10 select-none">
        <p className="hero-fade font-jbmono text-[11px] tracking-[0.32em] uppercase text-[#4d7c0f] font-bold mb-4">
          ( AI-Native Invention Lab — Est. 2026 )
        </p>
        <h1 className="font-display font-bold tracking-[-0.045em] leading-[0.86] text-[17.5vw] sm:text-[13.5vw] lg:text-[11.2vw]">
          <span className="block overflow-hidden">
            <span className="hero-line block">MACHINES</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block">
              THAT <span className="text-stroke-lime">THINK</span>
              <span className="text-[#4d7c0f]">.</span>
            </span>
          </span>
        </h1>

        <div className="mt-6 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <p className="hero-fade max-w-md text-black/60 text-sm sm:text-[15px] leading-relaxed">
            We don&apos;t build apps. We birth intelligence — voice that converses,
            vision that reads, quant that predicts, swarms that decide.
            <span className="text-black font-medium"> Deterministic systems from probabilistic minds.</span>
          </p>

          {/* Mode switcher */}
          <div className="hero-fade flex flex-col gap-3">
            <div className="flex items-center gap-2 rounded-full p-1.5 glass-dark w-fit shadow-[0_8px_32px_rgba(11,11,15,0.08)]">
              {MODES.map((m) => {
                const active = activeMode === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => onModeChange?.(m.id)}
                    data-cursor-label={m.name.toUpperCase()}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-[12px] font-bold transition-all duration-300 ${
                      active ? "bg-[#0b0b0f] text-[#d8ff3e] shadow-[0_8px_24px_rgba(11,11,15,0.3)]" : "text-black/50 hover:text-black"
                    }`}
                  >
                    <m.icon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{m.name}</span>
                    <span className={`font-jbmono text-[10px] ${active ? "text-[#d8ff3e]/60" : "text-black/30"}`}>{m.stat}</span>
                  </button>
                );
              })}
            </div>
            <div className="flex items-center gap-3">
              <Magnetic>
                <button
                  onClick={() => setDeckOpen(!deckOpen)}
                  className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#0b0b0f] text-[#f4f2ed] text-sm font-bold hover:bg-[#4d7c0f] hover:text-white transition-colors"
                  data-cursor-label={deckOpen ? "CLOSE" : "LIVE DEMO"}
                >
                  <Play className="w-4 h-4 fill-[#d8ff3e] text-[#d8ff3e]" />
                  {deckOpen ? "Hide live kernel" : "Ignite live kernel"}
                </button>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/lab"
                  className="inline-flex items-center gap-1.5 px-7 py-4 rounded-full border border-black/15 text-sm font-bold text-black hover:border-[#4d7c0f] hover:text-[#4d7c0f] transition-colors bg-white/50"
                >
                  Enter lab <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Live kernel deck */}
        {deckOpen && (
          <div className="mt-8 rounded-[24px] overflow-hidden border border-black/10 bg-white/80 backdrop-blur-xl shadow-[0_24px_64px_-16px_rgba(11,11,15,0.2)]">
            <HeroInventionDeck activeMode={activeMode} onModeChange={onModeChange ?? (() => {})} />
          </div>
        )}

        {/* bottom stats bar */}
        <div className="hero-fade mt-10 pt-5 border-t border-black/10 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { k: "<280ms", v: "Voice glass-to-glass" },
            { k: "99.4%", v: "Spatial OCR precision" },
            { k: "42ms", v: "LPU tick execution" },
            { k: "07", v: "Production AI systems" },
          ].map((s) => (
            <div key={s.v} className="flex items-baseline gap-3">
              <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-black">{s.k}</span>
              <span className="font-jbmono text-[10px] tracking-[0.2em] uppercase text-black/40">{s.v}</span>
            </div>
          ))}
        </div>

        <div className="hero-fade mt-6 flex items-center gap-2 font-jbmono text-[10px] tracking-[0.3em] uppercase text-black/30">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" /> Scroll to witness
        </div>
      </div>
    </section>
  );
}
