import type { SheetStyleConfig } from "./default";
export type { SheetStyleConfig };

export const gradientStyle: SheetStyleConfig = {
  backdrop: "fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-300 dark:bg-black/70",
  popup: "fixed z-[60] bg-white border-[#FCE7F3] focus:outline-none overflow-y-auto flex flex-col dark:bg-zinc-900 dark:border-zinc-800",
  sides: {
    right:  "inset-y-0 right-0 border-l shadow-[0_0_64px_rgba(0,0,0,0.08)] data-[starting-style]:translate-x-full data-[ending-style]:translate-x-full transition-transform duration-300 dark:shadow-[0_0_64px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05)]",
    left:   "inset-y-0 left-0 border-r shadow-[0_0_64px_rgba(0,0,0,0.08)] data-[starting-style]:-translate-x-full data-[ending-style]:-translate-x-full transition-transform duration-300 dark:shadow-[0_0_64px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05)]",
    top:    "inset-x-0 top-0 border-b shadow-[0_0_64px_rgba(0,0,0,0.08)] data-[starting-style]:-translate-y-full data-[ending-style]:-translate-y-full transition-transform duration-300 dark:shadow-[0_0_64px_rgba(0,0,0,0.6)]",
    bottom: "inset-x-0 bottom-0 border-t shadow-[0_0_64px_rgba(0,0,0,0.08)] data-[starting-style]:translate-y-full data-[ending-style]:translate-y-full transition-transform duration-300 dark:shadow-[0_0_64px_rgba(0,0,0,0.6)]",
  },
  sizes: { sm: "w-72", md: "w-96", lg: "w-[32rem]", full: "w-screen" },
  header: "flex items-start justify-between gap-4 border-b border-[#FCE7F3] p-5 dark:border-zinc-800",
  title: "text-base font-semibold text-[#0F172A] dark:text-zinc-100",
  description: "mt-0.5 text-sm text-[#64748B] dark:text-zinc-500",
  close: "flex size-7 shrink-0 items-center justify-center rounded-lg text-[#64748B] transition-colors hover:text-[#7C3AED] hover:bg-[#7C3AED]/8 focus-visible:outline-none dark:text-zinc-500 dark:hover:text-zinc-300 dark:hover:bg-zinc-800",
  loadingWrapper: "flex flex-1 items-center justify-center p-12",
};
