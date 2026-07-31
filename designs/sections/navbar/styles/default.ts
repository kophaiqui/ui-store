export type NavbarStyleConfig = {
  bar: string;
  inner: string;
  brand: string;
  links: string;
  link: string;
  linkActive: string;
  actions: string;
  mobileToggle: string;
  mobileMenu: string;
  mobileLink: string;
};

export const defaultStyle: NavbarStyleConfig = {
  bar: "sticky top-0 z-40 w-full border-b border-border bg-card/80 backdrop-blur-md",
  inner: "mx-auto flex h-14 max-w-6xl items-center justify-between px-6",
  brand: "text-base font-semibold text-foreground",
  links: "hidden items-center gap-6 md:flex",
  link: "text-sm text-muted-foreground transition-colors hover:text-foreground",
  linkActive: "text-sm font-medium text-foreground",
  actions: "hidden items-center gap-3 md:flex",
  mobileToggle: "flex h-9 w-9 items-center justify-center rounded-md text-foreground md:hidden",
  mobileMenu: "flex flex-col gap-1 border-t border-border bg-card px-6 py-3 md:hidden",
  mobileLink: "rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
};
