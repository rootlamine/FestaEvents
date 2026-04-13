import { NavLink } from 'react-router'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

const SLIDES = [
  {
    img: '/images/hero-decoration.jpg',
    // image paysage : centrer légèrement en haut pour montrer les chaises
    objectPosition: 'center 40%',
    label: 'Décoration',
    title: 'Créons ensemble\ndes instants',
    accent: 'inoubliables',
    sub: 'Des événements uniques, pensés dans les moindres détails pour sublimer chaque moment de votre vie.',
  },
  {
    img: '/images/hero-traiteur.jpg',
    // image paysage : centrer pour montrer tout le buffet
    objectPosition: 'center 35%',
    label: 'Traiteur',
    title: 'Une cuisine qui\némerveillle',
    accent: 'les papilles',
    sub: 'Buffets raffinés, dressages élégants — notre service traiteur élève chaque repas en expérience.',
  },
  {
    img: '/images/hero-habillement.jpg',
    // image portrait : centrer sur les visages
    objectPosition: 'center 20%',
    label: 'Habillement',
    title: 'L\'élégance au\ncœur de',
    accent: 'votre événement',
    sub: 'Conseils stylistiques, tenues coordonnées et looks soignés pour vous et vos invités.',
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % SLIDES.length)
        setTransitioning(false)
      }, 600)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const slide = SLIDES[current]

  const scrollDown = () => {
    const next = document.getElementById('services-section')
    if (next) next.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      style={{
        position: 'relative',
        height: '100svh',
        maxHeight: '860px',
        minHeight: '560px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
      aria-label="Bannière principale"
    >
      {/* Images de fond avec transition */}
      {SLIDES.map((s, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: idx === current ? 1 : 0,
            transition: 'opacity 0.8s ease',
            zIndex: 0,
            background: '#0a0a0a',
          }}
        >
          <img
            src={s.img}
            alt=""
            role="presentation"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: s.objectPosition,
              // Légère réduction du zoom : l'image remplit le conteneur
              // sans être étirée au-delà de ses dimensions naturelles
              transform: 'scale(1)',
            }}
          />
        </div>
      ))}

      {/* Overlay dégradé */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(105deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.2) 100%)',
        zIndex: 1,
      }} />

      {/* Ligne décorative verticale */}
      <div style={{
        position: 'absolute',
        left: 'clamp(1rem, 4vw, 2.5rem)',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '2px',
        height: '120px',
        background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)',
        zIndex: 2,
      }} />

      {/* Contenu */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          paddingTop: '80px',
          opacity: transitioning ? 0 : 1,
          transform: transitioning ? 'translateY(12px)' : 'translateY(0)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}
      >
        <div style={{ maxWidth: 'min(680px, 90vw)' }}>
          {/* Label de service */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.25rem',
          }}>
            <span style={{ width: '40px', height: '1.5px', background: 'var(--gold)' }} />
            <span style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              color: 'var(--gold-light)',
            }}>
              {slide.label}
            </span>
          </div>

          {/* Titre */}
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            fontWeight: 600,
            lineHeight: 1.08,
            color: '#FFFFFF',
            marginBottom: '0.15em',
            whiteSpace: 'pre-line',
          }}>
            {slide.title}
          </h1>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            fontWeight: 600,
            lineHeight: 1.08,
            background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1.5rem',
          }}>
            {slide.accent}
          </h1>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
            color: 'rgba(255,255,255,0.78)',
            lineHeight: 1.7,
            maxWidth: '520px',
            marginBottom: '2.5rem',
          }}>
            {slide.sub}
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <NavLink to="/contact" className="btn btn-gold">
              Demander un devis
            </NavLink>
            <NavLink to="/galerie" className="btn btn-outline-white">
              Voir la galerie
            </NavLink>
          </div>
        </div>

        {/* Indicateurs de slides */}
        <div style={{
          position: 'absolute',
          bottom: '-40px',
          left: 'clamp(1rem, 4vw, 2.5rem)',
          display: 'flex',
          gap: '0.5rem',
        }}>
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Slide ${idx + 1}`}
              style={{
                width: idx === current ? '32px' : '8px',
                height: '3px',
                borderRadius: '2px',
                background: idx === current ? 'var(--gold)' : 'rgba(255,255,255,0.35)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.4s ease',
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll down indicator */}
      <button
        onClick={scrollDown}
        aria-label="Défiler vers le bas"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          color: 'rgba(255,255,255,0.6)',
          animation: 'float 2s ease-in-out infinite',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <span style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-sans)' }}>
          Découvrir
        </span>
        <ChevronDown size={20} />
      </button>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  )
}
