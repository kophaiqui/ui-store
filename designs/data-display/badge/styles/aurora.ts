export type { BadgeStyleConfig, BadgeVariant, BadgeColor, BadgeSize } from "./default";
import type { BadgeStyleConfig } from "./default";

export const auroraStyle: BadgeStyleConfig = {
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
      solid:   "bg-gradient-to-r from-indigo-500/30 to-violet-500/30 text-indigo-100 border border-indigo-400/30 shadow-[0_0_10px_rgba(99,102,241,0.25)]",
      soft:    "bg-indigo-500/10 text-indigo-200 border border-indigo-400/15",
      outline: "border border-indigo-400/30 text-indigo-200",
    },
    emerald: {
      solid:   "bg-teal-500/25 text-teal-100 border border-teal-400/30 shadow-[0_0_10px_rgba(45,212,191,0.3)]",
      soft:    "bg-teal-500/10 text-teal-300 border border-teal-400/15",
      outline: "border border-teal-400/30 text-teal-300",
    },
    red: {
      solid:   "bg-rose-500/25 text-rose-100 border border-rose-400/30 shadow-[0_0_10px_rgba(244,63,94,0.25)]",
      soft:    "bg-rose-500/10 text-rose-300 border border-rose-400/15",
      outline: "border border-rose-400/30 text-rose-300",
    },
    amber: {
      solid:   "bg-amber-500/25 text-amber-100 border border-amber-400/30 shadow-[0_0_10px_rgba(245,158,11,0.25)]",
      soft:    "bg-amber-500/10 text-amber-300 border border-amber-400/15",
      outline: "border border-amber-400/30 text-amber-300",
    },
    blue: {
      solid:   "bg-sky-500/25 text-sky-100 border border-sky-400/30 shadow-[0_0_10px_rgba(14,165,233,0.25)]",
      soft:    "bg-sky-500/10 text-sky-300 border border-sky-400/15",
      outline: "border border-sky-400/30 text-sky-300",
    },
    violet: {
      solid:   "bg-violet-500/25 text-violet-100 border border-violet-400/30 shadow-[0_0_10px_rgba(167,139,250,0.3)]",
      soft:    "bg-violet-500/10 text-violet-300 border border-violet-400/15",
      outline: "border border-violet-400/30 text-violet-300",
    },
  },
  dotColors: {
    default: "bg-indigo-300",
    emerald: "bg-teal-300",
    red:     "bg-rose-300",
    amber:   "bg-amber-300",
    blue:    "bg-sky-300",
    violet:  "bg-violet-300",
  },
};
