"use client"

import React from "react"
import { Layers, Workflow, Building2, ShieldCheck, Cloud, Database, Sparkles, Check, ArrowRight } from "lucide-react"

const pillars = [
  {
    num: "01",
    icon: Layers,
    tag: "Core Engineering",
    title: "AI-Native Architecture",
    description: "Built from the ground up with artificial intelligence at every layer, eliminating legacy bolt-on inefficiencies.",
    color: "text-blue-600 bg-blue-50/80 border-blue-200/80",
    glow: "group-hover:border-blue-400/70",
  },
  {
    num: "02",
    icon: Workflow,
    tag: "Self-Adaptive",
    title: "Workflow Intelligence",
    description: "Smart automation that learns and adapts to enterprise processes, evolving as your operational complexity grows.",
    color: "text-indigo-600 bg-indigo-50/80 border-indigo-200/80",
    glow: "group-hover:border-indigo-400/70",
  },
  {
    num: "03",
    icon: Building2,
    tag: "Multi-Org Ready",
    title: "Configurable Multi-Tenant Systems",
    description: "Flexible platforms that scale across organizations and use cases with total logical isolation and customized rule sets.",
    color: "text-cyan-600 bg-cyan-50/80 border-cyan-200/80",
    glow: "group-hover:border-cyan-400/70",
  },
  {
    num: "04",
    icon: ShieldCheck,
    tag: "Institutional Trust",
    title: "Enterprise-Grade Security",
    description: "Bank-level security protocols, strict role-based access control, and compliance standards built into every endpoint.",
    color: "text-emerald-600 bg-emerald-50/80 border-emerald-200/80",
    glow: "group-hover:border-emerald-400/70",
  },
  {
    num: "05",
    icon: Cloud,
    tag: "Hyper-Scalable",
    title: "Scalable SaaS Infrastructure",
    description: "Cloud-native microservices architecture designed to process millions of autonomous events with zero downtime.",
    color: "text-violet-600 bg-violet-50/80 border-violet-200/80",
    glow: "group-hover:border-violet-400/70",
  },
  {
    num: "06",
    icon: Database,
    tag: "Predictive Analytics",
    title: "Structured Data Intelligence",
    description: "Transform unstructured communications and operational trails into clean, actionable enterprise intelligence.",
    color: "text-amber-600 bg-amber-50/80 border-amber-200/80",
    glow: "group-hover:border-amber-400/70",
  },
]

export function CompanyAboutSection() {
  return (
    <section id="about" className="py-28 px-6 sm:px-10 bg-[#D0E1EB] relative overflow-hidden border-t border-[#050419]/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCFCFC]/90 border border-[#050419]/10 text-[#0F32DC] text-xs font-mono font-bold uppercase tracking-wider mb-5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0F32DC]" />
            <span>Architecting Future-Proof Systems</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#050419] tracking-[-2px] leading-tight">
            Product-First AI Technology Company
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#585765] leading-relaxed font-normal">
            <strong className="text-[#050419] font-bold">Santiently Innovations</strong> is a product-first AI technology company focused on building structured, scalable enterprise platforms. We don't just implement AI—we architect intelligent systems that fundamentally transform how businesses operate, communicate, and make decisions.
          </p>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div
                key={idx}
                className={`group relative glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between overflow-hidden border border-slate-200/90 ${pillar.glow}`}
              >
                <div>
                  {/* Top Bar: Number + Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black font-mono text-slate-300 group-hover:text-blue-600 transition-colors">
                      {pillar.num}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border shadow-xs ${pillar.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                  <span>Architecture Standard Verified</span>
                  <Check className="w-3.5 h-3.5 ml-auto text-emerald-500" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Executive Philosophy Strip */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl shadow-slate-900/10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-2">
              Engineering Mission
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug mb-3">
              We replace brittle scripts with resilient, cognitive enterprise pipelines.
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every platform engineered at Santiently Innovations is built to scale smoothly under heavy enterprise load, ensuring your mission-critical operations run with autonomous reliability.
            </p>
          </div>

          <a href="#platforms" className="shrink-0 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-500/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 animate-glint border-t border-white/20">
              <span>Explore Platforms</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
