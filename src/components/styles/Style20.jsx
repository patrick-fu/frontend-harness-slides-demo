import React, { useState, useEffect, useRef } from "react";

export const getMetadata = (lang) => ({
  id: "20",
  tier: "C",
  name: lang === "zh" ? "汉代西域都护府屯田网格" : "Han Dynasty Frontier Outposts",
  theme: lang === "zh" ? "西域都护府屯田防务体系" : "Han Dynasty Frontier Defense Grid",
  densityLabel: lang === "zh" ? "边防屯田" : "Frontier Garrison Grid",
  colors: { bg: "bg-[#0c0805]", ink: "text-[#f97316]", panel: "border-[#f97316]/30" },
  typography: { header: "font-serif", body: "font-mono" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "西域都护府屯田诏书" : "The Frontier Garrison Proclamation",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "宣读屯田诏" : "Read Garrison Proclamation", 
          title: lang === "zh" ? "西域都护府屯田诏书" : "The Frontier Garrison Proclamation", 
          body: lang === "zh" ? "“以兵屯田，自给食饷，以卫社稷。”西汉元帝设西域都护府，强令军民修筑烽燧，开垦荒地，构筑千里边防防御网。" : "“Settle troops to farm, feed themselves, and guard the empire.” Emperor Yuan established the Western Protectorate, ordering soldiers to build beacons and till farmlands, raising a thousand-mile defense grid." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "划定水利渠系" : "Map Irrigation Canals", 
          title: lang === "zh" ? "疏勒河与孔雀河渠系建设" : "Water Irrigation Channels", 
          body: lang === "zh" ? "引疏勒河及孔雀河水注入屯田网格，修筑坎儿井及排灌水渠，使干旱的大漠边缘化为麦稻飘香的塞上江南。" : "Diverting the Shule and Peacocks Rivers into garrison farmlands, soldiers built Karez wells and canals, turning dry desert edges into fertile wheat fields." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "统筹军粮储备" : "Balance Grain Reserves", 
          title: lang === "zh" ? "常平仓与国家军事粮储" : "The State Granary Reserve System", 
          body: lang === "zh" ? "在沿线设立常平仓以平抑粮价，防范连年旱灾。粮草充盈使远征骑兵拥有充足口粮，免除大军后勤补给之忧。" : "Establishing state granaries along the silk road to stabilize prices and survive droughts. Ample grain secured cavalry rations, removing logistics worries." 
        }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "两防区攻守：敦煌与楼兰" : "Tactical Defense: Dunhuang vs Loulan",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "核定大本营" : "Deploy Dunhuang Base", 
          title: lang === "zh" ? "敦煌：后方大本营与物资枢纽" : "Dunhuang: Rear Base & Supply Hub", 
          body: lang === "zh" ? "敦煌地接玉门、阳关，屯兵数万，土地肥沃。作为都护府的物资总调度枢纽，源源不断向深方哨卡输送粮秣、箭矢。" : "Dunhuang connected the Yumen and Yang Guan passes, tilling fertile lands with ten thousand soldiers. As logistics hub, it continuously supplied deep desert posts." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "布防急先锋" : "Reinforce Loulan Outpost", 
          title: lang === "zh" ? "楼兰：大漠急先锋与扼要哨所" : "Loulan: Frontier Vanguard & Guard Post", 
          body: lang === "zh" ? "楼兰地扼西域咽喉，气候恶劣。其烽燧哨卡直面匈奴铁骑，守军需时刻枕戈待旦，通过烽火系统与后方枢纽紧密耦合。" : "Loulan choked the silk road neck under harsh winds. Facing Xiongnu cavalry, its watchtowers kept vigilant, coupled with rear bases via beacon signals." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "校验烽火联动" : "Verify Beacon Couplings", 
          title: lang === "zh" ? "烽燧百里联动安全线" : "The 100-Mile Beacon Network", 
          body: lang === "zh" ? "两地沿线筑有数十座烽火台。旦有敌寇，昼则生烟、夜则燃火，半日之内，千里警报即可传达至玉门关大营。" : "Dozens of towers linked Loulan to Dunhuang. On raid, they raised smoke by day and fire by night, sending alerts across 1,000 miles in half a day." 
        }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "边防预警三级响应" : "Three Stages of Frontier Alert",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "侦测游骑异动" : "Detect Raider Movements", 
          title: lang === "zh" ? "第一阶段：烽燧游骑异动侦测" : "Stage I: Cavalry Recon & Observation", 
          body: lang === "zh" ? "斥候在外侧沙丘发现匈奴游骑试探，沿线烽燧（烽燧十人守班）立即进入甲级警戒状态，收集柴草火料。" : "Scouts detect enemy raider columns on outer dunes. Local watchtowers enter high alert, gathering fuel and prepping distress signals." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "引燃烽火传递" : "Light Beacon Chain", 
          title: lang === "zh" ? "第二阶段：百里烽火接力传递" : "Stage II: High-Speed Beacon Relay", 
          body: lang === "zh" ? "最前线楼兰哨卡点火示警！相邻烽燧迅速响应，一站接一站，火光划破大漠黑夜，将兵力、规模与敌向精准投射至后方。" : "Loulan watchtower sparks the warning! Adjacent beacons relay the flash, one after another, cutting the desert night to show enemy strength." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "骑兵越境合围" : "Launch Cavalry Counter", 
          title: lang === "zh" ? "第三阶段：轻骑出塞合围拦截" : "Stage III: Cavalry Intercept & Encirclement", 
          body: lang === "zh" ? "敦煌及玉门关重骑兵、轻骑大军开闸出动，按烽火方位合围拦截，粉碎敌寇劫掠计划，捍卫屯田麦田之绝对安全。" : "Dunhuang and Yumen heavy cavalry ride out, intercepting raiders based on beacon bearings, securing the wheat fields from destruction." 
        }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "西域都护四战略储备" : "Four Strata of Frontier Strategy",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "核查军屯口粮" : "Verify Rice Rations", 
          title: lang === "zh" ? "军屯粮草：六月安全囤积红线" : "Wheat & Grain Safety Stockpiles", 
          body: lang === "zh" ? "都护府算定各哨卡库存折合十万石，能维持全军六个月以上断粮生存，完美度过最漫长的冬春之交。" : "The Protectorate recorded 100,000 Dan of grain, enough to sustain the defensive grid for 6 months without external imports during winter." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "盘点武库箭矢" : "Audit Arrow Stockpiles", 
          title: lang === "zh" ? "重弩箭矢与城防军备点算" : "Crossbow & Arrow Arsenals", 
          body: lang === "zh" ? "各防区常备大黄弩与青铜铤弩箭五十万支，可支撑十次以上大规模要塞围攻阻击战，保障火力绝对统治力。" : "Each sector held 500,000 bronze arrows and heavy crossbows, enough to repel ten massive siege raids, ensuring defense supremacy." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "调度屯田兵源" : "Mobilize Farm Soldiers", 
          title: lang === "zh" ? "军屯农兵与退役辅兵动员" : "Farm Soldier Defense Mobilization", 
          body: lang === "zh" ? "战时可立即动员十万精壮农兵就地转为守城步卒。退役军户作为骨干教头，在屯田田垄间构筑高效动员基石。" : "In war, 100,000 farm soldiers instantly mobilize as defensive infantry. Retired veterans serve as drillmasters, securing ready reserves." 
        }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "西域都护府屯田防务总账" : "Western Protectorate Garrison Ledger",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "核准五大哨所" : "Audit Five Outposts", 
          title: lang === "zh" ? "西域五大要塞屯田常数对决" : "Outpost Constants of Five Key Garrisons", 
          body: lang === "zh" ? "盘点都护府管辖之五大要塞（敦煌、楼兰、龟兹、疏勒、乌孙）之屯田、马匹、兵力及烽火联动指数，五要塞协同构筑固若金汤之大漠防线。" : "Auditing five key garrisons (Dunhuang, Loulan, Qiuci, Shule, Wusun) on farmlands, warhorses, archers, and beacon links. Together they secure the desert border." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "加盖西域都护府印" : "Stamp Protectorate Seal", 
          title: lang === "zh" ? "西域防务呈国民兵部御前折" : "Frontier Defense Memorial to Han Court", 
          body: lang === "zh" ? "都护大人亲自校核边防大图，呈汉朝廷御前奏折，加盖‘西域都护府之印’（Han Imperial Stamp），保境安民，功在千秋。" : "The Protector reviewed the tactical map, presenting the memorial to the Han court. Stamped with the official seal, it secured the empire's peace." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "拨付军功爵赏" : "Disburse Military Rewards", 
          title: lang === "zh" ? "屯田立功将士赏赐签发" : "Garrison Troops Military Rewards", 
          body: lang === "zh" ? "签发诏命，对屯田开荒及击退匈奴游骑之将士拨付十万钱，封爵授地，极大地激发了戍边军民建设塞上的热潮。" : "Issuing imperial bounties of 100,000 coins to reward veterans and farmers for tilling deserts and repelling raiders, triggering frontier enthusiasm." 
        }
      ]
    }
  ]
});

export default function Style20({ scene, beat, language, isThumbnail, onNavigate }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];
  const isZh = language === "zh";

  // Transition Glitch effect state
  const [glitchActive, setGlitchActive] = useState(false);
  const prevSceneRef = useRef(scene);

  useEffect(() => {
    if (prevSceneRef.current !== scene) {
      setGlitchActive(true);
      const timer = setTimeout(() => setGlitchActive(false), 800);
      prevSceneRef.current = scene;
      return () => clearTimeout(timer);
    }
  }, [scene]);

  // CSS classes helper for beats fade/slide in
  const getBeatClass = (targetBeat) => {
    return beat >= targetBeat
      ? "opacity-100 translate-y-0 filter-none transition-all duration-700 ease-out"
      : "opacity-10 -translate-y-[0.5cqh] pointer-events-none transition-all duration-700 ease-out";
  };

  const getBeatGlow = (targetBeat, activeBorder = "border-[#f97316]", inactiveBorder = "border-[#ef4444]/15") => {
    return beat >= targetBeat ? `${activeBorder} shadow-[0_0_15px_rgba(249,115,22,0.2)]` : inactiveBorder;
  };

  // Render Great Wall navigation along the left margin
  const renderNavigation = () => {
    if (isThumbnail || !onNavigate) return null;

    const towers = [
      { num: 1, zhName: "都护诏书", enName: "Proclamation" },
      { num: 2, zhName: "双区防务", enName: "Dual Defense" },
      { num: 3, zhName: "三级预警", enName: "3-Stage Alert" },
      { num: 4, zhName: "战略物资", enName: "Garrison Stock" },
      { num: 5, zhName: "西域总账", enName: "Garrison Ledger" },
    ];

    return (
      <div className="w-[13cqw] h-full flex flex-col justify-between items-center border-r border-[#f97316]/20 pr-[1cqw] py-[2cqh] relative select-none z-30">
        {/* Scroll grid background texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:12px_12px]" />
        
        {/* Title block */}
        <div className="w-full text-center border-b border-[#ef4444]/30 pb-[1.2cqh] pointer-events-none">
          <div className="text-[1.3cqw] font-lishu text-[#ef4444] font-black tracking-widest leading-none">
            西域都护府
          </div>
          <div className="text-[0.6cqw] font-mono tracking-widest text-[#f97316]/50 uppercase mt-[0.3cqh] leading-none">
            WESTERN PROTECTORATE
          </div>
        </div>

        {/* Great Wall SVG Path + Towers */}
        <div className="flex-1 w-full relative min-h-0 my-[1.5cqh]">
          <svg viewBox="0 0 100 420" className="w-full h-full overflow-visible">
            {/* Crenellated Great Wall path */}
            <path
              d="M 50 10 Q 75 105, 30 210 T 50 410"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2.5"
              strokeDasharray="6 4"
              className="opacity-40"
            />
            <path
              d="M 53 10 Q 78 105, 33 210 T 53 410"
              fill="none"
              stroke="#ef4444"
              strokeWidth="0.8"
              strokeDasharray="1 6"
              className="opacity-20"
            />

            {/* Towers */}
            {towers.map((t, idx) => {
              const sNum = t.num;
              const isActive = scene === sNum;
              const coords = [
                { x: 53, y: 35 },
                { x: 62, y: 125 },
                { x: 33, y: 215 },
                { x: 42, y: 305 },
                { x: 49, y: 395 },
              ];
              const { x, y } = coords[idx];

              return (
                <g
                  key={sNum}
                  className="cursor-pointer group/tower"
                  onClick={() => onNavigate(sNum, 0)}
                >
                  {/* Expanded invisible click target */}
                  <circle cx={x} cy={y} r="18" fill="transparent" />

                  {/* Active tower backdrop glow */}
                  {isActive && (
                    <circle
                      cx={x}
                      cy={y}
                      r="14"
                      fill="url(#nav-glow-grad)"
                      className="opacity-65 animate-pulse"
                    />
                  )}

                  {/* Tower stone body */}
                  <rect
                    x={x - 7}
                    y={y - 3}
                    width="14"
                    height="12"
                    fill={isActive ? "#ef4444" : "#130b05"}
                    stroke={isActive ? "#f97316" : "#ef4444"}
                    strokeWidth="1.2"
                    rx="1"
                    className="transition-colors duration-300"
                  />
                  
                  {/* Tower battlements */}
                  <path
                    d={`M ${x - 5} ${y - 3} L ${x - 5} ${y - 7} L ${x - 3} ${y - 7} L ${x - 3} ${y - 5} L ${x - 1} ${y - 5} L ${x - 1} ${y - 7} L ${x + 1} ${y - 7} L ${x + 1} ${y - 5} L ${x + 3} ${y - 5} L ${x + 3} ${y - 7} L ${x + 5} ${y - 7} L ${x + 5} ${y - 3}`}
                    fill={isActive ? "#f97316" : "#1a110a"}
                    stroke={isActive ? "#f97316" : "#ef4444"}
                    strokeWidth="0.8"
                  />
                  
                  {/* Loop hole */}
                  <line x1={x} y1={y + 1} x2={x} y2={y + 5} stroke={isActive ? "#0c0805" : "#f97316"} strokeWidth="1" />

                  {/* Beacon Fire Ignite Flame */}
                  {isActive && (
                    <g className="animate-garrison-flame" style={{ transformOrigin: `${x}px ${y - 8}px` }}>
                      <path
                        d={`M ${x - 2} ${y - 7} Q ${x} ${y - 15} ${x + 2} ${y - 7} Z`}
                        fill="#facc15"
                      />
                      <path
                        d={`M ${x - 3.5} ${y - 6} Q ${x} ${y - 13} ${x + 3.5} ${y - 6} Z`}
                        fill="#f97316"
                        className="opacity-90"
                      />
                    </g>
                  )}

                  {/* Beacon Smoke Particles */}
                  {isActive && (
                    <g>
                      {[...Array(4)].map((_, i) => {
                        return (
                          <circle
                            key={`smoke-${i}`}
                            cx={x + (i % 2 === 0 ? 1 : -1) * 3}
                            cy={y - 12}
                            r={1.5 + i * 0.8}
                            fill="#f97316"
                            className="opacity-40 animate-smoke-particle pointer-events-none"
                            style={{
                              animationDelay: `${i * 0.5}s`,
                            }}
                          />
                        );
                      })}
                    </g>
                  )}

                  {/* Tower sequence number */}
                  <circle
                    cx={x}
                    cy={y + 16}
                    r="5.5"
                    fill="#0c0805"
                    stroke={isActive ? "#f97316" : "#ef4444"}
                    strokeWidth="1"
                  />
                  <text
                    x={x}
                    y={y + 18.2}
                    fontSize="7"
                    fontWeight="bold"
                    textAnchor="middle"
                    fill={isActive ? "#f97316" : "#ef4444"}
                    className="font-mono leading-none"
                  >
                    {sNum}
                  </text>

                  {/* Label tooltip */}
                  <g className="opacity-0 group-hover/tower:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <rect
                      x={x + 12}
                      y={y - 12}
                      width="68"
                      height="22"
                      fill="#130b05"
                      stroke="#f97316"
                      strokeWidth="1"
                      rx="2"
                    />
                    <text x={x + 16} y={y + 1} fontSize="6" className="font-serif font-bold" fill="#f97316">
                      {t.zhName}
                    </text>
                    <text x={x + 16} y={y + 8} fontSize="5.2" className="font-mono" fill="#ef4444">
                      {t.enName}
                    </text>
                  </g>
                </g>
              );
            })}

            <defs>
              <radialGradient id="nav-glow-grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Footer info block */}
        <div className="w-full text-center border-t border-[#f97316]/15 pt-[1cqh] pointer-events-none">
          <span className="font-mono text-[0.52cqw] tracking-widest text-[#ef4444] uppercase block leading-none">
            GARRISON ARCHIVE
          </span>
          <span className="font-mono text-[0.58cqw] text-[#f97316]/40 block mt-[0.3cqh] leading-none">
            AD 73 • WEST HAN
          </span>
        </div>
      </div>
    );
  };

  // Render individual scene contents
  const renderSceneContent = () => {
    switch (scene) {
      case 1:
        return (
          <div className="w-full h-full flex flex-row items-center justify-between gap-[2.5cqw] p-[1.5cqw]">
            {/* Left: Beautiful wood/parchment Proclamation Proclamation */}
            <div className="flex-[4] flex flex-col justify-between h-full bg-[#130b05]/95 border-2 border-[#ef4444]/30 rounded-sm p-[2.2cqw] relative shadow-[0_0_20px_rgba(239,68,68,0.05)]">
              {/* Wooden slats vertical border markers */}
              <div className="absolute left-[1.2cqw] top-[1cqw] bottom-[1cqw] w-[1px] bg-[#ef4444]/25 pointer-events-none" />
              <div className="absolute right-[1.2cqw] top-[1cqw] bottom-[1cqw] w-[1px] bg-[#ef4444]/25 pointer-events-none" />
              
              <div className="flex flex-col gap-[2cqh] pl-[0.8cqw] pr-[0.8cqw]">
                {/* Official seal banner */}
                <div className="flex items-center gap-[0.8cqw]">
                  <span className="font-mono text-[0.8cqw] px-2 py-0.5 bg-[#ef4444]/15 border border-[#ef4444]/40 text-[#ef4444] font-bold">
                    【 汉元帝 · 诏书 】
                  </span>
                  <span className="font-mono text-[0.75cqw] text-[#f97316]/60">Garrison Proclamation</span>
                </div>

                <h1 className="text-[3cqw] font-lishu text-[#f97316] font-black leading-tight border-b border-[#f97316]/20 pb-2">
                  {currentBeat.title}
                </h1>

                <blockquote className="border-l-2 border-[#ef4444] pl-[1.2cqw] italic text-[1.4cqw] leading-[1.4] text-[#ebdcb9] font-serif my-[1cqh]">
                  “以兵屯田，自给食饷，以卫社稷。”
                  <span className="block text-[0.9cqw] tracking-tight font-mono text-[#f97316]/70 mt-1">
                    “Settle troops to farm, feed themselves, and guard the empire.”
                  </span>
                </blockquote>

                <p className="text-[1.1cqw] leading-[1.5] text-[#ebdcb9]/80 font-serif">
                  {currentBeat.body}
                </p>
              </div>

              {/* Dynamic highlights based on beat */}
              <div className="mt-[2cqh] pt-[1.5cqh] border-t border-[#f97316]/10 flex flex-col gap-[1cqh] pl-[0.8cqw]">
                <div className={`flex items-center gap-[0.8cqw] text-[0.85cqw] ${beat >= 0 ? "text-[#f97316]" : "text-[#f97316]/30"}`}>
                  <span className="font-mono">◎ 阶段一 : 宣读屯田诏书</span>
                  <span className="font-mono text-[0.7cqw] opacity-65">Stage I: Imperial Proclamation Issued</span>
                </div>
                <div className={`flex items-center gap-[0.8cqw] text-[0.85cqw] ${beat >= 1 ? "text-[#f97316]" : "text-[#f97316]/30"}`}>
                  <span className="font-mono">◎ 阶段二 : 疏勒河水系灌溉网</span>
                  <span className="font-mono text-[0.7cqw] opacity-65">Stage II: Shule Irrigation Canal Grid</span>
                </div>
                <div className={`flex items-center gap-[0.8cqw] text-[0.85cqw] ${beat >= 2 ? "text-[#f97316]" : "text-[#f97316]/30"}`}>
                  <span className="font-mono">◎ 阶段三 : 常平仓军事物资核对</span>
                  <span className="font-mono text-[0.7cqw] opacity-65">Stage III: Stable Granary Reserve Audit</span>
                </div>
              </div>
            </div>

            {/* Right: Hexagonal fortress SVG vector */}
            <div className="flex-[5] h-full flex flex-col justify-center items-center relative border border-[#f97316]/10 rounded-sm bg-[#130b05]/35 p-[1cqw]">
              {/* Compass grid lines */}
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(249,115,22,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.05)_1px,transparent_1px)] [background-size:24px_24px]" />
              
              <svg viewBox="0 0 300 300" className="w-[32cqw] h-[32cqw] overflow-visible z-10">
                {/* Sand Dunes gradient overlays */}
                <path d="M 10 260 Q 90 200, 180 250 T 290 240 L 290 290 L 10 290 Z" fill="#2a1a0d" className="opacity-40" />
                <path d="M 20 275 Q 110 220, 200 280 T 295 270 L 295 290 L 20 290 Z" fill="#3a2512" className="opacity-35" />

                {/* Grid guidelines */}
                <circle cx="150" cy="140" r="110" fill="none" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="3 4" className="opacity-30" />
                <circle cx="150" cy="140" r="85" fill="none" stroke="#f97316" strokeWidth="0.5" strokeDasharray="1 5" className="opacity-45" />

                {/* Hexagon fortress walls */}
                {/* Vertices are around (150, 140) with R=75 */}
                {/* angles: 0, 60, 120, 180, 240, 300 degrees */}
                {/* Coords:
                    p1: 150 + 75 = 225, 140
                    p2: 150 + 37.5 = 187.5, 140 + 65 = 205
                    p3: 150 - 37.5 = 112.5, 140 + 65 = 205
                    p4: 150 - 75 = 75, 140
                    p5: 150 - 37.5 = 112.5, 140 - 65 = 75
                    p6: 150 + 37.5 = 187.5, 140 - 65 = 75
                */}
                <polygon
                  points="225,140 187.5,205 112.5,205 75,140 112.5,75 187.5,75"
                  fill="#1a110a"
                  stroke="#ef4444"
                  strokeWidth="2.5"
                  className="opacity-90"
                />
                
                {/* Secondary inner wall */}
                <polygon
                  points="210,140 180,192 120,192 90,140 120,88 180,88"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="1"
                  strokeDasharray="4 2"
                  className="opacity-70"
                />

                {/* Watchtowers at 6 corners */}
                {[
                  { x: 225, y: 140, label: "东" },
                  { x: 187.5, y: 205, label: "东南" },
                  { x: 112.5, y: 205, label: "西南" },
                  { x: 75, y: 140, label: "西" },
                  { x: 112.5, y: 75, label: "西北" },
                  { x: 187.5, y: 75, label: "东北" },
                ].map((pt, i) => (
                  <g key={i}>
                    <rect
                      x={pt.x - 5}
                      y={pt.y - 5}
                      width="10"
                      height="10"
                      fill="#ef4444"
                      stroke="#f97316"
                      strokeWidth="1"
                    />
                    <circle cx={pt.x} cy={pt.y} r="2" fill="#0c0805" />
                    <text x={pt.x} y={pt.y - 8} fontSize="7" fill="#ebdcb9" textAnchor="middle" className="font-serif">
                      {pt.label}
                    </text>
                  </g>
                ))}

                {/* Gate at southern wall */}
                <rect x="140" y="198" width="20" height="8" fill="#a16207" stroke="#ef4444" strokeWidth="0.8" />
                <text x="150" y="215" fontSize="7" fill="#ebdcb9" textAnchor="middle" className="font-serif">
                  【 寨门 】
                </text>

                {/* Barracks and Granary indicators inside */}
                <rect x="125" y="110" width="18" height="12" fill="#130b05" stroke="#f97316" strokeWidth="0.8" />
                <text x="134" y="119" fontSize="6" fill="#f97316" textAnchor="middle">粮仓</text>

                <rect x="157" y="110" width="18" height="12" fill="#130b05" stroke="#f97316" strokeWidth="0.8" />
                <text x="166" y="119" fontSize="6" fill="#f97316" textAnchor="middle">营房</text>

                {/* Central general flag pole */}
                <line x1="150" y1="150" x2="150" y2="125" stroke="#ef4444" strokeWidth="1.5" />
                <path d="M 150 125 L 168 131 L 150 137 Z" fill="#ef4444" stroke="#f97316" strokeWidth="0.5" />
                <text x="155.5" y="133" fontSize="6.5" fill="#facc15" fontWeight="bold" className="font-serif">
                  漢
                </text>

                {/* Beat 1 Dynamic Overlay: Shule River Irrigation Canals */}
                {beat >= 1 && (
                  <g className="transition-opacity duration-1000">
                    <path
                      d="M 10 90 Q 70 85, 112.5 75"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="1.8"
                      strokeDasharray="4 2"
                    />
                    <path
                      d="M 10 160 Q 60 155, 90 140 T 125 116"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="1.8"
                      strokeDasharray="4 2"
                    />
                    {/* Canal flow vectors */}
                    <circle cx="112.5" cy="75" r="2.5" fill="#38bdf8" className="animate-pulse" />
                    <text x="40" y="80" fontSize="7" fill="#38bdf8" className="font-serif italic">
                      水渠引水 Canal Feed
                    </text>
                  </g>
                )}

                {/* Beat 2 Dynamic Overlay: Stable Granary Reserves */}
                {beat >= 2 && (
                  <g className="transition-opacity duration-1000">
                    <circle cx="134" cy="116" r="10" fill="none" stroke="#ebdcb9" strokeWidth="1.2" className="animate-ping opacity-35" />
                    <rect x="110" y="145" width="80" height="15" fill="#ef4444" stroke="#ef4444" strokeWidth="0.8" rx="2" />
                    <text x="150" y="155" fontSize="7" fill="#ef4444" fontWeight="bold" textAnchor="middle" className="font-serif">
                      常平仓已核 Checked
                    </text>
                  </g>
                )}
              </svg>

              {/* Technical label overlay */}
              <div className="absolute bottom-[1.5cqh] left-[1.5cqw] font-mono text-[0.75cqw] text-[#ef4444]">
                <span>FORTRESS STRUCTURE: OCTAGONAL REINFORCED</span>
                <span className="block text-[#f97316]/60">DIAMETER: 150 PACES • CHERCHEN ROUTE</span>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="w-full h-full flex flex-row items-center justify-between gap-[2.5cqw] p-[1.5cqw]">
            {/* Left: Hexagonal Garrison troop map (56% width) */}
            <div className="flex-[5.6] h-full flex flex-col justify-between border-2 border-[#f97316]/25 bg-[#130b05]/90 rounded-sm p-[1.8cqw] relative">
              <div className="absolute right-[1cqw] top-[1cqw] font-mono text-[0.8cqw] text-[#ef4444]">
                SECTOR TACTICS • 图2
              </div>
              
              <div className="flex flex-col gap-[1.5cqh]">
                <h3 className="font-lishu text-[1.8cqw] text-[#f97316] font-bold">
                  【 要塞兵力部署图 】
                  <span className="block text-[0.9cqw] font-mono text-[#ef4444] uppercase tracking-wider mt-1">
                    Hexagonal Garrison Position & Troops
                  </span>
                </h3>
                <p className="text-[1.05cqw] leading-[1.4] text-[#ebdcb9]/80 font-serif mb-[1cqh]">
                  要塞内部划分为三大防区，常备强弩手与轻重骑兵。战时各防区按金鼓号令策应，形成合围之势。
                  <span className="block font-mono text-[0.85cqw] text-[#f97316]/70 mt-1">
                    The garrison divides into 3 sectors housing archers and heavy riders, tightly linked with signal bells.
                  </span>
                </p>
              </div>

              {/* Hexagonal Garrison grid detail */}
              <div className="flex-1 flex items-center justify-center relative my-[1cqh]">
                <svg viewBox="0 0 200 150" className="w-[20cqw] h-[15cqw] overflow-visible">
                  {/* Hexagon base */}
                  <polygon
                    points="150,75 125,118 75,118 50,75 75,32 125,32"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="1.2"
                    className="opacity-50"
                  />
                  {/* Sectors layout divisions */}
                  <line x1="100" y1="75" x2="150" y2="75" stroke="#ef4444" strokeWidth="0.8" strokeDasharray="2 2" />
                  <line x1="100" y1="75" x2="125" y2="118" stroke="#ef4444" strokeWidth="0.8" strokeDasharray="2 2" />
                  <line x1="100" y1="75" x2="75" y2="118" stroke="#ef4444" strokeWidth="0.8" strokeDasharray="2 2" />
                  <line x1="100" y1="75" x2="50" y2="75" stroke="#ef4444" strokeWidth="0.8" strokeDasharray="2 2" />
                  <line x1="100" y1="75" x2="75" y2="32" stroke="#ef4444" strokeWidth="0.8" strokeDasharray="2 2" />
                  <line x1="100" y1="75" x2="125" y2="32" stroke="#ef4444" strokeWidth="0.8" strokeDasharray="2 2" />

                  {/* Sectors overlays */}
                  {/* Central Command - Beat 0 */}
                  <circle cx="100" cy="75" r="12" fill={beat >= 0 ? "#f97316" : "#ef4444"} fillOpacity={beat >= 0 ? 0.75 : 0.1} className={`${beat === 0 ? "animate-pulse" : ""} opacity-75`} />
                  <text x="100" y="78" fontSize="6.5" fill="#0c0805" textAnchor="middle" fontWeight="bold" className="font-serif">
                    中军
                  </text>

                  {/* Sector I: Watch towers (Archers) - Beat 1 */}
                  <g className={`transition-all duration-500 ${beat >= 1 ? "opacity-100" : "opacity-35"}`}>
                    <path d="M 75 32 L 125 32 L 100 75 Z" fill={beat >= 1 ? "#ef4444" : "none"} fillOpacity={beat >= 1 ? 0.2 : 0} stroke={beat >= 1 ? "#ef4444" : "none"} strokeWidth="1" />
                    <text x="100" y="45" fontSize="6" fill="#ebdcb9" textAnchor="middle" className="font-serif">北防区 (弩兵)</text>
                    <text x="100" y="52" fontSize="5" fill="#f97316" textAnchor="middle">300 Crossbows</text>
                  </g>

                  {/* Sector II: Cavalry division - Beat 2 */}
                  <g className={`transition-all duration-500 ${beat >= 2 ? "opacity-100" : "opacity-35"}`}>
                    <path d="M 125 118 L 150 75 L 100 75 Z" fill={beat >= 2 ? "#f97316" : "none"} fillOpacity={beat >= 2 ? 0.25 : 0} stroke={beat >= 2 ? "#f97316" : "none"} strokeWidth="1" />
                    <text x="127" y="90" fontSize="6" fill="#ebdcb9" textAnchor="middle" className="font-serif font-bold">南防区 (骑兵)</text>
                    <text x="127" y="97" fontSize="5" fill="#ef4444" textAnchor="middle" className="font-bold">Cavalry Strike</text>
                  </g>

                  {/* Text descriptions of status */}
                  <text x="25" y="25" fontSize="6.5" fill="#ef4444" className="font-mono">◎ 筑垒高度: 24尺</text>
                  <text x="25" y="135" fontSize="6.5" fill="#ef4444" className="font-mono">◎ 常备兵马: 五千人</text>
                </svg>
              </div>

              {/* Status info box */}
              <div className="flex flex-row gap-[1cqw] border-t border-[#f97316]/20 pt-[1cqh] justify-between text-[0.8cqw] font-mono text-[#f97316]/70">
                <div>COMMAND STENT: <span className="text-[#ebdcb9] font-bold">{beat >= 0 ? "ESTABLISHED" : "DIM"}</span></div>
                <div>ARCHERS SQUAD: <span className="text-[#ebdcb9] font-bold">{beat >= 1 ? "READY" : "STANDBY"}</span></div>
                <div>CAVALRY FORCE: <span className="text-[#ebdcb9] font-bold">{beat >= 2 ? "CHARGING" : "STANDBY"}</span></div>
              </div>
            </div>

            {/* Right: Beacon Relay Chain (44% width) */}
            <div className="flex-[4.4] h-full flex flex-col justify-between border-2 border-[#ef4444]/25 bg-[#130b05]/95 rounded-sm p-[1.8cqw] relative">
              <div className="flex flex-col gap-[1.5cqh]">
                <h3 className="font-lishu text-[1.8cqw] text-[#ef4444] font-bold">
                  【 烽燧百里大警报 】
                  <span className="block text-[0.9cqw] font-mono text-[#f97316] uppercase tracking-wider mt-1">
                    100-Mile Beacon Relay Network
                  </span>
                </h3>
                <p className="text-[1cqw] leading-[1.4] text-[#ebdcb9]/80 font-serif">
                  前线突发敌情，哨所瞬发火光。一站一站传递警报，百里大漠，半日告急玉门要塞。
                  <span className="block font-mono text-[0.85cqw] text-[#ef4444]/80 mt-1">
                    Vanguard post signals! Relayed chain triggers alert, flash cutting the desert in hours.
                  </span>
                </p>
              </div>

              {/* Animated Relay Chain SVG */}
              <div className="flex-1 flex items-center justify-center my-[1.5cqh]">
                <svg viewBox="0 0 150 180" className="w-full h-full overflow-visible">
                  {/* Mountain sand ridge curve linking towers */}
                  <path
                    d="M 20 160 Q 60 140, 100 100 T 130 30"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="0.8"
                    strokeDasharray="4 4"
                    className="opacity-45"
                  />

                  {/* 4 Towers along the road */}
                  {[
                    { x: 25, y: 155, name: "楼兰 Loulan", level: 0 },
                    { x: 60, y: 120, name: "鄯善 Shanshan", level: 1 },
                    { x: 95, y: 80, name: "且末 Cherchen", level: 1 },
                    { x: 130, y: 35, name: "玉门 Yumen", level: 2 }
                  ].map((tow, i) => {
                    const isFired = beat >= tow.level;
                    return (
                      <g key={i}>
                        {/* Tower stone icon */}
                        <rect x={tow.x - 5} y={tow.y - 2} width="10" height="9" fill={isFired ? "#ef4444" : "#1a110a"} stroke={isFired ? "#f97316" : "#ef4444"} strokeWidth="1" />
                        <line x1={tow.x} y1={tow.y - 2} x2={tow.x} y2={tow.y - 6} stroke={isFired ? "#f97316" : "#ef4444"} strokeWidth="1" />

                        {/* Active fire animation */}
                        {isFired && (
                          <g className="animate-garrison-flame" style={{ transformOrigin: `${tow.x}px ${tow.y - 6}px` }}>
                            <path d={`M ${tow.x - 2} ${tow.y - 6} Q ${tow.x} ${tow.y - 12} ${tow.x + 2} ${tow.y - 6} Z`} fill="#facc15" />
                            <path d={`M ${tow.x - 3} ${tow.y - 5} Q ${tow.x} ${tow.y - 10} ${tow.x + 3} ${tow.y - 5} Z`} fill="#f97316" className="opacity-80" />
                          </g>
                        )}

                        {/* Fired smoke circles */}
                        {isFired && (
                          <circle cx={tow.x} cy={tow.y - 10} r="1.5" fill="#f97316" className="opacity-65 animate-ping" />
                        )}

                        {/* Label name */}
                        <text x={tow.x + 8} y={tow.y + 4} fontSize="5" fill="#ebdcb9" className="font-serif">
                          {tow.name}
                        </text>
                        {/* Relay trigger arrow indicator */}
                        {i > 0 && beat >= tow.level && (
                          <path
                            d={`M ${tow.x - 18} ${tow.y + 12} L ${tow.x - 8} ${tow.y + 6}`}
                            fill="none"
                            stroke="#f97316"
                            strokeWidth="1"
                            markerEnd="url(#arrow)"
                          />
                        )}
                      </g>
                    );
                  })}
                  
                  {/* SVG marker definitions */}
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 2 L 10 5 L 0 8 z" fill="#f97316" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Check status message */}
              <div className="bg-[#ef4444]/10 border border-[#ef4444]/30 rounded-sm p-[0.6cqw] text-center">
                <span className="font-mono text-[0.8cqw] text-[#ef4444] font-bold block">
                  {beat === 0 ? "【 一站示警：最前线告急 】" : beat === 1 ? "【 烽燧合击：百里网络联动中 】" : "【 玉门大营：十万大军战备拉满 】"}
                </span>
                <span className="font-mono text-[0.68cqw] text-[#f97316]/70 block mt-0.5">
                  {beat === 0 ? "Vanguard Watchtower active" : beat === 1 ? "Beacon relays traversing 300 miles" : "Dunhuang and Yumen divisions charging"}
                </span>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="w-full h-full flex flex-col justify-between p-[1.5cqw]">
            <div className="flex flex-row justify-between items-center border-b-2 border-[#ef4444]/30 pb-[1cqh] mb-[1.5cqh]">
              <div>
                <h2 className="font-lishu text-[2.2cqw] text-[#ef4444] font-black leading-none">
                  西域都护府边防三级战备机制
                </h2>
                <div className="text-[0.85cqw] font-mono tracking-widest text-[#f97316] uppercase mt-[0.3cqh] font-bold">
                  Three Stages of Frontier Alert & Conflict Intercept
                </div>
              </div>
              <div className="font-mono text-[0.8cqw] text-[#f97316]/60 border border-[#f97316]/30 px-2 py-0.5 bg-[#130b05]">
                SEQUENCE • TABLE III
              </div>
            </div>

            {/* 3 Staggered/Process blocks side by side */}
            <div className="flex-1 grid grid-cols-3 gap-[1.5cqw] my-[1.5cqh]">
              {/* Step 1: Scout Warning */}
              <div className={`border-2 rounded-sm p-[1.5cqw] flex flex-col justify-between transition-all duration-500 ${getBeatGlow(0)} bg-[#130b05]/90 relative`}>
                {/* Active check overlay indicator */}
                {beat >= 0 && (
                  <span className="absolute top-2 right-2 font-mono text-[0.8cqw] bg-[#f97316] text-[#0c0805] px-1 py-0.2 font-bold rx-sm">
                    ACTIVE
                  </span>
                )}
                
                <div>
                  <div className="font-mono text-[0.8cqw] text-[#ef4444] font-black tracking-widest uppercase mb-1">
                    STAGE I • 哨探突入
                  </div>
                  <h3 className="font-lishu text-[1.4cqw] text-[#f97316] font-bold leading-tight">
                    游骑侦袭预警
                  </h3>
                  <p className="text-[0.95cqw] leading-[1.4] text-[#ebdcb9]/80 font-serif mt-2">
                    斥候在外侧沙丘侦测到游骑试探，沿线屯田哨卡立刻进入一等防务，战马披鞍。
                  </p>
                  <p className="text-[0.8cqw] font-mono leading-[1.3] text-[#ef4444]/75 mt-2">
                    Scouts identify columns of raiders crossing the sand dunes, triggering high alert.
                  </p>
                </div>

                {/* SVG Visual: radar desert sweep grid */}
                <div className="h-[10cqh] flex items-center justify-center border border-[#ef4444]/20 rounded-sm bg-[#0c0805]/50 my-2 relative">
                  <svg viewBox="0 0 100 50" className="w-full h-full overflow-hidden">
                    <line x1="10" y1="45" x2="90" y2="45" stroke="#ef4444" strokeWidth="0.8" />
                    <line x1="50" y1="45" x2="50" y2="5" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="2 2" />
                    <circle cx="50" cy="45" r="35" fill="none" stroke="#f97316" strokeWidth="0.6" strokeDasharray="3 3" />
                    {/* Flashing red target dots */}
                    {beat >= 0 && (
                      <g>
                        <circle cx="35" cy="20" r="3" fill="#ef4444" className="animate-ping" />
                        <circle cx="35" cy="20" r="2.2" fill="#ef4444" />
                        <circle cx="68" cy="15" r="2" fill="#ef4444" />
                        <text x="35" y="14" fontSize="5.5" fill="#ef4444" textAnchor="middle" className="font-mono font-bold">RAIDER INTRU</text>
                      </g>
                    )}
                  </svg>
                </div>
              </div>

              {/* Step 2: Beacon Ignited */}
              <div className={`border-2 rounded-sm p-[1.5cqw] flex flex-col justify-between transition-all duration-500 ${getBeatGlow(1)} bg-[#130b05]/90 relative`}>
                {beat >= 1 && (
                  <span className="absolute top-2 right-2 font-mono text-[0.8cqw] bg-[#f97316] text-[#0c0805] px-1 py-0.2 font-bold rx-sm">
                    ACTIVE
                  </span>
                )}
                
                <div>
                  <div className="font-mono text-[0.8cqw] text-[#ef4444] font-black tracking-widest uppercase mb-1">
                    STAGE II • 烽燧燃烟
                  </div>
                  <h3 className="font-lishu text-[1.4cqw] text-[#f97316] font-bold leading-tight">
                    百里烽火联动
                  </h3>
                  <p className="text-[0.95cqw] leading-[1.4] text-[#ebdcb9]/80 font-serif mt-2">
                    最前线楼兰哨卡引燃柴草！沿线数十座烽火台一站接一站点火生烟，将情报投射至后方。
                  </p>
                  <p className="text-[0.8cqw] font-mono leading-[1.3] text-[#ef4444]/75 mt-2">
                    Vanguard towers light beacons immediately, transmitting high-speed relay signals.
                  </p>
                </div>

                {/* SVG Visual: Firing watchtower silhouette */}
                <div className="h-[10cqh] flex items-center justify-center border border-[#ef4444]/20 rounded-sm bg-[#0c0805]/50 my-2">
                  <svg viewBox="0 0 100 50" className="w-full h-full overflow-hidden">
                    <rect x="42" y="25" width="16" height="20" fill="none" stroke="#ef4444" strokeWidth="0.8" />
                    <line x1="42" y1="25" x2="48" y2="10" stroke="#ef4444" strokeWidth="0.8" />
                    <line x1="58" y1="25" x2="52" y2="10" stroke="#ef4444" strokeWidth="0.8" />
                    <line x1="48" y1="10" x2="52" y2="10" stroke="#ef4444" strokeWidth="0.8" />
                    
                    {beat >= 1 && (
                      <g className="animate-garrison-flame" style={{ transformOrigin: "50px 10px" }}>
                        <path d="M 47 10 Q 50 -2 ${53} 10" fill="#facc15" stroke="#ef4444" strokeWidth="0.5" />
                        <path d="M 45 10 Q 50 -6 ${55} 10" fill="#f97316" className="opacity-80" />
                        {/* Smoke puffs */}
                        <circle cx="50" cy="-2" r="3" fill="#f97316" className="opacity-50 animate-bounce" />
                        <circle cx="54" cy="-8" r="4.5" fill="#f97316" className="opacity-30" />
                      </g>
                    )}
                  </svg>
                </div>
              </div>

              {/* Step 3: Cavalry Strike */}
              <div className={`border-2 rounded-sm p-[1.5cqw] flex flex-col justify-between transition-all duration-500 ${getBeatGlow(2)} bg-[#130b05]/90 relative`}>
                {beat >= 2 && (
                  <span className="absolute top-2 right-2 font-mono text-[0.8cqw] bg-[#f97316] text-[#0c0805] px-1 py-0.2 font-bold rx-sm">
                    ACTIVE
                  </span>
                )}
                
                <div>
                  <div className="font-mono text-[0.8cqw] text-[#ef4444] font-black tracking-widest uppercase mb-1">
                    STAGE III • 铁骑掩杀
                  </div>
                  <h3 className="font-lishu text-[1.4cqw] text-[#f97316] font-bold leading-tight">
                    轻骑出塞合围
                  </h3>
                  <p className="text-[0.95cqw] leading-[1.4] text-[#ebdcb9]/80 font-serif mt-2">
                    敦煌及玉门关大营骑兵重开铁门，轻重装铁骑按烽火方位狂飙掩杀，一举粉碎掠夺。
                  </p>
                  <p className="text-[0.8cqw] font-mono leading-[1.3] text-[#ef4444]/75 mt-2">
                    Dunhuang cavalry ride out from Yumen Pass, intercepting nomadic raiders perfectly.
                  </p>
                </div>

                {/* SVG Visual: Charging Arrow/Spear vectors */}
                <div className="h-[10cqh] flex items-center justify-center border border-[#ef4444]/20 rounded-sm bg-[#0c0805]/50 my-2">
                  <svg viewBox="0 0 100 50" className="w-full h-full overflow-hidden">
                    {/* Lance vectors shooting from left to right */}
                    {beat >= 2 && (
                      <g>
                        <path d="M 10 15 L 60 15 L 53 11 M 60 15 L 53 19" fill="none" stroke="#f97316" strokeWidth="1.5" className="animate-pulse" />
                        <path d="M 10 32 L 80 32 L 73 28 M 80 32 L 73 36" fill="none" stroke="#ef4444" strokeWidth="1.8" />
                        <circle cx="80" cy="32" r="3" fill="#ebdcb9" className="animate-ping" />
                        <text x="45" y="44" fontSize="6.5" fill="#facc15" textAnchor="middle" className="font-serif italic font-bold">Cavalry Charge!</text>
                      </g>
                    )}
                  </svg>
                </div>
              </div>
            </div>

            {/* Stage bottom combat alert board banner */}
            <div className={`mt-[1cqh] border-2 ${beat >= 2 ? "border-[#ef4444] bg-[#ef4444]/10" : "border-[#f97316]/10 bg-[#130b05]/30"} rounded-sm p-[1cqw] text-center transition-all duration-700`}>
              <span className="font-lishu text-[1.4cqw] text-[#ef4444] font-black tracking-widest block">
                {beat >= 2 ? "【 战备警报：全线防御合围打击启动 】" : "【 边境监控：烽隧守哨巡查中 】"}
              </span>
              <span className="font-mono text-[0.75cqw] text-[#ebdcb9]/60 block mt-1">
                {beat >= 2 ? "MILITARY DECREE: ALL OUTPOSTS ENTERED COMBAT DEFENSE EXTREME" : "STATUS MONITORING: LOCAL WATCHTOWER RECON ACTIVE"}
              </span>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="w-full h-full flex flex-col justify-between p-[1.5cqw]">
            {/* Header border */}
            <div className="flex flex-row justify-between items-center border-b-2 border-[#f97316]/30 pb-[1cqh] mb-[1.5cqh]">
              <div>
                <h2 className="font-lishu text-[2.2cqw] text-[#f97316] font-black leading-none">
                  西域都护府屯田防务四大物资储备
                </h2>
                <div className="text-[0.85cqw] font-mono tracking-widest text-[#ef4444] uppercase mt-[0.3cqh] font-bold">
                  Four Strata of Frontier Garrison Resources & Stockpiles
                </div>
              </div>
              <div className="font-mono text-[0.8cqw] text-[#ef4444]/60 border border-[#ef4444]/30 px-2 py-0.5 bg-[#130b05]">
                RESOURCES • MATRIX IV
              </div>
            </div>

            {/* 2x2 grid comparing reserves */}
            <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-[1.5cqw] my-[1cqh]">
              {/* Q1: Grain */}
              <div className={`border-2 rounded-sm p-[1.5cqw] flex flex-row justify-between items-center transition-all duration-500 ${beat >= 0 ? "border-[#f97316] bg-[#1a110a] shadow-[0_0_15px_rgba(249,115,22,0.15)]" : "border-[#ef4444]/15 bg-[#0c0805]/50 opacity-40"}`}>
                <div className="flex-1 pr-[1cqw]">
                  <div className="font-mono text-[0.75cqw] text-[#ef4444] font-black uppercase mb-1">
                    01 • 军屯军粮粮食 / GRAIN RESERVE
                  </div>
                  <h3 className="font-lishu text-[1.4cqw] text-[#ebdcb9] font-bold leading-none mb-1">
                    粮食储备: 十万石
                  </h3>
                  <p className="text-[0.85cqw] leading-[1.3] text-[#ebdcb9]/70 font-serif">
                    都护府算定各哨仓库存粮食折合十万石，足够全军六个月生存防线，无惧漫长冬天。
                  </p>
                  <p className="text-[0.75cqw] font-mono text-[#f97316]/60 mt-1">
                    Sustains 100,000 Dan grain, enough to withstand 6 months besieged.
                  </p>
                </div>
                {/* Visual storage indicator */}
                <div className="w-[8cqw] h-[8cqw] flex items-center justify-center border border-[#ef4444]/30 rounded-full bg-[#130b05] relative">
                  <svg viewBox="0 0 50 50" className="w-full h-full">
                    <circle cx="25" cy="25" r="18" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="25" cy="25" r="14" fill="none" stroke="#f97316" strokeWidth="2.5" strokeDashoffset="20" strokeDasharray="88" className="transition-all duration-1000" style={{ transform: "rotate(-90deg)", transformOrigin: "25px 25px" }} />
                    <text x="25" y="28.5" fontSize="8" fill="#ebdcb9" fontWeight="bold" textAnchor="middle" className="font-mono">85%</text>
                  </svg>
                </div>
              </div>

              {/* Q2: Arrows stockpile */}
              <div className={`border-2 rounded-sm p-[1.5cqw] flex flex-row justify-between items-center transition-all duration-500 ${beat >= 1 ? "border-[#f97316] bg-[#1a110a] shadow-[0_0_15px_rgba(249,115,22,0.15)]" : "border-[#ef4444]/15 bg-[#0c0805]/50 opacity-40"}`}>
                <div className="flex-1 pr-[1cqw]">
                  <div className="font-mono text-[0.75cqw] text-[#ef4444] font-black uppercase mb-1">
                    02 • 武库强弩铤箭 / ARROW ARSENALS
                  </div>
                  <h3 className="font-lishu text-[1.4cqw] text-[#ebdcb9] font-bold leading-none mb-1">
                    武库箭矢: 五十万支
                  </h3>
                  <p className="text-[0.85cqw] leading-[1.3] text-[#ebdcb9]/70 font-serif">
                    备大黄重弩及铤装青铜弩箭五十万支，可支持十次大型要塞攻防阻击战，火力全盖。
                  </p>
                  <p className="text-[0.75cqw] font-mono text-[#f97316]/60 mt-1">
                    Crossbow bronze arrows 500,000 count ready for extreme siege.
                  </p>
                </div>
                {/* Visual storage indicator */}
                <div className="w-[8cqw] h-[8cqw] flex items-center justify-center border border-[#ef4444]/30 rounded-full bg-[#130b05]">
                  <svg viewBox="0 0 50 50" className="w-full h-full">
                    <circle cx="25" cy="25" r="18" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="25" cy="25" r="14" fill="none" stroke="#f97316" strokeWidth="2.5" strokeDashoffset="10" strokeDasharray="88" />
                    <text x="25" y="28.5" fontSize="8" fill="#ebdcb9" fontWeight="bold" textAnchor="middle" className="font-mono">92%</text>
                  </svg>
                </div>
              </div>

              {/* Q3: Fuel */}
              <div className={`border-2 rounded-sm p-[1.5cqw] flex flex-row justify-between items-center transition-all duration-500 ${beat >= 2 ? "border-[#f97316] bg-[#1a110a] shadow-[0_0_15px_rgba(249,115,22,0.15)]" : "border-[#ef4444]/15 bg-[#0c0805]/50 opacity-40"}`}>
                <div className="flex-1 pr-[1cqw]">
                  <div className="font-mono text-[0.75cqw] text-[#ef4444] font-black uppercase mb-1">
                    03 • 烽燧柴薪火料 / BEACON FUEL
                  </div>
                  <h3 className="font-lishu text-[1.4cqw] text-[#ebdcb9] font-bold leading-none mb-1">
                    烽火薪柴: 六万捆
                  </h3>
                  <p className="text-[0.85cqw] leading-[1.3] text-[#ebdcb9]/70 font-serif">
                    沿线哨所精备红砂、薪柴干草六万捆，富含硫磺、硝石，保障浓烟火光警示百里。
                  </p>
                  <p className="text-[0.75cqw] font-mono text-[#f97316]/60 mt-1">
                    60,000 firewood bundles with sulfur/nitre compound to guarantee high smoke.
                  </p>
                </div>
                {/* Visual storage indicator */}
                <div className="w-[8cqw] h-[8cqw] flex items-center justify-center border border-[#ef4444]/30 rounded-full bg-[#130b05]">
                  <svg viewBox="0 0 50 50" className="w-full h-full">
                    <circle cx="25" cy="25" r="18" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="25" cy="25" r="14" fill="none" stroke="#f97316" strokeWidth="2.5" strokeDashoffset="25" strokeDasharray="88" />
                    <text x="25" y="28.5" fontSize="8" fill="#ebdcb9" fontWeight="bold" textAnchor="middle" className="font-mono">75%</text>
                  </svg>
                </div>
              </div>

              {/* Q4: Troop garrison */}
              <div className={`border-2 rounded-sm p-[1.5cqw] flex flex-row justify-between items-center transition-all duration-500 ${beat >= 2 ? "border-[#f97316] bg-[#1a110a] shadow-[0_0_15px_rgba(249,115,22,0.15)]" : "border-[#ef4444]/15 bg-[#0c0805]/50 opacity-40"}`}>
                <div className="flex-1 pr-[1cqw]">
                  <div className="font-mono text-[0.75cqw] text-[#ef4444] font-black uppercase mb-1">
                    04 • 屯兵兵额马匹 / TROOP FORCE
                  </div>
                  <h3 className="font-lishu text-[1.4cqw] text-[#ebdcb9] font-bold leading-none mb-1">
                    屯兵编制: 两万四
                  </h3>
                  <p className="text-[0.85cqw] leading-[1.3] text-[#ebdcb9]/70 font-serif">
                    常备两万四千五百精兵，战时可即时动员十万农兵转为守卒，退役老卒为教头核心。
                  </p>
                  <p className="text-[0.75cqw] font-mono text-[#f97316]/60 mt-1">
                    24,500 elite soldiers with instant mobilization capacity of 100,000.
                  </p>
                </div>
                {/* Visual storage indicator */}
                <div className="w-[8cqw] h-[8cqw] flex items-center justify-center border border-[#ef4444]/30 rounded-full bg-[#130b05]">
                  <svg viewBox="0 0 50 50" className="w-full h-full">
                    <circle cx="25" cy="25" r="18" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="25" cy="25" r="14" fill="none" stroke="#f97316" strokeWidth="2.5" strokeDashoffset="15" strokeDasharray="88" />
                    <text x="25" y="28.5" fontSize="8" fill="#ebdcb9" fontWeight="bold" textAnchor="middle" className="font-mono">80%</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Table-bottom audited verification stamp */}
            {beat >= 2 && (
              <div className="text-center font-mono text-[0.8cqw] text-[#f97316] bg-[#ef4444]/15 border border-[#ef4444]/40 py-1 rounded-sm mt-1 animate-pulse font-bold uppercase">
                ✦ 粮谷、箭镞、薪柴、兵额已全线盘点核对完毕 • ALL RESOURCES SYNCHRONIZED AND VERIFIED ✦
              </div>
            )}
          </div>
        );
      case 5:
        return (
          <div className="w-full h-full flex flex-col justify-between p-[1cqw] relative overflow-hidden">
            {/* Scroll Header */}
            <div className="text-center border-b-2 border-[#ef4444] pb-[0.6cqh] mb-[0.8cqh] pointer-events-none">
              <div className="font-lishu text-[2cqw] text-[#ef4444] font-black tracking-widest leading-none">
                西域都护府边防屯田军资总账
              </div>
              <div className="text-[0.7cqw] font-mono tracking-widest text-[#f97316] uppercase mt-[0.3cqh] leading-none">
                WESTERN PROTECTORATE MILITARY LEDGER (AD 73 • HAN EMPIRE)
              </div>
            </div>

            {/* Extreme high density table manifest */}
            <div className="flex-1 my-[0.5cqh] overflow-auto select-text">
              <table className="w-full text-left text-[0.85cqw] border-collapse font-serif text-[#ebdcb9]">
                <thead>
                  <tr className="border-b border-[#ef4444] font-bold text-[#ef4444] font-lishu text-[1cqw]">
                    <th className="py-[0.6cqh] pl-2">要塞哨所 Fort</th>
                    <th className="py-[0.6cqh]">垦田面积 Farmlands</th>
                    <th className="py-[0.6cqh] text-right">军马常备 Horses</th>
                    <th className="py-[0.6cqh] text-right">大黄强弩 Bows</th>
                    <th className="py-[0.6cqh] text-right">来犯次数 Skirmishes</th>
                    <th className="py-[0.6cqh] text-right pr-2">警备级别 Alert</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-[0.8cqw]">
                  <tr className={`border-b border-[#ef4444]/15 bg-[#130b05]/30 ${getBeatClass(0)}`}>
                    <td className="py-[0.5cqh] pl-2 font-serif font-bold text-[#facc15]">敦煌大营 Dunhuang</td>
                    <td className="py-[0.5cqh]">45,000 亩 (Abundant)</td>
                    <td className="py-[0.5cqh] text-right text-[#f97316] font-bold">6,800 匹</td>
                    <td className="py-[0.5cqh] text-right">12,400 张</td>
                    <td className="py-[0.5cqh] text-right text-[#ef4444]">14 次</td>
                    <td className="py-[0.5cqh] text-right text-emerald-500 font-bold pr-2">安全 (SECURE)</td>
                  </tr>
                  <tr className={`border-b border-[#ef4444]/15 bg-[#130b05]/30 ${getBeatClass(0)}`}>
                    <td className="py-[0.5cqh] pl-2 font-serif font-bold text-[#facc15]">楼兰哨卡 Loulan</td>
                    <td className="py-[0.5cqh]">12,000 亩 (Limited)</td>
                    <td className="py-[0.5cqh] text-right text-[#f97316]">1,200 匹</td>
                    <td className="py-[0.5cqh] text-right">4,500 张</td>
                    <td className="py-[0.5cqh] text-right text-[#ef4444] font-bold">34 次</td>
                    <td className="py-[0.5cqh] text-right text-amber-500 font-bold pr-2">戒备 (ALERT)</td>
                  </tr>
                  <tr className={`border-b border-[#ef4444]/15 bg-[#130b05]/30 ${getBeatClass(1)}`}>
                    <td className="py-[0.5cqh] pl-2 font-serif font-bold text-[#facc15]">龟兹要塞 Qiuci</td>
                    <td className="py-[0.5cqh]">28,000 亩 (Modest)</td>
                    <td className="py-[0.5cqh] text-right text-[#f97316] font-bold">3,500 匹</td>
                    <td className="py-[0.5cqh] text-right">8,000 张</td>
                    <td className="py-[0.5cqh] text-right text-[#ef4444]">8 次</td>
                    <td className="py-[0.5cqh] text-right text-emerald-500 font-bold pr-2">安全 (SECURE)</td>
                  </tr>
                  <tr className={`border-b border-[#ef4444]/15 bg-[#130b05]/30 ${getBeatClass(1)}`}>
                    <td className="py-[0.5cqh] pl-2 font-serif font-bold text-[#facc15]">疏勒都镇 Shule</td>
                    <td className="py-[0.5cqh]">32,000 亩 (Regular)</td>
                    <td className="py-[0.5cqh] text-right text-[#f97316]">2,400 匹</td>
                    <td className="py-[0.5cqh] text-right">6,200 张</td>
                    <td className="py-[0.5cqh] text-right text-[#ef4444]">12 次</td>
                    <td className="py-[0.5cqh] text-right text-emerald-500 font-bold pr-2">安全 (SECURE)</td>
                  </tr>
                  <tr className={`border-b border-[#ef4444]/15 bg-[#130b05]/30 ${getBeatClass(2)}`}>
                    <td className="py-[0.5cqh] pl-2 font-serif font-bold text-[#facc15]">乌孙边镇 Wusun</td>
                    <td className="py-[0.5cqh]">15,000 亩 (Limited)</td>
                    <td className="py-[0.5cqh] text-right text-[#f97316] font-bold">4,200 匹</td>
                    <td className="py-[0.5cqh] text-right">3,000 张</td>
                    <td className="py-[0.5cqh] text-right text-[#ef4444] font-bold">22 次</td>
                    <td className="py-[0.5cqh] text-right text-amber-500 font-bold pr-2">戒备 (ALERT)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Legal bureaucratic clauses / subtable underlay */}
            <div className="border-t border-[#ef4444]/30 pt-[1cqh] flex flex-row justify-between items-center text-[0.72cqw] text-[#ebdcb9]/60 font-mono">
              <div className="flex-1 pr-4 leading-relaxed font-serif">
                奏案：西域都护都司呈兵部，各堡屯田丰足，强弩充备，烽台联动无虞，敕命呈阁校勘，奉敕加盖都护印。
                <span className="block font-mono text-[0.62cqw] text-[#ef4444]/80 mt-0.5 uppercase">
                  Decree: All garrisons audited. Food stores filled, crossbow arsenals secured, beacon coupling tested. Approved by General Ban Chao.
                </span>
              </div>
              <div className="w-[12cqw] text-right border-l border-[#ef4444]/20 pl-[1cqw] leading-tight">
                <div>CHEXUM MD5: 0x9AF88210B</div>
                <div className="mt-1">STAMP TIME: AD 73 JUL 5</div>
              </div>
            </div>

            {/* Giant Red Official Seal slammed down on Beat 2 */}
            {beat >= 1 && (
              <div className="absolute bottom-[2.5cqw] right-[14cqw] w-[8cqw] h-[8cqw] select-none pointer-events-none z-40 animate-seal-stamp">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#ef4444] drop-shadow-[0_4px_12px_rgba(239,68,68,0.4)]">
                  {/* Thick outer border */}
                  <rect x="5" y="5" width="90" height="90" fill="none" stroke="currentColor" strokeWidth="4.5" />
                  {/* Inner thin dashed border */}
                  <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 1" />
                  
                  {/* Quad-split grid guidelines */}
                  <line x1="36" y1="5" x2="36" y2="95" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="64" y1="5" x2="64" y2="95" stroke="currentColor" strokeWidth="1.5" />

                  {/* CJK letters in Han Seal style */}
                  <text x="21" y="28" fontSize="13" textAnchor="middle" fontWeight="bold" fontFamily="serif" fill="currentColor">西</text>
                  <text x="21" y="52" fontSize="13" textAnchor="middle" fontWeight="bold" fontFamily="serif" fill="currentColor">域</text>
                  <text x="21" y="76" fontSize="13" textAnchor="middle" fontWeight="bold" fontFamily="serif" fill="currentColor">都</text>
                  
                  <text x="50" y="28" fontSize="13" textAnchor="middle" fontWeight="bold" fontFamily="serif" fill="currentColor">护</text>
                  <text x="50" y="52" fontSize="13" textAnchor="middle" fontWeight="bold" fontFamily="serif" fill="currentColor">府</text>
                  <text x="50" y="76" fontSize="13" textAnchor="middle" fontWeight="bold" fontFamily="serif" fill="currentColor">之</text>
                  
                  <text x="79" y="52" fontSize="13" textAnchor="middle" fontWeight="bold" fontFamily="serif" fill="currentColor">印</text>
                  
                  {/* Fine print seal attribution */}
                  <rect x="36" y="80" width="28" height="10" fill="#0c0805" />
                  <text x="50" y="87.5" fontSize="5.5" textAnchor="middle" fill="#ebdcb9" className="font-mono">AD 73</text>
                </svg>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div key={`${scene}-${beat}`} className="w-full h-full flex flex-row bg-[#0c0805] text-[#f97316] font-mono relative overflow-hidden select-none p-[2.2cqw]">
      {/* Dynamic inline styles for the custom high-fidelity animation sequences */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@700;900&display=swap');
        
        .font-lishu {
          font-family: 'LiSu', 'STKaiti', 'Noto Serif SC', serif;
          letter-spacing: 0.12em;
          text-shadow: 0 0 12px rgba(249, 115, 22, 0.25);
        }
        
        @keyframes sandstorm-drift {
          0% { transform: translate(-30px, -20px) scale(0.8); opacity: 0; }
          40% { opacity: 0.25; }
          100% { transform: translate(120px, 15px) scale(1.1); opacity: 0; }
        }
        
        @keyframes spark-float {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 1; }
          100% { transform: translateY(-120px) translateX(var(--drift, 30px)) scale(0.2); opacity: 0; }
        }
        
        @keyframes arrow-shoot {
          0% { transform: translate(110%, -10%) rotate(-15deg); opacity: 0; }
          15% { opacity: 0.95; }
          85% { opacity: 0.95; }
          100% { transform: translate(-110%, 25%) rotate(-15deg); opacity: 0; }
        }
        
        @keyframes beacon-smoke {
          0% { transform: translateY(0) scale(0.6); opacity: 0.85; filter: blur(1.5px); }
          50% { transform: translateY(-35px) scale(1.4) translateX(8px); opacity: 0.45; filter: blur(4px); }
          100% { transform: translateY(-80px) scale(2.2) translateX(20px); opacity: 0; filter: blur(7px); }
        }

        @keyframes beacon-flame {
          0%, 100% { transform: scale(1) rotate(-1.5deg); filter: brightness(1); }
          50% { transform: scale(1.18) rotate(2deg); filter: brightness(1.25); }
        }
        
        @keyframes glitch-flash {
          0%, 100% { opacity: 0; }
          25%, 75% { opacity: 0.75; }
          45%, 55% { opacity: 0.35; }
          50% { opacity: 1; }
        }
        
        @keyframes stamp-slam {
          0% { transform: scale(2.8) rotate(-20deg); opacity: 0; filter: blur(3.5px); }
          75% { transform: scale(0.96) rotate(1deg); opacity: 0.95; filter: blur(0); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        .animate-sandstorm { animation: sandstorm-drift 2.2s linear infinite; }
        .animate-spark { animation: spark-float 1.2s ease-out infinite; }
        .animate-arrow { animation: arrow-shoot 0.8s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
        .animate-smoke-particle { animation: beacon-smoke 1.8s ease-out infinite; }
        .animate-garrison-flame { animation: beacon-flame 0.4s ease-in-out infinite; }
        .animate-glitch-overlay { animation: glitch-flash 0.8s steps(2) forwards; }
        .animate-seal-stamp { animation: stamp-slam 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.2) forwards; }
      `}</style>

      {/* West-Desert Sandstorm Glitch (Hard Splitch / Glitch) Transition Overlay on scene changes */}
      {glitchActive && (
        <div className="absolute inset-0 z-50 bg-[#0c0805]/65 backdrop-blur-[1px] pointer-events-none overflow-hidden animate-glitch-overlay">
          {/* Flying sand storm particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => {
              const top = Math.random() * 100;
              const left = Math.random() * 100;
              const delay = Math.random() * 0.4;
              const duration = 0.4 + Math.random() * 0.6;
              return (
                <div
                  key={`sand-${i}`}
                  className="absolute bg-[#f97316]/50 rounded-full animate-sandstorm"
                  style={{
                    top: `${top}%`,
                    left: `${left}%`,
                    width: `${1.2 + Math.random() * 2.5}px`,
                    height: `${1 + Math.random() * 1.5}px`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                  }}
                />
              );
            })}
          </div>
          
          {/* Beacon sparks */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => {
              const top = 50 + Math.random() * 50;
              const left = Math.random() * 100;
              const drift = -40 + Math.random() * 80;
              const delay = Math.random() * 0.25;
              const size = 1.2 + Math.random() * 3.5;
              return (
                <div
                  key={`spark-${i}`}
                  className="absolute bg-[#ef4444] rounded-full animate-spark"
                  style={{
                    top: `${top}%`,
                    left: `${left}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    "--drift": `${drift}px`,
                    animationDelay: `${delay}s`,
                  }}
                />
              );
            })}
          </div>

          {/* Shooting military arrow lines */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => {
              const top = Math.random() * 80;
              const delay = Math.random() * 0.35;
              const duration = 0.25 + Math.random() * 0.35;
              return (
                <div
                  key={`arrow-${i}`}
                  className="absolute bg-gradient-to-l from-transparent via-[#f97316] to-[#ef4444] h-[1.2px] w-[90px] animate-arrow"
                  style={{
                    top: `${top}%`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                  }}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* 1. Left Margin: Great Wall & Beacon Towers Navigation */}
      {renderNavigation()}

      {/* 2. Main Scene Display Area (Remaining width, integrated layouts) */}
      <div className="flex-1 h-full relative border-2 border-[#ef4444]/20 bg-[#130b05]/30 rounded-sm ml-[1.5cqw] z-10 shadow-[inner_0_0_20px_rgba(249,115,22,0.03)] flex flex-col justify-between overflow-hidden">
        {/* Border corner brackets */}
        <div className="absolute top-0 left-0 w-[8px] h-[8px] border-t-2 border-l-2 border-[#f97316] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[8px] h-[8px] border-t-2 border-r-2 border-[#f97316] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[8px] h-[8px] border-b-2 border-l-2 border-[#f97316] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[8px] h-[8px] border-b-2 border-r-2 border-[#f97316] pointer-events-none" />

        {renderSceneContent()}
      </div>
    </div>
  );
}
