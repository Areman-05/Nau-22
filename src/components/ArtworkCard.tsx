"use client";

import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/data/types";
import { getArtist } from "@/data/artists";
import { canPurchase } from "@/data/artworks";
import { useLocale } from "@/context/LocaleContext";
import { formatPrice } from "@/lib/format";
import { t } from "@/lib/i18n";
import { ImageReveal } from "./ImageReveal";

export function ArtworkCard({ artwork }: { artwork: Artwork }) {
  const { locale } = useLocale();
  const artist = getArtist(artwork.artistSlug);
  const buyable = canPurchase(artwork);

  return (
    <ImageReveal>
      <Link href={`/obras/${artwork.slug}`} className="artwork-card">
        <div className="artwork-card__media">
          <Image
            src={artwork.images[0].src}
            alt={artwork.images[0].alt}
            width={800}
            height={1000}
            className="artwork-card__img"
          />
        </div>
        <div className="artwork-card__meta">
          <p className="artwork-card__artist">{artist?.name}</p>
          <h3 className="artwork-card__title">
            {artwork.title}, {artwork.year}
          </h3>
          <p className="artwork-card__ bid">
            <span className="type-pill">
              {artwork.type === "edition"
                ? t("labels", "edition", locale)
                : t("labels", "unique", locale)}
            </span>
            {buyable && artwork.priceEur != null
              ? formatPrice(artwork.priceEur, locale)
              : artwork.availability === "sold"
                ? locale === "es"
                  ? "Vendida"
                  : "Sold"
                : t("labels", "priceOnRequest", locale)}
          </p>
        </div>
      </Link>
    </ImageReveal>
  );
}
