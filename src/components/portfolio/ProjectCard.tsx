import React, { useState } from 'react';
import {
  ExternalLink,
  Play,
  Gamepad2,
  Volume2,
  VolumeX,
  Maximize2,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ProjectEntry } from '../../data/portfolioData';

interface ProjectCardProps {
  project: ProjectEntry;
  onOpenLightbox: (imageUrl: string, caption: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenLightbox }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showItchEmbed, setShowItchEmbed] = useState(false);

  return (
    <article className="glass-panel rounded-3xl border border-emerald-900/30 overflow-hidden flex flex-col justify-between group/card hover:border-emerald-500/40 hover:shadow-[0_15px_35px_-10px_rgba(16,185,129,0.2)] transition-all duration-300">
      
      {/* Top Media Header / Visual Display */}
      <div className="relative w-full aspect-video bg-black overflow-hidden group/media">
        {project.youtubeId ? (
          <div className="w-full h-full relative">
            <img
              src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center">
              <a
                href={project.liveDemoUrl || `https://youtu.be/${project.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-emerald-500 text-[#030907] flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.7)] hover:scale-110 active:scale-95 transition-all"
                title="Reproducir Showreel en YouTube"
              >
                <Play className="w-7 h-7 fill-current translate-x-0.5" />
              </a>
            </div>
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 border border-emerald-500/40 font-mono text-[10px] text-emerald-300 flex items-center gap-1">
              <Play className="w-3.5 h-3.5 text-red-400 fill-current" />
              <span>YouTube Video</span>
            </div>
          </div>
        ) : project.vimeoId ? (
          <div className="w-full h-full relative">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center">
              <a
                href={project.liveDemoUrl || `https://vimeo.com/${project.vimeoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-emerald-500 text-[#030907] flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.7)] hover:scale-110 active:scale-95 transition-all"
                title="Reproducir Showreel"
              >
                <Play className="w-7 h-7 fill-current translate-x-0.5" />
              </a>
            </div>
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 border border-emerald-500/40 font-mono text-[10px] text-emerald-300 flex items-center gap-1">
              <Play className="w-3.5 h-3.5" />
              <span>Vimeo Video</span>
            </div>
          </div>
        ) : showItchEmbed && project.itchUrl ? (
          <div className="w-full h-full relative bg-slate-950 flex flex-col items-center justify-center p-4">
            <p className="text-xs font-mono text-emerald-300 mb-2">Lanzando juego desde Itch.io...</p>
            <a
              href={project.itchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-500 text-[#030806] font-bold text-xs flex items-center gap-2 hover:bg-emerald-400"
            >
              <span>Jugar a Pantalla Completa en Itch.io</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setShowItchEmbed(false)}
              className="mt-3 text-[11px] font-mono text-slate-400 hover:text-white underline cursor-pointer"
            >
              Cerrar visor
            </button>
          </div>
        ) : (
          <div className="w-full h-full relative">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#05110b] via-black/20 to-black/30" />
            
            {/* Action buttons over thumbnail */}
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#030906]/85 border border-emerald-500/30 text-emerald-300 font-mono text-[11px] backdrop-blur-md">
                  {project.categoryLabel}
                </span>

                {project.itchUrl && (
                  <span className="px-2.5 py-1 rounded-full bg-[#fa5c5c]/20 border border-[#fa5c5c]/40 text-[#ff8080] font-mono text-[10px] flex items-center gap-1">
                    <Gamepad2 className="w-3 h-3" />
                    <span>Itch.io Game</span>
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between">
                {project.gallery && project.gallery.length > 0 && (
                  <button
                    onClick={() => onOpenLightbox(project.gallery![0].url, project.gallery![0].caption)}
                    className="p-2 rounded-xl bg-[#030906]/80 hover:bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 transition-colors flex items-center gap-1.5 text-xs font-mono backdrop-blur-md cursor-pointer"
                    title="Ver capturas en pantalla completa"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Galería ({project.gallery.length})</span>
                  </button>
                )}

                {project.itchUrl && (
                  <a
                    href={project.itchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#030806] font-bold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all"
                  >
                    <Gamepad2 className="w-3.5 h-3.5" />
                    <span>Jugar en Itch.io</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex flex-col grow justify-between">
        <div>
          
          {/* Header Metadata */}
          <div className="flex items-center justify-between gap-2 text-xs font-mono text-slate-400 mb-2">
            <span className="text-emerald-400/90 font-semibold">{project.role}</span>
            <span>{project.date}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover/card:text-emerald-300 transition-colors">
            <Link to={`/portfolio/${project.id}`}>
              {project.title}
            </Link>
          </h3>

          <p className="font-mono text-xs text-cyan-300/80 mt-1 mb-3">
            {project.tagline}
          </p>

          <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 mb-5">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.engineOrTech.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-md bg-[#07160f] border border-emerald-900/40 text-slate-300 font-mono text-[11px]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Mini Gallery thumbnails preview if available */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="mb-6 pt-4 border-t border-emerald-900/20">
              <span className="text-[11px] font-mono text-slate-400 block mb-2">
                Capturas de pantalla:
              </span>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {project.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => onOpenLightbox(img.url, img.caption)}
                    className="relative w-16 h-12 rounded-lg overflow-hidden border border-emerald-500/20 hover:border-emerald-400 shrink-0 cursor-pointer transition-all"
                  >
                    <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Audio Tracks if available */}
          {project.audioTracks && project.audioTracks.length > 0 && (
            <div className="mb-6 p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="p-2 rounded-lg bg-emerald-500 text-[#030907] hover:bg-emerald-400 cursor-pointer"
                >
                  {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <div>
                  <span className="text-xs font-mono text-emerald-300 block font-semibold">
                    {project.audioTracks[0].title}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">BGM / SFX Preview</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-emerald-900/30 flex items-center justify-between gap-3">
          <Link
            to={`/portfolio/${project.id}`}
            className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-semibold group-hover/card:translate-x-1 transition-all"
          >
            <span>Ver Ficha Completa</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-2">
            {project.itchUrl && (
              <a
                href={project.itchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-emerald-950/50 hover:bg-emerald-800/40 text-emerald-300 border border-emerald-500/30 transition-colors"
                title="Abrir en Itch.io"
              >
                <Gamepad2 className="w-4 h-4" />
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-cyan-950/50 hover:bg-cyan-800/40 text-cyan-300 border border-cyan-500/30 transition-colors"
                title="Ver Demo Enlace"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

      </div>

    </article>
  );
};
