import type { DrawerStyleConfig } from "./default";
export type { DrawerStyleConfig } from "./default";

export const retroStyle: DrawerStyleConfig = {
  backdrop: "fixed inset-0 z-[60] bg-[#2c1a0e]/50 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-300 dark:bg-[#0D0B16]/80",
  popup: "fixed bg-[#fdf6e3] border-[#3d2410] focus:outline-none overflow-y-auto flex flex-col dark:bg-[#161324] dark:border-[#A78BFA]",
  positions: {
    right:  "inset-y-0 right-0 border-l-2 data-[starting-style]:translate-x-full data-[ending-style]:translate-x-full transition-transform duration-300",
    left:   "inset-y-0 left-0 border-r-2 data-[starting-style]:-translate-x-full data-[ending-style]:-translate-x-full transition-transform duration-300",
    top:    "inset-x-0 top-0 border-b-2 data-[starting-style]:-translate-y-full data-[ending-style]:-translate-y-full transition-transform duration-300",
    bottom: "inset-x-0 bottom-0 border-t-2 data-[starting-style]:translate-y-full data-[ending-style]:translate-y-full transition-transform duration-300",
  },
  sizes: { sm: "w-72", md: "w-96", lg: "w-[32rem]", full: "w-screen" },
  header: "flex items-start justify-between gap-4 border-b-2 border-[#3d2410] p-5 dark:border-[#A78BFA]",
  title: "text-base font-black text-[#2c1a0e] uppercase tracking-wide dark:text-[#F5F3FF]",
  description: "mt-0.5 text-sm font-medium text-[#7a5230] dark:text-[#A1A1AA]",
  close: "flex size-7 shrink-0 items-center justify-center rounded-none border-2 border-[#3d2410] text-[#2c1a0e] transition-colors hover:bg-[#e8743b] focus-visible:outline-none shadow-[1px_1px_0px_0px_#3d2410] dark:border-[#A78BFA] dark:text-[#F5F3FF] dark:hover:bg-[#A78BFA] dark:shadow-[1px_1px_0px_0px_#A78BFA]",
  loadingWrapper: "flex flex-1 items-center justify-center p-12",
};
