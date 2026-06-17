"use client";
import { Popover } from "@base-ui/react/popover";
import { cn } from "@/lib/utils";

type Props = {
  trigger?: string;
  title?: string;
  content?: React.ReactNode;
  className?: string;
};

export function UIPopover({
  trigger = "Open Popover",
  title = "Popover",
  content = "This popover is anchored to its trigger. Add any content here.",
  className,
}: Props) {
  return (
    <Popover.Root>
      <Popover.Trigger
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
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner sideOffset={8}>
          <Popover.Popup
            className={cn(
              "z-50 w-72 rounded-xl border border-border bg-background p-4",
              "shadow-[0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)]",
            )}
          >
            <div className="mb-1 flex items-center justify-between">
              <Popover.Title className="text-sm font-semibold tracking-tight text-foreground">
                {title}
              </Popover.Title>
              <Popover.Close
                className="flex size-5 items-center justify-center rounded text-muted-foreground/70 hover:text-foreground/90 transition-colors duration-150 focus-visible:outline-none"
                aria-label="Close"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path
                    d="M1 1L9 9M9 1L1 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </Popover.Close>
            </div>
            <Popover.Description className="text-xs leading-relaxed text-muted-foreground">
              {content}
            </Popover.Description>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}

export { UIPopover as default };
