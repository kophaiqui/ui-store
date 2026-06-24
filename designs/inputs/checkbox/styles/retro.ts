import type { CheckboxStyleConfig } from "./default";
export type { CheckboxStyleConfig, CheckboxSize } from "./default";

export const retroStyle: CheckboxStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center border-2 border-[#3d2410] bg-[#fdf6e3] transition-all duration-100 hover:bg-amber-100 data-[checked]:border-[#e8743b] data-[checked]:bg-[#e8743b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8743b]/50 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 shadow-[2px_2px_0px_0px_#3d2410] data-[checked]:shadow-[2px_2px_0px_0px_#3d2410] dark:border-[#A78BFA] dark:bg-[#161324] dark:hover:bg-[#A78BFA]/20 dark:data-[checked]:border-[#A78BFA] dark:data-[checked]:bg-[#A78BFA] dark:focus-visible:ring-[#A78BFA]/50 dark:shadow-[2px_2px_0px_0px_#A78BFA] dark:data-[checked]:shadow-[2px_2px_0px_0px_#A78BFA]",
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
  indicator: "flex items-center justify-center text-[#2c1a0e] dark:text-[#F5F3FF]",
  label: "text-sm font-bold text-[#2c1a0e] group-hover:text-[#3d2410] transition-colors duration-100 leading-none dark:text-[#F5F3FF] dark:group-hover:text-[#c4b5fd]",
  description: "text-xs text-[#7a5230] leading-relaxed dark:text-[#A1A1AA]",
};
