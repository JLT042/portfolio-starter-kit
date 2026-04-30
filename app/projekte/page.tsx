"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { CASES, CaseStudy, CaseLang } from '@/content/cases-data';

// ─── CI tokens ────────────────────────────────────────────────
const SPACE    = 'oklch(9%  0.008 260)';
const NAVY     = 'oklch(12% 0.010 260)';
const BORDER   = 'oklch(24% 0.016 260)';
const BRAND    = 'oklch(75% 0.165 140)';
const BRAND_DK = 'oklch(9%  0.008 260)';
const TEXT_PRI = 'oklch(95% 0.006 260)';
const TEXT_MUT = 'oklch(68% 0.010 260)';
const FH = "'Barlow Semi Condensed', system-ui, sans-serif";
const FB = "'Epilogue', system-ui, sans-serif";
const FM = "'JetBrains Mono', monospace";

// ─── i18n ─────────────────────────────────────────────────────
const UI = {
  de: {
    back:       '← Zurück',
    eyebrow:    'Ausgewählte Projekte',
    heading:    'Use Cases & Arbeitsproben',
    sub:        'Echte Kampagnen, echte Ergebnisse. Klicke eine Karte an um die Details zu sehen.',
    all:        'Alle',
    performance:'Performance',
    shopify:    'Shopify & Dev',
    seo:        'SEO',
    ux:         'UX & CRO',
    branding:   'Branding',
    geo:        'GEO & KI',
    challenge:  'Herausforderung',
    solution:   'Vorgehen',
    result:     'Ergebnis',
    contact:    'Projekt besprechen',
    close:      'Schließen',
    details:    'Details',
  },
  en: {
    back:       '← Back',
    eyebrow:    'Selected Projects',
    heading:    'Use Cases & Work Samples',
    sub:        'Real campaigns, real results. Click a card to see the details.',
    all:        'All',
    performance:'Performance',
    shopify:    'Shopify & Dev',
    seo:        'SEO',
    ux:         'UX & CRO',
    branding:   'Branding',
    geo:        'GEO & AI',
    challenge:  'Challenge',
    solution:   'Approach',
    result:     'Result',
    contact:    'Discuss project',
    close:      'Close',
    details:    'Details',
  },
  es: {
    back:       '← Volver',
    eyebrow:    'Proyectos seleccionados',
    heading:    'Casos de uso y muestras',
    sub:        'Campañas reales, resultados reales. Haz clic en una tarjeta para ver los detalles.',
    all:        'Todos',
    performance:'Performance',
    shopify:    'Shopify & Dev',
    seo:        'SEO',
    ux:         'UX & CRO',
    branding:   'Branding',
    geo:        'GEO & IA',
    challenge:  'Reto',
    solution:   'Enfoque',
    result:     'Resultado',
    contact:    'Hablar del proyecto',
    close:      'Cerrar',
    details:    'Detalles',
  },
} as const;

type UILang = typeof UI['de'];
type Category = CaseStudy['category'] | 'all';

const CATEGORY_LABELS: Record<Exclude<Category,'all'>, keyof UILang> = {
  performance: 'performance',
  shopify:     'shopify',
  seo:         'seo',
  ux:          'ux',
  branding:    'branding',
  geo:         'geo',
};

const PAGE_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@400;600;700&family=Epilogue:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { -webkit-font-smoothing: antialiased; }

  .pc-card {
    position: relative;
    border-radius: 20px;
    border: 1px solid oklch(24% 0.016 260);
    background: oklch(12% 0.010 260);
    overflow: hidden;
    cursor: pointer;
    transition: transform 300ms ease-out, box-shadow 300ms ease-out;
  }
  .pc-card:hover { transform: translateY(-6px); box-shadow: 0 24px 64px oklch(0 0 0 / .6); }
  .pc-card:hover .pc-cover { transform: scale(1.04); }
  .pc-card:hover .pc-border { opacity: 1; }

  .pc-cover {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform 700ms ease-out;
  }

  /* Border spotlight */
  .pc-border {
    position: absolute;
    inset: 0;
    border-radius: 20px;
    border: 1px solid oklch(75% 0.165 140 / 0.55);
    opacity: 0;
    transition: opacity 300ms ease;
    pointer-events: none;
    z-index: 2;
    mask-image: radial-gradient(220px 220px at var(--mx, 50%) var(--my, 50%), black, transparent);
    -webkit-mask-image: radial-gradient(220px 220px at var(--mx, 50%) var(--my, 50%), black, transparent);
  }

  /* Detail panel */
  .pc-overlay {
    position: fixed; inset: 0; z-index: 100;
    background: oklch(0% 0 0 / 0.75);
    backdrop-filter: blur(6px);
    display: flex; align-items: center; justify-content: center;
    padding: 1rem;
  }
  .pc-panel {
    position: relative;
    width: 100%; max-width: 860px; max-height: 90svh;
    border-radius: 20px;
    border: 1px solid oklch(24% 0.016 260);
    background: oklch(12% 0.010 260);
    overflow-y: auto;
    scrollbar-width: none;
  }
  .pc-panel::-webkit-scrollbar { display: none; }

  .pc-filter-btn {
    border: 1px solid oklch(24% 0.016 260);
    background: transparent;
    border-radius: 999px;
    cursor: pointer;
    transition: all 150ms ease;
  }
  .pc-filter-btn:hover { border-color: oklch(75% 0.165 140 / 0.5); color: oklch(95% 0.006 260); }
  .pc-filter-btn.active { background: oklch(75% 0.165 140); border-color: oklch(75% 0.165 140); color: oklch(9% 0.008 260); }
`;

export default function ProjektePage() {
  const [lang, setLang] = useState<CaseLang>('de');
  const [filter, setFilter] = useState<Category>('all');
  const [active, setActive] = useState<CaseStudy | null>(null);
  const ui = UI[lang];

  const filtered = filter === 'all' ? CASES : CASES.filter(c => c.category === filter);

  const categories: Category[] = ['all', 'performance', 'shopify', 'ux', 'branding', 'geo', 'seo'];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <main style={{ background: SPACE, color: TEXT_PRI, fontFamily: FB, minHeight: '100dvh' }}>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      {/* ── NAV ─────────────────────────────────────── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1rem clamp(1rem, 5vw, 3rem)',
        borderBottom: `1px solid ${BORDER}`,
        background: `${SPACE}ee`,
        backdropFilter: 'blur(12px)',
      }}>
        <Link href="/" style={{
          fontFamily: FM, fontSize: '.75rem', letterSpacing: '.08em',
          color: TEXT_MUT, textDecoration: 'none',
          transition: 'color 150ms ease',
        }}
          onMouseEnter={e => (e.currentTarget.style.color = TEXT_PRI)}
          onMouseLeave={e => (e.currentTarget.style.color = TEXT_MUT)}
        >
          {ui.back}
        </Link>

        {/* Lang switcher */}
        <div style={{ display: 'flex', gap: '.375rem' }}>
          {(['de','en','es'] as CaseLang[]).map(l => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                fontFamily: FM, fontSize: '.625rem', fontWeight: 600,
                letterSpacing: '.1em', textTransform: 'uppercase',
                padding: '5px 10px', borderRadius: '999px', border: 'none',
                cursor: 'pointer', transition: 'all 150ms ease',
                background: lang === l ? BRAND : 'transparent',
                color: lang === l ? BRAND_DK : TEXT_MUT,
                outline: lang !== l ? `1px solid ${BORDER}` : 'none',
              }}
            >
              {l}
            </button>
          ))}
        </div>
      </nav>

      {/* ── HEADER ──────────────────────────────────── */}
      <header style={{
        padding: '5rem clamp(1rem, 6vw, 4rem) 3rem',
        maxWidth: '1280px', margin: '0 auto',
      }}>
        <span style={{
          fontFamily: FM, fontSize: '.6875rem', fontWeight: 600,
          letterSpacing: '.12em', textTransform: 'uppercase', color: BRAND,
          display: 'block', marginBottom: '.75rem',
        }}>
          {ui.eyebrow}
        </span>
        <h1 style={{
          fontFamily: FH,
          fontSize: 'clamp(2.5rem, 5vw + .5rem, 4rem)',
          fontWeight: 700, letterSpacing: '-.025em', lineHeight: 1.05,
          color: TEXT_PRI, marginBottom: '1rem',
        }}>
          {ui.heading}
        </h1>
        <p style={{ fontFamily: FB, fontSize: '1rem', color: TEXT_MUT, maxWidth: '48ch', lineHeight: 1.65 }}>
          {ui.sub}
        </p>
      </header>

      {/* ── FILTERS ─────────────────────────────────── */}
      <div style={{
        padding: '0 clamp(1rem, 6vw, 4rem) 2.5rem',
        maxWidth: '1280px', margin: '0 auto',
        display: 'flex', flexWrap: 'wrap', gap: '.5rem',
      }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`pc-filter-btn${filter === cat ? ' active' : ''}`}
            style={{
              fontFamily: FM, fontSize: '.625rem', fontWeight: 600,
              letterSpacing: '.1em', textTransform: 'uppercase',
              padding: '6px 14px',
              color: filter === cat ? BRAND_DK : TEXT_MUT,
            }}
          >
            {cat === 'all' ? ui.all : ui[CATEGORY_LABELS[cat as Exclude<Category,'all'>]]}
          </button>
        ))}
      </div>

      {/* ── GRID ────────────────────────────────────── */}
      <div style={{
        padding: '0 clamp(1rem, 6vw, 4rem) 6rem',
        maxWidth: '1280px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
        gap: '1.25rem',
      }}>
        {filtered.map(c => (
          <div
            key={c.slug}
            className="pc-card"
            onMouseMove={handleMouseMove}
            onClick={() => setActive(c)}
          >
            <div className="pc-border" aria-hidden="true" />

            {/* Cover image */}
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img
                src={c.coverImage}
                alt={c.title[lang]}
                className="pc-cover"
                onError={e => {
                  const t = e.target as HTMLImageElement;
                  t.onerror = null;
                  t.src = 'https://placehold.co/700x400/0c0c14/2a2a3a';
                }}
              />
            </div>

            {/* Tags */}
            <div style={{ padding: '1rem 1.25rem .5rem', display: 'flex', flexWrap: 'wrap', gap: '.375rem' }}>
              {c.tags.slice(0, 4).map(tag => (
                <span key={tag} style={{
                  fontFamily: FM, fontSize: '.5625rem', fontWeight: 600,
                  letterSpacing: '.1em', textTransform: 'uppercase',
                  padding: '3px 8px', borderRadius: '999px',
                  border: `1px solid ${BORDER}`,
                  color: TEXT_MUT,
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Text */}
            <div style={{ padding: '.75rem 1.25rem 1.5rem' }}>
              <span style={{
                fontFamily: FM, fontSize: '.5625rem', fontWeight: 600,
                letterSpacing: '.1em', textTransform: 'uppercase',
                color: BRAND, display: 'block', marginBottom: '.4rem',
              }}>
                {c.eyebrow[lang]}
              </span>
              <h2 style={{
                fontFamily: FH, fontSize: 'clamp(1.1rem, 2vw + .2rem, 1.4rem)',
                fontWeight: 700, letterSpacing: '-.02em', lineHeight: 1.1,
                color: TEXT_PRI, marginBottom: '.6rem',
              }}>
                {c.title[lang]}
              </h2>
              <p style={{ fontFamily: FB, fontSize: '.875rem', lineHeight: 1.6, color: TEXT_MUT }}>
                {c.description[lang]}
              </p>
            </div>

            {/* Metrics strip */}
            <div style={{
              display: 'flex', borderTop: `1px solid ${BORDER}`,
            }}>
              {c.metrics.map((m, i) => (
                <div key={i} style={{
                  flex: 1,
                  padding: '.75rem .875rem',
                  borderRight: i < c.metrics.length - 1 ? `1px solid ${BORDER}` : 'none',
                }}>
                  <div style={{ fontFamily: FH, fontSize: '1.1rem', fontWeight: 700, color: BRAND, lineHeight: 1 }}>
                    {m.value}
                  </div>
                  <div style={{ fontFamily: FM, fontSize: '.5rem', letterSpacing: '.08em', textTransform: 'uppercase', color: TEXT_MUT, marginTop: '.2rem' }}>
                    {m.label[lang]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── DETAIL OVERLAY ──────────────────────────── */}
      {active && (
        <div className="pc-overlay" onClick={() => setActive(null)}>
          <div className="pc-panel" onClick={e => e.stopPropagation()}>

            {/* Cover */}
            <div style={{ height: '280px', position: 'relative', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
              <img
                src={active.coverImage}
                alt={active.title[lang]}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(to bottom, transparent 40%, ${NAVY} 100%)`,
              }} />
              <button
                onClick={() => setActive(null)}
                style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  fontFamily: FM, fontSize: '.625rem', fontWeight: 600,
                  letterSpacing: '.1em', textTransform: 'uppercase',
                  padding: '6px 14px', borderRadius: '999px',
                  border: `1px solid oklch(95% 0.006 260 / 0.2)`,
                  background: 'oklch(0% 0 0 / 0.4)', backdropFilter: 'blur(8px)',
                  color: TEXT_PRI, cursor: 'pointer',
                }}
              >
                {ui.close} ✕
              </button>
            </div>

            {/* Content */}
            <div style={{ padding: '2rem 2rem 2.5rem' }}>
              <span style={{
                fontFamily: FM, fontSize: '.6875rem', fontWeight: 600,
                letterSpacing: '.12em', textTransform: 'uppercase',
                color: BRAND, display: 'block', marginBottom: '.5rem',
              }}>
                {active.eyebrow[lang]}
              </span>
              <h2 style={{
                fontFamily: FH,
                fontSize: 'clamp(1.5rem, 3vw + .5rem, 2.25rem)',
                fontWeight: 700, letterSpacing: '-.025em', lineHeight: 1.05,
                color: TEXT_PRI, marginBottom: '1.25rem',
              }}>
                {active.title[lang]}
              </h2>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.375rem', marginBottom: '1.75rem' }}>
                {active.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: FM, fontSize: '.5625rem', fontWeight: 600,
                    letterSpacing: '.1em', textTransform: 'uppercase',
                    padding: '3px 10px', borderRadius: '999px',
                    border: `1px solid ${BORDER}`, color: TEXT_MUT,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <div style={{
                display: 'flex', gap: '1px', marginBottom: '2rem',
                background: BORDER, borderRadius: '12px', overflow: 'hidden',
              }}>
                {active.metrics.map((m, i) => (
                  <div key={i} style={{ flex: 1, padding: '1rem 1.25rem', background: NAVY }}>
                    <div style={{ fontFamily: FH, fontSize: '1.5rem', fontWeight: 700, color: BRAND, lineHeight: 1 }}>
                      {m.value}
                    </div>
                    <div style={{ fontFamily: FM, fontSize: '.5625rem', letterSpacing: '.08em', textTransform: 'uppercase', color: TEXT_MUT, marginTop: '.3rem' }}>
                      {m.label[lang]}
                    </div>
                  </div>
                ))}
              </div>

              {/* 3-col story */}
              {[
                { label: ui.challenge, text: active.challenge[lang] },
                { label: ui.solution,  text: active.solution[lang]  },
                { label: ui.result,    text: active.result[lang]    },
              ].map(({ label, text }) => (
                <div key={label} style={{ marginBottom: '1.5rem' }}>
                  <span style={{
                    fontFamily: FM, fontSize: '.625rem', fontWeight: 600,
                    letterSpacing: '.12em', textTransform: 'uppercase',
                    color: BRAND, display: 'block', marginBottom: '.4rem',
                  }}>
                    {label}
                  </span>
                  <p style={{ fontFamily: FB, fontSize: '.9375rem', lineHeight: 1.65, color: TEXT_MUT }}>
                    {text}
                  </p>
                </div>
              ))}

              {/* CTA */}
              <a
                href="mailto:jose@tubebridge.de"
                style={{
                  display: 'inline-block', marginTop: '.5rem',
                  padding: '13px 2rem', borderRadius: '8px',
                  background: BRAND, color: BRAND_DK,
                  fontFamily: FB, fontSize: '.9375rem', fontWeight: 500,
                  letterSpacing: '.02em', textDecoration: 'none',
                  transition: 'background 150ms ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'oklch(65% 0.175 140)')}
                onMouseLeave={e => (e.currentTarget.style.background = BRAND)}
              >
                {ui.contact}
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
