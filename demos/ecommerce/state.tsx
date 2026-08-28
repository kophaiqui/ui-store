"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { PRODUCTS, type Product } from "./data";

export type CartLine = { productId: string; color: string; qty: number };

type CartContextValue = {
  lines: CartLine[];
  add: (productId: string, color: string, qty?: number) => void;
  updateQty: (productId: string, color: string, qty: number) => void;
  remove: (productId: string, color: string) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  items: (CartLine & { product: Product })[];
};

const STORAGE_KEY = "ember-audio-cart";

const CartContext = createContext<CartContextValue | null>(null);

function sameLine(a: CartLine, productId: string, color: string) {
  return a.productId === productId && a.color === color;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const load = () => {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) setLines(JSON.parse(raw));
      } catch {
        // ignore corrupt/blocked storage, start from an empty cart
      }
      setHydrated(true);
    };
    load();
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // storage unavailable, cart just won't persist this session
    }
  }, [lines, hydrated]);

  const add: CartContextValue["add"] = (productId, color, qty = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => sameLine(l, productId, color));
      if (existing) {
        return prev.map((l) => (sameLine(l, productId, color) ? { ...l, qty: l.qty + qty } : l));
      }
      return [...prev, { productId, color, qty }];
    });
  };

  const updateQty: CartContextValue["updateQty"] = (productId, color, qty) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => !sameLine(l, productId, color))
        : prev.map((l) => (sameLine(l, productId, color) ? { ...l, qty } : l)),
    );
  };

  const remove: CartContextValue["remove"] = (productId, color) => {
    setLines((prev) => prev.filter((l) => !sameLine(l, productId, color)));
  };

  const clear = () => setLines([]);

  const items = useMemo(
    () =>
      lines
        .map((l) => {
          const product = PRODUCTS.find((p) => p.id === l.productId);
          return product ? { ...l, product } : null;
        })
        .filter((l): l is CartLine & { product: Product } => l !== null),
    [lines],
  );

  const count = items.reduce((sum, l) => sum + l.qty, 0);
  const subtotal = items.reduce((sum, l) => sum + l.qty * l.product.price, 0);

  return (
    <CartContext.Provider value={{ lines, add, updateQty, remove, clear, count, subtotal, items }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
