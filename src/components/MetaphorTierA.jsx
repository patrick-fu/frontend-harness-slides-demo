import React from "react";
import { 
  Cpu, Sparkles, ShieldCheck, HelpCircle, User, Bot, Terminal, Code, 
  Zap, Flame, Sword, Trophy, BookOpen, Heart, Lock, Unlock, FileText, 
  CheckSquare, Layers, Award, Compass, Sliders, Navigation, RefreshCw, 
  TrendingUp, Users, HardDrive, ArrowRight, Check, AlertTriangle, Play
} from "lucide-react";

/**
 * Helper to determine beat-based CSS classes for progressive revelation
 */
function getBeatClass(elementBeat, currentBeat) {
  if (currentBeat === elementBeat) {
    return "beat-element beat-element-active";
  } else if (currentBeat > elementBeat) {
    return "beat-element beat-element-historic";
  } else {
    return "beat-element beat-element-future";
  }
}

/**
 * MetaphorTierA
 * Handles Styles 01 - 08 (Keynote/Speaker-Led low density styles)
 * Animation profile: Highly dynamic, spring bounces, continuous rotations, wiggles.
 */
export function MetaphorTierA({ style, scene, beat, isThumbnail }) {
  const currentScene = style.scenes.find((s) => s.id === scene) || style.scenes[0];
  const density = currentScene.density;
  const finalClass = beat > 0 ? "opacity-100" : "opacity-85";

  switch (style.id) {
    // ==========================================
    // STYLE 01: MINIMAL PRODUCT KEYNOTE
    // ==========================================
    case "01": {
      // Theme: Quantum Compiler Architecture
      // Metaphor: Deep-space quantum matrix with central orbits.
      return (
        <div className={`relative w-full h-full flex items-center justify-center transition-all duration-500 transform ${finalClass}`}>
          {/* Scene 1: Principles & Core Concept (Ultralight - 1 giant central Bloch Sphere) */}
          {scene === 1 && (
            <div className="relative w-[28cqw] h-[28cqw] flex items-center justify-center">
              {/* Outer orbit rings */}
              <div className="absolute w-full h-full rounded-full border-2 border-dashed border-cyan-500/20 animate-rotate-slow" />
              <div className="absolute w-[85%] h-[85%] rounded-full border border-cyan-400/10 rotate-45" />
              
              {/* Central Bloch Sphere */}
              <div className={`rounded-full bg-radial from-cyan-400/25 to-transparent w-[20cqw] h-[20cqw] flex items-center justify-center border-2 border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.25)] transition-transform duration-500 ${beat >= 1 ? "scale-110" : ""}`}>
                <Cpu className={`w-[8cqw] h-[8cqw] text-cyan-400 transition-all duration-500 ${beat >= 2 ? "rotate-90 animate-pulse" : ""}`} />
              </div>
              
              {/* Quantum State Vectors */}
              {beat >= 1 && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg className="w-full h-full absolute animate-rotate-slow">
                    <line x1="50%" y1="50%" x2="50%" y2="10%" stroke="#22d3ee" strokeWidth="3" strokeDasharray="4 4" />
                    <circle cx="50%" cy="10%" r="6" fill="#22d3ee" className="animate-ping" />
                  </svg>
                </div>
              )}

              {/* Coherence status */}
              {beat >= 2 && (
                <div className="absolute bottom-[2cqh] font-mono text-[1.2cqw] text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30 animate-pulse">
                  |Ψ⟩ Coherent Lock Achieved
                </div>
              )}
            </div>
          )}

          {/* Scene 2: Handoff & Execution (Light - Symmetrical A/B layout: Qubits vs Classical) */}
          {scene === 2 && (
            <div className="grid grid-cols-2 gap-[4cqw] w-full max-w-[40cqw] items-center relative">
              {/* Pane A: Qubit Source */}
              <div className={`border-2 border-cyan-500/30 bg-cyan-950/10 p-[2cqw] rounded-2xl flex flex-col items-center gap-[1cqw] text-center shadow-[0_0_20px_rgba(6,182,212,0.1)] ${getBeatClass(0, beat)}`}>
                <Cpu className="w-[4cqw] h-[4cqw] text-cyan-400 animate-pulse" />
                <span className="font-mono text-[1.2cqw] text-cyan-300 font-bold">QUBIT STATE</span>
                <p className="text-[1cqw] opacity-75">Superposed |Ψ⟩ register</p>
              </div>

              {/* Connection Line */}
              {beat >= 1 && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[6cqw] h-0.5 border-t-2 border-dashed border-cyan-400/40 z-0" />
              )}

              {/* Pane B: Classical Target */}
              <div className={`border-2 border-zinc-700 bg-zinc-900/50 p-[2cqw] rounded-2xl flex flex-col items-center gap-[1cqw] text-center ${getBeatClass(1, beat)}`}>
                <Terminal className="w-[4cqw] h-[4cqw] text-zinc-400" />
                <span className="font-mono text-[1.2cqw] text-zinc-300 font-bold">CLASSICAL REGISTER</span>
                <p className="text-[1cqw] opacity-75">Decohered bit ledger</p>
              </div>

              {/* Reconciliation Status */}
              {beat >= 2 && (
                <div className="col-span-2 mx-auto mt-[2cqh] font-mono text-[1.1cqw] text-cyan-400 bg-cyan-950/80 px-4 py-1.5 rounded-xl border border-cyan-500/40 animate-pulse flex items-center gap-2">
                  <ShieldCheck className="w-[1.4cqw] h-[1.4cqw]" />
                  <span>100% Decoherence Calibration Verified</span>
                </div>
              )}
            </div>
          )}

          {/* Scene 3: Connected Pipeline Stream (Standard - 3 connected stages) */}
          {scene === 3 && (
            <div className="flex items-center justify-between w-full max-w-[45cqw] relative">
              {/* Stage 1: Ingestion */}
              <div className={`border-2 border-cyan-500/20 bg-cyan-950/10 p-[1.5cqw] rounded-xl flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md ${getBeatClass(0, beat)}`}>
                <div className="w-[3cqw] h-[3cqw] rounded-full bg-cyan-950 border border-cyan-500 flex items-center justify-center font-mono text-cyan-400 text-[1.2cqw]">1</div>
                <span className="font-mono text-[1cqw] font-bold text-cyan-300">INGEST</span>
                <p className="text-[0.8cqw] opacity-70">Parse AST</p>
              </div>

              {/* Arrow 1 */}
              <div className={`flex-1 h-0.5 border-t-2 border-dashed border-cyan-500/30 mx-2 transition-opacity duration-500 ${beat >= 1 ? "opacity-100" : "opacity-0"}`} />

              {/* Stage 2: Compilation */}
              <div className={`border-2 border-cyan-500/20 bg-cyan-950/10 p-[1.5cqw] rounded-xl flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md ${getBeatClass(1, beat)}`}>
                <div className="w-[3cqw] h-[3cqw] rounded-full bg-cyan-950 border border-cyan-500 flex items-center justify-center font-mono text-cyan-400 text-[1.2cqw]">2</div>
                <span className="font-mono text-[1cqw] font-bold text-cyan-300">COMPILE</span>
                <p className="text-[0.8cqw] opacity-70">H-Gate Map</p>
              </div>

              {/* Arrow 2 */}
              <div className={`flex-1 h-0.5 border-t-2 border-dashed border-cyan-500/30 mx-2 transition-opacity duration-500 ${beat >= 2 ? "opacity-100" : "opacity-0"}`} />

              {/* Stage 3: Emission */}
              <div className={`border-2 border-emerald-500/30 bg-emerald-950/10 p-[1.5cqw] rounded-xl flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md ${getBeatClass(2, beat)}`}>
                <div className="w-[3cqw] h-[3cqw] rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center font-mono text-emerald-400 text-[1.2cqw]">3</div>
                <span className="font-mono text-[1cqw] font-bold text-emerald-300">EMIT</span>
                <p className="text-[0.8cqw] opacity-70">Quantum Payload</p>
              </div>
            </div>
          )}

          {/* Scene 4: Quadrant Matrix Analysis (Dense - 2x2 grid quadrants) */}
          {scene === 4 && (
            <div className="grid grid-cols-2 gap-[1.5cqw] w-full max-w-[40cqw]">
              <div className={`border border-cyan-500/20 bg-cyan-950/5 p-[1.5cqw] rounded-xl flex flex-col gap-1 ${getBeatClass(0, beat)}`}>
                <span className="font-mono text-[1cqw] text-cyan-400 font-black">Q1: COHERENCE</span>
                <p className="text-[0.9cqw] opacity-80">Maintaining quantum state alignment above 99.8% threshold.</p>
              </div>
              <div className={`border border-cyan-500/20 bg-cyan-950/5 p-[1.5cqw] rounded-xl flex flex-col gap-1 ${getBeatClass(1, beat)}`}>
                <span className="font-mono text-[1cqw] text-cyan-400 font-black">Q2: FIDELITY</span>
                <p className="text-[0.9cqw] opacity-80">Gate operation precision mapping across physical registers.</p>
              </div>
              <div className={`border border-cyan-500/20 bg-cyan-950/5 p-[1.5cqw] rounded-xl flex flex-col gap-1 ${getBeatClass(2, beat)}`}>
                <span className="font-mono text-[1cqw] text-cyan-400 font-black">Q3: ERROR MITIGATION</span>
                <p className="text-[0.9cqw] opacity-80">Active phase-slip detection and correction loops.</p>
              </div>
              <div className={`border border-cyan-500/20 bg-cyan-950/5 p-[1.5cqw] rounded-xl flex flex-col gap-1 ${getBeatClass(2, beat)}`}>
                <span className="font-mono text-[1cqw] text-cyan-400 font-black">Q4: EMISSION SPEED</span>
                <p className="text-[0.9cqw] opacity-80">Nanosecond compilation delivery to physical qubits.</p>
              </div>
            </div>
          )}

          {/* Scene 5: Extreme Density Blueprint (Extreme - Bento matrix / detailed dashboard) */}
          {scene === 5 && (
            <div className="grid grid-cols-3 gap-[1.2cqw] w-full max-w-[45cqw]">
              {/* Column 1: Gate Fidelity Chart */}
              <div className={`col-span-2 border border-cyan-500/20 bg-cyan-950/10 p-[1.5cqw] rounded-xl flex flex-col justify-between min-h-[16cqh] ${getBeatClass(0, beat)}`}>
                <div className="flex justify-between items-center border-b border-cyan-500/20 pb-1">
                  <span className="font-mono text-[1cqw] text-cyan-400 font-bold">GATE FIDELITY SPECTRUM</span>
                  <span className="text-[0.8cqw] text-cyan-500">99.98% AVG</span>
                </div>
                <div className="flex items-end gap-1.5 h-[8cqh] mt-2">
                  <div className="bg-cyan-500/80 w-full h-[80%] rounded-t" />
                  <div className="bg-cyan-500/80 w-full h-[95%] rounded-t" />
                  <div className="bg-cyan-400 w-full h-[98%] rounded-t animate-pulse" />
                  <div className="bg-cyan-500/80 w-full h-[85%] rounded-t" />
                  <div className="bg-cyan-500/80 w-full h-[90%] rounded-t" />
                </div>
              </div>

              {/* Column 2: Coherence Time */}
              <div className={`border border-cyan-500/20 bg-cyan-950/10 p-[1.5cqw] rounded-xl flex flex-col justify-between min-h-[16cqh] ${getBeatClass(1, beat)}`}>
                <span className="font-mono text-[0.9cqw] text-cyan-400 font-bold">COHERENCE TIME</span>
                <div className="text-[2.2cqw] font-black text-cyan-300 font-mono leading-none">120μs</div>
                  <span className="text-[0.8cqw] opacity-60">Target: &gt;100μs</span>
              </div>

              {/* Column 3: Queue Depth */}
              <div className={`border border-cyan-500/20 bg-cyan-950/10 p-[1.2cqw] rounded-xl flex items-center justify-between col-span-3 ${getBeatClass(2, beat)}`}>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="font-mono text-[1cqw] text-cyan-300">ACTIVE COMPILER QUEUE: 0 DEPTH</span>
                </div>
                <span className="font-mono text-[0.9cqw] text-emerald-400 font-bold">✓ ALL JOBS EMITTED</span>
              </div>
            </div>
          )}
        </div>
      );
    }

    // ==========================================
    // STYLE 02: SKETCH BOARD EMOJI
    // ==========================================
    case "02": {
      // Theme: Offline-First Sync Engine Design
      // Metaphor: Paper sticky notes, hand-drawn vectors, and emojis.
      return (
        <div className={`relative w-full h-full flex items-center justify-center transition-all duration-500 transform ${finalClass}`}>
          {/* Scene 1: Principles & Core Concept (Ultralight - 1 giant central sticky note) */}
          {scene === 1 && (
            <div className="relative w-[28cqw] h-[24cqw] flex items-center justify-center">
              <div className="bg-amber-100 border-2 border-[#2d2722] p-[2.5cqw] rounded shadow-[8px_8px_0_#2d2722] rotate-[-1.5deg] flex flex-col gap-[1cqw] w-full animate-float-sticky-1">
                <span className="text-[3cqw] animate-wiggle-nod">💡</span>
                <p className="font-['Caveat'] text-[2.4cqw] leading-none text-amber-950 font-black">Local Write First</p>
                <p className="font-sans text-[1.1cqw] opacity-80 leading-tight">Every transaction is written locally first, bypassing network latency entirely.</p>
                
                {beat >= 1 && (
                  <div className="border-t border-dashed border-[#2d2722]/20 pt-2 flex items-center gap-2">
                    <span className="text-[1.5cqw]">📝</span>
                    <span className="font-['Caveat'] text-[1.4cqw] text-amber-900 font-bold">Draft saved in LocalDB</span>
                  </div>
                )}
                
                {beat >= 2 && (
                  <div className="absolute -bottom-4 -right-4 bg-rose-100 border-2 border-[#2d2722] px-3 py-1 rounded shadow-[4px_4px_0_#2d2722] rotate-[4deg] font-['Caveat'] text-[1.4cqw] text-rose-950 font-bold animate-pulse">
                    ✓ Offline Ready!
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Scene 2: Handoff & Execution (Light - Symmetrical A/B layout: Client vs Server) */}
          {scene === 2 && (
            <div className="grid grid-cols-2 gap-[3cqw] w-full max-w-[42cqw] relative items-center">
              {/* Client Note */}
              <div className={`bg-amber-100 border-2 border-[#2d2722] p-[2cqw] rounded shadow-[6px_6px_0_#2d2722] rotate-[-2deg] flex flex-col gap-[0.5cqw] min-h-[18cqh] ${getBeatClass(0, beat)}`}>
                <span className="text-[2.2cqw]">📱</span>
                <p className="font-['Caveat'] text-[1.8cqw] leading-none text-amber-950 font-bold">Client Outbox</p>
                <p className="text-[0.9cqw] opacity-75">Staged offline mutations.</p>
              </div>

              {/* Hand-drawn vector connector */}
              {beat >= 1 && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
                  <svg className="w-[6cqw] h-[4cqh]">
                    <path d="M 0,10 Q 30,0 60,10" fill="none" stroke="#2d2722" strokeWidth="3" strokeDasharray="5 5" />
                    <polygon points="50,5 60,10 50,15" fill="#2d2722" />
                  </svg>
                </div>
              )}

              {/* Server Note */}
              <div className={`bg-blue-100 border-2 border-[#2d2722] p-[2cqw] rounded shadow-[6px_6px_0_#2d2722] rotate-[2deg] flex flex-col gap-[0.5cqw] min-h-[18cqh] ${getBeatClass(1, beat)}`}>
                <span className="text-[2.2cqw]">🤝</span>
                <p className="font-['Caveat'] text-[1.8cqw] leading-none text-blue-950 font-bold">Sync Gateway</p>
                <p className="text-[0.9cqw] opacity-75">Conflict resolver engine.</p>
              </div>

              {/* Conflict Resolved Sticker */}
              {beat >= 2 && (
                <div className="col-span-2 mx-auto mt-[2cqh] bg-rose-100 border-2 border-[#2d2722] p-[1cqw] rounded shadow-[5px_5px_0_#2d2722] rotate-[-0.5deg] text-center font-['Caveat'] text-[1.6cqw] text-rose-950 font-bold animate-wiggle-nod">
                  🎉 100% Conflict Resolved Ledger!
                </div>
              )}
            </div>
          )}

          {/* Scene 3: Connected Pipeline Stream (Standard - 3 connected stages) */}
          {scene === 3 && (
            <div className="flex items-center justify-between w-full max-w-[45cqw] relative">
              {/* Stage 1 */}
              <div className={`bg-amber-100 border-2 border-[#2d2722] p-[1.5cqw] rounded shadow-[4px_4px_0_#2d2722] rotate-[-1.5deg] w-[12cqw] text-center ${getBeatClass(0, beat)}`}>
                <span className="text-[2cqw]">💡</span>
                <p className="font-['Caveat'] text-[1.4cqw] text-amber-950 font-bold mt-1">Local Write</p>
              </div>

              {/* Arrow 1 */}
              <div className={`flex-1 h-0.5 border-t-2 border-dashed border-[#2d2722]/30 mx-2 transition-opacity duration-500 ${beat >= 1 ? "opacity-100" : "opacity-0"}`} />

              {/* Stage 2 */}
              <div className={`bg-blue-100 border-2 border-[#2d2722] p-[1.5cqw] rounded shadow-[4px_4px_0_#2d2722] rotate-[1deg] w-[12cqw] text-center ${getBeatClass(1, beat)}`}>
                <span className="text-[2cqw]">📥</span>
                <p className="font-['Caveat'] text-[1.4cqw] text-blue-950 font-bold mt-1">Outbox Queue</p>
              </div>

              {/* Arrow 2 */}
              <div className={`flex-1 h-0.5 border-t-2 border-dashed border-[#2d2722]/30 mx-2 transition-opacity duration-500 ${beat >= 2 ? "opacity-100" : "opacity-0"}`} />

              {/* Stage 3 */}
              <div className={`bg-rose-100 border-2 border-[#2d2722] p-[1.5cqw] rounded shadow-[4px_4px_0_#2d2722] rotate-[-1deg] w-[12cqw] text-center ${getBeatClass(2, beat)}`}>
                <span className="text-[2cqw]">🤝</span>
                <p className="font-['Caveat'] text-[1.4cqw] text-rose-950 font-bold mt-1">Merge Sync</p>
              </div>
            </div>
          )}

          {/* Scene 4: Quadrant Matrix Analysis (Dense - 2x2 grid quadrants) */}
          {scene === 4 && (
            <div className="grid grid-cols-2 gap-[1.5cqw] w-full max-w-[40cqw]">
              <div className={`bg-amber-100 border-2 border-[#2d2722] p-[1.5cqw] rounded shadow-[4px_4px_0_#2d2722] rotate-[-1deg] ${getBeatClass(0, beat)}`}>
                <span className="font-['Caveat'] text-[1.5cqw] text-amber-950 font-black">Q1: LOCAL DB</span>
                <p className="text-[0.9cqw] opacity-80">Instant reads/writes from offline SQLite store.</p>
              </div>
              <div className={`bg-blue-100 border-2 border-[#2d2722] p-[1.5cqw] rounded shadow-[4px_4px_0_#2d2722] rotate-[1deg] ${getBeatClass(1, beat)}`}>
                <span className="font-['Caveat'] text-[1.5cqw] text-blue-950 font-black">Q2: OUTBOX QUEUE</span>
                <p className="text-[0.9cqw] opacity-80">FIFO queue tracking unsynced local mutations.</p>
              </div>
              <div className={`bg-rose-100 border-2 border-[#2d2722] p-[1.5cqw] rounded shadow-[4px_4px_0_#2d2722] rotate-[-0.5deg] ${getBeatClass(2, beat)}`}>
                <span className="font-['Caveat'] text-[1.5cqw] text-rose-950 font-black">Q3: CONFLICT RESOLVER</span>
                <p className="text-[0.9cqw] opacity-80">LWW-Element-Set CRDT merge rules.</p>
              </div>
              <div className={`bg-emerald-100 border-2 border-[#2d2722] p-[1.5cqw] rounded shadow-[4px_4px_0_#2d2722] rotate-[1.5deg] ${getBeatClass(2, beat)}`}>
                <span className="font-['Caveat'] text-[1.5cqw] text-emerald-950 font-black">Q4: SYNCED LEDGER</span>
                <p className="text-[0.9cqw] opacity-80">Cryptographically signed transaction history.</p>
              </div>
            </div>
          )}

          {/* Scene 5: Extreme Density Blueprint (Extreme - Bento matrix / detailed dashboard) */}
          {scene === 5 && (
            <div className="grid grid-cols-3 gap-[1.2cqw] w-full max-w-[45cqw]">
              {/* Synced Tables List */}
              <div className={`col-span-2 bg-amber-100 border-2 border-[#2d2722] p-[1.5cqw] rounded shadow-[5px_5px_0_#2d2722] rotate-[-0.5deg] min-h-[16cqh] ${getBeatClass(0, beat)}`}>
                <div className="flex justify-between items-center border-b border-[#2d2722]/20 pb-1">
                  <span className="font-['Caveat'] text-[1.4cqw] text-amber-950 font-bold">SYNCED TABLES LEDGER</span>
                  <span className="text-[0.8cqw] opacity-75">3 ACTIVE</span>
                </div>
                <div className="flex flex-col gap-1 mt-2 font-mono text-[0.85cqw]">
                  <div className="flex justify-between"><span>✓ users_metadata</span><span className="text-emerald-700">Synced</span></div>
                  <div className="flex justify-between"><span>✓ offline_drafts</span><span className="text-emerald-700">Synced</span></div>
                  <div className="flex justify-between"><span>✓ transaction_history</span><span className="text-emerald-700">Synced</span></div>
                </div>
              </div>

              {/* Conflict Resolution Rate */}
              <div className={`bg-blue-100 border-2 border-[#2d2722] p-[1.5cqw] rounded shadow-[5px_5px_0_#2d2722] rotate-[1deg] min-h-[16cqh] flex flex-col justify-between ${getBeatClass(1, beat)}`}>
                <span className="font-['Caveat'] text-[1.2cqw] text-blue-950 font-bold">RESOLVED RATE</span>
                <div className="font-['Caveat'] text-[2.4cqw] font-black text-blue-900 leading-none">100%</div>
                <span className="text-[0.8cqw] opacity-60">CRDT Verified</span>
              </div>

              {/* Status Banner */}
              <div className={`col-span-3 bg-rose-100 border-2 border-[#2d2722] p-[1.2cqw] rounded shadow-[5px_5px_0_#2d2722] rotate-[-0.5deg] flex items-center justify-between ${getBeatClass(2, beat)}`}>
                <span className="font-['Caveat'] text-[1.4cqw] text-rose-950 font-bold flex items-center gap-2">
                  <span className="animate-pulse">🎉</span> ALL CLIENTS METADATA RECONCILED SECURELY
                </span>
                <span className="font-['Caveat'] text-[1.2cqw] text-emerald-800 font-bold">✓ STABLE</span>
              </div>
            </div>
          )}
        </div>
      );
    }

    // ==========================================
    // STYLE 03: INTERACTIVE DIALOGUE STAGE
    // ==========================================
    case "03": {
      // Theme: Human-Agent Collaboration Handshake
      // Metaphor: Terminal chat bubbles representing developer and agent.
      return (
        <div className={`relative w-full h-full flex items-center justify-center transition-all duration-500 transform ${finalClass}`}>
          {/* Scene 1: Principles & Core Concept (Ultralight - 1 giant terminal dialogue window) */}
          {scene === 1 && (
            <div className="w-full max-w-[32cqw] bg-slate-900/90 border border-slate-700/50 rounded-2xl p-[2cqw] shadow-2xl flex flex-col gap-[1.5cqw]">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="font-mono text-[0.9cqw] text-slate-500 ml-2">collaboration-handshake.sh</span>
              </div>
              
              <div className="bg-slate-800/80 border border-slate-700/50 p-[1.2cqw] rounded-2xl rounded-bl-sm self-start shadow-md">
                <p className="font-mono text-[0.8cqw] text-slate-400 mb-1 flex items-center gap-1"><User className="w-3.5 h-3.5" /> DEVELOPER</p>
                <p className="text-[1.2cqw] leading-tight">Can we refactor this synchronous loop?</p>
              </div>

              {beat >= 1 && (
                <div className={`bg-teal-950/40 border border-teal-500/40 p-[1.2cqw] rounded-2xl rounded-br-sm self-end shadow-md transition-all duration-500 animate-wiggle-nod`}>
                  <p className="font-mono text-[0.8cqw] text-teal-400 mb-1 flex items-center gap-1"><Bot className="w-3.5 h-3.5" /> AGENT</p>
                  <p className="text-[1.2cqw] leading-tight font-bold">Isolating locks inside an AST background thread.</p>
                </div>
              )}

              {beat >= 2 && (
                <div className="border border-dashed border-teal-400/40 bg-teal-950/20 p-[1cqw] rounded-xl flex items-center justify-center gap-2 animate-pulse">
                  <ShieldCheck className="w-[1.8cqw] h-[1.8cqw] text-teal-400" />
                  <span className="font-mono text-[1cqw] text-teal-400">Collaboration Handshake Locked (40ms)</span>
                </div>
              )}
            </div>
          )}

          {/* Scene 2: Handoff & Execution (Light - Symmetrical A/B layout: Developer vs Agent) */}
          {scene === 2 && (
            <div className="grid grid-cols-2 gap-[3cqw] w-full max-w-[42cqw] items-center relative">
              {/* Developer Bubble */}
              <div className={`bg-slate-800/80 border border-slate-700/50 p-[1.8cqw] rounded-2xl rounded-bl-sm flex flex-col gap-1 shadow-lg ${getBeatClass(0, beat)}`}>
                <span className="font-mono text-[0.8cqw] text-slate-400 flex items-center gap-1"><User className="w-3.5 h-3.5" /> DEVELOPER</span>
                <p className="text-[1.1cqw] leading-tight">Define interface specs & boundary rules.</p>
              </div>

              {/* Handshake Badge in center */}
              {beat >= 1 && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-teal-500 text-black p-2 rounded-full shadow-lg animate-pulse">
                  <ShieldCheck className="w-[2cqw] h-[2cqw]" />
                </div>
              )}

              {/* Agent Bubble */}
              <div className={`bg-teal-950/40 border border-teal-500/40 p-[1.8cqw] rounded-2xl rounded-br-sm flex flex-col gap-1 shadow-lg ${getBeatClass(1, beat)}`}>
                <span className="font-mono text-[0.8cqw] text-teal-400 flex items-center gap-1"><Bot className="w-3.5 h-3.5" /> AGENT</span>
                <p className="text-[1.1cqw] leading-tight font-bold">Generate compliant code & verify tests.</p>
              </div>

              {/* Handshake Lock status */}
              {beat >= 2 && (
                <div className="col-span-2 mx-auto mt-[2cqh] border border-dashed border-teal-400/40 bg-teal-950/20 p-[1cqw] rounded-xl flex items-center justify-center gap-2 animate-pulse">
                  <span className="font-mono text-[1cqw] text-teal-400">✓ SECURE HANDSHAKE COMPLETED</span>
                </div>
              )}
            </div>
          )}

          {/* Scene 3: Connected Pipeline Stream (Standard - 3 connected stages) */}
          {scene === 3 && (
            <div className="flex items-center justify-between w-full max-w-[45cqw] relative">
              {/* Stage 1: Prompt */}
              <div className={`bg-slate-800/80 border border-slate-700/50 p-[1.5cqw] rounded-xl w-[12cqw] text-center ${getBeatClass(0, beat)}`}>
                <span className="text-[1.8cqw]">💬</span>
                <p className="font-mono text-[1cqw] text-slate-300 font-bold mt-1">Prompt</p>
              </div>

              {/* Line 1 */}
              <div className={`flex-1 h-0.5 border-t border-dashed border-slate-700 mx-2 transition-opacity duration-500 ${beat >= 1 ? "opacity-100" : "opacity-0"}`} />

              {/* Stage 2: Plan */}
              <div className={`bg-slate-800/80 border border-slate-700/50 p-[1.5cqw] rounded-xl w-[12cqw] text-center ${getBeatClass(1, beat)}`}>
                <span className="text-[1.8cqw]">📋</span>
                <p className="font-mono text-[1cqw] text-slate-300 font-bold mt-1">Plan</p>
              </div>

              {/* Line 2 */}
              <div className={`flex-1 h-0.5 border-t border-dashed border-slate-700 mx-2 transition-opacity duration-500 ${beat >= 2 ? "opacity-100" : "opacity-0"}`} />

              {/* Stage 3: Code */}
              <div className={`bg-teal-950/40 border border-teal-500/40 p-[1.5cqw] rounded-xl w-[12cqw] text-center ${getBeatClass(2, beat)}`}>
                <span className="text-[1.8cqw]">💻</span>
                <p className="font-mono text-[1cqw] text-teal-300 font-bold mt-1">Code</p>
              </div>
            </div>
          )}

          {/* Scene 4: Quadrant Matrix Analysis (Dense - 2x2 grid quadrants) */}
          {scene === 4 && (
            <div className="grid grid-cols-2 gap-[1.5cqw] w-full max-w-[40cqw]">
              <div className={`bg-slate-900/80 border border-slate-800 p-[1.5cqw] rounded-xl flex flex-col gap-1 ${getBeatClass(0, beat)}`}>
                <span className="font-mono text-[1cqw] text-slate-400 font-black">Q1: USER INTENT</span>
                <p className="text-[0.9cqw] opacity-80">Parsing natural language prompts into structured AST nodes.</p>
              </div>
              <div className={`bg-slate-900/80 border border-slate-800 p-[1.5cqw] rounded-xl flex flex-col gap-1 ${getBeatClass(1, beat)}`}>
                <span className="font-mono text-[1cqw] text-slate-400 font-black">Q2: CONTEXT WINDOW</span>
                <p className="text-[0.9cqw] opacity-80">Injecting target codebase files & local linter rules.</p>
              </div>
              <div className={`bg-teal-950/20 border border-teal-500/30 p-[1.5cqw] rounded-xl flex flex-col gap-1 ${getBeatClass(2, beat)}`}>
                <span className="font-mono text-[1cqw] text-teal-400 font-black">Q3: AGENT ACTIONS</span>
                <p className="text-[0.9cqw] opacity-80">Autonomous file edits, shell commands, and test sweeps.</p>
              </div>
              <div className={`bg-teal-950/20 border border-teal-500/30 p-[1.5cqw] rounded-xl flex flex-col gap-1 ${getBeatClass(2, beat)}`}>
                <span className="font-mono text-[1cqw] text-teal-400 font-black">Q4: VALIDATION</span>
                <p className="text-[0.9cqw] opacity-80">Headless Playwright & unit test verification checks.</p>
              </div>
            </div>
          )}

          {/* Scene 5: Extreme Density Blueprint (Extreme - Bento matrix / detailed dashboard) */}
          {scene === 5 && (
            <div className="grid grid-cols-3 gap-[1.2cqw] w-full max-w-[45cqw]">
              {/* Terminal Output */}
              <div className={`col-span-2 bg-slate-950 border border-slate-800 p-[1.5cqw] rounded-xl min-h-[16cqh] ${getBeatClass(0, beat)}`}>
                <div className="flex justify-between items-center border-b border-slate-800 pb-1">
                  <span className="font-mono text-[0.9cqw] text-slate-400 font-bold">TERMINAL OUTPUT</span>
                  <span className="text-[0.8cqw] text-emerald-400">ACTIVE</span>
                </div>
                <div className="flex flex-col gap-1 mt-2 font-mono text-[0.8cqw] text-slate-300">
                  <div>$ npm run test:unit</div>
                  <div className="text-emerald-400">✓ 12 tests passed successfully (420ms)</div>
                  {beat >= 1 && <div className="text-teal-400">✓ AST context handshake active</div>}
                </div>
              </div>

              {/* Context Usage */}
              <div className={`bg-teal-950/20 border border-teal-500/30 p-[1.5cqw] rounded-xl min-h-[16cqh] flex flex-col justify-between ${getBeatClass(1, beat)}`}>
                <span className="font-mono text-[0.9cqw] text-teal-400 font-bold">CONTEXT WINDOW</span>
                <div className="text-[2cqw] font-black text-teal-300 font-mono leading-none">94%</div>
                <span className="text-[0.8cqw] opacity-60">Tokens: 120k / 128k</span>
              </div>

              {/* Status Banner */}
              <div className={`col-span-3 border border-dashed border-teal-400/40 bg-teal-950/20 p-[1.2cqw] rounded-xl flex items-center justify-between ${getBeatClass(2, beat)}`}>
                <span className="font-mono text-[1cqw] text-teal-400 flex items-center gap-2">
                  <span className="animate-pulse">🤝</span> AGENT CO-DEVELOPMENT SESSION STABLE & LOCKED
                </span>
                <span className="font-mono text-[0.9cqw] text-emerald-400 font-bold">✓ VERIFIED</span>
              </div>
            </div>
          )}
        </div>
      );
    }

    // ==========================================
    // STYLE 04: KINETIC TYPE PUNCHLINE
    // ==========================================
    case "04": {
      // Theme: The Death of Boilerplate Code
      // Metaphor: Heavy overlapping graphic poster blocks with struck-through words.
      return (
        <div className={`relative w-full h-full flex items-center justify-center transition-all duration-500 transform ${finalClass}`}>
          {/* Scene 1: Principles & Core Concept (Ultralight - 1 giant kinetic punchline) */}
          {scene === 1 && (
            <div className="flex flex-col gap-[0.5cqw] uppercase">
              <div className={`bg-yellow-400 text-black font-black px-[2.5cqw] py-[1cqw] text-[4cqw] rounded rotate-[-1.5deg] shadow-lg ${beat >= 1 ? "line-through opacity-40" : "animate-kinetic-punch"}`}>
                BOILERPLATE
              </div>
              <div className={`bg-white text-black font-black px-[2.5cqw] py-[1cqw] text-[4.2cqw] rounded rotate-[2deg] shadow-lg transition-all duration-500 ${beat >= 1 ? "opacity-100" : "opacity-0 -translate-x-12"}`}>
                IS DEBT
              </div>
              <div className={`bg-red-600 text-white font-black px-[2.5cqw] py-[1cqw] text-[4.5cqw] rounded rotate-[-1deg] shadow-lg transition-all duration-500 ${beat >= 2 ? "opacity-100 animate-pulse" : "opacity-0 translate-y-12"}`}>
                SQUASH IT!
              </div>
            </div>
          )}

          {/* Scene 2: Handoff & Execution (Light - Symmetrical A/B layout: Legacy vs Modern) */}
          {scene === 2 && (
            <div className="grid grid-cols-2 gap-[3cqw] w-full max-w-[42cqw] items-center relative">
              {/* Legacy Block */}
              <div className={`bg-zinc-800 text-zinc-500 font-black p-[2cqw] rounded rotate-[-2deg] text-center shadow-md ${beat >= 1 ? "line-through opacity-40" : ""}`}>
                <span className="text-[1.8cqw] block mb-1">❌ LEGACY</span>
                <span className="text-[3cqw] font-mono">1000 LINES</span>
              </div>

              {/* Modern Block */}
              <div className={`bg-yellow-400 text-black font-black p-[2cqw] rounded rotate-[2deg] text-center shadow-lg transition-all duration-500 ${beat >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
                <span className="text-[1.8cqw] block mb-1">✅ MODERN</span>
                <span className="text-[3cqw] font-mono">0 LINES</span>
              </div>

              {/* DELETED Stamp */}
              {beat >= 2 && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white font-black px-[2cqw] py-[0.8cqw] text-[2.5cqw] rounded-xl rotate-[-12deg] shadow-2xl border-4 border-white animate-kinetic-punch">
                  DELETED!
                </div>
              )}
            </div>
          )}

          {/* Scene 3: Connected Pipeline Stream (Standard - 3 connected stages) */}
          {scene === 3 && (
            <div className="flex items-center justify-between w-full max-w-[45cqw] relative">
              {/* Stage 1 */}
              <div className={`bg-zinc-800 text-zinc-400 font-black p-[1.5cqw] rounded rotate-[-1deg] w-[12cqw] text-center ${getBeatClass(0, beat)}`}>
                <span className="text-[1.5cqw] block">SCAFFOLD</span>
                <span className="text-[1.1cqw] font-mono text-red-500">❌ WASTE</span>
              </div>

              {/* Arrow 1 */}
              <div className={`flex-1 h-1 bg-yellow-400 mx-2 transition-opacity duration-500 ${beat >= 1 ? "opacity-100" : "opacity-0"}`} />

              {/* Stage 2 */}
              <div className={`bg-zinc-800 text-zinc-200 font-black p-[1.5cqw] rounded rotate-[1.5deg] w-[12cqw] text-center ${getBeatClass(1, beat)}`}>
                <span className="text-[1.5cqw] block">SIFT</span>
                <span className="text-[1.1cqw] font-mono text-yellow-400">🔍 SCAN</span>
              </div>

              {/* Arrow 2 */}
              <div className={`flex-1 h-1 bg-yellow-400 mx-2 transition-opacity duration-500 ${beat >= 2 ? "opacity-100" : "opacity-0"}`} />

              {/* Stage 3 */}
              <div className={`bg-yellow-400 text-black font-black p-[1.5cqw] rounded rotate-[-0.5deg] w-[12cqw] text-center ${getBeatClass(2, beat)}`}>
                <span className="text-[1.5cqw] block">EMIT</span>
                <span className="text-[1.1cqw] font-mono text-emerald-800">⚡ CLEAN</span>
              </div>
            </div>
          )}

          {/* Scene 4: Quadrant Matrix Analysis (Dense - 2x2 grid quadrants) */}
          {scene === 4 && (
            <div className="grid grid-cols-2 gap-[1.5cqw] w-full max-w-[40cqw]">
              <div className={`bg-zinc-900 text-zinc-500 font-black p-[1.5cqw] rounded rotate-[-1deg] ${getBeatClass(0, beat)}`}>
                <span className="text-[1.4cqw] text-red-500 block">Q1: IMPORTS</span>
                <span className="text-[1cqw] font-mono">120 REDUNDANT</span>
              </div>
              <div className={`bg-zinc-900 text-zinc-500 font-black p-[1.5cqw] rounded rotate-[1deg] ${getBeatClass(1, beat)}`}>
                <span className="text-[1.4cqw] text-red-500 block">Q2: COPY-PASTE</span>
                <span className="text-[1cqw] font-mono">42 DUPLICATED</span>
              </div>
              <div className={`bg-zinc-900 text-zinc-500 font-black p-[1.5cqw] rounded rotate-[-0.5deg] ${getBeatClass(2, beat)}`}>
                <span className="text-[1.4cqw] text-red-500 block">Q3: BOILERPLATE</span>
                <span className="text-[1cqw] font-mono">82% REDUNDANT</span>
              </div>
              <div className={`bg-yellow-400 text-black font-black p-[1.5cqw] rounded rotate-[1.5deg] ${getBeatClass(2, beat)}`}>
                <span className="text-[1.4cqw] block">Q4: CLEAN CODE</span>
                <span className="text-[1cqw] font-mono">100% EXPLICIT</span>
              </div>
            </div>
          )}

          {/* Scene 5: Extreme Density Blueprint (Extreme - Bento matrix / detailed dashboard) */}
          {scene === 5 && (
            <div className="grid grid-cols-3 gap-[1.2cqw] w-full max-w-[45cqw]">
              {/* Lines Deleted */}
              <div className={`col-span-2 bg-zinc-900 text-white font-black p-[1.5cqw] rounded rotate-[-0.5deg] min-h-[16cqh] flex flex-col justify-between ${getBeatClass(0, beat)}`}>
                <span className="text-[1.2cqw] text-yellow-400">LINES DELETED</span>
                <div className="text-[3cqw] font-mono leading-none text-red-500">-12,420</div>
                <span className="text-[0.8cqw] opacity-60 font-mono">SQUASHED SUCCESSFULLY</span>
              </div>

              {/* File Size Reduction */}
              <div className={`bg-zinc-900 text-white font-black p-[1.5cqw] rounded rotate-[1deg] min-h-[16cqh] flex flex-col justify-between ${getBeatClass(1, beat)}`}>
                <span className="text-[1.1cqw] text-yellow-400">REDUCTION</span>
                <div className="text-[2.6cqw] font-mono leading-none text-emerald-400">94%</div>
                <span className="text-[0.8cqw] opacity-60 font-mono">KILOBYTES</span>
              </div>

              {/* Status Banner */}
              <div className={`col-span-3 bg-yellow-400 text-black font-black p-[1.2cqw] rounded rotate-[-0.5deg] flex items-center justify-between ${getBeatClass(2, beat)}`}>
                <span className="text-[1.4cqw] flex items-center gap-2">
                  ⚡ BOILERPLATE ELIMINATED — CODEBASE AT 100% EFFICIENCY
                </span>
                <span className="font-mono text-[1.1cqw] bg-black text-white px-2 py-0.5 rounded">✓ OK</span>
              </div>
            </div>
          )}
        </div>
      );
    }

    // ==========================================
    // STYLE 05: OBJECT METAPHOR HERO
    // ==========================================
    case "05": {
      // Theme: The Context-Driven Handoff Kit
      // Metaphor: A physically packed field kit or backpack layout.
      return (
        <div className={`relative w-full h-full flex items-center justify-center transition-all duration-500 transform ${finalClass}`}>
          {/* Scene 1: Principles & Core Concept (Ultralight - 1 giant field kit bag) */}
          {scene === 1 && (
            <div className="w-[30cqw] h-[24cqw] border-4 border-[#78350f] bg-[#fffdf5] rounded-3xl p-[1.5cqw] shadow-[8px_8px_0_rgba(120,53,15,0.15)] flex flex-col justify-between animate-bounce-jump">
              <div className="border-b border-[#78350f]/20 pb-1 text-[1.2cqw] font-mono font-black uppercase text-[#78350f]">HANDOFF KIT BAG</div>
              <div className="grid grid-cols-2 gap-[1.5cqw] h-[75%] mt-2">
                <div className="bg-[#fef3c7] border-2 border-[#78350f] rounded-xl p-[1.2cqw] flex flex-col justify-between">
                  <span className="text-[2.2cqw] animate-wiggle-nod">📦</span>
                  <p className="font-bold text-[1.2cqw] text-[#78350f]">Core Payload</p>
                </div>
                
                <div className={`bg-[#fef3c7] border-2 border-[#78350f] rounded-xl p-[1.2cqw] flex flex-col justify-between transition-all duration-500 ${beat >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                  <span className="text-[2.2cqw]">📋</span>
                  <p className="font-bold text-[1.2cqw] text-[#78350f]">Non-goals list</p>
                </div>
              </div>

              {beat >= 2 && (
                <div className="absolute -bottom-3 -right-3 bg-[#d97706] text-white font-mono text-[1cqw] px-3 py-1 rounded-full border-2 border-[#78350f] shadow animate-pulse">
                  ✓ SEALED
                </div>
              )}
            </div>
          )}

          {/* Scene 2: Handoff & Execution (Light - Symmetrical A/B layout: Assets vs Spec) */}
          {scene === 2 && (
            <div className="grid grid-cols-2 gap-[3cqw] w-full max-w-[42cqw] items-center relative">
              {/* Assets Compartment */}
              <div className={`border-4 border-[#78350f] bg-[#fffdf5] p-[2cqw] rounded-2xl flex flex-col gap-2 shadow-lg ${getBeatClass(0, beat)}`}>
                <span className="text-[2.5cqw]">📦</span>
                <span className="font-bold text-[1.3cqw] text-[#78350f]">ASSETS PAYLOAD</span>
                <p className="text-[1cqw] opacity-80">Figma mocks & static assets.</p>
              </div>

              {/* Spec Compartment */}
              <div className={`border-4 border-[#78350f] bg-[#fffdf5] p-[2cqw] rounded-2xl flex flex-col gap-2 shadow-lg ${getBeatClass(1, beat)}`}>
                <span className="text-[2.5cqw]">📋</span>
                <span className="font-bold text-[1.3cqw] text-[#78350f]">SPECIFICATION</span>
                <p className="text-[1cqw] opacity-80">Markdown files & API specs.</p>
              </div>

              {/* Security Seal */}
              {beat >= 2 && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d97706] text-white font-mono text-[1.2cqw] px-4 py-1.5 rounded-full border-2 border-[#78350f] shadow-2xl animate-pulse">
                  ✓ KIT SEALED
                </div>
              )}
            </div>
          )}

          {/* Scene 3: Connected Pipeline Stream (Standard - 3 connected stages) */}
          {scene === 3 && (
            <div className="flex items-center justify-between w-full max-w-[45cqw] relative">
              {/* Stage 1 */}
              <div className={`border-2 border-[#78350f] bg-[#fef3c7] p-[1.5cqw] rounded-xl w-[12cqw] text-center ${getBeatClass(0, beat)}`}>
                <span className="text-[2cqw]">📦</span>
                <p className="font-bold text-[1.1cqw] text-[#78350f] mt-1">Pack</p>
              </div>

              {/* Line 1 */}
              <div className={`flex-1 h-0.5 border-t-2 border-dashed border-[#78350f]/30 mx-2 transition-opacity duration-500 ${beat >= 1 ? "opacity-100" : "opacity-0"}`} />

              {/* Stage 2 */}
              <div className={`border-2 border-[#78350f] bg-[#fef3c7] p-[1.5cqw] rounded-xl w-[12cqw] text-center ${getBeatClass(1, beat)}`}>
                <span className="text-[2cqw]">🚚</span>
                <p className="font-bold text-[1.1cqw] text-[#78350f] mt-1">Ship</p>
              </div>

              {/* Line 2 */}
              <div className={`flex-1 h-0.5 border-t-2 border-dashed border-[#78350f]/30 mx-2 transition-opacity duration-500 ${beat >= 2 ? "opacity-100" : "opacity-0"}`} />

              {/* Stage 3 */}
              <div className={`border-2 border-[#78350f] bg-[#fef3c7] p-[1.5cqw] rounded-xl w-[12cqw] text-center ${getBeatClass(2, beat)}`}>
                <span className="text-[2cqw]">🔓</span>
                <p className="font-bold text-[1.1cqw] text-[#78350f] mt-1">Unpack</p>
              </div>
            </div>
          )}

          {/* Scene 4: Quadrant Matrix Analysis (Dense - 2x2 grid quadrants) */}
          {scene === 4 && (
            <div className="grid grid-cols-2 gap-[1.5cqw] w-full max-w-[40cqw]">
              <div className={`border-2 border-[#78350f] bg-[#fffdf5] p-[1.5cqw] rounded-xl ${getBeatClass(0, beat)}`}>
                <span className="font-bold text-[1.2cqw] text-[#78350f] block">Q1: SOURCE CODE</span>
                <p className="text-[0.9cqw] opacity-80">Clean, modular React components & styles.</p>
              </div>
              <div className={`border-2 border-[#78350f] bg-[#fffdf5] p-[1.5cqw] rounded-xl ${getBeatClass(1, beat)}`}>
                <span className="font-bold text-[1.2cqw] text-[#78350f] block">Q2: ASSETS</span>
                <p className="text-[0.9cqw] opacity-80">High-res vector icons & UI images.</p>
              </div>
              <div className={`border-2 border-[#78350f] bg-[#fffdf5] p-[1.5cqw] rounded-xl ${getBeatClass(2, beat)}`}>
                <span className="font-bold text-[1.2cqw] text-[#78350f] block">Q3: TEST SUITE</span>
                <p className="text-[0.9cqw] opacity-80">Playwright end-to-edge specs.</p>
              </div>
              <div className={`border-2 border-[#78350f] bg-[#fef3c7] p-[1.5cqw] rounded-xl ${getBeatClass(2, beat)}`}>
                <span className="font-bold text-[1.2cqw] text-[#78350f] block">Q4: README</span>
                <p className="text-[0.9cqw] opacity-80">Exhaustive setup & deploy runbooks.</p>
              </div>
            </div>
          )}

          {/* Scene 5: Extreme Density Blueprint (Extreme - Bento matrix / detailed dashboard) */}
          {scene === 5 && (
            <div className="grid grid-cols-3 gap-[1.2cqw] w-full max-w-[45cqw]">
              {/* Item List */}
              <div className={`col-span-2 border-2 border-[#78350f] bg-[#fffdf5] p-[1.5cqw] rounded-xl min-h-[16cqh] ${getBeatClass(0, beat)}`}>
                <div className="flex justify-between items-center border-b border-[#78350f]/20 pb-1">
                  <span className="font-mono text-[1cqw] text-[#78350f] font-bold">KIT INVENTORY</span>
                  <span className="text-[0.8cqw] text-[#d97706]">4 ITEMS</span>
                </div>
                <div className="flex flex-col gap-1 mt-2 font-mono text-[0.85cqw] text-[#78350f]">
                  <div className="flex justify-between"><span>✓ src/components/</span><span>12 files</span></div>
                  <div className="flex justify-between"><span>✓ assets/images/</span><span>42 files</span></div>
                  <div className="flex justify-between"><span>✓ tests/specs/</span><span>6 files</span></div>
                </div>
              </div>

              {/* Weight Distribution */}
              <div className={`border-2 border-[#78350f] bg-[#fffdf5] p-[1.5cqw] rounded-xl min-h-[16cqh] flex flex-col justify-between ${getBeatClass(1, beat)}`}>
                <span className="font-mono text-[0.9cqw] text-[#78350f] font-bold">TOTAL WEIGHT</span>
                <div className="text-[2.2cqw] font-black text-[#d97706] font-mono leading-none">4.2MB</div>
                <span className="text-[0.8cqw] opacity-60">Highly Optimized</span>
              </div>

              {/* Status Banner */}
              <div className={`col-span-3 border-2 border-[#78350f] bg-[#fef3c7] p-[1.2cqw] rounded-xl flex items-center justify-between ${getBeatClass(2, beat)}`}>
                <span className="font-bold text-[1.1cqw] text-[#78350f] flex items-center gap-2">
                  <span className="animate-pulse">📦</span> HANDOFF KIT SEALED & READY FOR DELIVERY
                </span>
                <span className="font-mono text-[0.9cqw] bg-[#78350f] text-white px-2 py-0.5 rounded">✓ SEALED</span>
              </div>
            </div>
          )}
        </div>
      );
    }

    // ==========================================
    // STYLE 06: BLACKBOARD CHALK TALK
    // ==========================================
    case "06": {
      // Theme: The First Principles of Quantum Computing
      // Metaphor: Chalk-drawn vectors, equations, and blackboard grids.
      return (
        <div className={`relative w-full h-full flex items-center justify-center transition-all duration-500 transform ${finalClass}`}>
          {/* Scene 1: Principles & Core Concept (Ultralight - 1 giant chalk equation) */}
          {scene === 1 && (
            <div className="w-[30cqw] h-[24cqw] border-4 border-amber-950 bg-[#1e2923] rounded-lg p-[1.5cqw] font-['Caveat'] text-white flex flex-col justify-between relative animate-chalk-wobble">
              <div className="flex flex-col gap-2 mt-2">
                <p className="text-[2.4cqw] border-b border-white/20 pb-2">|Ψ⟩ state = α|0⟩ + β|1⟩</p>
                {beat >= 1 && <p className="text-[2cqw] text-yellow-300">✓ H-Gate Phase mapped ⊕</p>}
                {beat >= 2 && <p className="text-[2cqw] text-emerald-300">✓ Phase lock achieved ∡</p>}
              </div>
              <div className="absolute bottom-2 right-4 text-[1.2cqw] opacity-40">Blackboard Talk</div>
            </div>
          )}

          {/* Scene 2: Handoff & Execution (Light - Symmetrical A/B layout: Qubit 0 vs Qubit 1) */}
          {scene === 2 && (
            <div className="grid grid-cols-2 gap-[3cqw] w-full max-w-[42cqw] items-center relative font-['Caveat'] text-white">
              {/* Qubit 0 */}
              <div className={`border-2 border-white/20 bg-[#1e2923] p-[2cqw] rounded-xl flex flex-col gap-1 shadow-lg ${getBeatClass(0, beat)}`}>
                <span className="text-[2.5cqw] text-yellow-200">|0⟩</span>
                <span className="text-[1.5cqw] font-bold">Ground State</span>
                <p className="text-[1.1cqw] opacity-80">Initial classical register zero.</p>
              </div>

              {/* Qubit 1 */}
              <div className={`border-2 border-white/20 bg-[#1e2923] p-[2cqw] rounded-xl flex flex-col gap-1 shadow-lg ${getBeatClass(1, beat)}`}>
                <span className="text-[2.5cqw] text-emerald-200">|1⟩</span>
                <span className="text-[1.5cqw] font-bold">Excited State</span>
                <p className="text-[1.1cqw] opacity-80">Opposite quantum axis state.</p>
              </div>

              {/* Entanglement Bracket */}
              {beat >= 2 && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[3cqw] text-yellow-300 animate-pulse">
                  {`{ Entangled }`}
                </div>
              )}
            </div>
          )}

          {/* Scene 3: Connected Pipeline Stream (Standard - 3 connected stages) */}
          {scene === 3 && (
            <div className="flex items-center justify-between w-full max-w-[45cqw] relative font-['Caveat'] text-white">
              {/* Stage 1 */}
              <div className={`border-2 border-white/20 bg-[#1e2923] p-[1.5cqw] rounded-lg w-[12cqw] text-center ${getBeatClass(0, beat)}`}>
                <span className="text-[2.2cqw] text-yellow-200">Init</span>
                <p className="text-[1.3cqw] mt-1">|0⟩ state</p>
              </div>

              {/* Line 1 */}
              <div className={`flex-1 h-0.5 border-t border-dashed border-white/30 mx-2 transition-opacity duration-500 ${beat >= 1 ? "opacity-100" : "opacity-0"}`} />

              {/* Stage 2 */}
              <div className={`border-2 border-white/20 bg-[#1e2923] p-[1.5cqw] rounded-lg w-[12cqw] text-center ${getBeatClass(1, beat)}`}>
                <span className="text-[2.2cqw] text-emerald-200">H-Gate</span>
                <p className="text-[1.3cqw] mt-1">Superpose</p>
              </div>

              {/* Line 2 */}
              <div className={`flex-1 h-0.5 border-t border-dashed border-white/30 mx-2 transition-opacity duration-500 ${beat >= 2 ? "opacity-100" : "opacity-0"}`} />

              {/* Stage 3 */}
              <div className={`border-2 border-white/20 bg-[#1e2923] p-[1.5cqw] rounded-lg w-[12cqw] text-center ${getBeatClass(2, beat)}`}>
                <span className="text-[2.2cqw] text-rose-200">Measure</span>
                <p className="text-[1.3cqw] mt-1">Decohere</p>
              </div>
            </div>
          )}

          {/* Scene 4: Quadrant Matrix Analysis (Dense - 2x2 grid quadrants) */}
          {scene === 4 && (
            <div className="grid grid-cols-2 gap-[1.5cqw] w-full max-w-[40cqw] font-['Caveat'] text-white">
              <div className={`border border-white/20 bg-[#1e2923] p-[1.5cqw] rounded-lg ${getBeatClass(0, beat)}`}>
                <span className="text-[1.6cqw] text-yellow-200 block">Q1: SUPERPOSITION</span>
                <p className="text-[1.2cqw] opacity-80">Both states coexisting simultaneously in probability wave.</p>
              </div>
              <div className={`border border-white/20 bg-[#1e2923] p-[1.5cqw] rounded-lg ${getBeatClass(1, beat)}`}>
                <span className="text-[1.6cqw] text-emerald-200 block">Q2: ENTANGLEMENT</span>
                <p className="text-[1.2cqw] opacity-80">Instantaneous correlation across physical registers.</p>
              </div>
              <div className={`border border-white/20 bg-[#1e2923] p-[1.5cqw] rounded-lg ${getBeatClass(2, beat)}`}>
                <span className="text-[1.6cqw] text-rose-200 block">Q3: INTERFERENCE</span>
                <p className="text-[1.2cqw] opacity-80">Phase reinforcement and cancellation loops.</p>
              </div>
              <div className={`border border-white/20 bg-[#1e2923] p-[1.5cqw] rounded-lg ${getBeatClass(2, beat)}`}>
                <span className="text-[1.6cqw] text-cyan-200 block">Q4: DECOHERENCE</span>
                <p className="text-[1.2cqw] opacity-80">Environmental collapse back to classical bit ledger.</p>
              </div>
            </div>
          )}

          {/* Scene 5: Extreme Density Blueprint (Extreme - Bento matrix / detailed dashboard) */}
          {scene === 5 && (
            <div className="grid grid-cols-3 gap-[1.2cqw] w-full max-w-[45cqw] font-['Caveat'] text-white">
              {/* State Table */}
              <div className={`col-span-2 border border-white/20 bg-[#1e2923] p-[1.5cqw] rounded-lg min-h-[16cqh] ${getBeatClass(0, beat)}`}>
                <div className="flex justify-between items-center border-b border-white/10 pb-1">
                  <span className="text-[1.5cqw] text-yellow-200">STATE PROBABILITIES</span>
                  <span className="text-[1.1cqw]">ΣP = 1.0</span>
                </div>
                <div className="flex flex-col gap-1 mt-2 text-[1.2cqw]">
                  <div className="flex justify-between"><span>|00⟩ ground state</span><span className="text-emerald-300">P = 0.50</span></div>
                  <div className="flex justify-between"><span>|11⟩ excited state</span><span className="text-emerald-300">P = 0.50</span></div>
                </div>
              </div>

              {/* Gate Metrics */}
              <div className={`border border-white/20 bg-[#1e2923] p-[1.5cqw] rounded-lg min-h-[16cqh] flex flex-col justify-between ${getBeatClass(1, beat)}`}>
                <span className="text-[1.3cqw] text-emerald-200">GATE FIDELITY</span>
                <div className="text-[2.4cqw] font-black text-yellow-200 leading-none">99.9%</div>
                <span className="text-[1.1cqw] opacity-60">Verified</span>
              </div>

              {/* Status Banner */}
              <div className={`col-span-3 border border-dashed border-white/30 bg-[#1e2923] p-[1.2cqw] rounded-lg flex items-center justify-between ${getBeatClass(2, beat)}`}>
                <span className="text-[1.5cqw] text-yellow-200 flex items-center gap-2">
                  ✓ QUANTUM PRINCIPLES FULLY VERIFIED & LOCKED
                </span>
                <span className="text-[1.3cqw] text-emerald-300">Q.E.D.</span>
              </div>
            </div>
          )}
        </div>
      );
    }

    // ==========================================
    // STYLE 07: ARCADE BOSS FIGHT
    // ==========================================
    case "07": {
      // Theme: Legacy Codebase Refactoring Boss
      // Metaphor: Retro 8-bit game console interface, HP bars.
      return (
        <div className={`relative w-full h-full flex items-center justify-center transition-all duration-500 transform ${finalClass}`}>
          {/* Scene 1: Principles & Core Concept (Ultralight - 1 giant boss battle) */}
          {scene === 1 && (
            <div className={`w-[30cqw] h-[24cqw] border-4 border-neutral-800 bg-black rounded-lg p-[1.5cqw] flex flex-col justify-between font-mono text-white relative shadow-2xl ${beat >= 1 ? "animate-damage-flash" : ""}`}>
              <div className="text-[1.1cqw] text-green-500 border-b border-green-500/20 pb-1 flex justify-between">
                <span>STAGE 01 BOSS</span>
                <span>HP: {beat === 0 ? "100" : beat === 1 ? "45" : "0"}%</span>
              </div>
              <div className="flex flex-col items-center justify-center my-auto gap-2">
                <span className="text-[4cqw] animate-bounce">👾</span>
                <div className="w-[80%] h-4 border-2 border-white bg-neutral-900 rounded p-0.5">
                  <div className="h-full bg-red-600 transition-all duration-500" style={{ width: beat === 0 ? "100%" : beat === 1 ? "45%" : "0%" }} />
                </div>
              </div>
              {beat >= 2 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-lg">
                  <span className="text-[3cqw] text-yellow-400 font-black animate-pulse">VICTORY!</span>
                </div>
              )}
            </div>
          )}

          {/* Scene 2: Handoff & Execution (Light - Symmetrical A/B layout: Player vs Boss) */}
          {scene === 2 && (
            <div className="grid grid-cols-2 gap-[3cqw] w-full max-w-[42cqw] items-center relative font-mono text-white">
              {/* Player Side */}
              <div className={`border-4 border-green-500 bg-black p-[2cqw] rounded-xl flex flex-col items-center gap-1 shadow-lg ${getBeatClass(0, beat)}`}>
                <span className="text-[3cqw]">🛡️</span>
                <span className="text-[1.3cqw] font-bold text-green-400">PLAYER</span>
                <p className="text-[1cqw] opacity-80">LVL 99 Refactorer</p>
              </div>

              {/* Boss Side */}
              <div className={`border-4 border-red-500 bg-black p-[2cqw] rounded-xl flex flex-col items-center gap-1 shadow-lg ${getBeatClass(1, beat)}`}>
                <span className="text-[3cqw] animate-bounce">👾</span>
                <span className="text-[1.3cqw] font-bold text-red-500">LEGACY BOSS</span>
                <p className="text-[1cqw] opacity-80">10k lines spaghetti</p>
              </div>

              {/* Battle Action Text */}
              {beat >= 2 && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black font-black px-3 py-1 rounded border-2 border-white rotate-[-5deg] text-[1.4cqw] animate-pulse">
                  REFACTOR ATTACK!
                </div>
              )}
            </div>
          )}

          {/* Scene 3: Connected Pipeline Stream (Standard - 3 connected stages) */}
          {scene === 3 && (
            <div className="flex items-center justify-between w-full max-w-[45cqw] relative font-mono text-white">
              {/* Stage 1 */}
              <div className={`border-2 border-green-500 bg-black p-[1.5cqw] rounded w-[12cqw] text-center ${getBeatClass(0, beat)}`}>
                <span className="text-[2cqw]">🔍</span>
                <p className="text-[1.1cqw] text-green-400 mt-1">Scan</p>
              </div>

              {/* Arrow 1 */}
              <div className={`flex-1 h-0.5 bg-green-500 mx-2 transition-opacity duration-500 ${beat >= 1 ? "opacity-100" : "opacity-0"}`} />

              {/* Stage 2 */}
              <div className={`border-2 border-yellow-500 bg-black p-[1.5cqw] rounded w-[12cqw] text-center ${getBeatClass(1, beat)}`}>
                <span className="text-[2cqw]">⚔️</span>
                <p className="text-[1.1cqw] text-yellow-400 mt-1">Parse</p>
              </div>

              {/* Arrow 2 */}
              <div className={`flex-1 h-0.5 bg-green-500 mx-2 transition-opacity duration-500 ${beat >= 2 ? "opacity-100" : "opacity-0"}`} />

              {/* Stage 3 */}
              <div className={`border-2 border-emerald-500 bg-black p-[1.5cqw] rounded w-[12cqw] text-center ${getBeatClass(2, beat)}`}>
                <span className="text-[2cqw]">🏆</span>
                <p className="text-[1.1cqw] text-emerald-400 mt-1">Squash</p>
              </div>
            </div>
          )}

          {/* Scene 4: Quadrant Matrix Analysis (Dense - 2x2 grid quadrants) */}
          {scene === 4 && (
            <div className="grid grid-cols-2 gap-[1.5cqw] w-full max-w-[40cqw] font-mono text-white">
              <div className={`border-2 border-green-500 bg-black p-[1.5cqw] rounded ${getBeatClass(0, beat)}`}>
                <span className="text-[1.2cqw] text-green-400 block">Q1: PLAYER LEVEL</span>
                <p className="text-[0.9cqw] opacity-80">LVL 99 Refactorer with max AST leverage.</p>
              </div>
              <div className={`border-2 border-yellow-500 bg-black p-[1.5cqw] rounded ${getBeatClass(1, beat)}`}>
                <span className="text-[1.2cqw] text-yellow-400 block">Q2: INVENTORY</span>
                <p className="text-[0.9cqw] opacity-80">CRDT resolvers & static analyzer shields.</p>
              </div>
              <div className={`border-2 border-red-500 bg-black p-[1.5cqw] rounded ${getBeatClass(2, beat)}`}>
                <span className="text-[1.2cqw] text-red-500 block">Q3: BOSS HP</span>
                <p className="text-[0.9cqw] opacity-80">Spaghetti code health reduced to 0%.</p>
              </div>
              <div className={`border-2 border-emerald-500 bg-black p-[1.5cqw] rounded ${getBeatClass(2, beat)}`}>
                <span className="text-[1.2cqw] text-emerald-400 block">Q4: HIGH SCORE</span>
                <p className="text-[0.9cqw] opacity-80">100% clean code emitted securely.</p>
              </div>
            </div>
          )}

          {/* Scene 5: Extreme Density Blueprint (Extreme - Bento matrix / detailed dashboard) */}
          {scene === 5 && (
            <div className="grid grid-cols-3 gap-[1.2cqw] w-full max-w-[45cqw] font-mono text-white">
              {/* Refactored Files */}
              <div className={`col-span-2 border-2 border-green-500 bg-black p-[1.5cqw] rounded min-h-[16cqh] ${getBeatClass(0, beat)}`}>
                <div className="flex justify-between items-center border-b border-green-500/20 pb-1">
                  <span className="text-[1.1cqw] text-green-400">REFACTORED FILES</span>
                  <span className="text-[0.8cqw]">STABLE</span>
                </div>
                <div className="flex flex-col gap-1 mt-2 text-[0.85cqw]">
                  <div className="flex justify-between"><span>✓ LegacyLoop.java</span><span className="text-green-400">SQUASHED</span></div>
                  <div className="flex justify-between"><span>✓ SpaghettiCallback.js</span><span className="text-green-400">SQUASHED</span></div>
                  <div className="flex justify-between"><span>✓ GlobalStateLock.cpp</span><span className="text-green-400">SQUASHED</span></div>
                </div>
              </div>

              {/* XP Gained */}
              <div className={`border-2 border-yellow-500 bg-black p-[1.5cqw] rounded min-h-[16cqh] flex flex-col justify-between ${getBeatClass(1, beat)}`}>
                <span className="text-[1cqw] text-yellow-400">XP GAINED</span>
                <div className="text-[2.2cqw] font-black text-yellow-300 leading-none">+99k</div>
                <span className="text-[0.8cqw] opacity-60">Max Level</span>
              </div>

              {/* Status Banner */}
              <div className={`col-span-3 border-2 border-dashed border-green-500 bg-black p-[1.2cqw] rounded flex items-center justify-between ${getBeatClass(2, beat)}`}>
                <span className="text-[1.2cqw] text-green-400 flex items-center gap-2">
                  👾 GAME OVER — LEGACY BOSS DEFEATED — CODEBASE SECURE
                </span>
                <span className="text-[1.1cqw] text-yellow-400 animate-pulse">VICTORY!</span>
              </div>
            </div>
          )}
        </div>
      );
    }

    // ==========================================
    // STYLE 08: SPOTLIGHT QUOTE POSTER
    // ==========================================
    case "08": {
      // Theme: The Philosophy of Clean Code
      // Metaphor: Overhead breathing spotlight radial gradients illuminating quotes.
      return (
        <div className={`relative w-full h-full flex items-center justify-center transition-all duration-500 transform ${finalClass}`}>
          {/* Scene 1: Principles & Core Concept (Ultralight - 1 giant spotlight quote) */}
          {scene === 1 && (
            <div className="relative w-full max-w-[28cqw] h-[22cqw] flex flex-col justify-center items-center text-center p-[2cqw] border border-white/10 rounded-2xl bg-black/40 shadow-2xl">
              <p className="font-['Playfair_Display'] italic text-[2cqw] leading-snug font-bold text-white">
                {beat === 0 && "Code is for humans to read."}
                {beat === 1 && "Make intent explicit, always."}
                {beat >= 2 && "Explicit context frozen in time is clean software."}
              </p>
            </div>
          )}

          {/* Scene 2: Handoff & Execution (Light - Symmetrical A/B layout: Author vs Reader) */}
          {scene === 2 && (
            <div className="grid grid-cols-2 gap-[3cqw] w-full max-w-[42cqw] items-center relative text-center">
              {/* Author Quote */}
              <div className={`border border-white/10 bg-black/40 p-[2cqw] rounded-2xl flex flex-col gap-1 shadow-lg ${getBeatClass(0, beat)}`}>
                <span className="text-[2.2cqw] text-teal-400">✍️</span>
                <p className="font-['Playfair_Display'] italic text-[1.4cqw] font-bold text-white">"Write with empathy for the maintainer."</p>
              </div>

              {/* Reader Quote */}
              <div className={`border border-white/10 bg-black/40 p-[2cqw] rounded-2xl flex flex-col gap-1 shadow-lg ${getBeatClass(1, beat)}`}>
                <span className="text-[2.2cqw] text-teal-400">📖</span>
                <p className="font-['Playfair_Display'] italic text-[1.4cqw] font-bold text-white">"Read with clarity of intent."</p>
              </div>

              {/* Central Spotlight indicator */}
              {beat >= 2 && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-black font-bold px-3 py-1 rounded-full text-[1cqw] shadow-2xl animate-pulse">
                  SHARED CONTEXT
                </div>
              )}
            </div>
          )}

          {/* Scene 3: Connected Pipeline Stream (Standard - 3 connected stages) */}
          {scene === 3 && (
            <div className="flex items-center justify-between w-full max-w-[45cqw] relative text-center">
              {/* Stage 1 */}
              <div className={`border border-white/10 bg-black/40 p-[1.5cqw] rounded-xl w-[12cqw] ${getBeatClass(0, beat)}`}>
                <span className="text-[1.8cqw] text-teal-400">Read</span>
                <p className="font-['Playfair_Display'] italic text-[1.1cqw] text-white mt-1">Readability</p>
              </div>

              {/* Line 1 */}
              <div className={`flex-1 h-0.5 bg-white/10 mx-2 transition-opacity duration-500 ${beat >= 1 ? "opacity-100" : "opacity-0"}`} />

              {/* Stage 2 */}
              <div className={`border border-white/10 bg-black/40 p-[1.5cqw] rounded-xl w-[12cqw] ${getBeatClass(1, beat)}`}>
                <span className="text-[1.8cqw] text-teal-400">Simplify</span>
                <p className="font-['Playfair_Display'] italic text-[1.1cqw] text-white mt-1">Simplicity</p>
              </div>

              {/* Line 2 */}
              <div className={`flex-1 h-0.5 bg-white/10 mx-2 transition-opacity duration-500 ${beat >= 2 ? "opacity-100" : "opacity-0"}`} />

              {/* Stage 3 */}
              <div className={`border border-teal-500/30 bg-teal-950/20 p-[1.5cqw] rounded-xl w-[12cqw] ${getBeatClass(2, beat)}`}>
                <span className="text-[1.8cqw] text-teal-400">Maintain</span>
                <p className="font-['Playfair_Display'] italic text-[1.1cqw] text-white mt-1">Maintainable</p>
              </div>
            </div>
          )}

          {/* Scene 4: Quadrant Matrix Analysis (Dense - 2x2 grid quadrants) */}
          {scene === 4 && (
            <div className="grid grid-cols-2 gap-[1.5cqw] w-full max-w-[40cqw]">
              <div className={`border border-white/10 bg-black/40 p-[1.5cqw] rounded-xl ${getBeatClass(0, beat)}`}>
                <span className="font-['Playfair_Display'] italic text-[1.4cqw] text-teal-400 block">Q1: NO SIDE EFFECTS</span>
                <p className="text-[0.9cqw] opacity-80 text-white">Pure functions with deterministic outputs.</p>
              </div>
              <div className={`border border-white/10 bg-black/40 p-[1.5cqw] rounded-xl ${getBeatClass(1, beat)}`}>
                <span className="font-['Playfair_Display'] italic text-[1.4cqw] text-teal-400 block">Q2: SELF-DOCUMENTING</span>
                <p className="text-[0.9cqw] opacity-80 text-white">Clear variable names over redundant comments.</p>
              </div>
              <div className={`border border-white/10 bg-black/40 p-[1.5cqw] rounded-xl ${getBeatClass(2, beat)}`}>
                <span className="font-['Playfair_Display'] italic text-[1.4cqw] text-teal-400 block">Q3: HIGH COHESION</span>
                <p className="text-[0.9cqw] opacity-80 text-white">Grouping related logic tightly together.</p>
              </div>
              <div className={`border border-teal-500/30 bg-teal-950/20 p-[1.5cqw] rounded-xl ${getBeatClass(2, beat)}`}>
                <span className="font-['Playfair_Display'] italic text-[1.4cqw] text-teal-400 block">Q4: LOW COUPLING</span>
                <p className="text-[0.9cqw] opacity-80 text-white">Independent modules with clean interfaces.</p>
              </div>
            </div>
          )}

          {/* Scene 5: Extreme Density Blueprint (Extreme - Bento matrix / detailed dashboard) */}
          {scene === 5 && (
            <div className="grid grid-cols-3 gap-[1.2cqw] w-full max-w-[45cqw]">
              {/* Tenets */}
              <div className={`col-span-2 border border-white/10 bg-black/40 p-[1.5cqw] rounded-xl min-h-[16cqh] ${getBeatClass(0, beat)}`}>
                <div className="flex justify-between items-center border-b border-white/10 pb-1">
                  <span className="font-['Playfair_Display'] italic text-[1.3cqw] text-teal-400">CLEAN CODE TENETS</span>
                  <span className="text-[0.8cqw] opacity-60">STABLE</span>
                </div>
                <div className="flex flex-col gap-1 mt-2 text-[0.9cqw] text-white">
                  <div className="flex justify-between"><span>✓ Explicit over implicit</span><span className="text-teal-400">Verified</span></div>
                  <div className="flex justify-between"><span>✓ Flat over nested</span><span className="text-teal-400">Verified</span></div>
                  <div className="flex justify-between"><span>✓ Simple over complex</span><span className="text-teal-400">Verified</span></div>
                </div>
              </div>

              {/* Complexity Score */}
              <div className={`border border-white/10 bg-black/40 p-[1.5cqw] rounded-xl min-h-[16cqh] flex flex-col justify-between ${getBeatClass(1, beat)}`}>
                <span className="font-['Playfair_Display'] italic text-[1.2cqw] text-teal-400">COMPLEXITY</span>
                <div className="text-[2.2cqw] font-black text-teal-300 leading-none">O(1)</div>
                <span className="text-[0.8cqw] opacity-60">Constant Time</span>
              </div>

              {/* Status Banner */}
              <div className={`col-span-3 border border-dashed border-teal-500/40 bg-teal-950/20 p-[1.2cqw] rounded-xl flex items-center justify-between ${getBeatClass(2, beat)}`}>
                <span className="font-['Playfair_Display'] italic text-[1.3cqw] text-teal-400 flex items-center gap-2">
                  ✓ EXPLICIT CONTEXT FROZEN IN TIME IS CLEAN SOFTWARE
                </span>
                <span className="font-mono text-[0.9cqw] text-emerald-400 font-bold">✓ 100% CLEAN</span>
              </div>
            </div>
          )}
        </div>
      );
    }

    default:
      return (
        <div className="w-[10cqw] h-[10cqw] bg-slate-800 flex items-center justify-center rounded">
          <HelpCircle className="w-8 h-8 text-slate-600 animate-pulse" />
        </div>
      );
  }
}
