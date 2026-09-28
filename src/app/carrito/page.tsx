"use client";

import Image from "next/image";
import Link from "next/link";
import { getArtwork } from "@/data/artworks";
import { getArtist } from "@/data/artists";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import { formatPrice } from "@/lib/format";
import { t } from "@/lib/i18n";

export default function CartPage() {
  const { locale } = useLocale();
  const { items, removeItem, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <>
        <h1 className="section-title">{t("nav", "cart", locale)}</h1>
        <p className="muted">
          {locale === "es"
            ? "Tu carrito está vacío. Solo las ediciones con precio público pueden comprarse online."
            : "Your cart is empty. Only editions with public pricing can be purchased online."}
        </p>
        <Link href="/obras" className="btn btn--primary" style={{ marginTop: "1rem" }}>
          {t("cta", "availableWorks", locale)}
        </Link>
      </>
    );
  }

  return (
    <>
      <h1 className="section-title">{t("nav", "cart", locale)}</h1>
      <p className="muted small">
        {locale === "es"
          ? "Las piezas únicas no entran en el carrito: requieren cita o consulta."
          : "Unique works cannot be added to the cart: they require a visit or inquiry."}
      </p>

      <table className="cart-table">
        <thead>
          <tr>
            <th>{locale === "es" ? "Obra" : "Work"}</th>
            <th>{locale === "es" ? "Precio" : "Price"}</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const art = getArtwork(item.artworkSlug);
            if (!art) return null;
            const artist = getArtist(art.artistSlug);
            return (
              <tr key={item.artworkSlug}>
                <td>
                  <div className="cart-item">
                    <Image
                      src={art.images[0].src}
                      alt={art.images[0].alt}
                      width={72}
                      height={90}
                    />
                    <div>
                      <p className="small muted">{artist?.name}</p>
                      <Link href={`/obras/${art.slug}`}>
                        {art.title}, {art.year}
                      </Link>
                      <p className="small muted">
                        {locale === "es" ? "Edición" : "Edition"}{" "}
                        {art.editionSize}
                      </p>
                    </div>
                  </div>
                </td>
                <td>{art.priceEur ? formatPrice(art.priceEur, locale) : "—"}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn--ghost"
                    onClick={() => removeItem(item.artworkSlug)}
                  >
                    {locale === "es" ? "Quitar" : "Remove"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="cart-summary">
        <div>
          <p className="muted small">
            {t("labels", "pickup", locale)} · {t("labels", "shipping", locale)}
          </p>
          <p className="price">{formatPrice(subtotal, locale)}</p>
        </div>
        <div className="cta-row">
          <Link href="/obras" className="btn btn--ghost">
            {t("cta", "continueShopping", locale)}
          </Link>
          <Link href="/checkout" className="btn btn--primary">
            {t("cta", "checkout", locale)}
          </Link>
        </div>
      </div>
    </>
  );
}
