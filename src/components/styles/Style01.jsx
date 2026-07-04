import React from "react";
import { 
  Sun, Sparkles, Activity, ShieldAlert, Cpu, Terminal, 
  Orbit, Compass, Layers, Globe, Radio, GitMerge
} from "lucide-react";

export const getMetadata = (lang) => ({
  id: "01",
  tier: "A",
  name: lang === "zh" ? "黑洞视界演化" : "Cosmological Horizon",
  theme: lang === "zh" ? "天体物理与引力透镜" : "Cosmology & Black Holes",
  densityLabel: lang === "zh" ? "严肃极简" : "Serious Minimalist",
  colors: { bg: "bg-[#030712]", ink: "text-slate-100", panel: "border-slate-800" },
  typography: { header: "font-serif", body: "font-sans" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "黑洞视界演化 绪论" : "Introduction to Event Horizon",
      beats: [
        { id: 1, action: lang === "zh" ? "初始化事件视界" : "Initialize Event Horizon", title: lang === "zh" ? "事件视界奇点确立" : "Singularity Core & Event Horizon", body: lang === "zh" ? "当恒星坍缩超越施瓦西半径，时空结构将产生无限曲率的奇点，在其周围形成光也无法逃逸的绝对几何视界。" : "When stellar collapse exceeds the Schwarzschild radius, spacetime structures distort infinitely, forming an absolute geometric horizon from which nothing can escape." },
        { id: 2, action: lang === "zh" ? "激活吸积盘" : "Activate Accretion Disk", title: lang === "zh" ? "超高温气体吸积盘" : "Superheated Accretion Disk", body: lang === "zh" ? "被引力捕获的外围气体以接近光速的螺旋高速运行，摩擦释放巨大的X射线和伽马射线，在黑暗深渊边缘亮起耀眼的辉光。" : "Gases captured by intense gravity swirl at relativistic speeds, frictionally radiating immense X-rays and forming a brilliant glow around the abyss." },
        { id: 3, action: lang === "zh" ? "霍金辐射激发" : "Emit Hawking Radiation", title: lang === "zh" ? "霍金辐射与虚粒子蒸发" : "Quantum Hawking Radiation", body: lang === "zh" ? "视界边缘的量子涨落导致虚粒子对分离，负能粒子坠入黑洞使其质量蒸发，正能粒子逃逸，形成黑洞微弱的量子能量辐射。" : "Quantum fluctuations at the horizon cause virtual particle-antiparticle pairs to split, releasing weak thermal radiation while evaporating black hole mass." }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "黑洞视界演化 解析" : "Analysis of Gravity Warping",
      beats: [
        { id: 1, action: lang === "zh" ? "时空网格极度扭曲" : "Warp Spacetime Grid", title: lang === "zh" ? "广义相对论时空弯曲" : "Relativistic Spacetime Curvature", body: lang === "zh" ? "超大质量天体极度拉伸周围的空间与时间网格，光线在引力势阱中强制折射，揭示了引力作为几何属性而非力学的本质。" : "Supermassive mass warp the coordinate mesh of space and time. Light paths bend inside gravitational wells, exposing gravity's geometric nature." },
        { id: 2, action: lang === "zh" ? "对齐引力透镜焦点" : "Align Gravitational Focus", title: lang === "zh" ? "引力透镜双向红移" : "Gravitational Lensing & Redshift", body: lang === "zh" ? "来自背景星系的光线被强引力偏折、放大并撕裂。处于临界轨道的光子红移、蓝移对称演化，重塑了黑洞后方宇宙的映像。" : "Light from background galaxies is bent, magnified, and sheared. Photons near the critical orbit exhibit extreme symmetric red and blue shifts." },
        { id: 3, action: lang === "zh" ? "记录爱因斯坦环" : "Record Einstein Ring", title: lang === "zh" ? "爱因斯坦偏折环像" : "Einstein Ring Alignment", body: lang === "zh" ? "当光源、黑洞奇点与观测者达成完美的三点对齐时，偏折的光线将在视界外围闭合成一个圆润耀眼的爱因斯坦偏折环。" : "When the source, the singularity, and the observer align perfectly, bent rays coalesce into a luminous, flawless Einstein ring." }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "黑洞视界演化 演进" : "Dynamics of Inflow & Outflow",
      beats: [
        { id: 1, action: lang === "zh" ? "物质向内吸积" : "Matter Accretion", title: lang === "zh" ? "气态伴星物质吸积流入" : "Inward Accretion Inflow", body: lang === "zh" ? "伴星的松散外层气体在拉格朗日点被剥离，在强重力场下呈对数螺旋加速流向黑洞边缘，构成持续的物质注入系统。" : "Loose outer layers of a companion star are stripped at the Lagrange point, spiraling inwards logarithmically to feed the central abyss." },
        { id: 2, action: lang === "zh" ? "锁定最内稳定轨道" : "Lock ISCO Limit", title: lang === "zh" ? "最内层稳定圆形轨道" : "Innermost Stable Circular Orbit", body: lang === "zh" ? "物质能够在此进行最后安全的圆形环绕。越过这层临界界限（ISCO），离心力不再起支配作用，物质将坠入视界。" : "The final boundary for stable circular orbits. Beyond this limit (ISCO), centrifugal forces dissolve, and matter plunges catastrophically." },
        { id: 3, action: lang === "zh" ? "激发相对论喷流" : "Emit Relativistic Jet", title: lang === "zh" ? "磁偏振相对论高能喷流" : "Relativistic Jet Emission", body: lang === "zh" ? "黑洞旋转的扭曲磁力线扭绞，将未被视界吞入的超高能等离子体沿旋转自转轴高速弹射，射出跨越数十万光年的等离子体柱。" : "Twisted magnetic lines of a rotating hole harness plasma, catapulting ultra-high-energy jets outward along the rotational poles." }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "黑洞视界演化 矩阵" : "Metric Analysis Matrix",
      beats: [
        { id: 1, action: lang === "zh" ? "施瓦西静态度规" : " Schwarzschild Metric", title: lang === "zh" ? "施瓦西静态度规四象限" : " Schwarzschild Spherical Metric", body: lang === "zh" ? "研究无旋转、不带电的理想球对称黑洞状态。作为经典引力势阱的基石，它精确预言了静止事件视界的位置。" : "The solution for static, uncharged spherically symmetric holes. It serves as the baseline gravity model, defining the static horizon." },
        { id: 2, action: lang === "zh" ? "克尔旋转度规对齐" : "Kerr Metric Align", title: lang === "zh" ? "克尔角动量轴向矩阵" : "Kerr Angular Metric Alignment", body: lang === "zh" ? "描述带旋转的黑洞状态。角动量破坏了时空的球形对称，迫使周围的时空结构产生旋转拖拽，扭曲出椭圆视界。" : "Describing spinning black holes. Angular momentum breaks spherical symmetry, dragging surrounding space into a rotating frame." },
        { id: 3, action: lang === "zh" ? "提取能层动力边界" : "Extract Ergosurface", title: lang === "zh" ? "能层边界参数矩阵" : "Ergosurface Boundary Matrix", body: lang === "zh" ? "能层是处于外视界与无限红移边界之间的极度扭曲区域。在此区域内，连空间本身都在被迫旋转，从而允许通过彭罗斯过程提取其转动能。" : "The ergosphere is a warped region outside the outer horizon. Here, space itself is dragged faster than light, enabling energy extraction." }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "黑洞视界演化 汇总" : "Singularity & Event Horizon Telemetry",
      beats: [
        { id: 1, action: lang === "zh" ? "吸积仪表数据流" : "Accretion Telemetry", title: lang === "zh" ? "吸积气体热力遥测数据" : "Accretion Flow Thermal Telemetry", body: lang === "zh" ? "全光谱合并分析！汇总包括极高温度、角动量通量以及强辐射剪切阻尼等指标在内的吸积盘热物理账册。" : "Multi-spectral synthesis! Aggregating thermodynamic data, angular momentum fluxes, and shear damping parameters into a live database." },
        { id: 2, action: lang === "zh" ? "张量波动积分" : "Compute Tensor Waves", title: lang === "zh" ? "引力波双向干涉极值" : "Gravitational Wave Waveform", body: lang === "zh" ? "两个大质量天体螺旋合并前，释放出极其强烈的时空涟漪。通过极高分辨率激光干涉遥测，解算双向引力波偏振极值。" : "Spacetime ripples ripple from orbiting inspirals. High-resolution laser interferometry reconstructs gravitational wave amplitude." },
        { id: 3, action: lang === "zh" ? "量子相干校验" : "Verify Horizon Coherence", title: lang === "zh" ? "视界边界量子相干证书" : "Horizon Edge Quantum Certification", body: lang === "zh" ? "在霍金辐射达到临界相干时，信息丢失悖论在视界边界层得到全相干校准，签发大质量天体合规与信息守恒绿灯认证。" : "At critical evaporation thresholds, information preservation limits are validated, issuing a quantum conservation green light." }
      ]
    }
  ]
});

export default function Style01({ scene, beat, language, isThumbnail }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];

  const renderVisual = () => {
    switch (scene) {
      case 1:
        return (
          <div className="relative w-[34cqw] h-[34cqw] flex items-center justify-center animate-scale-up" key={`s1-${beat}`}>
            {/* Background Spacetime Grid */}
            <div className="absolute inset-0 opacity-15 border border-dashed border-slate-700/40 rounded-full" />
            <div className="absolute w-[80%] h-[80%] opacity-20 border border-dashed border-slate-700/30 rounded-full" />

            {/* Glowing Accretion Disk Ring */}
            <div className={`absolute rounded-full border-4 border-cyan-500/30 w-[24cqw] h-[24cqw] blur-[3px] transition-all duration-1000 ${
              beat >= 1 ? "opacity-100 scale-110 shadow-[0_0_50px_rgba(6,182,212,0.4)]" : "opacity-0 scale-90"
            }`} style={{ transformStyle: "preserve-3d", transform: "rotateX(70deg) rotateY(10deg)" }} />

            {/* Active Inner Ring */}
            <div className={`absolute rounded-full border border-dashed border-amber-400/50 w-[18cqw] h-[18cqw] transition-all duration-1000 ${
              beat >= 1 ? "opacity-100 animate-rotate-slow" : "opacity-0 scale-95"
            }`} style={{ transformStyle: "preserve-3d", transform: "rotateX(70deg) rotateY(10deg) rotateZ(45deg)" }} />

            {/* Singularity Sphere */}
            <div className="absolute w-[10cqw] h-[10cqw] rounded-full bg-black border-2 border-slate-800 shadow-[inset_0_0_30px_rgba(0,0,0,1),0_0_20px_rgba(6,182,212,0.2)] flex items-center justify-center">
              <div className="w-[3cqw] h-[3cqw] rounded-full bg-cyan-400/10 blur-[5px] animate-pulse" />
            </div>

            {/* Hawking Radiation Emitter */}
            {beat >= 2 && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[0.3cqw] h-[15cqh] bg-gradient-to-t from-transparent via-cyan-400 to-transparent animate-pulse rounded-full" style={{ transform: "rotate(45deg)" }} />
                <div className="absolute w-[0.3cqw] h-[15cqh] bg-gradient-to-t from-transparent via-cyan-400 to-transparent animate-pulse rounded-full" style={{ transform: "rotate(-45deg)" }} />
                <div className="absolute w-[12cqw] h-[12cqw] rounded-full border border-cyan-400/40 animate-ping opacity-30" />
              </div>
            )}
          </div>
        );
      case 2:
        return (
          <div className="relative w-full max-w-[42cqw] grid grid-cols-2 gap-[3cqw] items-center animate-rotate-in" key={`s2-${beat}`}>
            {/* Left Column: Gravity Lens Mesh */}
            <div className={`border border-slate-800 bg-slate-950/40 p-[2cqw] rounded-2xl flex flex-col items-center justify-center gap-4 relative overflow-hidden min-h-[28cqh] ${beat >= 0 ? "opacity-100 scale-100" : "opacity-30 scale-95"}`}>
              {/* Spacetime Distortion Warping Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
                <path d="M0,0 Q 50,50 100,100 M 100,0 Q 50,50 0,100" fill="none" stroke="#22d3ee" strokeWidth="2" />
                <circle cx="50%" cy="50%" r="20" fill="none" stroke="#22d3ee" strokeWidth="1" />
              </svg>
              <Orbit className="w-[5cqw] h-[5cqw] text-cyan-500 animate-rotate-slow" />
              <div className="text-center">
                <span className="font-mono text-[1.1cqw] text-cyan-400 font-bold block">POTENTIAL WELL</span>
                <span className="text-[0.9cqw] text-slate-500">{language === "zh" ? "引力势阱阻尼" : "Gravity potential damping"}</span>
              </div>
            </div>

            {/* Right Column: Star Alignment / Einstein Ring */}
            <div className={`border border-slate-800 bg-slate-950/40 p-[2cqw] rounded-2xl flex flex-col items-center justify-center gap-4 relative overflow-hidden min-h-[28cqh] transition-all duration-1000 ${
              beat >= 1 ? "opacity-100 scale-100" : "opacity-10 scale-90"
            }`}>
              {/* Lensing Ring Visual */}
              <div className={`w-[8cqw] h-[8cqw] rounded-full border-2 border-dashed border-amber-400 flex items-center justify-center ${beat >= 2 ? "animate-spin-slow border-solid shadow-[0_0_30px_rgba(251,191,36,0.3)]" : ""}`}>
                <div className="w-[3cqw] h-[3cqw] rounded-full bg-black border border-slate-700" />
              </div>
              <div className="text-center">
                <span className="font-mono text-[1.1cqw] text-amber-400 font-bold block">EINSTEIN RING</span>
                <span className="text-[0.9cqw] text-slate-500">{language === "zh" ? "完美对齐偏折环" : "Bent photon trajectory"}</span>
              </div>
            </div>

            {/* Connecting Ray */}
            {beat >= 1 && (
              <div className="absolute left-[45%] right-[45%] top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-cyan-500/20 via-amber-400/40 to-amber-500/20 z-10 pointer-events-none" />
            )}
          </div>
        );
      case 3:
        return (
          <div className="flex items-center justify-between w-full max-w-[44cqw] relative animate-slide-up" key={`s3-${beat}`}>
            {/* Node 1: Inflow */}
            <div className={`border border-slate-800 bg-slate-950/50 p-[1.8cqw] rounded-xl flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md relative overflow-hidden transition-all duration-700 ${beat >= 0 ? "opacity-100 scale-100 border-cyan-500/30" : "opacity-20 scale-95"}`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">01</div>
              <div className="w-[3cqw] h-[3cqw] rounded-full bg-cyan-950 border border-cyan-500 flex items-center justify-center font-mono text-cyan-400 text-[1.1cqw] font-bold">IN</div>
              <span className="font-mono text-[1cqw] font-bold text-slate-200">{language === "zh" ? "吸积流入" : "ACCRETION"}</span>
            </div>

            {/* Line 1 */}
            <div className={`flex-1 h-0.5 border-t border-dashed transition-all duration-1000 mx-2 ${
              beat >= 1 ? "border-cyan-500/50 opacity-100" : "border-slate-800 opacity-20"
            }`} />

            {/* Node 2: Orbit Boundary */}
            <div className={`border border-slate-800 bg-slate-950/50 p-[1.8cqw] rounded-xl flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md relative overflow-hidden transition-all duration-700 ${
              beat >= 1 ? "opacity-100 scale-100 border-amber-400/30" : "opacity-20 scale-95"
            }`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">02</div>
              <div className="w-[3cqw] h-[3cqw] rounded-full bg-amber-950 border border-amber-400 flex items-center justify-center font-mono text-amber-400 text-[1.1cqw] font-bold">ISCO</div>
              <span className="font-mono text-[1cqw] font-bold text-slate-200">{language === "zh" ? "临界环绕" : "CRITICAL"}</span>
            </div>

            {/* Line 2 */}
            <div className={`flex-1 h-0.5 border-t border-dashed transition-all duration-1000 mx-2 ${
              beat >= 2 ? "border-amber-400/50 opacity-100" : "border-slate-800 opacity-20"
            }`} />

            {/* Node 3: Outflow Jet */}
            <div className={`border border-slate-800 bg-slate-950/50 p-[1.8cqw] rounded-xl flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md relative overflow-hidden transition-all duration-700 ${
              beat >= 2 ? "opacity-100 scale-100 border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.25)]" : "opacity-20 scale-95"
            }`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">03</div>
              <div className="w-[3cqw] h-[3cqw] rounded-full bg-red-950 border border-red-500 flex items-center justify-center font-mono text-red-400 text-[1.1cqw] font-bold">JET</div>
              <span className="font-mono text-[1cqw] font-bold text-slate-200">{language === "zh" ? "等离子喷流" : "OUTFLOW"}</span>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="grid grid-cols-2 gap-[1.5cqw] w-full max-w-[42cqw] animate-scale-up" key={`s4-${beat}`}>
            {/* Quadrant 1 */}
            <div className={`border border-slate-800 bg-slate-950/30 p-[1.5cqw] rounded-xl relative transition-all duration-500 ${beat >= 0 ? "opacity-100 scale-100 border-cyan-500/20" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-cyan-400 font-bold">Q1</div>
              <span className="font-mono text-[1.1cqw] text-slate-300 font-black block mb-1">{language === "zh" ? "施瓦西半径 (Rs)" : "SCHWARZCHILD LIMIT"}</span>
              <p className="text-[0.9cqw] opacity-75 text-slate-400 font-sans leading-tight">
                Rs = 2GM/c² • {language === "zh" ? "描述无静止旋转天体临界坍缩边界。" : "Classic spherical boundary limit."}
              </p>
            </div>

            {/* Quadrant 2 */}
            <div className={`border border-slate-800 bg-slate-950/30 p-[1.5cqw] rounded-xl relative transition-all duration-500 ${beat >= 1 ? "opacity-100 scale-100 border-amber-400/20" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-amber-400 font-bold">Q2</div>
              <span className="font-mono text-[1.1cqw] text-slate-300 font-black block mb-1">{language === "zh" ? "克尔极值拖拽 (a)" : "KERR SPIN VECTOR"}</span>
              <p className="text-[0.9cqw] opacity-75 text-slate-400 font-sans leading-tight">
                J = aMc • {language === "zh" ? "旋转天体导致的强烈轴向时空拖拽。 " : "Spacetime dragging parameter J under spin vector."}
              </p>
            </div>

            {/* Quadrant 3 */}
            <div className={`border border-slate-800 bg-slate-950/30 p-[1.5cqw] rounded-xl relative transition-all duration-500 ${beat >= 2 ? "opacity-100 scale-100 border-red-500/20" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-red-400 font-bold">Q3</div>
              <span className="font-mono text-[1.1cqw] text-slate-300 font-black block mb-1">{language === "zh" ? "能层高能彭罗斯" : "PENROSE PROCESS"}</span>
              <p className="text-[0.9cqw] opacity-75 text-slate-400 font-sans leading-tight">
                E_out &gt; E_in • {language === "zh" ? "利用旋转黑洞能层的旋转动能进行高能增殖。" : "Extracting rotation momentum directly inside ergosphere."}
              </p>
            </div>

            {/* Quadrant 4 */}
            <div className={`border border-slate-800 bg-slate-950/30 p-[1.5cqw] rounded-xl relative transition-all duration-500 ${beat >= 2 ? "opacity-100 scale-100 border-emerald-500/20" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-emerald-400 font-bold">Q4</div>
              <span className="font-mono text-[1.1cqw] text-slate-300 font-black block mb-1">{language === "zh" ? "热蒸发临界状态" : "THERMAL RADIATION"}</span>
              <p className="text-[0.9cqw] opacity-75 text-slate-400 font-sans leading-tight">
                T = ℏc³/(8πGMk) • {language === "zh" ? "微观量子蒸发率随黑洞质量减少而激增。" : "Evaporation rate spikes inversely with Schwarzschild mass."}
              </p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="grid grid-cols-3 gap-[1cqw] w-full max-w-[45cqw] animate-bento-stagger" key={`s5-${beat}`}>
            {/* Bento Block 1: Accretion Live Spectrum */}
            <div className={`col-span-2 border border-slate-800 bg-slate-950/50 p-[1.2cqw] rounded-xl min-h-[16cqh] flex flex-col justify-between transition-all duration-500 ${beat >= 0 ? "opacity-100" : "opacity-25"}`}>
              <div className="flex justify-between items-center border-b border-slate-800/80 pb-1.5">
                <span className="font-mono text-[0.9cqw] text-cyan-400 font-bold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  {language === "zh" ? "吸积光谱遥测谱线" : "ACCRETION FLOW SPECTRUM"}
                </span>
                <span className="text-[0.8cqw] font-mono text-slate-500">1.28e21 keV</span>
              </div>
              <div className="flex items-end gap-1 h-[8cqh] mt-2">
                <div className="bg-cyan-500/50 w-full h-[30%] rounded-sm" />
                <div className="bg-cyan-500/70 w-full h-[65%] rounded-sm" />
                <div className="bg-cyan-400 w-full h-[95%] rounded-sm animate-pulse" />
                <div className="bg-cyan-500/70 w-full h-[45%] rounded-sm" />
                <div className="bg-cyan-500/50 w-full h-[80%] rounded-sm" />
                <div className="bg-cyan-500/30 w-full h-[35%] rounded-sm" />
              </div>
            </div>

            {/* Bento Block 2: Mass Evaporation Metric */}
            <div className={`border border-slate-800 bg-slate-950/50 p-[1.2cqw] rounded-xl min-h-[16cqh] flex flex-col justify-between transition-all duration-500 ${beat >= 1 ? "opacity-100" : "opacity-25"}`}>
              <span className="font-mono text-[0.85cqw] text-amber-400 font-bold block">{language === "zh" ? "黑洞极慢量子蒸发率" : "MASS DECAY RATE"}</span>
              <div className="text-[2.2cqw] font-black text-amber-300 font-mono leading-none my-1">
                -4.2e-8<span className="text-[1cqw] font-normal font-sans opacity-70">/Yr</span>
              </div>
              <span className="text-[0.8cqw] text-slate-500 font-mono block">M_sun Evaporate Lock</span>
            </div>

            {/* Bento Block 3: Quantum Coherence Certificate Status */}
            <div className={`col-span-3 border border-slate-800 bg-slate-950/70 p-[1cqw] rounded-xl flex items-center justify-between transition-all duration-500 ${beat >= 2 ? "opacity-100 border-emerald-500/30 bg-emerald-950/5" : "opacity-25"}`}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-mono text-[0.9cqw] text-emerald-400 font-bold">
                  {language === "zh" ? "✓ 视界边界量子相干校验锁定完成" : "✓ QUANTUM INFORMATION COHERENCE VERIFIED"}
                </span>
              </div>
              <span className="font-mono text-[0.8cqw] text-slate-500">{language === "zh" ? "纠缠态证书: SECURE" : "ENTANGLEMENT STATUS: SECURE"}</span>
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
      <div className="w-full flex justify-between items-start border-b border-slate-900/60 pb-[2cqh] z-10 shrink-0">
        <div className="flex flex-col gap-0.5">
          <span className="font-mono text-[1.1cqw] tracking-widest uppercase text-cyan-500 font-black">
            {meta.theme}
          </span>
          <span className="text-[1cqw] text-slate-500 font-mono tracking-tight uppercase">
            {meta.name} • {currentScene.title}
          </span>
        </div>
        <div className="flex items-center gap-2 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800">
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          <span className="font-mono text-[0.9cqw] text-slate-400 font-bold uppercase">{meta.tier}-TIER SPEAKER-LED</span>
        </div>
      </div>

      {/* Central Split Layout Panel */}
      <div className="flex-1 w-full grid grid-cols-12 gap-[4cqw] items-center my-[3cqh] z-10 overflow-hidden">
        {/* Left Column: Semantic Copy Content Block */}
        <div className="col-span-6 flex flex-col gap-[2cqh] text-left pr-[2cqw] justify-center min-h-[35cqh]">
          <h1 className="text-[3.8cqw] leading-[1.1] font-black tracking-tight font-serif text-white animate-slide-right" key={`title-${scene}-${beat}`}>
            {currentBeat.title}
          </h1>
          <p className="text-[1.5cqw] leading-[1.5] text-slate-300 font-sans mt-[1cqh] animate-crossfade" key={`body-${scene}-${beat}`}>
            {currentBeat.body}
          </p>
        </div>

        {/* Right Column: Creative Visual Vector Canvas */}
        <div className="col-span-6 flex items-center justify-center min-h-[40cqh]">
          {renderVisual()}
        </div>
      </div>

      {/* Bottom Technical Progress Ledger Bar */}
      <div className="w-full flex justify-between items-center border-t border-slate-900/60 pt-[2cqh] z-10 shrink-0">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.95cqw] text-slate-500 font-bold uppercase">{language === "zh" ? "实时操作:" : "BEAT ACTION:"}</span>
          <span className="font-mono text-[1cqw] bg-cyan-950/50 text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded-full font-black animate-pulse" key={`action-${scene}-${beat}`}>
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
