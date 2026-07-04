import React from "react";
import { 
  Compass, Ship, Wind, MapPin, Activity, Shield, Anchor, Layers, 
  HelpCircle, CheckCircle, Eye, Music, Skull, Droplet, Calendar, Wrench, FileText 
} from "lucide-react";

export const getMetadata = (lang) => {
  const isZh = lang === "zh";
  return {
    id: "13",
    tier: "A",
    density: "high",
    name: isZh ? "奥德赛的归家航线" : "The Odyssey Navigation",
    theme: isZh ? "荷马史诗地理航线重建" : "Homer's Odyssey Reconstruction",
    densityLabel: isZh ? "海图拓扑流线" : "Mythological Marine Routing",
    colors: { bg: "bg-[#020917]", ink: "text-[#f1f5f9]", panel: "border-[#f59e0b]/15", accent: "text-[#f59e0b]" },
    typography: { header: "font-serif", body: "font-sans" },
    scenes: [
      {
        id: 1,
        title: isZh ? "特洛伊解缆与爱琴顺风" : "Troy Departure & Aegean Winds",
        beats: [
          { id: 1, action: isZh ? "解缆起航" : "Set Sail", title: isZh ? "别特洛伊焦土扬帆" : "Troy Cast-off & Course Set", body: isZh ? "奥德修斯统率十二艘黑船解缆，作别特洛伊焦土，满载战利品，直指故乡伊萨卡。" : "Odysseus commands twelve black vessels to untie, leaving Troy's ashes. Fully laden with spoils, pointing direct to Ithaca." },
          { id: 2, action: isZh ? "顺风捕获" : "Catch Winds", title: isZh ? "爱琴北风张满巨帆" : "Aegean Gale Sails Full", body: isZh ? "张满粗麻巨帆，精确捕获爱琴海强劲北风，绕开希腊半岛南端暗礁，开启漫长归途。" : "Hoisting heavy hemp sails, catching the roaring Aegean north wind to clear the treacherous rocky shallows." },
          { id: 3, action: isZh ? "航向常锁" : "Course Lock", title: isZh ? "归航初段航向锁定" : "Initial Voyage Phase Lock", body: isZh ? "锁定首个海里象限速度与仰角，使十二艘战船排成严整雁形，消除无谓的偏航磨损。" : "Locking initial nautical speeds and angles, aligning twelve hulls into close convoy formatting to minimize drift." }
        ]
      },
      {
        id: 2,
        title: isZh ? "奇孔部落突围与食莲异境" : "Cicones Conflict & Lotus-Eaters Sieve",
        beats: [
          { id: 1, action: isZh ? "海岸突围" : "Cicones Escape", title: isZh ? "奇孔部落岸遭遇突围" : "Escape from Cicones Coast", body: isZh ? "舰队登陆伊斯马罗斯突遭奇孔部族猛烈反击，被迫在鲜血与狂风中砍断锚链，强行突围。" : "Sacking Ismarus, the fleet is struck by fierce local tribal counter-attacks, slashing anchors in wind and blood." },
          { id: 2, action: isZh ? "强索回船" : "Lotus Recovery", title: isZh ? "食莲忘忧海岛强索水兵" : "Lotus-Eaters Amnesia Extraction", body: isZh ? "风暴将舰队吹至食莲异岛，强行拖回并捆绑数名误食魔莲、彻底遗忘故土的沉沦水手。" : "Roaring gales drift ships to Lotus-Eaters isle. Forcefully drag-extracting sailors who ate sweet flowers of amnesia." },
          { id: 3, action: isZh ? "航线矫正" : "Re-align Fleet", title: isZh ? "双向偏航纠偏与归一" : "Dual Deflection Re-alignment", body: isZh ? "重估受洋流和忘忧魔花干扰的严重航差，校准舵角，促使散落的两部船队重新合并回主航道。" : "Re-evaluating nautical deviations caused by lotus drift, resetting rudders to re-converge the convoy." }
        ]
      },
      {
        id: 3,
        title: isZh ? "独眼巨人、女妖与海怪天险" : "Myths & Gorges (Sirens & Scylla)",
        beats: [
          { id: 1, action: isZh ? "巨人突围" : "Blind Cyclops", title: isZh ? "独眼巨人洞穴神勇突围" : "Polyphemus Cave Outbreak", body: isZh ? "智盲海神巨子波吕摩斯，躲在羊腹下混出石穴，在巨石轰击的海浪中拼死夺路出海。" : "Blinding Poseidon's giant son Polyphemus, slipping past herd gates under sheep bellies under massive rock attacks." },
          { id: 2, action: isZh ? "缚桅渡歌" : "Sirens Mast Binding", title: isZh ? "塞壬女妖声学极性封锁" : "Sirens Siren Vocal Sieve", body: isZh ? "全员封蜡塞耳，唯奥德修斯自缚于主桅之上，咬牙安渡妖歌勾魂频段，保全舰队安宁。" : "Waxing all ears. Odysseus binds himself to the central mast, enduring the beautiful, deathly allure of Siren songs." },
          { id: 3, action: isZh ? "惊险越漩" : "Scylla Narrow", title: isZh ? "斯库拉与卡律布狄斯隘口" : "Conquering Scylla & Charybdis", body: isZh ? "于狂噬深渊的卡律布狄斯大漩涡和六头海怪斯库拉的断崖间精准操舵，惊险滑渡狭窄死线。" : "Steering precisely through Charybdis's abyssal whirlpool and Scylla's cliffs, surviving the narrow corridor of death." }
        ]
      },
      {
        id: 4,
        title: isZh ? "海图测绘与舰队状态监控" : "Hydrology & Marine Fleet Telemetry",
        beats: [
          { id: 1, action: isZh ? "洋流水文" : "Map Currents", title: isZh ? "墨西拿海峡水动力测绘" : "Messina Strait Flow Mapping", body: isZh ? "测算海峡急流系数、隐藏浅滩及暴风雨风圈，为木船龙骨防震提供高维动态海图数据。" : "Mapping Messina current speeds, dynamic sandbars, and wind circle cells to insulate wooden hulls from stress." },
          { id: 2, action: isZh ? "均摊粮水" : "Balance Water", title: isZh ? "舰队淡水麦粒柔性均衡" : "Adaptive Freshwater Allocation", body: isZh ? "基于各船只的折损状况，重构淡水桶和脱水大麦的配重配比，维持舰队在高海况下的长效生存率。" : "Rebalancing weights of freshwater barrels and barley grains across remaining hulls to sustain sea endurance." },
          { id: 3, action: isZh ? "海况自检" : "Fleet Integrity", title: isZh ? "木船龙骨与水手耐渴度清算" : "Vessel Structural Proof Ledger", body: isZh ? "核算风浪磨耗指数、木料抗蚀力及船员精力流，掌控归航储备，确保回归主脉绝不断绝。" : "Logging wave fatigue indices, timber rot rates, and sailor hydration curves, securing the final voyage limits." }
        ]
      },
      {
        id: 5,
        title: isZh ? "伊萨卡圣岛回归与王位重夺" : "Ithaca Arrival & Crown Reclaim",
        beats: [
          { id: 1, action: isZh ? "孤舟抵港" : "Arrive Ithaca", title: isZh ? "圣港海湾孤身涉水抵港" : "Solo Return to Ithaca Bay", body: isZh ? "漂泊十年，伴随全员牺牲，奥德修斯终乘神舟涉水降临故里，夕阳斜照，沙鸥鸣叫。" : "Wandering ten years, all comrades lost. Odysseus alone lands on Ithaca's cliffs as prayer gulls call." },
          { id: 2, action: isZh ? "射斧除逆" : "Arrow Siege", title: isZh ? "神弓满弦箭穿十二斧孔" : "Suitor Bow & Arrow Siege", body: isZh ? "乔装归府，拉开尘封神弓，一箭穿通十二铜斧孔，神勇剿除篡逆求婚之众，收复王庭。" : "Disguised as beggar, stringing his epic bow. Shoots through twelve axe rings, exterminating lawless suitors." },
          { id: 3, action: isZh ? "史诗结账" : "Odyssey Close", title: isZh ? "荷马史诗归家卷宗终极归档" : "Homeric Epic Ledger Close", body: isZh ? "向雅典娜神庙奉纳战弓，大宗物资折损与回归里程全面合规审计结案，重归圣岛和平。" : "Vowing peace to Athena, closing the massive wanderer ledgers. The Odyssey catalog is sealed with gold stars." }
        ]
      }
    ]
  };
};

export default function Style13({ scene, beat, language, onNavigate, isThumbnail }) {
  const meta = getMetadata(language);
  const isZh = language === "zh";
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];

  // Transition Profile: Horizontal Track Slide (H-Slide)
  const translateXVal = -(scene - 1) * 20;

  // Bespoke Navigation (Top Constellation Guide Horizon Wave)
  const renderNavigation = () => {
    if (isThumbnail || !onNavigate) return null;

    // Node coordinates along the wave path
    const nodes = [
      { sNum: 1, x: 100, y: 25, label: isZh ? "特洛伊" : "Troy" },
      { sNum: 2, x: 300, y: 25, label: isZh ? "食莲岛" : "Lotus" },
      { sNum: 3, x: 500, y: 25, label: isZh ? "险阻链" : "Trials" },
      { sNum: 4, x: 700, y: 25, label: isZh ? "海图测" : "Telemetry" },
      { sNum: 5, x: 900, y: 25, label: isZh ? "伊萨卡" : "Ithaca" }
    ];

    const activeNode = nodes.find(n => n.sNum === scene) || nodes[0];

    return (
      <div className="w-[75cqw] h-[8cqh] mx-auto my-[1cqh] relative select-none shrink-0 z-20">
        <svg viewBox="0 0 1000 70" className="w-full h-full overflow-visible">
          {/* Deep-blue SVG geodetic sea level ripple curves */}
          <path 
            d="M 50 25 Q 150 5, 250 25 T 450 25 T 650 25 T 850 25 T 950 25" 
            className="fill-none stroke-[#1e3a8a]/70 stroke-[2] shadow-[0_0_4px_#1d4ed8]" 
          />
          <path 
            d="M 50 25 Q 150 15, 250 25 T 450 25 T 650 25 T 850 25 T 950 25" 
            className="fill-none stroke-[#1d4ed8]/30 stroke-[1] stroke-dasharray-2" 
          />
          <path 
            d="M 50 30 Q 150 10, 250 30 T 450 30 T 650 30 T 850 30 T 950 30" 
            className="fill-none stroke-[#1e3a8a]/40 stroke-[0.8]" 
          />

          {/* Render the 5 island constellation stars */}
          {nodes.map((node) => {
            const isActive = scene === node.sNum;
            return (
              <g 
                key={node.sNum} 
                className="cursor-pointer group"
                onClick={() => onNavigate(node.sNum, 0)}
              >
                {/* Star Node glow */}
                <circle 
                  cx={node.x} 
                  cy={node.y} 
                  r={isActive ? "12" : "6"} 
                  className={`transition-all duration-500 fill-none ${
                    isActive 
                      ? "stroke-[#f59e0b]/50 stroke-[1.5] shadow-[0_0_10px_#f59e0b]" 
                      : "stroke-transparent group-hover:stroke-[#f59e0b]/30 group-hover:stroke-[1]"
                  }`} 
                />
                
                {/* 4-point star path (glowing gold constellation star) */}
                <path 
                  d={`M ${node.x} ${node.y - (isActive ? 10 : 6)} 
                      L ${node.x + (isActive ? 2.5 : 1.5)} ${node.y - (isActive ? 2.5 : 1.5)} 
                      L ${node.x + (isActive ? 10 : 6)} ${node.y} 
                      L ${node.x + (isActive ? 2.5 : 1.5)} ${node.y + (isActive ? 2.5 : 1.5)} 
                      L ${node.x} ${node.y + (isActive ? 10 : 6)} 
                      L ${node.x - (isActive ? 2.5 : 1.5)} ${node.y + (isActive ? 2.5 : 1.5)} 
                      L ${node.x - (isActive ? 10 : 6)} ${node.y} 
                      L ${node.x - (isActive ? 2.5 : 1.5)} ${node.y - (isActive ? 2.5 : 1.5)} Z`} 
                  className={`transition-all duration-500 ${
                    isActive 
                      ? "fill-[#f59e0b] stroke-[#fff]/30 stroke-[0.5]" 
                      : "fill-[#f59e0b]/30 stroke-transparent group-hover:fill-[#f59e0b]/70"
                  }`} 
                />

                {isActive && (
                  <circle 
                    cx={node.x} 
                    cy={node.y} 
                    r="16" 
                    className="fill-none stroke-[#f59e0b]/40 stroke-[1] animate-ping" 
                  />
                )}

                {/* Node Text Label */}
                <text 
                  x={node.x} 
                  y={node.y + 24} 
                  className={`text-[9px] font-serif font-black text-center transition-colors duration-300 ${
                    isActive ? "fill-[#f59e0b]" : "fill-slate-400 group-hover:fill-white"
                  }`}
                  textAnchor="middle"
                >
                  {node.label}
                </text>

                {/* Number Index */}
                <text 
                  x={node.x} 
                  y={node.y - 14} 
                  className={`text-[7px] font-mono transition-opacity duration-300 ${
                    isActive ? "fill-[#f59e0b] opacity-100" : "fill-slate-500 opacity-0 group-hover:opacity-100"
                  }`}
                  textAnchor="middle"
                >
                  {`0${node.sNum}`}
                </text>
              </g>
            );
          })}

          {/* Mini Trireme boat sailing along the wave path */}
          <g 
            className="transition-all duration-[1200ms]"
            style={{
              transform: `translate(${activeNode.x - 15}px, ${activeNode.y - 22}px)`,
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          >
            {/* SVG Trireme Icon */}
            <svg viewBox="0 0 100 100" className="w-[30px] h-[30px] overflow-visible text-[#f59e0b]">
              <path d="M 10 65 C 20 75, 60 75, 70 65 C 75 60, 78 50, 80 45 L 75 45 C 72 55, 65 62, 55 62 L 25 62 C 18 62, 12 55, 10 45 L 5 45 C 7 55, 8 60, 10 65 Z" className="fill-[#f59e0b] stroke-[#020917] stroke-[1]" />
              <line x1="40" y1="20" x2="40" y2="62" className="stroke-[#f59e0b] stroke-[2]" />
              <path d="M 20 25 C 25 35, 25 45, 23 55 L 57 55 C 55 45, 55 35, 60 25 Z" className="fill-[#f59e0b]/30 stroke-[#f59e0b] stroke-[1]" />
              <line x1="25" y1="65" x2="15" y2="78" className="stroke-[#f59e0b]/80 stroke-[0.8]" />
              <line x1="35" y1="65" x2="27" y2="78" className="stroke-[#f59e0b]/80 stroke-[0.8]" />
              <line x1="45" y1="65" x2="39" y2="78" className="stroke-[#f59e0b]/80 stroke-[0.8]" />
              <line x1="55" y1="65" x2="51" y2="78" className="stroke-[#f59e0b]/80 stroke-[0.8]" />
            </svg>
          </g>
        </svg>
      </div>
    );
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-[3cqw] relative bg-[#020917] text-[#f1f5f9] select-none overflow-hidden">
      {/* Background waves pattern (Greek nautical motifs) */}
      <div className="absolute inset-x-0 bottom-0 h-[12cqh] opacity-[0.02] pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path d="M 0 50 Q 50 30, 100 50 T 200 50 T 300 50 T 400 50 T 500 50 T 600 50 T 700 50 T 800 50 T 900 50 T 1000 50 L 1000 100 L 0 100 Z" fill="currentColor" />
          <path d="M 0 70 Q 50 50, 100 70 T 200 70 T 300 70 T 400 70 T 500 70 T 600 70 T 700 70 T 800 70 T 900 70 T 1000 70 L 1000 100 L 0 100 Z" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      {/* Global Header */}
      <div className="flex flex-col border-b border-[#f59e0b]/15 pb-[1.5cqh] z-10 shrink-0">
        {/* Top Metadata Row */}
        <div className="flex justify-between items-center mb-[1cqh]">
          <span className="font-mono text-[1.1cqw] tracking-widest uppercase opacity-60 flex items-center gap-[0.5cqw] text-[#f59e0b]">
            <Compass className="w-[1.3cqw] h-[1.3cqw] animate-spin-slow" />
            {meta.theme}
          </span>
          <div className="text-right font-mono flex items-center gap-[1.5cqw]">
            <div className="text-[1.2cqw] font-bold text-[#f59e0b] tracking-wider">
              {isZh ? "奥德赛海图拓扑流" : "Odyssey Voyage Planner"}
            </div>
            <div className="text-[0.9cqw] opacity-50 uppercase tracking-widest text-slate-300">
              {meta.densityLabel}
            </div>
          </div>
        </div>

        {/* Top Constellation Guide Horizon Wave Navigation */}
        {renderNavigation()}

        {/* Scene Title (Under the navigation) */}
        <h1 className="text-[2.8cqw] font-serif font-bold tracking-tight mt-[1cqh] text-white">
          {currentScene.title}
        </h1>
      </div>

      {/* Main Content: Horizontal Track Slide (H-Slide) */}
      <div className="flex-1 my-[2cqh] overflow-hidden relative z-10">
        <div 
          className="flex w-[500%] h-full transition-transform duration-[1200ms]"
          style={{
            transform: `translateX(${translateXVal}%)`,
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          {/* ==================== SCENE 1 (Premise - Ultralight) ==================== */}
          <div className="w-[20%] h-full flex-shrink-0 px-[1cqw] flex flex-col justify-between">
            <div className="grid grid-cols-12 gap-[2.5cqw] h-full items-center">
              {/* Left Copy: High negative space */}
              <div className="col-span-5 flex flex-col gap-[2cqh]">
                <div className="flex items-center gap-[0.5cqw] text-[#f59e0b] font-mono text-[1.1cqw] font-bold">
                  <span className="w-[0.8cqw] h-[0.8cqw] bg-[#f59e0b] rounded-full animate-ping" />
                  {currentBeat.action} | Set Sail
                </div>
                <h2 className="text-[2.6cqw] font-serif font-black leading-tight text-white">
                  {currentBeat.title}
                  <span className="block text-[1.4cqw] font-sans font-normal text-slate-300 mt-[0.5cqh]">
                    Troy Cast-off & Course Set
                  </span>
                </h2>
                <p className="text-[1.15cqw] leading-[1.6] text-slate-300 font-sans">
                  {currentBeat.body}
                </p>
                <div className="border-t border-[#f59e0b]/10 pt-[2cqh] mt-[1cqh] font-mono text-[0.95cqw] text-slate-400">
                  <span className="text-[#f59e0b] font-bold">航线起点 (Origin):</span> 特洛伊海湾 (Troy Bay) <br />
                  <span className="text-[#f59e0b] font-bold">顺风指数 (Gale Index):</span> BF 4 (North Wind)
                </div>
              </div>

              {/* Right Visual: Greek trireme sail on wave ripples guided by 8-point wind star compass */}
              <div className="col-span-7 flex items-center justify-center h-full relative">
                <div className="relative w-[30cqw] h-[30cqw] flex items-center justify-center">
                  {/* Subtle outer glowing rings */}
                  <div className="absolute inset-0 rounded-full border border-[#f59e0b]/5 animate-pulse" />
                  <div className="absolute inset-[3cqw] rounded-full border border-dashed border-[#f59e0b]/10" />
                  
                  {/* Beautiful SVG vector of Greek trireme sail & compass */}
                  <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
                    {/* 8-point wind star compass */}
                    <g 
                      className="transition-transform duration-[1200ms]"
                      style={{ 
                        transform: `rotate(${beat * 45}deg)`,
                        transformOrigin: "100px 100px",
                        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
                      }}
                    >
                      {/* Compass outer ring */}
                      <circle cx="100" cy="100" r="80" className="fill-none stroke-[#f59e0b]/30 stroke-[1.5]" />
                      <circle cx="100" cy="100" r="85" className="fill-none stroke-[#f59e0b]/10 stroke-[0.5] stroke-dasharray-2" />
                      
                      {/* Compass 8 points */}
                      <path d="M 100 10 L 100 190" className="stroke-[#f59e0b]/40 stroke-[1]" />
                      <path d="M 10 100 L 190 100" className="stroke-[#f59e0b]/40 stroke-[1]" />
                      <path d="M 36.36 36.36 L 163.64 163.64" className="stroke-[#f59e0b]/20 stroke-[0.8]" />
                      <path d="M 36.36 163.64 L 163.64 36.36" className="stroke-[#f59e0b]/20 stroke-[0.8]" />
                      
                      {/* Compass Star Points */}
                      {/* North */}
                      <polygon points="100,10 95,80 100,100" className="fill-[#f59e0b] stroke-[#f59e0b] stroke-[0.5]" />
                      <polygon points="100,10 105,80 100,100" className="fill-[#f59e0b]/50 stroke-[#f59e0b] stroke-[0.5]" />
                      {/* South */}
                      <polygon points="100,190 95,120 100,100" className="fill-[#f59e0b]/50 stroke-[#f59e0b] stroke-[0.5]" />
                      <polygon points="100,190 105,120 100,100" className="fill-[#f59e0b] stroke-[#f59e0b] stroke-[0.5]" />
                      {/* East */}
                      <polygon points="190,100 120,95 100,100" className="fill-[#f59e0b] stroke-[#f59e0b] stroke-[0.5]" />
                      <polygon points="190,100 120,105 100,100" className="fill-[#f59e0b]/50 stroke-[#f59e0b] stroke-[0.5]" />
                      {/* West */}
                      <polygon points="10,100 80,95 100,100" className="fill-[#f59e0b]/50 stroke-[#f59e0b] stroke-[0.5]" />
                      <polygon points="10,100 80,105 100,100" className="fill-[#f59e0b] stroke-[#f59e0b] stroke-[0.5]" />
                      
                      {/* Diagonal Points */}
                      <polygon points="163.64,36.36 114.14,85.86 100,100" className="fill-[#f59e0b]/40 stroke-[#f59e0b]/40 stroke-[0.5]" />
                      <polygon points="36.36,163.64 85.86,114.14 100,100" className="fill-[#f59e0b]/40 stroke-[#f59e0b]/40 stroke-[0.5]" />
                      <polygon points="36.36,36.36 85.86,85.86 100,100" className="fill-[#f59e0b]/40 stroke-[#f59e0b]/40 stroke-[0.5]" />
                      <polygon points="163.64,163.64 114.14,114.14 100,100" className="fill-[#f59e0b]/40 stroke-[#f59e0b]/40 stroke-[0.5]" />

                      {/* Labels */}
                      <text x="100" y="25" className="text-[8px] font-mono fill-[#f59e0b] font-bold text-center" textAnchor="middle">BOREAS</text>
                      <text x="100" y="183" className="text-[8px] font-mono fill-[#f59e0b] font-bold text-center" textAnchor="middle">NOTOS</text>
                      <text x="180" y="103" className="text-[8px] font-mono fill-[#f59e0b] font-bold text-center" textAnchor="middle">APELIOTES</text>
                      <text x="20" y="103" className="text-[8px] font-mono fill-[#f59e0b] font-bold text-center" textAnchor="middle">ZEPHYROS</text>
                    </g>
                    
                    {/* Greek Trireme Sail inside the compass */}
                    <g transform="translate(65, 65)">
                      {/* Ship Hull */}
                      <path d="M 10 55 C 20 65, 50 65, 60 55 C 65 50, 68 40, 70 35 L 65 35 C 62 45, 55 52, 45 52 L 25 52 C 18 52, 12 45, 10 35 L 5 35 C 7 45, 8 50, 10 55 Z" className="fill-[#f59e0b] stroke-[#f59e0b] stroke-[1]" />
                      {/* Mast */}
                      <line x1="35" y1="10" x2="35" y2="52" className="stroke-[#f59e0b] stroke-[2]" />
                      {/* Yardarm */}
                      <line x1="15" y1="15" x2="55" y2="15" className="stroke-[#f59e0b] stroke-[1.5]" />
                      {/* Sail (billowing based on beat) */}
                      <path 
                        d={`M 15 15 C ${15 + beat * 6} 25, ${15 + beat * 6} 35, 18 45 L 52 45 C ${55 - beat * 6} 35, ${55 - beat * 6} 25, 55 15 Z`} 
                        className="fill-[#f59e0b]/20 stroke-[#f59e0b] stroke-[1.5] transition-all duration-[1200ms]"
                        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                      />
                      {/* Oars */}
                      <line x1="20" y1="55" x2="10" y2="68" className="stroke-[#f59e0b]/70 stroke-[0.8]" />
                      <line x1="28" y1="55" x2="20" y2="68" className="stroke-[#f59e0b]/70 stroke-[0.8]" />
                      <line x1="36" y1="55" x2="30" y2="68" className="stroke-[#f59e0b]/70 stroke-[0.8]" />
                      <line x1="44" y1="55" x2="40" y2="68" className="stroke-[#f59e0b]/70 stroke-[0.8]" />
                      <line x1="52" y1="55" x2="50" y2="68" className="stroke-[#f59e0b]/70 stroke-[0.8]" />
                      
                      {/* Wave ripples under ship */}
                      <path d="M 0 65 Q 15 62, 30 65 T 60 65 T 80 65" className="fill-none stroke-[#38bdf8]/40 stroke-[1]" />
                      <path d="M -5 68 Q 10 66, 25 68 T 55 68 T 75 68" className="fill-none stroke-[#38bdf8]/20 stroke-[0.8]" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== SCENE 2 (Dual - Light) ==================== */}
          <div className="w-[20%] h-full flex-shrink-0 px-[1cqw] flex flex-col justify-between">
            <div className="grid grid-cols-12 gap-[2.5cqw] h-full items-center">
              {/* Left Copy: Troy Departure vs. Ithaca Destination */}
              <div className="col-span-5 flex flex-col gap-[2cqh]">
                <div className="flex items-center gap-[0.5cqw] text-[#f59e0b] font-mono text-[1.1cqw] font-bold">
                  <Anchor className="w-[1.2cqw] h-[1.2cqw]" />
                  {currentBeat.action} | Escape & Drift
                </div>
                <h2 className="text-[2.4cqw] font-serif font-black leading-tight text-white">
                  {currentBeat.title}
                  <span className="block text-[1.3cqw] font-sans font-normal text-slate-300 mt-[0.5cqh]">
                    Troy Departure vs. Ithaca Destination
                  </span>
                </h2>
                <p className="text-[1.1cqw] leading-[1.6] text-slate-300 font-sans">
                  {currentBeat.body}
                </p>
                
                {/* Dynamic Telemetry Stats */}
                <div className="bg-[#051a30]/60 border border-[#f59e0b]/20 rounded-xl p-[1.5cqw] flex flex-col gap-[1cqh] mt-[1cqh]">
                  <div className="flex justify-between items-center border-b border-[#f59e0b]/10 pb-[0.5cqh]">
                    <span className="text-[0.85cqw] font-mono font-bold text-slate-300">ROUTE DEVIATION</span>
                    <Activity className="w-[1cqw] h-[1cqw] text-[#f59e0b] animate-pulse" />
                  </div>
                  <div className="grid grid-cols-2 gap-[1cqw] text-[0.9cqw] font-mono">
                    <div>
                      <span className="opacity-50 text-[0.75cqw] block">WIND FORCE</span>
                      <span className="font-bold text-[#f59e0b]">{beat === 0 ? "BF 4" : beat === 1 ? "BF 8 (Storm)" : "BF 9 (Vortex)"}</span>
                    </div>
                    <div>
                      <span className="opacity-50 text-[0.75cqw] block">DRIFT ANGLE</span>
                      <span className="font-bold text-[#f59e0b]">{beat === 0 ? "0° (Straight)" : beat === 1 ? "42° (South-East)" : "115° (Chaotic)"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Visual: Two non-symmetric island nodes with light beams */}
              <div className="col-span-7 h-full flex items-center justify-center relative">
                <div className="w-full h-[32cqh] relative">
                  <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible">
                    {/* Sea waves background */}
                    <path d="M 0 160 Q 20 155, 40 160 T 80 160 T 120 160 T 160 160 T 200 160 T 240 160 T 280 160 T 320 160 T 360 160 T 400 160" className="fill-none stroke-[#38bdf8]/10 stroke-[0.5]" />
                    
                    {/* Troy Island (Left, in ruins) */}
                    <g transform="translate(20, 40)">
                      {/* Island base */}
                      <path d="M 10 60 C 20 40, 60 40, 80 50 C 90 55, 100 65, 110 60 L 110 70 L 0 70 Z" className="fill-[#1e293b] stroke-[#38bdf8]/20 stroke-[1]" />
                      {/* Ruined Greek Temple */}
                      <line x1="30" y1="40" x2="30" y2="60" className="stroke-slate-400 stroke-[2]" />
                      <line x1="40" y1="45" x2="40" y2="60" className="stroke-slate-400 stroke-[2]" />
                      {/* Fallen column */}
                      <line x1="45" y1="58" x2="58" y2="58" className="stroke-slate-500 stroke-[1.5] rotate-12" />
                      <line x1="50" y1="40" x2="50" y2="60" className="stroke-slate-400 stroke-[2]" />
                      <polygon points="25,40 55,40 40,30" className="fill-none stroke-slate-400 stroke-[1.5]" />
                      
                      {/* Smoke rising */}
                      <path 
                        d="M 35 30 Q 30 15, 38 5 T 32 -10" 
                        className="fill-none stroke-slate-500/40 stroke-[1.5] stroke-dasharray-4"
                      />
                      <path 
                        d="M 45 30 Q 48 18, 42 8 T 46 -5" 
                        className="fill-none stroke-slate-500/30 stroke-[1] stroke-dasharray-4"
                      />
                      
                      {/* Label */}
                      <text x="50" y="85" className="text-[10px] font-serif font-bold fill-[#f59e0b] text-center" textAnchor="middle">特洛伊 (Troy)</text>
                      <text x="50" y="95" className="text-[7px] font-sans fill-slate-400 text-center" textAnchor="middle">起航废墟 (Ruined Outpost)</text>
                    </g>

                    {/* Ithaca Island (Right, homeland) */}
                    <g transform="translate(260, 90)">
                      {/* Island base */}
                      <path d="M 0 50 C 20 30, 60 25, 90 40 C 100 45, 110 55, 120 50 L 120 60 L 0 60 Z" className="fill-[#1e3a5f] stroke-[#38bdf8]/30 stroke-[1]" />
                      {/* Beautiful Greek Temple standing */}
                      <line x1="40" y1="25" x2="40" y2="50" className="stroke-[#f59e0b] stroke-[2]" />
                      <line x1="50" y1="25" x2="50" y2="50" className="stroke-[#f59e0b] stroke-[2]" />
                      <line x1="60" y1="25" x2="60" y2="50" className="stroke-[#f59e0b] stroke-[2]" />
                      <line x1="70" y1="25" x2="70" y2="50" className="stroke-[#f59e0b] stroke-[2]" />
                      <polygon points="35,25 75,25 55,15" className="fill-[#f59e0b]/20 stroke-[#f59e0b] stroke-[1.5]" />
                      
                      {/* Olive Tree */}
                      <path d="M 20 50 L 20 40 Q 15 35, 18 30 T 25 25" className="fill-none stroke-emerald-600 stroke-[1.5]" />
                      <circle cx="18" cy="30" r="4" className="fill-emerald-500/50" />
                      <circle cx="25" cy="25" r="5" className="fill-emerald-500/40" />

                      {/* Label */}
                      <text x="55" y="75" className="text-[10px] font-serif font-bold fill-[#f59e0b] text-center" textAnchor="middle">伊萨卡 (Ithaca)</text>
                      <text x="55" y="85" className="text-[7px] font-sans fill-slate-400 text-center" textAnchor="middle">终点故乡 (Homeland)</text>
                    </g>

                    {/* Geodesic Route Light Beams */}
                    {/* Straight Base Route */}
                    <path 
                      d="M 90 130 C 150 130, 200 130, 260 140" 
                      className="fill-none stroke-slate-500/20 stroke-[1.5] stroke-dasharray-4" 
                    />
                    
                    {/* Dynamic Deflected Route */}
                    <path 
                      d={
                        beat === 0 
                          ? "M 90 130 C 150 130, 200 130, 260 140" 
                          : beat === 1 
                          ? "M 90 130 Q 170 190, 260 140" 
                          : "M 90 130 Q 130 210, 180 160 T 260 140"
                      } 
                      className="fill-none stroke-[#f59e0b] stroke-[2.5] transition-all duration-[1200ms]"
                      style={{ 
                        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                        filter: "drop-shadow(0 0 4px #f59e0b)"
                      }}
                    />

                    {/* Storm Cloud or Vortex overlay based on beat */}
                    {beat >= 1 && (
                      <g 
                        transform="translate(150, 110)" 
                        className="transition-all duration-1000 animate-bounce"
                        style={{ animationDuration: "3s" }}
                      >
                        {/* Storm Cloud */}
                        <path d="M 10 20 C 10 10, 25 10, 30 15 C 35 10, 50 10, 50 20 C 55 20, 60 30, 50 35 C 45 40, 15 40, 10 35 C 5 30, 5 20, 10 20 Z" className="fill-[#1e293b] stroke-[#38bdf8]/40 stroke-[1]" />
                        {/* Lightning */}
                        {beat === 1 && (
                          <polygon points="30,35 25,48 32,48 28,60 38,45 31,45" className="fill-[#f59e0b] stroke-[#f59e0b] stroke-[0.5]" />
                        )}
                        {beat === 2 && (
                          <g transform="translate(15, 35)">
                            {/* Vortex swirl */}
                            <circle cx="15" cy="15" r="10" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2,4" className="fill-none animate-spin" style={{ animationDuration: "4s" }} />
                            <path d="M 5 15 Q 15 5, 25 15 Z" className="fill-none stroke-[#38bdf8]/40 stroke-[1]" />
                          </g>
                        )}
                      </g>
                    )}
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== SCENE 3 (Process - Standard) ==================== */}
          <div className="w-[20%] h-full flex-shrink-0 px-[1cqw] flex flex-col justify-between">
            <div className="grid grid-cols-12 gap-[2.5cqw] h-full items-center">
              {/* Left Copy: Homeric route progress */}
              <div className="col-span-5 flex flex-col gap-[2cqh]">
                <div className="flex items-center gap-[0.5cqw] text-[#f59e0b] font-mono text-[1.1cqw] font-bold">
                  <Wind className="w-[1.2cqw] h-[1.2cqw]" />
                  {currentBeat.action} | Trial Stations
                </div>
                <h2 className="text-[2.4cqw] font-serif font-black leading-tight text-white">
                  {currentBeat.title}
                  <span className="block text-[1.3cqw] font-sans font-normal text-slate-300 mt-[0.5cqh]">
                    Homeric Route Progress
                  </span>
                </h2>
                <p className="text-[1.1cqw] leading-[1.6] text-slate-300 font-sans">
                  {currentBeat.body}
                </p>
                
                {/* Real-time distance metric card */}
                <div className="bg-[#051a30]/60 border border-[#f59e0b]/20 rounded-xl p-[1.5cqw] flex flex-col gap-[0.8cqh] mt-[1cqh]">
                  <div className="flex justify-between items-center border-b border-[#f59e0b]/10 pb-[0.5cqh]">
                    <span className="text-[0.85cqw] font-mono font-bold text-slate-300">VOYAGE MILESTONES</span>
                    <span className="text-[0.85cqw] font-mono text-[#f59e0b] font-bold">
                      {beat === 0 ? "STAGE 1" : beat === 1 ? "STAGE 2" : "STAGE 3"}
                    </span>
                  </div>
                  <div className="flex justify-between text-[0.95cqw] font-mono">
                    <span className="opacity-60">DISTANCE LOGGED:</span>
                    <span className="font-bold text-white">
                      {beat === 0 ? "120 Nautical Miles" : beat === 1 ? "280 Nautical Miles" : "450 Nautical Miles"}
                    </span>
                  </div>
                  <div className="flex justify-between text-[0.95cqw] font-mono">
                    <span className="opacity-60">SURVIVING CREW:</span>
                    <span className="font-bold text-red-400">
                      {beat === 0 ? "12 Ships (All Active)" : beat === 1 ? "6 Ships (Heavy Losses)" : "1 Ship (Odysseus Alone)"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Visual: Route path with ship walking and localized monster icons */}
              <div className="col-span-7 h-full flex items-center justify-center relative">
                <div className="w-full h-[32cqh] relative">
                  <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible">
                    {/* Winding Path */}
                    <path 
                      d="M 40 150 Q 100 60, 160 120 T 280 80 T 360 150" 
                      className="fill-none stroke-slate-500/20 stroke-[2]" 
                    />
                    
                    {/* Animated Path Progress */}
                    <path 
                      d="M 40 150 Q 100 60, 160 120 T 280 80 T 360 150" 
                      className="fill-none stroke-[#f59e0b]/30 stroke-[2] stroke-dasharray-4" 
                    />

                    {/* Station 1: Cyclopes */}
                    <g transform="translate(100, 70)">
                      <circle cx="15" cy="15" r="18" className={`transition-all duration-500 ${beat === 0 ? "fill-[#f59e0b]/20 stroke-[#f59e0b] stroke-[2] scale-110" : "fill-[#020917] stroke-slate-600 stroke-[1]"}`} />
                      <text x="15" y="19" className="text-[12px] text-center" textAnchor="middle">👁️</text>
                      <text x="15" y="42" className="text-[8px] font-serif font-black fill-white text-center" textAnchor="middle">独眼巨人 (Cyclops)</text>
                    </g>

                    {/* Station 2: Sirens */}
                    <g transform="translate(200, 75)">
                      <circle cx="15" cy="15" r="18" className={`transition-all duration-500 ${beat === 1 ? "fill-[#f59e0b]/20 stroke-[#f59e0b] stroke-[2] scale-110" : "fill-[#020917] stroke-slate-600 stroke-[1]"}`} />
                      <text x="15" y="19" className="text-[12px] text-center" textAnchor="middle">🧜‍♀️</text>
                      <text x="15" y="42" className="text-[8px] font-serif font-black fill-white text-center" textAnchor="middle">塞壬女妖 (Sirens)</text>
                    </g>

                    {/* Station 3: Scylla & Charybdis */}
                    <g transform="translate(290, 55)">
                      <circle cx="15" cy="15" r="18" className={`transition-all duration-500 ${beat === 2 ? "fill-[#f59e0b]/20 stroke-[#f59e0b] stroke-[2] scale-110" : "fill-[#020917] stroke-slate-600 stroke-[1]"}`} />
                      <text x="15" y="19" className="text-[12px] text-center" textAnchor="middle">🌀</text>
                      <text x="15" y="42" className="text-[8px] font-serif font-black fill-white text-center" textAnchor="middle">海怪大涡 (Scylla)</text>
                    </g>

                    {/* Greek Ship walking along the path */}
                    <g 
                      className="transition-all duration-[1200ms]"
                      style={{
                        transform: 
                          beat === 0 
                            ? "translate(100px, 70px)" 
                            : beat === 1 
                            ? "translate(200px, 75px)" 
                            : "translate(290px, 55px)",
                        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
                      }}
                    >
                      {/* Glow effect */}
                      <circle cx="15" cy="15" r="12" className="fill-[#f59e0b]/30 animate-ping" />
                      {/* Mini Ship */}
                      <g transform="translate(5, 5) scale(0.3)">
                        <path d="M 10 55 C 20 65, 50 65, 60 55 C 65 50, 68 40, 70 35 L 65 35 C 62 45, 55 52, 45 52 L 25 52 C 18 52, 12 45, 10 35 L 5 35 C 7 45, 8 50, 10 55 Z" className="fill-[#f59e0b] stroke-white stroke-[2]" />
                        <line x1="35" y1="10" x2="35" y2="52" className="stroke-white stroke-[4]" />
                        <path d="M 15 15 C 20 25, 20 35, 18 45 L 52 45 C 50 35, 50 25, 55 15 Z" className="fill-white" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== SCENE 4 (Matrix - Dense) ==================== */}
          <div className="w-[20%] h-full flex-shrink-0 px-[1cqw] flex flex-col justify-between">
            <div className="grid grid-cols-12 gap-[2.5cqw] h-full items-center">
              {/* Left Copy: Aegean Sea Navigation Quadrant */}
              <div className="col-span-4 flex flex-col gap-[2cqh]">
                <div className="flex items-center gap-[0.5cqw] text-[#f59e0b] font-mono text-[1.1cqw] font-bold">
                  <Layers className="w-[1.2cqw] h-[1.2cqw]" />
                  {currentBeat.action} | Telemetry Matrix
                </div>
                <h2 className="text-[2.4cqw] font-serif font-black leading-tight text-white">
                  {currentBeat.title}
                  <span className="block text-[1.3cqw] font-sans font-normal text-slate-300 mt-[0.5cqh]">
                    Aegean Sea Navigation Quadrant
                  </span>
                </h2>
                <p className="text-[1.1cqw] leading-[1.6] text-slate-300 font-sans">
                  {currentBeat.body}
                </p>
                <div className="border-t border-[#f59e0b]/10 pt-[1.5cqh] mt-[1cqh] font-mono text-[0.85cqw] text-slate-400">
                  <span className="text-[#f59e0b] font-bold">测绘海域 (Zone):</span> 墨西拿海峡 (Messina Strait) <br />
                  <span className="text-[#f59e0b] font-bold">洋流系数 (Currents):</span> 14.2 knots (Raging)
                </div>
              </div>

              {/* Right Visual: 2x2 grid comparing telemetry, selected quadrants glow with solid sea-gold borders */}
              <div className="col-span-8 grid grid-cols-2 gap-[1.5cqw] h-full py-[1cqh] items-center">
                {/* Quadrant 1: Wind Velocities */}
                <div className={`p-[1.5cqw] rounded-xl border bg-[#051a30]/40 flex flex-col justify-between h-[15cqh] transition-all duration-500 ${
                  beat === 0 ? "border-[#f59e0b] shadow-[0_0_12px_rgba(245,158,11,0.25)] scale-102" : "border-slate-800 opacity-60"
                }`}>
                  <div className="flex justify-between items-start">
                    <span className="text-[0.85cqw] font-mono font-bold text-slate-300 uppercase">01 | 风向与风速 (Winds)</span>
                    <Wind className={`w-[1.3cqw] h-[1.3cqw] ${beat === 0 ? "text-[#f59e0b] animate-spin-slow" : "text-slate-500"}`} />
                  </div>
                  <div className="my-[0.5cqh] flex items-baseline gap-[0.5cqw]">
                    <span className="text-[2.2cqw] font-serif font-bold text-white">BF 8</span>
                    <span className="text-[0.9cqw] font-mono text-[#f59e0b]">34 Knots</span>
                  </div>
                  <div className="text-[0.8cqw] text-slate-400 font-sans leading-tight">
                    爱琴北风强劲，巨帆张力达到极限承受点。
                  </div>
                </div>

                {/* Quadrant 2: Siren Sound Decibels */}
                <div className={`p-[1.5cqw] rounded-xl border bg-[#051a30]/40 flex flex-col justify-between h-[15cqh] transition-all duration-500 ${
                  beat === 1 ? "border-[#f59e0b] shadow-[0_0_12px_rgba(245,158,11,0.25)] scale-102" : "border-slate-800 opacity-60"
                }`}>
                  <div className="flex justify-between items-start">
                    <span className="text-[0.85cqw] font-mono font-bold text-slate-300 uppercase">02 | 女妖声波 (Sirens)</span>
                    <Music className={`w-[1.3cqw] h-[1.3cqw] ${beat === 1 ? "text-[#f59e0b] animate-pulse" : "text-slate-500"}`} />
                  </div>
                  <div className="my-[0.5cqh] flex items-baseline gap-[0.5cqw]">
                    <span className="text-[2.2cqw] font-serif font-bold text-white">115 dB</span>
                    <span className="text-[0.9cqw] font-mono text-[#f59e0b]">Siren Vocal</span>
                  </div>
                  <div className="text-[0.8cqw] text-slate-400 font-sans leading-tight">
                    塞壬歌声极性封锁，全员封蜡，奥德修斯缚桅。
                  </div>
                </div>

                {/* Quadrant 3: Freshwater Supplies */}
                <div className={`p-[1.5cqw] rounded-xl border bg-[#051a30]/40 flex flex-col justify-between h-[15cqh] transition-all duration-500 ${
                  beat === 1 ? "border-[#f59e0b] shadow-[0_0_12px_rgba(245,158,11,0.25)] scale-102" : "border-slate-800 opacity-60"
                }`}>
                  <div className="flex justify-between items-start">
                    <span className="text-[0.85cqw] font-mono font-bold text-slate-300 uppercase">03 | 淡水储备 (Freshwater)</span>
                    <Droplet className={`w-[1.3cqw] h-[1.3cqw] ${beat === 1 ? "text-[#f59e0b]" : "text-slate-500"}`} />
                  </div>
                  <div className="my-[0.5cqh] flex items-baseline gap-[0.5cqw]">
                    <span className="text-[2.2cqw] font-serif font-bold text-white">12 Bbls</span>
                    <span className="text-[0.9cqw] font-mono text-[#f59e0b]">Remaining</span>
                  </div>
                  <div className="text-[0.8cqw] text-slate-400 font-sans leading-tight">
                    淡水配给柔性均衡，维持海员核心适航运力。
                  </div>
                </div>

                {/* Quadrant 4: Crew Casualties */}
                <div className={`p-[1.5cqw] rounded-xl border bg-[#051a30]/40 flex flex-col justify-between h-[15cqh] transition-all duration-500 ${
                  beat === 2 ? "border-[#f59e0b] shadow-[0_0_12px_rgba(245,158,11,0.25)] scale-102" : "border-slate-800 opacity-60"
                }`}>
                  <div className="flex justify-between items-start">
                    <span className="text-[0.85cqw] font-mono font-bold text-slate-300 uppercase">04 | 船员伤亡 (Casualties)</span>
                    <Skull className={`w-[1.3cqw] h-[1.3cqw] ${beat === 2 ? "text-[#f59e0b] animate-bounce" : "text-slate-500"}`} />
                  </div>
                  <div className="my-[0.5cqh] flex items-baseline gap-[0.5cqw]">
                    <span className="text-[2.2cqw] font-serif font-bold text-red-500">11 Lost</span>
                    <span className="text-[0.9cqw] font-mono text-[#f59e0b]">1 Ship Left</span>
                  </div>
                  <div className="text-[0.8cqw] text-slate-400 font-sans leading-tight">
                    伴随惨烈牺牲，奥德修斯终乘神舟孤身涉水抵港。
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== SCENE 5 (Ledger - Extreme) ==================== */}
          <div className="w-[20%] h-full flex-shrink-0 px-[1cqw] flex flex-col justify-between">
            <div className="grid grid-cols-12 gap-[2.5cqw] h-full items-center">
              {/* Left Copy: Royal Ithaca Homecoming Manifest */}
              <div className="col-span-4 flex flex-col gap-[1.5cqh]">
                <div className="flex items-center gap-[0.5cqw] text-[#f59e0b] font-mono text-[1.1cqw] font-bold">
                  <CheckCircle className="w-[1.2cqw] h-[1.2cqw]" />
                  {currentBeat.action} | Royal Manifest
                </div>
                <h2 className="text-[2.2cqw] font-serif font-black leading-tight text-white">
                  {currentBeat.title}
                  <span className="block text-[1.2cqw] font-sans font-normal text-slate-300 mt-[0.5cqh]">
                    Royal Ithaca Homecoming Manifest
                  </span>
                </h2>
                <p className="text-[1.05cqw] leading-[1.5] text-slate-300 font-sans">
                  {currentBeat.body}
                </p>
                
                {/* Official Ithaca Wax Seal in red clay at the bottom */}
                <div className="flex justify-center items-center mt-[1cqh]">
                  <div 
                    className={`relative w-[9cqw] h-[9cqw] rounded-full flex items-center justify-center transition-all duration-[1200ms] ${
                      beat === 2 
                        ? "bg-[#9f1239] shadow-[0_0_15px_rgba(159,18,57,0.6)] scale-105 border-2 border-[#f59e0b]" 
                        : "bg-[#9f1239]/40 opacity-40 scale-100 border border-dashed border-[#f59e0b]/30"
                    }`}
                    style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                  >
                    {/* Greek key pattern border inside the seal */}
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full p-[0.5cqw]">
                      <circle cx="50" cy="50" r="44" className="fill-none stroke-[#f59e0b]/50 stroke-[1.5] stroke-dasharray-2" />
                      <path d="M 50 15 A 35 35 0 1 1 49.9 15" className="fill-none stroke-[#f59e0b]/30 stroke-[2]" strokeDasharray="4,4" />
                      <g transform="translate(35, 35) scale(0.6)" className="text-[#f59e0b]">
                        <path d="M 10 35 C 15 40, 35 40, 40 35 L 45 20 L 35 25 L 25 10 L 15 25 L 5 20 Z" className="fill-[#f59e0b] stroke-[#f59e0b] stroke-[1]" />
                        <line x1="25" y1="5" x2="25" y2="30" className="stroke-[#f59e0b] stroke-[2]" />
                      </g>
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center text-center">
                      <span className="font-serif text-[0.8cqw] font-black text-[#f59e0b] tracking-wider">ITHACA</span>
                      <span className="font-mono text-[0.6cqw] text-white opacity-80 uppercase tracking-widest mt-[0.2cqh]">SEALED</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Visual: Highly detailed, text-heavy travel log ledger tables */}
              <div className="col-span-8 bg-[#051a30]/40 border border-[#f59e0b]/15 rounded-2xl p-[2cqw] h-full flex flex-col justify-between overflow-hidden">
                <div className="flex justify-between items-center border-b border-[#f59e0b]/20 pb-[0.8cqh]">
                  <span className="text-[0.9cqw] font-mono font-bold text-[#f59e0b] tracking-wider flex items-center gap-[0.5cqw]">
                    <FileText className="w-[1.1cqw] h-[1.1cqw]" />
                    航海日志与王权账目 (VOYAGE LEDGER & MANIFEST)
                  </span>
                  <span className="text-[0.8cqw] font-mono text-slate-400">BC 800 // CLASSIFIED</span>
                </div>

                {/* Voyage Log Table */}
                <div className="flex-1 my-[1.5cqh] overflow-auto">
                  <table className="w-full text-left font-mono text-[0.8cqw] border-collapse">
                    <thead>
                      <tr className="border-b border-[#f59e0b]/10 text-slate-400">
                        <th className="py-[0.8cqh] font-bold">航程阶段 (Voyage Phase)</th>
                        <th className="py-[0.8cqh] font-bold text-center">消耗天数 (Days)</th>
                        <th className="py-[0.8cqh] font-bold text-center">淡水配给 (Water)</th>
                        <th className="py-[0.8cqh] font-bold text-right">损耗记录 (Losses)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f59e0b]/5 text-slate-300">
                      <tr className="hover:bg-[#f59e0b]/5 transition-colors">
                        <td className="py-[0.8cqh] font-serif font-bold text-white">01. 特洛伊出发 (Troy Departure)</td>
                        <td className="py-[0.8cqh] text-center">12 Days</td>
                        <td className="py-[0.8cqh] text-center">100%</td>
                        <td className="py-[0.8cqh] text-right text-emerald-400">0 Ships Lost</td>
                      </tr>
                      <tr className="hover:bg-[#f59e0b]/5 transition-colors">
                        <td className="py-[0.8cqh] font-serif font-bold text-white">02. 食莲忘忧 (Lotus-Eaters)</td>
                        <td className="py-[0.8cqh] text-center">45 Days</td>
                        <td className="py-[0.8cqh] text-center">85%</td>
                        <td className="py-[0.8cqh] text-right text-emerald-400">0 Ships Lost</td>
                      </tr>
                      <tr className="hover:bg-[#f59e0b]/5 transition-colors">
                        <td className="py-[0.8cqh] font-serif font-bold text-white">03. 险阻突围 (Epic Trials)</td>
                        <td className="py-[0.8cqh] text-center">180 Days</td>
                        <td className="py-[0.8cqh] text-center">40%</td>
                        <td className="py-[0.8cqh] text-right text-red-400">6 Ships Lost</td>
                      </tr>
                      <tr className="hover:bg-[#f59e0b]/5 transition-colors">
                        <td className="py-[0.8cqh] font-serif font-bold text-white">04. 海峡测绘 (Messina Strait)</td>
                        <td className="py-[0.8cqh] text-center">320 Days</td>
                        <td className="py-[0.8cqh] text-center">15%</td>
                        <td className="py-[0.8cqh] text-right text-red-400">11 Ships Lost</td>
                      </tr>
                      <tr className={`transition-colors duration-500 ${beat >= 2 ? "bg-emerald-950/20 text-emerald-300" : ""}`}>
                        <td className="py-[0.8cqh] font-serif font-bold">05. 圣岛回归 (Ithaca Return)</td>
                        <td className="py-[0.8cqh] text-center">3650 Days</td>
                        <td className="py-[0.8cqh] text-center">0% (Exhausted)</td>
                        <td className="py-[0.8cqh] text-right font-bold text-red-500">12 Ships (All Lost)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Roster & System Status Footer */}
                <div className="border-t border-[#f59e0b]/15 pt-[0.8cqh] flex justify-between items-center text-[0.75cqw] font-mono text-slate-400">
                  <span className="flex items-center gap-[0.5cqw]">
                    <Wrench className="w-[1cqw] h-[1cqw] text-[#f59e0b]" />
                    龙骨抗蚀力 (Hull Integrity): 94.2% Strength
                  </span>
                  <span className="flex items-center gap-[0.3cqw]">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                    {isZh ? "伊萨卡王权重夺成功" : "ROYAL REIGN RECLAIMED OK"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Slide Footer */}
      <div className="flex justify-between items-center text-[0.8cqw] font-mono opacity-55 border-t border-[#f59e0b]/10 pt-[1.2cqh] z-10 shrink-0">
        <span>© BC 800 - 2026 {isZh ? "荷马地中海古典科学研究院" : "Mediterranean Archaic Historical Association"}</span>
        <span>{isZh ? "基于神话流阻力的航线回归自适应控温" : "convection marine feedback controls"}</span>
      </div>
    </div>
  );
}
