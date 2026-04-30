// ─────────────────────────────────────────────────────────────────────────────
// CASES DATA — add new case studies here.
// Each case appears on /projekte as a full card.
// Images: use any public URL or drop files into /public/cases/ and reference as "/cases/my-image.jpg"
// ─────────────────────────────────────────────────────────────────────────────

export type CaseLang = 'de' | 'en' | 'es';

export type Metric = {
  value: string;
  label: { de: string; en: string; es: string };
};

export type CaseStudy = {
  slug: string;
  category: 'performance' | 'shopify' | 'seo' | 'ux' | 'branding' | 'geo';
  coverImage: string;
  tags: string[];
  metrics: Metric[];
  title:       { de: string; en: string; es: string };
  eyebrow:     { de: string; en: string; es: string };
  description: { de: string; en: string; es: string };
  challenge:   { de: string; en: string; es: string };
  solution:    { de: string; en: string; es: string };
  result:      { de: string; en: string; es: string };
  // Optional extra images (gallery)
  images?: string[];
};

export const CASES: CaseStudy[] = [
  {
    slug: 'fashion-d2c-google-ads',
    category: 'performance',
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    tags: ['Google Ads', 'Meta', 'ROAS', 'D2C', 'Fashion'],
    metrics: [
      { value: '13×',  label: { de: 'ROAS',             en: 'ROAS',              es: 'ROAS'             } },
      { value: '€9',   label: { de: 'CPA',               en: 'CPA',               es: 'CPA'              } },
      { value: '€30K', label: { de: 'Budget/Monat',      en: 'Budget/month',      es: 'Presupuesto/mes'  } },
    ],
    title: {
      de: 'Google Ads Skalierung — Fashion D2C',
      en: 'Google Ads Scaling — Fashion D2C',
      es: 'Escalado Google Ads — Fashion D2C',
    },
    eyebrow: {
      de: '01 — Performance Marketing',
      en: '01 — Performance Marketing',
      es: '01 — Marketing de Performance',
    },
    description: {
      de: 'Vollständige Google-Ads-Strategie für eine Fashion-D2C-Brand im DACH-Markt. Budget von unter €5K auf €30K/Monat skaliert — ROAS konstant über 13× bei einem CPA von €9 bei €80 Ø-Warenkorbwert.',
      en: 'Full Google Ads strategy for a fashion D2C brand in the DACH market. Budget scaled from under €5K to €30K/month — ROAS consistently above 13× with a CPA of €9 at an average cart value of €80.',
      es: 'Estrategia completa de Google Ads para una marca D2C de moda en el mercado DACH. Presupuesto escalado de menos de €5K a €30K/mes — ROAS constantemente por encima de 13× con un CPA de €9.',
    },
    challenge: {
      de: 'Die Brand hatte bereits Google Ads laufen, aber mit einem ROAS unter 3× und stark schwankendem CPA. Das Tracking war fehlerhaft, die Kampagnenstruktur fragmentiert und es fehlte eine klare Funnel-Strategie.',
      en: 'The brand already had Google Ads running, but with a ROAS below 3× and highly volatile CPA. Tracking was broken, campaign structure was fragmented, and there was no clear funnel strategy.',
      es: 'La marca ya tenía Google Ads en marcha, pero con un ROAS inferior a 3× y un CPA muy volátil. El tracking estaba roto, la estructura de campaña era fragmentada y no había estrategia de funnel clara.',
    },
    solution: {
      de: 'Tracking-Neuaufbau (GA4 + GTM), saubere Kampagnenstruktur nach SKAG-Prinzip, PMAX-Test, Creative-Rotation und Audience-Segmentierung nach Kaufintention. Wöchentliche Bid-Strategie-Anpassungen anhand tatsächlicher ROAS-Ziele.',
      en: 'Rebuilt tracking (GA4 + GTM), clean campaign structure using SKAG principles, PMAX testing, creative rotation and audience segmentation by purchase intent. Weekly bid strategy adjustments based on actual ROAS targets.',
      es: 'Reconstrucción del tracking (GA4 + GTM), estructura de campañas limpia con principios SKAG, test de PMAX, rotación de creatividades y segmentación de audiencias por intención de compra.',
    },
    result: {
      de: 'ROAS von 13× bei konstantem CPA von €9 — Budget innerhalb von 6 Monaten auf €30K/Monat skaliert. Conversion-Rate stieg von 1,2% auf 3,8%.',
      en: 'ROAS of 13× at a consistent CPA of €9 — budget scaled to €30K/month within 6 months. Conversion rate rose from 1.2% to 3.8%.',
      es: 'ROAS de 13× con un CPA constante de €9 — presupuesto escalado a €30K/mes en 6 meses. La tasa de conversión subió del 1,2% al 3,8%.',
    },
  },
  {
    slug: 'shopify-dev-cro',
    category: 'shopify',
    coverImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
    tags: ['Shopify', 'Custom Liquid', 'CRO', 'Heatmaps', 'Google Ads'],
    metrics: [
      { value: '↑ CVR',  label: { de: 'Conversion Rate',   en: 'Conversion Rate',   es: 'Tasa de conversión' } },
      { value: '4 Wo.',  label: { de: 'Launch in 4 Wochen', en: 'Live in 4 weeks',   es: 'En vivo en 4 semanas' } },
      { value: 'Aktiv',  label: { de: 'seit 09/2025',       en: 'since 09/2025',     es: 'desde 09/2025'       } },
    ],
    title: {
      de: 'Shopify-Shop von 0 — mit CRO von Anfang an',
      en: 'Shopify Store from scratch — CRO-first',
      es: 'Tienda Shopify desde cero — CRO desde el inicio',
    },
    eyebrow: {
      de: '02 — Shopify Dev & CRO',
      en: '02 — Shopify Dev & CRO',
      es: '02 — Shopify Dev & CRO',
    },
    description: {
      de: 'Shopify-Shop von Grund auf aufgebaut — Custom Liquid-Theme, optimierter Checkout-Flow und lokale Google-Ads-Kampagnen. CRO-Maßnahmen auf Basis von Microsoft Clarity Heatmaps.',
      en: 'Shopify store built from scratch — custom Liquid theme, optimised checkout flow and local Google Ads campaigns. CRO measures implemented based on Microsoft Clarity heatmaps.',
      es: 'Tienda Shopify construida desde cero — tema Liquid personalizado, flujo de checkout optimizado y campañas locales de Google Ads.',
    },
    challenge: {
      de: 'Der Kunde hatte kein digitales Standbein. Ziel: in 4 Wochen live, technisch sauber, DSGVO-konform und direkt conversion-ready — ohne teures Agentur-Overhead.',
      en: 'The client had no digital presence. Goal: live in 4 weeks, technically solid, GDPR-compliant and immediately conversion-ready — without expensive agency overhead.',
      es: 'El cliente no tenía presencia digital. Objetivo: en vivo en 4 semanas, técnicamente sólido, conforme al RGPD e inmediatamente listo para convertir.',
    },
    solution: {
      de: 'Custom Liquid-Theme nach CI, GA4 + GTM + Clarity Setup, strukturierte Produktseiten mit UX Best Practices, lokale Search-Kampagnen und erste A/B-Tests basierend auf Early-Heatmap-Daten.',
      en: 'Custom Liquid theme to CI specs, GA4 + GTM + Clarity setup, structured product pages with UX best practices, local search campaigns and first A/B tests based on early heatmap data.',
      es: 'Tema Liquid personalizado según CI, configuración GA4 + GTM + Clarity, páginas de producto estructuradas con mejores prácticas UX y primeras pruebas A/B basadas en datos de heatmap.',
    },
    result: {
      de: 'Shop seit 09/2025 aktiv, steigende Conversion-Rate durch kontinuierliche CRO-Maßnahmen. Lokale Kampagnen profitabel ab Monat 2.',
      en: 'Store active since 09/2025, conversion rate improving through continuous CRO measures. Local campaigns profitable from month 2.',
      es: 'Tienda activa desde 09/2025, tasa de conversión mejorando mediante CRO continuo. Campañas locales rentables desde el mes 2.',
    },
  },
  {
    slug: 'elearning-ux-cro',
    category: 'ux',
    coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    tags: ['UX Research', 'CRO', 'A/B Testing', 'eLearning', 'Interviews'],
    metrics: [
      { value: '↓ Abbrüche', label: { de: 'Churn reduziert',   en: 'Churn reduced',       es: 'Churn reducido'      } },
      { value: '↑ Sessions',  label: { de: 'Verweildauer',      en: 'Time on platform',    es: 'Tiempo en plataforma' } },
      { value: '12 Tests',    label: { de: 'A/B-Test-Roadmap',  en: 'A/B test roadmap',    es: 'Hoja de ruta A/B'    } },
    ],
    title: {
      de: 'UX-Lead & CRO — eLearning-Plattform',
      en: 'UX Lead & CRO — eLearning Platform',
      es: 'UX Lead & CRO — Plataforma eLearning',
    },
    eyebrow: {
      de: '03 — UX Lead & CRO',
      en: '03 — UX Lead & CRO',
      es: '03 — UX Lead & CRO',
    },
    description: {
      de: 'UX-Lead für eine deutschsprachige eLearning-Videoplattform. Journey-Audit, Tiefeninterviews und Usability-Tests identifizierten Schwachstellen in Onboarding und Navigation.',
      en: 'UX lead for a German-language eLearning video platform. Journey audit, depth interviews and usability tests identified weaknesses in onboarding and navigation.',
      es: 'UX lead para una plataforma de vídeo de eLearning en alemán. Auditoría de journey, entrevistas en profundidad y tests de usabilidad identificaron debilidades en onboarding y navegación.',
    },
    challenge: {
      de: 'Hohe Kursabbruchrate trotz gutem Content. Nutzer stiegen im Onboarding ab, die Navigation war unintuitiv und es fehlten klare Fortschritts-Signale.',
      en: 'High course drop-off rate despite good content. Users abandoned during onboarding, navigation was unintuitive and clear progress signals were missing.',
      es: 'Alta tasa de abandono de cursos a pesar del buen contenido. Los usuarios abandonaban durante el onboarding, la navegación era poco intuitiva y faltaban señales claras de progreso.',
    },
    solution: {
      de: 'Vollständiger Journey-Audit (5 Schritte), 8 Nutzerinterviews, Heatmap-Auswertung, Usability-Tests mit Prototypen. A/B-Test-Roadmap mit 12 priorisierten Hypothesen.',
      en: 'Full journey audit (5 steps), 8 user interviews, heatmap analysis, usability tests with prototypes. A/B test roadmap with 12 prioritised hypotheses.',
      es: 'Auditoría completa del journey (5 pasos), 8 entrevistas de usuario, análisis de heatmaps, tests de usabilidad con prototipos. Hoja de ruta A/B con 12 hipótesis priorizadas.',
    },
    result: {
      de: 'Reduzierte Kursabbrüche, höhere Verweildauer pro Session. Überarbeitete Onboarding-Prototypen werden in der nächsten Release-Phase umgesetzt.',
      en: 'Reduced course drop-offs, higher session duration. Revised onboarding prototypes scheduled for the next release phase.',
      es: 'Reducción del abandono de cursos, mayor duración de sesión. Prototipos de onboarding revisados programados para la próxima fase de lanzamiento.',
    },
  },
  {
    slug: 'dogfood-brand-ux',
    category: 'branding',
    coverImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop',
    tags: ['Branding', 'UX Research', 'Prototyping', 'MVP', 'App'],
    metrics: [
      { value: '0→Launch', label: { de: 'Brand-Aufbau',         en: 'Brand built',           es: 'Marca construida'   } },
      { value: 'MVP',      label: { de: 'Roadmap & Prototyp',   en: 'Roadmap & prototype',   es: 'Roadmap & prototipo' } },
      { value: '6 Mo.',    label: { de: 'bis Markteinführung',  en: 'to market launch',      es: 'hasta el lanzamiento' } },
    ],
    title: {
      de: 'Branding & UX Research — Tech-Hundefutter-Brand',
      en: 'Branding & UX Research — Tech Dog Food Brand',
      es: 'Branding & UX Research — Marca de comida para perros',
    },
    eyebrow: {
      de: '04 — Branding & UX Research',
      en: '04 — Branding & UX Research',
      es: '04 — Branding & UX Research',
    },
    description: {
      de: 'Markteinführung einer technologiegestützten Hundefuttermarke — vollständiger Markenaufbau, Nutzerinterviews, Value-Proposition-Tests und erste App-Flow-Prototypen.',
      en: 'Market launch of a technology-driven dog food brand — complete brand build, user interviews, value proposition tests and first app flow prototypes.',
      es: 'Lanzamiento al mercado de una marca de comida para perros impulsada por tecnología — construcción completa de marca, entrevistas de usuario, tests de propuesta de valor y primeros prototipos.',
    },
    challenge: {
      de: 'Brand neu aufbauen — ohne Marktkenntnis, ohne Nutzerdaten, ohne technisches Produkt. Gleichzeitig App-Architektur und MVP-Scope definieren.',
      en: 'Build a brand from scratch — no market knowledge, no user data, no technical product yet. Simultaneously define app architecture and MVP scope.',
      es: 'Construir una marca desde cero — sin conocimiento del mercado, sin datos de usuario, sin producto técnico todavía. Simultáneamente definir arquitectura de app y alcance MVP.',
    },
    solution: {
      de: 'Marktrecherche, Wettbewerbsanalyse, 6 Nutzerinterviews, 3 Value-Prop-Tests, CI-Entwicklung (Logo, Farbe, Sprache), App-Flow-Prototypen in Figma, MVP-Backlog-Priorisierung.',
      en: 'Market research, competitive analysis, 6 user interviews, 3 value prop tests, CI development (logo, colour, language), app flow prototypes in Figma, MVP backlog prioritisation.',
      es: 'Investigación de mercado, análisis competitivo, 6 entrevistas de usuario, 3 tests de propuesta de valor, desarrollo de CI (logo, color, lenguaje), prototipos de flujo en Figma.',
    },
    result: {
      de: 'Vollständige Brand-Identität, validierte Value Proposition, App-Prototypen und priorisierter MVP-Backlog. Markteinführung innerhalb von 6 Monaten.',
      en: 'Complete brand identity, validated value proposition, app prototypes and prioritised MVP backlog. Market launch within 6 months.',
      es: 'Identidad de marca completa, propuesta de valor validada, prototipos de app y backlog MVP priorizado. Lanzamiento al mercado en 6 meses.',
    },
  },
];
