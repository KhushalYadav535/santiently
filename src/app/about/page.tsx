"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Cpu } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroll from "@/components/awwwards/SmoothScroll";
import { soundFX } from "@/utils/audio";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f4f2ed] text-[#0b0b0f]">
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar />
      <SmoothScroll />

      <main className="pt-28 pb-20 px-5 sm:px-10 max-w-6xl mx-auto relative">
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
        <div className="space-y-6 pt-6 pb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b0b0f] text-[#d8ff3e] text-xs font-jbmono font-bold">
            <Cpu className="w-3.5 h-3.5 text-[#d8ff3e]" />
            <span>SANTIENTLY LABS // MANIFESTO</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.035em] text-neutral-900 leading-[1.02]">
            We are building the{" "}
            <span className="font-serif-it font-normal text-[#4d7c0f]">next generation</span>{" "}
            of software.
          </h1>

          <p className="text-lg sm:text-2xl text-neutral-600 font-light leading-relaxed">
            Santiently Innovation is an AI-native product company focused on building intelligent software for the real world.
          </p>

          <div className="flex flex-wrap gap-2 pt-2 font-jbmono text-[11px] font-bold">
            <span className="px-3 py-1 rounded-full bg-white border border-black/10 text-black/60">PRODUCT</span>
            <span className="px-3 py-1 rounded-full bg-white border border-black/10 text-black/60">ENGINEERING</span>
            <span className="px-3 py-1 rounded-full bg-white border border-black/10 text-black/60">AI RESEARCH</span>
            <span className="px-3 py-1 rounded-full bg-[#0b0b0f] text-[#d8ff3e]">SYSTEM DESIGN</span>
          </div>
        </div>

        {/* Narrative & Beliefs */}
        <div className="space-y-12 text-sm sm:text-base text-neutral-700 leading-relaxed border-t border-black/10 pt-12">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-mono">
              01 / Why We Exist
            </h2>
            <p>
              Most software in the world is dumb. It waits passively for a human to click a button, type into a field, or navigate a confusing menu. Even when companies add AI, they usually just paste a chatbot widget into the bottom right corner of their existing legacy screens.
            </p>
            <p>
              At Santiently Innovation, we reject the superficial chat widget. We believe intelligence is an architectural primitive. It should listen to phone calls with natural acoustic prosody. It should parse crumpled invoices with spatial reasoning. It should automate workforce compliance and execute financial workflows with deterministic safety rails.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-mono">
              02 / Not AI For Demos. AI For Real Work.
            </h2>
            <p>
              Silicon Valley is full of viral AI demos that fall apart the moment they encounter real-world noise: a caller speaking Hinglish on a moving bus, a coffee-stained receipt, or an HR query about a complex regional labor statute.
            </p>
            <p>
              Every product in the Santiently ecosystem—from <strong className="text-neutral-900">VoCred</strong> and <strong className="text-neutral-900">TextMitra</strong> to our <strong className="text-neutral-900">AI-Native HRMS</strong> and <strong className="text-neutral-900">Trading Intelligence</strong>—is stress-tested against the chaotic realities of real business operations.
            </p>
          </div>

          <div className="p-8 rounded-[24px] bg-white border border-black/10 shadow-[0_16px_48px_-20px_rgba(11,11,15,0.2)] space-y-4">
            <h3 className="text-xl font-bold text-neutral-900">Our Engineering Principles</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700 font-mono">
              <li className="flex items-center gap-2">
                <span className="text-[#4d7c0f] font-bold">&gt;</span>
                60fps and sub-280ms latency over vanity 3D bloat
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#4d7c0f] font-bold">&gt;</span>
                Deterministic state verification before probabilistic tool execution
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#4d7c0f] font-bold">&gt;</span>
                Privacy by design: ephemeral audio streams and zero unauthorized data leakage
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#4d7c0f] font-bold">&gt;</span>
                Turn frontier research into usable, scalable products
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
