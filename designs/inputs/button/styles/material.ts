export type { ButtonStyleConfig, ButtonVariant, ButtonSize, ButtonShape } from "./default";
import type { ButtonStyleConfig } from "./default";

export const materialStyle: ButtonStyleConfig = {
  base: "inline-flex items-center justify-center font-medium whitespace-nowrap transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  sizes: {
    sm: { base: "h-7 px-3 gap-1.5", square: "size-7", text: "text-xs" },
    md: { base: "h-9 px-4 gap-2",   square: "size-9", text: "text-sm" },
    lg: { base: "h-11 px-6 gap-2.5",square: "size-11",text: "text-base" },
  },
  shapes: {
    default: "rounded-full",
    pill: "rounded-full",
  },
  variants: {
    solid: {
      base:  "bg-violet-600 text-white shadow-[0_1px_3px_rgba(103,80,164,0.3),0_1px_2px_rgba(103,80,164,0.2)] dark:bg-violet-500",
      hover: "hover:bg-violet-700 hover:shadow-[0_2px_6px_rgba(103,80,164,0.35),0_1px_3px_rgba(103,80,164,0.25)] dark:hover:bg-violet-400",
      focus: "focus-visible:ring-violet-500/50",
    },
    outline: {
      base:  "border border-violet-300/70 bg-transparent text-violet-700 dark:border-violet-600/50 dark:text-violet-300",
      hover: "hover:bg-violet-50 dark:hover:bg-violet-500/10",
      focus: "focus-visible:ring-violet-500/40",
    },
    ghost: {
      base:  "bg-transparent text-violet-700 dark:text-violet-300",
      hover: "hover:bg-violet-50 dark:hover:bg-violet-500/10",
      focus: "focus-visible:ring-violet-500/30",
    },
    soft: {
      base:  "bg-violet-100 text-violet-800 dark:bg-violet-500/15 dark:text-violet-200",
      hover: "hover:bg-violet-200 dark:hover:bg-violet-500/25",
      focus: "focus-visible:ring-violet-500/30",
    },
    link: {
      base:  "bg-transparent text-violet-700 underline-offset-4 px-0 rounded-none h-auto dark:text-violet-300",
      hover: "hover:text-violet-800 hover:underline dark:hover:text-violet-200",
      focus: "focus-visible:ring-violet-500/30",
    },
    destructive: {
      base:  "bg-rose-600 text-white shadow-[0_1px_3px_rgba(225,29,72,0.3)] dark:bg-rose-500",
      hover: "hover:bg-rose-700 dark:hover:bg-rose-400",
      focus: "focus-visible:ring-rose-500/50",
    },
  },
  disabled: "opacity-40",
};
