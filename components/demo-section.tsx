"use client"

import React, { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import {
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Mail,
  Building,
  Phone,
  Sparkles,
  Zap,
  ArrowRight,
  Headphones,
} from "lucide-react"

export function DemoSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.companyName || !formData.email) return
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 px-6 sm:px-10 bg-[#D0E1EB] relative overflow-hidden border-t border-[#050419]/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCFCFC]/90 border border-[#050419]/10 text-[#0F32DC] text-xs font-mono font-bold uppercase tracking-wider mb-5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0F32DC]" />
            <span>Interactive Demo & Executive Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#050419] tracking-[-2px] leading-tight">
            Request a Platform Demo
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#585765] leading-relaxed font-normal">
            Interested in seeing our platforms in action? Schedule a personalized demo to explore how our AI-native solutions can transform your enterprise operations. We welcome product demos, strategic partnership discussions, and integration inquiries.
          </p>
        </div>

        {/* 2-Column Enterprise Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: What you get in the demo */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/50 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
                Tailored Walkthrough
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-snug">
                What to Expect in Your Session
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                Our principal AI engineers and enterprise architects will prepare a customized demonstration tailored to your exact industry workflows.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">Custom Workflow Simulation</h5>
                    <p className="text-xs text-slate-500">Live preview with your organization's specific CRM or HRMS use cases.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">Security & Architecture Review</h5>
                    <p className="text-xs text-slate-500">Deep-dive on data sovereignty, SOC-2, RBAC, and cloud deployment options.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">ROI & Capacity Roadmap</h5>
                    <p className="text-xs text-slate-500">Concrete projections on operational cost reductions and velocity gains.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact info */}
            <div className="p-4 bg-slate-50/90 rounded-2xl border border-slate-100 text-xs text-slate-500 flex items-center gap-3">
              <Headphones className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Direct enterprise inquiries: <strong className="text-slate-800">partnerships@santiently.com</strong></span>
            </div>
          </div>

          {/* Right Column: Demo Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-2xl shadow-slate-200/60 flex flex-col justify-center">
            {submitted ? (
              <div className="py-12 text-center max-w-md mx-auto">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md shadow-emerald-500/10">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 tracking-tight">
                  Demo Request Received!
                </h3>
                <p className="text-sm text-slate-600 mb-8 leading-relaxed">
                  Thank you for your interest in Santiently Innovations. Our solution architect team has received your details and will connect with you within 24 hours.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ companyName: "", email: "", phone: "", message: "" })
                  }}
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 rounded-2xl px-6 py-5 font-semibold"
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-blue-600" />
                      <span>Company Name *</span>
                    </label>
                    <Input
                      required
                      placeholder="Your company name"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="bg-slate-50/70 border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl h-12 focus-visible:ring-blue-500 transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-blue-600" />
                      <span>Email Address *</span>
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-50/70 border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl h-12 focus-visible:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <span>Phone Number</span>
                  </label>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-slate-50/70 border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl h-12 focus-visible:ring-blue-500 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Message
                  </label>
                  <Textarea
                    rows={4}
                    placeholder="Tell us about your interest in our platforms, specific use cases, or any questions you have..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-slate-50/70 border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl resize-none focus-visible:ring-blue-500 transition-all"
                  />
                </div>

                {/* Platform Interest Badges */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                    <span>Platform of Interest</span>
                    <span className="text-[11px] font-mono text-blue-600 font-bold">SELECT ALL THAT APPLY</span>
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    <span className="px-3.5 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold cursor-pointer hover:bg-blue-100 transition-colors flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      CredibilityCRM
                    </span>
                    <span className="px-3.5 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold cursor-pointer hover:bg-indigo-100 transition-colors flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      AI-Native HRMS
                    </span>
                    <span className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold cursor-pointer hover:bg-slate-200 transition-colors">
                      Custom AI Architecture
                    </span>
                  </div>
                </div>

                {/* Submit button & response disclaimer */}
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>We typically respond within 24 hours during business days</span>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-2xl px-9 py-6 text-sm shadow-xl shadow-blue-500/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 animate-glint border-t border-white/20"
                  >
                    <span>Request Demo</span>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
