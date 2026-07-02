import { SLIDE_TRANSLATIONS_ZH_TIER_A } from "./slides.zh.tierA.js";
import { SLIDE_TRANSLATIONS_ZH_TIER_B } from "./slides.zh.tierB.js";
import { SLIDE_TRANSLATIONS_ZH_TIER_C } from "./slides.zh.tierC.js";

const SLIDE_TRANSLATIONS = {
  zh: {
    ...SLIDE_TRANSLATIONS_ZH_TIER_A,
    ...SLIDE_TRANSLATIONS_ZH_TIER_B,
    ...SLIDE_TRANSLATIONS_ZH_TIER_C,
  },
};

function mergeBeat(baseBeat, translatedBeat) {
  return translatedBeat ? { ...baseBeat, ...translatedBeat } : baseBeat;
}

function mergeScene(baseScene, translatedScene) {
  if (!translatedScene) return baseScene;

  return {
    ...baseScene,
    ...translatedScene,
    beats: baseScene.beats.map((beat) => (
      mergeBeat(beat, translatedScene.beats?.find((item) => item.id === beat.id))
    )),
  };
}

function mergeStyle(baseStyle, translatedStyle) {
  if (!translatedStyle) return baseStyle;

  return {
    ...baseStyle,
    ...translatedStyle,
    scenes: baseStyle.scenes.map((scene) => (
      mergeScene(scene, translatedStyle.scenes?.find((item) => item.id === scene.id))
    )),
  };
}

export function getLocalizedStyles(styles, language) {
  const translations = SLIDE_TRANSLATIONS[language];
  if (!translations) return styles;

  return styles.map((style) => mergeStyle(style, translations[style.id]));
}
