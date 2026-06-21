import type { InputStyleConfig } from "./default";
export type { InputStyleConfig };

export const gradientStyle: InputStyleConfig = {
  base: "flex w-full rounded-xl text-zinc-200 placeholder:text-zinc-600 transition-all duration-150 focus:outline-none disabled:pointer-events-none disabled:opacity-40 read-only:cursor-default",
  sizes: {
    sm: "h-7 text-xs px-3",
    md: "h-9 text-sm px-3",
    lg: "h-11 text-base px-4",
  },
  variants: {
    outline: {
      base:  "border border-zinc-700 bg-zinc-900 shadow-[inset_0_2px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.04)] focus:border-fuchsia-500/60 focus:ring-2 focus:ring-fuchsia-500/20",
      error: "border border-red-500/60 bg-zinc-900 shadow-[inset_0_2px_4px_rgba(0,0,0,0.25)] focus:border-red-500/80 focus:ring-2 focus:ring-red-500/20",
    },
    filled: {
      base:  "border-0 bg-zinc-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] focus:bg-zinc-800/80 focus:ring-2 focus:ring-fuchsia-500/20",
      error: "border-0 bg-zinc-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] ring-2 ring-red-500/40",
    },
    ghost: {
      base:  "border-0 bg-transparent hover:bg-zinc-900/60 focus:bg-zinc-900/60 focus:ring-2 focus:ring-fuchsia-500/20",
      error: "border-0 bg-transparent ring-2 ring-red-500/40",
    },
  },
  icon: "pointer-events-none flex items-center text-zinc-500",
  errorText: "text-xs text-red-400",
};
