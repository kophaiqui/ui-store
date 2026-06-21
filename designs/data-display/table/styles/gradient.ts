import type { TableStyleConfig } from "./default";
export type { TableStyleConfig };

export const gradientStyle: TableStyleConfig = {
  wrapper: "w-full overflow-x-auto rounded-xl border border-zinc-800",
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
};
