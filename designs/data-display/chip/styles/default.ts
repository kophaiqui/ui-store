import type { ChipSize } from "../Component";

export type ChipStyleConfig = {
  base: string;
  selected: string;
  unselected: string;
  sizes: Record<ChipSize, { chip: string; remove: string; icon: string }>;
  removeBtn: string;
};

export const defaultStyle: ChipStyleConfig = {
  base: "inline-flex items-center rounded-full font-medium transition-all duration-150 border select-none",
  selected:   "bg-emerald-500/15 border-emerald-500/40 text-emerald-400",
  unselected: "bg-muted/60 border-border text-muted-foreground hover:border-input hover:text-foreground",
  sizes: {
    sm: { chip: "h-6 px-2.5 text-xs gap-1",   remove: "size-3",   icon: "size-3"   },
    md: { chip: "h-7 px-3 text-xs gap-1.5",    remove: "size-3.5", icon: "size-3.5" },
    lg: { chip: "h-8 px-3.5 text-sm gap-2",    remove: "size-4",   icon: "size-4"   },
  },
  removeBtn: "shrink-0 ml-0.5 flex items-center justify-center rounded-full opacity-60 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
