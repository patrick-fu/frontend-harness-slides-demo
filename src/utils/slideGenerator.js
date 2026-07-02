import { stylesContent } from '../data/stylesContent.js';

export function getAnimClass(styleId, tier) {
  if (styleId >= 17) {
    if (tier === 1) return 'animate-subtle-1';
    if (tier === 2) return 'animate-subtle-2';
    if (tier === 3) return 'animate-subtle-3';
    return 'animate-subtle-4';
  }
  if (styleId >= 9) {
    if (tier === 1) return 'animate-match-1';
    if (tier === 2) return 'animate-match-2';
    if (tier === 3) return 'animate-match-3';
    return 'animate-match-4';
  }
  if (tier === 1) return 'animate-fade-up';
  if (tier === 2) return 'animate-fade-up-delay-1';
  return 'animate-fade-up-delay-2';
}

export function getSceneContent(styleId, scene) {
  const styleContent = stylesContent[styleId];
  if (!styleContent) return null;
  return scene === 1 ? styleContent.scene1 : styleContent.scene2;
}

export function getBeatKey(beat) {
  return `beat${beat}`;
}

export function getDensityMeta(density, scene) {
  const sceneLabel = scene === 1 ? 'SCENE 1 · CONCEPT' : 'SCENE 2 · HANDOFF';
  if (density === 'low') return { label: `LOW DENSITY · ${sceneLabel}`, layout: 'OPENER' };
  if (density === 'med') return { label: `MED DENSITY · ${sceneLabel}`, layout: 'TIMELINE' };
  return { label: `HIGH DENSITY · ${sceneLabel}`, layout: 'BENTO GRID' };
}

// Dynamic Slide Generator — scene/beat progressive storytelling
export function getSlideHTML(style, mode = 'story', density = 'low', scene = 1, beat = 1) {
  if (mode === 'specs') {
    const colorsHtml = style.specs.palette.map(color => `
      <div class="flex flex-col items-center gap-[0.3cqw]">
        <div class="w-[3.5cqw] h-[3.5cqw] rounded-lg border border-slate-200 shadow-sm" style="background-color: ${color}"></div>
        <span class="text-[0.9cqw] font-mono text-slate-500">${color}</span>
      </div>
    `).join('');

    return `
      <div class="w-full h-full bg-slate-50 text-slate-800 p-[5cqw] flex flex-col justify-between select-none">
        <div class="border-b border-slate-200 pb-[1.5cqw]">
          <span class="text-[1.2cqw] font-mono text-slate-400 uppercase tracking-wider">STYLE SPECIFICATION SHEET</span>
          <h2 class="text-[3cqw] font-bold text-slate-900 mt-[0.5cqw]">${style.name}</h2>
        </div>
        <div class="grid grid-cols-2 gap-[4cqw] py-[2cqw] text-[1.4cqw]">
          <div class="space-y-[1.5cqw]">
            <div>
              <span class="font-bold text-slate-400 uppercase tracking-wider text-[1.1cqw] block">🎨 COLOR PALETTE</span>
              <div class="flex gap-[1cqw] mt-[0.8cqw]">${colorsHtml}</div>
            </div>
            <div>
              <span class="font-bold text-slate-400 uppercase tracking-wider text-[1.1cqw] block">🔤 TYPOGRAPHY</span>
              <p class="text-slate-700 font-medium mt-[0.5cqw]">${style.specs.font}</p>
            </div>
          </div>
          <div class="space-y-[1.5cqw] border-l border-slate-200 pl-[4cqw]">
            <div>
              <span class="font-bold text-slate-400 uppercase tracking-wider text-[1.1cqw] block">🧩 VISUAL ELEMENTS</span>
              <p class="text-slate-600 leading-relaxed mt-[0.5cqw]">${style.specs.elements}</p>
            </div>
            <div>
              <span class="font-bold text-slate-400 uppercase tracking-wider text-[1.1cqw] block">📊 NATIVE DENSITY</span>
              <span class="px-[1.5cqw] py-[0.3cqw] bg-slate-200 text-slate-800 rounded font-mono text-[1.1cqw] inline-block mt-[0.5cqw]">${style.density}</span>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center text-[1.1cqw] text-slate-400 font-mono pt-[1.5cqw] border-t border-slate-200">
          <span>STYLE SPECIFICATION</span>
          <span>STYLE #${String(style.id).padStart(2, '0')}</span>
        </div>
      </div>
    `;
  }

  let fontClass = 'font-sans';
  const fontLower = style.specs.font.toLowerCase();
  if (fontLower.includes('caveat') || fontLower.includes('sketch') || fontLower.includes('handwriting')) fontClass = 'font-sketch';
  else if (fontLower.includes('fira') || fontLower.includes('mono')) fontClass = 'font-mono';
  else if (fontLower.includes('playfair') || fontLower.includes('serif')) fontClass = 'font-serif';
  else if (fontLower.includes('vt323') || fontLower.includes('arcade') || fontLower.includes('retro')) fontClass = 'font-arcade';
  else if (fontLower.includes('cormorant') || fontLower.includes('garamond')) fontClass = 'font-cormorant';

  const canvasBg = style.specs.palette[0];
  const inkColor = style.specs.palette[1];
  const accentColor = style.specs.palette[2] || '#3b82f6';
  const mutedColor = style.specs.palette[3] || style.specs.palette[1] + '80';

  const sceneContent = getSceneContent(style.id, scene);
  const beatKey = getBeatKey(beat);
  const densityMeta = getDensityMeta(density, scene);
  const headerAnim = getAnimClass(style.id, 2);
  const footerAnim = getAnimClass(style.id, 3);

  const sceneTitle = sceneContent?.title || style.topic;
  const sceneSubtitle = sceneContent?.subtitle || style.desc.split('.')[0] + '.';

  const beatBadge = `
    <div class="flex items-center justify-center gap-[0.8cqw] text-[0.9cqw] font-mono uppercase tracking-wider" style="color: ${mutedColor}">
      <span class="px-[1cqw] py-[0.2cqw] rounded-full border" style="border-color: ${accentColor}40; color: ${accentColor}">Beat ${beat}/3</span>
      <span>·</span>
      <span>${densityMeta.layout}</span>
    </div>
  `;

  if (sceneContent) {
    if (density === 'low') {
      const b = sceneContent.low[beatKey];
      if (b) {
        const textAnim = getAnimClass(style.id, 2);
        const subdescHtml = b.subdesc ? `<p class="text-[1.2cqw] font-light max-w-[45cqw] mt-[0.5cqw]" style="color: ${mutedColor}">${b.subdesc}</p>` : '';
        const punchlineHtml = b.punchline ? `<p class="text-[1.4cqw] font-semibold max-w-[45cqw] mt-[1cqw] px-[1.5cqw] py-[0.6cqw] rounded-lg" style="color: ${inkColor}; background-color: ${accentColor}22; border: 1px solid ${accentColor}44">${b.punchline}</p>` : '';

        return `
          <div class="w-full h-full p-[5cqw] flex flex-col justify-between select-none ${fontClass}" style="background-color: ${canvasBg}; color: ${inkColor}">
            <div class="flex-1 flex flex-col justify-center items-center text-center space-y-[2cqw]">
              ${b.visualHtml || ''}
              <div class="space-y-[0.6cqw] ${textAnim}">
                <h2 class="text-[2.8cqw] font-bold tracking-tight max-w-[52cqw] leading-tight" style="color: ${inkColor}">${b.title || sceneTitle}</h2>
                <p class="text-[1.4cqw] font-light max-w-[45cqw]" style="color: ${mutedColor}">${b.desc || sceneSubtitle}</p>
                ${subdescHtml}
                ${punchlineHtml}
              </div>
              ${beatBadge}
            </div>
            <div class="flex justify-between items-center text-[1cqw] font-mono ${footerAnim}" style="color: ${mutedColor}">
              <span>${style.name.toUpperCase()}</span>
              <span>${densityMeta.label}</span>
            </div>
          </div>
        `;
      }
    }

    if (density === 'med') {
      const flowHtml = sceneContent.med[beatKey];
      if (flowHtml) {
        return `
          <div class="w-full h-full p-[5cqw] flex flex-col justify-between select-none ${fontClass}" style="background-color: ${canvasBg}; color: ${inkColor}">
            <div class="flex-1 flex flex-col justify-center space-y-[2.5cqw]">
              <div class="text-center space-y-[0.5cqw] ${headerAnim}">
                <h2 class="text-[2.4cqw] font-bold leading-tight" style="color: ${inkColor}">${sceneTitle}</h2>
                <p class="text-[1.1cqw]" style="color: ${mutedColor}">${sceneSubtitle}</p>
                ${beatBadge}
              </div>
              ${flowHtml}
            </div>
            <div class="flex justify-between items-center text-[1cqw] font-mono ${footerAnim}" style="color: ${mutedColor}">
              <span>${style.name.toUpperCase()}</span>
              <span>${densityMeta.label}</span>
            </div>
          </div>
        `;
      }
    }

    if (density === 'high') {
      const bentoHtml = sceneContent.high[beatKey];
      if (bentoHtml) {
        return `
          <div class="w-full h-full p-[5cqw] flex flex-col justify-between select-none ${fontClass}" style="background-color: ${canvasBg}; color: ${inkColor}">
            <div class="flex-1 flex flex-col justify-center space-y-[2cqw]">
              <div class="text-center space-y-[0.5cqw] ${headerAnim}">
                <h2 class="text-[2.2cqw] font-bold leading-tight" style="color: ${inkColor}">${sceneTitle}</h2>
                <p class="text-[1.05cqw]" style="color: ${mutedColor}">${sceneSubtitle}</p>
                ${beatBadge}
              </div>
              ${bentoHtml}
            </div>
            <div class="flex justify-between items-center text-[1cqw] font-mono ${footerAnim}" style="color: ${mutedColor}">
              <span>${style.name.toUpperCase()}</span>
              <span>${densityMeta.label}</span>
            </div>
          </div>
        `;
      }
    }
  }

  return `
    <div class="w-full h-full p-[5cqw] flex flex-col justify-center items-center select-none ${fontClass}" style="background-color: ${canvasBg}; color: ${inkColor}">
      <h2 class="text-[2.5cqw] font-bold">${style.topic}</h2>
      <p class="text-[1.2cqw] mt-[1cqw]" style="color: ${mutedColor}">Content pending for Style #${style.id} · Scene ${scene} · Beat ${beat}</p>
    </div>
  `;
}
