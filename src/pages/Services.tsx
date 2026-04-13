import { useScrollReveal } from '@/hooks/useScrollReveal'
import { PageBanner } from '@/components/ui/PageBanner'
import { NavLink } from 'react-router'
import { CheckCircle, ArrowRight } from 'lucide-react'

const SERVICES_DATA = [
  {
    id: 'traiteur',
    img: '/images/service-traiteur.jpg',
    category: 'Gastronomie',
    title: 'Service Traiteur',
    description: `Notre service traiteur propose des buffets raffinés et des menus sur-mesure élaborés avec passion. Nous collaborons avec des chefs expérimentés pour vous offrir une expérience culinaire inoubliable.`,
    features: [
      'Menus personnalisés selon vos goûts',
      'Buffets chauds et froids élaborés',
      'Service à l\'assiette pour les dîners formels',
      'Cocktails et apéritifs de prestige',
      'Animations culinaires (live cooking)',
      'Matériel de service fourni',
    ],
    reversed: false,
  },
  {
    id: 'decoration',
    img: '/images/service-decoration.jpg',
    category: 'Ambiance & Design',
    title: 'Décoration',
    description: `Nous transformons chaque espace en un lieu magique. Fleurs fraîches, drapés, éclairages LED, centres de table — notre équipe crée l'ambiance qui correspond exactement à votre vision.`,
    features: [
      'Conception et scénographie complète',
      'Décoration florale fraîche ou artificielle',
      'Lighting design et éclairage d\'ambiance',
      'Arches, allées et entrées décoratives',
      'Tables d\'honneur et centres de table',
      'Décor personnalisé aux couleurs de l\'événement',
    ],
    reversed: true,
  },
  {
    id: 'habillement',
    img: '/images/service-habillement.jpg',
    category: 'Style & Image',
    title: 'Habillement & Conseil Stylistique',
    description: `De la coordination des tenues au conseil personnel en image, nous veillons à ce que vous et vos invités soyez impeccables. Notre équipe de stylistes vous accompagne de A à Z.`,
    features: [
      'Conseil en image et coordination de tenues',
      'Location et confection de tenues sur-mesure',
      'Coordination des couleurs des cortèges',
      'Accessoires : coiffes, voiles, bijoux',
      'Habillage et préparatifs du jour J',
      'Styling photo et vidéo',
    ],
    reversed: false,
  },
]

const PROCESS = [
  { num: '01', title: 'Consultation', desc: 'Premier rendez-vous gratuit pour comprendre vos besoins et votre vision.' },
  { num: '02', title: 'Proposition', desc: 'Nous élaborons une proposition détaillée et personnalisée avec devis.' },
  { num: '03', title: 'Planification', desc: 'Coordination de tous les prestataires et planning minutieux du déroulé.' },
  { num: '04', title: 'Réalisation', desc: 'Notre équipe assure la mise en place et gère l\'événement de bout en bout.' },
]

export function Services() {
  const ref = useScrollReveal()

  return (
    <main ref={ref as React.RefObject<HTMLElement>}>
      <PageBanner
        img="/images/service-decoration.jpg"
        title="Nos Services"
        subtitle="Des prestations haut de gamme pour chaque type d'événement."
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Services' }]}
      />

      {/* Services détaillés */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          {SERVICES_DATA.map((service, i) => (
            <ServiceBlock key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* Notre processus */}
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="section-header reveal">
            <span className="script-label">Comment ça marche</span>
            <h2 className="heading-xl" style={{ marginTop: '0.5rem', color: 'var(--white)' }}>
              Notre Processus
            </h2>
            <span className="gold-divider gold-divider-center" style={{ marginTop: '1.25rem' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}>
            {PROCESS.map((step, i) => (
              <div
                key={step.num}
                className="reveal"
                style={{
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(201,168,76,0.18)',
                  borderRadius: 'var(--radius-lg)',
                  transitionDelay: `${i * 100}ms`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '0.5rem',
                  right: '0.75rem',
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                  fontWeight: 700,
                  color: 'rgba(201,168,76,0.08)',
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}>
                  {step.num}
                </div>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '0.75rem',
                }}>
                  Étape {step.num}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.375rem',
                  fontWeight: 600,
                  color: 'var(--white)',
                  marginBottom: '0.75rem',
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--gold-subtle)', textAlign: 'center' }}>
        <div className="container reveal">
          <span className="script-label" style={{ color: 'var(--gold-dark)', display: 'block', marginBottom: '0.5rem' }}>
            Prêt à commencer ?
          </span>
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
            Discutons de votre projet
          </h2>
          <p className="body-lg" style={{ maxWidth: '480px', marginInline: 'auto', marginBottom: '2rem' }}>
            Devis gratuit et sans engagement. Nous répondons sous 24h.
          </p>
          <NavLink to="/contact" className="btn btn-gold">
            Demander un devis gratuit
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </section>
    </main>
  )
}

function ServiceBlock({ service, index }: { service: typeof SERVICES_DATA[0]; index: number }) {
  const isReversed = service.reversed

  return (
    <div
      id={service.id}
      className="reveal"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
        gap: 'clamp(2.5rem, 5vw, 4.5rem)',
        alignItems: 'center',
        marginBottom: index < 2 ? 'clamp(4rem, 8vw, 7rem)' : 0,
        direction: isReversed ? 'rtl' : 'ltr',
        transitionDelay: '100ms',
      }}
    >
      {/* Image */}
      <div style={{ direction: 'ltr', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-card-hover)', aspectRatio: '4/3' }}>
        <img
          src={service.img}
          alt={service.title}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
          onMouseEnter={(e) => { (e.target as HTMLImageElement).style.transform = 'scale(1.04)' }}
          onMouseLeave={(e) => { (e.target as HTMLImageElement).style.transform = 'scale(1)' }}
        />
      </div>

      {/* Texte */}
      <div style={{ direction: 'ltr' }}>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          display: 'block',
          marginBottom: '0.75rem',
        }}>
          {service.category}
        </span>
        <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>{service.title}</h2>
        <span className="gold-divider" style={{ marginBottom: '1.5rem' }} />
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.9375rem',
          lineHeight: 1.8,
          color: 'var(--text-secondary)',
          marginBottom: '1.75rem',
        }}>
          {service.description}
        </p>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2rem' }}>
          {service.features.map((f) => (
            <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
              <CheckCircle size={16} style={{ color: 'var(--gold)', flexShrink: 0 }} />
              {f}
            </li>
          ))}
        </ul>

        <NavLink to="/contact" className="btn btn-outline-gold">
          Demander ce service
          <ArrowRight size={15} />
        </NavLink>
      </div>
    </div>
  )
}
