export type { ButtonStyleConfig, ButtonVariant, ButtonSize, ButtonShape } from "./default";
import type { ButtonStyleConfig } from "./default";

export const minimalStyle: ButtonStyleConfig = {
  base: "inline-flex items-center justify-center font-medium whitespace-nowrap transition-all duration-150 ease-out focus-visible:outline-none active:scale-[0.97]",
  sizes: {
    sm: { base: "h-7 px-3 gap-1.5",  square: "size-7",  text: "text-xs" },
    md: { base: "h-9 px-4 gap-2",    square: "size-9",  text: "text-sm" },
    lg: { base: "h-11 px-6 gap-2.5", square: "size-11", text: "text-base" },
  },
  shapes: {
    default: "rounded-none",
    pill: "rounded-none",
  },
  variants: {
    solid: {
      base:  "border border-foreground text-foreground bg-transparent",
      hover: "hover:bg-foreground hover:text-background",
      focus: "focus-visible:ring-1 focus-visible:ring-foreground/30",
    },
    outline: {
      base:  "border-0 border-b border-border text-foreground bg-transparent",
      hover: "hover:border-foreground hover:text-foreground",
      focus: "focus-visible:ring-0",
    },
    ghost: {
      base:  "bg-transparent text-muted-foreground",
      hover: "hover:text-foreground",
      focus: "focus-visible:ring-1 focus-visible:ring-foreground/20",
    },
    soft: {
      base:  "bg-muted/30 text-foreground border-0",
      hover: "hover:bg-muted/60",
      focus: "focus-visible:ring-1 focus-visible:ring-foreground/20",
    },
    link: {
      base:  "bg-transparent text-foreground/80 underline-offset-4 px-0 rounded-none h-auto",
      hover: "hover:text-foreground hover:underline",
      focus: "focus-visible:ring-0",
    },
    destructive: {
      base:  "border-0 border-b border-red-500/40 text-red-500 bg-transparent",
      hover: "hover:border-red-500 hover:text-red-600",
      focus: "focus-visible:ring-0",
    },
  },
  disabled: "opacity-40",
};
