"use client";
import { useId } from "react";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { TextareaResize, TextareaStyleConfig } from "./styles/default";

export type { TextareaResize, TextareaStyleConfig };

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  styleConfig?: TextareaStyleConfig;
  label?: string;
  description?: string;
  error?: string;
  helperText?: string;
  resize?: TextareaResize;
  size?: "sm" | "md" | "lg";
  loading?: boolean;
};

function Spinner() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="animate-spin text-muted-foreground">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
      <path d="M8 2a6 6 0 0 1 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function UITextarea({
  styleConfig = defaultStyle,
  label = "Message",
  description,
  error,
  helperText,
  resize = "vertical",
  size = "md",
  loading = false,
  rows = 4,
  className,
  id: idProp,
  disabled,
  ...props
}: Props) {
  const generatedId = useId();
  const id = idProp ?? generatedId;

  return (
    <div className="flex flex-col gap-1.5">
      {(label || description) && (
        <div className="flex flex-col gap-0.5">
          {label && (
            <label htmlFor={id} className={styleConfig.label}>
              {label}
              {props.required && <span className="ml-1 text-red-400" aria-hidden>*</span>}
            </label>
          )}
          {description && <p className={styleConfig.description}>{description}</p>}
        </div>
      )}
      <div className="relative">
        <textarea
          id={id}
          rows={rows}
          disabled={loading || disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          className={cn(
            styleConfig.textarea,
            styleConfig.sizes[size],
            styleConfig.resizes[resize],
            error && styleConfig.errorState,
            className,
          )}
          {...props}
        />
        {loading && (
          <div className={styleConfig.loadingOverlay} aria-hidden>
            <Spinner />
          </div>
        )}
      </div>
      {error && (
        <p id={`${id}-error`} className={styleConfig.error} role="alert">
          {error}
        </p>
      )}
      {!error && helperText && (
        <p id={`${id}-helper`} className={styleConfig.helper}>
          {helperText}
        </p>
      )}
    </div>
  );
}

export { UITextarea as default };
