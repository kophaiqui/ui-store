export type { CheckboxStyleConfig, CheckboxSize } from "./default";
import type { CheckboxStyleConfig } from "./default";

export const auroraStyle: CheckboxStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center border border-indigo-400/25 bg-indigo-950/50 transition-all duration-150 hover:border-teal-400/35 data-[checked]:border-teal-400/50 data-[checked]:bg-gradient-to-br data-[checked]:from-teal-500 data-[checked]:to-violet-500 data-[checked]:shadow-[0_0_10px_rgba(45,212,191,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/40 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0a0e1f] disabled:pointer-events-none disabled:opacity-40",
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
  label: "text-sm text-indigo-200 group-hover:text-teal-100 transition-colors duration-150 leading-none",
  description: "text-xs text-indigo-300/50 leading-relaxed",
};
