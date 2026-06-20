"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { CommandStyleConfig } from "./styles/default";

export type { CommandStyleConfig };

type CommandItem = {
  key: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  shortcut?: string;
  disabled?: boolean;
  onSelect?: () => void;
};

type CommandGroup = {
  heading?: string;
  items: CommandItem[];
};

type Props = {
  styleConfig?: CommandStyleConfig;
  open?: boolean;
  defaultOpen?: boolean;
  placeholder?: string;
  commands?: CommandItem[];
  groups?: CommandGroup[];
  shortcut?: string;
  searchable?: boolean;
  emptyMessage?: string;
  size?: "sm" | "md" | "lg";
  onSelect?: (item: CommandItem) => void;
  onOpenChange?: (open: boolean) => void;
  className?: string;
};

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0 text-muted-foreground">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M11 11L14.5 14.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const DEFAULT_GROUPS: CommandGroup[] = [
  {
    heading: "Navigation",
    items: [
      { key: "home", label: "Go to Dashboard", shortcut: "G H" },
      { key: "settings", label: "Open Settings", shortcut: "G S" },
      { key: "docs", label: "View Documentation" },
    ],
  },
  {
    heading: "Actions",
    items: [
      { key: "new", label: "New Component", shortcut: "⌘N" },
      { key: "search", label: "Search…", shortcut: "⌘F" },
      { key: "theme", label: "Toggle Theme", shortcut: "⌘T" },
    ],
  },
];

export function UICommand({
  styleConfig = defaultStyle,
  open: openProp,
  defaultOpen = false,
  placeholder = "Type a command…",
  commands,
  groups = DEFAULT_GROUPS,
  shortcut = "⌘K",
  searchable = true,
  emptyMessage = "No commands found",
  size = "md",
  onSelect,
  onOpenChange,
  className,
}: Props) {
  const [open, setOpen] = useState(openProp ?? defaultOpen);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const isOpen = openProp !== undefined ? openProp : open;

  const handleOpenChange = useCallback((next: boolean) => {
    setOpen(next);
    onOpenChange?.(next);
    if (!next) { setQuery(""); setSelectedIndex(0); }
  }, [onOpenChange]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const metaOrCtrl = e.metaKey || e.ctrlKey;
      if (metaOrCtrl && e.key === "k") {
        e.preventDefault();
        handleOpenChange(!isOpen);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, handleOpenChange]);

  const allGroups: CommandGroup[] = commands
    ? [{ items: commands }, ...groups]
    : groups;

  const filteredGroups: CommandGroup[] = allGroups.map((g) => ({
    ...g,
    items: g.items.filter((item) => {
      if (!query.trim()) return true;
      const q = query.toLowerCase();
      return item.label.toLowerCase().includes(q) || item.description?.toLowerCase().includes(q);
    }),
  })).filter((g) => g.items.length > 0);

  const allItems = filteredGroups.flatMap((g) => g.items);

  const handleSelect = (item: CommandItem) => {
    if (item.disabled) return;
    item.onSelect?.();
    onSelect?.(item);
    handleOpenChange(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, allItems.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (allItems[selectedIndex]) handleSelect(allItems[selectedIndex]);
    }
  };

  return (
    <>
      <button type="button" onClick={() => handleOpenChange(true)} className={cn(styleConfig.trigger, className)}>
        <SearchIcon />
        <span>Search…</span>
        <kbd className="ml-2 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[0.6875rem] text-muted-foreground">{shortcut}</kbd>
      </button>

      <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
        <Dialog.Portal>
          <Dialog.Backdrop className={styleConfig.backdrop} />
          <Dialog.Popup
            className={cn(styleConfig.popup, styleConfig.sizes[size])}
            onKeyDown={handleKeyDown}
          >
            <Dialog.Title className="sr-only">Command menu</Dialog.Title>
            {searchable && (
              <div className={styleConfig.search}>
                <SearchIcon />
                <input
                  ref={inputRef}
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
                  placeholder={placeholder}
                  className={styleConfig.searchInput}
                  aria-label={placeholder}
                />
              </div>
            )}
            <div className={styleConfig.list} role="listbox" aria-label="Commands">
              {filteredGroups.length === 0 ? (
                <p className={styleConfig.empty}>{emptyMessage}</p>
              ) : (
                filteredGroups.map((group, gi) => {
                  let itemOffset = 0;
                  for (let k = 0; k < gi; k++) itemOffset += filteredGroups[k].items.length;
                  return (
                    <div key={gi}>
                      {group.heading && (
                        <p className={styleConfig.groupHeading}>{group.heading}</p>
                      )}
                      {group.items.map((item, ii) => {
                        const globalIndex = itemOffset + ii;
                        const isSelected = selectedIndex === globalIndex;
                        return (
                          <div
                            key={item.key}
                            role="option"
                            aria-selected={isSelected}
                            onClick={() => handleSelect(item)}
                            onMouseEnter={() => setSelectedIndex(globalIndex)}
                            className={cn(
                              styleConfig.item,
                              isSelected && styleConfig.itemSelected,
                              item.disabled && styleConfig.itemDisabled,
                            )}
                          >
                            {item.icon && <span className={styleConfig.itemIcon}>{item.icon}</span>}
                            <span className={styleConfig.itemLabel}>{item.label}</span>
                            {item.description && (
                              <span className={styleConfig.itemDescription}>{item.description}</span>
                            )}
                            {item.shortcut && (
                              <span className={styleConfig.itemShortcut}>{item.shortcut}</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })
              )}
            </div>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export { UICommand as default };
