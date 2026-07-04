import React from "react";
import { 
  Sparkles, Music, Activity, Layers, Activity as WaveIcon, Compass, Award, Tag
} from "lucide-react";

export const getMetadata = (lang) => ({
  id: "06",
  tier: "A",
  name: lang === "zh" ? "巴赫赋格的几何对位" : "Geometry of Bach's Fugues",
  theme: lang === "zh" ? "数学谐律与复调几何" : "Mathematical Harmony & Fugues",
  densityLabel: lang === "zh" ? "粉笔黑板" : "Chalkboard Academics",
  colors: { bg: "bg-[#14221d]", ink: "text-slate-100", panel: "border-slate-800" },
  typography: { header: "font-handwriting", body: "font-mono" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "巴赫赋格的几何对位 绪论" : "Introduction to Bach's Fugue",
      beats: [
        { id: 1, action: lang === "zh" ? "绘制手绘五线谱号" : "Draw Clef", title: lang === "zh" ? "数学逻辑与复调对位法" : "The Mathematics of Polyphony", body: lang === "zh" ? "巴赫将音乐视作严密的几何代数。通过单一主题在不同声部的轮流呈现与交织，建构起结构宏大、因果自洽的对位几何空间。" : "Bach treated music as rigorous geometric algebra. By weaving a single subject across voices, he built self-consistent polyphonic architectures." },
        { id: 2, action: lang === "zh" ? "引入答句副主题" : "Introduce Counter-Subject", title: lang === "zh" ? "主音首秀与最简赋格主题" : "The Solo Treble Subject Entry", body: lang === "zh" ? "在高音部，主音（Dux）首现。它如同一个清晰明了的几何定理，不带任何杂质，在空旷的谱表格栅上画出第一条完美的抛物曲线。" : "In the Soprano voice, the subject (Dux) enters. Like a pristine geometric theorem, it traces its first perfect arc across empty staff lines." },
        { id: 3, action: lang === "zh" ? "激发复调声部协奏" : "Harmonize Voices", title: lang === "zh" ? "多声部粉笔对位草图" : "Chalkboard Polyphonic Sketch", body: lang === "zh" ? "利用手绘粉笔质感。当第二声部（Comes）以五度音程切入，副主题随即交织缠绕，形成精密的双螺旋重力轨道和声。" : "Deploying hand-sketched chalk aesthetics. As the second voice (Comes) enters at a fifth interval, subjects intertwine, forging double-helix harmonies." }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "巴赫赋格的几何对位 解析" : "Symmetric Voice Duality",
      beats: [
        { id: 1, action: lang === "zh" ? "勾勒主旋律波形" : "Draw Lead Wave", title: lang === "zh" ? "高音主声部正弦波轨" : "Soprano Voice Sine Trajectory", body: lang === "zh" ? "高音声部的主旋律（Dux）在黑板上勾勒出一条连续且高度对称的正弦运动波。其频率比例和波峰分布代表了古典纯律的初始对齐状态。" : "The Soprano lead melody (Dux) traces a continuous, highly symmetric sine wave. Its frequency distribution serves as the base harmonic scale." },
        { id: 2, action: lang === "zh" ? "对齐和声频率比" : "Align Harmonious Ratios", title: lang === "zh" ? "低音答句五度相差位" : "Bass Voice Perfect Fifth Shift", body: lang === "zh" ? "低音声部的答句（Comes）在相差完全五度（频比2:3）的轨道上介入。两条波形呈现出精美的剪切对置，达成了数学维度的对位均衡。" : "The Bass answer (Comes) enters at a perfect fifth interval (2:3 ratio). Both waveforms exhibit elegant shear counterpoint, balancing the registers." },
        { id: 3, action: lang === "zh" ? "锁定理性谐律" : "Lock Harmonics", title: lang === "zh" ? "黑板和声极值共振点" : "Chalkboard Resonant Consensus", body: lang === "zh" ? "两条声线在纯律焦点（3:4完全四度与2:3完全五度）处形成完美的正负干涉抵消，锁定理性而神圣的音乐几何对位。" : "Both voices achieve resonant alignment at pure intervals, canceling local interference to lock a rational, divine counterpoint." }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "巴赫赋格的几何对位 演进" : "Voice Progression Sequence",
      beats: [
        { id: 1, action: lang === "zh" ? "展开声部小节线" : "Draw Staff Measures", title: lang === "zh" ? "五线谱对数时间格栅" : "Musical Staff Logarithmic Grid", body: lang === "zh" ? "在黑板上勾画出平行的对数小节格栅，确立精密的正步时间节拍（Tempo），这是所有声部保持绝对同步的刚性律动骨架。" : "Chalking parallel staff lines across the blackboard, establishing a rigid logarithmic tempo grid to keep all entering voices synchronized." },
        { id: 2, action: lang === "zh" ? "导入副调逆行" : "Trigger Retrograde", title: lang === "zh" ? "逆行对位与倒影副主题" : "Retrograde & Inversion Counterpoint", body: lang === "zh" ? "导入副主题的倒影与逆行（Retrograde）轨迹，使旋律关于时间轴和音高轴产生完美的几何镜像翻转，推升复调张力。" : "Injecting inversion and retrograde paths, mirroring melodies perfectly across both pitch and temporal axes to escalate counterpoint tension." },
        { id: 3, action: lang === "zh" ? "完成声部协奏" : "Harmonize Ensemble", title: lang === "zh" ? "多声部理性谐律交织" : "Multi-voice Polyphony Convergence", body: lang === "zh" ? "高音、中音与低音声部全部进入，在黑板谱线上交汇。不同频段的声波高度叠合，融汇为完美的巴罗克复调乐章。" : "Soprano, Alto, and Bass converge in full polyphony. Waveforms overlap seamlessly on the staff lines, locking the final Baroque resolution." }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "巴赫赋格的几何对位 矩阵" : "Fugue Metrics Matrix",
      beats: [
        { id: 1, action: lang === "zh" ? "主句主题定位" : "Dux Subject Metric", title: lang === "zh" ? "主句主题的刚性代数核" : "Dux: The Generative Seed", body: lang === "zh" ? "作为整首赋格的绝对起点。它的音程走势和节奏模式极其精悍，决定了后续所有声部演化、派生与展开的全部基因。" : "The absolute starting line. Highly compact, its intervals and rhythmic contour code the genetic blueprint for all descendant voices." },
        { id: 2, action: lang === "zh" ? "答句五度移位" : "Comes Answer Shift", title: lang === "zh" ? "答句的属音平移与对等" : "Comes: The Perfect Fifth Echo", body: lang === "zh" ? "主题在属音位置（通常平移完全五度）的忠实再现。它与主句形成一问一答的对等呼应，确立了城邦回音壁般的对置美感。" : "A faithful reproduction of the seed in the dominant key. Forging a question-answer duality, it builds echo-chamber balance." },
        { id: 3, action: lang === "zh" ? "紧接段密轨交叠" : "Stretto Overlap Matrix", title: lang === "zh" ? "紧接段的密轨时空交叠" : "Stretto: Overlapping Urgency", body: lang === "zh" ? "在主题尚未结束时，下一声部便迫不及待地提前切入。这种时空上的极度压缩与重叠，制造了赋格曲终前最汹涌的和声高潮。" : "The next voice enters before the active subject completes. This temporal compression drives a surging harmonic climax." }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "巴赫赋格的几何对位 汇总" : "Polyphonic Harmonic Ledger",
      beats: [
        { id: 1, action: lang === "zh" ? "拉取谐律频比" : "Load Harmonic Ledger", title: lang === "zh" ? "多声部谐律频段统计账册" : "Four-Voice Polyphonic Ledger", body: lang === "zh" ? "数字交响！汇总记录四声部复调在时空网格中的完全五度对齐率、谐律失真率以及现场声学极值干涉的频谱账册。" : "Digital symphony! Documenting perfect fifth alignment rates, total harmonic distortion, and acoustic interference decibels." },
        { id: 2, action: lang === "zh" ? "计算对位相位差" : "Compute Phase Offsets", title: lang === "zh" ? "双向对位声波相位落差" : "Symmetric Sound Wave Phase Offset", body: lang === "zh" ? "剔除声学环境回音干扰，精确解算出高音部主旋律与低音部逆行倒影之间的绝对相位时间差值偏振点。" : "Subtracting acoustics reverb noise, computing absolute phase differentials between Soprano leads and Bass retrograde inversions." },
        { id: 3, action: lang === "zh" ? "加印对位法绿灯印" : "Stamp Contrapunctus Seal", title: lang === "zh" ? "复调对位报告加盖验证大印" : "Soli Deo Gloria Contrapunctus Seal", body: lang === "zh" ? "对位完成！各项声波干涉和协和度指标完美，在乐谱手稿边缘加盖巴赫经典的‘S.D.G’（唯独荣耀神）红色防伪油印章。" : "Counterpoint complete! Harmonity and alignment checked. Stamping the manuscript margin with the iconic 'S.D.G' Seal of completion." }
      ]
    }
  ]
});

export default function Style06({ scene, beat, language, isThumbnail }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];

  const renderVisual = () => {
    switch (scene) {
      case 1:
        return (
          <div className="relative w-[34cqw] h-[34cqw] flex items-center justify-center animate-chalk-wobble" key={`s1-${beat}`}>
            {/* Chalkboard Slate background page */}
            <div className="absolute w-[95%] h-[95%] bg-[#12221b] border-4 border-[#223d2f] rounded-lg shadow-2xl flex flex-col justify-between p-[1.5cqw] relative">
              
              {/* Slate Grid texture lines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_1.5cqh] pointer-events-none rounded" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:1.5cqw_100%] pointer-events-none rounded" />

              {/* Hand-drawn chalk musical G-clef SVG */}
              <div className="relative flex-1 flex items-center justify-center py-2 z-10 select-none">
                <svg className="w-[18cqw] h-[18cqw]" viewBox="0 0 100 100">
                  {/* Five Staff Lines (Classical chalk draft) */}
                  <line x1="10" y1="35" x2="90" y2="35" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                  <line x1="10" y1="43" x2="90" y2="43" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                  <line x1="10" y1="51" x2="90" y2="51" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                  <line x1="10" y1="59" x2="90" y2="59" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                  <line x1="10" y1="67" x2="90" y2="67" stroke="white" strokeWidth="1" strokeOpacity="0.3" />

                  {/* G-Clef Chalk Outline vector */}
                  <path d="M 45,78 C 45,78 48,78 48,74 C 48,68 42,55 45,35 C 47,20 54,12 51,12 C 48,12 43,20 43,30 C 43,45 58,48 58,58 C 58,68 45,69 38,62 C 32,55 35,42 45,42 C 55,42 55,55 48,55 C 44,55 43,51 46,51 L 46,75" 
                    fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                    strokeDasharray="200" strokeDashoffset={beat >= 1 ? "0" : "200"}
                    className="transition-all duration-1000" style={{ transitionDelay: "100ms" }} />
                  
                  {/* Additional Counter-subject orbital dots */}
                  {beat >= 2 && (
                    <circle cx="58" cy="58" r="8" fill="none" stroke="#fef08a" strokeWidth="1.5" strokeDasharray="3 3" className="animate-spin-slow" />
                  )}
                </svg>
              </div>

              {/* Soli Deo Gloria text stamp */}
              <div className={`absolute bottom-3 right-4 bg-emerald-950/80 border-2 border-dashed border-emerald-500/40 text-emerald-300 font-handwriting text-[1cqw] px-2.5 py-0.5 rounded rotate-[-6deg] transition-all duration-1000 ${
                beat >= 2 ? "opacity-100 scale-105 animate-pulse" : "opacity-0 scale-75"
              }`}>
                Soli Deo Gloria
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="relative w-full max-w-[42cqw] grid grid-cols-2 gap-[3cqw] items-center animate-rotate-in font-mono" key={`s2-${beat}`}>
            {/* Left Box: Dux Lead wave */}
            <div className={`bg-[#14221d] border-2 border-slate-700/30 p-[2cqw] rounded-xl shadow-lg flex flex-col justify-between min-h-[28cqh] relative ${beat >= 0 ? "opacity-100 scale-100" : "opacity-30 scale-95"}`}>
              <div className="flex items-center gap-2 border-b border-slate-700/20 pb-1.5 font-handwriting">
                <Music className="w-4 h-4 text-emerald-300" />
                <span className="text-[1.2cqw] text-emerald-300 font-bold">Dux Lead</span>
              </div>
              <svg className="w-[10cqw] h-[6cqw]" viewBox="0 0 100 60">
                {/* Clean sine wave sketch in white chalk */}
                <path d="M 0,30 Q 25,5 50,30 T 100,30" fill="none" stroke="white" strokeWidth="1.8" />
                <line x1="0" y1="30" x2="100" y2="30" stroke="white" strokeWidth="0.8" strokeOpacity="0.2" />
              </svg>
              <div className="text-center">
                <span className="font-handwriting text-[1.15cqw] text-white font-bold block">{language === "zh" ? "主旋律正弦轨迹" : "DUX SINE PATH"}</span>
                <span className="text-[0.9cqw] text-slate-400">{language === "zh" ? "基音频率对齐 1:1" : "Base pitch alignment 1:1"}</span>
              </div>
            </div>

            {/* Right Box: Comes Answer wave */}
            <div className={`bg-[#14221d] border-2 border-slate-700/30 p-[2cqw] rounded-xl shadow-lg flex flex-col justify-between min-h-[28cqh] relative transition-all duration-1000 ${
              beat >= 1 ? "opacity-100 scale-100" : "opacity-10 scale-90"
            }`}>
              <div className="flex items-center gap-2 border-b border-slate-700/20 pb-1.5 font-handwriting">
                <WaveIcon className="w-4 h-4 text-yellow-200" />
                <span className="text-[1.2cqw] text-yellow-200 font-bold">Comes Answer</span>
              </div>
              <svg className="w-[10cqw] h-[6cqw]" viewBox="0 0 100 60">
                {/* Shifted frequency wave in yellow chalk */}
                <path d="M 0,30 Q 12.5,50 25,30 T 50,30 T 75,30 T 100,30" fill="none" stroke="#fef08a" strokeWidth="1.5" />
                <line x1="0" y1="30" x2="100" y2="30" stroke="#fef08a" strokeWidth="0.8" strokeOpacity="0.2" />
              </svg>
              <div className="text-center">
                <span className="font-handwriting text-[1.15cqw] text-[#fef08a] font-bold block">{language === "zh" ? "答句完美五度移相" : "COMES FIFTH SHIFT"}</span>
                <span className="text-[0.9cqw] text-slate-400">{language === "zh" ? "谐调比对 2:3 频比" : "Ratio perfect fifth 2:3"}</span>
              </div>

              {beat >= 2 && (
                <div className="absolute inset-0 bg-emerald-950/80 flex items-center justify-center rounded-xl">
                  <div className="bg-emerald-800 text-white font-serif text-[1.2cqw] px-3 py-1 border-2 border-white rounded rotate-[-8deg] font-black tracking-widest shadow-xl animate-elastic-pop">
                    {language === "zh" ? "纯律共振" : "HARMONY LOCKED"}
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
            <div className={`border-2 border-slate-750 bg-[#12221b] p-[1.8cqw] rounded flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md relative overflow-hidden transition-all duration-700 ${beat >= 0 ? "opacity-100 scale-100" : "opacity-20 scale-95"}`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">01</div>
              <div className="w-[3cqw] h-[3cqw] rounded-full bg-[#1e2923] border border-slate-500 flex items-center justify-center font-mono text-slate-300 text-[1.1cqw] font-bold">STAFF</div>
              <span className="font-handwriting text-[1.1cqw] font-bold text-slate-200">{language === "zh" ? "绘制五线谱" : "STAFF GRID"}</span>
            </div>

            {/* Line 1 */}
            <div className={`flex-1 h-0.5 border-t border-dashed transition-all duration-1000 mx-2 ${
              beat >= 1 ? "border-emerald-500/50 opacity-100" : "border-slate-800 opacity-20"
            }`} />

            {/* Stage 2 */}
            <div className={`border-2 border-slate-750 bg-[#12221b] p-[1.8cqw] rounded flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md relative overflow-hidden transition-all duration-700 ${
              beat >= 1 ? "opacity-100 scale-100" : "opacity-20 scale-95"
            }`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">02</div>
              <div className="w-[3cqw] h-[3cqw] rounded-full bg-[#1e2923] border border-slate-500 flex items-center justify-center font-mono text-slate-300 text-[1.1cqw] font-bold">INVERT</div>
              <span className="font-handwriting text-[1.1cqw] font-bold text-slate-200">{language === "zh" ? "副调倒影" : "INVERSIONS"}</span>
            </div>

            {/* Line 2 */}
            <div className={`flex-1 h-0.5 border-t border-dashed transition-all duration-1000 mx-2 ${
              beat >= 2 ? "border-emerald-500/50 opacity-100" : "border-slate-800 opacity-20"
            }`} />

            {/* Stage 3 */}
            <div className={`border-2 border-emerald-500/30 bg-[#12221b] p-[1.8cqw] rounded flex flex-col items-center gap-2 w-[12cqw] text-center shadow-md relative overflow-hidden transition-all duration-700 ${
              beat >= 2 ? "opacity-100 scale-100 border-emerald-500/50" : "opacity-20 scale-95"
            }`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">03</div>
              <div className="w-[3cqw] h-[3cqw] rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center font-mono text-emerald-400 text-[1.1cqw] font-bold">CONC</div>
              <span className="font-handwriting text-[1.1cqw] font-bold text-slate-200">{language === "zh" ? "复调协奏" : "POLYPHONY"}</span>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="grid grid-cols-2 gap-[1.5cqw] w-full max-w-[42cqw] animate-scale-up font-mono" key={`s4-${beat}`}>
            {/* Rule 1 */}
            <div className={`border border-slate-800 bg-slate-950/20 p-[1.5cqw] rounded relative transition-all duration-500 ${beat >= 0 ? "opacity-100 scale-100 border-emerald-500/20" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-emerald-400 font-bold">DUX</div>
              <span className="font-handwriting text-[1.25cqw] text-white font-bold block mb-1">{language === "zh" ? "主旋主题 seed" : "DUX: MELODIC SEED"}</span>
              <p className="text-[0.9cqw] opacity-85 text-slate-300 font-sans leading-tight">
                {language === "zh" ? "赋格的代数核。刚性的旋律起点，限定后续所有声部的对位和声框架。" : "The genetic mathematical code defining subsequent polyphonic vectors."}
              </p>
            </div>

            {/* Rule 2 */}
            <div className={`border border-slate-800 bg-slate-950/20 p-[1.5cqw] rounded relative transition-all duration-500 ${beat >= 1 ? "opacity-100 scale-100 border-yellow-400/20" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-yellow-300 font-bold">COMES</div>
              <span className="font-handwriting text-[1.25cqw] text-white font-bold block mb-1">{language === "zh" ? "答句属音平移 Comes" : "COMES: FIFTH ECHO"}</span>
              <p className="text-[0.9cqw] opacity-85 text-slate-300 font-sans leading-tight">
                {language === "zh" ? "主题的五度平移再现。一问一答形成音响对置，支撑整体和声维度。" : "Symmetric transposition in the dominant key, responding in counterpoint."}
              </p>
            </div>

            {/* Rule 3 */}
            <div className={`border border-slate-800 bg-slate-950/20 p-[1.5cqw] rounded relative transition-all duration-500 ${beat >= 2 ? "opacity-100 scale-100 border-red-400/20" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-red-400 font-bold">STRETTO</div>
              <span className="font-handwriting text-[1.25cqw] text-white font-bold block mb-1">{language === "zh" ? "紧接段密轨交叠" : "STRETTO: CONGESTION"}</span>
              <p className="text-[0.9cqw] opacity-85 text-slate-300 font-sans leading-tight">
                {language === "zh" ? "在主题尚未结束时提前切入第二声部，制造极度密集的和声碰撞点。" : "Overlapping voice entries, accelerating tempo gravity before final resolution."}
              </p>
            </div>

            {/* Rule 4 */}
            <div className={`border border-emerald-500/20 bg-emerald-950/10 p-[1.5cqw] rounded relative transition-all duration-500 ${beat >= 2 ? "opacity-100 scale-100" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-emerald-400 font-bold">SDG</div>
              <span className="font-handwriting text-[1.25cqw] text-white font-bold block mb-1">{language === "zh" ? "逆行倒影对置" : "RETROGRADE INVERSION"}</span>
              <p className="text-[0.9cqw] opacity-85 text-slate-300 font-sans leading-tight">
                {language === "zh" ? "旋律同时关于时间轴和音高轴作镜像对称，达到纯粹逻辑的巴赫顶峰。" : "Perfect geometric mirroring of weft waves across pitch and time boundaries."}
              </p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="grid grid-cols-3 gap-[1cqw] w-full max-w-[45cqw] animate-bento-stagger" key={`s5-${beat}`}>
            {/* Bento Block 1: Wave Tally */}
            <div className={`col-span-2 border border-slate-700/20 bg-[#12221b] p-[1.2cqw] rounded min-h-[16cqh] flex flex-col justify-between transition-all duration-500 ${beat >= 0 ? "opacity-100" : "opacity-25"}`}>
              <div className="flex justify-between items-center border-b border-slate-700/30 pb-1.5 font-handwriting">
                <span className="text-[1.2cqw] text-[#fef08a] font-black flex items-center gap-1.5">
                  <Music className="w-3.5 h-3.5" />
                  {language === "zh" ? "复调声部频段谐律测量" : "FOUR-VOICE HARMONIC ALIGNMENT"}
                </span>
                <span className="text-[0.8cqw] font-mono text-slate-400">Contrapunctus IV</span>
              </div>
              
              <div className="flex flex-col gap-1.5 mt-2 font-mono text-[0.85cqw] text-slate-300">
                <div className="flex justify-between">
                  <span>Soprano-Alto Perfect Fifth:</span><span className="font-bold text-emerald-400">99.98% Align</span>
                </div>
                <div className="flex justify-between">
                  <span>Tenor-Bass Consonant Ratio:</span><span className="font-bold text-yellow-300">3:2 (Resonant)</span>
                </div>
              </div>
            </div>

            {/* Bento Block 2: Consonance Rate */}
            <div className={`border border-slate-700/20 bg-[#12221b] p-[1.2cqw] rounded min-h-[16cqh] flex flex-col justify-between transition-all duration-500 ${beat >= 1 ? "opacity-100" : "opacity-25"}`}>
              <span className="font-handwriting text-[1.15cqw] text-emerald-300 font-bold block">{language === "zh" ? "和弦协和振动极值" : "HARMONIC CONSONANCE"}</span>
              <div className="text-[2.2cqw] font-black text-emerald-300 font-mono leading-none my-1">
                99.8%<span className="text-[1cqw] font-normal font-sans opacity-70">c</span>
              </div>
              <span className="text-[0.8cqw] text-slate-400 font-mono block">Zero Dissonance Error</span>
            </div>

            {/* Bento Block 3: S.D.G Certificate */}
            <div className={`col-span-3 border border-emerald-500/20 bg-[#12221b] p-[1cqw] rounded flex items-center justify-between transition-all duration-500 ${beat >= 2 ? "opacity-100 border-emerald-500/50 bg-emerald-950/10" : "opacity-25"}`}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-handwriting text-[1.2cqw] text-emerald-300 font-black">
                  {language === "zh" ? "✓ 赋格手稿对位大成加盖红色巴赫印信章备案" : "✓ SOLI DEO GLORIA CONTRAPUNCTUS ARCHIVE SEALED"}
                </span>
              </div>
              <span className="font-mono text-[0.8cqw] text-slate-400">SEAL: SDG.BACH.402</span>
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
      <div className="w-full flex justify-between items-start border-b border-slate-700/20 pb-[2cqh] z-10 shrink-0">
        <div className="flex flex-col gap-0.5">
          <span className="font-handwriting text-[1.3cqw] tracking-wide text-emerald-400 font-bold">
            {meta.theme}
          </span>
          <span className="text-[1cqw] text-slate-400 font-mono tracking-tight uppercase">
            {meta.name} • {currentScene.title}
          </span>
        </div>
        <div className="flex items-center gap-2 bg-[#12221b] px-3 py-1.5 rounded border border-slate-700/35 shadow-xl">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-handwriting text-[1.15cqw] text-emerald-300 font-bold uppercase">{meta.tier}-Tier Counterpoint</span>
        </div>
      </div>

      {/* Central Split Layout Panel */}
      <div className="flex-1 w-full grid grid-cols-12 gap-[4cqw] items-center my-[3cqh] z-10 overflow-hidden">
        {/* Left Column: Semantic Copy Content Block */}
        <div className="col-span-6 flex flex-col gap-[2cqh] text-left pr-[2cqw] justify-center min-h-[35cqh]">
          <h1 className="text-[3.8cqw] leading-[1.1] font-bold tracking-tight font-handwriting text-white animate-slide-right" key={`title-${scene}-${beat}`}>
            {currentBeat.title}
          </h1>
          <p className="text-[1.5cqw] leading-[1.5] text-slate-300 font-mono mt-[1cqh] animate-crossfade" key={`body-${scene}-${beat}`}>
            {currentBeat.body}
          </p>
        </div>

        {/* Right Column: Creative Visual Vector Canvas */}
        <div className="col-span-6 flex items-center justify-center min-h-[40cqh]">
          {renderVisual()}
        </div>
      </div>

      {/* Bottom Technical Progress Ledger Bar */}
      <div className="w-full flex justify-between items-center border-t border-slate-700/20 pt-[2cqh] z-10 shrink-0">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.95cqw] text-slate-500 font-bold uppercase">{language === "zh" ? "实时操作:" : "BEAT ACTION:"}</span>
          <span className="font-handwriting text-[1.1cqw] bg-[#12221b] text-emerald-300 border border-emerald-500/20 px-3 py-1 rounded font-bold animate-pulse" key={`action-${scene}-${beat}`}>
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
