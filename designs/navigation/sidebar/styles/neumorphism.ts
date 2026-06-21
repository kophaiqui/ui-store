import type { SidebarStyleConfig } from "./default";
export type { SidebarStyleConfig };

export const neumorphismStyle: SidebarStyleConfig = {
  nav: "flex flex-col h-full bg-[#e8ecf1]",
  item: "flex items-center gap-2.5 rounded-2xl px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:shadow-[3px_3px_6px_rgba(163,177,198,0.4),-3px_-3px_6px_rgba(255,255,255,0.6)] hover:text-slate-800 cursor-pointer select-none mx-2 my-0.5",
  itemActive: "shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] text-blue-600 font-semibold",
  itemDisabled: "opacity-40 cursor-not-allowed pointer-events-none",
  icon: "shrink-0 text-slate-400",
  label: "flex-1 truncate",
  badge: "ml-auto shrink-0 rounded-full bg-[#e8ecf1] px-2 py-0.5 text-[10px] font-semibold text-slate-500 shadow-[2px_2px_4px_rgba(163,177,198,0.4),-2px_-2px_4px_rgba(255,255,255,0.6)]",
  nested: "ml-4 mt-0.5 flex flex-col gap-0.5 pl-3 border-l border-slate-300/50",
  nestedItem: "flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-medium text-slate-500 transition-all hover:shadow-[2px_2px_4px_rgba(163,177,198,0.4),-2px_-2px_4px_rgba(255,255,255,0.6)] hover:text-slate-700 cursor-pointer mx-1",
  collapseBtn: "mt-auto flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-medium text-slate-400 transition-all hover:shadow-[2px_2px_4px_rgba(163,177,198,0.4),-2px_-2px_4px_rgba(255,255,255,0.6)] hover:text-slate-600 cursor-pointer mx-2",
  header: "border-b border-slate-200 p-4",
  footer: "border-t border-slate-200 p-4",
};
