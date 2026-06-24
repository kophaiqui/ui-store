import type { ComboboxStyleConfig } from "./default";
export type { ComboboxStyleConfig } from "./default";

export const retroStyle: ComboboxStyleConfig = {
  trigger: "flex min-h-9 w-full items-center justify-between rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] px-3 py-1.5 text-sm font-medium shadow-[2px_2px_0px_0px_#3d2410] transition-all duration-100 hover:bg-amber-50 focus-within:ring-2 focus-within:ring-[#e8743b]/40 focus-within:border-[#e8743b] disabled:cursor-not-allowed disabled:opacity-50 dark:border-[#A78BFA] dark:bg-[#161324] dark:hover:bg-[#A78BFA]/10 dark:focus-within:ring-[#A78BFA]/40 dark:focus-within:border-[#A78BFA] dark:shadow-[2px_2px_0px_0px_#A78BFA]",
  inputGroup: "flex flex-1 flex-wrap items-center gap-1 min-w-0",
  input: "flex-1 min-w-[60px] bg-transparent text-sm text-[#2c1a0e] placeholder:text-[#7a5230] outline-none font-medium dark:text-[#F5F3FF] dark:placeholder:text-[#A1A1AA]",
  icon: "shrink-0 text-[#7a5230] transition-transform duration-150 data-[popup-open]:rotate-180 dark:text-[#A1A1AA]",
  popup: "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] shadow-[4px_4px_0px_0px_#3d2410] py-1 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150 dark:border-[#A78BFA] dark:bg-[#161324] dark:shadow-[4px_4px_0px_0px_#A78BFA]",
  item: "flex cursor-pointer items-center gap-2 px-3 py-2 text-sm text-[#2c1a0e] font-medium transition-colors duration-100 select-none data-[highlighted]:bg-[#e8743b] data-[highlighted]:text-[#2c1a0e] data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed dark:text-[#F5F3FF] dark:data-[highlighted]:bg-[#A78BFA] dark:data-[highlighted]:text-[#F5F3FF]",
  itemIndicator: "ml-auto shrink-0 text-[#e8743b] dark:text-[#A78BFA]",
  empty: "px-3 py-6 text-center text-sm text-[#7a5230] font-medium dark:text-[#A1A1AA]",
  chip: "flex items-center gap-1 rounded-sm border-2 border-[#3d2410] bg-amber-100 px-1.5 py-0.5 text-xs text-[#2c1a0e] font-bold shadow-[1px_1px_0px_0px_#3d2410] dark:border-[#A78BFA] dark:bg-[#A78BFA]/20 dark:text-[#F5F3FF] dark:shadow-[1px_1px_0px_0px_#A78BFA]",
  chipRemove: "text-[#7a5230] hover:text-[#2c1a0e] transition-colors cursor-pointer leading-none dark:text-[#A1A1AA] dark:hover:text-[#F5F3FF]",
  clear: "shrink-0 text-[#7a5230] hover:text-[#2c1a0e] transition-colors cursor-pointer dark:text-[#A1A1AA] dark:hover:text-[#F5F3FF]",
  placeholder: "text-[#7a5230] dark:text-[#A1A1AA]",
  label: "text-sm font-black text-[#2c1a0e] leading-none uppercase tracking-wide dark:text-[#F5F3FF]",
  description: "text-xs text-[#7a5230] leading-relaxed dark:text-[#A1A1AA]",
  error: "text-xs text-red-700 font-bold dark:text-red-400",
};
