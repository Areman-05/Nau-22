"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { artists, collaborators, type Collaborator } from "@/data";
import { EnquireButton } from "@/components/EnquireButton";
import { useLocale } from "@/context/LocaleContext";
import { useIsClient } from "@/lib/useIsClient";

const fadeVariants = {
  initial: { opacity: 0, y: 10, filter: "blur(4px)" },
  enter: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: "blur(4px)",
    transition: { duration: 0.4, ease: "easeIn" as const },
  },
};

export default function ArtistasPage() {
  const { locale } = useLocale();
  const [view, setView] = useState<"artistas" | "colaboradores">("artistas");
  const [hoveredState, setHoveredState] = useState<{
    src: string;
    side: "left" | "right";
  } | null>(null);
  const ready = useIsClient();

  return (
    <div className="pt-8 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen flex flex-col items-center relative">
      <AnimatePresence>
        {hoveredState ? (
          <motion.div
            key={`${hoveredState.side}-${hoveredState.src}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`fixed top-0 bottom-0 w-[42%] h-screen pointer-events-none z-30 hidden md:flex items-center justify-center p-10 bg-white/80 backdrop-blur-md ${
              hoveredState.side === "left"
                ? "left-0 border-r border-foreground/5"
                : "right-0 border-l border-foreground/5"
            }`}
          >
            <div className="w-full max-w-md aspect-[3/4] shadow-2xl bg-muted overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hoveredState.src}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="flex items-center justify-center gap-6 md:gap-12 mb-20 md:mb-32">
          <div className="w-12 flex justify-end">
            <AnimatePresence mode="wait">
              {view === "colaboradores" ? (
                <motion.button
                  type="button"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  onClick={() => setView("artistas")}
                  className="text-foreground/50 hover:text-accent transition-colors p-2"
                  aria-label={locale === "es" ? "Artistas" : "Artists"}
                >
                  <ArrowLeft strokeWidth={1} size={40} />
                </motion.button>
              ) : null}
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.h1
              key={view}
              variants={fadeVariants}
              initial={ready ? "initial" : false}
              animate="enter"
              exit="exit"
              className="font-serif text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.8] tracking-tighter uppercase text-center w-64 md:w-auto"
            >
              {view}
            </motion.h1>
          </AnimatePresence>

          <div className="w-12 flex justify-start">
            <AnimatePresence mode="wait">
              {view === "artistas" ? (
                <motion.button
                  type="button"
                  initial={ready ? { opacity: 0, x: -10 } : false}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  onClick={() => {
                    setView("colaboradores");
                    setHoveredState(null);
                  }}
                  className="text-foreground/50 hover:text-accent transition-colors p-2"
                  aria-label={locale === "es" ? "Colaboradores" : "Collaborators"}
                >
                  <ArrowRight strokeWidth={1} size={40} />
                </motion.button>
              ) : null}
            </AnimatePresence>
          </div>
        </div>

        <div className="w-full max-w-4xl pt-4 md:pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={ready ? "initial" : false}
              animate="enter"
              exit="exit"
              variants={fadeVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 md:gap-y-6"
            >
              {view === "artistas"
                ? artists.map((person, index) => {
                    return (
                      <Link
                        key={person.slug}
                        href={`/artistas/${person.slug}`}
                        className="group flex items-center justify-between w-full border-b border-foreground/10 py-5 md:py-6 transition-colors duration-300 hover:border-accent/50"
                        onMouseEnter={() => {
                          if (!person.images[0]) return;
                          setHoveredState({
                            src: person.images[0].src,
                            side: index % 2 === 0 ? "right" : "left",
                          });
                        }}
                        onMouseLeave={() => setHoveredState(null)}
                      >
                        <div className="flex items-center gap-6 md:gap-8">
                          <span className="font-mono text-[10px] text-muted-foreground group-hover:text-accent transition-colors">
                            {(index + 1).toString().padStart(2, "0")}
                          </span>
                          <span className="text-lg md:text-xl lg:text-2xl font-sans font-semibold text-foreground transition-all duration-500 block uppercase tracking-tight group-hover:text-accent group-hover:translate-x-2">
                            {person.name}
                          </span>
                        </div>
                        <ArrowRight
                          strokeWidth={1.5}
                          size={20}
                          className="text-accent opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0"
                        />
                      </Link>
                    );
                  })
                : collaborators.map((person, index) => (
                    <ColaboradorItem key={person.slug} person={person} index={index} />
                  ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="hidden" aria-hidden="true">
        {artists.map((artist) =>
          artist.images[0] ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={artist.slug} src={artist.images[0].src} alt="" />
          ) : null,
        )}
      </div>
    </div>
  );
}

function ColaboradorItem({ person, index }: { person: Collaborator; index: number }) {
  const { locale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const bio1 = locale === "es" ? person.bio : person.bioEn;
  const bio2 = locale === "es" ? person.bio2 : person.bioEn2;

  return (
    <div className="border-b border-foreground/10 py-5 md:py-6 overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full group flex items-center justify-between transition-colors duration-300 cursor-pointer text-left"
      >
        <div className="flex items-center gap-6 md:gap-8">
          <span
            className={`font-mono text-[10px] transition-colors ${
              isOpen ? "text-accent" : "text-muted-foreground group-hover:text-foreground"
            }`}
          >
            {(index + 1).toString().padStart(2, "0")}
          </span>
          <span
            className={`text-lg md:text-xl lg:text-2xl font-sans font-semibold transition-all duration-500 block uppercase tracking-tight ${
              isOpen
                ? "text-accent translate-x-2"
                : "text-foreground group-hover:text-accent group-hover:translate-x-2"
            }`}
          >
            {person.name}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          className={
            isOpen
              ? "text-accent"
              : "text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
          }
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pl-12 md:pl-14 pt-8 pb-4">
              <div className="flex flex-col gap-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent flex items-center gap-3">
                  <span>{person.country}</span>
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  <span>
                    {locale === "es" ? "Desde" : "Since"} {person.year}
                  </span>
                </div>
                <div className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed text-justify max-w-[95%]">
                  <p className="mb-4">{bio1}</p>
                  <p>{bio2}</p>
                </div>
                <EnquireButton
                  variant="line"
                  className="mt-2 w-fit"
                  context={{ collaborator: person.name }}
                />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
