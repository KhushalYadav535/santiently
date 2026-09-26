"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FlaskConical, ArrowUpRight, X, ChevronRight, Terminal } from "lucide-react";
import { LAB_EXPERIMENTS, Experiment } from "@/data/experiments";
import { soundFX } from "@/utils/audio";

export default function LabGallery({ isFullPage = false }: { isFullPage?: boolean }) {
  const [selectedExp, setSelectedExp] = useState<Experiment | null>(null);

  const displayedExperiments = isFullPage ? LAB_EXPERIMENTS : LAB_EXPERIMENTS.slice(0, 4);

  const getStatusColor = (status: Experiment["status"]) => {
    switch (status) {
      case "EXPERIMENT":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "PROTOTYPE":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "RESEARCH":
        return "bg-blue-50 text-blue-700 border-blue-200";
    }
  };

  return (
    <section id="lab" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-blue-700 text-xs font-mono shadow-2xs">
            <FlaskConical className="w-3.5 h-3.5 text-blue-600" />
            <span>THE SENTIENTLY LAB // R&amp;D DIVISION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight">
            Frontier AI Experiments.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Google Labs inspired exploration: Where radical ideas in acoustic emotion, multi-agent swarms, and geometric document graphs are pressure-tested before entering commercial production.
          </p>
        </div>

        {!isFullPage && (
          <div>
            <Link
              href="/lab"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white hover:bg-gray-50 text-neutral-800 border border-gray-200 shadow-xs transition-all duration-200"
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
            >
              <span>View All Research Projects</span>
              <ArrowUpRight className="w-4 h-4 text-blue-600" />
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
            className="group relative rounded-2xl bg-white border border-gray-200/90 p-6 sm:p-8 shadow-xs transition-all duration-300 hover:border-blue-400 hover:-translate-y-1 hover:shadow-lg cursor-pointer overflow-hidden"
          >
            {/* Top Code & Status */}
            <div className="flex items-center justify-between gap-2 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2 font-mono text-xs text-blue-700">
                <Terminal className="w-3.5 h-3.5" />
                <span className="font-semibold">{exp.code}</span>
                <span className="text-neutral-300">&bull;</span>
                <span className="text-neutral-500">{exp.category}</span>
              </div>
              <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border font-semibold ${getStatusColor(exp.status)}`}>
                {exp.status}
              </span>
            </div>

            {/* Title & Summary */}
            <div className="pt-4 space-y-2">
              <h3 className="text-xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                <span>{exp.title}</span>
                <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {exp.summary}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-6">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-gray-100 text-neutral-600 border border-gray-200/60"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Inspector Drawer for Experiment - Google Labs Light Dialog */}
      {selectedExp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-blue-700">
              <Terminal className="w-4 h-4" />
              <span className="font-semibold">{selectedExp.code} // RESEARCH ARTIFACT</span>
            </div>

            <div>
              <h3 className="text-2xl font-black text-neutral-900">
                {selectedExp.title}
              </h3>
              <p className="text-xs font-mono text-blue-600 mt-1">
                CATEGORY: {selectedExp.category} &bull; {selectedExp.status}
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-700">
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 space-y-1">
                <span className="text-[11px] font-mono text-blue-800 uppercase tracking-wider font-semibold">
                  WORKING HYPOTHESIS
                </span>
                <p className="italic text-blue-950 font-medium">
                  &ldquo;{selectedExp.hypothesis}&rdquo;
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block mb-1 font-semibold">
                  TECHNICAL ARCHITECTURE &amp; SPECIFICATION
                </span>
                <p className="leading-relaxed text-neutral-600">
                  {selectedExp.details}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <span className="text-[10px] font-mono text-emerald-700 uppercase font-semibold">
                    OBSERVED BENCHMARK
                  </span>
                  <div className="text-xs text-neutral-900 font-medium mt-1">
                    {selectedExp.metricsObserved}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <span className="text-[10px] font-mono text-amber-700 uppercase font-semibold">
                    COMMERCIAL TARGET
                  </span>
                  <div className="text-xs text-neutral-900 font-medium mt-1">
                    {selectedExp.nextMilestone}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedExp(null)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold bg-neutral-900 hover:bg-black text-white shadow-xs"
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
