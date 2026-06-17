export type SelectStyleConfig = {
  trigger: string;
  icon: string;
  placeholder: string;
  popup: string;
  item: string;
};

export const defaultStyle: SelectStyleConfig = {
  trigger: "flex h-9 w-full items-center justify-between gap-2 rounded-md border border-border bg-card px-3 text-sm text-foreground shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)] transition-all duration-150 hover:border-border focus:outline-none focus:border-emerald-500/70 focus:ring-2 focus:ring-emerald-500/20 disabled:pointer-events-none disabled:opacity-40",
  icon: "shrink-0 text-muted-foreground",
  placeholder: "text-muted-foreground",
  popup: "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-lg border border-border bg-background py-1 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)]",
  item: "flex h-8 cursor-default select-none items-center px-3 text-sm text-foreground/90 transition-colors duration-100 data-[highlighted]:bg-muted data-[highlighted]:text-foreground data-[selected]:text-emerald-400",
};
