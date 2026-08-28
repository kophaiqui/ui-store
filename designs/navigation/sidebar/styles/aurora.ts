export type { SidebarStyleConfig } from "./default";
import type { SidebarStyleConfig } from "./default";

export const auroraStyle: SidebarStyleConfig = {
  nav: "flex flex-col h-full bg-[#0a0e1f] border-r border-indigo-400/15",
  item: "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-indigo-300/70 transition-colors duration-100 hover:bg-indigo-900/40 hover:text-teal-200 cursor-pointer select-none",
  itemActive: "bg-gradient-to-r from-teal-500/15 to-violet-500/15 text-teal-100 font-medium border-l-2 border-teal-400",
  itemDisabled: "opacity-40 cursor-not-allowed pointer-events-none",
  icon: "shrink-0 text-indigo-300/50",
  label: "flex-1 truncate",
  badge: "ml-auto shrink-0 rounded-full bg-indigo-900/50 px-1.5 py-0.5 text-[10px] font-medium text-indigo-300/70",
  nested: "ml-4 mt-0.5 flex flex-col gap-0.5 border-l border-indigo-400/15 pl-3",
  nestedItem: "flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-indigo-300/60 transition-colors hover:bg-indigo-900/40 hover:text-teal-200 cursor-pointer",
  collapseBtn: "mt-auto flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-indigo-300/50 transition-colors hover:bg-indigo-900/40 hover:text-teal-200 cursor-pointer",
  header: "border-b border-indigo-400/15 p-4",
  footer: "border-t border-indigo-400/15 p-4",
};
