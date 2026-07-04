import React from "react";
import { Cpu, Terminal, Shield, Database, Activity, Layers, Compass, CheckCircle, Award, AlertCircle } from "lucide-react";

export const getMetadata = (lang) => {
  const isZh = lang === "zh";
  return {
    id: "10",
    tier: "S",
    density: "high",
    name: isZh ? "迈锡尼线形文字 B 破译" : "Deciphering Linear B",
    theme: isZh ? "古希腊语言考古破译" : "Aegean Script Decipherment",
    densityLabel: isZh ? "破译控制台" : "Decoder Console",
    colors: { bg: "bg-[#0a0f12]", ink: "text-[#ece0cf]", panel: "border-[#f59e0b]/15", accent: "text-[#f59e0b]" },
    typography: { header: "font-serif", body: "font-mono" },
    scenes: [
      {
        id: 1,
        title: isZh ? "泥板语料载入与去噪" : "Clay Corpus Loading & Denoising",
        beats: [
          { id: 1, action: isZh ? "载入泥板" : "Load Corpus", title: isZh ? "克诺索斯宫殿泥板导入" : "Knossos Palace Tablet Corpus Ingest", body: isZh ? "自克诺索斯遗址出土的黏土碑铭档案入库，初始化字符形态学扫描，识别原始泥板纹路。" : "Ingesting clay archives excavated from Knossos palace. Initializing character morphology scans to outline weathered script borders." },
          { id: 2, action: isZh ? "笔画提取" : "Isolate Symbols", title: isZh ? "字符边界与笔触切分" : "Scribe Stroke Boundary Segmentation", body: isZh ? "自黏土划痕中区分书写者下笔深浅、倾角，将线条碎片归并为独立的文字符号单元。" : "Dissecting stylus depth and angles from clay incisions, merging fragmented strokes into unique symbolic blocks." },
          { id: 3, action: isZh ? "噪声滤除" : "Filter Weathering", title: isZh ? "风化裂纹与杂质去噪" : "Corpus Denoising & Line Correction", body: isZh ? "剥离三千年地质挤压产生的碎裂纹理，提纯核心线形笔画，生成高保真数字印本。" : "Stripping cracks caused by three millennia of geological stress, recovering pure linear strokes to yield high-fidelity prints." }
        ]
      },
      {
        id: 2,
        title: isZh ? "元音辅音对齐矩阵" : "The Ventris Syllabic Grid",
        beats: [
          { id: 1, action: isZh ? "词尾分类" : "Suffix Mapping", title: isZh ? "文特里斯对齐矩阵重组" : "The Ventris Algebraic Suffix Sieve", body: isZh ? "统计相同词根在不同语境下的词尾屈折，将具有相同辅音或元音的字符分列对齐，构建网格体系。" : "Mapping inflectional suffix variants of identical roots, grouping signs with shared consonants or vowels to assemble the grid." },
          { id: 2, action: isZh ? "地名校验" : "Verify Toponyms", title: isZh ? "阿卡迪亚地名音值校验" : "Archaic Toponym Phonetic Verification", body: isZh ? "带入克诺索斯（ko-no-so）、泰利索斯（tu-ri-so）等迈锡尼地名，验证元音辅音连锁，开启音值大门。" : "Substituting known Aegean place names like Knossos (ko-no-so) and Tylissos (tu-ri-so) to unlock interlocking phonetic coordinates." },
          { id: 3, action: isZh ? "音节锁定" : "Lock Phonetics", title: isZh ? "迈锡尼古音值批量锁定" : "Mycenaean Syllabary Phonetic Lock", body: isZh ? "锁定首批87个音节拼音值（如a-ko-ra, ko-wo），确定该语言为荷马史诗前五百年的古希腊语。" : "Locking initial phonetic values for 87 signs (e.g., a-ko-ra, ko-wo), confirming the script as Greek 500 years pre-Homer." }
        ]
      },
      {
        id: 3,
        title: isZh ? "象形意符与词汇翻译" : "Ideograms & Syntactic Parsing",
        beats: [
          { id: 1, action: isZh ? "象形识别" : "Find Ideograms", title: isZh ? "大宗意符特征分类" : "Ideographic Category Extraction", body: isZh ? "自动识别并标记代表战车、青铜剑、双耳罐、马匹及麦穗的象形意符，建立图画语汇册。" : "Detecting pictographic ideograms indicating war chariots, bronze swords, amphorae, horses, and wheat seeds." },
          { id: 2, action: isZh ? "盘点账册" : "Parse Ledgers", title: isZh ? "青铜时代官办账目翻译" : "Bronze Age Palace Ledger Decipherment", body: isZh ? "将音节拼写与紧邻的象形数字结合，翻译克里特岛官署赋税、武器库盘点及神庙贡品清单。" : "Combining syllabic spelling with adjacent pictorial quantities to decode palace taxes, armory stock, and temple offerings." },
          { id: 3, action: isZh ? "语法合成" : "Sentence Synthesis", title: isZh ? "完整王室诏令语义拼合" : "Royal Decree Semantic Reconstruction", body: isZh ? "拼合迈锡尼复杂的动词屈折与双格名词，复原结构完整的王宫祭祀、农政大典及动员诏令。" : "Synthesizing Mycenaean verb conjugation and noun duals, fully restoring royal sacrificial decrees and army mobilizations." }
        ]
      },
      {
        id: 4,
        title: isZh ? "统计熵与词同源性校验" : "Statistical Entropy & Homology",
        beats: [
          { id: 1, action: isZh ? "音素熵测" : "Entropy Check", title: isZh ? "字符组合统计学熵自检" : "Phonotactic Combination Entropy Analysis", body: isZh ? "对87个音节序列执行相邻熵、出现频次测算，证明其符合人类自然语言发音规律而非杂乱噪声。" : "Measuring adjacent entropy and sign frequency curves over sign sequences, proving spelling conforms to human phonotactics." },
          { id: 2, action: isZh ? "印欧同源" : "Indo-European Match", title: isZh ? "印欧语系同源词对齐" : "Indo-European Vocabulary Homology", body: isZh ? "将解出的词根（如ma-te, pa-te）与古梵语、拉丁语、古典希腊语同源对照，确认其印欧语底色。" : "Cross-matching decoded roots (e.g., ma-te, pa-te) with Sanskrit, Latin, and classical Attic to solidify IE ancestral status." },
          { id: 3, action: isZh ? "日志生成" : "Log Confidence", title: isZh ? "破译置信度度量账本生成" : "Statistical Decipherment Proof Ledger", body: isZh ? "输出高维度统计置信度指标，排除虚假巧合，签发符合考古语言学界公认标准的科学破译日志。" : "Compiling high-dimensional statistical confidence logs, eliminating false positives, signing off academic proof protocols." }
        ]
      },
      {
        id: 5,
        title: isZh ? "考古破译总成控制台" : "Complete Decipherment Dashboard",
        beats: [
          { id: 1, action: isZh ? "数据流破译" : "Stream Decoding", title: isZh ? "碑铭语料库全流编译" : "Ingested Inscription Stream Decoding", body: isZh ? "开启古文字批量破译管道，各路新出土泥板经去噪、切分、语汇分析，实时吐出希腊语明文译本。" : "Opening batch decipherment pipes. Freshly discovered tablets stream through denoising, segmentation, and lexicon filters." },
          { id: 2, action: isZh ? "解码全谱" : "Map Full Spectrum", title: isZh ? "音节与意符全网解码网格" : "Syllabary & Ideogram Universal Matrix", body: isZh ? "全面展开87个音节符号、120余个商品象形符号映射网格，信号通红亮起，两阶数据库融会贯通。" : "Spanning full maps of 87 syllables and 120+ commodities. Interlocking grid glowing as cross-references are locked." },
          { id: 3, action: isZh ? "学术签发" : "Academic Stamp", title: isZh ? "迈锡尼史实解密大纲签发" : "Mycenaean Historic Decryption Sign-off", body: isZh ? "文特里斯-查德威克破译体系终结，迈锡尼文明行政、宗教、军事细节全面结账，大获全胜。" : "Ventris-Chadwick decoding ledger closed. Bronze Age palace archives laid bare in undisputed, glorious green clarity." }
        ]
      }
    ]
  };
};

export default function Style10({ scene, beat, language, onNavigate, isThumbnail }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];
  const isZh = language === "zh";

  // Top Laser Scan Ticker Navigation
  const renderNavigation = () => {
    if (isThumbnail || !onNavigate) return null;

    // Linear B symbols representing each of the 5 scenes, positioned horizontally
    const navNodes = [
      { s: 1, x: 150, label: isZh ? "泥板导入" : "Corpus", glyph: "ka", path: "M 35 25 H 65 M 50 25 V 70 M 40 40 H 60 M 40 55 H 60" },
      { s: 2, x: 325, label: isZh ? "对齐网格" : "Grid", glyph: "se", path: "M 40 25 H 60 V 65 H 40 Z M 40 45 H 60 M 50 25 V 65" },
      { s: 3, x: 500, label: isZh ? "句法重构" : "Syntax", glyph: "to", path: "M 50 20 V 70 M 35 70 H 65 M 35 45 C 35 30, 50 30, 50 45 M 65 45 C 65 30, 50 30, 50 45" },
      { s: 4, x: 675, label: isZh ? "多地联档" : "Archives", glyph: "no", path: "M 50 20 V 65 M 35 35 L 50 48 L 65 35 M 35 65 H 65" },
      { s: 5, x: 850, label: isZh ? "总成控制" : "Dashboard", glyph: "jo", path: "M 50 22 A 10 10 0 1 1 50 42 A 10 10 0 1 1 50 22 M 50 42 V 70 M 35 70 H 65" }
    ];

    return (
      <div className="w-full h-[6.5cqh] relative select-none shrink-0 z-20 bg-[#0d1319]/40 border border-[#f59e0b]/10 rounded-lg overflow-visible px-[2cqw] flex items-center justify-center">
        <svg viewBox="0 0 1000 80" className="w-full h-full overflow-visible">
          <defs>
            <filter id="crustGlow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Symmetrical horizontal laser grid scanline */}
          <line
            x1="50"
            y1="40"
            x2="950"
            y2="40"
            stroke="#f59e0b"
            strokeWidth="3"
            className="opacity-20 blur-[1px]"
          />
          <line
            x1="50"
            y1="40"
            x2="950"
            y2="40"
            stroke="#f59e0b"
            strokeWidth="1"
            className="opacity-70"
          />

          {/* Grid fine ticks along scanline */}
          <path
            d="M 50 35 V 45 M 150 37 V 43 M 325 37 V 43 M 500 35 V 45 M 675 37 V 43 M 850 37 V 43 M 950 35 V 45"
            stroke="#f59e0b"
            strokeWidth="1"
            className="opacity-40"
          />

          {navNodes.map((node) => {
            const isActive = scene === node.s;
            return (
              <g
                key={node.s}
                className="cursor-pointer group"
                onClick={() => onNavigate(node.s, 0)}
              >
                {/* Invisible larger click detector */}
                <circle cx={node.x} cy={40} r="35" className="fill-transparent stroke-none" />

                {/* Stenciled Box under each glyph */}
                <rect
                  x={node.x - 22}
                  y={12}
                  width="44"
                  height="56"
                  rx="4"
                  className={`transition-all duration-300 ${
                    isActive
                      ? "fill-[#0c1219]/90 stroke-[#f59e0b] stroke-[1.5px] filter drop-shadow-[0_0_6px_rgba(245,158,11,0.4)]"
                      : "fill-[#050910]/40 stroke-[#f59e0b]/10 stroke-[1px] group-hover:stroke-[#ece0cf]/30 group-hover:fill-[#050910]/80"
                  }`}
                />

                {/* Linear B Character stenciled inside the box */}
                <g transform={`translate(${node.x - 50}, -10)`}>
                  <path
                    d={node.path}
                    fill="none"
                    className={`transition-all duration-300 ${
                      isActive
                        ? "stroke-[#f59e0b] stroke-[2px] filter url(#crustGlow)"
                        : "stroke-[#ece0cf]/30 stroke-[1.2px] group-hover:stroke-[#ece0cf]/70"
                    }`}
                  />
                </g>

                {/* Glowing Active Particle Flashes */}
                {isActive && (
                  <g className="pointer-events-none">
                    <circle cx={node.x - 28} cy={30} r="1.5" className="fill-[#f59e0b] animate-ping opacity-70" />
                    <circle cx={node.x + 30} cy={52} r="1" className="fill-[#f59e0b] animate-pulse opacity-90" />
                    <circle cx={node.x - 18} cy={58} r="2" className="fill-[#f59e0b] animate-ping opacity-60" />
                    <circle cx={node.x + 24} cy={24} r="1.5" className="fill-[#f59e0b] animate-pulse opacity-90" />
                  </g>
                )}

                {/* Target vertical laser pulse bar sweeping up and down */}
                {isActive && (
                  <line
                    x1={node.x}
                    y1={14}
                    x2={node.x}
                    y2={66}
                    stroke="#f59e0b"
                    strokeWidth="1.8"
                    className="vertical-laser-pulse"
                    style={{ transformOrigin: `${node.x}px 40px` }}
                  />
                )}

                {/* Scene Label (flickering if active) */}
                <text
                  x={node.x}
                  y={75}
                  textAnchor="middle"
                  className={`font-mono text-[9px] tracking-widest select-none transition-all duration-300 ${
                    isActive ? "fill-[#f59e0b] font-bold animate-flicker" : "fill-[#ece0cf]/30 group-hover:fill-[#ece0cf]/70"
                  }`}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  };

  // Scene 1: Premise - Ultralight distressed clay tablet cover
  const renderScene1 = () => {
    return (
      <div className="w-full h-full flex items-center justify-between gap-[3cqw] px-[4cqw] select-none">
        {/* Left Side: Center-focused fragmented clay tablet vector */}
        <div className="w-[45cqw] h-[64cqh] flex items-center justify-center relative bg-[#0d1319]/30 border border-[#f59e0b]/5 rounded-2xl p-[1cqw]">
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
          
          <svg viewBox="0 0 300 300" className="w-[85%] h-[85%] overflow-visible filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
            <defs>
              <linearGradient id="clayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1a2228" />
                <stop offset="50%" stopColor="#12181d" />
                <stop offset="100%" stopColor="#080c10" />
              </linearGradient>
              <filter id="crustGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Jagged, broken clay tablet contour */}
            <path
              d="M 40 30 C 90 20, 160 25, 230 15 C 265 20, 275 45, 280 80 C 275 140, 285 200, 270 250 C 260 280, 230 275, 180 285 C 130 280, 70 285, 35 270 C 15 260, 20 220, 15 160 C 10 110, 15 55, 40 30 Z"
              fill="url(#clayGrad)"
              stroke="#f59e0b"
              strokeWidth="1.5"
              className="opacity-80"
            />

            {/* Surface registers / scribe lines */}
            <path d="M 35 85 L 265 75" stroke="#000" strokeWidth="2.5" className="opacity-40" />
            <path d="M 35 85 L 265 75" stroke="#f59e0b" strokeWidth="0.5" className="opacity-15" />

            <path d="M 25 150 L 275 145" stroke="#000" strokeWidth="2.5" className="opacity-40" />
            <path d="M 25 150 L 275 145" stroke="#f59e0b" strokeWidth="0.5" className="opacity-15" />

            <path d="M 28 215 L 268 210" stroke="#000" strokeWidth="2.5" className="opacity-40" />
            <path d="M 28 215 L 268 210" stroke="#f59e0b" strokeWidth="0.5" className="opacity-15" />

            {/* Weathered geological fracture cracks */}
            <path d="M 110 20 Q 95 120, 125 180 T 85 285" fill="none" stroke="#0a0f12" strokeWidth="4" className="opacity-90" />
            <path d="M 110 20 Q 95 120, 125 180 T 85 285" fill="none" stroke="#f59e0b" strokeWidth="0.75" className="opacity-20" />

            <path d="M 220 22 Q 235 90, 190 145 T 160 280" fill="none" stroke="#0a0f12" strokeWidth="3" className="opacity-80" />
            <path d="M 80 130 Q 150 140, 205 110" fill="none" stroke="#0a0f12" strokeWidth="3.5" className="opacity-80" />

            {/* Inscribed Linear B symbols, glowing in amber under beat settings */}
            {/* Row 1 */}
            <g className="transition-all duration-1000">
              {/* ka */}
              <path d="M 60 45 H 85 M 72 45 V 70 M 65 53 H 80 M 65 62 H 80" fill="none" 
                stroke={beat >= 1 ? "#f59e0b" : "#ece0cf"} 
                strokeWidth="2.5" className={`transition-all ${beat >= 1 ? "opacity-100 filter url(#crustGlow)" : "opacity-40"}`} />
              {/* se */}
              <path d="M 115 40 H 135 V 70 H 115 Z M 115 55 H 135 M 125 40 V 70" fill="none" 
                stroke={beat >= 1 ? "#f59e0b" : "#ece0cf"} 
                strokeWidth="2.5" className={`transition-all ${beat >= 1 ? "opacity-100 filter url(#crustGlow)" : "opacity-40"}`} />
              {/* to */}
              <path d="M 175 40 V 70 M 165 70 H 185 M 165 52 C 165 40, 175 40, 175 52 M 185 52 C 185 40, 175 40, 175 52" fill="none" 
                stroke={beat >= 1 ? "#f59e0b" : "#ece0cf"} 
                strokeWidth="2.5" className={`transition-all ${beat >= 1 ? "opacity-100 filter url(#crustGlow)" : "opacity-40"}`} />
            </g>

            {/* Row 2 */}
            <g className="transition-all duration-1000">
              {/* no */}
              <path d="M 65 105 V 135 M 53 115 L 65 125 L 77 115 M 53 135 H 77" fill="none" 
                stroke={beat >= 1 ? "#f59e0b" : "#ece0cf"} 
                strokeWidth="2.5" className={`transition-all ${beat >= 1 ? "opacity-100 filter url(#crustGlow)" : "opacity-30"}`} />
              {/* jo */}
              <path d="M 125 100 A 7 7 0 1 1 125 114 A 7 7 0 1 1 125 100 M 125 114 V 135 M 115 135 H 135" fill="none" 
                stroke={beat >= 1 ? "#f59e0b" : "#ece0cf"} 
                strokeWidth="2.5" className={`transition-all ${beat >= 1 ? "opacity-100 filter url(#crustGlow)" : "opacity-30"}`} />
              {/* chariot ideogram */}
              <path d="M 215 95 H 245 M 215 115 H 245 M 230 95 V 135 M 220 115 A 8 8 0 1 1 220 131 A 8 8 0 1 1 220 115 M 240 115 A 8 8 0 1 1 240 131 A 8 8 0 1 1 240 115" fill="none" 
                stroke={beat >= 2 ? "#f59e0b" : "#ece0cf"} 
                strokeWidth="2" className={`transition-all ${beat >= 2 ? "opacity-100 filter url(#crustGlow)" : "opacity-20"}`} />
            </g>

            {/* Row 3 */}
            <g className="transition-all duration-1000">
              {/* ma */}
              <path d="M 55 185 L 75 210 L 95 185 Z M 75 185 V 165" fill="none" 
                stroke={beat >= 1 ? "#f59e0b" : "#ece0cf"} 
                strokeWidth="2.5" className={`transition-all ${beat >= 1 ? "opacity-100 filter url(#crustGlow)" : "opacity-30"}`} />
              {/* me */}
              <path d="M 125 180 A 10 10 0 1 1 145 180 A 10 10 0 1 1 125 180 M 135 180 V 205" fill="none" 
                stroke={beat >= 1 ? "#f59e0b" : "#ece0cf"} 
                strokeWidth="2.5" className={`transition-all ${beat >= 1 ? "opacity-100 filter url(#crustGlow)" : "opacity-30"}`} />
              {/* tripod ideogram */}
              <path d="M 210 170 H 240 V 195 H 210 Z M 215 195 L 210 210 M 235 195 L 240 210 M 225 195 V 210" fill="none" 
                stroke={beat >= 2 ? "#f59e0b" : "#ece0cf"} 
                strokeWidth="2" className={`transition-all ${beat >= 2 ? "opacity-100 filter url(#crustGlow)" : "opacity-20"}`} />
            </g>

            {/* Animated Laser Scanning Beam (horizontal) */}
            <line
              x1="10"
              y1="0"
              x2="290"
              y2="0"
              stroke="#f59e0b"
              strokeWidth="2"
              className="scene1-scanner-beam"
              filter="url(#crustGlow)"
            />
          </svg>
        </div>

        {/* Right Side: High-contrast terminal overlay card holding decipherment thesis */}
        <div className="w-[44cqw] h-[64cqh] border border-[#f59e0b]/20 bg-[#0d1319]/90 rounded-2xl p-[2.2cqw] flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden shrink-0 text-left">
          <div className="absolute inset-0 bg-[#040810]/50 opacity-[0.4] pointer-events-none" />
          <div className="absolute top-2 right-3 font-mono text-[9px] text-[#f59e0b]/40 tracking-widest uppercase">PLATE_SYS // THESIS</div>

          <div className="z-10 flex flex-col gap-[1.5cqh]">
            <div className="flex items-center gap-[0.8cqw] border-b border-[#f59e0b]/15 pb-[1cqh]">
              <Shield className="w-[2cqw] h-[2cqw] text-[#f59e0b] animate-pulse" />
              <div>
                <h3 className="font-serif text-[1.4cqw] font-black tracking-wider text-[#ece0cf] uppercase">
                  AEGEAN DECRYPT THESIS
                </h3>
                <h4 className="font-mono text-[0.85cqw] text-[#f59e0b] tracking-widest uppercase">
                  爱琴海古文字破译假说
                </h4>
              </div>
            </div>

            <p className="text-[1cqw] leading-[1.6] text-zinc-300 font-sans border-l-2 border-[#f59e0b]/30 pl-[1.2cqw]">
              {isZh ? (
                <span>
                  1952年，建筑师<strong>麦克·文特里斯</strong>（Michael Ventris）与语言学家<strong>约翰·查德威克</strong>（John Chadwick）合作，成功破译了克里特岛线形文字 B。在没有任何双语对照文本（如罗塞塔石碑）的极端困境下，他们仅凭纯粹的<strong>代数矩阵网格与统计学频次对齐</strong>，证明了此文字代表比荷马史诗早500年的极古希腊语，堪称密码学史上的不朽奇迹。
                </span>
              ) : (
                <span>
                  In 1952, architect <strong>Michael Ventris</strong> and linguist <strong>John Chadwick</strong> deciphered the Minoan-Mycenaean Linear B script. Operating entirely without bilingual texts (unlike the Rosetta Stone), they relied on <strong>algebraic grid structures and phonetic statistics</strong> to prove the script encoded an archaic Greek dialect 500 years prior to Homer, establishing a timeless monument in cryptanalysis.
                </span>
              )}
            </p>

            <div className="p-[1cqw] bg-[#050910]/80 border border-[#f59e0b]/10 rounded-lg text-[0.85cqw] font-mono leading-relaxed text-[#ece0cf]/80">
              <span className="text-[#f59e0b] font-bold block mb-1">DECIPHERMENT ENGINE MATRIX STATUS:</span>
              <div className="grid grid-cols-2 gap-x-[1.5cqw] gap-y-[0.4cqh]">
                <span>&gt; Scribe Identification:</span> <span className="text-emerald-500">66 Handwritings Aligned</span>
                <span>&gt; Statistical Entropy:</span> <span className="text-emerald-500">1.24 H (Natural Lang)</span>
                <span>&gt; Bilingual Aid:</span> <span className="text-red-500">0% (Pure Cryptanalysis)</span>
              </div>
            </div>
          </div>

          {/* Interactive display of active beat stage */}
          <div className="z-10 mt-[1.5cqh] pt-[1cqh] border-t border-[#f59e0b]/15 flex items-center justify-between text-[0.85cqw] font-mono text-zinc-400">
            <div className="flex items-center gap-[0.5cqw]">
              <Terminal className="w-[1.2cqw] h-[1.2cqw] text-[#f59e0b] animate-pulse" />
              <span>{isZh ? "当前扫描状态：" : "SCANNING STATUS:"}</span>
            </div>
            <span className="text-[#f59e0b] font-bold tracking-wider">
              {beat === 0 && (isZh ? "泥板物理特征与碎痕扫描中..." : "INITIAL DE-NOISE & FRACTURE SEGMENT")}
              {beat === 1 && (isZh ? "形态学分离：书吏下笔深度描边" : "STROKE MORPHOLOGY DEPTH COMPILING")}
              {beat >= 2 && (isZh ? "破译系统大纲：音值映射就绪" : "COMPREHENSIVE PHONETIC MATRIX LOCK")}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Scene 2: Dual - Light Phonetic grid vs pictographic commodities with laser sweep
  const renderScene2 = () => {
    return (
      <div className="w-full h-full flex items-stretch gap-[2.5cqw] px-[4cqw] select-none">
        {/* Left Column (Syllabic Grid) - 42% width */}
        <div className="w-[38cqw] h-[64cqh] border border-[#f59e0b]/15 bg-[#0d1319]/90 rounded-2xl p-[1.5cqw] flex flex-col justify-between relative overflow-hidden text-left">
          <div className="absolute inset-0 bg-[#040810]/40 pointer-events-none" />
          
          <div className="z-10 border-b border-[#f59e0b]/15 pb-[1cqh]">
            <span className="font-mono text-[0.8cqw] text-[#f59e0b] tracking-wider uppercase font-bold block">
              THE VENTRIS ALGEBRAIC SIEVE // 音节音值矩阵
            </span>
            <h3 className="font-serif text-[1.2cqw] font-black text-[#ece0cf] uppercase mt-0.5">
              Phonotactic Grid Coordinates
            </h3>
          </div>

          {/* Suffix grid */}
          <div className="z-10 flex-1 my-[1.2cqh] grid grid-cols-5 gap-[0.6cqw] items-stretch">
            {/* Header cols */}
            <div className="col-span-1" />
            {["V1 (a)", "V2 (e)", "V3 (i)", "V4 (o)"].map((v) => (
              <div key={v} className="bg-[#040810] border border-[#f59e0b]/15 rounded flex items-center justify-center font-mono text-[0.8cqw] font-extrabold text-[#f59e0b]">
                {v}
              </div>
            ))}

            {/* Rows */}
            {[
              { r: "C1 (d-)", s: ["𐀀 da", "𐀋 de", "𐀏 di", "𐀒 do"] },
              { r: "C2 (t-)", s: ["𐀄 ta", "𐀏 te", "𐀙 ti", "𐀵 to"] },
              { r: "C3 (m-)", s: ["𐀔 ma", "𐀕 me", "𐀖 mi", "𐀗 mo"] },
              { r: "C4 (r-)", s: ["𐀨 ra", "𐀩 re", "𐀪 ri", "𐀫 ro"] }
            ].map((row, rIdx) => (
              <React.Fragment key={row.r}>
                <div className="bg-[#040810] border border-[#f59e0b]/15 rounded flex items-center justify-center font-mono text-[0.75cqw] font-bold text-zinc-400">
                  {row.r}
                </div>
                {row.s.map((sign) => {
                  const [char, val] = sign.split(" ");
                  const isActive = (beat === 1 && rIdx <= 1) || beat >= 2;
                  return (
                    <div
                      key={sign}
                      className={`rounded border flex flex-col items-center justify-center p-[0.3cqw] transition-all duration-300 ${
                        isActive
                          ? "bg-[#111c24] border-[#f59e0b] text-[#ece0cf] shadow-[0_0_8px_rgba(245,158,11,0.2)] scale-100"
                          : "bg-[#040810]/70 border-zinc-800/40 opacity-20 scale-95"
                      }`}
                    >
                      <span className="text-[1.3cqw] font-bold text-[#ece0cf]">{char}</span>
                      <span className="text-[0.7cqw] font-mono opacity-60 mt-0.5 text-zinc-300">{val}</span>
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>

          <p className="z-10 text-[0.8cqw] font-sans text-zinc-400 leading-normal border-t border-[#f59e0b]/10 pt-[0.8cqh]">
            {isZh ? "统计相同名词的屈折变化词尾，推导辅音与元音的相对同位关系，文特里斯在无任何发音线索下构建了此纯数学矩阵。" : "By cataloging morphological noun-end flexions, Ventris deduced mathematical vowel-consonant variables, building this matrix without any bilingual cues."}
          </p>
        </div>

        {/* Right Column (Commodity Pictograms) - 58% width */}
        <div className="w-[51cqw] h-[64cqh] border border-[#f59e0b]/15 bg-[#0d1319]/90 rounded-2xl p-[1.5cqw] flex flex-col justify-between relative overflow-hidden text-left">
          <div className="absolute inset-0 bg-[#040810]/40 pointer-events-none" />
          
          {/* Symmetrical vertical laser alignment sweeps dividing/moving */}
          <div className="absolute inset-y-0 w-[1.5px] bg-[#f59e0b] shadow-[0_0_12px_#f59e0b] pointer-events-none scene2-laser-sweep z-20" />

          <div className="z-10 border-b border-[#f59e0b]/15 pb-[1cqh] flex justify-between items-end">
            <div>
              <span className="font-mono text-[0.8cqw] text-[#f59e0b] tracking-wider uppercase font-bold block">
                COMMODITY SPELLING VS IDEOGRAMS // 文字拼写与货物意符
              </span>
              <h3 className="font-serif text-[1.2cqw] font-black text-[#ece0cf] uppercase mt-0.5">
                Lexical Inventory Alignment
              </h3>
            </div>
            <div className="bg-[#040810] border border-[#f59e0b]/20 px-2 py-0.5 rounded text-[0.7cqw] font-mono font-bold text-[#f59e0b] uppercase">
              Laser Align Active
            </div>
          </div>

          {/* Three Trade items with custom SVG shapes */}
          <div className="z-10 flex-1 my-[1.2cqh] grid grid-cols-3 gap-[1cqw] items-stretch">
            {[
              {
                title: isZh ? "𐃏 战车" : "𐃏 Chariot",
                spell: "a-ni-ja",
                grk: "ἡνία (Reins)",
                desc: isZh ? "泥板货物登记中紧邻战车意符" : "Written next to chariot pictogram",
                active: beat >= 1,
                svg: (
                  <svg viewBox="0 0 100 100" className="w-[60%] h-[60%] stroke-[#ece0cf] stroke-width-2 fill-none overflow-visible">
                    {/* Chariot body */}
                    <rect x="25" y="30" width="30" height="20" rx="2" className="opacity-70" />
                    <line x1="55" y1="40" x2="85" y2="40" strokeWidth="2.5" />
                    <line x1="55" y1="35" x2="80" y2="20" strokeWidth="1" className="opacity-50" />
                    {/* Wheel */}
                    <circle cx="40" cy="65" r="16" strokeWidth="2" />
                    <circle cx="40" cy="65" r="3" fill="#ece0cf" />
                    {/* Spokes */}
                    <line x1="40" y1="49" x2="40" y2="81" strokeWidth="1" />
                    <line x1="24" y1="65" x2="56" y2="65" strokeWidth="1" />
                    {/* Reins */}
                    <path d="M 70 20 Q 80 40, 85 40" strokeWidth="1" />
                  </svg>
                )
              },
              {
                title: isZh ? "𐃟 双耳罐" : "𐃟 Amphora",
                spell: "a-re-pa",
                grk: "ἄλειφαρ (Unguent)",
                desc: isZh ? "记录橄榄香油，边上画有罐身" : "Vase symbol storing sacred oil",
                active: beat >= 1,
                svg: (
                  <svg viewBox="0 0 100 100" className="w-[60%] h-[60%] stroke-[#ece0cf] stroke-width-2 fill-none overflow-visible">
                    {/* Jar shape */}
                    <path d="M 35 15 H 65 M 38 15 V 22 C 38 35, 20 45, 20 65 C 20 85, 35 90, 50 90 C 65 90, 80 85, 80 65 C 80 45, 62 35, 62 22 V 15" strokeWidth="2" />
                    {/* Handles */}
                    <path d="M 38 25 C 25 25, 20 40, 26 50" strokeWidth="1.5" />
                    <path d="M 62 25 C 75 25, 80 40, 74 50" strokeWidth="1.5" />
                    {/* Neck decoration */}
                    <line x1="38" y1="22" x2="62" y2="22" strokeWidth="1" className="opacity-50" />
                    <line x1="32" y1="35" x2="68" y2="35" strokeWidth="1" className="opacity-30" />
                  </svg>
                )
              },
              {
                title: isZh ? "𐂚 羊毛" : "𐂚 Wool",
                spell: "ma-ri",
                grk: "μαλλός (Wool)",
                desc: isZh ? "用于记录克里特岛织物与赋税" : "Tribute textile registers",
                active: beat >= 2,
                svg: (
                  <svg viewBox="0 0 100 100" className="w-[60%] h-[60%] stroke-[#ece0cf] stroke-width-2 fill-none overflow-visible">
                    {/* Stylized Linear B wool symbol */}
                    <path d="M 50 15 V 85 M 25 35 H 75 M 30 55 H 70 M 35 75 H 65" strokeWidth="2.5" />
                    {/* Fluffy circle elements */}
                    <circle cx="50" cy="15" r="5" fill="#ece0cf" />
                    <circle cx="25" cy="35" r="4" fill="#ece0cf" className="opacity-80" />
                    <circle cx="75" cy="35" r="4" fill="#ece0cf" className="opacity-80" />
                    <path d="M 25 55 Q 50 65, 75 55" strokeWidth="1" className="opacity-40" />
                  </svg>
                )
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-[1cqw] rounded-xl border flex flex-col justify-between items-center transition-all duration-300 ${
                  item.active
                    ? "bg-[#111c24] border-[#f59e0b] shadow-[0_0_12px_rgba(245,158,11,0.25)] scale-100"
                    : "bg-[#040810]/70 border-zinc-800/40 opacity-15 scale-95"
                }`}
              >
                <span className="text-[0.75cqw] font-mono text-[#f59e0b] font-bold tracking-widest block uppercase">
                  {item.title}
                </span>

                <div className="flex-1 w-full flex items-center justify-center my-1">
                  {item.svg}
                </div>

                <div className="text-center w-full mt-1 border-t border-[#f59e0b]/10 pt-[0.6cqh]">
                  <div className="text-[1.15cqw] font-mono font-black text-[#ece0cf] tracking-wide">
                    {item.spell}
                  </div>
                  <div className="text-[0.8cqw] font-mono text-cyan-400 font-bold">
                    {item.grk}
                  </div>
                  <p className="text-[0.7cqw] text-zinc-400 mt-1 leading-tight font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="z-10 text-[0.8cqw] font-sans text-zinc-400 leading-normal border-t border-[#f59e0b]/10 pt-[0.8cqh]">
            {isZh ? "文特里斯发现库房泥板上文字音节的‘拼写’（如 a-ni-ja）与后随的货物‘意符’（战车 𐃏）惊人一致。古文字的抽象发音因此与物理实物实现交叉锁定，最终证实该语言正是希腊语。" : "Ventris observed that written strings (like a-ni-ja) matched physical ideograms (chariot 𐃏) sitting next to them. This alignment of language phonology and physical object locked down the sound values, proving it was Greek."}
          </p>
        </div>
      </div>
    );
  };

  // Scene 3: Process - Standard 3-stage linguistic segmentation
  const renderScene3 = () => {
    return (
      <div className="w-full h-full flex flex-col justify-between px-[4cqw] select-none text-left">
        {/* Top Header info */}
        <div className="border-b border-[#f59e0b]/15 pb-[1cqh] flex justify-between items-end">
          <div>
            <span className="font-mono text-[0.8cqw] text-[#f59e0b] tracking-wider uppercase font-bold block">
              3-STAGE LINGUISTIC SIEVE // 三段式音意对齐实证
            </span>
            <h3 className="font-serif text-[1.4cqw] font-black text-[#ece0cf] uppercase mt-0.5">
              Carl Blegen's Irrefutable Proof (Pylos PY Ta 641)
            </h3>
          </div>
          <div className="bg-[#0d1319] border border-[#f59e0b]/20 px-2 py-0.5 rounded text-[0.7cqw] font-mono text-zinc-400">
            {isZh ? "实证模型：双耳三足鼎" : "PROOF TARGET: TRIPOD LEDGER"}
          </div>
        </div>

        {/* 3 Connected Horizontal Sieve Stations */}
        <div className="flex-1 grid grid-cols-3 gap-[2cqw] items-center my-[2cqh] relative">
          {/* Connector Line behind boxes */}
          <div className="absolute left-[10%] right-[10%] top-[45%] h-[2px] bg-gradient-to-r from-[#f59e0b]/5 via-[#f59e0b]/30 to-[#f59e0b]/5 pointer-events-none z-0" />

          {[
            {
              stage: "STAGE 01 / PREFIX / 词前缀",
              glyph: "𐀴 ti-",
              sound: "tri- (Three / 三)",
              stat: "98.4% Phonotactic Alignment",
              body: isZh ? "统计学指出前缀 𐀴 代表数字乘数 ‘3’。在印欧语同源性中，直接对齐古希腊语中的 τρι- / tri- 词根。" : "Statistical frequency maps the sign 𐀴 to prefix 'three'. In IE morphology, this aligns perfectly with the archaic Greek τρι- / tri- prefix.",
              active: beat >= 0
            },
            {
              stage: "STAGE 02 / CORE STEM / 词根核心",
              glyph: "𐀪𐀡 -ri-po-",
              sound: "-pod- (Foot / 足)",
              stat: "99.2% Semantic Correlation",
              body: isZh ? "提取的核心词根 𐀪𐀡 指代支撑底座。希腊词根 -pod- (代表‘足 / leg’)，拼合后即为‘有足的支撑器具’。" : "Exposing the core stem 𐀪𐀡 representing vertical support base. In Greek, -pod- (leg/foot) merges to indicate a footed vessel.",
              active: beat >= 1
            },
            {
              stage: "STAGE 03 / INFLECTIONAL SUFFIX / 词尾屈折",
              glyph: "𐀆 -de",
              sound: "-de (Nominative Dual / 双数)",
              stat: "99.9% Syntactic Confidence",
              body: isZh ? "词尾 𐀆 代表古希腊语中极其罕见的双数名词主格词尾 -de。与随后的‘两尊鼎’数字完美咬合。" : "The suffix 𐀆 represents the rare nominative dual ending -de. This locks the syntax with the physical numerical value '2' that follows.",
              active: beat >= 2
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-[1.4cqw] rounded-xl border bg-[#0d1319]/90 flex flex-col justify-between h-[34cqh] transition-all duration-500 z-10 ${
                item.active && (beat === idx || (beat >= 2 && idx === 2) || (beat === 1 && idx <= 1))
                  ? "border-[#f59e0b] shadow-[0_0_20px_rgba(245,158,11,0.35)] scale-102"
                  : item.active
                  ? "border-[#f59e0b]/40 opacity-70 scale-100"
                  : "border-zinc-800/40 opacity-15 scale-95"
              }`}
            >
              <div>
                <span className="text-[0.75cqw] font-mono text-[#f59e0b] font-bold tracking-widest block mb-1">
                  {item.stage}
                </span>
                <div className="text-[2.2cqw] font-serif font-black text-[#ece0cf] leading-none mb-1">
                  {item.glyph}
                </div>
                <div className="text-[1.15cqw] font-mono text-cyan-400 font-bold leading-tight">
                  {item.sound}
                </div>
              </div>

              <div className="my-1.5 flex-1 text-[0.8cqw] text-zinc-300 font-sans leading-relaxed">
                {item.body}
              </div>

              <div className="border-t border-[#f59e0b]/10 pt-[0.8cqh] flex justify-between items-center text-[0.75cqw] font-mono text-[#f59e0b]/60">
                <span>CONFIDENCE:</span>
                <span className="font-bold text-[#f59e0b]">{item.stat}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Unified Complete Word Decoded Banner */}
        <div className="h-[14cqh] bg-[#050910] border border-[#f59e0b]/20 rounded-xl p-[1cqw] flex items-center justify-between relative overflow-hidden shrink-0">
          {/* subtle scanner overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(245,158,11,0.3)_1px,transparent_1px)] [background-size:100%_4px]" />
          
          <div className="flex items-center gap-[2cqw]">
            <div className="font-serif text-[1.2cqw] font-black text-[#ece0cf] leading-none text-center bg-[#111c24] border border-[#f59e0b]/30 p-[0.8cqw] rounded-lg">
              <span className="text-[0.8cqw] font-mono opacity-50 block uppercase text-[#f59e0b]">PICTOGRAPH ALIGN</span>
              <span>𐀴𐀪𐀡𐀆</span>
            </div>
            
            <div className="flex flex-col">
              <span className="font-mono text-[1.4cqw] font-black text-amber-500 tracking-wider">
                ti-ri-po-de &gt;&gt; τρίποδε
              </span>
              <span className="font-sans text-[0.9cqw] text-zinc-300">
                {isZh ? "两尊三足鼎 (Homeric Greek: Two Tripods with Three Legs)" : "Two Tripods with Three Legs (Greek Nominative Dual)"}
              </span>
            </div>
          </div>

          <div className="max-w-[32cqw] text-right font-sans text-[0.8cqw] text-zinc-400 leading-normal border-l border-[#f59e0b]/15 pl-[1.5cqw]">
            {isZh ? "1953年，考古学泰斗布莱根在皮洛斯发掘出Ta 641号泥板，文面拼写‘ti-ri-po-de’旁赫然绘制了两尊三足鼎象形符，彻底终结了学术界对破译的所有怀疑。" : "In 1953, archaeologist Carl Blegen unearthed tablet PY Ta 641 at Pylos. The spelled string 'ti-ri-po-de' sat perfectly next to drawings of tripods, permanently silencing all skeptics."}
          </div>
        </div>
      </div>
    );
  };

  // Scene 4: Matrix - Dense Knossos Clay Archives 2x2 grid
  const renderScene4 = () => {
    return (
      <div className="w-full h-full flex flex-col justify-between px-[4cqw] select-none text-left">
        {/* Header bar */}
        <div className="border-b border-[#f59e0b]/15 pb-[1cqh] flex justify-between items-end">
          <div>
            <span className="font-mono text-[0.8cqw] text-[#f59e0b] tracking-wider uppercase font-bold block">
              SPATIAL CORPUS CLASSIFIER // 考古多地联合解密
            </span>
            <h3 className="font-serif text-[1.4cqw] font-black text-[#ece0cf] uppercase mt-0.5">
              The Aegean Palace Clay Archives
            </h3>
          </div>
          <div className="bg-[#0d1319] border border-[#f59e0b]/20 px-2 py-0.5 rounded text-[0.7cqw] font-mono text-[#f59e0b] font-bold uppercase animate-pulse">
            Cross-Database Aligned
          </div>
        </div>

        {/* 2x2 Bento Matrix */}
        <div className="flex-1 grid grid-cols-2 gap-[1.5cqw] my-[2cqh]">
          {[
            {
              id: "KNOSSOS",
              title: isZh ? "克诺索斯宫殿泥板库" : "Knossos Palace Archive",
              site: "Crete / 克里特岛",
              scribes: "66 Active Scribal Hands",
              records: isZh ? "涵盖王室香料贸易、武器战车清册、织物与大宗赋税。" : "Oil, saffron, and chariot inventories; massive palace administrative ledgers.",
              stat: "3,420 Tablets Cataloged",
              active: beat >= 0,
              highlight: beat === 0,
              skew: "hover:skew-x-1 hover:rotate-1"
            },
            {
              id: "PYLOS",
              title: isZh ? "皮洛斯涅斯托尔宫殿" : "Pylos Nestor Archive",
              site: "Messenia / 梅塞尼亚",
              scribes: "28 Active Scribal Hands",
              records: isZh ? "记录临战前夕沿海卫队防务动员、青铜战具、鼎尊祭品清册。" : "Urgent coast-guard army mobilizations, bronze armors, Blegen tripod ledger.",
              stat: "1,120 Tablets Cataloged",
              active: beat >= 1,
              highlight: beat === 1,
              skew: "hover:-skew-x-1 hover:-rotate-1"
            },
            {
              id: "MYCENAE",
              title: isZh ? "迈锡尼卫城官方档案" : "Mycenae Citadel Archive",
              site: "Argolis / 阿尔戈利斯",
              scribes: "12 Active Scribal Hands",
              records: isZh ? "包含香油出口贸易记录、斯芬克斯之家泥板、黄金器具清账。" : "Perfumed oil exports, merchants' bills, legendary Agamemnon citadel accounts.",
              stat: "450 Inscriptions Locked",
              active: beat >= 1,
              highlight: beat === 1,
              skew: "hover:skew-x-1 hover:-rotate-1"
            },
            {
              id: "THEBES",
              title: isZh ? "底比斯卡德摩斯宫殿" : "Thebes Cadmean Archive",
              site: "Boeotia / 维奥蒂亚",
              scribes: "8 Active Scribal Hands",
              records: isZh ? "底比斯前哨家畜分配总账、大麦谷物运单、边界领地纠纷纪录。" : "Livestock distribution, agricultural grain ledgers, border territorial bounds.",
              stat: "180 Inscriptions Locked",
              active: beat >= 2,
              highlight: beat === 2,
              skew: "hover:-skew-x-1 hover:rotate-1"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-[1.2cqw] rounded-xl border bg-[#0d1319]/90 flex flex-col justify-between transition-all duration-500 relative ${item.skew} ${
                item.highlight
                  ? "border-[#f59e0b] shadow-[0_0_15px_rgba(245,158,11,0.25)] scale-[1.01] z-10"
                  : item.active
                  ? "border-[#f59e0b]/40 opacity-75 scale-100"
                  : "border-zinc-800/40 opacity-15 scale-95"
              }`}
            >
              {/* Scan grid effect in background of active */}
              {item.highlight && (
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:12px_12px]" />
              )}
              
              <div className="flex justify-between items-start border-b border-[#f59e0b]/10 pb-[0.6cqh]">
                <div>
                  <span className="text-[0.7cqw] font-mono text-[#f59e0b] font-bold tracking-widest uppercase block">
                    {item.id} // {item.site}
                  </span>
                  <h4 className="font-serif text-[1.15cqw] font-black text-[#ece0cf] uppercase mt-0.5">
                    {item.title}
                  </h4>
                </div>
                <span className="text-[0.75cqw] font-mono opacity-50 text-zinc-400">
                  {item.scribes}
                </span>
              </div>

              <p className="my-1.5 text-[0.8cqw] text-zinc-300 font-sans leading-relaxed">
                {item.records}
              </p>

              <div className="flex justify-between items-center text-[0.75cqw] font-mono text-[#f59e0b]/70 border-t border-[#f59e0b]/10 pt-[0.6cqh]">
                <span>DATABASE STATUS:</span>
                <span className="font-bold text-[#f59e0b]">{item.stat}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <p className="text-[0.75cqw] font-sans text-zinc-400 leading-normal border-t border-[#f59e0b]/10 pt-[0.8cqh]">
          {isZh ? "泥板档案在地理空间上的相互印证，证实了迈锡尼文明采用完全统一的高效官僚书吏体系。无论是克里特岛还是伯罗奔尼撒半岛，相同的语法、官制、税制在四地联档数据库中实现了大范围完美对齐。" : "Geographical consistency across palace archives proves Mycenaean Greece operated a unified bureaucratic administrative system. The same Greek grammar, spelling conventions, taxes, and royal titles are perfectly aligned across Peloponnese and Crete databases."}
        </p>
      </div>
    );
  };

  // Scene 5: Ledger - Extreme Cryptanalytic Decoded Corpus Dashboard
  const renderScene5 = () => {
    return (
      <div className="w-full h-full flex flex-col justify-between px-[4cqw] select-none text-left">
        {/* Header bar */}
        <div className="border-b border-[#f59e0b]/15 pb-[0.8cqh] flex justify-between items-end">
          <div className="flex items-center gap-[0.8cqw]">
            <Database className="w-[1.8cqw] h-[1.2cqh] text-[#f59e0b]" />
            <div>
              <span className="font-mono text-[0.8cqw] text-[#f59e0b] tracking-wider uppercase font-bold block">
                CRYPTANALYTIC COMPREHENSIVE LEDGER // 考古破译控制总账
              </span>
              <h3 className="font-serif text-[1.3cqw] font-black text-[#ece0cf] uppercase mt-0.5">
                The Complete Ventris-Chadwick Corpus Dashboard
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-end text-[0.7cqw] font-mono text-zinc-500 text-right shrink-0">
            <span>PLATE_SERIES: PY-KN-TH-MY-1952</span>
            <span>SECURITY_CLASS: CLASS-A CONFIDENTIAL</span>
          </div>
        </div>

        {/* High Density Analytical Core */}
        <div className="flex-1 grid grid-cols-12 gap-[1.5cqw] my-[1.5cqh] overflow-hidden">
          {/* Col 1-5: Miniature 36-Syllable Sign Matrix (5 cols) */}
          <div className="col-span-5 border-r border-[#f59e0b]/15 pr-[1.2cqw] flex flex-col justify-between overflow-hidden">
            <span className="text-[0.75cqw] font-mono opacity-50 block uppercase mb-1 text-zinc-400">
              87-Syllable Sign-Phoneme Alignment // 87个音节全谱锁定
            </span>

            <div className="grid grid-cols-6 gap-[0.3cqw] flex-1 items-stretch">
              {[
                { s: "𐀀", v: "a" }, { s: "𐀁", v: "e" }, { s: "𐀂", v: "i" }, { s: "𐀃", v: "o" }, { s: "𐀄", v: "u" }, { s: "𐀅", v: "da" },
                { s: "𐀆", v: "de" }, { s: "𐀇", v: "di" }, { s: "𐀈", v: "do" }, { s: "𐀉", v: "du" }, { s: "𐀊", v: "ja" }, { s: "𐀋", v: "je" },
                { s: "𐀍", v: "jo" }, { s: "𐀏", v: "ka" }, { s: "𐀐", v: "ke" }, { s: "𐀑", v: "ki" }, { s: "𐀒", v: "ko" }, { s: "𐀓", v: "ku" },
                { s: "𐀔", v: "ma" }, { s: "𐀕", v: "me" }, { s: "𐀖", v: "mi" }, { s: "𐀗", v: "mo" }, { s: "𐀘", v: "mu" }, { s: "𐀙", v: "na" },
                { s: "𐀚", v: "ne" }, { s: "𐀛", v: "ni" }, { s: "𐀜", v: "no" }, { s: "𐀝", v: "nu" }, { s: "𐀞", v: "pa" }, { s: "𐀟", v: "pe" },
                { s: "𐀠", v: "pi" }, { s: "𐀡", v: "po" }, { s: "𐀢", v: "pu" }, { s: "𐀨", v: "ra" }, { s: "𐀩", v: "re" }, { s: "𐀪", v: "ri" }
              ].map((cell, i) => (
                <div key={i} className="bg-[#050910] border border-[#f59e0b]/10 rounded p-[0.15cqw] flex flex-col items-center justify-center font-mono">
                  <span className="text-[0.95cqw] font-bold text-[#ece0cf] leading-none">{cell.s}</span>
                  <span className="text-[0.6cqw] text-cyan-400 font-bold opacity-80 mt-0.5">{cell.v}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-1 flex justify-between text-[0.7cqw] font-mono text-zinc-500">
              <span>Syllabic Match Rate: <strong className="text-emerald-500">99.85%</strong></span>
              <span>87/87 Locked</span>
            </div>
          </div>

          {/* Col 6-8: Shannon Entropy Curves & Confidence (3 cols) */}
          <div className="col-span-3 border-r border-[#f59e0b]/15 pr-[1.2cqw] flex flex-col justify-between overflow-hidden text-left">
            <div>
              <span className="text-[0.75cqw] font-mono opacity-50 block uppercase text-zinc-400">
                PHONETIC ENTROPY ANALYZER // 统计熵自检
              </span>
              <p className="text-[0.7cqw] font-sans text-zinc-400 leading-normal mt-0.5">
                {isZh ? "相邻音素出现频次分布，证明其完全吻合自然语言发音模型。" : "Shannon sequence entropy curves verifying phoneme natural language match."}
              </p>
            </div>

            {/* SVG Entropy Chart */}
            <div className="h-[18cqh] border border-[#f59e0b]/15 bg-[#050910] rounded-xl p-[0.8cqw] relative flex flex-col justify-between my-1">
              <svg viewBox="0 0 160 80" className="w-full h-full overflow-visible">
                {/* Grid guidelines */}
                <line x1="10" y1="10" x2="150" y2="10" stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="1 5" className="opacity-15" />
                <line x1="10" y1="40" x2="150" y2="40" stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="1 5" className="opacity-15" />
                <line x1="10" y1="70" x2="150" y2="70" stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="1 5" className="opacity-15" />
                
                {/* Baseline random noise (flat dashed) */}
                <line x1="10" y1="65" x2="150" y2="65" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" className="opacity-40" />
                
                {/* Natural language curve */}
                <path d="M 10 65 Q 40 20, 70 55 T 130 35 T 150 42" fill="none" stroke="#22d3ee" strokeWidth="1.5" className="opacity-50" />
                
                {/* Reconstructed Linear B sequence (Active based on beat) */}
                {beat >= 1 ? (
                  <path
                    d="M 10 65 Q 35 25, 65 52 T 125 32 T 150 40"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    className="scene5-entropy-path"
                  />
                ) : (
                  <line x1="10" y1="65" x2="150" y2="65" stroke="#f59e0b" strokeWidth="1" className="opacity-10" />
                )}
                
                {/* Labels */}
                <text x="5" y="14" fill="#64748b" className="font-mono text-[5px] opacity-70">4.5 H</text>
                <text x="5" y="73" fill="#64748b" className="font-mono text-[5px] opacity-70">0.0 H</text>
                <text x="140" y="77" fill="#64748b" className="font-mono text-[5px] opacity-70">Pos</text>
              </svg>
            </div>

            <div className="bg-[#050910] border border-[#f59e0b]/10 p-[0.6cqw] rounded-lg flex flex-col gap-1 font-mono text-[0.75cqw]">
              <div className="flex justify-between">
                <span className="opacity-50">SHANNON ENTROPY:</span>
                <span className="text-[#f59e0b] font-bold">1.24 H (Optimal)</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-50">Greek Dialect Match:</span>
                <span className="text-emerald-500 font-bold">Archaic Attic</span>
              </div>
            </div>
          </div>

          {/* Col 9-12: Live compilation logs & Knossos curator Red Wax Seal (4 cols) */}
          <div className="col-span-4 flex flex-col justify-between pl-[0.8cqw] relative">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[0.75cqw] font-mono opacity-50 block uppercase text-zinc-400">
                  REAL-TIME CRYPT LOGS // 破译后台动态编译
                </span>
                
                <div className="font-mono text-[0.72cqw] text-cyan-400/90 bg-[#050910] border border-[#f59e0b]/15 rounded-lg p-[0.8cqw] h-[18cqh] overflow-hidden flex flex-col gap-[0.4cqh] mt-1">
                  <div className="text-slate-500 text-[6px] border-b border-[#f59e0b]/10 pb-0.5 mb-0.5 flex justify-between">
                    <span>SYS_CORE_COMPILER_V1.0</span>
                    <span className="animate-pulse text-emerald-500">● SYNCED</span>
                  </div>
                  <div className="flex-1 overflow-y-auto flex flex-col gap-0.5">
                    <div className="text-zinc-500">&gt; Loading site corpus files (KN, PY, TH, MY)...</div>
                    <div className="text-zinc-500">&gt; Reindexing Ventris phonetic coordinates grid...</div>
                    {beat >= 1 ? (
                      <>
                        <div className="text-amber-500 font-bold">&gt; Syllabic inflection curves matched to Greek.</div>
                        <div className="text-amber-500">&gt; Aligned 124 ideographic trade items.</div>
                      </>
                    ) : (
                      <div className="text-[#f59e0b]/30 animate-pulse">&gt; Waiting for grid locking trigger...</div>
                    )}
                    {beat >= 2 ? (
                      <>
                        <div className="text-emerald-400 font-black">&gt; PROOF COMPLETED. IRREFUTABLE BLEGEN TRIPOD MATRIX SECURED.</div>
                        <div className="text-emerald-400">&gt; COHERENCE: 1.00 UNITARITY LOCKED. CERT STAMPED.</div>
                      </>
                    ) : beat >= 1 ? (
                      <div className="text-[#f59e0b]/30 animate-pulse">&gt; Waiting for curator seal signature...</div>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Red Wax Seal of the Knossos Curator */}
              <div className="h-[14cqh] flex items-end justify-end relative mt-[1cqh]">
                {beat >= 2 ? (
                  <div
                    key="knossos-seal"
                    className="w-[11cqw] h-[11cqw] border-[3px] border-double border-red-600 rounded-full flex flex-col items-center justify-center p-[0.4cqw] text-center text-red-600 font-serif font-black rotate-[-8deg] bg-[#0a0f12] z-20 shadow-[0_0_20px_rgba(220,38,38,0.6)] scene5-seal-stamp"
                    style={{
                      boxShadow: "0 0 0 4px #0a0f12, 0 10px 25px -5px rgba(220,38,38,0.7)",
                      backgroundImage: "radial-gradient(circle, rgba(220, 38, 38, 0.08) 10%, transparent 10%)",
                      backgroundSize: "6px 6px"
                    }}
                  >
                    <span className="text-[0.5cqw] tracking-wider font-mono font-bold leading-none">KNOSSOS ARCHIVE</span>
                    {/* Labrys - Double axe outline centered */}
                    <svg viewBox="0 0 40 40" className="w-[30%] h-[30%] stroke-red-600 stroke-2 fill-none my-0.5">
                      <path d="M 20 5 V 35 M 10 10 C 18 12, 18 28, 10 30 Z M 30 10 C 22 12, 22 28, 30 30 Z M 8 10 H 32 M 8 30 H 32" strokeWidth="1.5" />
                    </svg>
                    <span className="text-[0.75cqw] my-0.5 tracking-widest border-y border-red-600 py-[0.05cqh] font-bold">
                      APPROVED
                    </span>
                    <span className="text-[0.5cqw] font-mono font-bold tracking-tighter leading-none">
                      M. VENTRIS 1952
                    </span>
                  </div>
                ) : (
                  <div className="w-[11cqw] h-[11cqw] border border-dashed border-zinc-700/60 rounded-full flex items-center justify-center text-center text-zinc-600 font-mono text-[0.75cqw] italic">
                    {isZh ? "未加盖守恒印章" : "SEAL UNSTAMPED"}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Unified explanation at bottom */}
        <p className="text-[0.75cqw] font-sans text-zinc-400 leading-normal border-t border-[#f59e0b]/10 pt-[0.8cqh]">
          {isZh ? "破译总账汇总报告：迈锡尼线形文字 B 被彻底解密。经由卡尔·布莱根、文特里斯及查德威克学术印证；当音节发音一致性、大宗商品意符盘点及相邻统计熵完全匹配时，加盖克诺索斯王宫行政档案馆之拉布律斯神圣双面斧红蜡印信锁存。" : "Summary: In 1952, Michael Ventris & John Chadwick permanently decrypted Linear B. Approved by academic peers, when phonetic matrix stability, commodity inventories, and statistical entropy are satisfied, the sacred Labrys double-axe wax seal of Knossos is stamped."}
        </p>
      </div>
    );
  };

  const renderScene = () => {
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

  return (
    <div className="w-full h-full bg-[#0a0f12] text-[#ece0cf] relative overflow-hidden font-mono p-[3.5cqw] flex flex-col justify-between select-none">
      {/* Self-contained style block for Google Fonts, CSS rules, and animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;900&family=Share+Tech+Mono&family=Cinzel+Decorative:wght@700&display=swap');
        
        .font-serif {
          font-family: 'Cinzel', Georgia, serif;
        }
        
        .font-mono {
          font-family: 'Share Tech Mono', monospace;
        }

        /* Clay surface micro texture overlay */
        .clay-overlay {
          background-image: radial-gradient(circle, rgba(245, 158, 11, 0.015) 1px, transparent 1px);
          background-size: 16px 16px;
        }

        /* Scanline scrolling effect */
        .scanline-scroller {
          background: linear-gradient(
            to bottom,
            rgba(245, 158, 11, 0),
            rgba(245, 158, 11, 0.05) 50%,
            rgba(245, 158, 11, 0)
          );
          background-size: 100% 40cqh;
          animation: scanline-move 6s linear infinite;
        }

        @keyframes scanline-move {
          0% { background-position: 0 -40cqh; }
          100% { background-position: 0 40cqh; }
        }

        /* Scene 1 Scanner horizontal beam */
        @keyframes scanner-sweep-s1 {
          0%, 100% { transform: translateY(20px); opacity: 0.3; }
          50% { transform: translateY(280px); opacity: 0.9; }
        }
        .scene1-scanner-beam {
          animation: scanner-sweep-s1 4s ease-in-out infinite;
        }

        /* Scene 2 Laser Vertical Sweep animation */
        @keyframes laser-sweep-s2 {
          0%, 100% { left: 4%; opacity: 0.2; }
          50% { left: 96%; opacity: 0.8; }
        }
        .scene2-laser-sweep {
          animation: laser-sweep-s2 5s ease-in-out infinite;
        }

        /* Scene 5 Entropy line trace animation */
        .scene5-entropy-path {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: trace-entropy 2.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        @keyframes trace-entropy {
          to { stroke-dashoffset: 0; }
        }

        /* Scene 5 Wax Seal Stamping animation */
        .scene5-seal-stamp {
          transform-origin: center;
          animation: seal-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes seal-pop {
          0% { transform: scale(3) rotate(-45deg); opacity: 0; filter: blur(5px); }
          100% { transform: scale(1) rotate(-8deg); opacity: 1; filter: none; }
        }

        /* Text flicker animation */
        @keyframes text-flicker {
          0%, 100% { opacity: 0.8; }
          23% { opacity: 0.8; }
          24% { opacity: 0.2; }
          26% { opacity: 0.2; }
          27% { opacity: 0.9; }
          70% { opacity: 0.9; }
          71% { opacity: 0.1; }
          72% { opacity: 0.1; }
          73% { opacity: 0.8; }
        }
        .animate-flicker {
          animation: text-flicker 3s infinite;
        }

        /* Target vertical laser pulse bar sweeping up and down */
        @keyframes laser-pulse-y {
          0%, 100% {
            transform: translateY(-6px);
            opacity: 0.5;
          }
          50% {
            transform: translateY(6px);
            opacity: 1;
          }
        }
        .vertical-laser-pulse {
          animation: laser-pulse-y 1.5s ease-in-out infinite;
        }

        /* Dadaist Hard Splitch & Glitch Transition Profile on scene change */
        .glitch-container {
          animation: glitch-anim 0.38s steps(2, end) forwards;
        }

        @keyframes glitch-anim {
          0% {
            clip-path: inset(15% 0 65% 0);
            transform: translateX(-8px) skewX(3deg);
            filter: hue-rotate(60deg) saturate(1.8) contrast(1.4);
          }
          15% {
            clip-path: inset(80% 0 10% 0);
            transform: translateX(12px) skewX(-2deg);
            filter: hue-rotate(-45deg) contrast(1.8);
          }
          30% {
            clip-path: inset(40% 0 45% 0);
            transform: translateX(-15px) skewX(4deg);
            text-shadow: -3px 0 #ff0055, 3px 0 #00ffcc;
          }
          45% {
            clip-path: inset(90% 0 1% 0);
            transform: translateX(8px) skewX(-3deg);
            filter: brightness(2) contrast(1.5);
          }
          60% {
            clip-path: inset(2% 0 88% 0);
            transform: translateX(-4px) skewX(1deg);
            text-shadow: -2px 0 #00ffff, 2px 0 #ff00ff;
          }
          75% {
            clip-path: inset(60% 0 35% 0);
            transform: translateX(5px) skewX(-1deg);
            filter: hue-rotate(120deg) brightness(0.9);
          }
          90% {
            clip-path: inset(75% 0 15% 0);
            transform: translateX(-1px) skewX(0deg);
          }
          100% {
            clip-path: inset(0 0 0 0);
            transform: translateX(0px) skewX(0deg);
            filter: none;
            text-shadow: none;
          }
        }
      `}</style>

      {/* Screen texture patterns and lines */}
      <div className="absolute inset-0 pointer-events-none clay-overlay z-0" />
      <div className="absolute inset-0 pointer-events-none scanline-scroller z-0" />
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#f59e0b]/10 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-[#f59e0b]/5 to-transparent pointer-events-none" />

      {/* Background Decorative Large Linear B Glpyh path */}
      <div className="absolute top-[12cqh] right-[3cqw] w-[28cqw] h-[64cqh] opacity-[0.015] pointer-events-none z-0 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="#f59e0b" strokeWidth="2.5">
          <path d="M 50 15 C 20 15, 20 45, 50 45 C 80 45, 80 15, 50 15 Z M 50 45 V 85 M 25 85 H 75 M 35 60 H 65" />
        </svg>
      </div>

      {/* Consolidated Top Console Header */}
      <div className="flex flex-col gap-[1cqh] border-b border-[#f59e0b]/15 pb-[1.5cqh] z-10 shrink-0 text-left">
        {/* Meta Status Bar */}
        <div className="flex justify-between items-center text-[0.85cqw] font-mono opacity-60 uppercase tracking-widest">
          <div className="flex items-center gap-[0.6cqw]">
            <Cpu className="w-[1.2cqw] h-[1.2cqw] animate-pulse text-[#f59e0b]" />
            <span className="font-bold text-[#f59e0b]">{meta.theme}</span>
            <span className="text-zinc-500">//</span>
            <span className="text-emerald-500 animate-pulse">[DECRYPT ENGINE: SYNCED]</span>
          </div>
          <div className="flex items-center gap-[1cqw]">
            <span>{meta.densityLabel}</span>
            <span className="text-zinc-500">//</span>
            <span>SYS_T_1952</span>
          </div>
        </div>

        {/* Top Laser Scan Ticker Navigation */}
        {renderNavigation()}

        {/* Scene Title Area */}
        <div className="flex justify-between items-end mt-[0.5cqh]">
          <div>
            <span className="text-[0.7cqw] font-mono text-zinc-500 uppercase tracking-widest block">
              {isZh ? "当前解密场景" : "ACTIVE DECIPHERMENT SCENE"} // SCENE_0{scene}
            </span>
            <h1 className="text-[2.5cqw] font-serif font-black tracking-tight mt-[0.2cqh] leading-none text-[#ece0cf]">
              {currentScene.title}
            </h1>
          </div>
          <div className="text-right font-mono">
            <div className="text-[1.15cqw] font-bold text-[#f59e0b] tracking-wider uppercase">
              {isZh ? "迈锡尼线形文字 B 破译控制台" : "Linear B Decoder Console"}
            </div>
            <div className="text-[0.75cqw] opacity-40 uppercase tracking-widest mt-[0.2cqh] text-zinc-400">
              {meta.densityLabel} // SITE_SYSTEM_ARCH
            </div>
          </div>
        </div>
      </div>

      {/* Slide Content Box with hard transition glitch effect */}
      <div
        key={`glitch-wrapper-${scene}`}
        className="flex-1 w-full relative overflow-hidden my-[2cqh] z-10 glitch-container flex items-center justify-center"
      >
        {renderScene()}
      </div>

      {/* Decorative Slide Footer */}
      <div className="flex justify-between items-center text-[0.75cqw] font-mono opacity-50 border-t border-[#f59e0b]/10 pt-[1cqh] z-10 shrink-0">
        <span>© 1952 - 2026 {isZh ? "伦敦大学古希腊碑铭研究会" : "The London Hellenic Inscription Society"}</span>
        <span>{isZh ? "基于代数网格统计学之爱琴海文字破译系统" : "Aegean Bronze Age Cryptanalysis Board v1.2"}</span>
      </div>
    </div>
  );
}
