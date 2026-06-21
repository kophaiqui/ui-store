import type { CommandStyleConfig } from "./default";
export type { CommandStyleConfig };

export const neobrutalismStyle: CommandStyleConfig = {
  backdrop: "fixed inset-0 bg-zinc-950/60 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150",
  popup: "fixed left-1/2 top-[20%] -translate-x-1/2 w-full overflow-hidden rounded-none border-2 border-zinc-950 bg-white shadow-[8px_8px_0px_0px_#09090b] focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:-translate-x-1/2 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-[opacity,transform] duration-150",
  sizes: {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
  },
  search: "flex items-center gap-3 border-b-2 border-zinc-950 px-4 py-3",
  searchInput: "flex-1 bg-transparent text-sm font-medium text-zinc-950 placeholder:text-zinc-400 outline-none",
  list: "max-h-[320px] overflow-y-auto p-1",
  groupHeading: "px-3 py-1.5 text-[0.6875rem] font-black uppercase tracking-wider text-zinc-500",
  item: "flex cursor-pointer items-center gap-3 rounded-none px-3 py-2.5 text-sm font-medium transition-colors duration-100 select-none",
  itemSelected: "bg-yellow-300 text-zinc-950",
  itemDisabled: "opacity-40 cursor-not-allowed",
  itemIcon: "shrink-0 text-zinc-600",
  itemLabel: "flex-1 font-bold text-zinc-900",
  itemDescription: "text-xs font-medium text-zinc-500",
  itemShortcut: "ml-auto shrink-0 font-mono font-bold text-[0.6875rem] text-zinc-700 border-2 border-zinc-950 rounded-none px-1.5 py-0.5 bg-zinc-100 shadow-[1px_1px_0px_0px_#09090b]",
  empty: "py-10 text-center text-sm font-bold text-zinc-400 uppercase",
  trigger: "inline-flex items-center gap-2 rounded-none border-2 border-zinc-950 bg-white px-3 py-1.5 text-sm font-bold text-zinc-700 shadow-[3px_3px_0px_0px_#09090b] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#09090b] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none focus-visible:outline-none",
};
