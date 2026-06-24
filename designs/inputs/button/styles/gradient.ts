import type { ButtonStyleConfig } from "./default";
export type { ButtonStyleConfig };

export const gradientStyle: ButtonStyleConfig = {
  base: "inline-flex items-center justify-center font-medium whitespace-nowrap transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950 active:scale-[0.97]",
  sizes: {
    sm: { base: "h-7 px-3 gap-1.5", square: "size-7", text: "text-xs" },
    md: { base: "h-9 px-4 gap-2",   square: "size-9", text: "text-sm" },
    lg: { base: "h-11 px-6 gap-2.5",square: "size-11",text: "text-base" },
  },
  shapes: {
    default: "rounded-xl",
    pill: "rounded-full",
  },
  variants: {
    solid: {
      base:  "bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white shadow-[0_4px_15px_rgba(124,58,237,0.2)] dark:from-fuchsia-600 dark:to-pink-500 dark:shadow-[0_4px_15px_rgba(217,70,239,0.25)]",
      hover: "hover:from-[#6D28D9] hover:to-[#DB2777] hover:shadow-[0_4px_20px_rgba(124,58,237,0.3)] dark:hover:from-fuchsia-500 dark:hover:to-pink-400 dark:hover:shadow-[0_4px_20px_rgba(217,70,239,0.35)]",
      focus: "focus-visible:ring-[#7C3AED]/50 dark:focus-visible:ring-fuchsia-500/50",
    },
    outline: {
      base:  "border border-[#7C3AED]/40 bg-transparent text-[#7C3AED] dark:border-fuchsia-500/40 dark:text-fuchsia-300",
      hover: "hover:bg-[#7C3AED]/8 hover:border-[#7C3AED]/60 dark:hover:bg-fuchsia-500/10 dark:hover:border-fuchsia-500/60",
      focus: "focus-visible:ring-[#7C3AED]/50 dark:focus-visible:ring-fuchsia-500/50",
    },
    ghost: {
      base:  "bg-transparent text-[#64748B] dark:text-zinc-300",
      hover: "hover:bg-[#7C3AED]/8 hover:text-[#0F172A] dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
      focus: "focus-visible:ring-[#7C3AED]/50 dark:focus-visible:ring-fuchsia-500/50",
    },
    soft: {
      base:  "bg-[#7C3AED]/8 border border-[#7C3AED]/20 text-[#7C3AED] dark:bg-fuchsia-500/10 dark:border-fuchsia-500/20 dark:text-fuchsia-300",
      hover: "hover:bg-[#7C3AED]/14 hover:border-[#7C3AED]/30 dark:hover:bg-fuchsia-500/15 dark:hover:border-fuchsia-500/30",
      focus: "focus-visible:ring-[#7C3AED]/50 dark:focus-visible:ring-fuchsia-500/50",
    },
    link: {
      base:  "bg-transparent text-[#7C3AED] underline-offset-4 px-0 rounded-none h-auto dark:text-fuchsia-400",
      hover: "hover:text-[#6D28D9] hover:underline dark:hover:text-fuchsia-300",
      focus: "focus-visible:ring-[#7C3AED]/50 dark:focus-visible:ring-fuchsia-500/50",
    },
    destructive: {
      base:  "bg-gradient-to-r from-red-600 to-rose-500 text-white shadow-[0_4px_15px_rgba(239,68,68,0.15)] dark:shadow-[0_4px_15px_rgba(239,68,68,0.2)]",
      hover: "hover:from-red-500 hover:to-rose-400 hover:shadow-[0_4px_20px_rgba(239,68,68,0.25)] dark:hover:shadow-[0_4px_20px_rgba(239,68,68,0.3)]",
      focus: "focus-visible:ring-red-500/50",
    },
  },
  disabled: "opacity-40 pointer-events-none",
};
