import React from "react";
import { Compass, Eye, Shield, Activity, Database, Layers, Trees, Circle, CheckCircle, ArrowRight, Droplets } from "lucide-react";

export const getMetadata = (lang) => ({
  id: "16",
  tier: "B",
  name: lang === "zh" ? "中世纪三区轮作制健康监测" : "Medieval Crop Rotation Health",
  theme: lang === "zh" ? "中世纪农业庄园经济制度" : "Manorial Agricultural Economy",
  densityLabel: lang === "zh" ? "田垄生态微控" : "Manorial Agro-Monitor",
  colors: { bg: "bg-[#091107]", ink: "text-[#edf7ea]", panel: "border-[#a3e635]/15", accent: "text-[#a3e635]" },
  typography: { header: "font-serif", body: "font-sans" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "休耕土壤深耕与养分蓄力" : "Fallow Soil Ploughing & Nutrient Recovery",
      beats: [
        { id: 1, action: lang === "zh" ? "深耕蓄力" : "Plough Fallow", title: lang === "zh" ? "休耕荒野深耕与养分凝聚" : "Deep Ploughing for Silt Regeneration", body: lang === "zh" ? "深翻休耕区原野，翻松淤泥，借由野生苜蓿、三叶草等豆科植物缓慢吸收凝聚空气中的天然氮肥。" : "Ploughing deep into the fallow soil. Loosening silt clay to let wild clover and legumes slowly gather natural soil nitrogen." },
        { id: 2, action: lang === "zh" ? "秋播冬麦" : "Sow Winter Wheat", title: lang === "zh" ? "首区冬小麦播种与覆土" : "Winter Wheat Sowing & Covering", body: lang === "zh" ? "在富氮的第一区细致开垄，播撒精选冬麦种子，覆盖腐殖细土，开启漫长越冬碳水化合物积累期。" : "Sowing selected winter wheat seeds across Zone 1 furrows, applying compost cover to start long winter starch accumulation." },
        { id: 3, action: lang === "zh" ? "氮肥常锁" : "Nitrogen Lock", title: lang === "zh" ? "垄沟底层土壤有效氮常数锁定" : "Soil Nitrogen Phase Lock", body: lang === "zh" ? "测定并锁定垄沟底层有效氮素分布常数，确立大庄园最初的生态阻尼阈值，保证春季发芽率。" : "Locking effective nitrogen distributions across deep furrow slices, establishing the initial ecological threshold." }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "三区作物对比与生物固氮" : "Three-Zone Crop Contrast & Nitrogen Balance",
      beats: [
        { id: 1, action: lang === "zh" ? "冬麦叶分析" : "Scan Zone A", title: lang === "zh" ? "第一区冬麦叶片覆盖监测" : "Zone A Winter Wheat Leaf Area Scan", body: lang === "zh" ? "监测第一区冬小麦叶面积指数与叶绿素反射率，麦苗呈健康深绿色，根系深扎蓄力。" : "Tracking winter wheat leaf area indices and chlorophyll reflectance in Zone A. Shoots are deep green with strong roots." },
        { id: 2, action: lang === "zh" ? "大麦春播" : "Sow Zone B", title: lang === "zh" ? "第二区春大麦与豌豆混播" : "Zone B Spring Barley & Pea Mix", body: lang === "zh" ? "在第二区混播春大麦与春豌豆，依靠豆科植物根瘤菌进行高能生物固氮，反哺春作物发育。" : "Co-sowing spring barley and peas in Zone B, harnessing root nodule bacteria to fix nitrogen and fuel crop growth." },
        { id: 3, action: lang === "zh" ? "休耕养护" : "Scan Zone C", title: lang === "zh" ? "第三区牧草放牧与养分平衡" : "Zone C Grazing & Nutrient Recovery", body: lang === "zh" ? "第三区彻底闲置，用作放牧，利用牲畜粪尿与落叶缓慢反哺，在平衡中拉升土壤有机质含量。" : "Zone C remains fallow for sheep grazing. Harnessing animal manure and natural decay to rise soil organic mass." }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "轮作大流转与空间大轮换" : "The 3-Year Great Field Rotation Cycle",
      beats: [
        { id: 1, action: lang === "zh" ? "秋收秋播" : "Autumn Harvest", title: lang === "zh" ? "秋收期冬麦收割与深翻" : "Autumn Phase: Winter Wheat Harvest", body: lang === "zh" ? "八月金黄，收割一区冬小麦；二区春大麦收获并留茬；三区闲置翻耕，作好秋播冬麦底熵整备。" : "August gold. Harvesting Zone 1 winter wheat, cutting Zone 2 spring barley, deeply tilling Zone 3 fallow for autumn sowing." },
        { id: 2, action: lang === "zh" ? "春回发芽" : "Spring Sprout", title: lang === "zh" ? "春播期大麦萌芽与放牧" : "Spring Phase: Barley Germination", body: lang === "zh" ? "冬去春来，二区播撒春作物吐绿发芽；一区改作休耕牧场恢复肥力；三区冬麦出苗葱郁，生命盎然。" : "Spring returns. Zone 2 sprouts spring crops, Zone 1 becomes fallow pasture to rest, Zone 3 winter wheat sprouts lushly." },
        { id: 3, action: lang === "zh" ? "空间大转" : "Field Rotation", title: lang === "zh" ? "三区空间完全大轮转定格" : "Unified Spatial Rotation Calibration", body: lang === "zh" ? "执行经典三区大轮换：一区改春播；二区改休耕；三区改冬麦，达成永续循环的完美大账册。" : "Executing the classic three-field rotation: Zone 1 moves to spring, Zone 2 to fallow, Zone 3 to winter wheat. Loop closes." }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "渠系水动力平衡与有效氮度量" : "Hydrology Balance & Nitrogen Telemetry",
      beats: [
        { id: 1, action: lang === "zh" ? "测土测氮" : "Scan Soil", title: lang === "zh" ? "土壤有效氮磷钾高维扫描" : "Soil Nitrogen & Potassium Scan", body: lang === "zh" ? "对庄园数百个垄块的底层土壤湿度、有效氮浓度进行拉网测绘，绘制空间热阻三维对位图。" : "Mapping soil moisture and effective nitrogen levels across hundreds of ridges, creating a 3D field spectrograph." },
        { id: 2, action: lang === "zh" ? "自适应水" : "Irrigate Balance", title: lang === "zh" ? "庄园渠系水阻尼流量柔性调校" : "Adaptive Sluice Flow Balancing", body: lang === "zh" ? "依据各垄块湿度差逆向开闭灌溉木闸，优化流体力学分布，抑制蒸发流，保证多区适水常数归一。" : "Modulating irrigation sluices based on moisture deltas, optimizing fluid hydraulics to keep soil moisture uniform." },
        { id: 3, action: lang === "zh" ? "农业记账" : "Log Harvest", title: lang === "zh" ? "大庄园总收获积温账本审计" : "Manorial Harvest Proof Ledger", body: lang === "zh" ? "累加三区作物的光照积温常数，估算面粉出率、燕麦精饲料折损比，生成合规庄园经济科学账册。" : "Aggregating solar heat constants, computing winter wheat grain yields and oat forage weights for the lord's archives." }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "大庄园三区轮作总控台" : "Grand Three-Field Rotation Portal",
      beats: [
        { id: 1, action: lang === "zh" ? "农政编译" : "Stream Crops", title: lang === "zh" ? "多垄块农业气象指标并轨编译" : "Multi-Zone Agro-Meteorological Stream", body: lang === "zh" ? "庄园三区各垄温湿度、土壤氮素与气温蒸发风速大流高速汇流并轨，实时生成高维度农政账簿。" : "Merging real-time wind speed, soil nitrogen, and granary humidity telemetry into high-speed channels." },
        { id: 2, action: lang === "zh" ? "三区并网" : "Agro Mesh Lock", title: lang === "zh" ? "冬麦、大麦与休耕三大生态锁定" : "Wheat, Barley & Fallow Dynamic Mesh", body: lang === "zh" ? "冬麦（主粮）、大麦（燕麦饲料）、休耕（肥力）三大转化轨道达成完美的百分百交叉，生态网红亮起。" : "Wheat (grain), barley (forage), and fallow (fertility) reach a perfect 100% convergence. Interlocking matrix fully locked." },
        { id: 3, action: lang === "zh" ? "金印结账" : "Manor Seal", title: lang === "zh" ? "大庄园主金字印信终极签发" : "Grand Manor Harvest Ledger Sign-off", body: lang === "zh" ? "领主加盖大金重印，粮仓满溢爆库，三区轮换结账出炉，大循环宣告圆满落幕，全网绿灯通车。" : "The lord applies the great gold seal. Granaries overflow with grains. The rotation ledger is signed off with golden stars." }
      ]
    }
  ]
});

export default function Style16({ scene, beat, language, isThumbnail }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];
  const isZh = language === "zh";

  // Mock nitrogen / water values based on scene and beat
  const getAgroMetrics = () => {
    if (scene === 1) {
      if (beat === 0) return { nitrogen: "12 ppm", moisture: "45%" };
      if (beat === 1) return { nitrogen: "14 ppm", moisture: "52%" };
      return { nitrogen: "18 ppm (Rich)", moisture: "58%" };
    }
    if (scene === 2) {
      if (beat === 0) return { nitrogen: "22 ppm", moisture: "60%" };
      if (beat === 1) return { nitrogen: "26 ppm", moisture: "62%" };
      return { nitrogen: "30 ppm (Rich)", moisture: "55%" };
    }
    if (scene === 3) {
      if (beat === 0) return { nitrogen: "28 ppm", moisture: "50%" }; // Autumn
      if (beat === 1) return { nitrogen: "34 ppm", moisture: "65%" }; // Spring
      return { nitrogen: "38 ppm (Peak)", moisture: "48%" }; // Summer Rotation
    }
    return { nitrogen: "35 ppm", moisture: "54%" };
  };

  const metrics = getAgroMetrics();

  return (
    <div className={`w-full h-full flex flex-col justify-between p-[3.5cqw] relative ${meta.colors.bg} ${meta.colors.ink} select-none overflow-hidden`} key={`${scene}-${beat}`}>
      {/* Background soft topography contours (resembling rolling farmland furrows) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 800 500" fill="none" stroke="currentColor">
          <path d="M 0 100 Q 150 150, 300 100 T 600 100 T 800 100" strokeWidth="1" />
          <path d="M 0 200 Q 150 250, 300 200 T 600 200 T 800 200" strokeWidth="1.5" />
          <path d="M 0 300 Q 150 350, 300 300 T 600 300 T 800 300" strokeWidth="2" />
          <path d="M 0 400 Q 150 450, 300 400 T 600 400 T 800 400" strokeWidth="2.5" />
        </svg>
      </div>

      {/* Slide Header */}
      <div className="flex justify-between items-start border-b border-[#a3e635]/15 pb-[2cqh] z-10">
        <div>
          <span className="font-mono text-[1.1cqw] tracking-widest uppercase opacity-60 flex items-center gap-[0.5cqw]">
            <Trees className="w-[1.2cqw] h-[1.2cqw] text-[#a3e635] animate-pulse" />
            {meta.theme}
          </span>
          <h1 className="text-[3cqw] font-serif font-black tracking-tight mt-[0.5cqh]">
            {currentScene.title}
          </h1>
        </div>
        <div className="text-right font-mono">
          <div className="text-[1.2cqw] font-bold text-[#a3e635]">
            {isZh ? "庄园三区轮作监控" : "Three-Field Rotation Monitor"}
          </div>
          <div className="text-[0.9cqw] opacity-50 uppercase tracking-widest mt-[0.5cqh]">
            {meta.densityLabel}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-12 gap-[2.5cqw] flex-1 my-[2.5cqh] items-stretch z-10">
        {/* Left Column: Story copy */}
        <div className="col-span-5 flex flex-col justify-between pr-[1cqw]">
          <div className="flex flex-col gap-[1.5cqh]">
            <span className="font-mono text-[1cqw] tracking-widest uppercase text-[#a3e635] font-bold flex items-center gap-[0.5cqw]">
              <span className="w-[0.8cqw] h-[0.8cqw] bg-[#a3e635] rounded-full animate-ping" />
              {currentBeat.action}
            </span>
            <h2 className="text-[2.2cqw] font-serif font-black leading-tight">
              {currentBeat.title}
            </h2>
            <p className="text-[1.1cqw] leading-[1.6] opacity-80 font-sans">
              {currentBeat.body}
            </p>
          </div>

          {/* Real-time agrochemical indicators */}
          <div className="bg-[#121c11] border border-[#a3e635]/20 rounded-xl p-[1.5cqw] flex flex-col gap-[1.2cqh]">
            <div className="flex justify-between items-center border-b border-[#a3e635]/15 pb-[0.8cqh]">
              <span className="text-[0.9cqw] font-mono font-bold tracking-wider opacity-60 text-zinc-300">
                {isZh ? "土壤化学与水合参数" : "SOIL BIOCHEM TELEMETRY"}
              </span>
              <Droplets className="w-[1.1cqw] h-[1.1cqw] text-[#a3e635]" />
            </div>

            <div className="grid grid-cols-2 gap-[1cqw] text-[0.95cqw] font-mono text-zinc-300">
              <div>
                <span className="opacity-50 text-[0.8cqw] block">{isZh ? "有效氮素" : "SOIL NITROGEN"}</span>
                <span className="font-bold text-[#a3e635]">
                  {metrics.nitrogen}
                </span>
              </div>
              <div>
                <span className="opacity-50 text-[0.8cqw] block">{isZh ? "垄上水含率" : "SOIL MOISTURE"}</span>
                <span className="font-bold text-[#a3e635]">
                  {metrics.moisture}
                </span>
              </div>
            </div>

            {/* Total biomass accumulation gauge */}
            <div className="flex flex-col gap-[0.4cqh] mt-[0.5cqh]">
              <div className="flex justify-between text-[0.75cqw] font-mono opacity-60 text-zinc-300">
                <span>{isZh ? "庄园生物量积累指数" : "BIOMASS ACCUMULATION RATE"}</span>
                <span className="text-[#a3e635] font-bold">{scene === 1 ? "18%" : scene === 2 ? "48%" : scene === 3 ? "76%" : "99.2%"}</span>
              </div>
              <div className="w-full h-[0.5cqh] bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#a3e635] rounded-full transition-all duration-1000 shadow-[0_0_8px_#a3e635]"
                  style={{ width: scene === 1 ? "18%" : scene === 2 ? "48%" : scene === 3 ? "76%" : "99.2%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Three-Field Map (Bespoke per scene density) */}
        <div className="col-span-7 bg-[#101b10] border border-[#a3e635]/15 rounded-2xl p-[2cqw] flex flex-col justify-between relative overflow-hidden">
          {/* Subtle horizontal field furrow grids */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(163,230,53,0.15)_1px,transparent_1px)] [background-size:100%_1.5cqh]" />

          {scene === 1 && (
            // Scene 1 (Ultralight): 1 giant striking 3-field circular rotation chart
            <div className="flex-1 flex flex-col justify-center items-center relative">
              <div className="w-[16cqw] h-[16cqw] rounded-full border-2 border-dashed border-[#a3e635]/30 bg-[#142615] flex flex-col items-center justify-center p-[1.5cqw] relative shadow-sm">
                <span className="text-[0.75cqw] font-mono opacity-50 block uppercase text-zinc-300 mb-[1.5cqh]">3-FIELD ROTATION MAP</span>
                
                {/* SVG circular sector lines */}
                <svg className="w-[85%] h-[80%] fill-none stroke-[#a3e635]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="38" strokeWidth="1" className="opacity-25" />
                  {/* Rotating dashed tracks */}
                  <circle cx="50" cy="50" r="38" stroke="#a3e635" strokeWidth="1.5" strokeDasharray="15,10" className="animate-spin-slow" />
                  
                  {/* Tri-sector lines */}
                  <line x1="50" y1="50" x2="50" y2="12" stroke="#a3e635" strokeWidth="1.5" />
                  <line x1="50" y1="50" x2="82" y2="68" stroke="#a3e635" strokeWidth="1.5" />
                  <line x1="50" y1="50" x2="18" y2="68" stroke="#a3e635" strokeWidth="1.5" />

                  {/* Active growing plant node */}
                  <g 
                    className="transition-all duration-1000"
                    style={{
                      transform: beat === 0 ? "translate(30px, 40px)" : beat === 1 ? "translate(70px, 40px)" : "translate(50px, 78px)"
                    }}
                  >
                    <circle cx="0" cy="0" r="6" fill="#a3e635" className="animate-pulse" />
                    <Trees className="w-3.5 h-3.5 text-[#101b10] absolute -top-[7px] -left-[7px]" />
                  </g>
                </svg>

                <span className="text-[1.1cqw] font-serif font-black text-[#a3e635] mt-[1cqh]">
                  {beat === 0 ? (isZh ? "土壤休耕蓄肥" : "Fallow resting") : beat === 1 ? (isZh ? "冬小麦播种" : "Winter Sown") : (isZh ? "有效氮锁定" : "Nitrogen Locked")}
                </span>
              </div>

              <div className="text-center font-serif text-[1.1cqw] mt-[2cqh]">
                <p className="font-extrabold">{isZh ? "三区轮作，地力永续" : "Rotate the fields, and the soils yield eternal bread."}</p>
                <p className="text-[0.95cqw] font-sans opacity-60 mt-[0.5cqh] font-mono text-lime-300">
                  {isZh ? "休耕蓄氮中 · 微生态常数 1.34" : "Regenerative Nitrogen Gather · Micro-constant 1.34"}
                </p>
              </div>
            </div>
          )}

          {scene === 2 && (
            // Scene 2 (Light): Symmetrical comparison of Winter Sown vs Spring Sown field biology
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex items-center gap-[0.5cqw]">
                <Trees className="w-[1.2cqw] h-[1.2cqw] text-[#a3e635]" />
                {isZh ? "冬麦生长与春播豆科固氮双向对位" : "WINTER WHEAT GROWTH VS SPRING LEGUME BIOMASS"}
              </div>

              <div className="flex-1 relative flex items-center justify-center">
                <svg className="w-[90%] h-[75%] fill-none stroke-[#a3e635]" viewBox="0 0 400 150">
                  {/* Winter wheat leaf index curve (Top) */}
                  <path d="M 30 40 C 130 40, 150 75, 200 75" strokeWidth="2" className="opacity-30" />
                  <path d="M 30 40 C 130 40, 150 75, 200 75" strokeWidth="2.5" strokeDasharray="180" strokeDashoffset={beat >= 1 ? 0 : 180} className="stroke-lime-400 transition-all duration-1000" />
                  
                  {/* Spring barley root nodule fix (Bottom) */}
                  <path d="M 30 110 C 130 110, 150 75, 200 75" strokeWidth="2" className="opacity-30" />
                  <path d="M 30 110 C 130 110, 150 75, 200 75" strokeWidth="2.5" strokeDasharray="180" strokeDashoffset={beat >= 2 ? 0 : 180} className="stroke-lime-400 transition-all duration-1000 stroke-dashed" />

                  {/* Balanced nutrient convergence */}
                  <path d="M 200 75 H 370" strokeWidth="3" className="opacity-20" />
                  <path d="M 200 75 H 370" strokeWidth="3.5" strokeDasharray="170" strokeDashoffset={beat >= 2 ? 0 : 170} className="stroke-[#edf7ea] transition-all duration-1000" />

                  {/* Junction nutrient node */}
                  <g transform="translate(200, 75)" className={beat >= 2 ? "scale-110" : "scale-100 opacity-60"}>
                    <circle cx="0" cy="0" r="8" fill="#a3e635" />
                    <circle cx="0" cy="0" r="3" fill="#091107" />
                  </g>

                  {/* Text labels */}
                  <text x="40" y="30" className="text-[7.5px] font-mono fill-current text-lime-200" stroke="none">{isZh ? "一区冬小麦叶面积 (Zone A)" : "Zone A Winter Wheat Leaf Index"}</text>
                  <text x="40" y="125" className="text-[7.5px] font-mono fill-current text-lime-400" stroke="none">{isZh ? "二区春大麦根瘤固氮 (Zone B)" : "Zone B Spring Legume Nodule Fix"}</text>
                  <text x="215" y="65" className="text-[8px] font-serif font-black fill-current text-[#edf7ea]" stroke="none">{isZh ? "大庄园生态极性交汇点" : "Unified Ecological Equilibrium"}</text>
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-[1cqw] border-t border-[#a3e635]/10 pt-[1.2cqh] text-[0.9cqw] font-mono text-lime-300">
                <div>
                  <span className="opacity-60">{isZh ? "一区叶绿素反射:" : "Zone A Chlorophyll:"}</span>
                  <span className="ml-[0.5cqw] font-bold">{beat >= 1 ? "94.2% OPTIMAL" : "STANDBY"}</span>
                </div>
                <div>
                  <span className="opacity-60">{isZh ? "二区根瘤菌固氮:" : "Zone B Legume bacteria:"}</span>
                  <span className="ml-[0.5cqw] font-bold">{beat >= 2 ? "ACTIVE 100%" : "HOLD"}</span>
                </div>
              </div>
            </div>
          )}

          {scene === 3 && (
            // Scene 3 (Standard): 3 connected stages of crop rotation cycle (Autumn, Spring, Summer Rotation)
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex justify-between text-lime-200">
                <span>{isZh ? "三区轮替大流转时间轴" : "THREE CHRONOLOGICAL ROTATION STAGES"}</span>
                <span className="animate-pulse">● Rotation Timeline Locked</span>
              </div>

              <div className="grid grid-cols-3 gap-[1.2cqw] my-[2cqh] flex-1">
                {[
                  { name: isZh ? "秋播期蓄力" : "Autumn Sow", unit: "Aug - Oct Phase", icon: "🍂", desc: isZh ? "一区播冬麦；二区留茬；三区深翻" : "Sowing winter wheat in Zone 1. Till Zone 3.", active: true },
                  { name: isZh ? "春回发嫩绿" : "Spring Sprout", unit: "Mar - May Phase", icon: "🌱", desc: isZh ? "二区春播大麦豌豆；一区休耕放牧" : "Sowing barley/legumes in Zone 2. Grazing Zone 1.", active: beat >= 1 },
                  { name: isZh ? "轮转大交错" : "Unified Rotation", unit: "3-Year Great Cycle", icon: "🔄", desc: isZh ? "一春、二休、三冬，大流转闭合" : "Unified spatial rotation is triggered. Loop sealed.", active: beat >= 2 }
                ].map((item, i) => (
                  <div key={i} className={`p-[1.2cqw] rounded-xl border bg-[#122413] flex flex-col justify-between transition-all duration-500 ${
                    item.active 
                      ? "border-[#a3e635] shadow-md scale-100" 
                      : "border-zinc-850 opacity-20 scale-95"
                  }`}>
                    <div className="flex justify-between items-start">
                      <span className="text-[1.8cqw]">{item.icon}</span>
                      <span className="text-[0.75cqw] font-mono font-bold bg-[#a3e635]/20 text-[#edf7ea] px-[0.5cqw] py-[0.1cqh] rounded">
                        {item.unit}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-serif font-black text-[1cqw] mt-[1cqh] text-[#edf7ea]">{item.name}</h4>
                      <p className="text-[0.75cqw] text-zinc-300 mt-[0.5cqh] font-sans leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-[0.8cqw] font-mono opacity-50 flex justify-between">
                <span>{isZh ? "大庄园主金印结算印信" : "CROP ROTATION STAGES VERIFIED"}</span>
                <span className="text-[#a3e635] font-bold">
                  {beat === 0 ? "STAGE 1 PASS" : beat === 1 ? "STAGE 2 ACTIVE" : "永续循环已锁定"}
                </span>
              </div>
            </div>
          )}

          {scene === 4 && (
            // Scene 4 (Dense): 2x2 database alignment and soil nitrogen telemetry
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex justify-between">
                <span>{isZh ? "土壤化学多点扫描与沟渠闸门控制遥测板" : "SOIL MULTI-POINT CHEMISTRY & SLUICE DRAIN CONTROL"}</span>
                <span>{isZh ? "水动力自整定" : "SENSORS ONLINE"}</span>
              </div>

              <div className="grid grid-cols-2 gap-[1.2cqw] my-[1cqh] flex-1">
                {[
                  { title: isZh ? "垄上底层土壤有效氮常数" : "SOIL EFFECTIVE NITROGEN MAP", val: "38 ppm (Peak)", info: isZh ? "豆科固氮充沛，肥力正常" : "Legumes bacteria active & rich", icon: Activity, active: true },
                  { title: isZh ? "庄园灌渠木闸自调节" : "ADAPTIVE SLUICE BALANCE", val: "Sluice 25% Open", info: isZh ? "微调多区湿度防干涝" : "Moisture constant synced", icon: Compass, active: beat >= 1 },
                  { title: isZh ? "作物成熟期碳水转化率" : "WHEAT STARCH CONVERSION", val: "94.2% Rate", info: isZh ? "冬小麦灌浆饱满" : "Optimal winter wheat grain weights", icon: Layers, active: beat >= 1 },
                  { title: isZh ? "庄园总产量置信证明" : "MANORIAL BIOMASS LEDGER", val: "99.98% True", info: isZh ? "核算秋粮出粉率与精料吨位" : "Sufficient Lord's harvest certified", icon: Shield, active: beat >= 2 }
                ].map((item, i) => (
                  <div key={i} className={`p-[1.2cqw] rounded-xl border bg-[#122413] flex justify-between items-center transition-all duration-500 ${
                    item.active ? "border-[#a3e635] shadow-sm" : "border-zinc-850 opacity-20"
                  }`}>
                    <div className="flex flex-col gap-[0.3cqh]">
                      <span className="text-[0.75cqw] font-mono font-bold opacity-60 text-lime-200 uppercase">{item.title}</span>
                      <span className="text-[1.3cqw] font-serif font-black text-[#edf7ea]">{item.val}</span>
                      <span className="text-[0.75cqw] text-zinc-300 font-sans">{item.info}</span>
                    </div>
                    <item.icon className="w-[2cqw] h-[2cqw] text-[#a3e635]" />
                  </div>
                ))}
              </div>

              <div className="w-full bg-[#142615] h-[0.4cqh] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#a3e635] transition-all duration-700" 
                  style={{ width: beat === 0 ? "35%" : beat === 1 ? "70%" : "100%" }}
                />
              </div>
            </div>
          )}

          {scene === 5 && (
            // Scene 5 (Extreme / High Density): Grand Medieval Manor Harmony Dashboard
            <div className="flex-1 flex flex-col justify-between my-[0.2cqh]">
              {/* Top summary cards */}
              <div className="grid grid-cols-4 gap-[0.8cqw]">
                {[
                  { name: isZh ? "庄园总耕地" : "MANOR FARMLAND", val: "1,200 " + (isZh ? "条垄" : "Ridges"), color: "text-[#edf7ea]" },
                  { name: isZh ? "肥力循环度" : "NITROGEN RECOVERY", val: "100% (Balanced)", color: "text-emerald-400" },
                  { name: isZh ? "领主印信等级" : "MANORIAL SHIELD", val: "Lord Class", color: "text-emerald-400" },
                  { name: isZh ? "大麦与麦粉重" : "HARVEST WEIGHT", val: beat >= 2 ? "142 " + (isZh ? "吨" : "Tons") : beat >= 1 ? "52 " + (isZh ? "吨" : "Tons") : "15" }
                ].map((ind, i) => (
                  <div key={i} className="bg-[#122413] border border-[#a3e635]/20 rounded-xl p-[0.8cqw] text-center shadow-sm">
                    <span className="text-[0.7cqw] font-mono opacity-50 block text-lime-300 uppercase">{ind.name}</span>
                    <span className={`text-[1.1cqw] font-serif font-black ${ind.color} block mt-[0.2cqh]`}>{ind.val}</span>
                  </div>
                ))}
              </div>

              {/* Central Map & Spectrogram Ticker */}
              <div className="grid grid-cols-12 gap-[1cqw] my-[1cqh] flex-1">
                {/* SVG top-down field plan */}
                <div className="col-span-7 bg-[#122413] border border-[#a3e635]/20 rounded-xl p-[1.5cqw] relative flex flex-col justify-between shadow-sm">
                  <span className="text-[0.75cqw] font-mono opacity-50 block text-lime-300">{isZh ? "三区垄沟多点热阻与微生态气场监测图" : "THREE-FIELD TOP-DOWN CROP & SILT SPECTRUM"}</span>
                  
                  <div className="flex-1 relative flex items-center justify-center">
                    <svg className="w-full h-full fill-none stroke-[#a3e635]" viewBox="0 0 240 100">
                      {/* Grid background */}
                      <path d="M 0 50 H 240 M 80 0 V 100 M 160 0 V 100" stroke="#a3e635" strokeWidth="0.5" strokeDasharray="2,4" className="opacity-15" />
                      
                      {/* Soil rotation cycles */}
                      <circle cx="120" cy="50" r="30" stroke="#a3e635" strokeWidth="1" strokeDasharray="3,6" className="opacity-20 animate-spin-slow" />
                      
                      {/* Field nodes glowing */}
                      {[
                        { x: 40, y: 30, t: isZh ? "冬麦 (Zone 1)" : "Winter", active: true },
                        { x: 120, y: 30, t: isZh ? "春播 (Zone 2)" : "Spring", active: beat >= 1 },
                        { x: 200, y: 30, t: isZh ? "休耕 (Zone 3)" : "Fallow", active: beat >= 2 },
                        { x: 40, y: 70, t: "Starch", active: true },
                        { x: 120, y: 70, t: "Proteins", active: beat >= 1 },
                        { x: 200, y: 70, t: "Silt", active: beat >= 2 }
                      ].map((node, idx) => (
                        <g key={idx} className="transition-all duration-500">
                          <circle cx={node.x} cy={node.y} r="12" fill={node.active ? "#1a381c" : "#122413"} stroke={node.active ? "#a3e635" : "#2d4d30"} strokeWidth="1.5" />
                          <text x={node.x - 11} y={node.y + 3} className="text-[7px] font-sans font-black fill-white" stroke="none">{node.t}</text>
                          {node.active && (
                            <circle cx={node.x} cy={node.y} r="14" stroke="#a3e635" strokeWidth="1" className="animate-ping opacity-25" style={{ animationDuration: "4s" }} />
                          )}
                        </g>
                      ))}
                    </svg>
                  </div>
                </div>

                {/* Right side: Event and chemical phase logs */}
                <div className="col-span-5 bg-[#122413] border border-[#a3e635]/20 rounded-xl p-[1.5cqw] flex flex-col justify-between shadow-sm font-mono text-[0.75cqw]">
                  <span className="opacity-50 text-[0.7cqw] uppercase border-b border-[#a3e635]/15 pb-[0.3cqh] block text-lime-300">
                    {isZh ? "大领主城堡庄园大账目" : "MANORIAL HARVEST REPORT"}
                  </span>
                  
                  <div className="flex-1 flex flex-col justify-center gap-[0.5cqh] my-1 leading-none text-lime-200">
                    <div className="text-zinc-500">&gt; SILT_PLOUGHING_READY</div>
                    <div className="text-zinc-400">&gt; Sluice moisture balanced</div>
                    <div className={`transition-opacity ${beat >= 1 ? "opacity-100 text-[#a3e635]" : "opacity-15"}`}>
                      &gt; nodule nitrogen locked
                    </div>
                    <div className={`transition-opacity ${beat >= 2 ? "opacity-100 text-emerald-400 font-extrabold" : "opacity-5"}`}>
                      &gt; CROP ROTATION LOOP SYNC SECURED
                    </div>
                  </div>

                  <div className={`text-[0.65cqw] p-[0.5cqw] rounded bg-emerald-950/40 text-emerald-400 border border-emerald-500/20 flex items-center gap-[0.3cqw] ${beat >= 2 ? "opacity-100" : "opacity-20"}`}>
                    <Shield className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{isZh ? "领主印绶加盖，大宗收获结账完毕" : "Lord stamp applied. Harvest complete."}</span>
                  </div>
                </div>
              </div>

              {/* Bottom system status bar */}
              <div className="text-[0.8cqw] font-mono opacity-60 flex justify-between items-center px-1 border-t border-[#a3e635]/15 pt-[0.6cqh]">
                <span>{isZh ? "中世纪大庄园三区轮换数字化微生态控温研究大纲" : "Medieval Manorial Crop Rotation Micro-ecological System"}</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                  {isZh ? "地力永续大流转绿标高亮通车" : "ROTATION STATUS: OPTIMAL COMPILER"}
                </span>
              </div>
            </div>
          )}

          {/* Sub status footer */}
          <div className="border-t border-[#a3e635]/10 pt-[0.8cqh] flex justify-between text-[0.75cqw] font-mono opacity-50 mt-1">
            <span>{isZh ? "大庄园主三区轮替账册" : "THREE-FIELD ROTATION COMPLIANCE LEDGER_XVI // COMPILING"}</span>
            <span>VERIFICATION CODE: 0x16_CROP_ROTATION</span>
          </div>
        </div>
      </div>

      {/* Decorative Slide Footer */}
      <div className="flex justify-between items-center text-[0.8cqw] font-mono opacity-55 border-t border-[#a3e635]/10 pt-[1.2cqh] z-10">
        <span>© 1086 - 2026 {isZh ? "温切斯特大庄园土地测度学会" : "Winchester Royal Manorial Agricultural Association"}</span>
        <span>{isZh ? "自适应垄沟水流及肥力热阻自对准技术" : "convection soil dynamic feedback controls"}</span>
      </div>
    </div>
  );
}
