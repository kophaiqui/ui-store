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
      solid:   "bg-gradient-to-r from-fuchsia-600 to-pink-500 text-white",
      soft:    "bg-fuchsia-500/15 text-fuchsia-300",
      outline: "border border-fuchsia-500/40 text-fuchsia-300",
    },
    emerald: {
      solid:   "bg-emerald-500 text-white",
      soft:    "bg-emerald-500/15 text-emerald-400",
      outline: "border border-emerald-500/40 text-emerald-400",
    },
    red: {
      solid:   "bg-red-500 text-white",
      soft:    "bg-red-500/15 text-red-400",
      outline: "border border-red-500/40 text-red-400",
    },
    amber: {
      solid:   "bg-amber-500 text-zinc-950",
      soft:    "bg-amber-500/15 text-amber-400",
      outline: "border border-amber-500/40 text-amber-400",
    },
    blue: {
      solid:   "bg-blue-500 text-white",
      soft:    "bg-blue-500/15 text-blue-400",
      outline: "border border-blue-500/40 text-blue-400",
    },
    violet: {
      solid:   "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white",
      soft:    "bg-violet-500/15 text-violet-400",
      outline: "border border-violet-500/40 text-violet-400",
    },
  },
  dotColors: {
    default: "bg-fuchsia-400",
    emerald: "bg-emerald-400",
    red:     "bg-red-400",
    amber:   "bg-amber-400",
    blue:    "bg-blue-400",
    violet:  "bg-violet-400",
  },
};
