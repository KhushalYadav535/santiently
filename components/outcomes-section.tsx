"use client"

import React, { useState } from "react"
import {
  CheckCircle2,
  TrendingUp,
  MessageSquareCode,
  Users,
  Cpu,
  BarChart3,
  ArrowUpRight,
  Sparkles,
  Zap,
  Activity,
} from "lucide-react"

const outcomes = [
  {
    icon: TrendingUp,
    title: "Operational Efficiency",
    stat: "+85%",
    statLabel: "Workflow Velocity",
    badge: "Scale Operations",
    color: "from-blue-600 to-indigo-600",
    glowColor: "group-hover:bg-blue-500/10",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200/80",
    points: [
      "Automate repetitive workflows",
      "Reduce manual overhead",
      "Scale operations without proportional headcount increase",
    ],
  },
  {
    icon: MessageSquareCode,
    title: "Intelligent Communication Automation",
    stat: "< 1.5s",
    statLabel: "Response Latency",
    badge: "24/7 Omni-Channel",
    color: "from-indigo-600 to-violet-600",
    glowColor: "group-hover:bg-indigo-500/10",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
    points: [
      "Automate customer engagement",
      "Reduce response times",
      "Improve communication consistency",
    ],
  },
  {
    icon: Users,
    title: "Workforce Intelligence",
    stat: "100%",
    statLabel: "Shift Visibility",
    badge: "Real-Time Telemetry",
    color: "from-cyan-600 to-blue-600",
    glowColor: "group-hover:bg-cyan-500/10",
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200/80",
    points: [
      "Gain real-time workforce visibility",
      "Enable data-driven HR decisions",
      "Identify operational patterns",
    ],
  },
  {
    icon: Cpu,
    title: "Reduced Manual Overhead",
    stat: "-62%",
    statLabel: "Manual Process Load",
    badge: "Zero-Touch Core",
    color: "from-emerald-600 to-teal-600",
    glowColor: "group-hover:bg-emerald-500/10",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    points: [
      "Eliminate manual processes",
      "Free up teams for strategic work",
      "Lower operational costs",
    ],
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decision Making",
    stat: "99.8%",
    statLabel: "Forecast Precision",
    badge: "Predictive BI",
    color: "from-amber-600 to-orange-600",
    glowColor: "group-hover:bg-amber-500/10",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200/80",
    points: [
      "Access actionable insights",
      "Track performance metrics",
      "Make informed business decisions",
    ],
  },
]

export function OutcomesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section id="outcomes" className="py-28 px-6 sm:px-10 bg-[#D0E1EB] relative overflow-hidden border-t border-[#050419]/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCFCFC]/90 border border-[#050419]/10 text-[#0F32DC] text-xs font-mono font-bold uppercase tracking-wider mb-5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0F32DC]" />
            <span>Measurable Impact & Enterprise ROI</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#050419] tracking-[-2px] leading-tight">
            Delivering Measurable Business Outcomes
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#585765] leading-relaxed font-normal">
            Our AI-native platforms are engineered to drive tangible results across your enterprise.
          </p>
        </div>

        {/* 5 Outcomes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between overflow-hidden ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Background ambient color tint */}
                <div
                  className={`absolute -right-12 -top-12 w-48 h-48 rounded-full blur-2xl transition-all duration-500 pointer-events-none ${item.glowColor}`}
                />

                <div className="relative z-10">
                  {/* Top Bar: Icon + Metric */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div
                      className={`w-13 h-13 p-3 rounded-2xl bg-gradient-to-tr ${item.color} text-white shadow-lg shadow-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-black text-slate-900 font-mono tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                        {item.stat}
                      </div>
                      <div className="text-[11px] font-semibold text-slate-400 mt-1 uppercase tracking-wider">
                        {item.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  <span
                    className={`inline-block text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border mb-4 ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-3 mb-6">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-sm text-slate-600 leading-normal">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Micro Progress Sparkline Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-[10px] font-mono font-bold text-slate-400 mb-1">
                      <span>EFFICIENCY GAIN</span>
                      <span className="text-blue-600">VERIFIED</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`h-1.5 rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000`}
                        style={{ width: `${75 + (index * 5)}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                  <span>Explore Outcome Deep-Dive</span>
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* $1B Comparison Matrix: Legacy vs Santiently AI-Native */}
        <div className="mt-16 bg-white/95 backdrop-blur-xl rounded-[32px] p-8 sm:p-10 border border-slate-200/90 shadow-2xl shadow-slate-200/50">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Enterprise Paradigm Shift
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 tracking-tight">
              Traditional Enterprise vs. Santiently AI-Native
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Legacy Approach */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-slate-700">Legacy Enterprise Stack</h4>
                <span className="text-[10px] font-mono font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md border border-red-200">
                  OBSOLETE ARCHITECTURE
                </span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                  <span>48h - 72h manual escalation and ticket queues</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                  <span>30%+ human friction in collections and HR queries</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                  <span>Linear headcount scaling required for revenue growth</span>
                </li>
              </ul>
            </div>

            {/* Santiently AI-Native */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/60 border border-blue-200 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-blue-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  Santiently AI Operating Layer
                </h4>
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  AUTONOMOUS CORE
                </span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sub-200ms instantaneous autonomous execution</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero-touch workflows with 100% cryptographic audit trail</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Scale 10x capacity with zero proportional headcount increase</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-blue-600 animate-pulse shrink-0" />
              <span className="text-xs sm:text-sm text-slate-600 font-medium">
                Real-world benchmarked across 2.4M autonomous enterprise events.
              </span>
            </div>
            <a href="#contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 animate-glint">
                <span>Calculate Your Organization's ROI</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
