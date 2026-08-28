export type { InputStyleConfig, InputVariant, InputSize } from "./default";
import type { InputStyleConfig } from "./default";

export const materialStyle: InputStyleConfig = {
  base: "flex w-full rounded-lg text-foreground placeholder:text-foreground/40 transition-all duration-150 focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-40 read-only:cursor-default",
  sizes: {
    sm: "h-7 text-xs px-2.5",
    md: "h-9 text-sm px-3",
    lg: "h-11 text-base px-4",
  },
  variants: {
    outline: {
      base:  "border bg-white shadow-[0_1px_2px_rgba(103,80,164,0.06)] border-violet-200/50 hover:border-violet-300 focus:border-violet-500 focus:ring-violet-500/20 dark:bg-violet-950/20 dark:border-violet-800/30 dark:hover:border-violet-700 dark:focus:border-violet-400 dark:focus:ring-violet-400/20",
      error: "border bg-white shadow-[0_1px_2px_rgba(103,80,164,0.06)] border-rose-400/60 focus:border-rose-500 focus:ring-rose-500/20 dark:bg-violet-950/20 dark:border-rose-500/50 dark:focus:border-rose-400 dark:focus:ring-rose-400/20",
    },
    filled: {
      base:  "border-0 bg-violet-100/70 hover:bg-violet-100 focus:bg-violet-100 focus:ring-violet-500/20 dark:bg-violet-900/25 dark:hover:bg-violet-900/35 dark:focus:bg-violet-900/35 dark:focus:ring-violet-400/20",
      error: "border-0 bg-violet-100/70 ring-2 ring-rose-500/40 dark:bg-violet-900/25 dark:ring-rose-400/40",
    },
    ghost: {
      base:  "border-0 bg-transparent shadow-none hover:bg-violet-50 focus:bg-violet-50 focus:ring-violet-500/20 dark:hover:bg-violet-500/10 dark:focus:bg-violet-500/10 dark:focus:ring-violet-400/20",
      error: "border-0 bg-transparent shadow-none ring-2 ring-rose-500/40 dark:ring-rose-400/40",
    },
  },
  icon: "pointer-events-none flex items-center text-foreground/40",
  errorText: "text-xs text-rose-600 dark:text-rose-300",
};
