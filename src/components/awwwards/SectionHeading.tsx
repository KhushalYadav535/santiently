"use client";

import React from "react";
import { RevealLines, FadeUp } from "./Reveal";

/**
 * Awwwards section heading — mono index + label + giant display title.
 */
export default function SectionHeading({
  index,
  label,
  title,
  accent,
  align = "left",
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  accent?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`relative flex flex-col gap-5 ${alignCls}`}>
      <span
        aria-hidden
        className="ghost-word pointer-events-none absolute -top-12 sm:-top-16 right-0 font-display font-bold leading-none text-[26vw] sm:text-[10rem] select-none"
      >
        {index}
      </span>
      <FadeUp>
        <div className="relative flex items-center gap-3 font-jbmono text-[11px] tracking-[0.3em] uppercase text-black/40">
          <span className="flex items-center gap-1.5 text-[#4d7c0f] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4d7c0f] animate-pulse" />
            {index}
          </span>
          <span className="h-px w-10 bg-black/20" />
          <span>{label}</span>
        </div>
      </FadeUp>
      <RevealLines
        as="h2"
        className="font-display font-bold tracking-[-0.035em] leading-[0.95] text-[#0b0b0f] text-[13vw] sm:text-[7.5vw] lg:text-[5.2vw]"
      >
        {title}
      </RevealLines>
      {accent && (
        <FadeUp delay={0.15}>
          <p className="max-w-xl text-black/55 text-sm sm:text-base leading-relaxed">{accent}</p>
        </FadeUp>
      )}
    </div>
  );
}
