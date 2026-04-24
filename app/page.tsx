"use client";

import React, { useState, useEffect } from 'react';

export default function PortfolioPage() {
  const [lang, setLang] = useState('de');
  const [cmsContent, setCmsContent] = useState<any>(null);

  // 1. VOLLSTÄNDIGE ÜBERSETZUNGS-DATENBANK (Fallback-Texte aus deiner Index.txt)
  const T: any = {
    de: {
      nav_projects: "Projekte", nav_services: "Leistungen", nav_contact: "Kontakt", nav_cta: "Kontakt aufnehmen",
      hero_status: "Verfügbar für Projekte — DACH & remote",
      hero_headline: "Performance.<br/>Die<br/><em>konvertiert.</em>",
      hero_sub: "Senior Performance Marketer und Shopify-Entwickler — von der Strategie bis zum Checkout. €30K/Monat Ad-Budget eigenverantwortlich gesteuert über Google, Meta und TikTok für D2C- und B2B-Marken im DACH-Raum.",
      hero_ev1: "ROAS, Fashion D2C", hero_ev2: "CPA bei €80 Warenkorbwert", hero_ev3: "Jahre, 6 aktive Kunden", hero_ev4: "Stundensatz",
      hero_cta1: "Case Studies ansehen", hero_video_caption: "Kampagnen-Walkthrough — Statement Clothing",
      tag_ai_workflows: "KI-Workflows",
      cases_eyebrow: "Ausgewählte Projekte", cases_sub: "Echte Kampagnen, echte Zahlen — von Performance-Marketing über Shopify-Entwicklung bis zu UX-Research und Brand-Aufbau.",
      case1_number: "01 — Performance Marketing", case1_tag_scale: "ROAS-Skalierung", case1_desc: "Vollständige Google-Ads-Strategie für eine Fashion-D2C-Brand im DACH-Markt. Budget von unter €5K auf €30K/Monat skaliert — ROAS konstant über 13 bei einem CPA von €9 bei €80 Ø-Warenkorbwert.",
      case2_number: "02 — Shopify Dev & CRO", case2_desc: "Shopify-Shop von Grund auf aufgebaut — Custom Liquid-Theme entwickelt, Produktstruktur und Checkout-Flow optimiert. Lokale Google-Ads-Kampagnen aufgesetzt.",
      case3_number: "03 — UX Lead & CRO", case3_tag_churn: "Churn-Senkung", case3_desc: "UX-Lead für eine deutschsprachige eLearning-Videoplattform. Journey-Audit, Tiefeninterviews und Usability-Tests identifizierten Schwachstellen.",
      case4_number: "04 — Branding & UX Research", case4_tag_brand: "Markenaufbau", case4_desc: "Markteinführung einer technologiegestützten Hundefuttermarke — vollständiger Markenaufbau (Logo, Visual Language, Website-Konzept).",
      svc1_title: "Paid Media & Wachstum", svc2_title: "Shopify & CRO", svc3_title: "SEO, GEO & KI",
      contact_headline: "Projekt in Planung?", contact_sub: "Ich helfe DACH-Brands dabei, messbare Ergebnisse zu erzielen. Remote, flexibel, ab €40/h."
    },
    en: {
      nav_projects: "Projects", nav_services: "Services", nav_contact: "Contact", nav_cta: "Get in touch",
      hero_status: "Available for projects — DACH & remote",
      hero_headline: "Performance.<br/>That<br/><em>Converts.</em>",
      hero_sub: "Senior Performance Marketer and Shopify Developer — from strategy to checkout. €30K/month ad budget managed independently.",
      hero_ev1: "ROAS, Fashion D2C", hero_ev2: "CPA on €80 avg. order value", hero_ev3: "years, 6 active clients", hero_ev4: "Hourly rate",
      hero_cta1: "View Case Studies", hero_video_caption: "Campaign walkthrough — Statement Clothing",
      tag_ai_workflows: "AI Workflows",
      cases_eyebrow: "Selected Projects", cases_sub: "Real campaigns, real numbers — from performance marketing to brand building.",
      case1_number: "01 — Performance Marketing", case1_tag_scale: "ROAS Scaling", case1_desc: "Full Google Ads strategy for a fashion D2C brand. Budget scaled from under €5K to €30K/month.",
      case2_number: "02 — Shopify Dev & CRO", case2_desc: "Shopify store built from scratch — custom Liquid theme developed, product structure and checkout flow optimized.",
      case3_number: "03 — UX Lead & CRO", case3_tag_churn: "Churn Reduction", case3_desc: "UX lead for a German-language eLearning video platform. Journey audit and usability tests.",
      case4_number: "04 — Branding & UX Research", case4_tag_brand: "Brand Building", case4_desc: "Market launch of a technology-driven dog food brand — complete brand build.",
      svc1_title: "Paid Media & Growth", svc2_title: "Shopify & CRO", svc3_title: "SEO, GEO & AI",
      contact_headline: "Planning a project?", contact_sub: "Helping DACH brands achieve measurable results."
    },
    es: {
      nav_projects: "Proyectos", nav_services: "Servicios", nav_contact: "Contacto", nav_cta: "Contáctame",
      hero_status: "Disponible para proyectos — DACH y remoto",
      hero_headline: "Performance.<br/>Que<br/><em>Convierte.</em>",
      hero_sub: "Senior Performance Marketer y desarrollador Shopify — de la estrategia al checkout. €30K/mes gestionado de forma autónoma.",
      hero_ev1: "ROAS, Moda D2C", hero_ev2: "CPA con ticket medio de €80", hero_ev3: "años, 6 clientes activos", hero_ev4: "Tarifa/hora",
      hero_cta1: "Ver Case Studies", hero_video_caption: "Walkthrough de campaña — Statement Clothing",
      tag_ai_workflows: "Flujos de IA",
      cases_eyebrow: "Proyectos seleccionados", cases_sub: "Campañas reales, números reales — desde performance marketing hasta construcción de marca.",
      case1_number: "01 — Performance Marketing", case1_tag_scale: "Escalado ROAS", case1_desc: "Estrategia completa de Google Ads para una marca D2C de moda. Presupuesto escalado de €5K a €30K/mes.",
      case2_number: "02 — Shopify Dev y CRO", case2_desc: "Tienda Shopify construida desde cero — tema Liquid personalizado desarrollado.",
      case3_number: "03 — UX Lead y CRO", case3_tag_churn: "Reducción de Churn", case3_desc: "UX lead para una plataforma de video eLearning en alemán.",
      case4_number: "04 — Branding y UX Research", case4_tag_brand: "Construcción de Marca", case4_desc: "Lanzamiento al mercado de una marca de comida para perros impulsada por tecnología.",
      svc1_title: "Paid Media y Crecimiento", svc2_title: "Shopify & CRO", svc3_title: "SEO, GEO e IA",
      contact_headline: "¿Tienes un proyecto?", contact_sub: "Ayudo a marcas del DACH a conseguir resultados medibles."
    }
  };

  // 2. CMS FETCH LOGIC
  useEffect(() => {
    fetch('/content/pages/home.json')
      .then(res => res.json())
      .then(data => setCmsContent(data))
      .catch(() => console.log("Nutze lokale Texte"));
  }, []);

  const t = (key: string) => {
    if (cmsContent?.[lang]?.[key]) return cmsContent[lang][key];
    return T[lang][key] || T['de'][key];
  };

  return (
    <main className="page bg-[#0d0d12] text-white selection:bg-[#95BF47] selection:text-black">
      {/* 3. KOMPLETTES CSS AUS DEINER INDEX.TXT (Farben angepasst auf Shopify-Grün) */}
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --color-space: oklch(9% 0.008 260);
          --color-navy: oklch(12% 0.010 260);
          --color-graphite: oklch(15% 0.012 260);
          --color-slate: oklch(19% 0.014 260);
          --color-border: oklch(24% 0.016 260);
          --color-border-subtle: oklch(95% 0.006 260 / 0.06);
          --color-border-brand: oklch(75% 0.165 140 / 0.30); /* Shopify Grün */
          --color-white: oklch(95% 0.006 260);
          --color-gray-300: oklch(68% 0.010 260);
          --color-gray-400: oklch(52% 0.010 260);
          --color-brand-300: oklch(82% 0.140 140);
          --color-brand-400: oklch(75% 0.165 140);
          --color-brand-500: oklch(68% 0.165 140);
          --color-success: oklch(65% 0.190 145);
          --font-heading: 'Barlow Semi Condensed', sans-serif;
          --font-body: 'Epilogue', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
        }
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&family=Epilogue:wght@400;500&family=JetBrains+Mono:wght@500;600&display=swap');
        
        body { font-family: var(--font-body); -webkit-font-smoothing: antialiased; }
        .hero-headline em { font-style: normal; color: var(--color-brand-400); }
        
        @keyframes orbFloat { 0%{transform:translate(0,0)} 50%{transform:translate(3%,-4%) scale(1.04)} 100%{transform:translate(0,0)} }
        .orb-brand { position: fixed; border-radius: 50%; filter: blur(100px); background: var(--color-brand-400); opacity: 0.11; animation: orbFloat 14s infinite; }
        
        nav { position: fixed; top: 0; width: 100%; height: 60px; display: flex; items-center: center; justify-content: space-between; padding: 0 4vw; background: rgba(13, 13, 18, 0.88); backdrop-filter: blur(16px); z-index: 200; border-bottom: 1px solid rgba(255,255,255,0.07); }
        .nav-logo { font-family: var(--font-heading); font-weight: 700; font-size: 1.1rem; }
        .nav-cta { background: var(--color-brand-400); color: black; padding: 8px 18px; border-radius: 6px; font-weight: 500; font-size: 0.8rem; }
        
        .hero-status { display: inline-flex; align-items: center; gap: 8px; padding: 5px 12px; border-radius: 99px; border: 1px solid var(--color-border-brand); background: rgba(149, 191, 71, 0.06); }
        .hero-status-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--color-success); }
        
        .case-card { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; padding: 4rem 0; border-top: 1px solid rgba(255,255,255,0.06); }
        .case-visual { border-radius: 16px; border: 1px solid var(--color-border); background: var(--color-graphite); aspect-ratio: 4/3; overflow: hidden; position: relative; }
        .case-card:hover .case-visual { border-color: var(--color-border-brand); }
        
        /* Dashboard Mockup Styles */
        .mock-kpi-row { display: grid; grid-template-columns: repeat(4, 1fr); background: var(--color-border); gap: 1px; border-bottom: 1px solid var(--color-border); }
        .mock-kpi { background: var(--color-graphite); padding: 12px; display: flex; flex-direction: column; }
        .mock-kpi-val { font-family: var(--font-mono); font-weight: 600; font-size: 0.9rem; }
        .mock-kpi-val.brand { color: var(--color-brand-400); }
      `}} />

      {/* BACKGROUND ORBS */}
      <div className="orb-brand w-[50vw] h-[50vw] top-[-10%] left-[-10%]" />
      <div className="orb-brand w-[40vw] h-[40vw] bottom-[-10%] right-[-10%] opacity-[0.08]" />

      {/* NAVIGATION */}
      <nav className="flex items-center px-6 md:px-12">
        <a href="/" className="nav-logo">JL<span className="text-[--color-brand-400]">.</span>T</a>
        <ul className="hidden md:flex gap-8 text-[13px] font-medium text-gray-400">
          <li><a href="#projekte" className="hover:text-white">{t('nav_projects')}</a></li>
          <li><a href="#leistungen" className="hover:text-white">{t('nav_services')}</a></li>
        </ul>
        <div className="flex items-center gap-6">
          <div className="flex bg-[#151312] p-1 rounded-md border border-white/10 text-[10px] font-bold">
            {['de', 'en', 'es'].map(l => (
              <button key={l} onClick={() => setLang(l)} className={`px-2 py-1 rounded uppercase ${lang === l ? 'bg-[--color-brand-400] text-black' : 'text-gray-500'}`}>{l}</button>
            ))}
          </div>
          <a href="mailto:jose@tubebridge.de" className="nav-cta">{t('nav_cta')}</a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-32">
        {/* HERO */}
        <section className="min-h-[80vh] flex flex-col justify-center gap-8 pb-20">
          <div className="hero-status">
            <div className="hero-status-dot animate-pulse" />
            <span className="font-mono text-[10px] uppercase text-[--color-brand-300]">{t('hero_status')}</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold leading-[1.05]" dangerouslySetInnerHTML={{ __html: t('hero_headline') }} />
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">{t('hero_sub')}</p>
          
          <div className="flex flex-wrap gap-12 items-center py-8 border-y border-white/5">
            <div className="flex items-baseline gap-3"><span className="text-3xl font-mono font-bold text-[--color-brand-400]">13×</span><span className="text-[10px] text-gray-500 uppercase">{t('hero_ev1')}</span></div>
            <div className="flex items-baseline gap-3"><span className="text-3xl font-mono font-bold text-[--color-brand-400]">€9</span><span className="text-[10px] text-gray-500 uppercase">{t('hero_ev2')}</span></div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="projekte" className="py-20">
          <div className="mb-16">
            <span className="font-mono text-[11px] text-[--color-brand-400] uppercase tracking-widest">{t('cases_eyebrow')}</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4">Case Studies</h2>
          </div>

          <div className="flex flex-col">
            {/* 01 Statement */}
            <article className="case-card">
              <div className="flex flex-col justify-center gap-6 pr-8">
                <span className="font-mono text-[10px] text-[--color-brand-400] uppercase">{t('case1_number')}</span>
                <h3 className="text-4xl font-bold">Statement Clothing GmbH</h3>
                <p className="text-gray-400 leading-relaxed">{t('case1_desc')}</p>
                <div className="flex gap-12">
                   <div><div className="text-2xl font-mono font-bold text-[--color-brand-400]">13×</div><div className="text-[10px] text-gray-500 uppercase">ROAS</div></div>
                   <div><div className="text-2xl font-mono font-bold text-[--color-brand-400]">€9</div><div className="text-[10px] text-gray-500 uppercase">CPA</div></div>
                </div>
              </div>
              <div className="case-visual">
                <div className="bg-[#1a1a1a] h-8 flex items-center px-4 gap-2 border-b border-white/10">
                   <div className="flex gap-1"><span className="w-2 h-2 rounded-full bg-red-500/50"></span><span className="w-2 h-2 rounded-full bg-amber-500/50"></span><span className="w-2 h-2 rounded-full bg-green-500/50"></span></div>
                   <div className="text-[9px] font-mono text-gray-600">ads.google.com</div>
                </div>
                <div className="mock-kpi-row">
                   <div className="mock-kpi"><span className="text-[8px] text-gray-500">ROAS</span><span className="mock-kpi-val brand">13.2×</span></div>
                   <div className="mock-kpi"><span className="text-[8px] text-gray-500">CPA</span><span className="mock-kpi-val text-green-500">€8.94</span></div>
                   <div className="mock-kpi"><span className="text-[8px] text-gray-500">Budget</span><span className="mock-kpi-val">€28k</span></div>
                   <div className="mock-kpi"><span className="text-[8px] text-gray-500">Conv.</span><span className="mock-kpi-val text-green-500">4.8%</span></div>
                </div>
              </div>
            </article>

            {/* 02 Die Barista */}
            <article className="case-card lg:direction-rtl">
              <div className="flex flex-col justify-center gap-6 pl-8 lg:direction-ltr">
                <span className="font-mono text-[10px] text-[--color-brand-400] uppercase">{t('case2_number')}</span>
                <h3 className="text-4xl font-bold">Die Barista Kaffee</h3>
                <p className="text-gray-400 leading-relaxed">{t('case2_desc')}</p>
                <div className="flex gap-4">
                  <span className="px-3 py-1 rounded bg-[#1a1a1a] text-[10px] border border-white/10 text-gray-400">Shopify Liquid</span>
                  <span className="px-3 py-1 rounded bg-[#1a1a1a] text-[10px] border border-white/10 text-gray-400">CRO</span>
                </div>
              </div>
              <div className="case-visual">
                 <div className="bg-[#110f0e] h-full p-6 flex flex-col gap-4">
                    <div className="flex justify-between items-center"><span className="font-heading font-bold text-sm tracking-widest text-[#b49885]">DIE BARISTA</span><div className="flex gap-4 text-[8px] text-gray-600"><span>Kaffee</span><span>Zubehör</span></div></div>
                    <div className="flex-1 bg-gradient-to-br from-[#1a1817] to-[#110f0e] rounded-lg border border-white/5 p-4 flex flex-col justify-center">
                       <span className="text-[7px] text-[#b49885] uppercase tracking-widest mb-1">Neu im Shop</span>
                       <span className="text-xs font-bold text-white">Specialty Coffee aus aller Welt</span>
                    </div>
                 </div>
              </div>
            </article>

            {/* 03 Meet Your Master */}
            <article className="case-card">
              <div className="flex flex-col justify-center gap-6 pr-8">
                <span className="font-mono text-[10px] text-[--color-brand-400] uppercase">{t('case3_number')}</span>
                <h3 className="text-4xl font-bold">Meet Your Master</h3>
                <p className="text-gray-400 leading-relaxed">{t('case3_desc')}</p>
                <div className="flex items-center gap-4 bg-[#95BF47]/5 border border-[#95BF47]/20 p-4 rounded-xl">
                   <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#95BF47]" />
                   <span className="text-[11px] font-medium text-[--color-brand-300]">Engagement ↑ 34% nach Redesign</span>
                </div>
              </div>
              <div className="case-visual">
                 <div className="flex h-full">
                    <div className="w-20 bg-[#0a0a0f] border-r border-white/5 p-4 flex flex-col gap-2"><div className="w-full h-1.5 rounded bg-[#95BF47]/20" /><div className="w-full h-1.5 rounded bg-white/5" /><div className="w-full h-1.5 rounded bg-white/5" /></div>
                    <div className="flex-1 p-6 flex flex-col gap-4">
                       <div className="h-20 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-end gap-2"><div className="w-2/3 h-2 rounded bg-white/10" /><div className="w-full h-1 rounded bg-[#95BF47]/40" /></div>
                       <div className="grid grid-cols-2 gap-3 flex-1"><div className="bg-white/5 rounded-lg border border-white/5" /><div className="bg-white/5 rounded-lg border border-white/5" /></div>
                    </div>
                 </div>
              </div>
            </article>

            {/* 04 DOQ */}
            <article className="case-card lg:direction-rtl">
              <div className="flex flex-col justify-center gap-6 pl-8 lg:direction-ltr">
                <span className="font-mono text-[10px] text-[--color-brand-400] uppercase">{t('case4_number')}</span>
                <h3 className="text-4xl font-bold">DOQ Hundefutter</h3>
                <p className="text-gray-400 leading-relaxed">{t('case4_desc')}</p>
                <div className="flex gap-4">
                  <span className="px-3 py-1 rounded bg-[#95BF47]/10 text-[10px] border border-[#95BF47]/20 text-[--color-brand-300]">UX Research</span>
                  <span className="px-3 py-1 rounded bg-white/5 text-[10px] border border-white/10 text-gray-400">MVP Roadmap</span>
                </div>
              </div>
              <div className="case-visual">
                 <div className="bg-[#0c100d] h-full p-6 flex gap-4">
                    <div className="flex-1 flex flex-col gap-3"><div className="flex-1 bg-gradient-to-br from-[#1a221c] to-[#0c100d] rounded-xl border border-white/5 flex items-center justify-center text-4xl">🐾</div><div className="flex gap-2"><div className="w-8 h-8 rounded bg-white/5" /><div className="w-8 h-8 rounded bg-white/5" /><div className="w-8 h-8 rounded bg-white/5" /></div></div>
                    <div className="w-32 flex flex-col gap-2"><div className="h-3 w-full bg-white/10 rounded" /><div className="h-2 w-full bg-white/5 rounded" /><div className="h-2 w-2/3 bg-white/5 rounded" /><div className="h-10 w-full bg-[#95BF47] rounded-lg mt-auto" /></div>
                 </div>
              </div>
            </article>
          </div>
        </section>

        {/* SERVICES */}
        <section id="leistungen" className="py-24 border-y border-white/5">
          <div className="grid md:grid-cols-3 gap-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="group">
                <span className="font-mono text-xs text-[--color-brand-400] mb-6 block">0{i}</span>
                <h4 className="text-xl font-bold mb-4">{t(`svc${i}_title`)}</h4>
                <div className="h-px w-0 bg-[--color-brand-400] group-hover:w-full transition-all duration-500 mb-6" />
                <p className="text-gray-500 text-sm leading-relaxed">{t(`svc${i}_desc`)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="kontakt" className="py-40 text-center flex flex-col items-center gap-8">
          <span className="font-mono text-[11px] text-[--color-brand-400] uppercase tracking-widest">{t('contact_headline')}</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">{t('contact_headline')}</h2>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">{t('contact_sub')}</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
             <a href="mailto:jose@tubebridge.de" className="bg-[--color-brand-400] text-black px-12 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform">jose@tubebridge.de</a>
             <a href="https://linkedin.com/in/jose-l-treff-033224251" target="_blank" className="border border-white/10 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white/5 transition-colors">LinkedIn</a>
          </div>
        </section>
      </div>

      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <a href="/" className="nav-logo">JL<span className="text-[--color-brand-400]">.</span>T</a>
           <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">© 2026 Jose L. Treff — TubeBridge GmbH</span>
           <div className="flex gap-8 text-[11px] font-medium text-gray-500">
              <a href="mailto:jose@tubebridge.de" className="hover:text-white transition-colors">E-Mail</a>
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
           </div>
        </div>
      </footer>
    </main>
  );
}
