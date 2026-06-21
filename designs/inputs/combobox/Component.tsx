"use client";
import React from "react";
import { Combobox } from "@base-ui/react/combobox";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { ComboboxStyleConfig } from "./styles/default";

export type { ComboboxStyleConfig };

type Option = { label: string; value: string; disabled?: boolean };

type Props = {
  styleConfig?: ComboboxStyleConfig;
  value?: string | string[];
  defaultValue?: string | string[];
  options?: Option[];
  placeholder?: string;
  disabled?: boolean;
  loading?: boolean;
  multiple?: boolean;
  clearable?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  emptyMessage?: string;
  label?: string;
  description?: string;
  error?: string;
  onChange?: (value: string | string[] | null) => void;
  onOpenChange?: (open: boolean) => void;
  onSearch?: (query: string) => void;
  className?: string;
};

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" aria-hidden>
      <path d="M1 3.5L3.5 6L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon({ size = 10 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden className="animate-spin shrink-0 text-muted-foreground">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
      <path d="M8 2a6 6 0 0 1 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const DEFAULT_OPTIONS: Option[] = [
  { label: "Design System", value: "ds" },
  { label: "Component Library", value: "cl" },
  { label: "Style Guide", value: "sg" },
  { label: "Accessibility", value: "a11y" },
];

export function UICombobox({
  styleConfig = defaultStyle,
  value,
  defaultValue,
  options = DEFAULT_OPTIONS,
  placeholder = "Search…",
  disabled = false,
  loading = false,
  multiple = false,
  clearable = false,
  open,
  defaultOpen,
  emptyMessage = "No results",
  label,
  description,
  error,
  onChange,
  onOpenChange,
  onSearch,
  className,
}: Props) {
  const isControlled = value !== undefined;
  const [internalSelected, setInternalSelected] = React.useState<string[]>(
    Array.isArray(defaultValue) ? defaultValue : [],
  );
  const selectedChips = isControlled
    ? (Array.isArray(value) ? value : [])
    : internalSelected;

  function handleChange(val: string | string[] | null) {
    if (multiple && !isControlled) {
      setInternalSelected(Array.isArray(val) ? val : []);
    }
    onChange?.(val);
  }

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {(label || description) && (
        <div className="flex flex-col gap-0.5">
          {label && <span className={styleConfig.label}>{label}</span>}
          {description && <span className={styleConfig.description}>{description}</span>}
        </div>
      )}
      <Combobox.Root
        items={options}
        itemToStringLabel={(item) => {
          if (item && typeof item === "object" && "label" in item) return (item as Option).label;
          if (typeof item === "string") return options.find((o) => o.value === item)?.label ?? item;
          return String(item ?? "");
        }}
        value={value as string & string[]}
        defaultValue={defaultValue as string & string[]}
        onValueChange={(val) => handleChange(val as string | string[] | null)}
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
        multiple={multiple}
        disabled={loading || disabled}
        aria-invalid={!!error}
      >
        <Combobox.Trigger render={<div />} nativeButton={false} className={cn(styleConfig.trigger, error && "border-red-500 focus-within:ring-red-500/40")}>
          <div className={styleConfig.inputGroup}>
            {multiple && (
              <Combobox.Chips className="contents">
                {selectedChips.map((val) => {
                  const opt = options.find((o) => o.value === val);
                  const chipLabel = opt?.label ?? val;
                  return (
                    <Combobox.Chip key={val} className={styleConfig.chip}>
                      {chipLabel}
                      <Combobox.ChipRemove className={styleConfig.chipRemove} aria-label={`Remove ${chipLabel}`}>
                        <XIcon size={8} />
                      </Combobox.ChipRemove>
                    </Combobox.Chip>
                  );
                })}
              </Combobox.Chips>
            )}
            <Combobox.Input
              placeholder={placeholder}
              className={styleConfig.input}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearch?.(e.target.value)}
            />
          </div>
          <div className="flex shrink-0 items-center gap-1 pl-1">
            {loading && <Spinner />}
            {!loading && clearable && (
              <Combobox.Clear className={styleConfig.clear} aria-label="Clear selection">
                <XIcon size={10} />
              </Combobox.Clear>
            )}
            {!loading && (
              <Combobox.Icon className={styleConfig.icon}>
                <ChevronIcon />
              </Combobox.Icon>
            )}
          </div>
        </Combobox.Trigger>

        <Combobox.Portal>
          <Combobox.Positioner sideOffset={4}>
            <Combobox.Popup className={styleConfig.popup}>
              <Combobox.List className="max-h-60 overflow-y-auto">
                <Combobox.Empty>
                  <div className={styleConfig.empty}>{emptyMessage}</div>
                </Combobox.Empty>
                {options.map((opt) => (
                  <Combobox.Item
                    key={opt.value}
                    value={opt.value}
                    disabled={opt.disabled}
                    className={styleConfig.item}
                  >
                    {opt.label}
                    <Combobox.ItemIndicator className={styleConfig.itemIndicator}>
                      <CheckIcon />
                    </Combobox.ItemIndicator>
                  </Combobox.Item>
                ))}
              </Combobox.List>
            </Combobox.Popup>
          </Combobox.Positioner>
        </Combobox.Portal>
      </Combobox.Root>
      {error && <p className={styleConfig.error} role="alert">{error}</p>}
    </div>
  );
}

export { UICombobox as default };
