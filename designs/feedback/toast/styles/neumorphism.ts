import type { ToastStyleConfig } from "./default";
export type { ToastStyleConfig };

export const neumorphismStyle: ToastStyleConfig = {
  root: "relative overflow-hidden flex items-start gap-3 rounded-2xl px-4 py-3 bg-[#e8ecf1] dark:bg-[#1E293B] shadow-[6px_6px_12px_rgba(163,177,198,0.5),-6px_-6px_12px_rgba(255,255,255,0.7)] dark:shadow-[6px_6px_12px_rgba(0,0,0,0.5),-6px_-6px_12px_rgba(255,255,255,0.03)] data-[ending-style]:translate-x-[110%] data-[ending-style]:opacity-0 data-[starting-style]:translate-x-[110%] data-[starting-style]:opacity-0 transition-all duration-250 ease-out",
  viewport: "fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 w-[340px] max-w-[calc(100vw-2rem)] focus:outline-none",
  closeBtn: "shrink-0 flex size-5 items-center justify-center rounded-full bg-[#e8ecf1] dark:bg-[#1E293B] text-slate-400 dark:text-slate-500 shadow-[2px_2px_4px_rgba(163,177,198,0.4),-2px_-2px_4px_rgba(255,255,255,0.6)] dark:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.02)] hover:text-slate-700 dark:hover:text-[#E2E8F0] transition-all duration-100 focus:outline-none",
  variants: {
    default: { border: "",  progressColor: "bg-slate-400 dark:bg-slate-500",    titleColor: "text-slate-700 dark:text-[#E2E8F0]",  descColor: "text-slate-500 dark:text-[#94A3B8]"  },
    success: { border: "",  progressColor: "bg-emerald-500",                    titleColor: "text-slate-700 dark:text-[#E2E8F0]",  descColor: "text-slate-500 dark:text-[#94A3B8]"  },
    error:   { border: "",  progressColor: "bg-red-400",                        titleColor: "text-slate-700 dark:text-[#E2E8F0]",  descColor: "text-slate-500 dark:text-[#94A3B8]"  },
    warning: { border: "",  progressColor: "bg-amber-400",                      titleColor: "text-slate-700 dark:text-[#E2E8F0]",  descColor: "text-slate-500 dark:text-[#94A3B8]"  },
    info:    { border: "",  progressColor: "bg-blue-400",                       titleColor: "text-slate-700 dark:text-[#E2E8F0]",  descColor: "text-slate-500 dark:text-[#94A3B8]"  },
  },
};
