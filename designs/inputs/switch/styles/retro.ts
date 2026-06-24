import type { SwitchStyleConfig } from "./default";
export type { SwitchStyleConfig, SwitchSize } from "./default";

export const retroStyle: SwitchStyleConfig = {
  track: "group relative inline-flex shrink-0 items-center rounded-sm border-2 border-[#3d2410] bg-amber-100 transition-colors duration-200 data-[checked]:bg-[#e8743b] data-[checked]:border-[#3d2410] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8743b]/50 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 shadow-[2px_2px_0px_0px_#3d2410] dark:border-[#A78BFA] dark:bg-[#1e1a2e] dark:data-[checked]:bg-[#A78BFA] dark:data-[checked]:border-[#A78BFA] dark:focus-visible:ring-[#A78BFA]/50 dark:shadow-[2px_2px_0px_0px_#A78BFA]",
  thumb: "pointer-events-none block rounded-[2px] bg-[#fdf6e3] border border-[#3d2410] shadow-[1px_1px_0px_0px_#3d2410] translate-x-0 transition-transform duration-200 ease-out dark:bg-[#F5F3FF] dark:border-[#A78BFA] dark:shadow-[1px_1px_0px_0px_#A78BFA]",
  sizes: {
    sm: { track: "h-[18px] w-8",  thumb: "size-[14px]", translate: "group-data-[checked]:translate-x-[14px]" },
    md: { track: "h-[22px] w-10", thumb: "size-[18px]", translate: "group-data-[checked]:translate-x-[18px]" },
    lg: { track: "h-[26px] w-12", thumb: "size-[22px]", translate: "group-data-[checked]:translate-x-[22px]" },
  },
  label: "text-sm font-bold text-[#2c1a0e] group-hover:text-[#3d2410] transition-colors duration-100 dark:text-[#F5F3FF] dark:group-hover:text-[#c4b5fd]",
};
