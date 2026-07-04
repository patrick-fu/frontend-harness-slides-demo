import React, { useState, useEffect, useRef } from "react";
import { 
  Terminal, Compass, Shield, Activity, Database, Scale, Info, Sparkles, Layers 
} from "lucide-react";

export const getMetadata = (lang) => {
  const isZh = lang === "zh";
  return {
    id: "14",
    tier: "S",
    density: "high",
    name: isZh ? "美索不达米亚楔形文字演化" : "Sumerian Cuneiform Evolution",
    theme: isZh ? "文字起源与符号演变" : "Origins of Cuneiform Script",
    densityLabel: isZh ? "楔痕段切分" : "Cuneiform Segment Tokenizer",
    colors: { bg: "bg-[#f4ebe1]", ink: "text-[#4e3629]", panel: "border-[#4e3629]/15", accent: "text-[#bf8040]" },
    typography: { header: "font-serif", body: "font-sans" },
    scenes: [
      {
        id: 1,
        name: isZh ? "泥板象形开端" : "Clay Pictograph Premise",
        beats: [
          { action: isZh ? "激活大麦原始象形" : "Activate Archaic Barley" },
          { action: isZh ? "模拟泥板断裂纹理" : "Simulate Tablet Cracks" },
          { action: isZh ? "触发粘土光影渲染" : "Trigger Clay Shading" }
        ]
      },
      {
        id: 2,
        name: isZh ? "象形与楔形互校" : "Pictograph vs Wedge",
        beats: [
          { action: isZh ? "载入牛头象形母本" : "Load Bull Head Pictograph" },
          { action: isZh ? "顺时针左旋九十度" : "90-Deg Rotate & Stretch" },
          { action: isZh ? "芦苇笔尖三角形按压" : "Press Reed Stylus Wedge" }
        ]
      },
      {
        id: 3,
        name: isZh ? "文字三阶演化" : "Three-Stage Evolution",
        beats: [
          { action: isZh ? "高亮乌鲁克写实期" : "Highlight Archaic Uruk" },
          { action: isZh ? "过渡苏美尔抽象期" : "Transition Sumerian Linear" },
          { action: isZh ? "锁定经典亚述帝国期" : "Lock Assyrian Cuneiform" }
        ]
      },
      {
        id: 4,
        name: isZh ? "帝国泥板档案馆" : "Cuneiform Archive Matrix",
        beats: [
          { action: isZh ? "解算粮食与绵羊账目" : "Solve Grain & Sheep Ledgers" },
          { action: isZh ? "核对啤酒与土地让渡" : "Audit Beer & Land Transactions" },
          { action: isZh ? "汇总神庙配给总账" : "Compile Temple Manifests" }
        ]
      },
      {
        id: 5,
        name: isZh ? "王室契约决账" : "Administrative Ledger",
        beats: [
          { action: isZh ? "汇总大麦运输总账" : "Sum Barley Shipments" },
          { action: isZh ? "核验帝国赋税收条" : "Verify Tax Receipts" },
          { action: isZh ? "加盖乌尔第三王朝滚筒印章" : "Stamp Ur III Cylinder Seal" }
        ]
      }
    ]
  };
};

export default function Style14({ scene, beat, language, onNavigate, isThumbnail }) {
  const isZh = language === "zh";
  const [isGlitching, setIsGlitching] = useState(false);
  const prevSceneRef = useRef(scene);

  useEffect(() => {
    if (prevSceneRef.current !== scene) {
      setIsGlitching(true);
      prevSceneRef.current = scene;
      const timer = setTimeout(() => {
        setIsGlitching(false);
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [scene]);

  // Scene 1: Premise - Ultralight Title Cover
  const renderScene1 = () => {
    return (
      <div className="w-full h-full relative flex items-center justify-between pl-[13cqw] pr-[2cqw] py-[4cqh] bg-[#f4ebe1] text-[#4e3629] overflow-hidden select-none">
        {/* Left Side: Gorgeous massive Clay Tablet Fragment SVG */}
        <div className="w-[36cqw] h-[82cqh] flex items-center justify-center relative z-10">
          <svg viewBox="0 0 500 500" className="w-[32cqw] h-[32cqw] filter drop-shadow-[0_15px_30px_rgba(78,54,41,0.22)]">
            <defs>
              <filter id="clay-bevel" x="-10%" y="-10%" width="130%" height="130%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feSpecularLighting in="blur" specularExponent="25" lightingColor="#fff" surfaceScale="5" result="spec">
                  <feDistantLight azimuth="45" elevation="60" />
                </feSpecularLighting>
                <feComposite in="SourceGraphic" in2="spec" operator="arithmetic" k2="1" k3="0.4" result="lit" />
                <feMerge>
                  <feMergeNode in="lit" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Depth under-layer shadow */}
            <path 
              d="M 60 45 Q 255 25 435 65 Q 475 255 425 435 Q 255 465 80 425 Q 40 255 60 45 Z" 
              fill="#2d1c12" 
              className="opacity-20"
              transform="translate(10, 16)"
            />

            {/* Main clay body */}
            <path 
              d="M 60 45 Q 255 25 435 65 Q 475 255 425 435 Q 255 465 80 425 Q 40 255 60 45 Z" 
              fill="#ebdcd0" 
              stroke="#b8a294" 
              strokeWidth="3.5" 
              filter="url(#clay-bevel)"
              className="transition-all duration-1000"
            />

            {/* Inset highlight circle to represent archaeological seal mark */}
            <circle cx="120" cy="110" r="30" fill="none" stroke="#bca99a" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.6" />
            <text x="120" y="114" className="font-serif text-[11px] fill-[#4e3629]/50" textAnchor="middle">BC 3200</text>

            {/* Early Barley Pictograph (ŠE) */}
            <g 
              stroke="#4e3629" 
              strokeWidth="4.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none"
              className="transition-all duration-1000"
              style={{
                opacity: beat >= 0 ? 1 : 0.2,
                transform: beat >= 2 ? "translate(5px, -5px)" : "none"
              }}
            >
              {/* Barley Stalk Center */}
              <path d="M 250 380 Q 240 230 255 120" />
              
              {/* Grains Right Side */}
              <path d="M 253 280 Q 295 240 250 210" strokeWidth="3.5" />
              <path d="M 251 210 Q 295 170 252 140" strokeWidth="3.5" />
              <path d="M 255 140 Q 285 110 254 90" strokeWidth="3.5" />

              {/* Grains Left Side */}
              <path d="M 247 310 Q 200 270 248 240" strokeWidth="3.5" />
              <path d="M 249 240 Q 200 200 249 170" strokeWidth="3.5" />
              <path d="M 252 170 Q 210 135 251 115" strokeWidth="3.5" />
            </g>

            {/* Simulated clay cracks (Beat 1: Simulates dried tablet fractures) */}
            {beat >= 1 && (
              <g stroke="#3a251b" strokeWidth="2" strokeLinecap="round" opacity="0.65" className="animate-crack-draw">
                {/* Crack 1 */}
                <path d="M 50 160 L 120 180 L 160 165 L 210 195 L 235 180" fill="none" />
                {/* Crack 2 */}
                <path d="M 440 330 L 370 310 L 330 335 L 270 315" fill="none" />
                {/* Fine spider-web branches */}
                <path d="M 120 180 L 115 220 L 95 240" fill="none" strokeWidth="1" opacity="0.5" />
                <path d="M 330 335 L 340 380" fill="none" strokeWidth="1" opacity="0.5" />
              </g>
            )}

            {/* Stylus pressure highlights/indents (Beat 2: Transition from line to wedge) */}
            {beat >= 2 && (
              <g fill="#4e3629" className="animate-pulse">
                {/* Accent glowing wedge highlights around the barley stalk */}
                <polygon points="280,240 295,248 285,260" opacity="0.9" />
                <polygon points="220,240 205,248 215,260" opacity="0.9" />
                <polygon points="280,170 295,178 285,190" opacity="0.9" />
                {/* Subtext marker overlay */}
                <rect x="180" y="405" width="140" height="25" rx="6" fill="#3a251b" opacity="0.1" />
                <text x="250" y="421" className="font-sans text-[10px] fill-[#4e3629] font-bold" textAnchor="middle">PRESSED PROTO-CUNEIFORM</text>
              </g>
            )}
          </svg>
        </div>

        {/* Right Side: Large minimalist Title Card with High Negative Space */}
        <div className="w-[42cqw] h-[82cqh] flex flex-col justify-center items-start text-left pl-[2cqw] z-10">
          <div className="border-l-4 border-[#4e3629] pl-[1.5cqw]">
            <span className="font-sans text-[1.1cqw] tracking-[0.3cqw] uppercase font-black opacity-60 block mb-[1cqh]">
              {isZh ? "美索不达米亚文明 · 泥板源流" : "MESOPOTAMIAN CLAY TABLET ORIGINS"}
            </span>
            <h1 className="text-[3.6cqw] font-serif font-black leading-[1.1] tracking-tight">
              {isZh ? "美索不达米亚" : "SUMERIAN CUNEIFORM"} <br />
              <span className="text-[#806355]">{isZh ? "楔形文字演化史" : "EVOLUTIONARY TELEMETRY"}</span>
            </h1>
          </div>

          <p className="text-[1.15cqw] leading-[1.65] font-sans mt-[4cqh] opacity-85 text-[#5e4438] max-w-[40cqw]">
            {isZh 
              ? "在美索不达米亚温润的湿黏土上，芦苇笔的钝尖轻轻压下，将自然的弧线筛分为绝对规则的三角形楔痕。这不仅是人类文字走向几何抽象的开端，更是一场由材料、重力与书写效率共同编排的文明质变。" 
              : "Upon the wet clay tablets of ancient Sumer, the blunt bevel of a reed stylus pressed down, dismantling natural curves into geometric wedges. This represents the origin of abstract writing—a profound material transition governed by silt clay physics, hand pressure, and bureaucratic speed."}
          </p>

          {/* Inline Bilingual Mission Thesis Quote */}
          <div className="mt-[4cqh] border-t border-[#4e3629]/15 pt-[2.5cqh] flex items-center gap-[1cqw] w-full">
            <div className="w-[1.2cqw] h-[1.2cqw] rounded-full bg-[#806355] animate-ping shrink-0" />
            <div className="font-sans text-[0.9cqw] italic opacity-75 text-[#806355]">
              {isZh 
                ? "“泥板是时间的镜子，保留了芦苇笔尖斜压瞬间的重力阻尼。”" 
                : "“The clay tablet behaves as a mirror of time, holding the gravity constants of the stylus press.”"}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Scene 2: Dual - Light Asymmetrical Comparison (Organic Pictograph vs Rotated Wedge)
  const renderScene2 = () => {
    return (
      <div className="w-full h-full relative flex items-center justify-between pl-[13cqw] pr-[2cqw] py-[4cqh] bg-[#f4ebe1] text-[#4e3629] overflow-hidden select-none">
        
        {/* Left Card: Archaic Pictographic Outline of Ox (24% width, tilted -3deg) */}
        <div 
          className={`w-[24cqw] h-[78cqh] bg-[#ebdcd0] border-2 rounded-2xl p-[2cqw] flex flex-col justify-between relative transition-all duration-700 shadow-md ${
            beat === 0 ? "border-[#4e3629] scale-[1.02] shadow-xl z-20" : "border-[#4e3629]/15 opacity-55 scale-[0.98] z-10"
          }`}
          style={{ transform: "rotate(-3.5deg)" }}
        >
          {/* Depth label overlay */}
          <div className="absolute top-3 left-4 font-sans text-[0.8cqw] opacity-40 font-bold">PROTO-SUMERIAN / 3200 BC</div>
          
          <div>
            <h3 className="font-serif text-[1.4cqw] font-black tracking-tight mt-[1.5cqh]">
              {isZh ? "早期象形大宗" : "Archaic Pictograph"}
            </h3>
            <p className="font-sans text-[0.9cqw] opacity-75 mt-1 leading-normal">
              {isZh ? "直观的牛头画线，线条弯曲写实，极度消耗刻写工时。" : "Naturalistic curves tracing a bull's head. Highly inefficient for scribe bookkeeping."}
            </p>
          </div>

          {/* SVG of Ox Head (GUD) curvilinear pictograph */}
          <div className="flex-1 my-[2cqh] flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-[85%] h-[85%] fill-none stroke-[#4e3629]" strokeWidth="3" strokeLinecap="round">
              {/* Bull face organic contour */}
              <path d="M 100 55 C 100 35, 145 35, 145 55 C 145 75, 118 95, 118 115 C 118 95, 90 75, 90 55 Z" />
              {/* Left organic horn */}
              <path d="M 100 45 Q 68 20 45 35 Q 68 40 100 47" />
              {/* Right organic horn */}
              <path d="M 135 45 Q 168 20 190 35 Q 168 40 135 47" />
              {/* Inner head details (muzzle and eye hints) */}
              <circle cx="107" cy="65" r="3" fill="#4e3629" />
              <circle cx="128" cy="65" r="3" fill="#4e3629" />
              <line x1="110" y1="95" x2="125" y2="95" strokeWidth="2" />
            </svg>
          </div>

          <div className="font-sans text-[0.85cqw] border-t border-[#4e3629]/15 pt-[1.5cqh]">
            <span className="font-bold block text-[#806355]">{isZh ? "【牛头象形母本】GUD" : "【BULL GLYPH MOTHER】GUD"}</span>
            <span className="opacity-75">{isZh ? "拓扑基准线：完全保留圆弧几何" : "Baseline: curvilinear contours fully intact."}</span>
          </div>
        </div>

        {/* Central Circular 90° Rotation Guide Overlay */}
        <div className="absolute left-[40cqw] top-[30cqh] w-[10cqw] h-[25cqh] flex flex-col items-center justify-center pointer-events-none z-10">
          {beat >= 1 ? (
            <div className="flex flex-col items-center gap-2 animate-pulse">
              <svg viewBox="0 0 100 100" className="w-[6cqw] h-[6cqw]" stroke="#bf8040" strokeWidth="2.5" fill="none">
                <path d="M 10 50 A 40 40 0 0 1 90 50" strokeDasharray="3,3" />
                <polygon points="90,50 82,42 86,58" fill="#bf8040" stroke="none" />
              </svg>
              <span className="font-sans text-[0.8cqw] font-black text-[#bf8040] bg-[#f4ebe1] px-1 text-center whitespace-nowrap">
                {isZh ? "逆时针左旋90°" : "90° Left Rotation"}
              </span>
            </div>
          ) : (
            <div className="font-sans text-[0.8cqw] opacity-35 text-center italic">
              {isZh ? "[等待旋角匹配]" : "[Awaiting Rotation]"}
            </div>
          )}
        </div>

        {/* Right Card: 90° Rotated Wedge-shaped Cuneiform of Ox (42% width, tilted 2deg) */}
        <div 
          className={`w-[42cqw] h-[78cqh] bg-[#ebdcd0] border-2 rounded-2xl p-[2cqw] flex flex-col justify-between relative transition-all duration-700 shadow-md ${
            beat >= 1 ? "border-[#4e3629] scale-[1.02] shadow-xl z-20" : "border-[#4e3629]/15 opacity-40 scale-[0.98] z-10"
          }`}
          style={{ transform: "rotate(2deg)" }}
        >
          {/* Depth label overlay */}
          <div className="absolute top-3 left-4 font-sans text-[0.8cqw] opacity-40 font-bold">ASSYRIAN CLASSIC / 700 BC</div>
          
          <div>
            <h3 className="font-serif text-[1.4cqw] font-black tracking-tight mt-[1.5cqh]">
              {isZh ? "成熟音符楔形 (左旋)" : "Geometric Wedge Abstraction"}
            </h3>
            <p className="font-sans text-[0.9cqw] opacity-75 mt-1 leading-normal">
              {isZh ? "字形向左旋转90度。抛弃画线，完全依靠芦苇斜面插入黏土产生压痕，形成极度简练的文字拼法。" : "Tablet rotated 90° CCW. Scribes discard drawn lines in favor of bevel reed wedge impressions, unlocking rapid syllabic spellings."}
            </p>
          </div>

          {/* SVG of Rotated Wedge Cuneiform Ox (GUD) with 3D shadow style */}
          <div className="flex-1 my-[1cqh] flex items-center justify-center">
            {beat >= 1 ? (
              <svg viewBox="0 0 240 180" className="w-[85%] h-[85%] overflow-visible fill-[#4e3629] stroke-none">
                <defs>
                  <filter id="wedge-shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                    <feOffset dx="2" dy="2" />
                    <feComponentTransfer><feFuncA type="linear" slope="0.3" /></feComponentTransfer>
                    <feMerge>
                      <feMergeNode />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Draw rotated bull cuneiform wedges (pointing left/up/down) */}
                <g filter="url(#wedge-shadow)">
                  {/* Central horizontal stem */}
                  <polygon points="50,90 200,82 200,98" />
                  
                  {/* Horn 1 pointing left-down */}
                  <polygon points="50,90 20,40 32,32 50,60" fill={beat >= 2 ? "#3a251b" : "#4e3629"} />
                  {/* Horn 2 pointing left-up */}
                  <polygon points="50,90 20,140 32,148 50,120" fill={beat >= 2 ? "#3a251b" : "#4e3629"} />

                  {/* Intersecting vertical body wedges */}
                  <polygon points="120,50 135,50 135,130 120,130" />
                  <polygon points="170,60 182,60 182,120 170,120" />

                  {/* Inner details (small vertical wedges) */}
                  <polygon points="90,75 105,75 105,105 90,105" opacity="0.8" />
                </g>

                {/* Rotation overlay indicators */}
                <g stroke="#bf8040" strokeWidth="1.5" fill="none" opacity="0.75" className="animate-pulse">
                  <path d="M 210 20 L 210 160" strokeDasharray="3,3" />
                  <text x="218" y="94" className="font-sans text-[8px] fill-current" stroke="none" transform="rotate(90 218 94)">90° LOCKED</text>
                </g>
              </svg>
            ) : (
              <div className="font-serif text-[1.8cqw] text-[#4e3629]/30 animate-pulse italic">
                {isZh ? "[等待左旋楔痕注入]" : "[Awaiting Wedge Injection]"}
              </div>
            )}
          </div>

          <div className="font-sans text-[0.85cqw] border-t border-[#4e3629]/15 pt-[1.5cqh] flex justify-between items-center">
            <div>
              <span className="font-bold block text-[#806355]">{isZh ? "【楔形规范化对齐】" : "【WEDGE STANDARD ALIGNMENT】"}</span>
              <span className="opacity-75">{isZh ? "笔法：硬性压印 · 消除一切圆角" : "Method: Bevel indentation. All organic radiuses eliminated."}</span>
            </div>
            {beat >= 2 && (
              <div className="bg-[#4e3629] text-[#f4ebe1] px-2 py-0.5 rounded font-sans font-bold text-[0.8cqw] animate-bounce">
                {isZh ? "压印成功" : "WEDGE PRESSED"}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Scene 3: Process - Standard Chronological Timeline (Uruk -> Sumerian Linear -> Assyrian)
  const renderScene3 = () => {
    return (
      <div className="w-full h-full relative flex flex-col justify-between pl-[13cqw] pr-[2cqw] py-[4cqh] bg-[#f4ebe1] text-[#4e3629] overflow-hidden select-none">
        
        {/* Header Summary Info */}
        <div className="flex justify-between items-end border-b border-[#4e3629]/15 pb-[1.5cqh] z-10 shrink-0">
          <div>
            <span className="font-sans text-[1cqw] tracking-widest uppercase text-[#bf8040] font-bold">
              {isZh ? "两河流域文字三千载历史链" : "THREE-STAGE EVOLUTION CHRONOLOGY"}
            </span>
            <h2 className="text-[2.2cqw] font-serif font-black tracking-tight">
              {isZh ? "从神庙写实符号到帝国拼音字形" : "From Sacred Drawings to Imperial Phonetics"}
            </h2>
          </div>
          <div className="bg-[#ebdcd0] border border-[#4e3629]/15 px-3 py-1.5 rounded-lg text-[#4e3629] font-sans text-[0.8cqw] font-bold">
            {isZh ? "时间梯度验证就绪" : "CHRONO-GAGE READY"}
          </div>
        </div>

        {/* Main Timeline Workspace: 3 overlapping staggered clay roundels with weave line */}
        <div className="flex-1 w-full relative my-[2cqh] z-10">
          {/* Background laser-etched guide lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 1000 400">
            {/* The winding river of evolution */}
            <path 
              d="M 150 120 C 320 80, 280 320, 500 180 C 680 60, 640 300, 850 140" 
              fill="none" 
              stroke="#bca99a" 
              strokeWidth="4" 
              strokeDasharray="2,6" 
              opacity="0.5"
            />
            {/* Flow dots overlay */}
            <path 
              d="M 150 120 C 320 80, 280 320, 500 180 C 680 60, 640 300, 850 140" 
              fill="none" 
              stroke="#bf8040" 
              strokeWidth="2.5" 
              strokeDasharray="12 24" 
              className="animate-clay-flow" 
            />
          </svg>

          {/* Chrono Stage 1: Uruk Pictograph (Top-Left) */}
          <div 
            className={`absolute left-[2cqw] top-[2cqh] w-[26cqw] transition-all duration-700 ${
              beat >= 0 ? "opacity-100 translate-y-0 scale-100" : "opacity-30 -translate-y-4 scale-95"
            }`}
          >
            <div className={`bg-[#ebdcd0] border-2 rounded-2xl p-[1.5cqw] flex flex-col gap-2 shadow-md ${
              beat === 0 ? "border-[#4e3629] shadow-xl" : "border-[#4e3629]/15"
            }`}>
              <div className="flex justify-between items-center">
                <span className="font-sans text-[0.8cqw] text-[#bf8040] font-black tracking-wider uppercase">STAGE 01 / ARCHAIC URUK</span>
                <span className="text-[0.75cqw] font-sans font-bold bg-[#faf6ee] text-[#4e3629] px-2 py-0.5 rounded">3200 BC</span>
              </div>
              <h3 className="font-serif text-[1.2cqw] font-black mt-1">
                {isZh ? "乌鲁克写实象形期" : "Uruk Pictographic Phase"}
              </h3>
              
              {/* Star symbol representation (AN) */}
              <div className="h-[12cqh] border border-[#4e3629]/10 rounded bg-[#faf6ee]/50 flex items-center justify-center py-1 my-1">
                <svg viewBox="0 0 100 100" className="w-[20%] h-[90%] fill-none stroke-[#4e3629]" strokeWidth="3" strokeLinecap="round">
                  {/* Organic star */}
                  <line x1="50" y1="10" x2="50" y2="90" />
                  <line x1="10" y1="50" x2="90" y2="50" />
                  <line x1="22" y1="22" x2="78" y2="78" />
                  <line x1="22" y1="78" x2="78" y2="22" />
                  {/* Outer organic rays */}
                  <path d="M 50 10 Q 55 30 50 50" strokeWidth="1.5" opacity="0.6" />
                  <path d="M 10 50 Q 30 55 50 50" strokeWidth="1.5" opacity="0.6" />
                </svg>
              </div>

              <p className="text-[0.9cqw] text-[#5e4438] leading-relaxed">
                {isZh 
                  ? "最初刻在湿泥上的星形符号，意为“天”或“神”。图形细节饱满，完全依照自然物像。写实但工时长。" 
                  : "First star drawings on soft mud, representing 'heaven' or 'god' (AN). Recognizable, natural star shapes."}
              </p>
            </div>
          </div>

          {/* Chrono Stage 2: Sumerian Linear (Middle-Center) */}
          <div 
            className={`absolute left-[30cqw] top-[14cqh] w-[26cqw] transition-all duration-700 ${
              beat >= 1 ? "opacity-100 translate-y-0 scale-100" : "opacity-25 translate-y-4 scale-95"
            }`}
          >
            <div className={`bg-[#ebdcd0] border-2 rounded-2xl p-[1.5cqw] flex flex-col gap-2 shadow-md ${
              beat === 1 ? "border-[#4e3629] shadow-xl" : "border-[#4e3629]/15"
            }`}>
              <div className="flex justify-between items-center">
                <span className="font-sans text-[0.8cqw] text-[#bf8040] font-black tracking-wider uppercase">STAGE 02 / SUMERIAN LINEAR</span>
                <span className="text-[0.75cqw] font-sans font-bold bg-[#faf6ee] text-[#4e3629] px-2 py-0.5 rounded">2500 BC</span>
              </div>
              <h3 className="font-serif text-[1.2cqw] font-black mt-1">
                {isZh ? "泥板旋转与线性简化期" : "Tablet Rotation & Linear Phase"}
              </h3>

              {/* Linear Star symbol representation */}
              <div className="h-[12cqh] border border-[#4e3629]/10 rounded bg-[#faf6ee]/50 flex items-center justify-center py-1 my-1">
                <svg viewBox="0 0 100 100" className="w-[20%] h-[90%] fill-none stroke-[#4e3629]" strokeWidth="3">
                  {/* Simplified straight intersecting lines */}
                  <line x1="50" y1="15" x2="50" y2="85" />
                  <line x1="15" y1="50" x2="85" y2="50" />
                  <line x1="25" y1="25" x2="75" y2="75" strokeWidth="2" />
                  <line x1="25" y1="75" x2="75" y2="25" strokeWidth="2" />
                  {/* Central circle showing linear abstraction */}
                  <circle cx="50" cy="50" r="10" strokeWidth="1.5" strokeDasharray="2,2" />
                </svg>
              </div>

              <p className="text-[0.9cqw] text-[#5e4438] leading-relaxed">
                {isZh 
                  ? "字形逆时针旋转90度。彻底告别圆弧画笔，完全改用直线笔划，文字走向半抽象化。" 
                  : "Scribes rotate tablets 90° CCW. Complex curves are discarded in favor of straight lines."}
              </p>
            </div>
          </div>

          {/* Chrono Stage 3: Assyrian Cuneiform (Bottom-Right) */}
          <div 
            className={`absolute right-[2cqw] top-[8cqh] w-[26cqw] transition-all duration-700 ${
              beat >= 2 ? "opacity-100 translate-y-0 scale-100" : "opacity-20 -translate-y-4 scale-95"
            }`}
          >
            <div className={`bg-[#ebdcd0] border-2 rounded-2xl p-[1.5cqw] flex flex-col gap-2 shadow-md ${
              beat === 2 ? "border-[#4e3629] shadow-xl" : "border-[#4e3629]/15"
            }`}>
              <div className="flex justify-between items-center">
                <span className="font-sans text-[0.8cqw] text-[#bf8040] font-black tracking-wider uppercase">STAGE 03 / ASSYRIAN PHONETIC</span>
                <span className="text-[0.75cqw] font-sans font-bold bg-[#faf6ee] text-[#4e3629] px-2 py-0.5 rounded">700 BC</span>
              </div>
              <h3 className="font-serif text-[1.2cqw] font-black mt-1">
                {isZh ? "经典亚述拼音文字期" : "Assyrian Classic Cuneiform"}
              </h3>

              {/* Assyrian Star wedges (AN) */}
              <div className="h-[12cqh] border border-[#4e3629]/10 rounded bg-[#faf6ee]/50 flex items-center justify-center py-1 my-1">
                <svg viewBox="0 0 100 100" className="w-[30%] h-[90%] overflow-visible fill-[#4e3629] stroke-none">
                  {/* Horizontal central wedge */}
                  <polygon points="10,50 80,45 80,55" />
                  {/* Vertical central wedge */}
                  <polygon points="50,15 45,85 55,85" />
                  {/* Diagonal wedges */}
                  <polygon points="20,20 75,75 70,80" />
                  <polygon points="80,20 25,75 20,70" />
                  {/* Intersecting center point */}
                  <circle cx="50" cy="50" r="4" fill="#3a251b" />
                </svg>
              </div>

              <p className="text-[0.9cqw] text-[#5e4438] leading-relaxed">
                {isZh 
                  ? "完全由锋利、对称的三角形楔头组成。彻底沦为纯拼音拼写字符，两河史诗与文书的最佳载体。" 
                  : "Fully constructed using symmetric, sharp triangular wedges. Refined into standardized syllable spellings."}
              </p>
            </div>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="border-t border-[#4e3629]/15 pt-[1cqh] flex justify-between items-center text-[0.8cqw] font-sans opacity-60 shrink-0">
          <div className="flex items-center gap-[0.5cqw]">
            <Info className="w-[1.2cqw] h-[1.2cqw] text-[#bf8040]" />
            <span>{isZh ? "三步文字轴记录了大麦/星空等字符从图画、线形到极简三角压痕的质变全阶段。" : "The three-stage axis logs the full transition of barley, stars, and heads from drawings to wedge grids."}</span>
          </div>
        </div>
      </div>
    );
  };

  // Scene 4: Matrix - Dense 2x2 Cuneiform Tablet Archive Grid
  const renderScene4 = () => {
    return (
      <div className="w-full h-full relative flex flex-col justify-between pl-[13cqw] pr-[2cqw] py-[4cqh] bg-[#f4ebe1] text-[#4e3629] overflow-hidden select-none">
        
        {/* Header Title Bar */}
        <div className="border-b border-[#4e3629]/15 pb-[1.5cqh] flex justify-between items-end shrink-0 z-10">
          <div>
            <span className="font-sans text-[1cqw] tracking-widest uppercase text-[#bf8040] font-black">
              {isZh ? "泥板文献档案库" : "CUNEIFORM TABLET ARCHIVE MESH"}
            </span>
            <h2 className="text-[2.2cqw] font-serif font-black tracking-tight mt-[0.5cqh]">
              {isZh ? "神庙大宗财产符号比对网格" : "Administrative Glyphs & Bureaucracy Matrix"}
            </h2>
          </div>
          <div className="bg-[#4e3629] text-[#f4ebe1] font-sans font-bold text-[0.85cqw] px-3 py-1 rounded-lg shadow-sm">
            {isZh ? "档案检索验证" : "ARCHIVE AUDIT ENGINES"}
          </div>
        </div>

        {/* Asymmetrical 2x2 Bento Clay Rack Matrix */}
        <div className="flex-1 w-full grid grid-cols-12 gap-[2.5cqw] my-[2cqh] z-10">
          
          {/* Q1: Grain (ŠE) - Active at beat === 0 */}
          <div 
            className={`col-span-6 border-2 rounded-2xl p-[1.5cqw] bg-[#ebdcd0] flex flex-col justify-between relative transition-all duration-500 overflow-hidden ${
              beat === 0 
                ? "border-[#4e3629] shadow-xl scale-[1.01] z-20" 
                : "border-[#4e3629]/15 opacity-40 scale-[0.99] z-10"
            }`}
          >
            <div className="absolute top-2 right-4 font-sans text-[0.7cqw] opacity-35 font-bold">Q1 / GRAIN [ŠE]</div>
            
            <div>
              <span className="font-sans text-[0.8cqw] text-[#bf8040] font-black tracking-wider block uppercase">
                {isZh ? "粮食分发分类" : "Barley Transactions"}
              </span>
              <h3 className="font-serif text-[1.15cqw] font-black text-[#4e3629] mt-0.5">
                {isZh ? "𐏖 大麦大宗出纳记账" : "𐏖 Standard Grain Audits"}
              </h3>
            </div>

            {/* Grain sign SVG comparison */}
            <div className="h-[12cqh] bg-[#faf6ee]/50 border border-[#4e3629]/10 rounded flex justify-around items-center p-1 my-[1cqh]">
              <div className="flex flex-col items-center">
                <span className="text-[0.65cqw] opacity-50 font-sans">{isZh ? "早期象形" : "Archaic"}</span>
                <svg viewBox="0 0 100 100" className="w-[2.2cqw] h-[2.2cqw] fill-none stroke-[#4e3629]" strokeWidth="3" strokeLinecap="round">
                  <path d="M 50 10 Q 50 90 50 90 M 50 25 Q 75 10 50 40 M 50 40 Q 25 25 50 55 M 50 55 Q 75 40 50 70" />
                </svg>
              </div>
              <span className="text-xl text-[#bf8040]">➜</span>
              <div className="flex flex-col items-center">
                <span className="text-[0.65cqw] opacity-50 font-sans">{isZh ? "后期楔形" : "Assyrian"}</span>
                <svg viewBox="0 0 100 100" className="w-[2.2cqw] h-[2.2cqw] fill-[#4e3629] stroke-none overflow-visible">
                  <polygon points="50,15 42,85 58,85" />
                  <polygon points="50,30 85,15 80,28" />
                  <polygon points="50,45 15,30 20,43" />
                  <polygon points="50,60 85,45 80,58" />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-end gap-[1.5cqw] font-sans text-[0.8cqw] text-[#5e4438] mt-1 border-t border-[#4e3629]/10 pt-[1cqh]">
              <p className="leading-relaxed max-w-[20cqw]">
                {isZh 
                  ? "大麦是苏美尔神庙最核心的记账单位与配给标尺。" 
                  : "Barley (ŠE) served as the primary currency and temple ration value standard."}
              </p>
              <div className="text-right shrink-0">
                <span className="opacity-50 block uppercase">Standard Load</span>
                <span className="font-bold text-[#4e3629]">300 GUR</span>
              </div>
            </div>
          </div>

          {/* Q2: Sheep (UDU) - Active at beat === 0 */}
          <div 
            className={`col-span-6 border-2 rounded-2xl p-[1.5cqw] bg-[#ebdcd0] flex flex-col justify-between relative transition-all duration-500 overflow-hidden ${
              beat === 0 
                ? "border-[#4e3629] shadow-xl scale-[1.01] z-20" 
                : "border-[#4e3629]/15 opacity-40 scale-[0.99] z-10"
            }`}
          >
            <div className="absolute top-2 right-4 font-sans text-[0.7cqw] opacity-35 font-bold">Q2 / SHEEP [UDU]</div>

            <div>
              <span className="font-sans text-[0.8cqw] text-[#bf8040] font-black tracking-wider block uppercase">
                {isZh ? "牲畜牧栏统计" : "Livestock Records"}
              </span>
              <h3 className="font-serif text-[1.15cqw] font-black text-[#4e3629] mt-0.5">
                {isZh ? "𐏔 绵羊与山羊出入库" : "𐏔 Sheep & Goat Tallies"}
              </h3>
            </div>

            {/* Sheep sign SVG comparison */}
            <div className="h-[12cqh] bg-[#faf6ee]/50 border border-[#4e3629]/10 rounded flex justify-around items-center p-1 my-[1cqh]">
              <div className="flex flex-col items-center">
                <span className="text-[0.65cqw] opacity-50 font-sans">{isZh ? "早期象形" : "Archaic"}</span>
                <svg viewBox="0 0 100 100" className="w-[2.2cqw] h-[2.2cqw] fill-none stroke-[#4e3629]" strokeWidth="3">
                  <circle cx="50" cy="50" r="30" />
                  <line x1="20" y1="50" x2="80" y2="50" />
                  <line x1="50" y1="20" x2="50" y2="80" />
                </svg>
              </div>
              <span className="text-xl text-[#bf8040]">➜</span>
              <div className="flex flex-col items-center">
                <span className="text-[0.65cqw] opacity-50 font-sans">{isZh ? "后期楔形" : "Assyrian"}</span>
                <svg viewBox="0 0 100 100" className="w-[2.2cqw] h-[2.2cqw] fill-[#4e3629] stroke-none overflow-visible">
                  {/* Square-like wedge cluster */}
                  <polygon points="20,20 80,20 80,28 20,28" />
                  <polygon points="20,20 28,20 28,80 20,80" />
                  <polygon points="20,72 80,72 80,80 20,80" />
                  <polygon points="72,20 80,20 80,80 72,80" />
                  {/* Center cross wedges */}
                  <polygon points="46,30 54,30 54,70 46,70" />
                  <polygon points="30,46 70,46 70,54 30,54" />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-end gap-[1.5cqw] font-sans text-[0.8cqw] text-[#5e4438] mt-1 border-t border-[#4e3629]/10 pt-[1cqh]">
              <p className="leading-relaxed max-w-[20cqw]">
                {isZh 
                  ? "早期绵羊用圆圈内含十字表示，极为简单抽象。" 
                  : "Sheep (UDU) originally depicted as a circle with a cross."}
              </p>
              <div className="text-right shrink-0">
                <span className="opacity-50 block uppercase">Flock Sum</span>
                <span className="font-bold text-[#4e3629]">120 HEAD</span>
              </div>
            </div>
          </div>

          {/* Q3: Beer (KAŠ) - Active at beat === 1 */}
          <div 
            className={`col-span-6 border-2 rounded-2xl p-[1.5cqw] bg-[#ebdcd0] flex flex-col justify-between relative transition-all duration-500 overflow-hidden ${
              beat === 1 
                ? "border-[#4e3629] shadow-xl scale-[1.01] z-20" 
                : "border-[#4e3629]/15 opacity-40 scale-[0.99] z-10"
            }`}
          >
            <div className="absolute top-2 right-4 font-sans text-[0.7cqw] opacity-35 font-bold">Q3 / BEER [KAŠ]</div>

            <div>
              <span className="font-sans text-[0.8cqw] text-[#bf8040] font-black tracking-wider block uppercase">
                {isZh ? "麦芽啤酒分配" : "Liquid Rations"}
              </span>
              <h3 className="font-serif text-[1.15cqw] font-black text-[#4e3629] mt-0.5">
                {isZh ? "𐏚 啤酒大麦发酵契约" : "𐏚 Fermented Beer Deeds"}
              </h3>
            </div>

            {/* Beer sign SVG comparison */}
            <div className="h-[12cqh] bg-[#faf6ee]/50 border border-[#4e3629]/10 rounded flex justify-around items-center p-1 my-[1cqh]">
              <div className="flex flex-col items-center">
                <span className="text-[0.65cqw] opacity-50 font-sans">{isZh ? "早期象形" : "Archaic"}</span>
                <svg viewBox="0 0 100 100" className="w-[2.2cqw] h-[2.2cqw] fill-none stroke-[#4e3629]" strokeWidth="3" strokeLinecap="round">
                  {/* Jug contour */}
                  <path d="M 35 15 L 65 15 L 75 75 C 75 90, 25 90, 25 75 Z" />
                  <path d="M 30 35 L 70 35 M 27 55 L 73 55" />
                </svg>
              </div>
              <span className="text-xl text-[#bf8040]">➜</span>
              <div className="flex flex-col items-center">
                <span className="text-[0.65cqw] opacity-50 font-sans">{isZh ? "后期楔形" : "Assyrian"}</span>
                <svg viewBox="0 0 100 100" className="w-[2.2cqw] h-[2.2cqw] fill-[#4e3629] stroke-none overflow-visible">
                  {/* Wedge jar */}
                  <polygon points="30,20 70,12 70,28" />
                  <polygon points="35,30 65,30 65,80 35,80" />
                  <polygon points="30,45 70,35 70,50" opacity="0.8" />
                  <polygon points="30,65 70,55 70,70" opacity="0.8" />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-end gap-[1.5cqw] font-sans text-[0.8cqw] text-[#5e4438] mt-1 border-t border-[#4e3629]/10 pt-[1cqh]">
              <p className="leading-relaxed max-w-[20cqw]">
                {isZh 
                  ? "啤酒原画成一个粘土大罐，腹部有横纹线条装饰。" 
                  : "Beer jar (KAŠ) was originally a clay vase with horizontal decor."}
              </p>
              <div className="text-right shrink-0">
                <span className="opacity-50 block uppercase">Liquid Volume</span>
                <span className="font-bold text-[#4e3629]">45 VESSELS</span>
              </div>
            </div>
          </div>

          {/* Q4: Land (GAN₂) - Active at beat === 2 */}
          <div 
            className={`col-span-6 border-2 rounded-2xl p-[1.5cqw] bg-[#ebdcd0] flex flex-col justify-between relative transition-all duration-500 overflow-hidden ${
              beat === 2 
                ? "border-[#4e3629] shadow-xl scale-[1.01] z-20" 
                : "border-[#4e3629]/15 opacity-40 scale-[0.99] z-10"
            }`}
          >
            <div className="absolute top-2 right-4 font-sans text-[0.7cqw] opacity-35 font-bold">Q4 / LAND [GAN₂]</div>

            <div>
              <span className="font-sans text-[0.8cqw] text-[#bf8040] font-black tracking-wider block uppercase">
                {isZh ? "神庙土地测量" : "Field Surveys"}
              </span>
              <h3 className="font-serif text-[1.15cqw] font-black text-[#4e3629] mt-0.5">
                {isZh ? "𐏔 灌溉耕地地契分割" : "𐏔 Irrigation Land Deeds"}
              </h3>
            </div>

            {/* Land sign SVG comparison */}
            <div className="h-[12cqh] bg-[#faf6ee]/50 border border-[#4e3629]/10 rounded flex justify-around items-center p-1 my-[1cqh]">
              <div className="flex flex-col items-center">
                <span className="text-[0.65cqw] opacity-50 font-sans">{isZh ? "早期象形" : "Archaic"}</span>
                <svg viewBox="0 0 100 100" className="w-[2.2cqw] h-[2.2cqw] fill-none stroke-[#4e3629]" strokeWidth="3" strokeLinecap="round">
                  {/* Irrigation canals grid */}
                  <rect x="20" y="20" width="60" height="60" />
                  <line x1="50" y1="20" x2="50" y2="80" />
                  <line x1="20" y1="50" x2="80" y2="50" />
                </svg>
              </div>
              <span className="text-xl text-[#bf8040]">➜</span>
              <div className="flex flex-col items-center">
                <span className="text-[0.65cqw] opacity-50 font-sans">{isZh ? "后期楔形" : "Assyrian"}</span>
                <svg viewBox="0 0 100 100" className="w-[2.2cqw] h-[2.2cqw] fill-[#4e3629] stroke-none overflow-visible">
                  {/* Wedge fields */}
                  <polygon points="10,25 90,15 90,32" />
                  <polygon points="10,50 90,40 90,57" />
                  <polygon points="10,75 90,65 90,82" />
                  <polygon points="35,10 47,10 47,90 35,90" opacity="0.8" />
                  <polygon points="65,10 77,10 77,90 65,90" opacity="0.8" />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-end gap-[1.5cqw] font-sans text-[0.8cqw] text-[#5e4438] mt-1 border-t border-[#4e3629]/10 pt-[1cqh]">
              <p className="leading-relaxed max-w-[20cqw]">
                {isZh 
                  ? "土地最初是用横竖交织的沟渠图案来表示的。" 
                  : "Field (GAN₂) originally drawn as a grid representing canals."}
              </p>
              <div className="text-right shrink-0">
                <span className="opacity-50 block uppercase">Acreage</span>
                <span className="font-bold text-[#4e3629]">5 BUR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom system status bar */}
        <div className="border-t border-[#4e3629]/15 pt-[1cqh] flex justify-between items-center text-[0.8cqw] font-sans opacity-60 z-10 shrink-0">
          <div className="flex items-center gap-[0.5cqw]">
            <Info className="w-[1.2cqw] h-[1.2cqw] text-[#bf8040]" />
            <span>{isZh ? "通过对比神庙泥板网格，可以看出楔形文字如何保留大宗农产符号的核心扑拓，同时实现几何规范化书写。" : "By auditing the temple matrix, we analyze how cuneiform retains topological features while fully normalising writing."}</span>
          </div>
        </div>
      </div>
    );
  };

  // Scene 5: Ledger - Extreme Royal Palace Administrative Tablet
  const renderScene5 = () => {
    return (
      <div className="w-full h-full relative flex flex-col justify-between pl-[13cqw] pr-[2cqw] py-[4cqh] bg-[#f4ebe1] text-[#4e3629] overflow-hidden select-none">
        
        {/* Header Title Bar */}
        <div className="border-b border-[#4e3629]/15 pb-[1.5cqh] flex justify-between items-end shrink-0 z-10">
          <div className="flex items-center gap-3">
            <Database className="w-[2cqw] h-[2cqw] text-[#4e3629]" />
            <div>
              <h2 className="text-[2.2cqw] font-serif font-black tracking-tight">
                {isZh ? "乌尔第三王朝王室行政决账泥板" : "ROYAL PALACE ADMINISTRATIVE TABLET"}
              </h2>
              <p className="font-sans text-[0.85cqw] opacity-60 mt-1">
                {isZh ? "神庙大麦收税收条、羊群清点、大麦水路运输综合记账泥板" : "High-density accounts detailing barley shipments, tax receipts, and flock tallies in Sumer"}
              </p>
            </div>
          </div>
          <div className="text-right font-sans text-[0.75cqw] opacity-50 uppercase leading-none">
            <p><strong>Ledger ID:</strong> UR3-PAL-9023</p>
            <p className="mt-1"><strong>Scribe:</strong> LU-NANNA</p>
          </div>
        </div>

        {/* Main 3-Column Telemetry Board */}
        <div className="flex-1 w-full grid grid-cols-12 gap-[2.5cqw] my-[2cqh] z-10 overflow-hidden">
          
          {/* Column 1: Barley Shipments (Col 1-4) */}
          <div className="col-span-4 border-r border-[#4e3629]/15 pr-[1.2cqw] flex flex-col justify-between overflow-hidden">
            <div>
              <h4 className="font-serif text-[1.1cqw] font-black text-[#4e3629] border-b border-[#4e3629]/10 pb-1 flex justify-between items-center">
                <span>{isZh ? "一、大麦运输总账" : "I. Barley Shipments"}</span>
                <span className="text-[0.7cqw] font-sans bg-[#ebdcd0] text-[#4e3629] px-2 py-0.5 rounded">NIPPUR ➜ UR</span>
              </h4>
              <div className="flex flex-col gap-[1.2cqh] mt-[1.5cqh] font-sans text-[0.9cqw]">
                <div className="bg-[#ebdcd0]/40 p-[0.8cqw] rounded-lg border border-[#4e3629]/10 flex flex-col gap-1">
                  <div className="flex justify-between">
                    <span className="opacity-60">{isZh ? "一级大麦装载量" : "BARLEY QTY"}</span>
                    <strong className="text-[#4e3629]">600 GUR</strong>
                  </div>
                  <div className="w-full bg-[#f4ebe1] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#4e3629] h-full rounded-full" style={{ width: "85%" }} />
                  </div>
                </div>

                <div className="bg-[#ebdcd0]/40 p-[0.8cqw] rounded-lg border border-[#4e3629]/10 flex flex-col gap-1">
                  <div className="flex justify-between">
                    <span className="opacity-60">{isZh ? "运输粘土驳船" : "BARGES DEPLOYED"}</span>
                    <strong className="text-[#4e3629]">12 VESSELS</strong>
                  </div>
                  <div className="w-full bg-[#f4ebe1] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#4e3629] h-full rounded-full" style={{ width: "65%" }} />
                  </div>
                </div>

                <div className="flex justify-between border-b border-[#4e3629]/5 py-[0.4cqh]">
                  <span className="opacity-60">{isZh ? "主管书吏" : "SUPERVISOR"}</span>
                  <span className="font-bold">EN-HEDU-ANNA</span>
                </div>
                <div className="flex justify-between border-b border-[#4e3629]/5 py-[0.4cqh]">
                  <span className="opacity-60">{isZh ? "水路耗时" : "TRANSIT TIME"}</span>
                  <span className="font-bold">4 DAYS</span>
                </div>
              </div>
            </div>

            <p className="text-[0.8cqw] italic opacity-75 mt-[1cqh] font-sans text-[#806355]">
              {isZh ? "* 大麦由于受潮干缩产生的重力损耗常数计为 1.25%" : "* Moisture shrinkage gravity loss constant calculated at 1.25%."}
            </p>
          </div>

          {/* Column 2: Tax Receipts (Col 5-8) */}
          <div className="col-span-4 border-r border-[#4e3629]/15 pr-[1.2cqw] flex flex-col justify-between overflow-hidden">
            <div>
              <h4 className="font-serif text-[1.1cqw] font-black text-[#4e3629] border-b border-[#4e3629]/10 pb-1 flex justify-between items-center">
                <span>{isZh ? "二、伊南娜神庙税支" : "II. Temple Tax Receipts"}</span>
                <span className="text-[0.7cqw] font-sans bg-[#ebdcd0] text-[#4e3629] px-2 py-0.5 rounded">INANNA</span>
              </h4>
              <div className="flex flex-col gap-[1.2cqh] mt-[1.5cqh] font-sans text-[0.9cqw]">
                <div className="bg-[#ebdcd0]/40 p-[0.8cqw] rounded-lg border border-[#4e3629]/10 flex flex-col gap-1">
                  <div className="flex justify-between">
                    <span className="opacity-60">{isZh ? "白银称重税入" : "SILVER SHEKELS"}</span>
                    <strong className="text-[#4e3629]">120 SHEKELS</strong>
                  </div>
                  <div className="w-full bg-[#f4ebe1] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#4e3629] h-full rounded-full" style={{ width: "70%" }} />
                  </div>
                </div>

                <div className="bg-[#ebdcd0]/40 p-[0.8cqw] rounded-lg border border-[#4e3629]/10 flex flex-col gap-1">
                  <div className="flex justify-between">
                    <span className="opacity-60">{isZh ? "纯质芝麻油配给" : "SESAME OIL VOLUME"}</span>
                    <strong className="text-[#4e3629]">40 VASES</strong>
                  </div>
                  <div className="w-full bg-[#f4ebe1] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#4e3629] h-full rounded-full" style={{ width: "40%" }} />
                  </div>
                </div>

                <div className="flex justify-between border-b border-[#4e3629]/5 py-[0.4cqh]">
                  <span className="opacity-60">{isZh ? "王室特使" : "ROYAL ENVOY"}</span>
                  <span className="font-bold">UR-NAMMU</span>
                </div>
                <div className="flex justify-between border-b border-[#4e3629]/5 py-[0.4cqh]">
                  <span className="opacity-60">{isZh ? "赋税周期" : "TAX CYCLE"}</span>
                  <span className="font-bold">Q3 REGISTER</span>
                </div>
              </div>
            </div>

            <p className="text-[0.8cqw] italic opacity-75 mt-[1cqh] font-sans text-[#806355]">
              {isZh ? "* 神庙祭司已核对法码重力刻度无误" : "* Temple priests verified standard weight balance scales."}
            </p>
          </div>

          {/* Column 3: Sheep Tallies & cylinder seal (Col 9-12) */}
          <div className="col-span-4 pl-[1.2cqw] flex flex-col justify-between relative overflow-hidden">
            <div>
              <h4 className="font-serif text-[1.1cqw] font-black text-[#4e3629] border-b border-[#4e3629]/10 pb-1 flex justify-between items-center">
                <span>{isZh ? "三、牲畜与决算盖章" : "III. Livestock & Sign-off"}</span>
                <span className="text-[0.7cqw] font-sans bg-[#ebdcd0] text-[#4e3629] px-2 py-0.5 rounded">SHEEP</span>
              </h4>
              <div className="flex flex-col gap-[1cqh] mt-[1.2cqh] font-sans text-[0.85cqw]">
                <div className="flex justify-between border-b border-[#4e3629]/5 py-[0.3cqh]">
                  <span className="opacity-60">{isZh ? "贡纳绵羊总数" : "FLOCK TOTAL"}</span>
                  <span className="font-bold">45 FAT-TAILED</span>
                </div>
                <div className="flex justify-between border-b border-[#4e3629]/5 py-[0.3cqh]">
                  <span className="opacity-60">{isZh ? "提供牧人" : "SHEPHERD ID"}</span>
                  <span className="font-bold">LU-NANNA</span>
                </div>
                <div className="flex justify-between border-b border-[#4e3629]/5 py-[0.3cqh]">
                  <span className="opacity-60">{isZh ? "总督审核签字" : "GOVERNOR LOCK"}</span>
                  <span className="font-bold text-emerald-800">APPROVED</span>
                </div>
              </div>
            </div>

            {/* Cylinder Seal Stamped area (Ur III) */}
            <div className="h-[15cqh] flex items-end justify-end mt-[1.5cqh] relative">
              {beat >= 2 ? (
                <div 
                  className="w-[18cqw] h-[13cqh] bg-[#b23b25]/10 border-[3px] border-double border-[#b23b25] rounded-xl flex flex-col items-center justify-center text-[#b23b25] font-serif rotate-[-6deg] p-[0.8cqw] shadow-md relative overflow-hidden animate-stamp-press"
                  style={{
                    boxShadow: "0 0 0 4px #f4ebe1, 0 10px 25px -5px rgba(178,59,37,0.4)"
                  }}
                >
                  {/* Sumerian seal rolled stamp graphic representation */}
                  <svg viewBox="0 0 160 50" className="w-full h-full fill-none stroke-[#b23b25] pointer-events-none" strokeWidth="1.5">
                    {/* Border rolling guidelines */}
                    <line x1="5" y1="5" x2="155" y2="5" strokeDasharray="2,2" />
                    <line x1="5" y1="45" x2="155" y2="45" strokeDasharray="2,2" />
                    {/* King holding staff before god */}
                    <path d="M 25 15 L 25 40 M 15 25 L 25 15 L 35 25 M 25 32 L 35 32" strokeWidth="1" /> {/* King outline */}
                    <path d="M 95 15 L 95 40 M 85 25 L 95 15 L 105 25 M 95 32 L 105 32" strokeWidth="1" /> {/* God outline */}
                    {/* Cuneiform wedges between characters */}
                    <polygon points="50,15 65,12 65,22" />
                    <polygon points="50,30 65,27 65,37" />
                    <polygon points="120,20 135,17 135,27" />
                  </svg>
                  <span className="font-serif font-black text-[1cqw] uppercase tracking-[0.25cqw] text-center mt-1 leading-none">{isZh ? "王室决账印信" : "UR III SEAL LOCK"}</span>
                </div>
              ) : (
                <div className="w-[18cqw] h-[13cqh] border-2 border-dashed border-[#4e3629]/20 rounded-xl flex items-center justify-center text-[#4e3629]/45 font-sans text-[0.85cqw] italic bg-[#ebdcd0]/25">
                  {isZh ? "等待加盖王室印章..." : "SEAL UNSTAMPED"}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="border-t border-[#4e3629]/15 pt-[1cqh] flex justify-between items-center text-[0.8cqw] font-sans opacity-60 shrink-0 z-10">
          <div className="flex items-center gap-[0.5cqw]">
            <Info className="w-[1.2cqw] h-[1.2cqw] text-[#bf8040]" />
            <span>{isZh ? "王室决账账目合并审查就绪。当加盖乌尔第三王朝滚筒印章时，账目自动在帝国大一统数字档案库中锁定。" : "Merged accounts approved. Stamping the cylinder seal locks the digital archive."}</span>
          </div>
        </div>
      </div>
    );
  };

  const renderActiveScene = () => {
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

  const renderLeftNavigation = () => {
    if (isThumbnail || !onNavigate) return null;

    return (
      <div className="absolute left-[3cqw] top-[3cqh] bottom-[3cqh] w-[10cqw] z-30 select-none">
        <svg viewBox="0 0 120 800" className="w-full h-full overflow-visible">
          <defs>
            {/* Clay Bevel Filter for the rolled trail background */}
            <filter id="clay-trail-bevel" x="-10%" y="-5%" width="120%" height="110%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feSpecularLighting in="blur" specularExponent="15" lightingColor="#fff" surfaceScale="3" result="spec">
                <feDistantLight azimuth="45" elevation="50" />
              </feSpecularLighting>
              <feComposite in="SourceGraphic" in2="spec" operator="arithmetic" k2="1" k3="0.3" result="lit" />
              <feMerge>
                <feMergeNode in="lit" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Deep Indented Inset Shadow Filter for cuneiform signs */}
            <filter id="deboss-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feOffset dx="1" dy="2"/>
              <feGaussianBlur stdDeviation="1.5" result="offset-blur"/>
              <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"/>
              <feFlood flood-color="#2d1c12" flood-opacity="0.7" result="color"/>
              <feComposite operator="in" in="color" in2="inverse" result="shadow"/>
              <feComposite operator="over" in="shadow" in2="SourceGraphic"/>
            </filter>

            {/* Active Stamp Drop Shadow */}
            <filter id="active-stamp-shadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="2" dy="5" stdDeviation="3.5" flood-color="#2d1c12" flood-opacity="0.45" />
            </filter>
          </defs>

          {/* Wet-clay colored cylinder seal rolling trail impression strip */}
          <path 
            d="M 15 15 Q 10 400 15 785 L 105 785 Q 110 400 105 15 Z" 
            fill="#e3cfc0" 
            stroke="#b8a294" 
            strokeWidth="2"
            filter="url(#clay-trail-bevel)"
          />

          {/* Cylinder seal rolled decorative side patterns (Archaeological details) */}
          <g stroke="#4e3629" strokeWidth="1.5" strokeOpacity="0.25" fill="none">
            {/* Left rolled border pattern */}
            <path d="M 22 25 L 22 775" strokeDasharray="4,8" />
            <path d="M 26 25 L 26 775" strokeDasharray="1,5" />
            {/* Right rolled border pattern */}
            <path d="M 98 25 L 98 775" strokeDasharray="4,8" />
            <path d="M 94 25 L 94 775" strokeDasharray="1,5" />
            
            {/* Subtle rolled background pictographs/motifs */}
            <g opacity="0.12">
              <circle cx="60" cy="175" r="8" />
              <path d="M 52 175 L 68 175 M 60 167 L 60 183" />
              <circle cx="60" cy="325" r="8" />
              <path d="M 52 325 L 68 325 M 60 317 L 60 333" />
              <circle cx="60" cy="475" r="8" />
              <path d="M 52 475 L 68 475 M 60 467 L 60 483" />
              <circle cx="60" cy="625" r="8" />
              <path d="M 52 625 L 68 625 M 60 617 L 60 633" />
            </g>
          </g>

          {/* Render the 5 nodes */}
          {[
            { s: 1, y: 100, name: isZh ? "泥板象形" : "Clay Premise", num: "𒁹" },
            { s: 2, y: 250, name: isZh ? "笔尖压印" : "Wedge Abstr", num: "𒈫" },
            { s: 3, y: 400, name: isZh ? "三阶演进" : "Chrono Stage", num: "𒐈" },
            { s: 4, y: 550, name: isZh ? "档案测绘" : "Archive Mesh", num: "𒐉" },
            { s: 5, y: 700, name: isZh ? "皇家账目" : "Royal Ledger", num: "𒐊" }
          ].map((node) => {
            const isActive = scene === node.s;
            // Ensure correct cuneiform numeral strings
            const cuneiformNumeral = node.s === 1 ? "𒁹" : node.s === 2 ? "𒈫" : node.s === 3 ? "𒐈" : node.s === 4 ? "𒐉" : "𒐊";
            return (
              <g 
                key={node.s} 
                className="cursor-pointer group"
                onClick={() => onNavigate(node.s, 0)}
              >
                {/* Large invisible click zone */}
                <circle cx="60" cy={node.y} r="45" className="fill-transparent stroke-none" />

                {isActive ? (
                  /* Active raw red-clay cylinder stamp overlay */
                  <g className="animate-stamp-press" style={{ transformOrigin: `60px ${node.y}px` }}>
                    {/* Shadow under-layer */}
                    <rect 
                      x="22" 
                      y={node.y - 38} 
                      width="76" 
                      height="76" 
                      rx="16" 
                      fill="#2d1c12" 
                      className="opacity-25"
                      transform="translate(2, 4)"
                    />
                    {/* Red clay stamp body */}
                    <rect 
                      x="22" 
                      y={node.y - 38} 
                      width="76" 
                      height="76" 
                      rx="16" 
                      fill="#b23b25" 
                      stroke="#8a2010"
                      strokeWidth="2.5"
                      filter="url(#active-stamp-shadow)"
                    />
                    {/* Inner stamp decorative circle */}
                    <rect 
                      x="28" 
                      y={node.y - 32} 
                      width="64" 
                      height="64" 
                      rx="12" 
                      fill="none" 
                      stroke="#faf6ee" 
                      strokeWidth="1" 
                      strokeDasharray="2,3" 
                      opacity="0.4" 
                    />
                    {/* Cuneiform Numeral inside active stamp */}
                    <text 
                      x="60" 
                      y={node.y + 12} 
                      textAnchor="middle" 
                      className="font-serif text-[3.8cqw] fill-[#faf6ee] font-black select-none"
                      stroke="none"
                    >
                      {cuneiformNumeral}
                    </text>
                    {/* Label tooltip for active node */}
                    <g transform={`translate(100, ${node.y})`}>
                      {/* Tooltip background */}
                      <polygon points="0,0 8,-6 8,6" fill="#4e3629" />
                      <rect x="8" y="-16" width="112" height="32" rx="6" fill="#4e3629" />
                      <text 
                        x="64" 
                        y="4" 
                        textAnchor="middle" 
                        className="font-sans text-[0.85cqw] font-bold fill-[#f4ebe1]"
                      >
                        {node.name}
                      </text>
                    </g>
                  </g>
                ) : (
                  /* Inactive deep indented shadow border node */
                  <g>
                    {/* Indented border circle */}
                    <circle 
                      cx="60" 
                      cy={node.y} 
                      r="28" 
                      fill="#ebdcd0" 
                      stroke="#4e3629" 
                      strokeWidth="1.5" 
                      strokeOpacity="0.15" 
                      filter="url(#deboss-shadow)"
                      className="transition-all duration-300 group-hover:fill-[#e6d4c5]"
                    />
                    {/* Cuneiform Numeral */}
                    <text 
                      x="60" 
                      y={node.y + 10} 
                      textAnchor="middle" 
                      className="font-serif text-[3.2cqw] fill-[#4e3629]/45 select-none transition-all duration-300 group-hover:fill-[#4e3629]/80"
                      stroke="none"
                      filter="url(#deboss-shadow)"
                    >
                      {cuneiformNumeral}
                    </text>
                    {/* Subtle label underneath/beside on hover */}
                    <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" transform={`translate(100, ${node.y})`}>
                      <polygon points="0,0 8,-6 8,6" fill="#ebdcd0" stroke="#4e3629" strokeWidth="1" />
                      <rect x="8" y="-16" width="112" height="32" rx="6" fill="#ebdcd0" stroke="#4e3629" strokeWidth="1" />
                      <rect x="7" y="-15" width="3" height="30" fill="#ebdcd0" />
                      <text 
                        x="64" 
                        y="4" 
                        textAnchor="middle" 
                        className="font-sans text-[0.85cqw] font-bold fill-[#4e3629]"
                      >
                        {node.name}
                      </text>
                    </g>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    );
  };

  return (
    <div className="w-full h-full bg-[#f4ebe1] text-[#4e3629] relative overflow-hidden font-sans p-[3cqw] flex flex-col select-none">
      {/* Self-contained style block for Fonts and Transitions */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap');
        
        .font-serif {
          font-family: 'Cinzel', Georgia, serif;
        }
        
        .font-sans {
          font-family: 'Plus Jakarta Sans', 'Noto Sans SC', sans-serif;
        }
        
        @keyframes clay-flow-offset {
          to { stroke-dashoffset: -36; }
        }
        
        .animate-clay-flow {
          animation: clay-flow-offset 1.5s linear infinite;
        }

        @keyframes crack-appear {
          from { stroke-dasharray: 50; stroke-dashoffset: 50; }
          to { stroke-dashoffset: 0; }
        }

        .animate-crack-draw {
          animation: crack-appear 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }

        @keyframes stamp-press-scale {
          0% { transform: scale(1.4) rotate(12deg); opacity: 0; filter: blur(4px); }
          50% { transform: scale(0.9) rotate(-8deg); opacity: 1; filter: none; }
          75% { transform: scale(1.05) rotate(-5deg); }
          100% { transform: scale(1) rotate(-6deg); }
        }

        .animate-stamp-press {
          animation: stamp-press-scale 0.45s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          transform-origin: center;
        }

        @keyframes glitch-sweep-key {
          0% { transform: translate(-100%, -100%) rotate(-25deg) skewY(12deg); opacity: 0; }
          30%, 70% { opacity: 0.9; }
          100% { transform: translate(100%, 100%) rotate(-25deg) skewY(12deg); opacity: 0; }
        }

        .animate-glitch-sweep {
          animation: glitch-sweep-key 0.4s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }

        @keyframes glitch-particle-key {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-30px) scale(0); opacity: 0; }
        }

        .animate-glitch-particle {
          animation: glitch-particle-key 0.4s ease-out forwards;
        }

        @keyframes glitch-char-key {
          0%, 100% { opacity: 0; transform: scale(0.9) skewX(-10deg); }
          30%, 70% { opacity: 0.85; transform: scale(1.15) skewX(10deg); }
        }

        .animate-glitch-char {
          animation: glitch-char-key 0.4s steps(2) forwards;
        }
      `}</style>

      {/* Main active scene view using Instant Hard Splitch */}
      <div className="flex-1 w-full relative overflow-hidden">
        {/* Instant Scene Render */}
        <div className="w-full h-full relative">
          {renderActiveScene()}
        </div>
      </div>

      {/* Dadaist Hard Splitch & Glitch Overlay */}
      {isGlitching && (
        <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden bg-[#4e3629]/5 mix-blend-multiply flex items-center justify-center">
          {/* Diagonal sweep bar simulating stylus action */}
          <div className="absolute w-[180%] h-[15cqh] bg-[#bf8040]/25 border-y-2 border-[#4e3629]/40 skew-y-12 rotate-[-25deg] animate-glitch-sweep" />
          
          {/* Bursting clay dust particles */}
          <div className="absolute w-full h-full">
            {[...Array(15)].map((_, i) => {
              const randomX = Math.random() * 100;
              const randomY = Math.random() * 100;
              const delay = Math.random() * 0.15;
              const size = 0.8 + Math.random() * 1.6;
              return (
                <div 
                  key={i} 
                  className="absolute bg-[#806355] rounded-full animate-glitch-particle"
                  style={{
                    left: `${randomX}%`,
                    top: `${randomY}%`,
                    width: `${size}cqw`,
                    height: `${size}cqw`,
                    animationDelay: `${delay}s`
                  }}
                />
              );
            })}
          </div>

          {/* Morphing cuneiform characters */}
          <div className="font-serif text-[7cqw] text-[#4e3629]/65 animate-glitch-char flex gap-[4cqw]">
            <span>𒁹</span>
            <span>𒈫</span>
            <span>𒐈</span>
            <span>𒐉</span>
          </div>
        </div>
      )}

      {/* Left Vertical Cylinder Seal Impression Navigation */}
      {renderLeftNavigation()}
    </div>
  );
}
