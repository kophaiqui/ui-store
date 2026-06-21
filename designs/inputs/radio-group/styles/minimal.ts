export type { RadioGroupStyleConfig, RadioGroupSize } from "./default";
import type { RadioGroupStyleConfig } from "./default";

export const minimalStyle: RadioGroupStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center rounded-full border border-border bg-transparent transition-all duration-150 hover:border-foreground/40 data-[checked]:border-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/20 focus-visible:ring-offset-1 focus-visible:ring-offset-background",
  sizes: { sm: "size-[14px]", md: "size-[18px]", lg: "size-[22px]" },
  dot: "bg-foreground",
  dotSizes: { sm: "size-[6px]", md: "size-[8px]", lg: "size-[10px]" },
  label: "text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-150",
};
