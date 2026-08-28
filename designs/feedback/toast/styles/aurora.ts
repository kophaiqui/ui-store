export type { ToastStyleConfig, ToastVariant } from "./default";
import type { ToastStyleConfig } from "./default";

export const auroraStyle: ToastStyleConfig = {
  root: "relative overflow-hidden flex items-start gap-3 rounded-xl border px-4 py-3 bg-[#0b1022]/95 backdrop-blur-xl shadow-[0_0_28px_rgba(99,102,241,0.15),0_8px_32px_rgba(0,0,0,0.5)] data-[ending-style]:translate-x-[110%] data-[ending-style]:opacity-0 data-[starting-style]:translate-x-[110%] data-[starting-style]:opacity-0 transition-all duration-250 ease-out",
  viewport: "fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 w-[340px] max-w-[calc(100vw-2rem)] focus:outline-none",
  closeBtn: "shrink-0 flex size-5 items-center justify-center rounded text-indigo-300/50 hover:text-teal-200 transition-colors duration-100 focus:outline-none",
  variants: {
    default: { border: "border-indigo-400/20",  progressColor: "bg-indigo-400",  titleColor: "text-teal-50",  descColor: "text-indigo-300/60" },
    success: { border: "border-teal-400/30",    progressColor: "bg-teal-400",    titleColor: "text-teal-50",  descColor: "text-indigo-300/60" },
    error:   { border: "border-rose-400/30",    progressColor: "bg-rose-400",    titleColor: "text-teal-50",  descColor: "text-indigo-300/60" },
    warning: { border: "border-amber-400/30",   progressColor: "bg-amber-400",   titleColor: "text-teal-50",  descColor: "text-indigo-300/60" },
    info:    { border: "border-indigo-400/30",  progressColor: "bg-indigo-400",  titleColor: "text-teal-50",  descColor: "text-indigo-300/60" },
  },
};
