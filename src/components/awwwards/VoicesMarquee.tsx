"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { FadeUp } from "./Reveal";

type Voice = {
  quote: string;
  name: string;
  role: string;
  system: string;
  accent: string;
};

const ROW_A: Voice[] = [
  {
    quote: "Our Hindi collection calls went from 11% contact-rate to 34% in six weeks. Callers genuinely can't tell it's an agent.",
    name: "VP Engineering",
    role: "Large NBFC, Mumbai",
    system: "VoCred 2.0",
    accent: "#4d7c0f",
  },
  {
    quote: "TextMitra reads our most cursed vendor invoices — skewed scans, missing GSTINs — and still posts 99%+ straight-through.",
    name: "Finance Controller",
    role: "3PL Logistics, Gurgaon",
    system: "TextMitra",
    accent: "#0e7490",
  },
  {
    quote: "The barge-in is unreal. Customers interrupt mid-sentence and VoCred pivots instantly. Zero awkward overlap.",
    name: "Head of Support",
    role: "D2C Retail, Bengaluru",
    system: "VoCred 2.0",
    accent: "#4d7c0f",
  },
  {
    quote: "Leave queries that ate 3 HR days a month now resolve themselves in Slack. The policy citations are always exact.",
    name: "People Ops Lead",
    role: "IT Services, Hyderabad",
    system: "Swarm HRMS",
    accent: "#6d28d9",
  },
];

const ROW_B: Voice[] = [
  {
    quote: "We stress-tested the quant feed through a volatile expiry week. 42ms held. Our desk won't trade without it now.",
    name: "Quant Researcher",
    role: "Prop Desk, Mumbai",
    system: "AlphaSentient",
    accent: "#b45309",
  },
  {
    quote: "On-prem SIP deployment took one afternoon. Air-gapped, compliant, and our auditors actually smiled.",
    name: "CTO",
    role: "Private Bank, Chennai",
    system: "VoCred 2.0",
    accent: "#4d7c0f",
  },
  {
    quote: "Twenty-two font styles across five states' invoices. One schema. I stopped believing in OCR chaos.",
    name: "Founder",
    role: "FMCG Distribution, Delhi",
    system: "TextMitra",
    accent: "#0e7490",
  },
  {
    quote: "Three agents argue, one verified answer lands. Our hiring pipeline runs itself while we sleep.",
    name: "COO",
    role: "Healthcare Chain, Pune",
    system: "Swarm HRMS",
    accent: "#6d28d9",
  },
];

function VoiceCard({ v }: { v: Voice }) {
  return (
    <div
      data-cursor-label="VERIFIED"
      className="group w-[320px] sm:w-[400px] shrink-0 rounded-[20px] bg-white border border-black/10 p-6 flex flex-col justify-between gap-5 hover:border-black/25 hover:shadow-[0_24px_56px_-20px_rgba(11,11,15,0.25)] hover:-translate-y-1 transition-all duration-300"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-0.5">
            {[0, 1, 2, 3, 4].map((s) => (
              <Star key={s} className="w-3.5 h-3.5 fill-[#4d7c0f] text-[#4d7c0f]" />
            ))}
          </span>
          <span
            className="font-jbmono text-[10px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full border"
            style={{ color: v.accent, borderColor: `${v.accent}44`, backgroundColor: `${v.accent}0d` }}
          >
            {v.system}
          </span>
        </div>
        <Quote className="w-5 h-5 text-black/15 mt-4" />
        <p className="mt-2 text-[14px] sm:text-[15px] leading-relaxed text-black/75 font-medium">
          &ldquo;{v.quote}&rdquo;
        </p>
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-black/10">
        <span
          className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm text-white shrink-0"
          style={{ background: `linear-gradient(135deg, ${v.accent}, #0b0b0f)` }}
        >
          {v.name.charAt(0)}
        </span>
        <div>
          <p className="text-[13px] font-bold text-black">{v.name}</p>
          <p className="font-jbmono text-[10px] tracking-[0.12em] uppercase text-black/40">{v.role}</p>
        </div>
      </div>
    </div>
  );
}

function TickerRow({ items, reverse = false }: { items: Voice[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden tick-fade ticker-pause">
      <div
        className="flex gap-5 w-max py-2"
        style={{
          animation: `aww-marquee ${reverse ? "46s" : "38s"} linear infinite${reverse ? " reverse" : ""}`,
        }}
      >
        {doubled.map((v, i) => (
          <VoiceCard key={`${v.system}-${i}`} v={v} />
        ))}
      </div>
    </div>
  );
}

/**
 * Voices from production — dual counter-scrolling testimonial ticker.
 */
export default function VoicesMarquee() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden">
      <div className="px-5 sm:px-10 max-w-[1600px] mx-auto mb-12">
        <SectionHeading
          index="12"
          label="Voices from production"
          title={
            <>
              <span>Operators don&apos;t</span>
              <span>
                <span className="font-serif-it font-normal text-[#4d7c0f]">rave</span> lightly.
              </span>
            </>
          }
          accent="Unedited notes from teams running Santiently systems in live commercial environments."
        />
      </div>
      <FadeUp>
        <div className="space-y-5">
          <TickerRow items={ROW_A} />
          <TickerRow items={ROW_B} reverse />
        </div>
      </FadeUp>
      <div className="px-5 sm:px-10 max-w-[1600px] mx-auto mt-10">
        <p className="font-jbmono text-[10px] tracking-[0.28em] uppercase text-black/30 text-center">
          Hover to pause — every story is tied to a live kernel above
        </p>
      </div>
    </section>
  );
}
