import type { DataTableStyleConfig } from "./default";
export type { DataTableStyleConfig };

export const neumorphismStyle: DataTableStyleConfig = {
  wrapper: "flex w-full flex-col gap-3",
  table: "w-full border-collapse text-sm",
  caption: "mb-2 text-left text-xs text-slate-500",
  thead: "bg-[#e8ecf1]",
  th: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 whitespace-nowrap",
  tbody: "divide-y divide-slate-200",
  tr: "bg-[#e8ecf1] transition-colors duration-100",
  trClickable: "cursor-pointer hover:bg-[#dde3eb]",
  trSelected: "bg-blue-50",
  td: "px-4 py-3 text-slate-700",
  emptyRow: "px-4 py-10 text-center text-sm text-slate-400",
  loadingCell: "h-4 rounded-xl bg-slate-200 animate-pulse",
  checkboxCell: "w-10 px-3",
  sortIcon: "ml-1.5 inline-block opacity-30",
  sortIconActive: "opacity-100 text-blue-500",
  toolbar: "flex items-center justify-between gap-3",
  searchInput: "h-8 rounded-2xl bg-[#e8ecf1] px-4 text-sm text-slate-700 placeholder:text-slate-400 shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] transition-all focus:outline-none focus:ring-2 focus:ring-blue-400/30",
  columnToggle: "flex h-8 items-center gap-1.5 rounded-2xl bg-[#e8ecf1] px-4 text-xs text-slate-600 shadow-[3px_3px_6px_rgba(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.7)] transition-all hover:shadow-[2px_2px_4px_rgba(163,177,198,0.4),-2px_-2px_4px_rgba(255,255,255,0.6)] focus-visible:outline-none",
  columnTogglePopup: "z-50 min-w-[160px] rounded-2xl bg-[#e8ecf1] p-2 shadow-[6px_6px_12px_rgba(163,177,198,0.5),-6px_-6px_12px_rgba(255,255,255,0.7)]",
  pagination: "flex items-center justify-between gap-2",
  pageBtn: "flex h-7 min-w-[28px] items-center justify-center rounded-xl bg-[#e8ecf1] px-2 text-xs text-slate-600 shadow-[3px_3px_6px_rgba(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.7)] transition-all hover:shadow-[1px_1px_3px_rgba(163,177,198,0.4),-1px_-1px_3px_rgba(255,255,255,0.6)] disabled:cursor-not-allowed disabled:opacity-40 data-[active]:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] data-[active]:text-blue-600",
  pageInfo: "text-xs text-slate-500",
};
