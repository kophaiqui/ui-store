import type { AccordionStyleConfig } from "./default";
export type { AccordionStyleConfig } from "./default";

export const terminalStyle: AccordionStyleConfig = {
  root: "w-full divide-y divide-[#16A34A]/30 border border-[#16A34A] dark:divide-[#22C55E]/20 dark:border-[#22C55E]",
  trigger: "group flex w-full items-center justify-between px-4 py-4 font-mono text-sm font-bold text-[#065F46] dark:text-[#22C55E] uppercase tracking-wide transition-colors duration-100 hover:bg-[#16A34A]/5 dark:hover:bg-[#22C55E]/5 focus-visible:outline-none cursor-default select-none",
  panel: "px-4 pb-4 font-mono text-sm text-[#047857] dark:text-[#86EFAC] leading-relaxed",
};
