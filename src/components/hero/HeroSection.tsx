"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Terminal,
  Activity,
  Layers,
  ArrowUpRight,
  Mic,
  FileText,
  TrendingUp,
  ChevronRight,
  Star,
  Play,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { soundFX } from "@/utils/audio";
import { InventionMode, InventionMeta } from "@/types/hero";
import HeroInventionDeck from "./HeroInventionDeck";

interface HeroSectionProps {
  activeMode?: InventionMode;
  onModeChange?: (mode: InventionMode) => void;
}

const TERMINAL_PRESETS = [
  { label: "VoCred Telephony", query: "Call 1,000 customers in Hindi for instant loan repayment confirmation" },
  { label: "TextMitra OCR", query: "Parse 50 multi-page tax ledgers and extract normalized JSON line items" },
  { label: "Swarm Arbitration", query: "Synthesize 3 competing LLM proposals with deterministic schema contract" },
];

const METRICS = [
  {
    icon: Activity,
    label: "STREAMING VOICE",
    value: "<280ms",
    sub: "Glass-to-glass telephony",
    iconBg: "from-blue-600 to-indigo-600",
    hoverBorder: "hover:border-blue-300",
    glow: "group-hover:shadow-blue-500/10",
  },
  {
    icon: Terminal,
    label: "SPATIAL OCR",
    value: "99.4%",
    sub: "Coordinate accuracy",
    iconBg: "from-cyan-500 to-blue-600",
    hoverBorder: "hover:border-cyan-300",
    glow: "group-hover:shadow-cyan-500/10",
  },
  {
    icon: TrendingUp,
    label: "QUANTUM FEED",
    value: "42ms",
    sub: "LPU tick execution",
    iconBg: "from-amber-500 to-orange-600",
    hoverBorder: "hover:border-amber-300",
    glow: "group-hover:shadow-amber-500/10",
  },
  {
    icon: Layers,
    label: "PORTFOLIO",
    value: "7 Systems",
    sub: "Production AI-native apps",
    iconBg: "from-violet-600 to-purple-600",
    hoverBorder: "hover:border-violet-300",
    glow: "group-hover:shadow-violet-500/10",
  },
];

export default function HeroSection({
  activeMode = "ACOUSTIC",
  onModeChange,
}: HeroSectionProps) {
  const [terminalIndex, setTerminalIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalIndex((prev) => (prev + 1) % TERMINAL_PRESETS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleModeSelect = (mode: InventionMode) => {
    soundFX.playModeShift();
    if (onModeChange) {
      onModeChange(mode);
    }
  };

  return (
    <section className="relative min-h-[94vh] flex flex-col items-center justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center z-10 overflow-hidden text-neutral-900">
      {/* Floating Holographic Badge — Left */}
      <div className="hidden 2xl:flex absolute left-8 top-40 animate-reveal-3 z-20">
        <div
          onClick={() => {
            handleModeSelect("ACOUSTIC");
            soundFX.playPulse();
          }}
          data-cursor-label="VOCRED 2.0"
          className="group p-4 pr-5 bg-white/80 backdrop-blur-2xl rounded-2xl border border-white/60 shadow-[0_8px_32px_-8px_rgba(59,130,246,0.25),0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.04] flex items-center gap-3.5 cursor-pointer hover:-translate-y-1 hover:shadow-[0_16px_48px_-8px_rgba(59,130,246,0.35)] transition-all duration-300 text-left max-w-xs"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-600/25 group-hover:scale-110 transition-transform">
            <Mic className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-blue-700 font-bold uppercase tracking-wider">
                Acoustic Engine
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                &lt;280ms
              </span>
            </div>
            <p className="text-[13px] text-neutral-900 font-bold mt-0.5 tracking-tight">VoCred 2.0 Telephony</p>
            <div className="flex items-end gap-[3px] h-3.5 mt-1.5">
              {[8, 14, 20, 11, 16, 22, 13, 18, 10, 15, 19, 12].map((h, i) => (
                <div
                  key={i}
                  className="w-[3px] rounded-full bg-gradient-to-t from-blue-600 to-indigo-400 animate-pulse"
                  style={{ height: `${h}px`, animationDelay: `${i * 90}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Holographic Badge — Right */}
      <div className="hidden 2xl:flex absolute right-8 top-40 animate-reveal-4 z-20">
        <div
          onClick={() => {
            handleModeSelect("SPATIAL");
            soundFX.playDataBlip();
          }}
          data-cursor-label="SPATIAL OCR"
          className="group p-4 pr-5 bg-white/80 backdrop-blur-2xl rounded-2xl border border-white/60 shadow-[0_8px_32px_-8px_rgba(6,182,212,0.25),0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.04] flex items-center gap-3.5 cursor-pointer hover:-translate-y-1 hover:shadow-[0_16px_48px_-8px_rgba(6,182,212,0.35)] transition-all duration-300 text-left max-w-xs"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-cyan-600/25 group-hover:scale-110 transition-transform">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-cyan-800 font-bold uppercase tracking-wider">
                Spatial Vision
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-md bg-cyan-50 text-cyan-700 border border-cyan-200 font-bold">
                99.4%
              </span>
            </div>
            <p className="text-[13px] text-neutral-900 font-bold mt-0.5 tracking-tight">TextMitra Kernel</p>
            <div className="text-[10px] font-mono text-neutral-500 mt-1.5 flex items-center gap-1.5">
              <span className="relative flex w-1.5 h-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-600" />
              </span>
              <span>Bounding Boxes [x, y, w, h]</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Announcement pill ── */}
      <div className="animate-reveal-1 relative group cursor-pointer">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 rounded-full blur-[6px] opacity-20 group-hover:opacity-35 transition-opacity duration-500" />
        <Link
          href="#vocred"
          onClick={() => soundFX.playClick()}
          className="relative inline-flex items-center gap-2.5 pl-2 pr-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-black/[0.06] shadow-[0_2px_16px_-2px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_24px_-2px_rgba(59,130,246,0.25)] transition-all duration-300"
        >
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-sm">
            <Sparkles className="w-3 h-3" />
            New
          </span>
          <span className="text-[12.5px] font-medium text-neutral-700 tracking-tight">
            VoCred 2.0 — sub-280ms Hindi voice telephony is live
          </span>
          <span className="w-5 h-5 rounded-full bg-neutral-950 text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
            <ArrowRight className="w-3 h-3" />
          </span>
        </Link>
      </div>

      {/* ── Grand headline ── */}
      <div className="max-w-5xl mx-auto mt-7 space-y-5">
        <div className="animate-reveal-2 inline-flex items-center gap-2 text-[11px] font-mono font-semibold tracking-[0.24em] uppercase text-neutral-500">
          <span className="w-6 h-px bg-gradient-to-r from-transparent to-neutral-300" />
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-600" />
            </span>
            AI-Native Invention Lab — Est. 2026
          </span>
          <span className="w-6 h-px bg-gradient-to-l from-transparent to-neutral-300" />
        </div>

        <h1 className="animate-reveal-2 text-[42px] sm:text-7xl lg:text-[86px] font-black tracking-[-0.04em] text-neutral-950 leading-[0.98]">
          Where AI inventions
          <br />
          <span className="relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 animate-gradient-x bg-[length:200%_auto]">
              take physical form.
            </span>
            {/* hand-drawn underline flourish */}
            <svg
              className="absolute -bottom-2 sm:-bottom-3 left-0 w-full"
              viewBox="0 0 600 14"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M4 10 C 150 3, 380 3, 596 8"
                stroke="url(#hero-underline)"
                strokeWidth="5"
                strokeLinecap="round"
                opacity="0.55"
              />
              <defs>
                <linearGradient id="hero-underline" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2563EB" />
                  <stop offset="0.5" stopColor="#7C3AED" />
                  <stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        <p className="animate-reveal-3 text-[15px] sm:text-lg text-neutral-600 max-w-2xl mx-auto font-normal leading-relaxed tracking-tight">
          Santiently is an invention laboratory. We engineer probabilistic
          reasoning, real-time voice telephony, and autonomous agent swarms
          into{" "}
          <span className="text-neutral-900 font-semibold">
            deterministic enterprise reality.
          </span>
        </p>
      </div>

      {/* ── Centerpiece deck with premium glow ── */}
      <div className="relative w-full max-w-4xl mx-auto mt-9">
        <div className="absolute -inset-3 bg-gradient-to-b from-blue-500/[0.08] via-violet-500/[0.06] to-transparent rounded-[32px] blur-2xl pointer-events-none" />
        <div className="absolute -inset-px bg-gradient-to-b from-white/80 via-transparent to-transparent rounded-[28px] pointer-events-none" />
        <div className="relative">
          <HeroInventionDeck
            activeMode={activeMode}
            onModeChange={handleModeSelect}
          />
        </div>
      </div>

      {/* ── Dual CTA ── */}
      <div className="animate-reveal-5 flex flex-col sm:flex-row items-center justify-center gap-3 mt-7 w-full max-w-xl mx-auto">
        <a
          href="#playground"
          className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-neutral-950 hover:bg-black transition-all duration-300 hover:-translate-y-0.5 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_48px_-8px_rgba(59,130,246,0.45)] overflow-hidden"
          onMouseEnter={() => soundFX.playHover()}
          onClick={() => soundFX.playClick()}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <Play className="w-4 h-4 fill-amber-300 text-amber-300" />
          <span className="tracking-tight">Try Live AI Sandbox</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>

        <Link
          href="/lab"
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-neutral-900 bg-white/80 backdrop-blur-xl hover:bg-white border border-black/[0.08] shadow-[0_2px_16px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.15)] hover:border-black/[0.12]"
          onMouseEnter={() => soundFX.playHover()}
          onClick={() => soundFX.playClick()}
        >
          <span className="tracking-tight">Enter the Lab</span>
          <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </Link>
      </div>

      {/* ── Social proof ── */}
      <div className="animate-reveal-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6">
        <div className="flex items-center">
          <div className="flex -space-x-2.5">
            {[
              { init: "AR", bg: "from-blue-600 to-indigo-600" },
              { init: "PK", bg: "from-violet-600 to-purple-600" },
              { init: "SN", bg: "from-cyan-500 to-blue-600" },
              { init: "DV", bg: "from-amber-500 to-orange-600" },
              { init: "+", bg: "from-neutral-800 to-black" },
            ].map((a, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full bg-gradient-to-br ${a.bg} ring-2 ring-[#F7F8FB] flex items-center justify-center text-[10px] font-bold text-white shadow-sm`}
              >
                {a.init}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[0, 1, 2, 3, 4].map((s) => (
              <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-[12.5px] text-neutral-600 font-medium tracking-tight">
            Loved by <span className="text-neutral-900 font-bold">2,400+ builders</span>
            <span className="mx-1.5 text-neutral-300">•</span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Zero-hallucination contracts
            </span>
          </p>
        </div>
      </div>

      {/* ── Spotlight command bar ── */}
      <div className="animate-reveal-6 mt-8 w-full max-w-2xl mx-auto">
        <div className="group relative">
          <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-cyan-500/20 rounded-[18px] blur-[4px] opacity-60 group-hover:opacity-100 transition-opacity" />
          <div className="relative p-2 pl-4 rounded-[17px] bg-white/90 border border-black/[0.06] backdrop-blur-2xl flex items-center justify-between gap-3 text-left shadow-[0_8px_32px_-12px_rgba(0,0,0,0.15)]">
            <div className="flex items-center gap-3 overflow-hidden min-w-0">
              <span className="w-8 h-8 rounded-xl bg-neutral-950 flex items-center justify-center flex-shrink-0 shadow-sm">
                <Zap className="w-3.5 h-3.5 text-amber-300" />
              </span>
              <div className="min-w-0">
                <div className="text-[10px] font-mono font-bold uppercase tracking-[0.14em] text-neutral-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live experiment — {TERMINAL_PRESETS[terminalIndex].label}
                </div>
                <div
                  key={terminalIndex}
                  className="text-[13px] text-neutral-800 font-medium truncate tracking-tight animate-reveal-1"
                >
                  &ldquo;{TERMINAL_PRESETS[terminalIndex].query}&rdquo;
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 pr-1">
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-neutral-100 border border-black/[0.06] text-[10px] font-mono text-neutral-500 font-semibold">
                ⌘K
              </kbd>
              <a
                href="#playground"
                onClick={() => soundFX.playClick()}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 px-4 py-2.5 rounded-xl transition-all shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-px"
              >
                <span>RUN</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Metrics HUD ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 max-w-4xl mx-auto w-full">
        {METRICS.map((m, i) => (
          <div
            key={m.label}
            className={`group relative p-[1px] rounded-2xl bg-gradient-to-b from-black/[0.08] to-transparent ${m.hoverBorder} transition-all duration-300 hover:-translate-y-1`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div
              className={`relative p-4 rounded-2xl bg-white/90 backdrop-blur-xl text-left overflow-hidden transition-shadow duration-300 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] group-hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.18)] ${m.glow} group-hover:shadow-xl`}
            >
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
              <div className="flex items-center justify-between">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${m.iconBg} flex items-center justify-center text-white shadow-md`}>
                  <m.icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-[0.12em] text-neutral-400">
                  0{i + 1}
                </span>
              </div>
              <div className="text-[10px] font-mono font-bold tracking-[0.12em] text-neutral-500 mt-3">
                {m.label}
              </div>
              <div className="text-[22px] sm:text-2xl font-black text-neutral-950 mt-0.5 font-mono tracking-tight">
                {m.value}
              </div>
              <div className="text-[11.5px] text-neutral-500 tracking-tight">{m.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Capability strip ── */}
      <div className="animate-reveal-6 flex items-center justify-center gap-3 sm:gap-5 mt-8 text-[10.5px] font-mono font-semibold tracking-[0.18em] uppercase text-neutral-400">
        <span>Voice</span>
        <span className="w-1 h-1 rounded-full bg-neutral-300" />
        <span>Vision</span>
        <span className="w-1 h-1 rounded-full bg-neutral-300" />
        <span className="hidden sm:inline">Quant</span>
        <span className="hidden sm:inline w-1 h-1 rounded-full bg-neutral-300" />
        <span className="hidden sm:inline">Swarms</span>
        <span className="w-1 h-1 rounded-full bg-neutral-300" />
        <span className="text-neutral-500">SIP • OCR • LPU • HRMS</span>
      </div>
    </section>
  );
}
