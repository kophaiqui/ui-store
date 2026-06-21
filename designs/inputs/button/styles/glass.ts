export type { ButtonStyleConfig, ButtonVariant, ButtonSize, ButtonShape } from "./default";
import type { ButtonStyleConfig } from "./default";

export const glassStyle: ButtonStyleConfig = {
  base: "inline-flex items-center justify-center font-medium whitespace-nowrap transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background backdrop-blur-sm active:scale-[0.97]",
  sizes: {
    sm: { base: "h-7 px-3 gap-1.5",  square: "size-7",  text: "text-xs" },
    md: { base: "h-9 px-4 gap-2",    square: "size-9",  text: "text-sm" },
    lg: { base: "h-11 px-6 gap-2.5", square: "size-11", text: "text-base" },
  },
  shapes: {
    default: "rounded-lg",
    pill: "rounded-full",
  },
  variants: {
    solid: {
      base:  "bg-sky-400/20 border border-sky-400/30 text-sky-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_1px_3px_rgba(0,0,0,0.4)]",
      hover: "hover:bg-sky-400/30 hover:border-sky-400/50 hover:text-sky-100",
      focus: "focus-visible:ring-sky-400/50",
    },
    outline: {
      base:  "border border-white/15 bg-white/6 text-foreground/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
      hover: "hover:bg-white/8 hover:border-white/25 hover:text-foreground",
      focus: "focus-visible:ring-sky-400/50",
    },
    ghost: {
      base:  "bg-transparent text-foreground/70",
      hover: "hover:bg-white/8 hover:text-foreground",
      focus: "focus-visible:ring-sky-400/50",
    },
    soft: {
      base:  "bg-white/8 text-foreground border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
      hover: "hover:bg-white/12",
      focus: "focus-visible:ring-sky-400/50",
    },
    link: {
      base:  "bg-transparent text-foreground/80 underline-offset-4 px-0 rounded-none h-auto",
      hover: "hover:text-foreground hover:underline",
      focus: "focus-visible:ring-sky-400/50",
    },
    destructive: {
      base:  "bg-red-400/10 border border-red-400/20 text-red-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
      hover: "hover:bg-red-400/20 hover:border-red-400/30 hover:text-red-200",
      focus: "focus-visible:ring-red-400/50",
    },
  },
  disabled: "opacity-40",
};
