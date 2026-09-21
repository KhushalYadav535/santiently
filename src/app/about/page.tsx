"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Cpu, ShieldCheck, Sparkles, Terminal, Code2, Heart, Award } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import { soundFX } from "@/utils/audio";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-purple-500/30">
      <CustomCursor />
      <Navbar />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
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
        <div className="space-y-6 pt-6 pb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>SENTIENTLY INNOVATIONS // MANIFESTO</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-tight">
            We are building the next generation of software.
          </h1>

          <p className="text-lg sm:text-2xl text-zinc-300 font-light leading-relaxed">
            Sentiently Innovations is an AI-native product company focused on building intelligent software for the real world.
          </p>

          <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs text-purple-300">
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">PRODUCT</span>
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">ENGINEERING</span>
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">AI</span>
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">RESEARCH</span>
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">DESIGN</span>
          </div>
        </div>

        {/* Narrative & Beliefs */}
        <div className="space-y-12 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-white/10 pt-12">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-mono">
              01 / Why We Exist
            </h2>
            <p>
              Most software in the world is dumb. It waits passively for a human to click a button, type into a field, or navigate a confusing menu. Even when companies add AI, they usually just paste a chatbot widget into the bottom right corner of their existing legacy screens.
            </p>
            <p>
              At Sentiently Innovations, we reject the superficial chat widget. We believe intelligence is an architectural primitive. It should listen to phone calls with natural acoustic prosody. It should parse crumpled invoices with spatial reasoning. It should automate workforce compliance and execute financial workflows with deterministic safety rails.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-mono">
              02 / Not AI For Demos. AI For Real Work.
            </h2>
            <p>
              Silicon Valley is full of viral AI demos that fall apart the moment they encounter real-world noise: a caller speaking Hinglish on a moving bus, a coffee-stained receipt, or an HR query about a complex regional labor statute.
            </p>
            <p>
              Every product in the Sentiently ecosystem—from <strong>VoCred</strong> and <strong>TextMitra</strong> to our <strong>AI-Native HRMS</strong> and <strong>Society Platform</strong>—is stress-tested against the chaotic realities of real business operations.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#090a14] border border-purple-500/30 space-y-4">
            <h3 className="text-xl font-bold text-white">Our Engineering Principles</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 font-mono">
              <li className="flex items-center gap-2">
                <span className="text-purple-400 font-bold">&gt;</span>
                60fps and sub-350ms latency over vanity 3D bloat
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400 font-bold">&gt;</span>
                Deterministic state verification before probabilistic tool execution
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400 font-bold">&gt;</span>
                Privacy by design: ephemeral audio streams and zero unauthorized data leakage
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400 font-bold">&gt;</span>
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
