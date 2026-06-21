import type { TableStyleConfig } from "./default";
export type { TableStyleConfig };

export const neobrutalismStyle: TableStyleConfig = {
  wrapper: "w-full overflow-x-auto border-2 border-zinc-950 shadow-[4px_4px_0px_0px_#09090b]",
  table: "w-full border-collapse text-sm",
  caption: "mb-2 text-left text-xs font-black text-zinc-950 uppercase tracking-wide",
  thead: "border-b-2 border-zinc-950 bg-yellow-300",
  th: "px-4 py-3 text-left text-xs font-black uppercase tracking-wider text-zinc-950 whitespace-nowrap border-r-2 border-zinc-950/30 last:border-r-0",
  tbody: "divide-y-2 divide-zinc-950/20",
  tr: "transition-colors duration-100",
  trClickable: "cursor-pointer hover:bg-yellow-50",
  trSelected: "bg-yellow-200",
  td: "px-4 py-3 text-zinc-900 font-medium",
  emptyRow: "px-4 py-10 text-center text-sm font-bold text-zinc-500 uppercase",
  loadingCell: "h-4 rounded-none bg-zinc-200 animate-pulse",
  checkboxCell: "w-10 px-3",
  sortIcon: "ml-1.5 inline-block opacity-40",
  sortIconActive: "opacity-100 text-zinc-950",
};
