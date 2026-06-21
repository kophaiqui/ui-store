import type { InputStyleConfig } from "./default";
export type { InputStyleConfig };

export const neumorphismStyle: InputStyleConfig = {
  base: "flex w-full rounded-2xl text-slate-700 placeholder:text-slate-400 bg-[#e8ecf1] transition-all duration-200 focus:outline-none disabled:pointer-events-none disabled:opacity-40 read-only:cursor-default",
  sizes: {
    sm: "h-7 text-xs px-3",
    md: "h-9 text-sm px-4",
    lg: "h-11 text-base px-4",
  },
  variants: {
    outline: {
      base:  "shadow-[inset_3px_3px_7px_rgba(163,177,198,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.7)] focus:ring-2 focus:ring-blue-400/30",
      error: "shadow-[inset_3px_3px_7px_rgba(163,177,198,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.7)] ring-2 ring-red-400/40",
    },
    filled: {
      base:  "shadow-[inset_3px_3px_7px_rgba(163,177,198,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.7)] focus:ring-2 focus:ring-blue-400/30",
      error: "shadow-[inset_3px_3px_7px_rgba(163,177,198,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.7)] ring-2 ring-red-400/40",
    },
    ghost: {
      base:  "shadow-none bg-transparent hover:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.4),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] focus:shadow-[inset_3px_3px_7px_rgba(163,177,198,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.7)] focus:bg-[#e8ecf1]",
      error: "shadow-none ring-2 ring-red-400/40",
    },
  },
  icon: "pointer-events-none flex items-center text-slate-400",
  errorText: "text-xs text-red-500",
};
