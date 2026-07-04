import React from "react";
import { Terminal, Activity, Cpu, Orbit, Database, Radio, Info } from "lucide-react";

export const getMetadata = (lang) => {
  const isZh = lang === "zh";
  return {
    id: "01",
    tier: "A",
    density: "high", // Extreme density
    name: isZh ? "黑洞视界演化" : "Cosmological Horizon",
    theme: isZh ? "天体物理与引力透镜" : "Cosmology & Black Holes",
    densityLabel: isZh ? "天体物理总账" : "Astrophysical Ledger",
    colors: { bg: "bg-[#030511]", ink: "text-slate-100", panel: "border-slate-800" },
    typography: { header: "font-serif", body: "font-mono" },
    scenes: [
      {
        id: 1,
        name: isZh ? "奇点与事件视界" : "Singularity & Horizon",
        beats: [
          { action: isZh ? "初始化引力扭曲" : "Initialize Gravitational Warp" },
          { action: isZh ? "旋转吸积盘流光" : "Ignite Rotating Accretion" },
          { action: isZh ? "扭曲时空奇点重力" : "Distort Singularity Curvature" }
        ]
      },
      {
        id: 2,
        name: isZh ? "度规空间与测地线" : "Metric Space & Geodesics",
        beats: [
          { action: isZh ? "流送施瓦西坐标流" : "Stream Schwarzschild Coordinates" },
          { action: isZh ? "测地光子轨道偏折" : "Bend Geodesic Photon Paths" },
          { action: isZh ? "引力透镜偏角对齐" : "Align Gravitational Lens Angle" }
        ]
      },
      {
        id: 3,
        name: isZh ? "物质吸积三段式" : "Accretion 3-Stage Process",
        beats: [
          { action: isZh ? "触发伴星气体流入" : "Trigger Companion Gas Inflow" },
          { action: isZh ? "锁定最内稳定圆形轨道" : "Lock Innermost Stable Orbit" },
          { action: isZh ? "激射超高温等离子体喷流" : "Eject Superheated Plasma Jet" }
        ]
      },
      {
        id: 4,
        name: isZh ? "引力热力学矩阵" : "Thermodynamics Matrix",
        beats: [
          { action: isZh ? "校准霍金熵增参数" : "Calibrate Hawking Entropy" },
          { action: isZh ? "测量黑洞角动量自转" : "Measure Angular Momentum Spin" },
          { action: isZh ? "核算虚粒子对量子蒸发" : "Evaluate Quantum Evaporation" }
        ]
      },
      {
        id: 5,
        name: isZh ? "视界遥测控制总账" : "Horizon Telemetry Ledger",
        beats: [
          { action: isZh ? "载入高频热力学参数" : "Load High-Frequency Metrics" },
          { action: isZh ? "启动视界衰变流式日志" : "Start Horizon Decay Streaming" },
          { action: isZh ? "加盖信息守恒红蜡印章" : "Stamp Information Preservation Seal" }
        ]
      }
    ]
  };
};

export default function Style01({ scene, beat, language, onNavigate, isThumbnail }) {
  const isZh = language === "zh";

  // Right Vertical Gravitational Picker (Middle Focal Highlight & Edge Fade)
  const renderNavigation = () => {
    if (isThumbnail || !onNavigate) return null;

    const navNodes = [
      { s: 1, briefEn: "Singularity", briefZh: "奇点视界", fullBilingual: "Singularity / 奇点" },
      { s: 2, briefEn: "Geodesics", briefZh: "度规测地", fullBilingual: "Geodesics / 测地线" },
      { s: 3, briefEn: "Accretion", briefZh: "物质吸积", fullBilingual: "Accretion / 物质吸积" },
      { s: 4, briefEn: "Entropy", briefZh: "量子热力", fullBilingual: "Entropy / 量子热力" },
      { s: 5, briefEn: "Telemetry", briefZh: "视界总账", fullBilingual: "Telemetry / 视界总账" }
    ];

    return (
      <div className="absolute inset-y-0 right-0 w-[28cqw] flex items-center justify-end select-none z-30 pointer-events-none">
        {/* Vertical, dark gravitational well centerline */}
        <div className="absolute right-[4cqw] top-[15cqh] bottom-[15cqh] w-[2px] bg-gradient-to-b from-transparent via-slate-800/80 to-transparent pointer-events-none" />

        {/* Sliding track for nodes */}
        <div className="relative w-full h-[60cqh] flex items-center overflow-visible">
          <div 
            className="absolute right-0 w-full flex flex-col transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: `translateY(${(3 - scene) * 10}cqh)`,
              height: "50cqh"
            }}
          >
            {navNodes.map((node) => {
              const dist = Math.abs(node.s - scene);
              const isActive = dist === 0;
              
              let textClass = "";
              let labelText = "";

              if (dist === 0) {
                textClass = "text-[2.2cqw] font-black text-[#22d3ee] opacity-100 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]";
                labelText = node.fullBilingual;
              } else if (dist === 1) {
                textClass = "text-[1.2cqw] font-bold text-slate-400 opacity-50 group-hover:opacity-80";
                labelText = isZh ? node.briefZh : node.briefEn;
              } else {
                textClass = "text-[0.8cqw] font-medium text-slate-600 opacity-20 group-hover:opacity-40";
                labelText = isZh ? node.briefZh : node.briefEn;
              }

              return (
                <div 
                  key={node.s} 
                  onClick={() => onNavigate(node.s, 0)}
                  className="h-[10cqh] w-full relative flex items-center justify-end cursor-pointer pointer-events-auto group"
                >
                  {/* Node label - positioned left of the centerline */}
                  <div className="absolute right-[6cqw] text-right whitespace-nowrap pointer-events-none">
                    <span className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] font-mono tracking-wider block ${textClass}`}>
                      {labelText}
                    </span>
                  </div>

                  {/* Orbit-node representation on the centerline */}
                  <div className="absolute right-[4cqw] translate-x-1/2 flex items-center justify-center w-0 h-0 pointer-events-none">
                    {/* Glowing outer ring for active node */}
                    {isActive && (
                      <>
                        <div className="w-[1.8cqw] h-[1.6cqw] rounded-full border-2 border-[#22d3ee] animate-pulse absolute" />
                        <div className="w-[2.6cqw] h-[2.6cqw] rounded-full border border-[#22d3ee]/30 animate-ping absolute" />
                      </>
                    )}

                    {/* Neighboring node ring */}
                    {!isActive && dist === 1 && (
                      <div className="w-[1.2cqw] h-[1.2cqw] rounded-full border border-slate-600 absolute transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-slate-400 group-hover:scale-110" />
                    )}

                    {/* Core dot */}
                    <div 
                      className={`rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] absolute ${
                        isActive 
                          ? "w-[0.8cqw] h-[0.8cqw] bg-[#22d3ee]" 
                          : dist === 1 
                            ? "w-[0.5cqw] h-[0.5cqw] bg-slate-500 group-hover:bg-slate-300" 
                            : "w-[0.35cqw] h-[0.35cqw] bg-slate-700 group-hover:bg-slate-500"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // Render Scene 1: Premise - Ultralight Title Cover
  const renderScene1 = () => {
    return (
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-[#030511] select-none">
        {/* Giant SVG Black Hole */}
        <div className="absolute w-[62cqw] h-[62cqw] flex items-center justify-center pointer-events-none">
          <svg viewBox="0 0 600 600" className="w-full h-full overflow-visible">
            <defs>
              <filter id="cyan-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="15" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <radialGradient id="accretion-grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
                <stop offset="30%" stopColor="#0891b2" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#0369a1" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#030511" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Gravitational Warping Contours in background */}
            <g className="opacity-25">
              <circle cx="300" cy="300" r="280" fill="none" stroke="#22d3ee" strokeWidth="0.5" strokeDasharray="5 15" className="animate-spin-slow" />
              <circle cx="300" cy="300" r="230" fill="none" stroke="#0891b2" strokeWidth="0.5" strokeDasharray="10 10" />
              <circle cx="300" cy="300" r="180" fill="none" stroke="#0369a1" strokeWidth="1" strokeDasharray="2 6" className="animate-spin-fast" style={{ animationDirection: "reverse" }} />
            </g>

            {/* Gravitational warping contour lines (visible under beat >= 2) */}
            {beat >= 2 && (
              <g className="opacity-40 animate-pulse">
                <path d="M 50 250 Q 300 120 550 250" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
                <path d="M 50 350 Q 300 480 550 350" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
                <circle cx="300" cy="300" r="120" fill="none" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 3" className="animate-spin-slow" />
              </g>
            )}

            {/* Accretion Disk (glowing ellipse representing gas orbiting at relativistic speeds) */}
            <g transform="rotate(-15, 300, 300) scale(1, 0.3)" className="origin-center">
              <circle 
                cx="300" 
                cy="300" 
                r={beat >= 1 ? "260" : "200"} 
                fill="url(#accretion-grad)" 
                className="transition-all duration-1000" 
              />
              <circle 
                cx="300" 
                cy="300" 
                r={beat >= 1 ? "220" : "160"} 
                fill="none" 
                stroke="#22d3ee" 
                strokeWidth={beat >= 1 ? "12" : "6"} 
                strokeDasharray="40 180 90 200" 
                className="transition-all duration-1000 animate-spin-fast" 
                filter="url(#cyan-glow)" 
              />
              <circle 
                cx="300" 
                cy="300" 
                r={beat >= 1 ? "180" : "140"} 
                fill="none" 
                stroke="#e0f2fe" 
                strokeWidth="3" 
                strokeDasharray="10 80 120 40" 
                className="animate-spin-slow" 
                style={{ animationDuration: "5s", animationDirection: "reverse" }} 
              />
            </g>

            {/* Event Horizon (pitch black circle) */}
            <circle 
              cx="300" 
              cy="300" 
              r="100" 
              fill="#000000" 
              stroke="#22d3ee" 
              strokeWidth="1.5" 
              filter="url(#cyan-glow)" 
              className="animate-pulse-glow" 
            />

            {/* Hawking Radiation (quantum virtual particle pairs separation - beat >= 2) */}
            {beat >= 2 && (
              <g className="animate-pulse">
                {/* Ejected positive particles */}
                <circle cx="210" cy="210" r="3" fill="#22d3ee" filter="url(#cyan-glow)" />
                <path d="M 210 210 Q 150 180 110 130" fill="none" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 3" />
                
                <circle cx="390" cy="390" r="3" fill="#22d3ee" filter="url(#cyan-glow)" />
                <path d="M 390 390 Q 450 420 490 470" fill="none" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 3" />

                {/* Ejected negative particles falling in */}
                <circle cx="240" cy="240" r="2" fill="#0891b2" />
                <path d="M 240 240 L 280 280" fill="none" stroke="#0891b2" strokeWidth="1.5" strokeDasharray="2 2" />

                <circle cx="360" cy="360" r="2" fill="#0891b2" />
                <path d="M 360 360 L 320 320" fill="none" stroke="#0891b2" strokeWidth="1.5" strokeDasharray="2 2" />
              </g>
            )}
          </svg>
        </div>

        {/* Overlay Skewed/Blended Content Block */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-[8cqw] select-none pointer-events-none z-10">
          <div className="max-w-[48cqw] transform -rotate-[4deg] skew-x-[-8deg] mix-blend-screen text-left">
            <div className="font-mono text-[1.1cqw] text-[#22d3ee] font-black tracking-[0.4cqw] uppercase opacity-70 mb-[1cqh] animate-pulse">
              {isZh ? "—— 天体物理极限态遥测" : "—— ASTROPHYSICAL EXTREMUM MEASUREMENT"}
            </div>
            <h1 className="text-[4.2cqw] font-black leading-[1.05] text-[#22d3ee] drop-shadow-[0_0_20px_rgba(34,211,238,0.5)] tracking-tight">
              {isZh ? "黑洞视界演化与时空奇点" : "COSMOLOGICAL HORIZON & SINGULARITY"}
            </h1>
            <p className="text-[1.35cqw] text-slate-300 font-sans mt-[3cqh] leading-[1.65] opacity-80 max-w-[44cqw] border-l border-[#22d3ee]/30 pl-[1.5cqw]">
              {isZh 
                ? "在无限致密的引力深渊边缘，光线弯曲折返，时间趋于静止。我们在此见证宇宙最纯粹的几何暴力，在无声的视界边缘，捕捉信息守恒的微弱回响。" 
                : "At the edge of the infinitely dense gravitational abyss, light bends backward and time stands still. Here we witness the purest geometric violence of the cosmos, capturing the faint echoes of information conservation at the horizon's edge."}
            </p>
            
            {/* Beat interactive label */}
            <div className="mt-[4cqh] flex items-center gap-[1cqw]">
              <div className="w-[1.2cqw] h-[1.2cqw] rounded-full bg-[#22d3ee] animate-ping" />
              <span className="font-mono text-[1cqw] text-[#22d3ee] font-bold tracking-widest uppercase">
                {beat === 0 && (isZh ? "奇点核心稳定" : "SINGULARITY CORE ACTIVE")}
                {beat === 1 && (isZh ? "吸积物质热能激发" : "ACCRETION THERMAL EXCITED")}
                {beat >= 2 && (isZh ? "霍金辐射虚粒子分裂" : "HAWKING QUANTUM EVAPORATING")}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render Scene 2: Dual - Light Non-Symmetric Column
  const renderScene2 = () => {
    return (
      <div className="w-full h-full relative flex items-center justify-between gap-[3cqw] px-[4cqw] py-[3cqh] bg-[#030511]">
        {/* Left Side: Narrow Schwarzschild Terminal (30% width) */}
        <div className="w-[26cqw] h-[78cqh] border border-[#22d3ee]/20 bg-[#040817]/90 rounded-xl p-[1.8cqw] flex flex-col justify-between text-[#22d3ee] relative overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_0.5px,transparent_0.5px)] [background-size:12px_12px] opacity-[0.03] pointer-events-none" />

          {/* Header */}
          <div className="border-b border-[#22d3ee]/20 pb-[1.5cqh]">
            <div className="flex items-center gap-[0.5cqw]">
              <Terminal className="w-[1.8cqw] h-[1.8cqw] text-[#22d3ee] animate-pulse" />
              <span className="font-mono text-[1cqw] font-bold tracking-wider">SCHWARZSCHILD COORDINATES</span>
            </div>
            <p className="text-[0.75cqw] text-slate-500 font-mono mt-0.5">
              {isZh ? "静态度规测地线流" : "Static Metric Geodesic Streams"}
            </p>
          </div>

          {/* Formula Display */}
          <div className="my-[1.5cqh] p-[1cqw] bg-[#02040a]/80 border border-[#22d3ee]/10 rounded font-mono text-[0.8cqw] leading-relaxed text-slate-300">
            <div className="text-cyan-400 font-bold mb-1">METRIC DS² FORMULA:</div>
            <div className="text-center font-bold text-[0.85cqw] text-white my-1 py-1 bg-black/40 rounded border border-[#22d3ee]/5">
              ds² = -(1 - r_s/r)c²dt² + (1 - r_s/r)⁻¹dr² + r²dΩ²
            </div>
            <div className="text-[0.75cqw] text-slate-400 mt-1 font-sans">
              {isZh 
                ? "当 r 接近 r_s = 2GM/c² 时，时空网格曲率发生奇性。g_00 趋于 0，g_rr 趋于无穷。" 
                : "As r approaches r_s = 2GM/c², spacetime coordinate curvature singularizes: g_00 → 0, g_rr → ∞."}
            </div>
          </div>

          {/* Live Coordinates Stream logs */}
          <div className="flex-1 font-mono text-[0.75cqw] text-cyan-400/80 bg-black/50 rounded p-[1cqw] overflow-hidden flex flex-col gap-[0.6cqh] border border-[#22d3ee]/5">
            <div className="text-slate-500 text-[0.7cqw] border-b border-[#22d3ee]/10 pb-1 mb-1">
              {isZh ? "[测地线状态实时遥测]" : "[GEODESICS TELEMETRY STREAM]"}
            </div>
            <div className="flex justify-between">
              <span>t = 0.000s</span>
              <span className="text-slate-400">r = 10.00 Rs</span>
            </div>
            <div className="flex justify-between">
              <span>t = 0.128s</span>
              <span className="text-slate-400">r = 8.42 Rs</span>
            </div>
            {beat >= 1 && (
              <>
                <div className="flex justify-between text-amber-400 animate-pulse">
                  <span>t = 0.256s</span>
                  <span>r = 4.18 Rs</span>
                </div>
                <div className="flex justify-between text-amber-400">
                  <span>t = 0.384s</span>
                  <span>r = 2.95 Rs</span>
                </div>
              </>
            )}
            {beat >= 2 && (
              <>
                <div className="flex justify-between text-red-400 font-bold animate-pulse">
                  <span>t = 0.512s</span>
                  <span>r = 1.50 Rs [PHOTON]</span>
                </div>
                <div className="text-red-400/80 text-[0.7cqw] bg-red-950/20 px-1 rounded border border-red-500/10 font-sans">
                  {isZh ? "[警告] 捕获于 1.50 Rs 光子球临界轨道" : "[WARN] Trapped at 1.50 Rs photon sphere limit"}
                </div>
              </>
            )}
            <div className="mt-auto pt-1 border-t border-[#22d3ee]/10 text-slate-500 text-right text-[0.65cqw]">
              ID: SCHW_GEO_GRID_8283
            </div>
          </div>

          {/* Beat Status Info */}
          <div className="mt-[1.5cqh] pt-[1cqh] border-t border-[#22d3ee]/10 font-mono text-[0.8cqw] text-slate-400">
            <strong>{isZh ? "运行状态：" : "Status: "}</strong>
            <span className="text-[#22d3ee] font-bold">
              {beat === 0 && (isZh ? "坐标流平稳" : "COORDINATES NORMAL")}
              {beat === 1 && (isZh ? "光子轨道偏折" : "BENDING DETECTED")}
              {beat === 2 && (isZh ? "光子球轨道捕获" : "PHOTON SPHERE LOCK")}
            </span>
          </div>
        </div>

        {/* Right Side: Geodesics Grid & Gravitational Lensing (70% width) */}
        <div className="flex-1 h-[78cqh] border border-slate-800 bg-[#04071b] rounded-xl relative overflow-hidden flex flex-col justify-between p-[1.8cqw]">
          {/* Spacetime Grid Background */}
          <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-patt" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#22d3ee" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-patt)" />
            </svg>
          </div>

          {/* Gravitational Lens Grid Warp Overlay (Simulated warped center grid) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40cqw] h-[40cqw] opacity-35 pointer-events-none">
            <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
              <circle cx="200" cy="200" r="180" fill="none" stroke="#22d3ee" strokeWidth="0.5" />
              <circle cx="200" cy="200" r="130" fill="none" stroke="#22d3ee" strokeWidth="0.8" />
              <circle cx="200" cy="200" r="80" fill="none" stroke="#22d3ee" strokeWidth="1" />
              <circle cx="200" cy="200" r="40" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
              <path d="M 200 20 Q 200 200 200 380" fill="none" stroke="#22d3ee" strokeWidth="0.5" />
              <path d="M 20 200 Q 200 200 380 200" fill="none" stroke="#22d3ee" strokeWidth="0.5" />
              <path d="M 72.7 72.7 Q 200 200 327.3 327.3" fill="none" stroke="#22d3ee" strokeWidth="0.5" />
              <path d="M 327.3 72.7 Q 200 200 72.7 327.3" fill="none" stroke="#22d3ee" strokeWidth="0.5" />
            </svg>
          </div>

          {/* Title Header inside Right panel */}
          <div className="z-10 flex justify-between items-start border-b border-slate-800 pb-[1cqh]">
            <div>
              <h2 className="font-serif text-[1.4cqw] font-bold text-white tracking-tight">
                {isZh ? "测地线光子弯曲轨道" : "BENDED PHOTON GEODESICS MESH"}
              </h2>
              <p className="font-mono text-[0.8cqw] text-slate-500">
                {isZh ? "光子在强引力场下的非线性折射路径" : "Non-linear propagation curves under extreme Schwarzschild geometry"}
              </p>
            </div>
            <div className="bg-slate-950 border border-slate-800 px-3 py-1.5 rounded text-cyan-400 font-mono text-[0.75cqw] font-bold">
              {isZh ? "引力透镜阻尼" : "GRAV-LENS DAMPING"}
            </div>
          </div>

          {/* Center SVG showing geodesic photon deflection */}
          <div className="flex-1 my-[1.5cqh] relative flex items-center justify-center">
            <svg viewBox="0 0 600 300" className="w-full h-full overflow-visible z-10">
              <defs>
                <filter id="glow-photon">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Central Singularity & Event Horizon */}
              <circle cx="300" cy="150" r="35" fill="#000" stroke="#22d3ee" strokeWidth="1" />
              <circle cx="300" cy="150" r="42" fill="none" stroke="#22d3ee" strokeWidth="0.5" strokeDasharray="3 6" className="animate-spin-slow" />
              
              {/* Photon Sphere boundary marker (1.5 Rs) */}
              <circle cx="300" cy="150" r="52.5" fill="none" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="2 2" className="opacity-40" />
              <text x="300" y="215" fill="#ef4444" className="font-mono text-[8px] font-bold" textAnchor="middle">
                {isZh ? "光子球轨道 (1.5 Rs)" : "Photon Sphere (1.5 Rs)"}
              </text>

              {/* Geodesic Photon paths entering from left */}
              {/* Path 1: Large distance - Weak deflection */}
              <path 
                d="M 50 40 Q 300 110 550 40" 
                fill="none" 
                stroke="#0284c7" 
                strokeWidth="1.5" 
                className="opacity-50" 
              />
              <text x="530" y="32" fill="#0284c7" className="font-mono text-[8px] font-bold text-right" textAnchor="end">
                {isZh ? "弱引力折射" : "Weak Deflection"}
              </text>

              {/* Path 2: Medium distance - Strong deflection (Active at beat >= 1) */}
              <path 
                d="M 50 110 C 200 110, 240 70, 300 70 C 360 70, 400 220, 550 220" 
                fill="none" 
                stroke={beat >= 1 ? "#22d3ee" : "#1e293b"} 
                strokeWidth={beat >= 1 ? "2.5" : "1"} 
                className={`transition-all duration-1000 ${beat >= 1 ? "opacity-100" : "opacity-30"}`} 
                filter={beat >= 1 ? "url(#glow-photon)" : ""}
              />
              {beat >= 1 && (
                <text x="530" y="235" fill="#22d3ee" className="font-mono text-[8px] font-bold text-right" textAnchor="end">
                  {isZh ? "强引力透镜弯曲 (Beat 1)" : "Strong Lensing Path (Beat 1)"}
                </text>
              )}

              {/* Path 3: Extremely close - Captured / Photon Sphere orbit (Active at beat >= 2) */}
              {beat >= 2 ? (
                <>
                  <path 
                    d="M 50 135 C 180 135, 230 115, 260 115 C 285 115, 285 185, 260 185 C 235 185, 235 115, 260 115 C 320 115, 335 150, 335 160" 
                    fill="none" 
                    stroke="#ef4444" 
                    strokeWidth="2.5" 
                    className="sketch-line" 
                    filter="url(#glow-photon)" 
                  />
                  <polygon points="335,160 338,152 331,154" fill="#ef4444" />
                  <text x="180" y="195" fill="#ef4444" className="font-mono text-[8px] font-bold">
                    {isZh ? "无限循环捕获轨 (Beat 2)" : "Horizon Orbit Trapping (Beat 2)"}
                  </text>
                </>
              ) : (
                <path 
                  d="M 50 135 C 180 135, 220 120, 240 100" 
                  fill="none" 
                  stroke="#1e293b" 
                  strokeWidth="1" 
                  className="opacity-20" 
                />
              )}
            </svg>
          </div>

          {/* Explanatory footer description inside Right panel */}
          <div className="border-t border-slate-800 pt-[1cqh] flex justify-between items-center text-[0.8cqw] font-mono text-slate-400">
            <div className="flex items-center gap-[0.5cqw]">
              <Info className="w-[1.2cqw] h-[1.2cqw] text-[#22d3ee] animate-pulse" />
              <span className="font-sans">
                {isZh 
                  ? "施瓦西度规中，当光子越过 1.5 倍引力半径时，向心引力将克服离心力，形成环绕的光子球。" 
                  : "In Schwarzschild space, when a photon crosses r = 1.5 r_s, gravitation overcomes centrifugal force, orbiting as a photon sphere."}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render Scene 3: Process - Standard Horizontal Flow
  const renderScene3 = () => {
    return (
      <div className="w-full h-full relative flex flex-col justify-between px-[4cqw] py-[3cqh] bg-[#030511]">
        {/* Header Title Bar */}
        <div className="border-b border-slate-800 pb-[1.5cqh] flex justify-between items-end shrink-0">
          <div>
            <h2 className="font-serif text-[1.6cqw] font-black text-white tracking-tight uppercase flex items-center gap-[0.5cqw]">
              <Activity className="w-[2cqw] h-[2cqw] text-[#22d3ee]" />
              {isZh ? "物质向内吸积与相对论双自转流" : "ACCRETION PROCESS OF MATTER & RELATIVISTIC JET"}
            </h2>
            <p className="font-mono text-[0.85cqw] text-slate-500 mt-1">
              {isZh ? "多向流质从伴星剥离、最内轨道限位到高能两极喷流的全阶段" : "Full evolution of matter stripping, circular limits, and polar jet acceleration"}
            </p>
          </div>
          <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-lg text-cyan-400 font-mono text-[0.75cqw] font-bold">
            <Orbit className="w-4 h-4 text-cyan-400 animate-spin-slow" />
            <span>{isZh ? "三段式高能势场" : "THREE-VOICE FIELD"}</span>
          </div>
        </div>

        {/* Interactive Canvas Area with Winding S-curve and Cards */}
        <div className="flex-1 w-full relative my-[2cqh]">
          {/* Background SVG Geodetic S-curve Path */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <svg viewBox="0 0 1000 450" className="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="neon-glow-s3">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* The beautiful gravitational S-curve line */}
              <path 
                d="M 50 180 C 180 150, 220 50, 420 180 C 500 240, 580 380, 750 200 C 820 120, 900 150, 950 160" 
                fill="none" 
                stroke="#1e293b" 
                strokeWidth="3" 
              />

              {/* Animated fluid matter stream (Active based on beat) */}
              <path 
                d="M 50 180 C 180 150, 220 50, 420 180 C 500 240, 580 380, 750 200 C 820 120, 900 150, 950 160" 
                fill="none" 
                stroke="#22d3ee" 
                strokeWidth="4" 
                strokeDasharray="15 30" 
                className="animate-flow opacity-80" 
                filter="url(#neon-glow-s3)"
              />

              {/* Gravitational force fields vectors around S-curve */}
              <g className="opacity-10">
                <circle cx="210" cy="115" r="50" fill="none" stroke="#22d3ee" strokeWidth="0.5" strokeDasharray="2 4" />
                <circle cx="500" cy="210" r="70" fill="none" stroke="#22d3ee" strokeWidth="0.5" strokeDasharray="3 5" />
                <circle cx="785" cy="160" r="60" fill="none" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="2 3" />
              </g>

              {/* High speed Jet ejecting from Node 3 (Vertical diagonal ray under beat === 2) */}
              {beat >= 2 && (
                <g className="opacity-80 animate-pulse">
                  <path d="M 800 150 L 800 0" fill="none" stroke="#ef4444" strokeWidth="12" filter="url(#neon-glow-s3)" />
                  <path d="M 800 150 L 800 0" fill="none" stroke="#fff" strokeWidth="3" />
                  <path d="M 800 150 L 800 450" fill="none" stroke="#ef4444" strokeWidth="12" filter="url(#neon-glow-s3)" />
                  <path d="M 800 150 L 800 450" fill="none" stroke="#fff" strokeWidth="3" />
                  <ellipse cx="800" cy="50" rx="20" ry="5" fill="none" stroke="#ef4444" strokeWidth="1" />
                  <ellipse cx="800" cy="350" rx="20" ry="5" fill="none" stroke="#ef4444" strokeWidth="1" />
                </g>
              )}
            </svg>
          </div>

          {/* Node 1: Gas Inflow */}
          <div 
            className={`absolute left-[4cqw] top-[14cqh] w-[24cqw] transition-all duration-700 z-10 ${
              beat >= 0 ? "opacity-100 translate-y-0 scale-100" : "opacity-30 -translate-y-2 scale-95"
            }`}
          >
            <div className={`p-[1.5cqw] rounded-xl border bg-[#040819]/90 relative flex flex-col gap-2 ${
              beat === 0 ? "border-[#22d3ee] shadow-[0_0_25px_rgba(34,211,238,0.3)] animate-pulse" : "border-slate-800"
            }`}>
              <div className="flex justify-between items-center">
                <span className="font-mono text-[0.8cqw] text-cyan-400 font-bold tracking-widest uppercase">STAGE 01 / INFLOW</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              </div>
              <h3 className="font-serif text-[1.15cqw] font-bold text-white mt-1">
                {isZh ? "伴星气态物质剥离" : "Companion Tides Stripping"}
              </h3>
              <p className="text-[0.85cqw] text-slate-300 leading-relaxed font-sans">
                {isZh 
                  ? "伴星的气体在洛希瓣越界处被强大的引力潮汐撕扯剥离，形成螺旋的对数流入轨迹注入吸积盘。" 
                  : "Companion gas spills across the Roche lobe overflow point, caught by extreme tidal drag and spiraling inwards into the accretion disk."}
              </p>
              <div className="mt-1 flex gap-2">
                <span className="bg-cyan-950/50 px-2 py-0.5 rounded text-[0.7cqw] font-mono text-cyan-400 font-bold border border-cyan-500/10">v = 0.15c</span>
                <span className="bg-cyan-950/50 px-2 py-0.5 rounded text-[0.7cqw] font-mono text-cyan-400 font-bold border border-cyan-500/10">B_field = 120 G</span>
              </div>
            </div>
            <div className="w-[1.5px] h-[4cqh] bg-gradient-to-b from-[#22d3ee] to-transparent mx-auto mt-1" />
          </div>

          {/* Node 2: ISCO Limit */}
          <div 
            className={`absolute left-[34cqw] bottom-[2cqh] w-[24cqw] transition-all duration-700 z-10 ${
              beat >= 1 ? "opacity-100 translate-y-0 scale-100" : "opacity-30 translate-y-2 scale-95"
            }`}
          >
            <div className="w-[1.5px] h-[4cqh] bg-gradient-to-t from-amber-400 to-transparent mx-auto mb-1" />
            <div className={`p-[1.5cqw] rounded-xl border bg-[#040819]/90 relative flex flex-col gap-2 ${
              beat === 1 ? "border-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.3)] animate-pulse" : "border-slate-800"
            }`}>
              <div className="flex justify-between items-center">
                <span className="font-mono text-[0.8cqw] text-amber-400 font-bold tracking-widest uppercase">STAGE 02 / CRITICAL BOUNDARY</span>
                <span className={`w-2 h-2 rounded-full ${beat >= 1 ? "bg-amber-400 animate-ping" : "bg-slate-600"}`} />
              </div>
              <h3 className="font-serif text-[1.15cqw] font-bold text-white mt-1">
                {isZh ? "最内稳定圆形轨道界限" : "Innermost Stable Orbit (ISCO)"}
              </h3>
              <p className="text-[0.85cqw] text-slate-300 leading-relaxed font-sans">
                {isZh 
                  ? "越过这一临界圆形轨道边界（ISCO），气体的向心动能将无法克服强引力拉扯，物质从安全轨道坠落。" 
                  : "Beyond the ISCO radius limit, circular orbits collapse. Matter is shed of rotational support and plunges catastrophically."}
              </p>
              <div className="mt-1 flex gap-2">
                <span className="bg-amber-950/50 px-2 py-0.5 rounded text-[0.7cqw] font-mono text-amber-400 font-bold border border-amber-500/10">r = 3.0 r_s</span>
                <span className="bg-amber-950/50 px-2 py-0.5 rounded text-[0.7cqw] font-mono text-amber-400 font-bold border border-amber-500/10">v = 0.50c</span>
              </div>
            </div>
          </div>

          {/* Node 3: Relativistic Jet */}
          <div 
            className={`absolute right-[4cqw] top-[10cqh] w-[24cqw] transition-all duration-700 z-10 ${
              beat >= 2 ? "opacity-100 translate-y-0 scale-100" : "opacity-30 -translate-y-2 scale-95"
            }`}
          >
            <div className={`p-[1.5cqw] rounded-xl border bg-[#040819]/90 relative flex flex-col gap-2 ${
              beat === 2 ? "border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.4)] animate-pulse" : "border-slate-800"
            }`}>
              <div className="flex justify-between items-center">
                <span className="font-mono text-[0.8cqw] text-red-400 font-bold tracking-widest uppercase">STAGE 03 / EXTRUSION JET</span>
                <span className={`w-2 h-2 rounded-full ${beat >= 2 ? "bg-red-500 animate-ping" : "bg-slate-600"}`} />
              </div>
              <h3 className="font-serif text-[1.15cqw] font-bold text-white mt-1">
                {isZh ? "磁偶耦合自转极性喷流" : "Relativistic Magneto-Jet"}
              </h3>
              <p className="text-[0.85cqw] text-slate-300 leading-relaxed font-sans">
                {isZh 
                  ? "未越过视界的超高温等离子体被黑洞高速自转的扭曲磁力线扭绞捕获，沿自转两极以极高亚光速射出。" 
                  : "Plasma escaping the horizon is focused by highly wound rotational magnetic ropes, ejecting outwards along polar axes."}
              </p>
              <div className="mt-1 flex gap-2">
                <span className="bg-red-950/50 px-2 py-0.5 rounded text-[0.7cqw] font-mono text-red-400 font-bold border border-red-500/10">v ≈ 0.99c</span>
                <span className="bg-red-950/50 px-2 py-0.5 rounded text-[0.7cqw] font-mono text-red-400 font-bold border border-red-500/10">B_field = 10k G</span>
              </div>
            </div>
            <div className="w-[1.5px] h-[4cqh] bg-gradient-to-b from-red-500 to-transparent mx-auto mt-1" />
          </div>
        </div>

        {/* Progress Tracker Footer */}
        <div className="border-t border-slate-800 pt-[1cqh] flex justify-between items-center text-[0.8cqw] font-mono text-slate-400 shrink-0">
          <div className="flex items-center gap-[0.5cqw]">
            <Info className="w-[1.2cqw] h-[1.2cqw] text-[#22d3ee] animate-pulse" />
            <span className="font-sans">
              {isZh 
                ? "三步吸积流完整描绘了从物质俘获（伴星剥离）到轨道断崖（ISCO临界）以及两极释能（相对论喷流）的物质流向机制。" 
                : "The 3-phase accretion process maps material flows from gravitational harvesting to orbital drops and polar discharge."}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Render Scene 4: Matrix - Dense 2x2 Bento
  const renderScene4 = () => {
    return (
      <div className="w-full h-full relative flex flex-col justify-between px-[4cqw] py-[3cqh] bg-[#030511]">
        {/* Header Title Bar */}
        <div className="border-b border-slate-800 pb-[1.5cqh] flex justify-between items-end shrink-0">
          <div>
            <h2 className="font-serif text-[1.6cqw] font-black text-white tracking-tight uppercase flex items-center gap-[0.5cqw]">
              <Cpu className="w-[2cqw] h-[2cqw] text-[#22d3ee]" />
              {isZh ? "引力热力学与视界量子矩阵" : "GRAVITATIONAL THERMODYNAMICS & HORIZON MATRIX"}
            </h2>
            <p className="font-mono text-[0.85cqw] text-slate-500 mt-1">
              {isZh ? "事件视界热力学熵增、自转半径收缩与量子相干纠缠四象限解算" : "Mathematical quadrants for Hawking entropy, Kerr horizon, mass decay, and entanglement"}
            </p>
          </div>
          <div className="bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-lg text-cyan-400 font-mono text-[0.75cqw] font-bold">
            {isZh ? "热力学相干验证" : "UNIPOLAR SOLVER"}
          </div>
        </div>

        {/* Asymmetric 2x2 Bento Matrix */}
        <div className="flex-1 w-full grid grid-cols-12 gap-[2.5cqw] my-[2cqh]">
          {/* Q1: Hawking Entropy - Active at beat === 0 */}
          <div 
            className={`col-span-7 border rounded-xl p-[1.8cqw] bg-[#040819]/95 flex flex-col justify-between relative transition-all duration-700 overflow-hidden ${
              beat === 0 
                ? "border-[#22d3ee] shadow-[0_0_30px_rgba(34,211,238,0.25)] scale-[1.02] z-10" 
                : "border-slate-800 opacity-40 scale-[0.98]"
            }`}
          >
            <div className="absolute top-2 right-3 font-mono text-[1cqw] text-[#22d3ee]/40 font-bold">Q1 / ENTROPY</div>
            
            <div>
              <span className="font-mono text-[0.85cqw] text-[#22d3ee] font-black tracking-widest block uppercase">
                {isZh ? "贝肯斯坦-霍金辐射熵" : "Bekenstein-Hawking Entropy"}
              </span>
              <h3 className="font-serif text-[1.25cqw] font-black text-white mt-1 leading-none">
                {isZh ? "视界表面积与量子态数" : "Horizon Surface Area Scaler"}
              </h3>
            </div>

            <div className="my-[1.5cqh] py-[1cqh] px-[1.5cqw] bg-black/40 border border-[#22d3ee]/10 rounded flex justify-center items-center">
              <span className="font-mono text-[1.25cqw] text-white font-bold">
                S_BH = (k_B · A) / (4 ℓ_P²)
              </span>
            </div>

            <div className="flex justify-between items-end gap-[1.5cqw] font-mono text-[0.8cqw]">
              <p className="text-slate-400 leading-normal max-w-[28cqw] font-sans">
                {isZh 
                  ? "霍金熵表明，事件视界表面积 A 与黑洞内部容纳的量子微观状态数完全等价，构成了全息原理的基石。" 
                  : "Demonstrates that the boundary area A of the horizon scales directly with its microscopic physical degrees of freedom."}
              </p>
              <div className="text-right shrink-0">
                <span className="text-slate-500 block">Planck Length</span>
                <span className="text-cyan-400 font-bold">ℓ_P = 1.616e-35 m</span>
              </div>
            </div>
          </div>

          {/* Q2: Horizon Radius - Active at beat === 0 */}
          <div 
            className={`col-span-5 border rounded-xl p-[1.8cqw] bg-[#040819]/95 flex flex-col justify-between relative transition-all duration-700 overflow-hidden ${
              beat === 0 
                ? "border-[#22d3ee] shadow-[0_0_30px_rgba(34,211,238,0.25)] scale-[1.02] z-10" 
                : "border-slate-800 opacity-40 scale-[0.98]"
            }`}
          >
            <div className="absolute top-2 right-3 font-mono text-[1cqw] text-[#22d3ee]/40 font-bold">Q2 / RADIUS</div>

            <div>
              <span className="font-mono text-[0.85cqw] text-[#22d3ee] font-black tracking-widest block uppercase">
                {isZh ? "自转克尔视界半径" : "Kerr Spinning Horizon"}
              </span>
              <h3 className="font-serif text-[1.25cqw] font-black text-white mt-1 leading-none">
                {isZh ? "角动量对视界的收缩" : "Rotational Singularity Limit"}
              </h3>
            </div>

            <div className="my-[1.5cqh] py-[1cqh] px-[1cqw] bg-black/40 border border-[#22d3ee]/10 rounded flex justify-center items-center">
              <span className="font-mono text-[1.15cqw] text-white font-bold">
                R_+ = GM/c²(1 + √(1 - a_⋆²))
              </span>
            </div>

            <div className="flex justify-between items-center font-mono text-[0.8cqw]">
              <div className="text-slate-400 font-sans">
                {isZh ? "自转参数 a_⋆ 收缩视界，外围扭曲出能层。" : "Spin parameter a_⋆ contracts the horizon, forming the ergosphere."}
              </div>
              <div className="text-right shrink-0">
                <span className="text-slate-500 block">Kerr Limit</span>
                <span className="text-cyan-400 font-bold">a_⋆ = 0.998</span>
              </div>
            </div>
          </div>

          {/* Q3: Mass-Spin Decay - Active at beat === 1 */}
          <div 
            className={`col-span-5 border rounded-xl p-[1.8cqw] bg-[#040819]/95 flex flex-col justify-between relative transition-all duration-700 overflow-hidden ${
              beat === 1 
                ? "border-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.25)] scale-[1.02] z-10" 
                : "border-slate-800 opacity-40 scale-[0.98]"
            }`}
          >
            <div className="absolute top-2 right-3 font-mono text-[1cqw] text-amber-400/40 font-bold">Q3 / DECAY</div>

            <div>
              <span className="font-mono text-[0.85cqw] text-amber-400 font-black tracking-widest block uppercase">
                {isZh ? "霍金辐射质量衰变率" : "Hawking Mass Decay"}
              </span>
              <h3 className="font-serif text-[1.25cqw] font-black text-white mt-1 leading-none">
                {isZh ? "热量子蒸发级联爆发" : "Quantum Thermal Cascade"}
              </h3>
            </div>

            <div className="my-[1.5cqh] py-[1cqh] px-[1cqw] bg-black/40 border border-amber-400/10 rounded flex justify-center items-center">
              <span className="font-mono text-[0.95cqw] text-amber-400 font-bold">
                dM/dt = -ℏc⁴ / (15360 π G² M²)
              </span>
            </div>

            <div className="flex justify-between items-center font-mono text-[0.8cqw]">
              <div className="text-slate-400 font-sans">
                {isZh ? "质量 M 减少导致温度升高，蒸发速率呈指数级级联爆发。" : "Mass decrease boosts temp. Evaporation cascades exponentially."}
              </div>
              <div className="text-right shrink-0">
                <span className="text-slate-500 block">Decay Rate</span>
                <span className="text-amber-400 font-bold">dM/dt ∝ M⁻²</span>
              </div>
            </div>
          </div>

          {/* Q4: Quantum Entanglement - Active at beat === 2 */}
          <div 
            className={`col-span-7 border rounded-xl p-[1.8cqw] bg-[#040819]/95 flex flex-col justify-between relative transition-all duration-700 overflow-hidden ${
              beat === 2 
                ? "border-emerald-400 shadow-[0_0_30px_rgba(52,211,153,0.25)] scale-[1.02] z-10" 
                : "border-slate-800 opacity-40 scale-[0.98]"
            }`}
          >
            <div className="absolute top-2 right-3 font-mono text-[1cqw] text-emerald-400/40 font-bold">Q4 / QUANTUM</div>

            <div>
              <span className="font-mono text-[0.85cqw] text-emerald-400 font-black tracking-widest block uppercase">
                {isZh ? "视界粒子量子相干纠缠" : "Horizon Quantum Entanglement"}
              </span>
              <h3 className="font-serif text-[1.25cqw] font-black text-white mt-1 leading-none">
                {isZh ? "负能吸收与外逃虚粒子相干" : "Virtual Particle Correlated State"}
              </h3>
            </div>

            <div className="my-[1.5cqh] py-[1cqh] px-[1.5cqw] bg-black/40 border border-emerald-400/10 rounded flex justify-center items-center">
              <span className="font-mono text-[1.05cqw] text-emerald-400 font-bold">
                |Ψ⟩_out = ∑ e^-πω/a |n⟩_L ⊗ |n⟩_R
              </span>
            </div>

            <div className="flex justify-between items-end gap-[1.5cqw] font-mono text-[0.8cqw]">
              <p className="text-slate-400 leading-normal max-w-[28cqw] font-sans">
                {isZh 
                  ? "视界边缘的真空极化使得虚粒子对产生纠缠。坠入与外逃状态的高强度纠缠，在奇点蒸发时锁定了信息的绝对守恒。" 
                  : "Vacuum polarization at the horizon entangles virtual pairs, creating correlations that safeguard information conservation."}
              </p>
              <div className="text-right shrink-0">
                <span className="text-slate-500 block">Entanglement Coeff</span>
                <span className="text-emerald-400 font-bold">⟨0|U_evap|0⟩ = 1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Tracker Footer */}
        <div className="border-t border-slate-800 pt-[1cqh] flex justify-between items-center text-[0.8cqw] font-mono text-slate-400 shrink-0">
          <div className="flex items-center gap-[0.5cqw]">
            <Info className="w-[1.2cqw] h-[1.2cqw] text-[#22d3ee] animate-pulse" />
            <span className="font-sans">
              {isZh 
                ? "利用量子信息与相对论热力学，证明视界非奇异化。当霍金相干纠缠系数达到1时，量子信息丢失悖论在视界边界层得到完全解析。" 
                : "Combines quantum entanglement and general relativity to resolve the information loss paradox at the boundary layer."}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Render Scene 5: Ledger - Extreme Telemetry Panel
  const renderScene5 = () => {
    return (
      <div className="w-full h-full relative flex flex-col justify-between px-[4cqw] py-[3cqh] bg-[#030511]">
        {/* Header Title Bar */}
        <div className="border-b border-slate-800 pb-[1.5cqh] flex justify-between items-end shrink-0">
          <div className="flex items-center gap-3">
            <Database className="w-[2cqw] h-[2cqw] text-[#22d3ee]" />
            <div>
              <h2 className="font-serif text-[1.6cqw] font-black text-white tracking-tight uppercase">
                {isZh ? "霍金蒸发与视界遥测控制总账" : "HAWKING EVAPORATION & HORIZON TELEMETRY LEDGER"}
              </h2>
              <p className="font-mono text-[0.85cqw] text-slate-500 mt-1">
                {isZh ? "极高密度天体物理参数、奇点衰变文本日志流与量子能量黑体辐射谱线联合分析" : "Multi-spectral astrophysical ledger containing singularity decay rates, streaming logs, and blackbody spectrums"}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end font-mono text-[0.75cqw] text-slate-500 text-right shrink-0">
            <p><strong>{isZh ? "遥测编码：" : "SYSTEM_ID: "}</strong>HORIZON-DECAY-82B</p>
            <p><strong>{isZh ? "安全级别：" : "CLASS: "}</strong>PRES-SECURE-CONFIDENTIAL</p>
          </div>
        </div>

        {/* Main 3-Column Telemetry Board */}
        <div className="flex-1 w-full grid grid-cols-12 gap-[2.5cqw] my-[2cqh] overflow-hidden">
          {/* Left Column: Dense Numeric Metrics (Col 1-4) */}
          <div className="col-span-4 flex flex-col justify-between border-r border-slate-800/60 pr-[1cqw] overflow-hidden shrink-0">
            <div className="flex-1 flex flex-col gap-[1.5cqh] justify-center font-mono text-[0.8cqw] text-slate-300">
              {/* Mass */}
              <div className="bg-[#040819]/40 p-[1cqw] rounded border border-slate-800/50 flex flex-col gap-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">M / TOTAL MASS</span>
                  <span className="text-cyan-400 font-bold">6.52e9 M_sun</span>
                </div>
                <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-cyan-500 h-full rounded-full transition-all duration-1000" style={{ width: "92%" }} />
                </div>
              </div>

              {/* Spin */}
              <div className="bg-[#040819]/40 p-[1cqw] rounded border border-slate-800/50 flex flex-col gap-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">a_⋆ / SPIN FACTOR</span>
                  <span className="text-amber-400 font-bold">0.9982 (EXTREME)</span>
                </div>
                <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full transition-all duration-1000" style={{ width: "99.8%" }} />
                </div>
              </div>

              {/* Temperature */}
              <div className="bg-[#040819]/40 p-[1cqw] rounded border border-slate-800/50 flex justify-between">
                <span className="text-slate-500">T_H / HAWKING TEMP</span>
                <span className="text-white font-bold">1.22e-14 K</span>
              </div>

              {/* Luminosity */}
              <div className="bg-[#040819]/40 p-[1cqw] rounded border border-slate-800/50 flex justify-between">
                <span className="text-slate-500">L / EVAP LUMINOSITY</span>
                <span className="text-slate-300">3.84e37 erg/s</span>
              </div>

              {/* Accretion Rate */}
              <div className="bg-[#040819]/40 p-[1cqw] rounded border border-slate-800/50 flex justify-between">
                <span className="text-slate-500">dM/dt / LOSS RATE</span>
                <span className="text-red-400 font-bold">-4.18e-8 M_sun/yr</span>
              </div>

              {/* Magnetic field */}
              <div className="bg-[#040819]/40 p-[1cqw] rounded border border-slate-800/50 flex justify-between">
                <span className="text-slate-500">B_f / POLAR MAGNETIC</span>
                <span className="text-cyan-400 font-bold">4.82e4 G</span>
              </div>
            </div>

            {/* Curator Signature Line */}
            <div className="border-t border-slate-800/60 pt-[1.5cqh] mt-[1.5cqh] flex justify-between items-end font-mono text-[0.75cqw]">
              <div>
                <span className="text-slate-500 block uppercase">{isZh ? "核算人签字" : "COSMOLOGIST SIGN"}</span>
                <span className="font-serif italic text-white font-bold block text-[1.1cqw] mt-1">Stephen Hawking</span>
              </div>
              <div className="text-right text-slate-500 font-mono">
                <span>{isZh ? "坐标系: 施瓦西/克尔" : "COORD: SCHW/KERR"}</span>
              </div>
            </div>
          </div>

          {/* Center Column: Live Streaming Event Horizon Decay Text Logs (Col 5-8) */}
          <div className="col-span-4 flex flex-col justify-between border-r border-slate-800/60 pr-[1cqw] overflow-hidden shrink-0">
            <div className="font-mono text-[0.75cqw] text-cyan-400 bg-slate-950/90 rounded-lg border border-slate-800 p-[1.5cqw] h-[52cqh] overflow-hidden flex flex-col gap-[0.8cqh]">
              <div className="text-slate-500 text-[0.7cqw] border-b border-slate-800 pb-1 mb-1 flex justify-between shrink-0">
                <span>{isZh ? "[视界边界衰变流式日志]" : "[EVENT HORIZON DECAY LOGS]"}</span>
                <span className="animate-pulse text-cyan-400">● LIVE</span>
              </div>
              
              <div className="flex-1 flex flex-col gap-[0.5cqh] overflow-y-auto font-mono">
                <div className="text-slate-500">[00:01:23] [METRIC] Schwarzschild geometry solver initialized.</div>
                <div className="text-slate-500">[00:01:24] [SENSOR] Accretion disk temperature verified: 1.25e7 K.</div>
                <div className="text-slate-500">[00:01:25] [QUANTUM] Vacuum state fluctuations within baseline limits.</div>
                
                {beat >= 1 ? (
                  <>
                    <div className="text-amber-400">[00:14:02] [HAWKING] Virtual particle separation detected at r=1.002 Rs.</div>
                    <div className="text-amber-400">[00:14:03] [ABSORP] Negative energy virtual state absorbed by singularity.</div>
                    <div className="text-red-400 font-bold">[00:14:05] [MASS-LOSS] Singular mass loss: -4.18e-8 solar masses.</div>
                    <div className="text-amber-400">[00:14:06] [WARN] Horizon contraction rate accelerating.</div>
                  </>
                ) : (
                  <div className="text-slate-600 italic mt-2 animate-pulse font-sans">
                    {isZh ? "[等待激活霍金热辐射衰变过程...]" : "[Waiting for Hawking thermal decay trigger...]"}
                  </div>
                )}

                {beat >= 2 ? (
                  <>
                    <div className="text-emerald-400 font-bold">[00:28:40] [COHERENCE] Quantum information entanglement established.</div>
                    <div className="text-emerald-400">[00:28:41] [UNITARITY] S-matrix mapped. No information leakage detected.</div>
                    <div className="text-emerald-400 font-bold">[00:28:42] [CERT] Information Preservation Ledger Verified & Locked.</div>
                  </>
                ) : beat >= 1 ? (
                  <div className="text-slate-600 italic mt-2 animate-pulse font-sans">
                    {isZh ? "[等待高能相干纠缠证书锁定...]" : "[Waiting for quantum coherence validation...]"}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-auto border-t border-slate-800/60 pt-[1.5cqh] flex items-center gap-2 text-[0.8cqw] font-mono text-slate-500">
              <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate font-sans">
                {isZh ? "文本日志与视界微观量子态实时同步" : "Streaming telemetry syncs with quantum boundary fluctuations"}
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Hawking Spectrum Chart & Stamp Seal (Col 9-12) */}
          <div className="col-span-4 flex flex-col justify-between pl-[1cqw] relative shrink-0">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-mono text-[0.9cqw] text-cyan-400 font-bold flex items-center gap-1.5 border-b border-slate-800 pb-1.5 mb-2">
                  <Radio className="w-4 h-4 text-cyan-400" />
                  {isZh ? "霍金辐射能量谱线 [黑体辐射]" : "HAWKING ENERGY SPECTRUM [BLACKBODY]"}
                </h4>
                <p className="font-mono text-[0.75cqw] text-slate-500">
                  {isZh ? "辐射强度 I(ν) 随辐射频率 ν 的分布谱线" : "Energy flux distribution I(ν) vs photon frequency ν"}
                </p>
              </div>

              {/* SVG Spectrum Chart */}
              <div className="h-[24cqh] border border-slate-800 bg-[#02040b]/90 rounded p-[1cqw] relative flex flex-col justify-between my-[1.5cqh]">
                <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
                  <line x1="20" y1="10" x2="190" y2="10" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="1 3" />
                  <line x1="20" y1="50" x2="190" y2="50" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="1 3" />
                  <line x1="20" y1="90" x2="190" y2="90" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="1 3" />
                  
                  <text x="5" y="13" fill="#64748b" className="font-mono text-[6px] opacity-60">I(ν) max</text>
                  <text x="5" y="93" fill="#64748b" className="font-mono text-[6px] opacity-60">0</text>

                  <text x="25" y="98" fill="#64748b" className="font-mono text-[6px] opacity-60">0.1</text>
                  <text x="85" y="98" fill="#64748b" className="font-mono text-[6px] opacity-60">1.0 GHz</text>
                  <text x="145" y="98" fill="#64748b" className="font-mono text-[6px] opacity-60">10.0 GHz</text>

                  {/* Spectrum Curves */}
                  <path 
                    d="M 20 90 Q 50 60 70 80 T 190 90" 
                    fill="none" 
                    stroke="#0369a1" 
                    strokeWidth="1.5" 
                    className="opacity-40" 
                  />

                  {beat >= 1 && (
                    <path 
                      d="M 20 90 Q 60 20 90 60 T 190 90" 
                      fill="none" 
                      stroke="#d97706" 
                      strokeWidth="2" 
                      className="transition-all duration-1000"
                    />
                  )}

                  {beat >= 2 && (
                    <path 
                      d="M 20 90 Q 70 5 110 50 T 190 90" 
                      fill="none" 
                      stroke="#22d3ee" 
                      strokeWidth="2.5" 
                      className="transition-all duration-1000"
                    />
                  )}

                  {beat >= 2 && <circle cx="70" cy="5" r="3" fill="#fff" className="animate-ping" />}
                </svg>
              </div>

              <p className="font-mono text-[0.75cqw] leading-relaxed text-slate-400 font-sans">
                {isZh 
                  ? "光谱线符合普朗克黑体辐射公式。随着黑洞热蒸发，辐射谱峰值向高频（高能量）区间发生偏移。" 
                  : "The radiation spectrum matches Planck's blackbody distribution. As mass shrinks, peak shifts to higher frequency energy bands."}
              </p>
            </div>

            {/* Sovereign Red Wax Information Preservation Compliance Seal */}
            <div className="h-[14cqh] flex items-end justify-end mt-[1cqh]">
              {beat >= 2 ? (
                <div 
                  key="quantum-seal" 
                  className="w-[12cqw] h-[12cqw] border-[3px] border-double border-red-500 rounded-full flex flex-col items-center justify-center p-[0.5cqw] text-center text-red-500 font-serif font-black rotate-[-12deg] shadow-lg bg-[#030511] z-20"
                  style={{ 
                    boxShadow: "0 0 0 4px #030511, 0 10px 30px -5px rgba(239, 68, 68, 0.6)",
                    backgroundImage: "radial-gradient(circle, rgba(239, 68, 68, 0.08) 10%, transparent 10%)",
                    backgroundSize: "6px 6px"
                  }}
                >
                  <span className="text-[0.6cqw] tracking-wider font-mono font-bold leading-none">HAWKING QUANTUM</span>
                  <span className="text-[1.15cqw] my-[0.2cqh] tracking-widest border-y border-red-500 py-[0.1cqh] font-bold">
                    {isZh ? "信息守恒" : "APPROVED"}
                  </span>
                  <span className="text-[0.55cqw] font-mono font-bold tracking-tighter leading-none">
                    {isZh ? "物理学极性认证" : "INFO CONSERVATION"}
                  </span>
                </div>
              ) : (
                <div className="w-[12cqw] h-[12cqw] border border-dashed border-slate-800 rounded-full flex items-center justify-center text-center text-slate-600 font-mono text-[0.8cqw] italic">
                  {isZh ? "未加盖守恒印章" : "SEAL UNSTAMPED"}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Progress Tracker Footer */}
        <div className="border-t border-slate-800 pt-[1cqh] flex justify-between items-center text-[0.8cqw] font-mono text-slate-400 shrink-0">
          <div className="flex items-center gap-[0.5cqw]">
            <Info className="w-[1.2cqw] h-[1.2cqw] text-[#22d3ee] animate-pulse" />
            <span className="font-sans">
              {isZh 
                ? "视界遥测合并分析就绪。Stephen Hawking 对信息守恒总账进行了联合签字；当量子相干达成且黑体谱线爆发时，自动加盖信息守恒红蜡印章。" 
                : "Horizon telemetry synthesis completed. Stephen Hawking co-signed the ledger; approved seal is stamped upon quantum coherence."}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderScene = () => {
    switch (scene) {
      case 1:
        return renderScene1();
      case 2:
        return renderScene2();
      case 3:
        return renderScene3();
      case 4:
        return renderScene4();
      case 5:
        return renderScene5();
      default:
        return renderScene1();
    }
  };

  return (
    <div className="w-full h-full bg-[#030511] text-slate-100 relative overflow-hidden font-sans p-[3cqw] flex flex-col justify-between select-none">
      {/* Self-contained style block for Google Fonts and Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', Georgia, serif;
        }
        
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }
        
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes rotate-fast {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(34, 211, 238, 0.4)); }
          50% { filter: drop-shadow(0 0 30px rgba(34, 211, 238, 0.8)); }
        }
        
        @keyframes ripple-g {
          0% { transform: scale(1); opacity: 1; stroke-width: 2px; }
          100% { transform: scale(4); opacity: 0; stroke-width: 0.5px; }
        }
        
        @keyframes flow-dash {
          to { stroke-dashoffset: -45; }
        }
        
        .animate-spin-slow {
          animation: rotate-slow 40s linear infinite;
        }
        
        .animate-spin-fast {
          animation: rotate-fast 12s linear infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        
        .animate-ripple-g {
          animation: ripple-g 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: center;
        }
        
        .animate-flow {
          animation: flow-dash 1.2s linear infinite;
        }
        
        .sketch-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-path 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        @keyframes draw-path {
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* Main active scene view using Horizontal Spatial Viewport Track with padding to prevent vertical picker overlap */}
      <div className="flex-1 w-full pr-[24cqw] relative overflow-hidden">
        <div 
          className="flex w-[500%] h-full transition-transform duration-1000 ease-out"
          style={{
            transform: `translateX(-${(scene - 1) * 20}%)`,
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          <div className="w-[20%] h-full shrink-0">{renderScene1()}</div>
          <div className="w-[20%] h-full shrink-0">{renderScene2()}</div>
          <div className="w-[20%] h-full shrink-0">{renderScene3()}</div>
          <div className="w-[20%] h-full shrink-0">{renderScene4()}</div>
          <div className="w-[20%] h-full shrink-0">{renderScene5()}</div>
        </div>
      </div>

      {/* Right Vertical Gravitational Picker */}
      {renderNavigation()}
    </div>
  );
}
