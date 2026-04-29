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

const BRAND        = 'oklch(75% 0.165 140)';
const BRAND_HOVER  = 'oklch(65% 0.175 140)';
const BRAND_DARK   = 'oklch(9% 0.008 260)';
const TEXT_PRIMARY = 'oklch(95% 0.006 260)';
const TEXT_MUTED   = 'oklch(68% 0.010 260)';
const BORDER       = 'oklch(95% 0.006 260 / 0.06)';
const FONT_HEADING = "'Barlow Semi Condensed', system-ui, sans-serif";
const FONT_BODY    = "'Epilogue', system-ui, sans-serif";

export function ScrollingFeatureShowcase({
  slides,
  id,
  ctaLabel = 'Kontakt',
  ctaHref = '#',
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef  = useRef<HTMLDivElement>(null);
  const indexRef    = useRef(0);          // mirrors activeIndex for use inside handlers
  const lockedRef   = useRef(false);      // true while this section owns the scroll
  const cooldownRef = useRef(false);      // prevents multiple advances per gesture

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    /** Is the section currently filling the viewport? */
    const inView = () => {
      const r = section.getBoundingClientRect();
      return r.top <= 2 && r.bottom >= window.innerHeight - 2;
    };

    /** Advance one step; returns false when already at a boundary */
    const advance = (dir: 1 | -1): boolean => {
      const next = indexRef.current + dir;
      if (next < 0 || next >= slides.length) return false;
      indexRef.current = next;
      setActiveIndex(next);
      return true;
    };

    /** Release the trap and scroll forward past this section */
    const releaseFwd = () => {
      lockedRef.current = false;
      window.scrollTo({
        top: window.scrollY + window.innerHeight,
        behavior: 'smooth',
      });
    };

    /** Release the trap upward (let normal scroll resume) */
    const releaseBwd = () => {
      lockedRef.current = false;
    };

    // ── wheel handler ─────────────────────────────────────────────────────────
    const onWheel = (e: WheelEvent) => {
      if (!inView()) return;

      // Snap section to viewport top the first time
      if (!lockedRef.current) {
        lockedRef.current = true;
        const top = section.getBoundingClientRect().top;
        if (Math.abs(top) > 2) {
          window.scrollTo({ top: window.scrollY + top, behavior: 'instant' });
        }
      }

      e.preventDefault();

      // Debounce — one slide change per gesture (800 ms cooldown)
      if (cooldownRef.current) return;
      cooldownRef.current = true;
      setTimeout(() => { cooldownRef.current = false; }, 800);

      const dir = e.deltaY >= 0 ? 1 : -1 as 1 | -1;
      if (!advance(dir)) {
        if (dir > 0) releaseFwd();
        else releaseBwd();
      }
    };

    // ── touch handler ─────────────────────────────────────────────────────────
    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!inView()) return;
      const delta = touchStartY - e.touches[0].clientY;
      if (Math.abs(delta) < 50) return;          // threshold: 50 px swipe
      e.preventDefault();
      touchStartY = e.touches[0].clientY;

      if (cooldownRef.current) return;
      cooldownRef.current = true;
      setTimeout(() => { cooldownRef.current = false; }, 800);

      if (!lockedRef.current) lockedRef.current = true;

      const dir = delta > 0 ? 1 : -1 as 1 | -1;
      if (!advance(dir)) {
        if (dir > 0) releaseFwd();
        else releaseBwd();
      }
    };

    // ── scroll handler — release if momentum pushes past ──────────────────────
    const onScroll = () => {
      if (!lockedRef.current) return;
      const r = section.getBoundingClientRect();
      if (r.top < -window.innerHeight * 0.25 || r.bottom < window.innerHeight * 0.75) {
        lockedRef.current = false;
      }
    };

    window.addEventListener('wheel',      onWheel,      { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true  });
    window.addEventListener('touchmove',  onTouchMove,  { passive: false });
    window.addEventListener('scroll',     onScroll,     { passive: true  });

    return () => {
      window.removeEventListener('wheel',      onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove',  onTouchMove);
      window.removeEventListener('scroll',     onScroll);
    };
  }, [slides.length]);

  /** Pagination dot click — jump to slide and scroll section into view */
  const goTo = (index: number) => {
    indexRef.current = index;
    setActiveIndex(index);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const gridPattern: React.CSSProperties = {
    backgroundImage: `
      linear-gradient(to right, oklch(95% 0.006 260 / 0.04) 1px, transparent 1px),
      linear-gradient(to bottom, oklch(95% 0.006 260 / 0.04) 1px, transparent 1px)
    `,
    backgroundSize: '3.5rem 3.5rem',
  };

  return (
    <div
      ref={sectionRef}
      id={id}
      style={{
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: slides[activeIndex].bgColor,
        transition: 'background-color 0.7s ease',
      }}
    >
      <div className="h-full w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">

        {/* ── Left: text ───────────────────────────────────────────────────── */}
        <div
          className="relative flex flex-col justify-center p-8 md:p-16"
          style={{ borderRight: `1px solid ${BORDER}` }}
        >
          {/* Pagination bars */}
          <div className="absolute top-16 left-8 md:left-16 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  height: '3px',
                  width: i === activeIndex ? '3rem' : '1.5rem',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'width 500ms ease, background-color 500ms ease',
                  backgroundColor: i === activeIndex
                    ? BRAND
                    : 'oklch(95% 0.006 260 / 0.18)',
                }}
              />
            ))}
          </div>

          {/* Slide text */}
          <div style={{ position: 'relative', minHeight: '16rem' }}>
            {slides.map((slide, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: i === activeIndex ? 1 : 0,
                  transform: i === activeIndex ? 'translateY(0)' : 'translateY(1.5rem)',
                  transition: 'opacity 700ms ease, transform 700ms ease',
                  pointerEvents: i === activeIndex ? 'auto' : 'none',
                }}
              >
                <h2
                  style={{
                    fontFamily: FONT_HEADING,
                    fontSize: 'clamp(2.25rem, 3.5vw + 1rem, 3.75rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: TEXT_PRIMARY,
                  }}
                >
                  {slide.title}
                </h2>
                <p
                  style={{
                    marginTop: '1.5rem',
                    fontFamily: FONT_BODY,
                    fontSize: '1.0625rem',
                    lineHeight: 1.65,
                    color: TEXT_MUTED,
                    maxWidth: '38ch',
                  }}
                >
                  {slide.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="absolute bottom-16 left-8 md:left-16">
            <a
              href={ctaHref}
              style={{
                display: 'inline-block',
                padding: '12px 28px',
                backgroundColor: BRAND,
                color: BRAND_DARK,
                fontFamily: FONT_BODY,
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'background-color 180ms ease, transform 100ms ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = BRAND_HOVER;
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = BRAND;
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              }}
            >
              {ctaLabel}
            </a>
          </div>
        </div>

        {/* ── Right: image strip ───────────────────────────────────────────── */}
        <div
          className="hidden md:flex items-center justify-center p-8"
          style={gridPattern}
        >
          <div
            style={{
              position: 'relative',
              width: '55%',
              height: '80vh',
              borderRadius: '16px',
              overflow: 'hidden',
              border: `1px solid ${BORDER}`,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                transition: 'transform 700ms cubic-bezier(0.25, 1, 0.5, 1)',
                transform: `translateY(-${activeIndex * 100}%)`,
              }}
            >
              {slides.map((slide, i) => (
                <div key={i} style={{ width: '100%', height: '100%' }}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
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
  );
}
