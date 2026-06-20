"use client";
import { Toast } from "@base-ui/react/toast";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { SonnerStyleConfig, SonnerToastType, SonnerPosition } from "./styles/default";

export type { SonnerStyleConfig, SonnerToastType, SonnerPosition };

type ToastData = {
  title?: string;
  message?: string;
  type?: SonnerToastType;
  action?: { label: string; onClick: () => void };
};

type Props = {
  styleConfig?: SonnerStyleConfig;
  message?: string;
  title?: string;
  type?: SonnerToastType;
  duration?: number;
  position?: SonnerPosition;
  dismissible?: boolean;
  action?: { label: string; onClick: () => void };
  onClose?: () => void;
  className?: string;
};

function TypeIcon({ type }: { type: SonnerToastType }) {
  if (type === "success") return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0 text-emerald-500">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.3" />
      <path d="M4.5 8L6.5 10L11.5 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  if (type === "error") return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0 text-red-500">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5.5 5.5L10.5 10.5M10.5 5.5L5.5 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
  if (type === "warning") return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0 text-amber-500">
      <path d="M8 2L14.5 13H1.5L8 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 7v3M8 11.5v.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
  if (type === "info") return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0 text-blue-500">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 7v5M8 5v.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
  return null;
}

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ToastItem({ toast, styleConfig }: { toast: Toast.ToastObject<ToastData>; styleConfig: SonnerStyleConfig }) {
  const type = toast.data?.type ?? "default";
  return (
    <Toast.Root
      toast={toast}
      className={cn(styleConfig.toast, styleConfig.types[type])}
    >
      {type !== "default" && <TypeIcon type={type} />}
      <div className="flex-1 min-w-0">
        {toast.data?.title && (
          <Toast.Title className={styleConfig.title}>{toast.data.title}</Toast.Title>
        )}
        {toast.data?.message && (
          <Toast.Description className={styleConfig.message}>{toast.data.message}</Toast.Description>
        )}
        {toast.data?.action && (
          <Toast.Action
            className={styleConfig.action}
            onClick={toast.data.action.onClick}
          >
            {toast.data.action.label}
          </Toast.Action>
        )}
      </div>
      <Toast.Close className={styleConfig.close} aria-label="Dismiss">
        <CloseIcon />
      </Toast.Close>
    </Toast.Root>
  );
}

type InnerProps = Props & Required<Pick<Props, "styleConfig" | "message" | "type" | "duration" | "position" | "dismissible">>;

function SonnerInner({
  styleConfig,
  message,
  title,
  type,
  duration,
  position,
  action,
  className,
}: InnerProps) {
  const manager = Toast.useToastManager<ToastData>();

  const fire = () => {
    manager.add({
      timeout: duration,
      data: { title, message, type, action },
    });
  };

  return (
    <>
      <button type="button" onClick={fire} className={cn(styleConfig.trigger, className)}>
        Show toast
      </button>
      <Toast.Viewport className={cn(styleConfig.viewport, styleConfig.positions[position])}>
        {manager.toasts.map((t) => (
          <ToastItem key={t.id} toast={t} styleConfig={styleConfig} />
        ))}
      </Toast.Viewport>
    </>
  );
}

export function UISonner({
  styleConfig = defaultStyle,
  message = "Notification sent",
  title,
  type = "default",
  duration = 4000,
  position = "bottom-right",
  dismissible = true,
  action,
  onClose,
  className,
}: Props) {
  return (
    <Toast.Provider>
      <SonnerInner
        styleConfig={styleConfig}
        message={message}
        title={title}
        type={type}
        duration={duration}
        position={position}
        dismissible={dismissible}
        action={action}
        onClose={onClose}
        className={className}
      />
    </Toast.Provider>
  );
}

export { UISonner as default };
