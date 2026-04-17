import { NavLink } from 'react-router'
import { Phone, Mail, ArrowRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function ContactCTA() {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Background avec dégradé doré */}
      <div style={{
        background: 'linear-gradient(135deg, var(--dark) 0%, var(--dark-800) 50%, #1a1400 100%)',
        padding: 'clamp(4rem, 8vw, 7rem) 0',
      }}>
        {/* Motif décoratif */}
        <div style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          border: '60px solid rgba(201,168,76,0.06)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-40px',
          left: '-40px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: '40px solid rgba(201,168,76,0.05)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 'clamp(3rem, 6vw, 5rem)',
            alignItems: 'center',
          }}>
            {/* Texte */}
            <div className="reveal">
              <span className="script-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                Parlons de votre projet
              </span>
              <h2 className="heading-xl" style={{ color: 'var(--white)', marginBottom: '1.25rem' }}>
                Transformons votre rêve en réalité
              </h2>
              <span className="gold-divider" style={{ marginBottom: '1.75rem' }} />
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 1.5vw, 1.0625rem)',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.65)',
                marginBottom: '2.5rem',
                maxWidth: '480px',
              }}>
                Chaque grand événement commence par une conversation. Contactez-nous dès aujourd'hui et laissez-nous créer quelque chose d'exceptionnel ensemble.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <NavLink to="/contact" className="btn btn-gold">
                  Prendre contact
                  <ArrowRight size={16} />
                </NavLink>
                <a href="tel:+221773378554" className="btn btn-outline-white">
                  <Phone size={16} />
                  Appeler maintenant
                </a>
              </div>
            </div>

            {/* Contact cards */}
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', transitionDelay: '150ms' }}>
              <ContactCard
                icon={<Phone size={22} />}
                title="Téléphone"
                primary="+221 77 337 85 54"
                secondary="Disponible 7j/7, 8h–20h"
                href="tel:+221773378554"
              />
              <ContactCard
                icon={<Mail size={22} />}
                title="Email"
                primary="festaevents.sn@gmail.com"
                secondary="Réponse sous 24h"
                href="mailto:festaevents.sn@gmail.com"
              />

              {/* Garanties */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                marginTop: '0.25rem',
              }}>
                {['Devis gratuit', 'Sans engagement', 'Sur-mesure', 'Réponse rapide'].map((text) => (
                  <div
                    key={text}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--gold)',
                      flexShrink: 0,
                    }} />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({
  icon, title, primary, secondary, href,
}: {
  icon: React.ReactNode
  title: string
  primary: string
  secondary: string
  href: string
}) {
  return (
    <a
      href={href}
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        padding: '1.25rem 1.5rem',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(201,168,76,0.2)',
        borderRadius: 'var(--radius-md)',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.background = 'rgba(201,168,76,0.08)'
        el.style.borderColor = 'rgba(201,168,76,0.5)'
        el.style.transform = 'translateX(4px)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.background = 'rgba(255,255,255,0.04)'
        el.style.borderColor = 'rgba(201,168,76,0.2)'
        el.style.transform = 'translateX(0)'
      }}
    >
      <div style={{
        flexShrink: 0,
        width: '48px',
        height: '48px',
        borderRadius: 'var(--radius-md)',
        background: 'rgba(201,168,76,0.12)',
        border: '1px solid rgba(201,168,76,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--gold)',
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '2px' }}>
          {title}
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.0625rem', fontWeight: 600, color: 'var(--white)', marginBottom: '2px' }}>
          {primary}
        </div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)' }}>
          {secondary}
        </div>
      </div>
    </a>
  )
}
