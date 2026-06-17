"use client";
import { Select } from "@base-ui/react/select";
import { cn } from "@/lib/utils";
import type { SelectStyleConfig } from "./styles/default";

export type { SelectStyleConfig };

type Option = { label: string; value: string };

type Props = {
  options?: Option[];
  placeholder?: string;
  className?: string;
  styleConfig: SelectStyleConfig;
};

export function UISelect({
  styleConfig,
  options = [
    { label: "Design System", value: "ds" },
    { label: "Component Library", value: "cl" },
    { label: "Style Guide", value: "sg" },
  ],
  placeholder = "Select an option",
  className,
}: Props) {
  return (
    <Select.Root>
      <Select.Trigger className={cn(styleConfig.trigger, className)}>
        <Select.Value placeholder={<span className={styleConfig.placeholder}>{placeholder}</span>} />
        <Select.Icon className={styleConfig.icon}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Select.Icon>
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
