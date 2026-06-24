import type { TabsStyleConfig } from "./default";
export type { TabsStyleConfig };

export const neobrutalismStyle: TabsStyleConfig = {
  list: "relative flex gap-0 border-b-2 border-zinc-950 dark:border-white",
  indicator: "absolute bottom-[-2px] left-0 h-[2px] bg-yellow-400 transition-all duration-150 ease-out",
  tab: "relative px-4 pb-3 pt-1 text-sm font-black uppercase tracking-wide text-zinc-600 dark:text-[#9CA3AF] transition-colors duration-100 hover:text-zinc-950 dark:hover:text-white data-[selected]:text-zinc-950 dark:data-[selected]:text-white focus-visible:outline-none cursor-default select-none",
  panel: "pt-4 text-sm text-zinc-700 dark:text-[#D1D5DB] leading-relaxed focus-visible:outline-none font-medium",
};
