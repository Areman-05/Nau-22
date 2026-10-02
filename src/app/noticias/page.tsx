"use client";

import { useLocale } from "@/context/LocaleContext";

export default function NoticiasPage() {
  const { locale } = useLocale();

  return (
    <div className="pt-8 px-6 md:px-12 max-w-[1600px] mx-auto min-h-[60vh]">
      <h1 className="font-serif text-5xl md:text-7xl mb-6">
        {locale === "es" ? "Noticias" : "News"}
      </h1>
      <p className="font-mono text-muted-foreground uppercase tracking-widest text-xs">
        {locale === "es" ? "Página en desarrollo" : "Page in progress"}
      </p>
    </div>
  );
}
