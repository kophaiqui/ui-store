export type RadioSize = "sm" | "md" | "lg";

export type RadioStyleConfig = {
  root: string;
  sizes: Record<RadioSize, string>;
  dot: string;
  dotSizes: Record<RadioSize, string>;
  label: string;
  description: string;
};

export const defaultStyle: RadioStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center rounded-full border border-border bg-card transition-all duration-150 hover:border-input data-[checked]:border-emerald-500 data-[checked]:bg-emerald-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40",
  sizes: {
    sm: "size-[14px]",
    md: "size-[18px]",
    lg: "size-[22px]",
  },
  dot: "rounded-full bg-emerald-500 transition-transform duration-100 scale-0 data-[checked]:scale-100",
  dotSizes: {
    sm: "size-[6px]",
    md: "size-[8px]",
    lg: "size-[10px]",
  },
  label: "text-sm text-foreground/90 group-hover:text-foreground transition-colors duration-150 leading-none",
  description: "text-xs text-muted-foreground leading-relaxed",
};
