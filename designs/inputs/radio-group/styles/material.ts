export type { RadioGroupStyleConfig, RadioGroupSize } from "./default";
import type { RadioGroupStyleConfig } from "./default";

export const materialStyle: RadioGroupStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center rounded-full border border-violet-300/60 bg-white transition-all duration-150 hover:border-violet-400 data-[checked]:border-violet-600 dark:border-violet-700/40 dark:bg-violet-950/20 dark:hover:border-violet-500 dark:data-[checked]:border-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background",
  sizes: {
    sm: "size-[14px]",
    md: "size-[18px]",
    lg: "size-[22px]",
  },
  dot: "bg-violet-600 dark:bg-violet-400",
  dotSizes: {
    sm: "size-[6px]",
    md: "size-[8px]",
    lg: "size-[10px]",
  },
  label: "text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-150",
};
