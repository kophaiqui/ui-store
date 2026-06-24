import type { CommandStyleConfig } from "./default";
export type { CommandStyleConfig } from "./default";

export const terminalStyle: CommandStyleConfig = {
  backdrop: "fixed inset-0 bg-black/60 dark:bg-black/80 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150",
  popup: "fixed left-1/2 top-[20%] -translate-x-1/2 w-full overflow-hidden rounded-sm border border-[#16A34A] bg-white dark:border-[#22C55E] dark:bg-[#0A0A0A] dark:shadow-[0_0_24px_rgba(34,197,94,0.15)] focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:-translate-x-1/2 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-[opacity,transform] duration-150",
  sizes: { sm: "max-w-sm", md: "max-w-lg", lg: "max-w-2xl" },
  search: "flex items-center gap-3 border-b border-[#16A34A]/30 dark:border-[#22C55E]/20 px-4 py-3",
  searchInput: "flex-1 bg-transparent font-mono text-sm font-bold text-[#065F46] dark:text-[#22C55E] placeholder:text-[#047857]/50 dark:placeholder:text-[#86EFAC]/40 outline-none",
  list: "max-h-[320px] overflow-y-auto p-1.5",
  groupHeading: "px-3 py-1.5 font-mono text-[0.6875rem] font-bold uppercase tracking-widest text-[#047857] dark:text-[#86EFAC]",
  item: "flex cursor-pointer items-center gap-3 rounded-sm px-3 py-2.5 font-mono text-sm transition-colors duration-100 select-none text-[#065F46] dark:text-[#22C55E]",
  itemSelected: "bg-[#16A34A] text-white dark:bg-[#22C55E] dark:text-black font-bold",
  itemDisabled: "opacity-40 cursor-not-allowed",
  itemIcon: "shrink-0 text-[#047857] dark:text-[#86EFAC]",
  itemLabel: "flex-1 font-mono font-bold text-[#065F46] dark:text-[#22C55E]",
  itemDescription: "font-mono text-xs text-[#047857] dark:text-[#86EFAC]",
  itemShortcut: "ml-auto shrink-0 font-mono text-[0.6875rem] font-bold text-[#047857] dark:text-[#86EFAC] border border-[#16A34A]/30 dark:border-[#22C55E]/20 bg-[#16A34A]/5 dark:bg-[#22C55E]/5 rounded-sm px-1.5 py-0.5 uppercase",
  empty: "py-10 text-center font-mono text-sm font-bold text-[#047857] dark:text-[#86EFAC] uppercase tracking-wide",
  trigger: "inline-flex items-center gap-2 rounded-sm border border-[#16A34A] bg-transparent px-3 py-1.5 font-mono text-sm font-bold text-[#065F46] dark:border-[#22C55E] dark:text-[#22C55E] transition-all hover:bg-[#16A34A]/10 dark:hover:bg-[#22C55E]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]/40 dark:focus-visible:ring-[#22C55E]/40",
};
