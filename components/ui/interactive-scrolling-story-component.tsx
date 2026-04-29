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
const TEXT_PRIMARY   = 'oklch(95% 0.006 260)';
const TEXT_SECONDARY = 'oklch(68% 0.010 260)';
const BORDER_SUBTLE  = 'oklch(95% 0.006 260 / 0.06)';
const FONT_HEADING   = "'Barlow Semi Condensed', system-ui, sans-serif";
const FONT_BODY      = "'Epilogue', system-ui, sans-serif";

export function ScrollingFeatureShowcase({ slides, id, ctaLabel = 'Get Started', ctaHref = '#' }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Drive active slide from the *page* scroll — no isolated scroll container
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrolled = -rect.top;
      const maxScroll = section.offsetHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      const progress = Math.max(0, Math.min(1, scrolled / maxScroll));
      setActiveIndex(Math.min(slides.length - 1, Math.floor(progress * slides.length)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slides.length]);

  const handlePaginationClick = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const maxScroll = section.offsetHeight - window.innerHeight;
    window.scrollTo({ top: sectionTop + (index / slides.length) * maxScroll, behavior: 'smooth' });
  };

  const gridPatternStyle: React.CSSProperties = {
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
      style={{ height: `${slides.length * 100}vh`, position: 'relative' }}
    >
      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{
          backgroundColor: slides[activeIndex].bgColor,
          transition: 'background-color 0.7s ease',
        }}
      >
        <div className="h-full w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">

          {/* Left column — text */}
          <div
            className="relative flex flex-col justify-center p-8 md:p-16"
            style={{ borderRight: `1px solid ${BORDER_SUBTLE}` }}
          >
            {/* Pagination bars */}
            <div className="absolute top-16 left-8 md:left-16 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePaginationClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  style={{
                    height: '3px',
                    width: index === activeIndex ? '3rem' : '1.5rem',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'width 500ms ease, background-color 500ms ease',
                    backgroundColor: index === activeIndex
                      ? BRAND
                      : 'oklch(95% 0.006 260 / 0.18)',
                  }}
                />
              ))}
            </div>

            {/* Slide text */}
            <div style={{ position: 'relative', minHeight: '16rem' }}>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    transition: 'opacity 700ms ease, transform 700ms ease',
                    opacity: index === activeIndex ? 1 : 0,
                    transform: index === activeIndex ? 'translateY(0)' : 'translateY(1.5rem)',
                    pointerEvents: index === activeIndex ? 'auto' : 'none',
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
                      color: TEXT_SECONDARY,
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

          {/* Right column — image strip */}
          <div
            className="hidden md:flex items-center justify-center p-8"
            style={gridPatternStyle}
          >
            <div
              style={{
                position: 'relative',
                width: '55%',
                height: '80vh',
                borderRadius: '16px',
                overflow: 'hidden',
                border: `1px solid ${BORDER_SUBTLE}`,
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
                {slides.map((slide, index) => (
                  <div key={index} style={{ width: '100%', height: '100%' }}>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = 'https://placehold.co/800x1200/0d0d16/4a5568?text=Image';
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
  );
}
