import React from "react";
import { STYLES_REGISTRY } from "./styles";

export function SlideRenderer({ style, scene, beat, isThumbnail = false, language = "en", onNavigate }) {
  // Find the bespoke component in our registry
  const target = STYLES_REGISTRY.find((item) => item.id === style.id);
  if (!target) return null;

  const { Component } = target;

  // Determine navigation profile based on style ID
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

  // Pure slide layout completely delegated to the standalone bespoke component.
  // No hardcoded headers, footers, IDs or demo details are rendered here.
  // The slide component is 100% self-contained, self-converged and deliverable.
  return (
    <div 
      lang={language === "zh" ? "zh-Hans" : "en"}
      className="w-full h-full relative overflow-hidden select-none"
    >
      <div data-testid="slide-style-id" className="hidden">{style.id}</div>
      <Component 
        scene={scene} 
        beat={beat} 
        language={language} 
        isThumbnail={isThumbnail} 
      />

      {/* Floating Vertical Dots Navigation (Outside the slide canvas logic, for Design Lab use) */}
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
              >
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

      {/* 3D Picker Wheel Navigation (Outside the slide canvas logic, for Design Lab use) */}
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
                  {language === "zh" ? `场景 ${sNum}` : `SCENE ${sNum}`}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom Inline Tracker Progress Line (Outside the slide canvas logic, for Design Lab use) */}
      {!isThumbnail && onNavigate && navProfile === "tracker" && (
        <div className="absolute bottom-[1.5cqh] left-[5cqw] right-[5cqw] h-[0.5cqh] bg-current/10 rounded-full z-30 cursor-pointer overflow-hidden">
          <div className="absolute inset-0 flex">
            {[1, 2, 3, 4, 5].map((sNum) => (
              <div
                key={sNum}
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(sNum, 0);
                }}
                className="flex-1 h-full hover:bg-current/10 transition-colors cursor-pointer relative"
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
    </div>
  );
}
