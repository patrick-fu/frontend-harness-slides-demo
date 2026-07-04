import React from "react";

export const getMetadata = (lang) => ({
  id: "24",
  tier: "C",
  name: lang === "zh" ? "罗塞塔石碑碑文对照译注" : "Rosetta Stone Cryptanalysis",
  theme: lang === "zh" ? "罗塞塔石碑三体文字解译" : "Rosetta Stone Epigraphic Decipherment",
  densityLabel: lang === "zh" ? "石碑对照" : "Epigraphy Parallel Ledger",
  colors: { bg: "bg-[#17181a]", ink: "text-[#dfdcd3]", panel: "border-[#484a50]" },
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

export default function Style24({ scene, beat, language, isThumbnail }) {
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
      <div className="relative w-full h-full flex items-center justify-center border border-[#484a50] bg-[#1a1b1d] rounded-[0.5cqw] overflow-hidden p-[1cqw] shadow-inner text-[#dfdcd3]">
        {/* Basalt stone cracks and grain texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.12] grid grid-cols-6 grid-rows-6 h-full w-full" style={{
          backgroundImage: "radial-gradient(circle, #dfdcd3 1px, transparent 1.5px), linear-gradient(35deg, #101011 2px, transparent 2px)",
          backgroundSize: "6cqw 6cqw"
        }} />

        {/* Chiseled margin borders */}
        <div className="absolute inset-[0.8cqw] border border-[#484a50]/70 pointer-events-none" />
        <div className="absolute left-[3cqw] top-0 bottom-0 w-[1px] bg-[#d9bd4a] opacity-20 pointer-events-none" /> {/* Gold alignment line */}

        {scene === 1 && (
          <div className="relative flex flex-col items-center justify-center w-full h-full text-center p-[1cqw]">
            {/* Sacred Royal Cartouche Outline SVG */}
            <svg viewBox="0 0 100 120" className="w-[11cqw] h-[13cqw] text-[#e5c158] opacity-90">
              {/* Outer oval rope with knot at bottom */}
              <rect x="25" y="15" width="50" height="85" rx="25" fill="none" stroke="currentColor" strokeWidth="1.8" />
              <line x1="25" y1="100" x2="75" y2="100" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 40,100 Q 50,108 60,100" fill="none" stroke="currentColor" strokeWidth="1" />
              {/* Hieroglyphic symbols inside (Square, Lion, Feather, etc.) */}
              {/* Square /P/ */}
              <rect x="42" y="26" width="16" height="10" fill="none" stroke="currentColor" strokeWidth="1" />
              {/* Semicircle /T/ */}
              <path d="M 42,48 A 8,8 0 0,0 58,48 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              {/* Lion /L/ */}
              <path d="M 38,62 Q 45,55 58,58 L 62,68 L 42,68 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
              {/* Reed feather /Y/ */}
              <path d="M 44,74 L 44,84 Q 50,84 48,74 Z M 52,74 L 52,84 Q 58,84 56,74 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <text x="50" y="116" fontSize="4.2" textAnchor="middle" fontWeight="bold" fill="#dfdcd3" className="font-mono tracking-widest opacity-60">PTOLMYS (PTOLEMY)</text>
            </svg>
            <div className={`mt-[1cqh] font-serif italic text-[#c3bcae] text-[1.1cqw] font-bold ${getBeatClass(1)}`}>
              Fig. I : The Royal Cartouche Enclosing the Phonemic Symbols of King Ptolemaios.
            </div>
          </div>
        )}

        {scene === 2 && (
          <div className="grid grid-cols-2 gap-[1cqw] w-full h-full p-[1cqw]">
            {/* Left: Sacred Hieroglyphics */}
            <div className="flex flex-col justify-between border-r border-[#484a50] pr-[0.8cqw]">
              <span className="font-serif text-[1.05cqw] text-[#e5c158] font-bold uppercase tracking-wider text-center border-b border-[#484a50] pb-1 mb-2">
                Hieroglyphic (Sacred)
              </span>
              <div className="flex-1 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-[10cqw] h-[10cqw] text-[#c3bcae] opacity-80">
                  {/* Symbol grid */}
                  <g fill="none" stroke="currentColor" strokeWidth="0.5">
                    {/* Bird */}
                    <path d="M 20,20 Q 30,10 40,25 L 35,40 L 15,35 Z" />
                    <circle cx="30" cy="20" r="1" fill="currentColor" />
                    {/* Feather */}
                    <path d="M 65,15 L 65,40 Q 75,40 70,15 Z" />
                    {/* Water waves */}
                    <path d="M 15,65 Q 25,60 35,65 Q 45,70 55,65" />
                    {/* Eye */}
                    <ellipse cx="70" cy="65" rx="12" ry="6" />
                    <circle cx="70" cy="65" r="3" fill="currentColor" />
                  </g>
                  <text x="50" y="93" fontSize="3.8" textAnchor="middle" className="font-serif italic opacity-60">Pictographic Ideograms</text>
                </svg>
              </div>
              <span className="font-serif text-[0.8cqw] text-[#c3bcae] italic text-center">Rich bird, eye, and scepter shapes that spell phonemes.</span>
            </div>
            {/* Right: Ancient Greek */}
            <div className="flex flex-col justify-between pl-[0.8cqw]">
              <span className="font-serif text-[1.05cqw] text-[#e5c158] font-bold uppercase tracking-wider text-center border-b border-[#484a50] pb-1 mb-2">
                Ancient Greek (Excise)
              </span>
              <div className="flex-1 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-[10cqw] h-[10cqw] text-[#dfdcd3]">
                  {/* Greek lettering block */}
                  <g fontSize="7" fontFamily="serif" fill="none" stroke="currentColor" strokeWidth="0.4">
                    <text x="10" y="25">ΒΑΣΙΛΕΥΣ ΠΤΟΛΕΜΑΙΟΣ</text>
                    <text x="10" y="45">ΕΥΧΑΡΙΣΤΟΣ ΑΜΟΝ-ΡΑ</text>
                    <text x="10" y="65">ΙΕΡΕΥΣ ΔΙΚΑΙΟΠΟΛΙΣ</text>
                  </g>
                  {/* Highlight box */}
                  <rect x="8" y="16" width="84" height="12" fill="none" stroke="#e5c158" strokeWidth="0.5" strokeDasharray="1 1" className={getBeatClass(1)} />
                  <text x="50" y="93" fontSize="3.8" textAnchor="middle" className="font-serif italic opacity-60">Phonetic Alphabet Anchor</text>
                </svg>
              </div>
              <span className="font-serif text-[0.8cqw] text-[#e5c158] italic font-bold text-center">Governing language provides the literal translation pivot.</span>
            </div>
          </div>
        )}

        {scene === 3 && (
          <div className="relative w-full h-full flex flex-col justify-between p-[1cqw]">
            <div className="flex justify-between items-center border-b border-[#484a50] pb-[0.5cqh]">
              <span className="font-serif text-[1.1cqw] text-[#e5c158] uppercase tracking-wider font-bold">Steps of Epigraphic Decipherment</span>
              <span className="font-mono text-[0.8cqw] text-[#a9a393]">CHAMPOLLION • CODE IV</span>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-[1cqh] my-[1cqh]">
              <div className={`flex items-start gap-2.5 p-[0.6cqw] bg-black/40 border border-[#484a50] rounded-sm ${getBeatClass(0)}`}>
                <span className="font-mono font-bold text-[#e5c158] text-[0.9cqw] mt-0.5">[Step 1]</span>
                <div>
                  <h4 className="font-bold text-[#dfdcd3] text-[0.95cqw] leading-none mb-1">Locate Ptolemy Cartouches</h4>
                  <p className="text-[0.8cqw] text-[#a9a393] leading-tight">Identify oval rope loops containing royal names, matching Greek royal titles exactly.</p>
                </div>
              </div>
              <div className={`flex items-start gap-2.5 p-[0.6cqw] bg-black/40 border border-[#484a50] rounded-sm ${getBeatClass(1)}`}>
                <span className="font-mono font-bold text-[#e5c158] text-[0.9cqw] mt-0.5">[Step 2]</span>
                <div>
                  <h4 className="font-bold text-[#dfdcd3] text-[0.95cqw] leading-none mb-1">Cleopatra Cross-Referencing</h4>
                  <p className="text-[0.8cqw] text-[#a9a393] leading-tight">Cross-analyze with the Philae obelisk's Cleopatra cartouche, mapping shared letters P, T, O, L.</p>
                </div>
              </div>
              <div className={`flex items-start gap-2.5 p-[0.6cqw] bg-black/40 border border-[#e5c158]/40 rounded-sm ${getBeatClass(2)}`}>
                <span className="font-mono font-bold text-[#e5c158] text-[0.9cqw] mt-0.5">[Step 3]</span>
                <div>
                  <h4 className="font-bold text-[#e5c158] text-[0.95cqw] leading-none mb-1">Demotic Cursive Transition</h4>
                  <p className="text-[0.8cqw] text-[#e5c158] leading-tight">Track Demotic's flowing curves as cursive derivatives of hieroglyphs, completing full translation.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {scene === 4 && (
          <div className="grid grid-cols-2 grid-rows-2 gap-[1cqw] w-full h-full p-[0.5cqw]">
            <div className="border border-[#484a50] bg-black/30 p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#e5c158] border-b border-[#484a50] pb-[0.2cqh]">Sector I: Phoneme Keys</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Recumbent Lion:</span><span className="text-[#e5c158] font-bold">/L/ Phoneme</span></div>
                <div className="flex justify-between"><span>Square Box:</span><span>/P/ Phoneme</span></div>
                <div className="flex justify-between"><span>Semicircle Mound:</span><span className="text-emerald-500 font-bold">/T/ Phoneme</span></div>
              </div>
            </div>
            <div className="border border-[#484a50] bg-black/30 p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#e5c158] border-b border-[#484a50] pb-[0.2cqh]">Sector II: Ideographics</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Crown Suffix:</span><span className="text-emerald-500 font-bold">Pharaoh Det.</span></div>
                <div className="flex justify-between"><span>Scepter Suffix:</span><span className="text-emerald-500 font-bold">Sovereignty Det.</span></div>
                <div className="flex justify-between"><span>Glyph Modifiers:</span><span>Silent Indicators</span></div>
              </div>
            </div>
            <div className="border border-[#484a50] bg-black/30 p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#e5c158] border-b border-[#484a50] pb-[0.2cqh]">Sector III: Spatial Density</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Cartouches Located:</span><span>28 Enclosures</span></div>
                <div className="flex justify-between"><span>Greek 'Basileus' Matches:</span><span className="text-emerald-700 font-bold">1:1 Mapping</span></div>
                <div className="flex justify-between"><span>Text Integrity:</span><span className="text-emerald-700 font-bold">94.2% Complete</span></div>
              </div>
            </div>
            <div className="border border-[#484a50] bg-black/30 p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#e5c158] border-b border-[#484a50] pb-[0.2cqh]">Sector IV: Language Triad</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Hieroglyphic lines:</span><span>14 Lines</span></div>
                <div className="flex justify-between"><span>Demotic lines:</span><span className="text-emerald-700 font-bold">32 Lines</span></div>
                <div className="flex justify-between"><span>Greek lines:</span><span className="text-emerald-700 font-bold">54 Lines</span></div>
              </div>
            </div>
          </div>
        )}

        {scene === 5 && (
          <div className="relative w-full h-full flex flex-col justify-between p-[0.8cqw] font-serif text-[#dfdcd3]">
            <div className="text-center font-bold text-[1cqw] uppercase tracking-widest border-b-2 border-[#e5c158] pb-[0.2cqh] mb-[0.5cqh] text-[#e5c158]">
              The Rosetta Stone Trilingual Epigraphic Concordance (196 BC)
            </div>
            <div className="flex-1 flex flex-col justify-center my-[0.2cqw]">
              <table className="w-full text-left text-[0.74cqw] border-collapse font-serif">
                <thead>
                  <tr className="border-b border-[#484a50] font-bold text-[#e5c158]">
                    <th className="py-1">Decree Passage</th>
                    <th className="py-1">Hieroglyphic Transcription</th>
                    <th className="py-1">Demotic Transliteration</th>
                    <th className="py-1 text-right">Greek Literal Translation</th>
                  </tr>
                </thead>
                <tbody className="text-[#a9a393] font-mono text-[0.7cqw]">
                  <tr className={`border-b border-[#484a50]/40 ${getBeatClass(0)}`}>
                    <td className="py-1 font-serif font-bold text-[#dfdcd3]">1. Sovereign Title</td>
                    <td className="py-1">𓊹𓍹𓎡𓏲𓍺𓅃 (P-T-O-L-M-Y-S)</td>
                    <td className="py-1">Ptoly-wsh (Cursive draft)</td>
                    <td className="py-1 text-right text-emerald-500 font-bold">PTOLEMAIOS BASILEUS</td>
                  </tr>
                  <tr className={`border-b border-[#484a50]/40 ${getBeatClass(0)}`}>
                    <td className="py-1 font-serif font-bold text-[#dfdcd3]">2. Divine Parentage</td>
                    <td className="py-1">𓏠𓏲𓅆𓏏 (Amon-Ra Son)</td>
                    <td className="py-1">Mn-r' (Cursive draft)</td>
                    <td className="py-1 text-right text-emerald-500 font-bold">HIERON THEON APERTON</td>
                  </tr>
                  <tr className={`border-b border-[#484a50]/40 ${getBeatClass(1)}`}>
                    <td className="py-1 font-serif font-bold text-[#e5c158]">3. Tax Remissions</td>
                    <td className="py-1">𓎡𓎡𓄿𓊹 (Remit Temple Tax)</td>
                    <td className="py-1">Wp-sht (Cursive draft)</td>
                    <td className="py-1 text-right text-emerald-500 font-bold">TELON APHELEIA CHARTA</td>
                  </tr>
                  <tr className={`border-b border-[#484a50]/40 ${getBeatClass(1)}`}>
                    <td className="py-1 font-serif font-bold text-[#dfdcd3]">4. Priestly Feast</td>
                    <td className="py-1">𓏃𓈙𓏏𓊯 (Offerings table)</td>
                    <td className="py-1">Hbt-wsh (Cursive draft)</td>
                    <td className="py-1 text-right text-emerald-500 font-bold">HEORTAS AGONAS DECRETON</td>
                  </tr>
                  <tr className={`${getBeatClass(2)}`}>
                    <td className="py-1 font-serif font-bold text-[#dfdcd3]">5. Permanent Inscription</td>
                    <td className="py-1">𓍹𓎡𓏲𓍺𓈋𓏴 (basalt carving)</td>
                    <td className="py-1">Htp-st (Cursive draft)</td>
                    <td className="py-1 text-right text-emerald-500 font-bold">STELEN STEREON LITHOUN</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="border-t border-[#484a50] pt-1 text-[0.7cqw] text-[#a9a393] italic text-center font-serif">
              Epigraphic Note: Complete parallel decryptions finalized under Champollion's 1822 Memoir to the Royal Academy.
            </div>
          </div>
        )}

        {/* Golden Pharaoh Cartouche Ink Seal (Applied on Beat 1 for Scene 5) */}
        {scene === 5 && (
          <div className={`absolute bottom-[1.8cqw] right-[1.8cqw] w-[5cqw] h-[5cqw] transition-all duration-1000 ${beat >= 1 ? "opacity-85 scale-100 rotate-[-12deg]" : "opacity-15 scale-95 rotate-0"} pointer-events-none select-none text-[#e5c158] drop-shadow-[0_0_12px_rgba(229,193,88,0.3)]`}>
            <svg viewBox="0 0 100 100" className="w-full h-full text-current">
              <circle cx="50" cy="50" r="44" fill="#201f1a" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="39" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 2" />
              {/* Royal Cartouche Symbol inside seal */}
              <rect x="38" y="24" width="24" height="52" rx="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <line x1="34" y1="68" x2="66" y2="68" stroke="currentColor" strokeWidth="2.2" />
              <path d="M 45,35 H 55 M 45,45 H 55 M 45,55 H 55" stroke="currentColor" strokeWidth="1" />
              <text x="50" y="86" fontSize="5.5" textAnchor="middle" fontWeight="black" fontFamily="serif" fill="#dfdcd3" letterSpacing="1">MEMPHIS 196 BC</text>
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
          <span className="font-sans text-[1.2cqw] font-bold tracking-wider uppercase opacity-65 text-[#a9a393] border-b border-[#484a50] pb-[0.5cqh] inline-block">
            {meta.theme}
          </span>
          <h1 className="text-[3.2cqw] leading-[1.1] font-black tracking-tight font-serif mt-[1cqh] text-[#e5c158]">
            {currentBeat.title}
          </h1>
          <p className="text-[1.3cqw] leading-[1.4] opacity-95 font-serif mt-[1.5cqh] text-[#dfdcd3]">
            {currentBeat.body}
          </p>
        </div>

        {/* Marginal Editorial Footnote */}
        <div className="flex flex-col gap-[0.5cqh] mt-[2cqh] border-t border-[#484a50] pt-[1cqh]">
          <div className="flex justify-between text-[0.8cqw] font-mono text-[#a9a393]">
            <span>STELE SOURCE: MEMPHIS BASALT</span>
            <span>CHRONO: PTOLEMAIC ERA (196 BC)</span>
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
