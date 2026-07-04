import React from "react";
import { 
  Sparkles, Terminal, Layers, RefreshCw, EyeOff, Music, MessageSquare
} from "lucide-react";

export const getMetadata = (lang) => ({
  id: "04",
  tier: "A",
  name: lang === "zh" ? "达达主义声学诗歌" : "Dadaist Sound Poetry",
  theme: lang === "zh" ? "前卫排版与无意义发声" : "Avant-garde Typographic Poetry",
  densityLabel: lang === "zh" ? "前卫拼贴" : "Avant-garde Collage",
  colors: { bg: "bg-[#09090b]", ink: "text-[#fafafa]", panel: "border-zinc-800" },
  typography: { header: "font-sans font-black", body: "font-mono" },
  scenes: [
    {
      id: 1,
      title: lang === "zh" ? "达达主义声学诗歌 绪论" : "Introduction to Dadaist Poetry",
      beats: [
        { id: 1, action: lang === "zh" ? "打碎排版字符" : "Scramble Typography", title: lang === "zh" ? "达达声学诗歌与语法解构" : "Dadaist Sound Verse & Syntax Death", body: lang === "zh" ? "在一战后的苏黎世伏尔泰酒馆，达达主义者通过解构传统的理性语法，让文字退化为纯粹的声学噪音，借此反抗空洞陈腐的旧秩序。" : "At Cabaret Voltaire in Zurich, Dadaists deconstructed traditional rational syntax, letting words regress to pure acoustic noise to rebel against old dogmas." },
        { id: 2, action: lang === "zh" ? "剪切字形拼贴" : "Cutout Collage", title: lang === "zh" ? "无意义发声唱段《卡拉万》" : "Nonsense Verse 'Karawane' Chant", body: lang === "zh" ? "胡戈·巴尔身穿金属管道祭司服，吟诵出‘jolifanto bambbla o falli bambbla’的重低音唱段，剥离词义，唯留最纯粹的节奏和音律敲击。" : "Hugo Ball, in metallic sacerdotal tubes, chanted 'jolifanto bambbla o falli bambbla,' stripping semantic meaning to release pure rhythm and phonetic beats." },
        { id: 3, action: lang === "zh" ? "声学爆发释放" : "Acoustic Release", title: lang === "zh" ? "铅字铅印的视觉拼贴" : "Letterpress Typographic Collage", body: lang === "zh" ? "将不同字号、字体的报纸剪报与厚重铅印字模杂乱拼贴。倾斜、重叠、冲撞的排版不仅是视觉的暴动，更是一场无声的声学交响乐。" : "Collaging newspaper cuttings of random sizes and lead fonts. Slanted, overlapping, and colliding blocks form a visual riot and silent acoustic symphony." }
      ]
    },
    {
      id: 2,
      title: lang === "zh" ? "达达主义声学诗歌 解析" : "Symmetric Sound Collage",
      beats: [
        { id: 1, action: lang === "zh" ? "加载声学噪声" : "Load Phonetic Noise", title: lang === "zh" ? "无义音节音位对置" : "Nonsense Phoneme Opposites", body: lang === "zh" ? "将无意义的音位拼贴组合。左侧高能音节‘gaga’与右侧低重音‘bubu’在空间中直接撞击，消除句子成分，纯粹释放喉音与唇音的物理冲击力。" : "Collaging nonsense phonemes in space. The high-pitched 'gaga' collides directly with low 'bubu,' eliminating grammar to unleash raw physical vocal impact." },
        { id: 2, action: lang === "zh" ? "对齐拼贴版面" : "Align Collage Planes", title: lang === "zh" ? "双通道活字铅板撞击" : "Dual-Channel Font Plate Collision", body: lang === "zh" ? "两个截然对立、带有锯齿边缘和倾斜角度的排版色块强力合拢，模拟活字印刷厂的噪声撞击，打破传统排版的稳态中轴对称。" : "Two opposing, jagged-edged typographic blocks slam together, mimicking the noise of a letterpress factory to shatter symmetrical visual order." },
        { id: 3, action: lang === "zh" ? "完成胶水粘合" : "Bond Collage Planes", title: lang === "zh" ? "达达拼贴宣告锁定" : "Dadaist Collage Agreement", body: lang === "zh" ? "用粗砺的橡胶粘合剂和红色油墨，将碎裂的语法残片进行最后的力学缝合，完成不讲妥协的达达主义首版海报拼装。" : "Sealing fragmented syntax structures with raw adhesive and bold red ink, finalizing an uncompromising Dadaist manifesto poster." }
      ]
    },
    {
      id: 3,
      title: lang === "zh" ? "达达主义声学诗歌 演进" : "Collage Assembly Sequence",
      beats: [
        { id: 1, action: lang === "zh" ? "字盘字母随机打乱" : "Scramble Type Drawers", title: lang === "zh" ? "活字字盘的无规解构" : "Typographic Drawer Scrambling", body: lang === "zh" ? "将经典的活字字盘用力打翻，让铅铸的字母颗粒随机在重力下散落、碎裂，从而彻底摆脱语义排版的理性预设轨辙。" : "Overturning traditional font drawers, letting metal cast letters scatter and chip under gravity, liberating fonts from semantic rails." },
        { id: 2, action: lang === "zh" ? "压合胶漆粘接" : "Glue Plaster Plates", title: lang === "zh" ? "撕裂报章的粗砺重叠" : "Torn Newspaper Overlap Layering", body: lang === "zh" ? "撕碎当天的金融报纸，用粘稠的浆糊将油墨字块在深黑胶木板上多层覆盖，制造出具有强烈机械工业质感的撕裂拼贴画。" : "Shredding financial newspapers, pasting ink segments onto matte black plates in dense overlaps to yield a tactile, industrial collage." },
        { id: 3, action: lang === "zh" ? "激发最终声波" : "Trigger Sound Wave", title: lang === "zh" ? "伏尔泰酒馆声学唱段释放" : "Acoustic Noise Evacuation Chant", body: lang === "zh" ? "随着最后一层黑色字块压合，无意义发声能量在酒馆讲台彻底爆发，尖锐刺耳的防空汽笛与音轨重叠，宣告达达主义法案确立。" : "As the final block is pressed, nonsense vocal energy erupts on stage. Screaming air sirens overlap, enacting the Dadaist protocol." }
      ]
    },
    {
      id: 4,
      title: lang === "zh" ? "达达主义声学诗歌 矩阵" : "Anti-Art Structural Matrix",
      beats: [
        { id: 1, action: lang === "zh" ? "噪音艺术重组" : "Noise Art Assembly", title: lang === "zh" ? "声学噪音拼贴与无声合奏" : "Noise Aesthetics & Silent Ensemble", body: lang === "zh" ? "让日常环境噪音与荒诞乐器和鸣。反对精巧修饰，在刺耳、不和谐和多重爆裂音中发掘工业时代的粗砺交响律动。" : "Unifying environmental noises with absurd instruments. Rejecting polish to find beauty in harsh, industrial explosive soundscapes." },
        { id: 2, action: lang === "zh" ? "音位诗歌重组" : "Phonetic Reordering", title: lang === "zh" ? "音节重排与字义剥离" : "Phonetic Verse & Semantics Evacuation", body: lang === "zh" ? "剥除词语中残留的全部实用逻辑。仅将字母视作喉音、齿擦音和爆破音的乐器，在空腔和声中建构无意义的抽象唱段。" : "Evaporating the remaining utility of language. Treating letters purely as woodwinds of dental and guttural phonetic noise." },
        { id: 3, action: lang === "zh" ? "拼贴画重叠" : "Collage Overlays", title: lang === "zh" ? "机械剪报重叠与偶然率" : "Random Scissors Overlapping", body: lang === "zh" ? "用剪刀将诗句剪碎放入袋中，随机抽出贴在纸上。用纯粹的物理偶然性打破资产阶级的理性创作边界与自大逻辑。" : "Cutting poems into shreds, shaking them in a bag, and pasting at random. Utilizing chance to shatter bourgeois creative agency." }
      ]
    },
    {
      id: 5,
      title: lang === "zh" ? "达达主义声学诗歌 汇总" : "Acoustic Collage Telemetry",
      beats: [
        { id: 1, action: lang === "zh" ? "加载字模计量" : "Register Lead Fonts", title: lang === "zh" ? "无理意节分贝遥测总表" : "Nonsense Syllable Decibel Ledger", body: lang === "zh" ? "数据暴动！精确记录伏尔泰酒馆各种无意义字块的发声振幅、铅字模板重合摩擦度以及观众抗议分贝级别的谱图。" : "Data revolt! Documenting vocal amplitude of nonsense syllables, lead font friction indices, and audience protest decibels into a ledger." },
        { id: 2, action: lang === "zh" ? "计算倾斜角变" : "Compute Skew Angles", title: lang === "zh" ? "排版撞击偏折倾斜角度" : "Typographic Plate Collision Skew", body: lang === "zh" ? "计算所有拼贴卡片在重力冲击下的轴向偏折、切变落差和纸张撕裂层数，彻底剔除所有残余的中规中矩对称对齐状态。" : "Computing spatial skews, shear offsets, and tearing layers of all collaged blocks, stripping any trace of boring alignment symmetry." },
        { id: 3, action: lang === "zh" ? "盖上红色达达大印" : "Stamp DADA Vermilion", title: lang === "zh" ? "伏尔泰馆藏红色达达宣示大印" : "Cabaret Voltaire DADA Certificate Seal", body: lang === "zh" ? "拼贴告成！反艺术、反语法、反惯例测试全部通过，加盖醒目的红色达达主义大油印章宣示艺术之死亡。" : "Collage closed! Anti-art and anti-syntax checks passed. Stamping the manifesto with the massive crimson DADA Seal of liberation." }
      ]
    }
  ]
});

export default function Style04({ scene, beat, language, isThumbnail }) {
  const meta = getMetadata(language);
  const currentScene = meta.scenes.find((s) => s.id === scene) || meta.scenes[0];
  const currentBeat = currentScene.beats[beat] || currentScene.beats[0];

  const renderVisual = () => {
    switch (scene) {
      case 1:
        return (
          <div className="relative w-[34cqw] h-[34cqw] flex items-center justify-center animate-paper-peel" key={`s1-${beat}`}>
            {/* Matte black heavy card base with ripped edges */}
            <div className="absolute w-[95%] h-[95%] bg-[#121214] border-4 border-[#dc2626] rounded-sm shadow-2xl flex flex-col justify-between p-[2cqw] relative overflow-hidden">
              
              {/* Halftone/Grid dot background patterns */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:2cqw_2cqw] opacity-5 pointer-events-none" />

              {/* Huge rotated Dada typography blocks */}
              <div className="relative flex-1 flex flex-col items-center justify-center gap-1 z-10 select-none">
                <div className={`bg-white text-black font-black px-4 py-2 text-[3cqw] rotate-[-5deg] tracking-tighter uppercase transition-all duration-700 ${beat >= 1 ? "line-through opacity-30" : "animate-kinetic-punch"}`}>
                  JOLIFANTO
                </div>
                <div className={`bg-[#dc2626] text-white font-black px-5 py-2 text-[3.2cqw] rotate-[3deg] tracking-tight uppercase transition-all duration-700 ${
                  beat >= 1 ? "opacity-100 scale-105" : "opacity-0 scale-75"
                }`}>
                  BAMBBLA
                </div>
                <div className={`bg-[#eab308] text-black font-black px-3 py-1 text-[2.4cqw] rotate-[-2deg] tracking-widest uppercase transition-all duration-700 ${
                  beat >= 2 ? "opacity-100 rotate-[-8deg] scale-110" : "opacity-0 scale-50"
                }`}>
                  DADAISTE
                </div>
              </div>

              {/* Ripped letter stamps */}
              <div className="absolute top-2 left-4 font-black font-mono text-[1.4cqw] text-[#dc2626] opacity-40">ZURICH.1916</div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="relative w-full max-w-[42cqw] grid grid-cols-2 gap-[2cqw] items-center animate-rotate-in" key={`s2-${beat}`}>
            {/* Left Block: Gaga Sound block */}
            <div className={`bg-[#dc2626] text-white p-[2cqw] rounded-sm shadow-2xl flex flex-col justify-between min-h-[28cqh] relative rotate-[-3deg] transition-all duration-500 ${beat >= 0 ? "opacity-100 scale-100" : "opacity-20 scale-95"}`}>
              <span className="font-mono text-[1cqw] text-zinc-300 uppercase block border-b border-white/20 pb-1">DECIBEL PEAK</span>
              <span className="font-black text-[3.5cqw] leading-none tracking-tighter my-auto text-center block">GAGA</span>
              <span className="font-mono text-[0.8cqw] text-zinc-300 block text-right">PHONEME-ALPHA</span>
            </div>

            {/* Right Block: Bubu Sound block */}
            <div className={`bg-white text-black p-[2cqw] rounded-sm shadow-2xl flex flex-col justify-between min-h-[28cqh] relative rotate-[4deg] transition-all duration-1000 ${
              beat >= 1 ? "opacity-100 scale-100" : "opacity-10 scale-90"
            }`}>
              <span className="font-mono text-[1cqw] text-zinc-500 uppercase block border-b border-black/10 pb-1">DECIBEL PEAK</span>
              <span className="font-black text-[3.5cqw] leading-none tracking-tighter my-auto text-center block text-red-600">BUBU</span>
              <span className="font-mono text-[0.8cqw] text-zinc-500 block text-right">PHONEME-BETA</span>

              {beat >= 2 && (
                <div className="absolute inset-0 bg-black/90 flex items-center justify-center rounded-sm">
                  <div className="bg-[#eab308] text-black font-black text-[1.6cqw] px-4 py-2 border-2 border-white rounded rotate-[-12deg] tracking-widest shadow-2xl animate-elastic-pop uppercase">
                    NO ART!
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
            <div className={`border-2 border-[#dc2626] bg-[#121214] p-[1.8cqw] rounded-sm flex flex-col items-center gap-2 w-[12cqw] text-center shadow-2xl relative overflow-hidden transition-all duration-700 ${beat >= 0 ? "opacity-100 scale-100" : "opacity-20 scale-95"}`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">01</div>
              <div className="w-[3cqw] h-[3cqw] rounded-sm bg-zinc-800 border border-zinc-700 flex items-center justify-center font-mono text-zinc-200 text-[1.1cqw] font-bold">TYPE</div>
              <span className="font-black text-[0.95cqw] text-white uppercase">{language === "zh" ? "碎字" : "SCRAMBLE"}</span>
            </div>

            {/* Line 1 */}
            <div className={`flex-1 h-1 bg-[#dc2626]/30 transition-all duration-1000 mx-2 ${
              beat >= 1 ? "bg-[#dc2626] opacity-100 animate-pulse" : "opacity-20"
            }`} />

            {/* Stage 2 */}
            <div className={`border-2 border-white bg-[#121214] p-[1.8cqw] rounded-sm flex flex-col items-center gap-2 w-[12cqw] text-center shadow-2xl relative overflow-hidden transition-all duration-700 ${
              beat >= 1 ? "opacity-100 scale-100" : "opacity-20 scale-95"
            }`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">02</div>
              <div className="w-[3cqw] h-[3cqw] rounded-sm bg-zinc-800 border border-zinc-700 flex items-center justify-center font-mono text-zinc-200 text-[1.1cqw] font-bold">PASTE</div>
              <span className="font-black text-[0.95cqw] text-white uppercase">{language === "zh" ? "拼贴" : "COLLAGE"}</span>
            </div>

            {/* Line 2 */}
            <div className={`flex-1 h-1 bg-[#dc2626]/30 transition-all duration-1000 mx-2 ${
              beat >= 2 ? "bg-white opacity-100 animate-pulse" : "opacity-20"
            }`} />

            {/* Stage 3 */}
            <div className={`border-2 border-[#eab308] bg-[#121214] p-[1.8cqw] rounded-sm flex flex-col items-center gap-2 w-[12cqw] text-center shadow-2xl relative overflow-hidden transition-all duration-700 ${
              beat >= 2 ? "opacity-100 scale-100 shadow-[0_0_20px_rgba(234,179,8,0.25)]" : "opacity-20 scale-95"
            }`}>
              <div className="absolute top-1 right-2 font-mono text-[0.8cqw] opacity-30">03</div>
              <div className="w-[3cqw] h-[3cqw] rounded-sm bg-zinc-800 border border-zinc-700 flex items-center justify-center font-mono text-zinc-200 text-[1.1cqw] font-bold">DADA</div>
              <span className="font-black text-[0.95cqw] text-white uppercase">{language === "zh" ? "声发" : "EVACUATE"}</span>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="grid grid-cols-2 gap-[1.5cqw] w-full max-w-[42cqw] animate-scale-up" key={`s4-${beat}`}>
            {/* Box 1 */}
            <div className={`border border-zinc-800 bg-zinc-950 p-[1.5cqw] rounded-sm relative transition-all duration-500 rotate-[-1deg] ${beat >= 0 ? "opacity-100 scale-100 border-[#dc2626]/40" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-[#dc2626] font-bold">01</div>
              <span className="font-sans font-black text-[1.1cqw] text-white block mb-1 uppercase">{language === "zh" ? "噪音艺术 (Noise)" : "HARSH NOISE ART"}</span>
              <p className="text-[0.9cqw] opacity-85 text-zinc-400 font-mono leading-tight">
                {language === "zh" ? "反对交响乐的精雕细琢。以防空汽笛与金属撞击重建现实韵律。" : "Rejecting symphonic polish. Deploying sirens to reconstruct raw reality."}
              </p>
            </div>

            {/* Box 2 */}
            <div className={`border border-zinc-800 bg-zinc-950 p-[1.5cqw] rounded-sm relative transition-all duration-500 rotate-[1.5deg] ${beat >= 1 ? "opacity-100 scale-100 border-[#eab308]/40" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-[#eab308] font-bold">02</div>
              <span className="font-sans font-black text-[1.1cqw] text-white block mb-1 uppercase">{language === "zh" ? "音位唱唱 (Phoneme)" : "PHONETIC CHANT"}</span>
              <p className="text-[0.9cqw] opacity-85 text-zinc-400 font-mono leading-tight">
                {language === "zh" ? "剥除文本残余的实用逻辑。仅将词汇视作喉音和口哨的组合。" : "Evaporating utility logic. Treating words purely as raw dental friction."}
              </p>
            </div>

            {/* Box 3 */}
            <div className={`border border-zinc-800 bg-zinc-950 p-[1.5cqw] rounded-sm relative transition-all duration-500 rotate-[-2deg] ${beat >= 2 ? "opacity-100 scale-100 border-zinc-500/40" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-zinc-400 font-bold">03</div>
              <span className="font-sans font-black text-[1.1cqw] text-white block mb-1 uppercase">{language === "zh" ? "随机拼贴 (Scissors)" : "CHANCE COLLAGE"}</span>
              <p className="text-[0.9cqw] opacity-85 text-zinc-400 font-mono leading-tight">
                {language === "zh" ? "剪碎报纸装袋随机抽出粘贴。利用偶然性砸碎虚伪的中产法则。" : "Cutting newspaper clippings into bags and pasting randomly under gravity."}
              </p>
            </div>

            {/* Box 4 */}
            <div className={`border border-white/20 bg-zinc-950 p-[1.5cqw] rounded-sm relative transition-all duration-500 rotate-[1deg] ${beat >= 2 ? "opacity-100 scale-100 border-[#dc2626]/50 bg-[#dc2626]/5" : "opacity-20 scale-95"}`}>
              <div className="absolute top-2 right-3 font-mono text-[1cqw] text-[#dc2626] font-bold">04</div>
              <span className="font-sans font-black text-[1.1cqw] text-white block mb-1 uppercase">{language === "zh" ? "反抗宣言 (Anti-Art)" : "MANIFESTO PROTOCOL"}</span>
              <p className="text-[0.9cqw] opacity-85 text-zinc-400 font-mono leading-tight">
                {language === "zh" ? "破坏性排版就是我们的重武器。颠覆惯例，宣告传统艺术之死亡。" : "Violent kinetic design is our weapon. Evacuating elite rules completely."}
              </p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="grid grid-cols-3 gap-[1cqw] w-full max-w-[45cqw] animate-bento-stagger" key={`s5-${beat}`}>
            {/* Bento Block 1: Phonemic Matrix */}
            <div className={`col-span-2 border border-zinc-800 bg-zinc-950 p-[1.2cqw] rounded-sm min-h-[16cqh] flex flex-col justify-between transition-all duration-500 ${beat >= 0 ? "opacity-100 border-[#dc2626]/20" : "opacity-25"}`}>
              <div className="flex justify-between items-center border-b border-zinc-800 pb-1.5 font-sans">
                <span className="text-[0.95cqw] text-white font-black flex items-center gap-1.5 uppercase">
                  <Terminal className="w-3.5 h-3.5 text-[#dc2626]" />
                  {language === "zh" ? "无规活字撞击遥测" : "DADA PHONETIC SPECTRUM"}
                </span>
                <span className="text-[0.8cqw] font-mono text-zinc-500">Voltaire 1916</span>
              </div>
              
              <div className="flex flex-col gap-1 mt-2 font-mono text-[0.85cqw] text-zinc-400">
                <div className="flex justify-between"><span>Syllable 'Bambbla' Max:</span><span className="text-red-500 font-bold">128.4 dB</span></div>
                <div className="flex justify-between"><span>Plate Skew Dispersion:</span><span className="text-[#eab308] font-bold">8.42deg</span></div>
              </div>
            </div>

            {/* Bento Block 2: Collage Stats */}
            <div className={`border border-zinc-800 bg-zinc-950 p-[1.2cqw] rounded-sm min-h-[16cqh] flex flex-col justify-between transition-all duration-500 ${beat >= 1 ? "opacity-100 border-[#eab308]/20" : "opacity-25"}`}>
              <span className="font-sans text-[0.85cqw] text-white font-black block uppercase">{language === "zh" ? "字块重叠层数" : "COLLAGE OVERLAYS"}</span>
              <div className="text-[2.2cqw] font-black text-[#eab308] font-mono leading-none my-1">
                12<span className="text-[1cqw] font-normal font-sans opacity-70">L</span>
              </div>
              <span className="text-[0.8cqw] text-zinc-500 font-mono block">Zero Alignment Left</span>
            </div>

            {/* Bento Block 3: Vermilion Stamp Verification */}
            <div className={`col-span-3 border border-red-700/20 bg-zinc-950 p-[1cqw] rounded-sm flex items-center justify-between transition-all duration-500 ${beat >= 2 ? "opacity-100 border-red-600/40 bg-red-950/10" : "opacity-25"}`}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                <span className="font-sans text-[0.9cqw] text-red-500 font-black uppercase">
                  {language === "zh" ? "✓ 达达拼贴大章：宣告传统语法体系正式死亡" : "✓ PROTOCOL SEALED: SEMANTIC GRAMMAR IS DECLARED DEAD"}
                </span>
              </div>
              <span className="font-mono text-[0.8cqw] text-zinc-500">VOLTAIRE.STAMP.1916</span>
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
      <div className="w-full flex justify-between items-start border-b border-zinc-800 pb-[2cqh] z-10 shrink-0">
        <div className="flex flex-col gap-0.5">
          <span className="font-sans text-[1.1cqw] tracking-widest uppercase text-red-600 font-black">
            {meta.theme}
          </span>
          <span className="text-[1cqw] text-zinc-500 font-mono tracking-tight uppercase">
            {meta.name} • {currentScene.title}
          </span>
        </div>
        <div className="flex items-center gap-2 bg-zinc-950 px-3 py-1.5 rounded-sm border border-zinc-800 shadow-xl">
          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <span className="font-mono text-[0.9cqw] text-red-500 font-bold uppercase">{meta.tier}-TIER AVANT-GARDE</span>
        </div>
      </div>

      {/* Central Split Layout Panel */}
      <div className="flex-1 w-full grid grid-cols-12 gap-[4cqw] items-center my-[3cqh] z-10 overflow-hidden">
        {/* Left Column: Semantic Copy Content Block */}
        <div className="col-span-6 flex flex-col gap-[2cqh] text-left pr-[2cqw] justify-center min-h-[35cqh]">
          <h1 className="text-[3.8cqw] leading-[1.1] font-black tracking-tight font-sans text-white uppercase animate-slide-right" key={`title-${scene}-${beat}`}>
            {currentBeat.title}
          </h1>
          <p className="text-[1.5cqw] leading-[1.5] text-zinc-300 font-mono mt-[1cqh] animate-crossfade" key={`body-${scene}-${beat}`}>
            {currentBeat.body}
          </p>
        </div>

        {/* Right Column: Creative Visual Vector Canvas */}
        <div className="col-span-6 flex items-center justify-center min-h-[40cqh]">
          {renderVisual()}
        </div>
      </div>

      {/* Bottom Technical Progress Ledger Bar */}
      <div className="w-full flex justify-between items-center border-t border-zinc-800 pt-[2cqh] z-10 shrink-0">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.95cqw] text-zinc-500 font-bold uppercase">{language === "zh" ? "实时操作:" : "BEAT ACTION:"}</span>
          <span className="font-mono text-[1cqw] bg-[#dc2626]/20 text-red-500 border border-red-600/30 px-3 py-1 rounded-sm font-black animate-pulse" key={`action-${scene}-${beat}`}>
            {currentBeat.action}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[0.9cqw] text-zinc-500 font-bold uppercase">
            {language === "zh" ? `场景 ${scene} / 5` : `SCENE ${scene} / 5`}
          </span>
        </div>
      </div>
    </div>
  );
}
