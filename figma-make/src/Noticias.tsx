import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { NEWS } from './data';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function Noticias() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredNews = NEWS[0];
  const listNews = NEWS.slice(1);

  const [hoveredNewsImage, setHoveredNewsImage] = useState<string | null>(null);

  const easeOut = [0.16, 1, 0.3, 1];

  return (
    <div className="w-full bg-background min-h-screen flex flex-col">
      
      {/* 1. HERO MONUMENTAL */}
      <section className="pt-32 md:pt-48 pb-16 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOut }}
        >
          <h1 className="font-serif text-6xl md:text-[9rem] lg:text-[11rem] leading-[0.8] tracking-tighter uppercase mb-8 md:mb-16">
            Journal
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-foreground/10 pb-12">
            <div className="md:col-span-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-3">
                Archivo y Actualidad
              </span>
            </div>
            <div className="md:col-span-7 font-sans text-lg md:text-xl text-foreground/80 leading-relaxed text-justify">
              Dossier de publicaciones, ferias internacionales, notas de prensa y adquisiciones institucionales de los artistas representados por Nau 22.
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. NOTICIA DESTACADA (FEATURED) - Layout Asimétrico */}
      <section className="pb-32 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          
          <div className="md:col-span-4 flex flex-col gap-6 md:mt-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: easeOut }}>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent flex items-center gap-3 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                Destacado
              </div>
              
              <div className="font-sans text-[10px] uppercase tracking-widest font-semibold text-foreground/50 mb-4 flex gap-4">
                <span>{featuredNews.date}</span>
                <span>—</span>
                <span className="text-accent">{featuredNews.category}</span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8 text-foreground">
                {featuredNews.title}
              </h2>
              
              <p className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed text-justify mb-8">
                {featuredNews.excerpt}
              </p>
              
              <Link to={`/noticias/${featuredNews.id}`} className="group inline-flex items-center gap-4 font-sans text-xs uppercase tracking-widest font-semibold text-foreground hover:text-accent transition-colors">
                <span>Leer Artículo Completo</span>
                <span className="w-8 h-px bg-foreground/20 group-hover:w-12 group-hover:bg-accent transition-all duration-500"></span>
              </Link>
            </motion.div>
          </div>

          <div className="md:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.3, ease: easeOut }}
            >
              <Link to={`/noticias/${featuredNews.id}`} className="block w-full aspect-[4/3] md:aspect-[16/10] bg-black/[0.02] p-6 md:p-12 overflow-hidden group cursor-pointer">
                <img 
                  src={featuredNews.image} 
                  alt={featuredNews.title} 
                  className="w-full h-full object-cover mix-blend-multiply grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-[2s] ease-out shadow-xl"
                />
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. ARCHIVO DE JOURNAL (Lista Tabular Rigurosa) */}
      <section className="pb-48 px-6 md:px-12 max-w-[1600px] mx-auto w-full relative">
        <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-16 border-b border-foreground/10 pb-4">
          Índice Cronológico
        </h3>

        <div className="flex flex-col relative z-10">
          {listNews.map((news) => (
            <Link 
              to={`/noticias/${news.id}`}
              key={news.id} 
              className="group flex flex-col md:flex-row md:items-center py-8 md:py-12 border-b border-foreground/10 hover:border-accent transition-colors duration-500 cursor-pointer relative overflow-hidden"
              onMouseEnter={() => {
                if (news.image) setHoveredNewsImage(news.image);
              }}
              onMouseLeave={() => setHoveredNewsImage(null)}
            >
              {/* Fondo sutil animado al hover */}
              <div className="absolute inset-0 bg-foreground/[0.01] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-center w-full">
                {/* Meta: Fecha y Categoría */}
                <div className="w-56 flex-shrink-0 mb-6 md:mb-0 flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {news.date}
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-widest font-semibold text-accent/80 group-hover:text-accent transition-colors">
                    {news.category}
                  </span>
                </div>
                
                {/* Título y Excerpt */}
                <div className="flex-grow pr-0 md:pr-16 transform group-hover:translate-x-4 transition-transform duration-500 ease-out">
                  <h4 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground/90 group-hover:text-foreground group-hover:italic transition-all duration-300 leading-[1.1] tracking-tight mb-4 pr-8">
                    {news.title}
                  </h4>
                  <p className="font-sans text-xs md:text-sm text-foreground/60 leading-relaxed max-w-3xl hidden md:block opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500">
                    {news.excerpt}
                  </p>
                </div>
                
                {/* Botón Acción */}
                <div className="mt-6 md:mt-0 flex items-center justify-end w-32">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:block">
                    Leer
                  </span>
                  <div className="md:hidden flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">
                    Leer <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Imagen Revelada al Hover (Float Effect) */}
        <AnimatePresence>
          {hoveredNewsImage && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.95, rotate: 2 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="fixed top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[35vw] aspect-[4/3] pointer-events-none z-0 hidden lg:block"
            >
              <div className="w-full h-full bg-background p-4 shadow-2xl">
                <img 
                  src={hoveredNewsImage} 
                  alt="News preview" 
                  className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>

    </div>
  );
}
