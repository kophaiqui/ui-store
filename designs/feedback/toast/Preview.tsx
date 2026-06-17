"use client";
import { UIToast, toastManager } from "./Component";

function ToastDemo() {
  const variants = [
    { label: "Default", variant: "default" as const, title: "Notification", description: "You have a new message." },
    { label: "Success", variant: "success" as const, title: "Saved", description: "Your changes were saved." },
    { label: "Error", variant: "error" as const, title: "Failed", description: "Something went wrong." },
    { label: "Warning", variant: "warning" as const, title: "Heads up", description: "Session expires soon." },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {variants.map(({ label, variant, title, description }) => (
        <button
          key={variant}
          type="button"
          onClick={() => toastManager.add({ data: { variant, title, description } })}
          className="inline-flex h-8 items-center rounded-md border border-border bg-card px-3 text-xs font-medium text-foreground hover:bg-muted transition-colors duration-150"
        >
          {label} toast
        </button>
      ))}
    </div>
  );
}

export default function Preview() {
  return (
    <UIToast>
      <ToastDemo />
    </UIToast>
  );
}
