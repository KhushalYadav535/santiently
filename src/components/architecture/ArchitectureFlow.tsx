"use client";

import React, { useState } from "react";
import { Mic, FileText, Database, Cpu, Radio, ShieldCheck, ArrowRight, Zap, Layers } from "lucide-react";
import { soundFX } from "@/utils/audio";

export default function ArchitectureFlow() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      step: 1,
      title: "PERCEIVE (Sensory Ingestion)",
      subtitle: "Streaming audio, unstructured documents & market ticks",
      icon: Mic,
      color: "from-blue-500 to-cyan-500",
      textColor: "text-blue-600",
      borderColor: "border-blue-300",
      bgColor: "bg-blue-50",
      specs: ["24kHz PCM Streaming", "Spatial Coordinate OCR", "45ms Acoustic VAD"],
    },
    {
      step: 2,
      title: "REASON (Probabilistic Graph)",
      subtitle: "Dynamic LLM orchestrators & episodic context retrieval",
      icon: Cpu,
      color: "from-purple-500 to-indigo-500",
      textColor: "text-purple-600",
      borderColor: "border-purple-300",
      bgColor: "bg-purple-50",
      specs: ["Groq LPU Acceleration", "Temporal State Machines", "Multi-Agent Arbitration"],
    },
    {
      step: 3,
      title: "ACT (Deterministic Execution)",
      subtitle: "Real-world SIP trunking, database mutations & settlement",
      icon: Radio,
      color: "from-emerald-500 to-teal-500",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-300",
      bgColor: "bg-emerald-50",
      specs: ["Zero-Tail Telephony Cut-off", "Schema Contract Validation", "Cryptographic Audit Trail"],
    },
  ];

  return (
    <div className="relative py-12">
      {/* Interactive Node Flow Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          const isSelected = activeStep === s.step;

          return (
            <div
              key={s.step}
              onClick={() => {
                setActiveStep(s.step);
                soundFX.playClick();
              }}
              onMouseEnter={() => soundFX.playHover()}
              className={`p-6 rounded-2xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? `bg-white ${s.borderColor} shadow-lg scale-[1.02]`
                  : "bg-white/80 border-gray-200/90 hover:border-gray-300 hover:bg-white shadow-2xs"
              }`}
            >
              {/* Top Accent Gradient Bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${s.color} rounded-full mb-4`} />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.bgColor} ${s.textColor} border ${s.borderColor}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-neutral-400">
                    PHASE 0{s.step}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-neutral-900 font-mono">
                    {s.title}
                  </h4>
                  <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                    {s.subtitle}
                  </p>
                </div>
              </div>

              {/* Specs Pills */}
              <div className="pt-4 mt-4 border-t border-gray-100 space-y-1.5">
                {s.specs.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[11px] font-mono text-neutral-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Connecting arrow for desktop between steps */}
              {idx < 2 && (
                <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border border-gray-200 shadow-xs items-center justify-center text-neutral-400">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Animated Flow Photon Beam Indicator */}
      <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-blue-50/80 via-purple-50/80 to-emerald-50/80 border border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-3">
          <div className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600" />
          </div>
          <span className="text-neutral-800 font-semibold">
            TELEMETRY: DATA-PACKET ROUNDTRIP &lt; 280ms
          </span>
        </div>

        <div className="flex items-center gap-4 text-neutral-500 text-[11px]">
          <span>JITTER: 0.8ms</span>
          <span>&bull;</span>
          <span>ZERO-TAIL VAD: ACTIVE</span>
          <span>&bull;</span>
          <span>PII REDACTION: 100% IN-MEMORY</span>
        </div>
      </div>
    </div>
  );
}
