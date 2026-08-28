"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { UIButton } from "@/designs/inputs/button/Component";
import { UICard } from "@/designs/data-display/card/Component";
import { buttonStyle, cardStyle } from "@/demos/ecommerce/styles";
import type { CartLine } from "@/demos/ecommerce/state";
import type { Product } from "@/demos/ecommerce/data";

type LastOrder = {
  orderNumber: string;
  items: (CartLine & { product: Product })[];
  total: number;
  name: string;
};

function CheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function OrderConfirmationPage() {
  const [order, setOrder] = useState<LastOrder | null | undefined>(undefined);

  useEffect(() => {
    const load = () => {
      try {
        const raw = window.sessionStorage.getItem("ember-last-order");
        setOrder(raw ? JSON.parse(raw) : null);
      } catch {
        setOrder(null);
      }
    };
    load();
  }, []);

  if (order === undefined) return null;

  if (order === null) {
    return (
      <div className="mx-auto max-w-lg px-6 py-24 text-center">
        <p className="mb-4 text-white/70">No recent order found.</p>
        <Link href="/demo/ecommerce/shop"><UIButton styleConfig={buttonStyle}>Browse the shop</UIButton></Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg px-6 py-20 text-center">
      <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
        <CheckIcon />
      </div>
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-white">Order placed{order.name ? `, ${order.name.split(" ")[0]}` : ""}!</h1>
      <p className="mb-8 text-sm text-white/60">Order <span className="font-mono text-white/80">{order.orderNumber}</span> is on its way. This is a demo - nothing was actually shipped or charged.</p>

      <UICard styleConfig={cardStyle} padding="md" className="mb-8 text-left">
        <p className="mb-3 text-sm font-semibold text-white">Summary</p>
        <div className="space-y-2">
          {order.items.map((line) => (
            <div key={`${line.productId}-${line.color}`} className="flex justify-between text-sm text-white/70">
              <span className="truncate pr-2">{line.product.name} × {line.qty}</span>
              <span className="shrink-0">${(line.product.price * line.qty).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-between border-t border-white/10 pt-3 text-base font-semibold text-white">
          <span>Total</span><span>${order.total.toFixed(2)}</span>
        </div>
      </UICard>

      <div className="flex justify-center gap-3">
        <Link href="/demo/ecommerce/shop"><UIButton styleConfig={buttonStyle} variant="outline">Keep shopping</UIButton></Link>
        <Link href="/demo/ecommerce"><UIButton styleConfig={buttonStyle}>Back home</UIButton></Link>
      </div>
    </div>
  );
}
