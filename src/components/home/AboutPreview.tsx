import { NavLink } from 'react-router'
import { ArrowRight, Star, Heart, Award } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const STATS = [
  { value: '3+',   label: 'Années d\'expérience' },
  { value: '50+',  label: 'Événements réalisés' },
  { value: '98%',  label: 'Clients satisfaits' },
  { value: '4',    label: 'Pôles d\'expertise' },
]

const VALUES = [
  { icon: <Star size={20} />, title: 'Excellence', text: 'Chaque détail est soigné pour dépasser vos attentes.' },
  { icon: <Heart size={20} />, title: 'Passion', text: 'Nous mettons tout notre cœur dans chaque événement.' },
  { icon: <Award size={20} />, title: 'Professionnalisme', text: 'Rigueur, ponctualité et sens du service sont nos piliers.' },
]

export function AboutPreview() {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section"
      style={{ background: 'var(--white)', overflow: 'hidden' }}
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'center',
        }}>
          {/* Colonne image */}
          <div className="reveal" style={{ position: 'relative' }}>
            {/* Image principale */}
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-card-hover)',
              aspectRatio: '4/5',
            }}>
              <img
                src="/images/banner-apropos.png"
                alt="L'équipe Festa Events dans leur bureau"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>

            {/* Badge flottant */}
            <div style={{
              position: 'absolute',
              bottom: '-1.5rem',
              right: '-1.5rem',
              background: 'var(--dark)',
              border: '2px solid var(--gold)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem 1.5rem',
              textAlign: 'center',
              boxShadow: 'var(--shadow-gold)',
              minWidth: '140px',
            }}>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.5rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1,
                display: 'block',
              }}>3+</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.7)', marginTop: '4px', display: 'block' }}>
                Ans d'expérience
              </span>
            </div>

            {/* Décor doré */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              width: '80px',
              height: '80px',
              border: '2px solid var(--gold)',
              borderRadius: 'var(--radius-md)',
              opacity: 0.25,
              zIndex: -1,
            }} />
          </div>

          {/* Colonne texte */}
          <div className="reveal" style={{ transitionDelay: '150ms' }}>
            <span className="script-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Notre histoire
            </span>
            <h2 className="heading-xl" style={{ marginBottom: '1.25rem' }}>
              Qui sommes-nous ?
            </h2>
            <span className="gold-divider" style={{ marginBottom: '1.75rem' }} />

            <p className="body-lg" style={{ marginBottom: '1.25rem' }}>
              Festa Events est une agence événementielle sénégalaise fondée par une équipe passionnée et créative. Nous croyons que chaque événement est une histoire unique qui mérite d'être racontée avec élégance.
            </p>
            <p className="body-lg" style={{ marginBottom: '2rem' }}>
              Mariage, anniversaire, événement corporate, soirée privée — nous concevons des expériences sur-mesure qui reflètent votre personnalité et dépassent vos attentes.
            </p>

            {/* Valeurs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {VALUES.map((v) => (
                <div key={v.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: 0,
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--gold-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-dark)',
                  }}>
                    {v.icon}
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.0625rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>
                      {v.title}
                    </h4>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {v.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <NavLink to="/a-propos" className="btn btn-gold">
              Découvrir notre équipe
              <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="reveal"
          style={{
            marginTop: 'clamp(4rem, 8vw, 6rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1px',
            background: 'var(--cream)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              style={{
                background: 'var(--white)',
                padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 1.5rem)',
                textAlign: 'center',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block',
                lineHeight: 1.1,
              }}>
                {s.value}
              </span>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.8125rem, 1.2vw, 0.9375rem)',
                color: 'var(--text-secondary)',
                marginTop: '0.4rem',
                display: 'block',
              }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
