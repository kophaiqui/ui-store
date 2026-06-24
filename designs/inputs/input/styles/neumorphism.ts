import type { InputStyleConfig } from "./default";
export type { InputStyleConfig };

export const neumorphismStyle: InputStyleConfig = {
  base: "flex w-full rounded-2xl text-slate-700 dark:text-[#E2E8F0] placeholder:text-slate-400 dark:placeholder:text-slate-500 bg-[#e8ecf1] dark:bg-[#1E293B] transition-all duration-200 focus:outline-none disabled:pointer-events-none disabled:opacity-40 read-only:cursor-default",
  sizes: {
    sm: "h-7 text-xs px-3",
    md: "h-9 text-sm px-4",
    lg: "h-11 text-base px-4",
  },
  variants: {
    outline: {
      base:  "shadow-[inset_3px_3px_7px_rgba(163,177,198,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.7)] dark:shadow-[inset_3px_3px_7px_rgba(0,0,0,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.03)] focus:ring-2 focus:ring-blue-400/30 dark:focus:ring-[#818CF8]/30",
      error: "shadow-[inset_3px_3px_7px_rgba(163,177,198,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.7)] dark:shadow-[inset_3px_3px_7px_rgba(0,0,0,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.03)] ring-2 ring-red-400/40",
    },
    filled: {
      base:  "shadow-[inset_3px_3px_7px_rgba(163,177,198,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.7)] dark:shadow-[inset_3px_3px_7px_rgba(0,0,0,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.03)] focus:ring-2 focus:ring-blue-400/30 dark:focus:ring-[#818CF8]/30",
      error: "shadow-[inset_3px_3px_7px_rgba(163,177,198,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.7)] dark:shadow-[inset_3px_3px_7px_rgba(0,0,0,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.03)] ring-2 ring-red-400/40",
    },
    ghost: {
      base:  "shadow-none bg-transparent hover:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.4),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] dark:hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.4),inset_-2px_-2px_5px_rgba(255,255,255,0.02)] focus:shadow-[inset_3px_3px_7px_rgba(163,177,198,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.7)] dark:focus:shadow-[inset_3px_3px_7px_rgba(0,0,0,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.03)] focus:bg-[#e8ecf1] dark:focus:bg-[#1E293B]",
      error: "shadow-none ring-2 ring-red-400/40",
    },
  },
  icon: "pointer-events-none flex items-center text-slate-400 dark:text-slate-500",
  errorText: "text-xs text-red-500",
};
