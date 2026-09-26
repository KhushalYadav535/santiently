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
  Zap,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { soundFX } from "@/utils/audio";
import { InventionMode, InventionMeta } from "@/types/hero";
import HeroInventionDeck from "./HeroInventionDeck";

interface HeroSectionProps {
  activeMode?: InventionMode;
  onModeChange?: (mode: InventionMode) => void;
}

const INVENTIONS: InventionMeta[] = [
  {
    id: "ACOUSTIC",
    code: "01",
    name: "VoCred 2.0",
    category: "STREAMING VOICE TELEPHONY",
    tagline: "Sub-280ms human conversational cadence with 45ms zero-tail barge-in.",
    activeColor: "bg-blue-600 text-white border-blue-600 shadow-md",
    pillColor: "text-blue-700 bg-blue-50 border-blue-200",
    desc: "Acoustic neural prosody & multilingual dialect synthesis operating directly over SIP trunks.",
    metrics: [
      { label: "Glass-to-Glass Latency", value: "<280ms" },
      { label: "Barge-in Interrupt", value: "45ms" },
    ],
  },
  {
    id: "SPATIAL",
    code: "02",
    name: "TextMitra",
    category: "SPATIAL COORDINATE OCR",
    tagline: "Millimeter-level layout extraction across complex enterprise ledgers.",
    activeColor: "bg-cyan-600 text-white border-cyan-600 shadow-md",
    pillColor: "text-cyan-800 bg-cyan-50 border-cyan-200",
    desc: "Multi-page visual document parsing preserving geometric table topologies with 99.4% accuracy.",
    metrics: [
      { label: "Coordinate Accuracy", value: "99.4%" },
      { label: "Indian Language Fonts", value: "22 Fonts" },
    ],
  },
  {
    id: "QUANTUM",
    code: "03",
    name: "AlphaSentient",
    category: "42ms QUANT INTELLIGENCE",
    tagline: "Co-located high-frequency quantitative inference on edge LPUs.",
    activeColor: "bg-amber-600 text-white border-amber-600 shadow-md",
    pillColor: "text-amber-800 bg-amber-50 border-amber-200",
    desc: "Probabilistic market microstructure modeling executing automated statistical arbitrage.",
    metrics: [
      { label: "Edge Tick Execution", value: "42ms" },
      { label: "Sharpe Ratio", value: "3.84" },
    ],
  },
];

const TERMINAL_PRESETS = [
  { label: "VoCred Telephony", query: "Call 1,000 customers in Hindi for instant loan repayment confirmation" },
  { label: "TextMitra OCR", query: "Parse 50 multi-page tax ledgers and extract normalized JSON line items" },
  { label: "Swarm Arbitration", query: "Synthesize 3 competing LLM proposals with deterministic schema contract" },
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
    <section className="relative min-h-[94vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-center z-10 overflow-hidden text-neutral-900">
      {/* Floating Holographic Invention Badge - Left (VoCred Audio Pulse) */}
      <div className="hidden 2xl:flex absolute left-8 top-36 animate-reveal-3 z-20">
        <div
          onClick={() => {
            handleModeSelect("ACOUSTIC");
            soundFX.playPulse();
          }}
          data-cursor-label="VOCRED 2.0"
          className="p-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-200/90 shadow-sm flex items-center gap-3.5 cursor-pointer hover:border-blue-400 hover:scale-105 transition-all text-left max-w-xs group"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform">
            <Mic className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-blue-700 font-bold uppercase">
                ACOUSTIC ENGINE
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                &lt;280ms
              </span>
            </div>
            <p className="text-xs text-neutral-900 font-bold mt-0.5">VoCred 2.0 Telephony</p>
            {/* Animated Equalizer Wave Bars */}
            <div className="flex items-end gap-1 h-3 mt-1.5">
              {[8, 14, 20, 11, 16, 22, 13, 18, 10, 15].map((h, i) => (
                <div
                  key={i}
                  className="w-1 rounded-full bg-gradient-to-t from-blue-600 to-indigo-500 animate-pulse"
                  style={{ height: `${h}px`, animationDelay: `${i * 90}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Holographic Invention Badge - Right (TextMitra Spatial Scanner) */}
      <div className="hidden 2xl:flex absolute right-8 top-36 animate-reveal-4 z-20">
        <div
          onClick={() => {
            handleModeSelect("SPATIAL");
            soundFX.playDataBlip();
          }}
          data-cursor-label="SPATIAL OCR"
          className="p-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-200/90 shadow-sm flex items-center gap-3.5 cursor-pointer hover:border-cyan-400 hover:scale-105 transition-all text-left max-w-xs group"
        >
          <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 flex-shrink-0 group-hover:scale-110 transition-transform">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-cyan-800 font-bold uppercase">
                SPATIAL VISION OCR
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-cyan-50 text-cyan-700 border border-cyan-200 font-semibold">
                99.4%
              </span>
            </div>
            <p className="text-xs text-neutral-900 font-bold mt-0.5">TextMitra Coordinate Kernel</p>
            <div className="text-[10px] font-mono text-neutral-500 mt-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 animate-ping" />
              <span>Bounding Boxes [x, y, w, h]</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Frontier AI Pill - Stagger 1 */}
      <div className="animate-reveal-1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-gray-200/90 shadow-2xs mb-6 backdrop-blur-sm">
        <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping" />
        <span className="text-[11px] font-mono tracking-wider uppercase text-blue-700 font-bold">
          AI-NATIVE INVENTION LAB
        </span>
        <span className="text-gray-300">&bull;</span>
        <span className="text-[11px] font-mono text-neutral-500">EST. 2026 // DEEPTECH</span>
      </div>

      {/* Grand Architectural Master Headline - Stagger 2 */}
      <div className="max-w-5xl mx-auto space-y-4">
        <h1 className="animate-reveal-2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-neutral-900 leading-[1.03]">
          Where AI inventions <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            take physical form.
          </span>
        </h1>

        {/* Dynamic Subheadline - Stagger 3 */}
        <p className="animate-reveal-3 text-sm sm:text-base md:text-lg text-neutral-600 max-w-2xl mx-auto font-normal leading-relaxed pt-1">
          Sentiently is an invention laboratory. We engineer probabilistic reasoning, real-time voice telephony, and autonomous agent swarms into deterministic enterprise reality.
        </p>
      </div>

      {/* Centerpiece Interactive AI Invention Deck - Replacing 3D Sculpture */}
      <HeroInventionDeck
        activeMode={activeMode}
        onModeChange={handleModeSelect}
      />

      {/* Dual Action CTA Buttons - Stagger 4 */}
      <div className="animate-reveal-5 flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-4 w-full max-w-md mx-auto">
        <a
          href="#playground"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-neutral-900 hover:bg-black shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          onMouseEnter={() => soundFX.playHover()}
          onClick={() => soundFX.playClick()}
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>TRY LIVE AI SANDBOX</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        <Link
          href="/lab"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-neutral-800 hover:text-neutral-950 bg-white hover:bg-neutral-50 border border-gray-200/90 shadow-xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          onMouseEnter={() => soundFX.playHover()}
          onClick={() => soundFX.playClick()}
        >
          <span>ENTER THE LAB</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
        </Link>
      </div>

      {/* Interactive Command Line Bar - Stagger 5 */}
      <div className="animate-reveal-6 mt-8 w-full max-w-2xl mx-auto">
        <div className="p-3.5 rounded-2xl bg-white/95 border border-gray-200/90 backdrop-blur-xl flex items-center justify-between gap-3 text-left font-mono text-xs shadow-xs">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse flex-shrink-0" />
            <span className="text-neutral-400 uppercase text-[10px]">LIVE EXPERIMENT:</span>
            <span className="text-neutral-800 font-medium truncate">
              &ldquo;{TERMINAL_PRESETS[terminalIndex].query}&rdquo;
            </span>
          </div>
          <a
            href="#playground"
            onClick={() => soundFX.playClick()}
            className="flex-shrink-0 text-[10px] font-bold text-blue-700 hover:text-blue-900 bg-blue-50 border border-blue-200 px-3 py-1 rounded-lg transition-colors flex items-center gap-1"
          >
            <span>RUN</span>
            <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Bottom Live Metrics Telemetry HUD Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 max-w-4xl mx-auto w-full pt-2">
        <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200/80 shadow-xs text-left transition-all hover:border-blue-300 hover:shadow-sm hover:-translate-y-1">
          <div className="flex items-center gap-1.5 text-blue-600 text-xs font-mono font-medium">
            <Activity className="w-3.5 h-3.5" />
            <span>STREAMING VOICE</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1 font-mono">&lt;280ms</div>
          <div className="text-[11px] text-neutral-500">Glass-to-glass telephony</div>
        </div>

        <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200/80 shadow-xs text-left transition-all hover:border-cyan-300 hover:shadow-sm hover:-translate-y-1">
          <div className="flex items-center gap-1.5 text-cyan-700 text-xs font-mono font-medium">
            <Terminal className="w-3.5 h-3.5" />
            <span>SPATIAL OCR</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1 font-mono">99.4%</div>
          <div className="text-[11px] text-neutral-500">Coordinate accuracy</div>
        </div>

        <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200/80 shadow-xs text-left transition-all hover:border-amber-300 hover:shadow-sm hover:-translate-y-1">
          <div className="flex items-center gap-1.5 text-amber-600 text-xs font-mono font-medium">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>QUANTUM FEED</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1 font-mono">42ms</div>
          <div className="text-[11px] text-neutral-500">LPU tick execution</div>
        </div>

        <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200/80 shadow-xs text-left transition-all hover:border-purple-300 hover:shadow-sm hover:-translate-y-1">
          <div className="flex items-center gap-1.5 text-purple-600 text-xs font-mono font-medium">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1 font-mono">7 Systems</div>
          <div className="text-[11px] text-neutral-500">Production AI-native apps</div>
        </div>
      </div>
    </section>
  );
}
