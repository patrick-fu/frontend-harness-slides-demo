import React, { useState, useEffect, useLayoutEffect, useRef, useMemo } from "react";
import { STYLES, findStyle, clampBeat } from "./data/stylesData";
import { SlideRenderer } from "./components/SlideRenderer";
import { 
  Monitor, LayoutGrid, Kanban, Play, ChevronRight, ChevronLeft, 
  Menu, X, RotateCcw, Sparkles, CheckCircle, Info, ExternalLink
} from "lucide-react";

// Standard aspect ratio parameters
const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;

function getRouteState() {
  const params = new URLSearchParams(window.location.search);
  const view = params.get("view") || "lab"; // 'lab' | 'grid' | 'board'
  const styleId = params.get("style") || "01";
  const scene = parseInt(params.get("scene") || "1", 10);
  const beat = parseInt(params.get("beat") || "0", 10);

  const style = findStyle(styleId);
  const safeBeat = clampBeat(style, scene, beat);

  return {
    view,
    styleId: style.id,
    scene: scene === 1 || scene === 2 ? scene : 1,
    beat: safeBeat
  };
}

function buildUrl(view, styleId, scene, beat) {
  const params = new URLSearchParams();
  params.set("view", view);
  params.set("style", styleId);
  params.set("scene", String(scene));
  params.set("beat", String(beat));
  return `${window.location.pathname}?${params.toString()}`;
}

export function App() {
  const initialRoute = useMemo(() => getRouteState(), []);
  
  // App routing states
  const [view, setView] = useState(initialRoute.view);
  const [selectedStyleId, setSelectedStyleId] = useState(initialRoute.styleId);
  const [scene, setScene] = useState(initialRoute.scene);
  const [beat, setBeat] = useState(initialRoute.beat);

  // Layout states
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [scale, setScale] = useState(1);
  const stageWrapperRef = useRef(null);

  const currentStyle = findStyle(selectedStyleId);

  // Sync state with URL history
  useEffect(() => {
    const handlePopState = () => {
      const next = getRouteState();
      setView(next.view);
      setSelectedStyleId(next.styleId);
      setScene(next.scene);
      setBeat(next.beat);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Set up screen-width mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const mobileMode = window.innerWidth < 768;
      setIsMobile(mobileMode);
      if (mobileMode) {
        setSidebarOpen(false); // Default closed on mobile
      } else {
        setSidebarOpen(true); // Default open on desktop
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Update scale factor of the 16:9 stage to fit its container container
  useLayoutEffect(() => {
    const updateScale = () => {
      if (!stageWrapperRef.current) return;
      const containerWidth = stageWrapperRef.current.clientWidth;
      const containerHeight = stageWrapperRef.current.clientHeight;
      
      const widthScale = containerWidth / BASE_WIDTH;
      const heightScale = containerHeight / BASE_HEIGHT;
      
      // Keep it constrained to fit within parent dimensions
      const finalScale = Math.min(widthScale, heightScale, 1.5);
      setScale(finalScale > 0 ? finalScale : 1);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    // Add brief timeout for layout stabilizer
    const timer = setTimeout(updateScale, 100);

    return () => {
      window.removeEventListener("resize", updateScale);
      clearTimeout(timer);
    };
  }, [view, selectedStyleId, sidebarOpen]);

  // Route updates wrapper
  const navigate = (nextView, nextStyleId, nextScene, nextBeat, replace = false) => {
    const targetStyle = findStyle(nextStyleId);
    const safeBeat = clampBeat(targetStyle, nextScene, nextBeat);
    
    setView(nextView);
    setSelectedStyleId(targetStyle.id);
    setScene(nextScene);
    setBeat(safeBeat);

    const nextUrl = buildUrl(nextView, targetStyle.id, nextScene, safeBeat);
    if (replace) {
      window.history.replaceState({}, "", nextUrl);
    } else {
      window.history.pushState({}, "", nextUrl);
    }
  };

  // Automated beat transition helpers
  const handleNextBeat = () => {
    if (beat < 2) {
      navigate(view, selectedStyleId, scene, beat + 1);
    } else if (scene === 1) {
      navigate(view, selectedStyleId, 2, 0);
    }
  };

  const handlePrevBeat = () => {
    if (beat > 0) {
      navigate(view, selectedStyleId, scene, beat - 1);
    } else if (scene === 2) {
      navigate(view, selectedStyleId, 1, 2);
    }
  };

  // Handles dynamic mobile sidebars hiding on style switch
  const handleSelectStyle = (styleId) => {
    if (isMobile) {
      setSidebarOpen(false); // Automatically close sidebars on selection
    }
    navigate(view, styleId, 1, 0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (view !== "lab") return;
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        handleNextBeat();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevBeat();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [view, selectedStyleId, scene, beat]);

  return (
    <div className="w-full h-screen flex flex-col bg-zinc-950 text-slate-100 overflow-hidden font-sans select-none">
      {/* Top Application Workspace Header Bar */}
      <header className="w-full h-16 border-b border-zinc-800 bg-zinc-900/60 backdrop-blur flex justify-between items-center px-4 md:px-6 shrink-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center font-black text-black text-lg shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            H
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm md:text-base font-bold tracking-tight text-white leading-none">
              Frontend Harness Slides
            </h1>
            <span className="text-[10px] md:text-xs text-zinc-400 font-mono mt-0.5">
              24-Style Design System Manifesto
            </span>
          </div>
        </div>

        {/* Global Tab view switcher */}
        <div className="flex bg-zinc-950 rounded-lg p-1 border border-zinc-800 shrink-0">
          <button
            onClick={() => navigate("lab", selectedStyleId, scene, beat)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
              view === "lab"
                ? "bg-cyan-500 text-black shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Interactive Lab</span>
          </button>
          <button
            onClick={() => navigate("grid", selectedStyleId, scene, beat)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
              view === "grid"
                ? "bg-cyan-500 text-black shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Grid View</span>
          </button>
          <button
            onClick={() => navigate("board", selectedStyleId, scene, beat)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
              view === "board"
                ? "bg-cyan-500 text-black shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Kanban className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Board View</span>
          </button>
        </div>
      </header>

      {/* Main Workspace Frame */}
      <div className="flex-1 flex w-full overflow-hidden relative">
        {/* INTERACTIVE LAB VIEW */}
        {view === "lab" && (
          <>
            {/* Sidebar toggle button (Mobile-first friendly) */}
            <button
              data-testid="sidebar-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="absolute left-4 top-4 bg-zinc-900 border border-zinc-800 p-2.5 rounded-lg text-zinc-300 hover:text-white z-30 shadow-lg md:hidden"
            >
              {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>

            {/* Sidebar Catalog selector */}
            <aside
              className={`absolute md:relative inset-y-0 left-0 w-72 border-r border-zinc-800 bg-zinc-900 flex flex-col shrink-0 transition-transform duration-300 z-10 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0 md:hidden"
              }`}
            >
              <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
                <span className="text-xs font-bold font-mono tracking-widest text-zinc-400">
                  CATALOG: 24 STYLES
                </span>
                <span className="bg-zinc-950 text-[10px] font-mono px-2 py-0.5 rounded text-cyan-400 border border-zinc-800">
                  STYLE {currentStyle.id}
                </span>
              </div>
              
              <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-1">
                {STYLES.map((styleItem) => {
                  const isActive = styleItem.id === selectedStyleId;
                  const isLow = styleItem.density === "low";
                  const isMed = styleItem.density === "med";
                  const badgeColor = isLow ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                                     isMed ? "bg-amber-500/10 text-amber-400 border-amber-500/20" : 
                                     "bg-blue-500/10 text-blue-400 border-blue-500/20";
                  const densityDot = isLow ? "bg-emerald-400" : isMed ? "bg-amber-400" : "bg-blue-400";
                  
                  return (
                    <button
                      key={styleItem.id}
                      onClick={() => handleSelectStyle(styleItem.id)}
                      className={`w-full text-left p-3 rounded-lg flex gap-3 transition-all ${
                        isActive
                          ? "bg-zinc-800 border-l-4 border-cyan-500 text-white"
                          : "hover:bg-zinc-800/40 text-zinc-300 hover:text-white"
                      }`}
                    >
                      <span className="font-mono text-xs font-bold text-zinc-500 shrink-0 mt-0.5">
                        {styleItem.id}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-black truncate leading-none mb-1">
                          {styleItem.name}
                        </p>
                        <span className="text-[10px] text-zinc-400 truncate block">
                          {styleItem.theme}
                        </span>
                        <div className="flex items-center gap-1.5 mt-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${densityDot}`} />
                          <span className="text-[9px] font-mono opacity-80 uppercase">
                            {styleItem.densityLabel}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Stage Canvas Workspace Area */}
            <main className="flex-1 flex flex-col bg-zinc-950 p-4 md:p-8 overflow-hidden justify-between">
              {/* Slide Scene Selector controls */}
              <div className="flex justify-between items-center gap-4 border-b border-zinc-900 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500 font-mono text-xs hidden sm:inline">SCENE CONTROL:</span>
                  <div className="flex bg-zinc-900 p-0.5 rounded-lg border border-zinc-800">
                    <button
                      onClick={() => navigate("lab", selectedStyleId, 1, 0)}
                      className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                        scene === 1 ? "bg-zinc-800 text-white shadow" : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      Scene 1: Principles
                    </button>
                    <button
                      onClick={() => navigate("lab", selectedStyleId, 2, 0)}
                      className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                        scene === 2 ? "bg-zinc-800 text-white shadow" : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      Scene 2: Execution
                    </button>
                  </div>
                </div>

                {/* Local Action simulation label */}
                <div className="bg-zinc-900/60 border border-zinc-800/80 px-3 py-1.5 rounded-lg flex items-center gap-2 max-w-xs truncate">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
                  <span className="text-xs font-mono text-zinc-300 truncate">
                    Control action: <strong className="text-white">{currentStyle.scenes[scene-1].beats[beat].action}</strong>
                  </span>
                </div>
              </div>

              {/* Central stage scaled frame */}
              <div 
                ref={stageWrapperRef}
                className="flex-1 w-full flex items-center justify-center relative overflow-hidden my-4"
              >
                <div
                  className="relative"
                  style={{
                    width: BASE_WIDTH * scale,
                    height: BASE_HEIGHT * scale,
                  }}
                >
                  <div 
                    id="slide-stage"
                    className="rounded-xl border border-zinc-800/80 bg-zinc-900 overflow-hidden shadow-2xl absolute left-0 top-0"
                    style={{
                      width: BASE_WIDTH,
                      height: BASE_HEIGHT,
                      transform: `scale(${scale})`,
                      transformOrigin: "top left",
                    }}
                  >
                    <SlideRenderer style={currentStyle} scene={scene} beat={beat} />
                  </div>
                </div>
              </div>

              {/* Core Beat stepping controller bar */}
              <div className="w-full max-w-2xl mx-auto bg-zinc-900 border border-zinc-800 p-3 rounded-2xl flex justify-between items-center gap-4 shadow-xl select-none z-10 shrink-0">
                <button
                  onClick={handlePrevBeat}
                  disabled={scene === 1 && beat === 0}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800 bg-zinc-950 disabled:opacity-30 disabled:pointer-events-none transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                {/* Progress Indicators */}
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    {[0, 1, 2].map((idx) => {
                      const isActive = beat === idx;
                      const isPast = beat > idx;
                      return (
                        <div
                          key={idx}
                          className={`h-2.5 rounded-full transition-all duration-300 ${
                            isActive
                              ? "w-8 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                              : isPast
                              ? "w-2.5 bg-cyan-600/60"
                              : "w-2.5 bg-zinc-800"
                          }`}
                        />
                      );
                    })}
                  </div>
                  <span className="font-mono text-xs text-zinc-400 font-bold">
                    BEAT {beat + 1} OF 3
                  </span>
                </div>

                <button
                  onClick={handleNextBeat}
                  disabled={scene === 2 && beat === 2}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl text-black bg-cyan-500 hover:bg-cyan-400 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                  <span>Next Step</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </main>
          </>
        )}

        {/* 24-STYLE GRID VIEW CATALOG */}
        {view === "grid" && (
          <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-zinc-950">
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-black text-white">Grid View matrix</h2>
              <p className="text-xs md:text-sm text-zinc-400 mt-1">
                A real-time rendered grid catalog presenting all 24 presentation styles in scalable 16:9 thumbnails.
              </p>
            </div>

            {/* Real-time grids columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {STYLES.map((styleItem) => (
                <div 
                  key={styleItem.id}
                  onClick={() => navigate("lab", styleItem.id, 1, 0)}
                  className="group relative bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden hover:border-cyan-500/50 hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between"
                  style={{ minWidth: "480px" }} // Explicit min-width card constraint
                >
                  <div className="absolute top-3 left-3 z-20 flex gap-2">
                    <span className="bg-black/80 backdrop-blur text-[10px] font-mono text-white px-2 py-0.5 rounded font-black border border-zinc-800">
                      STYLE {styleItem.id}
                    </span>
                    <span className="bg-cyan-500 text-[10px] font-mono text-black px-2 py-0.5 rounded font-black shadow">
                      {styleItem.densityLabel}
                    </span>
                  </div>
                  
                  {/* Outer thumbnail wrapper wrapper containing scale-down stage */}
                  <div className="w-full aspect-video bg-zinc-950 overflow-hidden relative border-b border-zinc-800/80 flex items-center justify-center">
                    {/* Render standard stage in 0.25 (scale) factor */}
                    <div 
                      className="absolute origin-center transition-transform duration-300"
                      style={{
                        width: BASE_WIDTH,
                        height: BASE_HEIGHT,
                        transform: "scale(0.185)", // Scale factor to fit catalog perfectly
                      }}
                    >
                      <SlideRenderer style={styleItem} scene={1} beat={2} isThumbnail={true} />
                    </div>
                  </div>

                  {/* Thumbnail Information */}
                  <div className="p-4 bg-zinc-900 flex justify-between items-center">
                    <div className="min-w-0">
                      <p className="text-sm font-black text-white group-hover:text-cyan-400 transition-colors leading-tight">
                        {styleItem.name}
                      </p>
                      <span className="text-xs text-zinc-400 block truncate mt-1">
                        {styleItem.theme}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 shrink-0 ml-4" />
                  </div>
                </div>
              ))}
            </div>
          </main>
        )}

        {/* BOARD VIEW KANBAN */}
        {view === "board" && (
          <main className="flex-1 flex flex-col bg-zinc-950 overflow-hidden p-4 md:p-8">
            <div className="mb-6 shrink-0">
              <h2 className="text-xl md:text-2xl font-black text-white">Board View Matrix</h2>
              <p className="text-xs md:text-sm text-zinc-400 mt-1">
                Kanban structural bands organizing styles strictly by speaker-to-audience density levels.
              </p>
            </div>

            {/* Horizontal Kanban board overflow system */}
            <div className="flex-1 flex gap-6 overflow-x-auto pb-4 items-stretch select-none">
              {/* LOW DENSITY COLUMN */}
              <div className="flex-1 min-w-[500px] bg-zinc-900/40 border border-zinc-800 rounded-2xl p-4 flex flex-col h-full overflow-hidden">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="font-bold text-sm text-white">🟢 KEYNOTE / SPEAKER-LED</span>
                  </div>
                  <span className="bg-zinc-800 text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded font-black">
                    01 - 08 (Low)
                  </span>
                </div>
                <div className="flex-1 overflow-y-auto flex flex-col gap-4 pr-1">
                  {STYLES.filter((s) => s.density === "low").map((styleItem) => (
                    <BoardCard key={styleItem.id} styleItem={styleItem} onSelect={() => navigate("lab", styleItem.id, 1, 0)} />
                  ))}
                </div>
              </div>

              {/* MED DENSITY COLUMN */}
              <div className="flex-1 min-w-[500px] bg-zinc-900/40 border border-zinc-800 rounded-2xl p-4 flex flex-col h-full overflow-hidden">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="font-bold text-sm text-white">🟡 HYBRID / TIMELINE FLOW</span>
                  </div>
                  <span className="bg-zinc-800 text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded font-black">
                    09 - 16 (Med)
                  </span>
                </div>
                <div className="flex-1 overflow-y-auto flex flex-col gap-4 pr-1">
                  {STYLES.filter((s) => s.density === "med").map((styleItem) => (
                    <BoardCard key={styleItem.id} styleItem={styleItem} onSelect={() => navigate("lab", styleItem.id, 1, 0)} />
                  ))}
                </div>
              </div>

              {/* HIGH DENSITY COLUMN */}
              <div className="flex-1 min-w-[500px] bg-zinc-900/40 border border-zinc-800 rounded-2xl p-4 flex flex-col h-full overflow-hidden">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="font-bold text-sm text-white">🔵 TEXT REPORT / BENTO</span>
                  </div>
                  <span className="bg-zinc-800 text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded font-black">
                    17 - 24 (High)
                  </span>
                </div>
                <div className="flex-1 overflow-y-auto flex flex-col gap-4 pr-1">
                  {STYLES.filter((s) => s.density === "high").map((styleItem) => (
                    <BoardCard key={styleItem.id} styleItem={styleItem} onSelect={() => navigate("lab", styleItem.id, 1, 0)} />
                  ))}
                </div>
              </div>
            </div>
          </main>
        )}
      </div>
    </div>
  );
}

// Kanban individual card component
function BoardCard({ styleItem, onSelect }) {
  return (
    <div 
      onClick={onSelect}
      className="group bg-zinc-900 rounded-xl border border-zinc-800/80 p-3 hover:border-cyan-500/50 hover:shadow-lg transition-all cursor-pointer flex gap-4 items-center"
      style={{ minWidth: "480px" }} // Explicit min-width card constraint
    >
      <div className="w-[120px] aspect-video bg-zinc-950 overflow-hidden relative rounded-lg border border-zinc-850 flex items-center justify-center shrink-0">
        <div 
          className="absolute origin-center transition-transform duration-300"
          style={{
            width: BASE_WIDTH,
            height: BASE_HEIGHT,
            transform: "scale(0.063)", // Ultra scale down for Kanban thumbs
          }}
        >
          <SlideRenderer style={styleItem} scene={1} beat={2} isThumbnail={true} />
        </div>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <span className="font-mono text-xs text-zinc-500 font-bold shrink-0">
            STYLE {styleItem.id}
          </span>
          <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-cyan-400 transition-colors shrink-0 ml-2" />
        </div>
        <p className="text-xs font-black text-white group-hover:text-cyan-400 transition-colors leading-none mt-1 truncate">
          {styleItem.name}
        </p>
        <span className="text-[10px] text-zinc-400 truncate block mt-1">
          {styleItem.theme}
        </span>
      </div>
    </div>
  );
}
