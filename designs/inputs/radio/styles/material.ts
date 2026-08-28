export type { RadioStyleConfig, RadioSize } from "./default";
import type { RadioStyleConfig } from "./default";

export const materialStyle: RadioStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center rounded-full border border-violet-300/60 bg-white transition-all duration-150 hover:border-violet-400 data-[checked]:border-violet-600 data-[checked]:bg-violet-50 dark:border-violet-700/40 dark:bg-violet-950/20 dark:hover:border-violet-500 dark:data-[checked]:border-violet-500 dark:data-[checked]:bg-violet-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40",
  sizes: {
    sm: "size-[14px]",
    md: "size-[18px]",
    lg: "size-[22px]",
  },
  dot: "rounded-full bg-violet-600 dark:bg-violet-400 transition-transform duration-100 scale-0 data-[checked]:scale-100",
  dotSizes: {
    sm: "size-[6px]",
    md: "size-[8px]",
    lg: "size-[10px]",
  },
  label: "text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-150 leading-none",
  description: "text-xs text-foreground/50 leading-relaxed",
};
