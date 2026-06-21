import type { TableStyleConfig } from "./default";
export type { TableStyleConfig };

export const neumorphismStyle: TableStyleConfig = {
  wrapper: "w-full overflow-x-auto rounded-3xl bg-[#e8ecf1] shadow-[6px_6px_12px_rgba(163,177,198,0.5),-6px_-6px_12px_rgba(255,255,255,0.7)]",
  table: "w-full border-collapse text-sm",
  caption: "mb-2 text-left text-xs text-slate-500",
  thead: "",
  th: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 whitespace-nowrap",
  tbody: "divide-y divide-slate-300/40",
  tr: "transition-colors duration-100",
  trClickable: "cursor-pointer hover:bg-[#dde3eb]",
  trSelected: "bg-blue-100/40",
  td: "px-4 py-3 text-slate-700",
  emptyRow: "px-4 py-10 text-center text-sm text-slate-400",
  loadingCell: "h-4 rounded-xl bg-slate-200 animate-pulse",
  checkboxCell: "w-10 px-3",
  sortIcon: "ml-1.5 inline-block opacity-30",
  sortIconActive: "opacity-100 text-blue-500",
};
