"use client";

import React from "react";
import Link from "next/link";
import { soundFX } from "@/utils/audio";

export default function Footer() {
  return (
    <footer className="bg-[#f2f1ec] text-[#202124] pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-32 md:mb-48">
          <span className="text-[15px] font-bold text-[#3c4043] mb-6 md:mb-0 tracking-tight">
            Other divisions and product areas
          </span>
          <div className="flex flex-wrap gap-8 text-[15px] text-[#80868b] font-medium">
            <Link href="#" className="hover:text-[#3c4043] transition-colors" onMouseEnter={() => soundFX.playHover()}>Sentiently AI</Link>
            <Link href="#" className="hover:text-[#3c4043] transition-colors" onMouseEnter={() => soundFX.playHover()}>Sentiently Cloud</Link>
            <Link href="#" className="hover:text-[#3c4043] transition-colors" onMouseEnter={() => soundFX.playHover()}>Sentiently Research</Link>
            <Link href="#" className="hover:text-[#3c4043] transition-colors" onMouseEnter={() => soundFX.playHover()}>TextMitra</Link>
          </div>
        </div>

        {/* Middle Section - HUGE Text */}
        <div className="mb-16 flex justify-center">
          <h1 className="text-[12vw] sm:text-[13vw] md:text-[10vw] lg:text-[9rem] xl:text-[11rem] leading-none font-bold tracking-[-0.04em] text-[#353638] text-center">
            Sentiently Innovations
          </h1>
        </div>

        {/* Separator */}
        <div className="h-[1px] w-full bg-[#dadce0] mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="text-2xl font-bold tracking-tight text-[#3c4043] font-sans">
            Sentiently
          </div>
          
          <div className="flex flex-wrap gap-x-12 gap-y-4 text-[10px] sm:text-[11px] font-medium text-[#5f6368] tracking-[0.15em] uppercase">
            <Link href="/about" className="hover:text-[#202124] transition-colors" onMouseEnter={() => soundFX.playHover()}>About Sentiently</Link>
            <Link href="/#products" className="hover:text-[#202124] transition-colors" onMouseEnter={() => soundFX.playHover()}>Sentiently Products</Link>
            <Link href="/#contact" className="hover:text-[#202124] transition-colors" onMouseEnter={() => soundFX.playHover()}>Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
