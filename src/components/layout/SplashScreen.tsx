"use client";

import React, { useEffect, useState } from "react";

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const dismiss = () => {
    setIsFading(true);
    setTimeout(() => setShow(false), 500);
  };

  useEffect(() => {
    // 1. Hold splash for a brief cinematic moment (850ms)
    const timer1 = setTimeout(() => {
      setIsFading(true);
    }, 850);

    // 2. Unmount cleanly
    const timer2 = setTimeout(() => {
      setShow(false);
    }, 1450);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      onClick={dismiss}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#f8f9fa] transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer ${
        isFading ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center select-none">
        {/* Animated Google-Labs style Orbs */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500 rounded-full mix-blend-multiply opacity-80 animate-blob" />
          <div className="absolute inset-0 bg-purple-500 rounded-full mix-blend-multiply opacity-80 animate-blob animation-delay-2000" />
          <div className="absolute inset-0 bg-emerald-500 rounded-full mix-blend-multiply opacity-80 animate-blob animation-delay-4000" />

          {/* Inner spark */}
          <div className="relative w-7 h-7 bg-white rounded-full shadow-lg animate-pulse z-10 flex items-center justify-center">
            <div className="w-2 h-2 bg-blue-600 rounded-full" />
          </div>
        </div>

        {/* Sleek Typography Reveal */}
        <div className="mt-6 overflow-hidden h-7">
          <h1 className="text-lg font-medium tracking-tight text-neutral-900 animate-slide-up-splash">
            Sentiently Innovations.
          </h1>
        </div>
        <span className="text-[10px] font-mono text-neutral-400 mt-2">CLICK TO SKIP</span>
      </div>
    </div>
  );
}
