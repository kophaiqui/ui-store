import type { CommandStyleConfig } from "./default";
export type { CommandStyleConfig } from "./default";

export const retroStyle: CommandStyleConfig = {
  backdrop: "fixed inset-0 bg-[#2c1a0e]/50 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150 dark:bg-[#0D0B16]/80",
  popup: "fixed left-1/2 top-[20%] -translate-x-1/2 w-full overflow-hidden rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] shadow-[8px_8px_0px_0px_#3d2410] focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:-translate-x-1/2 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-[opacity,transform] duration-150 dark:border-[#A78BFA] dark:bg-[#161324] dark:shadow-[8px_8px_0px_0px_#A78BFA]",
  sizes: { sm: "max-w-sm", md: "max-w-lg", lg: "max-w-2xl" },
  search: "flex items-center gap-3 border-b-2 border-[#3d2410] px-4 py-3 bg-amber-50 dark:border-[#A78BFA] dark:bg-[#1e1a2e]",
  searchInput: "flex-1 bg-transparent text-sm font-bold text-[#2c1a0e] placeholder:text-[#7a5230] outline-none dark:text-[#F5F3FF] dark:placeholder:text-[#A1A1AA]",
  list: "max-h-[320px] overflow-y-auto p-1.5",
  groupHeading: "px-3 py-1.5 text-[0.6875rem] font-black uppercase tracking-widest text-[#7a5230] dark:text-[#A1A1AA]",
  item: "flex cursor-pointer items-center gap-3 rounded-sm px-3 py-2.5 text-sm font-medium transition-colors duration-100 select-none text-[#2c1a0e] dark:text-[#F5F3FF]",
  itemSelected: "bg-[#e8743b] text-[#2c1a0e] font-bold border border-[#3d2410] dark:bg-[#A78BFA] dark:text-[#F5F3FF] dark:border-[#A78BFA]",
  itemDisabled: "opacity-40 cursor-not-allowed",
  itemIcon: "shrink-0 text-[#7a5230] dark:text-[#A1A1AA]",
  itemLabel: "flex-1 font-bold text-[#2c1a0e] dark:text-[#F5F3FF]",
  itemDescription: "text-xs text-[#7a5230] font-medium dark:text-[#A1A1AA]",
  itemShortcut: "ml-auto shrink-0 font-mono text-[0.6875rem] font-black text-[#7a5230] border border-[#3d2410] bg-amber-100 rounded-sm px-1.5 py-0.5 uppercase dark:text-[#A1A1AA] dark:border-[#A78BFA] dark:bg-[#A78BFA]/15",
  empty: "py-10 text-center text-sm font-bold text-[#7a5230] uppercase tracking-wide dark:text-[#A1A1AA]",
  trigger: "inline-flex items-center gap-2 rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] px-3 py-1.5 text-sm font-bold text-[#2c1a0e] shadow-[2px_2px_0px_0px_#3d2410] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#3d2410] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8743b]/40 dark:border-[#A78BFA] dark:bg-[#161324] dark:text-[#F5F3FF] dark:shadow-[2px_2px_0px_0px_#A78BFA] dark:hover:shadow-[1px_1px_0px_0px_#A78BFA] dark:focus-visible:ring-[#A78BFA]/40",
};
