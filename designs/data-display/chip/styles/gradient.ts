import type { ChipStyleConfig } from "./default";
export type { ChipStyleConfig };

export const gradientStyle: ChipStyleConfig = {
  base: "inline-flex items-center rounded-full font-medium transition-all duration-150 select-none",
  selected:   "bg-gradient-to-r from-fuchsia-600 to-pink-500 text-white shadow-[0_2px_10px_rgba(217,70,239,0.25)]",
  unselected: "bg-zinc-800 border border-zinc-700 text-zinc-400 hover:border-fuchsia-500/40 hover:text-fuchsia-300",
  sizes: {
    sm: { chip: "h-6 px-2.5 text-xs gap-1",   remove: "size-3",   icon: "size-3"   },
    md: { chip: "h-7 px-3 text-xs gap-1.5",    remove: "size-3.5", icon: "size-3.5" },
    lg: { chip: "h-8 px-3.5 text-sm gap-2",    remove: "size-4",   icon: "size-4"   },
  },
  removeBtn: "shrink-0 ml-0.5 flex items-center justify-center rounded-full opacity-70 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
