export type ButtonVariant = "solid" | "outline" | "ghost" | "soft" | "link" | "destructive";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonShape = "default" | "pill" | "square";

export type ButtonStyleConfig = {
  base: string;
  sizes: Record<ButtonSize, { base: string; square: string; text: string }>;
  shapes: Record<"default" | "pill", string>;
  variants: Record<ButtonVariant, { base: string; hover: string; focus: string }>;
  disabled: string;
};

export const defaultStyle: ButtonStyleConfig = {
  base: "inline-flex items-center justify-center font-medium whitespace-nowrap transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  sizes: {
    sm: { base: "h-7 px-3 gap-1.5", square: "size-7", text: "text-xs" },
    md: { base: "h-9 px-4 gap-2",   square: "size-9", text: "text-sm" },
    lg: { base: "h-11 px-6 gap-2.5",square: "size-11",text: "text-base" },
  },
  shapes: {
    default: "rounded-md",
    pill: "rounded-full",
  },
  variants: {
    solid: {
      base:  "bg-primary text-primary-foreground shadow-[0_1px_2px_rgba(0,0,0,0.4)]",
      hover: "hover:bg-primary/90 hover:shadow-[0_2px_6px_rgba(0,0,0,0.5)]",
      focus: "focus-visible:ring-emerald-500/50",
    },
    outline: {
      base:  "border border-border bg-transparent text-foreground",
      hover: "hover:border-input hover:bg-muted/60",
      focus: "focus-visible:ring-emerald-500/50",
    },
    ghost: {
      base:  "bg-transparent text-muted-foreground",
      hover: "hover:bg-muted hover:text-foreground",
      focus: "focus-visible:ring-emerald-500/50",
    },
    soft: {
      base:  "bg-muted text-foreground",
      hover: "hover:bg-accent",
      focus: "focus-visible:ring-emerald-500/50",
    },
    link: {
      base:  "bg-transparent text-foreground/90 underline-offset-4 px-0 rounded-none h-auto",
      hover: "hover:text-foreground hover:underline",
      focus: "focus-visible:ring-emerald-500/50",
    },
    destructive: {
      base:  "bg-red-500/10 border border-red-500/20 text-red-400",
      hover: "hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-300",
      focus: "focus-visible:ring-red-500/50",
    },
  },
  disabled: "opacity-40",
};
