"use client";
import { Menu } from "@base-ui/react/menu";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { DropdownMenuStyleConfig } from "./styles/default";

export type { DropdownMenuStyleConfig };

export type MenuItem = {
  label: string;
  icon?: React.ReactNode;
  shortcut?: string;
  disabled?: boolean;
  danger?: boolean;
  separator?: boolean;
};

type Props = {
  styleConfig?: DropdownMenuStyleConfig;
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
  styleConfig = defaultStyle,
  trigger,
  triggerLabel = "Open menu",
  items = DEFAULT_ITEMS,
  align = "start",
  side = "bottom",
  className,
}: Props) {
  return (
    <Menu.Root>
      <Menu.Trigger className={cn(styleConfig.trigger, className)}>
        {trigger ?? (
          <>
            {triggerLabel}
            <ChevronIcon />
          </>
        )}
      </Menu.Trigger>

      <Menu.Portal>
        <Menu.Positioner sideOffset={4} side={side} align={align}>
          <Menu.Popup className={styleConfig.popup}>
            {items.map((item, i) => {
              if (item.separator) {
                return <div key={i} className={styleConfig.separator} />;
              }
              return (
                <Menu.Item
                  key={i}
                  disabled={item.disabled}
                  className={cn(
                    item.danger ? styleConfig.itemDanger : styleConfig.item,
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
                    <kbd className={styleConfig.shortcut}>{item.shortcut}</kbd>
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
