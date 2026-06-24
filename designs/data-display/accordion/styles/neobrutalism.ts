import type { AccordionStyleConfig } from "./default";
export type { AccordionStyleConfig };

export const neobrutalismStyle: AccordionStyleConfig = {
  root: "w-full divide-y-2 divide-zinc-950 dark:divide-white",
  trigger: "group flex w-full items-center justify-between py-4 text-sm font-black text-zinc-950 dark:text-white uppercase tracking-wide transition-colors duration-100 focus-visible:outline-none cursor-default select-none hover:text-zinc-700 dark:hover:text-[#D1D5DB]",
  panel: "pb-4 text-sm text-zinc-800 dark:text-[#D1D5DB] leading-relaxed font-medium",
};
