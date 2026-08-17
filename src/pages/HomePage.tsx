import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
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
  GraduationCap,
  Copy,
  Check,
  Gamepad2,
  Layers
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Roberto D. Bulnes",
  title: "Builder • Ingeniero Mecatrónico & Arquitecto Full-Stack / Cloud",
  bio: "Ingeniero Mecatrónico y Builder tecnológico con más de 10 años de experiencia transformando infraestructuras críticas, creando plataformas SaaS y soluciones de IA privada, orquestando servicios en la nube (AWS, Azure, GCP), desarrollo de herramientas de automatización y ciberseguridad. Además, desarrollador de videojuegos en Godot y artista 3D apasionado por la convergencia entre software, computación gráfica y automatización.",
  email: "rdbv87@gmail.com",
  phoneWhatsapp: "+504 9935-1407",
  phoneDirect: "+504 8928-2485",
  location: "Honduras",
  github: "https://github.com/rdbv87",
  demoReel: "https://youtu.be/2nRq9AtvwR0"
};

export const SECTIONS = [
  { id: 'hero', label: 'Inicio' },
  { id: 'overview', label: 'Especialidades' },
  { id: 'experience', label: 'Experiencia' },
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
  "AWS", "Microsoft Azure", "Google Cloud Platform", "Microsoft Graph API", "Entra ID (MSAL)",
  "Vue.js", "Astro", "ReactJS", "Node.js", "Tailwind CSS", "Vite", "Terraform",
  "FortiOS & UTM", "Docker / Jenkins", "Python", "Godot 4.4+",
  "Autodesk Maya", "Foundry Nuke", "Redshift", "Arnold", "ShotGrid",
  "PostgreSQL", "MSSQL Server", "Oracle DB", "Linux (Arch, Debian)"
];

export const EXPERIENCES = [
  {
    period: "2026 – Presente",
    role: "Administrador y Gestor de Datos",
    company: "CNBS (Comisión Nacional de Bancos y Seguros)",
    category: "Automatización & Ecosistema M365",
    badge: "Actual",
    description: "Desarrollo e implementación de herramientas de automatización de procesos institucionales y gestión de datos, integradas al ecosistema Microsoft 365.",
    highlights: [
      "Desarrollo de soluciones y herramientas de automatización con Node.js, Vue.js, Astro, Tailwind CSS y Vite.",
      "Integración profunda en el ecosistema M365 mediante Microsoft Graph API y autenticación moderna con Microsoft Entra ID (MSAL).",
      "Administración, análisis y gobierno de datos para optimización de procesos operativos y regulatorios."
    ],
    tech: ["Node.js", "Vue.js", "Astro", "Tailwind CSS", "Vite", "Microsoft Graph API", "Entra ID (MSAL)", "M365", "Gestión de Datos"]
  },
  {
    period: "2025 – 2026",
    role: "Coordinador de Infotecnología UFT-SINAP",
    company: "Instituto de la Propiedad",
    category: "Gobierno & Transformación Digital",
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
    tech: ["Python", "Autodesk Maya", "Foundry Nuke", "Arnold", "Redshift", "ShotGrid", "PySide"],
    link: "https://youtu.be/2nRq9AtvwR0"
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
    category: "Cloud, Microsoft 365 & Identidad",
    icon: Cloud,
    skills: ["Microsoft Entra ID (MSAL)", "Microsoft Graph API", "Ecosistema Microsoft 365", "Microsoft Azure (ASM/ARM)", "AWS (Elastic Beanstalk, EC2, S3)", "Google Cloud Platform", "Terraform (IaC)", "Jenkins CI/CD", "Git / GitHub / GitLab", "Linux / Windows Server"]
  },
  {
    category: "Desarrollo Web, Frontend & Automatización",
    icon: Code2,
    skills: ["Node.js", "Vue.js", "Astro", "ReactJS", "Tailwind CSS", "Vite", "TypeScript / JavaScript", "HTML5 & CSS3 / SASS", "REST APIs", "GDScript (Godot 4.4+)"]
  },
  {
    category: "Bases de Datos & Gestión de Datos",
    icon: Server,
    skills: ["Gestión & Gobierno de Datos", "SQL Server (MSSQL)", "Oracle DB", "PostgreSQL", "MySQL", "Auditoría de Bases de Datos", "Modelado de Datos"]
  },
  {
    category: "Redes, Seguridad & Telefonía",
    icon: ShieldCheck,
    skills: ["FortiOS & Firewalls FortiGate", "Asterisk IP-PBX", "Grandstream VoIP", "CCTV & Seguridad Física", "Auditoría de Sistemas", "Contraterrorismo Cibernético", "Cableado Estructurado"]
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

export function HomePage() {
  const [activeSection, setActiveSection] = useState('hero');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const typewriterPhrases = [
    "Builder & Ingeniero en Mecatrónica.",
    "Desarrollador Full-Stack & Plataformas SaaS.",
    "Arquitecto de Infraestructura TI & Cloud.",
    "Especialista en IA Privada & Automatización.",
    "Game Developer en Godot Engine.",
    "Artista de Iluminación 3D & Pipeline."
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <a href="#hero" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 rounded-xl bg-[#04120b] border border-emerald-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-105 group-hover:border-emerald-400 transition-all p-1">
              <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                <rect x="14" y="14" width="36" height="36" rx="5" fill="#071b11" stroke="#10b981" strokeWidth="2.5" />
                <rect x="20" y="20" width="24" height="24" rx="2" fill="#0b291a" stroke="#34d399" strokeWidth="1" strokeOpacity="0.6" />
                <line x1="22" y1="6" x2="22" y2="14" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="32" y1="6" x2="32" y2="14" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="42" y1="6" x2="42" y2="14" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="22" y1="50" x2="22" y2="58" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="32" y1="50" x2="32" y2="58" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="42" y1="50" x2="42" y2="58" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="6" y1="22" x2="14" y2="22" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="6" y1="32" x2="14" y2="32" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="6" y1="42" x2="14" y2="42" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="50" y1="22" x2="58" y2="22" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="50" y1="32" x2="58" y2="32" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="50" y1="42" x2="58" y2="42" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="23" cy="23" r="1.5" fill="#34d399" />
                <text x="32" y="37" fontFamily="'Space Grotesk', sans-serif" fontSize="13" fontWeight="900" fill="#f0fdf4" textAnchor="middle" letterSpacing="0.5">RB</text>
              </svg>
            </div>
            <div>
              <span className="font-display font-bold text-white text-sm sm:text-base tracking-tight block">
                Roberto D. Bulnes
              </span>
              <span className="font-mono text-[10px] text-emerald-400/80 tracking-wide uppercase block">
                Ing. Mecatrónica • IT Ops
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-5 text-xs lg:text-sm font-medium">
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

            <Link
              to="/portfolio"
              className="px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 hover:text-emerald-200 hover:border-emerald-400 text-xs font-mono flex items-center gap-1.5 transition-colors"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Portafolio</span>
            </Link>
          </nav>

          {/* CTA Action */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`https://wa.me/50499351407?text=${encodeURIComponent('Hola Roberto, vi tu sitio web y me gustaría ponerme en contacto.')}`}
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

      {/* --- SIDE DOT NAVIGATION --- */}
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
          
          {/* Profile Photo & Badge */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-6 group">
              <div className="absolute -inset-1.5 bg-linear-to-r from-emerald-500 via-teal-400 to-cyan-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
              <img
                src="./foto-perfil.jpg"
                alt="Roberto D. Bulnes"
                className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-2 border-emerald-400/80 shadow-2xl"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono text-xs shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span>BUILDER TECNOLÓGICO • SAAS, CLOUD, IA & GAMEDEV</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.08] max-w-5xl mx-auto">
            Builder Tecnológico, <br className="hidden sm:block" />
            <span className="bg-linear-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Plataformas SaaS
            </span> & Arquitectura Cloud.
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
            <Link
              to="/portfolio"
              className="px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#030907] font-semibold text-sm transition-all duration-200 shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.55)] hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Explorar Proyectos & SaaS</span>
            </Link>
            <button
              onClick={() => scrollTo('experience')}
              className="px-7 py-3.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 text-emerald-200 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Ver Trayectoria Profesional</span>
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
                <h3 className="text-xl font-bold text-white mt-1 mb-3">Videojuegos Godot & 3D</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Desarrollo de videojuegos interactivos 2D en Godot Engine (Itch.io). Iluminación y composición CG con Maya, Nuke, Arnold y Redshift (Disney Jr.).
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-emerald-900/30 font-mono text-xs text-slate-400">
                Publicaciones activas en Itch.io & Demo Reel
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
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
                <div className="absolute -left-7.75 sm:-left-11.75 top-1.5 w-4 h-4 rounded-full bg-[#030806] border-2 border-emerald-400 group-hover:scale-125 group-hover:bg-emerald-400 group-hover:shadow-[0_0_12px_#10b981] transition-all" />

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

                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="text-xs sm:text-sm text-slate-300/90 flex items-start gap-2.5">
                        <span className="text-emerald-400 mt-1 font-mono font-bold">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

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
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
            Iniciemos una conversación
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">
            ¿Listo para construir el siguiente nivel?
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Disponible para roles de liderazgo en tecnología, arquitectura de infraestructura TI/Cloud, desarrollo de videojuegos (Godot) y consultoría técnica.
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
                className="p-2 rounded-lg bg-emerald-950/60 hover:bg-emerald-800/60 text-emerald-300 transition-colors cursor-pointer"
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
                className="p-2 rounded-lg bg-cyan-950/60 hover:bg-cyan-800/60 text-cyan-300 transition-colors cursor-pointer"
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
              <Link to="/portfolio" className="hover:text-emerald-400 transition-colors">
                Portafolio Completo
              </Link>
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

      {/* --- FLOATING QUICK ACTION BAR --- */}
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

export default HomePage;
