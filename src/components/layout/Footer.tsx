import { NavLink } from 'react-router'
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'

const NAV_LINKS = [
  { to: '/',         label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/galerie',  label: 'Galerie' },
  { to: '/a-propos', label: 'À Propos' },
  { to: '/contact',  label: 'Contact' },
]

const SERVICES = [
  //'Organisation de mariages',
  'Décoration d\'événements',
  'Service traiteur',
  'Conseil en habillement',
  //'Événements corporate',
  //'Fêtes & anniversaires',
]

export function Footer() {
  return (
    <footer style={{ background: 'var(--dark)', color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-sans)' }}>
      {/* Barre dorée décorative */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent)' }} />

      <div className="container" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 'clamp(2rem, 4vw, 3.5rem)',
          marginBottom: 'clamp(2rem, 4vw, 3rem)',
        }}>

          {/* Colonne 1 : Brand */}
          <div>
            <NavLink to="/">
              <img src="/images/logo_page_sombre.png" alt="Festa Events" style={{ height: '50px', width: 'auto', marginBottom: '1.25rem' }} />
            </NavLink>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem', maxWidth: '280px' }}>
              Votre partenaire de confiance pour des événements inoubliables. Chaque moment compte, chaque détail est soigné.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={socialStyle}>
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={socialStyle}>
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div>
            <FooterHeading>Navigation</FooterHeading>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--gold-light)' }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.6)' }}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Services */}
          <div>
            <FooterHeading>Nos Services</FooterHeading>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {SERVICES.map((s) => (
                <li key={s} style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div>
            <FooterHeading>Contact</FooterHeading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ContactItem icon={<MapPin size={16} />}>
                Dakar, Liberte 6
              </ContactItem>
              <ContactItem icon={<Phone size={16} />}>
                <a href="tel:+221773378554" style={{ color: 'inherit' }}>+221 77 337 85 54</a>
              </ContactItem>
              <ContactItem icon={<Mail size={16} />}>
                <a href="mailto:festaevents.sn@gmail.com" style={{ color: 'inherit' }}>festaevents.sn@gmail.com</a>
              </ContactItem>
            </div>

            {/* Badge disponibilité */}
            <div style={{
              marginTop: '1.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: '100px',
              border: '1px solid rgba(201,168,76,0.3)',
              fontSize: '0.8125rem',
              color: 'var(--gold-light)',
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4CAF50', boxShadow: '0 0 6px #4CAF50' }} />
              Disponible 7j/7
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} Festa Events. Tous droits réservés.
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)' }}>
            Conçu avec soin pour des moments inoubliables ✦
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <h3 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '1.125rem',
        fontWeight: 600,
        color: 'var(--gold-light)',
        marginBottom: '0.5rem',
      }}>
        {children}
      </h3>
      <span style={{ display: 'block', width: '30px', height: '1.5px', background: 'var(--gold)', borderRadius: '2px' }} />
    </div>
  )
}

function ContactItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)' }}>
      <span style={{ color: 'var(--gold)', marginTop: '2px', flexShrink: 0 }}>{icon}</span>
      <span>{children}</span>
    </div>
  )
}

const socialStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '38px',
  height: '38px',
  borderRadius: '50%',
  border: '1px solid rgba(201,168,76,0.35)',
  color: 'var(--gold)',
  transition: 'all 0.25s ease',
}
