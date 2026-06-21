import type { DialogStyleConfig } from "./default";
export type { DialogStyleConfig };

export const gradientStyle: DialogStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 px-4 text-sm font-medium text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-150 hover:border-zinc-600 hover:bg-zinc-700 active:scale-[0.97] focus-visible:outline-none",
  backdrop: "fixed inset-0 z-40 bg-black/70 backdrop-blur-sm",
  popup: "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-[0_24px_64px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]",
  title: "mb-2 text-base font-semibold tracking-tight text-zinc-100",
  description: "mb-6 text-sm leading-relaxed text-zinc-400",
  cancelBtn: "inline-flex h-8 items-center rounded-lg border border-zinc-700 px-3 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-zinc-300 active:scale-[0.97] transition-all duration-150 focus-visible:outline-none",
  confirmBtn: "inline-flex h-8 items-center rounded-lg bg-gradient-to-r from-fuchsia-600 to-pink-500 px-3 text-sm font-medium text-white shadow-[0_4px_12px_rgba(217,70,239,0.2)] hover:from-fuchsia-500 hover:to-pink-400 active:scale-[0.97] transition-all duration-150 focus-visible:outline-none",
};
