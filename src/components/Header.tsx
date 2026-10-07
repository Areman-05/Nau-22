"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { gallery } from "@/data";
import { useLocale } from "@/context/LocaleContext";

const navLinks = [
  { name: "Exposiciones", nameEn: "Exhibitions", path: "/programa" },
  { name: "Artistas", nameEn: "Artists", path: "/artistas" },
  { name: "Noticias", nameEn: "News", path: "/noticias" },
  { name: "Proyecto", nameEn: "Project", path: "/proyecto" },
];

export function Header() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md py-4 border-b border-foreground/5"
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="font-serif text-5xl md:text-6xl tracking-tighter leading-none hover:text-accent transition-colors block relative z-50 text-foreground"
          >
            nau 22
          </Link>

          <button
            type="button"
            className="group hover:text-accent transition-colors z-50 p-2 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] font-semibold text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? (locale === "es" ? "Cerrar menú" : "Close menu") : locale === "es" ? "Abrir menú" : "Open menu"}
          >
            <span className="hidden md:block overflow-hidden relative h-4 w-16">
              <span
                className={`absolute inset-0 flex items-center transition-transform duration-500 ease-out ${
                  isMenuOpen ? "-translate-y-full" : "translate-y-0"
                }`}
              >
                {locale === "es" ? "Menu" : "Menu"}
              </span>
              <span
                className={`absolute inset-0 flex items-center transition-transform duration-500 ease-out ${
                  isMenuOpen ? "translate-y-0" : "translate-y-full"
                }`}
              >
                {locale === "es" ? "Cerrar" : "Close"}
              </span>
            </span>
            <div className="relative w-6 h-6 flex items-center justify-center">
              <motion.div animate={{ rotate: isMenuOpen ? 45 : 0 }} className="absolute">
                {isMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </motion.div>
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-24 md:top-32 right-6 md:right-12 w-72 bg-background border border-foreground/10 shadow-2xl z-40 p-8 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-serif text-3xl uppercase tracking-tighter hover:text-accent hover:italic transition-all duration-300 block ${
                      pathname.startsWith(link.path) ? "text-accent italic" : "text-foreground"
                    }`}
                  >
                    {locale === "es" ? link.name : link.nameEn}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-2 pt-6 border-t border-foreground/10 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50 flex flex-col gap-4"
            >
              <a
                href={`mailto:${gallery.email}`}
                className="hover:text-foreground transition-colors flex items-center justify-between group"
              >
                <span>{locale === "es" ? "Contacto General" : "General contact"}</span>
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  ↗
                </span>
              </a>
              <Link
                href="/proyecto#visitar"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-foreground transition-colors flex items-center justify-between group"
              >
                <span>{locale === "es" ? "Visita y Horarios" : "Visit and hours"}</span>
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  ↗
                </span>
              </Link>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export function Footer() {
  const { locale, setLocale } = useLocale();

  return (
    <footer className="bg-foreground text-background pt-32 pb-12 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-24 border-b border-background/20 pb-16">
          <h2 className="font-serif text-[6rem] md:text-[12rem] lg:text-[15rem] leading-[0.75] tracking-tighter uppercase text-background/90 text-center md:text-left">
            Nau 22
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 font-mono text-[10px] uppercase tracking-[0.2em] mb-32">
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-background/40">{locale === "es" ? "Ubicación" : "Location"}</span>
            <p className="leading-relaxed text-background/90">
              {gallery.addressLine}
              <br />
              {gallery.postalCode} {gallery.neighborhood}
              <br />
              {gallery.city}
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-background/40">{locale === "es" ? "Horario de Salas" : "Gallery hours"}</span>
            <p className="leading-relaxed text-background/90">
              {locale === "es" ? "Miércoles — Sábado" : "Wednesday — Saturday"}
              <br />
              12:00H — 20:00H
              <br />
              {locale === "es" ? "Domingo — Martes: Cerrado" : "Sunday — Tuesday: Closed"}
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-background/40">{locale === "es" ? "Contacto General" : "General contact"}</span>
            <a
              href={`mailto:${gallery.email}`}
              className="text-background/90 hover:text-accent transition-colors w-fit"
            >
              {gallery.email.toUpperCase()}
            </a>
            <a
              href={`tel:${gallery.phone.replace(/\s/g, "")}`}
              className="text-background/90 hover:text-accent transition-colors w-fit"
            >
              {gallery.phone}
            </a>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-background/40">{locale === "es" ? "Plataformas" : "Platforms"}</span>
            <a
              href={gallery.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-background/90 hover:text-accent transition-colors w-fit"
            >
              Instagram
            </a>
            <a href="#" className="text-background/90 hover:text-accent transition-colors w-fit">
              Artsy Portal
            </a>
            <a
              href={`mailto:${gallery.email}`}
              className="text-background/90 hover:text-accent transition-colors w-fit"
            >
              Journal (Newsletter)
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center font-sans text-xs uppercase tracking-[0.15em] font-semibold text-background/40 gap-6 md:gap-0">
          <div>© {new Date().getFullYear()} NAU 22 GALERÍA CONTEMPORÁNEA</div>
          <div className="flex items-center gap-4 md:gap-6">
            <button
              type="button"
              className={
                locale === "es"
                  ? "text-background/90 hover:text-accent transition-colors"
                  : "text-background/40 hover:text-background/90 transition-colors"
              }
              onClick={() => setLocale("es")}
            >
              ESP
            </button>
            <span className="w-px h-3 bg-background/20" />
            <button
              type="button"
              className="text-background/40 hover:text-background/90 transition-colors"
              aria-label="Català (próximamente)"
            >
              CAT
            </button>
            <span className="w-px h-3 bg-background/20" />
            <button
              type="button"
              className={
                locale === "en"
                  ? "text-background/90 hover:text-accent transition-colors"
                  : "text-background/40 hover:text-background/90 transition-colors"
              }
              onClick={() => setLocale("en")}
            >
              ENG
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
