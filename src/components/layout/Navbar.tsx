import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router'
import { useMobileMenu } from '@/hooks/useMobileMenu'

const NAV_LINKS = [
  { to: '/',         label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/galerie',  label: 'Galerie' },
  { to: '/a-propos', label: 'À Propos' },
  { to: '/contact',  label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { isOpen, toggle, close } = useMobileMenu()
  const { pathname } = useLocation()

  // Détecter le scroll pour changer le style de la navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fermer le menu sur changement de page
  useEffect(() => { close() }, [pathname])

  const isHome = pathname === '/'
  const solidBg = !isHome || scrolled

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'background 0.4s ease, box-shadow 0.4s ease, padding 0.3s ease',
        background: solidBg
          ? 'rgba(13, 13, 13, 0.97)'
          : 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)',
        backdropFilter: solidBg ? 'blur(12px)' : 'none',
        boxShadow: solidBg ? '0 2px 20px rgba(0,0,0,0.3)' : 'none',
        padding: scrolled ? '0.6rem 0' : '1rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center' }} aria-label="Festa Events - Accueil">
          <img
            src="/images/logo_page_sombre.png"
            alt="Festa Events"
            style={{
              height: scrolled ? '44px' : '52px',
              width: 'auto',
              transition: 'height 0.3s ease',
              filter: 'brightness(1.05)',
            }}
          />
        </NavLink>

        {/* Navigation desktop */}
        <nav aria-label="Navigation principale" style={{ display: 'flex', gap: '2.5rem' }} className="nav-desktop">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: isActive ? 'var(--gold-light)' : 'rgba(255,255,255,0.85)',
                transition: 'color 0.25s ease',
                position: 'relative',
                paddingBottom: '4px',
              })}
            >
              {({ isActive }) => (
                <>
                  {label}
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: isActive ? '100%' : '0%',
                    height: '1.5px',
                    background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
                    transition: 'width 0.3s ease',
                    borderRadius: '2px',
                  }} />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA desktop */}
        <NavLink to="/contact" className="btn btn-gold nav-cta" style={{ padding: '0.625rem 1.5rem', fontSize: '0.8125rem' }}>
          Demander un devis
        </NavLink>

        {/* Hamburger mobile */}
        <button
          onClick={toggle}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
          className="hamburger"
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            width: '44px',
            height: '44px',
            padding: '6px',
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: 'var(--gold-light)',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transformOrigin: 'center',
                transform:
                  isOpen && i === 0 ? 'rotate(45deg) translate(5px, 5px)' :
                  isOpen && i === 1 ? 'scaleX(0)' :
                  isOpen && i === 2 ? 'rotate(-45deg) translate(5px, -5px)' :
                  'none',
                opacity: isOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Menu mobile overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          top: '60px',
          background: 'rgba(13, 13, 13, 0.98)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          transition: 'opacity 0.3s ease, visibility 0.3s ease',
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          zIndex: 999,
        }}
        className="mobile-menu-overlay"
      >
        {NAV_LINKS.map(({ to, label }, idx) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            style={({ isActive }) => ({
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.6rem, 6vw, 2.2rem)',
              fontWeight: 600,
              color: isActive ? 'var(--gold-light)' : 'rgba(255,255,255,0.9)',
              transition: 'color 0.2s ease, transform 0.2s ease',
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${idx * 0.05}s`,
            })}
          >
            {label}
          </NavLink>
        ))}
        <NavLink to="/contact" className="btn btn-gold" style={{ marginTop: '1rem' }}>
          Demander un devis
        </NavLink>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (hover: hover) {
          .nav-desktop a:hover { color: var(--gold-light) !important; }
          .nav-desktop a:hover span { width: 100% !important; }
        }
      `}</style>
    </header>
  )
}
