import type { DataTableStyleConfig } from "./default";
export type { DataTableStyleConfig };

export const neobrutalismStyle: DataTableStyleConfig = {
  wrapper: "flex w-full flex-col gap-3",
  table: "w-full border-collapse text-sm border-2 border-zinc-950 dark:border-white",
  caption: "mb-2 text-left text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wide",
  thead: "border-b-2 border-zinc-950 dark:border-white bg-yellow-300",
  th: "px-4 py-3 text-left text-xs font-black uppercase tracking-wider text-zinc-950 whitespace-nowrap border-r-2 border-zinc-950 dark:border-white last:border-r-0",
  tbody: "divide-y-2 divide-zinc-950 dark:divide-white",
  tr: "transition-colors duration-100",
  trClickable: "cursor-pointer hover:bg-yellow-50 dark:hover:bg-yellow-300/10",
  trSelected: "bg-yellow-200 dark:bg-yellow-300/20",
  td: "px-4 py-3 text-zinc-900 dark:text-[#D1D5DB] font-medium border-r-2 border-zinc-950/20 dark:border-white/20 last:border-r-0",
  emptyRow: "px-4 py-10 text-center text-sm font-bold text-zinc-500 dark:text-[#9CA3AF] uppercase",
  loadingCell: "h-4 rounded-none bg-zinc-200 dark:bg-[#222222] animate-pulse",
  checkboxCell: "w-10 px-3",
  sortIcon: "ml-1.5 inline-block opacity-40",
  sortIconActive: "opacity-100 text-zinc-950",
  toolbar: "flex items-center justify-between gap-3",
  searchInput: "h-8 rounded-none border-2 border-zinc-950 dark:border-white bg-white dark:bg-[#111111] px-3 text-sm text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 transition-all focus:outline-none focus:shadow-[3px_3px_0px_0px_#09090b] dark:focus:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)] focus:-translate-x-[1px] focus:-translate-y-[1px]",
  columnToggle: "flex h-8 items-center gap-1.5 rounded-none border-2 border-zinc-950 dark:border-white bg-white dark:bg-[#111111] px-3 text-xs text-zinc-900 dark:text-white font-bold transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none shadow-[2px_2px_0px_0px_#09090b] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)] focus-visible:outline-none",
  columnTogglePopup: "z-50 min-w-[160px] rounded-none border-2 border-zinc-950 dark:border-white bg-white dark:bg-[#111111] p-2 shadow-[4px_4px_0px_0px_#09090b] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.7)]",
  pagination: "flex items-center justify-between gap-2",
  pageBtn: "flex h-7 min-w-[28px] items-center justify-center rounded-none border-2 border-zinc-950 dark:border-white bg-white dark:bg-[#111111] px-2 text-xs font-bold text-zinc-950 dark:text-white transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none shadow-[2px_2px_0px_0px_#09090b] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)] disabled:cursor-not-allowed disabled:opacity-40 data-[active]:bg-yellow-300 data-[active]:text-zinc-950",
  pageInfo: "text-xs font-bold text-zinc-700 dark:text-[#D1D5DB] uppercase",
};
