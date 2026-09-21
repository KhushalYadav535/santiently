"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Terminal, FlaskConical, ArrowUpRight, X, CheckCircle2, ChevronRight } from "lucide-react";
import { LAB_EXPERIMENTS, Experiment } from "@/data/experiments";
import { soundFX } from "@/utils/audio";

export default function LabGallery({ isFullPage = false }: { isFullPage?: boolean }) {
  const [selectedExp, setSelectedExp] = useState<Experiment | null>(null);

  const displayedExperiments = isFullPage ? LAB_EXPERIMENTS : LAB_EXPERIMENTS.slice(0, 4);

  const getStatusColor = (status: Experiment["status"]) => {
    switch (status) {
      case "EXPERIMENT":
        return "bg-purple-500/10 text-purple-300 border-purple-500/30";
      case "PROTOTYPE":
        return "bg-amber-500/10 text-amber-300 border-amber-500/30";
      case "RESEARCH":
        return "bg-cyan-500/10 text-cyan-300 border-cyan-500/30";
    }
  };

  return (
    <section id="lab" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Glow orb */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <FlaskConical className="w-3.5 h-3.5 text-purple-400" />
            <span>SENTIENTLY LAB // R&D DIVISION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            The Frontier Experiments.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Google Labs inspired exploration: Where radical ideas in acoustic emotion, multi-agent swarms, and geometric document graphs are pressure-tested before entering commercial production.
          </p>
        </div>

        {!isFullPage && (
          <div>
            <Link
              href="/lab"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-purple-400/40 transition-all duration-300"
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
            >
              <span>View All Research Projects</span>
              <ArrowUpRight className="w-4 h-4 text-purple-400" />
            </Link>
          </div>
        )}
      </div>

      {/* Experiments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedExperiments.map((exp) => (
          <div
            key={exp.id}
            onClick={() => {
              setSelectedExp(exp);
              soundFX.playClick();
            }}
            onMouseEnter={() => soundFX.playHover()}
            className="group relative rounded-2xl bg-[#090a13]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-950/30 cursor-pointer overflow-hidden"
          >
            {/* Top Code & Status */}
            <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/5">
              <div className="flex items-center gap-2 font-mono text-xs text-purple-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>{exp.code}</span>
                <span className="text-zinc-600">&bull;</span>
                <span className="text-zinc-400">{exp.category}</span>
              </div>
              <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${getStatusColor(exp.status)}`}>
                {exp.status}
              </span>
            </div>

            {/* Title & Summary */}
            <div className="pt-4 space-y-2">
              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors flex items-center justify-between">
                <span>{exp.title}</span>
                <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {exp.summary}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-6">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400 border border-white/5"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Inspector Drawer for Experiment */}
      {selectedExp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#0b0c16] border border-purple-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/50 space-y-6">
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
              <Terminal className="w-4 h-4" />
              <span>{selectedExp.code} // RESEARCH ARTIFACT</span>
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                {selectedExp.title}
              </h3>
              <p className="text-xs font-mono text-purple-300 mt-1">
                CATEGORY: {selectedExp.category} &bull; {selectedExp.status}
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider">
                  WORKING HYPOTHESIS
                </span>
                <p className="italic text-zinc-200">
                  &ldquo;{selectedExp.hypothesis}&rdquo;
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  TECHNICAL ARCHITECTURE & SPECIFICATION
                </span>
                <p className="leading-relaxed text-zinc-400">
                  {selectedExp.details}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase">
                    OBSERVED BENCHMARK
                  </span>
                  <div className="text-xs text-white font-medium mt-1">
                    {selectedExp.metricsObserved}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[10px] font-mono text-amber-400 uppercase">
                    COMMERCIAL TARGET
                  </span>
                  <div className="text-xs text-white font-medium mt-1">
                    {selectedExp.nextMilestone}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedExp(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
