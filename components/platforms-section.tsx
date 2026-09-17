"use client"

import React, { useState } from "react"
import { Button } from "./ui/button"
import {
  PhoneCall,
  BellRing,
  RotateCcw,
  Sparkles,
  Headphones,
  LineChart,
  UserCheck,
  TrendingUp,
  BotMessageSquare,
  FileCheck,
  Award,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Zap,
  Activity,
  Radio,
} from "lucide-react"

const platforms = [
  {
    id: "credibility-crm",
    name: "CredibilityCRM",
    badge: "Communication & Engagement",
    subtitle: "AI-Powered Communication & Engagement Automation Platform",
    description:
      "Transform your customer engagement with intelligent, automated communication workflows. CredibilityCRM leverages advanced AI to handle voice calls, reminders, collections, sales follow-ups, and customer support—all through a unified, intelligent platform.",
    accentColor: "from-blue-600 via-indigo-600 to-blue-700",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200/80",
    metrics: [
      { label: "Voice Automation", val: "Sub-200ms" },
      { label: "Recovery Rate", val: "+42.5%" },
      { label: "Human Friction", val: "Zero-Touch" },
    ],
    capabilities: [
      { name: "AI Voice Automation", icon: PhoneCall, desc: "Human-like natural outbound & inbound conversational voice agent workflows." },
      { name: "Intelligent Reminder Engine", icon: BellRing, desc: "Predictive multi-channel scheduling tailored to individual user behavior." },
      { name: "Recovery & Collections Automation", icon: RotateCcw, desc: "Ethical, legally compliant automated debt resolution and settlement pipelines." },
      { name: "Sales Follow-up Automation", icon: Sparkles, desc: "Context-aware automated lead qualification and proactive meeting booking." },
      { name: "Conversational AI Helpdesk", icon: Headphones, desc: "Omni-channel instant query resolution with continuous semantic understanding." },
      { name: "Analytics & Performance Insights", icon: LineChart, desc: "Granular telemetry on response rates, attribution, and customer sentiment." },
    ],
  },
  {
    id: "ai-native-hrms",
    name: "AI-Native HRMS",
    badge: "Workforce Intelligence",
    subtitle: "Intelligent Workforce Management Platform",
    description:
      "Revolutionize HR operations with AI-driven workforce intelligence. Our HRMS platform goes beyond traditional attendance tracking to provide deep insights, conversational AI assistance, automated policy management, and intelligent performance analytics.",
    accentColor: "from-indigo-600 via-purple-600 to-blue-700",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
    metrics: [
      { label: "Query Resolution", val: "94.8% Auto" },
      { label: "Policy Compliance", val: "100% ISO" },
      { label: "Onboarding Cycle", val: "Instant" },
    ],
    capabilities: [
      { name: "AI-Powered Attendance Insights", icon: UserCheck, desc: "Anomaly detection and predictive pattern intelligence across diverse global teams." },
      { name: "Workforce Analytics", icon: TrendingUp, desc: "Predictive turnover signals, capacity utilization, and engagement telemetry." },
      { name: "Conversational HR Assistant", icon: BotMessageSquare, desc: "24/7 AI-native assistant for leaves, reimbursements, benefits, and queries." },
      { name: "Policy & Workflow Automation", icon: FileCheck, desc: "Zero-touch enterprise approvals, employee lifecycle events, and auditing." },
      { name: "Performance Intelligence", icon: Award, desc: "Objective competency mapping, feedback synthesis, and goal tracking." },
      { name: "Multi-Role Access Management", icon: ShieldAlert, desc: "Granular hierarchical RBAC with full institutional audit trails." },
    ],
  },
]

export function PlatformsSection() {
  const [activePlatform, setActivePlatform] = useState<"all" | "crm" | "hrms">("all")

  const filtered = platforms.filter((p) => {
    if (activePlatform === "crm") return p.id === "credibility-crm"
    if (activePlatform === "hrms") return p.id === "ai-native-hrms"
    return true
  })

  return (
    <section id="platforms" className="py-28 px-6 sm:px-10 bg-[#D0E1EB] relative overflow-hidden border-t border-[#050419]/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCFCFC]/90 border border-[#050419]/10 text-[#0F32DC] text-xs font-mono font-bold uppercase tracking-wider mb-5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0F32DC]" />
            <span>AI Operating Layer</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#050419] tracking-[-2px] leading-tight">
            Our Enterprise Platforms
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#585765] leading-relaxed font-normal">
            Purpose-built AI platforms designed to solve real enterprise challenges
          </p>

          {/* Interactive Filter Pills (Vectr Style) */}
          <div className="mt-8 inline-flex p-1.5 bg-[#FCFCFC] border border-[#050419]/10 rounded-full shadow-xs">
            <button
              onClick={() => setActivePlatform("all")}
              className={`px-6 py-2.5 text-xs font-mono uppercase tracking-wider font-bold rounded-full transition-all ${
                activePlatform === "all"
                  ? "bg-[#050419] text-[#FCFCFC] shadow-sm"
                  : "text-[#585765] hover:text-[#050419]"
              }`}
            >
              All Platforms
            </button>
            <button
              onClick={() => setActivePlatform("crm")}
              className={`px-6 py-2.5 text-xs font-mono uppercase tracking-wider font-bold rounded-full transition-all ${
                activePlatform === "crm"
                  ? "bg-[#050419] text-[#FCFCFC] shadow-sm"
                  : "text-[#585765] hover:text-[#050419]"
              }`}
            >
              CredibilityCRM
            </button>
            <button
              onClick={() => setActivePlatform("hrms")}
              className={`px-6 py-2.5 text-xs font-mono uppercase tracking-wider font-bold rounded-full transition-all ${
                activePlatform === "hrms"
                  ? "bg-[#050419] text-[#FCFCFC] shadow-sm"
                  : "text-[#585765] hover:text-[#050419]"
              }`}
            >
              AI-Native HRMS
            </button>
          </div>
        </div>        {/* Platform Showcase Cards */}
        <div className="space-y-16">
          {filtered.map((platform) => (
            <div
              key={platform.id}
              className="glass-card rounded-[32px] p-8 sm:p-12 border border-slate-200/90 shadow-2xl shadow-slate-200/50 relative overflow-hidden transition-all duration-500 hover:border-blue-400/60 group"
            >
              {/* Subtle ambient corner gradient */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/40 via-indigo-50/20 to-transparent blur-2xl pointer-events-none -z-0" />

              <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-14 justify-between items-start">
                {/* Left Overview Column */}
                <div className="lg:w-5/12">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`inline-block text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border shadow-2xs ${platform.badgeColor}`}>
                      {platform.badge}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/80 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Tier-1 SLA
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                    {platform.name}
                  </h3>

                  <h4 className="text-base font-bold text-blue-600 mt-2 mb-5 leading-snug">
                    {platform.subtitle}
                  </h4>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                    {platform.description}
                  </p>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-8 p-4 bg-slate-50/90 rounded-2xl border border-slate-200/80 shadow-xs">
                    {platform.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div className="text-base sm:text-lg font-black font-mono text-slate-900">
                          {m.val}
                        </div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Live Simulation Mini-Widget */}
                  <div className="mb-8 p-4 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                        {platform.id === "credibility-crm" ? "Live Voice Pipeline" : "Real-Time Telemetry"}
                      </span>
                      <span className="font-mono text-[10px] text-emerald-600">ONLINE</span>
                    </div>

                    {platform.id === "credibility-crm" ? (
                      <div className="text-xs text-slate-600 space-y-1.5 font-sans">
                        <div className="flex items-center justify-between">
                          <span>Inbound Intent: <strong className="text-slate-800">Payment Escalation</strong></span>
                          <span className="text-[10px] font-mono text-blue-600 font-bold">120ms latency</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-1.5 rounded-full w-[85%] animate-pulse" />
                        </div>
                      </div>
                    ) : (
                      <div className="text-xs text-slate-600 space-y-1.5 font-sans">
                        <div className="flex items-center justify-between">
                          <span>Active Shifts Analyzed: <strong className="text-slate-800">4,912 Teams</strong></span>
                          <span className="text-[10px] font-mono text-emerald-600 font-bold">100% compliant</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-1.5 rounded-full w-[96%] animate-pulse" />
                        </div>
                      </div>
                    )}
                  </div>

                  <a href="#contact">
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold shadow-lg shadow-blue-500/25 rounded-2xl px-7 py-6 text-sm flex items-center justify-center gap-2.5 group transition-all hover:scale-[1.02] active:scale-[0.98] border-t border-white/20 animate-glint">
                      <span>Learn More About {platform.name}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>

                {/* Right Key Capabilities Grid */}
                <div className="lg:w-7/12 w-full">
                  <div className="flex items-center justify-between mb-5">
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">
                      Core Enterprise Capabilities
                    </h4>
                    <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Production Ready
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {platform.capabilities.map((cap, cIdx) => {
                      const Icon = cap.icon
                      return (
                        <div
                          key={cIdx}
                          className="bg-white/95 rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-md hover:-translate-y-1 transition-all group/item"
                        >
                          <div className="flex items-center gap-3 mb-2.5">
                            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors shadow-xs">
                              <Icon className="w-4 h-4" />
                            </div>
                            <h5 className="text-sm font-bold text-slate-900 group-hover/item:text-blue-700 transition-colors leading-snug">
                              {cap.name}
                            </h5>
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed pl-12">
                            {cap.desc}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
