"use client";

import React, { useState, useEffect } from 'react';

export default function PortfolioPage() {
  const [lang, setLang] = useState('de');
  const [cmsContent, setCmsContent] = useState<any>(null);

  // 1. DEIN TEXT-SPEICHER (Backup, falls CMS noch lädt)
  const T: any = {
    de: {
      nav_projects: "Projekte", nav_services: "Leistungen", nav_contact: "Kontakt", nav_cta: "Kontakt aufnehmen",
      hero_status: "Verfügbar für Projekte — DACH & remote",
      hero_headline: "Performance.<br/>Die<br/><em>konvertiert.</em>",
      hero_sub: "Senior Performance Marketer und Shopify-Entwickler — von der Strategie bis zum Checkout. €30K/Monat Ad-Budget eigenverantwortlich gesteuert über Google, Meta und TikTok.",
      hero_ev1: "ROAS, Fashion D2C", hero_ev2: "CPA bei €80 Warenkorb", hero_ev3: "Jahre Erfahrung",
      case1_title: "Statement Clothing GmbH", case1_desc: "Vollständige Google-Ads-Strategie für eine Fashion-D2C-Brand. Budget von unter €5K auf €30K/Monat skaliert.",
      case2_title: "Die Barista Kaffee", case2_desc: "Shopify-Shop von Grund auf aufgebaut — Custom Liquid-Theme entwickelt, Produktstruktur und Checkout-Flow optimiert.",
      contact_headline: "Projekt in Planung?", contact_sub: "Ich helfe DACH-Brands dabei, messbare Ergebnisse zu erzielen. Remote, flexibel, ab €40/h."
    },
    en: {
      nav_projects: "Projects", nav_services: "Services", nav_contact: "Contact", nav_cta: "Get in touch",
      hero_status: "Available for projects — DACH & Remote",
      hero_headline: "Performance.<br/>That<br/><em>Converts.</em>",
      hero_sub: "Senior Performance Marketer and Shopify Developer — from strategy to checkout. €30K/month ad budget managed independently.",
      hero_ev1: "ROAS, Fashion D2C", hero_ev2: "CPA on €80 AOV", hero_ev3: "Years experience",
      case1_title: "Statement Clothing", case1_desc: "Full Google Ads strategy for a fashion D2C brand. Scaled budget from €5K to €30K/month.",
      case2_title: "Die Barista Coffee", case2_desc: "Shopify store built from scratch — custom Liquid theme and checkout flow optimization.",
      contact_headline: "Planning a project?", contact_sub: "Helping brands achieve measurable results. Remote and flexible."
    },
    es: {
      nav_projects: "Proyectos", nav_services: "Servicios", nav_contact: "Contacto", nav_cta: "Hablemos",
      hero_status: "Disponible para proyectos — Colombia & Global",
      hero_headline: "Rendimiento.<br/>Que<br/><em>Convierte.</em>",
      hero_sub: "Senior Performance Marketer y desarrollador Shopify — de la estrategia al checkout. Especialista en optimización de conversiones para marcas D2C.",
      hero_ev1: "ROAS, Moda D2C", hero_ev2: "CPA con ticket de €80", hero_ev3: "Años de experiencia",
      case1_title: "Statement Clothing", case1_desc: "Estrategia de Google Ads. Presupuesto escalado de €5K a €30K/mes con ROAS constante superior a 13.",
      case2_title: "Die Barista Café", case2_desc: "Tienda Shopify desde cero — Tema Liquid personalizado y optimización de flujo de pago.",
      contact_headline: "¿Tienes un proyecto?", contact_sub: "Ayudo a las marcas a obtener resultados medibles. Remoto y flexible."
    }
  };

  // 2. CMS FETCH LOGIC (Zieht Daten aus deiner home.json)
  useEffect(() => {
    fetch('/content/pages/home.json')
      .then(res => res.json())
      .then(data => setCmsContent(data))
      .catch(() => console.log("Nutze lokale Backup-Texte"));
  }, []);

  const t = (key: string) => {
    if (cmsContent?.[lang]?.[key]) return cmsContent[lang][key];
    return T[lang][key] || T['de'][key];
  };

  return (
    <main className="page bg-[#0d0d12] text-white selection:bg-[#95BF47] selection:text-black min-h-screen overflow-x-hidden">
      {/* 3. DESIGN SYSTEM & CSS (Shopify Green Edition) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&family=Epilogue:wght@400;500&family=JetBrains+Mono:wght@500;600&display=swap');
        :root {
          --color-space: oklch(9% 0.008 260);
          --color-navy: oklch(12% 0.010 260);
          --color-brand: oklch(75% 0.165 140); /* Shopify Green */
          --color-brand-muted: oklch(75% 0.165 140 / 0.1);
          --color-border: oklch(24% 0.016 260);
          --font-heading: 'Barlow Semi Condensed', sans-serif;
          --font-body: 'Epilogue', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
        }
        body { font-family: var(--font-body); -webkit-font-smoothing: antialiased; }
        .hero-headline em { font-style: normal; color: var(--color-brand); }
        .nav-cta { background: var(--color-brand); color: var(--color-space); font-weight: 600; border-radius: 6px; padding: 8px 18px; text-decoration: none; transition: all 0.2s; }
        .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 0 20px oklch(75% 0.165 140 / 0.4); }
        
        .case-card { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; padding: 4rem 0; border-top: 1px solid rgba(255,255,255,0.06); }
        .case-visual { border-radius: 16px; border: 1px solid var(--color-border); background: #151312; aspect-ratio: 4/3; overflow: hidden; position: relative; transition: all 0.4s; }
        .case-card:hover .case-visual { border-color: var(--color-brand); box-shadow: 0 0 30px oklch(75% 0.165 140 / 0.1); }
        
        @keyframes orbFloat { 0%{transform:translate(0,0)} 50%{transform:translate(3%,-4%) scale(1.04)} 100%{transform:translate(0,0)} }
        .orb { position: fixed; border-radius: 50%; filter: blur(100px); pointer-events: none; z-index: 0; opacity: 0.1; }

        @media(max-width: 900px) { .case-card { grid-template-columns: 1fr; gap: 2rem; } }
      `}} />

      {/* BACKGROUND EFFECTS */}
      <div className="orb w-[50vw] h-[50vw] bg-[--color-brand] top-[-15%] left-[-10%] animate-[orbFloat_15s_infinite]" />
      <div className="orb w-[40vw] h-[40vw] bg-indigo-500 bottom-[-10%] right-[-5%] animate-[orbFloat_20s_infinite_reverse]" />

      {/* NAVIGATION */}
      <nav className="fixed top-0 inset-x-0 h-[60px] z-[200] flex items-center justify-between px-6 bg-[#0d0d12]/80 backdrop-blur-xl border-b border-white/5">
        <a href="/" className="font-bold text-lg font-heading tracking-tighter uppercase">JL<span>.</span>T</a>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-8 text-[13px] font-medium text-gray-400">
            <li><a href="#projekte" className="hover:text-white">{t('nav_projects')}</a></li>
            <li><a href="#leistungen" className="hover:text-white">{t('nav_services')}</a></li>
          </ul>
          <div className="flex bg-[#151312] p-1 rounded-md border border-white/10 text-[10px] font-bold">
            {['de', 'en', 'es'].map(l => (
              <button key={l} onClick={() => setLang(l)} className={`px-2 py-1 rounded uppercase ${lang === l ? 'bg-[--color-brand] text-black' : 'text-gray-500'}`}>{l}</button>
            ))}
          </div>
          <a href="mailto:jose@tubebridge.de" className="nav-cta">{t('nav_cta')}</a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-32 relative z-10">
        {/* HERO */}
        <section className="min-h-[80vh] flex flex-col justify-center gap-8">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[--color-brand]/30 bg-[--color-brand]/5 w-fit">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-mono text-[10px] uppercase text-[--color-brand] tracking-widest">{t('hero_status')}</span>
           </div>
           <h1 className="text-5xl md:text-8xl font-heading font-bold leading-[1.05]" dangerouslySetInnerHTML={{ __html: t('hero_headline') }}></h1>
           <p className="text-gray-400 text-lg max-w-xl leading-relaxed">{t('hero_sub')}</p>
           <div className="flex flex-wrap gap-12 items-center py-8 border-y border-white/5">
              <div className="flex items-baseline gap-3"><span className="text-3xl font-mono font-bold text-[--color-brand]">13×</span><span className="text-[10px] text-gray-500 uppercase">{t('hero_ev1')}</span></div>
              <div className="flex items-baseline gap-3"><span className="text-3xl font-mono font-bold text-[--color-brand]">€9</span><span className="text-[10px] text-gray-500 uppercase">{t('hero_ev2')}</span></div>
           </div>
        </section>

        {/* CASE STUDIES */}
        <section id="projekte" className="py-20">
           <header className="mb-20">
              <span className="font-mono text-[11px] text-[--color-brand] uppercase tracking-widest">Selected Work</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mt-4">Case Studies</h2>
           </header>

           <div className="flex flex-col">
              {/* Case 01 - Statement Clothing */}
              <article className="case-card">
                 <div className="flex flex-col justify-center gap-6 pr-8">
                    <span className="font-mono text-[10px] text-[--color-brand] uppercase">01 — Performance Marketing</span>
                    <h3 className="text-3xl font-bold font-heading">{t('case1_title')}</h3>
                    <p className="text-gray-400 leading-relaxed">{t('case1_desc')}</p>
                    <div className="flex gap-4">
                       <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">Google Ads</span>
                       <span className="px-3 py-1 rounded bg-[--color-brand-muted] border border-[--color-brand]/20 text-[10px] text-[--color-brand]">Scaling</span>
                    </div>
                 </div>
                 <div className="case-visual">
                    <div className="bg-[#1a1a1a] h-8 flex items-center px-4 gap-2 border-b border-white/10">
                       <div className="flex gap-1"><span className="w-2 h-2 rounded-full bg-red-500/40"></span><span className="w-2 h-2 rounded-full bg-amber-500/40"></span><span className="w-2 h-2 rounded-full bg-green-500/40"></span></div>
                       <div className="text-[9px] font-mono text-gray-600">ads.google.com</div>
                    </div>
                    <div className="p-8 grid grid-cols-2 gap-4">
                       <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                          <span className="block text-[10px] uppercase text-gray-500 mb-1">ROAS</span>
                          <span className="text-2xl font-mono font-bold text-[--color-brand]">13.2×</span>
                       </div>
                       <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                          <span className="block text-[10px] uppercase text-gray-500 mb-1">CPA</span>
                          <span className="text-2xl font-mono font-bold text-green-500">€8.94</span>
                       </div>
                    </div>
                 </div>
              </article>

              {/* Case 02 - Die Barista */}
              <article className="case-card lg:direction-rtl">
                 <div className="flex flex-col justify-center gap-6 pl-8 lg:direction-ltr">
                    <span className="font-mono text-[10px] text-[--color-brand] uppercase">02 — Shopify Dev & CRO</span>
                    <h3 className="text-3xl font-bold font-heading">{t('case2_title')}</h3>
                    <p className="text-gray-400 leading-relaxed">{t('case2_desc')}</p>
                    <div className="flex gap-4">
                       <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">Liquid</span>
                       <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">CRO</span>
                    </div>
                 </div>
                 <div className="case-visual bg-[#110f0e] p-8 flex flex-col justify-center">
                    <div className="border border-white/10 rounded-lg p-6 bg-[#1a1817]">
                       <span className="text-[9px] text-[#b49885] uppercase tracking-widest mb-1">Storefront</span>
                       <div className="text-sm font-bold text-white mt-1 underline decoration-[--color-brand]">Specialty Coffee</div>
                    </div>
                 </div>
              </article>
           </div>
        </section>

        {/* SERVICES */}
        <section id="leistungen" className="py-24 border-y border-white/5 grid md:grid-cols-3 gap-12">
           {[1, 2, 3].map(i => (
              <div key={i} className="group">
                 <span className="font-mono text-xs text-[--color-brand] mb-4 block">0{i}</span>
                 <h4 className="text-xl font-bold font-heading mb-4 uppercase">{t(`nav_services`)} {i}</h4>
                 <div className="h-px w-0 bg-[--color-brand] group-hover:w-full transition-all duration-500 mb-4" />
                 <p className="text-gray-500 text-sm leading-relaxed">Messbare Resultate durch datengetriebene Strategien und saubere technische Umsetzung.</p>
              </div>
           ))}
        </section>

        {/* CONTACT */}
        <section id="kontakt" className="py-40 text-center flex flex-col items-center gap-8">
           <h2 className="text-5xl md:text-7xl font-heading font-bold">{t('contact_headline')}</h2>
           <p className="text-gray-400 max-w-lg leading-relaxed">{t('contact_sub')}</p>
           <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a href="mailto:jose@tubebridge.de" className="nav-cta text-lg px-12 py-5 rounded-2xl">jose@tubebridge.de</a>
              <a href="https://linkedin.com" target="_blank" className="border border-white/10 px-12 py-5 rounded-2xl font-bold hover:bg-white/5 transition-colors">LinkedIn</a>
           </div>
        </section>
      </div>

      <footer className="py-12 border-t border-white/5 text-center px-6">
         <p className="text-gray-600 text-[10px] font-mono uppercase tracking-widest">© 2026 Jose L. Treff — TubeBridge GmbH</p>
      </footer>
    </main>
  );
}
