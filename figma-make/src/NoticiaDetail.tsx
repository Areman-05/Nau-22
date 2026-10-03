import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NEWS } from './data';
import { ArrowLeft } from 'lucide-react';

export default function NoticiaDetail() {
  const { id } = useParams();
  const newsItem = NEWS.find(n => n.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!newsItem) {
    return (
      <div className="pt-40 text-center font-sans text-sm uppercase tracking-widest text-muted-foreground">
        Entrada no encontrada. <Link to="/noticias" className="text-foreground border-b border-foreground hover:text-accent hover:border-accent transition-colors">Volver al Journal</Link>
      </div>
    );
  }

  const easeOut = [0.16, 1, 0.3, 1];

  return (
    <div className="w-full bg-background min-h-screen flex flex-col overflow-hidden">
      
      {/* 1. NAVEGACIÓN (VOLVER) */}
      <section className="pt-32 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: easeOut }}>
          <Link to="/noticias" className="group inline-flex items-center gap-4 text-foreground/50 hover:text-foreground transition-colors duration-500">
            <ArrowLeft size={18} strokeWidth={1} className="group-hover:-translate-x-2 transition-transform duration-500 ease-out" />
            <span className="font-sans text-xs uppercase tracking-[0.15em] font-semibold">Índice del Journal</span>
          </Link>
        </motion.div>
      </section>

      {/* 2. HEADER EDITORIAL (TITULAR MASIVO) */}
      <section className="pt-16 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Metadatos (Izquierda) */}
          <div className="md:col-span-3 flex flex-col gap-6 md:mt-4 border-t border-foreground/10 pt-4 md:border-none md:pt-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1, ease: easeOut }}>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">
                {newsItem.category}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {newsItem.date}
              </div>
            </motion.div>
          </div>

          {/* Titular (Derecha) */}
          <div className="md:col-span-9 md:col-start-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, ease: easeOut }}
              className="font-serif text-4xl md:text-6xl lg:text-[7rem] leading-[1] tracking-tight text-foreground pr-8 md:pr-0"
            >
              {newsItem.title}
            </motion.h1>
          </div>

        </div>
      </section>

      {/* 3. CUERPO DEL ARTÍCULO (El "Longform" Académico) */}
      <section className="pb-40 px-6 md:px-12 max-w-[1600px] mx-auto w-full border-t border-foreground/10 pt-24 md:pt-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">

          {/* Foto Principal (Si la hay) */}
          <div className="md:col-span-4 md:col-start-1">
            {newsItem.image ? (
              <motion.div 
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.2, ease: easeOut }}
                className="w-full aspect-[3/4] bg-muted overflow-hidden sticky top-40 shadow-xl"
              >
                <img 
                  src={newsItem.image} 
                  alt={newsItem.title} 
                  className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-[2s] ease-out" 
                />
              </motion.div>
            ) : (
              <div className="sticky top-40 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground border-l border-foreground/10 pl-6 hidden md:block">
                Nota de Prensa /<br/>Comunicado Oficial
              </div>
            )}
          </div>

          {/* Texto Curatorial (Lectura profunda) */}
          <div className="md:col-span-7 md:col-start-6 flex flex-col gap-12 font-sans text-base md:text-lg text-foreground/80 leading-relaxed text-justify">
            
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: easeOut }} className="font-sans text-xl md:text-2xl leading-relaxed text-foreground font-medium">
              {newsItem.excerpt}
            </motion.p>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: easeOut }} className="flex flex-col gap-8">
              <p>
                La decisión del jurado subraya el compromiso inquebrantable de la galería con prácticas que cuestionan la materialidad en la era contemporánea. Este reconocimiento no solo valida la trayectoria del artista, sino que consolida la posición de la institución en el ecosistema cultural europeo.
              </p>
              
              <div className="pl-6 border-l-2 border-foreground/20 my-8 py-2 font-serif text-3xl md:text-4xl italic text-foreground leading-snug">
                "El espacio deja de ser contenedor para convertirse en materia activa."
              </div>

              <p>
                El trabajo expuesto durante la última temporada ha provocado un debate necesario sobre cómo los espacios industriales obsoletos, como los del distrito 22@, pueden ser reprogramados a través del rigor curatorial. La obra pasará a formar parte de una retrospectiva itinerante que comenzará en Berlín a principios del próximo año.
              </p>

              <p>
                Agradecemos a las instituciones colaboradoras y, sobre todo, a la comunidad de coleccionistas que ha apoyado esta línea de investigación desde sus inicios. El catálogo razonado, coeditado con especialistas internacionales, ya está disponible para consulta en nuestro archivo.
              </p>
            </motion.div>
            
            {/* Meta Firma */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16 pt-8 border-t border-foreground/10 flex flex-col gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>Publicado por: Dirección Curatorial, Nau 22</span>
              <span>Referencia Archivo: {id?.toUpperCase()}-2026</span>
            </motion.div>

          </div>

        </div>
      </section>

    </div>
  );
}
