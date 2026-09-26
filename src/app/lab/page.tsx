"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, FlaskConical, Atom } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroll from "@/components/awwwards/SmoothScroll";
import LabGallery from "@/components/lab/LabGallery";
import { soundFX } from "@/utils/audio";

export default function LabPage() {
  return (
    <div className="min-h-screen bg-[#f4f2ed] text-[#0b0b0f]">
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar />
      <SmoothScroll />

      <main className="pt-28 pb-20 px-5 sm:px-10 max-w-[1600px] mx-auto relative">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors"
            onClick={() => soundFX.playClick()}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>&larr; BACK TO SANTIENTLY HOMEPAGE</span>
          </Link>
        </div>

        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-6 pt-6 pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b0b0f] text-[#d8ff3e] text-xs font-jbmono font-bold">
            <FlaskConical className="w-3.5 h-3.5 text-[#d8ff3e]" />
            <span>THE SANTIENTLY LAB // APPLIED AI RESEARCH</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.035em] text-neutral-900 leading-[1.0]">
            Where prototypes <br />
            <span className="font-serif-it font-normal text-[#6d28d9]">
              become production.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Inspired by Google Labs: an open window into our active research in acoustic speech models, multi-agent swarms, spatial coordinate tokens, and episodic memory graphs.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 pt-2 font-jbmono text-[11px] font-bold">
            <span className="px-3 py-1 rounded-full bg-white border border-black/10 text-black/60">
              ◆ Active Experiments
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-black/10 text-black/60">
              ◆ Alpha Prototypes
            </span>
            <span className="px-3 py-1 rounded-full bg-[#0b0b0f] text-[#d8ff3e]">
              ◆ Foundational Research
            </span>
          </div>
        </div>

        {/* Lab Gallery Full View */}
        <LabGallery isFullPage={true} />

        {/* Life Beyond the Lab callout (Google Labs concept) */}
        <div className="mt-16 p-8 sm:p-12 rounded-[24px] bg-white border border-black/10 shadow-[0_16px_48px_-20px_rgba(11,11,15,0.2)] max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-2 font-jbmono text-xs text-[#4d7c0f] font-bold">
            <Atom className="w-4 h-4" />
            <span>LIFE BEYOND THE LAB</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
            From Experiment to Production System
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            In traditional research divisions, prototypes gather dust. In Santiently Innovation, every experiment that crosses our benchmark thresholds is compiled directly into a commercial product:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-black/[0.02] border border-black/10 space-y-1">
              <span className="text-[10px] font-mono text-purple-700 uppercase font-semibold">EXP-410 &rarr; GRADUATED</span>
              <h4 className="text-sm font-bold text-neutral-900 font-mono">VoCred Voice Engine</h4>
              <p className="text-xs text-neutral-600">Now powering live telephony calls across logistics & finance.</p>
            </div>
              <div className="p-4 rounded-xl bg-black/[0.02] border border-black/10 space-y-1">
              <span className="text-[10px] font-mono text-blue-700 uppercase font-semibold">EXP-522 &rarr; GRADUATED</span>
              <h4 className="text-sm font-bold text-neutral-900 font-mono">TextMitra OCR</h4>
              <p className="text-xs text-neutral-600">Now extracting thousands of invoice documents daily.</p>
            </div>
              <div className="p-4 rounded-xl bg-black/[0.02] border border-black/10 space-y-1">
              <span className="text-[10px] font-mono text-emerald-700 uppercase font-semibold">EXP-603 &rarr; GRADUATED</span>
              <h4 className="text-sm font-bold text-neutral-900 font-mono">AI-Native HRMS</h4>
              <p className="text-xs text-neutral-600">Now resolving employee leave and tax compliance requests.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
