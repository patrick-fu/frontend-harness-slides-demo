import React from "react";
import { 
  Sparkles, Terminal, Layers, Scissors, Volume2, HelpCircle, Skull
} from "lucide-react";

export const getMetadata = (lang) => {
  const isZh = lang === "zh";
  return {
    id: "04",
    tier: "A",
    density: "high",
    name: isZh ? "达达主义声学诗歌" : "Dadaist Phonetic Poetry",
    theme: isZh ? "前卫排版与声学拼贴" : "Avant-garde Typographic Collage",
    densityLabel: isZh ? "前卫拼贴" : "Avant-garde Collage",
    colors: { bg: "bg-[#f2efe9]", ink: "text-zinc-950", panel: "border-zinc-900" },
    typography: { header: "font-sans font-black", body: "font-mono" },
    scenes: [
      {
        id: 1,
        name: isZh ? "混沌标题拼贴" : "Chaos Typography",
        title: isZh ? "混沌标题拼贴" : "Chaos Typography",
        beats: [
          { action: isZh ? "铅字铅印散落" : "Shatter Typefaces" },
          { action: isZh ? "铰碎新闻拼贴" : "Scissors Collage" },
          { action: isZh ? "黑色虚无盖印" : "Stamp Monolith" }
        ]
      },
      {
        id: 2,
        name: isZh ? "左右撕裂对撞" : "Light Scissor Rip",
        title: isZh ? "左右撕裂对撞" : "Light Scissor Rip",
        beats: [
          { action: isZh ? "重装声纳音节" : "Unleash GADJI" },
          { action: isZh ? "打字纸条粘连" : "Paste Translation" },
          { action: isZh ? "锯齿切割对立" : "Shatter Symmetry" }
        ]
      },
      {
        id: 3,
        name: isZh ? "帽子坠落成诗" : "Falling Hat Canons",
        title: isZh ? "帽子坠落成诗" : "Falling Hat Canons",
        beats: [
          { action: isZh ? "偶然轨道滑行" : "Drift Syllables" },
          { action: isZh ? "硬纸色块堆叠" : "Stack Cardboards" },
          { action: isZh ? "偶然降落成诗" : "Land Accidental Verse" }
        ]
      },
      {
        id: 4,
        name: isZh ? "伏尔泰声学矩阵" : "Phonetic Sound Matrix",
        title: isZh ? "伏尔泰声学矩阵" : "Phonetic Sound Matrix",
        beats: [
          { action: isZh ? "点亮前部噪音" : "Step Sequence Alpha" },
          { action: isZh ? "高能格字爆破" : "Step Sequence Beta" },
          { action: isZh ? "马克笔红叉涂抹" : "Annihilate Cell" }
        ]
      },
      {
        id: 5,
        name: isZh ? "达达宣誓海报" : "Extreme Dada Manifesto",
        title: isZh ? "达达宣誓海报" : "Extreme Dada Manifesto",
        beats: [
          { action: isZh ? "铺设底层剪报" : "Pave Collage Base" },
          { action: isZh ? "斜切标语重合" : "Slam Red Slogans" },
          { action: isZh ? "重盖伏尔泰大印" : "Stamp Voltaire Seal" }
        ]
      }
    ]
  };
};

const DADA_TEXTS = {
  zh: {
    s1: {
      title: "解构语言：声学暴动",
      desc: "在苏黎世伏尔泰酒馆，达达主义者砸碎理性的重型铅字，让文字退化为最初的声学噪音，宣告旧秩序句法的死亡。",
      b1: {
        title: "打碎排版：铅字无序散落",
        body: "铅字从理性字盘中彻底解脱。字母不再是帝国金融和陈腐道德的零件，重力让它们随机倾倒、碰撞、碎裂在纸板上。"
      },
      b2: {
        title: "偶然剪报：句法死亡拼贴",
        body: "用剪刀将当天的报纸剪成碎片。闭上眼在袋子里摇匀，按抽出的顺序贴在纸上。不拘一格，让偶然性夺取艺术的最终主权。"
      },
      b3: {
        title: "黑色巨碑：绝对空无降临",
        body: "一块高对比、极度突兀的纯黑几何色块压在画面中央。万物皆空，文字在虚无边缘痛苦折射出沉默与抗议。"
      }
    },
    s2: {
      title: "左右对撞：声纳音节锯齿撕裂",
      desc: "打破平稳中轴对称！一条手绘非对称锯齿撕裂线将屏幕残暴裁切，左侧高能音节与右侧荒诞解释在物理层面决裂撞击。",
      b1: {
        title: "红色声学模板：“卡拉万”爆发",
        body: "‘GADJI BERI BIMBA’——胡戈·巴尔著名的声学歌谣在左侧红色重型铅模下轰然炸开，喉音与唇音直接冲击人类生理感官。"
      },
      b2: {
        title: "打字机纸条：反智理性译释",
        body: "右侧粘上一张撕破的打字机纸。印着貌似严肃实则毫无逻辑联系的学术词条，用伪科学的反讽姿态，嘲弄中产阶级的释读欲。"
      },
      b3: {
        title: "撕裂线的裁决：不妥协分列",
        body: "粗粝、带毛刺的 SVG 锯齿撕裂线劈开视觉。没有妥协的黄金分割，只有绝对的视觉分裂，将和谐秩序撕个粉碎。"
      }
    },
    s3: {
      title: "帽子里的诗：偶然重力滑行",
      desc: "重现胡戈·巴尔著名的‘帽子诗’。碎词卡片在高空轨道旋转飞舞，坠落并堆叠在左侧卡板上，重力就是造诗的作者。",
      b1: {
        title: "字母飘散：偶然轨道的对角漂移",
        body: "诗句被铰成粉碎，在半空无规旋转。斜向虚线轨道是它们唯一的引力线。空气与风掌控着它们下一秒的位置。"
      },
      b2: {
        title: "卡板重置：粗糙层叠接纳",
        body: "左侧层叠放置起几块极高对比、倾斜的硬纸卡。像大理石台面般冰冷地承接下坠落的字符，胶水和墨水正准备将它们定格。"
      },
      b3: {
        title: "偶然成诗：无政府主义诗篇诞生",
        body: "碎片在纸板上堆积落定：‘laulocola’扣着‘偶然’，‘traw’压着‘虚无’。彻底剔除神圣的作者灵感，偶然成就艺术。"
      }
    },
    s4: {
      title: "伏尔泰声学步进音序器",
      desc: "一个 4x4 的多字体 mismatched 拼贴矩阵。不同的格子具有不同样式的边框和红黑背景，在 beat 中像电子音轨般闪烁震颤。",
      b1: {
        title: "噪音脉冲：重音音步闪烁",
        body: "矩阵启动！前部几个格字突兀高亮反色，爆发出尖锐金属撞击声。红黑边框不规则错位咬合，开启声学噪音的工业奏鸣。"
      },
      b2: {
        title: "爆破音轨：音节在振荡中碎裂",
        body: "‘BIM’ 与 ‘ZUM’ 在矩阵中疯狂闪烁。音位被纯粹剥除，不和谐、不规整的多重声学爆破震碎了传统的视听稳态。"
      },
      b3: {
        title: "马克笔涂抹：狂暴红叉抹杀",
        body: "噪音能量达到最强峰值！粗暴的红色 marker 手绘大叉狠狠划过格子，对矩阵进行物理摧毁。反艺术在摧毁中完成重构。"
      }
    },
    s5: {
      title: "达达海报：伏尔泰行会红色大印",
      desc: "达达狂人宣告墙报。打字机拼贴背景上重叠着黑色与红色的巨型色块，‘ART IS DEAD’、‘DADA’ 的巨字彼此冲撞，宣告艺术已死。",
      b1: {
        title: "混沌基底：无政府报章铺设",
        body: "铺满倾斜、大小各异的打字机撕裂纸块。多国语言和破碎符号重叠，展现一个被过量新闻信息垃圾掩埋的喧嚣世界。"
      },
      b2: {
        title: "重铅碾压：反美学巨型色块",
        body: "多块重度倾斜、高对比的黑色与红色色带斜劈在版面上。巨字彼此重叠遮挡，以极度暴力的形态抗议任何精致的中产美学。"
      },
      b3: {
        title: "终极盖印：红色双盾行会大章",
        body: "一双巨型红色 Voltaire 封泥章带着斑驳油墨与旋转缩放狠狠砸在海报正中！反逻辑、反传统的达达海报就此彻底闭环封存。"
      }
    }
  },
  en: {
    s1: {
      title: "DECONSTRUCTING SPEECH",
      desc: "At Cabaret Voltaire, Dadaists shattered lead typefaces, reducing language to pure acoustic noise to rebel against the syntax of old orders.",
      b1: {
        title: "SHATTER TYPE: LEAD SCATTER",
        body: "Liberating lead fonts from intellectual grids. Letters are no longer parts of imperial speeches; gravity lets them scatter, collide, and chip."
      },
      b2: {
        title: "CHANCE COLLAGE: SCISSOR-CUT SYNTAX",
        body: "Cutting the financial newspaper into shreds. Placing them in a bag, shaking, and pasting randomly. Embracing chance to seize artistic agency."
      },
      b3: {
        title: "BLACK MONOLITH: CHASM VOID",
        body: "A heavy high-contrast black box slams onto the center. Word fragments struggle on the margins of a chasm that swallows all interpretation."
      }
    },
    s2: {
      title: "ASYMMETRIC RIP: THE PHONETIC COLLISION",
      desc: "Shuttering balance! A hand-drawn jagged rip line cuts the screen. GADJI BERI stencils collide physically with absurd typewriter translations.",
      b1: {
        title: "RED STENCIL: 'KARAWANE' BLAST",
        body: "'GADJI BERI BIMBA' — Hugo Ball's chant explodes in massive crimson stencils, using raw dental fricatives to bypass logical filters."
      },
      b2: {
        title: "ABSURD GLOSSARY: TYPEWRITER NOTE",
        body: "A torn typewriter strip pasted on the right, listing pseudo-academic translations that mock the bourgeoisie's obsession with decoding."
      },
      b3: {
        title: "JAGGED DIVIDE: JAGGED VERDICT",
        body: "A violent, uneven hand-drawn SVG rip line cuts the layout. No golden ratios; only pure visual division smashing harmony."
      }
    },
    s3: {
      title: "POEM FROM A HAT: GRAVITY CASCADE",
      desc: "Recreating Hugo Ball's accidental method. Word clippings glide along diagonal tracks, landing on tilted cardboard cards.",
      b1: {
        title: "DRIFT SYLLABLES: ACCIDENTAL TRACKS",
        body: "Shattered poem fragments spin in high-altitude diagonal paths. Winds are the editors; falling is their only rhetoric."
      },
      b2: {
        title: "CARDBOARDS: OVERLAYING PLATES",
        body: "Several tilted, misaligned beige cardboard cards overlay in the left, serving as a physical harbor for falling letter pieces."
      },
      b3: {
        title: "LAND VERSES: GRAVITATIONAL MANIFESTO",
        body: "Clippings land: 'laulocola' presses 'Accident', 'traw' covers 'Void'. Author's ego evaporated; gravity delivers the verse."
      }
    },
    s4: {
      title: "CABARET PHONETIC MATRIX",
      desc: "A 4x4 matrix of mismatched typography grids, pulsing and flashing like an industrial step-sequencer as beat advances.",
      b1: {
        title: "PULSE ALPHA: STEP SEQUENCE ALIVE",
        body: "The sequencer ignites! First cells invert color, triggering metallic clicks. Red/black borders bite together in mismatched gears."
      },
      b2: {
        title: "KINETIC BLAST: SHATTERED VOWELS",
        body: "'BIM' and 'ZUM' flash wildly. Semantic context is stripped, releasing dental and guttural explosions that rupture sensory order."
      },
      b3: {
        title: "RED MARKER: CRIMSON ERADICATION",
        body: "Phonetic noise peaks! Red hand-drawn markers 'X' violently slash across multiple cells, proving anti-art thrives in destruction."
      }
    },
    s5: {
      title: "DADA MANIFESTO: VOLTAIRE RED SEAL",
      desc: "A chaotic wall flyer. Typographic newspaper collages are crushed under giant black and red text blocks screaming 'ART IS DEAD'.",
      b1: {
        title: "CHAOS BASE: ANARCHIST PRINTING",
        body: "Paving the base with multi-lingual, torn newspaper segments and chaotic symbols, reflecting a world buried in noise."
      },
      b2: {
        title: "HEAVY LEAD STAMP: ANTI-AESTHETIC BLOCK",
        body: "Tilted heavy black and crimson slogan plates smash onto the layout. Crashing fonts overlap to aggressively defy elite balance."
      },
      b3: {
        title: "SOVEREIGN SEAL: DOUBLE RED GUILD EMBOSS",
        body: "Cleared! A giant double-shield Cabaret Voltaire red ink seal stamps down with rotation and smudge effects, declaring art's death."
      }
    }
  }
};

export default function Style04({ scene, beat, language, onNavigate, isThumbnail }) {
  const isZh = language === "zh";
  const texts = isZh ? DADA_TEXTS.zh : DADA_TEXTS.en;
  const currentSceneText = texts[`s${scene}`] || texts.s1;
  const currentBeatKey = `b${beat + 1}`;
  const currentBeat = currentSceneText[currentBeatKey] || currentSceneText.b1;

  // Scene 1: Premise - Chaos Typographic Collage
  const renderScene1 = () => {
    return (
      <div className="w-full h-full bg-[#f2efe9] text-zinc-950 flex flex-col justify-between p-[5cqw] relative">
        {/* Scattered DADA Background Characters */}
        <div className="absolute left-[8cqw] top-[6cqh] text-[18cqw] font-dada-stencil text-zinc-950/5 select-none pointer-events-none rotate-[-15deg]">D</div>
        <div className="absolute right-[12cqw] top-[4cqh] text-[22cqw] font-dada-typewriter text-[#dc2626]/5 select-none pointer-events-none rotate-[20deg]">A</div>
        <div className="absolute left-[15cqw] bottom-[12cqh] text-[20cqw] font-dada-stencil text-zinc-950/5 select-none pointer-events-none rotate-[35deg]">D</div>
        <div className="absolute right-[6cqw] bottom-[8cqh] text-[24cqw] font-dada-serif text-[#dc2626]/5 select-none pointer-events-none rotate-[-40deg]">A</div>

        {/* Scattered Newspaper Clippings */}
        <div className="absolute left-[38cqw] top-[6cqh] bg-white border border-zinc-950 px-[1.5cqw] py-[0.5cqh] text-[0.9cqw] font-dada-typewriter rotate-[-3deg] opacity-35">ZURICH.1916.VOLTAIRE</div>
        <div className="absolute left-[62cqw] bottom-[18cqh] bg-zinc-950 text-white px-[1.5cqw] py-[0.5cqh] text-[0.85cqw] font-mono rotate-[5deg] opacity-30">NO.ART.NO.SYNTAX</div>

        {/* Top Header */}
        <div className="w-full flex justify-between items-start z-10 shrink-0 border-b-2 border-zinc-950 pb-[1.5cqh]">
          <div className="flex items-center gap-[1.5cqw]">
            <Terminal className="w-[3.5cqw] h-[3.5cqw] text-[#dc2626]" />
            <div>
              <span className="font-dada-typewriter text-[0.8cqw] tracking-widest text-[#dc2626] font-bold uppercase">CABARET VOLTAIRE * BULLETIN</span>
              <h3 className="font-dada-stencil text-[2.2cqw] leading-none uppercase mt-[0.5cqh]">{isZh ? "达达声学诗歌" : "DADAIST PHONETICS"}</h3>
            </div>
          </div>
          <div className="font-dada-typewriter text-[0.9cqw] text-right">
            <span>VOL. I No. 4</span>
            <span className="block text-zinc-500">ZURICH 1916</span>
          </div>
        </div>

        {/* Central Master Block */}
        <div className="flex-1 w-full flex items-center justify-center my-[2cqh] z-10">
          <div className={`w-[54cqw] min-h-[38cqh] bg-zinc-950 border-4 border-[#dc2626] text-white p-[3.5cqw] shadow-[15px_15px_0px_#000] rotate-[-2deg] flex flex-col justify-between relative transition-all duration-700 ${beat >= 2 ? "scale-105 rotate-[-4deg]" : ""}`}>
            {/* Halftone texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] bg-[size:1.5cqw_1.5cqw] opacity-[0.03] pointer-events-none" />
            
            {/* Beat 1 - Cardboard scrap paper on top */}
            {beat >= 1 && (
              <div className="absolute -top-[3cqh] -right-[4cqw] w-[26cqw] bg-[#faf6ee] text-zinc-950 p-[1.5cqw] border-2 border-zinc-950 rotate-[8deg] shadow-2xl animate-paper-peel font-dada-typewriter z-20">
                <div className="border-b border-zinc-300 pb-1 text-[0.7cqw] text-zinc-400 font-bold tracking-widest uppercase">COLLAGE RECORD</div>
                <p className="text-[1cqw] font-black text-red-600 mt-1 uppercase">KARA.WANE</p>
                <p className="text-[0.85cqw] text-zinc-700 leading-tight mt-1 italic">"jolifanto bambbla o falli bambbla..."</p>
              </div>
            )}

            {/* Beat 2 - Massive RED Stamp 'NEANT' over center */}
            {beat >= 2 && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                <div className="border-8 border-double border-[#dc2626] text-[#dc2626] text-[4.5cqw] font-dada-stencil px-[2cqw] py-[1cqh] rotate-[-22deg] bg-[#f2efe9]/90 animate-stamp-slam shadow-[0px_0px_30px_rgba(220,38,38,0.35)] leading-none flex flex-col items-center">
                  <span>NEANT</span>
                  <span className="text-[1.8cqw] mt-0.5 tracking-widest font-dada-typewriter">{isZh ? "虚无宣言" : "VOID DECREE"}</span>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-[1.5cqh] text-left">
              <span className="font-dada-typewriter text-[0.9cqw] text-red-500 tracking-widest font-bold uppercase">{isZh ? "引子" : "PREMISE"} • {currentBeat.title}</span>
              <h1 className="text-[2.8cqw] font-dada-stencil text-white leading-[1.1] uppercase tracking-tight">
                {currentSceneText.title}
              </h1>
              <p className="text-[1.25cqw] leading-[1.5] text-zinc-300 font-dada-typewriter mt-1">
                {currentBeat.body}
              </p>
            </div>

            <div className="flex justify-between items-center border-t border-zinc-800 pt-[1.5cqh] mt-[2cqh] font-dada-typewriter text-[0.8cqw] text-zinc-400">
              <span>ACTE 1. VOLTAIRE</span>
              <span className="text-red-500">{beat >= 1 ? "[ACCIDENTAL SYNTAX LOCKED]" : "[EVALUATING GRAVITY]"}</span>
            </div>
          </div>
        </div>

        {/* Lower Info Line */}
        <div className="w-full flex justify-between items-center border-t-2 border-zinc-950 pt-[1.5cqh] mb-[12cqh] z-10">
          <div className="flex items-center gap-[1.5cqw]">
            <span className="font-dada-typewriter text-[0.9cqw] text-zinc-500 font-bold uppercase">{isZh ? "行动指示:" : "BEAT ACTION:"}</span>
            <span className="font-dada-stencil text-[1.1cqw] bg-[#dc2626] text-white border-2 border-zinc-950 px-[1.5cqw] py-[0.4cqh] rotate-[-1deg] font-black animate-pulse">
              {currentBeat.action}
            </span>
          </div>
          <span className="font-dada-typewriter text-[0.9cqw] text-zinc-500 font-bold uppercase">SCENE 1 / 5</span>
        </div>
      </div>
    );
  };

  // Scene 2: Dual - Light Scissor Rip
  const renderScene2 = () => {
    return (
      <div className="w-full h-full bg-[#f2efe9] text-zinc-950 flex flex-col justify-between p-[5cqw] relative">
        {/* Drawn Asymmetrical Rip Line */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="none">
            <path d="M 960,0 L 980,180 L 930,350 L 970,580 L 920,800 L 965,950 L 945,1080" stroke="#dc2626" strokeWidth="4" strokeDasharray="12 6" fill="none" opacity="0.4" />
          </svg>
        </div>

        {/* Scissor SVG decoration */}
        <div className="absolute left-[47.5cqw] top-[2cqh] rotate-[-45deg] opacity-20 pointer-events-none">
          <Scissors className="w-[4cqw] h-[4cqw] text-zinc-950" />
        </div>

        {/* Top Header */}
        <div className="w-full flex justify-between items-start z-10 shrink-0 border-b-2 border-zinc-950 pb-[1.5cqh]">
          <div className="flex items-center gap-[1.5cqw]">
            <Scissors className="w-[3.5cqw] h-[3.5cqw] text-zinc-950" />
            <div>
              <span className="font-dada-typewriter text-[0.8cqw] tracking-widest text-red-600 font-bold uppercase">SCISSOR CUTOUTS * CONFLICT</span>
              <h3 className="font-dada-stencil text-[2.2cqw] leading-none uppercase mt-[0.5cqh]">{isZh ? "左右非对称锯齿剪切" : "ASYMMETRIC DUAL SECTION"}</h3>
            </div>
          </div>
          <div className="font-dada-typewriter text-[0.9cqw] text-right">
            <span>INDEX.DADA.02</span>
            <span className="block text-zinc-500">ZURICH 1916</span>
          </div>
        </div>

        {/* Central Split Area */}
        <div className="flex-1 w-full relative my-[2cqh] z-10 flex items-center justify-center">
          {/* Left Block: Gaga Acoustic sound block */}
          <div className="absolute left-[4cqw] top-[4cqh] w-[42cqw] min-h-[46cqh] bg-zinc-950 border-4 border-zinc-950 p-[3cqw] flex flex-col justify-between rotate-[-2.5deg] shadow-[15px_15px_0px_#dc2626] relative text-left">
            <div className="absolute inset-0 bg-[#dc2626]/5 pointer-events-none" />
            
            <div className="flex justify-between items-center border-b border-zinc-800 pb-[1cqh]">
              <span className="font-dada-typewriter text-[0.8cqw] text-[#dc2626] font-bold">AKOUSTISCHE SYNTAX</span>
              <span className="font-mono text-[0.7cqw] text-zinc-500">CABARET VOLTAIRE</span>
            </div>
            
            <div className="my-[1.5cqh] flex flex-col gap-1 select-none">
              <span className="font-dada-stencil text-[#dc2626] text-[5cqw] tracking-tight leading-none uppercase rotate-[1deg]">GADJI BERI</span>
              <span className="font-dada-stencil text-white text-[4cqw] tracking-wider leading-none uppercase rotate-[-3deg] ml-[2cqw]">BIMBA</span>
            </div>

            <div className="text-left mt-[1cqh]">
              <h2 className="text-[1.25cqw] font-dada-stencil text-white uppercase mb-[0.5cqh]">{currentSceneText.b1.title}</h2>
              <p className="text-[0.95cqw] font-dada-typewriter text-zinc-300 leading-snug">{currentSceneText.b1.body}</p>
            </div>
          </div>

          {/* Right Block: Absurd Translator strip */}
          <div className={`absolute right-[4cqw] top-[2cqh] w-[40cqw] min-h-[48cqh] bg-[#fcfaf2] border-4 border-zinc-950 p-[3cqw] flex flex-col justify-between rotate-[3deg] shadow-2xl transition-all duration-700 ${beat >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[5cqh] pointer-events-none"}`}>
            {/* Sticky tape on top */}
            <div className="absolute -top-[1.5cqh] left-[10cqw] w-[14cqw] h-[3cqh] bg-[#e6dfc8]/80 border border-zinc-400 rotate-[-1.5deg] shadow-sm flex items-center justify-center font-dada-typewriter text-[0.7cqw] text-zinc-500">GLUED ADHESIVE</div>
            
            <div className="flex justify-between items-center border-b border-zinc-300 pb-[1cqh]">
              <span className="font-dada-typewriter text-[0.8cqw] text-zinc-400 font-bold">TRANSLATION RECORD</span>
              <span className="font-mono text-[0.7cqw] text-zinc-400">DECIBEL PEAK</span>
            </div>

            <div className="my-[2cqh] text-left">
              <span className="font-dada-typewriter text-[1.15cqw] text-zinc-600 block mb-[0.5cqh] uppercase font-bold">{currentBeat.title}</span>
              <p className="text-[0.95cqw] font-dada-typewriter text-zinc-800 leading-snug">{currentBeat.body}</p>
            </div>

            {beat >= 2 && (
              <div className="absolute bottom-[2cqh] right-[2cqw] border-4 border-red-600 text-red-600 px-[1.5cqw] py-[0.5cqh] font-dada-stencil text-[1.4cqw] rotate-[-12deg] bg-white animate-stamp-slam shadow-lg flex flex-col items-center leading-none">
                <span>NO ART!</span>
                <span className="text-[0.8cqw] font-dada-typewriter mt-0.5">{isZh ? "拒绝一切艺术" : "REJECT REASON"}</span>
              </div>
            )}

            <div className="border-t border-zinc-200 pt-[1cqh] font-dada-typewriter text-[0.8cqw] text-zinc-400">
              <span>{isZh ? "✓ 撕裂拼贴锁定" : "✓ SYMMETRY DESTROYED"}</span>
            </div>
          </div>
        </div>

        {/* Lower Info Line */}
        <div className="w-full flex justify-between items-center border-t-2 border-zinc-950 pt-[1.5cqh] mb-[12cqh] z-10">
          <div className="flex items-center gap-[1.5cqw]">
            <span className="font-dada-typewriter text-[0.9cqw] text-zinc-500 font-bold uppercase">{isZh ? "行动指示:" : "BEAT ACTION:"}</span>
            <span className="font-dada-stencil text-[1.1cqw] bg-[#dc2626] text-white border-2 border-zinc-950 px-[1.5cqw] py-[0.4cqh] rotate-[1deg] font-black animate-pulse">
              {currentBeat.action}
            </span>
          </div>
          <span className="font-dada-typewriter text-[0.9cqw] text-zinc-500 font-bold uppercase">SCENE 2 / 5</span>
        </div>
      </div>
    );
  };

  // Scene 3: Process - Standard Falling Hat Canons
  const renderScene3 = () => {
    return (
      <div className="w-full h-full bg-[#f2efe9] text-zinc-950 flex flex-col justify-between p-[5cqw] relative">
        {/* Diagonal Falling Tracks */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 1920 1080">
            <line x1="1400" y1="200" x2="600" y2="700" stroke="#dc2626" strokeWidth="2" strokeDasharray="10 10" opacity="0.3" />
            <line x1="1500" y1="150" x2="700" y2="650" stroke="#dc2626" strokeWidth="2" strokeDasharray="10 10" opacity="0.3" />
            <line x1="1300" y1="250" x2="500" y2="750" stroke="#dc2626" strokeWidth="2" strokeDasharray="10 10" opacity="0.3" />
          </svg>
        </div>

        {/* Top Header */}
        <div className="w-full flex justify-between items-start z-10 shrink-0 border-b-2 border-zinc-950 pb-[1.5cqh]">
          <div className="flex items-center gap-[1.5cqw]">
            <HelpCircle className="w-[3.5cqw] h-[3.5cqw] text-zinc-950" />
            <div>
              <span className="font-dada-typewriter text-[0.8cqw] tracking-widest text-[#dc2626] font-bold uppercase">GRAVITATIONAL VERSES * CHANCE</span>
              <h3 className="font-dada-stencil text-[2.2cqw] leading-none uppercase mt-[0.5cqh]">{isZh ? "帽子里的随机重力诗" : "A POEM FROM A HAT"}</h3>
            </div>
          </div>
          <div className="font-dada-typewriter text-[0.9cqw] text-right">
            <span>GRAVITY.ACCIDENT</span>
            <span className="block text-zinc-500">ZURICH 1916</span>
          </div>
        </div>

        {/* Central Display */}
        <div className="flex-1 w-full relative my-[2cqh] z-10 flex items-center justify-center">
          {/* Left Panel: Collage Cardboard Pile */}
          <div className="absolute left-[4cqw] top-[4cqh] w-[46cqw] min-h-[46cqh] bg-zinc-950 border-4 border-zinc-950 p-[3cqw] flex flex-col justify-between rotate-[-1.5deg] shadow-[15px_15px_0px_#000000] relative text-left">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:1.5cqw_1.5cqw] opacity-[0.04] pointer-events-none" />
            
            <div className="flex justify-between items-center border-b border-zinc-800 pb-[1cqh]">
              <span className="font-dada-typewriter text-[0.8cqw] text-[#dc2626] font-bold">GRAVITATIONAL ACCIDENT</span>
              <span className="font-mono text-[0.7cqw] text-zinc-500">COLLAGE STACK</span>
            </div>

            <div className="flex-1 my-[2cqh] relative flex flex-col justify-center gap-[1cqh] min-h-[16cqh]">
              {beat >= 1 ? (
                <div className="flex flex-col gap-[1.2cqh] animate-paper-peel">
                  <div className="bg-[#faf6ee] text-zinc-950 px-[1.5cqw] py-[0.8cqh] border-2 border-zinc-950 font-dada-stencil text-[1.6cqw] rotate-[-2deg] inline-block w-fit shadow-md uppercase select-none">
                    laulocola <span className="font-dada-typewriter text-[1cqw] text-zinc-500 font-bold">/ {isZh ? "偶然" : "ACCIDENT"}</span>
                  </div>
                  <div className="bg-[#dc2626] text-white px-[1.5cqw] py-[0.8cqh] border-2 border-zinc-950 font-dada-typewriter text-[1.4cqw] rotate-[3deg] inline-block w-fit shadow-md ml-[3cqw] uppercase select-none">
                    glandridi <span className="text-[0.9cqw] opacity-80">/ {isZh ? "空无" : "VOID"}</span>
                  </div>
                  {beat >= 2 && (
                    <div className="bg-[#eab308] text-zinc-950 px-[1.5cqw] py-[0.8cqh] border-2 border-zinc-950 font-dada-stencil text-[1.8cqw] rotate-[-4deg] inline-block w-fit shadow-lg ml-[1cqw] uppercase animate-stamp-slam select-none">
                      shem traw <span className="font-dada-typewriter text-[1cqw] text-red-600 font-bold">/ {isZh ? "法案确立" : "PROTOCOL"}</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-zinc-500 font-dada-typewriter text-[1.3cqw] italic animate-pulse">
                  {isZh ? "等待铅印碎片自轨道滑落..." : "Waiting for word blocks to cascade..."}
                </div>
              )}
            </div>

            <div className="border-t border-zinc-800 pt-[1cqh] font-dada-typewriter text-[0.9cqw] text-zinc-400">
              <span className="font-bold text-white block mb-0.5">{currentBeat.title}</span>
              <span className="text-[0.8cqw] opacity-80 leading-snug block">{currentBeat.body}</span>
            </div>
          </div>

          {/* Right Panel: 3D SVG Top Hat */}
          <div className="absolute right-[6cqw] bottom-[1cqh] w-[20cqw] h-[20cqw] rotate-[-12deg] z-10 select-none">
            <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
              <ellipse cx="100" cy="110" rx="45" ry="12" fill="#dc2626" opacity="0.1" />
              <path d="M 55,55 L 55,115 Q 55,140 100,140 Q 145,140 145,115 L 145,55 Z" fill="#09090b" stroke="#dc2626" strokeWidth="2.5" />
              <ellipse cx="100" cy="55" rx="45" ry="15" fill="#18181b" stroke="#dc2626" strokeWidth="1.5" />
              <ellipse cx="100" cy="55" rx="35" ry="10" fill="#09090b" />
              <path d="M 55,105 Q 100,117 145,105 L 145,115 Q 100,127 55,115 Z" fill="#dc2626" />
              <path d="M 25,115 Q 100,145 175,115 Q 145,105 100,107 Q 55,105 25,115 Z" fill="#18181b" stroke="#dc2626" strokeWidth="1.5" />
              <text x="100" y="58" textAnchor="middle" fill="#dc2626" className="font-dada-typewriter text-[14px] font-black" transform="rotate(3 100 55)">DADA</text>
            </svg>
          </div>

          {/* Floating cards sliding down when beat === 0 */}
          {beat === 0 && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute right-[22cqw] top-[8cqh] bg-[#faf6ee] text-zinc-950 px-[1.2cqw] py-[0.5cqh] border-2 border-zinc-950 font-dada-typewriter text-[0.9cqw] rotate-[15deg] shadow-lg animate-bounce select-none">
                laulocola
              </div>
              <div className="absolute right-[15cqw] top-[18cqh] bg-[#dc2626] text-white px-[1.2cqw] py-[0.5cqh] border-2 border-zinc-950 font-dada-stencil text-[1cqw] rotate-[-12deg] shadow-lg animate-pulse select-none">
                glandridi
              </div>
              <div className="absolute right-[26cqw] top-[26cqh] bg-zinc-900 text-white px-[1.2cqw] py-[0.5cqh] border-2 border-red-600 font-dada-typewriter text-[0.9cqw] rotate-[8deg] shadow-lg select-none">
                shem traw
              </div>
            </div>
          )}
        </div>

        {/* Lower Info Line */}
        <div className="w-full flex justify-between items-center border-t-2 border-zinc-950 pt-[1.5cqh] mb-[12cqh] z-10">
          <div className="flex items-center gap-[1.5cqw]">
            <span className="font-dada-typewriter text-[0.9cqw] text-zinc-500 font-bold uppercase">{isZh ? "行动指示:" : "BEAT ACTION:"}</span>
            <span className="font-dada-stencil text-[1.1cqw] bg-[#dc2626] text-white border-2 border-zinc-950 px-[1.5cqw] py-[0.4cqh] rotate-[-1deg] font-black animate-pulse">
              {currentBeat.action}
            </span>
          </div>
          <span className="font-dada-typewriter text-[0.9cqw] text-zinc-500 font-bold uppercase">SCENE 3 / 5</span>
        </div>
      </div>
    );
  };

  // Scene 4: Matrix - Cabaret Voltaire Phonetic Matrix
  const renderScene4 = () => {
    return (
      <div className="w-full h-full bg-[#f2efe9] text-zinc-950 flex flex-col justify-between p-[5cqw] relative">
        {/* Top Header */}
        <div className="w-full flex justify-between items-start z-10 shrink-0 border-b-2 border-zinc-950 pb-[1.5cqh]">
          <div className="flex items-center gap-[1.5cqw]">
            <Volume2 className="w-[3.5cqw] h-[3.5cqw] text-zinc-950" />
            <div>
              <span className="font-dada-typewriter text-[0.8cqw] tracking-widest text-[#dc2626] font-bold uppercase">PHONETIC STEP-SEQUENCER * MATRIX</span>
              <h3 className="font-dada-stencil text-[2.2cqw] leading-none uppercase mt-[0.5cqh]">{isZh ? "伏尔泰声学步进音序矩阵" : "PHONETIC MATRIX"}</h3>
            </div>
          </div>
          <div className="font-dada-typewriter text-[0.9cqw] text-right">
            <span>MATRIX.SEQUENCER</span>
            <span className="block text-zinc-500">ZURICH 1916</span>
          </div>
        </div>

        {/* Central Display */}
        <div className="flex-1 w-full relative my-[2cqh] z-10 flex items-center justify-center">
          {/* Left Panel: Matrix Info Box */}
          <div className="absolute left-[4cqw] top-[4cqh] w-[38cqw] min-h-[46cqh] bg-zinc-950 border-4 border-[#dc2626] p-[3cqw] flex flex-col justify-between rotate-[-1.5deg] shadow-[15px_15px_0px_#000000] relative text-left">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-[1cqh]">
              <span className="font-dada-typewriter text-[0.8cqw] text-[#dc2626] font-bold">FONETISCHE MATRIX</span>
              <span className="font-mono text-[0.7cqw] text-zinc-500">VOLTAIRE v1.0</span>
            </div>

            <div className="my-[1.5cqh]">
              <span className="font-dada-stencil text-white text-[2.4cqw] leading-none block mb-[0.5cqh] uppercase">{currentSceneText.title}</span>
              <p className="text-[1.2cqw] font-dada-typewriter text-zinc-300 leading-relaxed">{currentSceneText.desc}</p>
            </div>

            <div className="border-t border-zinc-800 pt-[1cqh] font-dada-typewriter text-[0.9cqw] text-zinc-400">
              <span className="font-bold text-white block mb-0.5">{currentBeat.title}</span>
              <span className="text-[0.8cqw] opacity-80 leading-snug block">{currentBeat.body}</span>
            </div>
          </div>

          {/* Right Panel: 4x4 Collage Grid Matrix */}
          <div className="absolute right-[4cqw] top-[4cqh] w-[44cqw] h-[46cqh] grid grid-cols-4 grid-rows-4 gap-[1cqw] relative">
            {Array.from({ length: 16 }).map((_, idx) => {
              const syllables = ["BIM", "BUM", "ZIM", "ZUM", "SABO", "KI", "PLAPLA", "BLAGO", "KARA", "WANE", "GA", "BU", "BU", "JOLI", "FANTO", "! "];
              const word = syllables[idx];
              
              const flashGroup1 = [0, 3, 5, 6, 9, 12, 15];
              const flashGroup2 = [1, 2, 4, 7, 8, 10, 11, 13, 14];
              const isFlashed = (beat === 0 && flashGroup1.includes(idx)) || (beat === 1 && flashGroup2.includes(idx)) || beat === 2;
              const isDestroyed = beat === 2 && [2, 5, 8, 11].includes(idx);

              const cellStyles = [
                { bg: "bg-[#faf6ee]", border: "border-zinc-950 border-2", text: "text-zinc-950 font-dada-typewriter", rot: "rotate-[1deg]" },
                { bg: "bg-zinc-900", border: "border-zinc-800 border-2", text: "text-white font-dada-stencil", rot: "rotate-[-2deg]" },
                { bg: "bg-[#dc2626]", border: "border-zinc-950 border-4", text: "text-white font-dada-stencil", rot: "rotate-[3deg]" },
                { bg: "bg-white", border: "border-[#dc2626] border-2", text: "text-[#dc2626] font-dada-typewriter", rot: "rotate-[-1deg]" },
                { bg: "bg-[#faf6ee]", border: "border-double border-zinc-950 border-4", text: "text-zinc-900 font-dada-serif", rot: "rotate-[2deg]" },
                { bg: "bg-zinc-900", border: "border-dashed border-red-600 border-2", text: "text-red-500 font-dada-typewriter", rot: "rotate-[-3deg]" },
                { bg: "bg-[#eab308]", border: "border-zinc-950 border-2", text: "text-black font-dada-stencil", rot: "rotate-[1deg]" },
                { bg: "bg-white", border: "border-zinc-950 border-2", text: "text-zinc-950 font-dada-typewriter", rot: "rotate-[-2deg]" },
                { bg: "bg-[#faf6ee]", border: "border-zinc-950 border-2", text: "text-zinc-900 font-dada-stencil", rot: "rotate-[3deg]" },
                { bg: "bg-zinc-950", border: "border-red-600 border-2", text: "text-white font-dada-typewriter", rot: "rotate-[-1deg]" },
                { bg: "bg-[#dc2626]", border: "border-zinc-950 border-2", text: "text-white font-dada-stencil", rot: "rotate-[2deg]" },
                { bg: "bg-white", border: "border-[#eab308] border-4", text: "text-black font-dada-serif", rot: "rotate-[-3deg]" },
                { bg: "bg-[#eab308]", border: "border-double border-zinc-950 border-4", text: "text-zinc-900 font-dada-typewriter", rot: "rotate-[1deg]" },
                { bg: "bg-[#faf6ee]", border: "border-zinc-950 border-2", text: "text-[#dc2626] font-dada-stencil", rot: "rotate-[-2deg]" },
                { bg: "bg-zinc-900", border: "border-zinc-950 border-2", text: "text-white font-dada-typewriter", rot: "rotate-[3deg]" },
                { bg: "bg-[#dc2626]", border: "border-double border-white border-4", text: "text-white font-dada-stencil", rot: "rotate-[-1deg]" }
              ];

              const config = cellStyles[idx];

              return (
                <div 
                  key={idx}
                  className={`relative flex items-center justify-center p-[0.5cqw] transition-all duration-300 ${config.bg} ${config.border} ${config.rot} ${
                    isFlashed ? "scale-105 border-red-600 ring-2 ring-red-600/30" : ""
                  }`}
                >
                  <span className={`text-[1.25cqw] font-bold tracking-tighter uppercase ${config.text} select-none`}>
                    {word}
                  </span>

                  {isDestroyed && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-125 z-10">
                      <svg viewBox="0 0 100 100" className="w-[110%] h-[110%] overflow-visible">
                        <line x1="15" y1="15" x2="85" y2="85" stroke="#dc2626" strokeWidth="12" strokeLinecap="round" />
                        <line x1="85" y1="15" x2="15" y2="85" stroke="#dc2626" strokeWidth="12" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Lower Info Line */}
        <div className="w-full flex justify-between items-center border-t-2 border-zinc-950 pt-[1.5cqh] mb-[12cqh] z-10">
          <div className="flex items-center gap-[1.5cqw]">
            <span className="font-dada-typewriter text-[0.9cqw] text-zinc-500 font-bold uppercase">{isZh ? "行动指示:" : "BEAT ACTION:"}</span>
            <span className="font-dada-stencil text-[1.1cqw] bg-[#dc2626] text-white border-2 border-zinc-950 px-[1.5cqw] py-[0.4cqh] rotate-[1deg] font-black animate-pulse">
              {currentBeat.action}
            </span>
          </div>
          <span className="font-dada-typewriter text-[0.9cqw] text-zinc-500 font-bold uppercase">SCENE 4 / 5</span>
        </div>
      </div>
    );
  };

  // Scene 5: Ledger - Extreme Dada Manifesto Flyer
  const renderScene5 = () => {
    return (
      <div className="w-full h-full bg-[#f2efe9] text-zinc-950 flex flex-col justify-between p-[5cqw] relative">
        {/* Layered Newspapers in background */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none overflow-hidden select-none">
          <div className="absolute left-[3cqw] top-[6cqh] w-[35cqw] h-[15cqh] bg-white border border-zinc-400 rotate-[-8deg] p-[1.5cqw] font-dada-typewriter text-[0.8cqw] text-zinc-600 leading-tight">
            DADA DECLARES THE DEATH OF ART. There is no logic in the financial columns. All syntax is empty. Zurich, 1916. Hugo Ball.
          </div>
          <div className="absolute right-[5cqw] top-[10cqh] w-[32cqw] h-[18cqh] bg-[#fdfdfc] border border-zinc-400 rotate-[12deg] p-[1.5cqw] font-dada-typewriter text-[0.8cqw] text-zinc-600 leading-tight">
            "jolifanto bambbla o falli bambbla grossiga m'pfa habla horem" - This phonetic verse cannot be translated, because logic has failed.
          </div>
          <div className="absolute left-[8cqw] bottom-[18cqh] w-[38cqw] h-[12cqh] bg-white border border-zinc-400 rotate-[4deg] p-[1.5cqw] font-dada-typewriter text-[0.8cqw] text-zinc-600 leading-tight">
            Shatter the letterpress. Reconstruct the world of chance. The scissors are our weapons. Anti-art, anti-logic, anti-bourgeois.
          </div>
        </div>

        {/* Top Header */}
        <div className="w-full flex justify-between items-end border-b-2 border-zinc-950 pb-[1.5cqh] z-10 shrink-0">
          <div className="flex flex-col text-left">
            <span className="font-dada-stencil text-[2cqw] text-zinc-950 font-bold uppercase tracking-wide">
              {isZh ? "伏尔泰酒馆前卫宣言" : "VOLTAIRE GUILD MANIFESTO"}
            </span>
            <span className="text-[0.9cqw] text-red-600 font-dada-typewriter tracking-tight uppercase mt-[0.2cqh]">
              {currentSceneText.title}
            </span>
          </div>
          <div className="flex flex-col items-end font-dada-typewriter text-[0.85cqw] text-zinc-500 leading-none">
            <span>No. STAMP-1916</span>
            <span className="block mt-1">ZURICH.DADA</span>
          </div>
        </div>

        {/* Central Complex Content */}
        <div className="flex-1 w-full my-[2cqh] z-10 relative flex items-center justify-center">
          {/* Left Block: Slogans & manifesto cards */}
          <div className="absolute left-[4cqw] top-[4cqh] w-[50cqw] h-[44cqh] flex flex-col justify-between text-left">
            <div className="flex flex-col gap-[1.5cqh]">
              <div className={`bg-[#dc2626] text-white font-dada-stencil text-[2.8cqw] px-[2cqw] py-[0.6cqh] rotate-[-5deg] w-fit shadow-2xl border-2 border-zinc-950 transition-all duration-500 ${beat >= 1 ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"}`}>
                L'ART EST MORT / {isZh ? "艺术已死" : "ART IS DEAD"}
              </div>
              <div className={`bg-zinc-950 text-white font-dada-stencil text-[2.6cqw] px-[2.5cqw] py-[0.6cqh] rotate-[3deg] w-fit shadow-2xl border-2 border-zinc-950 transition-all duration-500 ${beat >= 1 ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"}`}>
                DADA VIVE! / {isZh ? "达达万岁" : "DADA FOREVER"}
              </div>
            </div>

            {/* Manifesto cardboard box */}
            <div className="bg-[#faf6ee] border-4 border-zinc-950 p-[2.5cqw] shadow-[12px_12px_0px_#000] rotate-[-1deg] mt-[2cqh]">
              <div className="flex justify-between items-center border-b border-zinc-300 pb-1 mb-2 font-dada-typewriter">
                <span className="text-[0.8cqw] text-[#dc2626] font-bold uppercase">MANIFESTO PROTOCOL</span>
                <span className="text-[0.75cqw] text-zinc-400">CABARET VOLTAIRE</span>
              </div>
              <h2 className="text-[1.35cqw] font-dada-stencil text-zinc-950 uppercase mb-1 leading-none">{currentBeat.title}</h2>
              <p className="text-[0.98cqw] font-dada-typewriter text-zinc-800 leading-snug">{currentBeat.body}</p>
            </div>
          </div>

          {/* Right Block: Double Guild Seal */}
          <div className="absolute right-[4cqw] top-[2cqh] w-[32cqw] h-[46cqh] flex items-center justify-center select-none">
            {beat >= 2 ? (
              <div 
                key="manifesto-seal"
                className="w-[26cqw] h-[26cqw] border-8 border-double border-red-600 rounded-full flex flex-col items-center justify-center p-2 text-center text-red-600 font-dada-stencil rotate-[-15deg] bg-[#f2efe9]/40 backdrop-blur-[1px] shadow-[0_0_30px_rgba(220,38,38,0.25)] animate-stamp-slam relative"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(220,38,38,0.06) 10%, transparent 10%)",
                  backgroundSize: "8px 8px"
                }}
              >
                <div className="absolute inset-[1.2cqw] border-4 border-dashed border-red-600 rounded-full flex flex-col items-center justify-center">
                  <span className="text-[1.1cqw] tracking-[0.2cqw] uppercase font-bold">CABARET VOLTAIRE</span>
                  <span className="text-[3cqw] my-[0.5cqh] tracking-widest font-black leading-none border-y-4 border-double border-red-600 py-1">DADA</span>
                  <span className="text-[0.9cqw] font-dada-typewriter font-bold">ZURICH * 1916</span>
                </div>
              </div>
            ) : (
              <div className="w-[20cqw] h-[20cqw] border-4 border-dashed border-zinc-400 rounded-full flex items-center justify-center text-zinc-400 font-dada-typewriter text-[1.4cqw] italic rotate-[-10deg]">
                {isZh ? "[等待最终大盖章]" : "[WAITING FOR SEAL]"}
              </div>
            )}
          </div>
        </div>

        {/* Lower Info Line */}
        <div className="w-full flex justify-between items-center border-t-2 border-zinc-950 pt-[1.5cqh] mb-[12cqh] z-10">
          <div className="flex items-center gap-[1.5cqw]">
            <span className="font-dada-typewriter text-[0.9cqw] text-zinc-500 font-bold uppercase">{isZh ? "行动指示:" : "BEAT ACTION:"}</span>
            <span className="font-dada-stencil text-[1.1cqw] bg-[#dc2626] text-white border-2 border-zinc-950 px-[1.5cqw] py-[0.4cqh] rotate-[-1deg] font-black animate-pulse">
              {currentBeat.action}
            </span>
          </div>
          <span className="font-dada-typewriter text-[0.9cqw] text-zinc-500 font-bold uppercase">SCENE 5 / 5</span>
        </div>
      </div>
    );
  };

  // Switch scene dispatcher
  const renderScene = () => {
    switch (scene) {
      case 1:
        return renderScene1();
      case 2:
        return renderScene2();
      case 3:
        return renderScene3();
      case 4:
        return renderScene4();
      case 5:
        return renderScene5();
      default:
        return renderScene1();
    }
  };

  return (
    <div 
      className="w-full h-full relative overflow-hidden select-none bg-[#f2efe9] text-zinc-950"
      style={{ containerType: "size" }}
    >
      {/* Self-contained Style Block for Fonts and Customs Dada animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Impact&display=swap');
        
        .font-dada-typewriter {
          font-family: 'Special Elite', Courier, monospace;
        }
        .font-dada-stencil {
          font-family: 'Impact', 'Arial Black', sans-serif;
          letter-spacing: -0.03em;
        }
        .font-dada-serif {
          font-family: 'Times New Roman', Times, Georgia, serif;
        }

        @keyframes kinetic-punch {
          0% { transform: scale(0.8) rotate(-15deg); opacity: 0; }
          50% { transform: scale(1.15) rotate(5deg); }
          100% { transform: scale(1) rotate(-2deg); opacity: 1; }
        }
        
        @keyframes stamp-slam-anim {
          0% { transform: scale(4.5) rotate(-55deg); opacity: 0; filter: blur(5px); }
          60% { transform: scale(0.95) rotate(-10deg); opacity: 0.95; }
          100% { transform: scale(1) rotate(-15deg); opacity: 1; filter: none; }
        }

        @keyframes marker-x-draw {
          to { stroke-dashoffset: 0; }
        }

        @keyframes paper-peel-anim {
          0% { transform: rotate(-5deg) translateY(2cqh); opacity: 0; }
          100% { transform: rotate(8deg) translateY(0); opacity: 1; }
        }

        .animate-kinetic-punch {
          animation: kinetic-punch 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .animate-stamp-slam {
          animation: stamp-slam-anim 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-paper-peel {
          animation: paper-peel-anim 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      {/* Render the Active Scene */}
      {renderScene()}

      {/* Bespoke Theme Navigation (Scissor-cut Newspaper Strip) */}
      {!isThumbnail && (
        <div className="absolute bottom-[4cqh] left-[15cqw] w-[70cqw] h-[10cqh] bg-[#ffffff] border-2 border-zinc-950 shadow-[10px_10px_0px_#000000] rotate-[-1deg] px-[3cqw] flex items-center justify-between z-30 overflow-hidden select-none">
          {/* Newspaper texture pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:100%_1.5cqh] opacity-20 pointer-events-none" />
          
          <div className="font-dada-typewriter text-[1.4cqw] text-zinc-500 font-bold hidden sm:block tracking-widest rotate-[1deg]">
            {isZh ? "达达声学导航录：" : "DADA PHONETIC NAV:"}
          </div>

          <div className="flex gap-[4cqw] items-center">
            {[1, 2, 3, 4, 5].map((sNum) => {
              const letters = ["D", "A", "D", "A", "!"];
              const letter = letters[sNum - 1];
              const isActive = scene === sNum;
              
              // Unique configurations for each scene selector item
              const styles = [
                { font: "font-dada-stencil text-[4.5cqw] text-zinc-950", rot: "rotate-[-10deg]" },
                { font: "font-dada-typewriter text-[3.8cqw] text-zinc-900 underline", rot: "rotate-[12deg]" },
                { font: "font-dada-serif text-[4.8cqw] text-[#dc2626] font-black", rot: "rotate-[-5deg]" },
                { font: "font-dada-stencil text-[4.2cqw] text-zinc-950 bg-zinc-950 text-white px-2 py-0.5", rot: "rotate-[8deg]" },
                { font: "font-dada-typewriter text-[5cqw] text-[#dc2626] font-extrabold", rot: "rotate-[-15deg]" }
              ];
              
              const config = styles[sNum - 1];

              return (
                <button
                  key={sNum}
                  onClick={() => onNavigate && onNavigate(sNum, 0)}
                  className={`relative focus:outline-none transition-transform hover:scale-115 ${config.rot} ${config.font} flex items-center justify-center`}
                  title={isZh ? `跳转到场景 ${sNum}` : `Navigate to Scene ${sNum}`}
                >
                  <span>{letter}</span>
                  
                  {/* Active indicator: Red hand-drawn Marker "X" */}
                  {isActive && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-125 z-10">
                      <svg viewBox="0 0 100 100" className="w-[110%] h-[110%] overflow-visible">
                        <line 
                          x1="10" y1="10" x2="90" y2="90" 
                          stroke="#dc2626" 
                          strokeWidth="14" 
                          strokeLinecap="round" 
                          strokeDasharray="150"
                          strokeDashoffset="150"
                          style={{ animation: "marker-x-draw 0.15s ease-out forwards" }}
                        />
                        <line 
                          x1="90" y1="10" x2="10" y2="90" 
                          stroke="#dc2626" 
                          strokeWidth="14" 
                          strokeLinecap="round" 
                          strokeDasharray="150"
                          strokeDashoffset="150"
                          style={{ animation: "marker-x-draw 0.15s ease-out 0.08s forwards" }}
                        />
                      </svg>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
