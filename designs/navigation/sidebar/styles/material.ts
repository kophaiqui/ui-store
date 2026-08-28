export type { SidebarStyleConfig } from "./default";
import type { SidebarStyleConfig } from "./default";

export const materialStyle: SidebarStyleConfig = {
  nav: "flex flex-col h-full bg-violet-50/40 border-r border-violet-200/40 dark:bg-violet-950/10 dark:border-violet-800/30",
  item: "flex items-center gap-2.5 rounded-full px-3 py-2 text-sm text-foreground/70 transition-colors duration-100 hover:bg-violet-100 dark:hover:bg-violet-500/10 hover:text-foreground cursor-pointer select-none",
  itemActive: "bg-violet-100 dark:bg-violet-500/15 text-violet-800 dark:text-violet-200 font-medium",
  itemDisabled: "opacity-40 cursor-not-allowed pointer-events-none",
  icon: "shrink-0 text-foreground/50",
  label: "flex-1 truncate",
  badge: "ml-auto shrink-0 rounded-full bg-violet-100 dark:bg-violet-500/15 px-1.5 py-0.5 text-[10px] font-medium text-violet-700 dark:text-violet-300",
  nested: "ml-4 mt-0.5 flex flex-col gap-0.5 border-l border-violet-200/40 dark:border-violet-800/30 pl-3",
  nestedItem: "flex items-center gap-2 rounded-full px-2 py-1.5 text-xs text-foreground/60 transition-colors hover:bg-violet-100 dark:hover:bg-violet-500/10 hover:text-foreground cursor-pointer",
  collapseBtn: "mt-auto flex items-center gap-2 rounded-full px-3 py-2 text-xs text-foreground/50 transition-colors hover:bg-violet-100 dark:hover:bg-violet-500/10 hover:text-foreground cursor-pointer",
  header: "border-b border-violet-200/40 dark:border-violet-800/30 p-4",
  footer: "border-t border-violet-200/40 dark:border-violet-800/30 p-4",
};
