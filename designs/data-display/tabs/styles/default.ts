export type TabsStyleConfig = {
  list: string;
  indicator: string;
  tab: string;
  panel: string;
};

export const defaultStyle: TabsStyleConfig = {
  list: "relative flex gap-0 border-b border-border",
  indicator: "absolute bottom-0 left-0 h-px bg-emerald-500 transition-all duration-200 ease-out",
  tab: "relative px-4 pb-3 pt-1 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground data-[selected]:text-foreground focus-visible:outline-none cursor-default select-none",
  panel: "pt-4 text-sm text-muted-foreground leading-relaxed focus-visible:outline-none",
};
