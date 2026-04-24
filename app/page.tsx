"use client";

import React, { useState, useEffect } from 'react';

export default function PortfolioPage() {
  const [lang, setLang] = useState('de');
  const [cmsContent, setCmsContent] = useState<any>(null);

  // 1. VOLLSTÄNDIGE TEXT-DATENBANK (Fallback & Basis)
  const T: any = {
    de: {
      nav_projects: "Projekte", nav_services: "Leistungen", nav_contact: "Kontakt", nav_cta: "Kontakt aufnehmen",
      hero_status: "Verfügbar für Projekte — DACH & remote",
      hero_headline: "Performance.<br/>Die<br/><em>konvertiert.</em>",
      hero_sub: "Senior Performance Marketer und Shopify-Entwickler — von der Strategie bis zum Checkout. €30K/Monat Ad-Budget eigenverantwortlich gesteuert.",
      hero_ev1: "ROAS, Fashion D2C", hero_ev2: "CPA bei €80 Warenkorb", hero_ev3: "Jahre Erfahrung", hero_ev4: "Stundensatz",
      case1_title: "Statement Clothing GmbH", case1_desc: "Google-Ads-Strategie für D2C Fashion. Budget von €5K auf €30K/Monat skaliert.",
      case2_title: "Die Barista Kaffee", case2_desc: "Shopify-Shop von Grund auf aufgebaut — Custom Liquid-Theme & CRO.",
      case3_title: "Meet Your Master", case3_desc: "UX-Lead für eLearning-Plattform. Journey-Audit & Churn-Senkung.",
      case4_title: "DOQ Hundefutter", case4_desc: "Markenaufbau & App-Prototyping für technologiegestützte Tiernahrung.",
      svc1_title: "Paid Media & Wachstum", svc2_title: "Shopify & CRO", svc3_title: "SEO, GEO & KI",
      contact_headline: "Projekt in Planung?", contact_sub: "Ich helfe DACH-Brands dabei, messbare Ergebnisse zu erzielen."
    },
    en: {
      nav_projects: "Projects", nav_services: "Services", nav_contact: "Contact", nav_cta: "Get in touch",
      hero_status: "Available for projects — DACH & Remote",
      hero_headline: "Performance.<br/>That<br/><em>Converts.</em>",
      hero_sub: "Senior Performance Marketer and Shopify Developer — from strategy to checkout. €30K/month ad budget managed independently.",
      hero_ev1: "ROAS, Fashion D2C", hero_ev2: "CPA on €80 AOV", hero_ev3: "Years Experience", hero_ev4: "Hourly Rate",
      case1_title: "Statement Clothing", case1_desc: "Full Google Ads strategy. Scaled budget from €5K to €30K/month.",
      case2_title: "Die Barista Coffee", case2_desc: "Shopify store built from scratch — Custom Liquid & CRO.",
      case3_title: "Meet Your Master", case3_desc: "UX lead for eLearning platform. Journey audit & churn reduction.",
      case4_title: "DOQ Dog Food", case4_desc: "Brand building & app prototyping for tech-driven pet food.",
      svc1_title: "Paid Media & Growth", svc2_title: "Shopify & CRO", svc3_title: "SEO, GEO & AI",
      contact_headline: "Planning a project?", contact_sub: "Helping brands achieve measurable results."
    },
    es: {
      nav_projects: "Proyectos", nav_services: "Servicios", nav_contact: "Contacto", nav_cta: "Hablemos",
      hero_status: "Disponible para proyectos — Colombia & Global",
      hero_headline: "Rendimiento.<br/>Que<br/><em>Convierte.</em>",
      hero_sub: "Senior Performance Marketer y Desarrollador Shopify — de la estrategia al checkout. Especialista en optimización de conversiones.",
      hero_ev1: "ROAS, Moda D2C", hero_ev2: "CPA con ticket de €80", hero_ev3: "Años de experiencia", hero_ev4: "Tarifa/hora",
      case1_title: "Statement Clothing", case1_desc: "Estrategia de Google Ads. Escalado de presupuesto de €5K a €30K/mes.",
      case2_title: "Die Barista Café", case2_desc: "Tienda Shopify desde cero — Tema Liquid personalizado y CRO.",
      case3_title: "Meet Your Master", case3_desc: "Líder de UX para plataforma eLearning. Auditoría y reducción de abandono.",
      case4_title: "DOQ Comida Perros", case4_desc: "Construcción de marca y prototipo de app para ecommerce.",
      svc1_title: "Paid Media & Crecimiento", svc2_title: "Shopify & CRO", svc3_title: "SEO, GEO & IA",
      contact_headline: "¿Tienes un proyecto?", contact_sub: "Ayudo a marcas a obtener resultados medibles."
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
    <main className="min-h-screen bg-[#0d0d12] text-white selection:bg-[#95BF47] selection:text-black">
      {/* 3. MASSIVE CSS BLOCK (1:1 VORLAGE) */}
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --color-brand: oklch(75% 0.165 140);
          --color-brand-muted: oklch(75% 0.165 140 / 0.1);
          --color-border: oklch(24% 0.016 260);
          --font-heading: 'Barlow Semi Condensed', sans-serif;
          --font-body: 'Epilogue', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
        }
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&family=Epilogue:wght@400;500&family=JetBrains+Mono:wght@500;600&display=swap');
        
        body { font-family: var(--font-body); -webkit-font-smoothing: antialiased; }
        h1, h2, h3 { font-family: var(--font-heading); text-transform: none; }
        .mono { font-family: var(--font-mono); }

        @keyframes orbFloat { 0%{transform:translate(0,0)} 50%{transform:translate(4%, -3%) scale(1.02)} 100%{transform:translate(0,0)} }
        .orb { position: fixed; border-radius: 50%; filter: blur(100px); pointer-events: none; z-index: 0; }
        
        nav { backdrop-filter: blur(16px); border-bottom: 1px solid rgba(255,255,255,0.05); }
        .nav-cta { background: var(--color-brand); transition: all 0.2s; }
        .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 0 20px oklch(75% 0.165 140 / 0.4); }

        .case-card { border-top: 1px solid rgba(255,255,255,0.05); transition: all 0.3s; }
        .case-visual { background: #151312; border: 1px solid var(--color-border); transition: all 0.4s; }
        .case-card:hover .case-visual { border-color: var(--color-brand); box-shadow: 0 0 30px oklch(75% 0.165 140 / 0.1); }
        
        .btn-primary { background: var(--color-brand); color: black; font-weight: 600; }
        .btn-ghost { border: 1px solid var(--color-border); }
        .btn-ghost:hover { border-color: var(--color-brand); background: var(--color-brand-muted); }
      `}} />

      {/* BACKGROUND ORBS */}
      <div className="orb w-[50vw] h-[50vw] bg-[--color-brand] top-[-10%] left-[-10%] opacity-[0.08] animate-[orbFloat_15s_infinite]" />
      <div className="orb w-[40vw] h-[40vw] bg-indigo-500 bottom-[-10%] right-[-10%] opacity-[0.06] animate-[orbFloat_20s_infinite_reverse]" />

      {/* NAVIGATION */}
      <nav className="fixed top-0 inset-x-0 h-16 z-[100] flex items-center justify-between px-6 bg-[#0d0d12]/80">
        <a href="/" className="text-xl font-bold font-heading tracking-tighter">JL<span className="text-[--color-brand]">.</span>T</a>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <li><a href="#projekte" className="hover:text-white transition-colors">{t('nav_projects')}</a></li>
            <li><a href="#leistungen" className="hover:text-white transition-colors">{t('nav_services')}</a></li>
          </ul>
          <div className="flex bg-white/5 p-1 rounded-lg border border-white/10 text-[10px] font-bold">
            {['de', 'en', 'es'].map(l => (
              <button key={l} onClick={() => setLang(l)} className={`px-2 py-1 rounded uppercase ${lang === l ? 'bg-[--color-brand] text-black' : 'text-gray-500'}`}>{l}</button>
            ))}
          </div>
          <a href="mailto:jose@tubebridge.de" className="nav-cta px-4 py-2 rounded-lg text-sm font-bold text-black">
            {t('nav_cta')}
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-40 pb-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[--color-brand]/30 bg-[--color-brand]/5 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-mono text-[--color-brand]">{t('hero_status')}</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] mb-8" dangerouslySetInnerHTML={{ __html: t('hero_headline') }} />
          <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-10">{t('hero_sub')}</p>
          
          <div className="flex flex-wrap gap-12 items-center mb-12 border-y border-white/5 py-8">
             <div className="flex items-baseline gap-2"><span className="text-3xl font-mono font-bold text-[--color-brand]">13×</span><span className="text-[10px] text-gray-500 uppercase">{t('hero_ev1')}</span></div>
             <div className="flex items-baseline gap-2"><span className="text-3xl font-mono font-bold text-[--color-brand]">€9</span><span className="text-[10px] text-gray-500 uppercase">{t('hero_ev2')}</span></div>
          </div>

          <div className="flex gap-4">
            <a href="#projekte" className="btn-primary px-8 py-4 rounded-xl text-sm">{t('hero_cta1')}</a>
            <a href="mailto:jose@tubebridge.de" className="btn-ghost px-8 py-4 rounded-xl text-sm transition-all">Email</a>
          </div>
        </div>

        <div className="case-visual aspect-video rounded-3xl overflow-hidden relative group">
           <div className="absolute inset-0 bg-gradient-to-br from-[--color-brand]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
           <div className="h-full w-full p-8 flex flex-col justify-center">
              <div className="flex gap-1 mb-4"><div className="w-1.5 h-1.5 rounded-full bg-red-500/40"></div><div className="w-1.5 h-1.5 rounded-full bg-amber-500/40"></div><div className="w-1.5 h-1.5 rounded-full bg-green-500/40"></div></div>
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/5">
                 <div className="text-[10px] font-mono text-gray-500 mb-2">ADS.GOOGLE.COM</div>
                 <div className="text-4xl font-mono font-bold text-[--color-brand] mb-1">ROAS 13.2</div>
                 <div className="text-[11px] text-green-500 font-mono">↑ 42% vs. Vorjahr</div>
              </div>
           </div>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section id="projekte" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-[10px] font-mono text-[--color-brand] uppercase tracking-[0.2em] mb-4 block">Case Studies</span>
          <h2 className="text-4xl md:text-6xl font-bold">Ausgewählte Projekte</h2>
        </div>

        <div className="flex flex-col">
          {/* CASE 01 */}
          <div className="case-card py-20 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-[10px] font-mono text-gray-500 uppercase">01 — Performance Marketing</span>
              <h3 className="text-4xl font-bold leading-tight">{t('case1_title')}</h3>
              <p className="text-gray-400 leading-relaxed max-w-md">{t('case1_desc')}</p>
              <div className="flex gap-4">
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">Google Ads</span>
                <span className="px-3 py-1 rounded bg-[--color-brand-muted] border border-[--color-brand]/20 text-[10px] text-[--color-brand]">Scaling</span>
              </div>
            </div>
            <div className="case-visual aspect-[4/3] rounded-2xl" />
          </div>

          {/* CASE 02 */}
          <div className="case-card py-20 grid lg:grid-cols-2 gap-12 items-center lg:direction-rtl">
            <div className="space-y-6 lg:direction-ltr">
              <span className="text-[10px] font-mono text-gray-500 uppercase">02 — Shopify Dev & CRO</span>
              <h3 className="text-4xl font-bold leading-tight">{t('case2_title')}</h3>
              <p className="text-gray-400 leading-relaxed max-w-md">{t('case2_desc')}</p>
              <div className="flex gap-4">
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">Liquid</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">Clarity</span>
              </div>
            </div>
            <div className="case-visual aspect-[4/3] rounded-2xl" />
          </div>

          {/* CASE 03 & 04 (In der gleichen Struktur wie oben fortfahren) */}
          <div className="case-card py-20 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-[10px] font-mono text-gray-500 uppercase">03 — UX Research</span>
              <h3 className="text-4xl font-bold leading-tight">{t('case3_title')}</h3>
              <p className="text-gray-400 leading-relaxed max-w-md">{t('case3_desc')}</p>
            </div>
            <div className="case-visual aspect-[4/3] rounded-2xl" />
          </div>

          <div className="case-card py-20 grid lg:grid-cols-2 gap-12 items-center lg:direction-rtl">
            <div className="space-y-6 lg:direction-ltr">
              <span className="text-[10px] font-mono text-gray-500 uppercase">04 — Branding</span>
              <h3 className="text-4xl font-bold leading-tight">{t('case4_title')}</h3>
              <p className="text-gray-400 leading-relaxed max-w-md">{t('case4_desc')}</p>
            </div>
            <div className="case-visual aspect-[4/3] rounded-2xl" />
          </div>
        </div>
      </section>

      {/* LEISTUNGEN STRIP */}
      <section id="leistungen" className="bg-[#111015] border-y border-white/5 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {[1, 2, 3].map(i => (
            <div key={i} className="group">
              <span className="text-[--color-brand] font-mono text-xs block mb-6">0{i}</span>
              <h4 className="text-xl font-bold mb-4">{t(`svc${i}_title`)}</h4>
              <div className="h-px w-0 bg-[--color-brand] group-hover:w-full transition-all duration-500 mb-6" />
              <p className="text-gray-500 text-sm leading-relaxed">Fokussiert auf messbare Ergebnisse und technische Exzellenz.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="kontakt" className="py-40 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">{t('contact_headline')}</h2>
          <p className="text-gray-400 text-lg leading-relaxed">{t('contact_sub')}</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
            <a href="mailto:jose@tubebridge.de" className="btn-primary px-12 py-5 rounded-2xl text-lg">Email schreiben</a>
            <a href="#" className="btn-ghost px-12 py-5 rounded-2xl text-lg">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-xl font-bold font-heading tracking-tighter">JL<span className="text-[--color-brand]">.</span>T</span>
          <p className="text-gray-600 text-xs uppercase tracking-widest font-mono">© 2026 Jose L. Treff — TubeBridge GmbH</p>
          <div className="flex gap-8 text-xs text-gray-500 font-mono">
            <a href="#projekte" className="hover:text-white uppercase">Work</a>
            <a href="mailto:jose@tubebridge.de" className="hover:text-white uppercase">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
