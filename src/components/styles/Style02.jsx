import React from "react";
import { 
  BookOpen, Compass, FileText, Anchor, Bookmark, Stamp, Map, ShieldCheck
} from "lucide-react";

export const getMetadata = (lang) => ({
  id: "02",
  tier: "A",
  name: lang === "zh" ? "庞贝古城发掘速写" : "A Day in Pompeii",
  theme: lang === "zh" ? "历史考古与古迹复原" : "Historical Archaeology",
  densityLabel: lang === "zh" ? "灵动/手绘风格" : "Playful Hand-drawn",
  colors: { bg: "bg-[#f4efe2]", ink: "text-[#2d2722]", panel: "border-[#2d2722]/15" },
  typography: { header: "font-serif", body: "font-sans" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "庞贝古城发掘速写 绪论" : "Introduction to Pompeii",
      beats: [
        { id: 1, action: lang === "zh" ? "铲除上覆火山灰" : "Unearth Volcanic Ash", title: lang === "zh" ? "出土陶器与时空尘封" : "Ancient Amphora Under Ashes", body: lang === "zh" ? "公元79年维苏威火山爆发，极热火山碎屑流在一瞬间凝固了庞贝的日常生活，将其深埋在数米厚的火山灰与浮石之下。" : "In 79 AD, Mount Vesuvius erupted, flash-freezing Pompeii's daily life, burying it under meters of volcanic ash and solid pumice layers." },
        { id: 2, action: lang === "zh" ? "发掘双耳细颈瓶" : "Expose Amphora", title: lang === "zh" ? "古典双耳细颈瓶的修复" : "Exposing the Slender Amphora", body: lang === "zh" ? "在VI区第2街区，泥土中显露出一个完整的古罗马陶制双耳瓶，表面带有手写贸易标记，静静诉说着古地中海的酒肆贸易。" : "In Region VI, insula 2, a complete Roman terracotta amphora emerges from the clay, showing faint hand-scratched trade notations." },
        { id: 3, action: lang === "zh" ? "盖上野外编号章" : "Log Field Journal", title: lang === "zh" ? "野外日记草图与实测" : "Field Sketch Log & Record", body: lang === "zh" ? "考古学家在牛皮纸草稿本上用铅笔勾勒出这件陶器的精确轮廓，记录其几何比例、出土深度及周边炭化种子的遗存特征。" : "Archaeologists pencil-draft precise silhouettes on parchment, documenting geometry ratios, soil depth, and surrounding carbonized seeds." }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "庞贝古城发掘速写 解析" : "Reconstruction & Records",
      beats: [
        { id: 1, action: lang === "zh" ? "临摹残片截面" : "Sketch Pottery Profile", title: lang === "zh" ? "细颈瓶几何断面图" : "Amphora Profile Geometry", body: lang === "zh" ? "通过精确对准口沿、腹部和足部的测量坐标，复原陶器几何对称面。手绘速写忠实记录了陶土颗粒与窑烧微观痕迹。" : "Aligning geometric coordinates of the rim, body, and base. Hand sketches record clay composition, grain structures, and firing stamps." },
        { id: 2, action: lang === "zh" ? "译读墨书题签" : "Decrypt Ink Dipinti", title: lang === "zh" ? "墨书题签释读与贸易路径" : "Dipinti Ink Text Decryption", body: lang === "zh" ? "陶瓶颈部的红色墨书手写体（Dipinti）揭示了原产国、红酒年份以及分销商名字。这是公元一世纪跨地中海物产流通的关键线索。" : "Red hand-inked lettering (dipinti) on the vessel neck yields origin, olive wine vintage, and merchant names: crucial Mediterranean trade trail evidence." },
        { id: 3, action: lang === "zh" ? "加盖鉴核钢印" : "Apply Curator Stamp", title: lang === "zh" ? "考古鉴核印章注册" : "Archaeological Certification Stamp", body: lang === "zh" ? "在清理并测量所有三维数据之后，该细颈瓶被正式载入庞贝文物注册登记表，加盖红色野外手绘钢印以确立其出土档案。" : "After completing 3D coordinate scanning, the amphora is registered into the Pompeii catalog database, marked with a red curatorial stamp." }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "庞贝古城发掘速写 演进" : "Excavation & Curatorial Flow",
      beats: [
        { id: 1, action: lang === "zh" ? "地层发掘" : "Excavate Strata", title: lang === "zh" ? "地层逐层刮铲发掘" : "Earthy Layer Scraping", body: lang === "zh" ? "使用小铁铲与毛刷将压实的火山灰层逐毫米剥离。每一个沉积细部，都对重建庞贝覆灭那天的微观时间线至关重要。" : "Meticulously peeling the volcanic strata millimeter by millimeter. Every sedimentary change guides the disaster hour timeline reconstruction." },
        { id: 2, action: lang === "zh" ? "现场实测登录" : "Log Field Artifacts", title: lang === "zh" ? "现场标本三维坐标测量" : "Field Spatial Registration", body: lang === "zh" ? "利用经纬仪和皮尺，测量并锁定陶罐的三维空间坐标，直接将发现记入考古学家的野外绘图手册中。" : "Deploying coordinate reference strings to map the vessel's physical origin, translating coordinate values onto drawing notebooks." },
        { id: 3, action: lang === "zh" ? "馆藏编号备案" : "Affix Curator Stamp", title: lang === "zh" ? "馆藏文书加盖验证印" : "Verification & Labeling Stamp", body: lang === "zh" ? "对出土陶器进行盐分脱除和物理加固，封存于防潮标本箱中，同时在随附文书上加盖官方红泥验证大印。" : "Salt extraction and consolidation finalized. The vessel is boxed, with validation document stamps applied to certify its preservation." }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "庞贝古城发掘速写 矩阵" : "Volcanic Strata Matrix",
      beats: [
        { id: 1, action: lang === "zh" ? "灰白浮石堆积层" : "Ash & Pumice Layer", title: lang === "zh" ? "公元79年落灰白浮石堆积层" : "Volcanic Ash & White Pumice Fall", body: lang === "zh" ? "喷发初期的沉积物。包含了大量白色浮石，堆积厚度达数米。此地层中出土了大量匆忙逃难遗留的随身钱币与日用器具。" : "Initial phase ejecta. Dense layer containing light white pumice fragments. Rich in artifacts dropped by residents during early flight." },
        { id: 2, action: lang === "zh" ? "灰色浮石层" : "Grey Pumice Layer", title: lang === "zh" ? "公元79年落灰灰色浮石层" : "Later Volcanic Grey Pumice Stratum", body: lang === "zh" ? "喷发次日的火山灰层。由于火山喷发通道扩大，喷出物转为灰色浮石，代表着更深、更有破坏力的地下岩浆喷涌而出。" : "Second eruption phase stratum. Expanding volcanic vents spewed darker grey pumice, indicating more volatile deep-mantle magma ascent." },
        { id: 3, action: lang === "zh" ? "角砾岩地基层" : "Soil Base Matrix", title: lang === "zh" ? "前公元79年史前基底岩层" : "Pre-79 AD Archaic Soil Matrix", body: lang === "zh" ? "火山爆发前的罗马庞贝原始地表。包含前萨姆尼特时代的农田遗迹、黑土和早期的碎石排水通道，代表了古城的原始历史基底。" : "Original Roman ground level. Features early Samnite crop furrows, fertile black soil, and pre-eruption brick and stone drainage pipes." }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "庞贝古城发掘速写 汇总" : "Artifact Stratigraphy Ledger",
      beats: [
        { id: 1, action: lang === "zh" ? "载入地层总册" : "Load Strata Ledger", title: lang === "zh" ? "野外日记出土标本全表" : "Scrapbook Artifact Registry", body: lang === "zh" ? "系统整理！归档该探沟出土的所有罗马陶罐、炭化植物、青铜钱币和墙体壁画碎片，形成完整的历史时空地层矩阵。" : "Comprehensive cataloging! Archiving Roman pottery, carbonized plants, bronze coins, and fresco plasters into a temporal matrix." },
        { id: 2, action: lang === "zh" ? "计算出土海拔" : "Calculate Elevations", title: lang === "zh" ? "出土地层海拔深度测算" : "Strata Depth Correlation Profile", body: lang === "zh" ? "剔除杂散土层塌方噪声，严格建立起器物海拔高度与火山碎屑流沉积阶段之间的相对年代学对应坐标。" : "Filtering slump noise, establishing elevation offsets of artifacts relative to chronological pyroclastic flow layers." },
        { id: 3, action: lang === "zh" ? "加盖鉴核朱砂印" : "Stamp Vermilion Certification", title: lang === "zh" ? "发掘报告加盖朱砂备案印" : " Vermilion Curatorial Certificate Seal", body: lang === "zh" ? "发掘报告最终确认！各项坐标精度和修护档案完备，在报告文书末页加盖考古主管的红色朱砂鉴核印章。" : "Excavation file closed! Metadata verified, sealing the final page of the curatorial catalog with the Vermilion Seal of approval." }
      ]
    }
  ]
});

export default function Style02({ scene, beat, language, isThumbnail }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];

  const renderVisual = () => {
    switch (scene) {
      case 1:
        return (
          <div className="relative w-[34cqw] h-[34cqw] flex items-center justify-center animate-paper-peel" key={`s1-${beat}`}>
            {/* Sketchbook Background Page (Overlapping sheets) */}
            <div className="absolute w-[90%] h-[95%] bg-[#fffdf5] border-2 border-[#2d2722] rounded shadow-[4px_4px_0_#2d2722] rotate-[-2deg] transition-all duration-700" />
            <div className="absolute w-[88%] h-[92%] bg-white border border-[#2d2722]/60 rounded shadow-[8px_8px_0_rgba(45,39,34,0.15)] rotate-[1.5deg] transition-all duration-700 flex flex-col justify-between p-[1.5cqw] relative">
              
              {/* Grid ledger lines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(45,39,34,0.04)_1px,transparent_1px)] bg-[size:100%_2cqh] pointer-events-none rounded" />

              {/* Hand-drawn Amphora SVG sketch */}
              <div className="relative flex-1 flex items-center justify-center py-2 z-10">
                <svg className="w-[18cqw] h-[18cqw]" viewBox="0 0 100 100">
                  {/* Outer Vessel silhouette sketched with wobbly lines */}
                  <path d="M 50,15 C 44,15 44,20 44,25 C 44,30 38,40 34,50 C 30,60 30,70 38,82 C 43,90 57,90 62,82 C 70,70 70,60 66,50 C 62,40 56,30 56,25 C 56,20 56,15 50,15 Z" 
                    fill="none" stroke="#2d2722" strokeWidth="1.8" strokeDasharray="100" strokeDashoffset={beat >= 1 ? "0" : "100"}
                    className="transition-all duration-1000" style={{ transitionDelay: "100ms" }} />
                  
                  {/* Left Handle */}
                  <path d="M 44,25 C 38,25 36,35 40,43" 
                    fill="none" stroke="#2d2722" strokeWidth="1.5" strokeDasharray="40" strokeDashoffset={beat >= 1 ? "0" : "40"}
                    className="transition-all duration-1000" style={{ transitionDelay: "400ms" }} />

                  {/* Right Handle */}
                  <path d="M 56,25 C 62,25 64,35 60,43" 
                    fill="none" stroke="#2d2722" strokeWidth="1.5" strokeDasharray="40" strokeDashoffset={beat >= 1 ? "0" : "40"}
                    className="transition-all duration-1000" style={{ transitionDelay: "400ms" }} />

                  {/* Inner measurement lines / grid coordinates */}
                  <path d="M 30,65 L 70,65 M 34,50 L 66,50" 
                    fill="none" stroke="#2d2722" strokeWidth="0.8" strokeDasharray="3 3" className="opacity-40" />
                  
                  <text x="50" y="8" textAnchor="middle" fill="#2d2722" className="font-handwriting text-[6px] font-bold opacity-60">AMPHORA.ROM.VI</text>
                </svg>
              </div>

              {/* Hand-drawn Stamp Badge */}
              <div className={`absolute bottom-3 right-3 bg-red-100/80 border-2 border-dashed border-red-700/60 text-red-800 font-serif text-[1cqw] px-2 py-0.5 rounded rotate-[-12deg] font-black tracking-widest transition-all duration-1000 ${
                beat >= 2 ? "opacity-100 scale-110" : "opacity-0 scale-50"
              }`}>
                {language === "zh" ? "庞贝·VI区" : "POMPEII.REG.VI"}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="relative w-full max-w-[42cqw] grid grid-cols-2 gap-[3cqw] items-center animate-rotate-in font-serif" key={`s2-${beat}`}>
            {/* Profile Draft Card */}
            <div className={`bg-white border-2 border-[#2d2722] p-[2cqw] rounded-xl shadow-[5px_5px_0_rgba(45,39,34,0.15)] flex flex-col items-center justify-center gap-3 relative min-h-[28cqh] ${beat >= 0 ? "opacity-100 scale-100" : "opacity-30 scale-95"}`}>
              <div className="absolute top-1 left-2 font-handwriting text-[1cqw] text-slate-500">Fig.2.3</div>
              <svg className="w-[10cqw] h-[10cqw]" viewBox="0 0 100 100">
                {/* Pottery profile slice sketch */}
                <path d="M 50,10 L 50,90 M 50,15 C 38,20 32,45 32,70 C 32,80 44,85 50,85" 
                  fill="none" stroke="#2d2722" strokeWidth="1.8" />
                <path d="M 50,15 C 45,15 42,12 50,10" fill="none" stroke="#2d2722" strokeWidth="1" />
                <path d="M 50,10 L 65,10" fill="none" stroke="#2d2722" strokeWidth="1" strokeDasharray="2 2" />
                <text x="75" y="15" fill="#2d2722" className="text-[8px] font-handwriting">r=15cm</text>
              </svg>
              <div className="text-center">
                <span className="font-serif text-[1.1cqw] text-[#2d2722] font-black block">{language === "zh" ? "双耳瓶对称几何断面" : "AMPHORA PROFILE SECTION"}</span>
                <span className="text-[0.9cqw] text-slate-500 font-sans">{language === "zh" ? "1:5 实测断面临摹" : "1:5 Measured Draft Scale"}</span>
              </div>
            </div>

            {/* Dipinti Decrypted Card */}
            <div className={`bg-amber-50/80 border-2 border-[#2d2722] p-[2cqw] rounded-xl shadow-[5px_5px_0_rgba(45,39,34,0.15)] flex flex-col items-center justify-center gap-3 relative min-h-[28cqh] transition-all duration-1000 ${
              beat >= 1 ? "opacity-100 scale-100" : "opacity-10 scale-90"
            }`}>
              <div className="absolute top-1 right-2 font-serif text-[1cqw] text-red-800 font-bold">INSCRIPTION</div>
              
              {/* Dipinti handwriting style */}
              <div className="font-serif italic text-red-700 text-[2cqw] tracking-wider my-1 border border-red-700/20 px-3 py-1 rounded bg-red-50/20">
                LIQVAMEN • OPTIMVM
              </div>
              <div className="text-center font-sans">
                <span className="font-serif text-[1.1cqw] text-[#2d2722] font-black block">{language === "zh" ? "墨书题签解读" : "DIPINTI DECRYPTION"}</span>
                <span className="text-[0.9cqw] text-slate-500">{language === "zh" ? "‘极品鱼露·加利亚产’" : "‘Premium Liquamen of Gaul’"}</span>
              </div>

              {beat >= 2 && (
                <div className="absolute inset-0 bg-red-700/10 flex items-center justify-center rounded-lg backdrop-blur-[0.5px]">
                  <div className="bg-red-800 text-white font-serif text-[1.2cqw] px-3 py-1 border-2 border-white rounded rotate-[-10deg] font-black tracking-widest shadow-lg animate-elastic-pop">
                    {language === "zh" ? "已鉴核" : "VERIFIED"}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex items-center justify-between w-full max-w-[44cqw] relative animate-slide-up" key={`s3-${beat}`}>
            {/* Stage 1 */}
            <div className={`border-2 border-[#2d2722] bg-white p-[1.8cqw] rounded-xl flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md relative overflow-hidden transition-all duration-700 ${beat >= 0 ? "opacity-100 scale-100" : "opacity-20 scale-95"}`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">01</div>
              <div className="w-[3cqw] h-[3cqw] rounded-full bg-slate-100 border border-[#2d2722] flex items-center justify-center font-mono text-[#2d2722] text-[1.1cqw] font-bold">DIG</div>
              <span className="font-serif text-[1cqw] font-black text-[#2d2722]">{language === "zh" ? "地层发掘" : "EXCAVATION"}</span>
            </div>

            {/* Line 1 */}
            <div className={`flex-1 h-0.5 border-t border-dashed transition-all duration-1000 mx-2 ${
              beat >= 1 ? "border-[#2d2722]/50 opacity-100" : "border-[#2d2722]/10 opacity-20"
            }`} />

            {/* Stage 2 */}
            <div className={`border-2 border-[#2d2722] bg-white p-[1.8cqw] rounded-xl flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md relative overflow-hidden transition-all duration-700 ${
              beat >= 1 ? "opacity-100 scale-100" : "opacity-20 scale-95"
            }`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">02</div>
              <div className="w-[3cqw] h-[3cqw] rounded-full bg-slate-100 border border-[#2d2722] flex items-center justify-center font-mono text-[#2d2722] text-[1.1cqw] font-bold">LOG</div>
              <span className="font-serif text-[1cqw] font-black text-[#2d2722]">{language === "zh" ? "现场登录" : "DOCUMENT"}</span>
            </div>

            {/* Line 2 */}
            <div className={`flex-1 h-0.5 border-t border-dashed transition-all duration-1000 mx-2 ${
              beat >= 2 ? "border-[#2d2722]/50 opacity-100" : "border-[#2d2722]/10 opacity-20"
            }`} />

            {/* Stage 3 */}
            <div className={`border-2 border-[#2d2722] bg-red-50 p-[1.8cqw] rounded-xl flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md relative overflow-hidden transition-all duration-700 ${
              beat >= 2 ? "opacity-100 scale-100 border-red-700/40" : "opacity-20 scale-95"
            }`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">03</div>
              <div className="w-[3cqw] h-[3cqw] rounded-full bg-red-100 border border-red-700 flex items-center justify-center font-mono text-red-700 text-[1.1cqw] font-bold">SEAL</div>
              <span className="font-serif text-[1cqw] font-black text-[#2d2722]">{language === "zh" ? "馆藏备案" : "REGISTRATION"}</span>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="grid grid-cols-2 gap-[1.5cqw] w-full max-w-[42cqw] animate-scale-up font-serif" key={`s4-${beat}`}>
            {/* Stratum 1 */}
            <div className={`border border-[#2d2722]/20 bg-white/60 p-[1.5cqw] rounded-xl relative transition-all duration-500 ${beat >= 0 ? "opacity-100 scale-100 border-[#2d2722]/30" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-amber-900 font-bold">S1</div>
              <span className="font-serif text-[1.1cqw] text-[#2d2722] font-black block mb-1">{language === "zh" ? "落灰白浮石层 (A级)" : "WHITE PUMICE STRATUM"}</span>
              <p className="text-[0.9cqw] opacity-85 text-slate-700 font-sans leading-tight">
                {language === "zh" ? "喷发初期（约公元79年8月24日下午1时）。包含大量白浮石碎片与跌落钱币。" : "Initial ash fall phase. Dense white pumice and dropped bronze coins under carbonized beams."}
              </p>
            </div>

            {/* Stratum 2 */}
            <div className={`border border-[#2d2722]/20 bg-white/60 p-[1.5cqw] rounded-xl relative transition-all duration-500 ${beat >= 1 ? "opacity-100 scale-100 border-[#2d2722]/30" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-amber-900 font-bold">S2</div>
              <span className="font-serif text-[1.1cqw] text-[#2d2722] font-black block mb-1">{language === "zh" ? "落灰灰色浮石层 (B级)" : "GREY PUMICE STRATUM"}</span>
              <p className="text-[0.9cqw] opacity-85 text-slate-700 font-sans leading-tight">
                {language === "zh" ? "喷发次日（8月25日上午）。更深层深色岩浆喷涌沉积物，文物破碎严重。" : "Later phase sediment. Higher volatile grey ejecta with crushed roof timber fragments."}
              </p>
            </div>

            {/* Stratum 3 */}
            <div className={`border border-[#2d2722]/20 bg-white/60 p-[1.5cqw] rounded-xl relative transition-all duration-500 ${beat >= 2 ? "opacity-100 scale-100 border-[#2d2722]/30" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-amber-900 font-bold">S3</div>
              <span className="font-serif text-[1.1cqw] text-[#2d2722] font-black block mb-1">{language === "zh" ? "史前原始土基层 (C级)" : "PRE-ERUPTION SOIL BASE"}</span>
              <p className="text-[0.9cqw] opacity-85 text-slate-700 font-sans leading-tight">
                {language === "zh" ? "爆发前的原始罗马地基。萨姆尼特农田遗迹、黑土和早期碎石排水渠。" : "Archaic pre-79 AD agriculture horizon, dark clay, and limestone foundation trenches."}
              </p>
            </div>

            {/* Stratum 4 */}
            <div className={`border border-[#2d2722]/20 bg-amber-50 p-[1.5cqw] rounded-xl relative transition-all duration-500 ${beat >= 2 ? "opacity-100 scale-100 border-amber-900/30" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-amber-900 font-bold">S4</div>
              <span className="font-serif text-[1.1cqw] text-[#2d2722] font-black block mb-1">{language === "zh" ? "文物埋藏高密度区" : "ARTIFACT CONCENTRATION"}</span>
              <p className="text-[0.9cqw] opacity-85 text-slate-700 font-sans leading-tight">
                {language === "zh" ? "位于浮石与地基交界层。生活器具、青铜饰品、碳化面包与面包篮遗存。" : "In-situ debris at ground layer. Domestic utensils, bronze pins, and carbonized loaves."}
              </p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="grid grid-cols-3 gap-[1cqw] w-full max-w-[45cqw] animate-bento-stagger" key={`s5-${beat}`}>
            {/* Bento Block 1: Stratigraphy Diagram */}
            <div className={`col-span-2 border border-[#2d2722]/20 bg-white p-[1.2cqw] rounded-xl min-h-[16cqh] flex flex-col justify-between transition-all duration-500 ${beat >= 0 ? "opacity-100" : "opacity-25"}`}>
              <div className="flex justify-between items-center border-b border-[#2d2722]/10 pb-1.5 font-serif">
                <span className="text-[0.95cqw] text-[#2d2722] font-black flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  {language === "zh" ? "探沟地层分布速写" : "STRATA SECTION PROFILE"}
                </span>
                <span className="text-[0.8cqw] font-mono text-slate-500">Trench IV-C</span>
              </div>
              
              {/* Colored strata cross section rendering */}
              <div className="flex flex-col gap-1.5 mt-2">
                <div className="h-[2cqh] bg-neutral-200/80 rounded border border-[#2d2722]/10 flex items-center justify-between px-2 font-mono text-[0.7cqw] text-slate-600">
                  <span>S1. WHITE PUMICE</span><span>79 AD (Aug 24)</span>
                </div>
                <div className="h-[2cqh] bg-neutral-300/80 rounded border border-[#2d2722]/10 flex items-center justify-between px-2 font-mono text-[0.7cqw] text-slate-600">
                  <span>S2. GREY PUMICE</span><span>79 AD (Aug 25)</span>
                </div>
                <div className="h-[2cqh] bg-amber-100/50 rounded border border-[#2d2722]/10 flex items-center justify-between px-2 font-mono text-[0.7cqw] text-slate-600">
                  <span>S3. ROMAN SOIL BASE</span><span>Pre-79 AD</span>
                </div>
              </div>
            </div>

            {/* Bento Block 2: Artifact Stats */}
            <div className={`border border-[#2d2722]/20 bg-white p-[1.2cqw] rounded-xl min-h-[16cqh] flex flex-col justify-between transition-all duration-500 ${beat >= 1 ? "opacity-100" : "opacity-25"}`}>
              <span className="font-serif text-[0.85cqw] text-[#2d2722] font-black block">{language === "zh" ? "探沟出土陶器统计" : "SHERDS REGISTERED"}</span>
              <div className="text-[2.2cqw] font-black text-amber-800 font-mono leading-none my-1">
                242<span className="text-[1cqw] font-normal font-sans opacity-70">pcs</span>
              </div>
              <span className="text-[0.8cqw] text-slate-500 font-mono block">100% Chrono-Warped</span>
            </div>

            {/* Bento Block 3: Verification Certificate */}
            <div className={`col-span-3 border border-red-700/20 bg-red-50 p-[1cqw] rounded-xl flex items-center justify-between transition-all duration-500 ${beat >= 2 ? "opacity-100 bg-red-100/10" : "opacity-25"}`}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-700 animate-pulse" />
                <span className="font-serif text-[0.9cqw] text-red-800 font-black">
                  {language === "zh" ? "✓ 庞贝考古局地层断代验证大章已盖" : "✓ VERMILION CURATORIAL REGISTRATION ARCHIVE SEALED"}
                </span>
              </div>
              <span className="font-mono text-[0.8cqw] text-slate-500">SEAL: ARCH.POMP.79</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`w-full h-full flex flex-col justify-between p-[5cqw] relative ${meta.colors.bg} ${meta.colors.ink} overflow-hidden select-none`}>
      {/* Top Slide Meta Header */}
      <div className="w-full flex justify-between items-start border-b border-[#2d2722]/15 pb-[2cqh] z-10 shrink-0">
        <div className="flex flex-col gap-0.5">
          <span className="font-serif text-[1.1cqw] tracking-wider uppercase text-amber-800 font-black">
            {meta.theme}
          </span>
          <span className="text-[1cqw] text-slate-500 font-mono tracking-tight uppercase">
            {meta.name} • {currentScene.title}
          </span>
        </div>
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-[#2d2722]/15 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
          <span className="font-mono text-[0.9cqw] text-amber-900 font-bold uppercase">{meta.tier}-TIER HAND-DRAWN</span>
        </div>
      </div>

      {/* Central Split Layout Panel */}
      <div className="flex-1 w-full grid grid-cols-12 gap-[4cqw] items-center my-[3cqh] z-10 overflow-hidden">
        {/* Left Column: Semantic Copy Content Block */}
        <div className="col-span-6 flex flex-col gap-[2cqh] text-left pr-[2cqw] justify-center min-h-[35cqh]">
          <h1 className="text-[3.8cqw] leading-[1.1] font-black tracking-tight font-serif text-[#2d2722] animate-slide-right" key={`title-${scene}-${beat}`}>
            {currentBeat.title}
          </h1>
          <p className="text-[1.5cqw] leading-[1.5] text-slate-700 font-sans mt-[1cqh] animate-crossfade" key={`body-${scene}-${beat}`}>
            {currentBeat.body}
          </p>
        </div>

        {/* Right Column: Creative Visual Vector Canvas */}
        <div className="col-span-6 flex items-center justify-center min-h-[40cqh]">
          {renderVisual()}
        </div>
      </div>

      {/* Bottom Technical Progress Ledger Bar */}
      <div className="w-full flex justify-between items-center border-t border-[#2d2722]/15 pt-[2cqh] z-10 shrink-0">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.95cqw] text-slate-500 font-bold uppercase">{language === "zh" ? "实时操作:" : "BEAT ACTION:"}</span>
          <span className="font-mono text-[1cqw] bg-amber-50 text-amber-800 border border-amber-900/20 px-3 py-1 rounded-full font-black animate-pulse" key={`action-${scene}-${beat}`}>
            {currentBeat.action}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[0.9cqw] text-slate-500 font-bold uppercase">
            {language === "zh" ? `场景 ${scene} / 5` : `SCENE ${scene} / 5`}
          </span>
        </div>
      </div>
    </div>
  );
}
