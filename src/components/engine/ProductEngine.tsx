"use client";

import React from "react";
import { Search, FlaskConical, Code2, Rocket, TrendingUp, CheckCircle, ShieldCheck } from "lucide-react";
import { soundFX } from "@/utils/audio";

const PIPELINE_STEPS = [
  {
    step: "01",
    title: "RESEARCH",
    desc: "Tracking frontier research papers, acoustic transformer topologies, and geometric graphs.",
    icon: Search,
    color: "#a855f7"
  },
  {
    step: "02",
    title: "EXPERIMENT",
    desc: "Spinning up rapid stress benchmarks in the Sentiently Lab to identify true signal vs vanity demos.",
    icon: FlaskConical,
    color: "#06b6d4"
  },
  {
    step: "03",
    title: "PROTOTYPE",
    desc: "Connecting streaming APIs, state machine guardrails, and real telephony/ERP sandboxes.",
    icon: Code2,
    color: "#10b981"
  },
  {
    step: "04",
    title: "PRODUCT",
    desc: "Packaging into turnkey systems (VoCred, TextMitra, AI HRMS) with 99.99% deterministic uptime.",
    icon: Rocket,
    color: "#f59e0b"
  },
  {
    step: "05",
    title: "SCALE",
    desc: "Deploying high-throughput multi-tenant clusters handling millions of voice calls and documents.",
    icon: TrendingUp,
    color: "#ec4899"
  }
];

export default function ProductEngine() {
  return (
    <section id="engine" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-gradient-to-r from-purple-900/10 via-cyan-900/10 to-transparent blur-3xl pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
          THE CONTINUOUS DELIVERY FLYWHEEL
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          The Sentiently Product Engine
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          We don&apos;t keep AI trapped in research notebooks. We operate a continuous pipeline that transforms experimental capabilities into battle-tested commercial software.
        </p>
      </div>

      {/* 5-Step Pipeline Horizontal Ribbon */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {PIPELINE_STEPS.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="relative p-5 rounded-2xl bg-[#080912] border border-white/10 hover:border-purple-500/40 transition-all duration-300 group flex flex-col justify-between"
              onMouseEnter={() => soundFX.playHover()}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-zinc-400">
                    PHASE {item.step}
                  </span>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2 font-mono">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1 text-[10px] font-mono text-zinc-400">
                <span>GATEWAY {index + 1} VERIFIED</span>
                <CheckCircle className="w-3 h-3 text-emerald-400" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Callout Box: Real World Proof */}
      <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/30 via-indigo-950/20 to-black/40 border border-purple-500/20 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-300">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>COMMERCIAL REALITY CHECK</span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white">
            Not AI for demos. AI for real work.
          </h4>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
            Our products operate under real-world conditions: handling messy telephone audio, noisy background environments, imperfect document scans, high-frequency financial volatility, and complex corporate payroll regulations.
          </p>
        </div>

        <a
          href="#products"
          className="flex-shrink-0 px-6 py-3 rounded-full text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-colors shadow-lg"
          onClick={() => soundFX.playClick()}
        >
          Explore All Deployed Systems
        </a>
      </div>
    </section>
  );
}
