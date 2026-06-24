export type TT =
  | "bracket" | "tagName" | "propName" | "eq"
  | "strVal" | "exprVal" | "boolProp" | "text" | "space";
export type Tok = { t: TT; v: string };

export function tokenizeJSX(code: string): Tok[] {
  const out: Tok[] = [];
  let i = 0;
  let inTag = false;

  while (i < code.length) {
    if (code[i] === "<") {
      inTag = true;
      const closing = code[i + 1] === "/";
      out.push({ t: "bracket", v: closing ? "</" : "<" });
      i += closing ? 2 : 1;
      const m = code.slice(i).match(/^[\w.:-]+/);
      if (m) { out.push({ t: "tagName", v: m[0] }); i += m[0].length; }
      continue;
    }
    if (inTag && code[i] === ">") { out.push({ t: "bracket", v: ">" }); inTag = false; i++; continue; }
    if (inTag && code[i] === "/" && code[i + 1] === ">") { out.push({ t: "bracket", v: "/>" }); inTag = false; i += 2; continue; }

    if (inTag && /\s/.test(code[i])) {
      const ws = code.slice(i).match(/^\s+/)![0];
      out.push({ t: "space", v: ws });
      i += ws.length;
      const nm = code.slice(i).match(/^[\w.:-]+/);
      if (nm) {
        const name = nm[0];
        if (code[i + name.length] === "=") {
          out.push({ t: "propName", v: name }); i += name.length;
          out.push({ t: "eq", v: "=" }); i++;
          if (code[i] === '"') {
            const end = code.indexOf('"', i + 1);
            if (end !== -1) { out.push({ t: "strVal", v: code.slice(i, end + 1) }); i = end + 1; }
          } else if (code[i] === "{") {
            let depth = 0, j = i;
            while (j < code.length) { if (code[j] === "{") depth++; else if (code[j] === "}") { if (--depth === 0) { j++; break; } } j++; }
            out.push({ t: "exprVal", v: code.slice(i, j) }); i = j;
          }
        } else {
          out.push({ t: "boolProp", v: name }); i += name.length;
        }
      }
      continue;
    }

    if (!inTag) {
      const next = code.indexOf("<", i);
      const end = next === -1 ? code.length : next;
      if (end > i) { out.push({ t: "text", v: code.slice(i, end) }); i = end; } else i++;
      continue;
    }
    out.push({ t: "space", v: code[i] }); i++;
  }
  return out;
}

export const TT_CLS: Record<TT, string> = {
  bracket:  "text-muted-foreground",
  tagName:  "text-sky-600 dark:text-sky-400",
  propName: "text-violet-600 dark:text-violet-400",
  eq:       "text-muted-foreground",
  strVal:   "text-amber-600 dark:text-amber-400",
  exprVal:  "text-orange-600 dark:text-orange-400",
  boolProp: "text-emerald-600 dark:text-emerald-400",
  text:     "text-foreground/90",
  space:    "",
};

export const GRID_BG: React.CSSProperties = {
  backgroundImage: "radial-gradient(circle, var(--preview-dot) 1px, transparent 1px)",
  backgroundSize: "18px 18px",
};
