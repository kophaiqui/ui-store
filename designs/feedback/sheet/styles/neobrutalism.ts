import type { SheetStyleConfig } from "./default";
export type { SheetStyleConfig };

export const neobrutalismStyle: SheetStyleConfig = {
  backdrop: "fixed inset-0 z-[60] bg-zinc-950/60 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-300",
  popup: "fixed z-[60] bg-white dark:bg-[#111111] border-zinc-950 dark:border-white focus:outline-none overflow-y-auto flex flex-col",
  sides: {
    right:  "inset-y-0 right-0 border-l-2 shadow-[-6px_0_0_0_#09090b] dark:shadow-[-6px_0_0_0_rgba(255,255,255,0.7)] data-[starting-style]:translate-x-full data-[ending-style]:translate-x-full transition-transform duration-300",
    left:   "inset-y-0 left-0 border-r-2 shadow-[6px_0_0_0_#09090b] dark:shadow-[6px_0_0_0_rgba(255,255,255,0.7)] data-[starting-style]:-translate-x-full data-[ending-style]:-translate-x-full transition-transform duration-300",
    top:    "inset-x-0 top-0 border-b-2 shadow-[0_6px_0_0_#09090b] dark:shadow-[0_6px_0_0_rgba(255,255,255,0.7)] data-[starting-style]:-translate-y-full data-[ending-style]:-translate-y-full transition-transform duration-300",
    bottom: "inset-x-0 bottom-0 border-t-2 shadow-[0_-6px_0_0_#09090b] dark:shadow-[0_-6px_0_0_rgba(255,255,255,0.7)] data-[starting-style]:translate-y-full data-[ending-style]:translate-y-full transition-transform duration-300",
  },
  sizes: { sm: "w-72", md: "w-96", lg: "w-[32rem]", full: "w-screen" },
  header: "flex items-start justify-between gap-4 border-b-2 border-zinc-950 dark:border-white p-5",
  title: "text-base font-black text-zinc-950 dark:text-white uppercase tracking-wide",
  description: "mt-0.5 text-sm font-medium text-zinc-700 dark:text-[#D1D5DB]",
  close: "flex size-7 shrink-0 items-center justify-center rounded-none border-2 border-zinc-950 dark:border-white text-zinc-950 dark:text-white transition-colors hover:bg-yellow-300 hover:border-zinc-950 hover:text-zinc-950 focus-visible:outline-none",
  loadingWrapper: "flex flex-1 items-center justify-center p-12",
};
