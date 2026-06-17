"use client";
import { useState, useId } from "react";
import { Input } from "@base-ui/react/input";
import { cn } from "@/lib/utils";

type Props = Omit<React.ComponentProps<typeof Input>, "size" | "prefix"> & {
  variant?: "outline" | "filled" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "email" | "password" | "number" | "search";
  error?: boolean | string;
  label?: string;
  helperText?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  clearable?: boolean;
};

const sizeMap = {
  sm: "h-7 text-xs px-2.5",
  md: "h-9 text-sm px-3",
  lg: "h-11 text-base px-4",
};

function ClearIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function UIInput({
  variant = "outline",
  size = "md",
  type = "text",
  error,
  label,
  helperText,
  prefix,
  suffix,
  clearable = false,
  className,
  onChange,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternalValue(e.target.value);
    onChange?.(e);
  };

  const handleClear = () => {
    if (!isControlled) setInternalValue("");
    onChange?.({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
  };

  const baseClass = cn(
    "flex w-full rounded-md",
    sizeMap[size],
    "text-foreground placeholder:text-muted-foreground",
    "transition-all duration-150",
    "focus:outline-none focus:ring-2",
    "disabled:pointer-events-none disabled:opacity-40",
    "read-only:cursor-default",
    variant === "outline" && cn(
      "border bg-card shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)]",
      hasError
        ? "border-red-500/70 focus:border-red-500/70 focus:ring-red-500/20"
        : "border-border hover:border-border focus:border-emerald-500/70 focus:ring-emerald-500/20",
    ),
    variant === "filled" && cn(
      "border-0 bg-muted",
      hasError
        ? "ring-2 ring-red-500/40"
        : "hover:bg-accent/80 focus:bg-accent focus:ring-emerald-500/20",
    ),
    variant === "ghost" && cn(
      "border-0 bg-transparent shadow-none",
      hasError
        ? "ring-2 ring-red-500/40"
        : "hover:bg-muted/60 focus:bg-muted/60 focus:ring-emerald-500/20",
    ),
  );

  const hasSuffix = suffix || showClear;
  const hasPrefix = Boolean(prefix);

  const inputEl = clearable ? (
    <Input
      id={inputId}
      type={type}
      value={currentValue}
      onChange={handleChange}
      className={cn(
        baseClass,
        hasPrefix && "pl-8",
        hasSuffix && "pr-8",
        className,
      )}
      {...props}
    />
  ) : (
    <Input
      id={inputId}
      type={type}
      defaultValue={defaultValue}
      onChange={onChange}
      className={cn(
        baseClass,
        hasPrefix && "pl-8",
        hasSuffix && "pr-8",
        className,
      )}
      {...props}
    />
  );

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="mb-1.5 block text-xs font-medium text-foreground/80"
        >
          {label}
        </label>
      )}
      {hasPrefix || hasSuffix ? (
        <div className="relative flex items-center">
          {prefix && (
            <span className="pointer-events-none absolute left-3 flex items-center text-muted-foreground text-sm">
              {prefix}
            </span>
          )}
          {inputEl}
          {(suffix || showClear) && (
            <span className="absolute right-3 flex items-center text-muted-foreground">
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
      ) : (
        <div className="relative flex items-center">
          {inputEl}
          {showClear && (
            <span className="absolute right-3 flex items-center text-muted-foreground">
              <button
                type="button"
                onClick={handleClear}
                className="flex items-center justify-center hover:text-foreground transition-colors duration-100 focus:outline-none"
                aria-label="Clear"
              >
                <ClearIcon />
              </button>
            </span>
          )}
        </div>
      )}
      {typeof error === "string" && error && (
        <p className="mt-1 text-xs text-red-400">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-xs text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
}

export { UIInput as default };
