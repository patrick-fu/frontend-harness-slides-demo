// Bespoke Standalone Style Registry
import Style01, { getMetadata as getMeta01 } from "./Style01";
import Style02, { getMetadata as getMeta02 } from "./Style02";
import Style03, { getMetadata as getMeta03 } from "./Style03";
import Style04, { getMetadata as getMeta04 } from "./Style04";
import Style05, { getMetadata as getMeta05 } from "./Style05";
import Style06, { getMetadata as getMeta06 } from "./Style06";
import Style07, { getMetadata as getMeta07 } from "./Style07";
import Style08, { getMetadata as getMeta08 } from "./Style08";
import Style09, { getMetadata as getMeta09 } from "./Style09";
import Style10, { getMetadata as getMeta10 } from "./Style10";
import Style11, { getMetadata as getMeta11 } from "./Style11";
import Style12, { getMetadata as getMeta12 } from "./Style12";
import Style13, { getMetadata as getMeta13 } from "./Style13";
import Style14, { getMetadata as getMeta14 } from "./Style14";
import Style15, { getMetadata as getMeta15 } from "./Style15";
import Style16, { getMetadata as getMeta16 } from "./Style16";
import Style17, { getMetadata as getMeta17 } from "./Style17";
import Style18, { getMetadata as getMeta18 } from "./Style18";
import Style19, { getMetadata as getMeta19 } from "./Style19";
import Style20, { getMetadata as getMeta20 } from "./Style20";
import Style21, { getMetadata as getMeta21 } from "./Style21";
import Style22, { getMetadata as getMeta22 } from "./Style22";
import Style23, { getMetadata as getMeta23 } from "./Style23";
import Style24, { getMetadata as getMeta24 } from "./Style24";

export const STYLES_REGISTRY = [
  { id: "01", Component: Style01, getMetadata: getMeta01 },
  { id: "02", Component: Style02, getMetadata: getMeta02 },
  { id: "03", Component: Style03, getMetadata: getMeta03 },
  { id: "04", Component: Style04, getMetadata: getMeta04 },
  { id: "05", Component: Style05, getMetadata: getMeta05 },
  { id: "06", Component: Style06, getMetadata: getMeta06 },
  { id: "07", Component: Style07, getMetadata: getMeta07 },
  { id: "08", Component: Style08, getMetadata: getMeta08 },
  { id: "09", Component: Style09, getMetadata: getMeta09 },
  { id: "10", Component: Style10, getMetadata: getMeta10 },
  { id: "11", Component: Style11, getMetadata: getMeta11 },
  { id: "12", Component: Style12, getMetadata: getMeta12 },
  { id: "13", Component: Style13, getMetadata: getMeta13 },
  { id: "14", Component: Style14, getMetadata: getMeta14 },
  { id: "15", Component: Style15, getMetadata: getMeta15 },
  { id: "16", Component: Style16, getMetadata: getMeta16 },
  { id: "17", Component: Style17, getMetadata: getMeta17 },
  { id: "18", Component: Style18, getMetadata: getMeta18 },
  { id: "19", Component: Style19, getMetadata: getMeta19 },
  { id: "20", Component: Style20, getMetadata: getMeta20 },
  { id: "21", Component: Style21, getMetadata: getMeta21 },
  { id: "22", Component: Style22, getMetadata: getMeta22 },
  { id: "23", Component: Style23, getMetadata: getMeta23 },
  { id: "24", Component: Style24, getMetadata: getMeta24 },
];

export const STYLES = STYLES_REGISTRY.map((item) => item.getMetadata("en"));

export const STAGE = { width: 1920, height: 1080 };

export function findStyle(id) {
  return STYLES.find((style) => style.id === id) || STYLES[0];
}

export function clampBeat(style, sceneId, beat) {
  const scene = style.scenes.find((s) => s.id === sceneId) || style.scenes[0];
  const maxBeat = (scene && scene.beats) ? scene.beats.length - 1 : 2;
  return Math.max(0, Math.min(maxBeat, Number.isFinite(beat) ? beat : 0));
}
