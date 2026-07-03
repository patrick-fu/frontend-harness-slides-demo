# Codebase Context & Dynamic Matrix Progress Sync

## Current Development Phase: pristine Structural Skeleton Integration

### External App Status:
* **Repository Path**: local workbench source checkout
* **Vercel Project Parameters**: Org `team_S7GN5L46Bwzack0vJJhp1aU2`, Project `prj_QDVnnwCG0KnfW5QELTvhmV0nWQw9`
* **Local dev port**: `127.0.0.1:5173`
* **E2E Testing Suite**: Playwright configured and 100% passing.

---

## 1. Dynamic Matrix Architecture (The 5-Scene Blueprint)

Each presentation style preset is mapped to exactly **5 progressive scenes** (Scene 1 to 5), representing a gradient step in content density:
1. **Scene 1 (Ultralight)**: Single giant center node / statement. Extreme whitespace.
2. **Scene 2 (Light)**: Balanced dual-comparisons / left-right panels.
3. **Scene 3 (Standard)**: 3-step connected workflows or stacked columns.
4. **Scene 4 (Dense)**: 2x2 grid quadrants or 4-channel parameter sliders.
5. **Scene 5 (Extreme Density)**: Full Bento grids,三线 tables, or color-coded code diff blocks with annotations.

---

## 2. Motion Partition Strategy

Three motion tiers govern the visual experience across style groups:

### Tier A: Keynote & Narrative (Styles 01-08)
* **Feel**: Kinetic, organic, highly engaging.
* **Effects**: Continuously rotating orbits, physical sticky note float, dialogue bubble shakes, heavy kinetic drops with motion blurs, chalk wiggles, and HP damage flashing.
* **Transition**: Elements on Beat updates scale down (`scale-95 blur-[0.5px] opacity-40`) and drift, allowing newly introduced nodes to trigger physical bounce wiggles.

### Tier B: Hybrid & Flow timelines (Styles 09-16)
* **Feel**: Precise, mechanical, feedback-driven.
* **Effects**: Laser line tracing, fader slide animations, neon pipeline pulses, automated filter drops.
* **Transition**: Precise sliding transitions along horizontal or vertical slot paths.

### Tier C: Text & Bento Reports
* **Feel**: Rigidly editorial, print-grade.
* **Effects**: Magic Move shape translations, ultra-restrained vertical translation fades, scale-X line disclosures.
* **Transition**: Absolutely zero bounces, shakes, or wiggles. Smooth alpha-fades and simple translations to keep reading completely undisturbed.

---

## 3. Immediate Implementation Steps
1. **Default View**: Initialize the landing page directly in `grid` view mode (Grid Catalog).
2. **Layout Maximization**: Remove border boxes, extra padding, and margins surrounding the 16:9 thumbnail previews in Grid View, making cards stretch edge-to-edge for maximum visual density.
3. **Skeleton Data Generation**: Populate `src/data/stylesData.js` with structured style configs, each housing 5 scenes with 3 beats.
4. **SubAgent Parallelization**: Launch concurrent subagents to implement specialized rendering logic across the three style tiers.
