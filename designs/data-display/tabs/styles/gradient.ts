import type { TabsStyleConfig } from "./default";
export type { TabsStyleConfig };

export const gradientStyle: TabsStyleConfig = {
  list: "relative flex gap-0 border-b border-zinc-800",
  indicator: "absolute bottom-0 left-0 h-px bg-gradient-to-r from-fuchsia-500 to-pink-500 transition-all duration-200 ease-out",
  tab: "relative px-4 pb-3 pt-1 text-sm font-medium text-zinc-500 transition-colors duration-150 hover:text-zinc-300 data-[selected]:text-fuchsia-300 focus-visible:outline-none cursor-default select-none",
  panel: "pt-4 text-sm text-zinc-400 leading-relaxed focus-visible:outline-none",
};
