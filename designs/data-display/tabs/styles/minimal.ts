export type { TabsStyleConfig } from "./default";
import type { TabsStyleConfig } from "./default";

export const minimalStyle: TabsStyleConfig = {
  list: "relative flex gap-0 border-b border-border",
  indicator: "absolute bottom-0 left-0 h-0.5 bg-foreground transition-all duration-200 ease-out",
  tab: "relative px-4 pb-3 pt-1 text-xs font-medium text-muted-foreground uppercase tracking-widest transition-colors duration-150 hover:text-foreground data-[selected]:text-foreground focus-visible:outline-none cursor-default select-none",
  panel: "pt-4 text-sm text-muted-foreground leading-relaxed focus-visible:outline-none",
};
