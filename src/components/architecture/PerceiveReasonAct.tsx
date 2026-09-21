"use client";

import React from "react";
import { Eye, Brain, Zap, ArrowRight } from "lucide-react";
import { soundFX } from "@/utils/audio";

export default function PerceiveReasonAct() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
          THE COMMON AGENTIC LOOP
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Intelligence, Shipped.
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Every product we ship follows a rigorous, closed-loop triad: perceiving sensory input, synthesizing deep reasoning, and executing deterministically.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Step 1: PERCEIVE */}
        <div
          className="relative p-6 sm:p-8 rounded-2xl bg-[#080911]/90 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group"
          onMouseEnter={() => soundFX.playHover()}
        >
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
            <Eye className="w-6 h-6" />
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono text-cyan-400">01 / STAGE</span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              INPUT
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">PERCEIVE</h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
            Ingest streaming voice, acoustic prosody, distorted document scans, IoT GPS telemetry, and unstructured user intent with zero lag.
          </p>

          <ul className="text-xs text-zinc-400 space-y-1.5 font-mono">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Streaming Speech Recognition
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Spatial Vision OCR Parsing
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Real-time Sentiment Telemetry
            </li>
          </ul>
        </div>

        {/* Step 2: REASON */}
        <div
          className="relative p-6 sm:p-8 rounded-2xl bg-[#080911]/90 border border-white/10 hover:border-purple-500/40 transition-all duration-300 group"
          onMouseEnter={() => soundFX.playHover()}
        >
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
            <Brain className="w-6 h-6" />
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono text-purple-400">02 / STAGE</span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
              SYNTHESIS
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">REASON</h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
            Ground thoughts in company policy documents, historical memory graphs, mathematical constraints, and multi-agent peer critique.
          </p>

          <ul className="text-xs text-zinc-400 space-y-1.5 font-mono">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              Time-Decay Episodic Context
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              Hierarchical Swarm Arbitration
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              Self-Correction & Safety Rails
            </li>
          </ul>
        </div>

        {/* Step 3: ACT */}
        <div
          className="relative p-6 sm:p-8 rounded-2xl bg-[#080911]/90 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 group"
          onMouseEnter={() => soundFX.playHover()}
        >
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
            <Zap className="w-6 h-6" />
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono text-emerald-400">03 / STAGE</span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              EXECUTION
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">ACT</h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
            Trigger external ERP APIs, dispatch synthesized speech over SIP trunks, adjust financial positions, and commit verified state mutations.
          </p>

          <ul className="text-xs text-zinc-400 space-y-1.5 font-mono">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Deterministic Database Mutators
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              SIP Telephony Audio Response
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Encrypted PDF Payslip Webhooks
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
