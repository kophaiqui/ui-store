"use client";
import { useState } from "react";
import Link from "next/link";
import { Dialog } from "@base-ui/react/dialog";
import { UICard } from "@/designs/data-display/card/Component";
import { UIButton } from "@/designs/inputs/button/Component";
import { UIField } from "@/designs/inputs/field/Component";
import { UIInput } from "@/designs/inputs/input/Component";
import { UIDialog } from "@/designs/feedback/dialog/Component";
import { UIEmpty } from "@/designs/data-display/empty/Component";
import { ProductImage } from "@/demos/ecommerce/components/ProductImage";
import { useCart } from "@/demos/ecommerce/state";
import { cardStyle, buttonStyle, fieldStyle, inputStyle, dialogStyle, emptyStyle } from "@/demos/ecommerce/styles";

const VALID_PROMOS: Record<string, number> = { EMBER10: 0.1, WELCOME: 0.05 };

export default function CartPage() {
  const { items, updateQty, remove, clear, subtotal } = useCart();
  const [promoInput, setPromoInput] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  const discount = appliedPromo ? subtotal * VALID_PROMOS[appliedPromo] : 0;
  const total = subtotal - discount;

  function applyPromo() {
    const code = promoInput.trim().toUpperCase();
    if (VALID_PROMOS[code]) setAppliedPromo(code);
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24">
        <UIEmpty
          styleConfig={emptyStyle}
          title="Your cart is empty"
          description="Find something you'll want to listen to for a long time."
          action={
            <Link href="/demo/ecommerce/shop">
              <UIButton styleConfig={buttonStyle}>Browse the shop</UIButton>
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-white">Your cart</h1>
        <UIDialog
          styleConfig={dialogStyle}
          trigger="Clear cart"
          title="Clear your cart?"
          description="This removes every item from your cart. This can't be undone."
          footer={
            <div className="flex items-center justify-end gap-2">
              <Dialog.Close className={dialogStyle.cancelBtn}>Cancel</Dialog.Close>
              <Dialog.Close className={dialogStyle.confirmBtn} onClick={clear}>Clear cart</Dialog.Close>
            </div>
          }
        />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          {items.map((line) => (
            <UICard key={`${line.productId}-${line.color}`} styleConfig={cardStyle} padding="sm">
              <div className="flex gap-4">
                <Link href={`/demo/ecommerce/product/${line.product.slug}`} className="shrink-0">
                  <ProductImage product={line.product} className="size-20 rounded-lg" />
                </Link>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <Link href={`/demo/ecommerce/product/${line.product.slug}`} className="truncate text-sm font-semibold text-white hover:underline">
                        {line.product.name}
                      </Link>
                      <p className="text-xs text-white/50">{line.color}</p>
                    </div>
                    <p className="shrink-0 text-sm font-semibold text-white">${(line.product.price * line.qty).toFixed(2)}</p>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-1 rounded-lg border border-white/15 p-1">
                      <UIButton styleConfig={buttonStyle} variant="ghost" size="sm" className="w-7 px-0" onClick={() => updateQty(line.productId, line.color, line.qty - 1)}>-</UIButton>
                      <span className="w-6 text-center text-sm text-white">{line.qty}</span>
                      <UIButton styleConfig={buttonStyle} variant="ghost" size="sm" className="w-7 px-0" onClick={() => updateQty(line.productId, line.color, line.qty + 1)}>+</UIButton>
                    </div>
                    <button onClick={() => remove(line.productId, line.color)} className="text-xs text-white/50 underline-offset-4 hover:text-white hover:underline">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </UICard>
          ))}
        </div>

        <div>
          <UICard styleConfig={cardStyle} padding="md">
            <p className="mb-4 text-sm font-semibold text-white">Order summary</p>

            <div className="mb-4">
              <UIField styleConfig={fieldStyle} label="Promo code" orientation="vertical">
                <div className="flex gap-2">
                  <UIInput
                    styleConfig={inputStyle}
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="EMBER10"
                    className="flex-1"
                  />
                  <UIButton styleConfig={buttonStyle} variant="outline" size="md" onClick={applyPromo}>Apply</UIButton>
                </div>
              </UIField>
              {appliedPromo && <p className="mt-1.5 text-xs text-emerald-300">{appliedPromo} applied</p>}
            </div>

            <div className="space-y-2 border-t border-white/10 pt-4 text-sm">
              <div className="flex justify-between text-white/70">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-300">
                  <span>Discount</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between border-t border-white/10 pt-2 text-base font-semibold text-white">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Link href="/demo/ecommerce/checkout" className="mt-5 block">
              <UIButton styleConfig={buttonStyle} fullWidth size="lg">Checkout</UIButton>
            </Link>
          </UICard>
        </div>
      </div>
    </div>
  );
}
