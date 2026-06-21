import type { SidebarStyleConfig } from "./default";
export type { SidebarStyleConfig };

export const neobrutalismStyle: SidebarStyleConfig = {
  nav: "flex flex-col h-full bg-white border-r-2 border-zinc-950",
  item: "flex items-center gap-2.5 rounded-none px-3 py-2 text-sm font-bold text-zinc-700 transition-all duration-100 hover:bg-yellow-300 hover:text-zinc-950 cursor-pointer select-none border-b border-zinc-100",
  itemActive: "bg-yellow-300 text-zinc-950 font-black shadow-[inset_2px_0_0_0_#09090b]",
  itemDisabled: "opacity-40 cursor-not-allowed pointer-events-none",
  icon: "shrink-0 text-zinc-600",
  label: "flex-1 truncate",
  badge: "ml-auto shrink-0 rounded-none border-2 border-zinc-950 bg-yellow-300 px-1.5 py-0.5 text-[10px] font-black text-zinc-950",
  nested: "ml-4 mt-0 flex flex-col gap-0 border-l-2 border-zinc-950 pl-3",
  nestedItem: "flex items-center gap-2 rounded-none px-2 py-1.5 text-xs font-bold text-zinc-600 transition-colors hover:bg-yellow-100 hover:text-zinc-950 cursor-pointer",
  collapseBtn: "mt-auto flex items-center gap-2 rounded-none px-3 py-2 text-xs font-bold text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950 cursor-pointer border-t-2 border-zinc-950",
  header: "border-b-2 border-zinc-950 p-4",
  footer: "border-t-2 border-zinc-950 p-4",
};
