import type { SidebarStyleConfig } from "./default";
export type { SidebarStyleConfig };

export const gradientStyle: SidebarStyleConfig = {
  nav: "flex flex-col h-full bg-zinc-950 border-r border-zinc-800",
  item: "flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium text-zinc-400 transition-colors duration-100 hover:bg-zinc-900 hover:text-zinc-200 cursor-pointer select-none mx-2 my-0.5",
  itemActive: "bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20",
  itemDisabled: "opacity-40 cursor-not-allowed pointer-events-none",
  icon: "shrink-0 text-zinc-600",
  label: "flex-1 truncate",
  badge: "ml-auto shrink-0 rounded-full bg-fuchsia-500/15 px-1.5 py-0.5 text-[10px] font-medium text-fuchsia-400 border border-fuchsia-500/20",
  nested: "ml-4 mt-0.5 flex flex-col gap-0.5 border-l border-zinc-800 pl-3",
  nestedItem: "flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-zinc-300 cursor-pointer",
  collapseBtn: "mt-auto flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-900 hover:text-zinc-400 cursor-pointer mx-2",
  header: "border-b border-zinc-800 p-4",
  footer: "border-t border-zinc-800 p-4",
};
