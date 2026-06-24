import type { RadioGroupStyleConfig } from "./default";
export type { RadioGroupStyleConfig, RadioGroupSize } from "./default";

export const retroStyle: RadioGroupStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center rounded-full border-2 border-[#3d2410] bg-[#fdf6e3] transition-all duration-100 hover:bg-amber-100 data-[checked]:border-[#e8743b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8743b]/50 focus-visible:ring-offset-1 shadow-[1px_1px_0px_0px_#3d2410] dark:border-[#A78BFA] dark:bg-[#161324] dark:hover:bg-[#A78BFA]/20 dark:data-[checked]:border-[#A78BFA] dark:focus-visible:ring-[#A78BFA]/50 dark:shadow-[1px_1px_0px_0px_#A78BFA]",
  sizes: {
    sm: "size-[14px]",
    md: "size-[18px]",
    lg: "size-[22px]",
  },
  dot: "bg-[#e8743b] dark:bg-[#A78BFA]",
  dotSizes: {
    sm: "size-[6px]",
    md: "size-[8px]",
    lg: "size-[10px]",
  },
  label: "text-sm font-bold text-[#2c1a0e] group-hover:text-[#3d2410] transition-colors duration-100 dark:text-[#F5F3FF] dark:group-hover:text-[#c4b5fd]",
};
