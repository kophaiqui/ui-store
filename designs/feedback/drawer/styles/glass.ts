export type { DrawerStyleConfig } from "./default";
import type { DrawerStyleConfig } from "./default";

export const glassStyle: DrawerStyleConfig = {
  backdrop: "fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-300",
  popup: "fixed bg-white/80 backdrop-blur-2xl border-black/10 dark:bg-black/40 dark:border-white/10 focus:outline-none overflow-y-auto flex flex-col",
  positions: {
    right:  "inset-y-0 right-0 border-l data-[starting-style]:translate-x-full data-[ending-style]:translate-x-full transition-transform duration-300",
    left:   "inset-y-0 left-0 border-r data-[starting-style]:-translate-x-full data-[ending-style]:-translate-x-full transition-transform duration-300",
    top:    "inset-x-0 top-0 border-b data-[starting-style]:-translate-y-full data-[ending-style]:-translate-y-full transition-transform duration-300",
    bottom: "inset-x-0 bottom-0 border-t data-[starting-style]:translate-y-full data-[ending-style]:translate-y-full transition-transform duration-300",
  },
  sizes: { sm: "w-72", md: "w-96", lg: "w-[32rem]", full: "w-screen" },
  header: "flex items-start justify-between gap-4 border-b border-black/8 dark:border-white/10 p-5",
  title: "text-base font-semibold text-foreground",
  description: "mt-0.5 text-sm text-foreground/60",
  close: "flex size-7 shrink-0 items-center justify-center rounded-lg text-foreground/50 transition-colors hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none",
  loadingWrapper: "flex flex-1 items-center justify-center p-12",
};
