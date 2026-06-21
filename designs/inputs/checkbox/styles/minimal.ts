export type { CheckboxStyleConfig, CheckboxSize } from "./default";
import type { CheckboxStyleConfig } from "./default";

export const minimalStyle: CheckboxStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center border border-border bg-transparent transition-all duration-150 hover:border-foreground/40 data-[checked]:border-foreground data-[checked]:bg-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/20 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40 rounded-none",
  sizes: {
    sm: "size-[14px]",
    md: "size-[18px]",
    lg: "size-[22px]",
  },
  checkSizes: {
    sm: { w: 8,  h: 6, d: "M1 3L2.8 5L7 1" },
    md: { w: 10, h: 7, d: "M1 3.5L3.5 6L9 1" },
    lg: { w: 12, h: 9, d: "M1.5 4.5L4.5 7.5L10.5 1.5" },
  },
  indicator: "flex items-center justify-center text-background",
  label: "text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-150 leading-none",
  description: "text-xs text-muted-foreground leading-relaxed",
};
