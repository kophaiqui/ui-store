export type { ChipStyleConfig, ChipSize } from "./default";
import type { ChipStyleConfig } from "./default";

export const materialStyle: ChipStyleConfig = {
  base: "inline-flex items-center rounded-full font-medium transition-all duration-150 border select-none",
  selected:   "bg-violet-100 border-violet-400/60 text-violet-800 dark:bg-violet-500/20 dark:border-violet-400/30 dark:text-violet-200",
  unselected: "bg-violet-50/60 border-violet-200/50 text-foreground/60 hover:border-violet-300 hover:text-foreground dark:bg-violet-950/20 dark:border-violet-800/30 dark:hover:border-violet-600/40",
  sizes: {
    sm: { chip: "h-6 px-2.5 text-xs gap-1",   remove: "size-3",   icon: "size-3"   },
    md: { chip: "h-7 px-3 text-xs gap-1.5",    remove: "size-3.5", icon: "size-3.5" },
    lg: { chip: "h-8 px-3.5 text-sm gap-2",    remove: "size-4",   icon: "size-4"   },
  },
  removeBtn: "shrink-0 ml-0.5 flex items-center justify-center rounded-full opacity-60 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
