import React from "react";
import { Mountain, Compass, Wind, Thermometer, Package, MapPin, CheckCircle, ArrowRight, Activity, Shield } from "lucide-react";

export const getMetadata = (lang) => ({
  id: "09",
  tier: "B",
  name: lang === "zh" ? "茶马古道物资流转" : "The Tea-Horse Road Logistics",
  theme: lang === "zh" ? "滇藏茶马贸易网络" : "Tea-Horse Trade Networks",
  densityLabel: lang === "zh" ? "古道质朴流动" : "Organic Caravan Paths",
  colors: { bg: "bg-[#f5ebd6]", ink: "text-[#3e2723]", panel: "border-[#3e2723]/15", accent: "text-[#8d6e63]" },
  typography: { header: "font-serif", body: "font-sans" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "古道起源与马帮整备" : "Genesis & Caravan Mobilization",
      beats: [
        { id: 1, action: lang === "zh" ? "组织马帮" : "Mobilize Caravan", title: lang === "zh" ? "茶源起锚与马帮集结" : "Caravan Assembly at the Tea Source", body: lang === "zh" ? "于普洱与西双版纳茶山集结精壮骡马，装载紧压紧压茶砖，准备开启千里长征。" : "Assembling strong mules at Xishuangbanna and Pu'er tea hills, loading compressed tea bricks for the grueling journey." },
        { id: 2, action: lang === "zh" ? "整备物资" : "Equip Cargo", title: lang === "zh" ? "高寒高压行装整备" : "High-Altitude Cargo Packing", body: lang === "zh" ? "捆扎茶驮，核配盐巴、铜器及药材，为翻阅高寒雪山和跨越急流做足防护与干粮整备。" : "Packing tea loads securely, balancing salt, copper, and medicinal herbs. Preparing rations for high-altitude cold." },
        { id: 3, action: lang === "zh" ? "祭路启程" : "Blessing Ritual", title: lang === "zh" ? "古道神山祭祀启程" : "Road Shrine Blessing & Departure", body: lang === "zh" ? "在古道起点设坛祭路，敬告天地神山，祈求风调雨顺、商旅平安、人马无折。" : "Setting up road altars, honoring the sacred peak deities, praying for safe passage, good weather, and zero casualties." }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "滇藏与川藏双干线合流" : "Dual Route Convergence",
      beats: [
        { id: 1, action: lang === "zh" ? "北上滇藏" : "Yunnan Route North", title: lang === "zh" ? "滇藏线险途初启" : "Northward along Yunnan Route", body: lang === "zh" ? "沿无量山、苍山东麓北上，茶香在温润的高山峡谷间传导，勾勒出首条古老流动大动脉。" : "Heading north past Wuliang and Cangshan ranges, tea aroma flowing through temperate high-altitude canyons." },
        { id: 2, action: lang === "zh" ? "川蜀合流" : "Sichuan Convergence", title: lang === "zh" ? "川蜀官马大道汇合" : "Convergence of Sichuan-Sichuan Paths", body: lang === "zh" ? "在横断山脉纵深腹地，与来自雅安、打箭炉的川藏贡道汇合，骡马嘶鸣，编织成密集的物资网络。" : "In the deep folds of the Hengduan Mountains, merging with Ya'an tributary routes to form a dense logistics web." },
        { id: 3, action: lang === "zh" ? "统一调度" : "Unified Logistics", title: lang === "zh" ? "重组大马帮调度" : "Unified Caravan Organization", body: lang === "zh" ? "汇聚上百匹驮马，重组大型编队，制定严密的越冬行进表，以应对接下来的冰雪天险。" : "Amalgamating hundreds of mules into large organized fleets with strict winter schedules to survive glacial pass hazards." }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "天险关卡与商税核验" : "Gorges, Passes & Toll Verification",
      beats: [
        { id: 1, action: lang === "zh" ? "强渡江河" : "Cross Gorges", title: lang === "zh" ? "怒江澜沧江滑索强渡" : "Raging Gorges Cable Crossing", body: lang === "zh" ? "面对两岸如刀削的怒江与澜沧江峡谷，马帮架起滑索，小心翼翼地滑渡货驮与人马。" : "Faced with sheer rock walls of Nujiang and Lancang Gorges, rigging strong cable pulleys to slide mules and cargo." },
        { id: 2, action: lang === "zh" ? "商税核验" : "Toll Verification", title: lang === "zh" ? "大研与丽江茶政税关" : "Lijiang & Dayan Customs Verification", body: lang === "zh" ? "进驻丽江大研古镇官办税关，查验关引，课税补给，确保货物在合规保护下合法流转。" : "Entering Lijiang Dayan tax gate, verifying cargo permits, paying local tea duties, and restocking essential mountain gear." },
        { id: 3, action: lang === "zh" ? "飞越垭口" : "Summit Pass", title: lang === "zh" ? "极高海拔雪山垭口突围" : "Conquering High Snow Passes", body: lang === "zh" ? "顶着稀薄空气，在暴风雪来临前咬牙翻越海拔4800米的梅里垭口，冰霜冻结马鬃，气魄直冲云霄。" : "With gasping breaths, conquering the 4,800m Meili pass before blizzard strikes, ice freezing manes in sublime mountain trials." }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "高海拔环境与负荷监测" : "Altitude & Cargo Telemetry",
      beats: [
        { id: 1, action: lang === "zh" ? "监测海拔" : "Scan Altitude", title: lang === "zh" ? "古道气压纵剖面监测" : "Route Profile Elevation Telemetry", body: lang === "zh" ? "对古道急剧攀升的海拔、骤降的气压进行剖面测绘，为货驮防潮防损提供关键科学指引。" : "Mapping high-altitude pressure drops, charting profile curves to safeguard sensitive compressed tea from damp." },
        { id: 2, action: lang === "zh" ? "均摊负荷" : "Balance Loads", title: lang === "zh" ? "驮马负重柔性调配" : "Dynamic Animal Load Allocation", body: lang === "zh" ? "根据山路陡峭度微调每头驮马的背负配比，保护畜力、减轻折损，实现人马长效耐力。" : "Rebalancing load shares per mule based on incline severity, preserving vital animal endurance and reducing wear." },
        { id: 3, action: lang === "zh" ? "评估体能" : "Assess Vitals", title: lang === "zh" ? "马帮体能与极限环境评估" : "Caravan Vitals Ledger Check", body: lang === "zh" ? "记录每日行军里程、寒流抗性以及体能储备，维持物资运力，保证供应链大动脉绝不断绝。" : "Logging daily milages, cold tolerance, and physical reserves, protecting high-altitude supply capacity." }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "拉萨主城接关与茶马贸易" : "Lhasa Arrival & Sacred Exchange",
      beats: [
        { id: 1, action: lang === "zh" ? "抵藏接关" : "Arrive Lhasa", title: lang === "zh" ? "圣城河谷神圣入关" : "Lhasa River Valley Entry", body: lang === "zh" ? "马帮历时数月，终于跨越群山降临拉萨河谷，圣城金顶在夕阳下闪耀，高原钟声飘扬。" : "Traveling for months, the caravan finally descends into Lhasa valley. Golden spires gleaming as prayer bells ring." },
        { id: 2, action: lang === "zh" ? "开市易马" : "Barter Marketplace", title: lang === "zh" ? "布达拉宫前茶马盛市" : "Barter Marketplace at Potala", body: lang === "zh" ? "开启大宗交易，以中原极品普洱、红茶易换藏区彪悍矫健的战马，促成华夏民族深度融合。" : "Commencing massive barter trade: exchanging superb Yunnan Pu'er tea for prized Tibetan warhorses to fuel national guard." },
        { id: 3, action: lang === "zh" ? "结算合规" : "Logistics Close", title: lang === "zh" ? "万里茶路税司关防印信" : "The Tea-Horse Road Logistics Ledger Close", body: lang === "zh" ? "拉萨税司于茶引账册盖印，结清最后一笔物耗折损，万里大动脉无损合规流转宣告圆满落幕。" : "Lhasa officials apply terminal seal to cargo ledgers, writing off logs, confirming perfect high-fidelity delivery." }
      ]
    }
  ]
});

export default function Style09({ scene, beat, language, isThumbnail }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];
  const isZh = language === "zh";

  // Active check-points based on beats for map and altitude
  const getActiveNodes = () => {
    if (scene === 1) return [0];
    if (scene === 2) return [0, 1];
    if (scene === 3) return [0, 1, 2];
    if (scene === 4) return [0, 1, 2, 3];
    return [0, 1, 2, 3, 4];
  };

  const activeNodes = getActiveNodes();

  return (
    <div className={`w-full h-full flex flex-col justify-between p-[3.5cqw] relative ${meta.colors.bg} ${meta.colors.ink} select-none overflow-hidden`} key={`${scene}-${beat}`}>
      {/* Background Mountain silhouettes */}
      <div className="absolute inset-x-0 bottom-0 h-[30cqh] opacity-[0.06] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <path d="M0,150 L150,60 L280,120 L450,30 L600,140 L780,50 L1000,160 L1000,200 L0,200 Z" fill="currentColor" />
          <path d="M0,180 L100,120 L250,160 L380,80 L520,150 L700,90 L900,170 L1000,140 L1000,200 L0,200 Z" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      {/* Slide Header */}
      <div className="flex justify-between items-start border-b border-[#3e2723]/10 pb-[2cqh] z-10">
        <div>
          <span className="font-mono text-[1.1cqw] tracking-widest uppercase opacity-60 flex items-center gap-[0.5cqw]">
            <Compass className="w-[1.2cqw] h-[1.2cqw] animate-spin-slow" />
            {meta.theme}
          </span>
          <h1 className="text-[3cqw] font-serif font-black tracking-tight mt-[0.5cqh]">
            {currentScene.title}
          </h1>
        </div>
        <div className="text-right font-mono">
          <div className="text-[1.2cqw] font-bold text-[#8d6e63]">
            {isZh ? "滇藏商道 · 机械物资流" : "Yun-Tib Logistics Flow"}
          </div>
          <div className="text-[0.9cqw] opacity-50 uppercase tracking-widest mt-[0.5cqh]">
            {meta.densityLabel}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-12 gap-[2.5cqw] flex-1 my-[2.5cqh] items-stretch z-10">
        {/* Left Column: Rich Copywriting Lede */}
        <div className="col-span-5 flex flex-col justify-between pr-[1cqw]">
          <div className="flex flex-col gap-[1.5cqh]">
            <span className="font-mono text-[1cqw] tracking-widest uppercase text-[#8d6e63] font-bold flex items-center gap-[0.5cqw]">
              <span className="w-[0.8cqw] h-[0.8cqw] bg-[#3e2723] rounded-full animate-ping" />
              {currentBeat.action}
            </span>
            <h2 className="text-[2.2cqw] font-serif font-black leading-tight">
              {currentBeat.title}
            </h2>
            <p className="text-[1.1cqw] leading-[1.6] opacity-80 font-sans">
              {currentBeat.body}
            </p>
          </div>

          {/* Dynamic Cargo / Mile Status Tracker */}
          <div className="bg-[#f0e4cf] border border-[#3e2723]/10 rounded-xl p-[1.5cqw] flex flex-col gap-[1.2cqh]">
            <div className="flex justify-between items-center border-b border-[#3e2723]/10 pb-[0.8cqh]">
              <span className="text-[0.9cqw] font-mono font-bold tracking-wider opacity-60">
                {isZh ? "马帮实时负荷" : "CARAVAN TELEMETRY"}
              </span>
              <Activity className="w-[1cqw] h-[1cqw] text-[#8d6e63] animate-pulse" />
            </div>
            <div className="grid grid-cols-2 gap-[1cqw] text-[0.95cqw]">
              <div>
                <span className="opacity-50 text-[0.8cqw] block font-mono">{isZh ? "载重 (Pu'er Tea)" : "TEA PAYLOAD"}</span>
                <span className="font-mono font-extrabold text-[1.1cqw]">
                  {scene === 1 ? "1,200 kg" : scene === 2 ? "4,500 kg" : scene === 3 ? "3,800 kg" : "8,200 kg"}
                </span>
              </div>
              <div>
                <span className="opacity-50 text-[0.8cqw] block font-mono">{isZh ? "马帮员额" : "CARAVAN SIZE"}</span>
                <span className="font-mono font-extrabold text-[1.1cqw]">
                  {scene === 1 ? "12 " + (isZh ? "匹" : "Mules") : scene === 2 ? "45 " + (isZh ? "匹" : "Mules") : "90 " + (isZh ? "匹" : "Mules")}
                </span>
              </div>
            </div>
            {/* Health / Route Progress Bar */}
            <div className="flex flex-col gap-[0.4cqh] mt-[0.5cqh]">
              <div className="flex justify-between text-[0.75cqw] font-mono opacity-60">
                <span>{isZh ? "古道物资流通进度" : "ROUTE COMPILATION PROGRESS"}</span>
                <span>{scene * 20 + beat * 6}%</span>
              </div>
              <div className="w-full h-[0.5cqh] bg-[#3e2723]/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#3e2723] rounded-full transition-all duration-700"
                  style={{ width: `${scene * 20 + beat * 6}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Metaphor Visualization (Bespoke per scene density) */}
        <div className="col-span-7 bg-[#fbf7ee] border border-[#3e2723]/15 rounded-2xl p-[2cqw] flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(#3e2723_1px,transparent_1px)] [background-size:16px_16px]" />

          {scene === 1 && (
            // Scene 1 (Ultralight): 1 giant striking mountain path / organic caravan genesis curve
            <div className="flex-1 flex flex-col items-center justify-center relative">
              <svg className="w-[85%] h-[55%] stroke-[#3e2723] fill-none" viewBox="0 0 400 150">
                {/* Master Organic Path */}
                <path 
                  d="M 20 120 C 100 120, 150 40, 250 80 C 320 100, 350 30, 380 30" 
                  strokeWidth="3" 
                  strokeDasharray="4,4"
                  className="opacity-20"
                />
                {/* Active animated path trace */}
                <path 
                  d="M 20 120 C 100 120, 150 40, 250 80 C 320 100, 350 30, 380 30" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                  className="stroke-[#3e2723] transition-all duration-1000"
                  strokeDasharray="400"
                  strokeDashoffset={400 - (beat + 1) * 133}
                />
                {/* Altitude indicators / Checkpoints */}
                <circle cx="20" cy="120" r="5" fill="#3e2723" />
                <circle cx="250" cy="80" r="5" fill="#3e2723" className={beat >= 1 ? "opacity-100" : "opacity-30"} />
                <circle cx="380" cy="30" r="5" fill="#3e2723" className={beat >= 2 ? "opacity-100" : "opacity-30"} />

                {/* Pack horse moving along path */}
                <g 
                  className="transition-all duration-1000"
                  style={{
                    transform: beat === 0 ? "translate(20px, 120px)" : beat === 1 ? "translate(250px, 80px)" : "translate(380px, 30px)"
                  }}
                >
                  <circle cx="0" cy="0" r="14" fill="#3e2723" className="animate-pulse" />
                  <Mountain className="w-5 h-5 text-[#fbf7ee] absolute -top-2.5 -left-2.5" />
                </g>
              </svg>

              <div className="text-center font-serif text-[1.1cqw] mt-[2cqh]">
                <p className="font-extrabold">{isZh ? "千里茶路，始于足下" : "A thousand-mile trek begins with a single tea pack"}</p>
                <p className="text-[0.95cqw] font-sans opacity-60 mt-[0.5cqh] font-mono">
                  {isZh ? "西双版纳易武茶山 · 海拔 800m" : "Yiwu Tea Mountain · Alt. 800m"}
                </p>
              </div>
            </div>
          )}

          {scene === 2 && (
            // Scene 2 (Light): Symmetrical dual paths (滇藏 + 川藏) merging into center
            <div className="flex-1 flex flex-col justify-between my-[1cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex items-center gap-[0.5cqw]">
                <Compass className="w-[1cqw] h-[1cqw]" />
                {isZh ? "滇藏/川藏双干线对流图" : "YUN-TIB & SICHUAN-TIB FLOWS"}
              </div>

              <div className="flex-1 relative flex items-center justify-center">
                <svg className="w-[90%] h-[75%] stroke-[#3e2723] fill-none" viewBox="0 0 400 150">
                  {/* Yunnan-Tibet Route Line */}
                  <path d="M 20 30 C 100 30, 150 75, 200 75" strokeWidth="2.5" className="opacity-40" />
                  <path d="M 20 30 C 100 30, 150 75, 200 75" strokeWidth="2.5" strokeDasharray="200" strokeDashoffset={beat >= 1 ? 0 : 200} className="transition-all duration-1000 stroke-[#3e2723]" />
                  
                  {/* Sichuan-Tibet Route Line */}
                  <path d="M 20 120 C 100 120, 150 75, 200 75" strokeWidth="2.5" className="opacity-40" />
                  <path d="M 20 120 C 100 120, 150 75, 200 75" strokeWidth="2.5" strokeDasharray="200" strokeDashoffset={beat >= 2 ? 0 : 200} className="transition-all duration-1000 stroke-[#3e2723]" />

                  {/* Merged Route */}
                  <path d="M 200 75 H 380" strokeWidth="3" className="opacity-20" />
                  <path d="M 200 75 H 380" strokeWidth="3" strokeDasharray="180" strokeDashoffset={beat >= 2 ? 0 : 180} className="transition-all duration-1000 stroke-[#8d6e63] stroke-dashed" />

                  {/* Junction point node */}
                  <g transform="translate(200, 75)" className={beat >= 2 ? "scale-110" : "scale-100 opacity-60"}>
                    <circle cx="0" cy="0" r="10" fill="#3e2723" />
                    <span className="text-[0.6cqw] text-[#fbf7ee] font-mono absolute -top-[5px] -left-[8px]">★</span>
                  </g>

                  {/* Node Labels */}
                  <text x="30" y="22" className="text-[7px] font-mono fill-current" stroke="none">{isZh ? "滇藏线 (云南普洱)" : "Yunnan Route (Pu'er)"}</text>
                  <text x="30" y="132" className="text-[7px] font-mono fill-current" stroke="none">{isZh ? "川藏线 (四川雅安)" : "Sichuan Route (Ya'an)"}</text>
                  <text x="220" y="70" className="text-[8px] font-serif font-black fill-current" stroke="none">{isZh ? "合流：昌都节点" : "Merge: Chamdo Hub"}</text>
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-[1cqw] border-t border-[#3e2723]/10 pt-[1.2cqh] text-[0.9cqw] font-mono">
                <div>
                  <span className="opacity-60">{isZh ? "云南线马帮:" : "Yunnan Caravan:"}</span>
                  <span className="ml-[0.5cqw] font-bold">{beat >= 1 ? "ACTIVE" : "STANDBY"}</span>
                </div>
                <div>
                  <span className="opacity-60">{isZh ? "四川线马帮:" : "Sichuan Caravan:"}</span>
                  <span className="ml-[0.5cqw] font-bold">{beat >= 2 ? "SYNCED" : "HOLD"}</span>
                </div>
              </div>
            </div>
          )}

          {scene === 3 && (
            // Scene 3 (Standard): 3 chronological mountain passes/checkpoints
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex justify-between">
                <span>{isZh ? "怒江天险、丽江关卡与梅里垭口" : "CHALLENGING STATIONS"}</span>
                <span className="animate-pulse">● ALTITUDE TELEMETRY</span>
              </div>

              <div className="grid grid-cols-3 gap-[1.2cqw] my-[2cqh] flex-1">
                {[
                  { name: isZh ? "澜沧江索道" : "Lancang Gorge", alt: "1,900m", icon: "⛓️", desc: isZh ? "高空滑索横渡人马" : "Cable pulleys over rapids", active: true },
                  { name: isZh ? "丽江大研税关" : "Dayan Toll", alt: "2,400m", icon: "📜", desc: isZh ? "课税检验茶引印防" : "Custom manifest verification", active: beat >= 1 },
                  { name: isZh ? "梅里雪山垭口" : "Meili Pass", alt: "4,800m", icon: "🏔️", desc: isZh ? "征服极寒雪线缺氧" : "Gasping through frozen snow", active: beat >= 2 }
                ].map((station, i) => (
                  <div key={i} className={`p-[1.2cqw] rounded-xl border flex flex-col justify-between transition-all duration-500 bg-white ${
                    station.active 
                      ? "border-[#3e2723] shadow-md scale-100" 
                      : "border-slate-200 opacity-20 scale-95"
                  }`}>
                    <div className="flex justify-between items-start">
                      <span className="text-[1.8cqw]">{station.icon}</span>
                      <span className="text-[0.8cqw] font-mono font-bold bg-[#3e2723]/10 text-[#3e2723] px-[0.5cqw] py-[0.1cqh] rounded">
                        {station.alt}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-serif font-black text-[1cqw] mt-[1cqh]">{station.name}</h4>
                      <p className="text-[0.75cqw] text-zinc-600 mt-[0.5cqh] font-sans leading-tight">{station.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-[0.8cqw] font-mono opacity-50 flex items-center justify-between">
                <span>{isZh ? "重力重组与高寒检验" : "GRAVITY RECOMPOSITIONS"}</span>
                <span className="text-right text-[#8d6e63] font-bold">
                  {beat === 0 ? "STAGE 1 COMPLETE" : beat === 1 ? "STAGE 2 CHECKED" : "ALTITUDE PEAK REACHED"}
                </span>
              </div>
            </div>
          )}

          {scene === 4 && (
            // Scene 4 (Dense): 2x2 altitude mapping & load balancing telemetry
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex justify-between">
                <span>{isZh ? "马帮高海拔环境与载重遥测板" : "CARAVAN ENVIRONMENT & WEIGHT SENSORS"}</span>
                <span>{isZh ? "实时自检中" : "REAL-TIME SELF-CHECK"}</span>
              </div>

              <div className="grid grid-cols-2 gap-[1.2cqw] my-[1.2cqh] flex-1">
                {[
                  { title: isZh ? "古道断面气压测绘" : "ALTIMETRIC BARO PROFILE", val: "540 hPa", info: isZh ? "极低压氧气稀薄" : "Oxygen saturation 58%", icon: Compass, active: true },
                  { title: isZh ? "驮背重力负荷分配" : "MULE GRAVITY BALANCING", val: "85 kg / mule", info: isZh ? "载荷平稳，安全行驶" : "Load balanced safely", icon: Package, active: beat >= 1 },
                  { title: isZh ? "极寒防潮环境传感器" : "GLACIAL MOISTURE MONITOR", val: "RH 14%", info: isZh ? "防止茶砖发潮质变" : "Dry air protecting tea", icon: Wind, active: beat >= 1 },
                  { title: isZh ? "驮马体能极限自检" : "ANIMAL VITALS LEDGER", val: isZh ? "体能良好 无伤损" : "98% Vitals Positive", icon: Activity, active: beat >= 2 }
                ].map((item, i) => (
                  <div key={i} className={`p-[1.2cqw] rounded-xl border bg-white flex justify-between items-center transition-all duration-500 ${
                    item.active ? "border-[#3e2723] shadow-sm" : "border-slate-200 opacity-20"
                  }`}>
                    <div className="flex flex-col gap-[0.5cqh]">
                      <span className="text-[0.8cqw] font-mono font-bold opacity-60 uppercase">{item.title}</span>
                      <span className="text-[1.5cqw] font-serif font-black">{item.val}</span>
                      <span className="text-[0.75cqw] text-zinc-500 font-sans">{item.info}</span>
                    </div>
                    <item.icon className="w-[2.2cqw] h-[2.2cqw] text-[#8d6e63]" />
                  </div>
                ))}
              </div>

              <div className="w-full bg-[#f0e4cf] h-[0.4cqh] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#3e2723] transition-all duration-700" 
                  style={{ width: beat === 0 ? "35%" : beat === 1 ? "70%" : "100%" }}
                />
              </div>
            </div>
          )}

          {scene === 5 && (
            // Scene 5 (High Density / Extreme): Master Yunnan-Tibet Trade Terminal Dashboard
            <div className="flex-1 flex flex-col justify-between my-[0.2cqh]">
              {/* Telemetry quick indicators */}
              <div className="grid grid-cols-4 gap-[0.8cqw]">
                {[
                  { name: isZh ? "运输总里程" : "TOTAL TREK", val: "1,840 km", color: "text-[#3e2723]" },
                  { name: isZh ? "商税合规度" : "COMPLIANCE", val: "100%", color: "text-emerald-700" },
                  { name: isZh ? "驮马存活率" : "MULE SURVIVAL", val: "97.8%", color: "text-emerald-700" },
                  { name: isZh ? "战马兑换量" : "HORSES GAINED", val: beat >= 2 ? "124 " + (isZh ? "匹" : "Horses") : beat >= 1 ? "42 " + (isZh ? "匹" : "Horses") : "0" }
                ].map((ind, i) => (
                  <div key={i} className="bg-white border border-[#3e2723]/15 rounded-xl p-[0.8cqw] text-center shadow-sm">
                    <span className="text-[0.7cqw] font-mono opacity-50 block uppercase">{ind.name}</span>
                    <span className={`text-[1.1cqw] font-serif font-black ${ind.color} block mt-[0.2cqh]`}>{ind.val}</span>
                  </div>
                ))}
              </div>

              {/* Central Map & Barter Ledger Block */}
              <div className="grid grid-cols-12 gap-[1cqw] my-[1cqh] flex-1">
                {/* SVG Route Map Tracking */}
                <div className="col-span-7 bg-white border border-[#3e2723]/15 rounded-xl p-[1cqw] relative flex flex-col justify-between shadow-sm">
                  <span className="text-[0.75cqw] font-mono opacity-50 block">{isZh ? "古道行军路线动态实录" : "DYNAMIC TREK MAP"}</span>
                  
                  <div className="flex-1 relative flex items-center justify-center">
                    <svg className="w-full h-full stroke-[#3e2723] fill-none" viewBox="0 0 240 100">
                      {/* Altitude background mountains */}
                      <path d="M 10 90 L 50 60 L 90 85 L 140 30 L 190 75 L 230 40" strokeWidth="1" strokeDasharray="2,2" className="opacity-15" />
                      
                      {/* River Lancang line */}
                      <path d="M 85 10 L 85 90" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3,3" className="opacity-40 animate-pulse" />

                      {/* Main Trade Route */}
                      <path d="M 15 80 L 65 75 L 115 50 L 165 40 L 225 35" strokeWidth="2.5" className="opacity-30" />
                      <path d="M 15 80 L 65 75 L 115 50 L 165 40 L 225 35" strokeWidth="2.5" strokeDasharray="300" strokeDashoffset={240 - activeNodes.length * 48} className="transition-all duration-1000 stroke-[#8d6e63]" />

                      {/* Route station dots */}
                      {[
                        { x: 15, y: 80, name: isZh ? "普洱" : "Pu'er" },
                        { x: 65, y: 75, name: isZh ? "大理" : "Dali" },
                        { x: 115, y: 50, name: isZh ? "丽江" : "Lijiang" },
                        { x: 165, y: 40, name: isZh ? "昌都" : "Chamdo" },
                        { x: 225, y: 35, name: isZh ? "拉萨" : "Lhasa" }
                      ].map((node, idx) => {
                        const isNodeActive = activeNodes.includes(idx);
                        return (
                          <g key={idx} className="transition-all duration-500">
                            <circle 
                              cx={node.x} 
                              cy={node.y} 
                              r={isNodeActive ? 4 : 2} 
                              fill={isNodeActive ? "#3e2723" : "#cbd5e1"} 
                              className={isNodeActive && idx === activeNodes.length - 1 ? "animate-pulse" : ""}
                            />
                            <text x={node.x - 10} y={node.y - 6} className="text-[6px] font-serif font-bold fill-current" stroke="none">{node.name}</text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                </div>

                {/* Right Side: Ledger Transactions */}
                <div className="col-span-5 bg-white border border-[#3e2723]/15 rounded-xl p-[1cqw] flex flex-col justify-between shadow-sm font-mono text-[0.75cqw]">
                  <span className="opacity-50 text-[0.7cqw] uppercase border-b border-[#3e2723]/10 pb-[0.3cqh] block">
                    {isZh ? "拉萨市肆 · 以茶易马账目" : "BARTER EXCHANGE JOURNAL"}
                  </span>
                  
                  <div className="flex-1 flex flex-col justify-center gap-[0.5cqh] my-1">
                    <div className="flex justify-between">
                      <span className="opacity-60">{isZh ? "紧压茶砖:" : "Compressed Tea:"}</span>
                      <span className="font-bold">8,200 kg</span>
                    </div>
                    <div className={`flex justify-between transition-opacity ${beat >= 1 ? "opacity-100" : "opacity-20"}`}>
                      <span className="opacity-60">{isZh ? "战马兑换率:" : "Exchange Rate:"}</span>
                      <span className="font-bold">65kg / {isZh ? "马" : "Horse"}</span>
                    </div>
                    <div className={`flex justify-between border-t border-dashed border-[#3e2723]/15 pt-[0.5cqh] text-[#3e2723] font-extrabold ${beat >= 2 ? "opacity-100" : "opacity-20"}`}>
                      <span>{isZh ? "实收马匹:" : "Horses Delivered:"}</span>
                      <span className="text-[0.8cqw]">124 {isZh ? "匹健壮战马" : "Warhorses"}</span>
                    </div>
                  </div>

                  <div className={`text-[0.65cqw] p-[0.5cqw] rounded bg-emerald-50 text-emerald-800 flex items-center gap-[0.3cqw] ${beat >= 2 ? "opacity-100" : "opacity-20"}`}>
                    <Shield className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{isZh ? "税司印章已加盖，大宗结算完毕" : "Ledger finalized with Lhasa Seal"}</span>
                  </div>
                </div>
              </div>

              {/* Status footer with log tickers */}
              <div className="text-[0.8cqw] font-mono opacity-60 flex justify-between items-center px-1 border-t border-[#3e2723]/10 pt-[0.6cqh]">
                <span>{isZh ? "大宗大循环 · 滇藏茶马贸易枢纽" : "CHINA TEA-HORSE HIGH-ALTITUDE LOGISTICS CHANNEL"}</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-ping" />
                  {isZh ? "物流合规绿灯已签发" : "TELEMETRY STATUS: OPTIMAL"}
                </span>
              </div>
            </div>
          )}

          {/* Sub status footer showing active scene and beat progress */}
          <div className="border-t border-[#3e2723]/10 pt-[0.8cqh] flex justify-between text-[0.75cqw] font-mono opacity-50 mt-1">
            <span>{isZh ? "滇藏物资流转网络 · 关防" : "YUN-TIBET CARAVAN LEDGER // STABLE FLOW"}</span>
            <span>VERIFICATION CODE: 0x09_B_FLOW</span>
          </div>
        </div>
      </div>

      {/* Decorative Slide Footer */}
      <div className="flex justify-between items-center text-[0.8cqw] font-mono opacity-55 border-t border-[#3e2723]/10 pt-[1.2cqh] z-10">
        <span>© 1085 - 2026 {isZh ? "滇藏茶马互市管理局" : "The Tea-Horse Road Logistics Bureau"}</span>
        <span>{isZh ? "横断山脉高海拔环境适应型系统" : "High-Altitude Resilient Logistics Blueprint"}</span>
      </div>
    </div>
  );
}
