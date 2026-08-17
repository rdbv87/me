import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Gamepad2,
  Play,
  ExternalLink,
  Code2,
  Maximize2,
  CheckCircle2,
  Calendar,
  UserCheck
} from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const project = PORTFOLIO_PROJECTS.find((p) => p.id === id || p.slug === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030806] text-[#c7d5ce] flex items-center justify-center p-6">
        <div className="text-center glass-panel p-10 rounded-3xl max-w-md border border-emerald-900/40">
          <h2 className="text-2xl font-bold text-white mb-2">Proyecto no encontrado</h2>
          <p className="text-slate-400 text-sm mb-6">El proyecto que buscas no existe o ha sido movido.</p>
          <Link
            to="/portfolio"
            className="px-6 py-3 rounded-xl bg-emerald-500 text-[#030806] font-bold text-xs inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Portafolio</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#030806] text-[#c7d5ce] overflow-x-hidden math-grid">
      
      {/* Top Gradient Line */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-linear-to-r from-emerald-500 via-cyan-400 to-emerald-400 z-50 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />

      {/* Glow Backdrops */}
      <div className="fixed -top-40 left-1/4 w-125 h-125 bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed top-1/2 -right-20 w-112.5 h-112.5 bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* --- HEADER NAVBAR --- */}
      <header className="sticky top-0 z-40 w-full border-b border-emerald-900/30 bg-[#040c08]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/portfolio')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/50 border border-emerald-500/20 text-xs font-mono text-emerald-300 hover:border-emerald-400 hover:bg-emerald-900/40 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Portafolio</span>
            </button>
            <span className="hidden sm:inline font-mono text-xs text-slate-400">
              / {project.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="text-xs font-mono text-slate-300 hover:text-emerald-400 px-3 py-1.5"
            >
              Inicio / CV
            </Link>

            <a
              href={`https://wa.me/50499351407?text=${encodeURIComponent(`Hola Roberto, estuve viendo tu proyecto ${project.title} y me gustaría ponerme en contacto.`)}`}
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

      {/* --- HERO BANNER --- */}
      <section className="pt-12 pb-16 border-b border-emerald-900/20">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 font-mono text-xs">
              {project.categoryLabel}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>{project.date}</span>
            </span>
            <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
              <UserCheck className="w-3.5 h-3.5" />
              <span>{project.role}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight">
            {project.title}
          </h1>

          <p className="mt-4 text-lg sm:text-xl font-mono text-cyan-300">
            {project.tagline}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {project.itchUrl && (
              <a
                href={project.itchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#030806] font-bold text-sm flex items-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all"
              >
                <Gamepad2 className="w-5 h-5" />
                <span>Jugar / Descargar en Itch.io</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 text-cyan-300 font-bold text-sm flex items-center gap-2 transition-all"
              >
                <Play className="w-4 h-4" />
                <span>Ver Video / Demo en Vivo</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 text-emerald-200 font-bold text-sm flex items-center gap-2 transition-all"
              >
                <Code2 className="w-4 h-4" />
                <span>Ver Repositorio GitHub</span>
              </a>
            )}
          </div>

        </div>
      </section>

      {/* --- MAIN CONTENT & MEDIA DISPLAY --- */}
      <main className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          
          {/* Main Media Showcase (Vimeo / YouTube / Hero Image) */}
          <div className="rounded-3xl overflow-hidden glass-panel border border-emerald-500/30 shadow-2xl p-2">
            {project.vimeoId ? (
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center relative">
                <iframe
                  src={`https://player.vimeo.com/video/${project.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                  className="w-full h-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title={project.title}
                />
              </div>
            ) : project.youtubeId ? (
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${project.youtubeId}`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={project.title}
                />
              </div>
            ) : (
              <div className="aspect-video w-full rounded-2xl overflow-hidden relative group">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {project.itchUrl && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                    <a
                      href={project.itchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 rounded-2xl bg-emerald-500 text-[#030907] font-bold text-base flex items-center gap-3 shadow-[0_0_35px_rgba(16,185,129,0.7)] hover:scale-105 transition-all"
                    >
                      <Gamepad2 className="w-6 h-6" />
                      <span>Abrir Juego en Itch.io</span>
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Description & Overview */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Acerca del Proyecto
              </h2>
              
              <div className="space-y-4 text-slate-300 leading-relaxed text-base">
                {project.longDescription ? (
                  project.longDescription.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))
                ) : (
                  <p>{project.description}</p>
                )}
              </div>

              {/* Key Features */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div className="pt-6">
                  <h3 className="text-lg font-bold text-white mb-4">
                    Características Principales
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {project.keyFeatures.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#06140e] border border-emerald-900/40">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-200">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              
              {/* Tech Stack */}
              <div className="p-6 rounded-2xl glass-panel border border-emerald-900/40">
                <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-4">
                  Motor & Tecnologías
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.engineOrTech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-[#05140d] border border-emerald-500/30 text-emerald-300 font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Highlights */}
              {project.technicalHighlights && (
                <div className="p-6 rounded-2xl glass-panel border border-cyan-900/40">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-4">
                    Aspectos Técnicos
                  </h3>
                  <ul className="space-y-3">
                    {project.technicalHighlights.map((hl, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-cyan-400 font-mono font-bold">›</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Itch.io Banner */}
              {project.itchUrl && (
                <div className="p-6 rounded-2xl bg-linear-to-br from-[#1b0a0a] to-[#0d1c14] border border-[#fa5c5c]/30">
                  <div className="flex items-center gap-3 mb-2 text-[#ff8080]">
                    <Gamepad2 className="w-6 h-6" />
                    <span className="font-bold text-sm">Disponible en Itch.io</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-4">
                    Juega la versión HTML5 en tu navegador o descarga la versión de escritorio.
                  </p>
                  <a
                    href={project.itchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-[#fa5c5c] hover:bg-[#ff6e6e] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Ir a página de Itch.io</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

            </div>
          </section>

          {/* Gallery Section */}
          {project.gallery && project.gallery.length > 0 && (
            <section className="pt-8 border-t border-emerald-900/20">
              <h2 className="text-2xl font-bold text-white mb-6">
                Galería de Capturas & Renders
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.gallery.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedImage(img.url)}
                    className="group rounded-2xl overflow-hidden glass-panel border border-emerald-900/40 hover:border-emerald-500/40 transition-all cursor-pointer"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <Maximize2 className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="p-4 bg-[#05110b]">
                      <p className="text-xs font-mono text-slate-300">{img.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>

      {/* Modal Image Zoom */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-emerald-400 p-2 font-mono text-sm"
            >
              Cerrar [ESC]
            </button>
            <img
              src={selectedImage}
              alt="Zoomed"
              className="max-h-[85vh] w-auto mx-auto object-contain rounded-2xl border border-emerald-500/40"
            />
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-emerald-900/30 bg-[#020604] text-xs font-mono text-slate-500">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Roberto D. Bulnes • Detalle de Proyecto
          </div>
          <div className="flex items-center gap-4">
            <Link to="/portfolio" className="text-emerald-400 hover:underline">
              ← Portafolio Completo
            </Link>
            <Link to="/" className="text-slate-400 hover:text-white">
              Inicio
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
};
