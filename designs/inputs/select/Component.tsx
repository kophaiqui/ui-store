"use client";
import { useState } from "react";
import { Select } from "@base-ui/react/select";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { SelectStyleConfig } from "./styles/default";

export type { SelectStyleConfig };

type Option = { label: string; value: string };

type Props = {
  styleConfig?: SelectStyleConfig;
  options?: Option[];
  placeholder?: string;
  clearable?: boolean;
  loading?: boolean;
  className?: string;
};

function Spinner() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden className="animate-spin shrink-0 text-muted-foreground">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
      <path d="M8 2a6 6 0 0 1 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ClearIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UISelect({
  styleConfig = defaultStyle,
  options = [
    { label: "Design System", value: "ds" },
    { label: "Component Library", value: "cl" },
    { label: "Style Guide", value: "sg" },
  ],
  placeholder = "Select an option",
  clearable = false,
  loading = false,
  className,
}: Props) {
  const [value, setValue] = useState<string | null>(null);

  const labelOf = (v: string) => options.find((opt) => opt.value === v)?.label ?? v;

  const hasValue = value != null && value !== "";
  const showClear = clearable && hasValue && !loading;

  const handleClear = (e: React.PointerEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setValue(null);
  };

  return (
    <Select.Root
      items={options}
      value={value}
      onValueChange={setValue}
    >
      <Select.Trigger className={cn(styleConfig.trigger, className)}>
        <span className="min-w-0 flex-1 truncate text-left">
          <Select.Value placeholder={<span className={styleConfig.placeholder}>{placeholder}</span>}>
            {(v: string | null) =>
              v == null || v === ""
                ? <span className={styleConfig.placeholder}>{placeholder}</span>
                : labelOf(v)
            }
          </Select.Value>
        </span>
        <div className="flex shrink-0 items-center gap-1">
          {loading && <Spinner />}
          {!loading && showClear && (
            <span
              role="button"
              tabIndex={0}
              aria-label="Clear selection"
              onPointerDown={handleClear}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleClear(e)}
              className="flex items-center justify-center hover:text-foreground transition-colors duration-100 cursor-pointer"
            >
              <ClearIcon />
            </span>
          )}
          {!loading && (
            <Select.Icon className={styleConfig.icon}>
              <ChevronIcon />
            </Select.Icon>
          )}
        </div>
      </Select.Trigger>

      <Select.Portal>
        <Select.Positioner sideOffset={4}>
          <Select.Popup className={styleConfig.popup}>
            {options.map((opt) => (
              <Select.Item key={opt.value} value={opt.value} className={styleConfig.item}>
                <Select.ItemText>{opt.label}</Select.ItemText>
                <Select.ItemIndicator className="ml-auto pl-2">
                  <svg width="10" height="7" viewBox="0 0 10 7" fill="none" aria-hidden>
                    <path d="M1 3.5L3.5 6L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}

export { UISelect as default };
