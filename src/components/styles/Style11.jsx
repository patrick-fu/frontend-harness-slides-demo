import React from "react";
import { Music, Activity, Disc, Heart, Sliders, Volume2, Shield, Eye, Layers, CheckCircle } from "lucide-react";

export const getMetadata = (lang) => ({
  id: "11",
  tier: "B",
  name: lang === "zh" ? "指挥家与管弦声部的协奏共鸣" : "Conductor & Orchestra Feedback",
  theme: lang === "zh" ? "古典交响乐声部统合" : "Orchestral Harmony Feedback",
  densityLabel: lang === "zh" ? "声共鸣编织" : "Symphonic Interactive Mesh",
  colors: { bg: "bg-[#0d0714]", ink: "text-[#eeddf8]", panel: "border-[#bf5af2]/15", accent: "text-[#bf5af2]" },
  typography: { header: "font-serif", body: "font-sans" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "指挥棒指引与声能凝聚" : "Baton Trajectory & Sonic Focus",
      beats: [
        { id: 1, action: lang === "zh" ? "举棒凝聚" : "Raise Baton", title: lang === "zh" ? "指挥棒高悬与气流凝聚" : "Baton High-suspended & Silent Focus", body: lang === "zh" ? "指挥家双手举起，全场千百人呼吸同频，寂静如铁，气流与声学张力凝聚于棒尖。" : "Conductor raises both hands. Thousands share a single breath in absolute, heavy silence, acoustic tension focusing at the baton's tip." },
        { id: 2, action: lang === "zh" ? "首拍起航" : "First Downbeat", title: lang === "zh" ? "首拍挥下与弦乐微风" : "Downbeat Fall & Gentle String Breeze", body: lang === "zh" ? "金棒划下，首提琴声部流淌出如丝般平滑的和弦线条，勾勒出音场的第一条流线路径。" : "The gold baton drops. First violins pour out silky, smooth chord lines, sketching the first stream path across the audio field." },
        { id: 3, action: lang === "zh" ? "时值相位" : "Tempo Phase Lock", title: lang === "zh" ? "乐段时值相位锁定" : "Phrase Tempo Phase Lock", body: lang === "zh" ? "精密锁定提琴弓段换向的时值相位，使多重琴弓磨合出完美共鸣，消除多线程杂音。" : "Locking the precise timing of bow-stroke changes across violin stands, merging friction into pure resonance without phase drag." }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "声部呼应与双对位和声" : "Antiphonal Dialogue & Dual Align",
      beats: [
        { id: 1, action: lang === "zh" ? "对话引导" : "Lead Strings", title: lang === "zh" ? "小提琴与大提琴双向对位" : "Violin & Cello Bidirectional Counterpoint", body: lang === "zh" ? "左手拨动，引导大提琴声部以低沉和弦切入，与小提琴的高亢旋律进行跨频段对位倾诉。" : "Left-hand cueing cellos to enter with deep registers, holding a warm counterpoint dialogue against soaring violin waves." },
        { id: 2, action: lang === "zh" ? "铜管灌注" : "Brass Influx", title: lang === "zh" ? "铜管重金属和声猛烈灌注" : "Metallic Brass Chord Influx", body: lang === "zh" ? "右手平推，引导圆号与长号声部猛烈灌注中频和声，为声音大厦筑起坚实的空间承重支柱。" : "Right-hand sweeping. Horns and trombones inject rich middle-range chords, building steel-like load pillars for the audio arch." },
        { id: 3, action: lang === "zh" ? "和声极性" : "Harmonic Balance", title: lang === "zh" ? "声部响度极性均衡" : "Section Loudness Polar Balancing", body: lang === "zh" ? "微调铜管与弦乐的响度占比，确保宏大和声中不失细微笔触，完成中频与高频的完美咬合。" : "Adjusting the loudness ratio of brass to strings, protecting microscopic string textures under massive metal chords." }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "三阶渐强与全乐团大共鸣" : "Three-Stage Crescendo & Full Grid",
      beats: [
        { id: 1, action: lang === "zh" ? "织入木管" : "Add Woodwinds", title: lang === "zh" ? "木管微风织体精巧交织" : "Delicate Woodwind Web Interweave", body: lang === "zh" ? "长笛与双簧管以快速琶音掠过弦乐上空，为庞大的声音气流覆上一层晶莹剔透的水晶鳞片。" : "Flutes and oboes sweep in with rapid arpeggios above string waves, adding sparkling glass-like droplets to the mass." },
        { id: 2, action: lang === "zh" ? "定音震击" : "Timpani Attack", title: lang === "zh" ? "定音鼓动态重击夯底" : "Timpani Gravity Stroke Grounding", body: lang === "zh" ? "定音鼓猛然爆发出雷鸣般的持续震击，死死锁住节拍重音，瞬间点燃乐团全体声能阈值。" : "Timpani unleashes thunderous rhythmic hammer-strokes, anchoring gravity, instantly igniting entire orchestral energy." },
        { id: 3, action: lang === "zh" ? "谐波共鸣" : "Orchestra Peak Lock", title: lang === "zh" ? "全乐团超高维谐波网锁定" : "Full Orchestra Harmonic Grid Lock", body: lang === "zh" ? "数十声部、上百件乐器在黄金交点融合成一个滔天的共鸣浪潮，大网铺天盖地，和声无懈可击。" : "Dozens of sections, hundreds of instruments merge at the golden climax, weaving an airtight, colossal net of acoustic harmony." }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "声谱相位与掩蔽柔性调校" : "Spectral Phases & Masking Adjustment",
      beats: [
        { id: 1, action: lang === "zh" ? "频谱扫描" : "Scan Spectrum", title: lang === "zh" ? "声场空间频谱三维扫描" : "Three-dimensional Field Phase Scan", body: lang === "zh" ? "对表演空间的分贝能量和相位干涉进行高维测绘，揪出隐藏在建筑死角中的微弱频音错位。" : "Charting three-dimensional field sound decibels and phase interference, locating micro-errors hidden in architectural corners." },
        { id: 2, action: lang === "zh" ? "音量增益" : "Fader Balancing", title: lang === "zh" ? "声部掩蔽增益自适应调校" : "Acoustic Masking Adaptive Gains", body: lang === "zh" ? "计算乐器间的声掩蔽值，自动压低高响度铜管，使得木管声部细如发丝的颤音细节纤毫毕现。" : "Computing inter-instrument masking indices, automatically ducking brass peaks to protect hair-thin woodwind flutter vibratos." },
        { id: 3, action: lang === "zh" ? "声场清算" : "Verify Acoustic", title: lang === "zh" ? "物理声场谐波均衡度清算" : "Acoustic Reverberation Sieve Complete", body: lang === "zh" ? "测算演奏厅黄金余音衰减指数，消除多路径反射残响，为高置信度声能流转签发终极认证。" : "Measuring golden decay times, canceling multipath reflection flutters, certifying superb acoustic clarity." }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "全声部共鸣大网络控制台" : "Grand Symphonic Harmony Console",
      beats: [
        { id: 1, action: lang === "zh" ? "协奏编译" : "Symphonic Influx", title: lang === "zh" ? "全声部乐段波形实时交互汇聚" : "Live Symphonic Performance Stream", body: lang === "zh" ? "交响合唱巨网彻底拉开，全方位数字音轨在低延迟传输通道中澎湃交汇，实时编译出声学译本。" : "The colossal choral net is fully spread. Hundreds of streams surge through local audio pipes, synthesizing real-time outputs." },
        { id: 2, action: lang === "zh" ? "共鸣融合" : "Harmonic Convergence", title: lang === "zh" ? "全乐段四大声部大共鸣融合" : "Four-Section Harmony Mesh Lock", style: "", body: lang === "zh" ? "弦、木、铜、敲四大声部谐波网络达到百分之百交叉，共鸣网在声谱图上如黄金雕刻，浑然一体。" : "Strings, woodwinds, brass, and percussion reach 100% phase alignment, the golden spectrogram flowing as a single wave." },
        { id: 3, action: lang === "zh" ? "华彩收官" : "Grand Finale Seal", title: lang === "zh" ? "终极华彩乐章神圣收尾" : "Orchestral Masterpiece Grand Finale", body: lang === "zh" ? "指挥双手合拢骤停，漫天音浪刹那消弭，留白之处余音缭绕，整场交响大流转获得圆满绿灯通车。" : "Conductor's arms snap together. Colossal waves vanish instantly, leaving divine silence. The masterpiece closes with glowing green scores." }
      ]
    }
  ]
});

export default function Style11({ scene, beat, language, isThumbnail }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];
  const isZh = language === "zh";

  // Section highlight states based on scene/beat
  const getSectionLevels = () => {
    // Return mock db levels for Strings, Woodwinds, Brass, Percussion
    if (scene === 1) {
      if (beat === 0) return [10, 0, 0, 0];
      if (beat === 1) return [45, 10, 0, 0];
      return [60, 15, 5, 0];
    }
    if (scene === 2) {
      if (beat === 0) return [75, 20, 10, 0];
      if (beat === 1) return [70, 20, 85, 15];
      return [75, 30, 75, 25];
    }
    if (scene === 3) {
      if (beat === 0) return [80, 70, 70, 30];
      if (beat === 1) return [85, 75, 75, 90];
      return [98, 92, 94, 96];
    }
    if (scene === 4) {
      if (beat === 0) return [60, 50, 45, 40];
      if (beat === 1) return [70, 85, 55, 45];
      return [65, 75, 60, 50];
    }
    // Scene 5 (Extreme)
    if (beat === 0) return [85, 75, 80, 70];
    if (beat === 1) return [94, 92, 90, 88];
    return [0, 0, 0, 0]; // Sudden stop at the finale!
  };

  const levels = getSectionLevels();
  const activeSections = [
    levels[0] > 10,
    levels[1] > 10,
    levels[2] > 10,
    levels[3] > 10
  ];

  return (
    <div className={`w-full h-full flex flex-col justify-between p-[3.5cqw] relative ${meta.colors.bg} ${meta.colors.ink} select-none overflow-hidden`} key={`${scene}-${beat}`}>
      {/* Background Concert Hall Ceiling Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 800 500" fill="none" stroke="currentColor">
          <circle cx="400" cy="-100" r="250" strokeWidth="1.5" strokeDasharray="3,6" />
          <circle cx="400" cy="-100" r="350" strokeWidth="1.5" strokeDasharray="3,6" />
          <circle cx="400" cy="-100" r="450" strokeWidth="1.5" strokeDasharray="3,6" />
          <path d="M400 -100 L 0 500 M400 -100 L 200 500 M400 -100 L 400 500 M400 -100 L 600 500 M400 -100 L 800 500" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      {/* Slide Header */}
      <div className="flex justify-between items-start border-b border-[#bf5af2]/15 pb-[2cqh] z-10">
        <div>
          <span className="font-mono text-[1.1cqw] tracking-widest uppercase opacity-60 flex items-center gap-[0.5cqw]">
            <Music className="w-[1.2cqw] h-[1.2cqw] animate-pulse text-[#bf5af2]" />
            {meta.theme}
          </span>
          <h1 className="text-[3cqw] font-serif font-black tracking-tight mt-[0.5cqh]">
            {currentScene.title}
          </h1>
        </div>
        <div className="text-right font-mono">
          <div className="text-[1.2cqw] font-bold text-[#bf5af2]">
            {isZh ? "声部统合指挥网" : "Symphonic Mesh Console"}
          </div>
          <div className="text-[0.9cqw] opacity-50 uppercase tracking-widest mt-[0.5cqh]">
            {meta.densityLabel}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-12 gap-[2.5cqw] flex-1 my-[2.5cqh] items-stretch z-10">
        {/* Left Column: Core Copywriting Lede */}
        <div className="col-span-5 flex flex-col justify-between pr-[1cqw]">
          <div className="flex flex-col gap-[1.5cqh]">
            <span className="font-mono text-[1cqw] tracking-widest uppercase text-[#bf5af2] font-bold flex items-center gap-[0.5cqw]">
              <span className="w-[0.8cqw] h-[0.8cqw] bg-[#bf5af2] rounded-full animate-ping" />
              {currentBeat.action}
            </span>
            <h2 className="text-[2.2cqw] font-serif font-black leading-tight">
              {currentBeat.title}
            </h2>
            <p className="text-[1.1cqw] leading-[1.6] opacity-80 font-sans">
              {currentBeat.body}
            </p>
          </div>

          {/* Real-time decibel monitor block */}
          <div className="bg-[#191024] border border-[#bf5af2]/20 rounded-xl p-[1.5cqw] flex flex-col gap-[1cqh]">
            <div className="flex justify-between items-center border-b border-[#bf5af2]/15 pb-[0.8cqh]">
              <span className="text-[0.9cqw] font-mono font-bold tracking-wider opacity-60 text-zinc-200">
                {isZh ? "各声部实时输入指标 (dB)" : "ACTIVE AUDIO GAINS (dB)"}
              </span>
              <Volume2 className="w-[1.1cqw] h-[1.1cqw] text-[#bf5af2] animate-pulse" />
            </div>

            <div className="flex flex-col gap-[0.8cqh] text-[0.9cqw] font-mono text-zinc-300">
              {[
                { name: isZh ? "弦乐声部 (Strings)" : "STRINGS", level: levels[0], active: activeSections[0] },
                { name: isZh ? "木管声部 (Woodwinds)" : "WOODWINDS", level: levels[1], active: activeSections[1] },
                { name: isZh ? "铜管声部 (Brass)" : "BRASS", level: levels[2], active: activeSections[2] },
                { name: isZh ? "敲击声部 (Percussion)" : "PERCUSSION", level: levels[3], active: activeSections[3] }
              ].map((sec, i) => (
                <div key={i} className={`flex items-center justify-between transition-opacity ${sec.active ? "opacity-100" : "opacity-25"}`}>
                  <span className="text-[0.85cqw]">{sec.name}</span>
                  <div className="flex items-center gap-[0.8cqw] flex-1 max-w-[50%] justify-end">
                    <div className="w-[100px] h-[0.5cqh] bg-zinc-800 rounded-full overflow-hidden relative">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-[#bf5af2] rounded-full transition-all duration-500"
                        style={{ width: `${sec.level}%` }}
                      />
                    </div>
                    <span className="text-[0.85cqw] font-bold text-[#bf5af2] min-w-[35px] text-right">{sec.level} dB</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Visual Metaphor Visualization (Bespoke per scene density) */}
        <div className="col-span-7 bg-[#130b1c] border border-[#bf5af2]/15 rounded-2xl p-[2cqw] flex flex-col justify-between relative overflow-hidden">
          {/* Subtle grid background to reflect console interface */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(191,90,242,0.15)_1px,transparent_1px)] [background-size:100%_1.5cqh]" />

          {scene === 1 && (
            // Scene 1 (Ultralight): Elegant conductor's baton trajectory & 1 golden string wave
            <div className="flex-1 flex flex-col justify-center items-center relative">
              <svg className="w-[85%] h-[60%] stroke-[#bf5af2] fill-none" viewBox="0 0 400 150">
                {/* Baton dynamic trajectory */}
                <path 
                  d="M 50 100 C 120 100, 180 20, 200 20 C 220 20, 280 130, 350 100" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  className="opacity-25"
                  strokeDasharray="4,4"
                />
                
                {/* Glowing stroke path following beat */}
                <path 
                  d="M 50 100 C 120 100, 180 20, 200 20 C 220 20, 280 130, 350 100" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                  className="stroke-purple-400 transition-all duration-1000"
                  strokeDasharray="400"
                  strokeDashoffset={400 - (beat + 1) * 133}
                />

                {/* String wave responding underneath */}
                <path 
                  d="M 50 110 Q 150 140, 200 110 T 350 110" 
                  stroke="#eeddf8" 
                  strokeWidth="1.5" 
                  className={beat >= 1 ? "animate-pulse" : "opacity-30"}
                />

                {/* Conductor's baton tip glowing dot */}
                <g 
                  className="transition-all duration-1000"
                  style={{
                    transform: beat === 0 ? "translate(50px, 100px)" : beat === 1 ? "translate(200px, 20px)" : "translate(350px, 100px)"
                  }}
                >
                  <circle cx="0" cy="0" r="12" fill="#bf5af2" className="animate-pulse" />
                  <circle cx="0" cy="0" r="5" fill="#fcf9ff" />
                </g>
              </svg>

              <div className="text-center font-serif text-[1.1cqw] mt-[2cqh]">
                <p className="font-extrabold">{isZh ? "举棒为界，声色共振" : "A single baton raising commands a quiet universe"}</p>
                <p className="text-[0.95cqw] font-sans opacity-60 mt-[0.5cqh] font-mono text-purple-300">
                  {isZh ? "时值零点 · 时相完全锁定" : "T=0.0s · Initial Coherence Peak Locked"}
                </p>
              </div>
            </div>
          )}

          {scene === 2 && (
            // Scene 2 (Light): Symmetrical voice group call & response (Strings vs Brass)
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex items-center gap-[0.5cqw]">
                <Disc className="w-[1.2cqw] h-[1.2cqw] text-[#bf5af2]" />
                {isZh ? "双对位声群呼应拓扑" : "STRINGS VS BRASS CALL-RESPONSE PATH"}
              </div>

              <div className="flex-1 relative flex items-center justify-center">
                <svg className="w-[90%] h-[75%] fill-none stroke-[#bf5af2]" viewBox="0 0 400 150">
                  {/* Violin string stream path (Top) */}
                  <path d="M 30 40 H 180" strokeWidth="2" className="opacity-30" />
                  <path d="M 30 40 H 180" strokeWidth="2.5" strokeDasharray="150" strokeDashoffset={beat >= 1 ? 0 : 150} className="stroke-purple-400 transition-all duration-1000" />
                  
                  {/* Brass horns stream path (Bottom) */}
                  <path d="M 30 110 H 180" strokeWidth="2" className="opacity-30" />
                  <path d="M 30 110 H 180" strokeWidth="2.5" strokeDasharray="150" strokeDashoffset={beat >= 2 ? 0 : 150} className="stroke-purple-400 transition-all duration-1000" />

                  {/* Balanced junction mix */}
                  <path d="M 180 75 Q 260 75, 370 75" strokeWidth="3" className="opacity-20" />
                  <path d="M 180 75 Q 260 75, 370 75" strokeWidth="3.5" strokeDasharray="190" strokeDashoffset={beat >= 2 ? 0 : 190} className="stroke-[#eeddf8] transition-all duration-1000 stroke-dashed" />

                  {/* Nodes */}
                  <g transform="translate(180, 75)" className={beat >= 2 ? "scale-110" : "scale-100 opacity-60"}>
                    <circle cx="0" cy="0" r="8" fill="#bf5af2" />
                    <circle cx="0" cy="0" r="3" fill="#fcf9ff" />
                  </g>

                  {/* Text labels */}
                  <text x="40" y="30" className="text-[7.5px] font-mono fill-current" stroke="none">{isZh ? "弦乐声部 (Cellos / Violins)" : "Strings Section (Cellos/Violins)"}</text>
                  <text x="40" y="125" className="text-[7.5px] font-mono fill-current" stroke="none">{isZh ? "铜管声部 (French Horns)" : "Brass Section (Horns/Trombones)"}</text>
                  <text x="210" y="65" className="text-[8px] font-serif font-black fill-current text-[#eeddf8]" stroke="none">{isZh ? "对位平衡交汇点" : "Aligned Polar Equilibrium"}</text>
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-[1cqw] border-t border-[#bf5af2]/10 pt-[1.2cqh] text-[0.9cqw] font-mono text-purple-300">
                <div>
                  <span className="opacity-60">{isZh ? "弦乐声能反馈:" : "String Feedback:"}</span>
                  <span className="ml-[0.5cqw] font-bold">{beat >= 1 ? "STABLE LOCK" : "WAITING"}</span>
                </div>
                <div>
                  <span className="opacity-60">{isZh ? "铜管声能增益:" : "Brass Gains:"}</span>
                  <span className="ml-[0.5cqw] font-bold">{beat >= 2 ? "HARMONIZED" : "STANDBY"}</span>
                </div>
              </div>
            </div>
          )}

          {scene === 3 && (
            // Scene 3 (Standard): 3 connected stages of a massive crescendo
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex justify-between text-purple-200">
                <span>{isZh ? "三阶声谱大共鸣与调和链" : "THREE-STAGE COHERENT DECREE CHAIN"}</span>
                <span className="animate-pulse">● RES0_GRID STABLE</span>
              </div>

              <div className="grid grid-cols-3 gap-[1.2cqw] my-[2cqh] flex-1">
                {[
                  { name: isZh ? "长笛与木管风织" : "Woodwind Web", unit: "L2 Woodwinds", icon: "💨", desc: isZh ? "快速琶音滑过弦乐区" : "Silky arpeggio droplets", active: true },
                  { name: isZh ? "定音鼓雷鸣砸地" : "Timpani Thunder", unit: "L3 Percussions", icon: "🥁", desc: isZh ? "重力节拍夯实共鸣根基" : "Massive beat anchors gravity", active: beat >= 1 },
                  { name: isZh ? "全乐团谐波共振" : "Orchestra Peak", unit: "L4 Grand Harmony", icon: "✨", desc: isZh ? "数十声部大共鸣编织锁定" : "Hundreds of waves fully locking", active: beat >= 2 }
                ].map((sec, i) => (
                  <div key={i} className={`p-[1.2cqw] rounded-xl border bg-[#1c0f26] flex flex-col justify-between transition-all duration-500 ${
                    sec.active 
                      ? "border-[#bf5af2] shadow-md scale-100" 
                      : "border-zinc-800 opacity-20 scale-95"
                  }`}>
                    <div className="flex justify-between items-start">
                      <span className="text-[1.8cqw]">{sec.icon}</span>
                      <span className="text-[0.8cqw] font-mono font-bold bg-[#bf5af2]/20 text-[#eeddf8] px-[0.5cqw] py-[0.1cqh] rounded">
                        {sec.unit}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-serif font-black text-[1cqw] mt-[1cqh] text-[#eeddf8]">{sec.name}</h4>
                      <p className="text-[0.75cqw] text-zinc-300 mt-[0.5cqh] font-sans leading-tight">{sec.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-[0.8cqw] font-mono opacity-50 flex justify-between">
                <span>{isZh ? "声学谐波全量清算" : "ACOUSTIC COMPILATION PROTOCOLS"}</span>
                <span className="text-[#bf5af2] font-bold">
                  {beat === 0 ? "WOODWIND ACTIVE" : beat === 1 ? "TIMPANI ENGAGED" : "FULL ORCHESTRA COHERENT"}
                </span>
              </div>
            </div>
          )}

          {scene === 4 && (
            // Scene 4 (Dense): 2x2 database alignment and masking adjusters
            <div className="flex-1 flex flex-col justify-between my-[0.5cqh]">
              <div className="text-[1cqw] font-mono opacity-50 flex justify-between">
                <span>{isZh ? "声谱干涉自适应反馈校准版" : "SPECTRAL PHASE INTERFERENCE CONTROL BOARD"}</span>
                <span>{isZh ? "实时自控" : "SELF-BALANCING ACTIVE"}</span>
              </div>

              <div className="grid grid-cols-2 gap-[1.2cqw] my-[1cqh] flex-1">
                {[
                  { title: isZh ? "声场空间三维干涉测绘" : "FIELD PHASE干涉 MAPPING", val: "99.85%", info: isZh ? "消除多路径反射残响" : "Zero multipath echo flutter", icon: Sliders, active: true },
                  { title: isZh ? "声掩蔽响度自适应增益" : "ACOUSTIC MASKING CONTROL", val: "Ducking -12dB", info: isZh ? "保护木管弱颤音细节" : "Protecting fragile woodwind fluters", icon: Volume2, active: beat >= 1 },
                  { title: isZh ? "乐段谐波时值极度锁定" : "TEMPO TIME-GRID ALIGNER", val: "± 0.2ms Accuracy", info: isZh ? "数百件乐器磨合同步" : "Strict millisecond bow syncing", icon: Layers, active: beat >= 1 },
                  { title: isZh ? "交响大和声置信证明" : "HARMONIC CONCORDANCE LEDGER", val: "99.99% Coherent", info: isZh ? "排除跨声部发音杂波" : "Cross-section noises fully scrubbed", icon: Shield, active: beat >= 2 }
                ].map((item, i) => (
                  <div key={i} className={`p-[1.2cqw] rounded-xl border bg-[#11071c] flex justify-between items-center transition-all duration-500 ${
                    item.active ? "border-[#bf5af2] shadow-sm" : "border-zinc-800 opacity-20"
                  }`}>
                    <div className="flex flex-col gap-[0.3cqh]">
                      <span className="text-[0.75cqw] font-mono font-bold opacity-60 text-purple-200 uppercase">{item.title}</span>
                      <span className="text-[1.3cqw] font-serif font-black text-[#eeddf8]">{item.val}</span>
                      <span className="text-[0.75cqw] text-zinc-400 font-sans">{item.info}</span>
                    </div>
                    <item.icon className="w-[2cqw] h-[2cqw] text-[#bf5af2]" />
                  </div>
                ))}
              </div>

              <div className="w-full bg-[#1c0f26] h-[0.4cqh] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#bf5af2] transition-all duration-700" 
                  style={{ width: beat === 0 ? "35%" : beat === 1 ? "70%" : "100%" }}
                />
              </div>
            </div>
          )}

          {scene === 5 && (
            // Scene 5 (Extreme / High Density): Master Orchestra Harmony Dashboard
            <div className="flex-1 flex flex-col justify-between my-[0.2cqh]">
              {/* Top summary cards */}
              <div className="grid grid-cols-4 gap-[0.8cqw]">
                {[
                  { name: isZh ? "演奏总人数" : "TOTAL MUSICIANS", val: "120 " + (isZh ? "人" : "Artists"), color: "text-[#eeddf8]" },
                  { name: isZh ? "和声均衡度" : "HARMONY MATCH", val: beat === 2 ? "Sudden Stop" : "100% Coherent", color: beat === 2 ? "text-red-400" : "text-[#eeddf8]" },
                  { name: isZh ? "多径去噪率" : "REVERB PURITY", val: "99.98%", color: "text-[#eeddf8]" },
                  { name: isZh ? "乐段累计节拍" : "CUMULATIVE BEATS", val: beat >= 2 ? "3,420 " + (isZh ? "小节" : "Measures") : beat >= 1 ? "1,200 " + (isZh ? "小节" : "Measures") : "450" }
                ].map((ind, i) => (
                  <div key={i} className="bg-[#1a0f28] border border-[#bf5af2]/20 rounded-xl p-[0.8cqw] text-center shadow-sm">
                    <span className="text-[0.7cqw] font-mono opacity-50 block text-purple-300 uppercase">{ind.name}</span>
                    <span className={`text-[1.1cqw] font-serif font-black ${ind.color} block mt-[0.2cqh]`}>{ind.val}</span>
                  </div>
                ))}
              </div>

              {/* Central Map & Spectrogram Ticker */}
              <div className="grid grid-cols-12 gap-[1cqw] my-[1cqh] flex-1">
                {/* SVG Seating Chart */}
                <div className="col-span-7 bg-[#1a0f28] border border-[#bf5af2]/20 rounded-xl p-[1.5cqw] relative flex flex-col justify-between shadow-sm">
                  <span className="text-[0.75cqw] font-mono opacity-50 block text-purple-300">{isZh ? "古典管弦乐席位实时声能自检" : "ORCHESTRAL SEATING FIELD ENERGY"}</span>
                  
                  <div className="flex-1 relative flex items-center justify-center">
                    <svg className="w-full h-full fill-none stroke-[#bf5af2]" viewBox="0 0 240 100">
                      {/* Semi-circular seat rows */}
                      <path d="M 20 90 A 100 100 0 0 1 220 90" strokeWidth="1" strokeDasharray="3,6" className="opacity-15" />
                      <path d="M 40 90 A 80 80 0 0 1 200 90" strokeWidth="1.5" strokeDasharray="3,6" className="opacity-20" />
                      <path d="M 60 90 A 60 60 0 0 1 180 90" strokeWidth="2" strokeDasharray="3,6" className="opacity-35" />

                      {/* Conductor core baton point */}
                      <g transform="translate(120, 90)">
                        <circle cx="0" cy="0" r="8" fill={beat === 2 ? "none" : "#bf5af2"} stroke="#bf5af2" strokeWidth="1.5" className={beat !== 2 ? "animate-ping" : ""} />
                        <circle cx="0" cy="0" r="5" fill="#eeddf8" />
                      </g>

                      {/* Seat nodes glowing */}
                      {[
                        // Strings
                        { x: 35, y: 70, s: "Strings", active: levels[0] > 0 },
                        { x: 75, y: 50, s: "Strings", active: levels[0] > 0 },
                        { x: 165, y: 50, s: "Strings", active: levels[0] > 0 },
                        { x: 205, y: 70, s: "Strings", active: levels[0] > 0 },
                        // Woodwinds
                        { x: 95, y: 65, s: "Woodwinds", active: levels[1] > 0 },
                        { x: 145, y: 65, s: "Woodwinds", active: levels[1] > 0 },
                        // Brass
                        { x: 55, y: 40, s: "Brass", active: levels[2] > 0 },
                        { x: 185, y: 40, s: "Brass", active: levels[2] > 0 },
                        // Percussion
                        { x: 120, y: 25, s: "Percussion", active: levels[3] > 0 }
                      ].map((node, idx) => (
                        <circle 
                          key={idx} 
                          cx={node.x} 
                          cy={node.y} 
                          r={node.active ? 4.5 : 2} 
                          fill={node.active ? "#bf5af2" : "#37214d"} 
                          className={node.active ? "animate-pulse" : ""}
                        />
                      ))}
                    </svg>
                  </div>
                </div>

                {/* Right side: Event and phase logs */}
                <div className="col-span-5 bg-[#1a0f28] border border-[#bf5af2]/20 rounded-xl p-[1.5cqw] flex flex-col justify-between shadow-sm font-mono text-[0.75cqw]">
                  <span className="opacity-50 text-[0.7cqw] uppercase border-b border-[#bf5af2]/15 pb-[0.3cqh] block text-purple-300">
                    {isZh ? "和声数据库实时对位印" : "HARMONIC SCORE ENGINE"}
                  </span>
                  
                  <div className="flex-1 flex flex-col justify-center gap-[0.5cqh] my-1 leading-none text-purple-300">
                    <div className="text-zinc-500">&gt; SYS_CONDUCTOR_UP</div>
                    <div className={`transition-opacity ${levels[0] > 0 ? "opacity-100 text-purple-400" : "opacity-15"}`}>
                      &gt; Strings Section locked
                    </div>
                    <div className={`transition-opacity ${levels[2] > 0 ? "opacity-100 text-purple-400" : "opacity-15"}`}>
                      &gt; Brass group aligned
                    </div>
                    <div className={`transition-opacity ${beat === 2 ? "opacity-100 text-red-400 font-extrabold" : "opacity-15"}`}>
                      {beat === 2 ? "> SEC_STOP: DIVINE SILENCE!" : "> Symphonic Mesh synced 100%"}
                    </div>
                  </div>

                  <div className={`text-[0.65cqw] p-[0.5cqw] rounded bg-purple-950/40 text-purple-300 border border-purple-500/20 flex items-center gap-[0.3cqw] ${beat === 2 ? "border-red-500/30 text-red-300 bg-red-950/20" : ""}`}>
                    <Shield className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{beat === 2 ? (isZh ? "休止符落地 全场寂静" : "Grand stop. Reverberating echoes.") : (isZh ? "谐波对位完成 协奏结账" : "spectrogram locked successfully")}</span>
                  </div>
                </div>
              </div>

              {/* Bottom system status */}
              <div className="text-[0.8cqw] font-mono opacity-60 flex justify-between items-center px-1 border-t border-[#bf5af2]/15 pt-[0.6cqh]">
                <span>{isZh ? "超高带宽古典大协奏曲同步系统" : "GRAND COHERENT ORCHESTRAL INTEGRATION PROTOCOL"}</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                  {isZh ? "声场和谐绿灯高悬" : "SYMPHONIC RESONANCE: COMPLETE"}
                </span>
              </div>
            </div>
          )}

          {/* Sub status footer */}
          <div className="border-t border-[#bf5af2]/10 pt-[0.8cqh] flex justify-between text-[0.75cqw] font-mono opacity-50 mt-1">
            <span>{isZh ? "管弦声部大协奏对位谱" : "ORCHESTRAL CORE SPECTRUM SHEET_XI // OK"}</span>
            <span>VERIFICATION CODE: 0x11_SYMPHONIC</span>
          </div>
        </div>
      </div>

      {/* Decorative Slide Footer */}
      <div className="flex justify-between items-center text-[0.8cqw] font-mono opacity-55 border-t border-[#bf5af2]/10 pt-[1.2cqh] z-10">
        <span>© 1788 - 2026 {isZh ? "古典谐波与协奏曲研究院" : "Universal Harmonic & Symphonic Symphony Society"}</span>
        <span>{isZh ? "高能相位自整定管弦乐统合系统" : "Phase-Synchronized Symphonic Architecture"}</span>
      </div>
    </div>
  );
}
