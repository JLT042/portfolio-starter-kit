"use client";

import { clsx } from "clsx";
import React, { useEffect, useRef, useState } from "react";

export interface BentoService {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  className?: string;
}

interface Props {
  id?: string;
  eyebrow?: string;
  heading?: string;
  services: BentoService[];
}

const NAVY     = 'oklch(12% 0.010 260)';
const BORDER   = 'oklch(24% 0.016 260)';
const BRAND    = 'oklch(75% 0.165 140)';
const TEXT_PRI = 'oklch(95% 0.006 260)';
const TEXT_MUT = 'oklch(68% 0.010 260)';
const FH = "'Barlow Semi Condensed', system-ui, sans-serif";
const FB = "'Epilogue', system-ui, sans-serif";
const FM = "'JetBrains Mono', monospace";

const CSS = `
  @keyframes bc-card {
    from { opacity: 0; transform: translateY(18px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .bc-wrap {
    position: relative;
    border-radius: 20px;
    opacity: 0;
    transition: transform 300ms ease-out, box-shadow 300ms ease-out;
  }
  .bc-wrap.bc-visible {
    animation: bc-card 0.7s ease-out forwards;
  }
  .bc-wrap:hover {
    transform: translateY(-8px);
    z-index: 10;
  }
  .bc-wrap:hover .bc-image {
    transform: scale(1.05);
  }

  /* Border spotlight — mask reveals lit border only near cursor */
  .bc-border {
    position: absolute;
    inset: 0;
    border-radius: 20px;
    border: 1px solid oklch(75% 0.165 140 / 0.6);
    opacity: 0;
    transition: opacity 300ms ease;
    pointer-events: none;
    z-index: 2;
    mask-image: radial-gradient(220px 220px at var(--mx, 50%) var(--my, 50%), black, transparent);
    -webkit-mask-image: radial-gradient(220px 220px at var(--mx, 50%) var(--my, 50%), black, transparent);
  }
  .bc-wrap:hover .bc-border { opacity: 1; }

  /* Surface spotlight — subtle brand wash that follows cursor */
  .bc-surface {
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background: radial-gradient(
      420px circle at var(--mx, 50%) var(--my, 50%),
      oklch(75% 0.165 140 / 0.07),
      transparent 55%
    );
    opacity: 0;
    transition: opacity 350ms ease;
    pointer-events: none;
    z-index: 5;
  }
  .bc-wrap:hover .bc-surface { opacity: 1; }

  .bc-image {
    transition: transform 700ms ease-out;
  }
`;

export function BentoServices({ id, eyebrow, heading, services }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <section
        ref={sectionRef}
        id={id}
        style={{
          padding: '6rem clamp(1rem, 6vw, 4rem)',
          background: 'oklch(9% 0.008 260)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {(eyebrow || heading) && (
            <header style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              {eyebrow && (
                <span style={{
                  fontFamily: FM, fontSize: '.6875rem', fontWeight: 600,
                  letterSpacing: '.12em', textTransform: 'uppercase',
                  color: BRAND,
                }}>
                  {eyebrow}
                </span>
              )}
              {heading && (
                <h2 style={{
                  fontFamily: FH,
                  fontSize: 'clamp(2rem, 4vw + .5rem, 3rem)',
                  fontWeight: 700, letterSpacing: '-.02em', lineHeight: 1.05,
                  color: TEXT_PRI,
                }}>
                  {heading}
                </h2>
              )}
            </header>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {services.map((svc, i) => (
              <BentoCard key={i} {...svc} visible={visible} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function BentoCard({
  eyebrow, title, description, image, className = '', visible, index,
}: BentoService & { visible: boolean; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={clsx('bc-wrap group', visible && 'bc-visible', className)}
      style={{
        background: NAVY,
        border: `1px solid ${BORDER}`,
        boxShadow: '0 12px 48px oklch(0 0 0 / .5)',
        display: 'flex',
        flexDirection: 'column',
        animationDelay: visible ? `${index * 0.08}s` : undefined,
      }}
    >
      {/* Border spotlight (cursor-masked lit border) */}
      <div className="bc-border" aria-hidden="true" />

      {/* Image */}
      <div className="relative shrink-0 overflow-hidden rounded-t-[20px]" style={{ height: '13rem' }}>
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="bc-image absolute inset-0 w-full h-full object-cover"
          onError={e => {
            const t = e.target as HTMLImageElement;
            t.onerror = null;
            t.src = 'https://placehold.co/800x400/0c0c14/2a2a3a';
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to bottom, transparent 25%, ${NAVY} 100%)` }}
        />
      </div>

      {/* Text */}
      <div style={{ padding: '1.25rem 1.75rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '.5rem', flex: 1 }}>
        <span style={{
          fontFamily: FM, fontSize: '.6875rem', fontWeight: 600,
          letterSpacing: '.12em', textTransform: 'uppercase' as const,
          color: BRAND,
        }}>
          {eyebrow}
        </span>
        <h3 style={{
          fontFamily: FH,
          fontSize: 'clamp(1.25rem, 2vw + .25rem, 1.75rem)',
          fontWeight: 700, letterSpacing: '-.02em', lineHeight: 1.1,
          color: TEXT_PRI,
        }}>
          {title}
        </h3>
        <p style={{
          fontFamily: FB, fontSize: '.9375rem',
          lineHeight: 1.65, color: TEXT_MUT,
          marginTop: '.25rem',
        }}>
          {description}
        </p>
      </div>

      {/* Surface spotlight — last in DOM, floats above everything */}
      <div className="bc-surface" aria-hidden="true" />
    </div>
  );
}
