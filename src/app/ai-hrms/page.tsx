"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Users, MessageSquare, Shield, Clock, Brain, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroll from "@/components/awwwards/SmoothScroll";
import { soundFX } from "@/utils/audio";

export default function AIHrmsPage() {
  return (
    <div className="min-h-screen bg-[#f4f2ed] text-[#0b0b0f]">
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar />
      <SmoothScroll />

      <main className="pt-28 pb-20 px-5 sm:px-10 max-w-[1600px] mx-auto relative">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors"
            onClick={() => soundFX.playClick()}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>&larr; BACK TO SANTIENTLY HOMEPAGE</span>
          </Link>
        </div>

        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-6 pt-6 pb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b0b0f] text-[#d8ff3e] text-xs font-jbmono font-bold">
            <Users className="w-3.5 h-3.5 text-[#d8ff3e]" />
            <span>AI-NATIVE HRMS // WORKFORCE INTELLIGENCE</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.035em] text-neutral-900 leading-[1.0]">
            HR software that <br />
            <span className="font-serif-it font-normal text-[#047857]">
              thinks alongside you.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Replace cumbersome leave forms and repetitive policy questions with autonomous agents that reason over employment contracts, calculate payroll tax, and coordinate team schedules.
          </p>
        </div>

        {/* Interactive Simulated Slack / Agent Dialogue */}
        <div className="max-w-3xl mx-auto bg-white border border-black/10 rounded-[24px] p-6 sm:p-8 shadow-[0_24px_64px_-24px_rgba(11,11,15,0.22)] space-y-4 mb-20 font-sans">
          <div className="flex items-center justify-between pb-4 border-b border-black/10 text-xs font-mono text-neutral-500">
            <span className="text-emerald-700 font-semibold flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>HR ASSISTANT COPILOT (SLACK / TEAMS EMBEDDED)</span>
            </span>
            <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-semibold border border-emerald-200">
              AUTONOMOUS WORKFLOW
            </span>
          </div>

          <div className="space-y-3 pt-2 text-sm">
            <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-neutral-800">
              <span className="text-[11px] font-mono text-neutral-500 block mb-1">Employee (Rohan M.):</span>
              &ldquo;Hey HR Bot, I need to take 3 days off next week for my sister&apos;s wedding. Do I have enough privilege leaves, and does it clash with the sprint release?&rdquo;
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-neutral-800 space-y-2">
              <span className="text-[11px] font-mono text-emerald-700 font-semibold flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-emerald-600" />
                <span>AI-Native HRMS Agent:</span>
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-neutral-700">
                &ldquo;Hi Rohan! You currently have <strong className="text-neutral-900">6.5 Privilege Leaves</strong> available. The 3-day window (Wed-Fri) does not conflict with any critical delivery milestones, and your sprint lead Priya is already in-office. I&apos;ve drafted the leave request and notified Priya for 1-click approval.&rdquo;
              </p>
              <div className="pt-2 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-white text-emerald-800 font-mono text-[11px] border border-emerald-200 font-medium shadow-2xs">
                  ACTION: Leave Request #LR-902 Filed &bull; Auto-Synced to Google Calendar
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-xs space-y-3 hover:border-black/25 hover:-translate-y-1 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">Instant Policy RAG</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Upload employee handbooks, maternity policies, and compensation rules. Employees get instant, unambiguous answers without waiting days on HR email tickets.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-xs space-y-3 hover:border-black/25 hover:-translate-y-1 transition-all">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">Automated Tax &amp; PF Deductions</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Dynamic calculation of Indian statutory deductions (TDS, PF, ESIC, PT) with zero payroll delay and cryptographic payslip dispatch.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-xs space-y-3 hover:border-black/25 hover:-translate-y-1 transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">Attrition Sentiment Watch</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Privacy-safe aggregate telemetry that identifies burnout patterns and team friction before it translates into voluntary turnover.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
