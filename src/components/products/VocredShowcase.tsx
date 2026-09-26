"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { PhoneCall, ArrowRight, CheckCircle2, Cpu, RefreshCw, Sparkles, Mic, Volume2, Square } from "lucide-react";
import { soundFX } from "@/utils/audio";
import Tilt3DCard from "@/components/ui/Tilt3DCard";

const DEMO_CONVERSATIONS = [
  {
    topic: "Payment & KYC Verification",
    lang: "English (India)",
    langCode: "en-IN",
    userAudioText: "Hi VoCred, can you confirm if my invoice INV-904 was cleared today?",
    agentThought: "Identified customer Intent: invoice_status_lookup. Triggering internal accounting tool.",
    agentResponse: "Hello Vikram! Yes, invoice INV-904 for ₹42,500 was successfully settled at 11:24 AM via NEFT. I've sent the payment receipt to your registered email.",
    actionExecuted: "accounting_api.query_invoice(id='INV-904') -> Settled"
  },
  {
    topic: "Enterprise Appointment Booking",
    lang: "Hindi / Hinglish",
    langCode: "hi-IN",
    userAudioText: "Mujhe kal shaam 4 baje sales consultation schedule karni hai.",
    agentThought: "Language detected: Hinglish. Intent: schedule_calendar_slot. Checking slot availability for tomorrow 16:00 IST.",
    agentResponse: "Ji Vikram, kal shaam 4 baje ka slot bilkul available hai. Maine aapki 30-minute executive consultation lock kar di hai aur Google Calendar invite bhej diya hai.",
    actionExecuted: "calendar_engine.create_event(time='Tomorrow 16:00', duration=30) -> Confirmed"
  },
  {
    topic: "Telephony Barge-in Handling",
    lang: "English",
    langCode: "en-US",
    userAudioText: "Wait, before that, does VoCred support on-premise telephony deployment?",
    agentThought: "Caller interrupted previous response. Executing instant barge-in cut-off in 45ms. Synthesizing new answer.",
    agentResponse: "Yes, absolutely. VoCred operates both as a cloud cluster and fully air-gapped on-premise with SIP trunking and Asterisk compatibility.",
    actionExecuted: "speech_interrupter.barge_in_active() -> 0ms Audio Tail dropped"
  }
];

export default function VocredShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [agentState, setAgentState] = useState<"IDLE" | "LISTENING" | "REASONING" | "SPEAKING">("IDLE");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const currentScenario = DEMO_CONVERSATIONS[activeStep];

  // Stop any playing speech if user unmounts or changes scenario
  useEffect(() => {
    return () => {
      soundFX.stopSpeech();
    };
  }, []);

  // Animated Waveform Canvas for Light Theme
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let phase = 0;

    const renderWave = () => {
      phase += 0.08;
      const width = (canvas.width = canvas.parentElement?.clientWidth || 400);
      const height = (canvas.height = 76);

      ctx.clearRect(0, 0, width, height);

      const numBars = 42;
      const barWidth = width / numBars - 3;

      for (let i = 0; i < numBars; i++) {
        let barHeight = 8;
        if (agentState === "SPEAKING") {
          barHeight = 15 + Math.sin(phase + i * 0.35) * 28 + Math.cos(phase * 1.5 + i * 0.2) * 16;
        } else if (agentState === "LISTENING") {
          barHeight = 12 + Math.sin(phase * 2 + i * 0.5) * 18;
        } else if (agentState === "REASONING") {
          barHeight = 10 + Math.sin(phase * 4 + i * 0.8) * 12;
        } else {
          barHeight = 5 + Math.sin(phase * 0.5 + i * 0.2) * 3;
        }

        barHeight = Math.max(4, Math.min(height * 0.85, Math.abs(barHeight)));

        const x = i * (barWidth + 3);
        const y = (height - barHeight) / 2;

        const grad = ctx.createLinearGradient(0, y, 0, y + barHeight);
        if (agentState === "SPEAKING") {
          grad.addColorStop(0, "#2563eb");
          grad.addColorStop(0.5, "#8b5cf6");
          grad.addColorStop(1, "#ec4899");
        } else if (agentState === "REASONING") {
          grad.addColorStop(0, "#0284c7");
          grad.addColorStop(1, "#059669");
        } else if (agentState === "LISTENING") {
          grad.addColorStop(0, "#db2777");
          grad.addColorStop(1, "#2563eb");
        } else {
          grad.addColorStop(0, "rgba(100, 116, 139, 0.3)");
          grad.addColorStop(1, "rgba(100, 116, 139, 0.1)");
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x, y, Math.max(2, barWidth), barHeight, 3);
        ctx.fill();
      }

      animId = requestAnimationFrame(renderWave);
    };

    renderWave();
    return () => cancelAnimationFrame(animId);
  }, [agentState]);

  // Play VoCred Voice Directly
  const speakVoice = (text: string, langCode: string) => {
    setAgentState("SPEAKING");
    soundFX.speakText(
      text,
      langCode,
      () => {
        setAgentState("SPEAKING");
      },
      () => {
        setAgentState("IDLE");
        setIsSimulating(false);
      }
    );
  };

  // Full Interactive Call Simulation
  const runSimulation = () => {
    if (isSimulating) {
      // User clicked stop
      soundFX.stopSpeech();
      setAgentState("IDLE");
      setIsSimulating(false);
      return;
    }

    setIsSimulating(true);
    soundFX.playRingTone();

    // Stage 1: Caller speaking
    setAgentState("LISTENING");

    // Optional: Speak user speech first briefly, or speak after slight pause
    const t1 = setTimeout(() => {
      // Stage 2: Reasoning & tool execution
      setAgentState("REASONING");
      soundFX.playProcessing();
    }, 1600);

    const t2 = setTimeout(() => {
      // Stage 3: VoCred speaks real audio response!
      speakVoice(currentScenario.agentResponse, currentScenario.langCode);
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  };

  const handleScenarioChange = (idx: number) => {
    soundFX.stopSpeech();
    soundFX.playClick();
    setActiveStep(idx);
    setAgentState("IDLE");
    setIsSimulating(false);
  };

  return (
    <section id="vocred" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Featured Spotlight Card - Google Labs Style */}
      <div className="rounded-3xl bg-white border border-gray-200/90 shadow-sm p-6 sm:p-10 lg:p-12 relative overflow-hidden transition-all duration-300 hover:shadow-md">
        {/* Subtle accent gradient stroke at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Product Info & Philosophy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                SPOTLIGHT EXPERIMENT
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                PRODUCTION GRADUATE
              </span>
            </div>

            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
                VoCred
              </h2>
              <p className="text-base sm:text-lg font-medium text-blue-700 mt-1">
                Autonomous AI Voice Telephony Engine
              </p>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              VoCred handles human-like streaming voice conversations with sub-280ms latency. Engineered with zero-tail audio barge-in interruption, multilingual dialect switching, and direct enterprise API execution.
            </p>

            {/* Technical Highlights Chips */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-200/80 transition-all hover:bg-gray-100/60">
                <div className="text-[11px] font-mono text-neutral-500 uppercase">Perception Latency</div>
                <div className="text-base font-bold text-neutral-900 font-mono mt-0.5">&lt;280ms Glass-to-Glass</div>
              </div>
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-200/80 transition-all hover:bg-gray-100/60">
                <div className="text-[11px] font-mono text-neutral-500 uppercase">Dialect Synthesis</div>
                <div className="text-base font-bold text-neutral-900 font-mono mt-0.5">Hindi, Hinglish, English</div>
              </div>
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-200/80 transition-all hover:bg-gray-100/60">
                <div className="text-[11px] font-mono text-neutral-500 uppercase">Telephony Protocols</div>
                <div className="text-base font-bold text-neutral-900 font-mono mt-0.5">SIP, WebRTC, Twilio</div>
              </div>
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-200/80 transition-all hover:bg-gray-100/60">
                <div className="text-[11px] font-mono text-neutral-500 uppercase">Barge-in Cut-off</div>
                <div className="text-base font-bold text-neutral-900 font-mono mt-0.5">45ms Instant Drop</div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <Link
                href="/vocred"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-neutral-900 hover:bg-black transition-all shadow-xs"
                onClick={() => soundFX.playClick()}
              >
                <span>Launch Full VoCred Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-xs font-semibold text-neutral-700 hover:text-neutral-900 bg-gray-100 hover:bg-gray-200 transition-all"
                onClick={() => soundFX.playClick()}
              >
                <span>Deploy to PBX</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Gemini-Style Voice Sandbox with Real Audio */}
          <Tilt3DCard
            maxTilt={4}
            scale={1.01}
            className="lg:col-span-6 rounded-2xl"
          >
            <div data-cursor-label="AUDIO CUE" className="bg-gray-50/90 border border-gray-200 rounded-2xl p-6 sm:p-7 space-y-5 shadow-xs">
            {/* Top Sandbox Header & Scenario Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-semibold text-neutral-800">VOICE SANDBOX (REAL SPEECH)</span>
              </div>
              <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-gray-200">
                {DEMO_CONVERSATIONS.map((demo, idx) => (
                  <button
                    key={demo.topic}
                    onClick={() => handleScenarioChange(idx)}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded-full transition-all ${
                      activeStep === idx
                        ? "bg-neutral-900 text-white shadow-xs"
                        : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    Scenario {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Central Animated Living Voice Orb & Status */}
            <div className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 shadow-2xs">
              <div className="flex items-center gap-3">
                {/* Gemini Style Living Orb */}
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-500 ${
                      agentState === "SPEAKING"
                        ? "bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 scale-125 animate-pulse opacity-75 blur-xs"
                        : agentState === "LISTENING"
                        ? "bg-rose-500 scale-110 opacity-50 blur-xs"
                        : agentState === "REASONING"
                        ? "bg-cyan-500 scale-110 opacity-60 blur-xs animate-spin"
                        : "bg-blue-400 opacity-25"
                    }`}
                  />
                  <div
                    className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      agentState === "SPEAKING"
                        ? "bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 text-white shadow-md"
                        : agentState === "LISTENING"
                        ? "bg-rose-600 text-white"
                        : agentState === "REASONING"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-neutral-500"
                    }`}
                  >
                    {agentState === "SPEAKING" ? (
                      <Volume2 className="w-5 h-5 animate-pulse" />
                    ) : agentState === "LISTENING" ? (
                      <Mic className="w-5 h-5 animate-pulse" />
                    ) : agentState === "REASONING" ? (
                      <Cpu className="w-5 h-5 animate-spin" />
                    ) : (
                      <Mic className="w-5 h-5" />
                    )}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold text-neutral-900 block">{currentScenario.topic}</span>
                  <span className="text-[11px] text-neutral-500 font-mono">Dialect: {currentScenario.lang}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`text-[11px] font-mono px-3 py-1 rounded-full font-semibold border transition-all ${
                    agentState === "SPEAKING"
                      ? "bg-purple-50 text-purple-700 border-purple-200 animate-pulse"
                      : agentState === "LISTENING"
                      ? "bg-rose-50 text-rose-700 border-rose-200"
                      : agentState === "REASONING"
                      ? "bg-blue-50 text-blue-700 border-blue-200"
                      : "bg-gray-100 text-neutral-600 border-gray-200"
                  }`}
                >
                  ● {agentState}
                </span>

                {/* Instant Play/Replay Voice Button */}
                <button
                  onClick={() => speakVoice(currentScenario.agentResponse, currentScenario.langCode)}
                  className="p-1.5 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition-colors shadow-2xs"
                  title="Hear Real AI Voice Output"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Waveform Visualizer Canvas */}
            <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-2xs">
              <canvas ref={canvasRef} className="w-full h-16" />
            </div>

            {/* Interactive Simulation Chat / Transcript Stream */}
            <div className="space-y-3 text-left">
              {/* User utterance */}
              <div className="p-3.5 rounded-xl bg-white border border-gray-200 text-xs space-y-1">
                <div className="flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                  <span className="font-semibold text-neutral-700">CALLER (AUDIO INGEST)</span>
                  <span>Audio Stream 24kHz</span>
                </div>
                <p className="text-neutral-800 font-medium">{currentScenario.userAudioText}</p>
              </div>

              {/* Agent internal reasoning pill */}
              {(agentState === "REASONING" || agentState === "SPEAKING") && (
                <div className="p-3 rounded-lg bg-blue-50/80 border border-blue-200 text-[11px] font-mono text-blue-900 space-y-1 animate-fade-in">
                  <div className="flex items-center gap-1.5 font-semibold text-blue-700">
                    <Cpu className="w-3.5 h-3.5 animate-spin" />
                    <span>SYNTHETIC REASONING TRACE</span>
                  </div>
                  <p className="text-blue-800">{currentScenario.agentThought}</p>
                  <p className="text-[10px] text-blue-600 pt-0.5">Exec: {currentScenario.actionExecuted}</p>
                </div>
              )}

              {/* VoCred synthesized reply */}
              {agentState === "SPEAKING" && (
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-xs space-y-1.5 shadow-sm animate-fade-in">
                  <div className="flex items-center justify-between text-[11px] text-blue-100 font-mono">
                    <span className="font-semibold flex items-center gap-1.5">
                      <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                      <span>VOCRED REAL VOICE OUTPUT ({currentScenario.lang})</span>
                    </span>
                    <span>280ms Stream</span>
                  </div>
                  <p className="text-white leading-relaxed font-medium">{currentScenario.agentResponse}</p>
                </div>
              )}
            </div>

            {/* Simulation Trigger Button */}
            <div className="pt-2">
              <button
                onClick={runSimulation}
                className={`w-full py-3.5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-all ${
                  isSimulating
                    ? "bg-rose-600 hover:bg-rose-700 text-white"
                    : "bg-neutral-900 hover:bg-black text-white hover:scale-[1.01] active:scale-[0.99]"
                }`}
              >
                {isSimulating ? (
                  <>
                    <Square className="w-3.5 h-3.5 fill-white text-white" />
                    <span>Stop Voice Telephony Simulation</span>
                  </>
                ) : (
                  <>
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Play Real Voice Simulation ({currentScenario.lang})</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </Tilt3DCard>
      </div>
    </div>
    </section>
  );
}
