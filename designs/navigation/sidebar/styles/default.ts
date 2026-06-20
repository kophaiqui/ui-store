export type SidebarStyleConfig = {
  nav: string;
  item: string;
  itemActive: string;
  itemDisabled: string;
  icon: string;
  label: string;
  badge: string;
  nested: string;
  nestedItem: string;
  collapseBtn: string;
  header: string;
  footer: string;
};

export const defaultStyle: SidebarStyleConfig = {
  nav: "flex flex-col h-full bg-card border-r border-border",
  item: "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors duration-100 hover:bg-accent hover:text-foreground cursor-pointer select-none",
  itemActive: "bg-accent text-foreground font-medium",
  itemDisabled: "opacity-40 cursor-not-allowed pointer-events-none",
  icon: "shrink-0 text-muted-foreground",
  label: "flex-1 truncate",
  badge: "ml-auto shrink-0 rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground",
  nested: "ml-4 mt-0.5 flex flex-col gap-0.5 border-l border-border pl-3",
  nestedItem: "flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-foreground/70 transition-colors hover:bg-accent hover:text-foreground cursor-pointer",
  collapseBtn: "mt-auto flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground cursor-pointer",
  header: "border-b border-border p-4",
  footer: "border-t border-border p-4",
};
