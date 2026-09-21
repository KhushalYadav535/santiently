import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Cpu, Shield, Layers, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import { PRODUCTS, Product } from "@/data/products";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-purple-500/30">
      <CustomCursor />
      <Navbar />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
        <div className="mb-8">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>&larr; BACK TO PRODUCT UNIVERSE</span>
          </Link>
        </div>

        {/* Hero */}
        <div className="space-y-6 pt-6 pb-16 text-left border-b border-white/10">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="text-xs font-mono px-3 py-1 rounded-full uppercase border font-semibold"
              style={{
                borderColor: `${product.highlightColor}60`,
                backgroundColor: `${product.highlightColor}15`,
                color: product.highlightColor,
              }}
            >
              {product.category}
            </span>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
              STATUS: {product.status}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            {product.name}
          </h1>

          <p className="text-xl sm:text-2xl font-mono text-purple-300 max-w-3xl">
            {product.tagline}
          </p>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            {product.description}
          </p>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {product.metrics.map((metric) => (
              <div key={metric.label} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[11px] font-mono text-zinc-400 uppercase">{metric.label}</div>
                <div className="text-xl font-bold text-white font-mono mt-1">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture & Engineering Details */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
              <Cpu className="w-5 h-5 text-purple-400" />
              <span>Technical Architecture</span>
            </h2>
            <ul className="space-y-3">
              {product.architectureDetails.map((detail, idx) => (
                <li key={idx} className="p-4 rounded-xl bg-[#090a12] border border-white/5 text-xs sm:text-sm text-zinc-300 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              <span>Commercial Use Cases</span>
            </h2>
            <ul className="space-y-3">
              {product.useCases.map((useCase, idx) => (
                <li key={idx} className="p-4 rounded-xl bg-[#090a12] border border-white/5 text-xs sm:text-sm text-zinc-300 flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0 mt-1.5" />
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to action */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950/30 via-indigo-950/20 to-black/50 border border-purple-500/20 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">
            Deploy {product.name} in your business infrastructure
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
            Available via dedicated cloud instances, API connectors, or hybrid on-premise deployments.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-colors shadow-lg"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
