import React from "react";

export const getMetadata = (lang) => ({
  id: "23",
  tier: "C",
  name: lang === "zh" ? "东印度香料货运航海清册" : "Spice Caravan Manifest",
  theme: lang === "zh" ? "荷兰东印度公司香料航海账册" : "Dutch East India VOC Spice Trade Ledgers",
  densityLabel: lang === "zh" ? "香料清册" : "Spice Cargo Ledger",
  colors: { bg: "bg-[#f1eee0]", ink: "text-[#1d2218]", panel: "border-[#caa684]" },
  typography: { header: "font-serif", body: "font-serif" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "巴达维亚至阿姆斯特丹航海日志" : "The Batavia to Amsterdam Voyage",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "登入船货明细" : "Register Cargo Manifest", 
          title: lang === "zh" ? "东印度香料货运总清册" : "VOC Spice Cargo Manifest", 
          body: lang === "zh" ? "“自巴达维亚起航，载运黑胡椒、肉豆蔻及丁香，直发阿姆斯特丹。”1685年春，荷兰东印度公司（VOC）货轮扬帆，拉开横跨三大洋之香料贸易序幕。" : "“Sailing from Batavia, loaded with black pepper, nutmeg, and cloves, bound for Amsterdam.” In the spring of 1685, the Dutch East India Company (VOC) fleet set sail, embarking on the oceanic spice run." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "估算海上损耗" : "Estimate Cargo Attrition", 
          title: lang === "zh" ? "狂风巨浪与货舱受潮损耗" : "Storm Damage & Cargo Spoilage", 
          body: lang === "zh" ? "途径好望角，遭遇滔天风暴。货舱海水倒灌导致生丝与茶叶受潮霉变，部分胡椒亦在颠簸中漏失，海上运力折损严重。" : "Enroute the Cape of Good Hope, fierce storms breached the hull. Sea water dampened silks and tea, while pepper bags leaked under heavy rolling, cutting transport yields." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "清算商馆岁入" : "Calculate Guilder Balance", 
          title: lang === "zh" ? "阿姆斯特丹十七人商会清算" : "The Heeren XVII Year-end Balance", 
          body: lang === "zh" ? "尽管损耗高昂，幸存香料在欧洲黑市奇货可居。售价飙升数倍，十七人商会（Heeren XVII）账房金币流溢，暴利足以抵消数艘沉船之重创。" : "Despite heavy cargo losses, surviving spices fetched exorbitant sums in Europe. With prices soaring, the Heeren XVII chamber booked immense gold coin profits, covering all lost ships." 
        }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "香料双壁：胡椒与肉豆蔻" : "Double Spices: Black Pepper vs Nutmeg",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "核算胡椒运量" : "Audit Pepper Weight", 
          title: lang === "zh" ? "黑胡椒：大宗贸易与低关税优势" : "Black Pepper: High Volume Cargo", 
          body: lang === "zh" ? "黑胡椒属于大宗民生香料，虽然单价较次，但运量极大。公司在巴达维亚实行强行统购，以低廉采购成本榨取阿姆斯特丹巨额金币。" : "Black Pepper was a high-volume staple. Although cheaper per pound, its scale was immense. VOC enforced monopolized buying in Batavia, squeezing huge profits in Amsterdam." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "核算豆蔻金值" : "Audit Nutmeg Value", 
          title: lang === "zh" ? "肉豆蔻与丁香：皇家奢侈极品" : "Nutmeg & Cloves: Royal Luxuries", 
          body: lang === "zh" ? "肉豆蔻仅产于班达群岛，极度稀缺。其金值堪比白银。作为贵族药用与防腐防霉之刚需，每磅关税虽高，但售价足以带来十倍之暴利。" : "Nutmeg was harvested only in Banda, making it rarer than silver. Crucial for preservation and elite medicine, its massive margins offset high customs taxes easily." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "校验贸易税率" : "Check Customs Tariff", 
          title: lang === "zh" ? "荷兰阿姆斯特丹海关税率对齐" : "Amsterdam Port Customs Levies", 
          body: lang === "zh" ? "核对两路货物的商税与运保费率。大宗胡椒课税10%，而奢侈豆蔻征收高达35%之帝国专卖特别税，多项开支均登入海关底账。" : "Auditing tariffs for both routes. Common pepper was taxed at 10%, while luxury nutmeg faced a 35% monopoly excise, both strictly logged in the port ledgers." 
        }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "香料货运三大里程节点" : "Three Checkpoints of the Spice Run",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "核发巴港通关" : "Issue Batavia Customs", 
          title: lang === "zh" ? "首阶段：巴达维亚商馆装船与通关" : "Stage I: Loading & Clearance at Batavia", 
          body: lang === "zh" ? "在爪哇巴达维亚港，奴隶与苦力将上千担香料装入柚木船舱，加盖爪哇总督大印。核对铅封，起航发往西欧。" : "At Java's Batavia port, coolies packed tons of spices into teak holds. Cargo was checked against ledgers, stamped by the Governor, and sealed for Europe." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "盘点开普敦损耗" : "Audit Cape Town Damage", 
          title: lang === "zh" ? "二阶段：好望角中途补给与货损清点" : "Stage II: Cape of Good Hope Supply & Damage", 
          body: lang === "zh" ? "货船停靠开普敦进行淡水补给。大班官（Supercargo）开启部分霉变货舱，剔除受潮坏死之胡椒，修正运单实重常数。" : "The fleet anchored at Cape Town for fresh water. The supercargo inspected wet holds, discarding rotted pepper and correcting weight sheets." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "加盖税印清关" : "Stamp Amsterdam Import", 
          title: lang === "zh" ? "三阶段：阿姆斯特丹海关清算与加税" : "Stage III: Amsterdam Customs & Import Stamps", 
          body: lang === "zh" ? "货轮驶入阿姆斯特丹港。关税官登船核验铅封，清点箱笼，加盖十七人商会红蜡关印，将巨额香料推向全欧交易所。" : "The fleet docked in Amsterdam. Customs checked seals, calculated weights, applied the red wax stamp of Heeren XVII, and released cargo to the exchange." 
        }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "货舱四大核心账目评估" : "Four Core Strata of VOC Ledger",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "精算货重标准" : "Check Weight Standards", 
          title: lang === "zh" ? "巴达维亚担（Picol）与荷兰磅折算" : "Batavia Picol to Dutch Pound conversion", 
          body: lang === "zh" ? "东方担（Picol）与欧洲磅重量折算易生欺诈，规定一担严格折合125荷兰磅，彻底杜绝货船大班私自克扣贸易差额之行径。" : "Converting Eastern Picols to European Pounds was a major source of fraud. Strict standard was set: 1 Picol equals 125 Dutch Pounds, stopping cargo skimming." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "盘点受潮系数" : "Audit Humidity Spoilage", 
          title: lang === "zh" ? "麦麻袋装胡椒受潮发霉系数控制" : "Damp Mold Attrition Allowances", 
          body: lang === "zh" ? "海运发霉率警戒红线定为8%。若遭遇恶劣暴风，受潮比例超过一成，船长及大班官将面临太政商会停发分红之严惩。" : "Cargo dampness loss cap was set at 8%. If moisture rot exceeded 10%, captains faced salary deductions and loss of spice dividend bonuses." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "精算汇率兑换" : "Resolve Guilder Currency", 
          title: lang === "zh" ? "西班牙双柱（Real）与盾汇率结算" : "Spanish Real to Dutch Guilder exchange", 
          body: lang === "zh" ? "在东方采购必须以西班牙银元（Spanish Real）支付。十七人商会定期精算双柱银元与盾（Guilder）之比，平抑白银波动成本。" : "Buying spices required Spanish silver Reales. VOC regularly hedged silver exchange rates against the Guilder to stabilize procurement margins." 
        }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "十七人商会香料货运总账" : "Heeren XVII Spice Trade Ledger",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "核准五大香料" : "Audit Five Spices", 
          title: lang === "zh" ? "五大主要香料贸易常数全面对决" : "Financial Constants of Five Major Spices", 
          body: lang === "zh" ? "盘点巴达维亚装船之五大香料（黑胡椒、肉豆蔻、丁香、肉桂、肉豆蔻皮）之重量、采购金值、荷兰售值及关税常数，暴利溢流阿姆斯特丹金库。" : "Auditing five key spices (Black Pepper, Nutmeg, Cloves, Cinnamon, Mace) on weight, buying price, Dutch selling price, and customs duties." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "加盖东印度公司蜡印" : "Stamp VOC Wax Seal", 
          title: lang === "zh" ? "航海货物总清册呈十七人商会御览" : "Voyage Manifest to Heeren XVII Chamber", 
          body: lang === "zh" ? "大班官亲自校验货物清单，呈荷兰十七人商会账房御览，加盖‘荷兰东印度公司(VOC)之红蜡火漆印’，宣告黄金时代之财富神话。" : "The Supercargo reviewed the final manifest, presented to the Heeren XVII treasury. Stamped with the VOC wax seal, it marked another rich cargo." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "拨付船员花红" : "Disburse Crew Bounties", 
          title: lang === "zh" ? "九死一生船员与水手海运奖赏签发" : "Crew and Sailors Danger Pay Bounties", 
          body: lang === "zh" ? "签发支付金币，对经历九死一生、越过风暴航线之船长、水手及火炮手拨付十万荷兰盾特种奖金，吸引全欧最强悍之海员戍边。" : "Issuing gold coin bonuses of 100,000 guilders to reward surviving sailors and gunners, securing the fiercest crews for the VOC fleet." 
        }
      ]
    }
  ]
});

export default function Style23({ scene, beat, language, isThumbnail }) {
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
      <div className="relative w-full h-full flex items-center justify-center border border-[#caa684] bg-[#f1eee0] rounded-[0.5cqw] overflow-hidden p-[1cqw] shadow-inner">
        {/* Accounting Ledger Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] grid grid-cols-12 grid-rows-12 h-full w-full" style={{
          backgroundImage: "linear-gradient(#1d2218 1px, transparent 1px)",
          backgroundSize: "100% 2.8cqh"
        }} />

        {/* Hand-inked double boarders */}
        <div className="absolute inset-[0.8cqw] border-2 border-[#b59e80] pointer-events-none" />
        <div className="absolute left-[3cqw] top-0 bottom-0 w-[1px] bg-[#a8442a] opacity-35 pointer-events-none" /> {/* Red margin line */}

        {scene === 1 && (
          <div className="relative flex flex-col items-center justify-center w-full h-full text-center p-[1.5cqw]">
            {/* VOC Logo Seal SVG */}
            <svg viewBox="0 0 120 120" className="w-[12cqw] h-[12cqw] text-[#1a2c16] opacity-85 mb-2">
              <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="3 2" />
              {/* Monogram letters VOC overlapping */}
              {/* V letter */}
              <path d="M 30,30 L 60,95 L 90,30" fill="none" stroke="currentColor" strokeWidth="3" />
              {/* O letter */}
              <circle cx="60" cy="55" r="16" fill="none" stroke="currentColor" strokeWidth="2.5" />
              {/* C letter */}
              <path d="M 68,42 A 16,16 0 1,0 68,68" fill="none" stroke="currentColor" strokeWidth="2.5" />
              {/* Small A above (signifying Amsterdam chamber) */}
              <text x="60" y="24" fontSize="12" textAnchor="middle" fontWeight="black" fontFamily="serif" fill="currentColor">A</text>
              <text x="60" y="112" fontSize="5.5" textAnchor="middle" fontWeight="bold" fill="#1d2218">VOC AMSTERDAM</text>
            </svg>
            <div className={`mt-[1cqh] font-serif italic text-[#6c543c] text-[1.1cqw] font-bold ${getBeatClass(1)}`}>
              The Official Seal of the United East India Company, Amsterdam Chamber.
            </div>
          </div>
        )}

        {scene === 2 && (
          <div className="flex flex-col justify-between h-full w-full p-[1cqw]">
            <div className="border-b border-[#caa684] pb-[0.5cqh] text-center">
              <span className="font-serif text-[1.1cqw] text-[#1c2e17] font-bold tracking-widest uppercase">VOC Cargo Profit Indices (1685)</span>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-[2cqh] my-2 text-[0.9cqw]">
              {/* Cargo comparison visual */}
              <div>
                <div className="flex justify-between font-serif mb-1 font-bold">
                  <span className="text-[#57412f]">Black Pepper Volume (Batavia Purchase)</span>
                  <span className="font-mono text-[#57412f]">2,500 Picols (100%)</span>
                </div>
                <div className="h-4 bg-[#ede2cf] rounded-sm border border-[#caa684] overflow-hidden">
                  <div className="h-full bg-[#6a7a58]" style={getScaleStyle(0, "100%")} />
                </div>
              </div>
              <div>
                <div className="flex justify-between font-serif mb-1 font-bold">
                  <span className="text-[#a03822] font-bold">Nutmeg Luxury Value (Amsterdam Sale)</span>
                  <span className="font-mono text-[#a03822] font-bold">12,500 Guilders (10x Profit)</span>
                </div>
                <div className="h-4 bg-[#ede2cf] rounded-sm border border-[#caa684] overflow-hidden">
                  <div className="h-full bg-[#a8442a]" style={getScaleStyle(1, "92%")} />
                </div>
              </div>
            </div>
            <div className={`text-center font-serif text-[0.8cqw] text-[#a03822] font-bold italic border-t border-[#dfd3be] pt-[0.8cqh] ${getBeatClass(2)}`}>
              Warning: Nutmeg customs tax is capped at 35% Guilder excise per Picol.
            </div>
          </div>
        )}

        {scene === 3 && (
          <div className="relative w-full h-full flex flex-col justify-between p-[1cqw]">
            <div className="flex justify-between items-center border-b border-[#caa684] pb-[0.5cqh]">
              <span className="font-serif text-[1.1cqw] text-[#1a2c16] uppercase tracking-wider font-bold">Chronology of the Maritime Cargo Run</span>
              <span className="font-mono text-[0.8cqw] text-[#6c543c]">VOC LEDGER • VOL. VIII</span>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-[1cqh] my-[1cqh]">
              <div className={`flex items-start gap-2.5 p-[0.6cqw] bg-[#faf6ee]/70 border border-[#caa684] rounded-sm ${getBeatClass(0)}`}>
                <span className="font-mono font-bold text-[#1a2c16] text-[0.9cqw] mt-0.5">[Port I]</span>
                <div>
                  <h4 className="font-bold text-[#1d2218] text-[0.95cqw] leading-none mb-1">Batavia Harbor Loading</h4>
                  <p className="text-[0.8cqw] text-[#6c543c] leading-tight">12,000 picol spices packed into teak holds, stamped by Governor General.</p>
                </div>
              </div>
              <div className={`flex items-start gap-2.5 p-[0.6cqw] bg-[#faf6ee]/70 border border-[#caa684] rounded-sm ${getBeatClass(1)}`}>
                <span className="font-mono font-bold text-[#1a2c16] text-[0.9cqw] mt-0.5">[Transit]</span>
                <div>
                  <h4 className="font-bold text-[#1d2218] text-[0.95cqw] leading-none mb-1">Cape of Good Hope Supply</h4>
                  <p className="text-[0.8cqw] text-[#6c543c] leading-tight">Inspect holding moisture levels, throwing out rotted pepper to correct weight margins.</p>
                </div>
              </div>
              <div className={`flex items-start gap-2.5 p-[0.6cqw] bg-[#faf6ee]/70 border border-[#1d2218]/40 rounded-sm ${getBeatClass(2)}`}>
                <span className="font-mono font-bold text-[#1a2c16] text-[0.9cqw] mt-0.5">[Customs]</span>
                <div>
                  <h4 className="font-bold text-[#1a2c16] text-[0.95cqw] leading-none mb-1">Amsterdam Tariff Excises</h4>
                  <p className="text-[0.8cqw] text-[#1a2c16] leading-tight">Verification of seals, stamping of Heeren XVII red wax, and release to merchants.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {scene === 4 && (
          <div className="grid grid-cols-2 grid-rows-2 gap-[1cqw] w-full h-full p-[0.5cqw]">
            <div className="border border-[#caa684] bg-[#faf6ee] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#1a2c16] border-b border-[#caa684] pb-[0.2cqh]">Sector I: Port Volume</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Java loading:</span><span className="text-emerald-800 font-bold">12,000 Picol</span></div>
                <div className="flex justify-between"><span>Damp losses limit:</span><span>8.0% Max</span></div>
                <div className="flex justify-between"><span>Cargo Security:</span><span className="text-emerald-700 font-bold">SECURE</span></div>
              </div>
            </div>
            <div className="border border-[#caa684] bg-[#faf6ee] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#1a2c16] border-b border-[#caa684] pb-[0.2cqh]">Sector II: Currency Exchange</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Spanish Silver Real:</span><span className="text-[#a03822] font-bold">8 Reales/piece</span></div>
                <div className="flex justify-between"><span>Guilder Hedge:</span><span className="text-emerald-700 font-bold">2.4 Guilders/Real</span></div>
                <div className="flex justify-between"><span>Sourcing Balance:</span><span>Silver Locked</span></div>
              </div>
            </div>
            <div className="border border-[#caa684] bg-[#faf6ee] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#1a2c16] border-b border-[#caa684] pb-[0.2cqh]">Sector III: Ship Attrition</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Vessels sent:</span><span>5 East Indiamen</span></div>
                <div className="flex justify-between"><span>Cape storms loss:</span><span className="text-red-700 font-bold">1 Ship lost</span></div>
                <div className="flex justify-between"><span>Crew Survival:</span><span className="text-emerald-700 font-bold">78% Safe</span></div>
              </div>
            </div>
            <div className="border border-[#caa684] bg-[#faf6ee] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#1a2c16] border-b border-[#caa684] pb-[0.2cqh]">Sector IV: Custom Excise</span>
              <div className="flex-1 flex flex-col justify-center gap-1 font-mono text-[0.8cqw] my-[0.5cqh]">
                <div className="flex justify-between"><span>Common Pepper:</span><span>10% Guilder tax</span></div>
                <div className="flex justify-between"><span>Luxury Nutmeg:</span><span className="text-red-700 font-bold">35% Mon. tax</span></div>
                <div className="flex justify-between"><span>Total Duty Billed:</span><span className="text-emerald-700 font-bold">14,200 Guild.</span></div>
              </div>
            </div>
          </div>
        )}

        {scene === 5 && (
          <div className="relative w-full h-full flex flex-col justify-between p-[0.8cqw] font-serif text-[#1d2218]">
            <div className="text-center font-bold text-[1cqw] uppercase tracking-widest border-b-2 border-[#1a2c16] pb-[0.2cqh] mb-[0.5cqh] text-[#1a2c16]">
              Vereenigde Oostindische Compagnie Scheeps-Ladinge (1685)
            </div>
            <div className="flex-1 flex flex-col justify-center my-[0.2cqw]">
              <table className="w-full text-left text-[0.78cqw] border-collapse font-serif">
                <thead>
                  <tr className="border-b border-[#1a2c16]/40 font-bold text-[#1a2c16]">
                    <th className="py-1">Cargo Spice Class</th>
                    <th className="py-1">Batavia Loading (Picols)</th>
                    <th className="py-1 text-right">Purchase (Reales)</th>
                    <th className="py-1 text-right">Excise duty</th>
                    <th className="py-1 text-right">Selling Price (Guild.)</th>
                  </tr>
                </thead>
                <tbody className="text-[#574635] font-mono text-[0.75cqw]">
                  <tr className={`border-b border-[#caa684]/40 ${getBeatClass(0)}`}>
                    <td className="py-1 font-serif font-bold italic">Zwarte Peper (Black Pepper)</td>
                    <td className="py-1">6,500 Picols (High)</td>
                    <td className="py-1 text-right">12,000 Real</td>
                    <td className="py-1 text-right">10% Guild.</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">32,500 Guild.</td>
                  </tr>
                  <tr className={`border-b border-[#caa684]/40 ${getBeatClass(0)}`}>
                    <td className="py-1 font-serif font-bold italic">Muskaat (Nutmeg)</td>
                    <td className="py-1">1,200 Picols (Rare)</td>
                    <td className="py-1 text-right">24,000 Real</td>
                    <td className="py-1 text-right text-red-700">35% Mon.</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">96,000 Guild.</td>
                  </tr>
                  <tr className={`border-b border-[#caa684]/40 ${getBeatClass(1)}`}>
                    <td className="py-1 font-serif font-bold italic text-[#1a2c16]">Nagelen (Cloves)</td>
                    <td className="py-1">1,500 Picols (Rare)</td>
                    <td className="py-1 text-right font-bold text-[#1d2218]">30,000 Real</td>
                    <td className="py-1 text-right text-red-700 font-bold">35% Mon.</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">120,000 Guild.</td>
                  </tr>
                  <tr className={`border-b border-[#caa684]/40 ${getBeatClass(1)}`}>
                    <td className="py-1 font-serif font-bold italic">Kaneel (Cinnamon)</td>
                    <td className="py-1">3,000 Picols (Reg.)</td>
                    <td className="py-1 text-right">9,000 Real</td>
                    <td className="py-1 text-right">15% Guild.</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">22,500 Guild.</td>
                  </tr>
                  <tr className={`${getBeatClass(2)}`}>
                    <td className="py-1 font-serif font-bold italic">Foelie (Mace)</td>
                    <td className="py-1">800 Picols (Rare)</td>
                    <td className="py-1 text-right">16,000 Real</td>
                    <td className="py-1 text-right text-red-700">30% Mon.</td>
                    <td className="py-1 text-right text-emerald-800 font-bold">48,000 Guild.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="border-t border-[#caa684] pt-1 text-[0.7cqw] text-[#70553d] italic text-center font-serif">
              Audit: Heeren XVII Kamer te Amsterdam, Admiraliteit der Vereenigde Oostindische Compagnie.
            </div>
          </div>
        )}

        {/* Traditional Blue-Red VOC Ink Wax Stamp (Stamps on Beat 1 for Scene 5) */}
        {scene === 5 && (
          <div className={`absolute bottom-[1.8cqw] right-[1.8cqw] w-[5cqw] h-[5cqw] transition-all duration-1000 ${beat >= 1 ? "opacity-85 scale-100 rotate-[-12deg]" : "opacity-15 scale-95 rotate-0"} pointer-events-none select-none text-[#1a2c16] drop-shadow-[1px_2px_4px_rgba(0,0,0,0.15)]`}>
            <svg viewBox="0 0 100 100" className="w-full h-full text-current">
              <circle cx="50" cy="50" r="44" fill="#a53825" stroke="#7d2010" strokeWidth="2.2" />
              <circle cx="50" cy="50" r="39" fill="none" stroke="#f6ddd8" strokeWidth="0.8" strokeDasharray="3 2" />
              {/* Overlapping VOC Monogram */}
              <g transform="translate(18 18) scale(0.65)" stroke="#f6ddd8" strokeWidth="2.5" fill="none">
                <path d="M 30,30 L 60,95 L 90,30" />
                <circle cx="60" cy="55" r="16" />
                <path d="M 68,42 A 16,16 0 1,0 68,68" />
                <text x="60" y="24" fontSize="11" textAnchor="middle" stroke="none" fill="#f6ddd8" fontWeight="black" fontFamily="serif">A</text>
              </g>
              <text x="50" y="84" fontSize="5.5" textAnchor="middle" fontWeight="black" fontFamily="monospace" fill="#f6ddd8" letterSpacing="0.5">HEEREN XVII</text>
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
          <span className="font-sans text-[1.2cqw] font-bold tracking-wider uppercase opacity-65 text-[#70553d] border-b border-[#caa684] pb-[0.5cqh] inline-block">
            {meta.theme}
          </span>
          <h1 className="text-[3.2cqw] leading-[1.1] font-black tracking-tight font-serif mt-[1cqh] text-[#1a2c16]">
            {currentBeat.title}
          </h1>
          <p className="text-[1.3cqw] leading-[1.4] opacity-95 font-serif mt-[1.5cqh] text-[#3c2a18]">
            {currentBeat.body}
          </p>
        </div>

        {/* Marginal Editorial Footnote */}
        <div className="flex flex-col gap-[0.5cqh] mt-[2cqh] border-t border-[#caa684] pt-[1cqh]">
          <div className="flex justify-between text-[0.8cqw] font-mono text-[#70553d]">
            <span>VOC COMP: AMSTERDAM CHAMBER</span>
            <span>CHRONO: AD 1685 CARGO SEALS</span>
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
