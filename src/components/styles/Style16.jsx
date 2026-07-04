import React from "react";
import { 
  Compass, Eye, Shield, Activity, Database, Layers, Trees, 
  Circle, CheckCircle, ArrowRight, Droplets, Sprout, Wheat, 
  Coins, Scroll, FileText, TrendingUp, UserCheck 
} from "lucide-react";

export const getMetadata = (lang) => {
  const isZh = lang === "zh";
  return {
    id: "16",
    tier: "A",
    density: "high",
    name: isZh ? "中世纪三区轮作制健康监测" : "Medieval Crop Rotation Health",
    theme: isZh ? "中世纪农业庄园经济制度" : "Manorial Agricultural Economy",
    densityLabel: isZh ? "田垄生态微控" : "Manorial Agro-Monitor",
    colors: { bg: "bg-[#0b140d]", ink: "text-[#f5f5f4]", panel: "border-[#eab308]/15", accent: "text-[#eab308]" },
    typography: { header: "font-serif", body: "font-sans" },
    scenes: [
      {
        id: 1,
        name: isZh ? "休耕与轮作轮盘" : "Fallow & Rotation Wheel",
        beats: [
          { action: isZh ? "启动重力深耕" : "Initiate Heavy Ploughing" },
          { action: isZh ? "秋播冬小麦" : "Sow Winter Wheat" },
          { action: isZh ? "锁定土壤微量元素" : "Lock Soil Trace Elements" }
        ]
      },
      {
        id: 2,
        name: isZh ? "冬麦与春大麦对比" : "Wheat vs Barley Field",
        beats: [
          { action: isZh ? "扫描冬麦氮含量" : "Scan Wheat Nitrogen" },
          { action: isZh ? "春播大麦与豌豆" : "Sow Spring Barley" },
          { action: isZh ? "激活生物固氮平衡" : "Activate Nitrogen Balance" }
        ]
      },
      {
        id: 3,
        name: isZh ? "三场轮作时间轴" : "Three-Field Rotation Timeline",
        beats: [
          { action: isZh ? "冬麦成熟与秋收" : "Winter Wheat Harvest" },
          { action: isZh ? "春大麦萌芽与休耕" : "Spring Barley Sprout" },
          { action: isZh ? "执行三区空间大轮换" : "Execute Field Rotation" }
        ]
      },
      {
        id: 4,
        name: isZh ? "庄园产量四象限" : "Manor Yield Quadrant",
        beats: [
          { action: isZh ? "核算冬麦产量" : "Audit Winter Wheat Yield" },
          { action: isZh ? "核算大麦与牧草" : "Audit Barley & Pasture" },
          { action: isZh ? "核算什一税与净收益" : "Audit Tithe & Net Revenue" }
        ]
      },
      {
        id: 5,
        name: isZh ? "皇家庄园收割总账" : "Royal Manor Harvest Ledger",
        beats: [
          { action: isZh ? "载入谷物收成细账" : "Load Grain Inventory" },
          { action: isZh ? "并轨计算教会什一税" : "Compile Church Tithe" },
          { action: isZh ? "加盖皇家御用红蜡印章" : "Stamp Royal Wax Seal" }
        ]
      }
    ]
  };
};

export default function Style16({ scene, beat, language, onNavigate, isThumbnail }) {
  const isZh = language === "zh";
  const meta = getMetadata(language);

  // Scene 1: Premise - Ultralight (Organic agricultural cover)
  const renderScene1 = () => {
    return (
      <div className="w-full h-full relative flex items-center justify-between gap-[4cqw] px-[6cqw] py-[4cqh] bg-[#0b140d] select-none">
        {/* Left Side: Title & Description */}
        <div className="w-[38cqw] flex flex-col justify-center text-left z-10">
          <div className="font-mono text-[1.1cqw] text-[#eab308] font-black tracking-[0.3cqw] uppercase opacity-80 mb-[1.5cqh] animate-pulse">
            {isZh ? "—— 皇家庄园土地测度与生态监测" : "—— MANORIAL LAND MEASUREMENT & AGRO-MONITOR"}
          </div>
          <h1 className="text-[3.8cqw] font-serif font-black leading-[1.1] text-[#eab308] drop-shadow-[0_0_15px_rgba(234,179,8,0.3)] tracking-tight">
            {isZh ? "中世纪三区轮作制" : "MEDIEVAL THREE-FIELD"}
            <br />
            {isZh ? "健康监测系统" : "CROP ROTATION HEALTH"}
          </h1>
          <p className="text-[1.2cqw] text-stone-300 font-sans mt-[3cqh] leading-[1.65] opacity-90 border-l-2 border-[#eab308]/40 pl-[1.5cqw]">
            {isZh 
              ? "在温切斯特皇家庄园的肥沃垄沟间，经典的三区轮作制维系着土地的永续生命。通过将耕地划分为冬播区、春播区与休耕牧场，我们得以在没有化肥的中世纪，实现地力的完美自我修复与谷物的稳定丰收。" 
              : "Across the fertile furrows of the Winchester Royal Manor, the classic three-field rotation sustains the eternal life of the soil. By dividing arable land into autumn-sown, spring-sown, and fallow pasture, we achieve perfect soil self-regeneration and stable grain yields in the medieval era."}
          </p>

          {/* Interactive Beat Status */}
          <div className="mt-[4cqh] flex items-center gap-[1.2cqw]">
            <div className="w-[1cqw] h-[1cqw] rounded-full bg-[#eab308] animate-ping" />
            <span className="font-mono text-[1.1cqw] text-[#eab308] font-bold tracking-widest uppercase">
              {beat === 0 && (isZh ? "重力深耕：翻松淤泥，凝聚氮肥" : "HEAVY PLOUGHING: LOOSENING SILT CLAY")}
              {beat === 1 && (isZh ? "秋播冬麦：开垄覆土，越冬积累" : "WINTER SOWING: FURROW STARCH ACCUMULATION")}
              {beat >= 2 && (isZh ? "微量元素：锁定垄沟底层有效氮" : "TRACE ELEMENTS: LOCKING DEEP SOIL NITROGEN")}
            </span>
          </div>
        </div>

        {/* Right Side: Beautiful SVG Medieval Plow & Rotation Wheel */}
        <div className="flex-1 h-full flex items-center justify-center z-10">
          <svg viewBox="0 0 500 500" className="w-[32cqw] h-[32cqw] overflow-visible">
            <defs>
              <filter id="barley-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <radialGradient id="soil-grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#eab308" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#0b140d" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Background soil glow */}
            <circle cx="250" cy="250" r="220" fill="url(#soil-grad)" />

            {/* Outer three-field wheel rotation */}
            <circle cx="250" cy="250" r="200" fill="none" stroke="#eab308" strokeWidth="1" strokeDasharray="4 8" className="opacity-40" />
            <circle cx="250" cy="250" r="180" fill="none" stroke="#eab308" strokeWidth="1.5" className="opacity-60" />

            {/* Three sectors */}
            <line x1="250" y1="250" x2="250" y2="70" stroke="#eab308" strokeWidth="2" className="opacity-50" />
            <line x1="250" y1="250" x2="94" y2="340" stroke="#eab308" strokeWidth="2" className="opacity-50" />
            <line x1="250" y1="250" x2="406" y2="340" stroke="#eab308" strokeWidth="2" className="opacity-50" />

            {/* Sector labels */}
            <g transform="translate(250, 105)" className="text-center">
              <text textAnchor="middle" fill="#eab308" className="font-serif text-[11px] font-bold tracking-wider">
                {isZh ? "冬小麦田 / WINTER WHEAT" : "WINTER WHEAT FIELD"}
              </text>
              <text textAnchor="middle" fill="#a3a3a3" className="font-sans text-[8px]">
                {isZh ? "秋播作物 / Autumn Sown" : "Autumn Sown Crop"}
              </text>
            </g>
            <g transform="translate(135, 305)" className="text-center">
              <text textAnchor="middle" fill="#eab308" className="font-serif text-[11px] font-bold tracking-wider">
                {isZh ? "春大麦田 / SPRING BARLEY" : "SPRING BARLEY FIELD"}
              </text>
              <text textAnchor="middle" fill="#a3a3a3" className="font-sans text-[8px]">
                {isZh ? "春播作物 / Spring Sown" : "Spring Sown Crop"}
              </text>
            </g>
            <g transform="translate(365, 305)" className="text-center">
              <text textAnchor="middle" fill="#eab308" className="font-serif text-[11px] font-bold tracking-wider">
                {isZh ? "休耕牧场 / FALLOW MEADOW" : "FALLOW MEADOW"}
              </text>
              <text textAnchor="middle" fill="#a3a3a3" className="font-sans text-[8px]">
                {isZh ? "地力恢复 / Soil Recovery" : "Soil Rest & Grazing"}
              </text>
            </g>

            {/* Rotation arrows */}
            <path d="M 270 50 A 200 200 0 0 1 430 290" fill="none" stroke="#eab308" strokeWidth="2" strokeDasharray="5 5" className="opacity-30" />
            <path d="M 390 320 A 200 200 0 0 1 110 320" fill="none" stroke="#eab308" strokeWidth="2" strokeDasharray="5 5" className="opacity-30" />
            <path d="M 70 290 A 200 200 0 0 1 230 50" fill="none" stroke="#eab308" strokeWidth="2" strokeDasharray="5 5" className="opacity-30" />

            {/* Active rotation flow (grows as beat advances) */}
            {beat >= 1 && (
              <g className="opacity-80">
                <path d="M 250 70 A 180 180 0 0 1 406 340" fill="none" stroke="#eab308" strokeWidth="3" className="animate-flow" filter="url(#barley-glow)" />
                <path d="M 406 340 A 180 180 0 0 1 94 340" fill="none" stroke="#eab308" strokeWidth="3" className="animate-flow" filter="url(#barley-glow)" />
                <path d="M 94 340 A 180 180 0 0 1 250 70" fill="none" stroke="#eab308" strokeWidth="3" className="animate-flow" filter="url(#barley-glow)" />
              </g>
            )}

            {/* Medieval Heavy Plow (Carruca) in the center */}
            <g transform="translate(150, 200) scale(0.4)" className="stroke-[#eab308] fill-none stroke-2">
              {/* Wheels */}
              <circle cx="100" cy="200" r="35" strokeWidth="3" />
              <circle cx="100" cy="200" r="5" fill="#eab308" />
              <line x1="100" y1="165" x2="100" y2="235" />
              <line x1="65" y1="200" x2="135" y2="200" />
              <line x1="75" y1="175" x2="125" y2="225" />
              <line x1="75" y1="225" x2="125" y2="175" />

              <circle cx="180" cy="200" r="25" strokeWidth="3" />
              <circle cx="180" cy="200" r="5" fill="#eab308" />
              <line x1="180" y1="175" x2="180" y2="225" />
              <line x1="155" y1="200" x2="205" y2="200" />

              {/* Frame / Beam */}
              <path d="M 100 200 L 350 150" strokeWidth="4" />
              <path d="M 180 200 L 220 160" strokeWidth="3" />

              {/* Coulter (vertical blade) */}
              <path d="M 280 160 L 280 230 L 260 250 Z" fill="#eab308" fillOpacity="0.2" strokeWidth="3" />

              {/* Moldboard (curved plate) */}
              <path d="M 280 230 Q 320 230 350 200 Q 330 250 280 250 Z" fill="#eab308" fillOpacity="0.4" strokeWidth="3" />

              {/* Handles */}
              <path d="M 320 155 L 420 100" strokeWidth="4" />
              <path d="M 320 155 L 400 120 L 420 220" strokeWidth="3" />
              <path d="M 420 100 L 440 100" strokeWidth="3" />
              <path d="M 420 220 L 440 220" strokeWidth="3" />

              {/* Soil furrow line under plow */}
              <path d="M 50 240 Q 150 240 250 245 T 450 240" stroke="#78350f" strokeWidth="4" strokeDasharray="5 5" className="opacity-60" />
            </g>

            {/* Soil trace elements indicators (grows as beat advances) */}
            {beat >= 2 && (
              <g className="opacity-90 animate-pulse">
                <circle cx="250" cy="250" r="10" fill="#eab308" filter="url(#barley-glow)" />
                <text x="250" y="280" textAnchor="middle" fill="#eab308" className="font-mono text-[10px] font-bold">
                  {isZh ? "土壤有效氮：优 (24 ppm)" : "SOIL NITROGEN: OPTIMAL (24 ppm)"}
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>
    );
  };

  // Scene 2: Dual - Light (Wheat Field vs. Barley Field)
  const renderScene2 = () => {
    return (
      <div className="w-full h-full relative flex items-center justify-between gap-[4cqw] px-[6cqw] py-[4cqh] bg-[#0b140d] select-none">
        {/* Left Side: Non-symmetric Soil Plots */}
        <div className="w-[45cqw] h-full flex items-center justify-center z-10">
          <svg viewBox="0 0 800 350" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="soil-left" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#451a03" />
                <stop offset="100%" stopColor="#1c0d02" />
              </linearGradient>
              <linearGradient id="soil-right" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#27272a" />
                <stop offset="100%" stopColor="#09090b" />
              </linearGradient>
              <filter id="yellow-glow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Left Plot: Winter Wheat (60% width) */}
            <g transform="translate(50, 40)">
              <polygon points="0,120 240,60 440,150 200,210" fill="url(#soil-left)" stroke="#eab308" strokeWidth="1" className="opacity-80" />
              
              {/* Ridges and furrows */}
              <line x1="40" y1="110" x2="240" y2="160" stroke="#78350f" strokeWidth="2" className="opacity-60" />
              <line x1="80" y1="100" x2="280" y2="150" stroke="#78350f" strokeWidth="2" className="opacity-60" />
              <line x1="120" y1="90" x2="320" y2="140" stroke="#78350f" strokeWidth="2" className="opacity-60" />
              <line x1="160" y1="80" x2="360" y2="130" stroke="#78350f" strokeWidth="2" className="opacity-60" />

              {/* Wheat shoots (golden stalks) */}
              <g className="stroke-[#eab308] fill-none stroke-1.5">
                <path d="M 80 120 Q 75 100 85 90 M 85 90 Q 90 85 85 80" />
                <path d="M 120 110 Q 115 90 125 80 M 125 80 Q 130 75 125 70" />
                <path d="M 160 100 Q 155 80 165 70 M 165 70 Q 170 65 165 60" />
                <path d="M 140 145 Q 135 125 145 115 M 145 115 Q 150 110 145 105" />
                <path d="M 180 135 Q 175 115 185 105 M 185 105 Q 190 100 185 95" />
                <path d="M 220 125 Q 215 95 225 85 M 225 85 Q 230 80 225 75" />
              </g>

              {/* Scanning line (active at beat === 0) */}
              {beat === 0 && (
                <g className="animate-pulse">
                  <polygon points="0,120 240,60 440,150 200,210" fill="none" stroke="#eab308" strokeWidth="3" filter="url(#yellow-glow)" />
                  <line x1="100" y1="95" x2="340" y2="185" stroke="#eab308" strokeWidth="4" filter="url(#yellow-glow)" className="animate-scan" />
                </g>
              )}

              {/* Labels */}
              <text x="50" y="190" fill="#eab308" className="font-serif text-[14px] font-bold">
                {isZh ? "第一区：冬小麦田 (秋播)" : "Zone I: Winter Wheat (Autumn Sown)"}
              </text>
              <text x="50" y="205" fill="#a3a3a3" className="font-mono text-[9px]">
                {isZh ? "有效氮: 24 ppm (高) | 土壤水分: 58%" : "NITROGEN: 24 ppm (HIGH) | MOISTURE: 58%"}
              </text>
            </g>

            {/* Right Plot: Spring Barley (40% width) */}
            <g transform="translate(480, 40)">
              <polygon points="0,120 160,80 280,140 120,180" fill="url(#soil-right)" stroke={beat >= 1 ? "#22c55e" : "#4b5563"} strokeWidth="1" className="opacity-80" />
              
              {/* Ridges and furrows */}
              <line x1="30" y1="110" x2="150" y2="150" stroke="#3f3f46" strokeWidth="1.5" className="opacity-60" />
              <line x1="60" y1="100" x2="180" y2="140" stroke="#3f3f46" strokeWidth="1.5" className="opacity-60" />
              <line x1="90" y1="90" x2="210" y2="130" stroke="#3f3f46" strokeWidth="1.5" className="opacity-60" />

              {/* Barley shoots (green shoots, active at beat >= 1) */}
              {beat >= 1 ? (
                <g className="stroke-[#22c55e] fill-none stroke-1.5 animate-pulse">
                  <path d="M 50 120 Q 45 105 52 98" />
                  <path d="M 52 98 Q 58 95 50 90" />
                  <path d="M 90 110 Q 85 95 92 88" />
                  <path d="M 110 140 Q 105 125 112 118" />
                  <path d="M 150 130 Q 145 115 152 108" />
                </g>
              ) : (
                <g className="opacity-20 stroke-stone-600 fill-none stroke-1">
                  <circle cx="50" cy="120" r="2" />
                  <circle cx="90" cy="110" r="2" />
                  <circle cx="110" cy="140" r="2" />
                  <circle cx="150" cy="130" r="2" />
                </g>
              )}

              {/* Nitrogen-fixing bacteria glow (active at beat >= 2) */}
              {beat >= 2 && (
                <g className="opacity-90">
                  <circle cx="120" cy="110" r="15" fill="none" stroke="#22c55e" strokeWidth="1" strokeDasharray="2 2" className="animate-spin-slow" />
                  <circle cx="120" cy="110" r="4" fill="#22c55e" filter="url(#yellow-glow)" />
                  <text x="120" y="85" fill="#22c55e" className="font-mono text-[8px] font-bold" textAnchor="middle">RHIZOBIUM ACTIVE</text>
                </g>
              )}

              {/* Labels */}
              <text x="20" y="190" fill={beat >= 1 ? "#22c55e" : "#a3a3a3"} className="font-serif text-[14px] font-bold">
                {isZh ? "第二区：春大麦田 (春播)" : "Zone II: Spring Barley (Spring Sown)"}
              </text>
              <text x="20" y="205" fill="#a3a3a3" className="font-mono text-[9px]">
                {isZh ? "有效氮: 18 ppm (中) | 土壤水分: 45%" : "NITROGEN: 18 ppm (MED) | MOISTURE: 45%"}
              </text>
            </g>

            {/* Nitrogen Flow particles (active at beat >= 2) */}
            {beat >= 2 && (
              <g className="opacity-80">
                <path d="M 480 150 Q 400 120 300 160" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeDasharray="5 5" className="animate-flow" />
                <polygon points="300,160 308,155 306,164" fill="#22c55e" />
                <text x="400" y="110" fill="#22c55e" className="font-mono text-[9px] font-bold" textAnchor="middle">
                  {isZh ? "生物固氮反哺 (+6 ppm)" : "BIOLOGICAL NITROGEN FIXATION (+6 ppm)"}
                </text>
              </g>
            )}
          </svg>
        </div>

        {/* Right Side: Copy & Indicators */}
        <div className="w-[38cqw] flex flex-col justify-center text-left z-10">
          <span className="font-mono text-[1cqw] tracking-widest uppercase text-[#eab308] font-bold flex items-center gap-[0.5cqw] mb-[1.5cqh]">
            <span className="w-[0.8cqw] h-[0.8cqw] bg-[#eab308] rounded-full animate-ping" />
            {isZh ? "双区养分对位与生物固氮" : "DUAL-ZONE NUTRIENT & NITROGEN BALANCE"}
          </span>
          <h2 className="text-[2.6cqw] font-serif font-black leading-tight text-[#eab308] mb-[2cqh]">
            {isZh ? "冬小麦田 vs. 春大麦田" : "WHEAT FIELD VS. BARLEY FIELD"}
          </h2>
          <p className="text-[1.1cqw] leading-[1.6] text-stone-300 font-sans mb-[3cqh]">
            {isZh 
              ? "在庄园的非对称土地布局中，第一区冬小麦代表着前一年秋天的播种，经过漫长冬天的积温，叶面积指数已达到健康峰值；第二区春大麦与春豌豆混播，利用豆科植物根瘤菌进行高能生物固氮，将空气中的氮气转化为可吸收的土壤养分，反哺春作物的发育，实现天然的氮平衡。" 
              : "In the asymmetric land layout of the manor, Zone I winter wheat represents the sowing of the previous autumn. After a long winter of heat accumulation, the leaf area index has reached a healthy peak. Zone II spring barley is co-sown with spring peas, harnessing root nodule bacteria of legumes for high-energy biological nitrogen fixation, converting atmospheric nitrogen into absorbable soil nutrients to fuel crop growth and achieve natural nitrogen balance."}
          </p>

          {/* Indicators */}
          <div className="grid grid-cols-2 gap-[1.5cqw] p-[1.5cqw] bg-[#121c11] border border-[#eab308]/20 rounded-xl font-mono text-[0.95cqw] text-stone-300">
            <div>
              <span className="opacity-60 text-[0.8cqw] block">{isZh ? "一区冬麦叶绿素反射" : "ZONE I CHLOROPHYLL"}</span>
              <span className="font-bold text-[#eab308]">
                {beat >= 0 ? "94.2% (OPTIMAL)" : "STANDBY"}
              </span>
            </div>
            <div>
              <span className="opacity-60 text-[0.8cqw] block">{isZh ? "二区根瘤固氮活性" : "ZONE II NITROGEN FIXATION"}</span>
              <span className="font-bold text-[#eab308]">
                {beat >= 1 ? "ACTIVE (100%)" : "HOLD"}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Scene 3: Process - Standard (Three-field seasonal rotation timeline)
  const renderScene3 = () => {
    return (
      <div className="w-full h-full relative flex flex-col justify-between px-[6cqw] py-[4cqh] bg-[#0b140d] select-none">
        {/* Header */}
        <div className="border-b border-[#eab308]/15 pb-[1.5cqh] flex justify-between items-end shrink-0 z-10">
          <div>
            <h2 className="font-serif text-[1.8cqw] font-black text-[#eab308] tracking-tight uppercase flex items-center gap-[0.5cqw]">
              <Activity className="w-[2cqw] h-[2cqw] text-[#eab308]" />
              {isZh ? "三区季节轮作时间轴" : "THREE-FIELD SEASONAL ROTATION TIMELINE"}
            </h2>
            <p className="font-mono text-[0.85cqw] text-stone-400 mt-1">
              {isZh ? "冬小麦、春大麦与休耕牧场的三年空间大轮换" : "The 3-Year Spatial Rotation Cycle of Wheat, Barley, and Fallow"}
            </p>
          </div>
          <div className="bg-[#121c11] border border-[#eab308]/20 px-3 py-1.5 rounded-lg text-[#eab308] font-mono text-[0.75cqw] font-bold">
            {isZh ? "轮作大流转：三年周期" : "ROTATION CYCLE: 3-YEAR LOOP"}
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="flex-1 grid grid-cols-3 gap-[2cqw] my-[3cqh] items-stretch z-10">
          {[
            { 
              id: 0,
              name: isZh ? "第一阶段：冬麦成熟与秋收" : "Phase I: Winter Wheat Harvest", 
              season: isZh ? "秋收期 (8月 - 10月)" : "Autumn Harvest (Aug - Oct)", 
              icon: "🌾", 
              desc: isZh ? "八月金黄，收割一区冬小麦；二区春大麦收获并留茬；三区闲置翻耕，作好秋播冬麦底熵整备。" : "August gold. Harvesting Zone I winter wheat; Zone II spring barley harvested with stubble left; Zone III ploughed deep for autumn sowing.",
              active: beat >= 0,
              color: "border-[#eab308] shadow-[0_0_20px_rgba(234,179,8,0.25)]"
            },
            { 
              id: 1,
              name: isZh ? "第二阶段：春大麦萌芽与休耕" : "Phase II: Spring Barley Sprout", 
              season: isZh ? "春播期 (3月 - 5月)" : "Spring Sowing (Mar - May)", 
              icon: "🌱", 
              desc: isZh ? "冬去春来，二区播撒春大麦与春豌豆；一区改作休耕牧场，利用牲畜粪尿缓慢反哺恢复肥力；三区冬麦出苗葱郁。" : "Spring returns. Sowing spring barley and peas in Zone II; Zone I becomes fallow pasture to restore fertility with manure; Zone III winter wheat sprouts lushly.",
              active: beat >= 1,
              color: "border-[#eab308] shadow-[0_0_20px_rgba(234,179,8,0.25)]"
            },
            { 
              id: 2,
              name: isZh ? "第三阶段：执行三区空间大轮换" : "Phase III: Execute Field Rotation", 
              season: isZh ? "空间大轮转 (三年循环)" : "Spatial Rotation (3-Year Loop)", 
              icon: "🔄", 
              desc: isZh ? "执行经典三区大轮换：一区改春播；二区改休耕；三区改冬麦，达成永续循环的完美大账册，地力永不枯竭。" : "Executing the classic three-field rotation: Zone I moves to spring, Zone II to fallow, Zone III to winter wheat. Loop closes, soil never depletes.",
              active: beat >= 2,
              color: "border-[#eab308] shadow-[0_0_20px_rgba(234,179,8,0.25)]"
            }
          ].map((item) => {
            const isCardActive = beat === item.id;
            return (
              <div 
                key={item.id} 
                className={`p-[1.8cqw] rounded-xl border bg-[#121c11]/90 flex flex-col justify-between transition-all duration-500 ${
                  isCardActive 
                    ? item.color + " scale-[1.03] z-10" 
                    : item.active 
                      ? "border-[#eab308]/30 opacity-60 scale-100" 
                      : "border-stone-800 opacity-20 scale-95"
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className="text-[2.2cqw]">{item.icon}</span>
                  <span className={`text-[0.75cqw] font-mono font-bold px-[0.6cqw] py-[0.2cqh] rounded ${
                    isCardActive ? "bg-[#eab308] text-[#0b140d]" : "bg-[#eab308]/10 text-[#eab308]"
                  }`}>
                    {item.season}
                  </span>
                </div>
                <div className="mt-[2cqh]">
                  <h3 className="font-serif font-black text-[1.3cqw] text-[#eab308] mb-[1cqh]">{item.name}</h3>
                  <p className="text-[0.9cqw] text-stone-300 font-sans leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="border-t border-[#eab308]/10 pt-[1.2cqh] flex justify-between text-[0.8cqw] font-mono opacity-60 z-10">
          <span>{isZh ? "大庄园主三区轮替账册" : "THREE-FIELD ROTATION COMPLIANCE LEDGER_XVI // COMPILING"}</span>
          <span>VERIFICATION CODE: 0x16_CROP_ROTATION</span>
        </div>
      </div>
    );
  };

  // Scene 4: Matrix - Dense (Manor Agricultural Yield Quadrant)
  const renderScene4 = () => {
    return (
      <div className="w-full h-full relative flex flex-col justify-between px-[6cqw] py-[4cqh] bg-[#0b140d] select-none">
        {/* Header */}
        <div className="border-b border-[#eab308]/15 pb-[1.5cqh] flex justify-between items-end shrink-0 z-10">
          <div>
            <h2 className="font-serif text-[1.8cqw] font-black text-[#eab308] tracking-tight uppercase flex items-center gap-[0.5cqw]">
              <Layers className="w-[2cqw] h-[2cqw] text-[#eab308]" />
              {isZh ? "庄园农产收益四象限矩阵" : "MANOR AGRICULTURAL YIELD QUADRANT"}
            </h2>
            <p className="font-mono text-[0.85cqw] text-stone-400 mt-1">
              {isZh ? "冬麦产量、大麦吨位、休耕载畜量与皇家税收的联合核算" : "Joint Audit of Wheat Yield, Barley Tons, Grazing Capacity, and Taxes"}
            </p>
          </div>
          <div className="bg-[#121c11] border border-[#eab308]/20 px-3 py-1.5 rounded-lg text-[#eab308] font-mono text-[0.75cqw] font-bold">
            {isZh ? "高密度收益核算" : "HIGH-DENSITY YIELD MATRIX"}
          </div>
        </div>

        {/* 2x2 Grid */}
        <div className="flex-1 grid grid-cols-2 gap-[2cqw] my-[3cqh] z-10">
          {[
            {
              id: 0,
              title: isZh ? "冬小麦产量 / WINTER WHEAT YIELD" : "WINTER WHEAT YIELD",
              val: "320 Bushels / Acre",
              info: isZh ? "淀粉转化率 94.2% | 灌浆饱满，麦粒金黄" : "Starch conversion rate 94.2% | Golden grains",
              growth: "+12.4% vs Last Year",
              icon: Wheat,
              active: beat === 0
            },
            {
              id: 1,
              title: isZh ? "春大麦与饲料 / SPRING BARLEY & FORAGE" : "SPRING BARLEY & FORAGE",
              val: "185 Tons Total",
              info: isZh ? "燕麦精料折损比 4.2% | 满足庄园牲畜越冬饲料" : "Oat forage weight 42 Tons | Sufficient animal feed",
              growth: "+8.5% vs Last Year",
              icon: Sprout,
              active: beat === 1
            },
            {
              id: 2,
              title: isZh ? "休耕牧场载畜量 / FALLOW GRAZING CAPACITY" : "FALLOW GRAZING CAPACITY",
              val: "450 Sheep Heads",
              info: isZh ? "土壤氮素回升 +8 ppm | 牲畜粪尿与落叶缓慢反哺" : "Soil nitrogen recovery +8 ppm | Manure fertilization",
              growth: "Optimal Soil Recovery",
              icon: Trees,
              active: beat === 1
            },
            {
              id: 3,
              title: isZh ? "皇家税收与收益 / ROYAL TAXES & REVENUE" : "ROYAL TAXES & REVENUE",
              val: "£42.8 Silver Pennies",
              info: isZh ? "教会什一税 10% | 领主净收益 £28.5" : "Church Tithe 10% | Lord's Net Profit £28.5",
              growth: "Tithe Tax: 10% Church Share",
              icon: Coins,
              active: beat === 2
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className={`p-[1.8cqw] rounded-xl border bg-[#121c11]/90 flex justify-between items-center transition-all duration-500 ${
                item.active 
                  ? "border-[#eab308] shadow-[0_0_20px_rgba(234,179,8,0.25)] scale-[1.02] z-10" 
                  : "border-stone-800 opacity-40 scale-100"
              }`}
            >
              <div className="flex flex-col gap-[0.5cqh] text-left">
                <span className="text-[0.8cqw] font-mono font-bold text-[#eab308] tracking-wider uppercase">{item.title}</span>
                <span className="text-[1.6cqw] font-serif font-black text-stone-100">{item.val}</span>
                <span className="text-[0.9cqw] text-stone-300 font-sans leading-relaxed">{item.info}</span>
                <span className="text-[0.8cqw] font-mono text-emerald-400 font-bold mt-[0.5cqh]">{item.growth}</span>
              </div>
              <item.icon className={`w-[2.5cqw] h-[2.5cqw] transition-all duration-500 ${
                item.active ? "text-[#eab308] scale-110" : "text-stone-600 scale-100"
              }`} />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-[#eab308]/10 pt-[1.2cqh] flex justify-between text-[0.8cqw] font-mono opacity-60 z-10">
          <span>{isZh ? "温切斯特大庄园土地测度学会" : "Winchester Royal Manorial Agricultural Association"}</span>
          <span>{isZh ? "自适应垄沟水流及肥力热阻自对准技术" : "convection soil dynamic feedback controls"}</span>
        </div>
      </div>
    );
  };

  // Scene 5: Ledger - Extreme (Royal Manor Harvest Ledger)
  const renderScene5 = () => {
    return (
      <div className="w-full h-full relative flex flex-col justify-between px-[6cqw] py-[4cqh] bg-[#0b140d] select-none">
        {/* Header */}
        <div className="border-b border-[#eab308]/15 pb-[1.5cqh] flex justify-between items-end shrink-0 z-10">
          <div className="flex items-center gap-3">
            <Database className="w-[2cqw] h-[2cqw] text-[#eab308]" />
            <div>
              <h2 className="font-serif text-[1.8cqw] font-black text-[#eab308] tracking-tight uppercase">
                {isZh ? "皇家庄园收割总账" : "ROYAL MANOR HARVEST LEDGER"}
              </h2>
              <p className="font-mono text-[0.85cqw] text-stone-400 mt-1">
                {isZh ? "温切斯特大庄园谷物收成与什一税终极签发账册" : "Winchester Manor Grain Inventory & Church Tithe Final Sign-off"}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end font-mono text-[0.75cqw] text-stone-500 text-right shrink-0">
            <p><strong>{isZh ? "账册编码：" : "LEDGER_ID: "}</strong>WIN-HARVEST-1086</p>
            <p><strong>{isZh ? "安全级别：" : "CLASS: "}</strong>ROYAL-SECRET-CONFIDENTIAL</p>
          </div>
        </div>

        {/* Main Ledger Content */}
        <div className="flex-1 grid grid-cols-12 gap-[2cqw] my-[2.5cqh] overflow-hidden z-10">
          {/* Left Column: Crop Inventory Table (Col 1-5) */}
          <div className="col-span-5 flex flex-col justify-between border-r border-[#eab308]/10 pr-[1.5cqw] overflow-hidden shrink-0">
            <div className="flex-1 flex flex-col gap-[1.5cqh] justify-center font-mono text-[0.85cqw] text-stone-300">
              <div className="text-[#eab308] font-bold text-[1cqw] border-b border-[#eab308]/20 pb-[0.5cqh] mb-[1cqh] flex justify-between">
                <span>{isZh ? "谷物收成细账" : "GRAIN INVENTORY"}</span>
                <span>{isZh ? "单位: 夸脱" : "UNIT: QUARTERS"}</span>
              </div>
              
              {[
                { name: isZh ? "冬小麦 (Winter Wheat)" : "Winter Wheat", val: "1,240 Qtr", price: "£124.0", status: isZh ? "粮仓 A (满)" : "Granary A (Full)" },
                { name: isZh ? "春大麦 (Spring Barley)" : "Spring Barley", val: "850 Qtr", price: "£68.0", status: isZh ? "粮仓 B (满)" : "Granary B (Full)" },
                { name: isZh ? "黑麦 (Rye Bushels)" : "Rye Bushels", val: "420 Bush", price: "£21.0", status: isZh ? "粮仓 C" : "Granary C" },
                { name: isZh ? "燕麦 (Oats Forage)" : "Oats Forage", val: "680 Bush", price: "£17.0", status: isZh ? "饲料仓" : "Forage Store" }
              ].map((row, idx) => (
                <div key={idx} className="bg-[#121c11]/40 p-[0.8cqw] rounded border border-[#eab308]/10 flex justify-between items-center">
                  <div className="flex flex-col text-left">
                    <span className="text-stone-100 font-bold">{row.name}</span>
                    <span className="text-[0.75cqw] text-stone-500">{row.status}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#eab308] font-bold block">{row.val}</span>
                    <span className="text-[0.75cqw] text-stone-400">{row.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Column: Financial Ledger & Church Tithe (Col 6-9) */}
          <div className="col-span-4 flex flex-col justify-between border-r border-[#eab308]/10 pr-[1.5cqw] overflow-hidden shrink-0">
            <div className="flex-1 flex flex-col gap-[1.5cqh] justify-center font-mono text-[0.85cqw] text-stone-300">
              <div className="text-[#eab308] font-bold text-[1cqw] border-b border-[#eab308]/20 pb-[0.5cqh] mb-[1cqh]">
                {isZh ? "财务核算与教会什一税" : "FINANCIAL LEDGER & TITHE"}
              </div>

              {[
                { name: isZh ? "庄园总产值 (Gross Value)" : "Total Gross Value", val: "£230.0", color: "text-stone-100 font-bold" },
                { name: isZh ? "教会什一税 (Church Tithe 10%)" : "Church Tithe (10%)", val: "-£23.0", color: "text-red-400" },
                { name: isZh ? "皇家税收 (Royal Tax 5%)" : "Royal Tax (5%)", val: "-£11.5", color: "text-red-400" },
                { name: isZh ? "来年留种 (Seed Reserve 15%)" : "Seed Reserve (15%)", val: "-£34.5", color: "text-stone-400" },
                { name: isZh ? "领主净收益 (Net Manorial Profit)" : "Net Manorial Profit", val: "£161.0", color: "text-emerald-400 font-extrabold text-[1cqw]" }
              ].map((row, idx) => (
                <div key={idx} className="flex justify-between items-center py-[0.5cqh] border-b border-stone-800/60">
                  <span className="text-stone-400 text-left">{row.name}</span>
                  <span className={row.color}>{row.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Royal Wax Seal & Verification (Col 10-12) */}
          <div className="col-span-3 flex flex-col justify-between pl-[1cqw] relative shrink-0">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-mono text-[0.9cqw] text-[#eab308] font-bold flex items-center gap-1.5 border-b border-[#eab308]/20 pb-1.5 mb-2">
                  <Scroll className="w-4 h-4 text-[#eab308]" />
                  {isZh ? "皇家审计与印信验证" : "ROYAL AUDIT & SEAL"}
                </h4>
                <p className="font-mono text-[0.75cqw] text-stone-500 text-left leading-relaxed">
                  {isZh 
                    ? "根据《末日审判书》之规定，庄园每年收割账册须经皇家土地测度官审计，并加盖皇家御用红蜡印章方可生效。" 
                    : "According to the Domesday Book, manorial harvest ledgers must be audited by royal land surveyors and stamped with the royal wax seal."}
                </p>
              </div>

              {/* Royal Wax Seal */}
              <div className="flex-1 flex items-center justify-center my-[1.5cqh]">
                {beat >= 2 ? (
                  <div className="animate-sprout">
                    <svg viewBox="0 0 160 160" className="w-[12cqw] h-[12cqw] overflow-visible">
                      <defs>
                        <filter id="seal-glow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="5" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Outer irregular clay shape */}
                      <path 
                        d="M 80 10 C 120 12, 150 30, 148 75 C 146 120, 125 145, 80 148 C 35 150, 12 125, 10 80 C 8 35, 40 8, 80 10 Z" 
                        fill="#991b1b" 
                        stroke="#7f1d1d" 
                        strokeWidth="3" 
                        style={{
                          filter: "drop-shadow(0 10px 15px rgba(153, 27, 27, 0.4))"
                        }}
                      />

                      {/* Inner circular border */}
                      <circle cx="80" cy="80" r="55" fill="none" stroke="#7f1d1d" strokeWidth="2" strokeDasharray="3 3" />
                      <circle cx="80" cy="80" r="50" fill="none" stroke="#7f1d1d" strokeWidth="1.5" />

                      {/* Seal Text */}
                      <path id="seal-text-path" d="M 35 80 A 45 45 0 0 1 125 80" fill="none" stroke="none" />
                      <text className="font-serif text-[8px] font-black tracking-widest fill-[#fca5a5]">
                        <textPath href="#seal-text-path" startOffset="50%" textAnchor="middle">
                          SIGILLUM REGIS HENRICI
                        </textPath>
                      </text>

                      <path id="seal-text-path-bottom" d="M 125 80 A 45 45 0 0 1 35 80" fill="none" stroke="none" />
                      <text className="font-serif text-[8px] font-black tracking-widest fill-[#fca5a5]">
                        <textPath href="#seal-text-path-bottom" startOffset="50%" textAnchor="middle">
                          WINCHESTER MANOR 1086
                        </textPath>
                      </text>

                      {/* Center Crown / Plow Emblem */}
                      <g transform="translate(55, 55) scale(0.3)" className="fill-none stroke-[#fca5a5] stroke-[4px]">
                        <path d="M 10 120 L 10 50 L 50 90 L 80 40 L 110 90 L 150 50 L 150 120 Z" fill="#7f1d1d" />
                        <rect x="10" y="120" width="140" height="15" rx="5" fill="#fca5a5" />
                        <circle cx="10" cy="45" r="5" fill="#fca5a5" />
                        <circle cx="80" cy="35" r="5" fill="#fca5a5" />
                        <circle cx="150" cy="45" r="5" fill="#fca5a5" />
                      </g>

                      {/* Crack lines on wax */}
                      <path d="M 25 35 Q 40 45 50 30" fill="none" stroke="#7f1d1d" strokeWidth="1" className="opacity-60" />
                      <path d="M 130 120 Q 110 110 120 95" fill="none" stroke="#7f1d1d" strokeWidth="1" className="opacity-60" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-[12cqw] h-[12cqw] border border-dashed border-stone-800 rounded-full flex items-center justify-center text-center text-stone-600 font-mono text-[0.8cqw] italic">
                    {isZh ? "等待加盖皇家印章" : "SEAL UNSTAMPED"}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#eab308]/10 pt-[1.2cqh] flex justify-between text-[0.8cqw] font-mono opacity-60 z-10">
          <span>© 1086 - 2026 {isZh ? "温切斯特大庄园土地测度学会" : "Winchester Royal Manorial Agricultural Association"}</span>
          <span>{isZh ? "自适应垄沟水流及肥力热阻自对准技术" : "convection soil dynamic feedback controls"}</span>
        </div>
      </div>
    );
  };

  const renderScene = (s) => {
    switch (s) {
      case 1: return renderScene1();
      case 2: return renderScene2();
      case 3: return renderScene3();
      case 4: return renderScene4();
      case 5: return renderScene5();
      default: return renderScene1();
    }
  };

  // Bespoke Navigation (Agricultural Season Indicator)
  const renderNavigation = () => {
    if (isThumbnail || !onNavigate) return null;

    const nodes = [
      { s: 1, x: 100, name: isZh ? "1. 休耕深耕" : "1. Fallow & Plow" },
      { s: 2, x: 300, name: isZh ? "2. 双区对比" : "2. Wheat & Barley" },
      { s: 3, x: 500, name: isZh ? "3. 三区轮作" : "3. Rotation Timeline" },
      { s: 4, x: 700, name: isZh ? "4. 产量矩阵" : "4. Yield Quadrant" },
      { s: 5, x: 900, name: isZh ? "5. 皇家总账" : "5. Royal Ledger" }
    ];

    const currentX = nodes[scene - 1]?.x || 100;

    return (
      <div className="w-[70cqw] h-[10cqh] mx-auto mt-[1cqh] relative select-none shrink-0 z-20">
        <svg viewBox="0 0 1000 100" className="w-full h-full overflow-visible">
          {/* Furrow line in background */}
          <path 
            d="M 50 60 Q 250 80 500 60 T 950 60" 
            className="fill-none stroke-stone-700 stroke-2" 
          />
          {/* Ploughed soil texture under furrow */}
          <path 
            d="M 50 65 Q 250 85 500 65 T 950 65" 
            className="fill-none stroke-[#78350f] stroke-1 opacity-40" 
            strokeDasharray="2 4"
          />

          {/* Render the 5 nodes */}
          {nodes.map((node) => {
            const isActive = scene === node.s;
            let nodeY = 60;
            if (node.s === 1) nodeY = 64.3;
            if (node.s === 2) nodeY = 69.7;
            if (node.s === 3) nodeY = 60.0;
            if (node.s === 4) nodeY = 50.3;
            if (node.s === 5) nodeY = 55.7;

            return (
              <g 
                key={node.s} 
                className="cursor-pointer group"
                onClick={() => onNavigate(node.s, 0)}
              >
                {/* Invisible larger click area */}
                <circle cx={node.x} cy={nodeY} r={25} className="fill-transparent stroke-none" />

                {/* Glowing background ring for active node */}
                <circle 
                  cx={node.x} 
                  cy={nodeY} 
                  r={isActive ? 14 : 7} 
                  className={`transition-all duration-500 fill-none ${
                    isActive ? "stroke-[#eab308] stroke-2" : "stroke-stone-600 stroke-1 group-hover:stroke-stone-400"
                  }`} 
                  style={{
                    filter: isActive ? "drop-shadow(0 0 8px rgba(234, 179, 8, 0.6))" : "none"
                  }}
                />

                {/* Core seed dot */}
                <circle 
                  cx={node.x} 
                  cy={nodeY} 
                  r={isActive ? 5 : 3} 
                  className={`transition-all duration-500 ${
                    isActive ? "fill-[#eab308]" : "fill-stone-500 group-hover:fill-stone-300"
                  }`} 
                />

                {/* Sprouting plant icon when active */}
                {isActive && (
                  <g 
                    transform={`translate(${node.x}, ${nodeY})`} 
                    className="animate-sprout"
                    style={{ transformOrigin: "0px 0px" }}
                  >
                    {/* Stem */}
                    <line x1="0" y1="0" x2="0" y2="-12" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
                    {/* Left Leaf (SVG Leaf Path with subtle vein line) */}
                    <path d="M 0 -12 Q -8 -17 -14 -10 Q -6 -7 0 -12 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1" />
                    {/* Right Leaf (SVG Leaf Path with subtle vein line) */}
                    <path d="M 0 -12 Q 8 -17 14 -10 Q 6 -7 0 -12 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1" />
                    {/* Little bud/shoot in center */}
                    <circle cx="0" cy="-12" r="1.5" fill="#4ade80" />
                  </g>
                )}

                {/* Node label */}
                <text 
                  x={node.x} 
                  y={nodeY - 25} 
                  textAnchor="middle" 
                  className={`font-serif text-[11px] tracking-wider transition-all duration-500 ${
                    isActive ? "fill-[#eab308] font-bold" : "fill-stone-500 group-hover:fill-stone-400"
                  }`}
                >
                  {node.name}
                </text>
              </g>
            );
          })}

          {/* Sliding seed/sprout indicator along the furrow path */}
          {(() => {
            let currentY = 60;
            if (scene === 1) currentY = 64.3;
            if (scene === 2) currentY = 69.7;
            if (scene === 3) currentY = 60.0;
            if (scene === 4) currentY = 50.3;
            if (scene === 5) currentY = 55.7;

            return (
              <g style={{ transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)" }} transform={`translate(${currentX}, ${currentY})`}>
                <circle 
                  cx={0} 
                  cy={0} 
                  r={10} 
                  className="fill-[#eab308]/20 filter blur-[3px]" 
                />
                <circle 
                  cx={0} 
                  cy={0} 
                  r={4} 
                  className="fill-[#eab308]" 
                />
              </g>
            );
          })()}
        </svg>
      </div>
    );
  };

  return (
    <div className="w-full h-full bg-[#0b140d] text-stone-200 relative overflow-hidden font-sans p-[3cqw] flex flex-col justify-between select-none">
      {/* Self-contained style block for Google Fonts and Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Inter:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        
        .font-serif {
          font-family: 'Cinzel', 'Playfair Display', Georgia, serif;
        }
        
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
        
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes flow-dash {
          to { stroke-dashoffset: -40; }
        }
        
        @keyframes scan-line {
          0% { transform: translateY(-20px); opacity: 0.3; }
          50% { opacity: 1; }
          100% { transform: translateY(180px); opacity: 0.3; }
        }
        
        @keyframes sprout-grow {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.15); opacity: 0.9; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .animate-spin-slow {
          animation: rotate-slow 30s linear infinite;
        }
        
        .animate-flow {
          stroke-dasharray: 8 12;
          animation: flow-dash 1.5s linear infinite;
        }
        
        .animate-scan {
          animation: scan-line 3s ease-in-out infinite;
        }
        
        .animate-sprout {
          animation: sprout-grow 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>

      {/* Main active scene view using Vertical Spatial Viewport Track */}
      <div className="flex-1 w-full relative overflow-hidden">
        <div 
          className="flex flex-col h-[500%] w-full transition-transform duration-[1200ms]"
          style={{
            transform: `translateY(-${(scene - 1) * 20}%)`,
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          <div className="w-full h-[20%] shrink-0">{renderScene(1)}</div>
          <div className="w-full h-[20%] shrink-0">{renderScene(2)}</div>
          <div className="w-full h-[20%] shrink-0">{renderScene(3)}</div>
          <div className="w-full h-[20%] shrink-0">{renderScene(4)}</div>
          <div className="w-full h-[20%] shrink-0">{renderScene(5)}</div>
        </div>
      </div>

      {/* Bespoke Navigation (Agricultural Season Indicator) */}
      {renderNavigation()}
    </div>
  );
}
