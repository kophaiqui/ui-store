import type { ChipStyleConfig } from "./default";
export type { ChipStyleConfig };

export const gradientStyle: ChipStyleConfig = {
  base: "inline-flex items-center rounded-full font-medium transition-all duration-150 select-none",
  selected:   "bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white shadow-[0_2px_10px_rgba(124,58,237,0.2)] dark:from-fuchsia-600 dark:to-pink-500 dark:shadow-[0_2px_10px_rgba(217,70,239,0.25)]",
  unselected: "bg-[#FDF2F8] border border-[#FCE7F3] text-[#64748B] hover:border-[#7C3AED]/30 hover:text-[#7C3AED] dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-fuchsia-500/40 dark:hover:text-fuchsia-300",
  sizes: {
    sm: { chip: "h-6 px-2.5 text-xs gap-1",   remove: "size-3",   icon: "size-3"   },
    md: { chip: "h-7 px-3 text-xs gap-1.5",    remove: "size-3.5", icon: "size-3.5" },
    lg: { chip: "h-8 px-3.5 text-sm gap-2",    remove: "size-4",   icon: "size-4"   },
  },
  removeBtn: "shrink-0 ml-0.5 flex items-center justify-center rounded-full opacity-70 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
