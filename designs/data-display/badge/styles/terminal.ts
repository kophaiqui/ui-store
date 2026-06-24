import type { BadgeStyleConfig } from "./default";
export type { BadgeStyleConfig, BadgeVariant, BadgeColor, BadgeSize } from "./default";

export const terminalStyle: BadgeStyleConfig = {
  base: "inline-flex items-center font-mono font-bold leading-none uppercase tracking-wide",
  sizes: {
    sm: "h-4 px-1.5 text-[9px] gap-1",
    md: "h-5 px-2 text-[10px] gap-1",
    lg: "h-6 px-2.5 text-[11px] gap-1.5",
  },
  rounded: "rounded-sm",
  square:  "rounded-sm",
  colors: {
    default: {
      solid:   "bg-[#065F46] text-white border border-[#065F46] dark:bg-[#22C55E] dark:text-black dark:border-[#22C55E]",
      soft:    "bg-[#16A34A]/10 text-[#065F46] border border-[#16A34A]/30 dark:bg-[#22C55E]/10 dark:text-[#22C55E] dark:border-[#22C55E]/30",
      outline: "border border-[#16A34A] text-[#065F46] dark:border-[#22C55E] dark:text-[#22C55E]",
    },
    emerald: {
      solid:   "bg-[#16A34A] text-white border border-[#16A34A] dark:bg-[#22C55E] dark:text-black dark:border-[#22C55E]",
      soft:    "bg-[#16A34A]/10 text-[#065F46] border border-[#16A34A]/30 dark:bg-[#22C55E]/10 dark:text-[#22C55E] dark:border-[#22C55E]/30",
      outline: "border border-[#16A34A] text-[#16A34A] dark:border-[#22C55E] dark:text-[#22C55E]",
    },
    red: {
      solid:   "bg-red-600 text-white border border-red-600 dark:bg-red-500 dark:border-red-500",
      soft:    "bg-red-50 text-red-700 border border-red-300 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30",
      outline: "border border-red-600 text-red-600 dark:border-red-500 dark:text-red-500",
    },
    amber: {
      solid:   "bg-amber-500 text-black border border-amber-500",
      soft:    "bg-amber-50 text-amber-800 border border-amber-300 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30",
      outline: "border border-amber-500 text-amber-700 dark:text-amber-400",
    },
    blue: {
      solid:   "bg-[#0EA5E9] text-white border border-[#0EA5E9] dark:bg-[#38BDF8] dark:text-black dark:border-[#38BDF8]",
      soft:    "bg-sky-50 text-sky-700 border border-sky-300 dark:bg-sky-400/10 dark:text-sky-400 dark:border-sky-400/30",
      outline: "border border-[#0EA5E9] text-sky-700 dark:border-[#38BDF8] dark:text-[#38BDF8]",
    },
    violet: {
      solid:   "bg-violet-600 text-white border border-violet-600",
      soft:    "bg-violet-50 text-violet-700 border border-violet-300 dark:bg-violet-500/10 dark:text-violet-400 dark:border-violet-500/30",
      outline: "border border-violet-600 text-violet-700 dark:border-violet-400 dark:text-violet-400",
    },
  },
  dotColors: {
    default: "bg-[#16A34A] dark:bg-[#22C55E]",
    emerald: "bg-[#16A34A] dark:bg-[#22C55E]",
    red:     "bg-red-600 dark:bg-red-500",
    amber:   "bg-amber-500",
    blue:    "bg-[#0EA5E9] dark:bg-[#38BDF8]",
    violet:  "bg-violet-600 dark:bg-violet-400",
  },
};
