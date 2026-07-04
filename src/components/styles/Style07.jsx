import React from "react";
import { 
  Compass, Map, Anchor, ShieldCheck, HelpCircle, Activity, Award, Tag
} from "lucide-react";

export const getMetadata = (lang) => ({
  id: "07",
  tier: "A",
  name: lang === "zh" ? "汉萨同盟商路争霸" : "Hanseatic League Trade Lanes",
  theme: lang === "zh" ? "复古像素与北海航路" : "Hanseatic League Maritime Trade",
  densityLabel: lang === "zh" ? "复古8-Bit" : "Retro 8-Bit Arcade",
  colors: { bg: "bg-black", ink: "text-white", panel: "border-zinc-800" },
  typography: { header: "font-mono font-black", body: "font-mono" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "汉萨同盟商路争霸 绪论" : "Introduction to Hanseatic League",
      beats: [
        { id: 1, action: lang === "zh" ? "汉萨商船扬帆起航" : "Deploy Cog Ship", title: lang === "zh" ? "北海商船与汉萨商业网络的崛起" : "Hanseatic Merchant Cogs", body: lang === "zh" ? "在中世纪北海与波罗的海，汉萨同盟的商人们凭借着吃水深、装载量巨大的‘柯格’商船（Cog），建立起牢不可破的商业垄断壁垒。" : "In the medieval North and Baltic Seas, Hanseatic merchants deployed high-capacity, deep-draft 'Cog' ships to construct a solid mercantile monopoly." },
        { id: 2, action: lang === "zh" ? "海图锁定吕贝克" : "Plot Maritime Lane", title: lang === "zh" ? "吕贝克港口与商会联盟" : "Lübeck Harbor & The Guild", body: lang === "zh" ? "吕贝克作为同盟的核心，统筹规划跨越数千公里的海运航线。汉萨商人通过组建武装护航队，在狂风巨浪和海盗夹击中保卫财富。" : "As the core of the League, Lübeck charted shipping routes spanning thousands of miles. Armed convoys defended wealth against storms and pirates." },
        { id: 3, action: lang === "zh" ? "大宗鳕鱼货品交割" : "Load Cargo Ledger", title: lang === "zh" ? "复古8-Bit商船遥测数据" : "Retro 8-Bit HUD Navigation", body: lang === "zh" ? "使用复古8位像素游戏UI，呈现汉萨大商船在 Bergen 港口装载大宗鳕鱼与食盐、准备运往波罗的海各口岸的结算瞬间。" : "Leveraging 8-bit retro gaming interfaces to capture the settlement moments of cogs loading dried cod and salt in Bergen for Baltic markets." }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "汉萨同盟商路争霸 解析" : "Symmetric Maritime Trading",
      beats: [
        { id: 1, action: lang === "zh" ? "对齐吕贝克出口" : "Lübeck Cargo Export", title: lang === "zh" ? "吕贝克优质食盐与木材" : "Lübeck Premium Salt & Timber", body: lang === "zh" ? "吕贝克商栈垄断了波罗的海的优质食盐（用于保存鲱鱼）与造船木材出口。手绘像素面板展示了吕贝克主货舱 of 装载配额。" : "Lübeck factories monopolized Baltic white salt (critical for fish curing) and oak timber. 8-bit panels show the hull cargo configuration." },
        { id: 2, action: lang === "zh" ? "登录贝尔根海产" : "Bergen Cod Import", title: lang === "zh" ? "贝尔根大宗鳕鱼与毛皮" : "Bergen Bulk Cod & Fur Depot", body: lang === "zh" ? "贝尔根商栈（Kontor）是同盟最大的海产与极地毛皮集散地。堆积如山的干鳕鱼在此等待过秤装船，销往天主教世界的每一个餐桌。" : "The Bergen Kontor was the League's prime seafood and arctic fur terminal. Mountains of dried stockfish were loaded to feed medieval Europe." },
        { id: 3, action: lang === "zh" ? "加盖商会通关大章" : "Seal Hanseatic Stamp", title: lang === "zh" ? "汉萨议会通关钢印核签" : "Hanseatic Council Clearance Seal", body: lang === "zh" ? "在核对完食盐与干鳕鱼的交换账册后，在商契羊皮纸上加盖汉萨红蜡大章，放行大商船船队起航前往下一个贸易港。" : "Upon tallying exchange ledgers of salt against cod, the red wax Hanseatic Seal is applied on sheepskin, clearing the fleet for departure." }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "汉萨同盟商路争霸 演进" : "Hanseatic Trade Lane Execution",
      beats: [
        { id: 1, action: lang === "zh" ? "测绘北海航线" : "Map North Sea", title: lang === "zh" ? "北海商船巡航测绘" : "North Sea Shipping Lane Survey", body: lang === "zh" ? "沿丹麦海峡和弗兰德斯海岸，实地勘测浅滩与礁石坐标，为汉萨重载大船规划出避开海盗据点的安全黄金水道。" : "Tracing shallow shoals and rocks along the Danish straits, charting safe gold-lane paths that avoid Danish pirate strongholds." },
        { id: 2, action: lang === "zh" ? "登计商栈货样" : "Tally Kontor Cargo", title: lang === "zh" ? "商栈仓库物资起运清单" : "Kontor Warehouse Inventory", body: lang === "zh" ? "清点吕贝克商栈仓库里堆放的成捆羊毛、鲱鱼桶、亚麻布与白银货币，在像素折页账册中录入货品品类、原产地与关税数据。" : "Tallying wool bales, herring barrels, and silver guilders, recording items and tariffs in the blocky pixel cargo ledger." },
        { id: 3, action: lang === "zh" ? "加盖吕贝克金章" : "Stamp Lübeck Seal", title: lang === "zh" ? "汉萨议长加盖吕贝克金印" : "Lübeck Alderman Verification Stamp", body: lang === "zh" ? "物产入账成功，在商契羊皮纸（Stele Contract）上加盖吕贝克汉萨议长的黑色封章，获得通航波罗的海的特许通行权。" : "Goods stored. Applying the Lübeck Alderman's charcoal coal-seal on parchment corners, earning exclusive Baltic navigation charters." }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "汉萨同盟商路争霸 矩阵" : "Hanseatic Commercial Matrix",
      beats: [
        { id: 1, action: lang === "zh" ? "境外商栈特权" : "Kontor Autonomy", title: lang === "zh" ? "境外自治商栈与特权" : "Kontor Autonomy & Trade Depot", body: lang === "zh" ? "在伦敦、贝尔根、诺夫哥罗德建立完全自治的商栈。拥有独立的司法权与免税特权，成为同盟在异国汲取财富的钢铁前哨。" : "Establishing self-governing Kontors in London and Bergen. Immune to local courts, they served as powerful merchant fortresses." },
        { id: 2, action: lang === "zh" ? "商会海洋法规" : "Maritime Statutes", title: lang === "zh" ? "汉萨海洋商法与条约" : "Hanseatic Maritime Statutes", body: lang === "zh" ? "制定统一的海洋贸易、海损分摊与水手雇佣法规。依靠强大的商业制裁与禁运手段，迫使北欧君主向同盟低头。" : "Standardizing marine laws and ship loss distribution. Leveraging trade blockades to force medieval kings to yield to the League." },
        { id: 3, action: lang === "zh" ? "商船护航防御" : "Convoy Protection", title: lang === "zh" ? "武装商船护航防卫" : "Convoy Escorts & Pirate Defence", body: lang === "zh" ? "面对‘兄弟会’海盗的联合打劫，汉萨大商船配备十字弩手与小型投石机。以坚固的橡木高楼板，和平扫荡并歼灭一切侵略者。" : "Armed cogs deployed archers and small trebuchets against pirates. Wooden castles swept marauders off the Baltic trade lanes." }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "汉萨同盟商路争霸 汇总" : "North Sea Commerce Ledger",
      beats: [
        { id: 1, action: lang === "zh" ? "统计关税结算" : "Tally Tariff Logs", title: lang === "zh" ? "汉萨同盟关税统计总册" : "Hanseatic Guild Tariff Ledger", body: lang === "zh" ? "大航海账目合流！清点合并包含鲱鱼桶数、吕贝克食盐重量、伦敦羊毛疋数以及不来梅银马克纯度在内的跨国同盟账册。" : "Arcade trade synthesis! Aggregating herring barrels, salt weights, London wool bales, and Bremen silver marks into a single ledger." },
        { id: 2, action: lang === "zh" ? "计算两地价差" : "Compute Price Offsets", title: lang === "zh" ? "南北两港交易物产差额" : "Symmetric Port Price Value Offset", body: lang === "zh" ? "剔除海盗抢劫与沉船损耗变量干扰，精确解算出吕贝克食盐与 Bergen 鳕鱼在多次互市周期中的绝对黄金比对差值点。" : "Filtering ship losses and pirate raid noise, measuring price offsets of Lübeck salt against Bergen stockfish across cycles." },
        { id: 3, action: lang === "zh" ? "加印同盟红泥印" : "Stamp Hansa Seal", title: lang === "zh" ? "汉萨总契约加印红蜡备案" : "Hanseatic Guild General Vermilion Seal", body: lang === "zh" ? "贸易周期交割！各项货品 and 税契审核无误，在同盟总议案文册末页加盖汉萨同盟红泥大印，获得北德意志大通商特许特权。" : "Barter session concluded! Document properties verified, sealing the final page of the guild register with the red Vermilion Seal." }
      ]
    }
  ]
});

export default function Style07({ scene, beat, language, isThumbnail, onNavigate }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];
  const isZh = language === "zh";

  // Coin Drop Stateful Animation Variables
  const [coinY, setCoinY] = React.useState(`${22 + (scene - 1) * 16}cqh`);
  const [isDropping, setIsDropping] = React.useState(false);
  const [landedScene, setLandedScene] = React.useState(null);
  const [particles, setParticles] = React.useState([]);

  React.useEffect(() => {
    // 1. Reset coin to the top entry slot instantly (disable transition)
    setIsDropping(false);
    setCoinY("6cqh");

    // 2. Start drop transition after a tiny delay to allow reflow
    const startTimer = setTimeout(() => {
      setIsDropping(true);
      setCoinY(`${22 + (scene - 1) * 16}cqh`);
    }, 50);

    // 3. Trigger landed effects when transition ends
    const endTimer = setTimeout(() => {
      setIsDropping(false);
      setLandedScene(scene);

      // Spawn 12 pixelated particles
      const colors = ["#facc15", "#eab308", "#f97316", "#ffffff"];
      const newParticles = Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 360) / 12 + (Math.random() * 20 - 10);
        const rad = (angle * Math.PI) / 180;
        const speed = 2.5 + Math.random() * 3.5;
        return {
          id: Math.random(),
          dx: Math.cos(rad) * speed,
          dy: Math.sin(rad) * speed,
          size: 2 + Math.random() * 3,
          color: colors[Math.floor(Math.random() * colors.length)],
        };
      });
      setParticles(newParticles);

      // Clear landed state and particles after they finish animating
      const clearTimer = setTimeout(() => {
        setLandedScene(null);
        setParticles([]);
      }, 600);

      return () => clearTimeout(clearTimer);
    }, 550); // 50ms delay + 500ms transition

    return () => {
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, [scene]);

  const renderScene1 = () => (
    <div className="w-full h-full flex flex-col justify-between p-[5cqw] relative bg-black text-white overflow-hidden select-none">
      {/* Top Slide Meta Header with Integrated Beat Action */}
      <div className="w-full flex justify-between items-start border-b border-zinc-800 pb-[2cqh] z-10 shrink-0 font-mono">
        <div className="flex flex-col gap-0.5">
          <span className="text-[1.1cqw] tracking-widest uppercase text-[#22c55e] font-black">
            {meta.theme}
          </span>
          <span className="text-[1cqw] text-zinc-500 tracking-tight uppercase">
            {meta.name} • {meta.scenes[0].title}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 font-bold text-[0.8cqw] uppercase">{isZh ? "操作:" : "ACTION:"}</span>
            <span className="bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/30 px-3 py-1 rounded-sm text-[0.85cqw] font-black animate-pulse" key={`action-1-${beat}`}>
              {meta.scenes[0].beats[beat].action}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-zinc-950 px-3 py-1.5 rounded-sm border border-zinc-800 shadow-2xl">
            <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="font-mono text-[0.9cqw] text-[#22c55e] font-bold uppercase">{meta.tier}-TIER RETRO ARCADE</span>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full grid grid-cols-12 gap-[4cqw] items-center my-[3cqh] z-10 overflow-hidden font-mono">
        <div className="col-span-6 flex flex-col gap-[2cqh] text-left pr-[2cqw] justify-center min-h-[35cqh]">
          <h1 className="text-[3.8cqw] leading-[1.1] font-black tracking-tight text-white uppercase animate-slide-right" key={`title-1-${beat}`}>
            {meta.scenes[0].beats[beat].title}
          </h1>
          <p className="text-[1.5cqw] leading-[1.5] text-zinc-300 mt-[1cqh] animate-crossfade" key={`body-1-${beat}`}>
            {meta.scenes[0].beats[beat].body}
          </p>
        </div>
        <div className="col-span-6 flex items-center justify-center min-h-[40cqh]">
          <div className="relative w-[34cqw] h-[34cqw] flex items-center justify-center" key={`s1-${beat}`}>
            <div className="absolute w-[95%] h-[95%] bg-[#080c10] border-4 border-[#22c55e] rounded-sm shadow-[0_0_30px_rgba(34,197,94,0.3)] flex flex-col justify-between p-[1.5cqw] relative">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100%_0.5cqh] pointer-events-none rounded" />
              <div className="relative flex-1 flex items-center justify-center py-2 z-10 animate-bounce">
                <svg className="w-[18cqw] h-[18cqw]" viewBox="0 0 100 100">
                  <line x1="5" y1="80" x2="95" y2="80" stroke="#00ffff" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="5" y1="85" x2="95" y2="85" stroke="#00ffff" strokeWidth="2" strokeDasharray="2 2" className="opacity-50" />
                  <rect x="25" y="55" width="50" height="15" fill="#ca8a04" stroke="white" strokeWidth="2" />
                  <rect x="20" y="50" width="10" height="10" fill="#ca8a04" stroke="white" strokeWidth="2" />
                  <rect x="70" y="50" width="10" height="10" fill="#ca8a04" stroke="white" strokeWidth="2" />
                  <rect x="48" y="20" width="4" height="35" fill="white" />
                  <rect x="35" y="25" width="30" height="20" fill="white" stroke="black" strokeWidth="2" />
                  <rect x="47" y="25" width="6" height="20" fill="#ef4444" />
                  <rect x="35" y="32" width="30" height="6" fill="#ef4444" />
                  <rect x="52" y="15" width="12" height="6" fill="#ef4444" />
                  {beat >= 1 && (
                    <circle cx="85" cy="50" r="4" fill="#eab308" className="animate-ping" />
                  )}
                </svg>
              </div>
              <div className={`absolute bottom-3 right-4 bg-zinc-950 border-2 border-dashed border-[#eab308] px-3 py-1 font-mono text-[1.1cqw] text-[#eab308] rounded transition-all duration-1000 ${
                beat >= 2 ? "opacity-100 scale-105 animate-pulse" : "opacity-0 scale-75"
              }`}>
                GOLD: 99,420 GP
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderScene2 = () => (
    <div className="w-full h-full flex flex-col justify-between p-[5cqw] relative bg-black text-white overflow-hidden select-none">
      {/* Top Slide Meta Header with Integrated Beat Action */}
      <div className="w-full flex justify-between items-start border-b border-zinc-800 pb-[2cqh] z-10 shrink-0 font-mono">
        <div className="flex flex-col gap-0.5">
          <span className="text-[1.1cqw] tracking-widest uppercase text-[#22c55e] font-black">
            {meta.theme}
          </span>
          <span className="text-[1cqw] text-zinc-500 tracking-tight uppercase">
            {meta.name} • {meta.scenes[1].title}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 font-bold text-[0.8cqw] uppercase">{isZh ? "操作:" : "ACTION:"}</span>
            <span className="bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/30 px-3 py-1 rounded-sm text-[0.85cqw] font-black animate-pulse" key={`action-2-${beat}`}>
              {meta.scenes[1].beats[beat].action}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-zinc-950 px-3 py-1.5 rounded-sm border border-zinc-800 shadow-2xl">
            <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="font-mono text-[0.9cqw] text-[#22c55e] font-bold uppercase">{meta.tier}-TIER RETRO ARCADE</span>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full grid grid-cols-12 gap-[4cqw] items-center my-[3cqh] z-10 overflow-hidden font-mono">
        <div className="col-span-6 flex flex-col gap-[2cqh] text-left pr-[2cqw] justify-center min-h-[35cqh]">
          <h1 className="text-[3.8cqw] leading-[1.1] font-black tracking-tight text-white uppercase animate-slide-right" key={`title-2-${beat}`}>
            {meta.scenes[1].beats[beat].title}
          </h1>
          <p className="text-[1.5cqw] leading-[1.5] text-zinc-300 mt-[1cqh] animate-crossfade" key={`body-2-${beat}`}>
            {meta.scenes[1].beats[beat].body}
          </p>
        </div>
        <div className="col-span-6 flex items-center justify-center min-h-[40cqh]">
          <div className="relative w-full max-w-[42cqw] grid grid-cols-2 gap-[3cqw] items-center animate-rotate-in font-mono" key={`s2-${beat}`}>
            <div className={`bg-black border-4 border-[#22c55e] p-[2cqw] rounded-sm shadow-[0_0_20px_rgba(34,197,94,0.15)] flex flex-col justify-between min-h-[28cqh] relative ${beat >= 0 ? "opacity-100 scale-100" : "opacity-30 scale-95"}`}>
              <div className="flex items-center gap-2 border-b border-[#22c55e]/20 pb-1.5 font-mono">
                <span className="text-[#22c55e] font-black text-[1.1cqw]">LÜBECK.KONTOR</span>
              </div>
              <svg className="w-[10cqw] h-[6cqw]" viewBox="0 0 100 60">
                <rect x="40" y="15" width="20" height="30" fill="none" stroke="white" strokeWidth="2" />
                <line x1="40" y1="25" x2="60" y2="25" stroke="white" strokeWidth="1.5" />
                <line x1="40" y1="35" x2="60" y2="35" stroke="white" strokeWidth="1.5" />
                <rect x="45" y="27" width="10" height="6" fill="#22c55e" />
                <text x="50" y="52" fill="#22c55e" className="text-[7px] font-mono text-center font-bold">SALT_DEPOT</text>
              </svg>
              <div className="text-center">
                <span className="font-mono text-[1.1cqw] text-white font-black block">{isZh ? "吕贝克白盐出口" : "LÜBECK SALT EXPORT"}</span>
                <span className="text-[0.9cqw] text-slate-400">{isZh ? "同盟核心食盐储备" : "Base purity check: OK"}</span>
              </div>
            </div>

            <div className={`bg-black border-4 border-[#eab308] p-[2cqw] rounded-sm shadow-[0_0_20px_rgba(234,179,8,0.15)] flex flex-col justify-between min-h-[28cqh] relative transition-all duration-1000 ${
              beat >= 1 ? "opacity-100 scale-100" : "opacity-10 scale-90"
            }`}>
              <div className="flex items-center gap-2 border-b border-[#eab308]/20 pb-1.5 font-mono">
                <span className="text-[#eab308] font-black text-[1.1cqw]">BERGEN.KONTOR</span>
              </div>
              <svg className="w-[10cqw] h-[6cqw]" viewBox="0 0 100 60">
                <rect x="40" y="15" width="20" height="30" fill="none" stroke="white" strokeWidth="2" />
                <path d="M 45,30 C 50,25 50,35 55,30" fill="none" stroke="#eab308" strokeWidth="1.5" />
                <rect x="48" y="22" width="4" height="15" fill="none" stroke="white" strokeWidth="1" />
                <text x="50" y="52" fill="#eab308" className="text-[7px] font-mono text-center font-bold">STOCK_FISH</text>
              </svg>
              <div className="text-center">
                <span className="font-mono text-[1.1cqw] text-white font-black block">{isZh ? "贝尔根大宗鳕鱼" : "BERGEN COD IMPORT"}</span>
                <span className="text-[0.9cqw] text-slate-400">{isZh ? "极地冻鳕鱼储存库" : "Stockfish inventory: OK"}</span>
              </div>

              {beat >= 2 && (
                <div className="absolute inset-0 bg-[#ef4444]/10 flex items-center justify-center rounded-sm">
                  <div className="bg-[#ef4444] text-white font-mono text-[1.2cqw] px-3 py-1 border-2 border-white rounded rotate-[-8deg] font-black tracking-widest shadow-xl animate-elastic-pop">
                    {isZh ? "通关核准" : "BARTER_OK"}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderScene3 = () => (
    <div className="w-full h-full flex flex-col justify-between p-[5cqw] relative bg-black text-white overflow-hidden select-none">
      {/* Top Slide Meta Header with Integrated Beat Action */}
      <div className="w-full flex justify-between items-start border-b border-zinc-800 pb-[2cqh] z-10 shrink-0 font-mono">
        <div className="flex flex-col gap-0.5">
          <span className="text-[1.1cqw] tracking-widest uppercase text-[#22c55e] font-black">
            {meta.theme}
          </span>
          <span className="text-[1cqw] text-zinc-500 tracking-tight uppercase">
            {meta.name} • {meta.scenes[2].title}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 font-bold text-[0.8cqw] uppercase">{isZh ? "操作:" : "ACTION:"}</span>
            <span className="bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/30 px-3 py-1 rounded-sm text-[0.85cqw] font-black animate-pulse" key={`action-3-${beat}`}>
              {meta.scenes[2].beats[beat].action}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-zinc-950 px-3 py-1.5 rounded-sm border border-zinc-800 shadow-2xl">
            <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="font-mono text-[0.9cqw] text-[#22c55e] font-bold uppercase">{meta.tier}-TIER RETRO ARCADE</span>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full grid grid-cols-12 gap-[4cqw] items-center my-[3cqh] z-10 overflow-hidden font-mono">
        <div className="col-span-6 flex flex-col gap-[2cqh] text-left pr-[2cqw] justify-center min-h-[35cqh]">
          <h1 className="text-[3.8cqw] leading-[1.1] font-black tracking-tight text-white uppercase animate-slide-right" key={`title-3-${beat}`}>
            {meta.scenes[2].beats[beat].title}
          </h1>
          <p className="text-[1.5cqw] leading-[1.5] text-zinc-300 mt-[1cqh] animate-crossfade" key={`body-3-${beat}`}>
            {meta.scenes[2].beats[beat].body}
          </p>
        </div>
        <div className="col-span-6 flex items-center justify-center min-h-[40cqh]">
          <div className="flex items-center justify-between w-full max-w-[44cqw] relative animate-slide-up" key={`s3-${beat}`}>
            <div className={`border-4 border-[#22c55e] bg-black p-[1.8cqw] rounded-sm flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md relative overflow-hidden transition-all duration-700 ${beat >= 0 ? "opacity-100 scale-100" : "opacity-20 scale-95"}`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">01</div>
              <div className="w-[3cqw] h-[3cqw] rounded bg-zinc-900 border border-[#22c55e] flex items-center justify-center font-mono text-[#22c55e] text-[1.1cqw] font-bold">SHIP</div>
              <span className="font-mono text-[1cqw] font-black text-white">{isZh ? "商船出航" : "DEPLOY"}</span>
            </div>

            <div className={`flex-1 h-1 bg-[#22c55e]/30 transition-all duration-1000 mx-2 ${
              beat >= 1 ? "bg-[#22c55e] opacity-100 animate-pulse" : "opacity-20"
            }`} />

            <div className={`border-4 border-[#eab308] bg-black p-[1.8cqw] rounded-sm flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md relative overflow-hidden transition-all duration-700 ${
              beat >= 1 ? "opacity-100 scale-100" : "opacity-20 scale-95"
            }`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">02</div>
              <div className="w-[3cqw] h-[3cqw] rounded bg-zinc-900 border border-[#eab308] flex items-center justify-center font-mono text-[#eab308] text-[1.1cqw] font-bold">ROUTE</div>
              <span className="font-mono text-[1cqw] font-black text-white">{isZh ? "海图规划" : "CHART"}</span>
            </div>

            <div className={`flex-1 h-1 bg-[#22c55e]/30 transition-all duration-1000 mx-2 ${
              beat >= 2 ? "bg-white opacity-100 animate-pulse" : "opacity-20"
            }`} />

            <div className={`border-4 border-[#ef4444] bg-black p-[1.8cqw] rounded-sm flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md relative overflow-hidden transition-all duration-700 ${
              beat >= 2 ? "opacity-100 scale-100 border-[#ef4444]/60" : "opacity-20 scale-95"
            }`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">03</div>
              <div className="w-[3cqw] h-[3cqw] rounded bg-zinc-900 border border-[#ef4444] flex items-center justify-center font-mono text-[#ef4444] text-[1.1cqw] font-bold">LOAD</div>
              <span className="font-mono text-[1cqw] font-black text-white">{isZh ? "货品记账" : "TALLY"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderScene4 = () => (
    <div className="w-full h-full flex flex-col justify-between p-[5cqw] relative bg-black text-white overflow-hidden select-none font-mono">
      {/* Top Slide Meta Header with Integrated Beat Action */}
      <div className="w-full flex justify-between items-start border-b border-zinc-800 pb-[2cqh] z-10 shrink-0">
        <div className="flex flex-col gap-0.5">
          <span className="text-[1.1cqw] tracking-widest uppercase text-[#22c55e] font-black">
            {meta.theme}
          </span>
          <span className="text-[1cqw] text-zinc-500 tracking-tight uppercase">
            {meta.name} • {meta.scenes[3].title}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 font-bold text-[0.8cqw] uppercase">{isZh ? "操作:" : "ACTION:"}</span>
            <span className="bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/30 px-3 py-1 rounded-sm text-[0.85cqw] font-black animate-pulse" key={`action-4-${beat}`}>
              {meta.scenes[3].beats[beat].action}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-zinc-950 px-3 py-1.5 rounded-sm border border-zinc-800 shadow-2xl">
            <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="font-mono text-[0.9cqw] text-[#22c55e] font-bold uppercase">{meta.tier}-TIER RETRO ARCADE</span>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full grid grid-cols-12 gap-[4cqw] items-center my-[3cqh] z-10 overflow-hidden">
        <div className="col-span-6 flex flex-col gap-[2cqh] text-left pr-[2cqw] justify-center min-h-[35cqh]">
          <h1 className="text-[3.8cqw] leading-[1.1] font-black tracking-tight text-white uppercase animate-slide-right" key={`title-4-${beat}`}>
            {meta.scenes[3].beats[beat].title}
          </h1>
          <p className="text-[1.5cqw] leading-[1.5] text-zinc-300 mt-[1cqh] animate-crossfade" key={`body-4-${beat}`}>
            {meta.scenes[3].beats[beat].body}
          </p>
        </div>
        <div className="col-span-6 flex items-center justify-center min-h-[40cqh]">
          <div className="grid grid-cols-2 gap-[1.5cqw] w-full max-w-[42cqw] animate-scale-up" key={`s4-${beat}`}>
            <div className={`border-2 border-zinc-800 bg-zinc-950 p-[1.5cqw] rounded-sm relative transition-all duration-500 ${beat >= 0 ? "opacity-100 scale-100 border-[#22c55e]/50 bg-[#22c55e]/5" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-[#22c55e] font-bold">KONTOR</div>
              <span className="font-mono font-black text-[1.1cqw] text-white block mb-1 uppercase">{isZh ? "境外特权商栈" : "KONTOR PRIVILEGES"}</span>
              <p className="text-[0.9cqw] opacity-85 text-zinc-300 leading-tight">
                {isZh ? "在伦敦和 Bergen 建立独立豁免权商栈。完全豁免当地法律及课税。" : "Autonomous self-governing warehouses exempt from local tariffs."}
              </p>
            </div>

            <div className={`border-2 border-zinc-800 bg-zinc-950 p-[1.5cqw] rounded-sm relative transition-all duration-500 ${beat >= 1 ? "opacity-100 scale-100 border-[#eab308]/50 bg-[#eab308]/5" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-[#eab308] font-bold">STATUTE</div>
              <span className="font-mono font-black text-[1.1cqw] text-white block mb-1 uppercase">{isZh ? "同盟海洋商法" : "MARITIME STATUTES"}</span>
              <p className="text-[0.9cqw] opacity-85 text-zinc-300 leading-tight">
                {isZh ? "制定统一的海损公摊、水手和雇佣守则。依靠禁商惩罚压制异国政权。" : "Standardized maritime statutes. Leveraging blockades against local kings."}
              </p>
            </div>

            <div className={`border-2 border-zinc-800 bg-zinc-950 p-[1.5cqw] rounded-sm relative transition-all duration-500 ${beat >= 2 ? "opacity-100 scale-100 border-[#ef4444]/50 bg-[#ef4444]/5" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-[#ef4444] font-bold">ESCORT</div>
              <span className="font-mono font-black text-[1.1cqw] text-white block mb-1 uppercase">{isZh ? "武装护航编队" : "CONVOY ESCORTS"}</span>
              <p className="text-[0.9cqw] opacity-85 text-zinc-300 leading-tight">
                {isZh ? "配备十字弩弩手的小型武装护航柯格船。巡回清扫并剿灭一切沿途海盗。" : "Armed escort ships deploying elite archers to sweep Baltic pirates."}
              </p>
            </div>

            <div className={`border-2 border-zinc-800 bg-zinc-950 p-[1.5cqw] rounded-sm relative transition-all duration-500 ${beat >= 2 ? "opacity-100 scale-100 border-white/20 bg-white/5" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-zinc-400 font-bold">LEDGER</div>
              <span className="font-mono font-black text-[1.1cqw] text-white block mb-1 uppercase">{isZh ? "物产起运底账" : "LEDGER TALLY"}</span>
              <p className="text-[0.9cqw] opacity-85 text-zinc-300 leading-tight">
                {isZh ? "大宗食盐、干鳕鱼、羊毛、木材以及德意志马克硬币的精密对账底账。" : "Raw salt, dried cod, wool bales, and Lübeck silver marks register."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderScene5 = () => (
    <div className="w-full h-full flex flex-col justify-between p-[5cqw] relative bg-black text-white overflow-hidden select-none font-mono">
      {/* Top Slide Meta Header with Integrated Beat Action */}
      <div className="w-full flex justify-between items-start border-b border-zinc-800 pb-[2cqh] z-10 shrink-0 font-mono">
        <div className="flex flex-col gap-0.5">
          <span className="text-[1.1cqw] tracking-widest uppercase text-[#22c55e] font-black">
            {meta.theme}
          </span>
          <span className="text-[1cqw] text-zinc-500 tracking-tight uppercase">
            {meta.name} • {meta.scenes[4].title}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 font-bold text-[0.8cqw] uppercase">{isZh ? "操作:" : "ACTION:"}</span>
            <span className="bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/30 px-3 py-1 rounded-sm text-[0.85cqw] font-black animate-pulse" key={`action-5-${beat}`}>
              {meta.scenes[4].beats[beat].action}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-zinc-950 px-3 py-1.5 rounded-sm border border-zinc-800 shadow-2xl">
            <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="font-mono text-[0.9cqw] text-[#22c55e] font-bold uppercase">{meta.tier}-TIER RETRO ARCADE</span>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full grid grid-cols-12 gap-[4cqw] items-center my-[3cqh] z-10 overflow-hidden font-mono">
        <div className="col-span-6 flex flex-col gap-[2cqh] text-left pr-[2cqw] justify-center min-h-[35cqh]">
          <h1 className="text-[3.8cqw] leading-[1.1] font-black tracking-tight text-white uppercase animate-slide-right" key={`title-5-${beat}`}>
            {meta.scenes[4].beats[beat].title}
          </h1>
          <p className="text-[1.5cqw] leading-[1.5] text-zinc-300 mt-[1cqh] animate-crossfade" key={`body-5-${beat}`}>
            {meta.scenes[4].beats[beat].body}
          </p>
        </div>
        <div className="col-span-6 flex items-center justify-center min-h-[40cqh]">
          <div className="grid grid-cols-3 gap-[1cqw] w-full max-w-[45cqw] animate-bento-stagger" key={`s5-${beat}`}>
            <div className={`col-span-2 border-4 border-[#22c55e] bg-black p-[1.2cqw] rounded-sm min-h-[16cqh] flex flex-col justify-between transition-all duration-500 ${beat >= 0 ? "opacity-100" : "opacity-25"}`}>
              <div className="flex justify-between items-center border-b border-[#22c55e]/20 pb-1.5 font-mono">
                <span className="text-[0.95cqw] text-[#22c55e] font-black flex items-center gap-1.5 uppercase">
                  <Anchor className="w-3.5 h-3.5 text-[#22c55e] animate-pulse" />
                  {isZh ? "汉萨海运安全水道遥测" : "NORTH SEA CONVOY TELEMETRY"}
                </span>
                <span className="text-[0.8cqw] font-mono text-zinc-500">CONVOY_94</span>
              </div>
              <div className="flex flex-col gap-1 mt-2 font-mono text-[0.85cqw] text-zinc-400">
                <div className="flex justify-between"><span>Lübeck-Bergen Route:</span><span className="text-[#22c55e] font-bold">SAFE (Convoys Active)</span></div>
                <div className="flex justify-between"><span>Pirate Threat Index:</span><span className="text-red-500 font-bold">LOW (0.02%)</span></div>
              </div>
            </div>

            <div className={`border-4 border-[#eab308] bg-black p-[1.2cqw] rounded-sm min-h-[16cqh] flex flex-col justify-between transition-all duration-500 ${beat >= 1 ? "opacity-100" : "opacity-25"}`}>
              <span className="font-mono text-[0.85cqw] text-white font-black block uppercase">{isZh ? "总贸易货值估算" : "CARGO VALUE GP"}</span>
              <div className="text-[2.2cqw] font-black text-[#eab308] font-mono leading-none my-1">
                42,420<span className="text-[1cqw] font-normal font-sans opacity-70">g</span>
              </div>
              <span className="text-[0.8cqw] text-zinc-500 font-mono block">Silver Mark Standard</span>
            </div>

            <div className={`col-span-3 border-4 border-red-600/40 bg-black p-[1cqw] rounded-sm flex items-center justify-between transition-all duration-500 ${beat >= 2 ? "opacity-100 bg-[#ef4444]/5" : "opacity-25"}`}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                <span className="font-mono text-[0.9cqw] text-red-500 font-black uppercase">
                  {isZh ? "✓ 汉萨海洋通关文牒加印总议长红泥印信" : "✓ HANSEATIC GUILD GENERAL MARITIME CHARTER SEALED"}
                </span>
              </div>
              <span className="font-mono text-[0.8cqw] text-zinc-500">SEAL: HANSA.LAW.402</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render Right Vertical 8-Bit Coin Slots HUD Bar
  const renderCoinSlotsHUD = () => {
    const slots = [
      { s: 1, label: "SCENE 1", color: "#22c55e", glowClass: "border-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.6),inset_0_0_8px_rgba(34,197,94,0.4)]" },
      { s: 2, label: "SCENE 2", color: "#eab308", glowClass: "border-[#eab308] shadow-[0_0_15px_rgba(234,179,8,0.6),inset_0_0_8px_rgba(234,179,8,0.4)]" },
      { s: 3, label: "SCENE 3", color: "#ef4444", glowClass: "border-[#ef4444] shadow-[0_0_15px_rgba(239,68,68,0.6),inset_0_0_8px_rgba(239,68,68,0.4)]" },
      { s: 4, label: "SCENE 4", color: "#06b6d4", glowClass: "border-[#06b6d4] shadow-[0_0_15px_rgba(6,182,212,0.6),inset_0_0_8px_rgba(6,182,212,0.4)]" },
      { s: 5, label: "SCENE 5", color: "#a855f7", glowClass: "border-[#a855f7] shadow-[0_0_15px_rgba(168,85,247,0.6),inset_0_0_8px_rgba(168,85,247,0.4)]" }
    ];

    return (
      <div className="w-[10cqw] h-full bg-zinc-900 border-l-4 border-zinc-700 flex flex-col items-center py-[2cqh] relative z-30 select-none shadow-2xl">
        {/* Metal Panel Rivets */}
        <div className="absolute top-2 left-2 w-2 h-2 bg-zinc-600 border border-black shadow-[inset_1px_1px_0px_#a1a1aa]" />
        <div className="absolute top-2 right-2 w-2 h-2 bg-zinc-600 border border-black shadow-[inset_1px_1px_0px_#a1a1aa]" />
        <div className="absolute bottom-2 left-2 w-2 h-2 bg-zinc-600 border border-black shadow-[inset_1px_1px_0px_#a1a1aa]" />
        <div className="absolute bottom-2 right-2 w-2 h-2 bg-zinc-600 border border-black shadow-[inset_1px_1px_0px_#a1a1aa]" />

        {/* Coin Entry Slot at the Top */}
        <div className="w-[8cqw] h-[6cqh] bg-zinc-800 border-2 border-zinc-600 flex flex-col items-center justify-center relative shadow-md mt-[1cqh]">
          <span className="text-[0.55cqw] font-mono text-amber-500 font-bold tracking-widest uppercase mb-1">COIN ENTRY</span>
          <div className="w-[1.2cqw] h-[2.5cqh] bg-black border border-zinc-700 shadow-inner relative flex items-center justify-center">
            {/* Glowing Orange LED */}
            <div className="w-1.5 h-1.5 bg-amber-500 shadow-[0_0_6px_#f59e0b] animate-pulse" />
          </div>
          <span className="text-[0.45cqw] font-mono text-zinc-400 mt-1 uppercase">INSERT COIN</span>
        </div>

        {/* Vertical Slot Channel Groove */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[12cqh] bottom-[4cqh] w-[0.8cqw] bg-black border-l border-r border-zinc-800" />

        {/* Clickable Coin Slots representing the 5 Scenes */}
        <div className="flex-1 flex flex-col justify-between w-full px-[0.75cqw] mt-[4cqh] mb-[2cqh] relative z-10">
          {slots.map((slot) => {
            const isActive = scene === slot.s;
            const isLanded = landedScene === slot.s;

            return (
              <div
                key={slot.s}
                onClick={() => onNavigate && onNavigate(slot.s, 0)}
                className={`w-full h-[11cqh] bg-zinc-800 border-4 rounded-none cursor-pointer flex flex-col items-center justify-between py-[0.5cqh] relative transition-all duration-300 ${
                  isActive 
                    ? `${slot.glowClass} ${isLanded ? "animate-clink" : ""}` 
                    : "border-zinc-600 hover:border-zinc-400 hover:scale-[1.02] shadow-[inset_-2px_-2px_0px_#3f3f46,inset_2px_2px_0px_#a1a1aa]"
                }`}
              >
                {/* Slot Label */}
                <span 
                  className={`text-[0.7cqw] font-mono font-black tracking-wider uppercase transition-colors duration-300`}
                  style={{ color: isActive ? slot.color : "#a1a1aa" }}
                >
                  {slot.label}
                </span>

                {/* Vertical Coin Slot Cutout */}
                <div className="w-[1cqw] h-[3.5cqh] bg-black border border-zinc-700 shadow-inner relative flex items-center justify-center">
                  {!isActive && (
                    <div className="w-1 h-1 bg-red-600 shadow-[0_0_4px_#ef4444] animate-pulse" />
                  )}
                  {isActive && (
                    <div className="w-1 h-1 bg-emerald-500 shadow-[0_0_6px_#10b981] animate-ping" />
                  )}
                </div>

                {/* Active Status Text */}
                <span 
                  className={`text-[0.6cqw] font-mono font-black tracking-widest uppercase transition-all duration-300 ${
                    isActive ? "animate-pulse" : "opacity-60"
                  }`}
                  style={{ color: isActive ? slot.color : "#71717a" }}
                >
                  {isActive ? "PLAYING" : "25¢"}
                </span>

                {/* Particle Explosion Container (Centered over active slot) */}
                {isLanded && (
                  <div className="absolute inset-0 pointer-events-none overflow-visible">
                    {particles.map((p) => (
                      <div
                        key={p.id}
                        className="absolute rounded-none pixelated animate-particle"
                        style={{
                          width: `${p.size}px`,
                          height: `${p.size}px`,
                          left: "50%",
                          top: "50%",
                          backgroundColor: p.color,
                          "--dx": `${p.dx}cqw`,
                          "--dy": `${p.dy}cqh`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Golden Pixel Coin dropping down the channel */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 z-40 pointer-events-none"
          style={{
            top: coinY,
            transition: isDropping ? "top 0.5s cubic-bezier(0.4, 0, 1, 1)" : "none",
          }}
        >
          <svg viewBox="0 0 8 8" className="w-[2.2cqw] h-[2.2cqw]" style={{ shapeRendering: "crispEdges" }}>
            <polygon points="2,0 6,0 8,2 8,6 6,8 2,8 0,6 0,2" fill="#ca8a04" />
            <polygon points="2,1 6,1 7,2 7,6 6,7 2,7 1,6 1,2" fill="#eab308" />
            <polygon points="2,1 5,1 6,2 6,5 5,6 2,6 2,2" fill="#fef08a" />
            <polygon points="3,2 5,2 6,3 6,5 5,5 3,5 3,3" fill="#eab308" />
            <rect x="3" y="3" width="2" height="2" fill="#a16207" />
          </svg>
        </div>
      </div>
    );
  };

  return (
    <div className={`w-full h-full flex flex-row relative ${meta.colors.bg} ${meta.colors.ink} overflow-hidden select-none`}>
      <style>{`
        .pixel-grid-bg {
          background-image: linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px);
          background-size: 4cqw 4cqw;
        }
        @keyframes particle-explode {
          0% {
            transform: translate(-50%, -50%) translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) translate(var(--dx), var(--dy)) scale(0);
            opacity: 0;
          }
        }
        .animate-particle {
          animation: particle-explode 0.6s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
        }
        @keyframes slot-clink {
          0% { transform: scale(1); }
          20% { transform: scale(0.9) translateY(2px); }
          40% { transform: scale(1.1) translateY(-4px); }
          60% { transform: scale(0.95) translateY(1px); }
          80% { transform: scale(1.02) translateY(-1px); }
          100% { transform: scale(1); }
        }
        .animate-clink {
          animation: slot-clink 0.4s ease-out;
        }
      `}</style>

      {/* Background Grid */}
      <div className="absolute inset-0 pixel-grid-bg pointer-events-none" />

      {/* MAIN SCENE AREA using Horizontal Spatial Viewport Track */}
      <div className={`${isThumbnail ? "w-full" : "w-[90cqw]"} h-full relative overflow-hidden`}>
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

      {/* Right Vertical 8-Bit Coin Slots HUD Bar */}
      {!isThumbnail && renderCoinSlotsHUD()}
    </div>
  );
}
