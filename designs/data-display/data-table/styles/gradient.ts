import type { DataTableStyleConfig } from "./default";
export type { DataTableStyleConfig };

export const gradientStyle: DataTableStyleConfig = {
  wrapper: "flex w-full flex-col gap-3",
  table: "w-full border-collapse text-sm",
  caption: "mb-2 text-left text-xs text-zinc-500",
  thead: "border-b border-zinc-800",
  th: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-zinc-500 whitespace-nowrap",
  tbody: "divide-y divide-zinc-800/60",
  tr: "transition-colors duration-100",
  trClickable: "cursor-pointer hover:bg-fuchsia-500/5",
  trSelected: "bg-fuchsia-500/8",
  td: "px-4 py-3 text-zinc-300",
  emptyRow: "px-4 py-10 text-center text-sm text-zinc-500",
  loadingCell: "h-4 rounded-md bg-zinc-800 animate-pulse",
  checkboxCell: "w-10 px-3",
  sortIcon: "ml-1.5 inline-block opacity-30",
  sortIconActive: "opacity-100 text-fuchsia-400",
  toolbar: "flex items-center justify-between gap-3",
  searchInput: "h-8 rounded-lg border border-zinc-700 bg-zinc-900 px-3 text-sm text-zinc-200 placeholder:text-zinc-600 transition-colors focus:outline-none focus:border-fuchsia-500/60 focus:ring-2 focus:ring-fuchsia-500/20",
  columnToggle: "flex h-8 items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-900 px-3 text-xs text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-300 focus-visible:outline-none",
  columnTogglePopup: "z-50 min-w-[160px] rounded-xl border border-zinc-800 bg-zinc-900 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.5)]",
  pagination: "flex items-center justify-between gap-2",
  pageBtn: "flex h-7 min-w-[28px] items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 px-2 text-xs text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-300 disabled:cursor-not-allowed disabled:opacity-40 data-[active]:bg-gradient-to-r data-[active]:from-fuchsia-600 data-[active]:to-pink-500 data-[active]:text-white data-[active]:border-transparent",
  pageInfo: "text-xs text-zinc-500",
};
