import type { TextareaStyleConfig } from "./default";
export type { TextareaStyleConfig, TextareaResize } from "./default";

export const terminalStyle: TextareaStyleConfig = {
  textarea: "w-full rounded-sm border border-[#16A34A] bg-white font-mono text-[#065F46] placeholder:text-[#047857]/50 dark:border-[#22C55E] dark:bg-transparent dark:text-[#22C55E] dark:placeholder:text-[#86EFAC]/40 transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-[#16A34A]/30 dark:focus:ring-[#22C55E]/30 disabled:cursor-not-allowed disabled:opacity-40 read-only:bg-[#16A34A]/5 dark:read-only:bg-[#22C55E]/5",
  sizes: {
    sm: "px-3 py-2 text-xs",
    md: "px-3.5 py-2.5 text-sm",
    lg: "px-4 py-3 text-base",
  },
  resizes: {
    none: "resize-none",
    vertical: "resize-y",
    horizontal: "resize-x",
    both: "resize",
  },
  errorState: "border-red-600 dark:border-red-500 focus:ring-red-500/30",
  label: "font-mono text-sm font-bold text-[#065F46] dark:text-[#22C55E] leading-none uppercase tracking-wide",
  description: "font-mono text-xs text-[#047857] dark:text-[#86EFAC] leading-relaxed",
  error: "font-mono text-xs text-red-600 dark:text-red-500",
  helper: "font-mono text-xs text-[#047857] dark:text-[#86EFAC]",
  loadingOverlay: "absolute inset-0 flex items-center justify-center rounded-sm bg-white/70 dark:bg-black/70",
};
