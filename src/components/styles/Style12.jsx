import React from "react";
import { 
  Flame, Droplets, Thermometer, Layers, Shield, 
  Activity, Compass, Wind, CheckCircle, Database 
} from "lucide-react";

export const getMetadata = (lang) => {
  const isZh = lang === "zh";
  return {
    id: "12",
    tier: "S",
    density: "high",
    name: isZh ? "大红袍乌龙茶复合焙火" : "The Craft of Wuyi Rock Tea",
    theme: isZh ? "武夷岩茶非遗炭焙工艺" : "Wuyi Rock Tea Charcoal Baking",
    densityLabel: isZh ? "匠人焙火控制面板" : "Artisanal Baking Control",
    colors: { bg: "bg-[#1c0f08]", ink: "text-[#f97316]", panel: "border-[#f97316]/20", accent: "text-[#4ade80]" },
    typography: { header: "font-serif", body: "font-sans" },
    scenes: [
      {
        id: 1,
        name: isZh ? "绝壁幽谷 · 灵叶初展" : "Valley Cliffs & Fresh Leaf",
        beats: [
          { action: isZh ? "采摘茶青" : "Harvest Leaf" },
          { action: isZh ? "幽谷迎风" : "Valley Breeze" },
          { action: isZh ? "灵叶定格" : "Lock Essence" }
        ]
      },
      {
        id: 2,
        name: isZh ? "萎凋失水 · 酚类酶变" : "Wilting vs. Oxidization",
        beats: [
          { action: isZh ? "阳光萎凋" : "Sun Wilting" },
          { action: isZh ? "摇青发酵" : "Sieve Shaking" },
          { action: isZh ? "红边显现" : "Red Margin Set" }
        ]
      },
      {
        id: 3,
        name: isZh ? "荔木埋炭 · 三阶精焙" : "3-Stage Charcoal Roast",
        beats: [
          { action: isZh ? "毛茶初焙" : "First Light Roast" },
          { action: isZh ? "足火复焙" : "Medium Caramel Roast" },
          { action: isZh ? "炖火定香" : "Heavy Signature Roast" }
        ]
      },
      {
        id: 4,
        name: isZh ? "炭火矩阵 · 热阻平衡" : "Charcoal Fire Quadrant",
        beats: [
          { action: isZh ? "炉温测绘" : "Map Pit Temp" },
          { action: isZh ? "水分蒸腾" : "Track Evaporation" },
          { action: isZh ? "香气凝聚" : "Condense Aromas" }
        ]
      },
      {
        id: 5,
        name: isZh ? "非遗总账 · 蛤蟆背沙" : "Artisanal Quality Ledger",
        beats: [
          { action: isZh ? "核算指标" : "Compute Parameters" },
          { action: isZh ? "对位曲线" : "Match Curves" },
          { action: isZh ? "加盖红印" : "Stamp Imperial Seal" }
        ]
      }
    ]
  };
};

export default function Style12({ scene, beat, language, onNavigate, isThumbnail }) {
  const isZh = language === "zh";

  // Calculate pointer angle for Scene 1 dial
  const pointerAngle = beat === 0 ? -90 : beat === 1 ? -30 : 30;

  // Render Scene 1: Premise - Ultralight (Mountain cliff organic cover & giant leaf in dial)
  const renderScene1 = () => {
    return (
      <div className="w-full h-full relative flex flex-col justify-between p-[3cqw] overflow-hidden bg-[#1c0f08] select-none">
        {/* Mountain contour SVGs in the background to evoke Wuyi cliffs */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] z-0">
          <svg viewBox="0 0 800 450" className="w-full h-full fill-none stroke-[#f97316]">
            {/* Rocky cliff contours */}
            <path d="M 0 150 Q 150 180 300 120 T 600 220 T 800 180 L 800 450 L 0 450 Z" strokeWidth="1" />
            <path d="M 0 250 Q 200 200 400 280 T 800 240 L 800 450 L 0 450 Z" strokeWidth="1.5" />
            <path d="M 0 350 Q 250 380 500 320 T 800 390 L 800 450 L 0 450 Z" strokeWidth="2.5" />
          </svg>
        </div>

        {/* Top bar */}
        <div className="flex justify-between items-start z-10 shrink-0">
          <div>
            <span className="font-mono text-[1cqw] tracking-[0.25cqw] uppercase text-[#f97316] font-bold">
              {isZh ? "武夷山天心岩场 · 非遗正统传承" : "WUYI TIANXIN VALLEY // CULTURAL HERITAGE"}
            </span>
            <h2 className="text-[2.2cqw] font-serif font-extrabold text-[#f4eae1] leading-tight mt-[0.5cqh]">
              <Compass className="w-[2.2cqw] h-[2.2cqw] text-[#f97316] animate-pulse inline mr-2 align-middle" />
              {isZh ? "武夷绝壁：大红袍灵根生处" : "Wuyi Cliffs: The Sacred Birthplace of Da Hong Pao"}
            </h2>
          </div>
          <div className="text-right font-mono">
            <span className="text-[1.1cqw] text-[#f97316] font-bold block">SCENE 01 / PROLOGUE</span>
            <span className="text-[0.75cqw] text-zinc-500 block">DENSITY: ULTRALIGHT</span>
          </div>
        </div>

        {/* Central Visual: Giant hand-drawn silhouette of a fresh Da Hong Pao leaf inside glowing dial */}
        <div className="flex-1 w-full flex items-center justify-center relative z-10 py-[1cqh]">
          <div className="w-[30cqw] h-[30cqw] relative flex items-center justify-center">
            <svg viewBox="0 0 300 280" className="w-full h-full overflow-visible">
              <defs>
                {/* Dial gradients */}
                <radialGradient id="dial-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#1c0f08" stopOpacity="0" />
                </radialGradient>
                {/* Leaf Gradients */}
                <linearGradient id="leaf-grad-0" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4ade80" />
                  <stop offset="100%" stopColor="#15803d" />
                </linearGradient>
                <linearGradient id="leaf-grad-1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#a3e635" />
                  <stop offset="100%" stopColor="#4d7c0f" />
                </linearGradient>
                <linearGradient id="leaf-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#a3e635" />
                  <stop offset="75%" stopColor="#4d7c0f" />
                  <stop offset="100%" stopColor="#b45309" />
                </linearGradient>
              </defs>

              {/* Glowing Background Dial Halo */}
              <circle cx="150" cy="140" r="130" fill="url(#dial-glow)" />

              {/* Outer dial ring */}
              <circle cx="150" cy="140" r="120" stroke="#f97316" strokeWidth="1" strokeDasharray="3 6" className="opacity-30" />
              <circle cx="150" cy="140" r="110" stroke="#f97316" strokeWidth="1.5" className="opacity-25" />

              {/* Dial ticks */}
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 30) * Math.PI / 180;
                const x1 = 150 + 104 * Math.cos(angle);
                const y1 = 140 + 104 * Math.sin(angle);
                const x2 = 150 + 112 * Math.cos(angle);
                const y2 = 140 + 112 * Math.sin(angle);
                return (
                  <line 
                    key={i} 
                    x1={x1} y1={y1} x2={x2} y2={y2} 
                    stroke="#f97316" 
                    strokeWidth={i % 3 === 0 ? "2" : "1"} 
                    className={i % 3 === 0 ? "opacity-60" : "opacity-35"} 
                  />
                );
              })}

              {/* Dial Labels */}
              <text x="150" y="24" className="font-mono text-[7px] font-bold fill-[#f97316] opacity-60" textAnchor="middle">85°C (初温)</text>
              <text x="268" y="143" className="font-mono text-[7px] font-bold fill-[#f97316] opacity-60" textAnchor="start">110°C (复焙)</text>
              <text x="150" y="262" className="font-mono text-[7px] font-bold fill-[#f97316] opacity-60" textAnchor="middle">135°C (足火)</text>
              <text x="32" y="143" className="font-mono text-[7px] font-bold fill-[#f97316] opacity-60" textAnchor="end">COAL OFF</text>

              {/* Giant silhouette of fresh tea leaf in center */}
              <g transform="translate(0, 0)">
                {/* Glow layer behind leaf under high beat */}
                {beat >= 1 && (
                  <path
                    d="M 150 40 C 185 80, 215 130, 195 185 C 180 220, 155 235, 150 255 C 145 235, 120 220, 105 185 C 85 130, 115 80, 150 40 Z"
                    fill="#f97316"
                    opacity={beat === 1 ? "0.15" : "0.3"}
                    filter="url(#ember-glow-f)"
                    className="transition-all duration-1000"
                  />
                )}

                {/* Hand-drawn Leaf Outline and Silhouette */}
                <path
                  d="M 150 40 C 185 80, 215 130, 195 185 C 180 220, 155 235, 150 255 C 145 235, 120 220, 105 185 C 85 130, 115 80, 150 40 Z"
                  fill={beat === 0 ? "url(#leaf-grad-0)" : beat === 1 ? "url(#leaf-grad-1)" : "url(#leaf-grad-2)"}
                  stroke={beat === 2 ? "#ef4444" : beat === 1 ? "#a3e635" : "#4ade80"}
                  strokeWidth={beat === 2 ? "3.5" : "1.5"}
                  className="transition-all duration-1000"
                  style={{
                    filter: beat === 2 ? "drop-shadow(0 0 8px rgba(239, 68, 68, 0.5))" : "none"
                  }}
                />

                {/* Leaf Veins */}
                <path d="M 150 40 Q 150 145 150 250" stroke={beat === 2 ? "#ef4444" : "#1c0f08"} strokeWidth="2.5" strokeDasharray="2 3" opacity="0.4" className="transition-all duration-1000" />
                <path d="M 150 80 Q 172 98 185 115" stroke={beat === 2 ? "#ef4444" : "#1c0f08"} strokeWidth="1.2" opacity="0.35" className="transition-all duration-1000" />
                <path d="M 150 120 Q 180 142 188 162" stroke={beat === 2 ? "#ef4444" : "#1c0f08"} strokeWidth="1.2" opacity="0.35" className="transition-all duration-1000" />
                <path d="M 150 160 Q 175 185 182 205" stroke={beat === 2 ? "#ef4444" : "#1c0f08"} strokeWidth="1.2" opacity="0.35" className="transition-all duration-1000" />
                <path d="M 150 80 Q 128 98 115 115" stroke={beat === 2 ? "#ef4444" : "#1c0f08"} strokeWidth="1.2" opacity="0.35" className="transition-all duration-1000" />
                <path d="M 150 120 Q 120 142 112 162" stroke={beat === 2 ? "#ef4444" : "#1c0f08"} strokeWidth="1.2" opacity="0.35" className="transition-all duration-1000" />
                <path d="M 150 160 Q 125 185 118 205" stroke={beat === 2 ? "#ef4444" : "#1c0f08"} strokeWidth="1.2" opacity="0.35" className="transition-all duration-1000" />
              </g>

              {/* Dial Pointer rotating with heat */}
              <g style={{ transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)" }}>
                {/* Pointer Line */}
                <line 
                  x1="150" y1="140" 
                  x2={150 + 95 * Math.cos(pointerAngle * Math.PI / 180)} 
                  y2={140 + 95 * Math.sin(pointerAngle * Math.PI / 180)} 
                  stroke="#f97316" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  filter="url(#ember-glow-f)"
                  className="transition-all duration-1000 opacity-80"
                />
                {/* Pointer center hub */}
                <circle cx="150" cy="140" r="6" fill="#f97316" filter="url(#ember-glow-f)" />
                <circle cx="150" cy="140" r="3" fill="#1c0f08" />
              </g>
            </svg>
          </div>
        </div>

        {/* Dynamic description matching beat */}
        <div className="max-w-[80cqw] mx-auto text-center z-10 shrink-0">
          <div className="flex justify-center items-center gap-[1cqw] mb-[1cqh]">
            <span className="w-[1.2cqw] h-[1.2cqw] rounded-full bg-[#f97316] animate-ping" />
            <span className="font-mono text-[1.1cqw] text-[#f97316] font-extrabold tracking-widest uppercase">
              {beat === 0 && (isZh ? "当前状态：青叶初展 / STATE: FRESH LEAF UNVEILING" : "STATE: FRESH LEAF UNVEILING")}
              {beat === 1 && (isZh ? "当前状态：萎凋失水 / STATE: CELLS DEHYDRATING" : "STATE: CELLS DEHYDRATING")}
              {beat === 2 && (isZh ? "当前状态：酶促变色（绿叶红镶边）/ STATE: ENZYMATIC BROWNING ON LEAF MARGIN" : "STATE: ENZYMATIC BROWNING ON LEAF MARGIN")}
            </span>
          </div>
          <p className="text-[1.25cqw] text-zinc-300 leading-relaxed font-sans max-w-[55cqw] mx-auto">
            {isZh 
              ? "在武夷绝壁深涧之中，岩骨灵叶采摘后吐露芬芳。叶肉即将经受荔木无烟炭焙的反复洗礼，化凡骨为岩韵。" 
              : "In the misty ravines of the Wuyi gorges, the sacred leaf is harvested. It is prepared to encounter the smokeless, intense radiance of lychee charcoal, transmuting into rock-charm essence."}
          </p>
        </div>
      </div>
    );
  };

  // Render Scene 2: Dual - Light (Wilting vs. Oxidization asymmetric panels)
  const renderScene2 = () => {
    // Chemical compounds bar data
    const compounds = [
      { name: isZh ? "茶多酚 / Tea Polyphenols" : "Tea Polyphenols", values: [95, 65, 30], color: "bg-emerald-600" },
      { name: isZh ? "儿茶素 / Catechins" : "Catechins", values: [90, 50, 12], color: "bg-lime-600" },
      { name: isZh ? "茶红素 / Thearubigins" : "Thearubigins", values: [4, 35, 70], color: "bg-amber-600" },
      { name: isZh ? "芳香化合度 / Volatile Aromas" : "Aroma Volatiles", values: [10, 52, 95], color: "bg-[#f97316]" }
    ];

    const currentMoisture = beat === 0 ? "72%" : beat === 1 ? "45%" : "18%";

    return (
      <div className="w-full h-full relative flex flex-col justify-between p-[3cqw] overflow-hidden bg-[#1c0f08] select-none">
        {/* Header */}
        <div className="flex justify-between items-start z-10 shrink-0 border-b border-[#f97316]/10 pb-[1.5cqh]">
          <div>
            <span className="font-mono text-[1cqw] tracking-[0.2cqw] uppercase text-[#f97316] font-bold">
              {isZh ? "热力失水与酚类生物化学对位" : "THERMAL DEHYDRATION & PHENOLIC ENZYME TRANSFORMATION"}
            </span>
            <h2 className="text-[2.2cqw] font-serif font-extrabold text-[#f4eae1] leading-tight mt-[0.5cqh]">
              {isZh ? "两极合流：萎凋失水与多酚发酵" : "Dual Convergence: Moisture Loss vs. Polyphenol Oxidization"}
            </h2>
          </div>
          <div className="text-right font-mono">
            <span className="text-[1.1cqw] text-[#f97316] font-bold block">SCENE 02 / DUAL TRANSITIONS</span>
            <span className="text-[0.75cqw] text-zinc-500 block">DENSITY: LIGHT</span>
          </div>
        </div>

        {/* Asymmetrical Side-by-Side Panels (38% left vs 58% right) */}
        <div className="flex-1 flex justify-between items-stretch gap-[4cqw] my-[2cqh] z-10">
          {/* Left panel (38% width): Moisture Dehydration */}
          <div className="w-[38%] border border-[#f97316]/15 rounded-2xl bg-[#2d170e]/80 p-[1.8cqw] flex flex-col justify-between relative overflow-hidden">
            {/* Cell moisture grid background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px]" />
            
            <div className="relative">
              <span className="font-mono text-[0.85cqw] text-[#f97316] tracking-widest block uppercase">SECTION I / PHYSICAL</span>
              <h3 className="font-serif text-[1.4cqw] font-black text-[#f4eae1] mt-[0.5cqh]">
                <Droplets className="w-[1.5cqw] h-[1.5cqw] text-[#f97316] inline mr-1.5 align-text-bottom" />
                {isZh ? "叶孔结合水解离与释放" : "Moisture Escape & Cell Dehydration"}
              </h3>
              <p className="text-[1cqw] text-zinc-300 font-sans leading-relaxed mt-[1cqh]">
                {isZh 
                  ? "在恒温日光及穿堂微风吹拂下，叶面细胞结合水突破热阻屏障，顺由叶脉通道自内向表皮层高频逸散。" 
                  : "Under warm sun and controlled ventilation, intermolecular water escapes cell walls, traversing radial leaf veins toward the epidermis."}
              </p>
            </div>

            {/* Moisture Loss Graph */}
            <div className="bg-[#1c0f08]/90 border border-[#f97316]/10 rounded-xl p-[1cqw] relative">
              <div className="flex justify-between items-center text-[0.8cqw] font-mono mb-[0.5cqh]">
                <span className="text-zinc-400">{isZh ? "叶片水分变化" : "LEAF MOISTURE CURVE"}</span>
                <span className="text-[#4ade80] font-bold">{currentMoisture}</span>
              </div>
              <svg viewBox="0 0 200 100" className="w-full h-[12cqh] fill-none stroke-[#f97316]/30">
                {/* Axes and grid */}
                <line x1="20" y1="10" x2="20" y2="90" stroke="#f97316" strokeWidth="1" className="opacity-30" />
                <line x1="20" y1="90" x2="190" y2="90" stroke="#f97316" strokeWidth="1" className="opacity-30" />
                <line x1="20" y1="50" x2="190" y2="50" stroke="#f97316" strokeWidth="0.5" strokeDasharray="2 3" className="opacity-15" />
                
                {/* Curve */}
                <path d="M 20 20 Q 70 45, 120 70 T 180 85" stroke="#f97316" strokeWidth="2.5" className="stroke-linecap-round" />
                
                {/* Area under curve */}
                <path d="M 20 20 Q 70 45, 120 70 T 180 85 L 180 90 L 20 90 Z" fill="#f97316" opacity="0.05" />

                {/* Node Indicators on the curve */}
                <circle cx="20" cy="20" r="4.5" fill={beat === 0 ? "#4ade80" : "#f97316"} className={beat === 0 ? "animate-pulse" : ""} />
                <circle cx="95" cy="55" r="4.5" fill={beat === 1 ? "#4ade80" : "#f97316"} className={beat === 1 ? "animate-pulse" : ""} />
                <circle cx="150" cy="79" r="4.5" fill={beat === 2 ? "#4ade80" : "#f97316"} className={beat === 2 ? "animate-pulse" : ""} />

                {/* Label text */}
                <text x="25" y="18" className="font-mono text-[5px] fill-zinc-400">72% (采摘)</text>
                <text x="100" y="52" className="font-mono text-[5px] fill-zinc-400">45% (萎凋)</text>
                <text x="155" y="75" className="font-mono text-[5px] fill-zinc-400">18% (成茶)</text>
              </svg>
            </div>

            <div className="flex gap-[1cqw] font-mono text-[0.8cqw] border-t border-[#f97316]/10 pt-[1cqh] mt-[1cqh]">
              <span className="text-zinc-500">PARAM:</span>
              <span className="text-[#4ade80]">{isZh ? "风量: 1.2m/s // 相对湿度: 42%" : "WIND: 1.2m/s // RH: 42%"}</span>
            </div>
          </div>

          {/* Right panel (58% width): Biochemical Oxidization */}
          <div className="w-[58%] border border-[#f97316]/15 rounded-2xl bg-[#2d170e]/80 p-[1.8cqw] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(249,115,22,0.1)_1px,transparent_1px)] [background-size:100%_12px]" />

            <div>
              <span className="font-mono text-[0.85cqw] text-[#f97316] tracking-widest block uppercase">SECTION II / BIOCHEMICAL</span>
              <h3 className="font-serif text-[1.4cqw] font-black text-[#f4eae1] mt-[0.5cqh]">
                <Layers className="w-[1.5cqw] h-[1.5cqw] text-[#f97316] inline mr-1.5 align-text-bottom" />
                {isZh ? "茶多酚氧化降解与芳香质裂解" : "Polyphenol Enzymatic Decomposition"}
              </h3>
              <p className="text-[1cqw] text-zinc-300 font-sans leading-relaxed mt-[1cqh]">
                {isZh 
                  ? "多孔竹筛手工筛动碰撞（摇青），细胞壁边缘破损释放儿茶素氧化酶。伴随酶变激活，青涩物质剧烈水解转化为鲜艳的茶红素与丰富花香挥发物。" 
                  : "Rhythmic mechanical sifting crushes leaf margins, releasing cellular oxidases. Polyphenols degrade rapidly, locking bitter astringency and compiling aromatic esters."}
              </p>
            </div>

            {/* Chemical compounds progress bars */}
            <div className="my-[1.5cqh] flex flex-col gap-[1.2cqh] bg-[#1c0f08]/90 border border-[#f97316]/10 p-[1.5cqw] rounded-xl">
              {compounds.map((comp, idx) => {
                const widthVal = comp.values[beat];
                return (
                  <div key={idx} className="flex flex-col gap-[0.4cqh]">
                    <div className="flex justify-between font-mono text-[0.8cqw]">
                      <span className="text-zinc-400 font-bold">{comp.name}</span>
                      <span className="text-[#f97316] font-bold">{widthVal}%</span>
                    </div>
                    <div className="w-full h-[0.8cqh] bg-zinc-900 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${comp.color} rounded-full transition-all duration-1000`} 
                        style={{ width: `${widthVal}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Micro details row */}
            <div className="flex justify-between items-center font-mono text-[0.8cqw] border-t border-[#f97316]/10 pt-[1cqh] mt-[1cqh]">
              <div className="flex gap-[1.5cqw]">
                <span className="text-zinc-500">THERMAL RATE: <strong className="text-[#f97316]">+2.4x</strong></span>
                <span className="text-zinc-500">ENZYME COEFF: <strong className="text-[#4ade80]">0.98</strong></span>
              </div>
              <span className="text-[#4ade80] font-bold uppercase">{isZh ? "青气衰减中" : "RAW GRASSY NOTES EVAPORATING"}</span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="flex justify-between items-center font-mono text-[0.8cqw] text-zinc-500 border-t border-[#f97316]/10 pt-[1.2cqh] shrink-0 z-10">
          <span>{isZh ? "细胞破损率：24.2% · 多酚相转化平衡完成" : "MEMBRANE DAMAGE RATE: 24.2% · PHENOL PHASE COMPLETED"}</span>
          <span>SYSTEM: WUYI-ROB-CHEM-V2</span>
        </div>
      </div>
    );
  };

  // Render Scene 3: Process - Standard (3-Stage charcoal baking timeline & burners)
  const renderScene3 = () => {
    return (
      <div className="w-full h-full relative flex flex-col justify-between p-[3cqw] overflow-hidden bg-[#1c0f08] select-none">
        {/* Header */}
        <div className="flex justify-between items-start z-10 shrink-0 border-b border-[#f97316]/10 pb-[1.5cqh]">
          <div>
            <span className="font-mono text-[1cqw] tracking-[0.2cqw] uppercase text-[#f97316] font-bold">
              {isZh ? "荔木埋炭物理热阻传导机制" : "LYCHEE COAL RADIATIVE CONVECTION PROTOCOL"}
            </span>
            <h2 className="text-[2.2cqw] font-serif font-extrabold text-[#f4eae1] leading-tight mt-[0.5cqh]">
              <Flame className="w-[2.2cqw] h-[2.2cqw] text-[#f97316] inline mr-2 align-middle animate-pulse" />
              {isZh ? "三阶焙火：足火精炖融汇岩韵" : "Three-Stage Baking Timeline: Charcoal Coal Radiant Heat"}
            </h2>
          </div>
          <div className="text-right font-mono">
            <span className="text-[1.1cqw] text-[#f97316] font-bold block">SCENE 03 / TIMELINE PROCESS</span>
            <span className="text-[0.75cqw] text-zinc-500 block">DENSITY: STANDARD</span>
          </div>
        </div>

        {/* Timeline representation area */}
        <div className="flex-1 flex flex-col justify-between my-[2cqh] relative z-10">
          {/* Connecting warm pipe track with animated glowing fluid */}
          <div className="absolute left-[8cqw] right-[8cqw] top-[14.5cqh] h-[4px] bg-zinc-800 pointer-events-none z-0">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 via-amber-500 to-red-500 transition-all duration-1000"
              style={{
                width: beat === 0 ? "20%" : beat === 1 ? "60%" : "100%"
              }}
            />
          </div>

          <div className="grid grid-cols-3 gap-[2.5cqw] flex-1 items-stretch">
            {/* Stage 1:毛茶初焙 */}
            {[
              {
                id: 0,
                title: isZh ? "毛茶初焙 (First Roast)" : "First Roast",
                temp: "100°C",
                desc: isZh ? "首道烘干脱去多余初水分，初步稳固兰草与花果清香。" : "Sheds initial free moisture, stabilizing volatile orchid and floral aroma notes.",
                tag: isZh ? "初焙 · 锁香" : "FIRST LOCK"
              },
              {
                id: 1,
                title: isZh ? "足火复焙 (Medium Roast)" : "Medium Roast",
                temp: "120°C",
                desc: isZh ? "热解多酚苦涩化合物，催化焦糖风味熟化，叶色泛铜。" : "Decomposes bitter astringents, developing roasted caramel backbone as leaf turns copper.",
                tag: isZh ? "足火 · 熟化" : "MID-CARAMEL"
              },
              {
                id: 2,
                title: isZh ? "双重足火 (Double Roast)" : "Double Roast",
                temp: "135°C",
                desc: isZh ? "重温慢炖将能量注于筋脉，青气褪尽，汤稠稠而岩韵满载。" : "Slowly stewing on low fire, completely locking mineral density for legendary rock charm.",
                tag: isZh ? "足火 · 炖定" : "HEAVY MASTER"
              }
            ].map((stage) => {
              // Calculate status values
              const isCurrent = beat === stage.id;
              const isPast = beat > stage.id;
              
              // Active glowing status for embers (mapped to defined gradients in Master Defs!)
              let emberStyle = {};
              let emberGlowClass = "opacity-10";
              if (isCurrent) {
                emberGlowClass = "opacity-100 animate-pulse";
                emberStyle = stage.id === 0 
                  ? { fill: "url(#coal-hot-0)", filter: "url(#ember-glow-f)" }
                  : stage.id === 1 
                  ? { fill: "url(#coal-hot-1)", filter: "url(#ember-glow-f)" }
                  : { fill: "url(#coal-hot-2)", filter: "url(#ember-glow-f)" };
              } else if (isPast) {
                emberGlowClass = "opacity-55";
                emberStyle = { fill: "#92400e" }; // Warm steady ember
              } else {
                emberStyle = { fill: "#3f2017" }; // Cold dark ember
              }

              return (
                <div 
                  key={stage.id} 
                  className={`flex flex-col justify-between rounded-2xl border bg-[#2d170e]/80 p-[1.5cqw] transition-all duration-700 relative overflow-hidden ${
                    isCurrent 
                      ? "border-[#f97316] shadow-[0_0_25px_rgba(249,115,22,0.25)] scale-[1.02] z-10" 
                      : "border-[#f97316]/10 opacity-70 scale-[0.98]"
                  }`}
                >
                  {/* Top line with stage marker and info */}
                  <div className="flex justify-between items-center shrink-0">
                    <span className="font-mono text-[0.8cqw] font-bold text-[#f97316] bg-[#f97316]/10 border border-[#f97316]/20 px-[0.6cqw] py-[0.2cqh] rounded">
                      {stage.tag}
                    </span>
                    <span className="font-mono text-[1.4cqw] font-black text-[#f97316]">{stage.temp}</span>
                  </div>

                  {/* Coal Burner (SVG embers) underneath leaf */}
                  <div className="h-[12cqh] my-[1.5cqh] flex items-center justify-center relative">
                    <svg viewBox="0 0 160 80" className="w-full h-full overflow-visible">
                      {/* Burner outer tray */}
                      <ellipse cx="80" cy="55" rx="55" ry="18" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="3 3" className="opacity-30" />
                      <ellipse cx="80" cy="55" rx="50" ry="15" fill="#1c0f08" stroke="#f97316" strokeWidth="1.5" className="opacity-45" />

                      {/* Glowing burning coals */}
                      <ellipse cx="80" cy="54" rx="45" ry="12" style={emberStyle} className={emberGlowClass} />

                      {/* Overlay grill lines */}
                      <path d="M 38 52 C 55 60, 105 60, 122 52 M 43 49 C 60 55, 100 55, 117 49 M 48 55 C 65 62, 95 62, 112 55" fill="none" stroke="#1c0f08" strokeWidth="1.5" opacity="0.8" />

                      {/* Hand-drawn Tea Leaf Resting on Grill */}
                      <g transform="translate(48, 12) scale(0.42)">
                        {/* Leaf background body */}
                        <path
                          d="M 75 10 C 100 35, 120 70, 110 105 C 100 125, 80 135, 75 150 C 70 135, 50 125, 40 105 C 30 70, 50 35, 75 10 Z"
                          fill={
                            stage.id === 0 
                              ? (isPast ? "#78350f" : isCurrent ? "#4ade80" : "#166534") 
                              : stage.id === 1 
                              ? (isPast ? "#451a03" : isCurrent ? "#ea580c" : "#78350f")
                              : (isCurrent ? "#1c0f08" : "#451a03")
                          }
                          stroke={
                            stage.id === 0 
                              ? (isCurrent ? "#4ade80" : "#15803d") 
                              : stage.id === 1 
                              ? (isCurrent ? "#f97316" : "#b45309")
                              : (isCurrent ? "#f97316" : "#451a03")
                          }
                          strokeWidth={isCurrent ? "3" : "1.5"}
                          className="transition-all duration-1000"
                        />
                        {/* Internal vein lines */}
                        <path d="M 75 10 Q 75 80 75 150" stroke={isCurrent && stage.id === 2 ? "#f97316" : "#1c0f08"} strokeWidth="2" opacity="0.4" />
                      </g>
                    </svg>
                  </div>

                  {/* Description */}
                  <div className="mt-auto relative z-10 border-t border-[#f97316]/10 pt-[1cqh]">
                    <h4 className="font-serif font-extrabold text-[1.25cqw] text-[#f4eae1] leading-none mb-[0.6cqh]">
                      {stage.title}
                    </h4>
                    <p className="text-[0.9cqw] text-zinc-300 font-sans leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer info */}
        <div className="flex justify-between items-center font-mono text-[0.8cqw] text-zinc-500 border-t border-[#f97316]/10 pt-[1.2cqh] shrink-0 z-10">
          <span>{isZh ? "高频红外辐射谱：在线 · 积温转化平衡对位中" : "SPECTROSCOPY EMISSION: ONLINE // ACCUMULATED THERMAL INTEGRATION ACTIVE"}</span>
          <span>STATION: FIRE-CHAMBER-XII</span>
        </div>
      </div>
    );
  };

  // Render Scene 4: Matrix - Dense (2x2 Grid comparing heat, moisture, enzyme, aroma)
  const renderScene4 = () => {
    // Quadrants data
    const isQ1Active = beat === 0;
    const isQ2Active = beat === 1;
    const isQ3Active = beat === 1;
    const isQ4Active = beat === 2;

    return (
      <div className="w-full h-full relative flex flex-col justify-between p-[3cqw] overflow-hidden bg-[#1c0f08] select-none">
        {/* Header */}
        <div className="flex justify-between items-start z-10 shrink-0 border-b border-[#f97316]/10 pb-[1.5cqh]">
          <div>
            <span className="font-mono text-[1cqw] tracking-[0.2cqw] uppercase text-[#f97316] font-bold">
              {isZh ? "热解积温场多维监测矩阵" : "THERMOCLINETIC MULTI-SENSOR PROFILE MATRIX"}
            </span>
            <h2 className="text-[2.2cqw] font-serif font-extrabold text-[#f4eae1] leading-tight mt-[0.5cqh]">
              <Activity className="w-[2.2cqw] h-[2.2cqw] text-[#f97316] inline mr-2 align-middle" />
              {isZh ? "炭火炉温：烘焙多维动力学 analysis" : "Heat Dynamics: Charcoal Fire Quadrant Analysis"}
            </h2>
          </div>
          <div className="text-right font-mono">
            <span className="text-[1.1cqw] text-[#f97316] font-bold block">SCENE 04 / MATRIX MONITORING</span>
            <span className="text-[0.75cqw] text-zinc-500 block">DENSITY: DENSE</span>
          </div>
        </div>

        {/* Asymmetrical 2x2 Bento Matrix */}
        <div className="flex-1 grid grid-cols-2 gap-[2.5cqw] my-[2.5cqh] z-10 items-stretch">
          {/* Quadrant 1 (Top-Left): Pit Temperature */}
          <div 
            className={`p-[1.5cqw] rounded-xl border transition-all duration-700 bg-[#2d170e]/80 flex flex-col justify-between relative overflow-hidden ${
              isQ1Active 
                ? "border-[#f97316] shadow-[0_0_20px_rgba(249,115,22,0.3)] scale-[1.03] opacity-100 z-10" 
                : "border-[#f97316]/10 opacity-35 scale-[0.97]"
            }`}
          >
            <div className="absolute top-2 right-3 font-mono text-[0.8cqw] text-[#f97316]/40 font-bold">Q1 / TEMPERATURE</div>
            <div>
              <span className="font-mono text-[0.8cqw] text-[#f97316] font-extrabold tracking-widest block uppercase">炭坑底温场扫流 / CORE HEAT SOURCE</span>
              <h3 className="font-serif text-[1.25cqw] font-black text-[#f4eae1] mt-[0.2cqh]">
                <Thermometer className="w-[1.2cqw] h-[1.2cqw] text-[#f97316] inline mr-1.5 align-middle" />
                {isZh ? "荔木红炭辐射温区" : "Charcoal Radiation Temp Field"}
              </h3>
            </div>
            
            {/* SVG Visual: Thermometer dial */}
            <div className="my-[1cqh] h-[8cqh] flex items-center justify-center">
              <svg viewBox="0 0 160 60" className="w-full h-full fill-none stroke-[#f97316]">
                <path d="M 20 50 Q 80 15, 140 50" strokeWidth="1" strokeDasharray="3 3" className="opacity-25" />
                <path d="M 20 50 Q 80 15, 140 50" strokeWidth="2.5" strokeDasharray="180" strokeDashoffset={180 - (beat + 1) * 55} className="stroke-[#f97316] transition-all duration-1000" />
                <circle cx="80" cy="32.5" r="4" fill="#f97316" />
                <text x="80" y="52" className="font-mono text-[8px] font-black fill-[#f4eae1]" textAnchor="middle">
                  {beat === 0 ? "100 °C" : beat === 1 ? "120 °C" : "135 °C"}
                </text>
              </svg>
            </div>

            <p className="text-[0.9cqw] text-zinc-300 font-sans leading-normal">
              {isZh 
                ? "精确调节荔炭覆灰阻尼层，将底层红外辐射通量保持在设定常数，规避对流冷空气扰动温场。" 
                : "Precisely regulates gray dust insulation, maintaining radiant heat flux against convection cold drafts."}
            </p>
          </div>

          {/* Quadrant 2 (Top-Right): Moisture Depletion */}
          <div 
            className={`p-[1.5cqw] rounded-xl border transition-all duration-700 bg-[#2d170e]/80 flex flex-col justify-between relative overflow-hidden ${
              isQ2Active 
                ? "border-[#f97316] shadow-[0_0_20px_rgba(249,115,22,0.3)] scale-[1.03] opacity-100 z-10" 
                : "border-[#f97316]/10 opacity-35 scale-[0.97]"
            }`}
          >
            <div className="absolute top-2 right-3 font-mono text-[0.8cqw] text-[#f97316]/40 font-bold">Q2 / DEHYDRATION</div>
            <div>
              <span className="font-mono text-[0.8cqw] text-[#f97316] font-extrabold tracking-widest block uppercase">结合水高速蒸腾 / CELL MOISTURE RATE</span>
              <h3 className="font-serif text-[1.25cqw] font-black text-[#f4eae1] mt-[0.2cqh]">
                <Wind className="w-[1.2cqw] h-[1.2cqw] text-[#4ade80] inline mr-1.5 align-middle" />
                {isZh ? "叶片断面失水速度" : "Evaporative Moisture Flux"}
              </h3>
            </div>
            
            {/* SVG Visual: Sinuous waves representing moisture */}
            <div className="my-[1cqh] h-[8cqh] flex items-center justify-center">
              <svg viewBox="0 0 160 60" className="w-full h-full fill-none stroke-[#4ade80]">
                <path d="M 10 30 C 30 10, 50 50, 70 30 C 90 10, 110 50, 130 30 C 150 10, 170 50, 190 30" strokeWidth="1.5" strokeDasharray="6 3" className="opacity-40 animate-flow" />
                <path d="M 10 35 C 30 15, 50 55, 70 35 C 90 15, 110 55, 130 35 C 150 15, 170 55, 190 35" strokeWidth="2.5" className="stroke-[#4ade80] animate-flow" style={{ animationDuration: "0.8s" }} />
              </svg>
            </div>

            <p className="text-[0.9cqw] text-zinc-300 font-sans leading-normal">
              {isZh 
                ? "监测叶肉游离水分通过脉管泵送到表皮层的高速蒸发波，控制叶缘失水与酶化两极平衡。" 
                : "Monitors fast-moving cell water escaping through veins, balancing peripheral leaf edge drying."}
            </p>
          </div>

          {/* Quadrant 3 (Bottom-Left): Enzyme Deactivation */}
          <div 
            className={`p-[1.5cqw] rounded-xl border transition-all duration-700 bg-[#2d170e]/80 flex flex-col justify-between relative overflow-hidden ${
              isQ3Active 
                ? "border-[#f97316] shadow-[0_0_20px_rgba(249,115,22,0.3)] scale-[1.03] opacity-100 z-10" 
                : "border-[#f97316]/10 opacity-35 scale-[0.97]"
            }`}
          >
            <div className="absolute top-2 right-3 font-mono text-[0.8cqw] text-[#f97316]/40 font-bold">Q3 / ENZYME STATUS</div>
            <div>
              <span className="font-mono text-[0.8cqw] text-[#f97316] font-extrabold tracking-widest block uppercase">茶多酚催化终止点 / OXIDASE DEACTIVATION</span>
              <h3 className="font-serif text-[1.25cqw] font-black text-[#f4eae1] mt-[0.2cqh]">
                <Shield className="w-[1.2cqw] h-[1.2cqw] text-red-500 inline mr-1.5 align-middle" />
                {isZh ? "酶活性彻底钝化时间" : "Enzymatic Activity Killpoint"}
              </h3>
            </div>
            
            {/* SVG Visual: Dynamic deactivation ring */}
            <div className="my-[1cqh] h-[8cqh] flex items-center justify-center">
              <svg viewBox="0 0 160 60" className="w-full h-full fill-none stroke-red-500">
                <circle cx="80" cy="30" r="22" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-30" />
                <circle cx="80" cy="30" r="22" strokeWidth="3" strokeDasharray="140" strokeDashoffset={beat === 0 ? 95 : 0} className="stroke-red-500 transition-all duration-1000" />
                <text x="80" y="34" className="font-mono text-[8px] font-black fill-[#f4eae1]" textAnchor="middle">
                  {beat === 0 ? "68% ACTIVE" : "0% DEACTIVATED"}
                </text>
              </svg>
            </div>

            <p className="text-[0.9cqw] text-zinc-300 font-sans leading-normal">
              {isZh 
                ? "高温穿透茶饼核心，使多酚氧化酶完全变性钝化，彻底中断发酵进程，锁定乌龙茶醇厚汤质。" 
                : "High thermal penetration denatures remaining cell oxidases, halting fermentation to secure tea body."}
            </p>
          </div>

          {/* Quadrant 4 (Bottom-Right): Aroma Formations */}
          <div 
            className={`p-[1.5cqw] rounded-xl border transition-all duration-700 bg-[#2d170e]/80 flex flex-col justify-between relative overflow-hidden ${
              isQ4Active 
                ? "border-[#f97316] shadow-[0_0_20px_rgba(249,115,22,0.3)] scale-[1.03] opacity-100 z-10" 
                : "border-[#f97316]/10 opacity-35 scale-[0.97]"
            }`}
          >
            <div className="absolute top-2 right-3 font-mono text-[0.8cqw] text-[#f97316]/40 font-bold">Q4 / VOLATILE AROMAS</div>
            <div>
              <span className="font-mono text-[0.8cqw] text-[#f97316] font-extrabold tracking-widest block uppercase">脂化与焦糖合流 / ESSENTIAL VOLATILES</span>
              <h3 className="font-serif text-[1.25cqw] font-black text-[#f4eae1] mt-[0.2cqh]">
                <CheckCircle className="w-[1.2cqw] h-[1.2cqw] text-[#f97316] inline mr-1.5 align-middle" />
                {isZh ? "香气物质挥发转化谱" : "Orchid & Caramel Synthesis"}
              </h3>
            </div>
            
            {/* SVG Visual: Rising bars */}
            <div className="my-[1cqh] h-[8cqh] flex items-center justify-center">
              <svg viewBox="0 0 160 60" className="w-full h-full fill-none stroke-[#f97316]">
                <line x1="20" y1="50" x2="20" y2="10" strokeWidth="4" className="stroke-zinc-700" />
                <line x1="20" y1="50" x2="20" y2={beat === 2 ? "12" : "38"} strokeWidth="4" className="stroke-[#f97316] transition-all duration-1000" />
                <line x1="60" y1="50" x2="60" y2="10" strokeWidth="4" className="stroke-zinc-700" />
                <line x1="60" y1="50" x2="60" y2={beat === 2 ? "15" : "42"} strokeWidth="4" className="stroke-[#4ade80] transition-all duration-1000" />
                <line x1="100" y1="50" x2="100" y2="10" strokeWidth="4" className="stroke-zinc-700" />
                <line x1="100" y1="50" x2="100" y2={beat === 2 ? "20" : "48"} strokeWidth="4" className="stroke-amber-500 transition-all duration-1000" />
                <line x1="140" y1="50" x2="140" y2="10" strokeWidth="4" className="stroke-zinc-700" />
                <line x1="140" y1="50" x2="140" y2={beat === 2 ? "8" : "32"} strokeWidth="4" className="stroke-yellow-500 transition-all duration-1000" />
              </svg>
            </div>

            <p className="text-[0.9cqw] text-zinc-300 font-sans leading-normal">
              {isZh 
                ? "传统中慢火碳焙，促使叶底发生美拉德焦糖化反应，使橙花叔醇、芳樟醇指数暴涨，催生标志性的木质果仁熟韵。" 
                : "Roasting sparks complex Maillard reactions, driving up nerolidol and linalool for wood-caramel undertones."}
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="flex justify-between items-center font-mono text-[0.8cqw] text-zinc-500 border-t border-[#f97316]/10 pt-[1.2cqh] shrink-0 z-10">
          <span>{isZh ? "热动力均压风门状态：开 // 多通道红外遥测场标定" : "THERMODYNAMIC FLUES: ACTIVE // MULTI-CHANNEL COHERENCY CALIBRATED"}</span>
          <span>SYSTEM: GRID-DYNAMICS-X12</span>
        </div>
      </div>
    );
  };

  // Render Scene 5: Ledger - Extreme (Spec ledger, curves, and Vermilion Seal)
  const renderScene5 = () => {
    return (
      <div className="w-full h-full relative flex flex-col justify-between p-[3cqw] overflow-hidden bg-[#1c0f08] select-none">
        {/* Header */}
        <div className="flex justify-between items-start z-10 shrink-0 border-b border-[#f97316]/10 pb-[1.5cqh]">
          <div>
            <span className="font-mono text-[1cqw] tracking-[0.2cqw] uppercase text-[#f97316] font-bold">
              {isZh ? "国家级非物质文化遗产大红袍工艺大账" : "OFFICIAL WUYI INTANGIBLE HERITAGE PRODUCTION LEDGER"}
            </span>
            <h2 className="text-[2.2cqw] font-serif font-extrabold text-[#f4eae1] leading-tight mt-[0.5cqh]">
              {isZh ? "非遗大账：武夷茶局监制神圣出炉" : "Artisanal Proof Ledger: Sovereign Master Certification"}
            </h2>
          </div>
          <div className="text-right font-mono">
            <span className="text-[1.1cqw] text-[#f97316] font-bold block">SCENE 05 / QUALITY LEDGER</span>
            <span className="text-[0.75cqw] text-zinc-500 block">DENSITY: EXTREME</span>
          </div>
        </div>

        {/* Dynamic content wrapper (using parchment ledger design style inside dark slide!) */}
        <div className="flex-1 flex justify-between gap-[3cqw] my-[2cqh] bg-[#FAF5EE] text-[#3e2311] border-[4px] border-[#2d170e] rounded-2xl p-[1.8cqw] relative overflow-hidden z-10">
          {/* Subtle paper fiber texture */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:12px_12px]" />

          {/* Left Column (40% width): Ledger parameter tables */}
          <div className="w-[40%] flex flex-col justify-between font-mono text-[0.8cqw] border-r border-[#3e2311]/15 pr-[2cqw]">
            <div>
              <span className="text-[0.85cqw] text-[#f97316] font-extrabold tracking-widest block uppercase font-mono mb-[1cqh]">OFFICIAL BATCH RECORD // 2026</span>
              <h3 className="font-serif text-[1.4cqw] font-black text-[#3e2311] leading-none mb-[1.5cqh]">
                <Database className="w-[1.5cqw] h-[1.5cqw] text-[#f97316] inline mr-1.5 align-text-bottom" />
                {isZh ? "手工焙火工艺参数表" : "Artisanal Roasting Log"}
              </h3>
              
              <table className="w-full text-left border-collapse mt-[1cqh] text-[0.85cqw]">
                <tbody>
                  <tr className="border-b border-[#3e2311]/10">
                    <td className="py-[0.8cqh] font-bold text-[#3e2311]/60 uppercase">{isZh ? "批次编号" : "Batch ID"}</td>
                    <td className="py-[0.8cqh] font-bold text-right text-[#3e2311]">DH-1385-2026</td>
                  </tr>
                  <tr className="border-b border-[#3e2311]/10">
                    <td className="py-[0.8cqh] font-bold text-[#3e2311]/60 uppercase">{isZh ? "炭火木料" : "Wood Type"}</td>
                    <td className="py-[0.8cqh] text-right">{isZh ? "优质无烟荔枝木" : "Lychee Charcoal"}</td>
                  </tr>
                  <tr className="border-b border-[#3e2311]/10">
                    <td className="py-[0.8cqh] font-bold text-[#3e2311]/60 uppercase">{isZh ? "灰土覆盖" : "Ash Cover"}</td>
                    <td className="py-[0.8cqh] text-right">2.2 cqw</td>
                  </tr>
                  <tr className="border-b border-[#3e2311]/10">
                    <td className="py-[0.8cqh] font-bold text-[#3e2311]/60 uppercase">{isZh ? "摇青频率" : "Sieve Shakes"}</td>
                    <td className="py-[0.8cqh] text-right">8 Cycles / min</td>
                  </tr>
                  <tr className="border-b border-[#3e2311]/10">
                    <td className="py-[0.8cqh] font-bold text-[#3e2311]/60 uppercase">{isZh ? "累计焙历时" : "Bake Hours"}</td>
                    <td className="py-[0.8cqh] text-right">12.5 h</td>
                  </tr>
                  <tr>
                    <td className="py-[0.8cqh] font-bold text-[#3e2311]/60 uppercase">{isZh ? "汤质评估" : "Soup Texture"}</td>
                    <td className="py-[0.8cqh] font-bold text-right text-emerald-800">{isZh ? "蛤蟆背砂 · 金黄稠亮" : "Matured Gold & Thicker"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border-t border-[#3e2311]/15 pt-[1cqh]">
              <span className="text-[#3e2311]/50 uppercase text-[0.75cqw] block">{isZh ? "主焙人签字" : "BAKE MASTER SIGNATURE"}</span>
              <span className="font-serif italic text-[1.4cqw] font-bold block text-[#3e2311] mt-[0.5cqh]">Wuyi Intangible Heritage Society</span>
            </div>
          </div>

          {/* Right Column (56% width): Moisture Evaporation curves & Stamped Vermilion Seal */}
          <div className="w-[56%] flex flex-col justify-between relative pl-[1cqw]">
            <div>
              <span className="font-mono text-[0.85cqw] text-[#f97316] font-extrabold tracking-widest block uppercase mb-[0.5cqh]">MOISTURE EVAPORATION INDEX // RADIANT DAMPING</span>
              <h3 className="font-serif text-[1.4cqw] font-black text-[#3e2311]">
                {isZh ? "焙火阶段温度与失水合流图" : "Baking Temperature & Evaporation Confluence"}
              </h3>
            </div>

            {/* SVG Chart */}
            <div className="my-[1.5cqh] h-[15cqh] border border-[#3e2311]/15 rounded-xl p-[1cqw] bg-[#FAF5EE] relative">
              <svg viewBox="0 0 240 100" className="w-full h-full fill-none stroke-[#3e2311]/30">
                {/* Gridlines */}
                <line x1="20" y1="10" x2="220" y2="10" stroke="#3e2311" strokeWidth="0.5" strokeDasharray="1 3" className="opacity-15" />
                <line x1="20" y1="50" x2="220" y2="50" stroke="#3e2311" strokeWidth="0.5" strokeDasharray="1 3" className="opacity-15" />
                <line x1="20" y1="90" x2="220" y2="90" stroke="#3e2311" strokeWidth="0.5" strokeDasharray="1 3" className="opacity-15" />
                
                {/* Temp rise curve (orange-red) */}
                <path d="M 20 85 Q 80 80, 130 50 T 220 20" stroke="#f97316" strokeWidth="2" className="stroke-linecap-round" />
                
                {/* Moisture decay curve (green-amber) */}
                <path d="M 20 20 Q 80 40, 130 70 T 220 90" stroke="#15803d" strokeWidth="2" strokeDasharray="4 2" className="stroke-linecap-round" />

                {/* Shaded intersections */}
                <circle cx="130" cy="53" r="5" fill="#f97316" className="animate-pulse" />

                <text x="25" y="80" className="font-mono text-[5px] fill-[#f97316]">炉温 (Temp)</text>
                <text x="25" y="27" className="font-mono text-[5px] fill-[#15803d]">水分 (Moisture)</text>
                <text x="140" y="52" className="font-mono text-[6px] fill-[#3e2311] font-bold">120°C 焦糖化节点</text>
              </svg>
            </div>

            <p className="text-[0.95cqw] text-[#3e2311]/80 font-sans leading-relaxed">
              {isZh 
                ? "历经12.5小时复火文炖，多酚聚合率达成99.8%完美黄金交叉。热转化系数平滑契合经典焙火模型，香气锁定百分之百。" 
                : "After 12.5 hours of low-fire baking, polyphenol integration reaches a 99.8% perfect golden convergence. Natural sweet volatiles are fully secured."}
            </p>

            {/* Official Sovereign Vermilion Seal (Stamped at the corner of the ledger!) */}
            <div className="absolute right-0 bottom-0 select-none pointer-events-none">
              {beat === 2 ? (
                <div 
                  className="border-[3px] border-double border-red-600 rounded-lg p-[0.5cqw] flex flex-col items-center justify-center text-red-600 font-serif rotate-[-10deg] shadow-[0_0_15px_rgba(220,38,38,0.15)] bg-transparent transition-all duration-1000"
                  style={{ 
                    width: "8.5cqw", 
                    height: "8.5cqw",
                    backgroundImage: "radial-gradient(circle, rgba(220, 38, 38, 0.05) 10%, transparent 10%)",
                    backgroundSize: "4px 4px"
                  }}
                >
                  <div className="grid grid-cols-2 gap-[0.2cqw] text-center font-black leading-none h-full w-full items-center">
                    <span className="text-[1.8cqw]">夷</span>
                    <span className="text-[1.8cqw]">武</span>
                    <span className="text-[1.8cqw]">局</span>
                    <span className="text-[1.8cqw]">茶</span>
                  </div>
                </div>
              ) : (
                <div className="border border-dashed border-zinc-400 rounded-lg p-[0.5cqw] flex items-center justify-center text-center text-zinc-400 font-mono text-[0.7cqw] italic rotate-[-5deg]" style={{ width: "8.5cqw", height: "8.5cqw" }}>
                  {isZh ? "未加盖印章" : "UNSTAMPED"}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="flex justify-between items-center font-mono text-[0.8cqw] text-zinc-500 border-t border-[#f97316]/10 pt-[1.2cqh] shrink-0 z-10">
          <span>{isZh ? "传统物理焙茶大账：校验成功 // 大红袍出炉品质绿证已签署" : "ARTISANAL PROOF LEDGER: VERIFIED SUCCESSFUL // QUALITY GREEN CERTIFICATE SIGNED"}</span>
          <span>STAMP CODE: WUYI-MASTER-1385</span>
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

  // Right Vertical Charcoal Furnace Dial Knobs console panel
  const renderConsolePanel = () => {
    if (isThumbnail || !onNavigate) return null;

    const dials = [
      { sNum: 1, zh: "灵叶初展", en: "Initial" },
      { sNum: 2, zh: "萎凋失水", en: "Wilting" },
      { sNum: 3, zh: "三阶焙火", en: "First Baking" },
      { sNum: 4, zh: "炭火矩阵", en: "Re-Baking" },
      { sNum: 5, zh: "非遗大账", en: "Double-Baking" }
    ];

    return (
      <div className="w-[18cqw] h-full bg-[#130904] border-l border-[#f97316]/20 flex flex-col justify-between p-[1.5cqw] relative shrink-0 z-20 shadow-[inset_10px_0_30px_rgba(0,0,0,0.8)] select-none">
        {/* Metal rivets in 4 corners of the console panel */}
        <div className="absolute top-[0.6cqw] left-[0.6cqw] w-[0.6cqw] h-[0.6cqw] rounded-full bg-zinc-700 border border-zinc-600 shadow-inner flex items-center justify-center">
          <div className="w-[0.2cqw] h-[0.2cqw] bg-zinc-500 rounded-full" />
        </div>
        <div className="absolute top-[0.6cqw] right-[0.6cqw] w-[0.6cqw] h-[0.6cqw] rounded-full bg-zinc-700 border border-zinc-600 shadow-inner flex items-center justify-center">
          <div className="w-[0.2cqw] h-[0.2cqw] bg-zinc-500 rounded-full" />
        </div>
        <div className="absolute bottom-[0.6cqw] left-[0.6cqw] w-[0.6cqw] h-[0.6cqw] rounded-full bg-zinc-700 border border-zinc-600 shadow-inner flex items-center justify-center">
          <div className="w-[0.2cqw] h-[0.2cqw] bg-zinc-500 rounded-full" />
        </div>
        <div className="absolute bottom-[0.6cqw] right-[0.6cqw] w-[0.6cqw] h-[0.6cqw] rounded-full bg-zinc-700 border border-zinc-600 shadow-inner flex items-center justify-center">
          <div className="w-[0.2cqw] h-[0.2cqw] bg-zinc-500 rounded-full" />
        </div>

        {/* Console Header */}
        <div className="text-center border-b border-[#f97316]/10 pb-[1.5cqh] relative">
          <span className="font-mono text-[0.8cqw] text-[#f97316] font-extrabold block uppercase tracking-[0.2cqw]">
            {isZh ? "焙火控制台" : "BAKE PANEL"}
          </span>
          <span className="font-serif text-[1.2cqw] text-zinc-400 block font-bold mt-[0.5cqh]">
            {isZh ? "五阶炭火盘" : "5-Stage Dial"}
          </span>
        </div>

        {/* Master Defs SVG (Hidden but contains common gradients/filters) */}
        <svg className="absolute w-0 h-0 pointer-events-none">
          <defs>
            {/* Wood base radial gradient */}
            <radialGradient id="wood-base-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#854d0e" />  {/* amber-800 */}
              <stop offset="65%" stopColor="#451a03" /> {/* amber-950 */}
              <stop offset="100%" stopColor="#1c0f08" /> {/* extremely dark brown */}
            </radialGradient>

            {/* Brass Bezel linear gradient */}
            <linearGradient id="brass-bezel-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eab308" />   {/* yellow-500 */}
              <stop offset="30%" stopColor="#fef08a" />  {/* yellow-100 */}
              <stop offset="60%" stopColor="#ca8a04" />  {/* yellow-600 */}
              <stop offset="100%" stopColor="#451a03" /> {/* amber-950 */}
            </linearGradient>

            {/* Active White-Hot Coal Radial Gradient */}
            <radialGradient id="coal-white-hot-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#fef08a" /> {/* yellow-100 */}
              <stop offset="60%" stopColor="#f97316" /> {/* orange-500 */}
              <stop offset="100%" stopColor="#dc2626" /> {/* red-600 */}
            </radialGradient>

            {/* Inactive Dormant Coal Radial Gradient */}
            <radialGradient id="coal-dormant-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7f1d1d" /> {/* red-900 */}
              <stop offset="70%" stopColor="#450a0a" /> {/* red-950 */}
              <stop offset="100%" stopColor="#1c0f08" /> {/* black-brown */}
            </radialGradient>

            {/* Glowing Smoke Gradient */}
            <linearGradient id="smoke-grad-flow" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#fef08a" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#f97316" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0" />
            </linearGradient>

            {/* Missing scene 3 coal hot gradients defined here for safety! */}
            <radialGradient id="coal-hot-0" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#b45309" />
            </radialGradient>

            <radialGradient id="coal-hot-1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="30%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#78350f" />
            </radialGradient>

            <radialGradient id="coal-hot-2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#fef08a" />
              <stop offset="60%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#450a0a" />
            </radialGradient>

            {/* Dial glow filter */}
            <filter id="dial-glow-f" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Ember glow filter for general SVGs */}
            <filter id="ember-glow-f" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* Dials Stack */}
        <div className="flex-1 flex flex-col justify-around py-[2cqh] gap-[1cqh]">
          {dials.map((node) => {
            const isActive = scene === node.sNum;
            const rotation = isActive ? -90 : 0;

            return (
              <div 
                key={node.sNum} 
                className={`flex items-center justify-between gap-[1cqw] px-[1cqw] py-[0.8cqh] cursor-pointer group transition-all duration-300 relative overflow-visible ${
                  isActive 
                    ? "bg-[#1c0f08]/60 border border-[#f97316]/20 rounded-2xl shadow-[0_0_15px_rgba(249,115,22,0.1)]" 
                    : "border border-transparent hover:bg-[#1c0f08]/20 rounded-2xl"
                }`}
                onClick={() => onNavigate(node.sNum, 0)}
              >
                {/* Dial Label (to the left of dial) */}
                <div className="flex flex-col items-end text-right flex-1 select-none pointer-events-none">
                  <span className={`font-serif text-[1cqw] font-black leading-tight transition-colors duration-300 ${
                    isActive ? "text-[#f97316]" : "text-zinc-400 group-hover:text-zinc-200"
                  }`}>
                    {node.zh}
                  </span>
                  <span className={`font-mono text-[0.7cqw] font-bold tracking-widest uppercase transition-colors duration-300 ${
                    isActive ? "text-amber-500" : "text-zinc-600 group-hover:text-zinc-400"
                  }`}>
                    {node.en}
                  </span>
                </div>

                {/* Dial Knob Container */}
                <div className="w-[5.2cqw] h-[5.2cqw] shrink-0 relative flex items-center justify-center overflow-visible">
                  <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    {/* Active Heat Smoke waves floating leftwards */}
                    {isActive && (
                      <g className="pointer-events-none">
                        <path 
                          d="M 12 50 Q -3 40, -18 50 T -35 50" 
                          fill="none" 
                          stroke="url(#smoke-grad-flow)" 
                          strokeWidth="1.5" 
                          className="animate-smoke-wave-1" 
                        />
                        <path 
                          d="M 12 45 Q 0 36, -12 45 T -28 45" 
                          fill="none" 
                          stroke="url(#smoke-grad-flow)" 
                          strokeWidth="1" 
                          className="animate-smoke-wave-2" 
                        />
                        <path 
                          d="M 12 55 Q -6 48, -20 55 T -38 55" 
                          fill="none" 
                          stroke="url(#smoke-grad-flow)" 
                          strokeWidth="1" 
                          className="animate-smoke-wave-3" 
                        />
                      </g>
                    )}

                    {/* Outer Bezel (Screwed ring) */}
                    <circle cx="50" cy="50" r="46" stroke="url(#brass-bezel-grad)" strokeWidth="2.5" fill="none" />
                    <circle cx="50" cy="50" r="44.5" stroke="#1c0f08" strokeWidth="0.5" fill="none" opacity="0.6" />

                    {/* Graduation marks on bezel */}
                    {Array.from({ length: 12 }).map((_, i) => {
                      const angle = (i * 30) * Math.PI / 180;
                      const rOuter = 48;
                      const rInner = i % 3 === 0 ? 44 : 46;
                      return (
                        <line 
                          key={i}
                          x1={50 + rOuter * Math.cos(angle)} y1={50 + rOuter * Math.sin(angle)}
                          x2={50 + rInner * Math.cos(angle)} y2={50 + rInner * Math.sin(angle)}
                          stroke={isActive ? "#f97316" : "#451a03"}
                          strokeWidth={i % 3 === 0 ? "1" : "0.5"}
                          opacity={isActive ? (i % 3 === 0 ? "0.8" : "0.4") : "0.3"}
                        />
                      );
                    })}

                    {/* Rotating wood dial group */}
                    <g 
                      style={{ 
                        transform: `rotate(${rotation}deg)`, 
                        transformOrigin: '50px 50px',
                        transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      {/* Wood base knob */}
                      <circle cx="50" cy="50" r="41" fill="url(#wood-base-grad)" />
                      
                      {/* Wood Grain Circles */}
                      <circle cx="50" cy="50" r="33" stroke="#2d170e" strokeWidth="0.8" fill="none" opacity="0.4" />
                      <circle cx="50" cy="50" r="25" stroke="#2d170e" strokeWidth="1.2" fill="none" opacity="0.3" strokeDasharray="10 3 15 2" />
                      <circle cx="50" cy="50" r="17" stroke="#2d170e" strokeWidth="0.8" fill="none" opacity="0.45" />

                      {/* Radial Grain Lines */}
                      {Array.from({ length: 8 }).map((_, i) => {
                        const angle = (i * 45) * Math.PI / 180;
                        return (
                          <line 
                            key={i} 
                            x1={50 + 5 * Math.cos(angle)} y1={50 + 5 * Math.sin(angle)}
                            x2={50 + 36 * Math.cos(angle)} y2={50 + 36 * Math.sin(angle)}
                            stroke="#2d170e" 
                            strokeWidth="0.4" 
                            className="opacity-20" 
                          />
                        );
                      })}

                      {/* Glowing Pointer Arrow (points directly UP in base coordinate) */}
                      <line 
                        x1="50" y1="36" 
                        x2="50" y2="13" 
                        stroke={isActive ? "#f97316" : "#3e2311"} 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        style={{
                          filter: isActive ? "url(#dial-glow-f)" : "none"
                        }}
                      />
                      <polygon 
                        points="50,8 45,16 55,16" 
                        fill={isActive ? "#fef08a" : "#3e2311"}
                        style={{
                          filter: isActive ? "url(#dial-glow-f)" : "none"
                        }}
                      />
                    </g>

                    {/* Central Coal Core */}
                    <circle 
                      cx="50" cy="50" 
                      r="10" 
                      fill={isActive ? "url(#coal-white-hot-grad)" : "url(#coal-dormant-grad)"}
                      filter={isActive ? "url(#dial-glow-f)" : "none"}
                      className="transition-all duration-1000"
                    />
                    {isActive && (
                      <circle 
                        cx="50" cy="50" 
                        r="6" 
                        fill="#ffffff" 
                        filter="url(#dial-glow-f)" 
                        className="animate-pulse"
                      />
                    )}
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Console Footer */}
        <div className="text-center border-t border-[#f97316]/10 pt-[1.5cqh] font-mono">
          <span className="text-[0.65cqw] text-zinc-500 block uppercase tracking-wider">{isZh ? "温控阀值" : "THERM BAL"}</span>
          <span className="text-[0.8cqw] text-[#4ade80] font-bold uppercase tracking-widest">{isZh ? "稳态 100%" : "STABLE"}</span>
        </div>
      </div>
    );
  };

  const showConsole = !isThumbnail && onNavigate;

  return (
    <div className="w-full h-full bg-[#1c0f08] text-[#f4eae1] relative overflow-hidden font-sans flex flex-row select-none @container animate-fade-in-rapid">
      {/* Dynamic styles block for fonts and particle smoke animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@500;800;900&family=Cinzel+Decorative:wght@700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

        .font-serif {
          font-family: 'Noto Serif SC', 'Playfair Display', Georgia, serif;
        }

        @keyframes ripple-ember-ani {
          0% { transform: scale(1); opacity: 1; stroke-width: 2.5px; }
          100% { transform: scale(3.5); opacity: 0; stroke-width: 0.5px; }
        }

        .animate-ripple-ember {
          animation: ripple-ember-ani 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: center;
        }

        @keyframes flow-dashes {
          to { stroke-dashoffset: -30; }
        }

        .animate-flow {
          animation: flow-dashes 1.2s linear infinite;
        }

        /* Active Smoke Particle Floating Keyframes */
        @keyframes smokeUp {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          15% { opacity: 0.8; }
          50% { transform: translateY(-1.8cqh) translateX(-0.5cqw) scale(1.4); opacity: 0.4; }
          100% { transform: translateY(-3.6cqh) translateX(0.5cqw) scale(1.8); opacity: 0; }
        }

        .animate-smoke-1 { animation: smokeUp 2.2s ease-out infinite; }
        .animate-smoke-2 { animation: smokeUp 2.8s ease-out infinite 0.7s; }
        .animate-smoke-3 { animation: smokeUp 1.8s ease-out infinite 1.4s; }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fade-in-rapid {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Dial Heat Smoke Waves */
        @keyframes smoke-wave-ani-1 {
          0% {
            stroke-dashoffset: 0;
            opacity: 0;
            transform: translateX(0) scaleY(1);
          }
          10% { opacity: 0.7; }
          50% { opacity: 0.8; transform: translateX(-4px) scaleY(1.1); }
          100% {
            stroke-dashoffset: -30;
            opacity: 0;
            transform: translateX(-15px) scaleY(0.9);
          }
        }

        @keyframes smoke-wave-ani-2 {
          0% {
            stroke-dashoffset: 0;
            opacity: 0;
            transform: translateX(0) scaleY(0.9);
          }
          15% { opacity: 0.6; }
          50% { opacity: 0.7; transform: translateX(-6px) scaleY(1.2); }
          100% {
            stroke-dashoffset: -25;
            opacity: 0;
            transform: translateX(-18px) scaleY(0.8);
          }
        }

        @keyframes smoke-wave-ani-3 {
          0% {
            stroke-dashoffset: 0;
            opacity: 0;
            transform: translateX(0) scaleY(1.1);
          }
          8% { opacity: 0.8; }
          50% { opacity: 0.9; transform: translateX(-3px) scaleY(1); }
          100% {
            stroke-dashoffset: -35;
            opacity: 0;
            transform: translateX(-12px) scaleY(0.95);
          }
        }

        .animate-smoke-wave-1 {
          stroke-dasharray: 6 3;
          animation: smoke-wave-ani-1 2s linear infinite;
          transform-origin: 12px 50px;
        }
        .animate-smoke-wave-2 {
          stroke-dasharray: 5 2;
          animation: smoke-wave-ani-2 2.4s linear infinite 0.4s;
          transform-origin: 12px 45px;
        }
        .animate-smoke-wave-3 {
          stroke-dasharray: 8 4;
          animation: smoke-wave-ani-3 1.6s linear infinite 0.8s;
          transform-origin: 12px 55px;
        }
      `}</style>

      {/* Left Main Area: Content + Footer */}
      <div className={`flex-1 h-full flex flex-col justify-between pt-[2.5cqh] pb-[2.5cqh] pl-[2.5cqw] ${
        showConsole ? "pr-[1cqw]" : "pr-[2.5cqw]"
      } overflow-hidden`}>
        {/* Viewport Horizontal Track Slide (H-Slide) */}
        <div className="flex-1 w-full relative overflow-hidden">
          <div 
            className="flex w-[500%] h-full transition-transform"
            style={{
              transform: `translateX(-${(scene - 1) * 20}%)`,
              transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          >
            <div className="w-[20%] h-full shrink-0">{renderScene1()}</div>
            <div className="w-[20%] h-full shrink-0">{renderScene2()}</div>
            <div className="w-[20%] h-full shrink-0">{renderScene3()}</div>
            <div className="w-[20%] h-full shrink-0">{renderScene4()}</div>
            <div className="w-[20%] h-full shrink-0">{renderScene5()}</div>
          </div>
        </div>

        {/* Decorative Slide Footer */}
        <div className="flex justify-between items-center text-[0.8cqw] font-mono opacity-50 border-t border-[#f97316]/10 pt-[1.2cqh] z-10 shrink-0 mt-[1cqh]">
          <span>© 1385 - 2026 {isZh ? "武夷山传统大红袍制茶工坊" : "Wuyi Rock Tea Intangible Heritage Society"}</span>
          <span>{isZh ? "非同轴多级炭焙物理辐射技术" : "charcoal radiant thermodynamic controls"}</span>
        </div>
      </div>

      {/* Right Sidebar: Dial Knobs Console */}
      {renderConsolePanel()}
    </div>
  );
}
