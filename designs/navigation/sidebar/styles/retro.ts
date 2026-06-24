import type { SidebarStyleConfig } from "./default";
export type { SidebarStyleConfig } from "./default";

export const retroStyle: SidebarStyleConfig = {
  nav: "flex flex-col h-full bg-[#fdf6e3] border-r-2 border-[#3d2410] dark:bg-[#161324] dark:border-[#A78BFA]",
  item: "flex items-center gap-2.5 rounded-sm px-3 py-2 text-sm font-bold text-[#7a5230] transition-all duration-100 hover:bg-amber-100 hover:text-[#2c1a0e] cursor-pointer select-none uppercase tracking-wide dark:text-[#A1A1AA] dark:hover:bg-[#A78BFA]/20 dark:hover:text-[#F5F3FF]",
  itemActive: "bg-[#e8743b] text-[#2c1a0e] font-black border-l-2 border-[#3d2410] shadow-[2px_2px_0px_0px_#3d2410] dark:bg-[#A78BFA] dark:text-[#F5F3FF] dark:border-[#A78BFA] dark:shadow-[2px_2px_0px_0px_#A78BFA]",
  itemDisabled: "opacity-40 cursor-not-allowed pointer-events-none",
  icon: "shrink-0 text-[#7a5230] dark:text-[#A1A1AA]",
  label: "flex-1 truncate",
  badge: "ml-auto shrink-0 rounded-sm border-2 border-[#3d2410] bg-amber-100 px-1.5 py-0.5 text-[10px] font-black text-[#2c1a0e] uppercase dark:border-[#A78BFA] dark:bg-[#A78BFA]/20 dark:text-[#F5F3FF]",
  nested: "ml-4 mt-0.5 flex flex-col gap-0.5 border-l-2 border-[#3d2410] pl-3 dark:border-[#A78BFA]",
  nestedItem: "flex items-center gap-2 rounded-sm px-2 py-1.5 text-xs font-bold text-[#7a5230] transition-colors hover:bg-amber-100 hover:text-[#2c1a0e] cursor-pointer uppercase dark:text-[#A1A1AA] dark:hover:bg-[#A78BFA]/20 dark:hover:text-[#F5F3FF]",
  collapseBtn: "mt-auto flex items-center gap-2 rounded-sm px-3 py-2 text-xs font-bold text-[#7a5230] transition-colors hover:bg-amber-100 hover:text-[#2c1a0e] cursor-pointer uppercase tracking-wide border-t-2 border-[#3d2410] dark:text-[#A1A1AA] dark:hover:bg-[#A78BFA]/20 dark:hover:text-[#F5F3FF] dark:border-[#A78BFA]",
  header: "border-b-2 border-[#3d2410] p-4 bg-[#e8743b] dark:border-[#A78BFA] dark:bg-[#A78BFA]",
  footer: "border-t-2 border-[#3d2410] p-4 dark:border-[#A78BFA]",
};
