"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { getArtwork } from "@/data/artworks";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import { formatPrice } from "@/lib/format";
import { t } from "@/lib/i18n";

export default function CheckoutPage() {
  const { locale } = useLocale();
  const { items, subtotal, clear } = useCart();
  const router = useRouter();
  const [fulfillment, setFulfillment] = useState<"pickup" | "shipping">(
    "pickup",
  );

  if (items.length === 0) {
    return (
      <>
        <h1 className="section-title">{t("cta", "checkout", locale)}</h1>
        <p className="muted">
          {locale === "es"
            ? "No hay obras en el carrito."
            : "There are no works in the cart."}
        </p>
        <Link href="/obras" className="btn btn--primary">
          {t("cta", "availableWorks", locale)}
        </Link>
      </>
    );
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const orderId = `N22-${Date.now().toString().slice(-8)}`;
    const obras = items.map((i) => i.artworkSlug).join(",");
    clear();
    const qs = new URLSearchParams({
      order: orderId,
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      fulfillment,
      total: String(subtotal),
      obras,
    });
    router.push(`/confirmacion/compra?${qs.toString()}`);
  }

  return (
    <>
      <h1 className="section-title">{t("cta", "checkout", locale)}</h1>
      <div className="split-2">
        <form className="checkout-form" onSubmit={onSubmit}>
          <label>
            {locale === "es" ? "Nombre completo" : "Full name"}
            <input name="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" required />
          </label>
          <label>
            {locale === "es" ? "Teléfono" : "Phone"}
            <input name="phone" type="tel" />
          </label>

          <fieldset className="mode-toggle">
            <legend>
              {locale === "es" ? "Entrega" : "Fulfillment"}
            </legend>
            <label className={fulfillment === "pickup" ? "is-active" : undefined}>
              <input
                type="radio"
                name="fulfillment"
                checked={fulfillment === "pickup"}
                onChange={() => setFulfillment("pickup")}
              />
              {t("labels", "pickup", locale)}
            </label>
            <label
              className={fulfillment === "shipping" ? "is-active" : undefined}
            >
              <input
                type="radio"
                name="fulfillment"
                checked={fulfillment === "shipping"}
                onChange={() => setFulfillment("shipping")}
              />
              {t("labels", "shipping", locale)}
            </label>
          </fieldset>

          {fulfillment === "shipping" ? (
            <label>
              {locale === "es" ? "Dirección de envío" : "Shipping address"}
              <textarea name="address" rows={3} required />
            </label>
          ) : null}

          <label>
            {locale === "es" ? "Pago (simulado)" : "Payment (simulated)"}
            <select name="payment" defaultValue="card" required>
              <option value="card">
                {locale === "es" ? "Tarjeta" : "Card"}
              </option>
              <option value="transfer">
                {locale === "es" ? "Transferencia" : "Bank transfer"}
              </option>
            </select>
          </label>

          <p className="muted small">
            {locale === "es"
              ? "Entorno de demostración realista: el pago no se cobra. La galería confirmará el pedido por email."
              : "Realistic demo environment: no real charge. The gallery will confirm the order by email."}
          </p>

          <button type="submit" className="btn btn--primary">
            {locale === "es" ? "Confirmar pedido" : "Confirm order"} ·{" "}
            {formatPrice(subtotal, locale)}
          </button>
        </form>

        <aside>
          <h2 className="eyebrow">{locale === "es" ? "Resumen" : "Summary"}</h2>
          <ul>
            {items.map((item) => {
              const art = getArtwork(item.artworkSlug);
              if (!art?.priceEur) return null;
              return (
                <li key={item.artworkSlug}>
                  {art.title} — {formatPrice(art.priceEur, locale)}
                </li>
              );
            })}
          </ul>
          <p className="price">{formatPrice(subtotal, locale)}</p>
        </aside>
      </div>
    </>
  );
}
