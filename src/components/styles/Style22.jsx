import React, { useState, useEffect } from "react";

// Specimen metadata registry accessor matching SlideRenderer conventions
export const getMetadata = (lang) => {
  const isZh = lang === "zh";
  return {
    id: "22",
    tier: "C",
    name: isZh ? "古腾堡活字印刷机操作规程" : "Gutenberg Press Manual",
    theme: isZh ? "金属活字与机械印刷技艺" : "Gutenberg Typographic letterpress Art",
    densityLabel: isZh ? "活字印刷" : "Letterpress Manual Ledger",
    colors: { bg: "bg-[#f7f4ea]", ink: "text-[#21160a]", panel: "border-[#caa183]" },
    typography: { header: "font-serif", body: "font-mono" },
    scenes: [
      {
        id: 1,
        title: isZh ? "活字铸造与排版原理" : "The Art of Typographic Metal",
        beats: [
          { 
            id: 1, 
            action: isZh ? "调试手控铸模" : "Initialize Type Mold", 
            title: isZh ? "金属合金字模铸造" : "Typecasting Metal Alloy System", 
            body: isZh ? "“铅、锡、锑三金属熔合，方能铸出缩胀适度、字形锋利、永不碎裂之活字。”古腾堡于美因茨首创手控字模，构筑了现代出版业的物理基石。" : "“Melting lead, tin, and antimony yields sharp, uniform, unbreakable metal types.” Gutenberg's Mainz workshop invented hand-held typecasting, establishing the foundation of publishing." 
          },
          { 
            id: 2, 
            action: isZh ? "调配油性黑墨" : "Formulate Oil Ink", 
            title: isZh ? "亚麻仁油与灯黑墨汁" : "Oil-Based Ink & Viscosity", 
            body: isZh ? "传统水性墨在金属表面极易流淌流挂。古腾堡创新调配亚麻仁油与松烟灯黑，使墨汁粘稠均匀，强力咬附于金属字模之上。" : "Traditional water-based inks ran off metal types. Gutenberg formulated a viscous oil-based ink using boiled linseed oil and lampblack lampblack, adhering perfectly to metal stamps." 
          },
          { 
            id: 3, 
            action: isZh ? "核准螺旋压力" : "Calibrate Press Screw", 
            title: isZh ? "葡萄压榨螺旋力学改造" : "The Mechanical Wooden Press", 
            body: isZh ? "将酿酒之葡萄螺旋压榨机改造为印刷机杠杆。通过旋转木制主螺杆（Wooden Screw），将数吨均匀压力垂直投射至柔韧的亚麻棉纸。" : "Adapting the wooden wine screw press for typography. Revolving the oak screw projected tons of uniform perpendicular force onto damp cotton-rag paper sheets." 
          }
        ]
      },
      {
        id: 2,
        title: isZh ? "配方双核：活字合金与油墨" : "Two Core Formulations: Alloy & Ink",
        beats: [
          { 
            id: 1, 
            action: isZh ? "对齐合金比例" : "Verify Alloy Ratios", 
            title: isZh ? "铅锡锑三元合金铸字比例" : "The Tri-Metal Type Alloy", 
            body: isZh ? "铅提供了柔软的延展性，锡降低熔点对齐流动边界，而锑在冷却时膨胀，完美咬合字模刻槽的每一处微观阴影。" : "Lead supplies soft malleability; tin lowers the melting point for smooth flow; and antimony expands on cooling to lock into every micro-cavity of the mold." 
          },
          { 
            id: 2, 
            action: isZh ? "核准油墨粘度" : "Calibrate Viscosity", 
            title: isZh ? "熟亚麻油粘稠油墨配比" : "Linseed Oil & Lampblack Blends", 
            body: isZh ? "高粘度熟油在金属上形成均匀墨膜，保证印字边缘极为锋利（No bleeding）。棉麻纸吸水饱满后，能长久锁住油脂，字迹百年不褪。" : "Thick boiled oil spreads evenly on metal, preventing bleeding. Damp cotton paper locks the oily pigment, preserving jet-black text for centuries." 
          },
          { 
            id: 3, 
            action: isZh ? "校验压痕深浅" : "Check Ink Impression", 
            title: isZh ? "金属重压痕（Impression）深度" : "The Letterpress Impression", 
            body: isZh ? "重力挤压后，字模陷入纸层形成轻微凹坑，光影之下，凹凸有致，字迹呈现出雕刻般之立体厚重质感。" : "Under tons of force, metal letters pressed into paper fibers, leaving micro-debentures that caught light, yielding a sculpted three-dimensional elegance." 
          }
        ]
      },
      {
        id: 3,
        title: isZh ? "印刷工坊三大工艺流程" : "Three Stages of Workshop Printing",
        beats: [
          { 
            id: 1, 
            action: isZh ? "排定拣字盘" : "Set Compose Tray", 
            title: isZh ? "首阶段：拣字排版与行间对齐" : "Stage I: Type Composing in the Stick", 
            body: isZh ? "拣字工从铅盘中捡出字母镜模（Reverse types），排入拣字手盘（Composing stick）。用薄铅条充填空隙，确保每一行完美对齐。" : "Compositors pick reverse letters from trays and place them in the stick. Thin lead spacers are inserted to ensure perfect justification of columns." 
          },
          { 
            id: 2, 
            action: isZh ? "皮革球沾涂" : "Ink with Leather Balls", 
            title: isZh ? "二阶段：狗皮墨球双手交替涂墨" : "Stage II: Inking with Leather Balls", 
            body: isZh ? "使用狗皮制成的球状墨捶（Ink Balls），均匀沾取亚麻油黑墨，以双手交替捶击铜版上的金属排字模具，覆上极薄之墨膜。" : "Using spherical leather ink balls filled with horsehair, workers dab boiled ink, repeatedly patting the metal form to apply an ultra-thin black film." 
          },
          { 
            id: 3, 
            action: isZh ? "搬动螺旋杠" : "Lever Screw Press", 
            title: isZh ? "三阶段：旋转螺旋杠杆落压印纸" : "Stage III: Rotating the Press Screw Lever", 
            body: isZh ? "将浸湿的棉麻纸平铺于定位垫板（Tympan），折叠扣紧（Frisket），推入铅字盘下。旋转压杆落锤，重压之下，墨迹应声入纸。" : "Wet cotton-linen paper is laid on the tympan, folded under the frisket, and slid under the platen. A hard pull of the lever transfers the ink." 
          }
        ]
      },
      {
        id: 4,
        title: isZh ? "印刷四大核心常数评估" : "Four Core Strata of Typographic Spec",
        beats: [
          { 
            id: 1, 
            action: isZh ? "核定铸铅温度" : "Check Melting Points", 
            title: isZh ? "铅锡锑合金熔点（摄氏度）控制" : "Alloy Casting Temperature Bounds", 
            body: isZh ? "字模铸型理想熔点为摄氏280度。若温度过高，极易烧损手控铜模；若过低，金属凝固提前，造成字母笔画缺失。" : "The alloy melts perfectly at 280°C. Excessive heat burns the copper matrices; cooler melts freeze prematurely, yielding incomplete letter strokes." 
          },
          { 
            id: 2, 
            action: isZh ? "调定纸张润度" : "Audit Paper Dampness", 
            title: isZh ? "棉麻纸纤维吸水饱和度控制" : "Cotton-Rag Paper Dampness Margin", 
            body: isZh ? "纸张须提前24小时入池浸水、用木板重压滤干，保持15%之含水量，使纤维柔韧，才能在极高压力下吸足油迹。" : "Paper sheets must be soaked for 24 hours and pressed to a uniform 15% dampness, relaxing fibers to absorb the heavy ink without tearing." 
          },
          { 
            id: 3, 
            action: isZh ? "设定螺纹扭力" : "Configure Screw Torque", 
            title: isZh ? "主轴木质螺旋副摩擦与扭力" : "Oak Screw Tension & Compression Limits", 
            body: isZh ? "主螺旋轴须定期涂抹猪油润滑。旋转压杆在120度行程内产生高达4吨之重力， platen 压板平面度偏差须小于千分之一寸。" : "The main oak screw is lubricated with lard. A 120-degree sweep of the bar generates 4 tons of pressure, requiring absolute platen flatness." 
          }
        ]
      },
      {
        id: 5,
        title: isZh ? "美因茨工坊印刷总册" : "Mainz Typographical Workshop Catalog",
        beats: [
          { 
            id: 1, 
            action: isZh ? "盘点字重库存" : "Verify Font Weight Inventory", 
            title: isZh ? "金属活字大黑体字母库存常数" : "Blackletter Type Font Inventory Matrix", 
            body: isZh ? "汇总工坊常用之哥特大黑体（Textura）大小写字母、标点符号及合字模具库存。在印制四十二行圣经时，大写及连字模库必须保障冗余。" : "Auditing Mainz workshop Textura font stock (uppercase, lowercase, ligatures). Printing 42-line Bible pages requires massive type redundancy." 
          },
          { 
            id: 2, 
            action: isZh ? "盖上古腾堡工坊章" : "Stamp Gutenberg Seal", 
            title: isZh ? "完工圣经大册呈大教堂章呈" : "Completed Bible Certificate to Cathedral", 
            body: isZh ? "古腾堡亲自核验印成之四十二行圣经大册，于完工签呈盖上美因茨工坊‘铅字金属双盾章’（Mainz Printers Seal），标志着活字革命最终告捷。" : "Gutenberg inspected the 42-Line Bible folios, applying the Mainz Printers' Dual Shield Seal to confirm completion, declaring victory of the typographic revolution." 
          },
          { 
            id: 3, 
            action: isZh ? "发给排版工赏赐" : "Disburse Printer Bounties", 
            title: isZh ? "排版及拣字工人岁末赏赐签发" : "Printer and Compositor Wage Disbursals", 
            body: isZh ? "为辛劳之排字、刷墨、拉机将士签发十万美因茨先令年终补贴，奠定了机械印刷工会制度之萌芽。" : "Issuing yearend bonuses of 10,000 Mainz shillings to compositor and press crews, sowing early seeds of letterpress print guilds." 
          }
        ]
      }
    ]
  };
};

export default function Style22({ scene = 1, beat = 0, language = "en", onNavigate, isThumbnail = false }) {
  const isZh = language === "zh";
  const meta = getMetadata(language);

  // Transition Profile: Mechanical Stamp Down (Hard Splitch with heavy screen shake)
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (isThumbnail) return;
    setShake(true);
    const timer = setTimeout(() => setShake(false), 500);
    return () => clearTimeout(timer);
  }, [scene]);

  // Dynamic status evaluation helpers
  const getOpacityClass = (targetBeat) => {
    return beat >= targetBeat ? "opacity-100 filter-none transition-all duration-500" : "opacity-30 filter grayscale contrast-75 transition-all duration-500";
  };

  // Scene 1: Premise - Ultralight Title Cover
  const renderScene1 = () => {
    return (
      <div className="w-full h-full relative flex flex-col justify-between p-[3cqw] overflow-hidden select-none">
        {/* rulings and guidelines for 15th-century printed page styling */}
        <div className="absolute inset-[1.5cqw] border-[3px] border-[#21160a] pointer-events-none" />
        <div className="absolute inset-[2cqw] border border-[#caa183] pointer-events-none" />
        <div className="absolute left-[8.5cqw] top-0 bottom-0 w-[1px] bg-[#21160a]/10 pointer-events-none" />
        <div className="absolute right-[8.5cqw] top-0 bottom-0 w-[1px] bg-[#21160a]/10 pointer-events-none" />
        
        {/* Top Header */}
        <div className="text-center mt-[1cqh] z-10 flex flex-col gap-[0.5cqh]">
          <span className="font-mono text-[1cqw] tracking-[0.6cqw] text-[#bd9253] uppercase font-bold">
            Anno Domini MCDLV • In Officina Maguntiae
          </span>
          <div className="w-[12cqw] h-[1px] bg-[#caa183] mx-auto mt-[0.5cqh]" />
        </div>

        {/* Central Layout containing Title and Raised Letter Alloy Block */}
        <div className="flex-1 flex flex-col items-center justify-center gap-[2cqh] z-10 my-[1cqh]">
          <div className="text-center flex flex-col gap-[1.2cqh]">
            <h1 className="font-gothic text-[4.8cqw] text-[#21160a] leading-none tracking-wide select-none drop-shadow-[1px_1px_1px_rgba(255,255,255,0.6)]">
              Specimen Typographiae
            </h1>
            <p className="font-typewriter text-[1.2cqw] tracking-wide text-[#3c3126] font-bold">
              {isZh ? "美因茨活字合金铸造及印刷规程手盘" : "Gutenberg Metal Alloy & Letterpress Operation Ledger"}
            </p>
          </div>

          {/* Isometric Metal Type Block Vector */}
          <div className="w-[45cqw] h-[34cqh] relative flex items-center justify-center">
            <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
              <defs>
                {/* Lead-tin-antimony alloy metal gradients */}
                <linearGradient id="metal-top" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#bfcfdf" />
                  <stop offset="30%" stopColor="#a0b0c0" />
                  <stop offset="70%" stopColor="#7a8b9e" />
                  <stop offset="100%" stopColor="#556677" />
                </linearGradient>
                <linearGradient id="metal-left" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6d7d90" />
                  <stop offset="100%" stopColor="#3d4957" />
                </linearGradient>
                <linearGradient id="metal-right" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#556577" />
                  <stop offset="100%" stopColor="#25303c" />
                </linearGradient>
                {/* Ink coating gradients */}
                <radialGradient id="ink-sheen" cx="30%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#444444" />
                  <stop offset="25%" stopColor="#15120f" />
                  <stop offset="100%" stopColor="#050302" />
                </radialGradient>
              </defs>

              {/* Guide/Ruler lines pointing to type part anatomy */}
              <g className="opacity-70 font-mono text-[9px] font-bold fill-[#82613d] stroke-[#bd9253] stroke-width-[0.8] stroke-dasharray-[2,2]">
                {/* Line to Face */}
                <path d="M 90 65 L 140 100" fill="none" />
                <circle cx="140" cy="100" r="2" fill="#bd9253" />
                <text x="50" y="62" textAnchor="start" className="font-typewriter">
                  {isZh ? "字面 [Mirror Face]" : "REVERSED FACE"}
                </text>

                {/* Line to Shoulder */}
                <path d="M 310 115 L 230 115" fill="none" />
                <circle cx="230" cy="115" r="2" fill="#bd9253" />
                <text x="315" y="118" textAnchor="start" className="font-typewriter">
                  {isZh ? "字肩 [Shoulder]" : "SHOULDER"}
                </text>

                {/* Line to Groove */}
                <path d="M 290 230 L 205 210" fill="none" />
                <circle cx="205" cy="210" r="2" fill="#bd9253" />
                <text x="295" y="233" textAnchor="start" className="font-typewriter">
                  {isZh ? "字尾沟槽 [Groove]" : "ALIGNING GROOVE"}
                </text>
              </g>

              {/* 3D Isometric Lead-tin-antimony type block representation */}
              <g transform="translate(45, 10)">
                {/* Left Face */}
                <polygon points="70,120 150,160 150,250 70,210" fill="url(#metal-left)" stroke="#1c2430" strokeWidth="1" />
                {/* Right Face */}
                <polygon points="150,160 230,120 230,210 150,250" fill="url(#metal-right)" stroke="#1c2430" strokeWidth="1" />
                {/* Top Face */}
                <polygon points="150,160 230,120 150,80 70,120" fill="url(#metal-top)" stroke="#1c2430" strokeWidth="1" />

                {/* Raised Letter Matrix 'B' sitting on the flat top face - mirror-reversed */}
                <g transform="translate(150, 115) scale(1, 0.58) rotate(-30) skewX(20)">
                  {/* Extruded letter depth sides */}
                  <text 
                    x="0" y="0" 
                    className="font-gothic font-black select-none text-[#bd9253]" 
                    style={{ transform: "scaleX(-1) translate(1px, 6px)", fontSize: "56px", textAnchor: "middle", dominantBaseline: "middle" }}
                  >
                    B
                  </text>
                  <text 
                    x="0" y="0" 
                    className="font-gothic font-black select-none text-[#564228]" 
                    style={{ transform: "scaleX(-1) translate(0px, 3px)", fontSize: "56px", textAnchor: "middle", dominantBaseline: "middle" }}
                  >
                    B
                  </text>
                  
                  {/* Top inked face of raised letter */}
                  <text 
                    x="0" y="0" 
                    className="font-gothic font-black select-none transition-all duration-700" 
                    style={{ 
                      transform: "scaleX(-1)", 
                      fontSize: "56px", 
                      textAnchor: "middle", 
                      dominantBaseline: "middle" 
                    }}
                    fill={beat >= 1 ? "url(#ink-sheen)" : "#cddbe8"}
                  >
                    B
                  </text>
                </g>

                {/* Leather ink ball dabbing oil ink onto letter face on Beat 1 */}
                {beat === 1 && (
                  <g className="animate-bounce" style={{ animationDuration: "1.5s" }}>
                    <path d="M 150 15 L 150 70" stroke="#82613d" strokeWidth="3" />
                    <circle cx="150" cy="15" r="6" fill="#bd9253" />
                    <ellipse cx="150" cy="70" rx="20" ry="12" fill="#2d2218" stroke="#1c140c" strokeWidth="2" />
                    <ellipse cx="150" cy="67" rx="14" ry="7" fill="#110a05" />
                    <text x="180" y="55" className="font-typewriter font-bold text-[8px] fill-[#21160a]">
                      {isZh ? "狗皮墨球涂墨" : "Leather Ink Dabby"}
                    </text>
                  </g>
                )}

                {/* Red heavy pressure arrow markers indicating press action on Beat 2 */}
                {beat >= 2 && (
                  <g className="animate-pulse">
                    <path d="M 150 15 L 150 55" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrow)" strokeDasharray="3 3" />
                    <path d="M 150 55 L 144 47 M 150 55 L 156 47" stroke="#ef4444" strokeWidth="3" />
                    <text x="160" y="35" className="font-typewriter font-black text-[9px] fill-red-700">
                      {isZh ? "加压 4.0 TONS" : "PRESS 4.0 TONS"}
                    </text>
                  </g>
                )}
              </g>
            </svg>
          </div>

          {/* Test impression footprint directly on the underlying page under Beat 2 */}
          <div className={`mt-[1cqh] h-[5cqh] flex flex-col items-center justify-center transition-all duration-700 ${beat >= 2 ? "opacity-90 scale-100" : "opacity-0 scale-95"}`}>
            <span className="font-typewriter text-[0.9cqw] text-red-700 font-bold uppercase tracking-widest bg-red-50 px-2 py-0.5 border border-red-200 rounded-sm">
              {isZh ? "【压印试样合格 - 印痕立体深凹】" : "[Impression Test: Passed - Sculpted Deboss Depth]"}
            </span>
          </div>
        </div>

        {/* CJK/EN Bilingual Copy Inline at the bottom */}
        <div className="border-t border-[#caa183] pt-[1cqh] px-[1cqw] flex justify-between items-center z-10">
          <p className="font-serif-classic text-[1cqw] text-[#3c3126] leading-relaxed max-w-[50cqw]">
            <span className="font-black text-[#21160a] block">
              {isZh ? "铅锡锑熔合铸字 / Tri-Metal Alloy Casting" : "Tri-Metal Alloy Casting"}
            </span>
            {isZh 
              ? "古腾堡独创三元金属合金秘配，铅起延展基底，锡融流动边界，锑微膨咬合，铸出极锐锋芒之活字。" 
              : "Gutenberg's secret formula combines lead for body, tin for smooth fusion, and antimony for micro-expansion, casting razor-sharp edges."}
          </p>
          <div className="text-right font-mono text-[0.8cqw] text-[#bd9253] uppercase font-bold tracking-widest">
            {isZh ? "第一章：铸字精要" : "Section I: Metal foundry"}
          </div>
        </div>
      </div>
    );
  };

  // Scene 2: Dual - Light (Typecasting Alloy ratios vs Oil Ink viscosity)
  const renderScene2 = () => {
    return (
      <div className="w-full h-full relative flex flex-col justify-between p-[3cqw] overflow-hidden select-none">
        {/* rulings and guidelines */}
        <div className="absolute inset-[1.5cqw] border-[3px] border-[#21160a] pointer-events-none" />
        <div className="absolute inset-[2cqw] border border-[#caa183] pointer-events-none" />

        {/* Top Header */}
        <div className="border-b border-[#caa183] pb-[1cqh] flex justify-between items-end">
          <h2 className="font-gothic text-[2.2cqw] text-[#21160a] leading-none">
            {isZh ? "配方双核：活字合金与油墨粘度" : "Two Core Formulations: Alloy & Viscosity"}
          </h2>
          <span className="font-mono text-[0.8cqw] text-[#bd9253] uppercase font-bold tracking-widest">
            {isZh ? "第二章：双核配方" : "Section II: Core Formulations"}
          </span>
        </div>

        {/* Main Content Area - Overlapping Asymmetric Cards to avoid 50/50 look */}
        <div className="flex-1 flex items-center justify-center gap-[4cqw] my-[2cqh] relative px-[1cqw]">
          
          {/* Left card: Heavy metallic pewter card for alloy mix ratios */}
          <div className={`w-[36cqw] h-[48cqh] bg-gradient-to-br from-[#ebe6d5] to-[#d3caa7] border-[3px] border-[#44382c] p-[2cqw] rounded-[0.4cqw] shadow-xl relative transform transition-all duration-700 ${beat === 0 ? "scale-[1.02] -rotate-1 border-[#bd9253] ring-1 ring-[#bd9253]/20" : "scale-95 opacity-50 rotate-0"}`}>
            {/* Iron Rivets */}
            <div className="absolute top-[0.6cqw] left-[0.6cqw] w-1.5 h-1.5 rounded-full bg-[#5c4a30]" />
            <div className="absolute top-[0.6cqw] right-[0.6cqw] w-1.5 h-1.5 rounded-full bg-[#5c4a30]" />
            <div className="absolute bottom-[0.6cqw] left-[0.6cqw] w-1.5 h-1.5 rounded-full bg-[#5c4a30]" />
            <div className="absolute bottom-[0.6cqw] right-[0.6cqw] w-1.5 h-1.5 rounded-full bg-[#5c4a30]" />

            <h3 className="font-gothic text-[1.6cqw] text-[#21160a] border-b border-[#21160a]/20 pb-[0.5cqh] mb-[1.5cqh]">
              {isZh ? "铅锡锑铸造比例" : "Lead-Tin-Antimony Ratios"}
            </h3>

            {/* Alloy Percentage sliders with descriptions */}
            <div className="flex flex-col gap-[1.5cqh] font-typewriter text-[0.8cqw]">
              <div>
                <div className="flex justify-between items-center mb-0.5 text-[#21160a] font-bold">
                  <span>{isZh ? "铅 [Plumbum] • Malleable body" : "Lead [Plumbum] • Malleable body"}</span>
                  <span className="font-mono font-black text-[1cqw]">80%</span>
                </div>
                <div className="h-3 bg-[#e4ddc8] rounded-sm border border-[#99876d] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#445260] to-[#7f8e9c] transition-all duration-1000" style={{ width: "80%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-0.5 text-[#21160a] font-bold">
                  <span>{isZh ? "锑 [Stibium] • Cools & expands" : "Antimony [Stibium] • Cools & expands"}</span>
                  <span className="font-mono font-black text-[1cqw]">15%</span>
                </div>
                <div className="h-3 bg-[#e4ddc8] rounded-sm border border-[#99876d] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#887a66] to-[#bda07b] transition-all duration-1000" style={{ width: "15%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-0.5 text-[#21160a] font-bold">
                  <span>{isZh ? "锡 [Stannum] • Melting flux" : "Tin [Stannum] • Melting flux"}</span>
                  <span className="font-mono font-black text-[1cqw]">5%</span>
                </div>
                <div className="h-3 bg-[#e4ddc8] rounded-sm border border-[#99876d] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#7a9ab5] to-[#cddbe8] transition-all duration-1000" style={{ width: "5%" }} />
                </div>
              </div>
            </div>

            <p className="mt-[2cqh] font-serif-classic text-[0.85cqw] text-[#3c3126] leading-tight border-t border-[#21160a]/10 pt-[1cqh]">
              {isZh 
                ? "【铅80：锑15：锡5】之秘配，熔点恰降至280度，凝固时微膨，咬合字模极深微之沟纹影阴。" 
                : "The 80:15:5 alloy system melts at 280°C. Upon cooling, its micro-expansion secures the finest serif detail."}
            </p>
          </div>

          {/* Right card: Golden brass dial plate for ink boiling temperature and viscosity dials */}
          <div className={`w-[36cqw] h-[48cqh] bg-gradient-to-br from-[#dfcb9f] via-[#c6aa73] to-[#a38850] border-[3px] border-[#5a482b] p-[2cqw] rounded-[0.4cqw] shadow-xl relative transform transition-all duration-700 ${beat >= 1 ? "scale-[1.02] rotate-1 border-[#21160a] ring-1 ring-[#bd9253]/20" : "scale-95 opacity-40 rotate-0"}`}>
            {/* Brass Rivets */}
            <div className="absolute top-[0.6cqw] left-[0.6cqw] w-1.5 h-1.5 rounded-full bg-[#ffe699] border border-[#5a482b]" />
            <div className="absolute top-[0.6cqw] right-[0.6cqw] w-1.5 h-1.5 rounded-full bg-[#ffe699] border border-[#5a482b]" />
            <div className="absolute bottom-[0.6cqw] left-[0.6cqw] w-1.5 h-1.5 rounded-full bg-[#ffe699] border border-[#5a482b]" />
            <div className="absolute bottom-[0.6cqw] right-[0.6cqw] w-1.5 h-1.5 rounded-full bg-[#ffe699] border border-[#5a482b]" />

            <h3 className="font-gothic text-[1.6cqw] text-[#1c140c] border-b border-[#5a482b]/30 pb-[0.5cqh] mb-[1.5cqh]">
              {isZh ? "亚麻仁油墨粘度" : "Linseed Oil Viscosity"}
            </h3>

            {/* Viscosity circular dials */}
            <div className="flex justify-around items-center my-[1cqh]">
              {/* Dial 1: Temperature Dial */}
              <div className="flex flex-col items-center gap-[0.5cqh]">
                <svg viewBox="0 0 100 100" className="w-[8cqw] h-[8cqw] overflow-visible">
                  <circle cx="50" cy="50" r="40" fill="#2d2218" stroke="#ffe699" strokeWidth="2" />
                  <circle cx="50" cy="50" r="34" fill="#1c140c" />
                  {/* Dial notches */}
                  <g stroke="#ffe699" strokeWidth="1" opacity="0.6">
                    <line x1="50" y1="14" x2="50" y2="18" />
                    <line x1="50" y1="82" x2="50" y2="86" />
                    <line x1="14" y1="50" x2="18" y2="50" />
                    <line x1="82" y1="50" x2="86" y2="50" />
                  </g>
                  {/* Gauge indicator needle rotating on Beat 1 */}
                  <g transform={`rotate(${beat >= 1 ? "140" : "-90"}, 50, 50)`} className="transition-all duration-1000">
                    <line x1="50" y1="50" x2="50" y2="18" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="4" fill="#ef4444" />
                  </g>
                  <text x="50" y="70" textAnchor="middle" fill="#ffe699" className="font-mono text-[7px] font-bold">280°C</text>
                </svg>
                <span className="font-typewriter text-[0.8cqw] text-[#1c140c] font-black">{isZh ? "熬制温度" : "Boil Temp"}</span>
              </div>

              {/* Dial 2: Viscosity Dial */}
              <div className="flex flex-col items-center gap-[0.5cqh]">
                <svg viewBox="0 0 100 100" className="w-[8cqw] h-[8cqw] overflow-visible">
                  <circle cx="50" cy="50" r="40" fill="#2d2218" stroke="#ffe699" strokeWidth="2" />
                  <circle cx="50" cy="50" r="34" fill="#1c140c" />
                  <g stroke="#ffe699" strokeWidth="1" opacity="0.6">
                    <line x1="50" y1="14" x2="50" y2="18" />
                    <line x1="50" y1="82" x2="50" y2="86" />
                    <line x1="14" y1="50" x2="18" y2="50" />
                    <line x1="82" y1="50" x2="86" y2="50" />
                  </g>
                  {/* Dial needle rotating to Viscous area on Beat 1 */}
                  <g transform={`rotate(${beat >= 1 ? "120" : "-60"}, 50, 50)`} className="transition-all duration-1000">
                    <line x1="50" y1="50" x2="50" y2="20" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="4" fill="#ffd700" />
                  </g>
                  <text x="50" y="70" textAnchor="middle" fill="#ffe699" className="font-mono text-[7px] font-bold">120 CPS</text>
                </svg>
                <span className="font-typewriter text-[0.8cqw] text-[#1c140c] font-black">{isZh ? "油墨粘稠" : "Viscosity"}</span>
              </div>
            </div>

            <p className="mt-[1cqh] font-serif-classic text-[0.85cqw] text-[#1c140c] leading-tight border-t border-[#5a482b]/30 pt-[1cqh]">
              {isZh 
                ? "熟亚麻仁油与松烟灯黑之调配，粘稠油性，强力吸附于金属版。吸水棉纸承重后，字迹历经百年不晕不褪。" 
                : "Viscous boiled linseed oil bonds lampblack pigment, yielding sharp borders that sink into rag paper without bleeding."}
            </p>
          </div>
        </div>

        {/* Bilingual Summary Copy Inline at the bottom */}
        <div className="border-t border-[#caa183] pt-[1cqh] px-[1cqw] flex justify-between items-center">
          <p className="font-serif-classic text-[1cqw] text-[#3c3126] leading-relaxed max-w-[55cqw]">
            {isZh 
              ? "三金属比例决定活字物理硬度，而油墨粘稠度则对齐印迹的边缘。此双核技术之调试，构成了美因茨活字印刷的最高机密。" 
              : "Metal ratios define the character hardness; oil viscosity controls the ink limit. The fine balancing of both represents the workshop's highest secret."}
          </p>
          <div className="text-right font-mono text-[0.8cqw] text-[#bd9253] font-bold">
            {beat === 0 && (isZh ? "当前聚焦：活字合金配比" : "Focus: Casting alloy formulation")}
            {beat >= 1 && (isZh ? "当前聚焦：高粘熟油墨汁" : "Focus: Ink boiling & viscosity")}
          </div>
        </div>
      </div>
    );
  };

  // Scene 3: Process - Standard (3-Stage Operating Instructions)
  const renderScene3 = () => {
    return (
      <div className="w-full h-full relative flex flex-col justify-between p-[3cqw] overflow-hidden select-none">
        {/* rulings and guidelines */}
        <div className="absolute inset-[1.5cqw] border-[3px] border-[#21160a] pointer-events-none" />
        <div className="absolute inset-[2cqw] border border-[#caa183] pointer-events-none" />

        {/* Top Header */}
        <div className="border-b border-[#caa183] pb-[1cqh] flex justify-between items-end">
          <h2 className="font-gothic text-[2.2cqw] text-[#21160a] leading-none">
            {isZh ? "美因茨工坊三大手工印刷工艺" : "Three Stages of Workshop Printing"}
          </h2>
          <span className="font-mono text-[0.8cqw] text-[#bd9253] uppercase font-bold tracking-widest">
            {isZh ? "第三章：印刷流程" : "Section III: Manual workflow"}
          </span>
        </div>

        {/* 3 stepped manual operation cards (Process - Standard) */}
        <div className="flex-1 grid grid-cols-3 gap-[2cqw] my-[2.5cqh] items-center px-[0.5cqw]">
          
          {/* Card 1: Pick Characters (拣字排版) */}
          <div className={`h-[48cqh] bg-[#faf6ed] p-[1.5cqw] rounded-sm transition-all duration-500 relative flex flex-col justify-between ${
            beat === 0 
              ? "border-4 border-[#21160a] shadow-[0_0_15px_rgba(189,146,83,0.3)] scale-[1.02] z-10" 
              : "border border-[#caa183]/50 opacity-40 scale-95"
          }`}>
            <div>
              <div className="flex justify-between items-center border-b border-[#21160a]/10 pb-[0.5cqh] mb-[1.5cqh]">
                <span className="font-gothic text-[1.4cqw] text-[#21160a]">I. COMPOSE / 拣字</span>
                <span className="font-mono text-[0.8cqw] text-[#bd9253] font-bold">[Stage 1]</span>
              </div>
              
              {/* Graphic container */}
              <div className="h-[14cqh] border border-[#caa183]/40 bg-[#fbf9f3] flex items-center justify-center p-[1cqw] rounded-sm mb-[1.5cqh]">
                <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                  {/* Composing stick outline */}
                  <rect x="5" y="10" width="90" height="20" fill="none" stroke="#21160a" strokeWidth="1" />
                  <line x1="5" y1="20" x2="95" y2="20" stroke="#21160a" strokeWidth="0.5" strokeDasharray="1 2" />
                  {/* Letters reversed aligned */}
                  <g fill="#21160a" opacity="0.9" className="font-gothic font-bold text-[14px]">
                    <text x="15" y="24" transform="scaleX(-1) translate(-30, 0)">M</text>
                    <text x="30" y="24" transform="scaleX(-1) translate(-60, 0)">A</text>
                    <text x="45" y="24" transform="scaleX(-1) translate(-90, 0)">I</text>
                    <text x="60" y="24" transform="scaleX(-1) translate(-120, 0)">N</text>
                    <text x="75" y="24" transform="scaleX(-1) translate(-150, 0)">Z</text>
                  </g>
                </svg>
              </div>

              <p className="font-serif-classic text-[0.9cqw] text-[#3c3126] leading-snug">
                {isZh 
                  ? "拣字工从铅盘中拾取逆向字模字母，排入拣字手盘，用铅条行间充填空隙对齐列柱。" 
                  : "Compositors pick reverse lead letters from tray-racks, organizing words in the composing stick, justifying with spacers."}
              </p>
            </div>
            <div className="border-t border-[#caa183]/20 pt-[0.8cqh] text-right font-typewriter text-[0.7cqw] text-[#bd9253]">
              {isZh ? "核准行间距与对齐" : "Verify alignment & justification"}
            </div>
          </div>

          {/* Card 2: Coat Ink (皮革球涂墨) */}
          <div className={`h-[48cqh] bg-[#faf6ed] p-[1.5cqw] rounded-sm transition-all duration-500 relative flex flex-col justify-between ${
            beat === 1 
              ? "border-4 border-[#21160a] shadow-[0_0_15px_rgba(189,146,83,0.3)] scale-[1.02] z-10" 
              : "border border-[#caa183]/50 opacity-40 scale-95"
          }`}>
            <div>
              <div className="flex justify-between items-center border-b border-[#21160a]/10 pb-[0.5cqh] mb-[1.5cqh]">
                <span className="font-gothic text-[1.4cqw] text-[#21160a]">II. COAT INK / 涂墨</span>
                <span className="font-mono text-[0.8cqw] text-[#bd9253] font-bold">[Stage 2]</span>
              </div>
              
              <div className="h-[14cqh] border border-[#caa183]/40 bg-[#fbf9f3] flex items-center justify-center p-[1cqw] rounded-sm mb-[1.5cqh]">
                <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                  {/* Wood plate base */}
                  <line x1="10" y1="30" x2="90" y2="30" stroke="#21160a" strokeWidth="1.5" />
                  <rect x="25" y="22" width="50" height="8" fill="none" stroke="#21160a" strokeWidth="1" />
                  {/* Leather Ink Balls */}
                  <g className="animate-bounce" style={{ animationDuration: "1.2s" }}>
                    <circle cx="50" cy="14" r="10" fill="#2d2218" stroke="#21160a" strokeWidth="1" />
                    <path d="M 50 14 L 50 2" stroke="#21160a" strokeWidth="2.5" />
                    {/* Splash markers */}
                    <circle cx="36" cy="18" r="1.5" fill="#21160a" />
                    <circle cx="64" cy="18" r="1.5" fill="#21160a" />
                  </g>
                </svg>
              </div>

              <p className="font-serif-classic text-[0.9cqw] text-[#3c3126] leading-snug">
                {isZh 
                  ? "狗皮制墨捶双手交替捶击铜版上的活字印版，将熟亚麻黑墨极薄且均匀地敷涂于字模表面。" 
                  : "Ink-beaters use horsehair-stuffed dog-skin ink balls to dab and pat the lead matrix block to spread an ultra-thin black layer."}
              </p>
            </div>
            <div className="border-t border-[#caa183]/20 pt-[0.8cqh] text-right font-typewriter text-[0.7cqw] text-[#bd9253]">
              {isZh ? "确保墨迹不滞挂不流淌" : "Ensure uniform ink coating bounds"}
            </div>
          </div>

          {/* Card 3: Press Screw (旋转木螺旋杠) */}
          <div className={`h-[48cqh] bg-[#faf6ed] p-[1.5cqw] rounded-sm transition-all duration-500 relative flex flex-col justify-between ${
            beat === 2 
              ? "border-4 border-[#21160a] shadow-[0_0_15px_rgba(189,146,83,0.3)] scale-[1.02] z-10" 
              : "border border-[#caa183]/50 opacity-40 scale-95"
          }`}>
            <div>
              <div className="flex justify-between items-center border-b border-[#21160a]/10 pb-[0.5cqh] mb-[1.5cqh]">
                <span className="font-gothic text-[1.4cqw] text-[#21160a]">III. PRESS SCREW / 压合</span>
                <span className="font-mono text-[0.8cqw] text-[#bd9253] font-bold">[Stage 3]</span>
              </div>
              
              <div className="h-[14cqh] border border-[#caa183]/40 bg-[#fbf9f3] flex items-center justify-center p-[1cqw] rounded-sm mb-[1.5cqh]">
                <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                  {/* Screw thread representation */}
                  <rect x="42" y="2" width="16" height="22" fill="none" stroke="#21160a" strokeWidth="1" />
                  <line x1="42" y1="6" x2="58" y2="10" stroke="#21160a" strokeWidth="1.5" />
                  <line x1="42" y1="12" x2="58" y2="16" stroke="#21160a" strokeWidth="1.5" />
                  <line x1="42" y1="18" x2="58" y2="22" stroke="#21160a" strokeWidth="1.5" />
                  {/* Lever handle rotated */}
                  <line x1="50" y1="12" x2="90" y2="16" stroke="#bd9253" strokeWidth="3.5" strokeLinecap="round" />
                  <circle cx="90" cy="16" r="3" fill="#21160a" />
                  {/* Arrow arc indicating rotation */}
                  <path d="M 85 24 Q 75 32 60 32" fill="none" stroke="#ef4444" strokeWidth="1" markerEnd="url(#arrow)" />
                </svg>
              </div>

              <p className="font-serif-classic text-[0.9cqw] text-[#3c3126] leading-snug">
                {isZh 
                  ? "湿润棉麻纸平铺、折扣，推入字盘。旋转主螺旋压杆拉转120度垂直砸落，4吨均力压墨入纸。" 
                  : "Lay damp cotton-rag paper on the tympan, folding it close. Rotate oak wooden screw to cast perpendicular tons of force."}
              </p>
            </div>
            <div className="border-t border-[#caa183]/20 pt-[0.8cqh] text-right font-typewriter text-[0.7cqw] text-red-700 font-bold">
              {beat === 2 ? (isZh ? "【重压合砸下 - 震颤起效】" : "[STAMP DOWN IMPACT - EFFECTIVE]") : (isZh ? "待拉转螺旋杆" : "Awaiting screw pull lever")}
            </div>
          </div>
        </div>

        {/* Bilingual Summary Copy Inline at bottom */}
        <div className="border-t border-[#caa183] pt-[1cqh] px-[1cqw] flex justify-between items-center">
          <p className="font-serif-classic text-[1cqw] text-[#3c3126] leading-relaxed max-w-[55cqw]">
            {isZh 
              ? "拣字确保内容严整，涂墨铺平色彩厚重，落压最终完成承载。三工坊工艺有序运作，标志现代产业标准化出版的降临。" 
              : "Composing orders content; inking secures dense contrast; stamping delivers print output. The precise sequence ensures Gutenberg's bible standard."}
          </p>
          <div className="font-typewriter text-[0.8cqw] text-[#bd9253] font-bold">
            {isZh ? "主控状态：流程对齐" : "Process: Calibrated"}
          </div>
        </div>
      </div>
    );
  };

  // Scene 4: Matrix - Dense (Mainz Workshop Quality Quadrant)
  const renderScene4 = () => {
    return (
      <div className="w-full h-full relative flex flex-col justify-between p-[3cqw] overflow-hidden select-none">
        {/* rulings and guidelines */}
        <div className="absolute inset-[1.5cqw] border-[3px] border-[#21160a] pointer-events-none" />
        <div className="absolute inset-[2cqw] border border-[#caa183] pointer-events-none" />

        {/* Top Header */}
        <div className="border-b border-[#caa183] pb-[1cqh] flex justify-between items-end">
          <h2 className="font-gothic text-[2.2cqw] text-[#21160a] leading-none">
            {isZh ? "美因茨工坊印刷四大核心常数评估" : "Mainz Workshop Quality Quadrant"}
          </h2>
          <span className="font-mono text-[0.8cqw] text-[#bd9253] uppercase font-bold tracking-widest">
            {isZh ? "第四章：质量常数" : "Section IV: Quality Matrix"}
          </span>
        </div>

        {/* 2x2 Quality Matrix Quadrant */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-[2cqw] my-[2cqh] px-[0.5cqw]">
          
          {/* Quadrant 1 (Top Left): Screw Force (螺杆扭矩压力) */}
          <div className={`p-[1.5cqw] bg-[#faf6ed] rounded-sm flex justify-between gap-[1.5cqw] transition-all duration-500 relative border ${
            beat === 0 
              ? "border-4 border-[#bd9253] shadow-[0_0_15px_rgba(189,146,83,0.3)] bg-[#fffbf2] scale-[1.01]" 
              : "border-[#caa183]/50 opacity-40 scale-95"
          }`}>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span className="font-gothic text-[1.3cqw] text-[#21160a] border-b border-[#21160a]/10 pb-0.5 block mb-1">
                  Q1. SCREW FORCE / 螺旋压力
                </span>
                <p className="font-serif-classic text-[0.85cqw] text-[#3c3126] leading-snug">
                  {isZh 
                    ? "木螺旋副行程产生高达4吨重力， platen 压板平面度偏差小于千分之一寸，保证压痕均匀。" 
                    : "The Oak screw bar produces 4 tons of perpendicular weight. Platen flatness deviation < 0.02mm secures uniform margins."}
                </p>
              </div>
              <div className="font-mono text-[0.8cqw] text-[#bd9253] font-bold">
                {isZh ? "额定压力：4.2 TONS • 合格" : "FORCE LIMIT: 4.2 TONS • OK"}
              </div>
            </div>
            
            {/* SVG Visual Dial */}
            <div className="w-[8cqw] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 80 80" className="w-full h-full overflow-visible">
                <path d="M 10 50 A 40 40 0 0 1 70 50" fill="none" stroke="#21160a" strokeWidth="1.5" />
                <path d="M 10 50 A 40 40 0 0 1 55 20" fill="none" stroke="#bd9253" strokeWidth="3" />
                {/* Pointer indicator */}
                <line x1="40" y1="50" x2="52" y2="23" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="40" cy="50" r="3" fill="#21160a" />
                <text x="40" y="65" textAnchor="middle" className="font-mono text-[7px] font-bold fill-[#21160a]">FORCE</text>
              </svg>
            </div>
          </div>

          {/* Quadrant 2 (Top Right): Paper Dampness Margin (纸张纤维含水) */}
          <div className={`p-[1.5cqw] bg-[#faf6ed] rounded-sm flex justify-between gap-[1.5cqw] transition-all duration-500 relative border ${
            beat === 0 
              ? "border-4 border-[#bd9253] shadow-[0_0_15px_rgba(189,146,83,0.3)] bg-[#fffbf2] scale-[1.01]" 
              : "border-[#caa183]/50 opacity-40 scale-95"
          }`}>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span className="font-gothic text-[1.3cqw] text-[#21160a] border-b border-[#21160a]/10 pb-0.5 block mb-1">
                  Q2. MOISTURE RANGE / 纸张含水量
                </span>
                <p className="font-serif-classic text-[0.85cqw] text-[#3c3126] leading-snug">
                  {isZh 
                    ? "棉麻纤维须提前入池浸泡24小时、压滤干，保持15%含水，令纤维柔韧不破并深度吸附油迹。" 
                    : "Paper fibers must soak for 24h and be pressed to 15% moisture, making them flexible enough to lock ink without tearing."}
                </p>
              </div>
              <div className="font-mono text-[0.8cqw] text-[#bd9253] font-bold">
                {isZh ? "基准湿润：15% H2O • 合格" : "MOISTURE RATE: 15% • OPTIMAL"}
              </div>
            </div>
            
            {/* SVG Progress bar indicator */}
            <div className="w-[8cqw] flex flex-col items-center justify-center gap-1 shrink-0 font-mono text-[8px] font-bold fill-[#21160a]">
              <div className="w-full h-4 bg-[#e6dfc8] border border-[#21160a] rounded-sm overflow-hidden p-0.5">
                <div className="h-full bg-[#caa183] border border-[#21160a]/30 transition-all duration-1000" style={{ width: "75%" }} />
              </div>
              <span>WATER: 15%</span>
            </div>
          </div>

          {/* Quadrant 3 (Bottom Left): Matrix Justification (排版字间距偏差) */}
          <div className={`p-[1.5cqw] bg-[#faf6ed] rounded-sm flex justify-between gap-[1.5cqw] transition-all duration-500 relative border ${
            beat === 1 
              ? "border-4 border-[#bd9253] shadow-[0_0_15px_rgba(189,146,83,0.3)] bg-[#fffbf2] scale-[1.01]" 
              : "border-[#caa183]/50 opacity-40 scale-95"
          }`}>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span className="font-gothic text-[1.3cqw] text-[#21160a] border-b border-[#21160a]/10 pb-0.5 block mb-1">
                  Q3. ALIGN GAP / 拣字行对齐
                </span>
                <p className="font-serif-classic text-[0.85cqw] text-[#3c3126] leading-snug">
                  {isZh 
                    ? "金属字模模宽微观偏差小于0.05毫米；排版对齐必须通过薄铅条硬锁紧，消除间隙框颤。" 
                    : "Macro-width tolerances for letter matrices must remain < 0.05mm. Securely lock lead lines to prevent matrix shift."}
                </p>
              </div>
              <div className="font-mono text-[0.8cqw] text-[#bd9253] font-bold">
                {isZh ? "间隙公差：< 0.05 mm • 合格" : "TOLERANCE: < 0.05mm • OK"}
              </div>
            </div>
            
            {/* SVG Alignment crosshair */}
            <div className="w-[8cqw] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 80 80" className="w-full h-full overflow-visible">
                <circle cx="40" cy="40" r="30" fill="none" stroke="#21160a" strokeWidth="1" strokeDasharray="2 3" />
                <line x1="10" y1="40" x2="70" y2="40" stroke="#bd9253" strokeWidth="1" />
                <line x1="40" y1="10" x2="40" y2="70" stroke="#bd9253" strokeWidth="1" />
                <circle cx="40" cy="40" r="4" fill="none" stroke="#ef4444" strokeWidth="1.5" />
                <circle cx="40" cy="40" r="1" fill="#ef4444" />
                <text x="50" y="25" className="font-mono text-[6px] fill-[#ef4444] font-bold">BIAS 0.02</text>
              </svg>
            </div>
          </div>

          {/* Quadrant 4 (Bottom Right): Ink Absorption Time (油墨固着时间) */}
          <div className={`p-[1.5cqw] bg-[#faf6ed] rounded-sm flex justify-between gap-[1.5cqw] transition-all duration-500 relative border ${
            beat === 2 
              ? "border-4 border-[#bd9253] shadow-[0_0_15px_rgba(189,146,83,0.3)] bg-[#fffbf2] scale-[1.01]" 
              : "border-[#caa183]/50 opacity-40 scale-95"
          }`}>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span className="font-gothic text-[1.3cqw] text-[#21160a] border-b border-[#21160a]/10 pb-0.5 block mb-1">
                  Q4. ABSORB CHRONO / 油墨固着
                </span>
                <p className="font-serif-classic text-[0.85cqw] text-[#3c3126] leading-snug">
                  {isZh 
                    ? "油墨压入棉麻纸纤维吸干固着理想耗时45秒。油脂被牢牢咬合锁闭，从而保证字迹百年不褪。" 
                    : "Boiled oil drying and fiber curing period targets 45 seconds. Pigments locked in paper fibers survive centuries."}
                </p>
              </div>
              <div className="font-mono text-[0.8cqw] text-[#bd9253] font-bold">
                {isZh ? "吸墨耗时：45 SEC • 合格" : "CURING CHRONO: 45s • LOCKED"}
              </div>
            </div>
            
            {/* SVG Hourglass */}
            <div className="w-[8cqw] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 80 80" className="w-full h-full overflow-visible">
                {/* Hourglass structure */}
                <path d="M 25 15 L 55 15 M 25 65 L 55 65 M 30 15 L 30 25 Q 30 40 40 40 Q 50 40 50 25 L 50 15" fill="none" stroke="#21160a" strokeWidth="1.5" />
                <path d="M 30 65 L 30 55 Q 30 40 40 40 Q 50 40 50 55 L 50 65" fill="none" stroke="#21160a" strokeWidth="1.5" />
                {/* Sand flowing */}
                <ellipse cx="40" cy="58" rx="8" ry="4" fill="#bd9253" />
                <line x1="40" y1="40" x2="40" y2="58" stroke="#bd9253" strokeWidth="1" strokeDasharray="1 2" />
                <text x="40" y="74" textAnchor="middle" className="font-mono text-[6px] fill-[#21160a] font-bold">45 SEC</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Bilingual Summary Copy Inline at the bottom */}
        <div className="border-t border-[#caa183] pt-[1cqh] px-[1cqw] flex justify-between items-center">
          <p className="font-serif-classic text-[1cqw] text-[#3c3126] leading-relaxed max-w-[55cqw]">
            {isZh 
              ? "力学强度（Q1）、纤维湿度（Q2）、行对齐（Q3）与吃墨时耗（Q4）之联合评定，是美因茨工坊保证高保真印迹质量的四大常数边界。" 
              : "Pressure (Q1), dampness (Q2), alignment (Q3), and absorption time (Q4) combined boundary states yield the uniform letterpress quality."}
          </p>
          <div className="text-right font-mono text-[0.8cqw] text-[#bd9253] font-bold">
            {beat === 0 && (isZh ? "校验：螺杆重力与纸张纤维润度" : "Calibrating: Screw Torque & Paper moisture")}
            {beat === 1 && (isZh ? "校验：字母模间隙对齐偏差" : "Calibrating: Type Alignment Spacers")}
            {beat === 2 && (isZh ? "校验：纸张固油吸墨最佳耗时" : "Calibrating: Fibers Curing Periods")}
          </div>
        </div>
      </div>
    );
  };

  // Scene 5: Ledger - Extreme (Mainz Printers Guild Inventory Ledger with Wax Seal)
  const renderScene5 = () => {
    return (
      <div className="w-full h-full relative flex flex-col justify-between p-[3cqw] overflow-hidden select-none">
        {/* rulings and guidelines */}
        <div className="absolute inset-[1.5cqw] border-[3px] border-[#21160a] pointer-events-none" />
        <div className="absolute inset-[2cqw] border border-[#caa183] pointer-events-none" />

        {/* Top Header */}
        <div className="border-b border-[#21160a] pb-[1cqh] flex justify-between items-end">
          <div>
            <h2 className="font-gothic text-[2.2cqw] text-[#21160a] leading-none uppercase">
              Registrum Inventarii Officinae Maguntiae
            </h2>
            <p className="font-typewriter text-[0.8cqw] text-[#bd9253] font-bold uppercase mt-1">
              {isZh ? "美因茨活字印刷工坊账目总册" : "Gutenberg Mainz Workshop Material & Type Inventory Catalog"}
            </p>
          </div>
          <div className="text-right font-mono text-[0.8cqw] text-[#21160a] font-bold shrink-0">
            <div>Chrono: AD 1455</div>
            <div>Guild ID: DE-MAINZ-022</div>
          </div>
        </div>

        {/* Dense Text Ledger containing table - Ledger - Extreme */}
        <div className="flex-1 my-[1.5cqh] flex flex-col justify-center overflow-hidden z-10 px-[1cqw]">
          <table className="w-full text-left border-collapse border-y-2 border-[#21160a] font-typewriter text-[0.82cqw]">
            <thead>
              <tr className="border-b-2 border-[#21160a] font-serif text-[1cqw] text-[#21160a] font-black">
                <th className="py-[1cqh]">{isZh ? "物料品项 / Material" : "Material Category"}</th>
                <th className="py-[1cqh]">{isZh ? "规格描述 / Description" : "Specification & Cast"}</th>
                <th className="py-[1cqh] text-right">{isZh ? "库存盘点 / Stock" : "Inventory Count"}</th>
                <th className="py-[1cqh] text-right">{isZh ? "核验人 / Auditor" : "Verify Status"}</th>
              </tr>
            </thead>
            <tbody className="text-[#3c3126]">
              {/* Row 1 - active at beat >= 0 */}
              <tr className={`border-b border-[#caa183]/30 ${getOpacityClass(0)}`}>
                <td className="py-[0.8cqh] font-serif font-black text-[#21160a]">Textura Majusculae</td>
                <td className="py-[0.8cqh]">{isZh ? "哥特大黑体大写字母 (三元合金)" : "Gothic uppercase blackletter alloy types"}</td>
                <td className="py-[0.8cqh] text-right font-mono font-bold text-[#21160a]">14,200 Matrices</td>
                <td className="py-[0.8cqh] text-right text-emerald-800 font-bold">✔ Gutenberg</td>
              </tr>
              {/* Row 2 - active at beat >= 0 */}
              <tr className={`border-b border-[#caa183]/30 ${getOpacityClass(0)}`}>
                <td className="py-[0.8cqh] font-serif font-black text-[#21160a]">Textura Minusculae</td>
                <td className="py-[0.8cqh]">{isZh ? "哥特大黑体小写字母 (三元合金)" : "Gothic lowercase blackletter alloy types"}</td>
                <td className="py-[0.8cqh] text-right font-mono font-bold text-[#21160a]">42,000 Matrices</td>
                <td className="py-[0.8cqh] text-right text-emerald-800 font-bold">✔ Gutenberg</td>
              </tr>
              {/* Row 3 - active at beat >= 1 */}
              <tr className={`border-b border-[#caa183]/30 ${getOpacityClass(1)}`}>
                <td className="py-[0.8cqh] font-serif font-black text-[#21160a]">Double Ligatures</td>
                <td className="py-[0.8cqh]">{isZh ? "哥特双重连字模库 (高精手刻铜版)" : "Hand-filed copper ligatures for 42-line Bible"}</td>
                <td className="py-[0.8cqh] text-right font-mono font-bold text-[#21160a]">8,500 Matrices</td>
                <td className="py-[0.8cqh] text-right text-emerald-800 font-bold">✔ Gutenberg</td>
              </tr>
              {/* Row 4 - active at beat >= 1 */}
              <tr className={`border-b border-[#caa183]/30 ${getOpacityClass(1)}`}>
                <td className="py-[0.8cqh] font-serif font-black text-[#21160a]">Mainz Cotton Paper</td>
                <td className="py-[0.8cqh]">{isZh ? "美因茨专供水印棉麻纸 (120克)" : "Mainz watermarked cotton-rag paper sheets"}</td>
                <td className="py-[0.8cqh] text-right font-mono font-bold text-[#21160a]">120 Reams</td>
                <td className="py-[0.8cqh] text-right text-emerald-800 font-bold">✔ Johann Fust</td>
              </tr>
              {/* Row 5 - active at beat >= 2 */}
              <tr className={`${getOpacityClass(2)}`}>
                <td className="py-[0.8cqh] font-serif font-black text-[#21160a]">Linseed oil / Lampblack</td>
                <td className="py-[0.8cqh]">{isZh ? "熟亚麻油松烟墨汁 (高粘120CPS)" : "Boiled linseed oil ink barrels (viscous)"}</td>
                <td className="py-[0.8cqh] text-right font-mono font-bold text-[#21160a]">80 Barrels</td>
                <td className="py-[0.8cqh] text-right text-emerald-800 font-bold">✔ Johann Fust</td>
              </tr>
            </tbody>
          </table>

          {/* Signatures & Co-signings appearing on Beat 2 */}
          <div className={`mt-[2cqh] flex justify-between items-end border-t border-[#caa183]/30 pt-[1.5cqh] transition-all duration-700 ${beat >= 2 ? "opacity-100" : "opacity-0 translate-y-1 pointer-events-none"}`}>
            <div className="flex gap-[4cqw] text-[0.8cqw] font-mono text-[#5c4a30]">
              <div>
                <span className="block border-b border-[#caa183]/50 pb-0.5 mb-1 text-slate-500 uppercase">Typography Master</span>
                <span className="font-gothic text-[1.4cqw] text-[#21160a] italic font-black leading-none block">Joannes Gutenberg</span>
                <span className="text-[0.75cqw] text-[#bd9253] font-bold">美因茨工坊印刷总制</span>
              </div>
              <div>
                <span className="block border-b border-[#caa183]/50 pb-0.5 mb-1 text-slate-500 uppercase">Capital Sponsor</span>
                <span className="font-gothic text-[1.4cqw] text-[#21160a] italic font-black leading-none block">Johann Fust</span>
                <span className="text-[0.75cqw] text-[#bd9253] font-bold">美因茨合伙投资签字</span>
              </div>
            </div>
            
            <div className="text-right font-serif-classic text-[0.85cqw] text-[#82613d] italic leading-tight max-w-[25cqw]">
              {isZh ? "四十二行圣经大册承制签呈完毕，以此总册备置大教堂核备。" : "The 42-line Cathedral Bible order completes; this inventory ledger is delivered."}
            </div>
          </div>
        </div>

        {/* Large Official Mainz Printers Guild Dual-Shield Seal Stamped on Beat 2 */}
        {beat >= 2 && (
          <div className="absolute bottom-[2.5cqw] right-[3.5cqw] w-[13cqw] h-[13cqw] pointer-events-none select-none z-20 animate-wax-seal">
            <svg viewBox="0 0 100 100" className="w-full h-full text-red-700 drop-shadow-[2px_5px_8px_rgba(139,0,0,0.35)]">
              {/* Outer wax texture circle */}
              <circle cx="50" cy="50" r="44" fill="#a81a1a" stroke="#8b0000" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="39" fill="none" stroke="#ffe699" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
              
              {/* Inner details of dual-shields */}
              <g transform="translate(15, 18) scale(0.68)">
                {/* Left Shield: Gutenberg Shield */}
                <path d="M 15,10 H 35 L 35,35 Q 35,55 15,65 Q -5,55 -5,35 L -5,10 Z" fill="none" stroke="#ffe699" strokeWidth="3" />
                <line x1="15" y1="10" x2="15" y2="65" stroke="#ffe699" strokeWidth="1.5" />
                <circle cx="25" cy="25" r="3.5" fill="#ffe699" />
                <circle cx="5" cy="25" r="3.5" fill="#ffe699" />
              </g>
              <g transform="translate(46, 26) scale(0.68) rotate(16)">
                {/* Right Shield: Fust/Schoeffer Shield */}
                <path d="M 15,10 H 35 L 35,35 Q 35,55 15,65 Q -5,55 -5,35 L -5,10 Z" fill="none" stroke="#ffe699" strokeWidth="3" />
                <line x1="15" y1="10" x2="15" y2="65" stroke="#ffe699" strokeWidth="1.5" />
                <path d="M 5,20 L 25,45 M 25,20 L 5,45" stroke="#ffe699" strokeWidth="3.5" strokeLinecap="round" />
              </g>

              {/* Stamped Text */}
              <text x="50" y="87" fontSize="5.5" textAnchor="middle" fontWeight="black" fontFamily="monospace" fill="#ffe699" letterSpacing="0.4">
                MAINZ 1455
              </text>
            </svg>
          </div>
        )}

        {/* Bilingual Summary Copy Inline at the bottom */}
        <div className="border-t border-[#caa183]/50 pt-[1cqh] px-[1cqw] flex justify-between items-center z-10">
          <p className="font-serif-classic text-[1cqw] text-[#3c3126] leading-relaxed max-w-[55cqw]">
            {isZh 
              ? "物料盘存核实、活字铸版齐备、赞助款项呈结。盖上铅字金属双盾章，宣告活字手工出版战役最终告捷。" 
              : "Material stocks are verified, metal matrices are locked, sponsor sign-off confirmed. Dual shield seal validates Bible completion."}
          </p>
          <div className="text-right font-mono text-[0.8cqw] text-[#21160a] font-bold">
            {beat === 0 && (isZh ? "一阶段：物料字母分类" : "Status: Base font metrics auditing")}
            {beat === 1 && (isZh ? "二阶段：大圣经纸张配比" : "Status: Paper reams watermarking")}
            {beat >= 2 && (isZh ? "三阶段：工坊总章落定" : "Status: Certified with Mainz printers seal")}
          </div>
        </div>
      </div>
    );
  };

  const renderActiveScene = () => {
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

  // Bespoke Navigation sidebar: Type Roller Ink Press
  const renderBespokeNavigation = () => {
    if (isThumbnail || !onNavigate) return null;

    const scenesList = [
      { id: 1, letter: "A", briefZh: "字模原理", briefEn: "Specimen" },
      { id: 2, letter: "B", briefZh: "配方双核", briefEn: "Formulas" },
      { id: 3, letter: "C", briefZh: "工艺工坊", briefEn: "Workflow" },
      { id: 4, letter: "D", briefZh: "核心常数", briefEn: "Quadrants" },
      { id: 5, letter: "E", briefZh: "工坊总册", briefEn: "Inventory" },
    ];

    return (
      <div className="absolute inset-y-0 left-0 w-[11cqw] border-r border-[#caa183] bg-[#f2ebd4] flex flex-col justify-between items-center py-[4cqh] px-[1cqw] select-none z-30 pointer-events-auto shadow-[2px_0_10px_rgba(0,0,0,0.06)]">
        
        {/* Top foundry emblem representation */}
        <div className="flex flex-col items-center gap-[0.5cqh]">
          <svg viewBox="0 0 40 40" className="w-[3.5cqw] h-[3.5cqw] text-[#21160a]">
            <polygon points="20,4 36,12 36,28 20,36 4,28 4,12" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="20" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
            <text x="20" y="24" fontSize="11" textAnchor="middle" fontWeight="black" fontFamily="serif">G</text>
          </svg>
          <span className="font-mono text-[0.6cqw] text-[#bd9253] font-bold uppercase tracking-wider">{isZh ? "美因茨" : "MAINZ"}</span>
        </div>

        {/* Roller Slider Track */}
        <div className="relative w-full h-[58cqh] flex items-center justify-center my-[1cqh]">
          {/* Iron sliding rod */}
          <div className="absolute left-[3.2cqw] top-0 bottom-0 w-[0.4cqw] bg-gradient-to-r from-[#21160a] via-[#4d3f34] to-[#21160a] border border-[#1a130c]/40 rounded-full" />
          
          {/* Dynamically gliding Wooden & Leather Ink Roller Slider */}
          <div 
            className="absolute left-[1.2cqw] w-[4.5cqw] h-[5.5cqh] flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              transform: `translateY(${(scene - 1) * 11.2}cqh)`,
              zIndex: 25
            }}
          >
            {/* Ink Roller drawing */}
            <div className="relative w-full h-full flex items-center">
              {/* Left handle stick */}
              <div className="w-[1.2cqw] h-[1cqh] bg-gradient-to-b from-[#82613d] to-[#4d3f34] border border-[#21160a] rounded-l-sm" />
              {/* Roller cylinder body */}
              <div className="w-[3cqw] h-[4.2cqh] bg-gradient-to-r from-[#110c08] via-[#21160a] to-[#110c08] border border-[#bd9253] rounded-sm shadow-md relative">
                {/* Wet ink highlight */}
                <div className="absolute top-1 left-1 bottom-1 w-[0.4cqw] bg-white opacity-10 rounded-full blur-[0.5px]" />
              </div>
              {/* Right axle knob */}
              <div className="w-[0.3cqw] h-[1.8cqh] bg-[#bd9253] border border-[#21160a] rounded-sm -ml-[0.1cqw]" />
            </div>
          </div>

          {/* Stepped vertical stacked metal letters A, B, C, D, E */}
          <div className="absolute inset-0 flex flex-col justify-between items-center py-[1.2cqh]">
            {scenesList.map((item) => {
              const isActive = item.id === scene;

              return (
                <div
                  key={item.id}
                  onClick={() => onNavigate(item.id, 0)}
                  className="w-full flex items-center pl-[4cqw] cursor-pointer group pointer-events-auto"
                >
                  {/* Metal Type Block representation */}
                  <div className={`w-[3.6cqw] h-[3.6cqw] rounded-[0.25cqw] flex items-center justify-center transition-all duration-500 relative ${
                    isActive
                      ? "bg-transparent border-none shadow-none"
                      : "bg-gradient-to-br from-[#534639] via-[#2d221a] to-[#15100a] border-2 border-[#15100a] shadow-[inset_1px_1px_1px_rgba(255,255,255,0.15),1px_1.5px_3px_rgba(0,0,0,0.35)] hover:border-[#bd9253]"
                  }`}>
                    {/* Metal letter: if active, stamped in black ink normally; if unactive, mirror-reversed and pewter-colored */}
                    <span 
                      className={`font-gothic font-black transition-all duration-500 select-none ${
                        isActive
                          ? "text-[3.2cqw] text-[#21160a] transform-none animate-pulse-ink font-black"
                          : "text-[2.2cqw] text-[#cddbe8] opacity-80 group-hover:opacity-100 font-bold"
                      }`}
                      style={{
                        transform: isActive ? "none" : "scaleX(-1)",
                        textShadow: isActive ? "none" : "0.5px 0.5px 0px rgba(255,255,255,0.25)"
                      }}
                    >
                      {item.letter}
                    </span>
                  </div>

                  {/* Letter sidebar description tooltips */}
                  <div className={`ml-[0.8cqw] flex flex-col justify-center whitespace-nowrap transition-all duration-500 ${
                    isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1 pointer-events-none group-hover:opacity-75 group-hover:translate-x-0"
                  }`}>
                    <span className="font-gothic text-[0.85cqw] text-[#21160a] font-bold leading-none">
                      {isZh ? item.briefZh : item.briefEn}
                    </span>
                    <span className="font-mono text-[0.6cqw] text-[#bd9253] font-bold uppercase mt-[0.2cqh]">
                      SCENE {item.id}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footnote attribution details inside picker sidebar */}
        <div className="text-center">
          <div className="font-typewriter text-[0.65cqw] text-[#5c4a30] leading-none uppercase tracking-tighter">
            PRO PATRIA
          </div>
          <span className="font-mono text-[0.55cqw] text-slate-500 opacity-60">MAINZ GERMANY</span>
        </div>
      </div>
    );
  };

  return (
    <div 
      className={`w-full h-full bg-[#f7f4ea] relative overflow-hidden font-serif select-none flex ${
        shake ? "animate-screen-shake" : ""
      }`}
    >
      {/* Self-contained styling overrides for Google Fonts and custom typographic keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Special+Elite&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');

        .font-gothic {
          font-family: 'UnifrakturMaguntia', Georgia, serif;
        }

        .font-typewriter {
          font-family: 'Special Elite', 'Courier Prime', monospace;
        }

        .font-serif-classic {
          font-family: 'EB Garamond', Georgia, serif;
        }

        /* Rule guide line mesh mimicking historical paper textures */
        .wood-guide-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.045;
          background-image: 
            linear-gradient(rgba(33, 22, 10, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(33, 22, 10, 0.08) 1px, transparent 1px);
          background-size: 2cqw 2cqh;
          z-index: 1;
        }

        @keyframes stamp-ink {
          0% { transform: scale(1.4); filter: blur(2px); opacity: 0.3; }
          100% { transform: scale(1); filter: blur(0px); opacity: 1; }
        }

        .animate-pulse-ink {
          animation: stamp-ink 0.35s cubic-bezier(0.12, 0, 0.39, 0) forwards;
        }

        @keyframes wax-seal-stamp {
          0% { transform: scale(3.5) rotate(20deg); opacity: 0; filter: blur(4px); }
          65% { transform: scale(0.95) rotate(-12deg); opacity: 0.9; filter: blur(0.5px); }
          100% { transform: scale(1) rotate(-8deg); opacity: 1; filter: blur(0); }
        }

        .animate-wax-seal {
          animation: wax-seal-stamp 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.25) forwards;
        }
      `}</style>

      {/* rulings guide background overlay */}
      <div className="wood-guide-bg" />

      {/* Stepped left margin navigation roller */}
      {renderBespokeNavigation()}

      {/* Main Active Scene presentation area with padding to avoid picker overlay */}
      <div className={`flex-1 h-full relative z-10 ${isThumbnail || !onNavigate ? "pl-0" : "pl-[11cqw]"}`}>
        {renderActiveScene()}
      </div>

      {/* SVG arrow marker def for gauges and instructions */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
