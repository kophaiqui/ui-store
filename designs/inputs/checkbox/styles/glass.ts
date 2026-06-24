export type { CheckboxStyleConfig, CheckboxSize } from "./default";
import type { CheckboxStyleConfig } from "./default";

export const glassStyle: CheckboxStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center border border-black/15 bg-black/5 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.60)] transition-all duration-150 hover:border-black/25 data-[checked]:border-sky-500/50 data-[checked]:bg-sky-500/15 dark:border-white/15 dark:bg-white/6 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_2px_3px_rgba(0,0,0,0.2)] dark:hover:border-white/25 dark:data-[checked]:border-sky-400/55 dark:data-[checked]:bg-sky-400/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 dark:focus-visible:ring-sky-400/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40",
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
  indicator: "flex items-center justify-center text-sky-600 dark:text-sky-300",
  label: "text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-150 leading-none",
  description: "text-xs text-foreground/50 leading-relaxed",
};
