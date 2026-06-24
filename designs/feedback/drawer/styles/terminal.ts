import type { DrawerStyleConfig } from "./default";
export type { DrawerStyleConfig } from "./default";

export const terminalStyle: DrawerStyleConfig = {
  backdrop: "fixed inset-0 z-[60] bg-black/60 dark:bg-black/80 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-300",
  popup: "fixed bg-white border-[#16A34A] dark:bg-[#0A0A0A] dark:border-[#22C55E] focus:outline-none overflow-y-auto flex flex-col",
  positions: {
    right:  "inset-y-0 right-0 border-l data-[starting-style]:translate-x-full data-[ending-style]:translate-x-full transition-transform duration-300",
    left:   "inset-y-0 left-0 border-r data-[starting-style]:-translate-x-full data-[ending-style]:-translate-x-full transition-transform duration-300",
    top:    "inset-x-0 top-0 border-b data-[starting-style]:-translate-y-full data-[ending-style]:-translate-y-full transition-transform duration-300",
    bottom: "inset-x-0 bottom-0 border-t data-[starting-style]:translate-y-full data-[ending-style]:translate-y-full transition-transform duration-300",
  },
  sizes: { sm: "w-72", md: "w-96", lg: "w-[32rem]", full: "w-screen" },
  header: "flex items-start justify-between gap-4 border-b border-[#16A34A]/30 dark:border-[#22C55E]/20 p-5",
  title: "font-mono text-base font-bold text-[#065F46] dark:text-[#22C55E] uppercase tracking-wide",
  description: "mt-0.5 font-mono text-sm text-[#047857] dark:text-[#86EFAC]",
  close: "flex size-7 shrink-0 items-center justify-center rounded-sm border border-[#16A34A]/40 text-[#065F46] dark:border-[#22C55E]/30 dark:text-[#22C55E] transition-colors hover:bg-[#16A34A]/10 dark:hover:bg-[#22C55E]/10 focus-visible:outline-none",
  loadingWrapper: "flex flex-1 items-center justify-center p-12",
};
