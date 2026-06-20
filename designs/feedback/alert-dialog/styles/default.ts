export type AlertDialogStyleConfig = {
  backdrop: string;
  popup: string;
  sizes: Record<"sm" | "md" | "lg", string>;
  title: string;
  description: string;
  footer: string;
  cancelBtn: string;
  confirmBtn: string;
  confirmBtnDestructive: string;
  trigger: string;
};

export const defaultStyle: AlertDialogStyleConfig = {
  backdrop:
    "fixed inset-0 bg-black/50 backdrop-blur-[2px] data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-200",
  popup:
    "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full rounded-xl border border-border bg-card shadow-2xl shadow-black/30 p-6 focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-[opacity,transform] duration-200",
  sizes: {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  },
  title: "text-base font-semibold text-foreground",
  description: "mt-2 mb-5 text-sm text-muted-foreground leading-relaxed",
  footer: "flex items-center justify-end gap-2",
  cancelBtn:
    "rounded-lg border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground/90 transition-colors duration-150 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40",
  confirmBtn:
    "rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors duration-150 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 disabled:opacity-60 disabled:cursor-not-allowed",
  confirmBtnDestructive:
    "rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 disabled:opacity-60 disabled:cursor-not-allowed",
  trigger:
    "rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/90 transition-colors duration-150 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40",
};
