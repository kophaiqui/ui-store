export type { CheckboxStyleConfig, CheckboxSize } from "./default";
import type { CheckboxStyleConfig } from "./default";

export const materialStyle: CheckboxStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center border border-violet-300/60 bg-white transition-all duration-150 hover:border-violet-400 data-[checked]:border-violet-600 data-[checked]:bg-violet-600 dark:border-violet-700/40 dark:bg-violet-950/20 dark:hover:border-violet-500 dark:data-[checked]:border-violet-500 dark:data-[checked]:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40",
  sizes: {
    sm: "size-[14px] rounded-[3px]",
    md: "size-[18px] rounded",
    lg: "size-[22px] rounded-md",
  },
  checkSizes: {
    sm: { w: 8,  h: 6, d: "M1 3L2.8 5L7 1" },
    md: { w: 10, h: 7, d: "M1 3.5L3.5 6L9 1" },
    lg: { w: 12, h: 9, d: "M1.5 4.5L4.5 7.5L10.5 1.5" },
  },
  indicator: "flex items-center justify-center text-white",
  label: "text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-150 leading-none",
  description: "text-xs text-foreground/50 leading-relaxed",
};
