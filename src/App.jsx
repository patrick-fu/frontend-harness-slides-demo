import React, { useState, useEffect, useCallback } from 'react';
import { stylesData, getNativeDensity } from './data/stylesData.js';
import { getSlideHTML, getSlideData, enrichHTML, getAnimClass, stripPastAnimations } from './utils/slideGenerator.js';

export default function App() {
  // Parse URL Parameters for automation / initial state
  const urlParams = new URLSearchParams(window.location.search);
  const paramStyle = parseInt(urlParams.get('style'));
  const paramDensity = urlParams.get('density'); // 'low', 'med', 'high'
  const paramMode = urlParams.get('mode'); // 'story', 'specs'
  const paramFullscreen = urlParams.get('fullscreen') === 'true';

  // Initial State Calculations
  const initialStyleId = !isNaN(paramStyle) && paramStyle >= 1 && paramStyle <= 24 ? paramStyle : 1;
  const initialDensity = paramDensity && ['low', 'med', 'high'].includes(paramDensity) 
    ? paramDensity 
    : getNativeDensity(initialStyleId);
  const initialMode = paramMode && ['story', 'specs'].includes(paramMode) ? paramMode : 'story';
  const initialView = (!isNaN(paramStyle) || paramDensity || paramMode) ? 'lab' : 'grid';

  // React State Hooks
  const [currentView, setCurrentView] = useState(initialView); // 'grid' | 'board' | 'lab'
  const [theme, setTheme] = useState(() => localStorage.getItem('workbench-theme') || 'system'); // 'system' | 'light' | 'dark'
  const [currentStyleId, setCurrentStyleId] = useState(initialStyleId);
  const [stageMode, setStageMode] = useState(initialMode); // 'story' | 'specs'
  const [stageDensity, setStageDensity] = useState(initialDensity); // 'low' | 'med' | 'high'
  const [currentScene, setCurrentScene] = useState(1); // 1 | 2
  const [currentBeat, setCurrentBeat] = useState(1); // 1 | 2 | 3
  const [isFullscreen, setIsFullscreen] = useState(paramFullscreen);

  // Active Style Object
  const activeStyle = stylesData.find(s => s.id === currentStyleId) || stylesData[0];

  // Theme Switcher Effect
  useEffect(() => {
    localStorage.setItem('workbench-theme', theme);
    const htmlEl = document.documentElement;
    
    const applyTheme = () => {
      if (theme === 'dark') {
        htmlEl.classList.add('dark');
      } else if (theme === 'light') {
        htmlEl.classList.remove('dark');
      } else {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (systemPrefersDark) {
          htmlEl.classList.add('dark');
        } else {
          htmlEl.classList.remove('dark');
        }
      }
    };

    applyTheme();

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => applyTheme();
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, [theme]);

  // Load Style to Lab Helper
  const loadStyleToLab = useCallback((styleId) => {
    setCurrentStyleId(styleId);
    // Auto-set density to native if not overridden by URL param
    const params = new URLSearchParams(window.location.search);
    const densityParam = params.get('density');
    if (!densityParam) {
      setStageDensity(getNativeDensity(styleId));
    }
  }, []);

  // Beat Navigation Logic
  const advanceBeat = useCallback(() => {
    if (currentBeat < 3) {
      setCurrentBeat(currentBeat + 1);
    } else if (currentScene === 1) {
      setCurrentScene(2);
      setCurrentBeat(1);
    } else {
      setCurrentScene(1);
      setCurrentBeat(1);
    }
  }, [currentBeat, currentScene]);

  const reverseBeat = useCallback(() => {
    if (currentBeat > 1) {
      setCurrentBeat(currentBeat - 1);
    } else if (currentScene === 2) {
      setCurrentScene(1);
      setCurrentBeat(3);
    } else {
      setCurrentScene(2);
      setCurrentBeat(3);
    }
  }, [currentBeat, currentScene]);

  // Keyboard Navigation Effect
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentView === 'lab') {
        if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          advanceBeat();
        } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
          e.preventDefault();
          reverseBeat();
        } else if (e.key === 'ArrowDown' || e.key === 'PageDown') {
          e.preventDefault();
          setCurrentStyleId(prevId => {
            const nextId = prevId + 1;
            const finalId = nextId > 24 ? 1 : nextId;
            setStageDensity(getNativeDensity(finalId));
            return finalId;
          });
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
          e.preventDefault();
          setCurrentStyleId(prevId => {
            const prev = prevId - 1;
            const finalId = prev < 1 ? 24 : prev;
            setStageDensity(getNativeDensity(finalId));
            return finalId;
          });
        } else if (e.key === 'Escape') {
          setIsFullscreen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentView, advanceBeat, reverseBeat]);

  // Handle Fullscreen Toggle
  const toggleFullscreen = () => {
    setIsFullscreen(prev => !prev);
  };

  // Render Slide Stage Component
  const SlideStage = ({ style, mode, density, scene, beat, onClick }) => {
    const slideData = getSlideData(style, mode, density, scene, beat);
    
    if (slideData.isSpecs) {
      return (
        <div 
          className="w-full h-full animate-fade-up"
          onClick={onClick}
          dangerouslySetInnerHTML={{ __html: slideData.html }}
        />
      );
    }

    const {
      fontClass,
      canvasBg,
      inkColor,
      accentColor,
      mutedColor,
      sceneContent,
      densityMeta,
      headerAnim,
      footerAnim,
      sceneTitle,
      sceneSubtitle,
      beatBadge
    } = slideData;

    // React-stable Key for Header and Footer to prevent re-triggering animations on beat change
    // This key only changes when style or scene changes, keeping DOM node stable during beat changes!
    const stableKey = `${style.id}-${scene}`;

    // Render Content Area based on Density
    let contentElement = null;

    if (density === 'low') {
      const b1 = sceneContent?.low?.beat1;
      const b2 = sceneContent?.low?.beat2;
      const b3 = sceneContent?.low?.beat3;

      // Render b1 card
      let b1HtmlElement = null;
      if (b1) {
        const vHtml1 = enrichHTML(style.id, b1.visualHtml || '', beat, 1);
        const subdescHtml1 = b1.subdesc ? `<p class="text-[0.9cqw] font-light mt-[0.3cqw]" style="color: ${mutedColor}">${b1.subdesc}</p>` : '';
        const punchlineHtml1 = b1.punchline ? `<p class="text-[1cqw] font-semibold mt-[0.6cqw] px-[1cqw] py-[0.4cqw] rounded-lg text-center" style="color: ${inkColor}; background-color: ${accentColor}22; border: 1px solid ${accentColor}44">${b1.punchline}</p>` : '';
        
        const dimClass = (beat === 1) ? 'opacity-100 scale-100' : 'opacity-45 scale-95 filter-grayscale-[30%] blur-[0.3px]';
        const itemAnim = getAnimClass(style.id, 1);

        b1HtmlElement = (
          <div 
            key="beat-card-1"
            className={`flex-1 flex flex-col items-center text-center p-[1.5cqw] rounded-xl border border-transparent transition-all duration-700 ${dimClass} ${itemAnim}`}
          >
            <div className="h-[8cqw] flex items-center justify-center mb-[1cqw] w-full" dangerouslySetInnerHTML={{ __html: vHtml1 }} />
            <h3 className="text-[1.4cqw] font-bold tracking-tight mb-[0.4cqw]" style={{ color: inkColor }}>{b1.title}</h3>
            <p className="text-[1cqw] font-light max-w-[25cqw] leading-relaxed" style={{ color: mutedColor }}>{b1.desc}</p>
            {b1.subdesc && <div dangerouslySetInnerHTML={{ __html: subdescHtml1 }} />}
            {b1.punchline && <div dangerouslySetInnerHTML={{ __html: punchlineHtml1 }} />}
          </div>
        );
      }

      // Render b2 card
      let b2HtmlElement = null;
      let arrow1Element = null;
      if (b2) {
        const vHtml2 = enrichHTML(style.id, b2.visualHtml || '', beat, 2);
        const subdescHtml2 = b2.subdesc ? `<p class="text-[0.9cqw] font-light mt-[0.3cqw]" style="color: ${mutedColor}">${b2.subdesc}</p>` : '';
        const punchlineHtml2 = b2.punchline ? `<p class="text-[1cqw] font-semibold mt-[0.6cqw] px-[1cqw] py-[0.4cqw] rounded-lg text-center" style="color: ${inkColor}; background-color: ${accentColor}22; border: 1px solid ${accentColor}44">${b2.punchline}</p>` : '';
        
        let stateClass = '';
        if (beat === 1) {
          stateClass = 'opacity-0 scale-75 w-0 h-0 overflow-hidden pointer-events-none border-0 m-0 p-0';
        } else if (beat === 2) {
          stateClass = 'opacity-100 scale-100';
        } else {
          stateClass = 'opacity-45 scale-95 filter-grayscale-[30%] blur-[0.3px]';
        }
        const itemAnim = getAnimClass(style.id, 2);

        b2HtmlElement = (
          <div 
            key="beat-card-2"
            className={`flex-1 flex flex-col items-center text-center p-[1.5cqw] rounded-xl border border-transparent transition-all duration-700 ${stateClass} ${itemAnim}`}
          >
            <div className="h-[8cqw] flex items-center justify-center mb-[1cqw] w-full" dangerouslySetInnerHTML={{ __html: vHtml2 }} />
            <h3 className="text-[1.4cqw] font-bold tracking-tight mb-[0.4cqw]" style={{ color: inkColor }}>{b2.title}</h3>
            <p className="text-[1cqw] font-light max-w-[25cqw] leading-relaxed" style={{ color: mutedColor }}>{b2.desc}</p>
            {b2.subdesc && <div dangerouslySetInnerHTML={{ __html: subdescHtml2 }} />}
            {b2.punchline && <div dangerouslySetInnerHTML={{ __html: punchlineHtml2 }} />}
          </div>
        );

        const arrowState = (beat >= 2) ? 'opacity-30 scale-100 w-auto px-[1cqw]' : 'opacity-0 scale-50 w-0 h-0 overflow-hidden m-0 p-0';
        arrow1Element = (
          <div 
            key="arrow-1"
            className={`text-[2cqw] text-current shrink-0 self-center animate-match-1 transition-all duration-700 ${arrowState}`}
          >
            →
          </div>
        );
      }

      // Render b3 card
      let b3HtmlElement = null;
      let arrow2Element = null;
      if (b3) {
        const vHtml3 = enrichHTML(style.id, b3.visualHtml || '', beat, 3);
        const subdescHtml3 = b3.subdesc ? `<p class="text-[0.9cqw] font-light mt-[0.3cqw]" style="color: ${mutedColor}">${b3.subdesc}</p>` : '';
        const punchlineHtml3 = b3.punchline ? `<p class="text-[1cqw] font-semibold mt-[0.6cqw] px-[1cqw] py-[0.4cqw] rounded-lg text-center" style="color: ${inkColor}; background-color: ${accentColor}22; border: 1px solid ${accentColor}44">${b3.punchline}</p>` : '';
        
        let stateClass = '';
        if (beat < 3) {
          stateClass = 'opacity-0 scale-75 w-0 h-0 overflow-hidden pointer-events-none border-0 m-0 p-0';
        } else {
          stateClass = 'opacity-100 scale-100';
        }
        const itemAnim = getAnimClass(style.id, 3);

        b3HtmlElement = (
          <div 
            key="beat-card-3"
            className={`flex-1 flex flex-col items-center text-center p-[1.5cqw] rounded-xl border border-transparent transition-all duration-700 ${stateClass} ${itemAnim}`}
          >
            <div className="h-[8cqw] flex items-center justify-center mb-[1cqw] w-full" dangerouslySetInnerHTML={{ __html: vHtml3 }} />
            <h3 className="text-[1.4cqw] font-bold tracking-tight mb-[0.4cqw]" style={{ color: inkColor }}>{b3.title}</h3>
            <p className="text-[1cqw] font-light max-w-[25cqw] leading-relaxed" style={{ color: mutedColor }}>{b3.desc}</p>
            {b3.subdesc && <div dangerouslySetInnerHTML={{ __html: subdescHtml3 }} />}
            {b3.punchline && <div dangerouslySetInnerHTML={{ __html: punchlineHtml3 }} />}
          </div>
        );

        const arrowState = (beat >= 3) ? 'opacity-30 scale-100 w-auto px-[1cqw]' : 'opacity-0 scale-50 w-0 h-0 overflow-hidden m-0 p-0';
        arrow2Element = (
          <div 
            key="arrow-2"
            className={`text-[2cqw] text-current shrink-0 self-center animate-match-2 transition-all duration-700 ${arrowState}`}
          >
            →
          </div>
        );
      }

      contentElement = (
        <div className="flex items-stretch justify-center gap-[1cqw] max-w-[62cqw] mx-auto w-full transition-all duration-500">
          {b1HtmlElement}
          {arrow1Element}
          {b2HtmlElement}
          {arrow2Element}
          {b3HtmlElement}
        </div>
      );
    } else if (density === 'med') {
      const flowHtml = sceneContent?.med?.[`beat${beat}`];
      if (flowHtml) {
        const filteredHtml = stripPastAnimations(flowHtml, beat, style.id);
        contentElement = (
          <div 
            key={`med-content-${style.id}-${scene}-${beat}`}
            className="w-full h-full"
            dangerouslySetInnerHTML={{ __html: filteredHtml }}
          />
        );
      }
    } else if (density === 'high') {
      const bentoHtml = sceneContent?.high?.[`beat${beat}`];
      if (bentoHtml) {
        const filteredHtml = stripPastAnimations(bentoHtml, beat, style.id);
        contentElement = (
          <div 
            key={`high-content-${style.id}-${scene}-${beat}`}
            className="w-full h-full"
            dangerouslySetInnerHTML={{ __html: filteredHtml }}
          />
        );
      }
    }

    if (!contentElement) {
      return (
        <div className="w-full h-full p-[5cqw] flex flex-col justify-center items-center select-none" style={{ backgroundColor: canvasBg, color: inkColor }}>
          <h2 className="text-[2.5cqw] font-bold">{style.topic}</h2>
          <p className="text-[1.2cqw] mt-[1cqw]" style={{ color: mutedColor }}>Content pending for Style #{style.id} · Scene {scene} · Beat {beat}</p>
        </div>
      );
    }

    return (
      <div 
        className={`w-full h-full p-[5cqw] flex flex-col justify-between select-none ${fontClass}`} 
        style={{ backgroundColor: canvasBg, color: inkColor }}
        onClick={onClick}
      >
        <div className="flex-1 flex flex-col justify-center space-y-[2cqw]">
          {/* Header has stable key to prevent re-triggering animations on beat changes */}
          <div key={stableKey} className={`text-center space-y-[0.5cqw] ${headerAnim}`}>
            <h2 className="text-[2.5cqw] font-bold leading-tight" style={{ color: inkColor }}>{sceneTitle}</h2>
            <p className="text-[1.1cqw]" style={{ color: mutedColor }}>{sceneSubtitle}</p>
            <div dangerouslySetInnerHTML={{ __html: beatBadge }} />
          </div>
          {contentElement}
        </div>
        {/* Footer has stable key to prevent re-triggering animations on beat changes */}
        <div key={`footer-${stableKey}`} className={`flex justify-between items-center text-[1cqw] font-mono ${footerAnim}`} style={{ color: mutedColor }}>
          <span>{style.name.toUpperCase()}</span>
          <span>{densityMeta.label}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 min-h-screen flex flex-col font-sans transition-colors duration-200">
      {/* Header */}
      {!isFullscreen && (
        <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/50 backdrop-blur px-6 py-4 flex flex-col md:flex-row gap-4 items-center justify-between shrink-0 transition-colors duration-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">H</div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Harness Slides 24-Style Workbench</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">Stable Engineering Guarantee · 100% Testable Deck System</p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            {/* Theme Switcher */}
            <div className="flex bg-slate-100 dark:bg-slate-950 p-1 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-medium">
              <button 
                className={`px-2.5 py-1 rounded-md transition-all ${theme === 'system' ? 'bg-indigo-600 text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                onClick={() => setTheme('system')}
              >
                💻 System
              </button>
              <button 
                className={`px-2.5 py-1 rounded-md transition-all ${theme === 'light' ? 'bg-indigo-600 text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                onClick={() => setTheme('light')}
              >
                ☀️ Light
              </button>
              <button 
                className={`px-2.5 py-1 rounded-md transition-all ${theme === 'dark' ? 'bg-indigo-600 text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                onClick={() => setTheme('dark')}
              >
                🌙 Dark
              </button>
            </div>

            {/* View Switcher */}
            <div className="flex bg-slate-100 dark:bg-slate-950 p-1 rounded-lg border border-slate-200 dark:border-slate-800">
              <button 
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${currentView === 'grid' ? 'bg-indigo-600 text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                onClick={() => setCurrentView('grid')}
              >
                Grid View
              </button>
              <button 
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${currentView === 'board' ? 'bg-indigo-600 text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                onClick={() => setCurrentView('board')}
              >
                Board View
              </button>
              <button 
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${currentView === 'lab' ? 'bg-indigo-600 text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                onClick={() => setCurrentView('lab')}
              >
                Interactive Lab
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Main Workspace */}
      <main className="flex-1 flex overflow-hidden">
        
        {/* GRID VIEW */}
        {currentView === 'grid' && (
          <div className="flex-1 overflow-y-auto p-4 md:p-6 transition-colors duration-200">
            <div class="w-full space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">24-Style Matrix Catalog</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">A structured collection of 24 presentation styles across three density bands.</p>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 transition-colors duration-200">
                  Total Styles: <span className="text-indigo-600 dark:text-indigo-400 font-bold">24</span>
                </div>
              </div>
              
              <div className="responsive-grid">
                {stylesData.map(style => {
                  const nativeDensity = getNativeDensity(style.id);
                  let densityBadgeColor = "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700";
                  if (style.density.includes("Minimal")) {
                    densityBadgeColor = "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50";
                  } else if (style.density.includes("Balanced")) {
                    densityBadgeColor = "bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50";
                  } else if (style.density.includes("Text")) {
                    densityBadgeColor = "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50";
                  }

                  return (
                    <div 
                      key={style.id}
                      className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition cursor-pointer flex flex-col justify-between group h-auto transition-colors duration-200"
                      onClick={() => {
                        loadStyleToLab(style.id);
                        setCurrentView('lab');
                      }}
                    >
                      {/* Thumbnail Container (Real-time Rendered Slide) */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-slate-200 dark:border-slate-800/60" style={{ containerType: 'size' }}>
                        <div className="w-full h-full transition-transform duration-300 group-hover:scale-[1.02] origin-center pointer-events-none select-none">
                          <SlideStage style={style} mode="story" density={nativeDensity} scene={1} beat={1} />
                        </div>
                        {/* Transparent Click Shield */}
                        <div className="absolute inset-0 bg-transparent z-10"></div>
                        
                        <div className="absolute top-3 left-3 flex gap-1.5 z-20">
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider ${densityBadgeColor}`}>{style.density}</span>
                        </div>
                        <div className="absolute top-3 right-3 z-20">
                          <span className="text-[10px] font-mono text-slate-400 bg-slate-950/80 px-1.5 py-0.5 rounded border border-slate-800/60">#{String(style.id).padStart(2, '0')}</span>
                        </div>
                      </div>
                      {/* Info Container (Super Compact Single-line Bar) */}
                      <div className="px-4 py-3 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/20 transition-colors duration-200">
                        <div className="flex items-center space-x-2 overflow-hidden mr-4">
                          <h3 className="font-bold text-slate-800 dark:text-white text-xs group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition truncate">{style.name}</h3>
                        </div>
                        <div className="flex gap-1 shrink-0">
                          {style.specs.palette.map((color, idx) => (
                            <div key={idx} className="w-3 h-3 rounded-full border border-slate-200 dark:border-slate-950 shadow-sm" style={{ backgroundColor: color }} title={color}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* BOARD VIEW */}
        {currentView === 'board' && (
          <div className="flex-1 overflow-x-auto p-4 md:p-6 transition-colors duration-200">
            <div className="flex space-x-4 md:space-x-6 min-w-[1200px] h-full">
              {/* Minimal Keynote Column */}
              <div className="flex-1 flex flex-col bg-slate-100/50 dark:bg-slate-900/30 rounded-xl border border-slate-200 dark:border-slate-800/60 p-4 overflow-hidden transition-colors duration-200">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <h3 className="font-bold text-slate-900 dark:text-white">🟢 Minimal Keynote</h3>
                  </div>
                  <span className="text-xs bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full font-semibold transition-colors duration-200">Styles 01-08</span>
                </div>
                <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                  {stylesData.filter(s => s.density.includes("Minimal")).map(style => {
                    const nativeDensity = getNativeDensity(style.id);
                    return (
                      <div 
                        key={style.id}
                        className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 rounded-lg overflow-hidden transition cursor-pointer flex flex-col group space-y-0 transition-colors duration-200"
                        onClick={() => {
                          loadStyleToLab(style.id);
                          setCurrentView('lab');
                        }}
                      >
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-slate-200 dark:border-slate-800/40" style={{ containerType: 'size' }}>
                          <div className="w-full h-full transition-transform duration-300 group-hover:scale-[1.02] origin-center pointer-events-none select-none">
                            <SlideStage style={style} mode="story" density={nativeDensity} scene={1} beat={1} />
                          </div>
                          <div className="absolute inset-0 bg-transparent z-10"></div>
                          <div className="absolute top-2 right-2 z-20">
                            <span className="text-[9px] font-mono text-slate-400 bg-slate-950/80 px-1.5 py-0.5 rounded border border-slate-800/40">#{String(style.id).padStart(2, '0')}</span>
                          </div>
                        </div>
                        <div className="px-3 py-2.5 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/20 transition-colors duration-200">
                          <h4 className="font-bold text-slate-800 dark:text-white text-[11px] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition truncate mr-3">{style.name}</h4>
                          <div className="flex gap-1 shrink-0">
                            {style.specs.palette.map((color, idx) => (
                              <div key={idx} className="w-2.5 h-2.5 rounded-full border border-slate-200 dark:border-slate-950 shadow-sm" style={{ backgroundColor: color }}></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Balanced Hybrid Column */}
              <div className="flex-1 flex flex-col bg-slate-100/50 dark:bg-slate-900/30 rounded-xl border border-slate-200 dark:border-slate-800/60 p-4 overflow-hidden transition-colors duration-200">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <h3 className="font-bold text-slate-900 dark:text-white">🟡 Balanced Hybrid</h3>
                  </div>
                  <span className="text-xs bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full font-semibold transition-colors duration-200">Styles 09-16</span>
                </div>
                <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                  {stylesData.filter(s => s.density.includes("Balanced")).map(style => {
                    const nativeDensity = getNativeDensity(style.id);
                    return (
                      <div 
                        key={style.id}
                        className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 rounded-lg overflow-hidden transition cursor-pointer flex flex-col group space-y-0 transition-colors duration-200"
                        onClick={() => {
                          loadStyleToLab(style.id);
                          setCurrentView('lab');
                        }}
                      >
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-slate-200 dark:border-slate-800/40" style={{ containerType: 'size' }}>
                          <div className="w-full h-full transition-transform duration-300 group-hover:scale-[1.02] origin-center pointer-events-none select-none">
                            <SlideStage style={style} mode="story" density={nativeDensity} scene={1} beat={1} />
                          </div>
                          <div className="absolute inset-0 bg-transparent z-10"></div>
                          <div className="absolute top-2 right-2 z-20">
                            <span className="text-[9px] font-mono text-slate-400 bg-slate-950/80 px-1.5 py-0.5 rounded border border-slate-800/40">#{String(style.id).padStart(2, '0')}</span>
                          </div>
                        </div>
                        <div className="px-3 py-2.5 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/20 transition-colors duration-200">
                          <h4 className="font-bold text-slate-800 dark:text-white text-[11px] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition truncate mr-3">{style.name}</h4>
                          <div className="flex gap-1 shrink-0">
                            {style.specs.palette.map((color, idx) => (
                              <div key={idx} className="w-2.5 h-2.5 rounded-full border border-slate-200 dark:border-slate-950 shadow-sm" style={{ backgroundColor: color }}></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Text Report Column */}
              <div className="flex-1 flex flex-col bg-slate-100/50 dark:bg-slate-900/30 rounded-xl border border-slate-200 dark:border-slate-800/60 p-4 overflow-hidden transition-colors duration-200">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    <h3 className="font-bold text-slate-900 dark:text-white">🔵 Text Report</h3>
                  </div>
                  <span className="text-xs bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full font-semibold transition-colors duration-200">Styles 17-24</span>
                </div>
                <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                  {stylesData.filter(s => s.density.includes("Text")).map(style => {
                    const nativeDensity = getNativeDensity(style.id);
                    return (
                      <div 
                        key={style.id}
                        className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 rounded-lg overflow-hidden transition cursor-pointer flex flex-col group space-y-0 transition-colors duration-200"
                        onClick={() => {
                          loadStyleToLab(style.id);
                          setCurrentView('lab');
                        }}
                      >
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-slate-200 dark:border-slate-800/40" style={{ containerType: 'size' }}>
                          <div className="w-full h-full transition-transform duration-300 group-hover:scale-[1.02] origin-center pointer-events-none select-none">
                            <SlideStage style={style} mode="story" density={nativeDensity} scene={1} beat={1} />
                          </div>
                          <div className="absolute inset-0 bg-transparent z-10"></div>
                          <div className="absolute top-2 right-2 z-20">
                            <span className="text-[9px] font-mono text-slate-400 bg-slate-950/80 px-1.5 py-0.5 rounded border border-slate-800/40">#{String(style.id).padStart(2, '0')}</span>
                          </div>
                        </div>
                        <div className="px-3 py-2.5 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/20 transition-colors duration-200">
                          <h4 className="font-bold text-slate-800 dark:text-white text-[11px] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition truncate mr-3">{style.name}</h4>
                          <div className="flex gap-1 shrink-0">
                            {style.specs.palette.map((color, idx) => (
                              <div key={idx} className="w-2.5 h-2.5 rounded-full border border-slate-200 dark:border-slate-950 shadow-sm" style={{ backgroundColor: color }}></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* LAB VIEW */}
        {currentView === 'lab' && (
          <div className="flex-1 flex overflow-hidden transition-colors duration-200">
            {/* Sidebar */}
            {!isFullscreen && (
              <aside className="w-80 border-r border-slate-200 dark:border-slate-800 bg-slate-100/30 dark:bg-slate-900/20 flex flex-col overflow-hidden shrink-0 transition-colors duration-200">
                <div className="p-4 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Select Style</span>
                </div>
                <div className="flex-1 overflow-y-auto p-3 space-y-4">
                  {[
                    { name: "🟢 Minimal Keynote", list: stylesData.filter(s => s.density.includes("Minimal")) },
                    { name: "🟡 Balanced Hybrid", list: stylesData.filter(s => s.density.includes("Balanced")) },
                    { name: "🔵 Text Report", list: stylesData.filter(s => s.density.includes("Text")) }
                  ].map(group => (
                    <div key={group.name}>
                      <div className="text-xs font-bold text-slate-500 mt-4 mb-2 px-2 uppercase tracking-wider">
                        {group.name}
                      </div>
                      <div className="space-y-1">
                        {group.list.map(style => {
                          const isActive = style.id === currentStyleId;
                          return (
                            <button
                              key={style.id}
                              className={`w-full text-left px-3 py-2 text-xs font-medium rounded-lg transition-all flex items-center justify-between ${
                                isActive 
                                  ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 font-semibold" 
                                  : "text-slate-400 hover:text-white hover:bg-slate-800/30 border border-transparent"
                              }`}
                              onClick={() => loadStyleToLab(style.id)}
                            >
                              <span>{style.name}</span>
                              <span className="text-[10px] font-mono text-slate-600">#{String(style.id).padStart(2, '0')}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            )}

            {/* Stage Area */}
            <div className="flex-1 flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-950 p-4 md:p-6 transition-colors duration-200">
              {/* Toolbar */}
              {!isFullscreen && (
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-between border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30 p-3 rounded-xl mb-6 shrink-0 transition-colors duration-200">
                  <div className="flex flex-wrap items-center gap-4">
                    {/* Mode Switcher */}
                    <div className="flex bg-slate-100 dark:bg-slate-950 p-1 rounded-lg border border-slate-200 dark:border-slate-800">
                      <button 
                        className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${stageMode === 'story' ? 'bg-indigo-600 text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                        onClick={() => setStageMode('story')}
                      >
                        Story Mode
                      </button>
                      <button 
                        className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${stageMode === 'specs' ? 'bg-indigo-600 text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                        onClick={() => setStageMode('specs')}
                      >
                        Specs Sheet
                      </button>
                    </div>

                    {/* Density Switcher */}
                    {stageMode !== 'specs' && (
                      <div className="flex bg-slate-100 dark:bg-slate-950 p-1 rounded-lg border border-slate-200 dark:border-slate-800">
                        <button 
                          className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${stageDensity === 'low' ? 'bg-indigo-600 text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                          onClick={() => setStageDensity('low')}
                        >
                          Low Density
                        </button>
                        <button 
                          className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${stageDensity === 'med' ? 'bg-indigo-600 text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                          onClick={() => setStageDensity('med')}
                        >
                          Med Density
                        </button>
                        <button 
                          className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${stageDensity === 'high' ? 'bg-indigo-600 text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                          onClick={() => setStageDensity('high')}
                        >
                          High Density
                        </button>
                      </div>
                    )}

                    {/* Scene & Beat Controller */}
                    <div className="flex items-center space-x-3 bg-slate-100 dark:bg-slate-950 p-1 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-medium">
                      {/* Scene Selector */}
                      <div className="flex bg-white dark:bg-slate-900 rounded-md border border-slate-200/60 dark:border-slate-800/60 p-0.5">
                        <button 
                          className={`px-2.5 py-0.5 rounded transition-all ${currentScene === 1 ? 'bg-indigo-600 text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                          onClick={() => {
                            setCurrentScene(1);
                            setCurrentBeat(1);
                          }}
                        >
                          Scene 1
                        </button>
                        <button 
                          className={`px-2.5 py-0.5 rounded transition-all ${currentScene === 2 ? 'bg-indigo-600 text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                          onClick={() => {
                            setCurrentScene(2);
                            setCurrentBeat(1);
                          }}
                        >
                          Scene 2
                        </button>
                      </div>
                      
                      {/* Beat Dots */}
                      <div className="flex items-center space-x-1.5 px-1">
                        {[1, 2, 3].map(b => (
                          <button 
                            key={b}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${
                              b === currentBeat 
                                ? "bg-indigo-600 scale-125" 
                                : "bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                            }`}
                            onClick={() => setCurrentBeat(b)}
                            title={`Beat ${b}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Fullscreen Trigger */}
                  <button 
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 transition flex items-center space-x-1.5"
                    onClick={toggleFullscreen}
                  >
                    <span>🖥️ Fullscreen Stage</span>
                  </button>
                </div>
              )}

              {/* 16:9 Stage Container */}
              <div className="flex-1 flex items-center justify-center overflow-hidden">
                <div 
                  id="stage-container" 
                  className={isFullscreen 
                    ? "fixed inset-0 z-[9999] w-screen h-screen max-w-none rounded-none border-none bg-black"
                    : "shadow-2xl border border-slate-200 dark:border-slate-800/80 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-200"
                  }
                >
                  <div id="slide-stage" className="transition-all duration-300">
                    <SlideStage 
                      style={activeStyle} 
                      mode={stageMode} 
                      density={stageDensity} 
                      scene={currentScene} 
                      beat={currentBeat} 
                      onClick={advanceBeat}
                    />
                  </div>
                </div>
              </div>

              {/* Tip */}
              {!isFullscreen && (
                <div className="text-center text-xs text-slate-500 mt-4 shrink-0 font-mono">
                  Tip: Click the slide stage to replay animation 🔄 · Press <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded text-slate-600 dark:text-slate-400">Esc</kbd> to exit Fullscreen Mode · Use <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded text-slate-600 dark:text-slate-400">←</kbd> <kbd class="px-1.5 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded text-slate-600 dark:text-slate-400">→</kbd> keys to navigate styles
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      {!isFullscreen && (
        <footer className="border-t border-slate-900 bg-slate-950 px-6 py-3 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>© 2026 Frontend Harness Slides Design System</span>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-slate-400">Interactive Preview Workbench · Active</span>
          </div>
        </footer>
      )}
    </div>
  );
}
