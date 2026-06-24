import type { TableStyleConfig } from "./default";
export type { TableStyleConfig } from "./default";

export const retroStyle: TableStyleConfig = {
  wrapper: "w-full overflow-x-auto border-2 border-[#3d2410] shadow-[4px_4px_0px_0px_#3d2410]",
  table: "w-full border-collapse text-sm",
  caption: "mb-2 text-left text-xs font-black text-[#7a5230] uppercase tracking-wide",
  thead: "border-b-2 border-[#3d2410] bg-amber-100",
  th: "px-4 py-3 text-left text-[0.6875rem] font-black uppercase tracking-wider text-[#2c1a0e] whitespace-nowrap border-r border-[#3d2410]/30 last:border-r-0",
  tbody: "divide-y-2 divide-[#3d2410]/20",
  tr: "transition-colors duration-100",
  trClickable: "cursor-pointer hover:bg-amber-50",
  trSelected: "bg-[#e8743b]/10",
  td: "px-4 py-3 text-[#2c1a0e] font-medium border-r border-[#3d2410]/20 last:border-r-0",
  emptyRow: "px-4 py-10 text-center text-sm text-[#7a5230] font-bold",
  loadingCell: "h-4 rounded-none bg-amber-200/60 animate-pulse",
  checkboxCell: "w-10 px-3",
  sortIcon: "ml-1.5 inline-block opacity-30",
  sortIconActive: "opacity-100 text-[#e8743b]",
};
