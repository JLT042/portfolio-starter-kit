"use client";

import React, { useState } from 'react';

export default function PortfolioPage() {
  const [lang, setLang] = useState('de');

  return (
    <main className="page bg-[#0d0d12] text-white selection:bg-[#95BF47] selection:text-black">
      {/* DEIN ORIGINAL CSS MIT SHOPIFY-GRÜN (BRAND-COLOR) */}
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
          --space-xs: .25rem; --space-sm: .5rem; --space-md: .75rem;
          --space-base: 1rem; --space-lg: 1.5rem; --space-xl: 2rem;
          --space-2xl: 3rem; --space-3xl: 4rem; --space-4xl: 6rem;
          --radius-sm: 3px; --radius-md: 6px; --radius-lg: 10px; --radius-xl: 16px; --radius-full: 9999px;
          --ease-out-quart: cubic-bezier(.25,1,.5,1);
          --ease-out-expo: cubic-bezier(.16,1,.3,1);
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
        .orb-brand-sm{width:25vw;height:25vw;max-width:280px;max-height:280px;background:oklch(82% 0.140 140/1);top:55%;left:55%;opacity:.06;animation:orbFloat 22s ease-in-out infinite reverse}
        
        nav{position:fixed;top:0;left:0;right:0;z-index:200;height:60px;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(var(--space-base),4vw,var(--space-lg));background:oklch(9% 0.008 260/.88);backdrop-filter:blur(16px) saturate(1.5);border-bottom:1px solid oklch(95% 0.006 260/.07)}
        .nav-logo{font-family:var(--font-heading);font-size:1rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--color-white);text-decoration:none}
        .nav-logo span{color:var(--color-brand-400)}
        .nav-links{display:flex;align-items:center;gap:var(--space-xl);list-style:none}
        .nav-links a{font-family:var(--font-body);font-size:.8125rem;font-weight:500;letter-spacing:.04em;color:var(--color-gray-300);text-decoration:none;transition:color 180ms var(--ease-out-quart)}
        .nav-links a:hover{color:var(--color-white)}
        .nav-right{display:flex;align-items:center;gap:var(--space-base)}
        .nav-cta{font-family:var(--font-body);font-size:.8125rem;font-weight:500;color:var(--color-space);background:var(--color-brand-400);border:none;padding:8px 18px;border-radius:var(--radius-md);text-decoration:none;transition:background-color 180ms,box-shadow 180ms,transform 100ms}
        .nav-cta:hover{background:var(--color-brand-500);box-shadow:0 0 20px oklch(75% 0.165 140/.22);transform:translateY(-1px)}
        .lang-switcher{display:flex;align-items:center;gap:2px;background:var(--color-graphite);border:1px solid var(--color-border);border-radius:var(--radius-md);padding:3px}
        .lang-btn{font-family:var(--font-mono);font-size:.625rem;font-weight:600;letter-spacing:.05em;color:var(--color-gray-400);background:transparent;border:none;padding:4px 7px;border-radius:4px;cursor:pointer;line-height:1}
        .lang-btn.active{color:var(--color-space);background:var(--color-brand-400)}

        .hero{min-height:100dvh;padding:60px clamp(var(--space-base),6vw,var(--space-3xl)) 0;display:flex;flex-direction:column;justify-content:center}
        .hero-inner{max-width:1280px;margin:0 auto;width:100%;padding:var(--space-3xl) 0 var(--space-2xl);display:grid;grid-template-columns:1fr 1fr;grid-template-areas:"text video" "strip strip" "ctas ctas" "tags tags";gap:var(--space-xl) var(--space-2xl);align-items:start}
        .hero-text{grid-area:text;display:flex;flex-direction:column;gap:var(--space-lg)}
        .hero-status{display:inline-flex;align-items:center;gap:var(--space-sm);padding:5px 12px;border-radius:var(--radius-full);border:1px solid var(--color-border-brand);background:oklch(75% 0.165 140/.06);width:fit-content;animation:fadeUp .5s var(--ease-out-expo) .15s both}
        .hero-status-dot{width:6px;height:6px;border-radius:50%;background:var(--color-success);box-shadow:0 0 6px oklch(65% 0.190 145/.6);animation:pulse 2.5s ease-in-out infinite}
        .hero-status-text{font-family:var(--font-mono);font-size:.6875rem;color:var(--color-brand-300);text-transform:uppercase}
        .hero-headline{font-family:var(--font-heading);font-size:clamp(3rem,5vw + .5rem,4.5rem);font-weight:700;line-height:1.05;color:var(--color-white);animation:fadeUp .6s var(--ease-out-expo) .25s both}
        .hero-headline em{font-style:normal;color:var(--color-brand-400)}
        .hero-sub{font-family:var(--font-body);font-size:clamp(.9375rem,1.2vw + .3rem,1.1rem);line-height:1.65;color:var(--color-gray-300);max-width:46ch;animation:fadeUp .6s var(--ease-out-expo) .35s both}
        .hero-evidence{grid-area:strip;display:flex;flex-wrap:wrap;gap:var(--space-base) var(--space-xl);align-items:center;padding:var(--space-lg) 0;border-top:1px solid var(--color-border-subtle);border-bottom:1px solid var(--color-border-subtle);animation:fadeUp .6s var(--ease-out-expo) .45s both}
        .evidence-item{display:flex;align-items:baseline;gap:var(--space-sm)}
        .evidence-value{font-family:var(--font-mono);font-size:1.375rem;font-weight:600;color:var(--color-brand-400);line-height:1}
        .evidence-label{font-family:var(--font-body);font-size:.8125rem;color:var(--color-gray-300)}
        .evidence-sep{width:1px;height:24px;background:var(--color-border)}
        .hero-ctas{grid-area:ctas;display:flex;flex-wrap:wrap;gap:var(--space-base);align-items:center;animation:fadeUp .6s var(--ease-out-expo) .55s both}
        .btn-primary{display:inline-flex;align-items:center;gap:var(--space-sm);padding:13px var(--space-xl);background:var(--color-brand-400);color:var(--color-space);border-radius:var(--radius-md);font-family:var(--font-body);font-size:.9375rem;font-weight:500;text-decoration:none;transition:all 180ms}
        .btn-primary:hover{background:var(--color-brand-500);box-shadow:0 0 24px oklch(75% 0.165 140/.25);transform:translateY(-1px)}
        .btn-ghost{display:inline-flex;align-items:center;gap:var(--space-sm);padding:13px var(--space-xl);background:transparent;color:var(--color-white);border:1px solid var(--color-border);border-radius:var(--radius-md);font-family:var(--font-body);font-size:.9375rem;text-decoration:none;transition:all 180ms}
        .btn-ghost:hover{border-color:var(--color-border-brand);background:oklch(75% 0.165 140/.06)}
        .hero-tags{grid-area:tags;display:flex;flex-wrap:wrap;gap:var(--space-sm);align-items:center;animation:fadeUp .5s var(--ease-out-expo) .65s both}
        .skill-tag{padding:4px 10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);background:oklch(95% 0.006 260/.04);font-family:var(--font-body);font-size:.75rem;color:var(--color-gray-300)}
        .skill-tag.tech{border-color:oklch(58% 0.200 265/.30);color:var(--color-indigo-300);background:oklch(58% 0.200 265/.06)}
        
        .video-col{grid-area:video;display:flex;flex-direction:column;gap:var(--space-base);padding-top:.5rem;animation:fadeUp .7s var(--ease-out-expo) .30s both}
        .video-card{position:relative;border-radius:var(--radius-xl);border:1px solid var(--color-border);background:var(--color-graphite);overflow:hidden;cursor:pointer;aspect-ratio:16/10;transition:all 220ms}
        .video-card:hover{border-color:var(--color-border-brand);box-shadow:0 0 40px oklch(75% 0.165 140/.14),0 12px 48px oklch(9% 0.008 260/.60);transform:translateY(-3px)}
        .video-chrome{position:absolute;top:0;left:0;right:0;height:36px;z-index:2;background:var(--color-slate);border-bottom:1px solid var(--color-border);display:flex;align-items:center;padding:0 var(--space-base);gap:var(--space-base)}
        .chrome-dots{display:flex;gap:6px}
        .chrome-dots span{width:10px;height:10px;border-radius:50%}
        .chrome-dots span:nth-child(1){background:oklch(60% 0.20 25/.7)}
        .chrome-dots span:nth-child(2){background:oklch(72% 0.18 75/.7)}
        .chrome-dots span:nth-child(3){background:oklch(65% 0.19 145/.7)}
        .chrome-url{flex:1;height:20px;border-radius:4px;background:var(--color-navy);border:1px solid var(--color-border);display:flex;align-items:center;padding:0 var(--space-sm);font-family:var(--font-mono);font-size:.625rem;color:var(--color-gray-400)}
        .video-inner{position:absolute;top:36px;left:0;right:0;bottom:0;overflow:hidden}
        .dash-header{padding:var(--space-sm) var(--space-base);border-bottom:1px solid var(--color-border);display:flex;align-items:center;gap:var(--space-base);background:var(--color-navy)}
        .dash-tab{font-family:var(--font-body);font-size:.6875rem;padding:4px 10px;border-radius:var(--radius-sm);color:var(--color-gray-400)}
        .dash-tab.active{color:var(--color-brand-400);background:oklch(75% 0.165 140/.10)}
        .dash-metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--color-border);border-bottom:1px solid var(--color-border)}
        .dash-metric{padding:var(--space-sm) var(--space-base);background:var(--color-graphite);display:flex;flex-direction:column;gap:2px}
        .dash-metric-label{font-family:var(--font-body);font-size:.5625rem;color:var(--color-gray-400);text-transform:uppercase}
        .dash-metric-value{font-family:var(--font-mono);font-size:.9375rem;font-weight:600;color:var(--color-white)}
        .dash-metric-value.positive{color:var(--color-success)}
        .dash-metric-value.brand-color{color:var(--color-brand-400)}
        .dash-chart{padding:var(--space-base);height:100%;display:flex;flex-direction:column;gap:var(--space-sm)}
        .chart-bars{flex:1;display:flex;align-items:flex-end;gap:4px;overflow:hidden}
        .bar-wrap{flex:1;display:flex;flex-direction:column;gap:3px}
        .bar{border-radius:2px 2px 0 0;min-height:3px}
        .bar-date{font-family:var(--font-mono);font-size:.4375rem;color:var(--color-gray-400);text-align:center}
        
        .cases-section{padding:var(--space-4xl) clamp(var(--space-base),6vw,var(--space-3xl));background:var(--color-space)}
        .cases-inner{max-width:1280px;margin:0 auto}
        .section-eyebrow{font-family:var(--font-mono);font-size:.6875rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--color-brand-400)}
        .section-headline{font-family:var(--font-heading);font-size:clamp(2rem,4vw + .5rem,3rem);font-weight:700;color:var(--color-white)}
        .case-card{display:grid;grid-template-columns:1fr 1fr;gap:var(--space-2xl);align-items:center;padding:var(--space-3xl) 0;border-top:1px solid var(--color-border-subtle)}
        .case-card:nth-child(even){direction:rtl}
        .case-card:nth-child(even) > *{direction:ltr}
        .case-number{font-family:var(--font-mono);font-size:.6875rem;color:var(--color-brand-400);text-transform:uppercase}
        .case-title{font-family:var(--font-heading);font-size:clamp(1.75rem,3vw,2.5rem);font-weight:700;color:var(--color-white);margin-top:0.5rem;margin-bottom:1rem}
        .case-tags{display:flex;flex-wrap:wrap;gap:var(--space-xs) var(--space-sm);margin-bottom:1rem}
        .case-tag{padding:3px 10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);font-family:var(--font-body);font-size:.75rem;color:var(--color-gray-300);background:oklch(95% 0.006 260/.04)}
        .case-tag.highlight{border-color:var(--color-border-brand);color:var(--color-brand-300);background:oklch(75% 0.165 140/.07)}
        .case-tag.tech{border-color:oklch(58% 0.200 265/.30);color:var(--color-indigo-300);background:oklch(58% 0.200 265/.06)}
        .case-desc{font-family:var(--font-body);font-size:.9375rem;line-height:1.7;color:var(--color-gray-300);max-width:48ch;margin-bottom:2rem}
        .case-result{display:inline-flex;align-items:center;gap:var(--space-lg);flex-wrap:wrap;margin-bottom:2rem}
        .result-kpi{display:flex;flex-direction:column;gap:2px}
        .result-value{font-family:var(--font-mono);font-size:1.5rem;font-weight:600;color:var(--color-brand-400)}
        .result-label{font-family:var(--font-body);font-size:.75rem;color:var(--color-gray-400)}
        .result-divider{width:1px;height:32px;background:var(--color-border)}
        .case-visual{border-radius:var(--radius-xl);border:1px solid var(--color-border);background:var(--color-graphite);overflow:hidden;aspect-ratio:4/3;position:relative;transition:all 220ms}
        .case-card:hover .case-visual{border-color:var(--color-border-brand);box-shadow:0 0 40px oklch(75% 0.165 140/.10),0 16px 48px oklch(9% 0.008 260/.50)}
        
        .mock-chrome{height:32px;background:var(--color-slate);border-bottom:1px solid var(--color-border);display:flex;align-items:center;padding:0 var(--space-base);gap:var(--space-sm)}
        .mock-dots{display:flex;gap:5px}
        .mock-dots span{width:8px;height:8px;border-radius:50%}
        .mock-dots span:nth-child(1){background:oklch(60% 0.20 25/.7)}
        .mock-dots span:nth-child(2){background:oklch(72% 0.18 75/.7)}
        .mock-dots span:nth-child(3){background:oklch(65% 0.19 145/.7)}
        .mock-url{flex:1;height:17px;border-radius:3px;background:var(--color-navy);border:1px solid var(--color-border);display:flex;align-items:center;padding:0 var(--space-sm);font-family:var(--font-mono);font-size:.5625rem;color:var(--color-gray-400)}
        
        .services-strip{border-top:1px solid var(--color-border-subtle);padding:var(--space-3xl) clamp(var(--space-base),6vw,var(--space-3xl));background:var(--color-navy)}
        .services-inner{max-width:1280px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:var(--space-xl)}
        .service-card{padding:var(--space-xl);border-radius:var(--radius-lg);border:1px solid var(--color-border);background:var(--color-graphite);transition:all 200ms}
        .service-card:hover{border-color:var(--color-border-brand);box-shadow:0 0 20px oklch(75% 0.165 140/.12);transform:translateY(-2px)}
        .service-number{font-family:var(--font-mono);font-size:.6875rem;color:var(--color-brand-400);margin-bottom:var(--space-lg);display:block}
        .service-title{font-family:var(--font-heading);font-size:1.375rem;font-weight:700;color:var(--color-white);margin-bottom:var(--space-sm)}
        .service-desc{font-family:var(--font-body);font-size:.875rem;line-height:1.65;color:var(--color-gray-300)}
        
        .contact-section{padding:var(--space-4xl) clamp(var(--space-base),6vw,var(--space-3xl));background:var(--color-space);border-top:1px solid var(--color-border-subtle)}
        .contact-inner{max-width:640px;margin:0 auto;text-align:center;display:flex;flex-direction:column;align-items:center;gap:var(--space-xl)}
        
        footer{padding:var(--space-xl) clamp(var(--space-base),6vw,var(--space-3xl));background:var(--color-navy);border-top:1px solid var(--color-border-subtle)}
        .footer-inner{max-width:1280px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:var(--space-base)}
        
        @media(max-width:900px){
          .hero-inner{grid-template-columns:1fr;grid-template-areas:"text" "video" "strip" "ctas" "tags"}
          .case-card{grid-template-columns:1fr;direction:ltr !important}
          .case-card > *{direction:ltr !important}
        }
      `}} />

      {/* BACKGROUND ORBS */}
      <div className="orb-field" aria-hidden="true">
        <div className="orb orb-brand"></div>
        <div className="orb orb-indigo"></div>
        <div className="orb orb-brand-sm"></div>
      </div>

      {/* NAV */}
      <nav>
        <a href="/" className="nav-logo">JL<span>.</span>T</a>
        <ul className="nav-links hidden md:flex">
          <li><a href="#projekte">Projekte</a></li>
          <li><a href="#leistungen">Leistungen</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
        </ul>
        <div className="nav-right">
          <div className="lang-switcher">
            <button className={`lang-btn ${lang === 'de' ? 'active' : ''}`} onClick={() => setLang('de')}>DE</button>
            <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
          </div>
          <a href="mailto:jose@tubebridge.de" className="nav-cta">Kontakt aufnehmen</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-status">
              <div className="hero-status-dot"></div>
              <span className="hero-status-text">Verfügbar für Projekte — DACH & remote</span>
            </div>
            <h1 className="hero-headline">Performance.<br/>Die<br/><em>konvertiert.</em></h1>
            <p className="hero-sub">Senior Performance Marketer und Shopify-Entwickler — von der Strategie bis zum Checkout. €30K/Monat Ad-Budget eigenverantwortlich gesteuert über Google, Meta und TikTok für D2C- und B2B-Marken im DACH-Raum.</p>
          </div>
          <div className="video-col">
            <div className="video-card">
              <div className="video-chrome">
                <div className="chrome-dots"><span></span><span></span><span></span></div>
                <div className="chrome-url">ads.google.com — Statement Clothing GmbH</div>
              </div>
              <div className="video-inner">
                <div className="dash-header">
                  <span className="dash-tab active">Kampagnen</span>
                  <span className="dash-tab">Anzeigengruppen</span>
                  <span className="dash-tab">Keywords</span>
                </div>
                <div className="dash-metrics">
                  <div className="dash-metric"><span className="dash-metric-label">ROAS</span><span className="dash-metric-value brand-color">13,2×</span></div>
                  <div className="dash-metric"><span className="dash-metric-label">CPA</span><span className="dash-metric-value positive">€8,94</span></div>
                  <div className="dash-metric"><span className="dash-metric-label">Conv.-Rate</span><span className="dash-metric-value positive">4,8%</span></div>
                  <div className="dash-metric"><span className="dash-metric-label">Budget</span><span className="dash-metric-value">€28,4K</span></div>
                </div>
                <div className="dash-chart">
                  <span className="text-[11px] text-gray-400 font-medium">Conversions — letzte 30 Tage</span>
                  <div className="chart-bars">
                    <div className="bar-wrap"><div className="bar" style={{height:'28%', background:'oklch(58% 0.200 265/.5)'}}></div><div className="bar-date">1</div></div>
                    <div className="bar-wrap"><div className="bar" style={{height:'34%', background:'oklch(58% 0.200 265/.5)'}}></div><div className="bar-date">3</div></div>
                    <div className="bar-wrap"><div className="bar" style={{height:'30%', background:'oklch(58% 0.200 265/.5)'}}></div><div className="bar-date">5</div></div>
                    <div className="bar-wrap"><div className="bar" style={{height:'42%', background:'oklch(58% 0.200 265/.5)'}}></div><div className="bar-date">7</div></div>
                    <div className="bar-wrap"><div className="bar" style={{height:'52%', background:'oklch(62% 0.195 300/.6)'}}></div><div className="bar-date">11</div></div>
                    <div className="bar-wrap"><div className="bar" style={{height:'64%', background:'oklch(68% 0.185 100/.6)'}}></div><div className="bar-date">17</div></div>
                    <div className="bar-wrap"><div className="bar" style={{height:'80%', background:'oklch(75% 0.165 140/.7)'}}></div><div className="bar-date">23</div></div>
                    <div className="bar-wrap"><div className="bar" style={{height:'94%', background:'oklch(75% 0.165 140/1)'}}></div><div className="bar-date">29</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-evidence">
            <div className="evidence-item"><span className="evidence-value">13×</span><span className="evidence-label">ROAS, Fashion D2C</span></div>
            <div className="evidence-sep"></div>
            <div className="evidence-item"><span className="evidence-value">€9</span><span className="evidence-label">CPA bei €80 Warenkorbwert</span></div>
            <div className="evidence-sep"></div>
            <div className="evidence-item"><span className="evidence-value">€40/h</span><span className="evidence-label">Stundensatz</span></div>
          </div>
          <div className="hero-ctas">
            <a href="#projekte" className="btn-primary">Case Studies ansehen</a>
            <a href="mailto:jose@tubebridge.de" className="btn-ghost">jose@tubebridge.de</a>
          </div>
          <div className="hero-tags">
            <span className="skill-tag">Google Ads</span>
            <span className="skill-tag">Meta Ads</span>
            <span className="skill-tag tech">Shopify Liquid</span>
            <span className="skill-tag">CRO</span>
            <span className="skill-tag tech">KI-Workflows</span>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="cases-section" id="projekte">
        <div className="cases-inner">
          <header className="mb-16">
            <span className="section-eyebrow">Ausgewählte Projekte</span>
            <h2 className="section-headline">Case Studies</h2>
          </header>

          <article className="case-card">
            <div>
              <span className="case-number">01 — Performance Marketing</span>
              <h3 className="case-title">Statement Clothing GmbH</h3>
              <div className="case-tags">
                <span className="case-tag highlight">Google Ads</span>
                <span className="case-tag">D2C Fashion</span>
                <span className="case-tag tech">GA4 / GTM</span>
              </div>
              <p className="case-desc">Vollständige Google-Ads-Strategie für eine Fashion-D2C-Brand im DACH-Markt. Budget von unter €5K auf €30K/Monat skaliert — ROAS konstant über 13 bei einem CPA von €9 bei €80 Ø-Warenkorbwert.</p>
              <div className="case-result">
                <div className="result-kpi"><span className="result-value">13×</span><span className="result-label">ROAS</span></div>
                <div className="result-divider"></div>
                <div className="result-kpi"><span className="result-value">€9</span><span className="result-label">CPA</span></div>
              </div>
            </div>
            <div className="case-visual">
              <div className="flex flex-col h-full">
                <div className="mock-chrome"><div className="mock-dots"><span></span><span></span><span></span></div><div className="mock-url">ads.google.com — Statement</div></div>
                <div className="flex-1 p-4 bg-[#0d0d12] flex flex-col gap-2">
                  <div className="grid grid-cols-4 gap-1 border-b border-white/10 pb-2 text-[10px] text-gray-400 uppercase tracking-wider">
                    <span>Kampagne</span><span>Budget</span><span>ROAS</span><span>CPA</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-[11px] font-mono">
                    <span className="text-white">PMax — Jacken</span><span className="text-[#95BF47]">€9.200</span><span className="text-[#95BF47]">15,1×</span><span className="text-green-500">€7,40</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-[11px] font-mono">
                    <span className="text-white">Shopping — Hoodies</span><span className="text-[#95BF47]">€7.800</span><span className="text-[#95BF47]">12,4×</span><span className="text-green-500">€9,10</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="case-card">
            <div>
              <span className="case-number">02 — Shopify Dev & CRO</span>
              <h3 className="case-title">Die Barista Kaffee Hameln</h3>
              <div className="case-tags">
                <span className="case-tag highlight">Shopify Liquid</span>
                <span className="case-tag">CRO</span>
              </div>
              <p className="case-desc">Shopify-Shop von Grund auf aufgebaut — Custom Liquid-Theme entwickelt, Produktstruktur und Checkout-Flow optimiert. Lokale Google-Ads-Kampagnen aufgesetzt.</p>
              <div className="case-result">
                <div className="result-kpi"><span className="result-value">Shopify</span><span className="result-label">Custom Dev</span></div>
                <div className="result-divider"></div>
                <div className="result-kpi"><span className="result-value">Aktiv</span><span className="result-label">seit 09/2025</span></div>
              </div>
            </div>
            <div className="case-visual">
              <div className="flex flex-col h-full">
                <div className="mock-chrome"><div className="mock-dots"><span></span><span></span><span></span></div><div className="mock-url">diebarista-hameln.de</div></div>
                <div className="flex-1 bg-[#151312] p-4 flex flex-col gap-2">
                  <div className="bg-gradient-to-r from-[#201d1c] to-[#2a2624] p-4 rounded-lg border border-white/5">
                    <span className="text-[9px] text-[#b49885] uppercase tracking-widest font-mono">Neu im Shop</span>
                    <h4 className="text-white text-sm font-bold mt-1">Specialty Coffee aus aller Welt</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="bg-[#1a1817] border border-white/5 p-3 rounded-md flex flex-col items-center justify-center text-2xl">☕</div>
                    <div className="bg-[#1a1817] border border-white/5 p-3 rounded-md flex flex-col items-center justify-center text-2xl">🫘</div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section className="services-strip" id="leistungen">
        <div className="services-inner">
          <article className="service-card">
            <span className="service-number">01 — Performance</span>
            <h2 className="service-title">Paid Media & Wachstum</h2>
            <p className="service-desc">Google Ads, Meta, TikTok, LinkedIn. Full-Funnel-Strategie, Zielgruppen-Architektur, ROAS-Skalierung. Von €800 bis €30K/Monat eigenverantwortlich gesteuert.</p>
          </article>
          <article className="service-card">
            <span className="service-number">02 — Entwicklung</span>
            <h2 className="service-title">Shopify & CRO</h2>
            <p className="service-desc">Custom Liquid- und Theme-Entwicklung, Conversion-Rate-Optimierung, UX-Verbesserungen auf Basis von Clarity-Heatmaps und A/B-Testdaten.</p>
          </article>
          <article className="service-card">
            <span className="service-number">03 — Sichtbarkeit</span>
            <h2 className="service-title">SEO, GEO & KI</h2>
            <p className="service-desc">Technisches SEO, Generative Engine Optimization für LLM-Zitierungen (ChatGPT, Perplexity), JSON-LD-Schema, KI-Workflow-Automatisierung für Content-Skalierung.</p>
          </article>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="contact-section" id="kontakt">
        <div className="contact-inner">
          <span className="section-eyebrow">Lass uns reden</span>
          <h2 className="section-headline mt-4">Projekt in Planung?</h2>
          <p className="text-gray-300 mt-4 mb-8">Ob Google Ads Skalierung, Shopify-Entwicklung oder SEO/GEO-Strategie — ich helfe DACH-Brands dabei, messbare Ergebnisse zu erzielen. Remote, flexibel, ab €40/h.</p>
          <div className="flex gap-4">
            <a href="mailto:jose@tubebridge.de" className="btn-primary">jose@tubebridge.de</a>
            <a href="https://linkedin.com/in/jose-l-treff-033224251" className="btn-ghost">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <a href="/" className="nav-logo">JL<span>.</span>T</a>
          <span className="text-xs text-gray-500">© 2026 Jose L. Treff — TubeBridge GmbH</span>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="mailto:jose@tubebridge.de" className="hover:text-white">E-Mail</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
