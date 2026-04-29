import React, { useState, useEffect, useRef } from 'react';

export interface Slide {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
}

interface Props {
  slides: Slide[];
  id?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function ScrollingFeatureShowcase({ slides, id, ctaLabel = 'Get Started', ctaHref = '#' }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const stickyPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollableHeight = container.scrollHeight - window.innerHeight;
      const stepHeight = scrollableHeight / slides.length;
      const newActiveIndex = Math.min(
        slides.length - 1,
        Math.floor(container.scrollTop / stepHeight)
      );
      setActiveIndex(newActiveIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [slides.length]);

  const dynamicStyles: React.CSSProperties = {
    backgroundColor: slides[activeIndex].bgColor,
    color: slides[activeIndex].textColor,
    transition: 'background-color 0.7s ease, color 0.7s ease',
  };

  const gridPatternStyle = {
    '--grid-color': 'rgba(255, 255, 255, 0.06)',
    backgroundImage: `
      linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
      linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
    `,
    backgroundSize: '3.5rem 3.5rem',
  } as React.CSSProperties;

  return (
    <div
      id={id}
      ref={scrollContainerRef}
      className="h-screen w-full overflow-y-auto"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
    >
      <div style={{ height: `${slides.length * 100}vh` }}>
        <div
          ref={stickyPanelRef}
          className="sticky top-0 h-screen w-full flex flex-col items-center justify-center"
          style={dynamicStyles}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full max-w-7xl mx-auto">

            {/* Left Column */}
            <div className="relative flex flex-col justify-center p-8 md:p-16 border-r border-white/10">
              <div className="absolute top-16 left-16 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const container = scrollContainerRef.current;
                      if (container) {
                        const scrollableHeight = container.scrollHeight - window.innerHeight;
                        const stepHeight = scrollableHeight / slides.length;
                        container.scrollTo({ top: stepHeight * index, behavior: 'smooth' });
                      }
                    }}
                    className={`h-1 rounded-full transition-all duration-500 ease-in-out ${
                      index === activeIndex ? 'w-12 bg-white/80' : 'w-6 bg-white/20'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="relative h-64 w-full">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === activeIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight">{slide.title}</h2>
                    <p className="mt-6 text-lg md:text-xl max-w-md opacity-70">{slide.description}</p>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-16 left-16">
                <a
                  href={ctaHref}
                  className="px-10 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-full uppercase tracking-wider hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  {ctaLabel}
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="hidden md:flex items-center justify-center p-8" style={gridPatternStyle}>
              <div className="relative w-[50%] h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <div
                  className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateY(-${activeIndex * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div key={index} className="w-full h-full">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = 'https://placehold.co/800x1200/1a1f2e/4a5568?text=Image';
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
  );
}
