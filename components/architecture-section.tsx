"use client"

import React, { useState } from "react"
import {
  BrainCircuit,
  Cpu,
  CloudCog,
  ShieldAlert,
  LineChart,
  LockKeyhole,
  Layers,
  Sparkles,
  Server,
  Zap,
  CheckCircle2,
} from "lucide-react"

const layers = [
  {
    number: "01",
    name: "AI Decision Layer",
    icon: BrainCircuit,
    description: "Advanced LLM integration combined with rule-based systems for intelligent automation",
    badge: "Intelligence Core",
    gradient: "from-blue-600 to-indigo-600",
    status: "Active Inference Engine",
  },
  {
    number: "02",
    name: "Configurable Workflow Engine",
    icon: Cpu,
    description: "Flexible automation framework that adapts to diverse business processes",
    badge: "Orchestration",
    gradient: "from-indigo-600 to-violet-600",
    status: "State Machine Online",
  },
  {
    number: "03",
    name: "Multi-Tenant SaaS Infrastructure",
    icon: CloudCog,
    description: "Scalable cloud architecture supporting multiple organizations seamlessly",
    badge: "Cloud Foundation",
    gradient: "from-violet-600 to-purple-600",
    status: "Global Multi-Region",
  },
  {
    number: "04",
    name: "Role-Based Access Control (RBAC)",
    icon: ShieldAlert,
    description: "Granular permission systems ensuring data security and compliance",
    badge: "Governance",
    gradient: "from-cyan-600 to-blue-600",
    status: "Zero-Trust Enforced",
  },
  {
    number: "05",
    name: "Analytics & Intelligence Layer",
    icon: LineChart,
    description: "Real-time insights and predictive analytics for data-driven decisions",
    badge: "Telemetry & BI",
    gradient: "from-teal-600 to-emerald-600",
    status: "Real-time Stream Pipeline",
  },
  {
    number: "06",
    name: "Enterprise-Grade Security",
    icon: LockKeyhole,
    description: "Bank-level encryption, compliance frameworks, and security protocols",
    badge: "Cryptographic Core",
    gradient: "from-blue-700 to-slate-800",
    status: "AES-256 / TLS 1.3 Certified",
  },
]

export function ArchitectureSection() {
  const [selectedLayer, setSelectedLayer] = useState<number | null>(null)

  return (
    <section id="architecture" className="py-28 px-6 sm:px-10 bg-[#D0E1EB] relative overflow-hidden border-t border-[#050419]/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCFCFC]/90 border border-[#050419]/10 text-[#0F32DC] text-xs font-mono font-bold uppercase tracking-wider mb-5 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#0F32DC]" />
            <span>Robust Engineering Foundation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#050419] tracking-[-2px] leading-tight">
            AI-Native Architecture
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#585765] leading-relaxed font-normal">
            Built on a foundation of cutting-edge AI technologies and enterprise-grade infrastructure
          </p>
        </div>

        {/* Connected AI Architecture Pipeline Strip */}
        <div className="mb-14 p-4 rounded-2xl bg-slate-50/90 border border-slate-200/90 overflow-x-auto shadow-xs">
          <div className="flex items-center justify-between min-w-[720px] text-xs font-mono font-bold text-slate-600 px-2 py-1">
            <span className="flex items-center gap-1.5 text-blue-600">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
              L1 Inference
            </span>
            <span className="text-slate-300">───►</span>
            <span>L2 State Machine</span>
            <span className="text-slate-300">───►</span>
            <span>L3 Multi-Tenant Mesh</span>
            <span className="text-slate-300">───►</span>
            <span>L4 Zero-Trust RBAC</span>
            <span className="text-slate-300">───►</span>
            <span>L5 Telemetry BI</span>
            <span className="text-slate-300">───►</span>
            <span className="text-emerald-600 font-bold">L6 Cryptographic Core</span>
          </div>
        </div>

        {/* 6 Layer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {layers.map((layer, idx) => {
            const Icon = layer.icon
            return (
              <div
                key={idx}
                onMouseEnter={() => setSelectedLayer(idx)}
                onMouseLeave={() => setSelectedLayer(null)}
                className="group relative glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between overflow-hidden border border-slate-200/90 hover:border-blue-400/60 transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Number + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-slate-300 group-hover:text-blue-600 transition-colors font-mono">
                      {layer.number}
                    </span>
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider px-3 py-1 bg-slate-100/90 border border-slate-200/90 rounded-full shadow-xs">
                      {layer.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${layer.gradient} text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/15 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                        {layer.name}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1 text-[11px] font-semibold text-emerald-600 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>{layer.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mt-4">
                    {layer.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                  <span>Architecture Standard Verified</span>
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Narrative Banner with Modern Mesh Lighting */}
        <div className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white rounded-[32px] p-8 sm:p-12 shadow-2xl shadow-slate-900/15 border border-slate-800 overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-bold uppercase tracking-widest mb-4 border border-blue-500/30">
              <Zap className="w-3.5 h-3.5 text-blue-400" />
              <span>Enterprise Reliability Benchmark</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black mb-4 tracking-tight leading-snug">
              Engineered for Enterprise Scale, Reliability & Performance
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our technology stack is designed for scalability, reliability, and performance. Every component is built with enterprise requirements in mind, ensuring seamless integration, robust security, and intelligent automation at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
