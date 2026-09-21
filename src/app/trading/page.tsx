"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, TrendingUp, ShieldAlert, Cpu, BarChart3, Activity } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import { soundFX } from "@/utils/audio";

export default function TradingPage() {
  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-amber-500/30">
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
            <span>&larr; BACK TO SENTIENTLY INNOVATIONS</span>
          </Link>
        </div>

        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-6 pt-6 pb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
            <span>TRADING INTELLIGENCE // FINTECH DECISION SUPPORT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">
            High-throughput intelligence for <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-400">
              financial workflows.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Real-time algorithmic reasoning analyzing macroeconomic headlines, regulatory announcements, and order book telemetry with deterministic risk thresholds.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2 font-mono text-xs">
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-amber-300">
              ⚡ 42ms Signal Latency
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-emerald-300">
              🛡 Zero-Hallucination Risk Rails
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-cyan-300">
              📊 Multi-Exchange Normalized Feed
            </span>
          </div>
        </div>

        {/* Signal Stream Monitor */}
        <div className="max-w-4xl mx-auto bg-[#090a14] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-amber-950/30 space-y-4 mb-20 font-mono text-xs">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <span className="text-amber-400 flex items-center gap-2">
              <Activity className="w-4 h-4 text-amber-400" />
              <span>LIVE REASONING & SIGNAL ENGINE (SIMULATED STREAM)</span>
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
              BETA
            </span>
          </div>

          <div className="space-y-3 pt-2">
            {[
              {
                time: "13:36:12.410",
                event: "RBI Repo Rate Announcement parsed",
                sentiment: "NEUTRAL_HAWKISH",
                action: "Adjusted interest-rate sensitive liquidity buffer by +2.5%",
                status: "VERIFIED"
              },
              {
                time: "13:36:18.824",
                event: "Crude Oil Volatility Spike detected on MCX",
                sentiment: "VOLATILITY_EXPANSION",
                action: "Activated dynamic slippage guard on derivative orders",
                status: "EXECUTED"
              },
              {
                time: "13:36:24.015",
                event: "Unusual block trade volume in Banking Sector",
                sentiment: "CLUSTER_ACCUMULATION",
                action: "Pushed realtime telemetry alert to portfolio risk dashboard",
                status: "DISPATCHED"
              }
            ].map((sig, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between text-zinc-400 text-[10px]">
                  <span>{sig.time} IST</span>
                  <span className="text-emerald-400 font-bold">{sig.status}</span>
                </div>
                <div className="text-white font-medium text-xs">
                  {sig.event}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[10px] pt-1">
                  <span className="text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/20">
                    SIGN: {sig.sentiment}
                  </span>
                  <span className="text-zinc-400">
                    &rarr; {sig.action}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Note */}
        <div className="p-6 rounded-2xl bg-amber-950/10 border border-amber-500/20 text-xs text-zinc-300 leading-relaxed max-w-3xl mx-auto text-center space-y-2">
          <p className="font-mono text-amber-400 font-semibold">
            &bull; RESPONSIBLE AI NOTICE &bull;
          </p>
          <p>
            Sentiently Trading Intelligence provides deterministic computational tools, real-time data parsing, and execution routing for financial institutions and hedge desks. We do not provide retail investment advice or promise speculative returns.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
