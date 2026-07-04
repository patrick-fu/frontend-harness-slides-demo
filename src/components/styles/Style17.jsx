import React from "react";

export const getMetadata = (lang) => {
  const isZh = lang === "zh";
  return {
    id: "17",
    tier: "A",
    name: isZh ? "哥白尼日心说测算手稿" : "Copernican Heliocentrism Memo",
    theme: isZh ? "文艺复兴天文学范式革命" : "Renaissance Astronomy Revolution",
    densityLabel: isZh ? "天体轨线" : "Planetary Orbits",
    colors: { bg: "bg-[#FAF7F2]", ink: "text-[#2c2621]", panel: "border-[#e0d6ca]" },
    typography: { header: "font-serif", body: "font-serif" },
    scenes: [
      {
        id: 1,
        title: isZh ? "太阳中心说之确立" : "The Heliocentric Postulate",
        beats: [
          {
            id: 1,
            action: isZh ? "拟定日心基准" : "Establish Solar Center",
            title: isZh ? "宇宙中心之重塑" : "The Core Heliocentric Axiom",
            body: isZh ? "“太阳是宇宙的中心，所有天体均绕其运转。”这一论断打破了教廷宣扬的地心说教条，将人类视野引向更辽阔的深空。" : "“The Sun sits at the center of the universe, and all celestial bodies revolve around it.” This postulate shattered the geocentric dogma, guiding human sight to the deeper cosmos."
          },
          {
            id: 2,
            action: isZh ? "测算地球公转" : "Calculate Earth Path",
            title: isZh ? "地球三重运动之测算" : "The Triple Motion of Earth",
            body: isZh ? "地球并非宇宙静止的基座，而是同时承载着自转、绕日公转与赤纬角变动。由此，星空之动得以简洁解释。" : "The Earth is not the stationary foundation of the cosmos; it undergoes diurnal rotation, annual revolution around the Sun, and axial declination. Thus, stellar movements are elegantly resolved."
          },
          {
            id: 3,
            action: isZh ? "绘制恒星天球" : "Map Stellar Sphere",
            title: isZh ? "无垠恒星天球之静止" : "The Stationary Stellar Sphere",
            body: isZh ? "最外层是恒星天球，它是完全静止不动的。这一模型揭示了恒星视差极小的原因——星辰的尺度远超世人想象。" : "The outermost sphere is the stellar sphere, which is completely immobile. This model reveals the reason for negligible stellar parallax: the stars are far deeper than once imagined."
          }
        ]
      },
      {
        id: 2,
        title: isZh ? "地心与日心軌对立" : "Geocentric vs Heliocentric System",
        beats: [
          {
            id: 1,
            action: isZh ? "投影托勒密轨" : "Project Ptolemaic Orbit",
            title: isZh ? "托勒密本轮之谬误" : "The Error of Ptolemaic Epicycles",
            body: isZh ? "地心说为了迎合“完美圆周运动”和逆行现象，不得不套叠数十个均轮与本轮，使星体轨迹变得极其繁复臃肿。" : "To satisfy 'perfect circular motions' and retrogrades, the geocentric model was forced to layer dozens of epicycles upon deferents, rendering orbital paths bloated."
          },
          {
            id: 2,
            action: isZh ? "对齐太阳圆轴" : "Align Solar Axis",
            title: isZh ? "均速圆周运动之归一" : "Uniform Circular Harmonization",
            body: isZh ? "将太阳置于轨道几何交点，行星绕日作单一且匀速的圆周运动。用最纯粹的几何对称，降解宇宙运行的维度。" : "Placing the Sun at the center, planets revolve around it in single, uniform circular motions. Pure geometric symmetry reduces the complexity of cosmic paths."
          },
          {
            id: 3,
            action: isZh ? "激活日心重力" : "Activate Solar Sphere",
            title: isZh ? "天体引力学之先声" : "The Dawn of Solar Centered Order",
            body: isZh ? "将恒星天、土星、木星、火星、地球、金星与水星依次由外向内排列，全天轨道在这一瞬间归于秩序的绝对和谐。" : "Arranging the stellar sphere, Saturn, Jupiter, Mars, Earth, Venus, and Mercury from outside in, the orbital pathways align in perfect harmony."
          }
        ]
      },
      {
        id: 3,
        title: isZh ? "均轮与本轮测算" : "Deferents & Epicycles Geometry",
        beats: [
          {
            id: 1,
            action: isZh ? "载入几何骨架" : "Load Geometric Scaffold",
            title: isZh ? "小本轮测算原理" : "Calculations of the Epicycle",
            body: isZh ? "为了完全消除轨道偏心误差，手稿中引入了微小的“小本轮”（Epicyplet）来辅助校正行星到太阳的实际距离。" : "To completely eliminate eccentric errors, the manuscript introduces small epicyplets to assist in calibrating actual planetary distances to the Sun."
          },
          {
            id: 2,
            action: isZh ? "校准岁差偏角" : "Calibrate Precession",
            title: isZh ? "地轴赤纬岁差改正" : "Correction of Axial Precession",
            body: isZh ? "通过微调地轴指向的倾角，对齐回归年与恒星年的时间差值，计算得出每年万分之几度的精确进动。" : "By fine-tuning the axial tilt, the discrepancy between tropical and sidereal years is resolved, yielding a precession of mere fractions of a degree."
          },
          {
            id: 3,
            action: isZh ? "锁定期差轨道" : "Lock Phase Difference",
            title: isZh ? "轨道相位闭环校验" : "Orbital Phase Loop Calibration",
            body: isZh ? "当火星与木星在大冲位置的视差偏角与计算圆周完美重合时，这一张繁杂的天体力学网络便完成了精确闭环。" : "When the parallax offsets of Mars and Jupiter at opposition align perfectly with circular calculations, the celestial mechanics network achieves closure."
          }
        ]
      },
      {
        id: 4,
        title: isZh ? "天体视运动差数值" : "Stellar Parallax & Metrics",
        beats: [
          {
            id: 1,
            action: isZh ? "建立恒星象限" : "Establish Stellar Quadrant",
            title: isZh ? "天区象限与方位测算" : "Stellar Quadrants and Bearing",
            body: isZh ? "将天空划分为黄道四大天区象限。以春分点为零度，观测各大行星冲日与留日的方位和时间差值。" : "Dividing the sky into four zodiacal quadrants. With the vernal equinox as zero, the bearings of planet oppositions are mapped."
          },
          {
            id: 2,
            action: isZh ? "计算逆行弧度" : "Calculate Retrograde Path",
            title: isZh ? "行星逆行视运动解析" : "Planetary Retrograde Apparent Motion",
            body: isZh ? "逆行并不是行星改变了运动方向。由于地球公转速度更快，从地球看去，外侧行星在轨道相交时产生后退视错觉。" : "Retrograde is not a change in planetary direction. As Earth revolves faster, outer planets appear to move backward when Earth overtakes them."
          },
          {
            id: 3,
            action: isZh ? "对齐赤黄交角" : "Align Obliquity Angle",
            title: isZh ? "黄赤交角之周期位移" : "Obliquity of the Ecliptic Period",
            body: isZh ? "微调赤道面与黄道面之间约23.5度的夹角变动，消除了黄纬坐标系中积累数百年的纬度漂移差额。" : "Adjusting the 23.5-degree angle between equator and ecliptic, eliminating the latitude drift accumulated in records over centuries."
          }
        ]
      },
      {
        id: 5,
        title: isZh ? "日心说历表汇总" : "Heliocentric Catalog & Ephemerides",
        beats: [
          {
            id: 1,
            action: isZh ? "拉取恒星赤经" : "Fetch Stellar Ephemerides",
            title: isZh ? "各大天体公转轨道根数" : "Orbital Elements of Celestial Spheres",
            body: isZh ? "汇总六大行星与恒星天的测算常数。包含恒星天周期、均轮半径比例及近地偏心率等核心参数。" : "Aggregating calculation constants for the six planets and stellar sphere, including orbit periods, radii proportions, and eccentricities."
          },
          {
            id: 2,
            action: isZh ? "解算会合周期" : "Resolve Synodic Periods",
            title: isZh ? "行星会合运动偏角修正" : "Calibrating Synodic Angle Offsets",
            body: isZh ? "通过扣除地球自身的周年运行基数，计算求得各外行星在黄道天区中真正的会合运动周期值。" : "By subtracting Earth's annual movement baseline, the true synodic periods of outer planets on the ecliptic are calculated."
          },
          {
            id: 3,
            action: isZh ? "签发教廷御前书" : "Sign Imperial Certificate",
            title: isZh ? "哥白尼天体运行论签呈" : "The De Revolutionibus Endorsement",
            body: isZh ? "手稿最终编入《天体运行论》第六卷，盖上学术红蜡火漆，标志着人类天文学范式革命的最终起航。" : "The manuscript is compiled into De Revolutionibus Orbium Coelestium, sealed with red wax, marking the launch of the astronomical revolution."
          }
        ]
      }
    ]
  };
};

export default function Style17({ scene, beat, language, onNavigate, isThumbnail }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];

  const getBeatOpacity = (elementBeat) => {
    return beat >= elementBeat ? "opacity-100 filter-none" : "opacity-10 pointer-events-none";
  };

  const renderNavigation = () => {
    if (isThumbnail || !onNavigate) return null;

    const planets = [
      { id: 1, nameZh: "水星", nameEn: "Mercurius", r: "1.4cqw", angle: 45 },
      { id: 2, nameZh: "金星", nameEn: "Venus", r: "2.3cqw", angle: 135 },
      { id: 3, nameZh: "地球", nameEn: "Terra", r: "3.2cqw", angle: 220 },
      { id: 4, nameZh: "火星", nameEn: "Mars", r: "4.1cqw", angle: 310 },
      { id: 5, nameZh: "木星", nameEn: "Iupiter", r: "5.0cqw", angle: 15 }
    ];

    return (
      <div className="absolute bottom-[2.5cqw] right-[2.5cqw] w-[13cqw] h-[13cqw] z-40 select-none pointer-events-auto">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#2c2621]">
          <circle cx="50" cy="50" r="2" fill="#8c2d19" />
          <text x="50" y="45" fontSize="3.5" textAnchor="middle" className="font-serif italic fill-[#8c2d19] font-bold">Sol</text>
          
          {planets.map((p, idx) => {
            const rad = (p.angle * Math.PI) / 180;
            const rVal = parseFloat(p.r) * 10;
            const cx = 50 + rVal * Math.cos(rad);
            const cy = 50 + rVal * Math.sin(rad);
            const isActive = scene === p.id;

            return (
              <g key={p.id} className="cursor-pointer group" onClick={() => onNavigate(p.id, 0)}>
                <circle 
                  cx="50" 
                  cy="50" 
                  r={rVal} 
                  fill="none" 
                  stroke={isActive ? "#8c2d19" : "#2c2621"} 
                  strokeWidth={isActive ? "0.4" : "0.15"} 
                  strokeDasharray={isActive ? "none" : "1.5 1.5"} 
                  className="transition-all duration-500"
                />
                <circle 
                  cx={cx} 
                  cy={cy} 
                  r={isActive ? "3.5" : "2"} 
                  fill={isActive ? "#8c2d19" : "#FAF7F2"} 
                  stroke={isActive ? "#FAF7F2" : "#2c2621"} 
                  strokeWidth={isActive ? "1" : "0.5"} 
                  className="transition-all duration-500 group-hover:scale-125"
                  style={{
                    filter: isActive ? "drop-shadow(0 0 4px rgba(140, 45, 25, 0.6))" : "none"
                  }}
                />
                <text 
                  x={cx} 
                  y={cy - (isActive ? 5 : 3.5)} 
                  fontSize="2.8" 
                  textAnchor="middle" 
                  className={`font-serif italic transition-all duration-500 ${isActive ? "fill-[#8c2d19] font-bold scale-110" : "fill-[#2c2621]/60 opacity-0 group-hover:opacity-100"}`}
                >
                  {language === "zh" ? p.nameZh : p.nameEn}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  };

  return (
    <div className="w-full h-full relative bg-[#FAF7F2] text-[#2c2621] font-serif overflow-hidden p-[3.5cqw] select-none">
      <style>{`
        @keyframes sceneFadeIn {
          from {
            opacity: 0;
            transform: scale(0.97) translateY(0.5cqh);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0);
          }
        }
        .animate-scene-enter {
          animation: sceneFadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes pulseGold {
          0%, 100% {
            box-shadow: 0 0 5px rgba(212, 163, 89, 0.2);
            border-color: rgba(44, 38, 33, 0.15);
          }
          50% {
            box-shadow: 0 0 20px rgba(212, 163, 89, 0.5);
            border-color: rgba(140, 45, 25, 0.6);
          }
        }
        .animate-pulse-gold {
          animation: pulseGold 2.5s ease-in-out infinite;
        }
        
        @keyframes pulseBorder {
          0%, 100% {
            border-color: rgba(44, 38, 33, 0.15);
          }
          50% {
            border-color: rgba(140, 45, 25, 0.5);
          }
        }
        .animate-pulse-border {
          animation: pulseBorder 3s ease-in-out infinite;
        }
      `}</style>

      {/* Static Background Parchment Layout */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] h-full w-full" style={{
        backgroundImage: "linear-gradient(#2c2621 1px, transparent 1px), linear-gradient(90deg, #2c2621 1px, transparent 1px)",
        backgroundSize: "3cqw 3cqw"
      }} />

      <div className="absolute inset-[1.5cqw] border border-[#2c2621]/15 pointer-events-none rounded-[0.5cqw]" />
      <div className="absolute inset-[1.7cqw] border border-[#2c2621]/5 pointer-events-none rounded-[0.4cqw]" />

      <div className="absolute top-[2.2cqw] left-[2.2cqw] text-[0.7cqw] font-mono opacity-35 select-none pointer-events-none tracking-wider">
        LAT. 54° 23' N / LONG. 19° 41' E
      </div>
      <div className="absolute top-[2.2cqw] right-[2.2cqw] text-[0.7cqw] font-mono opacity-35 select-none pointer-events-none tracking-wider">
        FRAUENBURGUM • OBSERVATORIUM
      </div>

      {/* Dynamic Content Container */}
      <div key={scene} className="w-full h-full relative animate-scene-enter flex flex-col justify-between z-10">
        
        {scene === 1 && (
          <div className="w-full h-full flex flex-col items-center justify-between py-[1cqh]">
            {/* Header / Meta */}
            <div className="text-center">
              <span className="font-serif text-[0.9cqw] tracking-[0.25em] uppercase opacity-60 text-[#2c2621]">
                {meta.theme}
              </span>
            </div>

            {/* Central Celestial Sphere */}
            <div className="relative w-[30cqw] h-[30cqw] flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#2c2621]">
                {/* Sun Center */}
                <circle cx="50" cy="50" r="3" fill="#8c2d19" />
                <circle cx="50" cy="50" r="6" fill="none" stroke="#8c2d19" strokeWidth="0.15" strokeDasharray="1 1" className="animate-ping" style={{ animationDuration: "3s" }} />
                <text x="50" y="44" fontSize="3.5" textAnchor="middle" className="font-serif italic fill-[#8c2d19] font-bold">Sol</text>

                {/* Concentric Orbits */}
                <circle cx="50" cy="50" r="14" fill="none" stroke="#2c2621" strokeWidth="0.15" strokeDasharray="1 1" />
                <circle cx="50" cy="50" r="23" fill="none" stroke="#2c2621" strokeWidth="0.15" strokeDasharray="1 1" />
                
                {/* Earth Orbit (Highlighted on Beat 1) */}
                <circle 
                  cx="50" 
                  cy="50" 
                  r="32" 
                  fill="none" 
                  stroke={beat >= 1 ? "#8c2d19" : "#2c2621"} 
                  strokeWidth={beat >= 1 ? "0.35" : "0.15"} 
                  strokeDasharray={beat >= 1 ? "none" : "1.5 1.5"} 
                  className="transition-all duration-700"
                />

                <circle cx="50" cy="50" r="41" fill="none" stroke="#2c2621" strokeWidth="0.15" strokeDasharray="1 1" />

                {/* Outer Stellar Sphere (Highlighted on Beat 2) */}
                <circle 
                  cx="50" 
                  cy="50" 
                  r="48" 
                  fill="none" 
                  stroke={beat >= 2 ? "#2c2621" : "#2c2621/30"} 
                  strokeWidth="0.3" 
                  strokeDasharray="2 2" 
                  className="transition-all duration-700"
                />

                {/* Planets on Orbits */}
                <g className="animate-rotate-slow" style={{ transformOrigin: "50px 50px", animationDuration: "40s" }}>
                  {/* Mercury */}
                  <circle cx="50" cy="36" r="1.2" fill="#2c2621" />
                  <text x="50" y="33" fontSize="2.2" textAnchor="middle" className="font-serif italic fill-[#2c2621]/70">Mercurius</text>
                  
                  {/* Venus */}
                  <circle cx="33.7" cy="61.3" r="1.6" fill="#2c2621" />
                  <text x="29" y="63" fontSize="2.2" textAnchor="middle" className="font-serif italic fill-[#2c2621]/70">Venus</text>
                  
                  {/* Earth & Moon (Beat 1+) */}
                  <g className={`transition-all duration-700 ${beat >= 1 ? "opacity-100 scale-100" : "opacity-20 scale-95"}`}>
                    <line x1="50" y1="50" x2="50" y2="18" stroke="#8c2d19" strokeWidth="0.15" strokeDasharray="1 1" />
                    <circle cx="50" cy="18" r="2.2" fill="#8c2d19" />
                    <text x="50" y="14" fontSize="2.5" textAnchor="middle" className="font-serif italic fill-[#8c2d19] font-bold">Terra c. Luna</text>
                    
                    {/* Moon orbit */}
                    <circle cx="50" cy="18" r="4.5" fill="none" stroke="#8c2d19" strokeWidth="0.1" strokeDasharray="0.5 0.5" />
                    <circle cx="46.5" cy="15.5" r="0.6" fill="#8c2d19" />
                  </g>

                  {/* Mars */}
                  <circle cx="79" cy="50" r="1.8" fill="#2c2621" />
                  <text x="85" y="51" fontSize="2.2" textAnchor="middle" className="font-serif italic fill-[#2c2621]/70">Mars</text>
                </g>

                {/* Stellar Sphere Stars (Beat 2+) */}
                <g className={`transition-all duration-1000 ${beat >= 2 ? "opacity-80" : "opacity-0"}`}>
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
                    const rad = (deg * Math.PI) / 180;
                    const x = 50 + 48 * Math.cos(rad);
                    const y = 50 + 48 * Math.sin(rad);
                    return (
                      <g key={deg} transform={`translate(${x}, ${y})`}>
                        <path d="M-1,0 L1,0 M0,-1 L0,1" stroke="#2c2621" strokeWidth="0.15" />
                        <circle cx="0" cy="0" r="0.3" fill="#2c2621" />
                      </g>
                    );
                  })}
                  <text x="50" y="6" fontSize="2.5" textAnchor="middle" className="font-serif italic fill-[#2c2621]/80 tracking-widest uppercase">Sphaera Stellarum Fixarum</text>
                </g>
              </svg>
            </div>

            {/* Bottom Title Cover Block */}
            <div className="text-center max-w-[65cqw] flex flex-col items-center">
              <h1 className="font-serif text-[2.4cqw] font-bold tracking-[0.15em] text-[#8c2d19] uppercase">
                De Revolutionibus Orbium Coelestium
              </h1>
              <h2 className="font-serif text-[1.3cqw] tracking-wide text-[#2c2621]/80 mt-[0.3cqh] font-semibold">
                天体运行论 • {currentBeat.title}
              </h2>
              <div className="w-[12cqw] h-[1px] bg-gradient-to-r from-transparent via-[#2c2621]/20 to-transparent my-[1.2cqh]" />
              <p className="font-serif text-[1.15cqw] leading-[1.5] text-[#3c3631] italic">
                {currentBeat.body}
              </p>
            </div>
          </div>
        )}

        {scene === 2 && (
          <div className="w-full h-full flex flex-col justify-between py-[1cqh]">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-[#2c2621]/10 pb-[0.8cqh]">
              <span className="font-serif text-[0.9cqw] tracking-[0.2em] uppercase opacity-60 text-[#2c2621]">
                {meta.theme} • COMPARATIO
              </span>
              <span className="font-mono text-[0.8cqw] text-[#8c2d19] font-bold">LIBER I • CAPUT IX</span>
            </div>

            {/* Asymmetric Dual Layout */}
            <div className="flex-1 grid grid-cols-12 gap-[3cqw] items-center my-[2cqh]">
              {/* Left: Ptolemy Geocentric (35% width) */}
              <div className="col-span-4 flex flex-col justify-between h-full border border-[#2c2621]/10 bg-[#FAF7F2]/50 p-[1.5cqw] rounded-[0.3cqw] transition-all duration-700">
                <div>
                  <h3 className="font-serif text-[1.2cqw] font-bold text-[#8c7462] border-b border-[#2c2621]/10 pb-[0.5cqh] mb-[1cqh]">
                    SYSTEMA PTOLEMAICUM
                  </h3>
                  <p className="font-serif text-[0.9cqw] text-[#2c2621]/60 italic mb-[1.5cqh]">
                    Ptolemy Geocentric System / 托勒密地心天体轨线
                  </p>
                </div>

                {/* Ptolemy SVG */}
                <div className="flex-1 flex items-center justify-center my-[1cqh]">
                  <svg viewBox="0 0 100 100" className="w-[13cqw] h-[13cqw] text-[#8c7462] opacity-70">
                    {/* Earth Center */}
                    <circle cx="50" cy="50" r="2.5" fill="#8c7462" />
                    <text x="50" y="44" fontSize="3.5" textAnchor="middle" className="font-serif italic fill-[#8c7462] font-bold">Terra</text>

                    {/* Deferent */}
                    <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.2" />
                    <text x="50" y="79" fontSize="2.5" textAnchor="middle" className="font-serif italic fill-[#8c7462]/60">Deferens (均轮)</text>

                    {/* Epicycle Center & Epicycle */}
                    <g className="animate-rotate-slow" style={{ transformOrigin: "50px 50px", animationDuration: "18s" }}>
                      <circle cx="50" cy="25" r="1" fill="currentColor" />
                      <circle cx="50" cy="25" r="9" fill="none" stroke="currentColor" strokeWidth="0.15" strokeDasharray="1 1" />
                      <text x="50" y="13" fontSize="2.2" textAnchor="middle" className="font-serif italic fill-[#8c7462]/60">Epicyclus (本轮)</text>
                      
                      {/* Planet on Epicycle */}
                      <circle cx="43.6" cy="18.6" r="1.5" fill="currentColor" />
                      <text x="38" y="17" fontSize="2.5" textAnchor="middle" className="font-serif italic fill-[#8c7462] font-bold">Mars</text>
                      
                      {/* Vector line */}
                      <line x1="50" y1="50" x2="50" y2="25" stroke="currentColor" strokeWidth="0.1" strokeDasharray="0.5 0.5" />
                      <line x1="50" y1="25" x2="43.6" y2="18.6" stroke="currentColor" strokeWidth="0.1" />
                    </g>
                  </svg>
                </div>

                <div className="text-[0.85cqw] leading-[1.4] text-[#2c2621]/70 border-t border-[#2c2621]/10 pt-[1cqh]">
                  <span className="font-bold text-[#8c7462]">地心说本轮之谬：</span>
                  为了凑合行星视运动的逆行与速度不均，不得不假想出繁复套叠的本轮与均轮，使宇宙轨线变得臃肿不堪。
                  <span className="block mt-[0.5cqh] text-[0.8cqw] italic opacity-80">
                    Dozens of artificial epicycles stacked upon deferents to satisfy the geocentric dogma.
                  </span>
                </div>
              </div>

              {/* Right: Copernicus Heliocentric (65% width) */}
              <div className="col-span-8 flex flex-col justify-between h-full border border-[#8c2d19]/20 bg-[#FAF7F2] p-[1.5cqw] rounded-[0.3cqw] shadow-md animate-pulse-gold">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-[1.4cqw] font-bold text-[#8c2d19] border-b border-[#8c2d19]/20 pb-[0.5cqh] mb-[1cqh]">
                      SYSTEMA COPERNICANUM
                    </h3>
                    <p className="font-serif text-[1cqw] text-[#2c2621]/80 italic">
                      Copernicus Heliocentric System / 哥白尼日心天体轨线
                    </p>
                  </div>
                  <span className="bg-[#8c2d19]/10 text-[#8c2d19] text-[0.75cqw] font-mono px-[0.6cqw] py-[0.2cqh] rounded font-bold uppercase">
                    Paradigma Novum
                  </span>
                </div>

                {/* Copernicus SVG */}
                <div className="flex-1 flex items-center justify-center my-[1cqh]">
                  <svg viewBox="0 0 100 100" className="w-[15cqw] h-[13cqw] text-[#2c2621]">
                    {/* Sun Center */}
                    <circle cx="50" cy="50" r="3.5" fill="#dfc098" stroke="#8c2d19" strokeWidth="0.4" />
                    <text x="50" y="44" fontSize="3.5" textAnchor="middle" className="font-serif italic fill-[#8c2d19] font-bold">Sol</text>

                    {/* Concentric Orbits */}
                    <circle cx="50" cy="50" r="16" fill="none" stroke="#2c2621" strokeWidth="0.15" strokeDasharray="1 1" />
                    <circle cx="50" cy="50" r="26" fill="none" stroke="#2c2621" strokeWidth="0.15" strokeDasharray="1 1" />
                    <circle cx="50" cy="50" r="36" fill="none" stroke="#2c2621" strokeWidth="0.2" />

                    {/* Rotating system based on beat */}
                    <g 
                      style={{ 
                        transform: `rotate(${beat * 35}deg)`, 
                        transformOrigin: "50px 50px",
                        transition: "transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)"
                      }}
                    >
                      {/* Earth */}
                      <circle cx="50" cy="34" r="1.5" fill="#2c2621" />
                      <text x="50" y="31" fontSize="2.5" textAnchor="middle" className="font-serif italic fill-[#2c2621] font-bold">Terra</text>

                      {/* Mars */}
                      <circle cx="50" cy="14" r="2" fill="#8c2d19" />
                      <text x="50" y="10" fontSize="2.5" textAnchor="middle" className="font-serif italic fill-[#8c2d19] font-bold">Mars</text>

                      {/* Alignment Vector (Beat 1+) */}
                      <line 
                        x1="50" 
                        y1="50" 
                        x2="50" 
                        y2="14" 
                        stroke="#8c2d19" 
                        strokeWidth="0.25" 
                        strokeDasharray="1.5 1" 
                        className={`transition-all duration-700 ${beat >= 1 ? "opacity-100" : "opacity-0"}`} 
                      />
                    </g>

                    {/* Outer Harmony (Beat 2+) */}
                    <g className={`transition-all duration-1000 ${beat >= 2 ? "opacity-100" : "opacity-25"}`}>
                      <circle cx="50" cy="50" r="44" fill="none" stroke="#8c2d19" strokeWidth="0.15" strokeDasharray="2 1" />
                      <text x="50" y="98" fontSize="2.5" textAnchor="middle" className="font-serif italic fill-[#8c2d19] tracking-wider">Harmonia Coeli Absolute</text>
                    </g>
                  </svg>
                </div>

                {/* Explanatory Text */}
                <div className="border-t border-[#8c2d19]/20 pt-[1cqh] text-[0.95cqw] leading-[1.5]">
                  <h4 className="font-serif font-bold text-[#8c2d19] mb-[0.2cqh]">
                    {currentBeat.title}
                  </h4>
                  <p className="text-[#3c3631]">
                    {currentBeat.body}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center border-t border-[#2c2621]/10 pt-[0.5cqh] text-[0.8cqw] text-[#2c2621]/50 italic">
              "Motus quidem simplex, uniformis, et sempiternus est." (运动确是单一、匀速且永恒的。)
            </div>
          </div>
        )}

        {scene === 3 && (
          <div className="w-full h-full flex flex-col justify-between py-[1cqh]">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-[#2c2621]/10 pb-[0.8cqh]">
              <span className="font-serif text-[0.9cqw] tracking-[0.2em] uppercase opacity-60 text-[#2c2621]">
                {meta.theme} • RATIO GEOMETRICA
              </span>
              <span className="font-mono text-[0.8cqw] text-[#8c2d19] font-bold">LIBER III • DE REVOLUTIONE TERRAE</span>
            </div>

            {/* Winding Process Layout */}
            <div className="flex-1 flex flex-col justify-center my-[1.5cqh] relative">
              {/* Horizontal Winding SVG Path */}
              <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <svg viewBox="0 0 300 100" className="w-full h-[15cqh] text-[#2c2621]/15">
                  <path 
                    d="M 10,50 Q 75,10 150,50 T 290,50" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="0.5" 
                    strokeDasharray="2 2" 
                  />
                  {/* Winding Flow Direction */}
                  <path 
                    d="M 10,50 Q 75,10 150,50 T 290,50" 
                    fill="none" 
                    stroke="#8c2d19" 
                    strokeWidth="0.4" 
                    strokeDasharray="10 150" 
                    strokeDashoffset={-beat * 50}
                    className="transition-all duration-1000"
                  />
                </svg>
              </div>

              {/* 3 Process Stations */}
              <div className="grid grid-cols-3 gap-[2.5cqw] z-10">
                {/* Station 1: Mercury */}
                <div className={`border border-[#2c2621]/10 bg-[#FAF7F2] p-[1.2cqw] rounded-[0.3cqw] flex flex-col justify-between h-[34cqh] transition-all duration-700 ${getBeatOpacity(0)} ${beat === 0 ? "animate-pulse-gold border-[#8c2d19]/40" : ""}`}>
                  <div>
                    <div className="flex justify-between items-center border-b border-[#2c2621]/10 pb-[0.4cqh] mb-[0.8cqh]">
                      <span className="font-serif text-[0.85cqw] font-bold text-[#8c2d19] uppercase tracking-wider">I. Orbis Mercurii</span>
                      <span className="font-mono text-[0.75cqw] text-[#2c2621]/50">EPICYPLET</span>
                    </div>
                    <h4 className="font-serif text-[1.05cqw] font-bold text-[#2c2621] mb-[0.4cqh]">
                      小本轮测算原理
                    </h4>
                    <p className="font-serif text-[0.8cqw] text-[#2c2621]/60 italic mb-[1cqh]">
                      Calculations of the Epicycle
                    </p>
                    <p className="font-serif text-[0.85cqw] leading-[1.4] text-[#3c3631]">
                      手稿中引入了微小的“小本轮”（Epicyplet）来辅助校正行星到太阳的实际距离，完全消除轨道偏心误差。
                    </p>
                  </div>

                  {/* SVG Epicyplet Diagram */}
                  <div className="h-[8cqh] flex items-center justify-center my-[0.5cqh]">
                    <svg viewBox="0 0 100 40" className="w-full h-full text-[#2c2621]">
                      <circle cx="50" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 1" />
                      <circle cx="65" cy="20" r="4" fill="none" stroke="#8c2d19" strokeWidth="0.3" />
                      <circle cx="69" cy="20" r="0.8" fill="#8c2d19" />
                      <line x1="50" y1="20" x2="65" y2="20" stroke="currentColor" strokeWidth="0.15" />
                      <text x="50" y="16" fontSize="3" textAnchor="middle" className="font-serif italic fill-[#2c2621]/50">Deferens</text>
                      <text x="76" y="22" fontSize="2.8" textAnchor="middle" className="font-serif italic fill-[#8c2d19] font-bold">Epicyplet</text>
                    </svg>
                  </div>

                  <div className="border-t border-[#2c2621]/10 pt-[0.5cqh] flex justify-between items-center font-mono text-[0.8cqw]">
                    <span className="text-[#2c2621]/50">Radius Ratio:</span>
                    <span className="font-bold text-[#8c2d19]">r = 0.0048 AU</span>
                  </div>
                </div>

                {/* Station 2: Earth */}
                <div className={`border border-[#2c2621]/10 bg-[#FAF7F2] p-[1.2cqw] rounded-[0.3cqw] flex flex-col justify-between h-[34cqh] transition-all duration-700 ${getBeatOpacity(1)} ${beat === 1 ? "animate-pulse-gold border-[#8c2d19]/40" : ""}`}>
                  <div>
                    <div className="flex justify-between items-center border-b border-[#2c2621]/10 pb-[0.4cqh] mb-[0.8cqh]">
                      <span className="font-serif text-[0.85cqw] font-bold text-[#8c2d19] uppercase tracking-wider">II. Orbis Terrae</span>
                      <span className="font-mono text-[0.75cqw] text-[#2c2621]/50">PRECESSYON</span>
                    </div>
                    <h4 className="font-serif text-[1.05cqw] font-bold text-[#2c2621] mb-[0.4cqh]">
                      地轴赤纬岁差改正
                    </h4>
                    <p className="font-serif text-[0.8cqw] text-[#2c2621]/60 italic mb-[1cqh]">
                      Correction of Axial Precession
                    </p>
                    <p className="font-serif text-[0.85cqw] leading-[1.4] text-[#3c3631]">
                      通过微调地轴指向的倾角，对齐回归年与恒星年的时间差值，计算得出每年万分之几度的精确进动。
                    </p>
                  </div>

                  {/* SVG Precession Diagram */}
                  <div className="h-[8cqh] flex items-center justify-center my-[0.5cqh]">
                    <svg viewBox="0 0 100 40" className="w-full h-full text-[#2c2621]">
                      <line x1="50" y1="5" x2="50" y2="35" stroke="currentColor" strokeWidth="0.15" strokeDasharray="1 1" />
                      <line x1="50" y1="20" x2="38" y2="8" stroke="#8c2d19" strokeWidth="0.3" />
                      <arc d="M 50,12 A 8,8 0 0,0 42,14" fill="none" stroke="#8c2d19" strokeWidth="0.2" />
                      <circle cx="50" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="0.2" />
                      <text x="65" y="22" fontSize="3" textAnchor="middle" className="font-serif italic fill-[#2c2621]/50">Equator</text>
                      <text x="32" y="6" fontSize="2.8" textAnchor="middle" className="font-serif italic fill-[#8c2d19] font-bold">Obliquity 23.5°</text>
                    </svg>
                  </div>

                  <div className="border-t border-[#2c2621]/10 pt-[0.5cqh] flex justify-between items-center font-mono text-[0.8cqw]">
                    <span className="text-[#2c2621]/50">Precession Rate:</span>
                    <span className="font-bold text-[#8c2d19]">e = 0.0167 / yr</span>
                  </div>
                </div>

                {/* Station 3: Saturn */}
                <div className={`border border-[#2c2621]/10 bg-[#FAF7F2] p-[1.2cqw] rounded-[0.3cqw] flex flex-col justify-between h-[34cqh] transition-all duration-700 ${getBeatOpacity(2)} ${beat === 2 ? "animate-pulse-gold border-[#8c2d19]/40" : ""}`}>
                  <div>
                    <div className="flex justify-between items-center border-b border-[#2c2621]/10 pb-[0.4cqh] mb-[0.8cqh]">
                      <span className="font-serif text-[0.85cqw] font-bold text-[#8c2d19] uppercase tracking-wider">III. Orbis Saturni</span>
                      <span className="font-mono text-[0.75cqw] text-[#2c2621]/50">CONVERGENTIA</span>
                    </div>
                    <h4 className="font-serif text-[1.05cqw] font-bold text-[#2c2621] mb-[0.4cqh]">
                      轨道相位闭环校验
                    </h4>
                    <p className="font-serif text-[0.8cqw] text-[#2c2621]/60 italic mb-[1cqh]">
                      Orbital Phase Loop Calibration
                    </p>
                    <p className="font-serif text-[0.85cqw] leading-[1.4] text-[#3c3631]">
                      当火星与木星在大冲位置的视差偏角与计算圆周完美重合时，这一张繁杂的天体力学网络便完成了精确闭环。
                    </p>
                  </div>

                  {/* SVG Phase Loop Diagram */}
                  <div className="h-[8cqh] flex items-center justify-center my-[0.5cqh]">
                    <svg viewBox="0 0 100 40" className="w-full h-full text-[#2c2621]">
                      <circle cx="50" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="0.2" />
                      <circle cx="50" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="0.2" />
                      <line x1="50" y1="20" x2="38" y2="20" stroke="#8c2d19" strokeWidth="0.25" />
                      <line x1="50" y1="20" x2="68" y2="20" stroke="#8c2d19" strokeWidth="0.25" />
                      <circle cx="38" cy="20" r="1" fill="#8c2d19" />
                      <circle cx="68" cy="20" r="1" fill="#8c2d19" />
                      <text x="50" y="36" fontSize="2.8" textAnchor="middle" className="font-serif fill-[#8c2d19] font-bold">Opposition (大冲对齐)</text>
                    </svg>
                  </div>

                  <div className="border-t border-[#2c2621]/10 pt-[0.5cqh] flex justify-between items-center font-mono text-[0.8cqw]">
                    <span className="text-[#2c2621]/50">Phase Error:</span>
                    <span className="font-bold text-[#8c2d19]">Σφ = 360.00°</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center border-t border-[#2c2621]/10 pt-[0.5cqh] text-[0.8cqw] text-[#2c2621]/50 italic">
              "Mathemata mathematicis scribuntur." (数学是为数学家写的。)
            </div>
          </div>
        )}

        {scene === 4 && (
          <div className="w-full h-full flex flex-col justify-between py-[1cqh]">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-[#2c2621]/10 pb-[0.8cqh]">
              <span className="font-serif text-[0.9cqw] tracking-[0.2em] uppercase opacity-60 text-[#2c2621]">
                {meta.theme} • QUADRANT MATRIX
              </span>
              <span className="font-mono text-[0.8cqw] text-[#8c2d19] font-bold">LIBER V • DE REVOLUTIONIBUS</span>
            </div>

            {/* 2x2 Quadrant Matrix */}
            <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-[1.5cqw] my-[1.5cqh]">
              {/* Q1: Sidereal Years */}
              <div className={`border border-[#2c2621]/10 bg-[#FAF7F2] p-[1cqw] rounded-[0.3cqw] flex flex-col justify-between transition-all duration-700 ${beat === 0 ? "animate-pulse-gold border-[#8c2d19]/40" : "opacity-60"}`}>
                <div className="flex justify-between items-center border-b border-[#2c2621]/10 pb-[0.3cqh]">
                  <span className="font-serif text-[0.85cqw] font-bold text-[#8c2d19] uppercase">Sector I: Orbis Periodus</span>
                  <span className="font-mono text-[0.7cqw] text-[#2c2621]/50">SIDEREAL RATE</span>
                </div>
                
                <div className="flex-1 flex flex-col justify-center gap-[0.5cqh] my-[0.5cqh] font-mono text-[0.8cqw]">
                  <div className="flex justify-between text-[#2c2621]">
                    <span>Mercurius (水星):</span>
                    <span className="font-bold">0.2408 Yr (88d)</span>
                  </div>
                  <div className="w-full bg-[#2c2621]/5 h-[0.6cqh] rounded-full overflow-hidden">
                    <div className="bg-[#8c2d19] h-full" style={{ width: "24%" }} />
                  </div>
                  
                  <div className="flex justify-between text-[#2c2621]">
                    <span>Terra (地球):</span>
                    <span className="font-bold">1.0000 Yr (365d)</span>
                  </div>
                  <div className="w-full bg-[#2c2621]/5 h-[0.6cqh] rounded-full overflow-hidden">
                    <div className="bg-[#8c2d19] h-full" style={{ width: "50%" }} />
                  </div>

                  <div className="flex justify-between text-[#2c2621]">
                    <span>Iupiter (木星):</span>
                    <span className="font-bold">11.862 Yr</span>
                  </div>
                  <div className="w-full bg-[#2c2621]/5 h-[0.6cqh] rounded-full overflow-hidden">
                    <div className="bg-[#2c2621]/40 h-full" style={{ width: "85%" }} />
                  </div>
                </div>

                <div className="text-[0.75cqw] text-[#2c2621]/60 leading-[1.3] border-t border-[#2c2621]/10 pt-[0.3cqh]">
                  各大行星公转恒星周期测算，完全摆脱地心均轮束缚，回归纯粹物理周期。
                </div>
              </div>

              {/* Q2: Synodic Periods */}
              <div className={`border border-[#2c2621]/10 bg-[#FAF7F2] p-[1cqw] rounded-[0.3cqw] flex flex-col justify-between transition-all duration-700 ${beat === 0 ? "animate-pulse-gold border-[#8c2d19]/40" : "opacity-60"}`}>
                <div className="flex justify-between items-center border-b border-[#2c2621]/10 pb-[0.3cqh]">
                  <span className="font-serif text-[0.85cqw] font-bold text-[#8c2d19] uppercase">Sector II: Motus Synodicus</span>
                  <span className="font-mono text-[0.7cqw] text-[#2c2621]/50">SYNODIC FORMULA</span>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center my-[0.5cqh] text-center">
                  <div className="font-serif italic text-[1.4cqw] text-[#8c2d19] font-bold my-[0.5cqh]">
                    1 / S = 1 / E - 1 / P
                  </div>
                  <div className="font-serif text-[0.8cqw] text-[#2c2621]/70 leading-[1.4] max-w-[22cqw]">
                    通过扣除地球自身的周年运行基数（E），计算求得外行星（P）在黄道天区中真正的会合运动周期值（S）。
                  </div>
                </div>

                <div className="text-[0.75cqw] text-[#2c2621]/60 leading-[1.3] border-t border-[#2c2621]/10 pt-[0.3cqh]">
                  Synodic calculation isolates Earth's motion vector from actual planetary periods.
                </div>
              </div>

              {/* Q3: Retrograde Loops */}
              <div className={`border border-[#2c2621]/10 bg-[#FAF7F2] p-[1cqw] rounded-[0.3cqw] flex flex-col justify-between transition-all duration-700 ${beat === 1 ? "animate-pulse-gold border-[#8c2d19]/40" : "opacity-60"}`}>
                <div className="flex justify-between items-center border-b border-[#2c2621]/10 pb-[0.3cqh]">
                  <span className="font-serif text-[0.85cqw] font-bold text-[#8c2d19] uppercase">Sector III: Motus Retrogradus</span>
                  <span className="font-mono text-[0.7cqw] text-[#2c2621]/50">RETROGRADE ANGLE</span>
                </div>

                <div className="flex-1 flex items-center justify-center my-[0.5cqh]">
                  <svg viewBox="0 0 100 35" className="w-full h-full text-[#2c2621]">
                    <path d="M5,15 C25,15 30,5 35,5 C40,5 38,25 48,25 C53,25 55,5 60,5 C65,5 70,15 95,15" fill="none" stroke="#8c2d19" strokeWidth="0.4" />
                    <circle cx="35" cy="5" r="0.8" fill="#8c2d19" />
                    <circle cx="48" cy="25" r="0.8" fill="#8c2d19" />
                    <circle cx="60" cy="5" r="0.8" fill="#8c2d19" />
                    <text x="50" y="32" fontSize="2.8" textAnchor="middle" className="font-serif italic fill-[#2c2621]/60">Apparent retroloop curves (视逆行轨迹)</text>
                  </svg>
                </div>

                <div className="text-[0.75cqw] text-[#2c2621]/60 leading-[1.3] border-t border-[#2c2621]/10 pt-[0.3cqh]">
                  逆行并非行星真实改变方向，而是地球公转超越外侧行星时产生的视运动错觉。
                </div>
              </div>

              {/* Q4: Parallax Offsets */}
              <div className={`border border-[#2c2621]/10 bg-[#FAF7F2] p-[1cqw] rounded-[0.3cqw] flex flex-col justify-between transition-all duration-700 ${beat === 2 ? "animate-pulse-gold border-[#8c2d19]/40" : "opacity-60"}`}>
                <div className="flex justify-between items-center border-b border-[#2c2621]/10 pb-[0.3cqh]">
                  <span className="font-serif text-[0.85cqw] font-bold text-[#8c2d19] uppercase">Sector IV: Obliquitas Eclipticae</span>
                  <span className="font-mono text-[0.7cqw] text-[#2c2621]/50">OBLIQUITY ANGLE</span>
                </div>

                <div className="flex-1 flex items-center justify-center my-[0.5cqh]">
                  <svg viewBox="0 0 100 35" className="w-full h-full text-[#2c2621]">
                    <line x1="10" y1="25" x2="90" y2="25" stroke="currentColor" strokeWidth="0.15" />
                    <line x1="10" y1="10" x2="90" y2="28" stroke="#8c2d19" strokeWidth="0.3" />
                    <text x="25" y="14" fontSize="2.8" className="font-serif italic fill-[#8c2d19] font-bold">Ecliptic (黄道面)</text>
                    <text x="25" y="31" fontSize="2.8" className="font-serif italic fill-[#2c2621]/50">Equator (赤道面)</text>
                    <path d="M 40,25 A 15,15 0 0,0 44,21" fill="none" stroke="#8c2d19" strokeWidth="0.2" />
                    <text x="48" y="22" fontSize="2.8" className="font-serif italic fill-[#8c2d19] font-bold">ε = 23.5°</text>
                  </svg>
                </div>

                <div className="text-[0.75cqw] text-[#2c2621]/60 leading-[1.3] border-t border-[#2c2621]/10 pt-[0.3cqh]">
                  微调赤道面与黄道面之间约23.5度的夹角变动，消除了累积数百年之纬度漂移。
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center border-t border-[#2c2621]/10 pt-[0.5cqh] text-[0.8cqw] text-[#2c2621]/50 italic">
              "Numerus et mensura omnia in se continent." (数字与测量包含了一切。)
            </div>
          </div>
        )}

        {scene === 5 && (
          <div className="w-full h-full flex flex-col justify-between py-[1cqh] relative">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-[#2c2621]/10 pb-[0.8cqh]">
              <span className="font-serif text-[0.9cqw] tracking-[0.2em] uppercase opacity-60 text-[#2c2621]">
                {meta.theme} • LIBER REVOLUTIONUM LEDGER
              </span>
              <span className="font-mono text-[0.8cqw] text-[#8c2d19] font-bold">LIBER VI • CONFIRMATIO</span>
            </div>

            {/* Three Column Scholastic Ledger */}
            <div className="flex-1 grid grid-cols-3 gap-[2cqw] my-[1.5cqh]">
              {/* Column 1: Planetary Coordinate Tables */}
              <div className="border-r border-[#2c2621]/10 pr-[1cqw] flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-[1.1cqw] font-bold text-[#8c2d19] border-b border-[#2c2621]/10 pb-[0.3cqh] mb-[0.8cqh] uppercase">
                    Tabula Orbium
                  </h4>
                  <p className="font-serif text-[0.75cqw] text-[#2c2621]/50 italic mb-[1cqh]">
                    Planetary Coordinate Constants / 行星轨道常数表
                  </p>
                  
                  <table className="w-full text-left text-[0.75cqw] border-collapse font-serif">
                    <thead>
                      <tr className="border-b border-[#2c2621]/20 font-bold text-[#8c2d19]">
                        <th className="py-1">Orbis</th>
                        <th className="py-1 text-right">Radius (AU)</th>
                        <th className="py-1 text-right">Period (Yr)</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#3c3631]">
                      <tr className={`border-b border-[#2c2621]/5 ${getBeatOpacity(0)}`}>
                        <td className="py-1 italic">Mercurius</td>
                        <td className="py-1 text-right font-mono">0.3871</td>
                        <td className="py-1 text-right font-mono">0.2408</td>
                      </tr>
                      <tr className={`border-b border-[#2c2621]/5 ${getBeatOpacity(0)}`}>
                        <td className="py-1 italic">Venus</td>
                        <td className="py-1 text-right font-mono">0.7233</td>
                        <td className="py-1 text-right font-mono">0.6152</td>
                      </tr>
                      <tr className={`border-b border-[#2c2621]/5 ${getBeatOpacity(1)}`}>
                        <td className="py-1 italic font-bold text-[#8c2d19]">Terra</td>
                        <td className="py-1 text-right font-bold text-[#8c2d19] font-mono">1.0000</td>
                        <td className="py-1 text-right font-bold text-[#8c2d19] font-mono">1.0000</td>
                      </tr>
                      <tr className={`border-b border-[#2c2621]/5 ${getBeatOpacity(1)}`}>
                        <td className="py-1 italic">Mars</td>
                        <td className="py-1 text-right font-mono">1.5237</td>
                        <td className="py-1 text-right font-mono">1.8808</td>
                      </tr>
                      <tr className={`border-b border-[#2c2621]/5 ${getBeatOpacity(2)}`}>
                        <td className="py-1 italic">Iupiter</td>
                        <td className="py-1 text-right font-mono">5.2028</td>
                        <td className="py-1 text-right font-mono">11.862</td>
                      </tr>
                      <tr className={`${getBeatOpacity(2)}`}>
                        <td className="py-1 italic">Saturnus</td>
                        <td className="py-1 text-right font-mono">9.5388</td>
                        <td className="py-1 text-right font-mono">29.457</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="text-[0.7cqw] text-[#2c2621]/50 italic pt-[0.5cqh] border-t border-[#2c2621]/5">
                  * Calculated over Frombork observations 1497-1543.
                </div>
              </div>

              {/* Column 2: Orbit Eccentricity Calculations */}
              <div className="border-r border-[#2c2621]/10 px-[1cqw] flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-[1.1cqw] font-bold text-[#8c2d19] border-b border-[#2c2621]/10 pb-[0.3cqh] mb-[0.8cqh] uppercase">
                    Calculus Eccentricitatis
                  </h4>
                  <p className="font-serif text-[0.75cqw] text-[#2c2621]/50 italic mb-[1cqh]">
                    Eccentricity Derivations / 轨道偏心率几何推导
                  </p>

                  <div className="font-serif text-[0.8cqw] text-[#3c3631] space-y-[1cqh]">
                    <div className="bg-[#2c2621]/5 p-[0.6cqw] rounded font-mono text-[0.75cqw] text-center">
                      e = (r_ap - r_per) / (r_ap + r_per)
                    </div>
                    <p className="leading-[1.4]">
                      通过测算远日点（r_ap）与近日点（r_per）的几何差值，推导求得各大行星的精确偏心率：
                    </p>
                    <ul className="list-disc pl-[1.2cqw] space-y-[0.3cqh] font-mono text-[0.75cqw]">
                      <li>Terra (地球): e = 0.0167</li>
                      <li>Mars (火星): e = 0.0934</li>
                      <li>Iupiter (木星): e = 0.0484</li>
                      <li>Saturnus (土星): e = 0.0541</li>
                    </ul>
                  </div>
                </div>

                {/* Hand-drawn eccentricity diagram */}
                <div className="h-[7cqh] flex items-center justify-center my-[0.5cqh]">
                  <svg viewBox="0 0 100 30" className="w-full h-full text-[#2c2621]">
                    <ellipse cx="50" cy="15" rx="25" ry="12" fill="none" stroke="currentColor" strokeWidth="0.2" />
                    <circle cx="45" cy="15" r="1.5" fill="#8c2d19" />
                    <text x="45" y="11" fontSize="2.8" textAnchor="middle" className="font-serif italic fill-[#8c2d19] font-bold">Sol (Focus)</text>
                    <circle cx="50" cy="15" r="0.8" fill="currentColor" />
                    <line x1="45" y1="15" x2="50" y2="15" stroke="#8c2d19" strokeWidth="0.25" />
                    <text x="50" y="25" fontSize="2.5" textAnchor="middle" className="font-serif italic fill-[#2c2621]/50">Offset (e)</text>
                  </svg>
                </div>
              </div>

              {/* Column 3: Precession Rates & Red Wax Seal */}
              <div className="pl-[1cqw] flex flex-col justify-between h-full">
                <div>
                  <h4 className="font-serif text-[1.1cqw] font-bold text-[#8c2d19] border-b border-[#2c2621]/10 pb-[0.3cqh] mb-[0.8cqh] uppercase">
                    Confirmatio
                  </h4>
                  <p className="font-serif text-[0.75cqw] text-[#2c2621]/50 italic mb-[1cqh]">
                    De Revolutionibus Endorsement / 学术签呈
                  </p>

                  <div className="font-serif text-[0.85cqw] leading-[1.5] text-[#3c3631]">
                    <p className="mb-[1cqh]">
                      手稿最终编入《天体运行论》第六卷，盖上学术红蜡火漆，标志着人类天文学范式革命的最终起航。
                    </p>
                    <p className="italic opacity-80 text-[0.8cqw]">
                      The manuscript is compiled into De Revolutionibus Orbium Coelestium, sealed with red wax, marking the launch of the astronomical revolution.
                    </p>
                  </div>
                </div>

                {/* Signature of Copernicus */}
                <div className="mt-[1cqh] border-t border-[#2c2621]/10 pt-[1cqh] flex flex-col items-end">
                  <span className="font-serif italic text-[1.2cqw] text-[#2c2621]/80 select-none font-handwriting">
                    Nicolaus Copernicus
                  </span>
                  <span className="text-[0.7cqw] text-[#2c2621]/40 uppercase tracking-widest font-mono mt-[0.2cqh]">
                    Author & Astronomer
                  </span>
                </div>
              </div>
            </div>

            {/* Elegant Red Wax Seal (Stamps on Beat 2) */}
            <div className={`absolute bottom-[2cqh] right-[13cqw] w-[6cqw] h-[6cqw] transition-all duration-1000 ${beat >= 2 ? "opacity-95 scale-100 rotate-[-12deg]" : "opacity-0 scale-75 rotate-0"} pointer-events-none select-none`}>
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#7f1d1d] drop-shadow-[2px_3px_6px_rgba(127,29,29,0.35)]">
                <circle cx="50" cy="50" r="44" fill="#a82b2b" stroke="#7f1d1d" strokeWidth="2" />
                <circle cx="50" cy="50" r="39" fill="none" stroke="#f0c6c6" strokeWidth="0.8" strokeDasharray="3 2" />
                <path d="M 32,50 L 50,28 L 68,50 L 50,72 Z M 50,38 L 40,50 L 50,62 L 60,50 Z" fill="#7f1d1d" />
                <text x="50" y="53" fontSize="8" textAnchor="middle" fontWeight="black" fontFamily="serif" fill="#f0c6c6" letterSpacing="1">COPERNICUS</text>
              </svg>
            </div>

            {/* Footer */}
            <div className="text-center border-t border-[#2c2621]/10 pt-[0.5cqh] text-[0.8cqw] text-[#2c2621]/50 italic">
              "In medio vero omnium residet Sol." (太阳实居于万物之中央。)
            </div>
          </div>
        )}

        {/* Bespoke Navigation (Planetary Orbit Tracker) */}
        {renderNavigation()}
      </div>
    </div>
  );
}
