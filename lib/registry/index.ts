import componentsRegistry from "@/registry/components.json";
import fontsRegistry from "@/registry/fonts.json";
import motionRegistry from "@/registry/motion.json";
import designsRegistry from "@/registry/designs.json";
import stylesRegistry from "@/registry/styles.json";

export type ComponentMeta = {
  title: string;
  description: string;
  path: string;
  category: string;
  tags: string[];
};

export type FontMeta = {
  name: string;
  family: string;
  category: string;
  weights: number[];
  license: string;
  designer: string;
  description: string;
  preview: string;
  source: { provider: string; url: string };
};

export type MotionMeta = {
  title: string;
  description: string;
  path: string;
  category: string;
  tags: string[];
};

export type PropDef = {
  name: string;
  type: string;
  default: string;
  description: string;
  companions?: Record<string, string>;
  demoWidth?: string;
  valueLabels?: Record<string, string>;
  noChildren?: boolean;
};

export type UsageExample = {
  label: string;
  code: string;
};

export type DesignMeta = {
  name: string;
  category: string;
  style?: string;
  tags: string[];
  description: string;
  preview: boolean;
  new?: boolean;
  previewClass?: string;
  props?: PropDef[];
  usage?: UsageExample[];
};

export type StyleStatus = "available" | "coming-soon";

export type StyleMode = "light" | "dark" | "both";

export type StyleMeta = {
  name: string;
  tagline: string;
  description: string;
  status: StyleStatus;
  accent: string;
  modes?: StyleMode;
};

export function getAllComponents(): Record<string, ComponentMeta> {
  return componentsRegistry as Record<string, ComponentMeta>;
}

export function getComponent(slug: string): ComponentMeta | null {
  return (componentsRegistry as Record<string, ComponentMeta>)[slug] ?? null;
}

export function getAllFonts(): Record<string, FontMeta> {
  return fontsRegistry as Record<string, FontMeta>;
}

export function getFont(slug: string): FontMeta | null {
  return (fontsRegistry as Record<string, FontMeta>)[slug] ?? null;
}

export function getAllMotion(): Record<string, MotionMeta> {
  return motionRegistry as Record<string, MotionMeta>;
}

export function getMotion(slug: string): MotionMeta | null {
  return (motionRegistry as Record<string, MotionMeta>)[slug] ?? null;
}

export function getAllDesigns(): Record<string, DesignMeta> {
  return designsRegistry as Record<string, DesignMeta>;
}

export function getDesign(slug: string): DesignMeta | null {
  return (designsRegistry as Record<string, DesignMeta>)[slug] ?? null;
}

export function getDesignsByCategory(category: string): Record<string, DesignMeta> {
  const all = getAllDesigns();
  return Object.fromEntries(
    Object.entries(all).filter(([, meta]) => meta.category === category)
  );
}

export function getAllCategories(): string[] {
  const all = getAllDesigns();
  return [...new Set(Object.values(all).map((d) => d.category))];
}

export const DEFAULT_STYLE = "default";

export function getAllStyles(): Record<string, StyleMeta> {
  return stylesRegistry as Record<string, StyleMeta>;
}

export function getStyle(id: string): StyleMeta | null {
  return (stylesRegistry as Record<string, StyleMeta>)[id] ?? null;
}

/** The style a design belongs to — defaults to "default" when not declared. */
export function getDesignStyle(meta: DesignMeta): string {
  return meta.style ?? DEFAULT_STYLE;
}

export function getDesignsByStyle(styleId: string): Record<string, DesignMeta> {
  const all = getAllDesigns();
  if (styleId === DEFAULT_STYLE) {
    return Object.fromEntries(
      Object.entries(all).filter(([, meta]) => getDesignStyle(meta) === styleId)
    );
  }
  // Non-default styles support all designs via styleConfig prop
  return all;
}
