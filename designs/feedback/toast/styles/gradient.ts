import type { ToastStyleConfig } from "./default";
export type { ToastStyleConfig };

export const gradientStyle: ToastStyleConfig = {
  root: "relative overflow-hidden flex items-start gap-3 rounded-xl border px-4 py-3 bg-gradient-to-br from-violet-950 via-purple-900/90 to-indigo-950 shadow-[0_8px_28px_rgba(109,40,217,0.35),inset_0_1px_0_rgba(255,255,255,0.1)] data-[ending-style]:translate-x-[110%] data-[ending-style]:opacity-0 data-[starting-style]:translate-x-[110%] data-[starting-style]:opacity-0 transition-all duration-250 ease-out",
  viewport: "fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 w-[340px] max-w-[calc(100vw-2rem)] focus:outline-none",
  closeBtn: "shrink-0 flex size-5 items-center justify-center rounded text-violet-300/60 hover:text-white hover:bg-white/10 transition-colors duration-100 focus:outline-none",
  variants: {
    default: { border: "border-violet-700/50",   progressColor: "bg-violet-400",   titleColor: "text-white",        descColor: "text-violet-200/70"  },
    success: { border: "border-emerald-400/30",  progressColor: "bg-emerald-400",  titleColor: "text-white",        descColor: "text-emerald-200/70" },
    error:   { border: "border-red-400/30",      progressColor: "bg-red-400",      titleColor: "text-white",        descColor: "text-red-200/70"     },
    warning: { border: "border-amber-400/30",    progressColor: "bg-amber-400",    titleColor: "text-white",        descColor: "text-amber-200/70"   },
  },
};
