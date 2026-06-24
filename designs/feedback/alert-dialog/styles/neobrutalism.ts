import type { AlertDialogStyleConfig } from "./default";
export type { AlertDialogStyleConfig };

export const neobrutalismStyle: AlertDialogStyleConfig = {
  backdrop: "fixed inset-0 bg-zinc-950/60 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-200",
  popup: "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full rounded-none border-2 border-zinc-950 dark:border-white bg-white dark:bg-[#111111] shadow-[8px_8px_0px_0px_#09090b] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.7)] p-6 focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-[opacity,transform] duration-200",
  sizes: {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  },
  title: "text-base font-black text-zinc-950 dark:text-white uppercase tracking-wide",
  description: "mt-2 mb-5 text-sm font-medium text-zinc-700 dark:text-[#D1D5DB] leading-relaxed",
  footer: "flex items-center justify-end gap-2",
  cancelBtn: "rounded-none border-2 border-zinc-950 dark:border-white bg-white dark:bg-[#111111] px-4 py-2 text-sm font-bold text-zinc-950 dark:text-white transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none shadow-[2px_2px_0px_0px_#09090b] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)] focus-visible:outline-none",
  confirmBtn: "rounded-none border-2 border-zinc-950 dark:border-white bg-yellow-300 px-4 py-2 text-sm font-bold text-zinc-950 transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none shadow-[2px_2px_0px_0px_#09090b] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)] focus-visible:outline-none disabled:opacity-60",
  confirmBtnDestructive: "rounded-none border-2 border-zinc-950 dark:border-white bg-red-400 px-4 py-2 text-sm font-bold text-white transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none shadow-[2px_2px_0px_0px_#09090b] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)] focus-visible:outline-none disabled:opacity-60",
  trigger: "rounded-none border-2 border-zinc-950 dark:border-white bg-white dark:bg-[#111111] px-4 py-2 text-sm font-bold text-zinc-950 dark:text-white transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none shadow-[3px_3px_0px_0px_#09090b] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)] focus-visible:outline-none",
};
