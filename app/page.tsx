"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
 
// ─────────────────────────────────────────────────────────────
// JOSE L. TREFF — Portfolio Page
// Next.js App Router · Tailwind · 21st.dev ready
// ─────────────────────────────────────────────────────────────
 
export default function PortfolioPage() {
  const [lang, setLang] = useState<'de' | 'en' | 'es'>('de');
 
  /* ══════════════════════════════════════════════════
     ÜBERSETZUNGEN — HIER TEXTE BEARBEITEN
     Search for "de:", "en:" or "es:" to edit text.
     ══════════════════════════════════════════════════ */
  const T = {
    de: {
      nav_projects: "Projekte",
      nav_services: "Leistungen",
      nav_contact: "Kontakt",
      nav_cta: "Kontakt aufnehmen",
 
      hero_status: "Verfügbar für Projekte — DACH & remote",
      hero_headline: "Performance.<br/>Die<br/><em>konvertiert.</em>",
      hero_sub: "Senior Performance Marketer und Shopify-Entwickler — von der Strategie bis zum Checkout. €30K/Monat Ad-Budget eigenverantwortlich gesteuert über Google, Meta und TikTok für D2C- und B2B-Marken im DACH-Raum.",
      hero_ev1: "ROAS, Fashion D2C",
      hero_ev2: "CPA bei €80 Warenkorbwert",
      hero_ev3: "Jahre, 6 aktive Kunden",
      hero_ev4: "Max. Budget/Monat",
      hero_cta1: "Case Studies ansehen",
      hero_cta2: "15-Min Gespräch buchen",
      tag_ai: "KI-Workflows",
      logos_eyebrow: "Vertrauen von Brands & Gründern",
      testi_eyebrow: "Was Kunden sagen",
      testi_sub: "Echte Zusammenarbeit, klare Ergebnisse.",
      t1_quote: "Jose hat unsere Google-Ads-Performance in wenigen Wochen transformiert — klare Strategie, saubere Umsetzung, messbarer ROAS.",
      t1_name: "M. Schreiber",
      t1_role: "Inhaber · E-Commerce, DACH",
      t2_quote: "Der Shopify-Shop war schnell live, technisch sauber und hat direkt konvertiert. Sehr professionelle Zusammenarbeit.",
      t2_name: "L. Kraft",
      t2_role: "Gründerin · D2C Brand",
      t3_quote: "Das UX-Audit hat echte Probleme aufgedeckt, die wir vorher nicht gesehen haben. Die Abbruchrate im Onboarding ist seitdem deutlich gesunken.",
      t3_name: "T. Reinhardt",
      t3_role: "Product Lead · eLearning",
      about_eyebrow: "Über mich",
      about_text: "Ich bin Jose — Senior Performance Marketer und Shopify-Entwickler aus Hamburg. Seit über 5 Jahren helfe ich D2C- und B2B-Marken im DACH-Raum dabei, messbare Ergebnisse zu erzielen: von der Ads-Strategie bis zum Checkout, vom ersten Klick bis zum Stammkunden.\n\nMein Ansatz ist datengetrieben, pragmatisch und skalierbar — kein Agentur-Overhead, direkte Kommunikation, klare KPIs.",
      about_avail: "Verfügbar für neue Projekte",
      geo_eyebrow: "Neue Disziplin",
      geo_headline: "Werde zitiert — von ChatGPT,<br/>Perplexity & Gemini.",
      geo_sub: "GEO (Generative Engine Optimization) ist der SEO-Nachfolger für das KI-Zeitalter. Ich optimiere Inhalte so, dass sie von KI-Assistenten als Quelle verwendet werden — nicht nur gefunden, sondern zitiert.",
      geo_p1: "JSON-LD Schema & strukturierte Daten",
      geo_p2: "Autorität & E-E-A-T für LLMs",
      geo_p3: "KI-optimierter Content-Aufbau",
      geo_cited: "● Zitiert",
      geo_indexed: "○ Indexiert",
      ct_cta_calendly: "15-Min Gespräch buchen",
      ct_cta_email: "jose@tubebridge.de schreiben",
 
      cases_eyebrow: "Ausgewählte Projekte",
      cases_sub: "Echte Kampagnen, echte Zahlen — von Performance-Marketing über Shopify-Entwicklung bis zu UX-Research und Brand-Aufbau.",
 
      c1_num: "01 — Performance Marketing",
      c1_tag: "ROAS-Skalierung",
      c1_desc: "Vollständige Google-Ads-Strategie für eine Fashion-D2C-Brand im DACH-Markt. Budget von unter €5K auf €30K/Monat skaliert — ROAS konstant über 13 bei einem CPA von €9 bei €80 Ø-Warenkorbwert.",
      c1_k3: "Budget/Monat",
 
      c2_num: "02 — Shopify Dev & CRO",
      c2_desc: "Shopify-Shop von Grund auf aufgebaut — Custom Liquid-Theme entwickelt, Produktstruktur und Checkout-Flow optimiert. Lokale Google-Ads-Kampagnen aufgesetzt und CRO-Maßnahmen auf Basis von Clarity-Heatmaps implementiert.",
      c2_k1: "Custom Dev",
      c2_k2: "Heatmap-basiert",
      c2_k3v: "Aktiv",
      c2_k3: "seit 09/2025",
 
      c3_num: "03 — UX Lead & CRO",
      c3_tag: "Churn-Senkung",
      c3_desc: "UX-Lead für eine deutschsprachige eLearning-Videoplattform. Journey-Audit, Tiefeninterviews und Usability-Tests identifizierten Schwachstellen in Onboarding und Navigation. Ergebnis: A/B-Test-Roadmap, überarbeitete Prototypen, reduzierte Kursabbrüche.",
      c3_k1v: "↓ Abbrüche",
      c3_k1: "Churn reduziert",
      c3_k2v: "↑ Engagement",
      c3_k2: "Verweildauer",
 
      c4_num: "04 — Branding & UX Research",
      c4_tag: "Markenaufbau",
      c4_arch: "App-Architektur",
      c4_desc: "Markteinführung einer technologiegestützten Hundefuttermarke — vollständiger Markenaufbau, Nutzerinterviews, Value-Proposition-Tests und erste App-Flow-Prototypen. MVP-Roadmap und Backlog-Priorisierung für die Skalierungsphase.",
      c4_k1v: "Brand",
      c4_k1: "0 → Launch",
      c4_k2: "Roadmap & Prototyp",
 
      case_link: "Details auf Anfrage",
 
      s1_num: "01 — Performance",
      s1_title: "Paid Media & Wachstum",
      s1_desc: "Google Ads, Meta, TikTok, LinkedIn. Full-Funnel-Strategie, Zielgruppen-Architektur, ROAS-Skalierung. Von €800 bis €30K/Monat eigenverantwortlich gesteuert.",
      s2_num: "02 — Entwicklung",
      s2_title: "Shopify & CRO",
      s2_desc: "Custom Liquid- und Theme-Entwicklung, Conversion-Rate-Optimierung, UX-Verbesserungen auf Basis von Clarity-Heatmaps und A/B-Testdaten.",
      s3_num: "03 — Sichtbarkeit",
      s3_title: "SEO, GEO & KI",
      s3_desc: "Technisches SEO, Generative Engine Optimization für LLM-Zitierungen (ChatGPT, Perplexity), JSON-LD-Schema, KI-Workflow-Automatisierung für Content-Skalierung.",

      svc_eyebrow: "Leistungen",
      svc_headline: "Vom ersten Pixel zur nächsten Conversion.",
      svc_sub: "Ein strukturierter Prozess — von der Website über Tracking und Traffic bis zur optimierten Conversion. Jede Phase baut auf der vorherigen auf.",
      p1_title: "Web Design & Entwicklung",
      p1_desc: "Shopify-Shops, WordPress-Websites und individuelle Webprojekte — technisch sauber, UX-optimiert und conversion-ready. Ob D2C-Shop oder Corporate-Site: ich baue Websites, die performen.",
      p2_title: "Web Analytics & Tracking",
      p2_desc: "Kein Fortschritt ohne Daten. Ich richte GA4, GTM und Microsoft Clarity auf — DSGVO-konform, sauber strukturiert und so konfiguriert, dass jede Maßnahme messbar wird. Monatliche Reportings zeigen, was wirklich zählt.",
      p3_title: "SEO",
      p3_desc: "Organische Sichtbarkeit durch technisches SEO, On-Page-Optimierung, gezielte Keyword-Recherche und strategischen Backlinkaufbau. Langfristige Rankings — kein kurzfristiges Gaming.",
      p4_title: "Paid Media / SEA",
      p4_desc: "Performance-Kampagnen auf Google, Meta und TikTok — von der Zielgruppen-Architektur bis zur täglichen Optimierung. Full-Funnel mit klaren KPIs, transparentem Budget und echten ROAS-Zahlen.",
      p5_title: "CRO — Conversion Optimierung",
      p5_desc: "Wenn Tracking läuft und Traffic da ist, optimiere ich den Funnel. Heatmap-Analyse, A/B-Tests und UX-Research decken auf, wo Besucher abspringen — und was sie zum Kauf bewegt.",
      p6_title: "GEO & KI-Workflows",
      p6_desc: "Die neue Disziplin: Inhalte so strukturieren, dass ChatGPT, Perplexity und Gemini dich als Quelle zitieren. JSON-LD, E-E-A-T-Optimierung und KI-Automatisierung — der nächste Schritt nach SEO.",

      ct_eyebrow: "Lass uns reden",
      ct_headline: "Projekt in Planung?",
      ct_sub: "Ob Google Ads Skalierung, Shopify-Entwicklung oder GEO-Strategie — ich helfe DACH-Brands dabei, messbare Ergebnisse zu erzielen. Remote, flexibel.",
      ct_m1: "Hamburg / Remote",
      ct_m2: "DACH-Fokus",
 
      footer: "© 2026 Jose L. Treff — JLT Marketing Services",
    },
    en: {
      nav_projects: "Projects",
      nav_services: "Services",
      nav_contact: "Contact",
      nav_cta: "Get in touch",
 
      hero_status: "Available for projects — DACH & remote",
      hero_headline: "Performance.<br/>That<br/><em>Converts.</em>",
      hero_sub: "Senior Performance Marketer and Shopify Developer — from strategy to checkout. €30K/month ad budget managed independently across Google, Meta and TikTok for D2C and B2B brands in the DACH market.",
      hero_ev1: "ROAS, Fashion D2C",
      hero_ev2: "CPA on €80 avg. order value",
      hero_ev3: "years, 6 active clients",
      hero_ev4: "Max. Budget/month",
      hero_cta1: "View Case Studies",
      hero_cta2: "Book a 15-min call",
      tag_ai: "AI Workflows",
      logos_eyebrow: "Trusted by brands & founders",
      testi_eyebrow: "What clients say",
      testi_sub: "Real collaboration, measurable results.",
      t1_quote: "Jose transformed our Google Ads performance in just a few weeks — clear strategy, clean execution, measurable ROAS.",
      t1_name: "M. Schreiber",
      t1_role: "Owner · E-Commerce, DACH",
      t2_quote: "The Shopify store went live fast, was technically solid and converted from day one. Very professional collaboration.",
      t2_name: "L. Kraft",
      t2_role: "Founder · D2C Brand",
      t3_quote: "The UX audit uncovered real problems we hadn't seen before. The drop-off rate in onboarding has dropped significantly since.",
      t3_name: "T. Reinhardt",
      t3_role: "Product Lead · eLearning",
      about_eyebrow: "About me",
      about_text: "I'm Jose — Senior Performance Marketer and Shopify Developer based in Hamburg. For over 5 years I've helped D2C and B2B brands in the DACH market achieve measurable results: from ad strategy to checkout, from first click to returning customer.\n\nMy approach is data-driven, pragmatic and scalable — no agency overhead, direct communication, clear KPIs.",
      about_avail: "Available for new projects",
      geo_eyebrow: "New discipline",
      geo_headline: "Get cited — by ChatGPT,<br/>Perplexity & Gemini.",
      geo_sub: "GEO (Generative Engine Optimization) is the SEO successor for the AI era. I optimise content so AI assistants use it as a source — not just found, but cited.",
      geo_p1: "JSON-LD schema & structured data",
      geo_p2: "Authority & E-E-A-T for LLMs",
      geo_p3: "AI-optimised content architecture",
      geo_cited: "● Cited",
      geo_indexed: "○ Indexed",
      ct_cta_calendly: "Book a 15-min call",
      ct_cta_email: "Write to jose@tubebridge.de",
 
      cases_eyebrow: "Selected Projects",
      cases_sub: "Real campaigns, real numbers — from performance marketing and Shopify development to UX research and brand building.",
 
      c1_num: "01 — Performance Marketing",
      c1_tag: "ROAS Scaling",
      c1_desc: "Full Google Ads strategy for a fashion D2C brand in the DACH market. Budget scaled from under €5K to €30K/month — ROAS consistently above 13× with a CPA of €9 at an average cart value of €80.",
      c1_k3: "Budget/month",
 
      c2_num: "02 — Shopify Dev & CRO",
      c2_desc: "Shopify store built from scratch — custom Liquid theme developed, product structure and checkout flow optimized. Local Google Ads campaigns and CRO measures implemented based on Clarity heatmaps.",
      c2_k1: "Custom Dev",
      c2_k2: "Heatmap-based",
      c2_k3v: "Active",
      c2_k3: "since 09/2025",
 
      c3_num: "03 — UX Lead & CRO",
      c3_tag: "Churn Reduction",
      c3_desc: "UX lead for a German-language eLearning video platform. Journey audit, depth interviews and usability tests identified weaknesses in onboarding and navigation. Result: A/B test roadmap, revised prototypes, reduced course drop-offs.",
      c3_k1v: "↓ Drop-offs",
      c3_k1: "Churn reduced",
      c3_k2v: "↑ Engagement",
      c3_k2: "Time on platform",
 
      c4_num: "04 — Branding & UX Research",
      c4_tag: "Brand Building",
      c4_arch: "App Architecture",
      c4_desc: "Market launch of a technology-driven dog food brand — complete brand build, user interviews, value proposition tests and first app flow prototypes. MVP roadmap and backlog prioritization for the scaling phase.",
      c4_k1v: "Brand",
      c4_k1: "0 → Launch",
      c4_k2: "Roadmap & Prototype",
 
      case_link: "Details on request",
 
      s1_num: "01 — Performance",
      s1_title: "Paid Media & Growth",
      s1_desc: "Google Ads, Meta, TikTok, LinkedIn. Full-funnel strategy, audience architecture, ROAS scaling. From €800 to €30K/month managed independently.",
      s2_num: "02 — Development",
      s2_title: "Shopify & CRO",
      s2_desc: "Custom Liquid and theme development, conversion rate optimization, UX improvements based on Clarity heatmaps and A/B test data.",
      s3_num: "03 — Visibility",
      s3_title: "SEO, GEO & AI",
      s3_desc: "Technical SEO, Generative Engine Optimization for LLM citations (ChatGPT, Perplexity), JSON-LD schema markup, AI workflow automation for content scaling.",

      svc_eyebrow: "Services",
      svc_headline: "From the first pixel to the next conversion.",
      svc_sub: "A structured process — from website to tracking, traffic and optimised conversions. Every phase builds on the previous one.",
      p1_title: "Web Design & Development",
      p1_desc: "Shopify stores, WordPress websites and custom web projects — technically clean, UX-optimised and conversion-ready. Whether D2C shop or corporate site: I build websites that perform.",
      p2_title: "Web Analytics & Tracking",
      p2_desc: "No progress without data. I set up GA4, GTM and Microsoft Clarity — GDPR-compliant, cleanly structured and configured so every measure is trackable. Monthly reports show what actually matters.",
      p3_title: "SEO",
      p3_desc: "Organic visibility through technical SEO, on-page optimisation, targeted keyword research and strategic link building. Long-term rankings — no short-term tricks.",
      p4_title: "Paid Media / SEA",
      p4_desc: "Performance campaigns on Google, Meta and TikTok — from audience architecture to daily optimisation. Full-funnel with clear KPIs, transparent budget management and real ROAS numbers.",
      p5_title: "CRO — Conversion Optimisation",
      p5_desc: "Once tracking is live and traffic is flowing, I optimise the funnel. Heatmap analysis, A/B testing and UX research reveal where visitors drop off — and what converts them.",
      p6_title: "GEO & AI Workflows",
      p6_desc: "The new discipline: structure content so that ChatGPT, Perplexity and Gemini cite you as a source. JSON-LD, E-E-A-T optimisation and AI automation — the next step beyond SEO.",

      ct_eyebrow: "Let's talk",
      ct_headline: "Planning a project?",
      ct_sub: "Whether Google Ads scaling, Shopify development or GEO strategy — I help DACH brands achieve measurable results. Remote, flexible.",
      ct_m1: "Hamburg / Remote",
      ct_m2: "DACH focus",
 
      footer: "© 2026 Jose L. Treff — JTL Marketing Services",
    },
    es: {
      nav_projects: "Proyectos",
      nav_services: "Servicios",
      nav_contact: "Contacto",
      nav_cta: "Contáctame",

      hero_status: "Disponible para proyectos — DACH y remoto",
      hero_headline: "Performance.<br/>Que<br/><em>Convierte.</em>",
      hero_sub: "Senior Performance Marketer y desarrollador Shopify — de la estrategia al checkout. €30K/mes en presupuesto publicitario gestionado de forma autónoma en Google, Meta y TikTok para marcas D2C y B2B en el mercado DACH.",
      hero_ev1: "ROAS, Moda D2C",
      hero_ev2: "CPA con carrito medio de €80",
      hero_ev3: "años, 6 clientes activos",
      hero_ev4: "Presupuesto máx./mes",
      hero_cta1: "Ver Case Studies",
      hero_cta2: "Reservar llamada de 15 min",
      tag_ai: "Flujos de IA",
      logos_eyebrow: "Marcas y fundadores que confían",
      testi_eyebrow: "Lo que dicen los clientes",
      testi_sub: "Colaboración real, resultados medibles.",
      t1_quote: "Jose transformó el rendimiento de nuestros Google Ads en pocas semanas — estrategia clara, ejecución limpia, ROAS medible.",
      t1_name: "M. Schreiber",
      t1_role: "Propietario · E-Commerce, DACH",
      t2_quote: "La tienda Shopify fue rápida, técnicamente sólida y convirtió desde el primer día. Colaboración muy profesional.",
      t2_name: "L. Kraft",
      t2_role: "Fundadora · D2C Brand",
      t3_quote: "La auditoría UX descubrió problemas reales que no habíamos visto. La tasa de abandono en el onboarding ha bajado significativamente.",
      t3_name: "T. Reinhardt",
      t3_role: "Product Lead · eLearning",
      about_eyebrow: "Sobre mí",
      about_text: "Soy Jose — Senior Performance Marketer y desarrollador Shopify afincado en Hamburgo. Desde hace más de 5 años ayudo a marcas D2C y B2B en el mercado DACH a conseguir resultados medibles: desde la estrategia de ads hasta el checkout, desde el primer clic hasta el cliente recurrente.\n\nMi enfoque es basado en datos, pragmático y escalable — sin overhead de agencia, comunicación directa, KPIs claros.",
      about_avail: "Disponible para nuevos proyectos",
      geo_eyebrow: "Nueva disciplina",
      geo_headline: "Sé citado — por ChatGPT,<br/>Perplexity y Gemini.",
      geo_sub: "GEO (Generative Engine Optimization) es el sucesor del SEO para la era de la IA. Optimizo contenidos para que los asistentes de IA los usen como fuente — no solo encontrado, sino citado.",
      geo_p1: "Schema JSON-LD y datos estructurados",
      geo_p2: "Autoridad y E-E-A-T para LLMs",
      geo_p3: "Arquitectura de contenido optimizada para IA",
      geo_cited: "● Citado",
      geo_indexed: "○ Indexado",
      ct_cta_calendly: "Reservar llamada de 15 min",
      ct_cta_email: "Escribir a jose@tubebridge.de",

      cases_eyebrow: "Proyectos seleccionados",
      cases_sub: "Campañas reales, números reales — desde performance marketing y desarrollo Shopify hasta investigación de UX y construcción de marca.",

      c1_num: "01 — Performance Marketing",
      c1_tag: "Escalado ROAS",
      c1_desc: "Estrategia completa de Google Ads para una marca D2C de moda en el mercado DACH. Presupuesto escalado de menos de €5K a €30K/mes — ROAS constante por encima de 13× con CPA de €9 y carrito medio de €80.",
      c1_k3: "Presupuesto/mes",

      c2_num: "02 — Shopify Dev y CRO",
      c2_desc: "Tienda Shopify construida desde cero — tema Liquid personalizado, estructura de productos y flujo de checkout optimizados. Campañas locales de Google Ads e implementación de CRO basada en mapas de calor de Clarity.",
      c2_k1: "Desarrollo Custom",
      c2_k2: "Basado en heatmap",
      c2_k3v: "Activo",
      c2_k3: "desde 09/2025",

      c3_num: "03 — UX Lead y CRO",
      c3_tag: "Reducción de Churn",
      c3_desc: "UX lead para una plataforma de video eLearning en alemán. Auditoría del journey, entrevistas y tests de usabilidad identificaron debilidades en el onboarding y la navegación. Resultado: roadmap de A/B testing, prototipos revisados, reducción de abandonos.",
      c3_k1v: "↓ Abandonos",
      c3_k1: "Churn reducido",
      c3_k2v: "↑ Engagement",
      c3_k2: "Tiempo en plataforma",

      c4_num: "04 — Branding y UX Research",
      c4_tag: "Construcción de Marca",
      c4_arch: "Arquitectura de App",
      c4_desc: "Lanzamiento al mercado de una marca de comida para perros impulsada por tecnología — construcción completa de marca, entrevistas de usuario, tests de propuesta de valor y prototipos de flujo de app. Roadmap MVP para la fase de escala.",
      c4_k1v: "Marca",
      c4_k1: "0 → Lanzamiento",
      c4_k2: "Roadmap y Prototipo",

      case_link: "Detalles a consultar",

      s1_num: "01 — Performance",
      s1_title: "Paid Media y Crecimiento",
      s1_desc: "Google Ads, Meta, TikTok, LinkedIn. Estrategia full-funnel, arquitectura de audiencias, escalado de ROAS. De €800 a €30K/mes gestionado de forma autónoma.",
      s2_num: "02 — Desarrollo",
      s2_title: "Shopify y CRO",
      s2_desc: "Desarrollo custom de Liquid y themes, optimización de tasa de conversión, mejoras de UX basadas en heatmaps de Clarity y datos de A/B testing.",
      s3_num: "03 — Visibilidad",
      s3_title: "SEO, GEO e IA",
      s3_desc: "SEO técnico, Generative Engine Optimization para citas en LLMs (ChatGPT, Perplexity), schema JSON-LD, automatización de flujos de IA para escalado de contenido.",

      svc_eyebrow: "Servicios",
      svc_headline: "Del primer píxel a la próxima conversión.",
      svc_sub: "Un proceso estructurado — desde la web hasta el tracking, el tráfico y las conversiones optimizadas. Cada fase construye sobre la anterior.",
      p1_title: "Web Design y Desarrollo",
      p1_desc: "Tiendas Shopify, webs WordPress y proyectos a medida — técnicamente sólidos, optimizados para UX y listos para convertir. Desde tiendas D2C hasta sites corporativos: webs que rinden.",
      p2_title: "Analytics y Tracking",
      p2_desc: "Sin datos no hay progreso. Configuro GA4, GTM y Microsoft Clarity — conforme al RGPD, bien estructurado y listo para medir cada acción. Reportings mensuales que muestran lo que realmente importa.",
      p3_title: "SEO",
      p3_desc: "Visibilidad orgánica a través de SEO técnico, optimización on-page, investigación de keywords y link building estratégico. Rankings a largo plazo — sin atajos.",
      p4_title: "Paid Media / SEA",
      p4_desc: "Campañas de performance en Google, Meta y TikTok — desde la arquitectura de audiencias hasta la optimización diaria. Full-funnel con KPIs claros, presupuesto transparente y ROAS reales.",
      p5_title: "CRO — Optimización de Conversión",
      p5_desc: "Cuando el tracking funciona y el tráfico llega, optimizo el funnel. Análisis de heatmaps, A/B testing e investigación UX revelan dónde abandonan los visitantes — y qué los convierte.",
      p6_title: "GEO y Flujos de IA",
      p6_desc: "La nueva disciplina: estructurar contenidos para que ChatGPT, Perplexity y Gemini te citen como fuente. JSON-LD, E-E-A-T y automatización con IA — el siguiente paso al SEO.",

      ct_eyebrow: "Hablemos",
      ct_headline: "¿Tienes un proyecto?",
      ct_sub: "Ya sea escalado de Google Ads, desarrollo Shopify o estrategia GEO — ayudo a marcas del DACH a conseguir resultados medibles. Remoto, flexible.",
      ct_m1: "Hamburgo / Remoto",
      ct_m2: "Enfoque DACH",

      footer: "© 2026 Jose L. Treff — JLT Marketing Services",
    },
  } as const;
 
  const t = (key: keyof typeof T.de) => T[lang][key] ?? T.de[key];
 
  // Arrow SVG reused across buttons
  const ArrowRight = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
 
  return (
    <main style={{ background: 'oklch(9% 0.008 260)', color: 'oklch(95% 0.006 260)', fontFamily: "'Epilogue', system-ui, sans-serif", lineHeight: 1.5, overflowX: 'hidden', minHeight: '100dvh' }}>
 
      {/* ── ALL COMPONENT CSS ─────────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@400;600;700&family=Epilogue:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap');
 
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { -webkit-font-smoothing: antialiased; }
 
        :root {
          --space:   oklch(9%  0.008 260);
          --navy:    oklch(12% 0.010 260);
          --graphite:oklch(15% 0.012 260);
          --slate:   oklch(19% 0.014 260);
          --border:  oklch(24% 0.016 260);
          --border-s:oklch(95% 0.006 260 / 0.06);
          --brand:   oklch(75% 0.165 140);
          --brand-hi:oklch(82% 0.145 138);
          --brand-dk:oklch(65% 0.175 140);
          --brand-bd:oklch(75% 0.165 140 / 0.30);
          --brand-bg:oklch(75% 0.165 140 / 0.06);
          --indigo:  oklch(68% 0.165 265);
          --indigo2: oklch(58% 0.200 265);
          --success: oklch(65% 0.190 145);
          --gray3:   oklch(68% 0.010 260);
          --gray4:   oklch(52% 0.010 260);
          --white:   oklch(95% 0.006 260);
          --fh: 'Barlow Semi Condensed', system-ui, sans-serif;
          --fb: 'Epilogue', system-ui, sans-serif;
          --fm: 'JetBrains Mono', monospace;
          --eq: cubic-bezier(.25,1,.5,1);
          --ex: cubic-bezier(.16,1,.3,1);
        }
 
        /* ── ORBS ── */
        @keyframes orbFloat { 0%{transform:translate(0,0) scale(1)} 33%{transform:translate(3%,-4%) scale(1.04)} 66%{transform:translate(-2%,3%) scale(.97)} 100%{transform:translate(0,0) scale(1)} }
        @keyframes orbAlt   { 0%{transform:translate(0,0) scale(1)} 40%{transform:translate(-5%,4%) scale(1.06)} 70%{transform:translate(3%,-3%) scale(.95)} 100%{transform:translate(0,0) scale(1)} }
        .jlt-orb { position:fixed; border-radius:50%; filter:blur(90px); pointer-events:none; z-index:0; }
        .orb-brand  { width:55vw;height:55vw;max-width:680px;max-height:680px;background:var(--brand);top:-15%;left:-10%;opacity:.09;animation:orbFloat 14s ease-in-out infinite; }
        .orb-indigo { width:50vw;height:50vw;max-width:600px;max-height:600px;background:oklch(58% 0.200 265);bottom:-20%;right:-8%;opacity:.08;animation:orbAlt 18s ease-in-out infinite; }
 
        /* ── NAV ── */
        .jlt-nav { position:fixed;top:0;left:0;right:0;z-index:200;height:60px;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(1rem,4vw,1.5rem);background:oklch(9% 0.008 260/.88);backdrop-filter:blur(16px) saturate(1.5);-webkit-backdrop-filter:blur(16px) saturate(1.5);border-bottom:1px solid oklch(95% 0.006 260/.07); }
        .jlt-logo { font-family:var(--fh);font-size:1rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--white);text-decoration:none; }
        .jlt-logo span { color:var(--brand); }
        .jlt-nav-links { display:flex;align-items:center;gap:2rem;list-style:none; }
        .jlt-nav-links a { font-family:var(--fb);font-size:.8125rem;font-weight:500;letter-spacing:.04em;color:var(--gray3);text-decoration:none;transition:color 180ms var(--eq); }
        .jlt-nav-links a:hover { color:var(--white); }
        .jlt-nav-right { display:flex;align-items:center;gap:1rem; }
        .jlt-lang { display:flex;align-items:center;gap:2px;background:var(--graphite);border:1px solid var(--border);border-radius:6px;padding:3px; }
        .jlt-lang-btn { font-family:var(--fm);font-size:.625rem;font-weight:600;letter-spacing:.05em;color:var(--gray4);background:transparent;border:none;padding:4px 7px;border-radius:4px;cursor:pointer;transition:color 150ms,background 150ms; }
        .jlt-lang-btn.active { color:oklch(9% 0.008 260);background:var(--brand); }
        .jlt-lang-btn:hover:not(.active) { color:var(--white); }
        .jlt-cta { font-family:var(--fb);font-size:.8125rem;font-weight:500;color:oklch(9% 0.008 260);background:var(--brand);border:none;padding:8px 18px;border-radius:6px;cursor:pointer;text-decoration:none;transition:background 180ms var(--eq),box-shadow 180ms var(--eq),transform 100ms var(--eq); }
        .jlt-cta:hover { background:var(--brand-dk);box-shadow:0 0 20px oklch(75% 0.165 140/.25);transform:translateY(-1px); }
 
        /* ── HERO ── */
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        .jlt-hero { min-height:100dvh;padding:60px clamp(1rem,6vw,4rem) 0;display:flex;flex-direction:column;justify-content:center;position:relative;z-index:1; }
        .jlt-hero-inner { max-width:1280px;margin:0 auto;width:100%;padding:4rem 0 3rem;display:grid;grid-template-columns:1fr 1fr;grid-template-areas:"text video" "strip strip" "ctas ctas" "tags tags";gap:2rem 3rem;align-items:start; }
        .jlt-hero-text  { grid-area:text;display:flex;flex-direction:column;gap:1.5rem; }
        .jlt-hero-evidence { grid-area:strip;display:flex;flex-wrap:wrap;gap:1rem 2rem;align-items:center;padding:1.5rem 0;border-top:1px solid var(--border-s);border-bottom:1px solid var(--border-s); }
        .jlt-hero-ctas { grid-area:ctas;display:flex;flex-wrap:wrap;gap:1rem;align-items:center; }
        .jlt-hero-tags { grid-area:tags;display:flex;flex-wrap:wrap;gap:.5rem;align-items:center; }
        .jlt-video-col { grid-area:video;display:flex;flex-direction:column;gap:1rem;padding-top:.5rem; }
 
        .jlt-status { display:inline-flex;align-items:center;gap:.5rem;padding:5px 12px;border-radius:9999px;border:1px solid var(--brand-bd);background:var(--brand-bg);width:fit-content; }
        .jlt-status-dot { width:6px;height:6px;border-radius:50%;background:var(--success);box-shadow:0 0 6px oklch(65% 0.190 145/.6);animation:pulse 2.5s ease-in-out infinite; }
        .jlt-status-text { font-family:var(--fm);font-size:.6875rem;font-weight:400;letter-spacing:.06em;color:var(--brand-hi);text-transform:uppercase; }
        .jlt-headline { font-family:var(--fh);font-size:clamp(3rem,5vw + .5rem,4.5rem);font-weight:700;line-height:1.05;letter-spacing:-.025em;color:var(--white); }
        .jlt-headline em { font-style:normal;color:var(--brand); }
        .jlt-sub { font-family:var(--fb);font-size:clamp(.9375rem,1.2vw + .3rem,1.1rem);font-weight:400;line-height:1.65;color:var(--gray3);max-width:46ch; }
 
        .ev-item { display:flex;align-items:baseline;gap:.5rem; }
        .ev-val   { font-family:var(--fm);font-size:1.375rem;font-weight:600;color:var(--brand);line-height:1; }
        .ev-label { font-family:var(--fb);font-size:.8125rem;color:var(--gray3); }
        .ev-sep   { width:1px;height:24px;background:var(--border);flex-shrink:0; }
 
        .btn-primary { display:inline-flex;align-items:center;gap:.5rem;padding:13px 2rem;background:var(--brand);color:oklch(9% 0.008 260);border:none;border-radius:6px;font-family:var(--fb);font-size:.9375rem;font-weight:500;letter-spacing:.02em;cursor:pointer;text-decoration:none;transition:background 180ms var(--eq),box-shadow 180ms var(--eq),transform 100ms var(--eq); }
        .btn-primary:hover { background:var(--brand-dk);box-shadow:0 0 24px oklch(75% 0.165 140/.25);transform:translateY(-1px); }
        .btn-ghost { display:inline-flex;align-items:center;gap:.5rem;padding:13px 2rem;background:transparent;color:var(--white);border:1px solid var(--border);border-radius:6px;font-family:var(--fb);font-size:.9375rem;font-weight:400;cursor:pointer;text-decoration:none;transition:border-color 180ms var(--eq),background 180ms var(--eq); }
        .btn-ghost:hover { border-color:var(--brand-bd);background:var(--brand-bg); }
 
        .skill-tag { padding:4px 10px;border-radius:3px;border:1px solid var(--border);background:oklch(95% 0.006 260/.04);font-family:var(--fb);font-size:.75rem;color:var(--gray3);letter-spacing:.02em; }
        .skill-tag.tech { border-color:oklch(58% 0.200 265/.30);color:var(--indigo);background:oklch(58% 0.200 265/.06); }
 
        /* ── VIDEO CARD ── */
        .jlt-video-card { position:relative;border-radius:16px;border:1px solid var(--border);background:var(--graphite);overflow:hidden;cursor:pointer;aspect-ratio:16/10;transition:border-color 220ms var(--eq),box-shadow 220ms var(--eq),transform 220ms var(--eq); }
        .jlt-video-card:hover { border-color:var(--brand-bd);box-shadow:0 0 40px oklch(75% 0.165 140/.14),0 12px 48px oklch(9% 0.008 260/.60);transform:translateY(-3px); }
        .vc-chrome { position:absolute;top:0;left:0;right:0;height:36px;z-index:2;background:var(--slate);border-bottom:1px solid var(--border);display:flex;align-items:center;padding:0 1rem;gap:1rem; }
        .vc-dots { display:flex;gap:6px; }
        .vc-dots span { width:10px;height:10px;border-radius:50%; }
        .vc-url { flex:1;height:20px;border-radius:4px;background:var(--navy);border:1px solid var(--border);display:flex;align-items:center;padding:0 .5rem;font-family:var(--fm);font-size:.625rem;color:var(--gray4);overflow:hidden;white-space:nowrap; }
        .vc-inner { position:absolute;top:36px;left:0;right:0;bottom:0;overflow:hidden; }
        .vc-header { padding:.5rem 1rem;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:1rem;background:var(--navy); }
        .vc-tab { font-family:var(--fb);font-size:.6875rem;font-weight:500;color:var(--gray4);padding:4px 10px;border-radius:3px; }
        .vc-tab.active { color:var(--brand);background:oklch(75% 0.165 140/.10); }
        .vc-metrics { display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);border-bottom:1px solid var(--border); }
        .vc-metric { padding:.5rem 1rem;background:var(--graphite);display:flex;flex-direction:column;gap:2px; }
        .vc-metric-label { font-family:var(--fb);font-size:.5625rem;letter-spacing:.04em;text-transform:uppercase;color:var(--gray4); }
        .vc-metric-val { font-family:var(--fm);font-size:.9375rem;font-weight:600;color:var(--white);line-height:1; }
        .vc-metric-val.g { color:var(--success); }
        .vc-metric-val.a { color:var(--brand); }
        .vc-chart { padding:1rem;height:100%;display:flex;flex-direction:column;gap:.5rem; }
        .vc-chart-hdr { font-family:var(--fb);font-size:.6875rem;font-weight:500;color:var(--gray3); }
        .bars { flex:1;display:flex;align-items:flex-end;gap:4px;overflow:hidden; }
        .bar-w { flex:1;display:flex;flex-direction:column;gap:3px; }
        .bar { border-radius:2px 2px 0 0;min-height:3px;position:relative; }
        .bar-d { font-family:var(--fm);font-size:.4375rem;color:var(--gray4);text-align:center; }
        .play-btn { position:absolute;top:calc(50% + 18px);left:50%;transform:translate(-50%,-50%);z-index:10;width:56px;height:56px;border-radius:50%;background:var(--brand);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 0 32px oklch(75% 0.165 140/.40),0 4px 16px oklch(9% 0.008 260/.60);transition:transform 220ms var(--eq); }
        .jlt-video-card:hover .play-btn { transform:translate(-50%,-50%) scale(1.08); }
        .play-btn svg { width:22px;height:22px;fill:oklch(9% 0.008 260);margin-left:3px; }
        .vc-meta { display:flex;align-items:center;justify-content:space-between;padding:0 .25rem; }
        .vc-caption { font-family:var(--fb);font-size:.8125rem;color:var(--gray3);display:flex;align-items:center;gap:.5rem; }
        .vc-duration { font-family:var(--fm);font-size:.75rem;color:var(--gray4);padding:3px 8px;border-radius:3px;background:var(--navy);border:1px solid var(--border); }
 
        /* ── SERVICES FUNNEL ── */
        .jlt-svf { padding:6rem clamp(1rem,6vw,4rem);background:var(--navy);border-top:1px solid var(--border-s);position:relative;z-index:1; }
        .jlt-svf-inner { max-width:1280px;margin:0 auto; }
        .svf-hdr { margin-bottom:3rem;display:flex;flex-direction:column;gap:1rem; }
        .svf-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:14px;overflow:hidden; }
        .svf-card { padding:2.5rem 2rem;display:flex;flex-direction:column;gap:1.25rem;background:var(--graphite);transition:background 180ms var(--eq); }
        .svf-card:hover { background:var(--slate); }
        .svf-card.geo { background:radial-gradient(ellipse 140% 160% at 90% 10%,oklch(68% 0.165 265/.14) 0%,var(--graphite) 55%); }
        .svf-card.geo:hover { background:radial-gradient(ellipse 140% 160% at 90% 10%,oklch(68% 0.165 265/.22) 0%,var(--slate) 55%); }
        .svf-num { font-family:var(--fm);font-size:.625rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--brand); }
        .svf-card.geo .svf-num { color:var(--indigo); }
        .svf-title { font-family:var(--fh);font-size:1.25rem;font-weight:700;letter-spacing:-.015em;line-height:1.15;color:var(--white); }
        .svf-desc { font-family:var(--fb);font-size:.875rem;line-height:1.7;color:var(--gray3);flex:1; }
        .svf-tools { display:flex;flex-wrap:wrap;gap:.375rem;margin-top:auto; }
        .svf-tool { padding:3px 9px;border-radius:3px;border:1px solid var(--border);background:oklch(95% 0.006 260/.04);font-family:var(--fm);font-size:.625rem;letter-spacing:.03em;color:var(--gray4); }
        .svf-card.geo .svf-tool { border-color:oklch(68% 0.165 265/.28);color:var(--indigo);background:oklch(68% 0.165 265/.07); }
        .svf-badge { display:inline-flex;align-items:center;gap:.375rem;padding:3px 9px;border-radius:9999px;border:1px solid oklch(68% 0.165 265/.35);background:oklch(68% 0.165 265/.10);font-family:var(--fm);font-size:.5625rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--indigo);width:fit-content; }
        @media(max-width:900px) { .svf-grid { grid-template-columns:repeat(2,1fr); } }
        @media(max-width:580px) { .svf-grid { grid-template-columns:1fr; } }

        /* ── CASES ── */
        .jlt-cases { padding:6rem clamp(1rem,6vw,4rem);background:var(--space);position:relative;z-index:1; }
        .jlt-cases-inner { max-width:1280px;margin:0 auto; }
        .cases-hdr { margin-bottom:4rem;display:flex;flex-direction:column;gap:1rem; }
        .eyebrow { font-family:var(--fm);font-size:.6875rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--brand); }
        .sec-h { font-family:var(--fh);font-size:clamp(2rem,4vw + .5rem,3rem);font-weight:700;letter-spacing:-.02em;line-height:1.05;color:var(--white); }
        .sec-sub { font-family:var(--fb);font-size:.9375rem;color:var(--gray3);max-width:52ch;line-height:1.65; }
 
        .case-card { display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center;padding:4rem 0;border-top:1px solid var(--border-s); }
        .case-card:nth-child(even) { direction:rtl; }
        .case-card:nth-child(even) > * { direction:ltr; }
        .case-card:last-child { border-bottom:1px solid var(--border-s); }
        .case-text { display:flex;flex-direction:column;gap:1.5rem; }
        .case-num { font-family:var(--fm);font-size:.6875rem;font-weight:600;letter-spacing:.12em;color:var(--brand);text-transform:uppercase; }
        .case-title { font-family:var(--fh);font-size:clamp(1.75rem,3vw,2.5rem);font-weight:700;letter-spacing:-.02em;line-height:1.1;color:var(--white); }
        .case-tags-row { display:flex;flex-wrap:wrap;gap:.25rem .5rem; }
        .ctag { padding:3px 10px;border-radius:3px;border:1px solid var(--border);font-family:var(--fb);font-size:.75rem;color:var(--gray3);background:oklch(95% 0.006 260/.04); }
        .ctag.hi { border-color:var(--brand-bd);color:var(--brand-hi);background:var(--brand-bg); }
        .ctag.tech { border-color:oklch(58% 0.200 265/.30);color:var(--indigo);background:oklch(58% 0.200 265/.06); }
        .case-desc { font-family:var(--fb);font-size:.9375rem;line-height:1.7;color:var(--gray3);max-width:48ch; }
        .case-result { display:inline-flex;align-items:center;gap:1.5rem;flex-wrap:wrap; }
        .res-kpi { display:flex;flex-direction:column;gap:2px; }
        .res-val { font-family:var(--fm);font-size:1.5rem;font-weight:600;color:var(--brand);line-height:1; }
        .res-label { font-family:var(--fb);font-size:.75rem;color:var(--gray4);letter-spacing:.02em; }
        .res-div { width:1px;height:32px;background:var(--border);flex-shrink:0; }
        .case-link { display:inline-flex;align-items:center;gap:.5rem;font-family:var(--fb);font-size:.875rem;font-weight:500;color:var(--brand);text-decoration:none;transition:gap 180ms var(--eq); }
        .case-link:hover { color:var(--brand-hi);gap:.75rem; }
 
        .case-visual { border-radius:16px;border:1px solid var(--border);background:var(--graphite);overflow:hidden;aspect-ratio:4/3;position:relative;transition:border-color 220ms var(--eq),box-shadow 220ms var(--eq); }
        .case-card:hover .case-visual { border-color:var(--brand-bd);box-shadow:0 0 40px oklch(75% 0.165 140/.10),0 16px 48px oklch(9% 0.008 260/.50); }
        .mock-chrome { height:32px;background:var(--slate);border-bottom:1px solid var(--border);display:flex;align-items:center;padding:0 1rem;gap:.5rem;flex-shrink:0; }
        .mock-dots { display:flex;gap:5px; }
        .mock-dots span { width:8px;height:8px;border-radius:50%; }
        .mock-url { flex:1;height:17px;border-radius:3px;background:var(--navy);border:1px solid var(--border);display:flex;align-items:center;padding:0 .5rem;font-family:var(--fm);font-size:.5625rem;color:var(--gray4);overflow:hidden;white-space:nowrap; }
 
        /* Mock: Statement Clothing */
        .mock-stmt { display:flex;flex-direction:column;height:100%; }
        .mock-stmt-body { flex:1;overflow:hidden;display:flex;flex-direction:column; }
        .kpi-row { display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);border-bottom:1px solid var(--border); }
        .kpi-cell { background:var(--graphite);padding:.5rem 1rem;display:flex;flex-direction:column;gap:2px; }
        .kpi-l { font-family:var(--fb);font-size:.5rem;letter-spacing:.05em;text-transform:uppercase;color:var(--gray4); }
        .kpi-v { font-family:var(--fm);font-size:.875rem;font-weight:600;color:var(--white);line-height:1; }
        .kpi-v.a { color:var(--brand); }
        .kpi-v.g { color:var(--success); }
        .camp-list { flex:1;padding:.5rem 1rem;display:flex;flex-direction:column;gap:.5rem;overflow:hidden; }
        .camp-hdr { font-family:var(--fb);font-size:.5625rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--gray4);display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:.5rem;padding-bottom:.25rem;border-bottom:1px solid var(--border-s); }
        .camp-row { display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:.5rem;align-items:center; }
        .camp-name { font-family:var(--fb);font-size:.625rem;color:var(--white);white-space:nowrap;overflow:hidden;text-overflow:ellipsis; }
        .camp-stat { font-family:var(--fm);font-size:.625rem;color:var(--gray3); }
        .camp-stat.g { color:var(--success); }
        .camp-stat.a { color:var(--brand); }
        .dot-g { display:inline-block;width:5px;height:5px;border-radius:50%;background:var(--success);margin-right:4px; }
 
        /* Mock: Die Barista */
        .mock-shop-bar { flex:0 0 auto;background:oklch(11% 0.010 40);padding:.5rem 1.5rem;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid oklch(24% 0.016 40); }
        .mock-shop-logo { font-family:var(--fh);font-size:.875rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:oklch(88% 0.070 70); }
        .mock-shop-nav { display:flex;gap:1rem; }
        .mock-shop-nav span { font-family:var(--fb);font-size:.5625rem;color:oklch(68% 0.040 70); }
        .mock-shop-body { flex:1;overflow:hidden;padding:1rem;display:flex;flex-direction:column;gap:.5rem; }
        .mock-banner { background:linear-gradient(135deg,oklch(14% 0.015 40),oklch(18% 0.025 50));border:1px solid oklch(24% 0.016 40);border-radius:6px;padding:1rem 1.5rem;display:flex;flex-direction:column;gap:4px; }
        .mock-banner-tag { font-family:var(--fm);font-size:.4375rem;letter-spacing:.08em;text-transform:uppercase;color:oklch(75% 0.110 70); }
        .mock-banner-title { font-family:var(--fh);font-size:.9375rem;font-weight:700;color:oklch(92% 0.040 80);line-height:1.2; }
        .mock-products { display:grid;grid-template-columns:repeat(3,1fr);gap:.5rem;flex:1; }
        .mock-product { border-radius:6px;background:oklch(13% 0.012 40);border:1px solid oklch(20% 0.014 40);overflow:hidden;display:flex;flex-direction:column; }
        .mock-prod-img { aspect-ratio:1;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,oklch(16% 0.018 50),oklch(20% 0.025 60));font-size:1.25rem; }
        .mock-prod-info { padding:.25rem .5rem; }
        .mock-prod-name { font-family:var(--fb);font-size:.5rem;color:oklch(75% 0.025 60);margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis; }
        .mock-prod-price { font-family:var(--fm);font-size:.5625rem;font-weight:600;color:oklch(88% 0.070 70); }
        .mock-shop-stats { display:grid;grid-template-columns:repeat(3,1fr);gap:.25rem; }
        .mock-ss { background:oklch(13% 0.012 40);border:1px solid oklch(20% 0.014 40);border-radius:3px;padding:.25rem .5rem;display:flex;flex-direction:column;gap:1px; }
        .mock-ss-l { font-family:var(--fb);font-size:.4375rem;color:oklch(52% 0.020 60);text-transform:uppercase;letter-spacing:.04em; }
        .mock-ss-v { font-family:var(--fm);font-size:.6875rem;font-weight:600;color:oklch(85% 0.060 70); }
 
        /* Mock: Meet Your Master */
        .mock-mym-side { position:absolute;left:0;top:32px;bottom:0;width:90px;background:var(--navy);border-right:1px solid var(--border);padding:.5rem;display:flex;flex-direction:column;gap:.25rem;overflow:hidden; }
        .mym-nav-item { padding:.25rem .5rem;border-radius:3px;display:flex;align-items:center;gap:.25rem;font-family:var(--fb);font-size:.5rem;color:var(--gray4); }
        .mym-nav-item.active { background:oklch(58% 0.200 265/.12);color:var(--indigo); }
        .mym-nav-dot { width:4px;height:4px;border-radius:50%;background:currentColor;flex-shrink:0; }
        .mock-mym-main { position:absolute;left:90px;right:0;top:32px;bottom:0;padding:.5rem 1rem;display:flex;flex-direction:column;gap:.5rem;overflow:hidden; }
        .mym-greeting { font-family:var(--fh);font-size:.75rem;font-weight:600;color:var(--white); }
        .mym-prog { background:var(--navy);border:1px solid var(--border);border-radius:6px;padding:.5rem 1rem;display:flex;flex-direction:column;gap:.25rem; }
        .mym-prog-lbl { font-family:var(--fb);font-size:.5rem;color:var(--gray4);display:flex;justify-content:space-between; }
        .mym-bar { height:4px;border-radius:2px;background:var(--border);overflow:hidden; }
        .mym-bar-fill { height:100%;border-radius:2px;background:var(--indigo2); }
        .mym-courses { display:grid;grid-template-columns:1fr 1fr;gap:.25rem;flex:1;overflow:hidden; }
        .mym-course { border-radius:3px;border:1px solid var(--border);background:var(--graphite);padding:.25rem .5rem;display:flex;flex-direction:column;gap:3px;overflow:hidden; }
        .mym-course-tag { font-family:var(--fm);font-size:.4375rem;letter-spacing:.06em;text-transform:uppercase;color:var(--indigo); }
        .mym-course-title { font-family:var(--fb);font-size:.5625rem;font-weight:600;color:var(--white);line-height:1.3; }
        .mym-c-bar { height:3px;border-radius:2px;background:var(--border);overflow:hidden;margin-top:auto; }
        .mym-c-fill { height:100%;border-radius:2px;background:oklch(68% 0.165 265/.8); }
        .mym-insight { background:var(--navy);border:1px solid var(--border);border-radius:3px;padding:.25rem .5rem;display:flex;align-items:center;gap:.5rem;flex-shrink:0; }
        .mym-ins-dot { width:6px;height:6px;border-radius:50%;background:var(--success);flex-shrink:0; }
        .mym-ins-text { font-family:var(--fb);font-size:.5rem;color:var(--gray3); }
        .mym-ins-val { margin-left:auto;font-family:var(--fm);font-size:.5625rem;font-weight:600;color:var(--success);white-space:nowrap; }
 
        /* Mock: DOQ */
        .mock-doq-bar { flex:0 0 auto;background:oklch(10% 0.005 160);border-bottom:1px solid oklch(20% 0.010 160);padding:.5rem 1rem;display:flex;align-items:center;gap:1rem; }
        .mock-doq-logo { font-family:var(--fh);font-size:.875rem;font-weight:700;letter-spacing:.10em;text-transform:uppercase;color:oklch(72% 0.180 148); }
        .mock-doq-nav { display:flex;gap:1rem;margin-left:auto; }
        .mock-doq-nav span { font-family:var(--fb);font-size:.5rem;color:oklch(50% 0.025 160); }
        .mock-doq-body { flex:1;overflow:hidden;padding:1rem;display:flex;gap:1rem; }
        .mock-doq-left { flex:1;display:flex;flex-direction:column;gap:.5rem; }
        .mock-doq-img { flex:1;border-radius:6px;background:linear-gradient(160deg,oklch(14% 0.012 160),oklch(20% 0.030 145));border:1px solid oklch(22% 0.015 160);display:flex;align-items:center;justify-content:center;font-size:2.5rem;min-height:80px; }
        .mock-doq-chips { display:flex;gap:.25rem;flex-wrap:wrap; }
        .mock-doq-chip { padding:2px 7px;border-radius:9999px;border:1px solid oklch(28% 0.025 155);font-family:var(--fm);font-size:.4375rem;color:oklch(68% 0.140 148);letter-spacing:.04em; }
        .mock-doq-right { width:110px;flex-shrink:0;display:flex;flex-direction:column;gap:.25rem; }
        .mock-doq-title { font-family:var(--fh);font-size:.875rem;font-weight:700;color:oklch(90% 0.020 150);line-height:1.2; }
        .mock-doq-sub { font-family:var(--fb);font-size:.5rem;color:oklch(50% 0.015 155);line-height:1.5; }
        .mock-doq-price { font-family:var(--fm);font-size:1rem;font-weight:600;color:oklch(72% 0.180 148); }
        .mock-doq-cta { background:oklch(72% 0.180 148);border-radius:6px;padding:.25rem .5rem;font-family:var(--fb);font-size:.5625rem;font-weight:600;color:oklch(10% 0.005 160);text-align:center; }
        .mock-doq-research { margin-top:auto;background:oklch(13% 0.008 160);border:1px solid oklch(20% 0.012 160);border-radius:3px;padding:.25rem .5rem;display:flex;flex-direction:column;gap:2px; }
        .mock-doq-r-lbl { font-family:var(--fm);font-size:.4375rem;letter-spacing:.06em;text-transform:uppercase;color:oklch(72% 0.180 148); }
        .mock-doq-r-item { font-family:var(--fb);font-size:.4375rem;color:oklch(52% 0.018 155);display:flex;align-items:center;gap:3px; }
        .mock-doq-r-item::before { content:'✓';color:oklch(72% 0.180 148);font-size:.4rem;flex-shrink:0; }
 
        /* ── SERVICES ── */
        .jlt-services { border-top:1px solid var(--border-s);padding:4rem clamp(1rem,6vw,4rem);background:var(--navy);position:relative;z-index:1; }
        .jlt-services-inner { max-width:1280px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:2rem; }
        .svc-card { padding:2rem;border-radius:10px;border:1px solid var(--border);background:var(--graphite);transition:border-color 200ms var(--eq),box-shadow 200ms var(--eq),transform 200ms var(--eq); }
        .svc-card:hover { border-color:var(--brand-bd);box-shadow:0 0 20px oklch(75% 0.165 140/.12);transform:translateY(-2px); }
        .svc-num { font-family:var(--fm);font-size:.6875rem;font-weight:600;letter-spacing:.10em;color:var(--brand);text-transform:uppercase;margin-bottom:1.5rem;display:block; }
        .svc-title { font-family:var(--fh);font-size:1.375rem;font-weight:700;letter-spacing:-.01em;color:var(--white);margin-bottom:.5rem;line-height:1.15; }
        .svc-desc { font-family:var(--fb);font-size:.875rem;line-height:1.65;color:var(--gray3);max-width:38ch; }
 
        /* ── CONTACT ── */
        .jlt-contact { padding:6rem clamp(1rem,6vw,4rem);background:var(--space);border-top:1px solid var(--border-s);position:relative;z-index:1; }
        .jlt-contact-inner { max-width:640px;margin:0 auto;text-align:center;display:flex;flex-direction:column;align-items:center;gap:2rem; }
        .ct-eyebrow { font-family:var(--fm);font-size:.6875rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--brand); }
        .ct-headline { font-family:var(--fh);font-size:clamp(2rem,4vw + .5rem,3rem);font-weight:700;letter-spacing:-.02em;line-height:1.05;color:var(--white); }
        .ct-sub { font-family:var(--fb);font-size:1rem;line-height:1.65;color:var(--gray3); }
        .ct-ctas { display:flex;flex-wrap:wrap;gap:1rem;justify-content:center; }
        .ct-meta { display:flex;align-items:center;gap:1rem;flex-wrap:wrap;justify-content:center; }
        .ct-meta-item { display:flex;align-items:center;gap:.5rem;font-family:var(--fm);font-size:.75rem;color:var(--gray4); }
        .ct-dot { width:4px;height:4px;border-radius:50%;background:var(--success); }
 
        /* ── LOGO STRIP ── */
        .jlt-logos { padding:3rem clamp(1rem,6vw,4rem);background:var(--navy);border-top:1px solid var(--border-s);border-bottom:1px solid var(--border-s);position:relative;z-index:1; }
        .jlt-logos-inner { max-width:1280px;margin:0 auto;display:flex;flex-direction:column;align-items:center;gap:2rem; }
        .logos-eyebrow { font-family:var(--fm);font-size:.6875rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--gray4);text-align:center; }
        .logos-row { display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:2.5rem 3.5rem; }
        .logo-client { display:flex;flex-direction:column;align-items:center;gap:.5rem;opacity:.55;transition:opacity 200ms; }
        .logo-client:hover { opacity:1; }
        .logo-client-name { font-family:var(--fh);font-size:.875rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:var(--gray3); }

        /* ── TESTIMONIALS ── */
        .jlt-testi { padding:6rem clamp(1rem,6vw,4rem);background:var(--space);position:relative;z-index:1; }
        .jlt-testi-inner { max-width:1280px;margin:0 auto;display:flex;flex-direction:column;gap:3rem; }
        .testi-hdr { display:flex;flex-direction:column;gap:.75rem; }
        .testi-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem; }
        .testi-card { padding:2rem;border-radius:12px;border:1px solid var(--border);background:var(--graphite);display:flex;flex-direction:column;gap:1.5rem;transition:border-color 200ms var(--eq),box-shadow 200ms var(--eq); }
        .testi-card:hover { border-color:var(--brand-bd);box-shadow:0 0 24px oklch(75% 0.165 140/.10); }
        .testi-quote { font-family:var(--fb);font-size:.9375rem;line-height:1.7;color:var(--gray3);flex:1; }
        .testi-quote::before { content:'"';color:var(--brand);font-family:var(--fh);font-size:2rem;line-height:0;vertical-align:-.5rem;margin-right:.25rem; }
        .testi-author { display:flex;flex-direction:column;gap:2px;border-top:1px solid var(--border-s);padding-top:1rem; }
        .testi-name { font-family:var(--fb);font-size:.875rem;font-weight:600;color:var(--white); }
        .testi-role { font-family:var(--fm);font-size:.6875rem;color:var(--gray4);letter-spacing:.04em; }

        /* ── GEO SPOTLIGHT ── */
        .jlt-geo { padding:6rem clamp(1rem,6vw,4rem);background:var(--navy);border-top:1px solid var(--border-s);position:relative;z-index:1;overflow:hidden; }
        .jlt-geo::before { content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 70% at 80% 50%,oklch(68% 0.165 265/.10) 0%,transparent 60%);pointer-events:none; }
        .jlt-geo-inner { max-width:1280px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;position:relative; }
        .geo-text { display:flex;flex-direction:column;gap:1.5rem; }
        .geo-pills { display:flex;flex-direction:column;gap:.75rem; }
        .geo-pill { display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem;border-radius:8px;border:1px solid var(--border);background:oklch(95% 0.006 260/.03);font-family:var(--fb);font-size:.875rem;color:var(--gray3); }
        .geo-pill-icon { width:28px;height:28px;border-radius:6px;background:oklch(68% 0.165 265/.15);border:1px solid oklch(68% 0.165 265/.25);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.75rem; }
        .geo-visual { border-radius:16px;border:1px solid var(--border);background:var(--graphite);padding:1.5rem;display:flex;flex-direction:column;gap:1rem; }
        .geo-vis-hdr { font-family:var(--fm);font-size:.625rem;font-weight:600;letter-spacing:.10em;text-transform:uppercase;color:var(--gray4);padding-bottom:.75rem;border-bottom:1px solid var(--border-s); }
        .geo-entry { display:flex;flex-direction:column;gap:.25rem;padding:.75rem 0;border-bottom:1px solid var(--border-s); }
        .geo-entry:last-child { border-bottom:none; }
        .geo-entry-top { display:flex;align-items:center;gap:.5rem; }
        .geo-badge { font-family:var(--fm);font-size:.5rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:2px 7px;border-radius:9999px; }
        .geo-badge.cited { background:oklch(65% 0.190 145/.20);color:var(--success);border:1px solid oklch(65% 0.190 145/.30); }
        .geo-badge.indexed { background:oklch(68% 0.010 260/.15);color:var(--gray4);border:1px solid var(--border); }
        .geo-entry-query { font-family:var(--fb);font-size:.8125rem;color:var(--white);flex:1; }
        .geo-entry-src { font-family:var(--fm);font-size:.625rem;color:var(--gray4); }
        @media(max-width:900px) { .jlt-geo-inner { grid-template-columns:1fr; } }

        /* ── ABOUT ── */
        .jlt-about { padding:6rem clamp(1rem,6vw,4rem);background:var(--space);border-top:1px solid var(--border-s);position:relative;z-index:1; }
        .jlt-about-inner { max-width:960px;margin:0 auto;display:grid;grid-template-columns:1fr 2fr;gap:4rem;align-items:start; }
        .about-left { display:flex;flex-direction:column;gap:1.5rem;position:sticky;top:80px; }
        .about-avatar { width:88px;height:88px;border-radius:16px;background:var(--graphite);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:2.5rem;overflow:hidden; }
        .about-avail-tag { display:inline-flex;align-items:center;gap:.5rem;padding:5px 12px;border-radius:9999px;border:1px solid var(--brand-bd);background:var(--brand-bg);width:fit-content; }
        .about-avail-dot { width:6px;height:6px;border-radius:50%;background:var(--success);box-shadow:0 0 6px oklch(65% 0.190 145/.6);animation:pulse 2.5s ease-in-out infinite; }
        .about-avail-text { font-family:var(--fm);font-size:.625rem;font-weight:600;letter-spacing:.06em;color:var(--brand-hi);text-transform:uppercase; }
        .about-right { display:flex;flex-direction:column;gap:1.5rem; }
        .about-body { font-family:var(--fb);font-size:1rem;line-height:1.75;color:var(--gray3);white-space:pre-line; }
        @media(max-width:640px) { .jlt-about-inner { grid-template-columns:1fr; } .about-left { position:static; } }

        /* ── FOOTER ── */
        .jlt-footer { padding:2rem clamp(1rem,6vw,4rem);background:var(--navy);border-top:1px solid var(--border-s);position:relative;z-index:1; }
        .jlt-footer-inner { max-width:1280px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem; }
        .footer-logo { font-family:var(--fh);font-size:.875rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--gray4);text-decoration:none; }
        .footer-logo span { color:var(--brand); }
        .footer-copy { font-family:var(--fb);font-size:.75rem;color:var(--gray4); }
        .footer-links { display:flex;gap:1.5rem; }
        .footer-links a { font-family:var(--fb);font-size:.75rem;color:var(--gray4);text-decoration:none;transition:color 180ms; }
        .footer-links a:hover { color:var(--white); }
 
        /* ── RESPONSIVE ── */
        @media(max-width:900px) {
          .jlt-hero-inner { grid-template-columns:1fr;grid-template-areas:"text" "video" "strip" "ctas" "tags";gap:2rem; }
          .case-card { grid-template-columns:1fr;gap:2rem; }
          .case-card:nth-child(even) { direction:ltr; }
          .case-visual { aspect-ratio:16/9; }
          .mock-mym-side { display:none; }
          .mock-mym-main { left:0; }
        }
        @media(max-width:640px) {
          .jlt-nav-links { display:none; }
          .ev-sep { display:none; }
          .kpi-row { grid-template-columns:repeat(2,1fr); }
          .jlt-footer-inner { flex-direction:column;align-items:flex-start; }
        }
         @keyframes jltFloat {
          0%   { transform: translate(-50%, -50%) translateY(0px); }
          50%  { transform: translate(-50%, -50%) translateY(-10px); }
          100% { transform: translate(-50%, -50%) translateY(0px); }
        }
        @media(prefers-reduced-motion:reduce) { *,*::before,*::after { animation-duration:.01ms!important;transition-duration:.01ms!important; } }
      `}} />
 
      {/* BACKGROUND ORBS */}
      <div className="jlt-orb orb-brand" aria-hidden="true" />
      <div className="jlt-orb orb-indigo" aria-hidden="true" />
 
      {/* ── NAVIGATION ───────────────────────────────── */}
      <nav className="jlt-nav">
        <a href="/" className="jlt-logo">JL<span>.</span>T</a>
        <ul className="jlt-nav-links">
          <li><a href="#projekte">{t('nav_projects')}</a></li>
          <li><a href="#leistungen">{t('nav_services')}</a></li>
          <li><a href="#kontakt">{t('nav_contact')}</a></li>
        </ul>
        <div className="jlt-nav-right">
          <div className="jlt-lang" role="group" aria-label="Language">
            {(['de', 'en', 'es'] as const).map(l => (
              <button key={l} className={`jlt-lang-btn${lang === l ? ' active' : ''}`} onClick={() => setLang(l)}>{l.toUpperCase()}</button>
            ))}
          </div>
          <a href="#kontakt" className="jlt-cta">{t('nav_cta')}</a>
        </div>
      </nav>
 
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="jlt-hero" id="home">
        <div className="jlt-hero-inner">
 
          {/* LEFT: Text */}
          <div className="jlt-hero-text">
            <div className="jlt-status">
              <div className="jlt-status-dot" />
              <span className="jlt-status-text">{t('hero_status')}</span>
            </div>
            <h1 className="jlt-headline" dangerouslySetInnerHTML={{ __html: t('hero_headline') }} />
            <p className="jlt-sub">{t('hero_sub')}</p>
          </div>
 
          {/* RIGHT: Image Collage */}
          <motion.div
            className="jlt-video-col"
            style={{ position: 'relative', height: '440px' }}
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
          >
            {/* Decorative orbs */}
            <motion.div
              style={{ position: 'absolute', top: -16, left: '25%', width: 48, height: 48, borderRadius: '50%', background: 'oklch(75% 0.165 140 / 0.18)', pointerEvents: 'none' }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              style={{ position: 'absolute', bottom: 16, right: '22%', width: 32, height: 32, borderRadius: 8, background: 'oklch(68% 0.165 265 / 0.18)', pointerEvents: 'none' }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            />
            <motion.div
              style={{ position: 'absolute', top: '40%', left: '10%', width: 20, height: 20, borderRadius: '50%', background: 'oklch(75% 0.165 140 / 0.12)', pointerEvents: 'none' }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            />

            {/* Shopify — large, top-center */}
            <motion.div
              style={{ position: 'absolute', left: '50%', top: 0, width: 200, height: 200, marginLeft: -100, borderRadius: 20, background: 'var(--navy)', border: '1px solid var(--border)', padding: 20, boxShadow: '0 12px 48px oklch(0 0 0 / 0.5), 0 0 0 1px oklch(95% 0.006 260 / 0.06)' }}
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } } }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
            >
              <img src="/images/logos/shopify.png" alt="Shopify" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </motion.div>

            {/* Google Ads — medium, right */}
            <motion.div
              style={{ position: 'absolute', right: 0, top: '26%', width: 160, height: 160, borderRadius: 20, background: 'var(--navy)', border: '1px solid var(--border)', padding: 18, boxShadow: '0 12px 48px oklch(0 0 0 / 0.5), 0 0 0 1px oklch(95% 0.006 260 / 0.06)' }}
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } } }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
            >
              <img src="/images/logos/google-ads.png" alt="Google Ads" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </motion.div>

            {/* Meta — medium, left-center */}
            <motion.div
              style={{ position: 'absolute', left: 0, top: '42%', width: 148, height: 148, borderRadius: 20, background: 'var(--navy)', border: '1px solid var(--border)', padding: 16, boxShadow: '0 12px 48px oklch(0 0 0 / 0.5), 0 0 0 1px oklch(95% 0.006 260 / 0.06)' }}
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } } }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
            >
              <img src="/images/logos/meta.png" alt="Meta" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </motion.div>

            {/* TikTok — small, bottom-right */}
            <motion.div
              style={{ position: 'absolute', right: 24, bottom: 0, width: 124, height: 124, borderRadius: 20, background: 'var(--navy)', border: '1px solid var(--border)', padding: 14, boxShadow: '0 12px 48px oklch(0 0 0 / 0.5), 0 0 0 1px oklch(95% 0.006 260 / 0.06)' }}
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } } }}
              animate={{ y: [0, -11, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            >
              <img src="/images/logos/tiktok.png" alt="TikTok" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </motion.div>

            {/* GTM / GA4 — small, bottom-center */}
            <motion.div
              style={{ position: 'absolute', left: '36%', bottom: 12, width: 124, height: 124, borderRadius: 20, background: 'var(--navy)', border: '1px solid var(--border)', padding: 14, boxShadow: '0 12px 48px oklch(0 0 0 / 0.5), 0 0 0 1px oklch(95% 0.006 260 / 0.06)' }}
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } } }}
              animate={{ y: [0, -13, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2.1 }}
            >
              <img src="/images/logos/gtm.png" alt="GTM / GA4" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </motion.div>

          </motion.div>

 
          {/* EVIDENCE STRIP */}
          <div className="jlt-hero-evidence" role="list">
            <div className="ev-item" role="listitem"><span className="ev-val">13×</span><span className="ev-label">{t('hero_ev1')}</span></div>
            <div className="ev-sep" aria-hidden="true" />
            <div className="ev-item" role="listitem"><span className="ev-val">€9</span><span className="ev-label">{t('hero_ev2')}</span></div>
            <div className="ev-sep" aria-hidden="true" />
            <div className="ev-item" role="listitem"><span className="ev-val">5+</span><span className="ev-label">{t('hero_ev3')}</span></div>
            <div className="ev-sep" aria-hidden="true" />
            <div className="ev-item" role="listitem"><span className="ev-val">€30K</span><span className="ev-label">{t('hero_ev4')}</span></div>
          </div>
 
          {/* CTAs */}
          <div className="jlt-hero-ctas">
            <a href="#projekte" className="btn-primary">{t('hero_cta1')} <ArrowRight /></a>
            <a href="https://calendly.com/jose-treff/15min" target="_blank" rel="noopener" className="btn-ghost">{t('hero_cta2')} <ArrowRight /></a>
          </div>
 
          {/* SKILL TAGS */}
          <div className="jlt-hero-tags" role="list" aria-label="Skills">
            {['Google Ads','Meta Ads','TikTok Ads'].map(s => <span key={s} className="skill-tag" role="listitem">{s}</span>)}
            <span className="skill-tag tech" role="listitem">Shopify Liquid</span>
            <span className="skill-tag" role="listitem">CRO</span>
            <span className="skill-tag" role="listitem">SEO / GEO</span>
            <span className="skill-tag tech" role="listitem">{t('tag_ai')}</span>
            <span className="skill-tag tech" role="listitem">GTM / GA4</span>
          </div>
        </div>
      </section>
 
      {/* ── CLIENT LOGO STRIP ────────────────────────── */}
      <section className="jlt-logos">
        <div className="jlt-logos-inner">
          <span className="logos-eyebrow">{t('logos_eyebrow')}</span>
          <div className="logos-row">
            {[
              { name: 'Statement Clothing', icon: '👗' },
              { name: 'Die Barista', icon: '☕' },
              { name: 'Meet Your Master', icon: '🎓' },
              { name: 'DOQ', icon: '🐾' },
            ].map(({ name, icon }) => (
              <div key={name} className="logo-client">
                <span style={{ fontSize: '1.75rem' }}>{icon}</span>
                <span className="logo-client-name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEISTUNGEN / SERVICES FUNNEL ────────────── */}
      <section className="jlt-svf" id="leistungen">
        <div className="jlt-svf-inner">
          <header className="svf-hdr">
            <span className="eyebrow">{t('svc_eyebrow')}</span>
            <h2 className="sec-h">{t('svc_headline')}</h2>
            <p className="sec-sub">{t('svc_sub')}</p>
          </header>
          <div className="svf-grid">

            <div className="svf-card">
              <span className="svf-num">01 — Foundation</span>
              <h3 className="svf-title">{t('p1_title')}</h3>
              <p className="svf-desc">{t('p1_desc')}</p>
              <div className="svf-tools">
                {['Shopify', 'WordPress', 'Custom Dev', 'UX Design'].map(tool => <span key={tool} className="svf-tool">{tool}</span>)}
              </div>
            </div>

            <div className="svf-card">
              <span className="svf-num">02 — Measure</span>
              <h3 className="svf-title">{t('p2_title')}</h3>
              <p className="svf-desc">{t('p2_desc')}</p>
              <div className="svf-tools">
                {['GA4', 'Google Tag Manager', 'Microsoft Clarity', 'Reporting'].map(tool => <span key={tool} className="svf-tool">{tool}</span>)}
              </div>
            </div>

            <div className="svf-card">
              <span className="svf-num">03 — Visibility</span>
              <h3 className="svf-title">{t('p3_title')}</h3>
              <p className="svf-desc">{t('p3_desc')}</p>
              <div className="svf-tools">
                {['On-Page SEO', 'Backlinks', 'Keyword Research', 'Technical SEO'].map(tool => <span key={tool} className="svf-tool">{tool}</span>)}
              </div>
            </div>

            <div className="svf-card">
              <span className="svf-num">04 — Traffic</span>
              <h3 className="svf-title">{t('p4_title')}</h3>
              <p className="svf-desc">{t('p4_desc')}</p>
              <div className="svf-tools">
                {['Google Ads', 'Meta Ads', 'TikTok Ads', 'LinkedIn Ads'].map(tool => <span key={tool} className="svf-tool">{tool}</span>)}
              </div>
            </div>

            <div className="svf-card">
              <span className="svf-num">05 — Optimise</span>
              <h3 className="svf-title">{t('p5_title')}</h3>
              <p className="svf-desc">{t('p5_desc')}</p>
              <div className="svf-tools">
                {['Heatmaps', 'A/B Testing', 'Funnel Analysis', 'UX Research'].map(tool => <span key={tool} className="svf-tool">{tool}</span>)}
              </div>
            </div>

            <div className="svf-card geo">
              <div style={{ display: 'flex', alignItems: 'center', gap: '.625rem' }}>
                <span className="svf-num">06 — Next Level</span>
                <span className="svf-badge">✦ Neu</span>
              </div>
              <h3 className="svf-title">{t('p6_title')}</h3>
              <p className="svf-desc">{t('p6_desc')}</p>
              <div className="svf-tools">
                {['ChatGPT', 'Perplexity', 'JSON-LD', 'E-E-A-T', 'KI-Workflows'].map(tool => <span key={tool} className="svf-tool">{tool}</span>)}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ─────────────────────────────── */}
      <section className="jlt-cases" id="projekte">
        <div className="jlt-cases-inner">
          <header className="cases-hdr">
            <span className="eyebrow">{t('cases_eyebrow')}</span>
            <h2 className="sec-h">Case Studies</h2>
            <p className="sec-sub">{t('cases_sub')}</p>
          </header>
 
          {/* 01 — Statement Clothing */}
          <article className="case-card">
            <div className="case-text">
              <span className="case-num">{t('c1_num')}</span>
              <h3 className="case-title">Statement Clothing GmbH</h3>
              <div className="case-tags-row">
                <span className="ctag hi">Google Ads</span>
                <span className="ctag">D2C Fashion</span>
                <span className="ctag">{t('c1_tag')}</span>
                <span className="ctag">€30K/Monat</span>
                <span className="ctag tech">GA4 / GTM</span>
              </div>
              <p className="case-desc">{t('c1_desc')}</p>
              <div className="case-result">
                <div className="res-kpi"><span className="res-val">13×</span><span className="res-label">ROAS</span></div>
                <div className="res-div" aria-hidden="true" />
                <div className="res-kpi"><span className="res-val">€9</span><span className="res-label">CPA</span></div>
                <div className="res-div" aria-hidden="true" />
                <div className="res-kpi"><span className="res-val">€30K</span><span className="res-label">{t('c1_k3')}</span></div>
              </div>
              <a href="mailto:jose@tubebridge.de" className="case-link">{t('case_link')} <ArrowRight /></a>
            </div>
            <div className="case-visual" aria-hidden="true">
              <div className="mock-stmt">
                <div className="mock-chrome"><div className="mock-dots"><span style={{background:'oklch(60% 0.20 25/.7)'}}/><span style={{background:'oklch(72% 0.18 75/.7)'}}/><span style={{background:'oklch(65% 0.19 145/.7)'}}/></div><div className="mock-url">ads.google.com — Statement Clothing GmbH</div></div>
                <div className="mock-stmt-body">
                  <div className="kpi-row">
                    <div className="kpi-cell"><span className="kpi-l">ROAS</span><span className="kpi-v a">13,2×</span></div>
                    <div className="kpi-cell"><span className="kpi-l">CPA</span><span className="kpi-v g">€8,94</span></div>
                    <div className="kpi-cell"><span className="kpi-l">Conv.-Rate</span><span className="kpi-v g">4,8%</span></div>
                    <div className="kpi-cell"><span className="kpi-l">Budget</span><span className="kpi-v">€28,4K</span></div>
                  </div>
                  <div className="camp-list">
                    <div className="camp-hdr"><span>Kampagne</span><span>Budget</span><span>ROAS</span><span>CPA</span></div>
                    {[
                      ['Performance Max — Jacken','€9.200','15,1×','€7,40'],
                      ['Shopping — Hoodies','€7.800','12,4×','€9,10'],
                      ['Remarketing — Abbruch','€4.100','18,7×','€5,80'],
                      ['Brand — Suchanzeigen','€3.200','22,3×','€3,20'],
                    ].map(([name,budget,roas,cpa],i) => (
                      <div key={i} className="camp-row">
                        <span className="camp-name"><span className="dot-g"/>{name}</span>
                        <span className="camp-stat a">{budget}</span>
                        <span className="camp-stat a">{roas}</span>
                        <span className="camp-stat g">{cpa}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
 
          {/* 02 — Die Barista */}
          <article className="case-card">
            <div className="case-text">
              <span className="case-num">{t('c2_num')}</span>
              <h3 className="case-title">Die Barista Kaffee Hameln</h3>
              <div className="case-tags-row">
                <span className="ctag hi">Shopify Liquid</span>
                <span className="ctag">Custom Theme</span>
                <span className="ctag">CRO</span>
                <span className="ctag">Google Ads</span>
                <span className="ctag tech">Microsoft Clarity</span>
              </div>
              <p className="case-desc">{t('c2_desc')}</p>
              <div className="case-result">
                <div className="res-kpi"><span className="res-val">Shopify</span><span className="res-label">{t('c2_k1')}</span></div>
                <div className="res-div" aria-hidden="true" />
                <div className="res-kpi"><span className="res-val">CRO</span><span className="res-label">{t('c2_k2')}</span></div>
                <div className="res-div" aria-hidden="true" />
                <div className="res-kpi"><span className="res-val">{t('c2_k3v')}</span><span className="res-label">{t('c2_k3')}</span></div>
              </div>
              <a href="mailto:jose@tubebridge.de" className="case-link">{t('case_link')} <ArrowRight /></a>
            </div>
            <div className="case-visual" aria-hidden="true">
              <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
                <div className="mock-chrome"><div className="mock-dots"><span style={{background:'oklch(60% 0.20 25/.7)'}}/><span style={{background:'oklch(72% 0.18 75/.7)'}}/><span style={{background:'oklch(65% 0.19 145/.7)'}}/></div><div className="mock-url">diebarista-hameln.de</div></div>
                <div className="mock-shop-bar"><span className="mock-shop-logo">Die Barista</span><div className="mock-shop-nav"><span>Kaffee</span><span>Zubehör</span><span>Über uns</span></div></div>
                <div className="mock-shop-body">
                  <div className="mock-banner"><span className="mock-banner-tag">Neu im Shop</span><span className="mock-banner-title">Specialty Coffee aus aller Welt</span></div>
                  <div className="mock-products">
                    {[['☕','Espresso Blend','€14,90'],['🫘','Ethiopia Yirg.','€18,50'],['🍵','Cold Brew Kit','€24,90']].map(([e,n,p])=>(
                      <div key={n} className="mock-product"><div className="mock-prod-img">{e}</div><div className="mock-prod-info"><div className="mock-prod-name">{n}</div><div className="mock-prod-price">{p}</div></div></div>
                    ))}
                  </div>
                  <div className="mock-shop-stats">
                    {[['Conv.-Rate','3,2%'],['Ø Warenkorb','€41'],['Sitzungen','↑ 28%']].map(([l,v])=>(
                      <div key={l} className="mock-ss"><span className="mock-ss-l">{l}</span><span className="mock-ss-v">{v}</span></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
 
          {/* 03 — Meet Your Master */}
          <article className="case-card">
            <div className="case-text">
              <span className="case-num">{t('c3_num')}</span>
              <h3 className="case-title">Meet Your Master</h3>
              <div className="case-tags-row">
                <span className="ctag hi">UX Research</span>
                <span className="ctag">Funnel-CRO</span>
                <span className="ctag">{t('c3_tag')}</span>
                <span className="ctag">A/B-Testing</span>
                <span className="ctag tech">eLearning</span>
              </div>
              <p className="case-desc">{t('c3_desc')}</p>
              <div className="case-result">
                <div className="res-kpi"><span className="res-val">{t('c3_k1v')}</span><span className="res-label">{t('c3_k1')}</span></div>
                <div className="res-div" aria-hidden="true" />
                <div className="res-kpi"><span className="res-val">{t('c3_k2v')}</span><span className="res-label">{t('c3_k2')}</span></div>
              </div>
              <a href="mailto:jose@tubebridge.de" className="case-link">{t('case_link')} <ArrowRight /></a>
            </div>
            <div className="case-visual" style={{position:'relative'}} aria-hidden="true">
              <div style={{height:'100%',display:'flex',flexDirection:'column'}}>
                <div className="mock-chrome"><div className="mock-dots"><span style={{background:'oklch(60% 0.20 25/.7)'}}/><span style={{background:'oklch(72% 0.18 75/.7)'}}/><span style={{background:'oklch(65% 0.19 145/.7)'}}/></div><div className="mock-url">meetyourmaster.de — Lernbereich</div></div>
              </div>
              <div className="mock-mym-side">
                {[['Dashboard',true],['Meine Kurse',false],['Entdecken',false],['Community',false]].map(([label,active])=>(
                  <div key={String(label)} className={`mym-nav-item${active?' active':''}`}><span className="mym-nav-dot"/>{label}</div>
                ))}
              </div>
              <div className="mock-mym-main">
                <span className="mym-greeting">Willkommen zurück 👋</span>
                <div className="mym-prog">
                  <div className="mym-prog-lbl"><span>Wochenziel</span><span style={{color:'var(--indigo)',fontFamily:'var(--fm)',fontSize:'.5rem'}}>3 / 5 Lektionen</span></div>
                  <div className="mym-bar"><div className="mym-bar-fill" style={{width:'60%'}}/></div>
                </div>
                <div className="mym-courses">
                  {[['Fotografie','Komposition & Licht',72],['Kochen','Pasta von Grund auf',38],['Musik','Gitarre für Einsteiger',15],['Empfohlen','Film & Storytelling',0]].map(([tag,title,pct])=>(
                    <div key={String(title)} className="mym-course" style={tag==='Empfohlen'?{borderColor:'oklch(58% 0.200 265/.30)'}:{}}>
                      <span className="mym-course-tag">{tag}</span>
                      <span className="mym-course-title">{title}</span>
                      <div className="mym-c-bar"><div className="mym-c-fill" style={{width:`${pct}%`}}/></div>
                    </div>
                  ))}
                </div>
                <div className="mym-insight"><div className="mym-ins-dot"/><span className="mym-ins-text">Onboarding-Abschlussrate nach Redesign</span><span className="mym-ins-val">↑ 34%</span></div>
              </div>
            </div>
          </article>
 
          {/* 04 — DOQ */}
          <article className="case-card">
            <div className="case-text">
              <span className="case-num">{t('c4_num')}</span>
              <h3 className="case-title">DOQ Hundefutter</h3>
              <div className="case-tags-row">
                <span className="ctag hi">{t('c4_tag')}</span>
                <span className="ctag">UX Research</span>
                <span className="ctag">{t('c4_arch')}</span>
                <span className="ctag">E-Commerce</span>
                <span className="ctag tech">MVP-Roadmap</span>
              </div>
              <p className="case-desc">{t('c4_desc')}</p>
              <div className="case-result">
                <div className="res-kpi"><span className="res-val">{t('c4_k1v')}</span><span className="res-label">{t('c4_k1')}</span></div>
                <div className="res-div" aria-hidden="true" />
                <div className="res-kpi"><span className="res-val">App MVP</span><span className="res-label">{t('c4_k2')}</span></div>
              </div>
              <a href="mailto:jose@tubebridge.de" className="case-link">{t('case_link')} <ArrowRight /></a>
            </div>
            <div className="case-visual" aria-hidden="true">
              <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
                <div className="mock-chrome"><div className="mock-dots"><span style={{background:'oklch(60% 0.20 25/.7)'}}/><span style={{background:'oklch(72% 0.18 75/.7)'}}/><span style={{background:'oklch(65% 0.19 145/.7)'}}/></div><div className="mock-url">doq.de — Hundefutter-Shop</div></div>
                <div className="mock-doq-bar"><span className="mock-doq-logo">DOQ</span><div className="mock-doq-nav"><span>Produkte</span><span>Ernährung</span><span>App</span></div></div>
                <div className="mock-doq-body">
                  <div className="mock-doq-left">
                    <div className="mock-doq-img">🐾</div>
                    <div className="mock-doq-chips">
                      {['Getreidefrei','BARF-kompatibel','KI-Empfehlung'].map(c=><span key={c} className="mock-doq-chip">{c}</span>)}
                    </div>
                  </div>
                  <div className="mock-doq-right">
                    <span className="mock-doq-title">DOQ Smart Hundefutter</span>
                    <span className="mock-doq-sub">Personalisierte Ernährung basierend auf Rasse, Alter & Aktivität.</span>
                    <span className="mock-doq-price">€34,90</span>
                    <div className="mock-doq-cta">Jetzt bestellen</div>
                    <div className="mock-doq-research">
                      <span className="mock-doq-r-lbl">Research-Grundlage</span>
                      {['12 Nutzerinterviews','3 Value-Prop-Tests','App-Flow-Prototyp','MVP-Roadmap'].map(i=><span key={i} className="mock-doq-r-item">{i}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
 
        </div>
      </section>
 
      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="jlt-testi">
        <div className="jlt-testi-inner">
          <header className="testi-hdr">
            <span className="eyebrow">{t('testi_eyebrow')}</span>
            <p className="sec-sub">{t('testi_sub')}</p>
          </header>
          <div className="testi-grid">
            {[
              { quote: t('t1_quote'), name: t('t1_name'), role: t('t1_role') },
              { quote: t('t2_quote'), name: t('t2_name'), role: t('t2_role') },
              { quote: t('t3_quote'), name: t('t3_name'), role: t('t3_role') },
            ].map(({ quote, name, role }) => (
              <article key={name} className="testi-card">
                <p className="testi-quote">{quote}</p>
                <div className="testi-author">
                  <span className="testi-name">{name}</span>
                  <span className="testi-role">{role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

 
      {/* ── GEO SPOTLIGHT ────────────────────────────── */}
      <section className="jlt-geo">
        <div className="jlt-geo-inner">
          <div className="geo-text">
            <span className="eyebrow">{t('geo_eyebrow')}</span>
            <h2 className="sec-h" dangerouslySetInnerHTML={{ __html: t('geo_headline') }} />
            <p className="sec-sub">{t('geo_sub')}</p>
            <div className="geo-pills">
              {[
                { icon: '{}', label: t('geo_p1') },
                { icon: '★', label: t('geo_p2') },
                { icon: '✦', label: t('geo_p3') },
              ].map(({ icon, label }) => (
                <div key={label} className="geo-pill">
                  <div className="geo-pill-icon">{icon}</div>
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div className="geo-visual">
            <div className="geo-vis-hdr">LLM Citation Monitor</div>
            {[
              { badge: 'cited', badgeLabel: t('geo_cited'), query: 'Performance Marketing Agentur Hamburg', src: 'jose-treff.de' },
              { badge: 'cited', badgeLabel: t('geo_cited'), query: 'Shopify Entwickler DACH D2C', src: 'jose-treff.de' },
              { badge: 'indexed', badgeLabel: t('geo_indexed'), query: 'GEO Optimierung für Marken', src: 'jose-treff.de' },
              { badge: 'cited', badgeLabel: t('geo_cited'), query: 'Google Ads Skalierung Fashion', src: 'jose-treff.de' },
            ].map(({ badge, badgeLabel, query, src }) => (
              <div key={query} className="geo-entry">
                <div className="geo-entry-top">
                  <span className={`geo-badge ${badge}`}>{badgeLabel}</span>
                  <span className="geo-entry-query">{query}</span>
                </div>
                <span className="geo-entry-src">{src}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ME ─────────────────────────────────── */}
      <section className="jlt-about">
        <div className="jlt-about-inner">
          <div className="about-left">
            <div className="about-avatar">🧑‍💻</div>
            <div>
              <h2 className="sec-h" style={{ fontSize: 'clamp(1.5rem,2.5vw,2rem)' }}>Jose L. Treff</h2>
              <p style={{ fontFamily: 'var(--fb)', fontSize: '.875rem', color: 'var(--gray4)', marginTop: '.25rem' }}>Hamburg · DACH · Remote</p>
            </div>
            <div className="about-avail-tag">
              <div className="about-avail-dot" />
              <span className="about-avail-text">{t('about_avail')}</span>
            </div>
          </div>
          <div className="about-right">
            <span className="eyebrow">{t('about_eyebrow')}</span>
            <p className="about-body">{t('about_text')}</p>
            <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
              {['DE', 'EN', 'ES'].map(lang => (
                <span key={lang} className="skill-tag tech">{lang}</span>
              ))}
              <span className="skill-tag">Hamburg</span>
              <span className="skill-tag">Remote</span>
              <span className="skill-tag">DACH</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── KONTAKT ──────────────────────────────────── */}
      <section className="jlt-contact" id="kontakt">
        <div className="jlt-contact-inner">
          <span className="ct-eyebrow">{t('ct_eyebrow')}</span>
          <h2 className="ct-headline">{t('ct_headline')}</h2>
          <p className="ct-sub">{t('ct_sub')}</p>
          <div className="ct-ctas">
            <a href="https://calendly.com/jose-treff/15min" target="_blank" rel="noopener" className="btn-primary">{t('ct_cta_calendly')} <ArrowRight /></a>
            <a href="mailto:jose@tubebridge.de" className="btn-ghost">{t('ct_cta_email')}</a>
          </div>
          <div className="ct-meta">
            <span className="ct-meta-item"><span className="ct-dot"/>{t('ct_m1')}</span>
            <span className="ct-meta-item"><span className="ct-dot"/>{t('ct_m2')}</span>
            <span className="ct-meta-item"><span className="ct-dot"/>DE · EN · ES</span>
          </div>
        </div>
      </section>
 
      {/* ── FOOTER ───────────────────────────────────── */}
      <footer className="jlt-footer">
        <div className="jlt-footer-inner">
          <a href="/" className="footer-logo">JL<span>.</span>T</a>
          <span className="footer-copy">{t('footer')}</span>
          <div className="footer-links">
            <a href="mailto:jose@tubebridge.de">E-Mail</a>
            <a href="https://linkedin.com/in/jose-l-treff-033224251" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
      </footer>
 
    </main>
  );
}
 
