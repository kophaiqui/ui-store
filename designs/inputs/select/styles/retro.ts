import type { SelectStyleConfig } from "./default";
export type { SelectStyleConfig } from "./default";

export const retroStyle: SelectStyleConfig = {
  trigger: "flex h-9 w-full items-center justify-between gap-2 rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] px-3 text-sm text-[#2c1a0e] font-medium shadow-[2px_2px_0px_0px_#3d2410] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#3d2410] focus:outline-none focus:border-[#e8743b] focus:shadow-[2px_2px_0px_0px_#e8743b] disabled:pointer-events-none disabled:opacity-50 dark:border-[#A78BFA] dark:bg-[#161324] dark:text-[#F5F3FF] dark:shadow-[2px_2px_0px_0px_#A78BFA] dark:hover:shadow-[1px_1px_0px_0px_#A78BFA] dark:focus:border-[#A78BFA] dark:focus:shadow-[2px_2px_0px_0px_#A78BFA]",
  icon: "shrink-0 text-[#7a5230] dark:text-[#A1A1AA]",
  placeholder: "text-[#7a5230] dark:text-[#A1A1AA]",
  popup: "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] py-1 shadow-[4px_4px_0px_0px_#3d2410] dark:border-[#A78BFA] dark:bg-[#161324] dark:shadow-[4px_4px_0px_0px_#A78BFA]",
  item: "flex h-8 cursor-default select-none items-center px-3 text-sm text-[#2c1a0e] font-medium transition-colors duration-100 data-[highlighted]:bg-[#e8743b] data-[highlighted]:text-[#2c1a0e] data-[selected]:text-[#e8743b] data-[selected]:font-black dark:text-[#F5F3FF] dark:data-[highlighted]:bg-[#A78BFA] dark:data-[highlighted]:text-[#F5F3FF] dark:data-[selected]:text-[#A78BFA]",
};
