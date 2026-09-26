"use client";

import React, { useEffect, useState } from "react";

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // 1. Hold splash for a short moment
    const timer1 = setTimeout(() => {
      setIsFading(true);
    }, 1800);

    // 2. Unmount after fade out completes
    const timer2 = setTimeout(() => {
      setShow(false);
    }, 2800); // 1800 + 1000ms transition

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#f8f9fa] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isFading ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Animated Google-Labs style Orbs */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500 rounded-full mix-blend-multiply opacity-80 animate-blob"></div>
          <div className="absolute inset-0 bg-purple-500 rounded-full mix-blend-multiply opacity-80 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-emerald-500 rounded-full mix-blend-multiply opacity-80 animate-blob animation-delay-4000"></div>
          
          {/* Inner spark */}
          <div className="relative w-8 h-8 bg-white rounded-full shadow-lg animate-pulse z-10 flex items-center justify-center">
             <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          </div>
        </div>
        
        {/* Sleek Typography Reveal */}
        <div className="mt-8 overflow-hidden h-8">
          <h1 className="text-xl font-medium tracking-tight text-neutral-900 animate-slide-up-splash">
            Sentiently Innovations.
          </h1>
        </div>
      </div>
    </div>
  );
}
