export type { RadioGroupStyleConfig, RadioGroupSize } from "./default";
import type { RadioGroupStyleConfig } from "./default";

export const auroraStyle: RadioGroupStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center rounded-full border border-indigo-400/25 bg-indigo-950/50 transition-all duration-150 hover:border-teal-400/35 data-[checked]:border-teal-400/50 data-[checked]:shadow-[0_0_8px_rgba(45,212,191,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/40 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0a0e1f]",
  sizes: {
    sm: "size-[14px]",
    md: "size-[18px]",
    lg: "size-[22px]",
  },
  dot: "bg-gradient-to-br from-teal-400 to-violet-400",
  dotSizes: {
    sm: "size-[6px]",
    md: "size-[8px]",
    lg: "size-[10px]",
  },
  label: "text-sm text-indigo-200 group-hover:text-teal-100 transition-colors duration-150",
};
