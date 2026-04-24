"use client";

import React, { useEffect, useState } from 'react';

export default function PortfolioPage() {
  // Sprach-Logik wie in deiner Vorlage
  const [lang, setLang] = useState('de');

  // Diese Texte kannst du hier direkt im Code anpassen, 
  // genau wie du es in der HTML-Datei gemacht hast.
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
    }
  };

  const t = content[lang as keyof typeof content] || content.de;

  return (
    <main className="min-h-screen bg-[#0d0d12] text-white selection:bg-amber-400 selection:text-black">
      {/* CSS-Styles direkt im File für den "One-Click"-Effekt */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@400;600;700&family=Epilogue:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap');
        
        :root {
          --color-amber-400: oklch(75% 0.165 75);
        }

        body { font-family: 'Epilogue', sans-serif; }
        h1, h2, h3 { font-family: 'Barlow Semi Condensed', sans-serif; }
        .mono { font-family: 'JetBrains Mono', monospace; }

        @keyframes orbFloat {
          0% { transform: translate(0,0) scale(1); }
          50% { transform: translate(3%, -4%) scale(1.05); }
          100% { transform: translate(0,0) scale(1); }
        }
      `}</style>

      {/* Hintergrund Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-amber-500/10 blur-[120px] rounded-full animate-[orbFloat_15s_infinite]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-indigo-500/10 blur-[120px] rounded-full animate-[orbFloat_20s_infinite_reverse]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 h-16 z-50 flex items-center justify-between px-6 bg-[#0d0d12]/80 backdrop-blur-xl border-b border-white/5">
        <a href="#" className="text-xl font-bold tracking-tighter">JL<span className="text-amber-400">.</span>T</a>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <li><a href="#projekte" className="hover:text-white transition-colors">{t.nav_projects}</a></li>
            <li><a href="#leistungen" className="hover:text-white transition-colors">{t.nav_services}</a></li>
          </ul>
          <div className="flex bg-white/5 p-1 rounded-lg border border-white/10 text-[10px] font-bold">
            <button onClick={() => setLang('de')} className={`px-2 py-1 rounded ${lang === 'de' ? 'bg-amber-400 text-black' : 'text-gray-400'}`}>DE</button>
            <button onClick={() => setLang('en')} className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-amber-400 text-black' : 'text-gray-400'}`}>EN</button>
          </div>
          <a href="mailto:jose@tubebridge.de" className="bg-amber-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-500 transition-all">
            {t.nav_cta}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/5 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-mono text-amber-300">Verfügbar für Projekte</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8" dangerouslySetInnerHTML={{ __html: t.hero_headline }} />
          <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-10">{t.hero_sub}</p>
          
          <div className="flex flex-wrap gap-4 items-center">
             <div className="flex items-baseline gap-2">
                <span className="text-3xl font-mono font-bold text-amber-400">13×</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">ROAS</span>
             </div>
             <div className="w-px h-8 bg-white/10" />
             <div className="flex items-baseline gap-2">
                <span className="text-3xl font-mono font-bold text-amber-400">€9</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">CPA</span>
             </div>
          </div>
        </div>

        {/* Hier ist der Platzhalter für dein 21st.dev Video oder Dashboard */}
        <div className="relative group">
          <div className="absolute inset-0 bg-amber-400/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative aspect-video bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm flex items-center justify-center">
             <span className="text-gray-600 font-mono text-sm">21st.dev Video/Component Area</span>
          </div>
        </div>
      </section>

      {/* Leistungen (Short) */}
      <section id="leistungen" className="relative z-10 py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {['Performance Marketing', 'Shopify Dev', 'SEO & AI'].map((s, i) => (
            <div key={i} className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-amber-400/30 transition-colors group">
              <span className="block text-amber-400 font-mono text-xs mb-4">0{i+1}</span>
              <h3 className="text-xl font-bold mb-2">{s}</h3>
              <div className="h-1 w-0 bg-amber-400 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
