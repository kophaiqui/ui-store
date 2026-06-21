export type { BadgeStyleConfig, BadgeVariant, BadgeColor, BadgeSize } from "./default";
import type { BadgeStyleConfig } from "./default";

export const minimalStyle: BadgeStyleConfig = {
  base: "inline-flex items-center font-medium leading-none",
  sizes: {
    sm: "h-4 px-1.5 text-[10px] gap-1",
    md: "h-5 px-2 text-xs gap-1",
    lg: "h-6 px-2.5 text-xs gap-1.5",
  },
  rounded: "rounded-none",
  square:  "rounded-none",
  colors: {
    default: {
      solid:   "border border-foreground text-foreground",
      soft:    "text-foreground/70",
      outline: "border border-border text-muted-foreground",
    },
    emerald: {
      solid:   "border border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400",
      soft:    "text-emerald-600 dark:text-emerald-400",
      outline: "border border-emerald-600/40 text-emerald-600 dark:border-emerald-400/40 dark:text-emerald-400",
    },
    red: {
      solid:   "border border-red-600 text-red-600 dark:border-red-400 dark:text-red-400",
      soft:    "text-red-600 dark:text-red-400",
      outline: "border border-red-600/40 text-red-600 dark:border-red-400/40 dark:text-red-400",
    },
    amber: {
      solid:   "border border-amber-600 text-amber-600 dark:border-amber-400 dark:text-amber-400",
      soft:    "text-amber-600 dark:text-amber-400",
      outline: "border border-amber-600/40 text-amber-600 dark:border-amber-400/40 dark:text-amber-400",
    },
    blue: {
      solid:   "border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400",
      soft:    "text-blue-600 dark:text-blue-400",
      outline: "border border-blue-600/40 text-blue-600 dark:border-blue-400/40 dark:text-blue-400",
    },
    violet: {
      solid:   "border border-violet-600 text-violet-600 dark:border-violet-400 dark:text-violet-400",
      soft:    "text-violet-600 dark:text-violet-400",
      outline: "border border-violet-600/40 text-violet-600 dark:border-violet-400/40 dark:text-violet-400",
    },
  },
  dotColors: {
    default: "bg-foreground",
    emerald: "bg-emerald-600 dark:bg-emerald-400",
    red:     "bg-red-600 dark:bg-red-400",
    amber:   "bg-amber-600 dark:bg-amber-400",
    blue:    "bg-blue-600 dark:bg-blue-400",
    violet:  "bg-violet-600 dark:bg-violet-400",
  },
};
