export type { TabsStyleConfig } from "./default";
import type { TabsStyleConfig } from "./default";

export const materialStyle: TabsStyleConfig = {
  list: "relative flex gap-0 border-b border-violet-200/40 dark:border-violet-800/30",
  indicator: "absolute bottom-0 left-0 h-[3px] rounded-full bg-violet-600 dark:bg-violet-400 transition-all duration-200 ease-out",
  tab: "relative px-4 pb-3 pt-1 text-sm font-medium text-foreground/50 transition-colors duration-150 hover:text-foreground/90 data-[selected]:text-violet-700 dark:data-[selected]:text-violet-300 focus-visible:outline-none cursor-default select-none",
  panel: "pt-4 text-sm text-foreground/60 leading-relaxed focus-visible:outline-none",
};
