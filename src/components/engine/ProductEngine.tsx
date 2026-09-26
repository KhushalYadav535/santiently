"use client";

import React from "react";
import { Search, FlaskConical, Code2, Rocket, TrendingUp, CheckCircle, ShieldCheck } from "lucide-react";
import { soundFX } from "@/utils/audio";
import Tilt3DCard from "@/components/ui/Tilt3DCard";

const PIPELINE_STEPS = [
  {
    step: "01",
    title: "RESEARCH",
    desc: "Tracking frontier research papers, acoustic transformer topologies, and geometric graphs.",
    icon: Search,
    color: "#7c3aed"
  },
  {
    step: "02",
    title: "EXPERIMENT",
    desc: "Spinning up rapid stress benchmarks in the Sentiently Lab to identify true signal vs vanity demos.",
    icon: FlaskConical,
    color: "#0284c7"
  },
  {
    step: "03",
    title: "PROTOTYPE",
    desc: "Connecting streaming APIs, state machine guardrails, and real telephony/ERP sandboxes.",
    icon: Code2,
    color: "#059669"
  },
  {
    step: "04",
    title: "PRODUCT",
    desc: "Packaging into turnkey systems (VoCred, TextMitra, AI HRMS) with 99.99% deterministic uptime.",
    icon: Rocket,
    color: "#d97706"
  },
  {
    step: "05",
    title: "SCALE",
    desc: "Deploying high-throughput multi-tenant clusters handling millions of voice calls and documents.",
    icon: TrendingUp,
    color: "#db2777"
  }
];

export default function ProductEngine() {
  return (
    <section id="engine" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-blue-700 text-xs font-mono shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
          <span>THE CONTINUOUS DELIVERY FLYWHEEL</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight">
          The Sentiently Product Engine
        </h2>
        <p className="text-sm sm:text-base text-neutral-600">
          We don&apos;t keep AI trapped in research notebooks. We operate a continuous pipeline that transforms experimental capabilities into battle-tested commercial software.
        </p>
      </div>

      {/* 5-Step Pipeline Horizontal Ribbon */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {PIPELINE_STEPS.map((item, index) => {
          const Icon = item.icon;
          return (
            <Tilt3DCard
              key={item.step}
              maxTilt={7}
              scale={1.03}
              className="rounded-2xl"
            >
              <div
                className="relative p-5 rounded-2xl bg-white border border-gray-200 shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-300 group flex flex-col justify-between h-full"
                onMouseEnter={() => soundFX.playHover()}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-neutral-500">
                      PHASE {item.step}
                    </span>
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 mb-2 font-mono">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[10px] font-mono text-neutral-500">
                  <span>GATEWAY {index + 1} VERIFIED</span>
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                </div>
              </div>
            </Tilt3DCard>
          );
        })}
      </div>

      {/* Callout Box: Real World Proof */}
      <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-blue-50/70 border border-blue-200/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-700 font-semibold">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>COMMERCIAL REALITY CHECK</span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-neutral-900">
            Not AI for demos. AI for real work.
          </h4>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl leading-relaxed">
            Our products operate under real-world conditions: handling messy telephone audio, noisy background environments, imperfect document scans, high-frequency financial volatility, and complex corporate payroll regulations.
          </p>
        </div>

        <a
          href="#products"
          className="flex-shrink-0 px-6 py-3 rounded-full text-xs font-semibold bg-neutral-900 text-white hover:bg-black transition-all shadow-xs"
          onClick={() => soundFX.playClick()}
        >
          Explore All Deployed Systems
        </a>
      </div>
    </section>
  );
}
