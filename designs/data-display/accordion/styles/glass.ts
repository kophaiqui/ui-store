export type { AccordionStyleConfig } from "./default";
import type { AccordionStyleConfig } from "./default";

export const glassStyle: AccordionStyleConfig = {
  root: "w-full divide-y divide-white/10",
  trigger: "group flex w-full items-center justify-between py-4 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-150 focus-visible:outline-none cursor-default select-none",
  panel: "pb-4 text-sm text-foreground/60 leading-relaxed",
};
