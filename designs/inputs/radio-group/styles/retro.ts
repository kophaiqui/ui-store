import type { RadioGroupStyleConfig } from "./default";
export type { RadioGroupStyleConfig, RadioGroupSize } from "./default";

export const retroStyle: RadioGroupStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center rounded-full border-2 border-[#3d2410] bg-[#fdf6e3] transition-all duration-100 hover:bg-amber-100 data-[checked]:border-[#e8743b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8743b]/50 focus-visible:ring-offset-1 shadow-[1px_1px_0px_0px_#3d2410]",
  sizes: {
    sm: "size-[14px]",
    md: "size-[18px]",
    lg: "size-[22px]",
  },
  dot: "bg-[#e8743b]",
  dotSizes: {
    sm: "size-[6px]",
    md: "size-[8px]",
    lg: "size-[10px]",
  },
  label: "text-sm font-bold text-[#2c1a0e] group-hover:text-[#3d2410] transition-colors duration-100",
};
