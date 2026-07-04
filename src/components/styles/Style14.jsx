import React from "react";
import { Layers, Terminal, Compass, Shield, Eye, Database, Activity, CheckCircle, ArrowRight, GitCommit } from "lucide-react";

export const getMetadata = (lang) => ({
  id: "14",
  tier: "B",
  name: lang === "zh" ? "美索不达米亚楔形文字演化" : "Sumerian Cuneiform Evolution",
  theme: lang === "zh" ? "文字起源与符号演变" : "Origins of Cuneiform Script",
  densityLabel: lang === "zh" ? "楔痕段切分" : "Cuneiform Segment Tokenizer",
  colors: { bg: "bg-[#fcf7ec]", ink: "text-[#432d18]", panel: "border-[#bf8040]/15", accent: "text-[#bf8040]" },
  typography: { header: "font-serif", body: "font-sans" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "泥上象形勾勒与芦苇笔压印" : "Clay Delineation & Reed Stylus Press",
      beats: [
        { id: 1, action: lang === "zh" ? "象形勾勒" : "Sketch Pictogram", title: lang === "zh" ? "温润黏土象形勾勒" : "Drawing Organic Curves on Soft Clay", body: lang === "zh" ? "苏美尔书吏在湿润黏土上，用芦苇杆钝尖勾勒出麦穗、牛头及星空，笔画弯曲，贴近写实。" : "Sumerian scribes outline barley ears, cattle heads, and starry horizons on wet clay using blunt reed tips. Lines remain organic." },
        { id: 2, action: lang === "zh" ? "笔尖压印" : "Press Wedge", title: lang === "zh" ? "斜切笔尖三角形压印" : "Reed Stylus Triangular Indentation", body: lang === "zh" ? "改用斜切角芦苇硬笔，由划线改用按压。笔尖陷入黏土，产生独特的三角形“楔形”压痕。" : "Adopting bevel-cut reed styluses. Pressing instead of drawing, sinking the tip into silt clay to print bold triangular wedges." },
        { id: 3, action: lang === "zh" ? "下笔锁定" : "Angle Stabilize", title: lang === "zh" ? "下笔按压倾角与深度锁定" : "Stylus Stroke Angular Lock", body: lang === "zh" ? "锁定笔尖斜插角度与下压力度常数，使连续排布的楔形整齐划一，保障泥板符号的高度清晰度。" : "Locking the precise insertion angle and hand-pressure constant, aligning consecutive wedge tracks into uniform vertical arrays." }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "象形母本向楔形抽象蜕变" : "Pictorial Sieve & Wedge Abstraction",
      beats: [
        { id: 1, action: lang === "zh" ? "提取圆弧" : "Extract Curves", title: lang === "zh" ? "提取原始大宗象形母本" : "Proto-Sumerian Pictograph Core", body: lang === "zh" ? "锁定原始泥板大宗农牧财产图形（如大麦𐏖、羊𐏔），提取其多重弧线外缘，将其作为拓扑对比基准。" : "Isolating raw organic curves of Bronze Age livestock glyphs (barley, sheep), using curved lines as algebraic baselines." },
        { id: 2, action: lang === "zh" ? "压角切分" : "Wedge Abstraction", title: lang === "zh" ? "曲线向三角形楔痕筛分" : "Wedge Conversion Sieve", body: lang === "zh" ? "将圆润圆弧分解拆析，改用3至4个笔直三角形楔块拼合代替，极大推升书写效率，字形走向几何化。" : "Decomposing complex organic circles into 3 or 4 straight triangular stylus presses, driving high-speed geometric writing." },
        { id: 3, action: lang === "zh" ? "音义咬合" : "Syllable Balance", title: lang === "zh" ? "音义表征极性对齐" : "Linguistic Phonetic Alignment", body: lang === "zh" ? "精确咬合新重组的三角形字形与古苏美尔语元音、名词双格，排除演化过渡期的歧义，顺利通关。" : "Aligning the reconstructed geometric wedges with vowels and case duals of archaic Sumerian, avoiding syntactic amnesia." }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "三阶演进与经典亚述文字" : "Three Chronological Evolution Phases",
      beats: [
        { id: 1, action: lang === "zh" ? "原始象形" : "Archaic Drawing", title: lang === "zh" ? "乌鲁克写实象形期 (BC 3000)" : "Uruk Realistic Pictographs (3000 BC)", body: lang === "zh" ? "公元前3000年乌鲁克泥板。图形特征完好，笔触写实，用于记录最原始的大麦出纳与神庙配给。" : "Uruk tablet archives (3000 BC). Highly recognizable drawings, loyal to object silhouettes, logging initial barley audits." },
        { id: 2, action: lang === "zh" ? "旋转抽象" : "90-Deg Rotation", title: lang === "zh" ? "泥板旋转与文字抽象期 (BC 2500)" : "Left-wise Rotation & Abstraction (2500 BC)", body: lang === "zh" ? "公元前2500年。字形向左顺时针旋转90度，彻底告别写实弧线，完全改用芦苇笔尖斜插入泥，简化为楔群。" : "Sumerian scribes rotate tablets 90° counter-clockwise (2500 BC). Realistic drawing is lost, replaced by bevel-cut wedge clusters." },
        { id: 3, action: lang === "zh" ? "规整亚述" : "Assyrian Cuneiform", title: lang === "zh" ? "亚述帝国成熟音符楔形 (BC 700)" : "Assyrian Phonetic Cuneiform (700 BC)", body: lang === "zh" ? "公元前700年经典亚述帝国碑铭。文字完全褪去物像，化为极其对称、利落的元辅音拼写符号，步入辉煌。" : "Classical Assyrian empire decrees (700 BC). Glyphs fully lose object association, refining into pristine syllable spellings." }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "楔痕倾角测绘与字形规范化" : "Wedge Angle Telemetry & Standard",
      beats: [
        { id: 1, action: lang === "zh" ? "测绘楔角" : "Scan Wedges", title: lang === "zh" ? "芦苇笔压痕三角形断面扫描" : "Reed Impression Micro-depth Scan", body: lang === "zh" ? "对泥板楔痕三角形槽沟深浅、笔尖倾角和划刻长度执行三维激光测绘，建立物理笔法数据库。" : "Deploying three-dimensional laser scans over clay groove slopes, mapping stylus incision depths and angular parameters." },
        { id: 2, action: lang === "zh" ? "自适应偏" : "Normalize Angle", title: lang === "zh" ? "字形歪斜扭度自适应矫正" : "Clay Warp Adaptive Normalization", body: lang === "zh" ? "计算泥板历史收缩及挤压形变产生的字体重力偏角，柔性均衡映射坐标，投射还原规范笔画。" : "Computing warp angles caused by centuries of clay desiccation, adaptively projecting and normalizing wedge grids." },
        { id: 3, action: lang === "zh" ? "演进账本" : "Epigraphic Audit", title: lang === "zh" ? "苏美尔文字学置信证明生成" : "Sumerian Epigraphy Proof Ledger", body: lang === "zh" ? "统计连续语汇楔形重组的拓扑相似度，排除野外孤本文献的偶发噪声，签发合规学术破译账册。" : "Aggregating topological matching indices of reconstructed wedge structures, compiling certified scientific epigraphy logs." }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "帝国泥板档案馆总译汇" : "Grand Imperial Cuneiform Archive",
      beats: [
        { id: 1, action: lang === "zh" ? "全库编译" : "Stream Decoding", title: lang === "zh" ? "两河泥板碎片大流实时编译" : "Deciphered Tablet stream Ingress", body: lang === "zh" ? "尼尼微皇家图书馆残件海量并轨，去噪、字形矫正、语义编译全流水运转，实时吐出古巴比伦明文译本。" : "Nineveh library fragments stream through parallel pipelines. De-warping, segmentation, and lexicon decoding outputs live texts." },
        { id: 2, action: lang === "zh" ? "全谱锁定" : "Grid Coherence", title: lang === "zh" ? "音节与词汇映射全谱大网锁定" : "Syllabary & Ideogram Convergence Mesh", body: lang === "zh" ? "六百个核心楔形符号、多重动词屈折与地名方言网络彻底并线咬合，大网绿光全亮，两代史料全盘贯通。" : "Six hundred cuneiform symbols and complex verb conjugations achieve 100% database lock. The global grid glowing bright." },
        { id: 3, action: lang === "zh" ? "非遗结账" : "Epigraphy Sign-off", title: lang === "zh" ? "美索不达米亚文字大一统印信" : "The Mesopotamian Epigraphy Ledger Close", body: lang === "zh" ? "文字学大宗对位审计大功告成，三千年泥板珍档安全结算入库，华夏考古数字大动脉宣告圆满结账。" : "Mesopotamian cuneiform history closed with master linguistic seals. Digital assets indexed in archives with green lights." }
      ]
    }
  ]
});

export default function Style14({ scene, beat, language, isThumbnail }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];
  const isZh = language === "zh";

  // Checkpoint statuses
  const activeNodes = Array.from({ length: 5 }).map((_, i) => {
    if (scene === 1) return i === 0;
    if (scene === 2) return i <= 1;
    if (scene === 3) return i <= 2;
    if (scene === 4) return i <= 3;
    return true;
  });

  return (
    <div className={`w-full h-full flex flex-col justify-between p-[3.5cqw] relative ${meta.colors.bg} ${meta.colors.ink} select-none overflow-hidden`} key={`${scene}-${beat}`}>
      {/* Background silt textures (resembling dry clay cracks) */}
      <div className="absolute inset-y-0 left-0 w-[35cqw] opacity-[0.03] pointer-events-none flex items-center justify-center">
        <svg className="w-full h-[85%]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Silt crack polygonal lines */}
          <path d="M 20 20 L 60 50 L 100 30 L 140 70 L 180 50 M 60 50 L 80 120 L 50 160 M 100 30 L 110 90 L 150 130" />
          <path d="M 140 70 L 130 140 L 170 180 M 80 120 L 130 140" opacity="0.5" />
        </svg>
      </div>

      {/* Slide Header */}
      <div className="flex justify-between items-start border-b border-[#bf8040]/15 pb-[2cqh] z-10">
        <div>
          <span className="font-mono text-[1.1cqw] tracking-widest uppercase opacity-60 flex items-center gap-[0.5cqw]">
            <Layers className="w-[1.2cqw] h-[1.2cqw] text-[#bf8040]" />
            {meta.theme}
          </span>
          <h1 className="text-[3cqw] font-serif font-black tracking-tight mt-[0.5cqh]">
            {currentScene.title}
          </h1>
        </div>
        <div className="text-right font-mono">
          <div className="text-[1.2cqw] font-bold text-[#bf8040]">
            {isZh ? "楔形文字演化分析板" : "Cuneiform Evolution Board"}
          </div>
          <div className="text-[0.9cqw] opacity-50 uppercase tracking-widest mt-[0.5cqh]">
            {meta.densityLabel}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-12 gap-[2.5cqw] flex-1 my-[2.5cqh] items-stretch z-10">
        {/* Left Column: Story-driven copy */}
        <div className="col-span-5 flex flex-col justify-between pr-[1cqw]">
          <div className="flex flex-col gap-[1.5cqh]">
            <span className="font-mono text-[1cqw] tracking-widest uppercase text-[#bf8040] font-bold flex items-center gap-[0.5cqw]">
              <span className="w-[0.8cqw] h-[0.8cqw] bg-[#bf8040] rounded-full animate-ping" />
              {currentBeat.action}
            </span>
            <h2 className="text-[2.2cqw] font-serif font-black leading-tight">
              {currentBeat.title}
            </h2>
            <p className="text-[1.1cqw] leading-[1.6] opacity-80 font-sans">
              {currentBeat.body}
            </p>
          </div>

          {/* Real-time epigraphy telemetry block */}
          <div className="bg-[#fcf2e3] border border-[#bf8040]/20 rounded-xl p-[1.5cqw] flex flex-col gap-[1.2cqh]">
            <div className="flex justify-between items-center border-b border-[#bf8040]/15 pb-[0.8cqh]">
              <span className="text-[0.9cqw] font-mono font-bold tracking-wider opacity-60">
                {isZh ? "字形结构与笔法测度" : "EPIGRAPHIC STRUCTURAL LOGS"}
              </span>
              <Terminal className="w-[1.1cqw] h-[1.1cqw] text-[#bf8040]" />
            </div>

            <div className="grid grid-cols-2 gap-[1cqw] text-[0.95cqw] font-mono">
              <div>
                <span className="opacity-50 text-[0.8cqw] block">{isZh ? "笔画几何" : "STROKE TYPE"}</span>
                <span className="font-bold text-[#bf8040]">
                  {scene === 1 ? (beat === 0 ? "Organic Curve" : "Triangular Wedge") : "Pure Cuneiform"}
                </span>
              </div>
              <div>
                <span className="opacity-50 text-[0.8cqw] block">{isZh ? "文字类型" : "SCRIPT TYPE"}</span>
                <span className="font-bold text-[#bf8040]">
                  {scene === 3 && beat === 0 ? "Uruk Pictographic" : scene === 3 && beat === 1 ? "Sumerian Abstract" : "Assyrian Syllabic"}
                </span>
              </div>
            </div>

            {/* Abstraction Slider */}
            <div className="flex flex-col gap-[0.4cqh] mt-[0.5cqh]">
              <div className="flex justify-between text-[0.75cqw] font-mono opacity-60">
                <span>{isZh ? "符号拓扑抽象化指数" : "GEOMETRIC ABSTRACTION INDEX"}</span>
                <span className="text-[#bf8040] font-bold">{scene === 1 ? "15%" : scene === 2 ? "45%" : scene === 3 ? "72%" : "99.8%"}</span>
              </div>
              <div className="w-full h-[0.5cqh] bg-[#bf8040]/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#bf8040] rounded-full transition-all duration-1000 shadow-[0_0_8px_#bf8040]"
                  style={{ width: scene === 1 ? "15%" : scene === 2 ? "45%" : scene === 3 ? "72%" : "99.8%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Cuneiform Decoder (Bespoke per scene density) */}
        <div className="col-span-7 bg-[#fbf5e6] border border-[#bf8040]/15 rounded-2xl p-[2cqw] flex flex-col justify-between relative overflow-hidden">
          {/* Silt grid background to resemble wet tablet scribe guides */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(191,128,64,0.15)_1px,transparent_1px)] [background-size:100%_1.5cqh]" />

          {scene === 1 && (
            // Scene 1 (Ultralight): Reed stylus bevel-cut pressing into mud, generating wedge shapes
            <div className="flex-1 flex flex-col justify-center items-center relative">
              <div className="w-[18cqw] h-[16cqw] bg-[#faf0db] border border-[#bf8040]/15 rounded-2xl p-[1.5cqw] flex flex-col justify-between relative shadow-sm">
                <span className="text-[0.75cqw] font-mono opacity-50 block uppercase mb-[1cqh]">REED STYLUS PRESSING ANALYSIS</span>
                
                <div className="flex-1 relative flex items-center justify-center">
                  <svg className="w-[90%] h-[90%] fill-none stroke-[#432d18]" viewBox="0 0 120 100">
                    {/* Bevel cut reed pencil tip */}
                    <path d="M 20 10 L 60 70 L 65 70 L 45 10 Z" fill="#bf8040" opacity="0.3" stroke="none" />
                    <path d="M 20 10 L 60 70 L 65 70 L 45 10 Z" stroke="#bf8040" strokeWidth="1.5" />
                    
                    {/* Clay surface flat horizontal line */}
                    <line x1="5" y1="70" x2="115" y2="70" stroke="#432d18" strokeWidth="1.5" />
                    
                    {/* Wedge shaped press indentation on soft clay */}
                    <path 
                      d="M 60 70 L 95 85 L 80 70 Z" 
                      fill="#432d18" 
                      className="transition-all duration-1000"
                      style={{
                        opacity: beat === 0 ? 0.1 : beat === 1 ? 0.6 : 1,
                        transform: beat === 0 ? "scale(0.3) translate(120px, -50px)" : "scale(1)"
                      }}
                    />
                    
                    {/* Angle marker arcs */}
                    <path d="M 45 10 A 30 30 0 0 0 5 70" stroke="#bf8040" strokeWidth="1" strokeDasharray="2,2" />
                    <text x="15" y="55" className="text-[8px] font-mono fill-current text-[#bf8040]" stroke="none">35°</text>
                  </svg>
                </div>
              </div>

              <div className="text-center font-serif text-[1.1cqw] mt-[2cqh]">
                <p className="font-extrabold">{isZh ? "斜压为楔，芦笔定骨" : "Pressed by cut reeds. The triangular wedge is born."}</p>
                <p className="text-[0.95cqw] font-sans opacity-60 mt-[0.5cqh] font-mono">
                  {isZh ? "下笔倾角 35° · 硬压硬插无滑行" : "Stylus Insertion Angle 35° · Zero sliding drag"}
                </p>
              </div>
            </div>
          )}

          {scene === 2 && (
            // Scene 2 (Light): Symmetrical comparison of rounded Pictograph vs straight Wedge Abstract
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex items-center gap-[0.5cqw]">
                <GitCommit className="w-[1.2cqw] h-[1.2cqw] text-[#bf8040]" />
                {isZh ? "原始弧线向几何楔痕拓扑简化图" : "ORGANIC CURVES TO GEOMETRIC WEDGES"}
              </div>

              <div className="flex-1 relative flex items-center justify-center">
                <svg className="w-[90%] h-[80%] fill-none stroke-[#432d18]" viewBox="0 0 400 150">
                  {/* Left panel: Round Pictograph (Barley) */}
                  <g transform="translate(10, 0)">
                    <rect x="10" y="20" width="160" height="110" rx="12" fill="#faf1d9" stroke="#bf8040" strokeWidth="1.5" />
                    <text x="25" y="42" className="text-[8px] font-mono font-bold fill-current" stroke="none">{isZh ? "原始写实象形" : "Round Pictograph"}</text>
                    {/* Barley draw paths */}
                    <path d="M 90 40 Q 110 60, 90 100 Q 70 60, 90 40 Z" strokeWidth="2.5" />
                    <path d="M 90 40 Q 125 50, 110 80 Q 75 90, 90 40 Z" strokeWidth="1.5" className="stroke-dashed" />
                  </g>

                  {/* Redirection link arrow */}
                  <g transform="translate(185, 65)">
                    <path d="M 0 10 H 30" stroke="#bf8040" strokeWidth="2" strokeDasharray="3,3" />
                    <polygon points="30,13 38,10 30,7" fill="#bf8040" />
                  </g>

                  {/* Right panel: Abstrated Wedges */}
                  <g transform="translate(220, 0)">
                    <rect x="10" y="20" width="160" height="110" rx="12" fill="#faf1d9" stroke="#bf8040" strokeWidth="1.5" className={beat >= 1 ? "opacity-100 shadow-md" : "opacity-30"} />
                    <text x="25" y="42" className="text-[8px] font-mono font-bold fill-current" stroke="none">{isZh ? "极度抽象楔形" : "Abstrated Wedges"}</text>
                    {/* Cuneiform wedges representing barley */}
                    {beat >= 1 && (
                      <g fill="#432d18" stroke="none">
                        {/* Triangular wedges */}
                        <polygon points="90,40 105,48 100,60" />
                        <polygon points="100,60 115,70 108,82" />
                        <polygon points="90,40 75,48 80,60" />
                        <line x1="90" y1="40" x2="90" y2="105" stroke="#432d18" strokeWidth="3.5" />
                      </g>
                    )}
                  </g>
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-[1cqw] border-t border-[#bf8040]/10 pt-[1.2cqh] text-[0.9cqw] font-mono text-[#bf8040]/80">
                <div>
                  <span className="opacity-60">{isZh ? "画线弧度消除度:" : "Organic Curve Removal:"}</span>
                  <span className="ml-[0.5cqw] font-bold">{beat >= 1 ? "100% GONE" : "WAIT"}</span>
                </div>
                <div>
                  <span className="opacity-60">{isZh ? "音字映射置信率:" : "Phonotactic Concordance:"}</span>
                  <span className="ml-[0.5cqw] font-bold">{beat >= 2 ? "99.4%" : "CALCULATING"}</span>
                </div>
              </div>
            </div>
          )}

          {scene === 3 && (
            // Scene 3 (Standard): Chronological 3 stages of Sumerian Cuneiform evolution
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex justify-between text-[#432d18]">
                <span>{isZh ? "两河流域文字三千载蜕化轨迹链" : "THREE CHRONOLOGICAL EVOLUTION PHASE CHAINS"}</span>
                <span className="animate-pulse">● Cuneiform History Locked</span>
              </div>

              <div className="grid grid-cols-3 gap-[1.2cqw] my-[2cqh] flex-1">
                {[
                  { name: isZh ? "原始写实象形" : "Uruk Drawing", unit: "3000 BC / Uruk", icon: "🌱", desc: isZh ? "大麦、绵羊象形写实图形" : "Recognizable silhouettes drawn on wet mud", active: true },
                  { name: isZh ? "旋转向左旋转" : "90° Left-rotation", unit: "2500 BC / Babylon", icon: "📐", desc: isZh ? "字形左旋90°，改硬尖压印" : "Tablet turns 90° left. Stylus replaces pen.", active: beat >= 1 },
                  { name: isZh ? "声符成熟楔形" : "Assyrian Classic", unit: "700 BC / Assyria", icon: "🖋️", desc: isZh ? "完全丧失写实，规整元辅音" : "Pure structured sound letters in clay vaults", active: beat >= 2 }
                ].map((item, i) => (
                  <div key={i} className={`p-[1.2cqw] rounded-xl border bg-white flex flex-col justify-between transition-all duration-500 ${
                    item.active 
                      ? "border-[#bf8040] shadow-md scale-100" 
                      : "border-slate-200 opacity-20 scale-95"
                  }`}>
                    <div className="flex justify-between items-start">
                      <span className="text-[1.8cqw]">{item.icon}</span>
                      <span className="text-[0.75cqw] font-mono font-bold bg-[#bf8040]/10 text-[#bf8040] px-[0.5cqw] py-[0.1cqh] rounded">
                        {item.unit}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-serif font-black text-[1cqw] mt-[1cqh] text-[#432d18]">{item.name}</h4>
                      <p className="text-[0.75cqw] text-zinc-600 mt-[0.5cqh] font-sans leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-[0.8cqw] font-mono opacity-50 flex justify-between">
                <span>{isZh ? "芦苇斜切斜口热阻阻位" : "芦苇笔压角自适应常数"}</span>
                <span className="text-[#bf8040] font-bold">
                  {beat === 0 ? "STAGE 1 ACTIVE" : beat === 1 ? "ROTATION MATCHED" : "THREE STAGES COMPILED"}
                </span>
              </div>
            </div>
          )}

          {scene === 4 && (
            // Scene 4 (Dense): 2x2 database alignment and clay normalizer telemetry
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex justify-between">
                <span>{isZh ? "楔沟三维激光扫描与歪斜自校准遥测板" : "WEDGE INDENTATION MICRO-DEPTH & CLAY DE-WARPING BOARD"}</span>
                <span>{isZh ? "遥测自检中" : "SENSORS ONLINE"}</span>
              </div>

              <div className="grid grid-cols-2 gap-[1.2cqw] my-[1cqh] flex-1">
                {[
                  { title: isZh ? "三角形压印三维测温扫角" : "WEDGE DEPTH & VERTEX MEASURE", val: "Depth 4.2mm", info: isZh ? "下笔力度恒定，折角无错" : "Stylus depth constant, error free", icon: Activity, active: true },
                  { title: isZh ? "泥板收缩字形规范校正" : "GLYPH DE-WARPING COORDS", val: "Re-aligned 12°", info: isZh ? "修正地质干缩导致字体倾斜" : "Corrected desiccation warping delta", icon: Compass, active: beat >= 1 },
                  { title: isZh ? "音素拼写组合统计熵" : "CUNEIFORM PHONETIC ENTROPY", val: "1.12 H (Optimal)", info: isZh ? "证明符合早期语言发音拼写" : "Optimal grammatical spell index", icon: Layers, active: beat >= 1 },
                  { title: isZh ? "演化置信度总账册" : "EPIGRAPHIC PROOF CONFIDENCE", val: "99.98% True", info: isZh ? "排除虚假考古巧合率" : "Sufficient epigraphy certification", icon: Shield, active: beat >= 2 }
                ].map((item, i) => (
                  <div key={i} className={`p-[1.2cqw] rounded-xl border bg-white flex justify-between items-center transition-all duration-500 ${
                    item.active ? "border-[#bf8040] shadow-sm" : "border-slate-200 opacity-20"
                  }`}>
                    <div className="flex flex-col gap-[0.3cqh]">
                      <span className="text-[0.75cqw] font-mono font-bold opacity-60 text-[#432d18] uppercase">{item.title}</span>
                      <span className="text-[1.3cqw] font-serif font-black text-[#432d18]">{item.val}</span>
                      <span className="text-[0.75cqw] text-zinc-500 font-sans">{item.info}</span>
                    </div>
                    <item.icon className="w-[2cqw] h-[2cqw] text-[#bf8040]" />
                  </div>
                ))}
              </div>

              <div className="w-full bg-[#fcf2e3] h-[0.4cqh] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#bf8040] transition-all duration-700" 
                  style={{ width: beat === 0 ? "35%" : beat === 1 ? "70%" : "100%" }}
                />
              </div>
            </div>
          )}

          {scene === 5 && (
            // Scene 5 (Extreme / High Density): Grand Mesopotamian Cuneiform Archive Portal
            <div className="flex-1 flex flex-col justify-between my-[0.2cqh]">
              {/* Top summary cards */}
              <div className="grid grid-cols-4 gap-[0.8cqw]">
                {[
                  { name: isZh ? "记录大宗账目" : "LEDGERS INDEXED", val: "6,400 " + (isZh ? "部" : "Ledgers"), color: "text-[#432d18]" },
                  { name: isZh ? "字形编译覆盖" : "CONCORDANCE RATE", val: "100% Compliant", color: "text-emerald-700" },
                  { name: isZh ? "王室认证等级" : "LIBRARY GRADE", val: "Nineveh Royal", color: "text-emerald-700" },
                  { name: isZh ? "出土破译泥板" : "TABLETS DECODED", val: beat >= 2 ? "12,400 " + (isZh ? "块" : "Tablets") : beat >= 1 ? "4,500 " + (isZh ? "块" : "Tablets") : "1,200" }
                ].map((ind, i) => (
                  <div key={i} className="bg-white border border-[#bf8040]/20 rounded-xl p-[0.8cqw] text-center shadow-sm">
                    <span className="text-[0.7cqw] font-mono opacity-50 block text-[#432d18] uppercase">{ind.name}</span>
                    <span className={`text-[1.1cqw] font-serif font-black ${ind.color} block mt-[0.2cqh]`}>{ind.val}</span>
                  </div>
                ))}
              </div>

              {/* Central Map & Spectrogram Ticker */}
              <div className="grid grid-cols-12 gap-[1cqw] my-[1cqh] flex-1">
                {/* SVG Convection Map of Mesopotamian archaeology */}
                <div className="col-span-7 bg-white border border-[#bf8040]/20 rounded-xl p-[1.5cqw] relative flex flex-col justify-between shadow-sm">
                  <span className="text-[0.75cqw] font-mono opacity-50 block">{isZh ? "泥板字形分切扫描与实时音值解码图" : "TABLET SEGMENT IMPRESSION SPECTROMETRY"}</span>
                  
                  <div className="flex-1 relative flex items-center justify-center">
                    <svg className="w-full h-full fill-none stroke-[#432d18]" viewBox="0 0 240 100">
                      {/* Grid background */}
                      <path d="M 0 50 H 240 M 80 0 V 100 M 160 0 V 100" stroke="#bf8040" strokeWidth="0.5" strokeDasharray="2,4" className="opacity-15" />
                      
                      {/* Swirling timeline circles */}
                      <circle cx="120" cy="50" r="35" stroke="#bf8040" strokeWidth="1" strokeDasharray="3,6" className="opacity-15 animate-spin-slow" />
                      
                      {/* Tablet segment nodes */}
                      {[
                        { x: 40, y: 30, t: "SAG (头)", active: true },
                        { x: 120, y: 30, t: "ŠE (麦)", active: beat >= 1 },
                        { x: 200, y: 30, t: "AN (天)", active: beat >= 2 },
                        { x: 40, y: 70, t: "Uruk", active: true },
                        { x: 120, y: 70, t: "Babylon", active: beat >= 1 },
                        { x: 200, y: 70, t: "Nineveh", active: beat >= 2 }
                      ].map((node, idx) => (
                        <g key={idx} className="transition-all duration-500">
                          <circle cx={node.x} cy={node.y} r="12" fill={node.active ? "#faf1da" : "#fcf7ec"} stroke={node.active ? "#bf8040" : "#cbd5e1"} strokeWidth="1.5" />
                          <text x={node.x - 11} y={node.y + 3} className="text-[7px] font-sans font-black fill-[#432d18]" stroke="none">{node.t}</text>
                          {node.active && (
                            <circle cx={node.x} cy={node.y} r="14" stroke="#bf8040" strokeWidth="1" className="animate-ping opacity-25" style={{ animationDuration: "4s" }} />
                          )}
                        </g>
                      ))}
                    </svg>
                  </div>
                </div>

                {/* Right side: Event and chemical phase logs */}
                <div className="col-span-5 bg-white border border-[#bf8040]/20 rounded-xl p-[1.5cqw] flex flex-col justify-between shadow-sm font-mono text-[0.75cqw]">
                  <span className="opacity-50 text-[0.7cqw] uppercase border-b border-[#bf8040]/15 pb-[0.3cqh] block">
                    {isZh ? "文字学皇家大一统结算明细" : " Nineveh Royal EPIGRAPHY REPORT"}
                  </span>
                  
                  <div className="flex-1 flex flex-col justify-center gap-[0.5cqh] my-1 leading-none">
                    <div className="text-zinc-500">&gt; SILT_CLAY_DE_WARPING_READY</div>
                    <div className="text-zinc-400">&gt; Reed angle calibration complete</div>
                    <div className={`transition-opacity ${beat >= 1 ? "opacity-100 text-[#bf8040]" : "opacity-15"}`}>
                      &gt; left rotated 90° locked
                    </div>
                    <div className={`transition-opacity ${beat >= 2 ? "opacity-100 text-emerald-700 font-extrabold" : "opacity-5"}`}>
                      &gt; CUNEIFORM COGNATE SYNC SYSTEM OK
                    </div>
                  </div>

                  <div className={`text-[0.65cqw] p-[0.5cqw] rounded bg-emerald-50 text-emerald-800 border border-emerald-500/20 flex items-center gap-[0.3cqw] ${beat >= 2 ? "opacity-100" : "opacity-20"}`}>
                    <Shield className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{isZh ? "王室契约大一统结账，数字档入藏盖章" : "Royal seal applied. Decipherment complete."}</span>
                  </div>
                </div>
              </div>

              {/* Bottom system status bar */}
              <div className="text-[0.8cqw] font-mono opacity-60 flex justify-between items-center px-1 border-t border-[#bf8040]/15 pt-[0.6cqh]">
                <span>{isZh ? "美索不达米亚经典楔形文字数字演进研究大一统" : "Sumerian & Akkadian Script Digitization Board"}</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                  {isZh ? "楔形演变大一统绿标高亮通车" : "EPIGRAPHY METRIC: OPTIMAL COMPILER"}
                </span>
              </div>
            </div>
          )}

          {/* Sub status footer */}
          <div className="border-t border-[#bf8040]/10 pt-[0.8cqh] flex justify-between text-[0.75cqw] font-mono opacity-50 mt-1">
            <span>{isZh ? "两河古文献拓扑字图卷宗" : "SUMERIAN CUNEIFORM SYLLABIC RECORD TABLET_XIV // COMPLETE"}</span>
            <span>VERIFICATION CODE: 0x14_CUNEIFORM</span>
          </div>
        </div>
      </div>

      {/* Decorative Slide Footer */}
      <div className="flex justify-between items-center text-[0.8cqw] font-mono opacity-55 border-t border-[#bf8040]/10 pt-[1.2cqh] z-10">
        <span>© BC 3200 - 2026 {isZh ? "巴比伦古文字与金石碑铭学会" : "Babylon Cuneiform & Epigraphy Research Association"}</span>
        <span>{isZh ? "两河流域黏土干燥收缩自适应对位系统" : "Silt Clay Warp Adaptor"}</span>
      </div>
    </div>
  );
}
