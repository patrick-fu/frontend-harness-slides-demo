import React from "react";
import { 
  Sparkles, MessageSquare, Terminal, EyeOff, BookOpen, Compass, Award, Tag
} from "lucide-react";

export const getMetadata = (lang) => ({
  id: "08",
  tier: "A",
  name: lang === "zh" ? "萨特与加缪的咖啡馆对质" : "Sartre & Camus Dialogue",
  theme: lang === "zh" ? "存在主义与荒诞主义哲学" : "Existentialism vs Absurdism",
  densityLabel: lang === "zh" ? "戏剧黑色" : "Chiaroscuro Dramatic",
  colors: { bg: "bg-[#09090b]", ink: "text-zinc-100", panel: "border-zinc-800" },
  typography: { header: "font-serif italic", body: "font-sans" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "萨特与加缪的咖啡馆对质 绪论" : "Introduction to Sartre & Camus",
      beats: [
        { id: 1, action: lang === "zh" ? "投射咖啡馆聚光灯" : "Cast Spotlight", title: lang === "zh" ? "巴黎咖啡馆的存在主义回音" : "Paris Café & Existential Echoes", body: lang === "zh" ? "在战后巴黎的花神咖啡馆，萨特与加缪在此展开了旷日持久的对话。他们从共同抵抗法西斯的战友，最终因政治理念与对‘历史理性’的审判分道扬镳。" : "At Café de Flore in post-war Paris, Sartre and Camus debated tirelessly. Once brothers-in-arms in the Resistance, they eventually split over political dogma and history." },
        { id: 2, action: lang === "zh" ? "萨特发表存在宣告" : "Sartre Speaks", title: lang === "zh" ? "萨特的存在先于本质" : "Sartre's Existence Precedes Essence", body: lang === "zh" ? "萨特宣称：‘存在先于本质’。人是绝对自由的，没有神圣的设计与宿命，人通过自己的每一次选择来自主定义并铸造自己的本质。" : "Sartre proclaimed: 'Existence precedes essence.' Man is absolutely free; lacking divine design, he must define his own essence through choice." },
        { id: 3, action: lang === "zh" ? "加缪提出荒诞反抗" : "Camus Retorts", title: lang === "zh" ? "加缪的西西弗斯荒诞反抗" : "Camus' Absurd Sisyphus Revolt", body: lang === "zh" ? "加缪反驳：‘荒诞诞生于人类渴望与冷酷世界的对质’。面对推石上山的无望西西弗斯，反抗本身就是幸福，人必须直面荒诞而拒绝自我欺骗。" : "Camus countered: 'The absurd is born of this confrontation.' Facing Sisyphus pushing his rock endlessly, revolt itself is joy; we must live without illusions." }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "萨特与加缪的咖啡馆对质 解析" : "Symmetric Spotlight Duality",
      beats: [
        { id: 1, action: lang === "zh" ? "照亮萨特左席" : "Light Sartre's Desk", title: lang === "zh" ? "萨特：自主选择的沉重负担" : "Sartre: The Heavy Burden of Choice", body: lang === "zh" ? "人注定要承受自由。每一次在虚无面前的选择，都是对全人类责任的背负。无法选择不选择，这便是自由作为‘天刑’的沉重宿命律动。" : "Man is condemned to be free. Every choice before the void is a pledge for all mankind. This is the absolute weight of existential freedom." },
        { id: 2, action: lang === "zh" ? "照亮加缪右席" : "Light Camus' Desk", title: lang === "zh" ? "加缪：清醒反抗的尊严" : "Camus: The Dignity of Lucid Revolt", body: lang === "zh" ? "拒绝用历史宿命论或虚无主义来为暴行开脱。在荒诞的宇宙中，清醒地直视痛苦而不妥协，在推石上山的西西弗斯身上重塑人的尊严。" : "Rejecting historical dogmas that justify cruelty. In an indifferent cosmos, staring at pain without yielding restores human dignity." },
        { id: 3, action: lang === "zh" ? "锁定对立视界" : "Lock Dialectic Boundary", title: lang === "zh" ? "咖啡馆辩论的时空共振" : "Café Dialectic High-Contrast Limit", body: lang === "zh" ? "聚光灯在花神咖啡馆的斑驳桌椅间交叉对置。两种伟大的声音互不妥协，在虚无深渊边缘达成了永恒而璀璨的思辨张力共振。" : "Spotlights cross over café chairs in Floral. Two major voices refuse compromise, establishing a permanent, luminous tension over the abyss." }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "萨特与加缪的咖啡馆对质 演进" : "Existential Debate Progression",
      beats: [
        { id: 1, action: lang === "zh" ? "投射双重聚光灯" : "Project Dual Spotlights", title: lang === "zh" ? "思想舞台的戏剧黑色投射" : "Chiaroscuro Spatial Projecting", body: lang === "zh" ? "在昏暗的巴黎思想舞台上，投下两道高度倾斜且相互交叠的冷光聚光灯束，烘托出战后法兰西知识界剧烈的灵魂分裂。" : "On the dim French intellectual stage, projecting two sharply slanted, overlapping cool spotlight shafts, framing the split of the soul." },
        { id: 2, action: lang === "zh" ? "宣读存在主义宣誓" : "Declare Existence Decree", title: lang === "zh" ? "自由意志与历史审判的冲突" : "Free Will vs History Court Collision", body: lang === "zh" ? "宣读萨特发表在《现代》杂志上的战斗宣言，将个体选择与绝对历史责任紧密铆合，迫使每一位知识分子在阵营前作出决断。" : "Reading Sartre's battle manifesto in 'Les Temps Modernes,' tying individual choice to absolute historical duties, forcing decisions." },
        { id: 3, action: lang === "zh" ? "激发荒诞反叛" : "Trigger Rebel Counter", title: lang === "zh" ? "加缪《反抗者》的绝交回应" : "Camus' 'The Rebel' Defiance Chant", body: lang === "zh" ? "加缪以《反抗者》一书作为不妥协的回应。他坚决否定一切打着历史必然性旗号的集权暴行，宣告两人的伟大友谊正式断绝。" : "Camus delivers his uncompromising retort in 'The Rebel.' Rejecting all totalitarian crueltes under 'history,' cutting their friendship." }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "萨特与加缪的咖啡馆对质 矩阵" : "Existential Pillars Matrix",
      beats: [
        { id: 1, action: lang === "zh" ? "存在先于本质" : "L'existentialisme Metric", title: lang === "zh" ? "存在先于本质的自由核" : "L'existence: The Unbound Will", body: lang === "zh" ? "个体的存活状态是绝对的第一前提。没有任何天生的本质、神学或逻辑框架可以作为推卸自主选择和逃避自由责任的借口。" : "Individual survival serves as the absolute premise. No divine design or system can excuse escaping personal choice and freedom." },
        { id: 2, action: lang === "zh" ? "西西弗斯荒诞" : "L'absurde Metric", title: lang === "zh" ? "西西弗斯荒诞的无尽对立" : "L'absurde: Sisyphus Endure", body: lang === "zh" ? "直面世界无言的沉默与人渴望意义的永恒冲突。推石上山，反抗这一无意义循环的过程本身，就是对命运最轻蔑的高贵胜利。" : "Staring at the clash between human desire and cosmic silence. Pushing the stone, revolting against empty loops, is the final victory." },
        { id: 3, action: lang === "zh" ? "自欺与虚无主义" : "Bad Faith Matrix", title: lang === "zh" ? "自欺状态与历史虚无" : "Bad Faith & Historical Nihilism", body: lang === "zh" ? "批判通过扮演社会角色或顺从历史潮流来逃避自由的行为。将逃避责任视作自欺（Mauvaise Foi），并在清醒的反抗中予以击碎。" : "Condemning individuals escaping freedom under social roles. Treating excuse-making as Bad Faith, smashing it with lucid revolt." }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "萨特与加缪的咖啡馆对质 汇总" : "Existential Comparative Ledger",
      beats: [
        { id: 1, action: lang === "zh" ? "载入思想总清册" : "Load Philosophy Ledger", title: lang === "zh" ? "两大思潮对比测量清单" : "Sartre vs Camus Analytical Ledger", body: lang === "zh" ? "思想集成！汇总并对位包括自主选择负重、荒诞反抗系数、历史理性支持率以及西西弗斯推石动能等在内的哲学对立账册。" : "Intellectual synthesis! Compiling choice-weight loads, absurd revolt ratios, historical reason indices, and Sisyphus kinetic energy." },
        { id: 2, action: lang === "zh" ? "计算反抗值落差" : "Tally Revolt Offsets", title: lang === "zh" ? "存在自由与荒诞反抗度量差" : "Symmetric Philosophical Phase Offset", body: lang === "zh" ? "剔除政治偏见噪声干扰，精确计算出萨特‘参与历史’的主动卷入值与加缪‘反抗历史’的绝对审判值之间的对位相位差点。" : "Subtracting political party bias noise, measuring phase offsets of Sartre's 'history involvement' against Camus' 'history revolt.'" },
        { id: 3, action: lang === "zh" ? "加印花神馆藏大章" : "Stamp Flore Seal", title: lang === "zh" ? "存在主义辩难报告加印盖章" : "Café de Flore Vermilion Philosophical Seal", body: lang === "zh" ? "思辨定案！各项存在与荒诞度量指标审核完备，在哲学总卷章末加盖巴黎花神咖啡馆红泥大章以载入法兰西思想史册。" : "Dialectic finalized! Existential and absurdist properties verified, sealing the final page of the register with the Vermilion Seal of Flore." }
      ]
    }
  ]
});

export default function Style08({ scene, beat, language, isThumbnail, onNavigate }) {
  const meta = getMetadata(language);

  const getSceneBeatIdx = (sId) => {
    if (sId === scene) return beat;
    if (sId < scene) return meta.scenes.find((s) => s.id === sId).beats.length - 1;
    return 0;
  };

  const renderVisual = (sceneId, sceneBeat) => {
    switch (sceneId) {
      case 1:
        return (
          <div className="relative w-[34cqw] h-[34cqw] flex items-center justify-center animate-paper-peel" key={`s1-${sceneBeat}`}>
            <div className="absolute w-[95%] h-[95%] bg-[#0c0c0e] border-2 border-zinc-800 rounded-lg shadow-2xl flex flex-col justify-between p-[1.5cqw] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-[40cqw] h-[40cqw] bg-[radial-gradient(circle_at_top_left,rgba(254,240,138,0.15)_0%,transparent_60%)] pointer-events-none rounded animate-spotlight" />
              <div className="relative flex-1 flex items-center justify-center py-2 z-10 select-none">
                <svg className="w-[18cqw] h-[18cqw]" viewBox="0 0 100 100">
                  <polygon points="10,0 90,0 55,70 45,70" fill="rgba(254,240,138,0.06)" />
                  <ellipse cx="50" cy="70" rx="25" ry="6" fill="#18181b" stroke="white" strokeWidth="1.5" />
                  <rect x="49" y="75" width="2" height="15" fill="white" />
                  <ellipse cx="50" cy="90" rx="12" ry="3" fill="#18181b" stroke="white" strokeWidth="1.5" />
                  {sceneBeat >= 1 && (
                    <g className="transition-all duration-1000 animate-pulse">
                      <rect x="47" y="62" width="6" height="5" fill="white" stroke="black" strokeWidth="1" />
                      <path d="M 53,63 C 56,63 56,66 53,66" fill="none" stroke="white" strokeWidth="0.8" />
                      <path d="M 49,58 Q 50,55 49,52" fill="none" stroke="#fef08a" strokeWidth="0.8" />
                      <path d="M 51,59 Q 52,56 51,53" fill="none" stroke="#fef08a" strokeWidth="0.8" />
                    </g>
                  )}
                  {sceneBeat >= 2 && (
                    <circle cx="25" cy="45" r="8" fill="none" stroke="#fef08a" strokeWidth="1.5" strokeDasharray="3 3" className="animate-spin-slow" />
                  )}
                </svg>
              </div>
              <div className={`absolute bottom-3 right-4 bg-zinc-900 border-2 border-dashed border-red-700/60 text-red-500 font-serif text-[1cqw] px-2.5 py-0.5 rounded rotate-[-8deg] transition-all duration-1000 ${
                sceneBeat >= 2 ? "opacity-100 scale-105 animate-pulse" : "opacity-0 scale-75"
              }`}>
                Café de Flore
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="relative w-full max-w-[42cqw] grid grid-cols-2 gap-[3cqw] items-center animate-rotate-in font-serif" key={`s2-${sceneBeat}`}>
            <div className={`bg-zinc-950 border-2 border-zinc-800 p-[2cqw] rounded-xl shadow-2xl flex flex-col justify-between min-h-[28cqh] relative ${sceneBeat >= 0 ? "opacity-100 scale-100" : "opacity-30 scale-95"}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04)_0%,transparent_70%)] pointer-events-none rounded" />
              <div className="flex items-center gap-2 border-b border-zinc-800 pb-1.5 font-sans">
                <span className="text-zinc-400 font-black text-[1cqw]">SARTRE.EXIST</span>
              </div>
              <p className="font-serif italic text-[1.15cqw] leading-relaxed text-zinc-100">
                {language === "zh" ? "“存在先于本质。人注定要自由。”" : "“Existence precedes essence. Man is condemned to be free.”"}
              </p>
              <span className="font-sans text-[0.85cqw] text-zinc-500 block text-right mt-auto">- L'existentialisme est un humanisme</span>
            </div>
            <div className={`bg-zinc-950 border-2 border-zinc-800 p-[2cqw] rounded-xl shadow-2xl flex flex-col justify-between min-h-[28cqh] relative transition-all duration-1000 ${
              sceneBeat >= 1 ? "opacity-100 scale-100 border-zinc-700/60" : "opacity-10 scale-90"
            }`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(254,240,138,0.04)_0%,transparent_70%)] pointer-events-none rounded" />
              <div className="flex items-center gap-2 border-b border-zinc-800 pb-1.5 font-sans">
                <span className="text-[#fef08a] font-black text-[1cqw]">CAMUS.REBEL</span>
              </div>
              <p className="font-serif italic text-[1.15cqw] leading-relaxed text-[#fef08a]">
                {language === "zh" ? "“我反抗，故我们在。直面西西弗斯的巨石。”" : "“I rebel, therefore we exist. Confront Sisyphus' boulder.”"}
              </p>
              <span className="font-sans text-[0.85cqw] text-zinc-500 block text-right mt-auto">- L'Homme révolté</span>
              {sceneBeat >= 2 && (
                <div className="absolute inset-0 bg-red-700/10 flex items-center justify-center rounded-xl backdrop-blur-[0.5px]">
                  <div className="bg-red-800 text-white font-serif text-[1.2cqw] px-3 py-1 border-2 border-white rounded rotate-[-8deg] font-black tracking-widest shadow-xl animate-elastic-pop">
                    {language === "zh" ? "对质极点" : "CONFRONT_OK"}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex items-center justify-between w-full max-w-[44cqw] relative animate-slide-up animate-pipeline-pulse" key={`s3-${sceneBeat}`}>
            <div className={`border-2 border-zinc-800 bg-zinc-950 p-[1.8cqw] rounded flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md relative overflow-hidden transition-all duration-700 ${sceneBeat >= 0 ? "opacity-100 scale-100" : "opacity-20 scale-95"}`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">01</div>
              <div className="w-[3cqw] h-[3cqw] rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono text-zinc-400 text-[1.1cqw] font-bold">SPOT</div>
              <span className="font-serif text-[1cqw] font-black text-zinc-100">{language === "zh" ? "对质聚焦" : "SPOTLIGHT"}</span>
            </div>
            <div className={`flex-1 h-0.5 border-t border-dashed transition-all duration-1000 mx-2 ${
              sceneBeat >= 1 ? "border-zinc-700/50 opacity-100" : "border-zinc-800 opacity-20"
            }`} />
            <div className={`border-2 border-zinc-800 bg-zinc-950 p-[1.8cqw] rounded flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md relative overflow-hidden transition-all duration-700 ${
              sceneBeat >= 1 ? "opacity-100 scale-100" : "opacity-20 scale-95"
            }`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">02</div>
              <div className="w-[3cqw] h-[3cqw] rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono text-zinc-400 text-[1.1cqw] font-bold">CHOICE</div>
              <span className="font-serif text-[1cqw] font-black text-zinc-100">{language === "zh" ? "自主选择" : "SARTRE_CHO"}</span>
            </div>
            <div className={`flex-1 h-0.5 border-t border-dashed transition-all duration-1000 mx-2 ${
              sceneBeat >= 2 ? "border-zinc-700/50 opacity-100" : "border-zinc-800 opacity-20"
            }`} />
            <div className={`border-2 border-red-900/30 bg-zinc-950 p-[1.8cqw] rounded flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md relative overflow-hidden transition-all duration-700 ${
              sceneBeat >= 2 ? "opacity-100 scale-100 border-red-800/40" : "opacity-20 scale-95"
            }`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">03</div>
              <div className="w-[3cqw] h-[3cqw] rounded-full bg-red-950 border border-red-900 flex items-center justify-center font-mono text-red-500 text-[1.1cqw] font-bold">REBEL</div>
              <span className="font-serif text-[1cqw] font-black text-zinc-100">{language === "zh" ? "反抗宣言" : "CAMUS_REB"}</span>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="grid grid-cols-2 gap-[1.5cqw] w-full max-w-[42cqw] animate-scale-up font-serif animate-glitch-entry" key={`s4-${sceneBeat}`}>
            <div className={`border border-zinc-800 bg-zinc-950 p-[1.5cqw] rounded relative transition-all duration-500 ${sceneBeat >= 0 ? "opacity-100 scale-100 border-zinc-700/40" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-zinc-400 font-bold">PILLAR 1</div>
              <span className="font-serif text-[1.1cqw] text-white font-black block mb-1">{language === "zh" ? "存在先于本质" : "EXISTENCE PRINCIPLE"}</span>
              <p className="text-[0.9cqw] opacity-85 text-zinc-400 font-sans leading-tight">
                {language === "zh" ? "个体的存活状态是绝对的第一前提。没有任何天生本质可以推卸自由意志责任。" : "Individual survival serves as the absolute premise. No divine design excuses choice."}
              </p>
            </div>
            <div className={`border border-zinc-800 bg-zinc-950 p-[1.5cqw] rounded relative transition-all duration-500 ${sceneBeat >= 1 ? "opacity-100 scale-100 border-zinc-700/40" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-zinc-400 font-bold">PILLAR 2</div>
              <span className="font-serif text-[1.1cqw] text-white font-black block mb-1">{language === "zh" ? "西西弗斯荒诞" : "ABSURDITY CRITERIA"}</span>
              <p className="text-[0.9cqw] opacity-85 text-zinc-400 font-sans leading-tight">
                {language === "zh" ? "直面世界冷酷沉默与求索意义的永恒冲突。推石上山，过程本身即是幸福。" : "Staring at the clash between human desire and cosmic silence. Revolt itself is joy."}
              </p>
            </div>
            <div className={`border border-zinc-800 bg-zinc-950 p-[1.5cqw] rounded relative transition-all duration-500 ${sceneBeat >= 2 ? "opacity-100 scale-100 border-zinc-700/40" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-zinc-400 font-bold">PILLAR 3</div>
              <span className="font-serif text-[1.1cqw] text-white font-black block mb-1">{language === "zh" ? "自欺与逃避 (Mauvaise foi)" : "BAD FAITH ACTS"}</span>
              <p className="text-[0.9cqw] opacity-85 text-zinc-400 font-sans leading-tight">
                {language === "zh" ? "批判通过扮演社会特定角色来逃避自由、推卸道德选择和虚无推托的行为。" : "Condemning individuals escaping freedom under rigid social roles."}
              </p>
            </div>
            <div className={`border border-zinc-700 bg-zinc-950 p-[1.5cqw] rounded relative transition-all duration-500 ${sceneBeat >= 2 ? "opacity-100 scale-100 border-zinc-600/40 bg-zinc-900/50" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-[#fef08a] font-bold">PILLAR 4</div>
              <span className="font-serif text-[1.1cqw] text-[#fef08a] font-black block mb-1">{language === "zh" ? "反抗宣言 (L'homme révolté)" : "THE REBEL STATUTES"}</span>
              <p className="text-[0.9cqw] opacity-85 text-zinc-400 font-sans leading-tight">
                {language === "zh" ? "坚决否定打着历史必然性旗号的一切政治极权。人必须在清醒反叛中直立。" : "Rejecting totalitarian crueltes under 'history'. Living with lucid defiance."}
              </p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="grid grid-cols-3 gap-[1cqw] w-full max-w-[45cqw] animate-bento-stagger" key={`s5-${sceneBeat}`}>
            <div className={`col-span-2 border border-zinc-800 bg-zinc-950 p-[1.2cqw] rounded min-h-[16cqh] flex flex-col justify-between transition-all duration-500 ${sceneBeat >= 0 ? "opacity-100 border-zinc-700/20" : "opacity-25"}`}>
              <div className="flex justify-between items-center border-b border-zinc-800 pb-1.5 font-serif">
                <span className="text-[0.95cqw] text-zinc-100 font-black flex items-center gap-1.5 uppercase">
                  <MessageSquare className="w-3.5 h-3.5" />
                  {language === "zh" ? "花神咖啡馆哲学遥测辩证" : "CAFÉ DE FLORE INTELLECTUAL DIALECTIC"}
                </span>
                <span className="text-[0.8cqw] font-mono text-zinc-500">Paris Session 94</span>
              </div>
              <div className="flex flex-col gap-1.5 mt-2 font-mono text-[0.85cqw] text-zinc-400">
                <div className="flex justify-between font-serif">
                  <span>Sartre 'Action Choice' Index:</span><span className="font-bold text-zinc-200">92% Engagement</span>
                </div>
                <div className="flex justify-between font-serif">
                  <span>Camus 'Lucid Revolt' Quotient:</span><span className="font-bold text-[#fef08a]">99% Absurd Tally</span>
                </div>
              </div>
            </div>
            <div className={`border border-zinc-800 bg-zinc-950 p-[1.2cqw] rounded min-h-[16cqh] flex flex-col justify-between transition-all duration-500 ${sceneBeat >= 1 ? "opacity-100 border-zinc-700/20" : "opacity-25"}`}>
              <span className="font-serif text-[0.85cqw] text-zinc-300 font-black block">{language === "zh" ? "西西弗斯推石功极值" : "SISYPHUS WORK LOAD"}</span>
              <div className="text-[2.2cqw] font-black text-[#fef08a] font-mono leading-none my-1">
                4.2e5<span className="text-[1cqw] font-normal font-sans opacity-70">J</span>
              </div>
              <span className="text-[0.8cqw] text-zinc-500 font-mono block">Lucid Rebellion Achieved</span>
            </div>
            <div className={`col-span-3 border border-red-900/20 bg-zinc-950 p-[1cqw] rounded flex items-center justify-between transition-all duration-500 ${sceneBeat >= 2 ? "opacity-100 border-red-800/40 bg-red-950/10" : "opacity-25"}`}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span className="font-serif text-[0.9cqw] text-red-500 font-black">
                  {language === "zh" ? "✓ 存在与荒诞辨难报告加盖巴黎花神咖啡馆红泥大章备案" : "✓ CAFÉ DE FLORE VERMILION DIALECTIC RECORD SEALED"}
                </span>
              </div>
              <span className="font-mono text-[0.8cqw] text-zinc-500 font-bold">SEAL: FLORE.DIAL.402</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderNavigation = () => {
    if (isThumbnail || !onNavigate) return null;

    const activeIndex = scene - 1;

    const navNodes = [
      {
        s: 1,
        name: language === "zh" ? "对质绪论" : "Intro",
        icon: (
          <svg viewBox="0 0 24 24" className="w-[1.4cqw] h-[1.4cqw]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v3M6 6l2.12 2.12M18 6l-2.12 2.12" opacity="0.4" />
            <path d="M12 9a3 3 0 100 6 3 3 0 000-6z" />
            <path d="M8 15L4 21h16l-4-6" />
          </svg>
        )
      },
      {
        s: 2,
        name: language === "zh" ? "双席对置" : "Duality",
        icon: (
          <svg viewBox="0 0 24 24" className="w-[1.4cqw] h-[1.4cqw]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a2 2 0 012 2v2a2 2 0 01-2 2h-1" />
            <path d="M3 8h15v6a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" />
            <path d="M6 3v2M10 3v2M14 3v2" opacity="0.5" />
          </svg>
        )
      },
      {
        s: 3,
        name: language === "zh" ? "辩难演进" : "Progression",
        icon: (
          <svg viewBox="0 0 24 24" className="w-[1.4cqw] h-[1.4cqw]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 20c4 0 10-4 18-10" />
            <circle cx="16" cy="11" r="3" />
            <path d="M10 17l2-2" opacity="0.6" />
          </svg>
        )
      },
      {
        s: 4,
        name: language === "zh" ? "存在主义" : "Matrix",
        icon: (
          <svg viewBox="0 0 24 24" className="w-[1.4cqw] h-[1.4cqw]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="6" width="3.5" height="12" rx="0.5" />
            <rect x="10" y="3" width="3.5" height="15" rx="0.5" />
            <rect x="16" y="8" width="3.5" height="10" rx="0.5" />
          </svg>
        )
      },
      {
        s: 5,
        name: language === "zh" ? "思辨总账" : "Ledger",
        icon: (
          <svg viewBox="0 0 24 24" className="w-[1.4cqw] h-[1.4cqw]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="8" strokeDasharray="2 2" />
            <circle cx="12" cy="12" r="4" />
            <path d="M9 12h6M12 9v6" opacity="0.6" />
          </svg>
        )
      }
    ];

    return (
      <div className="absolute bottom-[2.5cqh] left-[5cqw] w-[22cqw] h-[6.5cqh] bg-[#040405] border border-zinc-900 rounded-lg flex items-center justify-between p-[0.4cqw] px-[0.8cqw] shadow-inner select-none z-25 overflow-visible">
        {/* Top Sprocket Holes Row */}
        <div className="absolute top-[0.4cqh] inset-x-0 flex justify-between px-[0.8cqw] opacity-35 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-[0.4cqw] h-[0.4cqw] bg-zinc-700 rounded-sm" />
          ))}
        </div>

        {/* Bottom Sprocket Holes Row */}
        <div className="absolute bottom-[0.4cqh] inset-x-0 flex justify-between px-[0.8cqw] opacity-35 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-[0.4cqw] h-[0.4cqw] bg-zinc-700 rounded-sm" />
          ))}
        </div>

        {/* Sliding spotlight shaft projecting onto active frame */}
        <div 
          className="absolute -top-[14cqh] h-[14cqh] w-[3.4cqw] bg-gradient-to-b from-white/0 via-white/10 to-white/40 border-t border-white/25 pointer-events-none z-10 transition-all duration-[800ms]"
          style={{
            left: `calc(${activeIndex * 20}% + 10% - 1.7cqw)`,
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        />

        {/* Dynamic Shadow Spot underneath the active cell */}
        <div 
          className="absolute inset-y-[0.8cqh] w-[3.4cqw] bg-zinc-950/60 rounded-md pointer-events-none z-0 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-[800ms]"
          style={{
            left: `calc(${activeIndex * 20}% + 10% - 1.7cqw)`,
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        />

        {/* 5 Micro Film Cells */}
        <div className="w-full h-full grid grid-cols-5 gap-[0.5cqw] relative items-center py-[0.8cqh] z-10">
          {navNodes.map((node) => {
            const isCurrent = node.s === scene;
            return (
              <button 
                key={node.s}
                onClick={() => onNavigate && onNavigate(node.s, 0)}
                className={`col-span-1 h-full flex flex-col items-center justify-center rounded cursor-pointer border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-white/10 transition-all duration-[600ms] ${
                  isCurrent 
                    ? "text-white scale-105 z-20 font-bold" 
                    : "text-zinc-600 hover:text-zinc-400 opacity-40 hover:opacity-80"
                }`}
                title={node.name}
                aria-label={node.name}
              >
                <div className="flex items-center justify-center">
                  {node.icon}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={`w-full h-full bg-[#09090b] text-zinc-100 relative overflow-hidden select-none`}>
      {/* Vertical Slider Track (V-Slide) */}
      <div 
        className="flex flex-col w-full h-[500%] transition-transform duration-[1200ms]" 
        style={{ 
          transform: `translateY(-${(scene - 1) * 20}%)`,
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        {meta.scenes.map((s) => {
          const sBeatIdx = getSceneBeatIdx(s.id);
          const sBeat = s.beats[sBeatIdx] || s.beats[0];

          return (
            <div 
              key={s.id} 
              className="w-full h-[20%] shrink-0 flex flex-col justify-between p-[5cqw] pb-[3.5cqh] relative select-none"
            >
              {/* Top Slide Meta Header */}
              <div className="w-full flex justify-between items-start border-b border-zinc-800 pb-[2cqh] z-10 shrink-0">
                <div className="flex flex-col gap-0.5">
                  <span className="font-serif text-[1.1cqw] tracking-wider uppercase text-zinc-400 font-bold">
                    {meta.theme}
                  </span>
                  <span className="text-[1cqw] text-zinc-500 font-mono tracking-tight uppercase">
                    {meta.name} • {s.title}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-zinc-950 px-3 py-1.5 rounded border border-zinc-800 shadow-2xl">
                  <div className="w-2 h-2 rounded-full bg-zinc-400 animate-pulse" />
                  <span className="font-serif text-[1.1cqw] text-zinc-300 font-bold uppercase">{meta.tier}-TIER DRAMATIC</span>
                </div>
              </div>

              {/* Central Split Layout Panel */}
              <div className="flex-1 w-full grid grid-cols-12 gap-[4cqw] items-center my-[3cqh] z-10 overflow-hidden">
                {/* Left Column: Semantic Copy Content Block */}
                <div className="col-span-6 flex flex-col gap-[2cqh] text-left pr-[2cqw] justify-center min-h-[35cqh]">
                  <h1 className="text-[3.8cqw] leading-[1.1] font-black tracking-tight font-serif text-white animate-slide-right" key={`title-${s.id}-${sBeatIdx}`}>
                    {sBeat.title}
                  </h1>
                  <p className="text-[1.5cqw] leading-[1.5] text-zinc-300 mt-[1cqh] animate-crossfade" key={`body-${s.id}-${sBeatIdx}`}>
                    {sBeat.body}
                  </p>
                </div>

                {/* Right Column: Creative Visual Vector Canvas */}
                <div className="col-span-6 flex items-center justify-center min-h-[40cqh]">
                  {renderVisual(s.id, sBeatIdx)}
                </div>
              </div>

              {/* Bottom Technical Progress Ledger Bar */}
              <div className="w-full flex justify-between items-center border-t border-zinc-800 pt-[2cqh] z-10 shrink-0">
                <div className="flex items-center gap-3 pl-[24cqw]"> {/* Indent by 24cqw to avoid visual overlap with the bottom-left film strip! */}
                  <span className="font-mono text-[0.95cqw] text-zinc-500 font-bold uppercase">{language === "zh" ? "实时操作:" : "BEAT ACTION:"}</span>
                  <span className="font-serif text-[1cqw] bg-zinc-900 text-zinc-100 border border-zinc-800 px-3 py-1 rounded font-bold animate-pulse" key={`action-${s.id}-${sBeatIdx}`}>
                    {sBeat.action}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[0.9cqw] text-zinc-500 font-bold uppercase">
                    {language === "zh" ? `场景 ${s.id} / 5` : `SCENE ${s.id} / 5`}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom-Left Minimal Film Strip Navigation Overlay */}
      {renderNavigation()}
    </div>
  );
}
