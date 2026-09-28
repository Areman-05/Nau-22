"use client";

import { Suspense } from "react";
import { VisitForm } from "@/components/VisitForm";
import { gallery } from "@/data/gallery";
import { useLocale } from "@/context/LocaleContext";

function VisitContent() {
  const { locale } = useLocale();

  return (
    <>
      <p className="eyebrow">{locale === "es" ? "Acceso" : "Access"}</p>
      <h1 className="section-title">
        {locale === "es" ? "Visitar Nau 22" : "Visit Nau 22"}
      </h1>
      <div className="split-2">
        <div className="prose">
          <p>
            {locale === "es"
              ? "La galería abre en horario público y con cita. Las visitas privadas de obra están pensadas para coleccionistas que quieren ver la pieza en sala antes de decidir."
              : "The gallery opens during public hours and by appointment. Private viewings are for collectors who want to see the work in the room before deciding."}
          </p>
          <p className="muted">
            {locale === "es" ? gallery.hours.es : gallery.hours.en}
          </p>
          <p>
            {gallery.address}, {gallery.postalCode} {gallery.city}
            <br />
            <span className="muted">{gallery.metro}</span>
          </p>
        </div>
        <VisitForm />
      </div>
    </>
  );
}

export default function VisitPage() {
  return (
    <Suspense fallback={<p>…</p>}>
      <VisitContent />
    </Suspense>
  );
}
