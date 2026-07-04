import React from "react";

export const getMetadata = (lang) => ({
  id: "21",
  tier: "C",
  name: lang === "zh" ? "达尔文加拉帕戈斯雀喙演化" : "Darwin's Finches Evolution",
  theme: lang === "zh" ? "加拉帕戈斯物种起源演化" : "Galapagos Species Speciation Studies",
  densityLabel: lang === "zh" ? "雀喙演化" : "Finch Evolution Ledger",
  colors: { bg: "bg-[#FAF8F2]", ink: "text-[#2b2722]", panel: "border-[#dfd7c8]" },
  typography: { header: "font-serif", body: "font-serif" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "加拉帕戈斯物种起源手稿" : "Origin of Species Manuscript",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "建立演化假说" : "Postulate Adaptation", 
          title: lang === "zh" ? "雀喙形态与食物之适应" : "The Core Evolutionary Postulate", 
          body: lang === "zh" ? "“在这些彼此相邻却又生态各异的岛屿上，由于食物结构分化，雀喙的形态随之发生剧烈演变。”1835年达尔文考察加拉帕戈斯，捕捉到了自然选择的铁证。" : "“Across these adjacent yet ecologically distinct islands, finch beak morphology has diverged sharply to exploit different food sources.” Darwin's 1835 voyage captured this smoking gun of natural selection." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "绘制群岛隔离" : "Map Archipelago Isolation", 
          title: lang === "zh" ? "地理隔离推动的物种分化" : "Geographical Isolation & Speciation", 
          body: lang === "zh" ? "群岛之间辽阔的海峡切断了种群的基因流动。在 Chatham 与 Floreana 等不同岛屿上，同一种群逐渐演化为独立的亚种形态。" : "Vast ocean channels between islands severed gene flow. On isolated islands like Chatham and Floreana, ancestral populations gradually diverged into distinct subspecies." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "确立自然选择" : "Affirm Natural Selection", 
          title: lang === "zh" ? "适者生存的进化论之基" : "Survival of the Fittest Foundation", 
          body: lang === "zh" ? "大自然如同最严苛的筛网。凡是不适应当地植物种子坚硬度的雀喙形态，都在连年的大旱中被无情淘汰，唯有最适者得以繁衍。" : "Nature operates as the ultimate sieve. Beak shapes mismatched to the hardness of local seeds were ruthlessly weeded out in droughts, leaving only the fittest to breed." 
        }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "双雀喙形态对比：Fortis与Scandens" : "Dual Morphology: Fortis vs Scandens",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "描绘坚果碎喙" : "Sketch Seed Crusher", 
          title: lang === "zh" ? "勇地雀（Fortis）：强壮坚果碎喙" : "Geospiza fortis: The Robust Seed Crusher", 
          body: lang === "zh" ? "勇地雀演化出极其厚实的钝重雀喙，喙深达到12毫米。这使其能产生巨大的咬合力，轻松砸碎坚硬的蒺藜种子。" : "Geospiza fortis evolved an exceptionally deep, blunt beak (up to 12mm depth). This leverages massive crushing force, easily shattering hard Tribulus seeds." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "描绘仙人掌喙" : "Sketch Cactus Feeder", 
          title: lang === "zh" ? "仙人掌地雀（Scandens）：细长 pointed" : "Geospiza scandens: The Sharp Cactus Probe", 
          body: lang === "zh" ? "相反，仙人掌地雀则演化出细长且末端锋利的雀喙，完美适应深入仙人掌花朵探食花蜜，或剥食仙人掌果实。" : "Conversely, Geospiza scandens evolved a long, slender, sharp beak, perfectly adapted for probing deep into cactus flowers for nectar or peeling cactus fruit." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "对齐生态身位" : "Align Ecological Niche", 
          title: lang === "zh" ? "生态位分化消解竞争" : "Niche Differentiation Prevents Conflict", 
          body: lang === "zh" ? "两只雀喙，代表了两种截然不同的生存路径。通过食物资源的彻底分化，它们在同一岛屿上共存，避免了你死我活的生态竞争。" : "Two beaks represent two distinct pathways of survival. Through complete resource differentiation, they coexist on the same island, avoiding fatal ecological conflict." 
        }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "干旱压迫之进化阶段" : "Evolutionary Stages Under Drought Pressures",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "回溯湿润丰饶" : "Recall Wet Abundance", 
          title: lang === "zh" ? "第一阶段：湿润期的软细种子" : "Stage I: Wet Abundance & Soft Seeds", 
          body: lang === "zh" ? "在降水充沛的丰饶年份，岛上遍布细软种子。不论是厚喙还是细喙的陆地雀，皆能轻易获得充足食物，生存压力微乎其微。" : "In wet years of rich rainfall, soft seeds were abundant. Both thick-beaked and thin-beaked finches easily sourced food, facing minimal survival pressures." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "标注干旱硬食拐点" : "Mark Hard Seed Pivot", 
          title: lang === "zh" ? "第二阶段：干旱降临与硬实种子" : "Stage II: Great Drought & Hard Seed Shift", 
          body: lang === "zh" ? "1977年大旱降临，植被枯萎，细软种子消耗殆尽。岛上仅存坚硬且带刺的木本植物坚果，只有厚喙雀能够破开食用。" : "In the 1977 drought, soft seeds vanished. Only hard, woody, spiked seeds remained, which only thick-beaked finches possessed the force to crack." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "核算厚喙基因存活" : "Compute Thick Beak Survival", 
          title: lang === "zh" ? "第三阶段：厚喙基因的生存胜出" : "Stage III: Thick Beak Selection & Inheritance", 
          body: lang === "zh" ? "短短数年间，细喙雀因无法砸碎坚果而大量饿死。幸存的厚喙雀将“深喙”基因传递给后代，种群平均喙深在几代内显著提升。" : "Within years, thin-beaked finches starved. Surviving thick-beaked finches passed on their deep-beak genes, increasing the population's average beak depth." 
        }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "四种群演化机能评估" : "Four Core Strata of Avian Adaptation",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "测试咬合压力" : "Verify Crushing Force", 
          title: lang === "zh" ? "雀喙咬合压力（牛顿）测算" : "Beak Crushing Force (Newtons)", 
          body: lang === "zh" ? "实验室测试显示，喙深每增加1毫米，雀喙的破壳压力极限成倍增长。厚喙勇地雀能承受高达40牛顿的硬壳反作用力。" : "Lab tests reveal that every 1mm increase in beak depth exponentially scales crushing force. Thick-beaked fortis withstand up to 40 Newtons of hard shell resistance." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "测试探深效率" : "Verify Nectar Probe Rate", 
          title: lang === "zh" ? "仙人掌花粉采蜜探深效率" : "Cactus Pollen Probing Rates", 
          body: lang === "zh" ? "细长嘴地雀在仙人掌花朵内部的花粉探深效率高出普通地雀三倍。其尖窄形状能以最小阻力刺穿外表皮，吮吸花蜜。" : "Slender-beaked scandens probe cactus nectar three times faster than other finches. Its sharp, narrow profile pierces the tough outer husk with minimal resistance." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "分析物种分化谱" : "Map Taxonomy Tree", 
          title: lang === "zh" ? "遗传学分子演化树对齐" : "Phylogenetic Molecular Cladogram", 
          body: lang === "zh" ? "比对各物种线粒体DNA碱基对突变常数，清晰绘制出十三种地雀如何自一个共同大陆祖先在两百万年内分化演变而出。" : "Comparing mitochondrial DNA base mutations clear-maps how thirteen distinct finch species diverged from a single mainland ancestor over two million years." 
        }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "加拉帕戈斯地雀演化总账" : "Galapagos Avian Speciation Ledger",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "盘点雀类数据" : "Audit Species Constants", 
          title: lang === "zh" ? "五大主要地雀演化常数全面对决" : "Adaptive Constants: Five Major Finch Species", 
          body: lang === "zh" ? "汇总大、中、小地雀、仙人掌雀及树雀的体长、喙深、主要食物与生存能力指标常数，完整复现自然选择对生态位之精密裁切。" : "Aggregating records of large, medium, small ground finches, cactus finches, and tree finches on size, beak depth, food, and survival rates." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "贴上伦敦物种标本签" : "Attach Specimen Label", 
          title: lang === "zh" ? "物种分类学呈大英自然历史博物馆" : "Taxonomic Presentation to the British Museum", 
          body: lang === "zh" ? "加拉帕戈斯群岛标本大册经达尔文亲自整理分类，贴上伦敦自然历史博物馆‘标本典藏签’（Museum Collector Tag），成为科学界永恒基石。" : "Galapagos specimens organized by Darwin are tagged with the British Museum Collector Label, establishing an immortal cornerstone of modern science." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "绘解谱演化系统树" : "Render Cladogram Links", 
          title: lang === "zh" ? "分子遗传学进化谱系树绘制" : "Phylogenetic Lineage Connection Map", 
          body: lang === "zh" ? "绘制出由食草、食虫至食种的演化血缘系统连接网。雀喙的微妙渐变，编织成了生命演化长河中最波澜壮阔之系统画卷。" : "Drawing the evolutionary cladogram connecting herbivorous, insectivorous, and granivorous finches. Beak gradients weave a grand map of life's descent." 
        }
      ]
    }
  ]
});

export default function Style21({ scene = 1, beat = 0, language = "en", isThumbnail = false, onNavigate }) {
  const meta = getMetadata(language);

  return (
    <div 
      className="w-full h-full overflow-hidden relative bg-[#FAF8F2] text-[#2b2722] font-serif select-none flex flex-row"
      style={{ containerType: "size" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=La+Belle+Aurore&family=Special+Elite&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        
        .font-cursive {
          font-family: 'La Belle Aurore', 'Caveat', 'Brush Script MT', cursive;
        }
        .font-sans-vintage {
          font-family: 'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif;
        }
        .font-serif-vintage {
          font-family: 'Playfair Display', Georgia, serif;
        }
        .font-typewriter {
          font-family: 'Special Elite', Courier, monospace;
        }
        
        .pencil-grid {
          background-image: 
            linear-gradient(#2b272204 1px, transparent 1px),
            linear-gradient(90deg, #2b272204 1px, transparent 1px);
          background-size: 2.5cqw 2.5cqw;
        }

        .ledger-row-line {
          background-image: linear-gradient(#2b27220a 1px, transparent 1px);
          background-size: 100% 3cqh;
        }

        .red-margin-left {
          border-left: 1px double rgba(185,28,28,0.25);
        }

        .shadow-ledger {
          box-shadow: inset 0 0 40px rgba(43,39,34,0.03), 0 5px 15px rgba(43,39,34,0.04);
        }
      `}</style>

      {/* Main slide presentation container (takes up left portion) */}
      <div className="flex-1 h-full overflow-hidden relative">
        <div 
          className="flex flex-col h-[500%] w-full"
          style={{ 
            transform: `translateY(-${(scene - 1) * 20}%)`,
            transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* ==========================================
              SCENE 1: HMS Beagle Exploration Cover (Ultralight)
              ========================================== */}
          <div className="h-[20%] w-full relative p-[4cqw] flex flex-col justify-between overflow-hidden pencil-grid shadow-ledger">
            {/* Ink outer borders */}
            <div className="absolute inset-[1.5cqw] border border-[#2b2722]/15 pointer-events-none" />
            <div className="absolute inset-[1.8cqw] border border-[#2b2722]/5 pointer-events-none" />
            <div className="absolute left-[8cqw] top-0 bottom-0 border-l border-red-800/10 pointer-events-none" />

            {/* Top Left: Explorer pinned note */}
            <div className="z-10 flex flex-col">
              <span className="font-typewriter text-[0.8cqw] tracking-wider uppercase text-[#705c43]">
                HMS BEAGLE EXPEDITION ARCHIVES • AD 1835
              </span>
              <span className="font-cursive text-[1.4cqw] text-[#57412f] mt-1">
                Galapagos Archipelago — Chatham Island Specimen No. 12
              </span>
            </div>

            {/* Center integrated layout */}
            <div className="flex-1 w-full flex items-center justify-around z-10 px-[2cqw] py-[2cqh]">
              {/* Left Column: Hand Drawn Finch Beak SVG Profile */}
              <div className="flex flex-col items-center">
                <svg viewBox="0 0 160 120" className="w-[28cqw] h-[35cqh] text-[#2b2722]/85 drop-shadow-sm select-none">
                  {/* Head shape */}
                  <path d="M 20,90 Q 25,25 65,20 Q 95,20 110,35" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  {/* Shading/hatching on head */}
                  <path d="M 30,80 Q 32,45 60,35" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1 1" className="opacity-40" />
                  <path d="M 40,82 Q 42,55 65,45" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1 1" className="opacity-30" />
                  
                  {/* Eye */}
                  <circle cx="65" cy="42" r="3.2" fill="currentColor" />
                  <circle cx="63.8" cy="40.8" r="0.8" fill="#FAF8F2" />
                  <path d="M 55,38 Q 65,34 75,38" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  
                  {/* Beak - upper (huge seed cracker) */}
                  <path 
                    d="M 98,28 L 145,55 Q 120,62 98,58 Z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    style={{
                      transform: beat >= 2 ? 'rotate(-3deg) translate(-1px, -2px)' : 'none',
                      transformOrigin: '98px 43px',
                      transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                  {/* Beak - lower */}
                  <path 
                    d="M 98,58 Q 120,62 145,55 L 98,85 Z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.8" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{
                      transform: beat >= 2 ? 'rotate(2deg) translate(0px, 1px)' : 'none',
                      transformOrigin: '98px 58px',
                      transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                  
                  {/* Hatching inside beak */}
                  <path d="M 105,45 L 125,52" stroke="currentColor" strokeWidth="0.4" className="opacity-30" />
                  <path d="M 108,50 L 120,53" stroke="currentColor" strokeWidth="0.4" className="opacity-30" />
                  <path d="M 102,64 L 125,59" stroke="currentColor" strokeWidth="0.4" className="opacity-30" />
                  
                  {/* Ruler/Dimension Overlay (glowing olive on beat 2) */}
                  {beat >= 2 && (
                    <g className="transition-all duration-1000 text-emerald-800 opacity-90">
                      {/* Depth caliper */}
                      <line x1="94" y1="28" x2="94" y2="85" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1.5 1.5" />
                      <path d="M 91,28 L 97,28 M 91,85 L 97,85" stroke="currentColor" strokeWidth="0.6" />
                      <text x="83" y="60" className="font-typewriter text-[5.5px] fill-current font-bold">14.2mm</text>
                      
                      {/* Length caliper */}
                      <line x1="98" y1="23" x2="145" y2="23" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1.5 1.5" />
                      <path d="M 98,20 L 98,26 M 145,20 L 145,26" stroke="currentColor" strokeWidth="0.6" />
                      <text x="120" y="18" className="font-typewriter text-[5.5px] fill-current font-bold" textAnchor="middle">15.5mm</text>

                      {/* Angle label */}
                      <path d="M 115,55 A 15,15 0 0,0 120,45" fill="none" stroke="currentColor" strokeWidth="0.4" />
                      <text x="123" y="42" className="font-sans-vintage text-[4.2px] fill-current italic">θ = 38°</text>
                    </g>
                  )}
                </svg>
                <span className="font-typewriter text-[0.8cqw] text-[#705c43] mt-[1cqh]">
                  Fig. I: Geospiza magnirostris (Large Ground Finch)
                </span>
              </div>

              {/* Right Column: Title specimen block */}
              <div className="flex flex-col max-w-[38cqw] border border-[#2b2722]/10 bg-[#FAF6EE] p-[2cqw] rounded-md shadow-sm relative rotate-[1.5deg]">
                {/* Tied string simulation */}
                <div className="absolute top-[-1cqh] left-[2cqw] w-[1px] h-[3cqh] bg-[#705c43]/40" />
                <div className="absolute top-[-1cqh] left-[2cqw] w-[0.6cqw] h-[0.6cqw] rounded-full bg-[#705c43]/60 transform translate-x-[-25%] mt-[-0.3cqw]" />

                <h1 className="font-cursive text-[3.6cqw] font-bold text-[#705c43] leading-none mb-1">
                  The Galapagos Finch Manuscript
                </h1>
                <h2 className="font-serif-vintage text-[1.4cqw] font-bold text-[#2b2722] border-b border-[#2b2722]/10 pb-2 mb-2">
                  加拉帕戈斯物种起源手稿 • 雀喙演化
                </h2>
                
                {/* Active Beat Content */}
                <div className="transition-all duration-500">
                  <p className="font-sans-vintage text-[0.9cqw] text-[#57412f] leading-relaxed">
                    <strong>[CORE POSTULATE / 演化核心假说]</strong>
                    <br />
                    “在这些彼此相邻却又生态各异的岛屿上，由于食物结构分化，雀喙的形态随之发生剧烈演变。” 1835年达尔文考察加拉帕戈斯，捕捉到了自然选择的铁证。
                  </p>
                  <p className="font-sans-vintage text-[0.8cqw] text-[#705c43] italic mt-2 border-t border-[#2b2722]/5 pt-1">
                    "Across adjacent yet ecologically distinct islands, finch beak morphology has diverged sharply to exploit different food sources."
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Margin area */}
            <div className="z-10 flex justify-between items-center border-t border-[#2b2722]/10 pt-2">
              <span className="font-typewriter text-[0.75cqw] text-[#705c43]">
                COORDINATES: 0°54′S 90°30′W • PACIFIC OCEAN
              </span>
              <span className="font-cursive text-[1.4cqw] text-[#705c43] font-bold">
                Natural selection is the sculptor of organic form.
              </span>
            </div>

            {/* Custom Beat Stamps */}
            {/* Beat 1: Confirmed Red Stamp */}
            <div 
              className={`absolute bottom-[6cqh] left-[4cqw] border-2 border-[#a03822]/80 text-[#a03822]/80 font-typewriter text-[0.7cqw] uppercase font-bold tracking-widest px-2 py-1 rounded transition-all duration-700 pointer-events-none ${
                beat >= 1 ? "opacity-90 rotate-[-12deg] scale-100" : "opacity-0 scale-150"
              }`}
            >
              HMS BEAGLE • ACTIVE SAMPLE
            </div>
            
            {/* Beat 2: Taxonomic overlay marker */}
            <div 
              className={`absolute top-[8cqh] right-[6cqw] border border-emerald-800/40 text-emerald-800/90 bg-emerald-50/10 font-sans-vintage text-[0.7cqw] tracking-wide px-2 py-1 rounded-sm transition-all duration-1000 pointer-events-none ${
                beat >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[2cqh]"
              }`}
            >
              📐 Morphological Alignment: 100% Consistent
            </div>
          </div>

          {/* ==========================================
              SCENE 2: Ground Finch Beak vs. Cactus Finch Beak (Light)
              ========================================== */}
          <div className="h-[20%] w-full relative p-[4cqw] flex flex-col justify-between overflow-hidden pencil-grid shadow-ledger">
            {/* Ink outer borders */}
            <div className="absolute inset-[1.5cqw] border border-[#2b2722]/15 pointer-events-none" />
            <div className="absolute inset-[1.8cqw] border border-[#2b2722]/5 pointer-events-none" />
            <div className="absolute left-[8cqw] top-0 bottom-0 border-l border-red-800/10 pointer-events-none" />

            {/* Header */}
            <div className="z-10 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="font-typewriter text-[0.8cqw] tracking-wider uppercase text-[#705c43]">
                  COMPARATIVE MORPHOLOGICAL STUDY • VOL. II
                </span>
                <span className="font-cursive text-[1.4cqw] text-[#57412f] mt-1">
                  Two divergent pathways shaped by local dietary boundaries.
                </span>
              </div>
              <span className="font-typewriter text-[0.75cqw] text-[#2b2722]/50 border border-[#2b2722]/20 px-2 py-0.5 rounded">
                GEOSPIZA COMPARATIVE
              </span>
            </div>

            {/* Dual sheets side-by-side (strictly avoiding 50/50 templates, integrated crossover annotations) */}
            <div className="flex-1 w-full grid grid-cols-2 gap-[3cqw] my-[2cqh] z-10">
              {/* Left Finch - Fortis */}
              <div className={`flex flex-col justify-between border border-[#2b2722]/15 bg-[#FAF6EE] p-[1.5cqw] rounded shadow-sm transition-all duration-700 ${beat === 0 ? 'scale-102 ring-2 ring-[#705c43]/40 z-10' : beat === 2 ? 'opacity-100' : 'opacity-40'}`}>
                <div className="flex justify-between items-center border-b border-[#2b2722]/10 pb-[0.5cqh] mb-[1cqh]">
                  <span className="font-typewriter font-bold text-[0.9cqw] text-[#705c43]">SPECIMEN A: G. fortis</span>
                  <span className="font-sans-vintage text-[0.7cqw] uppercase bg-[#eddcc5] px-1 text-[#3c2f1e] font-bold">Seed Crusher</span>
                </div>
                
                {/* Fortis SVG Sketch */}
                <div className="flex-1 flex items-center justify-center py-[1cqh]">
                  <svg viewBox="0 0 120 90" className="w-[16cqw] h-[18cqh] text-[#2b2722]">
                    {/* Head profile */}
                    <path d="M 15,75 Q 18,25 50,22 Q 72,22 80,32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    <circle cx="50" cy="38" r="2.5" fill="currentColor" />
                    <circle cx="49" cy="37" r="0.8" fill="#FAF6EE" />
                    
                    {/* Deep beak */}
                    <path d="M 72,28 L 105,48 Q 88,54 72,52 Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 72,52 Q 88,54 105,48 L 72,70 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    
                    {/* Crushing force arrows */}
                    {beat === 0 && (
                      <g className="text-red-800 animate-pulse">
                        <path d="M 90,12 L 90,29 L 87,24 M 90,29 L 93,24" fill="none" stroke="currentColor" strokeWidth="0.8" />
                        <path d="M 90,62 L 90,45 L 87,50 M 90,45 L 93,50" fill="none" stroke="currentColor" strokeWidth="0.8" />
                        <text x="96" y="38" className="font-typewriter text-[5.5px] fill-current font-bold">40N FORCE</text>
                      </g>
                    )}
                    
                    <line x1="72" y1="28" x2="72" y2="52" stroke="#a03822" strokeWidth="0.6" strokeDasharray="1.5 1" />
                    <text x="58" y="44" className="font-sans-vintage text-[4.2px] fill-[#a03822] font-bold">12mm Depth</text>
                  </svg>
                </div>
                
                <div className="font-sans-vintage text-[0.8cqw] text-[#57412f] leading-tight">
                  <p className="font-bold border-b border-[#2b2722]/5 pb-[0.2cqh] mb-[0.2cqh] text-[#705c43]">勇地雀：强壮坚果碎喙 / Geospiza fortis</p>
                  <p>演化出极其厚实的钝重雀喙，喙深达12毫米。这使其能产生巨大的咬合力，轻松砸碎坚硬的蒺藜种子。</p>
                  <p className="italic text-[#705c43] text-[0.72cqw] mt-[0.5cqh]">"Leverages massive crushing force, easily shattering hard seeds."</p>
                </div>
              </div>

              {/* Right Finch - Scandens */}
              <div className={`flex flex-col justify-between border border-[#2b2722]/15 bg-[#FAF6EE] p-[1.5cqw] rounded shadow-sm transition-all duration-700 ${beat === 1 ? 'scale-102 ring-2 ring-[#705c43]/40 z-10' : beat === 2 ? 'opacity-100' : 'opacity-40'}`}>
                <div className="flex justify-between items-center border-b border-[#2b2722]/10 pb-[0.5cqh] mb-[1cqh]">
                  <span className="font-typewriter font-bold text-[0.9cqw] text-[#705c43]">SPECIMEN B: G. scandens</span>
                  <span className="font-sans-vintage text-[0.7cqw] uppercase bg-[#eddcc5] px-1 text-[#3c2f1e] font-bold">Cactus Probe</span>
                </div>
                
                {/* Scandens SVG Sketch */}
                <div className="flex-1 flex items-center justify-center py-[1cqh]">
                  <svg viewBox="0 0 120 90" className="w-[16cqw] h-[18cqh] text-[#2b2722]">
                    {/* Head profile */}
                    <path d="M 15,75 Q 18,27 48,24 Q 68,24 75,32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    <circle cx="48" cy="38" r="2.5" fill="currentColor" />
                    <circle cx="47" cy="37" r="0.8" fill="#FAF6EE" />
                    
                    {/* Slender beak */}
                    <path d="M 68,28 L 110,43 Q 85,46 68,45 Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 68,45 Q 85,46 110,43 L 68,57 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    
                    {/* Probing flow lines */}
                    {beat === 1 && (
                      <g className="text-blue-800 animate-pulse">
                        <path d="M 113,32 L 95,41 M 115,40 L 98,43 M 113,48 L 95,44" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                        <text x="94" y="26" className="font-typewriter text-[5.5px] fill-current font-bold">3.2x PROBE</text>
                      </g>
                    )}
                    
                    <line x1="68" y1="28" x2="110" y2="43" stroke="#2a68a8" strokeWidth="0.6" strokeDasharray="1.5 1" />
                    <text x="82" y="24" className="font-sans-vintage text-[4.2px] fill-[#2a68a8] font-bold">16mm Length</text>
                  </svg>
                </div>
                
                <div className="font-sans-vintage text-[0.8cqw] text-[#57412f] leading-tight">
                  <p className="font-bold border-b border-[#2b2722]/5 pb-[0.2cqh] mb-[0.2cqh] text-[#705c43]">仙人掌地雀：细长 pointed / Geospiza scandens</p>
                  <p>相反，仙人掌地雀则演化出细长且末端锋利的雀喙，完美适应深入仙人掌花朵探食花蜜，或剥食仙人掌果实。</p>
                  <p className="italic text-[#705c43] text-[0.72cqw] mt-[0.5cqh]">"Slender, sharp beak perfectly adapted for probing flower nectar."</p>
                </div>
              </div>
            </div>

            {/* Bottom Crossover ledger balance sheet bar (only active on beat 2) */}
            <div className="z-10 min-h-[5cqh] flex items-center justify-between border-t border-[#2b2722]/10 pt-2">
              <span className="font-typewriter text-[0.75cqw] text-[#705c43]">
                DIVERGENT EVOLUTION PATHS • SANTA CRUZ SAMPLES
              </span>
              
              {beat === 2 ? (
                <div className="flex items-center gap-[2cqw] animate-pulse bg-emerald-50/10 px-3 py-1 border border-emerald-800/20 rounded">
                  <span className="font-typewriter text-[0.8cqw] text-emerald-800 font-bold">
                    [MECHANICAL TRADEOFF CALIBRATED]
                  </span>
                  <span className="font-cursive text-[1.4cqw] text-[#705c43] font-bold">
                    生态位分化消解竞争 / Niche differentiation resolves conflict.
                  </span>
                </div>
              ) : (
                <span className="font-cursive text-[1.3cqw] text-[#2b2722]/60">
                  Observe beak coordinates shift to prevent competition.
                </span>
              )}
            </div>
          </div>

          {/* ==========================================
              SCENE 3: 3-Stage Evolutionary Tree (Standard)
              ========================================== */}
          <div className="h-[20%] w-full relative p-[4cqw] flex flex-col justify-between overflow-hidden pencil-grid shadow-ledger">
            {/* Ink outer borders */}
            <div className="absolute inset-[1.5cqw] border border-[#2b2722]/15 pointer-events-none" />
            <div className="absolute inset-[1.8cqw] border border-[#2b2722]/5 pointer-events-none" />
            <div className="absolute left-[8cqw] top-0 bottom-0 border-l border-red-800/10 pointer-events-none" />

            {/* Header */}
            <div className="z-10 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="font-typewriter text-[0.8cqw] tracking-wider uppercase text-[#705c43]">
                  CHRONO-GENETIC CLADOGRAM • SEC. III
                </span>
                <span className="font-cursive text-[1.4cqw] text-[#57412f] mt-1">
                  Archipelago selective filtration under severe climatic stress.
                </span>
              </div>
              <span className="font-typewriter text-[0.75cqw] text-stone-500">
                PHYLOGENETIC RADIX
              </span>
            </div>

            {/* Central layout blending text columns and vertical tree diagram */}
            <div className="flex-1 w-full flex gap-[3cqw] my-[2cqh] z-10 relative">
              {/* Left Column: 3 Stages info stacked vertically */}
              <div className="flex flex-col gap-[1.2cqh] max-w-[36cqw] justify-center">
                {/* Stage 1 */}
                <div className={`p-[1cqw] rounded border transition-all duration-700 ${beat >= 0 ? 'bg-[#FAF6EE]/80 border-[#705c43]/40 shadow-sm' : 'opacity-25 border-transparent'}`}>
                  <span className="font-typewriter text-[0.7cqw] font-bold text-[#705c43] block">STAGE I: DAMP ABUNDANCE / 湿润丰饶</span>
                  <h3 className="font-serif-vintage text-[1.1cqw] font-bold text-[#2b2722] leading-none mb-1">Soft Seeds Plentiful / 软细种子</h3>
                  <p className="font-sans-vintage text-[0.75cqw] text-[#57412f] leading-tight">
                    在雨水充沛年份，岛上遍布细软种子。不论是厚喙还是细喙雀皆能获取饱食，生存竞争微乎其微。
                  </p>
                </div>

                {/* Stage 2 */}
                <div className={`p-[1cqw] rounded border transition-all duration-700 ${beat >= 1 ? 'bg-[#FAF3DC]/90 border-red-800/35 shadow-sm scale-102' : 'opacity-25 border-transparent'}`}>
                  <span className="font-typewriter text-[0.7cqw] font-bold text-[#a03822] block">STAGE II: GREAT DROUGHT / 干旱压力</span>
                  <h3 className="font-serif-vintage text-[1.1cqw] font-bold text-[#a03822] leading-none mb-1">Arid Pivot & Hard Seeds / 硬实种子</h3>
                  <p className="font-sans-vintage text-[0.75cqw] text-[#57412f] leading-tight">
                    1977年大旱降临，植被枯萎，细软种子消耗殆尽。仅存坚硬带刺之蒺藜木本种子，唯厚喙能破壳。
                  </p>
                </div>

                {/* Stage 3 */}
                <div className={`p-[1cqw] rounded border transition-all duration-700 ${beat >= 2 ? 'bg-emerald-50/25 border-emerald-800/35 shadow-sm' : 'opacity-25 border-transparent'}`}>
                  <span className="font-typewriter text-[0.7cqw] font-bold text-emerald-800 block">STAGE III: ADAPTIVE VICTORY / 基因胜出</span>
                  <h3 className="font-serif-vintage text-[1.1cqw] font-bold text-emerald-800 leading-none mb-1">Deep Beak baseline / 厚喙基因胜出</h3>
                  <p className="font-sans-vintage text-[0.75cqw] text-[#57412f] leading-tight">
                    细喙雀大量饿死。幸存之厚喙雀（Fortis）获得全部生存资源并传递后代，种群平均喙深显著提升。
                  </p>
                </div>
              </div>

              {/* Right Column: Hand-drawn Cladogram Tree in SVG */}
              <div className="flex-1 h-full flex items-center justify-center">
                <svg viewBox="0 0 200 160" className="w-full h-full text-[#2b2722]/80 select-none">
                  {/* Common Ancestor base */}
                  <text x="100" y="152" className="font-typewriter text-[5.5px] fill-current font-bold" textAnchor="middle">COMMON ANCESTOR (Mainland Group / 共同祖先)</text>
                  <path d="M 100,145 L 100,125" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1 0.5" />
                  
                  {/* First Split at (100, 125) */}
                  <path 
                    d="M 100,125 Q 100,110 60,100" 
                    fill="none" 
                    stroke={beat >= 0 ? "#705c43" : "currentColor"} 
                    strokeWidth={beat >= 0 ? "1.8" : "0.8"} 
                    className={beat >= 0 ? "opacity-100" : "opacity-30"}
                  />
                  <path 
                    d="M 100,125 Q 100,110 140,105" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="0.8" 
                    className="opacity-25" 
                  />
                  <text x="145" y="102" className="font-sans-vintage text-[4.5px] fill-current opacity-30">Tree Finches (Insectivorous / 树雀属)</text>

                  {/* Granivorous Split at (60, 100) */}
                  <text x="45" y="96" className="font-typewriter text-[4.8px] fill-[#705c43] font-bold">Granivorous Branch (地雀属)</text>
                  <path 
                    d="M 60,100 L 60,80" 
                    fill="none" 
                    stroke={beat >= 0 ? "#705c43" : "currentColor"} 
                    strokeWidth={beat >= 0 ? "1.8" : "0.8"} 
                    className={beat >= 0 ? "opacity-100" : "opacity-30"}
                  />

                  {/* Major adaptive split under drought at (60, 80) */}
                  {/* Split to Fortis/Magnirostris on left (thick) */}
                  <path 
                    d="M 60,80 Q 60,65 30,55" 
                    fill="none" 
                    stroke={beat >= 1 ? "#a03822" : "currentColor"} 
                    strokeWidth={beat >= 1 ? "2.2" : "0.8"} 
                    className={beat >= 1 ? "opacity-100" : "opacity-30"}
                  />
                  <text x="25" y="50" className="font-sans-vintage text-[4.2px] fill-[#a03822] font-bold">Thick crushers (Drought Selected)</text>

                  {/* Split to Scandens in center (slender) */}
                  <path 
                    d="M 60,80 Q 60,65 65,50" 
                    fill="none" 
                    stroke={beat >= 2 ? "#065f46" : "currentColor"} 
                    strokeWidth={beat >= 2 ? "1.8" : "0.8"} 
                    className={beat >= 2 ? "opacity-100" : "opacity-30"}
                  />
                  <text x="68" y="47" className="font-sans-vintage text-[4.2px] fill-[#065f46] font-bold">Cactus Specialist (Scandens)</text>

                  {/* Split to Fuliginosa on right (small seed) */}
                  <path 
                    d="M 60,80 Q 60,65 95,58" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="0.8" 
                    className="opacity-30"
                  />
                  <text x="98" y="55" className="font-sans-vintage text-[4.2px] fill-current opacity-35">Small Seeds (Fuliginosa)</text>

                  {/* Specialized endpoints on Beat 2 */}
                  {beat >= 2 && (
                    <g className="transition-opacity duration-1000">
                      <path d="M 30,55 L 20,35" stroke="#a03822" strokeWidth="1.2" />
                      <circle cx="20" cy="35" r="2" fill="#a03822" />
                      <text x="18" y="28" className="font-typewriter text-[5px] fill-[#a03822] font-bold">G. magnirostris</text>

                      <path d="M 30,55 L 40,35" stroke="#a03822" strokeWidth="1.2" />
                      <circle cx="40" cy="35" r="1.5" fill="#a03822" />
                      <text x="38" y="28" className="font-typewriter text-[5px] fill-[#a03822] font-bold">G. fortis</text>

                      <path d="M 65,50 L 68,30" stroke="#065f46" strokeWidth="1.2" />
                      <circle cx="68" cy="30" r="1.5" fill="#065f46" />
                      <text x="68" y="24" className="font-typewriter text-[5px] fill-[#065f46] font-bold">G. scandens</text>
                      
                      {/* Connection indicator lines to stage cards */}
                      <line x1="20" y1="35" x2="-20" y2="35" stroke="#a03822" strokeWidth="0.5" strokeDasharray="1 1" className="opacity-30" />
                      <line x1="68" y1="30" x2="-20" y2="30" stroke="#065f46" strokeWidth="0.5" strokeDasharray="1 1" className="opacity-30" />
                    </g>
                  )}
                </svg>
              </div>
            </div>

            {/* Bottom Margin area */}
            <div className="z-10 flex justify-between items-center border-t border-[#2b2722]/10 pt-2">
              <span className="font-typewriter text-[0.75cqw] text-[#705c43]">
                PHYLOGENETIC TREE CONSTRUCTED AD 1835-1859
              </span>
              <span className="font-cursive text-[1.4cqw] text-emerald-800 font-bold">
                The twigs of the Tree of Life represent speciation splits.
              </span>
            </div>
          </div>

          {/* ==========================================
              SCENE 4: Beak Depth Measurements Across Islands (Matrix - Dense)
              ========================================== */}
          <div className="h-[20%] w-full relative p-[4cqw] flex flex-col justify-between overflow-hidden pencil-grid shadow-ledger">
            {/* Ink outer borders */}
            <div className="absolute inset-[1.5cqw] border border-[#2b2722]/15 pointer-events-none" />
            <div className="absolute inset-[1.8cqw] border border-[#2b2722]/5 pointer-events-none" />
            <div className="absolute left-[8cqw] top-0 bottom-0 border-l border-red-800/10 pointer-events-none" />

            {/* Header */}
            <div className="z-10 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="font-typewriter text-[0.8cqw] tracking-wider uppercase text-[#705c43]">
                  ARCHIPELAGO ADAPTATION MATRIX • SEC. IV
                </span>
                <span className="font-cursive text-[1.4cqw] text-[#57412f] mt-1">
                  Ecosystem-specific selective forces mapped across the islands.
                </span>
              </div>
              <span className="font-typewriter text-[0.75cqw] text-[#2b2722]/50">
                MULTICENTRIC GRID
              </span>
            </div>

            {/* 2x2 Grid comparing islands */}
            <div className="flex-1 w-full grid grid-cols-2 grid-rows-2 gap-[1.5cqw] my-[1.5cqh] z-10">
              {/* Daphne Major */}
              <div className={`p-[1.2cqw] rounded border transition-all duration-700 flex flex-col justify-between ${
                beat === 0 
                  ? 'border-[#2b2722] bg-[#FAF4E5] shadow-md scale-[1.01] ring-1 ring-[#2b2722]/30' 
                  : 'border-[#2b2722]/15 bg-[#FAF8F2]/60 opacity-40'
              }`}>
                <div>
                  <div className="flex justify-between items-center border-b border-[#2b2722]/10 pb-0.5 mb-1.5">
                    <span className="font-typewriter font-bold text-[0.8cqw] text-[#705c43]">DAPHNE MAJOR / 达芬大马略岛</span>
                    <span className="font-sans-vintage text-[0.7cqw] text-[#57412f] italic">Arid Volcanic Islet</span>
                  </div>
                  <h4 className="font-serif-vintage text-[1.1cqw] font-bold text-[#2b2722] mb-1">Drought Selection Dynamics / 干旱选择机制</h4>
                  
                  <div className="flex flex-col gap-0.5 font-typewriter text-[0.75cqw] text-[#57412f]">
                    <div className="flex justify-between border-b border-[#2b2722]/5 py-0.5">
                      <span>Average Beak Depth:</span>
                      <span className="font-bold text-[#a03822]">9.2mm → 10.6mm (+15.2%)</span>
                    </div>
                    <div className="flex justify-between border-b border-[#2b2722]/5 py-0.5">
                      <span>Hard Seed Abundance:</span>
                      <span className="font-bold text-[#a03822]">Extremely High (Caltrop)</span>
                    </div>
                    <div className="flex justify-between border-b border-[#2b2722]/5 py-0.5">
                      <span>Drought Survival Rate:</span>
                      <span className="font-bold text-[#a03822]">14.6% (Strict Gate)</span>
                    </div>
                  </div>
                </div>
                <div className="mt-1 h-[3.5cqh] flex items-center gap-[1cqw] text-[0.7cqw] font-sans-vintage italic text-[#705c43]/80 border-t border-[#2b2722]/5 pt-1">
                  🪨 Volcanic basalt, highly isolated. Primary site of Peter Grant research.
                </div>
              </div>

              {/* Santa Cruz */}
              <div className={`p-[1.2cqw] rounded border transition-all duration-700 flex flex-col justify-between ${
                beat === 1 
                  ? 'border-[#2b2722] bg-[#FAF4E5] shadow-md scale-[1.01] ring-1 ring-[#2b2722]/30' 
                  : 'border-[#2b2722]/15 bg-[#FAF8F2]/60 opacity-40'
              }`}>
                <div>
                  <div className="flex justify-between items-center border-b border-[#2b2722]/10 pb-0.5 mb-1.5">
                    <span className="font-typewriter font-bold text-[0.8cqw] text-[#705c43]">SANTA CRUZ / 圣克鲁斯岛</span>
                    <span className="font-sans-vintage text-[0.7cqw] text-[#57412f] italic">Lush Humid Highlands</span>
                  </div>
                  <h4 className="font-serif-vintage text-[1.1cqw] font-bold text-[#2b2722] mb-1">Multi-Niche Speciation / 复合生态位共存</h4>
                  
                  <div className="flex flex-col gap-0.5 font-typewriter text-[0.75cqw] text-[#57412f]">
                    <div className="flex justify-between border-b border-[#2b2722]/5 py-0.5">
                      <span>Coexisting Species:</span>
                      <span className="font-bold text-emerald-800">10 Separate Genus</span>
                    </div>
                    <div className="flex justify-between border-b border-[#2b2722]/5 py-0.5">
                      <span>Beak Depth Spectrum:</span>
                      <span className="font-bold text-emerald-800">6.0mm to 15.0mm Range</span>
                    </div>
                    <div className="flex justify-between border-b border-[#2b2722]/5 py-0.5">
                      <span>Vegetation Strata:</span>
                      <span className="font-bold text-emerald-800">5 Distinct Ecological Zones</span>
                    </div>
                  </div>
                </div>
                <div className="mt-1 h-[3.5cqh] flex items-center gap-[1cqw] text-[0.7cqw] font-sans-vintage italic text-[#705c43]/80 border-t border-[#2b2722]/5 pt-1">
                  🌲 Wet transition highlands to arid coasts. Niche partition paradise.
                </div>
              </div>

              {/* Genovesa */}
              <div className={`p-[1.2cqw] rounded border transition-all duration-700 flex flex-col justify-between ${
                beat === 1 
                  ? 'border-[#2b2722] bg-[#FAF4E5] shadow-md scale-[1.01] ring-1 ring-[#2b2722]/30' 
                  : 'border-[#2b2722]/15 bg-[#FAF8F2]/60 opacity-40'
              }`}>
                <div>
                  <div className="flex justify-between items-center border-b border-[#2b2722]/10 pb-0.5 mb-1.5">
                    <span className="font-typewriter font-bold text-[0.8cqw] text-[#705c43]">GENOVESA / 杰诺维沙岛</span>
                    <span className="font-sans-vintage text-[0.7cqw] text-[#57412f] italic">Arid Lowlands & Rock Clefts</span>
                  </div>
                  <h4 className="font-serif-vintage text-[1.1cqw] font-bold text-[#2b2722] mb-1">Slender Beak Polarisation / 仙人掌细长喙极化</h4>
                  
                  <div className="flex flex-col gap-0.5 font-typewriter text-[0.75cqw] text-[#57412f]">
                    <div className="flex justify-between border-b border-[#2b2722]/5 py-0.5">
                      <span>G. scandens Population:</span>
                      <span className="font-bold text-emerald-800">3.2x Ground Finch Density</span>
                    </div>
                    <div className="flex justify-between border-b border-[#2b2722]/5 py-0.5">
                      <span>Flower Nectar Abundance:</span>
                      <span className="font-bold text-emerald-800">Perennial High Availability</span>
                    </div>
                    <div className="flex justify-between border-b border-[#2b2722]/5 py-0.5">
                      <span>Beak Length/Depth Ratio:</span>
                      <span className="font-bold text-emerald-800">2.05 (Maximum Elongation)</span>
                    </div>
                  </div>
                </div>
                <div className="mt-1 h-[3.5cqh] flex items-center gap-[1cqw] text-[0.7cqw] font-sans-vintage italic text-[#705c43]/80 border-t border-[#2b2722]/5 pt-1">
                  🌵 Dry cactus groves. Extreme specialization for nectar feeding.
                </div>
              </div>

              {/* Floreana */}
              <div className={`p-[1.2cqw] rounded border transition-all duration-700 flex flex-col justify-between ${
                beat === 2 
                  ? 'border-[#2b2722] bg-[#FAF4E5] shadow-md scale-[1.01] ring-1 ring-[#2b2722]/30' 
                  : 'border-[#2b2722]/15 bg-[#FAF8F2]/60 opacity-40'
              }`}>
                <div>
                  <div className="flex justify-between items-center border-b border-[#2b2722]/10 pb-0.5 mb-1.5">
                    <span className="font-typewriter font-bold text-[0.8cqw] text-[#705c43]">FLOREANA / 弗雷里安纳岛</span>
                    <span className="font-sans-vintage text-[0.7cqw] text-[#57412f] italic">Humid Highland Slopes</span>
                  </div>
                  <h4 className="font-serif-vintage text-[1.1cqw] font-bold text-[#2b2722] mb-1">Historical Baseline Records / 历史物种变迁档案</h4>
                  
                  <div className="flex flex-col gap-0.5 font-typewriter text-[0.75cqw] text-[#57412f]">
                    <div className="flex justify-between border-b border-[#2b2722]/5 py-0.5">
                      <span>Darwin Collection Sheets:</span>
                      <span className="font-bold text-[#a03822]">38 Specimen Sheets (1835)</span>
                    </div>
                    <div className="flex justify-between border-b border-[#2b2722]/5 py-0.5">
                      <span>Modern Extinction Rate:</span>
                      <span className="font-bold text-[#a03822]">3 Native Species Extinct</span>
                    </div>
                    <div className="flex justify-between border-b border-[#2b2722]/5 py-0.5">
                      <span>Invasive Species Impact:</span>
                      <span className="font-bold text-[#a03822]">Severe Habitat Contraction</span>
                    </div>
                  </div>
                </div>
                <div className="mt-1 h-[3.5cqh] flex items-center gap-[1cqw] text-[0.7cqw] font-sans-vintage italic text-[#705c43]/80 border-t border-[#2b2722]/5 pt-1">
                  📜 Site of Darwin's earliest Beagle collections. Historical ledger baseline.
                </div>
              </div>
            </div>

            {/* Bottom Margin area */}
            <div className="z-10 flex justify-between items-center border-t border-[#2b2722]/10 pt-2">
              <span className="font-typewriter text-[0.75cqw] text-[#705c43]">
                MULTICENTRIC COMPARISON LEDGER • GEOSPIZINAE DATA
              </span>
              <span className="font-cursive text-[1.4cqw] text-[#705c43] font-bold">
                Different islands operate as separate experimental chambers.
              </span>
            </div>
          </div>

          {/* ==========================================
              SCENE 5: British Museum Specimen Ledger (Ledger - Extreme)
              ========================================== */}
          <div className="h-[20%] w-full relative p-[4cqw] flex flex-col justify-between overflow-hidden shadow-ledger bg-[#F7F4EB] ledger-row-line">
            {/* Vintage Ledger Double Red Margin Borders */}
            <div className="absolute inset-[1.5cqw] border border-[#2b2722]/15 pointer-events-none" />
            <div className="absolute left-[7.8cqw] top-0 bottom-0 border-l border-red-800/25 pointer-events-none" />
            <div className="absolute left-[8.1cqw] top-0 bottom-0 border-l border-red-800/10 pointer-events-none" />
            <div className="absolute right-[12cqw] top-0 bottom-0 border-l border-blue-800/10 pointer-events-none" />

            {/* Header: Royal Museum Letterhead */}
            <div className="z-10 flex justify-between items-start pl-[2cqw] pb-[1cqh]">
              <div className="flex flex-col">
                <span className="font-typewriter text-[0.8cqw] tracking-widest uppercase font-bold text-stone-600">
                  BRITISH MUSEUM OF NATURAL HISTORY • ZOOLOGY DIVISION
                </span>
                <span className="font-cursive text-[2.2cqw] font-black text-[#57412f] leading-none mt-1">
                  Galapagos Finch Morphological Catalog
                </span>
                <span className="font-sans-vintage text-[0.8cqw] text-[#705c43] font-bold italic mt-0.5">
                  加拉帕戈斯群岛地雀演化总账 — AD 1835 Collection Register
                </span>
              </div>
              <div className="text-right flex flex-col font-typewriter text-[0.7cqw] text-stone-400">
                <span>VOL. CLADOGRAM III</span>
                <span>CATALOG No. 1835-DARW</span>
              </div>
            </div>

            {/* Table of Specimen details */}
            <div className="flex-1 w-full z-10 pl-[2cqw] pr-[1cqw] my-[1cqh] flex flex-col justify-center">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#2b2722]/30 font-typewriter text-[0.8cqw] text-[#705c43] font-bold">
                    <th className="py-1">Species / 属名与形态</th>
                    <th className="py-1">Expedition Island / 岛屿</th>
                    <th className="py-1 text-right">Beak Depth / 喙深</th>
                    <th className="py-1 text-right">Beak Length / 喙长</th>
                    <th className="py-1">Primary Diet / 生态位食物</th>
                    <th className="py-1 text-right">Register Code / 编号</th>
                  </tr>
                </thead>
                <tbody className="font-sans-vintage text-[0.8cqw] text-[#2b2722]">
                  {/* Row 1 */}
                  <tr className={`border-b border-[#2b2722]/10 transition-colors duration-500 ${beat >= 0 ? "bg-amber-100/35 font-bold" : "opacity-40"}`}>
                    <td className="py-1 font-serif-vintage italic">G. magnirostris (Large Ground Finch)</td>
                    <td className="py-1 font-typewriter text-[0.75cqw]">Chatham Island</td>
                    <td className="py-1 text-right font-typewriter text-[#a03822]">14.2 mm</td>
                    <td className="py-1 text-right font-typewriter">15.5 mm</td>
                    <td className="py-1">Hard Spiked Seeds / 坚硬坚果</td>
                    <td className="py-1 text-right font-typewriter text-stone-400">GAL-MAG-012</td>
                  </tr>
                  
                  {/* Row 2 */}
                  <tr className={`border-b border-[#2b2722]/10 transition-colors duration-500 ${beat >= 0 ? "bg-amber-100/35 font-bold" : "opacity-40"}`}>
                    <td className="py-1 font-serif-vintage italic">G. fortis (Medium Ground Finch)</td>
                    <td className="py-1 font-typewriter text-[0.75cqw]">Daphne Major</td>
                    <td className="py-1 text-right font-typewriter text-[#a03822]">10.5 mm</td>
                    <td className="py-1 text-right font-typewriter">12.1 mm</td>
                    <td className="py-1">Intermediate Seeds / 中等种子</td>
                    <td className="py-1 text-right font-typewriter text-stone-400">GAL-FOR-104</td>
                  </tr>

                  {/* Row 3 */}
                  <tr className={`border-b border-[#2b2722]/10 transition-colors duration-500 ${beat >= 1 ? "bg-blue-50/45 font-bold" : "opacity-40"}`}>
                    <td className="py-1 font-serif-vintage italic">G. scandens (Cactus Ground Finch)</td>
                    <td className="py-1 font-typewriter text-[0.75cqw]">Santa Cruz</td>
                    <td className="py-1 text-right font-typewriter text-emerald-800">8.2 mm</td>
                    <td className="py-1 text-right font-typewriter font-bold text-emerald-800">16.8 mm</td>
                    <td className="py-1 text-emerald-800">Cactus Nectar / 仙人掌花蜜</td>
                    <td className="py-1 text-right font-typewriter text-stone-400">GAL-SCA-053</td>
                  </tr>

                  {/* Row 4 */}
                  <tr className={`border-b border-[#2b2722]/10 transition-colors duration-500 ${beat >= 1 ? "bg-blue-50/45 font-bold" : "opacity-40"}`}>
                    <td className="py-1 font-serif-vintage italic">G. fuliginosa (Small Ground Finch)</td>
                    <td className="py-1 font-typewriter text-[0.75cqw]">Floreana</td>
                    <td className="py-1 text-right font-typewriter">6.1 mm</td>
                    <td className="py-1 text-right font-typewriter">8.5 mm</td>
                    <td className="py-1">Soft Grass Seeds / 细软草籽</td>
                    <td className="py-1 text-right font-typewriter text-stone-400">GAL-FUL-089</td>
                  </tr>

                  {/* Row 5 */}
                  <tr className={`border-b border-[#2b2722]/10 transition-colors duration-500 ${beat >= 2 ? "bg-emerald-50/35 font-bold text-[#065f46]" : "opacity-40"}`}>
                    <td className="py-1 font-serif-vintage italic">C. pallidus (Woodpecker Finch)</td>
                    <td className="py-1 font-typewriter text-[0.75cqw]">James Island</td>
                    <td className="py-1 text-right font-typewriter">7.8 mm</td>
                    <td className="py-1 text-right font-typewriter">14.2 mm</td>
                    <td className="py-1">Larvae & Bark Insects / 树皮昆虫</td>
                    <td className="py-1 text-right font-typewriter text-stone-400">GAL-PAL-031</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footer notes */}
            <div className="z-10 flex justify-between items-end border-t border-[#2b2722]/15 pt-2 pl-[2cqw]">
              <div className="flex flex-col max-w-[50cqw]">
                <span className="font-cursive text-[1.4cqw] text-[#705c43] font-bold">
                  “注意：雀喙深度与长度之变异，严格对齐群岛食物种子之平均硬度，此乃自然选择之铁证。”
                </span>
                <span className="font-sans-vintage text-[0.72cqw] text-stone-500 leading-none">
                  "Variance in bill depth and length strictly corresponds to average hardness of local seeds. Nature's ultimate proof."
                </span>
              </div>
              <span className="font-typewriter text-[0.7cqw] text-stone-400 italic">
                Registered under the direct supervision of C. Darwin, Esq.
              </span>
            </div>

            {/* Curatorial British Museum Registration Stamp (Slammed down on beat 2) */}
            <div 
              className={`absolute bottom-[3cqh] right-[3cqw] w-[14cqw] h-[14cqw] rounded-full border-[3px] border-dashed border-red-700/80 flex flex-col items-center justify-center text-red-700/80 font-bold select-none pointer-events-none ${
                beat === 2 
                  ? 'scale-100 rotate-[-12deg] opacity-85 shadow-[0_0_15px_rgba(185,28,28,0.1)]' 
                  : 'scale-[1.8] opacity-0 rotate-[25deg]'
              }`}
              style={{ 
                transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.35)',
                backgroundImage: 'radial-gradient(circle, transparent 70%, rgba(185,28,28,0.03) 71%)'
              }}
            >
              <div className="text-[0.6cqw] font-typewriter tracking-widest text-center border-b border-red-700/80 pb-0.5 uppercase leading-none">
                BRITISH MUSEUM
              </div>
              <div className="text-[1.1cqw] font-cursive my-0.5 tracking-tight font-black leading-none">
                C. Darwin
              </div>
              <div className="text-[0.7cqw] font-typewriter font-bold tracking-widest leading-none">
                SPECIMEN 1835
              </div>
              <div className="text-[0.5cqw] font-mono border-t border-red-700/80 pt-0.5 tracking-wider uppercase mt-0.5">
                * ZOOLOGY DEPT *
              </div>
              <div className="absolute inset-0.5 border border-red-700/80 rounded-full" />
              <div className="absolute inset-1.5 border-[1.5px] border-red-700/80 rounded-full" />
            </div>
          </div>

        </div>
      </div>

      {/* ==========================================
          BESPOKE NAVIGATION: Illustrated Finch Beaks Row
          ========================================== */}
      {!isThumbnail && onNavigate && (
        <div className="w-[8.5cqw] h-full border-l border-[#2b2722]/15 bg-[#F5F2EA] flex flex-col justify-around items-center py-[2cqh] z-20 shadow-md">
          {/* Top compass-like separator */}
          <div className="flex flex-col items-center opacity-40">
            <svg viewBox="0 0 24 24" className="w-[2cqw] h-[2cqw] text-[#2b2722]">
              <path d="M12,2 L12,22 M2,12 L22,12 M12,6 L15,12 L12,18 L9,12 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
            <span className="text-[0.55cqw] font-typewriter mt-1 tracking-widest">NAVIGATOR</span>
          </div>

          {/* Navigation Beak Buttons */}
          <div className="flex flex-col gap-[1.5cqh] my-auto">
            {[1, 2, 3, 4, 5].map((sNum) => {
              const active = scene === sNum;
              return (
                <button 
                  key={sNum}
                  onClick={() => onNavigate(sNum, 0)} 
                  className={`flex flex-col items-center justify-center w-[6.5cqw] h-[14cqh] rounded-lg transition-all duration-500 border ${
                    active 
                      ? "bg-[#FAF8F2] border-[#2b2722]/40 shadow-inner scale-105" 
                      : "border-transparent opacity-50 hover:opacity-100 hover:scale-102"
                  }`}
                >
                  <span className="text-[0.8cqw] font-typewriter tracking-wider mb-1 font-bold text-[#705c43]">
                    {`0${sNum}`}
                  </span>
                  <svg viewBox="0 0 60 40" className="w-[5.2cqw] h-[6cqh] text-[#2b2722]">
                    {/* Head base */}
                    <path d="M 5,20 Q 8,5 25,5 Q 32,5 35,12" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1 0.5" className="opacity-40" />
                    {/* Eye */}
                    <circle cx="22" cy="12" r="1.5" fill="currentColor" />
                    {active && <circle cx="21.5" cy="11" r="0.5" fill="#FAF8F2" />}
                    
                    {/* Beak parts - dynamic rotation when active representing the beak "opening" slightly */}
                    {sNum === 1 && (
                      // Large Ground Finch (Huge deep beak)
                      <g>
                        <path 
                          d="M 32,10 L 52,20 Q 40,25 32,23 Z" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="1.2" 
                          style={{ 
                            transform: active ? 'rotate(-10deg) translate(-2px, -3px)' : 'none',
                            transformOrigin: '32px 16px',
                            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                          }} 
                        />
                        <path 
                          d="M 32,23 Q 40,25 52,20 L 32,32 Z" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="1" 
                          style={{ 
                            transform: active ? 'rotate(6deg) translate(-1px, 2px)' : 'none',
                            transformOrigin: '32px 23px',
                            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                          }} 
                        />
                      </g>
                    )}

                    {sNum === 2 && (
                      // Medium Ground Finch (Medium heavy beak)
                      <g>
                        <path 
                          d="M 32,11 L 49,20 Q 39,24 32,22 Z" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="1.2" 
                          style={{ 
                            transform: active ? 'rotate(-10deg) translate(-2px, -3px)' : 'none',
                            transformOrigin: '32px 16px',
                            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                          }} 
                        />
                        <path 
                          d="M 32,22 Q 39,24 49,20 L 32,29 Z" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="1" 
                          style={{ 
                            transform: active ? 'rotate(6deg) translate(-1px, 2px)' : 'none',
                            transformOrigin: '32px 22px',
                            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                          }} 
                        />
                      </g>
                    )}

                    {sNum === 3 && (
                      // Small Ground Finch (Small delicate beak)
                      <g>
                        <path 
                          d="M 32,13 L 44,20 Q 37,22 32,21 Z" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="1.2" 
                          style={{ 
                            transform: active ? 'rotate(-10deg) translate(-1px, -2px)' : 'none',
                            transformOrigin: '32px 17px',
                            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                          }} 
                        />
                        <path 
                          d="M 32,21 Q 37,22 44,20 L 32,25 Z" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="1" 
                          style={{ 
                            transform: active ? 'rotate(6deg) translate(-1px, 1px)' : 'none',
                            transformOrigin: '32px 21px',
                            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                          }} 
                        />
                      </g>
                    )}

                    {sNum === 4 && (
                      // Cactus Finch (Long, slender beak)
                      <g>
                        <path 
                          d="M 32,12 L 53,19 Q 39,21 32,20 Z" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="1.2" 
                          style={{ 
                            transform: active ? 'rotate(-8deg) translate(-2px, -2px)' : 'none',
                            transformOrigin: '32px 16px',
                            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                          }} 
                        />
                        <path 
                          d="M 32,20 Q 39,21 53,19 L 32,24 Z" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="1" 
                          style={{ 
                            transform: active ? 'rotate(5deg) translate(-1px, 1px)' : 'none',
                            transformOrigin: '32px 20px',
                            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                          }} 
                        />
                      </g>
                    )}

                    {sNum === 5 && (
                      // Woodpecker Finch (Very sharp straight beak)
                      <g>
                        <path 
                          d="M 32,13 L 50,18 L 32,19 Z" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="1.2" 
                          style={{ 
                            transform: active ? 'rotate(-8deg) translate(-1px, -1.5px)' : 'none',
                            transformOrigin: '32px 16px',
                            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                          }} 
                        />
                        <path 
                          d="M 32,19 L 50,18 L 32,22 Z" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="1" 
                          style={{ 
                            transform: active ? 'rotate(5deg) translate(-1px, 1px)' : 'none',
                            transformOrigin: '32px 19px',
                            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                          }} 
                        />
                      </g>
                    )}
                  </svg>
                  <span className="text-[0.65cqw] font-sans-vintage uppercase tracking-tight text-[#705c43] mt-1 line-clamp-1 truncate w-full text-center px-1 font-bold">
                    {sNum === 1 && "Magni."}
                    {sNum === 2 && "Fortis"}
                    {sNum === 3 && "Fulig."}
                    {sNum === 4 && "Scandens"}
                    {sNum === 5 && "Pallidus"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bottom coordinates block */}
          <div className="flex flex-col items-center opacity-40 font-typewriter text-[0.55cqw] text-center">
            <span>0°54′S</span>
            <span>90°30′W</span>
          </div>
        </div>
      )}
    </div>
  );
}
