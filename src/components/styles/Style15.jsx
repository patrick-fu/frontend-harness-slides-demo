import React from "react";
import { Compass, Eye, Shield, Activity, Database, Layers, Trees, Circle, CheckCircle, ArrowRight } from "lucide-react";

export const getMetadata = (lang) => ({
  id: "15",
  tier: "B",
  name: lang === "zh" ? "枯山水禅意空间布局" : "Zen Garden Karesansui Layout",
  theme: lang === "zh" ? "日本园林美学空间解析" : "Zen Garden Space Aesthetics",
  densityLabel: lang === "zh" ? "枯山水平衡" : "Meditative Bento Puzzle",
  colors: { bg: "bg-[#faf9f5]", ink: "text-[#2c2722]", panel: "border-[#4a4035]/15", accent: "text-[#5c5043]" },
  typography: { header: "font-serif", body: "font-sans" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "石组置立与白砂波纹" : "Ishigumi Placement & Gravel Raking",
      beats: [
        { id: 1, action: lang === "zh" ? "三尊石立" : "Place San-zon", title: lang === "zh" ? "主石置立与重力凝聚" : "San-zon Monolith Center Placement", body: lang === "zh" ? "于白砂中心置立挺拔的“三尊石”主尊，其势雄浑，牢牢锁住整座庭院的视觉重力轴心。" : "Erecting the tall, majestic San-zon stone group at the center of the garden, securing the global visual gravity pivot." },
        { id: 2, action: lang === "zh" ? "耙纹生波" : "Rake concentric", title: lang === "zh" ? "同心圆白砂波纹耙绘" : "Raking Concentric Gravel Sand Waves", body: lang === "zh" ? "手执木耙，于主石周围细密耙制同心圆沙浪，线描重叠起伏，如水波微动，荡涤杂念。" : "Holding the wooden rake, drawing delicate concentric ripples around the stone core, resembling quiet water waves." },
        { id: 3, action: lang === "zh" ? "润苔常锁" : "Lock Moss", title: lang === "zh" ? "石底润苔边缘常青锁定" : "Moss Boundary Edge Lock", body: lang === "zh" ? "精确框定组石底围的温润绿苔边界，实现虚实过渡，锁定初始空间气场，免遭风蚀侵扰。" : "Delineating the damp green moss boundaries at the stone's base, locking initial spatial focus and moisture." }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "白砂潮汐与副石留白对峙" : "Gravel Tides & Asymmetric Balance",
      beats: [
        { id: 1, action: lang === "zh" ? "白砂生澜" : "Rake Tides", title: lang === "zh" ? "大洋潮汐白砂波纹耙绘" : "Combing Parallel Ocean Waves", body: lang === "zh" ? "于平整白砂面耙出起伏的长条平行波纹，错落有致，模拟大洋潮涨潮落的浩瀚水体动能。" : "Drawing long parallel wavy sand lines across the gravel bed, simulating majestic tidal swells and hydrology." },
        { id: 2, action: lang === "zh" ? "配立副石" : "Place Sub-stone", title: lang === "zh" ? "副石对角遥设对位" : "Diagonal Sub-stone Arrangement", body: lang === "zh" ? "于庭院远端遥设副石数块，与中心主尊形成对角杠杆，在留白中交织出无言的声势拉锯。" : "Placing smaller auxiliary stones diagonally opposite, generating leverage tension in the white void." },
        { id: 3, action: lang === "zh" ? "空境对齐" : "Align Void", title: lang === "zh" ? "石势体积与空境留白对齐" : "Stone-to-Void Density Alignment", body: lang === "zh" ? "极高置信度对齐组石实体体积与白砂留白的比率，达成空色相和、无画而妙的古典日本美学。" : "Aligning rates of solid rock volumes and sand voids with precision, reaching perfect Japanese Ma harmony." }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "枯山水空间演化三阶段" : "Three Historical Layout Epochs",
      beats: [
        { id: 1, action: lang === "zh" ? "独石守真" : "Heian Solitary", title: lang === "zh" ? "平安时代独石写意期 (BC 1100)" : "Heian Era Monolithic Focus (1100 BC)", body: lang === "zh" ? "古典极简禅风之始。独石耸立，周圈白砂不著苔尘，留白比高达80%以上，空灵悠远。" : "Heian minimalist style. A solitary monolith rises amidst combed white sand. Sand voids exceed 80% to focus focus." },
        { id: 2, action: lang === "zh" ? "三尊对峙" : "Muromachi Triad", title: lang === "zh" ? "室町时代蓬莱三尊期 (BC 1450)" : "Muromachi Era Triadic Harmony (1450 BC)", body: lang === "zh" ? "经典禅宗园林鼎盛期。主、副、客三尊石鼎足而立，中设低平苔岛勾连，空间层次紧凑咬合。" : "Muromachi peak Zen style. Three stones (Master, Sub, Guest) stand as a triad with low moss bridges." },
        { id: 3, action: lang === "zh" ? "群石共鸣" : "Edo Collective", title: lang === "zh" ? "江户时代七五三群石期 (BC 1700)" : "Edo Era Seven-Five-Three Grouping (1700 BC)", body: lang === "zh" ? "精巧写意大成期。置石依七五三奇数排列，如仙岛漂浮，砂浪翻卷，群山万壑尽纳盆中。" : "Edo period collective style. Rocks set in odd ratios (7-5-3) like floating islands, fully capturing epic geography." }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "质心激光测绘与阴影阻尼校正" : "Visual Centroid Scan & Shadow Ratios",
      beats: [
        { id: 1, action: lang === "zh" ? "激光扫质" : "Scan Centroid", title: lang === "zh" ? "置石质心与几何轴线扫描" : "Stones Volumetric & Gravity Scan", body: lang === "zh" ? "光学测定各石组三维质心及视重力矩平衡线，保障组石排列不偏不斜，视觉分量极为平稳。" : "Scanning stones three-dimensional volumetric centers and visual gravity lines, securing perfect balance." },
        { id: 2, action: lang === "zh" ? "槽深微调" : "Adjust Rake", title: lang === "zh" ? "白砂槽深自适应阴影校正" : "Sand Wave Contrast Tuning", body: lang === "zh" ? "自适应调节耙沙槽线深浅度，控制晨昏侧光阴影比率，平抑高对比明暗，维护古雅气场。" : "Modulating gravel furrow depths to adapt morning/dusk shadows, removing bright spots to preserve silence." },
        { id: 3, action: lang === "zh" ? "意境合规" : "Zen Audit", title: lang === "zh" ? "枯山水意境空间平衡大度量" : "The Zen Space Aesthetic Proof Ledger", body: lang === "zh" ? "累算对角重力平衡线合规指数，测算空间阻尼常数，排除偶然散乱，生成非遗设计大账册。" : "Aggregating diagonal gravity balancing constants, compiling certified Zen spatial layout proof logs." }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "非遗名园枯山水大成控制台" : "Grand Zen Karesansui Layout Portal",
      beats: [
        { id: 1, action: lang === "zh" ? "并轨画卷" : "Stream Garden", title: lang === "zh" ? "禅意空间大流编译系统" : "Classic Zen Garden Live Stream", body: lang === "zh" ? "名园（龙安寺、大德寺）空间数据并流编译，白砂谱频与石组体积实时传输交互，吐出合规画卷。" : "Merging Ryoan-ji and Daitoku-ji layout streams into digital pipes, synthesizing real-time aesthetic outputs." },
        { id: 2, action: lang === "zh" ? "三大轨道" : "Aesthetic Merge", title: lang === "zh" ? "石、苔、砂三大轨道合流锁定" : "Stones, Moss & Sand Universal Lock", body: lang === "zh" ? "置石（骨骼）、绿苔（肌肉）、白砂（血液）三大物理转化轨道达成完美的百分百交叉，谐波锁定通红点亮。" : "Stones (bones), moss (muscles), and sand (blood) reach a perfect 100% convergence. Interlocking matrix fully locked." },
        { id: 3, action: lang === "zh" ? "禅印落款" : "Zen Master Stamp", title: lang === "zh" ? "终极枯山水禅画盖印结账" : "Masterpiece Zen Karesansui Sign-off", body: lang === "zh" ? "枯山水泰斗落款收笔，千山万壑在一盘砂中彻底圆满，史诗回归大动脉结账，全网亮起绿灯。" : "Zen master applies ultimate ink stamp, completing the layout. All metrics pass with golden five-star marks." }
      ]
    }
  ]
});

export default function Style15({ scene, beat, language, isThumbnail }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];
  const isZh = language === "zh";

  // Mock proportion metrics for bento bar gauges based on scene/beat
  const getProportions = () => {
    if (scene === 1) {
      if (beat === 0) return { sand: 90, moss: 2, stones: 8 };
      if (beat === 1) return { sand: 88, moss: 3, stones: 9 };
      return { sand: 85, moss: 6, stones: 9 };
    }
    if (scene === 2) {
      if (beat === 0) return { sand: 82, moss: 8, stones: 10 };
      if (beat === 1) return { sand: 76, moss: 10, stones: 14 };
      return { sand: 72, moss: 12, stones: 16 };
    }
    if (scene === 3) {
      if (beat === 0) return { sand: 90, moss: 2, stones: 8 }; // Heian
      if (beat === 1) return { sand: 78, moss: 10, stones: 12 }; // Muromachi
      return { sand: 65, moss: 15, stones: 20 }; // Edo
    }
    // Scene 4 & 5
    return { sand: 70, moss: 12, stones: 18 };
  };

  const props = getProportions();

  return (
    <div className={`w-full h-full flex flex-col justify-between p-[3.5cqw] relative ${meta.colors.bg} ${meta.colors.ink} select-none overflow-hidden`} key={`${scene}-${beat}`}>
      {/* Background Soft Tatami Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 800 500" fill="none" stroke="currentColor">
          {/* Tatami rectangular borders */}
          <rect x="50" y="50" width="150" height="300" strokeWidth="1" />
          <rect x="200" y="50" width="150" height="300" strokeWidth="1" />
          <rect x="350" y="50" width="150" height="300" strokeWidth="1" />
          <rect x="500" y="50" width="150" height="300" strokeWidth="1" />
          {/* Horizontal lines */}
          <line x1="50" y1="200" x2="650" y2="200" strokeWidth="1" />
        </svg>
      </div>

      {/* Slide Header */}
      <div className="flex justify-between items-start border-b border-[#5c5043]/15 pb-[2cqh] z-10">
        <div>
          <span className="font-mono text-[1.1cqw] tracking-widest uppercase opacity-60 flex items-center gap-[0.5cqw]">
            <Compass className="w-[1.2cqw] h-[1.2cqw] text-[#5c5043] animate-spin-slow" />
            {meta.theme}
          </span>
          <h1 className="text-[3cqw] font-serif font-black tracking-tight mt-[0.5cqh]">
            {currentScene.title}
          </h1>
        </div>
        <div className="text-right font-mono">
          <div className="text-[1.2cqw] font-bold text-[#5c5043]">
            {isZh ? "枯山水空间控制网" : "Karesansui Meditative Grid"}
          </div>
          <div className="text-[0.9cqw] opacity-50 uppercase tracking-widest mt-[0.5cqh]">
            {meta.densityLabel}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-12 gap-[2.5cqw] flex-1 my-[2.5cqh] items-stretch z-10">
        {/* Left Column: Story-driven copy */}
        <div className="col-span-5 flex flex-col justify-between pr-[1cqw]">
          <div className="flex flex-col gap-[1.5cqh]">
            <span className="font-mono text-[1cqw] tracking-widest uppercase text-[#5c5043] font-bold flex items-center gap-[0.5cqw]">
              <span className="w-[0.8cqw] h-[0.8cqw] bg-[#5c5043] rounded-full animate-ping" />
              {currentBeat.action}
            </span>
            <h2 className="text-[2.2cqw] font-serif font-black leading-tight">
              {currentBeat.title}
            </h2>
            <p className="text-[1.1cqw] leading-[1.6] opacity-80 font-sans">
              {currentBeat.body}
            </p>
          </div>

          {/* Real-time proportions and empty-space (Ma) monitor block */}
          <div className="bg-[#ede4d7] border border-[#5c5043]/20 rounded-xl p-[1.5cqw] flex flex-col gap-[1cqh]">
            <div className="flex justify-between items-center border-b border-[#5c5043]/15 pb-[0.8cqh]">
              <span className="text-[0.9cqw] font-mono font-bold tracking-wider opacity-60">
                {isZh ? "庭院空间比例分配 (留白)" : "SPATIAL MA DISTRIBUTION (%)"}
              </span>
              <Activity className="w-[1.1cqw] h-[1.1cqw] text-[#5c5043] animate-pulse" />
            </div>

            <div className="flex flex-col gap-[0.8cqh] text-[0.9cqw] font-mono">
              {[
                { name: isZh ? "白砂 (Ma Void / Sand)" : "SAND VOID (MA)", level: props.sand, color: "bg-zinc-400" },
                { name: isZh ? "石组 (Ishigumi / Rock)" : "STONES (ISHIGUMI)", level: props.stones, color: "bg-[#5c5043]" },
                { name: isZh ? "青苔 (Moss Islands)" : "MOSS (COAXIAL)", level: props.moss, color: "bg-emerald-600" }
              ].map((sec, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-[0.85cqw] opacity-80">{sec.name}</span>
                  <div className="flex items-center gap-[0.8cqw] flex-1 max-w-[50%] justify-end">
                    <div className="w-[100px] h-[0.5cqh] bg-zinc-300 rounded-full overflow-hidden relative">
                      <div 
                        className={`h-full ${sec.color} rounded-full transition-all duration-700`}
                        style={{ width: `${sec.level}%` }}
                      />
                    </div>
                    <span className="text-[0.85cqw] font-bold text-[#5c5043] min-w-[35px] text-right">{sec.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Visual Meditative Garden (Bespoke per scene density) */}
        <div className="col-span-7 bg-[#f6eff2] border border-[#5c5043]/15 rounded-2xl p-[2cqw] flex flex-col justify-between relative overflow-hidden">
          {/* Subtle convection grids to reflect combed gravel furrows */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(92,80,67,0.15)_1px,transparent_1px)] [background-size:100%_1.5cqh]" />

          {scene === 1 && (
            // Scene 1 (Ultralight): concentric gravel waves around one giant center rock
            <div className="flex-1 flex flex-col justify-center items-center relative">
              <svg className="w-[85%] h-[60%] stroke-[#2c2722] fill-none" viewBox="0 0 400 150">
                {/* Concentric ripples combed around central rock */}
                <circle cx="200" cy="75" r="30" strokeWidth="1" strokeDasharray="3,3" className="opacity-20" />
                <circle cx="200" cy="75" r="45" strokeWidth="1" strokeDasharray="3,3" className="opacity-30" />
                <circle cx="200" cy="75" r="60" strokeWidth="1" strokeDasharray="3,6" className="opacity-45" />

                <circle cx="200" cy="75" r="30" strokeWidth="1.5" strokeDasharray="180" strokeDashoffset={180 - (beat + 1) * 60} className="stroke-[#5c5043] transition-all duration-1000" />
                <circle cx="200" cy="75" r="45" strokeWidth="1.5" strokeDasharray="280" strokeDashoffset={280 - (beat + 1) * 93} className="stroke-[#5c5043] transition-all duration-1000" />
                <circle cx="200" cy="75" r="60" strokeWidth="1.5" strokeDasharray="370" strokeDashoffset={370 - (beat + 1) * 123} className="stroke-[#5c5043] transition-all duration-1000" />

                {/* Central main Triadic Rock (San-zon) */}
                <g 
                  className="transition-all duration-1000"
                  style={{
                    transform: "translate(200px, 75px)"
                  }}
                >
                  {/* Moss green concentric shadow */}
                  <ellipse cx="0" cy="6" rx="20" ry="10" fill="#10b981" opacity={beat >= 2 ? "0.3" : "0.05"} className="transition-all" />
                  
                  {/* Rock polygon */}
                  <polygon points="-12,5 -2,-18 10,-20 14,8" fill="#5c5043" stroke="#2c2722" strokeWidth="1.5" />
                  <line x1="-2" y1="-18" x2="3" y2="8" stroke="#2c2722" strokeWidth="1" opacity="0.6" />
                </g>
              </svg>

              <div className="text-center font-serif text-[1.1cqw] mt-[2cqh]">
                <p className="font-extrabold">{isZh ? "一石擎天，砂澜无声" : "A single monolith anchors gravity, gravel waves humming low."}</p>
                <p className="text-[0.95cqw] font-sans opacity-60 mt-[0.5cqh] font-mono text-[#5c5043]">
                  {isZh ? "白砂同心圆半径 45cm · 谐波锁定中" : "Sand Coaxial R=45cm · PID Tuning"}
                </p>
              </div>
            </div>
          )}

          {scene === 2 && (
            // Scene 2 (Light): Symmetrical voice group call & response (Master vs Auxiliary rock)
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex items-center gap-[0.5cqw]">
                <Trees className="w-[1.2cqw] h-[1.2cqw] text-[#5c5043]" />
                {isZh ? "主石与对角副石留白声势对位" : "MASTER MONOLITH VS DIAGONAL SUB-STONE"}
              </div>

              <div className="flex-1 relative flex items-center justify-center">
                <svg className="w-[90%] h-[75%] fill-none stroke-[#2c2722]" viewBox="0 0 400 150">
                  {/* Master Stone Field Concentrics (Left) */}
                  <g transform="translate(100, 75)">
                    <ellipse cx="0" cy="5" rx="35" ry="18" stroke="#5c5043" strokeWidth="1" strokeDasharray="3,3" />
                    <ellipse cx="0" cy="5" rx="35" ry="18" stroke="#5c5043" strokeWidth="1.5" strokeDasharray="220" strokeDashoffset={beat >= 1 ? 0 : 220} className="transition-all duration-1000" />
                    <ellipse cx="0" cy="4" rx="14" ry="7" fill="#10b981" opacity="0.2" />
                    <polygon points="-8,3 0,-15 10,-12 6,5" fill="#5c5043" stroke="#2c2722" strokeWidth="1.2" />
                  </g>

                  {/* Auxiliary Stone Field Concentrics (Right) */}
                  <g transform="translate(300, 75)" className={beat >= 1 ? "opacity-100" : "opacity-15"}>
                    <ellipse cx="0" cy="4" rx="25" ry="12" stroke="#5c5043" strokeWidth="1" strokeDasharray="3,3" />
                    <ellipse cx="0" cy="4" rx="25" ry="12" stroke="#5c5043" strokeWidth="1.5" strokeDasharray="160" strokeDashoffset={beat >= 2 ? 0 : 160} className="transition-all duration-1000 stroke-dashed" />
                    <ellipse cx="0" cy="3" rx="8" ry="4" fill="#10b981" opacity="0.2" />
                    <polygon points="-4,2 0,-8 5,-6 3,3" fill="#5c5043" stroke="#2c2722" strokeWidth="1" />
                  </g>

                  {/* Raked parallel sand lines connecting both islands */}
                  <path d="M 140 75 H 270" stroke="#5c5043" strokeWidth="2" strokeDasharray="4,6" className="opacity-30" />
                  <path d="M 140 75 H 270" stroke="#5c5043" strokeWidth="2.5" strokeDasharray="130" strokeDashoffset={beat >= 2 ? 0 : 130} className="stroke-[#5c5043] transition-all duration-1000" />

                  {/* Coaxial node balance center */}
                  <circle cx="205" cy="75" r="4.5" fill="#5c5043" className={beat >= 2 ? "animate-pulse" : "opacity-30"} />

                  {/* Labels */}
                  <text x="50" y="45" className="text-[7.5px] font-mono fill-current text-[#5c5043]" stroke="none">{isZh ? "蓬莱主石组 (Master)" : "Master Monolith (Horal)"}</text>
                  <text x="250" y="45" className="text-[7.5px] font-mono fill-current text-[#5c5043]" stroke="none">{isZh ? "对位辅助副石 (Sub)" : "Sub-stone Counter (Lever)"}</text>
                  <text x="160" y="112" className="text-[8px] font-serif font-black fill-current text-[#2c2722]" stroke="none">{isZh ? "留白均势交汇线" : "Combed Gravity Balance"}</text>
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-[1cqw] border-t border-[#5c5043]/10 pt-[1.2cqh] text-[0.9cqw] font-mono text-[#5c5043]/80">
                <div>
                  <span className="opacity-60">{isZh ? "置石质心锁定:" : "Volumetric Balance:"}</span>
                  <span className="ml-[0.5cqw] font-bold">{beat >= 1 ? "STABLE AXIS" : "STALL"}</span>
                </div>
                <div>
                  <span className="opacity-60">{isZh ? "白砂水动力相位:" : "Sand Hydrology:"}</span>
                  <span className="ml-[0.5cqw] font-bold">{beat >= 2 ? "100% PHASE LOCKED" : "STANDBY"}</span>
                </div>
              </div>
            </div>
          )}

          {scene === 3 && (
            // Scene 3 (Standard): 3 connected stages of Zen Garden evolution (Heian, Muromachi, Edo)
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex justify-between text-[#2c2722]">
                <span>{isZh ? "枯山水历史空间大演变时空链" : "THREE CHRONOLOGICAL ESTHETIC EPOCHS"}</span>
                <span className="animate-pulse">● Zen Garden Chronicles</span>
              </div>

              <div className="grid grid-cols-3 gap-[1.2cqw] my-[2cqh] flex-1">
                {[
                  { name: isZh ? "独石守真极简" : "Heian Solitary", unit: "1100 BC / Heian", icon: "🗿", desc: isZh ? "平安独石当空沙面不著尘" : "Minimal solitary stone, sand voids >80%", active: true },
                  { name: isZh ? "三尊蓬莱对位" : "Muromachi Triad", unit: "1450 BC / Muromachi", icon: "⛰️", desc: isZh ? "经典室町三石苔岛紧凑咬合" : "Triadic stones stand on low moss islands", active: beat >= 1 },
                  { name: isZh ? "七五三群石共鸣" : "Edo Collective", unit: "1700 BC / Edo", icon: "🐉", desc: isZh ? "精巧江户群山万壑尽纳盆" : "Rocks set in odd ratios like floating dragons", active: beat >= 2 }
                ].map((item, i) => (
                  <div key={i} className={`p-[1.2cqw] rounded-xl border bg-white flex flex-col justify-between transition-all duration-500 ${
                    item.active 
                      ? "border-[#5c5043] shadow-md scale-100" 
                      : "border-slate-200 opacity-20 scale-95"
                  }`}>
                    <div className="flex justify-between items-start">
                      <span className="text-[1.8cqw]">{item.icon}</span>
                      <span className="text-[0.75cqw] font-mono font-bold bg-[#5c5043]/10 text-[#5c5043] px-[0.5cqw] py-[0.1cqh] rounded">
                        {item.unit}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-serif font-black text-[1cqw] mt-[1cqh] text-[#2c2722]">{item.name}</h4>
                      <p className="text-[0.75cqw] text-zinc-600 mt-[0.5cqh] font-sans leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-[0.8cqw] font-mono opacity-50 flex justify-between">
                <span>{isZh ? "虚空比例Ma(留白)阻尼" : "VOID DAMPING RATIO (MA)"}</span>
                <span className="text-[#5c5043] font-bold">
                  {beat === 0 ? "HEIAN MINIMAL" : beat === 1 ? "CLASSIC MUROMACHI" : "EDO COLLECTION COMPLETE"}
                </span>
              </div>
            </div>
          )}

          {scene === 4 && (
            // Scene 4 (Dense): 2x2 database alignment and sand-depth laser telemetry
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex justify-between">
                <span>{isZh ? "置石质心扫描与砂槽阴影比自整定板" : "ISHIGUMI GRAVITY METRIC & SAND FURROW CONTRAST CONTROL"}</span>
                <span>{isZh ? "三维激光遥测" : "OPTICAL SENSORS ACTIVE"}</span>
              </div>

              <div className="grid grid-cols-2 gap-[1.2cqw] my-[1cqh] flex-1">
                {[
                  { title: isZh ? "置石三维体量质心测算" : "ISHIGUMI VOLUME CENTROID", val: "Center Aligned", info: isZh ? "对角视觉矩完全归零" : "Diagonal visual torque balance 100%", icon: Activity, active: true },
                  { title: isZh ? "白砂槽深侧光阴影自校" : "FURROWS CONTRAST OPTIMIZE", val: "Furrow 18mm", info: isZh ? "自适应衰减晨昏对比亮斑" : "Smooth brightness adaptation index", icon: Compass, active: beat >= 1 },
                  { title: isZh ? "黄金空间阻尼留白常数" : "AESTHETIC VOID CONSTANT", val: "Ma Ratio: 0.618", info: isZh ? "严格阻断散乱冗余置景" : "Rigid golden-cut constraints locked", icon: Layers, active: beat >= 1 },
                  { title: isZh ? "非遗意境置信证明" : "KARESANSUI COMPLIANCE LEDGER", val: "99.98% True", info: isZh ? "排除多重视觉错位噪声" : "Verified Zen spatial metrics certified", icon: Shield, active: beat >= 2 }
                ].map((item, i) => (
                  <div key={i} className={`p-[1.2cqw] rounded-xl border bg-white flex justify-between items-center transition-all duration-500 ${
                    item.active ? "border-[#5c5043] shadow-sm" : "border-slate-200 opacity-20"
                  }`}>
                    <div className="flex flex-col gap-[0.3cqh]">
                      <span className="text-[0.75cqw] font-mono font-bold opacity-60 text-[#2c2722] uppercase">{item.title}</span>
                      <span className="text-[1.3cqw] font-serif font-black text-[#2c2722]">{item.val}</span>
                      <span className="text-[0.75cqw] text-zinc-500 font-sans">{item.info}</span>
                    </div>
                    <item.icon className="w-[2cqw] h-[2cqw] text-[#5c5043]" />
                  </div>
                ))}
              </div>

              <div className="w-full bg-[#ede4d7] h-[0.4cqh] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#5c5043] transition-all duration-700" 
                  style={{ width: beat === 0 ? "35%" : beat === 1 ? "70%" : "100%" }}
                />
              </div>
            </div>
          )}

          {scene === 5 && (
            // Scene 5 (Extreme / High Density): Grand Meditative Zen Garden Portal
            <div className="flex-1 flex flex-col justify-between my-[0.2cqh]">
              {/* Top summary cards */}
              <div className="grid grid-cols-4 gap-[0.8cqw]">
                {[
                  { name: isZh ? "园林总石件" : "ISHIGUMI CORES", val: "15 " + (isZh ? "块" : "Stones"), color: "text-[#2c2722]" },
                  { name: isZh ? "留白自整比" : "VOID COEFFICIENT", val: "72.4% (Optimal)", color: "text-emerald-700" },
                  { name: isZh ? "非遗世袭等级" : "ZEN HERITAGE", val: "Kyoto Grade", color: "text-emerald-700" },
                  { name: isZh ? "累计耙砂里程" : "GRAVEL MILEAGE", val: beat >= 2 ? "124 " + (isZh ? "圈" : "Furrows") : beat >= 1 ? "42 " + (isZh ? "圈" : "Furrows") : "15" }
                ].map((ind, i) => (
                  <div key={i} className="bg-white border border-[#5c5043]/20 rounded-xl p-[0.8cqw] text-center shadow-sm">
                    <span className="text-[0.7cqw] font-mono opacity-50 block text-[#2c2722] uppercase">{ind.name}</span>
                    <span className={`text-[1.1cqw] font-serif font-black ${ind.color} block mt-[0.2cqh]`}>{ind.val}</span>
                  </div>
                ))}
              </div>

              {/* Central Map & Spectrogram Ticker */}
              <div className="grid grid-cols-12 gap-[1cqw] my-[1cqh] flex-1">
                {/* SVG top-down Zen layout plan */}
                <div className="col-span-7 bg-white border border-[#5c5043]/20 rounded-xl p-[1.5cqw] relative flex flex-col justify-between shadow-sm">
                  <span className="text-[0.75cqw] font-mono opacity-50 block">{isZh ? "龙安寺白砂槽流与组石力矩空间自校图" : "RYOAN-JI TOP-DOWN AESTHETIC PLAN"}</span>
                  
                  <div className="flex-1 relative flex items-center justify-center">
                    <svg className="w-full h-full fill-none stroke-[#2c2722]" viewBox="0 0 240 100">
                      {/* Grid guidelines */}
                      <path d="M 0 50 H 240 M 80 0 V 100 M 160 0 V 100" stroke="#5c5043" strokeWidth="0.5" strokeDasharray="2,4" className="opacity-15" />
                      
                      {/* Raked Concentrics */}
                      <circle cx="120" cy="50" r="30" stroke="#5c5043" strokeWidth="0.8" strokeDasharray="3,3" className="opacity-25" />
                      <circle cx="120" cy="50" r="45" stroke="#5c5043" strokeWidth="0.8" strokeDasharray="3,3" className="opacity-20 animate-spin-slow" />
                      
                      {/* Stone groups */}
                      {[
                        { x: 50, y: 35, r: 7, m: 12, name: "Master", active: true },
                        { x: 120, y: 50, r: 5, m: 9, name: "Sub", active: beat >= 1 },
                        { x: 190, y: 65, r: 4, m: 7, name: "Guest", active: beat >= 2 }
                      ].map((node, idx) => (
                        <g key={idx} className="transition-all duration-500">
                          {/* Moss Ring */}
                          <circle cx={node.x} cy={node.y} r={node.m} fill="#10b981" opacity={node.active ? "0.2" : "0.03"} />
                          {/* Rock Core */}
                          <circle cx={node.x} cy={node.y} r={node.r} fill={node.active ? "#5c5043" : "#e2e8f0"} stroke={node.active ? "#2c2722" : "#cbd5e1"} strokeWidth="1.2" />
                          <text x={node.x - 10} y={node.y - 12} className="text-[6px] font-sans font-black fill-current" stroke="none">{node.name}</text>
                          {node.active && idx === beat && (
                            <circle cx={node.x} cy={node.y} r={node.m + 3} stroke="#5c5043" strokeWidth="0.8" className="animate-ping opacity-20" style={{ animationDuration: "3s" }} />
                          )}
                        </g>
                      ))}
                    </svg>
                  </div>
                </div>

                {/* Right side: Event and chemical phase logs */}
                <div className="col-span-5 bg-white border border-[#5c5043]/20 rounded-xl p-[1.5cqw] flex flex-col justify-between shadow-sm font-mono text-[0.75cqw]">
                  <span className="opacity-50 text-[0.7cqw] uppercase border-b border-[#5c5043]/15 pb-[0.3cqh] block">
                    {isZh ? "庭院枯山水空间清算大账单" : "ZEN GARDEN AESTHETIC REPORT"}
                  </span>
                  
                  <div className="flex-1 flex flex-col justify-center gap-[0.5cqh] my-1 leading-none">
                    <div className="text-zinc-500">&gt; TATAMI_CONSTRUCTIONS_READY</div>
                    <div className="text-zinc-400">&gt; Concentric sand waves Rake OK</div>
                    <div className={`transition-opacity ${beat >= 1 ? "opacity-100 text-[#5c5043]" : "opacity-15"}`}>
                      &gt; moss coaxial lock clear
                    </div>
                    <div className={`transition-opacity ${beat >= 2 ? "opacity-100 text-emerald-700 font-extrabold" : "opacity-5"}`}>
                      &gt; ZEN HARMONIOUS MATRIX LOCKED OK
                    </div>
                  </div>

                  <div className={`text-[0.65cqw] p-[0.5cqw] rounded bg-emerald-50 text-emerald-800 border border-emerald-500/20 flex items-center gap-[0.3cqw] ${beat >= 2 ? "opacity-100" : "opacity-20"}`}>
                    <Shield className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{isZh ? "非遗大师画卷落款盖章，大宗回归结账" : "Master stamp applied. Meditative lock."}</span>
                  </div>
                </div>
              </div>

              {/* Bottom system status bar */}
              <div className="text-[0.8cqw] font-mono opacity-60 flex justify-between items-center px-1 border-t border-[#5c5043]/15 pt-[0.6cqh]">
                <span>{isZh ? "日本古典非物质文化遗产枯山水数字化空间统合大纲" : "Universal Karesansui Meditative Layout Integrator"}</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                  {isZh ? "庭院虚白和谐绿光高亮通车" : "MEDITATIVE MESH STATUS: OPTIMAL"}
                </span>
              </div>
            </div>
          )}

          {/* Sub status footer */}
          <div className="border-t border-[#5c5043]/10 pt-[0.8cqh] flex justify-between text-[0.75cqw] font-mono opacity-50 mt-1">
            <span>{isZh ? "龙安寺非遗石谱大账册" : "KARESANSUI GARDEN MESH PANEL_XV // COMPLETE"}</span>
            <span>VERIFICATION CODE: 0x15_ZEN_MA_VOID</span>
          </div>
        </div>
      </div>

      {/* Decorative Slide Footer */}
      <div className="flex justify-between items-center text-[0.8cqw] font-mono opacity-55 border-t border-[#5c5043]/10 pt-[1.2cqh] z-10">
        <span>© BC 600 - 2026 {isZh ? "京都龙安寺园林美学工坊" : "Ryoan-ji Meditative Aesthetics Guild"}</span>
        <span>{isZh ? "自适应白砂槽影对比空间物理控制技术" : "concentric sand wave contrast controls"}</span>
      </div>
    </div>
  );
}
