export type { CommandStyleConfig } from "./default";
import type { CommandStyleConfig } from "./default";

export const materialStyle: CommandStyleConfig = {
  backdrop:
    "fixed inset-0 bg-black/40 backdrop-blur-[2px] data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150",
  popup:
    "fixed left-1/2 top-[20%] -translate-x-1/2 w-full overflow-hidden rounded-3xl border border-violet-200/40 bg-white dark:border-violet-800/30 dark:bg-[#1d1b20] shadow-[0_8px_24px_rgba(103,80,164,0.20)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.5)] focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:-translate-x-1/2 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-[opacity,transform] duration-150",
  sizes: {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
  },
  search: "flex items-center gap-3 border-b border-violet-200/40 dark:border-violet-800/30 px-4 py-3",
  searchInput:
    "flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground/40 outline-none",
  list: "max-h-[320px] overflow-y-auto p-1.5",
  groupHeading: "px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-wider text-foreground/40",
  item: "flex cursor-pointer items-center gap-3 rounded-2xl px-3 py-2.5 text-sm transition-colors duration-100 select-none",
  itemSelected: "bg-violet-100 dark:bg-violet-500/15 text-foreground",
  itemDisabled: "opacity-40 cursor-not-allowed",
  itemIcon: "shrink-0 text-foreground/50",
  itemLabel: "flex-1 font-medium text-foreground/80",
  itemDescription: "text-xs text-foreground/50",
  itemShortcut: "ml-auto shrink-0 font-mono text-[0.6875rem] text-foreground/40 bg-violet-100 dark:bg-violet-500/15 rounded-full px-1.5 py-0.5",
  empty: "py-10 text-center text-sm text-foreground/40",
  trigger:
    "inline-flex items-center gap-2 rounded-full border border-violet-300/60 bg-transparent px-3 py-1.5 text-sm text-violet-700 dark:border-violet-700/40 dark:text-violet-300 transition-colors hover:bg-violet-50 dark:hover:bg-violet-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40",
};
