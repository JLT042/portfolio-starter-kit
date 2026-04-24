"use client";

import React, { useState } from 'react';

export default function PortfolioPage() {
  const [lang, setLang] = useState('de');

  // HIER SIND DIE TEXTE - Später zieht das CMS diese automatisch aus deinem Dashboard!
  const content = {
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
      hero_sub: "Senior Performance Marketer and Shopify Developer — from strategy to checkout. €30K/month ad budget managed independently.",
      nav_projects: "Projects",
      nav_services: "Services",
      nav_contact: "Contact",
      nav_cta: "Get in touch"
    },
    es: {
      hero_headline: "Rendimiento.<br/>Que<br/><em>Convierte.</em>",
      hero_sub: "Senior Performance Marketer y Desarrollador Shopify — desde la estrategia hasta el checkout. €30K/mes de presupuesto gestionado.",
      nav_projects: "Proyectos",
      nav_services: "Servicios",
      nav_contact: "Contacto",
      nav_cta: "Hablemos"
    }
  };

  const t = content[lang as keyof typeof content] || content.de;

  return (
    <main className="page bg-[#0d0d12] text-white selection:bg-[#95BF47] selection:text-black">
      {/* DEIN ORIGINAL CSS MIT SHOPIFY-GRÜN */}
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --color-space: oklch(9% 0.008 260);
          --color-navy: oklch(12% 0.010 260);
          --color-graphite: oklch(15% 0.012 260);
          --color-slate: oklch(19% 0.014 260);
          --color-border: oklch(24% 0.016 260);
          --color-border-subtle: oklch(95% 0.006 260 / 0.06);
          --color-border-brand: oklch(75% 0.165 140 / 0.30);
          --color-white: oklch(95% 0.006 260);
          --color-gray-300: oklch(68% 0.010 260);
          --color-gray-400: oklch(52% 0.010 260);
          --color-brand-300: oklch(82% 0.140 140);
          --color-brand-400: oklch(75% 0.165 140);
          --color-brand-500: oklch(68% 0.165 140);
          --color-indigo-300: oklch(68% 0.165 265);
          --color-indigo-400: oklch(58% 0.200 265);
          --color-success: oklch(65% 0.190 145);
          --font-heading: 'Barlow Semi Condensed', system-ui, sans-serif;
          --font-body: 'Epilogue', system-ui, sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
        }
        body { font-family: var(--font-body); }
        @keyframes orbFloat { 0%{transform:translate(0,0) scale(1)} 33%{transform:translate(3%,-4%) scale(1.04)} 66%{transform:translate(-2%,3%) scale(.97)} 100%{transform:translate(0,0) scale(1)} }
        @keyframes orbFloatAlt { 0%{transform:translate(0,0) scale(1)} 40%{transform:translate(-5%,4%) scale(1.06)} 70%{transform:translate(3%,-3%) scale(.95)} 100%{transform:translate(0,0) scale(1)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        
        .orb-field{position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden}
        .orb{position:absolute;border-radius:50%;filter:blur(90px)}
        .orb-brand{width:55vw;height:55vw;max-width:680px;max-height:680px;background:oklch(75% 0.165 140/1);top:-15%;left:-10%;opacity:.11;animation:orbFloat 14s ease-in-out infinite}
        .orb-indigo{width:50vw;height:50vw;max-width:600px;max-height:600px;background:oklch(58% 0.200 265/1);bottom:-20%;right:-8%;opacity:.10;animation:orbFloatAlt 18s ease-in-out infinite}
        
        nav{position:fixed;top:0;left:0;right:0;z-index:200;height:60px;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(1rem,4vw,1.5rem);background:oklch(9% 0.008 260/.88);backdrop-filter:blur(16px) saturate(1.5);border-bottom:1px solid oklch(95% 0.006 260/.07)}
        .nav-logo{font-family:var(--font-heading);font-size:1rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--color-white);text-decoration:none}
        .nav-logo span{color:var(--color-brand-400)}
        .nav-links{display:flex;align-items:center;gap:2rem;list-style:none}
        .nav-links a{font-family:var(--font-body);font-size:.8125rem;font-weight:500;letter-spacing:.04em;color:var(--color-gray-300);text-decoration:none;transition:color 180ms}
        .nav-links a:hover{color:var(--color-white)}
        .nav-right{display:flex;align-items:center;gap:1rem}
        .nav-cta{font-family:var(--font-body);font-size:.8125rem;font-weight:500;color:var(--color-space);background:var(--color-brand-400);border:none;padding:8px 18px;border-radius:6px;text-decoration:none;transition:all 180ms}
        .nav-cta:hover{background:var(--color-brand-500);box-shadow:0 0 20px oklch(75% 0.165 140/.22);transform:translateY(-1px)}
        
        /* SPRACH-SWITCHER CSS */
        .lang-switcher{display:flex;align-items:center;gap:2px;background:var(--color-graphite);border:1px solid var(--color-border);border-radius:6px;padding:3px}
        .lang-btn{font-family:var(--font-mono);font-size:.625rem;font-weight:600;letter-spacing:.05em;color:var(--color-gray-400);background:transparent;border:none;padding:4px 7px;border-radius:4px;cursor:pointer;line-height:1}
        .lang-btn.active{color:var(--color-space);background:var(--color-brand-400)}

        .hero{min-height:100dvh;padding:60px clamp(1rem,6vw,4rem) 0;display:flex;flex-direction:column;justify-content:center}
        .hero-inner{max-width:1280px;margin:0 auto;width:100%;padding:4rem 0 3rem;display:grid;grid-template-columns:1fr 1fr;gap:2rem 3rem;align-items:start}
        .hero-status{display:inline-flex;align-items:center;gap:0.5rem;padding:5px 12px;border-radius:9999px;border:1px solid var(--color-border-brand);background:oklch(75% 0.165 140/.06);width:fit-content;animation:fadeUp .5s ease-out .15s both}
        .hero-status-dot{width:6px;height:6px;border-radius:50%;background:var(--color-success);box-shadow:0 0 6px oklch(65% 0.190 145/.6);animation:pulse 2.5s ease-in-out infinite}
        .hero-status-text{font-family:var(--font-mono);font-size:.6875rem;color:var(--color-brand-300);text-transform:uppercase}
        .hero-headline{font-family:var(--font-heading);font-size:clamp(3rem,5vw + .5rem,4.5rem);font-weight:700;line-height:1.05;color:var(--color-white);animation:fadeUp .6s ease-out .25s both; margin-top:1.5rem; margin-bottom:1.5rem;}
        .hero-headline em{font-style:normal;color:var(--color-brand-400)}
        .hero-sub{font-family:var(--font-body);font-size:clamp(.9375rem,1.2vw + .3rem,1.1rem);line-height:1.65;color:var(--color-gray-300);max-width:46ch;animation:fadeUp .6s ease-out .35s both}
        
        @media(max-width:900px){
          .hero-inner{grid-template-columns:1fr;}
        }
      `}} />

      <div className="orb-field" aria-hidden="true">
        <div className="orb orb-brand"></div>
        <div className="orb orb-indigo"></div>
      </div>

      <nav>
        <a href="/" className="nav-logo">JL<span>.</span>T</a>
        <ul className="nav-links hidden md:flex">
          <li><a href="#projekte">{t.nav_projects}</a></li>
          <li><a href="#leistungen">{t.nav_services}</a></li>
          <li><a href="#kontakt">{t.nav_contact}</a></li>
        </ul>
        <div className="nav-right">
          <div className="lang-switcher">
            <button className={`lang-btn ${lang === 'de' ? 'active' : ''}`} onClick={() => setLang('de')}>DE</button>
            <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
            <button className={`lang-btn ${lang === 'es' ? 'active' : ''}`} onClick={() => setLang('es')}>ES</button>
          </div>
          <a href="mailto:jose@tubebridge.de" className="nav-cta">{t.nav_cta}</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="hero-text flex flex-col gap-6">
            <div className="hero-status">
              <div className="hero-status-dot"></div>
              <span className="hero-status-text">Verfügbar für Projekte — DACH & LATAM</span>
            </div>
            <h1 className="hero-headline" dangerouslySetInnerHTML={{ __html: t.hero_headline }}></h1>
            <p className="hero-sub">{t.hero_sub}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
