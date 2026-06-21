export type { InputStyleConfig, InputVariant, InputSize } from "./default";
import type { InputStyleConfig } from "./default";

export const minimalStyle: InputStyleConfig = {
  base: "flex w-full text-foreground placeholder:text-muted-foreground transition-all duration-150 focus:outline-none disabled:pointer-events-none disabled:opacity-40 read-only:cursor-default",
  sizes: {
    sm: "h-7 text-xs px-0",
    md: "h-9 text-sm px-0",
    lg: "h-11 text-base px-0",
  },
  variants: {
    outline: {
      base:  "rounded-none border-0 border-b border-border bg-transparent hover:border-foreground/40 focus:border-foreground focus:ring-0",
      error: "rounded-none border-0 border-b border-red-500 bg-transparent focus:ring-0",
    },
    filled: {
      base:  "rounded-none border-0 border-b border-border bg-transparent hover:border-foreground/40 focus:border-foreground focus:ring-0",
      error: "rounded-none border-0 border-b border-red-500 bg-transparent focus:ring-0",
    },
    ghost: {
      base:  "rounded-none border-0 bg-transparent shadow-none focus:ring-0",
      error: "rounded-none border-0 border-b border-red-500 bg-transparent focus:ring-0",
    },
  },
  icon: "pointer-events-none flex items-center text-muted-foreground",
  errorText: "text-xs text-red-500",
};
