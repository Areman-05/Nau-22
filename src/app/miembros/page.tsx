"use client";

import { useLocale } from "@/context/LocaleContext";

export default function MembersPage() {
  const { locale } = useLocale();
  return (
    <div className="px-6 md:px-12 max-w-[1600px] mx-auto min-h-[60vh] flex flex-col justify-center items-center text-center">
      <h1 className="font-serif text-5xl md:text-7xl mb-6">
        {locale === "es" ? "Miembros" : "Members"}
      </h1>
      <p className="font-sans text-muted-foreground uppercase tracking-widest text-xs">
        {locale === "es" ? "Página en desarrollo" : "Page in progress"}
      </p>
    </div>
  );
}
