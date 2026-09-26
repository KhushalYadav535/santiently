"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Activity, FileText, CheckCircle2, Mic, TrendingUp, Layers } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { soundFX } from "@/utils/audio";
import Tilt3DCard from "@/components/ui/Tilt3DCard";
import SectionHeading from "@/components/awwwards/SectionHeading";
import { FadeUp } from "@/components/awwwards/Reveal";

const CATEGORIES = ["ALL", "VOICE AI", "DOCUMENT AI", "ENTERPRISE", "FINTECH", "OPERATIONS", "COMMUNITY"];

function CardMediaPreview({ slug }: { slug: string }) {
  if (slug === "vocred") {
    return (
      <div className="relative h-28 w-full rounded-xl bg-gradient-to-tr from-blue-50 via-indigo-50 to-purple-50 border border-blue-100 p-3 overflow-hidden flex flex-col justify-between group-hover:border-blue-300 transition-colors">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white text-[10px] font-mono text-blue-700 shadow-2xs border border-blue-200">
            <Mic className="w-3 h-3 text-blue-600 animate-pulse" />
            <span>24kHz PCM</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            &lt;280ms
          </span>
        </div>
        {/* Animated Sound Bars */}
        <div className="flex items-end justify-center gap-1.5 h-12 pt-2">
          {[18, 35, 52, 28, 44, 62, 38, 50, 32, 58, 40, 24].map((h, i) => (
            <div
              key={i}
              className="w-1.5 rounded-full bg-gradient-to-t from-blue-600 to-indigo-500 transition-all duration-300 group-hover:animate-pulse"
              style={{
                height: `${h}%`,
                animationDelay: `${i * 75}ms`
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (slug === "textmitra") {
    return (
      <div className="relative h-28 w-full rounded-xl bg-gradient-to-tr from-cyan-50 via-sky-50 to-blue-50 border border-cyan-100 p-3 overflow-hidden flex flex-col justify-between group-hover:border-cyan-300 transition-colors">
        {/* Scanning Laser Beam */}
        <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent scanline-effect pointer-events-none opacity-80" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white text-[10px] font-mono text-cyan-800 shadow-2xs border border-cyan-200">
            <FileText className="w-3 h-3 text-cyan-600" />
            <span>Spatial OCR</span>
          </div>
          <span className="text-[10px] font-mono text-cyan-700 font-bold bg-cyan-100/60 px-2 py-0.5 rounded-full border border-cyan-200">
            99.4% Accurate
          </span>
        </div>
        <div className="space-y-1.5 pt-2 font-mono text-[10px]">
          <div className="flex justify-between items-center bg-white/80 p-1.5 rounded border border-cyan-200/80">
            <span className="text-neutral-700">#INV-2026-8821</span>
            <span className="text-emerald-700 font-bold">₹74,930.00</span>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "ai-hrms") {
    return (
      <div className="relative h-28 w-full rounded-xl bg-gradient-to-tr from-emerald-50 via-teal-50 to-green-50 border border-emerald-100 p-3 overflow-hidden flex flex-col justify-between group-hover:border-emerald-300 transition-colors">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white text-[10px] font-mono text-emerald-800 shadow-2xs border border-emerald-200">
            <Activity className="w-3 h-3 text-emerald-600" />
            <span>Policy Copilot</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-100/60 px-2 py-0.5 rounded-full border border-emerald-200">
            Auto-Sync
          </span>
        </div>
        <div className="bg-white/85 p-2 rounded-lg border border-emerald-200/70 text-[10px] space-y-0.5 font-sans">
          <div className="text-neutral-500 font-mono text-[9px]">HR Agent &bull; 1-click Approval</div>
          <div className="text-neutral-800 font-medium">Leave Request #LR-902 &rarr; Approved</div>
        </div>
      </div>
    );
  }

  if (slug === "trading") {
    return (
      <div className="relative h-28 w-full rounded-xl bg-gradient-to-tr from-amber-50 via-orange-50 to-yellow-50 border border-amber-100 p-3 overflow-hidden flex flex-col justify-between group-hover:border-amber-300 transition-colors">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white text-[10px] font-mono text-amber-800 shadow-2xs border border-amber-200">
            <TrendingUp className="w-3 h-3 text-amber-600" />
            <span>Quant Feed</span>
          </div>
          <span className="text-[10px] font-mono text-amber-700 font-bold bg-amber-100/60 px-2 py-0.5 rounded-full border border-amber-200">
            42ms Signal
          </span>
        </div>
        {/* Animated Line SVG */}
        <div className="w-full h-10 flex items-center justify-center">
          <svg className="w-full h-8 overflow-visible" viewBox="0 0 100 30" fill="none">
            <path
              d="M0 22 L15 18 L30 24 L45 12 L60 16 L75 8 L90 12 L100 4"
              stroke="#d97706"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="100" cy="4" r="3.5" fill="#d97706" className="animate-ping" />
            <circle cx="100" cy="4" r="2.5" fill="#b45309" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-28 w-full rounded-xl bg-gradient-to-tr from-purple-50 via-indigo-50 to-pink-50 border border-purple-100 p-3 overflow-hidden flex flex-col justify-between group-hover:border-purple-300 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white text-[10px] font-mono text-purple-800 shadow-2xs border border-purple-200">
          <Layers className="w-3 h-3 text-purple-600" />
          <span>Autonomous Swarm</span>
        </div>
        <span className="text-[10px] font-mono text-purple-700 font-bold bg-purple-100/60 px-2 py-0.5 rounded-full border border-purple-200">
          Swarm-X
        </span>
      </div>
      <div className="flex items-center justify-center gap-3">
        <div className="w-3 h-3 rounded-full bg-purple-600 animate-ping" />
        <span className="text-xs font-mono text-neutral-700 font-semibold">Autonomous Node Cluster</span>
      </div>
    </div>
  );
}

export default function ProductUniverse() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProducts = PRODUCTS.filter((product) => {
    if (selectedCategory === "ALL") return true;
    return product.category.toUpperCase() === selectedCategory;
  });

  const getStatusBadge = (status: Product["status"]) => {
    switch (status) {
      case "LIVE":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-[0_0_14px_rgba(16,185,129,0.35)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            LIVE
          </span>
        );
      case "BETA":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            BETA
          </span>
        );
      case "IN_DEV":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            IN DEV
          </span>
        );
      case "EXPERIMENT":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-purple-50 text-purple-700 border border-purple-200">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            LAB EXP
          </span>
        );
    }
  };

  const handleSpotlight = (e: React.MouseEvent<HTMLDivElement>) => {
    const t = (e.target as HTMLElement).closest?.(".spotlight-card") as HTMLElement | null;
    if (!t) return;
    const r = t.getBoundingClientRect();
    t.style.setProperty("--mx", `${e.clientX - r.left}px`);
    t.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section id="products" className="relative py-24 sm:py-32 px-5 sm:px-10 max-w-[1600px] mx-auto">
      <SectionHeading
        index="06"
        label="Product universe"
        title={
          <>
            <span>Designed for real work.</span>
            <span>
              Built to <span className="text-[#4d7c0f]">think.</span>
            </span>
          </>
        }
        accent="From streaming voice agents to document comprehension and autonomous enterprise operations — our suite of AI-native platforms."
      />
      {/* Category Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 mt-10 gap-6">
        <p className="font-jbmono text-[11px] tracking-[0.25em] uppercase text-black/40">Filter by capability →</p>
        {/* Category Filters (Smooth Pill Bar) */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  soundFX.playClick();
                }}
                onMouseEnter={() => soundFX.playHover()}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                  isSelected
                    ? "bg-[#0b0b0f] text-[#d8ff3e] shadow-xs scale-105"
                    : "bg-white text-neutral-600 hover:text-neutral-900 hover:bg-black/[0.03] border border-black/10"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Cards Grid — premium spotlight cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" onMouseMove={handleSpotlight}>
        {filteredProducts.map((product, idx) => (
          <Tilt3DCard
            key={product.id}
            maxTilt={6}
            scale={1.02}
            className="rounded-2xl"
          >
            <div
              data-cursor-label="OPEN"
              style={{ animationDelay: `${idx * 80}ms`, ["--spot" as any]: product.highlightColor }}
              className="animate-reveal-2 spotlight-card group relative flex flex-col justify-between rounded-[22px] bg-white border border-black/10 p-5 shadow-[0_2px_16px_-6px_rgba(11,11,15,0.1)] transition-all duration-400 hover:border-black/25 hover:shadow-[0_28px_64px_-20px_rgba(11,11,15,0.28)] hover:-translate-y-1.5 overflow-hidden text-left h-full"
              onMouseEnter={() => soundFX.playHover()}
            >
              {/* Glowing accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] opacity-90 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, ${product.highlightColor}, ${product.highlightColor}66)`,
                  boxShadow: `0 1px 14px ${product.highlightColor}88`,
                }}
              />

              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between gap-2 pb-3">
                  <span className="flex items-center gap-2 text-[11px] font-mono tracking-wider uppercase text-neutral-500 font-semibold">
                    <span className="text-black/25 font-bold">{String(idx + 1).padStart(2, "0")}</span>
                    {product.category}
                  </span>
                  {getStatusBadge(product.status)}
                </div>

                {/* Animated Interactive Visual Preview Header */}
                <div className="mb-4 preview-sheen rounded-xl">
                  <CardMediaPreview slug={product.slug} />
                </div>

                {/* Product Name & Tagline */}
                <div className="space-y-1 mb-2.5">
                  <h3 className="font-display text-xl font-bold text-neutral-900 group-hover:text-[#4d7c0f] transition-colors flex items-center justify-between">
                    <span>{product.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#4d7c0f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>
                  <p className="text-xs font-mono font-medium text-[#4d7c0f]">
                    {product.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-600 leading-relaxed line-clamp-2 mb-4">
                  {product.description}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 py-3 px-3.5 rounded-xl bg-black/[0.03] border border-black/10 mb-4">
                  {product.metrics.slice(0, 2).map((metric) => (
                    <div key={metric.label}>
                      <div className="text-[10px] text-black/40 font-jbmono uppercase tracking-[0.12em]">
                        {metric.label}
                      </div>
                      <div className="font-display text-[16px] font-bold text-neutral-900 mt-0.5 tabular-nums">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-gray-100 text-neutral-600 border border-gray-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Action */}
              <div className="pt-3 border-t border-black/10">
                <Link
                  href={product.href}
                  className="w-full inline-flex items-center justify-between py-1 transition-colors"
                  onClick={() => soundFX.playClick()}
                >
                  <span className="text-[13px] font-bold text-neutral-900">{product.ctaText}</span>
                  <span className="w-9 h-9 rounded-full bg-[#0b0b0f] text-[#d8ff3e] flex items-center justify-center transition-all duration-300 group-hover:bg-[#4d7c0f] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(77,124,15,0.5)]">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </Link>
              </div>
            </div>
          </Tilt3DCard>
        ))}
      </div>
    </section>
  );
}
