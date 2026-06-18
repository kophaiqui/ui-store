export type DropdownMenuStyleConfig = {
  trigger: string;
  popup: string;
  item: string;
  itemDanger: string;
  separator: string;
  shortcut: string;
};

export const defaultStyle: DropdownMenuStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-md border border-border bg-card px-4 text-sm font-medium text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-150 hover:border-input hover:bg-muted active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[popup-open]:bg-muted",
  popup: "z-50 min-w-[180px] overflow-hidden rounded-lg border border-border bg-background py-1 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)] data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-all duration-150 ease-out origin-[var(--transform-origin)]",
  item: "flex h-8 cursor-default select-none items-center gap-2 px-3 text-sm text-foreground/90 transition-colors duration-100 focus-visible:outline-none data-[highlighted]:bg-muted data-[highlighted]:text-foreground",
  itemDanger: "flex h-8 cursor-default select-none items-center gap-2 px-3 text-sm text-red-400 transition-colors duration-100 focus-visible:outline-none data-[highlighted]:bg-red-500/10 data-[highlighted]:text-red-300",
  separator: "my-1 h-px bg-border/60 mx-2",
  shortcut: "ml-auto text-[10px] font-mono text-muted-foreground/60",
};
