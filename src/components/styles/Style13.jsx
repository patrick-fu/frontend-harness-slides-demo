import React from "react";
import { Compass, Ship, Wind, MapPin, Activity, Shield, Anchor, Layers, HelpCircle, CheckCircle } from "lucide-react";

export const getMetadata = (lang) => ({
  id: "13",
  tier: "B",
  name: lang === "zh" ? "奥德修斯的归家航线" : "The Odyssey Navigation",
  theme: lang === "zh" ? "荷马史诗地理航线重建" : "Homer's Odyssey Reconstruction",
  densityLabel: lang === "zh" ? "海图拓扑流线" : "Mythological Marine Routing",
  colors: { bg: "bg-[#020d20]", ink: "text-[#e0f2fe]", panel: "border-[#38bdf8]/15", accent: "text-[#38bdf8]" },
  typography: { header: "font-serif", body: "font-sans" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "特洛伊解缆与爱琴顺风" : "Troy Departure & Aegean Winds",
      beats: [
        { id: 1, action: lang === "zh" ? "解缆起航" : "Set Sail", title: lang === "zh" ? "别特洛伊焦土扬帆" : "Troy Cast-off & Course Set", body: lang === "zh" ? "奥德修斯统率十二艘黑船解缆，作别特洛伊焦土，满载战利品，直指故乡伊萨卡。" : "Odysseus commands twelve black vessels to untie, leaving Troy's ashes. Fully laden with spoils, pointing direct to Ithaca." },
        { id: 2, action: lang === "zh" ? "顺风捕获" : "Catch Winds", title: lang === "zh" ? "爱琴北风张满巨帆" : "Aegean Gale Sails Full", body: lang === "zh" ? "张满粗麻巨帆，精确捕获爱琴海强劲北风，绕开希腊半岛南端暗礁，开启漫长归途。" : "Hoisting heavy hemp sails, catching the roaring Aegean north wind to clear the treacherous rocky shallows." },
        { id: 3, action: lang === "zh" ? "航向常锁" : "Course Lock", title: lang === "zh" ? "归航初段航向锁定" : "Initial Voyage Phase Lock", body: lang === "zh" ? "锁定首个海里象限速度与仰角，使十二艘战船排成严整雁形，消除无谓的偏航磨损。" : "Locking initial nautical speeds and angles, aligning twelve hulls into close convoy formatting to minimize drift." }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "奇孔部落突围与食莲异境" : "Cicones Conflict & Lotus-Eaters Sieve",
      beats: [
        { id: 1, action: lang === "zh" ? "海岸突围" : "Cicones Escape", title: lang === "zh" ? "奇孔部落岸遭遇突围" : "Escape from Cicones Coast", body: lang === "zh" ? "舰队登陆伊斯马罗斯突遭奇孔部族猛烈反击，被迫在鲜血与狂风中砍断锚链，强行突围。" : "Sacking Ismarus, the fleet is struck by fierce local tribal counter-attacks, slashing anchors in wind and blood." },
        { id: 2, action: lang === "zh" ? "强索回船" : "Lotus Recovery", title: lang === "zh" ? "食莲忘忧海岛强索水兵" : "Lotus-Eaters Amnesia Extraction", body: lang === "zh" ? "风暴将舰队吹至食莲异岛，强行拖回并捆绑数名误食魔莲、彻底遗忘故土的沉沦水手。" : "Roaring gales drift ships to Lotus-Eaters isle. Forcefully drag-extracting sailors who ate sweet flowers of amnesia." },
        { id: 3, action: lang === "zh" ? "航线矫正" : "Re-align Fleet", title: lang === "zh" ? "双向偏航纠偏与归一" : "Dual Deflection Re-alignment", body: lang === "zh" ? "重估受洋流和忘忧魔花干扰的严重航差，校准舵角，促使散落的两部船队重新合并回主航道。" : "Re-evaluating nautical deviations caused by lotus drift, resetting rudders to re-converge the convoy." }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "独眼巨人、女妖与海怪天险" : "Myths & Gorges (Sirens & Scylla)",
      beats: [
        { id: 1, action: lang === "zh" ? "巨人突围" : "Blind Cyclops", title: lang === "zh" ? "独眼巨人洞穴神勇突围" : "Polyphemus Cave Outbreak", body: lang === "zh" ? "智盲海神巨子波吕斐摩斯，躲在羊腹下混出石穴，在巨石轰击的海浪中拼死夺路出海。" : "Blinding Poseidon's giant son Polyphemus, slipping past herd gates under sheep bellies under massive rock attacks." },
        { id: 2, action: lang === "zh" ? "缚桅渡歌" : "Sirens Mast Binding", title: lang === "zh" ? "塞壬女妖声学极性封锁" : "Sirens Siren Vocal Sieve", body: lang === "zh" ? "全员封蜡塞耳，唯奥德修斯自缚于主桅之上，咬牙安渡妖歌勾魂频段，保全舰队安宁。" : "Waxing all ears. Odysseus binds himself to the central mast, enduring the beautiful, deathly allure of Siren songs." },
        { id: 3, action: lang === "zh" ? "惊险越漩" : "Scylla Narrow", title: lang === "zh" ? "斯库拉与卡律布狄斯隘口" : "Conquering Scylla & Charybdis", body: lang === "zh" ? "于狂噬深渊的卡律布狄斯大漩涡和六头海怪斯库拉的断崖间精准操舵，惊险滑渡狭窄死线。" : "Steering precisely through Charybdis's abyssal whirlpool and Scylla's cliffs, surviving the narrow corridor of death." }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "海图测绘与舰队状态监控" : "Hydrology & Marine Fleet Telemetry",
      beats: [
        { id: 1, action: lang === "zh" ? "洋流水文" : "Map Currents", title: lang === "zh" ? "墨西拿海峡水动力测绘" : "Messina Strait Flow Mapping", body: lang === "zh" ? "测算海峡急流系数、隐藏浅滩及暴风雨风圈，为木船龙骨防震提供高维动态海图数据。" : "Mapping Messina current speeds, dynamic sandbars, and wind circle cells to insulate wooden hulls from stress." },
        { id: 2, action: lang === "zh" ? "均摊粮水" : "Balance Water", title: lang === "zh" ? "舰队淡水麦粒柔性均衡" : "Adaptive Freshwater Allocation", body: lang === "zh" ? "基于各船只的折损状况，重构淡水桶和脱水大麦的配重配比，维持舰队在高海况下的长效生存率。" : "Rebalancing weights of freshwater barrels and barley grains across remaining hulls to sustain sea endurance." },
        { id: 3, action: lang === "zh" ? "海况自检" : "Fleet Integrity", title: lang === "zh" ? "木船龙骨与水手耐渴度清算" : "Vessel Structural Proof Ledger", body: lang === "zh" ? "核算风浪磨耗指数、木料抗蚀力及船员精力流，掌控归航储备，确保回归主脉绝不断绝。" : "Logging wave fatigue indices, timber rot rates, and sailor hydration curves, securing the final voyage limits." }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "伊萨卡圣岛回归与王位重夺" : "Ithaca Arrival & Crown Reclaim",
      beats: [
        { id: 1, action: lang === "zh" ? "孤舟抵港" : "Arrive Ithaca", title: lang === "zh" ? "圣港海湾孤身涉水抵港" : "Solo Return to Ithaca Bay", body: lang === "zh" ? "漂泊十年，伴随全员牺牲，奥德修斯终乘神舟涉水降临故里，夕阳斜照，沙鸥鸣叫。" : "Wandering ten years, all comrades lost. Odysseus alone lands on Ithaca's cliffs as prayer gulls call." },
        { id: 2, action: lang === "zh" ? "射斧除逆" : "Arrow Siege", title: lang === "zh" ? "神弓满弦箭穿十二斧孔" : "Suitor Bow & Arrow Siege", body: lang === "zh" ? "乔装归府，拉开尘封神弓，一箭穿通十二铜斧孔，神勇剿除篡逆求婚之众，收复王庭。" : "Disguised as beggar, stringing his epic bow. Shoots through twelve axe rings, exterminating lawless suitors." },
        { id: 3, action: lang === "zh" ? "史诗结账" : "Odyssey Close", title: lang === "zh" ? "荷马史诗归家卷宗终极归档" : "Homeric Epic Ledger Close", body: lang === "zh" ? "向雅典娜神庙奉纳战弓，大宗物资折损与回归里程全面合规审计结案，重归圣岛和平。" : "Vowing peace to Athena, closing the massive wanderer ledgers. The Odyssey catalog is sealed with gold stars." }
      ]
    }
  ]
});

export default function Style13({ scene, beat, language, isThumbnail }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];
  const isZh = language === "zh";

  // Coordinates for paths & ship positions based on scene/beat
  const getShipCoords = () => {
    if (scene === 1) return { x: 30, y: 70 };
    if (scene === 2) return { x: 80, y: 35 };
    if (scene === 3) return { x: 130, y: 65 };
    if (scene === 4) return { x: 180, y: 40 };
    return { x: 220, y: 75 }; // Ithaca Arrived
  };

  const shipPos = getShipCoords();

  return (
    <div className={`w-full h-full flex flex-col justify-between p-[3.5cqw] relative ${meta.colors.bg} ${meta.colors.ink} select-none overflow-hidden`} key={`${scene}-${beat}`}>
      {/* Background waves pattern (Greek nautical motifs) */}
      <div className="absolute inset-x-0 bottom-0 h-[15cqh] opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path d="M 0 50 Q 50 30, 100 50 T 200 50 T 300 50 T 400 50 T 500 50 T 600 50 T 700 50 T 800 50 T 900 50 T 1000 50 L 1000 100 L 0 100 Z" fill="currentColor" />
          <path d="M 0 70 Q 50 50, 100 70 T 200 70 T 300 70 T 400 70 T 500 70 T 600 70 T 700 70 T 800 70 T 900 70 T 1000 70 L 1000 100 L 0 100 Z" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      {/* Slide Header */}
      <div className="flex justify-between items-start border-b border-[#38bdf8]/15 pb-[2cqh] z-10">
        <div>
          <span className="font-mono text-[1.1cqw] tracking-widest uppercase opacity-60 flex items-center gap-[0.5cqw]">
            <Compass className="w-[1.2cqw] h-[1.2cqw] text-[#38bdf8] animate-spin-slow" />
            {meta.theme}
          </span>
          <h1 className="text-[3cqw] font-serif font-black tracking-tight mt-[0.5cqh]">
            {currentScene.title}
          </h1>
        </div>
        <div className="text-right font-mono">
          <div className="text-[1.2cqw] font-bold text-[#38bdf8]">
            {isZh ? "奥德赛海图拓扑流" : "Odyssey Voyage Planner"}
          </div>
          <div className="text-[0.9cqw] opacity-50 uppercase tracking-widest mt-[0.5cqh]">
            {meta.densityLabel}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-12 gap-[2.5cqw] flex-1 my-[2.5cqh] items-stretch z-10">
        {/* Left Column: Rich copy regarding journey */}
        <div className="col-span-5 flex flex-col justify-between pr-[1cqw]">
          <div className="flex flex-col gap-[1.5cqh]">
            <span className="font-mono text-[1cqw] tracking-widest uppercase text-[#38bdf8] font-bold flex items-center gap-[0.5cqw]">
              <span className="w-[0.8cqw] h-[0.8cqw] bg-[#38bdf8] rounded-full animate-ping" />
              {currentBeat.action}
            </span>
            <h2 className="text-[2.2cqw] font-serif font-black leading-tight">
              {currentBeat.title}
            </h2>
            <p className="text-[1.1cqw] leading-[1.6] opacity-80 font-sans">
              {currentBeat.body}
            </p>
          </div>

          {/* Real-time voyage stats */}
          <div className="bg-[#051a30] border border-[#38bdf8]/20 rounded-xl p-[1.5cqw] flex flex-col gap-[1.2cqh]">
            <div className="flex justify-between items-center border-b border-[#38bdf8]/15 pb-[0.8cqh]">
              <span className="text-[0.9cqw] font-mono font-bold tracking-wider opacity-60 text-sky-200">
                {isZh ? "归航路线遥测指标" : "VOYAGE MONITOR"}
              </span>
              <Ship className="w-[1.1cqw] h-[1.1cqw] text-[#38bdf8]" />
            </div>

            <div className="grid grid-cols-2 gap-[1cqw] text-[0.95cqw] font-mono text-zinc-300">
              <div>
                <span className="opacity-50 text-[0.8cqw] block">{isZh ? "船队编制" : "FLEET COMPOSITION"}</span>
                <span className="font-bold text-[#38bdf8]">
                  {scene === 1 ? "12 " + (isZh ? "艘战船" : "Black Ships") : scene === 2 ? "11 " + (isZh ? "艘战船" : "Ships") : scene === 3 ? "5 " + (isZh ? "艘战船" : "Ships") : "1 " + (isZh ? "艘孤舟" : "Solo Bark")}
                </span>
              </div>
              <div>
                <span className="opacity-50 text-[0.8cqw] block">{isZh ? "风向速度" : "AEGEAN WINDS"}</span>
                <span className="font-bold text-[#38bdf8]">
                  {scene === 1 ? "BF 4 (North)" : scene === 2 ? "BF 8 (Storm)" : scene === 3 ? "BF 3 (Variable)" : "BF 1 (Calm)"}
                </span>
              </div>
            </div>

            {/* Nautical miles progress slider */}
            <div className="flex flex-col gap-[0.4cqh] mt-[0.5cqh]">
              <div className="flex justify-between text-[0.75cqw] font-mono opacity-60 text-zinc-300">
                <span>{isZh ? "回归伊萨卡航海进度" : "RETURN VOYAGE PROGRESS"}</span>
                <span className="text-[#38bdf8] font-bold">{scene === 1 ? "10%" : scene === 2 ? "35%" : scene === 3 ? "65%" : scene === 4 ? "85%" : "100%"}</span>
              </div>
              <div className="w-full h-[0.5cqh] bg-sky-950 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#38bdf8] rounded-full transition-all duration-1000 shadow-[0_0_8px_#38bdf8]"
                  style={{ width: scene === 1 ? "10%" : scene === 2 ? "35%" : scene === 3 ? "65%" : scene === 4 ? "85%" : "100%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Aegean Marine Map (Bespoke per scene density) */}
        <div className="col-span-7 bg-[#03152c] border border-[#38bdf8]/15 rounded-2xl p-[2cqw] flex flex-col justify-between relative overflow-hidden">
          {/* Subtle water ripples grids */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(56,189,248,0.15)_1px,transparent_1px)] [background-size:100%_1.5cqh]" />

          {scene === 1 && (
            // Scene 1 (Ultralight): 1 giant striking sailing route curve (Troy to Ithaca)
            <div className="flex-1 flex flex-col justify-center items-center relative">
              <svg className="w-[85%] h-[60%] stroke-[#38bdf8] fill-none" viewBox="0 0 400 150">
                {/* Full Epic Route Path */}
                <path 
                  d="M 50 110 C 130 110, 180 30, 250 80 C 300 110, 320 40, 350 40" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  className="opacity-25"
                  strokeDasharray="4,4"
                />
                {/* Animated progress route */}
                <path 
                  d="M 50 110 C 130 110, 180 30, 250 80 C 300 110, 320 40, 350 40" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                  className="stroke-sky-400 transition-all duration-1000"
                  strokeDasharray="400"
                  strokeDashoffset={400 - (beat + 1) * 133}
                />

                {/* Ship icon cruising on the path */}
                <g 
                  className="transition-all duration-1000"
                  style={{
                    transform: beat === 0 ? "translate(50px, 110px)" : beat === 1 ? "translate(250px, 80px)" : "translate(350px, 40px)"
                  }}
                >
                  <circle cx="0" cy="0" r="12" fill="#0369a1" className="animate-pulse" stroke="#38bdf8" strokeWidth="1" />
                  <Ship className="w-5 h-5 text-white absolute -top-2.5 -left-2.5" />
                </g>

                {/* Port markers */}
                <circle cx="50" cy="110" r="5" fill="#38bdf8" />
                <circle cx="350" cy="40" r="5" fill="#38bdf8" />
              </svg>

              <div className="text-center font-serif text-[1.1cqw] mt-[2cqh]">
                <p className="font-extrabold">{isZh ? "解解缆千河，帆满爱琴" : "Cast off from burnt Troy. Wind rushes our sails."}</p>
                <p className="text-[0.95cqw] font-sans opacity-60 mt-[0.5cqh] font-mono text-sky-300">
                  {isZh ? "首航特洛伊海湾 · 顺风指数 9.8" : "Troy Bay Outbound · Gale index 9.8"}
                </p>
              </div>
            </div>
          )}

          {scene === 2 && (
            // Scene 2 (Light): Symmetrical comparison of Ismarus Conflict vs Lotus-Eaters
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex items-center gap-[0.5cqw]">
                <Anchor className="w-[1.2cqw] h-[1.2cqw] text-[#38bdf8]" />
                {isZh ? "伊斯马罗斯冲突与忘忧食莲岛航拓扑" : "ISMARUS CLASH VS LOTUS-EATING DRIFT MAPS"}
              </div>

              <div className="flex-1 relative flex items-center justify-center">
                <svg className="w-[90%] h-[75%] fill-none stroke-[#38bdf8]" viewBox="0 0 400 150">
                  {/* Ismarus conflict detour (Top) */}
                  <path d="M 30 40 C 130 40, 150 75, 200 75" strokeWidth="2" className="opacity-30" />
                  <path d="M 30 40 C 130 40, 150 75, 200 75" strokeWidth="2.5" strokeDasharray="180" strokeDashoffset={beat >= 1 ? 0 : 180} className="stroke-sky-400 transition-all duration-1000" />
                  
                  {/* Lotus islands drift (Bottom) */}
                  <path d="M 30 110 C 130 110, 150 75, 200 75" strokeWidth="2" className="opacity-30" />
                  <path d="M 30 110 C 130 110, 150 75, 200 75" strokeWidth="2.5" strokeDasharray="180" strokeDashoffset={beat >= 2 ? 0 : 180} className="stroke-sky-400 transition-all duration-1000 stroke-dashed" />

                  {/* Convergence main route */}
                  <path d="M 200 75 H 370" strokeWidth="3" className="opacity-20" />
                  <path d="M 200 75 H 370" strokeWidth="3.5" strokeDasharray="170" strokeDashoffset={beat >= 2 ? 0 : 170} className="stroke-[#e0f2fe] transition-all duration-1000" />

                  {/* Junction node */}
                  <g transform="translate(200, 75)" className={beat >= 2 ? "scale-110" : "scale-100 opacity-60"}>
                    <circle cx="0" cy="0" r="8" fill="#38bdf8" />
                    <circle cx="0" cy="0" r="3" fill="#020d20" />
                  </g>

                  {/* Text labels */}
                  <text x="40" y="30" className="text-[7.5px] font-mono fill-current text-sky-200" stroke="none">{isZh ? "伊斯马罗斯遭遇战 (Cicones)" : "Thracian Battle detours (Cicones)"}</text>
                  <text x="40" y="125" className="text-[7.5px] font-mono fill-current text-sky-400" stroke="none">{isZh ? "忘忧魔食莲岛 (Lotus-Eaters)" : "Amnestic lotus shores (Lotus-Eaters)"}</text>
                  <text x="215" y="65" className="text-[8px] font-serif font-black fill-current text-[#e0f2fe]" stroke="none">{isZh ? "航线纠偏交汇点" : "Nautical Drift Re-convergence"}</text>
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-[1cqw] border-t border-[#38bdf8]/10 pt-[1.2cqh] text-[0.9cqw] font-mono text-sky-300">
                <div>
                  <span className="opacity-60">{isZh ? "海岛战备防卫:" : "Coast Defenses:"}</span>
                  <span className="ml-[0.5cqw] font-bold">{beat >= 1 ? "ENGAGED OUTBREAK" : "STANDBY"}</span>
                </div>
                <div>
                  <span className="opacity-60">{isZh ? "水手遗忘症解控:" : "Amnesia Clear:"}</span>
                  <span className="ml-[0.5cqw] font-bold">{beat >= 2 ? "100% EXTRACTED" : "HOLD"}</span>
                </div>
              </div>
            </div>
          )}

          {scene === 3 && (
            // Scene 3 (Standard): 3 connected stages of Odyssey trials (Cyclops, Sirens, Scylla)
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex justify-between text-sky-200">
                <span>{isZh ? "史诗三险阻及航线通过链" : "THREE MYTHOLOGICAL TRIAL STATIONS"}</span>
                <span className="animate-pulse">● RADAR SENSORS ACTIVE</span>
              </div>

              <div className="grid grid-cols-3 gap-[1.2cqw] my-[2cqh] flex-1">
                {[
                  { name: isZh ? "独眼巨人巨穴" : "Polyphemus Cave", unit: "Trial 1", icon: "👁️", desc: isZh ? "刺瞎巨人羊腹逃遁" : "Blinding giant, slipping past gates", active: true },
                  { name: isZh ? "塞壬歌声主桅" : "Sirens Mast", unit: "Trial 2", icon: "🧜‍♀️", desc: isZh ? "封蜡自缚安渡勾魂歌" : "Waxing ears, binding to central mast", active: beat >= 1 },
                  { name: isZh ? "六头怪与漩涡" : "Scylla whirlpool", unit: "Trial 3", icon: "🌀", desc: isZh ? "狭隘死线惊险操舵" : "Surviving razor teeth & black vortex", active: beat >= 2 }
                ].map((trial, i) => (
                  <div key={i} className={`p-[1.2cqw] rounded-xl border bg-[#041a35] flex flex-col justify-between transition-all duration-500 ${
                    trial.active 
                      ? "border-[#38bdf8] shadow-md scale-100" 
                      : "border-zinc-800 opacity-20 scale-95"
                  }`}>
                    <div className="flex justify-between items-start">
                      <span className="text-[1.8cqw]">{trial.icon}</span>
                      <span className="text-[0.75cqw] font-mono font-bold bg-[#38bdf8]/20 text-[#e0f2fe] px-[0.5cqw] py-[0.1cqh] rounded">
                        {trial.unit}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-serif font-black text-[1cqw] mt-[1cqh] text-white">{trial.name}</h4>
                      <p className="text-[0.75cqw] text-zinc-300 mt-[0.5cqh] font-sans leading-tight">{trial.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-[0.8cqw] font-mono opacity-50 flex justify-between">
                <span>{isZh ? "神话洋流阻尼动力学评估" : "MYTHIC HYDROLOGICAL SHIELDING RATIO"}</span>
                <span className="text-[#38bdf8] font-bold">
                  {beat === 0 ? "CYCLOPS SURVIVED" : beat === 1 ? "SIRENS DEFLECTED" : "SCYLLA SECURED"}
                </span>
              </div>
            </div>
          )}

          {scene === 4 && (
            // Scene 4 (Dense): 2x2 database alignment and marine hydrology telemetry
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex justify-between">
                <span>{isZh ? "墨西拿海域急流热阻与淡水大核算" : "MESSINA HYDROLOGICAL & FRESHWATER TELEMETRY"}</span>
                <span>{isZh ? "海图自控" : "OCEANIC SENSORS ONLINE"}</span>
              </div>

              <div className="grid grid-cols-2 gap-[1.2cqw] my-[1cqh] flex-1">
                {[
                  { title: isZh ? "海峡水动力环流测绘" : "MESSINA STRAIT HYDROLOGICAL", val: "14.2 knots", info: isZh ? "流速湍急 进水口正常" : "Raging current flow delta", icon: Wind, active: true },
                  { title: isZh ? "战船淡水配重大配称" : "FLEET WATER CAPACITY", val: "12 Barrels / ship", info: isZh ? "均衡龙骨抗风能力" : "Symmetrical weight balancing", icon: Compass, active: beat >= 1 },
                  { title: isZh ? "黑麻巨帆摩擦抗撕裂" : "HEMP SAIL TENSION RATING", val: "94.2% Strength", info: isZh ? "抵抗烈风海怪撕扯" : "Gale storm tension limits locked", icon: Layers, active: beat >= 1 },
                  { title: isZh ? "海员极限精力存续率" : "SAILOR DEHYDRATION PROFILE", val: "98.8% Active", info: isZh ? "维持核心适航运力" : "Optimal sailor vitals certified", icon: Shield, active: beat >= 2 }
                ].map((item, i) => (
                  <div key={i} className={`p-[1.2cqw] rounded-xl border bg-[#051e3c] flex justify-between items-center transition-all duration-500 ${
                    item.active ? "border-[#38bdf8] shadow-sm" : "border-zinc-800 opacity-20"
                  }`}>
                    <div className="flex flex-col gap-[0.3cqh]">
                      <span className="text-[0.75cqw] font-mono font-bold opacity-60 text-sky-200 uppercase">{item.title}</span>
                      <span className="text-[1.3cqw] font-serif font-black text-white">{item.val}</span>
                      <span className="text-[0.75cqw] text-zinc-300 font-sans">{item.info}</span>
                    </div>
                    <item.icon className="w-[2cqw] h-[2cqw] text-[#38bdf8]" />
                  </div>
                ))}
              </div>

              <div className="w-full bg-[#041a35] h-[0.4cqh] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#38bdf8] transition-all duration-700" 
                  style={{ width: beat === 0 ? "35%" : beat === 1 ? "70%" : "100%" }}
                />
              </div>
            </div>
          )}

          {scene === 5 && (
            // Scene 5 (Extreme / High Density): Master Mediterranean Voyage Dashboard
            <div className="flex-1 flex flex-col justify-between my-[0.2cqh]">
              {/* Top summary cards */}
              <div className="grid grid-cols-4 gap-[0.8cqw]">
                {[
                  { name: isZh ? "流亡回归时间" : "WANDERING TIME", val: "10 " + (isZh ? "载" : "Years"), color: "text-[#e0f2fe]" },
                  { name: isZh ? "战船适航率" : "FLEET LOSS RATE", val: "91.6% (11 lost)", color: "text-red-400" },
                  { name: isZh ? "主神合规护佑" : "DIVINE PROTECT", val: "Athena Level", color: "text-emerald-500" },
                  { name: isZh ? "重夺家邦周数" : "SUITORS CLEARED", val: beat >= 2 ? "108 " + (isZh ? "逆贼" : "Suitors") : beat >= 1 ? "40 " + (isZh ? "逆贼" : "Suitors") : "0" }
                ].map((ind, i) => (
                  <div key={i} className="bg-[#051e3c] border border-[#38bdf8]/20 rounded-xl p-[0.8cqw] text-center shadow-sm">
                    <span className="text-[0.7cqw] font-mono opacity-50 block text-sky-300 uppercase">{ind.name}</span>
                    <span className={`text-[1.1cqw] font-serif font-black ${ind.color} block mt-[0.2cqh]`}>{ind.val}</span>
                  </div>
                ))}
              </div>

              {/* Central Map & Spectrogram Ticker */}
              <div className="grid grid-cols-12 gap-[1cqw] my-[1cqh] flex-1">
                {/* SVG Mediterranean Map */}
                <div className="col-span-7 bg-[#051e3c] border border-[#38bdf8]/20 rounded-xl p-[1.5cqw] relative flex flex-col justify-between shadow-sm">
                  <span className="text-[0.75cqw] font-mono opacity-50 block text-sky-300">{isZh ? "荷马史诗归家航线及地名对位图" : "HOMERIC EPIC VOYAGE GEOGRAPHY GEOLOC"}</span>
                  
                  <div className="flex-1 relative flex items-center justify-center">
                    <svg className="w-full h-full fill-none stroke-[#38bdf8]" viewBox="0 0 240 100">
                      {/* Grid background lines */}
                      <path d="M 0 50 H 240 M 80 0 V 100 M 160 0 V 100" stroke="#38bdf8" strokeWidth="0.5" strokeDasharray="2,4" className="opacity-15" />
                      
                      {/* Aegean wind cycles */}
                      <circle cx="100" cy="40" r="25" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3,6" className="opacity-20 animate-spin-slow" />
                      
                      {/* Islands / Checkpoints */}
                      {[
                        { x: 30, y: 70, name: isZh ? "特洛伊" : "Troy", active: true },
                        { x: 80, y: 35, name: isZh ? "食莲岛" : "Lotus", active: true },
                        { x: 130, y: 65, name: isZh ? "女妖岬" : "Sirens", active: true },
                        { x: 180, y: 40, name: isZh ? "海怪峡" : "Scylla", active: true },
                        { x: 220, y: 75, name: isZh ? "伊萨卡" : "Ithaca", active: true }
                      ].map((node, idx) => {
                        const isCurrent = (idx === 0 && scene === 1) || (idx === 1 && scene === 2) || (idx === 2 && scene === 3) || (idx === 3 && scene === 4) || (idx === 4 && scene === 5);
                        return (
                          <g key={idx} className="transition-all duration-500">
                            <circle cx={node.x} cy={node.y} r={isCurrent ? 5 : 2.5} fill={isCurrent ? "#38bdf8" : "#0f3256"} stroke={isCurrent ? "#ffffff" : "#38bdf8"} strokeWidth="1" />
                            <text x={node.x - 12} y={node.y - 6} className="text-[7px] font-serif font-black fill-white" stroke="none">{node.name}</text>
                            {isCurrent && (
                              <circle cx={node.x} cy={node.y} r="10" stroke="#38bdf8" strokeWidth="1" className="animate-ping opacity-30" />
                            )}
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                </div>

                {/* Right side: Event log database */}
                <div className="col-span-5 bg-[#051e3c] border border-[#38bdf8]/20 rounded-xl p-[1.5cqw] flex flex-col justify-between shadow-sm font-mono text-[0.75cqw]">
                  <span className="opacity-50 text-[0.7cqw] uppercase border-b border-[#38bdf8]/15 pb-[0.3cqh] block text-sky-300">
                    {isZh ? "伊萨卡王权账目清算表" : "ITHACA ROYAL RECORD"}
                  </span>
                  
                  <div className="flex-1 flex flex-col justify-center gap-[0.5cqh] my-1 leading-none text-sky-200">
                    <div className="text-zinc-500">&gt; ODYSSEUS_ANCHOR_DOWN</div>
                    <div className="text-zinc-400">&gt; Comrade casualties logged</div>
                    <div className={`transition-opacity ${beat >= 1 ? "opacity-100 text-amber-400" : "opacity-15"}`}>
                      &gt; Sacred Bow strung
                    </div>
                    <div className={`transition-opacity ${beat >= 2 ? "opacity-100 text-emerald-400 font-extrabold" : "opacity-5"}`}>
                      &gt; KING RECLAIM ROYAL THRONE OK
                    </div>
                  </div>

                  <div className={`text-[0.65cqw] p-[0.5cqw] rounded bg-emerald-950/40 text-emerald-400 border border-emerald-500/20 flex items-center gap-[0.3cqw] ${beat >= 2 ? "opacity-100" : "opacity-20"}`}>
                    <Shield className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{isZh ? "篡权篡求婚党歼灭，伊萨卡重归治世" : "Suitors cleared. Royal reign certified."}</span>
                  </div>
                </div>
              </div>

              {/* Bottom system status bar */}
              <div className="text-[0.8cqw] font-mono opacity-60 flex justify-between items-center px-1 border-t border-[#38bdf8]/15 pt-[0.6cqh]">
                <span>{isZh ? "荷马古典史诗大回归航海遥控统合中心" : "UNIVERSAL NAVAL RE-ROUTE ODYSSEY COMPILING CENTER"}</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                  {isZh ? "爱琴海主航道畅通安全" : "NAVIGATION COMPLETED : SAFE HOME"}
                </span>
              </div>
            </div>
          )}

          {/* Sub status footer */}
          <div className="border-t border-[#38bdf8]/10 pt-[0.8cqh] flex justify-between text-[0.75cqw] font-mono opacity-50 mt-1">
            <span>{isZh ? "荷马古典海图档案" : "AEGEAN SEA ODYSSEY CHART T_XIII // LOCKED"}</span>
            <span>VERIFICATION CODE: 0x13_ODYSSEY</span>
          </div>
        </div>
      </div>

      {/* Decorative Slide Footer */}
      <div className="flex justify-between items-center text-[0.8cqw] font-mono opacity-55 border-t border-[#38bdf8]/10 pt-[1.2cqh] z-10">
        <span>© BC 800 - 2026 {isZh ? "荷马地中海古典科学研究院" : "Mediterranean Archaic Historical Association"}</span>
        <span>{isZh ? "基于神话流阻力的航线回归自适应控温" : "convection marine feedback controls"}</span>
      </div>
    </div>
  );
}
