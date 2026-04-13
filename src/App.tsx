import { Routes, Route, useLocation } from 'react-router'
import { useEffect } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Home } from '@/pages/Home'
import { Services } from '@/pages/Services'
import { Gallery } from '@/pages/Gallery'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/galerie"  element={<Gallery />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/contact"  element={<Contact />} />
        <Route path="*"         element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

function NotFound() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--off-white)',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <div>
        <span style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(5rem, 15vw, 10rem)',
          fontWeight: 700,
          background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          display: 'block',
          lineHeight: 1,
        }}>
          404
        </span>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1rem' }}>
          Page introuvable
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Cette page n'existe pas ou a été déplacée.
        </p>
        <a href="/" className="btn btn-gold">Retour à l'accueil</a>
      </div>
    </main>
  )
}
