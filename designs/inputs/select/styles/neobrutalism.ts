import type { SelectStyleConfig } from "./default";
export type { SelectStyleConfig };

export const neobrutalismStyle: SelectStyleConfig = {
  trigger: "flex h-9 w-full items-center justify-between gap-2 rounded-none border-2 border-zinc-950 dark:border-white bg-white dark:bg-[#111111] px-3 text-sm font-medium text-zinc-950 dark:text-white shadow-[3px_3px_0px_0px_#09090b] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#09090b] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)] focus:outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[1px_1px_0px_0px_#09090b] dark:focus:shadow-[1px_1px_0px_0px_rgba(255,255,255,0.7)] disabled:pointer-events-none disabled:opacity-40",
  icon: "shrink-0 text-zinc-700 dark:text-[#D1D5DB]",
  placeholder: "text-zinc-400 dark:text-zinc-600",
  popup: "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-none border-2 border-zinc-950 dark:border-white bg-white dark:bg-[#111111] py-1 shadow-[5px_5px_0px_0px_#09090b] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.7)]",
  item: "flex h-8 cursor-default select-none items-center px-3 text-sm font-medium text-zinc-800 dark:text-[#D1D5DB] transition-colors duration-100 data-[highlighted]:bg-yellow-300 data-[highlighted]:text-zinc-950 data-[selected]:font-black",
};
