export type { InputStyleConfig, InputVariant, InputSize } from "./default";
import type { InputStyleConfig } from "./default";

export const glassStyle: InputStyleConfig = {
  base: "flex w-full rounded-lg text-foreground placeholder:text-foreground/40 transition-all duration-150 focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-40 read-only:cursor-default backdrop-blur-sm",
  sizes: {
    sm: "h-7 text-xs px-2.5",
    md: "h-9 text-sm px-3",
    lg: "h-11 text-base px-4",
  },
  variants: {
    outline: {
      base:  "border border-black/12 bg-black/5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.70)] hover:border-black/20 focus:border-sky-500/50 focus:ring-sky-500/20 dark:border-white/15 dark:bg-white/6 dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.04)] dark:hover:border-white/25 dark:focus:border-sky-400/50 dark:focus:ring-sky-400/20",
      error: "border border-red-500/40 bg-black/5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)] focus:border-red-500/60 focus:ring-red-500/20 dark:border-red-400/50 dark:bg-white/6 dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.25)] dark:focus:border-red-400/70 dark:focus:ring-red-400/20",
    },
    filled: {
      base:  "border-0 bg-black/6 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)] hover:bg-black/9 focus:bg-black/9 focus:ring-sky-500/20 dark:bg-white/8 dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] dark:hover:bg-white/12 dark:focus:bg-white/12 dark:focus:ring-sky-400/20",
      error: "border-0 bg-black/6 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)] ring-2 ring-red-500/25 dark:bg-white/8 dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] dark:ring-red-400/30",
    },
    ghost: {
      base:  "border-0 bg-transparent shadow-none hover:bg-black/4 focus:bg-black/4 focus:ring-sky-500/20 dark:hover:bg-white/5 dark:focus:bg-white/5 dark:focus:ring-sky-400/20",
      error: "border-0 bg-transparent shadow-none ring-2 ring-red-500/25 dark:ring-red-400/30",
    },
  },
  icon: "pointer-events-none flex items-center text-foreground/40",
  errorText: "text-xs text-red-600 dark:text-red-300",
};
