import React from "react";
import { Sliders, Activity, Compass, Shield, Eye, Flame, Droplets, Thermometer, Layers, CheckCircle } from "lucide-react";

export const getMetadata = (lang) => ({
  id: "12",
  tier: "B",
  name: lang === "zh" ? "大红袍乌龙茶复合焙火" : "The Craft of Wuyi Rock Tea",
  theme: lang === "zh" ? "非物质文化遗产工艺研究" : "Traditional Tea-making Craft",
  densityLabel: lang === "zh" ? "焙火参数自整定" : "Artisanal Baking Control",
  colors: { bg: "bg-[#faf6ee]", ink: "text-[#3e2311]", panel: "border-[#d35400]/15", accent: "text-[#d35400]" },
  typography: { header: "font-serif", body: "font-sans" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "炭坑整备与初温微调" : "Charcoal Bed Setup & Initial Warmth",
      beats: [
        { id: 1, action: lang === "zh" ? "荔炭铺设" : "Lychee Charcoal Set", title: lang === "zh" ? "荔枝木炭整备与覆灰" : "Lychee-wood Charcoal Layering", body: lang === "zh" ? "于焙坑中深埋优质荔枝木炭，红炭无烟，均匀覆灰，调谐焙茶底温热源常数。" : "Burying smoke-free premium lychee charcoal in roasting pits, applying dust blanket to calibrate steady radiant base warmth." },
        { id: 2, action: lang === "zh" ? "初温散水" : "Dry Leaves", title: lang === "zh" ? "首温微调与表水蒸腾" : "Initial Drying Heat Adjustment", body: lang === "zh" ? "徐徐加温，驱散新鲜茶饼表面游离水分，叶肉逐渐舒展，古道茶香隐现。" : "Slowly rising the heat, dispersing free moisture on fresh leaf surfaces, relaxing veins as tea aroma softly emerges." },
        { id: 3, action: lang === "zh" ? "火温常锁" : "Stabilize Heat", title: lang === "zh" ? "焙笼底部热能相位锁定" : "Bottom Basket Thermal Phase Lock", body: lang === "zh" ? "锁定首层焙笼底部烘烤温度，确保周圈热能完全对齐，消除多源对流温差噪声。" : "Locking pre-heating temp at the bottom basket layer, ensuring perfect radial warmth alignment to cancel drift." }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "热化学除水与深层氧化" : "Thermal Dehydration & Oxidization",
      beats: [
        { id: 1, action: lang === "zh" ? "提温活化" : "Accelerate Roast", title: lang === "zh" ? "高温活化与儿茶素热裂解" : "High-Temperature Sieve Active", body: lang === "zh" ? "适度推高焙温，促进茶多酚与儿茶素深层热裂解，孕育标志性岩骨茶骨韵。" : "Rising the baking heat to accelerate cell-level polyphenol breakdown, cultivating the revered stony flavor backbone." },
        { id: 2, action: lang === "zh" ? "脱水固香" : "Evaporate Moisture", title: lang === "zh" ? "叶片结合水加速蒸腾" : "Cellular Moisture Expulsion", body: lang === "zh" ? "茶青剧烈脱水，水分自叶脉通道向表皮高速泵送并逸散，叶肉彻底成熟定型。" : "Intensive cellular water pumping out through veins, evaporating quickly as leaf matrix fully sets and matures." },
        { id: 3, action: lang === "zh" ? "两极合流" : "Oxidize Balanced", title: lang === "zh" ? "脱水速度与氧化极性对齐" : "Evaporation & Oxidization Alignment", body: lang === "zh" ? "极高保真对齐失水速度与深层酶变氧化曲线，化解酸涩苦味，转化芳香脂类物质。" : "Aligning rates of water loss and enzyme oxidization with high precision, removing bitterness and unlocking rich esters." }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "三阶焙火与足火岩韵" : "Three-Stage Baking Refinement",
      beats: [
        { id: 1, action: lang === "zh" ? "毛茶初焙" : "First Light Roast", title: lang === "zh" ? "低温初焙稳定清香" : "First Light Roast Floral Lock (100°C)", body: lang === "zh" ? "首道炭火烘焙（控制在100°C上下），脱除残水，初步锁定高雅的花果清香与鲜爽度。" : "First-pass baking (~100°C) locks in elegant floral volatility, removing raw residual water to stabilize freshness." },
        { id: 2, action: lang === "zh" ? "复火熟化" : "Medium Caramel Roast", title: lang === "zh" ? "中温复焙转化焦糖韵" : "Medium Caramel Roast (120°C)", body: lang === "zh" ? "二道炭火烘焙（攀升至120°C），热解多酚物质，催化焦糖香与果仁韵熟化，汤色渐红。" : "Second-pass baking (~120°C) pyrolyzes bitter polyphenols, building chocolate-caramel undertones as tea soup turns amber." },
        { id: 3, action: lang === "zh" ? "足火炖化" : "Heavy Signature Roast", title: lang === "zh" ? "高温足火重力炖火定格" : "Heavy Signature Roast (135°C)", body: lang === "zh" ? "终极重火炖化（高达135°C），青气散尽，岩骨花香完全固定，茶汤醇厚无比，达成大师非遗品质。" : "Terminal heavy baking (~135°C), burning away any remaining raw notes, locking the majestic rock aroma for world archives." }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "焙茶积温与多点监测" : "Thermal Influx & Moisture Telemetry",
      beats: [
        { id: 1, action: lang === "zh" ? "红外扫温" : "Scan Leaves", title: lang === "zh" ? "叶饼断面红外温度场扫描" : "Leaf Spectrograph Thermal Scan", body: lang === "zh" ? "对焙笼茶饼执行非接触式多点红外热像扫描，绘制精准的热阻分布与温度渗透曲线。" : "Running non-contact infrared thermal field imaging over the baking tray, charting heat resistance and core warmth." },
        { id: 2, action: lang === "zh" ? "多点覆灰" : "Balance Gray", title: lang === "zh" ? "多孔炭坑覆灰阻尼柔性平衡" : "Pit Gray Adaptive Balance", body: lang === "zh" ? "根据各焙笼温差逆向微调炭灰层厚度，增加热力传导阻尼，保证层叠茶青受热常数归一。" : "Adjusting charcoal dust blanket thickness to control radiant damping, ensuring identical thermal coefficients." },
        { id: 3, action: lang === "zh" ? "积温记账" : "Log Baking", title: lang === "zh" ? "焙茶物理积温大账册审计" : "Thermal Accumulation Proof Ledger", body: lang === "zh" ? "自动统计各温区累计烘烤时间与能量积温，测定茶多酚多极降解比，签发合规岩茶品质绿证。" : "Aggregating temperature log integration curves over roast duration, calculating complex phenol conversion indexes." }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "大师非遗焙茶总控台" : "Grand Master Tea Roasting Portal",
      beats: [
        { id: 1, action: lang === "zh" ? "多笼编译" : "Stream Roasting", title: lang === "zh" ? "多通道焙笼热工曲线全流编译" : "Multi-Basket Real-Time Performance", body: lang === "zh" ? "岩茶各焙笼热力、水分参数并轨编译，多通路传感器波形高速并流，实时投影大师级岩骨曲线。" : "Merging multi-basket heat and dehydration telemetry streams into high-speed channels, rendering golden curves." },
        { id: 2, action: lang === "zh" ? "多酚对位" : "Spectrum Harmonize", title: lang === "zh" ? "多酚、芳香物转化全网锁定" : "Polyphenol & Aroma Mapping Mesh", body: lang === "zh" ? "茶氨酸、儿茶素和芳香挥发指数三大物理转化轨道达成完美的百分百交叉，谐波锁定通红点亮。" : "Theanine, catechin, and aroma conversion indices reach a perfect 100% convergence, locking the final tea-making grid." },
        { id: 3, action: lang === "zh" ? "非遗起炉" : "Intangible Seal", title: lang === "zh" ? "非物质文化遗产大红袍神圣出炉" : "Artisanal Rock Tea Masterpiece Sign-off", body: lang === "zh" ? "大师起炉收火，汤面现出蛤蟆背沙点，万里大动脉顺利收官结账，神韵圆满，红灯全绿。" : "The master pulls down heat gates, revealing pristine leaf surfaces. The legendary batch passes with superb gold stars." }
      ]
    }
  ]
});

export default function Style12({ scene, beat, language, isThumbnail }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];
  const isZh = language === "zh";

  // Active indices for visuals
  const activeNodes = Array.from({ length: 5 }).map((_, i) => {
    if (scene === 1) return i === 0;
    if (scene === 2) return i <= 1;
    if (scene === 3) return i <= 2;
    if (scene === 4) return i <= 3;
    return true;
  });

  return (
    <div className={`w-full h-full flex flex-col justify-between p-[3.5cqw] relative ${meta.colors.bg} ${meta.colors.ink} select-none overflow-hidden`} key={`${scene}-${beat}`}>
      {/* Background Soft Smoke swirls (representing coal baking convection lines) */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 800 500" fill="none" stroke="currentColor">
          <path d="M 100 500 C 150 400, 200 300, 150 200 C 100 100, 300 50, 400 150 C 500 250, 600 100, 700 50" strokeWidth="2.5" strokeDasharray="5,10" className="animate-spin-slow" style={{ transformOrigin: "center" }} />
          <path d="M 0 450 C 100 350, 250 350, 350 250 C 450 150, 550 250, 800 100" strokeWidth="1.5" strokeDasharray="3,6" />
        </svg>
      </div>

      {/* Slide Header */}
      <div className="flex justify-between items-start border-b border-[#d35400]/15 pb-[2cqh] z-10">
        <div>
          <span className="font-mono text-[1.1cqw] tracking-widest uppercase opacity-60 flex items-center gap-[0.5cqw]">
            <Flame className="w-[1.2cqw] h-[1.2cqw] text-[#d35400] animate-pulse" />
            {meta.theme}
          </span>
          <h1 className="text-[3cqw] font-serif font-black tracking-tight mt-[0.5cqh]">
            {currentScene.title}
          </h1>
        </div>
        <div className="text-right font-mono">
          <div className="text-[1.2cqw] font-bold text-[#d35400]">
            {isZh ? "岩茶炭焙物理控温系统" : "Artisanal Charcoal Baking"}
          </div>
          <div className="text-[0.9cqw] opacity-50 uppercase tracking-widest mt-[0.5cqh]">
            {meta.densityLabel}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-12 gap-[2.5cqw] flex-1 my-[2.5cqh] items-stretch z-10">
        {/* Left Column: Rich copy on the craft */}
        <div className="col-span-5 flex flex-col justify-between pr-[1cqw]">
          <div className="flex flex-col gap-[1.5cqh]">
            <span className="font-mono text-[1cqw] tracking-widest uppercase text-[#d35400] font-bold flex items-center gap-[0.5cqw]">
              <span className="w-[0.8cqw] h-[0.8cqw] bg-[#d35400] rounded-full animate-ping" />
              {currentBeat.action}
            </span>
            <h2 className="text-[2.2cqw] font-serif font-black leading-tight">
              {currentBeat.title}
            </h2>
            <p className="text-[1.1cqw] leading-[1.6] opacity-80 font-sans">
              {currentBeat.body}
            </p>
          </div>

          {/* Real-time chemical / warmth stats */}
          <div className="bg-[#f3ead7] border border-[#d35400]/20 rounded-xl p-[1.5cqw] flex flex-col gap-[1.2cqh]">
            <div className="flex justify-between items-center border-b border-[#d35400]/15 pb-[0.8cqh]">
              <span className="text-[0.9cqw] font-mono font-bold tracking-wider opacity-60">
                {isZh ? "热解转化实时参数" : "BAKING PARAMETERS"}
              </span>
              <Thermometer className="w-[1.1cqw] h-[1.1cqw] text-[#d35400]" />
            </div>

            <div className="grid grid-cols-2 gap-[1cqw] text-[0.95cqw] font-mono">
              <div>
                <span className="opacity-50 text-[0.8cqw] block">{isZh ? "焙温 (Fire Temp)" : "PIT TEMP"}</span>
                <span className="font-bold text-[#d35400]">
                  {scene === 1 ? "85 °C" : scene === 2 ? "110 °C" : scene === 3 ? (beat === 0 ? "100 °C" : beat === 1 ? "120 °C" : "135 °C") : "125 °C"}
                </span>
              </div>
              <div>
                <span className="opacity-50 text-[0.8cqw] block">{isZh ? "叶片水分" : "LEAF MOISTURE"}</span>
                <span className="font-bold text-[#d35400]">
                  {scene === 1 ? "68%" : scene === 2 ? "32%" : scene === 3 ? (beat === 0 ? "18%" : beat === 1 ? "8%" : "4% (足火)") : "6%"}
                </span>
              </div>
            </div>

            {/* Total thermal index bar */}
            <div className="flex flex-col gap-[0.4cqh] mt-[0.5cqh]">
              <div className="flex justify-between text-[0.75cqw] font-mono opacity-60">
                <span>{isZh ? "多酚热转化积温指数" : "POLYPHENOL PYROLYSIS INFLUX"}</span>
                <span className="text-[#d35400] font-bold">{scene === 1 ? "15%" : scene === 2 ? "45%" : scene === 3 ? "82%" : "99.4%"}</span>
              </div>
              <div className="w-full h-[0.5cqh] bg-[#d35400]/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#d35400] rounded-full transition-all duration-1000 shadow-[0_0_8px_#d35400]"
                  style={{ width: scene === 1 ? "15%" : scene === 2 ? "45%" : scene === 3 ? "82%" : "99.4%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Metaphor (Bespoke per scene density) */}
        <div className="col-span-7 bg-[#fbf5eb] border border-[#d35400]/15 rounded-2xl p-[2cqw] flex flex-col justify-between relative overflow-hidden">
          {/* Subtle convection wave background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(211,84,0,0.15)_1px,transparent_1px)] [background-size:100%_1.5cqh]" />

          {scene === 1 && (
            // Scene 1 (Ultralight): 1 giant charcoal roasting pit dial
            <div className="flex-1 flex flex-col justify-center items-center relative">
              <div className="w-[16cqw] h-[18cqw] flex flex-col items-center justify-center p-[1.5cqw] bg-[#faf3e3] border border-[#d35400]/10 rounded-2xl relative shadow-sm">
                <span className="text-[0.75cqw] font-mono opacity-50 block uppercase text-[#3e2311] mb-[1.5cqh]">MASTER BAKING DIAL</span>
                
                {/* SVG circular gauge dial */}
                <svg className="w-[85%] h-[80%] fill-none stroke-[#3e2311]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="38" strokeWidth="1.5" strokeDasharray="3,3" className="opacity-20" />
                  {/* Heat glow ring */}
                  <circle cx="50" cy="50" r="38" stroke="#d35400" strokeWidth="2.5" strokeDasharray="240" strokeDashoffset={240 - (beat + 1) * 75} className="transition-all duration-1000 opacity-60" />
                  
                  {/* Central rotating knob line */}
                  <line 
                    x1="50" y1="50" 
                    x2={50 + 32 * Math.cos((beat * 45 - 135) * Math.PI / 180)} 
                    y2={50 + 32 * Math.sin((beat * 45 - 135) * Math.PI / 180)} 
                    stroke="#d35400" 
                    strokeWidth="3.5" 
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  <circle cx="50" cy="50" r="6" fill="#3e2311" />
                </svg>

                <span className="text-[1.3cqw] font-serif font-black text-[#d35400] mt-[1cqh] font-mono">
                  {beat === 0 ? "85 °C" : beat === 1 ? "110 °C" : "135 °C (足)"}
                </span>
              </div>

              <div className="text-center font-serif text-[1.1cqw] mt-[2cqh]">
                <p className="font-extrabold">{isZh ? "荔木埋炭，文火炖香" : "Under a gray ash blanket, lychee coals breathe slow"}</p>
                <p className="text-[0.95cqw] font-sans opacity-60 mt-[0.5cqh] font-mono">
                  {isZh ? "覆灰厚度 2.4cm · 恒温调谐中" : "Dust Thickness 2.4cm · PID Stable"}
                </p>
              </div>
            </div>
          )}

          {scene === 2 && (
            // Scene 2 (Light): Symmetrical comparison of Baking Temperature vs Leaf Moisture
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex items-center gap-[0.5cqw]">
                <Droplets className="w-[1.2cqw] h-[1.2cqw] text-[#d35400]" />
                {isZh ? "烘焙火温与叶片脱水对位图" : "BAKING RADIANCE VS MOISTURE REMOVAL CURVES"}
              </div>

              <div className="flex-1 relative flex items-center justify-center">
                <svg className="w-[90%] h-[80%] fill-none stroke-[#3e2311]" viewBox="0 0 400 150">
                  {/* Fire Temperature curve scaling UP */}
                  <path d="M 30 120 C 130 120, 180 30, 350 30" strokeWidth="2" className="opacity-15" />
                  <path d="M 30 120 C 130 120, 180 30, 350 30" strokeWidth="2.5" strokeDasharray="330" strokeDashoffset={330 - (beat + 1) * 110} className="stroke-[#d35400] transition-all duration-1000" />
                  
                  {/* Moisture Curve scaling DOWN */}
                  <path d="M 30 40 C 130 40, 180 130, 350 130" strokeWidth="2" className="opacity-15" />
                  <path d="M 30 40 C 130 40, 180 130, 350 130" strokeWidth="2.5" strokeDasharray="330" strokeDashoffset={330 - (beat + 1) * 110} className="stroke-cyan-600 transition-all duration-1000 stroke-dashed" />

                  {/* Junction Equilibrium point */}
                  <g transform="translate(195, 80)" className={beat >= 1 ? "scale-110 opacity-100" : "scale-100 opacity-20"}>
                    <circle cx="0" cy="0" r="8" fill="#d35400" />
                    <circle cx="0" cy="0" r="3" fill="#faf6ee" />
                  </g>

                  {/* Text labels */}
                  <text x="40" y="32" className="text-[7.5px] font-mono fill-current text-cyan-700" stroke="none">{isZh ? "叶片含水量 (Moisture)" : "Leaf Moisture Content (%)"}</text>
                  <text x="40" y="132" className="text-[7.5px] font-mono fill-current text-[#d35400]" stroke="none">{isZh ? "焙火辐射能 (Radiant Fire)" : "Pit Charcoal Radiant Heat (kJ)"}</text>
                  <text x="215" y="76" className="text-[8px] font-serif font-black fill-current text-[#3e2311]" stroke="none">{isZh ? "儿茶素熟化黄金沸点" : "Polyphenol Caramelizing Threshold"}</text>
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-[1cqw] border-t border-[#d35400]/10 pt-[1.2cqh] text-[0.9cqw] font-mono text-[#d35400]/80">
                <div>
                  <span className="opacity-60">{isZh ? "炭火辐射指数:" : "Radiant Influx:"}</span>
                  <span className="ml-[0.5cqw] font-bold">{beat >= 1 ? "OPTIMAL FLUX" : "STABLE"}</span>
                </div>
                <div>
                  <span className="opacity-60">{isZh ? "酶活性终止状态:" : "Enzyme Denature:"}</span>
                  <span className="ml-[0.5cqw] font-bold">{beat >= 2 ? "100% STOPPED" : "ACTIVE"}</span>
                </div>
              </div>
            </div>
          )}

          {scene === 3 && (
            // Scene 3 (Standard): 3 connected stages of Wuyi tea roasting refinement
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex justify-between text-[#3e2311]">
                <span>{isZh ? "非遗炭焙三阶定格工坊" : "THREE-STAGE ARTISANAL HEAT REFINEMENT"}</span>
                <span className="animate-pulse">● Master Profile Active</span>
              </div>

              <div className="grid grid-cols-3 gap-[1.2cqw] my-[2cqh] flex-1">
                {[
                  { name: isZh ? "初焙定香" : "First Roast", unit: "100 °C / Light", icon: "🌱", desc: isZh ? "花果清香初步稳固" : "Locks floral components securely", active: true },
                  { name: isZh ? "复焙熟化" : "Medium Caramel", unit: "120 °C / Medium", icon: "🍂", desc: isZh ? "甜香焦糖熟韵渐浓" : "Develops almond and sweet notes", active: beat >= 1 },
                  { name: isZh ? "足火炖化" : "Heavy Finish", unit: "135 °C / Heavy", icon: "🔥", desc: isZh ? "岩骨花香终极融汇" : "Deep matured stony master cup", active: beat >= 2 }
                ].map((item, i) => (
                  <div key={i} className={`p-[1.2cqw] rounded-xl border bg-white flex flex-col justify-between transition-all duration-500 ${
                    item.active 
                      ? "border-[#d35400] shadow-md scale-100" 
                      : "border-slate-200 opacity-20 scale-95"
                  }`}>
                    <div className="flex justify-between items-start">
                      <span className="text-[1.8cqw]">{item.icon}</span>
                      <span className="text-[0.75cqw] font-mono font-bold bg-[#d35400]/10 text-[#d35400] px-[0.5cqw] py-[0.1cqh] rounded">
                        {item.unit}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-serif font-black text-[1cqw] mt-[1cqh] text-[#3e2311]">{item.name}</h4>
                      <p className="text-[0.75cqw] text-zinc-600 mt-[0.5cqh] font-sans leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-[0.8cqw] font-mono opacity-50 flex justify-between">
                <span>{isZh ? "荔木灰覆盖厚度多孔反馈" : "RADIANT HEAT DAMPING RATIO"}</span>
                <span className="text-[#d35400] font-bold">
                  {beat === 0 ? "STAGE 1 PASS" : beat === 1 ? "STAGE 2 LOCKED" : "MASTER GRADE LOCKED"}
                </span>
              </div>
            </div>
          )}

          {scene === 4 && (
            // Scene 4 (Dense): 2x2 database alignment and thermography telemetry
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex justify-between">
                <span>{isZh ? "多点红外热像与覆灰热阻平衡" : "MULTI-POINT SPECTROGRAPHY & DAMPING CONTROL"}</span>
                <span>{isZh ? "红外遥测开" : "INFRARED SENSORS ONLINE"}</span>
              </div>

              <div className="grid grid-cols-2 gap-[1.2cqw] my-[1cqh] flex-1">
                {[
                  { title: isZh ? "非接触式红外叶温测绘" : "TRAYS HEAT ABSORPTION PROFILE", val: "128.4 °C", info: isZh ? "热阻曲线平滑" : "Radial heat delta ±0.4°C", icon: Activity, active: true },
                  { title: isZh ? "焙笼均孔炭灰风压阻尼" : " RADIANT SLUICE BALANCING", val: "2.4cm Gray", info: isZh ? "覆灰厚度柔性均衡" : "Adaptive gray thermal damping", icon: Compass, active: beat >= 1 },
                  { title: isZh ? "儿茶素低聚热降解率" : "CATECHIN OLIGOMER PROFILE", val: "94.2% Decayed", info: isZh ? "苦涩单宁全部热解" : "Tanins thermal decomposition complete", icon: Layers, active: beat >= 1 },
                  { title: isZh ? "足火岩韵置信度证明" : "ARTISANAL ACCUMULATED HEAT", val: "99.98% True", info: isZh ? "签发大师非遗岩韵品质" : "Sufficient Masters Roasting Seal", icon: Shield, active: beat >= 2 }
                ].map((item, i) => (
                  <div key={i} className={`p-[1.2cqw] rounded-xl border bg-white flex justify-between items-center transition-all duration-500 ${
                    item.active ? "border-[#d35400] shadow-sm" : "border-slate-200 opacity-20"
                  }`}>
                    <div className="flex flex-col gap-[0.3cqh]">
                      <span className="text-[0.75cqw] font-mono font-bold opacity-60 text-[#3e2311] uppercase">{item.title}</span>
                      <span className="text-[1.3cqw] font-serif font-black text-[#3e2311]">{item.val}</span>
                      <span className="text-[0.75cqw] text-zinc-500 font-sans">{item.info}</span>
                    </div>
                    <item.icon className="w-[2cqw] h-[2cqw] text-[#d35400]" />
                  </div>
                ))}
              </div>

              <div className="w-full bg-[#f3ead7] h-[0.4cqh] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#d35400] transition-all duration-700" 
                  style={{ width: beat === 0 ? "35%" : beat === 1 ? "70%" : "100%" }}
                />
              </div>
            </div>
          )}

          {scene === 5 && (
            // Scene 5 (Extreme / High Density): Grand Master Tea Roasting Portal
            <div className="flex-1 flex flex-col justify-between my-[0.2cqh]">
              {/* Top summary cards */}
              <div className="grid grid-cols-4 gap-[0.8cqw]">
                {[
                  { name: isZh ? "单坑炭焙容量" : "PIT CAPACITY", val: "18 " + (isZh ? "焙笼" : "Baskets"), color: "text-[#3e2311]" },
                  { name: isZh ? "多酚聚合度" : "PHENOL POLYMER", val: "99.8%", color: "text-emerald-700" },
                  { name: isZh ? "大师非遗认证" : "MASTERS SEAL", val: "Master Class", color: "text-emerald-700" },
                  { name: isZh ? "本批出茶重" : "BATCH TEA WEIGHT", val: beat >= 2 ? "145 kg" : beat >= 1 ? "52 kg" : "15 kg" }
                ].map((ind, i) => (
                  <div key={i} className="bg-white border border-[#d35400]/20 rounded-xl p-[0.8cqw] text-center shadow-sm">
                    <span className="text-[0.7cqw] font-mono opacity-50 block text-[#3e2311] uppercase">{ind.name}</span>
                    <span className={`text-[1.1cqw] font-serif font-black ${ind.color} block mt-[0.2cqh]`}>{ind.val}</span>
                  </div>
                ))}
              </div>

              {/* Central Map & Spectrogram Ticker */}
              <div className="grid grid-cols-12 gap-[1cqw] my-[1cqh] flex-1">
                {/* SVG Roasting Grid */}
                <div className="col-span-7 bg-white border border-[#d35400]/20 rounded-xl p-[1.5cqw] relative flex flex-col justify-between shadow-sm">
                  <span className="text-[0.75cqw] font-mono opacity-50 block">{isZh ? "焙笼温度矩阵及失水断面动态识别" : "MULTI-BASKET CONVECTION THERMOGRAPHY"}</span>
                  
                  <div className="flex-1 relative flex items-center justify-center">
                    <svg className="w-full h-full fill-none stroke-[#3e2311]" viewBox="0 0 240 100">
                      {/* Grid background */}
                      <path d="M 0 50 H 240 M 80 0 V 100 M 160 0 V 100" stroke="#d35400" strokeWidth="0.5" strokeDasharray="2,4" className="opacity-15" />
                      
                      {/* Thermography convection swirling */}
                      <circle cx="120" cy="50" r="40" stroke="#d35400" strokeWidth="1" strokeDasharray="3,6" className="opacity-20 animate-spin-slow" />
                      
                      {/* Basket nodes glowing */}
                      {[
                        { x: 40, y: 30, t: "85°C", active: true },
                        { x: 120, y: 30, t: "110°C", active: beat >= 1 },
                        { x: 200, y: 30, t: "135°C", active: beat >= 2 },
                        { x: 40, y: 70, t: "Dry", active: true },
                        { x: 120, y: 70, t: "Esters", active: beat >= 1 },
                        { x: 200, y: 70, t: "Rock", active: beat >= 2 }
                      ].map((node, idx) => (
                        <g key={idx} className="transition-all duration-500">
                          <circle cx={node.x} cy={node.y} r="12" fill={node.active ? "#faf2e3" : "#faf6ee"} stroke={node.active ? "#d35400" : "#cbd5e1"} strokeWidth="1.5" />
                          <text x={node.x - 11} y={node.y + 4} className="text-[8px] font-sans font-black fill-[#3e2311]" stroke="none">{node.t}</text>
                          {node.active && (
                            <circle cx={node.x} cy={node.y} r="14" stroke="#d35400" strokeWidth="1" className="animate-ping opacity-25" style={{ animationDuration: "3s" }} />
                          )}
                        </g>
                      ))}
                    </svg>
                  </div>
                </div>

                {/* Right side: Event and chemical phase logs */}
                <div className="col-span-5 bg-white border border-[#d35400]/20 rounded-xl p-[1.5cqw] flex flex-col justify-between shadow-sm font-mono text-[0.75cqw]">
                  <span className="opacity-50 text-[0.7cqw] uppercase border-b border-[#d35400]/15 pb-[0.3cqh] block">
                    {isZh ? "非遗大师炭焙物理结算单" : "ARTISANAL ROAST REPORT"}
                  </span>
                  
                  <div className="flex-1 flex flex-col justify-center gap-[0.5cqh] my-1 leading-none">
                    <div className="text-zinc-500">&gt; RADIANT_CONVECTION_READY</div>
                    <div className="text-zinc-400">&gt; Accumulated heat logs OK</div>
                    <div className={`transition-opacity ${beat >= 1 ? "opacity-100 text-[#d35400]" : "opacity-15"}`}>
                      &gt; catechins polymer locked
                    </div>
                    <div className={`transition-opacity ${beat >= 2 ? "opacity-100 text-emerald-700 font-extrabold" : "opacity-5"}`}>
                      &gt; MASTER ROCK SHUN COMPILING OK
                    </div>
                  </div>

                  <div className={`text-[0.65cqw] p-[0.5cqw] rounded bg-emerald-50 text-emerald-800 border border-emerald-500/20 flex items-center gap-[0.3cqw] ${beat >= 2 ? "opacity-100" : "opacity-20"}`}>
                    <Shield className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{isZh ? "非遗起炉，大红袍金字招章盖印" : "Master stamp applied. Roasting complete."}</span>
                  </div>
                </div>
              </div>

              {/* Bottom system status bar */}
              <div className="text-[0.8cqw] font-mono opacity-60 flex justify-between items-center px-1 border-t border-[#d35400]/15 pt-[0.6cqh]">
                <span>{isZh ? "大红袍非物质文化遗产数字化热加工控制中心" : "WUYI ROCK TEA MASTERS PRECISION ROTATE SYSTEM"}</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                  {isZh ? "热解积温绿标高亮通车" : "THERMOPHILIC MESH STATUS: OPTIMAL"}
                </span>
              </div>
            </div>
          )}

          {/* Sub status footer */}
          <div className="border-t border-[#d35400]/10 pt-[0.8cqh] flex justify-between text-[0.75cqw] font-mono opacity-50 mt-1">
            <span>{isZh ? "大红袍大师足火谱" : "WUYI ROCK TEA CORE PROFILE TRAY_XII // COMPLETE"}</span>
            <span>VERIFICATION CODE: 0x12_WUYI_ROCK</span>
          </div>
        </div>
      </div>

      {/* Decorative Slide Footer */}
      <div className="flex justify-between items-center text-[0.8cqw] font-mono opacity-55 border-t border-[#d35400]/10 pt-[1.2cqh] z-10">
        <span>© 1385 - 2026 {isZh ? "武夷山大红袍传统制茶工坊" : "Wuyi Rock Tea Intangible Heritage Society"}</span>
        <span>{isZh ? "自适应低频辐射热阻物理控温技术" : "charcoal radiant feedback controls"}</span>
      </div>
    </div>
  );
}
