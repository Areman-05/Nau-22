"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gallery } from "@/data/gallery";
import { useLocale } from "@/context/LocaleContext";

export default function InfoPage() {
  const { locale } = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div className="min-h-screen bg-background pb-32">
      <div className="px-6 md:px-12 max-w-[1600px] mx-auto mb-16 md:mb-24">
        <h1 className="font-serif text-6xl md:text-[10rem] uppercase tracking-tighter leading-none">
          {locale === "es" ? "La Galería" : "The Gallery"}
        </h1>
      </div>

      <div ref={containerRef} className="w-full h-[50vh] md:h-[80vh] overflow-hidden relative mb-24 md:mb-40 bg-muted">
        <motion.img
          style={{ y }}
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2400&q=80"
          alt={locale === "es" ? "Interior de la galería" : "Gallery interior"}
          className="w-full h-[130%] object-cover object-center absolute top-[-15%] grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none" />
      </div>

      <div className="px-6 md:px-12 max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-3 hidden md:block">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sticky top-40">
            {locale === "es" ? "Manifiesto & visita" : "Manifesto & visit"}
          </p>
        </div>

        <div className="md:col-span-9 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-serif text-3xl md:text-5xl leading-[1.1] mb-10 text-foreground">
              {locale === "es"
                ? "Nau 22 es un espacio dedicado a la exhibición y promoción del arte contemporáneo de vanguardia."
                : "Nau 22 is a space dedicated to exhibiting and promoting avant-garde contemporary art."}
            </p>
            <p className="font-sans text-lg text-foreground/60 leading-relaxed text-justify">
              {locale === "es"
                ? "Ubicada en el corazón del distrito creativo 22@ en Barcelona, representamos a una nueva generación de artistas locales e internacionales, enfocándonos en prácticas conceptuales, instalaciones inmersivas y medios experimentales que desafían los límites convencionales del cubo blanco."
                : "Located in the heart of Barcelona’s 22@ creative district, we represent a new generation of local and international artists, focusing on conceptual practices, immersive installations and experimental media that push the conventional limits of the white cube."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-16"
          >
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground border-b border-foreground/10 pb-4 mb-8">
                {locale === "es" ? "Dirección" : "Address"}
              </h3>
              <p className="font-sans text-xl md:text-2xl uppercase leading-snug text-foreground/90">
                {gallery.addressLine}
                <br />
                {gallery.postalCode} {gallery.neighborhood}
                <br />
                {gallery.city}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground border-b border-foreground/10 pb-4 mb-8">
                {locale === "es" ? "Horarios" : "Hours"}
              </h3>
              <div className="font-sans text-lg md:text-xl flex justify-between border-b border-foreground/5 pb-4 mb-4 text-foreground/90">
                <span>{locale === "es" ? "Miércoles — Sábado" : "Wednesday — Saturday"}</span>
                <span>12:00H — 20:00H</span>
              </div>
              <div className="font-sans text-lg md:text-xl flex justify-between text-muted-foreground">
                <span>{locale === "es" ? "Domingo — Martes" : "Sunday — Tuesday"}</span>
                <span>{locale === "es" ? "Cerrado" : "Closed"}</span>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground border-b border-foreground/10 pb-4 mb-8">
                {locale === "es" ? "Contacto" : "Contact"}
              </h3>
              <div className="flex flex-col gap-6 font-sans text-lg md:text-xl">
                <a
                  href={`mailto:${gallery.email}`}
                  className="group flex justify-between items-center text-foreground/90 hover:text-accent transition-colors duration-500"
                >
                  <span>{gallery.email}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    {locale === "es" ? "Escribir ↗" : "Write ↗"}
                  </span>
                </a>
                <a
                  href={`tel:${gallery.phone.replace(/\s/g, "")}`}
                  className="group flex justify-between items-center text-foreground/90 hover:text-accent transition-colors duration-500"
                >
                  <span>{gallery.phone}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    {locale === "es" ? "Llamar ↗" : "Call ↗"}
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
