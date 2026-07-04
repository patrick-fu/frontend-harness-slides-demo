import React from "react";
import { 
  Compass, Map, FileText, Scroll, Scale, Coins, BookOpen, Sparkles, 
  Feather, History, Award, Check, Activity, TrendingUp, ShieldCheck,
  ArrowRight, Landmark, Droplet, AlertTriangle
} from "lucide-react";

export const getMetadata = (lang) => ({
  id: "05",
  tier: "A",
  name: lang === "zh" ? "丝绸之路微观印记" : "Silk Road Chronicles",
  theme: lang === "zh" ? "历史地理学研究" : "Historical Geography",
  densityLabel: lang === "zh" ? "Bespoke Custom" : "Bespoke Custom",
  colors: { bg: "bg-[#fbf7f0]", ink: "text-[#2b2520]", panel: "border-[#8c7a6b]/20" },
  typography: { header: "font-serif", body: "font-sans" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "沙海纪行" : "Chronicles of the Sand",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "绘制商旅驼影" : "Draw Caravan Silhouette", 
          title: lang === "zh" ? "大漠驼铃" : "Desert Caravan Echoes", 
          body: lang === "zh" ? "在无垠的塔克拉玛干沙漠中，一列骆驼商队正缓缓行进，清脆的驼铃声在风沙中回荡，开启了跨越千年的东西方文明交汇之旅。" : "Amidst the boundless sands of the Taklamakan, a camel caravan slowly advances, their bells echoing in the wind, commencing a millennial journey of East-West cultural convergence." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "勾勒沙丘轮廓" : "Trace Dune Outlines", 
          title: lang === "zh" ? "流沙起伏" : "Whispering Sand Dunes", 
          body: lang === "zh" ? "风是沙漠的雕刻师。连绵起伏的沙丘在烈日下呈现出完美的几何弧线，商队沿着沙脊艰难前行，在风沙中留下转瞬即逝的足迹。" : "Wind is the sculptor of the desert. Rolling dunes present perfect geometric arcs under the blazing sun, as the caravan treads along the ridges, leaving transient footprints." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "贴上旅人手记" : "Plaster Traveler's Note", 
          title: lang === "zh" ? "旅人手记" : "Traveler's Notebook", 
          body: lang === "zh" ? "“九月辛未，风沙大作，行十里，迷失方向。幸得老驼识途，引至泉水处。”——摘自敦煌藏经洞出土的无名旅人行纪残片。" : "'September, Xinwei: A fierce sandstorm arose. After ten miles, we lost our way. Fortunately, the old camels knew the path and led us to water.' — Anonymous travel log from Dunhuang." 
        }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "绿洲地理与商贸考证" : "Oasis Geography & Barter Logistics",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "定位敦煌绿洲" : "Map Dunhuang Oasis", 
          title: lang === "zh" ? "沙海孤岛：敦煌绿洲" : "Island in the Sand: Dunhuang Oasis", 
          body: lang === "zh" ? "地处党河冲积扇，东峙三危山，南凭鸣沙山。作为丝绸之路南北两道的交汇枢纽，敦煌绿洲为疲惫的旅人提供了最宝贵的水源与庇护。" : "Located on the Dang River alluvial fan, Dunhuang serves as the critical junction of the northern and southern Silk Road routes, providing vital water and shelter." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "清点互市物产" : "Tally Barter Cargo", 
          title: lang === "zh" ? "丝绸、美玉与汗血宝马" : "Silk, Nephrite & Heavenly Horses", 
          body: lang === "zh" ? "中原的精美绢帛、和阗的温润美玉、大宛的汗血宝马在此交汇。商贾们用天平精细称量，在羊皮纸上记录下每一次物产交换的价值落差。" : "Exquisite Chinese silk, warm Hetian jade, and Ferghana's heavenly horses converge here. Merchants carefully weigh goods, recording value offsets on parchment." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "核签通关文牒" : "Seal Customs Passport", 
          title: lang === "zh" ? "悬泉置通关文牒" : "Xuanquanzhi Customs Passport", 
          body: lang === "zh" ? "“大唐都护府准予通行。”加盖红色泥金封泥的羊皮文书，是商队在西域百国安全通行的唯一凭证，记录着过往行商的姓名与货物明细。" : "'Approved by the Protectorate of Tang.' The parchment document, sealed with red clay, is the sole passport for safe passage through the Western Regions." 
        }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "河西走廊商路演进" : "Hexi Corridor Route Evolution",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "测绘河西驿道" : "Map Hexi Trail", 
          title: lang === "zh" ? "从长安到河西走廊" : "From Chang'an to Hexi Corridor", 
          body: lang === "zh" ? "商路自古都长安出发，沿着狭长的河西走廊向西延伸。祁连山的冰雪融水滋养了武威、张掖、酒泉、敦煌四大郡，构成了商旅的生命线。" : "The route starts from the ancient capital Chang'an, stretching west along the Hexi Corridor. Meltwater from the Qilian mountains nourishes the four frontier commanderies." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "追踪驼队行进" : "Track Caravan March", 
          title: lang === "zh" ? "步履维艰：穿越戈壁" : "Treading the Gravel Gobi", 
          body: lang === "zh" ? "商队每日行进约五十里。在碎石遍地的戈壁滩上，旅人们必须时刻注意水源消耗，依靠北极星 and 散落的白骨指引方向，艰难向敦煌进发。" : "The caravan marches fifty li daily. Across the gravel Gobi, travelers monitor water depletion, guided by the North Star and scattered bones towards Dunhuang." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "点亮绿洲驿站" : "Reveal Oasis Stations", 
          title: lang === "zh" ? "敦煌会师：商路终点" : "Junction at Dunhuang Oasis", 
          body: lang === "zh" ? "当敦煌的烽燧在天际线隐现，商队终于抵达了进入塔克拉玛干沙漠前的最后一站。在此，他们将重整行装，补充水源，准备迎接更严酷的挑战。" : "As Dunhuang's beacon towers loom on the horizon, the caravan reaches the final oasis before the Taklamakan. Here they restock water and gear up for the deep sands." 
        }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "丝路大宗物产四象限" : "Silk Road Commodities Quadrant",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "分析香料与纺织" : "Analyze Spices & Textiles", 
          title: lang === "zh" ? "异域香料与中原绢帛" : "Exotic Spices & Central Silks", 
          body: lang === "zh" ? "来自印度的乳香与胡椒，在西方被视作防腐与调味的奢侈品；而中原的提花绢帛，则以其轻盈与华丽，成为罗马贵族争相追捧的时尚象征。" : "Frankincense and pepper from India, prized as preserving luxuries; and Chinese jacquard silks, whose lightness and luster became the ultimate Roman fashion statement." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "评估宝石与手稿" : "Evaluate Stones & Manuscripts", 
          title: lang === "zh" ? "和田美玉与敦煌手稿" : "Nephrite Jade & Dunhuang Scrolls", 
          body: lang === "zh" ? "和田美玉代表着权贵与不朽，是中原帝王祭祀的圣物；而用粟特文、吐火罗文书写的宗教手稿，则在绿洲寺庙中流传，见证着思想的交融。" : "Hetian nephrite jade represents power and immortality, sacred to Chinese emperors; while religious manuscripts in Sogdian and Tocharian circulate in temples." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "核算关税与风险" : "Calculate Taxes & Risks", 
          title: lang === "zh" ? "互市税率与商旅风险" : "Barter Tariffs & Caravan Risks", 
          body: lang === "zh" ? "绿洲城邦对过往商队征收什一税（10%）。商队不仅要面对自然灾害，还要防范强盗袭扰。高额的利润伴随着极高的生命与财产风险。" : "Oasis city-states levy a tithe (10%) on passing caravans. Merchants face sandstorms and bandit raids, matching high profits with extreme survival risks." 
        }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "大唐西域通商总账册" : "Tang Dynasty Frontier Trade Ledger",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "调取商货总清单" : "Load Manifest Tables", 
          title: lang === "zh" ? "大宗商货起运登记表" : "Frontier Cargo Manifest Tally", 
          body: lang === "zh" ? "汇总清点商队起运的所有大宗货物：生丝、蜀锦、和田玉料、西亚乳香。详细记录其疋数、重量、成色及原产地，确保账目分毫不差。" : "A comprehensive tally of all cargo logged: raw silk bolts, Shu brocades, Hetian jade, and frankincense resins. Origin, weight, and quality grades are recorded." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "校验历代税率" : "Verify Dynasty Taxes", 
          title: lang === "zh" ? "绿洲城邦关税核验单" : "Oasis Customs Tariff Verification", 
          body: lang === "zh" ? "核对沿途各绿洲城邦（高昌、龟兹、于阗）的关税征收记录。根据大唐与西域诸国的协议，对丝绸等大宗货物实行免税或优惠税率，并盖章确认。" : "Verifying customs records across oasis city-states (Gaochang, Kucha, Khotan). According to treaties, key goods receive tax exemptions or preferential rates." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "加盖都护府朱砂印" : "Affix Sovereign Oasis Stamp", 
          title: lang === "zh" ? "安西都护府御准通关大章" : "Imperial Vermilion Stamp of Approval", 
          body: lang === "zh" ? "通商闭环！各项物产、税率及水源消耗核验无误。在通商总账册末端，郑重加盖安西都护府的红色朱砂御准通关大钢印，准予商队出境。" : "Trade cycle complete! Cargo, tariffs, and water logs verified. The red vermilion seal of the Anxi Protectorate is stamped, granting final clearance." 
        }
      ]
    }
  ]
});

export default function Style05({ scene, beat, language, isThumbnail, onNavigate }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];

  const oases = [
    { id: 1, nameZh: "长安", nameEn: "Chang'an", left: "15%", top: "65%" },
    { id: 2, nameZh: "凉州", nameEn: "Liangzhou", left: "32.5%", top: "50%" },
    { id: 3, nameZh: "龟兹", nameEn: "Kuqa", left: "50%", top: "70%" },
    { id: 4, nameZh: "敦煌", nameEn: "Dunhuang", left: "67.5%", top: "55%" },
    { id: 5, nameZh: "阳关", nameEn: "Yangguan", left: "85%", top: "65%" },
  ];

  const activePos = oases[scene - 1] || oases[0];

  // Render border coordinate ticks to make it look like an ancient scientific map
  const renderCoordinateTicks = () => {
    if (isThumbnail) return null;
    return (
      <div className="absolute inset-0 pointer-events-none border-[0.15cqw] border-[#8c7a6b]/20 m-[1.5cqw] z-20">
        {/* Bottom Ticks */}
        <div className="absolute bottom-0 left-0 right-0 h-[1.5cqh] flex justify-between px-[5cqw] text-[0.7cqw] font-mono text-[#8c7a6b]/60 border-t border-[#8c7a6b]/10 bg-[#fbf7f0]/40 backdrop-blur-[1px] items-end pb-[0.2cqh]">
          <span>70° E</span>
          <span>75° E</span>
          <span>80° E</span>
          <span>85° E</span>
          <span>90° E</span>
          <span>95° E</span>
          <span>100° E</span>
        </div>
        {/* Left Ticks */}
        <div className="absolute left-0 top-[10.5cqh] bottom-[1.5cqh] w-[2cqw] flex flex-col justify-between py-[5cqh] text-[0.7cqw] font-mono text-[#8c7a6b]/60 border-r border-[#8c7a6b]/10 items-center">
          <span className="rotate-90">45° N</span>
          <span className="rotate-90">40° N</span>
          <span className="rotate-90">35° N</span>
        </div>
        {/* Right Ticks */}
        <div className="absolute right-0 top-[10.5cqh] bottom-[1.5cqh] w-[2cqw] flex flex-col justify-between py-[5cqh] text-[0.7cqw] font-mono text-[#8c7a6b]/60 border-l border-[#8c7a6b]/10 items-center">
          <span className="rotate-90">45° N</span>
          <span className="rotate-90">40° N</span>
          <span className="rotate-90">35° N</span>
        </div>
      </div>
    );
  };

  // Render the Top Map Horizon Trail navigation
  const renderTopMapHorizonTrail = () => {
    if (isThumbnail) return null;
    return (
      <div className="absolute top-[1.5cqw] left-[1.5cqw] right-[1.5cqw] h-[9cqh] z-30 bg-[#fbf7f0]/85 backdrop-blur-[2px] border-b border-[#8c7a6b]/20 flex flex-col justify-between overflow-hidden pointer-events-auto">
        {/* Integrated Top Coordinate Ticks */}
        <div className="absolute top-0 left-0 right-0 h-[1.5cqh] flex justify-between px-[5cqw] text-[0.7cqw] font-mono text-[#8c7a6b]/60 z-10 pointer-events-none">
          <span>70° E</span>
          <span>75° E</span>
          <span>80° E</span>
          <span>85° E</span>
          <span>90° E</span>
          <span>95° E</span>
          <span>100° E</span>
        </div>

        {/* SVG Desert Sand Dune Skyline */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Far Dunes */}
            <path 
              d="M 0,65 Q 250,40 500,60 T 1000,55 L 1000,100 L 0,100 Z" 
              fill="#ebdcb9" 
              opacity="0.4" 
            />
            {/* Near Dunes (The Horizon Trail) */}
            <path 
              d="M 0,75 Q 150,65 325,50 T 500,70 T 675,55 T 850,65 T 1000,60 L 1000,100 L 0,100 Z" 
              fill="#dfd0a3" 
              stroke="#8c7a6b" 
              strokeWidth="1" 
              strokeDasharray="3 3"
              opacity="0.85"
            />
          </svg>
        </div>

        {/* Oasis Nodes & Labels */}
        <div className="absolute inset-0 z-10">
          {oases.map((o) => {
            const isActive = scene === o.id;
            return (
              <button
                key={o.id}
                onClick={() => onNavigate && onNavigate(o.id, 0)}
                className="absolute group flex flex-col items-center -translate-x-1/2 -translate-y-1/2 transition-all duration-300 focus:outline-none"
                style={{ left: o.left, top: o.top }}
              >
                {/* Oasis Node Dot */}
                <div className="relative flex items-center justify-center">
                  {/* Pulsing glow for active oasis */}
                  {isActive && (
                    <div className="absolute w-[2cqw] h-[2cqw] rounded-full bg-[#0f766e]/30 animate-ping" />
                  )}
                  <div className={`w-[1cqw] h-[1cqw] rounded-full border-[0.15cqw] transition-all duration-300 flex items-center justify-center ${
                    isActive 
                      ? "bg-[#0f766e] border-[#0f766e] scale-125" 
                      : "bg-[#fffdf6] border-[#8c7a6b] group-hover:border-[#8b5a2b] group-hover:scale-110"
                  }`}>
                    {/* Inner core */}
                    <div className={`w-[0.4cqw] h-[0.4cqw] rounded-full ${isActive ? "bg-[#fffdf6]" : "bg-transparent"}`} />
                  </div>
                </div>

                {/* Oasis Label */}
                <span className={`text-[0.75cqw] font-serif mt-[0.5cqh] px-[0.6cqw] py-[0.1cqh] rounded-sm transition-all duration-300 ${
                  isActive 
                    ? "text-[#fffdf6] bg-[#8b5a2b] font-bold shadow-sm" 
                    : "text-[#5c5043] bg-[#fffdf6]/60 group-hover:text-[#8b5a2b] group-hover:bg-[#fffdf6]/90"
                }`}>
                  {language === "zh" ? o.nameZh : o.nameEn}
                </span>
              </button>
            );
          })}

          {/* Travelling Camel Caravan Icon */}
          <div 
            className="absolute transition-all duration-1000 ease-out pointer-events-none"
            style={{ 
              left: activePos.left, 
              top: activePos.top,
              transform: "translate(-50%, -100%) translateY(-0.8cqh)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          >
            <div className="flex flex-col items-center animate-camel-walk">
              {/* Camel SVG Icon */}
              <svg className="w-[2cqw] h-[2cqw] drop-shadow-sm" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M 10,35 Q 15,20 20,35 Q 25,15 35,15 Q 42,15 45,25 Q 50,10 55,10 Q 60,10 60,18 L 57,25 L 53,25 L 53,16 L 45,16 Q 40,25 40,35 L 36,55 L 32,55 L 32,38 L 24,38 L 24,55 L 20,55 L 20,38 L 12,38 L 12,55 L 8,55 L 8,35 Z" 
                  fill="#8b5a2b" 
                />
              </svg>
              {/* Little label or dot */}
              <div className="w-[0.3cqw] h-[0.3cqw] rounded-full bg-[#8b5a2b] mt-[-0.2cqh] animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Scene 1: Premise - Ultralight (Cover Page)
  const renderScene1 = () => {
    const showCaravan = beat >= 0;
    const showDunes = beat >= 1;
    const showNote = beat >= 2;

    return (
      <div className="w-full h-full relative overflow-hidden bg-[#fbf7f0] p-[4cqw] pt-[13cqh] flex flex-col justify-between">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: "radial-gradient(#8c7a6b 1px, transparent 1px)",
          backgroundSize: "2cqw 2cqw"
        }} />

        {/* Dune and Caravan SVG Canvas */}
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background Dunes */}
            {showDunes && (
              <g key="dunes" className="transition-all duration-1000 ease-out animate-fade-in">
                {/* Far Dune */}
                <path 
                  d="M -100,750 Q 400,500 1000,700 T 2020,600 L 2020,1180 L -100,1180 Z" 
                  fill="#f3ebd8" 
                  opacity="0.6" 
                />
                {/* Mid Dune */}
                <path 
                  d="M -100,850 Q 550,600 1100,800 T 2020,700 L 2020,1180 L -100,1180 Z" 
                  fill="#ebdcb9" 
                  opacity="0.8" 
                />
                {/* Near Dune with stroke */}
                <path 
                  d="M -100,950 Q 450,700 1050,900 T 2020,800 L 2020,1180 L -100,1180 Z" 
                  fill="#dfd0a3" 
                  stroke="#8c7a6b" 
                  strokeWidth="2" 
                  strokeDasharray="4 4"
                />
              </g>
            )}

            {/* Camel Caravan Silhouette walking on the near dune ridge */}
            {showCaravan && (
              <g key="caravan" className="transition-all duration-1000 ease-out animate-fade-in">
                {/* Connecting ropes */}
                <path 
                  d="M 850,780 Q 900,795 950,775 Q 1000,790 1050,770 Q 1100,785 1150,765" 
                  stroke="#8c7a6b" 
                  strokeWidth="2" 
                  strokeDasharray="4 4" 
                  fill="none" 
                  opacity="0.7"
                />

                {/* Camel 1 (Leader) */}
                <g transform="translate(800, 720) scale(1.2)">
                  <path 
                    d="M 10,35 Q 15,20 20,35 Q 25,15 35,15 Q 42,15 45,25 Q 50,10 55,10 Q 60,10 60,18 L 57,25 L 53,25 L 53,16 L 45,16 Q 40,25 40,35 L 36,55 L 32,55 L 32,38 L 24,38 L 24,55 L 20,55 L 20,38 L 12,38 L 12,55 L 8,55 L 8,35 Z" 
                    fill="#4a3e3d" 
                  />
                  <circle cx="58" cy="12" r="1.5" fill="#fbf7f0" />
                </g>

                {/* Camel 2 */}
                <g transform="translate(910, 730) scale(1.0)">
                  <path 
                    d="M 10,35 Q 15,20 20,35 Q 25,15 35,15 Q 42,15 45,25 Q 50,10 55,10 Q 60,10 60,18 L 57,25 L 53,25 L 53,16 L 45,16 Q 40,25 40,35 L 36,55 L 32,55 L 32,38 L 24,38 L 24,55 L 20,55 L 20,38 L 12,38 L 12,55 L 8,55 L 8,35 Z" 
                    fill="#4a3e3d" 
                    opacity="0.95"
                  />
                </g>

                {/* Camel 3 */}
                <g transform="translate(1010, 735) scale(0.85)">
                  <path 
                    d="M 10,35 Q 15,20 20,35 Q 25,15 35,15 Q 42,15 45,25 Q 50,10 55,10 Q 60,10 60,18 L 57,25 L 53,25 L 53,16 L 45,16 Q 40,25 40,35 L 36,55 L 32,55 L 32,38 L 24,38 L 24,55 L 20,55 L 20,38 L 12,38 L 12,55 L 8,55 L 8,35 Z" 
                    fill="#4a3e3d" 
                    opacity="0.9"
                  />
                </g>

                {/* Camel 4 */}
                <g transform="translate(1100, 740) scale(0.75)">
                  <path 
                    d="M 10,35 Q 15,20 20,35 Q 25,15 35,15 Q 42,15 45,25 Q 50,10 55,10 Q 60,10 60,18 L 57,25 L 53,25 L 53,16 L 45,16 Q 40,25 40,35 L 36,55 L 32,55 L 32,38 L 24,38 L 24,55 L 20,55 L 20,38 L 12,38 L 12,55 L 8,55 L 8,35 Z" 
                    fill="#4a3e3d" 
                    opacity="0.8"
                  />
                </g>
              </g>
            )}
          </svg>
        </div>

        {/* Header Metadata */}
        <div className="w-full flex justify-between items-start z-10">
          <div className="flex flex-col">
            <span className="font-serif text-[1.4cqw] tracking-wider uppercase text-[#8b5a2b] font-bold">
              {meta.theme}
            </span>
            <span className="text-[1cqw] text-[#8c7a6b] font-mono tracking-tight uppercase mt-[0.5cqh]">
              {meta.name} • {currentScene.title}
            </span>
          </div>
          <div className="flex items-center gap-[0.8cqw] bg-[#fffdf6] px-[1.2cqw] py-[0.8cqh] rounded-lg border border-[#8c7a6b]/20 shadow-sm">
            <div className="w-[0.6cqw] h-[0.6cqw] rounded-full bg-[#0f766e] animate-pulse" />
            <span className="font-mono text-[0.9cqw] text-[#2b2520] font-bold uppercase">{meta.tier}-TIER FIELD RECORD</span>
          </div>
        </div>

        {/* Plastered Traveler's Note (Scene 1 Beat 2) */}
        {showNote ? (
          <div 
            key="traveler-note"
            className="absolute top-[18cqh] left-[8cqw] w-[38cqw] bg-[#fffdf6] border-[0.15cqw] border-[#8c7a6b]/30 shadow-2xl rounded-sm p-[3.5cqw] rotate-[-1.5deg] z-10 animate-paper-peel flex flex-col gap-[2cqh]"
          >
            {/* Vintage tape top and bottom */}
            <div className="absolute -top-[1.5cqh] left-1/2 -translate-x-1/2 w-[10cqw] h-[3cqh] bg-[#e6dfc8]/60 border border-[#8c7a6b]/10 rotate-[1deg] shadow-sm flex items-center justify-center text-[0.6cqw] font-mono text-[#8c7a6b]">
              FIELD NOTE
            </div>
            <div className="flex justify-between items-center border-b border-[#8c7a6b]/20 pb-[1cqh]">
              <span className="font-mono text-[0.9cqw] text-[#8b5a2b] font-bold">LOG #402 / 辛未九月</span>
              <span className="font-mono text-[0.9cqw] text-[#8c7a6b]">DUNHUANG ARCHIVE</span>
            </div>
            <h1 className="text-[2.6cqw] leading-[1.2] font-serif text-[#2b2520] font-bold tracking-tight">
              {currentBeat.title}
            </h1>
            <p className="text-[1.15cqw] leading-[1.6] text-[#5c5043] font-sans">
              {currentBeat.body}
            </p>
            <div className="flex justify-between items-center border-t border-[#8c7a6b]/10 pt-[1.5cqh] mt-[1cqh]">
              <span className="text-[0.8cqw] font-mono text-[#8c7a6b] italic">
                {language === "zh" ? "塔克拉玛干东缘" : "Taklamakan East Boundary"}
              </span>
              <Compass className="w-[1.8cqw] h-[1.8cqw] text-[#8b5a2b] animate-spin-slow" />
            </div>
          </div>
        ) : (
          /* Faint Cover Title when note is not yet plastered */
          <div className="my-auto z-10 max-w-[50cqw] flex flex-col gap-[2cqh] animate-fade-in" key="faint-cover">
            <h1 className="text-[4.2cqw] font-serif font-bold text-[#2b2520] leading-[1.1] tracking-tight">
              {language === "zh" ? "沙海纪行：丝路微观印记" : "Chronicles of the Sand: Silk Road Micro-prints"}
            </h1>
            <p className="text-[1.4cqw] font-sans text-[#8c7a6b] leading-relaxed max-w-[40cqw]">
              {language === "zh" ? "九世纪大漠商旅的地理测绘与商贸考证日记。" : "Geographical mapping and trade verification diaries of 9th-century desert caravans."}
            </p>
          </div>
        )}

        {/* Footer Ledger Bar */}
        <div className="w-full flex justify-between items-center border-t border-[#8c7a6b]/15 pt-[2cqh] z-10">
          <div className="flex items-center gap-[1.5cqw]">
            <span className="font-mono text-[0.95cqw] text-[#8c7a6b] font-bold uppercase">
              {language === "zh" ? "实时操作:" : "BEAT ACTION:"}
            </span>
            <span className="font-mono text-[1cqw] bg-[#fffdf6] text-[#8b5a2b] border border-[#8b5a2b]/20 px-[1.2cqw] py-[0.5cqh] rounded-full font-black animate-pulse">
              {currentBeat.action}
            </span>
          </div>
          <div className="flex items-center gap-[1cqw]">
            <span className="font-mono text-[0.9cqw] text-[#8c7a6b] font-bold uppercase">
              {language === "zh" ? `场景 ${scene} / 5` : `SCENE ${scene} / 5`}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Scene 2: Dual - Light (Explorer Notebook Pages)
  const renderScene2 = () => {
    const focusLeft = beat === 0;
    const focusRight = beat === 1 || beat === 2;
    const showStamp = beat === 2;

    return (
      <div className="w-full h-full bg-[#fbf7f0] p-[4cqw] pt-[13cqh] flex flex-col justify-between relative overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: "radial-gradient(#8c7a6b 1px, transparent 1px)",
          backgroundSize: "2cqw 2cqw"
        }} />

        {/* Header */}
        <div className="w-full flex justify-between items-start z-10 shrink-0">
          <div className="flex flex-col">
            <span className="font-serif text-[1.4cqw] tracking-wider uppercase text-[#8b5a2b] font-bold">
              {meta.theme}
            </span>
            <span className="text-[1cqw] text-[#8c7a6b] font-mono tracking-tight uppercase mt-[0.5cqh]">
              {meta.name} • {currentScene.title}
            </span>
          </div>
          <div className="flex items-center gap-[0.8cqw] bg-[#fffdf6] px-[1.2cqw] py-[0.8cqh] rounded-lg border border-[#8c7a6b]/20 shadow-sm">
            <BookOpen className="w-[1.2cqw] h-[1.2cqw] text-[#0f766e]" />
            <span className="font-mono text-[0.9cqw] text-[#2b2520] font-bold uppercase">DUAL NOTEBOOKS</span>
          </div>
        </div>

        {/* Overlapping Pages Container */}
        <div className="flex-1 w-full relative my-[2cqh] flex items-center justify-center">
          {/* Left Notebook Page: Dunhuang Oasis Coordinates */}
          <div 
            className={`absolute left-[4cqw] top-[4cqh] w-[42cqw] h-[64cqh] bg-[#fdfaf2] border-[0.15cqw] border-[#8c7a6b]/30 shadow-xl rounded-sm rotate-[-1.5deg] p-[3cqw] flex flex-col justify-between transition-all duration-500 ${
              focusLeft ? "scale-105 z-20 shadow-2xl border-[#8b5a2b]/40" : "scale-95 opacity-50 z-10"
            }`}
          >
            <div className="flex justify-between items-center border-b border-[#8c7a6b]/20 pb-[1cqh]">
              <span className="font-serif text-[1cqw] text-[#8b5a2b] font-bold">SURVEY MAP / 测绘图志</span>
              <span className="font-mono text-[0.9cqw] text-[#8c7a6b]">40°08' N, 94°41' E</span>
            </div>

            {/* Oasis Map SVG */}
            <div className="flex-1 my-[2cqh] border border-[#8c7a6b]/15 bg-[#fbf7f0]/50 rounded relative overflow-hidden flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Coordinate Grid */}
                <path d="M 0,50 L 400,50 M 0,100 L 400,100 M 0,150 L 400,150 M 0,200 L 400,200" stroke="#8c7a6b" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.3" />
                <path d="M 80,0 L 80,250 M 160,0 L 160,250 M 240,0 L 240,250 M 320,0 L 320,250" stroke="#8c7a6b" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.3" />

                {/* Oasis Shape in Emerald Green */}
                <path 
                  d="M 120,120 Q 150,70 230,90 T 310,140 Q 280,200 190,180 T 120,120 Z" 
                  fill="#0f766e" 
                  fillOpacity="0.12" 
                  stroke="#0f766e" 
                  strokeWidth="2"
                  className={focusLeft ? "animate-pulse" : ""}
                />

                {/* Dang River winding */}
                <path 
                  d="M 50,250 Q 120,180 180,140 T 350,80" 
                  stroke="#0284c7" 
                  strokeWidth="2" 
                  strokeDasharray="4 2"
                  fill="none" 
                  opacity="0.8"
                />

                {/* Labels */}
                <text x="180" y="135" fill="#0f766e" className="text-[10px] font-serif font-bold">DUNHUANG / 敦煌</text>
                <text x="260" y="75" fill="#0284c7" className="text-[8px] font-mono rotate-[-15deg]">DANG RIVER / 党河</text>
                <text x="110" y="210" fill="#8c7a6b" className="text-[8px] font-mono">MINGSHA DUNES / 鸣沙山</text>

                {/* Compass Rose */}
                <g transform="translate(340, 50) scale(0.6)">
                  <circle cx="0" cy="0" r="25" stroke="#8c7a6b" strokeWidth="1" strokeDasharray="2 2" />
                  <path d="M 0,-30 L 5,-5 L 0,0 L -5,-5 Z" fill="#8b5a2b" />
                  <path d="M 0,30 L 5,5 L 0,0 L -5,5 Z" fill="#8c7a6b" />
                  <path d="M 30,0 L 5,5 L 0,0 L 5,-5 Z" fill="#8c7a6b" />
                  <path d="M -30,0 L -5,5 L 0,0 L -5,-5 Z" fill="#8c7a6b" />
                  <text x="-4" y="-33" fill="#8b5a2b" className="text-[10px] font-mono font-bold">N</text>
                </g>
              </svg>
            </div>

            <div className="flex flex-col gap-[0.5cqh]">
              <span className="text-[1.1cqw] font-serif text-[#2b2520] font-bold">
                {language === "zh" ? "沙海孤岛：敦煌绿洲" : "Island in the Sand: Dunhuang Oasis"}
              </span>
              <p className="text-[0.95cqw] leading-[1.5] text-[#5c5043] font-sans">
                {language === "zh" ? "地处党河冲积扇，作为丝路交汇枢纽，为旅人提供水源与庇护。" : "Located on the Dang River alluvial fan, providing vital water and shelter for weary travelers."}
              </p>
            </div>
          </div>

          {/* Right Notebook Page: Trade Goods Ledger */}
          <div 
            className={`absolute right-[4cqw] top-[2cqh] w-[44cqw] h-[68cqh] bg-[#fffdf6] border-[0.15cqw] border-[#8c7a6b]/40 shadow-2xl rounded-sm rotate-[1deg] p-[3.5cqw] flex flex-col justify-between transition-all duration-500 ${
              focusRight ? "scale-105 z-20 shadow-2xl border-[#8b5a2b]/50" : "scale-95 opacity-50 z-10"
            }`}
          >
            <div className="flex justify-between items-center border-b border-[#8c7a6b]/20 pb-[1cqh]">
              <span className="font-serif text-[1cqw] text-[#8b5a2b] font-bold">BARTER LOG / 互市账目</span>
              <span className="font-mono text-[0.9cqw] text-[#8c7a6b]">9TH CENTURY / 九世纪</span>
            </div>

            {/* Trade Goods List */}
            <div className="flex-1 my-[2.5cqh] flex flex-col justify-center gap-[1.5cqh] font-serif relative">
              {/* Highlight Circle for Beat 1 */}
              {beat === 1 && (
                <div className="absolute inset-0 border-[0.2cqw] border-dashed border-[#8b5a2b]/30 rounded-lg pointer-events-none animate-pulse p-[1cqw]" />
              )}

              <div className="flex justify-between items-center text-[1.15cqw] text-[#2b2520] border-b border-[#8c7a6b]/10 pb-[0.5cqh]">
                <span className="font-bold">{language === "zh" ? "中原绢丝 (Central Silk)" : "Central Silk Weave"}</span>
                <span className="font-mono font-bold text-[#8b5a2b]">120 Bolts (疋)</span>
              </div>
              <div className="flex justify-between items-center text-[1.15cqw] text-[#2b2520] border-b border-[#8c7a6b]/10 pb-[0.5cqh]">
                <span className="font-bold">{language === "zh" ? "和阗美玉 (Khotan Jade)" : "Khotan Nephrite Jade"}</span>
                <span className="font-mono font-bold text-[#8b5a2b]">45 Pieces (件)</span>
              </div>
              <div className="flex justify-between items-center text-[1.15cqw] text-[#2b2520] border-b border-[#8c7a6b]/10 pb-[0.5cqh]">
                <span className="font-bold">{language === "zh" ? "大宛宝马 (Ferghana Horse)" : "Ferghana Heavenly Horses"}</span>
                <span className="font-mono font-bold text-[#8b5a2b]">15 Heads (匹)</span>
              </div>

              {/* Sovereign Stamp for Beat 2 */}
              {showStamp && (
                <div className="absolute right-[2cqw] bottom-[1cqh] w-[10cqw] h-[10cqw] border-[0.3cqw] border-double border-red-700 rounded-full flex items-center justify-center rotate-[-12deg] bg-red-50/20 shadow-sm animate-stamp-affix">
                  <div className="text-center font-serif text-[1cqw] text-red-700 font-bold leading-none flex flex-col items-center justify-center p-[0.5cqw]">
                    <span className="text-[0.8cqw] tracking-widest">APPROVED</span>
                    <span className="border-t border-red-700/50 mt-[0.3cqh] pt-[0.3cqh] text-[0.75cqw]">悬泉置印</span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-[0.5cqh]">
              <span className="text-[1.1cqw] font-serif text-[#2b2520] font-bold">
                {currentBeat.title}
              </span>
              <p className="text-[0.95cqw] leading-[1.5] text-[#5c5043] font-sans">
                {currentBeat.body}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Ledger Bar */}
        <div className="w-full flex justify-between items-center border-t border-[#8c7a6b]/15 pt-[2cqh] z-10 shrink-0">
          <div className="flex items-center gap-[1.5cqw]">
            <span className="font-mono text-[0.95cqw] text-[#8c7a6b] font-bold uppercase">
              {language === "zh" ? "实时操作:" : "BEAT ACTION:"}
            </span>
            <span className="font-mono text-[1cqw] bg-[#fffdf6] text-[#8b5a2b] border border-[#8b5a2b]/20 px-[1.2cqw] py-[0.5cqh] rounded-full font-black animate-pulse" key={`action-${scene}-${beat}`}>
              {currentBeat.action}
            </span>
          </div>
          <div className="flex items-center gap-[1cqw]">
            <span className="font-mono text-[0.9cqw] text-[#8c7a6b] font-bold uppercase">
              {language === "zh" ? `场景 ${scene} / 5` : `SCENE ${scene} / 5`}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Scene 3: Process - Standard (Winding Desert Route Progress)
  const renderScene3 = () => {
    // Camel position coordinates based on beat
    let camelX = 180;
    let camelY = 240;
    let activeStation = "xian";

    if (beat === 1) {
      camelX = 850;
      camelY = 160;
      activeStation = "hexi";
    } else if (beat === 2) {
      camelX = 1550;
      camelY = 220;
      activeStation = "dunhuang";
    }

    return (
      <div className="w-full h-full bg-[#fbf7f0] p-[4cqw] pt-[13cqh] flex flex-col justify-between relative overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: "radial-gradient(#8c7a6b 1px, transparent 1px)",
          backgroundSize: "2cqw 2cqw"
        }} />

        {/* Header */}
        <div className="w-full flex justify-between items-start z-10 shrink-0">
          <div className="flex flex-col">
            <span className="font-serif text-[1.4cqw] tracking-wider uppercase text-[#8b5a2b] font-bold">
              {meta.theme}
            </span>
            <span className="text-[1cqw] text-[#8c7a6b] font-mono tracking-tight uppercase mt-[0.5cqh]">
              {meta.name} • {currentScene.title}
            </span>
          </div>
          <div className="flex items-center gap-[0.8cqw] bg-[#fffdf6] px-[1.2cqw] py-[0.8cqh] rounded-lg border border-[#8c7a6b]/20 shadow-sm">
            <TrendingUp className="w-[1.2cqw] h-[1.2cqw] text-[#0f766e]" />
            <span className="font-mono text-[0.9cqw] text-[#2b2520] font-bold uppercase">ROUTE PROGRESS</span>
          </div>
        </div>

        {/* Route Map SVG Canvas */}
        <div className="flex-1 w-full relative my-[2cqh] border border-[#8c7a6b]/15 bg-[#fffdf6]/60 rounded-md shadow-inner overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1720 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Latitude / Longitude background lines */}
            <line x1="0" y1="100" x2="1720" y2="100" stroke="#8c7a6b" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2" />
            <line x1="0" y1="200" x2="1720" y2="200" stroke="#8c7a6b" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2" />
            <line x1="0" y1="300" x2="1720" y2="300" stroke="#8c7a6b" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2" />
            
            <line x1="300" y1="0" x2="300" y2="400" stroke="#8c7a6b" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2" />
            <line x1="600" y1="0" x2="600" y2="400" stroke="#8c7a6b" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2" />
            <line x1="900" y1="0" x2="900" y2="400" stroke="#8c7a6b" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2" />
            <line x1="1200" y1="0" x2="1200" y2="400" stroke="#8c7a6b" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2" />
            <line x1="1500" y1="0" x2="1500" y2="400" stroke="#8c7a6b" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2" />

            {/* Mountain ranges (Qilian Mountains) drawn as hand-drawn triangles */}
            <g opacity="0.15" fill="#8b5a2b">
              <polygon points="500,280 550,200 600,280" />
              <polygon points="580,290 640,190 700,290" />
              <polygon points="680,280 730,210 780,280" />
              <polygon points="760,300 820,180 880,300" />
              <polygon points="860,290 920,200 980,290" />
              <polygon points="960,310 1030,170 1100,310" />
              <polygon points="1080,290 1140,210 1200,290" />
              <polygon points="1180,300 1250,190 1320,300" />
            </g>

            {/* Winding route path */}
            <path 
              d="M 180,240 Q 350,120 520,180 T 850,160 T 1200,260 T 1550,220" 
              stroke="#8b5a2b" 
              strokeWidth="4" 
              strokeDasharray="12 8" 
              fill="none" 
              opacity="0.8"
            />

            {/* Station 1: Xi'an */}
            <g transform="translate(180, 240)">
              <circle 
                r="12" 
                fill={activeStation === "xian" ? "#0f766e" : "#fbf7f0"} 
                stroke="#8b5a2b" 
                strokeWidth="3" 
                className={activeStation === "xian" ? "animate-ping opacity-75" : ""}
              />
              <circle 
                r="8" 
                fill={activeStation === "xian" ? "#0f766e" : "#8b5a2b"} 
                stroke="#fbf7f0" 
                strokeWidth="2" 
              />
              <text y="30" textAnchor="middle" fill="#2b2520" className="text-[12px] font-serif font-bold">XI'AN / 长安</text>
            </g>

            {/* Station 2: Hexi Corridor */}
            <g transform="translate(850, 160)">
              <circle 
                r="12" 
                fill={activeStation === "hexi" ? "#0f766e" : "#fbf7f0"} 
                stroke="#8b5a2b" 
                strokeWidth="3" 
                className={activeStation === "hexi" ? "animate-ping opacity-75" : ""}
              />
              <circle 
                r="8" 
                fill={activeStation === "hexi" ? "#0f766e" : "#8b5a2b"} 
                stroke="#fbf7f0" 
                strokeWidth="2" 
              />
              <text y="-25" textAnchor="middle" fill="#2b2520" className="text-[12px] font-serif font-bold">HEXI CORRIDOR / 河西走廊</text>
            </g>

            {/* Station 3: Dunhuang */}
            <g transform="translate(1550, 220)">
              <circle 
                r="16" 
                fill={activeStation === "dunhuang" ? "#0f766e" : "#fbf7f0"} 
                stroke="#8b5a2b" 
                strokeWidth="3" 
                className={activeStation === "dunhuang" ? "animate-ping opacity-75" : ""}
              />
              <circle 
                r="10" 
                fill={activeStation === "dunhuang" ? "#0f766e" : "#8b5a2b"} 
                stroke="#fbf7f0" 
                strokeWidth="2" 
              />
              <text y="35" textAnchor="middle" fill="#2b2520" className="text-[12px] font-serif font-bold">DUNHUANG / 敦煌</text>
            </g>

            {/* Walking Camel Marker */}
            <g 
              transform={`translate(${camelX - 25}, ${camelY - 45}) scale(0.8)`} 
              className="transition-all duration-1000 ease-in-out"
            >
              {/* Camel Silhouette */}
              <path 
                d="M 10,35 Q 15,20 20,35 Q 25,15 35,15 Q 42,15 45,25 Q 50,10 55,10 Q 60,10 60,18 L 57,25 L 53,25 L 53,16 L 45,16 Q 40,25 40,35 L 36,55 L 32,55 L 32,38 L 24,38 L 24,55 L 20,55 L 20,38 L 12,38 L 12,55 L 8,55 L 8,35 Z" 
                fill="#8b5a2b" 
                stroke="#fbf7f0"
                strokeWidth="1.5"
              />
            </g>
          </svg>

          {/* Floating real-time distance metrics */}
          <div className="absolute top-[2cqh] right-[2cqw] bg-[#fffdf6]/90 border border-[#8c7a6b]/20 p-[1.5cqw] rounded shadow-sm font-mono text-[0.85cqw] text-[#5c5043] flex flex-col gap-[0.5cqh] backdrop-blur-[1px]">
            <div className="flex justify-between gap-[2cqw]">
              <span>TOTAL DISTANCE:</span>
              <span className="font-bold text-[#2b2520]">3,600 Li (里)</span>
            </div>
            <div className="flex justify-between gap-[2cqw]">
              <span>WATER DEPLETION:</span>
              <span className="font-bold text-[#0f766e]">{beat === 0 ? "95%" : beat === 1 ? "65%" : "35%"}</span>
            </div>
            <div className="flex justify-between gap-[2cqw]">
              <span>CARAVAN STATUS:</span>
              <span className="font-bold text-[#8b5a2b]">{beat === 2 ? "ARRIVED" : "MARCHING"}</span>
            </div>
          </div>
        </div>

        {/* Text Panel */}
        <div className="mx-[4cqw] mb-[1cqh] p-[2.5cqw] bg-[#fffdf6] border-[0.15cqw] border-[#8c7a6b]/20 shadow-md rounded-md flex gap-[3cqw] items-center shrink-0">
          <div className="p-[1.2cqw] bg-[#fbf7f0] rounded-full border border-[#8c7a6b]/10 shrink-0">
            <Compass className="w-[2.5cqw] h-[2.5cqw] text-[#8b5a2b] animate-spin-slow" />
          </div>
          <div className="flex flex-col gap-[0.5cqh] text-left">
            <h2 className="text-[1.5cqw] font-serif text-[#2b2520] font-bold leading-tight">
              {currentBeat.title}
            </h2>
            <p className="text-[1.1cqw] leading-[1.5] text-[#5c5043] font-sans">
              {currentBeat.body}
            </p>
          </div>
        </div>

        {/* Footer Ledger Bar */}
        <div className="w-full flex justify-between items-center border-t border-[#8c7a6b]/15 pt-[2cqh] z-10 shrink-0">
          <div className="flex items-center gap-[1.5cqw]">
            <span className="font-mono text-[0.95cqw] text-[#8c7a6b] font-bold uppercase">
              {language === "zh" ? "实时操作:" : "BEAT ACTION:"}
            </span>
            <span className="font-mono text-[1cqw] bg-[#fffdf6] text-[#8b5a2b] border border-[#8b5a2b]/20 px-[1.2cqw] py-[0.5cqh] rounded-full font-black animate-pulse" key={`action-${scene}-${beat}`}>
              {currentBeat.action}
            </span>
          </div>
          <div className="flex items-center gap-[1cqw]">
            <span className="font-mono text-[0.9cqw] text-[#8c7a6b] font-bold uppercase">
              {language === "zh" ? `场景 ${scene} / 5` : `SCENE ${scene} / 5`}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Scene 4: Matrix - Dense (Oasis Trade Goods Quadrant)
  const renderScene4 = () => {
    const highlightQ1Q2 = beat === 0;
    const highlightQ3Q4 = beat === 1;
    const highlightAll = beat === 2;

    return (
      <div className="w-full h-full bg-[#fbf7f0] p-[4cqw] pt-[13cqh] flex flex-col justify-between relative overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: "radial-gradient(#8c7a6b 1px, transparent 1px)",
          backgroundSize: "2cqw 2cqw"
        }} />

        {/* Header */}
        <div className="w-full flex justify-between items-start z-10 shrink-0">
          <div className="flex flex-col">
            <span className="font-serif text-[1.4cqw] tracking-wider uppercase text-[#8b5a2b] font-bold">
              {meta.theme}
            </span>
            <span className="text-[1cqw] text-[#8c7a6b] font-mono tracking-tight uppercase mt-[0.5cqh]">
              {meta.name} • {currentScene.title}
            </span>
          </div>
          <div className="flex items-center gap-[0.8cqw] bg-[#fffdf6] px-[1.2cqw] py-[0.8cqh] rounded-lg border border-[#8c7a6b]/20 shadow-sm">
            <Scale className="w-[1.2cqw] h-[1.2cqw] text-[#0f766e]" />
            <span className="font-mono text-[0.9cqw] text-[#2b2520] font-bold uppercase">COMMODITY MATRIX</span>
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="flex-1 w-full grid grid-cols-2 gap-[2.5cqw] my-[2cqh] items-stretch">
          {/* Quadrant 1: Textiles (Silk) */}
          <div 
            className={`bg-[#fffdf6] border-[0.15cqw] border-[#8c7a6b]/30 p-[2.5cqw] rounded shadow-md flex flex-col justify-between transition-all duration-500 ${
              highlightQ1Q2 || highlightAll ? "scale-100 opacity-100 border-[#8b5a2b]/50 shadow-lg" : "scale-95 opacity-30"
            }`}
          >
            <div className="flex justify-between items-start border-b border-[#8c7a6b]/10 pb-[1cqh]">
              <div className="flex items-center gap-[1cqw]">
                <Scroll className="w-[2cqw] h-[2cqw] text-[#8b5a2b]" />
                <span className="font-serif text-[1.3cqw] text-[#2b2520] font-bold">
                  {language === "zh" ? "纺织：中原绢帛" : "Textiles: Central Silks"}
                </span>
              </div>
              <span className="font-mono text-[0.85cqw] text-[#8c7a6b] bg-[#fbf7f0] px-[0.8cqw] py-[0.3cqh] border border-[#8c7a6b]/10 rounded">Q1</span>
            </div>
            <div className="flex-1 my-[1.5cqh] flex flex-col justify-center gap-[0.8cqh] font-mono text-[0.95cqw] text-[#5c5043]">
              <div className="flex justify-between">
                <span>ORIGIN DEME / 原产地:</span>
                <span className="font-bold text-[#2b2520]">Chang'an (长安)</span>
              </div>
              <div className="flex justify-between">
                <span>TAX RATE / 互市税率:</span>
                <span className="font-bold text-[#0f766e]">Exempt / 免税 (Treaty)</span>
              </div>
              <div className="flex justify-between">
                <span>TRAVEL RISK / 运输风险:</span>
                <span className="font-bold text-emerald-700">Low / 低风险</span>
              </div>
            </div>
            <p className="text-[0.95cqw] text-[#8c7a6b] leading-tight font-sans italic border-t border-[#8c7a6b]/5 pt-[1cqh]">
              {language === "zh" ? "中原绢丝轻盈华丽，为罗马贵族追捧。" : "Lustrous jacquard silks, highly prized across Roman courts."}
            </p>
          </div>

          {/* Quadrant 2: Spices (Pepper & Frankincense) */}
          <div 
            className={`bg-[#fffdf6] border-[0.15cqw] border-[#8c7a6b]/30 p-[2.5cqw] rounded shadow-md flex flex-col justify-between transition-all duration-500 ${
              highlightQ1Q2 || highlightAll ? "scale-100 opacity-100 border-[#8b5a2b]/50 shadow-lg" : "scale-95 opacity-30"
            }`}
          >
            <div className="flex justify-between items-start border-b border-[#8c7a6b]/10 pb-[1cqh]">
              <div className="flex items-center gap-[1cqw]">
                <Feather className="w-[2cqw] h-[2cqw] text-[#0f766e]" />
                <span className="font-serif text-[1.3cqw] text-[#2b2520] font-bold">
                  {language === "zh" ? "香料：异域香料" : "Spices: Exotic Resins"}
                </span>
              </div>
              <span className="font-mono text-[0.85cqw] text-[#8c7a6b] bg-[#fbf7f0] px-[0.8cqw] py-[0.3cqh] border border-[#8c7a6b]/10 rounded">Q2</span>
            </div>
            <div className="flex-1 my-[1.5cqh] flex flex-col justify-center gap-[0.8cqh] font-mono text-[0.95cqw] text-[#5c5043]">
              <div className="flex justify-between">
                <span>ORIGIN DEME / 原产地:</span>
                <span className="font-bold text-[#2b2520]">India & Persia (天竺/波斯)</span>
              </div>
              <div className="flex justify-between">
                <span>TAX RATE / 互市税率:</span>
                <span className="font-bold text-[#8b5a2b]">10% (什一税)</span>
              </div>
              <div className="flex justify-between">
                <span>TRAVEL RISK / 运输风险:</span>
                <span className="font-bold text-amber-700">Medium / 中风险</span>
              </div>
            </div>
            <p className="text-[0.95cqw] text-[#8c7a6b] leading-tight font-sans italic border-t border-[#8c7a6b]/5 pt-[1cqh]">
              {language === "zh" ? "乳香与胡椒，防腐与调味的绝对奢侈品。" : "Frankincense and pepper, essential luxury preservatives."}
            </p>
          </div>

          {/* Quadrant 3: Precious Stones (Jade) */}
          <div 
            className={`bg-[#fffdf6] border-[0.15cqw] border-[#8c7a6b]/30 p-[2.5cqw] rounded shadow-md flex flex-col justify-between transition-all duration-500 ${
              highlightQ3Q4 || highlightAll ? "scale-100 opacity-100 border-[#8b5a2b]/50 shadow-lg" : "scale-95 opacity-30"
            }`}
          >
            <div className="flex justify-between items-start border-b border-[#8c7a6b]/10 pb-[1cqh]">
              <div className="flex items-center gap-[1cqw]">
                <Coins className="w-[2cqw] h-[2cqw] text-[#8b5a2b]" />
                <span className="font-serif text-[1.3cqw] text-[#2b2520] font-bold">
                  {language === "zh" ? "宝石：和田美玉" : "Stones: Khotan Jade"}
                </span>
              </div>
              <span className="font-mono text-[0.85cqw] text-[#8c7a6b] bg-[#fbf7f0] px-[0.8cqw] py-[0.3cqh] border border-[#8c7a6b]/10 rounded">Q3</span>
            </div>
            <div className="flex-1 my-[1.5cqh] flex flex-col justify-center gap-[0.8cqh] font-mono text-[0.95cqw] text-[#5c5043]">
              <div className="flex justify-between">
                <span>ORIGIN DEME / 原产地:</span>
                <span className="font-bold text-[#2b2520]">Khotan (于阗)</span>
              </div>
              <div className="flex justify-between">
                <span>TAX RATE / 互市税率:</span>
                <span className="font-bold text-[#8b5a2b]">12% (十二税)</span>
              </div>
              <div className="flex justify-between">
                <span>TRAVEL RISK / 运输风险:</span>
                <span className="font-bold text-red-700">High / 高风险</span>
              </div>
            </div>
            <p className="text-[0.95cqw] text-[#8c7a6b] leading-tight font-sans italic border-t border-[#8c7a6b]/5 pt-[1cqh]">
              {language === "zh" ? "温润美玉代表权贵，中原帝王祭祀圣物。" : "Warm nephrite jade, sacred representation of imperial power."}
            </p>
          </div>

          {/* Quadrant 4: Manuscripts (Scrolls) */}
          <div 
            className={`bg-[#fffdf6] border-[0.15cqw] border-[#8c7a6b]/30 p-[2.5cqw] rounded shadow-md flex flex-col justify-between transition-all duration-500 ${
              highlightQ3Q4 || highlightAll ? "scale-100 opacity-100 border-[#8b5a2b]/50 shadow-lg" : "scale-95 opacity-30"
            }`}
          >
            <div className="flex justify-between items-start border-b border-[#8c7a6b]/10 pb-[1cqh]">
              <div className="flex items-center gap-[1cqw]">
                <BookOpen className="w-[2cqw] h-[2cqw] text-[#0f766e]" />
                <span className="font-serif text-[1.3cqw] text-[#2b2520] font-bold">
                  {language === "zh" ? "手稿：敦煌遗书" : "Scrolls: Dunhuang Texts"}
                </span>
              </div>
              <span className="font-mono text-[0.85cqw] text-[#8c7a6b] bg-[#fbf7f0] px-[0.8cqw] py-[0.3cqh] border border-[#8c7a6b]/10 rounded">Q4</span>
            </div>
            <div className="flex-1 my-[1.5cqh] flex flex-col justify-center gap-[0.8cqh] font-mono text-[0.95cqw] text-[#5c5043]">
              <div className="flex justify-between">
                <span>ORIGIN DEME / 原产地:</span>
                <span className="font-bold text-[#2b2520]">Dunhuang (敦煌)</span>
              </div>
              <div className="flex justify-between">
                <span>TAX RATE / 互市税率:</span>
                <span className="font-bold text-[#0f766e]">Exempt / 免税 (Religious)</span>
              </div>
              <div className="flex justify-between">
                <span>TRAVEL RISK / 运输风险:</span>
                <span className="font-bold text-emerald-700">Low / 低风险</span>
              </div>
            </div>
            <p className="text-[0.95cqw] text-[#8c7a6b] leading-tight font-sans italic border-t border-[#8c7a6b]/5 pt-[1cqh]">
              {language === "zh" ? "多语种宗教手稿，见证思想与信仰交融。" : "Multi-lingual texts witnessing the exchange of ideas."}
            </p>
          </div>
        </div>

        {/* Detailed Copywriting block at the bottom */}
        <div className="mx-[4cqw] p-[2cqw] bg-[#fffdf6] border border-[#8c7a6b]/15 rounded shadow-sm text-left shrink-0">
          <h3 className="text-[1.2cqw] font-serif text-[#2b2520] font-bold mb-[0.5cqh]">
            {currentBeat.title}
          </h3>
          <p className="text-[1cqw] leading-[1.5] text-[#5c5043] font-sans">
            {currentBeat.body}
          </p>
        </div>

        {/* Footer Ledger Bar */}
        <div className="w-full flex justify-between items-center border-t border-[#8c7a6b]/15 pt-[2cqh] z-10 shrink-0">
          <div className="flex items-center gap-[1.5cqw]">
            <span className="font-mono text-[0.95cqw] text-[#8c7a6b] font-bold uppercase">
              {language === "zh" ? "实时操作:" : "BEAT ACTION:"}
            </span>
            <span className="font-mono text-[1cqw] bg-[#fffdf6] text-[#8b5a2b] border border-[#8b5a2b]/20 px-[1.2cqw] py-[0.5cqh] rounded-full font-black animate-pulse" key={`action-${scene}-${beat}`}>
              {currentBeat.action}
            </span>
          </div>
          <div className="flex items-center gap-[1cqw]">
            <span className="font-mono text-[0.9cqw] text-[#8c7a6b] font-bold uppercase">
              {language === "zh" ? `场景 ${scene} / 5` : `SCENE ${scene} / 5`}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Scene 5: Ledger - Extreme (Full-page Trade Manifest Ledger)
  const renderScene5 = () => {
    const showTable = beat >= 0;
    const showTaxes = beat >= 1;
    const showStamp = beat >= 2;

    return (
      <div className="w-full h-full bg-[#fbf7f0] p-[3.5cqw] pt-[13cqh] flex flex-col justify-between relative overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: "radial-gradient(#8c7a6b 1px, transparent 1px)",
          backgroundSize: "2cqw 2cqw"
        }} />

        {/* Header */}
        <div className="w-full flex justify-between items-end border-b-[0.2cqw] border-double border-[#8c7a6b]/40 pb-[1.5cqh] z-10 shrink-0">
          <div className="flex flex-col text-left">
            <span className="font-serif text-[1.6cqw] text-[#2b2520] font-bold tracking-wide">
              {language === "zh" ? "安西都护府通商总账册" : "ANXI PROTECTORATE FRONTIER LEDGER"}
            </span>
            <span className="text-[0.95cqw] text-[#8c7a6b] font-mono tracking-tight uppercase mt-[0.5cqh]">
              {meta.name} • {currentScene.title}
            </span>
          </div>
          <div className="flex flex-col items-end font-mono text-[0.85cqw] text-[#8c7a6b]">
            <span>No. Tang-West-742</span>
            <span>DATE: 辛未九月 / SEP 9TH</span>
          </div>
        </div>

        {/* Ledger Content: Split into Cargo Table (Left) and Metrics/Stamps (Right) */}
        <div className="flex-1 w-full grid grid-cols-12 gap-[3cqw] my-[2cqh] items-stretch overflow-hidden">
          {/* Left Column: Cargo Table (7 cols) */}
          <div className="col-span-7 flex flex-col justify-between border-r border-[#8c7a6b]/15 pr-[1.5cqw]">
            <div className="w-full">
              <span className="font-serif text-[1.1cqw] text-[#8b5a2b] font-bold block mb-[1.5cqh] text-left">
                {language === "zh" ? "I. 大宗商货起运登记表" : "I. FRONTIER CARGO MANIFEST TALLY"}
              </span>
              
              {showTable && (
                <table className="w-full text-left font-mono text-[0.95cqw] border-collapse animate-fade-in" key="manifest-table">
                  <thead>
                    <tr className="border-b border-[#8c7a6b]/30 text-[#8c7a6b] text-[0.85cqw]">
                      <th className="pb-[1cqh] font-bold">{language === "zh" ? "货物名称" : "CARGO ITEM"}</th>
                      <th className="pb-[1cqh] font-bold">{language === "zh" ? "数量" : "QUANTITY"}</th>
                      <th className="pb-[1cqh] font-bold">{language === "zh" ? "申报货值" : "DECLARED VALUE"}</th>
                      <th className="pb-[1cqh] font-bold">{language === "zh" ? "课税状态" : "TAX STATUS"}</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#2b2520]">
                    <tr className="border-b border-[#8c7a6b]/10">
                      <td className="py-[1cqh] font-serif font-bold">{language === "zh" ? "生丝 (Raw Silk)" : "Raw Silk Bolts"}</td>
                      <td className="py-[1cqh]">420 Bolts (疋)</td>
                      <td className="py-[1cqh]">12,600 Cash</td>
                      <td className="py-[1cqh] text-[#0f766e] font-bold">Exempt (免税)</td>
                    </tr>
                    <tr className="border-b border-[#8c7a6b]/10">
                      <td className="py-[1cqh] font-serif font-bold">{language === "zh" ? "蜀锦 (Shu Brocade)" : "Shu Brocades"}</td>
                      <td className="py-[1cqh]">80 Bolts (疋)</td>
                      <td className="py-[1cqh]">4,800 Cash</td>
                      <td className="py-[1cqh] text-[#0f766e] font-bold">Exempt (免税)</td>
                    </tr>
                    <tr className="border-b border-[#8c7a6b]/10">
                      <td className="py-[1cqh] font-serif font-bold">{language === "zh" ? "和田玉 (Khotan Jade)" : "Khotan Jade"}</td>
                      <td className="py-[1cqh]">45 Pieces (件)</td>
                      <td className="py-[1cqh]">9,000 Cash</td>
                      <td className="py-[1cqh] text-[#8b5a2b]">10% (900 Cash)</td>
                    </tr>
                    <tr className="border-b border-[#8c7a6b]/10">
                      <td className="py-[1cqh] font-serif font-bold">{language === "zh" ? "乳香 (Frankincense)" : "Frankincense"}</td>
                      <td className="py-[1cqh]">150 Liang (两)</td>
                      <td className="py-[1cqh]">3,000 Cash</td>
                      <td className="py-[1cqh] text-[#8b5a2b]">10% (300 Cash)</td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>

            {/* Dynamic Beat Copywriting inside the Ledger */}
            <div className="bg-[#fffdf6] border border-[#8c7a6b]/15 p-[2cqw] rounded shadow-sm text-left mt-[1cqh]">
              <h3 className="text-[1.15cqw] font-serif text-[#2b2520] font-bold mb-[0.5cqh] flex items-center gap-[0.5cqw]">
                <FileText className="w-[1.2cqw] h-[1.2cqw] text-[#8b5a2b]" />
                {currentBeat.title}
              </h3>
              <p className="text-[0.95cqw] leading-[1.5] text-[#5c5043] font-sans">
                {currentBeat.body}
              </p>
            </div>
          </div>

          {/* Right Column: Water Chart & Dynasty Stamps (5 cols) */}
          <div className="col-span-5 flex flex-col justify-between pl-[1cqw] relative">
            {/* Water Depletion Chart */}
            <div className="w-full">
              <span className="font-serif text-[1.1cqw] text-[#8b5a2b] font-bold block mb-[1cqh] text-left">
                {language === "zh" ? "II. 商队水源消耗遥测" : "II. WATER DEPLETION TELEMETRY"}
              </span>
              <div className="h-[12cqh] border border-[#8c7a6b]/15 bg-[#fffdf6]/80 rounded p-[1cqw] relative overflow-hidden flex items-end">
                {/* SVG Line Graph */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                  {/* Warning line */}
                  <line x1="0" y1="65" x2="300" y2="65" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
                  {/* Water curve */}
                  <path 
                    d="M 0,10 Q 50,20 100,35 T 200,65 T 300,80" 
                    fill="none" 
                    stroke="#0284c7" 
                    strokeWidth="2.5" 
                    className="animate-pulse"
                  />
                  {/* Grid lines */}
                  <line x1="100" y1="0" x2="100" y2="100" stroke="#8c7a6b" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.2" />
                  <line x1="200" y1="0" x2="200" y2="100" stroke="#8c7a6b" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.2" />
                </svg>
                <div className="absolute top-[0.5cqh] left-[1cqw] text-[0.75cqw] font-mono text-[#8c7a6b] flex flex-col">
                  <span>100% CAP</span>
                  <span className="text-red-600 mt-[4cqh]">35% WARN</span>
                </div>
                <div className="absolute bottom-[0.5cqh] right-[1cqw] text-[0.8cqw] font-mono text-[#0284c7] font-bold">
                  {language === "zh" ? "临界余量: 35%" : "CRITICAL WATER: 35%"}
                </div>
              </div>
            </div>

            {/* Dynasty Tax Stamps */}
            <div className="my-[1.5cqh]">
              <span className="font-serif text-[1.1cqw] text-[#8b5a2b] font-bold block mb-[1cqh] text-left">
                {language === "zh" ? "III. 历代都护府关税核验" : "III. DYNASTY TARIFF VERIFICATION"}
              </span>
              <div className="flex gap-[1.5cqw] justify-start">
                {/* Han Dynasty Stamp */}
                <div className="w-[8cqw] h-[8cqw] border-[0.15cqw] border-[#8c7a6b]/20 rounded p-[0.5cqw] flex flex-col justify-between items-center opacity-30 bg-[#fbf7f0]">
                  <span className="text-[0.7cqw] font-mono">HAN DYNASTY</span>
                  <Landmark className="w-[2.5cqw] h-[2.5cqw] text-[#8c7a6b]" />
                  <span className="text-[0.65cqw] font-mono">ARCHIVED</span>
                </div>

                {/* Tang Dynasty Stamp */}
                <div className={`w-[8cqw] h-[8cqw] border-[0.15cqw] rounded p-[0.5cqw] flex flex-col justify-between items-center transition-all duration-500 ${
                  showTaxes ? "border-[#0f766e] bg-[#0f766e]/5 opacity-100 scale-100" : "border-[#8c7a6b]/20 opacity-30 scale-95"
                }`}>
                  <span className="text-[0.7cqw] font-mono text-[#0f766e] font-bold">TANG DYNASTY</span>
                  <ShieldCheck className="w-[2.5cqw] h-[2.5cqw] text-[#0f766e]" />
                  <span className="text-[0.65cqw] font-mono text-[#0f766e] font-bold">VERIFIED</span>
                </div>
              </div>
            </div>

            {/* Sovereign Oasis Red Clay Stamp */}
            {showStamp && (
              <div 
                key="vermilion-stamp"
                className="absolute right-[2cqw] bottom-[1cqh] w-[13cqw] h-[13cqw] border-[0.4cqw] border-double border-red-700 rounded-full flex items-center justify-center rotate-[-8deg] bg-red-50/30 shadow-lg animate-stamp-affix z-20"
              >
                <div className="text-center font-serif text-[1.1cqw] text-red-700 font-bold leading-tight flex flex-col items-center justify-center p-[0.5cqw]">
                  <span className="text-[0.8cqw] tracking-widest uppercase">SOVEREIGN</span>
                  <span className="border-y border-red-700/50 my-[0.3cqh] py-[0.3cqh] text-[1.2cqw] tracking-wider">安西都护</span>
                  <span className="text-[0.75cqw] tracking-widest">CUSTOMS SEAL</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Ledger Bar */}
        <div className="w-full flex justify-between items-center border-t border-[#8c7a6b]/15 pt-[2cqh] z-10 shrink-0">
          <div className="flex items-center gap-[1.5cqw]">
            <span className="font-mono text-[0.95cqw] text-[#8c7a6b] font-bold uppercase">
              {language === "zh" ? "实时操作:" : "BEAT ACTION:"}
            </span>
            <span className="font-mono text-[1cqw] bg-[#fffdf6] text-[#8b5a2b] border border-[#8b5a2b]/20 px-[1.2cqw] py-[0.5cqh] rounded-full font-black animate-pulse" key={`action-${scene}-${beat}`}>
              {currentBeat.action}
            </span>
          </div>
          <div className="flex items-center gap-[1cqw]">
            <span className="font-mono text-[0.9cqw] text-[#8c7a6b] font-bold uppercase">
              {language === "zh" ? `场景 ${scene} / 5` : `SCENE ${scene} / 5`}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Render the appropriate scene based on the scene prop
  const renderScene = () => {
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

  return (
    <div 
      className="w-full h-full relative overflow-hidden select-none bg-[#fbf7f0]"
      style={{ containerType: "size" }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes stamp-affix-anim {
          0% { transform: scale(3) rotate(-30deg); opacity: 0; filter: blur(4px); }
          70% { transform: scale(0.9) rotate(-10deg); opacity: 0.9; }
          100% { transform: scale(1) rotate(-8deg); opacity: 1; }
        }
        .animate-stamp-affix {
          animation: stamp-affix-anim 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes fade-in-anim {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in-anim 0.8s ease-out forwards;
        }
        @keyframes spin-slow-anim {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow-anim 20s linear infinite;
        }
        @keyframes camel-walk-anim {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-0.2cqh); }
        }
        .animate-camel-walk {
          animation: camel-walk-anim 1.5s ease-in-out infinite;
        }
      `}} />
      {renderCoordinateTicks()}
      {renderTopMapHorizonTrail()}
      {/* Main active scene view using Horizontal Spatial Viewport Track */}
      <div className="flex-1 w-full relative overflow-hidden h-full">
        <div 
          className="flex w-[500%] h-full transition-transform duration-1000 ease-out"
          style={{
            transform: `translateX(-${(scene - 1) * 20}%)`,
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          <div className="w-[20%] h-full shrink-0 relative">{renderScene1()}</div>
          <div className="w-[20%] h-full shrink-0 relative">{renderScene2()}</div>
          <div className="w-[20%] h-full shrink-0 relative">{renderScene3()}</div>
          <div className="w-[20%] h-full shrink-0 relative">{renderScene4()}</div>
          <div className="w-[20%] h-full shrink-0 relative">{renderScene5()}</div>
        </div>
      </div>
    </div>
  );
}
