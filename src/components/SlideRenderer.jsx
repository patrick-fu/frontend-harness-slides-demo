import React from "react";
import { STYLES_REGISTRY } from "./styles";

export function SlideRenderer({ style, scene, beat, isThumbnail = false, language = "en", onNavigate }) {
  // Find the bespoke component in our registry
  const target = STYLES_REGISTRY.find((item) => item.id === style.id);
  if (!target) return null;

  const { Component } = target;

  // 100% Slide Layout, Header, Footer, Background, and Navigation are delegated 
  // to the standalone bespoke component.
  // SlideRenderer remains a 0% pure wrapper shell with absolute scaling support,
  // ensuring zero global templates or visual leakage.
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
        onNavigate={isThumbnail ? undefined : onNavigate}
      />
    </div>
  );
}
