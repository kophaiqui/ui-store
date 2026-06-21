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
      solid:   "bg-white/15 text-foreground border border-white/10",
      soft:    "bg-white/8 text-foreground/80 border border-white/8",
      outline: "border border-white/20 text-foreground/80",
    },
    emerald: {
      solid:   "bg-emerald-400/20 text-emerald-300 border border-emerald-400/20",
      soft:    "bg-emerald-400/10 text-emerald-300 border border-emerald-400/10",
      outline: "border border-emerald-400/30 text-emerald-300",
    },
    red: {
      solid:   "bg-red-400/20 text-red-300 border border-red-400/20",
      soft:    "bg-red-400/10 text-red-300 border border-red-400/10",
      outline: "border border-red-400/30 text-red-300",
    },
    amber: {
      solid:   "bg-amber-400/20 text-amber-300 border border-amber-400/20",
      soft:    "bg-amber-400/10 text-amber-300 border border-amber-400/10",
      outline: "border border-amber-400/30 text-amber-300",
    },
    blue: {
      solid:   "bg-sky-400/20 text-sky-300 border border-sky-400/20",
      soft:    "bg-sky-400/10 text-sky-300 border border-sky-400/10",
      outline: "border border-sky-400/30 text-sky-300",
    },
    violet: {
      solid:   "bg-violet-400/20 text-violet-300 border border-violet-400/20",
      soft:    "bg-violet-400/10 text-violet-300 border border-violet-400/10",
      outline: "border border-violet-400/30 text-violet-300",
    },
  },
  dotColors: {
    default: "bg-foreground/60",
    emerald: "bg-emerald-300",
    red:     "bg-red-300",
    amber:   "bg-amber-300",
    blue:    "bg-sky-300",
    violet:  "bg-violet-300",
  },
};
