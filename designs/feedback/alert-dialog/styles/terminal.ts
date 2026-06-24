import type { AlertDialogStyleConfig } from "./default";
export type { AlertDialogStyleConfig } from "./default";

export const terminalStyle: AlertDialogStyleConfig = {
  backdrop: "fixed inset-0 bg-black/60 dark:bg-black/80 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-200",
  popup: "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full rounded-sm border border-[#16A34A] bg-white dark:border-[#22C55E] dark:bg-[#0F0F0F] dark:shadow-[0_0_24px_rgba(34,197,94,0.15)] p-6 focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-[opacity,transform] duration-200",
  sizes: { sm: "max-w-sm", md: "max-w-md", lg: "max-w-lg" },
  title: "font-mono text-base font-bold text-[#065F46] dark:text-[#22C55E] uppercase tracking-wide",
  description: "mt-2 mb-5 font-mono text-sm text-[#047857] dark:text-[#86EFAC] leading-relaxed",
  footer: "flex items-center justify-end gap-2",
  cancelBtn: "rounded-sm border border-[#16A34A]/40 bg-transparent px-4 py-2 font-mono text-sm font-bold text-[#065F46] dark:border-[#22C55E]/30 dark:text-[#22C55E] transition-all hover:bg-[#16A34A]/10 dark:hover:bg-[#22C55E]/10 focus-visible:outline-none",
  confirmBtn: "rounded-sm border border-[#16A34A] bg-[#16A34A] px-4 py-2 font-mono text-sm font-bold text-white dark:border-[#22C55E] dark:bg-[#22C55E] dark:text-black transition-all hover:bg-[#15803D] dark:hover:bg-[#16A34A] focus-visible:outline-none disabled:opacity-50",
  confirmBtnDestructive: "rounded-sm border border-red-600 bg-red-600 px-4 py-2 font-mono text-sm font-bold text-white dark:border-red-500 dark:bg-red-500 transition-all hover:bg-red-700 dark:hover:bg-red-600 focus-visible:outline-none disabled:opacity-50",
  trigger: "rounded-sm border border-[#16A34A] bg-transparent px-4 py-2 font-mono text-sm font-bold text-[#065F46] dark:border-[#22C55E] dark:text-[#22C55E] transition-all hover:bg-[#16A34A]/10 dark:hover:bg-[#22C55E]/10 focus-visible:outline-none",
};
