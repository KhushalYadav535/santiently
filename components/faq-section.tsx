"use client"

import React, { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqItems = [
  {
    q: "How fast can enterprise platforms be mobilized?",
    a: "We move at the speed of your schedule. Our multi-tenant architecture deploys with pre-trained industry cognitive weights, eliminating the months wasted in traditional enterprise software rollouts. One API connection activates our autonomous pipeline to connect with your communication channels, databases, or ERP in hours, not months.",
  },
  {
    q: "How do you handle enterprise compliance & data sovereignty?",
    a: "We enforce a Zero-Fail Compliance model. Before any autonomous interaction is dispatched, our system verifies role-based permissions, AES-256 / TLS 1.3 encryption, and site-specific regulations. All customer and employee data remains logically isolated in your tenant region with immutable audit logging for SOC-2 Type II, ISO 27001, and GDPR adherence.",
  },
  {
    q: "How does CredibilityCRM handle complex voice and collection interactions?",
    a: "CredibilityCRM leverages high-throughput, sub-200ms voice pipelines with continuous acoustic and semantic sentiment analysis. When speaking with customers, it naturally navigates payment disputes, offers compliant settlement schedules, and instantly syncs back with your core billing ledger without human delay.",
  },
  {
    q: "How does AI-Native HRMS differ from traditional attendance and HR software?",
    a: "Legacy HRMS tools are passive record databases that require endless manual approvals and ticketing queues. Santiently AI-Native HRMS is an active operational engine: it predicts shift turnover anomalies, autonomously resolves 94.8% of policy and claims queries, and automatically enforces compliance in real-time.",
  },
  {
    q: "Can our existing software stack integrate with Santiently platforms?",
    a: "Yes. Both CredibilityCRM and AI-Native HRMS are engineered with open, secure REST and GraphQL APIs, webhooks, and legacy ERP connectors. Whether you use SAP, Salesforce, Workday, or custom proprietary databases, integration is frictionless.",
  },
]

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-28 px-6 sm:px-10 bg-[#D0E1EB] border-t border-[#050419]/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Dual-Column Layout (Vectr Signature .faq) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bold Sticky Title */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-xs font-mono font-bold uppercase tracking-[1.5px] text-[#0F32DC] block mb-3">
              Direct Inquiries & Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-[-1.5px] text-[#050419] leading-[1.08] mb-6">
              How we engineer and deliver institutional-grade enterprise AI.
            </h2>
            <p className="text-sm sm:text-base text-[#585765] leading-relaxed mb-8">
              Transparent answers on security, integration speed, autonomous workflows, and operational ROI.
            </p>

            <a href="#contact" className="pill-btn pill-btn--dark inline-flex">
              <span className="pill-btn-span">Schedule Technical Review</span>
            </a>
          </div>

          {/* Right Column: Clean Accordion List */}
          <div className="lg:col-span-7 divide-y divide-[#050419]/15">
            {faqItems.map((item, idx) => {
              const isOpen = openIdx === idx
              return (
                <div key={idx} className="py-6 sm:py-8 first:pt-0">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-start justify-between gap-6 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg sm:text-xl font-medium tracking-tight text-[#050419] group-hover:text-[#0F32DC] transition-colors">
                      {item.q}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full border border-[#050419]/20 flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-[#050419] text-white border-[#050419]" : "bg-transparent text-[#050419]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pt-2 text-sm sm:text-base text-[#585765] leading-relaxed pr-6 animate-in fade-in duration-300">
                      {item.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
