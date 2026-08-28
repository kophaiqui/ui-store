import type { SidebarStyleConfig } from "./default";
export type { SidebarStyleConfig } from "./default";

export const pixelStyle: SidebarStyleConfig = {
  nav: "flex flex-col h-full bg-[#0d0d12] border-r-4 border-[#ef476f]",
  item: "flex items-center gap-2.5 rounded-none px-3 py-2 font-mono text-sm font-bold text-[#06d6a0]/70 uppercase tracking-wide transition-all duration-100 hover:bg-[#06d6a0]/10 hover:text-[#06d6a0] cursor-pointer select-none",
  itemActive: "bg-[#ef476f] text-black font-bold",
  itemDisabled: "opacity-40 cursor-not-allowed pointer-events-none",
  icon: "shrink-0 text-[#06d6a0]/60",
  label: "flex-1 truncate",
  badge: "ml-auto shrink-0 rounded-none border-2 border-black bg-[#06d6a0] px-1.5 py-0.5 text-[10px] font-mono font-bold text-black",
  nested: "ml-4 mt-0.5 flex flex-col gap-0.5 border-l-2 border-[#06d6a0]/30 pl-3",
  nestedItem: "flex items-center gap-2 rounded-none px-2 py-1.5 font-mono text-xs font-bold text-[#06d6a0]/60 uppercase transition-colors hover:bg-[#06d6a0]/10 hover:text-[#06d6a0] cursor-pointer",
  collapseBtn: "mt-auto flex items-center gap-2 rounded-none px-3 py-2 font-mono text-xs font-bold text-[#06d6a0]/50 uppercase transition-colors hover:bg-[#06d6a0]/10 hover:text-[#06d6a0] cursor-pointer border-t-2 border-[#06d6a0]/30",
  header: "border-b-2 border-[#06d6a0]/30 p-4",
  footer: "border-t-2 border-[#06d6a0]/30 p-4",
};
