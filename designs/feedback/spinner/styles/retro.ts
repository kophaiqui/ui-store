import type { SpinnerStyleConfig } from "./default";
export type { SpinnerStyleConfig, SpinnerSize } from "./default";

export const retroStyle: SpinnerStyleConfig = {
  wrapper: "inline-flex items-center gap-2",
  svg: "animate-spin text-[#e8743b]",
  sizes: {
    xs: { svgSize: "12", strokeWidth: 2.5 },
    sm: { svgSize: "16", strokeWidth: 2.5 },
    md: { svgSize: "20", strokeWidth: 2.5 },
    lg: { svgSize: "28", strokeWidth: 2 },
    xl: { svgSize: "36", strokeWidth: 2 },
  },
  label: "text-sm font-bold text-[#2c1a0e] uppercase tracking-wide",
};
