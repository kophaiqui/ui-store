"use client";
import { Input } from "@base-ui/react/input";
import { cn } from "@/lib/utils";
import type { InputStyleConfig } from "./styles/default";

export type { InputStyleConfig };
export type InputVariant = "outline" | "filled" | "ghost";
export type InputSize = "sm" | "md" | "lg";

type Props = Omit<React.ComponentProps<typeof Input>, "size"> & {
  variant?: InputVariant;
  size?: InputSize;
  error?: boolean | string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  styleConfig: InputStyleConfig;
};

export function UIInput({ styleConfig, variant = "outline", size = "md", error, prefixIcon, suffixIcon, className, ...props }: Props) {
  const hasError = Boolean(error);
  const v = styleConfig.variants[variant];

  const base = cn(
    styleConfig.base,
    styleConfig.sizes[size],
    hasError ? v.error : v.base,
  );

  if (!prefixIcon && !suffixIcon) {
    return (
      <div className="w-full">
        <Input className={cn(base, className)} {...props} />
        {typeof error === "string" && error && (
          <p className={cn(styleConfig.errorText, "mt-1")}>{error}</p>
        )}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="relative flex items-center">
        {prefixIcon && (
          <span className={cn(styleConfig.icon, "absolute left-3")}>{prefixIcon}</span>
        )}
        <Input
          className={cn(base, prefixIcon && "pl-8", suffixIcon && "pr-8", className)}
          {...props}
        />
        {suffixIcon && (
          <span className={cn(styleConfig.icon, "absolute right-3")}>{suffixIcon}</span>
        )}
      </div>
      {typeof error === "string" && error && (
        <p className={cn(styleConfig.errorText, "mt-1")}>{error}</p>
      )}
    </div>
  );
}
