export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: "Voice AI" | "Document AI" | "Enterprise" | "Fintech" | "Operations" | "Community";
  status: "LIVE" | "BETA" | "IN_DEV" | "EXPERIMENT";
  highlightColor: string;
  accentGradient: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  featured?: boolean;
  liveDemoAvailable?: boolean;
  architectureDetails: string[];
  useCases: string[];
  ctaText: string;
  href: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "vocred",
    slug: "vocred",
    name: "VoCred",
    tagline: "AI Voice Agents for the real world.",
    description: "Build, deploy and operate intelligent voice agents that can listen, reason, respond and trigger real-time actions with sub-350ms ultra-low latency.",
    category: "Voice AI",
    status: "LIVE",
    highlightColor: "#a855f7",
    accentGradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    metrics: [
      { label: "Latency", value: "<320ms" },
      { label: "Barge-in Support", value: "Instant" },
      { label: "Languages", value: "30+ Multilingual" },
      { label: "Telephony", value: "SIP / WebRTC" }
    ],
    tags: ["VOICE AI", "REAL-TIME SPEECH", "TELEPHONY", "TOOL EXECUTION"],
    featured: true,
    liveDemoAvailable: true,
    architectureDetails: [
      "Ultra-low latency streaming ASR with Deepgram integration",
      "Model-agnostic reasoning orchestrator (Groq / Gemini / Claude)",
      "Real-time bidirectional WebSockets audio streaming",
      "Autonomous tool calling with customer CRM & database syncing"
    ],
    useCases: [
      "Outbound customer collections & payment reminders",
      "Automated appointment scheduling & confirmations",
      "Tier-1 customer support triage & resolution",
      "Real-time sales qualification & inbound lead routing"
    ],
    ctaText: "Launch VoCred World",
    href: "/vocred"
  },
  {
    id: "textmitra",
    slug: "textmitra",
    name: "TextMitra",
    tagline: "Turn unstructured documents into verifiable intelligence.",
    description: "Multi-modal OCR and document intelligence engine that parses complex invoices, receipts, legal deeds and handwritten records into structured, queryable schemas.",
    category: "Document AI",
    status: "LIVE",
    highlightColor: "#06b6d4",
    accentGradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
    metrics: [
      { label: "Extraction Accuracy", value: "99.4%" },
      { label: "Parse Speed", value: "0.8s / page" },
      { label: "Format Support", value: "PDF, Image, TIFF" },
      { label: "Schema Validation", value: "Deterministic" }
    ],
    tags: ["DOCUMENT AI", "VISION OCR", "SEMANTIC PARSING", "AUTOMATION"],
    featured: true,
    liveDemoAvailable: true,
    architectureDetails: [
      "Dual-engine vision OCR with bounding box coordinate recognition",
      "Semantic key-value entity extraction powered by fine-tuned LLMs",
      "Automated anomaly & forgery detection pipelines",
      "Direct ERP/Accounting webhooks payload dispatcher"
    ],
    useCases: [
      "Automated accounts payable & vendor bill validation",
      "KYC & government identity verification parsing",
      "Complex contract lease clause comparison",
      "Medical prescription & healthcare record indexing"
    ],
    ctaText: "Explore TextMitra",
    href: "/textmitra"
  },
  {
    id: "ai-hrms",
    slug: "ai-hrms",
    name: "AI-Native HRMS",
    tagline: "Workforce software that reasons, assists and automates.",
    description: "An agentic workforce intelligence platform that automates attendance, policy inquiries, leave workflows, and performance tracking using continuous ambient intelligence.",
    category: "Enterprise",
    status: "LIVE",
    highlightColor: "#10b981",
    accentGradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    metrics: [
      { label: "Query Resolution", value: "85% Auto" },
      { label: "Payroll Processing", value: "Instant" },
      { label: "Compliance Checks", value: "100% Automated" },
      { label: "Employee Adoption", value: "4.9 / 5.0" }
    ],
    tags: ["ENTERPRISE AI", "AUTONOMOUS WORKFLOWS", "PEOPLE OPS", "RAG MEMORY"],
    featured: true,
    liveDemoAvailable: false,
    architectureDetails: [
      "Company policy knowledge base with contextual vector RAG",
      "Autonomous Slack & WhatsApp HR agent integration",
      "Dynamic shift scheduling & attendance geo-fencing intelligence",
      "Predictive attrition & employee engagement sentiment analytics"
    ],
    useCases: [
      "Instant employee answers to complex insurance and leave rules",
      "Frictionless onboarding document validation and account setup",
      "Autonomous manager appraisal reminder workflows",
      "Audit-proof regulatory compliance reporting"
    ],
    ctaText: "Discover AI HRMS",
    href: "/ai-hrms"
  },
  {
    id: "trading",
    slug: "trading",
    name: "Trading Intelligence",
    tagline: "Reasoning and signal engine for financial workflows.",
    description: "High-throughput algorithmic intelligence analyzing news sentiment, market microstructure, and trade compliance without emotional latency.",
    category: "Fintech",
    status: "BETA",
    highlightColor: "#f59e0b",
    accentGradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    metrics: [
      { label: "Signal Latency", value: "42ms" },
      { label: "Market Feeds", value: "Multi-Exchange" },
      { label: "Risk Guards", value: "Real-time" },
      { label: "Execution Layer", value: "Direct API" }
    ],
    tags: ["FINTECH", "REAL-TIME SIGNALS", "ALGORITHMIC AI", "RISK ENGINE"],
    featured: true,
    liveDemoAvailable: false,
    architectureDetails: [
      "Streaming sentiment analysis over financial filings and news streams",
      "Order routing verification with custom risk threshold guards",
      "Statistical arbitrage anomaly detection engine",
      "Low-overhead backtesting sandbox with tick-level historical replay"
    ],
    useCases: [
      "Quant strategy parameter tuning and hypothesis validation",
      "Real-time news shock alerts and volatility shielding",
      "Portfolio rebalancing guardrails and slippage optimization",
      "Regulatory transaction reporting validation"
    ],
    ctaText: "Explore Trading",
    href: "/trading"
  },
  {
    id: "helpdesk",
    slug: "helpdesk",
    name: "CredibilityCRM & Helpdesk",
    tagline: "Customer operations, intelligently orchestrated.",
    description: "Unified omnichannel customer support and CRM that resolves tier-1 tickets autonomously, drafts agent replies, and synchronizes relationship telemetry.",
    category: "Enterprise",
    status: "LIVE",
    highlightColor: "#ec4899",
    accentGradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    metrics: [
      { label: "First Response Time", value: "<30s" },
      { label: "Deflection Rate", value: "68%" },
      { label: "CSAT Score", value: "96%" },
      { label: "Channels", value: "Email, Chat, Voice" }
    ],
    tags: ["CUSTOMER OPS", "AGENT COPILOT", "OMNICHANNEL", "AUTOMATION"],
    featured: false,
    liveDemoAvailable: false,
    architectureDetails: [
      "Dynamic ticket intent classification & urgency prioritization",
      "Agent copilot with grounded knowledge base autocomplete",
      "Bi-directional sync with internal databases & billing portals",
      "Post-resolution CSAT analysis and sentiment drift warning"
    ],
    useCases: [
      "High-volume e-commerce order tracking and returns",
      "B2B SaaS onboarding support and technical escalations",
      "Cross-channel unified customer conversation timeline",
      "Automated SLA breach notifications"
    ],
    ctaText: "Learn More",
    href: "/products/helpdesk"
  },
  {
    id: "society",
    slug: "society",
    name: "Society Platform",
    tagline: "Smarter, safer community management.",
    description: "Intelligent gated community operations featuring automated visitor approvals, automated utility metering, security alerts, and resident ticketing.",
    category: "Community",
    status: "LIVE",
    highlightColor: "#3b82f6",
    accentGradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    metrics: [
      { label: "Active Gates", value: "24/7 Monitored" },
      { label: "Visitor Check-in", value: "<15s" },
      { label: "Billing Accuracy", value: "100%" },
      { label: "Resident App", value: "iOS / Android" }
    ],
    tags: ["COMMUNITY", "ACCESS CONTROL", "FACILITY OPS", "BILLING"],
    featured: false,
    liveDemoAvailable: false,
    architectureDetails: [
      "Fast automated license plate & QR pass gate validation",
      "Automated maintenance dues generation with instant UPI integration",
      "Amenity booking scheduler with real-time slot locking",
      "Digital guard station interface with emergency broadcast triggers"
    ],
    useCases: [
      "Residential high-rise community administration",
      "Commercial business park visitor logging",
      "Society committee expense transparency & audit logging",
      "Domestic staff pass tracking and gate notifications"
    ],
    ctaText: "Learn More",
    href: "/products/society"
  },
  {
    id: "payslip",
    slug: "payslip",
    name: "Payslip Generator",
    tagline: "Payroll documents and tax deductions, fully automated.",
    description: "High-speed document automation engine that computes regional tax breakdowns, generates cryptographic PDF payslips, and dispatches them at massive scale.",
    category: "Operations",
    status: "LIVE",
    highlightColor: "#6366f1",
    accentGradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
    metrics: [
      { label: "Generation Speed", value: "50,000 / min" },
      { label: "Tax Compliance", value: "Auto-Updated" },
      { label: "Format", value: "Secure Vector PDF" },
      { label: "Security", value: "AES-256 Encrypted" }
    ],
    tags: ["PAYROLL", "DOCUMENT SYNTHESIS", "TAX COMPLIANCE", "BATCH ENGINE"],
    featured: false,
    liveDemoAvailable: false,
    architectureDetails: [
      "Statutory deduction calculator (PF, ESI, TDS, Professional Tax)",
      "Dynamic template rendering with company custom branding",
      "Password-protected encrypted PDF distribution pipeline",
      "Automated WhatsApp & Email delivery confirmation webhooks"
    ],
    useCases: [
      "Enterprise monthly payroll batch distribution",
      "Gig-economy payout statements and receipt vouchers",
      "Multi-entity corporate salary structuring",
      "Instant annual tax computation sheets (Form 16 readiness)"
    ],
    ctaText: "Learn More",
    href: "/products/payslip"
  },
  {
    id: "slido",
    slug: "slido",
    name: "Slido Presentation AI",
    tagline: "AI-driven slides and executive presentation generator.",
    description: "Transform raw technical documentation, business specs, and sprint reviews into publication-grade, interactive executive slide decks.",
    category: "Operations",
    status: "IN_DEV",
    highlightColor: "#14b8a6",
    accentGradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
    metrics: [
      { label: "Deck Generation", value: "<10s" },
      { label: "Visual Hierarchy", value: "Design-Engineered" },
      { label: "Export", value: "PPTX, PDF, HTML5" },
      { label: "Templates", value: "Adaptive Dark" }
    ],
    tags: ["SYNTHESIS", "EXECUTIVE DECKS", "STORYTELLING", "PRODUCTIVITY"],
    featured: false,
    liveDemoAvailable: false,
    architectureDetails: [
      "Document to narrative outline structural transformer",
      "Vector chart & metric visualization component generator",
      "Consistent typography and color palette enforcement",
      "Real-time team collaborative presenter view"
    ],
    useCases: [
      "Investor pitch decks and quarterly business reviews",
      "Product requirement documents to design walkthroughs",
      "Technical architecture presentations for engineering teams",
      "Sales collateral and enterprise proposal decks"
    ],
    ctaText: "View Prototype",
    href: "/products/slido"
  },
  {
    id: "ffms",
    slug: "ffms",
    name: "FFMS — Field Force Intelligence",
    tagline: "Real-world workforce routing and task telemetry.",
    description: "GPS-grounded operations engine optimizing field visits, delivery verification, offline geo-logging, and real-time field task synchronization.",
    category: "Operations",
    status: "LIVE",
    highlightColor: "#e11d48",
    accentGradient: "from-rose-500/20 via-red-500/10 to-transparent",
    metrics: [
      { label: "Route Optimization", value: "24% Saved" },
      { label: "Offline Mode", value: "Full Cache" },
      { label: "Proof of Work", value: "Geo-Stamped" },
      { label: "Live Telemetry", value: "Sub-Second" }
    ],
    tags: ["FIELD OPERATIONS", "GEO INTELLIGENCE", "LOGISTICS", "TELEMETRY"],
    featured: false,
    liveDemoAvailable: false,
    architectureDetails: [
      "Traveling salesperson algorithm with live traffic heuristics",
      "Photo geofence and timestamp cryptographic verification",
      "Offline-first mobile client sync with conflict resolution",
      "Battery-optimized background GPS heartbeat tracker"
    ],
    useCases: [
      "Field technician maintenance dispatching",
      "FMCG retail store audit and stock verification",
      "Last-mile delivery proof of verification",
      "Utility meter reading and inspection routes"
    ],
    ctaText: "Learn More",
    href: "/products/ffms"
  },
  {
    id: "rms",
    slug: "rms",
    name: "RMS — Restaurant Operating System",
    tagline: "Smart kitchen orchestration and table intelligence.",
    description: "Integrated hospitality platform connecting QR orders, kitchen display stations, automated raw material forecasting, and guest loyalty loops.",
    category: "Operations",
    status: "LIVE",
    highlightColor: "#84cc16",
    accentGradient: "from-lime-500/20 via-emerald-500/10 to-transparent",
    metrics: [
      { label: "Order TAT", value: "-35%" },
      { label: "Inventory Waste", value: "-18%" },
      { label: "Menu Sync", value: "Instant 3rd Party" },
      { label: "KDS Reliability", value: "99.99%" }
    ],
    tags: ["HOSPITALITY", "KITCHEN ORCHESTRATION", "INVENTORY AI", "POS"],
    featured: false,
    liveDemoAvailable: false,
    architectureDetails: [
      "Real-time kitchen order ticket (KOT) load balancer",
      "Recipe-level inventory decrementing engine",
      "Omnichannel aggregator menu & pricing synchronization",
      "Predictive day-part demand forecasting model"
    ],
    useCases: [
      "Multi-outlet quick service restaurant chains",
      "Fine dining table reservation and course pacing",
      "Cloud kitchen multi-brand order management",
      "Automated vendor reordering for perishable supplies"
    ],
    ctaText: "Learn More",
    href: "/products/rms"
  }
];
