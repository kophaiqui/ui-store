export const STYLE_VARIANTS = [
  { id: "default", label: "Default" },
] as const;

export type StyleVariantId = typeof STYLE_VARIANTS[number]["id"];
