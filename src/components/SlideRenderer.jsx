import React, { useEffect, useState } from "react";
import { 
  RotateCw, HelpCircle, MessageSquare, AlertTriangle, ShieldCheck, 
  Terminal, Play, Cpu, CheckSquare, Layers, Award, Code, Compass,
  Sliders, Navigation, RefreshCw, FileText, CheckCircle2, ChevronRight,
  TrendingUp, Users, HardDrive
} from "lucide-react";
import { VisualMetaphorEngine } from "./VisualMetaphorEngine";

const sectionLabels = {
  opening: "Opening",
  problem: "Problem",
  mechanic: "Mechanic",
  software: "Software",
  hardware: "Hardware",
  playbook: "Playbook",
  closing: "Closing",
};

export function SlideRenderer({ style, scene, beat, isThumbnail = false }) {
  const currentScene = style.scenes.find((s) => s.id === scene) || style.scenes[0];
  const beatData = currentScene.beats[beat] || currentScene.beats[0];
  const layout = currentScene.layout || "split";

  // Map font styles
  const headerFont = style.id === "02" || style.id === "06" ? "font-['Caveat']" :
                     style.id === "07" ? "font-['VT323']" :
                     style.id === "17" ? "font-['Cormorant_Garamond']" :
                     style.id === "01" || style.id === "08" || style.id === "21" ? "font-['Playfair_Display']" : "font-sans font-black";

  const bodyFont = style.id === "03" || style.id === "04" || style.id === "09" || style.id === "10" || 
                    style.id === "11" || style.id === "12" || style.id === "13" || style.id === "14" || 
                    style.id === "15" || style.id === "16" || style.id === "18" || style.id === "19" || 
                    style.id === "20" || style.id === "22" || style.id === "23" || style.id === "24" ? "font-['Fira_Code']" : "font-sans";

  // Arrange grid columns based on layout metadata
  let mainContent;
  if (layout === "reverse") {
    mainContent = (
      <>
        {/* Right Side Copy, Left Side Visual */}
        <div className="col-span-6 h-full flex items-center justify-center relative min-h-[45cqh] order-first">
          <VisualMetaphorEngine style={style} scene={scene} beat={beat} isThumbnail={isThumbnail} />
        </div>
        <div className="col-span-6 flex flex-col justify-center h-full">
          <div className="flex flex-col gap-[1.5cqh]">
            <span className={`text-[1.5cqw] font-bold tracking-widest uppercase opacity-75 select-none ${style.id === "02" ? "text-amber-600" : "text-cyan-500"}`}>
              {beatData.caption}
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
        <div className="grid grid-cols-12 gap-[3cqw] items-end w-full">
          <div className="col-span-7 flex flex-col gap-[1cqh]">
            <span className={`text-[1.5cqw] font-bold tracking-widest uppercase opacity-75 ${style.id === "02" ? "text-amber-600" : "text-cyan-500"}`}>
              {beatData.caption}
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
        <div className="w-full flex items-center justify-center min-h-[30cqh] relative">
          <VisualMetaphorEngine style={style} scene={scene} beat={beat} isThumbnail={isThumbnail} />
        </div>
      </div>
    );
  } else if (layout === "poster") {
    mainContent = (
      <div className="col-span-12 grid grid-cols-12 gap-[4cqw] items-center relative w-full">
        <div className="col-span-7 flex flex-col gap-[1.5cqh]">
          <span className={`text-[1.5cqw] font-bold tracking-widest uppercase opacity-75 ${style.id === "02" ? "text-amber-600" : "text-cyan-500"}`}>
            {beatData.caption}
          </span>
          <h1 className={`text-[4.5cqw] leading-[1.05] font-black tracking-tight ${headerFont}`}>
            {beatData.title}
          </h1>
          <p className={`text-[1.8cqw] leading-[1.4] opacity-85 italic ${bodyFont}`}>
            {beatData.body}
          </p>
        </div>
        <div className="col-span-5 h-full flex items-center justify-center relative min-h-[35cqh]">
          <VisualMetaphorEngine style={style} scene={scene} beat={beat} isThumbnail={isThumbnail} />
        </div>
      </div>
    );
  } else if (layout === "center") {
    mainContent = (
      <div className="col-span-12 flex flex-col items-center text-center gap-[3cqh] justify-center h-full w-full">
        <div className="max-w-[50cqw] flex flex-col gap-[1cqh] items-center">
          <span className={`text-[1.4cqw] font-bold tracking-widest uppercase opacity-75 ${style.id === "02" ? "text-amber-600" : "text-cyan-500"}`}>
            {beatData.caption}
          </span>
          <h1 className={`text-[3.8cqw] leading-[1.1] font-black tracking-tight ${headerFont}`}>
            {beatData.title}
          </h1>
          <p className={`text-[1.5cqw] leading-[1.4] opacity-80 ${bodyFont}`}>
            {beatData.body}
          </p>
        </div>
        <div className="w-full flex items-center justify-center min-h-[30cqh]">
          <VisualMetaphorEngine style={style} scene={scene} beat={beat} isThumbnail={isThumbnail} />
        </div>
      </div>
    );
  } else {
    // Default "split"
    mainContent = (
      <>
        {/* Left Side: Copy */}
        <div className="col-span-6 flex flex-col justify-center h-full">
          <div className="flex flex-col gap-[1.5cqh]">
            <span className={`text-[1.5cqw] font-bold tracking-widest uppercase opacity-75 select-none ${style.id === "02" ? "text-amber-600" : "text-cyan-500"}`}>
              {beatData.caption}
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
        <div className="col-span-6 h-full flex items-center justify-center relative min-h-[45cqh]">
          <VisualMetaphorEngine style={style} scene={scene} beat={beat} isThumbnail={isThumbnail} />
        </div>
      </>
    );
  }

  return (
    <div 
      className={`w-full h-full relative p-[5cqw] flex flex-col justify-between overflow-hidden select-none transition-all duration-500 ${style.colors.bg} ${style.colors.ink}`}
      style={{
        fontFamily: style.typography.body === "Fira Code" ? "Fira Code, monospace" : "Inter, sans-serif"
      }}
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

      {/* Main Slide Layout */}
      <div className="grid grid-cols-12 gap-[4cqw] items-center my-auto z-10 min-h-[55cqh] w-full">
        {mainContent}
      </div>

      {/* Footer Punchline Area */}
      <footer className="flex justify-between items-center z-10 border-t border-current/10 pt-[1.5cqw] select-none">
        <p className={`text-[1.4cqw] font-medium italic opacity-90 tracking-wide flex items-center gap-[0.5cqw] ${bodyFont}`}>
          <span className="inline-block w-[0.8cqw] h-[0.8cqw] rounded-full bg-cyan-500 animate-pulse" />
          {beatData.beatLine}
        </p>
        <span className="text-[1.1cqw] opacity-40 font-mono">
          Scene {scene} of 5 • Beat {beat + 1} of 3
        </span>
      </footer>
    </div>
  );
}
