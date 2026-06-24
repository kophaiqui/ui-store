import type { BadgeStyleConfig } from "./default";
export type { BadgeStyleConfig };

export const neobrutalismStyle: BadgeStyleConfig = {
  base: "inline-flex items-center font-black leading-none border-2 border-zinc-950 dark:border-white shadow-[2px_2px_0px_0px_#09090b] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)] uppercase tracking-wide",
  sizes: {
    sm: "h-5 px-1.5 text-[10px] gap-1",
    md: "h-6 px-2 text-xs gap-1",
    lg: "h-7 px-2.5 text-xs gap-1.5",
  },
  rounded: "rounded-none",
  square:  "rounded-none",
  colors: {
    default: {
      solid:   "bg-zinc-950 dark:bg-white text-yellow-300 dark:text-zinc-950",
      soft:    "bg-zinc-200 dark:bg-[#222222] text-zinc-950 dark:text-white",
      outline: "bg-white dark:bg-[#111111] text-zinc-950 dark:text-white",
    },
    emerald: {
      solid:   "bg-emerald-400 text-zinc-950",
      soft:    "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-300",
      outline: "bg-white dark:bg-[#111111] text-emerald-700 dark:text-emerald-400",
    },
    red: {
      solid:   "bg-red-400 text-white",
      soft:    "bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-300",
      outline: "bg-white dark:bg-[#111111] text-red-700 dark:text-red-400",
    },
    amber: {
      solid:   "bg-yellow-300 text-zinc-950",
      soft:    "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-900 dark:text-yellow-300",
      outline: "bg-white dark:bg-[#111111] text-yellow-700 dark:text-yellow-400",
    },
    blue: {
      solid:   "bg-blue-500 text-white",
      soft:    "bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300",
      outline: "bg-white dark:bg-[#111111] text-blue-700 dark:text-blue-400",
    },
    violet: {
      solid:   "bg-violet-500 text-white",
      soft:    "bg-violet-100 dark:bg-violet-900/30 text-violet-900 dark:text-violet-300",
      outline: "bg-white dark:bg-[#111111] text-violet-700 dark:text-violet-400",
    },
  },
  dotColors: {
    default: "bg-yellow-300",
    emerald: "bg-emerald-600",
    red:     "bg-red-600",
    amber:   "bg-yellow-600",
    blue:    "bg-blue-600",
    violet:  "bg-violet-600",
  },
};
