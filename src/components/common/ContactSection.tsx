"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Sparkles, Mail, Building, Phone } from "lucide-react";
import { soundFX } from "@/utils/audio";

import confetti from "canvas-confetti";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    productInterest: "VoCred (Voice AI)",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFX.playSuccess();
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#2563EB", "#7C3AED", "#10B981"],
      });
    } catch {
      // Ignore
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-5 sm:px-10 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 font-jbmono text-[11px] tracking-[0.3em] uppercase text-black/40 mb-8">
        <span className="text-[#4d7c0f] font-bold">11</span>
        <span className="h-px w-10 bg-black/20" />
        <span>Dispatch — let&apos;s build together</span>
      </div>
      <div className="bg-white border border-black/10 rounded-[24px] p-8 sm:p-12 shadow-[0_24px_64px_-24px_rgba(11,11,15,0.2)] relative overflow-hidden">
        {/* Ink → lime → violet accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0b0b0f] via-[#4d7c0f] to-[#6d28d9]" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Left Info */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b0b0f] text-[#d8ff3e] text-xs font-jbmono font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#d8ff3e]" />
              <span>LET&apos;S BUILD TOGETHER</span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 tracking-[-0.03em] leading-tight">
              Ready to ship real AI into production?
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Whether you need 10,000 concurrent VoCred voice agents, automated document extraction with TextMitra, or an enterprise intelligence stack—our engineering team is ready.
            </p>

            <div className="pt-4 space-y-3 text-xs text-neutral-700 font-mono">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>innovations@sentiently.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Building className="w-4 h-4 text-purple-600" />
                <span>Bangalore &bull; Gurgaon &bull; Global Remote</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Enterprise SLA: 99.99% Uptime</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="md:col-span-7">
            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-neutral-900 font-mono">Inquiry Received</h4>
                <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.name}. An AI solutions architect from Santiently Innovation will reach out within 4 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#4d7c0f] underline pt-2 font-bold"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-500 uppercase mb-1">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Vikram Malhotra"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-neutral-900 text-xs focus:bg-white focus:outline-none focus:border-[#4d7c0f] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-500 uppercase mb-1">WORK EMAIL</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@enterprise.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-neutral-900 text-xs focus:bg-white focus:outline-none focus:border-[#4d7c0f] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-500 uppercase mb-1">COMPANY</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-neutral-900 text-xs focus:bg-white focus:outline-none focus:border-[#4d7c0f] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-500 uppercase mb-1">PRIMARY PRODUCT</label>
                    <select
                      value={formData.productInterest}
                      onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-neutral-900 text-xs focus:bg-white focus:outline-none focus:border-[#4d7c0f] transition-colors"
                    >
                      <option value="VoCred (Voice AI)">VoCred (Real-time Voice AI)</option>
                      <option value="TextMitra (Document AI)">TextMitra (OCR & Document AI)</option>
                      <option value="AI-Native HRMS">AI-Native HRMS</option>
                      <option value="Trading Intelligence">Trading Intelligence</option>
                      <option value="Custom Agent Architecture">Custom Agent Swarm / Architecture</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-neutral-500 uppercase mb-1">PROJECT DETAILS / USE CASE</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="We want to automate 50,000 monthly voice support calls with sub-300ms latency..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-neutral-900 text-xs focus:bg-white focus:outline-none focus:border-[#4d7c0f] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-shine w-full py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#f4f2ed] bg-[#0b0b0f] hover:bg-[#4d7c0f] hover:text-white shadow-xs flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>DISPATCH INQUIRY TO ARCHITECTURE TEAM</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
