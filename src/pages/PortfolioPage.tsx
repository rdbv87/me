import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Search,
  ArrowLeft,
  Filter,
  X,
  Gamepad2
} from 'lucide-react';
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES, type ProjectCategory } from '../data/portfolioData';
import { ProjectCard } from '../components/portfolio/ProjectCard';

export const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxData, setLightboxData] = useState<{ isOpen: boolean; url: string; caption: string }>({
    isOpen: false,
    url: '',
    caption: ''
  });

  const filteredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter((proj) => {
      const matchesCategory = selectedCategory === 'all' || proj.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        proj.title.toLowerCase().includes(q) ||
        proj.tagline.toLowerCase().includes(q) ||
        proj.description.toLowerCase().includes(q) ||
        proj.engineOrTech.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const openLightbox = (url: string, caption: string) => {
    setLightboxData({ isOpen: true, url, caption });
  };

  const closeLightbox = () => {
    setLightboxData({ isOpen: false, url: '', caption: '' });
  };

  return (
    <div className="relative min-h-screen bg-[#030806] text-[#c7d5ce] overflow-x-hidden math-grid">
      
      {/* Top Gradient Line */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-linear-to-r from-emerald-500 via-cyan-400 to-emerald-400 z-50 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />

      {/* Glow Backdrops */}
      <div className="fixed -top-40 left-1/3 w-125 h-125 bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed top-1/2 -right-20 w-112.5 h-112.5 bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* --- HEADER NAVBAR --- */}
      <header className="sticky top-0 z-40 w-full border-b border-emerald-900/30 bg-[#040c08]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/50 border border-emerald-500/20 text-xs font-mono text-emerald-300 hover:border-emerald-400 hover:bg-emerald-900/40 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Inicio</span>
            </Link>

            <div className="hidden sm:flex items-center gap-2 border-l border-emerald-900/40 pl-3">
              <span className="font-display font-bold text-white text-sm sm:text-base tracking-tight">
                Roberto D. Bulnes
              </span>
              <span className="font-mono text-[10px] text-emerald-400/80 uppercase">
                / Portafolio
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`https://wa.me/50499351407?text=${encodeURIComponent('Hola Roberto, vi tu portafolio y me gustaría conversar sobre un proyecto.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500 hover:text-[#030806] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.981.536 1.839.818 2.796.818 3.179 0 5.766-2.587 5.767-5.767.001-3.18-2.585-5.803-5.767-5.803zm3.385 8.167c-.145.408-.847.781-1.183.829-.336.048-.756.096-2.428-.597-1.428-.593-2.339-2.035-2.41-2.13-.071-.095-.572-.76-.572-1.448 0-.688.358-1.026.488-1.169.13-.143.284-.179.378-.179.095 0 .19.002.273.007.087.005.203-.033.317.241.119.287.405 1.002.441 1.074.036.072.06.155.012.25-.048.096-.072.155-.143.239-.071.083-.15.186-.214.25-.072.072-.147.151-.063.295.084.143.372.614.799.995.55.49 1.014.642 1.157.714.143.071.226.06.31-.036.084-.096.358-.417.453-.56.095-.143.191-.12.322-.071.131.048.835.394.978.465.143.072.239.108.274.167.036.06.036.346-.109.754zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.174L2 22l4.981-1.306A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.15c-1.636 0-3.155-.494-4.434-1.34l-.318-.21-2.957.776.79-2.883-.223-.356A8.106 8.106 0 013.85 12c0-4.494 3.656-8.15 8.15-8.15 4.494 0 8.15 3.656 8.15 8.15 0 4.494-3.656 8.15-8.15 8.15z"/>
              </svg>
              <span>Contactar</span>
            </a>
          </div>

        </div>
      </header>

      {/* --- HERO / PORTFOLIO HEADER --- */}
      <section className="pt-16 pb-12 border-b border-emerald-900/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono text-xs mb-4">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>BUILDER & FULL-STACK ARCHITECT • PROYECTOS SELECCIONADOS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
              Plataformas SaaS, <br />
              <span className="bg-linear-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                IA Privada, Cloud & Gamedev
              </span>
            </h1>

            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              Explora soluciones de software en producción: plataformas SaaS B2B para logística y flotas (<strong>Movisol-Service</strong>), 
              arquitecturas de <strong>IA Privada con RAG</strong>, portales ciudadanos unificados, videojuegos en <strong>Godot Engine</strong> y pipelines 3D.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-[#091510]/80 border border-emerald-900/40">
              <span className="font-mono text-[11px] text-slate-400 block uppercase">Total Proyectos</span>
              <span className="text-2xl font-bold text-emerald-400">{PORTFOLIO_PROJECTS.length}</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#091510]/80 border border-emerald-900/40">
              <span className="font-mono text-[11px] text-slate-400 block uppercase">Full-Stack & Cloud</span>
              <span className="text-2xl font-bold text-emerald-400">
                {PORTFOLIO_PROJECTS.filter(p => p.category === 'web-cloud' || p.category === 'ai-sec').length}
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-[#091510]/80 border border-emerald-900/40">
              <span className="font-mono text-[11px] text-slate-400 block uppercase">Gamedev (Godot)</span>
              <span className="text-2xl font-bold text-cyan-400">
                {PORTFOLIO_PROJECTS.filter(p => p.category === 'gamedev').length}
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-[#091510]/80 border border-emerald-900/40">
              <span className="font-mono text-[11px] text-slate-400 block uppercase">Enfoque Principal</span>
              <span className="text-sm font-mono text-emerald-300 mt-1 block">Builder & SaaS</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEARCH & CATEGORY FILTERS --- */}
      <section className="py-8 border-b border-emerald-900/20 bg-[#050f0a]/50 sticky top-18 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-500 text-[#030907] font-bold shadow-[0_0_20px_rgba(16,185,129,0.35)]'
                      : 'bg-[#081710] border border-emerald-900/40 text-slate-300 hover:border-emerald-500/40 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por juego, tag, tech..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#081710] border border-emerald-900/40 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-hidden focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>
      </section>

      {/* --- PROJECTS FEED / GRID --- */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-24 glass-panel rounded-3xl border border-emerald-900/30 max-w-lg mx-auto p-8">
              <Filter className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white">No se encontraron proyectos</h3>
              <p className="text-slate-400 text-sm mt-2 font-mono">
                No hay resultados con la búsqueda "{searchQuery}". Intenta seleccionar otra categoría.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-6 px-5 py-2.5 rounded-xl bg-emerald-500 text-[#030907] font-bold text-xs hover:bg-emerald-400 transition-colors cursor-pointer"
              >
                Restablecer filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenLightbox={openLightbox}
                />
              ))}
            </div>
          )}

        </div>
      </main>

      {/* --- LIGHTBOX MODAL --- */}
      {lightboxData.isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full bg-[#05110b] border border-emerald-500/30 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-emerald-900/40">
              <span className="text-xs font-mono text-emerald-300">
                {lightboxData.caption || 'Vista previa de imagen'}
              </span>
              <button
                onClick={closeLightbox}
                className="p-1.5 rounded-lg bg-emerald-950/70 hover:bg-emerald-800/80 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 flex items-center justify-center bg-black">
              <img
                src={lightboxData.url}
                alt={lightboxData.caption}
                className="max-h-[75vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-emerald-900/30 bg-[#020604] text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Roberto D. Bulnes • Portafolio Técnico & Creativo
          </div>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-emerald-400 hover:underline">
              Inicio / CV
            </Link>
            <a
              href="https://justbobgames.itch.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff8080] hover:underline flex items-center gap-1"
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>justbobgames.itch.io</span>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};
