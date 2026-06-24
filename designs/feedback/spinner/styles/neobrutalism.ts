import type { SpinnerStyleConfig } from "./default";
export type { SpinnerStyleConfig };

export const neobrutalismStyle: SpinnerStyleConfig = {
  wrapper: "inline-flex items-center gap-2",
  svg: "animate-spin text-zinc-950 dark:text-white",
  sizes: {
    xs: { svgSize: "12", strokeWidth: 2.5 },
    sm: { svgSize: "16", strokeWidth: 2.5 },
    md: { svgSize: "20", strokeWidth: 2.5 },
    lg: { svgSize: "28", strokeWidth: 2.5 },
    xl: { svgSize: "36", strokeWidth: 2.5 },
  },
  label: "text-sm font-black text-zinc-950 dark:text-white uppercase tracking-wide",
};
