export type { TableStyleConfig } from "./default";
import type { TableStyleConfig } from "./default";

export const auroraStyle: TableStyleConfig = {
  wrapper: "w-full overflow-x-auto rounded-xl border border-indigo-400/15 bg-indigo-950/30",
  table: "w-full border-collapse text-sm",
  caption: "mb-2 text-left text-xs text-indigo-300/50",
  thead: "border-b border-indigo-400/15 bg-indigo-950/40",
  th: "px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-indigo-300/60 whitespace-nowrap",
  tbody: "divide-y divide-indigo-400/10",
  tr: "transition-colors duration-100",
  trClickable: "cursor-pointer hover:bg-teal-400/5",
  trSelected: "bg-teal-400/8",
  td: "px-4 py-3 text-teal-50/85",
  emptyRow: "px-4 py-10 text-center text-sm text-indigo-300/40",
  loadingCell: "h-4 rounded-full bg-indigo-400/10 animate-pulse",
  checkboxCell: "w-10 px-3",
  sortIcon: "ml-1.5 inline-block opacity-30",
  sortIconActive: "opacity-100 text-teal-400",
};
