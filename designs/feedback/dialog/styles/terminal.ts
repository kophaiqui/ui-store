import type { DialogStyleConfig } from "./default";
export type { DialogStyleConfig } from "./default";

export const terminalStyle: DialogStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-sm border border-[#16A34A] bg-transparent px-4 font-mono text-sm font-bold text-[#065F46] dark:border-[#22C55E] dark:text-[#22C55E] transition-all duration-100 hover:bg-[#16A34A]/10 dark:hover:bg-[#22C55E]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]/40 dark:focus-visible:ring-[#22C55E]/40",
  backdrop: "fixed inset-0 z-40 bg-black/60 dark:bg-black/80",
  popup: "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-sm border border-[#16A34A] bg-white dark:border-[#22C55E] dark:bg-[#0F0F0F] dark:shadow-[0_0_24px_rgba(34,197,94,0.15)] p-6",
  title: "mb-2 font-mono text-base font-bold uppercase tracking-wide text-[#065F46] dark:text-[#22C55E]",
  description: "mb-6 font-mono text-sm leading-relaxed text-[#047857] dark:text-[#86EFAC]",
  cancelBtn: "inline-flex h-8 items-center rounded-sm border border-[#16A34A]/40 bg-transparent px-3 font-mono text-sm font-bold text-[#065F46] dark:border-[#22C55E]/30 dark:text-[#22C55E] transition-all hover:bg-[#16A34A]/10 dark:hover:bg-[#22C55E]/10 focus-visible:outline-none",
  confirmBtn: "inline-flex h-8 items-center rounded-sm border border-[#16A34A] bg-[#16A34A] px-3 font-mono text-sm font-bold text-white dark:border-[#22C55E] dark:bg-[#22C55E] dark:text-black transition-all hover:bg-[#15803D] dark:hover:bg-[#16A34A] focus-visible:outline-none",
};
