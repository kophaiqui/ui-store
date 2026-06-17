"use client";
import { UIAlert } from "./Component";

export default function Preview() {
  return (
    <div className="flex flex-col gap-2 w-full max-w-sm">
      <UIAlert variant="info" title="Update available" description="A new version is ready to install." />
      <UIAlert variant="success" title="Saved" description="Your changes have been saved successfully." closable />
      <UIAlert variant="warning" description="Your session expires in 5 minutes." />
      <UIAlert variant="error" title="Upload failed" description="The file exceeds the 10 MB limit." closable />
    </div>
  );
}
