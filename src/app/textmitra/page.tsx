"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2, Scan, RefreshCw, Cpu, Database, Eye } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroll from "@/components/awwwards/SmoothScroll";
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
    <div className="min-h-screen bg-[#f4f2ed] text-[#0b0b0f]">
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar />
      <SmoothScroll />

      <main className="pt-28 pb-20 px-5 sm:px-10 max-w-[1600px] mx-auto relative">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors"
            onClick={() => soundFX.playClick()}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>&larr; BACK TO SENTIENTLY HOMEPAGE</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-6 pt-6 pb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b0b0f] text-[#d8ff3e] text-xs font-jbmono font-bold">
            <FileText className="w-3.5 h-3.5 text-[#d8ff3e]" />
            <span>TEXTMITRA // DOCUMENT INTELLIGENCE &amp; OCR</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.035em] text-neutral-900 leading-[1.0]">
            Turn unstructured documents <br />
            <span className="font-serif-it font-normal text-[#0e7490]">
              into verified data.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Multi-modal vision OCR and semantic comprehension engine that converts PDFs, skewed receipts, and complex tax invoices into structured, validated JSON payloads.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 pt-2 font-jbmono text-[11px] font-bold">
            <span className="px-3 py-1 rounded-full bg-white border border-black/10 text-black/60">
              ◆ 99.4% Extraction Precision
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-black/10 text-black/60">
              ◆ 0.8s Parse Speed
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-black/10 text-black/60">
              ◆ Spatial Coordinate Tokens
            </span>
            <span className="px-3 py-1 rounded-full bg-[#0b0b0f] text-[#d8ff3e]">
              ◆ Built-in Forgery Detection
            </span>
          </div>
        </div>

        {/* Interactive OCR & JSON Extraction Playground */}
        <div className="bg-white border border-black/10 rounded-[24px] p-6 sm:p-10 shadow-[0_24px_64px_-24px_rgba(11,11,15,0.22)] mb-24">
          <div className="flex items-center justify-between pb-6 border-b border-black/10">
            <div className="flex items-center gap-2 text-xs font-mono text-[#4d7c0f] font-bold">
              <Scan className="w-4 h-4" />
              <span>LIVE DOCUMENT EXTRACTION ENGINE</span>
            </div>
            <button
              onClick={triggerScan}
              disabled={isScanning}
              className="btn-shine inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0b0b0f] hover:bg-[#4d7c0f] hover:text-white text-[#d8ff3e] text-xs font-mono font-bold transition-all"
            >
              {isScanning ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-cyan-400" />
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
            <div className="lg:col-span-6 relative p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-4 font-mono text-xs overflow-hidden shadow-2xs">
              {isScanning && (
                <div className="absolute inset-0 bg-blue-500/10 border-b-2 border-blue-500 scanline-effect pointer-events-none" />
              )}

              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <div className="relative inline-block border border-blue-400 bg-blue-100/70 px-2 py-0.5 rounded text-blue-900 font-semibold">
                  Apex Logistics Ltd
                  <span className="absolute -top-3 -right-2 text-[9px] bg-blue-600 text-white px-1 rounded font-bold">VENDOR</span>
                </div>
                <div className="relative inline-block border border-purple-400 bg-purple-100/70 px-2 py-0.5 rounded text-purple-900 font-semibold">
                  TAX INVOICE: #INV-2026-8821
                  <span className="absolute -top-3 -right-2 text-[9px] bg-purple-600 text-white px-1 rounded font-bold">INV_NO</span>
                </div>
              </div>

              <div className="py-2 space-y-1.5 text-neutral-600 text-[11px]">
                <p>Buyer: Sentiently Enterprise Client | GSTIN: 27AABCA1234F1Z5</p>
                <p>PO Number: PO-99104 | Issue Date: 14 Oct 2026</p>
              </div>

              {/* Table with detected bounding boxes */}
              <div className="p-3 rounded-xl bg-white border border-gray-200 space-y-2">
                <div className="flex justify-between text-[10px] text-neutral-500 pb-1 border-b border-gray-100 font-bold">
                  <span>LINE ITEM</span>
                  <span>QTY</span>
                  <span>TOTAL</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="border border-emerald-400 bg-emerald-50 px-1.5 py-0.5 rounded text-emerald-800 font-medium">
                    Dedicated LPU Inference Cluster
                  </span>
                  <span className="text-neutral-700 font-bold">2</span>
                  <span className="border border-emerald-400 bg-emerald-50 px-1.5 py-0.5 rounded text-emerald-800 font-medium">
                    ₹48,000.00
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="border border-emerald-400 bg-emerald-50 px-1.5 py-0.5 rounded text-emerald-800 font-medium">
                    Streaming Telephony Gateway
                  </span>
                  <span className="text-neutral-700 font-bold">1</span>
                  <span className="border border-emerald-400 bg-emerald-50 px-1.5 py-0.5 rounded text-emerald-800 font-medium">
                    ₹15,500.00
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-gray-200 font-bold text-xs">
                <span className="text-neutral-700">TOTAL PAYABLE INCL. 18% GST:</span>
                <span className="border border-amber-400 bg-amber-50 px-2 py-1 rounded text-amber-900 text-sm">
                  ₹74,930.00
                </span>
              </div>
            </div>

            {/* Extracted JSON Payload */}
            <div className="lg:col-span-6 p-5 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-100 space-y-3 font-mono text-xs shadow-sm">
              <div className="flex items-center justify-between text-neutral-400 text-[11px] pb-2 border-b border-neutral-800">
                <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                  <Database className="w-3.5 h-3.5" />
                  <span>EXTRACTED STRUCTURED JSON</span>
                </span>
                <span className="text-emerald-400 font-semibold">99.82% CONFIDENCE</span>
              </div>

              <pre className="text-[11px] text-cyan-300 max-h-80 overflow-y-auto leading-relaxed bg-black/60 p-3 rounded-xl border border-neutral-800">
                {JSON.stringify(sampleJson, null, 2)}
              </pre>

              <div className="pt-2 flex items-center justify-between text-[11px] text-neutral-400">
                <span>Schema: Universal Invoice v3.1</span>
                <span className="text-blue-400 font-semibold">Webhook Ready &rarr;</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">Spatial Layout Graph</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              TextMitra doesn&apos;t just read text horizontally. It preserves physical cell alignments, multi-column tables, and nested legal hierarchies.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">Deterministic Verification</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Extracted line items must mathematically sum to invoice totals. If a single digit is distorted, the engine flags it for human-in-the-loop review.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">Zero-Shot Schemas</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Define your target schema in plain TypeScript or JSON. TextMitra extracts matching entities from unseen vendor layouts without custom re-training.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-[24px] bg-[#0b0b0f] text-[#f4f2ed] text-center max-w-3xl mx-auto space-y-6 shadow-[0_24px_64px_-24px_rgba(11,11,15,0.5)]">
          <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight">
            Automate your <span className="font-serif-it font-normal text-[#d8ff3e]">document workflows</span> today.
          </h3>
          <p className="text-xs sm:text-sm text-white/60 max-w-lg mx-auto">
            Integrate TextMitra into your ERP, accounting, or KYC pipelines with our drop-in REST APIs and webhook dispatchers.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/#contact"
              className="btn-shine px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#d8ff3e] text-black hover:bg-white transition-all"
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
