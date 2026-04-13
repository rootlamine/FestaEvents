import { NavLink } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const SERVICES = [
  {
    img: '/images/service-traiteur.jpg',
    category: 'Gastronomie',
    title: 'Service Traiteur',
    description:
      'Des buffets raffinés et des menus sur-mesure élaborés avec passion. Chaque plat est une invitation à savourer la convivialité.',
    link: '/services#traiteur',
  },
  {
    img: '/images/service-decoration.jpg',
    category: 'Ambiance',
    title: 'Décoration',
    description:
      'Fleurs, lumières, tissus et mise en scène — nous transformons chaque espace en un décor digne de vos plus beaux rêves.',
    link: '/services#decoration',
  },
  {
    img: '/images/service-habillement.jpg',
    category: 'Style',
    title: 'Habillement & Style',
    description:
      'Conseils en image, coordination des tenues et suivi stylistique pour que vous et vos invités soyez impeccables.',
    link: '/services#habillement',
  },
]

export function ServicesSection() {
  const ref = useScrollReveal()

  return (
    <section
      id="services-section"
      ref={ref as React.RefObject<HTMLElement>}
      className="section"
      style={{ background: 'var(--off-white)' }}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header reveal">
          <span className="script-label">Ce que nous faisons</span>
          <h2 className="heading-xl" style={{ marginTop: '0.5rem' }}>Nos Services</h2>
          <span className="gold-divider gold-divider-center" style={{ marginTop: '1.25rem' }} />
          <p className="body-lg" style={{ marginTop: '1.25rem', maxWidth: '560px', marginInline: 'auto' }}>
            De la conception à la réalisation, nous prenons en charge chaque aspect de votre événement.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(1.25rem, 3vw, 2rem)',
        }}>
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i * 120} />
          ))}
        </div>

        {/* CTA voir tous */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
          <NavLink to="/services" className="btn btn-outline-gold">
            Découvrir tous nos services
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, delay }: { service: typeof SERVICES[0]; delay: number }) {
  return (
    <div
      className="reveal card-hover"
      style={{
        background: 'var(--white)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-card)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Image */}
      <div className="img-overlay" style={{ height: 'clamp(220px, 30vw, 280px)' }}>
        <img src={service.img} alt={service.title} loading="lazy" />
        {/* Category badge */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          zIndex: 2,
          background: 'rgba(13,13,13,0.75)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(201,168,76,0.4)',
          padding: '0.3rem 0.85rem',
          borderRadius: '100px',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.75rem',
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--gold-light)',
        }}>
          {service.category}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}>
        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: '0.75rem',
        }}>
          {service.title}
        </h3>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.9375rem',
          lineHeight: 1.7,
          color: 'var(--text-secondary)',
          marginBottom: '1.5rem',
        }}>
          {service.description}
        </p>
        <NavLink
          to={service.link}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.875rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: 'var(--gold-dark)',
            transition: 'gap 0.25s ease',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.gap = '0.75rem'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.gap = '0.4rem'
          }}
        >
          En savoir plus <ArrowRight size={14} />
        </NavLink>
      </div>
    </div>
  )
}
