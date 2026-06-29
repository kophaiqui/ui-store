export type Heading = { id: string; text: string; level: 2 | 3 };

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[`*_[\]()]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

export function parseHeadings(source: string): Heading[] {
  const headings: Heading[] = [];
  for (const line of source.split("\n")) {
    const h2 = line.match(/^##\s+(.+)/);
    const h3 = line.match(/^###\s+(.+)/);
    if (h3) headings.push({ id: slugify(h3[1]), text: h3[1].trim(), level: 3 });
    else if (h2) headings.push({ id: slugify(h2[1]), text: h2[1].trim(), level: 2 });
  }
  return headings;
}
