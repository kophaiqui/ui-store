"use client";
import { Dialog } from "@base-ui/react/dialog";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { DialogStyleConfig } from "./styles/default";

export type { DialogStyleConfig };

type Props = {
  styleConfig?: DialogStyleConfig;
  trigger?: string;
  title?: string;
  description?: string;
  showCloseButton?: boolean;
  closeOnOutsideClick?: boolean;
  footer?: React.ReactNode;
  className?: string;
};

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function UIDialog({
  styleConfig = defaultStyle,
  trigger = "Open Dialog",
  title = "Confirm action",
  description = "This will permanently delete the selected items. This action cannot be undone.",
  showCloseButton = false,
  closeOnOutsideClick = false,
  footer,
  className,
}: Props) {
  return (
    <Dialog.Root disablePointerDismissal={!closeOnOutsideClick}>
      <Dialog.Trigger className={cn(styleConfig.trigger, className)}>
        {trigger}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className={styleConfig.backdrop} />
        <Dialog.Popup className={styleConfig.popup}>
          <div className="mb-2 flex items-start justify-between gap-2">
            <Dialog.Title className={styleConfig.title}>
              {title}
            </Dialog.Title>
            {showCloseButton && (
              <Dialog.Close
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center rounded",
                  "text-muted-foreground/70 hover:text-foreground",
                  "transition-colors duration-150 focus-visible:outline-none",
                )}
                aria-label="Close"
              >
                <CloseIcon />
              </Dialog.Close>
            )}
          </div>
          <Dialog.Description className={styleConfig.description}>
            {description}
          </Dialog.Description>

          {footer !== undefined ? (
            footer
          ) : (
            <div className="flex items-center justify-end gap-2">
              <Dialog.Close className={styleConfig.cancelBtn}>Cancel</Dialog.Close>
              <Dialog.Close className={styleConfig.confirmBtn}>Confirm</Dialog.Close>
            </div>
          )}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export { UIDialog as default };
