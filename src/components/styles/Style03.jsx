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

// 5个场景的头部元数据和 metope 导航图标定义
const SCENES_META = [
  { id: 1, titleZh: "神庙门廊", titleEn: "Portico Truth", Icon: Landmark, badgeEn: "A-TIER CLASSICAL" },
  { id: 2, titleZh: "广场对决", titleEn: "Dialectic Dual", Icon: Scale, badgeEn: "DIALECTIC DISPUTE" },
  { id: 3, titleZh: "民主路径", titleEn: "Agora Process", Icon: Flame, badgeEn: "ASSEMBLY TIMELINE" },
  { id: 4, titleZh: "部落矩阵", titleEn: "Ballot Matrix", Icon: Users, badgeEn: "DEME BALLOT MATRIX" },
  { id: 5, titleZh: "梭伦法典", titleEn: "Solon Stele", Icon: Coins, badgeEn: "SOVEREIGN STELE" }
];

// Top Architrave Metope Tracker 统一头部与导航组件
const TopArchitraveHeader = ({ scene, language, onNavigate }) => {
  const isZh = language === "zh";
  const currentMeta = SCENES_META[scene - 1] || SCENES_META[0];
  const Icon = currentMeta.Icon;

  const subtitlesZh = [
    "雅典民主制辩难 • 绪论",
    "对决：苏格拉底辩证法",
    "议事路径：阿果拉圆形广场",
    "主权表决：十部落公民大会",
    "宪政丰碑：梭伦立法大宪章"
  ];
  const subtitlesEn = [
    "Athenian Agora Debates • Introduction",
    "Dialectic Dual • Thesis & Antithesis",
    "Agora Legislative Process • Circular Plaza",
    "Ekklesia Ballot Matrix • Ten Sovereign Demes",
    "Solon's Constitutional Stele • State Law"
  ];

  const currentSubtitle = isZh ? subtitlesZh[scene - 1] : subtitlesEn[scene - 1];

  // Triglyph component representing three classical vertical grooves
  const Triglyph = () => (
    <div className="w-[1.2cqw] h-[4.5cqh] flex items-center justify-between px-[0.15cqw] shrink-0 border-x border-[#1a1b26]/5 opacity-35 select-none">
      <div className="w-[1.5px] h-[75%] bg-[#1a1b26]" />
      <div className="w-[1.5px] h-[75%] bg-[#1a1b26]" />
      <div className="w-[1.5px] h-[75%] bg-[#1a1b26]" />
    </div>
  );

  return (
    <div className="w-full flex flex-col z-40 shrink-0 mb-[1.5cqh]">
      <style>{`
        @keyframes sundialRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-sundial-rotate {
          animation: sundialRotate 30s linear infinite;
        }
        .greek-fret-band {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='8' viewBox='0 0 16 8'%3E%3Cpath d='M0 4h6V2h-3v4h6V4H16' fill='none' stroke='%231a1b26' stroke-width='0.8' stroke-opacity='0.12'/%3E%3C/svg%3E");
          background-repeat: repeat-x;
        }
      `}</style>

      {/* 1. Header Metadata Area */}
      <div className="w-full flex justify-between items-start pb-[1cqh] border-b border-[#1a1b26]/10">
        <div className="flex flex-col gap-0.5">
          <span className="font-serif text-[1.1cqw] tracking-wider uppercase text-[#c5a26f] font-black">
            {isZh ? "雅典民主与政治哲学" : "Classical Greek Philosophy"}
          </span>
          <span className="text-[0.9cqw] text-slate-500 font-mono tracking-tight uppercase">
            {currentSubtitle}
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded border border-[#1a1b26]/10 shadow-sm transition-all duration-300">
          <Icon className="w-3.5 h-3.5 text-[#c5a26f]" />
          <span className="font-mono text-[0.8cqw] text-[#1a1b26] font-bold uppercase">
            {currentMeta.badgeEn}
          </span>
        </div>
      </div>

      {/* 2. Top Double-Line Architrave Border */}
      <div className="w-full h-[3px] border-b-[3px] border-double border-[#1a1b26]/25 mt-[0.5cqh] mb-[0.2cqh]" />

      {/* 3. Classical Greek Frieze divided into 5 rectangular metopes */}
      <div className="w-full flex items-center justify-between bg-[#ebeae2]/15 border border-[#1a1b26]/10 rounded shadow-sm relative overflow-visible h-[6cqh] px-[0.5cqw]">
        <Triglyph />
        {SCENES_META.map((meta) => {
          const sNum = meta.id;
          const isActive = scene === sNum;
          const MetopeIcon = meta.Icon;

          return (
            <React.Fragment key={sNum}>
              <button
                onClick={() => onNavigate && onNavigate(sNum, 0)}
                className={`flex-1 h-[4.8cqh] mx-[0.4cqw] cursor-pointer relative flex items-center justify-center rounded transition-all duration-500 select-none group border ${
                  isActive
                    ? "bg-[#fffdf6] border-[#c5a26f] shadow-[0_0_12px_rgba(255,255,255,0.95)] z-10 scale-[1.02]"
                    : "bg-[#f4f3f0]/60 border-[#1a1b26]/10 hover:bg-[#fffdf6]/80 hover:border-[#1a1b26]/20 hover:scale-[1.01]"
                }`}
              >
                {/* Active backlight glow */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#fffbf4]/80 via-[#fffefe]/95 to-[#fffbf4]/80 rounded opacity-90 z-[-1]" />
                )}

                {/* Ambient Rotating Sundial Shadow on the background behind the active metope */}
                {isActive && (
                  <div className="absolute inset-0 pointer-events-none overflow-visible z-[-2] flex items-center justify-center">
                    {/* Tick Ring */}
                    <svg className="w-[10cqw] h-[10cqw] absolute text-[#1a1b26]/5 scale-[1.3]" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
                      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.3" />
                      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                        <line
                          key={deg}
                          x1="50"
                          y1="2"
                          x2="50"
                          y2="6"
                          stroke="currentColor"
                          strokeWidth="0.6"
                          transform={`rotate(${deg} 50 50)`}
                        />
                      ))}
                    </svg>
                    {/* Rotating Shadow Wedge */}
                    <div 
                      className="w-[11cqw] h-[11cqw] absolute flex items-center justify-center animate-sundial-rotate scale-[1.35]"
                      style={{ transformOrigin: "center center" }}
                    >
                      <svg className="w-full h-full overflow-visible text-slate-800/15" viewBox="0 0 100 100">
                        <polygon points="50,50 48.5,0 51.5,0" fill="currentColor" filter="blur(0.5px)" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Metope Content: Icon and Text carved on the slab */}
                <div className={`flex items-center gap-[0.8cqw] transition-colors duration-300 ${
                  isActive ? "text-[#c5a26f]" : "text-slate-500 group-hover:text-slate-800"
                }`}>
                  <MetopeIcon className={`w-[2.2cqh] h-[2.2cqh] stroke-[1.6] transition-transform duration-500 ${
                    isActive ? "scale-110 drop-shadow-[0_0_2px_rgba(197,162,111,0.3)]" : "group-hover:scale-105"
                  }`} />
                  <span className="font-serif text-[1cqw] font-bold tracking-wider">
                    {isZh ? meta.titleZh : meta.titleEn}
                  </span>
                </div>

                {/* Sub-scene dot indicator for beauty */}
                <div className={`absolute bottom-1 w-1 h-1 rounded-full transition-all duration-300 ${
                  isActive ? "bg-[#c5a26f] scale-125" : "bg-transparent"
                }`} />
              </button>
              <Triglyph />
            </React.Fragment>
          );
        })}
      </div>

      {/* 4. Greek Fret Meander Decorative Band Running under the Frieze */}
      <div className="w-full h-[0.8cqh] greek-fret-band mt-[0.3cqh] mb-[1cqh]" />
    </div>
  );
};

export default function Style03({ scene = 1, beat = 0, language = "en", isThumbnail = false, onNavigate }) {
  const isZh = language === "zh";

  // 根据主 scene 渲染独立的、全页融合的功能性 DOM 结构
  switch (scene) {
    case 1: {
      // 场景 1：希腊神庙门廊 (Ultralight Classical Cover)
      return (
        <div className="w-full h-full bg-[#f4f3f0] text-[#1a1b26] p-[4cqw] pb-[4cqh] relative overflow-hidden select-none font-serif flex flex-col justify-between">
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

          {/* Top Architrave Metope Tracker Header */}
          <TopArchitraveHeader scene={1} language={language} onNavigate={onNavigate} />

          {/* 左右两侧高达100%容器高度的巨型大理石多立克柱 */}
          <div className="absolute left-[2.5cqw] top-[18cqh] bottom-[4cqh] w-[7cqw] z-10 pointer-events-none flex flex-col justify-between">
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

          <div className="absolute right-[2.5cqw] top-[18cqh] bottom-[4cqh] w-[7cqw] z-10 pointer-events-none flex flex-col justify-between">
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

          {/* 中央大片纯古典比例的宏伟负空间 */}
          <div className="flex-1 w-full flex flex-col items-center justify-center px-[12cqw] py-[2cqh] text-center z-20 relative">
            {/* 纪念碑式哲学问题 */}
            <div className="animate-float-in">
              <h2 className="text-[5.5cqw] font-serif font-black tracking-wide text-[#1a1b26] animate-pulse-bronze">
                {isZh ? "何为正义？" : "What is Justice?"}
              </h2>
            </div>

            {/* Beat 1: 希腊回纹线与副标题 */}
            {beat >= 1 && (
              <div className="mt-[2cqh] w-full flex flex-col items-center animate-float-in [animation-delay:200ms]">
                {/* 精巧的 SVG 希腊回纹装饰线 */}
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

          {/* 底部交互状态遥测 */}
          <div className="w-full flex justify-between items-center border-t border-[#1a1b26]/10 pt-[1cqh] z-10 shrink-0 pb-[2cqh]">
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
        </div>
      );
    }
    case 2: {
      // 场景 2：左右不对称辩论 (Dual - Light Socrates Dialectic)
      const hasAntithesis = beat >= 1;
      const hasSynthesis = beat >= 2;

      return (
        <div className="w-full h-full bg-[#f4f3f0] text-[#1a1b26] p-[4cqw] pb-[4cqh] relative overflow-hidden select-none font-serif flex flex-col justify-between">
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

          {/* Top Architrave Metope Tracker Header */}
          <TopArchitraveHeader scene={2} language={language} onNavigate={onNavigate} />

          {/* 左右不对称辩论核心区：3D重叠石牌 */}
          <div className="flex-1 w-full relative my-[2cqh] z-20">
            {/* 左侧大理石石板：苏格拉底 */}
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

            {/* 右侧粗粝红砂岩石板：色拉叙马霍斯 */}
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

            {/* Beat 2: 金色大理石石牌 (Synthesis) */}
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

          {/* 底部信息 */}
          <div className="w-full flex justify-between items-center border-t border-[#1a1b26]/10 pt-[1cqh] z-10 shrink-0 pb-[2cqh]">
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
        </div>
      );
    }
    case 3: {
      // 场景 3：SVG圆形广场 (Process - Standard Winding Steps)
      const stepIndex = beat;

      return (
        <div className="w-full h-full bg-[#f4f3f0] text-[#1a1b26] p-[4cqw] pb-[4cqh] relative overflow-hidden select-none font-serif flex flex-col justify-between">
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

          {/* Top Architrave Metope Tracker Header */}
          <TopArchitraveHeader scene={3} language={language} onNavigate={onNavigate} />

          {/* 三维圆形广场和不规则文本卡片混排布局 */}
          <div className="flex-1 w-full relative my-[2cqh] z-20 flex items-center justify-between">
            {/* 左侧：3D SVG 半圆形露天长椅广场 */}
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

                {/* Sweeping 三维半圆形长凳 */}
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

                {/* 广场核心的 3D 逻各斯中央祭坛 */}
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

            {/* 右侧：不规则分布的长凳文本卡片 */}
            <div className="w-[38cqw] flex flex-col gap-[1.5cqh] justify-center pr-[1cqw]">
              {/* 卡片 1 (Thesis): 五百人议事初审 */}
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

              {/* 卡片 2 (Antithesis): 普尼克斯讲坛争鸣 */}
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

              {/* 卡片 3 (Synthesis): 全体大会表决 */}
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
                    ? "真理在逻各斯的交融中结晶。在大会庄严举手 or 陶片投掷下，冲突转化为不朽的城邦成法，长久指引社群。" 
                    : "The fiery debate converges. Under absolute majority vote, the diverse arguments are firmed into permanent state law."}
                </p>
              </div>
            </div>
          </div>

          {/* 底部导航和技术状态 */}
          <div className="w-full flex justify-between items-center border-t border-[#1a1b26]/10 pt-[1cqh] z-10 shrink-0 pb-[2cqh]">
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
        </div>
      );
    }
    case 4: {
      // 场景 4：投票矩阵 (Matrix - Dense Ostrakon Ballot Grid)
      const isFullGrid = beat >= 1;
      const isVerdictActive = beat >= 2;

      return (
        <div className="w-full h-full bg-[#f4f3f0] text-[#1a1b26] p-[4cqw] pb-[4cqh] relative overflow-hidden select-none font-serif flex flex-col justify-between">
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

          {/* Top Architrave Metope Tracker Header */}
          <TopArchitraveHeader scene={4} language={language} onNavigate={onNavigate} />

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

              {/* 2行5列密集大理石网格 */}
              <div className="deme-grid">
                {DEMES.map((deme, idx) => {
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
                      
                      {/* 投票遥测详情 */}
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

            {/* 底层：左右混排 */}
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

              {/* 右侧：3D大理石“陶片放逐判定版” */}
              <div className="w-[36cqw] relative">
                {isVerdictActive ? (
                  <div className="w-full h-full bg-[#fffdf6] border-2 border-[#b87333] shadow-lg rounded p-3 flex flex-col justify-between verdict-stamp relative">
                    {/* 背景碎裂陶片 SVG */}
                    <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none p-3">
                      <svg viewBox="0 0 100 100" className="w-[12cqw] h-[12cqw] text-[#b87333]">
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
          <div className="w-full flex justify-between items-center border-t border-[#1a1b26]/10 pt-[1cqh] z-10 shrink-0 pb-[2cqh]">
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
        </div>
      );
    }
    case 5: {
      // 场景 5：梭伦法典石碑 (Ledger - Extreme Agora Stele)
      const isSteleFull = beat >= 1;
      const isStamped = beat >= 2;

      return (
        <div className="w-full h-full bg-[#f4f3f0] text-[#1a1b26] p-[4cqw] pb-[4cqh] relative overflow-hidden select-none font-serif flex flex-col justify-between">
          <style>{`
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

          {/* Top Architrave Metope Tracker Header */}
          <TopArchitraveHeader scene={5} language={language} onNavigate={onNavigate} />

          {/* 立法大宪章碑体核心区：重型三栏石碑 */}
          <div className="flex-1 w-full my-[1.5cqh] z-20 flex flex-col justify-between bg-[#eae8de] border-2 border-[#cbcaa0] rounded-lg shadow-inner p-[1.5cqw] relative">
            {/* 神庙山墙顶装饰浮雕 */}
            <div className="w-full flex flex-col items-center border-b-2 border-double border-[#cbcaa0] pb-2 mb-2">
              <svg className="w-[18cqw] h-[4.5cqh]" viewBox="0 0 200 40" fill="none" stroke="#8c8a81" strokeWidth="1.2">
                <polygon points="10,35 190,35 100,5" fill="#efede5" />
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
              {/* 第一栏：主权部落章程 */}
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

              {/* 第二栏：宪法修正法案条款 */}
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

              {/* 第三栏：公民表决投票率 */}
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

            {/* 底部 stamped 巨大的雅典主权猫头鹰青铜币章 */}
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
                  
                  <circle cx="50" cy="50" r="48" fill="url(#owl-inner)" stroke="#eec584" strokeWidth="1.2" />

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

                  {/* 橄榄枝与弯月 */}
                  <path d="M 12,22 Q 18,24 22,18" fill="none" stroke="#fff5d1" strokeWidth="1.5" />
                  <circle cx="14" cy="21" r="1.5" fill="#fff5d1" />
                  <circle cx="20" cy="19" r="1.5" fill="#fff5d1" />
                  <path d="M 15,30 A 6,6 0 0,1 21,35 A 4,4 0 0,0 15,30" fill="#fff5d1" />

                  <text x="82" y="32" fill="#fff5d1" className="font-serif text-[10px] font-black">A</text>
                  <text x="82" y="47" fill="#fff5d1" className="font-serif text-[10px] font-black">Θ</text>
                  <text x="82" y="62" fill="#fff5d1" className="font-serif text-[10px] font-black">E</text>
                </svg>
              </div>
            )}
          </div>

          {/* 底部技术状态栏 */}
          <div className="w-full flex justify-between items-center border-t border-[#1a1b26]/10 pt-[1cqh] z-10 shrink-0 pb-[2cqh]">
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
        </div>
      );
    }
    default:
      return null;
  }
}
