export type InputVariant = "outline" | "filled" | "ghost";
export type InputSize = "sm" | "md" | "lg";

export type InputStyleConfig = {
  base: string;
  sizes: Record<InputSize, string>;
  variants: Record<InputVariant, { base: string; error: string }>;
  icon: string;
  errorText: string;
};

export const defaultStyle: InputStyleConfig = {
  base: "flex w-full rounded-md text-foreground placeholder:text-muted-foreground transition-all duration-150 focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-40 read-only:cursor-default",
  sizes: {
    sm: "h-7 text-xs px-2.5",
    md: "h-9 text-sm px-3",
    lg: "h-11 text-base px-4",
  },
  variants: {
    outline: {
      base:  "border bg-card shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)] border-border hover:border-border focus:border-emerald-500/70 focus:ring-emerald-500/20",
      error: "border bg-card shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)] border-red-500/70 focus:border-red-500/70 focus:ring-red-500/20",
    },
    filled: {
      base:  "border-0 bg-muted hover:bg-accent/80 focus:bg-accent focus:ring-emerald-500/20",
      error: "border-0 bg-muted ring-2 ring-red-500/40",
    },
    ghost: {
      base:  "border-0 bg-transparent shadow-none hover:bg-muted/60 focus:bg-muted/60 focus:ring-emerald-500/20",
      error: "border-0 bg-transparent shadow-none ring-2 ring-red-500/40",
    },
  },
  icon: "pointer-events-none flex items-center text-muted-foreground",
  errorText: "text-xs text-red-400",
};
