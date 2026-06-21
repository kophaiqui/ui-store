import type { AccordionStyleConfig } from "./default";
export type { AccordionStyleConfig };

export const gradientStyle: AccordionStyleConfig = {
  root: "w-full divide-y divide-fuchsia-500/10",
  trigger: "group flex w-full items-center justify-between py-4 text-sm font-semibold text-zinc-200 transition-colors duration-150 hover:text-fuchsia-300 focus-visible:outline-none cursor-default select-none",
  panel: "pb-4 text-sm text-zinc-400 leading-relaxed",
};
