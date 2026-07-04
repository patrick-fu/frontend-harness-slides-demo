import React from "react";

export const getMetadata = (lang) => ({
  id: "22",
  tier: "C",
  name: lang === "zh" ? "古腾堡活字印刷机操作规程" : "Gutenberg Press Manual",
  theme: lang === "zh" ? "金属活字与机械印刷技艺" : "Gutenberg Typographic letterpress Art",
  densityLabel: lang === "zh" ? "活字印刷" : "Letterpress Manual Ledger",
  colors: { bg: "bg-[#f4ebd7]", ink: "text-[#1c1813]", panel: "border-[#cdab83]" },
  typography: { header: "font-serif", body: "font-serif" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "活字铸造与排版原理" : "The Art of Typographic Metal",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "调试手控铸模" : "Initialize Type Mold", 
          title: lang === "zh" ? "金属合金字模铸造" : "Typecasting Metal Alloy System", 
          body: lang === "zh" ? "“铅、锡、锑三金属熔合，方能铸出缩胀适度、字形锋利、永不碎裂之活字。”古腾堡于美因茨首创手控字模，构筑了现代出版业的物理基石。" : "“Melting lead, tin, and antimony yields sharp, uniform, unbreakable metal types.” Gutenberg's Mainz workshop invented hand-held typecasting, establishing the foundation of publishing." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "调配油性黑墨" : "Formulate Oil Ink", 
          title: lang === "zh" ? "亚麻仁油与灯黑墨汁" : "Oil-Based Ink & Viscosity", 
          body: lang === "zh" ? "传统水性墨在金属表面极易流淌流挂。古腾堡创新调配亚麻仁油与松烟灯黑，使墨汁粘稠均匀，强力咬附于金属字模之上。" : "Traditional water-based inks ran off metal types. Gutenberg formulated a viscous oil-based ink using boiled linseed oil and lampblack lampblack, adhering perfectly to metal stamps." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "核准螺旋压力" : "Calibrate Press Screw", 
          title: lang === "zh" ? "葡萄压榨螺旋力学改造" : "The Mechanical Wooden Press", 
          body: lang === "zh" ? "将酿酒之葡萄螺旋压榨机改造为印刷机杠杆。通过旋转木制主螺杆（Wooden Screw），将数吨均匀压力垂直投射至柔韧的亚麻棉纸。" : "Adapting the wooden wine screw press for typography. Revolving the oak screw projected tons of uniform perpendicular force onto damp cotton-rag paper sheets." 
        }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "配方双核：活字合金与油墨" : "Two Core Formulations: Alloy & Ink",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "对齐合金比例" : "Verify Alloy Ratios", 
          title: lang === "zh" ? "铅锡锑三元合金铸字比例" : "The Tri-Metal Type Alloy", 
          body: lang === "zh" ? "铅提供了柔软的延展性，锡降低熔点对齐流动边界，而锑在冷却时膨胀，完美咬合字模刻槽的每一处微观阴影。" : "Lead supplies soft malleability; tin lowers the melting point for smooth flow; and antimony expands on cooling to lock into every micro-cavity of the mold." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "核准油墨粘度" : "Calibrate Viscosity", 
          title: lang === "zh" ? "熟亚麻油粘稠油墨配比" : "Linseed Oil & Lampblack Blends", 
          body: lang === "zh" ? "高粘度熟油在金属上形成均匀墨膜，保证印字边缘极为锋利（No bleeding）。棉麻纸吸水饱满后，能长久锁住油脂，字迹百年不褪。" : "Thick boiled oil spreads evenly on metal, preventing bleeding. Damp cotton paper locks the oily pigment, preserving jet-black text for centuries." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "校验压痕深浅" : "Check Ink Impression", 
          title: lang === "zh" ? "金属重压痕（Impression）深度" : "The Letterpress Impression", 
          body: lang === "zh" ? "重力挤压后，字模陷入纸层形成轻微凹坑，光影之下，凹凸有致，字迹呈现出雕刻般之立体厚重质感。" : "Under tons of force, metal letters pressed into paper fibers, leaving micro-debentures that caught light, yielding a sculpted three-dimensional elegance." 
        }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "印刷工坊三大工艺流程" : "Three Stages of Workshop Printing",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "排定拣字盘" : "Set Compose Tray", 
          title: lang === "zh" ? "首阶段：拣字排版与行间对齐" : "Stage I: Type Composing in the Stick", 
          body: lang === "zh" ? "拣字工从铅盘中捡出字母镜模（Reverse types），排入拣字手盘（Composing stick）。用薄铅条充填空隙，确保每一行完美对齐。" : "Compositors pick reverse letters from trays and place them in the stick. Thin lead spacers are inserted to ensure perfect justification of columns." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "皮革球沾涂" : "Ink with Leather Balls", 
          title: lang === "zh" ? "二阶段：狗皮墨球双手交替涂墨" : "Stage II: Inking with Leather Balls", 
          body: lang === "zh" ? "使用狗皮制成的球状墨捶（Ink Balls），均匀沾取亚麻油黑墨，以双手交替捶击铜版上的金属排字模具，覆上极薄之墨膜。" : "Using spherical leather ink balls filled with horsehair, workers dab boiled ink, repeatedly patting the metal form to apply an ultra-thin black film." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "搬动螺旋杠" : "Lever Screw Press", 
          title: lang === "zh" ? "三阶段：旋转螺旋杠杆落压印纸" : "Stage III: Rotating the Press Screw Lever", 
          body: lang === "zh" ? "将浸湿的棉麻纸平铺于定位垫板（Tympan），折叠扣紧（Frisket），推入铅字盘下。旋转压杆落锤，重压之下，墨迹应声入纸。" : "Wet cotton-linen paper is laid on the tympan, folded under the frisket, and slid under the platen. A hard pull of the lever transfers the ink." 
        }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "印刷四大核心常数评估" : "Four Core Strata of Typographic Spec",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "核定铸铅温度" : "Check Melting Points", 
          title: lang === "zh" ? "铅锡锑合金熔点（摄氏度）控制" : "Alloy Casting Temperature Bounds", 
          body: lang === "zh" ? "字模铸型理想熔点为摄氏280度。若温度过高，极易烧损手控铜模；若过低，金属凝固提前，造成字母笔画缺失。" : "The alloy melts perfectly at 280°C. Excessive heat burns the copper matrices; cooler melts freeze prematurely, yielding incomplete letter strokes." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "调定纸张润度" : "Audit Paper Dampness", 
          title: lang === "zh" ? "棉麻纸纤维吸水饱和度控制" : "Cotton-Rag Paper Dampness Margin", 
          body: lang === "zh" ? "纸张须提前24小时入池浸水、用木板重压滤干，保持15%之含水量，使纤维柔韧，才能在极高压力下吸足油迹。" : "Paper sheets must be soaked for 24 hours and pressed to a uniform 15% dampness, relaxing fibers to absorb the heavy ink without tearing." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "设定螺纹扭力" : "Configure Screw Torque", 
          title: lang === "zh" ? "主轴木质螺旋副摩擦与扭力" : "Oak Screw Tension & Compression Limits", 
          body: lang === "zh" ? "主螺旋轴须定期涂抹猪油润滑。旋转压杆在120度行程内产生高达4吨之重力， platen 压板平面度偏差须小于千分之一寸。" : "The main oak screw is lubricated with lard. A 120-degree sweep of the bar generates 4 tons of pressure, requiring absolute platen flatness." 
        }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "美因茨工坊印刷总册" : "Mainz Typographical Workshop Catalog",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "盘点字重库存" : "Verify Font Weight Inventory", 
          title: lang === "zh" ? "金属活字大黑体字母库存常数" : "Blackletter Type Font Inventory Matrix", 
          body: lang === "zh" ? "汇总工坊常用之哥特大黑体（Textura）大小写字母、标点符号及合字模具库存。在印制四十二行圣经时，大写及连字模库必须保障冗余。" : "Auditing Mainz workshop Textura font stock (uppercase, lowercase, ligatures). Printing 42-line Bible pages requires massive type redundancy." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "盖上古腾堡工坊章" : "Stamp Gutenberg Seal", 
          title: lang === "zh" ? "完工圣经大册呈大教堂章呈" : "Completed Bible Certificate to Cathedral", 
          body: lang === "zh" ? "古腾堡亲自核验印成之四十二行圣经大册，于完工签呈盖上美因茨工坊‘铅字金属双盾章’（Mainz Printers Seal），标志着活字革命最终告捷。" : "Gutenberg inspected the 42-Line Bible folios, applying the Mainz Printers' Dual Shield Seal to confirm completion, declaring victory of the typographic revolution." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "发给排版工赏赐" : "Disburse Printer Bounties", 
          title: lang === "zh" ? "排版及拣字工人岁末赏赐签发" : "Printer and Compositor Wage Disbursals", 
          body: lang === "zh" ? "为辛劳之排字、刷墨、拉机将士签发十万美因茨先令年终补贴，奠定了机械印刷工会制度之萌芽。" : "Issuing yearend bonuses of 10,000 Mainz shillings to compositor and press crews, sowing early seeds of letterpress print guilds." 
        }
      ]
    }
  ]
});

export default function Style22({ scene, beat, language, isThumbnail }) {
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
      <div className="relative w-full h-full flex items-center justify-center border border-[#cdab83] bg-[#f4ebd7] rounded-[0.5cqw] overflow-hidden p-[1cqw] shadow-inner">
        {/* Pressed handmade paper fibers */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] grid grid-cols-12 grid-rows-12 h-full w-full" style={{
          backgroundImage: "linear-gradient(#1c1813 1px, transparent 1px)",
          backgroundSize: "100% 2.8cqh"
        }} />

        {/* Thick ink border frames */}
        <div className="absolute inset-[0.8cqw] border border-[#b29272] pointer-events-none" />
        <div className="absolute left-[3cqw] top-0 bottom-0 w-[1px] bg-[#1c1813] opacity-25 pointer-events-none" />

        {scene === 1 && (
          <div className="relative flex flex-col items-center justify-center w-full h-full text-center p-[1.5cqw]">
            {/* Gutenberg Metal Type Reversed Letter Stamp SVG */}
            <svg viewBox="0 0 120 120" className="w-[12cqw] h-[12cqw] text-[#221c17] opacity-90">
              <rect x="20" y="20" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1.2" />
              {/* Reversed Textura Blackletter 'G' or 'B' */}
              <path d="M 80,35 H 45 Q 35,35 35,50 L 35,70 Q 35,85 45,85 H 80 C 85,85 85,75 80,75 H 50 L 50,45 H 80 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <text x="65" y="65" fontSize="14" textAnchor="middle" fontWeight="bold" fontFamily="serif" fill="currentColor">G</text>
              <line x1="35" y1="60" x2="85" y2="60" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 2" />
              {/* Type Body details */}
              <text x="60" y="14" fontSize="4.8" textAnchor="middle" fontWeight="bold" className="font-serif italic text-[#8c6742]">Reverse Metal Type (Inversum)</text>
              <text x="60" y="108" fontSize="4.2" textAnchor="middle" className="font-serif italic tracking-widest opacity-60">MAINZ PATRIX • FONT: TEXTURA</text>
            </svg>
            <div className={`mt-[1cqh] font-serif italic text-[#82613d] text-[1.1cqw] font-bold ${getBeatClass(1)}`}>
              Fig. I : Mirror-Imaged Textura Letter matrix, Cast in Lead-Tin-Antimony.
            </div>
          </div>
        )}

        {scene === 2 && (
          <div className="flex flex-col justify-between h-full w-full p-[1cqw]">
            <div className="border-b border-[#cdab83] pb-[0.5cqh] text-center">
              <span className="font-serif text-[1.1cqw] text-[#1c1813] font-bold tracking-widest uppercase">Typographiae Secretum (1455)</span>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-[2cqh] my-2 text-[0.9cqw]">
              {/* Alloy formula & Ink ratios */}
              <div>
                <div className="flex justify-between font-serif mb-1 font-bold">
                  <span className="text-[#8c6742]">Lead-Tin-Antimony Alloy Formula</span>
                  <span className="font-mono text-[#8c6742]">70:20:10% Ratio</span>
                </div>
                <div className="h-4 bg-[#ede2cf] rounded-sm border border-[#caa183] overflow-hidden">
                  <div className="h-full bg-[#3d3126]" style={getScaleStyle(0, "100%")} />
                </div>
              </div>
              <div>
                <div className="flex justify-between font-serif mb-1 font-bold">
                  <span className="text-[#1c1813] font-bold">Oil Viscosity Binder (Boiled Linseed Oil)</span>
                  <span className="font-mono text-[#1c1813] font-bold">120 CPS Viscous</span>
                </div>
                <div className="h-4 bg-[#ede2cf] rounded-sm border border-[#caa183] overflow-hidden">
                  <div className="h-full bg-[#1c1813]" style={getScaleStyle(1, "85%")} />
                </div>
              </div>
            </div>
            <div className={`text-center font-serif text-[0.8cqw] text-[#1c1813] font-bold italic border-t border-[#dfd3be] pt-[0.8cqh] ${getBeatClass(2)}`}>
              Result: Jet-black, non-bleeding ink margins, leaving sculpted deboss depths.
            </div>
          </div>
        )}

        {scene === 3 && (
          <div className="relative w-full h-full flex flex-col justify-between p-[1cqw]">
            <div className="flex justify-between items-center border-b border-[#cdab83] pb-[0.5cqh]">
              <span className="font-serif text-[1.1cqw] text-[#1c1813] uppercase tracking-wider font-bold">Sequentia Operandi Librorum</span>
              <span className="font-mono text-[0.8cqw] text-[#8c6742]">MAINZ • FOL. IV</span>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-[1cqh] my-[1cqh]">
              <div className={`flex items-start gap-2.5 p-[0.6cqw] bg-[#faf6ed]/70 border border-[#cdab83] rounded-sm ${getBeatClass(0)}`}>
                <span className="font-mono font-bold text-[#1c1813] text-[0.9cqw] mt-0.5">[1. Set]</span>
                <div>
                  <h4 className="font-bold text-[#1d1a15] text-[0.95cqw] leading-none mb-1">Pick and Justify in Stick</h4>
                  <p className="text-[0.8cqw] text-[#5e5142] leading-tight">Pick reverse types, sliding thin lead dividers to achieve block columns.</p>
                </div>
              </div>
              <div className={`flex items-start gap-2.5 p-[0.6cqw] bg-[#faf6ed]/70 border border-[#cdab83] rounded-sm ${getBeatClass(1)}`}>
                <span className="font-mono font-bold text-[#1c1813] text-[0.9cqw] mt-0.5">[2. Ink]</span>
                <div>
                  <h4 className="font-bold text-[#1d1a15] text-[0.95cqw] leading-none mb-1">Dab and Beat with Leather Balls</h4>
                  <p className="text-[0.8cqw] text-[#5e5142] leading-tight">Coat with high-viscosity lampblack linseed oil ink. Twice per pull.</p>
                </div>
              </div>
              <div className={`flex items-start gap-2.5 p-[0.6cqw] bg-[#faf6ed]/70 border border-[#cdab83]/40 rounded-sm ${getBeatClass(2)}`}>
                <span className="font-mono font-bold text-[#1c1813] text-[0.9cqw] mt-0.5">[3. Press]</span>
                <div>
                  <h4 className="font-bold text-[#1c1813] text-[0.95cqw] leading-none mb-1">Oak Lever Screw Pull</h4>
                  <p className="text-[0.8cqw] text-[#1c1813] leading-tight">Lever rotated 120°, forcing 4 tons of perpendicular weight to stamp fibres.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {scene === 4 && (
          <div className="grid grid-cols-2 grid-rows-2 gap-[1cqw] w-full h-full p-[0.5cqw]">
            <div className="border border-[#cdab83] bg-[#faf6ee] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#1c1813] border-b border-[#cdab83] pb-[0.2cqh]">Sector I: Alloy Melt Temp</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Ideal Temperature:</span><span className="text-[#1c1813] font-bold">280°C</span></div>
                <div className="flex justify-between"><span>Matrix Burn Margin:</span><span className="text-red-700">Safety Limit</span></div>
                <div className="flex justify-between"><span>Casting Solid Rate:</span><span className="text-emerald-700 font-bold">100% OK</span></div>
              </div>
            </div>
            <div className="border border-[#cdab83] bg-[#faf6ee] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#1c1813] border-b border-[#cdab83] pb-[0.2cqh]">Sector II: Paper Dampness</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Damp Moisture:</span><span className="text-emerald-700 font-bold">15% Margin</span></div>
                <div className="flex justify-between"><span>Soaking Hours:</span><span className="text-emerald-700 font-bold">24 Hours</span></div>
                <div className="flex justify-between"><span>Swell Flatness:</span><span>Audited</span></div>
              </div>
            </div>
            <div className="border border-[#cdab83] bg-[#faf6ee] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#1c1813] border-b border-[#cdab83] pb-[0.2cqh]">Sector III: Screw Tension</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Oak Lever Sweep:</span><span>120 Degrees</span></div>
                <div className="flex justify-between"><span>Platen Force Limit:</span><span className="text-emerald-700 font-bold">4.2 Tons</span></div>
                <div className="flex justify-between"><span>Lubrication Index:</span><span className="text-emerald-700 font-bold">Lard OK</span></div>
              </div>
            </div>
            <div className="border border-[#cdab83] bg-[#faf6ee] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#1c1813] border-b border-[#cdab83] pb-[0.2cqh]">Sector IV: Matrix Justify</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Justification Lead:</span><span>0.12 in</span></div>
                <div className="flex justify-between"><span>Letter Spacing:</span><span>Uniform</span></div>
                <div className="flex justify-between"><span>Parallel Flatness:</span><span className="text-emerald-700 font-bold">99.99% OK</span></div>
              </div>
            </div>
          </div>
        )}

        {scene === 5 && (
          <div className="relative w-full h-full flex flex-col justify-between p-[0.8cqw] font-serif text-[#1c1813]">
            <div className="text-center font-bold text-[1cqw] uppercase tracking-widest border-b-2 border-[#1c1813] pb-[0.2cqh] mb-[0.5cqh] text-[#1c1813]">
              Gutenberg Mainz Workshop Type Catalog (1455)
            </div>
            <div className="flex-1 flex flex-col justify-center my-[0.2cqw]">
              <table className="w-full text-left text-[0.75cqw] border-collapse font-serif">
                <thead>
                  <tr className="border-b border-[#1c1813]/40 font-bold text-[#1c1813]">
                    <th className="py-1">Font Character Class</th>
                    <th className="py-1">Mold Material Type</th>
                    <th className="py-1 text-right">Inventory Count</th>
                    <th className="py-1 text-right">Impression Depth</th>
                    <th className="py-1 text-right">viscosity CPS</th>
                  </tr>
                </thead>
                <tbody className="text-[#3c3126] font-mono text-[0.72cqw]">
                  <tr className={`border-b border-[#cdab83]/40 ${getBeatClass(0)}`}>
                    <td className="py-1 font-serif font-bold italic">Uppercase Letters (Majusculae)</td>
                    <td className="py-1">Lead-Tin-Antimony</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">14,200 Matrices</td>
                    <td className="py-1 text-right">0.05 mm</td>
                    <td className="py-1 text-right">120 cps</td>
                  </tr>
                  <tr className={`border-b border-[#cdab83]/40 ${getBeatClass(0)}`}>
                    <td className="py-1 font-serif font-bold italic">Lowercase Letters (Minusculae)</td>
                    <td className="py-1">Lead-Tin-Antimony</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">42,000 Matrices</td>
                    <td className="py-1 text-right">0.05 mm</td>
                    <td className="py-1 text-right">120 cps</td>
                  </tr>
                  <tr className={`border-b border-[#cdab83]/40 ${getBeatClass(1)}`}>
                    <td className="py-1 font-serif font-bold italic text-[#1c1813]">Textura Ligatures (合字)</td>
                    <td className="py-1">Hand-filed copper</td>
                    <td className="py-1 text-right font-bold text-[#1c1813]">8,500 Matrices</td>
                    <td className="py-1 text-right font-bold text-[#1c1813]">0.08 mm</td>
                    <td className="py-1 text-right">140 cps</td>
                  </tr>
                  <tr className={`border-b border-[#cdab83]/40 ${getBeatClass(1)}`}>
                    <td className="py-1 font-serif font-bold italic">Punctuations & Spacers</td>
                    <td className="py-1">Pure soft lead</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">12,000 Spacers</td>
                    <td className="py-1 text-right">No imprint</td>
                    <td className="py-1 text-right">No Ink</td>
                  </tr>
                  <tr className={`${getBeatClass(2)}`}>
                    <td className="py-1 font-serif font-bold italic">Initial Ornaments (Capital)</td>
                    <td className="py-1">Woodcut blocks</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">450 Blocks</td>
                    <td className="py-1 text-right">0.12 mm</td>
                    <td className="py-1 text-right">Red oil ink</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="border-t border-[#cdab83] pt-1 text-[0.7cqw] text-[#8c6742] italic text-center font-serif">
              Mainz Folio: Forty-Two Line Holy Bible production audit sheet, Gutenberg Press.
            </div>
          </div>
        )}

        {/* Traditional Mainz Printers' Dual Shield Seal (Applied on Beat 1 for Scene 5) */}
        {scene === 5 && (
          <div className={`absolute bottom-[1.8cqw] right-[1.8cqw] w-[5cqw] h-[5cqw] transition-all duration-1000 ${beat >= 1 ? "opacity-85 scale-100 rotate-[-8deg]" : "opacity-15 scale-95 rotate-0"} pointer-events-none select-none text-[#1c1813] drop-shadow-[1px_2px_4px_rgba(0,0,0,0.15)]`}>
            <svg viewBox="0 0 100 100" className="w-full h-full text-current">
              <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="39" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 2" />
              {/* Dual Shields */}
              <g transform="translate(15 20) scale(0.7)">
                {/* Left Shield */}
                <path d="M 15,10 H 35 L 35,35 Q 35,55 15,65 Q -5,55 -5,35 L -5,10 Z" fill="none" stroke="currentColor" strokeWidth="3" />
                <line x1="15" y1="10" x2="15" y2="65" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="25" cy="25" r="3" fill="currentColor" />
                <circle cx="5" cy="25" r="3" fill="currentColor" />
              </g>
              <g transform="translate(45 28) scale(0.7) rotate(15)">
                {/* Right Shield */}
                <path d="M 15,10 H 35 L 35,35 Q 35,55 15,65 Q -5,55 -5,35 L -5,10 Z" fill="none" stroke="currentColor" strokeWidth="3" />
                <line x1="15" y1="10" x2="15" y2="65" stroke="currentColor" strokeWidth="1.5" />
                <path d="M 5,20 L 25,45 M 25,20 L 5,45" stroke="currentColor" strokeWidth="3" />
              </g>
              <text x="50" y="86" fontSize="5.5" textAnchor="middle" fontWeight="black" fontFamily="monospace" letterSpacing="0.5">MAINZ 1455</text>
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
          <span className="font-sans text-[1.2cqw] font-bold tracking-wider uppercase opacity-65 text-[#8c6742] border-b border-[#cdab83] pb-[0.5cqh] inline-block">
            {meta.theme}
          </span>
          <h1 className="text-[3.2cqw] leading-[1.1] font-black tracking-tight font-serif mt-[1cqh] text-[#1c1813]">
            {currentBeat.title}
          </h1>
          <p className="text-[1.3cqw] leading-[1.4] opacity-95 font-serif mt-[1.5cqh] text-[#3c3126]">
            {currentBeat.body}
          </p>
        </div>

        {/* Marginal Editorial Footnote */}
        <div className="flex flex-col gap-[0.5cqh] mt-[2cqh] border-t border-[#cdab83] pt-[1cqh]">
          <div className="flex justify-between text-[0.8cqw] font-mono text-[#8c6742]">
            <span>WORKSHOP: MEISTER GUTENBERG</span>
            <span>CHRONO: AD 1455 IN MAINZ</span>
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
