"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Clock, Sparkles, Filter } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { soundFX } from "@/utils/audio";

const CATEGORIES = ["ALL", "VOICE AI", "DOCUMENT AI", "ENTERPRISE", "FINTECH", "OPERATIONS", "COMMUNITY"];

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
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE
          </span>
        );
      case "BETA":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            BETA
          </span>
        );
      case "IN_DEV":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            IN DEV
          </span>
        );
      case "EXPERIMENT":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/30">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            LAB EXP
          </span>
        );
    }
  };

  return (
    <section id="products" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>PRODUCT UNIVERSE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Designed for real work. Built to think.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            From conversational voice agents to document comprehension and autonomous enterprise operations, explore our suite of AI-native platforms.
          </p>
        </div>

        {/* Category Filters (Google Labs inspiration) */}
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
                className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                  isSelected
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/40"
                    : "bg-white/[0.03] text-zinc-400 hover:text-white border border-white/5 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group relative flex flex-col justify-between rounded-2xl bg-[#090a12]/90 border border-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-950/40 overflow-hidden"
            onMouseEnter={() => soundFX.playHover()}
          >
            {/* Ambient card top border glow */}
            <div
              className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl opacity-20 group-hover:opacity-60 transition-opacity"
              style={{ backgroundColor: product.highlightColor }}
            />

            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-2 pb-4">
                <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 font-semibold">
                  {product.category}
                </span>
                {getStatusBadge(product.status)}
              </div>

              {/* Product Name & Tagline */}
              <div className="space-y-1.5 mb-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors flex items-center justify-between">
                  <span>{product.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </h3>
                <p className="text-xs font-mono font-medium text-purple-300/90">
                  {product.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-6">
                {product.description}
              </p>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 gap-2 py-3 px-3.5 rounded-xl bg-black/40 border border-white/5 mb-6">
                {product.metrics.slice(0, 2).map((metric) => (
                  <div key={metric.label}>
                    <div className="text-[10px] text-zinc-400 font-mono uppercase">
                      {metric.label}
                    </div>
                    <div className="text-sm font-bold text-white font-mono mt-0.5">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {product.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom CTA Action */}
            <div className="pt-4 border-t border-white/5">
              <Link
                href={product.href}
                className="w-full inline-flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-white py-1 transition-colors"
                onClick={() => soundFX.playClick()}
              >
                <span>{product.ctaText}</span>
                <span className="text-purple-400 font-mono text-[11px] group-hover:translate-x-1 transition-transform">
                  EXPLORE &rarr;
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
