"use client";
import { UISelect } from "./Component";
export default function Preview() {
  return (
    <div className="w-56">
      <UISelect
        options={[
          { label: "Design System", value: "ds" },
          { label: "Component Library", value: "cl" },
          { label: "Style Guide", value: "sg" },
        ]}
      />
    </div>
  );
}
