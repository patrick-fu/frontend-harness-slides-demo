import React from "react";

export const getMetadata = (lang) => ({
  id: "18",
  tier: "C",
  name: lang === "zh" ? "法国大革命前夕的面粉饥荒特报" : "The French Bread Crisis, 1789",
  theme: lang === "zh" ? "大革命前夕社会经济危机" : "Prerevolutionary Socio-Economic Crisis",
  densityLabel: lang === "zh" ? "饥荒特报" : "Famine Report Ledger",
  colors: { bg: "bg-[#f5efe4]", ink: "text-[#382b21]", panel: "border-[#ded3be]" },
  typography: { header: "font-serif", body: "font-serif" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "国王御前粮食分配敕令" : "Royal Decree on Grain Distribution",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "宣读敕令" : "Read Royal Proclamation", 
          title: lang === "zh" ? "面粉荒与皇家敕令" : "The Proclamation on Flour Famine", 
          body: lang === "zh" ? "“鉴于各省面粉储备严重不足，特令禁止囤积谷物，违者重惩。”1789年春，路易十六在凡尔赛签发敕令，试图平息四起的骚乱。" : "“Considering the severe deficit of flour reserves across provinces, hoarding grain is strictly prohibited.” In the spring of 1789, Louis XVI signed the Versailles decree to suppress rising unrest." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "核查省际囤积" : "Audit Province Hoarding", 
          title: lang === "zh" ? "省际粮食壁垒与黑市" : "Provincial Trade Barriers", 
          body: lang === "zh" ? "然而，各省地方议会与商贾互相封锁关卡，粮食禁运导致私运猖獗。官方限价形同虚设，黑市价格翻了数倍。" : "However, provincial assemblies and merchants blocked trade routes. Granary embargoes caused massive smuggling. Price caps failed, and black market rates surged." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "评估财政赤字" : "Assess Treasury Deficit", 
          title: lang === "zh" ? "王室空虚的财政悬崖" : "The Royal Treasury Deficit", 
          body: lang === "zh" ? "国家财政濒临破产，内克尔（Necker）大臣的紧急粮食补贴款因金库空虚而无法划拨，官方面粉救济渠道彻底断绝。" : "The national treasury neared bankruptcy. Minister Necker's emergency grain subsidies could not be funded, cutting off official relief routes." 
        }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "面包价格与日薪倒挂" : "Bread Prices vs Workers Daily Wages",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "投影正常比率" : "Project Standard Ratio", 
          title: lang === "zh" ? "标准时期的民生平衡" : "Standard Period Balance", 
          body: lang === "zh" ? "在正常年份，一个巴黎日雇工仅需花费其每日所得的30%至40%购买两磅面包，即可维系全家基本生存。" : "In normal years, a Paris day-laborer spent just 30% to 40% of their daily wage to buy two pounds of bread, securing basic survival." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "对比涨价曲线" : "Plot Inflation Curve", 
          title: lang === "zh" ? "1789年面包恶性通胀" : "The Extreme Inflation of 1789", 
          body: lang === "zh" ? "至1789年7月，两磅面包价格飙升至14.5苏（Sous），相当于普通雇工一日所得的85%以上。生存平衡彻底崩溃。" : "By July 1789, the price of two pounds of bread surged to 14.5 sous, representing over 85% of a laborer's daily income. Survival became impossible." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "对齐面包骚乱" : "Correlate Bread Riots", 
          title: lang === "zh" ? "饥饿推动的社会动荡" : "Hunger-Driven Social Unrest", 
          body: lang === "zh" ? "“拿不到面包，我们就拿武器！”当面包店前排起长队却被告知无面粉可售时，暴力冲突迅速蔓延至街区每一个角落。" : "“If there is no bread, we take weapons!” When queues at bakeries were told there was no flour, violent clashes erupted in every district." 
        }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "饥荒危机演进阶段" : "Famine Crisis Escalation Stages",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "分析1788极端气候" : "Trace 1788 Extreme Weather", 
          title: lang === "zh" ? "第一阶段：极端冰雹与冰冻" : "Stage I: Extreme Ice & Frost", 
          body: lang === "zh" ? "1788年夏季的毁灭性冰雹摧毁了大片麦田，紧接着1788-1789年的极寒严冬导致磨坊停转、运河封冻，粮食运输中断。" : "A devastating hailstorm in the summer of 1788 ruined wheat crops, followed by the freezing winter of 1788-1789 which stopped watermills and blocked canals." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "标注面粉短缺拐点" : "Mark Flour Deficit Pivot", 
          title: lang === "zh" ? "第二阶段：磨房停摆与抢购" : "Stage II: Mill Shutdown & Panic Buying", 
          body: lang === "zh" ? "春季解冻后，面粉短缺在全法集中爆发。面包店被迫限购，市民在面粉市集抢购最后的存粮，商贾趁机投机倒卖。" : "With the spring thaw, the flour deficit erupted across France. Bakeries limited purchases, citizens panicked at grain markets, and speculators hoarded reserves." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "启动军队镇压" : "Deploy Garrison Troops", 
          title: lang === "zh" ? "第三阶段：劫掠粮仓与暴动" : "Stage III: Looting of Granaries & Riots", 
          body: lang === "zh" ? "7月起，巴黎周边出现多起袭击运粮马车事件，民众联合冲击圣拉扎尔修道院粮仓。市民自发武装，秩序彻底失控。" : "By July, attacks on grain wagons were common. Crowds stormed the Saint-Lazare monastery granaries. Armed citizens organized, leading to total collapse of order." 
        }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "四大防区面粉账目" : "Defensive Sector Flour Ledgers",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "核查谷物储量" : "Check Grain Stockpiles", 
          title: lang === "zh" ? "巴黎周边四大行省账目" : "Grain Reserves in Surrounding Provinces", 
          body: lang === "zh" ? "审计凡尔赛、马恩、鲁昂、塞纳三大枢纽与巴黎市中心的麦粉流通表。数据表明，核心磨坊的储备周转天数已降至危险红线。" : "Auditing flour flows in Versailles, Marne, Rouen, Seine, and Paris Central. Reserves in core mills have fallen past safety limits to a few days." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "标记卫戍军部署" : "Mark Garrison Deployments", 
          title: lang === "zh" ? "卫戍军队与押运力量" : "Garrison Guard Escort Strength", 
          body: lang === "zh" ? "国王急调一万名雇佣兵进入巴黎外围，试图强行武装押运进城粮车。但这反而激怒了忍饥挨饿的起义民众。" : "The King deployed 10,000 foreign mercenaries to outer Paris to escort grain wagons. This act infuriated the starving and armed citizen militias." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "核准限额供给" : "Enforce Rationing Limits", 
          title: lang === "zh" ? "卡牌凭证面包限额" : "Emergency Rationing Cards", 
          body: lang === "zh" ? "各市民委员会紧急印制红白面粉凭证（Cartes de ration），每户每日限购面包一磅。非法私卖面粉者将被送上绞架。" : "Citizen committees printed emergency ration cards, limiting bread to one pound per family. Illegal flour sellers were threatened with the gallows." 
        }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "全法面粉存量与通胀总账" : "National Flour Inventory & Inflation Balance",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "审阅省际岁入" : "Review Provincial Tariffs", 
          title: lang === "zh" ? "五大主要区面粉储备常数" : "Reserves & Tariffs of Five Major Regions", 
          body: lang === "zh" ? "汇总法兰西主要行省（巴黎、马恩、鲁昂、里昂、马赛）的存粮账册。由于冰封中断，北方小麦大面积歉收，存量全线告急。" : "Aggregating records for Paris, Versailles, Rouen, Lyon, and Marseille. Northern wheat failure and frozen paths left reserves critically low." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "加盖国民议会印章" : "Stamp National Assembly", 
          title: lang === "zh" ? "面粉饥荒呈国民议会书" : "The Famine Report to the Assembly", 
          body: lang === "zh" ? "国民议会粮食委员会对饥荒状况进行全维度评估，加盖‘国民议会粮食委员会之印’，紧急决议开放一切省际关税壁垒。" : "The Assembly's Food Committee evaluated the crisis, stamped it, and decreed the immediate abolition of all provincial customs barriers." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "签发面粉紧急补贴" : "Disburse Flour Subsidies", 
          title: lang === "zh" ? "无担保金库公债签发" : "The Emergency Treasury Bond Issue", 
          body: lang === "zh" ? "鉴于王室金库枯竭，议会强行签署免税粮食公债，用以向北欧及美国紧急采购小麦，试图强行维持面包价格不再上涨。" : "With the treasury empty, the Assembly issued emergency grain bonds to import wheat from Scandinavia and America, aiming to freeze bread prices." 
        }
      ]
    }
  ]
});

export default function Style18({ scene, beat, language, isThumbnail }) {
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
      <div className="relative w-full h-full flex items-center justify-center border border-[#dacfb7] bg-[#FAF5EB] rounded-[0.5cqw] overflow-hidden p-[1cqw] shadow-inner">
        {/* Distressed ledger paper lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] grid grid-cols-12 grid-rows-12 h-full w-full" style={{
          backgroundImage: "linear-gradient(#4d3625 1px, transparent 1px)",
          backgroundSize: "100% 2.8cqh"
        }} />

        {/* Marginal boundary borders */}
        <div className="absolute inset-[0.8cqw] border border-[#cfc0a9] pointer-events-none" />
        <div className="absolute left-[3cqw] top-0 bottom-0 w-[1px] bg-[#d94a4a] opacity-35 pointer-events-none" /> {/* Red margin line */}

        {scene === 1 && (
          <div className="relative flex flex-col items-center justify-center w-full h-full text-center p-[1.5cqw]">
            {/* French crown & assembly coat of arms SVG */}
            <svg viewBox="0 0 120 120" className="w-[12cqw] h-[12cqw] text-[#554235] opacity-80 mb-2">
              <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="3 2" />
              {/* Fleur de lis crown style */}
              <path d="M 45,70 L 45,55 C 45,50 50,45 60,40 C 70,45 75,50 75,55 L 75,70 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M 50,55 Q 60,50 70,55 Q 60,58 50,55 Z" fill="currentColor" opacity="0.3" />
              <path d="M 60,35 L 60,25 M 54,29 L 66,29" stroke="currentColor" strokeWidth="0.6" /> {/* Cross */}
              {/* Shield details */}
              <circle cx="60" cy="58" r="4" fill="none" stroke="currentColor" strokeWidth="0.4" />
              <circle cx="53" cy="58" r="3" fill="none" stroke="currentColor" strokeWidth="0.3" />
              <circle cx="67" cy="58" r="3" fill="none" stroke="currentColor" strokeWidth="0.3" />
              <text x="60" y="82" fontSize="5" textAnchor="middle" className="font-serif italic font-bold">LOUIS XVI</text>
              <text x="60" y="89" fontSize="3.8" textAnchor="middle" className="font-serif italic tracking-widest opacity-60">VERSAILLES • 1789</text>
            </svg>
            <div className={`mt-[1cqh] font-serif italic text-[#806856] text-[1.1cqw] font-bold ${getBeatClass(1)}`}>
              Official Seal of the French Grain Administration, Royal Commission.
            </div>
          </div>
        )}

        {scene === 2 && (
          <div className="flex flex-col justify-between h-full w-full p-[1cqw]">
            <div className="border-b border-[#ded3be] pb-[0.5cqh] text-center">
              <span className="font-serif text-[1.1cqw] text-[#802424] font-bold tracking-widest uppercase">Indices Economiques de Paris (1789)</span>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-[2cqh] my-2 text-[0.9cqw]">
              {/* Price / wage index visual */}
              <div>
                <div className="flex justify-between font-serif mb-1 font-bold">
                  <span className="text-[#554235]">Normal Daily Wage (1788 Baseline)</span>
                  <span className="font-mono text-[#554235]">15.0 Sous (100%)</span>
                </div>
                <div className="h-4 bg-[#ede2cf] rounded-sm border border-[#dacfb7] overflow-hidden">
                  <div className="h-full bg-[#806856]" style={getScaleStyle(0, "100%")} />
                </div>
              </div>
              <div>
                <div className="flex justify-between font-serif mb-1 font-bold">
                  <span className="text-[#802424] font-bold">Bread Price (July 1789 Inflation Spike)</span>
                  <span className="font-mono text-[#802424] font-bold">14.5 Sous (88.3% of Wage)</span>
                </div>
                <div className="h-4 bg-[#ede2cf] rounded-sm border border-[#dacfb7] overflow-hidden">
                  <div className="h-full bg-[#b23232]" style={getScaleStyle(1, "88%")} />
                </div>
              </div>
            </div>
            <div className={`text-center font-serif text-[0.8cqw] text-[#802424] font-bold italic border-t border-[#e2d8c3] pt-[0.8cqh] ${getBeatClass(2)}`}>
              Warning: Discretionary spending capacity has fallen to 1.7苏 (Sous) per capita.
            </div>
          </div>
        )}

        {scene === 3 && (
          <div className="relative w-full h-full flex flex-col justify-between p-[1cqw]">
            <div className="flex justify-between items-center border-b border-[#dacfb7] pb-[0.5cqh]">
              <span className="font-serif text-[1.1cqw] text-[#802424] uppercase tracking-wider font-bold">Chronology of General Unrest</span>
              <span className="font-mono text-[0.8cqw] text-[#806856]">LEDGER • TAB. II</span>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-[1cqh] my-[1cqh]">
              <div className={`flex items-start gap-2.5 p-[0.6cqw] bg-[#faf6ee]/70 border border-[#ded3be] rounded-sm ${getBeatClass(0)}`}>
                <span className="font-mono font-bold text-[#802424] text-[0.9cqw] mt-0.5">[1788]</span>
                <div>
                  <h4 className="font-bold text-[#382b21] text-[0.95cqw] leading-none mb-1">Crop Devastation by Hail</h4>
                  <p className="text-[0.8cqw] text-[#6e5a48] leading-tight">July ice storms destroy 72% of wheat outputs in Ile-de-France.</p>
                </div>
              </div>
              <div className={`flex items-start gap-2.5 p-[0.6cqw] bg-[#faf6ee]/70 border border-[#ded3be] rounded-sm ${getBeatClass(1)}`}>
                <span className="font-mono font-bold text-[#802424] text-[0.9cqw] mt-0.5">[Spring]</span>
                <div>
                  <h4 className="font-bold text-[#382b21] text-[0.95cqw] leading-none mb-1">Frozen Watermills Stopped</h4>
                  <p className="text-[0.8cqw] text-[#6e5a48] leading-tight">Canals blockages halt grain grinding, driving absolute flour deficits.</p>
                </div>
              </div>
              <div className={`flex items-start gap-2.5 p-[0.6cqw] bg-[#faf6ee]/70 border border-[#b23232]/40 rounded-sm ${getBeatClass(2)}`}>
                <span className="font-mono font-bold text-[#802424] text-[0.9cqw] mt-0.5">[July]</span>
                <div>
                  <h4 className="font-bold text-[#802424] text-[0.95cqw] leading-none mb-1">Storming of Saint-Lazare</h4>
                  <p className="text-[0.8cqw] text-[#802424] leading-tight">Mobs seize 52 cartloads of flour, arming the revolutionary militia.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {scene === 4 && (
          <div className="grid grid-cols-2 grid-rows-2 gap-[1cqw] w-full h-full p-[0.5cqw]">
            <div className="border border-[#ded3be] bg-[#faf6ed] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#802424] border-b border-[#ded3be] pb-[0.2cqh]">Sector I: Île-de-France</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Price Index:</span><span className="text-[#b23232] font-bold">14.5 Sous</span></div>
                <div className="flex justify-between"><span>Garrison Strength:</span><span>6,200 Troops</span></div>
                <div className="flex justify-between"><span>Riot Scale:</span><span className="text-[#b23232] font-bold">CRITICAL</span></div>
              </div>
            </div>
            <div className="border border-[#ded3be] bg-[#faf6ed] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#802424] border-b border-[#ded3be] pb-[0.2cqh]">Sector II: Rouen Maritime</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Price Index:</span><span className="text-[#b23232] font-bold">12.0 Sous</span></div>
                <div className="flex justify-between"><span>Garrison Strength:</span><span>1,400 Troops</span></div>
                <div className="flex justify-between"><span>Riot Scale:</span><span className="text-amber-700 font-bold">MODERATE</span></div>
              </div>
            </div>
            <div className="border border-[#ded3be] bg-[#faf6ed] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#802424] border-b border-[#ded3be] pb-[0.2cqh]">Sector III: Lyon Silk Corridor</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Price Index:</span><span>11.5 Sous</span></div>
                <div className="flex justify-between"><span>Garrison Strength:</span><span>2,500 Troops</span></div>
                <div className="flex justify-between"><span>Riot Scale:</span><span className="text-[#b23232] font-bold">HIGH</span></div>
              </div>
            </div>
            <div className="border border-[#ded3be] bg-[#faf6ed] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#802424] border-b border-[#ded3be] pb-[0.2cqh]">Sector IV: Versailles Court</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Price Index:</span><span>14.0 Sous</span></div>
                <div className="flex justify-between"><span>Garrison Strength:</span><span className="text-emerald-700 font-bold">8,000 Troops</span></div>
                <div className="flex justify-between"><span>Riot Scale:</span><span className="text-emerald-700 font-bold">SECURED</span></div>
              </div>
            </div>
          </div>
        )}

        {scene === 5 && (
          <div className="relative w-full h-full flex flex-col justify-between p-[0.8cqw] font-serif text-[#382b21]">
            <div className="text-center font-bold text-[1cqw] uppercase tracking-widest border-b-2 border-[#802424] pb-[0.2cqh] mb-[0.5cqh] text-[#802424]">
              Rapport d'Audit National sur les Subsistances (1789)
            </div>
            <div className="flex-1 flex flex-col justify-center my-[0.2cqw]">
              <table className="w-full text-left text-[0.78cqw] border-collapse font-serif">
                <thead>
                  <tr className="border-b border-[#802424]/40 font-bold text-[#802424]">
                    <th className="py-1">Gouvernement Province</th>
                    <th className="py-1">Stock de Farine (Boiss.)</th>
                    <th className="py-1 text-right">Prix (Sous)</th>
                    <th className="py-1 text-right">Militaires (Garr.)</th>
                    <th className="py-1 text-right">Sédition (Riots)</th>
                  </tr>
                </thead>
                <tbody className="text-[#4e3c2f] font-mono text-[0.75cqw]">
                  <tr className={`border-b border-[#ded3be]/40 ${getBeatClass(0)}`}>
                    <td className="py-1 font-serif font-bold">Paris Central</td>
                    <td className="py-1">2,400 (Bas)</td>
                    <td className="py-1 text-right text-[#b23232] font-bold">14.5 s.</td>
                    <td className="py-1 text-right">6,200</td>
                    <td className="py-1 text-right text-[#b23232] font-bold">CRITIQUE</td>
                  </tr>
                  <tr className={`border-b border-[#ded3be]/40 ${getBeatClass(0)}`}>
                    <td className="py-1 font-serif font-bold">Versailles Court</td>
                    <td className="py-1">8,500 (Abond.)</td>
                    <td className="py-1 text-right">14.0 s.</td>
                    <td className="py-1 text-right font-bold text-emerald-800">8,000</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">NULLE</td>
                  </tr>
                  <tr className={`border-b border-[#ded3be]/40 ${getBeatClass(1)}`}>
                    <td className="py-1 font-serif font-bold text-[#802424]">Rouen Maritime</td>
                    <td className="py-1">1,200 (Critique)</td>
                    <td className="py-1 text-right text-[#b23232] font-bold">12.0 s.</td>
                    <td className="py-1 text-right">1,400</td>
                    <td className="py-1 text-right text-amber-700 font-bold">MODÉRÉ</td>
                  </tr>
                  <tr className={`border-b border-[#ded3be]/40 ${getBeatClass(1)}`}>
                    <td className="py-1 font-serif font-bold">Lyon Silk Corridor</td>
                    <td className="py-1">3,100 (Modeste)</td>
                    <td className="py-1 text-right">11.5 s.</td>
                    <td className="py-1 text-right">2,500</td>
                    <td className="py-1 text-right text-[#b23232] font-bold">ÉLEVÉE</td>
                  </tr>
                  <tr className={`${getBeatClass(2)}`}>
                    <td className="py-1 font-serif font-bold">Marseille Port</td>
                    <td className="py-1">4,000 (Régul.)</td>
                    <td className="py-1 text-right">10.5 s.</td>
                    <td className="py-1 text-right">1,800</td>
                    <td className="py-1 text-right text-amber-700 font-bold">MODÉRÉ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="border-t border-[#ded3be] pt-1 text-[0.7cqw] text-stone-400 italic text-center font-serif">
              Avis: Commission de Subsistances de l'Assemblée Nationale, Versailles, Juillet 1789.
            </div>
          </div>
        )}

        {/* Official Blue-Red French National Assembly Ink Stamp (Stamps on Beat 1 for Scene 5, or subtly visible) */}
        {scene === 5 && (
          <div className={`absolute bottom-[1.8cqw] right-[1.8cqw] w-[5cqw] h-[5cqw] transition-all duration-1000 ${beat >= 1 ? "opacity-80 scale-100 rotate-[15deg]" : "opacity-15 scale-90 rotate-0"} pointer-events-none select-none`}>
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#315180]">
              {/* Outer seal rings */}
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#b23232" strokeWidth="1.5" strokeDasharray="4 2" />
              {/* French Revolution Motto */}
              <text x="50" y="32" fontSize="6.5" textAnchor="middle" fontWeight="black" fontFamily="serif" fill="currentColor" letterSpacing="0.5">LIBERTÉ</text>
              <text x="50" y="44" fontSize="6" textAnchor="middle" fontWeight="black" fontFamily="serif" fill="#b23232">ÉGALITÉ</text>
              <text x="50" y="56" fontSize="5" textAnchor="middle" fontWeight="black" fontFamily="serif" fill="currentColor" letterSpacing="0.2">FRATERNITÉ</text>
              {/* Assembly text */}
              <text x="50" y="74" fontSize="4.8" textAnchor="middle" fontWeight="bold" fontFamily="monospace" fill="currentColor">ASSEMBLÉE NAT.</text>
              <text x="50" y="81" fontSize="4" textAnchor="middle" fontWeight="bold" fontFamily="monospace" fill="#b23232">COMMISSION 1789</text>
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
          <span className="font-sans text-[1.2cqw] font-bold tracking-wider uppercase opacity-65 text-[#806856] border-b border-[#ded3be] pb-[0.5cqh] inline-block">
            {meta.theme}
          </span>
          <h1 className="text-[3.2cqw] leading-[1.1] font-black tracking-tight font-serif mt-[1cqh] text-[#802424]">
            {currentBeat.title}
          </h1>
          <p className="text-[1.3cqw] leading-[1.4] opacity-95 font-serif mt-[1.5cqh] text-[#423326]">
            {currentBeat.body}
          </p>
        </div>

        {/* Marginal Editorial Footnote */}
        <div className="flex flex-col gap-[0.5cqh] mt-[2cqh] border-t border-[#ded3be] pt-[1cqh]">
          <div className="flex justify-between text-[0.8cqw] font-mono text-[#8c7462]">
            <span>ARCHIVE: MONITEUR UNIVERSEL</span>
            <span>DATE: AN XII (1789)</span>
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
