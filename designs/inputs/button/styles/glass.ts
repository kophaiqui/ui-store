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
      base:  "bg-sky-500/15 border border-sky-500/30 text-sky-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.30),0_2px_4px_rgba(0,0,0,0.08)] dark:bg-sky-400/20 dark:border-sky-400/35 dark:text-sky-200 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_12px_rgba(56,189,248,0.18),0_2px_8px_rgba(0,0,0,0.35)]",
      hover: "hover:bg-sky-500/25 hover:border-sky-500/45 hover:text-sky-800 dark:hover:bg-sky-400/30 dark:hover:border-sky-400/50 dark:hover:text-sky-100",
      focus: "focus-visible:ring-sky-500/50 dark:focus-visible:ring-sky-400/60",
    },
    outline: {
      base:  "bg-black/5 border border-black/15 text-foreground/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.60),0_1px_3px_rgba(0,0,0,0.06)] dark:bg-white/8 dark:border-white/15 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_2px_8px_rgba(0,0,0,0.25)]",
      hover: "hover:bg-black/8 hover:border-black/20 dark:hover:bg-white/12 dark:hover:border-white/25",
      focus: "focus-visible:ring-sky-500/40 dark:focus-visible:ring-sky-400/50",
    },
    ghost: {
      base:  "bg-transparent text-foreground/65",
      hover: "hover:bg-black/5 hover:text-foreground dark:hover:bg-white/8",
      focus: "focus-visible:ring-sky-500/40 dark:focus-visible:ring-sky-400/50",
    },
    soft: {
      base:  "bg-black/5 border border-black/10 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.50)] dark:bg-white/8 dark:border-white/10 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_1px_4px_rgba(0,0,0,0.20)]",
      hover: "hover:bg-black/8 hover:border-black/15 dark:hover:bg-white/12 dark:hover:border-white/18",
      focus: "focus-visible:ring-sky-500/40 dark:focus-visible:ring-sky-400/50",
    },
    link: {
      base:  "bg-transparent text-sky-600 underline-offset-4 px-0 rounded-none h-auto dark:text-sky-300/80",
      hover: "hover:text-sky-700 hover:underline dark:hover:text-sky-200",
      focus: "focus-visible:ring-sky-500/40 dark:focus-visible:ring-sky-400/50",
    },
    destructive: {
      base:  "bg-red-500/10 border border-red-500/25 text-red-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.30),0_2px_4px_rgba(0,0,0,0.06)] dark:bg-red-400/15 dark:border-red-400/25 dark:text-red-300 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_10px_rgba(248,113,113,0.15),0_2px_8px_rgba(0,0,0,0.35)]",
      hover: "hover:bg-red-500/18 hover:border-red-500/38 dark:hover:bg-red-400/25 dark:hover:border-red-400/40 dark:hover:text-red-200",
      focus: "focus-visible:ring-red-500/50 dark:focus-visible:ring-red-400/60",
    },
  },
  disabled: "opacity-40",
};
