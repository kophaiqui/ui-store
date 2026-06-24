export type { RadioGroupStyleConfig, RadioGroupSize } from "./default";
import type { RadioGroupStyleConfig } from "./default";

export const glassStyle: RadioGroupStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center rounded-full border border-black/12 bg-black/5 backdrop-blur-sm transition-all duration-150 hover:border-black/20 data-[checked]:border-sky-500/50 dark:border-white/15 dark:bg-white/5 dark:hover:border-white/25 dark:data-[checked]:border-sky-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 dark:focus-visible:ring-sky-400/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background",
  sizes: { sm: "size-[14px]", md: "size-[18px]", lg: "size-[22px]" },
  dot: "bg-sky-500 dark:bg-sky-400",
  dotSizes: { sm: "size-[6px]", md: "size-[8px]", lg: "size-[10px]" },
  label: "text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-150",
};
