"use client";
import { Menu } from "@base-ui/react/menu";
import { cn } from "@/lib/utils";

export type MenuItem = {
  label: string;
  icon?: React.ReactNode;
  shortcut?: string;
  disabled?: boolean;
  danger?: boolean;
  separator?: boolean;
};

type Props = {
  trigger?: React.ReactNode;
  triggerLabel?: string;
  items?: MenuItem[];
  align?: "start" | "center" | "end";
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
};

const DEFAULT_ITEMS: MenuItem[] = [
  { label: "New file" },
  { label: "Open…", shortcut: "⌘O" },
  { separator: true, label: "" },
  { label: "Save", shortcut: "⌘S" },
  { label: "Save as…", shortcut: "⌘⇧S" },
  { separator: true, label: "" },
  { label: "Settings", shortcut: "⌘," },
  { separator: true, label: "" },
  { label: "Delete", danger: true },
];

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UIDropdownMenu({
  trigger,
  triggerLabel = "Open menu",
  items = DEFAULT_ITEMS,
  align = "start",
  side = "bottom",
  className,
}: Props) {
  return (
    <Menu.Root>
      <Menu.Trigger
        className={cn(
          "inline-flex h-9 items-center justify-center gap-2 rounded-md border border-border bg-card px-4",
          "text-sm font-medium text-foreground",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
          "transition-all duration-150 hover:border-input hover:bg-muted",
          "active:scale-[0.97]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "data-[popup-open]:bg-muted",
          className,
        )}
      >
        {trigger ?? (
          <>
            {triggerLabel}
            <ChevronIcon />
          </>
        )}
      </Menu.Trigger>

      <Menu.Portal>
        <Menu.Positioner sideOffset={4} side={side} align={align}>
          <Menu.Popup
            className={cn(
              "z-50 min-w-[180px] overflow-hidden rounded-lg",
              "border border-border bg-background py-1",
              "shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)]",
              "data-[starting-style]:opacity-0 data-[starting-style]:scale-95",
              "data-[ending-style]:opacity-0 data-[ending-style]:scale-95",
              "transition-all duration-150 ease-out origin-[var(--transform-origin)]",
            )}
          >
            {items.map((item, i) => {
              if (item.separator) {
                return <div key={i} className="my-1 h-px bg-border/60 mx-2" />;
              }
              return (
                <Menu.Item
                  key={i}
                  disabled={item.disabled}
                  className={cn(
                    "flex h-8 cursor-default select-none items-center gap-2 px-3 text-sm",
                    "transition-colors duration-100",
                    "focus-visible:outline-none",
                    item.danger
                      ? "text-red-400 data-[highlighted]:bg-red-500/10 data-[highlighted]:text-red-300"
                      : "text-foreground/90 data-[highlighted]:bg-muted data-[highlighted]:text-foreground",
                    item.disabled && "opacity-40 pointer-events-none",
                  )}
                >
                  {item.icon && (
                    <span className="shrink-0 flex size-4 items-center justify-center text-muted-foreground">
                      {item.icon}
                    </span>
                  )}
                  <span className="flex-1">{item.label}</span>
                  {item.shortcut && (
                    <kbd className="ml-auto text-[10px] font-mono text-muted-foreground/60">
                      {item.shortcut}
                    </kbd>
                  )}
                </Menu.Item>
              );
            })}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

export { UIDropdownMenu as default };
