"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getArtwork } from "@/data/artworks";
import { getArtist } from "@/data/artists";
import { gallery, visitSlots } from "@/data/gallery";
import { useLocale } from "@/context/LocaleContext";

function VisitConfirmContent() {
  const { locale } = useLocale();
  const params = useSearchParams();
  const mode = params.get("mode") ?? "exhibition";
  const date = params.get("date") ?? "";
  const slot = visitSlots.find((s) => s.id === params.get("slot"));
  const name = params.get("name") ?? "";
  const email = params.get("email") ?? "";
  const obraSlug = params.get("obra") ?? "";
  const artwork = obraSlug ? getArtwork(obraSlug) : undefined;
  const artist = artwork ? getArtist(artwork.artistSlug) : undefined;

  return (
    <div className="confirm-box">
      <p className="eyebrow">
        {locale === "es" ? "Cita reservada" : "Appointment booked"}
      </p>
      <h1 className="section-title">
        {locale === "es" ? "Te esperamos" : "We look forward to seeing you"}
        {name ? `, ${name}` : ""}
      </h1>
      <p>
        {mode === "private"
          ? locale === "es"
            ? "Visita privada de obra"
            : "Private artwork viewing"
          : locale === "es"
            ? "Visita a la exposición"
            : "Exhibition visit"}
      </p>
      <p>
        <strong>{date}</strong> · {slot?.label ?? "—"}
      </p>
      {artwork ? (
        <p>
          {artist?.name} — {artwork.title}
        </p>
      ) : null}
      <p className="muted">
        {gallery.address}, {gallery.postalCode} {gallery.city}
        <br />
        {gallery.metro}
      </p>
      <p className="small muted">
        {locale === "es"
          ? "Trae identificación si la visita es privada. Confirmación enviada a "
          : "Bring ID for private visits. Confirmation sent to "}
        {email || "—"}.
      </p>
      <div className="cta-row">
        <Link href="/la-nau" className="btn btn--primary">
          {locale === "es" ? "Cómo llegar" : "How to get here"}
        </Link>
        <Link href="/" className="btn btn--ghost">
          {locale === "es" ? "Volver al inicio" : "Back home"}
        </Link>
      </div>
    </div>
  );
}

export default function VisitConfirmPage() {
  return (
    <Suspense fallback={<p>…</p>}>
      <VisitConfirmContent />
    </Suspense>
  );
}
