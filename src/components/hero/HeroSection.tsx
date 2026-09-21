"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Terminal, Activity, Layers } from "lucide-react";
import { soundFX } from "@/utils/audio";

const ACTION_VERBS = [
  { word: "LISTEN", color: "text-purple-400", desc: "Acoustic perception & streaming voice" },
  { word: "REASON", color: "text-cyan-400", desc: "Contextual graphs & dynamic LLM planning" },
  { word: "LEARN", color: "text-emerald-400", desc: "Self-correcting feedback loops" },
  { word: "AUTOMATE", color: "text-pink-400", desc: "End-to-end enterprise execution" },
  { word: "ACT", color: "text-amber-400", desc: "Real-world APIs, telephony & workflows" },
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
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-center z-10 overflow-hidden">
      {/* Top Pill / Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 animate-fade-in shadow-xl shadow-purple-950/20">
        <span className="flex h-2 w-2 rounded-full bg-purple-400 animate-ping" />
        <span className="text-[11px] font-mono tracking-wider uppercase text-purple-300 font-semibold">
          AI-NATIVE PRODUCT COMPANY
        </span>
        <span className="text-zinc-400">&bull;</span>
        <span className="text-[11px] font-mono text-zinc-300">EST. 2026</span>
      </div>

      {/* Main Massive Headline */}
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-[1.05]">
          We build products <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
            that think.
          </span>
        </h1>

        {/* Dynamic Interactive Verb Ticker */}
        <div className="flex flex-col items-center justify-center pt-4 pb-2">
          <div className="flex items-center gap-3 font-mono text-sm sm:text-lg">
            <span className="text-zinc-400 text-xs sm:text-sm uppercase tracking-widest">
              SYSTEMS DESIGNED TO:
            </span>
            <div className="min-w-[140px] text-left transition-all duration-300">
              <span className={`font-bold tracking-widest text-lg sm:text-2xl ${currentAction.color}`}>
                [ {currentAction.word} ]
              </span>
            </div>
          </div>
          <span className="text-xs text-zinc-400 font-mono mt-1 transition-opacity duration-300">
            &rarr; {currentAction.desc}
          </span>
        </div>

        {/* Subheadline */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed pt-2">
          Sentiently Innovations is an AI-native product company building intelligent systems across voice, enterprise software, automation, finance, and everyday business operations.
        </p>
      </div>

      {/* Dual CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full max-w-md mx-auto">
        <a
          href="#products"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-600/25 border border-purple-400/40 transition-all duration-300 hover:scale-105 active:scale-95"
          onMouseEnter={() => soundFX.playHover()}
          onClick={() => soundFX.playClick()}
        >
          <span>EXPLORE OUR PRODUCTS</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        <Link
          href="/lab"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-purple-500/40 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
          onMouseEnter={() => soundFX.playHover()}
          onClick={() => soundFX.playClick()}
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>ENTER THE LAB</span>
          <span className="text-[10px] text-purple-300 font-mono px-1.5 py-0.5 rounded bg-purple-500/20">R&D</span>
        </Link>
      </div>

      {/* Bottom Live Metrics / Proof Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-16 max-w-4xl mx-auto w-full pt-6 border-t border-white/5">
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm text-left">
          <div className="flex items-center gap-1.5 text-purple-400 text-xs font-mono">
            <Activity className="w-3.5 h-3.5" />
            <span>VOICE AGENTS</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white mt-1 font-mono">&lt;320ms</div>
          <div className="text-[11px] text-zinc-400">Streaming telephony latency</div>
        </div>

        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm text-left">
          <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>DOCUMENT AI</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white mt-1 font-mono">99.4%</div>
          <div className="text-[11px] text-zinc-400">Extraction parsing accuracy</div>
        </div>

        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm text-left">
          <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white mt-1 font-mono">10+ AI Products</div>
          <div className="text-[11px] text-zinc-400">Shipped into enterprise ops</div>
        </div>

        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm text-left">
          <div className="flex items-center gap-1.5 text-amber-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LAB R&D</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white mt-1 font-mono">Continuous</div>
          <div className="text-[11px] text-zinc-400">Next-gen agentic experiments</div>
        </div>
      </div>
    </section>
  );
}
