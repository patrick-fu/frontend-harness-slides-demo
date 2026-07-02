    export const stylesContentA = {
  1: {
    scene1: {
      title: "Concept & Core Architecture",
      subtitle: "Quantum Compiler Architecture — from qubit intent to executable circuits",
      low: {
        beat1: {
          visualHtml: `<div class="w-[10cqw] h-[10cqw] rounded-full bg-gradient-to-tr from-slate-900 to-slate-400 flex items-center justify-center text-white shadow-2xl animate-spring-scale"><svg viewBox="0 0 64 64" class="w-[5cqw] h-[5cqw]" fill="none"><circle cx="32" cy="32" r="28" stroke="white" stroke-width="2" opacity="0.3"/><path d="M32 8 L32 56 M8 32 L56 32" stroke="white" stroke-width="1.5" opacity="0.5"/><circle cx="32" cy="32" r="6" fill="white"/></svg></div>`,
          title: "The Quantum Compiler Thesis",
          desc: "A compiler transforms high-level quantum programs into hardware-native gate sequences."
        },
        beat2: {
          visualHtml: `<div class="flex items-center gap-[2cqw] animate-match-2"><div class="w-[8cqw] h-[8cqw] rounded-2xl bg-slate-900 flex items-center justify-center text-white text-[2cqw] font-mono shadow-xl">QIR</div><div class="text-[2cqw] text-slate-400">→</div><div class="w-[8cqw] h-[8cqw] rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-[2cqw] font-mono shadow-xl animate-pipeline-pulse">Gates</div><div class="text-[2cqw] text-slate-400">→</div><div class="w-[8cqw] h-[8cqw] rounded-2xl bg-slate-700 flex items-center justify-center text-white text-[2cqw] font-mono shadow-xl">HW</div></div>`,
          title: "Three-Layer Pipeline",
          desc: "Source → Intermediate Representation → Physical Layout.",
          subdesc: "Each layer decouples algorithm intent from hardware constraints."
        },
        beat3: {
          visualHtml: `<div class="relative w-[40cqw] h-[22cqw] rounded-2xl bg-gradient-to-br from-slate-50 to-slate-200 border border-slate-200 shadow-2xl p-[2cqw] animate-match-3"><div class="absolute inset-0 bg-grid-light opacity-50 rounded-2xl"></div><div class="relative flex flex-col items-center justify-center h-full gap-[1cqw]"><div class="flex gap-[1.5cqw]"><span class="px-[1.5cqw] py-[0.5cqw] bg-slate-900 text-white rounded-lg text-[1cqw] font-mono">Parse</span><span class="px-[1.5cqw] py-[0.5cqw] bg-cyan-600 text-white rounded-lg text-[1cqw] font-mono">Optimize</span><span class="px-[1.5cqw] py-[0.5cqw] bg-indigo-600 text-white rounded-lg text-[1cqw] font-mono">Map</span><span class="px-[1.5cqw] py-[0.5cqw] bg-emerald-600 text-white rounded-lg text-[1cqw] font-mono">Schedule</span></div><p class="text-[1.1cqw] text-slate-500 font-light">Full compilation stack unified</p></div></div>`,
          title: "Unified Compilation Stack",
          desc: "Parse, optimize, map, and schedule — one coherent pipeline.",
          subdesc: "Topology-aware routing minimizes SWAP overhead on NISQ devices.",
          punchline: "Compile once. Execute everywhere."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-white border-slate-200 text-slate-900">
      <span class="text-[1.6cqw] block">📝</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">01. Source</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Q# / OpenQASM input</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-slate-100 text-slate-700 border border-slate-200">DSL_IN</span>
    </div>
    </div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-white border-slate-200 text-slate-900">
      <span class="text-[1.6cqw] block">📝</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">01. Source</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Q# / OpenQASM input</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-slate-100 text-slate-700 border border-slate-200">DSL_IN</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-white border-slate-200 text-slate-900">
      <span class="text-[1.6cqw] block">⚙️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">02. QIR Pass</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Decompose &amp; optimize</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-slate-900 text-cyan-300 border border-slate-700">IR_LAYER</span>
    </div>
    </div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-white border-slate-200 text-slate-900">
      <span class="text-[1.6cqw] block">📝</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">01. Source</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Q# / OpenQASM input</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-slate-100 text-slate-700 border border-slate-200">DSL_IN</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-white border-slate-200 text-slate-900">
      <span class="text-[1.6cqw] block">⚙️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">02. QIR Pass</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Decompose &amp; optimize</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-slate-900 text-cyan-300 border border-slate-700">IR_LAYER</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">→</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-white border-slate-200 text-slate-900">
      <span class="text-[1.6cqw] block">🔬</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">03. Hardware</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Topology-mapped pulses</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-cyan-950 text-cyan-400 border border-cyan-800">PULSE_OUT</span>
    </div>
    </div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-white border-slate-200 text-slate-900">
      <div>
        <span class="text-[1.5cqw] block">📥</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Frontend Parser</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Lexes Q# and OpenQASM into an abstract syntax tree with typed qubit registers.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-600">[✓] VERIFIED</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-900 border-slate-700 text-white">
      <div>
        <span class="text-[1.5cqw] block">🔀</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Optimizer Pass</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Commutation analysis, gate cancellation, and depth reduction on intermediate representation.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">[✓] VERIFIED</span>
    </div>
    </div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-white border-slate-200 text-slate-900">
      <div>
        <span class="text-[1.5cqw] block">📥</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Frontend Parser</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Lexes Q# and OpenQASM into an abstract syntax tree with typed qubit registers.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-600">[✓] VERIFIED</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-900 border-slate-700 text-white">
      <div>
        <span class="text-[1.5cqw] block">🔀</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Optimizer Pass</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Commutation analysis, gate cancellation, and depth reduction on intermediate representation.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">[✓] VERIFIED</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-gradient-to-br from-cyan-600 to-blue-700 border-cyan-500 text-white">
      <div>
        <span class="text-[1.5cqw] block">🔬</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Backend Mapper</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Topology mapping, SWAP insertion, and pulse scheduling for target hardware.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-white">[✓] VERIFIED</span>
    </div>
    </div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-white border-slate-200 text-slate-900">
      <div>
        <span class="text-[1.5cqw] block">📥</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Frontend Parser</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Lexes Q# and OpenQASM into an abstract syntax tree with typed qubit registers.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-600">[✓] VERIFIED</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-900 border-slate-700 text-white">
      <div>
        <span class="text-[1.5cqw] block">🔀</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Optimizer Pass</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Commutation analysis, gate cancellation, and depth reduction on intermediate representation.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">[✓] VERIFIED</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-gradient-to-br from-cyan-600 to-blue-700 border-cyan-500 text-white">
      <div>
        <span class="text-[1.5cqw] block">🔬</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Backend Mapper</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Topology mapping, SWAP insertion, and pulse scheduling for target hardware.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-white">[✓] VERIFIED</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-slate-50 border-slate-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">📊</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Telemetry</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Gate depth, two-qubit count, and estimated fidelity surfaced per compilation run.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-500">depth: 847</span>
    </div>
    </div>`
      }
    },
    scene2: {
      title: "Execution & Engineering Handoff",
      subtitle: "From compiled circuits to verified deployment on quantum hardware",
      low: {
        beat1: {
          visualHtml: `<div class="w-[10cqw] h-[10cqw] rounded-2xl bg-slate-900 flex items-center justify-center shadow-2xl animate-spring-scale"><span class="text-[3.5cqw]">🚀</span></div>`,
          title: "Deploy to Hardware",
          desc: "Compiled circuits ship to cloud quantum backends via REST API."
        },
        beat2: {
          visualHtml: `<div class="flex flex-col items-center gap-[1.5cqw] animate-match-2"><div class="flex items-center gap-[1.5cqw]"><div class="px-[2cqw] py-[1cqw] bg-emerald-600 text-white rounded-xl text-[1.2cqw] font-mono shadow-lg">IBM Q</div><div class="px-[2cqw] py-[1cqw] bg-indigo-600 text-white rounded-xl text-[1.2cqw] font-mono shadow-lg">IonQ</div><div class="px-[2cqw] py-[1cqw] bg-purple-600 text-white rounded-xl text-[1.2cqw] font-mono shadow-lg">Rigetti</div></div><div class="w-[30cqw] h-[0.3cqw] bg-gradient-to-r from-emerald-500 via-indigo-500 to-purple-500 rounded-full"></div></div>`,
          title: "Multi-Backend Routing",
          desc: "Automatic backend selection based on qubit topology and queue depth.",
          subdesc: "Fallback chains ensure jobs complete even when primary backend is saturated."
        },
        beat3: {
          visualHtml: `<div class="bg-slate-900 rounded-2xl p-[2cqw] max-w-[38cqw] shadow-2xl animate-match-3"><div class="flex items-center justify-between mb-[1cqw]"><span class="text-[1cqw] font-mono text-emerald-400">JOB #Q-8842</span><span class="px-[1cqw] py-[0.3cqw] bg-emerald-950 text-emerald-400 rounded text-[0.9cqw] font-mono">COMPLETE</span></div><div class="grid grid-cols-3 gap-[1cqw] text-center"><div class="bg-slate-800 rounded-lg p-[1cqw]"><span class="text-[1.4cqw] font-bold text-white block">99.2%</span><span class="text-[0.8cqw] text-slate-400">Fidelity</span></div><div class="bg-slate-800 rounded-lg p-[1cqw]"><span class="text-[1.4cqw] font-bold text-white block">847</span><span class="text-[0.8cqw] text-slate-400">Shots</span></div><div class="bg-slate-800 rounded-lg p-[1cqw]"><span class="text-[1.4cqw] font-bold text-white block">12ms</span><span class="text-[0.8cqw] text-slate-400">Latency</span></div></div></div>`,
          title: "Verified Execution Results",
          desc: "Shot statistics, fidelity metrics, and error mitigation reports delivered.",
          subdesc: "Automated calibration drift detection triggers recompilation when needed.",
          punchline: "Ship circuits. Measure truth."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-900 border-slate-700 text-white">
      <span class="text-[1.6cqw] block">📡</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Submit Job</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">REST API dispatch</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-slate-900 text-slate-300 border border-slate-700">API_CALL</span>
    </div>
    </div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-900 border-slate-700 text-white">
      <span class="text-[1.6cqw] block">📡</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Submit Job</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">REST API dispatch</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-slate-900 text-slate-300 border border-slate-700">API_CALL</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-slate-900 border-slate-700 text-white">
      <span class="text-[1.6cqw] block">⏳</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Queue & Route</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Backend selection</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-100 text-amber-800 border border-amber-300">ROUTING</span>
    </div>
    </div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-900 border-slate-700 text-white">
      <span class="text-[1.6cqw] block">📡</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Submit Job</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">REST API dispatch</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-slate-900 text-slate-300 border border-slate-700">API_CALL</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-slate-900 border-slate-700 text-white">
      <span class="text-[1.6cqw] block">⏳</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Queue & Route</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Backend selection</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-100 text-amber-800 border border-amber-300">ROUTING</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">→</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-slate-900 border-slate-700 text-white">
      <span class="text-[1.6cqw] block">📊</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Report Results</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Fidelity + shot stats</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-100 text-emerald-800 border border-emerald-300">COMPLETE</span>
    </div>
    </div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-900 border-slate-700 text-white">
      <div>
        <span class="text-[1.5cqw] block">📡</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Job Dispatcher</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Serializes compiled circuits into backend-specific pulse programs with SHA pinning.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">[✓] READY</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-amber-50 border-amber-200 text-amber-900">
      <div>
        <span class="text-[1.5cqw] block">⚖️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Error Mitigation</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Zero-noise extrapolation and readout correction applied post-execution.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-600">[✓] ACTIVE</span>
    </div>
    </div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-900 border-slate-700 text-white">
      <div>
        <span class="text-[1.5cqw] block">📡</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Job Dispatcher</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Serializes compiled circuits into backend-specific pulse programs with SHA pinning.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">[✓] READY</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-amber-50 border-amber-200 text-amber-900">
      <div>
        <span class="text-[1.5cqw] block">⚖️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Error Mitigation</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Zero-noise extrapolation and readout correction applied post-execution.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-600">[✓] ACTIVE</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-emerald-50 border-emerald-200 text-emerald-900">
      <div>
        <span class="text-[1.5cqw] block">📊</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Telemetry Hub</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Fidelity dashboards, calibration drift alerts, and shot histogram exports.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-600">[✓] LIVE</span>
    </div>
    </div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-900 border-slate-700 text-white">
      <div>
        <span class="text-[1.5cqw] block">📡</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Job Dispatcher</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Serializes compiled circuits into backend-specific pulse programs with SHA pinning.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">[✓] READY</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-amber-50 border-amber-200 text-amber-900">
      <div>
        <span class="text-[1.5cqw] block">⚖️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Error Mitigation</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Zero-noise extrapolation and readout correction applied post-execution.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-600">[✓] ACTIVE</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-emerald-50 border-emerald-200 text-emerald-900">
      <div>
        <span class="text-[1.5cqw] block">📊</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Telemetry Hub</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Fidelity dashboards, calibration drift alerts, and shot histogram exports.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-600">[✓] LIVE</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-white border-slate-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">🔁</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Rollback Path</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Previous calibration snapshot pinned; one-click revert on fidelity regression.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-500">RTO: &lt;5min</span>
    </div>
    </div>`
      }
    }
  },
  2: {
    scene1: {
      title: "Concept & Core Architecture",
      subtitle: "Offline-First Sync Engine Design — local truth, cloud convergence",
      low: {
        beat1: {
          visualHtml: `<div class="bg-yellow-100 text-slate-800 p-[1.5cqw] w-[14cqw] h-[14cqw] rotate-2 shadow-md border border-yellow-200 flex flex-col justify-between font-sketch animate-float-sticky-1 relative"><div class="absolute -top-[0.8cqw] left-[30%] w-[4cqw] h-[1.2cqw] bg-white/60 border border-slate-200 rotate-[-3deg]"></div><span class="text-[1.2cqw] font-bold border-b border-yellow-300 pb-[0.3cqw]">GOAL 🎯</span><p class="text-[1.4cqw] leading-tight">Offline-First Sync</p><span class="text-[0.9cqw] text-right text-slate-500">#urgent</span></div>`,
          title: "The Offline-First Promise",
          desc: "Users write locally first — the app never waits for the network."
        },
        beat2: {
          visualHtml: `<div class="flex items-center gap-[2cqw] font-sketch animate-match-2"><div class="bg-yellow-100 p-[1.2cqw] w-[12cqw] rotate-[-2deg] shadow-md border border-yellow-200 text-center"><span class="text-[1.6cqw]">💾</span><p class="text-[1.1cqw] font-bold mt-[0.3cqw]">SQLite</p><p class="text-[0.85cqw] text-slate-600">Local truth</p></div><div class="text-[2cqw] text-blue-400">➔</div><div class="bg-blue-100 p-[1.2cqw] w-[12cqw] rotate-[3deg] shadow-md border border-blue-200 text-center"><span class="text-[1.6cqw]">📡</span><p class="text-[1.1cqw] font-bold mt-[0.3cqw]">Sync Queue</p><p class="text-[0.85cqw] text-slate-600">Delta diff</p></div></div>`,
          title: "Local-First, Sync-Second",
          desc: "SQLite holds the source of truth; a queue batches outbound changes.",
          subdesc: "Writes are instant — sync happens opportunistically in the background."
        },
        beat3: {
          visualHtml: `<div class="relative font-sketch animate-match-3"><div class="bg-yellow-100 p-[1.2cqw] w-[11cqw] rotate-[-2deg] shadow-md border border-yellow-200 absolute top-0 left-0 text-center"><span class="text-[1.4cqw]">💾</span><p class="text-[1cqw] font-bold">SQLite</p></div><div class="bg-blue-100 p-[1.2cqw] w-[11cqw] rotate-[2deg] shadow-md border border-blue-200 absolute top-[3cqw] left-[14cqw] text-center"><span class="text-[1.4cqw]">📡</span><p class="text-[1cqw] font-bold">Queue</p></div><div class="bg-green-100 p-[1.2cqw] w-[11cqw] rotate-[-1deg] shadow-md border border-green-200 absolute top-[6cqw] left-[28cqw] text-center"><span class="text-[1.4cqw]">☁️</span><p class="text-[1cqw] font-bold">Cloud</p></div><div class="w-[42cqw] h-[16cqw]"></div><p class="text-[1.1cqw] text-slate-600 text-center mt-[1cqw]">🧑‍💻 → 💾 → 📡 → ☁️ → ✅</p></div>`,
          title: "Full Sync Lifecycle",
          desc: "Write local, queue delta, merge cloud, resolve conflicts.",
          subdesc: "CRDT or last-write-wins strategies handle concurrent edits gracefully.",
          punchline: "Write now. Sync later."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-yellow-50 border-yellow-200 text-slate-800 font-sketch">
      <span class="text-[1.6cqw] block">📥</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Write Local</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Commit to SQLite</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-yellow-100 text-yellow-800 border border-yellow-300">#local</span>
    </div>
    </div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-yellow-50 border-yellow-200 text-slate-800 font-sketch">
      <span class="text-[1.6cqw] block">📥</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Write Local</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Commit to SQLite</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-yellow-100 text-yellow-800 border border-yellow-300">#local</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">➔</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-yellow-50 border-yellow-200 text-slate-800 font-sketch">
      <span class="text-[1.6cqw] block">🔄</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Sync Queue</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Detect delta diff</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-blue-100 text-blue-800 border border-blue-300">#queue</span>
    </div>
    </div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-yellow-50 border-yellow-200 text-slate-800 font-sketch">
      <span class="text-[1.6cqw] block">📥</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Write Local</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Commit to SQLite</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-yellow-100 text-yellow-800 border border-yellow-300">#local</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">➔</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-yellow-50 border-yellow-200 text-slate-800 font-sketch">
      <span class="text-[1.6cqw] block">🔄</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Sync Queue</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Detect delta diff</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-blue-100 text-blue-800 border border-blue-300">#queue</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">➔</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-yellow-50 border-yellow-200 text-slate-800 font-sketch">
      <span class="text-[1.6cqw] block">☁️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">3. Cloud Merge</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Resolve conflicts</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-green-100 text-green-800 border border-green-300">#merge</span>
    </div>
    </div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-yellow-100 border-yellow-200 text-slate-800 font-sketch rotate-1">
      <div>
        <span class="text-[1.5cqw] block">💾</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Local Storage</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">SQLite database acts as the single source of truth for all offline operations and reads.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-400">#sqlite</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-blue-100 border-blue-200 text-slate-800 font-sketch -rotate-1">
      <div>
        <span class="text-[1.5cqw] block">📡</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Delta Sync</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Only modified rows and columns are transmitted to minimize bandwidth on flaky networks.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-400">#protocol</span>
    </div>
    </div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-yellow-100 border-yellow-200 text-slate-800 font-sketch rotate-1">
      <div>
        <span class="text-[1.5cqw] block">💾</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Local Storage</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">SQLite database acts as the single source of truth for all offline operations and reads.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-400">#sqlite</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-blue-100 border-blue-200 text-slate-800 font-sketch -rotate-1">
      <div>
        <span class="text-[1.5cqw] block">📡</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Delta Sync</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Only modified rows and columns are transmitted to minimize bandwidth on flaky networks.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-400">#protocol</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-red-100 border-red-200 text-slate-800 font-sketch rotate-2">
      <div>
        <span class="text-[1.5cqw] block">🛑</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Conflict Resolve</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Last-write-wins or custom CRDT merge strategies applied on the server side.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-500">#critical</span>
    </div>
    </div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-yellow-100 border-yellow-200 text-slate-800 font-sketch rotate-1">
      <div>
        <span class="text-[1.5cqw] block">💾</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Local Storage</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">SQLite database acts as the single source of truth for all offline operations and reads.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-400">#sqlite</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-blue-100 border-blue-200 text-slate-800 font-sketch -rotate-1">
      <div>
        <span class="text-[1.5cqw] block">📡</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Delta Sync</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Only modified rows and columns are transmitted to minimize bandwidth on flaky networks.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-400">#protocol</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-red-100 border-red-200 text-slate-800 font-sketch rotate-2">
      <div>
        <span class="text-[1.5cqw] block">🛑</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Conflict Resolve</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Last-write-wins or custom CRDT merge strategies applied on the server side.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-500">#critical</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-green-100 border-green-200 text-slate-800 font-sketch">
      <div>
        <span class="text-[1.5cqw] block">🔔</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Sync Monitor</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Queue depth, retry count, and conflict rate surfaced in a sketch-board dashboard.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-500">P99: 1.2s</span>
    </div>
    </div>`
      }
    },
    scene2: {
      title: "Execution & Engineering Handoff",
      subtitle: "Sync engine deployment — from dev sandbox to production rollout",
      low: {
        beat1: {
          visualHtml: `<div class="bg-green-100 p-[1.5cqw] w-[14cqw] rotate-[-1deg] shadow-md border border-green-200 font-sketch animate-float-sticky-2"><span class="text-[1.2cqw] font-bold">SHIP IT 🚀</span><p class="text-[1.3cqw] mt-[0.5cqw]">Deploy sync worker</p></div>`,
          title: "Ship the Sync Worker",
          desc: "Background service polls the outbound queue and pushes deltas."
        },
        beat2: {
          visualHtml: `<div class="flex items-center gap-[1.5cqw] font-sketch animate-match-2"><div class="bg-green-100 p-[1.2cqw] rotate-[-1deg] shadow-md border border-green-200 text-center w-[11cqw]"><span class="text-[1.4cqw]">🐳</span><p class="text-[1cqw] font-bold">Docker</p></div><div class="text-[1.8cqw] text-slate-400">+</div><div class="bg-blue-100 p-[1.2cqw] rotate-[2deg] shadow-md border border-blue-200 text-center w-[11cqw]"><span class="text-[1.4cqw]">📊</span><p class="text-[1cqw] font-bold">Metrics</p></div><div class="text-[1.8cqw] text-slate-400">+</div><div class="bg-yellow-100 p-[1.2cqw] rotate-[-2deg] shadow-md border border-yellow-200 text-center w-[11cqw]"><span class="text-[1.4cqw]">🔔</span><p class="text-[1cqw] font-bold">Alerts</p></div></div>`,
          title: "Production Stack",
          desc: "Containerized worker with observability and conflict alerting.",
          subdesc: "Grafana dashboards track sync latency, queue depth, and conflict rate."
        },
        beat3: {
          visualHtml: `<div class="bg-white p-[1.5cqw] border-2 border-dashed border-slate-300 rounded-xl font-sketch max-w-[36cqw] shadow-lg animate-match-3"><div class="flex items-center justify-between border-b border-slate-200 pb-[0.8cqw] mb-[0.8cqw]"><span class="text-[1.1cqw] font-bold">✅ Handoff Checklist</span><span class="text-[1.4cqw]">🎉</span></div><div class="space-y-[0.5cqw] text-[1cqw] text-slate-700"><p>☑️ Migration scripts tested</p><p>☑️ Conflict resolver configured</p><p>☑️ Rollback plan documented</p><p>☑️ On-call runbook attached</p></div></div>`,
          title: "Engineering Handoff Complete",
          desc: "Migration tested, conflict resolver live, rollback plan ready.",
          subdesc: "On-call runbook covers queue saturation and split-brain scenarios.",
          punchline: "Sync shipped. Sleep easy."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-green-50 border-green-200 text-slate-800 font-sketch">
      <span class="text-[1.6cqw] block">🐳</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Containerize</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Docker + K8s deploy</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-green-100 text-green-800 border border-green-300">#deploy</span>
    </div>
    </div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-green-50 border-green-200 text-slate-800 font-sketch">
      <span class="text-[1.6cqw] block">🐳</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Containerize</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Docker + K8s deploy</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-green-100 text-green-800 border border-green-300">#deploy</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">➔</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-green-50 border-green-200 text-slate-800 font-sketch">
      <span class="text-[1.6cqw] block">📊</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Monitor</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Queue depth metrics</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-blue-100 text-blue-800 border border-blue-300">#metrics</span>
    </div>
    </div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-green-50 border-green-200 text-slate-800 font-sketch">
      <span class="text-[1.6cqw] block">🐳</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Containerize</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Docker + K8s deploy</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-green-100 text-green-800 border border-green-300">#deploy</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">➔</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-green-50 border-green-200 text-slate-800 font-sketch">
      <span class="text-[1.6cqw] block">📊</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Monitor</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Queue depth metrics</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-blue-100 text-blue-800 border border-blue-300">#metrics</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">➔</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-green-50 border-green-200 text-slate-800 font-sketch">
      <span class="text-[1.6cqw] block">✅</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">3. Handoff</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Runbook ready</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-100 text-emerald-800 border border-emerald-300">#done</span>
    </div>
    </div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-green-100 border-green-200 text-slate-800 font-sketch rotate-1">
      <div>
        <span class="text-[1.5cqw] block">🐳</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Sync Worker</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Containerized background service polling outbound queue every 2 seconds with health checks.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-400">#deploy</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-blue-100 border-blue-200 text-slate-800 font-sketch -rotate-1">
      <div>
        <span class="text-[1.5cqw] block">📊</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Observability</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Grafana dashboards: sync latency P99, queue depth, conflict rate, retry histogram.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-400">#metrics</span>
    </div>
    </div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-green-100 border-green-200 text-slate-800 font-sketch rotate-1">
      <div>
        <span class="text-[1.5cqw] block">🐳</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Sync Worker</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Containerized background service polling outbound queue every 2 seconds with health checks.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-400">#deploy</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-blue-100 border-blue-200 text-slate-800 font-sketch -rotate-1">
      <div>
        <span class="text-[1.5cqw] block">📊</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Observability</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Grafana dashboards: sync latency P99, queue depth, conflict rate, retry histogram.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-400">#metrics</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-emerald-100 border-emerald-200 text-slate-800 font-sketch rotate-2">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Runbook</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Rollback plan, split-brain recovery procedure, and on-call escalation paths documented.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-400">#handoff</span>
    </div>
    </div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-green-100 border-green-200 text-slate-800 font-sketch rotate-1">
      <div>
        <span class="text-[1.5cqw] block">🐳</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Sync Worker</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Containerized background service polling outbound queue every 2 seconds with health checks.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-400">#deploy</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-blue-100 border-blue-200 text-slate-800 font-sketch -rotate-1">
      <div>
        <span class="text-[1.5cqw] block">📊</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Observability</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Grafana dashboards: sync latency P99, queue depth, conflict rate, retry histogram.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-400">#metrics</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-emerald-100 border-emerald-200 text-slate-800 font-sketch rotate-2">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Runbook</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Rollback plan, split-brain recovery procedure, and on-call escalation paths documented.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-400">#handoff</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-yellow-100 border-yellow-200 text-slate-800 font-sketch">
      <div>
        <span class="text-[1.5cqw] block">🔔</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Alert Rules</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">PagerDuty triggers on queue depth &gt; 10k, conflict rate &gt; 5%, or sync stall &gt; 60s.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-600">3 rules</span>
    </div>
    </div>`
      }
    }
  },
  3: {
    scene1: {
      title: "Concept & Core Architecture",
      subtitle: "Human-Agent Collaboration Handshake — establishing trust before execution",
      low: {
        beat1: {
          visualHtml: `<div class="flex items-start gap-[1cqw] max-w-[35cqw] bg-slate-800/90 p-[1.5cqw] rounded-[1.2cqw] border border-slate-700 animate-spring-scale"><span class="text-[2.5cqw]">🧑‍💻</span><div class="text-slate-100 text-[1.2cqw] font-mono">"Initiate secure handshake protocol."</div></div>`,
          title: "The Handshake Begins",
          desc: "Human states intent; agent acknowledges scope before any code is written."
        },
        beat2: {
          visualHtml: `<div class="flex flex-col gap-[1cqw] max-w-[38cqw] animate-match-2"><div class="flex items-start gap-[1cqw] bg-slate-800/90 p-[1.2cqw] rounded-[1cqw] border border-slate-700"><span class="text-[2cqw]">🧑‍💻</span><div class="text-slate-100 text-[1.1cqw] font-mono">"Refactor auth module, keep tests green."</div></div><div class="flex items-start gap-[1cqw] bg-teal-950/80 p-[1.2cqw] rounded-[1cqw] border border-teal-700 ml-[3cqw]"><span class="text-[2cqw]">🤖</span><div class="text-teal-100 text-[1.1cqw] font-mono">"Acknowledged. Constraints: no DB changes, 12 test files."</div></div></div>`,
          title: "Intent Echo & Constraint Lock",
          desc: "Agent mirrors intent and surfaces constraints before proceeding.",
          subdesc: "Misalignment caught early — before a single line of code changes."
        },
        beat3: {
          visualHtml: `<div class="bg-slate-950 rounded-xl p-[1.5cqw] max-w-[42cqw] border border-slate-700 font-mono animate-match-3"><div class="text-[0.9cqw] text-teal-400 mb-[0.8cqw]">HANDSHAKE COMPLETE ✓</div><div class="space-y-[0.5cqw] text-[1cqw]"><div class="text-slate-300"><span class="text-teal-500">HUMAN:</span> scope + constraints</div><div class="text-slate-300"><span class="text-teal-500">AGENT:</span> plan + risk flags</div><div class="text-slate-300"><span class="text-emerald-400">BOTH:</span> acceptance criteria locked</div></div><div class="mt-[1cqw] flex gap-[1cqw]"><span class="px-[1cqw] py-[0.3cqw] bg-teal-900 text-teal-300 rounded text-[0.85cqw]">TRUST: HIGH</span><span class="px-[1cqw] py-[0.3cqw] bg-slate-800 text-slate-400 rounded text-[0.85cqw]">LATENCY: 4.2s</span></div></div>`,
          title: "Trust Protocol Established",
          desc: "Scope, constraints, and acceptance criteria locked by both parties.",
          subdesc: "Handshake latency under 5s — faster than a standup clarification round.",
          punchline: "Align first. Code second."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <span class="text-[1.6cqw] block">🧑‍💻</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Human Intent</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">State goal + constraints</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-slate-800 text-slate-300 border border-slate-600">INTENT</span>
    </div>
    </div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <span class="text-[1.6cqw] block">🧑‍💻</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Human Intent</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">State goal + constraints</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-slate-800 text-slate-300 border border-slate-600">INTENT</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <span class="text-[1.6cqw] block">🤖</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Agent Echo</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Mirror + flag risks</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-teal-950 text-teal-400 border border-teal-800">CONFIRM</span>
    </div>
    </div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <span class="text-[1.6cqw] block">🧑‍💻</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Human Intent</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">State goal + constraints</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-slate-800 text-slate-300 border border-slate-600">INTENT</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <span class="text-[1.6cqw] block">🤖</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Agent Echo</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Mirror + flag risks</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-teal-950 text-teal-400 border border-teal-800">CONFIRM</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">→</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <span class="text-[1.6cqw] block">🤝</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">3. Handshake</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Lock acceptance criteria</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-950 text-emerald-400 border border-emerald-800">TRUSTED</span>
    </div>
    </div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <div>
        <span class="text-[1.5cqw] block">📝</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Intent Capture</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Natural language goal parsed into structured task graph with explicit non-goals and boundary files.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-400">latency: 1.1s</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <div>
        <span class="text-[1.5cqw] block">🔒</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Constraint Lock</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Agent surfaces files, APIs, and test suites that must not change — human confirms or adjusts.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-400">12 files locked</span>
    </div>
    </div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <div>
        <span class="text-[1.5cqw] block">📝</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Intent Capture</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Natural language goal parsed into structured task graph with explicit non-goals and boundary files.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-400">latency: 1.1s</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <div>
        <span class="text-[1.5cqw] block">🔒</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Constraint Lock</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Agent surfaces files, APIs, and test suites that must not change — human confirms or adjusts.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-400">12 files locked</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <div>
        <span class="text-[1.5cqw] block">⚠️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Risk Flags</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Blast radius estimate, missing test coverage, and ambiguous requirements flagged before execution.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-400">3 risks found</span>
    </div>
    </div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <div>
        <span class="text-[1.5cqw] block">📝</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Intent Capture</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Natural language goal parsed into structured task graph with explicit non-goals and boundary files.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-400">latency: 1.1s</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <div>
        <span class="text-[1.5cqw] block">🔒</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Constraint Lock</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Agent surfaces files, APIs, and test suites that must not change — human confirms or adjusts.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-400">12 files locked</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <div>
        <span class="text-[1.5cqw] block">⚠️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Risk Flags</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Blast radius estimate, missing test coverage, and ambiguous requirements flagged before execution.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-400">3 risks found</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-teal-950 border-teal-800 text-teal-100 font-mono">
      <div>
        <span class="text-[1.5cqw] block">✅</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Acceptance Criteria</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Both parties agree on verifiable done-state: tests pass, diff scope, and review checklist.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">TRUST: HIGH</span>
    </div>
    </div>`
      }
    },
    scene2: {
      title: "Execution & Engineering Handoff",
      subtitle: "From handshake to verified delivery — the agent execution loop",
      low: {
        beat1: {
          visualHtml: `<div class="flex items-start gap-[1cqw] bg-teal-950/80 p-[1.5cqw] rounded-[1.2cqw] border border-teal-700 max-w-[35cqw] animate-spring-scale"><span class="text-[2.5cqw]">🤖</span><div class="text-teal-100 text-[1.2cqw] font-mono">"Executing plan. Step 1/4..."</div></div>`,
          title: "Agent Executes Plan",
          desc: "Structured plan unfolds step-by-step with human visibility at each gate."
        },
        beat2: {
          visualHtml: `<div class="flex flex-col gap-[0.8cqw] max-w-[40cqw] font-mono animate-match-2"><div class="flex items-center gap-[1cqw] bg-slate-900 p-[1cqw] rounded-lg border border-emerald-700"><span class="text-emerald-400">✓</span><span class="text-[1cqw] text-slate-300">Step 1: Read auth module</span></div><div class="flex items-center gap-[1cqw] bg-slate-900 p-[1cqw] rounded-lg border border-emerald-700"><span class="text-emerald-400">✓</span><span class="text-[1cqw] text-slate-300">Step 2: Apply refactor diff</span></div><div class="flex items-center gap-[1cqw] bg-slate-900 p-[1cqw] rounded-lg border border-amber-700 animate-pipeline-pulse"><span class="text-amber-400">⏳</span><span class="text-[1cqw] text-slate-300">Step 3: Run test suite...</span></div></div>`,
          title: "Visible Progress Gates",
          desc: "Each step reports status — human can interrupt at any checkpoint.",
          subdesc: "No black-box execution. Every mutation is traceable and reversible."
        },
        beat3: {
          visualHtml: `<div class="bg-slate-950 rounded-xl p-[1.5cqw] max-w-[40cqw] border border-emerald-700 font-mono animate-match-3"><div class="flex items-center justify-between mb-[1cqw]"><span class="text-[1cqw] text-emerald-400">DELIVERY REPORT</span><span class="px-[1cqw] py-[0.3cqw] bg-emerald-950 text-emerald-400 rounded text-[0.85cqw]">ALL PASS</span></div><div class="grid grid-cols-3 gap-[1cqw] text-center text-[0.9cqw]"><div class="bg-slate-900 rounded p-[0.8cqw]"><span class="text-white font-bold block">142</span><span class="text-slate-500">Tests</span></div><div class="bg-slate-900 rounded p-[0.8cqw]"><span class="text-white font-bold block">8</span><span class="text-slate-500">Files</span></div><div class="bg-slate-900 rounded p-[0.8cqw]"><span class="text-white font-bold block">0</span><span class="text-slate-500">Regressions</span></div></div></div>`,
          title: "Verified Delivery",
          desc: "All tests pass, diff scoped, handoff report generated.",
          subdesc: "Human reviews diff — agent waits for explicit approval before merge.",
          punchline: "Trust earned. Ship approved."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <span class="text-[1.6cqw] block">📋</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Plan Steps</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Structured task graph</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-slate-800 text-slate-300 border border-slate-600">PLAN</span>
    </div>
    </div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <span class="text-[1.6cqw] block">📋</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Plan Steps</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Structured task graph</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-slate-800 text-slate-300 border border-slate-600">PLAN</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <span class="text-[1.6cqw] block">⚡</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Execute</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Step-by-step with gates</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-950 text-amber-400 border border-amber-800">RUNNING</span>
    </div>
    </div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <span class="text-[1.6cqw] block">📋</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Plan Steps</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Structured task graph</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-slate-800 text-slate-300 border border-slate-600">PLAN</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <span class="text-[1.6cqw] block">⚡</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Execute</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Step-by-step with gates</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-950 text-amber-400 border border-amber-800">RUNNING</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">→</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <span class="text-[1.6cqw] block">📊</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">3. Report</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Tests + diff summary</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-950 text-emerald-400 border border-emerald-800">DELIVERED</span>
    </div>
    </div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Task Graph</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Decomposed plan with dependencies, estimated blast radius, and rollback points per step.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-400">4 steps</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <div>
        <span class="text-[1.5cqw] block">🔍</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Diff Preview</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Side-by-side before/after for every file change — human approves before apply.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">8 files</span>
    </div>
    </div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Task Graph</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Decomposed plan with dependencies, estimated blast radius, and rollback points per step.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-400">4 steps</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <div>
        <span class="text-[1.5cqw] block">🔍</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Diff Preview</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Side-by-side before/after for every file change — human approves before apply.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">8 files</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Test Gate</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Full test suite runs after each major step — execution halts on first failure.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">142 PASS</span>
    </div>
    </div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Task Graph</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Decomposed plan with dependencies, estimated blast radius, and rollback points per step.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-400">4 steps</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <div>
        <span class="text-[1.5cqw] block">🔍</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Diff Preview</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Side-by-side before/after for every file change — human approves before apply.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">8 files</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-slate-900 border-slate-700 text-slate-100 font-mono">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Test Gate</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Full test suite runs after each major step — execution halts on first failure.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">142 PASS</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-teal-950 border-teal-800 text-teal-100 font-mono">
      <div>
        <span class="text-[1.5cqw] block">📄</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Handoff Report</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Summary of changes, test results, risk notes, and recommended review focus areas.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">READY</span>
    </div>
    </div>`
      }
    }
  },
  4: {
    scene1: {
      title: "Concept & Core Architecture",
      subtitle: "The Death of Boilerplate Code — why repetition is the enemy of velocity",
      low: {
        beat1: {
          visualHtml: `<div class="flex flex-col items-center font-black tracking-tighter uppercase animate-kinetic-punch"><span class="text-[3cqw] text-slate-500 line-through">LEGACY</span><span class="text-[5cqw] text-yellow-400 bg-black px-[1.5cqw]">CODE</span></div>`,
          title: "Boilerplate Is Dead Weight",
          desc: "Repetitive scaffolding drains engineering velocity and hides real intent."
        },
        beat2: {
          visualHtml: `<div class="flex flex-col items-center font-black tracking-tighter uppercase animate-match-2"><span class="text-[2.5cqw] text-slate-600 line-through bg-black/80 px-[1cqw]">GETTERS</span><span class="text-[2.5cqw] text-slate-600 line-through bg-black/80 px-[1cqw] mt-[0.5cqw]">SETTERS</span><span class="text-[2.5cqw] text-slate-600 line-through bg-black/80 px-[1cqw] mt-[0.5cqw]">DTOs</span><span class="text-[4cqw] text-yellow-400 bg-black px-[2cqw] mt-[1cqw] border-[0.3cqw] border-yellow-400">DEAD</span></div>`,
          title: "The Hit List Grows",
          desc: "Getters, setters, DTOs, mappers — all candidates for elimination.",
          subdesc: "Every line of boilerplate is a line that can drift, rot, or lie."
        },
        beat3: {
          visualHtml: `<div class="flex flex-col items-center justify-center font-black tracking-tighter text-[4.5cqw] uppercase bg-black p-[2.5cqw] rounded-[1cqw] border-[0.4cqw] border-yellow-400 shadow-2xl animate-kinetic-punch max-w-[45cqw]"><span class="line-through text-slate-600 text-[2cqw]">LEGACY CODE</span><span class="text-yellow-400">DEATH OF</span><span class="text-white text-[3.5cqw]">BOILERPLATE</span><span class="text-[1.2cqw] text-yellow-400/80 mt-[1cqw] font-mono normal-case tracking-normal">AI generates intent. Humans review truth.</span></div>`,
          title: "The Final Word",
          desc: "AI generates from intent; humans review for truth. Boilerplate dies.",
          subdesc: "The future belongs to declarative intent, not imperative repetition.",
          punchline: "Write intent. Skip the noise."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-black border-yellow-400 text-white font-black uppercase">
      <span class="text-[1.6cqw] block">💀</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Identify</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Scan for repetition</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-black text-yellow-400 border border-yellow-600">SCAN</span>
    </div>
    </div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-black border-yellow-400 text-white font-black uppercase">
      <span class="text-[1.6cqw] block">💀</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Identify</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Scan for repetition</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-black text-yellow-400 border border-yellow-600">SCAN</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">▶</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-black border-yellow-400 text-white font-black uppercase">
      <span class="text-[1.6cqw] block">🔥</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Eliminate</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Generate from intent</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-yellow-400 text-black border border-yellow-500">PURGE</span>
    </div>
    </div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-black border-yellow-400 text-white font-black uppercase">
      <span class="text-[1.6cqw] block">💀</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Identify</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Scan for repetition</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-black text-yellow-400 border border-yellow-600">SCAN</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">▶</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-black border-yellow-400 text-white font-black uppercase">
      <span class="text-[1.6cqw] block">🔥</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Eliminate</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Generate from intent</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-yellow-400 text-black border border-yellow-500">PURGE</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">▶</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-black border-yellow-400 text-white font-black uppercase">
      <span class="text-[1.6cqw] block">✨</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">3. Verify</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Human review gate</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-white text-black border border-slate-300">CLEAN</span>
    </div>
    </div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-black border-yellow-600 text-white">
      <div>
        <span class="text-[1.5cqw] block">📊</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Boilerplate Audit</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Static analysis counts repetitive patterns: CRUD stubs, mapper classes, config boilerplate across the repo.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-400">4,821 lines</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-black border-yellow-600 text-white">
      <div>
        <span class="text-[1.5cqw] block">🤖</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Intent Generator</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">LLM reads interface contracts and generates implementation — zero hand-written getters.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-400">-78% LOC</span>
    </div>
    </div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-black border-yellow-600 text-white">
      <div>
        <span class="text-[1.5cqw] block">📊</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Boilerplate Audit</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Static analysis counts repetitive patterns: CRUD stubs, mapper classes, config boilerplate across the repo.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-400">4,821 lines</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-black border-yellow-600 text-white">
      <div>
        <span class="text-[1.5cqw] block">🤖</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Intent Generator</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">LLM reads interface contracts and generates implementation — zero hand-written getters.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-400">-78% LOC</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-black border-emerald-700 text-white">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Regression Shield</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Generated code must pass existing test suite — no boilerplate removal without safety net.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">100% pass</span>
    </div>
    </div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-black border-yellow-600 text-white">
      <div>
        <span class="text-[1.5cqw] block">📊</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Boilerplate Audit</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Static analysis counts repetitive patterns: CRUD stubs, mapper classes, config boilerplate across the repo.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-400">4,821 lines</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-black border-yellow-600 text-white">
      <div>
        <span class="text-[1.5cqw] block">🤖</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Intent Generator</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">LLM reads interface contracts and generates implementation — zero hand-written getters.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-400">-78% LOC</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-black border-emerald-700 text-white">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Regression Shield</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Generated code must pass existing test suite — no boilerplate removal without safety net.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">100% pass</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-yellow-400 border-yellow-500 text-black font-black">
      <div>
        <span class="text-[1.5cqw] block">👁️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Human Review</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Engineer approves semantic correctness — AI handles syntax, human handles meaning.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-400">REQUIRED</span>
    </div>
    </div>`
      }
    },
    scene2: {
      title: "Execution & Engineering Handoff",
      subtitle: "Boilerplate elimination pipeline — from audit to verified cleanup",
      low: {
        beat1: {
          visualHtml: `<div class="bg-yellow-400 text-black font-black uppercase text-[2.5cqw] px-[2cqw] py-[1cqw] animate-kinetic-punch border-[0.3cqw] border-black">PURGE MODE: ON</div>`,
          title: "Initiate Purge",
          desc: "Automated scan identifies boilerplate clusters ranked by elimination safety."
        },
        beat2: {
          visualHtml: `<div class="grid grid-cols-3 gap-[1cqw] max-w-[40cqw] animate-match-2 font-black uppercase text-center"><div class="bg-black text-yellow-400 p-[1cqw] border border-yellow-600"><span class="text-[1.8cqw] block">847</span><span class="text-[0.8cqw]">DTOs</span></div><div class="bg-black text-yellow-400 p-[1cqw] border border-yellow-600"><span class="text-[1.8cqw] block">1.2k</span><span class="text-[0.8cqw]">Mappers</span></div><div class="bg-yellow-400 text-black p-[1cqw] border border-black animate-pipeline-pulse"><span class="text-[1.8cqw] block">→ 0</span><span class="text-[0.8cqw]">Target</span></div></div>`,
          title: "Quantified Targets",
          desc: "847 DTOs, 1.2k mappers identified — all marked for generation replacement.",
          subdesc: "Safety score ranks each cluster by test coverage proximity."
        },
        beat3: {
          visualHtml: `<div class="bg-black border-[0.4cqw] border-yellow-400 p-[2cqw] max-w-[38cqw] text-center animate-kinetic-punch"><div class="text-yellow-400 font-black uppercase text-[2cqw] mb-[0.8cqw]">PURGE COMPLETE</div><div class="grid grid-cols-2 gap-[1cqw] text-[1cqw] font-mono"><div class="text-white"><span class="text-yellow-400 font-black">-4,821</span> lines removed</div><div class="text-white"><span class="text-emerald-400 font-black">142/142</span> tests pass</div></div><div class="text-[1.2cqw] text-yellow-400 mt-[1cqw] font-black uppercase">SHIP IT.</div></div>`,
          title: "Clean Code Delivered",
          desc: "4,821 lines removed, all tests pass, human review approved.",
          subdesc: "Diff scoped to generated replacements — no behavioral changes detected.",
          punchline: "Less code. More intent."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-black border-yellow-400 text-white font-black uppercase">
      <span class="text-[1.6cqw] block">🔍</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Audit</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Scan boilerplate clusters</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-black text-yellow-400 border border-yellow-600">SCAN</span>
    </div>
    </div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-black border-yellow-400 text-white font-black uppercase">
      <span class="text-[1.6cqw] block">🔍</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Audit</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Scan boilerplate clusters</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-black text-yellow-400 border border-yellow-600">SCAN</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">▶</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-black border-yellow-400 text-white font-black uppercase">
      <span class="text-[1.6cqw] block">⚡</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Generate</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Replace with intent-driven code</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-yellow-400 text-black border border-yellow-500">GEN</span>
    </div>
    </div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-black border-yellow-400 text-white font-black uppercase">
      <span class="text-[1.6cqw] block">🔍</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Audit</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Scan boilerplate clusters</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-black text-yellow-400 border border-yellow-600">SCAN</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">▶</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-black border-yellow-400 text-white font-black uppercase">
      <span class="text-[1.6cqw] block">⚡</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Generate</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Replace with intent-driven code</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-yellow-400 text-black border border-yellow-500">GEN</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">▶</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-black border-yellow-400 text-white font-black uppercase">
      <span class="text-[1.6cqw] block">🚀</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">3. Ship</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Tests pass + review done</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-white text-black border border-slate-300">SHIPPED</span>
    </div>
    </div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-black border-yellow-600 text-white">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Audit Report</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Full inventory of boilerplate patterns with LOC count, file paths, and elimination safety score.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-400">4,821 LOC</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-black border-yellow-600 text-white">
      <div>
        <span class="text-[1.5cqw] block">🔄</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Generation Pipeline</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Intent specs drive codegen — mappers, DTOs, and CRUD stubs replaced atomically per module.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-400">12 modules</span>
    </div>
    </div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-black border-yellow-600 text-white">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Audit Report</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Full inventory of boilerplate patterns with LOC count, file paths, and elimination safety score.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-400">4,821 LOC</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-black border-yellow-600 text-white">
      <div>
        <span class="text-[1.5cqw] block">🔄</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Generation Pipeline</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Intent specs drive codegen — mappers, DTOs, and CRUD stubs replaced atomically per module.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-400">12 modules</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-black border-emerald-700 text-white">
      <div>
        <span class="text-[1.5cqw] block">✅</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Verification Gate</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Full regression suite + snapshot diff review before any boilerplate deletion merges.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">142/142</span>
    </div>
    </div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-black border-yellow-600 text-white">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Audit Report</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Full inventory of boilerplate patterns with LOC count, file paths, and elimination safety score.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-400">4,821 LOC</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-black border-yellow-600 text-white">
      <div>
        <span class="text-[1.5cqw] block">🔄</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Generation Pipeline</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Intent specs drive codegen — mappers, DTOs, and CRUD stubs replaced atomically per module.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-400">12 modules</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-black border-emerald-700 text-white">
      <div>
        <span class="text-[1.5cqw] block">✅</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Verification Gate</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Full regression suite + snapshot diff review before any boilerplate deletion merges.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">142/142</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-yellow-400 border-yellow-500 text-black font-black">
      <div>
        <span class="text-[1.5cqw] block">📦</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Delivery Bundle</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">PR with before/after metrics, reviewer checklist, and rollback tag for instant revert.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-400">READY</span>
    </div>
    </div>`
      }
    }
  },
  5: {
    scene1: {
      title: "Concept & Core Architecture",
      subtitle: "The Context-Driven Handoff Kit — everything an agent needs before execution",
      low: {
        beat1: {
          visualHtml: `<div class="text-[7cqw] filter drop-shadow-lg animate-float-sticky-1">🎒</div>`,
          title: "Pack the Kit",
          desc: "A complete handoff kit carries intent, constraints, and verification criteria."
        },
        beat2: {
          visualHtml: `<div class="grid grid-cols-3 gap-[1.5cqw] max-w-[40cqw] animate-match-2"><div class="bg-amber-50 border-2 border-amber-300 rounded-xl p-[1.2cqw] text-center shadow-md"><span class="text-[2cqw]">📋</span><p class="text-[1cqw] font-bold text-amber-900 mt-[0.3cqw]">Intent</p></div><div class="bg-amber-50 border-2 border-amber-300 rounded-xl p-[1.2cqw] text-center shadow-md"><span class="text-[2cqw]">🔒</span><p class="text-[1cqw] font-bold text-amber-900 mt-[0.3cqw]">Constraints</p></div><div class="bg-amber-50 border-2 border-amber-300 rounded-xl p-[1.2cqw] text-center shadow-md"><span class="text-[2cqw]">🧪</span><p class="text-[1cqw] font-bold text-amber-900 mt-[0.3cqw]">Tests</p></div></div>`,
          title: "Three Compartments",
          desc: "Intent, constraints, and verification — each in its own labeled section.",
          subdesc: "Missing any compartment means the agent operates blind."
        },
        beat3: {
          visualHtml: `<div class="relative bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-400 rounded-2xl p-[2cqw] max-w-[42cqw] shadow-xl animate-match-3"><div class="absolute -top-[0.6cqw] left-[2cqw] bg-amber-400 text-amber-950 px-[1.5cqw] py-[0.3cqw] rounded text-[0.9cqw] font-bold">FIELD KIT v2</div><div class="grid grid-cols-2 gap-[1cqw] mt-[1cqw]"><div class="bg-white rounded-lg p-[1cqw] border border-amber-200"><span class="text-[1.4cqw]">📋</span><p class="text-[0.9cqw] font-bold text-amber-900">Intent Brief</p><p class="text-[0.75cqw] text-amber-700">Goal + non-goals</p></div><div class="bg-white rounded-lg p-[1cqw] border border-amber-200"><span class="text-[1.4cqw]">🔒</span><p class="text-[0.9cqw] font-bold text-amber-900">Constraints</p><p class="text-[0.75cqw] text-amber-700">Files + APIs locked</p></div><div class="bg-white rounded-lg p-[1cqw] border border-amber-200"><span class="text-[1.4cqw]">🧪</span><p class="text-[0.9cqw] font-bold text-amber-900">Test Plan</p><p class="text-[0.75cqw] text-amber-700">142 tests listed</p></div><div class="bg-white rounded-lg p-[1cqw] border border-amber-200"><span class="text-[1.4cqw]">📎</span><p class="text-[0.9cqw] font-bold text-amber-900">Context Files</p><p class="text-[0.75cqw] text-amber-700">8 refs attached</p></div></div></div>`,
          title: "Complete Field Kit",
          desc: "Four compartments packed: intent, constraints, tests, and context files.",
          subdesc: "Agent opens kit and has everything needed — zero clarification rounds.",
          punchline: "Pack context. Skip the chase."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">📋</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Intent Brief</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Goal + non-goals written</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-100 text-amber-800 border border-amber-300">INTENT</span>
    </div>
    </div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">📋</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Intent Brief</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Goal + non-goals written</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-100 text-amber-800 border border-amber-300">INTENT</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">🔒</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Constraints</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Files + APIs locked</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-200 text-amber-900 border border-amber-400">LOCKED</span>
    </div>
    </div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">📋</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Intent Brief</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Goal + non-goals written</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-100 text-amber-800 border border-amber-300">INTENT</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">🔒</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Constraints</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Files + APIs locked</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-200 text-amber-900 border border-amber-400">LOCKED</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">→</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">🧪</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">3. Test Plan</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Verification criteria set</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-100 text-emerald-800 border border-emerald-300">READY</span>
    </div>
    </div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Intent Brief</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Structured goal statement with explicit non-goals, success metrics, and scope boundaries.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-700">REQUIRED</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-amber-50 border-amber-300 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">🔒</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Constraint Map</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Files, APIs, and database tables that must not change — with rationale for each lock.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-700">12 locked</span>
    </div>
    </div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Intent Brief</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Structured goal statement with explicit non-goals, success metrics, and scope boundaries.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-700">REQUIRED</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-amber-50 border-amber-300 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">🔒</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Constraint Map</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Files, APIs, and database tables that must not change — with rationale for each lock.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-700">12 locked</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-amber-50 border-amber-300 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Test Plan</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Exact test commands, expected outcomes, and coverage thresholds for verification.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-700">142 tests</span>
    </div>
    </div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Intent Brief</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Structured goal statement with explicit non-goals, success metrics, and scope boundaries.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-700">REQUIRED</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-amber-50 border-amber-300 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">🔒</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Constraint Map</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Files, APIs, and database tables that must not change — with rationale for each lock.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-700">12 locked</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-amber-50 border-amber-300 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Test Plan</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Exact test commands, expected outcomes, and coverage thresholds for verification.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-700">142 tests</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-white border-amber-200 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">📎</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Context Attachments</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Relevant source files, ADRs, and prior art linked — agent reads before writing.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-600">8 files</span>
    </div>
    </div>`
      }
    },
    scene2: {
      title: "Execution & Engineering Handoff",
      subtitle: "Kit delivery workflow — from packed context to agent execution",
      low: {
        beat1: {
          visualHtml: `<div class="flex items-center gap-[1.5cqw] animate-spring-scale"><span class="text-[4cqw]">🎒</span><div class="bg-amber-100 border-2 border-amber-400 rounded-xl px-[2cqw] py-[1cqw]"><span class="text-[1.2cqw] font-bold text-amber-900">KIT SEALED ✓</span></div></div>`,
          title: "Kit Sealed & Ready",
          desc: "All compartments verified — kit is ready for agent pickup."
        },
        beat2: {
          visualHtml: `<div class="flex items-center gap-[2cqw] animate-match-2"><div class="text-[3cqw]">🎒</div><div class="text-[2cqw] text-amber-600">→</div><div class="bg-slate-900 rounded-xl p-[1.5cqw] border border-slate-700 text-center"><span class="text-[2.5cqw]">🤖</span><p class="text-[1cqw] font-mono text-teal-400 mt-[0.5cqw]">Agent unpacking...</p></div><div class="text-[2cqw] text-amber-600">→</div><div class="bg-emerald-100 rounded-xl p-[1.5cqw] border border-emerald-400 text-center"><span class="text-[2cqw]">✅</span><p class="text-[1cqw] font-bold text-emerald-800 mt-[0.3cqw]">Context loaded</p></div></div>`,
          title: "Agent Unpacks Kit",
          desc: "Agent reads all compartments before writing a single line of code.",
          subdesc: "Unpack latency: 3.8s — faster than a Slack thread clarification."
        },
        beat3: {
          visualHtml: `<div class="bg-gradient-to-br from-amber-50 to-emerald-50 border-2 border-emerald-400 rounded-2xl p-[2cqw] max-w-[40cqw] shadow-xl animate-match-3"><div class="text-[1.1cqw] font-bold text-emerald-800 mb-[0.8cqw]">HANDOFF COMPLETE ✓</div><div class="grid grid-cols-2 gap-[1cqw] text-[0.9cqw]"><div class="bg-white rounded-lg p-[0.8cqw] border border-emerald-200"><span class="font-bold text-emerald-800">Context</span><p class="text-emerald-600">8/8 files read</p></div><div class="bg-white rounded-lg p-[0.8cqw] border border-emerald-200"><span class="font-bold text-emerald-800">Constraints</span><p class="text-emerald-600">12/12 honored</p></div><div class="bg-white rounded-lg p-[0.8cqw] border border-emerald-200"><span class="font-bold text-emerald-800">Tests</span><p class="text-emerald-600">142/142 pass</p></div><div class="bg-white rounded-lg p-[0.8cqw] border border-emerald-200"><span class="font-bold text-emerald-800">Review</span><p class="text-emerald-600">Approved</p></div></div></div>`,
          title: "Handoff Verified",
          desc: "Context loaded, constraints honored, tests pass, human approved.",
          subdesc: "Zero clarification rounds needed — kit contained everything.",
          punchline: "Context packed. Mission clear."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">📦</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Seal Kit</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Verify all compartments</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-100 text-amber-800 border border-amber-300">SEALED</span>
    </div>
    </div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">📦</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Seal Kit</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Verify all compartments</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-100 text-amber-800 border border-amber-300">SEALED</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">🤖</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Agent Unpack</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Load context + constraints</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-slate-800 text-teal-400 border border-slate-600">LOADING</span>
    </div>
    </div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">📦</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Seal Kit</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Verify all compartments</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-100 text-amber-800 border border-amber-300">SEALED</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">🤖</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Agent Unpack</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Load context + constraints</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-slate-800 text-teal-400 border border-slate-600">LOADING</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">→</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">✅</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">3. Verify</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Tests pass + review done</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-100 text-emerald-800 border border-emerald-300">APPROVED</span>
    </div>
    </div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">📦</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Kit Validator</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Automated check ensures all four compartments are populated before agent handoff.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-700">4/4 packed</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-900 border-slate-700 text-white font-mono">
      <div>
        <span class="text-[1.5cqw] block">🤖</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Agent Loader</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Context files ingested, constraints parsed, test plan registered in agent workspace.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-600">3.8s load</span>
    </div>
    </div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">📦</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Kit Validator</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Automated check ensures all four compartments are populated before agent handoff.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-700">4/4 packed</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-900 border-slate-700 text-white font-mono">
      <div>
        <span class="text-[1.5cqw] block">🤖</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Agent Loader</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Context files ingested, constraints parsed, test plan registered in agent workspace.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-600">3.8s load</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-emerald-50 border-emerald-300 text-emerald-950">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Verification Run</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Agent executes against test plan — halts and reports on first constraint violation.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-600">142 PASS</span>
    </div>
    </div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">📦</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Kit Validator</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Automated check ensures all four compartments are populated before agent handoff.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-700">4/4 packed</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-900 border-slate-700 text-white font-mono">
      <div>
        <span class="text-[1.5cqw] block">🤖</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Agent Loader</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Context files ingested, constraints parsed, test plan registered in agent workspace.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-600">3.8s load</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-emerald-50 border-emerald-300 text-emerald-950">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Verification Run</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Agent executes against test plan — halts and reports on first constraint violation.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-600">142 PASS</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-white border-emerald-200 text-emerald-950">
      <div>
        <span class="text-[1.5cqw] block">📝</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Review Checklist</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Human reviewer confirms semantic correctness against intent brief — final approval gate.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-600">APPROVED</span>
    </div>
    </div>`
      }
    }
  },
  6: {
    scene1: {
      title: "Concept & Core Architecture",
      subtitle: "The First Principles of Quantum Computing — building from the ground up",
      low: {
        beat1: {
          visualHtml: `<div class="border-[0.2cqw] border-dashed border-white/30 p-[2cqw] rounded-xl text-center font-sketch max-w-[30cqw] animate-spring-scale bg-[#1e2923]"><div class="text-[1.8cqw] text-yellow-200">|0⟩</div><p class="text-[1cqw] text-slate-400 mt-[0.5cqw]">The classical bit: definite state.</p></div>`,
          title: "Classical Foundation",
          desc: "A classical bit is either 0 or 1 — definite, deterministic, familiar."
        },
        beat2: {
          visualHtml: `<div class="border-[0.2cqw] border-dashed border-white/30 p-[2cqw] rounded-xl text-center font-sketch max-w-[32cqw] animate-match-2 bg-[#1e2923]"><div class="text-[1.8cqw] text-yellow-200">|Ψ⟩ = α|0⟩ + β|1⟩</div><p class="text-[1cqw] text-emerald-300 mt-[0.5cqw]">Superposition: both states at once.</p><div class="mt-[0.8cqw] flex justify-center gap-[1.5cqw] text-[1.2cqw]"><span class="text-white/60">|0⟩</span><span class="text-yellow-300">+</span><span class="text-white/60">|1⟩</span></div></div>`,
          title: "Enter Superposition",
          desc: "A qubit exists in a linear combination of |0⟩ and |1⟩ simultaneously.",
          subdesc: "Measurement collapses the superposition to a definite classical outcome."
        },
        beat3: {
          visualHtml: `<div class="border-[0.2cqw] border-dashed border-white/30 p-[2.5cqw] rounded-xl font-sketch max-w-[40cqw] animate-match-3 bg-[#1e2923]"><div class="grid grid-cols-3 gap-[1.5cqw] text-center"><div><span class="text-[1.6cqw]">⚛️</span><p class="text-[1cqw] text-yellow-200 font-bold mt-[0.3cqw]">Superposition</p><p class="text-[0.8cqw] text-slate-400">α|0⟩ + β|1⟩</p></div><div><span class="text-[1.6cqw]">🔗</span><p class="text-[1cqw] text-yellow-200 font-bold mt-[0.3cqw]">Entanglement</p><p class="text-[0.8cqw] text-slate-400">Linked qubits</p></div><div><span class="text-[1.6cqw]">🌀</span><p class="text-[1cqw] text-yellow-200 font-bold mt-[0.3cqw]">Interference</p><p class="text-[0.8cqw] text-slate-400">Amplify truth</p></div></div><p class="text-[0.9cqw] text-emerald-400 text-center mt-[1cqw] font-mono">[✓] Three pillars proven on the board</p></div>`,
          title: "Three Pillars of Quantum",
          desc: "Superposition, entanglement, and interference — the foundation of quantum advantage.",
          subdesc: "These three principles enable exponential speedup for specific problem classes.",
          punchline: "Think quantum. Compute different."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-[#1e2923] border-white/20 text-white font-sketch">
      <span class="text-[1.6cqw] block">1️⃣</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Prepare State</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Initialize |0⟩ qubit</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-[#1e2923] text-yellow-200 border border-white/20 font-sketch">|0⟩</span>
    </div>
    </div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-[#1e2923] border-white/20 text-white font-sketch">
      <span class="text-[1.6cqw] block">1️⃣</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Prepare State</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Initialize |0⟩ qubit</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-[#1e2923] text-yellow-200 border border-white/20 font-sketch">|0⟩</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">➔</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-[#1e2923] border-white/20 text-white font-sketch">
      <span class="text-[1.6cqw] block">2️⃣</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Hadamard Gate</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Create superposition</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-[#1e2923] text-yellow-200 border border-white/20 font-sketch">H|0⟩</span>
    </div>
    </div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-[#1e2923] border-white/20 text-white font-sketch">
      <span class="text-[1.6cqw] block">1️⃣</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Prepare State</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Initialize |0⟩ qubit</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-[#1e2923] text-yellow-200 border border-white/20 font-sketch">|0⟩</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">➔</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-[#1e2923] border-white/20 text-white font-sketch">
      <span class="text-[1.6cqw] block">2️⃣</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Hadamard Gate</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Create superposition</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-[#1e2923] text-yellow-200 border border-white/20 font-sketch">H|0⟩</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">➔</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-[#1e2923] border-white/20 text-white font-sketch">
      <span class="text-[1.6cqw] block">3️⃣</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Measurement</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Collapse probability</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-[#1e2923] text-emerald-400 border border-white/20 font-sketch">MEASURE</span>
    </div>
    </div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-[#1e2923] border-dashed border-white/20 text-white font-sketch">
      <div>
        <span class="text-[1.5cqw] block">⚛️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Superposition</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">A qubit can exist in a linear combination of |0⟩ and |1⟩ states simultaneously until measured.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">[✓] PROVEN</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-[#1e2923] border-dashed border-white/20 text-white font-sketch">
      <div>
        <span class="text-[1.5cqw] block">🔗</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Entanglement</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Two qubits become linked — the state of one instantly determines the state of the other.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">[✓] PROVEN</span>
    </div>
    </div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-[#1e2923] border-dashed border-white/20 text-white font-sketch">
      <div>
        <span class="text-[1.5cqw] block">⚛️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Superposition</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">A qubit can exist in a linear combination of |0⟩ and |1⟩ states simultaneously until measured.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">[✓] PROVEN</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-[#1e2923] border-dashed border-white/20 text-white font-sketch">
      <div>
        <span class="text-[1.5cqw] block">🔗</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Entanglement</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Two qubits become linked — the state of one instantly determines the state of the other.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">[✓] PROVEN</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-[#1e2923] border-dashed border-white/20 text-white font-sketch">
      <div>
        <span class="text-[1.5cqw] block">🌀</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Interference</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Amplifying constructive paths to find correct solutions while canceling wrong ones.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">[✓] PROVEN</span>
    </div>
    </div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-[#1e2923] border-dashed border-white/20 text-white font-sketch">
      <div>
        <span class="text-[1.5cqw] block">⚛️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Superposition</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">A qubit can exist in a linear combination of |0⟩ and |1⟩ states simultaneously until measured.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">[✓] PROVEN</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-[#1e2923] border-dashed border-white/20 text-white font-sketch">
      <div>
        <span class="text-[1.5cqw] block">🔗</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Entanglement</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Two qubits become linked — the state of one instantly determines the state of the other.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">[✓] PROVEN</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-[#1e2923] border-dashed border-white/20 text-white font-sketch">
      <div>
        <span class="text-[1.5cqw] block">🌀</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Interference</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Amplifying constructive paths to find correct solutions while canceling wrong ones.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">[✓] PROVEN</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-[#1e2923] border-dashed border-white/20 text-white font-sketch">
      <div>
        <span class="text-[1.5cqw] block">📐</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Bloch Sphere</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Geometric representation of qubit state — any point on the sphere is a valid superposition.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-200">|Ψ⟩</span>
    </div>
    </div>`
      }
    },
    scene2: {
      title: "Execution & Engineering Handoff",
      subtitle: "From chalkboard theory to quantum circuit implementation",
      low: {
        beat1: {
          visualHtml: `<div class="border-[0.2cqw] border-dashed border-white/30 p-[2cqw] rounded-xl font-sketch max-w-[30cqw] animate-spring-scale bg-[#1e2923] text-center"><span class="text-[2cqw]">✏️</span><p class="text-[1.2cqw] text-yellow-200 font-bold mt-[0.5cqw]">Draw the circuit</p><p class="text-[0.9cqw] text-slate-400">Theory → gates</p></div>`,
          title: "Sketch the Circuit",
          desc: "Translate first principles into a concrete gate sequence on the blackboard."
        },
        beat2: {
          visualHtml: `<div class="border-[0.2cqw] border-dashed border-white/30 p-[2cqw] rounded-xl font-sketch max-w-[38cqw] animate-match-2 bg-[#1e2923]"><div class="flex items-center justify-center gap-[1.5cqw] text-[1.2cqw]"><span class="text-yellow-200">|0⟩</span><span class="text-white">—</span><span class="px-[0.8cqw] py-[0.3cqw] border border-yellow-300 text-yellow-200 rounded">H</span><span class="text-white">—</span><span class="px-[0.8cqw] py-[0.3cqw] border border-emerald-300 text-emerald-300 rounded">M</span><span class="text-white">—</span><span class="text-emerald-400">result</span></div><p class="text-[0.9cqw] text-slate-400 text-center mt-[1cqw]">H gate → superposition → measure → classical bit</p></div>`,
          title: "Gate Sequence Mapped",
          desc: "Hadamard creates superposition; measurement collapses to classical output.",
          subdesc: "Each gate box on the chalkboard maps to a physical pulse on hardware."
        },
        beat3: {
          visualHtml: `<div class="border-[0.2cqw] border-dashed border-emerald-400/50 p-[2cqw] rounded-xl font-sketch max-w-[40cqw] animate-match-3 bg-[#1e2923]"><div class="text-[1cqw] text-emerald-400 font-mono mb-[0.8cqw]">CIRCUIT READY FOR COMPILER ✓</div><div class="grid grid-cols-3 gap-[1cqw] text-center text-[0.9cqw]"><div class="border border-white/20 rounded p-[0.8cqw]"><span class="text-yellow-200 font-bold block">2</span><span class="text-slate-400">Qubits</span></div><div class="border border-white/20 rounded p-[0.8cqw]"><span class="text-yellow-200 font-bold block">3</span><span class="text-slate-400">Gates</span></div><div class="border border-white/20 rounded p-[0.8cqw]"><span class="text-emerald-400 font-bold block">99%</span><span class="text-slate-400">Fidelity</span></div></div></div>`,
          title: "Circuit Handoff Ready",
          desc: "2 qubits, 3 gates, 99% estimated fidelity — ready for the compiler.",
          subdesc: "Chalkboard diagram exported as OpenQASM for downstream compilation.",
          punchline: "Theory drawn. Circuit born."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-[#1e2923] border-white/20 text-white font-sketch">
      <span class="text-[1.6cqw] block">✏️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Sketch</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Draw on blackboard</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-[#1e2923] text-yellow-200 border border-white/20 font-sketch">CHALK</span>
    </div>
    </div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-[#1e2923] border-white/20 text-white font-sketch">
      <span class="text-[1.6cqw] block">✏️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Sketch</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Draw on blackboard</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-[#1e2923] text-yellow-200 border border-white/20 font-sketch">CHALK</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">➔</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-[#1e2923] border-white/20 text-white font-sketch">
      <span class="text-[1.6cqw] block">🔧</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Map Gates</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">H → CNOT → Measure</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-[#1e2923] text-yellow-200 border border-white/20 font-sketch">GATES</span>
    </div>
    </div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-[#1e2923] border-white/20 text-white font-sketch">
      <span class="text-[1.6cqw] block">✏️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Sketch</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Draw on blackboard</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-[#1e2923] text-yellow-200 border border-white/20 font-sketch">CHALK</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">➔</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-[#1e2923] border-white/20 text-white font-sketch">
      <span class="text-[1.6cqw] block">🔧</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Map Gates</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">H → CNOT → Measure</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-[#1e2923] text-yellow-200 border border-white/20 font-sketch">GATES</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">➔</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-[#1e2923] border-white/20 text-white font-sketch">
      <span class="text-[1.6cqw] block">📤</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">3. Export</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">OpenQASM output</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-[#1e2923] text-emerald-400 border border-white/20 font-sketch">EXPORT</span>
    </div>
    </div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-[#1e2923] border-dashed border-white/20 text-white font-sketch">
      <div>
        <span class="text-[1.5cqw] block">✏️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Chalkboard Sketch</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Hand-drawn circuit diagram with gate labels, qubit lines, and measurement points annotated.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-200">2 qubits</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-[#1e2923] border-dashed border-white/20 text-white font-sketch">
      <div>
        <span class="text-[1.5cqw] block">🔧</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Gate Mapping</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Each chalk gate maps to a physical operation: H → microwave pulse, CNOT → cross-resonance.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-200">3 gates</span>
    </div>
    </div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-[#1e2923] border-dashed border-white/20 text-white font-sketch">
      <div>
        <span class="text-[1.5cqw] block">✏️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Chalkboard Sketch</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Hand-drawn circuit diagram with gate labels, qubit lines, and measurement points annotated.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-200">2 qubits</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-[#1e2923] border-dashed border-white/20 text-white font-sketch">
      <div>
        <span class="text-[1.5cqw] block">🔧</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Gate Mapping</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Each chalk gate maps to a physical operation: H → microwave pulse, CNOT → cross-resonance.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-200">3 gates</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-[#1e2923] border-dashed border-white/20 text-white font-sketch">
      <div>
        <span class="text-[1.5cqw] block">📤</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">OpenQASM Export</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Circuit serialized to OpenQASM 3.0 for ingestion by the quantum compiler pipeline.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">QASM 3.0</span>
    </div>
    </div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-[#1e2923] border-dashed border-white/20 text-white font-sketch">
      <div>
        <span class="text-[1.5cqw] block">✏️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Chalkboard Sketch</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Hand-drawn circuit diagram with gate labels, qubit lines, and measurement points annotated.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-200">2 qubits</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-[#1e2923] border-dashed border-white/20 text-white font-sketch">
      <div>
        <span class="text-[1.5cqw] block">🔧</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Gate Mapping</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Each chalk gate maps to a physical operation: H → microwave pulse, CNOT → cross-resonance.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-200">3 gates</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-[#1e2923] border-dashed border-white/20 text-white font-sketch">
      <div>
        <span class="text-[1.5cqw] block">📤</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">OpenQASM Export</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Circuit serialized to OpenQASM 3.0 for ingestion by the quantum compiler pipeline.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">QASM 3.0</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-[#1e2923] border-dashed border-emerald-400/30 text-white font-sketch">
      <div>
        <span class="text-[1.5cqw] block">📊</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Fidelity Estimate</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Gate error rates from calibration data used to estimate end-to-end circuit fidelity.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">99.1%</span>
    </div>
    </div>`
      }
    }
  },
  7: {
    scene1: {
      title: "Concept & Core Architecture",
      subtitle: "Legacy Codebase Refactoring Boss — the final encounter with technical debt",
      low: {
        beat1: {
          visualHtml: `<div class="border-[0.3cqw] border-red-500 p-[1.5cqw] font-arcade text-red-500 text-center max-w-[25cqw] animate-blink-red bg-black"><div class="text-[2cqw]">⚠️ BOSS ALERT ⚠️</div><div class="text-[1.2cqw] text-white mt-[0.5cqw]">LEGACY REFACTOR</div></div>`,
          title: "Boss Encounter",
          desc: "A monolithic legacy module blocks all progress — HP: 99,999."
        },
        beat2: {
          visualHtml: `<div class="border-[0.3cqw] border-red-500 p-[1.5cqw] font-arcade bg-black max-w-[35cqw] animate-match-2"><div class="text-red-500 text-[1.5cqw] text-center mb-[0.8cqw]">⚠️ LEGACY BOSS ⚠️</div><div class="bg-red-950 rounded h-[1.2cqw] mb-[0.5cqw] overflow-hidden"><div class="bg-red-500 h-full w-[85%] animate-pulse"></div></div><p class="text-[0.9cqw] text-red-400 text-center">HP: 84,999 / 99,999</p><div class="flex justify-center gap-[1cqw] mt-[0.8cqw] text-[1.2cqw]"><span class="text-yellow-400">⚔️ -15,000</span><span class="text-green-400">🛡️ AST Shield</span></div></div>`,
          title: "First Strike Lands",
          desc: "AST analysis shield deflects 15,000 HP — boss weakness identified.",
          subdesc: "Weak point: untyped interfaces in the auth module — target acquired."
        },
        beat3: {
          visualHtml: `<div class="border-[0.3cqw] border-yellow-400 p-[2cqw] font-arcade bg-black max-w-[38cqw] animate-match-3 text-center"><div class="text-yellow-400 text-[1.8cqw] mb-[0.5cqw]">💥 CRITICAL HIT! 💥</div><div class="bg-red-950 rounded h-[1.2cqw] mb-[0.5cqw] overflow-hidden"><div class="bg-red-500 h-full w-[8%] animate-pulse"></div></div><p class="text-[0.9cqw] text-red-400">HP: 7,999 / 99,999</p><div class="flex justify-center gap-[1.5cqw] mt-[1cqw] text-[1.1cqw]"><span class="text-green-400">⚔️ Refactor x3</span><span class="text-blue-400">🧪 Test Suite</span><span class="text-purple-400">📦 Extract Module</span></div></div>`,
          title: "Boss Near Defeat",
          desc: "Combo attack: refactor + test + extract module — boss at 8% HP.",
          subdesc: "Power-ups collected: type safety, test coverage, modular boundaries.",
          punchline: "Git gud. Refactor harder."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-black border-red-500 text-white font-arcade">
      <span class="text-[1.6cqw] block">⚔️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Analyze</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Scan legacy patterns</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-black text-red-400 border border-red-600 font-arcade">SCAN</span>
    </div>
    </div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-black border-red-500 text-white font-arcade">
      <span class="text-[1.6cqw] block">⚔️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Analyze</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Scan legacy patterns</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-black text-red-400 border border-red-600 font-arcade">SCAN</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">▶</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-black border-red-500 text-white font-arcade">
      <span class="text-[1.6cqw] block">🔥</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Refactor</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Apply AST transforms</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-red-950 text-red-400 border border-red-700 font-arcade">HIT -15k</span>
    </div>
    </div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-black border-red-500 text-white font-arcade">
      <span class="text-[1.6cqw] block">⚔️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Analyze</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Scan legacy patterns</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-black text-red-400 border border-red-600 font-arcade">SCAN</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">▶</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-black border-red-500 text-white font-arcade">
      <span class="text-[1.6cqw] block">🔥</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Refactor</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Apply AST transforms</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-red-950 text-red-400 border border-red-700 font-arcade">HIT -15k</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">▶</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-black border-red-500 text-white font-arcade">
      <span class="text-[1.6cqw] block">💥</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">3. Finish</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Extract + test + ship</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-yellow-400 text-black border border-yellow-500 font-arcade">KO!</span>
    </div>
    </div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-black border-red-600 text-white font-arcade">
      <div>
        <span class="text-[1.5cqw] block">👾</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Boss Profile</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Legacy monolith: 99,999 LOC, 847 untyped interfaces, 0 test coverage in core auth module.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-400">HP: 99,999</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-black border-red-600 text-white font-arcade">
      <div>
        <span class="text-[1.5cqw] block">⚔️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">AST Refactor Sword</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Automated transforms: extract interface, add types, split god-class into modules.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-400">-15,000 HP</span>
    </div>
    </div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-black border-red-600 text-white font-arcade">
      <div>
        <span class="text-[1.5cqw] block">👾</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Boss Profile</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Legacy monolith: 99,999 LOC, 847 untyped interfaces, 0 test coverage in core auth module.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-400">HP: 99,999</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-black border-red-600 text-white font-arcade">
      <div>
        <span class="text-[1.5cqw] block">⚔️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">AST Refactor Sword</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Automated transforms: extract interface, add types, split god-class into modules.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-400">-15,000 HP</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-black border-green-600 text-white font-arcade">
      <div>
        <span class="text-[1.5cqw] block">🛡️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Test Shield</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Regression test suite blocks boss counterattacks — 142 tests guard every refactor step.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-green-400">142 PASS</span>
    </div>
    </div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-black border-red-600 text-white font-arcade">
      <div>
        <span class="text-[1.5cqw] block">👾</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Boss Profile</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Legacy monolith: 99,999 LOC, 847 untyped interfaces, 0 test coverage in core auth module.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-400">HP: 99,999</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-black border-red-600 text-white font-arcade">
      <div>
        <span class="text-[1.5cqw] block">⚔️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">AST Refactor Sword</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Automated transforms: extract interface, add types, split god-class into modules.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-400">-15,000 HP</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-black border-green-600 text-white font-arcade">
      <div>
        <span class="text-[1.5cqw] block">🛡️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Test Shield</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Regression test suite blocks boss counterattacks — 142 tests guard every refactor step.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-green-400">142 PASS</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-yellow-400 border-yellow-500 text-black font-arcade">
      <div>
        <span class="text-[1.5cqw] block">🏆</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Victory Loot</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Modular codebase, full type coverage, 92% test coverage — technical debt defeated.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-400">BOSS DEFEATED</span>
    </div>
    </div>`
      }
    },
    scene2: {
      title: "Execution & Engineering Handoff",
      subtitle: "Post-boss victory — refactoring deliverables and production handoff",
      low: {
        beat1: {
          visualHtml: `<div class="font-arcade text-center animate-spring-scale"><div class="text-[3cqw] text-yellow-400">🏆</div><p class="text-[1.5cqw] text-green-400 mt-[0.5cqw]">VICTORY!</p><p class="text-[1cqw] text-white">BOSS DEFEATED</p></div>`,
          title: "Boss Defeated",
          desc: "Legacy monolith refactored — victory screen displays."
        },
        beat2: {
          visualHtml: `<div class="border-[0.3cqw] border-green-500 p-[1.5cqw] font-arcade bg-black max-w-[38cqw] animate-match-2"><div class="text-green-400 text-[1.3cqw] text-center mb-[0.8cqw]">📊 SCORE REPORT</div><div class="grid grid-cols-3 gap-[1cqw] text-center text-[1cqw]"><div><span class="text-yellow-400 font-bold block">-847</span><span class="text-slate-400 text-[0.8cqw]">Files changed</span></div><div><span class="text-green-400 font-bold block">92%</span><span class="text-slate-400 text-[0.8cqw]">Coverage</span></div><div><span class="text-blue-400 font-bold block">0</span><span class="text-slate-400 text-[0.8cqw]">Regressions</span></div></div></div>`,
          title: "Score Report",
          desc: "847 files refactored, 92% coverage achieved, zero regressions.",
          subdesc: "High score saved — team leaderboard updated."
        },
        beat3: {
          visualHtml: `<div class="border-[0.3cqw] border-yellow-400 p-[2cqw] font-arcade bg-black max-w-[40cqw] animate-match-3 text-center"><div class="text-yellow-400 text-[1.5cqw] mb-[0.8cqw]">🎮 CONTINUE?</div><div class="space-y-[0.5cqw] text-[1cqw] text-left"><p class="text-green-400">✓ PR merged to main</p><p class="text-green-400">✓ Deploy pipeline green</p><p class="text-green-400">✓ On-call runbook updated</p><p class="text-green-400">✓ Next boss queued: PaymentModule</p></div><p class="text-[1.2cqw] text-yellow-400 mt-[1cqw]">INSERT COIN TO CONTINUE →</p></div>`,
          title: "Production Handoff",
          desc: "PR merged, deploy green, runbook updated — next boss already queued.",
          subdesc: "PaymentModule identified as next refactoring target.",
          punchline: "Boss down. Next level loads."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-black border-green-500 text-white font-arcade">
      <span class="text-[1.6cqw] block">🏆</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Victory</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Boss HP = 0</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-yellow-400 text-black border border-yellow-500 font-arcade">KO!</span>
    </div>
    </div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-black border-green-500 text-white font-arcade">
      <span class="text-[1.6cqw] block">🏆</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Victory</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Boss HP = 0</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-yellow-400 text-black border border-yellow-500 font-arcade">KO!</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">▶</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-black border-green-500 text-white font-arcade">
      <span class="text-[1.6cqw] block">📊</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Score</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Metrics + coverage report</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-green-950 text-green-400 border border-green-700 font-arcade">92%</span>
    </div>
    </div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-black border-green-500 text-white font-arcade">
      <span class="text-[1.6cqw] block">🏆</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Victory</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Boss HP = 0</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-yellow-400 text-black border border-yellow-500 font-arcade">KO!</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">▶</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-black border-green-500 text-white font-arcade">
      <span class="text-[1.6cqw] block">📊</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Score</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Metrics + coverage report</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-green-950 text-green-400 border border-green-700 font-arcade">92%</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">▶</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-black border-green-500 text-white font-arcade">
      <span class="text-[1.6cqw] block">🚀</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">3. Deploy</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Merge + ship to prod</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-black text-yellow-400 border border-yellow-600 font-arcade">SHIPPED</span>
    </div>
    </div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-black border-green-600 text-white font-arcade">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Refactor PR</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">847 files changed, full diff review completed, semantic correctness verified by 2 reviewers.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-green-400">MERGED</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-black border-green-600 text-white font-arcade">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Test Coverage</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Coverage rose from 34% to 92% — all 142 regression tests pass on CI pipeline.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-green-400">92%</span>
    </div>
    </div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-black border-green-600 text-white font-arcade">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Refactor PR</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">847 files changed, full diff review completed, semantic correctness verified by 2 reviewers.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-green-400">MERGED</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-black border-green-600 text-white font-arcade">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Test Coverage</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Coverage rose from 34% to 92% — all 142 regression tests pass on CI pipeline.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-green-400">92%</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-black border-yellow-600 text-white font-arcade">
      <div>
        <span class="text-[1.5cqw] block">🚀</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Deploy Status</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Canary deployment successful — error rate unchanged, latency improved 12%.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-400">LIVE</span>
    </div>
    </div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-black border-green-600 text-white font-arcade">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Refactor PR</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">847 files changed, full diff review completed, semantic correctness verified by 2 reviewers.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-green-400">MERGED</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-black border-green-600 text-white font-arcade">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Test Coverage</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Coverage rose from 34% to 92% — all 142 regression tests pass on CI pipeline.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-green-400">92%</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-black border-yellow-600 text-white font-arcade">
      <div>
        <span class="text-[1.5cqw] block">🚀</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Deploy Status</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Canary deployment successful — error rate unchanged, latency improved 12%.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-400">LIVE</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-red-950 border-red-600 text-white font-arcade">
      <div>
        <span class="text-[1.5cqw] block">👾</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Next Boss</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">PaymentModule queued: 45k LOC, circular dependencies, 12% coverage — difficulty: HARD.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-400">QUEUED</span>
    </div>
    </div>`
      }
    }
  },
  8: {
    scene1: {
      title: "Concept & Core Architecture",
      subtitle: "The Philosophy of Clean Code — why clarity is the ultimate engineering virtue",
      low: {
        beat1: {
          visualHtml: `<div class="text-center max-w-[45cqw] animate-spotlight"><span class="text-[4cqw] text-teal-400 block font-serif">"</span><p class="text-[2cqw] italic font-serif text-white leading-snug">"Clean code always looks like it was written by someone who cares."</p><span class="text-[1.2cqw] text-slate-400 block mt-[1cqw]">— Michael Feathers</span></div>`,
          title: "The Opening Quote",
          desc: "Clean code is not about perfection — it is about care, clarity, and intent."
        },
        beat2: {
          visualHtml: `<div class="text-center max-w-[48cqw] animate-match-2"><span class="text-[3.5cqw] text-teal-400/60 block font-serif">"</span><p class="text-[1.8cqw] italic font-serif text-white/90 leading-snug">"Clean code always looks like it was written by someone who cares."</p><span class="text-[1.1cqw] text-slate-400 block mt-[0.8cqw]">— Michael Feathers</span><div class="mt-[1.5cqw] w-[20cqw] h-[0.15cqw] bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto"></div><p class="text-[1.3cqw] text-teal-300/80 italic font-serif mt-[1cqw]">"Any fool can write code that a computer can understand."</p></div>`,
          title: "The Deeper Truth",
          desc: "Good programmers write code that humans can understand.",
          subdesc: "Martin Fowler extends: clarity is a moral obligation to your future teammates."
        },
        beat3: {
          visualHtml: `<div class="relative text-center max-w-[50cqw] animate-spotlight"><div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,148,136,0.15),transparent_70%)] rounded-full"></div><div class="relative"><span class="text-[3cqw] text-teal-400 block font-serif">"</span><p class="text-[1.6cqw] italic font-serif text-white leading-snug">"Clean code always looks like it was written by someone who cares."</p><span class="text-[1cqw] text-slate-400 block mt-[0.6cqw]">— Michael Feathers</span><div class="mt-[1.5cqw] space-y-[0.6cqw]"><p class="text-[1.2cqw] text-teal-300/70 italic font-serif">"Any fool can write code a computer understands."</p><p class="text-[1.2cqw] text-teal-300/70 italic font-serif">"Good programmers write code humans understand."</p><p class="text-[1.2cqw] text-teal-300/70 italic font-serif">"Leave the campground cleaner than you found it."</p></div><span class="text-[3cqw] text-teal-400 block font-serif mt-[0.5cqw]">"</span></div></div>`,
          title: "Three Principles of Clean Code",
          desc: "Care. Clarity. Cleanup. The trinity of maintainable software.",
          subdesc: "Each principle builds on the last — forming a philosophy, not just a style guide.",
          punchline: "Code is read far more than it is written."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-[#08080a] border-teal-800/50 text-white font-serif">
      <span class="text-[1.6cqw] block">✨</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Care</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Write with intention</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-teal-950 text-teal-300 border border-teal-800 font-serif italic">FEATHERS</span>
    </div>
    </div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-[#08080a] border-teal-800/50 text-white font-serif">
      <span class="text-[1.6cqw] block">✨</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Care</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Write with intention</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-teal-950 text-teal-300 border border-teal-800 font-serif italic">FEATHERS</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">·</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-[#08080a] border-teal-800/50 text-white font-serif">
      <span class="text-[1.6cqw] block">📖</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Clarity</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Human-readable first</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-teal-950 text-teal-300 border border-teal-800 font-serif italic">FOWLER</span>
    </div>
    </div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-[#08080a] border-teal-800/50 text-white font-serif">
      <span class="text-[1.6cqw] block">✨</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Care</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Write with intention</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-teal-950 text-teal-300 border border-teal-800 font-serif italic">FEATHERS</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">·</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-[#08080a] border-teal-800/50 text-white font-serif">
      <span class="text-[1.6cqw] block">📖</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Clarity</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Human-readable first</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-teal-950 text-teal-300 border border-teal-800 font-serif italic">FOWLER</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">·</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-[#08080a] border-teal-800/50 text-white font-serif">
      <span class="text-[1.6cqw] block">🏕️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">3. Cleanup</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Leave it better</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-teal-950 text-teal-300 border border-teal-800 font-serif italic">BECK</span>
    </div>
    </div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-[#08080a] border-teal-800/40 text-white font-serif">
      <div>
        <span class="text-[1.5cqw] block">✨</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Principle of Care</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Feathers: clean code looks written by someone who cares — naming, structure, and consistency reflect respect.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-400">Feathers</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-[#08080a] border-teal-800/40 text-white font-serif">
      <div>
        <span class="text-[1.5cqw] block">📖</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Principle of Clarity</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Fowler: any fool can write code a computer understands — good programmers write for humans first.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-400">Fowler</span>
    </div>
    </div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-[#08080a] border-teal-800/40 text-white font-serif">
      <div>
        <span class="text-[1.5cqw] block">✨</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Principle of Care</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Feathers: clean code looks written by someone who cares — naming, structure, and consistency reflect respect.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-400">Feathers</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-[#08080a] border-teal-800/40 text-white font-serif">
      <div>
        <span class="text-[1.5cqw] block">📖</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Principle of Clarity</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Fowler: any fool can write code a computer understands — good programmers write for humans first.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-400">Fowler</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-[#08080a] border-teal-800/40 text-white font-serif">
      <div>
        <span class="text-[1.5cqw] block">🏕️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Boy Scout Rule</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Beck: always leave the campground cleaner than you found it — incremental improvement over time.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-400">Beck</span>
    </div>
    </div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-[#08080a] border-teal-800/40 text-white font-serif">
      <div>
        <span class="text-[1.5cqw] block">✨</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Principle of Care</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Feathers: clean code looks written by someone who cares — naming, structure, and consistency reflect respect.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-400">Feathers</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-[#08080a] border-teal-800/40 text-white font-serif">
      <div>
        <span class="text-[1.5cqw] block">📖</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Principle of Clarity</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Fowler: any fool can write code a computer understands — good programmers write for humans first.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-400">Fowler</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-[#08080a] border-teal-800/40 text-white font-serif">
      <div>
        <span class="text-[1.5cqw] block">🏕️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Boy Scout Rule</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Beck: always leave the campground cleaner than you found it — incremental improvement over time.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-400">Beck</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-[#0d1117] border-slate-700/40 text-slate-300 font-serif">
      <div>
        <span class="text-[1.5cqw] block">⚖️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">The Tradeoff</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Clean code is not dogma — it balances readability, performance, and delivery speed contextually.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-400">Pragmatic</span>
    </div>
    </div>`
      }
    },
    scene2: {
      title: "Execution & Engineering Handoff",
      subtitle: "Clean code in practice — from philosophy to daily engineering rituals",
      low: {
        beat1: {
          visualHtml: `<div class="text-center max-w-[40cqw] animate-spotlight"><p class="text-[1.8cqw] italic font-serif text-white">"How do we practice this daily?"</p><div class="w-[15cqw] h-[0.15cqw] bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto mt-[1cqw]"></div></div>`,
          title: "Philosophy to Practice",
          desc: "Clean code philosophy must translate into daily engineering rituals."
        },
        beat2: {
          visualHtml: `<div class="grid grid-cols-3 gap-[1.5cqw] max-w-[42cqw] animate-match-2 text-center"><div class="border border-teal-800/40 rounded-xl p-[1.2cqw] bg-[#08080a]"><span class="text-[1.6cqw] text-teal-400">🔍</span><p class="text-[1cqw] text-white font-serif mt-[0.4cqw]">Review</p><p class="text-[0.8cqw] text-slate-400">Every PR</p></div><div class="border border-teal-800/40 rounded-xl p-[1.2cqw] bg-[#08080a]"><span class="text-[1.6cqw] text-teal-400">🧪</span><p class="text-[1cqw] text-white font-serif mt-[0.4cqw]">Test</p><p class="text-[0.8cqw] text-slate-400">Before merge</p></div><div class="border border-teal-800/40 rounded-xl p-[1.2cqw] bg-[#08080a]"><span class="text-[1.6cqw] text-teal-400">♻️</span><p class="text-[1cqw] text-white font-serif mt-[0.4cqw]">Refactor</p><p class="text-[0.8cqw] text-slate-400">Boy Scout rule</p></div></div>`,
          title: "Three Daily Rituals",
          desc: "Review every PR, test before merge, refactor one thing each sprint.",
          subdesc: "Small consistent habits compound into a culture of clean code."
        },
        beat3: {
          visualHtml: `<div class="relative text-center max-w-[48cqw] animate-spotlight"><div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,148,136,0.2),transparent_70%)]"></div><div class="relative border border-teal-700/30 rounded-2xl p-[2.5cqw] bg-[#08080a]/80"><span class="text-[2.5cqw] text-teal-400 font-serif">"</span><p class="text-[1.8cqw] italic font-serif text-white leading-snug">"Leave the campground cleaner than you found it."</p><span class="text-[1.1cqw] text-slate-400 block mt-[0.8cqw]">— Ward Cunningham / Robert C. Martin</span><div class="mt-[1.5cqw] flex justify-center gap-[2cqw] text-[0.9cqw] text-teal-400/70 font-mono"><span>PRs reviewed: 847</span><span>Tests added: 142</span><span>Debt reduced: 23%</span></div></div></div>`,
          title: "The Campground Is Cleaner",
          desc: "847 PRs reviewed, 142 tests added, 23% tech debt reduced this quarter.",
          subdesc: "Metrics prove the philosophy works — not just in theory, but in production.",
          punchline: "Care compounds. Clarity scales."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-[#08080a] border-teal-800/50 text-white font-serif">
      <span class="text-[1.6cqw] block">🔍</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Code Review</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Every PR, every time</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-teal-950 text-teal-300 border border-teal-800 font-serif italic">REVIEW</span>
    </div>
    </div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-[#08080a] border-teal-800/50 text-white font-serif">
      <span class="text-[1.6cqw] block">🔍</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Code Review</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Every PR, every time</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-teal-950 text-teal-300 border border-teal-800 font-serif italic">REVIEW</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">·</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-[#08080a] border-teal-800/50 text-white font-serif">
      <span class="text-[1.6cqw] block">🧪</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Test Gate</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">No merge without tests</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-teal-950 text-teal-300 border border-teal-800 font-serif italic">TEST</span>
    </div>
    </div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-[#08080a] border-teal-800/50 text-white font-serif">
      <span class="text-[1.6cqw] block">🔍</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">1. Code Review</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Every PR, every time</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-teal-950 text-teal-300 border border-teal-800 font-serif italic">REVIEW</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">·</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-[#08080a] border-teal-800/50 text-white font-serif">
      <span class="text-[1.6cqw] block">🧪</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">2. Test Gate</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">No merge without tests</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-teal-950 text-teal-300 border border-teal-800 font-serif italic">TEST</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">·</div><div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-[#08080a] border-teal-800/50 text-white font-serif">
      <span class="text-[1.6cqw] block">♻️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">3. Refactor</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Boy Scout each sprint</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-teal-900 text-teal-200 border border-teal-700 font-serif italic">CLEAN</span>
    </div>
    </div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-[#08080a] border-teal-800/40 text-white font-serif">
      <div>
        <span class="text-[1.5cqw] block">🔍</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Review Culture</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Every PR reviewed within 4 hours — readability, naming, and structure checked against team standards.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-400">847 PRs</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-[#08080a] border-teal-800/40 text-white font-serif">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Test Discipline</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">No merge without test coverage for new logic — regression suite runs on every commit.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-400">142 added</span>
    </div>
    </div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-[#08080a] border-teal-800/40 text-white font-serif">
      <div>
        <span class="text-[1.5cqw] block">🔍</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Review Culture</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Every PR reviewed within 4 hours — readability, naming, and structure checked against team standards.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-400">847 PRs</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-[#08080a] border-teal-800/40 text-white font-serif">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Test Discipline</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">No merge without test coverage for new logic — regression suite runs on every commit.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-400">142 added</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-[#08080a] border-teal-800/40 text-white font-serif">
      <div>
        <span class="text-[1.5cqw] block">♻️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Boy Scout Sprints</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Each sprint includes one cleanup task — rename, extract, or delete dead code proactively.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">-23% debt</span>
    </div>
    </div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-[#08080a] border-teal-800/40 text-white font-serif">
      <div>
        <span class="text-[1.5cqw] block">🔍</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Review Culture</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Every PR reviewed within 4 hours — readability, naming, and structure checked against team standards.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-400">847 PRs</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-[#08080a] border-teal-800/40 text-white font-serif">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Test Discipline</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">No merge without test coverage for new logic — regression suite runs on every commit.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-400">142 added</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-[#08080a] border-teal-800/40 text-white font-serif">
      <div>
        <span class="text-[1.5cqw] block">♻️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Boy Scout Sprints</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Each sprint includes one cleanup task — rename, extract, or delete dead code proactively.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">-23% debt</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-[#0d1117] border-slate-700/40 text-slate-300 font-serif">
      <div>
        <span class="text-[1.5cqw] block">📊</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Clean Metrics</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Quarterly dashboard: cyclomatic complexity trend, coverage delta, and code review turnaround time.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-400">Q2 2026</span>
    </div>
    </div>`
      }
    }
  }
};