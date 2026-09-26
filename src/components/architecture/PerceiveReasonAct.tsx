"use client";

import React from "react";
import { Eye, Brain, Zap, Sparkles } from "lucide-react";
import { soundFX } from "@/utils/audio";

export default function PerceiveReasonAct() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-blue-700 text-xs font-mono shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>THE COMMON AGENTIC LOOP</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
          Intelligence, Shipped.
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600">
          Every product we ship follows a rigorous, closed-loop triad: perceiving sensory input, synthesizing deep reasoning, and executing deterministically.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Step 1: PERCEIVE */}
        <div
          className="relative p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/90 hover:border-cyan-400 shadow-xs hover:shadow-md transition-all duration-300 group"
          onMouseEnter={() => soundFX.playHover()}
        >
          <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-105 transition-transform">
            <Eye className="w-6 h-6" />
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-semibold text-cyan-700">01 / STAGE</span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200 font-medium">
              INPUT
            </span>
          </div>

          <h3 className="text-xl font-bold text-neutral-900 mb-2">PERCEIVE</h3>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
            Ingest streaming voice, acoustic prosody, distorted document scans, IoT telemetry, and unstructured intent with near-zero latency.
          </p>

          <ul className="text-xs text-neutral-600 space-y-2 font-mono pt-2 border-t border-gray-100">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              Streaming Speech Ingestion (24kHz)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              Spatial Vision OCR Layouts
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              Real-time Sentiment Telemetry
            </li>
          </ul>
        </div>

        {/* Step 2: REASON */}
        <div
          className="relative p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/90 hover:border-purple-400 shadow-xs hover:shadow-md transition-all duration-300 group"
          onMouseEnter={() => soundFX.playHover()}
        >
          <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-105 transition-transform">
            <Brain className="w-6 h-6" />
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-semibold text-purple-700">02 / STAGE</span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 font-medium">
              SYNTHESIS
            </span>
          </div>

          <h3 className="text-xl font-bold text-neutral-900 mb-2">REASON</h3>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
            Ground thoughts in company policies, episodic memory graphs, mathematical constraints, and multi-agent peer critique loops.
          </p>

          <ul className="text-xs text-neutral-600 space-y-2 font-mono pt-2 border-t border-gray-100">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              Time-Decay Episodic Graphs
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              Hierarchical Swarm Arbitration
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              Safety Rails & Self-Correction
            </li>
          </ul>
        </div>

        {/* Step 3: ACT */}
        <div
          className="relative p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/90 hover:border-emerald-400 shadow-xs hover:shadow-md transition-all duration-300 group"
          onMouseEnter={() => soundFX.playHover()}
        >
          <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-105 transition-transform">
            <Zap className="w-6 h-6" />
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-semibold text-emerald-700">03 / STAGE</span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
              EXECUTION
            </span>
          </div>

          <h3 className="text-xl font-bold text-neutral-900 mb-2">ACT</h3>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
            Trigger external ERP APIs, dispatch synthesized speech over SIP trunks, adjust financial positions, and commit verified state mutations.
          </p>

          <ul className="text-xs text-neutral-600 space-y-2 font-mono pt-2 border-t border-gray-100">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Deterministic Database Mutators
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              SIP Telephony Audio Response
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Encrypted Webhook Dispatches
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
