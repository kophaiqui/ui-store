import type { CheckboxStyleConfig } from "./default";
export type { CheckboxStyleConfig, CheckboxSize } from "./default";

export const retroStyle: CheckboxStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center border-2 border-[#3d2410] bg-[#fdf6e3] transition-all duration-100 hover:bg-amber-100 data-[checked]:border-[#e8743b] data-[checked]:bg-[#e8743b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8743b]/50 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 shadow-[2px_2px_0px_0px_#3d2410] data-[checked]:shadow-[2px_2px_0px_0px_#3d2410]",
  sizes: {
    sm: "size-[14px] rounded-[2px]",
    md: "size-[18px] rounded-[2px]",
    lg: "size-[22px] rounded-sm",
  },
  checkSizes: {
    sm: { w: 8,  h: 6, d: "M1 3L2.8 5L7 1" },
    md: { w: 10, h: 7, d: "M1 3.5L3.5 6L9 1" },
    lg: { w: 12, h: 9, d: "M1.5 4.5L4.5 7.5L10.5 1.5" },
  },
  indicator: "flex items-center justify-center text-[#2c1a0e]",
  label: "text-sm font-bold text-[#2c1a0e] group-hover:text-[#3d2410] transition-colors duration-100 leading-none",
  description: "text-xs text-[#7a5230] leading-relaxed",
};
