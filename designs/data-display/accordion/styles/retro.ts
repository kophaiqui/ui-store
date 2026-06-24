import type { AccordionStyleConfig } from "./default";
export type { AccordionStyleConfig } from "./default";

export const retroStyle: AccordionStyleConfig = {
  root: "w-full divide-y-2 divide-[#3d2410] border-2 border-[#3d2410] shadow-[3px_3px_0px_0px_#3d2410]",
  trigger: "group flex w-full items-center justify-between px-4 py-4 text-sm font-black text-[#2c1a0e] uppercase tracking-wide transition-colors duration-100 hover:bg-amber-100 focus-visible:outline-none cursor-default select-none",
  panel: "px-4 pb-4 text-sm text-[#7a5230] font-medium leading-relaxed",
};
