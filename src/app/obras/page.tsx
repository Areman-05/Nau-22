"use client";

import { useMemo, useState } from "react";
import { ArtworkCard } from "@/components/ArtworkCard";
import { artists } from "@/data/artists";
import { artworks } from "@/data/artworks";
import { mediumLabels } from "@/data/gallery";
import { useLocale } from "@/context/LocaleContext";
import type { ArtworkType, Availability, Medium } from "@/data/types";

export default function WorksPage() {
  const { locale } = useLocale();
  const [type, setType] = useState<"all" | ArtworkType>("all");
  const [medium, setMedium] = useState<"all" | Medium>("all");
  const [artist, setArtist] = useState("all");
  const [availability, setAvailability] = useState<"all" | Availability>("all");

  const filtered = useMemo(() => {
    return artworks.filter((a) => {
      if (type !== "all" && a.type !== type) return false;
      if (medium !== "all" && a.medium !== medium) return false;
      if (artist !== "all" && a.artistSlug !== artist) return false;
      if (availability !== "all" && a.availability !== availability) return false;
      return true;
    });
  }, [type, medium, artist, availability]);

  return (
    <>
      <p className="eyebrow">{locale === "es" ? "Catálogo" : "Catalogue"}</p>
      <h1 className="section-title">
        {locale === "es" ? "Obras disponibles" : "Available works"}
      </h1>
      <p className="muted" style={{ maxWidth: "36rem" }}>
        {locale === "es"
          ? "Ediciones con precio público se compran online. Piezas únicas se adquieren tras visita privada o consulta."
          : "Editions with public pricing can be purchased online. Unique works are acquired after a private viewing or inquiry."}
      </p>

      <div className="filters">
        <select
          value={type}
          onChange={(e) => setType(e.target.value as "all" | ArtworkType)}
          aria-label={locale === "es" ? "Tipo" : "Type"}
        >
          <option value="all">{locale === "es" ? "Tipo: todos" : "Type: all"}</option>
          <option value="edition">
            {locale === "es" ? "Edición" : "Edition"}
          </option>
          <option value="unique">{locale === "es" ? "Única" : "Unique"}</option>
        </select>

        <select
          value={medium}
          onChange={(e) => setMedium(e.target.value as "all" | Medium)}
          aria-label={locale === "es" ? "Medio" : "Medium"}
        >
          <option value="all">
            {locale === "es" ? "Medio: todos" : "Medium: all"}
          </option>
          {Object.entries(mediumLabels).map(([key, labels]) => (
            <option key={key} value={key}>
              {labels[locale]}
            </option>
          ))}
        </select>

        <select
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          aria-label={locale === "es" ? "Artista" : "Artist"}
        >
          <option value="all">
            {locale === "es" ? "Artista: todos" : "Artist: all"}
          </option>
          {artists.map((a) => (
            <option key={a.slug} value={a.slug}>
              {a.name}
            </option>
          ))}
        </select>

        <select
          value={availability}
          onChange={(e) =>
            setAvailability(e.target.value as "all" | Availability)
          }
          aria-label={locale === "es" ? "Disponibilidad" : "Availability"}
        >
          <option value="all">
            {locale === "es" ? "Disponibilidad: todas" : "Availability: all"}
          </option>
          <option value="available">
            {locale === "es" ? "Disponible" : "Available"}
          </option>
          <option value="reserved">
            {locale === "es" ? "Reservada" : "Reserved"}
          </option>
          <option value="sold">{locale === "es" ? "Vendida" : "Sold"}</option>
        </select>
      </div>

      <p className="small muted">
        {filtered.length}{" "}
        {locale === "es" ? "obras" : "works"}
      </p>

      <div className="grid-artworks">
        {filtered.map((art) => (
          <ArtworkCard key={art.slug} artwork={art} />
        ))}
      </div>
    </>
  );
}
