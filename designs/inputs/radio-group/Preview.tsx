"use client";
import { UIRadioGroup } from "./Component";
export default function Preview() {
  return (
    <UIRadioGroup
      defaultValue="b"
      options={[
        { label: "Compact", value: "a" },
        { label: "Default", value: "b" },
        { label: "Comfortable", value: "c" },
      ]}
    />
  );
}
