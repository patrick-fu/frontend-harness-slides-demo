import React from "react";
import { 
  Compass, MapPin, Layers, Clipboard, PenTool, Grid, Scale, Droplet, 
  BookOpen, FileText, Award, ShieldCheck, HelpCircle, Info
} from "lucide-react";

export const getMetadata = (lang) => {
  const isZh = lang === "zh";
  return {
    id: "02",
    tier: "A",
    density: "med",
    name: isZh ? "庞贝古城发掘速写" : "A Day in Pompeii",
    theme: isZh ? "历史考古与古迹复原" : "Historical Archaeology",
    densityLabel: isZh ? "考古速写本" : "Archaeological Sketchbook",
    colors: { bg: "bg-[#faf6ee]", ink: "text-[#2d2722]", panel: "border-[#2d2722]/20" },
    typography: { header: "font-serif", body: "font-handwriting" },
    scenes: [
      {
        id: 1,
        name: isZh ? "遗迹封面" : "Cover Sheet",
        beats: [
          { action: isZh ? "显现陶罐轮廓" : "Expose Amphora Outlines" },
          { action: isZh ? "追踪测量网格" : "Trace Measurement Grid" },
          { action: isZh ? "记录现场坐标" : "Record Field Coordinates" }
        ]
      },
      {
        id: 2,
        name: isZh ? "器形对比" : "Vessel Profile",
        beats: [
          { action: isZh ? "绘制陶器轮廓" : "Draft Vessel Profile" },
          { action: isZh ? "标注尺寸参数" : "Annotate Dimensions" },
          { action: isZh ? "释读红墨题铭" : "Translate Dipinti Markings" }
        ]
      },
      {
        id: 3,
        name: isZh ? "地层发掘" : "Stratigraphy",
        beats: [
          { action: isZh ? "清扫火山灰层" : "Sweep Volcanic Ash Layer" },
          { action: isZh ? "发掘浮石堆积" : "Excavate Pumice Strata" },
          { action: isZh ? "探明古土壤层" : "Uncover Archaic Soil" }
        ]
      },
      {
        id: 4,
        name: isZh ? "软木板比对" : "Corkboard Matrix",
        beats: [
          { action: isZh ? "整理现场便签" : "Organize Field Notes" },
          { action: isZh ? "比对房屋平面" : "Compare House Floorplans" },
          { action: isZh ? "标定样本深度" : "Calibrate Sample Depths" }
        ]
      },
      {
        id: 5,
        name: isZh ? "发掘总账" : "Excavation Ledger",
        beats: [
          { action: isZh ? "编纂文物清单" : "Compile Artifact Inventory" },
          { action: isZh ? "绘制密度海拔" : "Plot Density Elevation" },
          { action: isZh ? "盖印朱砂印章" : "Stamp Curator Vermilion Seal" }
        ]
      }
    ]
  };
};

export default function Style02({ scene, beat, language, isThumbnail }) {
  const isZh = language === "zh";

  // Render Scene 1: Cover Sheet (Ultralight)
  const renderScene1 = () => {
    return (
      <div className="w-full h-full relative flex items-center justify-between px-[6cqw] py-[5cqh] bg-[#faf6ee] text-[#2d2722] overflow-hidden select-none">
        {/* Left Side: Field Diary Metadata */}
        <div className="flex flex-col justify-between h-full w-[25cqw] z-10">
          <div className="flex items-center gap-[1cqw] border-b border-[#2d2722]/20 pb-[2cqh]">
            <Compass className="w-[2.5cqw] h-[2.5cqw] text-[#b83a25] animate-spin-slow" />
            <div>
              <h3 className="font-serif-ancient text-[1.2cqw] font-bold tracking-wider">POMPEII REGIO V</h3>
              <p className="font-handwriting text-[1cqw] text-[#2d2722]/60">
                {isZh ? "第一街区 · 考古发掘日记" : "Insula I · Archaeological Field Diary"}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[1.5cqh] my-[4cqh] font-handwriting text-[1.2cqw] leading-relaxed">
            <p className="border-l-2 border-[#b83a25] pl-[1cqw]">
              <strong>{isZh ? "发掘日期：" : "Date: "}</strong>
              <span className="text-[#b83a25]">{isZh ? "公元79年8月24日 / 现发掘于2026年" : "August 24, 79 AD / Excavated 2026"}</span>
            </p>
            <p className="border-l-2 border-[#b83a25] pl-[1cqw]">
              <strong>{isZh ? "领队学者：" : "Director: "}</strong>
              <span>{isZh ? "P. 富 (国家古迹研究院)" : "P. Fu (National Institute of Antiquities)"}</span>
            </p>
            <p className="border-l-2 border-[#b83a25] pl-[1cqw]">
              <strong>{isZh ? "地层状态：" : "Stratum: "}</strong>
              <span>{isZh ? "火山灰与浮石覆盖层" : "Volcanic Ash & Pumice Overburden"}</span>
            </p>
          </div>

          {/* Field Stamp */}
          <div className="relative w-[12cqw] h-[12cqw] border-2 border-dashed border-[#b83a25]/40 rounded-full flex items-center justify-center rotate-[-12deg] opacity-70">
            <div className="w-[10cqw] h-[10cqw] border border-double border-[#b83a25] rounded-full flex flex-col items-center justify-center p-[0.5cqw] text-center text-[#b83a25]">
              <span className="font-serif-ancient text-[0.8cqw] font-bold tracking-widest">ARCHAEOLOGICAL</span>
              <span className="font-serif-ancient text-[1cqw] font-black my-[0.2cqh]">REGIO V</span>
              <span className="font-serif-ancient text-[0.7cqw] tracking-wider">OFFICE</span>
            </div>
          </div>
        </div>

        {/* Center: Giant Amphora Sketch */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[35cqw] h-[80cqh] flex items-center justify-center z-0">
          <div className="relative w-full h-full flex items-center justify-center animate-sway">
            {/* Sketchy Amphora SVG */}
            <svg 
              viewBox="0 0 400 600" 
              className="w-full h-full drop-shadow-md overflow-visible"
              style={{ filter: "sepia(0.1) contrast(1.1)" }}
            >
              {/* Outer sketchy outline 1 */}
              <path 
                d="M 180 100 L 220 100 L 215 180 L 185 180 Z" 
                fill="none" 
                stroke="#2d2722" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="opacity-80"
              />
              <path 
                d="M 170 100 Q 200 92 230 100 Q 235 105 230 110 Q 200 103 170 110 Q 165 105 170 100 Z" 
                fill="#e6ccb2" 
                fillOpacity="0.15"
                stroke="#2d2722" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              {/* Body */}
              <path 
                d="M 185 180 Q 130 250 130 350 Q 130 450 195 530 L 205 530 Q 270 450 270 350 Q 270 250 215 180 Z" 
                fill="#dcae96" 
                fillOpacity="0.25"
                stroke="#2d2722" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              {/* Double sketchy lines for hand-drawn feel */}
              <path 
                d="M 183 182 Q 133 252 133 348 Q 133 448 196 528 L 204 528 Q 267 448 267 348 Q 267 252 217 182" 
                fill="none" 
                stroke="#2d2722" 
                strokeWidth="1" 
                strokeLinecap="round" 
                className="opacity-60"
              />
              {/* Base */}
              <path 
                d="M 195 530 L 205 530 L 202 560 L 198 560 Z" 
                fill="#2d2722" 
                fillOpacity="0.1"
                stroke="#2d2722" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              {/* Left Handle */}
              <path 
                d="M 185 130 Q 140 130 145 220 Q 150 250 175 240 Q 170 210 185 180" 
                fill="none" 
                stroke="#2d2722" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M 183 132 Q 143 132 147 218 Q 152 248 173 238" 
                fill="none" 
                stroke="#2d2722" 
                strokeWidth="1" 
                strokeLinecap="round" 
                className="opacity-50"
              />
              {/* Right Handle */}
              <path 
                d="M 215 130 Q 260 130 255 220 Q 250 250 225 240 Q 230 210 215 180" 
                fill="none" 
                stroke="#2d2722" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M 217 132 Q 257 132 253 218 Q 248 248 227 238" 
                fill="none" 
                stroke="#2d2722" 
                strokeWidth="1" 
                strokeLinecap="round" 
                className="opacity-50"
              />

              {/* Wheel Ridges (Clay texture) */}
              <path d="M 140 280 Q 200 292 260 280" fill="none" stroke="#2d2722" strokeWidth="1.5" strokeLinecap="round" className="opacity-40" />
              <path d="M 132 340 Q 200 355 268 340" fill="none" stroke="#2d2722" strokeWidth="1.5" strokeLinecap="round" className="opacity-40" />
              <path d="M 135 400 Q 200 415 265 400" fill="none" stroke="#2d2722" strokeWidth="1.5" strokeLinecap="round" className="opacity-40" />
              <path d="M 148 460 Q 200 475 252 460" fill="none" stroke="#2d2722" strokeWidth="1.5" strokeLinecap="round" className="opacity-40" />

              {/* Sketchy shadow under the amphora */}
              <ellipse cx="200" cy="575" rx="50" ry="8" fill="none" stroke="#2d2722" strokeWidth="1.5" className="opacity-30" />
              <ellipse cx="200" cy="575" rx="35" ry="5" fill="none" stroke="#2d2722" strokeWidth="1" className="opacity-20" />

              {/* BEAT 1: Trace Measurement Grid */}
              {beat >= 1 && (
                <g key="beat1-grid" className="animate-fade-in">
                  {/* Grid lines */}
                  <line x1="50" y1="100" x2="350" y2="100" stroke="#b83a25" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
                  <line x1="50" y1="180" x2="350" y2="180" stroke="#b83a25" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
                  <line x1="50" y1="350" x2="350" y2="350" stroke="#b83a25" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
                  <line x1="50" y1="530" x2="350" y2="530" stroke="#b83a25" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
                  <line x1="200" y1="50" x2="200" y2="590" stroke="#b83a25" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />

                  {/* Measurement Callouts */}
                  {/* Height */}
                  <line x1="100" y1="100" x2="100" y2="560" stroke="#b83a25" strokeWidth="1.5" />
                  <polygon points="100,100 96,110 104,110" fill="#b83a25" />
                  <polygon points="100,560 96,550 104,550" fill="#b83a25" />
                  <text x="85" y="330" fill="#b83a25" className="font-handwriting text-[1.4cqw] font-bold" transform="rotate(-90 85 330)">
                    H: 65.0 cm
                  </text>

                  {/* Width */}
                  <line x1="130" y1="350" x2="270" y2="350" stroke="#b83a25" strokeWidth="1.5" />
                  <polygon points="130,350 140,346 140,354" fill="#b83a25" />
                  <polygon points="270,350 260,346 260,354" fill="#b83a25" />
                  <text x="175" y="335" fill="#b83a25" className="font-handwriting text-[1.4cqw] font-bold">
                    W: 28.0 cm
                  </text>

                  {/* Rim Diameter */}
                  <line x1="170" y1="80" x2="230" y2="80" stroke="#b83a25" strokeWidth="1" />
                  <line x1="170" y1="75" x2="170" y2="85" stroke="#b83a25" strokeWidth="1" />
                  <line x1="230" y1="75" x2="230" y2="85" stroke="#b83a25" strokeWidth="1" />
                  <text x="172" y="70" fill="#b83a25" className="font-handwriting text-[1.1cqw] font-bold">
                    Rim Ø: 14.2 cm
                  </text>
                </g>
              )}

              {/* BEAT 2: Record Field Coordinates */}
              {beat >= 2 && (
                <g key="beat2-coords" className="animate-fade-in">
                  {/* Pin Point */}
                  <circle cx="200" cy="350" r="6" fill="#b83a25" />
                  <circle cx="200" cy="350" r="12" fill="none" stroke="#b83a25" strokeWidth="1.5" className="animate-ping" />
                  
                  {/* Callout Line */}
                  <path d="M 200 350 L 320 280 L 370 280" fill="none" stroke="#b83a25" strokeWidth="1.5" strokeDasharray="2 2" />
                  
                  {/* Coordinate Card */}
                  <foreignObject x="270" y="150" width="130" height="120">
                    <div className="bg-[#faf6ee]/95 border border-[#b83a25] p-[0.8cqw] rounded shadow-md font-handwriting text-[1cqw] text-[#b83a25] flex flex-col gap-[0.3cqh]">
                      <span className="font-bold border-b border-[#b83a25]/30 pb-[0.2cqh]">{isZh ? "出土定位" : "FIELD LOC"}</span>
                      <span><strong>Sector:</strong> Regio V, I-1</span>
                      <span><strong>Depth:</strong> -4.25 m</span>
                      <span><strong>Grid:</strong> SQ-42-B</span>
                      <span className="text-[0.8cqw] opacity-80">40.7512° N, 14.4869° E</span>
                    </div>
                  </foreignObject>
                </g>
              )}
            </svg>
          </div>
        </div>

        {/* Right Side: Vertical Cursive Script Title */}
        <div className="flex flex-col justify-center items-end h-full w-[25cqw] z-10">
          <div className="flex flex-col items-center gap-[2cqh]">
            {/* Vertical Title */}
            <div 
              className="font-serif-ancient text-[3.5cqw] font-black text-[#2d2722] tracking-[1.5cqh] leading-none"
              style={{ writingMode: "vertical-rl" }}
            >
              {isZh ? "庞贝古城发掘速写" : "A DAY IN POMPEII"}
            </div>
            
            <div 
              className="font-handwriting text-[1.8cqw] text-[#b83a25] tracking-[0.5cqh] leading-none mt-[2cqh]"
              style={{ writingMode: "vertical-rl" }}
            >
              {isZh ? "维苏威火山下的时间胶囊" : "VESUVIUS TIME CAPSULE"}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render Scene 2: Vessel Profile Comparison (Light)
  const renderScene2 = () => {
    return (
      <div className="w-full h-full relative flex items-center justify-center gap-[4cqw] px-[5cqw] py-[4cqh] bg-[#faf6ee] text-[#2d2722] overflow-hidden select-none">
        {/* Left Sheet: Geometric Rim & Base Profile */}
        <div 
          className="w-[42cqw] h-[88cqh] bg-[#fcf8f0] border border-[#2d2722]/15 shadow-xl rounded-sm p-[2.5cqw] flex flex-col justify-between relative transition-transform duration-500 hover:rotate-0"
          style={{ transform: "rotate(-1deg)" }}
        >
          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#2d2722_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.02] pointer-events-none" />
          
          <div className="flex justify-between items-start border-b border-[#2d2722]/10 pb-[1.5cqh]">
            <div>
              <span className="font-serif-ancient text-[0.8cqw] tracking-widest text-[#b83a25] font-bold">PLATE I-A</span>
              <h4 className="font-serif-ancient text-[1.4cqw] font-bold mt-[0.2cqh]">
                {isZh ? "器形几何与壁厚测量" : "Geometric Rim & Base Profile"}
              </h4>
            </div>
            <span className="font-handwriting text-[1.1cqw] text-[#2d2722]/50">No. 79-0248</span>
          </div>

          {/* Technical Drawing Area */}
          <div className="flex-1 my-[2cqh] flex items-center justify-center relative">
            <svg viewBox="0 0 300 400" className="w-full h-[55cqh] overflow-visible">
              {/* Center Axis */}
              <line x1="150" y1="20" x2="150" y2="380" stroke="#2d2722" strokeWidth="1" strokeDasharray="8 4 2 4" className="opacity-40" />

              {/* Left Side: Outer Silhouette Outline */}
              <path 
                d="M 150 50 L 110 50 Q 100 80 115 130 L 125 130 Q 80 180 80 250 Q 80 320 120 360 L 150 360" 
                fill="none" 
                stroke="#2d2722" 
                strokeWidth="2.5" 
                strokeLinecap="round"
              />

              {/* Right Side: Cross-section Wall Thickness with Hatching */}
              {/* Outer wall */}
              <path 
                d="M 150 50 L 190 50 Q 200 80 185 130 L 175 130 Q 220 180 220 250 Q 220 320 180 360 L 150 360" 
                fill="none" 
                stroke="#2d2722" 
                strokeWidth="2.5" 
                strokeLinecap="round"
              />
              {/* Inner wall */}
              <path 
                d="M 150 58 L 180 58 Q 190 82 177 128 L 167 128 Q 210 180 210 250 Q 210 315 172 352 L 150 352" 
                fill="none" 
                stroke="#2d2722" 
                strokeWidth="1.5" 
                strokeLinecap="round"
              />

              {/* Cross-section hatching lines (diagonal sketches) */}
              <g className="opacity-30">
                <line x1="155" y1="52" x2="160" y2="57" stroke="#2d2722" strokeWidth="1" />
                <line x1="165" y1="52" x2="170" y2="57" stroke="#2d2722" strokeWidth="1" />
                <line x1="175" y1="52" x2="180" y2="57" stroke="#2d2722" strokeWidth="1" />
                <line x1="181" y1="70" x2="186" y2="75" stroke="#2d2722" strokeWidth="1" />
                <line x1="177" y1="90" x2="182" y2="95" stroke="#2d2722" strokeWidth="1" />
                <line x1="172" y1="110" x2="177" y2="115" stroke="#2d2722" strokeWidth="1" />
                <line x1="185" y1="150" x2="190" y2="155" stroke="#2d2722" strokeWidth="1" />
                <line x1="195" y1="180" x2="200" y2="185" stroke="#2d2722" strokeWidth="1" />
                <line x1="205" y1="210" x2="210" y2="215" stroke="#2d2722" strokeWidth="1" />
                <line x1="211" y1="240" x2="216" y2="245" stroke="#2d2722" strokeWidth="1" />
                <line x1="210" y1="270" x2="215" y2="275" stroke="#2d2722" strokeWidth="1" />
                <line x1="202" y1="300" x2="207" y2="305" stroke="#2d2722" strokeWidth="1" />
                <line x1="188" y1="330" x2="193" y2="335" stroke="#2d2722" strokeWidth="1" />
                <line x1="165" y1="354" x2="170" y2="359" stroke="#2d2722" strokeWidth="1" />
              </g>

              {/* Handles */}
              <path d="M 115 90 Q 80 90 85 150 Q 90 175 110 165 Q 105 145 115 130" fill="none" stroke="#2d2722" strokeWidth="2" />
              <path d="M 185 90 Q 220 90 215 150 Q 210 175 190 165 Q 195 145 185 130" fill="none" stroke="#2d2722" strokeWidth="2" />

              {/* BEAT 1: Annotate Dimensions */}
              {beat >= 1 && (
                <g key="beat1-dims" className="animate-fade-in">
                  {/* Rim Ø Callout */}
                  <line x1="110" y1="40" x2="190" y2="40" stroke="#b83a25" strokeWidth="1.5" />
                  <line x1="110" y1="35" x2="110" y2="45" stroke="#b83a25" strokeWidth="1.5" />
                  <line x1="190" y1="35" x2="190" y2="45" stroke="#b83a25" strokeWidth="1.5" />
                  <text x="120" y="32" fill="#b83a25" className="font-handwriting text-[1.2cqw] font-bold">
                    Rim Ø: 14.2 cm
                  </text>

                  {/* Wall Thickness Callout */}
                  <path d="M 185 110 L 230 110 L 245 130" fill="none" stroke="#b83a25" strokeWidth="1.5" />
                  <circle cx="185" cy="110" r="3" fill="#b83a25" />
                  <text x="225" y="102" fill="#b83a25" className="font-handwriting text-[1cqw] font-bold">
                    t: 1.2 cm
                  </text>

                  {/* Base Ø Callout */}
                  <line x1="120" y1="375" x2="180" y2="375" stroke="#b83a25" strokeWidth="1.5" />
                  <line x1="120" y1="370" x2="120" y2="380" stroke="#b83a25" strokeWidth="1.5" />
                  <line x1="180" y1="370" x2="180" y2="380" stroke="#b83a25" strokeWidth="1.5" />
                  <text x="125" y="392" fill="#b83a25" className="font-handwriting text-[1.1cqw] font-bold">
                    Base Ø: 6.5 cm
                  </text>

                  {/* Capacity Callout */}
                  <text x="30" y="250" fill="#b83a25" className="font-handwriting text-[1.3cqw] font-bold bg-[#faf6ee] px-[0.5cqw] rounded border border-[#b83a25]/30">
                    {isZh ? "容量: 26.5 升" : "Vol: 26.5 L"}
                  </text>
                </g>
              )}
            </svg>
          </div>

          <div className="font-handwriting text-[1.1cqw] leading-relaxed text-[#2d2722]/80 border-t border-[#2d2722]/10 pt-[1.5cqh]">
            {isZh ? (
              <p><strong>测量记录：</strong>该器皿呈流线型双耳设计，壁厚均匀，烧制火候极高。底部有明显轮圈拉坯痕迹，符合典型公元1世纪坎帕尼亚行会作坊工艺。</p>
            ) : (
              <p><strong>Measurement Notes:</strong> Streamlined amphora with uniform wall thickness and high-fired clay. Distinct wheel-thrown marks on base, matching 1st-century Campanian workshop traditions.</p>
            )}
          </div>
        </div>

        {/* Right Sheet: Dipinti Trade Markings Translation */}
        <div 
          className="w-[42cqw] h-[88cqh] bg-[#fcf8f0] border border-[#2d2722]/15 shadow-xl rounded-sm p-[2.5cqw] flex flex-col justify-between relative transition-transform duration-500 hover:rotate-0"
          style={{ transform: "rotate(1.5deg)" }}
        >
          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#2d2722_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.02] pointer-events-none" />

          <div className="flex justify-between items-start border-b border-[#2d2722]/10 pb-[1.5cqh]">
            <div>
              <span className="font-serif-ancient text-[0.8cqw] tracking-widest text-[#b83a25] font-bold">PLATE I-B</span>
              <h4 className="font-serif-ancient text-[1.4cqw] font-bold mt-[0.2cqh]">
                {isZh ? "颈部红墨题铭与释读" : "Dipinti Trade Markings"}
              </h4>
            </div>
            <span className="font-handwriting text-[1.1cqw] text-[#2d2722]/50">Regio V, Sec. I</span>
          </div>

          {/* Close-up Sketch Area */}
          <div className="flex-1 my-[2cqh] flex flex-col items-center justify-center relative">
            {/* Sketch of Vessel Neck */}
            <div className="relative w-[28cqw] h-[32cqh] border border-[#2d2722]/10 rounded bg-[#f5ebe0]/40 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Neck Outline */}
                <path d="M 60 10 L 140 10 L 130 190 L 70 190 Z" fill="none" stroke="#2d2722" strokeWidth="1.5" strokeDasharray="2 2" className="opacity-40" />
                <path d="M 50 40 Q 100 30 150 40" fill="none" stroke="#2d2722" strokeWidth="2" />
                <path d="M 65 40 L 60 190" fill="none" stroke="#2d2722" strokeWidth="2.5" />
                <path d="M 135 40 L 140 190" fill="none" stroke="#2d2722" strokeWidth="2.5" />

                {/* Red Ink Dipinti Markings */}
                <g stroke="#b83a25" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
                  {/* LIQ·FLOS */}
                  <path d="M 75 75 L 75 105 L 90 105" /> {/* L */}
                  <path d="M 95 75 L 95 105" /> {/* I */}
                  <path d="M 105 75 Q 120 75 120 90 Q 120 105 105 105 L 105 75" /> {/* Q */}
                  <circle cx="125" cy="100" r="2" fill="#b83a25" stroke="none" /> {/* Dot */}
                  
                  {/* FLOS */}
                  <path d="M 75 125 L 75 155 M 75 125 L 90 125 M 75 140 L 85 140" /> {/* F */}
                  <path d="M 95 125 L 95 155 L 110 155" /> {/* L */}
                  <path d="M 115 140 Q 115 125 125 125 Q 135 125 135 140 Q 135 155 125 155 Q 115 155 115 140 Z" /> {/* O */}
                  <path d="M 140 125 Q 155 125 140 140 Q 155 155 140 155" /> {/* S */}
                </g>

                {/* Vintage Markings */}
                <g stroke="#b83a25" strokeWidth="2" fill="none" strokeLinecap="round" className="opacity-80">
                  <path d="M 85 175 L 95 175 M 90 170 L 90 180" strokeWidth="1.5" /> {/* Plus sign */}
                  <path d="M 100 170 L 105 180 L 110 170" /> {/* V */}
                  <path d="M 112 170 L 117 180 L 122 170" /> {/* V */}
                  <text x="126" y="178" fill="#b83a25" className="font-serif-ancient text-[1cqw] font-bold">IX</text>
                </g>
              </svg>
            </div>

            {/* BEAT 2: Translate Dipinti Markings */}
            {beat >= 2 && (
              <div key="beat2-translation" className="w-full mt-[2cqh] bg-[#b83a25]/5 border border-[#b83a25]/30 rounded p-[1.5cqw] font-handwriting text-[1.1cqw] text-[#b83a25] animate-fade-in flex flex-col gap-[1cqh]">
                <div className="flex items-center gap-[0.5cqw] border-b border-[#b83a25]/20 pb-[0.5cqh] font-bold">
                  <Award className="w-[1.5cqw] h-[1.5cqw]" />
                  <span>{isZh ? "红墨题铭释读报告" : "Dipinti Epigraphic Translation"}</span>
                </div>
                <div className="grid grid-cols-2 gap-[1.5cqw]">
                  <div>
                    <p className="font-serif-ancient font-bold text-[1cqw] text-[#2d2722]">"LIQ · FLOS"</p>
                    <p className="text-[#2d2722]/80">
                      {isZh ? "→ Liquamen Flos (顶级鱼酱花)" : "→ Liquamen Flos (Flower of Premium Fish Sauce)"}
                    </p>
                  </div>
                  <div>
                    <p className="font-serif-ancient font-bold text-[1cqw] text-[#2d2722]">"V V IX" (79 AD)</p>
                    <p className="text-[#2d2722]/80">
                      {isZh ? "→ 维苏威公元79年产区特酿" : "→ Vesuvian Vintage, Year 79 AD"}
                    </p>
                  </div>
                </div>
                <p className="text-[0.9cqw] opacity-90 border-t border-[#b83a25]/10 pt-[0.5cqh] italic">
                  {isZh ? "* 题铭证实了庞贝与坎帕尼亚沿海地区繁荣的调味汁与葡萄酒贸易网络。" : "* Epigraphy confirms Pompeii's active role in the luxury garum and wine trade networks of Campania."}
                </p>
              </div>
            )}
          </div>

          <div className="font-handwriting text-[1.1cqw] leading-relaxed text-[#2d2722]/80 border-t border-[#2d2722]/10 pt-[1.5cqh]">
            {isZh ? (
              <p><strong>题铭学分析：</strong>陶罐颈部的红漆手写体（Dipinti）保存极佳。红漆采用当地朱砂与动物胶调制，字迹洒脱，属于典型的罗马日常草书。</p>
            ) : (
              <p><strong>Epigraphic Notes:</strong> Red brush-written markings (Dipinti) on the vessel neck are remarkably legible, rendered in local cinnabar pigment mixed with animal binder.</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Render Scene 3: Stratigraphic Soil Profile (Standard)
  const renderScene3 = () => {
    // Determine visibility and sweep state of layers based on beat
    const isAshSwept = beat >= 1;
    const isPumiceSwept = beat >= 2;

    return (
      <div className="w-full h-full relative flex items-center justify-between px-[6cqw] py-[5cqh] bg-[#faf6ee] text-[#2d2722] overflow-hidden select-none">
        {/* Left Side: Stratigraphic Column */}
        <div className="w-[32cqw] h-full flex flex-col justify-between z-10">
          <div className="border-b border-[#2d2722]/10 pb-[1.5cqh]">
            <span className="font-serif-ancient text-[0.8cqw] tracking-widest text-[#b83a25] font-bold">SECTION III</span>
            <h3 className="font-serif-ancient text-[1.8cqw] font-black">
              {isZh ? "地层学发掘剖面" : "Stratigraphic Soil Profile"}
            </h3>
            <p className="font-handwriting text-[1.1cqw] text-[#2d2722]/60">
              {isZh ? "垂直堆积层与文物分布关联" : "Vertical Strata & Artifact Distribution"}
            </p>
          </div>

          {/* Excavation Strata Visual Column */}
          <div className="flex-1 my-[3cqh] relative border-2 border-[#2d2722] rounded-lg overflow-hidden bg-[#faf6ee] shadow-inner flex flex-col">
            {/* Layer 1: Volcanic Ash (Top) */}
            <div 
              className={`h-[25cqh] border-b border-dashed border-[#2d2722]/40 transition-all duration-1000 flex flex-col justify-center px-[2cqw] relative ${
                isAshSwept ? "bg-[#dcd6cd]/30 opacity-40" : "bg-[#dcd6cd]"
              }`}
            >
              {/* Ash Texture (Dots) */}
              <div className="absolute inset-0 bg-[radial-gradient(#555_1px,transparent_1px)] [background-size:8px_8px] opacity-10 pointer-events-none" />
              
              <div className="flex justify-between items-center font-serif-ancient text-[1cqw] font-bold">
                <span>{isZh ? "A层: 火山碎屑灰层" : "Layer A: Volcanic Ash"}</span>
                <span className="font-mono text-[0.9cqw]">0.0m - 2.5m</span>
              </div>
              <p className="font-handwriting text-[0.9cqw] text-[#2d2722]/70 mt-[0.5cqh]">
                {isZh ? "公元79年喷发首阶段降尘，极细，呈浅灰色" : "First phase of 79 AD eruption. Fine-grained, light grey."}
              </p>

              {/* Sweeping Brush Indicator */}
              {beat === 0 && (
                <div className="absolute right-[1.5cqw] top-1/2 -translate-y-1/2 flex items-center gap-[0.5cqw] bg-[#faf6ee] border border-[#b83a25] px-[0.8cqw] py-[0.4cqh] rounded-full text-[#b83a25] font-handwriting text-[0.9cqw] font-bold animate-bounce">
                  <PenTool className="w-[1.2cqw] h-[1.2cqw]" />
                  <span>{isZh ? "正在清扫..." : "Sweeping..."}</span>
                </div>
              )}
              {isAshSwept && (
                <div className="absolute right-[1.5cqw] top-1/2 -translate-y-1/2 text-[#b83a25] font-handwriting text-[1.1cqw] font-bold rotate-[-12deg]">
                  {isZh ? "[已清扫]" : "[Excavated]"}
                </div>
              )}
            </div>

            {/* Layer 2: Pumice Lapilli (Middle) */}
            <div 
              className={`h-[25cqh] border-b border-dashed border-[#2d2722]/40 transition-all duration-1000 flex flex-col justify-center px-[2cqw] relative ${
                isPumiceSwept ? "bg-[#c8bba6]/30 opacity-40" : "bg-[#c8bba6]"
              }`}
            >
              {/* Pumice Texture (Circles) */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.15)_1px,transparent_2px)] [background-size:12px_12px] opacity-20 pointer-events-none" />

              <div className="flex justify-between items-center font-serif-ancient text-[1cqw] font-bold">
                <span>{isZh ? "B层: 黄褐色浮石层" : "Layer B: Pumice Lapilli"}</span>
                <span className="font-mono text-[0.9cqw]">-2.5m - 5.0m</span>
              </div>
              <p className="font-handwriting text-[0.9cqw] text-[#2d2722]/70 mt-[0.5cqh]">
                {isZh ? "喷发次阶段降石，质地疏松，夹杂火山弹" : "Second eruption phase. Loose white/yellow pumice stones."}
              </p>

              {/* Sweeping Brush Indicator */}
              {beat === 1 && (
                <div className="absolute right-[1.5cqw] top-1/2 -translate-y-1/2 flex items-center gap-[0.5cqw] bg-[#faf6ee] border border-[#b83a25] px-[0.8cqw] py-[0.4cqh] rounded-full text-[#b83a25] font-handwriting text-[0.9cqw] font-bold animate-bounce">
                  <PenTool className="w-[1.2cqw] h-[1.2cqw]" />
                  <span>{isZh ? "正在发掘..." : "Excavating..."}</span>
                </div>
              )}
              {isPumiceSwept && (
                <div className="absolute right-[1.5cqw] top-1/2 -translate-y-1/2 text-[#b83a25] font-handwriting text-[1.1cqw] font-bold rotate-[-12deg]">
                  {isZh ? "[已清扫]" : "[Excavated]"}
                </div>
              )}
            </div>

            {/* Layer 3: Pre-79 AD Archaic Soil (Bottom) */}
            <div className="flex-1 bg-[#8c7662] text-[#faf6ee] flex flex-col justify-center px-[2cqw] relative">
              {/* Organic Texture */}
              <div className="absolute inset-0 bg-[radial-gradient(#2d2722_1px,transparent_1px)] [background-size:14px_14px] opacity-10 pointer-events-none" />

              <div className="flex justify-between items-center font-serif-ancient text-[1cqw] font-bold">
                <span className="text-[#faf6ee]">{isZh ? "C层: 公元前古土壤层" : "Layer C: Pre-79 AD Archaic Soil"}</span>
                <span className="font-mono text-[0.9cqw] text-[#faf6ee]/80">-5.0m - 8.0m</span>
              </div>
              <p className="font-handwriting text-[0.9cqw] text-[#faf6ee]/80 mt-[0.5cqh]">
                {isZh ? "古罗马地表，有机质丰富，出土大量生活器皿" : "Ancient Roman ground level. Rich organic soil with household artifacts."}
              </p>

              {/* Sweeping Brush Indicator */}
              {beat === 2 && (
                <div className="absolute right-[1.5cqw] top-1/2 -translate-y-1/2 flex items-center gap-[0.5cqw] bg-[#faf6ee] border border-[#b83a25] px-[0.8cqw] py-[0.4cqh] rounded-full text-[#b83a25] font-handwriting text-[0.9cqw] font-bold animate-bounce">
                  <PenTool className="w-[1.2cqw] h-[1.2cqw]" />
                  <span>{isZh ? "探明底层..." : "Uncovering..."}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-[1cqw] text-[1cqw] font-handwriting text-[#2d2722]/60">
            <Info className="w-[1.2cqw] h-[1.2cqw] text-[#b83a25]" />
            <span>{isZh ? "地层叠压顺序反映了维苏威火山爆发的物理过程" : "Superposition sequence maps the exact physical phases of the eruption."}</span>
          </div>
        </div>

        {/* Right Side: Excavated Artifacts with Dynamic Callouts */}
        <div className="w-[50cqw] h-full flex flex-col justify-between pl-[4cqw] z-10">
          <div className="bg-[#fcf8f0] border border-[#2d2722]/15 shadow-lg rounded p-[2.5cqw] flex-1 flex flex-col justify-between relative">
            {/* Sketchy drawing of the Archaic Soil Layer Artifacts */}
            <div className="border-b border-[#2d2722]/10 pb-[1.5cqh] mb-[2cqh]">
              <h4 className="font-serif-ancient text-[1.4cqw] font-bold">
                {isZh ? "古土壤层文物出土分布" : "Archaic Soil Artifact Distribution"}
              </h4>
              <p className="font-handwriting text-[1.1cqw] text-[#2d2722]/60">
                {isZh ? "在火山爆发前的古地表层发掘出的生活用品" : "In-situ domestic artifacts recovered from the ancient Roman ground level"}
              </p>
            </div>

            {/* Interactive Excavation Canvas */}
            <div className="flex-1 border border-[#2d2722]/10 rounded bg-[#f5ebe0]/30 relative overflow-hidden flex items-center justify-center">
              {/* If beat is 0 or 1, the artifacts are still "buried" under the ash/pumice layers */}
              {beat < 2 ? (
                <div className="flex flex-col items-center justify-center text-center p-[2cqw] font-handwriting text-[1.4cqw] text-[#2d2722]/50">
                  <Layers className="w-[4cqw] h-[4cqw] text-[#b83a25] mb-[2cqh] animate-pulse" />
                  <p className="font-bold text-[#b83a25]">
                    {isZh ? "地层尚未清扫完毕" : "Strata Still Sealed"}
                  </p>
                  <p className="text-[1.1cqw] mt-[1cqh] max-w-[30cqw]">
                    {isZh ? "请继续推进发掘步骤（清扫火山灰与浮石层），以揭示埋藏在古土壤层中的文物。" : "Advance the excavation steps to sweep away volcanic overburden and reveal buried artifacts."}
                  </p>
                </div>
              ) : (
                <div key="artifacts-revealed" className="w-full h-full p-[1.5cqw] relative animate-fade-in">
                  <svg viewBox="0 0 400 250" className="w-full h-full overflow-visible">
                    {/* Background soil hatch */}
                    <path d="M 10 230 Q 100 220 200 235 Q 300 240 390 225" fill="none" stroke="#2d2722" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-30" />

                    {/* Artifact 1: Terracotta Oil Lamp */}
                    <g transform="translate(100, 150) scale(0.7)" className="opacity-90">
                      {/* Oil Lamp Sketch */}
                      <path d="M 20 40 Q 50 10 100 20 Q 130 30 140 50 Q 130 70 100 80 Q 50 90 20 60 Z" fill="#dcae96" fillOpacity="0.3" stroke="#2d2722" strokeWidth="2" />
                      <path d="M 140 50 L 160 45 L 160 55 Z" fill="#dcae96" stroke="#2d2722" strokeWidth="1.5" /> {/* Spout */}
                      <circle cx="70" cy="45" r="15" fill="none" stroke="#2d2722" strokeWidth="1.5" /> {/* Filling hole */}
                      <path d="M 20 50 C 5 50 5 30 20 30" fill="none" stroke="#2d2722" strokeWidth="2" /> {/* Handle */}
                      {/* Flame sketch */}
                      <path d="M 162 45 Q 170 30 165 20 Q 158 30 162 45" fill="#b83a25" fillOpacity="0.3" stroke="#b83a25" strokeWidth="1" />
                    </g>

                    {/* Artifact 2: Bronze Coin */}
                    <g transform="translate(280, 170) scale(0.6)" className="opacity-90">
                      {/* Coin Sketch */}
                      <circle cx="40" cy="40" r="30" fill="#c8bba6" fillOpacity="0.4" stroke="#2d2722" strokeWidth="2" />
                      <circle cx="40" cy="40" r="26" fill="none" stroke="#2d2722" strokeWidth="1" strokeDasharray="2 2" />
                      {/* Emperor profile sketch */}
                      <path d="M 35 25 Q 45 25 45 35 Q 40 45 35 45 L 35 55" fill="none" stroke="#2d2722" strokeWidth="2" />
                      <path d="M 32 30 Q 25 35 32 40" fill="none" stroke="#2d2722" strokeWidth="1.5" />
                    </g>

                    {/* Callout Lines & Labels */}
                    {/* Lamp Callout */}
                    <path d="M 110 140 L 80 80 L 30 80" fill="none" stroke="#b83a25" strokeWidth="1.5" />
                    <circle cx="110" cy="140" r="4" fill="#b83a25" />
                    <foreignObject x="10" y="10" width="160" height="65">
                      <div className="font-handwriting text-[0.95cqw] text-[#b83a25] leading-tight">
                        <span className="font-bold block">{isZh ? "陶制油灯 (POMP-79-0253)" : "Terracotta Oil Lamp"}</span>
                        <span>{isZh ? "深度: -5.8m | 完好" : "Depth: -5.8m | Intact"}</span>
                        <span className="block text-[0.8cqw] opacity-80">{isZh ? "带有维斯帕先时期压纹" : "Stamped with imperial motif"}</span>
                      </div>
                    </foreignObject>

                    {/* Coin Callout */}
                    <path d="M 300 160 L 320 90 L 370 90" fill="none" stroke="#b83a25" strokeWidth="1.5" />
                    <circle cx="300" cy="160" r="4" fill="#b83a25" />
                    <foreignObject x="240" y="20" width="150" height="65">
                      <div className="font-handwriting text-[0.95cqw] text-[#b83a25] leading-tight text-right">
                        <span className="font-bold block">{isZh ? "青铜塞斯特斯币 (71 AD)" : "Bronze Sestertius"}</span>
                        <span>{isZh ? "深度: -6.2m | 轻度磨损" : "Depth: -6.2m | Worn"}</span>
                        <span className="block text-[0.8cqw] opacity-80">{isZh ? "铸有罗马皇帝头像" : "Vespasian laureate bust"}</span>
                      </div>
                    </foreignObject>
                  </svg>
                </div>
              )}
            </div>

            {/* Field Diary Description */}
            <div className="font-handwriting text-[1.1cqw] leading-relaxed text-[#2d2722]/80 border-t border-[#2d2722]/10 pt-[1.5cqh] mt-[2cqh]">
              {isZh ? (
                <p><strong>发掘日志：</strong>在清理完厚达5米的火山碎屑堆积后，我们终于触及了公元79年的古罗马地表。土壤呈深褐色，富含有机质。出土的陶灯和铜币表明，这里曾是一处繁荣的平民住宅区，居民在灾难降临时仓皇逃离。</p>
              ) : (
                <p><strong>Excavation Log:</strong> After clearing 5 meters of volcanic overburden, we finally reached the 79 AD Roman ground level. The dark organic soil yielded a terracotta lamp and a bronze coin, indicating a domestic residence where inhabitants fled in haste as Vesuvius erupted.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render Scene 4: Corkboard Matrix (Dense)
  const renderScene4 = () => {
    return (
      <div className="w-full h-full relative p-[4cqw] bg-[#faf6ee] text-[#2d2722] overflow-hidden select-none flex flex-col justify-between">
        {/* Header */}
        <div className="border-b border-[#2d2722]/10 pb-[1cqh] mb-[2cqh] z-10 flex justify-between items-end">
          <div>
            <span className="font-serif-ancient text-[0.8cqw] tracking-widest text-[#b83a25] font-bold">BOARD IV</span>
            <h3 className="font-serif-ancient text-[1.8cqw] font-black">
              {isZh ? "发掘现场分析软木板" : "Field Analysis Corkboard Matrix"}
            </h3>
          </div>
          <p className="font-handwriting text-[1.2cqw] text-[#2d2722]/60">
            {isZh ? "多源线索比对与空间关联" : "Cross-referencing spatial clues & floorplans"}
          </p>
        </div>

        {/* Corkboard Workspace */}
        <div className="flex-1 relative border-4 border-[#5c4033] rounded-lg bg-[#e6ccb2]/30 shadow-2xl overflow-hidden p-[1cqw]">
          {/* Cork Texture Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#8c6239_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-15 pointer-events-none" />

          {/* SVG String Connections (BEAT 2) */}
          {beat >= 2 && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 animate-fade-in">
              {/* String 1: Note 1 to Note 2 */}
              <path d="M 180 120 Q 320 100 480 100" fill="none" stroke="#b83a25" strokeWidth="2" strokeLinecap="round" className="opacity-80" />
              {/* String 2: Note 2 to Note 3 */}
              <path d="M 480 100 Q 340 250 200 320" fill="none" stroke="#b83a25" strokeWidth="2" strokeLinecap="round" className="opacity-80" />
              {/* String 3: Note 1 to Note 4 */}
              <path d="M 180 120 Q 350 250 520 310" fill="none" stroke="#b83a25" strokeWidth="2" strokeLinecap="round" className="opacity-80" />
            </svg>
          )}

          {/* Note 1: House of the Silver Wedding (Top-Left) */}
          <div 
            className="absolute left-[3cqw] top-[3cqh] w-[26cqw] h-[34cqh] bg-[#fdfaf2] shadow-lg border border-[#2d2722]/10 p-[1.5cqw] rounded-sm flex flex-col justify-between transition-all duration-500 z-20 hover:scale-105 hover:z-30"
            style={{ transform: "rotate(-2deg)" }}
          >
            {/* Red Push Pin */}
            <div className="absolute top-[-1cqh] left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-[1.2cqw] h-[1.2cqw] bg-[#b83a25] rounded-full shadow-md border border-[#b83a25]/50" />
              <div className="w-[0.2cqw] h-[1cqh] bg-slate-400 -mt-[0.2cqh]" />
            </div>

            <div>
              <h4 className="font-serif-ancient text-[1.1cqw] font-bold border-b border-[#2d2722]/10 pb-[0.5cqh] mb-[1cqh] text-[#b83a25]">
                {isZh ? "银婚之屋 (Insula V)" : "House of the Silver Wedding"}
              </h4>
              <p className="font-handwriting text-[0.95cqw] leading-relaxed text-[#2d2722]/80">
                {isZh ? "· 埋藏深度：4.5米火山灰层。\n· 建筑结构：保存完好的中庭与柱廊。\n· 发现：墙壁上保留了精美的第二风格壁画，未受高温破坏。" : "• Buried under 4.5m of fine ash.\n• Architecture: Intact atrium & peristyle.\n• Wall paintings: Exquisite Second Style frescoes preserved without thermal damage."}
              </p>
            </div>
            
            {/* Mini floorplan sketch */}
            <div className="h-[8cqh] border border-[#2d2722]/10 rounded bg-[#faf6ee] flex items-center justify-center p-[0.5cqw]">
              <svg viewBox="0 0 100 40" className="w-full h-full opacity-60">
                <rect x="10" y="5" width="25" height="30" fill="none" stroke="#2d2722" strokeWidth="1" />
                <rect x="40" y="5" width="50" height="30" fill="none" stroke="#2d2722" strokeWidth="1" />
                <circle cx="22" cy="20" r="4" fill="none" stroke="#2d2722" strokeWidth="1" /> {/* Atrium */}
                <circle cx="65" cy="20" r="10" fill="none" stroke="#2d2722" strokeWidth="1" strokeDasharray="2 2" /> {/* Peristyle */}
              </svg>
            </div>
          </div>

          {/* Note 2: Region V Map (Top-Right) */}
          <div 
            className="absolute right-[3cqw] top-[2cqh] w-[26cqw] h-[34cqh] bg-[#faf0e6] shadow-lg border border-[#2d2722]/10 p-[1.5cqw] rounded-sm flex flex-col justify-between transition-all duration-500 z-20 hover:scale-105 hover:z-30"
            style={{ transform: "rotate(1.5deg)" }}
          >
            {/* Red Push Pin */}
            <div className="absolute top-[-1cqh] left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-[1.2cqw] h-[1.2cqw] bg-[#b83a25] rounded-full shadow-md border border-[#b83a25]/50" />
              <div className="w-[0.2cqw] h-[1cqh] bg-slate-400 -mt-[0.2cqh]" />
            </div>

            <div>
              <h4 className="font-serif-ancient text-[1.1cqw] font-bold border-b border-[#2d2722]/10 pb-[0.5cqh] mb-[1cqh] text-[#b83a25]">
                {isZh ? "第五区发掘空间" : "Regio V Excavation Sectors"}
              </h4>
              <p className="font-handwriting text-[0.95cqw] leading-relaxed text-[#2d2722]/80">
                {isZh ? "· 扇区1：商业双耳瓶高密集区。\n· 扇区2：发现多处面包房与磨坊遗迹。\n· 空间关联：双耳瓶分布与主要商道（Decumanus）高度吻合。" : "• Sector 1: High density of commercial amphorae.\n• Sector 2: Bakeries and mills discovered.\n• Correlation: Amphora distribution matches the main trade route (Decumanus)."}
              </p>
            </div>

            {/* Mini map sketch */}
            <div className="h-[8cqh] border border-[#2d2722]/10 rounded bg-[#faf6ee] flex items-center justify-center p-[0.5cqw]">
              <svg viewBox="0 0 100 40" className="w-full h-full opacity-60">
                <line x1="10" y1="20" x2="90" y2="20" stroke="#2d2722" strokeWidth="2" /> {/* Decumanus */}
                <line x1="30" y1="5" x2="30" y2="35" stroke="#2d2722" strokeWidth="1.5" />
                <line x1="70" y1="5" x2="70" y2="35" stroke="#2d2722" strokeWidth="1.5" />
                <rect x="35" y="5" width="30" height="12" fill="#b83a25" fillOpacity="0.1" stroke="#b83a25" strokeWidth="1" />
                <text x="42" y="13" fill="#b83a25" className="font-serif-ancient text-[6px] font-bold">SEC 1</text>
              </svg>
            </div>
          </div>

          {/* Note 3: Sample Depths Chart (Bottom-Left - BEAT 1) */}
          {beat >= 1 && (
            <div 
              key="note3"
              className="absolute left-[5cqw] bottom-[3cqh] w-[24cqw] h-[32cqh] bg-[#f5ebe0] shadow-lg border border-[#2d2722]/10 p-[1.5cqw] rounded-sm flex flex-col justify-between transition-all duration-500 z-20 hover:scale-105 hover:z-30 animate-fade-in"
              style={{ transform: "rotate(3deg)" }}
            >
              {/* Red Push Pin */}
              <div className="absolute top-[-1cqh] left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-[1.2cqw] h-[1.2cqw] bg-[#b83a25] rounded-full shadow-md border border-[#b83a25]/50" />
                <div className="w-[0.2cqw] h-[1cqh] bg-slate-400 -mt-[0.2cqh]" />
              </div>

              <div>
                <h4 className="font-serif-ancient text-[1.1cqw] font-bold border-b border-[#2d2722]/10 pb-[0.5cqh] mb-[1cqh] text-[#b83a25]">
                  {isZh ? "样本发掘深度对比" : "Sample Excavation Depths"}
                </h4>
                <p className="font-handwriting text-[0.95cqw] leading-relaxed text-[#2d2722]/80">
                  {isZh ? "对比不同住宅区的地层深度，以确定公元79年古地表的微小海拔起伏。" : "Comparing stratigraphic depths to map micro-topography of the 79 AD ground level."}
                </p>
              </div>

              {/* Hand-drawn bar chart */}
              <div className="h-[10cqh] border border-[#2d2722]/10 rounded bg-[#faf6ee] p-[0.5cqw] flex flex-col justify-between">
                <div className="flex-1 flex items-end gap-[1.5cqw] px-[1cqw]">
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-[#b83a25]/40 border border-[#b83a25] h-[5cqh]" />
                    <span className="font-handwriting text-[0.8cqw] mt-[0.2cqh]">{isZh ? "牧神之屋" : "Faun"}</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-[#b83a25]/60 border border-[#b83a25] h-[7cqh]" />
                    <span className="font-handwriting text-[0.8cqw] mt-[0.2cqh]">{isZh ? "银婚之屋" : "Silver"}</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-[#b83a25]/50 border border-[#b83a25] h-[6cqh]" />
                    <span className="font-handwriting text-[0.8cqw] mt-[0.2cqh]">{isZh ? "小吃店" : "Therm."}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Note 4: Thermal Insulation Notes (Bottom-Right - BEAT 1) */}
          {beat >= 1 && (
            <div 
              key="note4"
              className="absolute right-[5cqw] bottom-[3cqh] w-[24cqw] h-[32cqh] bg-[#fdfaf2] shadow-lg border border-[#2d2722]/10 p-[1.5cqw] rounded-sm flex flex-col justify-between transition-all duration-500 z-20 hover:scale-105 hover:z-30 animate-fade-in"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              {/* Red Push Pin */}
              <div className="absolute top-[-1cqh] left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-[1.2cqw] h-[1.2cqw] bg-[#b83a25] rounded-full shadow-md border border-[#b83a25]/50" />
                <div className="w-[0.2cqw] h-[1cqh] bg-slate-400 -mt-[0.2cqh]" />
              </div>

              <div>
                <h4 className="font-serif-ancient text-[1.1cqw] font-bold border-b border-[#2d2722]/10 pb-[0.5cqh] mb-[1cqh] text-[#b83a25]">
                  {isZh ? "火山灰隔热与有机物保存" : "Thermal Preservation Notes"}
                </h4>
                <p className="font-handwriting text-[0.95cqw] leading-relaxed text-[#2d2722]/80">
                  {isZh ? "· 物理特性：火山灰是极佳的隔热介质。\n· 结果：瞬间封存，阻止了有机物的炭化与腐烂。\n· 证物：发现炭化的无花果、大麦和完整的面包，保留了最初的形态。" : "• Physics: Volcanic ash acts as a perfect thermal insulator.\n• Result: Instant sealing blocked oxygen and decay.\n• Evidence: Carbonized figs, barley, and intact loaves of bread found with original shapes."}
                </p>
              </div>

              <div className="flex items-center gap-[0.5cqw] text-[0.85cqw] font-handwriting text-[#b83a25] border-t border-[#b83a25]/10 pt-[0.5cqh]">
                <ShieldCheck className="w-[1.2cqw] h-[1.2cqw]" />
                <span>{isZh ? "有机物碳化标本已送往实验室" : "Organic carbonized specimens cataloged."}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Render Scene 5: Specimen Ledger Sheet (Extreme)
  const renderScene5 = () => {
    return (
      <div className="w-full h-full relative bg-[#faf6ee] text-[#2d2722] overflow-hidden select-none p-[2cqw]">
        {/* Dual Hand-Drawn Double-Line Borders */}
        <div className="w-full h-full border-8 border-double border-[#2d2722]/80 p-[2cqw] flex flex-col justify-between relative">
          
          {/* Header Area */}
          <div className="border-b-2 border-[#2d2722] pb-[1.5cqh] flex justify-between items-end">
            <div className="flex items-center gap-[1.5cqw]">
              <Clipboard className="w-[3cqw] h-[3cqw] text-[#b83a25]" />
              <div>
                <span className="font-serif-ancient text-[0.9cqw] tracking-widest text-[#b83a25] font-bold">REGIO V · INSULA I · EXCAVATION RECORD</span>
                <h3 className="font-serif-ancient text-[2cqw] font-black tracking-tight mt-[0.2cqh]">
                  {isZh ? "庞贝古城第五区第一街区发掘总账" : "POMPEII SPECIMEN LEDGER SHEET"}
                </h3>
              </div>
            </div>
            
            <div className="font-handwriting text-[1.2cqw] text-right text-[#2d2722]/70">
              <p><strong>{isZh ? "整理日期：" : "Compiled: "}</strong>{isZh ? "2026年7月" : "July 2026"}</p>
              <p><strong>{isZh ? "发掘编号：" : "Ledger ID: "}</strong>POMP-79-REG5</p>
            </div>
          </div>

          {/* Ledger Main Content Grid */}
          <div className="flex-1 my-[2.5cqh] flex gap-[3cqw] overflow-hidden">
            {/* Left Column: Dense Specimen Table */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse font-handwriting text-[1.1cqw]">
                  <thead>
                    <tr className="border-b border-[#2d2722] font-serif-ancient text-[0.95cqw] font-bold text-[#b83a25]">
                      <th className="py-[1cqh] pr-[1cqw]">{isZh ? "标本编号" : "Specimen ID"}</th>
                      <th className="py-[1cqh] pr-[1cqw]">{isZh ? "器物类型" : "Type"}</th>
                      <th className="py-[1cqh] pr-[1cqw]">{isZh ? "重量" : "Weight"}</th>
                      <th className="py-[1cqh] pr-[1cqw]">{isZh ? "容量/体积" : "Volume"}</th>
                      <th className="py-[1cqh] pr-[1cqw]">{isZh ? "发掘坐标" : "Coordinates"}</th>
                      <th className="py-[1cqh] pr-[1cqw]">{isZh ? "酸碱度" : "Acidity"}</th>
                      <th className="py-[1cqh] pr-[1cqw]">{isZh ? "分类" : "Class"}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2d2722]/10">
                    <tr className="hover:bg-[#2d2722]/5 transition-colors">
                      <td className="py-[1cqh] font-serif-ancient font-bold text-[0.9cqw]">POMP-79-0248</td>
                      <td className="py-[1cqh]">{isZh ? "双耳瓶残片" : "Amphora Shard"}</td>
                      <td className="py-[1cqh]">1,420 g</td>
                      <td className="py-[1cqh]">850 cc</td>
                      <td className="py-[1cqh]">R-V, I-1, -4.2m</td>
                      <td className="py-[1cqh]">pH 6.8</td>
                      <td className="py-[1cqh] text-[#b83a25] font-bold">Class A</td>
                    </tr>
                    <tr className="hover:bg-[#2d2722]/5 transition-colors">
                      <td className="py-[1cqh] font-serif-ancient font-bold text-[0.9cqw]">POMP-79-0249</td>
                      <td className="py-[1cqh]">{isZh ? "维斯帕先铜币" : "Bronze Coin"}</td>
                      <td className="py-[1cqh]">28 g</td>
                      <td className="py-[1cqh]">4 cc</td>
                      <td className="py-[1cqh]">R-V, I-1, -4.5m</td>
                      <td className="py-[1cqh]">pH 7.2</td>
                      <td className="py-[1cqh] text-[#b83a25] font-bold">Class B</td>
                    </tr>
                    <tr className="hover:bg-[#2d2722]/5 transition-colors">
                      <td className="py-[1cqh] font-serif-ancient font-bold text-[0.9cqw]">POMP-79-0250</td>
                      <td className="py-[1cqh]">{isZh ? "玻璃香膏瓶" : "Glass Phial"}</td>
                      <td className="py-[1cqh]">45 g</td>
                      <td className="py-[1cqh]">60 cc</td>
                      <td className="py-[1cqh]">R-V, I-1, -3.9m</td>
                      <td className="py-[1cqh]">pH 6.5</td>
                      <td className="py-[1cqh] text-[#b83a25] font-bold">Class C</td>
                    </tr>
                    <tr className="hover:bg-[#2d2722]/5 transition-colors">
                      <td className="py-[1cqh] font-serif-ancient font-bold text-[0.9cqw]">POMP-79-0251</td>
                      <td className="py-[1cqh]">{isZh ? "碳化无花果" : "Carbonized Fig"}</td>
                      <td className="py-[1cqh]">12 g</td>
                      <td className="py-[1cqh]">15 cc</td>
                      <td className="py-[1cqh]">R-V, I-2, -5.1m</td>
                      <td className="py-[1cqh]">pH 5.9</td>
                      <td className="py-[1cqh] text-[#b83a25] font-bold">Class D</td>
                    </tr>
                    <tr className="hover:bg-[#2d2722]/5 transition-colors">
                      <td className="py-[1cqh] font-serif-ancient font-bold text-[0.9cqw]">POMP-79-0252</td>
                      <td className="py-[1cqh]">{isZh ? "大理石雕像残件" : "Marble Fragment"}</td>
                      <td className="py-[1cqh]">3,850 g</td>
                      <td className="py-[1cqh]">1,200 cc</td>
                      <td className="py-[1cqh]">R-V, I-2, -4.8m</td>
                      <td className="py-[1cqh]">pH 7.5</td>
                      <td className="py-[1cqh] text-[#b83a25] font-bold">Class A</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Curator Signature Line */}
              <div className="flex justify-between items-end border-t border-[#2d2722]/20 pt-[1.5cqh] font-handwriting text-[1.1cqw]">
                <div className="flex items-center gap-[0.5cqw]">
                  <Scale className="w-[1.5cqw] h-[1.5cqw] text-[#b83a25]" />
                  <span>{isZh ? "所有出土标本均已录入国家古迹数据库" : "All specimens cataloged in the National Antiquities Database."}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[0.9cqw] text-[#2d2722]/50">{isZh ? "发掘现场领队签字" : "Field Director Signature"}</span>
                  <span className="font-handwriting text-[1.6cqw] text-[#b83a25] font-bold tracking-wider rotate-[-2deg] mt-[0.5cqh]">
                    Patrick Fu
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Acidity Charts & Curator Seal Stamp */}
            <div className="w-[28cqw] flex flex-col justify-between border-l border-[#2d2722]/10 pl-[3cqw] relative">
              
              {/* BEAT 1: Plot Density Elevation */}
              {beat >= 1 ? (
                <div key="beat1-chart" className="flex-1 flex flex-col justify-between animate-fade-in">
                  <div>
                    <h4 className="font-serif-ancient text-[1.1cqw] font-bold text-[#b83a25] flex items-center gap-[0.5cqw]">
                      <Droplet className="w-[1.3cqw] h-[1.3cqw]" />
                      {isZh ? "土壤酸碱度与保存质量" : "Soil Acidity vs Preservation"}
                    </h4>
                    <p className="font-handwriting text-[0.95cqw] text-[#2d2722]/60 mt-[0.5cqh]">
                      {isZh ? "pH值越接近中性，金属与陶瓷保存越完好" : "pH levels closer to neutral yield better preservation"}
                    </p>
                  </div>

                  {/* Hand-drawn Soil Acidity Line Chart */}
                  <div className="h-[22cqh] border border-[#2d2722]/10 rounded bg-[#faf6ee] p-[1cqw] relative flex flex-col justify-between my-[1.5cqh]">
                    <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
                      {/* Grid Lines */}
                      <line x1="20" y1="10" x2="190" y2="10" stroke="#2d2722" strokeWidth="0.5" strokeDasharray="2 2" className="opacity-20" />
                      <line x1="20" y1="50" x2="190" y2="50" stroke="#2d2722" strokeWidth="0.5" strokeDasharray="2 2" className="opacity-20" />
                      <line x1="20" y1="90" x2="190" y2="90" stroke="#2d2722" strokeWidth="0.5" strokeDasharray="2 2" className="opacity-20" />
                      
                      {/* Y Axis Labels */}
                      <text x="5" y="13" fill="#2d2722" className="font-handwriting text-[8px] opacity-60">pH 8</text>
                      <text x="5" y="53" fill="#2d2722" className="font-handwriting text-[8px] opacity-60">pH 7</text>
                      <text x="5" y="93" fill="#2d2722" className="font-handwriting text-[8px] opacity-60">pH 6</text>

                      {/* X Axis Labels (Depths) */}
                      <text x="35" y="98" fill="#2d2722" className="font-handwriting text-[8px] opacity-60">-3.0m</text>
                      <text x="85" y="98" fill="#2d2722" className="font-handwriting text-[8px] opacity-60">-4.5m</text>
                      <text x="135" y="98" fill="#2d2722" className="font-handwriting text-[8px] opacity-60">-6.0m</text>
                      <text x="175" y="98" fill="#2d2722" className="font-handwriting text-[8px] opacity-60">-7.5m</text>

                      {/* Chart line path */}
                      <path 
                        d="M 40 70 L 90 50 L 140 85 L 180 55" 
                        fill="none" 
                        stroke="#b83a25" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="sketch-line"
                      />

                      {/* Data points */}
                      <circle cx="40" cy="70" r="3" fill="#b83a25" />
                      <circle cx="90" cy="50" r="3" fill="#b83a25" />
                      <circle cx="140" cy="85" r="3" fill="#b83a25" />
                      <circle cx="180" cy="55" r="3" fill="#b83a25" />
                    </svg>
                  </div>

                  <p className="font-handwriting text-[0.95cqw] leading-relaxed text-[#2d2722]/80">
                    {isZh ? "火山灰层（pH 6.5-7.2）呈弱酸至弱碱性，为青铜器和玻璃器皿提供了极佳的化学保护屏障。" : "Volcanic ash layers (pH 6.5-7.2) provided an ideal chemical buffer, preserving delicate bronze and glass artifacts."}
                  </p>
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-center text-center p-[1.5cqw] font-handwriting text-[1.1cqw] text-[#2d2722]/40 border border-dashed border-[#2d2722]/20 rounded bg-[#faf6ee]/50">
                  {isZh ? "等待生成土壤酸碱度分析图..." : "Waiting for soil acidity plot..."}
                </div>
              )}

              {/* BEAT 2: Stamp curator vermilion certificate seal */}
              <div className="h-[14cqh] flex items-end justify-end mt-[2cqh]">
                {beat >= 2 ? (
                  <div 
                    key="curator-seal" 
                    className="w-[13cqw] h-[13cqw] border-4 border-double border-[#b83a25] rounded flex flex-col items-center justify-center p-[0.5cqw] text-center text-[#b83a25] font-serif-ancient font-black rotate-[-15deg] shadow-lg animate-fade-in bg-[#faf6ee] z-20"
                    style={{ 
                      boxShadow: "0 0 0 4px #faf6ee, 0 10px 25px -5px rgba(184, 58, 37, 0.4)",
                      backgroundImage: "radial-gradient(circle, rgba(184, 58, 37, 0.05) 10%, transparent 10%)",
                      backgroundSize: "8px 8px"
                    }}
                  >
                    <span className="text-[0.7cqw] tracking-widest font-bold">POMPEII</span>
                    <span className="text-[1.2cqw] my-[0.3cqh] tracking-wider border-y border-[#b83a25] py-[0.2cqh]">{isZh ? "馆藏特印" : "APPROVED"}</span>
                    <span className="text-[0.6cqw] font-handwriting font-bold">{isZh ? "国家考古博物馆" : "National Museum"}</span>
                  </div>
                ) : (
                  <div className="w-[13cqw] h-[13cqw] border-2 border-dashed border-[#2d2722]/10 rounded flex items-center justify-center text-center text-[#2d2722]/30 font-handwriting text-[1cqw] italic">
                    {isZh ? "未盖印" : "Unstamped"}
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render the appropriate scene based on the scene prop
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
    <div className="w-full h-full bg-[#faf6ee] text-[#2d2722] relative overflow-hidden font-sans">
      {/* Self-contained style block for Google Fonts and Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Cinzel:wght@400..700&family=Special+Elite&display=swap');
        
        .font-handwriting {
          font-family: 'Caveat', cursive, sans-serif;
        }
        
        .font-serif-ancient {
          font-family: 'Cinzel', Georgia, serif;
        }
        
        .font-typewriter {
          font-family: 'Special Elite', Courier, monospace;
        }
        
        @keyframes sway {
          0%, 100% { transform: rotate(-2.5deg); }
          50% { transform: rotate(2.5deg); }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes draw-path {
          to { stroke-dashoffset: 0; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(12px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        .animate-sway {
          animation: sway 7s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .sketch-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-path 2.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      {/* Main active scene view using Vertical Spatial Viewport Strata Track */}
      <div className="flex-1 w-full relative overflow-hidden">
        <div 
          className="flex flex-col h-[500%] w-full transition-transform duration-1000 ease-out"
          style={{
            transform: `translateY(-${(scene - 1) * 20}%)`,
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          <div className="h-[20%] w-full shrink-0">{renderScene1()}</div>
          <div className="h-[20%] w-full shrink-0">{renderScene2()}</div>
          <div className="h-[20%] w-full shrink-0">{renderScene3()}</div>
          <div className="h-[20%] w-full shrink-0">{renderScene4()}</div>
          <div className="h-[20%] w-full shrink-0">{renderScene5()}</div>
        </div>
      </div>
    </div>
  );
}
