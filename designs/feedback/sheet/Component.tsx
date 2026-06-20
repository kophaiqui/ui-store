"use client";
import { Dialog } from "@base-ui/react/dialog";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { SheetStyleConfig } from "./styles/default";

export type { SheetStyleConfig };

type Props = {
  styleConfig?: SheetStyleConfig;
  open?: boolean;
  defaultOpen?: boolean;
  side?: "left" | "right" | "top" | "bottom";
  size?: "sm" | "md" | "lg" | "full";
  title?: string;
  description?: string;
  closeButton?: boolean;
  loading?: boolean;
  trigger?: React.ReactNode;
  children?: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
};

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden className="animate-spin text-muted-foreground">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
      <path d="M12 3a9 9 0 0 1 9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function UISheet({
  styleConfig = defaultStyle,
  open,
  defaultOpen,
  side = "right",
  size = "md",
  title = "Sheet",
  description,
  closeButton = true,
  loading = false,
  trigger = "Open Sheet",
  children,
  onOpenChange,
  className,
}: Props) {
  const isHorizontal = side === "left" || side === "right";

  return (
    <Dialog.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      <Dialog.Trigger className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40">
        {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className={styleConfig.backdrop} />
        <Dialog.Popup
          className={cn(
            styleConfig.popup,
            styleConfig.sides[side],
            isHorizontal ? styleConfig.sizes[size] : "",
            !isHorizontal && size === "sm" && "max-h-64",
            !isHorizontal && size === "md" && "max-h-96",
            !isHorizontal && size === "lg" && "max-h-[32rem]",
            !isHorizontal && size === "full" && "h-screen",
            className,
          )}
        >
          {(title || closeButton) && (
            <div className={styleConfig.header}>
              <div>
                {title && <Dialog.Title className={styleConfig.title}>{title}</Dialog.Title>}
                {description && <Dialog.Description className={styleConfig.description}>{description}</Dialog.Description>}
              </div>
              {closeButton && (
                <Dialog.Close className={styleConfig.close} aria-label="Close">
                  <CloseIcon />
                </Dialog.Close>
              )}
            </div>
          )}
          {loading ? (
            <div className={styleConfig.loadingWrapper}>
              <Spinner />
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-5">
              {children ?? <p className="text-sm text-muted-foreground">Sheet content goes here.</p>}
            </div>
          )}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export { UISheet as default };
