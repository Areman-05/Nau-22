"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { gallery } from "@/data/gallery";
import { historyIntro, milestones } from "@/data/proyecto";
import { useLocale } from "@/context/LocaleContext";

const easeOut = [0.16, 1, 0.3, 1] as const;

const BUILDING =
  "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=2400&q=80";

export default function ProyectoPage() {
  const { locale } = useLocale();
  const [ready, setReady] = useState(false);
  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (window.location.hash !== "#visitar") return;
    const el = document.getElementById("visitar");
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <div className="w-full bg-background min-h-screen flex flex-col pb-40">
      <section className="pt-8 md:pt-16 px-6 md:px-12 max-w-[1600px] mx-auto w-full mb-12 md:mb-20">
        <motion.h1
          initial={ready ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOut }}
          className="font-serif text-6xl md:text-[10rem] lg:text-[12rem] leading-[0.8] tracking-tighter uppercase"
        >
          {locale === "es" ? "Proyecto" : "Project"}
        </motion.h1>
        <motion.div
          initial={ready ? { opacity: 0, y: 12 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: easeOut }}
          className="mt-8 md:mt-10"
        >
          <Link
            href="/proyecto/manifiesto"
            className="group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent hover:text-foreground transition-colors duration-500"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-foreground transition-colors duration-500" />
            {locale === "es" ? "Leer manifiesto" : "Read manifesto"}
            <span className="opacity-60 group-hover:translate-x-1 transition-transform duration-500">→</span>
          </Link>
        </motion.div>
      </section>

      <section
        ref={photoRef}
        className="w-full h-[55vh] md:h-[85vh] overflow-hidden relative mb-24 md:mb-40 bg-muted"
      >
        <motion.img
          style={{ y }}
          src={BUILDING}
          alt={
            locale === "es"
              ? "Nave industrial vacía · Poblenou 22@"
              : "Empty industrial warehouse · Poblenou 22@"
          }
          className="w-full h-[130%] object-cover object-center absolute top-[-15%]"
        />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-12 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80 mix-blend-difference">
          {locale === "es" ? "Nave · Pujades 102 · 22@" : "Warehouse · Pujades 102 · 22@"}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 mb-16 md:mb-24">
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sticky top-40">
              {locale === "es" ? "Historia" : "History"}
            </p>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.9] mb-8">
              {locale === "es" ? historyIntro.title.es : historyIntro.title.en}
            </h2>
            <div className="font-sans text-base md:text-lg text-foreground/60 max-w-2xl leading-relaxed flex flex-col gap-6">
              {(locale === "es"
                ? historyIntro.paragraphs.es
                : historyIntro.paragraphs.en
              ).map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
            <Link
              href="/proyecto/manifiesto"
              className="group mt-10 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent hover:text-foreground transition-colors duration-500"
            >
              {locale === "es" ? "Leer manifiesto" : "Read manifesto"}
              <span className="opacity-60 group-hover:translate-x-1 transition-transform duration-500">→</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col">
          {milestones.map((m, yearIndex) => {
            const isLastYear = yearIndex === milestones.length - 1;
            return (
              <div
                key={m.year}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-foreground/10 pt-16 md:pt-28 ${
                  isLastYear ? "pb-0" : "pb-16 md:pb-28"
                }`}
              >
                <div className="md:col-span-4">
                  <div className="sticky top-40 font-serif text-6xl md:text-8xl lg:text-[9rem] leading-none tracking-tighter text-foreground/20">
                    {m.year}
                  </div>
                </div>
                <div className="md:col-span-8 flex flex-col gap-14 md:gap-20 mt-4 md:mt-0">
                  {m.items.map((item) => {
                    const paras = locale === "es" ? item.paragraphs : item.paragraphsEn;
                    const isShort = paras.length === 1;
                    const isLong = paras.length >= 3;
                    return (
                      <motion.article
                        key={item.title}
                        initial={ready ? { opacity: 0, y: 40 } : false}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.2, ease: easeOut }}
                        className={`flex flex-col ${isLong ? "max-w-2xl" : "max-w-xl"}`}
                      >
                        <h3
                          className={
                            isShort
                              ? "font-sans text-lg md:text-xl tracking-tight text-foreground mb-3"
                              : "font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.15] tracking-tight text-foreground mb-5"
                          }
                        >
                          {locale === "es" ? item.title : item.titleEn}
                        </h3>
                        <div
                          className={`font-sans leading-relaxed text-foreground/65 flex flex-col ${
                            isShort
                              ? "text-sm md:text-base gap-0"
                              : isLong
                                ? "text-base md:text-lg gap-5"
                                : "text-base gap-4"
                          }`}
                        >
                          {paras.map((p) => (
                            <p key={p.slice(0, 48)}>{p}</p>
                          ))}
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="visitar"
        className="px-6 md:px-12 max-w-[1600px] mx-auto w-full scroll-mt-28 md:scroll-mt-36"
      >
        <div className="border-t border-foreground/10 pt-16 md:pt-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16 md:mb-20">
            <div className="md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sticky top-40">
                {locale === "es" ? "Visitar" : "Visit"}
              </p>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-tighter leading-[0.9] mb-6">
                {locale === "es" ? "Cómo llegar a la nau" : "How to reach the warehouse"}
              </h2>
              <p className="font-sans text-base md:text-lg text-foreground/55 max-w-xl leading-relaxed">
                {locale === "es"
                  ? "Entrada libre en horario de salas. Sin cita para ver la exposición. Para prensa, préstamos o consulta de obra: escribe."
                  : "Free entry during gallery hours. No appointment to see the exhibition. For press, loans or work enquiries: write."}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-4 md:col-start-4 flex flex-col gap-4">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground border-b border-foreground/10 pb-4">
                {locale === "es" ? "Dirección" : "Address"}
              </h3>
              <p className="font-sans text-xl md:text-2xl leading-snug text-foreground">
                {gallery.addressLine}
                <br />
                {gallery.postalCode} {gallery.neighborhood}
                <br />
                {gallery.city}
              </p>
              <p className="font-sans text-sm text-foreground/45 leading-relaxed mt-2">
                {locale === "es"
                  ? "Metro L4 · Poblenou. Entrada por Pujades."
                  : "Metro L4 · Poblenou. Entrance on Pujades."}
              </p>
            </div>

            <div className="md:col-span-4 md:col-start-9 flex flex-col gap-4">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground border-b border-foreground/10 pb-4">
                {locale === "es" ? "Horario" : "Hours"}
              </h3>
              <div className="font-sans text-lg md:text-xl flex flex-col gap-4 text-foreground">
                <div className="flex justify-between gap-6 border-b border-foreground/5 pb-3">
                  <span>{locale === "es" ? "Mié — Sáb" : "Wed — Sat"}</span>
                  <span className="text-foreground/60">12:00 — 20:00</span>
                </div>
                <div className="flex justify-between gap-6 text-foreground/40">
                  <span>{locale === "es" ? "Dom — Mar" : "Sun — Tue"}</span>
                  <span>{locale === "es" ? "Cerrado" : "Closed"}</span>
                </div>
              </div>
              <a
                href={`mailto:${gallery.email}`}
                className="group mt-6 font-sans text-lg md:text-xl text-foreground hover:text-accent transition-colors duration-500 flex justify-between items-center border-t border-foreground/10 pt-6"
              >
                <span>{gallery.email}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  {locale === "es" ? "Escribir ↗" : "Write ↗"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
