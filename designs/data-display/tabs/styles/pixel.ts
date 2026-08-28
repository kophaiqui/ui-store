import type { TabsStyleConfig } from "./default";
export type { TabsStyleConfig } from "./default";

export const pixelStyle: TabsStyleConfig = {
  list: "relative flex gap-0 border-b-4 border-[#ef476f]/40",
  indicator: "absolute bottom-[-4px] left-0 h-1 bg-[#ef476f] transition-all duration-150 ease-out",
  tab: "relative px-4 pb-3 pt-1 font-mono text-sm font-bold text-[#06d6a0]/50 uppercase tracking-widest transition-colors duration-100 hover:text-[#06d6a0] data-[selected]:text-[#ffd166] focus-visible:outline-none cursor-default select-none",
  panel: "pt-4 font-mono text-sm text-[#06d6a0]/70 leading-relaxed focus-visible:outline-none",
};
