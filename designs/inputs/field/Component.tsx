"use client";
import { Field } from "@base-ui/react/field";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { FieldStyleConfig } from "./styles/default";

export type { FieldStyleConfig };

type Props = {
  styleConfig?: FieldStyleConfig;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  loading?: boolean;
  id?: string;
  name?: string;
  children?: React.ReactNode;
  orientation?: "vertical" | "horizontal";
  className?: string;
};

function Spinner() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden className="animate-spin text-muted-foreground">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
      <path d="M8 2a6 6 0 0 1 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DefaultInput({ id, name, disabled }: { id?: string; name?: string; disabled?: boolean }) {
  return (
    <input
      id={id}
      name={name}
      disabled={disabled}
      placeholder="Enter value"
      className="w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 disabled:cursor-not-allowed disabled:opacity-40"
    />
  );
}

export function UIField({
  styleConfig = defaultStyle,
  label = "Label",
  description,
  error,
  required = false,
  disabled = false,
  loading = false,
  id,
  name,
  children,
  orientation = "vertical",
  className,
}: Props) {
  const isHorizontal = orientation === "horizontal";

  return (
    <Field.Root
      invalid={!!error}
      disabled={loading || disabled}
      name={name}
      className={cn(isHorizontal ? styleConfig.horizontal : styleConfig.root, className)}
    >
      {(label || description) && (
        <div className={cn("flex flex-col gap-0.5", isHorizontal && "min-w-[120px] pt-2.5")}>
          {label && (
            <Field.Label className={styleConfig.label}>
              {label}
              {required && <span className="ml-1 text-red-400" aria-hidden>*</span>}
              {loading && <span className="ml-2 inline-flex"><Spinner /></span>}
            </Field.Label>
          )}
          {description && (
            <Field.Description className={styleConfig.description}>
              {description}
            </Field.Description>
          )}
        </div>
      )}
      <div className={cn("flex flex-col gap-1", isHorizontal && "flex-1")}>
        <Field.Control className={styleConfig.control} render={<span />}>
          {children ?? <DefaultInput id={id} name={name} disabled={loading || disabled} />}
        </Field.Control>
        {error && (
          <Field.Error className={styleConfig.error} forceShow>
            {error}
          </Field.Error>
        )}
      </div>
    </Field.Root>
  );
}

export { UIField as default };
