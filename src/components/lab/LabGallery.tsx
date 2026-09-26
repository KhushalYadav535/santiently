"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FlaskConical, ArrowUpRight, X, ChevronRight, Terminal } from "lucide-react";
import { LAB_EXPERIMENTS, Experiment } from "@/data/experiments";
import { soundFX } from "@/utils/audio";
import Tilt3DCard from "@/components/ui/Tilt3DCard";
import SectionHeading from "@/components/awwwards/SectionHeading";

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
    <section id="lab" className="relative py-24 sm:py-32 px-5 sm:px-10 max-w-[1600px] mx-auto">
      {/* Header */}
      <SectionHeading
        index="09"
        label="The lab — R&D division"
        title={
          <>
            <span>Frontier AI</span>
            <span>
              experiments<span className="text-[#4d7c0f]">.</span>
            </span>
          </>
        }
        accent="Radical ideas in acoustic emotion, multi-agent swarms and geometric document graphs — pressure-tested before commercial production."
      />

      {!isFullPage && (
        <div className="flex justify-start mt-10 mb-12">
          <Link
            href="/lab"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#0b0b0f] hover:bg-[#4d7c0f] hover:text-white text-[#d8ff3e] transition-all duration-200"
            onMouseEnter={() => soundFX.playHover()}
            onClick={() => soundFX.playClick()}
          >
            <span>View All Research Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
      {(isFullPage) && <div className="mt-10 mb-12" />}

      {/* Experiments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedExperiments.map((exp) => (
          <Tilt3DCard
            key={exp.id}
            maxTilt={6}
            scale={1.02}
            className="rounded-2xl"
          >
            <div
              onClick={() => {
                setSelectedExp(exp);
                soundFX.playClick();
              }}
              onMouseEnter={() => soundFX.playHover()}
              className="group relative rounded-2xl bg-white border border-black/10 p-6 sm:p-8 shadow-xs transition-all duration-300 hover:border-black/30 hover:shadow-lg cursor-pointer overflow-hidden h-full flex flex-col justify-between"
            >
              {/* Top Code & Status */}
              <div>
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-black/10">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#4d7c0f] font-bold">
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
                    <h3 className="font-display text-xl font-bold text-neutral-900 group-hover:text-[#4d7c0f] transition-colors flex items-center justify-between">
                      <span>{exp.title}</span>
                      <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-[#4d7c0f] group-hover:translate-x-1 transition-all" />
                    </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {exp.summary}
                  </p>
                </div>
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
          </Tilt3DCard>
        ))}
      </div>

      {/* Modal / Inspector Drawer for Experiment - Google Labs Light Dialog */}
      {selectedExp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white border border-black/10 rounded-[24px] p-6 sm:p-8 shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#4d7c0f] font-bold">
              <Terminal className="w-4 h-4" />
              <span className="font-semibold">{selectedExp.code} // RESEARCH ARTIFACT</span>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-neutral-900">
                {selectedExp.title}
              </h3>
              <p className="text-xs font-mono text-[#4d7c0f] font-bold mt-1">
                CATEGORY: {selectedExp.category} &bull; {selectedExp.status}
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-700">
              <div className="p-4 rounded-xl bg-[#d8ff3e]/15 border border-[#4d7c0f]/30 space-y-1">
                <span className="text-[11px] font-mono text-[#4d7c0f] uppercase tracking-wider font-bold">
                  WORKING HYPOTHESIS
                </span>
                <p className="italic text-black/80 font-medium">
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
                className="px-5 py-2.5 rounded-full text-xs font-bold bg-[#0b0b0f] hover:bg-[#4d7c0f] hover:text-white text-[#d8ff3e] shadow-xs"
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
