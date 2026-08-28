export type { AccordionStyleConfig } from "./default";
import type { AccordionStyleConfig } from "./default";

export const auroraStyle: AccordionStyleConfig = {
  root: "w-full divide-y divide-indigo-400/10",
  trigger: "group flex w-full items-center justify-between py-4 text-sm font-medium text-teal-100/80 hover:text-teal-200 transition-colors duration-150 focus-visible:outline-none cursor-default select-none",
  panel: "pb-4 text-sm text-indigo-200/50 leading-relaxed",
};
