import React from "react";

export const getMetadata = (lang) => ({
  id: "24",
  tier: "C",
  name: lang === "zh" ? "罗塞塔石碑碑文对照译注" : "Rosetta Stone Cryptanalysis",
  theme: lang === "zh" ? "罗塞塔石碑三体文字解译" : "Rosetta Stone Epigraphic Decipherment",
  densityLabel: lang === "zh" ? "石碑对照" : "Epigraphy Parallel Ledger",
  colors: { bg: "bg-[#0c0d12]", ink: "text-[#d4af37]", panel: "border-[#d4af37]/20" },
  typography: { header: "font-serif", body: "font-serif" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "托勒密五世孟菲斯诏书" : "The Memphis Decree of Ptolemy V",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "载入石碑拓片" : "Load Stone Slabs", 
          title: lang === "zh" ? "黑色玄武岩之皇家圣旨" : "Basalt Decree of Ptolemy V", 
          body: lang === "zh" ? "“因托勒密国王厚待神庙，众神祭司决议将其功绩刻于石碑，以三种语言传示万代。”公元前196年孟菲斯诏书，铭刻于坚硬的黑色玄武岩之上。" : "“As King Ptolemy bestowed favors upon temples, priests decreed his honors be carved on stone in three tongues to endure forever.” The 196 BC Memphis Decree, carved on dark basalt." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "对齐三种语言" : "Align Three Tongues", 
          title: lang === "zh" ? "三种文字的政治治理媒介" : "Political Media of Three Scripts", 
          body: lang === "zh" ? "石碑包含圣书体（Hieroglyphic，祭司神圣之语）、世俗体（Demotic，平民文书之字）与古希腊文（Greek，统治阶层之政令），构筑起行政权力的坚固三角。" : "The slab layers Hieroglyphic (sacred priestly script), Demotic (cursive administrative script), and Ancient Greek (governing statecraft script), forming a triangular media of power." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "定位王名圈" : "Locate Cartouche Rings", 
          title: lang === "zh" ? "商博良的破译之门" : "Champollion's Gateway of Names", 
          body: lang === "zh" ? "十九世纪初，商博良（Champollion）发现，被椭圆绳圈包裹的“王名圈”（Cartouche）是整篇玄武岩天书的解密金钥匙，托勒密拼音由此破冰。" : "In the early 19th century, Jean-François Champollion discovered that the oval 'Cartouche' rings enclosing royal names were the golden keys to decoding basalt scriptures, unlocking phonetics." 
        }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "神圣圣书体与古希腊文对照" : "Sacred Hieroglyphs vs Ancient Greek",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "投影圣书象形" : "Project Sacred Pictograms", 
          title: lang === "zh" ? "象形表意与拼音之交织" : "Ideograms Interwoven with Phonetics", 
          body: lang === "zh" ? "圣书体字模充满了飞鸟、走兽、权杖等精美图绘。过去学者误认为其仅表意，实际它们大多充当声符，拼写出法老王名的微观语音。" : "Hieroglyphic characters abound with birds, beasts, and scepters. Scholars once mistook them for pure ideograms; in fact, they mostly acted as phonetics spelling Pharaoh names." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "对齐希腊译文" : "Align Greek Reference", 
          title: lang === "zh" ? "希腊统治官文的精确对应" : "The Exact Greek Reference System", 
          body: lang === "zh" ? "古希腊文作为塞琉古与托勒密王朝的统治官方语言，字形清晰可辨。以希腊文王名‘Ptolemaios’为基轴，反向拉网锁定象形字模序列。" : "Ancient Greek was the administrative language of the Ptolemaic dynasty. Using the Greek name 'Ptolemaios' as an anchor, cryptanalysts back-mapped the corresponding glyph loops." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "激活拼音格" : "Activate Phonetic Grid", 
          title: lang === "zh" ? "普托拉麦斯（P-T-O-L-M-Y-S）拼读" : "P-T-O-L-M-Y-S Phonetic Mapping", 
          body: lang === "zh" ? "将象形符号：方块、半圆、绳圈、狮子、转折、芦苇与折线，依次对齐希腊字母，完成了人类历史上最波澜壮阔之跨语言音素手势交叠。" : "Aligning square, semi-circle, loop, lion, elbow, reed, and wavy lines to Greek letters, completing the grandest cross-language phonetic handshake in history." 
        }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "商博良破译三大战役" : "Three Epochs of Decipherment",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "描红托勒密圈" : "Outline Ptolemy Cartouche", 
          title: lang === "zh" ? "首阶段：托勒密王名圈比对提取" : "Stage I: Cartouche Identification & Comparison", 
          body: lang === "zh" ? "在象形碑文的第十四行定位到包围在圆绳中的‘Ptolemy’字符。这组符号高频出现，且与其在希腊碑文中的位置高度对齐。" : "Locating 'Ptolemy' wrapped inside oval ropes on line 14 of the hieroglyphs. This group recurred frequently, aligning with 'Ptolemaios' positions in Greek." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "对齐克里奥圈" : "Compare Cleopatra Cartouche", 
          title: lang === "zh" ? "二阶段：菲莱方尖碑克里奥佩特拉圈对齐" : "Stage II: Cleopatra Cartouche Crossprobings", 
          body: lang === "zh" ? "引入菲莱（Philae）方尖碑的‘Cleopatra’名圈。通过提取两者共同含有的P、T、O、L四个拼音字母，彻底求证了音素拼读原理。" : "Comparing with 'Cleopatra' from Philae obelisk. Extracting shared letters P, T, O, L proved the phonetic spelling theorem of Egyptian glyphs." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "译注世俗体" : "Decode Demotic Script", 
          title: lang === "zh" ? "三阶段：世俗体草书向圣书体溯源" : "Stage III: Demotic Cursive Reintegration", 
          body: lang === "zh" ? "攻克最繁复的世俗体草书。确定其为圣书体的草写简化，从而将整篇诏书的释义完美缝合，拂去法老天书上两千年的尘埃。" : "Solving Demotic cursive. Proving it a simplified flow-draft of Hieroglyphs merged the full decree meaning, removing 2,000 years of dust from Egypt's past." 
        }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "碑文音符四大特征评估" : "Four Core Strata of Glyphic Analysis",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "拆解狮子声符" : "Verify Lion Phonetic", 
          title: lang === "zh" ? "狮子（Lion）声符：/L/音素定位" : "The Lion Glyph: Phonetic /L/ Mapping", 
          body: lang === "zh" ? "在托勒密（Ptolemy）及克里奥佩特拉（Cleopatra）名圈中，侧卧狮子均稳定出现在/L/音位置。证实该图形作为纯粹声符充当拼音基准。" : "In both Ptolemy and Cleopatra loops, the recumbent lion steadily maps to /L/. This confirms the picture behaves as a phoneme base." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "核定限定符号" : "Audit Determinatives", 
          title: lang === "zh" ? "限定性意符（Determinatives）解析" : "Ideographic Determinative Anchors", 
          body: lang === "zh" ? "在拼音字母后附带的‘王冠’或‘神像’，作为无音意符，用于判定前述词汇为神圣法老，防止多义词义出现分化歧义。" : "Glyphs of crowns or gods trailing phonetics behave as silent determinatives, designating the word as divine pharaoh to prevent textual drift." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "核算出现频次" : "Check Cartouche Frequencies", 
          title: lang === "zh" ? "诏书王名圈高频分布密度" : "Cartouche Spatial Frequency Density", 
          body: lang === "zh" ? "全碑共计出现王名圈28处。其空间分布位置与希腊文中的‘王（Basileus）’高度拟合，排除了碑文局部磨损造成之翻译漂移。" : "28 Cartouches distribute across the basalt face, mapping 1:1 to 'Basileus' in Greek text, bypassing local wearing errors cleanly." 
        }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "罗塞塔三体文字对照总表" : "Rosetta Parallel Cryptanalysis Ledger",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "对齐三大文体" : "Align Three Columns", 
          title: lang === "zh" ? "圣书、世俗与希腊文三语全译" : "Bilingual Parallel Epigraphy Metrics", 
          body: lang === "zh" ? "汇总拼写、世俗草写与希腊刻字的三体对齐总账。包含王名元音修正、祭司免税条款及神庙献祭规则等关键碑文段落。" : "Parallel catalog aligning Hieroglyphic, Demotic, and Greek. Logs vowel shifts, temple tax cuts, and divine tribute codes." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "加盖法老王名圈金玺" : "Stamp Golden Cartouche", 
          title: lang === "zh" ? "法老孟菲斯圣旨呈阿蒙大祭司章呈" : "Pharaoh Memphis Decrees presented to Amun High Priests", 
          body: lang === "zh" ? "商博良整理出完整译本，于末页加盖‘托勒密法老王名圈金泥火漆印’（Golden Cartouche Seal），破译古埃及三千年文字迷局。" : "Champollion compiled the complete grammar translation, stamping it with the Golden Pharaoh Cartouche Seal, solving Egypt's 3,000-year silence." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "签发历史巨制破译书" : "Disburse Decipherment Decree", 
          title: lang === "zh" ? "法老圣书文法解密专著签发印制" : "Grammar of Egyptian Hieroglyphs Publication", 
          body: lang === "zh" ? "签发《埃及象形文字文法》专著印制，宣告人类对法老帝国历史认知的全面觉醒，开启近代埃及学之恢弘伟业。" : "Decreeing publication of Egyptian Grammar, awakening humanity to the Pharaoh Empire, launching the epic discipline of Modern Egyptology." 
        }
      ]
    }
  ]
});

export default function Style24({ scene, beat, language, isThumbnail, onNavigate }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];

  const renderNavigation = () => {
    const scenesList = [
      { id: 1, nameZh: "神圣王名", nameEn: "Sacred Cover", glyph: "𓁹" },
      { id: 2, nameZh: "双体对照", nameEn: "Dual Script", glyph: "𓅃" },
      { id: 3, nameZh: "破译三阶", nameEn: "3-Stage Sequence", glyph: "𓋹" },
      { id: 4, nameZh: "音符矩阵", nameEn: "Glyph Matrix", glyph: "𓆣" },
      { id: 5, nameZh: "三语总表", nameEn: "Parallel Ledger", glyph: "𓋑" }
    ];

    return (
      <div className="absolute top-[2cqh] inset-x-[3cqw] h-[6cqh] flex items-center justify-center z-40">
        <div className="relative w-full max-w-[60cqw] h-[5cqh] bg-[#15161e] border border-[#d4af37]/30 rounded-full px-[2cqw] flex items-center justify-between gap-[1cqw] shadow-inner shadow-black/80">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1cqw] h-[4cqh] bg-gradient-to-r from-[#aa7c11] to-[#d4af37] rounded-l-full border-y border-l border-[#d4af37]/40" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1cqw] h-[4cqh] bg-gradient-to-l from-[#aa7c11] to-[#d4af37] rounded-r-full border-y border-r border-[#d4af37]/40" />

          {scenesList.map((s) => {
            const active = s.id === scene;
            return (
              <div
                key={s.id}
                onClick={() => onNavigate && onNavigate(s.id, 0)}
                className={`group relative flex-1 h-[4cqh] rounded-full border flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  active
                    ? "border-[#d4af37] bg-[#d4af37]/10 shadow-[0_0_12px_rgba(212,175,55,0.4)] text-[#d4af37]"
                    : "border-[#484a50]/40 bg-transparent text-[#a9a393]/60 hover:text-[#d4af37]/80 hover:border-[#d4af37]/40"
                }`}
              >
                {active && !isThumbnail && (
                  <>
                    <div className="absolute w-[3px] h-[3px] bg-[#d4af37] rounded-full opacity-0 pointer-events-none" style={{ bottom: "100%", left: "30%", animation: "dust-rise-1 2s infinite ease-out" }} />
                    <div className="absolute w-[2px] h-[2px] bg-[#d4af37] rounded-full opacity-0 pointer-events-none" style={{ bottom: "100%", left: "70%", animation: "dust-rise-2 2.5s infinite ease-out 0.5s" }} />
                    <div className="absolute w-[4px] h-[4px] bg-[#d4af37] rounded-full opacity-0 pointer-events-none" style={{ bottom: "100%", left: "50%", animation: "dust-rise-3 1.8s infinite ease-out 1s" }} />
                  </>
                )}

                <div className="flex items-center gap-[0.5cqw] px-[1cqw]">
                  <span className="font-mono text-[1.2cqw] leading-none">{s.glyph}</span>
                  <span className="font-serif text-[0.8cqw] font-bold tracking-wider hidden md:inline">
                    {language === "zh" ? s.nameZh : s.nameEn}
                  </span>
                </div>

                <div className="absolute bottom-[-5cqh] left-1/2 -translate-x-1/2 bg-[#15161e] border border-[#d4af37]/40 px-[1cqw] py-[0.5cqh] rounded shadow-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50 whitespace-nowrap text-center">
                  <div className="text-[#d4af37] font-bold text-[0.85cqw]">{s.nameZh}</div>
                  <div className="text-[#dfdcd3] text-[0.7cqw] italic font-sans">{s.nameEn}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderScene1 = () => {
    return (
      <div className="w-full h-full flex flex-col justify-between p-[1.5cqw] relative">
        <div className="flex-1 flex flex-col items-center justify-center relative">
          <div className="absolute w-[25cqw] h-[25cqw] rounded-full bg-[#d4af37]/5 blur-[40px] pointer-events-none" />
          
          <div className="relative p-[1cqw] rounded-full border border-[#d4af37]/10 bg-black/20 backdrop-blur-sm shadow-2xl animate-pulse-gold">
            <svg viewBox="0 0 100 140" className="w-[14cqw] h-[18cqw] text-[#d4af37]">
              <defs>
                <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f3e5ab" />
                  <stop offset="30%" stopColor="#d4af37" />
                  <stop offset="70%" stopColor="#aa7c11" />
                  <stop offset="100%" stopColor="#5a3d05" />
                </linearGradient>
                <filter id="chisel">
                  <feGaussianBlur stdDeviation="0.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="arithmetic" k2="2" k3="-1" />
                </filter>
              </defs>
              
              <rect x="15" y="10" width="70" height="110" rx="35" fill="none" stroke="url(#gold-grad)" strokeWidth="3" filter="url(#chisel)" />
              <rect x="18" y="13" width="64" height="104" rx="32" fill="none" stroke="#0c0d12" strokeWidth="1" opacity="0.5" />
              
              <line x1="15" y1="120" x2="85" y2="120" stroke="url(#gold-grad)" strokeWidth="4" strokeLinecap="round" />
              <path d="M 30,120 Q 50,132 70,120" fill="none" stroke="url(#gold-grad)" strokeWidth="1.5" />
              
              <g opacity={beat >= 1 ? 1 : 0.4} className="transition-opacity duration-500">
                <rect x="42" y="24" width="16" height="12" fill="none" stroke="url(#gold-grad)" strokeWidth="1.5" />
                <line x1="42" y1="30" x2="58" y2="30" stroke="url(#gold-grad)" strokeWidth="0.5" strokeDasharray="1 1" />
              </g>
              
              <g opacity={beat >= 1 ? 1 : 0.4} className="transition-opacity duration-500">
                <path d="M 40,48 A 10,10 0 0,0 60,48 Z" fill="none" stroke="url(#gold-grad)" strokeWidth="1.5" />
              </g>
              
              <g opacity={beat >= 1 ? 1 : 0.4} className="transition-opacity duration-500">
                <path d="M 42,60 C 42,54 58,54 58,60 C 58,66 42,66 42,60" fill="none" stroke="url(#gold-grad)" strokeWidth="1.5" />
              </g>
              
              <g opacity={beat >= 1 ? 1 : 0.4} className="transition-opacity duration-500">
                <path d="M 35,78 Q 45,70 60,74 L 65,84 L 35,84 Z" fill="none" stroke="url(#gold-grad)" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="58" cy="76" r="1.5" fill="currentColor" />
              </g>
              
              <g opacity={beat >= 1 ? 1 : 0.4} className="transition-opacity duration-500">
                <path d="M 44,90 L 44,105 Q 50,105 48,90 Z M 52,90 L 52,105 Q 58,105 56,90 Z" fill="none" stroke="url(#gold-grad)" strokeWidth="1.2" />
              </g>
              
              <g opacity={beat >= 1 ? 1 : 0.4} className="transition-opacity duration-500">
                <path d="M 38,112 H 62 M 44,115 H 56" stroke="url(#gold-grad)" strokeWidth="1.2" />
              </g>
            </svg>
          </div>
          
          <div className="mt-[1.5cqh] font-serif italic text-[#a9a393] text-[1.1cqw] tracking-wider text-center max-w-[40cqw]">
            Fig. I : The Royal Cartouche Enclosing the Phonemic Symbols of King Ptolemaios (196 BC)
          </div>
        </div>
        
        <div className="border border-[#d4af37]/20 bg-black/40 backdrop-blur-sm rounded-[0.4cqw] p-[1.5cqw] shadow-2xl max-w-[70cqw] mx-auto text-center">
          <span className="font-sans text-[0.9cqw] font-bold tracking-widest uppercase text-[#d4af37]/60 border-b border-[#d4af37]/20 pb-[0.3cqh] inline-block mb-[1cqh]">
            {meta.theme}
          </span>
          <h2 className="text-[1.8cqw] font-bold text-[#d4af37] mb-[1cqh]">
            {currentBeat.title}
          </h2>
          <p className="text-[1.1cqw] text-[#dfdcd3] leading-relaxed font-serif">
            {currentBeat.body}
          </p>
        </div>
      </div>
    );
  };

  const renderScene2 = () => {
    return (
      <div className="w-full h-full flex flex-col justify-between p-[1cqw] relative">
        <div className="flex justify-between items-center border-b border-[#d4af37]/20 pb-[0.5cqh] mb-[1.5cqh]">
          <span className="font-sans text-[0.9cqw] font-bold tracking-widest uppercase text-[#d4af37]/60">
            {meta.theme}
          </span>
          <span className="font-mono text-[0.8cqw] text-[#a9a393]">
            EPIGRAPHIC COMPARISON • SCENE 02
          </span>
        </div>

        <div className="flex-1 grid grid-cols-[58fr_38fr] gap-[2cqw] items-stretch min-h-0">
          <div className="border border-[#d4af37]/20 bg-black/40 backdrop-blur-sm rounded-[0.4cqw] p-[1.5cqw] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-40 pointer-events-none" style={{
              animation: "laser-sweep-v 4s infinite ease-in-out"
            }} />

            <div>
              <span className="font-serif text-[1.1cqw] text-[#d4af37] font-bold uppercase tracking-wider block border-b border-[#d4af37]/10 pb-1 mb-3">
                Hieroglyphic (Sacred Pictographs / 圣书体象形)
              </span>
              <p className="text-[0.9cqw] text-[#a9a393] leading-relaxed mb-4 font-sans italic">
                Sacred priestly script carved with meticulous bird, eye, and scepter symbols.
                <span className="block text-[#dfdcd3] font-serif not-italic mt-1">祭司专用神圣雕刻文字，以飞鸟、神眼、权杖等精美图绘表音。</span>
              </p>
            </div>

            <div className="flex-1 flex items-center justify-center my-[1cqh]">
              <svg viewBox="0 0 200 100" className="w-[20cqw] h-[10cqw] text-[#dfdcd3]/80">
                <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                  <g transform="translate(10, 15) scale(0.8)" opacity={beat >= 0 ? 1 : 0.3}>
                    <path d="M 10,30 Q 25,10 40,25 L 35,45 L 15,40 Z" stroke="#d4af37" strokeWidth="1.5" />
                    <circle cx="28" cy="20" r="1.5" fill="#d4af37" />
                    <path d="M 20,38 L 20,50 M 30,42 L 30,50" stroke="#d4af37" />
                    <text x="25" y="62" fontSize="8" textAnchor="middle" fill="#a9a393" className="font-mono">𓅃 (Horus)</text>
                  </g>

                  <g transform="translate(75, 15) scale(0.8)" opacity={beat >= 1 ? 1 : 0.3}>
                    <ellipse cx="25" cy="25" rx="18" ry="10" stroke="#d4af37" strokeWidth="1.5" />
                    <circle cx="25" cy="25" r="5" fill="#d4af37" />
                    <path d="M 15,32 Q 22,28 25,38 L 32,28" stroke="#d4af37" strokeWidth="1.5" />
                    <text x="25" y="62" fontSize="8" textAnchor="middle" fill="#a9a393" className="font-mono">𓁹 (Eye)</text>
                  </g>

                  <g transform="translate(140, 15) scale(0.8)" opacity={beat >= 2 ? 1 : 0.3}>
                    <path d="M 5,20 Q 15,10 25,20 Q 35,30 45,20" stroke="#d4af37" strokeWidth="1.5" />
                    <path d="M 5,30 Q 15,20 25,30 Q 35,40 45,30" stroke="#d4af37" strokeWidth="1.5" />
                    <text x="25" y="62" fontSize="8" textAnchor="middle" fill="#a9a393" className="font-mono">𓈓 (Water)</text>
                  </g>
                </g>

                {beat >= 2 && (
                  <g stroke="#d4af37" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6">
                    <line x1="30" y1="80" x2="30" y2="100" />
                    <line x1="95" y1="80" x2="95" y2="100" />
                    <line x1="160" y1="80" x2="160" y2="100" />
                  </g>
                )}
              </svg>
            </div>

            <div className="border-t border-[#d4af37]/10 pt-[1cqh] mt-[1cqh]">
              <h3 className="text-[1.1cqw] font-bold text-[#d4af37] mb-0.5">{currentBeat.title}</h3>
              <p className="text-[0.9cqw] text-[#dfdcd3] leading-relaxed">{currentBeat.body}</p>
            </div>
          </div>

          <div className="border border-[#d4af37]/20 bg-black/40 backdrop-blur-sm rounded-[0.4cqw] p-[1.5cqw] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-40 pointer-events-none" style={{
              animation: "laser-sweep-v 4s infinite ease-in-out 2s"
            }} />

            <div>
              <span className="font-serif text-[1.1cqw] text-[#d4af37] font-bold uppercase tracking-wider block border-b border-[#d4af37]/10 pb-1 mb-3">
                Demotic (Cursive / 世俗体)
              </span>
              <p className="text-[0.9cqw] text-[#a9a393] leading-relaxed mb-4 font-sans italic">
                Flowing administrative script used for daily statecraft and civil decrees.
                <span className="block text-[#dfdcd3] font-serif not-italic mt-1">平民与文书通用的草书体，字形高度简化，书写流畅。</span>
              </p>
            </div>

            <div className="flex-1 flex items-center justify-center my-[1cqh]">
              <svg viewBox="0 0 120 100" className="w-[12cqw] h-[10cqw] text-[#dfdcd3]/80">
                <g fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 15,25 C 25,15 35,35 25,45 C 20,50 15,35 20,30 C 25,25 35,20 40,35" opacity={beat >= 0 ? 1 : 0.3} />
                  <path d="M 55,20 C 65,20 75,30 65,40 C 55,45 50,30 60,25 C 70,20 80,35 75,45" opacity={beat >= 1 ? 1 : 0.3} />
                  <path d="M 95,25 C 90,30 105,35 100,40 C 95,45 110,45 105,50" opacity={beat >= 2 ? 1 : 0.3} />
                </g>
                <text x="60" y="85" fontSize="7" textAnchor="middle" fill="#a9a393" className="font-serif italic">Cursive Derivatives</text>
              </svg>
            </div>

            <div className="border-t border-[#d4af37]/10 pt-[1cqh] mt-[1cqh] bg-black/20 p-[0.8cqw] rounded-sm">
              <div className="flex justify-between text-[0.8cqw] font-mono">
                <span className="text-[#a9a393]">ALIGNMENT STATUS:</span>
                <span className={beat >= 2 ? "text-emerald-500 font-bold" : "text-[#d4af37] animate-pulse"}>
                  {beat >= 2 ? "100% LOCKED" : "ALIGNING..."}
                </span>
              </div>
              <div className="w-full bg-[#484a50]/30 h-[4px] rounded-full mt-1 overflow-hidden">
                <div className="bg-[#d4af37] h-full transition-all duration-1000" style={{ width: beat === 0 ? "33%" : beat === 1 ? "66%" : "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderScene3 = () => {
    return (
      <div className="w-full h-full flex flex-col justify-between p-[1cqw] relative">
        <div className="flex justify-between items-center border-b border-[#d4af37]/20 pb-[0.5cqh] mb-[1.5cqh]">
          <span className="font-sans text-[0.9cqw] font-bold tracking-widest uppercase text-[#d4af37]/60">
            {meta.theme}
          </span>
          <span className="font-mono text-[0.8cqw] text-[#a9a393]">
            DECIPHERMENT SEQUENCE • SCENE 03
          </span>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-[1.5cqw] items-stretch my-[1cqh]">
          <div className={`border rounded-[0.4cqw] p-[1.2cqw] flex flex-col justify-between transition-all duration-700 ${
            beat >= 0 
              ? "border-[#d4af37] bg-[#d4af37]/5 shadow-[0_0_15px_rgba(212,175,55,0.15)] opacity-100" 
              : "border-[#484a50]/40 bg-black/20 opacity-30"
          }`}>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-[0.8cqw] font-bold text-[#d4af37] bg-[#d4af37]/10 px-1.5 py-0.5 rounded">
                  STAGE I / 阶段一
                </span>
                <span className="text-[0.8cqw] text-[#a9a393]">Beat 0</span>
              </div>
              <h3 className="text-[1.1cqw] font-bold text-[#d4af37] mb-1">
                Cartouche Identification <span className="block text-[0.9cqw] font-normal text-[#dfdcd3] mt-0.5">王名圈提取比对</span>
              </h3>
              <p className="text-[0.85cqw] text-[#dfdcd3] leading-relaxed mb-3">
                Locating 'Ptolemy' wrapped inside oval ropes on line 14 of the hieroglyphs. This group recurred frequently, aligning with Greek positions.
                <span className="block text-[#a9a393] text-[0.8cqw] italic mt-1">在圣书体碑文第14行定位到圆绳包裹的“Ptolemy”字符，与其在希腊碑文中的位置高度对齐。</span>
              </p>
            </div>

            <div className="h-[8cqh] bg-black/40 rounded border border-[#484a50]/30 flex items-center justify-center p-2">
              <svg viewBox="0 0 100 40" className="w-full h-full text-[#d4af37]">
                <rect x="10" y="8" width="50" height="24" rx="12" fill="none" stroke="currentColor" strokeWidth="1" />
                <rect x="40" y="8" width="50" height="24" rx="12" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1" />
                <circle cx="50" cy="20" r="3" fill="#d4af37" className="animate-ping" />
                <text x="50" y="38" fontSize="5" textAnchor="middle" fill="#a9a393">Match: Ptolemaios</text>
              </svg>
            </div>
          </div>

          <div className={`border rounded-[0.4cqw] p-[1.2cqw] flex flex-col justify-between transition-all duration-700 ${
            beat >= 1 
              ? "border-[#d4af37] bg-[#d4af37]/5 shadow-[0_0_15px_rgba(212,175,55,0.15)] opacity-100" 
              : "border-[#484a50]/40 bg-black/20 opacity-30"
          }`}>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-[0.8cqw] font-bold text-[#d4af37] bg-[#d4af37]/10 px-1.5 py-0.5 rounded">
                  STAGE II / 阶段二
                </span>
                <span className="text-[0.8cqw] text-[#a9a393]">Beat 1</span>
              </div>
              <h3 className="text-[1.1cqw] font-bold text-[#d4af37] mb-1">
                Phonetic Crossprobings <span className="block text-[0.9cqw] font-normal text-[#dfdcd3] mt-0.5">菲莱方尖碑双圈对齐</span>
              </h3>
              <p className="text-[0.85cqw] text-[#dfdcd3] leading-relaxed mb-3">
                Comparing with 'Cleopatra' from Philae obelisk. Extracting shared letters P, T, O, L proved the phonetic spelling theorem of Egyptian glyphs.
                <span className="block text-[#a9a393] text-[0.8cqw] italic mt-1">引入菲莱方尖碑的“Cleopatra”名圈。通过提取两者共有的 P、T、O、L 字母，求证音素拼读原理。</span>
              </p>
            </div>

            <div className="h-[8cqh] bg-black/40 rounded border border-[#484a50]/30 flex items-center justify-center p-2">
              <svg viewBox="0 0 120 40" className="w-full h-full text-[#d4af37]">
                <g fontSize="6" fontFamily="sans-serif" fill="currentColor">
                  <text x="10" y="15">PTOLEMY</text>
                  <text x="10" y="30">CLEOPATRA</text>
                  <path d="M 15,18 L 15,24 M 25,18 L 25,24 M 35,18 L 35,24 M 45,18 L 45,24" stroke="currentColor" strokeWidth="0.8" />
                  <rect x="8" y="8" width="42" height="24" fill="none" stroke="#d4af37" strokeWidth="0.5" />
                  <text x="80" y="22" fontSize="7" fill="#d4af37" fontWeight="bold">P-T-O-L OK!</text>
                </g>
              </svg>
            </div>
          </div>

          <div className={`border rounded-[0.4cqw] p-[1.2cqw] flex flex-col justify-between transition-all duration-700 ${
            beat >= 2 
              ? "border-[#d4af37] bg-[#d4af37]/5 shadow-[0_0_15px_rgba(212,175,55,0.15)] opacity-100" 
              : "border-[#484a50]/40 bg-black/20 opacity-30"
          }`}>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-[0.8cqw] font-bold text-[#d4af37] bg-[#d4af37]/10 px-1.5 py-0.5 rounded">
                  STAGE III / 阶段三
                </span>
                <span className="text-[0.8cqw] text-[#a9a393]">Beat 2</span>
              </div>
              <h3 className="text-[1.1cqw] font-bold text-[#d4af37] mb-1">
                Demotic Reintegration <span className="block text-[0.9cqw] font-normal text-[#dfdcd3] mt-0.5">世俗体草书溯源</span>
              </h3>
              <p className="text-[0.85cqw] text-[#dfdcd3] leading-relaxed mb-3">
                Solving Demotic cursive. Proving it a simplified flow-draft of Hieroglyphs merged the full decree meaning, removing 2,000 years of dust.
                <span className="block text-[#a9a393] text-[0.8cqw] italic mt-1">攻克繁复的世俗体草书。确定其为圣书体的草写简化，从而将整篇诏书的释义完美缝合。</span>
              </p>
            </div>

            <div className="h-[8cqh] bg-black/40 rounded border border-[#484a50]/30 flex items-center justify-center p-2">
              <svg viewBox="0 0 100 40" className="w-full h-full text-[#d4af37]">
                <text x="50" y="18" fontSize="7" textAnchor="middle" fill="#d4af37" fontWeight="bold" className="animate-pulse">𓊹𓍹𓎡𓏲𓍺 ➔ PTOLEMAIOS</text>
                <text x="50" y="32" fontSize="5" textAnchor="middle" fill="#a9a393">TRANSLATION VERIFIED</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderScene4 = () => {
    return (
      <div className="w-full h-full flex flex-col justify-between p-[1cqw] relative">
        <div className="flex justify-between items-center border-b border-[#d4af37]/20 pb-[0.5cqh] mb-[1.5cqh]">
          <span className="font-sans text-[0.9cqw] font-bold tracking-widest uppercase text-[#d4af37]/60">
            {meta.theme}
          </span>
          <span className="font-mono text-[0.8cqw] text-[#a9a393]">
            GLYPH MATRIX • SCENE 04
          </span>
        </div>

        <div className="flex-1 grid grid-cols-[60fr_40fr] grid-rows-[45fr_55fr] gap-[1.5cqw] items-stretch min-h-0">
          <div className={`border rounded-[0.4cqw] p-[1cqw] flex flex-col justify-between transition-all duration-700 ${
            beat === 0 
              ? "border-[#d4af37] bg-[#d4af37]/5 shadow-[0_0_15px_rgba(212,175,55,0.2)]" 
              : "border-[#484a50]/30 bg-black/20"
          }`}>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-serif text-[1cqw] text-[#d4af37] font-bold">
                  I. Royal Titles & Cartouches (法老王室头衔)
                </span>
                <span className={`w-2 h-2 rounded-full ${beat === 0 ? "bg-[#d4af37] animate-ping" : "bg-transparent"}`} />
              </div>
              <p className="text-[0.8cqw] text-[#dfdcd3] leading-snug">
                In both Ptolemy and Cleopatra loops, the recumbent lion steadily maps to /L/. This confirms the picture behaves as a phoneme base.
                <span className="block text-[#a9a393] text-[0.75cqw] italic mt-0.5">在托勒密与克里奥名圈中，侧卧狮子均稳定出现在 /L/ 音位置，证实其作为纯声符的拼音基准。</span>
              </p>
            </div>

            <div className="flex items-center gap-3 bg-black/30 p-1.5 rounded border border-[#484a50]/20">
              <svg viewBox="0 0 40 24" className="w-[4cqw] h-[2.5cqw] text-[#d4af37]">
                <path d="M 5,18 Q 15,10 30,14 L 35,22 L 5,22 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="28" cy="14" r="1" fill="currentColor" />
              </svg>
              <div className="font-mono text-[0.75cqw]">
                <span className="text-[#d4af37] font-bold">LION GLYPH (𓃬)</span> ➔ /L/ Phoneme
              </div>
            </div>
          </div>

          <div className={`border rounded-[0.4cqw] p-[1cqw] flex flex-col justify-between transition-all duration-700 ${
            beat === 1 
              ? "border-[#d4af37] bg-[#d4af37]/5 shadow-[0_0_15px_rgba(212,175,55,0.2)]" 
              : "border-[#484a50]/30 bg-black/20"
          }`}>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-serif text-[1cqw] text-[#d4af37] font-bold">
                  II. Ideographic Determinatives (限定性意符)
                </span>
                <span className={`w-2 h-2 rounded-full ${beat === 1 ? "bg-[#d4af37] animate-ping" : "bg-transparent"}`} />
              </div>
              <p className="text-[0.8cqw] text-[#dfdcd3] leading-snug">
                Glyphs of crowns or gods trailing phonetics behave as silent determinatives, designating the word as divine pharaoh to prevent textual drift.
                <span className="block text-[#a9a393] text-[0.75cqw] italic mt-0.5">王冠或神像等无音意符，用于判定前述词汇为神圣法老，防止多义词出现歧义。</span>
              </p>
            </div>

            <div className="flex items-center gap-3 bg-black/30 p-1.5 rounded border border-[#484a50]/20">
              <svg viewBox="0 0 24 24" className="w-[3cqw] h-[2cqw] text-[#d4af37] fill-none stroke-current" strokeWidth="1.2">
                <path d="M5 20h14L17 8l-5 4-5-4z" />
                <circle cx="12" cy="5" r="1" fill="currentColor" />
              </svg>
              <div className="font-mono text-[0.75cqw]">
                <span className="text-[#d4af37] font-bold">CROWN (𓋑)</span> ➔ Divine Indicator
              </div>
            </div>
          </div>

          <div className={`border rounded-[0.4cqw] p-[1cqw] flex flex-col justify-between transition-all duration-700 ${
            beat === 2 
              ? "border-[#d4af37] bg-[#d4af37]/5 shadow-[0_0_15px_rgba(212,175,55,0.2)]" 
              : "border-[#484a50]/30 bg-black/20"
          }`}>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-serif text-[1cqw] text-[#d4af37] font-bold">
                  III. Coronation Calendar (孟菲斯登基大典)
                </span>
                <span className={`w-2 h-2 rounded-full ${beat === 2 ? "bg-[#d4af37] animate-ping" : "bg-transparent"}`} />
              </div>
              <p className="text-[0.8cqw] text-[#dfdcd3] leading-snug">
                28 Cartouches distribute across the basalt face, mapping 1:1 to 'Basileus' in Greek text, bypassing local wearing errors cleanly.
                <span className="block text-[#a9a393] text-[0.75cqw] italic mt-0.5">全碑共计出现王名圈28处，空间分布与希腊文中的“王”高度拟合，排除局部磨损造成的翻译漂移。</span>
              </p>
            </div>

            <div className="flex items-center gap-3 bg-black/30 p-1.5 rounded border border-[#484a50]/20">
              <svg viewBox="0 0 24 24" className="w-[3cqw] h-[2cqw] text-[#d4af37] fill-none stroke-current" strokeWidth="1.2">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 4v16M4 12h16" />
              </svg>
              <div className="font-mono text-[0.75cqw]">
                <span className="text-[#d4af37] font-bold">DENSITY:</span> 28 Cartouches (1:1 Map)
              </div>
            </div>
          </div>

          <div className={`border rounded-[0.4cqw] p-[1cqw] flex flex-col justify-between transition-all duration-700 ${
            beat === 2 
              ? "border-[#d4af37] bg-[#d4af37]/5 shadow-[0_0_15px_rgba(212,175,55,0.2)]" 
              : "border-[#484a50]/30 bg-black/20"
          }`}>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-serif text-[1cqw] text-[#d4af37] font-bold">
                  IV. Language Triad (三体文字比例)
                </span>
                <span className={`w-2 h-2 rounded-full ${beat === 2 ? "bg-[#d4af37] animate-ping" : "bg-transparent"}`} />
              </div>
              <p className="text-[0.8cqw] text-[#dfdcd3] leading-snug">
                Hieroglyphic (14 lines), Demotic (32 lines), and Ancient Greek (54 lines) form a triangular media of power and translation.
                <span className="block text-[#a9a393] text-[0.75cqw] italic mt-0.5">圣书体（14行）、世俗体（32行）与古希腊文（54行）共同构筑起行政权力的坚固三角。</span>
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center font-mono text-[0.75cqw]">
              <div className="bg-black/40 p-1 rounded border border-[#484a50]/20">
                <div className="text-[#d4af37] font-bold">14 Lines</div>
                <div className="text-[#a9a393] text-[0.65cqw]">Hieroglyphic</div>
              </div>
              <div className="bg-black/40 p-1 rounded border border-[#484a50]/20">
                <div className="text-[#d4af37] font-bold">32 Lines</div>
                <div className="text-[#a9a393] text-[0.65cqw]">Demotic</div>
              </div>
              <div className="bg-black/40 p-1 rounded border border-[#484a50]/20">
                <div className="text-[#d4af37] font-bold">54 Lines</div>
                <div className="text-[#a9a393] text-[0.65cqw]">Greek</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderScene5 = () => {
    return (
      <div className="w-full h-full flex flex-col justify-between p-[0.8cqw] relative">
        <div className="flex justify-between items-center border-b border-[#d4af37]/20 pb-[0.3cqh] mb-[0.8cqh]">
          <span className="font-sans text-[0.9cqw] font-bold tracking-widest uppercase text-[#d4af37]/60">
            {meta.theme}
          </span>
          <span className="font-mono text-[0.8cqw] text-[#a9a393]">
            PARALLEL LEDGER • SCENE 05 (EXTREME DENSITY)
          </span>
        </div>

        <div className="flex-1 bg-black/40 border border-[#d4af37]/20 rounded-[0.4cqw] p-[1cqw] flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.08]" style={{
            backgroundImage: "linear-gradient(180deg, #d4af37 1px, transparent 1px)",
            backgroundSize: "100% 2cqh"
          }} />

          <div className="text-center font-bold text-[1.1cqw] uppercase tracking-widest border-b border-[#d4af37]/10 pb-[0.5cqh] mb-[1cqh] text-[#d4af37]">
            The Rosetta Stone Trilingual Epigraphic Concordance (196 BC)
          </div>

          <div className="flex-1 grid grid-cols-[28fr_28fr_44fr] gap-[1.5cqw] items-stretch min-h-0 text-[0.8cqw]">
            <div className="border-r border-[#d4af37]/10 pr-[0.8cqw] flex flex-col justify-between">
              <span className="font-serif text-[0.9cqw] text-[#d4af37] font-bold uppercase tracking-wider block text-center border-b border-[#d4af37]/10 pb-0.5 mb-2">
                𓊹𓍹𓎡𓏲𓍺 (Hieroglyphic)
              </span>
              <div className="flex-1 flex flex-col justify-around font-mono text-center">
                <div className={`transition-all duration-500 ${beat >= 0 ? "text-[#dfdcd3] scale-100" : "text-[#dfdcd3]/20 scale-95"}`}>
                  <div className="text-[1.2cqw]">𓊹𓍹𓎡𓏲𓍺𓅃</div>
                  <div className="text-[0.7cqw] text-[#a9a393] mt-0.5">P-T-O-L-M-Y-S</div>
                </div>
                <div className={`transition-all duration-500 ${beat >= 0 ? "text-[#dfdcd3] scale-100" : "text-[#dfdcd3]/20 scale-95"}`}>
                  <div className="text-[1.2cqw]">𓏠𓏲𓅆𓏏</div>
                  <div className="text-[0.7cqw] text-[#a9a393] mt-0.5">Amon-Ra Son</div>
                </div>
                <div className={`transition-all duration-500 ${beat >= 1 ? "text-[#dfdcd3] scale-100" : "text-[#dfdcd3]/20 scale-95"}`}>
                  <div className="text-[1.2cqw]">𓎡𓎡𓄿𓊹</div>
                  <div className="text-[0.7cqw] text-[#a9a393] mt-0.5">Remit Temple Tax</div>
                </div>
                <div className={`transition-all duration-500 ${beat >= 1 ? "text-[#dfdcd3] scale-100" : "text-[#dfdcd3]/20 scale-95"}`}>
                  <div className="text-[1.2cqw]">𓏃𓈙𓏏𓊯</div>
                  <div className="text-[0.7cqw] text-[#a9a393] mt-0.5">Offerings Table</div>
                </div>
                <div className={`transition-all duration-500 ${beat >= 2 ? "text-[#dfdcd3] scale-100" : "text-[#dfdcd3]/20 scale-95"}`}>
                  <div className="text-[1.2cqw]">𓍹𓎡𓏲𓍺𓈋𓏴</div>
                  <div className="text-[0.7cqw] text-[#a9a393] mt-0.5">Basalt Carving</div>
                </div>
              </div>
            </div>

            <div className="border-r border-[#d4af37]/10 pr-[0.8cqw] flex flex-col justify-between">
              <span className="font-serif text-[0.9cqw] text-[#d4af37] font-bold uppercase tracking-wider block text-center border-b border-[#d4af37]/10 pb-0.5 mb-2">
                世俗体 (Demotic Cursive)
              </span>
              <div className="flex-1 flex flex-col justify-around font-serif italic text-center text-[#dfdcd3]/80">
                <div className={`transition-all duration-500 ${beat >= 0 ? "text-[#dfdcd3] scale-100" : "text-[#dfdcd3]/20 scale-95"}`}>
                  <div className="font-sans">Ptoly-wsh</div>
                  <div className="text-[0.7cqw] text-[#a9a393] mt-0.5">Cursive Title</div>
                </div>
                <div className={`transition-all duration-500 ${beat >= 0 ? "text-[#dfdcd3] scale-100" : "text-[#dfdcd3]/20 scale-95"}`}>
                  <div className="font-sans">Mn-r'</div>
                  <div className="text-[0.7cqw] text-[#a9a393] mt-0.5">Cursive Parentage</div>
                </div>
                <div className={`transition-all duration-500 ${beat >= 1 ? "text-[#dfdcd3] scale-100" : "text-[#dfdcd3]/20 scale-95"}`}>
                  <div className="font-sans">Wp-sht</div>
                  <div className="text-[0.7cqw] text-[#a9a393] mt-0.5">Cursive Tax</div>
                </div>
                <div className={`transition-all duration-500 ${beat >= 1 ? "text-[#dfdcd3] scale-100" : "text-[#dfdcd3]/20 scale-95"}`}>
                  <div className="font-sans">Hbt-wsh</div>
                  <div className="text-[0.7cqw] text-[#a9a393] mt-0.5">Cursive Feast</div>
                </div>
                <div className={`transition-all duration-500 ${beat >= 2 ? "text-[#dfdcd3] scale-100" : "text-[#dfdcd3]/20 scale-95"}`}>
                  <div className="font-sans">Htp-st</div>
                  <div className="text-[0.7cqw] text-[#a9a393] mt-0.5">Cursive Inscription</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between pl-[0.5cqw]">
              <span className="font-serif text-[0.9cqw] text-[#d4af37] font-bold uppercase tracking-wider block text-center border-b border-[#d4af37]/10 pb-0.5 mb-2">
                Ancient Greek & Decipherment (古希腊文与解译)
              </span>
              <div className="flex-1 flex flex-col justify-around text-left">
                <div className={`transition-all duration-500 ${beat >= 0 ? "opacity-100 translate-x-0" : "opacity-20 -translate-x-[1cqw]"}`}>
                  <div className="font-mono text-[0.75cqw] text-emerald-500 font-bold">PTOLEMAIOS BASILEUS</div>
                  <div className="text-[0.8cqw] text-[#dfdcd3] font-bold">1. Sovereign Title / 托勒密法老王名</div>
                </div>
                <div className={`transition-all duration-500 ${beat >= 0 ? "opacity-100 translate-x-0" : "opacity-20 -translate-x-[1cqw]"}`}>
                  <div className="font-mono text-[0.75cqw] text-emerald-500 font-bold">HIERON THEON APERTON</div>
                  <div className="text-[0.8cqw] text-[#dfdcd3] font-bold">2. Divine Parentage / 神圣太阳神之子</div>
                </div>
                <div className={`transition-all duration-500 ${beat >= 1 ? "opacity-100 translate-x-0" : "opacity-20 -translate-x-[1cqw]"}`}>
                  <div className="font-mono text-[0.75cqw] text-emerald-500 font-bold">TELON APHELEIA CHARTA</div>
                  <div className="text-[0.8cqw] text-[#d4af37] font-bold">3. Tax Remissions / 祭司与神庙免税条款</div>
                </div>
                <div className={`transition-all duration-500 ${beat >= 1 ? "opacity-100 translate-x-0" : "opacity-20 -translate-x-[1cqw]"}`}>
                  <div className="font-mono text-[0.75cqw] text-emerald-500 font-bold">HEORTAS AGONAS DECRETON</div>
                  <div className="text-[0.8cqw] text-[#dfdcd3] font-bold">4. Priestly Feast / 孟菲斯祭司大典仪式</div>
                </div>
                <div className={`transition-all duration-500 ${beat >= 2 ? "opacity-100 translate-x-0" : "opacity-20 -translate-x-[1cqw]"}`}>
                  <div className="font-mono text-[0.75cqw] text-emerald-500 font-bold">STELEN STEREON LITHOUN</div>
                  <div className="text-[0.8cqw] text-[#dfdcd3] font-bold">5. Permanent Inscription / 坚硬玄武岩永久铭刻</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`absolute bottom-[1.5cqw] right-[1.5cqw] w-[6cqw] h-[6cqw] transition-all duration-1000 ${
            beat >= 1 
              ? "opacity-90 scale-100 rotate-[-12deg]" 
              : "opacity-0 scale-50 rotate-45 pointer-events-none"
          } select-none text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] z-20`}>
            <svg viewBox="0 0 100 100" className="w-full h-full text-current">
              <circle cx="50" cy="50" r="44" fill="#0c0d12" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="39" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 2" />
              <rect x="38" y="24" width="24" height="52" rx="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <line x1="34" y1="68" x2="66" y2="68" stroke="currentColor" strokeWidth="2.2" />
              <path d="M 45,35 H 55 M 45,45 H 55 M 45,55 H 55" stroke="currentColor" strokeWidth="1" />
              <text x="50" y="86" fontSize="5.5" textAnchor="middle" fontWeight="black" fontFamily="serif" fill="#dfdcd3" letterSpacing="1">MEMPHIS 196 BC</text>
            </svg>
          </div>

          <div className="border-t border-[#d4af37]/10 pt-[0.8cqh] mt-[0.8cqh] flex justify-between items-center">
            <p className="text-[0.85cqw] text-[#dfdcd3] leading-relaxed max-w-[70%]" style={{ opacity: beat >= 2 ? 1 : 0.6 }}>
              {currentBeat.body}
            </p>
            <div className="text-right font-mono text-[0.7cqw] text-[#a9a393]">
              <div>CHAMPOLLION MEMOIR (1822)</div>
              <div className="text-[#d4af37]">ROYAL ACADEMY OF INSCRIPTIONS</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full h-full bg-[#0c0d12] text-[#d4af37] font-serif overflow-hidden select-none">
      <style>{`
        @keyframes gold-sweep-h {
          0% { left: -10%; opacity: 0; }
          15% { opacity: 0.8; }
          85% { opacity: 0.8; }
          100% { left: 110%; opacity: 0; }
        }
        @keyframes dust-rise-1 {
          0% { transform: translateY(0) translateX(0) scale(0.5); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-3cqh) translateX(-1cqw) scale(1); opacity: 0; }
        }
        @keyframes dust-rise-2 {
          0% { transform: translateY(0) translateX(0) scale(0.5); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-4cqh) translateX(1cqw) scale(0.8); opacity: 0; }
        }
        @keyframes dust-rise-3 {
          0% { transform: translateY(0) translateX(0) scale(0.5); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-2.5cqh) translateX(-0.5cqw) scale(1.2); opacity: 0; }
        }
        @keyframes laser-sweep-v {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
        @keyframes pulse-gold {
          0%, 100% { box-shadow: 0 0 5px rgba(212, 175, 55, 0.2); border-color: rgba(212, 175, 55, 0.3); }
          50% { box-shadow: 0 0 15px rgba(212, 175, 55, 0.6); border-color: rgba(212, 175, 55, 0.8); }
        }
        .animate-pulse-gold {
          animation: pulse-gold 2s infinite ease-in-out;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-overlay" style={{
        backgroundImage: "radial-gradient(circle, #d4af37 1px, transparent 1.5px), linear-gradient(35deg, #101011 2px, transparent 2px)",
        backgroundSize: "4cqw 4cqw"
      }} />
      
      <div className="absolute inset-[1.5cqw] border border-[#d4af37]/20 pointer-events-none rounded-[0.5cqw]" />
      <div className="absolute inset-[1.8cqw] border border-[#d4af37]/10 pointer-events-none rounded-[0.4cqw]" />

      <div key={`sweep-${scene}`} className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#d4af37] to-transparent opacity-0 pointer-events-none z-50 gold-scan-line" style={{
        animation: "gold-sweep-h 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards"
      }} />

      {renderNavigation()}

      <div className="absolute inset-x-[3cqw] top-[10cqh] bottom-[3cqw] overflow-hidden">
        {scene === 1 && renderScene1()}
        {scene === 2 && renderScene2()}
        {scene === 3 && renderScene3()}
        {scene === 4 && renderScene4()}
        {scene === 5 && renderScene5()}
      </div>
    </div>
  );
}
