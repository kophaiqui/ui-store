export type { BadgeStyleConfig, BadgeVariant, BadgeColor, BadgeSize } from "./default";
import type { BadgeStyleConfig } from "./default";

export const materialStyle: BadgeStyleConfig = {
  base: "inline-flex items-center font-medium leading-none",
  sizes: {
    sm: "h-4 px-1.5 text-[10px] gap-1",
    md: "h-5 px-2 text-xs gap-1",
    lg: "h-6 px-2.5 text-xs gap-1.5",
  },
  rounded: "rounded-full",
  square:  "rounded-md",
  colors: {
    default: {
      solid:   "bg-violet-600 text-white dark:bg-violet-500",
      soft:    "bg-violet-100 text-violet-800 dark:bg-violet-500/20 dark:text-violet-200",
      outline: "border border-violet-300 text-violet-700 dark:border-violet-500/40 dark:text-violet-300",
    },
    emerald: {
      solid:   "bg-teal-600 text-white dark:bg-teal-500",
      soft:    "bg-teal-100 text-teal-800 dark:bg-teal-500/20 dark:text-teal-200",
      outline: "border border-teal-300 text-teal-700 dark:border-teal-500/40 dark:text-teal-300",
    },
    red: {
      solid:   "bg-rose-600 text-white dark:bg-rose-500",
      soft:    "bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-200",
      outline: "border border-rose-300 text-rose-700 dark:border-rose-500/40 dark:text-rose-300",
    },
    amber: {
      solid:   "bg-amber-600 text-white dark:bg-amber-500",
      soft:    "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-200",
      outline: "border border-amber-300 text-amber-700 dark:border-amber-500/40 dark:text-amber-300",
    },
    blue: {
      solid:   "bg-sky-600 text-white dark:bg-sky-500",
      soft:    "bg-sky-100 text-sky-800 dark:bg-sky-500/20 dark:text-sky-200",
      outline: "border border-sky-300 text-sky-700 dark:border-sky-500/40 dark:text-sky-300",
    },
    violet: {
      solid:   "bg-purple-600 text-white dark:bg-purple-500",
      soft:    "bg-purple-100 text-purple-800 dark:bg-purple-500/20 dark:text-purple-200",
      outline: "border border-purple-300 text-purple-700 dark:border-purple-500/40 dark:text-purple-300",
    },
  },
  dotColors: {
    default: "bg-violet-500",
    emerald: "bg-teal-500",
    red:     "bg-rose-500",
    amber:   "bg-amber-500",
    blue:    "bg-sky-500",
    violet:  "bg-purple-500",
  },
};
