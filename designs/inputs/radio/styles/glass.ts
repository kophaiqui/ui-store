export type { RadioStyleConfig, RadioSize } from "./default";
import type { RadioStyleConfig } from "./default";

export const glassStyle: RadioStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/6 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_2px_3px_rgba(0,0,0,0.2)] transition-all duration-150 hover:border-white/25 data-[checked]:border-sky-400/55 data-[checked]:bg-sky-400/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40",
  sizes: { sm: "size-[14px]", md: "size-[18px]", lg: "size-[22px]" },
  dot: "rounded-full bg-sky-400 transition-transform duration-100 scale-0 data-[checked]:scale-100",
  dotSizes: { sm: "size-[6px]", md: "size-[8px]", lg: "size-[10px]" },
  label: "text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-150 leading-none",
  description: "text-xs text-foreground/50 leading-relaxed",
};
