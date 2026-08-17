export type ProjectCategory = 'all' | 'gamedev' | '3d-cgi' | 'web-cloud' | 'ai-sec' | 'automation';

export interface GalleryItem {
  url: string;
  caption: string;
  aspectRatio?: 'video' | 'square' | 'portrait';
}

export interface AudioTrack {
  title: string;
  description?: string;
  url: string;
  duration?: string;
}

export interface ProjectEntry {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'gamedev' | '3d-cgi' | 'web-cloud' | 'ai-sec' | 'automation';
  categoryLabel: string;
  date: string;
  role: string;
  featured?: boolean;
  engineOrTech: string[];
  description: string;
  longDescription?: string[];
  keyFeatures?: string[];
  technicalHighlights?: string[];
  
  // Media & Links
  thumbnail: string;
  bannerImage?: string;
  youtubeId?: string; // e.g. "dQw4w9WgXcQ"
  vimeoId?: string;   // e.g. "853432693"
  itchUrl?: string;   // e.g. "https://justbobgames.itch.io/plim-plim-memomania"
  itchEmbedId?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  
  gallery?: GalleryItem[];
  audioTracks?: AudioTrack[];
}

export const PORTFOLIO_CATEGORIES: { id: ProjectCategory; label: string; count?: number }[] = [
  { id: 'all', label: 'Todos los Proyectos' },
  { id: 'web-cloud', label: 'Desarrollo Full-Stack & SaaS' },
  { id: 'ai-sec', label: 'IA Privada & Ciberseguridad' },
  { id: 'gamedev', label: 'Desarrollo de Videojuegos (Godot)' },
  { id: '3d-cgi', label: 'Producción 3D & Pipeline' },
  { id: 'automation', label: 'Automatización & Scripts' },
];

export const PORTFOLIO_PROJECTS: ProjectEntry[] = [
  {
    id: 'movisol-service-saas',
    slug: 'movisol-service-saas',
    title: 'Movisol-Service (SaaS de Gestión de Flotas)',
    tagline: 'Plataforma B2B para telemetría de activos, inspección operativa y análisis de Costo por Kilómetro (CPK) en llantas.',
    category: 'web-cloud',
    categoryLabel: 'SaaS & Fleet Logistics',
    date: '2026',
    role: 'Lead Full-Stack Architect & Developer',
    featured: true,
    engineOrTech: ['Next.js', 'Vue.js', 'Firebase Auth', 'Cloud Firestore', 'Tailwind CSS', 'TypeScript', 'Analytics / CPK Metrics'],
    description: 'Plataforma SaaS diseñada y desarrollada para Movisol-Falcon orientada a la administración integral de flotas de camiones, digitalización de mediciones operativas en campo y monitoreo del rendimiento de neumáticos (Costo por Kilómetro - CPK).',
    longDescription: [
      'Movisol-Service es una solución en la nube creada para la empresa Movisol-Falcon, cuyo núcleo operativo radica en la digitalización de inspecciones técnicas en talleres y patios de maniobras para grandes flotas de transporte pesado.',
      'Los operarios y técnicos en terreno registran mediciones continuas sobre el desgaste milimétrico de la banda de rodadura, presiones y rotaciones de cada neumático montado en los ejes de los camiones.',
      'El sistema procesa estos datos en tiempo real para calcular indicadores críticos como el Costo por Kilómetro (CPK), proyecciones de vida útil restante, alertas de reemplazo preventivo y un inventario exhaustivo de todos los activos rodantes de la compañía.'
    ],
    keyFeatures: [
      'Cálculo Automático de Costo por Kilómetro (CPK): Algoritmos que cruzan costo de adquisición, reencauches, odómetro y desgaste milimétrico.',
      'Esquema Operativo Visual por Ejes: Mapeo interactivo de cada posición de llanta según la configuración del camión (cabezal, remolque, doble eje).',
      'Captura de Mediciones en Terreno: Flujo optimizado para que los mecánicos ingresen lecturas de forma rápida desde dispositivos móviles o tablets.',
      'Panel Analítico para Clientes: Dashboards con reportería de salud de flota, distribución de marcas de llantas y optimización de costos operativos.',
      'Autenticación y Seguridad Multitenant: Control granular de accesos para operarios, administradores y clientes de flota con Firebase Auth y Firestore.'
    ],
    technicalHighlights: [
      'Arquitectura híbrida moderna con Next.js y componentes reactivos en Vue.js / TypeScript.',
      'Base de datos NoSQL Cloud Firestore estructurada para consultas en tiempo real y offline persistence.',
      'Visualización de métricas y gráficos estadísticos para toma de decisiones financieras en logística.'
    ],
    thumbnail: `${import.meta.env.BASE_URL}images/movisol-1.png`,
    gallery: [
      {
        url: `${import.meta.env.BASE_URL}images/movisol-1.png`,
        caption: 'Dashboard principal de flota con métricas globales de unidades y rendimiento.',
        aspectRatio: 'video'
      },
      {
        url: `${import.meta.env.BASE_URL}images/movisol-2.png`,
        caption: 'Esquema operativo de configuración de ejes e inspección técnica de neumáticos.',
        aspectRatio: 'video'
      },
      {
        url: `${import.meta.env.BASE_URL}images/movisol-3.png`,
        caption: 'Módulo de análisis de Costo por Kilómetro (CPK) e historial de mediciones.',
        aspectRatio: 'video'
      },
      {
        url: `${import.meta.env.BASE_URL}images/movisol-4.png`,
        caption: 'Gestión de inventario de activos y estados de desgaste de llantas.',
        aspectRatio: 'video'
      }
    ]
  },
  {
    id: 'ia-privada-resoluciones-juridicas',
    slug: 'ia-privada-resoluciones-juridicas',
    title: 'Plataforma de IA Privada para Resoluciones Jurídicas',
    tagline: 'Arquitectura de IA local y RAG para blindar información confidencial y cumplimiento de gobernanza.',
    category: 'ai-sec',
    categoryLabel: 'IA Local & Ciberseguridad',
    date: '2025 – 2026',
    role: 'Líder Técnico de Arquitectura & Ciberseguridad',
    featured: true,
    engineOrTech: ['RAG (Retrieval-Augmented Generation)', 'Vector Databases', 'Local LLMs (Self-Hosted)', 'Python', 'FastAPI', 'Gobernanza de Datos', 'Docker', 'Ciberseguridad'],
    description: 'Diseño, despliegue y puesta en marcha de una solución de Inteligencia Artificial on-premise con RAG que resolvió una brecha crítica de seguridad provocada por la filtración de resoluciones y dictámenes confidenciales a servicios públicos de chat con IA.',
    longDescription: [
      'El proyecto surgió como respuesta inmediata y estratégica a un incidente de seguridad de la información: personal técnico y legal de superintendencia estaba utilizando chatbots públicos en la nube para procesar borradores de resoluciones y análisis jurídicos confidenciales, comprometiendo severamente las políticas de confidencialidad y gobernanza de datos del ente regulador.',
      'Lideré integralmente la concepción arquitectónica, implementación y puesta en producción de una plataforma soberana de IA y búsqueda semántica aumentada (RAG), ejecutada 100% en infraestructura local de alta seguridad sin salida a internet.',
      'La plataforma permite a los equipos jurídicos realizar consultas contextuales complejas, comparación de dictámenes y síntesis de jurisprudencia institucional de manera ultrarrápida, garantizando la custodia estricta de los datos sensibles y el cumplimiento regulatorio.'
    ],
    keyFeatures: [
      'Entorno 100% On-Premise y Air-Gapped: Sin telemetría ni comunicación con servidores externos de IA.',
      'Motor RAG de Alta Precisión: Indexación vectorial semántica de miles de páginas de normativas, leyes y resoluciones históricas.',
      'Control de Acceso y Trazabilidad: Registro detallado de auditoría de cada consulta y acceso por rol institucional.',
      'Mitigación total del Shadow AI: Canalización segura de las necesidades operativas del personal legal a un entorno corporativo protegido.',
      'Citas y Fuentes Verificables: Cada respuesta generada incluye referencias exactas a artículos y precedentes jurídicos.'
    ],
    technicalHighlights: [
      'Pipeline de ingesta y tokenización de documentos PDF/DOCX jurídicos con chunking adaptativo.',
      'Base de datos vectorial optimizada para embeddings y recuperación por similitud de coseno.',
      'Orquestación en contenedores Docker y microservicios FastAPI de baja latencia.',
      'Hardening perimetral y políticas estrictas de Data Loss Prevention (DLP).'
    ],
    thumbnail: `${import.meta.env.BASE_URL}images/ia-resoluciones-1.png`,
    gallery: [
      {
        url: `${import.meta.env.BASE_URL}images/ia-resoluciones-1.png`,
        caption: 'Interfaz de consulta semántica y análisis asistido de resoluciones jurídicas.',
        aspectRatio: 'video'
      },
      {
        url: `${import.meta.env.BASE_URL}images/ia-resoluciones-2.png`,
        caption: 'Panel de control de documentos, fuentes indexadas y trazabilidad de consultas.',
        aspectRatio: 'video'
      }
    ]
  },
  {
    id: 'app-unificada-servicios-ciudadanos',
    slug: 'app-unificada-servicios-ciudadanos',
    title: 'Aplicación Unificada de Servicios Institucionales',
    tagline: 'Plataforma ciudadana integral para consulta y gestión unificada de registros públicos y bienes mediante DNI.',
    category: 'web-cloud',
    categoryLabel: 'Portal Ciudadano & Cloud',
    date: '2025 – 2026',
    role: 'Coordinador de Arquitectura & Servicios Cloud',
    featured: true,
    engineOrTech: ['Firebase Hosting', 'Cloud Firestore', 'Firebase Auth', 'Microservicios', 'REST APIs', 'Node.js', 'Vue.js / Tailwind CSS', 'Autenticación DNI'],
    description: 'Supervisión y coordinación arquitectónica de una plataforma ciudadana omnicanal sobre Firebase y microservicios que centraliza en un único acceso seguro por DNI la visualización y gestión de todas las propiedades inmuebles, vehiculares, mercantiles y de propiedad intelectual del Instituto de la Propiedad.',
    longDescription: [
      'Históricamente, los registros de propiedad raíz e hipotecas, registro vehicular, propiedad mercantil y propiedad intelectual operaban en silos tecnológicos y bases de datos aisladas, obligando a los ciudadanos a realizar múltiples trámites inconexos y presenciales.',
      'Supervisé y coordiné la arquitectura integral de la nueva plataforma unificada de servicios ciudadanos desplegada sobre Firebase (Hosting, Firestore, Auth) e interconectada a través de un bus de microservicios corporativos de alta velocidad.',
      'Mediante una autenticación robusta vinculada al Documento Nacional de Identificación (DNI), la ciudadanía puede acceder en tiempo real a su expediente registral consolidado: revisar títulos de propiedad inmueble, historial de vehículos, patentes o marcas comerciales y sociedades mercantiles registradas a su nombre con total transparencia.'
    ],
    keyFeatures: [
      'Acceso Ciudadano Consolidado (Single View): Consulta de bienes inmuebles, vehículos, patentes/marcas y registros mercantiles en un único panel.',
      'Autenticación Segura por DNI: Integración con los servicios de validación de identidad ciudadana.',
      'Infraestructura Escalable en Firebase: Aprovisionamiento con Firebase Hosting, Cloud Functions y Firestore para consultas ultrarrápidas.',
      'Arquitectura de Microservicios: Desacoplamiento seguro entre los sistemas transaccionales heredados (Legacy DBs) y la capa pública web.',
      'Diseño Responsivo & Accesible: Experiencia de usuario intuitiva adaptada a dispositivos móviles y escritorio.'
    ],
    technicalHighlights: [
      'Caché y sincronización de datos registrales en Firestore con reglas estrictas de seguridad (Security Rules).',
      'Orquestación de microservicios backend para consulta federada a múltiples bases de datos institucionales.',
      'Pipeline de despliegue continuo (CI/CD) para releases rápidos y seguros.'
    ],
    thumbnail: `${import.meta.env.BASE_URL}images/app-ciudadana-1.png`,
    gallery: [
      {
        url: `${import.meta.env.BASE_URL}images/app-ciudadana-1.png`,
        caption: 'Panel principal del ciudadano con vista unificada de propiedades y servicios registrales.',
        aspectRatio: 'video'
      },
      {
        url: `${import.meta.env.BASE_URL}images/app-ciudadana-2.png`,
        caption: 'Módulo de consulta y detalle de bienes inmuebles y gravámenes.',
        aspectRatio: 'video'
      },
      {
        url: `${import.meta.env.BASE_URL}images/app-ciudadana-3.png`,
        caption: 'Gestión de registros vehiculares y trámites digitales asociados.',
        aspectRatio: 'video'
      }
    ]
  },
  {
    id: 'plim-plim-memomania',
    slug: 'plim-plim-memomania',
    title: 'Plim Plim MemoMania',
    tagline: 'Juego interactivo de memoria y agilidad mental desarrollado en Godot Engine.',
    category: 'gamedev',
    categoryLabel: 'Videojuego 2D / Casual',
    date: '2025',
    role: 'Game Designer & Lead GDScript Developer',
    featured: true,
    engineOrTech: ['Godot Engine', 'GDScript', '2D Physics', 'Audio Bus', 'UI Animations', 'Itch.io'],
    description: 'Videojuego educativo y casual de memoria donde los jugadores ejercitan su capacidad de retención visual y velocidad de reacción en divertidos niveles temáticos con mecánicas pulidas.',
    longDescription: [
      'Plim Plim MemoMania es una experiencia interactiva diseñada con un enfoque pedagógico y lúdico para ejercitar la memoria de corto plazo y reflejos de forma progresiva.',
      'El proyecto fue implementado íntegramente en Godot Engine utilizando GDScript, prestando especial atención al "game feel", transiciones de UI fluidas con Tweens, sistema de partículas 2D y un diseño sonoro alegre y responsivo.',
      'Disponible para jugar directamente en navegador y descarga a través de Itch.io bajo el sello JustBob Games.'
    ],
    keyFeatures: [
      'Sistema procedural y escalable de generación de tableros de cartas.',
      'Animaciones fluidas basadas en curvas Tween para interacción táctil y con mouse.',
      'Efectos sonoros dinámicos y retroalimentación háptica/visual instantánea.',
      'Exportación multiplataforma optimizada para WebGL (HTML5) y Desktop.'
    ],
    technicalHighlights: [
      'Arquitectura basada en nodos y señales desacopladas en GDScript.',
      'Gestión de memoria de texturas optimizada para carga ultra rápida en navegadores.',
      'State machine para el ciclo de vida del juego (Idle, Flipping, Matching, Score Summary).'
    ],
    thumbnail: `${import.meta.env.BASE_URL}images/memomania-1.png`,
    itchUrl: 'https://justbobgames.itch.io/plim-plim-memomania',
    gallery: [
      {
        url: `${import.meta.env.BASE_URL}images/memomania-1.png`,
        caption: 'Menú principal y selección de niveles de Plim Plim MemoMania.',
        aspectRatio: 'video'
      },
      {
        url: `${import.meta.env.BASE_URL}images/memomania-2.png`,
        caption: 'Tablero interactivo de juego y sistema de emparejamiento de cartas temáticas.',
        aspectRatio: 'video'
      }
    ]
  },
  {
    id: 'pipe-jumpers',
    slug: 'pipe-jumpers',
    title: 'Pipe Jumpers',
    tagline: 'Arcade de saltos y precisión frenética desarrollado en Godot Engine.',
    category: 'gamedev',
    categoryLabel: 'Arcade / Platformer 2D',
    date: '2025',
    role: 'Game Programmer & Level Designer',
    featured: true,
    engineOrTech: ['Godot Engine', 'GDScript', 'Kinematic Physics', 'Pixel Art FX', 'Highscore System', 'Itch.io'],
    description: 'Un desafiante juego arcade de reflejos y precisión en el que el jugador debe sortear tuberías y obstáculos móviles mediante saltos sincronizados en un ritmo continuo.',
    longDescription: [
      'Pipe Jumpers rinde homenaje a los clásicos arcades de habilidad donde cada milisegundo cuenta. Desarrollado en Godot Engine con mecánicas de física ajustadas manualmente para brindar un control sumamente responsivo y satisfactorio.',
      'Cuenta con una curva de dificultad dinámica que incrementa la velocidad y complejidad de los patrones de obstáculos a medida que el jugador avanza.',
      'Publicado y distribuido en la plataforma Itch.io por JustBob Games.'
    ],
    keyFeatures: [
      'Motor de física de saltos y gravedad personalizado para respuesta inmediata.',
      'Generación infinita de obstáculos con patrones de dificultad adaptativa.',
      'Persistencia de mejores puntuaciones locales (High Scores).',
      'Integración de efectos de partículas de impacto y feedback de colisiones.'
    ],
    technicalHighlights: [
      'Optimización del bucle principal de físicas (_physics_process) en GDScript.',
      'Pool de objetos reutilizables para las tuberías evitando sobrecarga del Garbage Collector.',
      'Soporte completo para teclado, mouse y controles táctiles en móvil.'
    ],
    thumbnail: `${import.meta.env.BASE_URL}images/pipe-jumper-1.png`,
    itchUrl: 'https://justbobgames.itch.io/pipe-jumpers',
    gallery: [
      {
        url: `${import.meta.env.BASE_URL}images/pipe-jumper-1.png`,
        caption: 'Menú principal y selección de partida de Pipe Jumpers.',
        aspectRatio: 'video'
      },
      {
        url: `${import.meta.env.BASE_URL}images/pipe-jumper-2.png`,
        caption: 'Gameplay in-game con sistema de puntuación y físicas dinámicas de salto.',
        aspectRatio: 'video'
      }
    ]
  },
  {
    id: 'lighting-compositing-showreel',
    slug: 'lighting-compositing-showreel',
    title: 'Lighting, Comp & Pipeline Tools Showreel',
    tagline: 'Iluminación CG y desarrollo de herramientas / scripting Python para pipelines en Maya & Nuke.',
    category: '3d-cgi',
    categoryLabel: '3D CGI & Pipeline Tooling',
    date: '2024',
    role: 'Lighting Artist & Python Pipeline Developer',
    featured: true,
    engineOrTech: ['Python', 'Autodesk Maya API', 'Foundry Nuke', 'Arnold Renderer', 'Redshift', 'ShotGrid', 'ACES Color', 'PySide / PyQt'],
    description: 'Demostración integral de iluminación final para entornos y personajes en la serie global "Me & Mickey Vlogs" (Disney Jr.), junto con el diseño y programación de herramientas personalizadas (tools) y scripts en Python para optimizar flujos de trabajo en Maya y Nuke.',
    longDescription: [
      'Este Showreel condensa una visión integral donde convergen el arte digital y la ingeniería de software: la creación visual de alto nivel cinematográfico y la optimización de procesos mediante desarrollo de herramientas técnicas.',
      'A nivel artístico, incluye la iluminación final y look dev de personajes y escenarios para múltiples capítulos de la serie animada internacional "Me & Mickey Vlogs" (Disney Jr.), aplicando flujos de trabajo de render multipase en Arnold y Redshift, además de composición nodal avanzada en Foundry Nuke bajo gestión de color ACEScg.',
      'A nivel de desarrollo técnico, se presentan scripts y herramientas automatizadas en Python orientadas a acelerar la configuración de luces, estandarización de pases de render (AOVs/Cryptomattes) y sincronización con el sistema de producción ShotGrid.'
    ],
    keyFeatures: [
      'Iluminación final de entornos y personajes para la serie de cortos animados "Me & Mickey Vlogs" (Disney Jr.).',
      'Diseño y programación de herramientas personalizadas (tools) y scripts en Python para optimizar flujos de trabajo en Maya y Nuke.',
      'Desglose técnico de render passes (Diffuse, Specular, Transmission, SSS, Emission, Cryptomatte, Z-Depth).',
      'Pipeline de color management profesional en espacio ACEScg y composición fotométrica.',
      'Automatización de tareas repetitivas y estandarización de presets de render.'
    ],
    technicalHighlights: [
      'Desarrollo de scripts en Python con Maya Commands / OpenMaya y Nuke Python API.',
      'Interfaces gráficas personalizadas con PySide/PyQt para artistas de iluminación.',
      'Optimización de tiempos de cálculo de render y reducción de ruido en Arnold y Redshift.',
      'Gestión y versionado de activos de producción en Autodesk ShotGrid.'
    ],
    thumbnail: `${import.meta.env.BASE_URL}images/3D-1.png`,
    youtubeId: '2nRq9AtvwR0',
    liveDemoUrl: 'https://youtu.be/2nRq9AtvwR0',
    gallery: [
      {
        url: `${import.meta.env.BASE_URL}images/3D-1.png`,
        caption: 'Iluminación final y look development de personajes para producciones animadas internacionales.',
        aspectRatio: 'video'
      },
      {
        url: `${import.meta.env.BASE_URL}images/3D-2.png`,
        caption: 'Composición de render passes en Nuke, integración fotométrica y gestión de color ACEScg.',
        aspectRatio: 'video'
      }
    ]
  },
  {
    id: 'm365-automation-suite',
    slug: 'm365-automation-suite',
    title: 'Plataforma de Automatización Institucional M365',
    tagline: 'Herramientas de gobierno, automatización de flujos y sincronización con Microsoft Graph API.',
    category: 'automation',
    categoryLabel: 'Cloud & Enterprise Tooling',
    date: '2026',
    role: 'Lead Architect & Full-Stack Developer',
    featured: false,
    engineOrTech: ['Node.js', 'Vue.js', 'Astro', 'Tailwind CSS', 'Vite', 'Microsoft Graph API', 'Entra ID (MSAL)', 'TypeScript'],
    description: 'Arquitectura web para la optimización de procesos institucionales y gestión de datos bancarios/regulatorios integrada de forma segura con el ecosistema Microsoft 365 y Azure.',
    longDescription: [
      'Solución empresarial que centraliza y automatiza tareas administrativas y de control de datos para la Comisión Nacional de Bancos y Seguros (CNBS).',
      'Aprovecha Microsoft Graph API para interconectar de forma fluida directorios corporativos, reportes y aprobaciones con autenticación segura en Microsoft Entra ID (MSAL).'
    ],
    keyFeatures: [
      'Autenticación corporativa OAuth2 / Single Sign-On (SSO) con Microsoft Entra ID.',
      'Procesamiento automatizado de grandes volúmenes de datos con Node.js y TypeScript.',
      'Interfaz moderna, reactiva y accesible desarrollada con Vue.js, Astro y Tailwind CSS.',
      'Auditoría y trazabilidad de acciones operativas.'
    ],
    technicalHighlights: [
      'Consumo eficiente de APIs con rate limiting y manejo de tokens de refresco MSAL.',
      'Diseño modular de microservicios e interfaces reactivas desacopladas.'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
        caption: 'Arquitectura de servicios cloud y flujo de autenticación MSAL.',
        aspectRatio: 'video'
      }
    ]
  }
];
