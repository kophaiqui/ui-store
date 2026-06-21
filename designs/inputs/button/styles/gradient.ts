import type { ButtonStyleConfig } from "./default";
export type { ButtonStyleConfig };

export const gradientStyle: ButtonStyleConfig = {
  base: "inline-flex items-center justify-center font-medium whitespace-nowrap transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 active:scale-[0.97]",
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
      base:  "bg-gradient-to-r from-fuchsia-600 to-pink-500 text-white shadow-[0_4px_15px_rgba(217,70,239,0.25)]",
      hover: "hover:from-fuchsia-500 hover:to-pink-400 hover:shadow-[0_4px_20px_rgba(217,70,239,0.35)]",
      focus: "focus-visible:ring-fuchsia-500/50",
    },
    outline: {
      base:  "border border-fuchsia-500/40 bg-transparent text-fuchsia-300",
      hover: "hover:bg-fuchsia-500/10 hover:border-fuchsia-500/60",
      focus: "focus-visible:ring-fuchsia-500/50",
    },
    ghost: {
      base:  "bg-transparent text-zinc-300",
      hover: "hover:bg-zinc-800 hover:text-zinc-100",
      focus: "focus-visible:ring-fuchsia-500/50",
    },
    soft: {
      base:  "bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300",
      hover: "hover:bg-fuchsia-500/15 hover:border-fuchsia-500/30",
      focus: "focus-visible:ring-fuchsia-500/50",
    },
    link: {
      base:  "bg-transparent text-fuchsia-400 underline-offset-4 px-0 rounded-none h-auto",
      hover: "hover:text-fuchsia-300 hover:underline",
      focus: "focus-visible:ring-fuchsia-500/50",
    },
    destructive: {
      base:  "bg-gradient-to-r from-red-600 to-rose-500 text-white shadow-[0_4px_15px_rgba(239,68,68,0.2)]",
      hover: "hover:from-red-500 hover:to-rose-400 hover:shadow-[0_4px_20px_rgba(239,68,68,0.3)]",
      focus: "focus-visible:ring-red-500/50",
    },
  },
  disabled: "opacity-40 pointer-events-none",
};
