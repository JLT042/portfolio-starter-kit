"use client";

import React, { useState, useEffect } from 'react';

export default function PortfolioPage() {
  const [lang, setLang] = useState('de');
  const [cmsContent, setCmsContent] = useState<any>(null);

  // 1. DEIN VOLLSTÄNDIGER TEXT-SPEICHER (1:1 aus der Index.txt Vorlage)
  const T: any = {
    de: {
      nav_projects: "Projekte", nav_services: "Leistungen", nav_contact: "Kontakt", nav_cta: "Kontakt aufnehmen",
      hero_status: "Verfügbar für Projekte — DACH & remote",
      hero_headline: "Performance.<br>Die<br><em>konvertiert.</em>",
      hero_sub: "Senior Performance Marketer und Shopify-Entwickler — von der Strategie bis zum Checkout. €30K/Monat Ad-Budget eigenverantwortlich gesteuert über Google, Meta und TikTok für D2C- und B2B-Marken im DACH-Raum.",
      hero_ev1: "ROAS, Fashion D2C", hero_ev2: "CPA bei €80 Warenkorbwert", hero_ev3: "Jahre, 6 aktive Kunden", hero_ev4: "Stundensatz",
      hero_cta1: "Case Studies ansehen", hero_video_caption: "Kampagnen-Walkthrough — Statement Clothing",
      case1_number: "01 — Performance Marketing", case1_desc: "Vollständige Google-Ads-Strategie für eine Fashion-D2C-Brand im DACH-Markt. Budget von unter €5K auf €30K/Monat skaliert.",
      case2_number: "02 — Shopify Dev & CRO", case2_desc: "Shopify-Shop von Grund auf aufgebaut — Custom Liquid-Theme entwickelt, Produktstruktur und Checkout-Flow optimiert.",
      case3_number: "03 — UX Lead & CRO", case3_desc: "UX-Lead für eine eLearning-Videoplattform. Journey-Audit, Tiefeninterviews und Usability-Tests.",
      case4_number: "04 — Branding & UX Research", case4_desc: "Markteinführung einer technologiegestützten Hundefuttermarke — vollständiger Markenaufbau.",
      svc1_title: "Paid Media & Wachstum", svc1_desc: "Google Ads, Meta, TikTok, LinkedIn. Full-Funnel-Strategie, ROAS-Skalierung.",
      svc2_title: "Shopify & CRO", svc2_desc: "Custom Liquid- und Theme-Entwicklung, Conversion-Rate-Optimierung.",
      svc3_title: "SEO, GEO & KI", svc3_desc: "Technisches SEO, GEO (ChatGPT, Perplexity), KI-Workflow-Automatisierung.",
      contact_headline: "Projekt in Planung?", contact_sub: "Ich helfe DACH-Brands dabei, messbare Ergebnisse zu erzielen. Remote, flexibel, ab €40/h."
    },
    en: {
      nav_projects: "Projects", nav_services: "Services", nav_contact: "Contact", nav_cta: "Get in touch",
      hero_status: "Available for projects — DACH & remote",
      hero_headline: "Performance.<br>That<br><em>Converts.</em>",
      hero_sub: "Senior Performance Marketer and Shopify Developer — from strategy to checkout. €30K/month ad budget managed independently.",
      hero_ev1: "ROAS, Fashion D2C", hero_ev2: "CPA on €80 avg. order value", hero_ev3: "years, 6 active clients", hero_ev4: "Hourly rate",
      hero_cta1: "View Case Studies", hero_video_caption: "Campaign walkthrough — Statement Clothing",
      case1_number: "01 — Performance Marketing", case1_desc: "Full Google Ads strategy for a fashion D2C brand. Budget scaled from under €5K to €30K/month.",
      case2_number: "02 — Shopify Dev & CRO", case2_desc: "Shopify store built from scratch — custom Liquid theme developed, product structure and checkout flow optimized.",
      case3_number: "03 — UX Lead & CRO", case3_desc: "UX lead for a German-language eLearning video platform. Journey audit and usability tests.",
      case4_number: "04 — Branding & UX Research", case4_desc: "Market launch of a technology-driven dog food brand — complete brand build.",
      svc1_title: "Paid Media & Growth", svc1_desc: "Google Ads, Meta, TikTok, LinkedIn. Full-funnel strategy, audience architecture, ROAS scaling.",
      svc2_title: "Shopify & CRO", svc2_desc: "Custom Liquid and theme development, conversion rate optimization.",
      svc3_title: "SEO, GEO & AI", svc3_desc: "Technical SEO, GEO (ChatGPT, Perplexity), AI workflow automation.",
      contact_headline: "Planning a project?", contact_sub: "Helping DACH brands achieve measurable results."
    },
    es: {
      nav_projects: "Proyectos", nav_services: "Servicios", nav_contact: "Contacto", nav_cta: "Contáctame",
      hero_status: "Disponible para proyectos — DACH y remoto",
      hero_headline: "Performance.<br>Que<br><em>Convierte.</em>",
      hero_sub: "Senior Performance Marketer y desarrollador Shopify — de la estrategia al checkout. €30K/mes gestionado de forma autónoma.",
      hero_ev1: "ROAS, Moda D2C", hero_ev2: "CPA con ticket medio de €80", hero_ev3: "años, 6 clientes activos", hero_ev4: "Tarifa/hora",
      hero_cta1: "Ver Case Studies", hero_video_caption: "Walkthrough de campaña — Statement Clothing",
      case1_number: "01 — Performance Marketing", case1_desc: "Estrategia completa de Google Ads para una marca D2C de moda. Presupuesto escalado de €5K a €30K/mes.",
      case2_number: "02 — Shopify Dev y CRO", case2_desc: "Tienda Shopify construida desde cero — tema Liquid personalizado desarrollado.",
      case3_number: "03 — UX Lead y CRO", case3_desc: "UX lead para una plataforma de video eLearning en alemán.",
      case4_number: "04 — Branding y UX Research", case4_desc: "Lanzamiento al mercado de una marca de comida para perros impulsada por tecnología.",
      svc1_title: "Paid Media y Crecimiento", svc1_desc: "Google Ads, Meta, TikTok, LinkedIn. Estrategia full-funnel, escalado de ROAS.",
      svc2_title: "Shopify & CRO", svc2_desc: "Desarrollo custom de Liquid y themes, optimización de tasa de conversión.",
      svc3_title: "SEO, GEO e IA", svc3_desc: "SEO técnico, GEO (ChatGPT, Perplexity), automatización de flujos de IA.",
      contact_headline: "¿Tienes un proyecto?", contact_sub: "Ayudo a marcas del DACH a conseguir resultados medibles."
    }
  };

  // 2. CMS FETCH LOGIC (Sicherer Pfad)
  useEffect(() => {
    fetch('/content/pages/home.json')
      .then(res => res.json())
      .then(data => setCmsContent(data))
      .catch(() => console.log("Keine CMS-Datei gefunden, nutze lokale Fallbacks."));
  }, []);

  const t = (key: string) => {
    if (cmsContent?.[lang]?.[key]) return cmsContent[lang][key];
    return T[lang][key] || T['de'][key];
  };

  return (
    <main className="page bg-[#0d0d12] text-white selection:bg-[#95BF47] selection:text-black min-h-screen overflow-x-hidden">
      {/* 3. KOMPLETTES CSS (Shopify Green Edition) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&family=Epilogue:wght@400;500&family=JetBrains+Mono:wght@500;600&display=swap');
        :root {
          --color-space: oklch(9% 0.008 260);
          --color-navy: oklch(12% 0.010 260);
          --color-graphite: oklch(15% 0.012 260);
          --color-border: oklch(24% 0.016 260);
          --color-brand: oklch(75% 0.165 140); /* Shopify Green */
          --font-heading: 'Barlow Semi Condensed', sans-serif;
          --font-body: 'Epilogue', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
        }
        body { font-family: var(--font-body); -webkit-font-smoothing: antialiased; }
        .hero-headline em { font-style: normal; color: var(--color-brand); }
        .nav-cta { background: var(--color-brand); color: var(--color-space); font-weight: 600; border-radius: 6px; padding: 8px 18px; text-decoration: none; }
        .case-card { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; padding: 4rem 0; border-top: 1px solid rgba(255,255,255,0.06); }
        .case-visual { border-radius: 16px; border: 1px solid var(--color-border); background: var(--color-graphite); aspect-ratio: 4/3; overflow: hidden; position: relative; }
        .mock-kpi-row { display: grid; grid-template-columns: repeat(4, 1fr); background: var(--color-border); gap: 1px; }
        .mock-kpi { background: var(--color-graphite); padding: 10px; display: flex; flex-direction: column; }
        @media(max-width: 900px) { .case-card { grid-template-columns: 1fr; gap: 2rem; } }
      `}} />

      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 h-[60px] z-[200] flex items-center justify-between px-6 bg-[#0d0d12]/80 backdrop-blur-xl border-b border-white/5">
        <a href="/" className="font-bold text-lg font-heading tracking-tighter">JL<span className="text-[--color-brand]">.</span>T</a>
        <div className="flex items-center gap-6">
          <div className="flex bg-[#151312] p-1 rounded-md border border-white/10 text-[10px] font-bold">
            {['de', 'en', 'es'].map(l => (
              <button key={l} onClick={() => setLang(l)} className={`px-2 py-1 rounded uppercase ${lang === l ? 'bg-[--color-brand] text-black' : 'text-gray-500'}`}>{l}</button>
            ))}
          </div>
          <a href="mailto:jose@tubebridge.de" className="nav-cta">{t('nav_cta')}</a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-32">
        {/* HERO */}
        <section className="min-h-[70vh] flex flex-col justify-center gap-8">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[--color-brand]/30 bg-[--color-brand]/5 w-fit">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-mono text-[10px] uppercase text-[--color-brand]">{t('hero_status')}</span>
           </div>
           <h1 className="text-5xl md:text-8xl font-heading font-bold leading-[1.05]" dangerouslySetInnerHTML={{ __html: t('hero_headline') }}></h1>
           <p className="text-gray-400 text-lg max-w-xl leading-relaxed">{t('hero_sub')}</p>
           <div className="flex flex-wrap gap-8 items-center py-8 border-y border-white/5">
              <div className="flex items-baseline gap-3"><span className="text-3xl font-mono font-bold text-[--color-brand]">13×</span><span className="text-[10px] text-gray-500 uppercase">{t('hero_ev1')}</span></div>
              <div className="flex items-baseline gap-3"><span className="text-3xl font-mono font-bold text-[--color-brand]">€9</span><span className="text-[10px] text-gray-500 uppercase">{t('hero_ev2')}</span></div>
           </div>
        </section>

        {/* CASE STUDIES */}
        <section id="projekte" className="py-20">
           <h2 className="text-4xl font-heading font-bold mb-16">Case Studies</h2>
           <div className="flex flex-col">
              {/* Case 01 */}
              <article className="case-card">
                 <div className="flex flex-col justify-center gap-6">
                    <span className="font-mono text-[10px] text-[--color-brand] uppercase tracking-widest">{t('case1_number')}</span>
                    <h3 className="text-3xl font-bold font-heading">Statement Clothing GmbH</h3>
                    <p className="text-gray-400 leading-relaxed">{t('case1_desc')}</p>
                 </div>
                 <div className="case-visual">
                    <div className="mock-kpi-row">
                       <div className="mock-kpi"><span className="text-[8px] uppercase text-gray-500">ROAS</span><span className="font-mono text-sm text-[--color-brand]">13.2×</span></div>
                       <div className="mock-kpi"><span className="text-[8px] uppercase text-gray-500">CPA</span><span className="font-mono text-sm text-green-500">€8.94</span></div>
                    </div>
                 </div>
              </article>

              {/* Case 02 */}
              <article className="case-card">
                 <div className="flex flex-col justify-center gap-6">
                    <span className="font-mono text-[10px] text-[--color-brand] uppercase tracking-widest">{t('case2_number')}</span>
                    <h3 className="text-3xl font-bold font-heading">Die Barista Kaffee</h3>
                    <p className="text-gray-400 leading-relaxed">{t('case2_desc')}</p>
                 </div>
                 <div className="case-visual bg-[#110f0e] flex items-center justify-center text-4xl">☕</div>
              </article>
              
              {/* Case 03 */}
              <article className="case-card">
                 <div className="flex flex-col justify-center gap-6">
                    <span className="font-mono text-[10px] text-[--color-brand] uppercase tracking-widest">{t('case3_number')}</span>
                    <h3 className="text-3xl font-bold font-heading">Meet Your Master</h3>
                    <p className="text-gray-400 leading-relaxed">{t('case3_desc')}</p>
                 </div>
                 <div className="case-visual flex items-center justify-center text-4xl text-[--color-brand]">📈</div>
              </article>

              {/* Case 04 */}
              <article className="case-card">
                 <div className="flex flex-col justify-center gap-6">
                    <span className="font-mono text-[10px] text-[--color-brand] uppercase tracking-widest">{t('case4_number')}</span>
                    <h3 className="text-3xl font-bold font-heading">DOQ Hundefutter</h3>
                    <p className="text-gray-400 leading-relaxed">{t('case4_desc')}</p>
                 </div>
                 <div className="case-visual flex items-center justify-center text-4xl">🐾</div>
              </article>
           </div>
        </section>

        {/* SERVICES */}
        <section id="leistungen" className="py-24 border-y border-white/5 grid md:grid-cols-3 gap-12">
           {[1,2,3].map(i => (
              <div key={i} className="group">
                 <span className="font-mono text-xs text-[--color-brand] mb-4 block">0{i}</span>
                 <h4 className="text-xl font-bold font-heading mb-4">{t(`svc${i}_title`)}</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">{t(`svc${i}_desc`)}</p>
              </div>
           ))}
        </section>

        {/* CONTACT */}
        <section id="kontakt" className="py-40 text-center flex flex-col items-center gap-8">
           <h2 className="text-5xl md:text-7xl font-heading font-bold">{t('contact_headline')}</h2>
           <p className="text-gray-400 max-w-lg">{t('contact_sub')}</p>
           <a href="mailto:jose@tubebridge.de" className="nav-cta text-lg px-12 py-5 rounded-2xl">jose@tubebridge.de</a>
        </section>
      </div>

      <footer className="py-12 px-6 border-t border-white/5 text-center">
         <p className="text-gray-600 text-[10px] font-mono uppercase tracking-widest">© 2026 Jose L. Treff — TubeBridge GmbH</p>
      </footer>
    </main>
  );
}
