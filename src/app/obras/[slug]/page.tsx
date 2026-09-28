"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ArtworkCTA } from "@/components/ArtworkCTA";
import { ArtworkCard } from "@/components/ArtworkCard";
import { ArtworkGallery } from "@/components/ArtworkGallery";
import { getArtist } from "@/data/artists";
import { getArtwork, getArtworksByArtist } from "@/data/artworks";
import { useLocale } from "@/context/LocaleContext";
import { availabilityLabel } from "@/lib/format";
import { t } from "@/lib/i18n";

export default function ArtworkDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLocale();
  const artwork = getArtwork(slug);
  if (!artwork) notFound();

  const artist = getArtist(artwork.artistSlug);
  const related = getArtworksByArtist(artwork.artistSlug)
    .filter((a) => a.slug !== artwork.slug)
    .slice(0, 3);

  return (
    <>
      <div className="artwork-detail">
        <ArtworkGallery images={artwork.images} />

        <div>
          <p className="eyebrow">
            <Link href={`/artistas/${artist?.slug}`}>{artist?.name}</Link>
          </p>
          <h1 className="section-title">
            {artwork.title}, {artwork.year}
          </h1>
          <p className="muted">{artwork.mediumLabel}</p>
          <p className="muted">{artwork.dimensions}</p>

          <span className="type-pill">
            {artwork.type === "edition"
              ? t("labels", "edition", locale)
              : t("labels", "unique", locale)}
          </span>

          <ArtworkCTA artwork={artwork} />

          <ul className="specs">
            <li>
              <span>{locale === "es" ? "Disponibilidad" : "Availability"}</span>
              <span>{availabilityLabel(artwork.availability, locale)}</span>
            </li>
            {artwork.editionSize ? (
              <li>
                <span>{locale === "es" ? "Edición" : "Edition"}</span>
                <span>
                  {artwork.editionAvailable}/{artwork.editionSize}
                </span>
              </li>
            ) : null}
            <li>
              <span>{locale === "es" ? "Procedencia" : "Provenance"}</span>
              <span style={{ textAlign: "right", maxWidth: "16rem" }}>
                {artwork.provenance}
              </span>
            </li>
          </ul>

          <div className="prose">
            <p>
              {locale === "es" ? artwork.description : artwork.descriptionEn}
            </p>
          </div>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="section">
          <h2 className="section-title">
            {locale === "es"
              ? `Más de ${artist?.name}`
              : `More by ${artist?.name}`}
          </h2>
          <div className="grid-artworks">
            {related.map((art) => (
              <ArtworkCard key={art.slug} artwork={art} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
