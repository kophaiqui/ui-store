import type { DataTableStyleConfig } from "./default";
export type { DataTableStyleConfig } from "./default";

export const retroStyle: DataTableStyleConfig = {
  wrapper: "flex w-full flex-col gap-3",
  table: "w-full border-collapse text-sm",
  caption: "mb-2 text-left text-xs font-black text-[#7a5230] uppercase tracking-wide dark:text-[#A1A1AA]",
  thead: "border-b-2 border-[#3d2410] bg-amber-100 dark:border-[#A78BFA] dark:bg-[#1e1a2e]",
  th: "px-4 py-3 text-left text-[0.6875rem] font-black uppercase tracking-wider text-[#2c1a0e] whitespace-nowrap border-r border-[#3d2410]/30 last:border-r-0 dark:text-[#F5F3FF] dark:border-[#A78BFA]/30",
  tbody: "divide-y-2 divide-[#3d2410]/20 dark:divide-[#A78BFA]/20",
  tr: "transition-colors duration-100",
  trClickable: "cursor-pointer hover:bg-amber-50 dark:hover:bg-[#A78BFA]/10",
  trSelected: "bg-[#e8743b]/10 dark:bg-[#A78BFA]/15",
  td: "px-4 py-3 text-[#2c1a0e] font-medium border-r border-[#3d2410]/20 last:border-r-0 dark:text-[#F5F3FF] dark:border-[#A78BFA]/20",
  emptyRow: "px-4 py-10 text-center text-sm text-[#7a5230] font-bold dark:text-[#A1A1AA]",
  loadingCell: "h-4 rounded-none bg-amber-200/60 animate-pulse dark:bg-[#A78BFA]/20",
  checkboxCell: "w-10 px-3",
  sortIcon: "ml-1.5 inline-block opacity-30",
  sortIconActive: "opacity-100 text-[#e8743b] dark:text-[#A78BFA]",
  toolbar: "flex items-center justify-between gap-3",
  searchInput: "h-8 rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] px-3 text-sm text-[#2c1a0e] font-medium placeholder:text-[#7a5230] transition-all focus:outline-none focus:ring-2 focus:ring-[#e8743b]/40 focus:border-[#e8743b] shadow-[1px_1px_0px_0px_#3d2410] dark:border-[#A78BFA] dark:bg-[#161324] dark:text-[#F5F3FF] dark:placeholder:text-[#A1A1AA] dark:focus:ring-[#A78BFA]/40 dark:focus:border-[#A78BFA] dark:shadow-[1px_1px_0px_0px_#A78BFA]",
  columnToggle: "flex h-8 items-center gap-1.5 rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] px-3 text-xs font-bold text-[#2c1a0e] uppercase tracking-wide transition-all hover:bg-amber-100 focus-visible:outline-none shadow-[1px_1px_0px_0px_#3d2410] dark:border-[#A78BFA] dark:bg-[#161324] dark:text-[#F5F3FF] dark:hover:bg-[#A78BFA]/20 dark:shadow-[1px_1px_0px_0px_#A78BFA]",
  columnTogglePopup: "z-50 min-w-[160px] rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] p-2 shadow-[4px_4px_0px_0px_#3d2410] dark:border-[#A78BFA] dark:bg-[#161324] dark:shadow-[4px_4px_0px_0px_#A78BFA]",
  pagination: "flex items-center justify-between gap-2",
  pageBtn: "flex h-7 min-w-[28px] items-center justify-center rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] px-2 text-xs font-bold text-[#2c1a0e] transition-all hover:bg-amber-100 hover:translate-x-[1px] hover:translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-50 shadow-[1px_1px_0px_0px_#3d2410] data-[active]:bg-[#e8743b] data-[active]:shadow-[2px_2px_0px_0px_#3d2410] dark:border-[#A78BFA] dark:bg-[#161324] dark:text-[#F5F3FF] dark:hover:bg-[#A78BFA]/20 dark:shadow-[1px_1px_0px_0px_#A78BFA] dark:data-[active]:bg-[#A78BFA] dark:data-[active]:shadow-[2px_2px_0px_0px_#A78BFA]",
  pageInfo: "text-xs font-bold text-[#7a5230] uppercase dark:text-[#A1A1AA]",
};
