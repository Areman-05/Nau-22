import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top and close menu when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Exposiciones', path: '/programa' },
    { name: 'Artistas', path: '/artistas' },
    { name: 'Noticias', path: '/noticias' },
    { name: 'Proyecto', path: '/proyecto' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      
      {/* Premium Editorial Navbar */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/90 backdrop-blur-md py-4 border-b border-foreground/5' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <div>
            <Link 
              to="/" 
              className="font-serif text-5xl md:text-6xl tracking-tighter leading-none hover:text-accent transition-colors block relative z-50 text-foreground"
            >
              nau 22
            </Link>
          </div>
          
          {/* Menu Toggle (Desktop & Mobile) */}
          <button 
            className="group hover:text-accent transition-colors z-50 p-2 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] font-semibold text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="hidden md:block overflow-hidden relative h-4 w-12">
              <span className={`absolute inset-0 flex items-center transition-transform duration-500 ease-out ${isMenuOpen ? '-translate-y-full' : 'translate-y-0'}`}>MENU</span>
              <span className={`absolute inset-0 flex items-center transition-transform duration-500 ease-out ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}>CERRAR</span>
            </span>
            <div className="relative w-6 h-6 flex items-center justify-center">
              <motion.div animate={{ rotate: isMenuOpen ? 45 : 0 }} className="absolute">
                {isMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </motion.div>
            </div>
          </button>
        </div>
      </nav>

      {/* Dropdown Pop-up Menu */}
      <AnimatePresence>
        {isMenuOpen && (
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
                  key={link.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    to={link.path} 
                    className={`font-serif text-3xl uppercase tracking-tighter hover:text-accent hover:italic transition-all duration-300 block ${location.pathname.startsWith(link.path) ? 'text-accent italic' : 'text-foreground'}`}
                  >
                    {link.name}
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
              <a href="mailto:info@nau22.com" className="hover:text-foreground transition-colors flex items-center justify-between group">
                <span>Contacto General</span>
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">↗</span>
              </a>
              <Link to="/proyecto" className="hover:text-foreground transition-colors flex items-center justify-between group">
                <span>Visita y Horarios</span>
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">↗</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Solo añadimos padding al main si NO estamos en el Home (porque el Home es Fullscreen) */}
      <main className={`flex-grow relative z-10 ${location.pathname === '/' ? '' : 'pt-24 md:pt-32'}`}>
        <React.Suspense fallback={null}>
          <Outlet />
        </React.Suspense>
      </main>

      {/* BRUTALIST TYPOGRAPHIC FOOTER */}
      <footer className="bg-foreground text-background pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Logo Gigante */}
          <div className="mb-24 border-b border-background/20 pb-16">
            <h2 className="font-serif text-[6rem] md:text-[12rem] lg:text-[15rem] leading-[0.75] tracking-tighter uppercase text-background/90 text-center md:text-left">
              Nau 22
            </h2>
          </div>

          {/* Grid Estricto de Datos */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 font-mono text-[10px] uppercase tracking-[0.2em] mb-32">
            
            {/* Ubicación */}
            <div className="md:col-span-3 flex flex-col gap-4">
              <span className="text-background/40">Ubicación</span>
              <p className="leading-relaxed text-background/90">
                Carrer de Pujades, 102<br/>
                08005 Poblenou, 22@<br/>
                Barcelona, España
              </p>
            </div>

            {/* Horarios */}
            <div className="md:col-span-3 flex flex-col gap-4">
              <span className="text-background/40">Horario de Salas</span>
              <p className="leading-relaxed text-background/90">
                Miércoles — Sábado<br/>
                12:00H — 20:00H<br/>
                Domingo — Martes: Cerrado
              </p>
            </div>

            {/* Contacto (Sin Iconos) */}
            <div className="md:col-span-3 flex flex-col gap-4">
              <span className="text-background/40">Contacto General</span>
              <a href="mailto:info@nau22.com" className="text-background/90 hover:text-accent transition-colors w-fit">
                INFO@NAU22.COM
              </a>
              <a href="tel:+34931234567" className="text-background/90 hover:text-accent transition-colors w-fit">
                +34 93 123 45 67
              </a>
            </div>

            {/* Institucional / Redes (Sin Iconos) */}
            <div className="md:col-span-3 flex flex-col gap-4">
              <span className="text-background/40">Plataformas</span>
              <a href="#" className="text-background/90 hover:text-accent transition-colors w-fit">
                INSTAGRAM
              </a>
              <a href="#" className="text-background/90 hover:text-accent transition-colors w-fit">
                ARTSY PORTAL
              </a>
              <a href="#" className="text-background/90 hover:text-accent transition-colors w-fit">
                JOURNAL (NEWSLETTER)
              </a>
            </div>
            
          </div>

          {/* Bottom bar: Copyright & Languages */}
          <div className="flex flex-col md:flex-row justify-between items-center font-sans text-xs uppercase tracking-[0.15em] font-semibold text-background/40 gap-6 md:gap-0">
            <div>&copy; 2026 NAU 22 GALERÍA CONTEMPORÁNEA</div>
            <div className="flex items-center gap-4 md:gap-6">
              <button className="text-background/90 hover:text-accent transition-colors">ESP</button>
              <span className="w-px h-3 bg-background/20"></span>
              <button className="text-background/40 hover:text-background/90 transition-colors">CAT</button>
              <span className="w-px h-3 bg-background/20"></span>
              <button className="text-background/40 hover:text-background/90 transition-colors">ENG</button>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
