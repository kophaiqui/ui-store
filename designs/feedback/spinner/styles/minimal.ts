export type { SpinnerStyleConfig, SpinnerSize } from "./default";
import type { SpinnerStyleConfig } from "./default";

export const minimalStyle: SpinnerStyleConfig = {
  wrapper: "inline-flex items-center gap-2",
  svg: "animate-spin text-foreground",
  sizes: {
    xs: { svgSize: "12", strokeWidth: 1.5 },
    sm: { svgSize: "16", strokeWidth: 1.5 },
    md: { svgSize: "20", strokeWidth: 1.5 },
    lg: { svgSize: "28", strokeWidth: 1.5 },
    xl: { svgSize: "36", strokeWidth: 1.5 },
  },
  label: "text-sm text-muted-foreground",
};
