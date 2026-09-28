"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { artworks, getArtwork } from "@/data/artworks";
import { getArtist } from "@/data/artists";
import { visitSlots } from "@/data/gallery";
import { useLocale } from "@/context/LocaleContext";
import { t } from "@/lib/i18n";
import type { VisitMode } from "@/data/types";

export function VisitForm() {
  const { locale } = useLocale();
  const router = useRouter();
  const params = useSearchParams();
  const preObra = params.get("obra") ?? "";
  const preModo = (params.get("modo") as VisitMode | null) ?? "exhibition";

  const [mode, setMode] = useState<VisitMode>(
    preModo === "private" ? "private" : "exhibition",
  );
  const [date, setDate] = useState("");
  const [slotId, setSlotId] = useState(visitSlots[0].id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [artworkSlug, setArtworkSlug] = useState(preObra);
  const [notes, setNotes] = useState("");

  const availableForVisit = useMemo(
    () =>
      artworks.filter(
        (a) => a.availability === "available" || a.availability === "reserved",
      ),
    [],
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const qs = new URLSearchParams({
      mode,
      date,
      slot: slotId,
      name,
      email,
      obra: artworkSlug,
    });
    router.push(`/confirmacion/cita?${qs.toString()}`);
  }

  const selected = artworkSlug ? getArtwork(artworkSlug) : undefined;
  const artist = selected ? getArtist(selected.artistSlug) : undefined;

  return (
    <form className="visit-form" onSubmit={onSubmit}>
      <fieldset className="mode-toggle">
        <legend>{locale === "es" ? "Tipo de visita" : "Visit type"}</legend>
        <label className={mode === "exhibition" ? "is-active" : undefined}>
          <input
            type="radio"
            name="mode"
            checked={mode === "exhibition"}
            onChange={() => setMode("exhibition")}
          />
          {locale === "es" ? "Visita a la exposición" : "Exhibition visit"}
        </label>
        <label className={mode === "private" ? "is-active" : undefined}>
          <input
            type="radio"
            name="mode"
            checked={mode === "private"}
            onChange={() => setMode("private")}
          />
          {locale === "es" ? "Visita privada de obra" : "Private artwork viewing"}
        </label>
      </fieldset>

      {mode === "private" ? (
        <label>
          {locale === "es" ? "Obra de interés" : "Artwork of interest"}
          <select
            value={artworkSlug}
            onChange={(e) => setArtworkSlug(e.target.value)}
            required
          >
            <option value="">
              {locale === "es" ? "Seleccionar…" : "Select…"}
            </option>
            {availableForVisit.map((a) => {
              const art = getArtist(a.artistSlug);
              return (
                <option key={a.slug} value={a.slug}>
                  {art?.name} — {a.title}
                </option>
              );
            })}
          </select>
          {selected ? (
            <span className="muted small">
              {artist?.name} · {selected.title} ·{" "}
              {selected.type === "unique"
                ? t("labels", "unique", locale)
                : t("labels", "edition", locale)}
            </span>
          ) : null}
        </label>
      ) : null}

      <div className="form-row">
        <label>
          {locale === "es" ? "Fecha" : "Date"}
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().slice(0, 10)}
          />
        </label>
        <label>
          {locale === "es" ? "Franja" : "Time"}
          <select
            value={slotId}
            onChange={(e) => setSlotId(e.target.value)}
            required
          >
            {visitSlots.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="form-row">
        <label>
          {locale === "es" ? "Nombre" : "Name"}
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>

      <label>
        {locale === "es" ? "Notas" : "Notes"}
        <textarea
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder={
            locale === "es"
              ? "Preferencias, accesibilidad, otras obras…"
              : "Preferences, access needs, other works…"
          }
        />
      </label>

      <button type="submit" className="btn btn--primary">
        {t("cta", "confirmVisit", locale)}
      </button>
    </form>
  );
}
