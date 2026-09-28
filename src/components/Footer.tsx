"use client";

import Link from "next/link";
import { gallery } from "@/data/gallery";
import { useLocale } from "@/context/LocaleContext";

export function Footer() {
  const { locale } = useLocale();

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <p className="brand brand--footer">Nau 22</p>
          <p className="muted">
            {locale === "es" ? gallery.tagline : gallery.taglineEn}
          </p>
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
        </div>
        <div>
          <p>
            <a href={`mailto:${gallery.email}`}>{gallery.email}</a>
          </p>
          <p>
            <a href={gallery.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </p>
          <p className="footer-nav">
            <Link href="/visitar">{locale === "es" ? "Visitar" : "Visit"}</Link>
            <Link href="/obras">{locale === "es" ? "Obras" : "Works"}</Link>
          </p>
        </div>
      </div>
      <p className="legal muted">
        © {new Date().getFullYear()} Nau 22 · Poblenou, Barcelona
      </p>
    </footer>
  );
}
