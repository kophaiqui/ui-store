export type PopoverStyleConfig = {
  trigger: string;
  popup: string;
  title: string;
  description: string;
  close: string;
};

export const defaultStyle: PopoverStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-md border border-border bg-card px-4 text-sm font-medium text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-150 hover:border-input hover:bg-muted active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  popup: "z-50 w-72 rounded-xl border border-border bg-background p-4 shadow-[0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)]",
  title: "text-sm font-semibold tracking-tight text-foreground",
  description: "text-xs leading-relaxed text-muted-foreground",
  close: "flex size-5 items-center justify-center rounded text-muted-foreground/70 hover:text-foreground/90 transition-colors duration-150 focus-visible:outline-none",
};
