import React, { useMemo } from "react";
import { 
  Mountain, Compass, Wind, Thermometer, Package, MapPin, 
  CheckCircle, ArrowRight, Activity, Shield, Info, Layers, RefreshCw
} from "lucide-react";

export const getMetadata = (lang) => ({
  id: "09",
  tier: "A",
  name: lang === "zh" ? "茶马古道物资流转" : "The Tea-Horse Road Logistics",
  theme: lang === "zh" ? "滇藏茶马贸易网络" : "Tea-Horse Trade Networks",
  densityLabel: lang === "zh" ? "马帮古道纪实" : "Organic Caravan Ledger",
  colors: { bg: "bg-[#f6f2ea]", ink: "text-[#3a271d]", panel: "border-[#3a271d]/15", accent: "text-[#8d5e46]" },
  typography: { header: "font-serif", body: "font-sans" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "古道起源与马帮整备" : "Genesis & Caravan Mobilization",
      beats: [
        { id: 1, action: lang === "zh" ? "组织马帮" : "Mobilize Caravan" },
        { id: 2, action: lang === "zh" ? "整备物资" : "Equip Cargo" },
        { id: 3, action: lang === "zh" ? "祭路启程" : "Blessing Ritual" }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "滇藏与川藏双干线合流" : "Dual Route Convergence",
      beats: [
        { id: 1, action: lang === "zh" ? "两线交汇" : "Dual Merges" },
        { id: 2, action: lang === "zh" ? "对流核算" : "Barter Draft" },
        { id: 3, action: lang === "zh" ? "易马权衡" : "Scale Balances" }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "天险关卡与沿途海拔" : "Tolls, Passes & Elevation",
      beats: [
        { id: 1, action: lang === "zh" ? "首战雅安" : "Ya'an Source" },
        { id: 2, action: lang === "zh" ? "中渡昌都" : "Chamdo Station" },
        { id: 3, action: lang === "zh" ? "终抵拉萨" : "Lhasa Terminal" }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "高海拔环境与负荷监测" : "Altitude & Cargo Telemetry",
      beats: [
        { id: 1, action: lang === "zh" ? "气压自检" : "Baro Mapping" },
        { id: 2, action: lang === "zh" ? "重力微调" : "Load Balancing" },
        { id: 3, action: lang === "zh" ? "极限体能" : "Vitals Check" }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "拉萨主城接关与茶马贸易" : "Lhasa Arrival & Sacred Exchange",
      beats: [
        { id: 1, action: lang === "zh" ? "抵达接关" : "Terminal Entry" },
        { id: 2, action: lang === "zh" ? "互市易马" : "Barter Ledger" },
        { id: 3, action: lang === "zh" ? "加盖御印" : "Vermilion Stamp" }
      ]
    }
  ]
});

// A highly elegant, hand-drawn vector of a pack mule carrying goods
const PackMuleIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19.5 4.5l-2.5 3h-2l-.5-1.5c0-.6-.4-1-1-1h-1.5c-.6 0-1 .4-1 1v1.5h-2.5l-1.5-2.5h-1c-.6 0-1 .4-1 1v1.5L5 9.5c-.6.2-1 .8-1 1.5v3.5c0 .6.4 1 1 1h.5l.5 4c0 .6.4 1 1 1s1-.4 1-1l.5-4h4l.5 4c0 .6.4 1 1 1s1-.4 1-1l.5-4h.5c.6 0 1-.4 1-1v-2l2.5-3h1.5c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1z" />
    <circle cx="17.5" cy="5.5" r="0.5" fill="currentColor" />
  </svg>
);

const STATIONS = [
  { sceneNum: 1, elevation: 1200, nameZh: "雅安起锚", nameEn: "Ya'an Source", oxygen: "95%", pressure: "960 hPa" },
  { sceneNum: 2, elevation: 2100, nameZh: "大理合流", nameEn: "Dali Merge", oxygen: "80%", pressure: "800 hPa" },
  { sceneNum: 3, elevation: 3100, nameZh: "昌都中渡", nameEn: "Chamdo Mid", oxygen: "70%", pressure: "700 hPa" },
  { sceneNum: 4, elevation: 3900, nameZh: "折多天险", nameEn: "Zheduo Pass", oxygen: "62%", pressure: "620 hPa" },
  { sceneNum: 5, elevation: 4500, nameZh: "拉萨终抵", nameEn: "Lhasa Term", oxygen: "58%", pressure: "580 hPa" }
];

const TICKS = [4500, 4000, 3500, 3000, 2500, 2000, 1500, 1000];

export default function Style09({ scene, beat, language, isThumbnail, onNavigate }) {
  const meta = getMetadata(language);
  const isZh = language === "zh";

  return (
    <div className="w-full h-full overflow-hidden relative bg-[#f6f2ea] text-[#3a271d] font-sans flex flex-col justify-between">
      {/* Background Topography Silhouettes */}
      <div className="absolute inset-x-0 bottom-0 h-[22cqh] opacity-[0.05] pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <path d="M0,150 L150,80 L300,140 L450,40 L600,160 L750,70 L900,150 L1000,90 L1000,200 L0,200 Z" fill="currentColor" />
          <path d="M0,180 L120,130 L250,170 L380,90 L520,160 L700,110 L850,180 L1000,150 L1000,200 L0,200 Z" fill="currentColor" opacity="0.6" />
        </svg>
      </div>

      {/* Horizontal Slider Track (H-Slide) */}
      <div 
        className="flex w-[500%] h-full transition-transform duration-[1200ms] z-10" 
        style={{ 
          transform: `translateX(-${(scene - 1) * 20}%)`,
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        {/* ==================== SCENE 1: PREMISE - ULTRALIGHT ==================== */}
        <div className="w-[20%] h-full flex flex-col justify-between pl-[11.5cqw] pr-[4cqw] pt-[4cqw] pb-[4cqh] relative flex-shrink-0 select-none">
          {/* Header inside slide to slide naturally */}
          <div className="flex justify-between items-start border-b border-[#3a271d]/15 pb-[1.5cqh]">
            <div>
              <span className="font-mono text-[0.8cqw] tracking-[0.2em] uppercase opacity-70 flex items-center gap-[0.5cqw]">
                <Compass className="w-[1.1cqw] h-[1.1cqw] animate-spin-slow text-[#8d5e46]" />
                TEA-HORSE HISTORIC CHRONICLE // 滇藏茶马道纪实
              </span>
              <h1 className="text-[2.2cqw] font-serif font-bold tracking-tight mt-[0.5cqh]">
                古道起源与马帮整备 <span className="text-[1.3cqw] font-sans font-light tracking-normal opacity-60 ml-2">Genesis & Caravan Mobilization</span>
              </h1>
            </div>
            <div className="text-right font-mono text-[0.9cqw]">
              <span className="font-bold text-[#8d5e46]">01 // PREMISE</span>
              <span className="block text-[0.7cqw] opacity-50 uppercase tracking-widest mt-[0.5cqh]">Ultralight Ridge Cover</span>
            </div>
          </div>

          {/* Integrated Widescreen Visual & Narrative (75% Negative Space) */}
          <div className="flex-1 grid grid-cols-12 gap-[3cqw] items-center my-[2cqh]">
            {/* Left 5 cols: Poetic Travel Logs */}
            <div className="col-span-5 flex flex-col gap-[2.5cqh]">
              <div className="flex items-center gap-[0.8cqw]">
                <span className="h-[2px] w-[2cqw] bg-[#8d5e46]" />
                <span className="font-mono text-[0.9cqw] font-bold text-[#8d5e46] tracking-wider uppercase">
                  {beat === 0 ? "STATION 01: PU'ER ASSEMBLY" : beat === 1 ? "STATION 02: CARGO PACKING" : "STATION 03: THE BLISSFUL DEPARTURE"}
                </span>
              </div>

              <div className="flex flex-col gap-[1.5cqh]">
                <h2 className="text-[2.4cqw] font-serif font-bold leading-tight">
                  {beat === 0 && "茶源起锚，马帮重组"}
                  {beat === 1 && "高寒行装，货驮御潮"}
                  {beat === 2 && "祭祀神山，祈求路安"}
                  <span className="block text-[1.2cqw] font-sans font-medium opacity-70 mt-1 leading-normal">
                    {beat === 0 && "Caravan Assembly at the Tea Hills"}
                    {beat === 1 && "High-Altitude Protection & Packing"}
                    {beat === 2 && "Blessing Ritual at the Sacred Peak"}
                  </span>
                </h2>

                <p className="text-[1cqw] leading-[1.6] opacity-80 font-sans">
                  {beat === 0 && "于云南西双版纳与普洱茶山集结精壮骡马。古道崎岖，商旅长征由此起锚，驮载着万千茶砖踏上漫漫征途。"}
                  {beat === 1 && "精细捆扎茶驮，加盖层层防潮油纸，重配盐巴、铜器。高原冰雪寒湿多变，严密行装是延续马帮生命之屏障。"}
                  {beat === 2 && "在出关要道设坛敬告天地。神山巍峨，风雨莫测，马帮汉子洒酒祭路，合十祈愿人马无折、万里生还。"}
                  <span className="block text-[0.85cqw] italic opacity-60 mt-[1cqh] leading-relaxed">
                    {beat === 0 && "Assembling strong mules at Xishuangbanna and Pu'er hills. The epic trading expedition initiates, loading compressed tea bricks for the grueling highland journey."}
                    {beat === 1 && "Packing tea loads securely with waterproof oiled paper. Preserving cargo integrity against torrential rains and frozen plateau moisture is the key to caravan survival."}
                    {beat === 2 && "Setting up road altars before the high mountains. Mules and men pause to pay tribute to the sacred mountain deities, praying for safe passage and zero casualties."}
                  </span>
                </p>
              </div>
            </div>

            {/* Right 7 cols: 75% Negative Space Minimalist Ridge Pathway */}
            <div className="col-span-7 flex flex-col justify-center items-center h-full relative">
              <svg className="w-[85%] h-[24cqh] stroke-[#3a271d] fill-none" viewBox="0 0 400 150">
                {/* Winding mountain single-line path */}
                <path 
                  d="M 20 120 C 100 120, 150 40, 250 80 C 320 100, 350 30, 380 30" 
                  strokeWidth="2" 
                  strokeDasharray="4,4"
                  className="opacity-30"
                />
                {/* Active path segment indicator */}
                <path 
                  d="M 20 120 C 100 120, 150 40, 250 80 C 320 100, 350 30, 380 30" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  className="stroke-[#8d5e46] transition-all duration-1000"
                  strokeDasharray="400"
                  strokeDashoffset={400 - (beat + 1) * 133}
                />
                
                {/* Nodes on path */}
                <circle cx="20" cy="120" r="5" fill="#3a271d" />
                <circle cx="250" cy="80" r="5" fill="#3a271d" className={beat >= 1 ? "opacity-100" : "opacity-30"} />
                <circle cx="380" cy="30" r="6" fill="#8d5e46" className={beat >= 2 ? "opacity-100" : "opacity-30"} />

                {/* Pack mule climbing mountain */}
                <g 
                  className="transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: beat === 0 ? "translate(20px, 120px)" : beat === 1 ? "translate(250px, 80px)" : "translate(380px, 30px)"
                  }}
                >
                  <circle cx="0" cy="0" r="14" fill="#3a271d" className="shadow-lg animate-pulse" />
                  <PackMuleIcon className="w-5 h-5 text-[#f6f2ea] absolute -top-[10px] -left-[10px]" />
                </g>
              </svg>

              <div className="text-center mt-[1.5cqh]">
                <p className="font-serif font-bold text-[1.1cqw]">
                  {beat === 0 && "易武茶山起步 // Altitude 800m"}
                  {beat === 1 && "横断高山负重 // Altitude 2,200m"}
                  {beat === 2 && "梅里雪线遥望 // Altitude 3,800m"}
                </p>
                <p className="text-[0.75cqw] font-mono opacity-50 mt-[0.3cqh] uppercase tracking-wider">
                  {beat === 0 && "Yiwu Tea Range Ascent"}
                  {beat === 1 && "Hengduan Mountainous Portage"}
                  {beat === 2 && "Meili Sacred Glacial Outlook"}
                </p>
              </div>
            </div>
          </div>

          {/* Footer inside slide */}
          <div className="flex justify-between items-center text-[0.8cqw] font-mono opacity-60 border-t border-[#3a271d]/10 pt-[1cqh]">
            <span>© 1085 - 2026 {isZh ? "大宋茶马司都护府" : "Ancient Tea-Horse Logistics Bureau"}</span>
            <span>{isZh ? "横断山系高寒路线·绪论" : "Hengduan Mountainous Route · Intro"}</span>
          </div>
        </div>

        {/* ==================== SCENE 2: DUAL - LIGHT ==================== */}
        <div className="w-[20%] h-full flex flex-col justify-between pl-[11.5cqw] pr-[4cqw] pt-[4cqw] pb-[4cqh] relative flex-shrink-0 select-none">
          {/* Slide Header */}
          <div className="flex justify-between items-start border-b border-[#3a271d]/15 pb-[1.5cqh]">
            <div>
              <span className="font-mono text-[0.8cqw] tracking-[0.2em] uppercase opacity-70 flex items-center gap-[0.5cqw]">
                <Compass className="w-[1.1cqw] h-[1.1cqw] text-[#8d5e46]" />
                TEA-HORSE INTERCEPT REGULATION // 滇藏与川藏双干线对流
              </span>
              <h1 className="text-[2.2cqw] font-serif font-bold tracking-tight mt-[0.5cqh]">
                滇藏与川藏双线互市对流 <span className="text-[1.3cqw] font-sans font-light tracking-normal opacity-60 ml-2">Dual Route Barter Exchange</span>
              </h1>
            </div>
            <div className="text-right font-mono text-[0.9cqw]">
              <span className="font-bold text-[#8d5e46]">02 // DUAL</span>
              <span className="block text-[0.7cqw] opacity-50 uppercase tracking-widest mt-[0.5cqh]">Asymmetric Intercept Trade</span>
            </div>
          </div>

          {/* Asymmetric Content (35% Left press weights vs 65% Right barter parameters) */}
          <div className="flex-1 grid grid-cols-12 gap-[3cqw] items-stretch my-[2cqh]">
            {/* Left Page (35% Width): Yunnan Puer Brick Press Weights */}
            <div className="col-span-4 bg-white/40 border border-[#3a271d]/15 rounded-2xl p-[1.8cqw] flex flex-col justify-between relative shadow-sm">
              <div className="absolute top-0 right-0 w-[4cqw] h-[4cqw] bg-[#8d5e46]/5 rounded-bl-3xl flex items-center justify-center border-l border-b border-[#3a271d]/10">
                <Package className="w-[1.4cqw] h-[1.4cqw] text-[#8d5e46]" />
              </div>
              
              <div className="flex flex-col gap-[2cqh]">
                <div className="border-b border-[#3a271d]/10 pb-[1cqh]">
                  <h3 className="font-serif font-bold text-[1.2cqw]">滇南茶砖压制规引</h3>
                  <span className="block font-mono text-[0.75cqw] text-[#8d5e46] uppercase">Yunnan Pu'er Pressing Code</span>
                </div>

                <div className="flex flex-col gap-[1.5cqh] text-[0.9cqw] font-sans leading-relaxed">
                  <div>
                    <span className="font-mono text-[#8d5e46] font-extrabold mr-2">【重规】</span>
                    <span>每饼茶专重七两（357克），七茶饼合为一笋壳筒，重四斤九两。</span>
                    <span className="block text-[0.75cqw] opacity-60 italic">357g per compressed cake; 7 cakes per bamboo-leaf cylinder wrapper.</span>
                  </div>
                  <div>
                    <span className="font-mono text-[#8d5e46] font-extrabold mr-2">【装驮】</span>
                    <span>双箱对挂驮架，每马均摊负重九十斤（45千克），以续马力。</span>
                    <span className="block text-[0.75cqw] opacity-60 italic">Dual side-panniers balancing the mule, carrying exactly 45kg total.</span>
                  </div>
                  <div>
                    <span className="font-mono text-[#8d5e46] font-extrabold mr-2">【制质】</span>
                    <span>石模重压成砖，质地致密。暴雪高湿不散，防潮防腐。</span>
                    <span className="block text-[0.75cqw] opacity-60 italic">Heavy stone-pressed bricks, locking flavor and preventing rot.</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#8d5e46]/10 p-[1cqw] rounded-xl text-center text-[0.8cqw] font-mono border border-[#8d5e46]/20">
                {isZh ? "马帮基准运载力 // STANDARDIZED LOAD" : "BASE PAYLOAD STANDARDS"}
              </div>
            </div>

            {/* Right Page (65% Width): Tibet Lhasa Salt/Horse Exchange */}
            <div className="col-span-8 bg-white/70 border border-[#3a271d]/20 rounded-2xl p-[2cqw] flex flex-col justify-between shadow-md relative overflow-hidden">
              {/* Subtle Grid overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#3a271d_1px,transparent_1px)] [background-size:12px_16px]" />
              
              <div className="grid grid-cols-12 gap-[2.5cqw] h-full items-center z-10">
                {/* Parameters & Copy */}
                <div className="col-span-7 flex flex-col gap-[2cqh]">
                  <div className="border-b border-[#3a271d]/10 pb-[0.8cqh]">
                    <span className="font-mono text-[0.75cqw] text-[#8d5e46] tracking-widest uppercase block">BARTER RATIO REGISTRY // 互市易马契草案</span>
                    <h3 className="font-serif font-black text-[1.4cqw] mt-[0.2cqh]">拉萨河谷关卡大宗交易</h3>
                  </div>

                  <div className="flex flex-col gap-[1.2cqh] text-[0.9cqw] font-sans leading-normal">
                    <div className="flex justify-between items-center border-b border-dashed border-[#3a271d]/10 pb-[0.5cqh]">
                      <span>普洱贡茶一驮 (1 Pack Pu'er)</span>
                      <ArrowRight className="w-[1cqw] h-[1cqw] text-[#8d5e46]" />
                      <span className="font-bold text-[#8d5e46]">藏区壮健战马一匹 (1 Warhorse)</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-dashed border-[#3a271d]/10 pb-[0.5cqh]">
                      <span>高原湖盐十斗 (10 Measures Salt)</span>
                      <ArrowRight className="w-[1cqw] h-[1cqw] text-[#8d5e46]" />
                      <span className="font-bold text-[#8d5e46]">紧压红茶五饼 (5 Tea Cakes)</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-dashed border-[#3a271d]/10 pb-[0.5cqh]">
                      <span>蜀中铜器十件 (10 Copperwares)</span>
                      <ArrowRight className="w-[1cqw] h-[1cqw] text-[#8d5e46]" />
                      <span className="font-bold text-[#8d5e46]">高原牛角五十具 (50 Yak Horns)</span>
                    </div>
                  </div>

                  <p className="text-[0.8cqw] opacity-75 leading-relaxed bg-[#f6f2ea]/60 p-[1cqw] rounded-xl border border-[#3a271d]/5">
                    “滇藏互市，以茶易马。中原精贡红茶强健藏胞骨骼，西藏俊悍战马补充都护铁骑军备，此大循环万世之基。”
                    <span className="block text-[0.75cqw] italic opacity-60 mt-1">"The exchange of Pu'er for horses. Highland tea supplements nomad diet, while agile horses fuel military cavalry units."</span>
                  </p>
                </div>

                {/* SVG Balance Scale checking trade value */}
                <div className="col-span-5 flex flex-col items-center justify-center h-full border-l border-[#3a271d]/10 pl-[2.5cqw]">
                  <svg className="w-full h-[18cqh] stroke-[#3a271d] fill-none" viewBox="0 0 200 150">
                    {/* Stand Fulcrum */}
                    <path d="M 100 130 L 100 40 M 80 130 H 120 M 100 40 L 95 35 H 105 Z" strokeWidth="2.5" />
                    
                    {/* Animated Rotating Beam based on Beat */}
                    <g 
                      className="transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] origin-[100px_40px]"
                      style={{
                        transform: beat === 0 ? "rotate(-14deg)" : beat === 1 ? "rotate(0deg)" : "rotate(14deg)"
                      }}
                    >
                      {/* Scale Beam */}
                      <line x1="40" y1="40" x2="160" y2="40" strokeWidth="3" strokeLinecap="round" />
                      
                      {/* Left Pan (Tea) */}
                      <g transform="translate(40, 40)">
                        <line x1="0" y1="0" x2="-15" y2="30" strokeWidth="1" />
                        <line x1="0" y1="0" x2="15" y2="30" strokeWidth="1" />
                        <path d="M -22 30 C -22 45, 22 45, 22 30 Z" fill="#8d5e46" fillOpacity={beat === 0 ? 0.3 : 0.1} strokeWidth="1.5" />
                        <path d="M-6 20h12v6H-6z" fill="#3a271d" className={beat === 0 ? "opacity-100" : "opacity-60"} />
                        <text x="-12" y="14" className="text-[6px] font-mono fill-current stroke-none">TEA</text>
                      </g>

                      {/* Right Pan (Horse) */}
                      <g transform="translate(160, 40)">
                        <line x1="0" y1="0" x2="-15" y2="30" strokeWidth="1" />
                        <line x1="0" y1="0" x2="15" y2="30" strokeWidth="1" />
                        <path d="M -22 30 C -22 45, 22 45, 22 30 Z" fill="#3a271d" fillOpacity={beat === 2 ? 0.3 : 0.1} strokeWidth="1.5" />
                        <circle cx="0" cy="22" r="5" fill="#8d5e46" className={beat === 2 ? "opacity-100" : "opacity-40"} />
                        <text x="-18" y="14" className="text-[6px] font-mono fill-current stroke-none">HORSE</text>
                      </g>
                    </g>
                  </svg>
                  
                  <div className="text-center mt-[1cqh] font-mono text-[0.8cqw]">
                    <span className="font-bold block">
                      {beat === 0 && "【供过于求】 茶剩马缺"}
                      {beat === 1 && "【权衡相称】 估价对等"}
                      {beat === 2 && "【签约易讫】 验马盖章"}
                    </span>
                    <span className="opacity-50 text-[0.7cqw] block mt-0.5 uppercase tracking-wider">
                      {beat === 0 && "Unbalanced: Cargo Surplus" }
                      {beat === 1 && "Equilibrium: Rates Balanced" }
                      {beat === 2 && "Completed: Transaction Approved" }
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Footer */}
          <div className="flex justify-between items-center text-[0.8cqw] font-mono opacity-60 border-t border-[#3a271d]/10 pt-[1cqh]">
            <span>© 1085 - 2026 {isZh ? "大宋茶马司都护府" : "Ancient Tea-Horse Logistics Bureau"}</span>
            <span>{isZh ? "横断山系高寒路线·双干线核算" : "Hengduan Mountainous Route · Barter Verification"}</span>
          </div>
        </div>

        {/* ==================== SCENE 3: PROCESS - STANDARD ==================== */}
        <div className="w-[20%] h-full flex flex-col justify-between pl-[11.5cqw] pr-[4cqw] pt-[4cqw] pb-[4cqh] relative flex-shrink-0 select-none">
          {/* Slide Header */}
          <div className="flex justify-between items-start border-b border-[#3a271d]/15 pb-[1.5cqh]">
            <div>
              <span className="font-mono text-[0.8cqw] tracking-[0.2em] uppercase opacity-70 flex items-center gap-[0.5cqw]">
                <Compass className="w-[1.1cqw] h-[1.1cqw] text-[#8d5e46]" />
                TEA-HORSE TOPOGRAPHIC MAP // 沿途海拔与气候自检
              </span>
              <h1 className="text-[2.2cqw] font-serif font-bold tracking-tight mt-[0.5cqh]">
                雅安至拉萨大马帮行军断面图 <span className="text-[1.3cqw] font-sans font-light tracking-normal opacity-60 ml-2">Winding Mountain Trail Route</span>
              </h1>
            </div>
            <div className="text-right font-mono text-[0.9cqw]">
              <span className="font-bold text-[#8d5e46]">03 // PROCESS</span>
              <span className="block text-[0.7cqw] opacity-50 uppercase tracking-widest mt-[0.5cqh]">Elevation Telemetry</span>
            </div>
          </div>

          {/* Integrated Visual Topographic Map & Live Overlay */}
          <div className="flex-1 flex flex-col justify-between my-[1.5cqh] gap-[1.5cqh]">
            {/* Top half: Topographic SVG Area with crawling caravan icon */}
            <div className="bg-white/60 border border-[#3a271d]/15 rounded-2xl p-[1.5cqw] relative flex flex-col justify-between shadow-sm">
              <div className="flex justify-between text-[0.8cqw] font-mono opacity-60 border-b border-[#3a271d]/10 pb-[0.5cqh]">
                <span>四川雅安 ➔ 西藏昌都 ➔ 拉萨圣城 </span>
                <span className="animate-pulse text-[#8d5e46]">● GPS ELEVATION TRACKER // 实时测绘中</span>
              </div>

              <div className="h-[21cqh] relative flex items-center justify-center my-[1cqh]">
                <svg className="w-full h-full stroke-[#3a271d] fill-none" viewBox="0 0 800 220" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="clayGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8d5e46" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#8d5e46" stopOpacity="0.01" />
                    </linearGradient>
                  </defs>

                  {/* Elevation Mountain profile filled area */}
                  <path 
                    d="M 50 200 L 50 170 Q 150 175, 200 130 T 400 110 T 600 70 T 750 60 L 750 200 Z" 
                    fill="url(#clayGradient)" 
                    stroke="none"
                  />
                  
                  {/* The trail dotted line */}
                  <path 
                    d="M 80 170 C 200 175, 300 90, 420 110 C 520 115, 600 50, 720 55" 
                    strokeWidth="2" 
                    strokeDasharray="4,4" 
                    className="opacity-40" 
                  />

                  {/* Active trail progression */}
                  <path 
                    d="M 80 170 C 200 175, 300 90, 420 110 C 520 115, 600 50, 720 55" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                    strokeDasharray="800"
                    strokeDashoffset={800 - (beat + 1) * 266}
                    className="stroke-[#8d5e46] transition-all duration-[1200ms]"
                  />

                  {/* Stations */}
                  {/* Station 1: Ya'an */}
                  <g transform="translate(80, 170)">
                    <circle cx="0" cy="0" r="5" fill="#3a271d" />
                    <text x="-25" y="-12" className="text-[9px] font-serif font-bold fill-current stroke-none">四川雅安</text>
                    <text x="-28" y="18" className="text-[8px] font-mono fill-[#8d5e46] stroke-none">620m</text>
                  </g>

                  {/* Station 2: Chamdo */}
                  <g transform="translate(420, 110)">
                    <circle cx="0" cy="0" r="5" fill="#3a271d" className={beat >= 1 ? "opacity-100" : "opacity-40"} />
                    <text x="-25" y="-12" className="text-[9px] font-serif font-bold fill-current stroke-none">西藏昌都</text>
                    <text x="-28" y="18" className="text-[8px] font-mono fill-[#8d5e46] stroke-none">3,240m</text>
                  </g>

                  {/* Station 3: Lhasa */}
                  <g transform="translate(720, 55)">
                    <circle cx="0" cy="0" r="6" fill="#8d5e46" className={beat >= 2 ? "opacity-100 animate-ping" : "opacity-30"} />
                    <circle cx="0" cy="0" r="4" fill="#3a271d" />
                    <text x="-25" y="-12" className="text-[9px] font-serif font-bold fill-current stroke-none">拉萨圣城</text>
                    <text x="-28" y="18" className="text-[8px] font-mono fill-[#8d5e46] stroke-none">3,650m</text>
                  </g>

                  {/* Crawling Mule Marker */}
                  <g 
                    className="transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      transform: beat === 0 ? "translate(80px, 170px)" : beat === 1 ? "translate(420px, 110px)" : "translate(720px, 55px)"
                    }}
                  >
                    <circle cx="0" cy="0" r="12" fill="#3a271d" />
                    <PackMuleIcon className="w-[14px] h-[14px] text-[#f6f2ea] absolute -top-[7px] -left-[7px]" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Bottom half: Gauge Telemetry Panel */}
            <div className="grid grid-cols-4 gap-[2cqw]">
              {[
                { 
                  label: "当前海拔 ALTITUDE", 
                  val: beat === 0 ? "620m" : beat === 1 ? "3,240m" : "3,650m", 
                  desc: beat === 0 ? "低海拔温和盆地谷" : beat === 1 ? "寒温高原接壤裂谷" : "圣城日光高寒大盆",
                  icon: Mountain
                },
                { 
                  label: "环境温度 TEMP", 
                  val: beat === 0 ? "24°C" : beat === 1 ? "9°C" : "-2°C", 
                  desc: beat === 0 ? "雨水充沛，茶林茂密" : beat === 1 ? "高原霜冻，多谷风" : "暴雪初歇，地表严寒",
                  icon: Thermometer
                },
                { 
                  label: "氧气压强 BARO", 
                  val: beat === 0 ? "960 hPa" : beat === 1 ? "680 hPa" : "635 hPa", 
                  desc: beat === 0 ? "气压饱和，体能充沛" : beat === 1 ? "低压突袭，注意头痛" : "极地稀薄，缓步耐劳",
                  icon: Wind
                },
                { 
                  label: "行程进度 TREK DAY", 
                  val: beat === 0 ? "Day 01" : beat === 1 ? "Day 45" : "Day 90", 
                  desc: beat === 0 ? "贡茶起渡，征程开拔" : beat === 1 ? "横断渡劫，昌都修整" : "历尽磨难，圣城接印",
                  icon: Activity
                }
              ].map((card, i) => (
                <div key={i} className="bg-white/40 border border-[#3a271d]/12 rounded-xl p-[1.2cqw] flex justify-between items-start shadow-sm transition-all duration-300 hover:bg-white/60">
                  <div className="flex flex-col gap-[0.5cqh]">
                    <span className="font-mono text-[0.7cqw] tracking-wider opacity-60 uppercase">{card.label}</span>
                    <span className="text-[1.8cqw] font-serif font-black text-[#8d5e46]">{card.val}</span>
                    <span className="text-[0.75cqw] opacity-85 leading-tight">{card.desc}</span>
                  </div>
                  <card.icon className="w-[1.5cqw] h-[1.1cqh] text-[#3a271d] opacity-55 mt-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Slide Footer */}
          <div className="flex justify-between items-center text-[0.8cqw] font-mono opacity-60 border-t border-[#3a271d]/10 pt-[1cqh]">
            <span>© 1085 - 2026 {isZh ? "大宋茶马司都护府" : "Ancient Tea-Horse Logistics Bureau"}</span>
            <span>{isZh ? "横断山系高寒路线·沿途高程遥测" : "Hengduan Mountainous Route · Elevation Profiles"}</span>
          </div>
        </div>

        {/* ==================== SCENE 4: MATRIX - DENSE ==================== */}
        <div className="w-[20%] h-full flex flex-col justify-between pl-[11.5cqw] pr-[4cqw] pt-[4cqw] pb-[4cqh] relative flex-shrink-0 select-none">
          {/* Slide Header */}
          <div className="flex justify-between items-start border-b border-[#3a271d]/15 pb-[1.5cqh]">
            <div>
              <span className="font-mono text-[0.8cqw] tracking-[0.2em] uppercase opacity-70 flex items-center gap-[0.5cqw]">
                <Compass className="w-[1.1cqw] h-[1.1cqw] text-[#8d5e46]" />
                TEA-HORSE CHRONICLE MATRIX // 横断山脉高寒险关
              </span>
              <h1 className="text-[2.2cqw] font-serif font-bold tracking-tight mt-[0.5cqh]">
                横断山脉高寒四大天险关卡对比 <span className="text-[1.3cqw] font-sans font-light tracking-normal opacity-60 ml-2">High-Altitude Mountain Passes</span>
              </h1>
            </div>
            <div className="text-right font-mono text-[0.9cqw]">
              <span className="font-bold text-[#8d5e46]">04 // MATRIX</span>
              <span className="block text-[0.7cqw] opacity-50 uppercase tracking-widest mt-[0.5cqh]">Dense Barrier Grid</span>
            </div>
          </div>

          {/* Matrix Grid (2x2 with asymmetrical styling, glowing on different beats) */}
          <div className="flex-1 grid grid-cols-2 gap-[1.5cqw] my-[2cqh] items-stretch">
            {[
              {
                id: 0,
                nameZh: "折多山垭口 // 康巴第一关",
                nameEn: "Zheduo Mountain Pass (4,298m)",
                tagZh: "高反起点 / Gateway to Kham",
                stats: [
                  { label: "适氧度 Acclimatization", val: "Critical (极高风险)", color: "text-red-700" },
                  { label: "峡风速 Gale Speed", val: "12 m/s (裂谷冷飙)" },
                  { label: "水源配 Water Access", val: "Unstable (寒溪易封)" },
                  { label: "驮配率 Mule Capacity", val: "Standard Load (不调载)" }
                ],
                descZh: "翻越此关即入藏区，马帮高反多发。空气含氧量降至68%，极多高山急流冷飙袭扰。",
                descEn: "The gateway to the Tibetan plateau. Sudden pressure drops cause oxygen saturation levels to plummet, causing high mule panic risks."
              },
              {
                id: 1,
                nameZh: "雀儿山险隘 // 冰川上的雄鹰",
                nameEn: "Que'er Glacial Crest (5,050m)",
                tagZh: "极高冰川 / Glacial Void",
                stats: [
                  { label: "适氧度 Acclimatization", val: "Severe (冰霜肺阻)" },
                  { label: "峡风速 Gale Speed", val: "18 m/s (高寒狂飙)" },
                  { label: "水源配 Water Access", val: "Frozen (融雪汲水)" },
                  { label: "驮配率 Mule Capacity", val: "Reduce Load -15% (减重十五)" }
                ],
                descZh: "川藏第一险，怪石如雀爪。终年冰雪覆盖，马帮需踩着硬冰雪攀爬，滑坠风险极高。",
                descEn: "One of the most dangerous peaks. Packed glaciers freeze mule hooves. Demands strict visual checks on harness straps."
              },
              {
                id: 2,
                nameZh: "东达山极顶 // 生命禁区空无",
                nameEn: "Dongda Oxygen Void (5,130m)",
                tagZh: "终极高度 / The Deep Void",
                stats: [
                  { label: "适氧度 Acclimatization", val: "Extreme (生命线逼近)", color: "text-red-800 font-extrabold" },
                  { label: "峡风速 Gale Speed", val: "22 m/s (暴雪冷飙)" },
                  { label: "水源配 Water Access", val: "Dry (生命荒沙)" },
                  { label: "驮配率 Mule Capacity", val: "Reduce Load -30% (减重三十)", color: "text-amber-800" }
                ],
                descZh: "滇藏线最高点，草木不生。空气稀薄如纸，体能消耗翻倍，马帮必须强灌姜茶维持心肺。",
                descEn: "The absolute altitude climax. Treeless and windswept. Reduced air pressure restricts mule capacity to 30kg maximum."
              },
              {
                id: 3,
                nameZh: "怒江七十二拐 // 云端剪刀弯",
                nameEn: "Nujiang Seventy-Two Turns (4,658m)",
                tagZh: "极速下降 / The Giant Drop",
                stats: [
                  { label: "适氧度 Acclimatization", val: "Recovering (气温回升)" },
                  { label: "峡风速 Gale Speed", val: "8 m/s (热风干热)" },
                  { label: "水源配 Water Access", val: "Excellent (江河灌溉)", color: "text-emerald-700" },
                  { label: "驮配率 Mule Capacity", val: "Standard Load (足载行军)" }
                ],
                descZh: "从四千米急速降至两千米，发卡弯密布。刹车蹄铁极易烧红，但怒江河谷温度升高，植被复苏。",
                descEn: "A dramatic 2,000m descent in minutes. Intense hairpin turns strain animal knee joints but restore vital blood oxygen levels."
              }
            ].map((quad) => {
              // Custom active highlight state depending on beat:
              // Beat 0 highlights 0 and 1
              // Beat 1 highlights 1 and 2
              // Beat 2 highlights 2 and 3
              const isActive = (beat === 0 && (quad.id === 0 || quad.id === 1)) ||
                               (beat === 1 && (quad.id === 1 || quad.id === 2)) ||
                               (beat === 2 && (quad.id === 2 || quad.id === 3));

              return (
                <div 
                  key={quad.id} 
                  className={`rounded-2xl p-[1.5cqw] flex flex-col justify-between transition-all duration-[600ms] ${
                    isActive 
                      ? "border-[2.5px] border-[#8d5e46] bg-[#fbf9f2] shadow-xl shadow-[#8d5e46]/10 scale-[1.01]" 
                      : "border border-[#3a271d]/12 bg-white/30 opacity-40 scale-[0.99]"
                  }`}
                >
                  {/* Top Name Row */}
                  <div className="border-b border-[#3a271d]/10 pb-[0.8cqh] flex justify-between items-start">
                    <div>
                      <h3 className="font-serif font-bold text-[1.1cqw] text-[#3a271d]">{quad.nameZh}</h3>
                      <span className="block font-mono text-[0.75cqw] text-zinc-500">{quad.nameEn}</span>
                    </div>
                    <span className={`text-[0.7cqw] font-mono px-2 py-0.5 rounded-md ${isActive ? "bg-[#8d5e46]/10 text-[#8d5e46] font-bold" : "bg-[#3a271d]/5"}`}>
                      {quad.tagZh}
                    </span>
                  </div>

                  {/* Quad details stats list */}
                  <div className="grid grid-cols-2 gap-[1cqw] my-[1.2cqh] text-[0.8cqw] font-mono">
                    {quad.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="border-b border-[#3a271d]/5 pb-[0.4cqh]">
                        <span className="text-zinc-500 block text-[0.7cqw]">{stat.label}</span>
                        <span className={`font-bold ${stat.color || "text-[#3a271d]"}`}>{stat.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Poetic description paragraph */}
                  <div className="text-[0.8cqw] leading-relaxed border-t border-dashed border-[#3a271d]/10 pt-[0.8cqh] font-sans">
                    <p className="opacity-90">{quad.descZh}</p>
                    <p className="opacity-60 italic text-[0.75cqw] mt-0.5">{quad.descEn}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slide Footer */}
          <div className="flex justify-between items-center text-[0.8cqw] font-mono opacity-60 border-t border-[#3a271d]/10 pt-[1cqh]">
            <span>© 1085 - 2026 {isZh ? "大宋茶马司都护府" : "Ancient Tea-Horse Logistics Bureau"}</span>
            <span>{isZh ? "横断山系高寒路线·天险指标矩阵" : "Hengduan Mountainous Route · Passes Metrics"}</span>
          </div>
        </div>

        {/* ==================== SCENE 5: LEDGER - EXTREME ==================== */}
        <div className="w-[20%] h-full flex flex-col justify-between pl-[11.5cqw] pr-[4cqw] pt-[4cqw] pb-[4cqh] relative flex-shrink-0 select-none">
          {/* Slide Header */}
          <div className="flex justify-between items-start border-b border-[#3a271d]/15 pb-[1.5cqh]">
            <div>
              <span className="font-mono text-[0.8cqw] tracking-[0.2em] uppercase opacity-70 flex items-center gap-[0.5cqw]">
                <Compass className="w-[1.1cqw] h-[1.1cqw] text-[#8d5e46]" />
                TEA-HORSE GRAND MANIFEST // 都护府大契官司账目
              </span>
              <h1 className="text-[2.2cqw] font-serif font-bold tracking-tight mt-[0.5cqh]">
                滇藏茶马贸易都护府互市契账 <span className="text-[1.3cqw] font-sans font-light tracking-normal opacity-60 ml-2">The Caravan Manifest Ledger</span>
              </h1>
            </div>
            <div className="text-right font-mono text-[0.9cqw]">
              <span className="font-bold text-[#8d5e46]">05 // LEDGER</span>
              <span className="block text-[0.7cqw] opacity-50 uppercase tracking-widest mt-[0.5cqh]">Extreme Density Manifest</span>
            </div>
          </div>

          {/* Highly detailed ancient ink-sheet ledger */}
          <div className="flex-1 bg-[#faf7f0] border-2 border-[#3a271d]/20 rounded-2xl p-[1.8cqw] shadow-lg relative flex flex-col justify-between my-[1.5cqh]">
            {/* Ink grid design */}
            <div className="absolute inset-0 pointer-events-none border border-dashed border-[#3a271d]/10 m-2 rounded-xl" />
            
            <div className="border-b-2 border-[#3a271d]/20 pb-[0.8cqh] mb-[1cqh] flex justify-between items-end">
              <div>
                <span className="font-mono text-[0.75cqw] text-[#8d5e46] tracking-widest uppercase">IMPERIAL ANXI PROTECTORATE REGISTER</span>
                <h3 className="font-serif font-black text-[1.4cqw] text-[#3a271d]">都护府户部互市税课官契</h3>
              </div>
              <span className="text-[0.75cqw] font-mono opacity-60 italic">Serial: 0x09_LEDGER_A</span>
            </div>

            {/* Complete Data Table */}
            <div className="flex-1 overflow-auto">
              <table className="w-full text-left font-mono text-[0.8cqw] border-collapse">
                <thead>
                  <tr className="border-b border-[#3a271d]/20 text-[#3a271d] font-bold text-[0.75cqw] uppercase bg-[#8d5e46]/5">
                    <th className="py-2 px-2 border-r border-[#3a271d]/10">货品 Ref</th>
                    <th className="py-2 px-2 border-r border-[#3a271d]/10">物项 Trade Goods</th>
                    <th className="py-2 px-2 border-r border-[#3a271d]/10 text-center">发运 Mules</th>
                    <th className="py-2 px-2 border-r border-[#3a271d]/10 text-right">总货量 Qty</th>
                    <th className="py-2 px-2 border-r border-[#3a271d]/10 text-center">沿途物耗 Loss</th>
                    <th className="py-2 px-2">结案稽核 Verification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#3a271d]/10">
                  {[
                    { id: "0x09-01", name: "普洱生茶砖 (Pu'er Tea Bricks)", mules: "120 驮", qty: "2,400 饼 / Cakes", loss: "-2 驮 (坠江 / Landslide)", stat: "结清 / Cleared", active: true },
                    { id: "0x09-02", name: "金尖黑条茶 (Black Tea Bricks)", mules: "150 驮", qty: "3,000 饼 / Cakes", loss: "-3 驮 (高寒受潮 / Damp)", stat: "结清 / Cleared", active: beat >= 1 },
                    { id: "0x09-03", name: "高原湖青盐 (Nomad Lake Salt)", mules: "80 驮", qty: "8,000 斤 / Catty", loss: "-0 驮 (全额无损 / Zero)", stat: "结清 / Cleared", active: beat >= 1 },
                    { id: "0x09-04", name: "蜀中锻铜器 (Bronzewares)", mules: "25 驮", qty: "500 件 / Units", loss: "-1 驮 (急流散失 / Rapids)", stat: "结清 / Cleared", active: beat >= 2 }
                  ].map((row, rIdx) => (
                    <tr key={rIdx} className={`hover:bg-[#8d5e46]/5 transition-colors ${row.active ? "opacity-100" : "opacity-25"}`}>
                      <td className="py-1.5 px-2 border-r border-[#3a271d]/10 font-bold">{row.id}</td>
                      <td className="py-1.5 px-2 border-r border-[#3a271d]/10 font-sans">{row.name}</td>
                      <td className="py-1.5 px-2 border-r border-[#3a271d]/10 text-center">{row.mules}</td>
                      <td className="py-1.5 px-2 border-r border-[#3a271d]/10 text-right font-bold">{row.qty}</td>
                      <td className="py-1.5 px-2 border-r border-[#3a271d]/10 text-center text-[#8d5e46]">{row.loss}</td>
                      <td className="py-1.5 px-2 text-emerald-800 font-extrabold">{row.stat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Exchanged Horses Summary Panel */}
            <div className="bg-[#8d5e46]/5 p-[1cqw] rounded-xl border border-[#3a271d]/10 my-[0.8cqh] flex justify-between items-center text-[0.85cqw] font-mono">
              <div>
                <span className="opacity-60 block">拉萨互市易得战马总数:</span>
                <span className="font-serif font-black text-[1.1cqw] text-[#3a271d]">壹佰贰拾肆匹高原健壮战马</span>
              </div>
              <div className="text-right">
                <span className="opacity-60 block">TOTAL PRIZED HORSES GAINED:</span>
                <span className="font-bold text-[#8d5e46]">124 Elite Combat Steeds</span>
              </div>
            </div>

            {/* Vermilion Stamp overlay with spring animation on beat === 2 */}
            <div className="absolute right-[4cqw] bottom-[4cqh] pointer-events-none select-none">
              <div 
                className={`transition-all duration-[800ms] ${
                  beat === 2 
                    ? "opacity-90 scale-100 rotate-[-12deg]" 
                    : beat === 1
                      ? "opacity-20 scale-150 rotate-[15deg] animate-pulse"
                      : "opacity-0 scale-50"
                }`}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
                }}
              >
                {/* Vintage Circular Chinese Stamp */}
                <div className="w-[7.5cqw] h-[7.5cqw] rounded-full border-4 border-double border-red-600 flex flex-col items-center justify-center bg-red-600/5 shadow-inner shadow-red-600/10">
                  <div className="text-red-600 font-serif font-black text-[1.2cqw] leading-none text-center">
                    都护府
                    <span className="block text-[1cqw] my-0.5">关防</span>
                    <span className="text-[0.6cqw] font-mono tracking-widest block uppercase">SEAL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic ledger ticker footer */}
            <div className="flex justify-between items-center text-[0.75cqw] font-mono opacity-70 border-t border-[#3a271d]/10 pt-[0.8cqh] mt-[0.5cqh]">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
                {isZh ? "账目汇总完成，关引大契合规" : "AUDIT: COMPLETE & LOGS CLEARED"}
              </span>
              <span>STAMP COORD: 0x09-B-SEAL</span>
            </div>
          </div>

          {/* Slide Footer */}
          <div className="flex justify-between items-center text-[0.8cqw] font-mono opacity-60 border-t border-[#3a271d]/10 pt-[1cqh]">
            <span>© 1085 - 2026 {isZh ? "大宋茶马司都护府" : "Ancient Tea-Horse Logistics Bureau"}</span>
            <span>{isZh ? "横断山系高寒路线·圣城大契终本" : "Hengduan Mountainous Route · Terminal Ledger"}</span>
          </div>
        </div>
      </div>

      {/* ==================== LEFT VERTICAL ALTITUDE CLIMBING SCALE ==================== */}
      <div className="absolute left-[2.2cqw] top-[8cqh] bottom-[8cqh] w-[6.5cqw] z-30 select-none flex flex-col items-center">
        {/* Top Boundary Label */}
        <div className="absolute top-[-4.5cqh] left-0 right-0 text-center flex flex-col items-center gap-[0.2cqh]">
          <span className="font-mono text-[0.6cqw] text-[#8d5e46] font-bold tracking-widest uppercase">PLATEAU CLIMB</span>
          <span className="font-serif font-black text-[0.8cqw] text-[#3a271d]">高原高程仪</span>
        </div>

        {/* The wood-charcoal vertical line */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-[#3a271d]/25 left-[3.5cqw]" />

        {/* Elevation Ticks on the left side of the line */}
        {TICKS.map((tick) => {
          const topPercent = ((4500 - tick) / 3500) * 100;
          return (
            <div 
              key={tick} 
              className="absolute flex items-center justify-end" 
              style={{ 
                top: `${topPercent}%`, 
                right: "calc(100% - 3.5cqw + 4px)", 
                transform: "translateY(-50%)",
                width: "3cqw"
              }}
            >
              <span className="font-mono text-[0.6cqw] text-[#3a271d]/40 font-semibold">{tick}m</span>
              <span className="w-[4px] h-[1px] bg-[#3a271d]/30 ml-[4px]" />
            </div>
          );
        })}

        {/* 5 Station Nodes on the vertical line */}
        {STATIONS.map((station) => {
          const topPercent = ((4500 - station.elevation) / 3500) * 100;
          const isCurrent = station.sceneNum === scene;
          const isPassed = station.sceneNum < scene;
          
          return (
            <div
              key={station.sceneNum}
              className="absolute group z-40"
              style={{
                top: `${topPercent}%`,
                left: "3.5cqw",
                transform: "translate(-50%, -50%)"
              }}
            >
              {/* Node trigger */}
              <div 
                className="w-[1.8cqw] h-[1.8cqw] flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 relative"
                onClick={() => onNavigate && onNavigate(station.sceneNum, 0)}
              >
                {/* Outer pulsing ring for current scene */}
                {isCurrent && (
                  <span className="absolute inset-0 rounded-full border border-[#8d5e46] opacity-65 animate-ping" />
                )}
                
                {/* Node Dot */}
                <div 
                  className={`w-[0.9cqw] h-[0.9cqw] rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    isCurrent 
                      ? "bg-[#8d5e46] border-[#3a271d] scale-125 shadow-md shadow-[#8d5e46]/30" 
                      : isPassed
                        ? "bg-[#3a271d]/80 border-[#3a271d]/80 group-hover:scale-110"
                        : "bg-[#f6f2ea] border-[#3a271d]/40 group-hover:border-[#8d5e46] group-hover:scale-110"
                  }`}
                >
                  <div className={`w-[0.3cqw] h-[0.3cqw] rounded-full ${isCurrent ? "bg-white" : "bg-transparent"}`} />
                </div>
              </div>

              {/* Station Label beside the node */}
              <div className="absolute left-[1.3cqw] top-1/2 -translate-y-1/2 pointer-events-none">
                <span className={`font-serif text-[0.75cqw] font-extrabold tracking-tight transition-colors duration-300 whitespace-nowrap ${
                  isCurrent ? "text-[#8d5e46]" : "text-[#3a271d]/40 group-hover:text-[#3a271d]"
                }`}>
                  {isZh ? station.nameZh : station.nameEn}
                </span>
              </div>

              {/* Hover parchment tooltip */}
              <div className="absolute left-[5.5cqw] top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 z-50">
                <div className="relative bg-[#faf7f0] border-2 border-[#3a271d] p-[1cqw] rounded-xl shadow-xl w-[12cqw] before:content-[''] before:absolute before:right-full before:top-1/2 before:-translate-y-1/2 before:border-[6px] before:border-transparent before:border-r-[#3a271d] after:content-[''] after:absolute after:right-full after:top-1/2 after:-translate-y-1/2 after:border-[4px] after:border-transparent after:border-r-[#faf7f0] after:mr-[2px]">
                  {/* Parchment background effect */}
                  <div className="absolute inset-0 bg-[#3a271d]/[0.02] rounded-lg pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col gap-[0.4cqh]">
                    <div className="flex justify-between items-baseline border-b border-[#3a271d]/15 pb-[0.4cqh] mb-[0.2cqh]">
                      <span className="font-serif font-black text-[0.8cqw] text-[#3a271d]">{isZh ? station.nameZh : station.nameEn}</span>
                      <span className="font-mono text-[0.7cqw] font-bold text-[#8d5e46]">{station.elevation}m</span>
                    </div>
                    <div className="grid grid-cols-2 gap-[0.5cqw] text-[0.6cqw] font-mono text-[#3a271d]/75">
                      <div className="flex flex-col">
                        <span className="text-[#3a271d]/45 text-[0.5cqw] uppercase font-bold tracking-wider">OXYGEN</span>
                        <span className="font-black text-[#3a271d]">{station.oxygen} (O₂)</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#3a271d]/45 text-[0.5cqw] uppercase font-bold tracking-wider">PRESSURE</span>
                        <span className="font-black text-[#3a271d]">{station.pressure}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Organic pixel-shaded pack-mule/caravan icon */}
        <div 
          className="absolute z-30 transition-all duration-[1200ms] flex items-center"
          style={{
            top: `${((4500 - (STATIONS[scene - 1]?.elevation || 1200)) / 3500) * 100}%`,
            left: "3.5cqw",
            transform: "translate(-50%, -50%)",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          {/* Connector dashed line pointing to the axis node */}
          <div className="relative left-[1.2cqw] flex items-center">
            {/* Dashed micro pointer line */}
            <div className="w-[1.2cqw] h-[1px] border-t-2 border-dashed border-[#8d5e46]/60" />
            
            {/* Rounded wooden caravan stamp card */}
            <div className="w-[2.4cqw] h-[2.4cqw] rounded-xl bg-[#faf7f0] border-2 border-[#8d5e46] flex items-center justify-center shadow-lg shadow-[#8d5e46]/20 transition-all duration-300 hover:scale-105">
              <PackMuleIcon className="w-[1.5cqw] h-[1.4cqw] text-[#8d5e46] animate-pulse" />
            </div>
          </div>
        </div>

        {/* Bottom Boundary Label */}
        <div className="absolute bottom-[-4.5cqh] left-0 right-0 text-center flex flex-col items-center gap-[0.2cqh]">
          <span className="font-mono text-[0.6cqw] text-[#3a271d]/40 font-bold tracking-widest uppercase">ELEVATION METRIC</span>
          <span className="font-mono text-[0.7cqw] font-extrabold text-[#3a271d]/60">1,000m - 4,500m</span>
        </div>
      </div>
    </div>
  );
}
