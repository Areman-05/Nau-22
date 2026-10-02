"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Mail, Menu, Phone, Send, X } from "lucide-react";
import { gallery } from "@/data/gallery";
import { useLocale } from "@/context/LocaleContext";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

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
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-background/90 backdrop-blur-md py-4" : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div>
            <Link
              href="/"
              className="font-serif text-5xl md:text-6xl tracking-tighter leading-none hover:text-accent transition-colors block relative z-50"
            >
              nau 22
            </Link>
          </div>

          <button
            type="button"
            className="text-foreground hover:text-accent transition-colors z-50 p-2 flex items-center gap-3 font-sans text-sm uppercase tracking-[0.15em] font-semibold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span className="hidden md:block">{isMenuOpen ? (locale === "es" ? "Cerrar" : "Close") : "Menu"}</span>
            {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-24 md:top-32 right-6 md:right-12 w-64 bg-background border border-foreground/10 shadow-2xl z-40 p-8 flex flex-col gap-6"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 + 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={link.path}
                  className={`font-sans text-sm uppercase tracking-[0.15em] font-semibold hover:text-accent transition-colors block ${
                    pathname.startsWith(link.path) ? "text-accent" : "text-foreground"
                  }`}
                >
                  {locale === "es" ? link.name : link.nameEn}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-4 pt-6 border-t border-foreground/10 font-sans text-xs uppercase tracking-[0.2em] text-foreground/50 flex flex-col gap-4"
            >
              <a href={`mailto:${gallery.email}`} className="hover:text-foreground transition-colors">
                {locale === "es" ? "Contacto" : "Contact"}
              </a>
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
    <footer className="bg-foreground text-background pt-16 pb-8 px-6 md:px-12 mt-24">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 font-sans text-sm uppercase tracking-[0.15em] font-semibold mb-16">
        <div>
          <span className="text-background/50 block mb-4">
            {locale === "es" ? "Ubicación" : "Location"}
          </span>
          <p className="leading-relaxed text-background">
            {gallery.addressLine}
            <br />
            {gallery.postalCode} {gallery.neighborhood}
            <br />
            {gallery.city}
          </p>
        </div>
        <div>
          <span className="text-background/50 block mb-4">
            {locale === "es" ? "Horarios de visita" : "Visiting hours"}
          </span>
          <p className="leading-relaxed text-background">
            {locale === "es" ? "Miércoles — Sábado" : "Wednesday — Saturday"}
            <br />
            12:00H — 20:00H
            <br />
            <span className="text-background/50">
              {locale === "es" ? gallery.closed.es : gallery.closed.en}
            </span>
          </p>
        </div>
        <div>
          <span className="text-background/50 block mb-4">
            {locale === "es" ? "Contacto" : "Contact"}
          </span>
          <div className="flex flex-col gap-4">
            <a href={`mailto:${gallery.email}`} className="flex items-center gap-3 text-background w-fit">
              <Mail size={16} className="text-accent" /> {gallery.email}
            </a>
            <a href={`tel:${gallery.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-background w-fit">
              <Phone size={16} className="text-accent" /> {gallery.phone}
            </a>
          </div>
        </div>
        <div>
          <span className="text-background/50 block mb-4">
            {locale === "es" ? "Redes" : "Social"}
          </span>
          <div className="flex flex-col gap-4">
            <a
              href={gallery.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-background w-fit"
            >
              <InstagramIcon className="text-accent" /> Instagram
            </a>
            <a href="#" className="flex items-center gap-3 text-background w-fit">
              <TwitterIcon className="text-accent" /> Twitter
            </a>
            <a href="#" className="flex items-center gap-3 text-background w-fit">
              <ExternalLink size={16} className="text-accent" /> Artsy
            </a>
            <a href={`mailto:${gallery.email}`} className="flex items-center gap-3 text-background w-fit">
              <Send size={16} className="text-accent" /> Newsletter
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-background/20 font-sans text-xs uppercase tracking-[0.15em] font-semibold text-background/50 gap-6 md:gap-0">
        <div>© {new Date().getFullYear()} NAU 22 GALERÍA CONTEMPORÁNEA</div>
        <div className="flex items-center gap-4 md:gap-6">
          <button
            type="button"
            className={
              locale === "es"
                ? "text-background hover:text-accent transition-colors"
                : "text-background/50 hover:text-background transition-colors"
            }
            onClick={() => setLocale("es")}
          >
            ESP
          </button>
          <span className="w-px h-3 bg-background/20" />
          <button
            type="button"
            className="text-background/50 hover:text-background transition-colors"
            aria-label="Català (próximamente)"
          >
            CAT
          </button>
          <span className="w-px h-3 bg-background/20" />
          <button
            type="button"
            className={
              locale === "en"
                ? "text-background hover:text-accent transition-colors"
                : "text-background/50 hover:text-background transition-colors"
            }
            onClick={() => setLocale("en")}
          >
            ENG
          </button>
        </div>
      </div>
    </footer>
  );
}
