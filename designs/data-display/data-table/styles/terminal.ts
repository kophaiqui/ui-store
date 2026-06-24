import type { DataTableStyleConfig } from "./default";
export type { DataTableStyleConfig } from "./default";

export const terminalStyle: DataTableStyleConfig = {
  wrapper: "flex w-full flex-col gap-3",
  table: "w-full border-collapse font-mono text-sm",
  caption: "mb-2 text-left text-xs font-mono font-bold text-[#047857] dark:text-[#86EFAC] uppercase tracking-wide",
  thead: "border-b border-[#16A34A] dark:border-[#22C55E] bg-[#16A34A]/5 dark:bg-[#22C55E]/5",
  th: "px-4 py-3 text-left text-[0.6875rem] font-mono font-bold uppercase tracking-wider text-[#065F46] dark:text-[#22C55E] whitespace-nowrap border-r border-[#16A34A]/20 dark:border-[#22C55E]/15 last:border-r-0",
  tbody: "divide-y divide-[#16A34A]/15 dark:divide-[#22C55E]/10",
  tr: "transition-colors duration-100",
  trClickable: "cursor-pointer hover:bg-[#16A34A]/5 dark:hover:bg-[#22C55E]/5",
  trSelected: "bg-[#16A34A]/10 dark:bg-[#22C55E]/10",
  td: "px-4 py-3 font-mono text-[#065F46] dark:text-[#86EFAC] border-r border-[#16A34A]/10 dark:border-[#22C55E]/10 last:border-r-0",
  emptyRow: "px-4 py-10 text-center font-mono text-sm text-[#047857] dark:text-[#86EFAC]",
  loadingCell: "h-4 rounded-none bg-[#16A34A]/10 dark:bg-[#22C55E]/10 animate-pulse",
  checkboxCell: "w-10 px-3",
  sortIcon: "ml-1.5 inline-block opacity-30",
  sortIconActive: "opacity-100 text-[#16A34A] dark:text-[#22C55E]",
  toolbar: "flex items-center justify-between gap-3",
  searchInput: "h-8 rounded-sm border border-[#16A34A] bg-white px-3 font-mono text-sm text-[#065F46] placeholder:text-[#047857]/50 dark:border-[#22C55E] dark:bg-transparent dark:text-[#22C55E] dark:placeholder:text-[#86EFAC]/40 transition-all focus:outline-none focus:ring-2 focus:ring-[#16A34A]/30 dark:focus:ring-[#22C55E]/30",
  columnToggle: "flex h-8 items-center gap-1.5 rounded-sm border border-[#16A34A] bg-white px-3 font-mono text-xs font-bold text-[#065F46] uppercase tracking-wide dark:border-[#22C55E] dark:bg-transparent dark:text-[#22C55E] transition-all hover:bg-[#16A34A]/5 dark:hover:bg-[#22C55E]/5 focus-visible:outline-none",
  columnTogglePopup: "z-50 min-w-[160px] rounded-sm border border-[#16A34A] bg-white dark:border-[#22C55E] dark:bg-[#0F0F0F] p-2 shadow-sm dark:shadow-[0_0_12px_rgba(34,197,94,0.15)]",
  pagination: "flex items-center justify-between gap-2",
  pageBtn: "flex h-7 min-w-[28px] items-center justify-center rounded-sm border border-[#16A34A] bg-white px-2 font-mono text-xs font-bold text-[#065F46] dark:border-[#22C55E] dark:bg-transparent dark:text-[#22C55E] transition-all hover:bg-[#16A34A]/10 dark:hover:bg-[#22C55E]/10 disabled:cursor-not-allowed disabled:opacity-40 data-[active]:bg-[#16A34A] data-[active]:text-white dark:data-[active]:bg-[#22C55E] dark:data-[active]:text-black",
  pageInfo: "font-mono text-xs font-bold text-[#047857] dark:text-[#86EFAC] uppercase",
};
