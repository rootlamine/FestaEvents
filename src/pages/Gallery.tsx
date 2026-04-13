import { useState, useCallback } from 'react'
import { PageBanner } from '@/components/ui/PageBanner'
import { X } from 'lucide-react'

type Category = 'tous' | 'mariage' | 'anniversaire' | 'buffet' | 'decoration' | 'professionnel'

const FILTERS: Array<{ key: Category; label: string }> = [
  { key: 'tous',          label: 'Tous' },
  { key: 'mariage',       label: 'Mariage' },
  { key: 'anniversaire',  label: 'Anniversaire' },
  { key: 'buffet',        label: 'Traiteur' },
  { key: 'decoration',    label: 'Décoration' },
  { key: 'professionnel', label: 'Professionnel' },
]

const GALLERY_ITEMS = [
  // ── Mariage ────────────────────────────────────────────────────
  { src: '/images/gallery/mariage/mariage-1.jpg',         alt: 'Décoration florale mariage',          category: 'mariage' as Category },
  { src: '/images/gallery/mariage/mariage-2.jpg',         alt: 'Organisation complète de mariage',    category: 'mariage' as Category },
  { src: '/images/gallery/mariage/mariage-3.jpg',         alt: 'Cérémonie romantique',                category: 'mariage' as Category },
  { src: '/images/gallery/2022-06-07.jpg',                alt: 'Backdrop floral blanc',               category: 'mariage' as Category },
  { src: '/images/gallery/2826a2a6-50d8-4674-91bf-67038623f283.png', alt: 'Salle de réception rose gold', category: 'mariage' as Category },
  { src: '/images/gallery/55db5b1e-1ad2-4e86-bef0-cf6e84c1b62c.png', alt: 'Mariée rayonnante',        category: 'mariage' as Category },
  { src: '/images/gallery/69575b19-541f-4788-82ba-c5f37a5ec78b.png', alt: 'Demoiselles d\'honneur',   category: 'mariage' as Category },
  { src: '/images/gallery/pexels-bwalya-marcel-ngosa-2381292-13605942.jpg', alt: 'Mariée élégante en plein air', category: 'mariage' as Category },
  { src: '/images/gallery/téléchargement (22).jpg',       alt: 'Salle de réception rose et or',       category: 'mariage' as Category },
  { src: '/images/gallery/téléchargement (23).jpg',       alt: 'Cortège en robes bleues',             category: 'mariage' as Category },
  { src: '/images/gallery/téléchargement (24).jpg',       alt: 'Table de mariage sage et blanc',      category: 'mariage' as Category },
  { src: '/images/gallery/téléchargement (25).jpg',       alt: 'Arche florale blanc et vert',         category: 'mariage' as Category },
  { src: '/images/gallery/téléchargement (26).jpg',       alt: 'Arche circulaire bordeaux',           category: 'mariage' as Category },
  { src: '/images/gallery/téléchargement (27).jpg',       alt: 'Table de mariage bordeaux et or',     category: 'mariage' as Category },
  { src: '/images/gallery/téléchargement (28).jpg',       alt: 'Table d\'honneur',                    category: 'mariage' as Category },
  { src: '/images/gallery/téléchargement (35).jpg',       alt: 'Arche nuptiale en plein air',         category: 'mariage' as Category },
  { src: '/images/gallery/téléchargement (36).jpg',       alt: 'Allée de cérémonie',                  category: 'mariage' as Category },
  { src: '/images/gallery/Déco Chaise Mariage _ 20 Idées Incroyables !.jpg', alt: 'Décoration chaises mariage', category: 'mariage' as Category },
  { src: '/images/gallery/happiness_home_services_01weddingplanner.jpg', alt: 'Wedding planning',     category: 'mariage' as Category },
  { src: '/images/gallery/happiness_mariages_01d.jpg',    alt: 'Mariage élégant',                     category: 'mariage' as Category },
  { src: '/images/gallery/Svadobný stôl.jpg',             alt: 'Table de mariage',                    category: 'mariage' as Category },
  // ── Anniversaire ───────────────────────────────────────────────
  { src: '/images/gallery/anniversaire/anniversaire-1.jpg', alt: 'Fête d\'anniversaire élégante',    category: 'anniversaire' as Category },
  { src: '/images/gallery/anniversaire/anniversaire-2.jpg', alt: 'Gâteau d\'anniversaire design',    category: 'anniversaire' as Category },
  { src: '/images/gallery/anniversaire/anniversaire-3.jpg', alt: 'Décoration anniversaire festive',  category: 'anniversaire' as Category },
  { src: '/images/gallery/pexels-ekaterina-bolovtsova-4868768.jpg', alt: 'Anniversaire en famille',  category: 'anniversaire' as Category },
  { src: '/images/gallery/pexels-pavel-danilyuk-7180243.jpg', alt: 'Fête d\'anniversaire bébé',      category: 'anniversaire' as Category },
  { src: '/images/gallery/pexels-pnw-prod-7328324.jpg',   alt: 'Gâteau d\'anniversaire',             category: 'anniversaire' as Category },
  { src: '/images/gallery/tiaatoh on IG Grad photoshoot ideas.jpg', alt: 'Remise de diplôme',        category: 'anniversaire' as Category },
  { src: '/images/gallery/happiness_private event_01a.jpg', alt: 'Événement privé festif',           category: 'anniversaire' as Category },
  // ── Buffet / Traiteur ──────────────────────────────────────────
  { src: '/images/gallery/buffet/buffet-1.jpg',           alt: 'Buffet varié et abondant',            category: 'buffet' as Category },
  { src: '/images/gallery/buffet/buffet-2.jpg',           alt: 'Desserts et fruits frais',            category: 'buffet' as Category },
  { src: '/images/gallery/buffet/buffet-3.jpg',           alt: 'Service traiteur professionnel',      category: 'buffet' as Category },
  { src: '/images/gallery/63bc0b8f-99c3-4741-a5fe-5a91d5b2bc94.png', alt: 'Chef cuisinière',         category: 'buffet' as Category },
  { src: '/images/gallery/téléchargement (37).jpg',       alt: 'Restaurant privatisé',                category: 'buffet' as Category },
  { src: '/images/gallery/téléchargement (38).jpg',       alt: 'Buffet chaud varié',                  category: 'buffet' as Category },
  { src: '/images/gallery/téléchargement (39).jpg',       alt: 'Buffet traiteur',                     category: 'buffet' as Category },
  { src: '/images/gallery/pexels-sejio402-34902495.jpg',  alt: 'Cocktails & boissons',                category: 'buffet' as Category },
  { src: '/images/gallery/10 Washington Buffets Locals Love For Variety And___.jpg', alt: 'Buffet abondant', category: 'buffet' as Category },
  { src: '/images/gallery/20 Refreshing Fruit Dessert Recipes for Summer Bliss.jpg', alt: 'Desserts fruités', category: 'buffet' as Category },
  { src: '/images/gallery/Download AI generated banquet catering in san diego county, mecca food services for free.jpg', alt: 'Service banquet', category: 'buffet' as Category },
  { src: '/images/gallery/Female chef with tray of food in hand_ isolated on white _ Premium Photo.jpg', alt: 'Chef professionnelle', category: 'buffet' as Category },
  { src: '/images/gallery/Luxury Hotel Banquet Thick Satin Dining.jpg', alt: 'Banquet de luxe',       category: 'buffet' as Category },
  { src: '/images/gallery/Palestras _ Workshop _ The Factoy Buffet.jpg', alt: 'Workshop & buffet',    category: 'buffet' as Category },
  { src: '/images/gallery/Petits déjeuners et pauses café traiteur livrés en entreprise.jpg', alt: 'Petit-déjeuner traiteur', category: 'buffet' as Category },
  { src: '/images/gallery/Séminaire et petit-déjeuner.jpg', alt: 'Séminaire & restauration',          category: 'buffet' as Category },
  // ── Décoration ─────────────────────────────────────────────────
  { src: '/images/gallery/decoration/decoration-1.jpg',   alt: 'Décoration événementielle',           category: 'decoration' as Category },
  { src: '/images/gallery/decoration/decoration-2.jpg',   alt: 'Salle décorée avec soin',             category: 'decoration' as Category },
  { src: '/images/gallery/decoration/decoration-3.jpg',   alt: 'Ambiance lumineuse et dorée',         category: 'decoration' as Category },
  { src: '/images/gallery/08_4.jpg',                      alt: 'Table de gala aux chandelles',        category: 'decoration' as Category },
  { src: '/images/gallery/09_6.jpg',                      alt: 'Centre de table safari',              category: 'decoration' as Category },
  { src: '/images/gallery/3b943364-8b81-4fd6-b5a1-4ca266be62a3.png', alt: 'Centre de table rustique', category: 'decoration' as Category },
  { src: '/images/gallery/4627c8bd-a954-4491-bdb6-fad23b8a065e.png', alt: 'Arche décorative rouge',  category: 'decoration' as Category },
  { src: '/images/gallery/pexels-jonathanborba-28931882.jpg', alt: 'Art de la table floral',          category: 'decoration' as Category },
  { src: '/images/gallery/pexels-nudethephotographer-34542756.jpg', alt: 'Table élégante',            category: 'decoration' as Category },
  { src: '/images/gallery/pexels-reneterp-14300951.jpg',  alt: 'Table automnale',                     category: 'decoration' as Category },
  { src: '/images/gallery/happiness_ambiance-deco_01d.jpg', alt: 'Ambiance décorative',              category: 'decoration' as Category },
  { src: '/images/gallery/happiness_ambiance-deco_02b.jpg', alt: 'Décoration florale',               category: 'decoration' as Category },
  { src: '/images/gallery/happiness_deco_518x569.jpg',    alt: 'Décoration scénique',                 category: 'decoration' as Category },
  { src: '/images/gallery/happiness_decoration_398x283b.jpg', alt: 'Décoration raffinée',            category: 'decoration' as Category },
  { src: '/images/gallery/Simple tent styling 0758877828.jpg', alt: 'Décoration tente',              category: 'decoration' as Category },
  { src: '/images/gallery/Premium Polyester 108_ Round Tablecloth - White.jpg', alt: 'Linge de table blanc', category: 'decoration' as Category },
  { src: '/images/gallery/Molde De Flores En Papel O Cartulina _ Plantilla De Flor.jpg', alt: 'Fleurs décoratives', category: 'decoration' as Category },
  // ── Professionnel ──────────────────────────────────────────────
  { src: '/images/gallery/professionnel/pro-1.jpg',       alt: 'Salle de conférence Tuberose',        category: 'professionnel' as Category },
  { src: '/images/gallery/professionnel/pro-2.jpg',       alt: 'Garden Room — espace événementiel',   category: 'professionnel' as Category },
  { src: '/images/gallery/professionnel/pro-3.jpg',       alt: 'Workshop et buffet corporate',        category: 'professionnel' as Category },
  { src: '/images/gallery/Sans titre-88.png',             alt: 'Panel de discussion',                 category: 'professionnel' as Category },
  { src: '/images/gallery/Sans titre-234.png',            alt: 'Conférence internationale',           category: 'professionnel' as Category },
  { src: '/images/gallery/Beograd %23beograd %23meeting %23venue %23hyatt %23conference %23banquet %23event.jpg', alt: 'Salle de banquet hôtel', category: 'professionnel' as Category },
  { src: '/images/gallery/Corporate Meeting.jpg',         alt: 'Réunion corporate',                   category: 'professionnel' as Category },
  { src: '/images/gallery/Garden Room.jpg',               alt: 'Garden Room',                         category: 'professionnel' as Category },
  { src: '/images/gallery/Photo studio.jpg',              alt: 'Studio photo professionnel',          category: 'professionnel' as Category },
  { src: '/images/gallery/Tuberose Conference Hall.jpg',  alt: 'Salle de conférence Tuberose',        category: 'professionnel' as Category },
  { src: '/images/gallery/happines_apropos_ourservices01.jpg', alt: 'Nos services événementiels',     category: 'professionnel' as Category },
  { src: '/images/gallery/happines_apropos_ourservices02.jpg', alt: 'Organisation professionnelle',   category: 'professionnel' as Category },
  { src: '/images/gallery/happines_apropos_ourservices03.jpg', alt: 'Équipe Festa Events',            category: 'professionnel' as Category },
]

const PAGE_SIZE = 12

export function Gallery() {
  const [active, setActive] = useState<Category>('tous')
  const [visible, setVisible] = useState(PAGE_SIZE)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  const filtered = active === 'tous'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === active)

  const displayed = filtered.slice(0, visible)
  const hasMore = visible < filtered.length

  const handleFilter = useCallback((cat: Category) => {
    setActive(cat)
    setVisible(PAGE_SIZE)
  }, [])

  return (
    <main>
      <PageBanner
        img="/images/gallery/mariage/mariage-2.jpg"
        title="Notre Galerie"
        subtitle="Inspirez-vous de nos plus belles réalisations."
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Galerie' }]}
      />

      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          {/* Filtres */}
          <div
            role="tablist"
            aria-label="Filtrer par catégorie"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.625rem',
              justifyContent: 'center',
              marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            {FILTERS.map(({ key, label }) => (
              <button
                key={key}
                role="tab"
                aria-selected={active === key}
                onClick={() => handleFilter(key)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '0.625rem 1.375rem',
                  borderRadius: '100px',
                  border: active === key ? 'none' : '1.5px solid rgba(0,0,0,0.15)',
                  background: active === key
                    ? 'linear-gradient(135deg, var(--gold), var(--gold-light))'
                    : 'transparent',
                  color: active === key ? 'var(--dark)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  minHeight: '44px',
                }}
              >
                {label}
                {active === key && (
                  <span style={{ marginLeft: '0.4rem', fontSize: '0.75rem', opacity: 0.7 }}>
                    ({filtered.length})
                  </span>
                )}

              </button>
            ))}
          </div>

          {/* Grille */}
          <div
            style={{
              columns: 'auto',
              columnWidth: 'clamp(260px, 30vw, 360px)',
              columnGap: '1rem',
            }}
          >
            {displayed.map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                onClick={() => setLightbox(item)}
                style={{
                  breakInside: 'avoid',
                  marginBottom: '1rem',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  cursor: 'zoom-in',
                  position: 'relative',
                  display: 'block',
                }}
                onMouseEnter={(e) => {
                  const overlay = e.currentTarget.querySelector('.gallery-overlay') as HTMLElement
                  if (overlay) overlay.style.opacity = '1'
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement
                  if (img) img.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  const overlay = e.currentTarget.querySelector('.gallery-overlay') as HTMLElement
                  if (overlay) overlay.style.opacity = '0'
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement
                  if (img) img.style.transform = 'scale(1)'
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                />
                <div
                  className="gallery-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.45)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '1rem',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '0.9375rem',
                    color: 'var(--white)',
                    fontStyle: 'italic',
                  }}>
                    {item.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
              Aucune réalisation dans cette catégorie pour le moment.
            </div>
          )}

          {/* Voir plus / compteur */}
          {filtered.length > 0 && (
            <div style={{ textAlign: 'center', marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                {Math.min(visible, filtered.length)} / {filtered.length} photos
              </p>
              {hasMore && (
                <button
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="btn btn-outline-gold"
                >
                  Voir plus
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.92)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              cursor: 'pointer',
              zIndex: 1,
            }}
          >
            <X size={20} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '88vh',
              objectFit: 'contain',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
            }}
          />
          <p style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'rgba(255,255,255,0.6)',
            fontFamily: 'var(--font-serif)',
            fontSize: '1rem',
            fontStyle: 'italic',
            whiteSpace: 'nowrap',
          }}>
            {lightbox.alt}
          </p>
        </div>
      )}
    </main>
  )
}
