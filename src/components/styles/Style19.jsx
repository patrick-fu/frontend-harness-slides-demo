import React from "react";

export const getMetadata = (lang) => ({
  id: "19",
  tier: "C",
  name: lang === "zh" ? "地缘大决断：明治维新迁都记" : "Capital Shift: Kyoto to Tokyo",
  theme: lang === "zh" ? "明治维新地缘政治决断" : "Meiji Restoration Geopolitical Decisiveness",
  densityLabel: lang === "zh" ? "迁都议呈" : "Capital Shift Memo",
  colors: { bg: "bg-[#fdfcf7]", ink: "text-[#2c2a26]", panel: "border-[#cfc3b0]" },
  typography: { header: "font-serif", body: "font-serif" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "江户改建东京诏书" : "The Proclamation of Edo Rename",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "颁布改元诏" : "Issue Imperial Proclamation", 
          title: lang === "zh" ? "江户改元东京诏" : "The Imperial Decree on Tokyo", 
          body: lang === "zh" ? "“朕今听政，以东国为本，特改江户为东京。”1868年秋，明治天皇颁布诏书，旨在打破京都公家旧势力的保守羁绊，迈出维新第一步。" : "“We now conduct state affairs with the Eastern realm as our anchor; let Edo be renamed Tokyo.” In Autumn 1868, Emperor Meiji issued the decree to shatter Kyoto's court conservation, taking the first step of Restoration." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "分析京都羁绊" : "Analyze Kyoto Restraints", 
          title: lang === "zh" ? "京都公家旧体制之阻碍" : "The Conservative Grip of Kyoto Court", 
          body: lang === "zh" ? "京都千年来受公家贵族与寺院势力笼罩，保守派视对外开国为异端，极力抵制全面西方化改革，成为明治新政的巨大枷锁。" : "For a millennium, Kyoto was bound by aristocrats and temples. Conservatives viewed open borders as heresy and opposed Western reforms, shackling Meiji statecraft." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "接管江户资产" : "Assimilate Edo Assets", 
          title: lang === "zh" ? "接管德川幕府百年遗产" : "Assimilation of Shogunate Legacy", 
          body: lang === "zh" ? "江户作为德川幕府统治中心长达260年，拥有完备的官僚衙署、通达之街道网络及大量新军营房，是现成之高效行政枢纽。" : "As the Shogunate's core for 260 years, Edo possessed superb administrative bureaus, vast highway networks, and military barracks, making it a ready-made capital." 
        }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "地缘攻守：京都与东京" : "Geopolitical Strategy: Kyoto vs Tokyo",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "分析盆地局限" : "Outline Landlocked Basin", 
          title: lang === "zh" ? "京都内陆盆地之困" : "Kyoto Basin Bottleneck", 
          body: lang === "zh" ? "京都深处山间盆地，对外仅能依靠狭窄陆路。在海权崛起之19世纪，完全无法对齐世界工业与商贸流通的大势。" : "Kyoto lies deep in a mountain basin, relying on narrow roads. In the 19th-century era of sea power, it was isolated from global industrial commerce." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "展现海洋吞吐" : "Reveal Maritime Access", 
          title: lang === "zh" ? "东京港口海运之利" : "Tokyo Maritime Gateway", 
          body: lang === "zh" ? "东京坐拥关东平原，直面深水良港。通过横滨港与英美蒸汽轮船直接握手，极大加速了煤铁、技术与资本的内流速度。" : "Tokyo commands the vast Kanto plain, fronting deepwater ports. Direct handshakes with Western steamships via Yokohama accelerated the inflow of iron, technology, and capital." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "判定统治重心" : "Assess Regional Control", 
          title: lang === "zh" ? "全国统治重心之东移" : "Stabilizing the Eastern Frontier", 
          body: lang === "zh" ? "日本人口与财富大半集中于关东与奥羽地区。迁都东京不仅能巩固对东国领地之统辖，更能防范德川残余势力的死灰复燃。" : "Most of Japan's population and wealth clustered in Kanto and Tohoku. Relocating to Tokyo secured the East and checked remnants of Shogunate revolts." 
        }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "迁都推进三大战役" : "Three Milestones of Relocation",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "布告江户改名" : "Edo Renaming Decree", 
          title: lang === "zh" ? "首阶段：江户改元东京与维新" : "Stage I: Edo Renaming and Royal Transit", 
          body: lang === "zh" ? "1868年7月正式改名。同年10月，天皇首次驾幸东京。三千家臣随行，声势浩大，宣示国家统治主权之重塑。" : "Edo was officially renamed in July 1868. That October, the Emperor journeyed east with 3,000 retainers, declaring the reshape of state sovereignty." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "进驻东京皇城" : "Occupy Tokyo Castle", 
          title: lang === "zh" ? "二阶段：太政官阁员东迁进驻" : "Stage II: Relocating the Imperial Council", 
          body: lang === "zh" ? "1869年春，新政府最高中枢“太政官”及各省阁员整体迁往东京，接管原江户城，使其正式履行中央首都之职能。" : "In Spring 1869, the supreme council (Dajokan) and ministry officials moved to Tokyo, occupying Tokyo Castle to establish central governance." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "宣示永久皇舆" : "Establish Permanent Seat", 
          title: lang === "zh" ? "三阶段：皇后临幸与皇舆永驻" : "Stage III: Imperial Permanence and Consolidation", 
          body: lang === "zh" ? "1869年 winter，一条美子皇后东迁至东京皇城，朝廷宗庙与皇家仪轨自此在东京落户，京都千年的首都地位自此交接。" : "In Winter 1869, Empress Ichijo relocated to Tokyo Castle. Court rites and administrative machinery permanently settled, completing a millennium's capital transition." 
        }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "东京四核心机能评估" : "Four Core Strata of Tokyo Strategy",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "估算海运运力" : "Verify Port Shipping", 
          title: lang === "zh" ? "横滨-东京黄金航道吞吐" : "Yokohama-Tokyo Shipping Corridor", 
          body: lang === "zh" ? "横滨海关报告显示，海运货轮进口总值年均攀升35%，彻底解除了关西陆运物流运力极低之致命瓶颈。" : "Yokohama customs show a 35% annual increase in shipping value, entirely bypassing Kansai's fatal logistics and shipping limits." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "核算生丝出口" : "Audit Silk Export", 
          title: lang === "zh" ? "生丝出口与维新外汇结存" : "Silk Exports and Currency Reserves", 
          body: lang === "zh" ? "东京湾港口控制了全日本80%以上的生丝与茶叶出口。丰厚的外汇收入直接用于偿还英美军火及铁路修筑之贷款。" : "Tokyo Bay ports secured over 80% of Japanese silk and tea exports. Robust revenues funded Western locomotives and heavy weapon imports." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "整编旧军衙门" : "Reorganize Shogunate Bureaus", 
          title: lang === "zh" ? "幕府旧衙署改建为新军营房" : "Converting Shogunate Camps", 
          body: lang === "zh" ? "收编江户大名住宅及军火工场，改建为陆军镇台司令部与近代海军学校，用最小代价构筑了新政府核心武备实力。" : "Seizing feudal estates and armories to build infantry barracks and naval academies, Meiji secured modern military force at minimal cost." 
        }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "地缘大决算比对总账" : "Geopolitical Capital Cost-Benefit Ledger",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "比对省际权重" : "Compare Province Parameters", 
          title: lang === "zh" ? "京都与东京地缘常数全面对决" : "Geographic Constants: Kyoto vs Tokyo", 
          body: lang === "zh" ? "综合审计旧都京都与新都东京（江户）在海防安全、内河物流、商贸税收、旧臣羁绊各维度的指标常数，东京在各领域呈压倒之势。" : "Comprehensive audit of Kyoto vs Tokyo across defense, river shipping, tariffs, and court conservative interference. Tokyo scores overwhelming victory." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "加盖天皇御玺" : "Stamp Imperial Seal", 
          title: lang === "zh" ? "迁都东京呈太政官御前本" : "Relocation Memorial to Imperial Council", 
          body: lang === "zh" ? "大政大臣三条实美起草迁都大呈，呈明治天皇御前审阅，加盖‘天皇御玺’（Vermilion Seal），奠定日本此后百年现代化国运。" : "Grand Minister Sanjo Sanetomi drafted the Relocation Act, presented for Emperor Meiji's review. Stamped with the Imperial Seal, it launched the empire's rise." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "签发迁都公债" : "Issue Capital Bonds", 
          title: lang === "zh" ? "太政官应急迁都公债签发" : "Relocation Financial Bonds Issue", 
          body: lang === "zh" ? "太政官签发首批‘东京迁都建设公债’五百万日元，紧急调拨新政资源修缮东京皇城、迁移官僚府邸，完成地缘政治的历史性东漂。" : "The Council issued 5M Yen of Relocation Bonds, channeling gold to repair Tokyo Castle and relocate bureaus, finalizing Japan's historic eastern pivot." 
        }
      ]
    }
  ]
});

export default function Style19({ scene, beat, language, onNavigate, isThumbnail }) {
  const metaZH = getMetadata("zh");
  const metaEN = getMetadata("en");

  const currentSceneZH = metaZH.scenes.find((s) => s.id === scene) || metaZH.scenes[0];
  const currentSceneEN = metaEN.scenes.find((s) => s.id === scene) || metaEN.scenes[0];

  const currentBeatZH = currentSceneZH.beats[beat] || currentSceneZH.beats[0];
  const currentBeatEN = currentSceneEN.beats[beat] || currentSceneEN.beats[0];

  // Helper for computing fan sector path
  const getSectorPath = (cx, cy, rInner, rOuter, startDeg, endDeg) => {
    const rad = Math.PI / 180;
    const startRad = startDeg * rad;
    const endRad = endDeg * rad;
    
    const x1_out = cx + rOuter * Math.cos(startRad);
    const y1_out = cy + rOuter * Math.sin(startRad);
    const x2_out = cx + rOuter * Math.cos(endRad);
    const y2_out = cy + rOuter * Math.sin(endRad);
    
    const x1_in = cx + rInner * Math.cos(startRad);
    const y1_in = cy + rInner * Math.sin(startRad);
    const x2_in = cx + rInner * Math.cos(endRad);
    const y2_in = cy + rInner * Math.sin(endRad);
    
    const largeArcFlag = endDeg - startDeg > 180 ? 1 : 0;
    
    return `
      M ${x1_in} ${y1_in}
      L ${x1_out} ${y1_out}
      A ${rOuter} ${rOuter} 0 ${largeArcFlag} 1 ${x2_out} ${y2_out}
      L ${x2_in} ${y2_in}
      A ${rInner} ${rInner} 0 ${largeArcFlag} 0 ${x1_in} ${y1_in}
      Z
    `;
  };

  const cx = 75;
  const cy = 80;
  const rInner = 14;
  const rOuter = 44;

  const activeIdx = scene - 1;
  const inactiveWidth = 23;
  const activeWidth = 68; // 68 + 23 * 4 = 160 degrees total
  let currentAngle = 190;
  const fanSectors = [];
  
  for (let i = 0; i < 5; i++) {
    const width = i === activeIdx ? activeWidth : inactiveWidth;
    const start = currentAngle;
    const end = currentAngle + width;
    fanSectors.push({
      id: i + 1,
      start,
      end,
      active: i === activeIdx,
      centerAngle: start + width / 2
    });
    currentAngle = end;
  }

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#fdfcf7] text-[#2c2a26] @container select-none">
      {/* Dynamic Visual Effects Injection */}
      <style>{`
        @keyframes waveFlow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-40px); }
        }
        @keyframes trainPuff {
          0% { transform: translateY(0) scale(0.8); opacity: 0.5; }
          50% { transform: translateY(-4px) scale(1.2); opacity: 0.7; }
          100% { transform: translateY(-10px) scale(1.5); opacity: 0; }
        }
        @keyframes shipSway {
          0% { transform: rotate(-0.5deg) translateY(0); }
          50% { transform: rotate(1deg) translateY(-1.5px); }
          100% { transform: rotate(-0.5deg) translateY(0); }
        }
        @keyframes pathPulse {
          0% { stroke-dashoffset: 20; opacity: 0.8; }
          50% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -20; opacity: 0.8; }
        }
      `}</style>

      {/* Reusable Washi Fiber Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] z-0" style={{
        backgroundImage: `
          radial-gradient(at 15% 15%, #5c432d 1.5px, transparent 150px),
          radial-gradient(at 85% 25%, #5c432d 2px, transparent 200px),
          radial-gradient(at 35% 85%, #5c432d 1.5px, transparent 120px),
          radial-gradient(at 75% 75%, #5c432d 2px, transparent 180px),
          linear-gradient(45deg, rgba(92,67,45,0.04) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(92,67,45,0.04) 25%, transparent 25%)
        `,
        backgroundSize: "28cqw 28cqw"
      }} />

      {/* Double Imperial Border on Washi Edge */}
      <div className="absolute inset-[1.5cqw] border border-[#dacfb7] pointer-events-none z-10" />
      <div className="absolute inset-[1.8cqw] border border-double border-[#912d18]/25 pointer-events-none z-10" />

      {/* 500% Horizontal Sliding Track */}
      <div 
        className="flex w-[500%] h-full z-10 relative transition-transform duration-[1200ms]"
        style={{ 
          transform: `translateX(-${(scene - 1) * 20}%)`,
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        {/* ==================== SCENE 1 (PREMISE - ULTRALIGHT) ==================== */}
        <div className="w-[20%] h-full shrink-0 flex-shrink-0 relative p-[4cqw] flex flex-row items-center justify-between overflow-hidden">
          {/* Left vertical grand decree title */}
          <div className="flex flex-row items-start gap-[2cqw] h-[78cqh]">
            <div 
              className="font-serif font-black text-[3.8cqw] leading-none text-[#912d18] tracking-widest border-r border-[#912d18]/20 pr-[1.5cqw]"
              style={{ writingMode: "vertical-rl" }}
            >
              明治維新・遷都東京大詔
            </div>
            <div 
              className="font-serif font-bold text-[1.4cqw] leading-relaxed text-[#5c432d] opacity-80 mt-[2cqh]"
              style={{ writingMode: "vertical-rl" }}
            >
              江戶改設新都 · 朝廷宗廟永駐
            </div>
            <div 
              className="font-sans font-extrabold text-[0.8cqw] tracking-widest text-[#8c745c] uppercase opacity-60 mt-[2cqh]"
              style={{ writingMode: "vertical-rl" }}
            >
              THE GEOPOLITICAL TRANSITION: KYOTO TO TOKYO
            </div>
          </div>

          {/* Center-Right Majestic Chrysanthemum Seal & Text Card */}
          <div className="flex-1 h-full flex flex-col justify-center items-center relative pl-[4cqw]">
            {/* Glowing sunburst behind chrysanthemum */}
            <div className="absolute w-[36cqw] h-[36cqw] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(223,186,115,0.18)_0%,_transparent_70%)] animate-pulse pointer-events-none" />
            
            <svg viewBox="0 0 120 120" className="w-[18cqw] h-[18cqw] text-[#912d18] z-10 transition-all duration-[1000ms] hover:scale-105">
              <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="3 1.5" />
              <circle cx="60" cy="60" r="15" fill="none" stroke="currentColor" strokeWidth="0.8" />
              {[...Array(16)].map((_, i) => {
                const angle = (i * 360) / 16;
                return (
                  <g key={i} transform={`rotate(${angle} 60 60)`}>
                    <path d="M 60,45 Q 63.5,28 60,20 Q 56.5,28 60,45 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="60" y1="45" x2="60" y2="20" stroke="currentColor" strokeWidth="0.2" />
                  </g>
                );
              })}
              <circle cx="60" cy="60" r="4.5" fill="currentColor" />
              <text x="60" y="86" fontSize="5.2" textAnchor="middle" fill="#912d18" className="font-serif italic font-extrabold tracking-wide">IMPERIAL COVENANT</text>
              <text x="60" y="93" fontSize="3.8" textAnchor="middle" fill="#8c745c" className="font-serif italic tracking-widest opacity-80">TOKYO • MEIJI YEAR II</text>
            </svg>

            {/* Asymmetrical elegant text scroll block at bottom right */}
            <div className="w-[85%] mt-[3cqh] z-10 bg-[#faf6ed]/95 border border-[#dfd3c5] p-[2cqw] rounded-[0.4cqw] shadow-[3px_5px_15px_rgba(92,67,45,0.06)] relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[0.3cqw] bg-[#912d18]" />
              
              <h3 className="font-serif font-black text-[1.4cqw] text-[#912d18] border-b border-[#dfd3c5]/60 pb-[0.5cqh] mb-[1cqh]">
                {currentBeatZH.title}
                <span className="block font-sans text-[0.9cqw] font-semibold text-[#5c432d] opacity-80 mt-0.5">
                  {currentBeatEN.title}
                </span>
              </h3>
              
              <p className="font-serif font-bold text-[1.05cqw] leading-relaxed text-[#2c2a26] mb-[0.8cqh]">
                {currentBeatZH.body}
              </p>
              <p className="font-sans text-[0.85cqw] text-[#5c432d] italic leading-relaxed">
                {currentBeatEN.body}
              </p>

              {/* Decorative signature corner on Beat 2 */}
              <div className={`absolute bottom-[0.5cqw] right-[1cqw] transition-opacity duration-1000 ${beat >= 2 ? "opacity-100" : "opacity-0"}`}>
                <span className="font-serif text-[0.8cqw] text-[#912d18] italic font-bold">敕命加蓋御印 済</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== SCENE 2 (DUAL - LIGHT) ==================== */}
        <div className="w-[20%] h-full shrink-0 flex-shrink-0 relative p-[4cqw] flex flex-row items-center justify-between overflow-hidden">
          {/* Left Washi Sheet: Kyoto Basin Bottleneck */}
          <div 
            className="absolute left-[4cqw] top-[6cqh] w-[40%] h-[74cqh] rotate-[-1.5deg] border border-[#cfc3b0] bg-[#f9f5eb] shadow-[4px_6px_20px_rgba(92,67,45,0.06)] p-[2cqw] rounded-[0.4cqw] flex flex-col justify-between z-10 transition-opacity duration-500"
            style={{ opacity: beat === 1 ? 0.6 : 1 }}
          >
            <div>
              <span className="font-serif text-[1.2cqw] text-[#7a654c] font-black uppercase tracking-wider border-b border-[#cfc3b0] pb-1 block text-center mb-[1.5cqh]">
                西京京都 · 盆地局限 / Kyoto Basin
              </span>
              
              <div className="h-[22cqh] flex items-center justify-center bg-[#fcfbf7] rounded border border-[#dfd3c5] shadow-inner mb-[1.5cqh] relative overflow-hidden">
                {/* Mountain Basin SVG */}
                <svg viewBox="0 0 120 80" className="w-[85%] h-[85%] text-[#8c745c]">
                  {/* Surrounding Mountain peaks */}
                  <path d="M 5,68 L 22,35 L 42,65 M 30,65 L 55,25 L 80,70 M 70,70 L 92,30 L 115,72" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  <path d="M 12,68 L 35,42 L 55,68" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 1" />
                  
                  {/* Confined Imperial Palace Grid */}
                  <rect x="44" y="52" width="22" height="15" fill="#fdfcf7" stroke="currentColor" strokeWidth="0.8" />
                  <rect x="47" y="55" width="16" height="9" fill="none" stroke="#912d18" strokeWidth="0.5" strokeDasharray="1 1" />
                  <text x="55" y="62" fontSize="7" fill="#912d18" className="font-serif font-bold text-center">宮</text>
                  
                  <text x="55" y="16" fontSize="5" textAnchor="middle" fill="#912d18" className="font-serif italic font-bold">Conserative Court Blockade</text>
                  <line x1="55" y1="20" x2="55" y2="50" stroke="#912d18" strokeWidth="0.4" strokeDasharray="2 2" />
                </svg>
              </div>

              {/* Formula representing geographic isolation */}
              <div className="font-serif text-[0.85cqw] text-[#7a654c] italic bg-[#faf5eb] border border-[#cfc3b0]/50 p-[0.6cqw] rounded mb-[1cqh] flex items-center justify-between">
                <span>陸路局限比例 Landlocked ratio:</span>
                <span className="font-mono font-bold text-[#912d18]">Ω = d / W_road → 100%</span>
              </div>

              <div className="font-serif text-[1cqw] leading-relaxed text-[#423a31]">
                <p className="font-bold mb-1">【京都千载盆地，交通窒碍】</p>
                <p className="text-[0.8cqw] text-[#6e5e50]">京都深锁于山腹，漕运不通，无法与十九世纪全球蒸汽铁甲之海权时代进行物质与信息对接。</p>
              </div>
            </div>
            
            <div className="border-t border-[#cfc3b0]/50 pt-1 text-[0.8cqw] text-[#7a654c] italic">
              Kyoto is bound by a thousand years of conservative court drag.
            </div>
          </div>

          {/* Strategic Connecting Thread Arrow and Compass */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg viewBox="0 0 1000 600" className="w-full h-full text-[#912d18]/40">
              <path 
                d="M 400,280 Q 500,200 600,280" 
                fill="none" 
                stroke="#912d18" 
                strokeWidth="1.8" 
                strokeDasharray="4 3" 
                className="transition-all duration-[1500ms]"
                style={{ 
                  animation: "pathPulse 2s linear infinite",
                  opacity: beat >= 2 ? 1 : 0 
                }} 
              />
              {/* Strategic Compass Rose */}
              {beat >= 2 && (
                <g transform="translate(500, 220) scale(0.8)">
                  <circle cx="0" cy="0" r="18" fill="#fdfcf7" stroke="#912d18" strokeWidth="0.8" />
                  <line x1="-25" y1="0" x2="25" y2="0" stroke="#912d18" strokeWidth="0.4" />
                  <line x1="0" y1="-25" x2="0" y2="25" stroke="#912d18" strokeWidth="0.4" />
                  <polygon points="0,-18 4,0 -4,0" fill="#912d18" />
                  <polygon points="0,18 4,0 -4,0" fill="#8c745c" />
                  <polygon points="18,0 0,4 0,-4" fill="#8c745c" />
                  <polygon points="-18,0 0,4 0,-4" fill="#8c745c" />
                  <text x="0" y="-21" fontSize="6" textAnchor="middle" fill="#912d18" className="font-serif font-black">東</text>
                </g>
              )}
            </svg>
          </div>

          {/* Right Washi Sheet: Tokyo Port & Yokohama Shipping */}
          <div 
            className={`absolute right-[4cqw] top-[10cqh] w-[50%] h-[78cqh] rotate-[1deg] border bg-[#fdfbf3] shadow-[5px_8px_25px_rgba(145,45,24,0.08)] p-[2cqw] rounded-[0.4cqw] flex flex-col justify-between transition-all duration-[1000ms] ${
              beat >= 1 ? "border-[#912d18] shadow-[#912d18]/15" : "border-[#cfc3b0] opacity-50"
            }`}
          >
            <div>
              <span className="font-serif text-[1.2cqw] text-[#912d18] font-black uppercase tracking-wider border-b border-[#912d18]/30 pb-1 block text-center mb-[1.5cqh]">
                東京港口 · 橫濱海防 / Tokyo Port & Yokohama
              </span>
              
              <div className="h-[24cqh] flex items-center justify-center bg-[#fdfdfc] rounded border border-[#dfd3c5] shadow-inner mb-[1.5cqh] relative overflow-hidden">
                {/* Traditional Waves Pattern */}
                <div className="absolute bottom-0 left-0 right-0 h-[6cqh] opacity-35" style={{
                  backgroundImage: "radial-gradient(circle at 10px -10px, transparent 12px, #4fa3a5 12px, #4fa3a5 14px, transparent 14px)",
                  backgroundSize: "20px 20px"
                }} />

                {/* Yokohama Deepwater Harbor and Steamship SVG */}
                <svg viewBox="0 0 160 100" className="w-[90%] h-[90%] text-[#912d18]">
                  {/* Yokohama coastlines */}
                  <path d="M 5,20 Q 25,45 10,75 T 30,95" fill="none" stroke="#8c745c" strokeWidth="0.8" />
                  <text x="15" y="15" fontSize="4.5" fill="#8c745c" className="font-serif italic font-bold">Yokohama Bay</text>
                  
                  {/* Global trade arrows */}
                  <path d="M 130,20 L 70,55" fill="none" stroke="#dfba73" strokeWidth="1" strokeDasharray="3 2" />
                  <path d="M 140,40 L 72,60" fill="none" stroke="#dfba73" strokeWidth="1" strokeDasharray="3 2" />
                  <text x="135" y="14" fontSize="4" fill="#dfba73" className="font-serif italic">Global Steampaths</text>
                  
                  {/* Active Steamship with animated sway and smoke */}
                  <g style={{ transformOrigin: "60px 65px", animation: beat >= 1 ? "shipSway 4s ease-in-out infinite" : "none" }}>
                    <path d="M 35,62 L 85,62 L 78,75 L 42,75 Z" fill="#2c2a26" stroke="currentColor" strokeWidth="0.4" />
                    <rect x="52" y="47" width="10" height="15" fill="#912d18" />
                    <line x1="57" y1="47" x2="57" y2="38" stroke="#2c2a26" strokeWidth="1.2" />
                    
                    {/* Steam chimney puffs */}
                    {beat >= 1 && (
                      <g>
                        <circle cx="57" cy="34" r="1.5" fill="#7a654c" opacity="0.6" style={{ animation: "trainPuff 1.5s infinite 0s" }} />
                        <circle cx="57" cy="34" r="2.2" fill="#7a654c" opacity="0.6" style={{ animation: "trainPuff 1.5s infinite 0.5s" }} />
                        <circle cx="57" cy="34" r="2.8" fill="#7a654c" opacity="0.6" style={{ animation: "trainPuff 1.5s infinite 1s" }} />
                      </g>
                    )}
                    
                    {/* Flags */}
                    <polygon points="35,62 30,59 35,56" fill="#912d18" />
                  </g>
                  
                  {/* Traditional Waves */}
                  <path d="M 10,85 Q 40,80 70,85 T 130,85 T 160,85" fill="none" stroke="#4fa3a5" strokeWidth="0.6" />
                  <path d="M 20,90 Q 50,86 80,90 T 140,90" fill="none" stroke="#4fa3a5" strokeWidth="0.4" strokeDasharray="2 2" />
                </svg>
              </div>

              {/* Dynamic Formula representing maritime throughput */}
              <div className="font-serif text-[0.85cqw] text-[#912d18] italic bg-[#fdf9f2] border border-[#912d18]/25 p-[0.6cqw] rounded mb-[1cqh] flex items-center justify-between">
                <span>横滨港航运吞吐 Maritime Throughput:</span>
                <span className="font-mono font-bold text-[#912d18]">T_port = Tonnage × v_steam → +35% Ann.</span>
              </div>

              <div className="font-serif text-[1cqw] leading-relaxed text-[#2c2a26]">
                <h4 className="font-bold text-[#912d18]">【东京外接太平洋，握手世界】</h4>
                <p className="text-[0.8cqw] text-[#3d3126]">直面深水海湾，横滨关税大增。直接引入欧美之煤铁、军火与电报网络，一举解除幕府陆路极低之运力瓶颈。</p>
              </div>
            </div>

            <div className="border-t border-[#912d18]/20 pt-1 text-[0.8cqw] text-[#912d18] font-bold">
              {beat >= 2 ? "★ DECISION VERDICT: GEOGRAPHIC WIN FOR TOKYO" : "Pending imperial naval review..."}
            </div>
          </div>

          {/* Consolidated Overlay Text Block at bottom left */}
          <div className="absolute left-[4cqw] bottom-[4cqh] w-[40%] bg-[#faf6ed]/95 border border-[#dfd3c5] p-[1.5cqw] rounded-[0.4cqw] shadow-md z-20">
            <h4 className="font-serif font-black text-[1.15cqw] text-[#912d18] mb-[0.5cqh]">
              {currentBeatZH.title}
              <span className="block font-sans text-[0.8cqw] font-normal text-[#5c432d] opacity-75">
                {currentBeatEN.title}
              </span>
            </h4>
            <p className="font-serif text-[0.9cqw] text-[#2c2a26] leading-relaxed mb-1">
              {currentBeatZH.body}
            </p>
            <p className="font-sans text-[0.75cqw] text-[#5c432d] italic leading-tight">
              {currentBeatEN.body}
            </p>
          </div>
        </div>

        {/* ==================== SCENE 3 (PROCESS - STANDARD) ==================== */}
        <div className="w-[20%] h-full shrink-0 flex-shrink-0 relative p-[4cqw] flex flex-col justify-between overflow-hidden">
          <div className="flex flex-col gap-[0.5cqh] mb-[1.5cqh]">
            <span className="font-sans text-[1.1cqw] font-black tracking-widest text-[#8c745c] uppercase border-b border-[#dfd3c5] pb-[0.5cqh]">
              {metaZH.scenes[2].title} / {metaEN.scenes[2].title}
            </span>
          </div>

          {/* Grand Emakimono Handscroll */}
          <div className="flex-1 w-full bg-[linear-gradient(to_bottom,_#faf5eb_0%,_#f5ebd6_50%,_#faf5eb_100%)] border border-[#cfc0a9] shadow-[inset_0_0_25px_rgba(92,67,45,0.12)] rounded-[0.5cqw] relative p-[2cqw] flex flex-col justify-between overflow-hidden">
            
            {/* Horizontal Timeline Connector ribbon in background */}
            <div className="absolute left-0 right-0 top-[28cqh] h-[1cqh] z-0">
              <svg viewBox="0 0 1000 40" className="w-full h-full text-[#912d18]">
                <path d="M 0,20 Q 250,5 500,20 T 1000,20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 3" />
                
                {/* Moving Imperial carriage based on beat */}
                <g 
                  className="transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ transform: `translateX(${beat === 0 ? 150 : beat === 1 ? 500 : 850}px) translateY(-5px)` }}
                >
                  {/* Imperial Ox-Cart Carriage Design */}
                  <rect x="-18" y="-12" width="36" height="24" fill="#912d18" rx="2" />
                  <rect x="-14" y="-9" width="28" height="18" fill="#eedcc5" rx="1" />
                  {/* Wheel */}
                  <circle cx="-9" cy="12" r="7" fill="#2c2a26" stroke="#dfba73" strokeWidth="1.5" />
                  <circle cx="9" cy="12" r="7" fill="#2c2a26" stroke="#dfba73" strokeWidth="1.5" />
                  {/* Roof Crest */}
                  <polygon points="-22,-12 0,-18 22,-12 -18,-12" fill="#2c2a26" stroke="#dfba73" strokeWidth="1" />
                  {/* Golden imperial crest circle on side */}
                  <circle cx="0" cy="0" r="3" fill="#dfba73" />
                </g>
              </svg>
            </div>

            {/* 3 Chrono Cards */}
            <div className="grid grid-cols-3 gap-[2cqw] z-10 h-full items-center">
              
              {/* Stage 1 */}
              <div 
                className={`border rounded-[0.4cqw] p-[1.5cqw] h-[48cqh] flex flex-col justify-between transition-all duration-700 relative overflow-hidden ${
                  beat >= 0 ? "bg-[#fdfbf4] border-[#912d18] shadow-[0_0_15px_rgba(145,45,24,0.08)]" : "bg-[#f5ebd6]/40 border-[#cfc0a9]/60 opacity-40"
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-[0.5cqh] bg-[#912d18]" />
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-[1.4cqw] font-black text-[#912d18]">壱</span>
                    <span className="font-mono text-[0.8cqw] text-[#8c745c] font-black">[JULY 1868]</span>
                  </div>
                  <h4 className="font-serif font-black text-[1.15cqw] text-[#2c2a26] leading-tight mb-[1cqh]">
                    江戶改元東京
                    <span className="block text-[0.8cqw] font-sans font-semibold text-[#8c745c] mt-0.5">Edo Renamed Tokyo</span>
                  </h4>
                  <p className="text-[0.85cqw] text-[#423a31] leading-relaxed font-serif">
                    天皇颁布诏书改元东京，迈出地缘政治权力重心向东偏移之第一步。
                  </p>
                </div>
                
                {/* Completed Stamp on beat > 0 */}
                {beat > 0 && (
                  <div className="absolute bottom-[1cqw] right-[1cqw] w-[3cqw] h-[3cqw] rounded-full border-2 border-double border-[#912d18] flex items-center justify-center rotate-[-12deg] opacity-80 pointer-events-none">
                    <span className="font-serif font-black text-[#912d18] text-[1cqw]">済</span>
                  </div>
                )}
              </div>

              {/* Stage 2 */}
              <div 
                className={`border rounded-[0.4cqw] p-[1.5cqw] h-[48cqh] flex flex-col justify-between transition-all duration-700 relative overflow-hidden ${
                  beat >= 1 ? "bg-[#fdfbf4] border-[#912d18] shadow-[0_0_15px_rgba(145,45,24,0.08)]" : "bg-[#f5ebd6]/40 border-[#cfc0a9]/60 opacity-40"
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-[0.5cqh] bg-[#912d18]" />
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-[1.4cqw] font-black text-[#912d18]">弐</span>
                    <span className="font-mono text-[0.8cqw] text-[#8c745c] font-black">[OCT 1868]</span>
                  </div>
                  <h4 className="font-serif font-black text-[1.15cqw] text-[#2c2a26] leading-tight mb-[1cqh]">
                    京都起驾東幸
                    <span className="block text-[0.8cqw] font-sans font-semibold text-[#8c745c] mt-0.5">Imperial Transit East</span>
                  </h4>
                  <p className="text-[0.85cqw] text-[#423a31] leading-relaxed font-serif">
                    明治天皇首次起驾驾幸东京，三千家臣仪仗随行，宣示新主权重塑。
                  </p>
                </div>

                {beat > 1 && (
                  <div className="absolute bottom-[1cqw] right-[1cqw] w-[3cqw] h-[3cqw] rounded-full border-2 border-double border-[#912d18] flex items-center justify-center rotate-[-12deg] opacity-80 pointer-events-none">
                    <span className="font-serif font-black text-[#912d18] text-[1cqw]">済</span>
                  </div>
                )}
              </div>

              {/* Stage 3 */}
              <div 
                className={`border rounded-[0.4cqw] p-[1.5cqw] h-[48cqh] flex flex-col justify-between transition-all duration-700 relative overflow-hidden ${
                  beat >= 2 ? "bg-[#fdfbf4] border-[#912d18] shadow-[0_0_15px_rgba(145,45,24,0.08)]" : "bg-[#f5ebd6]/40 border-[#cfc0a9]/60 opacity-40"
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-[0.5cqh] bg-[#912d18]" />
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-[1.4cqw] font-black text-[#912d18]">参</span>
                    <span className="font-mono text-[0.8cqw] text-[#8c745c] font-black">[SPRING 1869]</span>
                  </div>
                  <h4 className="font-serif font-black text-[1.15cqw] text-[#2c2a26] leading-tight mb-[1cqh]">
                    太政官東遷皇舆永駐
                    <span className="block text-[0.8cqw] font-sans font-semibold text-[#8c745c] mt-0.5">Cabinet & Empress Settled</span>
                  </h4>
                  <p className="text-[0.85cqw] text-[#423a31] leading-relaxed font-serif">
                    最高阁署太政官及阁员东迁进驻东京，皇后抵达，宗庙仪轨自此落户。
                  </p>
                </div>
              </div>

            </div>

            {/* Timline summary footer text */}
            <div className="border-t border-[#cfc0a9]/60 pt-2 flex justify-between items-center font-serif text-[0.9cqw] text-[#5c432d]">
              <span className="font-bold">【迁都决策演进日志】: {currentBeatZH.title}</span>
              <span className="font-sans italic">{currentBeatEN.title}</span>
            </div>

          </div>

          {/* Lower description card containing the main scene copy */}
          <div className="bg-[#faf6ed]/95 border border-[#dfd3c5] p-[1.8cqw] rounded-[0.4cqw] shadow-md mt-[2cqh]">
            <p className="font-serif text-[1cqw] text-[#2c2a26] leading-relaxed font-bold">
              {currentBeatZH.body}
            </p>
            <p className="font-sans text-[0.8cqw] text-[#5c432d] italic leading-tight mt-1">
              {currentBeatEN.body}
            </p>
          </div>
        </div>

        {/* ==================== SCENE 4 (MATRIX - DENSE) ==================== */}
        <div className="w-[20%] h-full shrink-0 flex-shrink-0 relative p-[4cqw] flex flex-col justify-between overflow-hidden">
          <div className="flex flex-col gap-[0.5cqh]">
            <span className="font-sans text-[1.1cqw] font-black tracking-widest text-[#912d18] uppercase border-b border-[#dfd3c5] pb-[0.5cqh]">
              {metaZH.scenes[3].title} / {metaEN.scenes[3].title}
            </span>
          </div>

          {/* Grand 4-Panel Folding Screen Byobu 2x2 Matrix */}
          <div className="grid grid-cols-2 grid-rows-2 gap-[2cqw] flex-1 my-[1.5cqh] h-[55cqh]">
            
            {/* Panel 1: Silk Export Foreign Reserve */}
            <div 
              className={`border rounded-[0.4cqw] p-[1.5cqw] shadow-inner transition-all duration-[800ms] flex flex-col justify-between relative overflow-hidden ${
                beat >= 0 
                  ? "bg-[radial-gradient(ellipse_at_top_left,_#fdfbf7_0%,_#fbf5e2_60%,_#f6dec4_100%)] border-[#912d18] shadow-[0_0_15px_rgba(145,45,24,0.12)] ring-1 ring-[#912d18]/45" 
                  : "bg-[#faf5eb] border-[#dfd3c5] opacity-35"
              }`}
            >
              <div className="flex justify-between items-center border-b border-[#cfc0a9] pb-[0.5cqh] mb-[0.5cqh]">
                <span className="font-serif font-black text-[1cqw] text-[#912d18]">壱・生絲出口与外匯結存</span>
                <span className="font-mono text-[0.8cqw] text-[#8c745c] font-black">SILK EXPORTS</span>
              </div>
              <div className="flex-1 flex flex-row items-center gap-[1.5cqw]">
                <div className="flex-1 font-mono text-[0.8cqw] text-[#5c432d] flex flex-col gap-[0.5cqh]">
                  <div className="flex justify-between"><span>全国出口占比 Ratio:</span><span className="font-bold text-[#912d18]">82% Total</span></div>
                  <div className="flex justify-between"><span>外汇存余 Reserves:</span><span className="font-bold text-emerald-800">8.4M Gold</span></div>
                  <div className="flex justify-between"><span>军火贷款 Loans:</span><span>Direct Imp.</span></div>
                </div>
                {/* Visual Spindle SVG */}
                <svg viewBox="0 0 40 40" className="w-[4cqw] h-[4cqw] text-[#912d18]">
                  <path d="M 20,2 L 20,38" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M 5,20 C 5,10, 35,10, 35,20 C 35,30, 5,30, 5,20 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M 10,20 C 10,13, 30,13, 30,20 C 30,27, 10,27, 10,20 Z" fill="none" stroke="#dfba73" strokeWidth="1.2" />
                  <circle cx="20" cy="20" r="2.5" fill="currentColor" />
                </svg>
              </div>
              {/* Formula */}
              <div className="font-serif text-[0.8cqw] italic text-right text-[#8c745c] border-t border-[#cfc0a9]/40 pt-[0.4cqh] mt-1">
                E_silk = Q_export × P_world → Gold Specie
              </div>
            </div>

            {/* Panel 2: Modern Railway Miles */}
            <div 
              className={`border rounded-[0.4cqw] p-[1.5cqw] shadow-inner transition-all duration-[800ms] flex flex-col justify-between relative overflow-hidden ${
                beat >= 0 
                  ? "bg-[radial-gradient(ellipse_at_top_left,_#fdfbf7_0%,_#fbf5e2_60%,_#f6dec4_100%)] border-[#912d18] shadow-[0_0_15px_rgba(145,45,24,0.12)] ring-1 ring-[#912d18]/45" 
                  : "bg-[#faf5eb] border-[#dfd3c5] opacity-35"
              }`}
            >
              <div className="flex justify-between items-center border-b border-[#cfc0a9] pb-[0.5cqh] mb-[0.5cqh]">
                <span className="font-serif font-black text-[1cqw] text-[#912d18]">弐・鐵道敷設与運輸速率</span>
                <span className="font-mono text-[0.8cqw] text-[#8c745c] font-black">RAILWAY VELOCITY</span>
              </div>
              <div className="flex-1 flex flex-row items-center gap-[1.5cqw]">
                <div className="flex-1 font-mono text-[0.8cqw] text-[#5c432d] flex flex-col gap-[0.5cqh]">
                  <div className="flex justify-between"><span>东京-横滨 Lines:</span><span className="font-bold text-[#912d18]">Completed</span></div>
                  <div className="flex justify-between"><span>运输时间 Transit:</span><span className="font-bold text-emerald-800">53 Mins</span></div>
                  <div className="flex justify-between"><span>提速效率 Efficiency:</span><span>10x Speed</span></div>
                </div>
                {/* Active Train SVG */}
                <svg viewBox="0 0 50 40" className="w-[5cqw] h-[4cqw] text-[#2c2a26]">
                  <path d="M 5,28 L 45,28" stroke="currentColor" strokeWidth="1.2" />
                  {/* Train Engine */}
                  <rect x="10" y="14" width="22" height="12" fill="currentColor" />
                  <rect x="32" y="18" width="8" height="8" fill="currentColor" />
                  <line x1="14" y1="14" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="16" cy="30" r="3.5" fill="currentColor" />
                  <circle cx="26" cy="30" r="3.5" fill="currentColor" />
                  <circle cx="36" cy="30" r="3.5" fill="#dfba73" />
                  
                  {/* Smoke puff */}
                  {beat >= 0 && (
                    <circle cx="14" cy="4" r="1.5" fill="#7a654c" opacity="0.6" style={{ animation: "trainPuff 1.2s infinite" }} />
                  )}
                </svg>
              </div>
              <div className="font-serif text-[0.8cqw] italic text-right text-[#8c745c] border-t border-[#cfc0a9]/40 pt-[0.4cqh] mt-1">
                T_transit = Distance / v_steam → -90% Time
              </div>
            </div>

            {/* Panel 3: National Conscription */}
            <div 
              className={`border rounded-[0.4cqw] p-[1.5cqw] shadow-inner transition-all duration-[800ms] flex flex-col justify-between relative overflow-hidden ${
                beat >= 1 
                  ? "bg-[radial-gradient(ellipse_at_top_left,_#fdfbf7_0%,_#fbf5e2_60%,_#f6dec4_100%)] border-[#912d18] shadow-[0_0_15px_rgba(145,45,24,0.12)] ring-1 ring-[#912d18]/45" 
                  : "bg-[#faf5eb] border-[#dfd3c5] opacity-35"
              }`}
            >
              <div className="flex justify-between items-center border-b border-[#cfc0a9] pb-[0.5cqh] mb-[0.5cqh]">
                <span className="font-serif font-black text-[1cqw] text-[#912d18]">参・新軍常備兵役与营房</span>
                <span className="font-mono text-[0.8cqw] text-[#8c745c] font-black">MILITARY REORGANIZATION</span>
              </div>
              <div className="flex-1 flex flex-row items-center gap-[1.5cqw]">
                <div className="flex-1 font-mono text-[0.8cqw] text-[#5c432d] flex flex-col gap-[0.5cqh]">
                  <div className="flex justify-between"><span>幕府旧衙 Converted:</span><span className="font-bold text-[#912d18]">100% Occupied</span></div>
                  <div className="flex justify-between"><span>东京镇台 Garrison:</span><span className="font-bold text-emerald-800">4 Regiments</span></div>
                  <div className="flex justify-between"><span>海军兵学校 Academy:</span><span>Operational</span></div>
                </div>
                {/* Crossed Rifles SVG */}
                <svg viewBox="0 0 40 40" className={`w-[4cqw] h-[4cqw] transition-transform duration-1000 ${beat >= 1 ? "text-[#912d18]" : "text-[#7a654c]"}`}>
                  <line x1="5" y1="35" x2="35" y2="5" stroke="currentColor" strokeWidth="2.2" />
                  <line x1="35" y1="35" x2="5" y2="5" stroke="currentColor" strokeWidth="2.2" />
                  <path d="M 20,10 L 20,30" stroke="#dfba73" strokeWidth="1" />
                  <circle cx="20" cy="20" r="3" fill="#dfba73" />
                </svg>
              </div>
              <div className="font-serif text-[0.8cqw] italic text-right text-[#8c745c] border-t border-[#cfc0a9]/40 pt-[0.4cqh] mt-1">
                M_garrison = Regiments × 1,500 Troops → Coastal Shield
              </div>
            </div>

            {/* Panel 4: Sovereign Shift Bonds */}
            <div 
              className={`border rounded-[0.4cqw] p-[1.5cqw] shadow-inner transition-all duration-[800ms] flex flex-col justify-between relative overflow-hidden ${
                beat >= 2 
                  ? "bg-[radial-gradient(ellipse_at_top_left,_#fdfbf7_0%,_#fbf5e2_60%,_#f6dec4_100%)] border-[#912d18] shadow-[0_0_15px_rgba(145,45,24,0.12)] ring-1 ring-[#912d18]/45" 
                  : "bg-[#faf5eb] border-[#dfd3c5] opacity-35"
              }`}
            >
              <div className="flex justify-between items-center border-b border-[#cfc0a9] pb-[0.5cqh] mb-[0.5cqh]">
                <span className="font-serif font-black text-[1cqw] text-[#912d18]">肆・太政官应急迁都公债</span>
                <span className="font-mono text-[0.8cqw] text-[#8c745c] font-black">RELOCATION BONDS</span>
              </div>
              <div className="flex-1 flex flex-row items-center gap-[1.5cqw]">
                <div className="flex-1 font-mono text-[0.8cqw] text-[#5c432d] flex flex-col gap-[0.5cqh]">
                  <div className="flex justify-between"><span>公债首发 Bond Issue:</span><span className="font-bold text-[#912d18]">¥5,000,000</span></div>
                  <div className="flex justify-between"><span>皇城修缮 Castle Repair:</span><span className="font-bold text-emerald-800">¥2,450,000</span></div>
                  <div className="flex justify-between"><span>国库金存 Treasury:</span><span>Secure</span></div>
                </div>
                {/* Currency Bill Banknote SVG Facsimile */}
                <svg viewBox="0 0 50 35" className="w-[5cqw] h-[4cqw] text-[#7a654c]">
                  <rect x="2" y="2" width="46" height="31" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  <rect x="4" y="4" width="42" height="27" fill="none" stroke="#912d18" strokeWidth="0.4" strokeDasharray="1 1" />
                  <circle cx="25" cy="17.5" r="5" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <text x="25" y="19.5" fontSize="5" textAnchor="middle" fill="#912d18" className="font-serif font-bold">五百</text>
                  <text x="8" y="10" fontSize="3" fill="currentColor">五百万</text>
                </svg>
              </div>
              <div className="font-serif text-[0.8cqw] italic text-right text-[#8c745c] border-t border-[#cfc0a9]/40 pt-[0.4cqh] mt-1">
                B_capital = ¥5,000,000 × (1 + r)^t
              </div>
            </div>

          </div>

          {/* Bottom combined detailed explanation block */}
          <div className="bg-[#faf6ed]/95 border border-[#dfd3c5] p-[1.5cqw] rounded-[0.4cqw] shadow-md">
            <p className="font-serif text-[1cqw] text-[#2c2a26] leading-relaxed font-bold">
              {currentBeatZH.body}
            </p>
            <p className="font-sans text-[0.8cqw] text-[#5c432d] italic leading-tight mt-1">
              {currentBeatEN.body}
            </p>
          </div>
        </div>

        {/* ==================== SCENE 5 (LEDGER - EXTREME) ==================== */}
        <div className="w-[20%] h-full shrink-0 flex-shrink-0 relative p-[4cqw] flex flex-col justify-between overflow-hidden">
          {/* Header */}
          <div className="text-center border-b-2 border-[#912d18] pb-[0.5cqh] mb-[1.5cqh]">
            <span className="font-serif font-black text-[1.4cqw] uppercase tracking-widest text-[#912d18]">
              太政官遷都地緣攻守算定書 (Meiji Fiscal Relocation Ledger, 1869)
            </span>
          </div>

          {/* Double-Page Privy Council Account Book (Daifukucho) */}
          <div className="flex-1 w-full bg-[#fbf9f3] border border-[#cfc0a9] shadow-[inset_0_0_20px_rgba(92,67,45,0.08)] rounded-[0.5cqw] relative p-[1.8cqw] flex flex-row gap-[2cqw] overflow-hidden">
            
            {/* Center Book Crease / Page binder */}
            <div className="absolute left-[50%] top-0 bottom-0 w-[0.2cqw] bg-[linear-gradient(to_right,_rgba(0,0,0,0.15)_0%,_rgba(0,0,0,0.03)_50%,_rgba(0,0,0,0.15)_100%)] border-l border-r border-[#dfd3c5]/30 z-20 pointer-events-none" />

            {/* Left Page: Expenditures Ledger */}
            <div className="flex-1 flex flex-col justify-between h-full border-r border-[#cfc0a9]/40 pr-[1cqw] z-10">
              <div>
                <span className="font-serif text-[1.05cqw] text-[#912d18] font-black border-b border-[#dfd3c5] pb-1 block mb-[1cqh]">
                  一、歳出决算明細表 / Capital Expenditures
                </span>
                
                <table className="w-full text-left text-[0.8cqw] border-collapse font-serif">
                  <thead>
                    <tr className="border-b border-[#912d18]/40 font-black text-[#912d18]">
                      <th className="py-1">科目 Sub-item</th>
                      <th className="py-1">算定公式 / Formula</th>
                      <th className="py-1 text-right">金額 (Yen)</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#3d3126] font-mono text-[0.78cqw]">
                    {/* Beat 0 items */}
                    <tr className="border-b border-[#cfc0a9]/30">
                      <td className="py-1 font-serif font-bold">1. 太政官阁员东迁</td>
                      <td className="py-1">N_officials × Transit Fare</td>
                      <td className="py-1 text-right font-bold">¥1,250,000</td>
                    </tr>
                    <tr className="border-b border-[#cfc0a9]/30">
                      <td className="py-1 font-serif font-bold">2. 东京皇城建筑修缮</td>
                      <td className="py-1">Carpentry + Wood Materials</td>
                      <td className="py-1 text-right font-bold">¥2,450,000</td>
                    </tr>
                    {/* Beat 1 items */}
                    <tr className={`border-b border-[#cfc0a9]/30 transition-opacity duration-700 ${beat >= 1 ? "opacity-100" : "opacity-10 pointer-events-none"}`}>
                      <td className="py-1 font-serif font-bold text-[#912d18]">3. 随行禁卫军开防</td>
                      <td className="py-1">3,000 Troops × Equipment</td>
                      <td className="py-1 text-right font-bold text-[#912d18]">¥680,000</td>
                    </tr>
                    <tr className={`border-b border-[#cfc0a9]/30 transition-opacity duration-700 ${beat >= 1 ? "opacity-100" : "opacity-10 pointer-events-none"}`}>
                      <td className="py-1 font-serif font-bold">4. 德川新军营房收编</td>
                      <td className="py-1">Camp Conversion Cost</td>
                      <td className="py-1 text-right font-bold">¥350,000</td>
                    </tr>
                    {/* Beat 2 item */}
                    <tr className={`transition-opacity duration-700 ${beat >= 2 ? "opacity-100" : "opacity-10 pointer-events-none"}`}>
                      <td className="py-1 font-serif font-bold">5. 关东奥羽安抚军饷</td>
                      <td className="py-1">Infantry Pacification Pay</td>
                      <td className="py-1 text-right font-bold">¥500,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="font-serif text-[0.8cqw] italic text-[#7a654c] border-t border-[#cfc0a9]/30 pt-1">
                Note: Relocation funds backed by municipal land revenues and bonds.
              </div>
            </div>

            {/* Right Page: Revenue Ledger & Ratios */}
            <div className="flex-1 flex flex-col justify-between h-full pl-[1cqw] z-10 relative">
              <div>
                <span className="font-serif text-[1.05cqw] text-[#912d18] font-black border-b border-[#dfd3c5] pb-1 block mb-[1cqh]">
                  二、歳入及地缘常数対决 / Revenues & Constant
                </span>
                
                <table className="w-full text-left text-[0.8cqw] border-collapse font-serif">
                  <thead>
                    <tr className="border-b border-[#912d18]/40 font-black text-[#912d18]">
                      <th className="py-1">项目 Category</th>
                      <th className="py-1">决策常数 / Ratio Ratio</th>
                      <th className="py-1 text-right">歳入 (Yen)</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#3d3126] font-mono text-[0.78cqw]">
                    {/* Beat 0 items */}
                    <tr className="border-b border-[#cfc0a9]/30">
                      <td className="py-1 font-serif font-bold text-emerald-800">1. 横滨关税大增</td>
                      <td className="py-1 text-emerald-800 font-bold">Tokyo Wins 12.5x (海运)</td>
                      <td className="py-1 text-right text-emerald-800 font-bold">¥4,200,000</td>
                    </tr>
                    <tr className="border-b border-[#cfc0a9]/30">
                      <td className="py-1 font-serif font-bold text-emerald-800">2. 生丝茶叶出口税</td>
                      <td className="py-1 text-emerald-800 font-bold">Tokyo Wins 20.5x (外汇)</td>
                      <td className="py-1 text-right text-emerald-800 font-bold">¥2,850,000</td>
                    </tr>
                    {/* Beat 1 items */}
                    <tr className={`border-b border-[#cfc0a9]/30 transition-opacity duration-700 ${beat >= 1 ? "opacity-100" : "opacity-10 pointer-events-none"}`}>
                      <td className="py-1 font-serif font-bold">3. 豪商及大名献金</td>
                      <td className="py-1 font-bold">Court Stagnation -92%</td>
                      <td className="py-1 text-right font-bold">¥1,125,400</td>
                    </tr>
                    {/* Beat 2 item */}
                    <tr className={`transition-opacity duration-700 ${beat >= 2 ? "opacity-100" : "opacity-10 pointer-events-none"}`}>
                      <td className="py-1 font-serif font-bold">4. 应急迁都建设公债</td>
                      <td className="py-1 font-bold">Capital Shift Bond Liquidity</td>
                      <td className="py-1 text-right font-bold">¥5,000,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Total Calculation Row visible on Beat 2 */}
              <div className={`border-t-2 border-double border-[#912d18] pt-[0.8cqh] my-[0.5cqh] transition-all duration-1000 ${beat >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"}`}>
                <div className="flex justify-between font-serif font-black text-[1.15cqw] text-[#912d18]">
                  <span>算定差值 / Net Position:</span>
                  <span className="font-mono">+¥1,895,400 Surplus (盈餘)</span>
                </div>
                <div className="font-serif text-[0.8cqw] text-emerald-800 italic font-black mt-0.5 text-center">
                  【太政官決議：東幸奠都，萬世永駐 / CAPITAL TRANSIT APPROVED】
                </div>
              </div>

              {/* Massive Vermilion Imperial Seal / 朱印 (Stamps on Beat 2 for Scene 5 with springy transition) */}
              <div 
                className="absolute bottom-[-1cqw] right-[1.5cqw] w-[11cqw] h-[11cqw] pointer-events-none select-none"
                style={{
                  transform: beat >= 2 ? "scale(1) rotate(-8deg)" : "scale(3.5) rotate(-35deg)",
                  opacity: beat >= 2 ? "0.9" : "0",
                  transition: "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.25), opacity 0.5s ease-out"
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#912d18] drop-shadow-[2px_4px_8px_rgba(145,45,24,0.35)]">
                  {/* Square Japanese red seal stamp */}
                  <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="4.5" />
                  <rect x="14" y="14" width="72" height="72" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
                  <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="2.5" />
                  <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2.5" />
                  <text x="30" y="38" fontSize="21" textAnchor="middle" fontWeight="black" fontFamily="serif" fill="currentColor">天</text>
                  <text x="70" y="38" fontSize="21" textAnchor="middle" fontWeight="black" fontFamily="serif" fill="currentColor">皇</text>
                  <text x="30" y="76" fontSize="21" textAnchor="middle" fontWeight="black" fontFamily="serif" fill="currentColor">御</text>
                  <text x="70" y="76" fontSize="21" textAnchor="middle" fontWeight="black" fontFamily="serif" fill="currentColor">玺</text>
                </svg>
              </div>
            </div>

          </div>

          {/* Combined Detailed text description block */}
          <div className="bg-[#faf6ed]/95 border border-[#dfd3c5] p-[1.5cqw] rounded-[0.4cqw] shadow-md mt-[1.5cqh]">
            <p className="font-serif text-[1cqw] text-[#2c2a26] leading-relaxed font-bold">
              {currentBeatZH.body}
            </p>
            <p className="font-sans text-[0.8cqw] text-[#5c432d] italic leading-tight mt-1">
              {currentBeatEN.body}
            </p>
          </div>
        </div>

      </div>

      {/* ==================== BESPOKE NAVIGATION (IMPERIAL FAN ACCORDION) ==================== */}
      <div className="absolute top-[3.2cqw] right-[3.2cqw] z-50 w-[18cqw] h-[13.5cqw] bg-[#faf6ed]/85 border border-[#dfd3c5] shadow-lg rounded-[0.5cqw] p-[1cqw] backdrop-blur-md flex flex-col justify-between items-center transition-all duration-300">
        
        {/* Accordion Folding Fan SVG container */}
        <div className="relative w-full h-[8.5cqw]">
          {/* Subtle gold glow behind fan */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(223,186,115,0.15)_0%,_transparent_75%)] pointer-events-none" />
          
          <svg viewBox="0 0 150 100" className="w-full h-full">
            <defs>
              <radialGradient id="fanActiveGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#d23c22" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#d23c22" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="activeVermilionGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#b23232" />
                <stop offset="100%" stopColor="#7a1f11" />
              </linearGradient>
              <linearGradient id="inactiveWashiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fdfcf8" />
                <stop offset="100%" stopColor="#eedece" />
              </linearGradient>
              <linearGradient id="goldRibGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#dfba73" />
                <stop offset="50%" stopColor="#be9648" />
                <stop offset="100%" stopColor="#917332" />
              </linearGradient>
            </defs>

            {/* Fan Sectors Accordion */}
            {fanSectors.map((sector) => {
              const path = getSectorPath(cx, cy, rInner, rOuter, sector.start, sector.end);
              const rad = Math.PI / 180;
              const midAngle = sector.centerAngle;
              
              // Calligraphy number position (r=28)
              const rText = 27;
              const xt = cx + rText * Math.cos(midAngle * rad);
              const yt = cy + rText * Math.sin(midAngle * rad);

              // Roman numeral label position (r=37)
              const rLabel = 36;
              const xl = cx + rLabel * Math.cos(midAngle * rad);
              const yl = cy + rLabel * Math.sin(midAngle * rad);

              return (
                <g 
                  key={sector.id} 
                  className="cursor-pointer hover:brightness-110 transition-all duration-300"
                  onClick={() => onNavigate?.(sector.id, 0)}
                >
                  {/* Glowing background under active sector */}
                  {sector.active && (
                    <path d={path} fill="url(#fanActiveGlow)" className="blur-[4px] opacity-75" />
                  )}

                  {/* Sector main paper fold */}
                  <path 
                    d={path} 
                    fill={sector.active ? "url(#activeVermilionGrad)" : "url(#inactiveWashiGrad)"} 
                    stroke={sector.active ? "#dfba73" : "#cfc3b0"} 
                    strokeWidth={sector.active ? "0.8" : "0.4"} 
                    className="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />

                  {/* Left structural stick rib */}
                  <line 
                    x1={cx + rInner * Math.cos(sector.start * rad)} 
                    y1={cy + rInner * Math.sin(sector.start * rad)} 
                    x2={cx + rOuter * Math.cos(sector.start * rad)} 
                    y2={cy + rOuter * Math.sin(sector.start * rad)} 
                    stroke="url(#goldRibGrad)" 
                    strokeWidth={sector.active ? "0.9" : "0.5"} 
                    className="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />

                  {/* Traditional Kanji Character */}
                  <text 
                    x={xt} 
                    y={yt} 
                    transform={`rotate(${midAngle + 90} ${xt} ${yt})`} 
                    textAnchor="middle" 
                    dominantBaseline="middle" 
                    className={`font-serif font-black select-none pointer-events-none transition-all duration-700 ${
                      sector.active ? "fill-amber-100 text-[10px]" : "fill-[#5c432d] text-[6.5px] opacity-80"
                    }`}
                  >
                    {["壱", "弐", "参", "肆", "伍"][sector.id - 1]}
                  </text>

                  {/* Tiny scene Roman label on active sector */}
                  {sector.active && (
                    <text 
                      x={xl} 
                      y={yl} 
                      transform={`rotate(${midAngle + 90} ${xl} ${yl})`} 
                      textAnchor="middle" 
                      dominantBaseline="middle" 
                      className="font-sans font-extrabold fill-[#dfba73] text-[3.8px] tracking-wide select-none pointer-events-none animate-pulse"
                    >
                      {["COVER", "GEOGR.", "STAGES", "ASSETS", "LEDGER"][sector.id - 1]}
                    </text>
                  )}
                </g>
              );
            })}

            {/* Last right stick rib */}
            <line 
              x1={cx + rInner * Math.cos(fanSectors[4].end * Math.PI / 180)} 
              y1={cy + rInner * Math.sin(fanSectors[4].end * Math.PI / 180)} 
              x2={cx + rOuter * Math.cos(fanSectors[4].end * Math.PI / 180)} 
              y2={cy + rOuter * Math.sin(fanSectors[4].end * Math.PI / 180)} 
              stroke="url(#goldRibGrad)" 
              strokeWidth="0.8" 
            />

            {/* Fan Pivot pin with Red Ruby Tassel */}
            <g>
              <circle cx={cx} cy={cy} r="3" fill="url(#goldRibGrad)" />
              <circle cx={cx} cy={cy} r="1.2" fill="#912d18" />
              {/* Hanging Red Tassel Cord */}
              <path d={`M ${cx} ${cy + 3} C ${cx - 1.5} ${cy + 8}, ${cx + 1.5} ${cy + 12}, ${cx} ${cy + 18}`} stroke="#912d18" strokeWidth="0.6" fill="none" />
              {/* Tassel Fringe Bunch */}
              <path d={`M ${cx - 1.5} ${cy + 18} L ${cx + 1.5} ${cy + 18} L ${cx + 3} ${cy + 27} L ${cx - 3} ${cy + 27} Z`} fill="#912d18" />
            </g>
          </svg>
        </div>

        {/* Current Active Scene Label */}
        <div className="w-full text-center border-t border-[#dfd3c5]/70 pt-[0.6cqw] mt-[0.2cqw]">
          <div className="font-serif font-black text-[0.9cqw] text-[#912d18] tracking-wider leading-tight">
            【 {["壱・改元东京", "弐・地缘攻守", "参・三大战役", "肆・机能评估", "伍・算定总账"][scene - 1]} 】
          </div>
          <div className="font-sans font-extrabold text-[0.65cqw] text-[#8c745c] uppercase tracking-widest leading-none mt-0.5">
            {["Imperial Cover", "Kyoto vs Tokyo", "Three Milestones", "Strategic Assets", "Privy Council Ledger"][scene - 1]}
          </div>
        </div>

      </div>
    </div>
  );
}
