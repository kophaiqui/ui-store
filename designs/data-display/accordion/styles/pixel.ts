import type { AccordionStyleConfig } from "./default";
export type { AccordionStyleConfig } from "./default";

export const pixelStyle: AccordionStyleConfig = {
  root: "w-full divide-y-4 divide-[#ef476f] border-4 border-[#ef476f] bg-[#0d0d12]",
  trigger: "group flex w-full items-center justify-between px-4 py-4 font-mono text-sm font-bold text-[#06d6a0] uppercase tracking-widest transition-colors duration-100 hover:bg-[#ef476f]/10 hover:text-[#ffd166] focus-visible:outline-none cursor-default select-none",
  panel: "px-4 pb-4 font-mono text-sm text-[#06d6a0]/80 leading-relaxed",
};
