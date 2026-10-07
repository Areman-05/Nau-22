"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { exhibitions, getArchiveWorks, type Artist, type Collaborator } from "@/data";
import { EnquireButton } from "@/components/EnquireButton";
import { useLocale } from "@/context/LocaleContext";
import { useIsClient } from "@/lib/useIsClient";

type Person = Artist | Collaborator;

function isArtist(p: Person): p is Artist {
  return "practice" in p;
}

export function PersonDetail({ person }: { person: Person; backHref?: string }) {
  const { locale } = useLocale();
  const ready = useIsClient();
  const year = isArtist(person) ? person.birthYear : person.year;
  const isCollective =
    person.slug === "colectivo-22" || person.slug === "studio-manta" || !isArtist(person);
  const yearLabel = isCollective
    ? locale === "es"
      ? "Fundación"
      : "Founded"
    : locale === "es"
      ? "Nacimiento"
      : "Born";
  const bio1 = locale === "es" ? person.bio : person.bioEn;
  const bio2 = locale === "es" ? person.bio2 : person.bioEn2;
  const hero = person.images[0];
  const archive = isArtist(person) ? getArchiveWorks(person) : [];
  const related = isArtist(person)
    ? exhibitions.filter(
        (exh) =>
          exh.artistSlugs.includes(person.slug) ||
          exh.artists.toLowerCase().includes(person.name.toLowerCase()),
      )
    : [];

  return (
    <div className="pt-8 pb-40 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen bg-background">
      <div className="mb-24 md:mb-40">
        <h1 className="font-serif text-6xl md:text-[9rem] lg:text-[11rem] leading-[0.85] tracking-tighter uppercase break-words">
          {person.name}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-40 md:mb-64">
        <div className="md:col-span-3">
          <div className="sticky top-40 flex flex-col gap-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                {locale === "es" ? "Origen" : "Origin"}
              </p>
              <p className="font-sans text-sm uppercase tracking-widest">{person.country}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                {yearLabel}
              </p>
              <p className="font-sans text-sm uppercase tracking-widest">{year}</p>
            </div>
            <EnquireButton variant="line" context={{ artist: person.name }} />
          </div>
        </div>

        <div className="md:col-span-4 font-sans text-lg md:text-xl text-foreground/80 leading-relaxed text-justify">
          <p className="mb-8">{bio1}</p>
          <p>{bio2}</p>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <div className="w-full aspect-[3/4]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hero?.src}
              alt={hero?.alt ?? person.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {archive.length > 0 ? (
        <div className="border-t border-foreground/10 pt-24 mb-40 md:mb-64">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <div className="sticky top-40">
                <h2 className="font-serif text-3xl md:text-4xl tracking-tight uppercase">
                  {locale === "es" ? "Obras" : "Works"}
                </h2>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-6">
                  {locale === "es" ? "Selección de estudio" : "Studio selection"}
                </p>
              </div>
            </div>

            <div className="md:col-span-9 flex flex-col gap-32 md:gap-48 mt-16 md:mt-0">
              {archive.map((work) => (
                <motion.div
                  key={work.title}
                  initial={ready ? { opacity: 0, y: 30 } : false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col group"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full max-h-[85vh] object-contain object-left md:object-center group-hover:opacity-90 transition-opacity duration-500"
                  />
                  <div className="mt-8 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 md:gap-6">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                      <h4 className="font-serif text-2xl md:text-3xl italic text-foreground">{work.title}</h4>
                      <div className="flex flex-wrap items-baseline gap-3 md:gap-6 font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        <span>{work.year}</span>
                        <span className="hidden md:inline w-1 h-1 rounded-full bg-foreground/20" />
                        <span>{work.medium}</span>
                        <span className="hidden md:inline w-1 h-1 rounded-full bg-foreground/20" />
                        <span className="font-mono text-[10px] tracking-[0.2em]">{work.dimensions}</span>
                      </div>
                    </div>
                    <EnquireButton context={{ work: work.title, artist: person.name }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {related.length > 0 ? (
        <div className="border-t border-foreground/10 pt-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <h2 className="font-serif text-4xl tracking-tight uppercase mb-12 md:mb-0">
                {locale === "es" ? "Exposiciones" : "Exhibitions"}
              </h2>
            </div>
            <div className="md:col-span-9 flex flex-col">
              {related.map((exh) => (
                <Link
                  key={exh.id}
                  href={`/programa/${exh.id}`}
                  className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-foreground/10 hover:border-accent transition-colors duration-500"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 w-full md:w-auto">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground w-20">
                      {exh.date.split(" ")[0]}
                    </span>
                    <h3 className="font-sans text-2xl md:text-4xl uppercase tracking-tighter group-hover:text-accent transition-colors duration-500">
                      {exh.title}
                    </h3>
                  </div>
                  <div className="mt-6 md:mt-0 flex items-center gap-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      {locale === "es" ? "Ver exposición" : "View exhibition"}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-background transition-all duration-500">
                      <ArrowUpRight strokeWidth={1.5} size={18} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
