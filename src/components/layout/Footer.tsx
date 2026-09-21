"use client";

import React from "react";
import Link from "next/link";
import { Cpu, ArrowUpRight, ShieldCheck, Terminal, Heart } from "lucide-react";
import { soundFX } from "@/utils/audio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#040407] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-3 group"
              onMouseEnter={() => soundFX.playHover()}
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 p-[1px]">
                <div className="w-full h-full bg-[#07080f] rounded-[11px] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              <span className="text-base font-bold tracking-wider text-white font-mono">
                SENTIENTLY<span className="text-purple-400">.</span>
              </span>
            </Link>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Sentiently Innovations is an AI-native product company building intelligent systems across voice, enterprise software, automation, finance, and real-world business operations.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400 font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Inference Cluster Operational • 320ms SLA</span>
              </div>
            </div>

            <p className="text-[11px] text-zinc-400 font-mono">
              &ldquo;Not AI for demos. AI for real work.&rdquo;
            </p>
          </div>

          {/* Products Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white tracking-wider uppercase font-mono">
              Core Products
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <Link href="/vocred" className="hover:text-purple-400 transition-colors flex items-center justify-between group">
                  <span>VoCred (Voice AI)</span>
                  <span className="text-[10px] text-emerald-400 font-mono">LIVE</span>
                </Link>
              </li>
              <li>
                <Link href="/textmitra" className="hover:text-cyan-400 transition-colors flex items-center justify-between group">
                  <span>TextMitra (Doc AI)</span>
                  <span className="text-[10px] text-emerald-400 font-mono">LIVE</span>
                </Link>
              </li>
              <li>
                <Link href="/ai-hrms" className="hover:text-emerald-400 transition-colors flex items-center justify-between group">
                  <span>AI-Native HRMS</span>
                  <span className="text-[10px] text-emerald-400 font-mono">LIVE</span>
                </Link>
              </li>
              <li>
                <Link href="/trading" className="hover:text-amber-400 transition-colors flex items-center justify-between group">
                  <span>Trading Intelligence</span>
                  <span className="text-[10px] text-amber-400 font-mono">BETA</span>
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-pink-400 transition-colors">
                  CredibilityCRM
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-blue-400 transition-colors">
                  Society Platform
                </Link>
              </li>
            </ul>
          </div>

          {/* R&D & Intelligence */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white tracking-wider uppercase font-mono">
              The Lab & Architecture
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <Link href="/lab" className="hover:text-purple-400 transition-colors flex items-center gap-1">
                  <span>Sentiently Lab</span>
                  <ArrowUpRight className="w-3 h-3 text-purple-400" />
                </Link>
              </li>
              <li>
                <Link href="/#architecture" className="hover:text-white transition-colors">
                  Intelligence Stack
                </Link>
              </li>
              <li>
                <Link href="/#architecture" className="hover:text-white transition-colors">
                  Perceive • Reason • Act
                </Link>
              </li>
              <li>
                <Link href="/#engine" className="hover:text-white transition-colors">
                  Product Engine Pipeline
                </Link>
              </li>
              <li>
                <span className="text-zinc-400">Multi-Agent Research</span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white tracking-wider uppercase font-mono">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Manifesto & About
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Enterprise
                </a>
              </li>
              <li>
                <span className="text-zinc-400">Careers (Hiring AI Eng)</span>
              </li>
              <li>
                <span className="text-zinc-400">Security & Privacy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span>&copy; {currentYear} Sentiently Innovations. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1 text-zinc-400">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              SOC2 & ISO Ready Architecture
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1 text-zinc-400">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              Built for Scale
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
