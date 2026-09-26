"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/**
 * Cinematic preloader — counter 0→100, terminal boot lines,
 * then curtain wipe up. Fires `onDone` so hero can choreograph in.
 */
export default function Preloader({ onDone }: { onDone?: () => void }) {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: 100,
      duration: 1.9,
      ease: "power2.inOut",
      onUpdate: () => setCount(Math.round(obj.v)),
      onComplete: () => {
        setLeaving(true);
        setTimeout(() => {
          setGone(true);
          onDone?.();
        }, 750);
      },
    });
    return () => {
      tween.kill();
    };
  }, [onDone]);

  useEffect(() => {
    if (leaving && rootRef.current) {
      gsap.to(rootRef.current, {
        yPercent: -100,
        duration: 0.75,
        ease: "power4.inOut",
      });
    }
  }, [leaving]);

  if (gone) return null;

  const lines = [
    "> initialising sentient kernel v3.1 …",
    "> loading acoustic / spatial / quant weights …",
    "> zero-hallucination contract … OK",
  ];

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[200] bg-[#f4f2ed] text-[#0b0b0f] flex flex-col justify-between p-6 sm:p-10"
    >
      <div className="flex items-center justify-between font-jbmono text-[11px] tracking-[0.25em] uppercase text-black/40">
        <span>Sentiently® Lab</span>
        <span className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-[#4d7c0f]" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4d7c0f]" />
          </span>
          Booting intelligence
        </span>
      </div>

      <div className="space-y-3 font-jbmono text-[11px] sm:text-xs text-black/40">
        {lines.map((l, i) => (
          <p
            key={l}
            style={{
              opacity: count > (i + 1) * 28 ? 1 : 0.25,
              transition: "opacity 0.3s",
            }}
          >
            {l}
          </p>
        ))}
      </div>

      <div>
        <div className="flex items-end justify-between">
          <h1 className="font-display font-700 font-bold tracking-[-0.04em] leading-none text-[26vw] sm:text-[18vw] tabular-nums">
            {count}
          </h1>
          <p className="font-display text-sm sm:text-base text-black/50 max-w-[180px] text-right leading-snug pb-3">
            machines that <span className="text-[#4d7c0f] font-bold">think</span>, systems that act.
          </p>
        </div>
        <div className="mt-4 h-px w-full bg-black/10 overflow-hidden">
          <div
            className="h-full w-full bg-[#0b0b0f] origin-left"
            style={{ transform: `scaleX(${count / 100})` }}
          />
        </div>
        <div className="mt-3 flex justify-between font-jbmono text-[10px] tracking-[0.25em] uppercase text-black/30">
          <span>AI-Native Invention Lab</span>
          <span>EST. 2026 — IND</span>
        </div>
      </div>
    </div>
  );
}
