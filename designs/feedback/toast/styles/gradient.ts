import type { ToastStyleConfig } from "./default";
export type { ToastStyleConfig };

export const gradientStyle: ToastStyleConfig = {
  root: "relative overflow-hidden flex items-start gap-3 rounded-xl border px-4 py-3 bg-zinc-900 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] data-[ending-style]:translate-x-[110%] data-[ending-style]:opacity-0 data-[starting-style]:translate-x-[110%] data-[starting-style]:opacity-0 transition-all duration-250 ease-out",
  viewport: "fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 w-[340px] max-w-[calc(100vw-2rem)] focus:outline-none",
  closeBtn: "shrink-0 flex size-5 items-center justify-center rounded text-zinc-600 hover:text-zinc-300 transition-colors duration-100 focus:outline-none",
  variants: {
    default: { border: "border-zinc-800",         progressColor: "bg-zinc-600"   },
    success: { border: "border-emerald-500/30",   progressColor: "bg-emerald-400" },
    error:   { border: "border-red-500/30",       progressColor: "bg-red-400"    },
    warning: { border: "border-amber-500/30",     progressColor: "bg-amber-400"  },
  },
};
