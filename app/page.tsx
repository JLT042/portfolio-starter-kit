"use client";

import React, { useState, useEffect } from 'react';

export default function PortfolioPage() {
  const [lang, setLang] = useState('de');
  const [content, setContent] = useState<any>(null);

  // Fallback-Texte, falls das CMS noch lädt oder leer ist
  const defaultContent: any = {
    de: {
      hero_headline: "Performance.<br/>Die<br/><em>konvertiert.</em>",
      hero_sub: "Senior Performance Marketer und Shopify-Entwickler — von der Strategie bis zum Checkout. €30K/Monat Ad-Budget eigenverantwortlich gesteuert.",
      nav_projects: "Projekte",
      nav_services: "Leistungen",
      nav_contact: "Kontakt",
      nav_cta: "Kontakt aufnehmen"
    },
    en: {
      hero_headline: "Performance.<br/>That<br/><em>Converts.</em>",
      hero_sub: "Senior Performance Marketer and Shopify Developer — from strategy to checkout. €30K/month managed independently.",
      nav_projects: "Projects",
      nav_services: "Services",
      nav_contact: "Contact",
      nav_cta: "Get in touch"
    },
    es: {
      hero_headline: "Rendimiento.<br/>Que<br/><em>Convierte.</em>",
      hero_sub: "Senior Performance Marketer y Desarrollador Shopify — de la estrategia al checkout. Especialista en el mercado de Colombia y LATAM.",
      nav_projects: "Proyectos",
      nav_services: "Servicios",
      nav_contact: "Contacto",
      nav_cta: "Hablemos"
    }
  };

  // Versuche, die echten Daten aus dem CMS zu laden
  useEffect(() => {
    const loadCMSContent = async () => {
      try {
        const response = await fetch('/content/pages/home.json');
        if (response.ok) {
          const data = await response.json();
          setContent(data);
        }
      } catch (e) {
        console.log("CMS Daten noch nicht vorhanden, nutze Defaults.");
      }
    };
    loadCMSContent();
  }, []);

  // Wähle den richtigen Text aus (CMS-Daten haben Vorrang)
  const getT = (key: string) => {
    if (content && content[lang] && content[lang][key]) return content[lang][key];
    return defaultContent[lang][key];
  };

  return (
    <main className="page bg-[#0d0d12] text-white selection:bg-[#95BF47] selection:text-black">
      {/* CSS: 1:1 Vorlage mit Shopify-Grün Anpassung */}
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --color-brand: oklch(75% 0.165 140); /* Shopify Green */
          --color-brand-muted: oklch(75% 0.165 140 / 0.1);
          --color-brand-border: oklch(75% 0.165 140 / 0.3);
          --color-space: oklch(9% 0.008 260);
          --font-heading: 'Barlow Semi Condensed', sans-serif;
          --font-body: 'Epilogue', sans-serif;
        }
        body { font-family: var(--font-body); }
        .hero-headline em { font-style: normal; color: var(--color-brand); }
        .nav-cta { background: var(--color-brand); color: var(--color-space); }
        .nav-cta:hover { background: oklch(68% 0.165 140); }
        .lang-btn.active { background: var(--color-brand); color: var(--color-space); }
        .orb-brand { background: var(--color-brand); opacity: 0.12; }
        .case-tag.highlight { border-color: var(--color-brand-border); color: oklch(82% 0.140 140); background: var(--color-brand-muted); }
        /* ... Rest der 1:1 Hover Effekte aus deiner Vorlage ... */
        .case-card:hover .case-visual { border-color: var(--color-brand-border); box-shadow: 0 0 40px oklch(75% 0.165 140/.10); }
      `}} />

      {/* NAVIGATION */}
      <nav className="fixed top-0 inset-x-0 h-[60px] z-[200] flex items-center justify-between px-6 bg-[#0d0d12]/80 backdrop-blur-xl border-b border-white/5">
        <a href="/" className="font-heading font-bold tracking-tighter">JL<span className="text-[--color-brand]">.</span>T</a>
        <ul className="hidden md:flex gap-8 text-[13px] font-medium text-gray-400">
          <li><a href="#projekte" className="hover:text-white">{getT('nav_projects')}</a></li>
          <li><a href="#leistungen" className="hover:text-white">{getT('nav_services')}</a></li>
          <li><a href="#kontakt" className="hover:text-white">{getT('nav_contact')}</a></li>
        </ul>
        <div className="flex items-center gap-4">
          <div className="flex bg-[#151312] p-1 rounded-md border border-white/10 text-[10px] font-bold">
            {['de', 'en', 'es'].map(l => (
              <button key={l} onClick={() => setLang(l)} className={`px-2 py-1 rounded uppercase ${lang === l ? 'bg-[--color-brand] text-black' : 'text-gray-500'}`}>{l}</button>
            ))}
          </div>
          <a href="mailto:jose@tubebridge.de" className="nav-cta px-4 py-2 rounded-md text-[13px] font-semibold transition-all">
            {getT('nav_cta')}
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[--color-brand-border] bg-[--color-brand-muted] mb-6">
            <div className="w-2 h-2 bg-[#95BF47] rounded-full animate-pulse" />
            <span className="text-[10px] uppercase font-mono text-[--color-brand]">Verfügbar für DACH & Kolumbien</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-heading font-bold leading-[1.05] mb-8" dangerouslySetInnerHTML={{ __html: getT('hero_headline') }} />
          <p className="text-gray-400 text-lg max-w-md leading-relaxed">{getT('hero_sub')}</p>
        </div>
        {/* Mockup-Visual wie in Vorlage */}
        <div className="case-visual aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative">
           <div className="h-8 bg-white/10 border-b border-white/5 flex items-center px-4 gap-2">
              <div className="flex gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500/50"></span><span className="w-2 h-2 rounded-full bg-amber-500/50"></span><span className="w-2 h-2 rounded-full bg-green-500/50"></span></div>
              <div className="bg-black/20 rounded px-3 py-0.5 text-[9px] font-mono text-gray-500">ads.google.com</div>
           </div>
           {/* Dash Stats */}
           <div className="p-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                 <span className="block text-[10px] uppercase text-gray-500 mb-1">ROAS</span>
                 <span className="text-2xl font-mono font-bold text-[--color-brand]">13.2x</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                 <span className="block text-[10px] uppercase text-gray-500 mb-1">CPA</span>
                 <span className="text-2xl font-mono font-bold text-green-500">€8.94</span>
              </div>
           </div>
        </div>
      </section>
      
      {/* ... Hier fügst du die restlichen Sections analog zu Case Studies & Services ein ... */}
      
    </main>
  );
}
