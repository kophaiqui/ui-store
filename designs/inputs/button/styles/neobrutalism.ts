import type { ButtonStyleConfig } from "./default";
export type { ButtonStyleConfig };

export const neobrutalismStyle: ButtonStyleConfig = {
  base: "inline-flex items-center justify-center font-black whitespace-nowrap transition-all duration-100 ease-out focus-visible:outline-none focus-visible:ring-0 border-2 border-zinc-950 dark:border-white uppercase tracking-wide active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
  sizes: {
    sm: { base: "h-7 px-3 gap-1.5", square: "size-7", text: "text-xs" },
    md: { base: "h-9 px-4 gap-2",   square: "size-9", text: "text-sm" },
    lg: { base: "h-11 px-6 gap-2.5",square: "size-11",text: "text-sm" },
  },
  shapes: {
    default: "rounded-none",
    pill: "rounded-none",
  },
  variants: {
    solid: {
      base:  "bg-yellow-300 text-zinc-950 shadow-[4px_4px_0px_0px_#09090b] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.7)]",
      hover: "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#09090b] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)]",
      focus: "focus-visible:outline-2 focus-visible:outline-zinc-950 dark:focus-visible:outline-white",
    },
    outline: {
      base:  "bg-white dark:bg-[#111111] text-zinc-950 dark:text-white shadow-[4px_4px_0px_0px_#09090b] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.7)]",
      hover: "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#09090b] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)] hover:bg-zinc-100 dark:hover:bg-[#1A1A1A]",
      focus: "focus-visible:outline-2 focus-visible:outline-zinc-950 dark:focus-visible:outline-white",
    },
    ghost: {
      base:  "bg-transparent text-zinc-950 dark:text-white border-transparent shadow-none",
      hover: "hover:bg-zinc-100 dark:hover:bg-[#1A1A1A]",
      focus: "focus-visible:outline-2 focus-visible:outline-zinc-950 dark:focus-visible:outline-white",
    },
    soft: {
      base:  "bg-zinc-100 dark:bg-[#1A1A1A] text-zinc-950 dark:text-white shadow-[3px_3px_0px_0px_#09090b] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)]",
      hover: "hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#09090b] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)] hover:bg-zinc-200 dark:hover:bg-[#222222]",
      focus: "focus-visible:outline-2 focus-visible:outline-zinc-950 dark:focus-visible:outline-white",
    },
    link: {
      base:  "bg-transparent text-zinc-950 dark:text-white underline-offset-4 px-0 border-transparent shadow-none h-auto font-black",
      hover: "hover:text-zinc-700 dark:hover:text-[#D1D5DB] hover:underline",
      focus: "focus-visible:outline-2 focus-visible:outline-zinc-950 dark:focus-visible:outline-white",
    },
    destructive: {
      base:  "bg-red-400 text-white shadow-[4px_4px_0px_0px_#09090b] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.7)]",
      hover: "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#09090b] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)] hover:bg-red-500",
      focus: "focus-visible:outline-2 focus-visible:outline-zinc-950 dark:focus-visible:outline-white",
    },
  },
  disabled: "opacity-40 pointer-events-none",
};
