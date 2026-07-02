import React, { useEffect, useState } from "react";
import {
  RotateCw, HelpCircle, MessageSquare, AlertTriangle, ShieldCheck, 
  Terminal, Play, Cpu, CheckSquare, Layers, Award, Code, Compass,
  Sliders, Navigation, RefreshCw, FileText, CheckCircle2, ChevronRight,
  TrendingUp, Users, HardDrive
} from "lucide-react";

export function SlideRenderer({ style, scene, beat, isThumbnail = false }) {
  const currentBeatIndex = beat;
  const currentScene = style.scenes.find((s) => s.id === scene) || style.scenes[0];
  const beatData = currentScene.beats[currentBeatIndex] || currentScene.beats[0];

  // Map font styles
  const headerFont = style.id === "02" || style.id === "06" ? "font-['Caveat']" :
                     style.id === "07" ? "font-['VT323']" :
                     style.id === "17" ? "font-['Cormorant_Garamond']" :
                     style.id === "01" || style.id === "08" || style.id === "21" ? "font-['Playfair_Display']" : "font-sans font-black";

  const bodyFont = style.id === "03" || style.id === "04" || style.id === "09" || style.id === "10" || 
                    style.id === "11" || style.id === "12" || style.id === "13" || style.id === "14" || 
                    style.id === "15" || style.id === "16" || style.id === "18" || style.id === "19" || 
                    style.id === "20" || style.id === "22" || style.id === "23" || style.id === "24" ? "font-['Fira_Code']" : "font-sans";

  return (
    <div 
      className={`w-full h-full relative p-[5cqw] flex flex-col justify-between overflow-hidden select-none transition-all duration-500 ${style.colors.bg} ${style.colors.ink}`}
      style={{
        fontFamily: style.typography.body === "Fira Code" ? "Fira Code, monospace" : "Inter, sans-serif"
      }}
    >
      {/* Background decorations based on style */}
      {style.id === "01" && (
        <div className="absolute inset-0 bg-radial from-transparent to-black/10 pointer-events-none" />
      )}
      {style.id === "02" && (
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{
          backgroundImage: "radial-gradient(#2d2722 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }} />
      )}
      {style.id === "06" && (
        <div className="absolute inset-0 pointer-events-none opacity-[0.1]" style={{
          backgroundImage: "linear-gradient(90deg, #ffffff 1px, transparent 1px), linear-gradient(180deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
      )}
      {style.id === "08" && (
        <div className={`absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(13,148,136,0.15)_0%,transparent_60%)] ${beat >= 1 ? "animate-spotlight" : ""}`} />
      )}
      {style.id === "23" && (
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={{
          backgroundImage: "linear-gradient(#111c16 1px, transparent 1px)",
          backgroundSize: "100% 2.5cqh"
        }} />
      )}

      {/* Slide Topline / Header */}
      <header className="flex justify-between items-center z-10 select-none">
        <div className="flex items-center gap-[1cqw]">
          <span data-testid="slide-style-id" className={`px-[1.2cqw] py-[0.4cqw] text-[1.2cqw] font-bold rounded ${style.id === "02" ? "bg-amber-200 border-2 border-[#2d2722] rotate-[-2deg]" : style.id === "07" ? "bg-green-500 text-black font-mono rotate-[1deg]" : "bg-neutral-800 text-white"}`}>
            {style.id}
          </span>
          <span className={`text-[1.3cqw] font-bold tracking-wider uppercase opacity-80 ${headerFont}`}>
            {style.theme}
          </span>
        </div>
        <div className="text-[1.2cqw] opacity-60 font-mono tracking-widest">
          {style.densityLabel}
        </div>
      </header>

      {/* Main Slide Layout */}
      <div className="grid grid-cols-12 gap-[4cqw] items-center my-auto z-10 min-h-[55cqh]">
        {/* Left Side: Copy */}
        <div className="col-span-6 flex flex-col justify-center h-full">
          <div className="flex flex-col gap-[1.5cqh]">
            {/* Beat Subtitle / Eyebrow */}
            <span className={`text-[1.5cqw] font-bold tracking-widest uppercase opacity-75 select-none ${style.id === "02" ? "text-amber-600" : "text-cyan-500"}`}>
              {beatData.caption}
            </span>
            {/* Beat Headline */}
            <h1 className={`text-[4cqw] leading-[1.1] font-black tracking-tight ${headerFont}`}>
              {beatData.title}
            </h1>
            {/* Beat Body Paragraph */}
            <p className={`text-[1.6cqw] leading-[1.4] opacity-80 ${bodyFont}`}>
              {beatData.body}
            </p>
          </div>
        </div>

        {/* Right Side: Visual Metaphor Canvas */}
        <div className="col-span-6 h-full flex items-center justify-center relative min-h-[45cqh]">
          <VisualMetaphorRenderer style={style} scene={scene} beat={beat} isThumbnail={isThumbnail} />
        </div>
      </div>

      {/* Footer Punchline Area */}
      <footer className="flex justify-between items-center z-10 border-t border-current/10 pt-[1.5cqw] select-none">
        <p className={`text-[1.4cqw] font-medium italic opacity-90 tracking-wide flex items-center gap-[0.5cqw] ${bodyFont}`}>
          <span className="inline-block w-[0.8cqw] h-[0.8cqw] rounded-full bg-cyan-500 animate-pulse" />
          {beatData.beatLine}
        </p>
        <span className="text-[1.1cqw] opacity-40 font-mono">
          Scene {scene} of 2 • Beat {beat + 1} of 3
        </span>
      </footer>
    </div>
  );
}

function VisualMetaphorRenderer({ style, scene, beat, isThumbnail }) {
  const finalClass = beat > 0 ? "opacity-100" : "opacity-85";

  switch (style.id) {
    case "01": // Minimal Product Keynote (Bloch Sphere)
      return (
        <div className={`relative w-[28cqw] h-[28cqw] flex items-center justify-center transition-all duration-500 ${finalClass}`}>
          {/* Main sphere */}
          <div className="absolute w-full h-full rounded-full border-2 border-dashed border-current/20 animate-rotate-slow flex items-center justify-center">
            {/* Internal orbits */}
            <div className={`absolute w-[80%] h-[40%] rounded-full border border-current/30 transform rotate-45 transition-all duration-500 ${beat >= 1 ? "border-cyan-400/80" : ""}`} />
            <div className={`absolute w-[40%] h-[80%] rounded-full border border-current/30 transform -rotate-45 transition-all duration-500 ${beat >= 2 ? "border-amber-400/80" : ""}`} />
          </div>
          {/* Core Bloch Sphere node */}
          <div className={`w-[12cqw] h-[12cqw] rounded-full bg-radial from-cyan-400/40 via-cyan-500/10 to-transparent flex items-center justify-center border-2 border-cyan-500/40 transition-all duration-500 shadow-[0_0_30px_rgba(6,182,212,0.3)] ${beat >= 2 ? "scale-110 shadow-[0_0_50px_rgba(6,182,212,0.6)]" : ""}`}>
            <Cpu className={`w-[5cqw] h-[5cqw] text-cyan-400 transition-all duration-500 ${beat >= 2 ? "rotate-90" : ""}`} />
          </div>
          {/* Quantum states indicator */}
          <div className="absolute top-2 left-2 font-mono text-[1cqw] text-cyan-400/80">|Ψ⟩ = α|0⟩ + β|1⟩</div>
          {beat >= 1 && <div className="absolute right-2 top-4 font-mono text-[0.9cqw] text-amber-400">Coherence: 99.98%</div>}
        </div>
      );

    case "02": // Sketch Board Emoji (Sticky Notes)
      return (
        <div className={`grid grid-cols-2 gap-[1.5cqw] w-full transition-all duration-500 ${finalClass}`}>
          {/* Sticky Yellow */}
          <div className="bg-amber-100 border-2 border-[#2d2722] p-[1.5cqw] rounded shadow-[5px_5px_0_#2d2722] rotate-[-2deg] flex flex-col gap-[0.5cqw] min-h-[16cqh]">
            <div className="flex justify-between items-center border-b border-[#2d2722]/10 pb-1">
              <span className="text-[1cqw] font-bold font-mono">STEP 01</span>
              <span>⚡️</span>
            </div>
            <p className="font-['Caveat'] text-[1.8cqw] leading-tight text-amber-900 font-bold">Local Instant Saves</p>
            <p className="text-[1cqw] opacity-75">Offline-first, zero ui thread block.</p>
          </div>
          {/* Sticky Blue */}
          <div className={`bg-blue-100 border-2 border-[#2d2722] p-[1.5cqw] rounded shadow-[5px_5px_0_#2d2722] rotate-[2deg] flex flex-col gap-[0.5cqw] min-h-[16cqh] transition-all duration-500 ${beat >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
            <div className="flex justify-between items-center border-b border-[#2d2722]/10 pb-1">
              <span className="text-[1cqw] font-bold font-mono">STEP 02</span>
              <span>🤝</span>
            </div>
            <p className="font-['Caveat'] text-[1.8cqw] leading-tight text-blue-900 font-bold">CRDT Auto-Merge</p>
            <p className="text-[1cqw] opacity-75">Bg thread conflict resolution.</p>
          </div>
          {/* Sticky Pink */}
          <div className={`col-span-2 bg-rose-100 border-2 border-[#2d2722] p-[1.5cqw] rounded shadow-[5px_5px_0_#2d2722] rotate-[-1deg] flex flex-col gap-[0.5cqw] min-h-[12cqh] transition-all duration-500 ${beat >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
            <div className="flex justify-between items-center border-b border-[#2d2722]/10 pb-1">
              <span className="text-[1cqw] font-bold font-mono">FINAL LEDGER</span>
              <span>🔋</span>
            </div>
            <p className="font-['Caveat'] text-[1.8cqw] leading-tight text-rose-900 font-bold">Delta compaction saves data + battery!</p>
          </div>
        </div>
      );

    case "03": // Interactive Dialogue Stage (Chat Bubbles)
      return (
        <div className={`flex flex-col gap-[1.5cqw] w-full max-w-[32cqw] transition-all duration-500 ${finalClass}`}>
          {/* User Bubble */}
          <div className="bg-slate-800/80 border border-slate-700/50 p-[1.5cqw] rounded-2xl rounded-bl-sm flex flex-col gap-1 self-start shadow-lg">
            <span className="text-[1cqw] text-slate-400 font-mono font-bold">HUMAN DEVELOPER</span>
            <p className="text-[1.3cqw] leading-tight">Can we clean up this legacy database sync module?</p>
          </div>
          {/* Agent Bubble */}
          <div className={`bg-[#0d9488]/20 border border-[#0d9488]/40 p-[1.5cqw] rounded-2xl rounded-br-sm flex flex-col gap-1 self-end shadow-lg transition-all duration-500 ${beat >= 1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}`}>
            <span className="text-[1cqw] text-[#0d9488] font-mono font-bold">CODING AGENT</span>
            <p className="text-[1.3cqw] leading-tight">Analyzing database locking. I will isolate locks in an AST worker thread.</p>
          </div>
          {/* Handshake Status */}
          <div className={`border-2 border-dashed border-teal-500/40 bg-teal-950/20 p-[1.2cqw] rounded-xl flex items-center justify-center gap-3 transition-all duration-500 ${beat >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
            <ShieldCheck className="w-[2cqw] h-[2cqw] text-teal-400 animate-pulse" />
            <span className="font-mono text-[1.1cqw] text-teal-400 font-bold">Sync mapping established (40ms)</span>
          </div>
        </div>
      );

    case "04": // Kinetic Type Punchline (Typography blocks)
      return (
        <div className={`flex flex-col gap-[0.5cqw] items-start w-full uppercase transition-all duration-500 ${finalClass}`}>
          <div className={`bg-yellow-400 text-black font-black px-[1.5cqw] py-[0.5cqw] text-[3.5cqw] rounded shadow-lg select-none transform transition-all duration-300 rotate-[-1deg] ${beat >= 1 ? "line-through opacity-50" : ""}`}>
            Boilerplate
          </div>
          <div className={`bg-white text-black font-black px-[1.5cqw] py-[0.5cqw] text-[3.8cqw] rounded shadow-lg select-none transform transition-all duration-500 rotate-[1.5deg] ${beat >= 1 ? "opacity-100" : "opacity-0 -translate-x-6"}`}>
            Is Waste
          </div>
          <div className={`bg-red-600 text-white font-black px-[1.5cqw] py-[0.5cqw] text-[4cqw] rounded shadow-lg select-none transform transition-all duration-500 rotate-[-1deg] ${beat >= 2 ? "opacity-100 animate-pulse" : "opacity-0 translate-y-6"}`}>
            ELIMINATE IT!
          </div>
          {beat >= 2 && (
            <div className="text-yellow-400 font-mono text-[1.2cqw] tracking-widest mt-4 animate-bounce">
              // Reduced code volume by 80%
            </div>
          )}
        </div>
      );

    case "05": // Object Metaphor Hero (Packed briefcase)
      return (
        <div className={`w-[32cqw] h-[26cqw] border-4 border-[#78350f] bg-[#fffdf5] rounded-3xl p-[1.5cqw] shadow-[10px_10px_0_rgba(120,53,15,0.15)] flex flex-col justify-between transition-all duration-500 ${finalClass}`}>
          <div className="border-b-2 border-dashed border-[#78350f]/30 pb-2 flex justify-between items-center">
            <span className="font-bold text-[1.1cqw] tracking-wider uppercase font-mono">CONTEXT FIELD HANDOFF KIT</span>
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-[#78350f]" />
              <span className="w-2 h-2 rounded-full bg-[#78350f]" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[1cqw] h-[75%] mt-2">
            {/* Pocket 1 */}
            <div className="bg-[#fef3c7] border-2 border-[#78350f] rounded-xl p-[1cqw] flex flex-col justify-between shadow-[3px_3px_0_#78350f]">
              <span className="text-[1.8cqw]">📦</span>
              <p className="font-bold text-[1.1cqw] leading-none">Handoff Payload</p>
              <span className="text-[0.8cqw] font-mono opacity-60">Schemas & APIs</span>
            </div>
            {/* Pocket 2 */}
            <div className={`bg-[#fef3c7] border-2 border-[#78350f] rounded-xl p-[1cqw] flex flex-col justify-between shadow-[3px_3px_0_#78350f] transition-all duration-500 ${beat >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}>
              <span className="text-[1.8cqw]">📋</span>
              <p className="font-bold text-[1.1cqw] leading-none">Boundaries Checklist</p>
              <span className="text-[0.8cqw] font-mono opacity-60">Non-goals marked</span>
            </div>
            {/* Pocket 3 */}
            <div className={`bg-[#fef3c7] border-2 border-[#78350f] rounded-xl p-[1cqw] flex flex-col justify-between shadow-[3px_3px_0_#78350f] transition-all duration-500 ${beat >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}>
              <span className="text-[1.8cqw]">🔑</span>
              <p className="font-bold text-[1.1cqw] leading-none">Auto validation</p>
              <span className="text-[0.8cqw] font-mono opacity-60">Linter rules</span>
            </div>
          </div>
        </div>
      );

    case "06": // Blackboard Chalk Talk (Quantum Computing)
      return (
        <div className={`w-[32cqw] h-[26cqw] border-4 border-amber-950 bg-[#1e2923] rounded-lg p-[1.5cqw] relative shadow-inner text-white flex flex-col justify-between font-['Caveat'] transition-all duration-500 ${finalClass}`}>
          <div className="absolute top-2 right-4 text-[1cqw] text-[#fef08a] opacity-60 font-mono">chalk-talk v1</div>
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-[2.2cqw] border-b border-white/20 pb-2">The Wavefunction: |Ψ⟩ = α|0⟩ + β|1⟩</p>
            <div className={`flex items-center gap-4 transition-all duration-500 ${beat >= 1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
              <span className="text-[1.8cqw]">H-Gate</span>
              <span className="text-[1.5cqw] text-[#fef08a]">────────→</span>
              <span className="text-[2cqw] text-emerald-300">Phase Superposition</span>
            </div>
            <div className={`flex items-center gap-4 transition-all duration-500 ${beat >= 2 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
              <span className="text-[1.8cqw]">Z-Gate</span>
              <span className="text-[1.5cqw] text-[#fef08a]">────────→</span>
              <span className="text-[2cqw] text-emerald-300">Coherence Lock</span>
            </div>
          </div>
          {beat >= 2 && (
            <div className="border border-dashed border-[#fef08a] p-2 text-center text-[#fef08a] text-[1.6cqw] rounded animate-pulse">
              // Coherence lock active: 15mK cryo-chamber
            </div>
          )}
        </div>
      );

    case "07": // Arcade Boss Fight (Retro game)
      return (
        <div className={`w-[32cqw] h-[26cqw] border-4 border-neutral-800 bg-black rounded-lg p-[1.5cqw] flex flex-col justify-between font-mono relative transition-all duration-500 ${finalClass} ${beat >= 2 ? "animate-damage-flash" : ""}`}>
          <div className="flex justify-between items-center text-[0.9cqw] text-green-500 border-b border-green-500/20 pb-2">
            <span>STAGE 01: LEGACY DEBT</span>
            <span>SCORE: 09940</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 my-auto">
            {/* Boss graphic */}
            <span className={`text-[3.5cqw] animate-bounce`}>👾</span>
            <p className="text-[1.2cqw] font-bold text-red-500 uppercase tracking-widest">MONOLITH BOSS</p>
            {/* HP Bar */}
            <div className="w-[80%] h-4 border border-white bg-neutral-900 rounded p-0.5">
              <div 
                className={`h-full bg-red-600 transition-all duration-500`}
                style={{ width: beat === 0 ? "100%" : beat === 1 ? "45%" : "0%" }}
              />
            </div>
          </div>
          <div className="flex justify-between items-center text-[0.9cqw]">
            <span className={beat >= 1 ? "text-green-500 animate-pulse" : "text-neutral-500"}>
              {beat === 0 ? "LOCK LOADED" : beat === 1 ? "AST REFRACTOR ATTACK! (-55HP)" : "VICTORY! SQUASHED MONOLITH"}
            </span>
            <span className="text-yellow-400 font-bold">HP: {beat === 0 ? "100/100" : beat === 1 ? "45/100" : "0/100"}</span>
          </div>
        </div>
      );

    case "08": // Spotlight Quote Poster (Overhead swing spotlight quote)
      return (
        <div className={`relative w-full max-w-[28cqw] h-[22cqw] flex flex-col justify-center items-center text-center p-[2cqw] border border-white/10 rounded-2xl bg-black/40 transition-all duration-500 ${finalClass}`}>
          <span className="text-[4cqw] text-teal-400 opacity-20 absolute -top-4 left-6">“</span>
          <p className="font-['Playfair_Display'] italic text-[2.2cqw] leading-snug font-bold">
            {beat === 0 && "Software is not code."}
            {beat === 1 && "Software is the compression of intent."}
            {beat >= 2 && "Software is the compression of intent, and clean context is its soul."}
          </p>
          <span className="text-[4cqw] text-teal-400 opacity-20 absolute -bottom-12 right-6">”</span>
          {beat >= 2 && (
            <p className="text-[1.2cqw] text-teal-400 font-mono tracking-widest uppercase mt-4 animate-pulse">
              — Clean Code Manifesto
            </p>
          )}
        </div>
      );

    case "09": // Signal Pipeline Flow (CI/CD Compilation assembly)
      return (
        <div className={`flex flex-col gap-[1.5cqw] w-full transition-all duration-500 ${finalClass}`}>
          {/* Timeline Node 1 */}
          <div className="flex items-center gap-[1.5cqw]">
            <div className={`w-[2.5cqw] h-[2.5cqw] rounded-full border-2 flex items-center justify-center font-bold text-[1.2cqw] font-mono transition-all duration-500 ${beat >= 0 ? "border-cyan-400 bg-cyan-950/40 text-cyan-400" : "border-slate-800 text-slate-600"}`}>1</div>
            <div className={`flex-1 border p-[1cqw] rounded-xl flex items-center justify-between transition-all duration-500 ${beat >= 0 ? "border-cyan-500/40 bg-cyan-950/10" : "border-slate-800 bg-slate-900/40"}`}>
              <div className="flex flex-col">
                <span className="font-bold text-[1.2cqw] font-mono">LEXICAL SCANNING</span>
                <span className="text-[0.9cqw] opacity-60">Flag syntax errors early</span>
              </div>
              <span className="text-[1.2cqw] text-cyan-400 animate-pulse">SCANNING</span>
            </div>
          </div>
          {/* Timeline Node 2 */}
          <div className={`flex items-center gap-[1.5cqw] transition-all duration-500 ${beat >= 1 ? "opacity-100" : "opacity-30 pointer-events-none"}`}>
            <div className={`w-[2.5cqw] h-[2.5cqw] rounded-full border-2 flex items-center justify-center font-bold text-[1.2cqw] font-mono border-cyan-400 bg-cyan-950/40 text-cyan-400`}>2</div>
            <div className="flex-1 border border-cyan-500/40 bg-cyan-950/10 p-[1cqw] rounded-xl flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-bold text-[1.2cqw] font-mono">AST VALIDATION</span>
                <span className="text-[0.9cqw] opacity-60">Type-integrity interface guards</span>
              </div>
              <span className="text-[1.2cqw] text-cyan-400">PASSED</span>
            </div>
          </div>
          {/* Timeline Node 3 */}
          <div className={`flex items-center gap-[1.5cqw] transition-all duration-500 ${beat >= 2 ? "opacity-100" : "opacity-30 pointer-events-none"}`}>
            <div className={`w-[2.5cqw] h-[2.5cqw] rounded-full border-2 flex items-center justify-center font-bold text-[1.2cqw] font-mono border-emerald-500 bg-emerald-950/40 text-emerald-400`}>3</div>
            <div className="flex-1 border border-emerald-500/40 bg-emerald-950/10 p-[1cqw] rounded-xl flex items-center justify-between animate-pipeline-pulse">
              <div className="flex flex-col">
                <span className="font-bold text-[1.2cqw] font-mono text-emerald-400">BUNDLED EMISSION</span>
                <span className="text-[0.9cqw] opacity-60 text-emerald-200/60">Optimized production static assets</span>
              </div>
              <span className="text-[1.2cqw] text-emerald-400 font-bold">READY</span>
            </div>
          </div>
        </div>
      );

    case "10": // Mechanical Scoring Funnel (AST Sieve blueprint)
      return (
        <div className={`w-[32cqw] h-[26cqw] border-2 border-dashed border-blue-500/40 rounded-2xl bg-blue-950/5 p-[1.5cqw] flex flex-col justify-between transition-all duration-500 ${finalClass}`}>
          <div className="flex justify-between items-center border-b border-blue-500/20 pb-2">
            <span className="font-bold text-[1cqw] font-mono text-blue-500">AST PARSING SIEVE</span>
            <span className="text-[0.9cqw] opacity-60">Blueprint model</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-1 my-2">
            {/* Top inputs */}
            <div className="flex gap-2 justify-center">
              <span className={`px-2 py-1 bg-red-500/20 border border-red-500/30 rounded text-[1cqw] font-mono transition-all duration-500 ${beat >= 1 ? "scale-75 opacity-25 translate-y-3" : ""}`}>whitespaces</span>
              <span className={`px-2 py-1 bg-amber-500/20 border border-amber-500/30 rounded text-[1cqw] font-mono transition-all duration-500 ${beat >= 1 ? "scale-75 opacity-25 translate-y-3" : ""}`}>raw_strings</span>
            </div>
            {/* Funnel gate */}
            <div className="w-[12cqw] h-[4cqw] border-2 border-blue-500 bg-blue-950/40 rounded-full flex items-center justify-center mt-2 relative">
              <span className="text-[0.9cqw] font-bold font-mono">PARSE SIEVE</span>
              <div className="absolute top-full w-0.5 h-6 border-l-2 border-dashed border-blue-400" />
            </div>
            {/* Output bucket */}
            <div className={`w-[18cqw] border-2 p-2 rounded-xl mt-6 flex flex-col gap-1 transition-all duration-500 ${beat >= 2 ? "border-green-500/50 bg-green-950/10 opacity-100" : "border-slate-800 opacity-20"}`}>
              <div className="flex justify-between items-center text-[0.8cqw] text-green-400 font-mono">
                <span>COMPILED TREE</span>
                <span>OK</span>
              </div>
              <span className="text-[1cqw] font-mono text-center font-bold">Node (Identifier) → Root</span>
            </div>
          </div>
        </div>
      );

    case "11": // Collaborative Pairing Board (Split-pane Human/AI)
      return (
        <div className={`w-full grid grid-cols-2 gap-[1.5cqw] transition-all duration-500 ${finalClass}`}>
          {/* Human pane */}
          <div className={`border-2 p-[1.5cqw] rounded-xl flex flex-col gap-2 min-h-[22cqh] transition-all duration-500 ${beat === 0 ? "border-teal-500 shadow-md bg-teal-950/5" : "border-slate-800 opacity-60"}`}>
            <div className="flex justify-between items-center text-teal-600 font-mono text-[1cqw]">
              <span>HUMAN COMPARTMENT</span>
              {beat === 0 && <span className="animate-pulse">●</span>}
            </div>
            <pre className="text-[0.9cqw] font-mono opacity-80 leading-tight">
              {`export interface Sync {
  uuid: string;
  payload: string;
}`}
            </pre>
            <p className="text-[1cqw] text-teal-700 font-bold">// Sets core schema contract</p>
          </div>
          {/* AI pane */}
          <div className={`border-2 p-[1.5cqw] rounded-xl flex flex-col gap-2 min-h-[22cqh] transition-all duration-500 ${beat >= 1 ? "border-indigo-500 bg-indigo-950/5 opacity-100" : "border-slate-800 opacity-25"}`}>
            <div className="flex justify-between items-center text-indigo-500 font-mono text-[1cqw]">
              <span>AI COMPARTMENT</span>
              {beat === 1 && <span className="animate-pulse">●</span>}
            </div>
            <pre className="text-[0.9cqw] font-mono opacity-80 leading-tight">
              {`class Worker implements Sync {
  uuid = crypto.randomUUID();
  payload = "cleaned";
}`}
            </pre>
            <p className="text-[1cqw] text-indigo-500 font-bold">// Implementation auto-completed</p>
          </div>
        </div>
      );

    case "12": // Studio Mixing Console (Mixers and meters)
      return (
        <div className={`w-[32cqw] h-[26cqw] bg-neutral-900 border-4 border-neutral-800 rounded-3xl p-[1.5cqw] flex flex-col justify-between font-mono transition-all duration-500 ${finalClass}`}>
          <div className="text-[0.9cqw] text-neutral-400 border-b border-neutral-800 pb-2 flex justify-between">
            <span>LLM MIXING DESK</span>
            <span>CH: 3 ACTIVE</span>
          </div>
          <div className="grid grid-cols-3 gap-[2cqw] h-[70%] mt-2">
            {/* Slider 1 */}
            <div className="flex flex-col items-center justify-between">
              <span className="text-[0.8cqw] text-neutral-500">TEMP</span>
              <div className="flex-1 w-1 bg-neutral-950 relative my-2 flex justify-center">
                <div 
                  className="w-4 h-6 bg-cyan-400 border-2 border-white rounded-md absolute cursor-pointer transition-all duration-500"
                  style={{ bottom: beat >= 0 ? "20%" : "80%" }}
                />
              </div>
              <span className="text-[1cqw] font-bold text-cyan-400">{beat >= 0 ? "0.20" : "0.80"}</span>
            </div>
            {/* Slider 2 */}
            <div className="flex flex-col items-center justify-between">
              <span className="text-[0.8cqw] text-neutral-500">TOP-P</span>
              <div className="flex-1 w-1 bg-neutral-950 relative my-2 flex justify-center">
                <div 
                  className="w-4 h-6 bg-cyan-400 border-2 border-white rounded-md absolute cursor-pointer transition-all duration-500"
                  style={{ bottom: beat >= 1 ? "85%" : "10%" }}
                />
              </div>
              <span className="text-[1cqw] font-bold text-cyan-400">{beat >= 1 ? "0.85" : "0.10"}</span>
            </div>
            {/* Slider 3 */}
            <div className="flex flex-col items-center justify-between">
              <span className="text-[0.8cqw] text-neutral-500">TOKENS</span>
              <div className="flex-1 w-1 bg-neutral-950 relative my-2 flex justify-center">
                <div 
                  className="w-4 h-6 bg-emerald-400 border-2 border-white rounded-md absolute cursor-pointer transition-all duration-500"
                  style={{ bottom: beat >= 2 ? "70%" : "30%" }}
                />
              </div>
              <span className="text-[1cqw] font-bold text-emerald-400">{beat >= 2 ? "1024" : "256"}</span>
            </div>
          </div>
        </div>
      );

    case "13": // Subway Map of Intent (Transit routes)
      return (
        <div className={`w-[32cqw] h-[26cqw] border-2 border-slate-300 rounded-2xl bg-[#f8fafc] p-[1.5cqw] relative overflow-hidden transition-all duration-500 ${finalClass}`}>
          {/* Main map vector */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none p-[2cqw]">
            {/* Transit Route red */}
            <path d="M 50 150 L 150 150 L 250 80 L 350 80" fill="none" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" />
            {/* Transit Route blue */}
            <path d="M 150 150 L 220 220 L 350 220" fill="none" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" />
            {/* Active request particles */}
            {beat >= 1 && <circle cx="220" cy="220" r="8" fill="#3b82f6" className="animate-ping" />}
            {beat >= 2 && <circle cx="350" cy="80" r="8" fill="#10b981" className="animate-ping" />}
          </svg>
          <div className="absolute top-2 left-4 text-[1cqw] font-bold text-slate-500 font-mono">DISTRIBUTED TRANSIT PROTOCOL</div>
          {/* Map stations text */}
          <div className="absolute top-[40%] left-[5%] text-[0.8cqw] font-bold text-slate-800">CLIENT TERMINAL</div>
          <div className={`absolute top-[18%] left-[45%] text-[0.8cqw] font-bold transition-all duration-300 ${beat >= 1 ? "text-red-500" : "text-slate-400"}`}>GATEWAY (AUTH)</div>
          <div className={`absolute bottom-[18%] right-[10%] text-[0.8cqw] font-bold transition-all duration-300 ${beat >= 2 ? "text-emerald-500" : "text-slate-400"}`}>DATABASE (ACID)</div>
        </div>
      );

    case "14": // Kitchen Prep Station (Chopping board)
      return (
        <div className={`w-[32cqw] h-[26cqw] bg-orange-100/50 border-4 border-amber-900 rounded-2xl p-[1.5cqw] relative shadow-[6px_6px_0_rgba(124,45,18,0.1)] flex flex-col justify-between transition-all duration-500 ${finalClass}`}>
          <div className="border-b-2 border-amber-900/10 pb-1 text-[#ea580c] font-bold text-[1cqw] font-mono uppercase">
            CHEF TEXT PREP BOARD
          </div>
          <div className="grid grid-cols-3 gap-[1cqw] mt-2 h-[75%]">
            {/* Column 1: Unwashed */}
            <div className="bg-[#fffdf5] border-2 border-amber-900 p-[1cqw] rounded-xl flex flex-col justify-between shadow-[3px_3px_0_#ea580c/20]">
              <span className="text-[1.8cqw]">🥕</span>
              <p className="font-bold text-[1cqw] leading-none">Uncut Input</p>
              <pre className="text-[0.7cqw] font-mono text-[#ea580c]">{"<p>Hello!</p>"}</pre>
            </div>
            {/* Column 2: Chopped */}
            <div className={`bg-[#fffdf5] border-2 border-amber-900 p-[1cqw] rounded-xl flex flex-col justify-between shadow-[3px_3px_0_#ea580c/20] transition-all duration-500 ${beat >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
              <span className="text-[1.8cqw]">🔪</span>
              <p className="font-bold text-[1cqw] leading-none">Slices</p>
              <pre className="text-[0.7cqw] font-mono text-green-600">["Hello"]</pre>
            </div>
            {/* Column 3: Plated */}
            <div className={`bg-[#fffdf5] border-2 border-amber-900 p-[1cqw] rounded-xl flex flex-col justify-between shadow-[3px_3px_0_#ea580c/20] transition-all duration-500 ${beat >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
              <span className="text-[1.8cqw]">🍽️</span>
              <p className="font-bold text-[1cqw] leading-none">Plated Array</p>
              <pre className="text-[0.7cqw] font-mono text-[#ea580c]">[00914]</pre>
            </div>
          </div>
        </div>
      );

    case "15": // Context Bento Box (Lacquer compartments)
      return (
        <div className={`grid grid-cols-3 gap-[1cqw] w-full transition-all duration-500 ${finalClass}`}>
          {/* Main Bento */}
          <div className="col-span-2 border-2 border-amber-500/30 bg-amber-950/10 p-[1.5cqw] rounded-xl flex flex-col justify-between min-h-[16cqh] shadow-md transform rotate-[-1deg]">
            <span className="text-[2cqw]">💾</span>
            <div>
              <p className="font-bold text-[1.3cqw] text-amber-500 font-mono">SEMANTIC MEMORY</p>
              <p className="text-[0.9cqw] opacity-80 leading-tight">Matching documentation vector layers</p>
            </div>
          </div>
          {/* Sub Bento 1 */}
          <div className={`border-2 border-blue-500/30 bg-blue-950/10 p-[1.5cqw] rounded-xl flex flex-col justify-between min-h-[16cqh] shadow-md transition-all duration-500 ${beat >= 1 ? "opacity-100 rotate-1" : "opacity-0 translate-y-4 pointer-events-none"}`}>
            <span className="text-[2cqw]">🛠️</span>
            <div>
              <p className="font-bold text-[1.1cqw] text-blue-400 font-mono">TOOLS</p>
              <p className="text-[0.8cqw] opacity-70">Rate-limited shell API scripts</p>
            </div>
          </div>
          {/* Bottom Bento */}
          <div className={`col-span-3 border-2 border-dashed border-emerald-500/30 bg-emerald-950/10 p-[1.2cqw] rounded-xl flex items-center justify-between transition-all duration-500 ${beat >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
            <div className="flex items-center gap-3">
              <span className="text-[1.8cqw] animate-spin">⚙️</span>
              <span className="font-mono text-[1.1cqw] font-bold text-emerald-400">Context Orchestration Center</span>
            </div>
            <span className="text-[1cqw] text-emerald-500/80 font-mono">99.9% aligned</span>
          </div>
        </div>
      );

    case "16": // Debug Reaction Board (Blking status, logs)
      return (
        <div className={`w-[32cqw] h-[26cqw] bg-slate-950 border border-slate-800 rounded-xl p-[1.5cqw] flex flex-col justify-between font-mono transition-all duration-500 ${finalClass}`}>
          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${beat === 0 ? "bg-red-500" : beat === 1 ? "bg-amber-500 animate-pulse" : "bg-emerald-500"}`} />
              <span className="text-[1cqw] text-slate-400">MICROSERVICES CORE HEALTH</span>
            </div>
            <span className="text-[0.9cqw] text-slate-500">Live checks</span>
          </div>
          <div className="flex-1 bg-black/60 border border-slate-900 rounded p-[1cqw] my-2 text-[0.85cqw] leading-tight overflow-hidden flex flex-col gap-1">
            <span className="text-red-500">ERR: [pool_exhaustion] capacity 98%</span>
            {beat >= 1 && <span className="text-amber-400">WARN: [breaker_open] detour traffic cached</span>}
            {beat >= 2 && <span className="text-emerald-400 font-bold">INFO: [scale_up] PURGE COMPLETES. LATENCY 12ms.</span>}
          </div>
          <div className="flex justify-between items-center text-[0.9cqw] text-slate-500">
            <span>LOG MONITORING HOOKS</span>
            <span className="text-slate-400">{beat === 0 ? "FAILING" : beat === 1 ? "HEALING" : "RESOLVED"}</span>
          </div>
        </div>
      );

    case "17": // Research Memo (Ivory paper ledger, burgundy text)
      return (
        <div className={`w-[32cqw] h-[26cqw] bg-[#faf9f5] border-2 border-stone-300 rounded shadow-md p-[1.5cqw] flex flex-col justify-between transition-all duration-500 ${finalClass}`}>
          <div className="border-b border-[#7f1d1d]/30 pb-1 text-center font-['Cormorant_Garamond'] text-[1.4cqw] text-[#7f1d1d] uppercase font-bold tracking-widest">
            QUANTITATIVE LATENCY INQUIRY (AD-2026)
          </div>
          <div className="flex-1 grid grid-cols-2 gap-[1cqw] mt-4 text-[1cqw] leading-relaxed text-stone-800">
            <div>
              <p className="font-['Cormorant_Garamond'] font-bold text-[1.2cqw] text-[#7f1d1d]">The sub-second threshold</p>
              <p className="opacity-80">Bounce rates scale past 12% index with 100ms lag increase past standard baselines.</p>
            </div>
            <div className={`transition-all duration-500 ${beat >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <p className="font-['Cormorant_Garamond'] font-bold text-[1.2cqw] text-[#7f1d1d]">Abandoned carts</p>
              <p className="opacity-80">Checkouts abandon rate reaches 62% past 1800ms wait limits.</p>
            </div>
          </div>
          {beat >= 2 && (
            <div className="border-t border-[#7f1d1d]/30 pt-2 text-center text-[#7f1d1d] text-[1.1cqw] font-bold font-['Cormorant_Garamond'] italic uppercase tracking-wider">
              ** Speculative Rendering offsets network delays **
            </div>
          )}
        </div>
      );

    case "18": // Maintainer Issue Brief (GitHub layout)
      return (
        <div className={`w-[32cqw] h-[26cqw] bg-white border border-slate-200 rounded-xl p-[1.5cqw] flex flex-col justify-between transition-all duration-500 ${finalClass}`}>
          <div className="flex justify-between items-center border-b border-slate-200 pb-2">
            <span className="font-bold text-[1cqw] text-slate-800 font-mono">ISSUE #1409: RESOLVED</span>
            <span className={`px-2 py-0.5 rounded text-[0.8cqw] font-bold text-white ${beat === 2 ? "bg-purple-600" : "bg-green-600 animate-pulse"}`}>
              {beat === 2 ? "MERGED" : "OPEN"}
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-2 mt-2">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 flex flex-col gap-1 text-[0.9cqw]">
              <span className="font-bold text-slate-700">@ paaatrickfu (Telemetry Check)</span>
              <p className="opacity-80">Pool exhausted. Zombie db connections unreleased after queries.</p>
            </div>
            <div className={`bg-slate-50 border border-slate-200 rounded-lg p-2 flex flex-col gap-1 text-[0.9cqw] transition-all duration-500 ${beat >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
              <span className="font-bold text-slate-700">@ coding-agent (AST Refactor Commit)</span>
              <pre className="font-mono text-[0.8cqw] text-emerald-700 font-bold">{"try { query() } finally { release() }"}</pre>
            </div>
          </div>
          <span className="text-[0.9cqw] text-slate-400 font-mono text-right">// Defending system state boundaries</span>
        </div>
      );

    case "19": // Decision Record (ADR) (Corporate grids)
      return (
        <div className={`w-[32cqw] h-[26cqw] bg-slate-50 border-2 border-slate-200 rounded p-[1.5cqw] flex flex-col justify-between transition-all duration-500 ${finalClass}`}>
          <div className="border-b-2 border-slate-300 pb-2 flex justify-between items-center text-slate-900 font-bold">
            <span className="text-[1.2cqw] font-black">ADR-009: STORAGE SELECTION</span>
            <span className="font-mono text-[0.9cqw] bg-slate-200 px-2 py-0.5 rounded">ACCEPTED</span>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 text-[1cqw] text-slate-700 mt-4 leading-tight">
            <div>
              <p className="font-bold text-slate-900 border-b border-slate-200 pb-1 font-mono uppercase text-[0.8cqw]">durability sweep</p>
              <p className="opacity-80 mt-1">Comparing IndexedDB, SQLite WASM, localStorage capacities.</p>
            </div>
            <div className={`transition-all duration-500 ${beat >= 1 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
              <p className="font-bold text-slate-900 border-b border-slate-200 pb-1 font-mono uppercase text-[0.8cqw]">SQLite wasp decision</p>
              <p className="opacity-80 mt-1">ACID transactional durability out-scales browser level lockouts past 50MB.</p>
            </div>
          </div>
          <div className={`border-2 border-dashed p-1 text-center font-bold text-[1.2cqw] rounded transition-all duration-500 ${beat >= 2 ? "border-green-600 bg-green-50 text-green-700 scale-100" : "border-transparent opacity-0"}`}>
            ✓ ARCHITECTURAL COMPLIANCE LOCKED
          </div>
        </div>
      );

    case "20": // Benchmark Matrix (Tables and progress bars)
      return (
        <div className={`w-[32cqw] h-[26cqw] border border-slate-300 rounded-xl p-[1.5cqw] bg-white flex flex-col justify-between text-slate-800 transition-all duration-500 ${finalClass}`}>
          <span className="font-bold text-[1cqw] text-slate-500 font-mono tracking-wider">EDGE COMPILATION MATRIX</span>
          <div className="flex-1 flex flex-col gap-[1.2cqw] justify-center text-[1.1cqw] my-2">
            {/* Row 1 */}
            <div className="grid grid-cols-12 items-center gap-2">
              <span className="col-span-3 font-bold font-mono">Model A:</span>
              <div className="col-span-7 h-4 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <div 
                  className="h-full bg-blue-500 transition-all duration-1000 ease-out"
                  style={{ width: beat >= 1 ? "75%" : "0%" }}
                />
              </div>
              <span className="col-span-2 font-bold text-right text-blue-500">75%</span>
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-12 items-center gap-2">
              <span className="col-span-3 font-bold font-mono">Model B:</span>
              <div className="col-span-7 h-4 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <div 
                  className="h-full bg-indigo-500 transition-all duration-1000 ease-out"
                  style={{ width: beat >= 2 ? "95%" : "0%" }}
                />
              </div>
              <span className="col-span-2 font-bold text-right text-indigo-500">95%</span>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-2 text-[0.85cqw] opacity-60 flex justify-between font-mono">
            <span>Accuracy threshold: 90% min</span>
            <span className="text-indigo-600 font-bold">{beat >= 2 ? "WINNER: MODEL B" : "COMPUTING"}</span>
          </div>
        </div>
      );

    case "21": // Field Notes Report (Researcher notebook)
      return (
        <div className={`w-[32cqw] h-[26cqw] bg-[#fffdfa] border border-stone-200 shadow-md p-[1.5cqw] relative flex flex-col justify-between font-serif text-stone-800 transition-all duration-500 ${finalClass}`}>
          {/* Notebook binding clip */}
          <div className="absolute top-[-0.8cqw] left-6 w-[2.5cqw] h-[1.6cqw] bg-stone-400 border border-stone-500 rounded flex items-center justify-center font-bold text-[0.8cqw] font-mono text-white transform rotate-[-5deg]">CLIP</div>
          <div className="border-b border-stone-200 pb-1 text-[1.1cqw] text-stone-500 font-mono flex justify-between">
            <span>NOTEBOOK LEDGER #12</span>
            <span>FIELD UX SURVEY</span>
          </div>
          <div className="flex-1 flex flex-col gap-2 mt-4 text-[1cqw] leading-normal font-sans">
            <p className="font-bold border-l-4 border-stone-400 pl-2">Users bypass voice out of muscle memory, reaching for physical switch wall toggles.</p>
            <p className={`font-bold border-l-4 border-teal-500 pl-2 transition-all duration-500 ${beat >= 1 ? "opacity-100" : "opacity-0"}`}>Anxiety from cryptic handshake fail logs leads to direct device disconnects.</p>
          </div>
          <span className="text-[0.9cqw] text-stone-400 font-mono text-right italic font-bold">Consensus over rigid control state</span>
        </div>
      );

    case "22": // Operating Manual (Caution warning stripes)
      return (
        <div className={`w-[32cqw] h-[26cqw] bg-neutral-900 border-4 border-amber-500 rounded p-[1.5cqw] flex flex-col justify-between font-mono text-white relative transition-all duration-500 ${finalClass}`}>
          {/* Warning stripes */}
          <div className="absolute top-0 inset-x-0 h-3 bg-repeating-linear bg-[repeating-linear-gradient(-45deg,#f59e0b,#f59e0b_10px,#000000_10px,#000000_20px)]" />
          <div className="flex justify-between items-center text-[0.9cqw] border-b border-neutral-800 pb-1 pt-2 text-amber-500">
            <span>RUNBOOK RC-22: HOT PURGE</span>
            <span>HIGH VERIFICATION</span>
          </div>
          <div className="flex-1 flex flex-col gap-1 text-[1cqw] my-3 leading-tight justify-center pl-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" checked={beat >= 0} readOnly className="accent-amber-500" />
              <span className={beat >= 0 ? "opacity-100" : "opacity-30"}>[01] Check metrics baseline</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" checked={beat >= 1} readOnly className="accent-amber-500" />
              <span className={beat >= 1 ? "opacity-100" : "opacity-30"}>[02] Terminate zombie queries</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" checked={beat >= 2} readOnly className="accent-amber-500" />
              <span className={beat >= 2 ? "opacity-100 text-green-400 font-bold" : "opacity-30"}>[03] Restored stable health checks</span>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-1 text-[0.8cqw] opacity-50 flex justify-between">
            <span>VERIFIED ON PRODUCTION</span>
            <span>OK - PURGED</span>
          </div>
        </div>
      );

    case "23": // Checklist Ledger (Accounting grid ledger)
      return (
        <div className={`w-[32cqw] h-[26cqw] bg-[#f4fbf7] border border-emerald-300 rounded shadow p-[1.5cqw] flex flex-col justify-between text-[#111c16] transition-all duration-500 ${finalClass}`}>
          <div className="flex justify-between items-center border-b border-emerald-400 pb-1 text-[1cqw] font-mono text-emerald-800 font-bold">
            <span>RELEASE CANDIDATE LEDGER</span>
            <span>COMPLIANT STATUS</span>
          </div>
          <div className="flex-1 flex flex-col gap-[1cqw] justify-center text-[1.1cqw] my-2">
            <div className="flex justify-between items-center border-b border-emerald-200 pb-1">
              <span>Unit test coverage &gt;85% counter</span>
              <span className={`font-mono font-bold text-[1cqw] ${beat >= 1 ? "text-emerald-600" : "text-slate-400"}`}>{beat >= 1 ? "PASSED (89%)" : "PENDING"}</span>
            </div>
            <div className="flex justify-between items-center border-b border-emerald-200 pb-1">
              <span>Security schema injection audits</span>
              <span className={`font-mono font-bold text-[1cqw] ${beat >= 2 ? "text-emerald-600" : "text-slate-400"}`}>{beat >= 2 ? "PASSED (100%)" : "PENDING"}</span>
            </div>
          </div>
          <div className="border-t border-emerald-300 pt-1 text-[0.85cqw] opacity-70 flex justify-between font-mono uppercase font-bold text-emerald-800">
            <span>Audit Ledger #99</span>
            <span className="animate-pulse">{beat === 2 ? "COMPLIANCE SECURED" : "AUDITING LINES"}</span>
          </div>
        </div>
      );

    case "24": // Annotated Source & Diff (IDE syntax highlights)
      return (
        <div className={`w-[32cqw] h-[26cqw] bg-[#0f141c] border border-slate-800 rounded-xl p-[1.5cqw] flex flex-col justify-between font-mono text-[#e0e4e6] transition-all duration-500 ${finalClass}`}>
          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <span className="text-[1cqw] text-slate-400">query_optimizer.js</span>
            <span className="text-[0.9cqw] text-slate-500">IDE Editor</span>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-1 text-[0.85cqw] leading-normal my-2">
            <div className="opacity-40">{"function executeLookup(userId) {"}</div>
            {/* Deleted line */}
            <div className={`px-2 py-0.5 rounded transition-all duration-500 ${beat >= 1 ? "bg-red-950/40 text-red-400 line-through" : "text-[#e0e4e6]"}`}>
              {"  let results = db.users.find(); // Full Scan"}
            </div>
            {/* Inserted line */}
            <div className={`px-2 py-0.5 rounded transition-all duration-500 ${beat >= 2 ? "bg-green-950/60 text-green-400" : "opacity-0 h-0 overflow-hidden"}`}>
              {"  let results = db.users.findOne({ id: userId }); // B-Tree Lookup"}
            </div>
            <div className="opacity-40">{"  return results;"}</div>
            <div className="opacity-40">{"}"}</div>
          </div>
          {beat >= 2 && (
            <div className="text-right text-green-400 text-[1cqw] font-bold">
              ✓ Fast B-Tree Lookup Deployed
            </div>
          )}
        </div>
      );

    default:
      return (
        <div className="w-[10cqw] h-[10cqw] bg-slate-800 flex items-center justify-center rounded">
          <HelpCircle className="w-8 h-8 text-slate-600 animate-pulse" />
        </div>
      );
  }
}
