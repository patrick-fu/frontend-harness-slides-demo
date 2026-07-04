import React from "react";
import { Cpu, Terminal, Compass, Shield, Eye, Database, Activity, CheckCircle, ArrowRight, Layers } from "lucide-react";

export const getMetadata = (lang) => ({
  id: "10",
  tier: "B",
  name: lang === "zh" ? "迈锡尼线形文字 B 破译" : "Deciphering Linear B",
  theme: lang === "zh" ? "古希腊语言考古破译" : "Aegean Script Decipherment",
  densityLabel: lang === "zh" ? "破译控制台" : "Decoder Console",
  colors: { bg: "bg-[#0c1219]", ink: "text-[#ece0cf]", panel: "border-[#e0b034]/15", accent: "text-[#e0b034]" },
  typography: { header: "font-serif", body: "font-sans" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "泥板语料载入与去噪" : "Clay Corpus Loading & Denoising",
      beats: [
        { id: 1, action: lang === "zh" ? "载入泥板" : "Load Corpus", title: lang === "zh" ? "克诺索斯宫殿泥板导入" : "Knossos Palace Tablet Corpus Ingest", body: lang === "zh" ? "自克诺索斯遗址出土的黏土碑铭档案入库，初始化字符形态学扫描，识别原始泥板纹路。" : "Ingesting clay archives excavated from Knossos palace. Initializing character morphology scans to outline weathered script borders." },
        { id: 2, action: lang === "zh" ? "笔画提取" : "Isolate Symbols", title: lang === "zh" ? "字符边界与笔触切分" : "Scribe Stroke Boundary Segmentation", body: lang === "zh" ? "自黏土划痕中区分书写者的下笔深浅、倾角，将线条碎片归并为独立的文字符号单元。" : "Dissecting stylus depth and angles from clay incisions, merging fragmented strokes into unique symbolic blocks." },
        { id: 3, action: lang === "zh" ? "噪声滤除" : "Filter Weathering", title: lang === "zh" ? "风化裂纹与杂质去噪" : "Corpus Denoising & Line Correction", body: lang === "zh" ? "剥离三千年地质挤压产生的碎裂纹理，提纯核心线形笔画，生成高保真数字印本。" : "Stripping cracks caused by three millennia of geological stress, recovering pure linear strokes to yield high-fidelity prints." }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "元音辅音对齐矩阵" : "The Ventris Syllabic Grid",
      beats: [
        { id: 1, action: lang === "zh" ? "词尾分类" : "Suffix Mapping", title: lang === "zh" ? "文特里斯对齐矩阵重组" : "The Ventris Algebraic Suffix Sieve", body: lang === "zh" ? "统计相同词根在不同语境下的词尾屈折，将具有相同辅音或元音的字符分列对齐，构建网格体系。" : "Mapping inflectional suffix variants of identical roots, grouping signs with shared consonants or vowels to assemble the grid." },
        { id: 2, action: lang === "zh" ? "地名校验" : "Verify Toponyms", title: lang === "zh" ? "阿卡迪亚地名音值校验" : "Archaic Toponym Phonetic Verification", body: lang === "zh" ? "带入克诺索斯（ko-no-so）、泰利索斯（tu-ri-so）等迈锡尼地名，验证元音辅音连锁，开启音值大门。" : "Substituting known Aegean place names like Knossos (ko-no-so) and Tylissos (tu-ri-so) to unlock interlocking phonetic coordinates." },
        { id: 3, action: lang === "zh" ? "音节锁定" : "Lock Phonetics", title: lang === "zh" ? "迈锡尼古音值批量锁定" : "Mycenaean Syllabary Phonetic Lock", body: lang === "zh" ? "锁定首批87个音节拼音值（如a-ko-ra, ko-wo），确定该语言为荷马史诗前五百年的古希腊语。" : "Locking initial phonetic values for 87 signs (e.g., a-ko-ra, ko-wo), confirming the script as Greek 500 years pre-Homer." }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "象形象形意符与词汇翻译" : "Ideograms & Syntactic Parsing",
      beats: [
        { id: 1, action: lang === "zh" ? "象形识别" : "Find Ideograms", title: lang === "zh" ? "大宗意符特征分类" : "Ideographic Category Extraction", body: lang === "zh" ? "自动识别并标记代表战车、青铜剑、双耳罐、马匹及麦穗的象形意符，建立图画语汇册。" : "Detecting pictographic ideograms indicating war chariots, bronze swords, amphorae, horses, and wheat seeds." },
        { id: 2, action: lang === "zh" ? "盘点账册" : "Parse Ledgers", title: lang === "zh" ? "青铜时代官办账目翻译" : "Bronze Age Palace Ledger Decipherment", body: lang === "zh" ? "将音节拼写与紧邻的象形数字结合，翻译克里特岛官署赋税、武器库盘点及神庙贡品清单。" : "Combining syllabic spelling with adjacent pictorial quantities to decode palace taxes, armory stock, and temple offerings." },
        { id: 3, action: lang === "zh" ? "语法合成" : "Sentence Synthesis", title: lang === "zh" ? "完整王室诏令语义拼合" : "Royal Decree Semantic Reconstruction", body: lang === "zh" ? "拼合迈锡尼复杂的动词屈折与双格名词，复原结构完整的王宫祭祀、农政大典及动员诏令。" : "Synthesizing Mycenaean verb conjugation and noun duals, fully restoring royal sacrificial decrees and army mobilizations." }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "统计熵与词同源性校验" : "Statistical Entropy & Homology",
      beats: [
        { id: 1, action: lang === "zh" ? "音素熵测" : "Entropy Check", title: lang === "zh" ? "字符组合统计学熵自检" : "Phonotactic Combination Entropy Analysis", body: lang === "zh" ? "对87个音节序列执行相邻熵、出现频次测算，证明其符合人类自然语言发音规律而非杂乱噪声。" : "Measuring adjacent entropy and sign frequency curves over sign sequences, proving spelling conforms to human phonotactics." },
        { id: 2, action: lang === "zh" ? "印欧同源" : "Indo-European Match", title: lang === "zh" ? "印欧语系同源词对齐" : "Indo-European Vocabulary Homology", body: lang === "zh" ? "将解出的词根（如ma-te, pa-te）与古梵语、拉丁语、古典希腊语同源对照，确认其印欧语底色。" : "Cross-matching decoded roots (e.g., ma-te, pa-te) with Sanskrit, Latin, and classical Attic to solidify IE ancestral status." },
        { id: 3, action: lang === "zh" ? "日志生成" : "Log Confidence", title: lang === "zh" ? "破译置信度度量账本生成" : "Statistical Decipherment Proof Ledger", body: lang === "zh" ? "输出高维度统计置信度指标，排除虚假巧合，签发符合考古语言学界公认标准的科学破译日志。" : "Compiling high-dimensional statistical confidence logs, eliminating false positives, signing off academic proof protocols." }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "考古破译总成控制台" : "Complete Decipherment Dashboard",
      beats: [
        { id: 1, action: lang === "zh" ? "数据流破译" : "Stream Decoding", title: lang === "zh" ? "碑铭语料库全流编译" : "Ingested Inscription Stream Decoding", body: lang === "zh" ? "开启古文字批量破译管道，各路新出土泥板经去噪、切分、语汇分析，实时吐出希腊语明文译本。" : "Opening batch decipherment pipes. Freshly discovered tablets stream through denoising, segmentation, and lexicon filters." },
        { id: 2, action: lang === "zh" ? "解码全谱" : "Map Full Spectrum", title: lang === "zh" ? "音节与意符全网解码网格" : "Syllabary & Ideogram Universal Matrix", body: lang === "zh" ? "全面展开87个音节符号、120余个商品象形符号映射网格，信号通红亮起，两阶数据库融会贯通。" : "Spanning full maps of 87 syllables and 120+ commodities. Interlocking grid glowing as cross-references are locked." },
        { id: 3, action: lang === "zh" ? "学术签发" : "Academic Stamp", title: lang === "zh" ? "迈锡尼史实解密大纲签发" : "Mycenaean Historic Decryption Sign-off", body: lang === "zh" ? "文特里斯-查德威克破译体系终结，迈锡尼文明行政、宗教、军事细节全面结账，大获全胜。" : "Ventris-Chadwick decoding ledger closed. Bronze Age palace archives laid bare in undisputed, glorious green clarity." }
      ]
    }
  ]
});

export default function Style10({ scene, beat, language, isThumbnail }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];
  const isZh = language === "zh";

  // Checkpoints active state
  const activeNodes = Array.from({ length: 5 }).map((_, i) => {
    if (scene === 1) return i === 0;
    if (scene === 2) return i <= 1;
    if (scene === 3) return i <= 2;
    if (scene === 4) return i <= 3;
    return true;
  });

  return (
    <div className={`w-full h-full flex flex-col justify-between p-[3.5cqw] relative ${meta.colors.bg} ${meta.colors.ink} select-none overflow-hidden`} key={`${scene}-${beat}`}>
      {/* Background Linear Glyphs overlay (Mycenaean Linear B styles drawn as paths) */}
      <div className="absolute inset-y-0 right-0 w-[40cqw] opacity-[0.03] pointer-events-none flex items-center justify-center">
        <svg className="w-full h-[80%]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Stylized Linear B symbols */}
          <path d="M 20 40 H 80 M 50 40 V 100 M 35 100 H 65 M 35 70 H 65" />
          <path d="M 120 40 C 140 40, 160 60, 150 90 C 140 120, 120 120, 120 160 M 120 90 H 160" />
          <path d="M 40 140 L 70 180 L 100 140 Z M 70 140 V 110" />
          <path d="M 140 140 A 15 15 0 1 1 170 140 A 15 15 0 1 1 140 140 M 155 140 V 180" />
        </svg>
      </div>

      {/* Slide Header */}
      <div className="flex justify-between items-start border-b border-[#e0b034]/15 pb-[2cqh] z-10">
        <div>
          <span className="font-mono text-[1.1cqw] tracking-widest uppercase opacity-60 flex items-center gap-[0.5cqw]">
            <Cpu className="w-[1.2cqw] h-[1.2cqw] animate-pulse text-[#e0b034]" />
            {meta.theme}
          </span>
          <h1 className="text-[3cqw] font-serif font-black tracking-tight mt-[0.5cqh]">
            {currentScene.title}
          </h1>
        </div>
        <div className="text-right font-mono">
          <div className="text-[1.2cqw] font-bold text-[#e0b034]">
            {isZh ? "线形文字 B 破译控制台" : "Linear B Decoder Board"}
          </div>
          <div className="text-[0.9cqw] opacity-50 uppercase tracking-widest mt-[0.5cqh]">
            {meta.densityLabel}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-[2.5cqw] flex-1 my-[2.5cqh] items-stretch z-10">
        {/* Left Column: Analytical logs */}
        <div className="col-span-5 flex flex-col justify-between pr-[1cqw]">
          <div className="flex flex-col gap-[1.5cqh]">
            <span className="font-mono text-[1cqw] tracking-widest uppercase text-[#e0b034] font-bold flex items-center gap-[0.5cqw]">
              <span className="w-[0.8cqw] h-[0.8cqw] bg-[#e0b034] rounded-full animate-ping" />
              {currentBeat.action}
            </span>
            <h2 className="text-[2.2cqw] font-serif font-black leading-tight">
              {currentBeat.title}
            </h2>
            <p className="text-[1.1cqw] leading-[1.6] opacity-80 font-sans">
              {currentBeat.body}
            </p>
          </div>

          {/* Cryptanalytic telemetry block */}
          <div className="bg-[#121c24] border border-[#e0b034]/20 rounded-xl p-[1.5cqw] flex flex-col gap-[1.2cqh]">
            <div className="flex justify-between items-center border-b border-[#e0b034]/15 pb-[0.8cqh]">
              <span className="text-[0.9cqw] font-mono font-bold tracking-wider opacity-60 text-[#ece0cf]">
                {isZh ? "破译系统统计状态" : "CRYPTANALYSIS STATUS"}
              </span>
              <Terminal className="w-[1cqw] h-[1cqw] text-[#e0b034]" />
            </div>
            
            <div className="grid grid-cols-2 gap-[1cqw] text-[0.95cqw] font-mono text-zinc-300">
              <div>
                <span className="opacity-50 text-[0.8cqw] block">{isZh ? "元音辅音格" : "GRID LOCK"}</span>
                <span className="font-bold text-[#e0b034]">
                  {scene === 1 ? "15% (Unstable)" : scene === 2 ? "68% (Toponyms Linked)" : "98% (Syllabary Locked)"}
                </span>
              </div>
              <div>
                <span className="opacity-50 text-[0.8cqw] block">{isZh ? "统计熵" : "ENTROPY LEVEL"}</span>
                <span className="font-bold text-[#e0b034]">
                  {scene === 1 ? "4.82 H" : scene === 3 ? "2.10 H" : "1.24 H (Optimal)"}
                </span>
              </div>
            </div>

            {/* Confidence Slider / Gauge */}
            <div className="flex flex-col gap-[0.4cqh] mt-[0.5cqh]">
              <div className="flex justify-between text-[0.75cqw] font-mono opacity-60 text-zinc-300">
                <span>{isZh ? "古希腊语义匹配置信度" : "DECIPHERMENT CONFIDENCE"}</span>
                <span className="text-[#e0b034] font-bold">{scene === 1 ? "12%" : scene === 2 ? "45%" : scene === 3 ? "74%" : scene === 4 ? "88%" : "99.4%"}</span>
              </div>
              <div className="w-full h-[0.6cqh] bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#e0b034] rounded-full transition-all duration-1000 shadow-[0_0_8px_#e0b034]"
                  style={{ width: scene === 1 ? "12%" : scene === 2 ? "45%" : scene === 3 ? "74%" : scene === 4 ? "88%" : "99.4%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Decoder console */}
        <div className="col-span-7 bg-[#0f1821] border border-[#e0b034]/15 rounded-2xl p-[2cqw] flex flex-col justify-between relative overflow-hidden">
          {/* Grid lines to resemble vintage scanner */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(224,176,52,0.15)_1px,transparent_1px)] [background-size:100%_1.5cqh]" />

          {scene === 1 && (
            // Scene 1 (Ultralight): Single giant 2D Clay tablet silhouette being scanned
            <div className="flex-1 flex flex-col justify-center items-center relative">
              {/* clay tablet outline */}
              <div className="w-[18cqw] h-[18cqw] border-2 border-dashed border-[#e0b034]/30 bg-[#16212b] rounded-2xl flex flex-col items-center justify-center p-[1.5cqw] relative">
                {/* Ancient Linear B symbols on tablet */}
                <svg className="w-[80%] h-[80%] stroke-[#ece0cf] stroke-width-[1.5] fill-none" viewBox="0 0 100 100">
                  <path d="M 20 20 H 80 M 50 20 V 80 M 30 50 H 70" />
                  <path d="M 30 80 L 50 60 L 70 80" />
                  <path d="M 15 50 C 15 30, 85 30, 85 50" className="opacity-40" />
                </svg>
                
                {/* Horizontal scanner beam line */}
                <div 
                  className="absolute inset-x-0 h-[2px] bg-[#e0b034] shadow-[0_0_12px_#e0b034] transition-all duration-[1500ms] ease-in-out"
                  style={{
                    top: beat === 0 ? "10%" : beat === 1 ? "50%" : "90%"
                  }}
                />
              </div>

              <div className="text-center mt-[2cqh] font-mono">
                <span className="text-[1.1cqw] font-bold text-[#ece0cf] block uppercase">
                  {beat === 0 ? "RAW CORPUS LOADED" : beat === 1 ? "EXTRACTING WRITING STROKES..." : "NOISE FILTERED // PRISTINE GLYPH"}
                </span>
                <span className="text-[0.8cqw] opacity-50 mt-[0.5cqh] block">
                  {isZh ? "克诺索斯遗址泥板 KN-102_F" : "Knossos Clay Tablet KN-102_F"}
                </span>
              </div>
            </div>
          )}

          {scene === 2 && (
            // Scene 2 (Light): Symmetrical Ventris Algebraic Grid
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex items-center gap-[0.5cqw]">
                <Database className="w-[1cqw] h-[1cqw] text-[#e0b034]" />
                {isZh ? "音节屈折关系网格对齐" : "THE VENTRIS ALGEBRAIC INFLECTION MATRIX"}
              </div>

              {/* Ventris grid */}
              <div className="flex-1 my-[1.5cqh] grid grid-cols-5 gap-[0.8cqw]">
                {/* Header columns */}
                <div className="col-span-1" />
                {["V1 (a)", "V2 (e)", "V3 (i)", "V4 (o)"].map((v, idx) => (
                  <div key={v} className="bg-[#16212b] border border-[#e0b034]/15 rounded flex items-center justify-center font-mono text-[0.85cqw] font-extrabold text-[#e0b034]">
                    {v}
                  </div>
                ))}

                {/* Rows with signs */}
                {[
                  { r: "C1 (k-)", s: ["𐀀 (ka)", "𐀋 (ke)", "𐀏 (ki)", "𐀒 (ko)"] },
                  { r: "C2 (t-)", s: ["𐀄 (ta)", "𐀏 (te)", "𐀙 (ti)", "𐀵 (to)"] },
                  { r: "C3 (m-)", s: ["𐀔 (ma)", "𐀕 (me)", "𐀖 (mi)", "𐀗 (mo)"] }
                ].map((row, rIdx) => (
                  <React.Fragment key={row.r}>
                    <div className="bg-[#16212b] border border-[#e0b034]/15 rounded flex items-center justify-center font-mono text-[0.8cqw] font-bold text-zinc-300">
                      {row.r}
                    </div>
                    {row.s.map((sign, sIdx) => {
                      const isActive = (beat === 0 && rIdx === 0) || (beat === 1 && rIdx <= 1) || beat >= 2;
                      return (
                        <div 
                          key={sign} 
                          className={`rounded border flex flex-col items-center justify-center p-[0.5cqw] transition-all duration-500 font-mono text-[1.1cqw] ${
                            isActive 
                              ? "bg-[#1d2a35] border-[#e0b034] text-[#ece0cf] shadow-sm scale-100" 
                              : "bg-[#0a1017] border-zinc-800 opacity-20 scale-95"
                          }`}
                        >
                          <span className="text-[1.3cqw] font-bold">{sign.split(" ")[0]}</span>
                          <span className="text-[0.7cqw] opacity-50 mt-[0.2cqh]">{sign.split(" ")[1]}</span>
                        </div>
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>

              <div className="text-[0.8cqw] font-mono opacity-50 flex justify-between border-t border-[#e0b034]/10 pt-[1cqh]">
                <span>{isZh ? "屈折同位音值对齐" : "ALGEBRAIC CONSONANT EQUIVALENCE"}</span>
                <span className="text-[#e0b034] font-bold">
                  {beat === 0 ? "MAPPING MATRIX" : beat === 1 ? "LOCATIONS LOCKED" : "87 PHONETICS SECURED"}
                </span>
              </div>
            </div>
          )}

          {scene === 3 && (
            // Scene 3 (Standard): 3 connected translation stations (Linear B -> Syllabary -> Attic Greek)
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50">
                {isZh ? "迈锡尼语句法结构重组步骤" : "SYNTACTIC RECONSTRUCTION SEQUENCE"}
              </div>

              <div className="grid grid-cols-3 gap-[1cqw] my-[1.5cqh] flex-1">
                {[
                  { stage: "01 / PHONETIC", title: "ko-wo / ko-wa", grk: "κῶρος / κώρη", mean: isZh ? "男孩 / 女孩" : "Boy / Girl", desc: isZh ? "通过元音屈折确定性别" : "Grammatical gender matching", active: true },
                  { stage: "02 / IDEOGRAM", title: "𐀀 + 𐃏 (Chariot)", grk: "ἵππος + ἅρμα", mean: isZh ? "战车二乘" : "2 Chariots", desc: isZh ? "意符与数字交叉盘点" : "Commodity verification", active: beat >= 1 },
                  { stage: "03 / SYNTAX", title: "wa-na-ka te-o-jo", grk: "ϝάναξ θεοῖο", mean: isZh ? "王室与神明祭祀" : "King & Gods", desc: isZh ? "完整荷马史诗前诏令合成" : "Sacred decree synthesis", active: beat >= 2 }
                ].map((item, i) => (
                  <div key={i} className={`p-[1.2cqw] rounded-xl border bg-[#111a22] flex flex-col justify-between transition-all duration-500 ${
                    item.active ? "border-[#e0b034] shadow-md scale-100" : "border-zinc-800 opacity-15 scale-95"
                  }`}>
                    <span className="text-[0.7cqw] font-mono text-[#e0b034] font-bold">{item.stage}</span>
                    <div className="my-[1.2cqh]">
                      <div className="text-[1.3cqw] font-serif font-black text-[#ece0cf]">{item.title}</div>
                      <div className="text-[0.9cqw] font-mono text-cyan-400 mt-[0.3cqh]">{item.grk}</div>
                      <div className="text-[1cqw] font-bold text-[#e0b034] mt-[0.5cqh]">{item.mean}</div>
                    </div>
                    <p className="text-[0.75cqw] text-zinc-400 leading-tight border-t border-[#e0b034]/10 pt-[0.6cqh]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="text-[0.8cqw] font-mono opacity-50 flex justify-between">
                <span>{isZh ? "青铜时代宫廷书吏档案解析" : "PALACE SCRIBE ARCHIVES COMPLIANCE"}</span>
                <span className="text-[#e0b034] font-bold">{beat === 0 ? "LEXICON LOAD" : beat === 1 ? "IDEOGRAM CLASSIFIED" : "100% TRANSLATION ACCURACY"}</span>
              </div>
            </div>
          )}

          {scene === 4 && (
            // Scene 4 (Dense): 2x2 statistics dashboard
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex justify-between">
                <span>{isZh ? "统计熵与印欧语同源性对齐遥测" : "STATISTICAL ENTROPY & INDO-EUROPEAN HOMOLOGY"}</span>
                <span>{isZh ? "后台运行中" : "SENSORS ONLINE"}</span>
              </div>

              <div className="grid grid-cols-2 gap-[1.2cqw] my-[1cqh] flex-1">
                {[
                  { title: isZh ? "相邻音素出现熵测" : "PHONOTACTIC SHANNON ENTROPY", val: "1.34 H", info: isZh ? "证明符合自然语言发音规律" : "Non-random phonetic distribution", icon: Activity, active: true },
                  { title: isZh ? "印欧语系同源根词对齐" : "IE CONCURRENT COGNATES", val: "ma-te / pa-te", info: isZh ? "对齐梵语/拉丁语(母/父)" : "Aligned with Sanskrit & Latin", icon: Database, active: beat >= 1 },
                  { title: isZh ? "荷马希腊语词汇覆盖" : "HOMERIC HOMOLOGY CORRELATION", val: "94.2% Match", info: isZh ? "证实迈锡尼为极古希腊语" : "Confirmed pre-Homeric Attic", icon: Layers, active: beat >= 1 },
                  { title: isZh ? "破译算法序列抗噪性" : "DECIPHERMENT STABILITY LOG", val: "99.98% True", info: isZh ? "排除多重随机巧合率" : "Statistically verified decryptions", icon: Shield, active: beat >= 2 }
                ].map((item, i) => (
                  <div key={i} className={`p-[1.2cqw] rounded-xl border bg-[#111a22] flex justify-between items-center transition-all duration-500 ${
                    item.active ? "border-[#e0b034] shadow-sm" : "border-zinc-800 opacity-20"
                  }`}>
                    <div className="flex flex-col gap-[0.3cqh]">
                      <span className="text-[0.75cqw] font-mono font-bold opacity-60 text-zinc-300 uppercase">{item.title}</span>
                      <span className="text-[1.3cqw] font-serif font-black text-[#ece0cf]">{item.val}</span>
                      <span className="text-[0.75cqw] text-zinc-400 font-sans">{item.info}</span>
                    </div>
                    <item.icon className="w-[2cqw] h-[2cqw] text-[#e0b034]" />
                  </div>
                ))}
              </div>

              <div className="w-full bg-zinc-800 h-[0.5cqh] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#e0b034] transition-all duration-700" 
                  style={{ width: beat === 0 ? "35%" : beat === 1 ? "70%" : "100%" }}
                />
              </div>
            </div>
          )}

          {scene === 5 && (
            // Scene 5 (Extreme / High Density): Master Decipherment Console Panel
            <div className="flex-1 flex flex-col justify-between my-[0.2cqh]">
              {/* Top analytical quick indicators */}
              <div className="grid grid-cols-4 gap-[0.8cqw]">
                {[
                  { name: isZh ? "音节全谱锁定" : "SYLLABARY SECURED", val: "87 / 87 Signs", color: "text-[#e0b034]" },
                  { name: isZh ? "象形象形意符" : "IDEOGRAMS TAXED", val: "124 Symbols", color: "text-[#ece0cf]" },
                  { name: isZh ? "古希腊语覆盖率" : "VOCAB MATCH", val: "99.8%", color: "text-emerald-500" },
                  { name: isZh ? "历史泥板已破译" : "CLAY DECIPHERED", val: beat >= 2 ? "3,420 " + (isZh ? "块" : "Tablets") : beat >= 1 ? "1,120 " + (isZh ? "块" : "Tablets") : "450" }
                ].map((ind, i) => (
                  <div key={i} className="bg-[#111a22] border border-[#e0b034]/20 rounded-xl p-[0.8cqw] text-center shadow-sm">
                    <span className="text-[0.7cqw] font-mono opacity-50 block text-zinc-300 uppercase">{ind.name}</span>
                    <span className={`text-[1.1cqw] font-serif font-black ${ind.color} block mt-[0.2cqh]`}>{ind.val}</span>
                  </div>
                ))}
              </div>

              {/* Clay segment scanning & Live log ticker side-by-side */}
              <div className="grid grid-cols-12 gap-[1cqw] my-[1cqh] flex-1">
                {/* clay segmentation map */}
                <div className="col-span-7 bg-[#111a22] border border-[#e0b034]/20 rounded-xl p-[1.5cqw] relative flex flex-col justify-between shadow-sm">
                  <span className="text-[0.75cqw] font-mono opacity-50 block text-zinc-300">{isZh ? "克诺索斯泥板字符全流分谱识别" : "CLAY INSCRIPTION FLOW"}</span>
                  
                  <div className="flex-1 relative flex items-center justify-center">
                    <svg className="w-full h-full stroke-[#ece0cf] fill-none" viewBox="0 0 240 100">
                      {/* Grid background */}
                      <path d="M 0 50 H 240 M 80 0 V 100 M 160 0 V 100" stroke="#e0b034" strokeWidth="0.5" strokeDasharray="2,4" className="opacity-15" />
                      
                      {/* active scanning laser */}
                      <path d="M 10 20 H 230" stroke="#e0b034" strokeWidth="1" strokeDasharray="3,3" className="opacity-30" />
                      <line x1="10" y1="20" x2="230" y2="20" stroke="#e0b034" strokeWidth="1.5" className="animate-pulse opacity-80" />

                      {/* Deciphered Linear B characters showing mapping */}
                      {[
                        { x: 30, y: 40, l: "𐀀", g: "ka", active: true },
                        { x: 110, y: 40, l: "𐀏", g: "te", active: beat >= 1 },
                        { x: 190, y: 40, l: "𐀵", g: "to", active: beat >= 2 },
                        { x: 30, y: 80, l: "𐀔", g: "ma", active: true },
                        { x: 110, y: 80, l: "𐀕", g: "me", active: beat >= 1 },
                        { x: 190, y: 80, l: "𐃏", g: "chariot", active: beat >= 2 }
                      ].map((glyph, idx) => (
                        <g key={idx} className="transition-all duration-500">
                          <circle cx={glyph.x} cy={glyph.y} r="12" fill={glyph.active ? "#1d2a35" : "#0c1219"} stroke={glyph.active ? "#e0b034" : "#1e293b"} strokeWidth="1.5" />
                          <text x={glyph.x - 5} y={glyph.y + 4} className="text-[12px] font-sans font-bold fill-current" stroke="none">{glyph.l}</text>
                          {glyph.active && (
                            <text x={glyph.x - 8} y={glyph.y + 20} className="text-[7px] font-mono fill-current text-cyan-400" stroke="none">{glyph.g}</text>
                          )}
                        </g>
                      ))}
                    </svg>
                  </div>
                </div>

                {/* Right side: decipherment confidence logs */}
                <div className="col-span-5 bg-[#111a22] border border-[#e0b034]/20 rounded-xl p-[1.5cqw] flex flex-col justify-between shadow-sm font-mono text-[0.75cqw]">
                  <span className="opacity-50 text-[0.7cqw] uppercase border-b border-[#e0b034]/15 pb-[0.3cqh] block text-zinc-300">
                    {isZh ? "破译置信度校验日志" : "DECIPHERMENT LOGS"}
                  </span>
                  
                  <div className="flex-1 flex flex-col justify-center gap-[0.5cqh] my-1 leading-tight">
                    <div className="text-zinc-500">&gt; SYS_DECODER_READY</div>
                    <div className="text-zinc-400">&gt; Corpus loaded: KN_102</div>
                    <div className={`transition-opacity ${beat >= 1 ? "opacity-100 text-amber-500" : "opacity-10"}`}>
                      &gt; Syllabic matches aligned: Attic Greek
                    </div>
                    <div className={`transition-opacity ${beat >= 2 ? "opacity-100 text-emerald-500 font-extrabold" : "opacity-5"}`}>
                      &gt; HISTORIC SYSTEM DECIPHERED [100%]
                    </div>
                  </div>

                  <div className={`text-[0.65cqw] p-[0.5cqw] rounded bg-emerald-950/40 text-emerald-400 border border-emerald-500/20 flex items-center gap-[0.3cqw] ${beat >= 2 ? "opacity-100" : "opacity-20"}`}>
                    <Shield className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{isZh ? "史实重构完成，希腊碑铭录盖章印信" : "Academic seal applied. Historic clear."}</span>
                  </div>
                </div>
              </div>

              {/* Bottom system status bar */}
              <div className="text-[0.8cqw] font-mono opacity-60 flex justify-between items-center px-1 border-t border-[#e0b034]/15 pt-[0.6cqh]">
                <span>{isZh ? "文特里斯-查德威克考古破译大纲系统" : "VENTRIS-CHADWICK CLASSICAL SYSTEM PROTOCOL"}</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                  {isZh ? "阿卡迪亚-塞浦路斯语系全贯通" : "GREEK DIALECT ALIGNED"}
                </span>
              </div>
            </div>
          )}

          {/* Sub status footer progress info */}
          <div className="border-t border-[#e0b034]/10 pt-[0.8cqh] flex justify-between text-[0.75cqw] font-mono opacity-50 mt-1">
            <span>{isZh ? "迈锡尼王宫档案编译大纲" : "MYCENAEAN CLAY TAB TABLE_X // STABLE"}</span>
            <span>VERIFICATION CODE: 0x10_LINEAR_B</span>
          </div>
        </div>
      </div>

      {/* Decorative Slide Footer */}
      <div className="flex justify-between items-center text-[0.8cqw] font-mono opacity-55 border-t border-[#e0b034]/10 pt-[1.2cqh] z-10">
        <span>© 1952 - 2026 {isZh ? "剑桥考古语言学会" : "The Ventris & Chadwick Aegean Society"}</span>
        <span>{isZh ? "基于统计学熵之青铜时代文字破译器" : "Aegean Bronze Age Cryptanalysis Platform"}</span>
      </div>
    </div>
  );
}
