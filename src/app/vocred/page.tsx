"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Mic, PhoneCall, ArrowLeft, Volume2, CheckCircle2, ShieldAlert, Sparkles, Square } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroll from "@/components/awwwards/SmoothScroll";
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

  useEffect(() => {
    return () => {
      soundFX.stopSpeech();
    };
  }, []);

  const toggleCall = () => {
    if (callActive) {
      soundFX.stopSpeech();
      soundFX.playPulse();
      setCallActive(false);
      setTranscriptStep(0);
    } else {
      soundFX.playRingTone();
      setCallActive(true);
      // Advance dialogue automatically with real voice output
      const t1 = setTimeout(() => {
        setTranscriptStep(1);
        soundFX.speakText(transcripts[1].text, "en-IN");
      }, 1200);

      const t2 = setTimeout(() => {
        setTranscriptStep(2);
      }, 7000);

      const t3 = setTimeout(() => {
        setTranscriptStep(3);
        soundFX.speakText(transcripts[3].text, "en-IN");
      }, 9500);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
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
            <Volume2 className="w-3.5 h-3.5 text-[#d8ff3e]" />
            <span>VOCRED // CONVERSATIONAL VOICE AI PLATFORM</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.035em] text-neutral-900 leading-[1.0]">
            Give your business <br />
            <span className="font-serif-it font-normal text-[#4d7c0f]">
              a real-time voice.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Build, deploy and operate autonomous voice agents that can listen, reason, understand multilingual nuances, and trigger real-time enterprise tools with sub-280ms latency.
          </p>

          {/* Quick Metrics Ribbon */}
          <div className="flex flex-wrap justify-center gap-2.5 pt-2 font-jbmono text-[11px] font-bold">
            <span className="px-3 py-1 rounded-full bg-white border border-black/10 text-black/60">
              ◆ &lt;280ms Telephony Latency
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-black/10 text-black/60">
              ◆ Instant 45ms Barge-In
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-black/10 text-black/60">
              ◆ Multilingual Dialects
            </span>
            <span className="px-3 py-1 rounded-full bg-[#0b0b0f] text-[#d8ff3e]">
              ◆ SIP &amp; WebRTC Native
            </span>
          </div>
        </div>

        {/* Live Interactive Voice Call Simulator Box */}
        <div className="max-w-4xl mx-auto bg-white border border-black/10 rounded-[24px] p-6 sm:p-10 shadow-[0_24px_64px_-24px_rgba(11,11,15,0.22)] relative overflow-hidden mb-24">
          <div className="flex items-center justify-between pb-6 border-b border-black/10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-mono text-neutral-900 font-bold">
                VOCRED LIVE INTERACTIVE SIMULATOR (REAL SPEECH)
              </span>
            </div>
            <span className="text-xs font-mono text-black/60 bg-black/[0.04] border border-black/10 px-3 py-1 rounded-full font-semibold">
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
                      ? "ml-auto bg-gray-100 border border-gray-200 text-neutral-900 text-right"
                      : "mr-auto bg-[#d8ff3e]/15 border border-[#4d7c0f]/30 text-neutral-900"
                  }`}
                >
                  <div className="text-[10px] font-mono text-neutral-500 mb-1 flex items-center justify-between">
                    <span>{msg.sender}</span>
                    {msg.sender.includes("AI") && (
                      <button
                        onClick={() => soundFX.speakText(msg.text, "en-IN")}
                        className="text-[#4d7c0f] hover:text-[#0b0b0f] flex items-center gap-1 font-sans text-[11px]"
                      >
                        <Volume2 className="w-3 h-3" />
                        <span>Play</span>
                      </button>
                    )}
                  </div>
                  <p>{msg.text}</p>
                </div>
              ))
            ) : (
              <div className="text-center py-12 space-y-3">
                <Mic className="w-12 h-12 text-[#4d7c0f] mx-auto animate-pulse" />
                <h4 className="text-lg font-bold text-neutral-900">Experience an autonomous voice session</h4>
                <p className="text-xs text-neutral-600 max-w-md mx-auto">
                  Click below to trigger a simulated real-time outbound customer support call with sub-280ms streaming response and real human voice.
                </p>
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={toggleCall}
              className={`w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-xs ${
                callActive
                  ? "bg-rose-600 hover:bg-rose-700 text-white"
                  : "bg-[#0b0b0f] hover:bg-[#4d7c0f] hover:text-white text-[#d8ff3e]"
              }`}
            >
              {callActive ? (
                <>
                  <Square className="w-4 h-4 fill-white text-white" />
                  <span>END DEMO CALL</span>
                </>
              ) : (
                <>
                  <PhoneCall className="w-4 h-4" />
                  <span>START TEST VOICE CALL (SPEAKS REAL VOICE)</span>
                </>
              )}
            </button>

            <div className="text-xs font-mono text-neutral-500 flex items-center gap-3">
              <span>Tool Sync: WhatsApp / CRM API</span>
              <span>&bull;</span>
              <span>Audio: Deepgram &times; Groq</span>
            </div>
          </div>
        </div>

        {/* The Problem vs VoCred Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="p-8 rounded-3xl bg-rose-50/50 border border-rose-200 space-y-4 shadow-2xs">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-700 font-semibold">
              <ShieldAlert className="w-4 h-4" />
              <span>THE OLD WAY: TRADITIONAL IVR &amp; BASIC BOTS</span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900">
              Rigid trees, robotic pauses, and frustrated callers.
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">&times;</span>
                Press 1 for Sales, Press 2 for Support tree nightmares
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">&times;</span>
                2 to 4 second awkward silence waiting for API roundtrips
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">&times;</span>
                Immediate confusion and repeat loops when the caller speaks over the bot
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">&times;</span>
                Inability to understand natural Hinglish or regional vernacular accents
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-[24px] bg-[#0b0b0f] text-[#f4f2ed] space-y-4 shadow-[0_24px_64px_-24px_rgba(11,11,15,0.5)]">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d8ff3e] font-bold">
              <Sparkles className="w-4 h-4" />
              <span>THE VOCRED WAY: INTELLIGENT VOICE AGENTS</span>
            </div>
            <h3 className="font-display text-2xl font-bold tracking-tight">
              Fluid, human conversations that resolve real tasks.
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-white/70">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                Natural conversational flow with dynamic intent classification
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                Sub-280ms streaming response indistinguishable from human cadence
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                Instant barge-in handling: when interrupted, the agent pauses in 45ms
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                Direct tool calling to query databases, issue refunds, or book slots live
              </li>
            </ul>
          </div>
        </div>

        {/* How It Works Architecture Pipeline */}
        <div className="mb-24 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-jbmono uppercase tracking-[0.2em] text-[#4d7c0f] font-bold">
              TECHNICAL FLOW
            </span>
            <h3 className="font-display text-3xl font-bold tracking-tight text-neutral-900">
              The VoCred Streaming Pipeline
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600">
              How audio travels through speech perception, reasoning, and real-world tools in under 280 milliseconds.
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
              <div key={item.step} className="p-5 rounded-2xl bg-white border border-black/10 shadow-xs space-y-2 hover:border-black/25 hover:-translate-y-1 transition-all">
                <div className="text-xs font-mono text-[#4d7c0f] font-bold">STEP {item.step}</div>
                <h4 className="text-sm font-bold text-neutral-900 font-mono">{item.title}</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bottom Box */}
        <div className="p-8 sm:p-12 rounded-[24px] bg-[#0b0b0f] text-[#f4f2ed] text-center max-w-3xl mx-auto space-y-6 shadow-[0_24px_64px_-24px_rgba(11,11,15,0.5)]">
          <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight">
            Ready to deploy your <span className="font-serif-it font-normal text-[#d8ff3e]">first voice agent?</span>
          </h3>
          <p className="text-xs sm:text-sm text-white/60 max-w-lg mx-auto">
            Connect your PBX, bring your own API keys, or deploy a fully managed enterprise VoCred cluster with custom SLA guarantees.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="btn-shine px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#d8ff3e] text-black hover:bg-white transition-all"
            >
              Request Enterprise Telephony Demo
            </Link>
            <Link
              href="/"
              className="px-6 py-3 rounded-full text-xs font-semibold text-white/70 hover:text-white border border-white/20 hover:bg-white/10 transition-all"
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
