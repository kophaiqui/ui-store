import type { InputStyleConfig } from "./default";
export type { InputStyleConfig };

export const neobrutalismStyle: InputStyleConfig = {
  base: "flex w-full rounded-none text-zinc-950 placeholder:text-zinc-400 transition-all duration-100 focus:outline-none disabled:pointer-events-none disabled:opacity-40 read-only:cursor-default font-medium",
  sizes: {
    sm: "h-7 text-xs px-2.5",
    md: "h-9 text-sm px-3",
    lg: "h-11 text-base px-4",
  },
  variants: {
    outline: {
      base:  "border-2 border-zinc-950 bg-white shadow-[3px_3px_0px_0px_#09090b] focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[1px_1px_0px_0px_#09090b]",
      error: "border-2 border-red-500 bg-white shadow-[3px_3px_0px_0px_rgba(239,68,68,0.5)]",
    },
    filled: {
      base:  "border-0 border-b-2 border-zinc-950 bg-zinc-100 focus:bg-white",
      error: "border-0 border-b-2 border-red-500 bg-zinc-100",
    },
    ghost: {
      base:  "border-0 border-b-2 border-zinc-400 bg-transparent focus:border-zinc-950",
      error: "border-0 border-b-2 border-red-500 bg-transparent",
    },
  },
  icon: "pointer-events-none flex items-center text-zinc-500",
  errorText: "text-xs font-bold text-red-600",
};
