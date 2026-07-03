import React from "react";
import { 
  RotateCw, HelpCircle, MessageSquare, AlertTriangle, ShieldCheck, 
  Terminal, Play, Cpu, CheckSquare, Layers, Award, Code, Compass,
  Sliders, Navigation, RefreshCw, FileText, CheckCircle2, ChevronRight,
  TrendingUp, Users, HardDrive
} from "lucide-react";
import { VisualMetaphorEngine } from "./VisualMetaphorEngine";

const getFontClass = (fontName) => {
  switch (fontName) {
    case "Playfair Display":
    case "Cormorant Garamond":
      return "font-serif";
    case "Caveat":
      return "font-handwriting";
    case "Fira Code":
    case "VT323":
      return "font-mono";
    default:
      return "font-sans";
  }
};

function getContentTransitions(styleId, scene) {
  const num = parseInt(styleId, 10);

  // Default values
  let textClass = "";
  let visualClass = "";
  let containerClass = "";

  // 1. Check if the style is mapped to FULL-CONTAINER SLIDERS
  // Mapped styles: 04, 09, 13, 15, 17, 18, 19, 20, 21, 22, 23, 24
  if (num === 4) { // Kinetic Type
    containerClass = "animate-full-slide-left";
  } else if (num === 9) { // Signal Pipeline Flow
    containerClass = "animate-full-slide-left";
  } else if (num === 13) { // Subway Map of Intent (Rotating subway tracks!)
    switch (scene) {
      case 1: containerClass = "animate-full-slide-left"; break;
      case 2: containerClass = "animate-full-slide-up"; break;
      case 3: containerClass = "animate-full-slide-right"; break;
      case 4: containerClass = "animate-full-slide-down"; break;
      default: containerClass = "animate-full-slide-left";
    }
  } else if (num === 15) { // Context Bento (Bento puzzles)
    switch (scene) {
      case 1: containerClass = "animate-full-slide-up"; break;
      case 2: containerClass = "animate-full-slide-left"; break;
      case 3: containerClass = "animate-full-slide-down"; break;
      case 4: containerClass = "animate-full-slide-right"; break;
      default: containerClass = "animate-full-slide-up";
    }
  } else if (num === 17) { // Research Memo
    containerClass = "animate-full-slide-up";
  } else if (num === 18) { // Maintainer Issue Brief
    containerClass = "animate-full-slide-left";
  } else if (num === 19) { // Decision Record (ADR)
    containerClass = "animate-full-slide-up";
  } else if (num === 20) { // Benchmark Grid (Infinite Map Navigation)
    switch (scene) {
      case 1: containerClass = "animate-full-slide-left"; break;
      case 2: containerClass = "animate-full-slide-up"; break;
      case 3: containerClass = "animate-full-slide-right"; break;
      case 4: containerClass = "animate-full-slide-down"; break;
      default: containerClass = "animate-full-slide-left";
    }
  } else if (num === 21) { // Field Notes (Alternating Card Shuffles)
    containerClass = (scene % 2 === 0) ? "animate-full-slide-down" : "animate-full-slide-up";
  } else if (num === 22) { // Operating Manual Manual Flip
    containerClass = "animate-full-slide-left";
  } else if (num === 23) { // Checklist Ledger 横拉账本
    containerClass = (scene % 2 === 0) ? "animate-full-slide-right" : "animate-full-slide-left";
  } else if (num === 24) { // Code Diff Scroll
    containerClass = "animate-full-slide-up";
  } 
  
  // 2. Otherwise apply granular ELEMENT-LEVEL bespoke transitions
  else if (num <= 8) { // Tier A remaining elements (01, 02, 03, 05, 06, 07, 08)
    if (num === 1) { // Minimal Quantum Keynote
      switch (scene) {
        case 1: textClass = "animate-scale-up"; visualClass = "animate-elastic-pop"; break;
        case 2: textClass = "animate-slide-left"; visualClass = "animate-slide-right"; break;
        case 3: textClass = "animate-slide-up"; visualClass = "animate-crossfade"; break;
        case 4: textClass = "animate-diagonal-slide"; visualClass = "animate-scale-up"; break;
        default: textClass = "animate-crossfade"; visualClass = "animate-glitch-entry";
      }
    } else if (num === 2) { // Sketch Board Emoji
      switch (scene) {
        case 1: textClass = "animate-diagonal-slide"; visualClass = "animate-paper-peel"; break;
        case 2: textClass = "animate-paper-peel"; visualClass = "animate-rotate-in"; break;
        case 3: textClass = "animate-scale-up"; visualClass = "animate-diagonal-slide"; break;
        case 4: textClass = "animate-slide-left"; visualClass = "animate-scale-up"; break;
        default: textClass = "animate-crossfade"; visualClass = "animate-paper-peel";
      }
    } else if (num === 3) { // Cyberpunk Dialog
      switch (scene) {
        case 1: textClass = "animate-glitch-entry"; visualClass = "animate-skew-in"; break;
        case 2: textClass = "animate-skew-in"; visualClass = "animate-scale-up"; break;
        case 3: textClass = "animate-slide-up"; visualClass = "animate-glitch-entry"; break;
        case 4: textClass = "animate-crossfade"; visualClass = "animate-slide-down"; break;
        default: textClass = "animate-skew-in"; visualClass = "animate-crossfade";
      }
    } else if (num === 5) { // Polaroid Hero
      switch (scene) {
        case 1: textClass = "animate-rotate-in"; visualClass = "animate-paper-peel"; break;
        case 2: textClass = "animate-paper-peel"; visualClass = "animate-scale-up"; break;
        case 3: textClass = "animate-slide-left"; visualClass = "animate-rotate-in"; break;
        case 4: textClass = "animate-slide-up"; visualClass = "animate-paper-peel"; break;
        default: textClass = "animate-crossfade"; visualClass = "animate-scale-up";
      }
    } else if (num === 6) { // Blackboard Chalk
      switch (scene) {
        case 1: textClass = "animate-diagonal-slide"; visualClass = "animate-crossfade"; break;
        case 2: textClass = "animate-crossfade"; visualClass = "animate-diagonal-slide"; break;
        case 3: textClass = "animate-slide-up"; visualClass = "animate-scale-up"; break;
        case 4: textClass = "animate-scale-up"; visualClass = "animate-slide-up"; break;
        default: textClass = "animate-diagonal-slide"; visualClass = "animate-crossfade";
      }
    } else if (num === 7) { // Arcade Boss
      switch (scene) {
        case 1: textClass = "animate-glitch-entry"; visualClass = "animate-skew-in"; break;
        case 2: textClass = "animate-skew-in"; visualClass = "animate-glitch-entry"; break;
        case 3: textClass = "animate-slide-up"; visualClass = "animate-elastic-pop"; break;
        case 4: textClass = "animate-scale-up"; visualClass = "animate-slide-up"; break;
        default: textClass = "animate-glitch-entry"; visualClass = "animate-skew-in";
      }
    } else { // 08: Spotlight Quote
      switch (scene) {
        case 1: textClass = "animate-crossfade"; visualClass = "animate-scale-up"; break;
        case 2: textClass = "animate-slide-up"; visualClass = "animate-crossfade"; break;
        case 3: textClass = "animate-elastic-pop"; visualClass = "animate-slide-up"; break;
        case 4: textClass = "animate-slide-left"; visualClass = "animate-scale-up"; break;
        default: textClass = "animate-crossfade"; visualClass = "animate-slide-down";
      }
    }
  } else if (num <= 16) { // Tier B remaining elements (10, 11, 12, 14, 16)
    switch (scene) {
      case 1: textClass = "animate-gate"; visualClass = "animate-slide-right"; break;
      case 2: textClass = "animate-slide-left"; visualClass = "animate-gate"; break;
      case 3: textClass = "animate-slide-up"; visualClass = "animate-scale-up"; break;
      case 4: textClass = "animate-scale-up"; visualClass = "animate-slide-down"; break;
      default: textClass = "animate-gate"; visualClass = "animate-crossfade";
    }
  }

  return { textClass, visualClass, containerClass };
}

function getStyleSymbol(styleId) {
  const num = parseInt(styleId, 10);
  if (num === 2) return "✏️";
  if (num === 5) return "📸";
  if (num <= 8) return "✦";
  if (num <= 16) return "//";
  return "§";
}

export function SlideRenderer({ style, scene, beat, isThumbnail = false, language = "en", onNavigate }) {
  const currentScene = style.scenes.find((s) => s.id === scene) || style.scenes[0];
  const beatData = currentScene.beats[beat] || currentScene.beats[0];
  const layout = currentScene.layout || "split";
  const isCjk = language === "zh";

  // Map font styles dynamically matching Design DNA
  const headerFont = getFontClass(style.typography.header);
  const bodyFont = getFontClass(style.typography.body);

  const styleNum = parseInt(style.id, 10);
  let navProfile = "dots"; // default
  if (styleNum <= 8) {
    if ([2, 5, 7].includes(styleNum)) navProfile = "picker";
    else navProfile = "dots";
  } else if (styleNum <= 16) {
    if ([10, 14].includes(styleNum)) navProfile = "picker";
    else if ([12].includes(styleNum)) navProfile = "dots";
    else navProfile = "tracker";
  } else {
    navProfile = "clean";
  }

  const romanNumerals = ["I", "II", "III", "IV", "V"];
  const romanNum = romanNumerals[scene - 1];

  const symbol = getStyleSymbol(style.id);
  const { textClass, visualClass, containerClass } = getContentTransitions(style.id, scene);

  // Arrange grid columns based on layout metadata
  let mainContent;
  if (layout === "reverse") {
    mainContent = (
      <>
        {/* Right Side Copy, Left Side Visual */}
        <div className={`col-span-6 h-full flex items-center justify-center relative min-h-[45cqh] order-first ${visualClass}`}>
          <VisualMetaphorEngine style={style} scene={scene} beat={beat} isThumbnail={isThumbnail} />
        </div>
        <div className={`col-span-6 flex flex-col justify-center h-full ${textClass}`}>
          <div className="flex flex-col gap-[1.5cqh]">
            <span className={`text-[1.5cqw] font-bold tracking-widest uppercase opacity-75 select-none ${style.id === "02" ? "text-amber-600" : "text-cyan-500"}`}>
              {symbol}
            </span>
            <h1 className={`text-[4cqw] leading-[1.1] font-black tracking-tight ${headerFont}`}>
              {beatData.title}
            </h1>
            <p className={`text-[1.6cqw] leading-[1.4] opacity-80 ${bodyFont}`}>
              {beatData.body}
            </p>
          </div>
        </div>
      </>
    );
  } else if (layout === "topboard" || layout === "fullboard" || layout === "stickywall") {
    mainContent = (
      <div className="col-span-12 flex flex-col gap-[3cqh] h-full justify-between w-full">
        <div className={`grid grid-cols-12 gap-[3cqw] items-end w-full ${textClass}`}>
          <div className="col-span-7 flex flex-col gap-[1cqh]">
            <span className={`text-[1.5cqw] font-bold tracking-widest uppercase opacity-75 ${style.id === "02" ? "text-amber-600" : "text-cyan-500"}`}>
              {symbol}
            </span>
            <h1 className={`text-[3.5cqw] leading-[1.1] font-black tracking-tight ${headerFont}`}>
              {beatData.title}
            </h1>
          </div>
          <div className="col-span-5">
            <p className={`text-[1.5cqw] leading-[1.4] opacity-80 ${bodyFont}`}>
              {beatData.body}
            </p>
          </div>
        </div>
        <div className={`w-full flex items-center justify-center min-h-[30cqh] relative ${visualClass}`}>
          <VisualMetaphorEngine style={style} scene={scene} beat={beat} isThumbnail={isThumbnail} />
        </div>
      </div>
    );
  } else if (layout === "poster") {
    mainContent = (
      <div className="col-span-12 grid grid-cols-12 gap-[4cqw] items-center relative w-full">
        <div className={`col-span-7 flex flex-col gap-[1.5cqh] ${textClass}`}>
          <span className={`text-[1.5cqw] font-bold tracking-widest uppercase opacity-75 ${style.id === "02" ? "text-amber-600" : "text-cyan-500"}`}>
            {symbol}
          </span>
          <h1 className={`text-[4.5cqw] leading-[1.05] font-black tracking-tight ${headerFont}`}>
            {beatData.title}
          </h1>
          <p className={`text-[1.8cqw] leading-[1.4] opacity-85 italic ${bodyFont}`}>
            {beatData.body}
          </p>
        </div>
        <div className={`col-span-5 h-full flex items-center justify-center relative min-h-[35cqh] ${visualClass}`}>
          <VisualMetaphorEngine style={style} scene={scene} beat={beat} isThumbnail={isThumbnail} />
        </div>
      </div>
    );
  } else if (layout === "center") {
    mainContent = (
      <div className="col-span-12 flex flex-col items-center text-center gap-[3cqh] justify-center h-full w-full">
        <div className={`max-w-[50cqw] flex flex-col gap-[1cqh] items-center ${textClass}`}>
          <span className={`text-[1.4cqw] font-bold tracking-widest uppercase opacity-75 ${style.id === "02" ? "text-amber-600" : "text-cyan-500"}`}>
            {symbol}
          </span>
          <h1 className={`text-[3.8cqw] leading-[1.1] font-black tracking-tight ${headerFont}`}>
            {beatData.title}
          </h1>
          <p className={`text-[1.5cqw] leading-[1.4] opacity-80 ${bodyFont}`}>
            {beatData.body}
          </p>
        </div>
        <div className={`w-full flex items-center justify-center min-h-[30cqh] ${visualClass}`}>
          <VisualMetaphorEngine style={style} scene={scene} beat={beat} isThumbnail={isThumbnail} />
        </div>
      </div>
    );
  } else {
    // Default "split"
    mainContent = (
      <>
        {/* Left Side: Copy */}
        <div className={`col-span-6 flex flex-col justify-center h-full ${textClass}`}>
          <div className="flex flex-col gap-[1.5cqh]">
            <span className={`text-[1.5cqw] font-bold tracking-widest uppercase opacity-75 select-none ${style.id === "02" ? "text-amber-600" : "text-cyan-500"}`}>
              {symbol}
            </span>
            <h1 className={`text-[4cqw] leading-[1.1] font-black tracking-tight ${headerFont}`}>
              {beatData.title}
            </h1>
            <p className={`text-[1.6cqw] leading-[1.4] opacity-80 ${bodyFont}`}>
              {beatData.body}
            </p>
          </div>
        </div>
        {/* Right Side: Visual Metaphor Canvas */}
        <div className={`col-span-6 h-full flex items-center justify-center relative min-h-[45cqh] ${visualClass}`}>
          <VisualMetaphorEngine style={style} scene={scene} beat={beat} isThumbnail={isThumbnail} />
        </div>
      </>
    );
  }

  return (
    <div 
      lang={isCjk ? "zh-Hans" : "en"}
      className={`w-full h-full relative p-[5cqw] flex flex-col justify-between overflow-hidden select-none ${style.colors.bg} ${style.colors.ink} ${bodyFont}`}
    >
      {/* Background decorations based on style */}
      {style.id === "01" && (
        <div className="absolute inset-0 bg-radial from-transparent to-black/10 pointer-events-none" />
      )}
      {style.id === "02" && (
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{
          backgroundImage: "radial-gradient(#2d2722 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }} />
      )}
      {style.id === "06" && (
        <div className="absolute inset-0 pointer-events-none opacity-[0.1]" style={{
          backgroundImage: "linear-gradient(90deg, #ffffff 1px, transparent 1px), linear-gradient(180deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
      )}
      {style.id === "08" && (
        <div className={`absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(13,148,136,0.15)_0%,transparent_60%)] ${beat >= 1 ? "animate-spotlight" : ""}`} />
      )}
      {style.id === "23" && (
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={{
          backgroundImage: "linear-gradient(#111c16 1px, transparent 1px)",
          backgroundSize: "100% 2.5cqh"
        }} />
      )}

      {/* Floating Vertical Dots Navigation */}
      {!isThumbnail && onNavigate && navProfile === "dots" && (
        <div className="absolute right-[2.5cqw] top-1/2 -translate-y-1/2 flex flex-col gap-[1.5cqh] z-30 group/nav">
          {[1, 2, 3, 4, 5].map((sNum) => {
            const isActive = scene === sNum;
            return (
              <button
                key={sNum}
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(sNum, 0);
                }}
                className="relative flex items-center justify-end focus:outline-none cursor-pointer h-[2.5cqh] w-[2.5cqh]"
                title={style.scenes[sNum - 1]?.title}
              >
                <span className={`absolute right-[3cqw] font-mono text-[1cqw] px-[1cqw] py-[0.5cqh] rounded whitespace-nowrap bg-black/85 text-white border border-white/10 opacity-0 group-hover/nav:hover:opacity-100 transition-opacity pointer-events-none duration-200`}>
                  {style.scenes[sNum - 1]?.title || `Scene ${sNum}`}
                </span>
                <span
                  className={`h-[1cqh] rounded-full transition-all duration-300 ${
                    isActive
                      ? `w-[3cqw] bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]`
                      : `w-[1cqh] bg-current/25 hover:bg-current/60`
                  }`}
                />
              </button>
            );
          })}
        </div>
      )}

      {/* 3D Picker Wheel Navigation */}
      {!isThumbnail && onNavigate && navProfile === "picker" && (
        <div className="absolute bottom-[3cqh] left-1/2 -translate-x-1/2 w-[50cqw] h-[6cqh] overflow-hidden z-30 select-none flex items-center justify-center">
          <div className="flex items-center gap-[2cqw] transition-transform duration-500 ease-out h-full" style={{
            transform: `translateX(${(3 - scene) * 9.5}cqw)`
          }}>
            {[1, 2, 3, 4, 5].map((sNum) => {
              const isActive = scene === sNum;
              const diff = sNum - scene;
              const absDiff = Math.abs(diff);
              
              const scale = 1 - absDiff * 0.15;
              const opacity = 1 - absDiff * 0.45;
              const rotateY = diff * -15;
              
              return (
                <button
                  key={sNum}
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate(sNum, 0);
                  }}
                  style={{
                    transform: `scale(${scale}) rotateY(${rotateY}deg)`,
                    opacity: opacity,
                    transformStyle: "preserve-3d",
                    perspective: "200px"
                  }}
                  className={`px-[1.5cqw] py-[0.5cqh] rounded-lg text-[1.1cqw] font-bold font-mono tracking-wider transition-all duration-500 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? `bg-cyan-500 text-black shadow-[0_4px_12px_rgba(6,182,212,0.3)]`
                      : `bg-current/5 hover:bg-current/15 text-current`
                  }`}
                >
                  {style.scenes[sNum - 1]?.title ? style.scenes[sNum - 1].title.toUpperCase() : `SCENE ${sNum}`}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Slide Topline / Header */}
      <header className="flex justify-between items-center z-10 select-none">
        <div className="flex items-center gap-[1cqw]">
          <span data-testid="slide-style-id" className={`px-[1.2cqw] py-[0.4cqw] text-[1.2cqw] font-bold rounded ${style.id === "02" ? "bg-amber-200 border-2 border-[#2d2722] rotate-[-2deg]" : style.id === "07" ? "bg-green-500 text-black font-mono rotate-[1deg]" : "bg-neutral-800 text-white"}`}>
            {style.id}
          </span>
          <span className={`text-[1.3cqw] font-bold tracking-wider uppercase opacity-80 ${headerFont}`}>
            {style.theme}
          </span>
        </div>
        <div className="text-[1.2cqw] opacity-60 font-mono tracking-widest">
          {style.densityLabel}
        </div>
      </header>

      {/* Main Slide Layout with Dynamic Scene Key for Smooth Inner Transitions (And Optional overall Container Slide) */}
      <div 
        key={`${style.id}-${scene}`}
        className={`grid grid-cols-12 gap-[4cqw] items-center my-auto z-10 min-h-[55cqh] w-full ${containerClass}`}
      >
        {mainContent}
      </div>

      {/* Bottom Inline Tracker Progress Line */}
      {!isThumbnail && onNavigate && navProfile === "tracker" && (
        <div className="w-full h-[0.5cqh] bg-current/10 relative rounded-full mb-[1cqh] z-30 cursor-pointer overflow-hidden">
          <div className="absolute inset-0 flex">
            {[1, 2, 3, 4, 5].map((sNum) => (
              <div
                key={sNum}
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(sNum, 0);
                }}
                className="flex-1 h-full hover:bg-current/10 transition-colors cursor-pointer relative"
                title={style.scenes[sNum - 1]?.title}
              />
            ))}
          </div>
          <div 
            className="absolute top-0 left-0 h-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all duration-500 pointer-events-none"
            style={{
              width: `${((scene - 1) * 3 + beat + 1) / 15 * 100}%`
            }}
          />
          <div className="absolute inset-0 flex justify-between pointer-events-none">
            {[1, 2, 3, 4, 5].map((sNum) => {
              const isPassed = scene > sNum || (scene === sNum && beat >= 0);
              return (
                <div 
                  key={sNum} 
                  className={`w-[0.8cqh] h-[0.8cqh] rounded-full -translate-y-[0.15cqh] transition-colors duration-300 ${
                    isPassed ? "bg-cyan-400" : "bg-neutral-600"
                  }`} 
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Footer Punchline Area */}
      <footer className="flex justify-between items-center z-10 border-t border-current/10 pt-[1.5cqw] select-none">
        <p className={`text-[1.4cqw] font-medium italic opacity-90 tracking-wide flex items-center gap-[0.5cqw] ${bodyFont}`}>
          <span className="inline-block w-[0.8cqw] h-[0.8cqw] rounded-full bg-cyan-500 animate-pulse" />
          {beatData.beatLine}
        </p>
        
        {/* Render elegant classical Roman page numbers only for clean profile */}
        {navProfile === "clean" ? (
          <span className="text-[1.4cqw] opacity-75 font-serif tracking-widest italic">
            — {romanNum} —
          </span>
        ) : null}
      </footer>
    </div>
  );
}
