"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, FlaskConical, Sparkles, Terminal, Atom, Radio } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import LabGallery from "@/components/lab/LabGallery";
import { soundFX } from "@/utils/audio";

export default function LabPage() {
  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-purple-500/30">
      <CustomCursor />
      <Navbar />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            onClick={() => soundFX.playClick()}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>&larr; BACK TO SENTIENTLY HOMEPAGE</span>
          </Link>
        </div>

        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-6 pt-6 pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <FlaskConical className="w-3.5 h-3.5 text-purple-400" />
            <span>THE SENTIENTLY LAB // APPLIED AI RESEARCH</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">
            Where prototypes <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400">
              become production.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Inspired by Google Labs: an open window into our active research in acoustic speech models, multi-agent swarms, spatial coordinate tokens, and episodic memory graphs.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2 font-mono text-xs">
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-purple-300">
              🟣 Active Experiments
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-amber-300">
              🟡 Alpha Prototypes
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-cyan-300">
              🔵 Foundational Research
            </span>
          </div>
        </div>

        {/* Lab Gallery Full View */}
        <LabGallery isFullPage={true} />

        {/* Life Beyond the Lab callout (Google Labs concept) */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#090a14] border border-white/10 max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-purple-400">
            <Atom className="w-4 h-4" />
            <span>LIFE BEYOND THE LAB</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            From Experiment to Production System
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            In traditional research divisions, prototypes gather dust. In Sentiently Innovations, every experiment that crosses our benchmark thresholds is compiled directly into a commercial product:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-[10px] font-mono text-purple-400 uppercase">EXP-410 &rarr; GRADUATED</span>
              <h4 className="text-sm font-bold text-white font-mono">VoCred Voice Engine</h4>
              <p className="text-xs text-zinc-400">Now powering live telephony calls across logistics & finance.</p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-[10px] font-mono text-cyan-400 uppercase">EXP-522 &rarr; GRADUATED</span>
              <h4 className="text-sm font-bold text-white font-mono">TextMitra OCR</h4>
              <p className="text-xs text-zinc-400">Now extracting thousands of invoice documents daily.</p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-[10px] font-mono text-emerald-400 uppercase">EXP-603 &rarr; GRADUATED</span>
              <h4 className="text-sm font-bold text-white font-mono">AI-Native HRMS</h4>
              <p className="text-xs text-zinc-400">Now resolving employee leave and tax compliance requests.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
