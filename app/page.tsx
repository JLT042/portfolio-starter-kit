"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import de from '@/content/de.json';
import en from '@/content/en.json';
import es from '@/content/es.json';
import { BentoServices } from '@/components/ui/bento-services';
 
// ─────────────────────────────────────────────────────────────
// JOSE L. TREFF — Portfolio Page
// Next.js App Router · Tailwind · 21st.dev ready
// ─────────────────────────────────────────────────────────────
 
export default function PortfolioPage() {
  const [lang, setLang] = useState<'de' | 'en' | 'es'>('de');
 
  /* ══════════════════════════════════════════════════
     ÜBERSETZUNGEN — Texte in content/de.json etc. bearbeiten
     ══════════════════════════════════════════════════ */
  const T = {
    de: de as typeof de,
    en: en as typeof de,
    es: es as typeof de,
  };
  const t = (key: keyof typeof de): string => (T[lang][key] ?? de[key]) as string;


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
          --warning: oklch(78% 0.170 65);
          --error:   oklch(58% 0.220 25);
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
        .case-period { font-family:var(--fm);font-size:.5625rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--gray4);margin-top:-.5rem; }
        .case-lever { display:flex;flex-direction:column;gap:.375rem;padding:.875rem 1.125rem;border-radius:8px;border-left:2px solid oklch(75% 0.165 140 / 0.45);background:oklch(75% 0.165 140 / 0.04); }
        .case-lever-label { font-family:var(--fm);font-size:.5625rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--brand); }
        .case-lever-text { font-family:var(--fb);font-size:.875rem;line-height:1.65;color:var(--gray3); }

        .case-visual { border-radius:20px;border:1px solid var(--border);background:var(--graphite);overflow:hidden;aspect-ratio:4/3;position:relative;transition:border-color 220ms var(--eq),box-shadow 220ms var(--eq),transform 300ms ease-out;box-shadow:0 24px 56px oklch(0 0 0 / .45),0 0 32px oklch(75% 0.165 140 / .03); }
        .case-visual::after { content:'';position:absolute;inset:0;background:linear-gradient(to top,oklch(75% 0.165 140 / 0.05) 0%,transparent 30%);pointer-events:none;z-index:2; }
        .case-card:hover .case-visual { border-color:var(--brand-bd);box-shadow:0 0 40px oklch(75% 0.165 140/.10),0 24px 56px oklch(0 0 0 / .55);transform:translateY(-3px); }
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
 
        /* ── CONTACT ── */
        .svc-cta { padding:2rem clamp(1rem,6vw,4rem) 3rem;background:oklch(9% 0.008 260);position:relative;z-index:1; }
        .svc-cta-inner { max-width:1280px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:1.5rem;padding:2rem 2.5rem;background:var(--navy);border:1px solid var(--border);border-radius:20px;box-shadow:0 0 80px oklch(75% 0.165 140 / 0.06); }
        .svc-cta-text { display:flex;flex-direction:column;gap:.375rem; }
        .svc-cta-headline { font-family:var(--fh);font-size:clamp(1.25rem,2vw + .25rem,1.75rem);font-weight:700;letter-spacing:-.02em;line-height:1.1;color:var(--white); }
        .svc-cta-actions { display:flex;flex-wrap:wrap;gap:.75rem;flex-shrink:0; }
        @media (max-width:640px) {
          .svc-cta-inner { flex-direction:column;align-items:stretch;padding:1.5rem 1.25rem; }
          .svc-cta-actions { flex-direction:column; }
          .svc-cta-actions .btn-primary,.svc-cta-actions .btn-ghost { justify-content:center; }
        }
        .jlt-contact { padding:6rem clamp(1rem,6vw,4rem);background:var(--space);border-top:1px solid var(--border-s);position:relative;z-index:1; }
        .jlt-contact-inner { max-width:640px;margin:0 auto;text-align:center;display:flex;flex-direction:column;align-items:center;gap:2rem; }
        .ct-eyebrow { font-family:var(--fm);font-size:.6875rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--brand); }
        .ct-headline { font-family:var(--fh);font-size:clamp(2rem,4vw + .5rem,3rem);font-weight:700;letter-spacing:-.02em;line-height:1.05;color:var(--white); }
        .ct-sub { font-family:var(--fb);font-size:1rem;line-height:1.65;color:var(--gray3); }
        .ct-ctas { display:flex;flex-wrap:wrap;gap:1rem;justify-content:center; }
        .ct-meta { display:flex;align-items:center;gap:1rem;flex-wrap:wrap;justify-content:center; }
        .ct-meta-item { display:flex;align-items:center;gap:.5rem;font-family:var(--fm);font-size:.75rem;color:var(--gray4); }
        .ct-dot { width:4px;height:4px;border-radius:50%;background:var(--success); }
 
        /* ── LOGO MARQUEE ── */
        @keyframes logoScroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .jlt-logos { padding:3.5rem 0;background:var(--navy);border-top:1px solid var(--border-s);border-bottom:1px solid var(--border-s);position:relative;z-index:1;overflow:hidden; }
        .logos-eyebrow-wrap { padding:0 clamp(1rem,6vw,4rem);margin-bottom:2.5rem;text-align:center; }
        .logos-eyebrow { font-family:var(--fb);font-size:1rem;font-weight:500;color:var(--gray3); }
        .logos-marquee { overflow:hidden;width:100%;-webkit-mask-image:linear-gradient(to right,transparent,black 10%,black 90%,transparent);mask-image:linear-gradient(to right,transparent,black 10%,black 90%,transparent); }
        .logos-track { display:flex;align-items:center;gap:5rem;width:max-content;animation:logoScroll 24s linear infinite; }
        .logos-track:hover { animation-play-state:paused; }
        .logo-img { width:auto;filter:brightness(0) invert(1);opacity:.5;transition:opacity 220ms;flex-shrink:0; }
        .logo-img:hover { opacity:1; }

        /* ── AUDIENCE ── */
        .jlt-audience { padding:5rem clamp(1rem,6vw,4rem);background:var(--space);position:relative;z-index:1; }
        .jlt-audience-inner { max-width:1280px;margin:0 auto; }
        .aud-hdr { margin-bottom:3rem;display:flex;flex-direction:column;gap:.75rem; }
        .aud-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem; }
        @media (max-width:900px) { .aud-grid { grid-template-columns:1fr; } }
        @media (min-width:640px) and (max-width:900px) { .aud-grid { grid-template-columns:repeat(2,1fr); } }
        .aud-card {
          position:relative;display:flex;flex-direction:column;gap:1.25rem;
          padding:2rem;border-radius:20px;
          background:var(--navy);border:1px solid var(--border);
          cursor:default;
          transition:transform 300ms ease-out,box-shadow 300ms ease-out,border-color 300ms ease;
        }
        .aud-card:hover { transform:translateY(-6px);box-shadow:0 24px 64px oklch(0 0 0 / .55);border-color:oklch(75% 0.165 140 / 0.3); }
        .aud-card:hover .aud-border { opacity:1; }
        .aud-border {
          position:absolute;inset:0;border-radius:20px;
          border:1px solid oklch(75% 0.165 140 / 0.55);
          opacity:0;transition:opacity 300ms ease;pointer-events:none;z-index:2;
          mask-image:radial-gradient(220px 220px at var(--mx,50%) var(--my,50%),black,transparent);
          -webkit-mask-image:radial-gradient(220px 220px at var(--mx,50%) var(--my,50%),black,transparent);
        }
        .aud-icon { width:44px;height:44px;color:var(--brand);flex-shrink:0; }
        .aud-title { font-family:var(--fh);font-size:1.375rem;font-weight:700;letter-spacing:-.02em;line-height:1.1;color:var(--white); }
        .aud-desc { font-family:var(--fb);font-size:.9375rem;line-height:1.65;color:var(--gray3);flex:1; }
        .aud-meta { font-family:var(--fm);font-size:.625rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--gray4);line-height:1.6;border-top:1px solid var(--border-s);padding-top:1rem; }
        .aud-cta { display:inline-flex;align-items:center;gap:.35rem;font-family:var(--fb);font-size:.875rem;font-weight:500;color:var(--brand);text-decoration:none;transition:gap 150ms ease; }
        .aud-cta:hover { gap:.6rem; }
        /* ── TESTIMONIALS ── */
        .jlt-testi { padding:6rem clamp(1rem,6vw,4rem);background:var(--space);position:relative;z-index:1; }
        .jlt-testi-inner { max-width:1280px;margin:0 auto;display:flex;flex-direction:column;gap:3rem; }
        .testi-hdr { display:flex;flex-direction:column;gap:.75rem; }
        .testi-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem; }
        .testi-card { position:relative;padding:2rem;border-radius:20px;background:oklch(12% 0.010 260);border:1px solid oklch(24% 0.016 260);box-shadow:0 12px 48px oklch(0 0 0/.4);display:flex;flex-direction:column;gap:1.5rem;transition:transform 300ms ease-out,box-shadow 300ms ease-out; }
        .testi-card:hover { transform:translateY(-6px);box-shadow:0 24px 64px oklch(0 0 0/.55); }
        .tc-border { position:absolute;inset:0;border-radius:20px;border:1px solid oklch(75% 0.165 140 / 0.6);opacity:0;transition:opacity 300ms ease;pointer-events:none;z-index:2;mask-image:radial-gradient(220px 220px at var(--mx,50%) var(--my,50%),black,transparent);-webkit-mask-image:radial-gradient(220px 220px at var(--mx,50%) var(--my,50%),black,transparent); }
        .testi-card:hover .tc-border { opacity:1; }
        .tc-surface { position:absolute;inset:0;border-radius:20px;background:radial-gradient(420px circle at var(--mx,50%) var(--my,50%),oklch(75% 0.165 140 / 0.07),transparent 55%);opacity:0;transition:opacity 350ms ease;pointer-events:none;z-index:5; }
        .testi-card:hover .tc-surface { opacity:1; }
        .testi-quote { font-family:var(--fb);font-size:.9375rem;line-height:1.7;color:var(--gray3);flex:1;position:relative;z-index:3; }
        .testi-quote::before { content:'"';color:var(--brand);font-family:var(--fh);font-size:2rem;line-height:0;vertical-align:-.5rem;margin-right:.25rem; }
        .testi-author { display:flex;flex-direction:column;gap:2px;border-top:1px solid var(--border-s);padding-top:1rem;position:relative;z-index:3; }
        .testi-name { font-family:var(--fb);font-size:.875rem;font-weight:600;color:var(--white); }
        .testi-role { font-family:var(--fm);font-size:.6875rem;color:var(--gray4);letter-spacing:.04em; }

        /* ── GEO SPOTLIGHT ── */
        .jlt-geo { padding:7rem clamp(1rem,6vw,4rem);background:var(--navy);border-top:1px solid var(--border-s);position:relative;z-index:1;overflow:hidden; }
        .jlt-geo::before { content:'';position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 100% 50%,oklch(75% 0.165 140/.07),transparent 60%),radial-gradient(ellipse 40% 50% at 0% 80%,oklch(68% 0.165 265/.06),transparent 50%);pointer-events:none; }
        .jlt-geo-inner { max-width:1280px;margin:0 auto;position:relative;display:flex;flex-direction:column;gap:5rem; }
        /* top: heading block */
        .geo-hdr { display:flex;flex-direction:column;gap:1.25rem;max-width:820px; }
        .geo-stat-bar { display:inline-flex;align-items:center;gap:.625rem;padding:.5rem 1rem;border-radius:999px;border:1px solid oklch(75% 0.165 140 / 0.25);background:oklch(75% 0.165 140 / 0.06);width:fit-content; }
        .geo-stat-dot { width:6px;height:6px;border-radius:50%;background:var(--brand);flex-shrink:0; }
        .geo-stat-text { font-family:var(--fm);font-size:.6875rem;font-weight:600;letter-spacing:.08em;color:var(--brand); }
        .geo-sub2 { font-family:var(--fh);font-size:clamp(1.1rem,2vw,1.5rem);font-weight:600;letter-spacing:-.01em;color:var(--gray3);line-height:1.3; }
        .geo-sub2 strong { color:var(--white); }
        /* middle: pillars + proof */
        .geo-mid { display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:start; }
        @media(max-width:900px) { .geo-mid { grid-template-columns:1fr; } }
        .geo-pillars { display:flex;flex-direction:column;gap:.875rem; }
        .geo-pillar { display:flex;gap:1rem;align-items:flex-start;padding:1.25rem;border-radius:12px;border:1px solid var(--border);background:oklch(95% 0.006 260/.02);transition:border-color 200ms ease; }
        .geo-pillar:hover { border-color:oklch(75% 0.165 140 / 0.25); }
        .geo-pillar-icon { width:36px;height:36px;border-radius:8px;background:oklch(75% 0.165 140 / 0.10);border:1px solid oklch(75% 0.165 140 / 0.20);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--brand); }
        .geo-pillar-text { display:flex;flex-direction:column;gap:.25rem; }
        .geo-pillar-title { font-family:var(--fb);font-size:.9375rem;font-weight:600;color:var(--white);line-height:1.2; }
        .geo-pillar-desc { font-family:var(--fb);font-size:.8125rem;line-height:1.6;color:var(--gray3); }
        /* proof mockup */
        .geo-proof-wrap { display:flex;flex-direction:column;gap:.875rem; }
        .geo-proof-label { font-family:var(--fm);font-size:.625rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--brand); }
        .geo-chat { border-radius:16px;border:1px solid var(--border);background:var(--graphite);overflow:hidden;box-shadow:0 24px 64px oklch(0 0 0 / .45),0 0 0 1px oklch(95% 0.006 260/.05); }
        .geo-chat-bar { background:oklch(14% 0.010 260);border-bottom:1px solid var(--border);padding:.6rem 1rem;display:flex;align-items:center;gap:.75rem; }
        .geo-chat-logo { font-family:var(--fh);font-size:.75rem;font-weight:700;letter-spacing:.06em;color:var(--white);opacity:.9; }
        .geo-chat-search { flex:1;background:oklch(19% 0.014 260);border:1px solid var(--border);border-radius:6px;padding:.3rem .75rem;font-family:var(--fm);font-size:.5625rem;color:var(--gray3);display:flex;align-items:center;gap:.4rem; }
        .geo-chat-body { padding:1.25rem; }
        .geo-chat-query { font-family:var(--fm);font-size:.5625rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--gray4);margin-bottom:.875rem; }
        .geo-chat-answer { font-family:var(--fb);font-size:.8125rem;line-height:1.7;color:oklch(82% 0.006 260); }
        .geo-chat-cite { background:oklch(75% 0.165 140 / 0.12);border:1px solid oklch(75% 0.165 140 / 0.25);border-radius:4px;padding:1px 5px;font-weight:600;color:oklch(82% 0.150 140);text-decoration:none;font-family:var(--fm);font-size:.6875rem; }
        .geo-chat-sources { display:flex;flex-wrap:wrap;gap:.375rem;margin-top:1rem;padding-top:.875rem;border-top:1px solid var(--border-s); }
        .geo-src-chip { display:flex;align-items:center;gap:.35rem;padding:4px 9px;border-radius:6px;background:oklch(19% 0.014 260);border:1px solid var(--border);font-family:var(--fm);font-size:.5rem;color:var(--gray4); }
        .geo-src-chip.primary { border-color:oklch(75% 0.165 140 / 0.30);color:oklch(75% 0.165 140);background:oklch(75% 0.165 140 / 0.06); }
        .geo-src-num { width:14px;height:14px;border-radius:3px;background:oklch(75% 0.165 140 / 0.15);display:flex;align-items:center;justify-content:center;font-size:.4375rem;font-weight:700;color:var(--brand); }
        /* audit CTA */
        .geo-audit { display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1.5rem;padding:2rem 2.5rem;border-radius:20px;border:1px solid oklch(75% 0.165 140 / 0.25);background:oklch(75% 0.165 140 / 0.05);box-shadow:0 0 60px oklch(75% 0.165 140 / 0.06); }
        .geo-audit-q { font-family:var(--fh);font-size:clamp(1.1rem,2vw,1.5rem);font-weight:700;letter-spacing:-.01em;color:var(--white);max-width:48ch; }
        @media(max-width:640px) { .geo-audit { flex-direction:column;align-items:stretch;padding:1.5rem 1.25rem; } }

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
        .about-skills { display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.25rem; }
        @media(max-width:640px) { .jlt-about-inner { grid-template-columns:1fr; } .about-left { position:static; } }

        /* ── PRICING ── */
        .jlt-pricing { padding:6rem clamp(1rem,6vw,4rem);background:oklch(10.5% 0.009 260);border-top:1px solid var(--border-s);position:relative;z-index:1; }
        .jlt-pricing-inner { max-width:960px;margin:0 auto;display:flex;flex-direction:column;gap:3rem; }
        .pricing-hdr { display:flex;flex-direction:column;gap:.75rem; }
        .pricing-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem; }
        .pricing-card { background:var(--navy);border:1px solid var(--border);border-radius:16px;padding:1.75rem;display:flex;flex-direction:column;gap:.75rem;transition:border-color 250ms,transform 250ms; }
        .pricing-card:hover { border-color:oklch(75% 0.165 140 / 0.35);transform:translateY(-4px); }
        .pricing-term { font-family:var(--fm);font-size:.625rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--brand);margin-bottom:.1rem; }
        .pricing-name { font-family:var(--fh);font-size:clamp(1.1rem,2vw + .2rem,1.35rem);font-weight:700;letter-spacing:-.02em;color:var(--white);line-height:1.1; }
        .pricing-desc { font-family:var(--fb);font-size:.9375rem;line-height:1.65;color:var(--gray3);flex:1; }
        .pricing-foot { display:flex;flex-wrap:wrap;align-items:center;gap:1.25rem;padding-top:1.5rem;border-top:1px solid var(--border-s); }
        .pricing-note { font-family:var(--fm);font-size:.6875rem;font-weight:400;color:var(--gray4);letter-spacing:.04em;font-style:italic; }
        @media(max-width:768px) { .pricing-grid { grid-template-columns:1fr; } }

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
              style={{ position: 'absolute', left: '50%', top: 0, width: 200, height: 200, marginLeft: -100, borderRadius: 20, background: 'var(--navy)', border: '1px solid var(--border)', padding: 16, boxShadow: '0 12px 48px oklch(0 0 0 / 0.5), 0 0 0 1px oklch(95% 0.006 260 / 0.06)' }}
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } } }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
            >
              <img src="/images/logos/shopify.png" alt="Shopify" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </motion.div>

            {/* Google Ads — medium, right */}
            <motion.div
              style={{ position: 'absolute', right: 0, top: '26%', width: 160, height: 160, borderRadius: 20, background: 'var(--navy)', border: '1px solid var(--border)', padding: 16, boxShadow: '0 12px 48px oklch(0 0 0 / 0.5), 0 0 0 1px oklch(95% 0.006 260 / 0.06)' }}
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } } }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
            >
              <img src="/images/logos/google-ads.png" alt="Google Ads" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </motion.div>

            {/* Meta — medium, left-center */}
            <motion.div
              style={{ position: 'absolute', left: 0, top: '42%', width: 148, height: 148, borderRadius: 20, background: 'var(--navy)', border: '1px solid var(--border)', padding: 16, boxShadow: '0 12px 48px oklch(0 0 0 / 0.5), 0 0 0 1px oklch(95% 0.006 260 / 0.06)' }}
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } } }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
            >
              <img src="/images/logos/meta.png" alt="Meta" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </motion.div>

            {/* TikTok — small, bottom-right (hidden on mobile to avoid overlap) */}
            <motion.div
              className="hidden md:block"
              style={{ position: 'absolute', right: 24, bottom: 0, width: 124, height: 124, borderRadius: 20, background: 'var(--navy)', border: '1px solid var(--border)', padding: 16, boxShadow: '0 12px 48px oklch(0 0 0 / 0.5), 0 0 0 1px oklch(95% 0.006 260 / 0.06)' }}
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } } }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            >
              <img src="/images/logos/tiktok.png" alt="TikTok" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </motion.div>

            {/* GTM / GA4 — small, bottom-center */}
            <motion.div
              style={{ position: 'absolute', left: '36%', bottom: 12, width: 124, height: 124, borderRadius: 20, background: 'var(--navy)', border: '1px solid var(--border)', padding: 16, boxShadow: '0 12px 48px oklch(0 0 0 / 0.5), 0 0 0 1px oklch(95% 0.006 260 / 0.06)' }}
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } } }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2.1 }}
            >
              <img src="/images/logos/gtm.png" alt="GTM / GA4" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </motion.div>

          </motion.div>


          {/* EVIDENCE STRIP */}
          <div className="jlt-hero-evidence" role="list">
            <div className="ev-item" role="listitem"><span className="ev-val">{t('hero_ev1_val')}</span><span className="ev-label">{t('hero_ev1')}</span></div>
            <div className="ev-sep" aria-hidden="true" />
            <div className="ev-item" role="listitem"><span className="ev-val">{t('hero_ev2_val')}</span><span className="ev-label">{t('hero_ev2')}</span></div>
            <div className="ev-sep" aria-hidden="true" />
            <div className="ev-item" role="listitem"><span className="ev-val">{t('hero_ev3_val')}</span><span className="ev-label">{t('hero_ev3')}</span></div>
            <div className="ev-sep" aria-hidden="true" />
            <div className="ev-item" role="listitem"><span className="ev-val">{t('hero_ev4_val')}</span><span className="ev-label">{t('hero_ev4')}</span></div>
          </div>
 
          {/* CTAs */}
          <div className="jlt-hero-ctas">
            <a href="https://calendly.com/jose-treff/15min" target="_blank" rel="noopener" className="btn-primary">{t('hero_cta1')} <ArrowRight /></a>
            <a href="#projekte" className="btn-ghost">{t('hero_cta2')} <ArrowRight /></a>
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
 
      {/* ── PLATFORM LOGO MARQUEE ────────────────────── */}
      <section className="jlt-logos" aria-label={t('logos_eyebrow')}>
        <div className="logos-eyebrow-wrap">
          <p className="logos-eyebrow">{t('logos_eyebrow')}</p>
        </div>
        <div className="logos-marquee">
          <div className="logos-track">
            {Array.from({ length: 4 }, (_, set) =>
              [
                { src: '/images/logos/shopify.png',    alt: 'Shopify',            h: 30 },
                { src: '/images/logos/google-ads.png', alt: 'Google Ads',         h: 26 },
                { src: '/images/logos/meta.png',       alt: 'Meta',               h: 22 },
                { src: '/images/logos/tiktok.png',     alt: 'TikTok',             h: 22 },
                { src: '/images/logos/gtm.png',        alt: 'Google Tag Manager', h: 26 },
              ].map(l => (
                <img
                  key={`${set}-${l.src}`}
                  className="logo-img"
                  src={l.src}
                  alt={set === 0 ? l.alt : ''}
                  aria-hidden={set > 0 ? 'true' : undefined}
                  style={{ height: l.h }}
                />
              ))
            )}
          </div>
        </div>
      </section>

      {/* ── FÜR WEN ICH ARBEITE ─────────────────────── */}
      <section className="jlt-audience">
        <div className="jlt-audience-inner">
          <header className="aud-hdr">
            <span className="eyebrow">{t('aud_eyebrow')}</span>
            <h2 className="sec-h">{t('aud_heading')}</h2>
          </header>
          <div className="aud-grid">
            {[
              {
                icon: (
                  <svg className="aud-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M6 8h32l-12 14v12l-8-4V22Z" />
                    <circle cx="34" cy="34" r="5" strokeWidth="1.5" />
                    <path d="M34 31v3l2 2" />
                  </svg>
                ),
                title: t('aud1_title'),
                desc: t('aud1_desc'),
                meta: t('aud1_stack'),
                cta: t('aud1_cta'),
                href: '#projekte',
              },
              {
                icon: (
                  <svg className="aud-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="6" y="6" width="13" height="13" rx="3" />
                    <rect x="25" y="6" width="13" height="13" rx="3" />
                    <rect x="6" y="25" width="13" height="13" rx="3" />
                    <rect x="25" y="25" width="13" height="13" rx="3" />
                    <path d="M19 12.5h6M12.5 19v6M31.5 19v6M19 31.5h6" />
                  </svg>
                ),
                title: t('aud2_title'),
                desc: t('aud2_desc'),
                meta: t('aud2_model'),
                cta: t('aud2_cta'),
                href: '#kontakt',
              },
              {
                icon: (
                  <svg className="aud-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="22" cy="22" r="5" />
                    <circle cx="8"  cy="14" r="3" />
                    <circle cx="36" cy="14" r="3" />
                    <circle cx="8"  cy="30" r="3" />
                    <circle cx="36" cy="30" r="3" />
                    <circle cx="22" cy="7"  r="3" />
                    <circle cx="22" cy="37" r="3" />
                    <path d="M11 14h8M25 14h8M17 22H11M27 22h6M11 30h8M25 30h8M22 10v7M22 27v7" />
                  </svg>
                ),
                title: t('aud3_title'),
                desc: t('aud3_desc'),
                meta: t('aud3_usecases'),
                cta: t('aud3_cta'),
                href: '#leistungen',
              },
            ].map(({ icon, title, desc, meta, cta, href }) => (
              <div
                key={title}
                className="aud-card"
                onMouseMove={e => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
                }}
              >
                <div className="aud-border" aria-hidden="true" />
                {icon}
                <div>
                  <h3 className="aud-title">{title}</h3>
                </div>
                <p className="aud-desc">{desc}</p>
                <p className="aud-meta">{meta}</p>
                <a href={href} className="aud-cta">
                  {cta}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEISTUNGEN / SERVICES ────────────────────── */}
      <BentoServices
        id="leistungen"
        eyebrow={t('nav_services')}
        heading={t('svc_heading')}
        services={[
          {
            eyebrow: 'Web & Shopify',
            title: t('p1_title'),
            description: t('p1_desc'),
            stack: 'Shopify · Liquid · Vercel · WordPress',
            image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop',
            className: 'lg:col-span-4',
          },
          {
            eyebrow: 'Tracking',
            title: t('p2_title'),
            description: t('p2_desc'),
            stack: 'GA4 · GTM · Server-Side · Clarity · Looker Studio',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
            className: 'lg:col-span-2',
          },
          {
            eyebrow: 'SEO',
            title: t('p3_title'),
            description: t('p3_desc'),
            stack: 'Sistrix · Semrush · Surfer · Search Console',
            image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop',
            className: 'lg:col-span-2',
          },
          {
            eyebrow: 'Paid Media / SEA',
            title: t('p4_title'),
            description: t('p4_desc'),
            stack: 'Google Ads · Meta · TikTok · LinkedIn',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop',
            className: 'lg:col-span-4',
          },
          {
            eyebrow: 'CRO',
            title: t('p5_title'),
            description: t('p5_desc'),
            stack: 'Microsoft Clarity · Hotjar · Shopify A/B-Tools',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
            className: 'lg:col-span-3',
          },
          {
            eyebrow: 'GEO & KI',
            title: t('p6_title'),
            description: t('p6_desc'),
            stack: 'JSON-LD · Schema.org · ChatGPT/Perplexity-Audits',
            image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=2032&auto=format&fit=crop',
            className: 'lg:col-span-3',
          },
        ]}
      />

      {/* ── POST-LEISTUNGEN CTA ──────────────────────── */}
      <div className="svc-cta">
        <div className="svc-cta-inner">
          <div className="svc-cta-text">
            <span className="ct-eyebrow">{t('ct_eyebrow')}</span>
            <p className="svc-cta-headline">{t('ct_headline')}</p>
          </div>
          <div className="svc-cta-actions">
            <a href="https://calendly.com/jose-treff/15min" target="_blank" rel="noopener" className="btn-primary">{t('ct_cta_calendly')} <ArrowRight /></a>
            <a href="mailto:jose@tubebridge.de" className="btn-ghost">{t('ct_cta_email')}</a>
          </div>
        </div>
      </div>

      {/* ── CASE STUDIES ─────────────────────────────── */}
      <section className="jlt-cases" id="projekte">
        <div className="jlt-cases-inner">
          <header className="cases-hdr">
            <span className="eyebrow">{t('cases_eyebrow')}</span>
            <h2 className="sec-h">Case Studies</h2>
            <p className="sec-sub">{t('cases_sub')}</p>
            <Link href="/projekte" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
              {lang === 'de' ? 'Alle Projekte & Details' : lang === 'en' ? 'All projects & details' : 'Todos los proyectos'} <ArrowRight />
            </Link>
          </header>
 
          {/* 01 — Statement Clothing */}
          <article className="case-card">
            <div className="case-text">
              <span className="case-num">{t('c1_num')}</span>
              <span className="case-period">{t('c1_period')}</span>
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
              <div className="case-lever">
                <span className="case-lever-label">{t('lever_label')}</span>
                <p className="case-lever-text">{t('c1_lever')}</p>
              </div>
              <Link href="/case-studies/statement-clothing-roas-13" className="case-link">{t('case_link_deep')} <ArrowRight /></Link>
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
              <span className="case-period">{t('c2_period')}</span>
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
              <div className="case-lever">
                <span className="case-lever-label">{t('lever_label')}</span>
                <p className="case-lever-text">{t('c2_lever')}</p>
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
              <span className="case-period">{t('c3_period')}</span>
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
              <div className="case-lever">
                <span className="case-lever-label">{t('lever_label')}</span>
                <p className="case-lever-text">{t('c3_lever')}</p>
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
              <span className="case-period">{t('c4_period')}</span>
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
              <div className="case-lever">
                <span className="case-lever-label">{t('lever_label')}</span>
                <p className="case-lever-text">{t('c4_lever')}</p>
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
            <h2 className="sec-h">{t('testi_eyebrow')}</h2>
            <p className="sec-sub">{t('testi_sub')}</p>
          </header>
          <div className="testi-grid">
            {[
              { quote: t('t1_quote'), name: t('t1_name'), role: t('t1_role') },
              { quote: t('t2_quote'), name: t('t2_name'), role: t('t2_role') },
              { quote: t('t3_quote'), name: t('t3_name'), role: t('t3_role') },
            ].map(({ quote, name, role }) => (
              <div
                key={name}
                className="testi-card"
                role="article"
                onMouseMove={(e) => {
                  const el = e.currentTarget;
                  const r = el.getBoundingClientRect();
                  el.style.setProperty('--mx', `${e.clientX - r.left}px`);
                  el.style.setProperty('--my', `${e.clientY - r.top}px`);
                }}
              >
                <div className="tc-border" aria-hidden="true" />
                <p className="testi-quote">{quote}</p>
                <div className="testi-author">
                  <span className="testi-name">{name}</span>
                  <span className="testi-role">{role}</span>
                </div>
                <div className="tc-surface" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

 
      {/* ── GEO SPOTLIGHT ────────────────────────────── */}
      <section className="jlt-geo" id="geo">
        <div className="jlt-geo-inner">

          {/* Header */}
          <header className="geo-hdr">
            <span className="eyebrow">{t('geo_eyebrow')}</span>
            <h2 className="sec-h">{t('geo_headline')}</h2>
            <div className="geo-stat-bar">
              <span className="geo-stat-dot" aria-hidden="true" />
              <span className="geo-stat-text">{t('geo_stat')}</span>
            </div>
            <p className="geo-sub2">
              <strong>SEO</strong>{lang === 'de' ? ' bringt Sie in die Google-Top-10. ' : lang === 'en' ? ' gets you into Google\'s top 10. ' : ' te lleva al top 10. '}
              <strong>GEO</strong>{lang === 'de' ? ' bringt Sie in die Antwort.' : lang === 'en' ? ' gets you into the answer.' : ' te lleva a la respuesta.'}
            </p>
          </header>

          {/* Mid: pillars + proof */}
          <div className="geo-mid">

            {/* Three pillars */}
            <div className="geo-pillars">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3"/>
                      <path d="M9 12h6M12 9v6"/>
                    </svg>
                  ),
                  title: t('geo_p1_title'), desc: t('geo_p1_desc'),
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                      <path d="M8 10h8M8 14h5"/>
                    </svg>
                  ),
                  title: t('geo_p2_title'), desc: t('geo_p2_desc'),
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  ),
                  title: t('geo_p3_title'), desc: t('geo_p3_desc'),
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="geo-pillar">
                  <div className="geo-pillar-icon">{icon}</div>
                  <div className="geo-pillar-text">
                    <span className="geo-pillar-title">{title}</span>
                    <p className="geo-pillar-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Proof mockup */}
            <div className="geo-proof-wrap">
              <span className="geo-proof-label">{t('geo_proof_label')}</span>
              <div className="geo-chat">
                {/* Chrome bar */}
                <div className="geo-chat-bar">
                  <span className="geo-chat-logo">Perplexity</span>
                  <div className="geo-chat-search">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                    Performance Marketer D2C Hamburg Shopify
                  </div>
                </div>
                {/* Body */}
                <div className="geo-chat-body">
                  <p className="geo-chat-query">Frage: Wer sind spezialisierte Performance-Marketer für D2C-Shopify-Shops im DACH-Raum?</p>
                  <p className="geo-chat-answer">
                    Für D2C-Marken im DACH-Raum, die ihr Shopify-Wachstum skalieren wollen, empfiehlt sich ein integrierter Ansatz aus Performance Ads, technischem Setup und Conversion-Optimierung.{' '}
                    <span className="geo-chat-cite">Jose L. Treff</span>
                    {' '}(jose-treff.de) ist auf dieses Profil spezialisiert — bekannt für ROAS-Ergebnisse über 13× bei sechsstelligen Monatsbudgets und Full-Stack-Setups aus einer Hand.
                  </p>
                  {/* Sources */}
                  <div className="geo-chat-sources">
                    {[
                      { label: 'jose-treff.de', primary: true, num: '1' },
                      { label: 'shopify.dev/blog', primary: false, num: '2' },
                      { label: 'performance-marketing.de', primary: false, num: '3' },
                      { label: 'sistrix.de', primary: false, num: '4' },
                    ].map(({ label, primary, num }) => (
                      <span key={label} className={`geo-src-chip${primary ? ' primary' : ''}`}>
                        <span className="geo-src-num">{num}</span>
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Audit CTA */}
          <div className="geo-audit">
            <p className="geo-audit-q">{t('geo_audit_q')}</p>
            <a href="mailto:jose@tubebridge.de?subject=GEO%20Quick-Audit" className="btn-primary">
              {t('geo_audit_cta')} <ArrowRight />
            </a>
          </div>

        </div>
      </section>

      {/* ── ABOUT ME ─────────────────────────────────── */}
      <section className="jlt-about">
        <div className="jlt-about-inner">
          <div className="about-left">
            <div className="about-avatar">
              <span style={{ fontFamily: 'var(--fh)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--brand)', letterSpacing: '0.06em' }}>JLT</span>
            </div>
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
            <div className="about-skills">
              {['SEA', 'CRO', 'Shopify', 'GEO'].map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
              <span className="skill-tag tech">GTM / GA4</span>
              <span className="skill-tag tech">Liquid</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING & ENGAGEMENT ─────────────────────── */}
      <section className="jlt-pricing" id="engagement">
        <div className="jlt-pricing-inner">
          <header className="pricing-hdr">
            <span className="eyebrow">{t('pricing_eyebrow')}</span>
            <h2 className="sec-h">{t('pricing_heading')}</h2>
          </header>

          <div className="pricing-grid">
            {/* Retainer */}
            <div className="pricing-card">
              <p className="pricing-term">{t('pricing_r1_term')}</p>
              <h3 className="pricing-name">{t('pricing_r1_name')}</h3>
              <p className="pricing-desc">{t('pricing_r1_desc')}</p>
            </div>
            {/* Sprint */}
            <div className="pricing-card">
              <p className="pricing-term">{t('pricing_r2_term')}</p>
              <h3 className="pricing-name">{t('pricing_r2_name')}</h3>
              <p className="pricing-desc">{t('pricing_r2_desc')}</p>
            </div>
            {/* White-Label */}
            <div className="pricing-card">
              <p className="pricing-term">{t('pricing_r3_term')}</p>
              <h3 className="pricing-name">{t('pricing_r3_name')}</h3>
              <p className="pricing-desc">{t('pricing_r3_desc')}</p>
            </div>
          </div>

          <div className="pricing-foot">
            <p className="pricing-note">{t('pricing_foot')}</p>
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
 
