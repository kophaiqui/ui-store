export type { TabsStyleConfig } from "./default";
import type { TabsStyleConfig } from "./default";

export const glassStyle: TabsStyleConfig = {
  list: "relative flex gap-0 border-b border-white/10",
  indicator: "absolute bottom-0 left-0 h-px bg-sky-400 transition-all duration-200 ease-out",
  tab: "relative px-4 pb-3 pt-1 text-sm font-medium text-foreground/50 transition-colors duration-150 hover:text-foreground/90 data-[selected]:text-foreground focus-visible:outline-none cursor-default select-none",
  panel: "pt-4 text-sm text-foreground/60 leading-relaxed focus-visible:outline-none",
};
