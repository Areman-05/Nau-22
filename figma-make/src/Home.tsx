import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EXHIBITIONS, ARTISTS } from './data';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // DATA DE ALTA DENSIDAD
  const currentExh = EXHIBITIONS.find(e => e.status === 'current');
  const upcomingExh = EXHIBITIONS.find(e => e.status === 'upcoming') || EXHIBITIONS[1];
  const featuredArtists = ARTISTS.slice(0, 4); // 4 Artistas para la grilla
  
  const newsItems = [
    { id: 1, date: "15 Nov, 2026", category: "Premio", title: "Kaito Tanaka galardonado con el Premio de Artes Plásticas." },
    { id: 2, date: "02 Nov, 2026", category: "Adquisición", title: "El MACBA incorpora 'Somata I' a su colección permanente." },
    { id: 3, date: "28 Oct, 2026", category: "Feria", title: "Participación en Art Basel 2027, sector Statements." },
    { id: 4, date: "10 Oct, 2026", category: "Publicación", title: "Lanzamiento del catálogo 'Ruina Industrial' volumen II." },
  ];

  const easeOut = [0.16, 1, 0.3, 1];

  return (
    <div className="w-full bg-background min-h-screen flex flex-col overflow-hidden">
      
      {/* 1. HEADER MONUMENTAL Y MANIFIESTO */}
      <section className="pt-32 md:pt-48 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: easeOut }}>
          <h1 className="font-serif text-6xl md:text-[11rem] leading-[0.8] tracking-tighter uppercase mb-8 md:mb-16">
            Nau 22
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-foreground/10 pb-12 md:pb-20">
            <div className="md:col-span-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                Espacio de Arte Contemporáneo
              </span>
            </div>
            <div className="md:col-span-6 font-sans text-lg md:text-2xl text-foreground/80 leading-snug">
              Operamos en la fricción entre la ruina industrial y el rigor curatorial del distrito 22@ de Barcelona.
            </div>
            <div className="md:col-span-3 flex md:justify-end items-start mt-4 md:mt-0">
              <Link to="/info" className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-foreground hover:text-accent transition-colors border-b border-foreground/20 hover:border-accent pb-1 flex items-center gap-2">
                Conocer la Galería <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. HERO COLLAGE (Densidad visual: 3 elementos en 1) */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto w-full mb-32 md:mb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* Bloque Principal (Exposición Actual) */}
          <div className="md:col-span-8 flex flex-col group">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: easeOut }} className="w-full h-full flex flex-col">
              <Link to={`/programa/${currentExh?.id}`} className="w-full aspect-[4/3] md:aspect-[16/10] bg-black/[0.02] p-4 md:p-8 mb-6 overflow-hidden relative">
                <img src={currentExh?.image} alt={currentExh?.title} className="w-full h-full object-cover mix-blend-multiply grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-[2s] ease-out shadow-lg" />
                <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-background/90 backdrop-blur px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">
                  En Sala
                </div>
              </Link>
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <h2 className="font-serif text-4xl md:text-6xl tracking-tighter uppercase group-hover:text-accent transition-colors mb-2">{currentExh?.title}</h2>
                  <span className="font-sans text-sm tracking-widest uppercase font-semibold text-foreground/70">{currentExh?.artists}</span>
                </div>
                <ArrowUpRight size={32} strokeWidth={1} className="text-foreground/30 group-hover:text-accent transition-colors hidden md:block" />
              </div>
            </motion.div>
          </div>

          {/* Columna Derecha (Stack de 2 elementos) */}
          <div className="md:col-span-4 flex flex-col gap-12 md:gap-16 mt-16 md:mt-0">
            
            {/* Próxima Inauguración */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4, ease: easeOut }} className="group">
              <Link to={`/programa/${upcomingExh?.id}`} className="flex flex-col">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4 border-b border-foreground/10 pb-2">
                  Próxima Inauguración
                </div>
                <div className="w-full aspect-square bg-black/[0.02] p-4 mb-4 overflow-hidden">
                  <img src={upcomingExh?.image} alt={upcomingExh?.title} className="w-full h-full object-cover mix-blend-multiply grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-[2s] ease-out shadow-md" />
                </div>
                <h3 className="font-serif text-3xl uppercase tracking-tighter group-hover:text-accent transition-colors">{upcomingExh?.title}</h3>
                <span className="font-sans text-[10px] uppercase tracking-widest font-semibold text-foreground/60 mt-1">{upcomingExh?.artists}</span>
              </Link>
            </motion.div>

            {/* Artista Destacado Corto */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.6, ease: easeOut }} className="group">
              <Link to={`/artistas/${featuredArtists[0]?.id}`} className="flex items-center gap-6 border border-foreground/10 p-4 hover:border-accent transition-colors">
                <div className="w-20 h-20 bg-muted overflow-hidden flex-shrink-0">
                  <img src={featuredArtists[0]?.images[0]} alt={featuredArtists[0]?.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1s]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-1">Focus Artista</span>
                  <h3 className="font-serif text-2xl uppercase tracking-tighter">{featuredArtists[0]?.name}</h3>
                </div>
                <ArrowRight size={16} className="ml-auto text-foreground/30 group-hover:text-accent transition-colors" />
              </Link>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 3. ROSTER (Grilla de Artistas - Densidad de contenido visual) */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="px-6 md:px-12 max-w-[1600px] mx-auto w-full">
          <div className="flex justify-between items-end mb-16 border-b border-background/20 pb-6">
            <h2 className="font-serif text-4xl tracking-tight uppercase">Artistas Representados</h2>
            <Link to="/artistas" className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/50 hover:text-background transition-colors flex items-center gap-2">
              Ver Roster Completo <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredArtists.map((artist, idx) => (
              <motion.div 
                key={artist.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: easeOut }}
              >
                <Link to={`/artistas/${artist.id}`} className="group flex flex-col">
                  <div className="w-full aspect-[3/4] bg-background/5 overflow-hidden mb-6 relative">
                    <img src={artist.images[0]} alt={artist.name} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out" />
                  </div>
                  <h3 className="font-serif text-3xl uppercase tracking-tighter group-hover:text-accent transition-colors">{artist.name}</h3>
                  <span className="font-sans text-[10px] uppercase tracking-widest font-semibold text-background/50 mt-1">{artist.country}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ACTUALIDAD Y JOURNAL (Densidad textual) */}
      <section className="py-32 md:py-40 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          
          <div className="md:col-span-4 flex flex-col pr-0 md:pr-12">
            <h2 className="font-serif text-5xl md:text-6xl tracking-tighter uppercase mb-6">Journal</h2>
            <p className="font-sans text-sm text-foreground/70 leading-relaxed mb-12">
              Publicaciones, notas de prensa, adquisiciones institucionales y premios de los artistas representados por la galería.
            </p>
            <Link to="/noticias" className="group inline-flex items-center gap-4 text-foreground hover:text-accent transition-colors w-fit">
              <span className="font-sans text-xs uppercase tracking-[0.15em] font-semibold">Leer todas las entradas</span>
              <span className="h-[1px] w-8 bg-foreground/20 group-hover:bg-accent transition-colors duration-500"></span>
            </Link>
          </div>

          <div className="md:col-span-8 flex flex-col border-t border-foreground/10">
            {newsItems.map((news) => (
              <Link 
                to="/noticias" 
                key={news.id} 
                className="group flex flex-col md:flex-row md:items-baseline py-8 border-b border-foreground/10 hover:border-accent transition-colors duration-300"
              >
                <div className="w-48 flex-shrink-0 mb-4 md:mb-0 flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{news.date}</span>
                  <span className="font-sans text-[10px] uppercase tracking-widest font-semibold text-accent">{news.category}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground/90 group-hover:text-accent group-hover:italic transition-all duration-300 leading-snug pr-4">
                    {news.title}
                  </h3>
                </div>
                <div className="hidden md:block ml-8 text-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowUpRight size={20} strokeWidth={1.5} />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
