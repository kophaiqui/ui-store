export type { InputStyleConfig, InputVariant, InputSize } from "./default";
import type { InputStyleConfig } from "./default";

export const auroraStyle: InputStyleConfig = {
  base: "flex w-full rounded-lg text-teal-50 placeholder:text-indigo-300/40 transition-all duration-150 focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-40 read-only:cursor-default",
  sizes: {
    sm: "h-7 text-xs px-2.5",
    md: "h-9 text-sm px-3",
    lg: "h-11 text-base px-4",
  },
  variants: {
    outline: {
      base:  "border bg-indigo-950/50 border-indigo-400/20 hover:border-indigo-400/35 focus:border-teal-400/50 focus:ring-teal-400/25",
      error: "border bg-indigo-950/50 border-rose-400/50 focus:border-rose-400/60 focus:ring-rose-400/20",
    },
    filled: {
      base:  "border-0 bg-indigo-900/40 hover:bg-indigo-900/55 focus:bg-indigo-900/55 focus:ring-teal-400/25",
      error: "border-0 bg-indigo-900/40 ring-2 ring-rose-400/30",
    },
    ghost: {
      base:  "border-0 bg-transparent shadow-none hover:bg-indigo-900/30 focus:bg-indigo-900/30 focus:ring-teal-400/25",
      error: "border-0 bg-transparent shadow-none ring-2 ring-rose-400/30",
    },
  },
  icon: "pointer-events-none flex items-center text-indigo-300/50",
  errorText: "text-xs text-rose-300",
};
