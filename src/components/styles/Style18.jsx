import React from "react";

export const getMetadata = (lang) => ({
  id: "18",
  tier: "A+",
  name: lang === "zh" ? "法国大革命前夕的面包饥荒特报" : "The French Bread Crisis, 1789",
  theme: lang === "zh" ? "大革命前夕社会经济危机" : "Prerevolutionary Socio-Economic Crisis",
  densityLabel: lang === "zh" ? "大革命饥荒" : "Revolutionary Famine",
  colors: { bg: "bg-[#FFFEFE]", ink: "text-[#3c0f0f]", panel: "border-[#3c0f0f]/15" },
  typography: { header: "font-serif", body: "font-serif" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "国王御前粮食分配敕令" : "Royal Decree on Grain Distribution",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "宣读敕令" : "Read Royal Proclamation",
          title: lang === "zh" ? "国王御前分配公报" : "Decree of Grain Distribution",
          body: lang === "zh" ? "1789年春，法王路易十六在凡尔赛签发紧急粮食分配公报，限制囤积，试图平息面粉危机。" : "In the spring of 1789, Louis XVI signed the emergency grain proclamation in Versailles to control hoarding."
        },
        { 
          id: 2, 
          action: lang === "zh" ? "宣告革命口号" : "Proclaim Revolutionary Slogan",
          title: lang === "zh" ? "饥饿市民的呐喊" : "The Cry of Starving Citizens",
          body: lang === "zh" ? "民间私运猖獗，官方法令失效，饥民在巴黎街头集结发出‘给我面包！’的革命怒吼。" : "With price caps failing, famished citizens gathered in Paris streets screaming 'DU PAIN!'."
        },
        { 
          id: 3, 
          action: lang === "zh" ? "加盖御前防务官印" : "Stamp Royal Seal & Signature",
          title: lang === "zh" ? "御前敕令与军队警戒" : "Royal Order & Military Alert",
          body: lang === "zh" ? "路易十六加印防务调令，调遣雇佣军进入巴黎周边，反倒加剧了全城的恐慌与敌意。" : "Louis XVI stamped the mobilization order, moving mercenary regiments, which further angered the public."
        }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "面包价格与工薪对比" : "Bread Prices vs Workers Daily Wages",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "测算物价常态" : "Measure Normal Price Baseline",
          title: lang === "zh" ? "常态时期的民生平衡" : "Normal Period Income Balance",
          body: lang === "zh" ? "在正常年份，巴黎日雇工购买两磅面包仅花费其工薪的30%左右，仍有空间购置柴火、衣物。" : "In normal years, a Paris day-laborer spent just 30% of their wage on bread, leaving room for fuel and clothing."
        },
        { 
          id: 2, 
          action: lang === "zh" ? "对比恶性通胀曲线" : "Plot Inflation Curve",
          title: lang === "zh" ? "1789恶性通胀爆发" : "The Extreme Inflation of 1789",
          body: lang === "zh" ? "至1789年7月，巴黎面包价格暴涨至14.5苏（Sous），占劳动者日平均工薪的85%以上。" : "By July 1789, the price of bread surged to 14.5 sous, consuming over 85% of a laborer's daily earnings."
        },
        { 
          id: 3, 
          action: lang === "zh" ? "触发绝对生存赤字" : "Trigger Absolute Deficit",
          title: lang === "zh" ? "饥饿跨越生存警戒线" : "Absolute Insufficiency & Starvation",
          body: lang === "zh" ? "扣除面包花费后，每日余额仅剩0.5苏，连交纳房租或购买煤炭都不足，饥饿推动暴动爆发。" : "With only 0.5 sous left, families starved, unable to afford shelter or coal. Starvation drove the crowds to take arms."
        }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "三阶段饥荒暴动进程" : "3-Stage Famine Escalation Stages",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "分析1788极端天灾" : "Trace 1788 Climatic Inflict",
          title: lang === "zh" ? "第一阶段：冰雹与运河封冻" : "Stage I: Hailstorms & Frozen Mills",
          body: lang === "zh" ? "1788年夏季毁灭性的冰雹毁去大片麦田，冬季极寒使运粮河道封冻，碾磨面粉的水磨坊完全停工。" : "Devastating hailstorms ruined wheat crops in July 1788, followed by a freezing winter that stopped flour-grinding watermills."
        },
        { 
          id: 2, 
          action: lang === "zh" ? "锁定粮市抢购冲突" : "Lock Urban Bread Riots",
          title: lang === "zh" ? "第二阶段：城市抢购与劫掠粮车" : "Stage II: Market Panic & Pillage",
          body: lang === "zh" ? "面粉短缺引起空前恐慌。面包店遭到围攻，巴黎郊区出现武装市民拦截抢夺运粮马车事件。" : "Absolute flour deficits caused massive panic. Bakeries were raided, and crowds seized grain wagons on trade routes."
        },
        { 
          id: 3, 
          action: lang === "zh" ? "引爆攻占巴士底狱" : "Unleash Armed Rebellion",
          title: lang === "zh" ? "第三阶段：劫掠圣拉扎尔与夺取武装" : "Stage III: Insurrection & Bastille Stormed",
          body: lang === "zh" ? "民众冲击圣拉扎尔修道院夺取52车面粉，随后攻占巴士底狱夺取火药，市民革命彻底爆发。" : "Mobs plundered Saint-Lazare monastery for flour, then stormed the Bastille to secure weapons, starting the revolution."
        }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "四大防区面粉账目" : "Defensive Sector Flour Ledgers",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "审计巴黎中心粮仓" : "Audit Paris Central Stock",
          title: lang === "zh" ? "巴黎防区面粉储量告急" : "Paris Central Flour Depot Deficit",
          body: lang === "zh" ? "审计表明巴黎中心区谷物储量濒临干涸，周转天数不足，暴乱危险指数已达到‘极高’红色级别。" : "Auditing shows Paris Central granary is nearly empty. The local rebellion risk rating has spiked to 'CRITICAL'."
        },
        { 
          id: 2, 
          action: lang === "zh" ? "核对鲁昂及凡尔赛防务" : "Verify Royal & Port Defenses",
          title: lang === "zh" ? "凡尔赛禁内戒备与鲁昂转运" : "Versailles Security & Rouen Transit",
          body: lang === "zh" ? "凡尔赛宫廷囤积充沛并由国王禁卫军重兵把守；鲁昂港中转仓存粮见底，粮车在运送途中多次遭截。" : "Versailles holds rich reserves guarded by the Royal Regiment, while Rouen port grain is low and subject to ambushes."
        },
        { 
          id: 3, 
          action: lang === "zh" ? "盘点里昂防区与军备" : "Inspect Lyon Depot & Guard",
          title: lang === "zh" ? "里昂商道围攻与全线动员" : "Lyon Squeeze & General Mobilization",
          body: lang === "zh" ? "里昂面粉行仓储量不足，爆发零星罢市。朝廷调集雇佣军防卫粮仓，使全法主要行省防线战云密布。" : "Lyon warehouse suffers scarcity leading to strikes. Mercenary regiments mobilize, putting defensive sectors on high alert."
        }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "全法面粉存量与通胀总账" : "National Flour Inventory & Inflation Balance",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "审阅省际特别审计" : "Review Provincial Audit",
          title: lang === "zh" ? "主要省份面粉存粮特别审计" : "Reserves & Metrics of Five Regions",
          body: lang === "zh" ? "特别粮食署汇总五大省份存粮。受天灾及道路阻断影响，北方小麦颗粒无收，仓储常数降至历史冰点。" : "Special Food Committee aggregates grain records. Northern failure has dropped regional stock metrics to absolute zero."
        },
        { 
          id: 2, 
          action: lang === "zh" ? "展现全国亏空及配给制" : "Display Total Deficit & Rationing",
          title: lang === "zh" ? "全国粮食总亏空与紧急限购" : "National Deficit & Emergency Card Limits",
          body: lang === "zh" ? "全国城市面粉平均缺口逼近-68.4%。议会强制印发红白配给券（Cartes de ration），严格限制面包倾售。" : "The average urban deficit surged to -68.4%. The Assembly issued emergency ration cards, severely limiting daily purchases."
        },
        { 
          id: 3, 
          action: lang === "zh" ? "加盖国民议会粮食委员会之印" : "Stamp National Assembly Seal",
          title: lang === "zh" ? "救济公债签呈与议会朱印" : "Assembly Bill & Red-Blue Ink Endorsement",
          body: lang === "zh" ? "国民议会粮食委员会召开紧急联席会议，加盖‘国民议会之印’，强行签发免税粮食公债采购海外麦粉。" : "The Food Committee stamped the decree, forcing the issue of grain bonds to import foreign wheat to freeze prices."
        }
      ]
    }
  ]
});

export default function Style18({ scene, beat, language, onNavigate, isThumbnail }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];

  // translateY calculation:
  // scene 1 -> 0%
  // scene 2 -> -20%
  // scene 3 -> -40%
  // scene 4 -> -60%
  // scene 5 -> -80%
  const translateYVal = -(scene - 1) * 20;

  return (
    <div className="w-full h-full overflow-hidden bg-[#FFFEFE] text-[#3c0f0f] relative font-serif flex flex-row">
      
      {/* 4. Bespoke Navigation: Vertical SVG bread inflation thermometer gauge on the left margin */}
      {!isThumbnail && onNavigate && (
        <div className="w-[11cqw] h-full border-r border-[#3c0f0f]/15 flex flex-col items-center justify-between py-[4cqh] px-[1cqw] bg-[#FFFDFC] z-20 relative select-none">
          {/* Gauge header */}
          <div className="text-center">
            <span className="font-sans text-[0.85cqw] font-black uppercase tracking-widest text-[#a82323] block leading-none">
              GAUGE
            </span>
            <span className="font-serif italic text-[0.7cqw] text-[#3c0f0f]/60 block mt-[0.3cqh]">
              Bread Inflation
            </span>
          </div>

          {/* SVG Thermometer */}
          <div className="flex-1 w-full relative flex items-center justify-center my-[2cqh]">
            {/* Thermometer scale markers on left */}
            <div className="absolute right-[6cqw] h-full flex flex-col justify-between text-right font-mono text-[0.75cqw] py-[1cqh] text-[#3c0f0f]/70">
              <span>CRITICAL</span>
              <span>EXTREME</span>
              <span>HIGH</span>
              <span>MODERATE</span>
              <span>NORMAL</span>
            </div>

            {/* Vertical Thermometer SVG */}
            <svg viewBox="0 0 40 200" className="w-[4cqw] h-full">
              {/* Thermometer Glass Tube Outer */}
              <rect x="16" y="10" width="8" height="150" rx="4" fill="#e8dfd3" stroke="#3c0f0f" strokeWidth="1" />
              {/* Thermometer Bulb at bottom */}
              <circle cx="20" cy="165" r="12" fill="#a82323" stroke="#3c0f0f" strokeWidth="1.2" />
              {/* Mercury Glass Tube Inner Highlight */}
              <rect x="18" y="12" width="4" height="146" rx="2" fill="#fcf9f2" />

              {/* Mercury level based on scene */}
              {(() => {
                const heights = [20, 50, 80, 110, 140];
                const activeHeight = heights[scene - 1] || 20;
                return (
                  <>
                    {/* Red active mercury column */}
                    <rect 
                      x="17.5" 
                      y={165 - activeHeight} 
                      width="5" 
                      height={activeHeight} 
                      fill="#a82323" 
                      style={{ transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)" }}
                    />
                    {/* Indicator pointer needle on right */}
                    <polygon 
                      points={`28,${165 - activeHeight} 35,${165 - activeHeight - 4} 35,${165 - activeHeight + 4}`} 
                      fill="#a82323" 
                      stroke="#3c0f0f" 
                      strokeWidth="0.5"
                      style={{ transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)" }}
                    />
                  </>
                );
              })()}
            </svg>

            {/* Scale Nodes (interactable buttons placed absolutely over the SVG) */}
            {[
              { s: 5, label: "Critical", y: "12.5%", zh: "S5: 饥荒总账", en: "S5: Famine Ledger", bullets: ["• Audit of 5 major regions / 五省粮食特别审计", "• National Assembly seal / 国民议会加盖蓝红印印章", "• Emergency deficit table / 极高密度危机账目册"] },
              { s: 4, label: "Extreme", y: "30%", zh: "S4: 区域粮仓", en: "S4: Flour Depots", bullets: ["• 2x2 regional comparison / 2x2粮区数据矩阵", "• Garrison Swiss guards / 瑞士雇佣兵防卫部署", "• Depots stock level alerts / 面粉周转天数极低警戒"] },
              { s: 3, label: "High", y: "47.5%", zh: "S3: 暴动进程", en: "S3: Riot Escalation", bullets: ["• 3-stage weather to riot / 三阶段灾荒及冲突进程", "• July 1789 escalation / 巴黎动荡时间线", "• Crimson active indicators / 活跃阶段血红边框高亮"] },
              { s: 2, label: "Moderate", y: "65%", zh: "S2: 工资与面包", en: "S2: Wage vs. Bread", bullets: ["• Unbalanced panel layout / 非对称民生双面板", "• Loaf inflation curve (SVG) / 四磅面包价格狂飙线", "• Laborer daily wage freeze / 日雇工薪资停滞与耗尽"] },
              { s: 1, label: "Normal", y: "82.5%", zh: "S1: 议会敕令", en: "S1: Public Decree", bullets: ["• Proclamation cover / 皇家粮食分配敕令封面", "• Spacious layout margins / 极简大白宣读空间", "• Woodblock slogan / 红色‘DU PAIN!/给我面包！’"] }
            ].map((node) => {
              const isActive = scene === node.s;
              return (
                <div 
                  key={node.s}
                  className="absolute left-[5.5cqw] group"
                  style={{ top: node.y, transform: "translateY(-50%)" }}
                >
                  {/* Clickable Circle Node */}
                  <button
                    onClick={() => onNavigate(node.s, 0)}
                    className={`w-[1.2cqw] h-[1.2cqw] rounded-full border-2 transition-all flex items-center justify-center ${
                      isActive 
                        ? "bg-[#a82323] border-[#3c0f0f] scale-125 shadow-[0_0_8px_rgba(168,35,35,0.5)]" 
                        : "bg-[#FFFDFC] border-[#3c0f0f]/40 hover:border-[#a82323] hover:scale-110"
                    }`}
                  >
                    {isActive && <div className="w-[0.4cqw] h-[0.4cqw] rounded-full bg-[#FFFDFC]" />}
                  </button>

                  {/* Hover Tooltip Label */}
                  <div className="absolute left-[2cqw] top-1/2 -translate-y-1/2 hidden group-hover:block bg-[#FFFDFC] border-2 border-[#3c0f0f] p-[1cqw] rounded shadow-[3px_3px_0px_rgba(60,15,15,0.15)] z-30 w-[18cqw] pointer-events-none transition-all duration-300">
                    <div className="font-serif font-black text-[0.9cqw] text-[#a82323] border-b border-[#3c0f0f]/15 pb-[0.4cqh] mb-[0.6cqh]">
                      {language === "zh" ? node.zh : node.en}
                    </div>
                    <ul className="flex flex-col gap-[0.4cqh]">
                      {node.bullets.map((b, idx) => (
                        <li key={idx} className="text-[0.75cqw] leading-[1.3] text-[#3c0f0f] font-serif list-none">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicator text at bottom */}
          <div className="text-center border-t border-[#3c0f0f]/10 pt-[0.8cqh] w-full">
            <span className="font-mono text-[0.65cqw] text-[#3c0f0f]/60 uppercase tracking-tight block">
              STATE STATUS
            </span>
            <span className={`font-serif font-black text-[0.8cqw] uppercase block mt-[0.2cqh] ${
              scene === 5 ? "text-[#a82323] animate-pulse" : "text-[#3c0f0f]"
            }`}>
              {scene === 1 && (language === "zh" ? "秩序" : "ORDER")}
              {scene === 2 && (language === "zh" ? "不均" : "INEQUALITY")}
              {scene === 3 && (language === "zh" ? "骚乱" : "RIOTS")}
              {scene === 4 && (language === "zh" ? "危急" : "EMERGENCY")}
              {scene === 5 && (language === "zh" ? "革命暴动" : "INSURRECTION")}
            </span>
          </div>
        </div>
      )}

      {/* Main Track container for V-Slide */}
      <div className="flex-1 h-full overflow-hidden relative">
        <div 
          className="flex flex-col h-[500%] w-full"
          style={{
            transform: `translateY(${translateYVal}%)`,
            transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          {/* SCENE 1: General Assembly decree cover (Ultralight) */}
          <div className="w-full h-[20%] relative flex flex-col justify-between p-[4cqw] bg-[#FFFDFC]">
            {/* Distressed margin ruler lines */}
            <div className="absolute inset-[1.5cqw] border-4 border-double border-[#3c0f0f]/40 pointer-events-none" />
            
            {/* Header section */}
            <div className="w-full flex justify-between items-start z-10">
              <span className="font-mono text-[0.8cqw] text-[#3c0f0f]/50 uppercase tracking-widest">
                ARCHIVE NATIONAL N.01 / 国家第一号档案
              </span>
              <span className="font-serif italic text-[0.95cqw] text-[#3c0f0f]/70 font-bold">
                Versailles, 1789
              </span>
            </div>

            {/* Central focused decree content */}
            <div className="flex-1 flex flex-col items-center justify-center text-center px-[3cqw] z-10 max-w-[60cqw] mx-auto">
              <span className="font-serif italic text-[1.2cqw] text-[#a82323] font-bold tracking-widest block uppercase mb-[1.5cqh]">
                {language === "zh" ? "👑 法兰西王国御前特别公报" : "👑 ARRÊT DU CONSEIL D'ÉTAT DU ROI"}
              </span>
              <h1 className="text-[2.6cqw] leading-[1.1] font-black tracking-tight font-serif uppercase text-[#3c0f0f] border-b-2 border-[#3c0f0f]/15 pb-[1.5cqh] mb-[2cqh] w-full">
                {language === "zh" 
                  ? "国王御前粮食分配与严禁囤积之紧急敕令" 
                  : "PROCLAMATION DE SA MAJESTÉ SUR LA DISTRIBUTION DES GRAINS"}
              </h1>
              
              {/* Bilingual Decree text */}
              <div className="flex flex-col gap-[1cqh] max-w-[50cqw] mb-[3cqh]">
                <p className="text-[1.05cqw] leading-[1.4] text-[#3c0f0f]/80 italic">
                  "Considering the severe deficit of flour reserves across the provinces, hoarding of grain is strictly prohibited."
                </p>
                <p className="text-[0.95cqw] leading-[1.4] text-[#3c0f0f]/70 font-serif font-medium">
                  「鉴于全国面粉及谷物储量出现严重短缺，特令禁止囤积、居奇谷物，违者重惩，旨在平息暴乱。」
                </p>
              </div>

              {/* Woodblock Stenciled Slogan - Beat 1 Trigger */}
              <div 
                className={`relative py-[1cqh] px-[3cqw] border-y-2 border-dashed border-[#a82323] my-[1cqh] transition-all duration-1000 ${
                  beat >= 1 ? "opacity-100 scale-100 filter-none" : "opacity-0 scale-90 pointer-events-none"
                }`}
              >
                <div className="absolute inset-0 bg-[#a82323]/5 pointer-events-none" />
                <span className="font-serif font-black tracking-widest text-[#a82323] text-[3.8cqw] uppercase block leading-none select-none">
                  DU PAIN! / 给我面包！
                </span>
                <span className="font-sans text-[0.8cqw] tracking-widest text-[#a82323]/80 uppercase block mt-[0.5cqh] font-bold">
                  Slogan of the Famished Citizenry / 饥饿民众的革命吼声
                </span>
              </div>
            </div>

            {/* Bottom section with King's signatures - Beat 2 Trigger */}
            <div className="w-full flex justify-between items-end border-t border-[#3c0f0f]/15 pt-[1.5cqh] z-10">
              <div className="text-left font-serif text-[0.8cqw] text-[#3c0f0f]/60 italic">
                Published by Royal Proclamation / 凡尔赛官方印发
              </div>
              
              <div className={`flex items-center gap-[1.5cqw] transition-all duration-1000 ${
                beat >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[2cqh] pointer-events-none"
              }`}>
                <svg viewBox="0 0 80 80" className="w-[4cqw] h-[4cqw] text-[#a82323]">
                  <circle cx="40" cy="40" r="36" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 1" />
                  <path d="M 28,52 L 28,40 C 28,36 32,32 40,30 C 48,32 52,36 52,40 L 52,52 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  <circle cx="40" cy="30" r="2.5" fill="currentColor" />
                  <text x="40" y="60" fontSize="5" textAnchor="middle" fontWeight="bold" letterSpacing="0.2">LOUIS XVI</text>
                </svg>
                <div className="text-right">
                  <span className="font-serif italic font-bold text-[1.1cqw] block text-[#3c0f0f]">
                    Louis XVI
                  </span>
                  <span className="font-mono text-[0.7cqw] text-[#3c0f0f]/50 block uppercase">
                    Roi de France et de Navarre / 法王签字
                  </span>
                </div>
              </div>
            </div>
          </div>


          {/* SCENE 2: Bread Price vs. Wages (Dual - Light) */}
          <div className="w-full h-[20%] relative flex flex-row p-[3cqw] bg-[#FFFDFC] gap-[2.5cqw]">
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] grid grid-cols-12 grid-rows-12 h-full w-full" style={{
              backgroundImage: "linear-gradient(#3c0f0f 1px, transparent 1px)",
              backgroundSize: "100% 3cqh"
            }} />

            {/* Left Panel: Bread price inflation curve (Non-symmetric, 62% width) */}
            <div className="w-[62%] h-full flex flex-col justify-between border-2 border-[#3c0f0f]/15 p-[1.5cqw] bg-[#FFFDFC]/80 rounded z-10 shadow-[3px_3px_12px_rgba(60,15,15,0.03)] relative">
              <div className="border-b border-[#3c0f0f]/15 pb-[0.8cqh] mb-[1cqh] flex justify-between items-center">
                <span className="font-serif font-black text-[1.1cqw] text-[#a82323] uppercase tracking-wide">
                  1. EXPONENTIAL INFLATION CURVE / 4磅面包物价恶性通胀线
                </span>
                <span className="font-mono text-[0.7cqw] text-[#3c0f0f]/50">
                  PARIS MARKET (1788-1789)
                </span>
              </div>

              {/* Chart Stage */}
              <div className="flex-1 w-full relative flex items-center justify-center my-[1cqh]">
                {/* Grid guidelines & Y-axis labels */}
                <div className="absolute inset-0 flex flex-col justify-between text-[#3c0f0f]/40 font-mono text-[0.75cqw] select-none py-[1cqh]">
                  {[16, 14, 12, 10, 8, 6, 4, 2].map((val) => (
                    <div key={val} className="w-full flex items-center justify-between border-b border-dashed border-[#3c0f0f]/10 pb-[0.2cqh]">
                      <span>{val} Sous</span>
                      <span className="opacity-0">.</span>
                    </div>
                  ))}
                </div>

                {/* SVG Curve Line Chart */}
                <svg viewBox="0 0 300 150" className="w-full h-full z-10 overflow-visible text-[#3c0f0f]">
                  <line x1="20" y1="120" x2="280" y2="120" stroke="#3c0f0f" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
                  <text x="25" y="115" fontSize="6.5" fill="#3c0f0f" opacity="0.6" className="font-serif italic">
                    1788 Normal Loaf Price / 四磅面包常态价: 4.0 Sous
                  </text>

                  {/* Famine crisis area shade on Beat 1 */}
                  {beat >= 1 && (
                    <path 
                      d="M 20,120 L 50,118 L 100,105 L 150,90 L 200,68 L 240,42 L 280,31 L 280,120 Z" 
                      fill="url(#famine-gradient)" 
                      opacity="0.25"
                      className="transition-all duration-1000"
                    />
                  )}

                  {/* Actual Inflation Curve */}
                  <path 
                    d="M 20,120 Q 80,114 140,100 T 240,56 T 280,31" 
                    fill="none" 
                    stroke={beat >= 1 ? "#a82323" : "#3c0f0f"} 
                    strokeWidth={beat >= 1 ? "3" : "1.8"} 
                    style={{ transition: "stroke 0.8s" }}
                  />

                  {/* Interactive Nodes and Data Dots */}
                  {[
                    { x: 20, y: 120, date: "Jan 1788", val: "4.0 s.", label: "Baseline / 正常" },
                    { x: 140, y: 100, date: "Oct 1788", val: "6.5 s.", label: "Shortage / 告急" },
                    { x: 200, y: 82, date: "Jan 1789", val: "9.0 s.", label: "Famine / 饥荒" },
                    { x: 280, y: 31, date: "Jul 1789", val: "14.5 s.", label: "Riot Peak / 极危" }
                  ].map((pt, i) => {
                    const isSpike = pt.x === 280;
                    return (
                      <g key={i} className={`transition-all duration-1000 ${beat >= 1 ? "opacity-100 scale-100" : "opacity-40"}`}>
                        <circle 
                          cx={pt.x} 
                          cy={pt.y} 
                          r={isSpike && beat >= 1 ? "5.5" : "3.5"} 
                          fill={isSpike && beat >= 1 ? "#a82323" : "#3c0f0f"} 
                          stroke="#FFFDFC" 
                          strokeWidth="1.5" 
                        />
                        <text x={pt.x - 10} y={pt.y - 12} fontSize="6" fontWeight="bold" className="font-mono">
                          {pt.val}
                        </text>
                        <text x={pt.x - 15} y={pt.y + 15} fontSize="5" opacity="0.7" className="font-serif italic">
                          {pt.date}
                        </text>
                      </g>
                    );
                  })}

                  <defs>
                    <linearGradient id="famine-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#a82323" />
                      <stop offset="100%" stopColor="#FFFDFC" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Chart footer */}
              <div className="flex justify-between items-center text-[0.72cqw] font-serif border-t border-[#3c0f0f]/10 pt-[0.6cqh] text-[#3c0f0f]/75 italic leading-tight">
                <span>* Historical grain index tracked by Municipal Censors.</span>
                <span>* 4磅面包价格（July 1789）飙升至巴黎历史最高值 14.5 Sous。</span>
              </div>
            </div>

            {/* Right Panel: Daily wage freeze and budget squeeze (Non-symmetric, 38% width) */}
            <div className="w-[38%] h-full flex flex-col justify-between border-2 border-[#3c0f0f]/15 p-[1.5cqw] bg-[#FFFDFC]/80 rounded z-10 shadow-[3px_3px_12px_rgba(60,15,15,0.03)] relative">
              <div className="border-b border-[#3c0f0f]/15 pb-[0.8cqh] mb-[1cqh]">
                <span className="font-serif font-black text-[1.1cqw] text-[#3c0f0f] uppercase tracking-wide block">
                  2. LABOR WAGE PARALYSIS / 雇工每日固定工薪
                </span>
                <span className="font-mono text-[0.7cqw] text-[#3c0f0f]/50 block mt-[0.2cqh]">
                  15.0 SOUS NOMINAL BASELINE
                </span>
              </div>

              {/* Salary explanation ledger content */}
              <div className="flex-1 flex flex-col justify-center gap-[1.5cqh] text-[0.95cqw] py-[1cqh]">
                <div className="relative">
                  <div className="flex justify-between font-serif font-black text-[0.9cqw] mb-[0.4cqh]">
                    <span>Nominal Daily Salary / 日平均薪资</span>
                    <span className="font-mono text-[#3c0f0f]">15.0 Sous</span>
                  </div>
                  {/* Wage bar */}
                  <div className="h-[2cqh] bg-[#e8dfd3] rounded border border-[#3c0f0f]/20 overflow-hidden relative">
                    <div className="h-full bg-[#3c0f0f]/60 w-full" />
                    {beat >= 1 && (
                      <div 
                        className="absolute left-0 top-0 h-full bg-[#a82323] transition-all duration-1200 animate-pulse" 
                        style={{ width: "96.6%" }}
                      />
                    )}
                  </div>
                  {beat >= 1 && (
                    <span className="absolute right-[1cqw] top-[3cqh] font-mono text-[0.7cqw] text-[#a82323] font-black tracking-tighter">
                      BREAD ABSORBS 96.6% OF WAGE / 面包开支占 96.6%
                    </span>
                  )}
                </div>

                {/* Bilingual statistical manifest */}
                <div className="border-t border-[#3c0f0f]/10 pt-[1cqh] flex flex-col gap-[0.8cqh] text-[0.8cqw] text-[#3c0f0f]/85">
                  <div className="flex justify-between font-mono">
                    <span>• Normal Bread Expense (1788)</span>
                    <span className="font-bold">26.6% (4.0s)</span>
                  </div>
                  <div className="flex justify-between font-mono text-[#a82323] font-bold">
                    <span>• Panic Bread Expense (Jul 1789)</span>
                    <span>96.6% (14.5s)</span>
                  </div>
                  <div className="flex justify-between font-mono border-t border-[#3c0f0f]/5 pt-[0.4cqh]">
                    <span>• Surplus for Shelter/Cloth/Fuel</span>
                    <span className={beat >= 1 ? "text-[#a82323] font-black" : "text-stone-500"}>
                      {beat >= 1 ? "0.5 Sous (Deficit)" : "11.0 Sous"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Extreme emergency alarm notice - Beat 2 Trigger */}
              <div 
                className={`border-t-2 border-double border-[#a82323] pt-[0.8cqh] transition-all duration-1000 ${
                  beat >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[2cqh] pointer-events-none"
                }`}
              >
                <span className="font-serif font-black text-[0.9cqw] text-[#a82323] uppercase block leading-none mb-[0.2cqh]">
                  ⚠️ CIVIL INSOLVENCY / 生存绝路警报
                </span>
                <p className="text-[0.72cqw] leading-[1.3] text-[#3c0f0f] italic">
                  With only 0.5 sous left, a Parisian family cannot purchase coal or candles. "No bread, no life." 
                  <span className="block mt-[0.2cqh] not-italic text-[#3c0f0f]/70 font-sans font-bold">
                    扣除面包后，每日盈余仅剩 0.5苏，全家无法购置煤炭、衣物或交纳房租。大范围暴乱无可避免。
                  </span>
                </p>
              </div>
            </div>
          </div>


          {/* SCENE 3: 3-Stage famine riot timeline (Process - Standard) */}
          <div className="w-full h-[20%] relative flex flex-col p-[3.5cqw] bg-[#FFFDFC] justify-between">
            <div className="absolute inset-[1.5cqw] border border-[#3c0f0f]/20 pointer-events-none" />
            <div className="absolute left-[5cqw] top-0 bottom-0 w-[1px] bg-[#a82323]/25 pointer-events-none" />

            {/* Section Header */}
            <div className="w-full flex justify-between items-center border-b border-[#3c0f0f]/15 pb-[1cqh] z-10">
              <span className="font-serif font-black text-[1.4cqw] uppercase tracking-wider text-[#a82323]">
                CHRONOLOGIE DU DÉSASTRE / 三阶段饥荒暴动进程
              </span>
              <span className="font-mono text-[0.85cqw] text-[#3c0f0f]/60 uppercase tracking-widest">
                STAGE ADVANCEMENT REPORT
              </span>
            </div>

            {/* 3-Stage horizontal block layout */}
            <div className="flex-1 flex flex-row gap-[1.5cqw] my-[2cqh] items-stretch z-10">
              {[
                {
                  step: "01",
                  title_en: "STAGE I: THE CLIMATIC INFLICT / 极寒天灾",
                  title_zh: "1788 冰雹摧毁麦田与冬日极寒",
                  desc_en: "Devastating hailstorms ruined 72% of wheat outputs in July 1788, followed by a brutal arctic winter that froze flour-grinding watermills solid.",
                  desc_zh: "1788年夏毁灭性冰雹摧毁全国多省庄稼，紧随其后的是1788-1789极寒冬，运河封冻导致水力磨坊全部停转，面粉供应自源头腰斩。",
                  bId: 0
                },
                {
                  step: "02",
                  title_en: "STAGE II: PANIC IN THE MARKETS / 抢购暴乱",
                  title_zh: "春季面粉暴涨与粮运马车被劫",
                  desc_en: "By spring 1789, absolute flour shortages triggered wild panic buying. Bakeries limited purchases, and desperate mobs pillaged grain wagons on country paths.",
                  desc_zh: "1789年春，面粉断绝使粮市爆发大规模恐慌抢购。面包限购导致千人排队而无果，饥民自发拦截并抢劫开往巴黎的运粮马车。",
                  bId: 1
                },
                {
                  step: "03",
                  title_en: "STAGE III: REVOLUTIONARY ERUPTION / 武装抗争",
                  title_zh: "冲击圣拉扎尔粮仓与攻占巴士底狱",
                  desc_en: "On July 13, mobs plundered 52 carts of flour from Saint-Lazare monastery. By July 14, armed citizens stormed the Bastille to secure arms to protect their food.",
                  desc_zh: "7月13日，暴动市民洗劫圣拉扎尔修道院强夺52车面粉。7月14日，为了获取武器保卫赖以存活的面包，民众起义并彻底攻占巴士底狱。",
                  bId: 2
                }
              ].map((item, idx) => {
                const isActive = beat === item.bId;
                const isPassed = beat > item.bId;
                return (
                  <div 
                    key={idx}
                    className={`flex-1 flex flex-col justify-between p-[1.2cqw] rounded transition-all duration-700 border-2 ${
                      isActive 
                        ? "bg-[#FFFDFC] border-[#a82323] shadow-[0_0_15px_rgba(168,35,35,0.25)] scale-[1.02] z-20" 
                        : isPassed 
                        ? "bg-[#FFFDFC]/40 border-[#3c0f0f]/15 opacity-60 filter grayscale-[30%] scale-100 z-10" 
                        : "bg-[#FFFDFC]/20 border-[#3c0f0f]/5 opacity-30 filter blur-[0.5px] scale-95 pointer-events-none z-0"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-[1cqh]">
                      <span className={`font-mono text-[1.8cqw] font-black leading-none ${
                        isActive ? "text-[#a82323]" : "text-[#3c0f0f]/40"
                      }`}>
                        {item.step}
                      </span>
                      {isActive && (
                        <span className="font-mono text-[0.65cqw] bg-[#a82323] text-[#FFFDFC] px-[0.6cqw] py-[0.1cqh] rounded uppercase tracking-widest animate-pulse">
                          ACTIVE STAGE
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="font-serif font-black text-[0.92cqw] text-[#3c0f0f] leading-tight block uppercase">
                        {item.title_en}
                      </h3>
                      <h4 className="font-serif font-bold text-[0.8cqw] text-[#a82323] mt-[0.3cqh] block">
                        {item.title_zh}
                      </h4>
                    </div>

                    <div className="flex-1 flex flex-col justify-center my-[1cqh] gap-[0.5cqh] border-y border-[#3c0f0f]/10 py-[0.8cqh]">
                      <p className="text-[0.78cqw] leading-[1.3] text-[#3c0f0f]/90 italic">
                        "{item.desc_en}"
                      </p>
                      <p className="text-[0.74cqw] leading-[1.3] text-[#3c0f0f]/75 font-sans font-medium">
                        {item.desc_zh}
                      </p>
                    </div>

                    <div className="h-[3cqh] w-full flex items-center justify-start opacity-70">
                      {item.bId === 0 && (
                        <svg viewBox="0 0 100 20" className="w-full h-full text-[#3c0f0f]">
                          <line x1="10" y1="10" x2="30" y2="10" stroke="currentColor" strokeWidth="1" />
                          <line x1="20" y1="2" x2="20" y2="18" stroke="currentColor" strokeWidth="1" />
                          <line x1="13" y1="3" x2="27" y2="17" stroke="currentColor" strokeWidth="1" />
                          <circle cx="20" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="0.8" />
                          <text x="40" y="13" fontSize="6" className="font-serif italic font-bold">FLOUR MILLS FROZEN</text>
                        </svg>
                      )}
                      {item.bId === 1 && (
                        <svg viewBox="0 0 100 20" className="w-full h-full text-[#a82323]">
                          <line x1="5" y1="12" x2="65" y2="12" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1" />
                          <circle cx="25" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1.2" />
                          <circle cx="45" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1.2" />
                          <path d="M 15,12 L 55,2" stroke="currentColor" strokeWidth="1.5" />
                          <text x="58" y="13" fontSize="6" className="font-serif italic font-bold text-[#3c0f0f]">GRAIN LOOTED</text>
                        </svg>
                      )}
                      {item.bId === 2 && (
                        <svg viewBox="0 0 100 20" className="w-full h-full text-[#a82323] animate-pulse">
                          <polygon points="10,18 20,4 30,18" fill="none" stroke="currentColor" strokeWidth="1.2" />
                          <line x1="15" y1="11" x2="45" y2="11" stroke="currentColor" strokeWidth="1.5" />
                          <circle cx="40" cy="11" r="3" fill="currentColor" />
                          <text x="48" y="13" fontSize="6.5" className="font-serif italic font-black">BASTILLE STORMED</text>
                        </svg>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stage analysis footer */}
            <div className="w-full flex justify-between items-center border-t border-[#3c0f0f]/15 pt-[0.8cqh] z-10 text-[0.72cqw] italic opacity-85">
              <span>* Timeline authorized by revolutionary archives of District of Cordeliers.</span>
              <span>* 凡尔赛与巴黎暴动闭环连线：当天灾化为绝对饥荒，政治诉求即与面包供给彻底绑定。</span>
            </div>
          </div>


          {/* SCENE 4: Regional Flour Inventory Grid (Matrix - Dense) */}
          <div className="w-full h-[20%] relative flex flex-row p-[3cqw] bg-[#FFFDFC] gap-[2.5cqw]">
            <div className="absolute inset-[1.5cqw] border border-[#3c0f0f]/15 pointer-events-none" />

            {/* Left Side: General description (Non-symmetric, 33% width) */}
            <div className="w-[33%] h-full flex flex-col justify-between border-r border-[#3c0f0f]/15 pr-[1.8cqw] z-10 select-none">
              <div>
                <span className="font-sans text-[0.85cqw] font-black uppercase tracking-widest text-[#a82323] block leading-none">
                  DEPOT CONTROL LEDGER
                </span>
                <h2 className="font-serif font-black text-[1.8cqw] leading-[1.2] text-[#3c0f0f] uppercase mt-[0.6cqh] border-b border-[#3c0f0f]/15 pb-[1cqh]">
                  FOUR REGIONAL DEPOTS / 四大防区粮册
                </h2>
                <p className="text-[0.82cqw] leading-[1.4] text-[#3c0f0f]/85 italic mt-[1.2cqh]">
                  An auditing matrix of essential grain warehouses surrounding the capital, detailing military defense coordinates versus local rebellion levels.
                </p>
                <p className="text-[0.78cqw] leading-[1.3] text-[#3c0f0f]/70 font-sans font-bold mt-[1cqh]">
                  巴黎外围四大主要面粉行仓之储量审计。加盖防务兵备调遣印证。
                </p>
              </div>

              {/* Status block info */}
              <div className="border-t border-[#3c0f0f]/10 pt-[1cqh] mt-[1.5cqh]">
                <div className="flex justify-between items-center text-[0.7cqw] font-mono mb-[0.4cqh]">
                  <span>SWISS GUARDS ACTIVE:</span>
                  <span className="font-bold text-[#a82323]">12,000 COMBATANTS</span>
                </div>
                <div className="flex justify-between items-center text-[0.7cqw] font-mono">
                  <span>TOTAL FLOUR STOCK:</span>
                  <span className="font-bold text-amber-700">19,200 BOISSEAUX</span>
                </div>
              </div>
            </div>

            {/* Right Side: 2x2 Matrix Cards (Non-symmetric, 67% width) */}
            <div className="w-[67%] h-full grid grid-cols-2 grid-rows-2 gap-[1.2cqw] z-10">
              {[
                {
                  id: "paris",
                  name_en: "SECTOR I: PARIS CENTRAL DEPOT / 巴黎中心粮仓",
                  stock: "2,400 boisseaux",
                  state: "CRITICAL SHORTAGE / 极度危急",
                  garrison: "Swiss Guard Infantry (Mercenary) / 瑞士雇佣兵团-防守",
                  riots: "RIOTING & LOOTING / 暴力抢购与劫夺中",
                  color: "#a82323",
                  alert: "CRITICAL",
                  highlightBeat: 0
                },
                {
                  id: "versailles",
                  name_en: "SECTOR II: VERSAILLES ROYAL DEPOT / 凡尔赛禁内粮行",
                  stock: "12,500 boisseaux",
                  state: "ABUNDANT RESERVES / 供给充沛",
                  garrison: "French Guards (Royal Regt.) / 国王近卫禁卫军-卫戍",
                  riots: "SECURED & NO SÉDITION / 宫廷秩序稳定-暂无骚乱",
                  color: "#315180",
                  alert: "SECURED",
                  highlightBeat: 1
                },
                {
                  id: "rouen",
                  name_en: "SECTOR III: ROUEN PORT HUB / 鲁昂港中转仓",
                  stock: "1,200 boisseaux",
                  state: "SEVERE DEFICIT / 严重告急",
                  garrison: "Local Gendarmerie Corps / 地方治安骑兵宪兵队-戒备",
                  riots: "HIGH THREAT OF AMBUSH / 运粮路卡遭高频伏击",
                  color: "#a82323",
                  alert: "HIGH",
                  highlightBeat: 1
                },
                {
                  id: "lyon",
                  name_en: "SECTOR IV: LYON CORRIDOR DEPOT / 里昂商埠面粉营",
                  stock: "3,100 boisseaux",
                  state: "DEFICIT LIMIT / 储蓄不足",
                  garrison: "City Garrison Militia / 里昂城卫戍守军-据守",
                  riots: "SCATTERED BREAD STRIKES / 零星面包罢市与骚乱",
                  color: "#d97706",
                  alert: "MODERATE",
                  highlightBeat: 2
                }
              ].map((card, i) => {
                const isFlashed = beat === card.highlightBeat || (beat === 2 && card.id === "paris");
                return (
                  <div 
                    key={card.id}
                    className={`p-[1cqw] rounded border-2 transition-all duration-700 flex flex-col justify-between ${
                      isFlashed 
                        ? "border-[#a82323] bg-[#a82323]/5 shadow-[0_0_12px_rgba(168,35,35,0.2)] scale-[1.01] z-20" 
                        : "border-[#3c0f0f]/15 bg-[#FFFDFC]/80 scale-100 z-10"
                    }`}
                  >
                    <div className="border-b border-[#3c0f0f]/10 pb-[0.4cqh] flex justify-between items-start">
                      <span className="font-serif font-black text-[0.8cqw] text-[#3c0f0f] leading-tight block uppercase">
                        {card.name_en}
                      </span>
                    </div>

                    <div className="flex-1 flex flex-col justify-center gap-[0.4cqh] py-[0.5cqh] font-mono text-[0.74cqw]">
                      <div className="flex justify-between">
                        <span className="text-[#3c0f0f]/60 font-serif">Flour Stock (Boiss.) / 面粉存量:</span>
                        <span className={`font-black ${
                          card.alert === "CRITICAL" || card.alert === "HIGH" ? "text-[#a82323]" : "text-[#3c0f0f]"
                        }`}>{card.stock}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-[#3c0f0f]/60 font-serif">Status Constant / 库存状态:</span>
                        <span className="font-bold">{card.state}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-[#3c0f0f]/60 font-serif">Defense garrison / 卫戍兵备:</span>
                        <span className="text-[#3c0f0f] font-medium truncate max-w-[20cqw]">{card.garrison}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-[#3c0f0f]/60 font-serif">Riot Scale / 冲突情况:</span>
                        <span className={`font-bold ${
                          card.alert === "CRITICAL" ? "text-[#a82323] animate-pulse" : card.alert === "HIGH" ? "text-[#a82323]" : "text-stone-600"
                        }`}>{card.riots}</span>
                      </div>
                    </div>

                    <div className="h-[0.3cqh] w-full rounded-full" style={{ backgroundColor: card.color }} />
                  </div>
                );
              })}
            </div>
          </div>


          {/* SCENE 5: National Famine Bureau Ledger (Ledger - Extreme) */}
          <div className="w-full h-[20%] relative flex flex-row p-[2.5cqw] bg-[#FFFDFC] gap-[2cqw]">
            <div className="absolute inset-[1.2cqw] border-4 border-double border-[#3c0f0f]/25 pointer-events-none" />

            {/* Famine Ledger Manifest Column (Non-symmetric, 73% width) */}
            <div className="w-[73%] h-full flex flex-col justify-between z-10">
              <div>
                <span className="font-mono text-[0.7cqw] text-[#3c0f0f]/50 uppercase tracking-widest block text-center mb-[0.2cqh]">
                  RAPPORT GÉNÉRAL DU COMITÉ DES SUBSISTANCES
                </span>
                <h1 className="font-serif font-black text-[1.4cqw] text-[#a82323] uppercase text-center border-b-2 border-[#3c0f0f] pb-[0.6cqh] tracking-tight leading-none mb-[1cqh]">
                  NATIONAL FAMINE AUDIT LEDGER / 全国面粉饥荒特别委员会总账
                </h1>
                
                {/* High Density Table */}
                <table className="w-full text-left text-[0.7cqw] border-collapse font-serif my-[0.5cqh]">
                  <thead>
                    <tr className="border-b-2 border-[#3c0f0f]/70 font-black text-[#a82323] uppercase">
                      <th className="py-[0.5cqh] w-[18cqw]">Province / 行省</th>
                      <th className="py-[0.5cqh] text-right">Stock (Boiss.) / 存量</th>
                      <th className="py-[0.5cqh] text-right text-[#3c0f0f]">Bread Price / 4磅价</th>
                      <th className="py-[0.5cqh] text-right">Riot Rate / 暴动频次</th>
                      <th className="py-[0.5cqh] text-right">Swiss Guards / 驻防数</th>
                      <th className="py-[0.5cqh] text-right">Security Index / 治安常数</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono text-[0.7cqw] text-[#3c0f0f]">
                    {[
                      { prov: "Île-de-France (Paris)", stock: "1,800 boiss. (Crit.)", price: "14.5 sous", riots: "42 riots/mo", guards: "6,200 combat.", sec: "CRITICAL / 危急", red: true },
                      { prov: "Orléanais (Orléans)", stock: "1,500 boiss. (Low)", price: "13.0 sous", riots: "12 riots/mo", guards: "1,200 combat.", sec: "HIGH THREAT / 高危", red: true },
                      { prov: "Normandie (Rouen)", stock: "1,100 boiss. (Low)", price: "12.0 sous", riots: "19 riots/mo", guards: "1,400 combat.", sec: "HIGH THREAT / 高危", red: true },
                      { prov: "Lyonnais (Lyon)", stock: "2,900 boiss. (Mod.)", price: "11.5 sous", riots: "15 riots/mo", guards: "2,500 combat.", sec: "MODERATE / 中危", red: false },
                      { prov: "Provence (Marseille)", stock: "4,200 boiss. (Reg.)", price: "10.5 sous", riots: "8 riots/mo", guards: "1,800 combat.", sec: "MODERATE / 中危", red: false }
                    ].map((row, idx) => {
                      const isRowVisible = beat >= 1 || idx < 2;
                      return (
                        <tr 
                          key={idx} 
                          className={`border-b border-[#3c0f0f]/10 transition-all duration-700 ${
                            isRowVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-1cqw] pointer-events-none"
                          }`}
                        >
                          <td className="py-[0.5cqh] font-serif font-bold text-[#3c0f0f]">
                            {row.prov}
                          </td>
                          <td className={`py-[0.5cqh] text-right font-bold ${row.red ? "text-[#a82323]" : "text-[#3c0f0f]"}`}>
                            {row.stock}
                          </td>
                          <td className="py-[0.5cqh] text-right text-[#a82323] font-black">
                            {row.price}
                          </td>
                          <td className="py-[0.5cqh] text-right">
                            {row.riots}
                          </td>
                          <td className="py-[0.5cqh] text-right font-medium">
                            {row.guards}
                          </td>
                          <td className={`py-[0.5cqh] text-right font-bold ${row.red ? "text-[#a82323]" : "text-stone-600"}`}>
                            {row.sec}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Statistical deficit notice at bottom of ledger */}
              <div className="border-t-2 border-double border-[#3c0f0f] pt-[0.8cqh] flex justify-between items-end">
                <div className="text-left font-serif text-[0.7cqw] text-[#3c0f0f]/75 italic max-w-[45cqw]">
                  "We report an absolute average deficit of -68.4% flour stocks in key urban areas, rendering rationing cards mandatory."
                  <span className="block not-italic font-sans font-black text-[#a82323] text-[0.72cqw] uppercase mt-[0.2cqh]">
                    全国大中城市面粉平均缺口达 -68.4%，紧急面粉配给券（Cartes de ration）在巴黎全面强制实施。
                  </span>
                </div>
                
                <div className="text-right border-l border-[#3c0f0f]/15 pl-[1.5cqw] font-serif">
                  <span className="font-sans text-[0.6cqw] font-black uppercase text-[#3c0f0f]/50 block leading-none">
                    ALERT RATING
                  </span>
                  <span className="font-mono text-[1.4cqw] font-black text-[#a82323] block leading-tight tracking-tighter">
                    INSURRECTION-V
                  </span>
                  <span className="font-serif italic text-[0.65cqw] text-[#3c0f0f]/60 block leading-none">
                    极高暴乱赤字警报
                  </span>
                </div>
              </div>
            </div>

            {/* National Assembly Ink Stamp Wax Column (Non-symmetric, 27% width) */}
            <div className="w-[27%] h-full flex flex-col justify-between items-center border-l border-[#3c0f0f]/15 pl-[1.5cqw] z-10 relative">
              <div className="text-center w-full">
                <span className="font-sans text-[0.75cqw] font-black uppercase tracking-widest text-[#315180] block leading-none">
                  ASSEMBLÉE NAT.
                </span>
                <span className="font-serif italic text-[0.65cqw] text-[#3c0f0f]/50 block mt-[0.2cqh]">
                  Validation Bureau
                </span>
              </div>

              {/* Seal Stamp Container - Beat 2 Trigger */}
              <div className="flex-1 w-full flex items-center justify-center relative">
                <div 
                  className={`w-[10cqw] h-[10cqw] rounded-full flex items-center justify-center transition-all duration-1000 ${
                    beat >= 2 
                      ? "opacity-95 scale-100 rotate-[15deg] filter drop-shadow-[2px_3px_5px_rgba(49,81,128,0.25)]" 
                      : "opacity-15 scale-90 rotate-0 pointer-events-none"
                  }`}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full text-[#315180]">
                    <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#a82323" strokeWidth="1" strokeDasharray="3 2" />
                    
                    <path d="M35,32 L65,32 L60,65 L50,78 L40,65 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
                    <line x1="50" y1="32" x2="50" y2="78" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1 1" />
                    
                    <text x="50" y="44" fontSize="7" textAnchor="middle" fontWeight="900" fontFamily="serif" fill="#a82323">LIBERTÉ</text>
                    <text x="50" y="54" fontSize="6.5" textAnchor="middle" fontWeight="900" fontFamily="serif" fill="currentColor">ÉGALITÉ</text>
                    <text x="50" y="63" fontSize="5.5" textAnchor="middle" fontWeight="900" fontFamily="serif" fill="#a82323">FRATERNITÉ</text>
                    
                    <path id="stamp-curve-path-5" d="M 12,50 A 38,38 0 1,1 88,50" fill="none" />
                    <text fontSize="5.2" fontWeight="bold" fontFamily="monospace" fill="currentColor">
                      <textPath href="#stamp-curve-path-5" startOffset="50%" textAnchor="middle">
                        COMMISSION DE SUBSISTANCE 1789
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>

              {/* Seal endorsement text */}
              <div className="text-center">
                <span className="font-serif italic font-bold text-[0.8cqw] text-[#3c0f0f] block leading-none">
                  Mirabeau
                </span>
                <span className="font-mono text-[0.6cqw] text-[#3c0f0f]/50 block uppercase mt-[0.1cqh]">
                  Assembly Censor / 议会代表签署
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
