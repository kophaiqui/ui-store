import componentsRegistry from "@/registry/components.json";
import fontsRegistry from "@/registry/fonts.json";
import motionRegistry from "@/registry/motion.json";

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
