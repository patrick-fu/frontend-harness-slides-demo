import React, { useState, useEffect, useLayoutEffect, useRef, useMemo } from "react";
import { STYLES, findStyle, clampBeat } from "./data/stylesData";
import { SlideRenderer } from "./components/SlideRenderer";
import { getLocalizedStyles } from "./i18n/slides";
import { formatMessage, UI_TRANSLATIONS } from "./i18n/ui";
import { 
  Monitor, LayoutGrid, Kanban, Play, ChevronRight, ChevronLeft, 
  Menu, X, RotateCcw, Sparkles, CheckCircle, Info, ExternalLink,
  Sun, Moon, Languages, Github
} from "lucide-react";

// Standard aspect ratio parameters
const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;
const THEME_STORAGE_KEY = "harness-slides-theme-mode";
const LANGUAGE_STORAGE_KEY = "harness-slides-language-mode";
const THEME_MODES = ["auto", "light", "dark"];
const LANGUAGE_MODES = ["auto", "en", "zh"];

function getInitialThemeMode() {
  const storedMode = window.localStorage.getItem(THEME_STORAGE_KEY);
  return THEME_MODES.includes(storedMode) ? storedMode : "auto";
}

function getSystemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getInitialLanguageMode() {
  const storedMode = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return LANGUAGE_MODES.includes(storedMode) ? storedMode : "auto";
}

function getSystemLanguage() {
  return navigator.language?.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function getRouteState() {
  const params = new URLSearchParams(window.location.search);
  const view = params.get("view") || "grid"; // Default is GRID view now!
  const styleId = params.get("style") || "01";
  const scene = parseInt(params.get("scene") || "1", 10);
  const beat = parseInt(params.get("beat") || "0", 10);

  const style = findStyle(styleId);
  const safeBeat = clampBeat(style, scene, beat);

  return {
    view,
    styleId: style.id,
    scene: scene >= 1 && scene <= 5 ? scene : 1, // Supports 5 scenes now
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
  const [themeMode, setThemeMode] = useState(() => getInitialThemeMode());
  const [languageMode, setLanguageMode] = useState(() => getInitialLanguageMode());
  const [systemPrefersDark, setSystemPrefersDark] = useState(() => getSystemPrefersDark());
  const [systemLanguage, setSystemLanguage] = useState(() => getSystemLanguage());
  const stageWrapperRef = useRef(null);

  const resolvedTheme = themeMode === "auto" ? (systemPrefersDark ? "dark" : "light") : themeMode;
  const isDarkTheme = resolvedTheme === "dark";
  const language = languageMode === "auto" ? systemLanguage : languageMode;
  const localizedStyles = useMemo(() => getLocalizedStyles(STYLES, language), [language]);
  const currentStyle = localizedStyles.find((style) => style.id === selectedStyleId) || localizedStyles[0];
  const t = UI_TRANSLATIONS[language];
  const chrome = isDarkTheme
    ? {
        root: "bg-zinc-950 text-slate-100",
        header: "border-zinc-800 bg-zinc-900/60",
        main: "bg-zinc-950",
        panel: "bg-zinc-900 border-zinc-800",
        panelSoft: "bg-zinc-900/40 border-zinc-800/80",
        panelStrong: "bg-zinc-950 border-zinc-800",
        text: "text-white",
        muted: "text-zinc-400",
        faint: "text-zinc-500",
        inactive: "text-zinc-400 hover:text-white",
        card: "bg-zinc-900",
        cardHover: "hover:bg-zinc-800/40",
        activeItem: "bg-zinc-800 border-cyan-500 text-white",
      }
    : {
        root: "bg-slate-100 text-slate-950",
        header: "border-slate-200 bg-white/80",
        main: "bg-slate-100",
        panel: "bg-white border-slate-200",
        panelSoft: "bg-white/75 border-slate-200",
        panelStrong: "bg-slate-50 border-slate-200",
        text: "text-slate-950",
        muted: "text-slate-500",
        faint: "text-slate-400",
        inactive: "text-slate-500 hover:text-slate-950",
        card: "bg-white",
        cardHover: "hover:bg-slate-50",
        activeItem: "bg-slate-100 border-cyan-500 text-slate-950",
      };

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

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, themeMode);
  }, [themeMode]);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, languageMode);
  }, [languageMode]);

  useEffect(() => {
    const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = () => setSystemPrefersDark(themeQuery.matches);

    themeQuery.addEventListener("change", handleThemeChange);
    return () => themeQuery.removeEventListener("change", handleThemeChange);
  }, []);

  useEffect(() => {
    const handleLanguageChange = () => setSystemLanguage(getSystemLanguage());

    window.addEventListener("languagechange", handleLanguageChange);
    return () => window.removeEventListener("languagechange", handleLanguageChange);
  }, []);

  // Update scale factor of the 16:9 stage to fit its container container
  useLayoutEffect(() => {
    if (view !== "lab") return;
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

  // Automated beat transition helpers (supports 5 scenes)
  const handleNextBeat = () => {
    if (beat < 2) {
      navigate(view, selectedStyleId, scene, beat + 1);
    } else if (scene < 5) {
      navigate(view, selectedStyleId, scene + 1, 0);
    }
  };

  const handlePrevBeat = () => {
    if (beat > 0) {
      navigate(view, selectedStyleId, scene, beat - 1);
    } else if (scene > 1) {
      navigate(view, selectedStyleId, scene - 1, 2);
    }
  };

  // Handles dynamic mobile sidebars hiding on style switch
  const handleSelectStyle = (styleId) => {
    if (isMobile) {
      setSidebarOpen(false); // Automatically close sidebars on selection
    }
    navigate(view, styleId, 1, 0);
  };

  // Touch Gestures support
  const touchStartRef = useRef({ x: 0, y: 0 });

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e) => {
    if (e.changedTouches.length === 0) return;
    const touch = e.changedTouches[0];
    const diffX = touch.clientX - touchStartRef.current.x;
    const diffY = touch.clientY - touchStartRef.current.y;

    const threshold = 55; // Touch swipe threshold

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (Math.abs(diffX) > threshold) {
        if (diffX < 0) {
          handleNextBeat();
        } else {
          handlePrevBeat();
        }
      }
    } else {
      if (Math.abs(diffY) > threshold) {
        if (diffY < 0) {
          if (scene < 5) navigate(view, selectedStyleId, scene + 1, 0);
        } else {
          if (scene > 1) navigate(view, selectedStyleId, scene - 1, 0);
        }
      }
    }
  };

  // Split-screen click handlers (outer left 15% and right 15%)
  const handleStageClick = (e) => {
    if (e.target.closest("button") || e.target.closest("a")) {
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickWidth = rect.width;
    const ratio = clickX / clickWidth;

    if (ratio < 0.15) {
      handlePrevBeat();
    } else if (ratio > 0.85) {
      handleNextBeat();
    }
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
    <div lang={language === "zh" ? "zh-Hans" : "en"} className={`w-full h-screen flex flex-col ${chrome.root} overflow-hidden font-sans select-none`}>
      {/* Top Application Workspace Header Bar */}
      <header className={`w-full h-16 border-b ${chrome.header} backdrop-blur flex justify-between items-center px-4 md:px-6 shrink-0 z-20`}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center font-black text-black text-lg shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            H
          </div>
          <div className="flex flex-col">
            <h1 className={`text-sm md:text-base font-bold tracking-tight ${chrome.text} leading-none`}>
              {t.appTitle}
            </h1>
            <span className={`text-[10px] md:text-xs ${chrome.muted} font-mono mt-0.5`}>
              {t.appSubtitle}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {/* Theme switcher */}
          <div data-testid="theme-switcher" className={`hidden md:flex rounded-lg p-1 border ${chrome.panelStrong} shrink-0`}>
            {[
              { mode: "auto", label: t.themeAuto, icon: Monitor },
              { mode: "light", label: t.themeLight, icon: Sun },
              { mode: "dark", label: t.themeDark, icon: Moon },
            ].map(({ mode, label, icon: Icon }) => (
              <button
                key={mode}
                type="button"
                title={label}
                aria-pressed={themeMode === mode}
                onClick={() => setThemeMode(mode)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold rounded-md transition-all ${
                  themeMode === mode ? "bg-cyan-500 text-black shadow-md" : chrome.inactive
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">{label}</span>
              </button>
            ))}
          </div>

          {/* Language switcher */}
          <div data-testid="language-switcher" className={`hidden md:flex rounded-lg p-1 border ${chrome.panelStrong} shrink-0`}>
            {[
              { mode: "auto", label: t.languageAuto },
              { mode: "en", label: "EN" },
              { mode: "zh", label: "中" },
            ].map(({ mode, label }) => (
              <button
                key={mode}
                type="button"
                title={mode === "auto" ? t.languageAuto : mode === "en" ? t.languageEnglish : t.languageChinese}
                aria-pressed={languageMode === mode}
                onClick={() => setLanguageMode(mode)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold rounded-md transition-all ${
                  languageMode === mode ? "bg-cyan-500 text-black shadow-md" : chrome.inactive
                }`}
              >
                {mode === "auto" && <Languages className="w-3.5 h-3.5" />}
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Source repository link */}
          <a
            data-testid="github-link"
            href="https://github.com/patrick-fu/frontend-harness-slides"
            target="_blank"
            rel="noreferrer"
            title={t.githubLabel}
            aria-label={t.githubLabel}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-lg border transition-all ${chrome.panelStrong} ${chrome.inactive}`}
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden xl:inline">{t.githubLabel}</span>
          </a>

          {/* Global Tab view switcher */}
          <div className={`flex rounded-lg p-1 border ${chrome.panelStrong} shrink-0`}>
            <button
              onClick={() => navigate("lab", selectedStyleId, scene, beat)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                view === "lab"
                  ? "bg-cyan-500 text-black shadow-md"
                  : chrome.inactive
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.interactiveLab}</span>
            </button>
            <button
              onClick={() => navigate("grid", selectedStyleId, scene, beat)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                view === "grid"
                  ? "bg-cyan-500 text-black shadow-md"
                  : chrome.inactive
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.gridView}</span>
            </button>
            <button
              onClick={() => navigate("board", selectedStyleId, scene, beat)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                view === "board"
                  ? "bg-cyan-500 text-black shadow-md"
                  : chrome.inactive
              }`}
            >
              <Kanban className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.boardView}</span>
            </button>
          </div>
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
              className={`absolute left-4 top-4 border p-2.5 rounded-lg shadow-lg md:hidden z-30 ${chrome.panel} ${chrome.inactive}`}
            >
              {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>

            {/* Sidebar Catalog selector */}
            <aside
              className={`absolute md:relative inset-y-0 left-0 w-72 border-r ${chrome.panel} flex flex-col shrink-0 transition-transform duration-300 z-10 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0 md:hidden"
              }`}
            >
              <div className={`p-4 border-b ${chrome.panel} flex justify-between items-center`}>
                <span className={`text-xs font-bold font-mono tracking-widest ${chrome.muted}`}>
                  {t.catalogLabel}
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded text-cyan-500 border ${chrome.panelStrong}`}>
                  {t.styleLabel} {currentStyle.id}
                </span>
              </div>
              
              <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-1">
                {localizedStyles.map((styleItem) => {
                  const isActive = styleItem.id === selectedStyleId;
                  const isLow = styleItem.density === "low";
                  const isMed = styleItem.density === "med";
                  const densityDot = isLow ? "bg-emerald-400" : isMed ? "bg-amber-400" : "bg-blue-400";
                  
                  return (
                    <button
                      key={styleItem.id}
                      onClick={() => handleSelectStyle(styleItem.id)}
                      className={`w-full text-left p-3 rounded-lg flex gap-3 transition-all ${
                        isActive
                          ? `${chrome.activeItem} border-l-4`
                          : `${chrome.cardHover} ${chrome.inactive}`
                      }`}
                    >
                      <span className={`font-mono text-xs font-bold ${chrome.faint} shrink-0 mt-0.5`}>
                        {styleItem.id}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-black truncate leading-none mb-1">
                          {styleItem.name}
                        </p>
                        <span className={`text-[10px] ${chrome.muted} truncate block`}>
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
            <main className={`flex-1 flex flex-col ${chrome.main} p-4 md:p-8 overflow-hidden justify-between`}>
              {/* Slide Scene Selector controls (Supports 5 scenes now) */}
              <div className={`flex justify-between items-center gap-4 border-b ${isDarkTheme ? "border-zinc-900" : "border-slate-200"} pb-4`}>
                <div className="flex items-center gap-2 overflow-x-auto">
                  <span className={`${chrome.faint} font-mono text-xs hidden lg:inline whitespace-nowrap`}>{t.scenesLabel}</span>
                  <div className={`flex p-0.5 rounded-lg border gap-0.5 whitespace-nowrap ${chrome.panel}`}>
                    {[1, 2, 3, 4, 5].map((sNum) => (
                      <button
                        key={sNum}
                        onClick={() => navigate("lab", selectedStyleId, sNum, 0)}
                        className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                          scene === sNum ? "bg-cyan-500 text-black shadow" : chrome.inactive
                        }`}
                      >
                        {t.sceneShort} {sNum} ({t.sceneNames[sNum - 1]})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Local Action simulation label */}
                <div className={`border px-3 py-1.5 rounded-lg flex items-center gap-2 max-w-xs truncate shrink-0 ${chrome.panelSoft}`}>
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
                  <span className={`text-xs font-mono ${chrome.muted} truncate`}>
                    {t.controlLabel} <strong className={chrome.text}>{currentStyle.scenes[scene-1].beats[beat].action}</strong>
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
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onClick={handleStageClick}
                    className={`rounded-xl border overflow-hidden shadow-2xl absolute left-0 top-0 cursor-default ${chrome.panel}`}
                    style={{
                      width: BASE_WIDTH,
                      height: BASE_HEIGHT,
                      transform: `scale(${scale})`,
                      transformOrigin: "top left",
                    }}
                  >
                    <SlideRenderer 
                      style={currentStyle} 
                      scene={scene} 
                      beat={beat} 
                      language={language} 
                      onNavigate={(sNum, bNum) => navigate("lab", selectedStyleId, sNum, bNum)}
                    />
                  </div>
                </div>
              </div>

              {/* Core Beat stepping controller bar */}
              <div className={`w-full max-w-2xl mx-auto border p-3 rounded-2xl flex justify-between items-center gap-4 shadow-xl select-none z-10 shrink-0 ${chrome.panel}`}>
                <button
                  onClick={handlePrevBeat}
                  disabled={scene === 1 && beat === 0}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl disabled:opacity-30 disabled:pointer-events-none transition-all ${chrome.panelStrong} ${chrome.inactive}`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{t.previous}</span>
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
                              : isDarkTheme ? "w-2.5 bg-zinc-800" : "w-2.5 bg-slate-300"
                          }`}
                        />
                      );
                    })}
                  </div>
                  <span className={`font-mono text-xs ${chrome.muted} font-bold`}>
                    {formatMessage(t.beatCounter, { current: beat + 1, total: 3 })}
                  </span>
                </div>

                <button
                  onClick={handleNextBeat}
                  disabled={scene === 5 && beat === 2}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl text-black bg-cyan-500 hover:bg-cyan-400 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                  <span>{t.nextStep}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </main>
          </>
        )}

        {/* STYLE PRESET GRID VIEW CATALOG (Maximized edge-to-edge layout) */}
        {view === "grid" && (
          <main className={`flex-1 overflow-y-auto p-4 ${chrome.main}`}>
            <div className="mb-6">
              <h2 className={`text-xl md:text-2xl font-black ${chrome.text}`}>{t.gridTitle}</h2>
              <p className={`text-xs md:text-sm ${chrome.muted} mt-1`}>
                {t.gridDescription}
              </p>
            </div>
            {/* Real-time grids columns - Borderless maximized layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {localizedStyles.map((styleItem) => (
                <div 
                  key={styleItem.id}
                  onClick={() => navigate("lab", styleItem.id, 1, 0)}
                  className={`group relative ${chrome.card} rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500 cursor-pointer flex flex-col justify-between`}
                >
                  {/* Edge-to-edge aspect ratio frame preview */}
                  <div
                    data-testid="grid-thumbnail-frame"
                    className="w-full aspect-video bg-zinc-950 overflow-hidden relative"
                  >
                    {/* Render a real responsive 16:9 stage with NO border padding gaps */}
                    <div 
                      data-testid="grid-thumbnail-stage"
                      className="slide-stage absolute inset-0 w-full h-full transition-transform duration-500"
                    >
                      {/* Show density graduation: Scene 1 for Keynote (Low), Scene 3 for Hybrid, Scene 5 for Bento Report (High) */}
                      <SlideRenderer 
                        style={styleItem} 
                        scene={styleItem.density === "low" ? 1 : styleItem.density === "med" ? 3 : 5} 
                        beat={2} 
                        isThumbnail={true} 
                        language={language}
                      />
                    </div>
                  </div>

                  {/* Thumbnail Information strip */}
                  <div className={`px-4 py-3 border-t flex justify-between items-center gap-3 z-10 shrink-0 ${chrome.panel}`}>
                    <div className="min-w-0">
                      <div data-testid="grid-thumbnail-badges" className="mb-2 flex flex-wrap gap-1.5">
                        <span className="bg-black/90 text-[10px] font-mono text-zinc-100 px-2 py-0.5 rounded font-black">
                          ST {styleItem.id}
                        </span>
                        <span className="bg-cyan-500/90 text-[10px] font-mono text-black px-2 py-0.5 rounded font-black shadow">
                          {styleItem.densityLabel}
                        </span>
                      </div>
                      <p className={`text-xs font-black ${chrome.text} group-hover:text-cyan-400 transition-colors leading-none truncate`}>
                        {styleItem.name}
                      </p>
                      <span className={`text-[10px] ${chrome.faint} truncate block mt-1`}>
                        {styleItem.theme} • {t.sceneShort} {styleItem.density === "low" ? "1" : styleItem.density === "med" ? "3" : "5"}
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-cyan-400 transition-colors shrink-0 ml-4" />
                  </div>
                </div>
              ))}
            </div>
          </main>
        )}

        {/* BOARD VIEW KANBAN */}
        {view === "board" && (
          <main className={`flex-1 flex flex-col ${chrome.main} overflow-hidden p-4 md:p-6`}>
            <div className="mb-6 shrink-0">
              <h2 className={`text-xl md:text-2xl font-black ${chrome.text}`}>{t.boardTitle}</h2>
              <p className={`text-xs md:text-sm ${chrome.muted} mt-1`}>
                {t.boardDescription}
              </p>
            </div>
            {/* Horizontal Kanban board overflow system */}
            <div className="flex-1 flex gap-4 md:gap-6 overflow-x-auto pb-4 items-stretch select-none snap-x mandatory scroll-smooth">
              {/* LOW DENSITY COLUMN */}
              <div className={`w-[85vw] md:w-auto md:flex-1 min-w-[280px] sm:min-w-[340px] md:min-w-[360px] lg:min-w-[400px] shrink-0 snap-center border rounded-2xl p-4 flex flex-col h-full overflow-hidden ${chrome.panelSoft}`}>
                <div className={`flex items-center justify-between border-b ${isDarkTheme ? "border-zinc-800/80" : "border-slate-200"} pb-3 mb-4 shrink-0`}>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className={`font-bold text-sm ${chrome.text}`}>🟢 {t.lowColumn}</span>
                  </div>
                  <span className={`text-[10px] font-mono ${chrome.muted} px-2 py-0.5 rounded font-black ${isDarkTheme ? "bg-zinc-800" : "bg-slate-100"}`}>
                    {t.lowRange}
                  </span>
                </div>
                <div className="flex-1 overflow-y-auto flex flex-col gap-4 pr-1">
                  {localizedStyles.filter((s) => s.density === "low").map((styleItem) => (
                    <BoardCard key={styleItem.id} styleItem={styleItem} language={language} chrome={chrome} t={t} onSelect={() => navigate("lab", styleItem.id, 1, 0)} />
                  ))}
                </div>
              </div>

              {/* MED DENSITY COLUMN */}
              <div className={`w-[85vw] md:w-auto md:flex-1 min-w-[280px] sm:min-w-[340px] md:min-w-[360px] lg:min-w-[400px] shrink-0 snap-center border rounded-2xl p-4 flex flex-col h-full overflow-hidden ${chrome.panelSoft}`}>
                <div className={`flex items-center justify-between border-b ${isDarkTheme ? "border-zinc-800/80" : "border-slate-200"} pb-3 mb-4 shrink-0`}>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
                    <span className={`font-bold text-sm ${chrome.text}`}>🟡 {t.medColumn}</span>
                  </div>
                  <span className={`text-[10px] font-mono ${chrome.muted} px-2 py-0.5 rounded font-black ${isDarkTheme ? "bg-zinc-800" : "bg-slate-100"}`}>
                    {t.medRange}
                  </span>
                </div>
                <div className="flex-1 overflow-y-auto flex flex-col gap-4 pr-1">
                  {localizedStyles.filter((s) => s.density === "med").map((styleItem) => (
                    <BoardCard key={styleItem.id} styleItem={styleItem} language={language} chrome={chrome} t={t} onSelect={() => navigate("lab", styleItem.id, 3, 0)} />
                  ))}
                </div>
              </div>

              {/* HIGH DENSITY COLUMN */}
              <div className={`w-[85vw] md:w-auto md:flex-1 min-w-[280px] sm:min-w-[340px] md:min-w-[360px] lg:min-w-[400px] shrink-0 snap-center border rounded-2xl p-4 flex flex-col h-full overflow-hidden ${chrome.panelSoft}`}>
                <div className={`flex items-center justify-between border-b ${isDarkTheme ? "border-zinc-800/80" : "border-slate-200"} pb-3 mb-4 shrink-0`}>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                    <span className={`font-bold text-sm ${chrome.text}`}>🔵 {t.highColumn}</span>
                  </div>
                  <span className={`text-[10px] font-mono ${chrome.muted} px-2 py-0.5 rounded font-black ${isDarkTheme ? "bg-zinc-800" : "bg-slate-100"}`}>
                    {t.highRange}
                  </span>
                </div>
                <div className="flex-1 overflow-y-auto flex flex-col gap-4 pr-1">
                  {localizedStyles.filter((s) => s.density === "high").map((styleItem) => (
                    <BoardCard key={styleItem.id} styleItem={styleItem} language={language} chrome={chrome} t={t} onSelect={() => navigate("lab", styleItem.id, 5, 0)} />
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
function BoardCard({ styleItem, language, chrome, t, onSelect }) {
  return (
    <div 
      onClick={onSelect}
      className={`group rounded-xl border p-3 hover:border-cyan-500/50 hover:shadow-lg transition-all cursor-pointer flex flex-col gap-3 ${chrome.panel}`}
    >
      <div className="w-full aspect-video bg-zinc-950 overflow-hidden relative rounded-lg border border-zinc-850 flex items-center justify-center shrink-0">
        <div 
          className="slide-stage absolute inset-0 w-full h-full transition-transform duration-500"
        >
          <SlideRenderer 
            style={styleItem} 
            scene={styleItem.density === "low" ? 1 : styleItem.density === "med" ? 3 : 5} 
            beat={2} 
            isThumbnail={true} 
            language={language}
          />
        </div>
      </div>
      
      <div className="flex-1 min-w-0 w-full px-1">
        <div className="flex justify-between items-center gap-2">
          <p className={`text-xs md:text-sm font-black ${chrome.text} group-hover:text-cyan-400 transition-colors leading-none truncate`}>
            {styleItem.name}
          </p>
          <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-cyan-400 transition-colors shrink-0" />
        </div>
        <span className={`text-[10px] md:text-xs ${chrome.faint} truncate block mt-1.5`}>
          {styleItem.theme}
        </span>
      </div>
    </div>
  );
}
