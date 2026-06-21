import type { AlertDialogStyleConfig } from "./default";
export type { AlertDialogStyleConfig };

export const gradientStyle: AlertDialogStyleConfig = {
  backdrop: "fixed inset-0 bg-black/70 backdrop-blur-sm data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-200",
  popup: "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full rounded-2xl border border-zinc-800 bg-zinc-900 shadow-[0_24px_64px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)] p-6 focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-[opacity,transform] duration-200",
  sizes: {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  },
  title: "text-base font-semibold text-zinc-100",
  description: "mt-2 mb-5 text-sm text-zinc-400 leading-relaxed",
  footer: "flex items-center justify-end gap-2",
  cancelBtn: "rounded-xl border border-zinc-700 bg-transparent px-4 py-2 text-sm font-medium text-zinc-300 transition-colors duration-150 hover:bg-zinc-800 hover:text-zinc-100 active:scale-[0.97] focus-visible:outline-none",
  confirmBtn: "rounded-xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-4 py-2 text-sm font-medium text-white shadow-[0_4px_15px_rgba(217,70,239,0.25)] transition-all duration-150 hover:from-fuchsia-500 hover:to-pink-400 active:scale-[0.97] focus-visible:outline-none disabled:opacity-60",
  confirmBtnDestructive: "rounded-xl bg-gradient-to-r from-red-600 to-rose-500 px-4 py-2 text-sm font-medium text-white shadow-[0_4px_15px_rgba(239,68,68,0.25)] transition-all duration-150 hover:from-red-500 hover:to-rose-400 active:scale-[0.97] focus-visible:outline-none disabled:opacity-60",
  trigger: "rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors duration-150 hover:border-zinc-600 hover:bg-zinc-700 active:scale-[0.97] focus-visible:outline-none",
};
