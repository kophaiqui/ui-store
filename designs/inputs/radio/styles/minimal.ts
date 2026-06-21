export type { RadioStyleConfig, RadioSize } from "./default";
import type { RadioStyleConfig } from "./default";

export const minimalStyle: RadioStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center rounded-full border border-border bg-transparent transition-all duration-150 hover:border-foreground/40 data-[checked]:border-foreground data-[checked]:bg-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/20 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40",
  sizes: { sm: "size-[14px]", md: "size-[18px]", lg: "size-[22px]" },
  dot: "rounded-full bg-foreground transition-transform duration-100 scale-0 data-[checked]:scale-100",
  dotSizes: { sm: "size-[6px]", md: "size-[8px]", lg: "size-[10px]" },
  label: "text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-150 leading-none",
  description: "text-xs text-muted-foreground leading-relaxed",
};
