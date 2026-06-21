export type { DialogStyleConfig } from "./default";
import type { DialogStyleConfig } from "./default";

export const minimalStyle: DialogStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-none border border-border bg-transparent px-4 text-sm font-medium text-foreground/80 transition-all duration-150 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/20",
  backdrop: "fixed inset-0 z-40 bg-black/20",
  popup: "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-none border border-border bg-background p-6 shadow-none",
  title: "mb-2 text-base font-semibold tracking-tight text-foreground",
  description: "mb-6 text-sm leading-relaxed text-muted-foreground",
  cancelBtn: "inline-flex h-8 items-center rounded-none border-0 border-b border-border px-3 text-sm text-muted-foreground hover:text-foreground transition-all duration-150 focus-visible:outline-none",
  confirmBtn: "inline-flex h-8 items-center rounded-none border border-foreground px-3 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-150 focus-visible:outline-none",
};
