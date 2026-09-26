"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import Magnetic from "@/components/awwwards/Magnetic";
import Marquee from "@/components/awwwards/Marquee";

export default function Footer() {
  const cols = [
    {
      h: "Lab",
      links: [
        { n: "Invention Index", h: "/#index" },
        { n: "Live Sandbox", h: "/#playground" },
        { n: "Experiments", h: "/lab" },
        { n: "Architecture", h: "/#architecture" },
      ],
    },
    {
      h: "Systems",
      links: [
        { n: "VoCred 2.0", h: "/vocred" },
        { n: "TextMitra", h: "/textmitra" },
        { n: "AlphaSentient", h: "/trading" },
        { n: "AI-HRMS", h: "/ai-hrms" },
      ],
    },
    {
      h: "Company",
      links: [
        { n: "Manifesto", h: "/#manifesto" },
        { n: "About", h: "/about" },
        { n: "Contact", h: "/#contact" },
      ],
    },
  ];

  return (
    <footer id="finale" className="relative bg-[#f4f2ed] text-[#0b0b0f] overflow-hidden border-t border-black/10">
      {/* CTA */}
      <div className="px-5 sm:px-10 pt-24 sm:pt-32 pb-10 max-w-[1600px] mx-auto">
        <p className="font-jbmono text-[11px] tracking-[0.3em] uppercase text-black/40">
          <span className="text-[#4d7c0f] font-bold">12</span>
          <span className="mx-3 text-black/20">—</span> Final transmission
        </p>
        <Link href="mailto:hello@sentiently.ai" data-cursor-label="SAY HELLO">
          <h2 className="mt-6 font-display font-bold tracking-[-0.04em] leading-[0.9] text-[15vw] sm:text-[10vw]">
            LET&apos;S BUILD
            <br />
            <span className="font-serif-it font-normal tracking-[-0.02em] text-[#4d7c0f]">Sentience</span>
            <span className="text-[#4d7c0f]">↗</span>
          </h2>
        </Link>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
          <p className="max-w-md text-black/55 text-sm sm:text-base leading-relaxed">
            Voice, vision, quant, swarms — one AI-native engineering team.
            Tell us the impossible workflow. We&apos;ll ship the system.
          </p>
          <div className="flex items-center gap-3">
            <Magnetic>
              <a
                href="mailto:hello@sentiently.ai"
                className="btn-shine inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#0b0b0f] text-[#d8ff3e] text-sm font-bold hover:bg-[#4d7c0f] hover:text-white transition-colors"
              >
                hello@sentiently.ai <ArrowUpRight className="w-4 h-4" />
              </a>
            </Magnetic>
            <Magnetic>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                className="w-[52px] h-[52px] rounded-full border border-black/15 flex items-center justify-center hover:bg-black/[0.05] transition-colors"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="border-y border-black/10 py-5 mt-6">
        <Marquee
          items={["AI-Native", "Voice", "Vision", "Quant", "Swarms", "Zero-Hallucination"]}
          outline
        />
      </div>

      {/* Link grid */}
      <div className="px-5 sm:px-10 py-14 max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#0b0b0f] flex items-center justify-center font-display font-bold text-[#d8ff3e] text-sm">S</div>
            <p className="font-display font-bold">Santiently®</p>
          </div>
          <p className="mt-4 font-jbmono text-[10px] tracking-[0.25em] uppercase text-black/35 leading-loose">
            AI-Native
            <br />
            Invention Lab
            <br />
            EST. 2026 — IND
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <p className="font-jbmono text-[10px] tracking-[0.3em] uppercase text-black/35">{c.h}</p>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l.n}>
                  <Link
                    href={l.h}
                    className="group inline-flex items-center gap-1 text-sm text-black/70 hover:text-[#4d7c0f] transition-colors"
                  >
                    {l.n}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="px-5 sm:px-10 pb-8 max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between gap-3 font-jbmono text-[10px] tracking-[0.25em] uppercase text-black/30">
        <span>© 2026 Santiently Innovation</span>
        <span>
          Perceive <span className="text-[#4d7c0f]">→</span> Reason <span className="text-[#4d7c0f]">→</span> Act
        </span>
      </div>
    </footer>
  );
}
