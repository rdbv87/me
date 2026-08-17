import { useState, useEffect } from 'react';
import {
  Cpu,
  Server,
  Cloud,
  ShieldCheck,
  Film,
  ExternalLink,
  Mail,
  Phone,
  MessageSquare,
  Sparkles,
  Code2,
  Play,
  GraduationCap,
  Copy,
  Check
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Roberto D. Bulnes",
  title: "Ingeniero Mecatrónico & Líder de Infraestructura TI / Cloud",
  bio: "Ingeniero Mecatrónico con más de 10 años de experiencia transformando infraestructuras críticas, orquestando servicios en la nube (AWS, Azure, GCP), Data Centers de misión especial, ciberseguridad y liderando gobernanza tecnológica. Además, Artista 3D y desarrollador con pasión por la convergencia entre computación, automatización e innovación visual.",
  email: "rdbv87@gmail.com",
  phoneWhatsapp: "+504 9935-1407",
  phoneDirect: "+504 8928-2485",
  location: "Honduras",
  github: "https://github.com/rdbv87",
  demoReel: "https://vimeo.com/manage/videos/853432693"
};

export const SECTIONS = [
  { id: 'hero', label: 'Inicio' },
  { id: 'overview', label: 'Especialidades' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'portfolio', label: 'Portafolio 3D & Tech' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'education', label: 'Formación' },
  { id: 'contact', label: 'Contacto' },
];

export const METRICS = [
  { value: "10+", label: "Años de Experiencia", subtext: "En Cloud & Telecom" },
  { value: "200+", label: "Usuarios Gestionados", subtext: "Help Desk & Cloud AD" },
  { value: "3+", label: "Data Centers Críticos", subtext: "Defensa & Gobierno" },
  { value: "100%", label: "Orientación a Resultados", subtext: "Arquitectura Resiliente" }
];

export const MARQUEE_TECH = [
  "AWS", "Microsoft Azure", "Google Cloud Platform", "Terraform", "FortiOS & UTM",
  "ReactJS", "Node.js", "Docker / Jenkins", "Python", "GDScript", "Godot 4.4+",
  "Autodesk Maya", "Foundry Nuke", "Redshift", "Arnold", "ShotGrid",
  "PostgreSQL", "MSSQL Server", "Oracle DB", "Linux (Arch, Debian)", "Asterisk IP-PBX"
];

export const EXPERIENCES = [
  {
    period: "2025 – Presente",
    role: "Coordinador de Infotecnología UFT-SINAP",
    company: "Instituto de la Propiedad",
    category: "Gobierno & Transformación Digital",
    badge: "Actual",
    description: "Planificación, gestión y supervisión de proyectos tecnológicos e institucionales orientados a la modernización y transformación digital.",
    highlights: [
      "Coordinación de procesos de auditoría técnica y bases de datos registrales.",
      "Centralización y gobernanza de servicios corporativos de TI a escala nacional.",
      "Implementación de nuevas arquitecturas e infraestructuras de misión crítica.",
      "Supervisión de plataformas de propiedad intelectual, catastro territorial y cartografía."
    ],
    tech: ["Gobernanza TI", "Auditoría de BD", "Catastro & SIG", "Seguridad de Datos", "Infraestructura"]
  },
  {
    period: "2024 – 2025",
    role: "Subcontratista para Desarrollo de Infraestructura de Datos",
    company: "Licitación Pública de la E.N.A.G",
    category: "Infraestructura & Telecom",
    description: "Desarrollo integral de la infraestructura de datos y telecomunicaciones en el proyecto de restauración de las instalaciones de la Empresa Nacional de Artes Gráficas.",
    highlights: [
      "Implementación de Core de Comunicaciones de alto rendimiento.",
      "Diseño y despliegue del sistema integral de videovigilancia y CCTV.",
      "Configuración de políticas de seguridad informática perimetral y segmentación de red."
    ],
    tech: ["Core Switching", "CCTV IP", "Seguridad Perimetral", "Cableado Estructurado"]
  },
  {
    period: "2022 – 2024",
    role: "Artista de Iluminación y Composición 3D",
    company: "Freelance / Industria de Animación",
    category: "CGI & 3D Production",
    description: "Especialización profesional y trabajo en pipelines de animación y renderizado para producciones audiovisuales internacionales.",
    highlights: [
      "Participación de 7+ meses en proyectos como 'Me & Mickey Vlogs' de Disney Jr.",
      "Flujos de trabajo avanzados en Maya, Nuke, Arnold, Redshift y gestión de activos con ShotGrid.",
      "Producción de Demo Reel con técnicas de iluminación fotorrealista y estilizada."
    ],
    tech: ["Autodesk Maya", "Foundry Nuke", "Arnold", "Redshift", "ShotGrid", "Color Grading"],
    link: "https://vimeo.com/manage/videos/853432693"
  },
  {
    period: "2016 – 2022",
    role: "Director de Modernización y T.I.",
    company: "Instituto Hondureño de Turismo",
    category: "Dirección Tecnológica",
    description: "Liderazgo de la transformación tecnológica y operativa institucional de principio a fin.",
    highlights: [
      "Reestructuración total de la infraestructura de red: cableado estructurado, UTM Fortigate y políticas corporativas.",
      "Migración institucional integral hacia Microsoft 365 y Azure Active Directory.",
      "Implementación de central telefónica VoIP Asterisk con Grandstream.",
      "Despliegue de plataforma centralizada de Help Desk para 200+ funcionarios."
    ],
    tech: ["Azure AD", "Microsoft 365", "FortiGate UTM", "Asterisk VoIP", "Help Desk ITSM"]
  },
  {
    period: "2014 – 2016",
    role: "Asesor para el Fortalecimiento de las TICs",
    company: "PNUD / USAID & Alcaldía Municipal de Tela",
    category: "Consultoría Internacional",
    description: "Diseño y modernización de redes de telecomunicaciones y analítica de datos geoespaciales para proyectos de impacto social.",
    highlights: [
      "Diseño y puesta en marcha de la infraestructura de comunicaciones municipal.",
      "Asistencia técnica a USAID/PNUD como Analista de Geodata en el proyecto de prevención del crimen CPTED."
    ],
    tech: ["Geodata SIG", "Telecomunicaciones", "Redes Metropolitanas", "Análisis de Datos"]
  },
  {
    period: "2012 – 2014",
    role: "Ingeniero de I.T. & Redes",
    company: "Secretaría de Defensa Nacional / Special Op. Command South",
    category: "Misión Crítica & Seguridad",
    description: "Diseño, implementación y administración operativa del Data Center en base de operaciones especiales.",
    highlights: [
      "Administración y hardening de servidores en ambientes de alta seguridad.",
      "Soporte directo a operaciones tácticas y equipo de seguridad informática."
    ],
    tech: ["Data Center Ops", "PICB / SSE", "Hardening de Servidores", "Ciberdefensa"]
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "Cloud, Servidores & DevOps",
    icon: Cloud,
    skills: ["Microsoft Azure (ASM/ARM)", "AWS (Elastic Beanstalk, EC2, S3)", "Google Cloud Platform", "Terraform (IaC)", "Jenkins CI/CD", "Git / GitLab / GitHub", "Jira", "SVN", "Linux (Arch, Debian)", "Windows Server"]
  },
  {
    category: "Redes, Seguridad & Telefonía",
    icon: ShieldCheck,
    skills: ["FortiOS & Firewalls FortiGate", "Asterisk IP-PBX", "Grandstream VoIP", "CCTV & Seguridad Física", "Auditoría de Sistemas", "Contraterrorismo Cibernético", "Cableado Estructurado"]
  },
  {
    category: "Desarrollo de Software & BD",
    icon: Code2,
    skills: ["ReactJS", "JavaScript / TypeScript", "HTML5 & CSS3 / SASS", "Node.js", "PHP", "GDScript (Godot 4.4+)", "SQL Server", "Oracle DB", "MySQL", "PostgreSQL", "Web3 & DApps"]
  },
  {
    category: "Producción 3D & Pipeline Gráfico",
    icon: Film,
    skills: ["Autodesk Maya", "Foundry Nuke", "Redshift Renderer", "Arnold Render", "Autodesk ShotGrid", "Katana", "Cinema 4D", "Houdini (Fundamentos)", "Iluminación & Composición"]
  }
];

export const EDUCATION_ITEMS = [
  {
    year: "2009",
    degree: "Ingeniería Mecatrónica",
    institution: "Universidad Tecnológica Centroamericana (UNITEC)",
    details: "Integración interdisciplinaria de control automático, electrónica, mecánica y sistemas computacionales."
  },
  {
    year: "2012",
    degree: "Maestría en Dirección Empresarial y Logística (Inconclusa)",
    institution: "Universidad Tecnológica Centroamericana",
    details: "Formación en optimización de operaciones, gestión de cadena de suministro y gerencia estratégica."
  },
  {
    year: "2025",
    degree: "Inteligencia Artificial aplicada a Registros Públicos",
    institution: "AECID (Cooperación Española)",
    details: "Modelos de automatización y análisis documental inteligente en el sector público."
  },
  {
    year: "2023 - 2024",
    degree: "The Complete Full-Stack Web Development Bootcamp",
    institution: "London App Brewery - Dr. Angela Yu",
    details: "Stack MERN/PERN, Web3, APIs REST, Node.js, React, PostgreSQL y arquitectura cloud."
  },
  {
    year: "2022 - 2024",
    degree: "Shading, Lighting, and Rendering with Arnold for Maya & Nuke",
    institution: "Udemy Academy (Arvid Schneider)",
    details: "Flujos de trabajo profesionales de CG Lighting y Render Pass Compositing."
  },
  {
    year: "2012 - 2013",
    degree: "Especializaciones Militares & Ciberseguridad",
    institution: "Special Op. Command South (Miami, FL) & Cyber Security Associates",
    details: "Intelligence preparation PICB, Sensitive Site Exploitation, y Contraterrorismo cibernético."
  }
];

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const typewriterPhrases = [
    "Ingeniero en Mecatrónica.",
    "Líder de Infraestructura TI & Cloud.",
    "Especialista en Automatización & Datos.",
    "Artista de Iluminación 3D & Composición."
  ];

  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIdx, setPhraseIdx] = useState(0);

  // Typewriter effect logic
  useEffect(() => {
    const fullPhrase = typewriterPhrases[phraseIdx];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullPhrase.substring(0, currentText.length + 1));
        if (currentText.length === fullPhrase.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullPhrase.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setPhraseIdx((prev) => (prev + 1) % typewriterPhrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIdx]);

  // ScrollSpy for Side Dot Navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sec of SECTIONS) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030806] text-[#c7d5ce] overflow-x-hidden math-grid">
      
      {/* Top Emerald Gradient Line */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-linear-to-r from-emerald-500 via-cyan-400 to-emerald-400 z-50 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />

      {/* Glow Backdrops */}
      <div className="fixed -top-40 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed top-1/2 -right-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* --- HEADER / NAVBAR --- */}
      <header className="sticky top-0 z-40 w-full border-b border-emerald-900/30 bg-[#040c08]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-mono font-bold text-lg shadow-[0_0_20px_rgba(16,185,129,0.35)] group-hover:scale-105 transition-transform">
              RB
            </div>
            <div>
              <span className="font-display font-bold text-white text-base tracking-tight block">
                Roberto D. Bulnes
              </span>
              <span className="font-mono text-[11px] text-emerald-400/80 tracking-wide uppercase block">
                Ing. Mecatrónica • IT Ops
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {SECTIONS.slice(1).map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className={`transition-colors hover:text-emerald-400 cursor-pointer ${
                  activeSection === sec.id ? 'text-emerald-400 font-semibold' : 'text-slate-400'
                }`}
              >
                {sec.label}
              </button>
            ))}
          </nav>

          {/* CTA Action */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/50499351407?text=${encodeURIComponent('Hola Roberto, vi tu portafolio y me gustaría ponerme en contacto.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500 hover:text-[#030806] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-200"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Contactar WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* --- SIDE DOT NAVIGATION (aceworkflow.io signature) --- */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3 pointer-events-none">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <div key={sec.id} className="flex items-center justify-end group pointer-events-auto">
              <span
                className={`font-mono text-[10px] uppercase tracking-widest mr-3 px-2.5 py-1 rounded-md transition-all duration-200 pointer-events-none select-none ${
                  isActive
                    ? 'opacity-100 translate-x-0 bg-emerald-950/90 text-emerald-300 border border-emerald-500/30 shadow-sm'
                    : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 bg-[#091510]/90 text-slate-300 border border-emerald-900/30'
                }`}
              >
                {sec.label}
              </span>
              <button
                onClick={() => scrollTo(sec.id)}
                aria-label={`Ir a ${sec.label}`}
                className="w-7 h-7 flex items-center justify-center relative cursor-pointer"
              >
                <div
                  className={`transition-all duration-300 rounded-full ${
                    isActive
                      ? 'w-2 h-7 bg-linear-to-b from-emerald-400 to-teal-300 shadow-[0_0_12px_rgba(16,185,129,0.7)]'
                      : 'w-1.5 h-1.5 bg-slate-600 group-hover:bg-emerald-400 group-hover:h-3'
                  }`}
                />
              </button>
            </div>
          );
        })}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative pt-24 pb-20 md:pt-32 md:pb-28 border-b border-emerald-900/20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono text-xs mb-8 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span>DISPONIBLE PARA PROYECTOS & CONSULTORÍA TI / 3D</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.08] max-w-5xl mx-auto">
            Arquitectura Tecnológica, <br className="hidden sm:block" />
            <span className="bg-linear-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Infraestructura Crítica
            </span> & Creación Digital.
          </h1>

          {/* Typewriter subtitle */}
          <div className="h-10 mt-6 flex items-center justify-center font-mono text-lg sm:text-xl text-emerald-300">
            <span className="text-slate-400 mr-2">&gt;</span>
            <span>{currentText}</span>
            <span className="inline-block w-2.5 h-5 bg-emerald-400 ml-1 animate-blink" />
          </div>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollTo('experience')}
              className="px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#030907] font-semibold text-sm transition-all duration-200 shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.55)] hover:-translate-y-0.5"
            >
              Explorar Experiencia
            </button>
            <button
              onClick={() => scrollTo('portfolio')}
              className="px-7 py-3.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 text-emerald-200 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Play className="w-4 h-4 text-emerald-400" />
              <span>Ver Portafolio & Reel</span>
            </button>
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {METRICS.map((metric, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#091510]/80 border border-emerald-900/30 backdrop-blur-sm text-left hover:border-emerald-500/40 transition-colors"
              >
                <div className="font-bold text-3xl sm:text-4xl text-emerald-400">
                  {metric.value}
                </div>
                <div className="font-semibold text-xs text-slate-200 mt-1">
                  {metric.label}
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                  {metric.subtext}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- TECH MARQUEE (Infinite Loop) --- */}
      <section className="py-8 border-b border-emerald-900/20 bg-[#050e09]/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-4 flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-400/80 font-semibold flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            Stack Tecnológico & Ecosistema de Producción
          </p>
        </div>
        <div className="relative w-full overflow-hidden mask-gradient">
          <div className="flex animate-marquee gap-6 items-center">
            {[...MARQUEE_TECH, ...MARQUEE_TECH].map((tech, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-xs font-mono text-slate-300 whitespace-nowrap flex items-center gap-2 hover:border-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OVERVIEW / THE PILLARS --- */}
      <section id="overview" className="py-24 border-b border-emerald-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              Disciplinas Nucleares
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              Donde la ingeniería mecatrónica se une a la infraestructura digital.
            </h2>
            <p className="text-slate-400 mt-4 text-sm sm:text-base">
              Una trayectoria forjada en resolver problemas complejos de infraestructura de misión crítica, modernización institucional e industrias creativas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="p-8 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                  <Server className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-emerald-400">01 / ARQUITECTURA</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-3">Infraestructura & Cloud</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Implementación de Data Centers de defensa y gubernamentales, UTM Fortigate, redes de fibra/cobre, y migración hacia Microsoft Azure AD, AWS y Google Cloud.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-emerald-900/30 font-mono text-xs text-slate-400">
                10+ años liderando redes & alta disponibilidad
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-cyan-400">02 / GOBERNANZA</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-3">Gobernanza TI & Ciberdefensa</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Dirección de proyectos de modernización estatal, auditorías de bases de datos, sistemas registrales de propiedad, normativas de seguridad y optimización de flujos con Help Desk.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-emerald-900/30 font-mono text-xs text-slate-400">
                Formación en Miami FL (Special Op. Command South)
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                  <Film className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-emerald-400">03 / CREATIVIDAD TÉCNICA</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-3">Producción 3D & Desarrollo</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Iluminación y composición CG con Maya, Nuke, Arnold y Redshift (Disney Jr.). Desarrollo de software full-stack con React, Node, y lógica en Godot Engine.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-emerald-900/30 font-mono text-xs text-slate-400">
                Experiencia en producciones internacionales
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION (Chronological Timeline) --- */}
      <section id="experience" className="py-24 border-b border-emerald-900/20 bg-[#030906]/70">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                Trayectoria Profesional
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                Experiencia & Liderazgo
              </h2>
            </div>
            <div className="text-slate-400 font-mono text-xs">
              Última actualización: 2026
            </div>
          </div>

          <div className="relative border-l border-emerald-900/40 pl-6 sm:pl-10 ml-2 sm:ml-4 space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-7.75 sm:-left-11.75 top-1.5 w-4 h-4 rounded-full bg-[#030806] border-2 border-emerald-400 group-hover:scale-125 group-hover:bg-emerald-400 group-hover:shadow-[0_0_12px_#10b981] transition-all" />

                {/* Experience Box */}
                <div className="p-6 sm:p-8 rounded-2xl glass-panel glass-panel-hover">
                  
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                      {exp.badge && (
                        <span className="font-mono text-[10px] uppercase font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-500/40 px-2.5 py-0.5 rounded-full animate-pulse">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs text-slate-400">
                      {exp.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-emerald-300/90 font-medium text-sm mt-0.5 mb-4">
                    {exp.company}
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="text-xs sm:text-sm text-slate-300/90 flex items-start gap-2.5">
                        <span className="text-emerald-400 mt-1 font-mono font-bold">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-emerald-900/30">
                    {exp.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-[#05120c] border border-emerald-900/40 text-slate-300 font-mono text-[11px]"
                      >
                        {t}
                      </span>
                    ))}

                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 ml-auto text-xs text-cyan-400 hover:text-cyan-300 font-mono underline underline-offset-4"
                      >
                        <span>Demo Reel</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO & 3D / TECH SHOWCASE --- */}
      <section id="portfolio" className="py-24 border-b border-emerald-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              Portafolio Destacado
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              Proyectos de CGI 3D & Arquitecturas de Software
            </h2>
            <p className="text-slate-400 mt-4 text-sm sm:text-base">
              Demostración de habilidades en flujos de trabajo de renderizado, composición de iluminación y diseño de sistemas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* 3D Reel Feature */}
            <div className="p-8 rounded-3xl glass-panel border border-emerald-500/30 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/60 border border-cyan-500/40 text-cyan-300">
                    CGI & Lighting Demo
                  </span>
                  <Film className="w-5 h-5 text-emerald-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  Lighting & Compositing Showreel
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Muestra de habilidades en iluminación con Arnold y Redshift para Maya, composición en Foundry Nuke y gestión de pipelines en proyectos animados (incluyendo Disney Jr. 'Me & Mickey Vlogs').
                </p>

                {/* Video Card Preview */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-emerald-900/50 aspect-video flex items-center justify-center group/video shadow-2xl">
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/40 opacity-80" />
                  
                  <div className="absolute inset-0 math-grid-dense opacity-40" />

                  <div className="relative z-10 text-center p-6">
                    <a
                      href="https://vimeo.com/manage/videos/853432693"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 rounded-full bg-emerald-500 text-[#030907] flex items-center justify-center mx-auto mb-4 hover:scale-110 shadow-[0_0_30px_rgba(16,185,129,0.7)] transition-transform duration-200"
                    >
                      <Play className="w-7 h-7 fill-current translate-x-0.5" />
                    </a>
                    <p className="font-semibold text-white text-base">
                      Reproducir Demo Reel en Vimeo
                    </p>
                    <p className="font-mono text-xs text-emerald-300 mt-1">
                      ID: 853432693 • Maya / Nuke / Redshift
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-emerald-900/30 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-400">
                  Herramientas: Maya, Nuke, Arnold, ShotGrid
                </span>
                <a
                  href="https://vimeo.com/manage/videos/853432693"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  <span>Abrir enlace</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Systems & Architecture Feature */}
            <div className="p-8 rounded-3xl glass-panel border border-cyan-500/20 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                    Infraestructura & Desarrollo
                  </span>
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  Modernización de Core & Cloud Stack
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Arquitectura integral de infraestructura de red institucional y desarrollo de sistemas de automatización web y scripting.
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[#06140e] border border-emerald-900/40">
                    <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold mb-1">
                      <Server className="w-4 h-4" />
                      <span>Data Center & Redes Seguras</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Topologías de alta disponibilidad con cortafuegos FortiGate UTM, routing avanzado, VoIP Asterisk y segmentación VLAN corporativa.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#06140e] border border-emerald-900/40">
                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold mb-1">
                      <Cloud className="w-4 h-4" />
                      <span>Ecosistema Multi-Cloud (Azure, AWS, GCP)</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Migración masiva de identidades a Azure AD / Microsoft 365 y aprovisionamiento con Terraform y Elastic Beanstalk.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#06140e] border border-emerald-900/40">
                    <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold mb-1">
                      <Code2 className="w-4 h-4" />
                      <span>Desarrollo Web Full-Stack & Game Logic</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Construcción de aplicaciones interactivas con React, Node, PostgreSQL, APIs REST y mecánicas de scripting en Godot 4.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-emerald-900/30 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-400">
                  Repositorios & Código
                </span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>github.com/rdbv87</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SKILLS & COMPETENCIES SECTION --- */}
      <section id="skills" className="py-24 border-b border-emerald-900/20 bg-[#030906]/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              Matriz de Competencias
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              Habilidades Técnicas & Especializadas
            </h2>
            <p className="text-slate-400 mt-4 text-sm sm:text-base">
              Inventario técnico detallado categorizado por dominio de aplicación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const IconComponent = cat.icon;
              return (
                <div key={idx} className="p-7 rounded-2xl glass-panel glass-panel-hover">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg bg-[#05140d] border border-emerald-900/40 text-slate-200 text-xs font-mono hover:border-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Soft Skills Banner */}
          <div className="mt-8 p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
            <h4 className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3">
              Habilidades Blandas & Gestión de Equipos:
            </h4>
            <div className="flex flex-wrap gap-2 text-xs text-slate-300">
              {["Liderazgo y gestión de equipos de IT", "Comunicación ejecutiva y técnica", "Resolución estratégica de problemas", "Adaptabilidad al cambio", "Ética laboral y confidencialidad", "Atención al detalle en ambientes críticos", "Innovación aplicada"].map((soft, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-[#081b12] border border-emerald-800/40">
                  ✓ {soft}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- EDUCATION & CERTIFICATIONS --- */}
      <section id="education" className="py-24 border-b border-emerald-900/20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              Formación & Capacitaciones
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              Educación & Especializaciones
            </h2>
            <p className="text-slate-400 mt-4 text-sm sm:text-base">
              Formación académica universitaria y certificaciones continuas en inteligencia artificial, desarrollo, animación y ciberseguridad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION_ITEMS.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-500/20 px-2.5 py-0.5 rounded">
                      {item.year}
                    </span>
                    <GraduationCap className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {item.degree}
                  </h3>
                  <p className="text-emerald-300/80 font-medium text-xs sm:text-sm mt-1 mb-3">
                    {item.institution}
                  </p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT & FOOTER SECTION --- */}
      <section id="contact" className="py-24 relative overflow-hidden bg-[#020604]">
        
        {/* Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
            Iniciemos una conversación
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">
            ¿Listo para construir el siguiente nivel?
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Disponible para roles de liderazgo en tecnología, arquitectura de infraestructura TI/Cloud, proyectos de software y consultoría técnica.
          </p>

          {/* Quick Contact Interactive Cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#081810] border border-emerald-500/30 text-left flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Correo Electrónico</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-bold text-white hover:text-emerald-300">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                title="Copiar correo"
                className="p-2 rounded-lg bg-emerald-950/60 hover:bg-emerald-800/60 text-emerald-300 transition-colors"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone / Whatsapp Card */}
            <div className="p-6 rounded-2xl bg-[#081810] border border-emerald-500/30 text-left flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">WhatsApp / Teléfono</span>
                  <a href={`tel:${PERSONAL_INFO.phoneWhatsapp}`} className="text-sm font-bold text-white hover:text-cyan-300">
                    {PERSONAL_INFO.phoneWhatsapp}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phoneWhatsapp, 'phone')}
                title="Copiar teléfono"
                className="p-2 rounded-lg bg-cyan-950/60 hover:bg-cyan-800/60 text-cyan-300 transition-colors"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

          </div>

          {/* Direct WhatsApp Call to Action */}
          <div className="mt-8">
            <a
              href={`https://wa.me/50499351407?text=${encodeURIComponent('Hola Roberto, te contacto a través de tu sitio web personal.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-linear-to-r from-emerald-500 to-teal-500 text-[#030907] font-bold text-base hover:scale-105 transition-transform shadow-[0_0_30px_rgba(16,185,129,0.4)]"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Enviar Mensaje a WhatsApp (+504 9935-1407)</span>
            </a>
          </div>

          {/* Footer bottom */}
          <div className="mt-20 pt-8 border-t border-emerald-900/30 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
            <div>
              © {new Date().getFullYear()} Roberto D. Bulnes. Todos los derechos reservados.
            </div>
            <div className="flex items-center gap-6">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                GitHub: rdbv87
              </a>
              <a href={PERSONAL_INFO.demoReel} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                Vimeo: Reel 3D
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* --- FLOATING QUICK ACTION BAR (Mobile & Desktop) --- */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        <a
          href={`https://wa.me/50499351407?text=${encodeURIComponent('Hola Roberto!')}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Escribir por WhatsApp"
          className="w-13 h-13 rounded-full bg-emerald-500 text-[#030907] flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
      </div>

    </div>
  );
}

export default App;
