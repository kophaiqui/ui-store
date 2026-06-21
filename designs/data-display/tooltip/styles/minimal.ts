export type { TooltipStyleConfig } from "./default";
import type { TooltipStyleConfig } from "./default";

export const minimalStyle: TooltipStyleConfig = {
  trigger: "inline-flex items-center gap-1 text-sm text-muted-foreground underline underline-offset-[3px] decoration-border hover:text-foreground transition-colors duration-150 cursor-default select-none focus-visible:outline-none",
  popup: "rounded-none border border-border bg-background px-2.5 py-1.5 text-xs text-foreground leading-snug shadow-none",
};
