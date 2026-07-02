import React from "react";
import { HelpCircle } from "lucide-react";
import { MetaphorTierA } from "./MetaphorTierA";
import { MetaphorTierB } from "./MetaphorTierB";
import { MetaphorTierC } from "./MetaphorTierC";

/**
 * VisualMetaphorEngine
 * 
 * Main dispatcher delegating layout and visual rendering across three distinct motion tiers:
 * - Tier A (Styles 01-08): Spring, kinetic, wiggling, highly playful keynote styles.
 * - Tier B (Styles 09-16): Linear mechanical flow-guidance pipeline tracks.
 * - Tier C (Styles 17-24): Purely static, print-aligned, clean editorial text reports.
 */
export function VisualMetaphorEngine({ style, scene, beat, isThumbnail = false }) {
  const styleNum = parseInt(style.id, 10);

  if (styleNum <= 8) {
    return <MetaphorTierA style={style} scene={scene} beat={beat} isThumbnail={isThumbnail} />;
  }

  if (styleNum > 8 && styleNum <= 16) {
    return <MetaphorTierB style={style} scene={scene} beat={beat} isThumbnail={isThumbnail} />;
  }

  if (styleNum > 16) {
    return <MetaphorTierC style={style} scene={scene} beat={beat} isThumbnail={isThumbnail} />;
  }

  return (
    <div className="w-[10cqw] h-[10cqw] bg-slate-800 flex items-center justify-center rounded">
      <HelpCircle className="w-8 h-8 text-slate-600 animate-pulse" />
    </div>
  );
}
