"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/**
 * Cinematic premium preloader — phased sentient boot.
 * listen → reason → act → think, glowing progress, curtain exit.
 */
const PHASES = [
  {
    at: 0,
    word: "listen.",
    label: "Perceiving signal",
    lines: ["> initialising sentient kernel v3.1 …"],
  },
  {
    at: 28,
    word: "reason.",
    label: "Synthesising thought",
    lines: [
      "> initialising sentient kernel v3.1 …",
      "> loading acoustic / spatial / quant weights …",
    ],
  },
  {
    at: 58,
    word: "act.",
    label: "Binding execution rails",
    lines: [
      "> initialising sentient kernel v3.1 …",
      "> loading acoustic / spatial / quant weights …",
      "> binding deterministic action contracts …",
    ],
  },
  {
    at: 84,
    word: "think.",
    label: "Sentience online",
    lines: [
      "> initialising sentient kernel v3.1 …",
      "> loading acoustic / spatial / quant weights …",
      "> binding deterministic action contracts …",
      "> zero-hallucination contract … OK",
    ],
  },
];

export default function Preloader({ onDone }: { onDone?: () => void }) {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const doneRef = useRef(false);

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    setLeaving(true);
    setTimeout(() => {
      setGone(true);
      onDone?.();
    }, 850);
  };

  useEffect(() => {
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: 100,
      duration: 2.4,
      ease: "power2.inOut",
      onUpdate: () => setCount(Math.round(obj.v)),
      onComplete: finish,
    });
    tweenRef.current = tween;
    return () => {
      tween.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!leaving || !rootRef.current) return;
    gsap.to(rootRef.current, {
      yPercent: -100,
      duration: 0.85,
      ease: "power4.inOut",
    });
    if (innerRef.current) {
      gsap.to(innerRef.current, {
        y: -60,
        opacity: 0,
        duration: 0.6,
        ease: "power3.in",
      });
    }
  }, [leaving]);

  if (gone) return null;

  const phase = [...PHASES].reverse().find((p) => count >= p.at) ?? PHASES[0];

  return (
    <div
      ref={rootRef}
      onClick={() => tweenRef.current?.progress(1)}
      className="fixed inset-0 z-[200] bg-[#f4f2ed] text-[#0b0b0f] overflow-hidden cursor-pointer"
    >
      {/* ambient decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 left-1/4 w-[560px] h-[380px] blur-[110px] rounded-full opacity-70"
          style={{ background: "radial-gradient(closest-side, rgba(216,255,62,0.55), transparent 72%)" }}
        />
        <div
          className="absolute bottom-[-120px] right-[-80px] w-[520px] h-[420px] blur-[120px] rounded-full opacity-60"
          style={{ background: "radial-gradient(closest-side, rgba(196,181,253,0.6), transparent 72%)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(11,11,15,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(11,11,15,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 78%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 78%)",
          }}
        />
      </div>

      <div ref={innerRef} className="relative h-full flex flex-col justify-between p-6 sm:p-10">
        {/* header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <span className="absolute inset-0 rounded-xl bg-[#0b0b0f]" />
              <span className="absolute inset-0 rounded-xl border border-[#0b0b0f] animate-ping-soft" style={{ animationDuration: "2.4s" }} />
              <span className="absolute inset-0 flex items-center justify-center font-display font-bold text-[#d8ff3e] text-lg">
                S
              </span>
            </div>
            <div className="leading-none">
              <p className="font-display font-bold tracking-tight text-[15px]">
                Sentiently<sup className="text-[#4d7c0f] text-[10px] ml-0.5">®</sup>
              </p>
              <p className="font-jbmono text-[9px] tracking-[0.3em] uppercase text-black/40 mt-1">
                AI-Native Lab
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span key={phase.label} className="animate-fadeIn hidden sm:inline font-jbmono text-[10px] tracking-[0.28em] uppercase text-black/45">
              <span className="relative inline-flex mr-2 h-1.5 w-1.5 align-middle">
                <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-[#4d7c0f]" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4d7c0f]" />
              </span>
              {phase.label}
            </span>
            <span className="font-jbmono text-[10px] tracking-[0.25em] uppercase text-black/30 border border-black/15 rounded-full px-3 py-1.5">
              Click to skip
            </span>
          </div>
        </div>

        {/* boot log */}
        <div className="space-y-2.5 font-jbmono text-[11px] sm:text-xs text-black/45 max-w-xl">
          {phase.lines.map((l) => (
            <p key={l} className="animate-fadeIn flex items-center gap-2">
              <span className="text-[#4d7c0f] font-bold">▸</span> {l}
            </p>
          ))}
          <p className="text-black/25">
            <span className="inline-block w-[7px] h-[14px] bg-[#0b0b0f] animate-pulse align-middle" />
          </p>
        </div>

        {/* giant count + phase word */}
        <div>
          <div className="flex items-end justify-between gap-6">
            <h1 className="font-display font-bold tracking-[-0.045em] leading-[0.8] text-[30vw] sm:text-[19vw] tabular-nums">
              {count}
              <span className="text-[8vw] sm:text-[4.5vw] align-top text-black/30 font-medium">%</span>
            </h1>
            <div className="text-right pb-2 sm:pb-5 shrink-0">
              <p className="font-jbmono text-[10px] tracking-[0.3em] uppercase text-black/35 mb-1">
                Phase 0{PHASES.indexOf(phase) + 1} / 04
              </p>
              <p
                key={phase.word}
                className="animate-fadeIn font-serif-it text-5xl sm:text-7xl text-[#4d7c0f] leading-none"
              >
                {phase.word}
              </p>
            </div>
          </div>

          {/* progress rail */}
          <div className="mt-5 h-[3px] w-full bg-black/10 rounded-full overflow-visible relative">
            <div
              className="absolute left-0 top-0 h-full bg-[#0b0b0f] rounded-full transition-[width] duration-150"
              style={{ width: `${count}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#4d7c0f] transition-[left] duration-150"
              style={{
                left: `${count}%`,
                boxShadow: "0 0 16px 4px rgba(77,124,15,0.55)",
              }}
            />
          </div>

          <div className="mt-3 flex justify-between font-jbmono text-[10px] tracking-[0.25em] uppercase text-black/30 tabular-nums">
            <span>AI-Native Invention Lab</span>
            <span className="hidden sm:inline">Perceive → Reason → Act</span>
            <span>EST. 2026 — IND</span>
          </div>
        </div>
      </div>
    </div>
  );
}
