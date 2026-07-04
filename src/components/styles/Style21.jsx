import React from "react";

export const getMetadata = (lang) => ({
  id: "21",
  tier: "C",
  name: lang === "zh" ? "达尔文加拉帕戈斯雀喙演化" : "Darwin's Finches Evolution",
  theme: lang === "zh" ? "加拉帕戈斯物种起源演化" : "Galapagos Species Speciation Studies",
  densityLabel: lang === "zh" ? "雀喙演化" : "Finch Evolution Ledger",
  colors: { bg: "bg-[#faf6ee]", ink: "text-[#2d2920]", panel: "border-[#ded7c8]" },
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

export default function Style21({ scene, beat, language, isThumbnail }) {
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
      <div className="relative w-full h-full flex items-center justify-center border border-[#d2c9b6] bg-[#FAF6EE] rounded-[0.5cqw] overflow-hidden p-[1cqw] shadow-inner">
        {/* Sketchbook grid lining */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] grid grid-cols-12 grid-rows-12 h-full w-full" style={{
          backgroundImage: "linear-gradient(#4d3625 1px, transparent 1px), linear-gradient(90deg, #4d3625 1px, transparent 1px)",
          backgroundSize: "3cqw 3cqw"
        }} />

        {/* Ink margins */}
        <div className="absolute inset-[0.8cqw] border border-[#d2c9b6]/80 pointer-events-none" />
        <div className="absolute right-[3cqw] top-0 bottom-0 w-[1px] bg-[#2a68a8] opacity-25 pointer-events-none" /> {/* Blue guide line */}

        {scene === 1 && (
          <div className="relative flex flex-col items-center justify-center w-full h-full text-center p-[1cqw]">
            {/* Elegant Hand Drawn Finch Beak SVG Profile */}
            <svg viewBox="0 0 120 120" className="w-[15cqw] h-[15cqw] text-[#4d3b25] opacity-90">
              <path d="M 10,60 Q 30,55 50,55 Q 70,55 90,60" fill="none" stroke="currentColor" strokeWidth="0.25" strokeDasharray="1 1" />
              {/* Finch Head Outline */}
              <path d="M 20,70 Q 25,35 55,30 Q 75,30 85,45 L 110,60 L 75,75 Q 55,85 20,80 Z" fill="none" stroke="currentColor" strokeWidth="0.45" />
              {/* Eye */}
              <circle cx="60" cy="45" r="2.2" fill="currentColor" />
              <circle cx="59.5" cy="44.2" r="0.6" fill="#fff" />
              {/* Beak Highlight Curve */}
              <path d="M 75,41 L 110,60 L 75,75 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <path d="M 75,41 L 110,60" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /> {/* Hard upper beak line */}
              <line x1="75" y1="58" x2="110" y2="60" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1 0.5" /> {/* Mouth split */}
              {/* Text markings */}
              <text x="92" y="38" fontSize="4.5" textAnchor="middle" className="font-serif italic font-bold">Rostrum conicum</text>
              <line x1="92" y1="41" x2="90" y2="52" stroke="currentColor" strokeWidth="0.2" />
              <text x="60" y="94" fontSize="4.2" textAnchor="middle" className="font-serif italic tracking-widest opacity-60">GEOSPIZA MAGNIROSTRIS • SPECIMEN No. 12</text>
            </svg>
            <div className={`mt-[1cqh] font-serif italic text-[#705c43] text-[1.1cqw] font-bold ${getBeatClass(1)}`}>
              Fig. I : Geological Speciation of Geospiza magnirostris, HMS Beagle, Chatham Island.
            </div>
          </div>
        )}

        {scene === 2 && (
          <div className="grid grid-cols-2 gap-[1cqw] w-full h-full p-[1cqw]">
            {/* Left: Fortis */}
            <div className="flex flex-col justify-between border-r border-[#eddcc5] pr-[0.8cqw]">
              <span className="font-serif text-[1.05cqw] text-[#705c43] font-bold uppercase tracking-wider text-center border-b border-[#eddcc5] pb-1 mb-2">
                Geospiza fortis (Thick)
              </span>
              <div className="flex-1 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-[10cqw] h-[10cqw] text-[#4d3b25]">
                  {/* Head & thick beak profile */}
                  <path d="M 15,65 Q 20,35 50,30 Q 68,30 75,42 L 95,58 L 72,70 Q 50,80 15,75 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="52" cy="44" r="2" fill="currentColor" />
                  <path d="M 68,39 L 95,58 L 72,70 Z" fill="none" stroke="currentColor" strokeWidth="1" /> {/* Deep beak */}
                  {/* Beak depth dimension line */}
                  <line x1="68" y1="39" x2="72" y2="70" stroke="#a03822" strokeWidth="0.3" strokeDasharray="1 1" />
                  <text x="75" y="55" fontSize="4.5" fill="#a03822" className="font-sans font-bold">12mm</text>
                  <text x="50" y="93" fontSize="3.8" textAnchor="middle" className="font-serif italic opacity-60">Seed Crushing Force</text>
                </svg>
              </div>
              <span className="font-serif text-[0.8cqw] text-[#7a654c] italic text-center">Thick deep beak delivers massive leverage to crush nuts.</span>
            </div>
            {/* Right: Scandens */}
            <div className="flex flex-col justify-between pl-[0.8cqw]">
              <span className="font-serif text-[1.05cqw] text-[#705c43] font-bold uppercase tracking-wider text-center border-b border-[#eddcc5] pb-1 mb-2">
                Geospiza scandens (Slender)
              </span>
              <div className="flex-1 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-[10cqw] h-[10cqw] text-[#4d3b25]">
                  {/* Head & slender beak profile */}
                  <path d="M 15,65 Q 20,35 50,32 Q 65,32 72,42 L 98,54 L 72,62 Q 50,75 15,70 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="52" cy="44" r="2" fill="currentColor" />
                  <path d="M 68,40 L 98,54 L 72,62 Z" fill="none" stroke="currentColor" strokeWidth="1" /> {/* Long beak */}
                  {/* Beak length dimension line */}
                  <line x1="68" y1="40" x2="98" y2="54" stroke="#2a68a8" strokeWidth="0.3" strokeDasharray="1 1" />
                  <text x="82" y="45" fontSize="4.5" fill="#2a68a8" className="font-sans font-bold">16mm</text>
                  <text x="50" y="93" fontSize="3.8" textAnchor="middle" className="font-serif italic opacity-60">Cactus probing focus</text>
                </svg>
              </div>
              <span className="font-serif text-[0.8cqw] text-[#705c43] italic text-center">Long pointed beak probes flower nectar and peels fruits.</span>
            </div>
          </div>
        )}

        {scene === 3 && (
          <div className="relative w-full h-full flex flex-col justify-between p-[1cqw]">
            <div className="flex justify-between items-center border-b border-[#dfd7c8] pb-[0.5cqh]">
              <span className="font-serif text-[1.1cqw] text-[#705c43] uppercase tracking-wider font-bold">Chronology of Speciation Events</span>
              <span className="font-mono text-[0.8cqw] text-[#7a654c]">JOURNAL • LIB. III</span>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-[1cqh] my-[1cqh]">
              <div className={`flex items-start gap-2.5 p-[0.6cqw] bg-[#faf6ed]/70 border border-[#dfd7c8] rounded-sm ${getBeatClass(0)}`}>
                <span className="font-mono font-bold text-[#705c43] text-[0.9cqw] mt-0.5">[Stage I]</span>
                <div>
                  <h4 className="font-bold text-[#38281a] text-[0.95cqw] leading-none mb-1">Damp Abundant Years</h4>
                  <p className="text-[0.8cqw] text-[#7a5a3d] leading-tight">Soft seeds plentiful. Thick and thin beaks feed side-by-side with zero adaptive competition.</p>
                </div>
              </div>
              <div className={`flex items-start gap-2.5 p-[0.6cqw] bg-[#faf6ed]/70 border border-[#dfd7c8] rounded-sm ${getBeatClass(1)}`}>
                <span className="font-mono font-bold text-[#705c43] text-[0.9cqw] mt-0.5">[Stage II]</span>
                <div>
                  <h4 className="font-bold text-[#38281a] text-[0.95cqw] leading-none mb-1">Galapagos Great Drought</h4>
                  <p className="text-[0.8cqw] text-[#7a5a3d] leading-tight">Rainfall drops to zero. Soft seeds deplete, leaving only spiked, heavy woody caltrop nuts.</p>
                </div>
              </div>
              <div className={`flex items-start gap-2.5 p-[0.6cqw] bg-[#faf6ed]/70 border border-[#705c43]/40 rounded-sm ${getBeatClass(2)}`}>
                <span className="font-mono font-bold text-[#705c43] text-[0.9cqw] mt-0.5">[Stage III]</span>
                <div>
                  <h4 className="font-bold text-[#705c43] text-[0.95cqw] leading-none mb-1">Deep Beak Adaptation Victory</h4>
                  <p className="text-[0.8cqw] text-[#705c43] leading-tight">Thin-beaked finches starve. Deep-beaked survivors breed, shifting the genetic baseline depth.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {scene === 4 && (
          <div className="grid grid-cols-2 grid-rows-2 gap-[1cqw] w-full h-full p-[0.5cqw]">
            <div className="border border-[#dfd7c8] bg-[#faf3dc] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#705c43] border-b border-[#dfd7c8] pb-[0.2cqh]">Sector I: Crushing pressure</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Max Load (Fortis):</span><span className="text-[#a03822] font-bold">42 Newtons</span></div>
                <div className="flex justify-between"><span>Max Load (Parvula):</span><span>12 Newtons</span></div>
                <div className="flex justify-between"><span>Biomechanical Cap:</span><span className="text-emerald-700 font-bold">EXCELLENT</span></div>
              </div>
            </div>
            <div className="border border-[#dfd7c8] bg-[#faf3dc] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#705c43] border-b border-[#dfd7c8] pb-[0.2cqh]">Sector II: Probing Rates</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Probe Depth (Scandens):</span><span className="text-emerald-700 font-bold">16.4 mm</span></div>
                <div className="flex justify-between"><span>Pollen Yield (Scandens):</span><span className="text-emerald-700 font-bold">3.2x Standard</span></div>
                <div className="flex justify-between"><span>Extraction Cost:</span><span>Minimal Resistance</span></div>
              </div>
            </div>
            <div className="border border-[#dfd7c8] bg-[#faf3dc] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#705c43] border-b border-[#dfd7c8] pb-[0.2cqh]">Sector III: Cladogram Splits</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Genetic Divergence:</span><span>2.1M Years</span></div>
                <div className="flex justify-between"><span>Active Subspecies:</span><span className="text-emerald-700 font-bold">13 Groups</span></div>
                <div className="flex justify-between"><span>Founder Group size:</span><span>Singular mainland</span></div>
              </div>
            </div>
            <div className="border border-[#dfd7c8] bg-[#faf3dc] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#705c43] border-b border-[#dfd7c8] pb-[0.2cqh]">Sector IV: Survival Limits</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Drought Population loss:</span><span className="text-[#a03822] font-bold">-85.4% Max</span></div>
                <div className="flex justify-between"><span>Thick Beak survival:</span><span className="text-emerald-700 font-bold">89% Selected</span></div>
                <div className="flex justify-between"><span>Subsequent Breed Rate:</span><span className="text-emerald-700 font-bold">MAXIMUM</span></div>
              </div>
            </div>
          </div>
        )}

        {scene === 5 && (
          <div className="relative w-full h-full flex flex-col justify-between p-[0.8cqw] font-serif text-[#38281a]">
            <div className="text-center font-bold text-[1cqw] uppercase tracking-widest border-b-2 border-[#705c43] pb-[0.2cqh] mb-[0.5cqh] text-[#705c43]">
              Species Speciation & Morphological Ledger (Galapagos 1835)
            </div>
            <div className="flex-1 flex flex-col justify-center my-[0.2cqw]">
              <table className="w-full text-left text-[0.75cqw] border-collapse font-serif">
                <thead>
                  <tr className="border-b border-[#705c43]/40 font-bold text-[#705c43]">
                    <th className="py-1">Species Name</th>
                    <th className="py-1">Primary Dietary Niche</th>
                    <th className="py-1 text-right">Beak Depth (mm)</th>
                    <th className="py-1 text-right">Beak Length (mm)</th>
                    <th className="py-1 text-right">Adaptive Select Rate</th>
                  </tr>
                </thead>
                <tbody className="text-[#57412f] font-mono text-[0.72cqw]">
                  <tr className={`border-b border-[#dfd7c8]/40 ${getBeatClass(0)}`}>
                    <td className="py-1 font-serif font-bold italic">G. magnirostris (Large)</td>
                    <td className="py-1">Hard woody seeds & nuts</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">14.2 mm</td>
                    <td className="py-1 text-right">15.5 mm</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">98.5% (High)</td>
                  </tr>
                  <tr className={`border-b border-[#dfd7c8]/40 ${getBeatClass(0)}`}>
                    <td className="py-1 font-serif font-bold italic">G. fortis (Medium)</td>
                    <td className="py-1">Intermediate seeds & spikes</td>
                    <td className="py-1 text-right">10.5 mm</td>
                    <td className="py-1 text-right">12.1 mm</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">89.0% (High)</td>
                  </tr>
                  <tr className={`border-b border-[#dfd7c8]/40 ${getBeatClass(1)}`}>
                    <td className="py-1 font-serif font-bold italic text-[#705c43]">G. scandens (Cactus)</td>
                    <td className="py-1 text-[#705c43]">Cactus nectar & flowers</td>
                    <td className="py-1 text-right font-bold text-[#705c43]">8.2 mm</td>
                    <td className="py-1 text-right font-bold text-[#705c43]">16.8 mm</td>
                    <td className="py-1 text-right">92.4% (Stable)</td>
                  </tr>
                  <tr className={`border-b border-[#dfd7c8]/40 ${getBeatClass(1)}`}>
                    <td className="py-1 font-serif font-bold italic">G. fuliginosa (Small)</td>
                    <td className="py-1">Soft grass seeds</td>
                    <td className="py-1 text-right text-[#a03822] font-bold">6.1 mm</td>
                    <td className="py-1 text-right">8.5 mm</td>
                    <td className="py-1 text-right text-[#a03822] font-bold">12.2% (Vulnerable)</td>
                  </tr>
                  <tr className={`${getBeatClass(2)}`}>
                    <td className="py-1 font-serif font-bold italic">C. pallidus (Woodpecker)</td>
                    <td className="py-1">Larvae & bark insects</td>
                    <td className="py-1 text-right">7.8 mm</td>
                    <td className="py-1 text-right">14.2 mm</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">95.0% (Stable)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="border-t border-[#dfd7c8] pt-1 text-[0.7cqw] text-[#7a654c] italic text-center font-serif">
              Monograph: Beagle Zoology Archives, British Museum of Natural History Catalog No. 1835-DARW.
            </div>
          </div>
        )}

        {/* Vintage Natural History Specimen Collector Stamp Label (Applied on Beat 1 for Scene 5) */}
        {scene === 5 && (
          <div className={`absolute bottom-[1.8cqw] right-[1.8cqw] w-[6cqw] h-[3cqw] transition-all duration-1000 ${beat >= 1 ? "opacity-90 scale-100 rotate-[-4deg]" : "opacity-15 scale-95 rotate-0"} pointer-events-none select-none border border-[#7a654c] bg-[#FAF6EE] p-1 flex flex-col justify-between text-left shadow-sm font-sans`}>
            <div className="flex justify-between items-center text-[0.55cqw] font-bold border-b border-[#dfd7c8] pb-0.5 text-[#705c43] tracking-widest">
              <span>BRITISH MUSEUM</span>
              <span>1835</span>
            </div>
            <div className="text-[0.7cqw] font-serif font-bold text-[#2d2920] italic uppercase leading-none mt-0.5">C. Darwin Spec.</div>
            <div className="text-[0.5cqw] font-mono text-stone-400 text-right mt-auto">ID: GAL-FIN-012</div>
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
          <span className="font-sans text-[1.2cqw] font-bold tracking-wider uppercase opacity-65 text-[#7a654c] border-b border-[#dfd7c8] pb-[0.5cqh] inline-block">
            {meta.theme}
          </span>
          <h1 className="text-[3.2cqw] leading-[1.1] font-black tracking-tight font-serif mt-[1cqh] text-[#705c43]">
            {currentBeat.title}
          </h1>
          <p className="text-[1.3cqw] leading-[1.4] opacity-95 font-serif mt-[1.5cqh] text-[#382e21]">
            {currentBeat.body}
          </p>
        </div>

        {/* Marginal Editorial Footnote */}
        <div className="flex flex-col gap-[0.5cqh] mt-[2cqh] border-t border-[#dfd7c8] pt-[1cqh]">
          <div className="flex justify-between text-[0.8cqw] font-mono text-[#7a654c]">
            <span>FIELD RECORDS: HMS BEAGLE</span>
            <span>CHRONO: AD 1835 IN GALAPAGOS</span>
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
