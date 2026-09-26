export interface Experiment {
  id: string;
  code: string;
  title: string;
  category: "Voice R&D" | "Multi-Agent" | "Vision & Documents" | "Autonomous Systems" | "Reasoning";
  status: "EXPERIMENT" | "PROTOTYPE" | "RESEARCH";
  summary: string;
  details: string;
  hypothesis: string;
  metricsObserved: string;
  nextMilestone: string;
  tags: string[];
}

export const LAB_EXPERIMENTS: Experiment[] = [
  {
    id: "exp-01",
    code: "EXP-802",
    title: "Real-time Acoustic Emotion & Stress Decoding",
    category: "Voice R&D",
    status: "EXPERIMENT",
    summary: "Extracting subtle acoustic prosody, micro-tremors, and speaking cadence to detect caller distress prior to semantic transcription.",
    details: "By analyzing raw PCM audio frames directly before Whisper/Deepgram ASR, the system identifies emotional shifts with 89ms latency, allowing the voice agent to modulate tone from authoritative to empathetic dynamically.",
    hypothesis: "Acoustic features precede semantic comprehension by 150ms and provide ground-truth emotional valence without hallucination.",
    metricsObserved: "89ms feature extraction, 91.2% sentiment correlation on telephony 8kHz audio",
    nextMilestone: "Integrate continuous prosody steering directly into VoCred's streaming TTS pipeline.",
    tags: ["VOICE", "AUDIO DSP", "PROSODY", "LATENCY"]
  },
  {
    id: "exp-02",
    code: "EXP-741",
    title: "Autonomous Multi-Agent Swarms with Conflict Resolution",
    category: "Multi-Agent",
    status: "PROTOTYPE",
    summary: "Simulating hierarchical enterprise agent teams that negotiate task assignments, critique intermediate results, and prevent cascading errors.",
    details: "An orchestrator node delegates tasks to specialized Worker, Auditor, and Tool-caller agents. A deterministic arbitration layer resolves state conflicts before any external write action is finalized.",
    hypothesis: "Separating execution agents from audit agents drops ungrounded tool errors to under 0.05% in production workflows.",
    metricsObserved: "99.8% verification accuracy across 10,000 synthetic enterprise task graphs",
    nextMilestone: "Compile into a drop-in agent micro-framework for the AI-Native HRMS and CredibilityCRM products.",
    tags: ["MULTI-AGENT", "SWARMS", "DETERMINISTIC AI", "ORCHESTRATION"]
  },
  {
    id: "exp-03",
    code: "EXP-619",
    title: "Zero-Shot Spatial Document Coordinate Mapping",
    category: "Vision & Documents",
    status: "EXPERIMENT",
    summary: "End-to-end visual tokenization that reconstructs tabular hierarchies in warped, low-contrast, or folded physical document scans without OCR training.",
    details: "Combines vision-language positional embeddings with geometric graph neural networks to preserve physical layout semantics even when text lines are skewed up to 45 degrees.",
    hypothesis: "Spatial geometric graphs provide 10x higher table extraction resilience than linear token streams.",
    metricsObserved: "98.7% cell-boundary preservation on multi-page crumpled receipts",
    nextMilestone: "Deploy as an experimental fallback engine inside TextMitra v2.",
    tags: ["VISION AI", "GEOMETRIC GRAPHS", "DOCUMENTS", "OCR"]
  },
  {
    id: "exp-04",
    code: "EXP-905",
    title: "Contextual Memory Graphs with Time-Decay Decay Curves",
    category: "Autonomous Systems",
    status: "RESEARCH",
    summary: "Persistent episodic customer memory that automatically clusters recurring intents and weighs recent context against historical baseline rules.",
    details: "Replaces naive vector similarity search with a hybrid time-weighted knowledge graph, ensuring agents remember a user's preference without being trapped by outdated edge-case requests.",
    hypothesis: "Logarithmic time-decay combined with entity centrality prevents context drift in lifelong agent conversations.",
    metricsObserved: "40% reduction in irrelevant context retrieval during multi-session dialogues",
    nextMilestone: "Publish open benchmark and package into the Santiently Intelligence Stack.",
    tags: ["MEMORY", "RAG", "KNOWLEDGE GRAPH", "EPISODIC"]
  }
];
