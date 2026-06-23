export type { ButtonStyleConfig, ButtonVariant, ButtonSize, ButtonShape } from "./default";
import type { ButtonStyleConfig } from "./default";

export const glassStyle: ButtonStyleConfig = {
  base: "inline-flex items-center justify-center font-medium whitespace-nowrap transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background backdrop-blur-md active:scale-[0.97]",
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
      base:  "bg-gradient-to-b from-sky-400/25 to-sky-400/15 border border-sky-400/40 text-sky-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.20),0_0_14px_rgba(56,189,248,0.22),0_2px_8px_rgba(0,0,0,0.40)]",
      hover: "hover:from-sky-400/35 hover:to-sky-400/22 hover:border-sky-400/55 hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_0_20px_rgba(56,189,248,0.32),0_2px_8px_rgba(0,0,0,0.40)]",
      focus: "focus-visible:ring-sky-400/60",
    },
    outline: {
      base:  "bg-gradient-to-b from-white/10 to-white/4 border border-white/20 text-foreground/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_2px_8px_rgba(0,0,0,0.30)]",
      hover: "hover:from-white/14 hover:to-white/8 hover:border-white/30 hover:text-foreground",
      focus: "focus-visible:ring-sky-400/50",
    },
    ghost: {
      base:  "bg-transparent text-foreground/65",
      hover: "hover:bg-white/8 hover:text-foreground",
      focus: "focus-visible:ring-sky-400/50",
    },
    soft: {
      base:  "bg-gradient-to-b from-white/12 to-white/6 text-foreground border border-white/14 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_1px_4px_rgba(0,0,0,0.25)]",
      hover: "hover:from-white/16 hover:to-white/10 hover:border-white/22",
      focus: "focus-visible:ring-sky-400/50",
    },
    link: {
      base:  "bg-transparent text-sky-300/80 underline-offset-4 px-0 rounded-none h-auto",
      hover: "hover:text-sky-200 hover:underline",
      focus: "focus-visible:ring-sky-400/50",
    },
    destructive: {
      base:  "bg-gradient-to-b from-red-400/18 to-red-400/10 border border-red-400/30 text-red-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_0_10px_rgba(248,113,113,0.18),0_2px_8px_rgba(0,0,0,0.40)]",
      hover: "hover:from-red-400/28 hover:to-red-400/18 hover:border-red-400/45 hover:text-red-100 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_0_16px_rgba(248,113,113,0.28),0_2px_8px_rgba(0,0,0,0.40)]",
      focus: "focus-visible:ring-red-400/60",
    },
  },
  disabled: "opacity-40",
};
