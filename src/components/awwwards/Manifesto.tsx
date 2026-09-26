"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

/**
 * Manifesto — pinned word-by-word illumination on scroll.
 * The AI-native thesis.
 */
const WORDS =
  "Software ate the world. AI will rewire it. We engineer probabilistic minds into deterministic enterprise systems — voice, vision, quant, swarms — shipped as production reality, not demos.".split(
    " "
  );

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll(".mword");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.14 },
        {
          opacity: 1,
          stagger: 0.06,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 75%", end: "bottom 45%", scrub: 0.6 },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="manifesto" className="relative px-5 sm:px-10 py-28 sm:py-40 max-w-[1600px] mx-auto">
      <SectionHeading
        index="01"
        label="Manifesto"
        title={
          <>
            <span>We don&apos;t ship</span>
            <span>
              features<span className="text-[#4d7c0f]">.</span> We birth
            </span>
            <span className="text-stroke">intelligence.</span>
          </>
        }
      />
      <div ref={ref} className="mt-14 max-w-4xl">
        <p className="font-display font-medium tracking-tight leading-[1.25] text-[#0b0b0f] text-2xl sm:text-4xl">
          {WORDS.map((w, i) => {
            const hot = ["probabilistic", "deterministic", "production", "reality,"].includes(w);
            return (
              <span key={i} className={`mword ${hot ? "text-[#4d7c0f] font-bold" : ""}`}>
                {w}{" "}
              </span>
            );
          })}
        </p>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10 rounded-2xl overflow-hidden border border-black/10">
        {[
          { k: "Voice", v: "Conversational telephony kernels" },
          { k: "Vision", v: "Millimeter coordinate reading" },
          { k: "Quant", v: "Edge microstructure inference" },
          { k: "Swarms", v: "Multi-agent arbitration" },
        ].map((c) => (
          <div key={c.k} className="bg-white p-6 sm:p-8 hover:bg-[#0b0b0f] hover:text-[#f4f2ed] transition-colors group">
            <p className="font-display font-bold text-xl group-hover:text-[#d8ff3e] transition-colors">{c.k}</p>
            <p className="mt-2 text-[13px] opacity-55 leading-relaxed">{c.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
