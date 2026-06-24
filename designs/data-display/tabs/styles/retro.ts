import type { TabsStyleConfig } from "./default";
export type { TabsStyleConfig } from "./default";

export const retroStyle: TabsStyleConfig = {
  list: "relative flex gap-0 border-b-2 border-[#3d2410] dark:border-[#A78BFA]",
  indicator: "absolute bottom-0 left-0 h-[2px] bg-[#e8743b] transition-all duration-200 ease-out dark:bg-[#A78BFA]",
  tab: "relative px-4 pb-3 pt-1 text-sm font-black text-[#7a5230] uppercase tracking-wide transition-colors duration-100 hover:text-[#2c1a0e] data-[selected]:text-[#2c1a0e] focus-visible:outline-none cursor-default select-none dark:text-[#A1A1AA] dark:hover:text-[#F5F3FF] dark:data-[selected]:text-[#F5F3FF]",
  panel: "pt-4 text-sm text-[#7a5230] leading-relaxed focus-visible:outline-none dark:text-[#A1A1AA]",
};
