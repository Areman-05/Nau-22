"use client";

import Image from "next/image";
import Link from "next/link";
import { ArtworkCard } from "@/components/ArtworkCard";
import { getArtist } from "@/data/artists";
import { getArtwork, getFeaturedArtworks } from "@/data/artworks";
import { getCurrentExhibition } from "@/data/exhibitions";
import { gallery } from "@/data/gallery";
import { useLocale } from "@/context/LocaleContext";
import { formatDateRange } from "@/lib/format";
import { t } from "@/lib/i18n";

export default function HomePage() {
  const { locale } = useLocale();
  const current = getCurrentExhibition();
  const featured = getFeaturedArtworks().slice(0, 6);
  const inRoom =
    current?.artworkSlugs
      .map((slug) => getArtwork(slug))
      .filter(Boolean)
      .slice(0, 4) ?? [];

  return (
    <>
      <section className="hero">
        <div className="hero__media">
          <Image
            src={
              current?.heroImage.src ??
              "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=2000&q=80"
            }
            alt={current?.heroImage.alt ?? "Nau 22"}
            fill
            priority
            className="hero__img"
            sizes="100vw"
          />
          <div className="hero__shade" />
        </div>
        <div className="hero__content">
          <p className="hero__brand">Nau 22</p>
          <p className="hero__tag">
            {locale === "es" ? gallery.tagline : gallery.taglineEn}
          </p>
          {current ? (
            <div className="hero__expo">
              <p className="eyebrow">
                {locale === "es" ? "Exposición actual" : "Current exhibition"}
              </p>
              <h2>{current.title}</h2>
              <p className="muted" style={{ color: "rgba(244,242,237,0.8)" }}>
                {formatDateRange(current.startDate, current.endDate, locale)}
              </p>
              <div className="hero__actions">
                <Link
                  href={`/exposiciones/${current.slug}`}
                  className="btn btn--primary"
                >
                  {t("cta", "viewExhibition", locale)}
                </Link>
                <Link href="/obras" className="btn btn--ghost">
                  {t("cta", "availableWorks", locale)}
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {inRoom.length > 0 ? (
        <section className="section">
          <h2 className="section-title">{t("labels", "nowInRoom", locale)}</h2>
          <div className="grid-artworks">
            {inRoom.map((art) =>
              art ? <ArtworkCard key={art.slug} artwork={art} /> : null,
            )}
          </div>
        </section>
      ) : null}

      <section className="section">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <h2 className="section-title">{t("labels", "available", locale)}</h2>
          <Link href="/obras" className="text-link" style={{ marginTop: 0 }}>
            {locale === "es" ? "Ver catálogo" : "View catalogue"}
          </Link>
        </div>
        <div className="grid-artworks">
          {featured.map((art) => (
            <ArtworkCard key={art.slug} artwork={art} />
          ))}
        </div>
      </section>

      <section className="section split-2">
        <div className="prose">
          <p className="eyebrow">Poblenou · 22@</p>
          <h2 className="section-title">
            {locale === "es" ? "Una nau para mirar con tiempo" : "A warehouse for looking with time"}
          </h2>
          <p>{locale === "es" ? gallery.about.es : gallery.about.en}</p>
          <Link href="/la-nau" className="btn btn--primary">
            {t("nav", "space", locale)}
          </Link>
        </div>
        <div>
          <p>
            {gallery.address}
            <br />
            {gallery.postalCode} {gallery.city}
          </p>
          <p className="muted">{gallery.metro}</p>
          <p className="muted">
            {locale === "es" ? gallery.hours.es : gallery.hours.en}
          </p>
          {current ? (
            <p style={{ marginTop: "1.5rem" }}>
              <span className="muted">
                {locale === "es" ? "Ahora" : "Now"}:{" "}
              </span>
              {current.title}
              <br />
              <span className="small muted">
                {current.artistSlugs
                  .map((s) => getArtist(s)?.name)
                  .filter(Boolean)
                  .join(" · ")}
              </span>
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}
