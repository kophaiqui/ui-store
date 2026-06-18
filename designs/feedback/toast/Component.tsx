"use client";
import { useState, useEffect } from "react";
import { Toast } from "@base-ui/react/toast";
import { cn } from "@/lib/utils";

export type ToastVariant = "default" | "success" | "error" | "warning";

export interface ToastData {
  title?: string;
  description?: string;
  variant?: ToastVariant;
  showProgress?: boolean;
}

export const toastManager = Toast.createToastManager<ToastData>();

const variantStyles: Record<ToastVariant, { border: string; progressColor: string; iconEl: React.ReactNode }> = {
  default: { border: "border-border", progressColor: "bg-foreground/30", iconEl: null },
  success: {
    border: "border-emerald-500/30",
    progressColor: "bg-emerald-400",
    iconEl: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-emerald-400" aria-hidden>
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.25" />
        <path d="M5 8.5L7 10.5L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  error: {
    border: "border-red-500/30",
    progressColor: "bg-red-400",
    iconEl: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-red-400" aria-hidden>
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.25" />
        <path d="M5.5 5.5L10.5 10.5M10.5 5.5L5.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  warning: {
    border: "border-amber-500/30",
    progressColor: "bg-amber-400",
    iconEl: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-amber-400" aria-hidden>
        <path d="M8 2L14.5 13H1.5L8 2Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
        <line x1="8" y1="7" x2="8" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="8" cy="11.5" r="0.75" fill="currentColor" />
      </svg>
    ),
  },
};

function ToastItem({
  toast,
  providerTimeout,
  providerShowProgress,
}: {
  toast: Toast.Root.ToastObject<ToastData>;
  providerTimeout: number;
  providerShowProgress: boolean;
}) {
  const variant: ToastVariant = toast.data?.variant ?? "default";
  const showProgress = toast.data?.showProgress ?? providerShowProgress;
  const timeout = toast.timeout ?? providerTimeout;
  const [progressPct, setProgressPct] = useState(100);
  const v = variantStyles[variant];

  useEffect(() => {
    if (!showProgress || !timeout) return;
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, 100 - (elapsed / timeout) * 100);
      setProgressPct(remaining);
      if (remaining === 0) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [showProgress, timeout]);

  return (
    <Toast.Root
      toast={toast}
      className={cn(
        "relative overflow-hidden",
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
      {showProgress && timeout > 0 && (
        <div
          className={cn("absolute bottom-0 left-0 h-0.5 opacity-40 transition-none", v.progressColor)}
          style={{ width: `${progressPct}%` }}
        />
      )}
    </Toast.Root>
  );
}

function ToastRegion({ providerTimeout, providerShowProgress }: { providerTimeout: number; providerShowProgress: boolean }) {
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
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          providerTimeout={providerTimeout}
          providerShowProgress={providerShowProgress}
        />
      ))}
    </Toast.Viewport>
  );
}

function DemoToastTrigger({ showProgress, timeout }: { showProgress: boolean; timeout: number }) {
  const fire = () => {
    toastManager.add({ data: { title: "Saved", description: "Your changes were saved.", variant: "success", showProgress }, timeout });
  };

  return (
    <button
      type="button"
      onClick={fire}
      className={cn(
        "px-3 py-1.5 rounded-md border border-border bg-card text-xs font-medium text-foreground",
        "hover:bg-muted transition-colors duration-150",
      )}
    >
      Show toast
    </button>
  );
}

type Props = {
  timeout?: number;
  limit?: number;
  showProgress?: boolean;
  _demo?: boolean;
  children?: React.ReactNode;
};

export function UIToast({ timeout = 5000, limit = 3, showProgress = false, _demo = false, children }: Props) {
  if (_demo) {
    return <DemoToastTrigger showProgress={showProgress} timeout={timeout} />;
  }
  return (
    <Toast.Provider toastManager={toastManager} timeout={timeout} limit={limit}>
      {children}
      <ToastRegion providerTimeout={timeout} providerShowProgress={showProgress} />
    </Toast.Provider>
  );
}

export { UIToast as default };
