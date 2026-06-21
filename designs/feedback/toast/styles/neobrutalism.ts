import type { ToastStyleConfig } from "./default";
export type { ToastStyleConfig };

export const neobrutalismStyle: ToastStyleConfig = {
  root: "relative overflow-hidden flex items-start gap-3 rounded-none border-2 border-zinc-950 px-4 py-3 bg-white shadow-[4px_4px_0px_0px_#09090b] data-[ending-style]:translate-x-[110%] data-[ending-style]:opacity-0 data-[starting-style]:translate-x-[110%] data-[starting-style]:opacity-0 transition-all duration-250 ease-out",
  viewport: "fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 w-[340px] max-w-[calc(100vw-2rem)] focus:outline-none",
  closeBtn: "shrink-0 flex size-5 items-center justify-center rounded-none border border-zinc-950 text-zinc-700 hover:bg-yellow-300 transition-colors duration-100 focus:outline-none",
  variants: {
    default: { border: "border-zinc-950",  progressColor: "bg-zinc-950" },
    success: { border: "border-zinc-950",  progressColor: "bg-yellow-400" },
    error:   { border: "border-zinc-950",  progressColor: "bg-red-500"   },
    warning: { border: "border-zinc-950",  progressColor: "bg-orange-500" },
  },
};
