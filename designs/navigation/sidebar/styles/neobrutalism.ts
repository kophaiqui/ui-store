import type { SidebarStyleConfig } from "./default";
export type { SidebarStyleConfig };

export const neobrutalismStyle: SidebarStyleConfig = {
  nav: "flex flex-col h-full bg-white dark:bg-[#0A0A0A] border-r-2 border-zinc-950 dark:border-white",
  item: "flex items-center gap-2.5 rounded-none px-3 py-2 text-sm font-bold text-zinc-700 dark:text-[#D1D5DB] transition-all duration-100 hover:bg-yellow-300 hover:text-zinc-950 cursor-pointer select-none border-b border-zinc-100 dark:border-white/10",
  itemActive: "bg-yellow-300 text-zinc-950 font-black shadow-[inset_2px_0_0_0_#09090b]",
  itemDisabled: "opacity-40 cursor-not-allowed pointer-events-none",
  icon: "shrink-0 text-zinc-600 dark:text-[#9CA3AF]",
  label: "flex-1 truncate",
  badge: "ml-auto shrink-0 rounded-none border-2 border-zinc-950 dark:border-white bg-yellow-300 px-1.5 py-0.5 text-[10px] font-black text-zinc-950",
  nested: "ml-4 mt-0 flex flex-col gap-0 border-l-2 border-zinc-950 dark:border-white pl-3",
  nestedItem: "flex items-center gap-2 rounded-none px-2 py-1.5 text-xs font-bold text-zinc-600 dark:text-[#9CA3AF] transition-colors hover:bg-yellow-100 dark:hover:bg-yellow-300/10 hover:text-zinc-950 dark:hover:text-white cursor-pointer",
  collapseBtn: "mt-auto flex items-center gap-2 rounded-none px-3 py-2 text-xs font-bold text-zinc-500 dark:text-[#9CA3AF] transition-colors hover:bg-zinc-100 dark:hover:bg-[#1A1A1A] hover:text-zinc-950 dark:hover:text-white cursor-pointer border-t-2 border-zinc-950 dark:border-white",
  header: "border-b-2 border-zinc-950 dark:border-white p-4",
  footer: "border-t-2 border-zinc-950 dark:border-white p-4",
};
