import type { BadgeStyleConfig } from "./default";
export type { BadgeStyleConfig };

export const neobrutalismStyle: BadgeStyleConfig = {
  base: "inline-flex items-center font-black leading-none border-2 border-zinc-950 shadow-[2px_2px_0px_0px_#09090b] uppercase tracking-wide",
  sizes: {
    sm: "h-5 px-1.5 text-[10px] gap-1",
    md: "h-6 px-2 text-xs gap-1",
    lg: "h-7 px-2.5 text-xs gap-1.5",
  },
  rounded: "rounded-none",
  square:  "rounded-none",
  colors: {
    default: {
      solid:   "bg-zinc-950 text-yellow-300",
      soft:    "bg-zinc-200 text-zinc-950",
      outline: "bg-white text-zinc-950",
    },
    emerald: {
      solid:   "bg-emerald-400 text-zinc-950",
      soft:    "bg-emerald-100 text-emerald-900",
      outline: "bg-white text-emerald-700",
    },
    red: {
      solid:   "bg-red-400 text-white",
      soft:    "bg-red-100 text-red-900",
      outline: "bg-white text-red-700",
    },
    amber: {
      solid:   "bg-yellow-300 text-zinc-950",
      soft:    "bg-yellow-100 text-yellow-900",
      outline: "bg-white text-yellow-700",
    },
    blue: {
      solid:   "bg-blue-500 text-white",
      soft:    "bg-blue-100 text-blue-900",
      outline: "bg-white text-blue-700",
    },
    violet: {
      solid:   "bg-violet-500 text-white",
      soft:    "bg-violet-100 text-violet-900",
      outline: "bg-white text-violet-700",
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
