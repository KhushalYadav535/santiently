"use client"

import React, { useState, useEffect } from "react"
import {
  PhoneCall,
  Activity,
  Users,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Radio,
  Server,
  Terminal,
  Cpu,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react"

export function HeroConsole() {
  const [activeTab, setActiveTab] = useState<"crm" | "hrms" | "neural">("crm")
  const [callDuration, setCallDuration] = useState(14)
  const [throughput, setThroughput] = useState(14820)

  // Subtle live ticking data
  useEffect(() => {
    const timer = setInterval(() => {
      setCallDuration((prev) => (prev > 45 ? 12 : prev + 1))
      setThroughput((prev) => prev + Math.floor(Math.random() * 7) - 3)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full max-w-5xl mx-auto mt-14 px-2 sm:px-0">
      {/* 3D Perspective Container */}
      <div className="relative group">
        {/* Cinematic Ambient Glow Behind Cockpit */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500/20 via-indigo-500/25 to-cyan-500/20 rounded-[32px] blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-300" />

        {/* Floating Glass Badges */}
        <div className="hidden md:flex items-center gap-2 absolute -top-5 -left-4 z-20 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg shadow-blue-500/10 text-[11px] font-bold text-slate-800 animate-float-slow">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
          <span>⚡ Sub-200ms Voice Latency</span>
        </div>

        <div className="hidden md:flex items-center gap-2 absolute -top-5 -right-4 z-20 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg shadow-emerald-500/10 text-[11px] font-bold text-slate-800 animate-float-reverse">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>SOC-2 & ISO 27001 Enforced</span>
        </div>

        {/* Main Glass Cockpit Frame */}
        <div className="relative rounded-[28px] glass-cockpit overflow-hidden border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12)]">
          {/* Top Window Chrome */}
          <div className="flex flex-wrap items-center justify-between px-5 py-3.5 border-b border-slate-200/80 bg-slate-50/80 backdrop-blur-md gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/80 border border-red-500/30"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400/80 border border-amber-500/30"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-400/80 border border-emerald-500/30"></span>
              </div>
              <div className="h-4 w-px bg-slate-200 mx-1.5 hidden sm:block"></div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-600">
                <Terminal className="w-3.5 h-3.5 text-blue-600" />
                <span className="hidden sm:inline text-slate-400">gateway:</span>
                <span className="text-slate-800 font-semibold">santiently.enterprise.mesh</span>
              </div>
            </div>

            {/* Interactive Console Tabs */}
            <div className="flex items-center p-1 bg-white/90 border border-[#050419]/10 rounded-xl shadow-xs">
              <button
                onClick={() => setActiveTab("crm")}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "crm"
                    ? "bg-[#050419] text-[#FCFCFC] shadow-xs"
                    : "text-[#585765] hover:text-[#050419]"
                }`}
              >
                <PhoneCall className="w-3 h-3 text-[#0F32DC]" />
                <span>CredibilityCRM</span>
              </button>
              <button
                onClick={() => setActiveTab("hrms")}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "hrms"
                    ? "bg-[#050419] text-[#FCFCFC] shadow-xs"
                    : "text-[#585765] hover:text-[#050419]"
                }`}
              >
                <Users className="w-3 h-3 text-[#0F32DC]" />
                <span>AI-Native HRMS</span>
              </button>
              <button
                onClick={() => setActiveTab("neural")}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "neural"
                    ? "bg-[#050419] text-[#FCFCFC] shadow-xs"
                    : "text-[#585765] hover:text-[#050419]"
                }`}
              >
                <Cpu className="w-3 h-3 text-[#0F32DC]" />
                <span className="hidden sm:inline">Neural Mesh</span>
                <span className="sm:hidden">Mesh</span>
              </button>
            </div>

            {/* Status Beacon */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono font-bold text-slate-700 hidden sm:inline">
                CLUSTER LATENCY: 14ms
              </span>
            </div>
          </div>

          {/* Console Body */}
          <div className="p-5 sm:p-7 bg-gradient-to-b from-white via-white to-slate-50/50 min-h-[310px] flex flex-col justify-between">
            {activeTab === "crm" && (
              <div className="space-y-6">
                {/* Active Session Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center shadow-xs">
                      <PhoneCall className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          Autonomous Voice Agent #408
                        </h4>
                        <span className="px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-mono font-bold">
                          LIVE IN-PROGRESS (00:{callDuration < 10 ? `0${callDuration}` : callDuration})
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">
                        Target: Global FinCorp • Workflow: Enterprise Invoice Settlement & Escalation
                      </p>
                    </div>
                  </div>

                  {/* Audio Waveform Equalizer */}
                  <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-50 rounded-xl border border-slate-200/80">
                    <span className="text-[10px] font-mono font-bold text-slate-400 mr-1.5 uppercase">AI Voice Stream</span>
                    {[18, 28, 12, 32, 22, 14, 30, 24, 16, 26, 12].map((height, i) => (
                      <span
                        key={i}
                        className="w-1 rounded-full bg-gradient-to-t from-blue-600 to-indigo-500 animate-pulse"
                        style={{
                          height: `${height}px`,
                          animationDelay: `${i * 0.12}s`,
                          animationDuration: "0.8s",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Live Transcript & Real-Time Sentiment */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                  <div className="lg:col-span-8 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3 font-sans">
                    <div className="flex items-start gap-2.5">
                      <span className="text-[11px] font-bold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded-md shrink-0">
                        AI Agent
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        "Good afternoon, Mr. Davis. I see your team initiated a transition for Enterprise License #8821. I've authorized the credit balance adjustment and updated your portal."
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <span className="text-[11px] font-bold text-slate-600 bg-slate-200 px-2 py-0.5 rounded-md shrink-0">
                        Customer
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        "That was unbelievably fast. Perfect, confirmation received on my dashboard."
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                      <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Autonomous Resolution Triggered • 0 Human Overhead
                      </span>
                      <span className="text-slate-400 font-mono">Model: Santient-Voice-v4</span>
                    </div>
                  </div>

                  {/* Telemetry Dials */}
                  <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3">
                    <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">Sentiment Score</span>
                        <div className="text-lg font-black text-emerald-600">98.4% Positive</div>
                      </div>
                      <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">Turnaround Time</span>
                        <div className="text-lg font-black text-blue-600">&lt; 1.2s Total</div>
                      </div>
                      <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Zap className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "hrms" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-200/80 text-indigo-600 flex items-center justify-center shadow-xs">
                      <Users className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          Workforce Intelligence Engine
                        </h4>
                        <span className="px-2 py-0.5 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-mono font-bold">
                          12,480 SEATS MONITORED
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">
                        Predictive Pattern Intelligence • Automated Policy Compliance Engine
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      0 Policy Anomalies
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-mono font-bold text-slate-500 uppercase">Auto-Resolved Queries</span>
                    <div className="text-2xl font-black text-slate-900 mt-1">94.8%</div>
                    <p className="text-xs text-slate-500 mt-2">Leaves, claims & audits solved without HR intervention.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-mono font-bold text-slate-500 uppercase">Turnover Risk Index</span>
                    <div className="text-2xl font-black text-emerald-600 mt-1">Low (0.02%)</div>
                    <p className="text-xs text-slate-500 mt-2">Predictive retention alerts calibrated for high-velocity teams.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-mono font-bold text-slate-500 uppercase">Audit Readiness</span>
                    <div className="text-2xl font-black text-blue-600 mt-1">100% Real-time</div>
                    <p className="text-xs text-slate-500 mt-2">Continuous compliance ledger with immutable cryptographic log.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "neural" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-cyan-50 border border-cyan-200/80 text-cyan-600 flex items-center justify-center shadow-xs">
                      <Cpu className="w-5 h-5 animate-spin" style={{ animationDuration: "12s" }} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          Multi-Tenant Neural Graph
                        </h4>
                        <span className="px-2 py-0.5 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-700 text-[10px] font-mono font-bold">
                          ACTIVE CLUSTERS: 64 REGIONS
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">
                        Zero-Data-Leakage Isolation • Multi-LLM Arbitration & Guardrails
                      </p>
                    </div>
                  </div>

                  <div className="text-xs font-mono font-bold text-slate-700">
                    THROUGHPUT: <span className="text-blue-600 font-extrabold">{throughput.toLocaleString()}</span> OPS/SEC
                  </div>
                </div>

                {/* Visual Neural Pipeline Nodes */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                      <div className="text-[10px] font-mono text-slate-400 font-bold">STEP 01</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">Event Ingest</div>
                      <div className="text-[10px] text-emerald-600 font-mono mt-1">0.4ms</div>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                      <div className="text-[10px] font-mono text-slate-400 font-bold">STEP 02</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">Context Vector</div>
                      <div className="text-[10px] text-emerald-600 font-mono mt-1">1.8ms</div>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                      <div className="text-[10px] font-mono text-slate-400 font-bold">STEP 03</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">Neural Decision</div>
                      <div className="text-[10px] text-emerald-600 font-mono mt-1">12.1ms</div>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                      <div className="text-[10px] font-mono text-slate-400 font-bold">STEP 04</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">Zero-Trust Audit</div>
                      <div className="text-[10px] text-emerald-600 font-mono mt-1">0.2ms</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Cockpit Footer Bar */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-3">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  Santiently Cognitive Fabric v4.2
                </span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="hidden sm:inline text-[11px]">Hardware Accelerated Inferences</span>
              </div>

              <div className="flex items-center gap-2 font-mono text-[11px]">
                <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                  All Systems Nominal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
