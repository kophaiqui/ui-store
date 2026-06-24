import type { TableStyleConfig } from "./default";
export type { TableStyleConfig };

export const gradientStyle: TableStyleConfig = {
  wrapper: "w-full overflow-x-auto rounded-xl border border-[#FCE7F3] dark:border-zinc-800",
  table: "w-full border-collapse text-sm",
  caption: "mb-2 text-left text-xs text-[#64748B] dark:text-zinc-500",
  thead: "border-b border-[#FCE7F3] dark:border-zinc-800",
  th: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#64748B] whitespace-nowrap dark:text-zinc-500",
  tbody: "divide-y divide-[#FCE7F3]/60 dark:divide-zinc-800/60",
  tr: "transition-colors duration-100",
  trClickable: "cursor-pointer hover:bg-[#7C3AED]/4 dark:hover:bg-fuchsia-500/5",
  trSelected: "bg-[#7C3AED]/6 dark:bg-fuchsia-500/8",
  td: "px-4 py-3 text-[#0F172A] dark:text-zinc-300",
  emptyRow: "px-4 py-10 text-center text-sm text-[#64748B] dark:text-zinc-500",
  loadingCell: "h-4 rounded-md bg-[#FCE7F3] animate-pulse dark:bg-zinc-800",
  checkboxCell: "w-10 px-3",
  sortIcon: "ml-1.5 inline-block opacity-30",
  sortIconActive: "opacity-100 text-[#7C3AED] dark:text-fuchsia-400",
};
