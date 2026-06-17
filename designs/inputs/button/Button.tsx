"use client";
import { Button } from "@base-ui/react/button";
import { cn } from "@/lib/utils";
import type { ButtonStyleConfig } from "./styles/default";

export type { ButtonStyleConfig };
export type ButtonVariant = "solid" | "outline" | "ghost" | "soft" | "link" | "destructive";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonShape = "default" | "pill" | "square";

type Props = Omit<React.ComponentProps<typeof Button>, "disabled"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  styleConfig: ButtonStyleConfig;
};

const spinnerSize: Record<ButtonSize, number> = { sm: 12, md: 14, lg: 16 };

function Spinner({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0 animate-spin">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
      <path d="M8 2a6 6 0 0 1 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function UIButton({
  styleConfig,
  children = "Button",
  variant = "solid",
  size = "md",
  shape = "default",
  loading = false,
  disabled = false,
  icon,
  iconPosition = "left",
  fullWidth = false,
  type = "button",
  className,
  ...props
}: Props) {
  const s = styleConfig.sizes[size];
  const v = styleConfig.variants[variant];
  const isDisabled = disabled || loading;
  const leadingIcon = !loading && icon && iconPosition === "left" ? icon : null;
  const trailingIcon = !loading && icon && iconPosition === "right" ? icon : null;

  return (
    <Button
      disabled={isDisabled}
      type={type}
      className={cn(
        styleConfig.base,
        !isDisabled && "active:scale-[0.97] active:-translate-y-px",
        loading && "cursor-wait",
        fullWidth && "w-full",
        shape === "pill" ? styleConfig.shapes.pill : styleConfig.shapes.default,
        variant !== "link" && (shape === "square" ? cn(s.square, s.text) : cn(s.base, s.text)),
        variant === "link" && s.text,
        v.base,
        !isDisabled && v.hover,
        v.focus,
        isDisabled && styleConfig.disabled,
        className,
      )}
      {...props}
    >
      {loading && <Spinner size={spinnerSize[size]} />}
      {leadingIcon}
      {children}
      {trailingIcon}
    </Button>
  );
}
