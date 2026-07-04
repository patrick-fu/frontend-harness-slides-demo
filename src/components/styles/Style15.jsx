import React from "react";
import { Compass, Wind, Layers, Grid, BookOpen, Sparkles, Info, Calendar, MapPin, Activity, Database, Feather } from "lucide-react";

export const getMetadata = (lang) => {
  const isZh = lang === "zh";
  return {
    id: "15",
    tier: "S",
    density: "medium",
    name: isZh ? "枯山水禅意空间" : "Zen Garden Karesansui",
    theme: isZh ? "日式枯山水与禅意空间布局" : "Zen Garden & Karesansui Layout",
    densityLabel: isZh ? "禅意空间总账" : "Zen Garden Tally",
    colors: { bg: "bg-[#fcfcfa]", ink: "text-[#2d2c29]", panel: "border-[#e5e4de]" },
    typography: { header: "font-serif", body: "font-sans" },
    scenes: [
      {
        id: 1,
        name: isZh ? "禅意封面" : "Zen Premise",
        beats: [
          { action: isZh ? "凝神静虑" : "Focus & Contemplate" },
          { action: isZh ? "起笔扫砂" : "Begin Raking Gravel" },
          { action: isZh ? "落石定乾坤" : "Place Focal Stone" }
        ]
      },
      {
        id: 2,
        name: isZh ? "石组与砂纹" : "Ishigumi & Samon",
        beats: [
          { action: isZh ? "立三尊石" : "Erect Triad Stones" },
          { action: isZh ? "理涟漪纹" : "Rake Wave Ripples" },
          { action: isZh ? "融虚实境" : "Harmonize Form & Void" }
        ]
      },
      {
        id: 3,
        name: isZh ? "禅径三段式" : "Zen Path Process",
        beats: [
          { action: isZh ? "入径寻幽" : "Enter the Path" },
          { action: isZh ? "中途面壁" : "Contemplate the Wall" },
          { action: isZh ? "豁然开悟" : "Attain Enlightenment" }
        ]
      },
      {
        id: 4,
        name: isZh ? "禅意美学矩阵" : "Zen Aesthetics Quadrant",
        beats: [
          { action: isZh ? "校准留白比例" : "Calibrate Ma Ratio" },
          { action: isZh ? "品味物哀侘寂" : "Savor Wabi-Sabi" },
          { action: isZh ? "权衡石组重心" : "Balance Stone Weight" }
        ]
      },
      {
        id: 5,
        name: isZh ? "京都住持庭园账" : "Kyoto Abbot Garden Tally",
        beats: [
          { action: isZh ? "清点庭园资材" : "Inventory Garden Materials" },
          { action: isZh ? "测算苔藓覆盖" : "Calculate Moss Coverage" },
          { action: isZh ? "加盖朱砂印章" : "Stamp Vermilion Seal" }
        ]
      }
    ]
  };
};

export default function Style15({ scene, beat, language, onNavigate, isThumbnail }) {
  const isZh = language === "zh";

  // Bespoke Theme Navigation (Top-Right Zen Moss Accents)
  const renderNavigation = () => {
    if (isThumbnail || !onNavigate) return null;

    const scenes = [1, 2, 3, 4, 5];

    return (
      <div className="absolute top-[4.5cqh] right-[5.5cqw] flex items-center gap-[2.2cqw] z-50 select-none">
        {scenes.map((sNum) => {
          const isActive = scene === sNum;
          return (
            <div
              key={sNum}
              onClick={() => onNavigate(sNum, 0)}
              className="relative w-[3.2cqw] h-[3.2cqw] flex items-center justify-center cursor-pointer group"
            >
              {/* Invisible large click area */}
              <div className="absolute inset-0 rounded-full bg-transparent" />

              {/* Raked sand ripple rings (SVG) for active stone */}
              {isActive && (
                <svg className="absolute w-[6.5cqw] h-[6.5cqw] overflow-visible pointer-events-none">
                  {/* Concentric raked sand ripple - Faint base circle */}
                  <circle
                    cx="50%"
                    cy="50%"
                    r="1.2cqw"
                    fill="none"
                    stroke="#5c7a65"
                    strokeWidth="1.2"
                    className="opacity-20"
                  />
                  
                  {/* Raked sand ripple - Slowly expanding ripple 1 */}
                  <circle
                    cx="50%"
                    cy="50%"
                    r="1.2cqw"
                    fill="none"
                    stroke="#5c7a65"
                    strokeWidth="1"
                    className="animate-zen-ripple-1"
                  />

                  {/* Raked sand ripple - Slowly expanding ripple 2 */}
                  <circle
                    cx="50%"
                    cy="50%"
                    r="1.2cqw"
                    fill="none"
                    stroke="#5c7a65"
                    strokeWidth="0.8"
                    className="animate-zen-ripple-2"
                  />

                  {/* Gentle pulse inner gravel ring */}
                  <circle
                    cx="50%"
                    cy="50%"
                    r="0.8cqw"
                    fill="none"
                    stroke="#5c7a65"
                    strokeWidth="0.5"
                    className="opacity-30 animate-pulse"
                  />
                </svg>
              )}

              {/* Tiny circular moss-green accent dot (looks like organic moss cushion) */}
              <div
                className={`w-[0.8cqw] h-[0.8cqw] rounded-full transition-all duration-700 ease-out relative ${
                  isActive
                    ? "bg-[#4a5d4e] animate-zen-moss-pulse"
                    : "bg-[#8f9e8b] opacity-40 group-hover:bg-[#5c7a65] group-hover:opacity-95 group-hover:scale-110"
                }`}
                style={{
                  // Soft moss 3D cushion shadow effect
                  boxShadow: isActive 
                    ? "inset 0 1px 1px rgba(255,255,255,0.4), 0 2px 6px rgba(74,93,78,0.45)"
                    : "inset 0 1px 1px rgba(255,255,255,0.2), 0 1px 2px rgba(143,158,139,0.2)"
                }}
              />
            </div>
          );
        })}
      </div>
    );
  };

  // Render Scene 1: Premise - Ultralight Zen Cover
  const renderScene1 = () => {
    return (
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-[#fcfcfa] select-none">
        {/* Concentric Raked Gravel Rings and Master Stone (Oki-ishi) */}
        <div className="absolute w-[65cqw] h-[65cqw] flex items-center justify-center pointer-events-none">
          <svg viewBox="0 0 600 600" className="w-full h-full overflow-visible">
            <defs>
              <radialGradient id="stone-moss" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#5c7a65" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#5c7a65" stopOpacity="0.4" />
                <stop offset="80%" stopColor="#8f9e8b" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#fcfcfa" stopOpacity="0" />
              </radialGradient>
              <filter id="stone-shadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="2" dy="8" stdDeviation="8" floodColor="#2d2c29" floodOpacity="0.2" />
              </filter>
            </defs>

            {/* Concentric Gravel Rings (Samon) */}
            <g className="opacity-60">
              <ellipse cx="300" cy="300" rx="270" ry="180" fill="none" stroke="#e5e4de" strokeWidth="1.5" />
              <ellipse cx="300" cy="300" rx="240" ry="160" fill="none" stroke="#e5e4de" strokeWidth="1" />
              <ellipse cx="300" cy="300" rx="210" ry="140" fill="none" stroke="#e5e4de" strokeWidth="1" />
              <ellipse cx="300" cy="300" rx="180" ry="120" fill="none" stroke="#e5e4de" strokeWidth="1" />
            </g>

            {/* Dynamic concentric rings drawn on beat >= 1 */}
            <g className="transition-all duration-1000">
              <ellipse 
                cx="300" 
                cy="300" 
                rx="150" 
                ry="100" 
                fill="none" 
                stroke={beat >= 1 ? "#c8d3cc" : "#e5e4de"} 
                strokeWidth={beat >= 1 ? "2" : "1"} 
                strokeDasharray={beat >= 1 ? "none" : "4 8"}
                className="transition-all duration-1000"
              />
              <ellipse 
                cx="300" 
                cy="300" 
                rx="120" 
                ry="80" 
                fill="none" 
                stroke={beat >= 1 ? "#c8d3cc" : "#e5e4de"} 
                strokeWidth={beat >= 1 ? "1.5" : "1"} 
                className="transition-all duration-1000"
              />
              <ellipse 
                cx="300" 
                cy="300" 
                rx="90" 
                ry="60" 
                fill="none" 
                stroke={beat >= 1 ? "#5c7a65" : "#e5e4de"} 
                strokeWidth={beat >= 1 ? "2" : "1"} 
                className="transition-all duration-1000"
              />
            </g>

            {/* Mossy Base Glow (Active at beat >= 2) */}
            {beat >= 2 && (
              <g className="animate-pulse-glow">
                <ellipse cx="300" cy="310" rx="75" ry="45" fill="url(#stone-moss)" />
                <ellipse cx="230" cy="335" rx="35" ry="20" fill="url(#stone-moss)" />
                <ellipse cx="360" cy="325" rx="40" ry="25" fill="url(#stone-moss)" />
              </g>
            )}

            {/* Master Stone (Oki-ishi) & Companion Stones */}
            {/* Main Stone */}
            <path 
              d="M 255 310 Q 245 230 300 200 Q 355 220 345 310 Q 310 335 255 310 Z" 
              fill="#52514c" 
              stroke="#3d3c38" 
              strokeWidth="2" 
              filter="url(#stone-shadow)"
              className="transition-all duration-1000"
            />
            {/* Stone texture lines */}
            <path d="M 285 215 Q 295 260 290 315" fill="none" stroke="#3d3c38" strokeWidth="1" opacity="0.4" />
            <path d="M 310 225 Q 315 270 312 318" fill="none" stroke="#3d3c38" strokeWidth="1" opacity="0.3" />

            {/* Companion Stone Left (Revealed at beat >= 2) */}
            <path 
              d="M 205 330 Q 195 295 220 285 Q 240 295 235 335 Q 220 345 205 330 Z" 
              fill="#706f6a" 
              stroke="#52514c" 
              strokeWidth="1.5"
              filter="url(#stone-shadow)"
              className={`transition-all duration-1000 ${beat >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}`}
              style={{ transformOrigin: "220px 310px" }}
            />

            {/* Companion Stone Right (Revealed at beat >= 2) */}
            <path 
              d="M 355 325 Q 350 300 370 290 Q 390 300 380 330 Q 365 335 355 325 Z" 
              fill="#63625d" 
              stroke="#4a4945" 
              strokeWidth="1.5"
              filter="url(#stone-shadow)"
              className={`transition-all duration-1000 ${beat >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}`}
              style={{ transformOrigin: "370px 310px" }}
            />
          </svg>
        </div>

        {/* Overlay Content Block */}
        <div className="absolute inset-0 flex flex-col justify-between p-[6cqw] z-10 pointer-events-none">
          {/* Top Header */}
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col text-left">
              <span className="font-serif text-[1.2cqw] text-[#4a5d4e] font-bold tracking-[0.3cqw] uppercase">
                {isZh ? "京都 · 龍安寺美学" : "KYOTO · RYŌAN-JI AESTHETICS"}
              </span>
              <h1 className="font-serif text-[3.8cqw] font-black leading-tight text-[#2d2c29] tracking-tight mt-[0.5cqh]">
                {isZh ? "枯山水禅意空间" : "KARESANSUI ZEN SPACE"}
              </h1>
            </div>
            <div className="border border-[#e5e4de] bg-[#fcfcfa]/90 px-[1.5cqw] py-[1cqh] rounded-md font-serif text-[1cqw] text-[#4a5d4e] font-bold tracking-wider">
              {isZh ? "第一境：凝神" : "PHASE I: SILENCE"}
            </div>
          </div>

          {/* Bottom Description */}
          <div className="max-w-[42cqw] text-left border-l-[3px] border-[#5c7a65] pl-[2cqw] py-[0.5cqh]">
            <p className="font-serif text-[1.3cqw] text-[#2d2c29] leading-relaxed">
              {isZh 
                ? "置一石于白砂， concentric 涟漪层层推开。无一滴水，却见万顷波涛；无一朵花，却得满庭春色。此乃「留白」之极境。" 
                : "A single stone rests in white sand, concentric ripples expanding. Without a drop of water, one sees boundless waves; without a flower, the garden blooms. This is the ultimate realm of Ma."}
            </p>
            
            {/* Beat interactive label */}
            <div className="mt-[2.5cqh] flex items-center gap-[1cqw]">
              <div className="w-[1cqw] h-[1cqw] rounded-full bg-[#4a5d4e] animate-ping" />
              <span className="font-serif text-[0.95cqw] text-[#4a5d4e] font-bold tracking-widest uppercase">
                {beat === 0 && (isZh ? "凝神静虑 · 寂静无声" : "CONTEMPLATING IN ABSOLUTE SILENCE")}
                {beat === 1 && (isZh ? "起笔扫砂 · 涟漪初现" : "RAKING GRAVEL · RIPPLES EMERGE")}
                {beat >= 2 && (isZh ? "落石定乾坤 · 苔藓共生" : "FOCAL STONES SET · MOSS CO-EXISTING")}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render Scene 2: Dual - Light Rock Arrangement vs Raked Sand Waves
  const renderScene2 = () => {
    return (
      <div className="w-full h-full relative flex items-center justify-between px-[5cqw] py-[4cqh] bg-[#fcfcfa]">
        {/* Left Sheet: Rock Arrangement (Ishigumi) Blueprint (38% width, taller) */}
        <div 
          className={`w-[36cqw] h-[74cqh] border border-[#e5e4de] bg-white rounded-lg p-[2cqw] flex flex-col justify-between relative shadow-sm transition-all duration-1000 ${
            beat >= 0 ? "opacity-100 translate-y-0" : "opacity-30 translate-y-4"
          }`}
          style={{ transform: "rotate(-1deg)" }}
        >
          {/* Paper texture overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e4de_0.5px,transparent_0.5px)] [background-size:16px_12px] opacity-[0.15] pointer-events-none" />

          {/* Header */}
          <div className="border-b border-[#e5e4de] pb-[1.5cqh] z-10">
            <div className="flex items-center gap-[0.5cqw]">
              <Compass className="w-[1.6cqw] h-[1.6cqw] text-[#4a5d4e]" />
              <span className="font-serif text-[1.1cqw] font-bold tracking-wider text-[#2d2c29]">石组立面图 / ISHIGUMI DRAFT</span>
            </div>
            <p className="font-sans text-[0.8cqw] text-[#8e8d88] mt-0.5">
              {isZh ? "三尊石组高度与重心配置" : "Vertical triad stone height & weight balance"}
            </p>
          </div>

          {/* SVG Blueprint of Triad Stones */}
          <div className="flex-1 my-[2cqh] relative flex items-center justify-center z-10">
            <svg viewBox="0 0 300 250" className="w-full h-full overflow-visible">
              {/* Grid lines */}
              <line x1="20" y1="210" x2="280" y2="210" stroke="#e5e4de" strokeWidth="1.5" />
              <line x1="50" y1="30" x2="50" y2="210" stroke="#e5e4de" strokeWidth="0.5" strokeDasharray="2 4" />
              <line x1="150" y1="30" x2="150" y2="210" stroke="#e5e4de" strokeWidth="0.5" strokeDasharray="2 4" />
              <line x1="250" y1="30" x2="250" y2="210" stroke="#e5e4de" strokeWidth="0.5" strokeDasharray="2 4" />

              {/* Stone 1: Heaven (Ten-seki) - Tallest */}
              <path 
                d="M 125 210 Q 115 70 150 50 Q 185 70 175 210 Z" 
                fill={beat >= 1 ? "#5c7a65" : "#8e8d88"} 
                stroke="#3d3c38" 
                strokeWidth="1.5" 
                className="transition-all duration-1000 opacity-80"
              />
              {beat >= 1 && (
                <g className="animate-pulse">
                  <line x1="150" y1="50" x2="195" y2="50" stroke="#4a5d4e" strokeWidth="1" strokeDasharray="2 2" />
                  <text x="200" y="53" fill="#4a5d4e" className="font-serif text-[8px] font-bold">H: 1.618m [天石 / Heaven]</text>
                </g>
              )}

              {/* Stone 2: Humanity (Jin-seki) - Medium Left */}
              <path 
                d="M 45 210 Q 35 120 60 110 Q 85 120 75 210 Z" 
                fill={beat >= 1 ? "#708a78" : "#a1a09b"} 
                stroke="#3d3c38" 
                strokeWidth="1.5" 
                className="transition-all duration-1000 opacity-70"
              />
              {beat >= 1 && (
                <g className="animate-pulse">
                  <line x1="60" y1="110" x2="10" y2="110" stroke="#4a5d4e" strokeWidth="1" strokeDasharray="2 2" />
                  <text x="5" y="103" fill="#4a5d4e" className="font-serif text-[8px] font-bold">H: 1.000m [人石 / Human]</text>
                </g>
              )}

              {/* Stone 3: Earth (Chi-seki) - Smallest Right */}
              <path 
                d="M 225 210 Q 215 150 240 140 Q 265 150 255 210 Z" 
                fill={beat >= 1 ? "#7e9685" : "#b5b4af"} 
                stroke="#3d3c38" 
                strokeWidth="1.5" 
                className="transition-all duration-1000 opacity-75"
              />
              {beat >= 1 && (
                <g className="animate-pulse">
                  <line x1="240" y1="140" x2="285" y2="140" stroke="#4a5d4e" strokeWidth="1" strokeDasharray="2 2" />
                  <text x="245" y="133" fill="#4a5d4e" className="font-serif text-[8px] font-bold">H: 0.618m [地石 / Earth]</text>
                </g>
              )}

              {/* Dynamic balance triangle (Beat >= 2) */}
              {beat >= 2 && (
                <g className="animate-pulse">
                  <polygon points="60,110 150,50 240,140" fill="none" stroke="#4a5d4e" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="150" cy="100" r="4" fill="#4a5d4e" />
                  <text x="150" y="115" fill="#4a5d4e" className="font-serif text-[8px] font-bold" textAnchor="middle">重心平衡点 / Center of Gravity</text>
                </g>
              )}
            </svg>
          </div>

          {/* Footer Copy */}
          <div className="border-t border-[#e5e4de] pt-[1.5cqh] z-10">
            <p className="font-serif text-[0.9cqw] text-[#2d2c29] leading-relaxed text-left">
              {isZh 
                ? "「三尊石组」象征天、地、人三才。高耸的主石与两侧斜出的辅石构成稳定的黄金三角形，在无形中锚定空间的重心。" 
                : "The Triad Stones represent Heaven, Earth, and Humanity. The towering master stone and flanking companion stones form a stable golden triangle."}
            </p>
          </div>
        </div>

        {/* Right Sheet: Raked Sand Waves (Samon) Blueprint (56% width, shorter) */}
        <div 
          className={`w-[54cqw] h-[65cqh] border border-[#e5e4de] bg-white rounded-lg p-[2cqw] flex flex-col justify-between relative shadow-sm transition-all duration-1000 mt-[5cqh] ${
            beat >= 0 ? "opacity-100 translate-y-0" : "opacity-30 translate-y-4"
          }`}
          style={{ transform: "rotate(1deg)" }}
        >
          {/* Paper texture overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e4de_0.5px,transparent_0.5px)] [background-size:16px_12px] opacity-[0.15] pointer-events-none" />

          {/* Header */}
          <div className="border-b border-[#e5e4de] pb-[1.5cqh] z-10">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[0.5cqw]">
                <Wind className="w-[1.6cqw] h-[1.6cqw] text-[#4a5d4e]" />
                <span className="font-serif text-[1.1cqw] font-bold tracking-wider text-[#2d2c29]">砂纹波长图 / SAMON WAVEFORM</span>
              </div>
              <div className="bg-[#eef2ed] border border-[#c8d3cc] px-2 py-0.5 rounded text-[#4a5d4e] font-serif text-[0.75cqw] font-bold">
                {isZh ? "涟漪频率校准" : "WAVE CALIBRATION"}
              </div>
            </div>
            <p className="font-sans text-[0.8cqw] text-[#8e8d88] mt-0.5 text-left">
              {isZh ? "白砂耙制波纹的振幅与周期函数" : "Amplitude and period curves of raked sand waves"}
            </p>
          </div>

          {/* SVG Waveform diagram */}
          <div className="flex-1 my-[1.5cqh] relative flex items-center justify-center z-10">
            <svg viewBox="0 0 500 180" className="w-full h-full overflow-visible">
              {/* Axes */}
              <line x1="30" y1="90" x2="470" y2="90" stroke="#e5e4de" strokeWidth="1.5" />
              <line x1="40" y1="20" x2="40" y2="160" stroke="#e5e4de" strokeWidth="1" />

              {/* Grid lines */}
              <line x1="40" y1="40" x2="470" y2="40" stroke="#f2f1eb" strokeWidth="0.5" />
              <line x1="40" y1="140" x2="470" y2="140" stroke="#f2f1eb" strokeWidth="0.5" />

              {/* Wave 1: Standard sand wave */}
              <path 
                d="M 40 90 Q 90 40 140 90 T 240 90 T 340 90 T 440 90" 
                fill="none" 
                stroke="#a1a09b" 
                strokeWidth="1.5" 
                className="opacity-60"
              />

              {/* Wave 2: Raked wave (Active at beat >= 1) */}
              <path 
                d="M 40 90 Q 90 30 140 90 T 240 90 T 340 90 T 440 90" 
                fill="none" 
                stroke={beat >= 1 ? "#5c7a65" : "#e5e4de"} 
                strokeWidth={beat >= 1 ? "2.5" : "1"} 
                className="transition-all duration-1000"
              />

              {beat >= 1 && (
                <g className="animate-pulse">
                  {/* Amplitude indicator */}
                  <line x1="90" y1="30" x2="90" y2="90" stroke="#4a5d4e" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="90" cy="30" r="3" fill="#4a5d4e" />
                  <text x="100" y="45" fill="#4a5d4e" className="font-serif text-[8px] font-bold">振幅 / Amp: 30mm</text>

                  {/* Wavelength indicator */}
                  <line x1="90" y1="30" x2="290" y2="30" stroke="#4a5d4e" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="290" cy="30" r="3" fill="#4a5d4e" />
                  <text x="190" y="25" fill="#4a5d4e" className="font-serif text-[8px] font-bold" textAnchor="middle">波长 / λ: 200mm</text>
                </g>
              )}

              {/* Wave 3: Fine ripple wave (Active at beat >= 2) */}
              {beat >= 2 && (
                <path 
                  d="M 40 90 Q 65 60 90 90 T 140 90 T 190 90 T 240 90 T 290 90 T 340 90 T 390 90 T 440 90" 
                  fill="none" 
                  stroke="#8f9e8b" 
                  strokeWidth="1.5" 
                  strokeDasharray="2 2"
                  className="animate-flow"
                />
              )}
            </svg>
          </div>

          {/* Footer Copy */}
          <div className="border-t border-[#e5e4de] pt-[1.5cqh] z-10">
            <p className="font-serif text-[0.9cqw] text-[#2d2c29] leading-relaxed text-left">
              {isZh 
                ? "「砂纹」亦称波纹，用特制的木耙在白砂上扫出。直线代表平静的洋面，涟漪代表激荡的波涛。在干涸的砂石中，蕴含着海洋的无限生机。" 
                : "The raked sand ripples, or Samon, are sculpted with custom wooden rakes. Straight lines represent calm seas; ripples represent surging waves."}
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Render Scene 3: Process - Standard 3-Stage Zen Garden Path
  const renderScene3 = () => {
    return (
      <div className="w-full h-full relative flex flex-col justify-between px-[5cqw] py-[4cqh] bg-[#fcfcfa]">
        {/* Header Title Bar */}
        <div className="border-b border-[#e5e4de] pb-[1.5cqh] flex justify-between items-end shrink-0">
          <div className="text-left">
            <h2 className="font-serif text-[1.6cqw] font-black text-[#2d2c29] tracking-tight uppercase flex items-center gap-[0.5cqw]">
              <Layers className="w-[2cqw] h-[2cqw] text-[#4a5d4e]" />
              {isZh ? "禅径三段式：冥想流向" : "3-STAGE ZEN PATH: MEDITATION FLOW"}
            </h2>
            <p className="font-sans text-[0.85cqw] text-[#8e8d88] mt-1">
              {isZh ? "从入径寻幽、中途面壁到豁然开悟的渐进修行过程" : "The progressive journey from entering the path to contemplation and enlightenment"}
            </p>
          </div>
          <div className="flex items-center gap-2 bg-[#eef2ed] border border-[#c8d3cc] px-3 py-1.5 rounded-lg text-[#4a5d4e] font-serif text-[0.75cqw] font-bold">
            <Activity className="w-4 h-4 text-[#4a5d4e] animate-pulse" />
            <span>{isZh ? "意念流向图" : "MEDITATION TRACK"}</span>
          </div>
        </div>

        {/* Path Canvas Area with Winding Path and Cards */}
        <div className="flex-1 w-full relative my-[2cqh]">
          {/* Background SVG Winding Path */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <svg viewBox="0 0 1000 450" className="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
              {/* Winding Path Base */}
              <path 
                d="M 100 220 C 250 200, 300 80, 500 220 C 600 290, 680 380, 850 220" 
                fill="none" 
                stroke="#e5e4de" 
                strokeWidth="12" 
                strokeLinecap="round"
              />

              {/* Segment 1: Entry (Roji) - Active at beat >= 0 */}
              <path 
                d="M 100 220 C 250 200, 300 80, 500 220" 
                fill="none" 
                stroke={beat >= 0 ? "#5c7a65" : "#e5e4de"} 
                strokeWidth="6" 
                strokeLinecap="round"
                className="transition-all duration-1000"
              />

              {/* Segment 2: Contemplation (Muga) - Active at beat >= 1 */}
              <path 
                d="M 490 215 C 590 285, 680 380, 850 220" 
                fill="none" 
                stroke={beat >= 1 ? "#5c7a65" : "#e5e4de"} 
                strokeWidth="6" 
                strokeLinecap="round"
                className="transition-all duration-1000"
              />

              {/* Segment 3: Enlightenment (Satori) - Active at beat >= 2 */}
              {beat >= 2 && (
                <path 
                  d="M 100 220 C 250 200, 300 80, 500 220 C 600 290, 680 380, 850 220" 
                  fill="none" 
                  stroke="#4a5d4e" 
                  strokeWidth="8" 
                  strokeDasharray="10 15"
                  className="animate-flow"
                />
              )}

              {/* Interactive glowing nodes */}
              <circle cx="100" cy="220" r="12" fill="#fcfcfa" stroke="#5c7a65" strokeWidth="3" />
              <circle cx="500" cy="220" r="12" fill="#fcfcfa" stroke={beat >= 1 ? "#5c7a65" : "#e5e4de"} strokeWidth="3" className="transition-all duration-1000" />
              <circle cx="850" cy="220" r="12" fill="#fcfcfa" stroke={beat >= 2 ? "#4a5d4e" : "#e5e4de"} strokeWidth="3" className="transition-all duration-1000" />
            </svg>
          </div>

          {/* Card 1: Entry (Roji) */}
          <div 
            className={`absolute left-[4cqw] top-[4cqh] w-[25cqw] transition-all duration-1000 z-10 ${
              beat >= 0 ? "opacity-100 translate-y-0 scale-100" : "opacity-30 -translate-y-2 scale-95"
            }`}
          >
            <div className={`p-[1.5cqw] rounded-xl border bg-white relative flex flex-col gap-2 text-left ${
              beat === 0 ? "border-[#5c7a65] shadow-[0_4px_20px_rgba(92,122,101,0.15)]" : "border-[#e5e4de]"
            }`}>
              <div className="flex justify-between items-center">
                <span className="font-serif text-[0.8cqw] text-[#5c7a65] font-bold tracking-widest uppercase">STAGE 01 / ROJI</span>
                <span className="w-2 h-2 rounded-full bg-[#5c7a65] animate-ping" />
              </div>
              <h3 className="font-serif text-[1.2cqw] font-bold text-[#2d2c29] mt-1">
                {isZh ? "入径寻幽 (Roji)" : "Entering the Path"}
              </h3>
              <p className="font-sans text-[0.85cqw] text-[#52514c] leading-relaxed">
                {isZh 
                  ? "穿过曲折的露地小径，洗净凡尘俗念。每一步都踏在湿润的飞石上，心境随之沉淀，进入清净无垢的禅境。" 
                  : "Pass through the winding garden path, washing away worldly thoughts. Each step on the stepping stones settles the mind."}
              </p>
              <div className="mt-1 flex gap-2">
                <span className="bg-[#eef2ed] px-2 py-0.5 rounded text-[0.7cqw] font-serif text-[#4a5d4e] font-bold border border-[#c8d3cc]/30">起点 / Entry</span>
                <span className="bg-[#eef2ed] px-2 py-0.5 rounded text-[0.7cqw] font-serif text-[#4a5d4e] font-bold border border-[#c8d3cc]/30">洗心 / Purify</span>
              </div>
            </div>
            <div className="w-[1.5px] h-[4cqh] bg-gradient-to-b from-[#5c7a65] to-transparent mx-auto mt-1" />
          </div>

          {/* Card 2: Contemplation (Muga) */}
          <div 
            className={`absolute left-[37cqw] bottom-[1cqh] w-[25cqw] transition-all duration-1000 z-10 ${
              beat >= 1 ? "opacity-100 translate-y-0 scale-100" : "opacity-30 translate-y-2 scale-95"
            }`}
          >
            <div className="w-[1.5px] h-[4cqh] bg-gradient-to-t from-[#5c7a65] to-transparent mx-auto mb-1" />
            <div className={`p-[1.5cqw] rounded-xl border bg-white relative flex flex-col gap-2 text-left ${
              beat === 1 ? "border-[#5c7a65] shadow-[0_4px_20px_rgba(92,122,101,0.15)]" : "border-[#e5e4de]"
            }`}>
              <div className="flex justify-between items-center">
                <span className="font-serif text-[0.8cqw] text-[#5c7a65] font-bold tracking-widest uppercase">STAGE 02 / MUGA</span>
                <span className={`w-2 h-2 rounded-full ${beat >= 1 ? "bg-[#5c7a65] animate-ping" : "bg-[#8e8d88]"}`} />
              </div>
              <h3 className="font-serif text-[1.2cqw] font-bold text-[#2d2c29] mt-1">
                {isZh ? "中途面壁 (Muga)" : "Silent Contemplation"}
              </h3>
              <p className="font-sans text-[0.85cqw] text-[#52514c] leading-relaxed">
                {isZh 
                  ? "面对枯淡的石组，屏息凝神。在无声的砂纹中，照见内心的波澜，物我两忘，达到无我、无相的冥想深处。" 
                  : "Face the simple stone arrangements in silence. In the quiet sand ripples, reflect on your inner waves, forgetting the self."}
              </p>
              <div className="mt-1 flex gap-2">
                <span className="bg-[#eef2ed] px-2 py-0.5 rounded text-[0.7cqw] font-serif text-[#4a5d4e] font-bold border border-[#c8d3cc]/30">面壁 / Reflect</span>
                <span className="bg-[#eef2ed] px-2 py-0.5 rounded text-[0.7cqw] font-serif text-[#4a5d4e] font-bold border border-[#c8d3cc]/30">无我 / No-Self</span>
              </div>
            </div>
          </div>

          {/* Card 3: Enlightenment (Satori) */}
          <div 
            className={`absolute right-[4cqw] top-[2cqh] w-[25cqw] transition-all duration-1000 z-10 ${
              beat >= 2 ? "opacity-100 translate-y-0 scale-100" : "opacity-30 -translate-y-2 scale-95"
            }`}
          >
            <div className={`p-[1.5cqw] rounded-xl border bg-white relative flex flex-col gap-2 text-left ${
              beat === 2 ? "border-[#4a5d4e] shadow-[0_4px_25px_rgba(74,93,78,0.2)]" : "border-[#e5e4de]"
            }`}>
              <div className="flex justify-between items-center">
                <span className="font-serif text-[0.8cqw] text-[#4a5d4e] font-bold tracking-widest uppercase">STAGE 03 / SATORI</span>
                <span className={`w-2 h-2 rounded-full ${beat >= 2 ? "bg-[#4a5d4e] animate-ping" : "bg-[#8e8d88]"}`} />
              </div>
              <h3 className="font-serif text-[1.2cqw] font-bold text-[#2d2c29] mt-1">
                {isZh ? "豁然开悟 (Satori)" : "Attaining Satori"}
              </h3>
              <p className="font-sans text-[0.85cqw] text-[#52514c] leading-relaxed">
                {isZh 
                  ? "砂石不语，却道尽宇宙玄机。刹那间，心境豁然开朗，如见满月当空。明了「色即是空，空即是色」之真谛。" 
                  : "The silent sand and stone reveal the cosmos. In an instant, the mind opens fully, realizing form is emptiness, emptiness is form."}
              </p>
              <div className="mt-1 flex gap-2">
                <span className="bg-[#eef2ed] px-2 py-0.5 rounded text-[0.7cqw] font-serif text-[#4a5d4e] font-bold border border-[#c8d3cc]/30">开悟 / Satori</span>
                <span className="bg-[#eef2ed] px-2 py-0.5 rounded text-[0.7cqw] font-serif text-[#4a5d4e] font-bold border border-[#c8d3cc]/30">圆满 / Complete</span>
              </div>
            </div>
            <div className="w-[1.5px] h-[4cqh] bg-gradient-to-b from-[#4a5d4e] to-transparent mx-auto mt-1" />
          </div>
        </div>

        {/* Progress Tracker Footer */}
        <div className="border-t border-[#e5e4de] pt-[1cqh] flex justify-between items-center text-[0.8cqw] font-serif text-[#8e8d88] shrink-0">
          <div className="flex items-center gap-[0.5cqw]">
            <Info className="w-[1.2cqw] h-[1.2cqw] text-[#4a5d4e]" />
            <span className="font-sans text-left">
              {isZh 
                ? "三段式禅径描绘了心智从喧嚣走向寂静、最终在极简中获得开悟的完整修行流向。" 
                : "The 3-stage Zen path maps the mental journey from noise to silence, and ultimately to enlightenment in minimalism."}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Render Scene 4: Matrix - Dense Zen Aesthetic Proportions Quadrant
  const renderScene4 = () => {
    return (
      <div className="w-full h-full relative flex flex-col justify-between px-[5cqw] py-[4cqh] bg-[#fcfcfa]">
        {/* Header Title Bar */}
        <div className="border-b border-[#e5e4de] pb-[1.5cqh] flex justify-between items-end shrink-0">
          <div className="text-left">
            <h2 className="font-serif text-[1.6cqw] font-black text-[#2d2c29] tracking-tight uppercase flex items-center gap-[0.5cqw]">
              <Grid className="w-[2cqw] h-[2cqw] text-[#4a5d4e]" />
              {isZh ? "禅意美学比例矩阵" : "ZEN AESTHETICS PROPORTION MATRIX"}
            </h2>
            <p className="font-sans text-[0.85cqw] text-[#8e8d88] mt-1">
              {isZh ? "留白比例、侘寂不完美性、非对称性与重心权衡的四象限解算" : "Four quadrants analyzing Ma ratio, Wabi-Sabi imperfection, asymmetry, and stone weight balances"}
            </p>
          </div>
          <div className="bg-[#eef2ed] border border-[#c8d3cc] px-3 py-1.5 rounded-lg text-[#4a5d4e] font-serif text-[0.75cqw] font-bold">
            {isZh ? "黄金美学验证" : "AESTHETIC VERIFIER"}
          </div>
        </div>

        {/* Asymmetric 2x2 Bento Matrix */}
        <div className="flex-1 w-full grid grid-cols-12 gap-[2.5cqw] my-[2cqh]">
          {/* Q1: Ma (Negative Space) - Active at beat === 0 */}
          <div 
            className={`col-span-7 border rounded-xl p-[1.8cqw] bg-white flex flex-col justify-between relative transition-all duration-700 overflow-hidden text-left ${
              beat === 0 
                ? "border-[#5c7a65] shadow-[0_4px_25px_rgba(92,122,101,0.15)] scale-[1.02] z-10" 
                : "border-[#e5e4de] opacity-40 scale-[0.98]"
            }`}
          >
            <div className="absolute top-2 right-3 font-serif text-[1cqw] text-[#5c7a65]/40 font-bold">Q1 / MA</div>
            
            <div>
              <span className="font-serif text-[0.85cqw] text-[#5c7a65] font-black tracking-widest block uppercase">
                {isZh ? "留白比例 (Ma Ratio)" : "Negative Space Ratio"}
              </span>
              <h3 className="font-serif text-[1.25cqw] font-black text-[#2d2c29] mt-1 leading-none">
                {isZh ? "虚实相生的空间留白" : "Form and Void Interexistence"}
              </h3>
            </div>

            <div className="my-[1.5cqh] py-[1cqh] px-[1.5cqw] bg-[#fcfcfa] border border-[#e5e4de] rounded flex justify-center items-center">
              <span className="font-serif text-[1.25cqw] text-[#2d2c29] font-bold">
                Ma = Void : Solid ≈ 7 : 3
              </span>
            </div>

            <div className="flex justify-between items-end gap-[1.5cqw] font-sans text-[0.8cqw]">
              <p className="text-[#52514c] leading-normal max-w-[28cqw]">
                {isZh 
                  ? "「留白」并非空无一物，而是孕育万物的母体。砂占七分，石居三分，虚实相形，方能给观者以无限想象的呼吸空间。" 
                  : "Ma is not mere emptiness, but the mother of form. 70% sand and 30% stone creates breathing space for imagination."}
              </p>
              <div className="text-right shrink-0 font-serif">
                <span className="text-[#8e8d88] block">Golden Ratio</span>
                <span className="text-[#4a5d4e] font-bold">Φ ≈ 1.618</span>
              </div>
            </div>
          </div>

          {/* Q2: Wabi-Sabi (Imperfection) - Active at beat === 0 */}
          <div 
            className={`col-span-5 border rounded-xl p-[1.8cqw] bg-white flex flex-col justify-between relative transition-all duration-700 overflow-hidden text-left ${
              beat === 0 
                ? "border-[#5c7a65] shadow-[0_4px_25px_rgba(92,122,101,0.15)] scale-[1.02] z-10" 
                : "border-[#e5e4de] opacity-40 scale-[0.98]"
            }`}
          >
            <div className="absolute top-2 right-3 font-serif text-[1cqw] text-[#5c7a65]/40 font-bold">Q2 / SABI</div>

            <div>
              <span className="font-serif text-[0.85cqw] text-[#5c7a65] font-black tracking-widest block uppercase">
                {isZh ? "侘寂不完美性 (Wabi-Sabi)" : "Wabi-Sabi Aesthetics"}
              </span>
              <h3 className="font-serif text-[1.25cqw] font-black text-[#2d2c29] mt-1 leading-none">
                {isZh ? "岁月痕迹与自然残缺" : "Aesthetic of Transience & Decay"}
              </h3>
            </div>

            <div className="my-[1.5cqh] py-[1cqh] px-[1cqw] bg-[#fcfcfa] border border-[#e5e4de] rounded flex justify-center items-center">
              <span className="font-serif text-[1.15cqw] text-[#2d2c29] font-bold">
                Sabi = Rust + Moss + Time
              </span>
            </div>

            <div className="flex justify-between items-center font-sans text-[0.8cqw]">
              <div className="text-[#52514c]">
                {isZh ? "接受事物的不完美、不恒常与不完整。" : "Embrace the imperfect, impermanent, and incomplete."}
              </div>
              <div className="text-right shrink-0 font-serif">
                <span className="text-[#8e8d88] block">Moss Age</span>
                  <span className="text-[#4a5d4e] font-bold">T &gt; 100 Years</span>
              </div>
            </div>
          </div>

          {/* Q3: Asymmetry (Fukinsei) - Active at beat === 1 */}
          <div 
            className={`col-span-5 border rounded-xl p-[1.8cqw] bg-white flex flex-col justify-between relative transition-all duration-700 overflow-hidden text-left ${
              beat === 1 
                ? "border-[#5c7a65] shadow-[0_4px_25px_rgba(92,122,101,0.15)] scale-[1.02] z-10" 
                : "border-[#e5e4de] opacity-40 scale-[0.98]"
            }`}
          >
            <div className="absolute top-2 right-3 font-serif text-[1cqw] text-[#5c7a65]/40 font-bold">Q3 / ASYMMETRY</div>

            <div>
              <span className="font-serif text-[0.85cqw] text-[#5c7a65] font-black tracking-widest block uppercase">
                {isZh ? "非对称性 (Fukinsei)" : "Asymmetry & Irregularity"}
              </span>
              <h3 className="font-serif text-[1.25cqw] font-black text-[#2d2c29] mt-1 leading-none">
                {isZh ? "打破均势的动感平衡" : "Dynamic Balance of Irregularity"}
              </h3>
            </div>

            <div className="my-[1.5cqh] py-[1cqh] px-[1cqw] bg-[#fcfcfa] border border-[#e5e4de] rounded flex justify-center items-center">
              <span className="font-serif text-[1.05cqw] text-[#2d2c29] font-bold">
                Fukinsei = Asymmetric Triad
              </span>
            </div>

            <div className="flex justify-between items-center font-sans text-[0.8cqw]">
              <div className="text-[#52514c]">
                {isZh ? "避开绝对对称，通过奇数石组创造流动感。" : "Avoid absolute symmetry; use odd numbers of stones."}
              </div>
              <div className="text-right shrink-0 font-serif">
                <span className="text-[#8e8d88] block">Odd Nodes</span>
                <span className="text-[#4a5d4e] font-bold">N = 3, 5, 7</span>
              </div>
            </div>
          </div>

          {/* Q4: Stone Weight Balance (Shizen) - Active at beat === 2 */}
          <div 
            className={`col-span-7 border rounded-xl p-[1.8cqw] bg-white flex flex-col justify-between relative transition-all duration-700 overflow-hidden text-left ${
              beat === 2 
                ? "border-[#4a5d4e] shadow-[0_4px_25px_rgba(74,93,78,0.2)] scale-[1.02] z-10" 
                : "border-[#e5e4de] opacity-40 scale-[0.98]"
            }`}
          >
            <div className="absolute top-2 right-3 font-serif text-[1cqw] text-[#4a5d4e]/40 font-bold">Q4 / SHIZEN</div>

            <div>
              <span className="font-serif text-[0.85cqw] text-[#4a5d4e] font-black tracking-widest block uppercase">
                {isZh ? "重心权衡 (Shizen)" : "Natural Gravity Balance"}
              </span>
              <h3 className="font-serif text-[1.25cqw] font-black text-[#2d2c29] mt-1 leading-none">
                {isZh ? "虽由人作，宛自天开" : "Man-made yet Heaven-born"}
              </h3>
            </div>

            <div className="my-[1.5cqh] py-[1cqh] px-[1.5cqw] bg-[#fcfcfa] border border-[#e5e4de] rounded flex justify-center items-center">
              <span className="font-serif text-[1.05cqw] text-[#2d2c29] font-bold">
                Balance = ∑(Stone_i × Distance_i) = Stable
              </span>
            </div>

            <div className="flex justify-between items-end gap-[1.5cqw] font-sans text-[0.8cqw]">
              <p className="text-[#52514c] leading-normal max-w-[28cqw]">
                {isZh 
                  ? "石组的摆放必须遵从其自然的重力感。卧石、立石、斜石相互呼应，在非对称的网格中达成一种微妙而永恒的重力平衡。" 
                  : "Stones must be placed according to their natural gravity. Reclining, standing, and slanting stones echo each other."}
              </p>
              <div className="text-right shrink-0 font-serif">
                <span className="text-[#8e8d88] block">Gravity Coeff</span>
                <span className="text-[#4a5d4e] font-bold">G_bal = 1.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Tracker Footer */}
        <div className="border-t border-[#e5e4de] pt-[1cqh] flex justify-between items-center text-[0.8cqw] font-serif text-[#8e8d88] shrink-0">
          <div className="flex items-center gap-[0.5cqw]">
            <Info className="w-[1.2cqw] h-[1.2cqw] text-[#4a5d4e]" />
            <span className="font-sans text-left">
              {isZh 
                ? "利用留白比例与自然重力公式，验证枯山水美学。当各项参数和谐统一时，空间将呈现出极致的宁静与平衡。" 
                : "Validates Karesansui aesthetics using Ma ratio and natural gravity formulas. Harmony brings ultimate peace."}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Render Scene 5: Ledger - Extreme Kyoto Abbot Garden Tally
  const renderScene5 = () => {
    return (
      <div className="w-full h-full relative flex flex-col justify-between px-[5cqw] py-[4cqh] bg-[#fcfcfa]">
        {/* Header Title Bar */}
        <div className="border-b border-[#e5e4de] pb-[1.5cqh] flex justify-between items-end shrink-0">
          <div className="flex items-center gap-3">
            <Database className="w-[2cqw] h-[2cqw] text-[#4a5d4e]" />
            <div className="text-left">
              <h2 className="font-serif text-[1.6cqw] font-black text-[#2d2c29] tracking-tight uppercase">
                {isZh ? "京都住持庭园资材总账" : "KYOTO ABBOT GARDEN TALLY"}
              </h2>
              <p className="font-sans text-[0.85cqw] text-[#8e8d88] mt-1">
                {isZh ? "龙安寺庭园石组规格、苔藓覆盖率与砂纹耙制频率联合核算账目" : "Comprehensive ledger of Ryōan-ji garden stones, moss coverage, and sand raking logs"}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end font-serif text-[0.75cqw] text-[#8e8d88] text-right shrink-0">
            <p><strong>{isZh ? "庭园编码：" : "GARDEN_ID: "}</strong>RYOANJI-K-1488</p>
            <p><strong>{isZh ? "保密级别：" : "CLASS: "}</strong>TEMPLE-CONFIDENTIAL</p>
          </div>
        </div>

        {/* Main 3-Column Telemetry Board */}
        <div className="flex-1 w-full grid grid-cols-12 gap-[2.5cqw] my-[2cqh] overflow-hidden">
          {/* Left Column: Dense Garden Materials Table (Col 1-5) */}
          <div className="col-span-5 flex flex-col justify-between border-r border-[#e5e4de] pr-[1.5cqw] overflow-hidden shrink-0 text-left">
            <div className="flex-1 flex flex-col gap-[1.2cqh] font-serif text-[0.8cqw] text-[#2d2c29]">
              <span className="text-[#4a5d4e] font-bold text-[0.9cqw] border-b border-[#e5e4de] pb-1 mb-1 block">
                {isZh ? "【庭园资材规格明细】" : "【GARDEN MATERIALS SPECIFICATIONS】"}
              </span>
              
              {/* Table of stones */}
              <div className="flex flex-col gap-1 font-sans text-[0.75cqw]">
                <div className="grid grid-cols-12 font-serif font-bold text-[#4a5d4e] border-b border-[#e5e4de] pb-1">
                  <span className="col-span-4">{isZh ? "资材名称" : "Material"}</span>
                  <span className="col-span-3 text-right">{isZh ? "重量" : "Weight"}</span>
                  <span className="col-span-5 text-right">{isZh ? "寓意" : "Meaning"}</span>
                </div>
                <div className="grid grid-cols-12 py-1 border-b border-[#e5e4de]/40">
                  <span className="col-span-4 font-serif font-bold">天石 / Heaven</span>
                  <span className="col-span-3 text-right text-[#52514c]">1,280 kg</span>
                  <span className="col-span-5 text-right text-[#8e8d88] truncate">{isZh ? "崇高、主宰、精神" : "Sublime, Ruler"}</span>
                </div>
                <div className="grid grid-cols-12 py-1 border-b border-[#e5e4de]/40">
                  <span className="col-span-4 font-serif font-bold">人石 / Human</span>
                  <span className="col-span-3 text-right text-[#52514c]">850 kg</span>
                  <span className="col-span-5 text-right text-[#8e8d88] truncate">{isZh ? "平衡、连接、情感" : "Balance, Connection"}</span>
                </div>
                <div className="grid grid-cols-12 py-1 border-b border-[#e5e4de]/40">
                  <span className="col-span-4 font-serif font-bold">地石 / Earth</span>
                  <span className="col-span-3 text-right text-[#52514c]">520 kg</span>
                  <span className="col-span-5 text-right text-[#8e8d88] truncate">{isZh ? "敦厚、承载、物质" : "Generous, Material"}</span>
                </div>
                <div className="grid grid-cols-12 py-1 border-b border-[#e5e4de]/40">
                  <span className="col-span-4 font-serif font-bold">京都白川砂 / Sand</span>
                  <span className="col-span-3 text-right text-[#52514c]">15,000 kg</span>
                  <span className="col-span-5 text-right text-[#8e8d88] truncate">{isZh ? "海洋、虚空、无限" : "Ocean, Boundless"}</span>
                </div>
              </div>

              {/* Moss Coverage Progress */}
              <div className="bg-[#fcfcfa] p-[1cqw] rounded border border-[#e5e4de] flex flex-col gap-1 mt-1 font-sans">
                <div className="flex justify-between text-[0.8cqw]">
                  <span className="text-[#8e8d88]">{isZh ? "苔藓总覆盖率" : "MOSS COVERAGE"}</span>
                  <span className="text-[#4a5d4e] font-bold">42.8% (Polytrichum)</span>
                </div>
                <div className="w-full bg-[#e5e4de] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#5c7a65] h-full rounded-full transition-all duration-1000" style={{ width: "42.8%" }} />
                </div>
              </div>
            </div>

            {/* Abbot Signature Line */}
            <div className="border-t border-[#e5e4de] pt-[1.5cqh] mt-[1.5cqh] flex justify-between items-end font-serif text-[0.75cqw]">
              <div>
                <span className="text-[#8e8d88] block uppercase">{isZh ? "住持签字" : "ABBOT SIGN"}</span>
                <span className="font-serif italic text-[#2d2c29] font-bold block text-[1.1cqw] mt-1">Sōami (相阿弥)</span>
              </div>
              <div className="text-right text-[#8e8d88] font-sans">
                <span>{isZh ? "历时: 宽正二年至今" : "SINCE: 1461 AD"}</span>
              </div>
            </div>
          </div>

          {/* Center Column: Live Raking Logs (Col 6-9) */}
          <div className="col-span-4 flex flex-col justify-between border-r border-[#e5e4de] pr-[1.5cqw] overflow-hidden shrink-0 text-left">
            <div className="font-serif text-[0.75cqw] text-[#2d2c29] bg-white rounded-lg border border-[#e5e4de] p-[1.5cqw] h-[52cqh] overflow-hidden flex flex-col gap-[0.8cqh]">
              <div className="text-[#8e8d88] text-[0.7cqw] border-b border-[#e5e4de] pb-1 mb-1 flex justify-between shrink-0 font-sans">
                <span>{isZh ? "【每日耙砂与维护日志】" : "【DAILY RAKING & MAINTENANCE LOGS】"}</span>
                <span className="animate-pulse text-[#4a5d4e] font-bold">● ACTIVE</span>
              </div>
              
              <div className="flex-1 flex flex-col gap-[0.5cqh] overflow-y-auto font-sans text-[0.72cqw] text-[#52514c] leading-relaxed">
                <div>[05:00] [扫除] 清晨落叶清扫完成，无杂物。</div>
                <div>[05:30] [洒水] 苔藓区温润洒水，保持湿度 85%。</div>
                <div>[06:00] [耙砂] 白川砂波纹重新耙制，采用涟漪纹。</div>
                
                {beat >= 1 ? (
                  <>
                    <div className="text-[#4a5d4e] font-bold">[09:00] [核算] 三尊石组重心偏移度检测：0.00mm。</div>
                    <div className="text-[#4a5d4e] font-bold">[10:30] [苔藓] 发现新植 Polytrichum 孢子萌发。</div>
                    <div className="text-[#5c7a65] font-bold">[13:00] [砂纹] 耙制深度达到标准 35mm，反光率极佳。</div>
                  </>
                ) : (
                  <div className="text-[#8e8d88] italic mt-2 animate-pulse font-serif">
                    {isZh ? "【等待激活中途维护核算...】" : "【Waiting for mid-day maintenance audit...】"}
                  </div>
                )}

                {beat >= 2 ? (
                  <>
                    <div className="text-[#4a5d4e] font-bold">[16:00] [盖印] 庭园美学比例核算无误，符合 7:3 留白。</div>
                    <div className="text-[#4a5d4e] font-bold">[17:00] [闭园] 晚钟敲响，庭园进入静谧冥想状态。</div>
                    <div className="text-[#4a5d4e] font-bold">[CERT] 龙安寺禅意空间美学证书已锁定。</div>
                  </>
                ) : beat >= 1 ? (
                  <div className="text-[#8e8d88] italic mt-2 animate-pulse font-serif">
                    {isZh ? "【等待加盖朱砂印章...】" : "【Waiting for vermilion seal stamp...】"}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-auto border-t border-[#e5e4de] pt-[1.5cqh] flex items-center gap-2 text-[0.8cqw] font-serif text-[#8e8d88]">
              <Feather className="w-3.5 h-3.5 text-[#4a5d4e] shrink-0" />
              <span className="truncate font-sans">
                {isZh ? "账目日志与庭园微观生态实时同步" : "Ledger logs sync with garden micro-ecology"}
              </span>
            </div>
          </div>

          {/* Right Column: Moss Coverage Chart & Vermilion Seal (Col 10-12) */}
          <div className="col-span-3 flex flex-col justify-between pl-[1cqw] relative shrink-0 text-left">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-[0.9cqw] text-[#4a5d4e] font-bold flex items-center gap-1.5 border-b border-[#e5e4de] pb-1.5 mb-2">
                  <Calendar className="w-4 h-4 text-[#4a5d4e]" />
                  {isZh ? "苔藓覆盖率历史趋势" : "MOSS GROWTH TREND"}
                </h4>
                <p className="font-sans text-[0.75cqw] text-[#8e8d88]">
                  {isZh ? "近三个世纪苔藓覆盖比例变化 (1700-2000)" : "Moss coverage ratio over three centuries"}
                </p>
              </div>

              {/* SVG Growth Chart */}
              <div className="h-[22cqh] border border-[#e5e4de] bg-white rounded p-[1cqw] relative flex flex-col justify-between my-[1.5cqh]">
                <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
                  <line x1="20" y1="10" x2="190" y2="10" stroke="#f2f1eb" strokeWidth="0.5" strokeDasharray="1 3" />
                  <line x1="20" y1="50" x2="190" y2="50" stroke="#f2f1eb" strokeWidth="0.5" strokeDasharray="1 3" />
                  <line x1="20" y1="90" x2="190" y2="90" stroke="#f2f1eb" strokeWidth="0.5" strokeDasharray="1 3" />
                  
                  <text x="5" y="13" fill="#8e8d88" className="font-sans text-[6px] opacity-60">100%</text>
                  <text x="5" y="93" fill="#8e8d88" className="font-sans text-[6px] opacity-60">0%</text>

                  <text x="25" y="98" fill="#8e8d88" className="font-sans text-[6px] opacity-60">1700</text>
                  <text x="105" y="98" fill="#8e8d88" className="font-sans text-[6px] opacity-60">1850</text>
                  <text x="185" y="98" fill="#8e8d88" className="font-sans text-[6px] opacity-60">2000</text>

                  {/* Growth Curves */}
                  <path 
                    d="M 20 85 Q 60 75 100 65 T 190 57" 
                    fill="none" 
                    stroke="#c8d3cc" 
                    strokeWidth="1.5" 
                    className="opacity-60" 
                  />

                  {beat >= 1 && (
                    <path 
                      d="M 20 85 Q 60 70 100 55 T 190 43" 
                      fill="none" 
                      stroke="#8f9e8b" 
                      strokeWidth="2" 
                      className="transition-all duration-1000"
                    />
                  )}

                  {beat >= 2 && (
                    <path 
                      d="M 20 85 Q 60 65 100 45 T 190 35" 
                      fill="none" 
                      stroke="#5c7a65" 
                      strokeWidth="2.5" 
                      className="transition-all duration-1000"
                    />
                  )}

                  {beat >= 2 && <circle cx="190" cy="35" r="3" fill="#4a5d4e" className="animate-ping" />}
                </svg>
              </div>

              <p className="font-sans text-[0.75cqw] leading-relaxed text-[#52514c]">
                {isZh 
                  ? "覆盖率稳步上升，得益于京都盆地温润的微气候与僧侣们每日细致的洒水养护。" 
                  : "Steady growth is sustained by Kyoto's humid microclimate and the monks' meticulous daily watering."}
              </p>
            </div>

            {/* Sovereign Red Wax Vermilion Seal */}
            <div className="h-[14cqh] flex items-end justify-end mt-[1cqh]">
              {beat >= 2 ? (
                <div 
                  key="vermilion-seal" 
                  className="w-[11cqw] h-[12cqw] border-[3px] border-double border-[#b93a3a] rounded-sm flex flex-col items-center justify-center p-[0.4cqw] text-center text-[#b93a3a] font-serif font-black rotate-[-8deg] shadow-md bg-white z-20"
                  style={{ 
                    boxShadow: "0 0 0 4px white, 0 8px 24px -4px rgba(185, 58, 58, 0.4)",
                    backgroundImage: "radial-gradient(circle, rgba(185, 58, 58, 0.05) 10%, transparent 10%)",
                    backgroundSize: "5px 5px"
                  }}
                >
                  <span className="text-[0.6cqw] tracking-wider font-sans font-bold leading-none">京都 · 龍安寺</span>
                  <span className="text-[1.1cqw] my-[0.2cqh] tracking-widest border-y border-[#b93a3a] py-[0.1cqh] font-bold">
                    {isZh ? "禅意印信" : "ZEN SEAL"}
                  </span>
                  <span className="text-[0.55cqw] font-sans font-bold tracking-tighter leading-none">
                    {isZh ? "住持庭园印" : "ABBOT APPROVED"}
                  </span>
                </div>
              ) : (
                <div className="w-[11cqw] h-[11cqw] border border-dashed border-[#e5e4de] rounded-sm flex items-center justify-center text-center text-[#8e8d88] font-serif text-[0.8cqw] italic">
                  {isZh ? "未加盖朱印" : "SEAL UNSTAMPED"}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Progress Tracker Footer */}
        <div className="border-t border-[#e5e4de] pt-[1cqh] flex justify-between items-center text-[0.8cqw] font-serif text-[#8e8d88] shrink-0">
          <div className="flex items-center gap-[0.5cqw]">
            <Info className="w-[1.2cqw] h-[1.2cqw] text-[#4a5d4e]" />
            <span className="font-sans text-left">
              {isZh 
                ? "庭园资材总账核算就绪。住持相阿弥对石组、白砂与苔藓进行了联合签字；当美学比例达成且日志闭环时，自动加盖朱砂印章。" 
                : "Garden tally completed. Abbot Sōami co-signed the ledger; approved seal is stamped upon aesthetic validation."}
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
    <div className="w-full h-full bg-[#fcfcfa] text-[#2d2c29] relative overflow-hidden font-sans p-[3cqw] flex flex-col select-none">
      {/* Self-contained style block for Google Fonts and Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700;900&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
        
        .font-serif {
          font-family: 'Noto Serif JP', 'Playfair Display', 'Noto Serif CJK SC', 'Songti SC', serif;
        }
        
        .font-sans {
          font-family: 'Noto Sans JP', 'Inter', 'Noto Sans CJK SC', 'PingFang SC', sans-serif;
        }
        
        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(92, 122, 101, 0.3)); }
          50% { filter: drop-shadow(0 0 15px rgba(92, 122, 101, 0.6)); }
        }
        
        @keyframes ripple-g {
          0% { transform: scale(1); opacity: 1; stroke-width: 1.5px; }
          100% { transform: scale(2.5); opacity: 0; stroke-width: 0.5px; }
        }
        
        @keyframes flow-dash {
          to { stroke-dashoffset: -25; }
        }
        
        @keyframes zen-ripple-1 {
          0% { transform: scale(0.6); opacity: 0.85; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        
        @keyframes zen-ripple-2 {
          0% { transform: scale(0.4); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        
        @keyframes zen-moss-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        
        .animate-ripple-g {
          animation: ripple-g 1.5s cubic-bezier(0.16, 1, 0.3, 1) infinite;
          transform-origin: center;
        }
        
        .animate-flow {
          animation: flow-dash 1.5s linear infinite;
        }
        
        .animate-zen-ripple-1 {
          animation: zen-ripple-1 4.5s cubic-bezier(0.25, 1, 0.5, 1) infinite;
          transform-origin: center;
        }
        
        .animate-zen-ripple-2 {
          animation: zen-ripple-2 4.5s cubic-bezier(0.25, 1, 0.5, 1) infinite;
          animation-delay: 2.25s;
          transform-origin: center;
        }
        
        .animate-zen-moss-pulse {
          animation: zen-moss-pulse 4.5s ease-in-out infinite;
        }
      `}</style>

      {/* Main active scene view using Magic Move & Focal Zoom (Static background with fading overlays) */}
      <div className="flex-1 w-full relative overflow-hidden">
        {/* Static Background White Paper Texture & Moss lines */}
        <div className="absolute inset-0 bg-[#fcfcfa] pointer-events-none z-0">
          {/* Subtle grid or paper lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e4de_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.25]" />
          
          {/* Static moss-green border lines around the entire slide */}
          <div className="absolute inset-[1.5cqw] border border-[#e5e4de] rounded-lg" />
          <div className="absolute inset-[1.8cqw] border border-[#e5e4de]/40 rounded-lg" />
          
          {/* Moss-green corner accents */}
          <div className="absolute top-[1.5cqw] left-[1.5cqw] w-[3cqw] h-[3cqw] border-t-2 border-l-2 border-[#5c7a65]/40 rounded-tl-md" />
          <div className="absolute top-[1.5cqw] right-[1.5cqw] w-[3cqw] h-[3cqw] border-t-2 border-r-2 border-[#5c7a65]/40 rounded-tr-md" />
          <div className="absolute bottom-[1.5cqw] left-[1.5cqw] w-[3cqw] h-[3cqw] border-b-2 border-l-2 border-[#5c7a65]/40 rounded-bl-md" />
          <div className="absolute bottom-[1.5cqw] right-[1.5cqw] w-[3cqw] h-[3cqw] border-b-2 border-r-2 border-[#5c7a65]/40 rounded-br-md" />
        </div>

        {/* Scene Overlays with Fading & Scaling Transition */}
        <div className="w-full h-full relative z-10">
          <div className={`absolute inset-0 transition-all duration-1000 ease-out ${scene === 1 ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
            {renderScene1()}
          </div>
          <div className={`absolute inset-0 transition-all duration-1000 ease-out ${scene === 2 ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
            {renderScene2()}
          </div>
          <div className={`absolute inset-0 transition-all duration-1000 ease-out ${scene === 3 ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
            {renderScene3()}
          </div>
          <div className={`absolute inset-0 transition-all duration-1000 ease-out ${scene === 4 ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
            {renderScene4()}
          </div>
          <div className={`absolute inset-0 transition-all duration-1000 ease-out ${scene === 5 ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
            {renderScene5()}
          </div>
        </div>
      </div>

      {/* Top-Right Zen Moss Accents Navigation */}
      {renderNavigation()}
    </div>
  );
}
