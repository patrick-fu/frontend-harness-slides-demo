import React from "react";
import { 
  Compass, Landmark, MessageSquare, Award, CheckCircle, Scale, BarChart, Users
} from "lucide-react";

export const getMetadata = (lang) => ({
  id: "03",
  tier: "A",
  name: lang === "zh" ? "雅典民主制辩难" : "Athenian Agora Debates",
  theme: lang === "zh" ? "雅典民主与政治哲学" : "Classical Greek Philosophy",
  densityLabel: lang === "zh" ? "学术典雅" : "Academic Elegant",
  colors: { bg: "bg-[#f8fafc]", ink: "text-slate-900", panel: "border-slate-200" },
  typography: { header: "font-serif", body: "font-sans" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "雅典民主制辩难 绪论" : "Introduction to Athenian Agora",
      beats: [
        { id: 1, action: lang === "zh" ? "竖立多立克柱" : "Erect Doric Column", title: lang === "zh" ? "阿果拉广场与哲学争鸣" : "The Heart of Athenian Agora", body: lang === "zh" ? "在雅典阿果拉广场的中央柱廊下，公民、辩士与哲学家汇聚于此，通过公开辩论与理性审视，共同奠定了西方政治哲学的基石。" : "Under the Stoas of the Athenian Agora, citizens and philosophers assemble, forging the foundations of political philosophy through public debate." },
        { id: 2, action: lang === "zh" ? "召集公民大会" : "Convene Assembly", title: lang === "zh" ? "普尼克斯山的民主提案" : "The Assembly at Pnyx Hill", body: lang === "zh" ? "公民大会在普尼克斯山正式召开。在这里，每位雅典公民都拥有平等的发言权，通过演说、质询与逻辑博弈，决定城邦的生死与法度。" : "The Ekklesia convenes on Pnyx Hill. Here, every Athenian citizen possesses equal speech, deciding state matters through logic and rhetoric." },
        { id: 3, action: lang === "zh" ? "提出核心辩难" : "Raise Core Thesis", title: lang === "zh" ? "苏格拉底式的正义辩难" : "Socratic Dialogue & Justice", body: lang === "zh" ? "苏格拉底漫步于人群中，用连环追问的方式解构关于“正义”与“德行”的世俗偏见，启发公民去审视那些未经验证的城邦假定。" : "Socrates walks among the crowd, deconstructing conventional dogmas on 'justice' via relentless questioning, urging citizens to examine unverified assumptions." }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "雅典民主制辩难 解析" : "Symmetric Thesis-Antithesis",
      beats: [
        { id: 1, action: lang === "zh" ? "确立古典假说" : "Establish Thesis", title: lang === "zh" ? "哲人治国的理想国蓝图" : "Socrates' Philosopher-King Thesis", body: lang === "zh" ? "正义的城邦应当由洞察真理真知的“哲人王”统治。平民的盲目与激进容易导致政体退化，唯有理性阶层才能维持城邦的秩序与神圣和谐。" : "A just city must be ruled by 'Philosopher-Kings' who behold absolute truth. Populist impulse yields decay; only reason sustains divine order." },
        { id: 2, action: lang === "zh" ? "激发大众反驳" : "Arouse Antithesis", title: lang === "zh" ? "演说家对大众主权的申辩" : "The Demagogue's Agora Counter-Speech", body: lang === "zh" ? "城邦非哲人的私产，而是全体自由公民的共同体。大众的智慧在集体辩论中得到互补，唯有法律之下的广泛自治，才是自由的终极屏障。" : "The polis is no private asset of philosophers, but a shared community of free citizens. Collective wisdom balances local flaws under law." },
        { id: 3, action: lang === "zh" ? "达成理性共识" : "Settle Argument", title: lang === "zh" ? "对立意见的修辞学整合" : "Rhetorical Consensus Synthesis", body: lang === "zh" ? "通过逻各斯（Logos）的碰撞，双方在广场柱廊达成理性共识。真理不在任何一方的手中，而是在永无止境的思辨与对话中缓缓显现。" : "Through the collision of Logos, both sides forge a synthesis under the colonnade. Truth resides not in dogma, but in endless inquiry." }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "雅典民主制辩难 演进" : "Democratic Legislative Process",
      beats: [
        { id: 1, action: lang === "zh" ? "宣读法案草案" : "Read Draft Decree", title: lang === "zh" ? "五百人会议提案审查" : "Council of 500 Bill Selection", body: lang === "zh" ? "由抽签产生的五百人议事会（Boule）对市民提案进行初步审查，筛选出合格的法案提纲，准备提交给全体公民大会进行公开辩论。" : "The Council of 500 (Boule), selected by lot, screens citizen proposals, preparing structured bills for open debate in the Assembly." },
        { id: 2, action: lang === "zh" ? "开启广场演说" : "Start Rostrum Speech", title: lang === "zh" ? "讲坛之上的修辞角逐" : "The Battle at the Bema Rostrum", body: lang === "zh" ? "辩论双方依次登上阿果拉广场中央的石质讲坛（Bema），运用精湛的修辞学与严密的逻辑，争取现场数千名公民的赞同与喝彩。" : "Orators scale the stone rostrum (Bema), utilizing pristine rhetoric and strict syllogism to sway thousands of voting citizens." },
        { id: 3, action: lang === "zh" ? "投掷陶片表决" : "Cast Shell Ballots", title: lang === "zh" ? "陶片放逐与民主公决" : "Ostracism & Democratic Ballot", body: lang === "zh" ? "公民们在破碎的陶片上刻下危害民主的野心家姓名。当投票达到绝对多数时，该政客将被和平放逐十载，以此剪除城邦僭主的萌芽。" : "Citizens scratch ambitious demagogues' names onto pot fragments (ostraka). A critical majority vote peacefully exiles the threat for ten years." }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "雅典民主制辩难 矩阵" : "Pillars of Democracy Matrix",
      beats: [
        { id: 1, action: lang === "zh" ? "法律面前人人平等" : "Isonomia Principle", title: lang === "zh" ? "法律平等权与平民基石" : "Isonomia: Equality of Law", body: lang === "zh" ? "确立全体自由公民在法律面前的绝对平等。无论是贵族还是手工业者，都拥有平等的诉讼权、表决权以及担任公职的资格。" : "Establishing absolute legal equality. Nobles and cobblers alike command equal rights to litigate, vote, and hold lottery offices." },
        { id: 2, action: lang === "zh" ? "言论自由与担当" : "Parrhesia Rule", title: lang === "zh" ? "发言自由权与政治担当" : "Parrhesia: Freedom of Public Speech", body: lang === "zh" ? "鼓励公民在大会上直言不讳、直面权贵。这不仅是一项不可剥夺的民主权利，更是衡量公民对城邦忠诚与道德担当的终极尺度。" : "The duty of frank speech. Citizens are urged to speak absolute truths directly to power, serving as the benchmark of moral civic virtue." },
        { id: 3, action: lang === "zh" ? "民主放逐与防僭" : "Ostracism Safe", title: lang === "zh" ? "陶片放逐法与权力约束" : "Ostracism: Preserving the Polis", body: lang === "zh" ? "针对权力过大、可能颠覆民主政体的个人进行预防性放逐。这套无血腥的弹性防御机制，有效维护了城邦内部的势力均衡与制度稳定。" : "A bloodless defensive shield. Exiling dominant elites to prevent tyranny, preserving institutional equilibrium and civic stability." }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "雅典民主制辩难 汇总" : "Agora Legislative Telemetry",
      beats: [
        { id: 1, action: lang === "zh" ? "审查辩难账册" : "Load Debate Stats", title: lang === "zh" ? "辩难发言时间统计总册" : "Legislative Agora Tally Ledger", body: lang === "zh" ? "数据统合！精确记录阿果拉广场各派演说家在讲坛上的发言时间配额、修辞逻辑漏洞率以及现场公民的喝彩声贝级谱图。" : "Data synthesis! Recording orator rostrum speaking quotas, rhetorical logical fallacy rates, and physical applause decibels into a ledger." },
        { id: 2, action: lang === "zh" ? "统计支持率落差" : "Tally Ballot Diffs", title: lang === "zh" ? "公民赞成票差值与红移" : "Ekklesia Ballots Vote Margin", body: lang === "zh" ? "精确统计Pnyx山现场赞成与反对票的绝对落差，剔除诡辩术的情绪噪声干扰，解算提案在理性维度的可信度红移值。" : "Measuring the voting margin between affirmative and negative ballots, filtering sophistry emotional spikes, mapping proposal validity." },
        { id: 3, action: lang === "zh" ? "签发城邦法案" : "Seal Polis Decree", title: lang === "zh" ? "雅典城邦公民大会法案钢印" : "State Decree Seal & Certification", body: lang === "zh" ? "立法成功！各项审议和辩难指标通过，在城邦法律石碑（Stele）上刻下法案全文，加盖雅典娜神庙黄金钢印备案。" : "Legislation enacted! The decree is etched onto a stone stela and validated with the Athenian Golden Seal for permanent publication." }
      ]
    }
  ]
});

export default function Style03({ scene, beat, language, isThumbnail }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];

  const renderVisual = () => {
    switch (scene) {
      case 1:
        return (
          <div className="relative w-[34cqw] h-[34cqw] flex items-center justify-center animate-scale-up" key={`s1-${beat}`}>
            {/* Greek Temple Column Silhouette SVG */}
            <div className="absolute w-[90%] h-[90%] bg-white/80 border-2 border-slate-300 rounded-2xl shadow-xl flex flex-col justify-between p-[2cqw] relative">
              
              {/* Classical architectural layout pattern */}
              <div className="absolute inset-x-0 top-0 h-[2cqh] bg-gradient-to-b from-slate-200 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-[2cqh] bg-gradient-to-t from-slate-200 to-transparent pointer-events-none" />

              <div className="relative flex-1 flex items-center justify-center py-2 z-10">
                <svg className="w-[18cqw] h-[18cqw]" viewBox="0 0 100 100">
                  {/* Doric Column base & top */}
                  <rect x="25" y="80" width="50" height="8" fill="none" stroke="#1e293b" strokeWidth="2.5" />
                  <rect x="28" y="75" width="44" height="5" fill="none" stroke="#1e293b" strokeWidth="2" />
                  <rect x="30" y="15" width="40" height="8" fill="none" stroke="#1e293b" strokeWidth="2.5" />
                  
                  {/* Doric Column shafts with elegant vertical ridges */}
                  <line x1="35" y1="23" x2="35" y2="75" stroke="#1e293b" strokeWidth="1.8" />
                  <line x1="42" y1="23" x2="42" y2="75" stroke="#1e293b" strokeWidth="1.8" />
                  <line x1="50" y1="23" x2="50" y2="75" stroke="#1e293b" strokeWidth="2" />
                  <line x1="58" y1="23" x2="58" y2="75" stroke="#1e293b" strokeWidth="1.8" />
                  <line x1="65" y1="23" x2="65" y2="75" stroke="#1e293b" strokeWidth="1.8" />
                  
                  {/* Hellenic Geometric patterns */}
                  {beat >= 1 && (
                    <path d="M 33,18 L 67,18 M 35,77 L 65,77" fill="none" stroke="#1d4ed8" strokeWidth="1.5" className="animate-pulse" />
                  )}

                  {/* Socratic Dialectic Question Mark */}
                  {beat >= 2 && (
                    <circle cx="50" cy="46" r="14" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeDasharray="3 3" className="animate-spin-slow" />
                  )}
                </svg>
              </div>

              <div className={`absolute bottom-3 right-4 bg-blue-50 border border-blue-700/30 text-blue-800 font-serif text-[1cqw] px-2.5 py-0.5 rounded font-black tracking-widest transition-all duration-1000 ${
                beat >= 2 ? "opacity-100 scale-105" : "opacity-0 scale-75"
              }`}>
                {language === "zh" ? "逻各斯判决" : "LOGOS SYNTEX"}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="relative w-full max-w-[42cqw] grid grid-cols-2 gap-[3cqw] items-center animate-rotate-in font-serif" key={`s2-${beat}`}>
            {/* Left Box: Classical Philosopher Thesis */}
            <div className={`bg-white border-2 border-slate-200 p-[2cqw] rounded-2xl shadow-lg flex flex-col gap-2 relative min-h-[28cqh] ${beat >= 0 ? "opacity-100 scale-100 border-blue-500/20" : "opacity-30 scale-95"}`}>
              <div className="flex items-center gap-2 border-b border-slate-100 pb-1.5 font-sans">
                <Landmark className="w-4 h-4 text-blue-700" />
                <span className="font-serif text-[1cqw] text-blue-800 font-bold">THESIS</span>
              </div>
              <p className="font-serif italic text-[1.15cqw] leading-relaxed text-slate-800">
                {language === "zh" ? "“智慧属于神圣哲王，非乌合之众。”" : "“Wisdom resides with Divine Kings, not the masses.”"}
              </p>
              <span className="font-sans text-[0.85cqw] text-slate-500 block text-right mt-auto">- Socrates / Plato</span>
            </div>

            {/* Right Box: Democratic Agora Antithesis */}
            <div className={`bg-blue-50/50 border-2 border-slate-200 p-[2cqw] rounded-2xl shadow-lg flex flex-col gap-2 relative min-h-[28cqh] transition-all duration-1000 ${
              beat >= 1 ? "opacity-100 scale-100 border-blue-700/30" : "opacity-10 scale-90"
            }`}>
              <div className="flex items-center gap-2 border-b border-blue-100 pb-1.5 font-sans">
                <MessageSquare className="w-4 h-4 text-blue-700" />
                <span className="font-serif text-[1cqw] text-blue-800 font-bold">ANTITHESIS</span>
              </div>
              <p className="font-serif italic text-[1.15cqw] leading-relaxed text-blue-950">
                {language === "zh" ? "“主权归于城邦大众，法律即是屏障。”" : "“Sovereignty belongs to the polis, under law.”"}
              </p>
              <span className="font-sans text-[0.85cqw] text-slate-500 block text-right mt-auto">- Agora Orators / Boule</span>

              {beat >= 2 && (
                <div className="absolute inset-0 bg-blue-700/10 flex items-center justify-center rounded-2xl backdrop-blur-[0.5px]">
                  <div className="bg-blue-800 text-white font-serif text-[1.2cqw] px-3 py-1 border-2 border-white rounded rotate-[-8deg] font-black tracking-widest shadow-xl animate-elastic-pop">
                    {language === "zh" ? "达成辩难" : "SYNTHESIS LOCKED"}
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
            <div className={`border-2 border-slate-200 bg-white p-[1.8cqw] rounded-xl flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md relative overflow-hidden transition-all duration-700 ${beat >= 0 ? "opacity-100 scale-100" : "opacity-20 scale-95"}`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">01</div>
              <div className="w-[3cqw] h-[3cqw] rounded-full bg-slate-50 border border-slate-300 flex items-center justify-center font-mono text-slate-800 text-[1.1cqw] font-bold">BOULE</div>
              <span className="font-serif text-[1cqw] font-black text-slate-900">{language === "zh" ? "五百人议案" : "COUNCIL SELECTION"}</span>
            </div>

            {/* Line 1 */}
            <div className={`flex-1 h-0.5 border-t border-dashed transition-all duration-1000 mx-2 ${
              beat >= 1 ? "border-blue-700/50 opacity-100" : "border-slate-200 opacity-20"
            }`} />

            {/* Stage 2 */}
            <div className={`border-2 border-slate-200 bg-white p-[1.8cqw] rounded-xl flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md relative overflow-hidden transition-all duration-700 ${
              beat >= 1 ? "opacity-100 scale-100" : "opacity-20 scale-95"
            }`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">02</div>
              <div className="w-[3cqw] h-[3cqw] rounded-full bg-slate-50 border border-slate-300 flex items-center justify-center font-mono text-slate-800 text-[1.1cqw] font-bold">BEMA</div>
              <span className="font-serif text-[1cqw] font-black text-slate-900">{language === "zh" ? "讲坛演说" : "ROSTRUM DEBATE"}</span>
            </div>

            {/* Line 2 */}
            <div className={`flex-1 h-0.5 border-t border-dashed transition-all duration-1000 mx-2 ${
              beat >= 2 ? "border-blue-700/50 opacity-100" : "border-slate-200 opacity-20"
            }`} />

            {/* Stage 3 */}
            <div className={`border-2 border-blue-200 bg-blue-50 p-[1.8cqw] rounded-xl flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md relative overflow-hidden transition-all duration-700 ${
              beat >= 2 ? "opacity-100 scale-100 border-blue-700/30" : "opacity-20 scale-95"
            }`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">03</div>
              <div className="w-[3cqw] h-[3cqw] rounded-full bg-blue-100 border border-blue-700 flex items-center justify-center font-mono text-blue-700 text-[1.1cqw] font-bold">BALLOT</div>
              <span className="font-serif text-[1cqw] font-black text-slate-900">{language === "zh" ? "陶片决议" : "OSTRACISM VOTE"}</span>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="grid grid-cols-2 gap-[1.5cqw] w-full max-w-[42cqw] animate-scale-up font-serif" key={`s4-${beat}`}>
            {/* Pillar 1 */}
            <div className={`border border-slate-200 bg-white p-[1.5cqw] rounded-xl relative transition-all duration-500 ${beat >= 0 ? "opacity-100 scale-100 border-blue-600/10" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-blue-800 font-bold">PILLAR 1</div>
              <span className="font-serif text-[1.1cqw] text-slate-900 font-black block mb-1">{language === "zh" ? "等和权 (Isonomia)" : "ISONOMIA EQUALITY"}</span>
              <p className="text-[0.9cqw] opacity-85 text-slate-600 font-sans leading-tight">
                {language === "zh" ? "确立所有雅典自由公民在大会法律框架前的绝对政治地位与诉讼平等权。" : "Absolute political and legal equality of all free citizens before the Ekklesia."}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className={`border border-slate-200 bg-white p-[1.5cqw] rounded-xl relative transition-all duration-500 ${beat >= 1 ? "opacity-100 scale-100 border-blue-600/10" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-blue-800 font-bold">PILLAR 2</div>
              <span className="font-serif text-[1.1cqw] text-slate-900 font-black block mb-1">{language === "zh" ? "直言权 (Parrhesia)" : "PARRHESIA FRANKNESS"}</span>
              <p className="text-[0.9cqw] opacity-85 text-slate-600 font-sans leading-tight">
                {language === "zh" ? "要求公民公开真诚地说真话，即使直面贵族，也是行使公民德行的终极体现。" : "The moral duty and right of free citizens to speak absolute truth directly to power."}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className={`border border-slate-200 bg-white p-[1.5cqw] rounded-xl relative transition-all duration-500 ${beat >= 2 ? "opacity-100 scale-100 border-blue-600/10" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-blue-800 font-bold">PILLAR 3</div>
              <span className="font-serif text-[1.1cqw] text-slate-900 font-black block mb-1">{language === "zh" ? "反僭法 (Ostracism)" : "OSTRACISM GUARD"}</span>
              <p className="text-[0.9cqw] opacity-85 text-slate-600 font-sans leading-tight">
                {language === "zh" ? "通过投票流放企图颠覆民主结构的豪强寡头，无血腥地维护城邦势力均衡。" : "Symmetric voter-led prevention of autocracy by bloodless exile of dangerous demagogues."}
              </p>
            </div>

            {/* Pillar 4 */}
            <div className={`border border-blue-100 bg-blue-50/50 p-[1.5cqw] rounded-xl relative transition-all duration-500 ${beat >= 2 ? "opacity-100 scale-100 border-blue-700/20" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-blue-800 font-bold">PILLAR 4</div>
              <span className="font-serif text-[1.1cqw] text-slate-900 font-black block mb-1">{language === "zh" ? "德行共识 (Virtue)" : "DEMOCRATIC COHESION"}</span>
              <p className="text-[0.9cqw] opacity-85 text-slate-600 font-sans leading-tight">
                {language === "zh" ? "超越诡辩术（Sophistry）之上的理性法治，共同追求良善生活与城邦秩序。" : "Sustaining a community oriented towards good life under rational, collective rule."}
              </p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="grid grid-cols-3 gap-[1cqw] w-full max-w-[45cqw] animate-bento-stagger" key={`s5-${beat}`}>
            {/* Bento Block 1: Legislative Progress */}
            <div className={`col-span-2 border border-slate-200 bg-white p-[1.2cqw] rounded-xl min-h-[16cqh] flex flex-col justify-between transition-all duration-500 ${beat >= 0 ? "opacity-100" : "opacity-25"}`}>
              <div className="flex justify-between items-center border-b border-slate-100 pb-1.5 font-serif">
                <span className="text-[0.95cqw] text-slate-900 font-black flex items-center gap-1.5">
                  <Landmark className="w-3.5 h-3.5" />
                  {language === "zh" ? "阿果拉讲坛发言遥测" : "PNYX HILL ASSEMBLY TELEMETRY"}
                </span>
                <span className="text-[0.8cqw] font-mono text-slate-500">Boule Session 94</span>
              </div>
              
              <div className="flex flex-col gap-1.5 mt-2 font-mono text-[0.85cqw] text-slate-600">
                <div className="flex justify-between">
                  <span>Platonic Sophist Speak:</span><span className="font-bold text-red-600">140 cqw/min</span>
                </div>
                <div className="flex justify-between">
                  <span>Democrat Logos Argument:</span><span className="font-bold text-emerald-600">92 cqw/min</span>
                </div>
              </div>
            </div>

            {/* Bento Block 2: Ballots Cast */}
            <div className={`border border-slate-200 bg-white p-[1.2cqw] rounded-xl min-h-[16cqh] flex flex-col justify-between transition-all duration-500 ${beat >= 1 ? "opacity-100" : "opacity-25"}`}>
              <span className="font-serif text-[0.85cqw] text-slate-900 font-black block">{language === "zh" ? "赞成提案公民人数" : "AFFIRMATIVE BALLOTS"}</span>
              <div className="text-[2.2cqw] font-black text-blue-800 font-mono leading-none my-1">
                4,280<span className="text-[1cqw] font-normal font-sans opacity-70">v</span>
              </div>
              <span className="text-[0.8cqw] text-slate-500 font-mono block">62% Absolute Majority</span>
            </div>

            {/* Bento Block 3: Polis Stele Seal */}
            <div className={`col-span-3 border border-blue-200 bg-blue-50 p-[1cqw] rounded-xl flex items-center justify-between transition-all duration-500 ${beat >= 2 ? "opacity-100 bg-blue-100/10" : "opacity-25"}`}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-700 animate-pulse" />
                <span className="font-serif text-[0.9cqw] text-blue-800 font-black">
                  {language === "zh" ? "✓ 雅典大会石碑法案加盖雅典娜神庙印章备案" : "✓ ATHENIAN STATE LEGISLATIVE STELE RECORD SEALED"}
                </span>
              </div>
              <span className="font-mono text-[0.8cqw] text-slate-500">STELE: ATH.LAW.402</span>
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
      <div className="w-full flex justify-between items-start border-b border-slate-200 pb-[2cqh] z-10 shrink-0">
        <div className="flex flex-col gap-0.5">
          <span className="font-serif text-[1.1cqw] tracking-wider uppercase text-blue-800 font-black">
            {meta.theme}
          </span>
          <span className="text-[1cqw] text-slate-500 font-mono tracking-tight uppercase">
            {meta.name} • {currentScene.title}
          </span>
        </div>
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="font-mono text-[0.9cqw] text-blue-900 font-bold uppercase">{meta.tier}-TIER ACADEMIC</span>
        </div>
      </div>

      {/* Central Split Layout Panel */}
      <div className="flex-1 w-full grid grid-cols-12 gap-[4cqw] items-center my-[3cqh] z-10 overflow-hidden">
        {/* Left Column: Semantic Copy Content Block */}
        <div className="col-span-6 flex flex-col gap-[2cqh] text-left pr-[2cqw] justify-center min-h-[35cqh]">
          <h1 className="text-[3.8cqw] leading-[1.1] font-black tracking-tight font-serif text-slate-900 animate-slide-right" key={`title-${scene}-${beat}`}>
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
      <div className="w-full flex justify-between items-center border-t border-slate-200 pt-[2cqh] z-10 shrink-0">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.95cqw] text-slate-500 font-bold uppercase">{language === "zh" ? "实时操作:" : "BEAT ACTION:"}</span>
          <span className="font-mono text-[1cqw] bg-blue-50 text-blue-800 border border-blue-900/20 px-3 py-1 rounded-full font-black animate-pulse" key={`action-${scene}-${beat}`}>
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
