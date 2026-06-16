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
          "inline-flex h-9 items-center justify-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 px-4",
          "text-sm font-medium text-zinc-100",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
          "transition-all duration-150 hover:border-zinc-600 hover:bg-zinc-800",
          "active:scale-[0.97]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
          className,
        )}
      >
        {trigger}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-40 bg-zinc-950/80 backdrop-blur-sm" />
        <Dialog.Popup
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2",
            "rounded-xl border border-zinc-800 bg-zinc-950 p-6",
            "shadow-[0_24px_64px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.04)]",
          )}
        >
          <Dialog.Title className="mb-2 text-base font-semibold tracking-tight text-zinc-100">
            {title}
          </Dialog.Title>
          <Dialog.Description className="mb-6 text-sm leading-relaxed text-zinc-400">
            {description}
          </Dialog.Description>

          <div className="flex items-center justify-end gap-2">
            <Dialog.Close
              className={cn(
                "inline-flex h-8 items-center rounded-md border border-zinc-700 px-3",
                "text-sm text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100",
                "transition-all duration-150 focus-visible:outline-none",
              )}
            >
              Cancel
            </Dialog.Close>
            <Dialog.Close
              className={cn(
                "inline-flex h-8 items-center rounded-md bg-zinc-100 px-3",
                "text-sm font-medium text-zinc-950 hover:bg-zinc-200",
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
