import React from "react";

export const getMetadata = (lang) => ({
  id: "17",
  tier: "C",
  name: lang === "zh" ? "哥白尼日心说测算手稿" : "Copernican Heliocentrism Memo",
  theme: lang === "zh" ? "文艺复兴天文学范式革命" : "Renaissance Astronomy Revolution",
  densityLabel: lang === "zh" ? "天体轨线" : "Planetary Orbits",
  colors: { bg: "bg-[#faf7f2]", ink: "text-[#2c2621]", panel: "border-[#e0d6ca]" },
  typography: { header: "font-serif", body: "font-serif" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "太阳中心说之确立" : "The Heliocentric Postulate",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "拟定日心基准" : "Establish Solar Center", 
          title: lang === "zh" ? "宇宙中心之重塑" : "The Core Heliocentric Axiom", 
          body: lang === "zh" ? "“太阳是宇宙的中心，所有天体均绕其运转。”这一论断打破了教廷宣扬的地心说教条，将人类视野引向更辽阔的深空。" : "“The Sun sits at the center of the universe, and all celestial bodies revolve around it.” This postulate shattered the geocentric dogma, guiding human sight to the deeper cosmos." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "测算地球公转" : "Calculate Earth Path", 
          title: lang === "zh" ? "地球三重运动之测算" : "The Triple Motion of Earth", 
          body: lang === "zh" ? "地球并非宇宙静止的基座，而是同时承载着自转、绕日公转与赤纬角变动。由此，星空之动得以简洁解释。" : "The Earth is not the stationary foundation of the cosmos; it undergoes diurnal rotation, annual revolution around the Sun, and axial declination. Thus, stellar movements are elegantly resolved." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "绘制恒星天球" : "Map Stellar Sphere", 
          title: lang === "zh" ? "无垠恒星天球之静止" : "The Stationary Stellar Sphere", 
          body: lang === "zh" ? "最外层是恒星天球，它是完全静止不动的。这一模型揭示了恒星视差极小的原因——星辰的尺度远超世人想象。" : "The outermost sphere is the stellar sphere, which is completely immobile. This model reveals the reason for negligible stellar parallax: the stars are far deeper than once imagined." 
        }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "地心与日心軌对立" : "Geocentric vs Heliocentric System",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "投影托勒密轨" : "Project Ptolemaic Orbit", 
          title: lang === "zh" ? "托勒密本轮之谬误" : "The Error of Ptolemaic Epicycles", 
          body: lang === "zh" ? "地心说为了迎合“完美圆周运动”和逆行现象，不得不套叠数十个均轮与本轮，使星体轨迹变得极其繁复臃肿。" : "To satisfy 'perfect circular motions' and retrogrades, the geocentric model was forced to layer dozens of epicycles upon deferents, rendering orbital paths bloated." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "对齐太阳圆轴" : "Align Solar Axis", 
          title: lang === "zh" ? "均速圆周运动之归一" : "Uniform Circular Harmonization", 
          body: lang === "zh" ? "将太阳置于轨道几何交点，行星绕日作单一且匀速的圆周运动。用最纯粹的几何对称，降解宇宙运行的维度。" : "Placing the Sun at the center, planets revolve around it in single, uniform circular motions. Pure geometric symmetry reduces the complexity of cosmic paths." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "激活日心重力" : "Activate Solar Sphere", 
          title: lang === "zh" ? "天体引力学之先声" : "The Dawn of Solar Centered Order", 
          body: lang === "zh" ? "将恒星天、土星、木星、火星、地球、金星与水星依次由外向内排列，全天轨道在这一瞬间归于秩序的绝对和谐。" : "Arranging the stellar sphere, Saturn, Jupiter, Mars, Earth, Venus, and Mercury from outside in, the orbital pathways align in perfect harmony." 
        }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "均轮与本轮测算" : "Deferents & Epicycles Geometry",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "载入几何骨架" : "Load Geometric Scaffold", 
          title: lang === "zh" ? "小本轮测算原理" : "Calculations of the Epicycle", 
          body: lang === "zh" ? "为了完全消除轨道偏心误差，手稿中引入了微小的“小本轮”（Epicyplet）来辅助校正行星到太阳的实际距离。" : "To completely eliminate eccentric errors, the manuscript introduces small epicyplets to assist in calibrating actual planetary distances to the Sun." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "校准岁差偏角" : "Calibrate Precession", 
          title: lang === "zh" ? "地轴赤纬岁差改正" : "Correction of Axial Precession", 
          body: lang === "zh" ? "通过微调地轴指向的倾角，对齐回归年与恒星年的时间差值，计算得出每年万分之几度的精确进动。" : "By fine-tuning the axial tilt, the discrepancy between tropical and sidereal years is resolved, yielding a precession of mere fractions of a degree." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "锁定期差轨道" : "Lock Phase Difference", 
          title: lang === "zh" ? "轨道相位闭环校验" : "Orbital Phase Loop Calibration", 
          body: lang === "zh" ? "当火星与木星在大冲位置的视差偏角与计算圆周完美重合时，这一张繁杂的天体力学网络便完成了精确闭环。" : "When the parallax offsets of Mars and Jupiter at opposition align perfectly with circular calculations, the celestial mechanics network achieves closure." 
        }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "天体视运动差数值" : "Stellar Parallax & Metrics",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "建立恒星象限" : "Establish Stellar Quadrant", 
          title: lang === "zh" ? "天区象限与方位测算" : "Stellar Quadrants and Bearing", 
          body: lang === "zh" ? "将天空划分为黄道四大天区象限。以春分点为零度，观测各大行星冲日与留日的方位和时间差值。" : "Dividing the sky into four zodiacal quadrants. With the vernal equinox as zero, the bearings of planet oppositions are mapped." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "计算逆行弧度" : "Calculate Retrograde Path", 
          title: lang === "zh" ? "行星逆行视运动解析" : "Planetary Retrograde Apparent Motion", 
          body: lang === "zh" ? "逆行并不是行星改变了运动方向。由于地球公转速度更快，从地球看去，外侧行星在轨道相交时产生后退视错觉。" : "Retrograde is not a change in planetary direction. As Earth revolves faster, outer planets appear to move backward when Earth overtakes them." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "对齐赤黄交角" : "Align Obliquity Angle", 
          title: lang === "zh" ? "黄赤交角之周期位移" : "Obliquity of the Ecliptic Period", 
          body: lang === "zh" ? "微调赤道面与黄道面之间约23.5度的夹角变动，消除了黄纬坐标系中积累数百年的纬度漂移差额。" : "Adjusting the 23.5-degree angle between equator and ecliptic, eliminating the latitude drift accumulated in records over centuries." 
        }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "日心说历表汇总" : "Heliocentric Catalog & Ephemerides",
      beats: [
        { 
          id: 1, 
          action: lang === "zh" ? "拉取恒星赤经" : "Fetch Stellar Ephemerides", 
          title: lang === "zh" ? "各大天体公转轨道根数" : "Orbital Elements of Celestial Spheres", 
          body: lang === "zh" ? "汇总六大行星与恒星天的测算常数。包含恒星天周期、均轮半径比例及近地偏心率等核心参数。" : "Aggregating calculation constants for the six planets and stellar sphere, including orbit periods, radii proportions, and eccentricities." 
        },
        { 
          id: 2, 
          action: lang === "zh" ? "解算会合周期" : "Resolve Synodic Periods", 
          title: lang === "zh" ? "行星会合运动偏角修正" : "Calibrating Synodic Angle Offsets", 
          body: lang === "zh" ? "通过扣除地球自身的周年运行基数，计算求得各外行星在黄道天区中真正的会合运动周期值。" : "By subtracting Earth's annual movement baseline, the true synodic periods of outer planets on the ecliptic are calculated." 
        },
        { 
          id: 3, 
          action: lang === "zh" ? "签发教廷御前书" : "Sign Imperial Certificate", 
          title: lang === "zh" ? "哥白尼天体运行论签呈" : "The De Revolutionibus Endorsement", 
          body: lang === "zh" ? "手稿最终编入《天体运行论》第六卷，盖上学术红蜡火漆，标志着人类天文学范式革命的最终起航。" : "The manuscript is compiled into De Revolutionibus Orbium Coelestium, sealed with red wax, marking the launch of the astronomical revolution." 
        }
      ]
    }
  ]
});

export default function Style17({ scene, beat, language, isThumbnail }) {
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
    // Elegant Astronomical Geometrical Drawing based on scene and beat
    return (
      <div className="relative w-full h-full flex items-center justify-center border border-[#e8dfd3] bg-[#FAF8F5] rounded-[0.5cqw] overflow-hidden p-[1cqw] shadow-inner">
        {/* Parchment sketch lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] grid grid-cols-12 grid-rows-12 h-full w-full" style={{
          backgroundImage: "linear-gradient(#2c2621 1px, transparent 1px), linear-gradient(90deg, #2c2621 1px, transparent 1px)",
          backgroundSize: "4cqw 4cqw"
        }} />

        {/* Hand-ruled margins */}
        <div className="absolute inset-[0.8cqw] border border-[#d6cbbe]/60 pointer-events-none" />
        <div className="absolute inset-[1cqw] border border-[#d6cbbe]/30 pointer-events-none" />

        {/* Sun center watermark background */}
        <div className="absolute w-[24cqw] h-[24cqw] rounded-full border border-[#e9e1d4]/60 flex items-center justify-center">
          <div className="absolute w-[18cqw] h-[18cqw] rounded-full border border-dashed border-[#e9e1d4]" />
          <div className="absolute w-[10cqw] h-[10cqw] rounded-full border border-[#e9e1d4]" />
          <span className="font-serif italic text-[#dcd1c2] text-[1.1cqw] tracking-widest uppercase">Copernicus</span>
        </div>

        {scene === 1 && (
          <div className="relative flex flex-col items-center justify-center w-full h-full text-center">
            {/* Simple orbits */}
            <svg viewBox="0 0 100 100" className="w-[18cqw] h-[18cqw] text-[#5a4f43]">
              <circle cx="50" cy="50" r="2" fill="currentColor" className="animate-pulse" />
              <text x="50" y="44" fontSize="3.5" textAnchor="middle" className="font-serif italic opacity-60">Sol</text>
              <circle cx="50" cy="50" r="14" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 1" />
              <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="0.3" />
              <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.15" />
              {/* Earth position */}
              <circle cx="50" cy="22" r="1" fill="currentColor" />
              <text x="50" y="19" fontSize="3.2" textAnchor="middle" className="font-serif italic">Terra</text>
              {/* Earth orbital ray */}
              <line x1="50" y1="50" x2="50" y2="22" stroke="currentColor" strokeWidth="0.1" strokeDasharray="0.5 0.5" />
              {/* Moon orbit */}
              <circle cx="50" cy="22" r="3" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="0.3 0.3" />
              <circle cx="47" cy="22" r="0.4" fill="currentColor" />
              <text x="44" y="24" fontSize="1.8" textAnchor="middle" className="font-serif italic opacity-50">Luna</text>
            </svg>
            <div className={`mt-[1cqh] font-serif italic text-[#7a6a57] text-[1.1cqw] ${getBeatClass(1)}`}>
              Fig. I : Copernicus Systema Solare baselines.
            </div>
          </div>
        )}

        {scene === 2 && (
          <div className="grid grid-cols-2 gap-[1cqw] w-full h-full p-[1cqw]">
            {/* Left: Ptolemaic */}
            <div className="flex flex-col items-center justify-center border-r border-[#ece3d5] pr-[0.5cqw]">
              <span className="font-serif text-[1cqw] text-[#8c7462] italic uppercase tracking-wider mb-2">Ptolemaeus (Geocentric)</span>
              <svg viewBox="0 0 100 100" className="w-[12cqw] h-[12cqw] text-[#8c7865] opacity-75">
                <circle cx="50" cy="50" r="2" fill="currentColor" />
                <text x="50" y="45" fontSize="4.5" textAnchor="middle" className="font-serif italic">Terra</text>
                {/* Deferent */}
                <circle cx="50" cy="50" r="24" fill="none" stroke="currentColor" strokeWidth="0.2" />
                {/* Epicycle center */}
                <circle cx="50" cy="26" r="1" fill="currentColor" />
                <circle cx="50" cy="26" r="8" fill="none" stroke="currentColor" strokeWidth="0.15" strokeDasharray="0.5 0.5" />
                {/* Planet on epicycle */}
                <circle cx="45" cy="20" r="1.2" fill="currentColor" />
                <text x="40" y="17" fontSize="4.5" textAnchor="middle" className="font-serif italic">Mars</text>
                {/* Complex loop lines */}
                <path d="M 50,50 L 50,26 L 45,20" stroke="currentColor" strokeWidth="0.1" strokeDasharray="0.5 0.5" />
              </svg>
              <span className="font-serif text-[0.8cqw] text-[#a49583] mt-2 italic">Bloated system of deferents and epicycles.</span>
            </div>
            {/* Right: Copernican */}
            <div className="flex flex-col items-center justify-center pl-[0.5cqw]">
              <span className="font-serif text-[1cqw] text-[#5c1c1c] italic uppercase tracking-wider mb-2">Copernicus (Heliocentric)</span>
              <svg viewBox="0 0 100 100" className="w-[12cqw] h-[12cqw] text-[#5a4f43]">
                {/* Sun Center */}
                <circle cx="50" cy="50" r="3" fill="#dfc098" stroke="#705e46" strokeWidth="0.3" />
                <text x="50" y="44" fontSize="4.5" textAnchor="middle" className="font-serif italic font-bold text-[#5c1c1c]">Sol</text>
                {/* Earth orbit */}
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.15" strokeDasharray="1 1" />
                {/* Mars orbit */}
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.25" />
                {/* Positions */}
                <circle cx="50" cy="30" r="1" fill="currentColor" />
                <text x="50" y="27" fontSize="4" textAnchor="middle" className="font-serif italic">Terra</text>
                <circle cx="50" cy="15" r="1.2" fill="#5c1c1c" />
                <text x="50" y="11" fontSize="4" textAnchor="middle" className="font-serif italic text-[#5c1c1c] font-bold">Mars</text>
                {/* Alignment vector */}
                <line x1="50" y1="50" x2="50" y2="15" stroke="#5c1c1c" strokeWidth="0.2" strokeDasharray="1 0.5" className={getBeatClass(1)} />
              </svg>
              <span className="font-serif text-[0.8cqw] text-[#5c1c1c] mt-2 italic font-bold">Absolute uniform simplicity of orbits.</span>
            </div>
          </div>
        )}

        {scene === 3 && (
          <div className="relative w-full h-full flex flex-col justify-between p-[1cqw]">
            <div className="flex justify-between items-center border-b border-[#e5dcce] pb-[0.5cqh]">
              <span className="font-serif text-[1cqw] text-[#5c1c1c] uppercase tracking-wider font-bold">Geometric Deferent Measurements</span>
              <span className="font-mono text-[0.8cqw] text-[#9b8b78]">OPUS • LIBER I</span>
            </div>
            <div className="flex-1 flex items-center justify-center my-[1cqh]">
              <svg viewBox="0 0 200 100" className="w-full h-[15cqh] text-[#5a4f43]">
                {/* Concentric measurements */}
                <circle cx="100" cy="50" r="4" fill="#df9898" stroke="#5c1c1c" strokeWidth="0.4" />
                <text x="100" y="42" fontSize="5" textAnchor="middle" className="font-serif italic font-bold text-[#5c1c1c]">Sol</text>
                <circle cx="100" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1.5 1" />
                <circle cx="100" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.2" />
                {/* Deferent center offset */}
                <circle cx="103" cy="50" r="1.5" fill="#8c7865" />
                <text x="103" y="55" fontSize="4.5" textAnchor="middle" className="font-serif italic opacity-60">Aequant</text>
                {/* Auxiliary lines based on beat */}
                <line x1="100" y1="50" x2="130" y2="20" stroke="#5c1c1c" strokeWidth="0.2" strokeDasharray="0.8 0.8" className={getBeatClass(0)} />
                <line x1="103" y1="50" x2="130" y2="20" stroke="#8c7865" strokeWidth="0.2" className={getBeatClass(1)} />
                {/* Intersection Epicycle */}
                <circle cx="130" cy="20" r="6" fill="none" stroke="#5c1c1c" strokeWidth="0.2" className={getBeatClass(0)} />
                <circle cx="134" cy="16" r="1" fill="#5c1c1c" className={getBeatClass(1)} />
                <text x="141" y="15" fontSize="4.5" stroke="none" fill="#5c1c1c" className={`font-serif italic ${getBeatClass(1)}`}>Epicyplet p.</text>
              </svg>
            </div>
            <div className="grid grid-cols-3 gap-[1.5cqw] border-t border-[#e5dcce] pt-[0.8cqh] text-[0.85cqw]">
              <div>
                <span className="font-serif text-[#7a6a57] uppercase tracking-widest block font-bold">1. Eccentric Dist.</span>
                <span className="font-mono text-[#5c1c1c] font-black text-[1.1cqw]">e = 0.0324</span>
              </div>
              <div>
                <span className="font-serif text-[#7a6a57] uppercase tracking-widest block font-bold">2. Epicycle Radius</span>
                <span className="font-mono text-[#5c1c1c] font-black text-[1.1cqw]">r = 0.0048</span>
              </div>
              <div>
                <span className="font-serif text-[#7a6a57] uppercase tracking-widest block font-bold">3. Parallax Angle</span>
                <span className="font-mono text-[#5c1c1c] font-black text-[1.1cqw]">θ = 4° 15'</span>
              </div>
            </div>
          </div>
        )}

        {scene === 4 && (
          <div className="grid grid-cols-2 grid-rows-2 gap-[1cqw] w-full h-full p-[0.5cqw]">
            <div className="border border-[#e5dcce] bg-[#faf6f0] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#5c1c1c] border-b border-[#e5dcce] pb-[0.2cqh]">Sector I: Stellar Quadrant</span>
              <div className="flex-1 flex items-center justify-center my-[0.5cqh]">
                <svg viewBox="0 0 100 30" className="w-full text-[#7a6a57]">
                  <path d="M10,15 A40,40 0 0,1 90,15" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1 1" />
                  <line x1="50" y1="15" x2="30" y2="4" stroke="currentColor" strokeWidth="0.2" />
                  <line x1="50" y1="15" x2="70" y2="4" stroke="currentColor" strokeWidth="0.2" />
                  <text x="50" y="25" fontSize="3.5" textAnchor="middle" className="font-serif italic">Quadrant III Bearing</text>
                </svg>
              </div>
            </div>
            <div className="border border-[#e5dcce] bg-[#faf6f0] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#5c1c1c] border-b border-[#e5dcce] pb-[0.2cqh]">Sector II: Retrograde Angle</span>
              <div className="flex-1 flex items-center justify-center my-[0.5cqh]">
                {/* Simple loops drawing to mimic retrograde */}
                <svg viewBox="0 0 100 30" className="w-full text-[#7a6a57]">
                  <path d="M10,15 C25,15 30,5 35,5 C38,5 37,20 45,20 C50,20 52,5 57,5 C62,5 68,15 90,15" fill="none" stroke="#5c1c1c" strokeWidth="0.4" />
                  <circle cx="35" cy="5" r="0.8" fill="#5c1c1c" />
                  <circle cx="45" cy="20" r="0.8" fill="#5c1c1c" />
                  <text x="50" y="28" fontSize="3.5" textAnchor="middle" className="font-serif italic">Apparent retroloop curves</text>
                </svg>
              </div>
            </div>
            <div className="border border-[#e5dcce] bg-[#faf6f0] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#5c1c1c] border-b border-[#e5dcce] pb-[0.2cqh]">Sector III: Orbit Ratios</span>
              <div className="flex-1 flex flex-col justify-center gap-1 my-[0.5cqh] font-mono text-[0.8cqw]">
                <div className="flex justify-between"><span>Terra:</span><span>1.0000 AU</span></div>
                <div className="w-full bg-[#eee5db] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#5c1c1c] h-full" style={getScaleStyle(0, "40%")} />
                </div>
                <div className="flex justify-between"><span>Mars:</span><span>1.5237 AU</span></div>
                <div className="w-full bg-[#eee5db] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#5c1c1c] h-full" style={getScaleStyle(1, "61%")} />
                </div>
              </div>
            </div>
            <div className="border border-[#e5dcce] bg-[#faf6f0] p-[0.8cqw] rounded-sm flex flex-col justify-between">
              <span className="font-serif font-black text-[0.95cqw] text-[#5c1c1c] border-b border-[#e5dcce] pb-[0.2cqh]">Sector IV: Sidereal Rates</span>
              <div className="flex-1 flex flex-col justify-center gap-1 my-[0.5cqh] font-mono text-[0.8cqw]">
                <div className="flex justify-between"><span>Jupiter:</span><span>11.86 Yrs</span></div>
                <div className="w-full bg-[#eee5db] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#7a6a57] h-full" style={getScaleStyle(1, "85%")} />
                </div>
                <div className="flex justify-between"><span>Saturn:</span><span>29.45 Yrs</span></div>
                <div className="w-full bg-[#eee5db] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#7a6a57] h-full" style={getScaleStyle(2, "100%")} />
                </div>
              </div>
            </div>
          </div>
        )}

        {scene === 5 && (
          <div className="relative w-full h-full flex flex-col justify-between p-[0.8cqw] font-serif text-[#2c2621]">
            <div className="text-center font-bold text-[1cqw] uppercase tracking-widest border-b-2 border-[#5c1c1c] pb-[0.2cqh] mb-[0.5cqh]">
              Spherae Coelestium Revolutionum Tabula
            </div>
            <div className="flex-1 flex flex-col justify-center my-[0.2cqw]">
              <table className="w-full text-left text-[0.78cqw] border-collapse font-serif">
                <thead>
                  <tr className="border-b border-[#5c1c1c]/40 font-bold text-[#5c1c1c]">
                    <th className="py-1">Orbis Order</th>
                    <th className="py-1">Planeta Nom.</th>
                    <th className="py-1 text-right">Radius (AU)</th>
                    <th className="py-1 text-right">Periodus (An.)</th>
                    <th className="py-1 text-right">Eccentricitas</th>
                  </tr>
                </thead>
                <tbody className="text-[#3c3631]">
                  <tr className={`border-b border-[#e5dcce]/40 ${getBeatClass(0)}`}>
                    <td className="py-1 font-bold">Orbis I</td>
                    <td className="py-1 font-bold italic">Mercurius</td>
                    <td className="py-1 text-right">0.3871</td>
                    <td className="py-1 text-right">0.2408</td>
                    <td className="py-1 text-right">0.2056</td>
                  </tr>
                  <tr className={`border-b border-[#e5dcce]/40 ${getBeatClass(0)}`}>
                    <td className="py-1 font-bold">Orbis II</td>
                    <td className="py-1 font-bold italic">Venus</td>
                    <td className="py-1 text-right">0.7233</td>
                    <td className="py-1 text-right">0.6152</td>
                    <td className="py-1 text-right">0.0068</td>
                  </tr>
                  <tr className={`border-b border-[#e5dcce]/40 ${getBeatClass(1)}`}>
                    <td className="py-1 font-bold">Orbis III</td>
                    <td className="py-1 font-bold italic text-[#5c1c1c]">Terra (c. Luna)</td>
                    <td className="py-1 text-right font-bold text-[#5c1c1c]">1.0000</td>
                    <td className="py-1 text-right font-bold text-[#5c1c1c]">1.0000</td>
                    <td className="py-1 text-right">0.0167</td>
                  </tr>
                  <tr className={`border-b border-[#e5dcce]/40 ${getBeatClass(1)}`}>
                    <td className="py-1 font-bold">Orbis IV</td>
                    <td className="py-1 font-bold italic">Mars</td>
                    <td className="py-1 text-right">1.5237</td>
                    <td className="py-1 text-right">1.8808</td>
                    <td className="py-1 text-right">0.0934</td>
                  </tr>
                  <tr className={`border-b border-[#e5dcce]/40 ${getBeatClass(2)}`}>
                    <td className="py-1 font-bold">Orbis V</td>
                    <td className="py-1 font-bold italic">Iupiter</td>
                    <td className="py-1 text-right">5.2028</td>
                    <td className="py-1 text-right">11.862</td>
                    <td className="py-1 text-right">0.0484</td>
                  </tr>
                  <tr className={`${getBeatClass(2)}`}>
                    <td className="py-1 font-bold">Orbis VI</td>
                    <td className="py-1 font-bold italic">Saturnus</td>
                    <td className="py-1 text-right">9.5388</td>
                    <td className="py-1 text-right">29.457</td>
                    <td className="py-1 text-right">0.0541</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="border-t-2 border-[#5c1c1c] pt-1 text-[0.7cqw] text-stone-400 italic text-center font-serif">
              Note: Excerpted from Copernicus manuscipts calculated over Frombork observations 1497-1543.
            </div>
          </div>
        )}

        {/* Elegant Red Wax Seal Watermark (Stamps automatically on Beat 2 for Scene 5, or always subtly visible in background) */}
        {scene === 5 && (
          <div className={`absolute bottom-[1.8cqw] right-[1.8cqw] w-[4.5cqw] h-[4.5cqw] transition-all duration-1000 ${beat >= 2 ? "opacity-90 scale-100 rotate-[-12deg]" : "opacity-20 scale-90 rotate-0"} pointer-events-none select-none`}>
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#7f1d1d] drop-shadow-[1px_2px_4px_rgba(127,29,29,0.3)]">
              <circle cx="50" cy="50" r="44" fill="#a82b2b" stroke="#7f1d1d" strokeWidth="2" />
              <circle cx="50" cy="50" r="39" fill="none" stroke="#f0c6c6" strokeWidth="0.8" strokeDasharray="3 2" />
              <path d="M 32,50 L 50,28 L 68,50 L 50,72 Z M 50,38 L 40,50 L 50,62 L 60,50 Z" fill="#7f1d1d" />
              <text x="50" y="53" fontSize="8" textAnchor="middle" fontWeight="black" fontFamily="serif" fill="#f0c6c6" letterSpacing="1">COPERNICUS</text>
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
          <span className="font-sans text-[1.2cqw] font-bold tracking-wider uppercase opacity-65 text-[#7a6a57] border-b border-[#e5dcce] pb-[0.5cqh] inline-block">
            {meta.theme}
          </span>
          <h1 className="text-[3.2cqw] leading-[1.1] font-black tracking-tight font-serif mt-[1cqh] text-[#5c1c1c]">
            {currentBeat.title}
          </h1>
          <p className="text-[1.3cqw] leading-[1.4] opacity-90 font-serif mt-[1.5cqh] text-[#3c3631]">
            {currentBeat.body}
          </p>
        </div>

        {/* Marginal Scholastic Footnote */}
        <div className="flex flex-col gap-[0.5cqh] mt-[2cqh] border-t border-[#e5dcce]/80 pt-[1cqh]">
          <div className="flex justify-between text-[0.8cqw] font-mono text-[#8e8170]">
            <span>LOCUS: FRAUENBURG MANUSCRIPT</span>
            <span>VERIFIED: AD 1543</span>
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
