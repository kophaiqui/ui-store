export type { BadgeStyleConfig, BadgeVariant, BadgeColor, BadgeSize } from "./default";
import type { BadgeStyleConfig } from "./default";

export const glassStyle: BadgeStyleConfig = {
  base: "inline-flex items-center font-medium leading-none backdrop-blur-sm",
  sizes: {
    sm: "h-4 px-1.5 text-[10px] gap-1",
    md: "h-5 px-2 text-xs gap-1",
    lg: "h-6 px-2.5 text-xs gap-1.5",
  },
  rounded: "rounded-full",
  square:  "rounded-md",
  colors: {
    default: {
      solid:   "bg-black/10 text-foreground border border-black/10 dark:bg-white/15 dark:border-white/10",
      soft:    "bg-black/6 text-foreground/80 border border-black/8 dark:bg-white/8 dark:border-white/8",
      outline: "border border-black/15 text-foreground/80 dark:border-white/20",
    },
    emerald: {
      solid:   "bg-emerald-500/15 text-emerald-700 border border-emerald-500/20 dark:bg-emerald-400/20 dark:text-emerald-300 dark:border-emerald-400/20",
      soft:    "bg-emerald-500/8 text-emerald-700 border border-emerald-500/10 dark:bg-emerald-400/10 dark:text-emerald-300 dark:border-emerald-400/10",
      outline: "border border-emerald-500/30 text-emerald-700 dark:border-emerald-400/30 dark:text-emerald-300",
    },
    red: {
      solid:   "bg-red-500/15 text-red-700 border border-red-500/20 dark:bg-red-400/20 dark:text-red-300 dark:border-red-400/20",
      soft:    "bg-red-500/8 text-red-700 border border-red-500/10 dark:bg-red-400/10 dark:text-red-300 dark:border-red-400/10",
      outline: "border border-red-500/30 text-red-700 dark:border-red-400/30 dark:text-red-300",
    },
    amber: {
      solid:   "bg-amber-500/15 text-amber-700 border border-amber-500/20 dark:bg-amber-400/20 dark:text-amber-300 dark:border-amber-400/20",
      soft:    "bg-amber-500/8 text-amber-700 border border-amber-500/10 dark:bg-amber-400/10 dark:text-amber-300 dark:border-amber-400/10",
      outline: "border border-amber-500/30 text-amber-700 dark:border-amber-400/30 dark:text-amber-300",
    },
    blue: {
      solid:   "bg-sky-500/15 text-sky-700 border border-sky-500/20 dark:bg-sky-400/20 dark:text-sky-300 dark:border-sky-400/20",
      soft:    "bg-sky-500/8 text-sky-700 border border-sky-500/10 dark:bg-sky-400/10 dark:text-sky-300 dark:border-sky-400/10",
      outline: "border border-sky-500/30 text-sky-700 dark:border-sky-400/30 dark:text-sky-300",
    },
    violet: {
      solid:   "bg-violet-500/15 text-violet-700 border border-violet-500/20 dark:bg-violet-400/20 dark:text-violet-300 dark:border-violet-400/20",
      soft:    "bg-violet-500/8 text-violet-700 border border-violet-500/10 dark:bg-violet-400/10 dark:text-violet-300 dark:border-violet-400/10",
      outline: "border border-violet-500/30 text-violet-700 dark:border-violet-400/30 dark:text-violet-300",
    },
  },
  dotColors: {
    default: "bg-foreground/60",
    emerald: "bg-emerald-600 dark:bg-emerald-300",
    red:     "bg-red-600 dark:bg-red-300",
    amber:   "bg-amber-600 dark:bg-amber-300",
    blue:    "bg-sky-600 dark:bg-sky-300",
    violet:  "bg-violet-600 dark:bg-violet-300",
  },
};
