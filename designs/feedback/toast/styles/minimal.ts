export type { ToastStyleConfig, ToastVariant } from "./default";
import type { ToastStyleConfig } from "./default";

export const minimalStyle: ToastStyleConfig = {
  root: "relative overflow-hidden flex items-start gap-3 rounded-none border-l-2 px-4 py-3 bg-background shadow-none data-[ending-style]:translate-x-[110%] data-[ending-style]:opacity-0 data-[starting-style]:translate-x-[110%] data-[starting-style]:opacity-0 transition-all duration-250 ease-out",
  viewport: "fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 w-[340px] max-w-[calc(100vw-2rem)] focus:outline-none",
  closeBtn: "shrink-0 flex size-5 items-center justify-center rounded-none text-muted-foreground/50 hover:text-foreground/80 transition-colors duration-100 focus:outline-none",
  variants: {
    default: { border: "border-foreground",    progressColor: "bg-foreground",   titleColor: "text-foreground",       descColor: "text-muted-foreground"  },
    success: { border: "border-emerald-500",   progressColor: "bg-emerald-500",  titleColor: "text-foreground",       descColor: "text-muted-foreground"  },
    error:   { border: "border-red-500",       progressColor: "bg-red-500",      titleColor: "text-foreground",       descColor: "text-muted-foreground"  },
    warning: { border: "border-amber-500",     progressColor: "bg-amber-500",    titleColor: "text-foreground",       descColor: "text-muted-foreground"  },
    info:    { border: "border-blue-500",      progressColor: "bg-blue-500",     titleColor: "text-foreground",       descColor: "text-muted-foreground"  },
  },
};
