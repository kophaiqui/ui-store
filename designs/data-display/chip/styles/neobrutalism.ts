import type { ChipStyleConfig } from "./default";
export type { ChipStyleConfig };

export const neobrutalismStyle: ChipStyleConfig = {
  base: "inline-flex items-center rounded-none font-bold transition-all duration-100 border-2 border-zinc-950 select-none",
  selected:   "bg-yellow-300 text-zinc-950 shadow-[2px_2px_0px_0px_#09090b]",
  unselected: "bg-white text-zinc-950 shadow-[2px_2px_0px_0px_#09090b] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#09090b]",
  sizes: {
    sm: { chip: "h-6 px-2.5 text-xs gap-1",   remove: "size-3",   icon: "size-3"   },
    md: { chip: "h-7 px-3 text-xs gap-1.5",    remove: "size-3.5", icon: "size-3.5" },
    lg: { chip: "h-8 px-3.5 text-sm gap-2",    remove: "size-4",   icon: "size-4"   },
  },
  removeBtn: "shrink-0 ml-0.5 flex items-center justify-center rounded-none opacity-70 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
