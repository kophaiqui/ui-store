export type { AlertDialogStyleConfig } from "./default";
import type { AlertDialogStyleConfig } from "./default";

export const auroraStyle: AlertDialogStyleConfig = {
  backdrop:
    "fixed inset-0 bg-[#05060f]/70 backdrop-blur-[3px] data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-200",
  popup:
    "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full rounded-xl border border-indigo-400/20 bg-[#0b1022]/95 backdrop-blur-xl shadow-[0_0_40px_rgba(99,102,241,0.15),0_24px_64px_rgba(0,0,0,0.6)] p-6 focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-[opacity,transform] duration-200",
  sizes: {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  },
  title: "text-base font-semibold text-teal-50",
  description: "mt-2 mb-5 text-sm text-indigo-300/60 leading-relaxed",
  footer: "flex items-center justify-end gap-2",
  cancelBtn:
    "rounded-lg border border-indigo-400/20 bg-indigo-950/50 px-4 py-2 text-sm font-medium text-indigo-200 transition-colors duration-150 hover:bg-indigo-900/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/40",
  confirmBtn:
    "rounded-lg bg-gradient-to-r from-teal-500 to-violet-500 px-4 py-2 text-sm font-medium text-white shadow-[0_0_16px_rgba(45,212,191,0.3)] transition-all duration-150 hover:shadow-[0_0_24px_rgba(45,212,191,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60 disabled:opacity-60 disabled:cursor-not-allowed",
  confirmBtnDestructive:
    "rounded-lg bg-rose-500/20 border border-rose-400/30 px-4 py-2 text-sm font-medium text-rose-200 shadow-[0_0_12px_rgba(244,63,94,0.2)] transition-colors duration-150 hover:bg-rose-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400/60 disabled:opacity-60 disabled:cursor-not-allowed",
  trigger:
    "rounded-lg border border-indigo-400/20 bg-indigo-950/50 px-4 py-2 text-sm font-medium text-indigo-200 transition-colors duration-150 hover:bg-indigo-900/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/40",
};
