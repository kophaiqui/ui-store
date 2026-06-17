"use client";
import { Toast } from "@base-ui/react/toast";
import { cn } from "@/lib/utils";

export type ToastVariant = "default" | "success" | "error" | "warning";

export interface ToastData {
  title?: string;
  description?: string;
  variant?: ToastVariant;
}

// Singleton manager — import and call toastManager.add() from anywhere in your app.
export const toastManager = Toast.createToastManager<ToastData>();

const variantStyles: Record<ToastVariant, { border: string; iconEl: React.ReactNode }> = {
  default: { border: "border-border", iconEl: null },
  success: {
    border: "border-emerald-500/30",
    iconEl: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-emerald-400" aria-hidden>
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.25" />
        <path d="M5 8.5L7 10.5L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  error: {
    border: "border-red-500/30",
    iconEl: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-red-400" aria-hidden>
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.25" />
        <path d="M5.5 5.5L10.5 10.5M10.5 5.5L5.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  warning: {
    border: "border-amber-500/30",
    iconEl: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-amber-400" aria-hidden>
        <path d="M8 2L14.5 13H1.5L8 2Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
        <line x1="8" y1="7" x2="8" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="8" cy="11.5" r="0.75" fill="currentColor" />
      </svg>
    ),
  },
};

function ToastRegion() {
  const { toasts } = Toast.useToastManager<ToastData>();

  return (
    <Toast.Viewport
      className={cn(
        "fixed bottom-4 right-4 z-[9999]",
        "flex flex-col gap-2",
        "w-[340px] max-w-[calc(100vw-2rem)]",
        "focus:outline-none",
      )}
    >
      {toasts.map((toast) => {
        const variant: ToastVariant = toast.data?.variant ?? "default";
        const v = variantStyles[variant];
        return (
          <Toast.Root
            key={toast.id}
            toast={toast}
            className={cn(
              "flex items-start gap-3 rounded-xl border px-4 py-3",
              "bg-card",
              "shadow-[0_8px_32px_rgba(0,0,0,0.5)]",
              v.border,
              "data-[ending-style]:translate-x-[110%] data-[ending-style]:opacity-0",
              "data-[starting-style]:translate-x-[110%] data-[starting-style]:opacity-0",
              "transition-all duration-250 ease-out",
            )}
          >
            {v.iconEl}
            <div className="min-w-0 flex-1">
              {toast.data?.title && (
                <Toast.Title className="text-sm font-semibold text-foreground leading-snug">
                  {toast.data.title}
                </Toast.Title>
              )}
              {toast.data?.description && (
                <Toast.Description className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                  {toast.data.description}
                </Toast.Description>
              )}
            </div>
            <Toast.Close
              aria-label="Close"
              className="shrink-0 flex size-5 items-center justify-center rounded text-muted-foreground/50 hover:text-foreground/80 transition-colors duration-100 focus:outline-none"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Toast.Close>
          </Toast.Root>
        );
      })}
    </Toast.Viewport>
  );
}

type Props = {
  // Duration in ms before auto-dismiss. 0 = no auto-dismiss.
  timeout?: number;
  // Max simultaneous toasts
  limit?: number;
  children?: React.ReactNode;
};

export function UIToast({ timeout = 5000, limit = 3, children }: Props) {
  return (
    <Toast.Provider toastManager={toastManager} timeout={timeout} limit={limit}>
      {children}
      <ToastRegion />
    </Toast.Provider>
  );
}

export { UIToast as default };
