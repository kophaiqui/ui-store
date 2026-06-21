export type { SidebarStyleConfig } from "./default";
import type { SidebarStyleConfig } from "./default";

export const minimalStyle: SidebarStyleConfig = {
  nav: "flex flex-col h-full bg-transparent border-r border-border",
  item: "flex items-center gap-2.5 rounded-none px-3 py-2 text-sm text-muted-foreground transition-colors duration-100 hover:text-foreground cursor-pointer select-none",
  itemActive: "text-foreground font-medium border-r-2 border-foreground",
  itemDisabled: "opacity-40 cursor-not-allowed pointer-events-none",
  icon: "shrink-0 text-muted-foreground",
  label: "flex-1 truncate",
  badge: "ml-auto shrink-0 rounded-none border border-border px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground",
  nested: "ml-4 mt-0.5 flex flex-col gap-0.5 border-l border-border pl-3",
  nestedItem: "flex items-center gap-2 rounded-none px-2 py-1.5 text-xs text-muted-foreground/70 transition-colors hover:text-foreground cursor-pointer",
  collapseBtn: "mt-auto flex items-center gap-2 rounded-none px-3 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground cursor-pointer",
  header: "border-b border-border p-4",
  footer: "border-t border-border p-4",
};
