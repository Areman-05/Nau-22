"use client";

import Image from "next/image";
import Link from "next/link";
import { exhibitions } from "@/data/exhibitions";
import { getArtist } from "@/data/artists";
import { useLocale } from "@/context/LocaleContext";
import { formatDateRange } from "@/lib/format";
import { t } from "@/lib/i18n";
import type { ExhibitionStatus } from "@/data/types";

const order: ExhibitionStatus[] = ["current", "upcoming", "past"];

export default function ExhibitionsPage() {
  const { locale } = useLocale();

  return (
    <>
      <p className="eyebrow">{t("nav", "exhibitions", locale)}</p>
      <h1 className="section-title">
        {locale === "es" ? "Programa" : "Programme"}
      </h1>

      {order.map((status) => {
        const items = exhibitions.filter((e) => e.status === status);
        if (!items.length) return null;
        return (
          <section key={status} className="section">
            <h2 className="eyebrow">{t("labels", status, locale)}</h2>
            <div className="expo-list">
              {items.map((expo) => (
                <Link
                  key={expo.slug}
                  href={`/exposiciones/${expo.slug}`}
                  className="expo-row"
                >
                  <div className="expo-row__media">
                    <Image
                      src={expo.heroImage.src}
                      alt={expo.heroImage.alt}
                      width={440}
                      height={330}
                    />
                  </div>
                  <div>
                    <p className="expo-row__status">
                      {t("labels", status, locale)}
                    </p>
                    <h2>{expo.title}</h2>
                    <p className="muted">
                      {formatDateRange(expo.startDate, expo.endDate, locale)}
                    </p>
                    <p className="small">
                      {expo.artistSlugs
                        .map((s) => getArtist(s)?.name)
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
