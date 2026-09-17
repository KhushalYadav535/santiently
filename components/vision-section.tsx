"use client"

import React from "react"
import { Eye, Bot, LineChart, Cpu, ShieldCheck, CheckCircle2, Quote, Lock, FileKey } from "lucide-react"

const visionPillars = [
  {
    icon: Bot,
    title: "Intelligent Automation",
    description: "Eliminating repetitive tasks through context-aware AI systems that learn from organizational feedback.",
    color: "from-blue-600 to-indigo-600",
  },
  {
    icon: LineChart,
    title: "Operational Intelligence",
    description: "Turning enterprise data into predictive insights and actionable decisions across operations.",
    color: "from-indigo-600 to-violet-600",
  },
  {
    icon: Cpu,
    title: "Embedded AI Systems",
    description: "Integrating intelligence directly into core business workflows rather than isolated bolt-on chat widgets.",
    color: "from-cyan-600 to-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Sustainable Transformation",
    description: "Building resilient solutions that scale efficiently, predictably, and ethically across global regions.",
    color: "from-emerald-600 to-teal-600",
  },
]

const securityPoints = [
  "Enterprise-grade security practices",
  "Secure data handling and encryption (AES-256 / TLS 1.3)",
  "Role-based access controls (RBAC)",
  "Configurable permissions and audit trails",
]

const securityStandards = ["SOC 2 TYPE II READY", "ISO/IEC 27001", "GDPR COMPLIANT", "AES-256 ENCRYPTION"]

export function VisionSection() {
  return (
    <section id="vision" className="py-28 px-6 sm:px-10 bg-[#D0E1EB] relative overflow-hidden border-t border-[#050419]/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCFCFC]/90 border border-[#050419]/10 text-[#0F32DC] text-xs font-mono font-bold uppercase tracking-wider mb-5 shadow-xs">
            <Eye className="w-3.5 h-3.5 text-[#0F32DC]" />
            <span>Looking Ahead</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#050419] tracking-[-2px] leading-tight">
            Our Vision
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#585765] leading-relaxed font-normal">
            We are building the AI operating layer for modern enterprises. Our vision extends beyond individual products—we're architecting the intelligent infrastructure that will power the next generation of enterprise systems.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {visionPillars.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between overflow-hidden border border-slate-200/90"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} text-white flex items-center justify-center mb-6 shadow-md shadow-blue-500/15 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Executive Quote Card */}
        <div className="relative glass-card rounded-3xl p-8 sm:p-14 border border-slate-200/90 shadow-xl shadow-slate-200/50 mb-16 overflow-hidden">
          <Quote className="absolute -top-4 -right-4 w-32 h-32 text-blue-500/5 pointer-events-none -z-0" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6 shadow-xs">
              <Quote className="w-6 h-6" />
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-relaxed tracking-tight italic">
              "The future of enterprise software is not just about automation—it's about intelligence that understands context, learns from patterns, and makes decisions that drive business value."
            </p>

            <div className="mt-8 flex items-center justify-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-blue-500/20">
                SI
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-slate-900">Santiently Innovations</h4>
                <p className="text-xs text-slate-500">Executive Vision & AI Architecture Philosophy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Security & Trust Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/40">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-md">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-black text-slate-900 tracking-tight">
                  Enterprise-Grade Security & Trust
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Built to exceed the most stringent institutional compliance and data sovereignty standards worldwide.
              </p>

              {/* Security Standards Badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                {securityStandards.map((std, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </div>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
              {securityPoints.map((pt, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-sm font-semibold text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
