"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, TrendingUp, Activity } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import { soundFX } from "@/utils/audio";

export default function TradingPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111827] selection:bg-blue-500/20 selection:text-blue-900">
      <CustomCursor />
      <Navbar />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors"
            onClick={() => soundFX.playClick()}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>&larr; BACK TO SENTIENTLY HOMEPAGE</span>
          </Link>
        </div>

        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-6 pt-6 pb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gray-200 text-amber-700 text-xs font-mono shadow-2xs">
            <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
            <span>TRADING INTELLIGENCE // FINTECH DECISION SUPPORT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-neutral-900">
            High-throughput intelligence for <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">
              financial workflows.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Real-time algorithmic reasoning analyzing macroeconomic headlines, regulatory announcements, and order book telemetry with deterministic risk thresholds.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 pt-2 font-mono text-xs">
            <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-medium">
              ⚡ 42ms Signal Latency
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-medium">
              🛡 Zero-Hallucination Risk Rails
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-medium">
              📊 Multi-Exchange Normalized Feed
            </span>
          </div>
        </div>

        {/* Signal Stream Monitor */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4 mb-20 font-mono text-xs">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <span className="text-amber-800 font-semibold flex items-center gap-2">
              <Activity className="w-4 h-4 text-amber-600" />
              <span>LIVE REASONING &amp; SIGNAL ENGINE (SIMULATED STREAM)</span>
            </span>
            <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-semibold">
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
              <div key={idx} className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 space-y-1.5">
                <div className="flex items-center justify-between text-neutral-500 text-[10px]">
                  <span>{sig.time} IST</span>
                  <span className="text-emerald-700 font-bold">{sig.status}</span>
                </div>
                <div className="text-neutral-900 font-medium text-xs">
                  {sig.event}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[10px] pt-1">
                  <span className="text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded border border-amber-200 font-medium">
                    SIGN: {sig.sentiment}
                  </span>
                  <span className="text-neutral-600">
                    &rarr; {sig.action}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Note */}
        <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs text-neutral-700 leading-relaxed max-w-3xl mx-auto text-center space-y-2">
          <p className="font-mono text-amber-800 font-semibold">
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
