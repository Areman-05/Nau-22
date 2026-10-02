"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getExhibitionsByStatus } from "@/data/exhibitions";
import { useLocale } from "@/context/LocaleContext";
import type { Exhibition } from "@/data/types";

export default function ProgramPage() {
  const { locale } = useLocale();
  const currents = getExhibitionsByStatus("current");
  const past = getExhibitionsByStatus("past");

  const archiveByYear = past.reduce<Record<string, Exhibition[]>>((acc, exh) => {
    const year = exh.date.slice(-4);
    if (!acc[year]) acc[year] = [];
    acc[year].push(exh);
    return acc;
  }, {});
  const years = Object.keys(archiveByYear).sort().reverse();

  const firstFour = currents.slice(0, 4);
  const leftColumn = [firstFour[0], firstFour[2]].filter(Boolean);
  const rightColumn = [firstFour[1], firstFour[3]].filter(Boolean);

  const aspect: Record<string, string> = {
    [firstFour[0]?.id ?? ""]: "aspect-[3/4]",
    [firstFour[1]?.id ?? ""]: "aspect-[16/10]",
    [firstFour[2]?.id ?? ""]: "aspect-square",
    [firstFour[3]?.id ?? ""]: "aspect-[4/5]",
  };

  return (
    <div className="pt-8 pb-32 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen bg-background">
      <div className="mb-24 md:mb-40">
        <h1 className="font-serif text-6xl md:text-[10rem] lg:text-[12rem] leading-[0.8] tracking-tighter uppercase">
          {locale === "es" ? "Programa" : "Programme"}
        </h1>
      </div>

      {currents.length > 0 ? (
        <div className="mb-40 md:mb-64">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-24 gap-y-24 items-start">
            <div className="flex flex-col gap-24 md:gap-48">
              {leftColumn.map((exh, idx) => (
                <CurrentCard key={exh.id} exh={exh} aspect={aspect[exh.id]} showLive={idx === 0} />
              ))}
            </div>
            <div className="flex flex-col gap-24 md:gap-48 md:mt-64">
              {rightColumn.map((exh) => (
                <CurrentCard key={exh.id} exh={exh} aspect={aspect[exh.id]} alignEnd />
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <section className="pt-24">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-24 border-b border-foreground/10 pb-6">
          {locale === "es" ? "Archivo histórico" : "Historical archive"}
        </h2>
        <div className="flex flex-col">
          {years.map((year) => (
            <div
              key={year}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-b border-foreground/10 py-16 md:py-32"
            >
              <div className="md:col-span-4">
                <div className="sticky top-40 font-serif text-6xl md:text-8xl lg:text-[9rem] leading-none tracking-tighter text-foreground/20">
                  {year}
                </div>
              </div>
              <div className="md:col-span-8 flex flex-col gap-12 md:gap-24 mt-8 md:mt-0">
                {archiveByYear[year].map((exh) => (
                  <Link
                    key={exh.id}
                    href={`/programa/${exh.id}`}
                    className="group flex flex-col md:flex-row md:items-start gap-6 md:gap-10"
                  >
                    <div className="w-full md:w-48 shrink-0 aspect-[4/5] overflow-hidden bg-muted">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={exh.image}
                        alt={exh.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-6 mb-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          {exh.date.split(",")[0]}
                        </span>
                        <span className="h-px bg-foreground/10 flex-grow group-hover:bg-foreground transition-colors duration-700" />
                      </div>
                      <h3 className="font-sans text-2xl md:text-4xl lg:text-5xl uppercase tracking-tighter font-medium text-foreground mb-4 group-hover:italic transition-all duration-300">
                        {exh.title}
                      </h3>
                      <div className="font-sans text-sm uppercase tracking-[0.15em] font-semibold text-foreground/60 group-hover:text-accent transition-colors duration-300">
                        {exh.artists}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function CurrentCard({
  exh,
  aspect,
  showLive = false,
  alignEnd = false,
}: {
  exh: Exhibition;
  aspect: string | undefined;
  showLive?: boolean;
  alignEnd?: boolean;
}) {
  const { locale } = useLocale();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`group flex flex-col w-full md:w-[90%] ${alignEnd ? "md:ml-auto" : ""}`}
    >
      <Link href={`/programa/${exh.id}`} className="w-full">
        {showLive ? (
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-6 flex items-center gap-4">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            {locale === "es" ? "Exhibición actual" : "Current exhibition"}
          </div>
        ) : null}
        <div className={`w-full ${aspect ?? "aspect-[3/4]"} mb-6 overflow-hidden bg-muted`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={exh.image}
            alt={exh.title}
            className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
        </div>
        <h3 className="font-serif text-3xl md:text-5xl leading-none tracking-tighter uppercase mb-3 group-hover:text-accent transition-colors duration-500">
          {exh.title}
        </h3>
        <div className="font-sans text-sm uppercase tracking-[0.15em] font-semibold text-foreground/70">
          {exh.artists}
        </div>
      </Link>
    </motion.div>
  );
}
