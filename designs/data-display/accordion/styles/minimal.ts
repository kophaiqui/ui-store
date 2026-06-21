export type { AccordionStyleConfig } from "./default";
import type { AccordionStyleConfig } from "./default";

export const minimalStyle: AccordionStyleConfig = {
  root: "w-full divide-y divide-border",
  trigger: "group flex w-full items-center justify-between py-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150 focus-visible:outline-none cursor-default select-none tracking-wide uppercase text-xs",
  panel: "pb-4 text-sm text-muted-foreground leading-relaxed",
};
