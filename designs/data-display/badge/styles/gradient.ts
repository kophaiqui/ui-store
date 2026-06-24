import type { BadgeStyleConfig } from "./default";
export type { BadgeStyleConfig };

export const gradientStyle: BadgeStyleConfig = {
  base: "inline-flex items-center font-semibold leading-none",
  sizes: {
    sm: "h-4 px-1.5 text-[10px] gap-1",
    md: "h-5 px-2 text-xs gap-1",
    lg: "h-6 px-2.5 text-xs gap-1.5",
  },
  rounded: "rounded-full",
  square:  "rounded-md",
  colors: {
    default: {
      solid:   "bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white dark:from-fuchsia-600 dark:to-pink-500",
      soft:    "bg-[#7C3AED]/10 text-[#7C3AED] dark:bg-fuchsia-500/15 dark:text-fuchsia-300",
      outline: "border border-[#7C3AED]/40 text-[#7C3AED] dark:border-fuchsia-500/40 dark:text-fuchsia-300",
    },
    emerald: {
      solid:   "bg-emerald-500 text-white",
      soft:    "bg-emerald-500/12 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
      outline: "border border-emerald-500/40 text-emerald-700 dark:text-emerald-400",
    },
    red: {
      solid:   "bg-red-500 text-white",
      soft:    "bg-red-500/12 text-red-700 dark:bg-red-500/15 dark:text-red-400",
      outline: "border border-red-500/40 text-red-700 dark:text-red-400",
    },
    amber: {
      solid:   "bg-amber-500 text-white",
      soft:    "bg-amber-500/12 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
      outline: "border border-amber-500/40 text-amber-700 dark:text-amber-400",
    },
    blue: {
      solid:   "bg-blue-500 text-white",
      soft:    "bg-blue-500/12 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",
      outline: "border border-blue-500/40 text-blue-700 dark:text-blue-400",
    },
    violet: {
      solid:   "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white",
      soft:    "bg-violet-500/12 text-violet-700 dark:bg-violet-500/15 dark:text-violet-400",
      outline: "border border-violet-500/40 text-violet-700 dark:text-violet-400",
    },
  },
  dotColors: {
    default: "bg-[#7C3AED] dark:bg-fuchsia-400",
    emerald: "bg-emerald-500",
    red:     "bg-red-500",
    amber:   "bg-amber-500",
    blue:    "bg-blue-500",
    violet:  "bg-violet-500",
  },
};
