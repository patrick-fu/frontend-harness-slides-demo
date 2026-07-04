import React, { useMemo } from "react";
import { 
  Music, Volume2, Activity, Shield, Sliders, Layers, 
  Disc, Sparkles, Award, FileText, CheckCircle, Radio
} from "lucide-react";

export const getMetadata = (lang) => {
  const isZh = lang === "zh";
  return {
    id: "11",
    tier: "S",
    density: "high",
    name: isZh ? "指挥家与管弦声部的协奏共鸣" : "Conductor & Orchestra Feedback",
    theme: isZh ? "古典管弦乐大协奏" : "Grand Orchestral Concerto",
    densityLabel: isZh ? "高能协奏总账" : "Symphonic Ledger Console",
    colors: { bg: "bg-[#0c0512]", ink: "text-[#eeddf8]", panel: "border-[#f59e0b]/20" },
    typography: { header: "font-serif", body: "font-sans" },
    scenes: [
      {
        id: 1,
        title: isZh ? "指挥棒指引与声能凝聚" : "Baton Trajectory & Sonic Focus",
        beats: [
          { action: isZh ? "举棒凝聚" : "Raise Baton" },
          { action: isZh ? "首拍起航" : "First Downbeat" },
          { action: isZh ? "时值相位" : "Tempo Phase Lock" }
        ]
      },
      {
        id: 2,
        title: isZh ? "声部呼应与双对位和声" : "Antiphonal Dialogue & Dual Align",
        beats: [
          { action: isZh ? "对话引导" : "Lead Strings" },
          { action: isZh ? "铜管灌注" : "Brass Influx" },
          { action: isZh ? "和声极性" : "Harmonic Balance" }
        ]
      },
      {
        id: 3,
        title: isZh ? "三阶渐强与全乐团大共鸣" : "Three-Stage Crescendo & Full Grid",
        beats: [
          { action: isZh ? "织入木管" : "Add Woodwinds" },
          { action: isZh ? "定音震击" : "Timpani Attack" },
          { action: isZh ? "谐波共鸣" : "Orchestra Peak Lock" }
        ]
      },
      {
        id: 4,
        title: isZh ? "声谱相位与掩蔽柔性调校" : "Spectral Phases & Masking Adjustment",
        beats: [
          { action: isZh ? "频谱扫描" : "Scan Spectrum" },
          { action: isZh ? "音量增益" : "Fader Balancing" },
          { action: isZh ? "声场清算" : "Verify Acoustic" }
        ]
      },
      {
        id: 5,
        title: isZh ? "全声部共鸣大网络控制台" : "Grand Symphonic Harmony Console",
        beats: [
          { action: isZh ? "协奏编译" : "Symphonic Influx" },
          { action: isZh ? "共鸣融合" : "Harmonic Convergence" },
          { action: isZh ? "华彩收官" : "Grand Finale Seal" }
        ]
      }
    ]
  };
};

export default function Style11({ scene, beat, language, isThumbnail, onNavigate }) {
  const isZh = language === "zh";

  // Mathematical Lissajous Figure-Eight Path
  const lissajousPath = useMemo(() => {
    const points = [];
    const width = 500;
    const height = 240;
    const cx = width / 2;
    const cy = height / 2;
    const rx = width / 2.4;
    const ry = height / 2.4;
    for (let i = 0; i <= 100; i++) {
      const t = (i / 100) * 2 * Math.PI;
      const x = cx + rx * Math.sin(t);
      const y = cy + ry * Math.sin(2 * t);
      points.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`);
    }
    return points.join(" ");
  }, []);

  // Section highlight states based on scene/beat
  const getSectionLevels = () => {
    if (scene === 1) {
      if (beat === 0) return [20, 0, 0, 0];
      if (beat === 1) return [65, 15, 0, 0];
      return [80, 25, 10, 0];
    }
    if (scene === 2) {
      if (beat === 0) return [85, 30, 15, 5];
      if (beat === 1) return [80, 30, 90, 15];
      return [85, 40, 85, 25];
    }
    if (scene === 3) {
      if (beat === 0) return [90, 80, 80, 35];
      if (beat === 1) return [92, 85, 85, 95];
      return [99, 95, 96, 98];
    }
    if (scene === 4) {
      if (beat === 0) return [70, 60, 50, 45];
      if (beat === 1) return [75, 90, 60, 50];
      return [80, 85, 70, 55];
    }
    // Scene 5
    if (beat === 0) return [90, 80, 85, 75];
    if (beat === 1) return [98, 95, 94, 92];
    return [0, 0, 0, 0]; // Divine Silence at Beat 2!
  };

  const levels = getSectionLevels();

  // Navigation: Top-Right Concentric Arcs Orchestra Seating Tracker
  const renderSeatingTracker = () => {
    if (isThumbnail || !onNavigate) return null;

    const cx = 100;
    const cy = 110;
    const radii = [32, 50, 68, 86, 104]; // 5 concentric seating arcs
    
    const sectionNames = [
      isZh ? "序曲 [C4]" : "Prelude [C4]",
      isZh ? "呼应 [D4]" : "Dialogue [D4]",
      isZh ? "渐强 [E4]" : "Crescendo [E4]",
      isZh ? "均衡 [F4]" : "Balance [F4]",
      isZh ? "总账 [G4]" : "Ledger [G4]"
    ];

    const sectionDescs = [
      isZh ? "指挥棒凝聚" : "Baton Focus",
      isZh ? "声部双对位" : "Dual Antiphonal",
      isZh ? "三阶谐波链" : "3-Stage Climax",
      isZh ? "双轴声谱网" : "Biaxial Grid",
      isZh ? "皇家谱面印" : "Master Ledger"
    ];

    return (
      <div className="absolute top-[2cqh] right-[2cqw] z-50 w-[14cqw] h-[11cqw] bg-[#12051c]/60 backdrop-blur-md border border-[#f59e0b]/20 rounded-2xl p-[1cqw] flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)] select-none group/tracker">
        {/* Widget Header */}
        <div className="flex justify-between items-center border-b border-[#4b355e]/30 pb-[0.5cqh] mb-[0.5cqh] pointer-events-none">
          <span className="font-mono text-[0.7cqw] tracking-widest text-[#f59e0b] uppercase font-bold">
            {isZh ? "乐团席位追踪" : "ORCHESTRA SEATING"}
          </span>
          <span className="font-mono text-[0.6cqw] text-purple-300 opacity-60">
            SCENE 0{scene}/05
          </span>
        </div>

        {/* SVG Seating Arcs Canvas */}
        <div className="flex-1 relative w-full h-full min-h-0">
          <svg viewBox="0 0 200 130" className="w-full h-full overflow-visible">
            {/* Definitions for Glow Filters */}
            <defs>
              <filter id="gold-glow-tracker" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Render 5 Concentric Seating Arcs */}
            {radii.map((r, idx) => {
              const sNum = idx + 1;
              const isActive = scene === sNum;
              
              // Angle steps for equalizer bars along the active arc
              const numBars = 9;
              const bars = [];
              if (isActive) {
                const maxH = (5 + sNum * 1.5) * (beat === 0 ? 0.6 : beat === 1 ? 0.9 : 1.3);
                for (let i = 0; i < numBars; i++) {
                  // angle goes from 165 to 15 degrees (left to right)
                  const angleDeg = 165 - (i * 150) / (numBars - 1);
                  const angleRad = (angleDeg * Math.PI) / 180;
                  const x = cx + r * Math.cos(angleRad);
                  const y = cy - r * Math.sin(angleRad);
                  
                  bars.push({
                    x,
                    y,
                    maxH,
                    i
                  });
                }
              }

              // Path definition for semi-circle (from 170 deg to 10 deg for better visual spacing)
              const startAngle = 170;
              const endAngle = 10;
              const x1 = cx + r * Math.cos((startAngle * Math.PI) / 180);
              const y1 = cy - r * Math.sin((startAngle * Math.PI) / 180);
              const x2 = cx + r * Math.cos((endAngle * Math.PI) / 180);
              const y2 = cy - r * Math.sin((endAngle * Math.PI) / 180);
              const arcPath = `M ${x1.toFixed(1)} ${y1.toFixed(1)} A ${r} ${r} 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`;

              return (
                <g 
                  key={sNum} 
                  className="cursor-pointer group/arc"
                  onClick={() => onNavigate(sNum, 0)}
                >
                  {/* Invisible wide click buffer path */}
                  <path 
                    d={arcPath} 
                    fill="none" 
                    stroke="transparent" 
                    strokeWidth="10" 
                    className="stroke-transparent fill-none"
                  />

                  {/* Base Wire Arc */}
                  <path 
                    d={arcPath} 
                    fill="none" 
                    stroke={isActive ? "#eeddf8" : "#4b355e"} 
                    strokeWidth={isActive ? "1.5" : "0.8"} 
                    className={`transition-all duration-500 ${
                      isActive ? "opacity-100" : "opacity-40 group-hover/arc:stroke-[#eeddf8] group-hover/arc:opacity-80"
                    }`}
                  />

                  {/* Active Glowing Arc behind base path */}
                  {isActive && (
                    <path 
                      d={arcPath} 
                      fill="none" 
                      stroke="#f59e0b" 
                      strokeWidth="3.5" 
                      filter="url(#gold-glow-tracker)"
                      className="opacity-80 animate-pulse"
                    />
                  )}

                  {/* Render rhythmic dB columns for active arc */}
                  {isActive && bars.map((bar) => (
                    <line
                      key={bar.i}
                      x1={bar.x}
                      y1={bar.y}
                      x2={bar.x}
                      y2={bar.y - bar.maxH}
                      stroke="#eeddf8"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    >
                      <animate 
                        attributeName="y2" 
                        values={`${bar.y}; ${bar.y - bar.maxH * 0.4}; ${bar.y - bar.maxH * 0.95}; ${bar.y - bar.maxH * 0.15}; ${bar.y - bar.maxH}; ${bar.y}`} 
                        dur={`${0.6 + (bar.i % 3) * 0.18}s`} 
                        repeatCount="indefinite" 
                      />
                    </line>
                  ))}
                  {isActive && bars.map((bar) => (
                    <line
                      key={`glow-${bar.i}`}
                      x1={bar.x}
                      y1={bar.y}
                      x2={bar.x}
                      y2={bar.y - bar.maxH}
                      stroke="#f59e0b"
                      strokeWidth="3"
                      strokeLinecap="round"
                      filter="url(#gold-glow-tracker)"
                      className="opacity-70"
                    >
                      <animate 
                        attributeName="y2" 
                        values={`${bar.y}; ${bar.y - bar.maxH * 0.4}; ${bar.y - bar.maxH * 0.95}; ${bar.y - bar.maxH * 0.15}; ${bar.y - bar.maxH}; ${bar.y}`} 
                        dur={`${0.6 + (bar.i % 3) * 0.18}s`} 
                        repeatCount="indefinite" 
                      />
                    </line>
                  ))}

                  {/* Little section dot at the apex of the arc */}
                  {(() => {
                    const apexX = cx;
                    const apexY = cy - r;
                    return (
                      <circle 
                        cx={apexX} 
                        cy={apexY} 
                        r={isActive ? 3.5 : 2} 
                        className={`transition-all duration-500 ${
                          isActive 
                            ? "fill-[#f59e0b] stroke-[#eeddf8] stroke-[1px] scale-110" 
                            : "fill-[#4b355e] group-hover/arc:fill-[#eeddf8]"
                        }`}
                        style={isActive ? { filter: "url(#gold-glow-tracker)" } : {}}
                      />
                    );
                  })()}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected Scene Info */}
        <div className="border-t border-[#4b355e]/30 pt-[0.4cqh] mt-[0.4cqh] flex justify-between items-center pointer-events-none">
          <div className="flex flex-col">
            <span className="font-serif italic text-[0.85cqw] font-bold text-white leading-none">
              {sectionNames[scene - 1]}
            </span>
            <span className="font-sans text-[0.65cqw] text-zinc-400 mt-[0.2cqh] leading-none">
              {sectionDescs[scene - 1]}
            </span>
          </div>
          <span className="font-mono text-[0.6cqw] text-[#f59e0b] opacity-80 uppercase tracking-wider">
            {isZh ? "席位锁定" : "SEAT LOCK"}
          </span>
        </div>
      </div>
    );
  };

  // Scene 1: Premise - Ultralight Symphonic Prelude
  const renderScene1 = () => {
    return (
      <div className="w-full h-full flex flex-col justify-between p-[2cqw] relative">
        {/* Deep integrated layout with high negative space */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          
          {/* Floating Elegant Copy */}
          <div className="absolute top-[2cqh] text-center max-w-[50cqw] z-10 transition-all duration-700">
            <span className="font-serif italic text-[1.4cqw] text-[#f59e0b] tracking-[0.4cqw] uppercase block opacity-90 animate-pulse">
              —— 庄严交响前奏 · 寰宇皆静 ——
            </span>
            <h1 className="text-[3.6cqw] font-serif font-black text-white mt-[1cqh] tracking-tight leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
              {isZh ? "指挥棒指引与声能凝聚" : "Baton Trajectory & Sonic Focus"}
            </h1>
            <p className="text-[1.1cqw] text-zinc-300 font-sans mt-[2cqh] leading-[1.6] px-[2cqw] border-x border-[#f59e0b]/20">
              {isZh 
                ? "举棒凝气，千百乐手呼吸同频。寂静并非音符的缺失，而是声学风暴前最具张力的完美承托。金棒划空，音场流线于虚无中苏醒。" 
                : "The conductor raises the baton; hundreds of musicians share a single breath. Silence is not the absence of sound, but the ultimate acoustic canvas. A single gold trajectory awakens the sonic streams."}
            </p>
          </div>

          {/* Center visual: Gold-glowing Conductor Baton & Lissajous curve */}
          <div className="w-[60cqw] h-[34cqh] flex items-center justify-center relative mt-[8cqh]">
            <svg viewBox="0 0 500 240" className="w-full h-full overflow-visible z-10">
              {/* Lissajous infinity curve in background */}
              <path 
                d={lissajousPath} 
                fill="none" 
                stroke="#4b355e" 
                strokeWidth="1.5" 
                className="opacity-40" 
              />
              
              {/* Glowing animated path based on beat */}
              <path 
                d={lissajousPath} 
                fill="none" 
                stroke="#f59e0b" 
                strokeWidth="3.2" 
                strokeLinecap="round"
                className="transition-all duration-1000 opacity-95" 
                strokeDasharray="500"
                strokeDashoffset={beat === 0 ? 500 : beat === 1 ? 250 : 0}
                filter="url(#gold-glow)"
              />

              {/* Infinite soundwaves rippling out from the curve center (Beat 2 climax) */}
              {beat >= 2 && (
                <g transform="translate(250, 120)" className="opacity-70 animate-pulse">
                  <ellipse cx="0" cy="0" rx="220" ry="90" stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="3 6" className="animate-spin-slow" />
                  <ellipse cx="0" cy="0" rx="180" ry="70" stroke="#bf5af2" strokeWidth="0.8" strokeDasharray="4 8" />
                  <ellipse cx="0" cy="0" rx="120" ry="45" stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="1 4" className="animate-spin-fast" style={{ animationDirection: "reverse" }} />
                </g>
              )}

              {/* The baton tip glowing orb, animated along the Lissajous infinity path */}
              <circle cx="0" cy="0" r="10" fill="#f59e0b" className="baton-tip-animated" filter="url(#gold-glow)" />
              <circle cx="0" cy="0" r="4" fill="#eeddf8" className="baton-tip-animated" />
            </svg>
          </div>

          {/* Dynamic beat indicators floating at bottom of scene */}
          <div className="absolute bottom-[2cqh] flex gap-[2cqw] text-[1cqw] font-mono z-10">
            {[
              { b: 0, zh: "1. 举棒悬气", en: "1. Lift Baton", active: beat >= 0 },
              { b: 1, zh: "2. 首拍划下", en: "2. First Downbeat", active: beat >= 1 },
              { b: 2, zh: "3. 相位锁定", en: "3. Phase Lock", active: beat >= 2 }
            ].map((bt) => (
              <div 
                key={bt.b} 
                className={`px-3 py-1 rounded border transition-all duration-500 ${
                  beat === bt.b 
                    ? "border-[#f59e0b] bg-[#f59e0b]/10 text-white font-bold shadow-[0_0_15px_rgba(245,158,11,0.2)]" 
                    : bt.active
                      ? "border-[#4b355e] text-zinc-300 opacity-60"
                      : "border-zinc-800 text-zinc-600 opacity-30"
                }`}
              >
                <span>{isZh ? bt.zh : bt.en}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    );
  };

  // Scene 2: Dual - Light Woodwinds vs. Strings Antiphonal Dialogue
  const renderScene2 = () => {
    return (
      <div className="w-full h-full flex flex-col justify-between p-[2cqw] relative">
        <div className="flex-1 grid grid-cols-12 gap-[3cqw] items-center my-auto">
          
          {/* Left Symmetric Panel: Strings Section */}
          <div 
            className={`col-span-6 h-[50cqh] rounded-3xl p-[2cqw] bg-[#160a22]/90 border transition-all duration-1000 transform relative flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.5)] overflow-hidden ${
              beat >= 0 ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            } ${beat === 0 ? "border-[#f59e0b] shadow-[0_0_25px_rgba(245,158,11,0.2)]" : "border-[#4b355e]/50"}`}
          >
            {/* Slat Wood Panel Styling */}
            <div className="absolute inset-y-0 right-0 w-[0.8cqw] flex flex-col justify-between py-[2cqh] opacity-25">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-[2cqh] w-[0.3cqw] bg-[#f59e0b] rounded-full" />
              ))}
            </div>

            <div>
              <div className="flex justify-between items-center border-b border-[#4b355e]/40 pb-[1.5cqh]">
                <span className="font-serif italic text-[1.2cqw] text-[#f59e0b] font-bold">Strings Section / 弦乐声部</span>
                <span className="text-[1cqw] font-mono font-bold bg-[#bf5af2]/20 text-[#eeddf8] px-2 py-0.5 rounded">REG_L1</span>
              </div>
              <h2 className="text-[2cqw] font-serif font-black text-white mt-[1.5cqh] leading-tight">
                {isZh ? "小提琴与大提琴双向对位" : "Cello & Violin Bidirectional Counterpoint"}
              </h2>
              {/* Styled Acoustic slots / Description Tabs */}
              <div className="mt-[2.5cqh] flex flex-col gap-[1.2cqh]">
                {[
                  { title: isZh ? "第一提琴 (Violin I)" : "1st Violins", desc: isZh ? "高亢流丽旋律线" : "Soaring expressive melody", show: beat >= 0 },
                  { title: isZh ? "大提琴 (Violoncelli)" : "Cellos Section", desc: isZh ? "低沉醇厚势能支撑" : "Warm resonant foundation support", show: beat >= 2 }
                ].map((slot, i) => (
                  <div 
                    key={i} 
                    className={`p-[1cqw] rounded-xl border transition-all duration-700 ${
                      slot.show 
                        ? "bg-[#251239] border-[#f59e0b]/20 text-white" 
                        : "bg-transparent border-zinc-800/40 text-zinc-500 opacity-20"
                    }`}
                  >
                    <span className="font-serif italic text-[1cqw] font-bold block">{slot.title}</span>
                    <span className="text-[0.85cqw] font-sans block mt-[0.2cqh] opacity-80">{slot.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center text-[0.85cqw] font-mono text-purple-300">
              <span>Status: {beat === 0 ? "CONDUCTING LEAD" : "STEADY ACTIVE"}</span>
              <span>{levels[0]} dB</span>
            </div>
          </div>

          {/* Right Symmetric Panel: Woodwinds Section */}
          <div 
            className={`col-span-6 h-[50cqh] rounded-3xl p-[2cqw] bg-[#160a22]/90 border transition-all duration-1000 transform relative flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.5)] overflow-hidden ${
              beat >= 1 ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            } ${beat === 1 ? "border-[#f59e0b] shadow-[0_0_25px_rgba(245,158,11,0.2)]" : "border-[#4b355e]/50"}`}
          >
            {/* Slat Wood Panel Styling */}
            <div className="absolute inset-y-0 left-0 w-[0.8cqw] flex flex-col justify-between py-[2cqh] opacity-25">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-[2cqh] w-[0.3cqw] bg-[#f59e0b] rounded-full" />
              ))}
            </div>

            <div>
              <div className="flex justify-between items-center border-b border-[#4b355e]/40 pb-[1.5cqh]">
                <span className="font-serif italic text-[1.2cqw] text-[#f59e0b] font-bold">Woodwinds & Brass / 木管铜管</span>
                <span className="text-[1cqw] font-mono font-bold bg-[#bf5af2]/20 text-[#eeddf8] px-2 py-0.5 rounded">REG_H2</span>
              </div>
              <h2 className="text-[2cqw] font-serif font-black text-white mt-[1.5cqh] leading-tight">
                {isZh ? "圆号与木管和声倾泻" : "French Horns & Woodwind Dialogue"}
              </h2>
              {/* Styled Acoustic slots / Description Tabs */}
              <div className="mt-[2.5cqh] flex flex-col gap-[1.2cqh]">
                {[
                  { title: isZh ? "长笛与双簧管 (Flute & Oboe)" : "Flutes & Oboes", desc: isZh ? "晶莹剔透高频修饰" : "Sparkling crystal pitch flutter", show: beat >= 1 },
                  { title: isZh ? "圆号声部 (French Horns)" : "French Horns", desc: isZh ? "中频和声温暖包裹" : "Massive warm middle-range fill", show: beat >= 2 }
                ].map((slot, i) => (
                  <div 
                    key={i} 
                    className={`p-[1cqw] rounded-xl border transition-all duration-700 ${
                      slot.show 
                        ? "bg-[#251239] border-[#f59e0b]/20 text-white" 
                        : "bg-transparent border-zinc-800/40 text-zinc-500 opacity-20"
                    }`}
                  >
                    <span className="font-serif italic text-[1cqw] font-bold block">{slot.title}</span>
                    <span className="text-[0.85cqw] font-sans block mt-[0.2cqh] opacity-80">{slot.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center text-[0.85cqw] font-mono text-purple-300">
              <span>Status: {beat === 1 ? "BRASS INFLUXED" : beat === 2 ? "DUAL BALANCED" : "STANDBY"}</span>
              <span>{levels[2]} dB</span>
            </div>
          </div>

          {/* Connecting resonance line active on Beat 2 */}
          {beat >= 2 && (
            <div className="absolute left-[45cqw] right-[45cqw] top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-20">
              <div className="w-[10cqw] h-[0.5cqh] bg-gradient-to-r from-[#f59e0b] via-[#eeddf8] to-[#bf5af2] rounded-full animate-pulse shadow-[0_0_20px_#f59e0b]" />
            </div>
          )}

        </div>
      </div>
    );
  };

  // Scene 3: Process - Standard 3-Part Harmonic Crescendo
  const renderScene3 = () => {
    return (
      <div className="w-full h-full flex flex-col justify-between p-[2cqw] relative">
        <div className="flex-1 flex flex-col justify-between my-auto">
          
          {/* Header Area */}
          <div className="border-b border-[#4b355e]/30 pb-[1.5cqh] flex justify-between items-end">
            <div>
              <span className="font-mono text-[1cqw] tracking-widest text-[#f59e0b] uppercase block">
                STAGE TIMELINE & REGISTERS // 三阶管弦大协奏
              </span>
              <h1 className="text-[2.6cqw] font-serif font-black text-white mt-1">
                {isZh ? "三阶谐波渐强与频段流转" : "Three-Stage Crescendo & Register Flow"}
              </h1>
            </div>
            <div className="bg-[#1b0b2b] border border-[#f59e0b]/30 px-3 py-1.5 rounded-lg text-[#f59e0b] font-mono text-[0.85cqw] font-bold mr-[15cqw]">
              {isZh ? "和声演进链" : "HARMONIC CHAIN"}
            </div>
          </div>

          {/* Interactive register flow timeline */}
          <div className="flex-1 grid grid-cols-3 gap-[2cqw] items-center my-[3cqh] relative">
            
            {/* Visual Staff Line running horizontally across registers */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[10cqh] pointer-events-none z-0">
              <svg className="w-full h-full" viewBox="0 0 900 100" fill="none">
                <line x1="0" y1="30" x2="900" y2="30" stroke="#4b355e" strokeWidth="1" className="opacity-40" />
                <line x1="0" y1="50" x2="900" y2="50" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 5" className="opacity-30" />
                <line x1="0" y1="70" x2="900" y2="70" stroke="#4b355e" strokeWidth="1" className="opacity-40" />
                
                {/* Active golden wave ripples moving along registers */}
                {beat >= 0 && (
                  <path 
                    d="M 0 50 Q 150 10, 300 50" 
                    stroke="#f59e0b" 
                    strokeWidth="3.5" 
                    className="animate-pulse" 
                    filter="url(#gold-glow)" 
                  />
                )}
                {beat >= 1 && (
                  <path 
                    d="M 300 50 Q 450 90, 600 50" 
                    stroke="#bf5af2" 
                    strokeWidth="3.5" 
                    className="animate-pulse" 
                  />
                )}
                {beat >= 2 && (
                  <path 
                    d="M 600 50 Q 750 10, 900 50" 
                    stroke="#eeddf8" 
                    strokeWidth="4" 
                    className="animate-pulse" 
                    filter="url(#gold-glow)" 
                  />
                )}
              </svg>
            </div>

            {[
              { 
                step: "01", 
                title: isZh ? "呈示部 (Exposition)" : "Exposition Stage", 
                meta: isZh ? "低频基座 · 弦乐拉弓" : "Bass registers · String foundation",
                desc: isZh ? "大提琴与低音提琴拉响低频基石，稳固和声骨架。" : "Cellos and double basses lock the structural register.",
                active: beat >= 0,
                current: beat === 0,
                color: "border-[#f59e0b]",
                glow: "shadow-[0_0_20px_rgba(245,158,11,0.25)]"
              },
              { 
                step: "02", 
                title: isZh ? "展开部 (Development)" : "Development Stage", 
                meta: isZh ? "中频织入 · 铜管圆号" : "Mid registers · French Horns fill",
                desc: isZh ? "圆号和木管琶音倾注，对位冲突剧烈铺展，频段向高处腾飞。" : "Woodwind arpeggios and horns conflict and weave complexly.",
                active: beat >= 1,
                current: beat === 1,
                color: "border-[#bf5af2]",
                glow: "shadow-[0_0_20px_rgba(191,90,242,0.25)]"
              },
              { 
                step: "03", 
                title: isZh ? "再现部 (Recapitulation)" : "Recapitulation", 
                meta: isZh ? "全谱齐奏 · 华彩巅峰" : "Full register · Grand climax",
                desc: isZh ? "定音鼓引爆，数十声部完美交叠锁相，大谐波网全量轰鸣。" : "Timpani grounds the climax; hundreds of phase loops lock fully.",
                active: beat >= 2,
                current: beat === 2,
                color: "border-zinc-100",
                glow: "shadow-[0_0_25px_rgba(238,221,248,0.3)]"
              }
            ].map((node, idx) => (
              <div 
                key={idx} 
                className={`p-[1.8cqw] h-[34cqh] rounded-3xl border bg-[#12051c]/95 flex flex-col justify-between transition-all duration-700 transform z-10 ${
                  node.active ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-25 translate-y-4"
                } ${node.current ? `${node.color} ${node.glow} ring-1 ring-[#f59e0b]/40` : "border-[#4b355e]/40"}`}
              >
                <div>
                  <div className="flex justify-between items-center border-b border-[#4b355e]/20 pb-2">
                    <span className="font-mono text-[1.1cqw] text-[#f59e0b] font-bold">STAGE {node.step}</span>
                    <span className={`w-2.5 h-2.5 rounded-full ${node.current ? "bg-[#f59e0b] animate-ping" : node.active ? "bg-[#bf5af2]" : "bg-zinc-800"}`} />
                  </div>
                  <h3 className="font-serif text-[1.4cqw] font-black text-white mt-[1cqh]">{node.title}</h3>
                  <span className="font-serif italic text-[0.9cqw] text-[#9c7cb6] block mt-0.5">{node.meta}</span>
                  <p className="text-[0.9cqw] text-zinc-300 font-sans mt-[1.5cqh] leading-relaxed">{node.desc}</p>
                </div>
                <div className="text-right font-mono text-[0.8cqw] text-[#eeddf8]/50">
                  REF: REGISTRY_ST_{node.step}
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    );
  };

  // Scene 4: Matrix - Dense Biaxial Orchestral Balance
  const renderScene4 = () => {
    return (
      <div className="w-full h-full flex flex-col justify-between p-[2cqw] relative">
        <div className="flex-1 flex flex-col justify-between my-auto">
          
          {/* Header */}
          <div className="border-b border-[#4b355e]/30 pb-[1.5cqh] flex justify-between items-end">
            <div>
              <span className="font-mono text-[1cqw] tracking-widest text-[#f59e0b] uppercase block">
                BIAXIAL ORCHESTRAL BALANCER // 声谱干涉矩阵
              </span>
              <h1 className="text-[2.6cqw] font-serif font-black text-white mt-1">
                {isZh ? "双轴声谱网与掩蔽反馈校准" : "Biaxial Spectral Phase & Masking Matrix"}
              </h1>
            </div>
            <span className="text-[1cqw] font-mono text-emerald-400 font-bold bg-emerald-950/40 px-3 py-1 rounded border border-emerald-500/20 mr-[15cqw]">
              ● {isZh ? "自适应干涉对齐" : "AUTOPILOT LOCK"}
            </span>
          </div>

          {/* 2x2 Dense Bento Grid */}
          <div className="flex-1 grid grid-cols-2 gap-[1.8cqw] my-[2cqh]">
            {[
              {
                q: "M1",
                title: isZh ? "分贝声能强度 (Decibel Peak Power)" : "Decibel Peak Power",
                val: `${levels[0]} dB`,
                detail: isZh ? "声部动态响度限制，防止高响度铜管破坏声学通透度。" : "Peak dynamic ceiling limiter, protecting string flutter transparency.",
                sub: "Max Limit: 105 dB // Baseline: 40 dB",
                active: beat === 0,
                color: "border-[#bf5af2]"
              },
              {
                q: "M2",
                title: isZh ? "谐波畸变率 (Harmonic Distortion Rate)" : "Harmonic Distortion Rate",
                val: "0.015% THD",
                detail: isZh ? "声相位精确对位后，非线性频段杂音在物理干涉下被完全消除。" : "Non-linear distortion fully cancelled via wave phase interference.",
                sub: "Threshold: < 0.05% // Status: COMPLIANT",
                active: beat === 0,
                color: "border-[#bf5af2]"
              },
              {
                q: "M3",
                title: isZh ? "吸音衰减率 (Echo Absorption Purity)" : "Echo Absorption Purity",
                val: "RT60: 1.25s",
                detail: isZh ? "演奏厅建筑死角混响补偿，多路径声反射残响完美吸收。" : "Concert hall acoustic absorption, canceling spatial flutter echos.",
                sub: "Reverb Target: 1.20s - 1.30s // Purity: 99.8%",
                active: beat === 1,
                color: "border-[#bf5af2]"
              },
              {
                q: "M4",
                title: isZh ? "声部同步率 (Section Sync Accuracy)" : "Section Sync Accuracy",
                val: "± 0.12ms",
                detail: isZh ? "弦乐部百把提琴弓段换向毫米级咬合，消除多线程杂音。" : "Massive multi-bow synchronization lock, ensuring absolute cohesion.",
                sub: "Phase Align: 99.98% // Stamp: GRAND FINALE SEAL",
                active: beat === 2,
                color: "border-[#f59e0b]",
                pulse: "animate-pulse shadow-[0_0_25px_rgba(245,158,11,0.25)]"
              }
            ].map((cell, idx) => (
              <div 
                key={idx} 
                className={`p-[1.5cqw] rounded-3xl border bg-[#11051c]/95 flex flex-col justify-between transition-all duration-500 relative overflow-hidden ${
                  cell.active 
                    ? `${cell.color} ${cell.pulse || "shadow-[0_0_20px_rgba(191,90,242,0.2)]"} scale-100 opacity-100 z-10` 
                    : "border-[#4b355e]/30 opacity-30 scale-95"
                }`}
              >
                {/* Visual grid watermarks */}
                <div className="absolute top-2 right-4 font-mono text-[1.1cqw] text-[#f59e0b]/20 font-black tracking-wider">{cell.q}</div>

                <div>
                  <span className="font-serif italic text-[1.1cqw] text-[#f59e0b] font-bold block">{cell.title}</span>
                  <div className="flex items-baseline gap-[1cqw] mt-[1cqh]">
                    <span className="text-[2.2cqw] font-serif font-black text-white leading-none tracking-tight">{cell.val}</span>
                    <span className="text-[0.8cqw] font-mono text-purple-300 opacity-60 font-bold uppercase">{cell.active ? "[ACTIVE MONITOR]" : "[STANDBY]"}</span>
                  </div>
                  <p className="text-[0.9cqw] text-zinc-300 font-sans mt-[1cqh] leading-relaxed">{cell.detail}</p>
                </div>

                <div className="border-t border-[#4b355e]/20 pt-2 mt-2 flex justify-between font-mono text-[0.8cqw] text-[#eeddf8]/50">
                  <span>{cell.sub}</span>
                  <span>SYS: MET_LOCK_{cell.q}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    );
  };

  // Scene 5: Ledger - Extreme Full-Page Orchestral Ledger
  const renderScene5 = () => {
    return (
      <div className="w-full h-full flex flex-col justify-between p-[2cqw] relative">
        <div className="flex-1 flex flex-col justify-between my-auto">
          
          {/* Header Title */}
          <div className="border-b border-[#4b355e]/30 pb-[1.2cqh] flex justify-between items-end">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30">
                <FileText className="w-6 h-6 text-[#f59e0b]" />
              </div>
              <div>
                <span className="font-mono text-[1cqw] tracking-widest text-[#f59e0b] uppercase block">
                  CANTOR COMPLIANCE SCORE SHEET // 全声部指挥总账
                </span>
                <h1 className="text-[2.5cqw] font-serif font-black text-white tracking-tight leading-none mt-0.5">
                  {isZh ? "管弦大合唱大协奏考量总账" : "Full Grand Orchestral Score & Reverberant Ledger"}
                </h1>
              </div>
            </div>
            <div className="text-right font-mono text-[0.8cqw] text-zinc-400 mr-[15cqw]">
              <p>LEDGER_ID: L-LEIPZIG-1723_0B</p>
              <p>CLASS: SACRED-COHERENCE-LEDGER</p>
            </div>
          </div>

          {/* Main 2-Column Score Ledger Grid */}
          <div className="flex-1 grid grid-cols-12 gap-[2.5cqw] my-[1.8cqh] overflow-hidden">
            
            {/* Left Score Sheet Table (Col 1-8) */}
            <div className="col-span-8 bg-[#13071f]/85 border border-[#4b355e]/40 rounded-3xl p-[1.5cqw] flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(245,158,11,0.1)_1px,transparent_1px)] [background-size:100%_1.5cqh] pointer-events-none" />
              
              <div className="w-full">
                <div className="grid grid-cols-12 font-mono text-[0.8cqw] text-[#f59e0b] font-bold border-b border-[#4b355e]/40 pb-2 uppercase">
                  <span className="col-span-3">{isZh ? "管弦乐部 (Section)" : "Orchestra Section"}</span>
                  <span className="col-span-2 text-center">{isZh ? "主频率 (Freq)" : "Frequency"}</span>
                  <span className="col-span-4 text-center">{isZh ? "响度波形 (Loudness Wave)" : "Real-time dB Gain"}</span>
                  <span className="col-span-1 text-right">{isZh ? "相位差" : "Phase"}</span>
                  <span className="col-span-2 text-right">{isZh ? "混响比" : "Reverb"}</span>
                </div>

                <div className="flex flex-col gap-[1.2cqh] mt-[1.5cqh] text-[0.9cqw] font-mono text-zinc-200">
                  {[
                    { section: isZh ? "第一提琴 (First Violins)" : "First Violins V1", freq: "650Hz", vol: levels[0], phase: "+0.1ms", rev: "0.68" },
                    { section: isZh ? "第二提琴 (Second Violins)" : "Second Violins V2", freq: "580Hz", vol: levels[0] * 0.9, phase: "-0.2ms", rev: "0.72" },
                    { section: isZh ? "木管声部 (Woodwinds Trio)" : "Flutes & Oboes", freq: "1.2kHz", vol: levels[1], phase: "0.0ms", rev: "0.45" },
                    { section: isZh ? "圆号与长号 (French Horns)" : "Brass Choir H1", freq: "440Hz", vol: levels[2], phase: "+0.3ms", rev: "0.85" },
                    { section: isZh ? "重金属敲击 (Timpani Gravity)" : "Timpani Strike", freq: "80Hz", vol: levels[3], phase: "-0.1ms", rev: "0.95" }
                  ].map((row, idx) => (
                    <div key={idx} className="grid grid-cols-12 items-center border-b border-[#4b355e]/15 pb-[0.8cqh] transition-opacity duration-500">
                      <span className="col-span-3 font-serif italic text-zinc-100 text-[0.9cqw]">{row.section}</span>
                      <span className="col-span-2 text-center text-purple-300 text-[0.8cqw]">{row.freq}</span>
                      
                      {/* Real-time interactive bar */}
                      <div className="col-span-4 px-3 flex items-center gap-2">
                        <div className="flex-1 bg-zinc-900/60 h-[1cqh] rounded-full overflow-hidden border border-[#4b355e]/20 relative">
                          <div 
                            className="h-full bg-gradient-to-r from-[#bf5af2] to-[#f59e0b] rounded-full transition-all duration-700" 
                            style={{ width: `${row.vol}%` }}
                          />
                        </div>
                        <span className="text-[0.8cqw] font-bold text-[#f59e0b] min-w-[35px] text-right">{row.vol.toFixed(0)} dB</span>
                      </div>

                      <span className="col-span-1 text-right text-zinc-400 text-[0.8cqw]">{row.phase}</span>
                      <span className="col-span-2 text-right text-[#f59e0b] text-[0.8cqw]">{row.rev}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conductor Score Ledger Summary Stamp on Beat 2 */}
              <div className="border-t border-[#4b355e]/30 pt-[1.5cqh] flex justify-between items-end font-mono text-[0.8cqw]">
                <div>
                  <span className="text-purple-300/60 block uppercase">{isZh ? "乐团合议签字" : "CO-RESIGN COMMISSION"}</span>
                  <span className="font-serif italic text-white font-bold block text-[1.2cqw] mt-1">Johann Sebastian Bach</span>
                </div>
                <div className="text-right text-[#f59e0b] font-mono">
                  <span>{isZh ? "音律标准：十二平均律" : "TEMPERAMENT: Bach Well-Tempered"}</span>
                </div>
              </div>

            </div>

            {/* Right Spectrum & Printers Guild Stamp Box (Col 9-12) */}
            <div className="col-span-4 flex flex-col justify-between bg-[#13071f]/85 border border-[#4b355e]/40 rounded-3xl p-[1.5cqw] shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative">
              
              {/* Spectrum monitor representation */}
              <div>
                <h4 className="font-mono text-[0.85cqw] text-[#f59e0b] font-bold flex items-center gap-1.5 border-b border-[#4b355e]/20 pb-[1.5cqh] mb-[1.5cqh] uppercase">
                  <Radio className="w-4 h-4 text-[#f59e0b] animate-pulse" />
                  {isZh ? "协奏谱面谐波共振谱" : "CONCERTO ENERGY SPECTROGRAM"}
                </h4>
                <p className="font-sans text-[0.85cqw] text-zinc-400 leading-relaxed mb-4">
                  {isZh 
                    ? "通过圣托马斯大管风琴回响声测，整场大协奏曲在极速激荡后最终走向庄严的归宿。" 
                    : "Measured through Thomaskirche acoustic response, the grand concerto leads all channels to ultimate unity."}
                </p>

                {/* Silent Peak / Divine Silence Box */}
                {beat === 2 ? (
                  <div className="p-3 bg-red-950/20 border border-red-500/30 rounded-2xl text-center shadow-[0_0_15px_rgba(239,68,68,0.15)] animate-pulse">
                    <span className="font-serif italic text-[1cqw] text-red-400 block font-bold">{isZh ? "● 庄严休止 · 寂静巅峰" : "● DIVINE SILENCE ACTIVE"}</span>
                    <span className="font-mono text-[1.6cqw] text-zinc-100 font-extrabold block mt-1">0.0 dB</span>
                    <p className="text-[0.8cqw] text-zinc-400 font-sans mt-0.5">{isZh ? "全声部波形消隐 留白震撼" : "All audio channels ducked to zero. Cosmic stop."}</p>
                  </div>
                ) : (
                  <div className="p-3 bg-emerald-950/20 border border-emerald-500/20 rounded-2xl text-center">
                    <span className="font-serif italic text-[1cqw] text-emerald-400 block font-bold">{isZh ? "● 全乐齐奏中" : "● FULL ORCHESTRA SOUNDING"}</span>
                    <span className="font-mono text-[1.6cqw] text-zinc-100 font-extrabold block mt-1">98.5 dB</span>
                    <p className="text-[0.8cqw] text-zinc-400 font-sans mt-0.5">{isZh ? "弦木铜击 四声部大咬合" : "Strings, woodwinds, brass, percussion active."}</p>
                  </div>
                )}
              </div>

              {/* Leipzig Cantor Guild Royal Stamp (wax stamp representation) */}
              <div className="flex items-center justify-center mt-3 h-[14cqh]">
                {beat === 2 ? (
                  <div 
                    key="bach-stamp"
                    className="w-[12cqw] h-[12cqw] border-[3px] border-double border-red-600 rounded-full flex flex-col items-center justify-center p-[0.6cqw] text-center text-red-500 rotate-[-12deg] bg-[#0c0512] shadow-2xl z-20"
                    style={{
                      boxShadow: "0 0 0 6px #0c0512, 0 12px 30px -4px rgba(239, 68, 68, 0.7)",
                      backgroundImage: "radial-gradient(circle, rgba(220, 38, 38, 0.08) 10%, transparent 10%)",
                      backgroundSize: "6px 6px"
                    }}
                  >
                    <span className="text-[0.6cqw] tracking-widest font-mono font-black leading-none">PRINTERS GUILD</span>
                    <svg className="absolute inset-0 w-full h-full fill-none stroke-red-500 opacity-20 pointer-events-none" viewBox="0 0 100 100">
                      <ellipse cx="50" cy="50" rx="35" ry="20" strokeWidth="1" />
                    </svg>
                    <span className="text-[1.15cqw] font-serif font-black my-[0.2cqh] tracking-widest border-y border-red-500 py-[0.1cqh]">
                      {isZh ? "圣托马斯" : "CANTOR"}
                    </span>
                    <span className="text-[0.6cqw] font-serif font-black tracking-tight leading-none">LEIPZIG 1723</span>
                  </div>
                ) : (
                  <div className="w-[11cqw] h-[11cqw] border border-dashed border-[#4b355e]/50 rounded-full flex items-center justify-center text-center text-[#9c7cb6]/40 font-mono text-[0.8cqw] italic">
                    {isZh ? "[等待庄严休止盖印]" : "[Awaiting Grand Stop Stamp]"}
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full bg-[#0c0512] text-[#eeddf8] relative overflow-hidden font-sans p-[2cqw] flex flex-col justify-between select-none">
      
      {/* Self-contained style block for animations and fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', Georgia, serif;
        }
        
        .font-sans {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        @keyframes nav-ripple-ani {
          0% { transform: scale(1); opacity: 0.6; stroke-width: 1.5px; }
          100% { transform: scale(3.5); opacity: 0; stroke-width: 0.5px; }
        }
        
        .animate-nav-ripple {
          animation: nav-ripple-ani 1.4s cubic-bezier(0.16, 1, 0.3, 1) infinite;
          transform-origin: center;
        }

        @keyframes spin-slow-ani {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-fast-ani {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow-ani 32s linear infinite;
        }
        .animate-spin-fast {
          animation: spin-fast-ani 14s linear infinite;
        }

        @keyframes move-baton-ani {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        .baton-tip-animated {
          offset-path: path('${lissajousPath}');
          animation: move-baton-ani 8s linear infinite;
          transform-origin: center;
        }
      `}</style>

      {/* Static Concert Hall Seating Arcs in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
          <circle cx="500" cy="720" r="620" stroke="#f59e0b" strokeWidth="0.6" strokeDasharray="3 6" className="opacity-40" />
          <circle cx="500" cy="720" r="520" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="4 8" className="opacity-50" />
          <circle cx="500" cy="720" r="420" stroke="#bf5af2" strokeWidth="0.5" strokeDasharray="2 4" className="opacity-30" />
          <circle cx="500" cy="720" r="320" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 6" className="opacity-60" />
          
          <line x1="500" y1="720" x2="100" y2="100" stroke="#f59e0b" strokeWidth="0.4" className="opacity-20" />
          <line x1="500" y1="720" x2="300" y2="100" stroke="#f59e0b" strokeWidth="0.4" className="opacity-25" />
          <line x1="500" y1="720" x2="500" y2="100" stroke="#bf5af2" strokeWidth="0.4" className="opacity-30" />
          <line x1="500" y1="720" x2="700" y2="100" stroke="#f59e0b" strokeWidth="0.4" className="opacity-25" />
          <line x1="500" y1="720" x2="900" y2="100" stroke="#f59e0b" strokeWidth="0.4" className="opacity-20" />

          {/* Wall Panel Geometrics */}
          <path d="M 0 40 L 70 80 L 70 380 L 0 420 Z" fill="url(#ac-panel-left)" className="opacity-20" />
          <path d="M 1000 40 L 930 80 L 930 380 L 1000 420 Z" fill="url(#ac-panel-right)" className="opacity-20" />
          
          <defs>
            <linearGradient id="ac-panel-left" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#bf5af2" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="ac-panel-right" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#bf5af2" stopOpacity="0.05" />
            </linearGradient>
            
            <filter id="gold-glow" x="-30%" y="-30%" width="160%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Main active scene view using Magic Move (Absolute transitions in a shared space) */}
      <div className="flex-1 w-full relative z-10 overflow-hidden">
        {/* Scene 1: Premise */}
        <div 
          className="absolute inset-0 transition-all duration-[800ms] ease-out flex flex-col justify-between"
          style={{
            opacity: scene === 1 ? 1 : 0,
            transform: scene === 1 ? "scale(1) translateY(0)" : "scale(0.96) translateY(1.5cqh)",
            pointerEvents: scene === 1 ? "auto" : "none",
            visibility: scene === 1 ? "visible" : "hidden",
          }}
        >
          {renderScene1()}
        </div>

        {/* Scene 2: Dual */}
        <div 
          className="absolute inset-0 transition-all duration-[800ms] ease-out flex flex-col justify-between"
          style={{
            opacity: scene === 2 ? 1 : 0,
            transform: scene === 2 ? "scale(1) translateY(0)" : "scale(0.96) translateY(1.5cqh)",
            pointerEvents: scene === 2 ? "auto" : "none",
            visibility: scene === 2 ? "visible" : "hidden",
          }}
        >
          {renderScene2()}
        </div>

        {/* Scene 3: Process */}
        <div 
          className="absolute inset-0 transition-all duration-[800ms] ease-out flex flex-col justify-between"
          style={{
            opacity: scene === 3 ? 1 : 0,
            transform: scene === 3 ? "scale(1) translateY(0)" : "scale(0.96) translateY(1.5cqh)",
            pointerEvents: scene === 3 ? "auto" : "none",
            visibility: scene === 3 ? "visible" : "hidden",
          }}
        >
          {renderScene3()}
        </div>

        {/* Scene 4: Matrix */}
        <div 
          className="absolute inset-0 transition-all duration-[800ms] ease-out flex flex-col justify-between"
          style={{
            opacity: scene === 4 ? 1 : 0,
            transform: scene === 4 ? "scale(1) translateY(0)" : "scale(0.96) translateY(1.5cqh)",
            pointerEvents: scene === 4 ? "auto" : "none",
            visibility: scene === 4 ? "visible" : "hidden",
          }}
        >
          {renderScene4()}
        </div>

        {/* Scene 5: Ledger */}
        <div 
          className="absolute inset-0 transition-all duration-[800ms] ease-out flex flex-col justify-between"
          style={{
            opacity: scene === 5 ? 1 : 0,
            transform: scene === 5 ? "scale(1) translateY(0)" : "scale(0.96) translateY(1.5cqh)",
            pointerEvents: scene === 5 ? "auto" : "none",
            visibility: scene === 5 ? "visible" : "hidden",
          }}
        >
          {renderScene5()}
        </div>
      </div>

      {/* Seating Tracker (Top-Right Concentric Arcs) */}
      {renderSeatingTracker()}
    </div>
  );
}