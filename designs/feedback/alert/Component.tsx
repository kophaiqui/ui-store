"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type AlertVariant = "info" | "success" | "warning" | "error";

type Props = {
  variant?: AlertVariant;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
  autoClose?: number;
  showProgress?: boolean;
  className?: string;
};

const variantMap: Record<AlertVariant, { bg: string; border: string; titleColor: string; descColor: string; iconColor: string; progressColor: string }> = {
  info: {
    bg: "bg-blue-500/8",
    border: "border-blue-500/20",
    titleColor: "text-blue-300",
    descColor: "text-blue-300/70",
    iconColor: "text-blue-400",
    progressColor: "bg-blue-400",
  },
  success: {
    bg: "bg-emerald-500/8",
    border: "border-emerald-500/20",
    titleColor: "text-emerald-300",
    descColor: "text-emerald-300/70",
    iconColor: "text-emerald-400",
    progressColor: "bg-emerald-400",
  },
  warning: {
    bg: "bg-amber-500/8",
    border: "border-amber-500/20",
    titleColor: "text-amber-300",
    descColor: "text-amber-300/70",
    iconColor: "text-amber-400",
    progressColor: "bg-amber-400",
  },
  error: {
    bg: "bg-red-500/8",
    border: "border-red-500/20",
    titleColor: "text-red-300",
    descColor: "text-red-300/70",
    iconColor: "text-red-400",
    progressColor: "bg-red-400",
  },
};

const defaultIcons: Record<AlertVariant, React.ReactNode> = {
  info: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.25" />
      <line x1="8" y1="7" x2="8" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="5" r="0.75" fill="currentColor" />
    </svg>
  ),
  success: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.25" />
      <path d="M5 8.5L7 10.5L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  warning: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M8 2L14.5 13H1.5L8 2Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      <line x1="8" y1="7" x2="8" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="11.5" r="0.75" fill="currentColor" />
    </svg>
  ),
  error: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.25" />
      <path d="M5.5 5.5L10.5 10.5M10.5 5.5L5.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

export function UIAlert({
  variant = "info",
  title,
  description = "Something happened that you should know about.",
  icon,
  closable = false,
  onClose,
  autoClose,
  showProgress = false,
  className,
}: Props) {
  const [dismissed, setDismissed] = useState(false);
  const [progressPct, setProgressPct] = useState(100);
  const v = variantMap[variant];

  useEffect(() => {
    if (!autoClose) return;
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, 100 - (elapsed / autoClose) * 100);
      setProgressPct(remaining);
      if (elapsed >= autoClose) {
        clearInterval(interval);
        setDismissed(true);
        onClose?.();
      }
    }, 50);
    return () => clearInterval(interval);
  }, [autoClose, onClose]);

  if (dismissed) return null;

  const handleClose = () => {
    setDismissed(true);
    onClose?.();
  };

  const displayIcon = icon ?? defaultIcons[variant];

  return (
    <div
      role="alert"
      className={cn(
        "relative overflow-hidden",
        "flex items-start gap-3 rounded-lg border px-4 py-3",
        v.bg,
        v.border,
        className,
      )}
    >
      <span className={cn("mt-0.5 shrink-0", v.iconColor)}>{displayIcon}</span>
      <div className="min-w-0 flex-1">
        {title && (
          <p className={cn("text-sm font-semibold leading-snug", v.titleColor)}>{title}</p>
        )}
        {description && (
          <p className={cn("text-xs leading-relaxed mt-0.5", v.descColor, !title && v.titleColor)}>
            {description}
          </p>
        )}
      </div>
      {closable && (
        <button
          type="button"
          onClick={handleClose}
          aria-label="Dismiss"
          className={cn(
            "shrink-0 flex items-center justify-center size-5 rounded",
            "opacity-60 hover:opacity-100 transition-opacity duration-100",
            v.iconColor,
            "focus:outline-none",
          )}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
            <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
      {showProgress && autoClose && (
        <div
          className={cn("absolute bottom-0 left-0 h-0.5 opacity-50 transition-none", v.progressColor)}
          style={{ width: `${progressPct}%` }}
        />
      )}
    </div>
  );
}

export { UIAlert as default };
