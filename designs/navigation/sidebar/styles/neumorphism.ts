import type { SidebarStyleConfig } from "./default";
export type { SidebarStyleConfig };

export const neumorphismStyle: SidebarStyleConfig = {
  nav: "flex flex-col h-full bg-[#e8ecf1] dark:bg-[#1E293B]",
  item: "flex items-center gap-2.5 rounded-2xl px-3 py-2 text-sm font-medium text-slate-600 dark:text-[#94A3B8] transition-all duration-200 hover:shadow-[3px_3px_6px_rgba(163,177,198,0.4),-3px_-3px_6px_rgba(255,255,255,0.6)] dark:hover:shadow-[3px_3px_6px_rgba(0,0,0,0.4),-3px_-3px_6px_rgba(255,255,255,0.02)] hover:text-slate-800 dark:hover:text-[#E2E8F0] cursor-pointer select-none mx-2 my-0.5",
  itemActive: "shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] dark:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.03)] text-blue-600 dark:text-[#818CF8] font-semibold",
  itemDisabled: "opacity-40 cursor-not-allowed pointer-events-none",
  icon: "shrink-0 text-slate-400 dark:text-slate-500",
  label: "flex-1 truncate",
  badge: "ml-auto shrink-0 rounded-full bg-[#e8ecf1] dark:bg-[#0F172A] px-2 py-0.5 text-[10px] font-semibold text-slate-500 dark:text-[#94A3B8] shadow-[2px_2px_4px_rgba(163,177,198,0.4),-2px_-2px_4px_rgba(255,255,255,0.6)] dark:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.02)]",
  nested: "ml-4 mt-0.5 flex flex-col gap-0.5 pl-3 border-l border-slate-300/50 dark:border-[#334155]/60",
  nestedItem: "flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-medium text-slate-500 dark:text-[#94A3B8] transition-all hover:shadow-[2px_2px_4px_rgba(163,177,198,0.4),-2px_-2px_4px_rgba(255,255,255,0.6)] dark:hover:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.02)] hover:text-slate-700 dark:hover:text-[#E2E8F0] cursor-pointer mx-1",
  collapseBtn: "mt-auto flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-medium text-slate-400 dark:text-slate-500 transition-all hover:shadow-[2px_2px_4px_rgba(163,177,198,0.4),-2px_-2px_4px_rgba(255,255,255,0.6)] dark:hover:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.02)] hover:text-slate-600 dark:hover:text-[#94A3B8] cursor-pointer mx-2",
  header: "border-b border-slate-200 dark:border-[#334155] p-4",
  footer: "border-t border-slate-200 dark:border-[#334155] p-4",
};
