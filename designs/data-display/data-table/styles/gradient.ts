import type { DataTableStyleConfig } from "./default";
export type { DataTableStyleConfig };

export const gradientStyle: DataTableStyleConfig = {
  wrapper: "flex w-full flex-col gap-3",
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
  toolbar: "flex items-center justify-between gap-3",
  searchInput: "h-8 rounded-lg border border-[#FCE7F3] bg-white px-3 text-sm text-[#0F172A] placeholder:text-[#64748B] transition-colors focus:outline-none focus:border-[#7C3AED]/60 focus:ring-2 focus:ring-[#7C3AED]/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:placeholder:text-zinc-600 dark:focus:border-fuchsia-500/60 dark:focus:ring-fuchsia-500/20",
  columnToggle: "flex h-8 items-center gap-1.5 rounded-lg border border-[#FCE7F3] bg-white px-3 text-xs text-[#64748B] transition-colors hover:border-[#7C3AED]/30 hover:text-[#7C3AED] focus-visible:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-300",
  columnTogglePopup: "z-50 min-w-[160px] rounded-xl border border-[#FCE7F3] bg-white p-2 shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_16px_40px_rgba(0,0,0,0.5)]",
  pagination: "flex items-center justify-between gap-2",
  pageBtn: "flex h-7 min-w-[28px] items-center justify-center rounded-lg border border-[#FCE7F3] bg-white px-2 text-xs text-[#64748B] transition-colors hover:border-[#7C3AED]/30 hover:text-[#7C3AED] disabled:cursor-not-allowed disabled:opacity-40 data-[active]:bg-gradient-to-r data-[active]:from-[#7C3AED] data-[active]:to-[#EC4899] data-[active]:text-white data-[active]:border-transparent dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-300 dark:data-[active]:from-fuchsia-600 dark:data-[active]:to-pink-500",
  pageInfo: "text-xs text-[#64748B] dark:text-zinc-500",
};
