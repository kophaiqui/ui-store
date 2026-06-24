import type { ChipStyleConfig } from "./default";
export type { ChipStyleConfig, ChipSize } from "./default";

export const retroStyle: ChipStyleConfig = {
  base: "inline-flex items-center rounded-sm font-bold transition-all duration-100 border-2 select-none uppercase tracking-wide",
  selected:   "bg-[#e8743b] border-[#3d2410] text-[#2c1a0e] shadow-[2px_2px_0px_0px_#3d2410] dark:bg-[#A78BFA] dark:border-[#A78BFA] dark:text-[#F5F3FF] dark:shadow-[2px_2px_0px_0px_#A78BFA]",
  unselected: "bg-[#fdf6e3] border-[#3d2410] text-[#7a5230] hover:bg-amber-100 hover:text-[#2c1a0e] shadow-[1px_1px_0px_0px_#3d2410] dark:bg-[#161324] dark:border-[#A78BFA] dark:text-[#A1A1AA] dark:hover:bg-[#A78BFA]/20 dark:hover:text-[#F5F3FF] dark:shadow-[1px_1px_0px_0px_#A78BFA]",
  sizes: {
    sm: { chip: "h-6 px-2.5 text-[9px] gap-1",   remove: "size-3",   icon: "size-3"   },
    md: { chip: "h-7 px-3 text-[10px] gap-1.5",    remove: "size-3.5", icon: "size-3.5" },
    lg: { chip: "h-8 px-3.5 text-[11px] gap-2",    remove: "size-4",   icon: "size-4"   },
  },
  removeBtn: "shrink-0 ml-0.5 flex items-center justify-center rounded-sm opacity-70 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
