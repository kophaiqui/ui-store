import type { AccordionStyleConfig } from "./default";
export type { AccordionStyleConfig };

export const gradientStyle: AccordionStyleConfig = {
  root: "w-full divide-y divide-[#7C3AED]/10 dark:divide-fuchsia-500/10",
  trigger: "group flex w-full items-center justify-between py-4 text-sm font-semibold text-[#0F172A] transition-colors duration-150 hover:text-[#7C3AED] focus-visible:outline-none cursor-default select-none dark:text-zinc-200 dark:hover:text-fuchsia-300",
  panel: "pb-4 text-sm text-[#64748B] leading-relaxed dark:text-zinc-400",
};
