import type { ChipStyleConfig } from "./default";
export type { ChipStyleConfig };

export const neumorphismStyle: ChipStyleConfig = {
  base: "inline-flex items-center rounded-full font-medium transition-all duration-200 select-none bg-[#e8ecf1]",
  selected:   "shadow-[inset_2px_2px_5px_rgba(163,177,198,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] text-blue-600",
  unselected: "shadow-[3px_3px_6px_rgba(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.7)] text-slate-600 hover:shadow-[2px_2px_4px_rgba(163,177,198,0.4),-2px_-2px_4px_rgba(255,255,255,0.6)]",
  sizes: {
    sm: { chip: "h-6 px-3 text-xs gap-1",   remove: "size-3",   icon: "size-3"   },
    md: { chip: "h-7 px-3.5 text-xs gap-1.5", remove: "size-3.5", icon: "size-3.5" },
    lg: { chip: "h-8 px-4 text-sm gap-2",    remove: "size-4",   icon: "size-4"   },
  },
  removeBtn: "shrink-0 ml-0.5 flex items-center justify-center rounded-full opacity-60 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
