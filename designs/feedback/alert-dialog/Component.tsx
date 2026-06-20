"use client";
import { AlertDialog } from "@base-ui/react/alert-dialog";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { AlertDialogStyleConfig } from "./styles/default";

export type { AlertDialogStyleConfig };

type Props = {
  styleConfig?: AlertDialogStyleConfig;
  open?: boolean;
  defaultOpen?: boolean;
  trigger?: React.ReactNode;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  destructive?: boolean;
  loading?: boolean;
  size?: "sm" | "md" | "lg";
  onConfirm?: () => void;
  onCancel?: () => void;
  onOpenChange?: (open: boolean) => void;
  className?: string;
};

function Spinner() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden className="animate-spin">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
      <path d="M8 2a6 6 0 0 1 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function UIAlertDialog({
  styleConfig = defaultStyle,
  open,
  defaultOpen,
  trigger = "Open",
  title = "Are you sure?",
  description = "This action cannot be undone.",
  confirmText = "Confirm",
  cancelText = "Cancel",
  destructive = false,
  loading = false,
  size = "md",
  onConfirm,
  onCancel,
  onOpenChange,
  className,
}: Props) {
  return (
    <AlertDialog.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      <AlertDialog.Trigger className={styleConfig.trigger}>
        {trigger}
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop className={styleConfig.backdrop} />
        <AlertDialog.Popup className={cn(styleConfig.popup, styleConfig.sizes[size], className)}>
          <AlertDialog.Title className={styleConfig.title}>{title}</AlertDialog.Title>
          <AlertDialog.Description className={styleConfig.description}>{description}</AlertDialog.Description>
          <div className={styleConfig.footer}>
            <AlertDialog.Close
              className={styleConfig.cancelBtn}
              onClick={onCancel}
            >
              {cancelText}
            </AlertDialog.Close>
            <button
              type="button"
              disabled={loading}
              onClick={onConfirm}
              className={cn(
                destructive ? styleConfig.confirmBtnDestructive : styleConfig.confirmBtn,
                "flex items-center gap-2",
              )}
            >
              {loading && <Spinner />}
              {confirmText}
            </button>
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}

export { UIAlertDialog as default };
