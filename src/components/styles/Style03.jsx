import React from "react";
import { 
  Landmark, Scale, Scroll, Shield, Award, Users, Flame, Coins, FileText, Check 
} from "lucide-react";

// 雅典10部落名称
const DEMES = [
  { id: 1, nameZh: "厄瑞克透斯部落", nameEn: "Erechtheis", zone: "Coast", clay: 620, bronze: 410 },
  { id: 2, nameZh: "埃勾斯部落", nameEn: "Aegeis", zone: "Inland", clay: 580, bronze: 390 },
  { id: 3, nameZh: "潘迪翁部落", nameEn: "Pandionis", zone: "City", clay: 710, bronze: 520 },
  { id: 4, nameZh: "莱翁提斯部落", nameEn: "Leontis", zone: "Coast", clay: 640, bronze: 430 },
  { id: 5, nameZh: "阿卡曼提斯部落", nameEn: "Acamantis", zone: "Inland", clay: 590, bronze: 400 },
  { id: 6, nameZh: "俄纽斯部落", nameEn: "Oineis", zone: "City", clay: 680, bronze: 490 },
  { id: 7, nameZh: "凯克洛普斯部落", nameEn: "Cecropis", zone: "Coast", clay: 530, bronze: 370 },
  { id: 8, nameZh: "希波托翁提斯部落", nameEn: "Hippothontis", zone: "Inland", clay: 610, bronze: 420 },
  { id: 9, nameZh: "埃阿斯部落", nameEn: "Aiantis", zone: "City", clay: 720, bronze: 550 },
  { id: 10, nameZh: "安提奥克斯部落", nameEn: "Antiochis", zone: "Coast", clay: 660, bronze: 460 },
];

export const getMetadata = (lang) => {
  const isZh = lang === "zh";
  return {
    id: "03",
    tier: "A",
    name: isZh ? "雅典民主制辩难" : "Athenian Agora Debates",
    theme: isZh ? "雅典民主与政治哲学" : "Classical Greek Philosophy",
    densityLabel: isZh ? "古典大理石学术" : "Classical Marble Academic",
    colors: { bg: "bg-[#f4f3f0]", ink: "text-[#1a1b26]", panel: "border-[#1a1b26]/20" },
    typography: { header: "font-serif", body: "font-serif" },
    scenes: [
      {
        id: 1,
        title: isZh ? "神庙门廊：真理的追问" : "Portico of Truth",
        beats: [
          { id: 1, action: isZh ? "叩问：何为正义" : "Pose Question: What is Justice?" },
          { id: 2, action: isZh ? "开启：逻各斯思辨" : "Invoke Logos Inquiry" },
          { id: 3, action: isZh ? "铭刻：苏格拉底判词" : "Carve Socratic Maxim" }
        ]
      },
      {
        id: 2,
        title: isZh ? "广场对决：智者与哲人" : "Dialectical Friction",
        beats: [
          { id: 1, action: isZh ? "宣读：哲王统治论" : "Read Philosopher-King Thesis" },
          { id: 2, action: isZh ? "反驳：强权即公理" : "Launch Sophist Counter" },
          { id: 3, action: isZh ? "整合：辩证法共识" : "Seal Dialectical Synthesis" }
        ]
      },
      {
        id: 3,
        title: isZh ? "民主路径：议事与公决" : "Agora Legislative Path",
        beats: [
          { id: 1, action: isZh ? "审议：五百人议案" : "Screen Boule Decree" },
          { id: 2, action: isZh ? "交锋：普尼克斯讲坛" : "Clash at Pnyx Rostrum" },
          { id: 3, action: isZh ? "表决：全体公民大会" : "Resolve Assembly Vote" }
        ]
      },
      {
        id: 4,
        title: isZh ? "部落矩阵：公民陶片投票" : "Voter Deme Matrix",
        beats: [
          { id: 1, action: isZh ? "点亮：先期表决部落" : "Tally Core Demes" },
          { id: 2, action: isZh ? "汇总：十个主权部落" : "Aggregate Ten Demes" },
          { id: 3, action: isZh ? "裁决：陶片放逐审判" : "Trigger Ostracism Verdict" }
        ]
      },
      {
        id: 5,
        title: isZh ? "梭伦法典：主权立宪石碑" : "Solon's Code Stele",
        beats: [
          { id: 1, action: isZh ? "立碑：宣读部落宪章" : "Erect Deme Charter" },
          { id: 2, action: isZh ? "遥测：宪法条款和投票" : "Tally Articles & Turnout" },
          { id: 3, action: isZh ? "盖印：加盖猫头鹰徽章" : "Stamp Athena Owl Emblem" }
        ]
      }
    ]
  };
};

export default function Style03({ scene = 1, beat = 0, language = "en", isThumbnail = false, onNavigate }) {
  const isZh = language === "zh";

  // 自定义台阶导航子组件，实现3D大理石台阶与5根多立克石柱
  const TempleStepsNavigation = () => {
    return (
      <div className="absolute inset-x-[4cqw] bottom-[1.5cqh] h-[13cqh] z-40 flex items-end justify-center pointer-events-auto">
        <svg className="w-[82cqw] h-[13cqh]" viewBox="0 0 820 100" preserveAspectRatio="none">
          <defs>
            {/* 多立克柱子的柱身渐变效果：营造古典圆柱立体感 */}
            <linearGradient id="nav-column-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8d8b83" />
              <stop offset="20%" stopColor="#dedcd5" />
              <stop offset="50%" stopColor="#f7f6f2" />
              <stop offset="80%" stopColor="#c7c5bd" />
              <stop offset="100%" stopColor="#7a7872" />
            </linearGradient>
            
            {/* 激活的多立克圆柱亮丽金色渐变 */}
            <linearGradient id="nav-column-active" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b8935c" />
              <stop offset="20%" stopColor="#fae7cc" />
              <stop offset="50%" stopColor="#fff8f0" />
              <stop offset="85%" stopColor="#e5c395" />
              <stop offset="100%" stopColor="#9a7442" />
            </linearGradient>

            {/* 大理石暗面阴影 */}
            <linearGradient id="marble-stair-shadow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#c5c3ba" />
              <stop offset="100%" stopColor="#9e9c93" />
            </linearGradient>

            {/* 激活台阶高光发光滤镜 */}
            <filter id="glow-light" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 三层 3D 大理石台阶 */}
          {/* 第一层（最底台阶） */}
          <polygon 
            points="30,100 790,100 770,83 50,83" 
            fill="#dbd9cf" 
            stroke="#b3b1a6" 
            strokeWidth="0.8" 
          />
          <polygon 
            points="30,100 50,83 50,89 30,100" 
            fill="#a19f95" 
          />
          <polygon 
            points="790,100 770,83 770,89 790,100" 
            fill="#8a8880" 
          />

          {/* 第二层（中层台阶） */}
          <polygon 
            points="60,83 760,83 745,67 75,67" 
            fill="#e5e3da" 
            stroke="#bebcb2" 
            strokeWidth="0.8" 
          />
          <polygon 
            points="60,83 75,67 75,72 60,83" 
            fill="#a8a69c" 
          />
          <polygon 
            points="760,83 745,67 745,72 760,83" 
            fill="#918f87" 
          />

          {/* 第三层（顶层台阶） */}
          <polygon 
            points="90,67 730,67 718,52 102,52" 
            fill="#efede5" 
            stroke="#cbcaa0" 
            strokeWidth="0.8" 
          />
          <polygon 
            points="90,67 102,52 102,57 90,67" 
            fill="#b5b3a9" 
          />
          <polygon 
            points="730,67 718,52 718,57 730,67" 
            fill="#9b9991" 
          />

          {/* 渲染 5 根多立克石柱导航 */}
          {[1, 2, 3, 4, 5].map((sNum) => {
            const x = 150 + (sNum - 1) * 130; // 柱子中心点横坐标
            const isActive = scene === sNum;
            
            // 柱子的罗马数字标签
            const romanLabels = ["I", "II", "III", "IV", "V"];
            const sceneTitlesZh = ["神庙门廊", "广场辩证", "民主路径", "部落矩阵", "立宪石碑"];
            const sceneTitlesEn = ["Portico Cover", "Dialectic Dual", "Agora Process", "Ekklesia Grid", "Solon Stele"];

            return (
              <g 
                key={`nav-pillar-${sNum}`} 
                className="cursor-pointer group"
                onClick={() => onNavigate && onNavigate(sNum, 0)}
              >
                {/* 锋利的旋转投影阴影 (Casts a sharp, rotating shadow) */}
                {/* 激活时，阴影在 3D 地面上延伸并逆时针旋转一个小角度，增强动态视觉深度 */}
                <polygon
                  points={`${x - 12},52 ${x + 22},52 ${x + (isActive ? 115 : 75)},95 ${x + (isActive ? 70 : 40)},95`}
                  fill="#000000"
                  fillOpacity={isActive ? "0.22" : "0.08"}
                  style={{
                    transformOrigin: `${x}px 52px`,
                    transform: isActive ? "rotate(-4deg) scaleY(1.05)" : "rotate(0deg)",
                    transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), fill-opacity 0.8s"
                  }}
                />

                {/* 活跃柱底下的高光亮影 */}
                {isActive && (
                  <ellipse 
                    cx={x} 
                    cy="52" 
                    rx="32" 
                    ry="6" 
                    fill="#ffeed1" 
                    fillOpacity="0.85" 
                    filter="url(#glow-light)"
                  />
                )}

                {/* 多立克柱础 (Column Base) */}
                <rect 
                  x={x - 22} 
                  y="46" 
                  width="44" 
                  height="6" 
                  fill={isActive ? "#d1b48c" : "#cbc9c0"} 
                  stroke={isActive ? "#b3915c" : "#a19f96"} 
                  strokeWidth="0.6"
                  className="transition-colors duration-500"
                />
                <rect 
                  x={x - 18} 
                  y="41" 
                  width="36" 
                  height="5" 
                  fill={isActive ? "#e5cfa3" : "#dad8ce"} 
                  stroke={isActive ? "#c7a56c" : "#b0ae9f"} 
                  strokeWidth="0.6"
                  className="transition-colors duration-500"
                />

                {/* 多立克柱身 (Fluted Shaft) */}
                {/* 激活时使用亮丽金色圆柱渐变，平常使用典雅石白圆柱渐变 */}
                <rect 
                  x={x - 13} 
                  y="12" 
                  width="26" 
                  height="29" 
                  fill={isActive ? "url(#nav-column-active)" : "url(#nav-column-grad)"} 
                  stroke={isActive ? "#c5a472" : "#9e9c93"} 
                  strokeWidth="0.6"
                  className="transition-all duration-500"
                  filter={isActive ? "drop-shadow(0 0 4px rgba(250,230,200,0.5))" : "none"}
                />

                {/* 柱身上的垂直多立克凹槽凹凸线条 (Doric flutings) */}
                <line x1={x - 8} y1="12" x2={x - 8} y2="41" stroke={isActive ? "#b08e58" : "#918f87"} strokeWidth="0.4" />
                <line x1={x - 3} y1="12" x2={x - 3} y2="41" stroke={isActive ? "#e5cfb0" : "#efede8"} strokeWidth="0.5" />
                <line x1={x + 3} y1="12" x2={x + 3} y2="41" stroke={isActive ? "#b5945c" : "#9b9991"} strokeWidth="0.4" />
                <line x1={x + 8} y1="12" x2={x + 8} y2="41" stroke={isActive ? "#957440" : "#7d7b73"} strokeWidth="0.4" />

                {/* 多立克柱头 (Capital - Echinus & Abacus) */}
                <polygon 
                  points={`${x - 16},12 ${x + 16},12 ${x + 13},6 ${x - 13},6`} 
                  fill={isActive ? "#dfc9a5" : "#dad8cf"} 
                  stroke={isActive ? "#bc9a64" : "#adaba0"} 
                  strokeWidth="0.6"
                  className="transition-colors duration-500"
                />
                <rect 
                  x={x - 18} 
                  y="1" 
                  width="36" 
                  height="5" 
                  fill={isActive ? "#cba570" : "#c1bfb5"} 
                  stroke={isActive ? "#ab844d" : "#918f86"} 
                  strokeWidth="0.6"
                  className="transition-colors duration-500"
                />

                {/* 交互柱顶高光圈 */}
                <circle 
                  cx={x} 
                  cy="-15" 
                  r="12" 
                  fill={isActive ? "#1a1b26" : "transparent"} 
                  className="group-hover:fill-[#1a1b26] transition-colors duration-300"
                />
                
                {/* 罗马数字标识 */}
                <text 
                  x={x} 
                  y="-11" 
                  textAnchor="middle" 
                  fill={isActive ? "#ffffff" : "#1a1b26"} 
                  className="font-serif text-[1.4cqw] font-extrabold tracking-widest transition-colors duration-300"
                >
                  {romanLabels[sNum - 1]}
                </text>

                {/* 场景简标：悬浮显示中/英文名称 */}
                <text 
                  x={x} 
                  y="-25" 
                  textAnchor="middle" 
                  fill={isActive ? "#c5a26f" : "#6e7282"} 
                  className="font-serif text-[0.8cqw] font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                >
                  {isZh ? sceneTitlesZh[sNum - 1] : sceneTitlesEn[sNum - 1]}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  };

  // 根据主 scene 渲染独立的、全页融合的功能性 DOM 结构（绝对不用 renderVisual）
  switch (scene) {
    case 1: {
      // 场景 1：希腊神庙门廊 (Ultralight Classical Cover)
      return (
        <div className="w-full h-full bg-[#f4f3f0] text-[#1a1b26] p-[4cqw] relative overflow-hidden select-none font-serif flex flex-col justify-between">
          <style>{`
            @keyframes floatIn {
              0% { transform: translateY(1.5cqh); opacity: 0; }
              100% { transform: translateY(0); opacity: 1; }
            }
            @keyframes pulseBronze {
              0%, 100% { filter: drop-shadow(0 0 10px rgba(184, 115, 51, 0.25)); }
              50% { filter: drop-shadow(0 0 25px rgba(184, 115, 51, 0.55)); }
            }
            .animate-float-in {
              animation: floatIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            .animate-pulse-bronze {
              animation: pulseBronze 4s ease-in-out infinite;
            }
          `}</style>

          {/* 顶栏学术元数据 */}
          <div className="w-full flex justify-between items-start border-b border-[#1a1b26]/10 pb-[1.5cqh] z-10 shrink-0">
            <div className="flex flex-col gap-0.5">
              <span className="font-serif text-[1.1cqw] tracking-wider uppercase text-[#c5a26f] font-black">
                {isZh ? "雅典民主与政治哲学" : "Classical Greek Philosophy"}
              </span>
              <span className="text-[0.9cqw] text-slate-500 font-mono tracking-tight uppercase">
                {isZh ? "雅典民主制辩难 • 绪论" : "Athenian Agora Debates • Introduction"}
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded border border-[#1a1b26]/10 shadow-sm">
              <Landmark className="w-3.5 h-3.5 text-[#c5a26f]" />
              <span className="font-mono text-[0.8cqw] text-[#1a1b26] font-bold uppercase">A-TIER CLASSICAL</span>
            </div>
          </div>

          {/* 左右两侧高达100%容器高度的巨型大理石多立克柱 (Doric columns flank edges) */}
          <div className="absolute left-[2.5cqw] top-0 bottom-[14cqh] w-[7cqw] z-10 pointer-events-none flex flex-col justify-between">
            {/* 顶梁装饰端 */}
            <div className="w-full h-[1.5cqh] bg-[#dedcd5] border border-b-[#9e9c93]" />
            {/* 柱子本体（具有垂直多立克凹槽） */}
            <div className="flex-1 w-[80%] mx-auto bg-gradient-to-r from-[#9c9a92] via-[#f7f6f2] to-[#7f7d75] border-x border-[#918f87] relative">
              <div className="absolute inset-y-0 left-[20%] w-[1px] bg-[#918f87]" />
              <div className="absolute inset-y-0 left-[40%] w-[1px] bg-[#eae9df]" />
              <div className="absolute inset-y-0 left-[60%] w-[1px] bg-[#9e9c93]" />
              <div className="absolute inset-y-0 left-[80%] w-[1px] bg-[#73716a]" />
            </div>
            {/* 柱础端 */}
            <div className="w-full h-[2cqh] bg-[#bebcb3] border-t border-[#8e8c83] shadow-md" />
          </div>

          <div className="absolute right-[2.5cqw] top-0 bottom-[14cqh] w-[7cqw] z-10 pointer-events-none flex flex-col justify-between">
            {/* 顶梁装饰端 */}
            <div className="w-full h-[1.5cqh] bg-[#dedcd5] border border-b-[#9e9c93]" />
            {/* 柱子本体 */}
            <div className="flex-1 w-[80%] mx-auto bg-gradient-to-r from-[#9c9a92] via-[#f7f6f2] to-[#7f7d75] border-x border-[#918f87] relative">
              <div className="absolute inset-y-0 left-[20%] w-[1px] bg-[#918f87]" />
              <div className="absolute inset-y-0 left-[40%] w-[1px] bg-[#eae9df]" />
              <div className="absolute inset-y-0 left-[60%] w-[1px] bg-[#9e9c93]" />
              <div className="absolute inset-y-0 left-[80%] w-[1px] bg-[#73716a]" />
            </div>
            {/* 柱础端 */}
            <div className="w-full h-[2cqh] bg-[#bebcb3] border-t border-[#8e8c83] shadow-md" />
          </div>

          {/* 中央大片纯古典比例的宏伟负空间 (Vast central negative space) */}
          <div className="flex-1 w-full flex flex-col items-center justify-center px-[12cqw] py-[2cqh] text-center z-20 relative">
            
            {/* 纪念碑式哲学问题 (One monumental philosophical question with ambient bronze glow) */}
            <div className="animate-float-in">
              <h2 className="text-[5.5cqw] font-serif font-black tracking-wide text-[#1a1b26] animate-pulse-bronze">
                {isZh ? "何为正义？" : "What is Justice?"}
              </h2>
            </div>

            {/* Beat 1: 希腊回纹线与副标题 */}
            {beat >= 1 && (
              <div className="mt-[2cqh] w-full flex flex-col items-center animate-float-in [animation-delay:200ms]">
                {/* 精巧的 SVG 希腊回纹装饰线 (Greek Fret/Meander Trim Path) */}
                <svg className="w-[30cqw] h-[2.5cqh] text-[#c5a26f]" viewBox="0 0 300 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <path d="M 0,10 L 15,10 L 15,3 L 5,3 L 5,17 L 25,17 L 25,10 L 40,10 L 40,3 L 30,3 L 30,17 L 50,17 L 50,10 L 65,10 L 65,3 L 55,3 L 55,17 L 75,17 L 75,10 L 90,10 L 90,3 L 80,3 L 80,17 L 100,17 L 100,10 L 115,10 L 115,3 L 105,3 L 105,17 L 125,17 L 125,10 L 140,10 L 140,3 L 130,3 L 130,17 L 150,17 L 150,10 L 165,10 L 165,3 L 155,3 L 155,17 L 175,17 L 175,10 L 190,10 L 190,3 L 180,3 L 180,17 L 200,17 L 200,10 L 215,10 L 215,3 L 205,3 L 205,17 L 225,17 L 225,10 L 240,10 L 240,3 L 230,3 L 230,17 L 250,17 L 250,10 L 265,10 L 265,3 L 255,3 L 255,17 L 275,17 L 275,10 L 290,10 L 290,3 L 280,3 L 280,17 L 300,17" />
                </svg>
                <p className="text-[1.8cqw] text-slate-600 tracking-wider font-medium uppercase mt-1">
                  {isZh ? "苏格拉底式的逻各斯追问" : "The Socratic Quest for Logos & Virtue"}
                </p>
              </div>
            )}

            {/* Beat 2: 雕花台座基座与苏格拉底名言 */}
            {beat >= 2 && (
              <div className="mt-[3cqh] max-w-[42cqw] bg-[#ebeae2] border border-[#cbcaa0] rounded px-5 py-3 shadow-inner animate-float-in [animation-delay:450ms]">
                <p className="text-[1.5cqw] text-[#1a1b26] italic leading-relaxed font-serif">
                  {isZh 
                    ? "“ 未经审视的生活不值得过。”" 
                    : "“ The unexamined life is not worth living. ”"}
                </p>
                <span className="text-[1cqw] text-[#c5a26f] uppercase tracking-widest font-bold block text-right mt-1.5">
                  — Socrates / 苏格拉底
                </span>
              </div>
            )}
          </div>

          {/* 底部交互状态遥测与导航占位 */}
          <div className="w-full flex justify-between items-center border-t border-[#1a1b26]/10 pt-[1cqh] z-10 shrink-0 pb-[12cqh]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[0.85cqw] text-slate-500 uppercase tracking-wider">{isZh ? "实时遥测:" : "TELEMETRY:"}</span>
              <span className="font-mono text-[0.9cqw] bg-[#c5a26f]/10 text-[#c5a26f] border border-[#c5a26f]/30 px-3 py-0.5 rounded-full font-bold">
                {isZh ? "神庙之柱已竖立 • 提出辩难" : "Pillars Erected • Pose Agora Thesis"}
              </span>
            </div>
            <span className="font-mono text-[0.8cqw] text-slate-500 uppercase tracking-widest">
              {isZh ? "第 I 步 / 共 V 步" : "STEP I / V"}
            </span>
          </div>

          {/* 台阶导航 */}
          <TempleStepsNavigation />
        </div>
      );
    }
    case 2: {
      // 场景 2：左右不对称辩论 (Dual - Light Socrates Dialectic)
      const hasAntithesis = beat >= 1;
      const hasSynthesis = beat >= 2;

      return (
        <div className="w-full h-full bg-[#f4f3f0] text-[#1a1b26] p-[4cqw] relative overflow-hidden select-none font-serif flex flex-col justify-between">
          <style>{`
            .slide-in-left {
              animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            .slide-in-right {
              animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            .scale-pop {
              animation: scalePop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
            }
            @keyframes slideInLeft {
              0% { transform: translateX(-5cqw) rotate(-2deg); opacity: 0; }
              100% { transform: translateX(0) rotate(-1deg); opacity: 1; }
            }
            @keyframes slideInRight {
              0% { transform: translateX(5cqw) rotate(2deg); opacity: 0; }
              100% { transform: translateX(0) rotate(1deg); opacity: 1; }
            }
            @keyframes scalePop {
              0% { transform: translate(-50%, -50%) scale(0.7); opacity: 0; filter: blur(4px); }
              100% { transform: translate(-50%, -50%) scale(1) rotate(-1.5deg); opacity: 1; filter: blur(0); }
            }
          `}</style>

          {/* 顶栏学术元数据 */}
          <div className="w-full flex justify-between items-start border-b border-[#1a1b26]/10 pb-[1.5cqh] z-10 shrink-0">
            <div className="flex flex-col gap-0.5">
              <span className="font-serif text-[1.1cqw] tracking-wider uppercase text-[#c5a26f] font-black">
                {isZh ? "雅典民主与政治哲学" : "Classical Greek Philosophy"}
              </span>
              <span className="text-[0.9cqw] text-slate-500 font-mono tracking-tight uppercase">
                {isZh ? "对决：苏格拉底辩证法" : "Dialectic Dual • Thesis & Antithesis"}
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded border border-[#1a1b26]/10 shadow-sm">
              <Scale className="w-3.5 h-3.5 text-[#c5a26f]" />
              <span className="font-mono text-[0.8cqw] text-[#1a1b26] font-bold uppercase">DIALECTIC DISPUTE</span>
            </div>
          </div>

          {/* 左右不对称辩论核心区：完全摒弃50/50，采用3D重叠石牌 */}
          <div className="flex-1 w-full relative my-[2cqh] z-20">
            
            {/* 左侧大理石石板：苏格拉底 (Thesis - Socratic Questioning) - 较大且高 */}
            <div className="absolute left-[3cqw] top-[2cqh] w-[41cqw] min-h-[44cqh] bg-white border-2 border-slate-300 shadow-xl rounded-lg p-[2cqw] flex flex-col justify-between slide-in-left z-10 transition-all duration-500">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#c5a26f]" />
                <span className="font-sans text-[0.9cqw] text-[#c5a26f] font-black tracking-widest uppercase">
                  {isZh ? "正方哲学主张 / THESIS" : "Socratic Thesis (Question)"}
                </span>
              </div>
              <div className="my-[1.5cqh]">
                <h3 className="text-[2.2cqw] font-black text-[#1a1b26] leading-tight mb-2">
                  {isZh ? "哲人治国的理想国蓝图" : "Philosopher-King Rule"}
                </h3>
                <p className="text-[1.25cqw] leading-relaxed text-slate-700 italic">
                  {isZh 
                    ? "“正义的城邦应当由洞察真理真知的『哲人王』统治。平民的盲目与激进极易导致暴政，唯有至高理性才能统筹城邦之秩序与德行。”" 
                    : "“A just polis must be ruled by 'Philosopher-Kings' who behold the absolute Form of the Good. Populist passion yields chaos; only divine reason secures order.”"}
                </p>
              </div>
              <span className="font-sans text-[0.85cqw] text-slate-400 block text-right">
                — Socrates / 苏格拉底
              </span>
            </div>

            {/* 右侧粗粝红砂岩石板：色拉叙马霍斯 (Antithesis - Sophist claim) - 较小且低，Beat 1滑入 */}
            <div className={`absolute right-[3cqw] bottom-[1cqh] w-[35cqw] min-h-[38cqh] bg-[#ece9df] border-2 border-[#cbc8b8] shadow-2xl rounded-lg p-[1.8cqw] flex flex-col justify-between z-20 transition-all duration-700 ${
              hasAntithesis ? "slide-in-right opacity-100" : "opacity-0 translate-x-[10cqw]"
            }`}>
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#1a1b26]" />
                <span className="font-sans text-[0.9cqw] text-[#1a1b26] font-black tracking-widest uppercase">
                  {isZh ? "反方智者主张 / ANTITHESIS" : "Sophist Antithesis (Counter)"}
                </span>
              </div>
              <div className="my-[1.5cqh]">
                <h3 className="text-[2cqw] font-black text-[#1a1b26] leading-tight mb-2">
                  {isZh ? "强权即公理，胜者即正义" : "Might Makes Right Claims"}
                </h3>
                <p className="text-[1.2cqw] leading-relaxed text-[#1a1b26] italic">
                  {isZh 
                    ? "“正义不过是强者的利益！城邦非哲人的私塾，而是自由公民的博弈场。大众在辩论中达成的广泛法治，才是抵御暴君的唯一防线。”" 
                    : "“Justice is nothing but the interest of the stronger! The polis is no school of elites, but a community. Public law under wide debate is our sole shield.”"}
                </p>
              </div>
              <span className="font-sans text-[0.85cqw] text-slate-500 block text-right">
                — Thrasymachus / 色拉叙马霍斯
              </span>
            </div>

            {/* Beat 2: 金色大理石石牌 (Synthesis) 横跨两者，居中浮动爆发 */}
            {hasSynthesis && (
              <div className="absolute left-[50%] top-[50%] w-[36cqw] h-[34cqh] bg-gradient-to-br from-[#fffdf5] to-[#f4f0df] border-4 border-double border-[#c5a26f] shadow-[0_15px_40px_rgba(184,115,51,0.35)] rounded-xl p-[1.5cqw] flex flex-col justify-between scale-pop z-30">
                <div className="flex items-center justify-between border-b border-[#c5a26f]/30 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <Scroll className="w-4 h-4 text-[#c5a26f] animate-spin-slow" />
                    <span className="font-sans text-[0.95cqw] text-[#c5a26f] font-black tracking-wider uppercase">
                      {isZh ? "辩证整合 / LOGOS SYNTHESIS" : "LOGOS SYNTHESIS"}
                    </span>
                  </div>
                  <Award className="w-4 h-4 text-[#c5a26f]" />
                </div>
                <div className="text-center my-auto">
                  <h4 className="text-[2.1cqw] font-black text-[#c5a26f] tracking-wide mb-1">
                    {isZh ? "真理在论辩中涌现" : "Emergent Public Truth"}
                  </h4>
                  <p className="text-[1.15cqw] leading-relaxed text-[#1a1b26] font-semibold">
                    {isZh 
                      ? "“真理绝非任何一方独占，而是在公共广场永无止境的思辨摩擦与理性交叉检验中（Elenches），徐徐显露其神圣轮廓。”" 
                      : "“Absolute dogmas dissolve. Truth emerges gradually through the relentless friction of public cross-examination under the Stoa.”"}
                  </p>
                </div>
                <div className="text-center border-t border-[#c5a26f]/20 pt-1.5 font-sans text-[0.85cqw] text-[#c5a26f] font-bold tracking-widest uppercase">
                  {isZh ? "✓ 逻各斯理性印证" : "✓ LOGOS CERTIFIED CONSENSUS"}
                </div>
              </div>
            )}
          </div>

          {/* 底部信息与导航 */}
          <div className="w-full flex justify-between items-center border-t border-[#1a1b26]/10 pt-[1cqh] z-10 shrink-0 pb-[12cqh]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[0.85cqw] text-slate-500 uppercase tracking-wider">{isZh ? "实时遥测:" : "TELEMETRY:"}</span>
              <span className="font-mono text-[0.9cqw] bg-[#c5a26f]/10 text-[#c5a26f] border border-[#c5a26f]/30 px-3 py-0.5 rounded-full font-bold">
                {hasSynthesis 
                  ? (isZh ? "辩证统一 • 达成理性共识" : "Synthesis Locked • Logos Aligned")
                  : (hasAntithesis ? (isZh ? "两极交锋 • 引入智者反驳" : "Antithesis Engaged • Sophist Reply") : (isZh ? "单方论证 • 哲人王假说" : "Thesis Declared • Socratic Blueprint"))}
              </span>
            </div>
            <span className="font-mono text-[0.8cqw] text-slate-500 uppercase tracking-widest">
              {isZh ? "第 II 步 / 共 V 步" : "STEP II / V"}
            </span>
          </div>

          {/* 台阶导航 */}
          <TempleStepsNavigation />
        </div>
      );
    }
    case 3: {
      // 场景 3：SVG圆形广场 (Process - Standard Winding Steps)
      const stepIndex = beat; // 0, 1, 2 分别对应 3 个步骤

      return (
        <div className="w-full h-full bg-[#f4f3f0] text-[#1a1b26] p-[4cqw] relative overflow-hidden select-none font-serif flex flex-col justify-between">
          <style>{`
            .stagger-card {
              animation: staggerCardIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            @keyframes staggerCardIn {
              0% { transform: translateY(2cqh) scale(0.95); opacity: 0; }
              100% { transform: translateY(0) scale(1); opacity: 1; }
            }
            .pulse-ring {
              animation: circlePulse 2.5s infinite ease-in-out;
            }
            @keyframes circlePulse {
              0%, 100% { stroke-dashoffset: 0; stroke-width: 1.5; opacity: 0.4; }
              50% { stroke-dashoffset: 40; stroke-width: 3; opacity: 0.9; }
            }
          `}</style>

          {/* 顶栏元数据 */}
          <div className="w-full flex justify-between items-start border-b border-[#1a1b26]/10 pb-[1.5cqh] z-10 shrink-0">
            <div className="flex flex-col gap-0.5">
              <span className="font-serif text-[1.1cqw] tracking-wider uppercase text-[#c5a26f] font-black">
                {isZh ? "雅典民主与政治哲学" : "Classical Greek Philosophy"}
              </span>
              <span className="text-[0.9cqw] text-slate-500 font-mono tracking-tight uppercase">
                {isZh ? "议事路径：阿果拉圆形广场" : "Agora Legislative Process • Circular Plaza"}
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded border border-[#1a1b26]/10 shadow-sm">
              <Flame className="w-3.5 h-3.5 text-[#c5a26f]" />
              <span className="font-mono text-[0.8cqw] text-[#1a1b26] font-bold uppercase">ASSEMBLY TIMELINE</span>
            </div>
          </div>

          {/* 三维圆形广场和不规则文本卡片混排布局 */}
          <div className="flex-1 w-full relative my-[2cqh] z-20 flex items-center justify-between">
            
            {/* 左侧：3D SVG 半圆形露天长椅广场 (sweeping, 3D SVG circular public square plaza layout) */}
            <div className="w-[42cqw] h-[45cqh] relative">
              <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                <defs>
                  {/* 石阶长椅径向大理石白渐变 */}
                  <radialGradient id="bench-grad" cx="50%" cy="100%" r="90%">
                    <stop offset="0%" stopColor="#fffdf8" />
                    <stop offset="40%" stopColor="#efede5" />
                    <stop offset="70%" stopColor="#d3d1c8" />
                    <stop offset="100%" stopColor="#b4b2a9" />
                  </radialGradient>
                  {/* 火盆金色发光 */}
                  <filter id="altar-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* 希腊广场地面同心圆 */}
                <ellipse cx="200" cy="380" rx="190" ry="110" fill="none" stroke="#bebcb3" strokeWidth="1" strokeDasharray="3 3" />
                <ellipse cx="200" cy="380" rx="140" ry="80" fill="none" stroke="#dcdbce" strokeWidth="1" />
                <ellipse cx="200" cy="380" rx="90" ry="50" fill="none" stroke="#cbcaa0" strokeWidth="1.2" />

                {/* Sweeping 三维半圆形长凳 (3D Semicircular benches) */}
                {/* 顶层高 bench (最外圈) */}
                <path 
                  d="M 20,380 A 180,105 0 0,1 380,380" 
                  fill="none" 
                  stroke="url(#bench-grad)" 
                  strokeWidth="28" 
                  strokeLinecap="round"
                  className="opacity-90"
                />
                <path 
                  d="M 20,381 A 180,105 0 0,1 380,381" 
                  fill="none" 
                  stroke="#a19f95" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                />

                {/* 中层 bench */}
                <path 
                  d="M 50,380 A 150,85 0 0,1 350,380" 
                  fill="none" 
                  stroke="url(#bench-grad)" 
                  strokeWidth="22" 
                  strokeLinecap="round"
                  className="opacity-90"
                />
                <path 
                  d="M 50,381 A 150,85 0 0,1 350,381" 
                  fill="none" 
                  stroke="#a19f95" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                />

                {/* 内层 bench */}
                <path 
                  d="M 85,380 A 115,65 0 0,1 315,380" 
                  fill="none" 
                  stroke="url(#bench-grad)" 
                  strokeWidth="16" 
                  strokeLinecap="round"
                  className="opacity-95"
                />

                {/* 随着 beat 进展，高亮长凳对应的扇形思辩区域 */}
                {stepIndex >= 0 && (
                  <path 
                    d="M 20,380 A 180,105 0 0,1 160,290" 
                    fill="none" 
                    stroke="#c5a26f" 
                    strokeWidth="8" 
                    strokeLinecap="round"
                    strokeOpacity="0.8"
                    className="pulse-ring"
                    strokeDasharray="150"
                  />
                )}
                {stepIndex >= 1 && (
                  <path 
                    d="M 240,290 A 180,105 0 0,1 380,380" 
                    fill="none" 
                    stroke="#b87333" 
                    strokeWidth="8" 
                    strokeLinecap="round"
                    strokeOpacity="0.8"
                    className="pulse-ring"
                    strokeDasharray="150"
                  />
                )}
                {stepIndex >= 2 && (
                  <ellipse 
                    cx="200" 
                    cy="380" 
                    rx="60" 
                    ry="34" 
                    fill="none" 
                    stroke="#ffd8a8" 
                    strokeWidth="4" 
                    className="animate-pulse"
                    filter="url(#altar-glow)"
                  />
                )}

                {/* 广场核心的 3D 逻各斯中央祭坛 (Core Altar) */}
                <g transform="translate(180,340)">
                  {/* 基座 */}
                  <rect x="10" y="24" width="20" height="18" fill="#dad8cf" stroke="#9b9991" strokeWidth="0.8" />
                  <rect x="7" y="38" width="26" height="5" fill="#c3c1b8" stroke="#8c8a81" strokeWidth="0.8" />
                  <polygon points="12,24 28,24 25,18 15,18" fill="#e2e1d7" stroke="#b0ae9f" strokeWidth="0.8" />
                  
                  {/* 核心思辨火盆 */}
                  <ellipse cx="20" cy="18" rx="8" ry="3" fill="#a19f96" />
                  {stepIndex >= 2 ? (
                    <>
                      {/* 黄金圣火 */}
                      <path d="M 15,16 Q 20,-3 20,-2 Q 22,-5 25,16 Z" fill="url(#fire-grad)" filter="url(#altar-glow)" className="animate-pulse" />
                      <ellipse cx="20" cy="17" rx="5" ry="2" fill="#ffd8a8" />
                    </>
                  ) : (
                    <circle cx="20" cy="16" r="1.5" fill="#5c5a52" />
                  )}
                </g>

                <defs>
                  <linearGradient id="fire-grad" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#e8590c" />
                    <stop offset="60%" stopColor="#fcc419" />
                    <stop offset="100%" stopColor="#fff3bf" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* 右侧：不规则分布的长凳文本卡片 (Text cards are placed unevenly around, lighting up in sequence) */}
            <div className="w-[38cqw] flex flex-col gap-[1.5cqh] justify-center pr-[1cqw]">
              
              {/* 卡片 1 (Thesis): 五百人议事初审 (Boule Proposal) */}
              <div className={`border p-3 rounded-lg shadow-md transition-all duration-700 stagger-card ${
                stepIndex >= 0 
                  ? "bg-white border-[#c5a26f]/60 translate-x-0 scale-100 opacity-100" 
                  : "bg-white/40 border-slate-200 translate-x-3 scale-95 opacity-25"
              }`}>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-sans text-[0.85cqw] font-black text-[#c5a26f] uppercase tracking-wider">
                    {isZh ? "步骤 01 / 预备提案" : "STEP 01 / PROPOSAL"}
                  </span>
                  <div className="w-5 h-5 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center font-mono text-[0.8cqw] font-bold text-slate-700">I</div>
                </div>
                <h4 className="text-[1.5cqw] font-black text-[#1a1b26] mb-0.5">
                  {isZh ? "五百人会议提案审查" : "Council of 500 Screening"}
                </h4>
                <p className="text-[1.05cqw] text-slate-600 font-sans leading-tight">
                  {isZh 
                    ? "抽签产生的五百人议事会（Boule）对民间提案进行理性预审，过滤无关诉求，拟定庄严的法案提纲。" 
                    : "The Council of 500 screens citizen initiatives by strict legal filter, framing organized bills and removing rhetorical noise."}
                </p>
              </div>

              {/* 卡片 2 (Antithesis): 普尼克斯讲坛争鸣 (Rostrum Speech) */}
              <div className={`border p-3 rounded-lg shadow-md transition-all duration-700 stagger-card [animation-delay:200ms] ${
                stepIndex >= 1 
                  ? "bg-white border-[#b87333]/60 translate-x-0 scale-100 opacity-100" 
                  : "bg-white/40 border-slate-200 translate-x-3 scale-95 opacity-25"
              }`}>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-sans text-[0.85cqw] font-black text-[#b87333] uppercase tracking-wider">
                    {isZh ? "步骤 02 / 广场争鸣" : "STEP 02 / ROSTRUM ORATION"}
                  </span>
                  <div className="w-5 h-5 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center font-mono text-[0.8cqw] font-bold text-slate-700">II</div>
                </div>
                <h4 className="text-[1.5cqw] font-black text-[#1a1b26] mb-0.5">
                  {isZh ? "普尼克斯讲坛修辞交锋" : "The Clashing at the Bema"}
                </h4>
                <p className="text-[1.05cqw] text-slate-600 font-sans leading-tight">
                  {isZh 
                    ? "双方演说家依次登上阿果拉广场石质讲坛（Bema），运用严密的三段论与修辞，正面撞击现场数千名公民的理智。" 
                    : "Orators ascend the stone pulpit (Bema), utilizing pristine rhetoric and strict syllogism to sway thousands of voting citizens."}
                </p>
              </div>

              {/* 卡片 3 (Synthesis): 全体大会表决 (Assembly Decision) */}
              <div className={`border p-3 rounded-lg shadow-md transition-all duration-700 stagger-card [animation-delay:400ms] ${
                stepIndex >= 2 
                  ? "bg-[#fffdf5] border-[#c5a26f] shadow-[0_4px_15px_rgba(184,115,51,0.15)] translate-x-0 scale-100 opacity-100" 
                  : "bg-white/40 border-slate-200 translate-x-3 scale-95 opacity-25"
              }`}>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-sans text-[0.85cqw] text-[#c5a26f] font-black uppercase tracking-wider">
                    {isZh ? "步骤 03 / 理性决议" : "STEP 03 / ASSEMBLY CONSENSUS"}
                  </span>
                  <div className="w-5 h-5 rounded-full bg-[#c5a26f] flex items-center justify-center font-mono text-[0.8cqw] font-bold text-white">III</div>
                </div>
                <h4 className="text-[1.5cqw] font-black text-[#1a1b26] mb-0.5 flex items-center gap-1">
                  {isZh ? "全体大会理性融合表决" : "Sovereign Assembly Decree"}
                </h4>
                <p className="text-[1.05cqw] text-slate-700 font-sans leading-tight">
                  {isZh 
                    ? "真理在逻各斯的交融中结晶。在大会庄严举手或陶片投掷下，冲突转化为不朽的城邦成法，长久指引社群。" 
                    : "The fiery debate converges. Under absolute majority vote, the diverse arguments are fused into a permanent state law."}
                </p>
              </div>

            </div>
          </div>

          {/* 底部导航和技术状态 */}
          <div className="w-full flex justify-between items-center border-t border-[#1a1b26]/10 pt-[1cqh] z-10 shrink-0 pb-[12cqh]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[0.85cqw] text-slate-500 uppercase tracking-wider">{isZh ? "实时操作:" : "BEAT ACTION:"}</span>
              <span className="font-mono text-[0.9cqw] bg-[#c5a26f]/10 text-[#c5a26f] border border-[#c5a26f]/30 px-3 py-0.5 rounded-full font-bold">
                {stepIndex === 0 && (isZh ? "宣读：审查民间草案" : "Convene • Reading Draft Decrees")}
                {stepIndex === 1 && (isZh ? "演说：讲坛逻辑交锋" : "Debate • Ascending the Stone Bema")}
                {stepIndex === 2 && (isZh ? "表决：达成城邦成法" : "Enact • Sovereign State Decree Sealed")}
              </span>
            </div>
            <span className="font-mono text-[0.8cqw] text-slate-500 uppercase tracking-widest">
              {isZh ? "第 III 步 / 共 V 步" : "STEP III / V"}
            </span>
          </div>

          {/* 台阶导航 */}
          <TempleStepsNavigation />
        </div>
      );
    }
    case 4: {
      // 场景 4：投票矩阵 (Matrix - Dense Ostrakon Ballot Grid)
      const isFullGrid = beat >= 1;
      const isVerdictActive = beat >= 2;

      return (
        <div className="w-full h-full bg-[#f4f3f0] text-[#1a1b26] p-[4cqw] relative overflow-hidden select-none font-serif flex flex-col justify-between">
          <style>{`
            .deme-grid {
              display: grid;
              grid-template-columns: repeat(5, minmax(0, 1fr));
              gap: 1cqw;
            }
            .verdict-stamp {
              animation: verdictStampIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
            }
            @keyframes verdictStampIn {
              0% { transform: scale(2) rotate(-15deg); opacity: 0; filter: blur(4px); }
              100% { transform: scale(1) rotate(-3deg); opacity: 1; filter: blur(0); }
            }
          `}</style>

          {/* 顶栏 */}
          <div className="w-full flex justify-between items-start border-b border-[#1a1b26]/10 pb-[1.5cqh] z-10 shrink-0">
            <div className="flex flex-col gap-0.5">
              <span className="font-serif text-[1.1cqw] tracking-wider uppercase text-[#c5a26f] font-black">
                {isZh ? "雅典民主与政治哲学" : "Classical Greek Philosophy"}
              </span>
              <span className="text-[0.9cqw] text-slate-500 font-mono tracking-tight uppercase">
                {isZh ? "主权表决：十部落公民大会" : "Ekklesia Ballot Matrix • Ten Sovereign Demes"}
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded border border-[#1a1b26]/10 shadow-sm">
              <Users className="w-3.5 h-3.5 text-[#c5a26f]" />
              <span className="font-mono text-[0.8cqw] text-[#1a1b26] font-bold uppercase">DEME BALLOT MATRIX</span>
            </div>
          </div>

          {/* 公民大会部落表决密集矩阵布局：不规则混排一个判定石板 */}
          <div className="flex-1 w-full my-[1.5cqh] z-20 flex flex-col justify-between gap-[1.5cqh]">
            
            {/* 顶层：十部落大理石网格表决状况 */}
            <div className="w-full">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-[1.5cqw] font-black text-slate-800 uppercase tracking-widest flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#b87333] animate-pulse" />
                  {isZh ? "十主权部落表决实时遥测" : "Sovereign Deme Ballot Live Telemetry"}
                </h3>
                <span className="text-[0.8cqw] font-mono text-slate-500">6,000+ Quorum Verification</span>
              </div>

              {/* 2行5列密集大理石网格 (Ten voting demes) */}
              <div className="deme-grid">
                {DEMES.map((deme, idx) => {
                  // Beat 0 时只有前 4 个部落亮起，Beat 1/2 时全部部落亮起
                  const isDemeActive = isFullGrid || idx < 4;
                  
                  return (
                    <div 
                      key={`deme-${deme.id}`}
                      className={`border bg-white rounded p-2 flex flex-col justify-between shadow-sm transition-all duration-500 ${
                        isDemeActive 
                          ? "border-[#b87333] shadow-[0_0_8px_rgba(184,115,51,0.2)]" 
                          : "border-slate-200 opacity-30 scale-95"
                      }`}
                    >
                      <div className="flex justify-between items-start border-b border-slate-100 pb-1">
                        <span className="font-serif text-[1cqw] font-black text-[#1a1b26]">
                          {isZh ? deme.nameZh : deme.nameEn}
                        </span>
                        <span className="font-mono text-[0.7cqw] text-slate-400">#{deme.id}</span>
                      </div>
                      
                      {/* 投票遥测详情：黏土陶片数、青铜投票币数 */}
                      <div className="mt-1 flex flex-col gap-1 font-mono text-[0.8cqw] text-slate-500">
                        <div className="flex justify-between items-center">
                          <span>Clay Ostraka:</span>
                          <span className={isDemeActive ? "font-bold text-[#b87333]" : "text-slate-400"}>
                            {deme.clay}v
                          </span>
                        </div>
                        <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#b87333] transition-all duration-1000" 
                            style={{ width: isDemeActive ? `${(deme.clay / 800) * 100}%` : "0%" }}
                          />
                        </div>

                        <div className="flex justify-between items-center">
                          <span>Bronze Coin:</span>
                          <span className={isDemeActive ? "font-bold text-[#c5a26f]" : "text-slate-400"}>
                            {deme.bronze}v
                          </span>
                        </div>
                        <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#c5a26f] transition-all duration-1000" 
                            style={{ width: isDemeActive ? `${(deme.bronze / 800) * 100}%` : "0%" }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 底层：左右混排。左侧为文字阐释，右侧为陶片放逐判定板 */}
            <div className="w-full flex justify-between items-stretch gap-[3cqw] flex-1">
              
              {/* 左侧说明面板 */}
              <div className="w-[38cqw] flex flex-col justify-center">
                <h4 className="text-[1.8cqw] font-black text-[#1a1b26] mb-1">
                  {isZh ? "公民大会（Ekklesia）票决防御" : "Sovereign Ballot Shield"}
                </h4>
                <p className="text-[1.2cqw] text-slate-700 leading-tight">
                  {isZh 
                    ? "克里斯提尼改革将雅典重组为十个主权部落。在防止野心家复辟僭主的决战中，各部落公民带着刻名的黏土碎片（Ostraka）和青铜表决片庄严集会，维护城邦民主的防线。" 
                    : "The ten demes of Attica meet in assembly. In defensive battles against rising tyrants, citizens scratch suspects' names onto broken pottery (Ostraka) to decide peaceful banishment."}
                </p>
              </div>

              {/* 右侧：3D大理石“陶片放逐判定版” (Ostracism determination board) */}
              <div className="w-[36cqw] relative">
                {isVerdictActive ? (
                  <div className="w-full h-full bg-[#fffdf6] border-2 border-[#b87333] shadow-lg rounded p-3 flex flex-col justify-between verdict-stamp relative">
                    {/* 背景碎裂陶片 SVG (Broken Ostrakon Silhouette) */}
                    <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none p-3">
                      <svg viewBox="0 0 100 100" className="w-[12cqw] h-[12cqw] text-[#b87333]">
                        {/* 模拟破碎边缘陶片 */}
                        <path d="M 20,10 L 80,15 L 95,50 L 70,90 L 30,85 L 10,50 Z" fill="currentColor" />
                        <line x1="10" y1="50" x2="95" y2="50" stroke="#f4f3f0" strokeWidth="4" />
                        <line x1="50" y1="15" x2="50" y2="85" stroke="#f4f3f0" strokeWidth="3" />
                      </svg>
                    </div>

                    <div className="flex justify-between items-center border-b border-[#b87333]/30 pb-1">
                      <span className="font-sans text-[0.8cqw] text-[#b87333] font-black tracking-widest uppercase">
                        {isZh ? "✓ 雅典城邦公决判定书" : "✓ OSTRACISM BALLOT VERDICT"}
                      </span>
                      <Shield className="w-3.5 h-3.5 text-[#b87333]" />
                    </div>

                    <div className="my-auto text-center relative z-10">
                      <div className="font-mono text-[1cqw] text-slate-500 uppercase tracking-widest mb-0.5">
                        {isZh ? "判定目标：僭政危险分子" : "TARGET DESIGNATE"}
                      </div>
                      <h5 className="text-[2.2cqw] font-black text-[#1a1b26] tracking-wider mb-1">
                        {isZh ? "阿希比阿德斯" : "ALCIBIADES"}
                      </h5>
                      <p className="text-[1.15cqw] font-sans text-slate-600 leading-tight">
                        {isZh 
                          ? "十部落汇总有效陶片 6,420 票（超过法定起征人数），被判定危害民主政治，和平流放十载！" 
                          : "Ten Demes aggregate 6,420 valid ostraka. Deemed a threat to equality. Peaceful exile of ten years is enacted."}
                      </p>
                    </div>

                    <div className="flex justify-between items-center border-t border-[#b87333]/20 pt-1 font-mono text-[0.85cqw] text-[#b87333] font-bold uppercase">
                      <span>{isZh ? "判决生效：Ekklesia" : "ENACTED BY ASSEMBLY"}</span>
                      <span>{isZh ? "陶片数: 6,420" : "TALLY: 6,420v"}</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full border-2 border-dashed border-slate-300 rounded flex flex-col items-center justify-center text-slate-400 bg-slate-50/50">
                    <Shield className="w-8 h-8 text-slate-300 mb-1 animate-pulse" />
                    <span className="text-[1.1cqw] font-sans">
                      {isZh ? "等待十部落陶片汇总完毕以开启裁决" : "Awaiting final tallies to invoke verdict"}
                    </span>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* 底部导航 */}
          <div className="w-full flex justify-between items-center border-t border-[#1a1b26]/10 pt-[1cqh] z-10 shrink-0 pb-[12cqh]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[0.85cqw] text-slate-500 uppercase tracking-wider">{isZh ? "实时操作:" : "BEAT ACTION:"}</span>
              <span className="font-mono text-[0.9cqw] bg-[#c5a26f]/10 text-[#c5a26f] border border-[#c5a26f]/30 px-3 py-0.5 rounded-full font-bold">
                {isVerdictActive 
                  ? (isZh ? "判定：陶片放逐，宣判流放僭主" : "Enact • Exile Decreed for Alcibiades") 
                  : (isFullGrid ? (isZh ? "点数：十部落陶片投票完全汇总" : "Aggregate • Tallying Ten Attica Demes") : (isZh ? "预投：先期表决部落投票载入" : "Initiate • Pre-polling Core Demes Active"))}
              </span>
            </div>
            <span className="font-mono text-[0.8cqw] text-slate-500 uppercase tracking-widest">
              {isZh ? "第 IV 步 / 共 V 步" : "STEP IV / V"}
            </span>
          </div>

          {/* 台阶导航 */}
          <TempleStepsNavigation />
        </div>
      );
    }
    case 5: {
      // 场景 5：梭伦法典石碑 (Ledger - Extreme Agora Stele)
      const isSteleFull = beat >= 1;
      const isStamped = beat >= 2;

      return (
        <div className="w-full h-full bg-[#f4f3f0] text-[#1a1b26] p-[4cqw] relative overflow-hidden select-none font-serif flex flex-col justify-between">
          <style>{`
            /* 大理石法典碑三栏排版 */
            .stele-container {
              display: grid;
              grid-template-columns: repeat(3, minmax(0, 1fr));
              gap: 1.5cqw;
            }
            .stamped-owl {
              animation: stampOwlAnimate 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.2) forwards;
            }
            @keyframes stampOwlAnimate {
              0% { transform: scale(3.5) rotate(-35deg); opacity: 0; filter: blur(6px); }
              70% { transform: scale(0.95) rotate(4deg); opacity: 0.95; }
              100% { transform: scale(1) rotate(0deg); opacity: 1; filter: blur(0) drop-shadow(0 4px 15px rgba(139, 90, 43, 0.55)); }
            }
          `}</style>

          {/* 顶栏 */}
          <div className="w-full flex justify-between items-start border-b border-[#1a1b26]/10 pb-[1.5cqh] z-10 shrink-0">
            <div className="flex flex-col gap-0.5">
              <span className="font-serif text-[1.1cqw] tracking-wider uppercase text-[#c5a26f] font-black">
                {isZh ? "雅典民主与政治哲学" : "Classical Greek Philosophy"}
              </span>
              <span className="text-[0.9cqw] text-slate-500 font-mono tracking-tight uppercase">
                {isZh ? "宪政丰碑：梭伦立法大宪章" : "Solon's Constitutional Stele • State Law"}
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded border border-[#1a1b26]/10 shadow-sm">
              <Coins className="w-3.5 h-3.5 text-[#c5a26f]" />
              <span className="font-mono text-[0.8cqw] text-[#1a1b26] font-bold uppercase">SOVEREIGN STELE</span>
            </div>
          </div>

          {/* 立法大宪章碑体核心区：重型三栏石碑 (A heavy, three-column classical legislative tablet) */}
          <div className="flex-1 w-full my-[1.5cqh] z-20 flex flex-col justify-between bg-[#eae8de] border-2 border-[#cbcaa0] rounded-lg shadow-inner p-[1.5cqw] relative">
            
            {/* 神庙山墙顶装饰浮雕 (Pediment & Tympanum) */}
            <div className="w-full flex flex-col items-center border-b-2 border-double border-[#cbcaa0] pb-2 mb-2">
              <svg className="w-[18cqw] h-[4.5cqh]" viewBox="0 0 200 40" fill="none" stroke="#8c8a81" strokeWidth="1.2">
                {/* 经典的三角山墙轮廓 */}
                <polygon points="10,35 190,35 100,5" fill="#efede5" />
                {/* 山墙内部的希腊圣鹰与橄榄枝微小浮雕雕刻 */}
                <circle cx="100" cy="23" r="5" fill="none" />
                <line x1="88" y1="23" x2="112" y2="23" />
                <line x1="100" y1="12" x2="100" y2="30" />
              </svg>
              <h3 className="text-[1.8cqw] font-black text-[#1a1b26] tracking-wider uppercase">
                {isZh ? "雅 典 城 邦 宪 政 法 典" : "DECREES OF THE ATHENIAN POLIS"}
              </h3>
            </div>

            {/* 三栏具体法律条文 */}
            <div className="stele-container flex-1 items-stretch">
              
              {/* 第一栏：主权部落章程 (Sovereign Deme Charters) */}
              <div className="border-r border-[#cbcaa0]/60 pr-4 flex flex-col justify-between">
                <div>
                  <h4 className="text-[1.3cqw] font-black text-[#b87333] mb-1.5 pb-1 border-b border-[#cbcaa0]/30 flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" />
                    {isZh ? "I. 主权部落自治特许令" : "I. Deme Autonomy Charters"}
                  </h4>
                  <p className="text-[1.05cqw] text-slate-700 leading-tight font-sans italic">
                    {isZh 
                      ? "“雅典各主权部落在宪法下完全自治。其公职人员、五百人议事会成员必须由无记名抽签任命，确保平民与贵族在政治职位上拥有一致的等和权。”" 
                      : "“Each deme governs its soil under collective law. Deme magistrates and council members must be appointed by lot, securing pure political equality.”"}
                  </p>
                </div>
                <div className="text-[0.8cqw] font-mono text-slate-400">CHARTER.LAW.01</div>
              </div>

              {/* 第二栏：宪法修正法案条款 (Constitutional Articles) */}
              <div className={`border-r border-[#cbcaa0]/60 px-2 flex flex-col justify-between transition-all duration-500 ${
                isSteleFull ? "opacity-100" : "opacity-15"
              }`}>
                <div>
                  <h4 className="text-[1.3cqw] font-black text-[#b87333] mb-1.5 pb-1 border-b border-[#cbcaa0]/30 flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5" />
                    {isZh ? "II. 反僭主制修宪条款" : "II. Anti-Tyranny Articles"}
                  </h4>
                  <p className="text-[1.05cqw] text-slate-700 leading-tight font-sans italic">
                    {isZh 
                      ? "“严禁任何人通过演说煽动暴乱或谋取独裁独专之僭主。凡企图颠覆十部落联合宪政结构、践踏公民直言权者，城邦全体自由人有权得而诛之。”" 
                      : "“No citizen shall usurp absolute control. Anyone who attempts to dissolve the ten demes or suppress Parrhesia shall be outlawed from the state.”"}
                  </p>
                </div>
                <div className="text-[0.8cqw] font-mono text-slate-400">CONST.LAW.08</div>
              </div>

              {/* 第三栏：公民表决投票率 (Voting Turnout Ledger) */}
              <div className={`pl-4 flex flex-col justify-between transition-all duration-500 ${
                isSteleFull ? "opacity-100" : "opacity-15"
              }`}>
                <div>
                  <h4 className="text-[1.3cqw] font-black text-[#b87333] mb-1.5 pb-1 border-b border-[#cbcaa0]/30 flex items-center gap-1">
                    <Scale className="w-3.5 h-3.5" />
                    {isZh ? "III. 全民表决投票遥测录" : "III. State Vote Margins"}
                  </h4>
                  <div className="flex flex-col gap-1.5 mt-1 font-mono text-[0.95cqw] text-slate-600">
                    <div className="flex justify-between border-b border-slate-200/50 pb-0.5">
                      <span>{isZh ? "全民投票率:" : "Voter Turnout:"}</span>
                      <span className="font-bold text-emerald-700">84.5%</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/50 pb-0.5">
                      <span>{isZh ? "法定多数人数:" : "Quorum Met:"}</span>
                      <span className="font-bold text-slate-700">6,000+ v</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/50 pb-0.5">
                      <span>{isZh ? "判定流放票:" : "Banish Margin:"}</span>
                      <span className="font-bold text-[#b87333]">+4,290</span>
                    </div>
                  </div>
                </div>
                <div className="text-[0.8cqw] font-mono text-slate-500">STELE: ATH.LAW.402</div>
              </div>

            </div>

            {/* 底部 stamped 巨大的雅典主权猫头鹰青铜币章 (Athens sovereign Owl bronze coin emblem) */}
            {isStamped && (
              <div className="absolute right-[3cqw] bottom-[1.5cqh] w-[14cqw] h-[14cqw] bg-gradient-to-br from-[#ffdca3] via-[#caa268] to-[#9c773e] border-4 border-[#fff1cd] rounded-full flex items-center justify-center shadow-2xl stamped-owl z-30">
                <svg className="w-[85%] h-[85%] text-[#fff3bf]" viewBox="0 0 100 100">
                  <defs>
                    <radialGradient id="owl-inner" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#fae0ad" />
                      <stop offset="80%" stopColor="#caa268" />
                      <stop offset="100%" stopColor="#876233" />
                    </radialGradient>
                  </defs>
                  
                  {/* 印章圆形大理石币面 */}
                  <circle cx="50" cy="50" r="48" fill="url(#owl-inner)" stroke="#eec584" strokeWidth="1.2" />

                  {/* 雅典娜圣战猫头鹰 (Owl of Athena Emblem Outline) */}
                  {/* 双眼 */}
                  <circle cx="38" cy="38" r="8" fill="none" stroke="#fff5d1" strokeWidth="2.5" />
                  <circle cx="38" cy="38" r="2.5" fill="#1a1b26" />
                  <circle cx="62" cy="38" r="8" fill="none" stroke="#fff5d1" strokeWidth="2.5" />
                  <circle cx="62" cy="38" r="2.5" fill="#1a1b26" />
                  
                  {/* 鹰喙 */}
                  <polygon points="50,40 47,48 53,48" fill="#fff5d1" />

                  {/* 身体羽毛结构 */}
                  <path d="M 32,46 Q 50,42 68,46 L 68,75 Q 50,88 32,75 Z" fill="none" stroke="#fff5d1" strokeWidth="2" />
                  {/* 翅膀羽毛 */}
                  <path d="M 32,46 L 24,70 L 38,72 Z" fill="#b0864e" stroke="#fff5d1" strokeWidth="1.2" />
                  <path d="M 68,46 L 76,70 L 62,72 Z" fill="#b0864e" stroke="#fff5d1" strokeWidth="1.2" />

                  {/* 双足 */}
                  <line x1="42" y1="75" x2="42" y2="84" stroke="#fff5d1" strokeWidth="2" strokeLinecap="round" />
                  <line x1="58" y1="75" x2="58" y2="84" stroke="#fff5d1" strokeWidth="2" strokeLinecap="round" />

                  {/* 橄榄枝与弯月 (Olive branch & Moon) */}
                  <path d="M 12,22 Q 18,24 22,18" fill="none" stroke="#fff5d1" strokeWidth="1.5" />
                  <circle cx="14" cy="21" r="1.5" fill="#fff5d1" />
                  <circle cx="20" cy="19" r="1.5" fill="#fff5d1" />
                  <path d="M 15,30 A 6,6 0 0,1 21,35 A 4,4 0 0,0 15,30" fill="#fff5d1" /> {/* 弯月 */}

                  {/* 希腊字符“ΑΘΕ” (Alpha-Theta-Epsilon) - 代表雅典的缩写 */}
                  <text x="82" y="32" fill="#fff5d1" className="font-serif text-[10px] font-black">A</text>
                  <text x="82" y="47" fill="#fff5d1" className="font-serif text-[10px] font-black">Θ</text>
                  <text x="82" y="62" fill="#fff5d1" className="font-serif text-[10px] font-black">E</text>
                </svg>
              </div>
            )}

          </div>

          {/* 底部技术状态栏 */}
          <div className="w-full flex justify-between items-center border-t border-[#1a1b26]/10 pt-[1cqh] z-10 shrink-0 pb-[12cqh]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[0.85cqw] text-slate-500 uppercase tracking-wider">{isZh ? "实时操作:" : "BEAT ACTION:"}</span>
              <span className="font-mono text-[0.9cqw] bg-[#c5a26f]/10 text-[#c5a26f] border border-[#c5a26f]/30 px-3 py-0.5 rounded-full font-bold">
                {isStamped 
                  ? (isZh ? "封印：盖下主权猫头鹰金印备案" : "Certified • Athens Owl Sovereign Seal Stamped") 
                  : (isSteleFull ? (isZh ? "录入：载入主权投票与表决条款" : "Tally • Sovereign Turnout & Articles Added") : (isZh ? "刻碑：树立部落特许自治碑文" : "Initiate • Carving Deme Autonomy Charter"))}
              </span>
            </div>
            <span className="font-mono text-[0.8cqw] text-slate-500 uppercase tracking-widest">
              {isZh ? "第 V 步 / 共 V 步" : "STEP V / V"}
            </span>
          </div>

          {/* 台阶导航 */}
          <TempleStepsNavigation />
        </div>
      );
    }
    default:
      return null;
  }
}
