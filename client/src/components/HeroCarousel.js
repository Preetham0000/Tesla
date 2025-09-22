import React, { useState } from 'react';

const slides = [
  {
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Promo-FTC-Desktop.png',
    headline: '$7,500 Federal Tax Credit',
    sub: 'Order by September 30 to Qualify',
    buttons: [
      { text: 'Order Model 3', link: '/models' },
      { text: 'Order Model Y', link: '/models' }
    ]
  },
  {
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Promo-Cybertruck-Desktop.png',
    headline: 'Experience Tesla',
    sub: 'Drive the future today',
    buttons: [
      { text: 'Book a Test Drive', link: '/signup' }
    ]
  },
  {
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Promo-Model-3-Desktop-US-July.png',
    headline: 'Charging Made Easy',
    sub: 'Superchargers across the country',
    buttons: [
      { text: 'Find a Charger', link: '/discover' }
    ]
  }
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const goTo = idx => setCurrent(idx);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);
  const next = () => setCurrent((current + 1) % slides.length);

  return (
    <section style={{ position: 'relative', width: '100vw', minHeight: '70vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
      <img
        src={slides[current].image}
        alt={slides[current].headline}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg,rgba(0,0,0,0.15) 60%,rgba(0,0,0,0.5) 100%)',
        zIndex: 1
      }} />
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        color: '#fff',
        width: '100%',
        maxWidth: 900,
        margin: '0 auto',
        padding: '7vw 2vw 0 2vw',
        
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
  <h1 style={{ fontSize: 'clamp(1.5rem,4vw,2.5rem)', fontWeight: 700, marginBottom: 10, letterSpacing: '-1px' }}>{slides[current].headline}</h1>
  <p style={{ fontSize: '1rem', fontWeight: 400, marginBottom: 20, opacity: 0.95 }}>{slides[current].sub}</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
          {slides[current].buttons.map((btn, i) => (
            <a key={i} href={btn.link} style={{ background: '#3957ff', color: '#fff', fontWeight: 600, fontSize: '1.1rem', borderRadius: 6, padding: '14px 40px', border: 'none', textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>{btn.text}</a>
          ))}
        </div>
      </div>
      {/* Carousel Controls */}
      <button onClick={prev} style={{ position: 'absolute', left: 32, top: '50%', transform: 'translateY(-50%)', zIndex: 3, background: '#fff', border: 'none', borderRadius: 8, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', cursor: 'pointer', fontSize: 28 }} aria-label="Previous Slide">&#8592;</button>
      <button onClick={next} style={{ position: 'absolute', right: 32, top: '50%', transform: 'translateY(-50%)', zIndex: 3, background: '#fff', border: 'none', borderRadius: 8, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', cursor: 'pointer', fontSize: 28 }} aria-label="Next Slide">&#8594;</button>
      {/* Dots */}
      <div style={{ position: 'absolute', bottom: 24, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 12, zIndex: 3 }}>
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => goTo(idx)} style={{ width: 14, height: 14, borderRadius: '50%', background: current === idx ? '#fff' : 'rgba(255,255,255,0.4)', border: 'none', cursor: 'pointer' }} aria-label={`Go to slide ${idx+1}`}></button>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
