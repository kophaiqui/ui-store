export type { CommandStyleConfig } from "./default";
import type { CommandStyleConfig } from "./default";

export const auroraStyle: CommandStyleConfig = {
  backdrop:
    "fixed inset-0 bg-[#05060f]/70 backdrop-blur-[3px] data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150",
  popup:
    "fixed left-1/2 top-[20%] -translate-x-1/2 w-full overflow-hidden rounded-xl border border-indigo-400/20 bg-[#0b1022]/95 backdrop-blur-xl shadow-[0_0_50px_rgba(99,102,241,0.15),0_24px_64px_rgba(0,0,0,0.6)] focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:-translate-x-1/2 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-[opacity,transform] duration-150",
  sizes: {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
  },
  search: "flex items-center gap-3 border-b border-indigo-400/15 px-4 py-3",
  searchInput:
    "flex-1 bg-transparent text-sm text-teal-50 placeholder:text-indigo-300/40 outline-none",
  list: "max-h-[320px] overflow-y-auto p-1.5",
  groupHeading: "px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-wider text-indigo-300/40",
  item: "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors duration-100 select-none",
  itemSelected: "bg-teal-400/10 text-teal-100",
  itemDisabled: "opacity-40 cursor-not-allowed",
  itemIcon: "shrink-0 text-indigo-300/50",
  itemLabel: "flex-1 font-medium text-indigo-200/90",
  itemDescription: "text-xs text-indigo-300/50",
  itemShortcut: "ml-auto shrink-0 font-mono text-[0.6875rem] text-indigo-300/40 bg-indigo-900/40 rounded px-1.5 py-0.5",
  empty: "py-10 text-center text-sm text-indigo-300/40",
  trigger:
    "inline-flex items-center gap-2 rounded-lg border border-indigo-400/20 bg-indigo-950/50 px-3 py-1.5 text-sm text-indigo-300 transition-colors hover:bg-indigo-900/50 hover:text-teal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/40",
};
