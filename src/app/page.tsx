"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getExhibitionsByStatus } from "@/data/exhibitions";

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = getExhibitionsByStatus("current");
  const currentExh = slides[currentIndex] ?? slides[0];
  if (!currentExh) return null;

  return (
    <div className="w-full bg-background min-h-[85vh] flex flex-col justify-center relative overflow-hidden pb-16">
      <button
        type="button"
        onClick={() =>
          setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
        className="absolute top-1/2 -translate-y-1/2 left-4 md:left-12 z-20 p-2 md:p-4 text-foreground hover:text-accent transition-colors"
        aria-label="Anterior"
      >
        <ArrowLeft strokeWidth={3} size={48} />
      </button>
      <button
        type="button"
        onClick={() =>
          setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }
        className="absolute top-1/2 -translate-y-1/2 right-4 md:right-12 z-20 p-2 md:p-4 text-foreground hover:text-accent transition-colors"
        aria-label="Siguiente"
      >
        <ArrowRight strokeWidth={3} size={48} />
      </button>

      <div className="max-w-[1400px] w-full mx-auto px-20 md:px-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentExh.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center"
          >
            <div className="w-full h-[55vh] md:h-[70vh] flex items-center justify-center">
              <Link href={`/programa/${currentExh.id}`} className="w-full h-full block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentExh.image}
                  alt={currentExh.title}
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </Link>
            </div>
            <div className="flex flex-col justify-center font-sans">
              <Link href={`/programa/${currentExh.id}`} className="group">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-2 text-foreground group-hover:text-accent transition-colors">
                  &lsquo;{currentExh.title}&rsquo;
                </h2>
                <p className="text-2xl md:text-3xl font-medium text-foreground mb-12">
                  de {currentExh.artists}
                </p>
                <div className="flex flex-col gap-2 text-lg md:text-xl text-foreground">
                  <p className="font-medium">{currentExh.date}</p>
                  <p className="font-bold uppercase tracking-wide">MIÉ — SÁB 12—20H</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
