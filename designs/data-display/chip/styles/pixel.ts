import type { ChipStyleConfig } from "./default";
export type { ChipStyleConfig, ChipSize } from "./default";

export const pixelStyle: ChipStyleConfig = {
  base: "inline-flex items-center rounded-none font-mono font-bold uppercase tracking-widest transition-all duration-100 border-2 border-black select-none",
  selected:   "bg-[#ef476f] text-black shadow-[2px_2px_0_0_#000]",
  unselected: "bg-[#0d0d12] text-[#06d6a0] shadow-[2px_2px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000]",
  sizes: {
    sm: { chip: "h-6 px-2.5 text-[9px] gap-1",    remove: "size-3",   icon: "size-3"   },
    md: { chip: "h-7 px-3 text-[10px] gap-1.5",   remove: "size-3.5", icon: "size-3.5" },
    lg: { chip: "h-8 px-3.5 text-[11px] gap-2",   remove: "size-4",   icon: "size-4"   },
  },
  removeBtn: "shrink-0 ml-0.5 flex items-center justify-center rounded-none opacity-70 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
