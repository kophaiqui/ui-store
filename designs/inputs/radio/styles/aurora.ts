export type { RadioStyleConfig, RadioSize } from "./default";
import type { RadioStyleConfig } from "./default";

export const auroraStyle: RadioStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center rounded-full border border-indigo-400/25 bg-indigo-950/50 transition-all duration-150 hover:border-teal-400/35 data-[checked]:border-teal-400/50 data-[checked]:bg-teal-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/40 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0a0e1f] disabled:pointer-events-none disabled:opacity-40",
  sizes: {
    sm: "size-[14px]",
    md: "size-[18px]",
    lg: "size-[22px]",
  },
  dot: "rounded-full bg-gradient-to-br from-teal-400 to-violet-400 shadow-[0_0_6px_rgba(45,212,191,0.5)] transition-transform duration-100 scale-0 data-[checked]:scale-100",
  dotSizes: {
    sm: "size-[6px]",
    md: "size-[8px]",
    lg: "size-[10px]",
  },
  label: "text-sm text-indigo-200 group-hover:text-teal-100 transition-colors duration-150 leading-none",
  description: "text-xs text-indigo-300/50 leading-relaxed",
};
