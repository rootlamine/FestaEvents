interface PageBannerProps {
  img: string
  title: string
  subtitle?: string
  breadcrumb?: Array<{ label: string; href?: string }>
  objectPosition?: string
}

export function PageBanner({ img, title, subtitle, breadcrumb, objectPosition = 'center center' }: PageBannerProps) {
  return (
    <section
      style={{
        position: 'relative',
        height: 'clamp(300px, 40vw, 520px)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Image de fond */}
      <img
        src={img}
        alt=""
        role="presentation"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition }}
      />

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 100%)',
      }} />

      {/* Ligne décorative gauche */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '4px',
        background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '80px' }}>
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav aria-label="Fil d'Ariane" style={{ marginBottom: '1.25rem' }}>
            <ol style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', listStyle: 'none', flexWrap: 'wrap' }}>
              {breadcrumb.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {idx > 0 && <span style={{ color: 'var(--gold)', opacity: 0.7 }}>›</span>}
                  {item.href ? (
                    <a href={item.href} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.06em' }}>
                      {item.label}
                    </a>
                  ) : (
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'var(--gold-light)', letterSpacing: '0.06em' }}>
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <h1
          className="heading-display"
          style={{ color: 'var(--white)', marginBottom: subtitle ? '1rem' : 0 }}
        >
          {title}
        </h1>
        {subtitle && (
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
            color: 'rgba(255,255,255,0.75)',
            maxWidth: '540px',
            lineHeight: 1.6,
          }}>
            {subtitle}
          </p>
        )}
        <span className="gold-divider" style={{ marginTop: '1.5rem' }} />
      </div>
    </section>
  )
}
