"use client";

import { cn } from "@/lib/utils";

export function CopyToast({ message }: { message: string | null }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "pointer-events-none fixed bottom-6 right-6 z-50 rounded-xl px-4 py-2.5 text-sm font-medium shadow-lg",
        "bg-foreground text-background transition-all duration-200",
        message ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      )}
    >
      {message ?? ""}
    </div>
  );
}
