import React from "react";
import { 
  Sliders, Activity, ShieldCheck, Radio, HelpCircle, 
  Cpu, Layers, CheckSquare, Code, Compass, Play, RefreshCw, 
  FileText, CheckCircle, ChevronRight, TrendingUp, Users, 
  HardDrive, AlertTriangle, ArrowRight, CheckCircle2, Server, 
  Database, User, Terminal, Circle, Check
} from "lucide-react";

/**
 * MetaphorTierB
 * Handles Styles 09 - 16 (Balanced Hybrid medium density styles)
 * Animation profile: Precise mechanical, flow-lines, slider-gliding, laser-pulse tracks.
 * Renders Scenes 1 to 5 dynamically matching respective layout densities.
 */
export function MetaphorTierB({ style, scene, beat, isThumbnail }) {
  const finalClass = beat > 0 ? "opacity-100" : "opacity-90";
  const activeBeat = beat; // 0, 1, 2

  // Shared responsive classes
  const panelBg = "bg-slate-900/40 backdrop-blur border border-slate-800/80";

  switch (style.id) {
    case "09": { // Signal Pipeline Flow (CI/CD Compilation Pipeline)
      // Colors: bgHex: "#0b0f19", ink: "text-slate-100", accent: "text-cyan-400", success: "#10b981"
      return (
        <div className={`w-[45cqw] h-[34cqh] flex flex-col justify-between p-[1.5cqw] rounded-2xl border border-cyan-500/20 bg-cyan-950/5 relative overflow-hidden transition-all duration-500 ${finalClass}`}>
          {/* Neon track lines (SVG background) */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              {scene === 1 && (
                // Circular Orbit Track
                <circle cx="50%" cy="50%" r="25%" fill="none" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4,6" className="animate-[spin_40s_linear_infinite]" />
              )}
              {scene === 2 && (
                // Symmetrical A/B dual tracks merging into center
                <>
                  <path d="M 10% 30% H 50% V 50%" fill="none" stroke="#06b6d4" strokeWidth="2" />
                  <path d="M 10% 70% H 50% V 50%" fill="none" stroke="#06b6d4" strokeWidth="2" />
                  <path d="M 50% 50% H 90%" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" />
                </>
              )}
              {scene === 3 && (
                // 3 connected pipeline channels
                <path d="M 10% 50% H 90%" fill="none" stroke="#06b6d4" strokeWidth="3" />
              )}
              {scene === 4 && (
                // 2x2 Grid connection tracks
                <>
                  <path d="M 25% 25% H 75% V 75% H 25% Z" fill="none" stroke="#06b6d4" strokeWidth="1.5" />
                  <path d="M 25% 75% V 25%" fill="none" stroke="#06b6d4" strokeWidth="1.5" />
                </>
              )}
              {scene === 5 && (
                // Complex Subway Transit Network lines
                <>
                  <path d="M 10% 25% H 90%" fill="none" stroke="#06b6d4" strokeWidth="2" />
                  <path d="M 10% 50% H 90%" fill="none" stroke="#ef4444" strokeWidth="2.5" />
                  <path d="M 10% 75% H 90%" fill="none" stroke="#10b981" strokeWidth="2" />
                  <path d="M 30% 25% L 50% 50% L 70% 75%" fill="none" stroke="#eab308" strokeWidth="1.5" strokeDasharray="3,3" />
                </>
              )}
            </svg>
          </div>

          {/* DYNAMIC SCENE DENSITY RENDERS */}
          {scene === 1 && (
            // Scene 1 (Ultralight): 1 giant central processing core
            <div className="flex-1 flex flex-col items-center justify-center relative">
              <div className={`w-[12cqw] h-[12cqw] rounded-full border-4 flex items-center justify-center flex-col transition-all duration-700 ${
                activeBeat === 0 ? "border-cyan-500/40 bg-cyan-950/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]" :
                activeBeat === 1 ? "border-cyan-400 bg-cyan-950/50 shadow-[0_0_30px_rgba(6,182,212,0.5)] animate-pulse" :
                "border-emerald-400 bg-emerald-950/40 shadow-[0_0_40px_rgba(16,185,129,0.6)]"
              }`}>
                <Cpu className={`w-[4cqw] h-[4cqw] mb-[0.5cqw] ${activeBeat === 2 ? "text-emerald-400" : "text-cyan-400"}`} />
                <span className="text-[1cqw] font-mono font-bold tracking-widest uppercase">
                  {activeBeat === 0 ? "GATE INACTIVE" : activeBeat === 1 ? "COMPILING" : "DEPLOYED"}
                </span>
              </div>
              <div className="absolute bottom-0 text-[1cqw] font-mono text-zinc-500">
                CORE GATEWAY // PORT 0x88
              </div>
            </div>
          )}

          {scene === 2 && (
            // Scene 2 (Light): Symmetrical A/B dual pipeline channels
            <div className="flex-1 flex flex-col justify-around my-[1cqh]">
              {/* Channel A (Top) */}
              <div className={`flex items-center justify-between p-[0.8cqw] rounded-xl border transition-all duration-500 ${
                activeBeat >= 1 ? "border-cyan-500/40 bg-cyan-950/30" : "border-slate-800 opacity-40"
              }`}>
                <div className="flex items-center gap-[1cqw]">
                  <Server className="w-[1.8cqw] h-[1.8cqw] text-cyan-400" />
                  <span className="text-[1cqw] font-mono">CHANNEL_A (LEXICAL_STAGING)</span>
                </div>
                <span className="text-[1cqw] font-mono text-cyan-400">STATE_OK</span>
              </div>

              {/* Channel B (Bottom) */}
              <div className={`flex items-center justify-between p-[0.8cqw] rounded-xl border transition-all duration-500 ${
                activeBeat >= 2 ? "border-emerald-500/40 bg-emerald-950/30 animate-pipeline-pulse" : "border-slate-800 opacity-20"
              }`}>
                <div className="flex items-center gap-[1cqw]">
                  <Database className="w-[1.8cqw] h-[1.8cqw] text-emerald-400" />
                  <span className="text-[1cqw] font-mono">CHANNEL_B (EMISSION_VAULT)</span>
                </div>
                <span className="text-[1cqw] font-mono text-emerald-400">SYNC_SUCCESS</span>
              </div>
            </div>
          )}

          {scene === 3 && (
            // Scene 3 (Standard): 3 connected pipeline tracks (Original)
            <div className="flex-1 flex flex-col justify-center gap-[1cqw]">
              <div className="flex items-center gap-[1cqw]">
                <div className="w-[2cqw] h-[2cqw] rounded-full border-2 border-cyan-400 bg-cyan-950/40 text-cyan-400 flex items-center justify-center text-[1cqw] font-mono">1</div>
                <div className="flex-1 border border-cyan-500/30 bg-cyan-950/10 p-[0.8cqw] rounded-xl text-[1cqw] font-mono">LEXICAL SCANNING - PASS</div>
              </div>
              <div className={`flex items-center gap-[1cqw] transition-all duration-500 ${activeBeat >= 1 ? "opacity-100" : "opacity-25"}`}>
                <div className="w-[2cqw] h-[2cqw] rounded-full border-2 border-cyan-400 bg-cyan-950/40 text-cyan-400 flex items-center justify-center text-[1cqw] font-mono">2</div>
                <div className="flex-1 border border-cyan-500/30 bg-cyan-950/10 p-[0.8cqw] rounded-xl text-[1cqw] font-mono">AST CHECK - INTERFACE OK</div>
              </div>
              <div className={`flex items-center gap-[1cqw] transition-all duration-500 ${activeBeat >= 2 ? "opacity-100" : "opacity-15"}`}>
                <div className="w-[2cqw] h-[2cqw] rounded-full border-2 border-emerald-500 bg-emerald-950/40 text-emerald-400 flex items-center justify-center text-[1cqw] font-mono">3</div>
                <div className="flex-1 border border-emerald-500/30 bg-emerald-950/10 p-[0.8cqw] rounded-xl text-[1cqw] font-mono text-emerald-400 font-bold">EMISSION BUNDLED - COMPLETE</div>
              </div>
            </div>
          )}

          {scene === 4 && (
            // Scene 4 (Dense): 2x2 Grid channels
            <div className="flex-1 grid grid-cols-2 gap-[1cqw] my-[0.5cqh]">
              {[
                { label: "01/LINT", desc: "STATIC COVALENT SCAN", active: true },
                { label: "02/TEST", desc: "UNIT COVERAGE CHECK", active: activeBeat >= 1 },
                { label: "03/BUILD", desc: "TREE SHAKING BUNDLE", active: activeBeat >= 1 },
                { label: "04/RELEASE", desc: "STATIC CDN INGESTION", active: activeBeat >= 2 }
              ].map((gridItem, i) => (
                <div key={i} className={`p-[1cqw] rounded-xl border flex flex-col justify-between transition-all duration-500 ${
                  gridItem.active 
                    ? i === 3 && activeBeat === 2
                      ? "border-emerald-500/40 bg-emerald-950/30 shadow-[0_0_15px_rgba(16,185,129,0.3)] animate-pipeline-pulse"
                      : "border-cyan-500/30 bg-cyan-950/10"
                    : "border-slate-800/40 opacity-20"
                }`}>
                  <span className={`text-[0.9cqw] font-mono font-bold ${gridItem.active ? "text-cyan-400" : "text-zinc-600"}`}>
                    {gridItem.label}
                  </span>
                  <p className="text-[0.8cqw] font-mono text-zinc-400 truncate mt-[0.5cqh]">
                    {gridItem.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

          {scene === 5 && (
            // Scene 5 (Extreme): Complex mixing board or subway network diagram with multiple lines and glowing packet indicators
            <div className="flex-1 flex flex-col justify-between my-[0.2cqh]">
              {/* Traffic status board */}
              <div className="grid grid-cols-3 gap-[0.5cqw]">
                {[
                  { name: "LINE A (STATIC)", val: "ACTIVE", color: "text-cyan-400", active: true },
                  { name: "LINE B (MUTEX)", val: activeBeat >= 1 ? "PROCESSING" : "WAITING", color: activeBeat >= 1 ? "text-red-400" : "text-zinc-600", active: activeBeat >= 1 },
                  { name: "LINE C (EMIT)", val: activeBeat >= 2 ? "SECURED" : "HOLD", color: activeBeat >= 2 ? "text-emerald-400" : "text-zinc-600", active: activeBeat >= 2 }
                ].map((item, i) => (
                  <div key={i} className={`p-[0.5cqw] rounded border text-[0.8cqw] font-mono ${item.active ? "bg-slate-900/60 border-slate-700" : "bg-slate-950/20 border-slate-900 opacity-30"}`}>
                    <div className="text-zinc-500 truncate">{item.name}</div>
                    <div className={`font-bold mt-1 ${item.color}`}>{item.val}</div>
                  </div>
                ))}
              </div>

              {/* Transit log output */}
              <div className="flex-1 bg-black/50 rounded-xl border border-slate-800 p-[0.8cqw] my-[0.8cqh] flex flex-col gap-1 overflow-hidden font-mono text-[0.8cqw]">
                <div className="text-cyan-400">SYS_COMPILER // RUNNING SYSTEM_CHECK</div>
                <div className="text-slate-300">&gt; Scanning pipeline interfaces... DONE</div>
                {activeBeat >= 1 && (
                  <div className="text-red-400 animate-pulse">&gt; Crossing Route Junction B [AST_PARSER] ... INJECTING</div>
                )}
                {activeBeat >= 2 && (
                  <div className="text-emerald-400 font-bold">&gt; Compilation network locked. Deploy complete. (100%)</div>
                )}
              </div>
            </div>
          )}

          {/* Sub status footer */}
          <div className="border-t border-cyan-500/10 pt-[0.5cqh] flex justify-between text-[0.8cqw] font-mono text-cyan-500/60">
            <span>PIPELINE MATRIX // STATUS</span>
            <span className="animate-pulse">● SIGNAL FLOWING</span>
          </div>
        </div>
      );
    }

    case "10": { // Mechanical Scoring Funnel (AST-Based Code Refactoring Sieve)
      // Colors: bgHex: "#f0f4f8", ink: "text-blue-950", accent: "text-orange-500"
      return (
        <div className={`w-[45cqw] h-[34cqh] flex flex-col justify-between p-[1.5cqw] rounded-2xl border border-blue-200 bg-white shadow-lg relative overflow-hidden transition-all duration-500 ${finalClass}`}>
          {/* Blueprint grid markings (SVG background) */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="blueprint-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e3a8a" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
            </svg>
          </div>

          <div className="border-b border-blue-200 pb-[0.5cqh] flex justify-between text-[0.8cqw] text-blue-800 font-mono">
            <span>ENGINEERING FUNNEL // SIEVE</span>
            <span>MODEL 10_D</span>
          </div>

          {scene === 1 && (
            // Scene 1 (Ultralight): 1 giant central processing core / node
            <div className="flex-1 flex flex-col items-center justify-center relative my-[1cqh]">
              <div className={`w-[11cqw] h-[11cqw] border-4 border-dashed rounded-xl flex flex-col items-center justify-center p-[1cqw] transition-all duration-700 ${
                activeBeat === 0 ? "border-blue-300 bg-blue-50/50" :
                activeBeat === 1 ? "border-orange-400 bg-orange-50/50 animate-pulse" :
                "border-emerald-500 bg-emerald-50 shadow-md"
              }`}>
                <Layers className={`w-[3.5cqw] h-[3.5cqw] ${activeBeat === 2 ? "text-emerald-500" : "text-blue-700"}`} />
                <span className="text-[0.9cqw] font-mono font-black text-blue-950 mt-[0.5cqh] text-center uppercase">
                  {activeBeat === 0 ? "RAW CODE" : activeBeat === 1 ? "SIFTING" : "AST CORE"}
                </span>
              </div>
              <div className="text-[0.8cqw] font-mono text-slate-500 mt-[0.8cqh]">
                CROSSHAIR METRIC STABILITY
              </div>
            </div>
          )}

          {scene === 2 && (
            // Scene 2 (Light): Symmetrical A/B dual channels
            <div className="flex-1 grid grid-cols-2 gap-[1.5cqw] my-[1cqh]">
              {/* Left Column: Input Tokens */}
              <div className="border border-blue-200 bg-blue-50/30 p-[1cqw] rounded-xl flex flex-col justify-between">
                <span className="text-[0.8cqw] font-mono text-blue-600 font-bold border-b border-blue-100 pb-1">01 // RAW FEED</span>
                <div className="flex-1 flex flex-col justify-center gap-1 my-2">
                  <div className={`text-[0.8cqw] font-mono bg-blue-100 text-blue-900 px-2 py-0.5 rounded ${activeBeat >= 1 ? "opacity-20 line-through scale-90" : "opacity-100"}`}>whitespace_token</div>
                  <div className="text-[0.8cqw] font-mono bg-blue-100 text-blue-900 px-2 py-0.5 rounded">identifier_token</div>
                </div>
                <span className="text-[0.8cqw] font-mono text-blue-500 text-right">SCAN_INGEST</span>
              </div>

              {/* Right Column: Sifted Nodes */}
              <div className={`border p-[1cqw] rounded-xl flex flex-col justify-between transition-all duration-500 ${
                activeBeat >= 2 ? "border-orange-300 bg-orange-50/30" : "border-slate-200 opacity-20"
              }`}>
                <span className="text-[0.8cqw] font-mono text-orange-600 font-bold border-b border-orange-100 pb-1">02 // COMPILING</span>
                <div className="flex-1 flex flex-col justify-center gap-1 my-2">
                  <div className="text-[0.8cqw] font-mono bg-orange-100 text-orange-950 px-2 py-0.5 rounded font-bold">Node (Identifier) → Root</div>
                </div>
                <span className="text-[0.8cqw] font-mono text-orange-600 text-right">AST_MATCH</span>
              </div>
            </div>
          )}

          {scene === 3 && (
            // Scene 3 (Standard): 3 connected pipeline timeline tracks (Original Sieve)
            <div className="flex-1 flex flex-col justify-center gap-[0.8cqw] my-[1cqh]">
              <div className="flex justify-between items-center bg-blue-50/50 p-2 rounded-lg border border-blue-100">
                <span className="text-[0.9cqw] font-mono text-blue-900 font-bold">1 // LEXICAL ANALYSIS</span>
                <span className="text-[0.8cqw] font-mono bg-green-100 text-green-800 px-2 py-0.5 rounded">PASS</span>
              </div>
              <div className={`flex justify-between items-center p-2 rounded-lg border transition-all duration-500 ${
                activeBeat >= 1 ? "bg-orange-50 border-orange-200 text-orange-900" : "border-slate-100 opacity-25"
              }`}>
                <span className="text-[0.9cqw] font-mono font-bold">2 // PARSING SIEVE</span>
                <span className="text-[0.8cqw] font-mono bg-orange-200 text-orange-900 px-2 py-0.5 rounded animate-pulse">ACTIVE</span>
              </div>
              <div className={`flex justify-between items-center p-2 rounded-lg border transition-all duration-500 ${
                activeBeat >= 2 ? "bg-emerald-50 border-emerald-200 text-emerald-900" : "border-slate-100 opacity-15"
              }`}>
                <span className="text-[0.9cqw] font-mono font-bold">3 // PRISTINE COMPILATION</span>
                <span className="text-[0.8cqw] font-mono bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded">SUCCESS</span>
              </div>
            </div>
          )}

          {scene === 4 && (
            // Scene 4 (Dense): 2x2 grid channels
            <div className="flex-1 grid grid-cols-2 gap-[1cqw] my-[0.5cqh]">
              {[
                { label: "SIEVE A: LINT", val: "100%", status: "STABLE", active: true },
                { label: "SIEVE B: COMPILER", val: activeBeat >= 1 ? "94%" : "WAIT", status: activeBeat >= 1 ? "READY" : "HOLD", active: activeBeat >= 1 },
                { label: "SIEVE C: OPTIMIZER", val: activeBeat >= 1 ? "89%" : "WAIT", status: activeBeat >= 1 ? "READY" : "HOLD", active: activeBeat >= 1 },
                { label: "SIEVE D: EMITTER", val: activeBeat >= 2 ? "100%" : "HOLD", status: activeBeat >= 2 ? "COMPLETE" : "HOLD", active: activeBeat >= 2 }
              ].map((item, idx) => (
                <div key={idx} className={`p-[0.8cqw] border rounded-xl flex flex-col justify-between transition-all duration-500 ${
                  item.active ? "bg-blue-50/50 border-blue-200" : "border-slate-100 opacity-20"
                }`}>
                  <span className="text-[0.8cqw] font-mono text-blue-900 font-bold">{item.label}</span>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-[1.2cqw] font-black text-blue-950 font-mono">{item.val}</span>
                    <span className={`text-[0.8cqw] font-mono px-2 py-0.5 rounded ${item.active ? "bg-blue-100 text-blue-800" : "bg-slate-100 text-slate-400"}`}>{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {scene === 5 && (
            // Scene 5 (Extreme): Complex blueprint ledger
            <div className="flex-1 flex flex-col justify-between my-[0.2cqh]">
              <div className="grid grid-cols-3 gap-[0.5cqw]">
                <div className="p-2 border border-blue-200 rounded-lg bg-blue-50/20 text-center font-mono text-[0.8cqw]">
                  <div className="text-slate-500">TOKENS</div>
                  <div className="text-[1cqw] font-black text-blue-950 mt-1">12,401</div>
                </div>
                <div className={`p-2 border rounded-lg text-center font-mono text-[0.8cqw] transition-all ${activeBeat >= 1 ? "border-orange-200 bg-orange-50/20" : "border-slate-100 opacity-30"}`}>
                  <div className="text-slate-500">PARSED</div>
                  <div className="text-[1cqw] font-black text-blue-950 mt-1">{activeBeat >= 1 ? "4,190" : "0"}</div>
                </div>
                <div className={`p-2 border rounded-lg text-center font-mono text-[0.8cqw] transition-all ${activeBeat >= 2 ? "border-emerald-200 bg-emerald-50/20" : "border-slate-100 opacity-15"}`}>
                  <div className="text-slate-500">REDUCED</div>
                  <div className="text-[1cqw] font-black text-blue-950 mt-1">{activeBeat >= 2 ? "124" : "0"}</div>
                </div>
              </div>

              {/* Progress bar ledger */}
              <div className="flex flex-col gap-[0.5cqh] p-2 border border-blue-100 bg-blue-50/10 rounded-lg font-mono text-[0.8cqw] my-1">
                <div className="flex justify-between">
                  <span>REF_SIEVE_COMPILATION</span>
                  <span className="font-bold text-blue-800">{activeBeat === 0 ? "20%" : activeBeat === 1 ? "60%" : "100%"}</span>
                </div>
                <div className="w-full h-1.5 bg-blue-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 transition-all duration-700" 
                    style={{ width: activeBeat === 0 ? "20%" : activeBeat === 1 ? "60%" : "100%" }}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="border-t border-blue-200 pt-[0.5cqh] text-right text-[0.8cqw] font-mono text-blue-500">
            BLUEPRINT STABILITY VERIFIED ✓
          </div>
        </div>
      );
    }

    case "11": { // Collaborative Pairing Board (Human-AI Pair Programming Workflow)
      // Colors: bgHex: "#f8fafc", ink: "text-[#1e293b]", accent: "text-indigo-600"
      // Human: teal-700, AI: indigo-600
      return (
        <div className={`w-[45cqw] h-[34cqh] flex flex-col justify-between p-[1.5cqw] rounded-2xl border border-slate-200 bg-slate-50 shadow-md relative overflow-hidden transition-all duration-500 ${finalClass}`}>
          {/* Subtle dash-dot grid lines */}
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="w-full h-full border-2 border-dashed border-slate-900" />
          </div>

          <div className="border-b border-slate-200 pb-[0.5cqh] flex justify-between text-[0.8cqw] text-slate-500 font-mono">
            <span>PAIRING CONSOLE // WORKSPACE</span>
            <span>USER_ACTIVE: 2</span>
          </div>

          {scene === 1 && (
            // Scene 1 (Ultralight): 1 giant central pairing core
            <div className="flex-1 flex flex-col items-center justify-center my-[1cqh]">
              <div className={`w-[11cqw] h-[11cqw] border-2 rounded-full flex flex-col items-center justify-center p-[1cqw] transition-all duration-700 ${
                activeBeat === 0 ? "border-slate-300 bg-white" :
                activeBeat === 1 ? "border-teal-500 bg-teal-50 shadow" :
                "border-indigo-500 bg-indigo-50 shadow-md"
              }`}>
                <Users className={`w-[3.5cqw] h-[3.5cqw] ${activeBeat === 2 ? "text-indigo-600" : activeBeat === 1 ? "text-teal-600" : "text-slate-400"}`} />
                <span className="text-[0.9cqw] font-mono font-bold text-slate-800 mt-[0.5cqh] text-center">
                  {activeBeat === 0 ? "STANDBY" : activeBeat === 1 ? "HUMAN SPEC" : "AI SYNCS"}
                </span>
              </div>
              <div className="text-[0.8cqw] font-mono text-slate-400 mt-[0.8cqh] flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                CONSOLE SYNCED
              </div>
            </div>
          )}

          {scene === 2 && (
            // Scene 2 (Light): Symmetrical A/B dual pane boards
            <div className="flex-1 grid grid-cols-2 gap-[1.5cqw] my-[1cqh]">
              <div className={`border p-[1cqw] rounded-xl flex flex-col justify-between bg-white transition-all duration-500 ${
                activeBeat === 0 ? "border-teal-500 ring-2 ring-teal-500/20 shadow" : "border-slate-200 opacity-60"
              }`}>
                <span className="text-[0.8cqw] font-mono text-teal-700 font-bold flex items-center gap-1">
                  <User className="w-3 h-3" />
                  01 // HUMAN DRIVER
                </span>
                <div className="flex-1 flex flex-col justify-center my-1">
                  <pre className="text-[0.7cqw] font-mono text-slate-800 bg-slate-50 p-1.5 rounded border border-slate-100 overflow-hidden truncate">
                    {"interface Sync { uuid: string; }"}
                  </pre>
                </div>
                <span className="text-[0.8cqw] font-mono text-teal-600">INPUT_LOCKED</span>
              </div>

              <div className={`border p-[1cqw] rounded-xl flex flex-col justify-between bg-white transition-all duration-500 ${
                activeBeat >= 1 ? "border-indigo-500 ring-2 ring-indigo-500/20 shadow" : "border-slate-200 opacity-20"
              }`}>
                <span className="text-[0.8cqw] font-mono text-indigo-600 font-bold flex items-center gap-1">
                  <Cpu className="w-3 h-3" />
                  02 // AI CO-PILOT
                </span>
                <div className="flex-1 flex flex-col justify-center my-1">
                  <pre className="text-[0.7cqw] font-mono text-slate-800 bg-slate-50 p-1.5 rounded border border-slate-100 overflow-hidden truncate">
                    {"class Worker implements Sync { }"}
                  </pre>
                </div>
                <span className="text-[0.8cqw] font-mono text-indigo-500">SYNC_RESPONDING</span>
              </div>
            </div>
          )}

          {scene === 3 && (
            // Scene 3 (Standard): 3 connected pipeline timeline tracks (Original Code Boards)
            <div className="flex-1 grid grid-cols-2 gap-[1cqw] my-[1cqh]">
              <div className={`border p-[1cqw] rounded-xl flex flex-col gap-1 min-h-[14cqh] bg-white transition-all duration-500 ${
                activeBeat === 0 ? "border-teal-500 bg-teal-50/20" : "border-slate-200 opacity-50"
              }`}>
                <span className="text-teal-700 font-mono text-[0.8cqw] font-bold">HUMAN CONTEXT</span>
                <pre className="text-[0.7cqw] font-mono text-slate-800 bg-slate-100 p-1.5 rounded border border-slate-200 leading-none">{"interface Sync { uuid: string; }"}</pre>
              </div>
              <div className={`border p-[1cqw] rounded-xl flex flex-col gap-1 min-h-[14cqh] bg-white transition-all duration-500 ${
                activeBeat >= 1 ? "border-indigo-500 bg-indigo-50/20" : "border-slate-200 opacity-20"
              }`}>
                <span className="text-indigo-500 font-mono text-[0.8cqw] font-bold">AI IMPLEMENTATION</span>
                <pre className="text-[0.7cqw] font-mono text-slate-800 bg-slate-100 p-1.5 rounded border border-slate-200 leading-none">{"class Worker implements Sync { }"}</pre>
              </div>
            </div>
          )}

          {scene === 4 && (
            // Scene 4 (Dense): 2x2 board layout
            <div className="flex-1 grid grid-cols-2 gap-[1cqw] my-[0.5cqh]">
              {[
                { title: "HUMAN: DESIGN", code: "define_schema()", active: true },
                { title: "AI: GENERATION", code: "create_worker_api()", active: activeBeat >= 1 },
                { title: "AI: EXHAUSTIVE TESTING", code: "verify_coverage()", active: activeBeat >= 1 },
                { title: "JOINT: SIGN-OFF", code: "release_channel_ok()", active: activeBeat >= 2 }
              ].map((item, idx) => (
                <div key={idx} className={`p-[0.8cqw] border rounded-xl flex flex-col justify-between bg-white transition-all duration-500 ${
                  item.active ? "border-slate-300 shadow-sm" : "border-slate-100 opacity-20"
                }`}>
                  <span className={`text-[0.8cqw] font-mono font-bold ${idx % 2 === 0 ? "text-teal-700" : "text-indigo-600"}`}>{item.title}</span>
                  <code className="text-[0.7cqw] font-mono bg-slate-100 p-1 rounded text-slate-700 truncate mt-[0.5cqh]">
                    {item.code}
                  </code>
                </div>
              ))}
            </div>
          )}

          {scene === 5 && (
            // Scene 5 (Extreme): Complete collaboration kanban
            <div className="flex-1 flex flex-col justify-between my-[0.2cqh]">
              <div className="grid grid-cols-3 gap-[0.5cqw]">
                <div className="bg-white border border-teal-200 p-1.5 rounded-lg text-center">
                  <div className="text-[0.7cqw] font-bold text-teal-800 font-mono">SPEC DEFINED</div>
                  <div className="text-[1.1cqw] font-black text-slate-800 font-mono mt-[0.2cqh]">9/9</div>
                </div>
                <div className={`bg-white border p-1.5 rounded-lg text-center transition-all ${activeBeat >= 1 ? "border-indigo-200" : "border-slate-150 opacity-30"}`}>
                  <div className="text-[0.7cqw] font-bold text-indigo-700 font-mono">CODE COMPLETED</div>
                  <div className="text-[1.1cqw] font-black text-slate-800 font-mono mt-[0.2cqh]">{activeBeat >= 1 ? "18/18" : "0/18"}</div>
                </div>
                <div className={`bg-white border p-1.5 rounded-lg text-center transition-all ${activeBeat >= 2 ? "border-emerald-200" : "border-slate-150 opacity-15"}`}>
                  <div className="text-[0.7cqw] font-bold text-emerald-700 font-mono">AUDIT CLEARED</div>
                  <div className="text-[1.1cqw] font-black text-slate-800 font-mono mt-[0.2cqh]">{activeBeat >= 2 ? "100%" : "0%"}</div>
                </div>
              </div>

              {/* Status footer list */}
              <div className="text-[0.8cqw] font-mono text-slate-500 flex justify-between items-center px-1">
                <span>COLLABORATORS // READY</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                  HUMAN + AI ONLINE
                </span>
              </div>
            </div>
          )}

          <div className="border-t border-slate-200 pt-[0.5cqh] flex justify-between items-center text-[0.8cqw] font-mono">
            <span className="text-teal-600">DRIVER: HUMAN</span>
            <span className="text-indigo-600">NAVIGATOR: CO-PILOT</span>
          </div>
        </div>
      );
    }

    case "12": { // Studio Mixing Console (LLM Hyperparameter Fine-Tuning)
      // Colors: bgHex: "#111827", ink: "text-[#f9fafb]", accent: "text-red-500", meterGreen: "#10b981"
      return (
        <div className={`w-[45cqw] h-[34cqh] flex flex-col justify-between p-[1.5cqw] rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl relative overflow-hidden transition-all duration-500 ${finalClass}`}>
          {/* Brushed metal pattern overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-5" style={{
            backgroundImage: "linear-gradient(90deg, transparent 50%, rgba(255,255,255,0.1) 50%)",
            backgroundSize: "4px 100%"
          }} />

          <div className="text-[0.8cqw] text-neutral-500 border-b border-neutral-800 pb-[0.5cqh] flex justify-between font-mono">
            <span>LLM MIXING CONSOLE</span>
            <span>ACTIVE TRACKS: {scene === 1 ? "1" : scene === 2 ? "2" : scene === 3 ? "3" : scene === 4 ? "4" : "8"}</span>
          </div>

          {scene === 1 && (
            // Scene 1 (Ultralight): 1 giant central master dial fader
            <div className="flex-1 flex items-center justify-center my-[1cqh]">
              <div className="flex flex-col items-center gap-[0.5cqw]">
                <span className="text-[0.8cqw] font-mono text-neutral-400">MASTER TEMPERATURE</span>
                <div className="w-[8cqw] h-[8cqw] rounded-full border-4 border-neutral-800 bg-neutral-950 flex items-center justify-center relative shadow-inner">
                  {/* Indicator notch */}
                  <div 
                    className="w-1.5 h-6 bg-red-500 rounded absolute origin-bottom transition-all duration-700" 
                    style={{ 
                      bottom: "50%", 
                      transform: `rotate(${activeBeat === 0 ? "-60deg" : activeBeat === 1 ? "0deg" : "80deg"})` 
                    }} 
                  />
                  <span className="text-[1.2cqw] font-black font-mono text-red-500 mt-2 z-10">
                    {activeBeat === 0 ? "0.2" : activeBeat === 1 ? "0.7" : "1.2"}
                  </span>
                </div>
                <span className="text-[0.8cqw] font-mono text-neutral-500">DIAL VALUE RANGE</span>
              </div>
            </div>
          )}

          {scene === 2 && (
            // Scene 2 (Light): Symmetrical A/B dual fader channels (Creativity vs Constraints)
            <div className="flex-1 grid grid-cols-2 gap-[2cqw] items-center my-[1cqh]">
              {[
                { label: "CREATIVITY", bottom: activeBeat === 0 ? "10%" : activeBeat === 1 ? "60%" : "90%", val: activeBeat === 0 ? "0.1" : activeBeat === 1 ? "0.6" : "0.9" },
                { label: "CONSTRAINTS", bottom: activeBeat === 0 ? "90%" : activeBeat === 1 ? "40%" : "10%", val: activeBeat === 0 ? "0.9" : activeBeat === 1 ? "0.4" : "0.1" }
              ].map((track, idx) => (
                <div key={idx} className="flex flex-col items-center justify-between h-full bg-neutral-950/40 p-2 rounded-xl border border-neutral-800">
                  <span className="text-[0.8cqw] font-mono text-neutral-400">{track.label}</span>
                  <div className="flex-1 w-1 bg-neutral-950 relative my-2 flex justify-center items-center">
                    <div className="w-4 h-6 bg-red-500 border border-neutral-700 rounded absolute transition-all duration-500 shadow-md" style={{ bottom: track.bottom }} />
                  </div>
                  <span className="text-[1cqw] font-mono font-bold text-red-500">{track.val}</span>
                </div>
              ))}
            </div>
          )}

          {scene === 3 && (
            // Scene 3 (Standard): 3 connected pipeline tracks (Original Consoles)
            <div className="grid grid-cols-3 gap-[1.5cqw] h-[65%] mt-2">
              {[
                { label: "TEMP", bottom: activeBeat >= 0 ? "25%" : "90%", val: activeBeat >= 0 ? "0.25" : "0.9" },
                { label: "TOP-P", bottom: activeBeat >= 1 ? "85%" : "10%", val: activeBeat >= 1 ? "0.85" : "0.1" },
                { label: "TOKENS", bottom: activeBeat >= 2 ? "70%" : "30%", val: activeBeat >= 2 ? "1024" : "256" }
              ].map((track, idx) => (
                <div key={idx} className="flex flex-col items-center justify-between bg-neutral-950/20 p-2 rounded-lg border border-neutral-800">
                  <span className="text-[0.8cqw] text-neutral-500 font-mono">{track.label}</span>
                  <div className="flex-1 w-1 bg-neutral-950 relative my-2 flex justify-center">
                    <div className="w-4 h-6 bg-cyan-400 border border-neutral-700 rounded absolute transition-all duration-500 shadow-md" style={{ bottom: track.bottom }} />
                  </div>
                  <span className="text-[1cqw] font-bold text-cyan-400 font-mono">{track.val}</span>
                </div>
              ))}
            </div>
          )}

          {scene === 4 && (
            // Scene 4 (Dense): 4-channel soundboard
            <div className="grid grid-cols-4 gap-[1cqw] h-[65%] mt-2">
              {[
                { label: "TEMP", bottom: activeBeat >= 0 ? "40%" : "10%", val: activeBeat >= 0 ? "0.4" : "0.1" },
                { label: "TOP-P", bottom: activeBeat >= 1 ? "70%" : "10%", val: activeBeat >= 1 ? "0.7" : "0.1" },
                { label: "PRES_PEN", bottom: activeBeat >= 1 ? "50%" : "10%", val: activeBeat >= 1 ? "0.5" : "0.1" },
                { label: "FREQ_PEN", bottom: activeBeat >= 2 ? "80%" : "10%", val: activeBeat >= 2 ? "0.8" : "0.1" }
              ].map((track, idx) => (
                <div key={idx} className="flex flex-col items-center justify-between bg-neutral-950/40 p-1.5 rounded-lg border border-neutral-850">
                  <span className="text-[0.7cqw] text-neutral-500 font-mono">{track.label}</span>
                  <div className="flex-1 w-1 bg-neutral-950 relative my-1.5 flex justify-center">
                    <div className="w-3 h-5 bg-emerald-400 border border-neutral-700 rounded absolute transition-all duration-500" style={{ bottom: track.bottom }} />
                  </div>
                  <span className="text-[0.9cqw] font-bold text-emerald-400 font-mono">{track.val}</span>
                </div>
              ))}
            </div>
          )}

          {scene === 5 && (
            // Scene 5 (Extreme): Complex 8-channel board
            <div className="flex-1 flex flex-col justify-between my-[0.2cqh]">
              {/* EQ Knobs strip */}
              <div className="grid grid-cols-8 gap-[0.5cqw]">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full border border-neutral-600 bg-neutral-800 flex items-center justify-center relative">
                      <div className="w-0.5 h-1.5 bg-cyan-400 absolute top-0 rounded" style={{ transform: `rotate(${i * 30 - 90}deg)` }} />
                    </div>
                    <span className="text-[0.6cqw] text-neutral-600 font-mono">CH{i+1}</span>
                  </div>
                ))}
              </div>

              {/* Brushed fader rails */}
              <div className="grid grid-cols-8 gap-[0.5cqw] h-[50%] my-1">
                {[
                  { label: "T1", bottom: activeBeat >= 0 ? "30%" : "10%", color: "bg-cyan-400" },
                  { label: "T2", bottom: activeBeat >= 0 ? "50%" : "10%", color: "bg-cyan-400" },
                  { label: "T3", bottom: activeBeat >= 1 ? "70%" : "10%", color: "bg-cyan-400" },
                  { label: "T4", bottom: activeBeat >= 1 ? "40%" : "10%", color: "bg-cyan-400" },
                  { label: "T5", bottom: activeBeat >= 2 ? "90%" : "10%", color: "bg-emerald-400" },
                  { label: "T6", bottom: activeBeat >= 2 ? "60%" : "10%", color: "bg-emerald-400" },
                  { label: "T7", bottom: activeBeat >= 2 ? "80%" : "10%", color: "bg-emerald-400" },
                  { label: "T8", bottom: activeBeat >= 2 ? "45%" : "10%", color: "bg-emerald-400" }
                ].map((track, i) => (
                  <div key={i} className="flex flex-col items-center justify-between bg-neutral-950/50 rounded p-1">
                    <div className="flex-1 w-0.5 bg-neutral-950 relative flex justify-center">
                      <div className={`w-2.5 h-4 rounded shadow ${track.color} absolute transition-all duration-500`} style={{ bottom: track.bottom }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* LED signal bar */}
              <div className="flex justify-between items-center text-[0.8cqw] font-mono px-1">
                <span className="text-neutral-500">METER MONITOR</span>
                <div className="flex gap-0.5">
                  <div className={`w-2.5 h-1.5 rounded ${activeBeat >= 0 ? "bg-green-500" : "bg-neutral-800"}`} />
                  <div className={`w-2.5 h-1.5 rounded ${activeBeat >= 1 ? "bg-green-500" : "bg-neutral-800"}`} />
                  <div className={`w-2.5 h-1.5 rounded ${activeBeat >= 1 ? "bg-yellow-500" : "bg-neutral-800"}`} />
                  <div className={`w-2.5 h-1.5 rounded ${activeBeat >= 2 ? "bg-red-500" : "bg-neutral-800"}`} />
                </div>
              </div>
            </div>
          )}

          {/* Console baseline values */}
          <div className="border-t border-neutral-800 pt-[0.5cqh] flex justify-between text-[0.8cqw] font-mono text-neutral-600">
            <span>PARAMETER COMPILATION // CONSOLE</span>
            <span>SYSTEM ACTIVE // PEAK OK</span>
          </div>
        </div>
      );
    }

    case "13": { // Subway Map of Intent (The Lifecycle of a Distributed Request)
      // Colors: bgHex: "#f1f5f9", ink: "text-[#0f172a]", redLine: "#ef4444", blueLine: "#3b82f6", greenLine: "#10b981"
      return (
        <div className={`w-[45cqw] h-[34cqh] flex flex-col justify-between p-[1.5cqw] rounded-2xl border border-slate-300 bg-white shadow-lg relative overflow-hidden transition-all duration-500 ${finalClass}`}>
          {/* Subway route track lines (SVG background) */}
          <div className="absolute inset-0 pointer-events-none opacity-70">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              {scene === 1 && (
                // Single large looping route
                <circle cx="50%" cy="50%" r="20%" fill="none" stroke="#ef4444" strokeWidth="4" />
              )}
              {scene === 2 && (
                // Symmetrical A/B crossing lines
                <>
                  <path d="M 10% 30% H 50% L 90% 70%" fill="none" stroke="#ef4444" strokeWidth="4" />
                  <path d="M 10% 70% H 50% L 90% 30%" fill="none" stroke="#3b82f6" strokeWidth="4" />
                </>
              )}
              {scene === 3 && (
                // 3 connected pipeline tracks (Original paths)
                <>
                  <path d="M 10% 50% L 40% 50% L 60% 35% L 90% 35%" fill="none" stroke="#ef4444" strokeWidth="4" />
                  <path d="M 40% 50% L 65% 70% L 90% 70%" fill="none" stroke="#3b82f6" strokeWidth="4" />
                </>
              )}
              {scene === 4 && (
                // 2x2 grid transit connections
                <>
                  <path d="M 20% 25% H 80% V 75% H 20% Z" fill="none" stroke="#ef4444" strokeWidth="3.5" />
                  <path d="M 20% 75% V 25%" fill="none" stroke="#3b82f6" strokeWidth="3.5" />
                  <path d="M 80% 25% V 75%" fill="none" stroke="#10b981" strokeWidth="3.5" />
                </>
              )}
              {scene === 5 && (
                // Extreme transit crossing map
                <>
                  <path d="M 10% 25% H 90%" fill="none" stroke="#ef4444" strokeWidth="3" />
                  <path d="M 10% 50% H 90%" fill="none" stroke="#3b82f6" strokeWidth="3" />
                  <path d="M 10% 75% H 90%" fill="none" stroke="#10b981" strokeWidth="3" />
                  <path d="M 30% 25% L 50% 50% L 70% 75%" fill="none" stroke="#eab308" strokeWidth="3" />
                </>
              )}
            </svg>
          </div>

          <div className="absolute top-[1cqw] left-[1.5cqw] text-[0.8cqw] font-bold text-slate-400 font-mono">
            ROUTING INTENT TRANSIT // MAP
          </div>

          {scene === 1 && (
            // Scene 1 (Ultralight): 1 giant central station
            <div className="flex-1 flex flex-col items-center justify-center relative">
              <div className={`w-[10cqw] h-[10cqw] border-4 rounded-full flex flex-col items-center justify-center p-[1cqw] transition-all duration-700 bg-white ${
                activeBeat === 0 ? "border-slate-300 shadow" :
                activeBeat === 1 ? "border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]" :
                "border-green-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
              }`}>
                <Compass className={`w-[3cqw] h-[3cqw] ${activeBeat === 2 ? "text-green-500" : "text-red-500 animate-spin"}`} style={{ animationDuration: "12s" }} />
                <span className="text-[0.8cqw] font-mono font-black text-slate-900 mt-[0.5cqh] text-center">
                  {activeBeat === 0 ? "INCOMING" : activeBeat === 1 ? "CROSSING" : "TERMINUS"}
                </span>
              </div>
            </div>
          )}

          {scene === 2 && (
            // Scene 2 (Light): Symmetrical A/B dual tracks
            <div className="flex-1 flex items-center justify-between px-[3cqw]">
              <div className="bg-white border-2 border-red-500 p-2 rounded-xl text-center shadow-md font-mono text-[0.8cqw] w-[14cqw]">
                <div className="text-red-600 font-bold">ROUTE_A (EXPRESS)</div>
                <div className="text-slate-500 mt-[0.5cqh]">AUTH GATE</div>
              </div>
              <div className={`bg-white border-2 p-2 rounded-xl text-center shadow-md font-mono text-[0.8cqw] w-[14cqw] transition-all duration-500 ${
                activeBeat >= 1 ? "border-blue-500 opacity-100" : "border-slate-200 opacity-20"
              }`}>
                <div className="text-blue-600 font-bold">ROUTE_B (LOCAL)</div>
                <div className="text-slate-500 mt-[0.5cqh]">VAULT SWIFT</div>
              </div>
            </div>
          )}

          {scene === 3 && (
            // Scene 3 (Standard): 3 connected pipeline tracks (Original Subway Map)
            <div className="flex-1 flex items-center justify-between px-[2cqw] my-[1cqh]">
              <div className="bg-white border-2 border-red-500 p-[0.8cqw] rounded-xl text-center shadow-md font-mono text-[0.8cqw] w-[11cqw]">
                <div className="text-red-600 font-black">CLIENT NODE</div>
                <div className="text-slate-400">01 // SOURCE</div>
              </div>
              <div className={`bg-white border-2 p-[0.8cqw] rounded-xl text-center shadow-md font-mono text-[0.8cqw] w-[11cqw] transition-all duration-500 ${
                activeBeat >= 1 ? "border-blue-500 opacity-100" : "border-slate-100 opacity-20"
              }`}>
                <div className="text-blue-600 font-black">TRANSIT CORES</div>
                <div className="text-slate-400">02 // ROUTER</div>
              </div>
              <div className={`bg-white border-2 p-[0.8cqw] rounded-xl text-center shadow-md font-mono text-[0.8cqw] w-[11cqw] transition-all duration-500 ${
                activeBeat >= 2 ? "border-emerald-500 opacity-100 animate-pulse" : "border-slate-100 opacity-10"
              }`}>
                <div className="text-emerald-600 font-black">DATA TERMINAL</div>
                <div className="text-slate-400">03 // DEST</div>
              </div>
            </div>
          )}

          {scene === 4 && (
            // Scene 4 (Dense): 2x2 transit stations grid
            <div className="flex-1 grid grid-cols-2 gap-[1.5cqw] my-[1cqh] z-10">
              {[
                { name: "STATION 1 (GATEWAY)", color: "border-red-500 text-red-600", active: true },
                { name: "STATION 2 (AUTH)", color: "border-blue-500 text-blue-600", active: activeBeat >= 1 },
                { name: "STATION 3 (QUEUE)", color: "border-green-500 text-green-600", active: activeBeat >= 1 },
                { name: "STATION 4 (VAULT)", color: "border-emerald-500 text-emerald-600", active: activeBeat >= 2 }
              ].map((item, idx) => (
                <div key={idx} className={`p-2 bg-white border-2 rounded-xl shadow-sm text-center font-mono text-[0.8cqw] transition-all duration-500 ${
                  item.active ? item.color : "border-slate-100 text-slate-300 opacity-20"
                }`}>
                  <div className="font-bold">{item.name}</div>
                  <div className="text-[0.7cqw] text-slate-400 mt-[0.2cqh]">{item.active ? "STATUS: ACTIVE" : "STATUS: HOLD"}</div>
                </div>
              ))}
            </div>
          )}

          {scene === 5 && (
            // Scene 5 (Extreme): Transit lines map board
            <div className="flex-1 flex flex-col justify-between my-[0.2cqh] z-10 bg-white/40 p-2 rounded-xl border border-slate-200">
              <div className="grid grid-cols-4 gap-[0.5cqw]">
                {[
                  { name: "RED LINE", status: "STABLE", color: "bg-red-500" },
                  { name: "BLUE LINE", status: activeBeat >= 1 ? "ACTIVE" : "STANDBY", color: "bg-blue-500" },
                  { name: "GREEN LINE", status: activeBeat >= 2 ? "ACTIVE" : "STANDBY", color: "bg-green-500" },
                  { name: "YELLOW LINE", status: activeBeat >= 2 ? "OPTIMAL" : "STANDBY", color: "bg-yellow-500" }
                ].map((line, i) => (
                  <div key={i} className="bg-white border border-slate-200 p-[0.5cqw] rounded text-center">
                    <span className={`inline-block w-2 h-2 rounded-full ${line.color}`} />
                    <p className="text-[0.7cqw] font-mono text-slate-800 font-bold leading-none mt-1">{line.name}</p>
                    <p className="text-[0.6cqw] font-mono text-slate-400 mt-1">{line.status}</p>
                  </div>
                ))}
              </div>

              <div className="text-[0.8cqw] font-mono text-slate-500 text-right px-1 flex justify-between items-center mt-1">
                <span>TRANSIT INDEX</span>
                <span>METROPOLITAN SCHEMATICS ✓</span>
              </div>
            </div>
          )}

          <div className="border-t border-slate-200 pt-[0.5cqh] flex justify-between text-[0.8cqw] font-mono text-slate-400">
            <span>TRANSIT CORES INTEGRITY</span>
            <span className="text-emerald-600 font-bold">100% ROUTABLE</span>
          </div>
        </div>
      );
    }

    case "14": { // Kitchen Prep Station (Raw Text Pre-processing & Tokenization)
      // Colors: bgHex: "#fff7ed", ink: "text-[#ea580c]", success: "#10b981", accent: "text-[#7c2d12]"
      return (
        <div className={`w-[45cqw] h-[34cqh] flex flex-col justify-between p-[1.5cqw] rounded-2xl border-2 border-amber-900/30 bg-orange-50/50 shadow-md relative overflow-hidden transition-all duration-500 ${finalClass}`}>
          {/* Wooden board texture marks (SVG backgrounds) */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
            backgroundImage: "radial-gradient(#7c2d12 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }} />

          <div className="border-b border-amber-900/20 pb-[0.5cqh] text-[#ea580c] font-bold text-[0.8cqw] font-mono flex justify-between">
            <span>CHOPPING BOARD // PREP</span>
            <span>ZONE MATRIX</span>
          </div>

          {scene === 1 && (
            // Scene 1 (Ultralight): 1 giant central knife cutting core
            <div className="flex-1 flex flex-col items-center justify-center my-[1cqh]">
              <div className={`w-[11cqw] h-[11cqw] border-2 border-amber-900 bg-white rounded-2xl flex flex-col items-center justify-center p-[1cqw] transition-all duration-700 ${
                activeBeat === 0 ? "opacity-100" :
                activeBeat === 1 ? "border-dashed rotate-3 bg-amber-50" :
                "border-emerald-500 rotate-0 bg-emerald-50 shadow"
              }`}>
                <span className="text-[3cqw] mb-[0.2cqh]">{activeBeat === 0 ? "🥕" : activeBeat === 1 ? "🔪" : "🍽️"}</span>
                <span className="text-[0.8cqw] font-mono font-black text-amber-950 text-center uppercase">
                  {activeBeat === 0 ? "RAW INGREDIENT" : activeBeat === 1 ? "CHOPPING SLICES" : "PLATED ARRAY"}
                </span>
              </div>
            </div>
          )}

          {scene === 2 && (
            // Scene 2 (Light): Symmetrical A/B prep zones
            <div className="flex-1 grid grid-cols-2 gap-[1.5cqw] my-[1cqh]">
              <div className="bg-white border border-amber-900 p-[1cqw] rounded-xl flex flex-col justify-between shadow-sm">
                <span className="text-[0.8cqw] font-mono text-amber-800 font-bold border-b border-amber-100 pb-1">TRAY A // PRIMARY RAW</span>
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-[2.2cqw]">🥕🥕</span>
                </div>
                <span className="text-[0.8cqw] font-mono text-amber-600">RAW_INPUT</span>
              </div>

              <div className={`bg-white border p-[1cqw] rounded-xl flex flex-col justify-between shadow-sm transition-all duration-500 ${
                activeBeat >= 1 ? "border-amber-900 opacity-100" : "border-slate-200 opacity-20"
              }`}>
                <span className="text-[0.8cqw] font-mono text-amber-800 font-bold border-b border-amber-100 pb-1">TRAY B // SEASONING ARRAY</span>
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-[2.2cqw]">🌶️🌿</span>
                </div>
                <span className="text-[0.8cqw] font-mono text-amber-600">REGEX_SPICES</span>
              </div>
            </div>
          )}

          {scene === 3 && (
            // Scene 3 (Standard): 3 chronological zones (Original Prep Station)
            <div className="grid grid-cols-3 gap-[1cqw] mt-1 h-[70%]">
              <div className="bg-white border border-amber-900 p-[1cqw] rounded-lg flex flex-col justify-between shadow-sm">
                <span className="text-[1.5cqw]">🥕</span>
                <div>
                  <p className="font-bold text-[0.8cqw] text-amber-950">Raw Input</p>
                  <p className="text-[0.6cqw] font-mono text-slate-500">Uncut Buffer</p>
                </div>
              </div>
              <div className={`bg-white border border-amber-900 p-[1cqw] rounded-lg flex flex-col justify-between shadow-sm transition-all duration-500 ${activeBeat >= 1 ? "opacity-100" : "opacity-0"}`}>
                <span className="text-[1.5cqw]">🔪</span>
                <div>
                  <p className="font-bold text-[0.8cqw] text-amber-950">Slices</p>
                  <p className="text-[0.6cqw] font-mono text-slate-500">Regex Tokenized</p>
                </div>
              </div>
              <div className={`bg-white border border-amber-900 p-[1cqw] rounded-lg flex flex-col justify-between shadow-sm transition-all duration-500 ${activeBeat >= 2 ? "opacity-100" : "opacity-0"}`}>
                <span className="text-[1.5cqw]">🍽️</span>
                <div>
                  <p className="font-bold text-[0.8cqw] text-[#ea580c]">Plated Array</p>
                  <p className="text-[0.6cqw] font-mono text-[#ea580c]/70">Yield Output</p>
                </div>
              </div>
            </div>
          )}

          {scene === 4 && (
            // Scene 4 (Dense): 2x2 layout of chef prep slots
            <div className="flex-1 grid grid-cols-2 gap-[1cqw] my-[0.5cqh]">
              {[
                { title: "SLOT 1: PEEL", item: "🥔", active: true },
                { title: "SLOT 2: CHOP", item: "🔪", active: activeBeat >= 1 },
                { title: "SLOT 3: SPICE", item: "🌶️", active: activeBeat >= 1 },
                { title: "SLOT 4: PLATE", item: "🍽️", active: activeBeat >= 2 }
              ].map((slot, idx) => (
                <div key={idx} className={`bg-white border p-2 rounded-xl shadow-sm flex items-center justify-between transition-all duration-500 ${
                  slot.active ? "border-amber-900" : "border-slate-100 opacity-20"
                }`}>
                  <div className="font-mono text-[0.8cqw]">
                    <span className="font-bold text-amber-950">{slot.title}</span>
                    <p className="text-[0.7cqw] text-slate-500">{slot.active ? "COMPLETED" : "WAIT"}</p>
                  </div>
                  <span className="text-[1.5cqw]">{slot.item}</span>
                </div>
              ))}
            </div>
          )}

          {scene === 5 && (
            // Scene 5 (Extreme): Multi-station kitchen prep assembly
            <div className="flex-1 flex flex-col justify-between my-[0.2cqh]">
              <div className="grid grid-cols-5 gap-[0.5cqw]">
                {[
                  { name: "WASH", icon: "💧" },
                  { name: "STRIP", icon: "🌿" },
                  { name: "SLICE", icon: "🔪" },
                  { name: "MIX", icon: "🥣" },
                  { name: "PLATE", icon: "🍽️" }
                ].map((step, i) => {
                  const isStepActive = (i === 0) || (i <= 2 && activeBeat >= 1) || (i <= 4 && activeBeat >= 2);
                  return (
                    <div key={i} className={`bg-white border p-1 rounded-lg text-center transition-all ${
                      isStepActive ? "border-amber-900" : "border-slate-100 opacity-20"
                    }`}>
                      <span className="text-[1cqw]">{step.icon}</span>
                      <p className="text-[0.6cqw] font-mono font-bold text-amber-950 mt-1 leading-none">{step.name}</p>
                    </div>
                  );
                })}
              </div>

              {/* Wooden ledger outline */}
              <div className="text-[0.8cqw] font-mono text-amber-800 text-right px-1 flex justify-between items-center mt-1">
                <span>PREP YIELD LEDGER</span>
                <span className="text-emerald-600 font-bold">✓ FRESH INGREDIENTS READY</span>
              </div>
            </div>
          )}

          <div className="border-t border-amber-900/10 pt-[0.5cqh] flex justify-between text-[0.8cqw] font-mono text-[#ea580c]/60">
            <span>KITCHEN BENTO COMPACTNESS</span>
            <span>MODEL YIELD 100%</span>
          </div>
        </div>
      );
    }

    case "15": { // Context Bento Box (Modern AI Agent Platform Architecture)
      // Colors: bgHex: "#1c1917", ink: "text-[#fafaf9]", accent: "text-[#d97706]", systemBlue: "#2563eb"
      return (
        <div className={`w-[45cqw] h-[34cqh] flex flex-col justify-between p-[1.5cqw] rounded-2xl border border-amber-500/20 bg-amber-950/5 relative overflow-hidden transition-all duration-500 ${finalClass}`}>
          {/* Bento box boundaries layout lines */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <rect x="5%" y="5%" width="90%" height="90%" rx="16" fill="none" stroke="#d97706" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="border-b border-amber-500/20 pb-[0.5cqh] text-amber-500 font-bold text-[0.8cqw] font-mono flex justify-between">
            <span>BENTO COMPARTMENTS // LACQUER BOX</span>
            <span>MODEL_BENTO_15</span>
          </div>

          {scene === 1 && (
            // Scene 1 (Ultralight): 1 giant center lacquer box
            <div className="flex-1 flex flex-col items-center justify-center my-[1cqh]">
              <div className={`w-[11cqw] h-[11cqw] border-2 rounded-2xl flex flex-col items-center justify-center p-[1cqw] transition-all duration-700 ${
                activeBeat === 0 ? "border-amber-500/40 bg-amber-950/20" :
                activeBeat === 1 ? "border-amber-400 bg-amber-950/40 rotate-[1deg] shadow-[0_0_15px_rgba(217,119,6,0.3)] animate-3d-flip" :
                "border-emerald-500 bg-emerald-950/20 shadow-[0_0_25px_rgba(16,185,129,0.4)]"
              }`}>
                <span className="text-[3cqw] mb-[0.2cqh]">💾</span>
                <span className="text-[0.8cqw] font-mono font-black text-amber-500 text-center uppercase">
                  {activeBeat === 0 ? "SEMANTIC CORE" : activeBeat === 1 ? "CONTEXT ROTATE" : "ALIGN COMPLETE"}
                </span>
              </div>
            </div>
          )}

          {scene === 2 && (
            // Scene 2 (Light): Symmetrical A/B dual bento panes
            <div className="flex-1 grid grid-cols-2 gap-[1.5cqw] my-[1cqh]">
              <div className="border border-amber-500/30 bg-amber-950/10 p-[1cqw] rounded-xl flex flex-col justify-between">
                <span className="text-[1.8cqw]">💾</span>
                <p className="font-bold text-[1cqw] text-amber-500 font-mono leading-none uppercase">01 // CORE MEMORY</p>
                <span className="text-[0.8cqw] text-zinc-400 font-mono">SEMANTIC_VAULT</span>
              </div>

              <div className={`border p-[1cqw] rounded-xl flex flex-col justify-between transition-all duration-500 ${
                activeBeat >= 1 ? "border-amber-400 bg-amber-950/20" : "border-slate-800 opacity-20"
              }`}>
                <span className="text-[1.8cqw]">🛠️</span>
                <p className="font-bold text-[1cqw] text-amber-500 font-mono leading-none uppercase">02 // TOOL REGISTRY</p>
                <span className="text-[0.8cqw] text-zinc-400 font-mono">EXECUTABLE_SPECS</span>
              </div>
            </div>
          )}

          {scene === 3 && (
            // Scene 3 (Standard): 3 connected lacquer compartments (Original Bento Box)
            <div className="grid grid-cols-3 gap-[1cqw] w-full my-[1cqh]">
              <div className="border border-amber-500/30 bg-amber-950/10 p-[1cqw] rounded-xl flex flex-col justify-between min-h-[14cqh] rotate-[-1deg]">
                <span className="text-[1.8cqw]">💾</span>
                <p className="font-bold text-[0.9cqw] text-amber-500 font-mono leading-none">SEMANTIC MEMORY</p>
              </div>
              <div className={`border border-blue-500/30 bg-blue-950/10 p-[1cqw] rounded-xl flex flex-col justify-between min-h-[14cqh] transition-all duration-500 ${activeBeat >= 1 ? "opacity-100 rotate-1" : "opacity-0"}`}>
                <span className="text-[1.8cqw]">🛠️</span>
                <p className="font-bold text-[0.9cqw] text-blue-400 font-mono leading-none">TOOLS</p>
              </div>
              <div className={`border border-emerald-500/30 bg-emerald-950/10 p-[1cqw] rounded-xl flex flex-col justify-between min-h-[14cqh] transition-all duration-500 ${activeBeat >= 2 ? "opacity-100 rotate-[-1deg]" : "opacity-0"}`}>
                <span className="text-[1.8cqw]">✓</span>
                <p className="font-bold text-[0.9cqw] text-emerald-400 font-mono leading-none">ORCHESTRATOR</p>
              </div>
            </div>
          )}

          {scene === 4 && (
            // Scene 4 (Dense): 2x2 grid of lacquer boxes
            <div className="flex-1 grid grid-cols-2 gap-[1cqw] my-[0.5cqh]">
              {[
                { title: "CORE MEM", icon: "💾", color: "border-amber-500/30 text-amber-500", active: true },
                { title: "TOOL EXEC", icon: "🛠️", color: "border-blue-500/30 text-blue-400", active: activeBeat >= 1 },
                { title: "USER PROMPT", icon: "👤", color: "border-indigo-500/30 text-indigo-400", active: activeBeat >= 1 },
                { title: "LLM BRAIN", icon: "🧠", color: "border-emerald-500/30 text-emerald-400", active: activeBeat >= 2 }
              ].map((item, idx) => (
                <div key={idx} className={`p-2 border rounded-xl flex items-center gap-[1cqw] bg-slate-900/40 transition-all duration-500 ${
                  item.active ? item.color : "border-slate-800 opacity-20"
                }`}>
                  <span className="text-[1.5cqw]">{item.icon}</span>
                  <span className="text-[0.8cqw] font-mono font-bold leading-none">{item.title}</span>
                </div>
              ))}
            </div>
          )}

          {scene === 5 && (
            // Scene 5 (Extreme): Bento network diagram with 5 modular lacquer compartments
            <div className="flex-1 flex flex-col justify-between my-[0.2cqh]">
              <div className="grid grid-cols-5 gap-[0.5cqw]">
                {[
                  { name: "MEMORY", icon: "💾" },
                  { name: "TOOLS", icon: "🛠️" },
                  { name: "CONSTRAIN", icon: "🛡️" },
                  { name: "PROMPT", icon: "📝" },
                  { name: "EXECUTE", icon: "🚀" }
                ].map((item, i) => {
                  const isItemActive = (i === 0) || (i <= 2 && activeBeat >= 1) || (i <= 4 && activeBeat >= 2);
                  return (
                    <div key={i} className={`border p-1 rounded-lg text-center transition-all bg-slate-900/60 ${
                      isItemActive ? "border-amber-500/40 text-amber-500" : "border-slate-800 opacity-20"
                    }`}>
                      <span className="text-[1.2cqw]">{item.icon}</span>
                      <p className="text-[0.6cqw] font-mono font-bold leading-none mt-1">{item.name}</p>
                    </div>
                  );
                })}
              </div>

              {/* Alignment verification */}
              <div className="text-[0.8cqw] font-mono text-amber-500/60 flex justify-between items-center mt-1 px-1">
                <span>ALIGNMENT: {activeBeat === 0 ? "20%" : activeBeat === 1 ? "60%" : "100%"}</span>
                <span className="text-emerald-400">✓ COMPARTMENTS ALIGNED</span>
              </div>
            </div>
          )}

          <div className="border-t border-amber-500/10 pt-[0.5cqh] flex justify-between text-[0.8cqw] font-mono text-amber-500/50">
            <span>BENTO SYSTEM VERIFIED</span>
            <span>MODEL SYNCED OK</span>
          </div>
        </div>
      );
    }

    case "16": { // Debug Reaction Board (Microservices Health Self-Check)
      // Colors: bgHex: "#020617", ink: "text-[#f8fafc]", green: "#10b981", red: "#ef4444"
      return (
        <div className={`w-[45cqw] h-[34cqh] flex flex-col justify-between p-[1.5cqw] rounded-2xl border border-slate-800 bg-[#020617] shadow-xl relative overflow-hidden transition-all duration-500 ${finalClass}`}>
          {/* Scanline/Grid lines */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{
            backgroundImage: "linear-gradient(#f8fafc 1px, transparent 1px)",
            backgroundSize: "100% 1cqh"
          }} />

          <div className="flex justify-between items-center border-b border-slate-850 pb-[0.5cqh] font-mono text-[0.8cqw]">
            <span className="text-slate-400">MICROSERVICES DIAGNOSTIC PANEL</span>
            <span className="text-slate-500 animate-pulse">● LIVE CONNECTION STABLE</span>
          </div>

          {scene === 1 && (
            // Scene 1 (Ultralight): 1 giant central health node
            <div className="flex-1 flex flex-col items-center justify-center my-[1cqh]">
              <div className={`w-[11cqw] h-[11cqw] border-2 rounded-full flex flex-col items-center justify-center p-[1cqw] transition-all duration-700 bg-black/40 ${
                activeBeat === 0 ? "border-slate-700 text-slate-500" :
                activeBeat === 1 ? "border-red-500 text-red-500 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.4)]" :
                "border-emerald-500 text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.5)]"
              }`}>
                <Activity className="w-[3cqw] h-[3cqw] mb-[0.2cqh]" />
                <span className="text-[0.8cqw] font-mono font-black text-center uppercase">
                  {activeBeat === 0 ? "STANDBY" : activeBeat === 1 ? "ERR LOCK" : "SYS GREEN"}
                </span>
              </div>
            </div>
          )}

          {scene === 2 && (
            // Scene 2 (Light): Symmetrical A/B dual nodes
            <div className="flex-1 flex items-center justify-between px-[3cqw] my-[1cqh]">
              <div className="bg-black/50 border border-slate-800 p-2 rounded-xl text-center font-mono text-[0.8cqw] w-[14cqw]">
                <div className="text-emerald-400 font-bold flex items-center justify-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  INGRESS_A
                </div>
                <div className="text-slate-500 mt-[0.2cqh]">PING: 12ms // OK</div>
              </div>

              <div className={`bg-black/50 border p-2 rounded-xl text-center font-mono text-[0.8cqw] w-[14cqw] transition-all duration-500 ${
                activeBeat >= 1 ? "border-emerald-500 opacity-100" : "border-slate-800 opacity-20"
              }`}>
                <div className="text-emerald-400 font-bold flex items-center justify-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  EGRESS_B
                </div>
                <div className="text-slate-500 mt-[0.2cqh]">{activeBeat >= 1 ? "PING: 14ms // OK" : "PING: NULL"}</div>
              </div>
            </div>
          )}

          {scene === 3 && (
            // Scene 3 (Standard): 3 timeline channels (Original Diagnostics Log)
            <div className="flex-1 bg-black/60 border border-slate-900 rounded-xl p-[0.8cqw] my-[0.8cqh] text-[0.8cqw] leading-none overflow-hidden flex flex-col gap-[0.5cqh] font-mono">
              <span className="text-red-500">&gt; ERR: connection peak 98%</span>
              {activeBeat >= 1 && <span className="text-amber-400 animate-pulse">&gt; WARN: circuit breaker open (auto-scaling)</span>}
              {activeBeat >= 2 && <span className="text-emerald-400 font-bold">&gt; INFO: pool scale complete. 100% metrics recovered.</span>}
            </div>
          )}

          {scene === 4 && (
            // Scene 4 (Dense): 2x2 grid of cluster nodes
            <div className="flex-1 grid grid-cols-2 gap-[1cqw] my-[0.5cqh]">
              {[
                { name: "CLUSTER_01 (INGRESS)", val: "CPU: 23%", color: "text-emerald-400", active: true },
                { name: "CLUSTER_02 (GATEWAY)", val: activeBeat >= 1 ? "CPU: 41%" : "WAIT", color: activeBeat >= 1 ? "text-emerald-400" : "text-slate-600", active: activeBeat >= 1 },
                { name: "CLUSTER_03 (CACHE)", val: activeBeat >= 1 ? "MEM: 62%" : "WAIT", color: activeBeat >= 1 ? "text-emerald-400" : "text-slate-600", active: activeBeat >= 1 },
                { name: "CLUSTER_04 (DB_REPLICA)", val: activeBeat >= 2 ? "SECURED" : "HOLD", color: activeBeat >= 2 ? "text-emerald-400" : "text-slate-600", active: activeBeat >= 2 }
              ].map((node, idx) => (
                <div key={idx} className={`p-2 bg-black/40 border rounded-xl font-mono text-[0.8cqw] transition-all duration-500 ${
                  node.active ? "border-slate-700" : "border-slate-900 opacity-20"
                }`}>
                  <div className="text-slate-500 truncate">{node.name}</div>
                  <div className={`font-bold mt-1 ${node.color}`}>{node.val}</div>
                </div>
              ))}
            </div>
          )}

          {scene === 5 && (
            // Scene 5 (Extreme): Complex diagnostic dashboard
            <div className="flex-1 flex flex-col justify-between my-[0.2cqh]">
              <div className="grid grid-cols-3 gap-[0.5cqw]">
                <div className="p-1.5 border border-slate-800 rounded bg-black/40 text-center font-mono text-[0.7cqw]">
                  <div className="text-slate-500">THREADS</div>
                  <div className="text-emerald-400 font-bold mt-0.5">2,400</div>
                </div>
                <div className={`p-1.5 border rounded bg-black/40 text-center font-mono text-[0.7cqw] transition-all ${activeBeat >= 1 ? "border-slate-700" : "border-slate-900 opacity-30"}`}>
                  <div className="text-slate-500">ERR_RATE</div>
                  <div className={`font-bold mt-0.5 ${activeBeat >= 1 ? "text-emerald-400" : "text-slate-500"}`}>{activeBeat >= 1 ? "0.00%" : "0.00%"}</div>
                </div>
                <div className={`p-1.5 border rounded bg-black/40 text-center font-mono text-[0.7cqw] transition-all ${activeBeat >= 2 ? "border-emerald-800" : "border-slate-900 opacity-15"}`}>
                  <div className="text-slate-500">QUOTA</div>
                  <div className="text-emerald-400 font-bold mt-0.5">{activeBeat >= 2 ? "100%" : "HOLD"}</div>
                </div>
              </div>

              {/* Status footer typewriter print */}
              <div className="text-[0.7cqw] font-mono bg-black/50 p-1.5 rounded border border-slate-900 leading-none overflow-hidden truncate">
                <span className="text-slate-500">LOG: </span>
                {activeBeat === 0 && <span className="text-slate-300">SYSTEM_RECOVERY_HEURISTIC_INITIATED</span>}
                {activeBeat === 1 && <span className="text-amber-400">RE-ROUTING TRAFFIC PATHWAYS TO SPARE STATIONS</span>}
                {activeBeat === 2 && <span className="text-emerald-400 font-black">POOL SCALE SUCCESS. DIAGNOSTIC RECOVERY COMPLETE.</span>}
              </div>
            </div>
          )}

          <div className="border-t border-slate-850 pt-[0.5cqh] flex justify-between font-mono text-[0.8cqw] text-slate-500">
            <span>TERMINAL CONSOLE STATUS</span>
            <span className="text-emerald-400 font-bold">● DIAGNOSTIC OK</span>
          </div>
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
