"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ArtworkCard } from "@/components/ArtworkCard";
import { getArtist } from "@/data/artists";
import { getArtwork } from "@/data/artworks";
import { getExhibition } from "@/data/exhibitions";
import { useLocale } from "@/context/LocaleContext";
import { formatDateRange } from "@/lib/format";
import { t } from "@/lib/i18n";

export default function ExhibitionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLocale();
  const expo = getExhibition(slug);
  if (!expo) notFound();

  const works = expo.artworkSlugs
    .map((s) => getArtwork(s))
    .filter(Boolean);

  return (
    <>
      <section className="space-hero" style={{ marginTop: "-0.5rem" }}>
        <Image
          src={expo.heroImage.src}
          alt={expo.heroImage.alt}
          width={2000}
          height={900}
          priority
        />
      </section>

      <p className="eyebrow">{t("labels", expo.status, locale)}</p>
      <h1 className="section-title">{expo.title}</h1>
      <p className="muted">
        {formatDateRange(expo.startDate, expo.endDate, locale)}
      </p>
      <p>
        {expo.artistSlugs
          .map((s) => getArtist(s)?.name)
          .filter(Boolean)
          .join(" · ")}
      </p>

      <div className="prose" style={{ marginTop: "1.75rem" }}>
        <p>
          {locale === "es" ? expo.curatorialText : expo.curatorialTextEn}
        </p>
      </div>

      <div style={{ margin: "1.5rem 0 2.5rem" }}>
        <Link
          href={`/visitar?modo=exhibition`}
          className="btn btn--primary"
        >
          {t("cta", "bookExhibition", locale)}
        </Link>
      </div>

      <section className="section">
        <h2 className="section-title">
          {locale === "es" ? "Obras en sala" : "Works on view"}
        </h2>
        <div className="grid-artworks">
          {works.map((art) =>
            art ? <ArtworkCard key={art.slug} artwork={art} /> : null,
          )}
        </div>
      </section>
    </>
  );
}
