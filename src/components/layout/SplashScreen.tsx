"use client";

import React, { useEffect, useState } from "react";

/**
 * Paper mini-loader for sub-pages — consistent with homepage Preloader.
 */
export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setIsFading(true), 700);
    const t2 = setTimeout(() => setShow(false), 1200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#f4f2ed] transition-all duration-500 ease-out ${
        isFading ? "opacity-0 scale-[1.04] pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      <div className="flex flex-col items-center select-none">
        <div className="relative w-14 h-14 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#0b0b0f] opacity-90 animate-blob" />
          <div className="absolute inset-0 rounded-full bg-[#6d28d9] opacity-60 animate-blob animation-delay-2000" />
          <div className="relative w-5 h-5 bg-[#d8ff3e] rounded-full z-10" />
        </div>
        <p className="mt-5 font-display font-bold tracking-tight text-[#0b0b0f]">
          Santiently<span className="text-[#4d7c0f]">®</span>
        </p>
        <span className="font-jbmono text-[9px] tracking-[0.3em] uppercase text-black/30 mt-2">
          AI-Native Lab
        </span>
      </div>
    </div>
  );
}
