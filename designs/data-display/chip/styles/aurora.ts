export type { ChipStyleConfig, ChipSize } from "./default";
import type { ChipStyleConfig } from "./default";

export const auroraStyle: ChipStyleConfig = {
  base: "inline-flex items-center rounded-full font-medium transition-all duration-150 border select-none",
  selected:   "bg-gradient-to-r from-teal-500/25 to-violet-500/25 border-teal-400/30 text-teal-100 shadow-[0_0_10px_rgba(45,212,191,0.2)]",
  unselected: "bg-indigo-950/40 border-indigo-400/15 text-indigo-300/70 hover:border-teal-400/25 hover:text-teal-200",
  sizes: {
    sm: { chip: "h-6 px-2.5 text-xs gap-1",   remove: "size-3",   icon: "size-3"   },
    md: { chip: "h-7 px-3 text-xs gap-1.5",    remove: "size-3.5", icon: "size-3.5" },
    lg: { chip: "h-8 px-3.5 text-sm gap-2",    remove: "size-4",   icon: "size-4"   },
  },
  removeBtn: "shrink-0 ml-0.5 flex items-center justify-center rounded-full opacity-60 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
