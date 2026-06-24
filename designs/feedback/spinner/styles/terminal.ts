import type { SpinnerStyleConfig } from "./default";
export type { SpinnerStyleConfig, SpinnerSize } from "./default";

export const terminalStyle: SpinnerStyleConfig = {
  wrapper: "inline-flex items-center gap-2",
  svg: "animate-spin text-[#16A34A] dark:text-[#22C55E]",
  sizes: {
    xs: { svgSize: "12", strokeWidth: 2.5 },
    sm: { svgSize: "16", strokeWidth: 2.5 },
    md: { svgSize: "20", strokeWidth: 2.5 },
    lg: { svgSize: "28", strokeWidth: 2 },
    xl: { svgSize: "36", strokeWidth: 2 },
  },
  label: "font-mono text-sm font-bold text-[#065F46] dark:text-[#22C55E] uppercase tracking-wide",
};
