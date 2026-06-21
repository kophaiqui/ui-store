import type { DrawerStyleConfig } from "./default";
export type { DrawerStyleConfig };

export const gradientStyle: DrawerStyleConfig = {
  backdrop: "fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-300",
  popup: "fixed bg-zinc-900 border-zinc-800 focus:outline-none overflow-y-auto flex flex-col",
  positions: {
    right:  "inset-y-0 right-0 border-l shadow-[0_0_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] data-[starting-style]:translate-x-full data-[ending-style]:translate-x-full transition-transform duration-300",
    left:   "inset-y-0 left-0 border-r shadow-[0_0_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] data-[starting-style]:-translate-x-full data-[ending-style]:-translate-x-full transition-transform duration-300",
    top:    "inset-x-0 top-0 border-b shadow-[0_0_40px_rgba(0,0,0,0.5)] data-[starting-style]:-translate-y-full data-[ending-style]:-translate-y-full transition-transform duration-300",
    bottom: "inset-x-0 bottom-0 border-t shadow-[0_0_40px_rgba(0,0,0,0.5)] data-[starting-style]:translate-y-full data-[ending-style]:translate-y-full transition-transform duration-300",
  },
  sizes: { sm: "w-72", md: "w-96", lg: "w-[32rem]", full: "w-screen" },
  header: "flex items-start justify-between gap-4 border-b border-zinc-800 p-5",
  title: "text-base font-semibold text-zinc-100",
  description: "mt-0.5 text-sm text-zinc-500",
  close: "flex size-7 shrink-0 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:text-zinc-300 hover:bg-zinc-800 focus-visible:outline-none",
  loadingWrapper: "flex flex-1 items-center justify-center p-12",
};
