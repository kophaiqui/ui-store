import type { ToastStyleConfig } from "./default";
export type { ToastStyleConfig, ToastVariant } from "./default";

export const retroStyle: ToastStyleConfig = {
  root: "relative overflow-hidden flex items-start gap-3 rounded-sm border-2 border-[#3d2410] px-4 py-3 bg-[#fdf6e3] shadow-[4px_4px_0px_0px_#3d2410] data-[ending-style]:translate-x-[110%] data-[ending-style]:opacity-0 data-[starting-style]:translate-x-[110%] data-[starting-style]:opacity-0 transition-all duration-250 ease-out",
  viewport: "fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 w-[340px] max-w-[calc(100vw-2rem)] focus:outline-none",
  closeBtn: "shrink-0 flex size-5 items-center justify-center rounded-none border border-[#3d2410] text-[#7a5230] hover:text-[#2c1a0e] hover:bg-amber-100 transition-colors duration-100 focus:outline-none",
  variants: {
    default: { border: "border-[#3d2410]",  progressColor: "bg-[#7a5230]",  titleColor: "text-[#2c1a0e]",  descColor: "text-[#7a5230]"  },
    success: { border: "border-[#3d2410]",  progressColor: "bg-[#e8743b]",  titleColor: "text-[#2c1a0e]",  descColor: "text-[#7a5230]"  },
    error:   { border: "border-red-800",    progressColor: "bg-red-700",    titleColor: "text-red-900",    descColor: "text-red-800"    },
    warning: { border: "border-amber-800",  progressColor: "bg-amber-600",  titleColor: "text-amber-900",  descColor: "text-amber-800"  },
  },
};
