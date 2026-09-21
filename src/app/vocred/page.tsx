"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mic, PhoneCall, Zap, ArrowLeft, Volume2, CheckCircle2, ShieldAlert, Layers, Activity, Sparkles, Terminal } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import { soundFX } from "@/utils/audio";

export default function VocredPage() {
  const [callActive, setCallActive] = useState(false);
  const [transcriptStep, setTranscriptStep] = useState(0);

  const transcripts = [
    { sender: "User", text: "Hello VoCred, I got an SMS about an upcoming loan EMI payment. How much is due?" },
    { sender: "VoCred (AI)", text: "Hello Ananya! I see loan account ending in 8841. Your monthly installment of ₹18,400 is scheduled for tomorrow, October 15th. Would you like me to trigger an instant UPI payment link to your WhatsApp?" },
    { sender: "User", text: "Yes please, send it right away." },
    { sender: "VoCred (AI)", text: "Done! I've sent the payment link via WhatsApp with zero transaction fees. You will also receive an SMS confirmation once completed. Anything else I can assist with today?" }
  ];

  const toggleCall = () => {
    soundFX.playPulse();
    if (callActive) {
      setCallActive(false);
      setTranscriptStep(0);
    } else {
      setCallActive(true);
      // Advance dialogue automatically
      const t1 = setTimeout(() => setTranscriptStep(1), 800);
      const t2 = setTimeout(() => setTranscriptStep(2), 2400);
      const t3 = setTimeout(() => setTranscriptStep(3), 4200);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  };

  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-purple-500/30">
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Volume2 className="w-3.5 h-3.5 text-purple-400" />
            <span>VOCRED // CONVERSATIONAL VOICE AI PLATFORM</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">
            Give your business <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
              a real-time voice.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Build, deploy and operate autonomous voice agents that can listen, reason, understand multilingual nuances, and trigger real-time enterprise tools with sub-350ms latency.
          </p>

          {/* Quick Metrics Ribbon */}
          <div className="flex flex-wrap justify-center gap-3 pt-2 font-mono text-xs">
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-purple-300">
              ⚡ 320ms Telephony Latency
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-cyan-300">
              🎙 Instant 45ms Barge-In
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-emerald-300">
              🌐 30+ Multilingual Dialects
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-pink-300">
              📞 SIP & WebRTC Native
            </span>
          </div>
        </div>

        {/* Live Interactive Voice Call Simulator Box */}
        <div className="max-w-4xl mx-auto bg-[#090a14] border border-purple-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-purple-950/40 relative overflow-hidden mb-24">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono text-zinc-300 font-bold">
                VOCRED LIVE INTERACTIVE SIMULATOR
              </span>
            </div>
            <span className="text-xs font-mono text-purple-400 bg-purple-950/40 border border-purple-500/30 px-2.5 py-1 rounded-full">
              {callActive ? "CALL IN PROGRESS" : "STANDBY MODE"}
            </span>
          </div>

          <div className="py-8 space-y-4 min-h-[220px]">
            {callActive ? (
              transcripts.slice(0, transcriptStep + 1).map((msg, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-2xl text-sm max-w-xl animate-fade-in ${
                    msg.sender === "User"
                      ? "ml-auto bg-white/5 border border-white/10 text-zinc-200 text-right"
                      : "mr-auto bg-purple-950/30 border border-purple-500/30 text-purple-100"
                  }`}
                >
                  <div className="text-[10px] font-mono text-zinc-400 mb-1">
                    {msg.sender}
                  </div>
                  <p>{msg.text}</p>
                </div>
              ))
            ) : (
              <div className="text-center py-12 space-y-3">
                <Mic className="w-12 h-12 text-purple-400 mx-auto animate-pulse" />
                <h4 className="text-lg font-bold text-white">Experience an autonomous voice session</h4>
                <p className="text-xs text-zinc-400 max-w-md mx-auto">
                  Click below to trigger a simulated real-time outbound customer support call with sub-350ms streaming response.
                </p>
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={toggleCall}
              className={`w-full sm:w-auto px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                callActive
                  ? "bg-red-600 hover:bg-red-500 text-white"
                  : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-600/30"
              }`}
            >
              <PhoneCall className="w-4 h-4" />
              <span>{callActive ? "END DEMO CALL" : "START TEST VOICE CALL"}</span>
            </button>

            <div className="text-xs font-mono text-zinc-400 flex items-center gap-3">
              <span>Tool Sync: WhatsApp / CRM API</span>
              <span>&bull;</span>
              <span>Audio: Deepgram &times; Groq</span>
            </div>
          </div>
        </div>

        {/* The Problem vs VoCred Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="p-8 rounded-3xl bg-[#0b0c14] border border-red-500/20 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-red-400">
              <ShieldAlert className="w-4 h-4" />
              <span>THE OLD WAY: TRADITIONAL IVR & BASIC BOTS</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Rigid trees, robotic pauses, and frustrated callers.
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">&times;</span>
                Press 1 for Sales, Press 2 for Support tree nightmares
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">&times;</span>
                2 to 4 second awkward silence waiting for API roundtrips
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">&times;</span>
                Immediate confusion and repeat loops when the caller speaks over the bot
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">&times;</span>
                Inability to understand natural Hinglish or regional vernacular accents
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-[#0b0c14] border border-purple-500/30 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400">
              <Sparkles className="w-4 h-4" />
              <span>THE VOCRED WAY: INTELLIGENT VOICE AGENTS</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Fluid, human conversations that resolve real tasks.
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                Natural conversational flow with dynamic intent classification
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                Sub-350ms streaming response indistinguishable from human cadence
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                Instant barge-in handling: when interrupted, the agent pauses in 45ms
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                Direct tool calling to query databases, issue refunds, or book slots live
              </li>
            </ul>
          </div>
        </div>

        {/* How It Works Architecture Pipeline */}
        <div className="mb-24 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
              TECHNICAL FLOW
            </span>
            <h3 className="text-3xl font-black text-white">
              The VoCred Streaming Pipeline
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              How audio travels through speech perception, reasoning, and real-world tools in under 350 milliseconds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Caller Speech", detail: "8kHz/16kHz raw PCM audio streamed over WebSockets or SIP trunk." },
              { step: "02", title: "Streaming ASR", detail: "Deepgram Nova-2 streaming transcribe with custom domain vocabulary." },
              { step: "03", title: "Reasoning Engine", detail: "Ultra-fast Groq / Gemini Flash LLM executing dynamic prompt policies." },
              { step: "04", title: "Tool Execution", detail: "Parallel asynchronous webhook query to ERP, CRM, or billing engines." },
              { step: "05", title: "Neural TTS", detail: "Sub-100ms first-chunk audio synthesis dispatched back to telephony." }
            ].map((item) => (
              <div key={item.step} className="p-5 rounded-2xl bg-[#090a12] border border-white/10 space-y-2">
                <div className="text-xs font-mono text-purple-400 font-bold">STEP {item.step}</div>
                <h4 className="text-sm font-bold text-white font-mono">{item.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bottom Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-black/60 border border-purple-500/30 text-center max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-4xl font-black text-white">
            Ready to deploy your first voice agent?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-lg mx-auto">
            Connect your PBX, bring your own API keys, or deploy a fully managed enterprise VoCred cluster with custom SLA guarantees.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-white text-black hover:bg-zinc-200 transition-colors shadow-xl"
            >
              Request Enterprise Telephony Demo
            </Link>
            <Link
              href="/"
              className="px-6 py-3 rounded-full text-xs font-semibold text-zinc-300 hover:text-white border border-white/10"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
