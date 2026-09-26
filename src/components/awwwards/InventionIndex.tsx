"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mic, FileText, TrendingUp, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { FadeUp } from "./Reveal";

const ITEMS = [
  {
    n: "01",
    name: "VoCred 2.0",
    tag: "Acoustic telephony kernel",
    desc: "Sub-280ms Hindi conversational voice over SIP trunks. 45ms zero-tail barge-in. Human cadence, machine scale.",
    stat: "<280ms",
    statLabel: "glass-to-glass",
    icon: Mic,
    href: "/vocred",
    accent: "#4d7c0f",
  },
  {
    n: "02",
    name: "TextMitra",
    tag: "Spatial coordinate OCR",
    desc: "Millimeter-level layout extraction across ledgers in 22 Indian fonts. Deterministic grids, zero hallucination.",
    stat: "99.4%",
    statLabel: "coordinate precision",
    icon: FileText,
    href: "/textmitra",
    accent: "#0e7490",
  },
  {
    n: "03",
    name: "AlphaSentient",
    tag: "Quant microstructure engine",
    desc: "Co-located LPU inference on live order flow. Probabilistic microstructure models executing statistical arb.",
    stat: "42ms",
    statLabel: "tick execution",
    icon: TrendingUp,
    href: "/trading",
    accent: "#6d28d9",
  },
  {
    n: "04",
    name: "Swarm HRMS",
    tag: "Agent arbitration layer",
    desc: "Competing LLM proposals synthesised under deterministic schema contracts. Policy Q&A with verified citations.",
    stat: "3×",
    statLabel: "agents per decision",
    icon: Users,
    href: "/ai-hrms",
    accent: "#0b0b0f",
  },
];

export default function InventionIndex() {
  return (
    <section id="index" className="relative px-5 sm:px-10 py-28 sm:py-36 max-w-[1600px] mx-auto">
      <SectionHeading
        index="02"
        label="Invention index"
        title={
          <>
            <span>Four systems.</span>
            <span>
              One <span className="text-[#4d7c0f]">sentient</span>
            </span>
            <span className="text-stroke">doctrine.</span>
          </>
        }
        accent="Every invention below is live and interrogable — click through to run the real kernel, not a marketing video."
      />

      <div className="mt-14 flex flex-col">
        {ITEMS.map((it, i) => (
          <FadeUp key={it.n} delay={i * 0.05}>
            <Link
              href={it.href}
              data-cursor-label="OPEN SYSTEM"
              className="group grid grid-cols-[auto_1fr_auto] sm:grid-cols-[80px_1fr_1fr_auto] items-center gap-4 sm:gap-8 py-8 sm:py-10 border-t border-black/10 last:border-b hover:bg-black/[0.025] transition-colors px-2 sm:px-6 -mx-2 sm:-mx-6 rounded-xl"
            >
              <span className="font-jbmono text-[12px] text-black/30 group-hover:text-[#4d7c0f] transition-colors">
                ({it.n})
              </span>
              <div>
                <div className="flex items-center gap-3">
                  <it.icon className="w-5 h-5 text-black/40 group-hover:text-[#4d7c0f] transition-colors" />
                  <h3 className="font-display font-bold tracking-tight text-[#0b0b0f] text-3xl sm:text-5xl group-hover:translate-x-2 transition-transform duration-300">
                    {it.name}
                  </h3>
                </div>
                <p className="mt-2 font-jbmono text-[10px] tracking-[0.25em] uppercase text-black/35">{it.tag}</p>
                <p className="mt-3 max-w-xl text-sm text-black/50 leading-relaxed hidden sm:block">{it.desc}</p>
              </div>
              <div className="hidden sm:block text-right">
                <p className="font-display font-bold text-4xl tabular-nums" style={{ color: it.accent }}>
                  {it.stat}
                </p>
                <p className="font-jbmono text-[10px] tracking-[0.2em] uppercase text-black/35 mt-1">{it.statLabel}</p>
              </div>
              <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black/15 text-black flex items-center justify-center group-hover:bg-[#0b0b0f] group-hover:border-[#0b0b0f] group-hover:text-[#d8ff3e] transition-all duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </Link>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
