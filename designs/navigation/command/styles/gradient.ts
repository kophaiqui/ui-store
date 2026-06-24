import type { CommandStyleConfig } from "./default";
export type { CommandStyleConfig };

export const gradientStyle: CommandStyleConfig = {
  backdrop: "fixed inset-0 bg-black/30 backdrop-blur-sm data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150 dark:bg-black/70",
  popup: "fixed left-1/2 top-[20%] -translate-x-1/2 w-full overflow-hidden rounded-2xl border border-[#FCE7F3] bg-white shadow-[0_16px_48px_rgba(0,0,0,0.12)] focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:-translate-x-1/2 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-[opacity,transform] duration-150 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_24px_64px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]",
  sizes: {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
  },
  search: "flex items-center gap-3 border-b border-[#FCE7F3] px-4 py-3 dark:border-zinc-800",
  searchInput: "flex-1 bg-transparent text-sm text-[#0F172A] placeholder:text-[#64748B] outline-none dark:text-zinc-200 dark:placeholder:text-zinc-600",
  list: "max-h-[320px] overflow-y-auto p-1.5",
  groupHeading: "px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-wider text-[#64748B] dark:text-zinc-600",
  item: "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors duration-100 select-none",
  itemSelected: "bg-[#7C3AED]/8 text-[#7C3AED] dark:bg-fuchsia-500/10 dark:text-fuchsia-200",
  itemDisabled: "opacity-40 cursor-not-allowed",
  itemIcon: "shrink-0 text-[#64748B] dark:text-zinc-500",
  itemLabel: "flex-1 font-medium text-[#0F172A] dark:text-zinc-300",
  itemDescription: "text-xs text-[#64748B] dark:text-zinc-500",
  itemShortcut: "ml-auto shrink-0 font-mono text-[0.6875rem] text-[#64748B] bg-[#FDF2F8] rounded px-1.5 py-0.5 border border-[#FCE7F3] dark:text-zinc-600 dark:bg-zinc-800 dark:border-zinc-700",
  empty: "py-10 text-center text-sm text-[#64748B] dark:text-zinc-500",
  trigger: "inline-flex items-center gap-2 rounded-xl border border-[#FCE7F3] bg-white px-3 py-1.5 text-sm text-[#64748B] shadow-sm transition-all duration-150 hover:border-[#7C3AED]/30 hover:bg-[#FDF2F8] hover:text-[#7C3AED] active:scale-[0.97] focus-visible:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] dark:hover:border-zinc-600 dark:hover:bg-zinc-700 dark:hover:text-zinc-300",
};
