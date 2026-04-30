"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { DEEP_DIVES, CaseStudyDeepDive, Lang } from '@/content/case-studies-deep-dive';

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
    back:       '← Alle Projekte',
    meta_client:'Kunde',
    meta_period:'Zeitraum',
    meta_scope: 'Leistungen',
    meta_loc:   'Region',
    results:    'Ergebnisse auf einen Blick',
    s1:         'Die Ausgangslage',
    s2:         'Die Hypothese',
    s3:         'Das Setup',
    s4:         'Die Ergebnisse',
    s5:         'Was ich daraus gelernt habe',
    stack:      'Stack & Tools',
    related:    'Ähnliche Projekte',
    cta_head:   'Ähnliche Herausforderung?',
    cta_sub:    'Lass uns in 15 Minuten klären, ob und wie ich helfen kann.',
    cta_btn:    'Gespräch buchen',
    cta_email:  'E-Mail schreiben',
    not_found:  'Projekt nicht gefunden.',
    not_found_link: '← Zurück zu allen Projekten',
  },
  en: {
    back:       '← All projects',
    meta_client:'Client',
    meta_period:'Period',
    meta_scope: 'Services',
    meta_loc:   'Region',
    results:    'Results at a glance',
    s1:         'The Starting Point',
    s2:         'The Hypothesis',
    s3:         'The Setup',
    s4:         'The Results',
    s5:         'What I Learned',
    stack:      'Stack & Tools',
    related:    'Related Projects',
    cta_head:   'Similar challenge?',
    cta_sub:    "Let's find out in 15 minutes if and how I can help.",
    cta_btn:    'Book a call',
    cta_email:  'Send an email',
    not_found:  'Project not found.',
    not_found_link: '← Back to all projects',
  },
  es: {
    back:       '← Todos los proyectos',
    meta_client:'Cliente',
    meta_period:'Período',
    meta_scope: 'Servicios',
    meta_loc:   'Región',
    results:    'Resultados de un vistazo',
    s1:         'El Punto de Partida',
    s2:         'La Hipótesis',
    s3:         'El Setup',
    s4:         'Los Resultados',
    s5:         'Lo que aprendí',
    stack:      'Stack & Herramientas',
    related:    'Proyectos relacionados',
    cta_head:   '¿Reto similar?',
    cta_sub:    'Descubramos en 15 minutos si puedo ayudarte y cómo.',
    cta_btn:    'Reservar llamada',
    cta_email:  'Escribir email',
    not_found:  'Proyecto no encontrado.',
    not_found_link: '← Volver a todos los proyectos',
  },
};

// ─── Markdown-like bold renderer (** → <strong>) ──────────────
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={i} style={{ color: TEXT_PRI, fontWeight: 600 }}>
            {part.slice(2, -2)}
          </strong>
        ) : (
          <React.Fragment key={i}>
            {part.split('\n\n').map((para, j) => (
              <p key={j} style={{ marginBottom: j < part.split('\n\n').length - 1 ? '1rem' : 0 }}>
                {para.split('\n').map((line, k) => (
                  <React.Fragment key={k}>
                    {k > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
              </p>
            ))}
          </React.Fragment>
        )
      )}
    </>
  );
}

const CSS = `
  .dd-section {
    padding: 2.5rem 0;
    border-top: 1px solid oklch(24% 0.016 260);
  }
  .dd-section-heading {
    font-family: 'JetBrains Mono', monospace;
    font-size: .6875rem;
    font-weight: 600;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: oklch(75% 0.165 140);
    margin-bottom: 1.25rem;
  }
  .dd-body {
    font-family: 'Epilogue', system-ui, sans-serif;
    font-size: 1.0625rem;
    line-height: 1.75;
    color: oklch(68% 0.010 260);
  }
  .dd-kpi-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
  }
  .dd-kpi-card {
    background: oklch(12% 0.010 260);
    border: 1px solid oklch(24% 0.016 260);
    border-radius: 12px;
    padding: 1.25rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: .25rem;
  }
  .dd-kpi-val {
    font-family: 'Barlow Semi Condensed', system-ui, sans-serif;
    font-size: clamp(1.75rem, 3vw + .5rem, 2.5rem);
    font-weight: 700;
    letter-spacing: -.03em;
    color: oklch(75% 0.165 140);
    line-height: 1;
  }
  .dd-kpi-lbl {
    font-family: 'JetBrains Mono', monospace;
    font-size: .625rem;
    font-weight: 600;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: oklch(68% 0.010 260);
  }
  .dd-kpi-sub {
    font-family: 'Epilogue', system-ui, sans-serif;
    font-size: .8125rem;
    color: oklch(50% 0.010 260);
    margin-top: .25rem;
  }
  .dd-stack-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    margin-top: 1rem;
  }
  .dd-chip {
    font-family: 'JetBrains Mono', monospace;
    font-size: .6875rem;
    font-weight: 500;
    letter-spacing: .05em;
    padding: .35rem .75rem;
    border-radius: 6px;
    border: 1px solid oklch(24% 0.016 260);
    color: oklch(68% 0.010 260);
    background: oklch(12% 0.010 260);
  }
  .dd-related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }
  .dd-related-card {
    background: oklch(12% 0.010 260);
    border: 1px solid oklch(24% 0.016 260);
    border-radius: 12px;
    overflow: hidden;
    text-decoration: none;
    transition: transform 250ms ease, border-color 250ms ease;
    display: block;
  }
  .dd-related-card:hover {
    transform: translateY(-4px);
    border-color: oklch(75% 0.165 140 / 0.4);
  }
  .dd-related-img {
    width: 100%;
    height: 140px;
    object-fit: cover;
    display: block;
  }
  .dd-related-label {
    font-family: 'Epilogue', system-ui, sans-serif;
    font-size: .9375rem;
    font-weight: 500;
    color: oklch(95% 0.006 260);
    padding: 1rem 1.25rem;
  }
  .dd-lang {
    display: flex;
    gap: .5rem;
    margin-left: auto;
  }
  .dd-lang-btn {
    font-family: 'JetBrains Mono', monospace;
    font-size: .625rem;
    font-weight: 600;
    letter-spacing: .1em;
    text-transform: uppercase;
    padding: .35rem .65rem;
    border-radius: 5px;
    border: 1px solid oklch(24% 0.016 260);
    background: transparent;
    color: oklch(68% 0.010 260);
    cursor: pointer;
    transition: border-color 150ms, color 150ms;
  }
  .dd-lang-btn.active {
    border-color: oklch(75% 0.165 140 / 0.6);
    color: oklch(75% 0.165 140);
  }
  @media (max-width: 640px) {
    .dd-kpi-grid { grid-template-columns: repeat(2, 1fr); }
  }
`;

export default function CaseStudyPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const [lang, setLang] = useState<Lang>('de');

  const c = DEEP_DIVES.find(d => d.slug === slug);
  const ui = UI[lang];

  const related = c
    ? DEEP_DIVES.filter(d => c.relatedSlugs.includes(d.slug))
    : [];

  if (!c) {
    return (
      <main style={{ minHeight: '100vh', background: SPACE, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', fontFamily: FB }}>
        <p style={{ color: TEXT_MUT, fontSize: '1.125rem' }}>{ui.not_found}</p>
        <Link href="/projekte" style={{ color: BRAND, textDecoration: 'none', fontFamily: FM, fontSize: '.75rem', letterSpacing: '.1em', textTransform: 'uppercase' }}>
          {ui.not_found_link}
        </Link>
      </main>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <main style={{ background: SPACE, minHeight: '100vh' }}>

        {/* ── NAV ───────────────────────────────────────────────── */}
        <nav style={{
          position: 'sticky', top: 0, zIndex: 50,
          borderBottom: `1px solid ${BORDER}`,
          background: 'oklch(9% 0.008 260 / 0.92)',
          backdropFilter: 'blur(12px)',
          padding: '.875rem clamp(1rem, 6vw, 4rem)',
          display: 'flex', alignItems: 'center', gap: '1.5rem',
        }}>
          <Link href="/projekte" style={{
            fontFamily: FM, fontSize: '.6875rem', fontWeight: 600,
            letterSpacing: '.1em', textTransform: 'uppercase',
            color: TEXT_MUT, textDecoration: 'none',
            transition: 'color 150ms',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = BRAND)}
            onMouseLeave={e => (e.currentTarget.style.color = TEXT_MUT)}
          >
            {ui.back}
          </Link>

          <div className="dd-lang">
            {(['de', 'en', 'es'] as Lang[]).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`dd-lang-btn${lang === l ? ' active' : ''}`}
              >
                {l}
              </button>
            ))}
          </div>
        </nav>

        {/* ── HERO IMAGE ────────────────────────────────────────── */}
        <div style={{ position: 'relative', height: 'clamp(240px, 40vw, 480px)', overflow: 'hidden' }}>
          <img
            src={c.heroImage}
            alt=""
            aria-hidden="true"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(to bottom, transparent 30%, ${SPACE} 100%)`,
          }} />
        </div>

        {/* ── CONTENT WRAPPER ──────────────────────────────────── */}
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem clamp(1rem, 6vw, 3rem) 6rem' }}>

          {/* H1 */}
          <h1 style={{
            fontFamily: FH,
            fontSize: 'clamp(1.75rem, 4vw + .5rem, 3rem)',
            fontWeight: 700, letterSpacing: '-.025em', lineHeight: 1.1,
            color: TEXT_PRI, marginBottom: '2rem',
          }}>
            {c.h1[lang]}
          </h1>

          {/* Meta strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1rem',
            padding: '1.5rem',
            background: NAVY,
            border: `1px solid ${BORDER}`,
            borderRadius: '12px',
            marginBottom: '2rem',
          }}>
            {[
              [ui.meta_client, c.meta.client],
              [ui.meta_period, c.meta.period],
              [ui.meta_scope,  c.meta.scope[lang]],
              [ui.meta_loc,    c.meta.location],
            ].map(([label, value]) => (
              <div key={label}>
                <span style={{ fontFamily: FM, fontSize: '.5625rem', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: TEXT_MUT, display: 'block', marginBottom: '.3rem' }}>
                  {label}
                </span>
                <span style={{ fontFamily: FB, fontSize: '.9375rem', color: TEXT_PRI }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* KPI strip */}
          <p style={{ fontFamily: FM, fontSize: '.6875rem', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: BRAND, marginBottom: '.75rem' }}>
            {ui.results}
          </p>
          <div className="dd-kpi-grid">
            {c.kpis.map((kpi, i) => (
              <div key={i} className="dd-kpi-card">
                <span className="dd-kpi-val">{kpi.value}</span>
                <span className="dd-kpi-lbl">{kpi.label[lang]}</span>
                {kpi.sub && <span className="dd-kpi-sub">{kpi.sub[lang]}</span>}
              </div>
            ))}
          </div>

          {/* Content sections */}
          {[
            { key: 's1', text: c.ausgangslage[lang] },
            { key: 's2', text: c.hypothese[lang]    },
            { key: 's3', text: c.setup[lang]         },
            { key: 's4', text: c.ergebnisse[lang]    },
            { key: 's5', text: c.learnings[lang]     },
          ].map(({ key, text }) => (
            <section key={key} className="dd-section">
              <p className="dd-section-heading">{ui[key as keyof typeof ui]}</p>
              <div className="dd-body">
                <RichText text={text} />
              </div>
            </section>
          ))}

          {/* Stack */}
          <section className="dd-section">
            <p className="dd-section-heading">{ui.stack}</p>
            <div className="dd-stack-wrap">
              {c.stack.map(tool => (
                <span key={tool} className="dd-chip">{tool}</span>
              ))}
            </div>
          </section>

          {/* Related */}
          {related.length > 0 && (
            <section className="dd-section">
              <p className="dd-section-heading">{ui.related}</p>
              <div className="dd-related-grid">
                {related.map(r => (
                  <Link key={r.slug} href={`/case-studies/${r.slug}`} className="dd-related-card">
                    <img src={r.heroImage} alt="" aria-hidden="true" className="dd-related-img" />
                    <span className="dd-related-label">{r.h1[lang]}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div style={{
            marginTop: '3rem',
            padding: '2.5rem',
            background: NAVY,
            border: `1px solid ${BORDER}`,
            borderRadius: '16px',
            display: 'flex', flexDirection: 'column', gap: '1rem',
            alignItems: 'flex-start',
          }}>
            <h2 style={{ fontFamily: FH, fontSize: 'clamp(1.5rem, 2.5vw + .5rem, 2rem)', fontWeight: 700, letterSpacing: '-.02em', color: TEXT_PRI }}>
              {ui.cta_head}
            </h2>
            <p style={{ fontFamily: FB, fontSize: '1rem', lineHeight: 1.65, color: TEXT_MUT, maxWidth: '480px' }}>
              {ui.cta_sub}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem', marginTop: '.5rem' }}>
              <a
                href="https://calendly.com/jose-treff/15min"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '13px 1.75rem', borderRadius: '8px',
                  background: BRAND, color: BRAND_DK,
                  fontFamily: FB, fontSize: '.9375rem', fontWeight: 500,
                  letterSpacing: '.02em', textDecoration: 'none',
                  transition: 'background 150ms ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'oklch(65% 0.175 140)')}
                onMouseLeave={e => (e.currentTarget.style.background = BRAND)}
              >
                {ui.cta_btn}
              </a>
              <a
                href="mailto:jose@tubebridge.de"
                style={{
                  padding: '13px 1.75rem', borderRadius: '8px',
                  border: `1px solid ${BORDER}`,
                  background: 'transparent', color: TEXT_MUT,
                  fontFamily: FB, fontSize: '.9375rem', fontWeight: 500,
                  letterSpacing: '.02em', textDecoration: 'none',
                  transition: 'border-color 150ms, color 150ms',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = BRAND; e.currentTarget.style.color = BRAND; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = TEXT_MUT; }}
              >
                {ui.cta_email}
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
