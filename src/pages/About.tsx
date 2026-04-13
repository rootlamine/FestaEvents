import { PageBanner } from '@/components/ui/PageBanner'
import { NavLink } from 'react-router'
import { ArrowRight, Sparkles, Users, Target, Shield } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const TEAM = [
  { name: 'Directrice Générale', role: 'Événementiel & Stratégie', img: '/images/banner-apropos.png' },
]

const VALUES = [
  {
    icon: <Sparkles size={24} />,
    title: 'Créativité',
    text: 'Nous repoussons les limites de l\'imagination pour créer des expériences uniques et mémorables.',
  },
  {
    icon: <Users size={24} />,
    title: 'Proximité',
    text: 'Nous construisons une relation de confiance avec chaque client, en étant à votre écoute à chaque étape.',
  },
  {
    icon: <Target size={24} />,
    title: 'Précision',
    text: 'Chaque détail compte. De la première esquisse à la dernière minute de l\'événement, rien n\'est laissé au hasard.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Fiabilité',
    text: 'Nous tenons nos engagements. Ponctualité, transparence et rigueur sont les fondements de notre travail.',
  },
]

const TIMELINE = [
  { year: '2019', title: 'Création', text: 'Fondation de Festa Events à Dakar avec une vision claire : révolutionner l\'événementiel au Sénégal.' },
  { year: '2020', title: 'Premiers succès', text: 'Organisation de plus de 50 événements malgré le contexte mondial difficile, prouvant notre résilience.' },
  { year: '2022', title: 'Expansion', text: 'Lancement de notre service traiteur et ouverture de notre studio de décoration.' },
  { year: '2024', title: 'Excellence', text: 'Plus de 300 événements réalisés avec un taux de satisfaction client de 98%.' },
]

export function About() {
  const ref = useScrollReveal()

  return (
    <main ref={ref as React.RefObject<HTMLElement>}>
      <PageBanner
        img="/images/banner-apropos.png"
        title="À Propos de Nous"
        subtitle="L'histoire d'une passion pour les moments exceptionnels."
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'À Propos' }]}
        objectPosition="center 65%"
      />

      {/* Mission */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'center',
          }}>
            <div className="reveal">
              <span className="script-label" style={{ display: 'block', marginBottom: '0.5rem' }}>Notre mission</span>
              <h2 className="heading-xl" style={{ marginBottom: '1.25rem' }}>
                Créer des souvenirs qui durent toute une vie
              </h2>
              <span className="gold-divider" style={{ marginBottom: '1.75rem' }} />
              <p className="body-lg" style={{ marginBottom: '1.25rem' }}>
                Chez Festa Events, nous croyons que les grands moments de la vie méritent une mise en scène à la hauteur de leur importance. Depuis notre création, nous avons accompagné des centaines de familles et d'entreprises dans la réalisation de leurs événements les plus précieux.
              </p>
              <p className="body-lg" style={{ marginBottom: '2rem' }}>
                Notre équipe multidisciplinaire — coordinateurs, designers, stylistes, traiteurs — travaille en parfaite synergie pour vous offrir une expérience sans stress et inoubliable.
              </p>
              <NavLink to="/contact" className="btn btn-gold">
                Travailler avec nous
                <ArrowRight size={16} />
              </NavLink>
            </div>

            <div className="reveal" style={{ transitionDelay: '150ms' }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '4/3', boxShadow: 'var(--shadow-card-hover)' }}>
                <img
                  src="/images/banner-apropos.png"
                  alt="L'équipe Festa Events au travail"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-header reveal">
            <span className="script-label">Ce qui nous définit</span>
            <h2 className="heading-xl" style={{ marginTop: '0.5rem' }}>Nos Valeurs</h2>
            <span className="gold-divider gold-divider-center" style={{ marginTop: '1.25rem' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: 'clamp(1.25rem, 3vw, 2rem)',
          }}>
            {VALUES.map((val, i) => (
              <div
                key={val.title}
                className="reveal card-hover"
                style={{
                  padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  background: 'var(--white)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-card)',
                  transitionDelay: `${i * 100}ms`,
                  borderTop: '3px solid var(--gold)',
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--gold-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-dark)',
                  marginBottom: '1.25rem',
                }}>
                  {val.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.375rem',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                  color: 'var(--text-primary)',
                }}>
                  {val.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                }}>
                  {val.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="section-header reveal">
            <span className="script-label">Notre parcours</span>
            <h2 className="heading-xl" style={{ marginTop: '0.5rem', color: 'var(--white)' }}>
              Notre Histoire
            </h2>
            <span className="gold-divider gold-divider-center" style={{ marginTop: '1.25rem' }} />
          </div>

          <div style={{ position: 'relative', maxWidth: '800px', marginInline: 'auto' }}>
            {/* Ligne verticale */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, transparent, var(--gold) 10%, var(--gold) 90%, transparent)',
              transform: 'translateX(-50%)',
            }} />

            {TIMELINE.map((item, i) => (
              <div
                key={item.year}
                className="reveal"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 60px 1fr',
                  gap: '1.5rem',
                  alignItems: 'center',
                  marginBottom: i < TIMELINE.length - 1 ? '3rem' : 0,
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                {/* Contenu gauche (pair) ou vide */}
                {i % 2 === 0 ? (
                  <div style={{ textAlign: 'right' }}>
                    <TimelineCard item={item} />
                  </div>
                ) : <div />}

                {/* Point central */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'var(--dark-800)',
                    border: '2px solid var(--gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--gold)',
                    zIndex: 1,
                  }}>
                    {item.year.slice(2)}
                  </div>
                </div>

                {/* Contenu droite (impair) ou vide */}
                {i % 2 !== 0 ? (
                  <div>
                    <TimelineCard item={item} />
                  </div>
                ) : <div />}
              </div>
            ))}
          </div>

          {/* Timeline responsive mobile */}
          <style>{`
            @media (max-width: 640px) {
              .timeline-grid {
                grid-template-columns: 40px 1fr !important;
              }
            }
          `}</style>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--gold-subtle)', textAlign: 'center' }}>
        <div className="container reveal">
          <span className="script-label" style={{ color: 'var(--gold-dark)', display: 'block', marginBottom: '0.5rem' }}>
            Rejoignez l'aventure
          </span>
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
            Votre prochain événement mérite le meilleur
          </h2>
          <p className="body-lg" style={{ maxWidth: '440px', marginInline: 'auto', marginBottom: '2rem' }}>
            Contactez-nous pour une consultation gratuite et sans engagement.
          </p>
          <NavLink to="/contact" className="btn btn-gold">
            Nous contacter
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </section>
    </main>
  )
}

function TimelineCard({ item }: { item: typeof TIMELINE[0] }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(201,168,76,0.2)',
      borderRadius: 'var(--radius-md)',
      padding: '1.25rem 1.5rem',
    }}>
      <span style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '1.5rem',
        fontWeight: 700,
        color: 'var(--gold)',
        display: 'block',
        marginBottom: '0.25rem',
      }}>{item.year}</span>
      <h4 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '1.125rem',
        fontWeight: 600,
        color: 'var(--white)',
        marginBottom: '0.5rem',
      }}>{item.title}</h4>
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '0.875rem',
        color: 'rgba(255,255,255,0.55)',
        lineHeight: 1.6,
      }}>{item.text}</p>
    </div>
  )
}
