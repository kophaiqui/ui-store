export type { ChipStyleConfig, ChipSize } from "./default";
import type { ChipStyleConfig } from "./default";

export const glassStyle: ChipStyleConfig = {
  base: "inline-flex items-center rounded-full font-medium transition-all duration-150 border select-none backdrop-blur-sm",
  selected:   "bg-sky-500/15 border-sky-500/30 text-sky-700 dark:bg-sky-400/20 dark:border-sky-400/30 dark:text-sky-300",
  unselected: "bg-black/5 border-black/10 text-foreground/70 hover:border-black/18 hover:text-foreground dark:bg-white/8 dark:border-white/10 dark:hover:border-white/20",
  sizes: {
    sm: { chip: "h-6 px-2.5 text-xs gap-1",   remove: "size-3",   icon: "size-3"   },
    md: { chip: "h-7 px-3 text-xs gap-1.5",    remove: "size-3.5", icon: "size-3.5" },
    lg: { chip: "h-8 px-3.5 text-sm gap-2",    remove: "size-4",   icon: "size-4"   },
  },
  removeBtn: "shrink-0 ml-0.5 flex items-center justify-center rounded-full opacity-60 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
