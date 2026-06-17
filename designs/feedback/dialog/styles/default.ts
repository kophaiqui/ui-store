export type DialogStyleConfig = {
  trigger: string;
  backdrop: string;
  popup: string;
  title: string;
  description: string;
  cancelBtn: string;
  confirmBtn: string;
};

export const defaultStyle: DialogStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-md border border-border bg-card px-4 text-sm font-medium text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-150 hover:border-input hover:bg-muted active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  backdrop: "fixed inset-0 z-40 bg-black/70 backdrop-blur-sm",
  popup: "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-background p-6 shadow-[0_24px_64px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.04)]",
  title: "mb-2 text-base font-semibold tracking-tight text-foreground",
  description: "mb-6 text-sm leading-relaxed text-muted-foreground",
  cancelBtn: "inline-flex h-8 items-center rounded-md border border-border px-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-150 focus-visible:outline-none",
  confirmBtn: "inline-flex h-8 items-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-150 focus-visible:outline-none",
};
