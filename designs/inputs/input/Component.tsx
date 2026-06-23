"use client";
import { useState, useId } from "react";
import { Input } from "@base-ui/react/input";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { InputStyleConfig, InputVariant, InputSize } from "./styles/default";

export type { InputStyleConfig, InputVariant, InputSize };

type Props = Omit<React.ComponentProps<typeof Input>, "size" | "prefix"> & {
  styleConfig?: InputStyleConfig;
  variant?: InputVariant;
  size?: InputSize;
  type?: "text" | "email" | "password" | "number" | "search";
  error?: boolean | string;
  label?: string;
  helperText?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  clearable?: boolean;
};

function ClearIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function UIInput({
  styleConfig = defaultStyle,
  variant = "outline",
  size = "md",
  type = "text",
  placeholder = "Enter text…",
  error,
  label,
  helperText,
  prefix,
  suffix,
  clearable = false,
  className,
  onValueChange,
  value: valueProp,
  defaultValue,
  id: idProp,
  ...props
}: Props) {
  const generatedId = useId();
  const inputId = idProp ?? (label ? generatedId : undefined);
  const hasError = Boolean(error);

  const [internalValue, setInternalValue] = useState(String(defaultValue ?? ""));
  const isControlled = valueProp !== undefined;
  const currentValue = isControlled ? String(valueProp) : internalValue;
  const showClear = clearable && currentValue.length > 0;

  const handleValueChange = (value: string) => {
    if (!isControlled) setInternalValue(value);
    onValueChange?.(value, {} as never);
  };

  const handleClear = () => {
    if (!isControlled) setInternalValue("");
    onValueChange?.("", {} as never);
  };

  const hasSuffix = suffix || showClear;
  const hasPrefix = Boolean(prefix);

  const variantStyle = hasError
    ? styleConfig.variants[variant].error
    : styleConfig.variants[variant].base;

  const inputClass = cn(
    styleConfig.base,
    styleConfig.sizes[size],
    variantStyle,
    hasPrefix && "pl-8",
    hasSuffix && "pr-8",
    className,
  );

  const inputEl = clearable ? (
    <Input
      id={inputId}
      type={type}
      placeholder={placeholder}
      value={currentValue}
      onValueChange={handleValueChange}
      className={inputClass}
      {...props}
    />
  ) : (
    <Input
      id={inputId}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      className={inputClass}
      {...props}
    />
  );

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="mb-1.5 block text-xs font-medium text-foreground/80">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {prefix && (
          <span className={cn("pointer-events-none absolute left-3 text-sm", styleConfig.icon)}>
            {prefix}
          </span>
        )}
        {inputEl}
        {(suffix || showClear) && (
          <span className={cn("absolute right-3", styleConfig.icon, showClear && "pointer-events-auto")}>
            {showClear ? (
              <button
                type="button"
                onClick={handleClear}
                className="flex items-center justify-center hover:text-foreground transition-colors duration-100 focus:outline-none"
                aria-label="Clear"
              >
                <ClearIcon />
              </button>
            ) : (
              suffix
            )}
          </span>
        )}
      </div>
      {typeof error === "string" && error && (
        <p className={cn("mt-1", styleConfig.errorText)}>{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-xs text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
}

export { UIInput as default };
