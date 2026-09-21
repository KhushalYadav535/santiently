"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Mic, PhoneCall, Volume2, ArrowRight, Zap, CheckCircle2, Globe, Cpu, RefreshCw } from "lucide-react";
import { soundFX } from "@/utils/audio";

const DEMO_CONVERSATIONS = [
  {
    topic: "Payment & KYC Verification",
    lang: "English (India)",
    userAudioText: "Hi VoCred, can you confirm if my invoice INV-904 was cleared today?",
    agentThought: "Identified customer Intent: invoice_status_lookup. Triggering internal accounting tool.",
    agentResponse: "Hello Vikram! Yes, invoice INV-904 for ₹42,500 was successfully settled at 11:24 AM via NEFT. I've sent the payment receipt to your registered email.",
    actionExecuted: "accounting_api.query_invoice(id='INV-904') -> Settled"
  },
  {
    topic: "Enterprise Appointment Booking",
    lang: "Hindi / Hinglish",
    userAudioText: "Mujhe kal shaam 4 baje sales consultation schedule karni hai.",
    agentThought: "Language detected: Hinglish. Intent: schedule_calendar_slot. Checking slot availability for tomorrow 16:00 IST.",
    agentResponse: "Ji Vikram, kal shaam 4 baje ka slot bilkul available hai. Maine aapki 30-minute executive consultation lock kar di hai aur Google Calendar invite bhej diya hai.",
    actionExecuted: "calendar_engine.create_event(time='Tomorrow 16:00', duration=30) -> Confirmed"
  },
  {
    topic: "Telephony Barge-in Handling",
    lang: "English",
    userAudioText: "Wait, before that, does VoCred support on-premise telephony deployment?",
    agentThought: "Caller interrupted previous response. Executing instant barge-in cut-off in 45ms. Synthesizing new answer.",
    agentResponse: "Yes, absolutely. VoCred operates both as a cloud cluster and fully air-gapped on-premise with SIP trunking and Asterisk/FreePBX compatibility.",
    actionExecuted: "speech_interrupter.barge_in_active() -> 0ms Audio Tail dropped"
  }
];

export default function VocredShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [agentState, setAgentState] = useState<"IDLE" | "LISTENING" | "REASONING" | "SPEAKING">("IDLE");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const currentScenario = DEMO_CONVERSATIONS[activeStep];

  // Animated Waveform Canvas
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
      const height = (canvas.height = 100);

      ctx.clearRect(0, 0, width, height);

      const numBars = 48;
      const barWidth = width / numBars - 3;

      for (let i = 0; i < numBars; i++) {
        let barHeight = 8;
        if (agentState === "SPEAKING") {
          barHeight = 15 + Math.sin(phase + i * 0.35) * 35 + Math.cos(phase * 1.5 + i * 0.2) * 20;
        } else if (agentState === "LISTENING") {
          barHeight = 12 + Math.sin(phase * 2 + i * 0.5) * 22;
        } else if (agentState === "REASONING") {
          barHeight = 10 + Math.sin(phase * 4 + i * 0.8) * 14;
        } else {
          barHeight = 6 + Math.sin(phase * 0.5 + i * 0.2) * 4;
        }

        barHeight = Math.max(4, Math.min(height * 0.85, Math.abs(barHeight)));

        const x = i * (barWidth + 3);
        const y = (height - barHeight) / 2;

        const grad = ctx.createLinearGradient(0, y, 0, y + barHeight);
        if (agentState === "SPEAKING") {
          grad.addColorStop(0, "#a855f7");
          grad.addColorStop(1, "#38bdf8");
        } else if (agentState === "REASONING") {
          grad.addColorStop(0, "#06b6d4");
          grad.addColorStop(1, "#10b981");
        } else if (agentState === "LISTENING") {
          grad.addColorStop(0, "#ec4899");
          grad.addColorStop(1, "#a855f7");
        } else {
          grad.addColorStop(0, "rgba(255, 255, 255, 0.2)");
          grad.addColorStop(1, "rgba(255, 255, 255, 0.05)");
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

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    soundFX.playPulse();

    // 1. Listening (800ms)
    setAgentState("LISTENING");
    setTimeout(() => {
      // 2. Reasoning (320ms - the real-time latency benchmark)
      setAgentState("REASONING");
      soundFX.playHover();
      setTimeout(() => {
        // 3. Speaking (2500ms)
        setAgentState("SPEAKING");
        soundFX.playPulse();
        setTimeout(() => {
          setAgentState("IDLE");
          setIsSimulating(false);
        }, 3200);
      }, 350);
    }, 900);
  };

  return (
    <section id="vocred" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
          <Zap className="w-3.5 h-3.5 text-purple-400" />
          <span>FLAGSHIP AI PRODUCT</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          VoCred: Give your business a voice.
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          Build, deploy and operate intelligent AI voice agents that listen, reason, respond and take real-world action in real time.
        </p>
      </div>

      {/* Interactive Showcase Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#090a12]/80 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl shadow-purple-950/30">
        
        {/* Left Interactive Voice Playground */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <div className="text-xs font-mono text-zinc-300">
                STATUS: <span className="text-emerald-400 font-bold">{agentState}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-purple-300 border border-white/10">
                LATENCY: 320ms
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/10">
                WEBRTC / SIP
              </span>
            </div>
          </div>

          {/* Scenario selector tabs */}
          <div className="flex flex-wrap gap-2">
            {DEMO_CONVERSATIONS.map((scenario, idx) => (
              <button
                key={scenario.topic}
                onClick={() => {
                  setActiveStep(idx);
                  soundFX.playClick();
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeStep === idx
                    ? "bg-purple-600/30 text-purple-200 border border-purple-500/50 shadow-sm"
                    : "bg-white/[0.02] text-zinc-400 hover:text-white border border-white/5"
                }`}
              >
                {scenario.topic}
              </button>
            ))}
          </div>

          {/* User Audio Bubble */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-left space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <Mic className="w-3.5 h-3.5 text-pink-400" />
                <span>CALLER SPEECH (STREAMING ASR)</span>
              </span>
              <span className="text-[11px] text-zinc-400">{currentScenario.lang}</span>
            </div>
            <p className="text-sm sm:text-base text-zinc-200 font-medium italic">
              &ldquo;{currentScenario.userAudioText}&rdquo;
            </p>
          </div>

          {/* Live Audio Waveform Canvas */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5 text-purple-300">
                <Volume2 className="w-3.5 h-3.5 text-purple-400" />
                <span>NEURAL SPEECH SYNTHESIZER</span>
              </span>
              <span className="text-[10px] text-zinc-400">PCM 24kHz Streaming</span>
            </div>

            <div className="w-full h-24 flex items-center justify-center">
              <canvas ref={canvasRef} className="w-full h-full" />
            </div>

            {/* VoCred Agent Response Bubble */}
            <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/30 text-left space-y-1.5">
              <div className="flex items-center gap-1.5 text-[11px] text-purple-300 font-mono">
                <Cpu className="w-3 h-3 text-purple-400" />
                <span>VOCRED REALTIME RESPONSE:</span>
              </div>
              <p className="text-sm text-purple-100 font-medium leading-relaxed">
                {currentScenario.agentResponse}
              </p>
            </div>

            {/* Autonomous Action Triggered */}
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-emerald-950/20 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">TOOL EXEC: {currentScenario.actionExecuted}</span>
            </div>
          </div>

          {/* Simulation Trigger Button */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className={`flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isSimulating
                  ? "bg-purple-900/40 text-purple-300 border border-purple-500/30 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-600/25 border border-purple-400/40 hover:scale-[1.02] active:scale-[0.98]"
              }`}
            >
              {isSimulating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-purple-300" />
                  <span>SIMULATING VOICE AGENT INTERACTION...</span>
                </>
              ) : (
                <>
                  <PhoneCall className="w-4 h-4" />
                  <span>TALK TO VOCRED (TRIGGER DEMO CALL)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Technical Architecture & Highlights */}
        <div className="lg:col-span-5 space-y-5 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
              ARCHITECTURE ADVANTAGES
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Engineered for conversations, not just transcription.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Traditional IVRs and chained API bots suffer from 2-3 second delays and get confused by interruptions. VoCred streams bidirectional audio directly into low-latency reasoning engines.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="text-xs font-bold text-white flex items-center justify-between">
                <span>Sub-350ms Voice Latency</span>
                <span className="text-emerald-400 font-mono text-[11px]">&lt;320ms Avg</span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Streaming Deepgram Nova-2 ASR + Groq Llama-3 / Gemini Flash reasoning.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="text-xs font-bold text-white flex items-center justify-between">
                <span>Dynamic Barge-in & Interruption</span>
                <span className="text-purple-400 font-mono text-[11px]">Instant 45ms</span>
              </div>
              <p className="text-[11px] text-zinc-400">
                When the human interrupts, the agent halts speaking immediately with zero awkward pauses.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="text-xs font-bold text-white flex items-center justify-between">
                <span>Enterprise Telephony Native</span>
                <span className="text-cyan-400 font-mono text-[11px]">SIP / WebRTC</span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Direct integration with Twilio, Exotel, Plivo, FreePBX, and custom VoIP switches.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/vocred"
              className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-purple-200 group"
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
            >
              <span>Explore Dedicated VoCred Deep-Dive Page</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
