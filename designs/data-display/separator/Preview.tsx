"use client";
import { UISeparator } from "./Component";
export default function Preview() {
  return (
    <div className="w-64 space-y-5">
      {/* Horizontal — divides stacked content into sections */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-foreground">Account</p>
        <UISeparator />
        <p className="text-xs text-muted-foreground">
          Manage your profile, email, and password.
        </p>
      </div>

      {/* Vertical — divides inline items, e.g. a nav row */}
      <div className="flex h-6 items-center gap-3 text-sm text-muted-foreground">
        <span>Docs</span>
        <UISeparator orientation="vertical" />
        <span>API</span>
        <UISeparator orientation="vertical" />
        <span>Blog</span>
      </div>
    </div>
  );
}
