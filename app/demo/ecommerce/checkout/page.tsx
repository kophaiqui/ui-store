"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UICard } from "@/designs/data-display/card/Component";
import { UIField } from "@/designs/inputs/field/Component";
import { UIInput } from "@/designs/inputs/input/Component";
import { UIRadioGroup } from "@/designs/inputs/radio-group/Component";
import { UIButton } from "@/designs/inputs/button/Component";
import { useCart } from "@/demos/ecommerce/state";
import { cardStyle, fieldStyle, inputStyle, radioGroupStyle, buttonStyle } from "@/demos/ecommerce/styles";

const PAYMENT_OPTIONS = [
  { label: "Card ending in 4242", value: "card" },
  { label: "PayPal", value: "paypal" },
  { label: "Apple Pay", value: "apple-pay" },
];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clear } = useCart();
  const [form, setForm] = useState({ name: "", address: "", city: "", zip: "" });
  const [payment, setPayment] = useState("card");
  const [placing, setPlacing] = useState(false);

  const shipping = subtotal > 0 ? 12 : 0;
  const total = subtotal + shipping;
  const canSubmit = form.name.trim() && form.address.trim() && form.city.trim() && form.zip.trim() && items.length > 0;

  function set<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function placeOrder() {
    if (!canSubmit) return;
    setPlacing(true);
    const orderNumber = `EMB-${Math.floor(100000 + Math.random() * 900000)}`;
    try {
      window.sessionStorage.setItem(
        "ember-last-order",
        JSON.stringify({ orderNumber, items, subtotal, shipping, total, name: form.name }),
      );
    } catch {
      // sessionStorage unavailable - confirmation page falls back to a generic message
    }
    clear();
    router.push(`/demo/ecommerce/order-confirmation?order=${orderNumber}`);
  }

  if (items.length === 0 && !placing) {
    return (
      <div className="mx-auto max-w-lg px-6 py-24 text-center">
        <p className="mb-4 text-white/70">Your cart is empty - nothing to check out yet.</p>
        <Link href="/demo/ecommerce/shop"><UIButton styleConfig={buttonStyle}>Browse the shop</UIButton></Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-10">
      <h1 className="mb-8 text-2xl font-bold tracking-tight text-white">Checkout</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <UICard styleConfig={cardStyle} padding="md">
            <p className="mb-4 text-sm font-semibold text-white">Shipping details</p>
            <div className="space-y-4">
              <UIField styleConfig={fieldStyle} label="Full name">
                <UIInput styleConfig={inputStyle} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Jordan Reyes" />
              </UIField>
              <UIField styleConfig={fieldStyle} label="Address">
                <UIInput styleConfig={inputStyle} value={form.address} onChange={(e) => set("address", e.target.value)} placeholder="221 Harbor St" />
              </UIField>
              <div className="grid grid-cols-2 gap-4">
                <UIField styleConfig={fieldStyle} label="City">
                  <UIInput styleConfig={inputStyle} value={form.city} onChange={(e) => set("city", e.target.value)} placeholder="Portland" />
                </UIField>
                <UIField styleConfig={fieldStyle} label="ZIP code">
                  <UIInput styleConfig={inputStyle} value={form.zip} onChange={(e) => set("zip", e.target.value)} placeholder="97201" />
                </UIField>
              </div>
            </div>
          </UICard>

          <UICard styleConfig={cardStyle} padding="md">
            <p className="mb-4 text-sm font-semibold text-white">Payment method</p>
            <UIRadioGroup
              styleConfig={radioGroupStyle}
              options={PAYMENT_OPTIONS}
              value={payment}
              onValueChange={(v) => setPayment(v as string)}
            />
            <p className="mt-3 text-xs text-white/40">Demo only - no real payment is processed.</p>
          </UICard>
        </div>

        <div>
          <UICard styleConfig={cardStyle} padding="md">
            <p className="mb-4 text-sm font-semibold text-white">Order summary</p>
            <div className="mb-4 space-y-2">
              {items.map((line) => (
                <div key={`${line.productId}-${line.color}`} className="flex justify-between text-sm text-white/70">
                  <span className="truncate pr-2">{line.product.name} × {line.qty}</span>
                  <span className="shrink-0">${(line.product.price * line.qty).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2 border-t border-white/10 pt-4 text-sm">
              <div className="flex justify-between text-white/70"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between text-white/70"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
              <div className="flex justify-between border-t border-white/10 pt-2 text-base font-semibold text-white">
                <span>Total</span><span>${total.toFixed(2)}</span>
              </div>
            </div>
            <UIButton styleConfig={buttonStyle} fullWidth size="lg" className="mt-5" disabled={!canSubmit} onClick={placeOrder}>
              Place order
            </UIButton>
          </UICard>
        </div>
      </div>
    </div>
  );
}
