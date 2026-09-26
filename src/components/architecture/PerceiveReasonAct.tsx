"use client";

import React from "react";
import { Eye, Brain, Zap, Sparkles } from "lucide-react";
import { soundFX } from "@/utils/audio";
import Tilt3DCard from "@/components/ui/Tilt3DCard";
import ArchitectureFlow from "./ArchitectureFlow";
import SectionHeading from "@/components/awwwards/SectionHeading";

export default function PerceiveReasonAct() {
  const handleSpotlight = (e: React.MouseEvent<HTMLDivElement>) => {
    const t = (e.target as HTMLElement).closest?.(".spotlight-card") as HTMLElement | null;
    if (!t) return;
    const r = t.getBoundingClientRect();
    t.style.setProperty("--mx", `${e.clientX - r.left}px`);
    t.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section className="relative py-24 sm:py-32 px-5 sm:px-10 max-w-[1600px] mx-auto">
      <div className="mb-14">
        <SectionHeading
          align="center"
          index="08"
          label="The common agentic loop"
          title={
            <>
              <span>Intelligence,</span>
              <span className="text-[#4d7c0f]">Shipped.</span>
            </>
          }
          accent="Every product follows a rigorous closed loop: perceiving input, synthesising reasoning, executing deterministically."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative" onMouseMove={handleSpotlight}>
        {/* Step 1: PERCEIVE */}
        <Tilt3DCard
          maxTilt={7}
          scale={1.02}
          onMouseEnter={() => soundFX.playHover()}
          className="rounded-2xl"
        >
          <div className="relative p-6 sm:p-8 rounded-[20px] spotlight-card bg-white border border-black/10 hover:border-cyan-400 shadow-xs hover:shadow-md transition-all duration-300 group h-full flex flex-col justify-between">
            <div>
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
            </div>

            <ul className="text-xs text-neutral-600 space-y-2 font-mono pt-4 border-t border-black/10">
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
        </Tilt3DCard>

        {/* Step 2: REASON */}
        <Tilt3DCard
          maxTilt={7}
          scale={1.02}
          onMouseEnter={() => soundFX.playHover()}
          className="rounded-2xl"
        >
          <div className="relative p-6 sm:p-8 rounded-[20px] spotlight-card bg-white border border-black/10 hover:border-purple-400 shadow-xs hover:shadow-md transition-all duration-300 group h-full flex flex-col justify-between">
            <div>
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
            </div>

            <ul className="text-xs text-neutral-600 space-y-2 font-mono pt-4 border-t border-black/10">
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
        </Tilt3DCard>

        {/* Step 3: ACT */}
        <Tilt3DCard
          maxTilt={7}
          scale={1.02}
          onMouseEnter={() => soundFX.playHover()}
          className="rounded-2xl"
        >
          <div className="relative p-6 sm:p-8 rounded-[20px] spotlight-card bg-white border border-black/10 hover:border-emerald-400 shadow-xs hover:shadow-md transition-all duration-300 group h-full flex flex-col justify-between">
            <div>
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
            </div>

            <ul className="text-xs text-neutral-600 space-y-2 font-mono pt-4 border-t border-black/10">
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
        </Tilt3DCard>
      </div>

      {/* Dynamic Animated Photon Beam Stream */}
      <ArchitectureFlow />
    </section>
  );
}
