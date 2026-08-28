export type { TabsStyleConfig } from "./default";
import type { TabsStyleConfig } from "./default";

export const auroraStyle: TabsStyleConfig = {
  list: "relative flex gap-0 border-b border-indigo-400/15",
  indicator: "absolute bottom-0 left-0 h-px bg-gradient-to-r from-teal-400 via-indigo-400 to-violet-400 shadow-[0_0_8px_rgba(45,212,191,0.5)] transition-all duration-200 ease-out",
  tab: "relative px-4 pb-3 pt-1 text-sm font-medium text-indigo-300/50 transition-colors duration-150 hover:text-teal-200 data-[selected]:text-teal-100 focus-visible:outline-none cursor-default select-none",
  panel: "pt-4 text-sm text-indigo-200/60 leading-relaxed focus-visible:outline-none",
};
