"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { news } from "@/data/news";
import { useLocale } from "@/context/LocaleContext";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function NoticiasPage() {
  const { locale } = useLocale();
  const [ready, setReady] = useState(false);
  const featured = news[0];
  const list = news.slice(1);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!featured) return null;

  return (
    <div className="w-full bg-background min-h-screen flex flex-col">
      <section className="pt-8 md:pt-16 pb-16 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
        <motion.div
          initial={ready ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOut }}
        >
          <h1 className="font-serif text-6xl md:text-[9rem] lg:text-[11rem] leading-[0.8] tracking-tighter uppercase mb-8 md:mb-16">
            Journal
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-foreground/10 pb-12">
            <div className="md:col-span-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-3">
                {locale === "es" ? "Archivo y Actualidad" : "Archive and news"}
              </span>
            </div>
            <div className="md:col-span-7 font-sans text-lg md:text-xl text-foreground/80 leading-relaxed text-justify">
              {locale === "es"
                ? "Dossier de publicaciones, ferias internacionales, notas de prensa y adquisiciones institucionales de los artistas representados por Nau 22."
                : "Dossier of publications, international fairs, press notes and institutional acquisitions of the artists represented by Nau 22."}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="pb-32 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-4 flex flex-col gap-6 md:mt-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: easeOut }}>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent flex items-center gap-3 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {locale === "es" ? "Destacado" : "Featured"}
              </div>
              <div className="font-sans text-[10px] uppercase tracking-widest font-semibold text-foreground/50 mb-4 flex gap-4">
                <span>{featured.date}</span>
                <span>—</span>
                <span className="text-accent">{locale === "es" ? featured.category : featured.categoryEn}</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8 text-foreground">
                {locale === "es" ? featured.title : featured.titleEn}
              </h2>
              <p className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed text-justify mb-8">
                {locale === "es" ? featured.excerpt : featured.excerptEn}
              </p>
              <Link
                href={`/noticias/${featured.id}`}
                className="group inline-flex items-center gap-4 font-sans text-xs uppercase tracking-widest font-semibold text-foreground hover:text-accent transition-colors"
              >
                <span>{locale === "es" ? "Leer Artículo Completo" : "Read full article"}</span>
                <span className="w-8 h-px bg-foreground/20 group-hover:w-12 group-hover:bg-accent transition-all duration-500" />
              </Link>
            </motion.div>
          </div>

          <div className="md:col-span-8">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.3, ease: easeOut }}>
              <Link
                href={`/noticias/${featured.id}`}
                className="block w-full aspect-[4/3] md:aspect-[16/10] bg-black/[0.02] p-6 md:p-12 overflow-hidden group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover mix-blend-multiply grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-[2s] ease-out shadow-xl"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-48 px-6 md:px-12 max-w-[1600px] mx-auto w-full relative">
        <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-16 border-b border-foreground/10 pb-4">
          {locale === "es" ? "Índice Cronológico" : "Chronological index"}
        </h3>

        <div className="flex flex-col relative z-10">
          {list.map((item) => (
            <Link
              href={`/noticias/${item.id}`}
              key={item.id}
              className="group flex flex-col md:flex-row md:items-center py-8 md:py-12 border-b border-foreground/10 hover:border-accent transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-foreground/[0.01] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center w-full">
                <div className="w-56 flex-shrink-0 mb-6 md:mb-0 flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{item.date}</span>
                  <span className="font-sans text-[10px] uppercase tracking-widest font-semibold text-accent/80 group-hover:text-accent transition-colors">
                    {locale === "es" ? item.category : item.categoryEn}
                  </span>
                </div>
                <div className="flex-grow pr-0 md:pr-16 transform group-hover:translate-x-4 transition-transform duration-500 ease-out">
                  <h4 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground/90 group-hover:text-foreground group-hover:italic transition-all duration-300 leading-[1.1] tracking-tight mb-4 pr-8">
                    {locale === "es" ? item.title : item.titleEn}
                  </h4>
                  <p className="font-sans text-xs md:text-sm text-foreground/60 leading-relaxed max-w-3xl hidden md:block opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500">
                    {locale === "es" ? item.excerpt : item.excerptEn}
                  </p>
                </div>
                <div className="mt-6 md:mt-0 flex items-center justify-end w-32">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:block">
                    {locale === "es" ? "Leer" : "Read"}
                  </span>
                  <div className="md:hidden flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">
                    {locale === "es" ? "Leer" : "Read"} <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
