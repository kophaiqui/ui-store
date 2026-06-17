"use client";
import { Dialog } from "@base-ui/react/dialog";
import { cn } from "@/lib/utils";

type Props = {
  trigger?: string;
  title?: string;
  description?: string;
  className?: string;
};

export function UIDialog({
  trigger = "Open Dialog",
  title = "Confirm action",
  description = "This will permanently delete the selected items. This action cannot be undone.",
  className,
}: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className={cn(
          "inline-flex h-9 items-center justify-center gap-2 rounded-md border border-border bg-card px-4",
          "text-sm font-medium text-foreground",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
          "transition-all duration-150 hover:border-input hover:bg-muted",
          "active:scale-[0.97]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        )}
      >
        {trigger}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" />
        <Dialog.Popup
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2",
            "rounded-xl border border-border bg-background p-6",
            "shadow-[0_24px_64px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.04)]",
          )}
        >
          <Dialog.Title className="mb-2 text-base font-semibold tracking-tight text-foreground">
            {title}
          </Dialog.Title>
          <Dialog.Description className="mb-6 text-sm leading-relaxed text-muted-foreground">
            {description}
          </Dialog.Description>

          <div className="flex items-center justify-end gap-2">
            <Dialog.Close
              className={cn(
                "inline-flex h-8 items-center rounded-md border border-border px-3",
                "text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
                "transition-all duration-150 focus-visible:outline-none",
              )}
            >
              Cancel
            </Dialog.Close>
            <Dialog.Close
              className={cn(
                "inline-flex h-8 items-center rounded-md bg-primary px-3",
                "text-sm font-medium text-primary-foreground hover:bg-primary/90",
                "transition-all duration-150 focus-visible:outline-none",
              )}
            >
              Confirm
            </Dialog.Close>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export { UIDialog as default };
