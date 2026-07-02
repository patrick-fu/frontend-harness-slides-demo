// Progressive 5-Scene presentation styles data matrix.
export const STAGE = {
  width: 1920,
  height: 1080,
};

// Generates empty template structure for scenes
const createScenes = (styleId, theme, defaultCaption) => {
  return [
    {
      id: 1,
      title: "I: Fundamental Premise",
      lede: "Establishing the core abstract thesis and fundamental boundaries of " + theme,
      density: "ultralight",
      beats: [
        { id: 1, caption: "01.01", title: "Single Source of Truth", body: "Focus is restricted to a single, absolute central thesis to ensure high cognitive alignment.", beatLine: "Simplifying complexity begins by establishing the primary anchor.", action: "spawn center node" },
        { id: 2, caption: "01.02", title: "Establishing the Axis", body: "We align boundary constraints around the center, locking down early spec assumptions.", beatLine: "Boundaries define the playground of the entire system.", action: "draw reference line" },
        { id: 3, caption: "01.03", title: "Baseline Validation", body: "Static checks are initiated to ensure the core premise matches existing historical data.", beatLine: "Baselines are validated before progressive expansion starts.", action: "pulse baseline" }
      ]
    },
    {
      id: 2,
      title: "II: Balanced Dualism",
      lede: "Evaluating symmetric forces and direct comparison channels in " + theme,
      density: "light",
      beats: [
        { id: 1, caption: "02.01", title: "A-B Symmetry", body: "Comparing the primary process against secondary fallbacks in isolated execution lanes.", beatLine: "Symmetric evaluation exposes hidden trade-offs immediately.", action: "render pane A" },
        { id: 2, caption: "02.02", title: "Contrast Handshake", body: "Direct communication paths are mapped to allow seamless context sharing between lanes.", beatLine: "A-B pathways maintain balance across processing boundaries.", action: "render pane B" },
        { id: 3, caption: "02.03", title: "Reconciliation Point", body: "Divergent state threads are reconciled back into a single, unified database schema.", beatLine: "Dual systems must converge securely at transaction boundaries.", action: "match contrast" }
      ]
    },
    {
      id: 3,
      title: "III: Connected Pipeline Stream",
      lede: "Mapping linear progress and connected 3-stage workflows for " + theme,
      density: "standard",
      beats: [
        { id: 1, caption: "03.01", title: "Ingestion and Scanning", body: "Inputs are washed, stripped of syntactic noise, and prepared for processing queues.", beatLine: "Garbage-in is neutralized at the outer compiler gates.", action: "activate stage 1" },
        { id: 2, caption: "03.02", title: "AST Compilation", body: "Raw inputs convert into structured hierarchical node systems, matching semantic interface specs.", beatLine: "Structure provides the computational leverage needed for generation.", action: "activate stage 2" },
        { id: 3, caption: "03.03", title: "Safe Emission", body: "The compiled artifact is emitted as an optimized static payload ready for runtime deployment.", beatLine: "Emission completes the linear compilation pipeline safely.", action: "activate stage 3" }
      ]
    },
    {
      id: 4,
      title: "IV: Quadrant Matrix Analysis",
      lede: "Evaluating multivariable attributes inside a structured 2x2 grid for " + theme,
      density: "dense",
      beats: [
        { id: 1, caption: "04.01", title: "Dividing the attributes", body: "Establishing a strict 2x2 coordinate space to analyze speed, accuracy, costs, and risks.", beatLine: "Matrices simplify multidimensional trade-offs into observable spaces.", action: "draw grid grid" },
        { id: 2, caption: "04.02", title: "Classifying the quadrants", body: "Populating cells with respective model metrics, highlighting sweet spot targets.", beatLine: "High-accuracy, low-cost quadrants represent the ideal production zone.", action: "populate cell metrics" },
        { id: 3, caption: "04.03", title: "Stability lock", body: "Locking down parameters to prevent metric drift past designated safety thresholds.", beatLine: "Audited quadrants ensure high-fidelity operational guarantees.", action: "lock parameters" }
      ]
    },
    {
      id: 5,
      title: "V: Extreme Density Blueprint",
      lede: "A highly detailed, comprehensive matrix cataloguing all specifications for " + theme,
      density: "extreme",
      beats: [
        { id: 1, caption: "05.01", title: "Detailed Schema Ledger", body: "Exhaustive compilation charts covering over 12 variables, from latency profiles to system quotas.", beatLine: "High information density minimizes speculative assumptions.", action: "render matrix headers" },
        { id: 2, caption: "05.02", title: "Grammar Diffs & Annotations", body: "Highlighting code modifications, deletions, and side-by-side annotations.", beatLine: "Traceability ensures post-execution auditing is straightforward.", action: "apply syntax highlights" },
        { id: 3, caption: "05.03", title: "Final Compliance Sign-Off", body: "The completed ledger clears security, coverage, and integration checks with zero errors.", beatLine: "100% compliant artifacts are signed off for direct delivery.", action: "stamp certified sign-off" }
      ]
    }
  ];
};

export const STYLES = [
  {
    id: "01",
    name: "Minimal Product Keynote",
    density: "low",
    densityLabel: "Minimal Keynote",
    theme: "Quantum Compiler Architecture",
    typography: { header: "Playfair Display", body: "Inter" },
    colors: {
      bg: "bg-neutral-100 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50",
      bgHex: "#f5f5f7",
      ink: "text-zinc-900 dark:text-zinc-100",
      accent: "text-neutral-500",
      accentHex: "#86868b"
    },
    visualMetaphor: "Deep-space quantum matrix with central orbits.",
    scenes: createScenes("01", "Quantum Compiler Architecture", "Quantum")
  },
  {
    id: "02",
    name: "Sketch Board Emoji",
    density: "low",
    densityLabel: "Minimal Keynote",
    theme: "Offline-First Sync Engine Design",
    typography: { header: "Caveat", body: "Inter" },
    colors: {
      bg: "bg-[#fcfbf7] text-[#2d2722]",
      bgHex: "#fcfbf7",
      ink: "text-[#2d2722]",
      stickyYellow: "#fef08a",
      stickyBlue: "#bfdbfe",
      stickyPink: "#fecaca"
    },
    visualMetaphor: "Paper cards, hand-drawn vector connectors, and active emojis.",
    scenes: createScenes("02", "Offline-First Sync Engine Design", "Sync")
  },
  {
    id: "03",
    name: "Interactive Dialogue Stage",
    density: "low",
    densityLabel: "Minimal Keynote",
    theme: "Human-Agent Collaboration Handshake",
    typography: { header: "Fira Code", body: "Inter" },
    colors: {
      bg: "bg-[#0f172a] text-[#f1f5f9]",
      bgHex: "#0f172a",
      ink: "text-[#f1f5f9]",
      accent: "text-[#0d9488]"
    },
    visualMetaphor: "Terminal dialogue bubble stage showing human/agent chat roles.",
    scenes: createScenes("03", "Human-Agent Collaboration Handshake", "Handshake")
  },
  {
    id: "04",
    name: "Kinetic Type Punchline",
    density: "low",
    densityLabel: "Minimal Keynote",
    theme: "The Death of Boilerplate Code",
    typography: { header: "Inter", body: "Fira Code" },
    colors: {
      bg: "bg-black text-white",
      bgHex: "#000000",
      ink: "text-white",
      accent: "text-yellow-400"
    },
    visualMetaphor: "Heavy overlapping graphic poster blocks with struck-through words.",
    scenes: createScenes("04", "The Death of Boilerplate Code", "Boilerplate")
  },
  {
    id: "05",
    name: "Object Metaphor Hero",
    density: "low",
    densityLabel: "Minimal Keynote",
    theme: "The Context-Driven Handoff Kit",
    typography: { header: "Inter", body: "Fira Code" },
    colors: {
      bg: "bg-[#fffbeb] text-[#78350f]",
      bgHex: "#fffbeb",
      ink: "text-[#78350f]",
      accent: "text-[#d97706]"
    },
    visualMetaphor: "A physically packed field kit layout with pocket compartments.",
    scenes: createScenes("05", "The Context-Driven Handoff Kit", "Field Kit")
  },
  {
    id: "06",
    name: "Blackboard Chalk Talk",
    density: "low",
    densityLabel: "Minimal Keynote",
    theme: "The First Principles of Quantum Computing",
    typography: { header: "Caveat", body: "Fira Code" },
    colors: {
      bg: "bg-[#1e2923] text-white",
      bgHex: "#1e2923",
      ink: "text-white",
      accent: "text-[#fef08a]"
    },
    visualMetaphor: "Chalk-drawn vector lines, formulas, equations, and rough blackboard grids.",
    scenes: createScenes("06", "The First Principles of Quantum Computing", "Chalk")
  },
  {
    id: "07",
    name: "Arcade Boss Fight",
    density: "low",
    densityLabel: "Minimal Keynote",
    theme: "Legacy Codebase Refactoring Boss",
    typography: { header: "VT323", body: "Fira Code" },
    colors: {
      bg: "bg-black text-white",
      bgHex: "#000000",
      ink: "text-white",
      accent: "text-red-500"
    },
    visualMetaphor: "Retro 8-bit game console interface, HP bars, flashing damage screens.",
    scenes: createScenes("07", "Legacy Codebase Refactoring Boss", "Arcade")
  },
  {
    id: "08",
    name: "Spotlight Quote Poster",
    density: "low",
    densityLabel: "Minimal Keynote",
    theme: "The Philosophy of Clean Code",
    typography: { header: "Playfair Display", body: "Inter" },
    colors: {
      bg: "bg-[#08080a] text-white",
      bgHex: "#08080a",
      ink: "text-white",
      accent: "text-teal-400"
    },
    visualMetaphor: "Overhead breathing spotlight radial gradients illuminating quotes.",
    scenes: createScenes("08", "The Philosophy of Clean Code", "Spotlight")
  },
  {
    id: "09",
    name: "Signal Pipeline Flow",
    density: "med",
    densityLabel: "Balanced Hybrid",
    theme: "CI/CD Compilation Pipeline",
    typography: { header: "Fira Code", body: "Inter" },
    colors: {
      bg: "bg-[#0b0f19] text-slate-100",
      bgHex: "#0b0f19",
      ink: "text-slate-100",
      accent: "text-cyan-400"
    },
    visualMetaphor: "Assembly line tracks, flashing compilation gates, sliding packets.",
    scenes: createScenes("09", "CI/CD Compilation Pipeline", "Pipeline")
  },
  {
    id: "10",
    name: "Mechanical Scoring Funnel",
    density: "med",
    densityLabel: "Balanced Hybrid",
    theme: "AST-Based Code Refactoring Sieve",
    typography: { header: "Inter", body: "Fira Code" },
    colors: {
      bg: "bg-[#f0f4f8] text-blue-950",
      bgHex: "#f0f4f8",
      ink: "text-blue-950",
      accent: "text-orange-500"
    },
    visualMetaphor: "Blueprint grid layout showing raw, messy files sifted into AST formats.",
    scenes: createScenes("10", "AST-Based Code Refactoring Sieve", "Sieve")
  },
  {
    id: "11",
    name: "Collaborative Pairing Board",
    density: "med",
    densityLabel: "Balanced Hybrid",
    theme: "Human-AI Pair Programming Workflow",
    typography: { header: "Inter", body: "Fira Code" },
    colors: {
      bg: "bg-[#f8fafc] text-[#1e293b]",
      bgHex: "#f8fafc",
      ink: "text-[#1e293b]",
      accent: "text-indigo-600"
    },
    visualMetaphor: "Split panes, sliding active cursors, human/AI card boards.",
    scenes: createScenes("11", "Human-AI Pair Programming Workflow", "Pairing")
  },
  {
    id: "12",
    name: "Studio Mixing Console",
    density: "med",
    densityLabel: "Balanced Hybrid",
    theme: "LLM Hyperparameter Fine-Tuning",
    typography: { header: "Fira Code", body: "Inter" },
    colors: {
      bg: "bg-[#111827] text-[#f9fafb]",
      bgHex: "#111827",
      ink: "text-[#f9fafb]",
      accent: "text-red-500"
    },
    visualMetaphor: "Metal console mixers, parameter faders sliding up, active level LED indicators.",
    scenes: createScenes("12", "LLM Hyperparameter Fine-Tuning", "Console")
  },
  {
    id: "13",
    name: "Subway Map of Intent",
    density: "med",
    densityLabel: "Balanced Hybrid",
    theme: "The Lifecycle of a Distributed Request",
    typography: { header: "Inter", body: "Fira Code" },
    colors: {
      bg: "bg-[#f1f5f9] text-[#0f172a]",
      bgHex: "#f1f5f9",
      ink: "text-[#0f172a]",
      accent: "text-blue-600"
    },
    visualMetaphor: "Transit map pathways, crossing stations, routing request nodes.",
    scenes: createScenes("13", "The Lifecycle of a Distributed Request", "Subway")
  },
  {
    id: "14",
    name: "Kitchen Prep Station",
    density: "med",
    densityLabel: "Balanced Hybrid",
    theme: "Raw Text Pre-processing & Tokenization",
    typography: { header: "Inter", body: "Fira Code" },
    colors: {
      bg: "bg-[#fff7ed] text-[#ea580c]",
      bgHex: "#fff7ed",
      ink: "text-[#ea580c]",
      accent: "text-[#7c2d12]"
    },
    visualMetaphor: "Chef chopping board, designated prep zones, bouncing ingredient cards.",
    scenes: createScenes("14", "Raw Text Pre-processing & Tokenization", "Prep")
  },
  {
    id: "15",
    name: "Context Bento Box",
    density: "med",
    densityLabel: "Balanced Hybrid",
    theme: "Modern AI Agent Platform Architecture",
    typography: { header: "Inter", body: "Fira Code" },
    colors: {
      bg: "bg-[#1c1917] text-[#fafaf9]",
      bgHex: "#1c1917",
      ink: "text-[#fafaf9]",
      accent: "text-[#d97706]"
    },
    visualMetaphor: "Lacquer compartment boxes, rounded bento boundaries, 3D flip panels.",
    scenes: createScenes("15", "Modern AI Agent Platform Architecture", "Bento")
  },
  {
    id: "16",
    name: "Debug Reaction Board",
    density: "med",
    densityLabel: "Balanced Hybrid",
    theme: "Microservices Health Self-Check",
    typography: { header: "Fira Code", body: "Inter" },
    colors: {
      bg: "bg-[#020617] text-[#f8fafc]",
      bgHex: "#020617",
      ink: "text-[#f8fafc]",
      accent: "text-emerald-400"
    },
    visualMetaphor: "Terminal debug console, health status circles, typing print logging.",
    scenes: createScenes("16", "Microservices Health Self-Check", "Debug")
  },
  {
    id: "17",
    name: "Research Memo",
    density: "high",
    densityLabel: "Text Report",
    theme: "Impact of Latency on Mobile User Retention",
    typography: { header: "Cormorant Garamond", body: "Inter" },
    colors: {
      bg: "bg-[#faf9f5] text-neutral-900",
      bgHex: "#faf9f5",
      ink: "text-neutral-900",
      accent: "text-red-900"
    },
    visualMetaphor: "Classical publication paper layout, rigid margins, burgundy accents.",
    scenes: createScenes("17", "Impact of Latency on Mobile User Retention", "Memo")
  },
  {
    id: "18",
    name: "Maintainer Issue Brief",
    density: "high",
    densityLabel: "Text Report",
    theme: "Post-Mortem: Connection Pool Exhaustion",
    typography: { header: "Inter", body: "Fira Code" },
    colors: {
      bg: "bg-[#f6f8fa] text-slate-900",
      bgHex: "#f6f8fa",
      ink: "text-slate-900",
      accent: "text-purple-600"
    },
    visualMetaphor: "GitHub issue thread borders, badge indicators, code markdown blocks.",
    scenes: createScenes("18", "Post-Mortem: Connection Pool Exhaustion", "Brief")
  },
  {
    id: "19",
    name: "Decision Record (ADR)",
    density: "high",
    densityLabel: "Text Report",
    theme: "ADR 009: SQLite for Offline-First Sync",
    typography: { header: "Inter", body: "Fira Code" },
    colors: {
      bg: "bg-[#f8fafc] text-slate-900",
      bgHex: "#f8fafc",
      ink: "text-slate-900",
      accent: "text-green-700"
    },
    visualMetaphor: "Rigid corporate decision records, metadata columns, approved stamps.",
    scenes: createScenes("19", "ADR 009: SQLite for Offline-First Sync", "ADR")
  },
  {
    id: "20",
    name: "Benchmark Matrix",
    density: "high",
    densityLabel: "Text Report",
    theme: "Edge LLM Performance Comparison",
    typography: { header: "Inter", body: "Fira Code" },
    colors: {
      bg: "bg-white text-slate-900",
      bgHex: "#ffffff",
      ink: "text-slate-900",
      accent: "text-blue-600"
    },
    visualMetaphor: "Numeric tables, performance comparison bars scaling from left.",
    scenes: createScenes("20", "Edge LLM Performance Comparison", "Matrix")
  },
  {
    id: "21",
    name: "Field Notes Report",
    density: "high",
    densityLabel: "Text Report",
    theme: "Smart Home UX Field Research",
    typography: { header: "Playfair Display", body: "Inter" },
    colors: {
      bg: "bg-[#fdfbf7] text-[#333333]",
      bgHex: "#fdfbf7",
      ink: "text-[#333333]",
      accent: "text-teal-600"
    },
    visualMetaphor: "Ledger-ruled margins, qualitative notes, tilted paper clip tags.",
    scenes: createScenes("21", "Smart Home UX Field Research", "Field Notes")
  },
  {
    id: "22",
    name: "Operating Manual",
    density: "high",
    densityLabel: "Text Report",
    theme: "Database Connection Pool Recovery Runbook",
    typography: { header: "Fira Code", body: "Inter" },
    colors: {
      bg: "bg-neutral-900 text-white",
      bgHex: "#111827",
      ink: "text-white",
      accent: "text-amber-500"
    },
    visualMetaphor: "Industrial warning borders, yellow checklists, high-contrast console terminals.",
    scenes: createScenes("22", "Database Connection Pool Recovery Runbook", "Runbook")
  },
  {
    id: "23",
    name: "Checklist Ledger",
    density: "high",
    densityLabel: "Text Report",
    theme: "Handoff Readiness Release Ledger",
    typography: { header: "Inter", body: "Fira Code" },
    colors: {
      bg: "bg-[#f4fbf7] text-[#111c16]",
      bgHex: "#f4fbf7",
      ink: "text-[#111c16]",
      accent: "text-emerald-600"
    },
    visualMetaphor: "Accounting ledgers, light green horizontal lines, compliance checkboxes.",
    scenes: createScenes("23", "Handoff Readiness Release Ledger", "Ledger")
  },
  {
    id: "24",
    name: "Annotated Source & Diff",
    density: "high",
    densityLabel: "Text Report",
    theme: "Query Optimization: Full Table Scan Elimination",
    typography: { header: "Fira Code", body: "Inter" },
    colors: {
      bg: "bg-[#0f141c] text-[#e0e4e6]",
      bgHex: "#0f141c",
      ink: "text-[#e0e4e6]",
      accent: "text-green-500"
    },
    visualMetaphor: "IDE code stage, color-coded syntax lines, crimson deletions, green insertions.",
    scenes: createScenes("24", "Query Optimization: Full Table Scan Elimination", "Code Diff")
  }
];

export function findStyle(id) {
  return STYLES.find((style) => style.id === id) || STYLES[0];
}

export function clampBeat(style, sceneId, beat) {
  const scene = style.scenes.find((s) => s.id === sceneId) || style.scenes[0];
  return Math.max(0, Math.min(scene.beats.length - 1, Number.isFinite(beat) ? beat : 0));
}
