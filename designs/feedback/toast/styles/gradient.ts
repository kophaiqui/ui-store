import type { ToastStyleConfig } from "./default";
export type { ToastStyleConfig };

export const gradientStyle: ToastStyleConfig = {
  root: "relative overflow-hidden flex items-start gap-3 rounded-xl border px-4 py-3 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] data-[ending-style]:translate-x-[110%] data-[ending-style]:opacity-0 data-[starting-style]:translate-x-[110%] data-[starting-style]:opacity-0 transition-all duration-250 ease-out dark:bg-gradient-to-br dark:from-violet-950 dark:via-purple-900/90 dark:to-indigo-950 dark:shadow-[0_8px_28px_rgba(109,40,217,0.35),inset_0_1px_0_rgba(255,255,255,0.1)]",
  viewport: "fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 w-[340px] max-w-[calc(100vw-2rem)] focus:outline-none",
  closeBtn: "shrink-0 flex size-5 items-center justify-center rounded text-[#64748B] hover:text-[#0F172A] hover:bg-[#7C3AED]/8 transition-colors duration-100 focus:outline-none dark:text-violet-300/60 dark:hover:text-white dark:hover:bg-white/10",
  variants: {
    default: { border: "border-[#FCE7F3] dark:border-violet-700/50",   progressColor: "bg-[#7C3AED] dark:bg-violet-400",   titleColor: "text-[#0F172A] dark:text-white",        descColor: "text-[#64748B] dark:text-violet-200/70"  },
    success: { border: "border-emerald-200 dark:border-emerald-400/30",  progressColor: "bg-emerald-500 dark:bg-emerald-400",  titleColor: "text-[#0F172A] dark:text-white",        descColor: "text-[#64748B] dark:text-emerald-200/70" },
    error:   { border: "border-red-200 dark:border-red-400/30",          progressColor: "bg-red-500 dark:bg-red-400",          titleColor: "text-[#0F172A] dark:text-white",        descColor: "text-[#64748B] dark:text-red-200/70"     },
    warning: { border: "border-amber-200 dark:border-amber-400/30",      progressColor: "bg-amber-500 dark:bg-amber-400",      titleColor: "text-[#0F172A] dark:text-white",        descColor: "text-[#64748B] dark:text-amber-200/70"   },
  },
};
