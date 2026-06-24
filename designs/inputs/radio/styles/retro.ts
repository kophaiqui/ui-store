import type { RadioStyleConfig } from "./default";
export type { RadioStyleConfig, RadioSize } from "./default";

export const retroStyle: RadioStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center rounded-full border-2 border-[#3d2410] bg-[#fdf6e3] transition-all duration-100 hover:bg-amber-100 data-[checked]:border-[#e8743b] data-[checked]:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8743b]/50 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 shadow-[2px_2px_0px_0px_#3d2410]",
  sizes: {
    sm: "size-[14px]",
    md: "size-[18px]",
    lg: "size-[22px]",
  },
  dot: "rounded-full bg-[#e8743b] transition-transform duration-100 scale-0 data-[checked]:scale-100",
  dotSizes: {
    sm: "size-[6px]",
    md: "size-[8px]",
    lg: "size-[10px]",
  },
  label: "text-sm font-bold text-[#2c1a0e] group-hover:text-[#3d2410] transition-colors duration-100 leading-none",
  description: "text-xs text-[#7a5230] leading-relaxed",
};
