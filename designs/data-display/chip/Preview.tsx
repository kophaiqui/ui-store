"use client";
import { useState } from "react";
import { UIChip } from "./Component";

const TAGS = ["Design", "Tailwind", "React", "TypeScript"];

export default function Preview() {
  const [active, setActive] = useState("Design");
  const [tags, setTags] = useState(TAGS);

  return (
    <div className="flex flex-col gap-3 items-start">
      <div className="flex flex-wrap gap-1.5">
        {["Design", "Tailwind", "React"].map((t) => (
          <UIChip key={t} selected={active === t} onClick={() => setActive(t)}>
            {t}
          </UIChip>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <UIChip key={t} removable onRemove={() => setTags((prev) => prev.filter((x) => x !== t))}>
            {t}
          </UIChip>
        ))}
      </div>
    </div>
  );
}
