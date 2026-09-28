"use client";

import Image from "next/image";
import Link from "next/link";
import { gallery } from "@/data/gallery";
import { useLocale } from "@/context/LocaleContext";
import { t } from "@/lib/i18n";

export default function SpacePage() {
  const { locale } = useLocale();

  return (
    <>
      <section className="space-hero">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
          alt="Interior industrial Nau 22"
          width={2000}
          height={900}
          priority
        />
      </section>

      <p className="eyebrow">Poblenou · 22@</p>
      <h1 className="section-title">La Nau</h1>

      <div className="split-2">
        <div className="prose">
          <p>{locale === "es" ? gallery.about.es : gallery.about.en}</p>
          <p>{locale === "es" ? gallery.history.es : gallery.history.en}</p>
          <Link href="/visitar" className="btn btn--primary">
            {t("cta", "bookExhibition", locale)}
          </Link>
        </div>
        <div>
          <h2 className="eyebrow">
            {locale === "es" ? "Cómo llegar" : "How to get here"}
          </h2>
          <p>
            {gallery.address}
            <br />
            {gallery.postalCode} {gallery.city}
          </p>
          <p className="muted">{gallery.metro}</p>
          <p className="muted">
            {locale === "es" ? gallery.hours.es : gallery.hours.en}
          </p>
          <p>
            <a href={`mailto:${gallery.email}`}>{gallery.email}</a>
            <br />
            {gallery.phone}
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <Image
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80"
              alt="Detalle estructural de la nave"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </div>
    </>
  );
}
