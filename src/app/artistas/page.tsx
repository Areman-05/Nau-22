"use client";

import Link from "next/link";
import { artists } from "@/data/artists";
import { getArtworksByArtist } from "@/data/artworks";
import { useLocale } from "@/context/LocaleContext";

export default function ArtistsPage() {
  const { locale } = useLocale();

  return (
    <>
      <p className="eyebrow">{locale === "es" ? "Roster" : "Roster"}</p>
      <h1 className="section-title">
        {locale === "es" ? "Artistas" : "Artists"}
      </h1>
      <div className="artist-list">
        {artists.map((artist) => {
          const count = getArtworksByArtist(artist.slug).filter(
            (a) => a.availability === "available",
          ).length;
          return (
            <Link
              key={artist.slug}
              href={`/artistas/${artist.slug}`}
              className="artist-row"
            >
              <div>
                <h2>{artist.name}</h2>
                <p className="muted small">
                  {artist.basedIn} · b. {artist.birthYear}
                </p>
              </div>
              <p className="muted small">
                {count}{" "}
                {locale === "es" ? "disponibles" : "available"}
              </p>
            </Link>
          );
        })}
      </div>
    </>
  );
}
