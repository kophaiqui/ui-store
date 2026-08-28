import type { TableStyleConfig } from "./default";
export type { TableStyleConfig } from "./default";

export const pixelStyle: TableStyleConfig = {
  wrapper: "w-full overflow-x-auto border-4 border-[#ef476f]",
  table: "w-full border-collapse font-mono text-sm",
  caption: "mb-2 text-left text-xs font-mono font-bold text-[#06d6a0] uppercase tracking-widest",
  thead: "border-b-4 border-[#ef476f] bg-[#ef476f]/10",
  th: "px-4 py-3 text-left text-xs font-mono font-bold uppercase tracking-widest text-[#ffd166] whitespace-nowrap border-r-2 border-[#ef476f]/30 last:border-r-0",
  tbody: "divide-y-2 divide-[#ef476f]/20",
  tr: "transition-colors duration-100",
  trClickable: "cursor-pointer hover:bg-[#06d6a0]/10",
  trSelected: "bg-[#ef476f]/15",
  td: "px-4 py-3 font-mono text-[#06d6a0]",
  emptyRow: "px-4 py-10 text-center font-mono text-sm text-[#06d6a0]/60 uppercase",
  loadingCell: "h-4 rounded-none bg-[#ef476f]/10 animate-pulse",
  checkboxCell: "w-10 px-3",
  sortIcon: "ml-1.5 inline-block opacity-40",
  sortIconActive: "opacity-100 text-[#ffd166]",
};
