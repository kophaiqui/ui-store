"use client";
import { Popover } from "@base-ui/react/popover";
import { cn } from "@/lib/utils";
import type { PopoverStyleConfig } from "./styles/default";

export type { PopoverStyleConfig };

type Props = {
  trigger?: string;
  title?: string;
  content?: React.ReactNode;
  className?: string;
  styleConfig: PopoverStyleConfig;
};

export function UIPopover({
  styleConfig,
  trigger = "Open Popover",
  title = "Popover",
  content = "This popover is anchored to its trigger. Add any content here.",
  className,
}: Props) {
  return (
    <Popover.Root>
      <Popover.Trigger className={cn(styleConfig.trigger, className)}>
        {trigger}
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner sideOffset={8}>
          <Popover.Popup className={styleConfig.popup}>
            <div className="mb-1 flex items-center justify-between">
              <Popover.Title className={styleConfig.title}>{title}</Popover.Title>
              <Popover.Close className={styleConfig.close} aria-label="Close">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Popover.Close>
            </div>
            <Popover.Description className={styleConfig.description}>{content}</Popover.Description>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
