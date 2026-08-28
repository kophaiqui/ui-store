export type { DataTableStyleConfig } from "./default";
import type { DataTableStyleConfig } from "./default";

export const auroraStyle: DataTableStyleConfig = {
  wrapper: "flex w-full flex-col gap-3",
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
  toolbar: "flex items-center justify-between gap-3",
  searchInput:
    "h-8 rounded-lg border border-indigo-400/20 bg-indigo-950/50 px-3 text-sm text-teal-50 placeholder:text-indigo-300/40 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-teal-400/40",
  columnToggle:
    "flex h-8 items-center gap-1.5 rounded-lg border border-indigo-400/20 bg-indigo-950/50 px-3 text-xs text-indigo-300/70 transition-colors hover:bg-indigo-900/50 hover:text-teal-200 focus-visible:outline-none",
  columnTogglePopup:
    "z-50 min-w-[160px] rounded-lg border border-indigo-400/20 bg-[#0b1022]/95 backdrop-blur-md p-2 shadow-[0_0_24px_rgba(99,102,241,0.15),0_8px_24px_rgba(0,0,0,0.5)]",
  pagination: "flex items-center justify-between gap-2",
  pageBtn:
    "flex h-7 min-w-[28px] items-center justify-center rounded-md border border-indigo-400/20 bg-indigo-950/50 px-2 text-xs text-teal-50/85 transition-colors hover:bg-indigo-900/50 hover:text-teal-200 disabled:cursor-not-allowed disabled:opacity-40 data-[active]:bg-gradient-to-r data-[active]:from-teal-500/40 data-[active]:to-violet-500/40 data-[active]:text-white data-[active]:border-teal-400/40",
  pageInfo: "text-xs text-indigo-300/50",
};
