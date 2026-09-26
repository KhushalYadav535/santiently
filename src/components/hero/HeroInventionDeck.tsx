"use client";

import React, { useState, useEffect } from "react";
import {
  Mic,
  FileText,
  TrendingUp,
  Volume2,
  VolumeX,
  Play,
  Square,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Terminal as TerminalIcon,
  RefreshCw,
  Cpu,
  Layers,
  ChevronRight,
} from "lucide-react";
import { soundFX } from "@/utils/audio";
import { InventionMode } from "@/types/hero";

interface HeroInventionDeckProps {
  activeMode: InventionMode;
  onModeChange: (mode: InventionMode) => void;
}

export default function HeroInventionDeck({
  activeMode,
  onModeChange,
}: HeroInventionDeckProps) {
  // VoCred State
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState(
    "Ready to stream telephony audio. Click 'Stream Voice Synthesis' to test real-time speech."
  );
  const [bargeInStatus, setBargeInStatus] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<"HINDI_ENG" | "ENG" | "BENGALI">("HINDI_ENG");

  // TextMitra State
  const [activeBoxIndex, setActiveBoxIndex] = useState(0);
  const [isScanning, setIsScanning] = useState(false);

  // AlphaSentient State
  const [quantTick, setQuantTick] = useState(1402.84);
  const [isStressTesting, setIsStressTesting] = useState(false);
  const [pnlGain, setPnlGain] = useState("+1.42bps");

  // Handle Mode Change
  const handleSelectMode = (mode: InventionMode) => {
    soundFX.playModeShift();
    onModeChange(mode);
  };

  // VoCred Voice Stream Simulation
  const handlePlayVoice = () => {
    if (isPlayingVoice) {
      // Stop
      setIsPlayingVoice(false);
      soundFX.stopSpeaking();
      setVoiceTranscript("Stream halted.");
      return;
    }

    soundFX.playPulse();
    setIsPlayingVoice(true);
    setBargeInStatus(null);

    const phrases = {
      HINDI_ENG: "नमस्ते, Sentiently VoCred telephony engine active hai. Sub-280ms latency ke saath natural Indian conversational speech ready.",
      ENG: "Hello, this is Sentiently VoCred 2.0 streaming via direct SIP trunking with sub-45ms zero-tail barge-in capability.",
      BENGALI: "নমস্কার, Sentiently VoCred ভয়েস প্ল্যাটফর্ম সক্রিয় রয়েছে। রিয়েল-টাইম কথোপকথন শুরু করার জন্য প্রস্তুত।",
    };

    const textToSpeak = phrases[selectedLanguage];
    setVoiceTranscript(textToSpeak);

    soundFX.speakVoCredPhrase(
      textToSpeak,
      () => {
        setIsPlayingVoice(false);
      },
      selectedLanguage === "HINDI_ENG" ? "hi-IN" : "en-US"
    );
  };

  const handleSimulateBargeIn = () => {
    soundFX.playBargeIn();
    soundFX.stopSpeaking();
    setIsPlayingVoice(false);
    setBargeInStatus("Barge-in triggered at 41ms! Audio pipeline instantly halted without tail echo.");
    setVoiceTranscript("User interrupted speaker -> Immediate 41ms silence handshake.");
  };

  // TextMitra Bounding Boxes
  const boundingBoxes = [
    {
      id: "inv_no",
      label: "Invoice Number",
      val: "SENT-2026-992",
      conf: "99.8%",
      coords: "[x: 42, y: 38, w: 180, h: 26]",
    },
    {
      id: "gstin",
      label: "Buyer GSTIN",
      val: "27AABCS1429B1Z2",
      conf: "99.6%",
      coords: "[x: 42, y: 78, w: 210, h: 26]",
    },
    {
      id: "items",
      label: "Line Items (3 Entities)",
      val: "3 Items Extracted",
      conf: "99.2%",
      coords: "[x: 42, y: 118, w: 320, h: 54]",
    },
    {
      id: "total",
      label: "Total Taxable",
      val: "₹8,42,150.00",
      conf: "99.9%",
      coords: "[x: 180, y: 186, w: 180, h: 30]",
    },
  ];

  const handleScanNext = () => {
    soundFX.playDataBlip();
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setActiveBoxIndex((prev) => (prev + 1) % boundingBoxes.length);
      soundFX.playSuccess();
    }, 700);
  };

  // AlphaSentient Market Stress Test
  const handleStressTest = () => {
    soundFX.playQuantumSurge();
    setIsStressTesting(true);
    setQuantTick((prev) => Number((prev + (Math.random() * 4 - 2)).toFixed(2)));
    setPnlGain(`+${(Math.random() * 1.5 + 1.2).toFixed(2)}bps`);

    setTimeout(() => {
      setIsStressTesting(false);
      soundFX.playSuccess();
    }, 900);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 mb-4">
      {/* Console Frame */}
      <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden transition-all duration-300 hover:border-blue-300/80">
        {/* Top Hardware Bezel / Tab Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-gray-100 bg-gray-50/70">
          {/* Status Indicator */}
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-neutral-800">
              SENTIENT KERNEL v2.8
            </span>
            <span className="text-gray-300 hidden sm:inline">&bull;</span>
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 hidden sm:inline">
              OPERATIONAL
            </span>
          </div>

          {/* Interactive Mode Pills */}
          <div className="flex items-center gap-1.5 bg-gray-200/60 p-1 rounded-2xl">
            <button
              onClick={() => handleSelectMode("ACOUSTIC")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono font-medium transition-all ${
                activeMode === "ACOUSTIC"
                  ? "bg-white text-blue-700 shadow-xs border border-blue-200"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              <Mic className="w-3.5 h-3.5" />
              <span>VoCred 2.0</span>
            </button>

            <button
              onClick={() => handleSelectMode("SPATIAL")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono font-medium transition-all ${
                activeMode === "SPATIAL"
                  ? "bg-white text-cyan-800 shadow-xs border border-cyan-200"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>TextMitra</span>
            </button>

            <button
              onClick={() => handleSelectMode("QUANTUM")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono font-medium transition-all ${
                activeMode === "QUANTUM"
                  ? "bg-white text-amber-800 shadow-xs border border-amber-200"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>AlphaSentient</span>
            </button>
          </div>
        </div>

        {/* Console Stage Body */}
        <div className="p-5 sm:p-7 text-left">
          {/* TAB 1: VOCRED 2.0 (ACOUSTIC) */}
          {activeMode === "ACOUSTIC" && (
            <div className="space-y-5 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">
                      ACOUSTIC NEURAL PROSODY // STREAMING TELEPHONY
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                      SUB-280MS
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 mt-0.5">
                    Live Conversational Voice Telephony Kernel
                  </h3>
                </div>

                {/* Dialect Switcher */}
                <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl text-xs font-mono">
                  <button
                    onClick={() => {
                      setSelectedLanguage("HINDI_ENG");
                      soundFX.playHover();
                    }}
                    className={`px-2.5 py-1 rounded-lg transition-colors ${
                      selectedLanguage === "HINDI_ENG"
                        ? "bg-white font-bold text-blue-700 shadow-2xs"
                        : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    Hindi-English
                  </button>
                  <button
                    onClick={() => {
                      setSelectedLanguage("ENG");
                      soundFX.playHover();
                    }}
                    className={`px-2.5 py-1 rounded-lg transition-colors ${
                      selectedLanguage === "ENG"
                        ? "bg-white font-bold text-blue-700 shadow-2xs"
                        : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    Global English
                  </button>
                  <button
                    onClick={() => {
                      setSelectedLanguage("BENGALI");
                      soundFX.playHover();
                    }}
                    className={`px-2.5 py-1 rounded-lg transition-colors ${
                      selectedLanguage === "BENGALI"
                        ? "bg-white font-bold text-blue-700 shadow-2xs"
                        : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    Bengali Dialect
                  </button>
                </div>
              </div>

              {/* Dynamic 28-Band Audio Frequency Equalizer */}
              <div className="p-4 rounded-2xl bg-neutral-950 text-white flex flex-col justify-between h-32 relative overflow-hidden shadow-inner">
                {/* Visualizer header */}
                <div className="flex items-center justify-between text-[11px] font-mono opacity-80 z-10">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${isPlayingVoice ? "bg-emerald-400 animate-ping" : "bg-neutral-600"}`} />
                    <span>AUDIO CHANNEL: SIP/WEBRTC G.711</span>
                  </div>
                  <span className="text-blue-400 font-bold">LATENCY: 38ms</span>
                </div>

                {/* Animated Frequency Bars */}
                <div className="flex items-end justify-between gap-1 sm:gap-1.5 h-16 w-full z-10 pt-2">
                  {[28, 45, 70, 92, 60, 40, 85, 95, 78, 55, 68, 88, 72, 50, 65, 80, 96, 74, 52, 60, 84, 90, 70, 48, 62, 82, 58, 42].map((height, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-t-sm transition-all duration-100 ${
                        isPlayingVoice
                          ? "bg-gradient-to-t from-blue-600 via-indigo-400 to-cyan-300"
                          : "bg-neutral-800"
                      }`}
                      style={{
                        height: isPlayingVoice ? `${Math.max(12, (height * (0.6 + Math.random() * 0.6)))}%` : "16%",
                        transitionDelay: `${i * 12}ms`,
                      }}
                    />
                  ))}
                </div>

                {/* Sub-waveform background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-indigo-900/10 to-transparent pointer-events-none" />
              </div>

              {/* Live Transcript Stream & Controls */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="md:col-span-2 p-3.5 rounded-2xl bg-gray-50 border border-gray-200/90 font-mono text-xs flex flex-col justify-center">
                  <div className="text-[10px] text-neutral-600 uppercase font-semibold mb-1 flex items-center justify-between">
                    <span>LIVE DECODED TRANSCRIPT</span>
                    {isPlayingVoice && <span className="text-blue-700 animate-pulse">STREAMING...</span>}
                  </div>
                  <p className="text-neutral-900 font-medium leading-relaxed italic">
                    &ldquo;{voiceTranscript}&rdquo;
                  </p>
                  {bargeInStatus && (
                    <p className="text-[11px] text-amber-700 font-bold mt-1.5 flex items-center gap-1">
                      <Zap className="w-3 h-3 text-amber-600" />
                      <span>{bargeInStatus}</span>
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                  <button
                    onClick={handlePlayVoice}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      isPlayingVoice
                        ? "bg-rose-600 hover:bg-rose-700 text-white shadow-sm"
                        : "bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                    }`}
                  >
                    {isPlayingVoice ? (
                      <>
                        <Square className="w-3.5 h-3.5 fill-current" />
                        <span>HALT AUDIO</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>STREAM SYNTHESIS</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleSimulateBargeIn}
                    disabled={!isPlayingVoice}
                    className={`w-full py-2 px-3 rounded-xl text-xs font-mono transition-all flex items-center justify-center gap-1.5 border ${
                      isPlayingVoice
                        ? "bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100 cursor-pointer"
                        : "bg-gray-100 text-neutral-400 border-gray-200 cursor-not-allowed"
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-600" />
                    <span>TEST 45ms BARGE-IN</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TEXTMITRA (SPATIAL OCR) */}
          {activeMode === "SPATIAL" && (
            <div className="space-y-5 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-cyan-800 uppercase tracking-wider">
                      SPATIAL COMPUTER VISION // MILLIMETER COORDINATES
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200 font-semibold">
                      99.4% PRECISION
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 mt-0.5">
                    Spatial Coordinate Vision & Document Ledger Engine
                  </h3>
                </div>

                <button
                  onClick={handleScanNext}
                  disabled={isScanning}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-cyan-800 border border-cyan-200 text-xs font-mono font-bold transition-all self-start sm:self-auto"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? "animate-spin text-cyan-600" : ""}`} />
                  <span>{isScanning ? "RE-SCANNING..." : "SCAN NEXT REGION"}</span>
                </button>
              </div>

              {/* Document Scanning Viewport */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Visual Document Layout */}
                <div className="relative p-4 rounded-2xl bg-gray-50 border border-gray-200/90 font-mono text-xs overflow-hidden min-h-[190px] flex flex-col justify-between">
                  {/* Laser Beam scan effect */}
                  {isScanning && (
                    <div className="absolute inset-x-0 h-1 bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.9)] animate-scan-line z-20" />
                  )}

                  <div className="text-[10px] font-bold text-neutral-600 uppercase flex items-center justify-between">
                    <span>DOCUMENT: TAX_INVOICE_Q3.PDF</span>
                    <span className="text-cyan-700 font-mono">DPI: 300 // RGB</span>
                  </div>

                  {/* Interactive Bounding Boxes Overlay */}
                  <div className="space-y-2 mt-2">
                    {boundingBoxes.map((box, idx) => {
                      const isSelected = activeBoxIndex === idx;
                      return (
                        <div
                          key={box.id}
                          onClick={() => {
                            setActiveBoxIndex(idx);
                            soundFX.playDataBlip();
                          }}
                          className={`p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-between text-xs ${
                            isSelected
                              ? "bg-cyan-100/70 border-cyan-500 text-cyan-950 font-bold shadow-2xs"
                              : "bg-white/80 border-gray-200 text-neutral-700 hover:border-cyan-300"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-sm ${isSelected ? "bg-cyan-600" : "bg-gray-300"}`} />
                            <span>{box.label}:</span>
                            <span className="font-semibold">{box.val}</span>
                          </div>
                          <span className="text-[10px] font-mono text-cyan-700 bg-cyan-50 px-1.5 py-0.5 rounded">
                            {box.conf}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Live Normalized JSON Tensor Output */}
                <div className="p-4 rounded-2xl bg-neutral-950 text-white font-mono text-xs flex flex-col justify-between overflow-x-auto shadow-inner">
                  <div className="flex items-center justify-between text-[10px] text-neutral-400 mb-2">
                    <span>NORMALIZED JSON EXTRACT</span>
                    <span className="text-emerald-400">SCHEMA: VALID</span>
                  </div>

                  <pre className="text-[11px] leading-relaxed text-cyan-300 overflow-x-auto">
{`{
  "entity": "${boundingBoxes[activeBoxIndex].id}",
  "value": "${boundingBoxes[activeBoxIndex].val}",
  "confidence": ${boundingBoxes[activeBoxIndex].conf.replace("%", "") / 100},
  "coordinates": "${boundingBoxes[activeBoxIndex].coords}",
  "spatial_topology": "DETERMINISTIC_GRID",
  "ocr_engine": "TextMitra_v2.4"
}`}
                  </pre>

                  <div className="text-[10px] text-neutral-500 mt-2 border-t border-neutral-800 pt-2 flex items-center justify-between">
                    <span>Multilingual Devanagari + Latin</span>
                    <span>Zero Hallucination</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ALPHASENTIENT (QUANTUM) */}
          {activeMode === "QUANTUM" && (
            <div className="space-y-5 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">
                      PROBABILISTIC REASONING // 42MS EDGE LPUS
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-semibold">
                      CO-LOCATED LPUs
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 mt-0.5">
                    Autonomous High-Frequency Market Inference Engine
                  </h3>
                </div>

                <button
                  onClick={handleStressTest}
                  disabled={isStressTesting}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-mono font-bold transition-all self-start sm:self-auto shadow-xs"
                >
                  <Zap className={`w-3.5 h-3.5 ${isStressTesting ? "animate-bounce" : ""}`} />
                  <span>{isStressTesting ? "SIMULATING SHOCK..." : "INJECT MARKET SHOCK"}</span>
                </button>
              </div>

              {/* Orderbook Depth & Real-time Agent Log */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Live Microsecond Ticker & Depth */}
                <div className="p-4 rounded-2xl bg-neutral-950 text-white font-mono text-xs flex flex-col justify-between shadow-inner">
                  <div className="flex items-center justify-between text-[10px] text-neutral-400 mb-2">
                    <span>NSE_NIFTY50_FUTURES</span>
                    <span className="text-emerald-400 font-bold">EXECUTION: 42ms</span>
                  </div>

                  <div className="my-2">
                    <div className="text-2xl font-bold text-white tracking-tight flex items-baseline gap-2">
                      <span>₹{quantTick.toFixed(2)}</span>
                      <span className="text-xs text-emerald-400 font-mono font-semibold">{pnlGain}</span>
                    </div>
                    <p className="text-[10px] text-neutral-400 mt-0.5">Edge FPGA Order Routing &bull; Zero Slippage</p>
                  </div>

                  {/* Micro Orderbook Depth Visualization */}
                  <div className="space-y-1.5 pt-2 border-t border-neutral-800">
                    <div className="flex items-center justify-between text-[10px] text-neutral-500">
                      <span>DEPTH</span>
                      <span>SPREAD: 0.05 (1.2bps)</span>
                    </div>
                    <div className="flex items-center gap-1 h-3">
                      <div className="h-full bg-emerald-500/80 rounded-l" style={{ width: "65%" }} />
                      <div className="h-full bg-rose-500/80 rounded-r" style={{ width: "35%" }} />
                    </div>
                  </div>
                </div>

                {/* Autonomous Agent Thought Stream */}
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/90 font-mono text-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[10px] text-neutral-600 uppercase font-semibold mb-2">
                    <span>AGENT REASONING KERNEL</span>
                    <span className="text-amber-800 font-bold">STATE: STEADY</span>
                  </div>

                  <div className="space-y-1.5 text-[11px] text-neutral-800">
                    <p className="text-neutral-500">
                      &gt; [14:02:45.020] Ingestion tick from NSE L2 feed.
                    </p>
                    <p className="text-blue-700 font-medium">
                      &gt; [14:02:45.062] Liquidity imbalance detected at Ask level 3.
                    </p>
                    <p className="text-emerald-700 font-medium">
                      &gt; [14:02:45.104] Automated statistical arb delta filled: {pnlGain}.
                    </p>
                  </div>

                  <div className="text-[10px] text-neutral-600 mt-3 pt-2 border-t border-gray-200 flex items-center justify-between">
                    <span>Sharpe: 3.84</span>
                    <span>Max Drawdown: -0.42%</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Hardware Bezel / Sandbox Shortcut */}
        <div className="px-5 sm:px-7 py-3 border-t border-gray-100 bg-gray-50/60 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-3 text-neutral-600">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-blue-600" />
              <span>LPU Memory: 16.4 GB</span>
            </span>
            <span className="text-gray-300">&bull;</span>
            <span className="text-emerald-700 font-semibold">Zero Hallucination Contract</span>
          </div>

          <a
            href="#playground"
            onClick={() => soundFX.playClick()}
            className="text-blue-700 hover:text-blue-900 font-bold flex items-center gap-1 group"
          >
            <span>Launch Full Interactive Sandbox</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
