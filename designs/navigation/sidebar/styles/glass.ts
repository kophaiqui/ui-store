export type { SidebarStyleConfig } from "./default";
import type { SidebarStyleConfig } from "./default";

export const glassStyle: SidebarStyleConfig = {
  nav: "flex flex-col h-full bg-white/5 backdrop-blur-xl border-r border-white/10",
  item: "flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-foreground/70 transition-colors duration-100 hover:bg-white/8 hover:text-foreground cursor-pointer select-none",
  itemActive: "bg-white/10 text-foreground font-medium",
  itemDisabled: "opacity-40 cursor-not-allowed pointer-events-none",
  icon: "shrink-0 text-foreground/50",
  label: "flex-1 truncate",
  badge: "ml-auto shrink-0 rounded-full bg-white/10 px-1.5 py-0.5 text-[10px] font-medium text-foreground/60",
  nested: "ml-4 mt-0.5 flex flex-col gap-0.5 border-l border-white/10 pl-3",
  nestedItem: "flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-foreground/60 transition-colors hover:bg-white/8 hover:text-foreground cursor-pointer",
  collapseBtn: "mt-auto flex items-center gap-2 rounded-xl px-3 py-2 text-xs text-foreground/50 transition-colors hover:bg-white/8 hover:text-foreground cursor-pointer",
  header: "border-b border-white/10 p-4",
  footer: "border-t border-white/10 p-4",
};
