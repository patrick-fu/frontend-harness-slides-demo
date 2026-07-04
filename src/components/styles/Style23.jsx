import React from "react";

export const getMetadata = (lang) => ({
  id: "23",
  tier: "C",
  name: lang === "zh" ? "东印度香料货运航海清册" : "Spice Caravan Manifest",
  theme: lang === "zh" ? "荷兰东印度公司香料航海账册" : "Dutch East India VOC Spice Trade Ledgers",
  densityLabel: lang === "zh" ? "香料清册" : "Spice Cargo Ledger",
  colors: { bg: "bg-[#faf9f5]", ink: "text-[#1d2721]", panel: "border-[#caa684]" },
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

export default function Style23({ scene = 1, beat = 0, language = "en", onNavigate, isThumbnail = false }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];

  // Helper for conditional beat transitions
  const getBeatClass = (threshold) => {
    return beat >= threshold
      ? "opacity-100 translate-y-0 filter-none transition-all duration-[800ms] ease-out"
      : "opacity-0 translate-y-[2cqh] pointer-events-none transition-all duration-[800ms] ease-out";
  };

  const getScaleStyle = (threshold, targetPercent) => {
    const scale = beat >= threshold ? 1 : 0;
    return {
      width: targetPercent,
      transform: `scaleX(${scale})`,
      transformOrigin: "left",
      transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)"
    };
  };

  // Nav chests data
  const chestsData = [
    { id: 1, nameEn: "Peper", nameZh: "胡椒日志", spice: "Pepper" },
    { id: 2, nameEn: "Nagelen", nameZh: "双壁账册", spice: "Cloves" },
    { id: 3, nameEn: "Muskaat", nameZh: "航线里程", spice: "Nutmeg" },
    { id: 4, nameEn: "Foelie", nameZh: "四大特征", spice: "Mace" },
    { id: 5, nameEn: "Kaneel", nameZh: "货运总账", spice: "Cinnamon" },
  ];

  return (
    <div 
      className="relative w-full h-full bg-[#faf9f5] text-[#1d2721] overflow-hidden select-none font-serif" 
      style={{ containerType: "size" }}
    >
      {/* Dynamic styles injection for animations */}
      <style>{`
        @keyframes stamp {
          0% { transform: scale(2.8) rotate(20deg); opacity: 0; filter: blur(4px); }
          75% { transform: scale(0.9) rotate(-15deg); opacity: 0.95; filter: none; }
          100% { transform: scale(1) rotate(-8deg); opacity: 0.9; }
        }
        .animate-stamp {
          animation: stamp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .wood-cabinet {
          background: linear-gradient(135deg, #efebe0 0%, #e5dfcf 100%);
        }
        .paper-page {
          background-color: #faf9f5;
        }
        .ledger-grid {
          background-image: linear-gradient(#1d2721 1px, transparent 1px), linear-gradient(90deg, #1d2721 1px, transparent 1px);
          background-size: 8cqw 8cqw;
        }
      `}</style>

      {/* Subtle aged paper / parchment watermarks and lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] ledger-grid mix-blend-multiply" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Bookkeeper double borders */}
      <div className="absolute inset-[1.4cqw] border-2 border-[#caa684]/45 pointer-events-none rounded-[0.2cqw] z-10" />
      <div className="absolute inset-[1.6cqw] border border-[#caa684]/25 pointer-events-none rounded-[0.1cqw] z-10" />

      {/* Traditional red margin vertical ledger rules */}
      <div className="absolute left-[3.2cqw] top-0 bottom-0 w-[1px] bg-[#a34336] opacity-[0.22] pointer-events-none z-10" />
      <div className="absolute left-[3.4cqw] top-0 bottom-0 w-[1px] bg-[#a34336] opacity-[0.12] pointer-events-none z-10" />
      <div className="absolute right-[11.2cqw] top-0 bottom-0 w-[1px] bg-[#a34336] opacity-[0.2] pointer-events-none z-10" />

      {/* 
        Slide Viewport Container 
        Limits horizontal sliding to the left area, keeping the chest navigation fixed on the right.
      */}
      <div className="absolute left-[1.6cqw] top-[1.6cqw] bottom-[1.6cqw] right-[11.4cqw] overflow-hidden rounded-[0.1cqw]">
        <div
          className="flex w-[500%] h-full transition-transform"
          style={{
            transform: `translateX(-${(scene - 1) * 20}%)`,
            transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          {/* ========================================================= */}
          {/* SCENE 1: Maritime Trading Charter Cover (Premise - Ultralight) */}
          {/* ========================================================= */}
          <div className="w-[20%] h-full flex-shrink-0 relative px-[3.5cqw] py-[2.5cqh] flex flex-col justify-between overflow-hidden">
            {/* Elegant double-lined inner title border */}
            <div className="absolute inset-[2cqw] border border-[#caa684]/20 pointer-events-none" />

            {/* Header branding */}
            <div className="text-center z-10 mt-[1cqh]">
              <span className="block font-sans text-[0.8cqw] font-black tracking-[0.4cqw] text-[#70553d] uppercase opacity-75">
                Vereenigde Oostindische Compagnie
              </span>
              <span className="block text-[0.6cqw] font-mono text-[#a34336] uppercase tracking-[0.15cqw] mt-0.5 opacity-60">
                • Kamer te Amsterdam • Charter No. XVII-1685 •
              </span>
            </div>

            {/* Centerpiece: Beautiful detailed SVG of 17th-century East Indiaman ship */}
            <div className="flex-1 flex flex-col items-center justify-center z-10 my-[1cqh] relative">
              <svg viewBox="0 0 200 150" className="w-[24cqw] h-[24cqh] text-[#1d2721] filter drop-shadow-[2px_4px_6px_rgba(0,0,0,0.08)]">
                {/* Compass / Wind Rose grid behind ship */}
                <g transform="translate(155, 35) scale(0.65)" opacity="0.25">
                  <circle cx="0" cy="0" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 1" />
                  <line x1="-30" y1="0" x2="30" y2="0" stroke="currentColor" strokeWidth="0.4" />
                  <line x1="0" y1="-30" x2="0" y2="30" stroke="currentColor" strokeWidth="0.4" />
                  <path d="M -21,-21 L 21,21 M -21,21 L 21,-21" stroke="currentColor" strokeWidth="0.3" />
                  <polygon points="0,-24 4,-8 0,-3 -4,-8" fill="#a34336" />
                  <polygon points="0,24 4,8 0,3 -4,8" fill="currentColor" />
                  <polygon points="24,0 8,4 3,0 8,-4" fill="currentColor" />
                  <polygon points="-24,0 -8,4 -3,0 -8,-4" fill="currentColor" />
                  <text x="0" y="-27" fontSize="5" textAnchor="middle" fontWeight="bold">N</text>
                </g>

                {/* Storm Rain Lines for Beat 1 */}
                {beat === 1 && (
                  <g stroke="#1d2721" strokeWidth="0.3" opacity="0.3" strokeDasharray="3 3">
                    <line x1="20" y1="10" x2="5" y2="120" />
                    <line x1="60" y1="5" x2="45" y2="115" />
                    <line x1="100" y1="10" x2="85" y2="120" />
                    <line x1="140" y1="5" x2="125" y2="115" />
                    <line x1="180" y1="10" x2="165" y2="120" />
                  </g>
                )}

                {/* Ship Rigging & Mast lines */}
                <g stroke="currentColor" strokeWidth="0.4" opacity="0.75">
                  {/* Masts */}
                  <line x1="65" y1="110" x2="65" y2="25" strokeWidth="1.2" /> {/* Foremast */}
                  <line x1="105" y1="110" x2="105" y2="15" strokeWidth="1.5" /> {/* Mainmast */}
                  <line x1="142" y1="110" x2="142" y2="32" strokeWidth="1" /> {/* Mizzenmast */}
                  <line x1="142" y1="100" x2="168" y2="70" strokeWidth="0.8" /> {/* Bowsprit extension aft */}
                  <line x1="65" y1="95" x2="35" y2="55" /> {/* Bowsprit */}

                  {/* Shrouds and Rigging stays */}
                  <line x1="65" y1="30" x2="105" y2="50" />
                  <line x1="105" y1="20" x2="142" y2="45" />
                  <line x1="65" y1="50" x2="105" y2="15" />
                  <line x1="40" y1="75" x2="65" y2="25" />
                  <line x1="50" y1="110" x2="65" y2="30" />
                  <line x1="56" y1="110" x2="65" y2="55" />
                  <line x1="90" y1="110" x2="105" y2="20" />
                  <line x1="98" y1="110" x2="105" y2="50" />
                  <line x1="130" y1="110" x2="142" y2="35" />

                  {/* Sails Yardarms */}
                  <line x1="50" y1="35" x2="80" y2="33" strokeWidth="0.8" />
                  <line x1="45" y1="60" x2="85" y2="57" strokeWidth="0.8" />
                  <line x1="40" y1="88" x2="88" y2="84" strokeWidth="0.8" />

                  <line x1="88" y1="24" x2="122" y2="22" strokeWidth="1" />
                  <line x1="84" y1="50" x2="126" y2="47" strokeWidth="1" />
                  <line x1="80" y1="80" x2="130" y2="76" strokeWidth="1" />

                  <line x1="130" y1="42" x2="154" y2="40" strokeWidth="0.7" />
                  <line x1="126" y1="65" x2="158" y2="63" strokeWidth="0.7" />
                </g>

                {/* Billowing Sails (Foremast and Mainmast) */}
                <g fill="#faf6ee" stroke="currentColor" strokeWidth="0.8" opacity="0.9">
                  {/* Foremast Sails */}
                  {beat !== 1 ? (
                    <>
                      <path d="M 52,35 C 56,48 76,48 78,33 Q 65,37 52,35 Z" />
                      <path d="M 47,60 C 53,74 80,74 83,57 Q 65,61 47,60 Z" />
                      <path d="M 42,88 C 48,103 82,103 86,84 Q 64,89 42,88 Z" fill="#faf6ee" />
                    </>
                  ) : (
                    /* Furl sails slightly in storms */
                    <>
                      <path d="M 54,35 Q 65,40 76,33 Q 65,36 54,35 Z" fill="#e5dfcf" />
                      <path d="M 49,60 C 53,68 76,68 81,57 Q 65,59 49,60 Z" fill="#e5dfcf" />
                      <path d="M 44,88 C 48,95 78,95 84,84 Q 64,86 44,88 Z" fill="#e5dfcf" />
                    </>
                  )}

                  {/* Mainmast Sails - Embossed with VOC Seal Monogram */}
                  {beat !== 1 ? (
                    <>
                      <path d="M 90,24 C 94,37 116,37 120,22 Q 105,25 90,24 Z" />
                      <path id="mainsail" d="M 86,50 C 92,66 118,66 124,47 Q 105,51 86,50 Z" />
                      <path d="M 82,80 C 90,98 120,98 128,76 Q 105,82 82,80 Z" />
                    </>
                  ) : (
                    <>
                      <path d="M 92,24 Q 105,28 118,22 Q 105,24 92,24 Z" fill="#e5dfcf" />
                      <path d="M 88,50 C 92,58 114,58 122,47 Q 105,49 88,50 Z" fill="#e5dfcf" />
                      <path d="M 84,80 C 88,88 116,88 126,76 Q 105,78 84,80 Z" fill="#e5dfcf" />
                    </>
                  )}

                  {/* Mizzen Lateen Sail */}
                  <path d="M 132,42 L 152,40 L 134,85 Z" />
                </g>

                {/* VOC Monogram printed on Main Sail (only when sails are full in calm weather) */}
                {beat !== 1 && (
                  <g transform="translate(100, 52) scale(0.1)" fill="#1d2721" opacity="0.75" stroke="none">
                    <path d="M 10,10 L 30,55 L 50,10" stroke="#1d2721" strokeWidth="4.5" fill="none" />
                    <circle cx="30" cy="27" r="10" stroke="#1d2721" strokeWidth="3.5" fill="none" />
                    <path d="M 36,18 A 10,10 0 1,0 36,36" stroke="#1d2721" strokeWidth="3.5" fill="none" />
                    <text x="30" y="7" fontSize="10" textAnchor="middle" fontWeight="900" fontFamily="serif" fill="#1d2721">A</text>
                  </g>
                )}

                {/* Heavy Hull of the East Indiaman (Galleon) */}
                <path d="M 34,95 L 42,88 L 65,85 L 140,85 L 148,80 L 155,80 L 153,92 L 146,108 L 138,112 L 65,112 Q 45,111 34,95 Z" fill="#4a3525" stroke="currentColor" strokeWidth="1" />
                <path d="M 140,85 L 143,105 L 135,108 Z" fill="#2c1a0c" opacity="0.3" /> {/* Sterncastle shadow */}

                {/* Hull Stripes, Gun Ports, and Stern details */}
                <g stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.8">
                  {/* Planking lines */}
                  <path d="M 40,93 Q 90,95 146,93" />
                  <path d="M 44,98 Q 90,101 144,98" strokeWidth="0.8" />
                  <path d="M 50,103 Q 90,106 140,103" />

                  {/* Stern Windows */}
                  <rect x="144" y="84" width="4" height="6" fill="#caa684" strokeWidth="0.4" />
                  <rect x="149" y="84" width="4" height="6" fill="#caa684" strokeWidth="0.4" />

                  {/* Gun Ports (Cannon Ports) along hull */}
                  <rect x="62" y="94" width="3" height="3" fill="#1d2721" />
                  <rect x="76" y="94" width="3" height="3" fill="#1d2721" />
                  <rect x="90" y="94" width="3" height="3" fill="#1d2721" />
                  <rect x="104" y="94" width="3" height="3" fill="#1d2721" />
                  <rect x="118" y="94" width="3" height="3" fill="#1d2721" />
                  <rect x="132" y="94" width="3" height="3" fill="#1d2721" />

                  {/* Anchor hanging at bow */}
                  <path d="M 40,98 Q 36,106 32,104" strokeWidth="0.8" strokeLinecap="round" />
                  <path d="M 30,102 Q 32,106 34,104" strokeWidth="1.2" strokeLinecap="round" />
                </g>

                {/* Sea Waves (Normal vs Jagged Stormy) */}
                {beat !== 1 ? (
                  <g stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.7">
                    <path d="M 5,116 Q 25,113 45,116 T 85,116 T 125,116 T 165,116 T 195,116" />
                    <path d="M 12,120 Q 32,118 52,120 T 92,120 T 132,120 T 172,120" strokeWidth="0.3" opacity="0.5" />
                    <path d="M 2,124 Q 22,122 42,124 T 82,124 T 122,124 T 162,124" strokeWidth="0.2" opacity="0.3" />
                  </g>
                ) : (
                  <g stroke="currentColor" strokeWidth="0.9" fill="none" opacity="0.9">
                    {/* High jagged storm crests */}
                    <path d="M 5,118 L 18,111 L 32,120 L 45,110 L 60,119 L 75,108 L 92,121 L 110,109 L 125,118 L 140,110 L 155,120 L 172,109 L 188,117 L 195,112" />
                    <path d="M 10,123 L 24,116 L 38,124 L 52,115 L 68,124 L 84,114 L 100,123 L 116,113 L 130,122 M 145,116 L 160,124 L 175,115 L 188,122" strokeWidth="0.5" opacity="0.6" />
                  </g>
                )}

                {/* Tiny Dutch flag flying at stern */}
                <path d="M 153,80 L 164,77 L 164,84 L 153,84 Z" fill="#caa684" stroke="currentColor" strokeWidth="0.3" opacity="0.8" />
                <line x1="153" y1="80" x2="153" y2="92" stroke="currentColor" strokeWidth="0.6" />
              </svg>
            </div>

            {/* Title & Charter Text (CJK/EN Inline) */}
            <div className="text-center z-10 mb-[1.5cqh]">
              <h2 className="font-serif text-[1.8cqw] font-black text-[#1d2721] tracking-tight uppercase leading-none">
                {currentBeat.title}
                <span className="block font-serif italic text-[1.1cqw] text-[#70553d] font-bold tracking-normal normal-case mt-1.5 opacity-85">
                  {scene === 1 && beat === 0 && "General Register of Maritime Commodity Shipments"}
                  {scene === 1 && beat === 1 && "Moisture Intrusion & Ship-Wreckage Auditing"}
                  {scene === 1 && beat === 2 && "The Grand Accounting of the Amsterdam Chamber"}
                </span>
              </h2>

              <p className="mt-[2.5cqh] max-w-[50cqw] mx-auto text-[1cqw] leading-relaxed text-[#3a352d] font-serif border-t border-b border-[#caa684]/20 py-[1.2cqh] px-[1cqw] paper-page shadow-sm rounded-sm">
                {currentBeat.body}
              </p>
            </div>

            {/* Ledger cover footnotes */}
            <div className="flex justify-between items-center text-[0.6cqw] font-mono text-[#70553d] opacity-75 border-t border-[#caa684]/25 pt-[1cqh] z-10">
              <span>LEDGER VOL. XVII • CARAVAN ROUTE</span>
              <span> Batavia ➔ Amsterdam • AD 1685</span>
              <span>HEEREN XVII DECREES</span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* SCENE 2: Pepper Exports vs. Nutmeg Imports (Dual - Light) */}
          {/* ========================================================= */}
          <div className="w-[20%] h-full flex-shrink-0 relative px-[2.5cqw] py-[2.2cqh] flex flex-col justify-between overflow-hidden">
            {/* Header section */}
            <div className="border-b border-[#caa684]/40 pb-[1cqh] mb-[1.5cqh] flex justify-between items-end">
              <div>
                <span className="block font-sans text-[0.65cqw] font-black text-[#70553d] tracking-widest uppercase">VOC PORT COMMODITY INDEX BALANCE SHEET</span>
                <h2 className="font-serif text-[1.4cqw] font-black text-[#1d2721]">
                  香料双壁：胡椒大宗与豆蔻特专 <span className="font-serif italic text-[1cqw] text-[#70553d] font-medium font-bold ml-1">Black Pepper Volume vs. Nutmeg Luxury</span>
                </h2>
              </div>
              <span className="font-mono text-[0.6cqw] text-[#a34336] border border-[#a34336]/30 px-1.5 py-0.5 rounded-sm bg-[#faf9f5]">AD 1685 JOURNAL</span>
            </div>

            {/* Non-symmetric bookkeeping sheets */}
            <div className="flex-1 flex gap-[2.5cqw] items-stretch my-[1.5cqh]">
              {/* Left Sheet: Sumatra Black Pepper (45% width) */}
              <div 
                className={`flex-[4.5] paper-page border border-[#caa684]/50 shadow-sm p-[1.5cqw] rounded-sm relative flex flex-col justify-between transition-all duration-500 ${beat === 0 ? "scale-[1.02] border-[#2c5234]/70 shadow-[0_0_12px_rgba(44,82,52,0.12)]" : "opacity-80"}`}
                style={{ transform: "rotate(-0.5deg) translateY(0.5cqh)" }}
              >
                {/* Vintage stamp watermark background */}
                <div className="absolute top-[1.5cqw] right-[1.5cqw] text-[3cqw] font-bold text-[#2c5234]/5 font-serif border border-[#2c5234]/10 rounded-full w-[4cqw] h-[4cqw] flex items-center justify-center select-none pointer-events-none">
                  PEPER
                </div>

                <div className="border-b border-[#caa684]/35 pb-[0.8cqh] mb-[1cqh]">
                  <span className="block text-[0.6cqw] font-mono text-[#70553d] tracking-widest">CARGO SHIPMENT A: SUMATRA</span>
                  <h3 className="font-serif text-[1.1cqw] font-bold text-[#2c5234]">大宗黑胡椒核算 <span className="block text-[0.7cqw] font-serif italic text-[#3a352d] font-medium mt-0.5">Zwarte Peper (Staple Run)</span></h3>
                </div>

                <div className="flex-1 flex flex-col justify-center gap-[1cqh] font-mono text-[0.75cqw] text-[#3a352d]">
                  <div className="flex justify-between items-center border-b border-[#caa684]/15 py-0.5">
                    <span>Vracht-Volume (装载运量)</span>
                    <span className="font-bold text-[#1d2721] font-ledger">2,500 Picols</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#caa684]/15 py-0.5">
                    <span>Inkoop Batavia (采购成本)</span>
                    <span className="font-bold text-[#1d2721]">12 Real/Picol</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#caa684]/15 py-0.5">
                    <span>Customs Tariff (海关税金)</span>
                    <span className="font-bold text-[#a34336]">10% Standard</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#caa684]/15 py-0.5">
                    <span>Freight Attrition (允许损耗)</span>
                    <span className="font-bold text-[#1d2721]">8.0% Damp Limit</span>
                  </div>
                  <div className="flex justify-between items-center py-1 mt-[1cqh] border-t-2 border-double border-[#caa684]/30 font-serif">
                    <span className="font-bold text-[#2c5234]">Total Purchase Real</span>
                    <span className="font-mono font-bold text-[#2c5234] text-[0.85cqw]">30,000 Reales</span>
                  </div>
                </div>

                {/* SVG Illustration Pepper Branches */}
                <div className="h-[5cqh] flex items-center justify-end mt-[1.5cqh]">
                  <svg viewBox="0 0 100 40" className="w-[6cqw] h-full text-[#2c5234]/40">
                    <path d="M 10,35 Q 30,15 90,20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Berries clusters */}
                    <circle cx="25" cy="24" r="2.5" fill="#1d2721" />
                    <circle cx="28" cy="20" r="2.5" fill="#1d2721" />
                    <circle cx="33" cy="22" r="2" fill="#2c5234" />
                    <circle cx="45" cy="18" r="3" fill="#1d2721" />
                    <circle cx="50" cy="15" r="2.5" fill="#2c5234" />
                    <circle cx="55" cy="21" r="2" fill="#1d2721" />
                    <circle cx="68" cy="18" r="2.5" fill="#2c5234" />
                    <circle cx="73" cy="14" r="2.5" fill="#1d2721" />
                    <circle cx="80" cy="23" r="2" fill="#1d2721" />
                  </svg>
                </div>

                {/* Dynamic handwriting circle for active check */}
                {beat === 0 && (
                  <div className="absolute inset-[0.5cqw] border-2 border-[#2c5234]/30 rounded-sm pointer-events-none stroke-[2]" />
                )}
              </div>

              {/* Right Sheet: Banda Islands Nutmeg (55% width) */}
              <div 
                className={`flex-[5.5] paper-page border border-[#caa684]/50 shadow-sm p-[1.5cqw] rounded-sm relative flex flex-col justify-between transition-all duration-500 ${beat === 1 ? "scale-[1.02] border-[#a34336]/70 shadow-[0_0_12px_rgba(163,67,54,0.12)]" : "opacity-80"}`}
                style={{ transform: "rotate(0.8deg) translateY(-0.5cqh)" }}
              >
                {/* Vintage stamp background */}
                <div className="absolute top-[1.5cqw] right-[1.5cqw] text-[3cqw] font-bold text-[#a34336]/5 font-serif border border-[#a34336]/10 rounded-full w-[4cqw] h-[4cqw] flex items-center justify-center pointer-events-none">
                  BANDA
                </div>

                <div className="border-b border-[#caa684]/35 pb-[0.8cqh] mb-[1cqh]">
                  <span className="block text-[0.6cqw] font-mono text-[#70553d] tracking-widest">CARGO SHIPMENT B: BANDA ARCHIPELAGO</span>
                  <h3 className="font-serif text-[1.1cqw] font-bold text-[#a34336]">班达特专肉豆蔻 <span className="block text-[0.7cqw] font-serif italic text-[#3a352d] font-medium mt-0.5">Muskaatnoot (Luxury Royal monopoly)</span></h3>
                </div>

                <div className="flex-1 flex flex-col justify-center gap-[1cqh] font-mono text-[0.75cqw] text-[#3a352d]">
                  <div className="flex justify-between items-center border-b border-[#caa684]/15 py-0.5">
                    <span>Monopolie Vracht (垄断装载)</span>
                    <span className="font-bold text-[#1d2721]">1,200 Picols</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#caa684]/15 py-0.5">
                    <span>Inkoop Real (采购单价)</span>
                    <span className="font-bold text-[#1d2721]">24 Real/Picol</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#caa684]/15 py-0.5">
                    <span>Amsterdam Sale (阿姆斯特丹售价)</span>
                    <span className="font-bold text-[#2c5234] font-ledger">240 Guilders/Picol</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#caa684]/15 py-0.5">
                    <span>Monopoly Excise Surcharge (奢侈附加税)</span>
                    <span className="font-bold text-[#a34336]">35% Special Excise</span>
                  </div>
                  <div className="flex justify-between items-center py-1 mt-[1cqh] border-t-2 border-double border-[#caa684]/30 font-serif">
                    <span className="font-bold text-[#a34336]">Total Amsterdam Guilder Sale</span>
                    <span className="font-mono font-bold text-[#a34336] text-[0.85cqw]">288,000 Guilders</span>
                  </div>
                </div>

                {/* SVG Illustration Nutmeg Fruit cut open showing aril */}
                <div className="h-[5cqh] flex items-center justify-between mt-[1.5cqh]">
                  <span className="font-serif italic text-[0.6cqw] text-[#70553d] max-w-[15cqw]">
                    * Nutmeg aril (Foelie) is parsed as a distinct premium cargo class.
                  </span>
                  <svg viewBox="0 0 80 50" className="w-[5.5cqw] h-full">
                    {/* Nutmeg outer shell */}
                    <path d="M 20,25 C 20,5 60,5 60,25 C 60,45 20,45 20,25 Z" fill="#d8b273" stroke="#2c1a0c" strokeWidth="1" />
                    {/* Cut open segment */}
                    <path d="M 32,25 C 32,12 58,12 58,25 C 58,38 32,38 32,25 Z" fill="#faf6ee" stroke="#2c1a0c" strokeWidth="0.8" />
                    {/* Nutmeg Kernel */}
                    <ellipse cx="46" cy="25" rx="10" ry="8" fill="#583c24" />
                    {/* Red Mace webbing on seed */}
                    <path d="M 38,25 Q 46,18 48,22 T 54,23 T 44,28 Z" fill="none" stroke="#a34336" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M 40,21 Q 45,26 50,26" fill="none" stroke="#a34336" strokeWidth="1.2" />
                  </svg>
                </div>

                {/* Dynamic handwriting circle for active check */}
                {beat === 1 && (
                  <div className="absolute inset-[0.5cqw] border-2 border-[#a34336]/30 rounded-sm pointer-events-none stroke-[2]" />
                )}
              </div>
            </div>

            {/* Bottom Prose Block (Bilingual Inline) */}
            <div className="mt-[1.5cqh] border-t border-[#caa684]/30 pt-[1cqh] z-10 flex gap-[2cqw] items-center">
              <div className="flex-1">
                <p className="text-[0.92cqw] leading-relaxed text-[#3a352d] font-serif">
                  {currentBeat.body}
                </p>
              </div>
              {/* Grand alignment calculations shown on Beat 2 */}
              <div className={`w-[26cqw] h-[6.5cqh] border border-[#a34336]/25 rounded-sm p-[0.6cqw] paper-page flex flex-col justify-center relative bg-[#fffdf9] overflow-hidden ${beat === 2 ? "opacity-100" : "opacity-30"}`}>
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#a34336]" />
                <div className="flex justify-between items-center text-[0.7cqw] font-mono font-bold text-[#1d2721]">
                  <span>CUSTOMS VERIFICATION (海关核验):</span>
                  <span className="text-[#a34336]">PASSED • RE-STAMPED</span>
                </div>
                <div className="flex justify-between items-center text-[0.65cqw] font-mono text-[#70553d] mt-1 border-t border-[#caa684]/15 pt-0.5">
                  <span>Pepper Tariff Duty: 3,000 Guild.</span>
                  <span>Nutmeg Duty: 100,800 Guild.</span>
                </div>
                {beat === 2 && (
                  <div className="absolute right-[1cqw] top-[0.5cqh] text-[#2c5234] font-black text-[1.4cqw] rotate-[-12deg] tracking-widest pointer-events-none opacity-85 select-none font-sans">
                    APPROVED
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* SCENE 3: 3-Stage Ocean Voyage Timeline (Process - Standard) */}
          {/* ========================================================= */}
          <div className="w-[20%] h-full flex-shrink-0 relative px-[2.5cqw] py-[2.2cqh] flex flex-col justify-between overflow-hidden">
            {/* Header section */}
            <div className="border-b border-[#caa684]/40 pb-[1cqh] mb-[1.5cqh] flex justify-between items-end">
              <div>
                <span className="block font-sans text-[0.65cqw] font-black text-[#70553d] tracking-widest uppercase">VOC NAVIGATIONAL LOG & LOGISTICS BAR</span>
                <h2 className="font-serif text-[1.4cqw] font-black text-[#1d2721]">
                  香料航程三大里程碑节点 <span className="font-serif italic text-[1cqw] text-[#70553d] font-medium font-bold ml-1">Three Checkpoints of the Spice Run</span>
                </h2>
              </div>
              <span className="font-mono text-[0.6cqw] text-[#2c5234] border border-[#2c5234]/30 px-1.5 py-0.5 rounded-sm bg-[#faf9f5]">ROUTE AUDITING</span>
            </div>

            {/* Ocean Voyage Route SVG Chart */}
            <div className="h-[14cqh] border border-[#caa684]/35 rounded-sm relative my-[1cqh] paper-page overflow-hidden bg-[#faf8ee] flex flex-col justify-between p-[0.8cqw]">
              {/* Sea Chart grid */}
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
                backgroundImage: "radial-gradient(#1d2721 1px, transparent 1px)",
                backgroundSize: "2cqw 2cqw"
              }} />

              {/* Ocean Cartography & Wave Lines */}
              <svg viewBox="0 0 500 100" className="absolute inset-0 w-full h-full text-[#1d2721]/30">
                {/* European Coastlines sketch */}
                <path d="M 20,5 Q 40,5 50,15 T 45,35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                {/* African Coastlines sketch */}
                <path d="M 120,60 Q 140,80 150,95" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                <path d="M 150,95 Q 160,98 170,90" fill="none" stroke="currentColor" strokeWidth="0.5" />
                {/* Asian Islands sketch */}
                <path d="M 400,60 Q 420,70 450,70 Q 470,68 490,85" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />

                {/* Voyage track loxodromes (dotted route) */}
                <path 
                  id="voyage-path" 
                  d="M 40,15 C 60,35 110,65 160,90 C 230,95 310,95 435,75" 
                  fill="none" 
                  stroke="#caa684" 
                  strokeWidth="1.2" 
                  strokeDasharray="4 3" 
                />

                {/* Animated Active Route Track (VOC Green) */}
                <path 
                  d="M 40,15 C 60,35 110,65 160,90 C 230,95 310,95 435,75" 
                  fill="none" 
                  stroke="#2c5234" 
                  strokeWidth="2.5" 
                  strokeDasharray="500"
                  strokeDashoffset={
                    beat === 0 ? "400" : beat === 1 ? "250" : "0"
                  }
                  className="transition-all duration-[1200ms] ease-out"
                />

                {/* Anchors / Ports dots */}
                {/* Port 1: Texel */}
                <circle cx="40" cy="15" r="3.5" fill="#2c5234" stroke="#faf9f5" strokeWidth="1" />
                {/* Port 2: Cape of Good Hope */}
                <circle cx="160" cy="90" r="3.5" fill={beat >= 1 ? "#a34336" : "#caa684"} stroke="#faf9f5" strokeWidth="1" />
                {/* Port 3: Batavia */}
                <circle cx="435" cy="75" r="3.5" fill={beat >= 2 ? "#2c5234" : "#caa684"} stroke="#faf9f5" strokeWidth="1" />

                {/* Active Ship Icon moving on the path */}
                <g 
                  className="transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  transform={
                    beat === 0 
                      ? "translate(40, 15) scale(0.6)" 
                      : beat === 1 
                        ? "translate(160, 90) scale(0.6)" 
                        : "translate(435, 75) scale(0.6)"
                  }
                >
                  <path d="M -10,0 L -5,-12 L 0,-15 L 5,-12 L 10,0 Q 5,5 0,0 Q -5,5 -10,0 Z" fill="#4a3525" stroke="#1d2721" strokeWidth="1.2" />
                  <line x1="0" y1="-15" x2="0" y2="5" stroke="#1d2721" strokeWidth="1" />
                  {/* Billowing small white sail */}
                  <path d="M -7,-12 C -2,-7 5,-7 5,-12 Z" fill="#faf6ee" stroke="#1d2721" strokeWidth="0.8" />
                  <path d="M -4,-6 C -1,-2 4,-2 4,-6 Z" fill="#faf6ee" stroke="#1d2721" strokeWidth="0.8" />
                </g>
              </svg>

              {/* Visual Labels overlays inside sea chart */}
              <div className="flex justify-between items-end text-[0.6cqw] font-mono z-10 select-none">
                <span className={`px-1 rounded bg-[#faf9f5]/80 border ${beat === 0 ? "border-[#2c5234] text-[#2c5234] font-bold" : "border-[#caa684]/30"}`}>[I] TEXEL DEPARTURE (荷兰德克塞尔起航)</span>
                <span className={`px-1 rounded bg-[#faf9f5]/80 border ${beat === 1 ? "border-[#a34336] text-[#a34336] font-bold" : "border-[#caa684]/30"}`}>[II] KAAP DE GOEDE HOOP (好望角中转损耗)</span>
                <span className={`px-1 rounded bg-[#faf9f5]/80 border ${beat === 2 ? "border-[#2c5234] text-[#2c5234] font-bold" : "border-[#caa684]/30"}`}>[III] BATAVIA HARBOR (爪哇巴达维亚装卸)</span>
              </div>
            </div>

            {/* Chronological Ship Logs - 3-stage blocks */}
            <div className="flex gap-[1.5cqw] my-[1cqh] items-stretch">
              {/* Stage I Card */}
              <div 
                className={`flex-1 paper-page border rounded-sm p-[1cqw] flex flex-col justify-between transition-all duration-500 ${
                  beat >= 0 ? "border-[#2c5234]/40" : "border-[#caa684]/15 opacity-40"
                } ${beat === 0 ? "ring-2 ring-[#2c5234]/30 shadow-md scale-[1.02] border-[#2c5234]/60" : ""}`}
              >
                <div className="border-b border-[#caa684]/25 pb-1 mb-1.5 flex justify-between items-center">
                  <span className="font-mono text-[0.65cqw] font-bold text-[#2c5234]">[STAD I]</span>
                  <span className="font-mono text-[0.55cqw] text-[#70553d]">AD 1685.04</span>
                </div>
                <h4 className="font-serif font-black text-[0.9cqw] text-[#1d2721] leading-none mb-1">
                  巴达维亚通关 <span className="block text-[0.65cqw] font-serif italic text-[#70553d] font-medium">Batavia Clearance</span>
                </h4>
                <p className="text-[0.78cqw] leading-relaxed text-[#3a352d] font-serif flex-1 mt-1">
                  柚木船舱加盖铅封与爪哇总督大印。12,000担香料全数登记，核发起航通关税引。
                </p>
                <div className="font-mono text-[0.6cqw] text-[#2c5234] mt-2 border-t border-[#caa684]/15 pt-1 flex justify-between">
                  <span>LEAD: Supercargo</span>
                  <span>SEALS: VOC- Batavia</span>
                </div>
              </div>

              {/* Stage II Card */}
              <div 
                className={`flex-1 paper-page border rounded-sm p-[1cqw] flex flex-col justify-between transition-all duration-500 ${
                  beat >= 1 ? "border-[#a34336]/40" : "border-[#caa684]/15 opacity-40"
                } ${beat === 1 ? "ring-2 ring-[#a34336]/30 shadow-md scale-[1.02] border-[#a34336]/60" : ""}`}
              >
                <div className="border-b border-[#caa684]/25 pb-1 mb-1.5 flex justify-between items-center">
                  <span className="font-mono text-[0.65cqw] font-bold text-[#a34336]">[STAD II]</span>
                  <span className="font-mono text-[0.55cqw] text-[#70553d]">AD 1685.08</span>
                </div>
                <h4 className="font-serif font-black text-[0.9cqw] text-[#1d2721] leading-none mb-1">
                  好望角货损盘点 <span className="block text-[0.65cqw] font-serif italic text-[#70553d] font-medium">Cape Damage Audit</span>
                </h4>
                <p className="text-[0.78cqw] leading-relaxed text-[#3a352d] font-serif flex-1 mt-1">
                  货轮遭遇狂风受潮。开仓检查剔除腐烂胡椒，修正货舱实重损耗系数 -6.4%。
                </p>
                <div className="font-mono text-[0.6cqw] text-[#a34336] mt-2 border-t border-[#caa684]/15 pt-1 flex justify-between">
                  <span>LOSS: -6.4% WT</span>
                  <span>REFITTING: Kaap Town</span>
                </div>
              </div>

              {/* Stage III Card */}
              <div 
                className={`flex-1 paper-page border rounded-sm p-[1cqw] flex flex-col justify-between transition-all duration-500 ${
                  beat >= 2 ? "border-[#2c5234]/40" : "border-[#caa684]/15 opacity-40"
                } ${beat === 2 ? "ring-2 ring-[#2c5234]/30 shadow-md scale-[1.02] border-[#2c5234]/60" : ""}`}
              >
                <div className="border-b border-[#caa684]/25 pb-1 mb-1.5 flex justify-between items-center">
                  <span className="font-mono text-[0.65cqw] font-bold text-[#2c5234]">[STAD III]</span>
                  <span className="font-mono text-[0.55cqw] text-[#70553d]">AD 1685.12</span>
                </div>
                <h4 className="font-serif font-black text-[0.9cqw] text-[#1d2721] leading-none mb-1">
                  阿姆斯特丹入港 <span className="block text-[0.65cqw] font-serif italic text-[#70553d] font-medium">Amsterdam Arrival</span>
                </h4>
                <p className="text-[0.78cqw] leading-relaxed text-[#3a352d] font-serif flex-1 mt-1">
                  十七人商会金泥盖章清关。卸货登入交易所货栈，溢价溢流荷兰金库。
                </p>
                <div className="font-mono text-[0.6cqw] text-[#2c5234] mt-2 border-t border-[#caa684]/15 pt-1 flex justify-between">
                  <span>CLEARED: 100% OK</span>
                  <span>DUTY PAID: AMST. CHMB</span>
                </div>
              </div>
            </div>

            {/* Bottom active editorial text */}
            <div className="mt-[1cqh] border-t border-[#caa684]/30 pt-[0.8cqh] z-10">
              <p className="text-[0.92cqw] leading-relaxed text-[#3a352d] font-serif italic">
                {currentBeat.body}
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* SCENE 4: Spice Market Commodities (Matrix - Dense) */}
          {/* ========================================================= */}
          <div className="w-[20%] h-full flex-shrink-0 relative px-[2.5cqw] py-[2.2cqh] flex flex-col justify-between overflow-hidden">
            {/* Header section */}
            <div className="border-b border-[#caa684]/40 pb-[1cqh] mb-[1.5cqh] flex justify-between items-end">
              <div>
                <span className="block font-sans text-[0.65cqw] font-black text-[#70553d] tracking-widest uppercase">VOC EXOTIC SPICES COMMODITY 2X2 ANALYTICA</span>
                <h2 className="font-serif text-[1.4cqw] font-black text-[#1d2721]">
                  四大核心香料常数账目比对 <span className="font-serif italic text-[1cqw] text-[#70553d] font-medium font-bold ml-1">Four Core Commodities of the Indian Ocean</span>
                </h2>
              </div>
              <span className="font-mono text-[0.6cqw] text-[#a34336] border border-[#a34336]/30 px-1.5 py-0.5 rounded-sm bg-[#faf9f5]">MATRIX LEDGER</span>
            </div>

            {/* 2x2 Dense Grid */}
            <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-[1.5cqw] my-[1cqh] relative">
              
              {/* Quadrant 1: Cloves (Top-Left) */}
              <div 
                className={`paper-page border p-[1.2cqw] rounded-sm flex flex-col justify-between transition-all duration-500 relative ${
                  beat === 0 ? "border-[#2c5234] border-2 shadow-[0_0_12px_rgba(44,82,52,0.15)] bg-[#fffdf9]" : "border-[#caa684]/40 opacity-75"
                }`}
              >
                {/* Visual Spice Watermark SVG */}
                <div className="absolute right-[0.8cqw] top-[0.8cqw] w-[3cqw] h-[3cqh] opacity-15 text-[#2c5234]">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    {/* Clove buds drawings */}
                    <path d="M 10,30 L 25,15 M 14,26 L 18,22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="28" cy="12" r="3.5" fill="currentColor" />
                    <circle cx="23" cy="10" r="2.5" fill="currentColor" />
                    <circle cx="30" cy="18" r="2" fill="currentColor" />
                  </svg>
                </div>

                <div className="border-b border-[#caa684]/20 pb-0.5">
                  <span className="font-mono text-[0.6cqw] text-[#2c5234] font-bold">[SECTOR I]</span>
                  <h3 className="font-serif font-black text-[1cqw] text-[#1d2721]">
                    丁香契约 <span className="font-serif italic text-[0.7cqw] text-[#70553d] font-medium">Nagelen (Moluccas)</span>
                  </h3>
                </div>

                <div className="flex-1 flex flex-col justify-center gap-0.5 font-mono text-[0.7cqw] text-[#3a352d] py-1">
                  <div className="flex justify-between"><span>Purchase Inkoop:</span><span className="font-bold text-[#1d2721]">16 Real/Picol</span></div>
                  <div className="flex justify-between"><span>Amsterdam Sale:</span><span className="font-bold text-[#2c5234]">160 Guild/Picol</span></div>
                  <div className="flex justify-between"><span>Cargo loss (海损率):</span><span className="font-bold text-[#a34336]">3.2% Average</span></div>
                  <div className="flex justify-between"><span>Monopoly Tax (专卖税):</span><span className="font-bold text-[#a34336]">35% High Excise</span></div>
                </div>

                <div className="text-[0.62cqw] text-[#70553d] font-serif border-t border-[#caa684]/15 pt-1">
                  * Convert standard: 1 Picol = 125 Dutch lbs. Strict royal fine if violated.
                </div>
              </div>

              {/* Quadrant 2: Nutmeg (Top-Right) */}
              <div 
                className={`paper-page border p-[1.2cqw] rounded-sm flex flex-col justify-between transition-all duration-500 relative ${
                  beat === 1 ? "border-[#2c5234] border-2 shadow-[0_0_12px_rgba(44,82,52,0.15)] bg-[#fffdf9]" : "border-[#caa684]/40 opacity-75"
                }`}
              >
                {/* Visual Spice Watermark SVG */}
                <div className="absolute right-[0.8cqw] top-[0.8cqw] w-[3cqw] h-[3cqh] opacity-15 text-[#a34336]">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    {/* Nutmeg core */}
                    <circle cx="20" cy="20" r="11" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M 12,20 Q 20,12 28,20 Q 20,28 12,20 Z" fill="currentColor" opacity="0.4" />
                    <path d="M 15,16 Q 20,24 25,24" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>

                <div className="border-b border-[#caa684]/20 pb-0.5">
                  <span className="font-mono text-[0.6cqw] text-[#a34336] font-bold">[SECTOR II]</span>
                  <h3 className="font-serif font-black text-[1cqw] text-[#1d2721]">
                    肉豆蔻金值 <span className="font-serif italic text-[0.7cqw] text-[#70553d] font-medium">Muskaatnoot (Banda)</span>
                  </h3>
                </div>

                <div className="flex-1 flex flex-col justify-center gap-0.5 font-mono text-[0.7cqw] text-[#3a352d] py-1">
                  <div className="flex justify-between"><span>Purchase Inkoop:</span><span className="font-bold text-[#1d2721]">24 Real/Picol</span></div>
                  <div className="flex justify-between"><span>Amsterdam Sale:</span><span className="font-bold text-[#2c5234]">240 Guild/Picol</span></div>
                  <div className="flex justify-between"><span>Cargo loss (海损率):</span><span className="font-bold text-[#a34336]">8.4% Damp High</span></div>
                  <div className="flex justify-between"><span>Monopoly Tax (专卖税):</span><span className="font-bold text-[#a34336]">35% Surcharge</span></div>
                </div>

                <div className="text-[0.62cqw] text-[#70553d] font-serif border-t border-[#caa684]/15 pt-1">
                  * Extreme margin offsets high South-Atlantic vessel loss rates.
                </div>
              </div>

              {/* Quadrant 3: Mace (Bottom-Left) */}
              <div 
                className={`paper-page border p-[1.2cqw] rounded-sm flex flex-col justify-between transition-all duration-500 relative ${
                  beat === 1 ? "border-[#2c5234] border-2 shadow-[0_0_12px_rgba(44,82,52,0.15)] bg-[#fffdf9]" : "border-[#caa684]/40 opacity-75"
                }`}
              >
                {/* Visual Spice Watermark SVG */}
                <div className="absolute right-[0.8cqw] top-[0.8cqw] w-[3cqw] h-[3cqh] opacity-15 text-[#a34336]">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    {/* Mace aril webbing */}
                    <path d="M 8,20 C 12,8 28,8 32,20 C 28,32 12,32 8,20 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M 12,20 Q 20,12 25,20 Q 20,28 15,20 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 1" />
                    <path d="M 10,20 C 14,14 26,14 30,20" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </div>

                <div className="border-b border-[#caa684]/20 pb-0.5">
                  <span className="font-mono text-[0.6cqw] text-[#70553d] font-bold">[SECTOR III]</span>
                  <h3 className="font-serif font-black text-[1cqw] text-[#1d2721]">
                    肉豆蔻皮估 <span className="font-serif italic text-[0.7cqw] text-[#70553d] font-medium">Foelie (Banda Premium)</span>
                  </h3>
                </div>

                <div className="flex-1 flex flex-col justify-center gap-0.5 font-mono text-[0.7cqw] text-[#3a352d] py-1">
                  <div className="flex justify-between"><span>Purchase Inkoop:</span><span className="font-bold text-[#1d2721]">32 Real/Picol</span></div>
                  <div className="flex justify-between"><span>Amsterdam Sale:</span><span className="font-bold text-[#2c5234]">360 Guild/Picol</span></div>
                  <div className="flex justify-between"><span>Cargo loss (海损率):</span><span className="font-bold text-[#a34336]">12.0% Fragile</span></div>
                  <div className="flex justify-between"><span>Monopoly Tax (专卖税):</span><span className="font-bold text-[#a34336]">30% Custom duty</span></div>
                </div>

                <div className="text-[0.62cqw] text-[#70553d] font-serif border-t border-[#caa684]/15 pt-1">
                  * Extremely fragile crimson outer aril. Highly valued by medical guilds.
                </div>
              </div>

              {/* Quadrant 4: Cinnamon (Bottom-Right) */}
              <div 
                className={`paper-page border p-[1.2cqw] rounded-sm flex flex-col justify-between transition-all duration-500 relative ${
                  beat === 2 ? "border-[#2c5234] border-2 shadow-[0_0_12px_rgba(44,82,52,0.15)] bg-[#fffdf9]" : "border-[#caa684]/40 opacity-75"
                }`}
              >
                {/* Visual Spice Watermark SVG */}
                <div className="absolute right-[0.8cqw] top-[0.8cqw] w-[3cqw] h-[3cqh] opacity-15 text-[#a34336]">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    {/* Cinnamon sticks rolls */}
                    <path d="M 8,32 L 32,8 M 12,35 L 35,12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M 14,29 L 29,14" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1 1" />
                    <path d="M 18,35 C 14,35 14,31 18,31 C 22,31 22,35 18,35" fill="none" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>

                <div className="border-b border-[#caa684]/20 pb-0.5">
                  <span className="font-mono text-[0.6cqw] text-[#caa684] font-bold">[SECTOR IV]</span>
                  <h3 className="font-serif font-black text-[1cqw] text-[#1d2721]">
                    锡兰肉桂总账 <span className="font-serif italic text-[0.7cqw] text-[#70553d] font-medium">Kaneel (Ceylon)</span>
                  </h3>
                </div>

                <div className="flex-1 flex flex-col justify-center gap-0.5 font-mono text-[0.7cqw] text-[#3a352d] py-1">
                  <div className="flex justify-between"><span>Purchase Inkoop:</span><span className="font-bold text-[#1d2721]">8 Real/Picol</span></div>
                  <div className="flex justify-between"><span>Amsterdam Sale:</span><span className="font-bold text-[#2c5234]">22.5 Guild/Picol</span></div>
                  <div className="flex justify-between"><span>Cargo loss (海损率):</span><span className="font-bold text-[#a34336]">1.5% Hard Bark</span></div>
                  <div className="flex justify-between"><span>Monopoly Tax (专卖税):</span><span className="font-bold text-[#a34336]">15% Regular Toll</span></div>
                </div>

                <div className="text-[0.62cqw] text-[#70553d] font-serif border-t border-[#caa684]/15 pt-1">
                  * Low cost dried bark. Sourced in Ceylon. Exceptionally durable.
                </div>
              </div>
            </div>

            {/* Bottom Prose Block (Bilingual Inline) */}
            <div className="mt-[1cqh] border-t border-[#caa684]/30 pt-[1cqh] z-10">
              <p className="text-[0.92cqw] leading-relaxed text-[#3a352d] font-serif italic">
                {currentBeat.body}
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* SCENE 5: Amsterdam Custom House Cargo Manifest (Ledger) */}
          {/* ========================================================= */}
          <div className="w-[20%] h-full flex-shrink-0 relative px-[2cqw] py-[1.8cqh] flex flex-col justify-between overflow-hidden">
            {/* Manifest ledger title banner */}
            <div className="text-center border-b-2 border-[#1d2721] pb-[0.8cqh]">
              <span className="block font-sans text-[0.65cqw] font-black text-[#70553d] tracking-[0.3cqw] uppercase">
                AMSTERDAM CONCORDANCE REGISTER REGISTERED AD 1685
              </span>
              <h2 className="font-serif text-[1.4cqw] font-black text-[#1d2721] tracking-tight uppercase leading-none mt-1">
                十七人商会香料货运清算总账
                <span className="block font-serif italic text-[0.95cqw] text-[#70553d] font-bold normal-case tracking-normal mt-1">
                  Vereenigde Oostindische Compagnie Scheeps-Ladinge Manifest
                </span>
              </h2>
            </div>

            {/* Extreme Density accounting ledger table */}
            <div className="flex-1 flex flex-col justify-center my-[1cqh] relative">
              <table className="w-full text-left text-[0.72cqw] border-collapse font-serif">
                <thead>
                  <tr className="border-b border-[#1d2721] font-bold text-[#1d2721]">
                    <th className="py-1">Cargo Spice Class (货品)</th>
                    <th className="py-1">Mark (船舱箱印)</th>
                    <th className="py-1 text-right">Qty (Barrels)</th>
                    <th className="py-1 text-right">Weight (Picols)</th>
                    <th className="py-1 text-right">Batavia (Reales)</th>
                    <th className="py-1 text-right">Amsterdam (Guild.)</th>
                    <th className="py-1 text-right">Duty Billed</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-[0.7cqw] text-[#3a352d]">
                  <tr className={`border-b border-[#caa684]/30 ${getBeatClass(0)}`}>
                    <td className="py-1 font-serif font-black text-[#1d2721] italic">Zwarte Peper (黑胡椒)</td>
                    <td className="py-1">「VOC-A-PEPR」</td>
                    <td className="py-1 text-right">500 Bags</td>
                    <td className="py-1 text-right">2,500 Pcl</td>
                    <td className="py-1 text-right">30,000 Real</td>
                    <td className="py-1 text-right text-[#2c5234] font-bold font-ledger">70,000 Guild</td>
                    <td className="py-1 text-right text-[#a34336] font-bold">10% Standard</td>
                  </tr>
                  <tr className={`border-b border-[#caa684]/30 ${getBeatClass(0)}`}>
                    <td className="py-1 font-serif font-black text-[#1d2721] italic">Muskaatnoot (肉豆蔻)</td>
                    <td className="py-1">「VOC-A-NOOT」</td>
                    <td className="py-1 text-right">240 bbls</td>
                    <td className="py-1 text-right">1,200 Pcl</td>
                    <td className="py-1 text-right">28,800 Real</td>
                    <td className="py-1 text-right text-[#2c5234] font-bold">288,000 Guild</td>
                    <td className="py-1 text-right text-[#a34336] font-bold">35% Monopoly</td>
                  </tr>
                  <tr className={`border-b border-[#caa684]/30 ${getBeatClass(1)}`}>
                    <td className="py-1 font-serif font-black text-[#1d2721] italic">Kruidnagel (大宗丁香)</td>
                    <td className="py-1">「VOC-A-CLVE」</td>
                    <td className="py-1 text-right">300 bbls</td>
                    <td className="py-1 text-right">1,500 Pcl</td>
                    <td className="py-1 text-right">24,000 Real</td>
                    <td className="py-1 text-right text-[#2c5234] font-bold">240,000 Guild</td>
                    <td className="py-1 text-right text-[#a34336] font-bold">35% Monopoly</td>
                  </tr>
                  <tr className={`border-b border-[#caa684]/30 ${getBeatClass(1)}`}>
                    <td className="py-1 font-serif font-black text-[#1d2721] italic">Kaneel (锡兰肉桂)</td>
                    <td className="py-1">「VOC-A-KNL」</td>
                    <td className="py-1 text-right">600 Bags</td>
                    <td className="py-1 text-right">3,000 Pcl</td>
                    <td className="py-1 text-right">24,000 Real</td>
                    <td className="py-1 text-right text-[#2c5234] font-bold">67,500 Guild</td>
                    <td className="py-1 text-right text-[#a34336] font-bold">15% Regular</td>
                  </tr>
                  <tr className={`border-b-2 border-[#1d2721]/60 ${getBeatClass(2)}`}>
                    <td className="py-1 font-serif font-black text-[#1d2721] italic">Foelie (特专豆蔻皮)</td>
                    <td className="py-1">「VOC-A-FOEL」</td>
                    <td className="py-1 text-right">160 bbls</td>
                    <td className="py-1 text-right">800 Pcl</td>
                    <td className="py-1 text-right">25,600 Real</td>
                    <td className="py-1 text-right text-[#2c5234] font-bold">288,000 Guild</td>
                    <td className="py-1 text-right text-[#a34336] font-bold">30% Monopoly</td>
                  </tr>
                </tbody>
              </table>

              {/* Currency conversion & ledger calculations (highly detailed formulas) */}
              <div className="mt-[1cqh] flex gap-[2cqw] text-[0.68cqw] font-mono p-[0.6cqw] border border-[#caa684]/20 paper-page rounded-sm shadow-inner relative">
                <div className="absolute right-[1cqw] top-[0.3cqh] text-[#70553d] font-bold text-[0.55cqw] uppercase">Huydecoper Supercargo Calculations</div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between border-b border-[#caa684]/15 py-0.5">
                    <span>Total Purchase Silver (银元总值):</span>
                    <span className="font-bold text-[#1d2721]">132,400 Reales</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span>Hedge exchange rate (汇率对折):</span>
                    <span className="text-[#a34336] font-bold">1 Spanish Real = 2.4 Dutch Guilders</span>
                  </div>
                </div>
                <div className="w-[1px] bg-[#caa684]/30" />
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between border-b border-[#caa684]/15 py-0.5">
                    <span>Gross Amsterdam Returns (荷兰售值):</span>
                    <span className="font-bold text-[#2c5234] text-[0.72cqw]">953,500 Guilders</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span>Net Company Profit (纯余金值):</span>
                    <span className="font-bold text-[#2c5234] text-[0.72cqw]">+618,200 Guilders (6.8x)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Prose Block (Bilingual Inline) */}
            <div className="mt-[0.5cqh] border-t border-[#caa684]/30 pt-[0.8cqh] z-10 flex gap-[2cqw] items-center">
              <div className="flex-1">
                <p className="text-[0.9cqw] leading-relaxed text-[#3a352d] font-serif italic">
                  {currentBeat.body}
                </p>
              </div>

              {/* Clerk Signatures */}
              <div className="w-[15cqw] flex flex-col justify-end text-[0.62cqw] font-serif text-[#70553d] text-right border-l border-[#caa684]/25 pl-[1.5cqw]">
                <span className="font-mono text-[0.55cqw] opacity-60">ADMINISTRATOR APPROVAL:</span>
                <span className="italic font-bold font-serif text-[#1d2721] mt-1 text-[0.7cqw] tracking-wide" style={{ fontFamily: "Georgia, serif" }}>Huydecoper</span>
                <span className="block mt-0.5">大班官（Supercargo）胡德考普</span>
                <span className="italic font-bold font-serif text-[#1d2721] mt-1.5 text-[0.7cqw] tracking-wide" style={{ fontFamily: "Georgia, serif" }}>Jan de Witt</span>
                <span className="block mt-0.5">十七人商会执事秘记（Secr. Heeren XVII）</span>
              </div>
            </div>

            {/* 
              Large Official VOC Wax Seal Stamp 
              Appears with stamp animation on Beat 2 in Scene 5.
            */}
            {beat >= 1 && (
              <div className="absolute bottom-[2cqh] right-[16cqw] w-[7.5cqw] h-[7.5cqw] z-30 pointer-events-none select-none animate-stamp">
                <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-[2px_5px_8px_rgba(135,30,20,0.45)]">
                  {/* Outer layered wax puddles */}
                  <path d="M 60,8 C 88,6 112,18 114,46 C 116,74 104,110 76,112 C 48,114 8,104 6,76 C 4,48 32,10 60,8 Z" fill="#9e2a1b" stroke="#701a10" strokeWidth="2.5" />
                  <path d="M 60,12 C 84,10 106,20 108,44 C 110,68 100,100 76,102 C 52,104 14,94 12,70 C 10,46 36,14 60,12 Z" fill="#b03525" opacity="0.9" />
                  <path d="M 58,16 C 78,15 98,24 100,44 C 102,64 92,90 74,92 C 56,94 22,86 20,66 C 18,46 38,17 58,16 Z" fill="#c43e2f" opacity="0.6" />

                  {/* Inner stamped ring */}
                  <circle cx="60" cy="58" r="38" fill="none" stroke="#681008" strokeWidth="1.8" />
                  <circle cx="60" cy="58" r="35" fill="none" stroke="#f6ddd8" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.5" />

                  {/* Embossed VOC Monogram */}
                  <g transform="translate(30, 26) scale(0.5)" stroke="#681008" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    <path d="M 15,15 L 60,110 L 105,15" />
                    <circle cx="60" cy="50" r="28" />
                    <path d="M 72,28 A 28,28 0 1,0 72,72" />
                    <text x="60" y="-3" fontSize="18" textAnchor="middle" stroke="none" fill="#f6ddd8" fontWeight="900" fontFamily="serif" opacity="0.8">A</text>
                  </g>
                  {/* Embossed text around ring */}
                  <path id="seal-text-path" d="M 28,90 A 42,42 0 0,0 92,90" fill="none" />
                  <text fontSize="8" fontWeight="900" fontFamily="monospace" fill="#681008" opacity="0.95" letterSpacing="1">
                    <textPath href="#seal-text-path" startOffset="50%" textAnchor="middle">
                      HEEREN XVII
                    </textPath>
                  </text>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* BESPOKE NAVIGATION (Spice Merchant Chests) - Fixed Right   */}
      {/* ========================================================= */}
      {!isThumbnail && onNavigate && (
        <div className="absolute right-[1.6cqw] top-[1.6cqw] bottom-[1.6cqw] w-[9.5cqw] z-20 wood-cabinet border-l border-[#caa684]/45 flex flex-col justify-between py-[3cqh] px-[0.7cqw] shadow-md">
          {/* Top Label */}
          <div className="text-center border-b border-[#caa684]/35 pb-[1.5cqh]">
            <span className="block font-sans text-[0.6cqw] font-black text-[#5c4731] uppercase tracking-[0.15cqw]">
              Kamer Register
            </span>
            <span className="block font-serif italic text-[0.75cqw] text-[#70553d] font-bold">
              Merchant Chests
            </span>
          </div>

          {/* Chests Stack */}
          <div className="flex-1 flex flex-col justify-center gap-[2.2cqh] my-[1.5cqh]">
            {chestsData.map((item) => {
              const isActive = scene === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => onNavigate(item.id, 0)}
                  className="flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 group relative"
                  title={`${item.nameEn} - ${item.nameZh}`}
                >
                  {/* Active background wax-stamp marker */}
                  {isActive && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-10 scale-125 z-0">
                      <svg viewBox="0 0 100 100" className="w-[8cqw] h-[8cqw] text-[#a34336] fill-current">
                        <circle cx="50" cy="50" r="45" />
                      </svg>
                    </div>
                  )}

                  {/* Chest SVG Drawer Icon */}
                  <div className="relative z-10 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.12)]">
                    <svg viewBox="0 0 80 60" className="w-[5.2cqw] h-[5.2cqh]">
                      {/* Chest wood trunk body */}
                      <rect x="10" y="24" width="60" height="28" rx="1.5" fill="#4d321d" stroke="#26160a" strokeWidth="1.5" />
                      
                      {/* Metal bounds / brass straps */}
                      <rect x="18" y="24" width="5.5" height="28" fill="#c39466" stroke="#26160a" strokeWidth="0.5" />
                      <rect x="56.5" y="24" width="5.5" height="28" fill="#c39466" stroke="#26160a" strokeWidth="0.5" />
                      <rect x="10" y="36" width="60" height="3" fill="#26160a" opacity="0.25" />
                      
                      {/* Center key lock */}
                      <circle cx="40" cy="38" r="2.5" fill="#c39466" stroke="#26160a" strokeWidth="0.8" />
                      <path d="M 40,38 L 40,44" stroke="#c39466" strokeWidth="1" strokeLinecap="round" />

                      {/* Active: Lid opens, showing gold coins & glowing spices inside */}
                      {isActive ? (
                        <g className="transition-transform duration-500 origin-[40px_10px]" style={{ transform: "translateY(-13px) rotate(-16deg)" }}>
                          {/* Inside spices glow */}
                          <ellipse cx="40" cy="24" rx="22" ry="7" fill="#f59e0b" className="animate-pulse" />
                          <circle cx="28" cy="23" r="2" fill="#3a352d" />
                          <circle cx="36" cy="25" r="2.5" fill="#2c5234" />
                          <circle cx="44" cy="22" r="1.8" fill="#a34336" />
                          <circle cx="50" cy="24" r="2" fill="#fbbf24" />

                          {/* Open Lid itself */}
                          <path d="M 10,24 C 10,11 70,11 70,24 Z" fill="#583520" stroke="#26160a" strokeWidth="1.5" />
                          <rect x="18" y="14" width="5.5" height="10" fill="#caa684" stroke="#26160a" strokeWidth="0.5" />
                          <rect x="56.5" y="14" width="5.5" height="10" fill="#caa684" stroke="#26160a" strokeWidth="0.5" />
                        </g>
                      ) : (
                        /* Closed Lid */
                        <g className="transition-transform duration-500">
                          <path d="M 10,24 C 10,11 70,11 70,24 Z" fill="#4d321d" stroke="#26160a" strokeWidth="1.5" />
                          <rect x="18" y="14" width="5.5" height="10" fill="#c39466" stroke="#26160a" strokeWidth="0.5" />
                          <rect x="56.5" y="14" width="5.5" height="10" fill="#c39466" stroke="#26160a" strokeWidth="0.5" />
                          <line x1="10" y1="24" x2="70" y2="24" stroke="#26160a" strokeWidth="1.5" />
                        </g>
                      )}
                    </svg>
                  </div>

                  {/* Text details */}
                  <div className="text-center mt-1 z-10">
                    <span className={`block font-serif font-black text-[0.7cqw] leading-none transition-colors duration-300 ${isActive ? "text-[#a34336] font-bold" : "text-[#1d2721] group-hover:text-[#a34336]"}`}>
                      {item.nameEn}
                    </span>
                    <span className="block font-sans font-bold text-[0.52cqw] text-[#70553d] opacity-80 mt-0.5 scale-90 origin-center">
                      {item.nameZh}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cabin Lock Stamp */}
          <div className="border-t border-[#caa684]/35 pt-[1.5cqh] flex flex-col items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-[1.8cqw] h-[1.8cqw] text-[#a34336] opacity-75">
              {/* Iron locks design */}
              <rect x="10" y="15" width="20" height="18" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M 14,15 A 6,6 0 0,1 26,15" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="20" cy="23" r="1.5" fill="currentColor" />
              <line x1="20" y1="24" x2="20" y2="28" stroke="currentColor" strokeWidth="1" />
            </svg>
            <span className="text-[0.5cqw] font-mono text-[#5c4731] mt-1 tracking-wider uppercase">SECURE HOLD</span>
          </div>
        </div>
      )}
    </div>
  );
}
