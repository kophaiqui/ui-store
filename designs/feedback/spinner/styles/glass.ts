export type { SpinnerStyleConfig, SpinnerSize } from "./default";
import type { SpinnerStyleConfig } from "./default";

export const glassStyle: SpinnerStyleConfig = {
  wrapper: "inline-flex items-center gap-2",
  svg: "animate-spin text-sky-400/70",
  sizes: {
    xs: { svgSize: "12", strokeWidth: 2 },
    sm: { svgSize: "16", strokeWidth: 1.8 },
    md: { svgSize: "20", strokeWidth: 1.6 },
    lg: { svgSize: "28", strokeWidth: 1.5 },
    xl: { svgSize: "36", strokeWidth: 1.4 },
  },
  label: "text-sm text-foreground/60",
};
