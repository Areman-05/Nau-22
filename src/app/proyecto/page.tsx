"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
    </div>
  );
}
