"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getNews } from "@/data/news";
import { useLocale } from "@/context/LocaleContext";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function NoticiaDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { locale } = useLocale();
  const [ready, setReady] = useState(false);
  const item = getNews(id);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!item) notFound();

  const title = locale === "es" ? item.title : item.titleEn;
  const excerpt = locale === "es" ? item.excerpt : item.excerptEn;
  const quote = locale === "es" ? item.quote : item.quoteEn;

  return (
    <div className="w-full bg-background min-h-screen flex flex-col overflow-hidden">
      <section className="pt-8 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: easeOut }}>
          <Link
            href="/noticias"
            className="group inline-flex items-center gap-4 text-foreground/50 hover:text-foreground transition-colors duration-500"
          >
            <ArrowLeft size={18} strokeWidth={1} className="group-hover:-translate-x-2 transition-transform duration-500 ease-out" />
            <span className="font-sans text-xs uppercase tracking-[0.15em] font-semibold">
              {locale === "es" ? "Índice del Journal" : "Journal index"}
            </span>
          </Link>
        </motion.div>
      </section>

      <section className="pt-16 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-3 flex flex-col gap-6 md:mt-4 border-t border-foreground/10 pt-4 md:border-none md:pt-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1, ease: easeOut }}>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">
                {locale === "es" ? item.category : item.categoryEn}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{item.date}</div>
            </motion.div>
          </div>
          <div className="md:col-span-9 md:col-start-4">
            <motion.h1
              initial={ready ? { opacity: 0, y: 20 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easeOut }}
              className="font-serif text-4xl md:text-6xl lg:text-[7rem] leading-[1] tracking-tight text-foreground pr-8 md:pr-0"
            >
              {title}
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="pb-40 px-6 md:px-12 max-w-[1600px] mx-auto w-full border-t border-foreground/10 pt-24 md:pt-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          <div className="md:col-span-4 md:col-start-1">
            {item.image ? (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: easeOut }}
                className="w-full aspect-[3/4] bg-muted overflow-hidden sticky top-40 shadow-xl"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={title}
                  className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-[2s] ease-out"
                />
              </motion.div>
            ) : (
              <div className="sticky top-40 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground border-l border-foreground/10 pl-6 hidden md:block">
                {locale === "es" ? (
                  <>
                    Nota de Prensa /<br />
                    Comunicado Oficial
                  </>
                ) : (
                  <>
                    Press note /<br />
                    Official statement
                  </>
                )}
              </div>
            )}
          </div>

          <div className="md:col-span-7 md:col-start-6 flex flex-col gap-12 font-sans text-base md:text-lg text-foreground/80 leading-relaxed text-justify">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: easeOut }}
              className="font-sans text-xl md:text-2xl leading-relaxed text-foreground font-medium"
            >
              {excerpt}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeOut }}
              className="flex flex-col gap-8"
            >
              <p>
                {locale === "es"
                  ? "La decisión subraya el compromiso de la galería con prácticas que cuestionan la materialidad en la era contemporánea. Este reconocimiento no solo valida la trayectoria del artista, sino que sitúa a Nau 22 en el ecosistema cultural europeo."
                  : "The decision underlines the gallery’s commitment to practices that question materiality in the contemporary era. The recognition validates the artist’s trajectory and places Nau 22 in the European cultural ecosystem."}
              </p>

              {quote ? (
                <div className="pl-6 border-l-2 border-foreground/20 my-8 py-2 font-serif text-3xl md:text-4xl italic text-foreground leading-snug">
                  “{quote}”
                </div>
              ) : null}

              <p>
                {locale === "es"
                  ? "El trabajo de la última temporada ha abierto un debate sobre cómo las naves del 22@ se reprograman desde el rigor curatorial. La pieza formará parte de una itinerancia que comienza el año que viene."
                  : "Last season’s work opened a debate on how 22@ warehouses are reprogrammed through curatorial rigour. The piece will travel in an itinerary that begins next year."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16 pt-8 border-t border-foreground/10 flex flex-col gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
            >
              <span>
                {locale === "es"
                  ? "Publicado por: Dirección Curatorial, Nau 22"
                  : "Published by: Curatorial Office, Nau 22"}
              </span>
              <span>
                {locale === "es" ? "Referencia Archivo" : "Archive ref"}: {item.id.toUpperCase()}-2026
              </span>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
