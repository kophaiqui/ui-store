import type { RadioStyleConfig } from "./default";
export type { RadioStyleConfig };

export const neobrutalismStyle: RadioStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center rounded-full border-2 border-zinc-950 dark:border-white bg-white dark:bg-[#111111] shadow-[2px_2px_0px_0px_#09090b] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#09090b] dark:hover:shadow-[1px_1px_0px_0px_rgba(255,255,255,0.7)] data-[checked]:bg-yellow-300 data-[checked]:border-zinc-950 dark:data-[checked]:border-zinc-950 data-[checked]:shadow-none data-[checked]:translate-x-[2px] data-[checked]:translate-y-[2px] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40",
  sizes: {
    sm: "size-[14px]",
    md: "size-[18px]",
    lg: "size-[22px]",
  },
  dot: "rounded-full bg-zinc-950 transition-transform duration-100 scale-0 data-[checked]:scale-100",
  dotSizes: {
    sm: "size-[6px]",
    md: "size-[8px]",
    lg: "size-[10px]",
  },
  label: "text-sm font-bold text-zinc-950 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-[#D1D5DB] transition-colors duration-100 leading-none",
  description: "text-xs font-medium text-zinc-600 dark:text-[#9CA3AF] leading-relaxed",
};
