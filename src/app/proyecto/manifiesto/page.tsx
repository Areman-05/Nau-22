"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { manifestoBody, manifestoLead } from "@/data";
import { useLocale } from "@/context/LocaleContext";
import { useIsClient } from "@/lib/useIsClient";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function ManifiestoPage() {
  const { locale } = useLocale();
  const ready = useIsClient();

  return (
    <div className="w-full bg-background min-h-screen flex flex-col pb-40">
      <section className="pt-8 px-6 md:px-12 max-w-[1600px] mx-auto w-full mb-12 md:mb-16">
        <motion.div
          initial={ready ? { opacity: 0, x: -10 } : false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <Link
            href="/proyecto"
            className="group inline-flex items-center gap-4 text-foreground/50 hover:text-foreground transition-colors duration-500"
          >
            <ArrowLeft
              size={18}
              strokeWidth={1}
              className="group-hover:-translate-x-2 transition-transform duration-500 ease-out"
            />
            <span className="font-sans text-xs uppercase tracking-[0.15em] font-semibold">
              {locale === "es" ? "Volver a Proyecto" : "Back to Project"}
            </span>
          </Link>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent flex items-center gap-3 sticky top-40">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {locale === "es" ? "Manifiesto" : "Manifesto"}
            </p>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <motion.div
              initial={ready ? { opacity: 0, y: 24 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: easeOut }}
              className="flex flex-col gap-10"
            >
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.85]">
                {locale === "es" ? "Manifiesto" : "Manifesto"}
              </h1>
              <p className="font-serif text-2xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-foreground">
                {locale === "es" ? manifestoLead.es : manifestoLead.en}
              </p>
              <div className="font-sans text-lg md:text-xl text-foreground/75 leading-relaxed flex flex-col gap-8 max-w-3xl">
                {(locale === "es" ? manifestoBody.es : manifestoBody.en).map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
