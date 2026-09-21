"use client";

import React, { useState } from "react";
import { Layers, CheckCircle, Cpu, Network, Database, Radio, Shield, Sparkles } from "lucide-react";
import { soundFX } from "@/utils/audio";

interface StackLayer {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  tech: string[];
  description: string;
}

const STACK_LAYERS: StackLayer[] = [
  {
    id: "apps",
    name: "01 / AI-Native Application Layer",
    subtitle: "Conversational voice, document parsing, predictive finance & HR interfaces",
    icon: Sparkles,
    color: "#a855f7",
    tech: ["VoCred", "TextMitra", "AI HRMS", "Trading Intelligence", "CredibilityCRM"],
    description: "Every product is architected natively around probabilistic reasoning models and deterministic workflows rather than surface-level AI wrappers."
  },
  {
    id: "agents",
    name: "02 / Autonomous Agent Swarms",
    subtitle: "Specialized planner, executor, and verification nodes collaborating synchronously",
    icon: Network,
    color: "#06b6d4",
    tech: ["Hierarchical Swarms", "Self-critique Loops", "Tool Calling Orchestrator", "Arbitration Rails"],
    description: "Multi-agent systems break down complex business objectives into verified subtasks, verifying state before mutating database records."
  },
  {
    id: "workflow",
    name: "03 / Deterministic Workflow Engine",
    subtitle: "State-machine governance ensuring auditable, zero-hallucination execution",
    icon: Cpu,
    color: "#10b981",
    tech: ["Temporal State Machines", "Retry Guarantees", "Rollback Handlers", "Event Sinks"],
    description: "Where probabilistic AI meets mission-critical enterprise workflows. Every agent action is bounded by strict schema contracts and audit logs."
  },
  {
    id: "memory",
    name: "04 / Memory & Context Graph",
    subtitle: "Episodic customer context, document embeddings, and hybrid vector RAG",
    icon: Database,
    color: "#f59e0b",
    tech: ["Hybrid Vector Search", "Time-Decay Memory Graphs", "Entity Linking", "Sub-10ms Retrieval"],
    description: "Ensures voice callers and enterprise users never repeat context. Long-term episodic memory indexes conversational history and enterprise policies."
  },
  {
    id: "models",
    name: "05 / Foundation & Fine-tuned Models",
    subtitle: "Model-agnostic inference router dynamically targeting lowest latency and cost",
    icon: Layers,
    color: "#ec4899",
    tech: ["Groq LPU Acceleration", "Deepgram Nova-2", "Gemini 1.5 Flash", "Custom Fine-tuned LoRAs"],
    description: "Dynamic routing dispatches sub-300ms tasks to dedicated edge LPUs, while deep reasoning tasks route to heavy frontier model clusters."
  },
  {
    id: "telephony",
    name: "06 / Real-time Telephony & Streaming DSP",
    subtitle: "Sub-millisecond audio streaming buffers and telephony switch connectors",
    icon: Radio,
    color: "#3b82f6",
    tech: ["FreePBX / Asterisk SIP", "WebRTC Peer Connections", "PCM 24kHz Streaming", "Acoustic VAD"],
    description: "Proprietary low-latency audio pipelines eliminate telephony packet jitter, managing real-time speech interruptions in under 45 milliseconds."
  },
  {
    id: "security",
    name: "07 / Enterprise Security & Guardrails",
    subtitle: "PII redaction, prompt injection defense, and cryptographic auditability",
    icon: Shield,
    color: "#8b5cf6",
    tech: ["Zero-Trust Data Isolation", "Real-time PII Scrubbing", "AES-256 Encryption", "SOC2 Compliance"],
    description: "Guarantees tenant data privacy. Customer voice streams and sensitive payroll documents are scrubbed in memory and never stored without encryption."
  }
];

export default function IntelligenceStack() {
  const [activeLayer, setActiveLayer] = useState<string>("apps");

  const selected = STACK_LAYERS.find((l) => l.id === activeLayer) || STACK_LAYERS[0];
  const IconComponent = selected.icon;

  return (
    <section id="architecture" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-purple-300 text-xs font-mono">
          <Layers className="w-3.5 h-3.5 text-purple-400" />
          <span>FULL-STACK INTELLIGENCE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          AI isn&apos;t a feature. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
            It&apos;s the architecture.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          We don&apos;t bolt AI onto legacy software. We design our products from the silicon layer up around perception, reasoning, and verified execution.
        </p>
      </div>

      {/* Stack Interactive Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Visual Stack Layers */}
        <div className="lg:col-span-7 space-y-2.5">
          {STACK_LAYERS.map((layer) => {
            const isActive = activeLayer === layer.id;
            const LayerIcon = layer.icon;

            return (
              <div
                key={layer.id}
                onClick={() => {
                  setActiveLayer(layer.id);
                  soundFX.playClick();
                }}
                onMouseEnter={() => soundFX.playHover()}
                className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-4 ${
                  isActive
                    ? "bg-[#11121d] border-purple-500 shadow-xl shadow-purple-950/40 translate-x-2"
                    : "bg-[#090a12]/80 border-white/5 hover:border-white/20 hover:bg-white/[0.03]"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${layer.color}20`,
                      color: layer.color
                    }}
                  >
                    <LayerIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                      {layer.name}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-1">
                      {layer.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      isActive
                        ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                        : "bg-white/5 text-zinc-400"
                    }`}
                  >
                    INSPECT
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Layer Inspector Detail Box */}
        <div className="lg:col-span-5 sticky top-28 bg-[#0a0b14] border border-purple-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-purple-950/40 space-y-6">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: `${selected.color}20`,
                color: selected.color
              }}
            >
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                LAYER SPECIFICATION
              </span>
              <h3 className="text-lg font-bold text-white">
                {selected.name}
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {selected.description}
          </p>

          <div className="space-y-2 pt-2 border-t border-white/10">
            <span className="text-[11px] font-mono text-purple-400 tracking-wider uppercase">
              ACTIVE TECHNOLOGIES & RUNTIMES:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selected.tech.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-zinc-200 border border-white/10"
                >
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-purple-200 font-mono">
            💡 Powers live production across all Sentiently commercial instances.
          </div>
        </div>

      </div>
    </section>
  );
}
