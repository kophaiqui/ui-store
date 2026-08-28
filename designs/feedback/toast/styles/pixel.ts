import type { ToastStyleConfig } from "./default";
export type { ToastStyleConfig, ToastVariant } from "./default";

export const pixelStyle: ToastStyleConfig = {
  root: "relative overflow-hidden flex items-start gap-3 rounded-none border-2 px-4 py-3 bg-[#0d0d12] shadow-[4px_4px_0_0_#000] data-[ending-style]:translate-x-[110%] data-[ending-style]:opacity-0 data-[starting-style]:translate-x-[110%] data-[starting-style]:opacity-0 transition-all duration-200 ease-out",
  viewport: "fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 w-[340px] max-w-[calc(100vw-2rem)] focus:outline-none",
  closeBtn: "shrink-0 flex size-5 items-center justify-center rounded-none border border-current opacity-60 hover:opacity-100 transition-colors duration-100 focus:outline-none",
  variants: {
    default: { border: "border-[#06d6a0]/50", progressColor: "bg-[#06d6a0]", titleColor: "font-mono text-[#06d6a0]", descColor: "font-mono text-[#06d6a0]/60" },
    success: { border: "border-[#06d6a0]",     progressColor: "bg-[#06d6a0]", titleColor: "font-mono text-[#06d6a0]", descColor: "font-mono text-[#06d6a0]/60" },
    error:   { border: "border-[#ef476f]",     progressColor: "bg-[#ef476f]", titleColor: "font-mono text-[#ef476f]", descColor: "font-mono text-[#ef476f]/60" },
    warning: { border: "border-[#ffd166]",     progressColor: "bg-[#ffd166]", titleColor: "font-mono text-[#ffd166]", descColor: "font-mono text-[#ffd166]/60" },
    info:    { border: "border-[#118ab2]",     progressColor: "bg-[#118ab2]", titleColor: "font-mono text-[#118ab2]", descColor: "font-mono text-[#118ab2]/60" },
  },
};
