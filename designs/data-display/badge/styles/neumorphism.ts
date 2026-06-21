import type { BadgeStyleConfig } from "./default";
export type { BadgeStyleConfig };

export const neumorphismStyle: BadgeStyleConfig = {
  base: "inline-flex items-center font-semibold leading-none bg-[#e8ecf1]",
  sizes: {
    sm: "h-5 px-2 text-[10px] gap-1",
    md: "h-6 px-2.5 text-xs gap-1",
    lg: "h-7 px-3 text-xs gap-1.5",
  },
  rounded: "rounded-full shadow-[2px_2px_4px_rgba(163,177,198,0.5),-2px_-2px_4px_rgba(255,255,255,0.7)]",
  square:  "rounded-lg shadow-[2px_2px_4px_rgba(163,177,198,0.5),-2px_-2px_4px_rgba(255,255,255,0.7)]",
  colors: {
    default: {
      solid:   "text-slate-700",
      soft:    "text-slate-600",
      outline: "text-slate-500",
    },
    emerald: {
      solid:   "text-emerald-700",
      soft:    "text-emerald-600",
      outline: "text-emerald-500",
    },
    red: {
      solid:   "text-red-700",
      soft:    "text-red-600",
      outline: "text-red-500",
    },
    amber: {
      solid:   "text-amber-700",
      soft:    "text-amber-600",
      outline: "text-amber-500",
    },
    blue: {
      solid:   "text-blue-700",
      soft:    "text-blue-600",
      outline: "text-blue-500",
    },
    violet: {
      solid:   "text-violet-700",
      soft:    "text-violet-600",
      outline: "text-violet-500",
    },
  },
  dotColors: {
    default: "bg-slate-400",
    emerald: "bg-emerald-500",
    red:     "bg-red-500",
    amber:   "bg-amber-500",
    blue:    "bg-blue-500",
    violet:  "bg-violet-500",
  },
};
