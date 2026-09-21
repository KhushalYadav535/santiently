"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2, Scan, RefreshCw, Cpu, Database, Eye } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import { soundFX } from "@/utils/audio";

export default function TextMitraPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanned, setScanned] = useState(true);

  const sampleJson = {
    invoice_number: "INV-2026-8821",
    vendor: {
      name: "Apex Logistics & Cloud Services Ltd",
      tax_id: "GSTIN27AABCA1234F1Z5",
      address: "DLF Cyber City, Tower 4, Gurugram"
    },
    buyer: {
      company: "Sentiently Enterprise Client",
      po_number: "PO-99104"
    },
    line_items: [
      { item: "Dedicated LPU Inference Cluster", qty: 2, unit_price: 24000, total: 48000 },
      { item: "Streaming WebSockets Telephony Gateway", qty: 1, unit_price: 15500, total: 15500 }
    ],
    subtotal: 63500,
    tax_gst_18: 11430,
    total_payable: 74930,
    confidence_score: 0.9982,
    fraud_risk_score: "LOW_0.02"
  };

  const triggerScan = () => {
    setIsScanning(true);
    soundFX.playPulse();
    setTimeout(() => {
      setIsScanning(false);
      setScanned(true);
      soundFX.playHover();
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-cyan-500/30">
      <CustomCursor />
      <Navbar />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        {/* Back Link */}
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

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-6 pt-6 pb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>TEXTMITRA // DOCUMENT INTELLIGENCE & OCR</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">
            Turn unstructured documents <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              into verified data.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Multi-modal vision OCR and semantic comprehension engine that converts PDFs, skewed receipts, and complex tax invoices into structured, validated JSON payloads.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2 font-mono text-xs">
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-cyan-300">
              🎯 99.4% Extraction Precision
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-emerald-300">
              ⚡ 0.8s Parse Speed
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-purple-300">
              📐 Spatial Coordinate Tokens
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-amber-300">
              🛡 Built-in Forgery Detection
            </span>
          </div>
        </div>

        {/* Interactive OCR & JSON Extraction Playground */}
        <div className="bg-[#090a14] border border-cyan-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-cyan-950/30 mb-24">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-bold">
              <Scan className="w-4 h-4" />
              <span>LIVE DOCUMENT EXTRACTION ENGINE</span>
            </div>
            <button
              onClick={triggerScan}
              disabled={isScanning}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-200 border border-cyan-500/40 text-xs font-mono transition-all"
            >
              {isScanning ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>PARSING SPATIAL TOKENS...</span>
                </>
              ) : (
                <>
                  <Scan className="w-3.5 h-3.5" />
                  <span>RE-SCAN SAMPLE INVOICE</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-8 items-start">
            {/* Simulated Document Preview with Bounding Boxes */}
            <div className="lg:col-span-6 relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4 font-mono text-xs overflow-hidden">
              {isScanning && (
                <div className="absolute inset-0 bg-cyan-500/10 border-b-2 border-cyan-400 scanline-effect pointer-events-none" />
              )}

              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <div className="relative inline-block border border-cyan-400/80 bg-cyan-500/20 px-2 py-0.5 rounded text-cyan-200">
                  Apex Logistics Ltd
                  <span className="absolute -top-3 -right-2 text-[9px] bg-cyan-400 text-black px-1 rounded font-bold">VENDOR</span>
                </div>
                <div className="relative inline-block border border-purple-400/80 bg-purple-500/20 px-2 py-0.5 rounded text-purple-200">
                  TAX INVOICE: #INV-2026-8821
                  <span className="absolute -top-3 -right-2 text-[9px] bg-purple-400 text-black px-1 rounded font-bold">INV_NO</span>
                </div>
              </div>

              <div className="py-2 space-y-2 text-zinc-400 text-[11px]">
                <p>Buyer: Sentiently Enterprise Client | GSTIN: 27AABCA1234F1Z5</p>
                <p>PO Number: PO-99104 | Issue Date: 14 Oct 2026</p>
              </div>

              {/* Table with detected bounding boxes */}
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-2">
                <div className="flex justify-between text-[10px] text-zinc-400 pb-1 border-b border-white/5">
                  <span>LINE ITEM</span>
                  <span>QTY</span>
                  <span>TOTAL</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="border border-emerald-400/80 bg-emerald-500/10 px-1.5 py-0.5 rounded text-emerald-200">
                    Dedicated LPU Inference Cluster
                  </span>
                  <span>2</span>
                  <span className="border border-emerald-400/80 bg-emerald-500/10 px-1.5 py-0.5 rounded text-emerald-200">
                    ₹48,000.00
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="border border-emerald-400/80 bg-emerald-500/10 px-1.5 py-0.5 rounded text-emerald-200">
                    Streaming Telephony Gateway
                  </span>
                  <span>1</span>
                  <span className="border border-emerald-400/80 bg-emerald-500/10 px-1.5 py-0.5 rounded text-emerald-200">
                    ₹15,500.00
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-white/10 font-bold text-xs">
                <span>TOTAL PAYABLE INCL. 18% GST:</span>
                <span className="border border-amber-400 bg-amber-500/20 px-2 py-1 rounded text-amber-200 text-sm">
                  ₹74,930.00
                </span>
              </div>
            </div>

            {/* Extracted JSON Payload */}
            <div className="lg:col-span-6 p-5 rounded-2xl bg-black/80 border border-cyan-500/20 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-zinc-400 text-[11px] pb-2 border-b border-white/10">
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <Database className="w-3.5 h-3.5" />
                  <span>EXTRACTED STRUCTURED JSON</span>
                </span>
                <span className="text-emerald-400">99.82% CONFIDENCE</span>
              </div>

              <pre className="text-[11px] text-zinc-300 max-h-80 overflow-y-auto leading-relaxed bg-black/40 p-3 rounded-lg border border-white/5">
                {JSON.stringify(sampleJson, null, 2)}
              </pre>

              <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-400">
                <span>Schema: Universal Invoice v3.1</span>
                <span className="text-cyan-400">Webhook Ready &rarr;</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="p-6 rounded-2xl bg-[#080912] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Spatial Layout Graph</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              TextMitra doesn&apos;t just read text horizontally. It preserves physical cell alignments, multi-column tables, and nested legal hierarchies.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#080912] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Deterministic Verification</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Extracted line items must mathematically sum to invoice totals. If a single digit is distorted, the engine flags it for human-in-the-loop review.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#080912] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Zero-Shot Schemas</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Define your target schema in plain TypeScript or JSON. TextMitra extracts matching entities from unseen vendor layouts without custom re-training.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-sky-950/30 to-black/60 border border-cyan-500/30 text-center max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-4xl font-black text-white">
            Automate your document workflows today.
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-lg mx-auto">
            Integrate TextMitra into your ERP, accounting, or KYC pipelines with our drop-in REST APIs and webhook dispatchers.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-white text-black hover:bg-zinc-200 transition-colors shadow-xl"
            >
              Get TextMitra API Keys
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
