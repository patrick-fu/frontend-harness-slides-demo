// Presentation styles data for 24 distinct styles
export const STAGE = {
  width: 1920,
  height: 1080,
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
      bg: "bg-neutral-100 dark:bg-zinc-950",
      bgHex: "#f5f5f7",
      bgDarkHex: "#09090b",
      ink: "text-zinc-900 dark:text-zinc-100",
      inkHex: "#1d1d1f",
      inkDarkHex: "#f5f5f7",
      accent: "text-neutral-500",
      accentHex: "#86868b"
    },
    visualMetaphor: "Deep-space quantum matrix with a central Bloch Sphere or orbits.",
    scenes: [
      {
        id: 1,
        title: "The Quantum Coherence Postulate",
        lede: "Superposition stability dictates compiler latency bounds in fault-tolerant qubits.",
        beats: [
          {
            id: 1,
            caption: "Postulate I",
            title: "Superposition is fragile",
            body: "We establish a hardware-level compile guard that monitors decoherence triggers before instruction mapping.",
            beatLine: "Protecting state integrity is the compiler's absolute directive.",
            action: "initialize sphere",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Postulate II",
            title: "Continuous path shielding",
            body: "By overlaying phase correction paths, we shield logical gates from ambient magnetic drift.",
            beatLine: "Shielding coordinates are mapped dynamically at nanosecond scale.",
            action: "activate orbits",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Postulate III",
            title: "Active error suppression",
            body: "We interleave syndrome measurements directly inside the routing grid, preventing error propagation.",
            beatLine: "Suppression algorithms converge 4x faster than static scheduling.",
            action: "pulse core",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "Coherence Instruction Execution",
        lede: "Translating abstract quantum algorithms into concrete pulse-sequences.",
        beats: [
          {
            id: 1,
            caption: "Execution I",
            title: "Pulse-sequence mapping",
            body: "Quantum instructions decompose into precise RF pulse envelopes delivered to the cryogenic stage.",
            beatLine: "Envelopes are calculated with micro-radian phase precision.",
            action: "map pulses",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Execution II",
            title: "Cryogenic thermal control",
            body: "Sequence density is rate-limited to avoid thermal excitation of the superconducting ground states.",
            beatLine: "Thermal margins are locked at 15 milli-Kelvin.",
            action: "chill qubits",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Execution III",
            title: "Fidelity readback ledger",
            body: "Single-shot dispersive readout classifies qubit final states with over 99.98% fidelity.",
            beatLine: "Readout classification completes the quantum compile cycle.",
            action: "measure fidelity",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "02",
    name: "Sketch Board Emoji",
    density: "low",
    densityLabel: "Minimal Keynote",
    theme: "Offline-First Sync Engine Design",
    typography: { header: "Caveat", body: "Inter" },
    colors: {
      bg: "bg-[#fcfbf7]",
      bgHex: "#fcfbf7",
      ink: "text-[#2d2722]",
      inkHex: "#2d2722",
      stickyYellow: "#fef08a",
      stickyBlue: "#bfdbfe",
      stickyPink: "#fecaca"
    },
    visualMetaphor: "Paper cards, hand-drawn vector connectors, and active emojis.",
    scenes: [
      {
        id: 1,
        title: "Brainstorming Local Truth",
        lede: "How do we make sync painless without blocking the main UI thread? 💡",
        beats: [
          {
            id: 1,
            caption: "Concept 01",
            title: "Local writes are instant!",
            body: "User types, database saves locally. Completely offline, zero spin loops, zero lag. ⚡️",
            beatLine: "The local database is the absolute source of truth.",
            action: "stick card 1",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Concept 02",
            title: "Conflict-free sync paths",
            body: "We run CRDT rules in a background worker. Automatically merges changes without server roundtrips. 🤝",
            beatLine: "Syncing means merging, never overwriting.",
            action: "stick card 2",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Concept 03",
            title: "Reliable delta ledger",
            body: "Only small diff patches are shipped across the network. Minimal battery and data drain. 🔋",
            beatLine: "Keep it small, keep it offline-first!",
            action: "add emoji actors",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "Tactical Offline Recovery",
        lede: "What happens when network signals return in the middle of a conflict? 🔌",
        beats: [
          {
            id: 1,
            caption: "Recovery A",
            title: "Detecting peer collision",
            body: "Both local and server timestamps overlap. We pause auto-merges and flag the collision. 🧐",
            beatLine: "Flags prevent silent database corruption.",
            action: "flag collision",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Recovery B",
            title: "User preference handshake",
            body: "The engine presents a clean card side-by-side. User taps preferred copy in 1 click. 👥",
            beatLine: "Human decisions are final sync gatekeepers.",
            action: "show handshake",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Recovery C",
            title: "Ledger compaction",
            body: "Once resolved, transaction history squashes into a single baseline frame. 🗜️",
            beatLine: "Resolutions are recorded, cleaned, and synced!",
            action: "compact ledger",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "03",
    name: "Interactive Dialogue Stage",
    density: "low",
    densityLabel: "Minimal Keynote",
    theme: "Human-Agent Collaboration Handshake",
    typography: { header: "Fira Code", body: "Inter" },
    colors: {
      bg: "bg-[#0f172a]",
      bgHex: "#0f172a",
      ink: "text-[#f1f5f9]",
      inkHex: "#f1f5f9",
      accent: "text-[#0d9488]",
      accentHex: "#0d9488",
      muted: "#64748b"
    },
    visualMetaphor: "Terminal dialogue bubble stage showing human/agent chat roles.",
    scenes: [
      {
        id: 1,
        title: "Establishing the Handshake Protocol",
        lede: "Defining boundaries for interactive, multi-agent code editing.",
        beats: [
          {
            id: 1,
            caption: "User Briefing",
            title: "Can we clean up this legacy sync module?",
            body: "Human requests refactoring of synchronous database locks to prevent blocking the UI.",
            beatLine: "Collaborative intent starts with clear, explicit friction points.",
            action: "print question",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Agent Analysis",
            title: "I will isolate the write lock inside an AST-worker.",
            body: "Agent analyzes schema locks and proposes a safe worker transition to decouple locks.",
            beatLine: "Proposed code transitions are previewed before edits touch disk.",
            action: "print solution",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Handshake Commit",
            title: "Schema locked, tests verified, worker compiled.",
            body: "The handshake completes. Compile guards verify the non-blocking execution path in 40ms.",
            beatLine: "Safe collaborative editing is achieved through strict static check handshakes.",
            action: "verify handshake",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "The Collaboration Refinement Loop",
        lede: "Iteratively tightening code behavior through dialogue.",
        beats: [
          {
            id: 1,
            caption: "Human Critique",
            title: "Wait, isn't there a race condition on hot restarts?",
            body: "Human questions the worker state transition if the main process reboots abruptly.",
            beatLine: "Constructive feedback loops target edge-case state models.",
            action: "submit critique",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Agent Refinement",
            title: "Applying transaction logging as a fallback ledger.",
            body: "Agent updates the worker to log operations on disk before executing memory state shifts.",
            beatLine: "Statefall logging ensures recovery resilience across restarts.",
            action: "apply fallback",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Verification Handshake",
            title: "Ledger replay tested. Zero data loss verified.",
            body: "The fallback ledger replays successfully in tests. Dialogue closes on verified code.",
            beatLine: "Refinement ends with 100% automated test compliance.",
            action: "finalize loop",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "04",
    name: "Kinetic Type Punchline",
    density: "low",
    densityLabel: "Minimal Keynote",
    theme: "The Death of Boilerplate Code",
    typography: { header: "Inter", body: "Fira Code" },
    colors: {
      bg: "bg-black",
      bgHex: "#000000",
      ink: "text-white",
      inkHex: "#ffffff",
      accent: "text-yellow-400",
      accentHex: "#facc15",
      muted: "#475569"
    },
    visualMetaphor: "Heavy overlapping graphic poster blocks with struck-through words.",
    scenes: [
      {
        id: 1,
        title: "The Boilerplate Illusion",
        lede: "Generating boilerplate code is not productivity; it is debt accumulation.",
        beats: [
          {
            id: 1,
            caption: "The Myth",
            title: "MORE CODE IS BETTER",
            body: "Traditional tools celebrate lines written. We call that an architectural hazard.",
            beatLine: "Every line of generated boilerplate is a liability waiting to crash.",
            action: "strike boilerplate",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "The Reality",
            title: "BOILERPLATE IS WASTE",
            body: "Stop generating wrappers. Build clean, deeply compressed semantic primitives instead.",
            beatLine: "Abstraction is a shield against physical code duplication.",
            action: "highlight primitives",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "The Punchline",
            title: "REDUCE CODE BY 80%",
            body: "Let agents write definitions, not files. The compile step handles the physical scaffolding.",
            beatLine: "The cleanest code is the code you never had to write.",
            action: "punch numbers",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "The Scaffold Collapse",
        lede: "Scaffolding tools freeze your architecture, preventing future updates.",
        beats: [
          {
            id: 1,
            caption: "Collapse I",
            title: "SCAFFOLDING FREEZES ART",
            body: "Once templates are written, migrating schemas becomes a nightmare of manual edits.",
            beatLine: "Static templates create rigid, brittle software.",
            action: "freeze templates",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Collapse II",
            title: "UPGRADE IS IMPOSSIBLE",
            body: "Upgrading core libraries means patching thousands of generated, copy-pasted files.",
            beatLine: "Friction compounds exponentially with every copy-paste.",
            action: "block upgrade",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "The Solution",
            title: "DECLARATIVE SCHEMAS ONLY",
            body: "Change definitions in one place. Let the system compile down live dependencies.",
            beatLine: "Declarative architecture makes system-wide upgrades trivial.",
            action: "collapse boilerplate",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "05",
    name: "Object Metaphor Hero",
    density: "low",
    densityLabel: "Minimal Keynote",
    theme: "The Context-Driven Handoff Kit",
    typography: { header: "Inter", body: "Fira Code" },
    colors: {
      bg: "bg-[#fffbeb]",
      bgHex: "#fffbeb",
      ink: "text-[#78350f]",
      inkHex: "#78350f",
      accent: "text-[#d97706]",
      accentHex: "#d97706",
      muted: "#fef3c7"
    },
    visualMetaphor: "A physically packed field kit layout with pocket compartments.",
    scenes: [
      {
        id: 1,
        title: "Unpacking the Field Kit",
        lede: "Providing full architectural context is like packing a structured toolbox.",
        beats: [
          {
            id: 1,
            caption: "Tool Slot 1",
            title: "The Handoff Payload",
            body: "We bundle existing schemas, API endpoints, and critical non-goals directly inside the initial packet.",
            beatLine: "A complete toolbox leaves zero room for speculative guesses.",
            action: "drop payload",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Tool Slot 2",
            title: "The Context Checklist",
            body: "A strict ledger of technical debt markers and dependencies is packaged for the compiler.",
            beatLine: "Dependencies are marked clearly to avoid accidental side-effects.",
            action: "secure boundaries",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Tool Slot 3",
            title: "Verification Key",
            body: "We insert automatic linter rules and localized test suites into the kit to verify edits in real time.",
            beatLine: "Every tool in the kit is verified and ready for deployment.",
            action: "lock briefcase",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "Deploying the Packaged Kit",
        lede: "How the compiler unpacks and executes the context payload.",
        beats: [
          {
            id: 1,
            caption: "Deployment A",
            title: "Extraction protocol",
            body: "The compiler extracts the context payload, verifying directory paths and write boundaries.",
            beatLine: "Path verification prevents rogue writes outside workspace.",
            action: "unpack files",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Deployment B",
            title: "Incremental dry-run",
            body: "Edits are applied as virtual file buffers, leaving physical files untouched.",
            beatLine: "Dry-runs ensure the system compiles before modifying disk.",
            action: "run dry-run",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Deployment C",
            title: "Atomic commit",
            body: "Once verified, buffers flush to disk atomically, preserving git history.",
            beatLine: "Atomic commits keep changes safe and clean.",
            action: "commit changes",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "06",
    name: "Blackboard Chalk Talk",
    density: "low",
    densityLabel: "Minimal Keynote",
    theme: "The First Principles of Quantum Computing",
    typography: { header: "Caveat", body: "Fira Code" },
    colors: {
      bg: "bg-[#1e2923]",
      bgHex: "#1e2923",
      ink: "text-white",
      inkHex: "#ffffff",
      accent: "text-[#fef08a]",
      accentHex: "#fef08a",
      green: "#a7f3d0"
    },
    visualMetaphor: "Chalk-drawn vector lines, formulas, equations, and rough blackboard grids.",
    scenes: [
      {
        id: 1,
        title: "First Principles: Superposition",
        lede: "Qubits do not exist in binary 0 or 1; they span a continuous phase sphere.",
        beats: [
          {
            id: 1,
            caption: "Observation A",
            title: "The Wavefunction state |Ψ⟩",
            body: "A qubit's physical state is a vector pointing from center to Bloch Sphere surface, combining α|0⟩ + β|1⟩.",
            beatLine: "Information is continuous until physical measurement occurs.",
            action: "sketch wavefunction",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Observation B",
            title: "Phase interference paths",
            body: "Quantum compile gates rotate vectors. Positive and negative interference peaks shape correct outcomes.",
            beatLine: "Rotations are exact geometrical coordinates in phase space.",
            action: "draw interference",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Observation C",
            title: "Coherence measurement decay",
            body: "Touching the qubit collapses its wavefunction. We must compute in absolute isolation.",
            beatLine: "The blackboard of computation stays isolated until final read.",
            action: "highlight decay",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "Entanglement & Bell States",
        lede: "Linking two distinct physical qubits into a single shared wave system.",
        beats: [
          {
            id: 1,
            caption: "Entangle A",
            title: "The CNOT gate overlay",
            body: "We apply a controlled-NOT gate, binding the target qubit state to the control's phase.",
            beatLine: "State coupling creates absolute coordinate correlation.",
            action: "sketch coupling",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Entangle B",
            title: "Spooky correlation checks",
            body: "Measuring Qubit 1 instantly collapses Qubit 2, even if physical distance is infinite.",
            beatLine: "Correlation is absolute, bypassing classical boundaries.",
            action: "draw bell state",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Entangle C",
            title: "The composite state vector",
            body: "The two separate vectors merge into a single four-dimensional coordinate state.",
            beatLine: "Entangled systems are computationally inseparable.",
            action: "shade matrix",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "07",
    name: "Arcade Boss Fight",
    density: "low",
    densityLabel: "Minimal Keynote",
    theme: "Legacy Codebase Refactoring Boss",
    typography: { header: "VT323", body: "Fira Code" },
    colors: {
      bg: "bg-black",
      bgHex: "#000000",
      ink: "text-white",
      inkHex: "#ffffff",
      accent: "text-red-500",
      accentHex: "#ef4444",
      green: "#22c55e",
      yellow: "#eab308"
    },
    visualMetaphor: "Retro 8-bit game console interface, HP bars, flashing damage screens.",
    scenes: [
      {
        id: 1,
        title: "Legacy Codebase Boss Fight!",
        lede: "A giant monolithic controller blocks the production release pipeline. 👾",
        beats: [
          {
            id: 1,
            caption: "Encounter",
            title: "Monolithic file appears!",
            body: "15,000 lines of spaghetti code, undocumented imports, and global mutable state variables! HP: 100%. 🛑",
            beatLine: "Warning: entering unstable code legacy territory.",
            action: "encounter boss",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Attack Phase",
            title: "Cast AST Refactor Spell!",
            body: "Decomposing monolithic logic into isolated, pure pure functions with separate states. Boss HP: 45%! 💥",
            beatLine: "Refactoring hits legacy dependencies with critical damage.",
            action: "attack boss",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Victory",
            title: "Legacy Boss Defeated!",
            body: "Spaghetti code cleaned, unit tests passing. File squashed into 3 small, modular components! 🏆",
            beatLine: "Refactoring complete! Codebase health: 100%.",
            action: "defeat boss",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "The Dependency Dungeon",
        lede: "Venture deep into the transitive dependency caves where nested bugs hide. 🕸️",
        beats: [
          {
            id: 1,
            caption: "Dungeon I",
            title: "Circular import trap!",
            body: "Module A imports Module B which imports Module A! Execution hangs indefinitely in a loop. 🌀",
            beatLine: "Circular dependencies lock up execution engines.",
            action: "reveal trap",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Dungeon II",
            title: "Inject interface shield!",
            body: "Placing a shared interface contract between them to decouple direct imports. HP: 30%. 🛡️",
            beatLine: "Shielding contracts resolve dependency loops instantly.",
            action: "shield loop",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Dungeon Clean",
            title: "Circular Loop Cleared!",
            body: "Decoupled modules compile cleanly in parallel, reducing cold start boot times by 65%. 🚀",
            beatLine: "Dungeon cleared! Clean compilation path unlocked.",
            action: "clear dungeon",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "08",
    name: "Spotlight Quote Poster",
    density: "low",
    densityLabel: "Minimal Keynote",
    theme: "The Philosophy of Clean Code",
    typography: { header: "Playfair Display", body: "Inter" },
    colors: {
      bg: "bg-[#08080a] radial-gradient",
      bgHex: "#08080a",
      ink: "text-white",
      inkHex: "#ffffff",
      accent: "text-teal-400",
      accentHex: "#0d9488",
      muted: "#1f2937"
    },
    visualMetaphor: "Overhead breathing spotlight radial gradients illuminating quotes.",
    scenes: [
      {
        id: 1,
        title: "The Essence of Clean Syntax",
        lede: "Elegant software is not merely working code; it is explicit context frozen in time.",
        beats: [
          {
            id: 1,
            caption: "Thesis I",
            title: "Code is for humans to read",
            body: "Computers only care about machine instructions. Code exists for human minds to grasp.",
            beatLine: "If a human teammate struggles to read it, the software is incomplete.",
            action: "fade quote",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Thesis II",
            title: "Intent must be explicit",
            body: "Never hide assumptions behind clever hacks. Write obvious code, even if it is longer.",
            beatLine: "Clever code is a seed for future regression bugs.",
            action: "focus spotlight",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Thesis III",
            title: "Clean context is sustainable",
            body: "Software maintains itself when context is easy to parse, allowing seamless, modular evolution.",
            beatLine: "Maintainability is the only true engineering metric.",
            action: "accentuate text",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "The Decay of Hidden State",
        lede: "Implicit mutable states are the quiet destroyers of system architectures.",
        beats: [
          {
            id: 1,
            caption: "Antithesis I",
            title: "Shared mutable state is poison",
            body: "When far-away modules modify the same state, system execution becomes non-deterministic.",
            beatLine: "Determinism is lost when side-effects go unmarked.",
            action: "dim spotlight",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Antithesis II",
            title: "Isolate mutations strictly",
            body: "Consequences must be localized. Keep mutations wrapped in transactional boundaries.",
            beatLine: "Isolation prevents localized failures from collapsing systems.",
            action: "aim laser",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Synthesis",
            title: "Pure functional cores",
            body: "Isolate complex logic inside stateless functions, and push IO side-effects to the extreme shell.",
            beatLine: "A pure core is simple to test, simple to trace, and simple to trust.",
            action: "glow center",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "09",
    name: "Signal Pipeline Flow",
    density: "med",
    densityLabel: "Balanced Hybrid",
    theme: "CI/CD Compilation Pipeline",
    typography: { header: "Fira Code", body: "Inter" },
    colors: {
      bg: "bg-[#0b0f19]",
      bgHex: "#0b0f19",
      ink: "text-slate-100",
      inkHex: "#f1f5f9",
      accent: "text-cyan-400",
      accentHex: "#06b6d4",
      green: "#10b981"
    },
    visualMetaphor: "Assembly line tracks, flashing compilation gates, sliding packets.",
    scenes: [
      {
        id: 1,
        title: "Static Verification Assembly Line",
        lede: "Tracing the path of code verification before deployment.",
        beats: [
          {
            id: 1,
            caption: "Stage 01",
            title: "Lexical scan & linter gate",
            body: "Source lines pass through lexical analysers. Syntax anomalies are flagged before build initialization.",
            beatLine: "Linter rules prevent compilation of non-standard structures.",
            action: "pulse gateway 1",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Stage 02",
            title: "AST validation & type check",
            body: "Code is mapped into an abstract syntax tree. Types are checked against strict interfaces.",
            beatLine: "Type integrity guarantees runtime security boundaries.",
            action: "pulse gateway 2",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Stage 03",
            title: "Bundled compiler emission",
            body: "Files compress into atomic static chunks, optimizing network distribution profiles.",
            beatLine: "Compilation completes, emitting safe deployment assets.",
            action: "glow success",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "Automated Integration Ledger",
        lede: "Verifying binary compatibility across isolated integration lanes.",
        beats: [
          {
            id: 1,
            caption: "Integration A",
            title: "Spinning worker sandboxes",
            body: "Isolated test runtimes boot up inside micro-containers, mirroring production environments.",
            beatLine: "Containers guarantee test isolation and repeatability.",
            action: "boot sandbox",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Integration B",
            title: "Transitive contract sweep",
            body: "E2E scripts mock request payloads, sweeping through database and cache boundaries.",
            beatLine: "Contracts check out, ensuring api-level backward compatibility.",
            action: "run contracts",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Integration C",
            title: "Canary routing trigger",
            body: "The new binary loads onto 2% of live nodes, monitoring system latencies.",
            beatLine: "Canary signals confirm production-grade compatibility.",
            action: "deploy canary",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "10",
    name: "Mechanical Scoring Funnel",
    density: "med",
    densityLabel: "Balanced Hybrid",
    theme: "AST-Based Code Refactoring Sieve",
    typography: { header: "Inter", body: "Fira Code" },
    colors: {
      bg: "bg-[#f0f4f8]",
      bgHex: "#f0f4f8",
      ink: "text-blue-950",
      inkHex: "#1e3a8a",
      accent: "text-orange-500",
      accentHex: "#f97316",
      muted: "#64748b"
    },
    visualMetaphor: "Blueprint grid layout showing raw, messy files sifted into AST formats.",
    scenes: [
      {
        id: 1,
        title: "Sifting Structural Syntax",
        lede: "Analyzing and filtering raw text buffers into formal AST trees.",
        beats: [
          {
            id: 1,
            caption: "Funnel Step 1",
            title: "Raw code ingestion",
            body: "Input buffers containing white spaces, comments, and untyped parameters are fed into the parser.",
            beatLine: "Ingestion captures raw inputs before semantic analysis.",
            action: "drop syntax blocks",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Funnel Step 2",
            title: "Tokenization sieve",
            body: "The parser strips noise, extracting valid lexical keywords and identifier nodes.",
            beatLine: "Sifting discards literal text noise, leaving raw tokens.",
            action: "sift tokens",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Funnel Step 3",
            title: "AST Tree compilation",
            body: "Tokens link into a strict nested parent-child tree, prepared for code generators.",
            beatLine: "Compiled AST represent the mathematical structure of the code.",
            action: "emit ast tree",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "Filtering Malformed Patterns",
        lede: "Excluding hazardous syntactic patterns through the structural sieve.",
        beats: [
          {
            id: 1,
            caption: "Pattern Check A",
            title: "Deep nested conditional traps",
            body: "Identifying deeply nested if-else ladders that degrade code trace paths.",
            beatLine: "Deep ladders are flagged as cognitive maintenance hazards.",
            action: "flag nests",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Pattern Check B",
            title: "Guard clause conversion",
            body: "The sieve rewrites nesting structures into immediate, early exit guard clauses.",
            beatLine: "Guards reduce indentation depth and trace complexity.",
            action: "inject guards",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Pattern Check C",
            title: "Pure node output",
            body: "Sifted file emerges. Flattened structure compiles cleanly with zero cognitive debt.",
            beatLine: "Decoupled logic simplifies downstream compilation cycles.",
            action: "sieve output",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "11",
    name: "Collaborative Pairing Board",
    density: "med",
    densityLabel: "Balanced Hybrid",
    theme: "Human-AI Pair Programming Workflow",
    typography: { header: "Inter", body: "Fira Code" },
    colors: {
      bg: "bg-[#f8fafc]",
      bgHex: "#f8fafc",
      ink: "text-[#1e293b]",
      inkHex: "#1e293b",
      teal: "#0f766e",
      indigo: "#4f46e5"
    },
    visualMetaphor: "Split panes, sliding active cursors, human/AI card boards.",
    scenes: [
      {
        id: 1,
        title: "Dividing Critical Tasks",
        lede: "Structuring collaboration loops where humans guide and AI compiles.",
        beats: [
          {
            id: 1,
            caption: "Human Pane",
            title: "Architectural goal setting",
            body: "Human specifies interface contracts, test files, and security parameters in the left pane.",
            beatLine: "Human guides the direction, defining safe execution boundaries.",
            action: "highlight human",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "AI Pane",
            title: "Automated implementation",
            body: "AI reads contracts and writes unit implementation files, filling definitions in the right pane.",
            beatLine: "AI accelerates development, automating low-level code generation.",
            action: "slide cursor to ai",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Merge Point",
            title: "Review & integration",
            body: "Both inputs reconcile in the center board. Automatic test runs confirm schema alignment.",
            beatLine: "Integration combines human strategy with AI implementation speed.",
            action: "merge panes",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "Synchronous Debug Protocol",
        lede: "Resolving runtime failures through rapid pairing exchanges.",
        beats: [
          {
            id: 1,
            caption: "Debug Step 1",
            title: "Trace dump review",
            body: "Human highlights a failing stack trace. Cursors lock to the throwing line in Pane 1.",
            beatLine: "Throwing stack traces point directly to failing system state.",
            action: "lock cursor",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Debug Step 2",
            title: "Exploration drafts",
            body: "AI explores three potential edge-case fixes in Pane 2, displaying diff options.",
            beatLine: "Exploration narrows the fix space in seconds.",
            action: "draft fixes",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Debug Clear",
            title: "Test suite green light",
            body: "Fix is accepted and applied. Playwright checks clear on live headless browsers.",
            beatLine: "Safe, conversational debugging ends with solid test approval.",
            action: "reconcile board",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "12",
    name: "Studio Mixing Console",
    density: "med",
    densityLabel: "Balanced Hybrid",
    theme: "LLM Hyperparameter Fine-Tuning",
    typography: { header: "Fira Code", body: "Inter" },
    colors: {
      bg: "bg-[#111827]",
      bgHex: "#111827",
      ink: "text-[#f9fafb]",
      inkHex: "#f9fafb",
      red: "#ef4444",
      green: "#10b981"
    },
    visualMetaphor: "Metal console mixers, parameter faders sliding up, active level LED indicators.",
    scenes: [
      {
        id: 1,
        title: "Tuning the Response Envelope",
        lede: "Sliding hyper-parameters to sculpt the LLM output profile.",
        beats: [
          {
            id: 1,
            caption: "Fader 01",
            title: "Lowering Temperature lock",
            body: "Slider descends to 0.2, locking output generation to deterministic paths and rigid syntax schemas.",
            beatLine: "Low temperature ensures predictable code structural emission.",
            action: "slide temperature",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Fader 02",
            title: "Calibrating Top-P filters",
            body: "Top-P slider settles at 0.85, sifting the token probability pool to exclude fringe options.",
            beatLine: "Token filtering maintains language natural flows without hallucination.",
            action: "slide top-p",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Levels Peak",
            title: "Unlocking context channels",
            body: "Context window volume slides to peak levels. Dynamic LED meters flash green to verify stability.",
            beatLine: "Optimal parameter tuning creates a focused, high-precision code output.",
            action: "test frequency",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "Mitigating Token Distortion",
        lede: "Regulating attention weights to prevent sequence distortion over long runs.",
        beats: [
          {
            id: 1,
            caption: "Dial A",
            title: "Frequency penalty sweep",
            body: "Dialing penalty weights to 0.4 to prevent semantic loops and circular text repititions.",
            beatLine: "Penalties discourage redundant phrasing in generation runs.",
            action: "turn frequency",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Dial B",
            title: "Presence weight dampening",
            body: "Presence levels are balanced at 0.3, encouraging the model to introduce fresh topical ideas.",
            beatLine: "Presence controls direct the introduction of novel schema topics.",
            action: "turn presence",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Console Clean",
            title: "Output signals balanced",
            body: "Token drift remains under 0.05% error margin. Clean generation path stabilized.",
            beatLine: "Precision parameters guarantee reproducible language outputs.",
            action: "balance master",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "13",
    name: "Subway Map of Intent",
    density: "med",
    densityLabel: "Balanced Hybrid",
    theme: "The Lifecycle of a Distributed Request",
    typography: { header: "Inter", body: "Fira Code" },
    colors: {
      bg: "bg-[#f1f5f9]",
      bgHex: "#f1f5f9",
      ink: "text-[#0f172a]",
      inkHex: "#0f172a",
      red: "#ef4444",
      blue: "#3b82f6"
    },
    visualMetaphor: "Transit map pathways, crossing stations, routing request nodes.",
    scenes: [
      {
        id: 1,
        title: "Routing the Client Transit",
        lede: "Tracing the metropolitan path of request payloads through service layers.",
        beats: [
          {
            id: 1,
            caption: "Transit Line 1",
            title: "API gateway authentication",
            body: "Client request enters the red auth line, verifying tokens before routing to service domains.",
            beatLine: "Authentication occurs at outer boundaries to shield inner nodes.",
            action: "pulse gateway node",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Transit Line 2",
            title: "Distributed cache lookup",
            body: "Request switches to the blue database line, querying local caches to bypass hot database reads.",
            beatLine: "Cache lookups resolve hot requests in less than 3ms.",
            action: "route to cache",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Terminal Station",
            title: "Database node entry",
            body: "Payload reaches the database cluster. Reconciliations commit safely within a transaction boundary.",
            beatLine: "Distributed paths converge safely at isolated transaction nodes.",
            action: "commit terminal",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "The Fault-Tolerance Redirection",
        lede: "How requests reroute dynamically when downstream database nodes fail.",
        beats: [
          {
            id: 1,
            caption: "Fault A",
            title: "Primary node lockout",
            body: "Primary database database fails to respond. Service triggers emergency detour protocol.",
            beatLine: "Node lockouts prompt immediate automated network routing shift.",
            action: "lock primary",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Fault B",
            title: "Read replica redirection",
            body: "Read-only traffic reroutes onto fallback replicas along the green backup track.",
            beatLine: "Detours keep customer reads functional during cluster failover.",
            action: "route fallback",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Fault Cleared",
            title: "Health index normalized",
            body: "Primary node re-registers on gateway lines. System routes resume normal traffic profiles.",
            beatLine: "Failover loops protect user uptime with zero request drops.",
            action: "normalize route",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "14",
    name: "Kitchen Prep Station",
    density: "med",
    densityLabel: "Balanced Hybrid",
    theme: "Raw Text Pre-processing & Tokenization",
    typography: { header: "Inter", body: "Fira Code" },
    colors: {
      bg: "bg-[#fff7ed]",
      bgHex: "#fff7ed",
      ink: "text-[#ea580c]",
      inkHex: "#ea580c",
      green: "#10b981",
      brown: "#7c2d12"
    },
    visualMetaphor: "Chef chopping board, designated prep zones, bouncing ingredient cards.",
    scenes: [
      {
        id: 1,
        title: "Chopping Raw Text Inputs",
        lede: "Cleaning, stripping, and slicing textual ingredients before modeling.",
        beats: [
          {
            id: 1,
            caption: "Prep Zone 1",
            title: "Noise stripping & washing",
            body: "HTML tags, special symbols, and redundant punctuation are washed and stripped from the raw input.",
            beatLine: "Stripping leaves only clean semantic words on the board.",
            action: "strip raw inputs",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Prep Zone 2",
            title: "Sentence slicing",
            body: "Paragraphs slice cleanly into individual text strings along punctuation boundaries.",
            beatLine: "Slicing segment arrays simplifies sub-sequence mapping.",
            action: "slice strings",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Prep Plated",
            title: "Token array plating",
            body: "Normalized words convert into numerical token arrays, fully prepped for model embeddings.",
            beatLine: "Plated token arrays are structured and ready for compilation.",
            action: "plate token array",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "Ingredient Stemming & Packing",
        lede: "Grouping word variations into their baseline roots.",
        beats: [
          {
            id: 1,
            caption: "Stem A",
            title: "Stripping word suffixes",
            body: "Trimming variations like 'coding', 'codes', and 'coded' back to their root root 'code'.",
            beatLine: "Suffix removal compacts the vocabulary size by 40%.",
            action: "trim suffixes",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Stem B",
            title: "Stop-word filter bin",
            body: "Discarding filler words like 'the', 'is', and 'at' into the discard compost bucket.",
            beatLine: "Filtering reserves token capacity for heavy content words.",
            action: "filter filler",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Stem Plated",
            title: "Plating compact vocabulary",
            body: "Only core, high-value tokens are passed onto model attention layers.",
            beatLine: "Compact inputs minimize attention layer calculation overhead.",
            action: "plate clean tokens",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "15",
    name: "Context Bento Box",
    density: "med",
    densityLabel: "Balanced Hybrid",
    theme: "Modern AI Agent Platform Architecture",
    typography: { header: "Inter", body: "Fira Code" },
    colors: {
      bg: "bg-[#1c1917]",
      bgHex: "#1c1917",
      ink: "text-[#fafaf9]",
      inkHex: "#fafaf9",
      accent: "text-[#d97706]",
      accentHex: "#d97706",
      blue: "#2563eb"
    },
    visualMetaphor: "Lacquer compartment boxes, rounded bento boundaries, 3D flip panels.",
    scenes: [
      {
        id: 1,
        title: "Compartmentalizing Agent Context",
        lede: "Dividing agent capabilities into rigid, isolated memory compartments.",
        beats: [
          {
            id: 1,
            caption: "Box Area 1",
            title: "Long-term semantic memory",
            body: "A dedicated lacquer compartment storing vector embeddings of previous documentation.",
            beatLine: "Vector indexing resolves matching context in under 12ms.",
            action: "flip memory bento",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Box Area 2",
            title: "Dynamic tools registry",
            body: "An isolated runtime compartment containing system execute scripts and API interfaces.",
            beatLine: "Tool access is rate-limited to preserve system boundaries.",
            action: "flip tool bento",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Bento Pack",
            title: "Orchestration core module",
            body: "The central compartment manages attention weighting, coordinating memory and tools safely.",
            beatLine: "Compartmentalization guarantees safe and predictable agent execution.",
            action: "flip orchestrator",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "Securing Execution Isolation",
        lede: "Preventing privilege escalation within agent tool execution layers.",
        beats: [
          {
            id: 1,
            caption: "Safety Bento A",
            title: "Sandboxed file operations",
            body: "Tool writes are restricted to a temporary workspace directory, isolated from system paths.",
            beatLine: "Sandbox bounds prevent accidental host file modification.",
            action: "lock workspace",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Safety Bento B",
            title: "Restricted shell boundaries",
            body: "Interactive bash processes are blocked. Only whitelisted CLI parameters can execute.",
            beatLine: "Command blocking neutralizes potential command injection paths.",
            action: "whitelist cli",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Safety Bento Pack",
            title: "Audit ledger compliance",
            body: "Every command executed is logged dynamically in an immutable bento ledger box.",
            beatLine: "Exhaustive audits ensure post-execution verification traces.",
            action: "seal audit bento",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "16",
    name: "Debug Reaction Board",
    density: "med",
    densityLabel: "Balanced Hybrid",
    theme: "Microservices Health Self-Check",
    typography: { header: "Fira Code", body: "Inter" },
    colors: {
      bg: "bg-[#020617]",
      bgHex: "#020617",
      ink: "text-[#f8fafc]",
      inkHex: "#f8fafc",
      green: "#10b981",
      red: "#ef4444"
    },
    visualMetaphor: "Terminal debug console, health status circles, typing print logging.",
    scenes: [
      {
        id: 1,
        title: "Diagnosing Database Exhaustion",
        lede: "Self-healing loops detecting and recovering connection failures dynamically.",
        beats: [
          {
            id: 1,
            caption: "Diagnosis I",
            title: "Alert: pool capacity peak",
            body: "Live connection pool hits 98% capacity. Database response times spike past 1500ms.",
            beatLine: "Immediate intervention required to prevent microservice collapse.",
            action: "alert error status",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Diagnosis II",
            title: "Trigger: circuit breaker open",
            body: "System activates the circuit breaker, blocking downstream read queries and routing traffic to cache.",
            beatLine: "Breakers prevent downstream databases from cascading offline.",
            action: "trigger breaker",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Diagnosis Clean",
            title: "Recovery: connection scale-up",
            body: "The engine purges zombie connections and boots 2 extra pool lanes. Response latency drops to 12ms.",
            beatLine: "Self-healing checks restored stable platform metrics dynamically.",
            action: "verify recovery",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "Mitigating Memory Leak Runaways",
        lede: "Isolating heap bloating inside running node containers.",
        beats: [
          {
            id: 1,
            caption: "Heap I",
            title: "Memory leak detected",
            body: "Container memory grows linearly past 85% safety margins, trigger warning lines.",
            beatLine: "Heap leaks prompt automated cluster restart diagnostics.",
            action: "flag memory leak",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Heap II",
            title: "Dynamic memory heapdump",
            body: "Sieving core memory channels to locate retention roots without shutting down the cluster.",
            beatLine: "Live diagnostics identify allocation leaks in 2 seconds.",
            action: "take heapdump",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Heap Cleared",
            title: "Automated container recycle",
            body: "Traffic gracefully drains from container, followed by recycle. Memory footprint returns to baseline.",
            beatLine: "Active recycle prevents production-wide system out-of-memory crashes.",
            action: "recycle container",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "17",
    name: "Research Memo",
    density: "high",
    densityLabel: "Text Report",
    theme: "Impact of Latency on Mobile User Retention",
    typography: { header: "Cormorant Garamond", body: "Inter" },
    colors: {
      bg: "bg-[#faf9f5]",
      bgHex: "#faf9f5",
      ink: "text-neutral-900",
      inkHex: "#111111",
      accent: "text-red-900",
      accentHex: "#7f1d1d",
      gray: "#4b5563"
    },
    visualMetaphor: "Classical publication paper layout, rigid margins, burgundy accents.",
    scenes: [
      {
        id: 1,
        title: "Latency-Induced Retention Decay",
        lede: "Quantitative analysis of mobile bounce rates across varied latency baselines.",
        beats: [
          {
            id: 1,
            caption: "Section 1.1",
            title: "The sub-second threshold",
            body: "Our longitudinal study confirms user bounce rates increase by 12% for every 100ms of latency past the initial 400ms threshold.",
            beatLine: "Cognitive expectation on mobile is set to immediate, sub-second responses.",
            action: "load column 1",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Section 1.2",
            title: "Transactional abandoning bounds",
            body: "Once transaction latencies cross 1800ms, cart abandonment spikes past 62%, heavily impacting checkouts.",
            beatLine: "Operational friction directly compounds financial checkout drop-offs.",
            action: "load column 2",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Section 1.3",
            title: "Retrospective optimization rules",
            body: "By implementing client-side speculative rendering, we recover up to 45% of potentially abandoned checkouts.",
            beatLine: "Speculative loading offsets network delays, securing customer retention.",
            action: "draw chart data",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "Network Jitter Degradation",
        lede: "Analyzing packet-loss drop-offs across mobile cellular connections.",
        beats: [
          {
            id: 1,
            caption: "Section 2.1",
            title: "The cellular packet decay",
            body: "Cellular drop-outs disrupt persistent TCP connections, triggering expensive socket handshake restarts.",
            beatLine: "Socket negotiation adds up to 1200ms of overhead past standard latency.",
            action: "plot jitter baseline",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Section 2.2",
            title: "QUIC Protocol mitigation",
            body: "Transitioning socket pipes to QUIC removes head-of-line blocking, preserving logical streams during brief packet loss.",
            beatLine: "QUIC maintains connection continuity across cell tower handoffs.",
            action: "apply quic rules",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Section 2.3",
            title: "Fidelity analysis report",
            body: "Platform telemetry reports a 70% decrease in network-related drop-offs post QUIC transition.",
            beatLine: "Protocol modernization directly safeguards transaction consistency.",
            action: "emit summary memo",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "18",
    name: "Maintainer Issue Brief",
    density: "high",
    densityLabel: "Text Report",
    theme: "Post-Mortem: Connection Pool Exhaustion",
    typography: { header: "Inter", body: "Fira Code" },
    colors: {
      bg: "bg-[#f6f8fa]",
      bgHex: "#f6f8fa",
      ink: "text-slate-900",
      inkHex: "#0f172a",
      green: "#1a7f37",
      purple: "#8250df"
    },
    visualMetaphor: "GitHub issue thread borders, badge indicators, code markdown blocks.",
    scenes: [
      {
        id: 1,
        title: "Issue #1409: Connection Leak Brief",
        lede: "Root-cause tracking of anomalous database lockups during scaling sweeps.",
        beats: [
          {
            id: 1,
            caption: "Opened",
            title: "Database connection leak detected",
            body: "Telemetry reports connection pool exhaustion. Zombie connections remain unclosed after transaction completion.",
            beatLine: "Leaked connections permanently lock pool capacity, blocking active requests.",
            action: "open issue log",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Diagnostic",
            title: "Missing finally block isolated",
            body: "Code review reveals nested error branches return immediately, bypassing standard socket release scripts.",
            beatLine: "Early function returns must still guarantee resource disposal loops.",
            action: "reveal code segment",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Merged",
            title: "Explicit try-finally release applied",
            body: "Added global wrapping to guarantee socket disposal on all exception branches. Thread locked.",
            beatLine: "Defensive coding ensures system resource stability across failure states.",
            action: "merge pull request",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "Issue #1412: Unindexed Query Scan",
        lede: "Remediating production table scans dragging database read metrics.",
        beats: [
          {
            id: 1,
            caption: "Opened II",
            title: "Alert: slow query scan",
            body: "User lookup queries perform full-table sequential sweeps, taking past 1200ms per scan.",
            beatLine: "Sequential table scans scale linearly with user directory growth.",
            action: "load query thread",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Diagnostic II",
            title: "Missing composited composite index",
            body: "Schema inspection confirms search indices are missing on composite search fields.",
            beatLine: "Indices are mandatory to bound search complexity to logarithmic bounds.",
            action: "display index gap",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Merged II",
            title: "Composite B-Tree index deployed",
            body: "Index written. Lookups complete in less than 2ms. Sequential table scans neutralized.",
            beatLine: "B-Tree indexation guarantees sub-millisecond lookup scales.",
            action: "apply indexes",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "19",
    name: "Decision Record (ADR)",
    density: "high",
    densityLabel: "Text Report",
    theme: "ADR 009: SQLite for Offline-First Sync",
    typography: { header: "Inter", body: "Fira Code" },
    colors: {
      bg: "bg-[#f8fafc]",
      bgHex: "#f8fafc",
      ink: "text-slate-900",
      inkHex: "#0f172a",
      green: "#15803d",
      muted: "#64748b"
    },
    visualMetaphor: "Rigid corporate decision records, metadata columns, approved stamps.",
    scenes: [
      {
        id: 1,
        title: "ADR 009: Local Database Selection",
        lede: "Evaluating local storage solutions to support high-speed offline syncing.",
        beats: [
          {
            id: 1,
            caption: "Metadata",
            title: "Evaluating local storage bounds",
            body: "We compare IndexedDB, SQLite WASM, and localStorage for durability, space constraints, and transaction latency.",
            beatLine: "Local database durability directly limits client-side transaction safety.",
            action: "load adr metadata",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Rationale",
            title: "Why SQLite WASM wins",
            body: "SQLite WASM offers strict ACID guarantees, SQL query expressiveness, and superior write speeds past 50MB.",
            beatLine: "ACID transactions protect database consistency during unexpected browser crashes.",
            action: "expand decision log",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Approved",
            title: "SQLite WASM selected as standard",
            body: "Approved. All local-first modules must execute transactions through the unified SQLite driver.",
            beatLine: "Standardization prevents engine fragmentation across client-side modules.",
            action: "apply green stamp",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "ADR 010: Cache Eviction Rules",
        lede: "Establishing strict bounds to govern local disk space utilization.",
        beats: [
          {
            id: 1,
            caption: "Metadata II",
            title: "Evaluating storage bloat",
            body: "Client database bloat risks browser-level quota lockout on mobile devices.",
            beatLine: "Quota constraints mandate progressive ledger pruning routines.",
            action: "load cache adr",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Rationale II",
            title: "LRU with time-to-live pruning",
            body: "We apply Least Recently Used algorithms, evicting local files past 30 days old unless flagged.",
            beatLine: "Eviction rules balance local offline availability with space constraints.",
            action: "inject eviction rule",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Approved II",
            title: "LRU standard approved",
            body: "Pruning worker integrated. Local storage footprints are capped at 100MB per device.",
            beatLine: "Limits safeguard client-side database stability across low-tier devices.",
            action: "stamp adr 10",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "20",
    name: "Benchmark Matrix",
    density: "high",
    densityLabel: "Text Report",
    theme: "Edge LLM Performance Comparison",
    typography: { header: "Inter", body: "Fira Code" },
    colors: {
      bg: "bg-white",
      bgHex: "#ffffff",
      ink: "text-slate-900",
      inkHex: "#0f172a",
      blue: "#3b82f6",
      muted: "#64748b"
    },
    visualMetaphor: "Numeric tables, performance comparison bars scaling from left.",
    scenes: [
      {
        id: 1,
        title: "Edge LLM Compile Benchmark",
        lede: "Compiling code tokens per second across light parameters.",
        beats: [
          {
            id: 1,
            caption: "Table Baseline",
            title: "Parameters and testing conditions",
            body: "We establish a standard benchmark run: 1,500 code tokens, 4bit quantization, running on local hardware.",
            beatLine: "Consistent metrics require unified hardware and context parameters.",
            action: "render table grid",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Execution Sweep",
            title: "Model A: Speed vs Accuracy",
            body: "Model A clocks 45 tokens per second. Code compiler accuracy stays at 94.2% in tests.",
            beatLine: "Speed must not compromise code correctness boundaries.",
            action: "scale model-a bars",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Analysis",
            title: "Model B: High accuracy champion",
            body: "Model B achieves 98.9% compiler accuracy, while executing at a steady 32 tokens per second.",
            beatLine: "For compilation pipelines, accuracy margins override speed metrics.",
            action: "scale model-b bars",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "Cold Boot Latency Comparison",
        lede: "Measuring startup time spikes across edge browser runtimes.",
        beats: [
          {
            id: 1,
            caption: "Table II Baseline",
            title: "Boot scenario specifications",
            body: "Measuring initial WASM execution delays after deep browser cache clears.",
            beatLine: "Cold starts dictate user-visible delay bounds.",
            action: "render boot grid",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Sweep II",
            title: "Chrome vs Safari engines",
            body: "Chrome handles WASM startup in 180ms. Safari completes the execution in 320ms.",
            beatLine: "Engine differences reflect compilation optimizations.",
            action: "draw engine bars",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Analysis II",
            title: "Baseline optimization rules",
            body: "By pre-compiling bytecode in worker threads, we compress cold boot latencies to 45ms.",
            beatLine: "Worker caching decouples startup costs from main thread loops.",
            action: "highlight winning engine",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "21",
    name: "Field Notes Report",
    density: "high",
    densityLabel: "Text Report",
    theme: "Smart Home UX Field Research",
    typography: { header: "Playfair Display", body: "Inter" },
    colors: {
      bg: "bg-[#fdfbf7]",
      bgHex: "#fdfbf7",
      ink: "text-[#333333]",
      inkHex: "#333333",
      teal: "#0d9488",
      clay: "#78716c"
    },
    visualMetaphor: "Ledger-ruled margins,qualitative notes, tilted paper clip tags.",
    scenes: [
      {
        id: 1,
        title: "Smart Home UX: Field Study",
        lede: "Qualitative research observing device integration behavior in rural areas.",
        beats: [
          {
            id: 1,
            caption: "Observation 1",
            title: "The physical wall switch barrier",
            body: "Users consistently bypass voice and app controls, reaching for physical wall switches out of muscle memory.",
            beatLine: "Software habits fail when they run contrary to physical muscle memory.",
            action: "note switch barrier",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Observation 2",
            title: "Jargon-induced connection anxiety",
            body: "Technical error logs like 'SSID handshake failed' trigger user anxiety and immediate device disconnects.",
            beatLine: "Technical jargon must be wrapped in empathetic fallback copy.",
            action: "note connection anxiety",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Synthesis Note",
            title: "Designing for continuous trust",
            body: "Integrate physical switches into the local wireless mesh, keeping manual toggle loops functional.",
            beatLine: "Human-centric design honors muscle memory before introducing automation.",
            action: "fasten paperclip tag",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "Multi-User Smart Conflict",
        lede: "Observing friction when multiple family members control devices simultaneously.",
        beats: [
          {
            id: 1,
            caption: "Conflict 1",
            title: "Command battle loops",
            body: "One user dims the lighting via voice, while another raises it via app, causing state oscillation.",
            beatLine: "Concurrent inputs require explicit priority lock layers.",
            action: "note battle loops",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Conflict 2",
            title: "Isolating priority profiles",
            body: "Establishing contextual rules where local manual triggers override transient remote app commands.",
            beatLine: "Physical manual inputs represent high-priority intent boundaries.",
            action: "note priority profile",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Conflict Solution",
            title: "Consensus-based control state",
            body: "Applying decay windows to command inputs to smooth state oscillation curves.",
            beatLine: "Smooth state shifts prevent jarring physical lighting oscillations.",
            action: "clip conflict note",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "22",
    name: "Operating Manual",
    density: "high",
    densityLabel: "Text Report",
    theme: "Database Connection Pool Recovery Runbook",
    typography: { header: "Fira Code", body: "Inter" },
    colors: {
      bg: "bg-neutral-900",
      bgHex: "#111827",
      ink: "text-white",
      inkHex: "#ffffff",
      yellow: "#eab308",
      gray: "#9ca3af"
    },
    visualMetaphor: "Industrial warning borders, yellow checklists, high-contrast console terminals.",
    scenes: [
      {
        id: 1,
        title: "Runbook: Pool Capacity Recovery",
        lede: "Standard recovery procedures for connection pool lockouts on production clusters.",
        beats: [
          {
            id: 1,
            caption: "Step 01",
            title: "Check current cluster metrics",
            body: "Execute diagnostic scripts to identify active connection counts and target database latencies.",
            beatLine: "Never proceed to edits before compiling baseline metrics.",
            action: "load warning border",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Step 02",
            title: "Force-terminate zombie queries",
            body: "Identify and terminate long-running queries exceeding 30 seconds to release database lock constraints.",
            beatLine: "Terminating zombie threads releases immediate capacity past safe margins.",
            action: "check action 1",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Step 03",
            title: "Verify health stabilization",
            body: "Re-run monitoring checkmarks. Verify connection metrics drop back beneath 65% capacity.",
            beatLine: "Incident is resolved once metrics stay stable for 15 minutes.",
            action: "check action 2",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "Runbook: Shard Replica Recovery",
        lede: "Rerouting traffic from a degraded database shard to replica nodes safely.",
        beats: [
          {
            id: 1,
            caption: "Shard 01",
            title: "Identify localized shard failure",
            body: "Pinpoint which specific database partition is throwing 500 socket timeout exceptions.",
            beatLine: "Isolating failures prevents broad cascading database shutdowns.",
            action: "check shard fault",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Shard 02",
            title: "Execute traffic detour switch",
            body: "Modify active routing rules to direct reads from the failed partition onto the shard replica.",
            beatLine: "Rerouting routes read traffic safely away from hot crash zones.",
            action: "toggle partition switch",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Shard Clear",
            title: "Verify replication consistency",
            body: "Execute transaction checksum audits across nodes. Confirm 100% database consistency.",
            beatLine: "Audits prevent silent database desyncs post traffic recovery.",
            action: "confirm shard sync",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "23",
    name: "Checklist Ledger",
    density: "high",
    densityLabel: "Text Report",
    theme: "Handoff Readiness Release Ledger",
    typography: { header: "Inter", body: "Fira Code" },
    colors: {
      bg: "bg-[#f4fbf7]",
      bgHex: "#f4fbf7",
      ink: "text-[#111c16]",
      inkHex: "#111c16",
      green: "#16a34a",
      blue: "#60a5fa"
    },
    visualMetaphor: "Accounting ledgers, light green horizontal lines, compliance checkboxes.",
    scenes: [
      {
        id: 1,
        title: "Engineering Release Ledger",
        lede: "Verifying compliance criteria before merging new modules to production.",
        beats: [
          {
            id: 1,
            caption: "Ledger 1.1",
            title: "Unit test coverage index",
            body: "Ensure code coverage meets the mandatory 85% index. Verify all critical branches have unit tests.",
            beatLine: "Coverage prevents code regressions during upstream migrations.",
            action: "assert coverage",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Ledger 1.2",
            title: "Security schema audit",
            body: "Verify user inputs are sanitized, environment credentials are secure, and SQL scans clear.",
            beatLine: "Compliance checks are necessary to shield databases from injection risks.",
            action: "audit security",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Ledger Clean",
            title: "Release candidate signed off",
            body: "All checklist rows checked. The ledger is signed and cleared for production deployment.",
            beatLine: "Clean ledgers guarantee solid, low-risk deployment pipelines.",
            action: "sign release ledger",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "Telemetry Compliance Checklist",
        lede: "Verifying monitoring hooks are integrated before cluster scaling runs.",
        beats: [
          {
            id: 1,
            caption: "Telemetry 2.1",
            title: "Metric counter hook check",
            body: "Confirm standard counter hooks are bound to transaction endpoints.",
            beatLine: "Metric counters trace transaction volume indexes dynamically.",
            action: "check metrics",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Telemetry 2.2",
            title: "Dynamic trace spans binding",
            body: "Verify trace identifiers propagate through service lines for correlation logs.",
            beatLine: "Trace spans isolate latent service bottlenecks in production.",
            action: "check trace bindings",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Telemetry Clear",
            title: "Telemetry audit complete",
            body: "Every monitoring box clears. Deployment telemetry ledger signed and closed.",
            beatLine: "A monitored platform is a safe and verifiable production system.",
            action: "close telemetry ledger",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  },
  {
    id: "24",
    name: "Annotated Source & Diff",
    density: "high",
    densityLabel: "Text Report",
    theme: "Query Optimization: Full Table Scan Elimination",
    typography: { header: "Fira Code", body: "Inter" },
    colors: {
      bg: "bg-[#0f141c]",
      bgHex: "#0f141c",
      ink: "text-[#e0e4e6]",
      inkHex: "#e0e4e6",
      green: "#1a5c2d",
      red: "#5c2429"
    },
    visualMetaphor: "IDE code stage, color-coded syntax lines, crimson deletions, green insertions.",
    scenes: [
      {
        id: 1,
        title: "Refactoring Database Queries",
        lede: "Replacing sequential full-table scans with high-speed indexed lookups.",
        beats: [
          {
            id: 1,
            caption: "Original",
            title: "The sequential search query",
            body: "The original query executes sequential table scans to lookup records, blocking database threads.",
            beatLine: "Full scans scale linearly, creating performance bottlenecks as databases expand.",
            action: "load source code",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Refactor",
            title: "Stripping raw lookup loops",
            body: "We strip out sequential loops and unindexed lookup filters from the database query wrapper.",
            beatLine: "Redundant lookup loops are deleted to free query threads.",
            action: "highlight deletions",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Optimized",
            title: "Inserting index constraint parameters",
            body: "We inject indexed search constraints. Query execution drops from 1200ms to sub-millisecond ranges.",
            beatLine: "Indexed lookups scale logarithmically, ensuring stable database queries.",
            action: "inject insertions",
            visualData: { stage: 3 }
          }
        ]
      },
      {
        id: 2,
        title: "Decoupling API Thread Blocks",
        lede: "Refactoring database connection requests to non-blocking asynchronous calls.",
        beats: [
          {
            id: 1,
            caption: "Original II",
            title: "Blocking synchronous request",
            body: "The API thread blocks synchronously, waiting for database responses before accepting new connections.",
            beatLine: "Blocking calls freeze the request thread, capping overall capacity.",
            action: "load synch code",
            visualData: { stage: 1 }
          },
          {
            id: 2,
            caption: "Refactor II",
            title: "Removing blocking thread joins",
            body: "We delete blocking thread joins and synchronous wait loops from the request chain.",
            beatLine: "Synchronous wait code is removed to restore thread capacity.",
            action: "highlight blocking deletions",
            visualData: { stage: 2 }
          },
          {
            id: 3,
            caption: "Optimized II",
            title: "Asynchronous task execution",
            body: "Applying async-await and non-blocking callback channels. API handles 10x concurrent volumes.",
            beatLine: "Asynchronous lookups prevent resource starvation under load.",
            action: "inject async insertions",
            visualData: { stage: 3 }
          }
        ]
      }
    ]
  }
];

export function findStyle(id) {
  return STYLES.find((style) => style.id === id) || STYLES[0];
}

export function clampBeat(style, sceneId, beat) {
  const scene = style.scenes.find((s) => s.id === sceneId) || style.scenes[0];
  return Math.max(0, Math.min(scene.beats.length - 1, Number.isFinite(beat) ? beat : 0));
}
