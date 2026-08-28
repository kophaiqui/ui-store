export type { DialogStyleConfig } from "./default";
import type { DialogStyleConfig } from "./default";

export const auroraStyle: DialogStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-md border border-indigo-400/20 bg-indigo-950/50 px-4 text-sm font-medium text-indigo-200 transition-all duration-150 hover:bg-indigo-900/50 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/40",
  backdrop: "fixed inset-0 z-40 bg-[#05060f]/70 backdrop-blur-sm",
  popup: "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-indigo-400/20 bg-[#0b1022]/95 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(99,102,241,0.15),0_24px_64px_rgba(0,0,0,0.6)]",
  title: "mb-2 text-base font-semibold tracking-tight text-teal-50",
  description: "mb-6 text-sm leading-relaxed text-indigo-300/60",
  cancelBtn: "inline-flex h-8 items-center rounded-md border border-indigo-400/20 px-3 text-sm text-indigo-300 hover:bg-indigo-900/50 hover:text-teal-200 transition-all duration-150 focus-visible:outline-none",
  confirmBtn: "inline-flex h-8 items-center rounded-md bg-gradient-to-r from-teal-500 to-violet-500 px-3 text-sm font-medium text-white shadow-[0_0_12px_rgba(45,212,191,0.3)] hover:shadow-[0_0_20px_rgba(45,212,191,0.45)] transition-all duration-150 focus-visible:outline-none",
};
