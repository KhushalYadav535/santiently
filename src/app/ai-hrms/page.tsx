"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Users, CheckCircle2, MessageSquare, Shield, Clock, Brain, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import { soundFX } from "@/utils/audio";

export default function AIHrmsPage() {
  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-emerald-500/30">
      <CustomCursor />
      <Navbar />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            onClick={() => soundFX.playClick()}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>&larr; BACK TO SENTIENTLY INNOVATIONS</span>
          </Link>
        </div>

        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-6 pt-6 pb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
            <Users className="w-3.5 h-3.5 text-emerald-400" />
            <span>AI-NATIVE HRMS // WORKFORCE INTELLIGENCE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">
            HR software that <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              thinks alongside you.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Replace cumbersome leave forms and repetitive policy questions with autonomous agents that reason over employment contracts, calculate payroll tax, and coordinate team schedules.
          </p>
        </div>

        {/* Interactive Simulated Slack / Agent Dialogue */}
        <div className="max-w-3xl mx-auto bg-[#090a14] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-emerald-950/30 space-y-4 mb-20 font-sans">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-zinc-400">
            <span className="text-emerald-400 flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              <span>HR ASSISTANT COPILOT (SLACK / TEAMS EMBEDDED)</span>
            </span>
            <span>AUTONOMOUS WORKFLOW</span>
          </div>

          <div className="space-y-3 pt-2 text-sm">
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-zinc-200">
              <span className="text-[11px] font-mono text-zinc-400 block mb-1">Employee (Rohan M.):</span>
              &ldquo;Hey HR Bot, I need to take 3 days off next week for my sister&apos;s wedding. Do I have enough privilege leaves, and does it clash with the sprint release?&rdquo;
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-100 space-y-2">
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5" />
                <span>AI-Native HRMS Agent:</span>
              </span>
              <p className="text-xs sm:text-sm leading-relaxed">
                &ldquo;Hi Rohan! You currently have <strong>6.5 Privilege Leaves</strong> available. The 3-day window (Wed-Fri) does not conflict with any critical delivery milestones, and your sprint lead Priya is already in-office. I&apos;ve drafted the leave request and notified Priya for 1-click approval.&rdquo;
              </p>
              <div className="pt-2 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[11px] border border-emerald-500/30">
                  ACTION: Leave Request #LR-902 Filed &bull; Auto-Synced to Google Calendar
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-[#080912] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Instant Policy RAG</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Upload employee handbooks, maternity policies, and compensation rules. Employees get instant, unambiguous answers without waiting days on HR email tickets.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#080912] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Automated Tax & PF Deductions</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Dynamic calculation of Indian statutory deductions (TDS, PF, ESIC, PT) with zero payroll delay and cryptographic payslip dispatch.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#080912] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Attrition Sentiment Watch</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Privacy-safe aggregate telemetry that identifies burnout patterns and team friction before it translates into voluntary turnover.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
