"use client";

import React from "react";
import { Search, FlaskConical, Code2, Rocket, TrendingUp, CheckCircle, ShieldCheck } from "lucide-react";
import { soundFX } from "@/utils/audio";
import Tilt3DCard from "@/components/ui/Tilt3DCard";
import SectionHeading from "@/components/awwwards/SectionHeading";
import { FadeUp } from "@/components/awwwards/Reveal";

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
    desc: "Spinning up rapid stress benchmarks in the Santiently Lab to identify true signal vs vanity demos.",
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
  const handleSpotlight = (e: React.MouseEvent<HTMLDivElement>) => {
    const t = (e.target as HTMLElement).closest?.(".spotlight-card") as HTMLElement | null;
    if (!t) return;
    const r = t.getBoundingClientRect();
    t.style.setProperty("--mx", `${e.clientX - r.left}px`);
    t.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section id="engine" className="relative py-24 sm:py-32 px-5 sm:px-10 max-w-[1600px] mx-auto">
      <div className="mb-16">
        <SectionHeading
          align="center"
          index="10"
          label="Continuous delivery flywheel"
          title={
            <>
              <span>The Santiently</span>
              <span>
                Product <span className="text-stroke">Engine</span>
              </span>
            </>
          }
          accent="We don't keep AI trapped in research notebooks. A continuous pipeline turns experimental capabilities into battle-tested commercial software."
        />
      </div>

      {/* 5-Step Pipeline Horizontal Ribbon */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative" onMouseMove={handleSpotlight}>
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
                className="spotlight-card relative p-5 rounded-2xl bg-white border border-black/10 shadow-xs hover:border-black/30 hover:shadow-[0_20px_48px_-20px_rgba(11,11,15,0.28)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between h-full"
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

                <div className="mt-4 pt-3 border-t border-black/10 flex items-center gap-1.5 text-[10px] font-mono text-neutral-500">
                  <span>GATEWAY {index + 1} VERIFIED</span>
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                </div>
              </div>
            </Tilt3DCard>
          );
        })}
      </div>

      {/* Callout Box: Real World Proof */}
      <FadeUp>
      <div className="mt-12 p-6 sm:p-8 rounded-[24px] bg-[#0b0b0f] text-[#f4f2ed] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_24px_64px_-24px_rgba(11,11,15,0.5)]">
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d8ff3e] font-bold">
            <ShieldCheck className="w-4 h-4 text-[#d8ff3e]" />
            <span>COMMERCIAL REALITY CHECK</span>
          </div>
          <h4 className="font-display text-lg sm:text-2xl font-bold tracking-tight">
            Not AI for demos. AI for real work.
          </h4>
          <p className="text-xs sm:text-sm text-white/60 max-w-2xl leading-relaxed">
            Our products operate under real-world conditions: handling messy telephone audio, noisy background environments, imperfect document scans, high-frequency financial volatility, and complex corporate payroll regulations.
          </p>
        </div>

        <a
          href="#products"
          className="flex-shrink-0 px-6 py-3 rounded-full text-xs font-bold bg-[#d8ff3e] text-black hover:bg-white transition-all"
          onClick={() => soundFX.playClick()}
        >
          Explore All Deployed Systems
        </a>
      </div>
      </FadeUp>
    </section>
  );
}
