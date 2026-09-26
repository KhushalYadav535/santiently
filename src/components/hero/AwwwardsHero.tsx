"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight, Play, Mic, FileText, TrendingUp, Star, ShieldCheck } from "lucide-react";
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
        { yPercent: 0, duration: 1.25, ease: "power4.out", stagger: 0.1, delay: 0.1 }
      );
      gsap.fromTo(
        el.querySelectorAll(".hero-fade"),
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.08, delay: 0.55 }
      );
      gsap.fromTo(
        el.querySelectorAll(".hero-ghost"),
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 1.6, ease: "power3.out", delay: 0.4 }
      );
    }, el);
    return () => ctx.revert();
  }, [started]);

  return (
    <section ref={rootRef} className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden px-5 sm:px-10 pb-8 pt-36 text-[#0b0b0f]">
      {/* giant ghost backdrop */}
      <div aria-hidden className="hero-ghost absolute top-24 sm:top-20 left-0 right-0 overflow-hidden">
        <p className="ghost-word font-display font-bold tracking-[-0.04em] leading-none text-[22vw] text-center">
          SENTIENT®
        </p>
      </div>

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
        <div className="hero-fade mb-5 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full bg-white/70 backdrop-blur border border-black/10 shadow-[0_4px_20px_rgba(11,11,15,0.08)]">
            <span className="px-2.5 py-1 rounded-full bg-[#0b0b0f] text-[#d8ff3e] text-[10px] font-bold tracking-[0.14em] uppercase">
              New
            </span>
            <span className="text-[12px] font-medium text-black/70">
              VoCred 2.0 — Hindi voice telephony, live
            </span>
          </span>
          <span className="font-jbmono text-[10px] tracking-[0.3em] uppercase text-black/35 hidden sm:inline">
            AI-Native Invention Lab — Est. 2026
          </span>
        </div>

        <h1 className="font-display font-bold tracking-[-0.045em] leading-[0.86] text-[17.5vw] sm:text-[13.5vw] lg:text-[11.2vw]">
          <span className="block overflow-hidden pb-1">
            <span className="hero-line block">MACHINES</span>
          </span>
          <span className="block overflow-hidden pb-3">
            <span className="hero-line block">
              THAT{" "}
              <span className="font-serif-it font-normal tracking-[-0.02em] text-[#4d7c0f]">
                Think.
              </span>
            </span>
          </span>
        </h1>

        <div className="mt-6 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-md">
            <p className="hero-fade text-black/60 text-sm sm:text-[15px] leading-relaxed">
              We don&apos;t build apps. We birth intelligence — voice that converses,
              vision that reads, quant that predicts, swarms that decide.
              <span className="text-black font-medium"> Deterministic systems from probabilistic minds.</span>
            </p>
            {/* proof row */}
            <div className="hero-fade mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="flex items-center gap-0.5">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-[#4d7c0f] text-[#4d7c0f]" />
                ))}
              </span>
              <span className="text-[12.5px] text-black/60 font-medium">
                Loved by <span className="text-black font-bold">2,400+ builders</span>
              </span>
              <span className="w-1 h-1 rounded-full bg-black/20" />
              <span className="inline-flex items-center gap-1 text-[12.5px] text-black/60 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4d7c0f]" />
                99.99% enterprise SLA
              </span>
            </div>
          </div>

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
                  className="btn-shine group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#0b0b0f] text-[#f4f2ed] text-sm font-bold hover:bg-[#2a2a12] transition-colors shadow-[0_16px_40px_-12px_rgba(11,11,15,0.5)]"
                  data-cursor-label={deckOpen ? "CLOSE" : "LIVE DEMO"}
                >
                  <Play className="w-4 h-4 fill-[#d8ff3e] text-[#d8ff3e] relative z-[2]" />
                  <span className="relative z-[2]">{deckOpen ? "Hide live kernel" : "Ignite live kernel"}</span>
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
          ].map((s, i) => (
            <div key={s.v} className={`flex items-baseline gap-3 ${i > 0 ? "md:border-l md:border-black/10 md:pl-5" : ""}`}>
              <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-black tabular-nums">{s.k}</span>
              <span className="font-jbmono text-[10px] tracking-[0.2em] uppercase text-black/40">{s.v}</span>
            </div>
          ))}
        </div>

        {/* capability trust strip */}
        <div className="hero-fade mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-jbmono text-[10px] tracking-[0.28em] uppercase text-black/30">
          <span className="flex items-center gap-2 text-black/45">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" /> Scroll to witness
          </span>
          <span className="hidden sm:inline w-8 h-px bg-black/15" />
          <span>SIP Trunks</span>
          <span className="text-[#4d7c0f]">•</span>
          <span>24kHz PCM</span>
          <span className="text-[#4d7c0f]">•</span>
          <span>LPU Edge</span>
          <span className="text-[#4d7c0f]">•</span>
          <span>RAG</span>
          <span className="text-[#4d7c0f]">•</span>
          <span>22 Fonts</span>
        </div>
      </div>
    </section>
  );
}
