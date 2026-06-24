import type { TableStyleConfig } from "./default";
export type { TableStyleConfig } from "./default";

export const terminalStyle: TableStyleConfig = {
  wrapper: "w-full overflow-x-auto border border-[#16A34A] dark:border-[#22C55E]",
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
};
