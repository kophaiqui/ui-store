import type { ChipStyleConfig } from "./default";
export type { ChipStyleConfig, ChipSize } from "./default";

export const terminalStyle: ChipStyleConfig = {
  base: "inline-flex items-center rounded-sm font-mono font-bold transition-all duration-100 border select-none uppercase tracking-wide",
  selected:   "bg-[#16A34A] border-[#16A34A] text-white dark:bg-[#22C55E] dark:border-[#22C55E] dark:text-black",
  unselected: "bg-transparent border-[#16A34A] text-[#065F46] hover:bg-[#16A34A]/10 dark:border-[#22C55E] dark:text-[#22C55E] dark:hover:bg-[#22C55E]/10",
  sizes: {
    sm: { chip: "h-6 px-2.5 text-[9px] gap-1",   remove: "size-3",   icon: "size-3"   },
    md: { chip: "h-7 px-3 text-[10px] gap-1.5",   remove: "size-3.5", icon: "size-3.5" },
    lg: { chip: "h-8 px-3.5 text-[11px] gap-2",   remove: "size-4",   icon: "size-4"   },
  },
  removeBtn: "shrink-0 ml-0.5 flex items-center justify-center rounded-sm opacity-70 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
