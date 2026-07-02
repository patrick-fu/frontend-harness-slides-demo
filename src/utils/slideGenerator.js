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

// Micro-animation injector to give rich details matching the topic
export function enrichHTML(styleId, html, currentBeat, itemBeatIndex) {
  if (!html) return html;
  let enriched = html;

  // Style 1 (Quantum Bloch Sphere Keynote)
  if (styleId === 1) {
    enriched = enriched.replace('<svg ', '<svg class="animate-rotate-slow" ');
  }

  // Style 2 (Sketch Board Emoji)
  if (styleId === 2) {
    if (itemBeatIndex === 1) {
      enriched = enriched.replace('class="', 'class="animate-float-sticky-1 ');
    } else if (itemBeatIndex === 2) {
      enriched = enriched.replace('class="', 'class="animate-float-sticky-2 ');
    }
    enriched = enriched.replace('🤖', '<span class="inline-block animate-wiggle-nod">🤖</span>');
  }

  // Style 3 (Dialogue Stage)
  if (styleId === 3) {
    if (currentBeat === itemBeatIndex) {
      enriched = enriched.replace('class="', 'class="animate-wiggle-nod ');
    }
  }

  // Style 4 (Kinetic Type Punchline)
  if (styleId === 4) {
    if (currentBeat === itemBeatIndex) {
      enriched = enriched.replace('class="', 'class="animate-mechanical-shake animate-kinetic-punch ');
    }
  }

  // Style 5 (Object Metaphor Hero)
  if (styleId === 5) {
    if (currentBeat === itemBeatIndex) {
      enriched = enriched.replace('class="', 'class="animate-bounce-jump ');
    }
  }

  // Style 6 (Blackboard Chalk Talk)
  if (styleId === 6) {
    enriched = enriched.replace('class="', 'class="animate-chalk-wobble ');
  }

  // Style 7 (Arcade Boss Fight)
  if (styleId === 7) {
    if (itemBeatIndex === 1) {
      enriched = enriched.replace('class="', 'class="animate-wiggle-nod ');
    }
    if (itemBeatIndex === 3 && currentBeat === 3) {
      enriched = enriched.replace('class="', 'class="animate-damage-flash animate-screen-shake ');
    }
  }

  // Style 8 (Spotlight Quote Poster)
  if (styleId === 8) {
    if (currentBeat === itemBeatIndex) {
      enriched = enriched.replace('class="', 'class="animate-spotlight ');
    }
  }

  return enriched;
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
      const textAnim = getAnimClass(style.id, 2);
      
      const b1 = sceneContent.low.beat1;
      const b2 = sceneContent.low.beat2;
      const b3 = sceneContent.low.beat3;

      let b1Html = '';
      let b2Html = '';
      let b3Html = '';
      let arrow1Html = '';
      let arrow2Html = '';

      if (b1) {
        const vHtml1 = enrichHTML(style.id, b1.visualHtml || '', beat, 1);
        const subdescHtml1 = b1.subdesc ? `<p class="text-[0.9cqw] font-light mt-[0.3cqw]" style="color: ${mutedColor}">${b1.subdesc}</p>` : '';
        const punchlineHtml1 = b1.punchline ? `<p class="text-[1cqw] font-semibold mt-[0.6cqw] px-[1cqw] py-[0.4cqw] rounded-lg text-center" style="color: ${inkColor}; background-color: ${accentColor}22; border: 1px solid ${accentColor}44">${b1.punchline}</p>` : '';
        
        const dimClass = (beat === 1) ? 'opacity-100 scale-100' : 'opacity-45 scale-95 filter-grayscale-[30%] blur-[0.3px]';
        const itemAnim = getAnimClass(style.id, 1);

        b1Html = `
          <div class="flex-1 flex flex-col items-center text-center p-[1.5cqw] rounded-xl border border-transparent transition-all duration-700 ${dimClass} ${itemAnim}">
            <div class="h-[8cqw] flex items-center justify-center mb-[1cqw] w-full">
              ${vHtml1}
            </div>
            <h3 class="text-[1.4cqw] font-bold tracking-tight mb-[0.4cqw]" style="color: ${inkColor}">${b1.title}</h3>
            <p class="text-[1cqw] font-light max-w-[25cqw] leading-relaxed" style="color: ${mutedColor}">${b1.desc}</p>
            ${subdescHtml1}
            ${punchlineHtml1}
          </div>
        `;
      }

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

        b2Html = `
          <div class="flex-1 flex flex-col items-center text-center p-[1.5cqw] rounded-xl border border-transparent transition-all duration-700 ${stateClass} ${itemAnim}">
            <div class="h-[8cqw] flex items-center justify-center mb-[1cqw] w-full">
              ${vHtml2}
            </div>
            <h3 class="text-[1.4cqw] font-bold tracking-tight mb-[0.4cqw]" style="color: ${inkColor}">${b2.title}</h3>
            <p class="text-[1cqw] font-light max-w-[25cqw] leading-relaxed" style="color: ${mutedColor}">${b2.desc}</p>
            ${subdescHtml2}
            ${punchlineHtml2}
          </div>
        `;

        const arrowState = (beat >= 2) ? 'opacity-30 scale-100 w-auto px-[1cqw]' : 'opacity-0 scale-50 w-0 h-0 overflow-hidden m-0 p-0';
        arrow1Html = `<div class="text-[2cqw] text-current shrink-0 self-center animate-match-1 transition-all duration-700 ${arrowState}">→</div>`;
      }

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

        b3Html = `
          <div class="flex-1 flex flex-col items-center text-center p-[1.5cqw] rounded-xl border border-transparent transition-all duration-700 ${stateClass} ${itemAnim}">
            <div class="h-[8cqw] flex items-center justify-center mb-[1cqw] w-full">
              ${vHtml3}
            </div>
            <h3 class="text-[1.4cqw] font-bold tracking-tight mb-[0.4cqw]" style="color: ${inkColor}">${b3.title}</h3>
            <p class="text-[1cqw] font-light max-w-[25cqw] leading-relaxed" style="color: ${mutedColor}">${b3.desc}</p>
            ${subdescHtml3}
            ${punchlineHtml3}
          </div>
        `;

        const arrowState = (beat >= 3) ? 'opacity-30 scale-100 w-auto px-[1cqw]' : 'opacity-0 scale-50 w-0 h-0 overflow-hidden m-0 p-0';
        arrow2Html = `<div class="text-[2cqw] text-current shrink-0 self-center animate-match-2 transition-all duration-700 ${arrowState}">→</div>`;
      }

      return `
        <div class="w-full h-full p-[5cqw] flex flex-col justify-between select-none ${fontClass}" style="background-color: ${canvasBg}; color: ${inkColor}">
          <div class="flex-1 flex flex-col justify-center space-y-[2cqw]">
            <div class="text-center space-y-[0.5cqw] ${textAnim}">
              <h2 class="text-[2.5cqw] font-bold leading-tight" style="color: ${inkColor}">${sceneTitle}</h2>
              <p class="text-[1.1cqw]" style="color: ${mutedColor}">${sceneSubtitle}</p>
              ${beatBadge}
            </div>
            <div class="flex items-stretch justify-center gap-[1cqw] max-w-[62cqw] mx-auto w-full transition-all duration-500">
              ${b1Html}
              ${arrow1Html}
              ${b2Html}
              ${arrow2Html}
              ${b3Html}
            </div>
          </div>
          <div class="flex justify-between items-center text-[1cqw] font-mono ${footerAnim}" style="color: ${mutedColor}">
            <span>${style.name.toUpperCase()}</span>
            <span>${densityMeta.label}</span>
          </div>
        </div>
      `;
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

export function getSlideData(style, mode = 'story', density = 'low', scene = 1, beat = 1) {
  if (mode === 'specs') {
    return {
      isSpecs: true,
      html: getSlideHTML(style, mode, density, scene, beat)
    };
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

  return {
    isSpecs: false,
    fontClass,
    canvasBg,
    inkColor,
    accentColor,
    mutedColor,
    sceneContent,
    beatKey,
    densityMeta,
    headerAnim,
    footerAnim,
    sceneTitle,
    sceneSubtitle,
    beatBadge,
    density
  };
}

export function stripPastAnimations(html, currentBeat, styleId) {
  if (!html) return html;
  let result = html;

  if (currentBeat > 1) {
    if (styleId >= 17) {
      if (currentBeat >= 2) {
        result = result.replace(/\banimate-subtle-1\b/g, '');
      }
      if (currentBeat >= 3) {
        result = result.replace(/\banimate-subtle-2\b/g, '');
      }
    } else if (styleId >= 9) {
      if (currentBeat >= 2) {
        result = result.replace(/\banimate-match-1\b/g, '');
      }
      if (currentBeat >= 3) {
        result = result.replace(/\banimate-match-2\b/g, '');
      }
    } else {
      if (currentBeat >= 2) {
        result = result.replace(/\banimate-fade-up\b/g, '');
      }
      if (currentBeat >= 3) {
        result = result.replace(/\banimate-fade-up-delay-1\b/g, '');
      }
    }
  }

  return result;
}

