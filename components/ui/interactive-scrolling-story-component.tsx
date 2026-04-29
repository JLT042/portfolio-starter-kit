import React, { useState, useEffect, useRef } from 'react';

export interface Slide {
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

interface Props {
  slides: Slide[];
  id?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const BRAND       = 'oklch(75% 0.165 140)';
const BRAND_HOVER = 'oklch(65% 0.175 140)';
const BRAND_DARK  = 'oklch(9% 0.008 260)';
const TEXT_PRI    = 'oklch(95% 0.006 260)';
const TEXT_MUT    = 'oklch(68% 0.010 260)';
const BORDER      = 'oklch(95% 0.006 260 / 0.06)';
const FH          = "'Barlow Semi Condensed', system-ui, sans-serif";
const FB          = "'Epilogue', system-ui, sans-serif";
const FM          = "'JetBrains Mono', monospace";

const CSS = `
  .sfs-wrap::-webkit-scrollbar { display: none }
  @keyframes sfs-bounce {
    0%,100% { transform: translateY(0);  opacity: .35 }
    50%      { transform: translateY(4px); opacity: .65 }
  }
`;

export function ScrollingFeatureShowcase({ slides, id, ctaLabel = 'Kontakt', ctaHref = '#' }: Props) {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const h = el.scrollHeight - el.clientHeight;
      if (h <= 0) return;
      setActive(Math.min(slides.length - 1, Math.floor(el.scrollTop / (h / slides.length))));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [slides.length]);

  const goTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const h = el.scrollHeight - el.clientHeight;
    el.scrollTo({ top: (h / slides.length) * i, behavior: 'smooth' });
  };

  const gridBg: React.CSSProperties = {
    backgroundImage: `
      linear-gradient(to right, oklch(95% 0.006 260 / 0.04) 1px, transparent 1px),
      linear-gradient(to bottom, oklch(95% 0.006 260 / 0.04) 1px, transparent 1px)
    `,
    backgroundSize: '3.5rem 3.5rem',
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div
        ref={ref}
        id={id}
        className="sfs-wrap"
        style={{
          height: '100svh',
          overflowY: 'scroll',
          scrollbarWidth: 'none',
          overscrollBehavior: 'contain',
        } as React.CSSProperties}
      >
        {/* Tall inner div creates scroll travel — 1 svh per slide */}
        <div style={{ height: `${slides.length * 100}svh` }}>
          <div style={{
            position: 'sticky',
            top: 0,
            height: '100svh',
            overflow: 'hidden',
            backgroundColor: slides[active].bgColor,
            transition: 'background-color .7s ease',
          }}>
            <div className="h-full w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">

              {/* ── Text column ─────────────────────────────────── */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                padding: 'clamp(1.5rem, 4vw, 4rem)',
                paddingTop: 'clamp(4.5rem, 7vw, 5rem)',
                paddingBottom: 'clamp(2rem, 4vw, 3.5rem)',
                borderRight: `1px solid ${BORDER}`,
                gap: '1.25rem',
              }}>

                {/* Pagination + counter */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', flexShrink: 0 }}>
                  <div style={{ display: 'flex', gap: '.5rem', flex: 1 }}>
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        style={{
                          height: '3px',
                          width: i === active ? '3rem' : '1.5rem',
                          borderRadius: '9999px',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'width 500ms ease, background-color 500ms ease',
                          backgroundColor: i === active ? BRAND : 'oklch(95% 0.006 260 / 0.18)',
                        }}
                      />
                    ))}
                  </div>
                  <span style={{ fontFamily: FM, fontSize: '.625rem', color: TEXT_MUT, letterSpacing: '.08em', flexShrink: 0 }}>
                    {String(active + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                  </span>
                </div>

                {/* Slide text — fills remaining space */}
                <div style={{ flex: 1, position: 'relative', minHeight: '12rem' }}>
                  {slides.map((slide, i) => (
                    <div
                      key={i}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        opacity: i === active ? 1 : 0,
                        transform: i === active ? 'translateY(0)' : 'translateY(1.5rem)',
                        transition: 'opacity 700ms ease, transform 700ms ease',
                        pointerEvents: i === active ? 'auto' : 'none',
                      }}
                    >
                      <h2 style={{
                        fontFamily: FH,
                        fontSize: 'clamp(2rem, 3.5vw + .5rem, 3.75rem)',
                        fontWeight: 700,
                        letterSpacing: '-.02em',
                        lineHeight: 1.1,
                        color: TEXT_PRI,
                      }}>
                        {slide.title}
                      </h2>
                      <p style={{
                        marginTop: '1.25rem',
                        fontFamily: FB,
                        fontSize: '1rem',
                        lineHeight: 1.65,
                        color: TEXT_MUT,
                        maxWidth: '38ch',
                      }}>
                        {slide.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA + scroll hint */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexShrink: 0 }}>
                  <a
                    href={ctaHref}
                    style={{
                      display: 'inline-block',
                      padding: '11px 24px',
                      backgroundColor: BRAND,
                      color: BRAND_DARK,
                      fontFamily: FB,
                      fontSize: '.875rem',
                      fontWeight: 600,
                      letterSpacing: '.04em',
                      textTransform: 'uppercase' as const,
                      textDecoration: 'none',
                      borderRadius: '8px',
                      transition: 'background-color 180ms ease, transform 100ms ease',
                    }}
                    onMouseEnter={e => {
                      const a = e.currentTarget as HTMLAnchorElement;
                      a.style.backgroundColor = BRAND_HOVER;
                      a.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={e => {
                      const a = e.currentTarget as HTMLAnchorElement;
                      a.style.backgroundColor = BRAND;
                      a.style.transform = 'translateY(0)';
                    }}
                  >
                    {ctaLabel}
                  </a>

                  {active < slides.length - 1 && (
                    <span style={{ fontFamily: FM, fontSize: '.625rem', color: TEXT_MUT, letterSpacing: '.06em', display: 'flex', alignItems: 'center', gap: '.4rem', opacity: .6 }}>
                      <svg
                        width="14" height="14" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round"
                        style={{ animation: 'sfs-bounce 2s ease-in-out infinite' }}
                        aria-hidden="true"
                      >
                        <path d="M12 5v14M5 12l7 7 7-7" />
                      </svg>
                      Scroll
                    </span>
                  )}
                </div>
              </div>

              {/* ── Image strip (desktop only) ─────────────────── */}
              <div className="hidden md:flex items-center justify-center p-8" style={gridBg}>
                <div style={{
                  position: 'relative',
                  width: '55%',
                  height: '80svh',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: `1px solid ${BORDER}`,
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '100%', height: '100%',
                    transition: 'transform 700ms cubic-bezier(.25,1,.5,1)',
                    transform: `translateY(-${active * 100}%)`,
                  }}>
                    {slides.map((slide, i) => (
                      <div key={i} style={{ width: '100%', height: '100%' }}>
                        <img
                          src={slide.image}
                          alt={slide.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          onError={e => {
                            const t = e.target as HTMLImageElement;
                            t.onerror = null;
                            t.src = 'https://placehold.co/800x1200/0d0d16/4a5568?text=Image';
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
