"use client";

import React from "react";
import { Activity, FileScan, Zap, Layers, Users, ShieldCheck } from "lucide-react";
import CountUp from "./CountUp";
import { FadeUp } from "./Reveal";

const STATS: {
  icon: React.ElementType;
  value: React.ReactNode;
  label: string;
  sub: string;
}[] = [
  {
    icon: Activity,
    value: (
      <>
        &lt;<CountUp to={280} suffix="ms" />
      </>
    ),
    label: "Voice glass-to-glass",
    sub: "Streaming telephony, SIP to speaker",
  },
  {
    icon: FileScan,
    value: <CountUp to={99.4} decimals={1} suffix="%" />,
    label: "Spatial OCR precision",
    sub: "Millimeter coordinate extraction",
  },
  {
    icon: Zap,
    value: <CountUp to={42} suffix="ms" />,
    label: "Quant tick execution",
    sub: "Co-located LPU inference",
  },
  {
    icon: Layers,
    value: <CountUp to={7} pad={2} />,
    label: "Production systems",
    sub: "Live across voice, vision, quant",
  },
  {
    icon: Users,
    value: (
      <>
        <CountUp to={2400} suffix="+" />
      </>
    ),
    label: "Builders shipping",
    sub: "Engineers running our kernels",
  },
  {
    icon: ShieldCheck,
    value: (
      <>
        <CountUp to={99.99} decimals={2} suffix="%" />
      </>
    ),
    label: "Enterprise SLA",
    sub: "Uptime with deterministic rails",
  },
];

/**
 * Proof-in-numbers wall — ink panel, lime numerals, count-up on scroll.
 */
export default function StatsBand() {
  return (
    <section className="px-5 sm:px-10 max-w-[1600px] mx-auto py-10 sm:py-14">
      <FadeUp>
        <div className="relative overflow-hidden rounded-[28px] bg-[#0b0b0f] text-[#f4f2ed] px-6 sm:px-12 py-12 sm:py-16 shadow-[0_32px_80px_-24px_rgba(11,11,15,0.55)]">
          {/* ambient decor */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute -top-24 left-1/4 w-[480px] h-[300px] blur-[100px] rounded-full opacity-40"
              style={{ background: "radial-gradient(closest-side, rgba(216,255,62,0.35), transparent 72%)" }}
            />
            <div
              className="absolute -bottom-28 right-[-60px] w-[460px] h-[320px] blur-[110px] rounded-full opacity-30"
              style={{ background: "radial-gradient(closest-side, rgba(139,92,246,0.5), transparent 72%)" }}
            />
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)
                `,
                backgroundSize: "56px 56px",
                maskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 30%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 30%, transparent 80%)",
              }}
            />
          </div>

          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="flex items-center gap-3 font-jbmono text-[11px] tracking-[0.3em] uppercase text-white/40">
                  <span className="flex items-center gap-1.5 text-[#d8ff3e] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d8ff3e] animate-pulse" />
                    11
                  </span>
                  <span className="h-px w-10 bg-white/20" />
                  <span>Proof in numbers</span>
                </p>
                <h2 className="mt-4 font-display font-bold tracking-[-0.035em] leading-[0.95] text-4xl sm:text-6xl">
                  Numbers that{" "}
                  <span className="font-serif-it font-normal text-[#d8ff3e]">ship.</span>
                </h2>
              </div>
              <p className="max-w-sm text-white/50 text-sm leading-relaxed">
                No vanity metrics. Every figure below is a live, measured property
                of a production kernel you can interrogate on this page.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  data-cursor-label="MEASURED"
                  className="group bg-[#0b0b0f] p-6 sm:p-8 hover:bg-[#121218] transition-colors"
                >
                  <s.icon className="w-5 h-5 text-[#d8ff3e]" />
                  <p className="mt-4 font-display font-bold tracking-tight text-4xl sm:text-5xl text-white tabular-nums group-hover:text-[#d8ff3e] transition-colors">
                    {s.value}
                  </p>
                  <p className="mt-2 font-jbmono text-[10px] tracking-[0.22em] uppercase text-white/70 font-bold">
                    {s.label}
                  </p>
                  <p className="mt-1 text-[12px] text-white/40">{s.sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-jbmono text-[10px] tracking-[0.24em] uppercase text-white/30">
              <span>Measured on live kernels</span>
              <span className="w-8 h-px bg-white/15" />
              <span>Reproducible on your infra</span>
              <span className="w-8 h-px bg-white/15" />
              <span>Audited end-to-end</span>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
