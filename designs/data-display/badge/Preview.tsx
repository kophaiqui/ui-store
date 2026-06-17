"use client";
import { UIBadge } from "./Component";

export default function Preview() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <UIBadge color="default">Default</UIBadge>
      <UIBadge color="emerald">Active</UIBadge>
      <UIBadge color="red" dot>Error</UIBadge>
      <UIBadge color="amber" variant="outline">Warning</UIBadge>
      <UIBadge color="blue" rounded>New</UIBadge>
    </div>
  );
}
