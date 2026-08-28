import type { SpinnerStyleConfig } from "./default";
export type { SpinnerStyleConfig, SpinnerSize } from "./default";

export const pixelStyle: SpinnerStyleConfig = {
  wrapper: "inline-flex items-center gap-2",
  svg: "animate-spin text-[#06d6a0]",
  sizes: {
    xs: { svgSize: "12", strokeWidth: 3 },
    sm: { svgSize: "16", strokeWidth: 3 },
    md: { svgSize: "20", strokeWidth: 3 },
    lg: { svgSize: "28", strokeWidth: 2.5 },
    xl: { svgSize: "36", strokeWidth: 2.5 },
  },
  label: "font-mono text-sm font-bold text-[#06d6a0] uppercase tracking-widest",
};
