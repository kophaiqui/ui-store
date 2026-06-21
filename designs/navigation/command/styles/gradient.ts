import type { CommandStyleConfig } from "./default";
export type { CommandStyleConfig };

export const gradientStyle: CommandStyleConfig = {
  backdrop: "fixed inset-0 bg-black/70 backdrop-blur-sm data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150",
  popup: "fixed left-1/2 top-[20%] -translate-x-1/2 w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-[0_24px_64px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)] focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:-translate-x-1/2 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-[opacity,transform] duration-150",
  sizes: {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
  },
  search: "flex items-center gap-3 border-b border-zinc-800 px-4 py-3",
  searchInput: "flex-1 bg-transparent text-sm text-zinc-200 placeholder:text-zinc-600 outline-none",
  list: "max-h-[320px] overflow-y-auto p-1.5",
  groupHeading: "px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-wider text-zinc-600",
  item: "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors duration-100 select-none",
  itemSelected: "bg-fuchsia-500/10 text-fuchsia-200",
  itemDisabled: "opacity-40 cursor-not-allowed",
  itemIcon: "shrink-0 text-zinc-500",
  itemLabel: "flex-1 font-medium text-zinc-300",
  itemDescription: "text-xs text-zinc-500",
  itemShortcut: "ml-auto shrink-0 font-mono text-[0.6875rem] text-zinc-600 bg-zinc-800 rounded px-1.5 py-0.5 border border-zinc-700",
  empty: "py-10 text-center text-sm text-zinc-500",
  trigger: "inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-sm text-zinc-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-150 hover:border-zinc-600 hover:bg-zinc-700 hover:text-zinc-300 active:scale-[0.97] focus-visible:outline-none",
};
