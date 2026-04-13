import { NavLink } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const PREVIEW_IMAGES = [
  { src: '/images/gallery/mariage/mariage-2.jpg',        alt: 'Mariage élégant',         span: 'large' },
  { src: '/images/gallery/decoration/decoration-1.jpg',  alt: 'Décoration florale',       span: 'small' },
  { src: '/images/gallery/anniversaire/anniversaire-2.jpg', alt: 'Anniversaire festif',   span: 'small' },
  { src: '/images/gallery/buffet/buffet-1.jpg',          alt: 'Buffet gastronomique',     span: 'medium' },
  { src: '/images/gallery/professionnel/pro-1.jpg',      alt: 'Événement professionnel',  span: 'medium' },
]

export function GalleryPreview() {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section"
      style={{ background: 'var(--dark)', overflow: 'hidden' }}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header reveal">
          <span className="script-label">Notre portfolio</span>
          <h2 className="heading-xl" style={{ marginTop: '0.5rem', color: 'var(--white)' }}>
            Nos Réalisations
          </h2>
          <span className="gold-divider gold-divider-center" style={{ marginTop: '1.25rem' }} />
          <p style={{
            marginTop: '1.25rem',
            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '520px',
            marginInline: 'auto',
          }}>
            Chaque photo raconte une histoire. Laissez-vous inspirer par nos créations.
          </p>
        </div>

        {/* Grille masonry responsive */}
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(2, 260px)',
            gap: '1rem',
          }}
        >
          {/* Grande image gauche */}
          <GalleryItem img={PREVIEW_IMAGES[0]} style={{ gridColumn: '1', gridRow: '1 / 3' }} />
          {/* Petite image haut milieu */}
          <GalleryItem img={PREVIEW_IMAGES[1]} style={{ gridColumn: '2', gridRow: '1' }} />
          {/* Petite image haut droite */}
          <GalleryItem img={PREVIEW_IMAGES[2]} style={{ gridColumn: '3', gridRow: '1' }} />
          {/* Large image bas milieu-droite */}
          <GalleryItem img={PREVIEW_IMAGES[3]} style={{ gridColumn: '2', gridRow: '2' }} />
          <GalleryItem img={PREVIEW_IMAGES[4]} style={{ gridColumn: '3', gridRow: '2' }} />
        </div>

        {/* CTA */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
          <NavLink to="/galerie" className="btn btn-gold">
            Voir toute la galerie
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: repeat(3, 200px) !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }
          .gallery-grid > div {
            grid-column: 1 !important;
            grid-row: auto !important;
            height: 220px !important;
          }
        }
      `}</style>
    </section>
  )
}

function GalleryItem({ img, style }: { img: { src: string; alt: string }; style: React.CSSProperties }) {
  return (
    <div
      style={{
        ...style,
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
      }}
    >
      <div className="img-overlay" style={{ width: '100%', height: '100%' }}>
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
        />
        {/* Caption overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '1rem',
          zIndex: 2,
          transition: 'opacity 0.3s ease',
        }}>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '0.9375rem',
            color: 'rgba(255,255,255,0.9)',
            fontStyle: 'italic',
          }}>
            {img.alt}
          </span>
        </div>
      </div>
    </div>
  )
}
