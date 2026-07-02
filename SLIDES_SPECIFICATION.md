# Frontend Harness Slides Design System — 24-Style Specification Manifesto

This document serves as the absolute source of truth and authoritative design specification for the **Frontend Harness Slides Design System**, cataloging all **24 presentation styles** across three density tiers. 

This spec documents the design philosophy, typography, exact color palettes, specific visual metaphors, progressive storytelling mechanics, and step-by-step beat progressions that govern our slide deck system. Use this as a blueprint for implementing, refactoring, or extending the deck engine.

---

## Part 1: Core Design Philosophy & The Scene-Beat Model

Traditional presentation tools suffer from "slide thrashing" — hard-cutting from slide to slide, forcing the audience's brain to re-parse the physical layout of the screen. Our system resolves this with the **"Constant Stage, State Transition"** model, structured around **Scenes** and **Beats**:

### 1. The Stage (The Physical Canvas)
* The slide stage is constrained to a strict **16:9 responsive aspect ratio** utilizing **CSS Container Query units (`cqw` and `cqh`)** for fluid, scaling typography and spacing.
* The stage background, typography, borders, and grid layers must remain completely stable within a Scene. 

### 2. The Scene / Sync (The Constant Canvas)
* A **Scene** (also referred to as a **Sync**) represents a unified conceptual chapter. It establishes the physical backdrop and coordinates a set of elements that belong on stage together.
* There are typically two Scenes per style:
  1. **Scene 1: Principles & Core Concept** (Abstract, architectural, conceptual foundations).
  2. **Scene 2: Handoff & Execution** (Tactical, concrete, code-level or data-flow realities).

### 3. The Beat (The Progressive State Transition)
* Within a single Scene, storytelling unfolds in **Beats** (typically Beats 1, 2, and 3) *without replacing the stage*.
* **Element Constancy**: Every element required for the final peak state is already mounted in the DOM at **Beat 1** (or hidden with zero-width/opacity, ready to transition).
* **Progressive Revelation**:
  * **Beat 1**: The first element transitions on stage. Main header is bright. Subsequent slots are hidden.
  * **Beat 2**: The first element fades and scales down to background state (`opacity-45 scale-95` with blur and saturation reduction). The connector arrow transitions on stage, followed by the second element.
  * **Beat 3**: The second element joins the background state. The second connector and the third card transition to the spotlight state.
* **Match Move Motion**: Transitions are driven by GPU-accelerated CSS properties (`transform`, `opacity`, `filter`). Keyframe entrance animations only run on their *entering* beat.

---

## Part 2: The Three Density Tiers Spec

Slide hierarchy is organized into three density tiers. Each tier matches a specific speaker-to-audience relationship and content density profile:

```
+------------------------------------------------------------------------------------------+
| 🟢 Speaker-Led (Low Density)   | 🟡 Balanced Hybrid (Med Density) | 🔵 Text Report (High Density) |
| Styles 01 - 08                 | Styles 09 - 16                  | Styles 17 - 24               |
| Presenter is the narrator.     | Reader & Speaker handoff.       | Self-reading reports.        |
| Gorgeous, themed, elastic,     | Controlled flow pipelines,      | Restrained editorial layout, |
| physical, rotating, shaking.   | faders, and route grids.        | bento partitions, diffs.     |
+------------------------------------------------------------------------------------------+
```

### 1. Speaker-Led / Keynote Opener (Low Density)
* **Goal**: Maximize focus on the speaker's spoken word. Typography is oversized and beautiful. Extremely wide whitespace.
* **Structure**: A bold center stage consisting of exactly **three semantic steps** (cards) bridged by **directional arrows**.
* **Visual Style**: Highly themed metaphors (pixel arcade blocks, sticky notes, blackboard formulas, hand-packed field kits).
* **Animation Character**: Kinetic, physical, organic, slightly playful but structured. Uses bouncy spring physics, wiggles, nodding heads, and spotlight pulses.

### 2. Balanced Hybrid / Flow Timeline (Medium Density)
* **Goal**: Explain logical pipelines, architectural lifecycles, and configuration balancing. Highly informative yet visually structured.
* **Structure**: Custom process flow diagrams, pipeline lanes, mixing console faders, convergent subway maps, and modular compartments.
* **Visual Style**: Analytical, technical, schematics-like, and blueprint-adjacent.
* **Animation Character**: Controlled, mechanical, flow-guidance feedback. Data packets gliding down tracks, glowing neon state indicators, faders sliding upwards sequentially.

### 3. Text Report / Bento Grid (High Density)
* **Goal**: Deliver exhaustive information for asynchronous reading decks, engineering post-mortems, comparison metrics, or checklist ledgers.
* **Structure**: Multi-column bento grids, tabular comparisons, structured markdown memo lines, warning stripe runbooks, code diff blocks.
* **Visual Style**: Editorial, authoritative, administrative, publication-grade.
* **Animation Character**: Extremely restrained. Uses layout-preserving Magic Move transitions and subtle translation fades. Strictly zero bouncing or wiggling.

---

## Part 3: Architectural Specs for the 24 Styles

Below is the exhaustive catalog of all 24 Styles. Each section defines the exact typography, color palettes, visual metaphors, and behavioral recommendations for each style.

---

### TIER 1: SPEAKER-LED / LOW DENSITY (Styles 01 – 08)

#### Style 01: Minimal Product Keynote
* **Theme/Topic**: Quantum Compiler Architecture
* **Visual Metaphor**: Deep-space quantum matrix with extreme whitespace, massive typography, and a single, high-fidelity central Bloch Sphere or orbit glyph.
* **Color Palette**:
  * `Canvas Bg`: `#f5f5f7` (Soft Light Gray) / `#09090b` (Deep Space Dark)
  * `Primary Ink`: `#1d1d1f` (Charcoal Black) / `#f5f5f7` (Titanium)
  * `Accent`: `#86868b` (Platinum Gray)
* **Typography**: `Playfair Display` (Classic Serif headers) paired with `Inter` (Neo-grotesque sans-serif body).
* **Entrance Animation**: `.animate-rotate-slow` (Smooth 20s continuous linear rotation on Bloch Sphere orbits) combined with `.animate-spring-scale` (Smooth scale bounce `cubic-bezier(0.34, 1.56, 0.64, 1)` on first card).
* **Personality**: Quiet confidence. Extremely sparse, premium, and focused.

#### Style 02: Sketch Board Emoji
* **Theme/Topic**: Offline-First Sync Engine Design
* **Visual Metaphor**: Physical brainstorming workshop board with hand-drawn vector lines, paper card grids, tape textures, and active emoji actors.
* **Color Palette**:
  * `Canvas Bg`: `#fcfbf7` (Alabaster Paper)
  * `Primary Ink`: `#2d2722` (Charcoal Crayon)
  * `Sticky Yellow`: `#fef08a` (Post-it Yellow)
  * `Sticky Blue`: `#bfdbfe` (Post-it Blue)
  * `Sticky Pink`: `#fecaca` (Post-it Pink)
* **Typography**: `Caveat` (Warm handwriting font) paired with `Inter` (clean body sans).
* **Entrance Animation**: `.animate-float-sticky-1` / `-2` (Alternating physical 4s sine-wave float with 2-to-3 degree tilt) + `.animate-wiggle-nod` (Playful wiggling on emoji icons).
* **Personality**: Human, approachable, collaborative, workshop-first.

#### Style 03: Interactive Dialogue Stage
* **Theme/Topic**: Human-Agent Collaboration Handshake
* **Visual Metaphor**: Tiny, dark theater stage or terminal chat log where dialogue bubbles representing two roles are physically staged.
* **Color Palette**:
  * `Canvas Bg`: `#0f172a` (Slate Navy)
  * `Primary Ink`: `#f1f5f9` (Ghost White)
  * `Agent Teal`: `#0d9488` (Vibrant Teal)
  * `Muted Slate`: `#64748b` (Slate Gray)
* **Typography**: `Fira Code` (Monospace console lines) paired with `Inter` (sans).
* **Entrance Animation**: `.animate-wiggle-nod` (When the active speaking bubble is triggered, it shakes slightly to mimic human speech impact).
* **Personality**: Dramatic, dialogic, narrative, highly memorable.

#### Style 04: Kinetic Type Punchline
* **Theme/Topic**: The Death of Boilerplate Code
* **Visual Metaphor**: High-energy, loud graphic poster using stacked, giant typographic blocks, struck-through words, and aggressive contrast.
* **Color Palette**:
  * `Canvas Bg`: `#000000` (Aggressive Pitch Black)
  * `Primary Ink`: `#ffffff` (Solid White)
  * `Accent Yellow`: `#facc15` (Caution Yellow)
  * `Muted Steel`: `#475569` (Steel)
* **Typography**: `Inter` (Set to Extra Bold, tightly tracked) paired with `Fira Code`.
* **Entrance Animation**: `.animate-kinetic-punch` (Heavy scale impact `scale(0.3) -> scale(1.05) -> scale(1)` with temporary motion blur) + `.animate-mechanical-shake` (Physical glitch shockwave upon card load).
* **Personality**: Loud, direct, uncompromising, highly punchy.

#### Style 05: Object Metaphor Hero
* **Theme/Topic**: The Context-Driven Handoff Kit
* **Visual Metaphor**: A physically packed field kit or backpack layout with compartmentalized slots carrying tactile visual items.
* **Color Palette**:
  * `Canvas Bg`: `#fffbeb` (Cream Amber)
  * `Primary Ink`: `#78350f` (Deep Mahogany)
  * `Accent Gold`: `#d97706` (Goldenrod)
  * `Muted Sand`: `#fef3c7` (Soft Sand)
* **Typography**: `Inter` paired with `Fira Code`.
* **Entrance Animation**: `.animate-bounce-jump` (Tactile spring drop where elements slam down and settle back, simulating falling into physical pockets).
* **Personality**: Tactile, organic, friendly, structured.

#### Style 06: Blackboard Chalk Talk
* **Theme/Topic**: The First Principles of Quantum Computing
* **Visual Metaphor**: High-school physics blackboard with hand-drawn chalk linework, algebraic formulas, and rough borders.
* **Color Palette**:
  * `Canvas Bg`: `#1e2923` (Dark Green Blackboard)
  * `Primary Chalk`: `#ffffff` (White Chalk)
  * `Chalk Yellow`: `#fef08a` (Yellow Chalk)
  * `Chalk Green`: `#a7f3d0` (Mint Chalk)
* **Typography**: `Caveat` (Chalk handwriting) paired with `Fira Code`.
* **Entrance Animation**: `.animate-chalk-wobble` (Persistent subtle 0.4s micro-wobble of white vectors to mimic hand-drawn vibration) + `stroke-dashoffset` chalk writing simulation.
* **Personality**: Educational, fundamental, slow-paced, reasoning-first.

#### Style 07: Arcade Boss Fight
* **Theme/Topic**: Legacy Codebase Refactoring Boss
* **Visual Metaphor**: Retro 8-bit arcade game console where code refactoring is staged as an active boss encounter complete with HP bars and power-ups.
* **Color Palette**:
  * `Canvas Bg`: `#000000` (Pure Arcade Black)
  * `Primary Ink`: `#ffffff` (Retro White)
  * `HP Red`: `#ef4444` (Vibrant Damage Red)
  * `AST Green`: `#22c55e` (Retro Green)
  * `Power Yellow`: `#eab308` (Mana Yellow)
* **Typography**: `VT323` (8-Bit Pixel Font) paired with `Fira Code`.
* **Entrance Animation**: `.animate-damage-flash` (At Beat 3 peak attack, the screen and cards invert colors and flash 4 times) + `.animate-screen-shake` (Aggressive 0.35s screen-quake simulation).
* **Personality**: Playful, nostalgic, gamified, engaging.

#### Style 08: Spotlight Quote Poster
* **Theme/Topic**: The Philosophy of Clean Code
* **Visual Metaphor**: Minimal theater stage with a deep dark radial spotlight centered on a single, massive, elegant quote.
* **Color Palette**:
  * `Canvas Bg`: `#08080a` (Vantablack radial gradient)
  * `Primary Ink`: `#ffffff` (Pure Light)
  * `Accent Teal`: `#0d9488` (Teal Light)
  * `Shadow Slate`: `#1f2937` (Dark Space)
* **Typography**: `Playfair Display Italic` (Gorgeous, sweeping serif) paired with `Inter`.
* **Entrance Animation**: `.animate-spotlight` (Slow, 4s smooth breathing pulsation `scale(1) -> scale(1.05)` of the radial gradient mask simulating a swinging overhead spotlight).
* **Personality**: Dramatic, theatrical, deep, philosophical.

---

### TIER 2: BALANCED HYBRID / MEDIUM DENSITY (Styles 09 – 16)

#### Style 09: Signal Pipeline Flow
* **Theme/Topic**: CI/CD Compilation Pipeline
* **Visual Metaphor**: Horizontal compilation assembly line with precise connecting tracks, flashing gateways, and floating data packets.
* **Color Palette**:
  * `Canvas Bg`: `#0b0f19` (Deep Cyber Space)
  * `Primary Ink`: `#f1f5f9` (White Light)
  * `Neon Cyan`: `#06b6d4` (Signal Blue)
  * `Success Green`: `#10b981` (Pipeline Success)
* **Typography**: `Fira Code` paired with `Inter`.
* **Entrance Animation**: `.animate-pipeline-pulse` (Steady 2s neon breathing halo on compilation gates) with sequential column slides.
* **Personality**: Logical, systematic, technical, automated.

#### Style 10: Mechanical Scoring Funnel
* **Theme/Topic**: AST-Based Code Refactoring Sieve
* **Visual Metaphor**: An engineering sieve or blueprint grid layout showing raw, messy syntax structures filtered into structured AST formats.
* **Color Palette**:
  * `Canvas Bg`: `#f0f4f8` (Soft Technical Gray)
  * `Primary Ink`: `#1e3a8a` (Industrial Navy)
  * `Accent Orange`: `#f97316` (Rust Orange)
  * `Muted Steel`: `#64748b` (Steel)
* **Typography**: `Inter` paired with `Fira Code`.
* **Entrance Animation**: `gravity-drop` (Sieve items sliding down along vertical blueprint vectors) + sequential stage activation.
* **Personality**: Blueprint-oriented, precise, filtering-focused.

#### Style 11: Collaborative Pairing Board
* **Theme/Topic**: Human-AI Pair Programming Workflow
* **Visual Metaphor**: Split-pane virtual pair-programming board with dual active column cursors and clean dashboard cards showing division of tasks.
* **Color Palette**:
  * `Canvas Bg`: `#f8fafc` (Off-white Board)
  * `Primary Ink`: `#1e293b` (Deep Slate)
  * `Human Teal`: `#0f766e` (Forest Teal)
  * `AI Indigo`: `#4f46e5` (Deep Indigo)
* **Typography**: `Inter` paired with `Fira Code`.
* **Entrance Animation**: `cursor-slide` (Visual cursor indicator sliding horizontally to highlight who is performing the current task) + card transitions.
* **Personality**: Structured, task-focused, collaborative.

#### Style 12: Studio Mixing Console
* **Theme/Topic**: LLM Hyperparameter Fine-Tuning
* **Visual Metaphor**: Dark-brushed physical soundboard mixer where model parameters (temperature, Top-P, tokens) are mapped to physical sliders and level meters.
* **Color Palette**:
  * `Canvas Bg`: `#111827` (Brushed Metal)
  * `Primary Ink`: `#f9fafb` (Light Console Text)
  * `Meter Red`: `#ef4444` (Vibrant Peak LED)
  * `Meter Green`: `#10b981` (Vibrant Signal LED)
* **Typography**: `Fira Code` paired with `Inter`.
* **Entrance Animation**: `.animate-fader-slide` (Sliders gliding upwards smoothly `translateY(8cqh) -> translateY(0)` to reach their target value upon beat activation).
* **Personality**: Tactile, dial-focused, granular, professional.

#### Style 13: Subway Map of Intent
* **Theme/Topic**: The Lifecycle of a Distributed Request
* **Visual Metaphor**: Connected metropolitan transit line map showing path crossings, transfer stations, and request packets routing across boundaries.
* **Color Palette**:
  * `Canvas Bg`: `#f1f5f9` (Map Background)
  * `Primary Ink`: `#0f172a` (Deep Charcoal)
  * `Red Line`: `#ef4444` (Auth Path)
  * `Blue Line`: `#3b82f6` (Database Path)
* **Typography**: `Inter` paired with `Fira Code`.
* **Entrance Animation**: `.animate-laser-pulse` (Packet glow tracing along transit pathways `offset-distance` continuous loop).
* **Personality**: Systematic, public-infrastructure style, connected.

#### Style 14: Kitchen Prep Station
* **Theme/Topic**: Raw Text Pre-processing & Tokenization
* **Visual Metaphor**: Clean chef chopping board with designated zones for incoming raw files (uncut), processed phrases, and plated token arrays.
* **Color Palette**:
  * `Canvas Bg`: `#fff7ed` (Warm Wood Prep Board)
  * `Primary Ink`: `#ea580c` (Sienna Orange)
  * `Success Green`: `#10b981` (Fresh Mint)
  * `Muted Brown`: `#7c2d12` (Chestnut)
* **Typography**: `Inter` paired with `Fira Code`.
* **Entrance Animation**: `.animate-bounce-jump` (Tactile bounce on ingredients cards) + sliding chopping board divider transitions.
* **Personality**: Friendly, process-oriented, comforting.

#### Style 15: Context Bento Box
* **Theme/Topic**: Modern AI Agent Platform Architecture
* **Visual Metaphor**: Traditional modular lacquer compartment boxes with distinct padding, round corners, and highlighted headers.
* **Color Palette**:
  * `Canvas Bg`: `#1c1917` (Deep Lacquer Matte Black)
  * `Primary Ink`: `#fafaf9` (Bone White)
  * `Accent Orange`: `#d97706` (Bento Amber)
  * `System Blue`: `#2563eb` (Indigo Bento)
* **Typography**: `Inter` paired with `Fira Code`.
* **Entrance Animation**: `.animate-3d-flip` (3D Y-axis card flip `perspective(800px) rotateY(-90deg) -> rotateY(0)` for bento partitions upon activation).
* **Personality**: Modular, premium, highly compartmentalized.

#### Style 16: Debug Reaction Board
* **Theme/Topic**: Microservices Health Self-Check
* **Visual Metaphor**: Terminal debug console layered with active reaction tags, glowing health circles, and live system log inputs.
* **Color Palette**:
  * `Canvas Bg`: `#020617` (Console Black)
  * `Primary Ink`: `#f8fafc` (Terminal Ghost)
  * `Ok Green`: `#10b981` (Sys Ok)
  * `Risk Red`: `#ef4444` (Sys Fail)
* **Typography**: `Fira Code` paired with `Inter`.
* **Entrance Animation**: `.animate-pipeline-pulse` (Pulse halo on risk items) + typewriter scrolling log prints.
* **Personality**: Factual, alerting, diagnostic, developer-first.

---

### TIER 3: TEXT REPORT / HIGH DENSITY (Styles 17 – 24)

#### Style 17: Research Memo
* **Theme/Topic**: Impact of Latency on Mobile User Retention
* **Visual Metaphor**: Classical academic publication paper layout with strict margin grids, fine rule dividers, and elegant, dense paragraphs.
* **Color Palette**:
  * `Canvas Bg`: `#faf9f5` (Aged Ivory Paper)
  * `Primary Ink`: `#111111` (Ink Black)
  * `Accent Red`: `#7f1d1d` (Burgundy)
  * `Body Gray`: `#4b5563` (Slate Gray)
* **Typography**: `Cormorant Garamond` (Sophisticated academic Serif) paired with `Inter` (neutral body text).
* **Entrance Animation**: `.animate-subtle-1` / `-2` (Ultra-restrained, smooth 0.9s translation fade, zero bounce).
* **Personality**: Academic, formal, authoritative, editorial.

#### Style 18: Maintainer Issue Brief
* **Theme/Topic**: Post-Mortem: Connection Pool Exhaustion
* **Visual Metaphor**: Crisp, technical web-based issue thread or pull-request brief with thin borders, status badges, and highlighted code segments.
* **Color Palette**:
  * `Canvas Bg`: `#f6f8fa` (GitHub-like Off-white)
  * `Primary Ink`: `#0f172a` (Deep Navy)
  * `Merge Green`: `#1a7f37` (Approved Green)
  * `Issue Purple`: `#8250df` (Brief Purple)
* **Typography**: `Inter` paired with `Fira Code`.
* **Entrance Animation**: `.animate-subtle-1` (Smooth list card slide-ins).
* **Personality**: Crisp, administrative, literal, engineering-centric.

#### Style 19: Decision Record (ADR)
* **Theme/Topic**: ADR 009: SQLite for Offline-First Sync
* **Visual Metaphor**: Rigid administrative standard record format, dominated by neat metadata blocks, status grids, and bold header tags.
* **Color Palette**:
  * `Canvas Bg`: `#f8fafc` (Administrative Ivory)
  * `Primary Ink`: `#0f172a` (Slate Navy)
  * `Accepted Green`: `#15803d` (Approved Green)
  * `Steel Gray`: `#64748b` (Muted Steel)
* **Typography**: `Inter` paired with `Fira Code`.
* **Entrance Animation**: Minimal vertical panel expansion.
* **Personality**: Formal, corporate-standard, authoritative, administrative.

#### Style 20: Benchmark Matrix
* **Theme/Topic**: Edge LLM Performance Comparison
* **Visual Metaphor**: Numeric grid matrix table with crisp internal borders, proportional bar visualizations, and precise alignment.
* **Color Palette**:
  * `Canvas Bg`: `#ffffff` (Pure White Page)
  * `Primary Ink`: `#0f172a` (Deep Slate)
  * `Bar Blue`: `#3b82f6` (Vibrant Blue)
  * `Muted Steel`: `#64748b` (Slate Steel)
* **Typography**: `Inter` paired with `Fira Code` (for numeric precision alignments).
* **Entrance Animation**: Horizontal width scaling of the performance bars (`scaleX(0) -> scaleX(1)` from left origin).
* **Personality**: Analytical, precise, mathematical, comparative.

#### Style 21: Field Notes Report
* **Theme/Topic**: Smart Home UX Field Research
* **Visual Metaphor**: Qualitative field researcher notebook with ledger-ruled margins, paper clip visual cards, and small annotation markers.
* **Color Palette**:
  * `Canvas Bg`: `#fdfbf7` (Recycled Ledger Paper)
  * `Primary Ink`: `#333333` (Charcoal Dust)
  * `Observer Teal`: `#0d9488` (Observation Accent)
  * `Muted Clay`: `#78716c` (Clay Clay)
* **Typography**: `Playfair Display` paired with `Inter`.
* **Entrance Animation**: `.animate-subtle-1` (Gentle rotation placement to simulate placing paper clips onto a paper binder).
* **Personality**: Human, qualitative, research-led, cozy.

#### Style 22: Operating Manual
* **Theme/Topic**: Database Connection Pool Recovery Runbook
* **Visual Metaphor**: High-visibility industrial warning binder with caution hazard stripes, terminal code prompts, and bold checklists.
* **Color Palette**:
  * `Canvas Bg`: `#111827` (Coal Gray)
  * `Primary Ink`: `#ffffff` (Solid White)
  * `Caution Yellow`: `#eab308` (Industrial Yellow)
  * `Muted Gray`: `#9ca3af` (Gray Gray)
* **Typography**: `Fira Code` paired with `Inter`.
* **Entrance Animation**: Sharp, instant sequential checkmark highlights and terminal output slide-ins.
* **Personality**: High-alert, practical, high-contrast, industrial.

#### Style 23: Checklist Ledger
* **Theme/Topic**: Handoff Readiness Release Ledger
* **Visual Metaphor**: Standard, boring finance checkbook ledger with thin green-tint accounting grid lines and crisp compliance checkmarks.
* **Color Palette**:
  * `Canvas Bg`: `#f4fbf7` (Tinted Accounting Ledger)
  * `Primary Ink`: `#111c16` (Deep Pine Forest)
  * `Compliance Green`: `#16a34a` (Compliance Emerald)
  * `Muted Leaf`: `#60a5fa` (Mint Gray)
* **Typography**: `Inter` paired with `Fira Code`.
* **Entrance Animation**: Minimal 0.3s checkmark scaling and horizontal stripe fade.
* **Personality**: Thorough, safe, risk-managed, administrative.

#### Style 24: Annotated Source & Diff
* **Theme/Topic**: Query Optimization: Full Table Scan Elimination
* **Visual Metaphor**: Highly detailed IDE code editor stage showing color-coded syntax highlights, side-by-side annotations, and deletion/insertion blocks.
* **Color Palette**:
  * `Canvas Bg`: `#0f141c` (Custom Editor Dark)
  * `Primary Ink`: `#e0e4e6` (IDE Slate)
  * `Insert Green`: `#1a5c2d` (Insertion Dark Green)
  * `Delete Red`: `#5c2429` (Deletion Crimson)
* **Typography**: `Fira Code` paired with `Inter`.
* **Entrance Animation**: Line-by-line syntax reveal and smooth code block transition swapping.
* **Personality**: Pure technical, developer-centric, detailed, literal.

---

## Part 4: Technical Blueprint — Scene & Beat State Table

This table maps out how Scenes (Syncs) and Beats translate to the low, medium, and high density rendering blocks inside our engine.

### 1. Scene Structure Template (Standard 3-Beat Flow)

Each style must adhere to this structured flow across its two scenes:

| Scene (Sync) | Density | Beat 1 State (Entry) | Beat 2 State (Expansion) | Beat 3 State (Peak / Action) |
| :--- | :--- | :--- | :--- | :--- |
| **Scene 1: Principles** | **Low** | Card 1 enters, highlighted. Headers bright. | Card 1 dimmed. Arrow 1 and Card 2 enter, highlighted. | Card 1 & 2 dimmed. Arrow 2 and Card 3 enter, highlighted with punchline. |
| | **Med** | Column 1 enters. Connectors idle. | Column 1 static. Column 2 enters. | Column 1 & 2 static. Column 3 enters (Active Peak). |
| | **High** | Section A (Main panel) enters. | Section B (Sub panels) enter. | Full grid populated with complete annotations. |
| **Scene 2: Execution** | **Low** | Task card 1 enters, highlighted. | Task card 1 dimmed. Task 2 enters, highlighted. | Task 1 & 2 dimmed. Task 3 enters, highlighted with release punchline. |
| | **Med** | Request node 1 highlights. | Request routes to node 2 (Pipeline flow). | Request completes at node 3 (LED glowing success). |
| | **High** | Core source file enters. | Deletion block highlighted. | Insertion block highlighted with compiler validation markers. |

---

## Part 5: Implementation Rules for Clean Start-Over

If we push to rewrite the application engineering, follow these **six strict architectural rules** to keep the codebase elegant and bug-free:

1. **Keep Raw Content Separate**: Keep all copy, text, visual HTML vectors, and theme meta isolated in pure JSON or ES module data files (`src/data/*.js`). Do not mix raw markup with React core layout.
2. **Never Recreate the Slide Canvas DOM**: The root `#slide-stage` and outer wrapper elements **must remain permanently mounted**. Changing Style, Scene, or Density must update CSS classes and data pointers in place to preserve GPU transition hooks.
3. **Condition-Based Animation Classes**: 
   * Apply entry keyframes (`.animate-fade-up`, `.animate-match-x`) *only* if the element's entrance index matches the current `beat`.
   * For elements belonging to historical beats, replace their entry animation classes with stable, static utility states (e.g. `opacity-45 scale-95`).
4. **Use Pure CSS Container Queries (`cqw` / `cqh`)**: Absolutely no JavaScript-based window resize listeners or state-heavy recalculations for resizing the 16:9 stage. All layouts must adapt automatically using CSS cq container specs.
5. **Enrich Chunks, Don't Rebuild**: To inject micro-animations (like rotating spheres or shaking monsters), use stable React component maps for low density, and precise string operations on SVG strings for high density.
6. **Ensure Total Testability**: Keep the entire workbench driveable via standard DOM properties. Maintain query hooks, data-testid attributes, and URL query structures (e.g., `?style=7&density=low&scene=1&beat=3`) so the Playwright test suite can sweep the catalog headless in less than 4 seconds.
