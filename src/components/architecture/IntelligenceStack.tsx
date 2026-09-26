"use client";

import React, { useState } from "react";
import { Layers, CheckCircle, Cpu, Network, Database, Radio, Shield, Sparkles } from "lucide-react";
import { soundFX } from "@/utils/audio";
import SectionHeading from "@/components/awwwards/SectionHeading";
import { FadeUp } from "@/components/awwwards/Reveal";

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
    color: "#7c3aed",
    tech: ["VoCred", "TextMitra", "AI HRMS", "Trading Intelligence", "CredibilityCRM"],
    description: "Every product is architected natively around probabilistic reasoning models and deterministic workflows rather than surface-level AI wrappers."
  },
  {
    id: "agents",
    name: "02 / Autonomous Agent Swarms",
    subtitle: "Specialized planner, executor, and verification nodes collaborating synchronously",
    icon: Network,
    color: "#0284c7",
    tech: ["Hierarchical Swarms", "Self-critique Loops", "Tool Calling Orchestrator", "Arbitration Rails"],
    description: "Multi-agent systems break down complex business objectives into verified subtasks, verifying state before mutating database records."
  },
  {
    id: "workflow",
    name: "03 / Deterministic Workflow Engine",
    subtitle: "State-machine governance ensuring auditable, zero-hallucination execution",
    icon: Cpu,
    color: "#059669",
    tech: ["Temporal State Machines", "Retry Guarantees", "Rollback Handlers", "Event Sinks"],
    description: "Where probabilistic AI meets mission-critical enterprise workflows. Every agent action is bounded by strict schema contracts and audit logs."
  },
  {
    id: "memory",
    name: "04 / Memory & Context Graph",
    subtitle: "Episodic customer context, document embeddings, and hybrid vector RAG",
    icon: Database,
    color: "#d97706",
    tech: ["Hybrid Vector Search", "Time-Decay Memory Graphs", "Entity Linking", "Sub-10ms Retrieval"],
    description: "Ensures voice callers and enterprise users never repeat context. Long-term episodic memory indexes conversational history and enterprise policies."
  },
  {
    id: "models",
    name: "05 / Foundation & Fine-tuned Models",
    subtitle: "Model-agnostic inference router dynamically targeting lowest latency and cost",
    icon: Layers,
    color: "#db2777",
    tech: ["Groq LPU Acceleration", "Deepgram Nova-2", "Gemini 1.5 Flash", "Custom Fine-tuned LoRAs"],
    description: "Dynamic routing dispatches sub-300ms tasks to dedicated edge LPUs, while deep reasoning tasks route to heavy frontier model clusters."
  },
  {
    id: "telephony",
    name: "06 / Real-time Telephony & Streaming DSP",
    subtitle: "Sub-millisecond audio streaming buffers and telephony switch connectors",
    icon: Radio,
    color: "#2563eb",
    tech: ["FreePBX / Asterisk SIP", "WebRTC Peer Connections", "PCM 24kHz Streaming", "Acoustic VAD"],
    description: "Proprietary low-latency audio pipelines eliminate telephony packet jitter, managing real-time speech interruptions in under 45 milliseconds."
  },
  {
    id: "security",
    name: "07 / Enterprise Security & Guardrails",
    subtitle: "PII redaction, prompt injection defense, and cryptographic auditability",
    icon: Shield,
    color: "#9333ea",
    tech: ["Zero-Trust Data Isolation", "Real-time PII Scrubbing", "AES-256 Encryption", "SOC2 Compliance"],
    description: "Guarantees tenant data privacy. Customer voice streams and sensitive payroll documents are scrubbed in memory and never stored without encryption."
  }
];

export default function IntelligenceStack() {
  const [activeLayer, setActiveLayer] = useState<string>("apps");

  const selected = STACK_LAYERS.find((l) => l.id === activeLayer) || STACK_LAYERS[0];
  const IconComponent = selected.icon;

  return (
    <section id="architecture" className="relative py-24 sm:py-32 px-5 sm:px-10 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-16">
        <SectionHeading
          index="07"
          label="Full-stack architecture"
          title={
            <>
              <span>AI isn&apos;t a feature.</span>
              <span>
                It&apos;s the <span className="text-stroke">architecture.</span>
              </span>
            </>
          }
          accent="We don't bolt AI onto legacy software. We design from the silicon layer up — perception, reasoning, verified execution."
        />
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
                    ? "bg-[#0b0b0f] border-[#0b0b0f] shadow-md translate-x-1.5"
                    : "bg-white border-black/10 hover:border-black/25 hover:bg-black/[0.02] shadow-2xs"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: isActive ? "rgba(216,255,62,0.15)" : `${layer.color}15`,
                      color: isActive ? "#d8ff3e" : layer.color
                    }}
                  >
                    <LayerIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold font-mono flex items-center gap-2 ${isActive ? "text-[#f4f2ed]" : "text-neutral-900"}`}>
                      {layer.name}
                    </h3>
                    <p className={`text-xs line-clamp-1 ${isActive ? "text-white/50" : "text-neutral-500"}`}>
                      {layer.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                      isActive
                        ? "bg-[#d8ff3e] text-black"
                        : "bg-black/[0.05] text-neutral-600"
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
        <div className="lg:col-span-5 sticky top-28 bg-white border border-black/10 rounded-[20px] p-6 sm:p-8 shadow-[0_16px_48px_-16px_rgba(11,11,15,0.18)] space-y-5">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: `${selected.color}15`,
                color: selected.color
              }}
            >
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                LAYER SPECIFICATION
              </span>
              <h3 className="text-lg font-bold text-neutral-900">
                {selected.name}
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            {selected.description}
          </p>

          <div className="space-y-2 pt-3 border-t border-gray-100">
            <span className="text-[11px] font-mono text-[#4d7c0f] tracking-wider uppercase font-bold">
              ACTIVE TECHNOLOGIES & RUNTIMES:
            </span>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {selected.tech.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-lg bg-gray-50 text-neutral-700 border border-gray-200/80"
                >
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0b0b0f] text-[#f4f2ed] text-xs font-mono">
            ◆ Powers live production across all Santiently commercial instances.
          </div>
        </div>

      </div>
    </section>
  );
}
