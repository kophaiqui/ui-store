export type { AlertDialogStyleConfig } from "./default";
import type { AlertDialogStyleConfig } from "./default";

export const minimalStyle: AlertDialogStyleConfig = {
  backdrop: "fixed inset-0 bg-black/30 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-200",
  popup: "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full rounded-none border border-border bg-background shadow-none p-6 focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:scale-98 data-[ending-style]:opacity-0 data-[ending-style]:scale-98 transition-[opacity,transform] duration-150",
  sizes: { sm: "max-w-sm", md: "max-w-md", lg: "max-w-lg" },
  title: "text-base font-semibold text-foreground tracking-tight",
  description: "mt-2 mb-5 text-sm text-muted-foreground leading-relaxed",
  footer: "flex items-center justify-end gap-2",
  cancelBtn: "rounded-none border-0 border-b border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground focus-visible:outline-none",
  confirmBtn: "rounded-none border border-foreground px-4 py-2 text-sm font-medium text-foreground transition-colors duration-150 hover:bg-foreground hover:text-background focus-visible:outline-none disabled:opacity-60 disabled:cursor-not-allowed",
  confirmBtnDestructive: "rounded-none border border-red-500/50 px-4 py-2 text-sm font-medium text-red-500 transition-colors duration-150 hover:bg-red-500 hover:text-white focus-visible:outline-none disabled:opacity-60 disabled:cursor-not-allowed",
  trigger: "rounded-none border border-border px-4 py-2 text-sm font-medium text-foreground/80 transition-colors duration-150 hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/20",
};
