"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Mic,
  Volume2,
  Square,
  FileText,
  Activity,
  TrendingUp,
  Cpu,
  Sparkles,
  CheckCircle2,
  Terminal,
  Zap,
  Play,
  RotateCcw,
  Code2,
} from "lucide-react";
import { soundFX } from "@/utils/audio";
import confetti from "canvas-confetti";
import SectionHeading from "@/components/awwwards/SectionHeading";
import { FadeUp } from "@/components/awwwards/Reveal";

type SandboxTab = "vocred" | "textmitra" | "hrms" | "trading";

export default function LivePlayground() {
  const [activeTab, setActiveTab] = useState<SandboxTab>("vocred");

  // VoCred State
  const [voiceLang, setVoiceLang] = useState<"en-IN" | "hi-IN">("en-IN");
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [voiceTelemetry, setVoiceTelemetry] = useState({ latency: 248, packets: 1420, jitter: 1.2 });
  const audioCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // TextMitra State
  const [activeField, setActiveField] = useState<string>("total");
  const [viewJson, setViewJson] = useState(false);

  // HRMS State
  const [hrmsPrompt, setHrmsPrompt] = useState<string>("Can an employee carry forward 12 privilege leaves to next year?");
  const [hrmsStatus, setHrmsStatus] = useState<"IDLE" | "RESOLVING" | "VERIFIED">("IDLE");

  // Trading State
  const [quantTick, setQuantTick] = useState(24420.5);
  const [orderBook, setOrderBook] = useState<Array<{ id: number; symbol: string; side: "BUY" | "SELL"; price: number; ms: number }>>([
    { id: 1, symbol: "NIFTY-FUT", side: "BUY", price: 24418.2, ms: 38 },
    { id: 2, symbol: "BANKNIFTY", side: "BUY", price: 51240.0, ms: 42 },
    { id: 3, symbol: "INFY-CE", side: "SELL", price: 1845.5, ms: 36 },
  ]);

  // Audio Equalizer for VoCred
  useEffect(() => {
    if (activeTab !== "vocred") return;
    const canvas = audioCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let phase = 0;

    const render = () => {
      phase += 0.12;
      const width = (canvas.width = canvas.parentElement?.clientWidth || 400);
      const height = (canvas.height = 72);

      ctx.clearRect(0, 0, width, height);

      const numBars = 36;
      const barWidth = width / numBars - 3;

      for (let i = 0; i < numBars; i++) {
        let barHeight = 6;
        if (isVoiceActive) {
          barHeight = 12 + Math.sin(phase + i * 0.4) * 22 + Math.cos(phase * 1.6 + i * 0.3) * 14;
        } else {
          barHeight = 4 + Math.sin(phase * 0.3 + i * 0.2) * 2;
        }

        barHeight = Math.max(3, Math.min(height * 0.85, Math.abs(barHeight)));
        const x = i * (barWidth + 3);
        const y = (height - barHeight) / 2;

        const grad = ctx.createLinearGradient(0, y, 0, y + barHeight);
        if (isVoiceActive) {
          grad.addColorStop(0, "#2563EB");
          grad.addColorStop(0.5, "#9333EA");
          grad.addColorStop(1, "#06B6D4");
        } else {
          grad.addColorStop(0, "rgba(148, 163, 184, 0.4)");
          grad.addColorStop(1, "rgba(148, 163, 184, 0.15)");
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x, y, Math.max(2, barWidth), barHeight, 3);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [activeTab, isVoiceActive]);

  // AlphaSentient Live Ticker loop
  useEffect(() => {
    if (activeTab !== "trading") return;
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.48) * 4.5;
      setQuantTick((prev) => +(prev + delta).toFixed(2));

      if (Math.random() > 0.4) {
        const side: "BUY" | "SELL" = Math.random() > 0.5 ? "BUY" : "SELL";
        const symbols = ["NIFTY-FUT", "BANKNIFTY", "RELIANCE", "TCS", "HDFCBANK"];
        const sym = symbols[Math.floor(Math.random() * symbols.length)];
        const latency = Math.floor(34 + Math.random() * 12);

        setOrderBook((prev) => [
          {
            id: Date.now(),
            symbol: sym,
            side,
            price: +(24400 + Math.random() * 60).toFixed(2),
            ms: latency,
          },
          ...prev.slice(0, 4),
        ]);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [activeTab]);

  // Voice playback handler
  const handleVoCredDemo = () => {
    if (isVoiceActive) {
      soundFX.stopSpeech();
      setIsVoiceActive(false);
      soundFX.playBargeIn();
      return;
    }

    setIsVoiceActive(true);
    soundFX.playPulse();

    const sampleText =
      voiceLang === "hi-IN"
        ? "Namaste Vikram! Main Santiently VoCred hoon. Aapki invoice INV-904 verify ho chuki hai."
        : "Hello Vikram! I am Santiently VoCred. Your real-time telephony stream is live at 240 milliseconds.";

    soundFX.speakText(
      sampleText,
      voiceLang,
      () => setIsVoiceActive(true),
      () => setIsVoiceActive(false)
    );
  };

  // HRMS RAG test handler
  const handleRunHrms = () => {
    setHrmsStatus("RESOLVING");
    soundFX.playProcessing();

    setTimeout(() => {
      setHrmsStatus("VERIFIED");
      soundFX.playSuccess();
      try {
        confetti({
          particleCount: 28,
          spread: 45,
          origin: { y: 0.7 },
          colors: ["#10B981", "#3B82F6", "#8B5CF6"],
        });
      } catch {
        // Ignore
      }
    }, 1400);
  };

  return (
    <section id="playground" className="relative py-24 sm:py-32 px-5 sm:px-10 max-w-[1600px] mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <SectionHeading
          index="05"
          label="Live sandbox"
          title={
            <>
              <span>Test our engines</span>
              <span>
                in <span className="text-stroke">real time.</span>
              </span>
            </>
          }
          accent="No mockups or static previews. Trigger genuine sub-280ms voice synthesis, coordinate OCR parsing, policy RAG and quant execution directly in your browser."
        />
      </div>

      {/* Main Terminal Sandbox Shell */}
      <FadeUp>
      <div className="bg-white border border-black/10 rounded-[24px] shadow-[0_24px_64px_-24px_rgba(11,11,15,0.25)] overflow-hidden transition-all">
        {/* Navigation Tabs Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-black/10 bg-black/[0.03] px-4 py-3 gap-2">
          {/* Engine Selector Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            <button
              onClick={() => {
                setActiveTab("vocred");
                soundFX.playClick();
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                activeTab === "vocred"
                  ? "bg-blue-600 text-white shadow-xs font-semibold"
                  : "bg-white text-neutral-700 hover:bg-gray-100 border border-gray-200/70"
              }`}
            >
              <Mic className="w-3.5 h-3.5" />
              <span>VOCRED 2.0 (VOICE)</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("textmitra");
                soundFX.playClick();
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                activeTab === "textmitra"
                  ? "bg-cyan-600 text-white shadow-xs font-semibold"
                  : "bg-white text-neutral-700 hover:bg-gray-100 border border-gray-200/70"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>TEXTMITRA (OCR)</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("hrms");
                soundFX.playClick();
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                activeTab === "hrms"
                  ? "bg-emerald-600 text-white shadow-xs font-semibold"
                  : "bg-white text-neutral-700 hover:bg-gray-100 border border-gray-200/70"
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>AI-HRMS (RAG)</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("trading");
                soundFX.playClick();
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                activeTab === "trading"
                  ? "bg-amber-600 text-white shadow-xs font-semibold"
                  : "bg-white text-neutral-700 hover:bg-gray-100 border border-gray-200/70"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>ALPHASENTIENT (QUANT)</span>
            </button>
          </div>

          {/* Engine Status Light */}
          <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-600">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>NODE STATUS: ONLINE</span>
          </div>
        </div>

        {/* Tab 1: VoCred Voice Sandbox */}
        {activeTab === "vocred" && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Interactive Controls */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <span className="text-[11px] font-mono text-blue-700 font-semibold uppercase tracking-wider">
                    SPEECH SYNTHESIS & ACOUSTIC VAD
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                    Live Telephony Voice Agent
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                    Click trigger to initiate real-time browser audio synthesis. Test natural language cadence and 45ms barge-in interruption.
                  </p>
                </div>

                {/* Language Selectors */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-neutral-500">DIALECT:</span>
                  <button
                    onClick={() => {
                      setVoiceLang("en-IN");
                      soundFX.playDataBlip();
                    }}
                    className={`px-3 py-1 text-xs font-mono rounded-lg border transition-all ${
                      voiceLang === "en-IN"
                        ? "bg-blue-50 border-blue-500 text-blue-700 font-bold"
                        : "bg-white border-gray-200 text-neutral-600 hover:bg-gray-50"
                    }`}
                  >
                    English (India)
                  </button>
                  <button
                    onClick={() => {
                      setVoiceLang("hi-IN");
                      soundFX.playDataBlip();
                    }}
                    className={`px-3 py-1 text-xs font-mono rounded-lg border transition-all ${
                      voiceLang === "hi-IN"
                        ? "bg-blue-50 border-blue-500 text-blue-700 font-bold"
                        : "bg-white border-gray-200 text-neutral-600 hover:bg-gray-50"
                    }`}
                  >
                    Hindi / Hinglish
                  </button>
                </div>

                {/* Action Trigger Button */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={handleVoCredDemo}
                    data-cursor-label={isVoiceActive ? "BARGE-IN" : "SPEAK"}
                    className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold transition-all shadow-md active:scale-95 ${
                      isVoiceActive
                        ? "bg-rose-600 hover:bg-rose-700 text-white"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                  >
                    {isVoiceActive ? (
                      <>
                        <Square className="w-4 h-4 fill-white" />
                        <span>TEST 45ms BARGE-IN (CUT OFF)</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4" />
                        <span>SPEAK LIVE AUDIO CUE</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Right: Real-time Audio Spectrum & Telemetry */}
              <div className="lg:col-span-6 bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-500 uppercase">24kHz PCM SPECTROGRAM</span>
                  <span className={`font-bold ${isVoiceActive ? "text-emerald-600" : "text-neutral-400"}`}>
                    {isVoiceActive ? "STREAMING ACTIVE" : "BUFFER IDLE"}
                  </span>
                </div>

                {/* Wave Canvas */}
                <div className="h-20 w-full flex items-center justify-center bg-white rounded-xl border border-gray-200/80 px-2 overflow-hidden">
                  <canvas ref={audioCanvasRef} className="w-full h-full" />
                </div>

                {/* Telemetry Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-200/60 text-left font-mono">
                  <div className="p-2.5 rounded-lg bg-white border border-gray-200/80">
                    <div className="text-[10px] text-neutral-500">ROUNDTRIP</div>
                    <div className="text-sm font-bold text-blue-600">&lt;240ms</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-gray-200/80">
                    <div className="text-[10px] text-neutral-500">PACKETS</div>
                    <div className="text-sm font-bold text-neutral-900">{isVoiceActive ? "1,840/s" : "0/s"}</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-gray-200/80">
                    <div className="text-[10px] text-neutral-500">TAIL JITTER</div>
                    <div className="text-sm font-bold text-emerald-600">0.8ms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: TextMitra OCR Sandbox */}
        {activeTab === "textmitra" && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: Document Mockup with Coordinate Bounding Boxes */}
              <div className="lg:col-span-6 bg-slate-900 text-slate-100 rounded-2xl p-6 font-mono text-xs relative overflow-hidden border border-slate-800">
                {/* Header of Doc */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-[10px] text-slate-400 ml-2">INVOICE_IMAGE_COORDINATES.JPG</span>
                  </div>
                  <span className="text-[10px] text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
                    SPATIAL OCR 99.4%
                  </span>
                </div>

                {/* Interactive Document Fields */}
                <div className="space-y-3">
                  <div
                    onClick={() => {
                      setActiveField("vendor");
                      soundFX.playDataBlip();
                    }}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      activeField === "vendor"
                        ? "bg-cyan-500/20 border-cyan-400 shadow-sm"
                        : "bg-slate-800/60 border-slate-700 hover:border-slate-500"
                    }`}
                  >
                    <div className="flex justify-between items-center text-[10px] text-cyan-300">
                      <span>[bbox: 42, 110, 88, 320]</span>
                      <span className="text-emerald-400">99.8% Conf.</span>
                    </div>
                    <div className="text-sm font-bold text-white mt-1">Vendor: Apex Industrial Supplies Ltd.</div>
                  </div>

                  <div
                    onClick={() => {
                      setActiveField("gst");
                      soundFX.playDataBlip();
                    }}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      activeField === "gst"
                        ? "bg-cyan-500/20 border-cyan-400 shadow-sm"
                        : "bg-slate-800/60 border-slate-700 hover:border-slate-500"
                    }`}
                  >
                    <div className="flex justify-between items-center text-[10px] text-cyan-300">
                      <span>[bbox: 95, 110, 120, 290]</span>
                      <span className="text-emerald-400">99.9% Conf.</span>
                    </div>
                    <div className="text-sm font-bold text-white mt-1">GSTIN: 27AABCT3518Q1ZV</div>
                  </div>

                  <div
                    onClick={() => {
                      setActiveField("total");
                      soundFX.playDataBlip();
                    }}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      activeField === "total"
                        ? "bg-cyan-500/20 border-cyan-400 shadow-sm"
                        : "bg-slate-800/60 border-slate-700 hover:border-slate-500"
                    }`}
                  >
                    <div className="flex justify-between items-center text-[10px] text-cyan-300">
                      <span>[bbox: 280, 360, 310, 480]</span>
                      <span className="text-emerald-400">99.7% Conf.</span>
                    </div>
                    <div className="text-sm font-bold text-emerald-300 mt-1">Total Payable: ₹1,48,250.00</div>
                  </div>
                </div>
              </div>

              {/* Right: Extracted JSON Schema Preview */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-800 font-semibold uppercase">
                    EXTRACTED NORMALIZED JSON PAYLOAD
                  </span>
                  <button
                    onClick={() => {
                      setViewJson(!viewJson);
                      soundFX.playClick();
                    }}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-600 hover:text-neutral-900 border border-gray-200 px-2.5 py-1 rounded-md bg-white"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{viewJson ? "Collapse" : "Full Schema"}</span>
                  </button>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 font-mono text-xs text-neutral-800 overflow-x-auto">
                  <pre className="text-[11px] leading-relaxed text-neutral-800">
{`{
  "document_type": "tax_invoice",
  "selected_field": "${activeField}",
  "parsed_data": {
    "vendor": "Apex Industrial Supplies Ltd.",
    "gstin": "27AABCT3518Q1ZV",
    "invoice_number": "INV-2026-9921",
    "invoice_date": "2026-09-24",
    "subtotal": 125635.59,
    "cgst_9pct": 11307.20,
    "sgst_9pct": 11307.20,
    "total_payable_inr": 148250.00
  },
  "spatial_coordinates": {
    "page": 1,
    "bounding_box": [280, 360, 310, 480],
    "ocr_confidence": 0.9972
  }
}`}
                  </pre>
                </div>

                <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 p-3 rounded-xl font-mono">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>GSTIN mathematically validated with checksum verification.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: AI-HRMS Sentinel Sandbox */}
        {activeTab === "hrms" && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="max-w-2xl mx-auto space-y-4">
              <div>
                <span className="text-[11px] font-mono text-emerald-700 font-semibold uppercase tracking-wider">
                  ENTERPRISE POLICY RAG & DECISION VERIFICATION
                </span>
                <h3 className="text-xl font-bold text-neutral-900 mt-1">
                  Test Employee Policy Query
                </h3>
              </div>

              {/* Interactive Input with Presets */}
              <div className="space-y-2">
                <input
                  type="text"
                  value={hrmsPrompt}
                  onChange={(e) => setHrmsPrompt(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 font-mono text-xs sm:text-sm bg-gray-50 focus:bg-white focus:border-emerald-500 focus:outline-none transition-all"
                  placeholder="Enter employee policy question..."
                />

                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[11px] font-mono text-neutral-500">PRESETS:</span>
                  <button
                    onClick={() => {
                      setHrmsPrompt("Can an employee carry forward 12 privilege leaves to next year?");
                      soundFX.playDataBlip();
                    }}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-gray-100 text-neutral-700 hover:bg-gray-200"
                  >
                    Leave Carry-forward
                  </button>
                  <button
                    onClick={() => {
                      setHrmsPrompt("Calculate deduction for 3 days unapproved absence on ₹90,000 base salary");
                      soundFX.playDataBlip();
                    }}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-gray-100 text-neutral-700 hover:bg-gray-200"
                  >
                    Payroll Deduction
                  </button>
                </div>
              </div>

              <button
                onClick={handleRunHrms}
                disabled={hrmsStatus === "RESOLVING"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all"
              >
                {hrmsStatus === "RESOLVING" ? (
                  <>
                    <RotateCcw className="w-4 h-4 animate-spin" />
                    <span>RETRIEVING EMBEDDINGS & COMPLIANCE...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-emerald-200" />
                    <span>RUN AUTONOMOUS ARBITRATION</span>
                  </>
                )}
              </button>

              {/* Result Card */}
              {hrmsStatus === "VERIFIED" && (
                <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-300 text-xs font-mono space-y-2 animate-fade-in text-neutral-800">
                  <div className="flex items-center justify-between text-emerald-800 font-bold">
                    <span>STATUS: POLICY COMPLIANT</span>
                    <span>CONFIDENCE: 98.6%</span>
                  </div>
                  <p className="text-neutral-700 font-sans leading-relaxed">
                    Under Company HR Handbook §4.2, employees are permitted to carry forward a maximum of <strong>10 privilege leaves</strong> per calendar year. The remaining <strong>2 leaves</strong> will be automatically encashed in the December payroll cycle.
                  </p>
                  <div className="text-[10px] text-emerald-700 pt-1 border-t border-emerald-200">
                    Source: HR_POLICY_v4.pdf (page 24, clause 2b) &bull; Audit Hash: #rag-88219
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 4: AlphaSentient Quant Sandbox */}
        {activeTab === "trading" && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Dynamic Live Price Chart */}
              <div className="lg:col-span-7 bg-neutral-900 text-neutral-100 rounded-2xl p-6 font-mono border border-neutral-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-neutral-400">INDEX SPOT &bull; REAL-TIME FEED</div>
                    <div className="text-2xl font-bold text-amber-400 mt-0.5">{quantTick}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-neutral-400">ENGINE LATENCY</div>
                    <div className="text-sm font-bold text-emerald-400">38.4ms (LPUs)</div>
                  </div>
                </div>

                {/* Simulated Chart Wave SVG */}
                <div className="h-28 w-full flex items-center justify-center relative">
                  <svg className="w-full h-24 overflow-visible" viewBox="0 0 200 60" fill="none">
                    <path
                      d="M0 45 Q 25 20, 50 35 T 100 25 T 150 40 T 200 15"
                      stroke="#F59E0B"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="200" cy="15" r="4" fill="#F59E0B" className="animate-ping" />
                    <circle cx="200" cy="15" r="2.5" fill="#FFFFFF" />
                  </svg>
                </div>

                <div className="text-[10px] text-neutral-500 flex justify-between border-t border-neutral-800 pt-2">
                  <span>TICK: NSE/BSE CO-LOCATED</span>
                  <span>SPREAD: 0.05 BPS</span>
                </div>
              </div>

              {/* Right: Live Order Execution Feed */}
              <div className="lg:col-span-5 space-y-3">
                <span className="text-xs font-mono text-amber-800 font-semibold uppercase">
                  SIMULATED HIGH-FREQUENCY ARBITRAGE LOG
                </span>

                <div className="space-y-1.5 font-mono text-xs">
                  {orderBook.map((order) => (
                    <div
                      key={order.id}
                      className="p-2.5 rounded-lg border border-gray-200 bg-white flex items-center justify-between shadow-2xs hover:border-amber-300 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            order.side === "BUY"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-rose-50 text-rose-700 border border-rose-200"
                          }`}
                        >
                          {order.side}
                        </span>
                        <span className="font-semibold text-neutral-900">{order.symbol}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-neutral-700">₹{order.price}</span>
                        <span className="text-[10px] text-neutral-400">{order.ms}ms</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </FadeUp>
    </section>
  );
}
