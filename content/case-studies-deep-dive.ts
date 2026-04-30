// ─────────────────────────────────────────────────────────────────────────────
// CASE STUDY DEEP-DIVE DATA
// Each entry maps to /case-studies/[slug]
// Add new entries; placeholder sections use empty strings.
// ─────────────────────────────────────────────────────────────────────────────

export type Lang = 'de' | 'en' | 'es';
export type L10n = { de: string; en: string; es: string };

export type DeepDiveKPI = {
  value: string;
  label: L10n;
  sub?: L10n; // context line below metric
};

export type CaseStudyDeepDive = {
  slug: string;
  heroImage: string;
  category: 'performance' | 'shopify' | 'ux' | 'branding' | 'geo' | 'seo';
  h1: L10n;
  seoTitle: L10n;
  seoDescription: L10n;
  meta: {
    client: string;
    industry: L10n;
    period: string;
    scope: L10n;
    location: string;
  };
  kpis: DeepDiveKPI[];
  ausgangslage: L10n;
  hypothese: L10n;
  setup: L10n;
  ergebnisse: L10n;
  learnings: L10n;
  stack: string[];
  relatedSlugs: string[];
};

export const DEEP_DIVES: CaseStudyDeepDive[] = [
  // ── 01 — Statement Clothing GmbH ──────────────────────────────────────────
  {
    slug: 'statement-clothing-roas-13',
    heroImage:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    category: 'performance',
    h1: {
      de: '13× ROAS bei €30K Monatsbudget — wie Statement Clothing den Skalierungs-Knick übersprungen hat',
      en: '13× ROAS at €30K monthly budget — how Statement Clothing broke through the scaling barrier',
      es: '13× ROAS con €30K de presupuesto mensual — cómo Statement Clothing superó el bloqueo de escala',
    },
    seoTitle: {
      de: 'Google Ads Skalierung: 13× ROAS für Fashion D2C | Jose L. Treff',
      en: 'Google Ads Scaling: 13× ROAS for Fashion D2C | Jose L. Treff',
      es: 'Escalado Google Ads: 13× ROAS para Fashion D2C | Jose L. Treff',
    },
    seoDescription: {
      de: 'Case Study: Google-Ads-Budget von €5K auf €30K/Monat skaliert, ROAS stabil bei 13×, CPA von €24 auf €9 gesenkt. Performance Marketing Freelancer Hamburg.',
      en: 'Case study: Google Ads budget scaled from €5K to €30K/month, ROAS stable at 13×, CPA reduced from €24 to €9. Performance marketing freelancer Hamburg.',
      es: 'Case study: Presupuesto Google Ads escalado de €5K a €30K/mes, ROAS estable en 13×, CPA reducido de €24 a €9.',
    },
    meta: {
      client: 'Statement Clothing GmbH',
      industry: { de: 'Fashion D2C', en: 'Fashion D2C', es: 'Fashion D2C' },
      period: '09/2025 – heute',
      scope: {
        de: 'Google Ads · Meta · Tracking-Rebuild · ROAS-Skalierung',
        en: 'Google Ads · Meta · Tracking Rebuild · ROAS Scaling',
        es: 'Google Ads · Meta · Rebuild de tracking · Escalado ROAS',
      },
      location: 'DACH',
    },
    kpis: [
      {
        value: '13×',
        label: { de: 'ROAS', en: 'ROAS', es: 'ROAS' },
        sub: { de: 'von 2,8× auf 13×', en: 'from 2.8× to 13×', es: 'de 2,8× a 13×' },
      },
      {
        value: '€9',
        label: { de: 'CPA', en: 'CPA', es: 'CPA' },
        sub: { de: 'von €24 auf €9 bei €80 Ø-Warenkorb', en: 'from €24 to €9 at €80 avg. cart', es: 'de €24 a €9 con carrito medio €80' },
      },
      {
        value: '€30K',
        label: { de: 'Monatsbudget', en: 'Monthly budget', es: 'Presupuesto mensual' },
        sub: { de: 'von <€5K in 6 Monaten', en: 'from <€5K in 6 months', es: 'desde <€5K en 6 meses' },
      },
      {
        value: '3,8 %',
        label: { de: 'Conversion Rate', en: 'Conversion Rate', es: 'Tasa de conversión' },
        sub: { de: 'von 1,2% auf 3,8%', en: 'from 1.2% to 3.8%', es: 'del 1,2% al 3,8%' },
      },
    ],
    ausgangslage: {
      de: `Als Statement Clothing zu mir kam, liefen Google Ads bereits — aber die Zahlen stimmten nicht. Der ROAS lag unter 3×, der CPA schwankte zwischen €18 und €35 ohne erkennbares Muster, und das Team hatte keine Ahnung, warum.

Das eigentliche Problem steckte im Tracking. GA4 erfasste Käufe mehrfach pro Session und blähte die Conversion-Zahlen künstlich auf. Das bedeutete: Google's Smart Bidding optimierte auf falsche Signale. Die Kampagnenstruktur war ein geerbtes Chaos — dutzende Anzeigengruppen mit überlappenden Keywords, breite Matches, die gegeneinander boten, und kein klares Funnel-Konzept.

Das Budget war auf €4.800/Monat gedeckelt, weil der Kunde keine Basis sah, es zu erhöhen. Das Produkt und der Markt passten zusammen — das war offensichtlich. Das Problem lag vollständig in der technischen Infrastruktur und der Kampagnenarchitektur.`,
      en: `When Statement Clothing came to me, Google Ads were already running — but the numbers didn't add up. ROAS was below 3×, CPA fluctuated between €18 and €35 with no discernible pattern, and the team had no visibility into why.

The core problem was the tracking. GA4 was recording purchases multiple times per session, artificially inflating conversion counts. That meant Google's Smart Bidding was optimising on wrong signals. The campaign structure was an inherited mess — dozens of ad groups with overlapping keywords, broad match terms bidding against each other, no clear funnel concept.

Budget was capped at €4,800/month because the client saw no basis for increasing it. The product and market fit were there — that was obvious. The problem was entirely in the technical infrastructure and campaign architecture.`,
      es: `Cuando Statement Clothing llegó a mí, ya tenían Google Ads en marcha — pero los números no cuadraban. El ROAS estaba por debajo de 3×, el CPA fluctuaba entre €18 y €35 sin patrón reconocible, y el equipo no entendía por qué.

El problema central era el tracking. GA4 registraba compras múltiples veces por sesión, inflando artificialmente los recuentos de conversión. Eso significaba que el Smart Bidding de Google estaba optimizando con señales incorrectas. La estructura de campañas era un caos heredado — docenas de grupos de anuncios con palabras clave solapadas, concordancias amplias pujando entre sí, sin concepto de funnel claro.

El presupuesto estaba limitado a €4.800/mes porque el cliente no veía base para aumentarlo. El producto y el encaje con el mercado eran evidentes. El problema estaba completamente en la infraestructura técnica y la arquitectura de campañas.`,
    },
    hypothese: {
      de: `Meine Kernhypothese: Defektes Tracking verzerrt die reale Performance. Einige Kampagnen, die schlecht aussahen, waren vermutlich profitabel — und umgekehrt. Bevor wir skalieren, mussten wir wissen, was wir tatsächlich messen.

Wenn wir zuerst die Datenschicht reparieren und die Kampagnen auf saubere Signale laufen lassen, kann Googles eigenes Smart Bidding den Großteil der Optimierungsarbeit übernehmen. Dann ist Skalierung kein Risiko mehr, sondern eine Konsequenz aus stabilen Daten.

Die zweite Hypothese betraf die Kampagnenstruktur: Mit klaren Intent-Clustern statt breiten Überlappungen würden wir den Qualitätsscore verbessern, den CPC senken und die Relevanz für jede Nutzergruppe erhöhen.`,
      en: `My core hypothesis: broken tracking was distorting actual performance. Some campaigns that looked poor were likely profitable — and vice versa. Before scaling, we needed to know what we were actually measuring.

If we fixed the data layer first and let campaigns run on clean signals, Google's own Smart Bidding could handle most of the optimisation work. Then scaling wouldn't be a risk — it would be a consequence of stable data.

The second hypothesis was about campaign structure: with clear intent clusters instead of broad overlaps, we'd improve Quality Scores, reduce CPCs, and increase relevance for each audience segment.`,
      es: `Mi hipótesis central: el tracking roto distorsionaba el rendimiento real. Algunas campañas que parecían malas eran probablemente rentables — y viceversa. Antes de escalar, necesitábamos saber qué estábamos midiendo realmente.

Si primero arreglábamos la capa de datos y dejábamos que las campañas corrieran sobre señales limpias, el propio Smart Bidding de Google podría encargarse de la mayor parte del trabajo de optimización. Entonces escalar no sería un riesgo — sería una consecuencia de datos estables.

La segunda hipótesis era sobre la estructura de campañas: con clusters de intención claros en lugar de superposiciones amplias, mejoraríamos el Quality Score, reduciríamos los CPCs y aumentaríamos la relevancia para cada segmento.`,
    },
    setup: {
      de: `**Phase 1 — Tracking-Audit & Rebuild (Woche 1–2)**

Das bestehende GA4/GTM-Setup wurde vollständig zurückgebaut. Neues Datenmodell: ein einziges Purchase-Event mit korrekter Revenue-Variable, Deduplizierungs-Logik per Client-ID und ein server-seitiger GTM-Container zur Reduktion von Consent-Verlusten. Fünf Conversion-Actions mit expliziten Business-Regeln definiert — kein Mikro-Ziel ohne messbaren Umsatzbezug.

**Phase 2 — Kampagnen-Restrukturierung (Woche 3–4)**

Das bestehende Kampagnen-Zoo wurde aufgelöst. Neuaufbau nach SKAG-Prinzip: eine Anzeigengruppe pro Intent-Cluster, Broad Match deaktiviert bis ROAS-Ziele stabil waren. Performance Max als ergänzende Kampagne (nicht als Ersatz) mit starken Asset-Gruppen segmentiert nach Produktkategorie. Creative-Audit: die 3 stärksten Formate aus historischen Daten identifiziert und rotiert.

**Phase 3 — Skalierungsprotokoll (Monat 2–6)**

Wöchentlicher Review-Rhythmus etabliert — Bid-Strategie-Anpassungen nur bei ≥30 Conversions im Lookback-Fenster. Budgeterhöhungen auf 20%/Woche gedeckelt, um Algorithm-Reset zu vermeiden. Audience-Segmentierung nach Kaufintention: Retargeting (7d, 30d, 90d), Lookalikes aus Käuferlisten, Cold Prospecting in getrennter Kampagne.`,
      en: `**Phase 1 — Tracking Audit & Rebuild (Weeks 1–2)**

The existing GA4/GTM setup was stripped back to zero. New data model: a single Purchase event with correct revenue variable, deduplication logic per Client ID, and a server-side GTM container to reduce consent losses. Five conversion actions defined with explicit business rules — no micro-goal without measurable revenue connection.

**Phase 2 — Campaign Restructure (Weeks 3–4)**

The existing campaign zoo was dissolved. Rebuilt using SKAG principles: one ad group per intent cluster, broad match disabled until ROAS targets were stable. Performance Max as a supplementary campaign (not a replacement), with strong asset groups segmented by product category. Creative audit: identified the 3 best-performing formats from historical data and rotated those.

**Phase 3 — Scale Protocol (Months 2–6)**

Weekly review cadence established — bid strategy adjustments only when ≥30 conversions in the lookback window. Budget increases capped at 20%/week to avoid algorithm reset. Audience segmentation by purchase intent: retargeting (7d, 30d, 90d), lookalikes from buyer lists, cold prospecting in a separate campaign.`,
      es: `**Fase 1 — Auditoría y Rebuild de Tracking (Semanas 1–2)**

El setup existente de GA4/GTM fue desmontado por completo. Nuevo modelo de datos: un único evento de Purchase con la variable de revenue correcta, lógica de deduplicación por Client ID y un contenedor GTM server-side para reducir pérdidas de consentimiento. Cinco acciones de conversión definidas con reglas de negocio explícitas.

**Fase 2 — Reestructuración de Campañas (Semanas 3–4)**

El zoo de campañas existente fue disuelto. Reconstrucción con principios SKAG: un grupo de anuncios por cluster de intención, concordancia amplia desactivada hasta que los objetivos de ROAS fueran estables. Performance Max como campaña complementaria (no sustituta), con grupos de assets segmentados por categoría de producto.

**Fase 3 — Protocolo de Escalado (Meses 2–6)**

Cadencia de revisión semanal establecida — ajustes de estrategia de puja solo con ≥30 conversiones en la ventana de lookback. Incrementos de presupuesto limitados al 20%/semana para evitar el reset del algoritmo. Segmentación de audiencias por intención de compra: retargeting (7d, 30d, 90d), lookalikes de compradores, prospecting en campaña separada.`,
    },
    ergebnisse: {
      de: `Nach 6 Monaten konsequenter Umsetzung:

- **ROAS 13×** — von 2,8× zu Beginn; stabil auch bei verdreifachtem Budget
- **CPA €9** — von €24 auf €9 bei gleichbleibendem Ø-Warenkorbwert von €80
- **Monatsbudget €30K** — von unter €5K in 6 Monaten skaliert
- **Conversion Rate 3,8%** — von 1,2% auf 3,8% durch saubereres Tracking und Landing-Page-Tests
- **Revenue attributable** — dreifacher Umsatz über Google Ads im Vergleich zur Baseline

Der entscheidende Wendepunkt: In Monat 3 haben wir PMAX zum ersten Mal aktiviert — zu diesem Zeitpunkt war die SKAG-Basis bereits stabil und hatte eine klare Benchmark gesetzt. PMAX hat dann inkrementellen Reach erzeugt, ohne die Kernkampagnen zu kannibalisieren.`,
      en: `After 6 months of consistent execution:

- **ROAS 13×** — from 2.8× at the start; stable even at tripled budget
- **CPA €9** — from €24 to €9 at the same average cart value of €80
- **Monthly budget €30K** — scaled from under €5K in 6 months
- **Conversion rate 3.8%** — from 1.2% to 3.8% through cleaner tracking and landing page tests
- **Revenue attributed** — triple the revenue via Google Ads vs the baseline

The decisive turning point: in month 3 we activated PMAX for the first time — at that point the SKAG foundation was already stable and had established a clear benchmark. PMAX then generated incremental reach without cannibalising the core campaigns.`,
      es: `Después de 6 meses de ejecución consistente:

- **ROAS 13×** — desde 2,8× al inicio; estable incluso con el presupuesto triplicado
- **CPA €9** — de €24 a €9 con el mismo valor medio de carrito de €80
- **Presupuesto mensual €30K** — escalado desde menos de €5K en 6 meses
- **Tasa de conversión 3,8%** — del 1,2% al 3,8% gracias a tracking más limpio y tests de landing pages
- **Revenue atribuido** — triple de ingresos a través de Google Ads vs. la línea base

El punto de inflexión decisivo: en el mes 3 activamos PMAX por primera vez — en ese momento la base SKAG ya era estable y había establecido un benchmark claro.`,
    },
    learnings: {
      de: `**Tracking kommt vor Optimierung.**
Du kannst nicht optimieren, was du nicht richtig misst. Defektes Conversion-Tracking sendet falsche Signale an Googles Algorithmus — und der optimiert dann genau auf das Falsche. Dieser Fehler ist häufiger, als die meisten Werbetreibenden glauben.

**PMAX ist ein Hebel, kein Fundament.**
Performance Max funktioniert — aber nur als Ergänzung zu einer stabilen SKAG-Struktur, nicht als Ersatz. Wenn wir PMAX zu früh aktiviert hätten, hätte es existierenden Traffic kannibalisiert. Der richtige Zeitpunkt ist, wenn die Baseline klar ist.

**Skalierungstempo ist eine eigene Disziplin.**
Zu schnell, und der Algorithmus resettet — man verliert alle gesammelten Learnings. Zu langsam, und man lässt Geld liegen. Für dieses Konto war 20% Budget-Erhöhung pro Woche der richtige Rhythmus: schnell genug zum Wachsen, langsam genug für stabile Signale.`,
      en: `**Tracking comes before optimisation.**
You can't optimise what you can't measure correctly. Broken conversion tracking sends wrong signals to Google's algorithm — and then it optimises for exactly the wrong thing. This error is more common than most advertisers realise.

**PMAX is a lever, not a foundation.**
Performance Max works — but only as a complement to a stable SKAG structure, not as a replacement. If we had activated PMAX too early, it would have cannibalised existing traffic. The right time is when the baseline is clear.

**Scaling pace is its own discipline.**
Too fast, and the algorithm resets — you lose all accumulated learnings. Too slow, and you leave money on the table. For this account, 20% budget increase per week was the right cadence: fast enough to grow, slow enough for stable signals.`,
      es: `**El tracking va antes que la optimización.**
No puedes optimizar lo que no mides correctamente. El tracking de conversiones roto envía señales incorrectas al algoritmo de Google — y entonces optimiza exactamente para lo incorrecto. Este error es más común de lo que la mayoría de los anunciantes cree.

**PMAX es una palanca, no una base.**
Performance Max funciona — pero solo como complemento a una estructura SKAG estable, no como sustituto. Si hubiéramos activado PMAX demasiado pronto, habría canibalizado el tráfico existente. El momento correcto es cuando la línea base está clara.

**El ritmo de escalado es su propia disciplina.**
Demasiado rápido, y el algoritmo se resetea — pierdes todos los aprendizajes acumulados. Demasiado lento, y dejas dinero sobre la mesa. Para esta cuenta, el 20% de aumento de presupuesto por semana fue el ritmo correcto.`,
    },
    stack: [
      'Google Ads',
      'Performance Max',
      'Google Analytics 4',
      'Google Tag Manager',
      'Server-Side GTM',
      'Meta Ads',
      'Microsoft Clarity',
      'Looker Studio',
    ],
    relatedSlugs: ['die-barista-shopify-relaunch', 'meet-your-master-churn-reduktion'],
  },

  // ── 02 — Die Barista (Shopify) ────────────────────────────────────────────
  {
    slug: 'die-barista-shopify-relaunch',
    heroImage:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
    category: 'shopify',
    h1: {
      de: 'Shopify-Shop in 4 Wochen — von 0 auf profitabel mit CRO von Anfang an',
      en: 'Shopify store in 4 weeks — from zero to profitable with CRO from day one',
      es: 'Tienda Shopify en 4 semanas — de cero a rentable con CRO desde el primer día',
    },
    seoTitle: {
      de: 'Shopify-Shop Aufbau in 4 Wochen | CRO & Google Ads | Jose L. Treff',
      en: 'Shopify Store Build in 4 Weeks | CRO & Google Ads | Jose L. Treff',
      es: 'Tienda Shopify en 4 Semanas | CRO & Google Ads | Jose L. Treff',
    },
    seoDescription: {
      de: 'Shopify-Shop von 0 in 4 Wochen aufgebaut — Custom Liquid-Theme, GA4/GTM, Microsoft Clarity, lokale Google Ads und CRO-Maßnahmen. Details auf Anfrage.',
      en: 'Shopify store built from zero in 4 weeks — custom Liquid theme, GA4/GTM, Microsoft Clarity, local Google Ads and CRO measures. Details on request.',
      es: 'Tienda Shopify construida desde cero en 4 semanas — tema Liquid personalizado, GA4/GTM, Microsoft Clarity, Google Ads locales y medidas CRO.',
    },
    meta: {
      client: 'Details auf Anfrage',
      industry: { de: 'Lokaler E-Commerce', en: 'Local E-Commerce', es: 'E-Commerce local' },
      period: 'seit 09/2025',
      scope: {
        de: 'Shopify Dev · Custom Liquid · CRO · Google Ads',
        en: 'Shopify Dev · Custom Liquid · CRO · Google Ads',
        es: 'Shopify Dev · Custom Liquid · CRO · Google Ads',
      },
      location: 'Deutschland',
    },
    kpis: [
      {
        value: '4 Wo.',
        label: { de: 'Launch-Zeit', en: 'Time to launch', es: 'Tiempo al lanzamiento' },
        sub: { de: 'von 0 bis live', en: 'from zero to live', es: 'de cero a live' },
      },
      {
        value: '↑ CVR',
        label: { de: 'Conversion Rate', en: 'Conversion Rate', es: 'Tasa de conversión' },
        sub: { de: 'kontinuierlich steigend', en: 'continuously rising', es: 'en aumento continuo' },
      },
      {
        value: 'Mo. 2',
        label: { de: 'Profitabilität', en: 'Profitability', es: 'Rentabilidad' },
        sub: { de: 'Ads profitabel ab Monat 2', en: 'Ads profitable from month 2', es: 'Ads rentables desde el mes 2' },
      },
    ],
    ausgangslage: {
      de: 'Kein digitales Standbein, kein Shop, keine Tracking-Infrastruktur. Ziel: in 4 Wochen live, technisch sauber, DSGVO-konform, conversion-ready — ohne Agentur-Overhead.',
      en: 'No digital presence, no store, no tracking infrastructure. Goal: live in 4 weeks, technically solid, GDPR-compliant, conversion-ready — without agency overhead.',
      es: 'Sin presencia digital, sin tienda, sin infraestructura de tracking. Objetivo: en vivo en 4 semanas, técnicamente sólido, conforme al RGPD, listo para convertir.',
    },
    hypothese: {
      de: 'Ein CRO-first Ansatz von Anfang an — statt erst bauen, dann optimieren — vermeidet den klassischen Rebuild nach 6 Monaten, wenn die ersten Heatmap-Daten eintreffen.',
      en: 'A CRO-first approach from the start — instead of build first, optimise later — avoids the classic rebuild after 6 months when the first heatmap data comes in.',
      es: 'Un enfoque CRO-first desde el principio — en lugar de construir primero y optimizar después — evita el clásico rebuild después de 6 meses cuando llegan los primeros datos de heatmap.',
    },
    setup: {
      de: `Custom Liquid-Theme nach CI-Vorgaben, GA4 + GTM + Microsoft Clarity Setup, strukturierte Produktseiten mit UX Best Practices, lokale Search-Kampagnen und erste A/B-Tests basierend auf Early-Heatmap-Daten. DSGVO-konformes Consent-Management integriert.`,
      en: `Custom Liquid theme to CI specs, GA4 + GTM + Microsoft Clarity setup, structured product pages with UX best practices, local search campaigns and first A/B tests based on early heatmap data. GDPR-compliant consent management integrated.`,
      es: `Tema Liquid personalizado según CI, configuración GA4 + GTM + Microsoft Clarity, páginas de producto estructuradas con buenas prácticas UX, campañas de búsqueda locales y primeras pruebas A/B basadas en datos de heatmap tempranos.`,
    },
    ergebnisse: {
      de: 'Shop seit 09/2025 aktiv. Conversion Rate steigt kontinuierlich durch laufende CRO-Maßnahmen. Lokale Google Ads profitabel ab Monat 2. Details auf Anfrage.',
      en: 'Store active since 09/2025. Conversion rate rising continuously through ongoing CRO measures. Local Google Ads profitable from month 2. Details on request.',
      es: 'Tienda activa desde 09/2025. Tasa de conversión mejorando continuamente mediante medidas CRO. Google Ads locales rentables desde el mes 2.',
    },
    learnings: {
      de: 'Mobile-Checkout war der kritische Pfad: Der Großteil der Käufe kam über Smartphones. Jede Stunde in Mobile-UX hat sich überproportional ausgezahlt.',
      en: 'Mobile checkout was the critical path: the majority of purchases came via smartphones. Every hour invested in mobile UX paid back disproportionately.',
      es: 'El checkout móvil fue el camino crítico: la mayoría de las compras vinieron por smartphones. Cada hora invertida en UX móvil se pagó de forma desproporcionada.',
    },
    stack: [
      'Shopify',
      'Liquid',
      'Google Analytics 4',
      'Google Tag Manager',
      'Microsoft Clarity',
      'Google Ads',
      'Cookiebot',
    ],
    relatedSlugs: ['statement-clothing-roas-13', 'meet-your-master-churn-reduktion'],
  },

  // ── 03 — Meet Your Master (eLearning UX/CRO) ──────────────────────────────
  {
    slug: 'meet-your-master-churn-reduktion',
    heroImage:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    category: 'ux',
    h1: {
      de: 'Onboarding neu gedacht — wie eine eLearning-Plattform den Kursabbruch signifikant gesenkt hat',
      en: 'Rethinking onboarding — how an eLearning platform significantly reduced course drop-offs',
      es: 'Repensar el onboarding — cómo una plataforma eLearning redujo significativamente el abandono de cursos',
    },
    seoTitle: {
      de: 'UX-Lead & CRO: Churn-Reduktion eLearning | Jose L. Treff',
      en: 'UX Lead & CRO: Churn Reduction eLearning | Jose L. Treff',
      es: 'UX Lead & CRO: Reducción de Churn eLearning | Jose L. Treff',
    },
    seoDescription: {
      de: 'UX-Research, Journey-Audit und A/B-Test-Roadmap für eine deutschsprachige eLearning-Plattform. Kursabbrüche gesenkt, Verweildauer erhöht. UX-Freelancer Hamburg.',
      en: 'UX research, journey audit and A/B test roadmap for a German-language eLearning platform. Course drop-offs reduced, session duration increased. UX freelancer Hamburg.',
      es: 'Investigación UX, auditoría de journey y hoja de ruta A/B para una plataforma eLearning en alemán. Abandono reducido, duración de sesión aumentada.',
    },
    meta: {
      client: 'Details auf Anfrage',
      industry: { de: 'eLearning / EdTech', en: 'eLearning / EdTech', es: 'eLearning / EdTech' },
      period: '06/2023 – 12/2023',
      scope: {
        de: 'UX Research · Journey-Audit · A/B-Testing · Prototyping',
        en: 'UX Research · Journey Audit · A/B Testing · Prototyping',
        es: 'UX Research · Auditoría de Journey · A/B Testing · Prototipado',
      },
      location: 'Remote / DACH',
    },
    kpis: [
      {
        value: '↓ Abbrüche',
        label: { de: 'Churn reduziert', en: 'Churn reduced', es: 'Churn reducido' },
        sub: { de: 'gemessen an Kursabschlüssen', en: 'measured by course completions', es: 'medido por completaciones de cursos' },
      },
      {
        value: '↑ Sessions',
        label: { de: 'Verweildauer', en: 'Session duration', es: 'Duración de sesión' },
        sub: { de: 'pro aktivem Nutzer', en: 'per active user', es: 'por usuario activo' },
      },
      {
        value: '12',
        label: { de: 'A/B-Hypothesen', en: 'A/B hypotheses', es: 'Hipótesis A/B' },
        sub: { de: 'priorisierte Test-Roadmap', en: 'prioritised test roadmap', es: 'hoja de ruta de tests priorizada' },
      },
    ],
    ausgangslage: {
      de: 'Hohe Kursabbruchrate trotz gutem Content. Nutzer stiegen im Onboarding ab, die Navigation war unintuitiv, und es fehlten klare Fortschritts-Signale. Das Team hatte keine Datenbasis für Entscheidungen.',
      en: 'High course drop-off rate despite good content. Users abandoned during onboarding, navigation was unintuitive, and clear progress signals were missing. The team had no data basis for decisions.',
      es: 'Alta tasa de abandono de cursos a pesar del buen contenido. Los usuarios abandonaban durante el onboarding, la navegación era poco intuitiva y faltaban señales claras de progreso.',
    },
    hypothese: {
      de: 'Der Drop-off lag nicht am Preis oder am Content, sondern an der ersten Session. Wenn das Onboarding die Nutzer nicht innerhalb von 5 Minuten in einen "Aha-Moment" führt, verliert man sie dauerhaft.',
      en: 'The drop-off was not about price or content — it was about the first session. If onboarding doesn\'t lead users to an "aha moment" within 5 minutes, you lose them permanently.',
      es: 'El abandono no era por el precio o el contenido — era por la primera sesión. Si el onboarding no lleva a los usuarios a un "momento aha" en 5 minutos, los pierdes permanentemente.',
    },
    setup: {
      de: `Vollständiger Journey-Audit (5 Schritte), 8 Nutzerinterviews, Heatmap-Auswertung, Usability-Tests mit Figma-Prototypen. A/B-Test-Roadmap mit 12 priorisierten Hypothesen nach ICE-Score.`,
      en: `Full journey audit (5 steps), 8 user interviews, heatmap analysis, usability tests with Figma prototypes. A/B test roadmap with 12 prioritised hypotheses ranked by ICE score.`,
      es: `Auditoría completa del journey (5 pasos), 8 entrevistas de usuario, análisis de heatmaps, tests de usabilidad con prototipos Figma. Hoja de ruta A/B con 12 hipótesis priorizadas por ICE score.`,
    },
    ergebnisse: {
      de: 'Reduzierte Kursabbrüche, höhere Verweildauer pro Session. Überarbeitete Onboarding-Prototypen wurden in der nächsten Release-Phase umgesetzt. Details auf Anfrage.',
      en: 'Reduced course drop-offs, higher session duration. Revised onboarding prototypes implemented in the next release phase. Details on request.',
      es: 'Reducción del abandono de cursos, mayor duración de sesión. Prototipos de onboarding revisados implementados en la siguiente fase de lanzamiento.',
    },
    learnings: {
      de: 'Der Drop-off lag nicht im Preis, sondern in der ersten Session. Das Onboarding war der Flaschenhals — nicht der Content.',
      en: 'The drop-off was not in the price — it was in the first session. Onboarding was the bottleneck, not the content.',
      es: 'El abandono no estaba en el precio — estaba en la primera sesión. El onboarding era el cuello de botella, no el contenido.',
    },
    stack: [
      'Figma',
      'Microsoft Clarity',
      'Hotjar',
      'Google Analytics',
      'Optimal Workshop',
      'Notion',
    ],
    relatedSlugs: ['doq-hundefutter-app-mvp', 'statement-clothing-roas-13'],
  },

  // ── 04 — DOQ (Branding & UX Research) ────────────────────────────────────
  {
    slug: 'doq-hundefutter-app-mvp',
    heroImage:
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop',
    category: 'branding',
    h1: {
      de: "Von 0 zur Brand — DOQ's Weg von der Idee zur marktreifen Hundefutter-App",
      en: "From zero to brand — DOQ's path from idea to market-ready dog food app",
      es: 'De cero a marca — el camino de DOQ de la idea a la app de comida para perros lista para el mercado',
    },
    seoTitle: {
      de: 'Branding & MVP: Hundefutter-App von 0 aufgebaut | Jose L. Treff',
      en: 'Branding & MVP: Dog Food App Built from Zero | Jose L. Treff',
      es: 'Branding & MVP: App de Comida para Perros Construida desde Cero | Jose L. Treff',
    },
    seoDescription: {
      de: 'Vollständiger Markenaufbau für eine Tech-Hundefutter-Brand — Nutzerinterviews, Value-Prop-Tests, CI-Entwicklung, App-Prototypen in Figma, MVP-Backlog. Details auf Anfrage.',
      en: 'Complete brand build for a tech dog food brand — user interviews, value prop tests, CI development, app prototypes in Figma, MVP backlog. Details on request.',
      es: 'Construcción completa de marca para una marca de comida para perros tech — entrevistas de usuario, tests de propuesta de valor, desarrollo CI, prototipos en Figma, backlog MVP.',
    },
    meta: {
      client: 'DOQ (Details auf Anfrage)',
      industry: { de: 'Pet Tech / D2C', en: 'Pet Tech / D2C', es: 'Pet Tech / D2C' },
      period: '08/2021 – 08/2023',
      scope: {
        de: 'Branding · UX Research · App-Architektur · MVP-Backlog',
        en: 'Branding · UX Research · App Architecture · MVP Backlog',
        es: 'Branding · UX Research · Arquitectura de App · Backlog MVP',
      },
      location: 'DACH',
    },
    kpis: [
      {
        value: '0→Launch',
        label: { de: 'Brand-Aufbau', en: 'Brand built', es: 'Marca construida' },
        sub: { de: 'von der Idee bis zur vollständigen CI', en: 'from idea to complete CI', es: 'de la idea a la CI completa' },
      },
      {
        value: 'MVP',
        label: { de: 'Roadmap & Prototyp', en: 'Roadmap & prototype', es: 'Roadmap & prototipo' },
        sub: { de: 'priorisierter Backlog in Figma', en: 'prioritised backlog in Figma', es: 'backlog priorizado en Figma' },
      },
      {
        value: '6 Mo.',
        label: { de: 'bis Markteinführung', en: 'to market launch', es: 'hasta el lanzamiento' },
        sub: { de: 'Brand, UX und Strategie parallel', en: 'brand, UX and strategy in parallel', es: 'marca, UX y estrategia en paralelo' },
      },
    ],
    ausgangslage: {
      de: 'Brand neu aufbauen — ohne Marktkenntnis, ohne Nutzerdaten, ohne technisches Produkt. Gleichzeitig App-Architektur und MVP-Scope definieren.',
      en: 'Build a brand from scratch — no market knowledge, no user data, no technical product yet. Simultaneously define app architecture and MVP scope.',
      es: 'Construir una marca desde cero — sin conocimiento del mercado, sin datos de usuario, sin producto técnico todavía. Simultáneamente definir arquitectura de app y alcance MVP.',
    },
    hypothese: {
      de: 'Branding und App-Logik müssen parallel entwickelt werden — visuelle Identität und Funnel-Struktur von Tag 1 konsistent, statt nach dem Launch anzupassen.',
      en: 'Branding and app logic must be developed in parallel — visual identity and funnel structure consistent from day 1, rather than adapting after launch.',
      es: 'El branding y la lógica de la app deben desarrollarse en paralelo — identidad visual y estructura de funnel consistentes desde el día 1, en lugar de adaptar después del lanzamiento.',
    },
    setup: {
      de: `Marktrecherche, Wettbewerbsanalyse, 6 Nutzerinterviews, 3 Value-Prop-Tests. CI-Entwicklung: Logo, Farbsystem, Typografie, Markenstimme. App-Flow-Prototypen in Figma, MVP-Backlog-Priorisierung nach RICE-Score.`,
      en: `Market research, competitive analysis, 6 user interviews, 3 value prop tests. CI development: logo, colour system, typography, brand voice. App flow prototypes in Figma, MVP backlog prioritised by RICE score.`,
      es: `Investigación de mercado, análisis competitivo, 6 entrevistas de usuario, 3 tests de propuesta de valor. Desarrollo CI: logo, sistema de color, tipografía, voz de marca. Prototipos de flujo en Figma, backlog MVP priorizado por RICE score.`,
    },
    ergebnisse: {
      de: 'Vollständige Brand-Identität, validierte Value Proposition, App-Prototypen und priorisierter MVP-Backlog. Markteinführung innerhalb von 6 Monaten.',
      en: 'Complete brand identity, validated value proposition, app prototypes and prioritised MVP backlog. Market launch within 6 months.',
      es: 'Identidad de marca completa, propuesta de valor validada, prototipos de app y backlog MVP priorizado. Lanzamiento al mercado en 6 meses.',
    },
    learnings: {
      de: 'Branding und App-Architektur parallel zu entwickeln war der richtige Ansatz — die visuelle Sprache und die Produkt-Logik beeinflussten sich gegenseitig. Ein sequenzieller Ansatz hätte zu einem Rebranding nach dem ersten Nutzertest geführt.',
      en: 'Developing branding and app architecture in parallel was the right approach — the visual language and product logic influenced each other. A sequential approach would have led to a rebrand after the first user test.',
      es: 'Desarrollar branding y arquitectura de app en paralelo fue el enfoque correcto — el lenguaje visual y la lógica del producto se influyeron mutuamente. Un enfoque secuencial habría llevado a un rebrand después del primer test de usuario.',
    },
    stack: ['Figma', 'Notion', 'Miro', 'Adobe Illustrator', 'Typeform', 'Maze'],
    relatedSlugs: ['meet-your-master-churn-reduktion', 'die-barista-shopify-relaunch'],
  },
];
