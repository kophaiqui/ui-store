import type { ButtonStyleConfig } from "./default";
export type { ButtonStyleConfig, ButtonVariant, ButtonSize, ButtonShape } from "./default";

export const auroraStyle: ButtonStyleConfig = {
  base: "inline-flex items-center justify-center font-medium whitespace-nowrap transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0e1f]",
  sizes: {
    sm: { base: "h-7 px-3 gap-1.5", square: "size-7", text: "text-xs" },
    md: { base: "h-9 px-4 gap-2",   square: "size-9", text: "text-sm" },
    lg: { base: "h-11 px-6 gap-2.5",square: "size-11",text: "text-base" },
  },
  shapes: {
    default: "rounded-lg",
    pill: "rounded-full",
  },
  variants: {
    solid: {
      base:  "bg-gradient-to-r from-teal-500 via-indigo-500 to-violet-500 text-white shadow-[0_0_20px_rgba(45,212,191,0.3)]",
      hover: "hover:shadow-[0_0_28px_rgba(45,212,191,0.45)]",
      focus: "focus-visible:ring-teal-400/50",
    },
    outline: {
      base:  "border border-teal-400/25 bg-indigo-950/40 text-teal-100",
      hover: "hover:border-teal-400/45 hover:bg-indigo-900/50",
      focus: "focus-visible:ring-teal-400/40",
    },
    ghost: {
      base:  "bg-transparent text-indigo-300/70",
      hover: "hover:bg-indigo-900/40 hover:text-teal-200",
      focus: "focus-visible:ring-teal-400/30",
    },
    soft: {
      base:  "bg-indigo-500/10 text-indigo-200 border border-indigo-400/15",
      hover: "hover:bg-indigo-500/20",
      focus: "focus-visible:ring-teal-400/40",
    },
    link: {
      base:  "bg-transparent text-teal-300 underline-offset-4 px-0 rounded-none h-auto",
      hover: "hover:text-teal-200 hover:underline",
      focus: "focus-visible:ring-teal-400/40",
    },
    destructive: {
      base:  "bg-rose-500/15 border border-rose-400/30 text-rose-200 shadow-[0_0_12px_rgba(244,63,94,0.2)]",
      hover: "hover:bg-rose-500/25 hover:border-rose-400/45",
      focus: "focus-visible:ring-rose-400/50",
    },
  },
  disabled: "opacity-40",
};
