    export const stylesContentB = {
  9: {
    scene1: {
      title: "Pipeline Signal Topology",
      subtitle: "How source commits become deployable artifacts through gated compilation stages",
      low: {
        beat1: {
          visualHtml: `<div class="flex items-center gap-[1.2cqw] animate-match-1"><div class="w-[3.5cqw] h-[3.5cqw] rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center animate-pipeline-pulse"><span class="w-[1cqw] h-[1cqw] rounded-full bg-cyan-400"></span></div><span class="font-mono text-[2.2cqw] text-cyan-400">git push</span></div>`,
          title: "Signal Enters the Pipeline",
          desc: "Every commit emits a traceable packet that must pass through deterministic build gates."
        },
        beat2: {
          visualHtml: `<div class="flex items-center gap-[1cqw] animate-match-1"><div class="w-[3cqw] h-[3cqw] rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center animate-pipeline-pulse"><span class="w-[0.8cqw] h-[0.8cqw] rounded-full bg-cyan-400"></span></div><div class="h-[0.2cqw] w-[5cqw] bg-gradient-to-r from-cyan-500 to-emerald-400 rounded"></div><div class="w-[3cqw] h-[3cqw] rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center animate-pipeline-pulse"><span class="w-[0.8cqw] h-[0.8cqw] rounded-full bg-emerald-400"></span></div><span class="font-mono text-[1.5cqw] text-slate-300">compile → test</span></div>`,
          title: "Signal Enters the Pipeline",
          desc: "Every commit emits a traceable packet that must pass through deterministic build gates.",
          subdesc: "Each stage emits status telemetry — compile logs, test coverage, and artifact checksums."
        },
        beat3: {
          visualHtml: `<div class="flex items-center gap-[0.8cqw] animate-match-1 font-mono text-[1cqw]"><div class="px-[0.8cqw] py-[0.3cqw] rounded bg-cyan-950 text-cyan-400 border border-cyan-700">SRC</div><div class="h-[0.15cqw] w-[3cqw] bg-cyan-500"></div><div class="px-[0.8cqw] py-[0.3cqw] rounded bg-cyan-900 text-cyan-300 border border-cyan-600">TST</div><div class="h-[0.15cqw] w-[3cqw] bg-emerald-500"></div><div class="px-[0.8cqw] py-[0.3cqw] rounded bg-emerald-950 text-emerald-400 border border-emerald-700">BLD</div><div class="h-[0.15cqw] w-[3cqw] bg-emerald-500"></div><div class="px-[0.8cqw] py-[0.3cqw] rounded bg-emerald-900 text-emerald-300 border border-emerald-600">📦</div></div>`,
          title: "Signal Enters the Pipeline",
          desc: "Every commit emits a traceable packet that must pass through deterministic build gates.",
          subdesc: "Each stage emits status telemetry — compile logs, test coverage, and artifact checksums.",
          punchline: "A healthy pipeline is a continuous signal, not a one-shot script."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-900/85 border-slate-700 text-slate-100">
      <span class="text-[1.6cqw] block">📥</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Source Intake</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Webhook triggers on main push</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-cyan-950 text-cyan-400 border border-cyan-800">SIGNAL_IN</span>
    </div></div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-900/85 border-slate-700 text-slate-100">
      <span class="text-[1.6cqw] block">📥</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Source Intake</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Webhook triggers on main push</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-cyan-950 text-cyan-400 border border-cyan-800">SIGNAL_IN</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-slate-900/85 border-slate-700 text-slate-100">
      <span class="text-[1.6cqw] block">🔧</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Compile & Lint</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">TS build + ESLint gate</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-slate-800 text-cyan-300 border border-slate-700">NODE_02</span>
    </div></div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-900/85 border-slate-700 text-slate-100">
      <span class="text-[1.6cqw] block">📥</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Source Intake</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Webhook triggers on main push</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-cyan-950 text-cyan-400 border border-cyan-800">SIGNAL_IN</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-slate-900/85 border-slate-700 text-slate-100">
      <span class="text-[1.6cqw] block">🔧</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Compile & Lint</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">TS build + ESLint gate</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-slate-800 text-cyan-300 border border-slate-700">NODE_02</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-slate-900/85 border-slate-700 text-slate-100">
      <span class="text-[1.6cqw] block">✅</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Artifact Emit</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Docker image tagged & pushed</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-950 text-emerald-400 border border-emerald-800">DEPLOY_READY</span>
    </div></div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-900/90 border-cyan-800/50 text-slate-100">
      <div>
        <span class="text-[1.5cqw] block">📡</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Trigger Layer</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">GitHub webhook fans out to CI runner pool with commit SHA, branch, and author metadata.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">latency: 42ms</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-900/90 border-cyan-800/50 text-slate-100">
      <div>
        <span class="text-[1.5cqw] block">⚙️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Build Matrix</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Parallel jobs compile frontend, backend, and shared packages with cached node_modules.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">cache hit: 89%</span>
    </div></div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-900/90 border-cyan-800/50 text-slate-100">
      <div>
        <span class="text-[1.5cqw] block">📡</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Trigger Layer</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">GitHub webhook fans out to CI runner pool with commit SHA, branch, and author metadata.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">latency: 42ms</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-900/90 border-cyan-800/50 text-slate-100">
      <div>
        <span class="text-[1.5cqw] block">⚙️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Build Matrix</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Parallel jobs compile frontend, backend, and shared packages with cached node_modules.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">cache hit: 89%</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-slate-900/90 border-emerald-800/50 text-slate-100">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Test Gate</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Unit + integration suites must pass with ≥92% coverage before promotion.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">142 tests PASS</span>
    </div></div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-900/90 border-cyan-800/50 text-slate-100">
      <div>
        <span class="text-[1.5cqw] block">📡</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Trigger Layer</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">GitHub webhook fans out to CI runner pool with commit SHA, branch, and author metadata.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">latency: 42ms</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-900/90 border-cyan-800/50 text-slate-100">
      <div>
        <span class="text-[1.5cqw] block">⚙️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Build Matrix</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Parallel jobs compile frontend, backend, and shared packages with cached node_modules.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">cache hit: 89%</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-slate-900/90 border-emerald-800/50 text-slate-100">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Test Gate</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Unit + integration suites must pass with ≥92% coverage before promotion.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">142 tests PASS</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-slate-900/90 border-emerald-800/50 text-slate-100">
      <div>
        <span class="text-[1.5cqw] block">🚀</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Deploy Channel</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Signed container image promoted to staging registry with semantic version tag.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">v2.4.1-rc1</span>
    </div></div>`
      }
    },
    scene2: {
      title: "Pipeline Execution Handoff",
      subtitle: "Operational runbook for engineers deploying through the CI/CD compilation chain",
      low: {
        beat1: {
          visualHtml: `<div class="font-mono text-[2.4cqw] text-emerald-400 animate-match-1">$ pipeline run</div>`,
          title: "Run the Build Stage",
          desc: "Engineers trigger the pipeline with an explicit stage flag to isolate failures."
        },
        beat2: {
          visualHtml: `<div class="font-mono text-[2cqw] animate-match-1"><span class="text-emerald-400">$ pipeline run</span> <span class="text-cyan-400">--stage build</span></div>`,
          title: "Run the Build Stage",
          desc: "Engineers trigger the pipeline with an explicit stage flag to isolate failures.",
          subdesc: "Stage-scoped runs produce faster feedback loops during hotfix branches."
        },
        beat3: {
          visualHtml: `<div class="font-mono text-[1.7cqw] animate-match-1"><span class="text-emerald-400">$ pipeline run</span> <span class="text-cyan-400">--stage build</span> <span class="text-slate-500">→</span> <span class="text-emerald-300">✓ 4m12s GREEN</span></div>`,
          title: "Run the Build Stage",
          desc: "Engineers trigger the pipeline with an explicit stage flag to isolate failures.",
          subdesc: "Stage-scoped runs produce faster feedback loops during hotfix branches.",
          punchline: "Green pipeline = safe to merge. Red pipeline blocks deploy automatically."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-900/85 border-slate-700 text-slate-100">
      <span class="text-[1.6cqw] block">🔀</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Branch Gate</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">PR must pass required checks</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-red-950 text-red-400 border border-red-800">BLOCKING</span>
    </div></div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-900/85 border-slate-700 text-slate-100">
      <span class="text-[1.6cqw] block">🔀</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Branch Gate</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">PR must pass required checks</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-red-950 text-red-400 border border-red-800">BLOCKING</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-slate-900/85 border-slate-700 text-slate-100">
      <span class="text-[1.6cqw] block">🏗️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Build & Sign</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Reproducible container build</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-cyan-950 text-cyan-400 border border-cyan-800">DETERMINISTIC</span>
    </div></div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-900/85 border-slate-700 text-slate-100">
      <span class="text-[1.6cqw] block">🔀</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Branch Gate</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">PR must pass required checks</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-red-950 text-red-400 border border-red-800">BLOCKING</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-slate-900/85 border-slate-700 text-slate-100">
      <span class="text-[1.6cqw] block">🏗️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Build & Sign</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Reproducible container build</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-cyan-950 text-cyan-400 border border-cyan-800">DETERMINISTIC</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-slate-900/85 border-slate-700 text-slate-100">
      <span class="text-[1.6cqw] block">📤</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Promote</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Push to staging registry</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-950 text-emerald-400 border border-emerald-800">HANDOFF</span>
    </div></div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-900/85 border-slate-700 text-slate-100">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Pre-flight Checklist</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Verify branch protection, required reviewers, and no pending migration conflicts.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">[✓] 6/6 checks</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-900/85 border-slate-700 text-slate-100">
      <div>
        <span class="text-[1.5cqw] block">🔐</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Secrets Injection</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Vault-provided API keys mounted at runtime — never baked into image layers.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">vault://ci/prod</span>
    </div></div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-900/85 border-slate-700 text-slate-100">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Pre-flight Checklist</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Verify branch protection, required reviewers, and no pending migration conflicts.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">[✓] 6/6 checks</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-900/85 border-slate-700 text-slate-100">
      <div>
        <span class="text-[1.5cqw] block">🔐</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Secrets Injection</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Vault-provided API keys mounted at runtime — never baked into image layers.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">vault://ci/prod</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-slate-900/85 border-slate-700 text-slate-100">
      <div>
        <span class="text-[1.5cqw] block">📊</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Observability</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Build metrics exported to Grafana: duration, cache rate, flake count.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">p95: 3m48s</span>
    </div></div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-900/85 border-slate-700 text-slate-100">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Pre-flight Checklist</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Verify branch protection, required reviewers, and no pending migration conflicts.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">[✓] 6/6 checks</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-900/85 border-slate-700 text-slate-100">
      <div>
        <span class="text-[1.5cqw] block">🔐</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Secrets Injection</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Vault-provided API keys mounted at runtime — never baked into image layers.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">vault://ci/prod</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-slate-900/85 border-slate-700 text-slate-100">
      <div>
        <span class="text-[1.5cqw] block">📊</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Observability</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Build metrics exported to Grafana: duration, cache rate, flake count.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">p95: 3m48s</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-slate-900/90 border-emerald-800/50 text-slate-100">
      <div>
        <span class="text-[1.5cqw] block">🎯</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Rollback Path</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Previous artifact tag pinned; one-click revert if staging health check fails.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">RTO: <5min</span>
    </div></div>`
      }
    }
  },
  10: {
    scene1: {
      title: "AST Sieve Architecture",
      subtitle: "How raw syntax trees are scored, filtered, and refined into safe refactors",
      low: {
        beat1: {
          visualHtml: `<div class="w-[12cqw] h-[7cqw] border-2 border-dashed border-blue-300 bg-blue-50 rounded-lg flex items-center justify-center text-[1.8cqw] font-mono text-blue-800 animate-match-1">AST</div>`,
          title: "Raw AST Enters the Funnel",
          desc: "Unstructured syntax trees contain legacy patterns, dead imports, and unsafe casts."
        },
        beat2: {
          visualHtml: `<div class="flex flex-col items-center animate-match-1"><div class="w-[13cqw] py-[0.5cqw] bg-orange-100 border border-orange-300 rounded-t-lg text-center text-[1cqw] font-mono text-orange-700">12,847 nodes</div><div class="w-[9cqw] h-[3.5cqw] bg-blue-100 border-x-2 border-blue-400 flex items-center justify-center text-blue-700 text-[1.2cqw]">▼ sieve</div><div class="w-[6cqw] py-[0.4cqw] bg-emerald-100 border border-emerald-400 rounded-b-lg text-center text-[0.9cqw] font-mono text-emerald-700">142 clean</div></div>`,
          title: "Raw AST Enters the Funnel",
          desc: "Unstructured syntax trees contain legacy patterns, dead imports, and unsafe casts.",
          subdesc: "Scoring meshes rank each node by complexity, risk, and refactor eligibility."
        },
        beat3: {
          visualHtml: `<div class="relative p-[1.2cqw] rounded-xl animate-match-1"><div class="absolute inset-0 opacity-30 bg-[linear-gradient(#1e3a8a15_1px,transparent_1px),linear-gradient(90deg,#1e3a8a15_1px,transparent_1px)] bg-[size:1cqw_1cqw]"></div><div class="relative text-center"><div class="flex justify-center gap-[0.6cqw] text-[0.85cqw] font-mono text-orange-600 mb-[0.4cqw]"><span class="bg-orange-50 px-1 rounded">fn()</span><span class="bg-orange-50 px-1 rounded">var x</span><span class="bg-orange-50 px-1 rounded">any</span></div><div class="text-blue-600 text-[1.4cqw]">▼</div><div class="inline-block mt-[0.3cqw] text-[0.9cqw] font-mono text-emerald-700 bg-emerald-50 px-[1cqw] py-[0.3cqw] rounded border border-emerald-300">const x: string</div></div></div>`,
          title: "Raw AST Enters the Funnel",
          desc: "Unstructured syntax trees contain legacy patterns, dead imports, and unsafe casts.",
          subdesc: "Scoring meshes rank each node by complexity, risk, and refactor eligibility.",
          punchline: "Only high-confidence transforms pass through to the output sieve."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-50 border-blue-200 text-slate-800">
      <span class="text-[1.6cqw] block">🌳</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Parse Tree</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Full AST from TS compiler API</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-blue-100 text-blue-800">INPUT</span>
    </div></div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-50 border-blue-200 text-slate-800">
      <span class="text-[1.6cqw] block">🌳</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Parse Tree</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Full AST from TS compiler API</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-blue-100 text-blue-800">INPUT</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-slate-50 border-blue-200 text-slate-800">
      <span class="text-[1.6cqw] block">🔍</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Score & Filter</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Complexity mesh ranks nodes</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-orange-100 text-orange-700">SIEVE</span>
    </div></div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-50 border-blue-200 text-slate-800">
      <span class="text-[1.6cqw] block">🌳</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Parse Tree</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Full AST from TS compiler API</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-blue-100 text-blue-800">INPUT</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-slate-50 border-blue-200 text-slate-800">
      <span class="text-[1.6cqw] block">🔍</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Score & Filter</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Complexity mesh ranks nodes</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-orange-100 text-orange-700">SIEVE</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-slate-50 border-blue-200 text-slate-800">
      <span class="text-[1.6cqw] block">✨</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Refined Output</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Safe transforms applied</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-100 text-emerald-700">OUTPUT</span>
    </div></div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-50 border-blue-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">📐</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Blueprint Grid</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">AST nodes mapped to scoring matrix: cyclomatic complexity, type safety, import depth.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-blue-700">12,847 nodes</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-orange-50 border-orange-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">🟠</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Orange Mesh L1</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Filter deprecated APIs, implicit any, and unused imports below confidence 0.7.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-orange-600">3,241 filtered</span>
    </div></div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-50 border-blue-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">📐</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Blueprint Grid</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">AST nodes mapped to scoring matrix: cyclomatic complexity, type safety, import depth.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-blue-700">12,847 nodes</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-orange-50 border-orange-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">🟠</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Orange Mesh L1</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Filter deprecated APIs, implicit any, and unused imports below confidence 0.7.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-orange-600">3,241 filtered</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-blue-50 border-blue-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">🔵</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Blue Mesh L2</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Rank remaining candidates by blast radius and test coverage proximity.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-blue-700">891 candidates</span>
    </div></div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-50 border-blue-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">📐</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Blueprint Grid</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">AST nodes mapped to scoring matrix: cyclomatic complexity, type safety, import depth.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-blue-700">12,847 nodes</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-orange-50 border-orange-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">🟠</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Orange Mesh L1</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Filter deprecated APIs, implicit any, and unused imports below confidence 0.7.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-orange-600">3,241 filtered</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-blue-50 border-blue-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">🔵</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Blue Mesh L2</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Rank remaining candidates by blast radius and test coverage proximity.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-blue-700">891 candidates</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-emerald-50 border-emerald-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">🟢</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Green Output</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">142 auto-fixable refactors queued with deterministic diff previews.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-600">142 safe diffs</span>
    </div></div>`
      }
    },
    scene2: {
      title: "Refactor Execution Handoff",
      subtitle: "Engineering workflow for running the AST sieve safely in production codebases",
      low: {
        beat1: {
          visualHtml: `<div class="font-mono text-[2cqw] text-blue-800 animate-match-1">codemod --dry-run</div>`,
          title: "Dry-Run First",
          desc: "Never apply transforms blindly — preview every diff before committing."
        },
        beat2: {
          visualHtml: `<div class="font-mono text-[1.8cqw] animate-match-1"><span class="text-blue-800">codemod --dry-run</span> <span class="text-orange-600">--filter score&gt;0.8</span></div>`,
          title: "Dry-Run First",
          desc: "Never apply transforms blindly — preview every diff before committing.",
          subdesc: "Confidence threshold filters out risky nodes that lack test coverage."
        },
        beat3: {
          visualHtml: `<div class="font-mono text-[1.5cqw] animate-match-1"><span class="text-blue-800">codemod --dry-run</span> <span class="text-orange-600">--filter score&gt;0.8</span> <span class="text-emerald-600">→ 142 diffs OK</span></div>`,
          title: "Dry-Run First",
          desc: "Never apply transforms blindly — preview every diff before committing.",
          subdesc: "Confidence threshold filters out risky nodes that lack test coverage.",
          punchline: "Approved diffs batch into a single PR with rollback metadata."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-50 border-blue-200 text-slate-800">
      <span class="text-[1.6cqw] block">👁️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Preview Diffs</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Review each transform in IDE</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-blue-100 text-blue-800">DRY_RUN</span>
    </div></div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-50 border-blue-200 text-slate-800">
      <span class="text-[1.6cqw] block">👁️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Preview Diffs</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Review each transform in IDE</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-blue-100 text-blue-800">DRY_RUN</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-slate-50 border-blue-200 text-slate-800">
      <span class="text-[1.6cqw] block">🧪</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Run Tests</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">CI validates all 142 changes</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-orange-100 text-orange-700">VERIFY</span>
    </div></div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-50 border-blue-200 text-slate-800">
      <span class="text-[1.6cqw] block">👁️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Preview Diffs</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Review each transform in IDE</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-blue-100 text-blue-800">DRY_RUN</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-slate-50 border-blue-200 text-slate-800">
      <span class="text-[1.6cqw] block">🧪</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Run Tests</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">CI validates all 142 changes</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-orange-100 text-orange-700">VERIFY</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-slate-50 border-blue-200 text-slate-800">
      <span class="text-[1.6cqw] block">🔀</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Merge PR</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Squash with changelog entry</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-100 text-emerald-700">SHIP</span>
    </div></div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-50 border-blue-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">📝</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Diff Review Board</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Each codemod output tagged with file path, line range, and confidence score.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-blue-700">review: 142/142</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-orange-50 border-orange-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">⚠️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Risk Flags</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Nodes touching public API surfaces flagged for manual approval regardless of score.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-orange-600">8 manual</span>
    </div></div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-50 border-blue-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">📝</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Diff Review Board</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Each codemod output tagged with file path, line range, and confidence score.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-blue-700">review: 142/142</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-orange-50 border-orange-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">⚠️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Risk Flags</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Nodes touching public API surfaces flagged for manual approval regardless of score.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-orange-600">8 manual</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-blue-50 border-blue-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">🔗</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Dependency Graph</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Transform order respects import graph — leaf modules refactored first.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-blue-700">topo-sort OK</span>
    </div></div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-50 border-blue-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">📝</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Diff Review Board</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Each codemod output tagged with file path, line range, and confidence score.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-blue-700">review: 142/142</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-orange-50 border-orange-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">⚠️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Risk Flags</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Nodes touching public API surfaces flagged for manual approval regardless of score.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-orange-600">8 manual</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-blue-50 border-blue-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">🔗</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Dependency Graph</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Transform order respects import graph — leaf modules refactored first.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-blue-700">topo-sort OK</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-emerald-50 border-emerald-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">✅</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Merge Gate</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">All tests green + 2 reviewer approvals required before merge to main.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-600">READY</span>
    </div></div>`
      }
    }
  },
  11: {
    scene1: {
      title: "Pairing Board Architecture",
      subtitle: "How humans and AI agents divide labor across a synchronized collaboration workspace",
      low: {
        beat1: {
          visualHtml: `<div class="flex items-center gap-[1.5cqw] animate-match-1"><div class="w-[4cqw] h-[4cqw] rounded-full bg-teal-100 border-2 border-teal-600 flex items-center justify-center text-[1.8cqw]">🧑‍💻</div><div class="w-[4cqw] h-[4cqw] rounded-full bg-indigo-100 border-2 border-indigo-500 flex items-center justify-center text-[1.8cqw]">🤖</div></div>`,
          title: "Two Minds, One Board",
          desc: "Human-AI pair programming divides intent from execution across a shared workspace."
        },
        beat2: {
          visualHtml: `<div class="flex items-start gap-[1.5cqw] animate-match-1"><div class="bg-white border border-slate-200 rounded-xl p-[1cqw] w-[14cqw] shadow-sm"><div class="flex items-center gap-[0.5cqw] mb-[0.5cqw]"><span class="text-[1.2cqw]">🧑‍💻</span><span class="text-[0.9cqw] font-bold text-teal-700">Human</span></div><p class="text-[0.85cqw] text-slate-600">Define intent & review</p></div><div class="text-[1.5cqw] text-slate-400">↔</div><div class="bg-white border border-slate-200 rounded-xl p-[1cqw] w-[14cqw] shadow-sm"><div class="flex items-center gap-[0.5cqw] mb-[0.5cqw]"><span class="text-[1.2cqw]">🤖</span><span class="text-[0.9cqw] font-bold text-indigo-600">Agent</span></div><p class="text-[0.85cqw] text-slate-600">Draft & iterate code</p></div></div>`,
          title: "Two Minds, One Board",
          desc: "Human-AI pair programming divides intent from execution across a shared workspace.",
          subdesc: "Synchronized task cards track who owns what — preventing duplicate or conflicting edits."
        },
        beat3: {
          visualHtml: `<div class="bg-slate-50 border border-slate-200 rounded-xl p-[1.2cqw] w-[32cqw] animate-match-1 shadow-sm"><div class="flex justify-between items-center mb-[0.8cqw]"><span class="text-[0.9cqw] font-bold text-slate-700">Pairing Board</span><span class="text-[0.75cqw] font-mono text-emerald-600 bg-emerald-50 px-[0.5cqw] rounded">SYNCED</span></div><div class="grid grid-cols-2 gap-[0.8cqw]"><div class="bg-teal-50 border border-teal-200 rounded-lg p-[0.6cqw] text-[0.8cqw] text-teal-800">🧑‍💻 Spec API contract</div><div class="bg-indigo-50 border border-indigo-200 rounded-lg p-[0.6cqw] text-[0.8cqw] text-indigo-800">🤖 Implement handler</div></div></div>`,
          title: "Two Minds, One Board",
          desc: "Human-AI pair programming divides intent from execution across a shared workspace.",
          subdesc: "Synchronized task cards track who owns what — preventing duplicate or conflicting edits.",
          punchline: "The board is the contract: every card has an owner, a status, and a sync timestamp."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-white border-slate-200 text-slate-800 shadow-sm">
      <span class="text-[1.6cqw] block">🧑‍💻</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Human Lane</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Define specs & review diffs</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-teal-50 text-teal-700 border border-teal-200">INTENT</span>
    </div></div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-white border-slate-200 text-slate-800 shadow-sm">
      <span class="text-[1.6cqw] block">🧑‍💻</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Human Lane</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Define specs & review diffs</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-teal-50 text-teal-700 border border-teal-200">INTENT</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-white border-slate-200 text-slate-800 shadow-sm">
      <span class="text-[1.6cqw] block">🤖</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Agent Lane</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Draft code & run tests</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-indigo-50 text-indigo-600 border border-indigo-200">EXECUTE</span>
    </div></div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-white border-slate-200 text-slate-800 shadow-sm">
      <span class="text-[1.6cqw] block">🧑‍💻</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Human Lane</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Define specs & review diffs</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-teal-50 text-teal-700 border border-teal-200">INTENT</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-white border-slate-200 text-slate-800 shadow-sm">
      <span class="text-[1.6cqw] block">🤖</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Agent Lane</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Draft code & run tests</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-indigo-50 text-indigo-600 border border-indigo-200">EXECUTE</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-white border-slate-200 text-slate-800 shadow-sm">
      <span class="text-[1.6cqw] block">🔄</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Sync Point</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Merge reviewed changes</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-50 text-emerald-700 border border-emerald-200">HANDOFF</span>
    </div></div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-white border-slate-200 text-slate-800 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Intent Cards</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Human writes acceptance criteria, edge cases, and API contracts before agent starts.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-600">owner: human</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-white border-slate-200 text-slate-800 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">⚡</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Execution Cards</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Agent drafts implementation, runs unit tests, and proposes diffs for review.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-indigo-600">owner: agent</span>
    </div></div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-white border-slate-200 text-slate-800 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Intent Cards</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Human writes acceptance criteria, edge cases, and API contracts before agent starts.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-600">owner: human</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-white border-slate-200 text-slate-800 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">⚡</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Execution Cards</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Agent drafts implementation, runs unit tests, and proposes diffs for review.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-indigo-600">owner: agent</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-white border-slate-200 text-slate-800 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">🔍</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Review Gate</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Human approves, requests changes, or rejects each diff before merge.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-500">2 approvals</span>
    </div></div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-white border-slate-200 text-slate-800 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Intent Cards</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Human writes acceptance criteria, edge cases, and API contracts before agent starts.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-600">owner: human</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-white border-slate-200 text-slate-800 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">⚡</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Execution Cards</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Agent drafts implementation, runs unit tests, and proposes diffs for review.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-indigo-600">owner: agent</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-white border-slate-200 text-slate-800 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">🔍</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Review Gate</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Human approves, requests changes, or rejects each diff before merge.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-500">2 approvals</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-emerald-50 border-emerald-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">📡</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Sync Log</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Timestamped event stream: card moves, diff proposals, test results, merges.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-600">live sync</span>
    </div></div>`
      }
    },
    scene2: {
      title: "Pairing Execution Handoff",
      subtitle: "Step-by-step workflow for running human-AI pair programming sessions in production",
      low: {
        beat1: {
          visualHtml: `<div class="bg-white border border-slate-200 rounded-lg px-[1.2cqw] py-[0.8cqw] text-[1.1cqw] font-mono text-slate-700 animate-match-1">card: implement-auth</div>`,
          title: "Card Lifecycle",
          desc: "Each task card moves through draft → review → merge with explicit ownership."
        },
        beat2: {
          visualHtml: `<div class="flex items-center gap-[1cqw] animate-match-1"><div class="bg-indigo-50 border border-indigo-200 rounded-lg px-[1cqw] py-[0.6cqw] text-[0.95cqw] text-indigo-700">🤖 drafting...</div><div class="text-slate-400">→</div><div class="bg-amber-50 border border-amber-200 rounded-lg px-[1cqw] py-[0.6cqw] text-[0.95cqw] text-amber-700">🧑‍💻 reviewing</div></div>`,
          title: "Card Lifecycle",
          desc: "Each task card moves through draft → review → merge with explicit ownership.",
          subdesc: "Agent drafts while human reviews — no card merges without human approval."
        },
        beat3: {
          visualHtml: `<div class="bg-white border border-emerald-300 rounded-lg px-[1.2cqw] py-[0.8cqw] animate-match-1 shadow-sm"><span class="text-[0.95cqw] font-mono text-emerald-700">✓ card: implement-auth</span> <span class="text-[0.8cqw] text-slate-500">merged · 14 tests pass</span></div>`,
          title: "Card Lifecycle",
          desc: "Each task card moves through draft → review → merge with explicit ownership.",
          subdesc: "Agent drafts while human reviews — no card merges without human approval.",
          punchline: "Merged cards close the loop; failed reviews return to agent lane with feedback."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-white border-slate-200 text-slate-800 shadow-sm">
      <span class="text-[1.6cqw] block">📝</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Create Card</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Human writes spec & criteria</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-slate-100 text-slate-600">TODO</span>
    </div></div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-white border-slate-200 text-slate-800 shadow-sm">
      <span class="text-[1.6cqw] block">📝</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Create Card</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Human writes spec & criteria</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-slate-100 text-slate-600">TODO</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-white border-slate-200 text-slate-800 shadow-sm">
      <span class="text-[1.6cqw] block">⚡</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Agent Drafts</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Code + tests generated</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-indigo-50 text-indigo-600">IN_PROGRESS</span>
    </div></div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-white border-slate-200 text-slate-800 shadow-sm">
      <span class="text-[1.6cqw] block">📝</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Create Card</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Human writes spec & criteria</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-slate-100 text-slate-600">TODO</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-white border-slate-200 text-slate-800 shadow-sm">
      <span class="text-[1.6cqw] block">⚡</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Agent Drafts</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Code + tests generated</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-indigo-50 text-indigo-600">IN_PROGRESS</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-white border-slate-200 text-slate-800 shadow-sm">
      <span class="text-[1.6cqw] block">✅</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Human Merges</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Approved diff committed</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-50 text-emerald-700">DONE</span>
    </div></div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-white border-slate-200 text-slate-800 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">🎯</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Acceptance Criteria</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Each card must list testable conditions before agent execution begins.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-600">required field</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-white border-slate-200 text-slate-800 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Test Harness</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Agent runs existing suite + generates new tests for uncovered paths.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-indigo-600">14 new tests</span>
    </div></div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-white border-slate-200 text-slate-800 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">🎯</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Acceptance Criteria</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Each card must list testable conditions before agent execution begins.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-600">required field</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-white border-slate-200 text-slate-800 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Test Harness</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Agent runs existing suite + generates new tests for uncovered paths.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-indigo-600">14 new tests</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-white border-slate-200 text-slate-800 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">💬</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Feedback Loop</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Rejected diffs include inline comments that agent uses for next iteration.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-500">avg 1.3 rounds</span>
    </div></div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-white border-slate-200 text-slate-800 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">🎯</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Acceptance Criteria</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Each card must list testable conditions before agent execution begins.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-teal-600">required field</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-white border-slate-200 text-slate-800 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Test Harness</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Agent runs existing suite + generates new tests for uncovered paths.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-indigo-600">14 new tests</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-white border-slate-200 text-slate-800 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">💬</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Feedback Loop</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Rejected diffs include inline comments that agent uses for next iteration.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-500">avg 1.3 rounds</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-emerald-50 border-emerald-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">📊</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Velocity Metrics</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Track cards/hour, review time, and merge rate across pairing sessions.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-600">3.2 cards/hr</span>
    </div></div>`
      }
    }
  },
  12: {
    scene1: {
      title: "Mixing Console Architecture",
      subtitle: "How hyperparameter faders shape LLM output quality across different task profiles",
      low: {
        beat1: {
          visualHtml: `<div class="bg-gray-900 border border-gray-700 rounded-lg p-[1.2cqw] w-[10cqw] animate-match-1"><div class="h-[5cqw] w-[0.8cqw] bg-gray-600 rounded-full mx-auto relative"><div class="absolute bottom-[60%] left-1/2 -translate-x-1/2 w-[1.4cqw] h-[0.6cqw] bg-red-500 rounded-sm shadow-lg shadow-red-500/50"></div></div><span class="text-[0.8cqw] font-mono text-gray-400 block text-center mt-[0.5cqw]">temp</span></div>`,
          title: "Parameters on the Console",
          desc: "LLM hyperparameters are continuous signals — temperature, top-p, frequency penalty, context window."
        },
        beat2: {
          visualHtml: `<div class="flex gap-[1.5cqw] animate-match-1"><div class="bg-gray-900 border border-gray-700 rounded-lg p-[1cqw] w-[9cqw]"><div class="h-[4cqw] w-[0.7cqw] bg-gray-600 rounded-full mx-auto relative"><div class="absolute bottom-[70%] left-1/2 -translate-x-1/2 w-[1.2cqw] h-[0.5cqw] bg-red-500 rounded-sm"></div></div><span class="text-[0.75cqw] font-mono text-red-400 block text-center mt-[0.4cqw]">temp 0.7</span></div><div class="bg-gray-900 border border-gray-700 rounded-lg p-[1cqw] w-[9cqw]"><div class="h-[4cqw] w-[0.7cqw] bg-gray-600 rounded-full mx-auto relative"><div class="absolute bottom-[40%] left-1/2 -translate-x-1/2 w-[1.2cqw] h-[0.5cqw] bg-emerald-500 rounded-sm"></div></div><span class="text-[0.75cqw] font-mono text-emerald-400 block text-center mt-[0.4cqw]">top_p 0.9</span></div></div>`,
          title: "Parameters on the Console",
          desc: "LLM hyperparameters are continuous signals — temperature, top-p, frequency penalty, context window.",
          subdesc: "Each fader adjusts model behavior: creativity vs precision, diversity vs focus."
        },
        beat3: {
          visualHtml: `<div class="bg-gray-950 border border-gray-600 rounded-xl p-[1.2cqw] w-[34cqw] animate-match-1"><div class="flex justify-between items-center mb-[0.8cqw]"><span class="text-[0.9cqw] font-mono text-gray-300">MIXER · LLM TUNING</span><span class="flex gap-[0.3cqw]"><span class="w-[0.5cqw] h-[1.5cqw] bg-emerald-500 rounded-sm"></span><span class="w-[0.5cqw] h-[2cqw] bg-emerald-400 rounded-sm"></span><span class="w-[0.5cqw] h-[1.2cqw] bg-yellow-500 rounded-sm"></span><span class="w-[0.5cqw] h-[2.5cqw] bg-red-500 rounded-sm"></span></span></div><div class="grid grid-cols-4 gap-[0.6cqw] text-[0.7cqw] font-mono"><div class="text-red-400">T:0.7</div><div class="text-emerald-400">P:0.9</div><div class="text-yellow-400">freq:0.3</div><div class="text-cyan-400">ctx:8k</div></div></div>`,
          title: "Parameters on the Console",
          desc: "LLM hyperparameters are continuous signals — temperature, top-p, frequency penalty, context window.",
          subdesc: "Each fader adjusts model behavior: creativity vs precision, diversity vs focus.",
          punchline: "Balanced fader positions produce optimal output for the target use case."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-gray-900 border-gray-700 text-gray-100">
      <span class="text-[1.6cqw] block">🌡️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Temperature</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Control output randomness</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-red-950 text-red-400 border border-red-800">0.7</span>
    </div></div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-gray-900 border-gray-700 text-gray-100">
      <span class="text-[1.6cqw] block">🌡️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Temperature</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Control output randomness</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-red-950 text-red-400 border border-red-800">0.7</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-gray-900 border-gray-700 text-gray-100">
      <span class="text-[1.6cqw] block">🎚️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Top-P</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Nucleus sampling threshold</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-950 text-emerald-400 border border-emerald-800">0.9</span>
    </div></div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-gray-900 border-gray-700 text-gray-100">
      <span class="text-[1.6cqw] block">🌡️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Temperature</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Control output randomness</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-red-950 text-red-400 border border-red-800">0.7</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-gray-900 border-gray-700 text-gray-100">
      <span class="text-[1.6cqw] block">🎚️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Top-P</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Nucleus sampling threshold</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-950 text-emerald-400 border border-emerald-800">0.9</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-gray-900 border-gray-700 text-gray-100">
      <span class="text-[1.6cqw] block">📊</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Freq Penalty</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Reduce token repetition</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-yellow-950 text-yellow-400 border border-yellow-800">0.3</span>
    </div></div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-gray-900 border-gray-700 text-gray-100">
      <div>
        <span class="text-[1.5cqw] block">🌡️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Temperature Fader</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Low = deterministic code gen. High = creative brainstorming. Sweet spot: 0.6–0.8 for pair programming.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-400">T = 0.7</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-gray-900 border-gray-700 text-gray-100">
      <div>
        <span class="text-[1.5cqw] block">🎚️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Top-P Knob</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Restricts sampling to top probability mass. 0.9 retains diversity without chaos.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">P = 0.9</span>
    </div></div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-gray-900 border-gray-700 text-gray-100">
      <div>
        <span class="text-[1.5cqw] block">🌡️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Temperature Fader</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Low = deterministic code gen. High = creative brainstorming. Sweet spot: 0.6–0.8 for pair programming.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-400">T = 0.7</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-gray-900 border-gray-700 text-gray-100">
      <div>
        <span class="text-[1.5cqw] block">🎚️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Top-P Knob</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Restricts sampling to top probability mass. 0.9 retains diversity without chaos.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">P = 0.9</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-gray-900 border-gray-700 text-gray-100">
      <div>
        <span class="text-[1.5cqw] block">🔇</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Frequency Penalty</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Penalizes repeated tokens. Critical for long-form outputs to avoid loops.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-400">freq = 0.3</span>
    </div></div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-gray-900 border-gray-700 text-gray-100">
      <div>
        <span class="text-[1.5cqw] block">🌡️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Temperature Fader</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Low = deterministic code gen. High = creative brainstorming. Sweet spot: 0.6–0.8 for pair programming.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-400">T = 0.7</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-gray-900 border-gray-700 text-gray-100">
      <div>
        <span class="text-[1.5cqw] block">🎚️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Top-P Knob</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Restricts sampling to top probability mass. 0.9 retains diversity without chaos.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">P = 0.9</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-gray-900 border-gray-700 text-gray-100">
      <div>
        <span class="text-[1.5cqw] block">🔇</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Frequency Penalty</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Penalizes repeated tokens. Critical for long-form outputs to avoid loops.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-yellow-400">freq = 0.3</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-gray-950 border-cyan-800 text-gray-100">
      <div>
        <span class="text-[1.5cqw] block">📏</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Context Window</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Max tokens in prompt + completion. Larger window = more code context but higher cost.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">ctx = 8192</span>
    </div></div>`
      }
    },
    scene2: {
      title: "Tuning Execution Handoff",
      subtitle: "Engineering workflow for benchmarking, locking, and deploying LLM hyperparameter profiles",
      low: {
        beat1: {
          visualHtml: `<div class="font-mono text-[1.8cqw] text-gray-300 animate-match-1">profile: code-gen</div>`,
          title: "Load a Profile",
          desc: "Pre-tuned parameter sets for common tasks: code-gen, chat, summarization."
        },
        beat2: {
          visualHtml: `<div class="font-mono text-[1.6cqw] animate-match-1"><span class="text-gray-300">profile: code-gen</span> <span class="text-red-400">T=0.3</span> <span class="text-emerald-400">P=0.95</span></div>`,
          title: "Load a Profile",
          desc: "Pre-tuned parameter sets for common tasks: code-gen, chat, summarization.",
          subdesc: "Code-gen profile favors low temperature and high top-p for precise, diverse output."
        },
        beat3: {
          visualHtml: `<div class="font-mono text-[1.4cqw] animate-match-1"><span class="text-gray-300">profile: code-gen</span> <span class="text-red-400">T=0.3</span> <span class="text-emerald-400">P=0.95</span> <span class="text-yellow-400">freq=0.5</span> <span class="text-emerald-300">→ 94% pass rate</span></div>`,
          title: "Load a Profile",
          desc: "Pre-tuned parameter sets for common tasks: code-gen, chat, summarization.",
          subdesc: "Code-gen profile favors low temperature and high top-p for precise, diverse output.",
          punchline: "Profile presets eliminate guesswork — engineers start from proven configurations."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-gray-900 border-gray-700 text-gray-100">
      <span class="text-[1.6cqw] block">📂</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Load Profile</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Select task-specific preset</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-gray-800 text-gray-300 border border-gray-600">PRESET</span>
    </div></div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-gray-900 border-gray-700 text-gray-100">
      <span class="text-[1.6cqw] block">📂</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Load Profile</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Select task-specific preset</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-gray-800 text-gray-300 border border-gray-600">PRESET</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-gray-900 border-gray-700 text-gray-100">
      <span class="text-[1.6cqw] block">🎛️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Fine-Tune</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Adjust faders per benchmark</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-red-950 text-red-400 border border-red-800">TUNE</span>
    </div></div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-gray-900 border-gray-700 text-gray-100">
      <span class="text-[1.6cqw] block">📂</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Load Profile</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Select task-specific preset</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-gray-800 text-gray-300 border border-gray-600">PRESET</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-gray-900 border-gray-700 text-gray-100">
      <span class="text-[1.6cqw] block">🎛️</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Fine-Tune</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Adjust faders per benchmark</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-red-950 text-red-400 border border-red-800">TUNE</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-gray-900 border-gray-700 text-gray-100">
      <span class="text-[1.6cqw] block">💾</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Save Config</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Persist to model registry</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-950 text-emerald-400 border border-emerald-800">STORE</span>
    </div></div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-gray-900 border-gray-700 text-gray-100">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">A/B Benchmark</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Run same prompt across 3 parameter sets; compare pass rate and latency.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-gray-400">n=50 prompts</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-gray-900 border-gray-700 text-gray-100">
      <div>
        <span class="text-[1.5cqw] block">📈</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">LED Meter</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Real-time quality score from automated eval harness during tuning session.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">score: 94%</span>
    </div></div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-gray-900 border-gray-700 text-gray-100">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">A/B Benchmark</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Run same prompt across 3 parameter sets; compare pass rate and latency.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-gray-400">n=50 prompts</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-gray-900 border-gray-700 text-gray-100">
      <div>
        <span class="text-[1.5cqw] block">📈</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">LED Meter</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Real-time quality score from automated eval harness during tuning session.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">score: 94%</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-gray-950 border-cyan-800 text-gray-100">
      <div>
        <span class="text-[1.5cqw] block">🔒</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Lock Faders</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Freeze tuned values and version-tag for reproducible production inference.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">v3.2-tuned</span>
    </div></div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-gray-900 border-gray-700 text-gray-100">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">A/B Benchmark</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Run same prompt across 3 parameter sets; compare pass rate and latency.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-gray-400">n=50 prompts</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-gray-900 border-gray-700 text-gray-100">
      <div>
        <span class="text-[1.5cqw] block">📈</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">LED Meter</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Real-time quality score from automated eval harness during tuning session.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">score: 94%</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-gray-950 border-cyan-800 text-gray-100">
      <div>
        <span class="text-[1.5cqw] block">🔒</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Lock Faders</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Freeze tuned values and version-tag for reproducible production inference.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">v3.2-tuned</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-gray-950 border-emerald-800 text-gray-100">
      <div>
        <span class="text-[1.5cqw] block">🚀</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Deploy Profile</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Push config to inference endpoint; rollback available via registry history.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">deployed</span>
    </div></div>`
      }
    }
  },
  13: {
    scene1: {
      title: "Transit Map Architecture",
      subtitle: "How a distributed request travels through edge, auth, and persistence stations",
      low: {
        beat1: {
          visualHtml: `<div class="flex items-center gap-[1.2cqw] animate-match-1"><div class="w-[3.5cqw] h-[3.5cqw] rounded-full border-[0.35cqw] border-slate-900 bg-white flex items-center justify-center font-bold text-[1.2cqw] text-slate-900">A</div><div class="h-[0.35cqw] w-[8cqw] bg-red-500 rounded"></div><div class="w-[3.5cqw] h-[3.5cqw] rounded-full border-[0.35cqw] border-slate-900 bg-white flex items-center justify-center font-bold text-[1.2cqw] text-slate-900">B</div></div>`,
          title: "Request Boards the Line",
          desc: "Every distributed request follows a mapped route through transit stations."
        },
        beat2: {
          visualHtml: `<div class="relative flex items-center animate-match-1"><div class="h-[0.35cqw] w-[20cqw] bg-blue-500 rounded absolute top-1/2 -translate-y-1/2 left-[15%]"></div><div class="h-[0.35cqw] w-[14cqw] bg-red-500 rounded absolute top-[35%] left-[5%] rotate-12"></div><div class="relative flex gap-[6cqw]"><div class="w-[3.5cqw] h-[3.5cqw] rounded-full border-[0.35cqw] border-slate-900 bg-white flex items-center justify-center font-bold text-[1.1cqw] z-10">A</div><div class="w-[4cqw] h-[4cqw] rounded-full border-[0.4cqw] border-white bg-red-500 flex items-center justify-center font-bold text-[1cqw] text-white z-10 ring-2 ring-slate-900">Tx</div><div class="w-[3.5cqw] h-[3.5cqw] rounded-full border-[0.35cqw] border-slate-900 bg-white flex items-center justify-center font-bold text-[1.1cqw] z-10">C</div></div></div>`,
          title: "Request Boards the Line",
          desc: "Every distributed request follows a mapped route through transit stations.",
          subdesc: "Transfer nodes are convergence points where auth, routing, and data paths intersect."
        },
        beat3: {
          visualHtml: `<div class="bg-white border-2 border-slate-900 rounded-lg p-[1cqw] w-[30cqw] animate-match-1 shadow-md"><div class="text-[0.8cqw] font-bold text-slate-500 uppercase tracking-wider mb-[0.5cqw]">Line Map</div><div class="space-y-[0.4cqw] text-[0.85cqw]"><div class="flex items-center gap-[0.5cqw]"><span class="w-[1.5cqw] h-[0.3cqw] bg-red-500 rounded"></span><span>Red · Edge → Auth</span></div><div class="flex items-center gap-[0.5cqw]"><span class="w-[1.5cqw] h-[0.3cqw] bg-blue-500 rounded"></span><span>Blue · Auth → Service</span></div><div class="flex items-center gap-[0.5cqw]"><span class="w-[1.5cqw] h-[0.3cqw] bg-emerald-500 rounded"></span><span>Green · Service → DB</span></div></div></div>`,
          title: "Request Boards the Line",
          desc: "Every distributed request follows a mapped route through transit stations.",
          subdesc: "Transfer nodes are convergence points where auth, routing, and data paths intersect.",
          punchline: "Three color-coded lines trace the full lifecycle from edge to database commit."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-white border-slate-300 text-slate-900 shadow-sm">
      <span class="text-[1.6cqw] block">🔴</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Edge Gateway</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Request enters the network</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-red-50 text-red-600 border border-red-200">STATION A</span>
    </div></div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-white border-slate-300 text-slate-900 shadow-sm">
      <span class="text-[1.6cqw] block">🔴</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Edge Gateway</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Request enters the network</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-red-50 text-red-600 border border-red-200">STATION A</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-white border-slate-300 text-slate-900 shadow-sm">
      <span class="text-[1.6cqw] block">🔵</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Auth Transfer</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Token validated & routed</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-blue-50 text-blue-600 border border-blue-200">TRANSFER</span>
    </div></div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-white border-slate-300 text-slate-900 shadow-sm">
      <span class="text-[1.6cqw] block">🔴</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Edge Gateway</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Request enters the network</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-red-50 text-red-600 border border-red-200">STATION A</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-white border-slate-300 text-slate-900 shadow-sm">
      <span class="text-[1.6cqw] block">🔵</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Auth Transfer</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Token validated & routed</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-blue-50 text-blue-600 border border-blue-200">TRANSFER</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-white border-slate-300 text-slate-900 shadow-sm">
      <span class="text-[1.6cqw] block">🟢</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">DB Commit</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Transaction persisted</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-50 text-emerald-600 border border-emerald-200">STATION C</span>
    </div></div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-white border-slate-300 text-slate-900 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">🔴</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Red Line · Ingress</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Edge gateway terminates TLS, extracts headers, assigns trace ID, forwards to auth cluster.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-600">p99: 8ms</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-white border-slate-300 text-slate-900 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">🔵</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Blue Line · Auth</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">OAuth token validated, session context built, service route selected from policy engine.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-blue-600">p99: 24ms</span>
    </div></div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-white border-slate-300 text-slate-900 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">🔴</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Red Line · Ingress</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Edge gateway terminates TLS, extracts headers, assigns trace ID, forwards to auth cluster.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-600">p99: 8ms</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-white border-slate-300 text-slate-900 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">🔵</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Blue Line · Auth</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">OAuth token validated, session context built, service route selected from policy engine.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-blue-600">p99: 24ms</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-white border-slate-300 text-slate-900 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">🟢</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Green Line · Persist</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Business logic executes, database transaction committed, event published to queue.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-600">p99: 48ms</span>
    </div></div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-white border-slate-300 text-slate-900 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">🔴</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Red Line · Ingress</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Edge gateway terminates TLS, extracts headers, assigns trace ID, forwards to auth cluster.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-600">p99: 8ms</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-white border-slate-300 text-slate-900 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">🔵</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Blue Line · Auth</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">OAuth token validated, session context built, service route selected from policy engine.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-blue-600">p99: 24ms</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-white border-slate-300 text-slate-900 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">🟢</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Green Line · Persist</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Business logic executes, database transaction committed, event published to queue.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-600">p99: 48ms</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-slate-50 border-slate-300 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">📍</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Transfer Node</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Auth station is the critical junction — 3 lines converge before routing to target service.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-500">3 routes</span>
    </div></div>`
      }
    },
    scene2: {
      title: "Request Tracing Handoff",
      subtitle: "Operational guide for instrumenting and monitoring distributed request lifecycles",
      low: {
        beat1: {
          visualHtml: `<div class="font-mono text-[1.8cqw] text-slate-700 animate-match-1">trace_id: abc-123</div>`,
          title: "Follow the Trace",
          desc: "Every request carries a trace ID that maps to its full station-by-station journey."
        },
        beat2: {
          visualHtml: `<div class="font-mono text-[1.5cqw] animate-match-1"><span class="text-slate-700">trace_id: abc-123</span> <span class="text-red-500">→ edge [8ms]</span></div>`,
          title: "Follow the Trace",
          desc: "Every request carries a trace ID that maps to its full station-by-station journey.",
          subdesc: "Per-station latency reveals bottlenecks — auth transfer is the slowest hop."
        },
        beat3: {
          visualHtml: `<div class="font-mono text-[1.3cqw] animate-match-1"><span class="text-slate-600">abc-123</span> <span class="text-red-500">edge[8ms]</span> <span class="text-blue-500">auth[24ms]</span> <span class="text-emerald-500">db[48ms]</span> <span class="text-slate-400">= 80ms total</span></div>`,
          title: "Follow the Trace",
          desc: "Every request carries a trace ID that maps to its full station-by-station journey.",
          subdesc: "Per-station latency reveals bottlenecks — auth transfer is the slowest hop.",
          punchline: "End-to-end trace completes the lifecycle map with measurable timing data."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-white border-slate-300 text-slate-900 shadow-sm">
      <span class="text-[1.6cqw] block">📡</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Inject Trace</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Assign ID at edge gateway</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-red-50 text-red-600">SPAN_START</span>
    </div></div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-white border-slate-300 text-slate-900 shadow-sm">
      <span class="text-[1.6cqw] block">📡</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Inject Trace</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Assign ID at edge gateway</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-red-50 text-red-600">SPAN_START</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-white border-slate-300 text-slate-900 shadow-sm">
      <span class="text-[1.6cqw] block">🔍</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Hop Analysis</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Measure per-station latency</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-blue-50 text-blue-600">PROFILING</span>
    </div></div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-white border-slate-300 text-slate-900 shadow-sm">
      <span class="text-[1.6cqw] block">📡</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Inject Trace</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Assign ID at edge gateway</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-red-50 text-red-600">SPAN_START</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-white border-slate-300 text-slate-900 shadow-sm">
      <span class="text-[1.6cqw] block">🔍</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Hop Analysis</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Measure per-station latency</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-blue-50 text-blue-600">PROFILING</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-white border-slate-300 text-slate-900 shadow-sm">
      <span class="text-[1.6cqw] block">📊</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">E2E Report</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Aggregate trace timeline</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-50 text-emerald-600">COMPLETE</span>
    </div></div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-white border-slate-300 text-slate-900 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">🏷️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Trace Context</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">W3C traceparent header propagated through every hop — no broken spans.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-600">100% coverage</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-white border-slate-300 text-slate-900 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">⏱️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Latency Budget</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Each station has a p99 budget: edge 10ms, auth 30ms, db 50ms.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-blue-600">budget: 90ms</span>
    </div></div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-white border-slate-300 text-slate-900 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">🏷️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Trace Context</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">W3C traceparent header propagated through every hop — no broken spans.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-600">100% coverage</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-white border-slate-300 text-slate-900 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">⏱️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Latency Budget</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Each station has a p99 budget: edge 10ms, auth 30ms, db 50ms.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-blue-600">budget: 90ms</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-red-50 border-red-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">🚨</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Slow Hop Alert</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Auth transfer exceeding 30ms triggers pager duty and auto-scales auth pods.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-500">threshold: 30ms</span>
    </div></div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-white border-slate-300 text-slate-900 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">🏷️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Trace Context</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">W3C traceparent header propagated through every hop — no broken spans.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-600">100% coverage</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-white border-slate-300 text-slate-900 shadow-sm">
      <div>
        <span class="text-[1.5cqw] block">⏱️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Latency Budget</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Each station has a p99 budget: edge 10ms, auth 30ms, db 50ms.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-blue-600">budget: 90ms</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-red-50 border-red-200 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">🚨</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Slow Hop Alert</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Auth transfer exceeding 30ms triggers pager duty and auto-scales auth pods.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-500">threshold: 30ms</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-slate-50 border-slate-300 text-slate-800">
      <div>
        <span class="text-[1.5cqw] block">🗺️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Route Dashboard</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Live subway map UI showing active requests as moving dots across stations.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-slate-500">live view</span>
    </div></div>`
      }
    }
  },
  14: {
    scene1: {
      title: "Prep Station Architecture",
      subtitle: "How raw text ingredients are cleaned, portioned, and tokenized for LLM consumption",
      low: {
        beat1: {
          visualHtml: `<div class="bg-amber-100 border-2 border-amber-400 rounded-lg p-[1.2cqw] w-[12cqw] text-center animate-match-1"><span class="text-[1.8cqw]">📄</span><p class="text-[0.9cqw] font-bold text-amber-900 mt-[0.3cqw]">Raw Text</p></div>`,
          title: "Raw Ingredients Arrive",
          desc: "Unprocessed text is messy — HTML tags, special characters, inconsistent encoding."
        },
        beat2: {
          visualHtml: `<div class="flex items-center gap-[1.2cqw] animate-match-1"><div class="bg-amber-100 border-2 border-amber-400 rounded-lg p-[0.8cqw] w-[9cqw] text-center"><span class="text-[1.4cqw]">📄</span><p class="text-[0.75cqw] text-amber-900 font-bold">Raw</p></div><div class="text-[1.5cqw] text-orange-500">→</div><div class="bg-orange-50 border-2 border-orange-300 rounded-lg p-[0.8cqw] w-[9cqw] text-center"><span class="text-[1.4cqw]">🔪</span><p class="text-[0.75cqw] text-orange-700 font-bold">Clean</p></div></div>`,
          title: "Raw Ingredients Arrive",
          desc: "Unprocessed text is messy — HTML tags, special characters, inconsistent encoding.",
          subdesc: "The prep station trims, normalizes, and portions text into model-ready chunks."
        },
        beat3: {
          visualHtml: `<div class="bg-amber-50 border-2 border-amber-300 rounded-xl p-[1cqw] w-[32cqw] animate-match-1"><div class="text-[0.8cqw] font-bold text-amber-800 mb-[0.6cqw] uppercase tracking-wider">Prep Station</div><div class="grid grid-cols-3 gap-[0.6cqw]"><div class="bg-white border border-amber-200 rounded p-[0.5cqw] text-center text-[0.75cqw] text-amber-900">📄 Raw</div><div class="bg-white border border-orange-200 rounded p-[0.5cqw] text-center text-[0.75cqw] text-orange-700">🔪 Trim</div><div class="bg-white border border-emerald-200 rounded p-[0.5cqw] text-center text-[0.75cqw] text-emerald-700">🍱 Tokens</div></div></div>`,
          title: "Raw Ingredients Arrive",
          desc: "Unprocessed text is messy — HTML tags, special characters, inconsistent encoding.",
          subdesc: "The prep station trims, normalizes, and portions text into model-ready chunks.",
          punchline: "Clean tokenized output is the plated dish ready for the LLM kitchen."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">📄</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Raw Intake</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">HTML, markdown, plain text</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-100 text-amber-800 border border-amber-300">INGREDIENT</span>
    </div></div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">📄</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Raw Intake</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">HTML, markdown, plain text</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-100 text-amber-800 border border-amber-300">INGREDIENT</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">🔪</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Clean & Trim</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Strip tags, normalize unicode</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-orange-100 text-orange-700 border border-orange-300">PREP</span>
    </div></div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">📄</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Raw Intake</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">HTML, markdown, plain text</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-100 text-amber-800 border border-amber-300">INGREDIENT</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">🔪</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Clean & Trim</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Strip tags, normalize unicode</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-orange-100 text-orange-700 border border-orange-300">PREP</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">🍱</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Tokenize</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Split into model tokens</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-100 text-emerald-700 border border-emerald-300">PLATED</span>
    </div></div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">📄</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Raw Intake Slot</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Accept HTML, Markdown, JSON, and plain text. Detect encoding and strip BOM markers.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-700">utf-8 enforced</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-orange-50 border-orange-200 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">🧹</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Sanitize Station</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Remove script tags, normalize whitespace, collapse repeated newlines, fix mojibake.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-orange-600">99.2% clean</span>
    </div></div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">📄</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Raw Intake Slot</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Accept HTML, Markdown, JSON, and plain text. Detect encoding and strip BOM markers.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-700">utf-8 enforced</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-orange-50 border-orange-200 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">🧹</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Sanitize Station</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Remove script tags, normalize whitespace, collapse repeated newlines, fix mojibake.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-orange-600">99.2% clean</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-orange-50 border-orange-200 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">✂️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Chunk Portioner</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Split into 512-token windows with 64-token overlap for context continuity.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-orange-600">512 tok/window</span>
    </div></div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">📄</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Raw Intake Slot</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Accept HTML, Markdown, JSON, and plain text. Detect encoding and strip BOM markers.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-700">utf-8 enforced</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-orange-50 border-orange-200 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">🧹</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Sanitize Station</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Remove script tags, normalize whitespace, collapse repeated newlines, fix mojibake.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-orange-600">99.2% clean</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-orange-50 border-orange-200 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">✂️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Chunk Portioner</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Split into 512-token windows with 64-token overlap for context continuity.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-orange-600">512 tok/window</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-emerald-50 border-emerald-200 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">🍱</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Token Plating</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">BPE tokenization via tiktoken. Output: integer array ready for model embedding.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-600">cl100k_base</span>
    </div></div>`
      }
    },
    scene2: {
      title: "Tokenization Execution Handoff",
      subtitle: "CLI workflow and quality checks for production text pre-processing pipelines",
      low: {
        beat1: {
          visualHtml: `<div class="font-mono text-[1.6cqw] text-orange-700 animate-match-1">prep --input doc.html</div>`,
          title: "Run the Prep Pipeline",
          desc: "Engineers invoke the prep CLI with input file and processing flags."
        },
        beat2: {
          visualHtml: `<div class="font-mono text-[1.4cqw] animate-match-1"><span class="text-orange-700">prep --input doc.html</span> <span class="text-amber-600">--sanitize</span></div>`,
          title: "Run the Prep Pipeline",
          desc: "Engineers invoke the prep CLI with input file and processing flags.",
          subdesc: "Sanitize flag strips dangerous content; tokenize flag outputs model-ready arrays."
        },
        beat3: {
          visualHtml: `<div class="font-mono text-[1.2cqw] animate-match-1"><span class="text-orange-700">prep --input doc.html</span> <span class="text-amber-600">--sanitize</span> <span class="text-emerald-600">→ 2,048 tokens · 4 chunks</span></div>`,
          title: "Run the Prep Pipeline",
          desc: "Engineers invoke the prep CLI with input file and processing flags.",
          subdesc: "Sanitize flag strips dangerous content; tokenize flag outputs model-ready arrays.",
          punchline: "Pipeline reports token count and chunk count for context window planning."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">📥</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Load Input</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Ingest raw document file</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-100 text-amber-800">STAGE 1</span>
    </div></div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">📥</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Load Input</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Ingest raw document file</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-100 text-amber-800">STAGE 1</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">🧹</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Sanitize</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Clean & normalize text</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-orange-100 text-orange-700">STAGE 2</span>
    </div></div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">📥</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Load Input</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Ingest raw document file</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-100 text-amber-800">STAGE 1</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">🧹</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Sanitize</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Clean & normalize text</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-orange-100 text-orange-700">STAGE 2</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-amber-50 border-amber-300 text-amber-950">
      <span class="text-[1.6cqw] block">🍱</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Tokenize</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Emit token arrays</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-100 text-emerald-700">STAGE 3</span>
    </div></div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Input Validation</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Reject files >10MB, unsupported encodings, or binary formats before processing.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-700">max: 10MB</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-orange-50 border-orange-200 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">🔪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Cleaning Rules</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Configurable regex pipeline: strip HTML, fix entities, collapse whitespace.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-orange-600">12 rules</span>
    </div></div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Input Validation</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Reject files >10MB, unsupported encodings, or binary formats before processing.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-700">max: 10MB</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-orange-50 border-orange-200 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">🔪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Cleaning Rules</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Configurable regex pipeline: strip HTML, fix entities, collapse whitespace.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-orange-600">12 rules</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-orange-50 border-orange-200 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">📐</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Chunk Strategy</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Sliding window with overlap preserves sentence boundaries across chunk edges.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-orange-600">64 tok overlap</span>
    </div></div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-amber-50 border-amber-300 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Input Validation</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Reject files >10MB, unsupported encodings, or binary formats before processing.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-700">max: 10MB</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-orange-50 border-orange-200 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">🔪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Cleaning Rules</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Configurable regex pipeline: strip HTML, fix entities, collapse whitespace.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-orange-600">12 rules</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-orange-50 border-orange-200 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">📐</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Chunk Strategy</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Sliding window with overlap preserves sentence boundaries across chunk edges.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-orange-600">64 tok overlap</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-emerald-50 border-emerald-200 text-amber-950">
      <div>
        <span class="text-[1.5cqw] block">✅</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Output QA</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Verify token count, check for empty chunks, validate against model vocab.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-600">2,048 tokens</span>
    </div></div>`
      }
    }
  },
  15: {
    scene1: {
      title: "Bento Platform Architecture",
      subtitle: "Compartmentalized modules that compose a modern AI agent platform",
      low: {
        beat1: {
          visualHtml: `<div class="bg-stone-900 border-2 border-amber-700 rounded-lg p-[1cqw] w-[10cqw] h-[7cqw] flex items-center justify-center animate-match-1"><span class="text-[1.5cqw] text-amber-400">🧠</span></div>`,
          title: "Compartments, Not Chaos",
          desc: "A modern agent platform separates concerns into distinct, bounded compartments."
        },
        beat2: {
          visualHtml: `<div class="grid grid-cols-2 gap-[0.6cqw] w-[18cqw] animate-match-1"><div class="bg-stone-900 border border-amber-700 rounded p-[0.6cqw] text-center"><span class="text-[1.2cqw]">🧠</span><p class="text-[0.7cqw] text-amber-300 mt-[0.2cqw]">Core</p></div><div class="bg-stone-900 border border-blue-700 rounded p-[0.6cqw] text-center"><span class="text-[1.2cqw]">🔧</span><p class="text-[0.7cqw] text-blue-300 mt-[0.2cqw]">Tools</p></div></div>`,
          title: "Compartments, Not Chaos",
          desc: "A modern agent platform separates concerns into distinct, bounded compartments.",
          subdesc: "Each compartment has a clear responsibility — LLM core, tools, memory, gateway, guardrails."
        },
        beat3: {
          visualHtml: `<div class="bg-stone-950 border-2 border-amber-600 rounded-xl p-[0.8cqw] w-[30cqw] animate-match-1"><div class="grid grid-cols-3 gap-[0.5cqw]"><div class="bg-stone-900 border border-amber-700/60 rounded p-[0.5cqw] text-center"><span class="text-[1cqw]">🧠</span><p class="text-[0.65cqw] text-amber-300">LLM Core</p></div><div class="bg-stone-900 border border-blue-700/60 rounded p-[0.5cqw] text-center"><span class="text-[1cqw]">🔧</span><p class="text-[0.65cqw] text-blue-300">Tools</p></div><div class="bg-stone-900 border border-emerald-700/60 rounded p-[0.5cqw] text-center"><span class="text-[1cqw]">💾</span><p class="text-[0.65cqw] text-emerald-300">Memory</p></div><div class="col-span-2 bg-stone-900 border border-purple-700/60 rounded p-[0.5cqw] text-center"><span class="text-[1cqw]">🔌</span><p class="text-[0.65cqw] text-purple-300">MCP Gateway</p></div><div class="bg-stone-900 border border-red-700/60 rounded p-[0.5cqw] text-center"><span class="text-[1cqw]">🛡️</span><p class="text-[0.65cqw] text-red-300">Guard</p></div></div></div>`,
          title: "Compartments, Not Chaos",
          desc: "A modern agent platform separates concerns into distinct, bounded compartments.",
          subdesc: "Each compartment has a clear responsibility — LLM core, tools, memory, gateway, guardrails.",
          punchline: "The bento layout ensures no module bleeds into another; interfaces are explicit."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <span class="text-[1.6cqw] block">🧠</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">LLM Core</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Reasoning & generation engine</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-950 text-amber-400 border border-amber-800">BRAIN</span>
    </div></div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <span class="text-[1.6cqw] block">🧠</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">LLM Core</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Reasoning & generation engine</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-950 text-amber-400 border border-amber-800">BRAIN</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <span class="text-[1.6cqw] block">🔧</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Tool Router</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Dispatch to MCP servers</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-blue-950 text-blue-400 border border-blue-800">HANDS</span>
    </div></div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <span class="text-[1.6cqw] block">🧠</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">LLM Core</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Reasoning & generation engine</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-950 text-amber-400 border border-amber-800">BRAIN</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <span class="text-[1.6cqw] block">🔧</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Tool Router</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Dispatch to MCP servers</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-blue-950 text-blue-400 border border-blue-800">HANDS</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <span class="text-[1.6cqw] block">💾</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Memory Store</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Short & long-term context</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-950 text-emerald-400 border border-emerald-800">RECALL</span>
    </div></div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <div>
        <span class="text-[1.5cqw] block">🧠</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">LLM Core</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Central reasoning engine. Handles prompt assembly, chain-of-thought, and response generation.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-400">gpt-4o / claude</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <div>
        <span class="text-[1.5cqw] block">🔧</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Tool Router</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Discovers and dispatches to MCP tool servers: filesystem, browser, database, APIs.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-blue-400">12 tools</span>
    </div></div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <div>
        <span class="text-[1.5cqw] block">🧠</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">LLM Core</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Central reasoning engine. Handles prompt assembly, chain-of-thought, and response generation.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-400">gpt-4o / claude</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <div>
        <span class="text-[1.5cqw] block">🔧</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Tool Router</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Discovers and dispatches to MCP tool servers: filesystem, browser, database, APIs.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-blue-400">12 tools</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <div>
        <span class="text-[1.5cqw] block">💾</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Memory Store</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Vector DB for long-term recall. Sliding window for conversation context.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">8k ctx window</span>
    </div></div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <div>
        <span class="text-[1.5cqw] block">🧠</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">LLM Core</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Central reasoning engine. Handles prompt assembly, chain-of-thought, and response generation.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-400">gpt-4o / claude</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <div>
        <span class="text-[1.5cqw] block">🔧</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Tool Router</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Discovers and dispatches to MCP tool servers: filesystem, browser, database, APIs.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-blue-400">12 tools</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <div>
        <span class="text-[1.5cqw] block">💾</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Memory Store</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Vector DB for long-term recall. Sliding window for conversation context.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">8k ctx window</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-stone-950 border-red-800/50 text-stone-100">
      <div>
        <span class="text-[1.5cqw] block">🛡️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Guardrails</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Input/output filtering, PII redaction, rate limiting, and permission boundaries.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-400">policy engine</span>
    </div></div>`
      }
    },
    scene2: {
      title: "Platform Deployment Handoff",
      subtitle: "Engineering checklist for wiring, testing, and launching an agent platform instance",
      low: {
        beat1: {
          visualHtml: `<div class="font-mono text-[1.6cqw] text-amber-400 animate-match-1">agent.deploy()</div>`,
          title: "Deploy the Agent",
          desc: "Platform engineers wire compartments together via declarative deploy configuration."
        },
        beat2: {
          visualHtml: `<div class="font-mono text-[1.4cqw] animate-match-1"><span class="text-amber-400">agent.deploy()</span> <span class="text-blue-400">tools=[fs,web,db]</span></div>`,
          title: "Deploy the Agent",
          desc: "Platform engineers wire compartments together via declarative deploy configuration.",
          subdesc: "Tool router connects to MCP servers; memory store initializes vector index."
        },
        beat3: {
          visualHtml: `<div class="font-mono text-[1.2cqw] animate-match-1"><span class="text-amber-400">agent.deploy()</span> <span class="text-blue-400">tools=[fs,web,db]</span> <span class="text-emerald-400">memory=vector</span> <span class="text-stone-400">→ LIVE</span></div>`,
          title: "Deploy the Agent",
          desc: "Platform engineers wire compartments together via declarative deploy configuration.",
          subdesc: "Tool router connects to MCP servers; memory store initializes vector index.",
          punchline: "Fully wired agent passes health checks and enters production serving mode."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <span class="text-[1.6cqw] block">🔌</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Wire Tools</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Connect MCP endpoints</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-blue-950 text-blue-400 border border-blue-800">INTEGRATE</span>
    </div></div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <span class="text-[1.6cqw] block">🔌</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Wire Tools</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Connect MCP endpoints</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-blue-950 text-blue-400 border border-blue-800">INTEGRATE</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <span class="text-[1.6cqw] block">💾</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Init Memory</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Load vector index & context</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-950 text-emerald-400 border border-emerald-800">CONFIGURE</span>
    </div></div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <span class="text-[1.6cqw] block">🔌</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Wire Tools</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Connect MCP endpoints</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-blue-950 text-blue-400 border border-blue-800">INTEGRATE</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <span class="text-[1.6cqw] block">💾</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Init Memory</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Load vector index & context</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-950 text-emerald-400 border border-emerald-800">CONFIGURE</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <span class="text-[1.6cqw] block">🚀</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Go Live</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Health check & serve traffic</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-950 text-amber-400 border border-amber-800">DEPLOY</span>
    </div></div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <div>
        <span class="text-[1.5cqw] block">🔌</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">MCP Registration</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Register tool servers with capability descriptors. Agent discovers at runtime.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-blue-400">3 servers</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Integration Test</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">End-to-end test: prompt → tool call → memory write → guarded response.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-400">42 scenarios</span>
    </div></div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <div>
        <span class="text-[1.5cqw] block">🔌</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">MCP Registration</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Register tool servers with capability descriptors. Agent discovers at runtime.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-blue-400">3 servers</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Integration Test</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">End-to-end test: prompt → tool call → memory write → guarded response.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-400">42 scenarios</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-stone-950 border-red-800/50 text-stone-100">
      <div>
        <span class="text-[1.5cqw] block">🛡️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Policy Audit</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Verify guardrails block PII leaks, unauthorized tool access, and prompt injection.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-400">0 violations</span>
    </div></div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <div>
        <span class="text-[1.5cqw] block">🔌</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">MCP Registration</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Register tool servers with capability descriptors. Agent discovers at runtime.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-blue-400">3 servers</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-stone-900/90 border-amber-700/40 text-stone-100">
      <div>
        <span class="text-[1.5cqw] block">🧪</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Integration Test</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">End-to-end test: prompt → tool call → memory write → guarded response.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-400">42 scenarios</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-stone-950 border-red-800/50 text-stone-100">
      <div>
        <span class="text-[1.5cqw] block">🛡️</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Policy Audit</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Verify guardrails block PII leaks, unauthorized tool access, and prompt injection.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-400">0 violations</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-stone-950 border-emerald-800/50 text-stone-100">
      <div>
        <span class="text-[1.5cqw] block">📊</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Observability</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Export traces, token usage, tool latency, and error rates to monitoring stack.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">dashboard live</span>
    </div></div>`
      }
    }
  },
  16: {
    scene1: {
      title: "Self-Check Architecture",
      subtitle: "How microservices continuously probe their own health and surface diagnostics",
      low: {
        beat1: {
          visualHtml: `<div class="bg-slate-950 border border-slate-800 rounded-lg p-[1.2cqw] w-[14cqw] animate-match-1"><div class="flex items-center gap-[0.5cqw] text-emerald-400 text-[1cqw] font-mono"><span class="w-[0.6cqw] h-[0.6cqw] rounded-full bg-emerald-500 animate-pulse"></span>READY</div></div>`,
          title: "System Checks Itself",
          desc: "Microservices run continuous self-checks — ping, memory, disk, dependency probes."
        },
        beat2: {
          visualHtml: `<div class="grid grid-cols-2 gap-[0.6cqw] w-[20cqw] animate-match-1"><div class="bg-slate-950 border border-emerald-800 rounded p-[0.6cqw]"><span class="text-[0.8cqw] font-mono text-emerald-400">auth ✓</span></div><div class="bg-slate-950 border border-emerald-800 rounded p-[0.6cqw]"><span class="text-[0.8cqw] font-mono text-emerald-400">user ✓</span></div><div class="bg-slate-950 border border-amber-800 rounded p-[0.6cqw]"><span class="text-[0.8cqw] font-mono text-amber-400">pay ⚠</span></div><div class="bg-slate-950 border border-emerald-800 rounded p-[0.6cqw]"><span class="text-[0.8cqw] font-mono text-emerald-400">order ✓</span></div></div>`,
          title: "System Checks Itself",
          desc: "Microservices run continuous self-checks — ping, memory, disk, dependency probes.",
          subdesc: "Each service reports status to a central reaction board with neon indicators."
        },
        beat3: {
          visualHtml: `<div class="bg-slate-950 border border-slate-700 rounded-xl p-[1cqw] w-[34cqw] animate-match-1 font-mono"><div class="flex justify-between items-center mb-[0.6cqw]"><span class="text-[0.85cqw] text-slate-300">HEALTH BOARD</span><span class="text-[0.75cqw] text-emerald-400">11/12 PASS</span></div><div class="grid grid-cols-4 gap-[0.4cqw] text-[0.7cqw]"><div class="bg-emerald-950/50 border border-emerald-800 rounded p-[0.3cqw] text-emerald-400 text-center">auth 🟢</div><div class="bg-emerald-950/50 border border-emerald-800 rounded p-[0.3cqw] text-emerald-400 text-center">user 🟢</div><div class="bg-red-950/50 border border-red-800 rounded p-[0.3cqw] text-red-400 text-center">pay 🔴</div><div class="bg-emerald-950/50 border border-emerald-800 rounded p-[0.3cqw] text-emerald-400 text-center">order 🟢</div></div></div>`,
          title: "System Checks Itself",
          desc: "Microservices run continuous self-checks — ping, memory, disk, dependency probes.",
          subdesc: "Each service reports status to a central reaction board with neon indicators.",
          punchline: "One amber warning (pay-service) triggers investigation before it becomes critical."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-950 border-slate-800 text-slate-200">
      <span class="text-[1.6cqw] block">🟢</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Ping Probe</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Network latency check</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-950 text-emerald-400 border border-emerald-800">PASS</span>
    </div></div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-950 border-slate-800 text-slate-200">
      <span class="text-[1.6cqw] block">🟢</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Ping Probe</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Network latency check</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-950 text-emerald-400 border border-emerald-800">PASS</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-slate-950 border-slate-800 text-slate-200">
      <span class="text-[1.6cqw] block">🟢</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Memory Check</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Heap usage within budget</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-950 text-emerald-400 border border-emerald-800">PASS</span>
    </div></div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-950 border-slate-800 text-slate-200">
      <span class="text-[1.6cqw] block">🟢</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Ping Probe</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Network latency check</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-950 text-emerald-400 border border-emerald-800">PASS</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-slate-950 border-slate-800 text-slate-200">
      <span class="text-[1.6cqw] block">🟢</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Memory Check</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Heap usage within budget</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-950 text-emerald-400 border border-emerald-800">PASS</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-slate-950 border-slate-800 text-slate-200">
      <span class="text-[1.6cqw] block">🔴</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Pay Service</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">CPU spike detected</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-red-950 text-red-400 border border-red-800">FAIL</span>
    </div></div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-950 border-slate-800 text-slate-200">
      <div>
        <span class="text-[1.5cqw] block">📡</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Ping Probe</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">HTTP health endpoint returns 200 within 50ms. Runs every 10 seconds per service.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">12ms avg</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-950 border-slate-800 text-slate-200">
      <div>
        <span class="text-[1.5cqw] block">🧠</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Memory Audit</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Heap usage, GC pause time, and allocation rate monitored against per-service budgets.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">42% avg heap</span>
    </div></div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-950 border-slate-800 text-slate-200">
      <div>
        <span class="text-[1.5cqw] block">📡</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Ping Probe</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">HTTP health endpoint returns 200 within 50ms. Runs every 10 seconds per service.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">12ms avg</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-950 border-slate-800 text-slate-200">
      <div>
        <span class="text-[1.5cqw] block">🧠</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Memory Audit</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Heap usage, GC pause time, and allocation rate monitored against per-service budgets.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">42% avg heap</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-slate-950 border-slate-800 text-slate-200">
      <div>
        <span class="text-[1.5cqw] block">💾</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Disk Watch</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Volume usage, IOPS, and log rotation health. Warn at 85%, critical at 95%.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">72% avg disk</span>
    </div></div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-950 border-slate-800 text-slate-200">
      <div>
        <span class="text-[1.5cqw] block">📡</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Ping Probe</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">HTTP health endpoint returns 200 within 50ms. Runs every 10 seconds per service.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">12ms avg</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-950 border-slate-800 text-slate-200">
      <div>
        <span class="text-[1.5cqw] block">🧠</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Memory Audit</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Heap usage, GC pause time, and allocation rate monitored against per-service budgets.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">42% avg heap</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-slate-950 border-slate-800 text-slate-200">
      <div>
        <span class="text-[1.5cqw] block">💾</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Disk Watch</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Volume usage, IOPS, and log rotation health. Warn at 85%, critical at 95%.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">72% avg disk</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-red-950/30 border-red-800 text-slate-200">
      <div>
        <span class="text-[1.5cqw] block">🔴</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">pay-service Alert</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">CPU at 92%, memory at 890MB. Auto-scaling triggered. Incident #447 opened.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-400">INCIDENT #447</span>
    </div></div>`
      }
    },
    scene2: {
      title: "Incident Response Handoff",
      subtitle: "Automated remediation workflow from alert detection to service recovery",
      low: {
        beat1: {
          visualHtml: `<div class="font-mono text-[1.6cqw] text-red-400 animate-match-1">⚠ pay-service CPU 92%</div>`,
          title: "React to the Alert",
          desc: "Health board alerts trigger automated responses before human intervention."
        },
        beat2: {
          visualHtml: `<div class="font-mono text-[1.4cqw] animate-match-1"><span class="text-red-400">⚠ pay-service CPU 92%</span> <span class="text-amber-400">→ auto-scale +1 pod</span></div>`,
          title: "React to the Alert",
          desc: "Health board alerts trigger automated responses before human intervention.",
          subdesc: "Auto-scaling adds a pod; CPU drops from 92% to 34% within 4 minutes."
        },
        beat3: {
          visualHtml: `<div class="font-mono text-[1.2cqw] animate-match-1"><span class="text-red-400">⚠ CPU 92%</span> <span class="text-amber-400">scale +1</span> <span class="text-emerald-400">→ CPU 34% ✓</span> <span class="text-slate-500">incident resolved 4m</span></div>`,
          title: "React to the Alert",
          desc: "Health board alerts trigger automated responses before human intervention.",
          subdesc: "Auto-scaling adds a pod; CPU drops from 92% to 34% within 4 minutes.",
          punchline: "Incident auto-resolves when all probes return green. Post-mortem optional."
        }
      },
      med: {
        beat1: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-950 border-slate-800 text-slate-200">
      <span class="text-[1.6cqw] block">🚨</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Alert Fires</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Threshold breach detected</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-red-950 text-red-400 border border-red-800">CRITICAL</span>
    </div></div>`,
        beat2: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-950 border-slate-800 text-slate-200">
      <span class="text-[1.6cqw] block">🚨</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Alert Fires</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Threshold breach detected</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-red-950 text-red-400 border border-red-800">CRITICAL</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-slate-950 border-slate-800 text-slate-200">
      <span class="text-[1.6cqw] block">⚡</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Auto-Scale</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Add pod to pay cluster</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-950 text-amber-400 border border-amber-800">REMEDIATE</span>
    </div></div>`,
        beat3: `<div class="flex items-center justify-center gap-[1.5cqw] flex-wrap max-w-[58cqw] mx-auto">
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-1 bg-slate-950 border-slate-800 text-slate-200">
      <span class="text-[1.6cqw] block">🚨</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Alert Fires</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Threshold breach detected</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-red-950 text-red-400 border border-red-800">CRITICAL</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-1">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-2 bg-slate-950 border-slate-800 text-slate-200">
      <span class="text-[1.6cqw] block">⚡</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Auto-Scale</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">Add pod to pay cluster</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-amber-950 text-amber-400 border border-amber-800">REMEDIATE</span>
    </div><div class="text-[1.8cqw] text-current opacity-50 shrink-0 animate-match-2">→</div>
    <div class="p-[1.4cqw] rounded-xl border text-center w-[14cqw] shadow-sm animate-match-3 bg-slate-950 border-slate-800 text-slate-200">
      <span class="text-[1.6cqw] block">✅</span>
      <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Resolve</span>
      <p class="text-[0.85cqw] mt-[0.2cqw] opacity-70">All probes return green</p>
      <span class="text-[0.75cqw] font-mono mt-[0.6cqw] inline-block px-[0.6cqw] py-[0.15cqw] rounded bg-emerald-950 text-emerald-400 border border-emerald-800">HEALTHY</span>
    </div></div>`
      },
      high: {
        beat1: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-950 border-slate-800 text-slate-200">
      <div>
        <span class="text-[1.5cqw] block">🚨</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Alert Routing</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">PagerDuty + Slack notification with service context, metrics snapshot, and runbook link.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-400">paged in 30s</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-950 border-slate-800 text-slate-200">
      <div>
        <span class="text-[1.5cqw] block">📈</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Auto-Scale Rule</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">HPA adds pod when CPU >80% for 2 minutes. Max 6 replicas per service.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-400">+1 pod</span>
    </div></div>`,
        beat2: `<div class="grid grid-cols-3 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-950 border-slate-800 text-slate-200">
      <div>
        <span class="text-[1.5cqw] block">🚨</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Alert Routing</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">PagerDuty + Slack notification with service context, metrics snapshot, and runbook link.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-400">paged in 30s</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-950 border-slate-800 text-slate-200">
      <div>
        <span class="text-[1.5cqw] block">📈</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Auto-Scale Rule</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">HPA adds pod when CPU >80% for 2 minutes. Max 6 replicas per service.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-400">+1 pod</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-slate-950 border-slate-800 text-slate-200">
      <div>
        <span class="text-[1.5cqw] block">🔍</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Root Cause</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Post-resolution: connection pool leak in payment gateway adapter identified.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">RCA pending</span>
    </div></div>`,
        beat3: `<div class="grid grid-cols-2 gap-[1.2cqw] max-w-[58cqw] mx-auto text-left">
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-1 bg-slate-950 border-slate-800 text-slate-200">
      <div>
        <span class="text-[1.5cqw] block">🚨</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Alert Routing</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">PagerDuty + Slack notification with service context, metrics snapshot, and runbook link.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-red-400">paged in 30s</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-2 bg-slate-950 border-slate-800 text-slate-200">
      <div>
        <span class="text-[1.5cqw] block">📈</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Auto-Scale Rule</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">HPA adds pod when CPU >80% for 2 minutes. Max 6 replicas per service.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-amber-400">+1 pod</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-3 bg-slate-950 border-slate-800 text-slate-200">
      <div>
        <span class="text-[1.5cqw] block">🔍</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Root Cause</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Post-resolution: connection pool leak in payment gateway adapter identified.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-cyan-400">RCA pending</span>
    </div>
    <div class="p-[1.2cqw] rounded-xl border flex flex-col justify-between animate-match-4 bg-emerald-950/20 border-emerald-800 text-slate-200">
      <div>
        <span class="text-[1.5cqw] block">📋</span>
        <span class="font-bold text-[1.05cqw] block mt-[0.4cqw]">Post-Mortem</span>
        <p class="text-[0.85cqw] mt-[0.3cqw] leading-relaxed opacity-75">Blameless review scheduled. Action item: add connection pool metrics to board.</p>
      </div>
      <span class="text-[0.75cqw] font-mono mt-[0.8cqw] text-emerald-400">scheduled</span>
    </div></div>`
      }
    }
  }
};