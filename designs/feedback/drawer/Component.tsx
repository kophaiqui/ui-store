"use client";
import { Drawer } from "@base-ui/react/drawer";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { DrawerStyleConfig } from "./styles/default";

export type { DrawerStyleConfig };

type Props = {
  styleConfig?: DrawerStyleConfig;
  open?: boolean;
  defaultOpen?: boolean;
  position?: "left" | "right" | "bottom" | "top";
  size?: "sm" | "md" | "lg" | "full";
  title?: string;
  description?: string;
  dismissible?: boolean;
  overlay?: boolean;
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

export function UIDrawer({
  styleConfig = defaultStyle,
  open,
  defaultOpen,
  position = "right",
  size = "md",
  title = "Drawer",
  description,
  dismissible = true,
  overlay = true,
  loading = false,
  trigger = "Open Drawer",
  children,
  onOpenChange,
  className,
}: Props) {
  const isHorizontal = position === "left" || position === "right";

  return (
    <Drawer.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      dismissible={dismissible}
    >
      <Drawer.Trigger
        className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40"
        render={typeof trigger === "string" ? <button type="button">{trigger}</button> : undefined}
      >
        {typeof trigger !== "string" ? trigger : null}
      </Drawer.Trigger>
      <Drawer.Portal>
        {overlay && <Drawer.Backdrop className={styleConfig.backdrop} />}
        <Drawer.Viewport className="fixed inset-0 z-[60]">
          <Drawer.Popup
            className={cn(
              styleConfig.popup,
              styleConfig.positions[position],
              isHorizontal ? styleConfig.sizes[size] : "",
              !isHorizontal && size === "sm" && "max-h-64",
              !isHorizontal && size === "md" && "max-h-96",
              !isHorizontal && size === "lg" && "max-h-[32rem]",
              !isHorizontal && size === "full" && "h-screen",
              className,
            )}
          >
            <div className={styleConfig.header}>
              <div>
                {title && <Drawer.Title className={styleConfig.title}>{title}</Drawer.Title>}
                {description && <Drawer.Description className={styleConfig.description}>{description}</Drawer.Description>}
              </div>
              <Drawer.Close className={styleConfig.close} aria-label="Close">
                <CloseIcon />
              </Drawer.Close>
            </div>
            {loading ? (
              <div className={styleConfig.loadingWrapper}>
                <Spinner />
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto p-5">
                {children ?? <p className="text-sm text-muted-foreground">Drawer content goes here.</p>}
              </div>
            )}
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export { UIDrawer as default };
