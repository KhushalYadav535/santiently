"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Terminal, Activity, Layers, ArrowUpRight, MessageSquare, FileText, Zap } from "lucide-react";
import { soundFX } from "@/utils/audio";

const ACTION_VERBS = [
  { word: "LISTEN", color: "text-purple-600 bg-purple-50 border-purple-200", desc: "Acoustic perception & streaming voice" },
  { word: "REASON", color: "text-blue-600 bg-blue-50 border-blue-200", desc: "Contextual graphs & dynamic LLM planning" },
  { word: "LEARN", color: "text-emerald-600 bg-emerald-50 border-emerald-200", desc: "Self-correcting feedback loops" },
  { word: "AUTOMATE", color: "text-rose-600 bg-rose-50 border-rose-200", desc: "End-to-end enterprise execution" },
  { word: "ACT", color: "text-amber-600 bg-amber-50 border-amber-200", desc: "Real-world APIs, telephony & workflows" },
];

const MARQUEE_ITEMS = [
  { label: "VOCRED 2.0", detail: "Sub-280ms Streaming Voice", icon: Zap },
  { label: "TEXTMITRA", detail: "Spatial Coordinate OCR", icon: FileText },
  { label: "AI-HRMS SENTINEL", detail: "Autonomous Policy RAG", icon: Activity },
  { label: "ALPHASENTIENT", detail: "42ms Quant Intelligence", icon: Terminal },
  { label: "SWARMS-X", detail: "Multi-Agent Arbitration", icon: Layers },
  { label: "ACOUSTIC VAD", detail: "45ms Zero-Tail Barge-in", icon: Zap },
];

export default function HeroSection() {
  const [actionIndex, setActionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActionIndex((prev) => (prev + 1) % ACTION_VERBS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const currentAction = ACTION_VERBS[actionIndex];

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center z-10 overflow-hidden">
      {/* Floating Interactive Prompt Chip - Left (Google Labs Signature Detail) */}
      <div className="hidden lg:flex absolute left-8 top-44 animate-reveal-3 z-20">
        <div
          onClick={() => soundFX.playPulse()}
          className="p-3 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200 shadow-md flex items-center gap-3 cursor-pointer hover:border-blue-400 hover:scale-105 transition-all text-left max-w-xs animate-float"
        >
          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-blue-700 font-semibold uppercase">PROMPT EXPERIMENT</div>
            <p className="text-xs text-neutral-800 font-medium line-clamp-1">&ldquo;VoCred: Call client in Hindi for loan EMI&rdquo;</p>
          </div>
        </div>
      </div>

      {/* Floating Interactive Prompt Chip - Right (Google Labs Signature Detail) */}
      <div className="hidden lg:flex absolute right-8 top-48 animate-reveal-4 z-20">
        <div
          onClick={() => soundFX.playHover()}
          className="p-3 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200 shadow-md flex items-center gap-3 cursor-pointer hover:border-purple-400 hover:scale-105 transition-all text-left max-w-xs animate-float-reverse"
        >
          <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 flex-shrink-0">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-purple-700 font-semibold uppercase">SPATIAL OCR PIPELINE</div>
            <p className="text-xs text-neutral-800 font-medium line-clamp-1">&ldquo;TextMitra: Parse 50 multi-page tax ledgers&rdquo;</p>
          </div>
        </div>
      </div>

      {/* Top Pill / Badge - Stagger 1 */}
      <div className="animate-reveal-1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-gray-200 shadow-xs mb-8 backdrop-blur-sm">
        <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping" />
        <span className="text-[11px] font-mono tracking-wider uppercase text-blue-700 font-semibold">
          AI-NATIVE EXPERIMENTAL LAB
        </span>
        <span className="text-gray-300">&bull;</span>
        <span className="text-[11px] font-mono text-neutral-600">EST. 2026</span>
      </div>

      {/* Main Google Labs Style Headline - Stagger 2 */}
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="animate-reveal-2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-neutral-900 leading-[1.05]">
          Where AI experiments <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600">
            take shape.
          </span>
        </h1>

        {/* Dynamic Interactive Verb Ticker - Stagger 3 */}
        <div className="animate-reveal-3 flex flex-col items-center justify-center pt-4 pb-2">
          <div className="flex items-center gap-2.5 font-mono text-sm sm:text-base">
            <span className="text-neutral-500 text-xs sm:text-sm uppercase tracking-wider font-sans">
              Systems designed to:
            </span>
            <div className="transition-all duration-300">
              <span className={`px-2.5 py-0.5 rounded-md border font-mono font-bold text-sm sm:text-base tracking-wide ${currentAction.color}`}>
                [ {currentAction.word} ]
              </span>
            </div>
          </div>
          <span className="text-xs text-neutral-500 font-mono mt-2 transition-opacity duration-300">
            &rarr; {currentAction.desc}
          </span>
        </div>

        {/* Subheadline - Stagger 4 */}
        <p className="animate-reveal-4 text-sm sm:text-base md:text-lg text-neutral-600 max-w-2xl mx-auto font-normal leading-relaxed pt-2">
          Sentiently is an AI-native product company. Discover our active experiments, live autonomous agents, and production systems across voice, enterprise software, and finance.
        </p>
      </div>

      {/* Google Labs Dual CTA Buttons - Stagger 5 */}
      <div className="animate-reveal-5 flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-10 w-full max-w-md mx-auto">
        <a
          href="#products"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-neutral-900 hover:bg-black shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          onMouseEnter={() => soundFX.playHover()}
          onClick={() => soundFX.playClick()}
        >
          <span>EXPLORE EXPERIMENTS</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        <Link
          href="/lab"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-neutral-800 hover:text-neutral-950 bg-white hover:bg-neutral-50 border border-gray-200/90 shadow-xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          onMouseEnter={() => soundFX.playHover()}
          onClick={() => soundFX.playClick()}
        >
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>ENTER THE LAB</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
        </Link>
      </div>

      {/* Bottom Live Metrics Bar - Stagger 6 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-16 max-w-4xl mx-auto w-full pt-6">
        <div className="animate-reveal-3 p-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200/80 shadow-xs text-left transition-all hover:border-blue-300 hover:shadow-sm hover:-translate-y-1">
          <div className="flex items-center gap-1.5 text-blue-600 text-xs font-mono font-medium">
            <Activity className="w-3.5 h-3.5" />
            <span>VOICE AGENTS</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1 font-mono">&lt;280ms</div>
          <div className="text-[11px] text-neutral-500">Streaming telephony latency</div>
        </div>

        <div className="animate-reveal-4 p-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200/80 shadow-xs text-left transition-all hover:border-purple-300 hover:shadow-sm hover:-translate-y-1">
          <div className="flex items-center gap-1.5 text-purple-600 text-xs font-mono font-medium">
            <Terminal className="w-3.5 h-3.5" />
            <span>DOCUMENT AI</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1 font-mono">99.4%</div>
          <div className="text-[11px] text-neutral-500">Multimodal extraction accuracy</div>
        </div>

        <div className="animate-reveal-5 p-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200/80 shadow-xs text-left transition-all hover:border-emerald-300 hover:shadow-sm hover:-translate-y-1">
          <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-mono font-medium">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1 font-mono">7 Systems</div>
          <div className="text-[11px] text-neutral-500">From voice to quant trading</div>
        </div>

        <div className="animate-reveal-6 p-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200/80 shadow-xs text-left transition-all hover:border-amber-300 hover:shadow-sm hover:-translate-y-1">
          <div className="flex items-center gap-1.5 text-amber-600 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ACTIVE LAB</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1 font-mono">12+ R&amp;D</div>
          <div className="text-[11px] text-neutral-500">Frontier research prototypes</div>
        </div>
      </div>

      {/* Google Labs Style Infinite Capabilities Marquee - Stagger 6 */}
      <div className="animate-reveal-6 mt-14 w-full max-w-5xl mx-auto overflow-hidden relative border-y border-gray-200/60 py-3 bg-white/40 backdrop-blur-xs">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
        
        <div className="animate-marquee flex items-center gap-8 text-xs font-mono text-neutral-600">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => {
            return (
              <div key={idx} className="flex items-center gap-2 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="font-bold text-neutral-900">{item.label}</span>
                <span className="text-neutral-400">&mdash;</span>
                <span className="text-neutral-600">{item.detail}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
