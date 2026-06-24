import type { SidebarStyleConfig } from "./default";
export type { SidebarStyleConfig } from "./default";

export const terminalStyle: SidebarStyleConfig = {
  nav: "flex flex-col h-full bg-white border-r border-[#16A34A]/30 dark:bg-[#0A0A0A] dark:border-[#22C55E]/20",
  item: "flex items-center gap-2.5 rounded-sm px-3 py-2 font-mono text-sm font-bold text-[#047857] dark:text-[#86EFAC] transition-all duration-100 hover:bg-[#16A34A]/5 dark:hover:bg-[#22C55E]/5 hover:text-[#065F46] dark:hover:text-[#22C55E] cursor-pointer select-none uppercase tracking-wide",
  itemActive: "bg-[#16A34A]/10 text-[#065F46] border-l border-[#16A34A] dark:bg-[#22C55E]/10 dark:text-[#22C55E] dark:border-[#22C55E]",
  itemDisabled: "opacity-40 cursor-not-allowed pointer-events-none",
  icon: "shrink-0 text-[#047857] dark:text-[#86EFAC]",
  label: "flex-1 truncate",
  badge: "ml-auto shrink-0 rounded-sm border border-[#16A34A]/30 bg-[#16A34A]/10 px-1.5 py-0.5 font-mono text-[10px] font-bold text-[#065F46] dark:border-[#22C55E]/20 dark:bg-[#22C55E]/10 dark:text-[#22C55E] uppercase",
  nested: "ml-4 mt-0.5 flex flex-col gap-0.5 border-l border-[#16A34A]/20 dark:border-[#22C55E]/15 pl-3",
  nestedItem: "flex items-center gap-2 rounded-sm px-2 py-1.5 font-mono text-xs font-bold text-[#047857] dark:text-[#86EFAC] transition-colors hover:bg-[#16A34A]/5 dark:hover:bg-[#22C55E]/5 hover:text-[#065F46] dark:hover:text-[#22C55E] cursor-pointer uppercase",
  collapseBtn: "mt-auto flex items-center gap-2 rounded-sm px-3 py-2 font-mono text-xs font-bold text-[#047857] dark:text-[#86EFAC] transition-colors hover:bg-[#16A34A]/5 dark:hover:bg-[#22C55E]/5 hover:text-[#065F46] dark:hover:text-[#22C55E] cursor-pointer uppercase tracking-wide border-t border-[#16A34A]/20 dark:border-[#22C55E]/15",
  header: "border-b border-[#16A34A]/20 dark:border-[#22C55E]/15 p-4 bg-[#16A34A]/5 dark:bg-[#22C55E]/5",
  footer: "border-t border-[#16A34A]/20 dark:border-[#22C55E]/15 p-4",
};
