"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, ArrowUpRight, MessageSquare } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { FadeUp } from "./Reveal";
import Magnetic from "./Magnetic";

type Faq = {
  q: string;
  a: string;
  tag: string;
};

const FAQS: Faq[] = [
  {
    q: "What does “AI-native” actually mean?",
    a: "Most software bolts a chatbot onto a legacy screen. Our systems are designed around probabilistic reasoning from the silicon up — perception, memory, arbitration and deterministic execution are architectural layers, not plugins. The agent doesn't assist your workflow. It is your workflow.",
    tag: "Doctrine",
  },
  {
    q: "How fast can we go live?",
    a: "A pilot runs in 2–4 weeks on your real data: a VoCred voice agent on 100 live calls, or TextMitra parsing your actual invoices. Pilots graduate to production only after crossing benchmark thresholds — latency, precision and hallucination rate — measured on your traffic, not ours.",
    tag: "Delivery",
  },
  {
    q: "Which languages and dialects are supported?",
    a: "VoCred converses in Hindi, Hinglish, Bengali and Global English with natural Indian prosody and 45ms barge-in. TextMitra reads 22 Indian font styles across Devanagari and Latin scripts with millimeter coordinate fidelity.",
    tag: "Voice + Vision",
  },
  {
    q: "Can this run inside our own infrastructure?",
    a: "Yes. VoCred ships as a cloud cluster or fully air-gapped on-premise with SIP trunking and Asterisk compatibility. TextMitra and the swarm layer deploy as containers behind your firewall with AES-256 encryption and zero-trust tenant isolation.",
    tag: "Security",
  },
  {
    q: "How do you stop hallucinations?",
    a: "Every agent action is bounded by deterministic schema contracts: extracted totals must mathematically reconcile, voice tool-calls must verify state before mutating records, and multi-agent arbitration requires consensus before execution. Anything unverifiable is flagged for human review — never guessed.",
    tag: "Safety",
  },
  {
    q: "What does it cost?",
    a: "Pilots are fixed-scope and fixed-price so you can measure ROI before committing. Production scales on throughput — concurrent voice channels, documents parsed, decisions arbitrated — never on seats. One autonomous agent typically replaces 3–5x its cost in manual operations within a quarter.",
    tag: "Commercial",
  },
  {
    q: "Will it integrate with our ERP, CRM and PBX?",
    a: "That's the default, not an upsell. VoCred speaks SIP, WebRTC and REST to your PBX, CRM and billing engines. TextMitra dispatches validated JSON over webhooks into your ERP and accounting pipelines. If it has an API, we can wire an agent to it.",
    tag: "Integrations",
  },
  {
    q: "Who owns the system once deployed?",
    a: "You do. Full source handover, runbooks, benchmark suites and training for your team. We stay as the research engine behind your roadmap — but nothing we build holds your operations hostage.",
    tag: "Ownership",
  },
];

function FaqItem({
  faq,
  index,
  open,
  onToggle,
}: {
  faq: Faq;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`group rounded-[20px] border transition-all duration-300 overflow-hidden ${
        open
          ? "bg-[#0b0b0f] text-[#f4f2ed] border-[#0b0b0f] shadow-[0_24px_56px_-20px_rgba(11,11,15,0.5)]"
          : "bg-white text-black border-black/10 hover:border-black/30 hover:shadow-[0_16px_40px_-20px_rgba(11,11,15,0.2)]"
      }`}
    >
      <button
        onClick={onToggle}
        data-cursor-label={open ? "CLOSE" : "OPEN"}
        className="w-full flex items-center gap-4 sm:gap-6 p-5 sm:p-7 text-left"
        aria-expanded={open}
      >
        <span
          className={`font-jbmono text-[11px] font-bold shrink-0 w-8 ${
            open ? "text-[#d8ff3e]" : "text-black/30"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1">
          <span
            className={`block font-jbmono text-[10px] tracking-[0.22em] uppercase font-bold mb-1 ${
              open ? "text-[#d8ff3e]/70" : "text-[#4d7c0f]"
            }`}
          >
            {faq.tag}
          </span>
          <span className="block font-display font-bold tracking-tight text-lg sm:text-2xl leading-snug">
            {faq.q}
          </span>
        </span>
        <span
          className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
            open
              ? "bg-[#d8ff3e] text-black rotate-45"
              : "bg-black/[0.04] text-black group-hover:bg-[#0b0b0f] group-hover:text-[#d8ff3e]"
          }`}
        >
          <Plus className="w-5 h-5" />
        </span>
      </button>
      <div
        className="grid transition-all duration-400 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p
            className={`px-5 sm:px-7 pb-6 sm:pb-7 pl-[52px] sm:pl-[64px] pr-8 text-sm sm:text-[15px] leading-relaxed ${
              open ? "text-white/65" : "text-black/60"
            }`}
          >
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Straight answers — animated ink-inverting FAQ accordion.
 */
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-5 sm:px-10 max-w-[1600px] mx-auto py-24 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* sticky intro */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              index="13"
              label="Straight answers"
              title={
                <>
                  <span>Asked in every</span>
                  <span>
                    boardroom<span className="text-[#4d7c0f]">.</span>
                  </span>
                </>
              }
              accent="The eight questions every enterprise asks before deploying autonomous systems — answered without marketing fog."
            />
            <FadeUp delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <Link
                    href="/#contact"
                    className="btn-shine inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#0b0b0f] text-[#d8ff3e] text-sm font-bold hover:bg-[#4d7c0f] hover:text-white transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Ask us anything
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    href="/lab"
                    className="inline-flex items-center gap-1.5 px-7 py-4 rounded-full border border-black/15 text-sm font-bold text-black hover:border-[#4d7c0f] hover:text-[#4d7c0f] transition-colors bg-white/50"
                  >
                    See the research <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Magnetic>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-8 font-jbmono text-[10px] tracking-[0.28em] uppercase text-black/30">
                Avg. pilot decision — 11 days
              </p>
            </FadeUp>
          </div>
        </div>

        {/* accordion */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {FAQS.map((faq, i) => (
            <FadeUp key={faq.q} delay={Math.min(i * 0.05, 0.25)}>
              <FaqItem
                faq={faq}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
