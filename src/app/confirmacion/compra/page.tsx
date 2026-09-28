"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getArtwork } from "@/data/artworks";
import { useLocale } from "@/context/LocaleContext";
import { formatPrice } from "@/lib/format";
import { gallery } from "@/data/gallery";

function PurchaseConfirmContent() {
  const { locale } = useLocale();
  const params = useSearchParams();
  const order = params.get("order") ?? "—";
  const name = params.get("name") ?? "";
  const email = params.get("email") ?? "";
  const fulfillment = params.get("fulfillment") ?? "pickup";
  const total = Number(params.get("total") ?? 0);
  const obras = (params.get("obras") ?? "")
    .split(",")
    .filter(Boolean)
    .map((s) => getArtwork(s))
    .filter(Boolean);

  return (
    <div className="confirm-box">
      <p className="eyebrow">
        {locale === "es" ? "Pedido confirmado" : "Order confirmed"}
      </p>
      <h1 className="section-title">
        {locale === "es" ? "Gracias" : "Thank you"}
        {name ? `, ${name}` : ""}
      </h1>
      <p>
        {locale === "es" ? "Número de pedido" : "Order number"}: <strong>{order}</strong>
      </p>
      <ul>
        {obras.map((art) =>
          art ? (
            <li key={art.slug}>
              {art.title} —{" "}
              {art.priceEur ? formatPrice(art.priceEur, locale) : ""}
            </li>
          ) : null,
        )}
      </ul>
      <p className="price">{formatPrice(total, locale)}</p>
      <p className="muted">
        {fulfillment === "shipping"
          ? locale === "es"
            ? "Envío asegurado. Te contactaremos para coordinar logística."
            : "Insured shipping. We will contact you to arrange logistics."
          : locale === "es"
            ? "Recogida en galería. Te contactaremos para concertar la entrega."
            : "Gallery pickup. We will contact you to arrange handover."}
      </p>
      <p className="small muted">
        {email ? `${locale === "es" ? "Confirmación a" : "Confirmation to"} ${email}. ` : ""}
        {locale === "es" ? gallery.responseTime.es : gallery.responseTime.en}
      </p>
      <div className="cta-row">
        <Link href="/obras" className="btn btn--primary">
          {locale === "es" ? "Seguir explorando" : "Keep exploring"}
        </Link>
        <Link href="/visitar" className="btn btn--ghost">
          {locale === "es" ? "Visitar la nau" : "Visit the space"}
        </Link>
      </div>
    </div>
  );
}

export default function PurchaseConfirmPage() {
  return (
    <Suspense fallback={<p>…</p>}>
      <PurchaseConfirmContent />
    </Suspense>
  );
}
