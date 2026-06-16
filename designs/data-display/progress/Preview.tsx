"use client";
import { UIProgress } from "./Component";
export default function Preview() {
  return (
    <div className="w-64">
      <UIProgress value={62} label="Upload progress" showValue />
    </div>
  );
}
