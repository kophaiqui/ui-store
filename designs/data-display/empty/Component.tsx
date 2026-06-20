"use client";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { EmptyStyleConfig } from "./styles/default";

export type { EmptyStyleConfig };

type Props = {
  styleConfig?: EmptyStyleConfig;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  className?: string;
};

function InboxIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M6 28h10l3 4h10l3-4h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 18h12M18 23h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function UIEmpty({
  styleConfig = defaultStyle,
  title = "Nothing here yet",
  description = "Add your first item to get started.",
  icon,
  action,
  secondaryAction,
  className,
}: Props) {
  return (
    <div className={cn(styleConfig.wrapper, className)}>
      <div className={styleConfig.icon}>
        {icon ?? <InboxIcon />}
      </div>
      <div className="flex flex-col gap-1">
        {title && <p className={styleConfig.title}>{title}</p>}
        {description && <p className={styleConfig.description}>{description}</p>}
      </div>
      {(action || secondaryAction) && (
        <div className={styleConfig.actions}>
          {action}
          {secondaryAction}
        </div>
      )}
    </div>
  );
}

export { UIEmpty as default };
