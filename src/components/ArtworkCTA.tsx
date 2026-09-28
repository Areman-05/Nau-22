"use client";

import Link from "next/link";
import { useState } from "react";
import type { Artwork } from "@/data/types";
import { canPurchase, requiresVisit } from "@/data/artworks";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import { formatPrice } from "@/lib/format";
import { t } from "@/lib/i18n";
import { gallery } from "@/data/gallery";

export function ArtworkCTA({ artwork }: { artwork: Artwork }) {
  const { locale } = useLocale();
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [inquireOpen, setInquireOpen] = useState(false);
  const [inquireSent, setInquireSent] = useState(false);

  const purchasable = canPurchase(artwork);
  const visitOnly = requiresVisit(artwork);

  function handleAdd() {
    const ok = addItem(artwork.slug);
    if (ok) setAdded(true);
  }

  return (
    <div className="artwork-cta">
      {purchasable && artwork.priceEur !== null ? (
        <>
          <p className="price">{formatPrice(artwork.priceEur, locale)}</p>
          {artwork.editionSize && artwork.editionAvailable != null ? (
            <p className="muted small">
              {locale === "es" ? "Edición" : "Edition"} {artwork.editionSize} ·{" "}
              {artwork.editionAvailable}{" "}
              {locale === "es" ? "disponibles" : "available"}
            </p>
          ) : null}
          <div className="cta-row">
            <button type="button" className="btn btn--primary" onClick={handleAdd}>
              {added
                ? locale === "es"
                  ? "Añadida al carrito"
                  : "Added to cart"
                : t("cta", "addToCart", locale)}
            </button>
            {added ? (
              <Link href="/carrito" className="btn btn--ghost">
                {t("nav", "cart", locale)}
              </Link>
            ) : null}
          </div>
          <Link
            href={`/visitar?obra=${artwork.slug}&modo=private`}
            className="text-link"
          >
            {t("cta", "seeInRoom", locale)}
          </Link>
        </>
      ) : null}

      {visitOnly ? (
        <>
          <p className="price price--soft">
            {t("labels", "priceOnRequest", locale)}
          </p>
          <div className="cta-row">
            <Link
              href={`/visitar?obra=${artwork.slug}&modo=private`}
              className="btn btn--primary"
            >
              {t("cta", "bookPrivate", locale)}
            </Link>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => setInquireOpen((v) => !v)}
            >
              {t("cta", "inquire", locale)}
            </button>
          </div>
          <p className="muted small">
            {locale === "es" ? gallery.responseTime.es : gallery.responseTime.en}
          </p>
        </>
      ) : null}

      {artwork.availability === "reserved" ? (
        <p className="badge badge--warn">
          {locale === "es" ? "Reservada — consultar" : "Reserved — inquire"}
        </p>
      ) : null}

      {artwork.availability === "sold" ? (
        <p className="badge">{locale === "es" ? "Vendida" : "Sold"}</p>
      ) : null}

      {inquireOpen && !inquireSent ? (
        <InquireForm
          artworkTitle={artwork.title}
          locale={locale}
          onSent={() => setInquireSent(true)}
        />
      ) : null}
      {inquireSent ? (
        <p className="success">
          {locale === "es"
            ? "Consulta enviada. Te responderemos en 24–48 h."
            : "Inquiry sent. We will reply within 24–48 h."}
        </p>
      ) : null}
    </div>
  );
}

function InquireForm({
  artworkTitle,
  locale,
  onSent,
}: {
  artworkTitle: string;
  locale: "es" | "en";
  onSent: () => void;
}) {
  return (
    <form
      className="inquire-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSent();
      }}
    >
      <p className="small muted">
        {locale === "es" ? "Sobre" : "About"}: {artworkTitle}
      </p>
      <label>
        {locale === "es" ? "Nombre" : "Name"}
        <input name="name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" required />
      </label>
      <label>
        {locale === "es" ? "Mensaje" : "Message"}
        <textarea name="message" rows={3} required />
      </label>
      <button type="submit" className="btn btn--primary">
        {locale === "es" ? "Enviar consulta" : "Send inquiry"}
      </button>
    </form>
  );
}
