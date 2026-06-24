import type { BadgeStyleConfig } from "./default";
export type { BadgeStyleConfig };

export const neumorphismStyle: BadgeStyleConfig = {
  base: "inline-flex items-center font-semibold leading-none bg-[#e8ecf1] dark:bg-[#1E293B]",
  sizes: {
    sm: "h-5 px-2 text-[10px] gap-1",
    md: "h-6 px-2.5 text-xs gap-1",
    lg: "h-7 px-3 text-xs gap-1.5",
  },
  rounded: "rounded-full shadow-[2px_2px_4px_rgba(163,177,198,0.5),-2px_-2px_4px_rgba(255,255,255,0.7)] dark:shadow-[2px_2px_4px_rgba(0,0,0,0.5),-2px_-2px_4px_rgba(255,255,255,0.03)]",
  square:  "rounded-lg shadow-[2px_2px_4px_rgba(163,177,198,0.5),-2px_-2px_4px_rgba(255,255,255,0.7)] dark:shadow-[2px_2px_4px_rgba(0,0,0,0.5),-2px_-2px_4px_rgba(255,255,255,0.03)]",
  colors: {
    default: {
      solid:   "text-slate-700 dark:text-[#E2E8F0]",
      soft:    "text-slate-600 dark:text-[#94A3B8]",
      outline: "text-slate-500 dark:text-[#94A3B8]",
    },
    emerald: {
      solid:   "text-emerald-700 dark:text-emerald-300",
      soft:    "text-emerald-600 dark:text-emerald-400",
      outline: "text-emerald-500 dark:text-emerald-400",
    },
    red: {
      solid:   "text-red-700 dark:text-red-300",
      soft:    "text-red-600 dark:text-red-400",
      outline: "text-red-500 dark:text-red-400",
    },
    amber: {
      solid:   "text-amber-700 dark:text-amber-300",
      soft:    "text-amber-600 dark:text-amber-400",
      outline: "text-amber-500 dark:text-amber-400",
    },
    blue: {
      solid:   "text-blue-700 dark:text-blue-300",
      soft:    "text-blue-600 dark:text-blue-400",
      outline: "text-blue-500 dark:text-[#818CF8]",
    },
    violet: {
      solid:   "text-violet-700 dark:text-violet-300",
      soft:    "text-violet-600 dark:text-violet-400",
      outline: "text-violet-500 dark:text-[#818CF8]",
    },
  },
  dotColors: {
    default: "bg-slate-400 dark:bg-slate-500",
    emerald: "bg-emerald-500",
    red:     "bg-red-500",
    amber:   "bg-amber-500",
    blue:    "bg-blue-500 dark:bg-[#818CF8]",
    violet:  "bg-violet-500 dark:bg-[#818CF8]",
  },
};
