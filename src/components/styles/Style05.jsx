import React from "react";
import { 
  Compass, Map, FileText, Camera, ShieldCheck, HelpCircle, User, Bot, Tag
} from "lucide-react";

export const getMetadata = (lang) => ({
  id: "05",
  tier: "A",
  name: lang === "zh" ? "丝绸之路微观印记" : "Silk Road Chronicles",
  theme: lang === "zh" ? "丝路商旅与地学考古" : "Ancient Silk Road Chronicles",
  densityLabel: lang === "zh" ? "历史图志" : "Historical Travelogue",
  colors: { bg: "bg-[#fffbeb]", ink: "text-[#451a03]", panel: "border-[#78350f]/15" },
  typography: { header: "font-serif", body: "font-sans" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "丝绸之路微观印记 绪论" : "Introduction to Silk Road Chronicles",
      beats: [
        { id: 1, action: lang === "zh" ? "规划丝路商线" : "Chart Route", title: lang === "zh" ? "大漠驼铃与河西走廊" : "Desert Caravans & Hexi Corridor", body: lang === "zh" ? "穿过无垠的流沙与连绵的戈壁，古代商队依靠点缀在荒漠边缘的绿洲水源，开辟了横跨亚欧大陆的伟大贸易动脉。" : "Spanning endless shifting sands and gravel deserts, ancient merchant caravans carved out the great Eurasian trade artery via oasis springs." },
        { id: 2, action: lang === "zh" ? "记入商队日记" : "Log Caravan Journal", title: lang === "zh" ? "敦煌壁画与行纪残片" : "Dunhuang Murals & Travel Logs", body: lang === "zh" ? "敦煌莫高窟的斑驳壁画与藏经洞里的吐鲁番行纪，无声地记录着九世纪商贾们遭遇沙暴、合十祈福的微观行旅记忆。" : "Faded Dunhuang frescoes and Turpan parchment logs silently record the intimate memories of 9th-century merchants braving sandstorms." },
        { id: 3, action: lang === "zh" ? "大宗物产交割" : "Trade Silk & Spices", title: lang === "zh" ? "极地偏光镜下的大宗贸易" : "Polaroid Lens on Trade Markets", body: lang === "zh" ? "利用现代相纸图像框架，重现商队越过帕米尔高原、在布哈拉市集用丝绸换取香料与琉璃器具的交易瞬间。" : "Leveraging polaroid frames to capture the trading moments of caravans exchanging silk bolts for Bukharan cobalt glassware and spices." }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "丝绸之路微观印记 解析" : "Symmetric Oasis Trading",
      beats: [
        { id: 1, action: lang === "zh" ? "比对中原绢帛" : "Examine Central Silk", title: lang === "zh" ? "中原绢丝的编织密构" : "Central Silk Weave Profile", body: lang === "zh" ? "中原产斜纹提花绢帛，其精细度与富有光泽的蚕丝密度令地中海世界叹为观止。手绘解剖图展示了斜纹编织横截面的维向走向。" : "Central silk weave patterns are analyzed. High-density diagonal wefts and lustrous raw silk strands awed Roman and Persian courts." },
        { id: 2, action: lang === "zh" ? "解译西域琉璃" : "Inspect Cobalt Glass", title: lang === "zh" ? "萨珊王朝钴蓝琉璃" : "Sasanian Cobalt Glass Artifact", body: lang === "zh" ? "出土于古墓中的萨珊钴蓝刻花玻璃杯。这种带有强烈异域刻槽的器皿，在汉地被视作与和阗美玉同等珍贵的稀世奇珍。" : "Excavated Sasanian cobalt glass cups. Its dramatic facet-cut patterns were valued as highly as Hetian nephrite jade in Chinese palaces." },
        { id: 3, action: lang === "zh" ? "盖上通关玺印" : "Seal Custom Stamp", title: lang === "zh" ? "西域通关玺印核签" : "Oasis Customs Clearance Stamp", body: lang === "zh" ? "在比对完绢帛与琉璃的贸易比价后，在羊皮通关文牒（Apostat）上加盖红色泥金封泥，准予商队进入绿洲水源补充补给。" : "After establishing barter values, a red wax customs seal is stamped on parchment, clearing the caravan's entry to the oasis wells." }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "丝绸之路微观印记 演进" : "Caravan Route Execution",
      beats: [
        { id: 1, action: lang === "zh" ? "测绘河西古道" : "Map Hexi Trail", title: lang === "zh" ? "测绘甘肃驿站路径" : "Hexi Oasis Path Survey", body: lang === "zh" ? "沿祁连山冰雪消融汇成的河流，勘测绿洲驿站（Post-station）的间距，精确制定每日骆驼商队的水源补给步长。" : "Tracing meltwater rivers flowing from Qilian mountains, surveying oasis post-station distances to schedule caravan water stops." },
        { id: 2, action: lang === "zh" ? "登计商载底册" : "Tally Caravan Cargo", title: lang === "zh" ? "商载大宗货样清册" : "Field Cargo Weight Registration", body: lang === "zh" ? "清点货架上捆扎的生丝、蜀锦、和田玉料与西亚乳香，在发掘现场的皮纸折页中建立起原产地与重量等级账目。" : "Tallying raw silk bolts, Shu brocades, Hetian jade, and frankincense resins, documenting weights on parchment registers." },
        { id: 3, action: lang === "zh" ? "盖上绿洲备案印" : "Apply Oasis Stamp", title: lang === "zh" ? "行商凭证加盖备案泥印" : "Oasis Official Verification Stamp", body: lang === "zh" ? "物产入库校验完毕，在商队折册（Stele Ledger）文书边缘加盖绿洲执政官的黑色煤焦防伪官印，以通行西域百国。" : "Cargo storage approved. Affixing the oasis governor's charcoal coal-seal on ledger edges to secure safe passage through the western kingdoms." }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "丝绸之路微观印记 矩阵" : "Silk Road Sectors Matrix",
      beats: [
        { id: 1, action: lang === "zh" ? "河西走廊大驿道" : "Hexi Corridor Sector", title: lang === "zh" ? "河西走廊绿洲咽喉" : "Hexi Oasis Corridor Sector", body: lang === "zh" ? "东起长安，西至玉门关。夹于祁连山与巴丹吉林沙漠之间，是商旅、僧侣和使节进入西域最狭长而安全的绿洲走廊。" : "From Chang'an to Yumen Pass. Nestled between the Qilian peaks and northern dunes, this serves as the safest oasis canal." },
        { id: 2, action: lang === "zh" ? "葱岭雪山隘口" : "Pamir Passes Sector", title: lang === "zh" ? "葱岭高原冰雪隘口" : "Pamir Mountains Gorge Pass", body: lang === "zh" ? "海拔超越数千米。商队在此必须卸下部分辎重，冒着高山缺氧和暴风雪的威胁，手手相传翻越坚冰，前往波斯边界。" : "Elevations exceeding thousands of meters. Caravans shed heavy cargo to endure thin air and blizzards, scaling ice to reach Persia." },
        { id: 3, action: lang === "zh" ? "地中海终点海港" : "Levant Terminuses", title: lang === "zh" ? "地中海东岸终点海港" : "Levantine Coast Port Terminus", body: lang === "zh" ? "安条克、提尔或亚历山大。丝绸在此被拆解、重新染色，登上罗马平底商船销往帝国的每个行省，换回黄金与叙利亚玻璃。" : "Antioch or Tyre. Silks were unraveled, re-dyed, and loaded onto Roman cogs to ship across provinces, traded for Syrian glassware." }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "丝绸之路微观印记 汇总" : "Oasis Commerce Ledger",
      beats: [
        { id: 1, action: lang === "zh" ? "调取贸易总清册" : "Load Ledger Sheets", title: lang === "zh" ? "绿洲大宗货品交换清单" : "Oasis Cargo Exchange Registry", body: lang === "zh" ? "商货统筹！汇集包括生丝疋数、琉璃刻槽深度、香料重量以及西域诸国兑换辅币成色在内的跨国大宗物产账册。" : "Trade orchestration! Compiling raw silk bolt counts, glass carving depth grades, frankincense weights, and currency purity indexes." },
        { id: 2, action: lang === "zh" ? "测算物产落差" : "Tally Value Diffs", title: lang === "zh" ? "中西物产进出互市差额" : "Symmetric Trade Value Offset", body: lang === "zh" ? "剔除途中损耗和土匪抢劫偏差噪声，精确测算出中原丝绸与西域金币在历次互市周期中的绝对价值红移偏振点。" : "Filtering camel loss and bandit raid variables, measuring value offsets of Eastern silks against Western gold and spices." },
        { id: 3, action: lang === "zh" ? "加盖朱砂通商印" : "Stamp Customs Seal", title: lang === "zh" ? "通商总表加盖朱砂通关大章" : "Vermilion Imperial Customs Seal", body: lang === "zh" ? "通商闭环！各项互市物产和备案无误，在商队总契约文书末端加盖大唐都护府的红色朱砂御准通关大钢印。" : "Trade session complete! Barter properties verified, sealing the imperial ledger with the red vermilion customs stamp of approval." }
      ]
    }
  ]
});

export default function Style05({ scene, beat, language, isThumbnail }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];

  const renderVisual = () => {
    switch (scene) {
      case 1:
        return (
          <div className="relative w-[34cqw] h-[34cqw] flex items-center justify-center animate-paper-peel" key={`s1-${beat}`}>
            {/* Polaroid Photo Frame Structure */}
            <div className="absolute w-[90%] h-[95%] bg-[#fffdf5] border-2 border-[#78350f] rounded-lg shadow-2xl rotate-[-2deg] transition-all duration-700" />
            <div className="absolute w-[88%] h-[92%] bg-white border border-[#78350f]/60 rounded-md shadow-lg rotate-[1deg] transition-all duration-700 flex flex-col justify-between p-[1.5cqw] pb-[4cqw] relative">
              
              {/* Photo Area with Lapis Blue overlay */}
              <div className="relative flex-1 w-full bg-[#1e1b18] border border-[#78350f]/20 rounded overflow-hidden flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Sunset gradient background */}
                  <defs>
                    <linearGradient id="sunset" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ea580c" />
                      <stop offset="60%" stopColor="#ca8a04" />
                      <stop offset="100%" stopColor="#fffbeb" />
                    </linearGradient>
                  </defs>
                  <rect width="100" height="100" fill="url(#sunset)" />
                  
                  {/* Dunes Silhouette */}
                  <path d="M 0,80 Q 30,65 60,82 T 100,75 L 100,100 L 0,100 Z" fill="#78350f" opacity="0.9" />
                  <path d="M 0,90 Q 40,75 80,95 T 100,85 L 100,100 L 0,100 Z" fill="#451a03" />
                  
                  {/* Camel Caravan Silhouette walking on dunes */}
                  {beat >= 1 && (
                    <g className="transition-all duration-1000 animate-pulse">
                      {/* Camel 1 */}
                      <path d="M 25,72 Q 27,62 30,72 L 32,74 L 28,74 Z M 30,72 L 33,70 L 31,68" fill="#451a03" stroke="#451a03" strokeWidth="1" />
                      {/* Camel 2 */}
                      <path d="M 40,77 Q 42,68 45,77 L 47,79 L 43,79 Z M 45,77 L 48,75 L 46,73" fill="#451a03" stroke="#451a03" strokeWidth="1" />
                      {/* Camel 3 */}
                      <path d="M 55,83 Q 57,75 60,83 L 62,85 L 58,85 Z M 60,83 L 63,81 L 61,79" fill="#451a03" stroke="#451a03" strokeWidth="1" />
                      {/* Caravan connection rope */}
                      <path d="M 30,74 Q 35,78 40,79" fill="none" stroke="#ca8a04" strokeWidth="0.5" />
                      <path d="M 45,79 Q 50,84 55,85" fill="none" stroke="#ca8a04" strokeWidth="0.5" />
                    </g>
                  )}

                  {/* Solitary Sun */}
                  <circle cx="80" cy="30" r="8" fill="#fef08a" className="animate-pulse" />
                </svg>
              </div>

              {/* Caption area in polaroid frame */}
              <div className="mt-3 text-center font-serif text-[1.3cqw] font-bold text-[#78350f]">
                {language === "zh" ? "敦煌莫高窟 · 1907" : "DUNHUANG CAVES · 1907"}
              </div>

              {/* Hand-drawn red customs seal */}
              <div className={`absolute bottom-3 right-4 bg-red-100/80 border-2 border-dashed border-red-700/60 text-red-800 font-serif text-[1.1cqw] px-2.5 py-0.5 rounded rotate-[-12deg] font-black tracking-widest transition-all duration-1000 ${
                beat >= 2 ? "opacity-100 scale-105" : "opacity-0 scale-75"
              }`}>
                {language === "zh" ? "安西都护府" : "IMPERIAL.CUSTOMS"}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="relative w-full max-w-[42cqw] grid grid-cols-2 gap-[3cqw] items-center animate-rotate-in font-serif" key={`s2-${beat}`}>
            {/* Left Box: Silk weave profile */}
            <div className={`bg-white border-2 border-[#78350f]/20 p-[2cqw] rounded-xl shadow-lg flex flex-col gap-2 relative min-h-[28cqh] ${beat >= 0 ? "opacity-100 scale-100 border-[#78350f]/30" : "opacity-30 scale-95"}`}>
              <div className="flex items-center gap-2 border-b border-[#78350f]/10 pb-1.5">
                <Tag className="w-4 h-4 text-[#ca8a04]" />
                <span className="font-serif text-[1.1cqw] text-[#78350f] font-bold">SILK WEAVE</span>
              </div>
              <svg className="w-[10cqw] h-[10cqw]" viewBox="0 0 100 100">
                {/* Diagonal weaving lines */}
                <line x1="10" y1="90" x2="90" y2="10" stroke="#78350f" strokeWidth="2.5" />
                <line x1="25" y1="90" x2="90" y2="25" stroke="#78350f" strokeWidth="2.5" />
                <line x1="10" y1="75" x2="75" y2="10" stroke="#78350f" strokeWidth="2.5" />
                <line x1="10" y1="10" x2="90" y2="90" stroke="#ca8a04" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x="50" y="85" fill="#78350f" className="text-[7px] font-mono text-center">45-DEG SILK WEFT</text>
              </svg>
              <div className="text-center font-sans">
                <span className="font-serif text-[1.1cqw] text-[#451a03] font-black block">{language === "zh" ? "斜纹绢丝横断面" : "DIAGONAL SILK PROFILE"}</span>
                <span className="text-[0.9cqw] text-slate-500">{language === "zh" ? "一等提花生丝微观" : "Grade-A Jacquard Weft"}</span>
              </div>
            </div>

            {/* Right Box: Sasanian glass */}
            <div className={`bg-white border-2 border-[#78350f]/20 p-[2cqw] rounded-xl shadow-lg flex flex-col gap-2 relative min-h-[28cqh] transition-all duration-1000 ${
              beat >= 1 ? "opacity-100 scale-100 border-blue-800/30" : "opacity-10 scale-90"
            }`}>
              <div className="flex items-center gap-2 border-b border-blue-100 pb-1.5">
                <Compass className="w-4 h-4 text-blue-700" />
                <span className="font-serif text-[1.1cqw] text-blue-800 font-bold">GLASSWARE</span>
              </div>
              <svg className="w-[10cqw] h-[10cqw]" viewBox="0 0 100 100">
                {/* Glass cup facets */}
                <ellipse cx="50" cy="30" rx="20" ry="8" fill="none" stroke="blue" strokeWidth="1.5" />
                <path d="M 30,30 C 30,60 38,80 50,80 C 62,80 70,60 70,30" fill="none" stroke="blue" strokeWidth="1.5" />
                <circle cx="50" cy="55" r="4" fill="none" stroke="blue" strokeWidth="1" />
                <circle cx="42" cy="45" r="3" fill="none" stroke="blue" strokeWidth="1" />
                <circle cx="58" cy="45" r="3" fill="none" stroke="blue" strokeWidth="1" />
              </svg>
              <div className="text-center font-sans">
                <span className="font-serif text-[1.1cqw] text-blue-900 font-black block">{language === "zh" ? "萨珊王朝蓝琉璃" : "COBALT GLASS FACETS"}</span>
                <span className="text-[0.9cqw] text-slate-500">{language === "zh" ? "西亚刻槽蓝玻璃" : "Sasanian Blue Goblet"}</span>
              </div>

              {beat >= 2 && (
                <div className="absolute inset-0 bg-red-700/10 flex items-center justify-center rounded-xl backdrop-blur-[0.5px]">
                  <div className="bg-red-800 text-white font-serif text-[1.2cqw] px-3 py-1 border-2 border-white rounded rotate-[-8deg] font-black tracking-widest shadow-xl animate-elastic-pop">
                    {language === "zh" ? "准予通关" : "PASSPORT CLEARED"}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex items-center justify-between w-full max-w-[44cqw] relative animate-slide-up" key={`s3-${beat}`}>
            {/* Stage 1 */}
            <div className={`border-2 border-[#78350f] bg-white p-[1.8cqw] rounded-xl flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md relative overflow-hidden transition-all duration-700 ${beat >= 0 ? "opacity-100 scale-100" : "opacity-20 scale-95"}`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">01</div>
              <div className="w-[3cqw] h-[3cqw] rounded-full bg-slate-50 border border-[#78350f] flex items-center justify-center font-mono text-[#78350f] text-[1.1cqw] font-bold">ROUTE</div>
              <span className="font-serif text-[1cqw] font-black text-[#78350f]">{language === "zh" ? "测绘商路" : "ROUTE MAP"}</span>
            </div>

            {/* Line 1 */}
            <div className={`flex-1 h-0.5 border-t border-dashed transition-all duration-1000 mx-2 ${
              beat >= 1 ? "border-[#78350f]/50 opacity-100" : "border-[#78350f]/10 opacity-20"
            }`} />

            {/* Stage 2 */}
            <div className={`border-2 border-[#78350f] bg-white p-[1.8cqw] rounded-xl flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md relative overflow-hidden transition-all duration-700 ${
              beat >= 1 ? "opacity-100 scale-100" : "opacity-20 scale-95"
            }`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">02</div>
              <div className="w-[3cqw] h-[3cqw] rounded-full bg-slate-50 border border-[#78350f] flex items-center justify-center font-mono text-[#78350f] text-[1.1cqw] font-bold">LOG</div>
              <span className="font-serif text-[1cqw] font-black text-[#78350f]">{language === "zh" ? "登录货底" : "CARGO LOG"}</span>
            </div>

            {/* Line 2 */}
            <div className={`flex-1 h-0.5 border-t border-dashed transition-all duration-1000 mx-2 ${
              beat >= 2 ? "border-[#78350f]/50 opacity-100" : "border-[#78350f]/10 opacity-20"
            }`} />

            {/* Stage 3 */}
            <div className={`border-2 border-red-700/30 bg-red-50 p-[1.8cqw] rounded-xl flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md relative overflow-hidden transition-all duration-700 ${
              beat >= 2 ? "opacity-100 scale-100 border-red-700/40" : "opacity-20 scale-95"
            }`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">03</div>
              <div className="w-[3cqw] h-[3cqw] rounded-full bg-red-100 border border-red-700 flex items-center justify-center font-mono text-red-700 text-[1.1cqw] font-bold">SEAL</div>
              <span className="font-serif text-[1cqw] font-black text-[#78350f]">{language === "zh" ? "加印通关" : "OFFICIAL SEAL"}</span>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="grid grid-cols-2 gap-[1.5cqw] w-full max-w-[42cqw] animate-scale-up font-serif" key={`s4-${beat}`}>
            {/* Sector 1 */}
            <div className={`border border-[#78350f]/20 bg-white/70 p-[1.5cqw] rounded-xl relative transition-all duration-500 ${beat >= 0 ? "opacity-100 scale-100 border-[#78350f]/30" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-[#78350f] font-bold">SEC 1</div>
              <span className="font-serif text-[1.1cqw] text-[#451a03] font-black block mb-1">{language === "zh" ? "河西走廊大咽喉" : "HEXI OASIS SECTOR"}</span>
              <p className="text-[0.9cqw] opacity-85 text-[#78350f] font-sans leading-tight">
                {language === "zh" ? "东起长安，西接玉门。夹于祁连冰雪与北漠流沙间，最狭长安全的绿洲走廊。" : "From Chang'an to Yumen. Safest oasis corridor cradled between snow peaks and dunes."}
              </p>
            </div>

            {/* Sector 2 */}
            <div className={`border border-[#78350f]/20 bg-white/70 p-[1.5cqw] rounded-xl relative transition-all duration-500 ${beat >= 1 ? "opacity-100 scale-100 border-[#78350f]/30" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-[#78350f] font-bold">SEC 2</div>
              <span className="font-serif text-[1.1cqw] text-[#451a03] font-black block mb-1">{language === "zh" ? "葱岭雪原冰隘" : "PAMIR ICE gorge"}</span>
              <p className="text-[0.9cqw] opacity-85 text-[#78350f] font-sans leading-tight">
                {language === "zh" ? "海拔超越数千米。极寒缺氧，商队必须在此卸载部分重载，冒雪攀越。" : "Altitudes exceeding 4000m. Blizzards and thin air forced caravans to drop cargo weights."}
              </p>
            </div>

            {/* Sector 3 */}
            <div className={`border border-[#78350f]/20 bg-white/70 p-[1.5cqw] rounded-xl relative transition-all duration-500 ${beat >= 2 ? "opacity-100 scale-100 border-[#78350f]/30" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-[#78350f] font-bold">SEC 3</div>
              <span className="font-serif text-[1.1cqw] text-[#451a03] font-black block mb-1">{language === "zh" ? "地中海东岸终港" : "LEVANT TRADE HUB"}</span>
              <p className="text-[0.9cqw] opacity-85 text-[#78350f] font-sans leading-tight">
                {language === "zh" ? "提尔与亚历山大。丝帛在此重新拆线、二次染色，销往罗马元老豪门。" : "Tyre or Antioch. Raw silks were unraveled and dyed purple for Roman patricians."}
              </p>
            </div>

            {/* Sector 4 */}
            <div className={`border border-[#78350f]/20 bg-amber-50 p-[1.5cqw] rounded-xl relative transition-all duration-500 ${beat >= 2 ? "opacity-100 scale-100 border-[#78350f]/40 bg-[#fffdf5]" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-[#78350f] font-bold">SEC 4</div>
              <span className="font-serif text-[1.1cqw] text-[#451a03] font-black block mb-1">{language === "zh" ? "互市货样清册" : "BARTER COMMODITIES"}</span>
              <p className="text-[0.9cqw] opacity-85 text-[#78350f] font-sans leading-tight">
                {language === "zh" ? "生丝、蜀锦、和田美玉、乳香、胡椒、罗马金币与叙利亚吹制玻璃器具。" : "Raw silk bolts, Shu brocades, Hetian jade, frankincense, pepper, and gold denari."}
              </p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="grid grid-cols-3 gap-[1cqw] w-full max-w-[45cqw] animate-bento-stagger" key={`s5-${beat}`}>
            {/* Bento Block 1: Oasis Section */}
            <div className={`col-span-2 border border-[#78350f]/20 bg-white p-[1.2cqw] rounded-xl min-h-[16cqh] flex flex-col justify-between transition-all duration-500 ${beat >= 0 ? "opacity-100" : "opacity-25"}`}>
              <div className="flex justify-between items-center border-b border-[#78350f]/10 pb-1.5 font-serif">
                <span className="text-[0.95cqw] text-[#78350f] font-black flex items-center gap-1.5">
                  <Map className="w-3.5 h-3.5 text-[#ca8a04]" />
                  {language === "zh" ? "丝路沿途驿站间距测绘" : "OASIS POST-STATION MEASURE"}
                </span>
                <span className="text-[0.8cqw] font-mono text-slate-500">Gansu Path IV</span>
              </div>
              
              <div className="flex flex-col gap-1.5 mt-2">
                <div className="h-[2cqh] bg-amber-50/50 rounded border border-[#78350f]/10 flex items-center justify-between px-2 font-mono text-[0.75cqw] text-slate-600">
                  <span>DUNHUANG → HAMU</span><span>320 Li (Desert)</span>
                </div>
                <div className="h-[2cqh] bg-amber-50/50 rounded border border-[#78350f]/10 flex items-center justify-between px-2 font-mono text-[0.75cqw] text-slate-600">
                  <span>HAMU → TURPAN</span><span>450 Li (Gobi)</span>
                </div>
              </div>
            </div>

            {/* Bento Block 2: Commodities Stats */}
            <div className={`border border-[#78350f]/20 bg-white p-[1.2cqw] rounded-xl min-h-[16cqh] flex flex-col justify-between transition-all duration-500 ${beat >= 1 ? "opacity-100" : "opacity-25"}`}>
              <span className="font-serif text-[0.85cqw] text-[#78350f] font-black block">{language === "zh" ? "通商生丝起运数" : "SILK BOLTS LOGGED"}</span>
              <div className="text-[2.2cqw] font-black text-amber-800 font-mono leading-none my-1">
                420<span className="text-[1cqw] font-normal font-sans opacity-70">b</span>
              </div>
              <span className="text-[0.8cqw] text-slate-500 font-mono block">Grade-A Jacquard Checked</span>
            </div>

            {/* Bento Block 3: Verification Certificate */}
            <div className={`col-span-3 border border-red-700/20 bg-red-50 p-[1cqw] rounded-xl flex items-center justify-between transition-all duration-500 ${beat >= 2 ? "opacity-100 bg-red-100/10" : "opacity-25"}`}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-700 animate-pulse" />
                <span className="font-serif text-[0.9cqw] text-red-800 font-black">
                  {language === "zh" ? "✓ 丝绸之路大通关清册加盖护府朱砂备案印" : "✓ IMPERIAL FRONTIER CUSTOMS CLEARANCE ARCHIVE SEALED"}
                </span>
              </div>
              <span className="font-mono text-[0.8cqw] text-slate-500">SEAL: CUSTOM.WEST.402</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`w-full h-full flex flex-col justify-between p-[5cqw] relative ${meta.colors.bg} ${meta.colors.ink} overflow-hidden select-none`}>
      {/* Top Slide Meta Header */}
      <div className="w-full flex justify-between items-start border-b border-[#78350f]/15 pb-[2cqh] z-10 shrink-0">
        <div className="flex flex-col gap-0.5">
          <span className="font-serif text-[1.1cqw] tracking-wider uppercase text-amber-800 font-black">
            {meta.theme}
          </span>
          <span className="text-[1cqw] text-slate-500 font-mono tracking-tight uppercase">
            {meta.name} • {currentScene.title}
          </span>
        </div>
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-[#78350f]/15 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
          <span className="font-mono text-[0.9cqw] text-amber-900 font-bold uppercase">{meta.tier}-TIER HISTORICAL</span>
        </div>
      </div>

      {/* Central Split Layout Panel */}
      <div className="flex-1 w-full grid grid-cols-12 gap-[4cqw] items-center my-[3cqh] z-10 overflow-hidden">
        {/* Left Column: Semantic Copy Content Block */}
        <div className="col-span-6 flex flex-col gap-[2cqh] text-left pr-[2cqw] justify-center min-h-[35cqh]">
          <h1 className="text-[3.8cqw] leading-[1.1] font-black tracking-tight font-serif text-[#451a03] animate-slide-right" key={`title-${scene}-${beat}`}>
            {currentBeat.title}
          </h1>
          <p className="text-[1.5cqw] leading-[1.5] text-slate-700 font-sans mt-[1cqh] animate-crossfade" key={`body-${scene}-${beat}`}>
            {currentBeat.body}
          </p>
        </div>

        {/* Right Column: Creative Visual Vector Canvas */}
        <div className="col-span-6 flex items-center justify-center min-h-[40cqh]">
          {renderVisual()}
        </div>
      </div>

      {/* Bottom Technical Progress Ledger Bar */}
      <div className="w-full flex justify-between items-center border-t border-[#78350f]/15 pt-[2cqh] z-10 shrink-0">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.95cqw] text-slate-500 font-bold uppercase">{language === "zh" ? "实时操作:" : "BEAT ACTION:"}</span>
          <span className="font-mono text-[1cqw] bg-amber-50 text-amber-800 border border-amber-900/20 px-3 py-1 rounded-full font-black animate-pulse" key={`action-${scene}-${beat}`}>
            {currentBeat.action}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[0.9cqw] text-slate-500 font-bold uppercase">
            {language === "zh" ? `场景 ${scene} / 5` : `SCENE ${scene} / 5`}
          </span>
        </div>
      </div>
    </div>
  );
}
