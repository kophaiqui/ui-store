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
      solid:   "bg-[#3d2410] text-[#fdf6e3] border-2 border-[#3d2410] shadow-[1px_1px_0px_0px_#3d2410] dark:bg-[#A78BFA] dark:text-[#F5F3FF] dark:border-[#A78BFA] dark:shadow-[1px_1px_0px_0px_#A78BFA]",
      soft:    "bg-amber-100 text-[#2c1a0e] border-2 border-[#3d2410] dark:bg-[#A78BFA]/20 dark:text-[#F5F3FF] dark:border-[#A78BFA]",
      outline: "border-2 border-[#3d2410] text-[#3d2410] dark:border-[#A78BFA] dark:text-[#A78BFA]",
    },
    emerald: {
      solid:   "bg-[#e8743b] text-[#2c1a0e] border-2 border-[#3d2410] shadow-[1px_1px_0px_0px_#3d2410] dark:bg-[#A78BFA] dark:text-[#F5F3FF] dark:border-[#A78BFA] dark:shadow-[1px_1px_0px_0px_#A78BFA]",
      soft:    "bg-amber-100 text-[#c4612a] border-2 border-[#c4612a] dark:bg-[#A78BFA]/20 dark:text-[#c4b5fd] dark:border-[#A78BFA]",
      outline: "border-2 border-[#e8743b] text-[#c4612a] dark:border-[#A78BFA] dark:text-[#A78BFA]",
    },
    red: {
      solid:   "bg-red-700 text-white border-2 border-red-900 shadow-[1px_1px_0px_0px_#7f1d1d] dark:bg-red-600 dark:border-red-800",
      soft:    "bg-red-50 text-red-800 border-2 border-red-700 dark:bg-red-950/40 dark:text-red-300 dark:border-red-700",
      outline: "border-2 border-red-700 text-red-800 dark:border-red-500 dark:text-red-400",
    },
    amber: {
      solid:   "bg-amber-500 text-[#2c1a0e] border-2 border-amber-900 shadow-[1px_1px_0px_0px_#78350f] dark:bg-amber-400 dark:text-[#2c1a0e] dark:border-amber-700",
      soft:    "bg-amber-50 text-amber-900 border-2 border-amber-600 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-600",
      outline: "border-2 border-amber-600 text-amber-900 dark:border-amber-400 dark:text-amber-400",
    },
    blue: {
      solid:   "bg-blue-700 text-white border-2 border-blue-900 shadow-[1px_1px_0px_0px_#1e3a5f] dark:bg-blue-600 dark:border-blue-800",
      soft:    "bg-blue-50 text-blue-800 border-2 border-blue-700 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-700",
      outline: "border-2 border-blue-700 text-blue-800 dark:border-blue-500 dark:text-blue-400",
    },
    violet: {
      solid:   "bg-violet-700 text-white border-2 border-violet-900 shadow-[1px_1px_0px_0px_#2e1065] dark:bg-violet-600 dark:border-violet-800",
      soft:    "bg-violet-50 text-violet-800 border-2 border-violet-700 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-700",
      outline: "border-2 border-violet-700 text-violet-800 dark:border-violet-500 dark:text-violet-400",
    },
  },
  dotColors: {
    default: "bg-[#7a5230] dark:bg-[#A1A1AA]",
    emerald: "bg-[#e8743b] dark:bg-[#A78BFA]",
    red:     "bg-red-700 dark:bg-red-500",
    amber:   "bg-amber-600 dark:bg-amber-400",
    blue:    "bg-blue-700 dark:bg-blue-500",
    violet:  "bg-violet-700 dark:bg-violet-500",
  },
};
