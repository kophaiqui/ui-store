import type { CheckboxSize } from "../Checkbox";

export type CheckboxStyleConfig = {
  root: string;
  sizes: Record<CheckboxSize, string>;
  checkSizes: Record<CheckboxSize, { w: number; h: number; d: string }>;
  indicator: string;
  label: string;
  description: string;
};

export const defaultStyle: CheckboxStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center border border-border bg-card transition-all duration-150 hover:border-input data-[checked]:border-emerald-500 data-[checked]:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40",
  sizes: {
    sm: "size-[14px] rounded-[3px]",
    md: "size-[18px] rounded",
    lg: "size-[22px] rounded-md",
  },
  checkSizes: {
    sm: { w: 8,  h: 6, d: "M1 3L2.8 5L7 1" },
    md: { w: 10, h: 7, d: "M1 3.5L3.5 6L9 1" },
    lg: { w: 12, h: 9, d: "M1.5 4.5L4.5 7.5L10.5 1.5" },
  },
  indicator: "flex items-center justify-center text-zinc-950",
  label: "text-sm text-foreground/90 group-hover:text-foreground transition-colors duration-150 leading-none",
  description: "text-xs text-muted-foreground leading-relaxed",
};
