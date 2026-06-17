export type AccordionStyleConfig = {
  root: string;
  trigger: string;
  panel: string;
};

export const defaultStyle: AccordionStyleConfig = {
  root: "w-full divide-y divide-border",
  trigger: "group flex w-full items-center justify-between py-4 text-sm font-medium text-foreground/90 hover:text-foreground transition-colors duration-150 focus-visible:outline-none cursor-default select-none",
  panel: "pb-4 text-sm text-muted-foreground leading-relaxed",
};
