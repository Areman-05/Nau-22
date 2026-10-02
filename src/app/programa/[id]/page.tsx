"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import { getExhibition } from "@/data/exhibitions";
import { EnquireButton } from "@/components/EnquireButton";
import { useLocale } from "@/context/LocaleContext";
const easeOut = [0.16, 1, 0.3, 1] as const;

export default function ExhibitionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { locale } = useLocale();
  const exh = getExhibition(id);
  if (!exh) notFound();

  const checklist = exh.works;
  const essay = locale === "es" ? exh.curatorialText : exh.curatorialTextEn;
  const essay2 =
    locale === "es"
      ? "La exposición no propone respuestas absolutas, sino que funciona como un ecosistema abierto. Las obras actúan como nodos de información que invitan al espectador a recalibrar su percepción del espacio, el tiempo y la materialidad dentro de la arquitectura de Nau 22."
      : "The exhibition does not offer absolute answers; it works as an open ecosystem. The works act as information nodes that invite the viewer to recalibrate perception of space, time and materiality inside Nau 22’s architecture.";

  return (
    <div className="pt-8 pb-40 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen bg-background">
      <div className="mb-12 md:mb-16">
        <Link
          href="/programa"
          className="group inline-flex items-center gap-4 text-foreground/50 hover:text-foreground transition-colors duration-500"
        >
          <ArrowLeft size={18} strokeWidth={1} className="group-hover:-translate-x-2 transition-transform duration-500 ease-out" />
          <span className="font-sans text-xs uppercase tracking-[0.15em] font-semibold">
            {locale === "es" ? "Índice de exposiciones" : "Exhibition index"}
          </span>
        </Link>
      </div>

      <div className="w-full aspect-[16/9] md:aspect-[2.5/1] bg-muted mb-16 md:mb-24 overflow-hidden relative group">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={exh.image}
          alt={`${locale === "es" ? "Vista de instalación" : "Installation view"}: ${exh.title}`}
          className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-[2s] ease-out"
        />
        <div className="absolute bottom-6 right-6 md:bottom-8 md:right-10 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70 mix-blend-difference">
          {locale === "es" ? "Vista de sala" : "Installation view"} — {exh.location}
        </div>
      </div>

      <div className="mb-24 md:mb-40 border-b border-foreground/10 pb-16 md:pb-24">
        <h1 className="font-serif text-5xl md:text-[8rem] lg:text-[10rem] leading-[0.85] tracking-tighter uppercase">
          {exh.title}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-40 md:mb-64">
        <div className="md:col-span-3">
          <div className="sticky top-40 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground border-b border-foreground/10 pb-3">
                {exh.artistSlugs.length > 1
                  ? locale === "es"
                    ? "Artistas"
                    : "Artists"
                  : locale === "es"
                    ? "Artista"
                    : "Artist"}
              </span>
              <span className="font-sans text-sm tracking-[0.15em] font-semibold text-foreground">{exh.artists}</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground border-b border-foreground/10 pb-3">
                {locale === "es" ? "Fechas" : "Dates"}
              </span>
              <span className="font-sans text-sm tracking-[0.15em] font-semibold text-foreground/80">{exh.date}</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground border-b border-foreground/10 pb-3">
                {locale === "es" ? "Ubicación" : "Location"}
              </span>
              <span className="font-sans text-sm tracking-[0.15em] font-semibold text-foreground/80">{exh.location}</span>
            </div>
            <div className="mt-8">
              <button type="button" className="group flex items-center gap-4 text-foreground hover:text-accent transition-colors w-fit">
                <Download size={14} strokeWidth={1.5} />
                <div className="flex flex-col">
                  <span className="font-sans text-xs uppercase tracking-[0.15em] font-semibold">
                    {locale === "es" ? "Hoja de sala (PDF)" : "Gallery notes (PDF)"}
                  </span>
                  <span className="h-px bg-foreground/20 w-full group-hover:bg-accent transition-colors duration-500 mt-1" />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 md:col-start-5">
          <h3 className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-accent mb-12 flex items-center gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {locale === "es" ? "Texto curatorial" : "Curatorial text"}
          </h3>
          <div className="font-sans text-lg md:text-xl text-foreground/80 leading-relaxed text-justify flex flex-col gap-8">
            <p>{essay}</p>
            <p>{essay2}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-foreground/10 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24 border-b border-foreground/10 pb-6 items-end">
          <div className="md:col-span-3">
            <h2 className="font-serif text-4xl tracking-tight uppercase">
              {locale === "es" ? "Obras en sala" : "Works on view"}
            </h2>
          </div>
          <div className="md:col-span-9 flex justify-end">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              [ {checklist.length} {locale === "es" ? "obras en sala" : "works on view"} ]
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          {checklist.map((work, idx) => (
            <motion.div
              key={`${work.title}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: easeOut }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center py-8 border-b border-foreground/5 hover:border-accent transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-foreground/[0.02] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
              <div className="relative z-10 md:col-span-2 w-24 h-24 md:w-32 md:h-32 bg-black/[0.02] flex items-center justify-center p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={work.image || exh.image}
                  alt={work.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="relative z-10 md:col-span-4 flex flex-col gap-2">
                <h4 className="font-serif text-2xl md:text-3xl italic text-foreground group-hover:text-accent transition-colors duration-500">
                  {work.title}
                </h4>
                <span className="font-sans text-[10px] uppercase tracking-[0.15em] font-semibold text-muted-foreground group-hover:text-foreground/70 transition-colors">
                  {work.artist ?? exh.artists}
                </span>
              </div>
              <div className="relative z-10 hidden md:flex md:col-span-3 flex-col gap-1 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                <span>{work.year}</span>
                <span>{work.medium}</span>
                <span>{work.dimensions}</span>
              </div>
              <div className="relative z-10 md:col-span-3 flex justify-start md:justify-end mt-4 md:mt-0">
                {work.available === false ? (
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/30 line-through">
                    {locale === "es" ? "No disponible" : "Unavailable"}
                  </span>
                ) : (
                  <EnquireButton
                    context={{
                      work: work.title,
                      artist: work.artist ?? exh.artists,
                      exhibition: exh.title,
                    }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
