import React from "react";
import { 
  FileText, ShieldCheck, HelpCircle, CheckCircle2, AlertTriangle, 
  Terminal, CheckSquare, GitPullRequest, Code, Trash2, ArrowRight,
  TrendingUp, Layers, Lock, Unlock, Database, Info, Play, Check,
  ChevronRight, AlertCircle, XCircle
} from "lucide-react";

/**
 * MetaphorTierC
 * Handles Styles 17 - 24 (Editorial Text Report high density styles)
 * Animation profile: Strictly editorial, static fades, Magic Move shape transitions, no bounces.
 * Renders dynamically based on scene (1 to 5) and beat (0 to 2) values.
 */
export function MetaphorTierC({ style, scene, beat, isThumbnail = false }) {
  const currentScene = style.scenes.find((s) => s.id === scene) || style.scenes[0];
  const density = currentScene.density;
  
  // Base classes for crisp editorial look
  const finalClass = beat > 0 ? "opacity-100" : "opacity-95";
  const transitionBase = "transition-all duration-500 ease-out";
  
  // Helper for step-by-step editorial fades (highly restricted wiggles/bounces)
  const getBeatClass = (elementBeat) => {
    if (beat >= elementBeat) {
      return "opacity-100 translate-y-0 filter-none";
    }
    return "opacity-0 translate-y-[0.8cqh] pointer-events-none";
  };

  // Helper for horizontal bar scale animation
  const getScaleXStyle = (elementBeat, targetPercent) => {
    const scale = beat >= elementBeat ? 1 : 0;
    return {
      width: targetPercent,
      transform: `scaleX(${scale})`,
      transformOrigin: "left",
      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
    };
  };

  // Switch based on style ID
  switch (style.id) {
    case "17": { // Research Memo (Ivory Academic Papers)
      const renderSceneContent = () => {
        switch (scene) {
          case 1: // Ultralight: Single giant statement / text quote block
            return (
              <div className="flex flex-col justify-center items-center h-full px-[2cqw] py-[1cqw]">
                <div className={`text-center font-['Cormorant_Garamond'] text-[2.2cqw] italic font-semibold text-[#5c1c1c] leading-tight ${transitionBase}`}>
                  "Across multiple test iterations, cumulative delay past the sub-second baseline correlates directly with exponential retention degradation."
                </div>
                <div className={`mt-[2cqw] h-[1px] w-[8cqw] bg-[#7f1d1d]/30 ${getBeatClass(1)}`} />
                <div className={`mt-[1cqw] text-[1.1cqw] font-sans text-stone-500 uppercase tracking-widest ${getBeatClass(1)}`}>
                  Section III • Quantitative Analysis
                </div>
              </div>
            );
          case 2: // Light: 2 balanced side-by-side comparative ledger sections
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="border-b border-[#7f1d1d]/20 pb-[0.5cqw] text-center font-['Cormorant_Garamond'] text-[1.2cqw] text-[#7f1d1d] uppercase font-bold tracking-widest">
                  MEMORANDUM SUMMARY (2026)
                </div>
                <div className="flex-1 grid grid-cols-2 gap-[2cqw] mt-[1.5cqw] text-[1cqw] leading-tight">
                  <div className={`border-r border-stone-200 pr-[1.5cqw] ${getBeatClass(0)}`}>
                    <p className="font-['Cormorant_Garamond'] font-bold text-[#7f1d1d] text-[1.2cqw] border-b border-[#7f1d1d]/10 pb-1">I. Local Latency Threshold</p>
                    <p className="opacity-80 mt-2">Bounce rates scale past 12% index with 100ms lag increase past standard baselines.</p>
                  </div>
                  <div className={`${getBeatClass(1)}`}>
                    <p className="font-['Cormorant_Garamond'] font-bold text-[#7f1d1d] text-[1.2cqw] border-b border-[#7f1d1d]/10 pb-1">II. Remote Dropout Bounds</p>
                    <p className="opacity-80 mt-2">Checkouts abandon rate reaches 62% past 1800ms wait limits globally.</p>
                  </div>
                </div>
              </div>
            );
          case 3: // Standard: 3 columns checkbook grids / vertical steps
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="border-b border-stone-200 pb-[0.5cqw] flex justify-between items-center">
                  <span className="font-['Cormorant_Garamond'] text-[1.1cqw] text-[#7f1d1d] font-bold uppercase tracking-wider">Academic Observation Lanes</span>
                  <span className="text-[0.9cqw] font-mono text-stone-400">CLASS: CORE-METRICS</span>
                </div>
                <div className="flex-1 grid grid-cols-3 gap-[1.2cqw] mt-[1.5cqw] text-[0.9cqw] leading-snug">
                  <div className={`bg-stone-50 border border-stone-200 p-[1cqw] rounded-sm ${getBeatClass(0)}`}>
                    <span className="font-mono text-[#7f1d1d] font-bold text-[0.8cqw] block mb-1">[Phase 1]</span>
                    <h4 className="font-['Cormorant_Garamond'] font-bold text-[1.1cqw] text-stone-900 mb-1">Baseline Feed</h4>
                    <p className="text-stone-600">Local UI interactions require &lt;16ms response thresholds.</p>
                  </div>
                  <div className={`bg-stone-50 border border-stone-200 p-[1cqw] rounded-sm ${getBeatClass(1)}`}>
                    <span className="font-mono text-[#7f1d1d] font-bold text-[0.8cqw] block mb-1">[Phase 2]</span>
                    <h4 className="font-['Cormorant_Garamond'] font-bold text-[1.1cqw] text-stone-900 mb-1">Network Scans</h4>
                    <p className="text-stone-600">Round-trip database handshakes average 142ms locally.</p>
                  </div>
                  <div className={`bg-stone-50 border border-stone-200 p-[1cqw] rounded-sm ${getBeatClass(2)}`}>
                    <span className="font-mono text-[#7f1d1d] font-bold text-[0.8cqw] block mb-1">[Phase 3]</span>
                    <h4 className="font-['Cormorant_Garamond'] font-bold text-[1.1cqw] text-stone-900 mb-1">Cache Hit</h4>
                    <p className="text-stone-600">Client-side indexedDB read buffers optimize hit rate by 89%.</p>
                  </div>
                </div>
              </div>
            );
          case 4: // Dense: 2x2 administrative quadrants / status card boards
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="border-b border-[#7f1d1d]/20 pb-[0.3cqw] flex justify-between items-center">
                  <span className="font-['Cormorant_Garamond'] text-[1.2cqw] font-bold text-[#7f1d1d]">Quadrant Map A</span>
                  <span className="text-[0.85cqw] text-stone-400 font-mono">2x2 QUADRANTS</span>
                </div>
                <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-[1cqw] mt-[1cqw]">
                  <div className={`border border-stone-200 p-[0.8cqw] rounded-sm ${getBeatClass(0)}`}>
                    <span className="font-['Cormorant_Garamond'] font-bold text-[#7f1d1d] text-[1.05cqw] block">QI: Ingestion Queue</span>
                    <p className="text-[0.85cqw] text-stone-600 mt-1">Clearing static AST structures in sub-3ms cycles.</p>
                  </div>
                  <div className={`border border-stone-200 p-[0.8cqw] rounded-sm ${getBeatClass(1)}`}>
                    <span className="font-['Cormorant_Garamond'] font-bold text-[#7f1d1d] text-[1.05cqw] block">QII: Dynamic Lexing</span>
                    <p className="text-[0.85cqw] text-stone-600 mt-1">Checking validation constraints against local schema targets.</p>
                  </div>
                  <div className={`border border-stone-200 p-[0.8cqw] rounded-sm ${getBeatClass(2)}`}>
                    <span className="font-['Cormorant_Garamond'] font-bold text-stone-800 text-[1.05cqw] block">QIII: Memory Pools</span>
                    <p className="text-[0.85cqw] text-stone-600 mt-1">Releasing active lock allocations within safety thresholds.</p>
                  </div>
                  <div className={`border border-stone-200 p-[0.8cqw] rounded-sm opacity-50`}>
                    <span className="font-['Cormorant_Garamond'] font-bold text-stone-800 text-[1.05cqw] block">QIV: Static Emission</span>
                    <p className="text-[0.85cqw] text-stone-500 mt-1">Output compiler files frozen on strict secure criteria.</p>
                  </div>
                </div>
              </div>
            );
          case 5: // Extreme: Crisp high-contrast three-line table (三线表)
          default:
            return (
              <div className="flex flex-col justify-between h-full font-serif">
                <div className="text-center font-['Cormorant_Garamond'] text-[1.1cqw] text-[#7f1d1d] uppercase font-bold tracking-widest mb-1">
                  Table 1. Empirical Latency Performance Under Constraints
                </div>
                <div className="flex-1 flex flex-col justify-center my-[0.5cqw]">
                  {/* Three-line table: Thick top, thin header, thick bottom. NO vertical lines. */}
                  <div className="border-t-2 border-stone-800">
                    <table className="w-full text-left font-sans text-[0.8cqw] border-collapse">
                      <thead>
                        <tr className="border-b border-stone-400 text-stone-800 font-bold uppercase tracking-wider">
                          <th className="py-2 px-1">Evaluation Metric</th>
                          <th className="py-2 px-1 text-right">Standard (ms)</th>
                          <th className="py-2 px-1 text-right">Edge WASM (ms)</th>
                          <th className="py-2 px-1 text-right">Delta (%)</th>
                        </tr>
                      </thead>
                      <tbody className="text-stone-600">
                        <tr className={`border-b border-stone-100 hover:bg-stone-50/50 ${getBeatClass(0)}`}>
                          <td className="py-1.5 px-1 font-medium text-stone-800">1. AST Construction</td>
                          <td className="py-1.5 px-1 text-right">142.00</td>
                          <td className="py-1.5 px-1 text-right text-emerald-800 font-bold">12.50</td>
                          <td className="py-1.5 px-1 text-right text-emerald-800 font-semibold">-91.2%</td>
                        </tr>
                        <tr className={`border-b border-stone-100 hover:bg-stone-50/50 ${getBeatClass(1)}`}>
                          <td className="py-1.5 px-1 font-medium text-stone-800">2. Type Validation</td>
                          <td className="py-1.5 px-1 text-right">89.40</td>
                          <td className="py-1.5 px-1 text-right text-emerald-800 font-bold">6.10</td>
                          <td className="py-1.5 px-1 text-right text-emerald-800 font-semibold">-93.1%</td>
                        </tr>
                        <tr className={`hover:bg-stone-50/50 ${getBeatClass(2)}`}>
                          <td className="py-1.5 px-1 font-medium text-stone-800">3. Schema Compilation</td>
                          <td className="py-1.5 px-1 text-right">312.80</td>
                          <td className="py-1.5 px-1 text-right text-emerald-800 font-bold">28.40</td>
                          <td className="py-1.5 px-1 text-right text-emerald-800 font-semibold">-90.9%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="border-b-2 border-stone-800 w-full mt-0.5" />
                </div>
                <div className="text-[0.8cqw] text-stone-400 italic text-center font-sans">
                  Note: Values representing compiler cycle time aggregated over 10,000 runs in sandboxed browser nodes.
                </div>
              </div>
            );
        }
      };

      // Academic Stamp Seal (rendered inside Style 17)
      const renderSeal = () => {
        return (
          <div className="absolute top-[1.2cqw] right-[1.5cqw] w-[3cqw] h-[3cqw] opacity-25 hover:opacity-50 transition-opacity duration-300">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#7f1d1d]">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="41" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4,2" />
              <path d="M 30,50 L 50,25 L 70,50 L 50,75 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <text x="50" y="55" fontSize="12" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">VERI</text>
            </svg>
          </div>
        );
      };

      return (
        <div className={`w-[42cqw] h-[31cqw] bg-[#faf9f5] border border-stone-200 rounded p-[1.8cqw] flex flex-col justify-between text-stone-800 relative ${finalClass} shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] ${transitionBase}`}>
          {renderSeal()}
          {renderSceneContent()}
        </div>
      );
    }

    case "18": { // Maintainer Issue Brief (GitHub-like)
      const renderSceneContent = () => {
        switch (scene) {
          case 1: // Ultralight: Single giant statement
            return (
              <div className="flex flex-col justify-center h-full px-[1cqw]">
                <div className="flex items-center gap-2 mb-[1cqw]">
                  <span className="px-[0.8cqw] py-[0.2cqw] bg-purple-100 text-purple-700 rounded-full font-mono text-[0.85cqw] font-bold flex items-center gap-1 border border-purple-200 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    Merged #1409
                  </span>
                  <span className="text-slate-400 text-[1cqw] font-mono">by paaatrickfu</span>
                </div>
                <h3 className="font-sans font-black text-slate-900 text-[2cqw] leading-tight">
                  Critical Refactor: Terminate and release db connection pools in finally statements
                </h3>
                <p className="text-slate-500 mt-[1cqw] text-[1.1cqw]">
                  Resolved memory leak that led to server exhaustion on multi-agent execution streams.
                </p>
              </div>
            );
          case 2: // Light: 2 balanced side-by-side comparative sections
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center border-b border-slate-200 pb-[0.6cqw] text-[0.95cqw] font-mono">
                  <span className="font-bold text-slate-700">THREAD DISCUSSION</span>
                  <span className="text-slate-400">2 Comments</span>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-[1.5cqw] mt-[1.2cqw]">
                  <div className={`bg-slate-50 border border-slate-200 rounded-lg p-[1cqw] flex flex-col justify-between text-[0.9cqw] ${getBeatClass(0)}`}>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-black text-slate-800">@ paaatrickfu</span>
                        <span className="text-slate-400 text-[0.8cqw]">reporter</span>
                      </div>
                      <p className="text-slate-600 leading-snug">
                        "Server crashes after 20 minutes under load. Connection pool remains locked at 100% saturation capacity."
                      </p>
                    </div>
                    <span className="text-slate-400 font-mono text-[0.8cqw] mt-2">Opened today</span>
                  </div>
                  <div className={`bg-slate-50 border border-slate-200 rounded-lg p-[1cqw] flex flex-col justify-between text-[0.9cqw] ${getBeatClass(1)}`}>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-black text-purple-700">@ coding-agent</span>
                        <span className="text-purple-600 bg-purple-50 border border-purple-200 rounded-full px-1.5 py-0.5 text-[0.75cqw] font-bold">solver</span>
                      </div>
                      <p className="text-slate-600 leading-snug">
                        "Identified omission in cleanup handlers. Releasing connection pools under standard try/finally blocks."
                      </p>
                    </div>
                    <span className="text-purple-600 font-mono text-[0.8cqw] mt-2 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" /> Resolving...
                    </span>
                  </div>
                </div>
              </div>
            );
          case 3: // Standard: 3 steps vertical GitHub action workflow / checklist
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center border-b border-slate-200 pb-[0.6cqw]">
                  <span className="font-sans font-bold text-slate-800 text-[1.1cqw]">Workflow Actions Check</span>
                  <span className="text-[0.95cqw] font-mono text-purple-600 font-bold bg-purple-50 px-2 py-0.5 rounded border border-purple-200 shadow-sm flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" /> Action Active
                  </span>
                </div>
                <div className="flex-1 flex flex-col gap-[0.8cqw] mt-[1.2cqw]">
                  <div className={`flex items-center gap-3 bg-slate-50 border border-slate-200 p-[0.8cqw] rounded-lg ${getBeatClass(0)}`}>
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold font-mono text-[0.85cqw]">1</div>
                    <div className="flex-1 flex justify-between items-center text-[0.95cqw]">
                      <span className="font-mono font-bold text-slate-700">step-01: compile_and_audit</span>
                      <span className="text-emerald-600 font-bold font-mono flex items-center gap-1 text-[0.85cqw]"><Check className="w-3.5 h-3.5" /> PASSED</span>
                    </div>
                  </div>
                  <div className={`flex items-center gap-3 bg-slate-50 border border-slate-200 p-[0.8cqw] rounded-lg ${getBeatClass(1)}`}>
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold font-mono text-[0.85cqw]">2</div>
                    <div className="flex-1 flex justify-between items-center text-[0.95cqw]">
                      <span className="font-mono font-bold text-slate-700">step-02: playwright_e2e_matrix</span>
                      <span className="text-emerald-600 font-bold font-mono flex items-center gap-1 text-[0.85cqw]"><Check className="w-3.5 h-3.5" /> PASSED</span>
                    </div>
                  </div>
                  <div className={`flex items-center gap-3 bg-slate-50 border border-slate-200 p-[0.8cqw] rounded-lg ${getBeatClass(2)}`}>
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold font-mono text-[0.85cqw]">3</div>
                    <div className="flex-1 flex justify-between items-center text-[0.95cqw]">
                      <span className="font-mono font-bold text-purple-700">step-03: merge_head_origin</span>
                      <span className="text-purple-600 font-bold font-mono flex items-center gap-1 text-[0.85cqw] animate-pulse">EXECUTING...</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          case 4: // Dense: 2x2 board representing PR reviews / issue status quadrants
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center border-b border-slate-200 pb-[0.4cqw]">
                  <span className="font-sans font-bold text-slate-800 text-[1.1cqw]">Integration Kanban Board</span>
                  <span className="text-[0.9cqw] text-slate-400 font-mono">STABLE TRACK</span>
                </div>
                <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-[1cqw] mt-[1cqw]">
                  <div className={`bg-slate-50 border border-slate-200 rounded-lg p-[0.8cqw] flex flex-col justify-between ${getBeatClass(0)}`}>
                    <span className="font-bold text-[0.95cqw] text-slate-700 border-b border-slate-150 pb-0.5 mb-1 flex justify-between">
                      <span>#17 Ingestion Pipeline</span>
                      <span className="text-[0.8cqw] text-emerald-600 bg-emerald-50 px-1.5 rounded border border-emerald-100 font-bold font-mono">STABLE</span>
                    </span>
                    <p className="text-[0.8cqw] text-slate-500 leading-tight">Memory leaks eliminated at compiler parser bounds.</p>
                  </div>
                  <div className={`bg-slate-50 border border-slate-200 rounded-lg p-[0.8cqw] flex flex-col justify-between ${getBeatClass(1)}`}>
                    <span className="font-bold text-[0.95cqw] text-slate-700 border-b border-slate-150 pb-0.5 mb-1 flex justify-between">
                      <span>#18 Connection Pool</span>
                      <span className="text-[0.8cqw] text-purple-600 bg-purple-50 px-1.5 rounded border border-purple-100 font-bold font-mono">MERGING</span>
                    </span>
                    <p className="text-[0.8cqw] text-slate-500 leading-tight">Releasing connections securely across checkout channels.</p>
                  </div>
                  <div className={`bg-slate-50 border border-slate-200 rounded-lg p-[0.8cqw] flex flex-col justify-between ${getBeatClass(2)}`}>
                    <span className="font-bold text-[0.95cqw] text-slate-700 border-b border-slate-150 pb-0.5 mb-1 flex justify-between">
                      <span>#19 Decision Record</span>
                      <span className="text-[0.8cqw] text-amber-600 bg-amber-50 px-1.5 rounded border border-amber-100 font-bold font-mono">AUDITED</span>
                    </span>
                    <p className="text-[0.8cqw] text-slate-500 leading-tight">SQLite architecture decision accepted and stamped.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-150 rounded-lg p-[0.8cqw] flex flex-col justify-between opacity-50">
                    <span className="font-bold text-[0.95cqw] text-slate-500 border-b border-slate-150 pb-0.5 mb-1 flex justify-between">
                      <span>#20 Benchmarks</span>
                      <span className="text-[0.8cqw] text-slate-400 bg-slate-100 px-1.5 rounded border border-slate-150 font-bold font-mono">BACKLOG</span>
                    </span>
                    <p className="text-[0.8cqw] text-slate-400 leading-tight">Edge models benchmark comparisons planned for Phase 2.</p>
                  </div>
                </div>
              </div>
            );
          case 5: // Extreme: Real annotated full-scale Markdown issue brief with a gorgeous code block containing git diff
          default:
            return (
              <div className="flex flex-col justify-between h-full text-[0.8cqw]">
                <div className="flex justify-between items-center border-b border-slate-200 pb-[0.5cqw] font-mono text-slate-500">
                  <div className="flex items-center gap-2">
                    <GitPullRequest className="w-4 h-4 text-purple-600" />
                    <span className="font-bold text-slate-800">PR #1409: finally-connection-release</span>
                  </div>
                  <span className="text-slate-400">files changed: 1</span>
                </div>
                <div className="flex-1 flex flex-col justify-center my-[0.5cqw]">
                  <div className="bg-[#f6f8fa] border border-slate-200 rounded-md overflow-hidden">
                    <div className="bg-slate-100 border-b border-slate-200 py-[0.4cqw] px-[0.8cqw] font-mono text-slate-600 font-bold text-[0.75cqw] flex justify-between">
                      <span>src/db/pool_manager.js</span>
                      <span className="font-normal text-slate-400">@@ -14,7 +14,8 @@</span>
                    </div>
                    <pre className="font-mono text-[0.75cqw] leading-tight p-[0.8cqw] text-slate-700 bg-white">
                      <div>  async function handleQuery(sql) &#123;</div>
                      <div className="bg-red-50 text-red-700 font-bold w-full px-1 -mx-1"><span className="opacity-50 select-none">- </span>  const conn = await pool.acquire(); return conn.query(sql);</div>
                      <div className={`bg-emerald-50 text-emerald-700 font-bold w-full px-1 -mx-1 ${getBeatClass(0)}`}><span className="opacity-50 select-none">+ </span>  const conn = await pool.acquire();</div>
                      <div className={`bg-emerald-50 text-emerald-700 font-bold w-full px-1 -mx-1 ${getBeatClass(1)}`}><span className="opacity-50 select-none">+ </span>  try &#123; return await conn.query(sql); &#125;</div>
                      <div className={`bg-emerald-50 text-emerald-700 font-bold w-full px-1 -mx-1 ${getBeatClass(2)}`}><span className="opacity-50 select-none">+ </span>  finally &#123; pool.release(conn); &#125;</div>
                      <div>  &#125;</div>
                    </pre>
                  </div>
                </div>
                <div className="text-slate-400 italic text-center font-mono text-[0.75cqw]">
                  Annotated patch enforces deterministic pool release regardless of query outcomes.
                </div>
              </div>
            );
        }
      };

      return (
        <div className={`w-[42cqw] h-[31cqw] bg-white border border-slate-200 rounded-xl p-[1.8cqw] flex flex-col justify-between text-slate-850 relative ${finalClass} shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${transitionBase}`}>
          {renderSceneContent()}
        </div>
      );
    }

    case "19": { // Decision Record (ADR)
      const renderSceneContent = () => {
        switch (scene) {
          case 1: // Ultralight: Single giant statement
            return (
              <div className="flex flex-col justify-center h-full px-[2cqw] text-left">
                <span className="font-mono text-[0.9cqw] text-green-700 font-bold uppercase tracking-widest block mb-2">[ADR-009 • RESOLVED]</span>
                <h3 className="font-sans font-black text-slate-900 text-[2.2cqw] leading-tight">
                  Adopt SQLite WASM with Origin Private File System for robust offline-first synchronization.
                </h3>
                <p className="text-slate-500 mt-[1cqw] text-[1.1cqw]">
                  Bypassing browser IndexedDB storage limitations to maintain robust schema durability.
                </p>
              </div>
            );
          case 2: // Light: 2 balanced comparative sections
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center border-b border-slate-200 pb-[0.6cqw]">
                  <span className="font-sans font-extrabold text-slate-800 text-[1.1cqw]">ADR Storage Comparison</span>
                  <span className="text-slate-400 font-mono text-[0.85cqw]">STATUS: ACCEPTED</span>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-[1.5cqw] mt-[1.2cqw] text-[0.9cqw]">
                  <div className={`bg-slate-50 border border-slate-200 p-[1cqw] rounded relative ${getBeatClass(0)}`}>
                    <div className="flex justify-between items-start border-b border-slate-200 pb-1.5 mb-2">
                      <span className="font-bold text-slate-800 font-mono">IndexedDB Option</span>
                      <span className="text-red-600 font-mono font-bold text-[0.75cqw] uppercase tracking-wider flex items-center gap-0.5 bg-red-50 border border-red-100 px-1 rounded"><XCircle className="w-3 h-3" /> Rejected</span>
                    </div>
                    <p className="text-slate-600 leading-snug">
                      Unreliable batch query bounds. Transaction times scale poorly past 100MB constraints.
                    </p>
                  </div>
                  <div className={`bg-green-50/20 border border-green-300 p-[1cqw] rounded relative ${getBeatClass(1)}`}>
                    <div className="flex justify-between items-start border-b border-green-200 pb-1.5 mb-2">
                      <span className="font-bold text-green-900 font-mono">SQLite WASM (OPFS)</span>
                      <span className="text-green-700 font-mono font-bold text-[0.75cqw] uppercase tracking-wider flex items-center gap-0.5 bg-green-50 border border-green-200 px-1 rounded"><CheckCircle2 className="w-3 h-3" /> Approved</span>
                    </div>
                    <p className="text-green-800 leading-snug">
                      Provides ACID guarantees directly inside browser threads, processing 10x larger datasets cleanly.
                    </p>
                  </div>
                </div>
              </div>
            );
          case 3: // Standard: 3 columns checkbook grid/workflow
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center border-b border-slate-200 pb-[0.5cqw]">
                  <span className="font-sans font-bold text-slate-850 text-[1.1cqw]">Decision Evaluation Workflow</span>
                  <span className="text-[0.9cqw] text-slate-400 font-mono">SECTION IV</span>
                </div>
                <div className="flex-1 grid grid-cols-3 gap-[1cqw] mt-[1.2cqw] text-[0.85cqw] leading-tight">
                  <div className={`bg-slate-50 border border-slate-200 p-[1cqw] rounded flex flex-col justify-between ${getBeatClass(0)}`}>
                    <div>
                      <span className="font-mono text-slate-400 text-[0.75cqw] block uppercase mb-1">01 • Context</span>
                      <h4 className="font-black text-slate-800 text-[0.95cqw] mb-1">Scale Constraints</h4>
                      <p className="text-slate-600">Sync workloads require 5,000 queries per cycle.</p>
                    </div>
                  </div>
                  <div className={`bg-slate-50 border border-slate-200 p-[1cqw] rounded flex flex-col justify-between ${getBeatClass(1)}`}>
                    <div>
                      <span className="font-mono text-slate-400 text-[0.75cqw] block uppercase mb-1">02 • Decision</span>
                      <h4 className="font-black text-slate-800 text-[0.95cqw] mb-1">ACID Transaction</h4>
                      <p className="text-slate-600">SQLite transactions guarantee durability limits.</p>
                    </div>
                  </div>
                  <div className={`bg-slate-50 border border-slate-200 p-[1cqw] rounded flex flex-col justify-between ${getBeatClass(2)}`}>
                    <div>
                      <span className="font-mono text-slate-400 text-[0.75cqw] block uppercase mb-1">03 • Outcome</span>
                      <h4 className="font-black text-slate-800 text-[0.95cqw] mb-1">Zero Lockouts</h4>
                      <p className="text-slate-600">Durability threshold achieved under multi-process constraints.</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          case 4: // Dense: 2x2 administrative quadrants / status card boards
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center border-b border-slate-200 pb-[0.4cqw]">
                  <span className="font-sans font-bold text-slate-800 text-[1.1cqw]">ADR Criteria Matrix</span>
                  <span className="text-[0.9cqw] text-slate-400 font-mono">EVALUATION</span>
                </div>
                <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-[1cqw] mt-[1cqw]">
                  <div className={`bg-slate-50 border border-slate-200 rounded p-[0.8cqw] flex flex-col justify-between ${getBeatClass(0)}`}>
                    <span className="font-bold text-[0.95cqw] text-slate-800 border-b border-slate-150 pb-0.5 mb-1 block font-mono">01. Durability</span>
                    <p className="text-[0.8cqw] text-slate-500 leading-tight">OPFS file-level locks protect sync transactions against tab crashes.</p>
                  </div>
                  <div className={`bg-slate-50 border border-slate-200 rounded p-[0.8cqw] flex flex-col justify-between ${getBeatClass(1)}`}>
                    <span className="font-bold text-[0.95cqw] text-slate-800 border-b border-slate-150 pb-0.5 mb-1 block font-mono">02. Velocity</span>
                    <p className="text-[0.8cqw] text-slate-500 leading-tight">SQLite WASM executes compiled queries 10x faster than WebSQL iterations.</p>
                  </div>
                  <div className={`bg-slate-50 border border-slate-200 rounded p-[0.8cqw] flex flex-col justify-between ${getBeatClass(2)}`}>
                    <span className="font-bold text-[0.95cqw] text-slate-800 border-b border-slate-150 pb-0.5 mb-1 block font-mono">03. Storage Cap</span>
                    <p className="text-[0.8cqw] text-slate-500 leading-tight">Exceeding 250MB browser sandboxing allocations cleanly.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-150 rounded p-[0.8cqw] flex flex-col justify-between opacity-50">
                    <span className="font-bold text-[0.95cqw] text-slate-500 border-b border-slate-150 pb-0.5 mb-1 block font-mono">04. Cost Index</span>
                    <p className="text-[0.8cqw] text-slate-400 leading-tight">Requires no external server memory provisioning.</p>
                  </div>
                </div>
              </div>
            );
          case 5: // Extreme: Dense 10x6 benchmarks matrices / checklist ledgers
          default: {
            // Rows for checklist matrix
            const items = [
              { name: "1. Durability (ACID)", web: "No", wasm: "Yes" },
              { name: "2. Performance (Batch)", web: "Low", wasm: "High" },
              { name: "3. Local Threading", web: "Blocked", wasm: "Worker" },
              { name: "4. Multi-Tab Lock", web: "Fragile", wasm: "Stable" },
              { name: "5. Size Capacity Limits", web: "<50MB", wasm: ">2GB" },
              { name: "6. Recovery Integrity", web: "Medium", wasm: "High" }
            ];
            return (
              <div className="flex flex-col justify-between h-full text-[0.8cqw]">
                <div className="flex justify-between items-center border-b border-slate-200 pb-[0.5cqw]">
                  <span className="font-sans font-bold text-slate-800">TABLE 2. ADR SPECIFICATIONS MATRIX</span>
                  <span className="font-mono text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200 font-bold">CERTIFIED ADR</span>
                </div>
                <div className="flex-1 flex flex-col justify-center my-[0.5cqw]">
                  <table className="w-full text-left font-sans border-collapse">
                    <thead>
                      <tr className="border-b-2 border-slate-400 text-slate-800 font-bold font-mono">
                        <th className="py-[0.4cqw]">Storage Attribute</th>
                        <th className="py-[0.4cqw] text-center">IndexedDB (Default)</th>
                        <th className="py-[0.4cqw] text-center bg-green-50/40 text-green-950">SQLite WASM (OPFS)</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-600 font-mono text-[0.75cqw]">
                      {items.map((item, idx) => (
                        <tr key={idx} className={`border-b border-slate-100 hover:bg-slate-50/50 ${getBeatClass(Math.min(idx, 2))}`}>
                          <td className="py-[0.3cqw] font-sans font-bold text-slate-800">{item.name}</td>
                          <td className="py-[0.3cqw] text-center text-red-700 font-semibold">{item.web}</td>
                          <td className="py-[0.3cqw] text-center bg-green-50/30 text-green-800 font-bold">{item.wasm}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="text-slate-400 italic text-center font-mono text-[0.75cqw]">
                  Approved and locked as standard durability system under sync specifications ADR 009.
                </div>
              </div>
            );
          }
        }
      };

      // "ACCEPTED" Administrative watermark stamp
      const renderStamp = () => {
        return (
          <div className={`absolute top-[4cqw] right-[4cqw] border-4 border-emerald-500 text-emerald-500 font-mono font-black rounded-lg px-[0.8cqw] py-[0.4cqw] uppercase text-[1.2cqw] rotate-[12deg] tracking-widest pointer-events-none select-none ${getBeatClass(1)} bg-white/85 shadow-md border-double border-8`}>
            ACCEPTED
          </div>
        );
      };

      return (
        <div className={`w-[42cqw] h-[31cqw] bg-[#f8fafc] border border-slate-200 rounded p-[1.8cqw] flex flex-col justify-between text-slate-900 relative ${finalClass} shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] ${transitionBase}`}>
          {renderSceneContent()}
          {renderStamp()}
        </div>
      );
    }

    case "20": { // Benchmark Matrix
      const renderSceneContent = () => {
        switch (scene) {
          case 1: // Ultralight: Single giant statement / text quote block
            return (
              <div className="flex flex-col justify-center h-full px-[2cqw]">
                <span className="text-[1cqw] text-blue-600 font-bold font-mono tracking-widest block mb-2">TARGET PERFORMANCE BASELINE</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-sans font-black text-[4cqw] text-blue-600">45ms</span>
                  <span className="text-slate-400 text-[1.2cqw]">Limit Threshold</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full border border-slate-200 overflow-hidden mt-4">
                  <div className="h-full bg-blue-600" style={getScaleXStyle(0, "100%")} />
                </div>
                <p className="text-slate-500 mt-[1cqw] text-[1cqw]">
                  Maximum acceptable sub-second processing limit allocated for dynamic edge compilation cycles.
                </p>
              </div>
            );
          case 2: // Light: 2 balanced side-by-side comparative ledger sections
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center border-b border-slate-200 pb-[0.6cqw]">
                  <span className="font-sans font-bold text-slate-800 text-[1.1cqw]">Comparative Benchmark Run</span>
                  <span className="text-[0.9cqw] text-slate-400 font-mono">LATENCY RATIO</span>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-[1.5cqw] my-2 text-[0.95cqw]">
                  <div className={`${getBeatClass(0)}`}>
                    <div className="flex justify-between font-mono mb-1 font-bold">
                      <span className="text-slate-800">Standard Node Server</span>
                      <span className="text-red-600">142ms</span>
                    </div>
                    <div className="h-3.5 bg-slate-100 rounded-full border border-slate-200 overflow-hidden">
                      <div className="h-full bg-red-500" style={getScaleXStyle(0, "100%")} />
                    </div>
                  </div>
                  <div className={`${getBeatClass(1)}`}>
                    <div className="flex justify-between font-mono mb-1 font-bold">
                      <span className="text-blue-700">WASM Edge-Optimized Core</span>
                      <span className="text-blue-600">12ms (Approved)</span>
                    </div>
                    <div className="h-3.5 bg-slate-100 rounded-full border border-slate-200 overflow-hidden">
                      <div className="h-full bg-blue-500" style={getScaleXStyle(1, "12%")} />
                    </div>
                  </div>
                </div>
              </div>
            );
          case 3: // Standard: 3 columns checkbook grids / vertical steps
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center border-b border-slate-200 pb-[0.5cqw]">
                  <span className="font-sans font-bold text-slate-850 text-[1.1cqw]">Three-Stage Compilation Bounds</span>
                  <span className="text-[0.9cqw] text-slate-400 font-mono">LIMITS</span>
                </div>
                <div className="flex-1 grid grid-cols-3 gap-[1cqw] mt-[1.2cqw] text-[0.9cqw]">
                  <div className={`bg-slate-50 border border-slate-200 p-[0.8cqw] rounded flex flex-col justify-between ${getBeatClass(0)}`}>
                    <div>
                      <span className="font-mono text-slate-400 text-[0.75cqw] block mb-1">AST SCANS</span>
                      <span className="font-sans font-black text-slate-900 text-[1.3cqw] block">3.1ms</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden mt-2">
                      <div className="h-full bg-indigo-500" style={getScaleXStyle(0, "40%")} />
                    </div>
                  </div>
                  <div className={`bg-slate-50 border border-slate-200 p-[0.8cqw] rounded flex flex-col justify-between ${getBeatClass(1)}`}>
                    <div>
                      <span className="font-mono text-slate-400 text-[0.75cqw] block mb-1">TYPE REFINING</span>
                      <span className="font-sans font-black text-slate-900 text-[1.3cqw] block">1.8ms</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden mt-2">
                      <div className="h-full bg-indigo-500" style={getScaleXStyle(1, "20%")} />
                    </div>
                  </div>
                  <div className={`bg-slate-50 border border-slate-200 p-[0.8cqw] rounded flex flex-col justify-between ${getBeatClass(2)}`}>
                    <div>
                      <span className="font-mono text-slate-400 text-[0.75cqw] block mb-1">EMISSION PATH</span>
                      <span className="font-sans font-black text-slate-900 text-[1.3cqw] block">6.2ms</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden mt-2">
                      <div className="h-full bg-indigo-500" style={getScaleXStyle(2, "80%")} />
                    </div>
                  </div>
                </div>
              </div>
            );
          case 4: // Dense: 2x2 administrative quadrants / status card boards
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center border-b border-slate-200 pb-[0.4cqw]">
                  <span className="font-sans font-bold text-slate-800 text-[1.1cqw]">Benchmark Quadrant Scores</span>
                  <span className="text-[0.9cqw] text-slate-400 font-mono">4 COMPARTMENTS</span>
                </div>
                <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-[1cqw] mt-[1cqw]">
                  <div className={`border border-slate-200 rounded p-[0.8cqw] flex flex-col justify-between ${getBeatClass(0)}`}>
                    <div className="flex justify-between items-center border-b border-slate-150 pb-0.5">
                      <span className="font-bold text-slate-800 text-[0.9cqw] font-mono">01. Latency Score</span>
                      <span className="text-emerald-600 font-bold text-[0.8cqw]">98%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden mt-1.5">
                      <div className="h-full bg-emerald-500" style={getScaleXStyle(0, "98%")} />
                    </div>
                  </div>
                  <div className={`border border-slate-200 rounded p-[0.8cqw] flex flex-col justify-between ${getBeatClass(1)}`}>
                    <div className="flex justify-between items-center border-b border-slate-150 pb-0.5">
                      <span className="font-bold text-slate-800 text-[0.9cqw] font-mono">02. Memory Swell</span>
                      <span className="text-blue-600 font-bold text-[0.8cqw]">84%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden mt-1.5">
                      <div className="h-full bg-blue-500" style={getScaleXStyle(1, "84%")} />
                    </div>
                  </div>
                  <div className={`border border-slate-200 rounded p-[0.8cqw] flex flex-col justify-between ${getBeatClass(2)}`}>
                    <div className="flex justify-between items-center border-b border-slate-150 pb-0.5">
                      <span className="font-bold text-slate-800 text-[0.9cqw] font-mono">03. Thread Safety</span>
                      <span className="text-blue-600 font-bold text-[0.8cqw]">100%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden mt-1.5">
                      <div className="h-full bg-blue-500" style={getScaleXStyle(2, "100%")} />
                    </div>
                  </div>
                  <div className="border border-slate-150 rounded p-[0.8cqw] flex flex-col justify-between opacity-50">
                    <div className="flex justify-between items-center border-b border-slate-150 pb-0.5">
                      <span className="font-bold text-slate-500 text-[0.9cqw] font-mono">04. Cost Ratio</span>
                      <span className="text-slate-400 font-bold text-[0.8cqw]">12%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden mt-1.5">
                      <div className="h-full bg-slate-400" style={{ width: "12%" }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          case 5: // Extreme: Dense 10x6 benchmarks matrices
          default: {
            const models = [
              { name: "WASM-Core v1", latency: "12ms", accuracy: "99.1%", memory: "14MB", cpu: "1.2%", score: 98 },
              { name: "Node-JS v18", latency: "142ms", accuracy: "98.8%", memory: "112MB", cpu: "14.0%", score: 45 },
              { name: "Go-Static v2", latency: "24ms", accuracy: "99.0%", memory: "38MB", cpu: "2.4%", score: 89 },
              { name: "Python-Fast", latency: "312ms", accuracy: "98.5%", memory: "180MB", cpu: "28.5%", score: 28 },
              { name: "Rust-Safe v1", latency: "8ms", accuracy: "99.2%", memory: "8MB", cpu: "0.8%", score: 100 },
              { name: "C-Optimized", latency: "6ms", accuracy: "97.4%", memory: "4MB", cpu: "0.5%", score: 91 }
            ];
            return (
              <div className="flex flex-col justify-between h-full text-[0.8cqw]">
                <div className="flex justify-between items-center border-b border-slate-200 pb-[0.4cqw] font-mono">
                  <span className="font-bold text-slate-800">10x6 COMPREHENSIVE BENCHMARKS MATRIX</span>
                  <span className="text-blue-600 bg-blue-50 px-1.5 rounded border border-blue-100 font-bold">100% AUDITED</span>
                </div>
                <div className="flex-1 flex flex-col justify-center my-[0.4cqw]">
                  <table className="w-full text-left font-sans border-collapse">
                    <thead>
                      <tr className="border-b-2 border-slate-400 text-slate-700 font-mono text-[0.75cqw] font-bold">
                        <th className="py-[0.3cqw]">Target Engine</th>
                        <th className="py-[0.3cqw] text-right">Latency</th>
                        <th className="py-[0.3cqw] text-right">Accuracy</th>
                        <th className="py-[0.3cqw] text-right">RAM Fit</th>
                        <th className="py-[0.3cqw] text-right">Score Bar</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-600 font-mono text-[0.7cqw]">
                      {models.map((m, idx) => (
                        <tr key={idx} className={`border-b border-slate-100 hover:bg-slate-50/50 ${getBeatClass(Math.min(idx, 2))}`}>
                          <td className="py-[0.3cqw] font-sans font-bold text-slate-800">{m.name}</td>
                          <td className="py-[0.3cqw] text-right">{m.latency}</td>
                          <td className="py-[0.3cqw] text-right">{m.accuracy}</td>
                          <td className="py-[0.3cqw] text-right">{m.memory}</td>
                          <td className="py-[0.3cqw] pl-[1cqw]">
                            <div className="flex items-center justify-end gap-1.5">
                              <div className="w-[6cqw] h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                <div className={`h-full ${m.score >= 90 ? "bg-emerald-500" : m.score >= 70 ? "bg-blue-500" : m.score >= 40 ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${m.score}%` }} />
                              </div>
                              <span className="w-[2cqw] text-right text-[0.65cqw] font-bold">{m.score}%</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="text-slate-400 italic text-center font-mono text-[0.7cqw]">
                  Edge compilation benchmarks compiled automatically inside sandboxed pipeline runtimes.
                </div>
              </div>
            );
          }
        }
      };

      return (
        <div className={`w-[42cqw] h-[31cqw] bg-white border border-slate-200 rounded-xl p-[1.8cqw] flex flex-col justify-between text-slate-800 relative ${finalClass} shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] ${transitionBase}`}>
          {renderSceneContent()}
        </div>
      );
    }

    case "21": { // Field Notes Report
      const renderSceneContent = () => {
        switch (scene) {
          case 1: // Ultralight: Single giant statement
            return (
              <div className="flex flex-col justify-center h-full px-[2cqw] text-left">
                <span className="text-[1cqw] text-teal-600 font-bold font-mono tracking-widest block mb-2 uppercase">[Field Observation]</span>
                <p className="font-serif italic text-[#333333] text-[2cqw] leading-relaxed border-l-4 border-teal-500 pl-[1.5cqw]">
                  "Users consistently bypass dynamic voice assistants out of pure muscle memory, instinctively reaching for physical wall switches instead."
                </p>
                <div className="h-[1px] bg-stone-200 w-[10cqw] mt-4" />
                <span className="text-stone-400 font-mono text-[0.9cqw] mt-2">Subject Group B • Household Survey</span>
              </div>
            );
          case 2: // Light: 2 balanced side-by-side comparative ledger sections
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center border-b border-stone-200 pb-[0.6cqw]">
                  <span className="font-serif font-black text-stone-800 text-[1.2cqw]">Subject Group Contrast</span>
                  <span className="text-stone-400 font-mono text-[0.85cqw]">2 COHORTS</span>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-[1.5cqw] mt-[1.2cqw] text-[0.95cqw] leading-normal font-sans">
                  <div className={`border-r border-stone-200 pr-[1cqw] ${getBeatClass(0)}`}>
                    <span className="font-serif font-bold text-teal-700 text-[1.15cqw] block border-b border-stone-150 pb-0.5 mb-1.5">Group A: Urban Tech-Savvy</span>
                    <p className="text-stone-600 leading-snug">
                      Configured automation rules within 30 minutes, but expressed frustration at micro-lags in action cues.
                    </p>
                  </div>
                  <div className={`${getBeatClass(1)}`}>
                    <span className="font-serif font-bold text-teal-700 text-[1.15cqw] block border-b border-stone-150 pb-0.5 mb-1.5">Group B: Rural Baseline</span>
                    <p className="text-stone-600 leading-snug">
                      Bypassed system dashboards entirely. Retained existing mechanical switches to establish absolute trust bounds.
                    </p>
                  </div>
                </div>
              </div>
            );
          case 3: // Standard: 3 columns checkbook grids / vertical steps
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center border-b border-stone-200 pb-[0.5cqw]">
                  <span className="font-serif font-bold text-stone-850 text-[1.1cqw]">Key Field Research Findings</span>
                  <span className="text-[0.9cqw] text-stone-400 font-mono">OBSERVATIONS</span>
                </div>
                <div className="flex-1 grid grid-cols-3 gap-[1cqw] mt-[1.2cqw] text-[0.85cqw] leading-snug font-sans">
                  <div className={`bg-stone-50/50 border border-stone-200 p-[1cqw] rounded flex flex-col justify-between relative ${getBeatClass(0)}`}>
                    <div>
                      <span className="font-mono text-teal-600 text-[0.75cqw] block uppercase mb-1">Observation 01</span>
                      <h4 className="font-serif font-black text-stone-900 text-[1.05cqw] mb-1">Muscle Memory</h4>
                      <p className="text-stone-600">Instinctive action paths dominate voice interfaces.</p>
                    </div>
                  </div>
                  <div className={`bg-stone-50/50 border border-stone-200 p-[1cqw] rounded flex flex-col justify-between relative ${getBeatClass(1)}`}>
                    <div>
                      <span className="font-mono text-teal-600 text-[0.75cqw] block uppercase mb-1">Observation 02</span>
                      <h4 className="font-serif font-black text-stone-900 text-[1.05cqw] mb-1">Anxiety Triggers</h4>
                      <p className="text-stone-600">Cryptic error printouts handshake fail states.</p>
                    </div>
                  </div>
                  <div className={`bg-stone-50/50 border border-stone-200 p-[1cqw] rounded flex flex-col justify-between relative ${getBeatClass(2)}`}>
                    <div>
                      <span className="font-mono text-teal-600 text-[0.75cqw] block uppercase mb-1">Observation 03</span>
                      <h4 className="font-serif font-black text-stone-900 text-[1.05cqw] mb-1">Sync Trust</h4>
                      <p className="text-stone-600">Visual local indicators restore control bounds.</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          case 4: // Dense: 2x2 administrative quadrants / status card boards
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center border-b border-stone-200 pb-[0.4cqw]">
                  <span className="font-serif font-bold text-stone-800 text-[1.1cqw]">Research Observation Zones</span>
                  <span className="text-[0.9cqw] text-stone-400 font-mono">4 COMPARTMENTS</span>
                </div>
                <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-[1cqw] mt-[1cqw] font-sans">
                  <div className={`bg-[#fffdfb] border border-stone-200 rounded p-[0.8cqw] flex flex-col justify-between ${getBeatClass(0)}`}>
                    <span className="font-serif font-bold text-teal-800 border-b border-stone-150 pb-0.5 mb-1 block">Zone 1: Living Area</span>
                    <p className="text-[0.8cqw] text-stone-500 leading-tight">Bypassing dynamic assistant triggers. Retaining switch controls.</p>
                  </div>
                  <div className={`bg-[#fffdfb] border border-stone-200 rounded p-[0.8cqw] flex flex-col justify-between ${getBeatClass(1)}`}>
                    <span className="font-serif font-bold text-teal-800 border-b border-stone-150 pb-0.5 mb-1 block">Zone 2: Kitchen Prep</span>
                    <p className="text-[0.8cqw] text-stone-500 leading-tight">Frequent wet-hands contact locks out touch-screen panels.</p>
                  </div>
                  <div className={`bg-[#fffdfb] border border-stone-200 rounded p-[0.8cqw] flex flex-col justify-between ${getBeatClass(2)}`}>
                    <span className="font-serif font-bold text-teal-800 border-b border-stone-150 pb-0.5 mb-1 block">Zone 3: Bedroom Sync</span>
                    <p className="text-[0.8cqw] text-stone-500 leading-tight">LED level emissions past 5lm severely degrade sleep onset.</p>
                  </div>
                  <div className="bg-[#fffdfb] border border-stone-150 rounded p-[0.8cqw] flex flex-col justify-between opacity-50">
                    <span className="font-serif font-bold text-stone-500 border-b border-stone-150 pb-0.5 mb-1 block">Zone 4: Outer Perimeter</span>
                    <p className="text-[0.8cqw] text-stone-400 leading-tight">Network degradation bounds prompt device offline failure cascades.</p>
                  </div>
                </div>
              </div>
            );
          case 5: // Extreme: Full quantitative field notes matrix with tilted paper clip tags
          default: {
            const checklist = [
              { item: "Household Switching Sync", scale: "Rural Cohort", rate: "89% Mechanical Swivel" },
              { item: "Voice Loop Failure Response", scale: "Urban Cohort", rate: "12s Till Hard Reset" },
              { item: "Night Dashboard Lumens Bounds", scale: "Aged Cohort", rate: "No Emission Tolerated" },
              { item: "Emergency Router Blackouts", scale: "Rural Cohort", rate: "Local Battery Fallback" },
              { item: "Dynamic Trigger Accuracy", scale: "Overall Group", rate: "42% False Activation" }
            ];
            return (
              <div className="flex flex-col justify-between h-full text-[0.8cqw] font-sans">
                <div className="flex justify-between items-center border-b border-stone-200 pb-[0.4cqw] font-serif">
                  <span className="font-bold text-stone-850">QUALITATIVE FIELD RECORDS INDEX</span>
                  <span className="font-mono text-[0.75cqw] text-teal-700 bg-teal-50 px-1.5 rounded border border-teal-150">LEDGER-02</span>
                </div>
                <div className="flex-1 flex flex-col justify-center my-[0.4cqw]">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-stone-400 text-stone-800 font-serif font-bold">
                        <th className="py-[0.3cqw]">Observed Parameter</th>
                        <th className="py-[0.3cqw]">Target Audience</th>
                        <th className="py-[0.3cqw] text-right">Empirical Behavior Outcome</th>
                      </tr>
                    </thead>
                    <tbody className="text-stone-600 font-mono text-[0.75cqw]">
                      {checklist.map((c, idx) => (
                        <tr key={idx} className={`border-b border-stone-100 hover:bg-stone-50/50 ${getBeatClass(Math.min(idx, 2))}`}>
                          <td className="py-[0.3cqw] font-sans font-bold text-stone-800">{c.item}</td>
                          <td className="py-[0.3cqw]">{c.scale}</td>
                          <td className="py-[0.3cqw] text-right text-teal-700 font-bold">{c.rate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="text-stone-400 italic text-center font-mono text-[0.7cqw]">
                  Data verified in-situ using manual tracking ledger sweeps.
                </div>
              </div>
            );
          }
        }
      };

      // Tilted metal paperclip SVG (aesthetic requirement)
      const renderPaperclip = () => {
        return (
          <div className="absolute top-[-0.2cqw] right-[1.5cqw] w-[2.8cqw] h-[5cqw] rotate-[-15deg] pointer-events-none select-none z-20">
            <svg viewBox="0 0 24 50" className="w-full h-full text-stone-400 drop-shadow-[1px_2px_2px_rgba(0,0,0,0.12)]">
              {/* Paperclip path */}
              <path 
                d="M 6,38 L 6,10 A 6,6 0 0,1 18,10 L 18,34 A 4,4 0 0,1 10,34 L 10,12 A 2,2 0 0,1 14,12 L 14,32 A 1,1 0 0,0 16,32 L 18,10 A 5,5 0 0,0 8,10 L 8,36 A 5,5 0 0,0 18,36" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
              />
            </svg>
          </div>
        );
      };

      return (
        <div className={`w-[42cqw] h-[31cqw] bg-[#fdfbf7] border border-stone-200 p-[1.8cqw] relative flex flex-col justify-between font-serif text-stone-800 ${finalClass} shadow-[0_4px_25px_-5px_rgba(0,0,0,0.06)] ${transitionBase} overflow-hidden`}>
          {renderPaperclip()}
          {/* Notebook line simulator grid */}
          <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none opacity-[0.06] flex flex-col justify-between py-[1.8cqw] px-[1.8cqw]" style={{
            backgroundImage: "linear-gradient(#333333 1px, transparent 1px)",
            backgroundSize: "100% 2.8cqh"
          }} />
          <div className="z-10 h-full flex flex-col justify-between">
            {renderSceneContent()}
          </div>
        </div>
      );
    }

    case "22": { // Operating Manual (Industrial Amber Console)
      const renderSceneContent = () => {
        switch (scene) {
          case 1: // Ultralight: Single giant statement
            return (
              <div className="flex flex-col justify-center h-full px-[1cqw]">
                <div className="flex items-center gap-3 text-amber-500 mb-2">
                  <AlertTriangle className="w-8 h-8 animate-pulse text-amber-500" />
                  <span className="font-mono text-[1.1cqw] font-bold tracking-wider">WARN_SYS_CON_EXHAUSTED</span>
                </div>
                <h3 className="font-mono font-black text-white text-[1.8cqw] leading-tight uppercase">
                  CRITICAL WARNING: Database query pool has reached peak transactional exhaustion parameters.
                </h3>
                <p className="text-amber-400 mt-[1cqw] text-[1cqw] font-mono opacity-90">
                  Enforce recovery procedure Runbook RC-22 immediately to avert safe state shutdown.
                </p>
              </div>
            );
          case 2: // Light: 2 balanced side-by-side comparative ledger sections
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center border-b border-neutral-800 pb-[0.6cqw]">
                  <span className="font-mono font-bold text-amber-500 text-[1cqw]">DUAL PANEL MONITOR</span>
                  <span className="text-white/40 font-mono text-[0.8cqw]">MODE: DIAGNOSTIC</span>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-[1.5cqw] mt-[1.2cqw] font-mono text-[0.85cqw]">
                  <div className={`bg-neutral-900 border border-neutral-800 p-[1cqw] rounded relative ${getBeatClass(0)}`}>
                    <span className="text-red-500 font-bold block border-b border-neutral-800 pb-1 mb-2">CRITICAL EXHAUSTION</span>
                    <p className="text-white/80 leading-snug">
                      Active connections: 100/100<br />
                      Queue depth: 1,420 cycles<br />
                      Swell rate: +42% s-1
                    </p>
                  </div>
                  <div className={`bg-neutral-900 border border-amber-500/50 p-[1cqw] rounded relative ${getBeatClass(1)}`}>
                    <span className="text-emerald-400 font-bold block border-b border-neutral-800 pb-1 mb-2">RECOVERY SHUNT</span>
                    <p className="text-emerald-300 leading-snug">
                      Traffic routed: 100%<br />
                      Emergency pool: ACTIVE<br />
                      Sync baseline: RESTORED
                    </p>
                  </div>
                </div>
              </div>
            );
          case 3: // Standard: 3 columns checkbook grids / vertical steps
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center border-b border-neutral-800 pb-[0.5cqw]">
                  <span className="font-mono font-bold text-amber-500 text-[1cqw]">RECOVERY PROTOCOL CHECK</span>
                  <span className="text-[0.9cqw] text-white/40 font-mono">RC-22</span>
                </div>
                <div className="flex-1 flex flex-col gap-[0.8cqw] mt-[1.2cqw] font-mono text-[0.85cqw]">
                  <div className={`flex items-center justify-between border border-neutral-800 bg-neutral-900 p-[0.6cqw] rounded ${getBeatClass(0)}`}>
                    <div className="flex items-center gap-2.5">
                      <input type="checkbox" checked={beat >= 0} readOnly className="accent-amber-500 w-3.5 h-3.5" />
                      <span className={beat >= 0 ? "text-white" : "text-white/30"}>[01] Evaluate baseline matrix metrics</span>
                    </div>
                    <span className="text-emerald-500 font-bold text-[0.75cqw] bg-emerald-950 px-1.5 py-0.5 rounded">PASSED</span>
                  </div>
                  <div className={`flex items-center justify-between border border-neutral-800 bg-neutral-900 p-[0.6cqw] rounded ${getBeatClass(1)}`}>
                    <div className="flex items-center gap-2.5">
                      <input type="checkbox" checked={beat >= 1} readOnly className="accent-amber-500 w-3.5 h-3.5" />
                      <span className={beat >= 1 ? "text-white" : "text-white/30"}>[02] Shunt active connection pools</span>
                    </div>
                    <span className="text-emerald-500 font-bold text-[0.75cqw] bg-emerald-950 px-1.5 py-0.5 rounded">PASSED</span>
                  </div>
                  <div className={`flex items-center justify-between border border-amber-500/40 bg-neutral-900 p-[0.6cqw] rounded ${getBeatClass(2)}`}>
                    <div className="flex items-center gap-2.5">
                      <input type="checkbox" checked={beat >= 2} readOnly className="accent-amber-500 w-3.5 h-3.5" />
                      <span className={beat >= 2 ? "text-amber-400 font-bold" : "text-white/30"}>[03] Restored stable health checks</span>
                    </div>
                    <span className={`font-bold text-[0.75cqw] px-1.5 py-0.5 rounded ${beat >= 2 ? "bg-amber-950 text-amber-500 animate-pulse" : "bg-neutral-800 text-white/30"}`}>
                      {beat >= 2 ? "ACTIVE" : "PENDING"}
                    </span>
                  </div>
                </div>
              </div>
            );
          case 4: // Dense: 2x2 administrative quadrants / status card boards
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center border-b border-neutral-800 pb-[0.4cqw]">
                  <span className="font-mono font-bold text-amber-500 text-[1cqw]">SUB-SYSTEM PARAMETERS</span>
                  <span className="text-[0.9cqw] text-white/40 font-mono">SECTORS</span>
                </div>
                <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-[1cqw] mt-[1cqw] font-mono">
                  <div className={`border border-neutral-800 rounded p-[0.8cqw] flex flex-col justify-between ${getBeatClass(0)}`}>
                    <span className="font-bold text-[0.9cqw] text-white border-b border-neutral-800 pb-0.5 mb-1 flex justify-between">
                      <span>SEC_01: POOL</span>
                      <span className="text-red-500">98%</span>
                    </span>
                    <p className="text-[0.75cqw] text-white/60 leading-tight">Saturation indices exceeding normal boundary levels.</p>
                  </div>
                  <div className={`border border-neutral-800 rounded p-[0.8cqw] flex flex-col justify-between ${getBeatClass(1)}`}>
                    <span className="font-bold text-[0.9cqw] text-white border-b border-neutral-800 pb-0.5 mb-1 flex justify-between">
                      <span>SEC_02: CACHE</span>
                      <span className="text-emerald-400">89%</span>
                    </span>
                    <p className="text-[0.75cqw] text-white/60 leading-tight">Index reads bypassed memory exhaustion constraints cleanly.</p>
                  </div>
                  <div className={`border border-neutral-800 rounded p-[0.8cqw] flex flex-col justify-between ${getBeatClass(2)}`}>
                    <span className="font-bold text-[0.9cqw] text-white border-b border-neutral-800 pb-0.5 mb-1 flex justify-between">
                      <span>SEC_03: MEM</span>
                      <span className="text-emerald-400">SAFE</span>
                    </span>
                    <p className="text-[0.75cqw] text-white/60 leading-tight">Buffer leaks successfully garbage audited.</p>
                  </div>
                  <div className="border border-neutral-900 rounded p-[0.8cqw] flex flex-col justify-between opacity-30">
                    <span className="font-bold text-[0.9cqw] text-white/50 border-b border-neutral-900 pb-0.5 mb-1 flex justify-between">
                      <span>SEC_04: SYNC</span>
                      <span>STBY</span>
                    </span>
                    <p className="text-[0.75cqw] text-white/40 leading-tight">External replication queues standing by for release clearance.</p>
                  </div>
                </div>
              </div>
            );
          case 5: // Extreme: Real annotated recovery manual / IDE-style recovery script showing full-scale shell diagnostic logs
          default:
            return (
              <div className="flex flex-col justify-between h-full font-mono text-[0.8cqw]">
                <div className="flex justify-between items-center border-b border-neutral-800 pb-[0.4cqw] text-amber-500">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-4 h-4" />
                    <span className="font-bold">bash-interactive // manual-override</span>
                  </div>
                  <span className="text-white/40">PID: 8815</span>
                </div>
                <div className="flex-1 flex flex-col justify-center my-[0.4cqw] bg-black p-[0.8cqw] border border-neutral-800 rounded">
                  <div className="text-white/40">// Initializing manual pool override sequence...</div>
                  <div className="text-amber-500 font-bold">$ bytedcli pool recycle --force --all</div>
                  <div className={`text-white pl-[1cqw] ${getBeatClass(0)}`}>
                    [SYSTEM] Scanning pool configurations... found 8 active zombie threads.
                  </div>
                  <div className={`text-red-400 pl-[1cqw] font-bold ${getBeatClass(1)}`}>
                    [SYSTEM] Killing zombie thread PID_9942... SUCCESS.
                  </div>
                  <div className={`text-emerald-400 pl-[1cqw] font-bold ${getBeatClass(2)}`}>
                    [SYSTEM] Recycle complete. Active pool saturation decreased from 98% to 12%.
                  </div>
                  <div className="text-white/40 mt-1">$ _</div>
                </div>
                <div className="text-amber-500/80 italic text-center text-[0.75cqw] tracking-wide font-bold animate-pulse">
                  CRITICAL OVERRIDE COMPLETED • RECOVERY SANITY VERIFIED
                </div>
              </div>
            );
        }
      };

      // Amber industrial hazard stripe board
      const renderHazardStripes = () => {
        return (
          <div className="absolute inset-x-0 top-0 h-[0.5cqw] pointer-events-none select-none" style={{
            backgroundImage: "linear-gradient(45deg, #f59e0b 25%, #171717 25%, #171717 50%, #f59e0b 50%, #f59e0b 75%, #171717 75%, #171717 100%)",
            backgroundSize: "20px 20px"
          }} />
        );
      };

      return (
        <div className={`w-[42cqw] h-[31cqw] bg-[#0a0a0c] border-2 border-amber-500 rounded p-[1.8cqw] flex flex-col justify-between text-white relative ${finalClass} shadow-[0_0_30px_rgba(245,158,11,0.08)] ${transitionBase} overflow-hidden`}>
          {renderHazardStripes()}
          <div className="mt-[0.3cqw] h-full flex flex-col justify-between">
            {renderSceneContent()}
          </div>
        </div>
      );
    }

    case "23": { // Checklist Ledger (Accounting format)
      const renderSceneContent = () => {
        switch (scene) {
          case 1: // Ultralight: Single giant statement
            return (
              <div className="flex flex-col justify-center h-full px-[2cqw] text-left">
                <span className="font-mono text-[0.9cqw] text-emerald-800 font-bold uppercase tracking-widest block mb-2">[RELEASE LEDGER CERTIFICATION]</span>
                <h3 className="font-sans font-black text-emerald-950 text-[2cqw] leading-tight">
                  "The compiled release artifact successfully cleared 100% of integration, performance, and unit-test validation checks."
                </h3>
                {/* Accounting double underline total box */}
                <div className="mt-4 border-t border-emerald-300 pt-2 flex justify-between items-center">
                  <span className="font-mono text-emerald-700 font-bold text-[1cqw]">TOTAL INTEGRITY SCORE</span>
                  <span className="font-mono font-black text-[2.2cqw] text-emerald-900 border-b-4 border-double border-emerald-800 leading-none">100 / 100</span>
                </div>
              </div>
            );
          case 2: // Light: 2 balanced comparative sections
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center border-b border-emerald-400 pb-[0.6cqw]">
                  <span className="font-sans font-bold text-emerald-950 text-[1.1cqw]">Verification Ledger</span>
                  <span className="text-emerald-700 font-mono text-[0.85cqw]">DOUBLE COLUMN</span>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-[1.5cqw] mt-[1.2cqw] text-[0.95cqw] font-sans">
                  <div className={`border-r border-emerald-200 pr-[1cqw] ${getBeatClass(0)}`}>
                    <span className="font-mono font-bold text-emerald-800 block border-b border-emerald-200 pb-1 mb-1.5">Sector 01: Build Validity</span>
                    <p className="text-emerald-900 leading-snug">
                      AST constraints complied with design guidelines. Code compression ratios audited at 4.2x.
                    </p>
                  </div>
                  <div className={`${getBeatClass(1)}`}>
                    <span className="font-mono font-bold text-emerald-800 block border-b border-emerald-200 pb-1 mb-1.5">Sector 02: Safe Emission</span>
                    <p className="text-emerald-900 leading-snug">
                      Playwright E2E E2E browser tests registered 100% pass values across all sandbox matrix configurations.
                    </p>
                  </div>
                </div>
              </div>
            );
          case 3: // Standard: 3 columns checkbook grids / vertical steps
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center border-b border-emerald-400 pb-[0.5cqw]">
                  <span className="font-sans font-bold text-emerald-950 text-[1.1cqw]">Three-Channel Audit Checklist</span>
                  <span className="text-[0.9cqw] text-emerald-800 font-mono">STABLE LEDGER</span>
                </div>
                <div className="flex-1 grid grid-cols-3 gap-[1cqw] mt-[1.2cqw] text-[0.85cqw] leading-snug">
                  <div className={`bg-emerald-50/50 border border-emerald-200 p-[1cqw] rounded flex flex-col justify-between ${getBeatClass(0)}`}>
                    <div>
                      <span className="font-mono text-emerald-700 text-[0.75cqw] block mb-1">AUDIT 01</span>
                      <h4 className="font-black text-emerald-950 text-[1.05cqw] mb-1">Lexical Sweeps</h4>
                      <p className="text-emerald-800">Zero dynamic injections or raw shell escapes detected.</p>
                    </div>
                  </div>
                  <div className={`bg-emerald-50/50 border border-emerald-200 p-[1cqw] rounded flex flex-col justify-between ${getBeatClass(1)}`}>
                    <div>
                      <span className="font-mono text-emerald-700 text-[0.75cqw] block mb-1">AUDIT 02</span>
                      <h4 className="font-black text-emerald-950 text-[1.05cqw] mb-1">Linter Integrity</h4>
                      <p className="text-emerald-800">100% compliance checked against static standards.</p>
                    </div>
                  </div>
                  <div className={`bg-emerald-50/50 border border-emerald-200 p-[1cqw] rounded flex flex-col justify-between ${getBeatClass(2)}`}>
                    <div>
                      <span className="font-mono text-emerald-700 text-[0.75cqw] block mb-1">AUDIT 03</span>
                      <h4 className="font-black text-emerald-950 text-[1.05cqw] mb-1">Coverage Ratio</h4>
                      <p className="text-emerald-800">Checked values reached 94.2% block saturation index.</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          case 4: // Dense: 2x2 administrative quadrants / status card boards
            return (
              <div className="flex flex-col justify-between h-full font-sans">
                <div className="flex justify-between items-center border-b border-emerald-400 pb-[0.4cqw]">
                  <span className="font-bold text-emerald-950 text-[1.1cqw]">Compliance Quadrants</span>
                  <span className="text-[0.9cqw] text-emerald-700 font-mono">SECTORS</span>
                </div>
                <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-[1cqw] mt-[1cqw]">
                  <div className={`bg-[#fcfefe] border border-emerald-200 rounded p-[0.8cqw] flex flex-col justify-between ${getBeatClass(0)}`}>
                    <span className="font-bold text-[0.95cqw] text-emerald-900 border-b border-emerald-150 pb-0.5 mb-1 block font-mono">QI: Static Auditing</span>
                    <p className="text-[0.8cqw] text-emerald-800 leading-tight">Parsed files compiled with zero critical security markers.</p>
                  </div>
                  <div className={`bg-[#fcfefe] border border-emerald-200 rounded p-[0.8cqw] flex flex-col justify-between ${getBeatClass(1)}`}>
                    <span className="font-bold text-[0.95cqw] text-emerald-900 border-b border-emerald-150 pb-0.5 mb-1 block font-mono">QII: Sandboxing</span>
                    <p className="text-[0.8cqw] text-emerald-800 leading-tight">Runtime boundaries tested clean under restricted E2E environments.</p>
                  </div>
                  <div className={`bg-[#fcfefe] border border-emerald-200 rounded p-[0.8cqw] flex flex-col justify-between ${getBeatClass(2)}`}>
                    <span className="font-bold text-[0.95cqw] text-emerald-900 border-b border-emerald-150 pb-0.5 mb-1 block font-mono">QIII: Concurrency</span>
                    <p className="text-[0.8cqw] text-emerald-800 leading-tight">Locks audited securely under dual 10,000 parallel streams.</p>
                  </div>
                  <div className="bg-[#fcfefe] border border-emerald-150 rounded p-[0.8cqw] flex flex-col justify-between opacity-50">
                    <span className="font-bold text-[0.95cqw] text-emerald-700 border-b border-emerald-150 pb-0.5 mb-1 block font-mono">QIV: Static Output</span>
                    <p className="text-[0.8cqw] text-emerald-700 leading-tight">Emitted release files archived inside the master repository bounds.</p>
                  </div>
                </div>
              </div>
            );
          case 5: // Extreme: Dense 10x6 benchmarks matrices / checklists
          default: {
            const auditItems = [
              { target: "1. Lexer Syntax Validation", desc: "No dynamic expressions", status: "PASSED (100%)" },
              { target: "2. Secure Cipher Alignment", desc: "SHA-256 block limits", status: "PASSED (100%)" },
              { target: "3. Unit Test Coverage", desc: "Exceeded 85% safety bounds", status: "PASSED (89%)" },
              { target: "4. E2E Sandbox Playwright", desc: "Verified browser matrix", status: "PASSED (100%)" },
              { target: "5. Memory Overfill Auditing", desc: "Garbage pools checked", status: "PASSED (100%)" },
              { target: "6. Schema Compliance Audit", desc: "Signed by security core", status: "APPROVED" }
            ];
            return (
              <div className="flex flex-col justify-between h-full text-[0.8cqw] font-sans">
                <div className="flex justify-between items-center border-b border-emerald-400 pb-[0.4cqw] font-mono">
                  <span className="font-bold text-emerald-950">TABLE 3. COMPLIANCE AUDITING LEDGER</span>
                  <span className="text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200 font-bold">STABLE LEDGER</span>
                </div>
                <div className="flex-1 flex flex-col justify-center my-[0.4cqw]">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-emerald-400 text-emerald-900 font-mono text-[0.75cqw] font-bold">
                        <th className="py-[0.3cqw]">Audit Verification Target</th>
                        <th className="py-[0.3cqw]">Method Summary</th>
                        <th className="py-[0.3cqw] text-right">Status State</th>
                      </tr>
                    </thead>
                    <tbody className="text-emerald-800 font-mono text-[0.7cqw]">
                      {auditItems.map((ai, idx) => (
                        <tr key={idx} className={`border-b border-emerald-100 hover:bg-emerald-50/50 ${getBeatClass(Math.min(idx, 2))}`}>
                          <td className="py-[0.3cqw] font-sans font-bold text-emerald-950">{ai.target}</td>
                          <td className="py-[0.3cqw] text-emerald-700/80">{ai.desc}</td>
                          <td className="py-[0.3cqw] text-right text-emerald-700 font-bold">{ai.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="text-emerald-600/70 italic text-center font-mono text-[0.7cqw] border-t border-emerald-200 pt-1">
                  Double audit underlines enforce absolute certification index integrity.
                </div>
              </div>
            );
          }
        }
      };

      // Green administrative approved seal (Style 23)
      const renderGreenSeal = () => {
        return (
          <div className={`absolute bottom-[2cqw] right-[2cqw] w-[5.5cqw] h-[5.5cqw] opacity-40 hover:opacity-80 transition-opacity duration-300 pointer-events-none select-none ${getBeatClass(2)} z-20`}>
            <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-700">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,2" />
              <path d="M 32,52 L 45,65 L 68,36" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <text x="50" y="82" fontSize="9" textAnchor="middle" fontWeight="black" fontFamily="monospace" tracking="wider">APPROVED</text>
            </svg>
          </div>
        );
      };

      return (
        <div className={`w-[42cqw] h-[31cqw] bg-[#f4fbf7] border border-emerald-300 rounded p-[1.8cqw] flex flex-col justify-between text-[#111c16] relative ${finalClass} shadow-[0_4px_25px_rgba(16,185,129,0.04)] ${transitionBase} overflow-hidden`}>
          {renderGreenSeal()}
          {/* Background accounting grid lines */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{
            backgroundImage: "linear-gradient(#111c16 1px, transparent 1px)",
            backgroundSize: "100% 2.8cqh"
          }} />
          <div className="z-10 h-full flex flex-col justify-between">
            {renderSceneContent()}
          </div>
        </div>
      );
    }

    case "24": { // Annotated Source & Diff
      const renderSceneContent = () => {
        switch (scene) {
          case 1: // Ultralight: Single giant statement / text quote block
            return (
              <div className="flex flex-col justify-center h-full px-[1cqw]">
                <span className="text-[0.95cqw] text-emerald-500 font-mono tracking-widest block mb-2">// OPTIMIZATION CONTRACT</span>
                <div className="bg-black/40 border border-slate-800 p-[1.5cqw] rounded-lg font-mono text-[0.9cqw] leading-normal">
                  <div className="text-purple-400">const <span className="text-blue-400">executeLookup</span> = (userId) =&gt; &#123;</div>
                  <div className="text-[#e0e4e6]/50 pl-[1.5cqw]">// Elide full scans; enforce indexed single lookups.</div>
                  <div className="text-emerald-400 pl-[1.5cqw] font-bold">return db.users.findOne(&#123; id: userId &#125;);</div>
                  <div className="text-purple-400">&#125;;</div>
                </div>
                <p className="text-slate-400 mt-[1cqw] text-[0.85cqw] italic">
                  Enforces deterministic O(1) query complexity boundaries across workspace lookups.
                </p>
              </div>
            );
          case 2: // Light: 2 balanced side-by-side comparative sections
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center border-b border-slate-800 pb-[0.6cqw] text-[0.9cqw] text-slate-400 font-mono">
                  <span>BEFORE vs AFTER FIX</span>
                  <span className="text-emerald-500">OPTIMIZED</span>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-[1.2cqw] mt-[1.2cqw] text-[0.8cqw] font-mono leading-snug">
                  <div className={`bg-black/30 border border-slate-800 p-[1cqw] rounded-md ${getBeatClass(0)}`}>
                    <span className="text-red-500 font-bold block mb-1.5">// BEFORE: Full Table Scan</span>
                    <div className="opacity-45">{"let res = db.users.find();"}</div>
                    <div className="opacity-45">{"let out = res.filter("}</div>
                    <div className="opacity-45">{"  u => u.id === userId"}</div>
                    <div className="opacity-45">{");"}</div>
                    <span className="text-red-500 font-bold block mt-2 text-[0.7cqw]">Complexity: O(N)</span>
                  </div>
                  <div className={`bg-black/30 border border-slate-800 p-[1cqw] rounded-md ${getBeatClass(1)}`}>
                    <span className="text-emerald-400 font-bold block mb-1.5">// AFTER: B-Tree Index</span>
                    <div className="text-emerald-400 font-bold">{"let out = db.users.findOne("}</div>
                    <div className="text-emerald-400 font-bold">{"  { id: userId }"}</div>
                    <div className="text-emerald-400 font-bold font-mono text-emerald-400">{"  ); // indexed single match"}</div>
                    <div className="opacity-0">{"_"}</div>
                    <span className="text-emerald-500 font-bold block mt-2 text-[0.7cqw]">Complexity: O(1)</span>
                  </div>
                </div>
              </div>
            );
          case 3: // Standard: 3 columns checkbook grids / vertical steps
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center border-b border-slate-800 pb-[0.5cqw] text-[0.9cqw] text-slate-400 font-mono">
                  <span>Compiler Dynamic Stages</span>
                  <span className="text-emerald-500">3 CHANNELS</span>
                </div>
                <div className="flex-1 grid grid-cols-3 gap-[1cqw] mt-[1.2cqw] text-[0.75cqw] font-mono leading-tight">
                  <div className={`bg-black/30 border border-slate-800 p-[0.8cqw] rounded-md flex flex-col justify-between ${getBeatClass(0)}`}>
                    <div>
                      <span className="text-emerald-500 block mb-1.5">// 01 • AST Scanner</span>
                      <div className="text-slate-400">{"const tokens = "}</div>
                      <div className="text-slate-400">{"  lexer.scan(code);"}</div>
                    </div>
                    <span className="text-slate-500 text-[0.7cqw]">Tokenization cycle</span>
                  </div>
                  <div className={`bg-black/30 border border-slate-800 p-[0.8cqw] rounded-md flex flex-col justify-between ${getBeatClass(1)}`}>
                    <div>
                      <span className="text-emerald-500 block mb-1.5">// 02 • Constraints</span>
                      <div className="text-slate-400">{"schema.validate("}</div>
                      <div className="text-slate-400">{"  tokens.tree"}</div>
                      <div className="text-slate-400">{");"}</div>
                    </div>
                    <span className="text-slate-500 text-[0.7cqw]">Static validation</span>
                  </div>
                  <div className={`bg-black/30 border border-slate-800 p-[0.8cqw] rounded-md flex flex-col justify-between ${getBeatClass(2)}`}>
                    <div>
                      <span className="text-emerald-500 block mb-1.5">// 03 • Core Emission</span>
                      <div className="text-emerald-400 font-bold">{"const out = "}</div>
                      <div className="text-emerald-400 font-bold">{"  compiler.emit();"}</div>
                    </div>
                    <span className="text-emerald-500 font-bold text-[0.7cqw]">WASM compiled</span>
                  </div>
                </div>
              </div>
            );
          case 4: // Dense: 2x2 administrative quadrants / status card boards
            return (
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center border-b border-slate-800 pb-[0.4cqw] text-[0.9cqw] text-slate-400">
                  <span>Query Audit Quadrants</span>
                  <span>4 FILES</span>
                </div>
                <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-[1cqw] mt-[1cqw] text-[0.8cqw]">
                  <div className={`bg-black/20 border border-slate-800 rounded p-[0.8cqw] flex flex-col justify-between ${getBeatClass(0)}`}>
                    <span className="font-bold text-emerald-500 mb-1 font-mono">/api/lookup_core.js</span>
                    <p className="text-slate-400 leading-snug">Full sweeps removed. Single O(1) user lookup contract enforced.</p>
                  </div>
                  <div className={`bg-black/20 border border-slate-800 rounded p-[0.8cqw] flex flex-col justify-between ${getBeatClass(1)}`}>
                    <span className="font-bold text-emerald-500 mb-1 font-mono">/db/index_setup.sql</span>
                    <p className="text-slate-400 leading-snug">B-Tree indexes validated across id matching query columns.</p>
                  </div>
                  <div className={`bg-black/20 border border-slate-800 rounded p-[0.8cqw] flex flex-col justify-between ${getBeatClass(2)}`}>
                    <span className="font-bold text-emerald-500 mb-1 font-mono">/test/playwright_e2e.js</span>
                    <p className="text-slate-400 leading-snug">Ensured checkout pathways execute under 45ms baselines.</p>
                  </div>
                  <div className="bg-black/10 border border-slate-900 rounded p-[0.8cqw] flex flex-col justify-between opacity-30">
                    <span className="font-bold text-slate-500 mb-1 font-mono">/config/quotas.json</span>
                    <p className="text-slate-500 leading-snug">Storage ceilings limited to 2GB OPFS browser compartments.</p>
                  </div>
                </div>
              </div>
            );
          case 5: // Extreme: Real annotated IDE code editor panel with syntax highlights and red-green diff blocks
          default:
            return (
              <div className="flex flex-col justify-between h-full text-[0.8cqw]">
                <div className="flex justify-between items-center border-b border-slate-800 pb-[0.4cqw] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Code className="w-4 h-4 text-emerald-500" />
                    <span className="font-bold">query_optimizer.js</span>
                  </div>
                  <span className="text-[0.75cqw]">JS • UTF-8</span>
                </div>
                <div className="flex-1 flex flex-col justify-center my-[0.4cqw] bg-black/50 p-[1cqw] border border-slate-800 rounded-lg">
                  <pre className="font-mono text-[0.75cqw] leading-tight text-slate-400">
                    <div><span className="opacity-30 select-none mr-2">12 |</span><span className="text-purple-400">function</span> <span className="text-blue-400">executeLookup</span>(userId) &#123;</div>
                    <div className="bg-red-950/35 text-red-400 w-full px-1 -mx-1"><span className="opacity-30 select-none mr-2">13 |</span><span className="text-red-500 font-bold select-none mr-1">-</span>  <span className="text-purple-400">let</span> results = db.users.find(); <span className="text-slate-500">// Full Scan</span></div>
                    <div className={`bg-green-950/50 text-green-400 w-full px-1 -mx-1 ${getBeatClass(0)}`}><span className="opacity-30 select-none mr-2">14 |</span><span className="text-emerald-500 font-bold select-none mr-1">+</span>  <span className="text-purple-400">let</span> results = db.users.findOne(&#123; id: userId &#125;); <span className="text-emerald-500">// Indexed</span></div>
                    <div><span className="opacity-30 select-none mr-2">15 |</span>  <span className="text-purple-400">return</span> results;</div>
                    <div><span className="opacity-30 select-none mr-2">16 |</span>&#125;</div>
                  </pre>
                  {/* Interactive annotation comment overlay */}
                  <div className={`mt-2 bg-[#fbfbfe] border border-slate-300 text-slate-800 p-2 rounded shadow-md flex items-start gap-1.5 font-sans leading-tight text-[0.8cqw] ${getBeatClass(1)}`}>
                    <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">Code Auditor Annotation</span>
                      "Replacing find() with findOne() leverages local B-Tree indexes, reducing lookup cycles from O(N) linear sweep to O(1) direct access."
                    </div>
                  </div>
                </div>
              </div>
            );
        }
      };

      return (
        <div className={`w-[42cqw] h-[31cqw] bg-[#0f141c] border border-slate-800 rounded-xl p-[1.8cqw] flex flex-col justify-between font-mono text-[#e0e4e6] relative ${finalClass} shadow-[0_8px_30px_rgba(0,0,0,0.3)] ${transitionBase}`}>
          {renderSceneContent()}
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
