import type { BadgeStyleConfig } from "./default";
export type { BadgeStyleConfig, BadgeVariant, BadgeColor, BadgeSize } from "./default";

export const retroStyle: BadgeStyleConfig = {
  base: "inline-flex items-center font-black leading-none uppercase tracking-wide",
  sizes: {
    sm: "h-4 px-1.5 text-[9px] gap-1",
    md: "h-5 px-2 text-[10px] gap-1",
    lg: "h-6 px-2.5 text-[11px] gap-1.5",
  },
  rounded: "rounded-sm",
  square:  "rounded-sm",
  colors: {
    default: {
      solid:   "bg-[#3d2410] text-[#fdf6e3] border-2 border-[#3d2410] shadow-[1px_1px_0px_0px_#3d2410]",
      soft:    "bg-amber-100 text-[#2c1a0e] border-2 border-[#3d2410]",
      outline: "border-2 border-[#3d2410] text-[#3d2410]",
    },
    emerald: {
      solid:   "bg-[#e8743b] text-[#2c1a0e] border-2 border-[#3d2410] shadow-[1px_1px_0px_0px_#3d2410]",
      soft:    "bg-amber-100 text-[#c4612a] border-2 border-[#c4612a]",
      outline: "border-2 border-[#e8743b] text-[#c4612a]",
    },
    red: {
      solid:   "bg-red-700 text-white border-2 border-red-900 shadow-[1px_1px_0px_0px_#7f1d1d]",
      soft:    "bg-red-50 text-red-800 border-2 border-red-700",
      outline: "border-2 border-red-700 text-red-800",
    },
    amber: {
      solid:   "bg-amber-500 text-[#2c1a0e] border-2 border-amber-900 shadow-[1px_1px_0px_0px_#78350f]",
      soft:    "bg-amber-50 text-amber-900 border-2 border-amber-600",
      outline: "border-2 border-amber-600 text-amber-900",
    },
    blue: {
      solid:   "bg-blue-700 text-white border-2 border-blue-900 shadow-[1px_1px_0px_0px_#1e3a5f]",
      soft:    "bg-blue-50 text-blue-800 border-2 border-blue-700",
      outline: "border-2 border-blue-700 text-blue-800",
    },
    violet: {
      solid:   "bg-violet-700 text-white border-2 border-violet-900 shadow-[1px_1px_0px_0px_#2e1065]",
      soft:    "bg-violet-50 text-violet-800 border-2 border-violet-700",
      outline: "border-2 border-violet-700 text-violet-800",
    },
  },
  dotColors: {
    default: "bg-[#7a5230]",
    emerald: "bg-[#e8743b]",
    red:     "bg-red-700",
    amber:   "bg-amber-600",
    blue:    "bg-blue-700",
    violet:  "bg-violet-700",
  },
};
