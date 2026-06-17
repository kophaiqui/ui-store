import type { RadioGroupSize } from "../RadioGroup";

export type RadioGroupStyleConfig = {
  root: string;
  sizes: Record<RadioGroupSize, string>;
  dot: string;
  dotSizes: Record<RadioGroupSize, string>;
  label: string;
};

export const defaultStyle: RadioGroupStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center rounded-full border border-border bg-card transition-all duration-150 hover:border-input data-[checked]:border-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background",
  sizes: {
    sm: "size-[14px]",
    md: "size-[18px]",
    lg: "size-[22px]",
  },
  dot: "bg-emerald-500",
  dotSizes: {
    sm: "size-[6px]",
    md: "size-[8px]",
    lg: "size-[10px]",
  },
  label: "text-sm text-foreground/90 group-hover:text-foreground transition-colors duration-150",
};
