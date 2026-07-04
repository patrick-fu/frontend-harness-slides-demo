import React from "react";

export const getMetadata = (lang) => ({
  id: "19",
  tier: "C",
  name: lang === "zh" ? "地缘大决断：明治维新迁都记" : "Capital Shift: Kyoto to Tokyo",
  theme: lang === "zh" ? "明治维新地缘政治决断" : "Meiji Restoration Geopolitical Decisiveness",
  densityLabel: lang === "zh" ? "迁都议呈" : "Capital Shift Memo",
  colors: { bg: "bg-[#fdf9f3]", ink: "text-[#2d2218]", panel: "border-[#dfd3c5]" },
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
          body: lang === "zh" ? "1869年冬，一条美子皇后东迁至东京皇城，朝廷宗庙与皇家仪轨自此在东京落户，京都千年的首都地位自此交接。" : "In Winter 1869, Empress Ichijo relocated to Tokyo Castle. Court rites and administrative machinery permanently settled, completing a millennium's capital transition." 
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

export default function Style19({ scene, beat, language, isThumbnail }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];

  const getBeatClass = (elementBeat) => {
    return beat >= elementBeat
      ? "opacity-100 translate-y-0 filter-none transition-all duration-700 ease-out"
      : "opacity-0 translate-y-[1cqh] pointer-events-none transition-all duration-700 ease-out";
  };

  const getScaleStyle = (elementBeat, targetPercent) => {
    const scale = beat >= elementBeat ? 1 : 0;
    return {
      width: targetPercent,
      transform: `scaleX(${scale})`,
      transformOrigin: "left",
      transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
    };
  };

  const renderVisual = () => {
    return (
      <div className="relative w-full h-full flex items-center justify-center border border-[#dacfb7] bg-[#FAF6EE] rounded-[0.5cqw] overflow-hidden p-[1cqw] shadow-inner">
        {/* Distressed washi fibers using inline grid with rotated lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] grid grid-cols-6 grid-rows-6 h-full w-full" style={{
          backgroundImage: "linear-gradient(45deg, #5c432d 1px, transparent 1px), linear-gradient(-45deg, #5c432d 1px, transparent 1px)",
          backgroundSize: "8cqw 8cqw"
        }} />

        {/* Hand-ruled ink box border */}
        <div className="absolute inset-[0.8cqw] border border-[#d3c4b1] pointer-events-none" />
        <div className="absolute inset-[1cqw] border border-double border-[#d3c4b1]/40 pointer-events-none" />

        {scene === 1 && (
          <div className="relative flex flex-col items-center justify-center w-full h-full text-center p-[1.5cqw]">
            {/* Japanese Chrysanthemum Crest & Seal SVG */}
            <svg viewBox="0 0 120 120" className="w-[11cqw] h-[12cqw] text-[#912d18] opacity-85 mb-2">
              <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 1" />
              {/* Chrysanthemum petals (16 spokes) */}
              <circle cx="60" cy="60" r="14" fill="none" stroke="currentColor" strokeWidth="0.5" />
              {[...Array(16)].map((_, i) => {
                const angle = (i * 360) / 16;
                return (
                  <g key={i} transform={`rotate(${angle} 60 60)`}>
                    <path d="M 60,46 Q 63,30 60,25 Q 57,30 60,46 Z" fill="none" stroke="currentColor" strokeWidth="0.4" />
                    <line x1="60" y1="46" x2="60" y2="25" stroke="currentColor" strokeWidth="0.15" />
                  </g>
                );
              })}
              <circle cx="60" cy="60" r="4" fill="currentColor" />
              <text x="60" y="86" fontSize="4.8" textAnchor="middle" className="font-serif italic font-bold">MEIJI RESTORATION</text>
              <text x="60" y="93" fontSize="3.8" textAnchor="middle" className="font-serif italic tracking-widest opacity-60">TOKYO • 1868</text>
            </svg>
            <div className={`mt-[1cqh] font-serif italic text-[#87654a] text-[1.1cqw] font-bold ${getBeatClass(1)}`}>
              The Sovereign Imperial Chrysanthemum Emblem, Signifying Restoration of Royal Direct Rule.
            </div>
          </div>
        )}

        {scene === 2 && (
          <div className="grid grid-cols-2 gap-[1cqw] w-full h-full p-[1cqw]">
            {/* Left Panel: Kyoto Basin */}
            <div className="flex flex-col justify-between border-r border-[#eddcc5] pr-[0.8cqw]">
              <span className="font-serif text-[1.05cqw] text-[#786146] font-bold uppercase tracking-wider text-center border-b border-[#eddcc5] pb-1 mb-2">
                Kyoto (Landlocked Basin)
              </span>
              <div className="flex-1 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-[10cqw] h-[10cqw] text-[#8c745c] opacity-75">
                  {/* Surrounding mountains */}
                  <path d="M 5,80 L 25,40 L 45,75 M 35,75 L 55,45 L 75,80 M 65,80 L 80,50 L 95,85" fill="none" stroke="currentColor" strokeWidth="0.4" />
                  <rect x="38" y="70" width="16" height="10" fill="none" stroke="currentColor" strokeWidth="0.3" />
                  <text x="46" y="77" fontSize="5" textAnchor="middle" className="font-serif">宮</text>
                  <text x="50" y="32" fontSize="4.5" textAnchor="middle" className="font-serif italic text-red-800">Conservative Court</text>
                  <text x="50" y="93" fontSize="3.8" textAnchor="middle" className="font-serif italic opacity-60">Basin Isolation</text>
                </svg>
              </div>
              <span className="font-serif text-[0.8cqw] text-[#7a654c] italic text-center">Inland mountain locks out modern commercial vectors.</span>
            </div>
            {/* Right Panel: Tokyo Bay */}
            <div className="flex flex-col justify-between pl-[0.8cqw]">
              <span className="font-serif text-[1.05cqw] text-[#912d18] font-bold uppercase tracking-wider text-center border-b border-[#eddcc5] pb-1 mb-2">
                Tokyo (Maritime Gateway)
              </span>
              <div className="flex-1 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-[10cqw] h-[10cqw] text-[#912d18]">
                  {/* Harbor and waves */}
                  <path d="M 10,80 Q 30,75 50,80 Q 70,85 90,80" fill="none" stroke="currentColor" strokeWidth="0.4" />
                  <path d="M 10,85 Q 30,80 50,85 Q 70,90 90,85" fill="none" stroke="currentColor" strokeWidth="0.25" strokeDasharray="1 1" />
                  {/* Steamship */}
                  <path d="M 25,65 L 70,65 L 65,75 L 30,75 Z" fill="none" stroke="currentColor" strokeWidth="0.45" />
                  <rect x="42" y="55" width="6" height="10" fill="none" stroke="currentColor" strokeWidth="0.3" />
                  <line x1="45" y1="55" x2="45" y2="50" stroke="currentColor" strokeWidth="0.4" />
                  <text x="50" y="32" fontSize="4.5" textAnchor="middle" className="font-serif italic font-bold">Maritime Commerce</text>
                  <text x="50" y="93" fontSize="3.8" textAnchor="middle" className="font-serif italic opacity-60">Yokohama Gateway</text>
                </svg>
              </div>
              <span className="font-serif text-[0.8cqw] text-[#912d18] italic font-bold text-center">Direct port integration with global technology flows.</span>
            </div>
          </div>
        )}

        {scene === 3 && (
          <div className="relative w-full h-full flex flex-col justify-between p-[1cqw]">
            <div className="flex justify-between items-center border-b border-[#dfd3c5] pb-[0.5cqh]">
              <span className="font-serif text-[1.1cqw] text-[#912d18] uppercase tracking-wider font-bold">Stages of Imperial Eastward Pivot</span>
              <span className="font-mono text-[0.8cqw] text-[#806856]">DECREE • III NOB.</span>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-[1cqh] my-[1cqh]">
              <div className={`flex items-start gap-2.5 p-[0.6cqw] bg-[#faf6ed]/70 border border-[#dfd3c5] rounded-sm ${getBeatClass(0)}`}>
                <span className="font-mono font-bold text-[#912d18] text-[0.9cqw] mt-0.5">[1868]</span>
                <div>
                  <h4 className="font-bold text-[#3d2a1c] text-[0.95cqw] leading-none mb-1">Edo Renamed Tokyo</h4>
                  <p className="text-[0.8cqw] text-[#735e4d] leading-tight">Proclaiming Edo as 'Tokyo' (Eastern Capital), dismantling traditional geocentric Shogunate remnants.</p>
                </div>
              </div>
              <div className={`flex items-start gap-2.5 p-[0.6cqw] bg-[#faf6ed]/70 border border-[#dfd3c5] rounded-sm ${getBeatClass(1)}`}>
                <span className="font-mono font-bold text-[#912d18] text-[0.9cqw] mt-0.5">[1869]</span>
                <div>
                  <h4 className="font-bold text-[#3d2a1c] text-[0.95cqw] leading-none mb-1">Dajokan Cabinet Relocation</h4>
                  <p className="text-[0.8cqw] text-[#735e4d] leading-tight">The supreme council moves into Tokyo Castle, transferring active bureaucratic machinery.</p>
                </div>
              </div>
              <div className={`flex items-start gap-2.5 p-[0.6cqw] bg-[#faf6ed]/70 border border-[#912d18]/40 rounded-sm ${getBeatClass(2)}`}>
                <span className="font-mono font-bold text-[#912d18] text-[0.9cqw] mt-0.5">[1869]</span>
                <div>
                  <h4 className="font-bold text-[#912d18] text-[0.95cqw] leading-none mb-1">Empress Eastward Arrival</h4>
                  <p className="text-[0.8cqw] text-[#912d18] leading-tight">Empress Shoken arrives at the new Tokyo Palace, permanently anchoring the imperial court.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {scene === 4 && (
          <div className="grid grid-cols-2 grid-rows-2 gap-[1cqw] w-full h-full p-[0.5cqw]">
            <div className="border border-[#dfd3c5] bg-[#faf6ee] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#912d18] border-b border-[#dfd3c5] pb-[0.2cqh]">Sector I: Shipping Volume</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Yokohama Imports:</span><span className="text-[#912d18] font-bold">+35% Ann.</span></div>
                <div className="flex justify-between"><span>Kansai Shipping:</span><span className="text-[#8c745c]">Bypassed</span></div>
                <div className="flex justify-between"><span>Logistics Security:</span><span className="text-emerald-700 font-bold">EXCELLENT</span></div>
              </div>
            </div>
            <div className="border border-[#dfd3c5] bg-[#faf6ee] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#912d18] border-b border-[#dfd3c5] pb-[0.2cqh]">Sector II: Silk Trade Currency</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>National Share:</span><span className="text-[#912d18] font-bold">82% Total</span></div>
                <div className="flex justify-between"><span>Foreign Reserve:</span><span className="text-emerald-700 font-bold">8.4M Gold</span></div>
                <div className="flex justify-between"><span>Weapons Sourcing:</span><span>Direct Imports</span></div>
              </div>
            </div>
            <div className="border border-[#dfd3c5] bg-[#faf6ee] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#912d18] border-b border-[#dfd3c5] pb-[0.2cqh]">Sector III: Shogunate Assets</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Edo Castle barracks:</span><span>Converted</span></div>
                <div className="flex justify-between"><span>Feudal Estates:</span><span className="text-[#912d18] font-bold">Nationalized</span></div>
                <div className="flex justify-between"><span>Foundry Arsenal:</span><span className="text-emerald-700 font-bold">Operational</span></div>
              </div>
            </div>
            <div className="border border-[#dfd3c5] bg-[#faf6ee] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#912d18] border-b border-[#dfd3c5] pb-[0.2cqh]">Sector IV: Kyoto Interference</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Court Aristocrats:</span><span>Bypassed</span></div>
                <div className="flex justify-between"><span>Conservative Clergy:</span><span>Contained</span></div>
                <div className="flex justify-between"><span>Political Control:</span><span className="text-emerald-700 font-bold">100% SECURE</span></div>
              </div>
            </div>
          </div>
        )}

        {scene === 5 && (
          <div className="relative w-full h-full flex flex-col justify-between p-[0.8cqw] font-serif text-[#2d2218]">
            <div className="text-center font-bold text-[1cqw] uppercase tracking-widest border-b-2 border-[#912d18] pb-[0.2cqh] mb-[0.5cqh] text-[#912d18]">
              太政官遷都地緣攻守算定書 (1869)
            </div>
            <div className="flex-1 flex flex-col justify-center my-[0.2cqw]">
              <table className="w-full text-left text-[0.78cqw] border-collapse font-serif">
                <thead>
                  <tr className="border-b border-[#912d18]/40 font-bold text-[#912d18]">
                    <th className="py-1">地缘评估指标 Geostrategic Index</th>
                    <th className="py-1">西京京都 Court</th>
                    <th className="py-1 text-right">东京江户 Tokyo</th>
                    <th className="py-1 text-right">差值倍率 Delta Ratio</th>
                    <th className="py-1 text-right">决策判定 decision</th>
                  </tr>
                </thead>
                <tbody className="text-[#523e2b] font-mono text-[0.75cqw]">
                  <tr className={`border-b border-[#dfd3c5]/40 ${getBeatClass(0)}`}>
                    <td className="py-1 font-serif font-bold">1. 海运集散 Logistics Capacity</td>
                    <td className="py-1">极其局限 (盆地)</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">直通横滨港 (深水)</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">12.5x Increase</td>
                    <td className="py-1 text-right font-bold text-emerald-800">压倒优势 (Wins)</td>
                  </tr>
                  <tr className={`border-b border-[#dfd3c5]/40 ${getBeatClass(0)}`}>
                    <td className="py-1 font-serif font-bold">2. 外贸出口生丝 Silk Trade Tariffs</td>
                    <td className="py-1">少于 4% Share</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">超过 82% Share</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">20.5x Growth</td>
                    <td className="py-1 text-right font-bold text-emerald-800">核心外汇 (Wins)</td>
                  </tr>
                  <tr className={`border-b border-[#dfd3c5]/40 ${getBeatClass(1)}`}>
                    <td className="py-1 font-serif font-bold text-[#912d18]">3. 旧势力政治干扰 Court Interference</td>
                    <td className="py-1 text-red-700 font-bold">严重羁绊 (公家)</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">微乎其微 (新秩序)</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">-92% Impedance</td>
                    <td className="py-1 text-right font-bold text-emerald-800">改革解放 (Wins)</td>
                  </tr>
                  <tr className={`border-b border-[#dfd3c5]/40 ${getBeatClass(1)}`}>
                    <td className="py-1 font-serif font-bold">4. 德川新军兵营收编 Military Barracks</td>
                    <td className="py-1">基本无 (需新建)</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">江户城现成 (镇台)</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">Immediate Use</td>
                    <td className="py-1 text-right font-bold text-emerald-800">兵家枢纽 (Wins)</td>
                  </tr>
                  <tr className={`${getBeatClass(2)}`}>
                    <td className="py-1 font-serif font-bold">5. 关东奥羽防务 Eastern pacification</td>
                    <td className="py-1">鞭长莫及 (西南)</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">稳固东国 (亲征)</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">Direct Control</td>
                    <td className="py-1 text-right font-bold text-emerald-800">江山永固 (Wins)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="border-t border-[#dfd3c5] pt-1 text-[0.7cqw] text-[#8c745c] italic text-center font-serif">
              明治二年纪：太政官议事总总会官案，皇后亲征东下，江户城皇舆常驻，奉敕加盖御玺。
            </div>
          </div>
        )}

        {/* Japanese Imperial Vermilion Red Stamp / 朱印 (Stamps on Beat 1 for Scene 5, or always subtly visible) */}
        {scene === 5 && (
          <div className={`absolute bottom-[1.8cqw] right-[1.8cqw] w-[5cqw] h-[5cqw] transition-all duration-1000 ${beat >= 1 ? "opacity-85 scale-100 rotate-0" : "opacity-15 scale-90 rotate-0"} pointer-events-none select-none`}>
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#912d18] drop-shadow-[1px_2px_4px_rgba(145,45,24,0.2)]">
              {/* Traditional square Japanese red seal stamp */}
              <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="4" />
              <rect x="14" y="14" width="72" height="72" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
              {/* Calligraphy seal lines */}
              <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="2" />
              <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2" />
              <text x="30" y="38" fontSize="20" textAnchor="middle" fontWeight="black" fontFamily="serif" fill="currentColor">天</text>
              <text x="70" y="38" fontSize="20" textAnchor="middle" fontWeight="black" fontFamily="serif" fill="currentColor">皇</text>
              <text x="30" y="76" fontSize="20" textAnchor="middle" fontWeight="black" fontFamily="serif" fill="currentColor">御</text>
              <text x="70" y="76" fontSize="20" textAnchor="middle" fontWeight="black" fontFamily="serif" fill="currentColor">玺</text>
            </svg>
          </div>
        )}
      </div>
    );
  };

  return (
    <div key={`${scene}-${beat}`} className={`w-full h-full flex flex-row p-[3cqw] gap-[2.5cqw] relative ${meta.colors.bg} ${meta.colors.ink} font-serif`}>
      {/* Editorial Slide Content Left */}
      <div className="flex-[4] flex flex-col justify-between h-full z-10">
        <div className="flex flex-col gap-[1.5cqh]">
          <span className="font-sans text-[1.2cqw] font-bold tracking-wider uppercase opacity-65 text-[#8c745c] border-b border-[#dfd3c5] pb-[0.5cqh] inline-block">
            {meta.theme}
          </span>
          <h1 className="text-[3.2cqw] leading-[1.1] font-black tracking-tight font-serif mt-[1cqh] text-[#912d18]">
            {currentBeat.title}
          </h1>
          <p className="text-[1.3cqw] leading-[1.4] opacity-95 font-serif mt-[1.5cqh] text-[#3d2a1c]">
            {currentBeat.body}
          </p>
        </div>

        {/* Marginal Editorial Footnote */}
        <div className="flex flex-col gap-[0.5cqh] mt-[2cqh] border-t border-[#dfd3c5] pt-[1cqh]">
          <div className="flex justify-between text-[0.8cqw] font-mono text-[#8c745c]">
            <span>COURT DOC: MEIJI SEAT RECORD</span>
            <span>CHRONO: RESTORATION YR II (1869)</span>
          </div>
        </div>
      </div>

      {/* Visual Canvas Right */}
      <div className="flex-[5] h-full flex items-center justify-center z-10">
        {renderVisual()}
      </div>
    </div>
  );
}
