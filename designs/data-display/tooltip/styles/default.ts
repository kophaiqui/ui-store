export type TooltipStyleConfig = {
  trigger: string;
  popup: string;
};

export const defaultStyle: TooltipStyleConfig = {
  trigger: "inline-flex items-center gap-1 text-sm text-foreground/90 underline underline-offset-[3px] decoration-dashed decoration-muted-foreground/70 hover:text-foreground hover:decoration-muted-foreground transition-colors duration-150 cursor-default select-none focus-visible:outline-none",
  popup: "rounded-md border border-border/60 bg-card px-2.5 py-1.5 text-xs text-foreground leading-snug shadow-[0_4px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)]",
};
