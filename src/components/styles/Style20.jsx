import React from "react";

export const getMetadata = (lang) => ({
  id: "20",
  tier: "C",
  name: lang === "zh" ? "汉代西域都护府屯田网格" : "Han Dynasty Frontier Outposts",
  theme: lang === "zh" ? "西域都护府屯田防务体系" : "Han Dynasty Frontier Defense Grid",
  densityLabel: lang === "zh" ? "边防屯田" : "Frontier Garrison Grid",
  colors: { bg: "bg-[#ebdcb9]", ink: "text-[#38281a]", panel: "border-[#caa684]" },
  typography: { header: "font-serif", body: "font-serif" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "西域都护府屯田诏书" : "The Frontier Garrison Proclamation",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "宣读屯田诏" : "Read Garrison Proclamation", 
          title: lang === "zh" ? "屯田开边之基本方略" : "The Strategic Frontier Settlement", 
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

export default function Style20({ scene, beat, language, isThumbnail }) {
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
      <div className="relative w-full h-full flex items-center justify-center border border-[#c5b596] bg-[#ebdcb9] rounded-[0.5cqw] overflow-hidden p-[1cqw] shadow-inner">
        {/* Bamboo slips / silk stripes background texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] grid grid-cols-12 h-full w-full" style={{
          backgroundImage: "linear-gradient(90deg, #38281a 1px, transparent 1px)",
          backgroundSize: "2.8cqw 100%"
        }} />

        {/* Hand-inked double boarders */}
        <div className="absolute inset-[0.8cqw] border-2 border-[#b09d80] pointer-events-none" />
        <div className="absolute left-[3cqw] top-0 bottom-0 w-[1px] bg-[#a8442a] opacity-35 pointer-events-none" />

        {scene === 1 && (
          <div className="relative flex flex-col items-center justify-center w-full h-full text-center p-[1.5cqw]">
            {/* Han Seal Style Box SVG */}
            <svg viewBox="0 0 120 120" className="w-[12cqw] h-[12cqw] text-[#a03822] opacity-85 mb-2">
              <rect x="15" y="15" width="90" height="90" fill="none" stroke="currentColor" strokeWidth="1.5" />
              {/* Seal lettering style outlines */}
              <path d="M 25,25 L 25,95 M 95,25 L 95,95 M 60,15 L 60,105" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 2" />
              {/* Han Lishu character sketches */}
              <text x="37" y="48" fontSize="22" textAnchor="middle" fontWeight="bold" fontFamily="serif" fill="currentColor">西</text>
              <text x="37" y="82" fontSize="22" textAnchor="middle" fontWeight="bold" fontFamily="serif" fill="currentColor">域</text>
              <text x="77" y="48" fontSize="22" textAnchor="middle" fontWeight="bold" fontFamily="serif" fill="currentColor">都</text>
              <text x="77" y="82" fontSize="22" textAnchor="middle" fontWeight="bold" fontFamily="serif" fill="currentColor">护</text>
              <text x="60" y="103" fontSize="5.5" textAnchor="middle" fontWeight="bold" fill="#38281a">HAN FRONTIER SEAL</text>
            </svg>
            <div className={`mt-[1cqh] font-serif italic text-[#6a4f32] text-[1.1cqw] font-bold ${getBeatClass(1)}`}>
              Official Red Stamp of the Western Han Dynasty Protectorate General.
            </div>
          </div>
        )}

        {scene === 2 && (
          <div className="grid grid-cols-2 gap-[1cqw] w-full h-full p-[1cqw]">
            {/* Dunhuang Camp */}
            <div className="flex flex-col justify-between border-r border-[#cca884] pr-[0.8cqw]">
              <span className="font-serif text-[1.05cqw] text-[#a03822] font-bold uppercase tracking-wider text-center border-b border-[#cca884] pb-1 mb-2">
                Dunhuang (Base Camp)
              </span>
              <div className="flex-1 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-[10cqw] h-[10cqw] text-[#805e3b] opacity-80">
                  {/* City walls and gates */}
                  <rect x="25" y="45" width="50" height="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M 25,45 L 35,30 L 65,30 L 75,45 M 40,30 L 40,20 L 60,20 L 60,30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M 45,80 L 45,65 Q 50,60 55,65 L 55,80" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <text x="50" y="14" fontSize="4.5" textAnchor="middle" className="font-serif italic text-[#a03822] font-bold">Logistics Hub</text>
                  <text x="50" y="93" fontSize="3.8" textAnchor="middle" className="font-serif italic opacity-60">10,000+ Archers</text>
                </svg>
              </div>
              <span className="font-serif text-[0.8cqw] text-[#70553d] italic text-center">Rear supply hub, feeding food and weapon arsenals.</span>
            </div>
            {/* Loulan Outpost */}
            <div className="flex flex-col justify-between pl-[0.8cqw]">
              <span className="font-serif text-[1.05cqw] text-[#a03822] font-bold uppercase tracking-wider text-center border-b border-[#cca884] pb-1 mb-2">
                Loulan (Frontier Post)
              </span>
              <div className="flex-1 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-[10cqw] h-[10cqw] text-[#a03822]">
                  {/* Beacon watchtower */}
                  <rect x="38" y="45" width="24" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M 34,45 L 42,20 L 58,20 L 66,45 M 46,20 L 46,12 L 54,20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  {/* Beacon flame based on beat */}
                  <path d="M 48,12 Q 50,2 52,12 Z" fill={beat >= 1 ? "#d94a2a" : "none"} stroke={beat >= 1 ? "#a03822" : "none"} strokeWidth="0.4" className="animate-pulse" />
                  <text x="50" y="8" fontSize="4.5" textAnchor="middle" className="font-serif italic font-bold">Beacon Outpost</text>
                  <text x="50" y="93" fontSize="3.8" textAnchor="middle" className="font-serif italic opacity-60">Tactical Recon</text>
                </svg>
              </div>
              <span className="font-serif text-[0.8cqw] text-[#a03822] italic font-bold text-center">Foresight watchtowers directly facing Xiongnu frontiers.</span>
            </div>
          </div>
        )}

        {scene === 3 && (
          <div className="relative w-full h-full flex flex-col justify-between p-[1cqw]">
            <div className="flex justify-between items-center border-b border-[#caa684] pb-[0.5cqh]">
              <span className="font-serif text-[1.1cqw] text-[#a03822] uppercase tracking-wider font-bold">Frontier Combat Mobilization Sequence</span>
              <span className="font-mono text-[0.8cqw] text-[#6a4f32]">HAN MILITARY • TAB. VII</span>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-[1cqh] my-[1cqh]">
              <div className={`flex items-start gap-2.5 p-[0.6cqw] bg-[#faf6ed]/70 border border-[#caa684] rounded-sm ${getBeatClass(0)}`}>
                <span className="font-mono font-bold text-[#a03822] text-[0.9cqw] mt-0.5">[Alert]</span>
                <div>
                  <h4 className="font-bold text-[#38281a] text-[0.95cqw] leading-none mb-1">Cavalry Incursion Scouting</h4>
                  <p className="text-[0.8cqw] text-[#7a5a3d] leading-tight">Scouts flag raiders crossing northern dunes, alerting local farmlands to enter fortress shields.</p>
                </div>
              </div>
              <div className={`flex items-start gap-2.5 p-[0.6cqw] bg-[#faf6ed]/70 border border-[#caa684] rounded-sm ${getBeatClass(1)}`}>
                <span className="font-mono font-bold text-[#a03822] text-[0.9cqw] mt-0.5">[Relay]</span>
                <div>
                  <h4 className="font-bold text-[#38281a] text-[0.95cqw] leading-none mb-1">Beacon Smoke Transmission</h4>
                  <p className="text-[0.8cqw] text-[#7a5a3d] leading-tight">Frontier watchtower fires wolf smoke, alerting adjacent towers across 300 miles instantly.</p>
                </div>
              </div>
              <div className={`flex items-start gap-2.5 p-[0.6cqw] bg-[#faf6ed]/70 border border-[#a03822]/40 rounded-sm ${getBeatClass(2)}`}>
                <span className="font-mono font-bold text-[#a03822] text-[0.9cqw] mt-0.5">[Strike]</span>
                <div>
                  <h4 className="font-bold text-[#a03822] text-[0.95cqw] leading-none mb-1">Dunhuang Cavalry Intercept</h4>
                  <p className="text-[0.8cqw] text-[#a03822] leading-tight">Yumen pass heavy riders strike from flanks, crushing raid columns to secure harvest grids.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {scene === 4 && (
          <div className="grid grid-cols-2 grid-rows-2 gap-[1cqw] w-full h-full p-[0.5cqw]">
            <div className="border border-[#caa684] bg-[#faf3dc] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#a03822] border-b border-[#caa684] pb-[0.2cqh]">Sector I: Farmland Grid</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Opened Fields:</span><span className="text-emerald-800 font-bold">12,000 Mu</span></div>
                <div className="flex justify-between"><span>Irrigation Canals:</span><span>Shule river fed</span></div>
                <div className="flex justify-between"><span>Harvest Safety:</span><span className="text-emerald-700 font-bold">94.2% Secure</span></div>
              </div>
            </div>
            <div className="border border-[#caa684] bg-[#faf3dc] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#a03822] border-b border-[#caa684] pb-[0.2cqh]">Sector II: Weapon Stockpiles</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Bronze Arrows:</span><span className="text-[#a03822] font-bold">500,000+</span></div>
                <div className="flex justify-between"><span>Dahuang Bows:</span><span className="text-emerald-700 font-bold">12,400 Units</span></div>
                <div className="flex justify-between"><span>Siege Ballistas:</span><span>84 Installed</span></div>
              </div>
            </div>
            <div className="border border-[#caa684] bg-[#faf3dc] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#a03822] border-b border-[#caa684] pb-[0.2cqh]">Sector III: Signal Beacons</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Total Towers:</span><span>45 Watchtowers</span></div>
                <div className="flex justify-between"><span>Fuel Stockpiles:</span><span className="text-emerald-700 font-bold">8 months safe</span></div>
                <div className="flex justify-between"><span>Relay Time:</span><span className="text-emerald-700 font-bold">Under 4 hours</span></div>
              </div>
            </div>
            <div className="border border-[#caa684] bg-[#faf3dc] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#a03822] border-b border-[#caa684] pb-[0.2cqh]">Sector IV: Garrison Reserves</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Farm Soldiers:</span><span>24,500 active</span></div>
                <div className="flex justify-between"><span>Heavy Cavalry:</span><span className="text-emerald-700 font-bold">6,800 Riders</span></div>
                <div className="flex justify-between"><span>Mobilization Cap:</span><span className="text-emerald-700 font-bold">100,000+ men</span></div>
              </div>
            </div>
          </div>
        )}

        {scene === 5 && (
          <div className="relative w-full h-full flex flex-col justify-between p-[0.8cqw] font-serif text-[#38281a]">
            <div className="text-center font-bold text-[1cqw] uppercase tracking-widest border-b-2 border-[#a03822] pb-[0.2cqh] mb-[0.5cqh] text-[#a03822]">
              西域都护府边防屯田军资总账 (AD 73)
            </div>
            <div className="flex-1 flex flex-col justify-center my-[0.2cqw]">
              <table className="w-full text-left text-[0.78cqw] border-collapse font-serif">
                <thead>
                  <tr className="border-b border-[#a03822]/40 font-bold text-[#a03822]">
                    <th className="py-1">戍防要塞 Fort</th>
                    <th className="py-1">屯田垦量 Farmlands</th>
                    <th className="py-1 text-right">军马常备 Horses</th>
                    <th className="py-1 text-right">常备强弩 Crossbows</th>
                    <th className="py-1 text-right">烽燧报警 Beacon status</th>
                  </tr>
                </thead>
                <tbody className="text-[#57412f] font-mono text-[0.75cqw]">
                  <tr className={`border-b border-[#caa684]/40 ${getBeatClass(0)}`}>
                    <td className="py-1 font-serif font-bold">敦煌大营 Dunhuang</td>
                    <td className="py-1">45,000 亩 (Abond.)</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">6,800 匹</td>
                    <td className="py-1 text-right">12,400 张</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">安全 (SECURE)</td>
                  </tr>
                  <tr className={`border-b border-[#caa684]/40 ${getBeatClass(0)}`}>
                    <td className="py-1 font-serif font-bold">楼兰哨卡 Loulan</td>
                    <td className="py-1">12,000 亩 (Limit)</td>
                    <td className="py-1 text-right">1,200 匹</td>
                    <td className="py-1 text-right">4,500 张</td>
                    <td className="py-1 text-right text-amber-700 font-bold">警备 (ALERT)</td>
                  </tr>
                  <tr className={`border-b border-[#caa684]/40 ${getBeatClass(1)}`}>
                    <td className="py-1 font-serif font-bold text-[#a03822]">龟兹要塞 Qiuci</td>
                    <td className="py-1">28,000 亩 (Modest)</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">3,500 匹</td>
                    <td className="py-1 text-right">8,000 张</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">安全 (SECURE)</td>
                  </tr>
                  <tr className={`border-b border-[#caa684]/40 ${getBeatClass(1)}`}>
                    <td className="py-1 font-serif font-bold">疏勒都镇 Shule</td>
                    <td className="py-1">32,000 亩 (Regul.)</td>
                    <td className="py-1 text-right">2,400 匹</td>
                    <td className="py-1 text-right">6,200 张</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">安全 (SECURE)</td>
                  </tr>
                  <tr className={`${getBeatClass(2)}`}>
                    <td className="py-1 font-serif font-bold">乌孙边镇 Wusun</td>
                    <td className="py-1">15,000 亩 (Limit)</td>
                    <td className="py-1 text-right">4,200 匹</td>
                    <td className="py-1 text-right">3,000 张</td>
                    <td className="py-1 text-right text-amber-700 font-bold">警备 (ALERT)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="border-t border-[#caa684] pt-1 text-[0.7cqw] text-[#70553d] italic text-center font-serif">
              奏案：西域都护都司呈兵部，各堡屯田丰足，强弩充备，烽台联动无虞，奉敕加盖都护印。
            </div>
          </div>
        )}

        {/* Traditional square Han Seal / 西域都护府之印 (Stamps on Beat 1 for Scene 5, or always subtly visible) */}
        {scene === 5 && (
          <div className={`absolute bottom-[1.8cqw] right-[1.8cqw] w-[5cqw] h-[5cqw] transition-all duration-1000 ${beat >= 1 ? "opacity-85 scale-100 rotate-0" : "opacity-15 scale-90 rotate-0"} pointer-events-none select-none`}>
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#a03822] drop-shadow-[1px_2px_4px_rgba(160,56,34,0.2)]">
              {/* Han seal double border */}
              <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="3" />
              <rect x="14" y="14" width="72" height="72" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 1" />
              {/* Seal columns */}
              <line x1="36" y1="10" x2="36" y2="90" stroke="currentColor" strokeWidth="1.5" />
              <line x1="64" y1="10" x2="64" y2="90" stroke="currentColor" strokeWidth="1.5" />
              <text x="23" y="32" fontSize="13" textAnchor="middle" fontWeight="bold" fontFamily="serif" fill="currentColor">西</text>
              <text x="23" y="52" fontSize="13" textAnchor="middle" fontWeight="bold" fontFamily="serif" fill="currentColor">域</text>
              <text x="23" y="72" fontSize="13" textAnchor="middle" fontWeight="bold" fontFamily="serif" fill="currentColor">都</text>
              <text x="50" y="32" fontSize="13" textAnchor="middle" fontWeight="bold" fontFamily="serif" fill="currentColor">护</text>
              <text x="50" y="52" fontSize="13" textAnchor="middle" fontWeight="bold" fontFamily="serif" fill="currentColor">府</text>
              <text x="50" y="72" fontSize="13" textAnchor="middle" fontWeight="bold" fontFamily="serif" fill="currentColor">之</text>
              <text x="77" y="52" fontSize="13" textAnchor="middle" fontWeight="bold" fontFamily="serif" fill="currentColor">印</text>
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
          <span className="font-sans text-[1.2cqw] font-bold tracking-wider uppercase opacity-65 text-[#7a5a3d] border-b border-[#caa684] pb-[0.5cqh] inline-block">
            {meta.theme}
          </span>
          <h1 className="text-[3.2cqw] leading-[1.1] font-black tracking-tight font-serif mt-[1cqh] text-[#a03822]">
            {currentBeat.title}
          </h1>
          <p className="text-[1.3cqw] leading-[1.4] opacity-95 font-serif mt-[1.5cqh] text-[#4d3625]">
            {currentBeat.body}
          </p>
        </div>

        {/* Marginal Editorial Footnote */}
        <div className="flex flex-col gap-[0.5cqh] mt-[2cqh] border-t border-[#caa684] pt-[1cqh]">
          <div className="flex justify-between text-[0.8cqw] font-mono text-[#7a5a3d]">
            <span>FRONTIER: WESTERN GARRISON</span>
            <span>CHRONO: HAN EMPIRE YR VII (AD 73)</span>
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
