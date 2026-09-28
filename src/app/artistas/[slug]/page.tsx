"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ArtworkCard } from "@/components/ArtworkCard";
import { getArtist } from "@/data/artists";
import { getArtworksByArtist } from "@/data/artworks";
import { exhibitions } from "@/data/exhibitions";
import { useLocale } from "@/context/LocaleContext";

export default function ArtistDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLocale();
  const artist = getArtist(slug);
  if (!artist) notFound();

  const works = getArtworksByArtist(artist.slug);
  const shows = exhibitions.filter((e) => e.artistSlugs.includes(artist.slug));

  return (
    <>
      <p className="eyebrow">
        {artist.basedIn} · b. {artist.birthYear}
      </p>
      <h1 className="section-title">{artist.name}</h1>
      <div className="prose">
        <p>{locale === "es" ? artist.bio : artist.bioEn}</p>
      </div>

      {shows.length > 0 ? (
        <section className="section">
          <h2 className="eyebrow">
            {locale === "es" ? "Exposiciones en Nau 22" : "Exhibitions at Nau 22"}
          </h2>
          <ul>
            {shows.map((s) => (
              <li key={s.slug}>
                <Link href={`/exposiciones/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="section">
        <h2 className="section-title">
          {locale === "es" ? "Obras" : "Works"}
        </h2>
        <div className="grid-artworks">
          {works.map((art) => (
            <ArtworkCard key={art.slug} artwork={art} />
          ))}
        </div>
      </section>
    </>
  );
}
