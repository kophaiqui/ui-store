import type { PopoverStyleConfig } from "./default";
export type { PopoverStyleConfig };

export const gradientStyle: PopoverStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 px-4 text-sm font-medium text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-150 hover:border-zinc-600 hover:bg-zinc-700 active:scale-[0.97] focus-visible:outline-none",
  popup: "z-50 w-72 rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-[0_16px_48px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)]",
  title: "text-sm font-semibold tracking-tight text-zinc-100",
  description: "text-xs leading-relaxed text-zinc-400",
  close: "flex size-5 items-center justify-center rounded text-zinc-500 hover:text-zinc-300 transition-colors duration-150 focus-visible:outline-none",
};
