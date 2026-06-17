"use client";
import { Dialog } from "@base-ui/react/dialog";
import { cn } from "@/lib/utils";
import type { DialogStyleConfig } from "./styles/default";

export type { DialogStyleConfig };

type Props = {
  trigger?: string;
  title?: string;
  description?: string;
  className?: string;
  styleConfig: DialogStyleConfig;
};

export function UIDialog({
  styleConfig,
  trigger = "Open Dialog",
  title = "Confirm action",
  description = "This will permanently delete the selected items. This action cannot be undone.",
  className,
}: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={cn(styleConfig.trigger, className)}>
        {trigger}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className={styleConfig.backdrop} />
        <Dialog.Popup className={styleConfig.popup}>
          <Dialog.Title className={styleConfig.title}>{title}</Dialog.Title>
          <Dialog.Description className={styleConfig.description}>{description}</Dialog.Description>

          <div className="flex items-center justify-end gap-2">
            <Dialog.Close className={styleConfig.cancelBtn}>Cancel</Dialog.Close>
            <Dialog.Close className={styleConfig.confirmBtn}>Confirm</Dialog.Close>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
