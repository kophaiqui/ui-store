import type { CommandStyleConfig } from "./default";
export type { CommandStyleConfig } from "./default";

export const pixelStyle: CommandStyleConfig = {
  backdrop:
    "fixed inset-0 bg-black/70 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150",
  popup:
    "fixed left-1/2 top-[20%] -translate-x-1/2 w-full overflow-hidden rounded-none border-4 border-[#ef476f] bg-[#0d0d12] shadow-[8px_8px_0_0_#000] focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:-translate-x-1/2 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-[opacity,transform] duration-150",
  sizes: {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
  },
  search: "flex items-center gap-3 border-b-4 border-[#ef476f] px-4 py-3",
  searchInput:
    "flex-1 bg-transparent font-mono text-sm font-bold text-[#06d6a0] placeholder:text-[#06d6a0]/40 outline-none",
  list: "max-h-[320px] overflow-y-auto p-1.5",
  groupHeading: "px-3 py-1.5 font-mono text-[0.6875rem] font-bold uppercase tracking-widest text-[#06d6a0]/50",
  item: "flex cursor-pointer items-center gap-3 rounded-none px-3 py-2.5 font-mono text-sm text-[#06d6a0]/80 transition-colors duration-100 select-none",
  itemSelected: "bg-[#06d6a0] text-black font-bold",
  itemDisabled: "opacity-40 cursor-not-allowed",
  itemIcon: "shrink-0 text-[#06d6a0]/60",
  itemLabel: "flex-1 font-mono font-bold text-[#06d6a0] uppercase tracking-wide",
  itemDescription: "font-mono text-xs text-[#06d6a0]/50",
  itemShortcut: "ml-auto shrink-0 font-mono text-[0.6875rem] font-bold text-[#06d6a0] border-2 border-[#06d6a0]/40 bg-[#06d6a0]/10 rounded-none px-1.5 py-0.5 uppercase",
  empty: "py-10 text-center font-mono text-sm font-bold text-[#06d6a0]/50 uppercase",
  trigger:
    "inline-flex items-center gap-2 rounded-none border-2 border-[#06d6a0] bg-[#0d0d12] px-3 py-1.5 font-mono text-sm font-bold text-[#06d6a0] uppercase tracking-wide transition-all hover:bg-[#06d6a0]/10 focus-visible:outline-none",
};
