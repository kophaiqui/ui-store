import type { InputStyleConfig } from "./default";
export type { InputStyleConfig };

export const neobrutalismStyle: InputStyleConfig = {
  base: "flex w-full rounded-none text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 transition-all duration-100 focus:outline-none disabled:pointer-events-none disabled:opacity-40 read-only:cursor-default font-medium",
  sizes: {
    sm: "h-7 text-xs px-2.5",
    md: "h-9 text-sm px-3",
    lg: "h-11 text-base px-4",
  },
  variants: {
    outline: {
      base:  "border-2 border-zinc-950 dark:border-white bg-white dark:bg-[#111111] shadow-[3px_3px_0px_0px_#09090b] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)] focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[1px_1px_0px_0px_#09090b] dark:focus:shadow-[1px_1px_0px_0px_rgba(255,255,255,0.7)]",
      error: "border-2 border-red-500 bg-white dark:bg-[#111111] shadow-[3px_3px_0px_0px_rgba(239,68,68,0.5)]",
    },
    filled: {
      base:  "border-0 border-b-2 border-zinc-950 dark:border-white bg-zinc-100 dark:bg-[#1A1A1A] focus:bg-white dark:focus:bg-[#111111]",
      error: "border-0 border-b-2 border-red-500 bg-zinc-100 dark:bg-[#1A1A1A]",
    },
    ghost: {
      base:  "border-0 border-b-2 border-zinc-400 dark:border-zinc-600 bg-transparent focus:border-zinc-950 dark:focus:border-white",
      error: "border-0 border-b-2 border-red-500 bg-transparent",
    },
  },
  icon: "pointer-events-none flex items-center text-zinc-500 dark:text-[#9CA3AF]",
  errorText: "text-xs font-bold text-red-600 dark:text-red-400",
};
